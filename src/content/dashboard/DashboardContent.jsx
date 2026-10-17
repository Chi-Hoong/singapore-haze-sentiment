import React from 'react';
import { DataComponent, EvidenceChart, Filters, MetricCard, Section, SortableRegion, SortableItem, Button, Dialog, useDataApp } from '../../data-app-public.jsx';
import { summarize, dailyCounts, topicCounts, csvForRows } from './metrics.js';
import './haze.css';

const palette = { Negative: 'var(--negative)', Positive: 'var(--positive)', 'Neutral / mixed': 'var(--chart-8)' };
const fields = ['Positive', 'Neutral / mixed', 'Negative'];
const topicSpec = { type: 'horizontalStackedBar', x: 'theme', y: 'Positive', fields, colors: palette, showLegend: true, startAtZero: true, valueDecimals: 0 };
const dateSpec = { type: 'stackedBar', x: 'date', y: 'Positive', fields, colors: palette, showLegend: true, startAtZero: true, valueDecimals: 0 };
const dateLabel = date => date ? new Date(`${date}T12:00:00Z`).toLocaleDateString('en-SG', {day:'numeric',month:'short',timeZone:'Asia/Singapore'}) : 'Date unavailable';
const tone = sentiment => sentiment === 'Negative' ? 'negative' : sentiment === 'Positive' ? 'positive' : 'mixed';

function EvidenceText({row}) {
  return row.textType === 'Direct quote' ? <blockquote>{row.summary}</blockquote> : <p className="haze-paraphrase">{row.summary}</p>;
}
function SourceLink({row}) {
  return <a className="haze-source-link" href={row.url} target="_blank" rel="noreferrer">{row.contentType==='Video post' ? 'Open video' : row.url === row.threadUrl ? 'Open discussion' : 'Open comment'} <span aria-hidden="true">↗</span></a>;
}
function Empty({children}) { return <div className="haze-empty">{children || 'No feedback matches these filters.'}</div>; }
function exportCsv(rows) {
  const blob = new Blob(['\uFEFF', csvForRows(rows)], {type:'text/csv;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download='singapore-haze-mask-feedback.csv'; a.click(); setTimeout(()=>URL.revokeObjectURL(url),1000);
}

export function DashboardContent() {
  const { snapshot, queries, filters, setFilter, reviewedRows } = useDataApp();
  const rows = reviewedRows('feedback', ['id','date','posted','channel','evidence','sentiment','theme','source','community','location']);
  const allRows = snapshot.queries.feedback.rows;
  const coverage = queries.coverage?.rows ?? [];
  const capturedSources = [...new Set(allRows.map(row=>row.source))];
  const allDates = allRows.map(row=>row.date).filter(Boolean).sort();
  const stats = summarize(rows);
  const platformCount = new Set(rows.map(row=>row.source)).size;
  const topics = topicCounts(rows);
  const daily = dailyCounts(rows);
  const dailySpec = {...dateSpec, yTickCount: Math.min(5, Math.max(2, 1+Math.max(0,...daily.map(row=>fields.reduce((sum,field)=>sum+row[field],0)))))};
  const datedRows = rows.filter(row=>row.date);
  const undatedCount = rows.length-datedRows.length;
  const reports = rows.filter(r=>r.evidence === 'Firsthand report').sort((a,b)=>(b.date || '').localeCompare(a.date || ''));
  const context = queries.programme?.rows ?? [];
  const [search, setSearch] = React.useState('');
  const [showAll, setShowAll] = React.useState(false);
  const [showAllSources, setShowAllSources] = React.useState(false);
  const shownCoverage = showAllSources ? coverage : coverage.filter(row=>row.captured>0);
  const [detail,setDetail] = React.useState(null);
  const [methodOpen,setMethodOpen] = React.useState(false);
  const filteredFeed = [...rows].filter(r=>[r.summary,r.theme,r.source,r.community,r.evidence,r.contentType].join(' ').toLowerCase().includes(search.toLowerCase())).sort((a,b)=>(b.date || '').localeCompare(a.date || '') || a.id.localeCompare(b.id));
  const shownFeed = showAll ? filteredFeed : filteredFeed.slice(0,6);
  const updated = new Date(snapshot.generatedAt).toLocaleString('en-SG',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Singapore'});
  const actions = field => ({row}) => [{label:'View matching feedback',onSelect:()=>{setFilter(field,row[field]); document.getElementById('feedback-list')?.scrollIntoView({behavior:'smooth',block:'start'});}}];

  return <div className="haze-page">
    <div className="haze-context-bar">
      <div><span className="haze-status-dot"/> Public web snapshot <span className="haze-separator">/</span> <span>Collected {updated} SGT</span></div>
      <a href="https://www.gowhere.gov.sg/hazemask" target="_blank" rel="noreferrer">Official mask locator ↗</a>
    </div>
    <div className="haze-scope-note"><strong>Government N95 vending programme.</strong> Public forum and social-media feedback on the machines and wider collection rollout. AI-assisted labels; this search sample is not representative of Singapore residents. <button onClick={()=>setMethodOpen(true)}>Coverage & method</button></div>
    <Filters sticky filters={snapshot.filters ?? []} queries={queries} values={filters} onChange={setFilter} />
    <SortableRegion id="haze:summary" variant="canvas" spacing="standard" rows={[{id:'haze:metrics',kind:'metrics',items:['mentions','negative-share','firsthand'] }]}>
      <SortableItem id="mentions" kind="metric" label="Collected mentions" span={4}>
        <MetricCard id="mentions" queryId="feedback" title="Collected mentions" value={stats.total} displayRows={[{mentions:stats.total}]} sourceRows={rows}><div className="haze-metric-note">{platformCount} {platformCount===1?'platform':'platforms'} · {stats.threads} {stats.threads===1?'discussion':'discussions'} · posts and comments, not people</div></MetricCard>
      </SortableItem>
      <SortableItem id="negative-share" kind="metric" label="Negative share" span={4}>
        <MetricCard id="negative-share" queryId="feedback" title="Negative share" value={stats.negativeShare == null ? '—' : `${Math.round(stats.negativeShare*100)}%`} displayRows={[{negative:stats.negative,total:stats.total,negativeShare:stats.negativeShare}]} sourceRows={rows} description="Negative mentions divided by all selected posts and comments, including neutral / mixed. A share of this sample only."><div className="haze-metric-note"><span className="haze-mini-dot negative"/>{stats.negative} negative <span className="haze-mini-dot mixed"/>{stats.mixed} neutral / mixed <span className="haze-mini-dot positive"/>{stats.positive} positive</div></MetricCard>
      </SortableItem>
      <SortableItem id="firsthand" kind="metric" label="Firsthand reports" span={4}>
        <MetricCard id="firsthand" queryId="feedback" title="Firsthand reports" value={stats.firsthand} displayRows={[{firsthand:stats.firsthand}]} sourceRows={rows}><div className="haze-metric-note">{reports.filter(row=>row.collectionChannel==='Vending machine').length} machine · {reports.filter(row=>row.collectionChannel==='Community Club').length} CC · {reports.filter(row=>row.collectionChannel==='Unspecified').length} unspecified · unverified</div></MetricCard>
      </SortableItem>
    </SortableRegion>

    <Section id="collection-experiences-heading" title="Collection experiences" spacing="after-metrics">
      <DataComponent id="collection-reports" queryId="feedback" kind="table" title="Firsthand collection reports" variant="card" sourceRows={reports} displayRows={reports} description="Self-reported experiences, including the wider distribution programme. Community Club and unspecified-channel collections do not establish vending-machine success. No operational claim has been independently verified.">
        {reports.length ? <div className="haze-report-grid" data-reviewed-rows>{reports.map(row=><article key={row.id} className="haze-report">
          <div className="haze-report-top"><span className={`haze-pill ${tone(row.sentiment)}`}>{row.collectionChannel}</span><span>{dateLabel(row.date)} · {row.source}</span></div>
          <EvidenceText row={row}/>
          <div className="haze-report-foot"><span>{row.location === 'Not specified' ? 'Location not specified' : row.location} · unverified</span><SourceLink row={row}/></div>
        </article>)}</div> : <Empty>No firsthand reports in this selection. Adjust the evidence or topic filters to explore other feedback.</Empty>}
      </DataComponent>
    </Section>

    <Section id="discussion-patterns-heading" title="What the discussion is about" spacing="section">
      <SortableRegion id="haze:charts" variant="canvas" spacing="standard" rows={[{id:'haze:patterns',items:['topics','dates']}]}>
        <SortableItem id="topics" label="Sentiment by topic" kind="chart" span={7}>
          <EvidenceChart id="topics" queryId="feedback" title="Sentiment by topic" variant="card" spec={topicSpec} rows={topics} sourceRows={rows} height={340} chartOptions={{getMarkActions:actions('theme')}} description="One primary topic per selected post or comment. Bars count mentions, not incidents."><p className="haze-chart-note">One primary topic per mention. Select a bar to inspect the feedback.</p></EvidenceChart>
        </SortableItem>
        <SortableItem id="dates" label="Collected mentions by date" kind="chart" span={5}>
          <EvidenceChart id="dates" queryId="feedback" title="Collected mentions by date" variant="card" spec={dailySpec} rows={daily} sourceRows={datedRows} height={340} chartOptions={{getMarkActions:actions('date')}} description="Only mentions with a verified calendar date are plotted. Relative-only dates are excluded. Missing dates are not zero online activity; this is not an estimate of platform-wide discussion volume."><p className="haze-chart-note">{undatedCount ? `${undatedCount} mentions have no exact date and are excluded here. ` : ''}Search coverage varies by day; counts do not establish a public-opinion trend.</p></EvidenceChart>
        </SortableItem>
      </SortableRegion>
    </Section>

    <Section id="coverage-heading" title="Where we searched" spacing="section">
      <DataComponent id="source-coverage" queryId="coverage" title="Forum & social-source coverage" kind="table" variant="card" sourceRows={coverage} displayRows={shownCoverage} description="Whole-snapshot research coverage, independent of page filters. Captured counts are selected records, not total online activity. A zero means no eligible feedback were verified in this search.">
        <p className="haze-coverage-intro">{allRows.length} selected posts and comments from {capturedSources.length} platforms. Counts below describe the full snapshot; page filters apply to the sentiment analysis.</p>
        <div className="haze-coverage-table" data-reviewed-rows><table>
          <thead><tr><th>Source</th><th>Captured</th><th>Search outcome</th><th>Scope & limitations</th></tr></thead>
          <tbody>{shownCoverage.map(row=><tr key={row.platform}><th scope="row">{row.captured ? <button className="haze-platform-button" onClick={()=>setFilter('source',row.platform)} aria-label={`Filter to ${row.platform}`}>{row.platform} ↗</button> : row.platform}</th><td>{row.captured}</td><td><span className={`haze-coverage-status ${row.captured?'captured':''}`}>{row.status}</span></td><td>{row.detail}</td></tr>)}</tbody>
        </table></div>
        <div className="haze-coverage-footer"><p className="haze-chart-note">{coverage.length-capturedSources.length} other sources searched; no eligible feedback verified. Search indexes and public access are incomplete. Zero captured does not mean no discussion.</p><Button onClick={()=>setShowAllSources(!showAllSources)}>{showAllSources?'Show contributing sources':`Show all ${coverage.length} searched sources`}</Button></div>
      </DataComponent>
    </Section>

    <Section id="feedback-heading" title="Read the feedback" spacing="section">
      <div id="feedback-list" className="haze-feed-anchor">
        <DataComponent id="feedback-records" queryId="feedback" title="Source-linked feedback" kind="table" variant="card" className="haze-feedback-card" sourceRows={filteredFeed} displayRows={filteredFeed} scopeFilters={search?[{label:'Feedback text search',value:search}]:[]} headerControls={<div className="haze-feed-controls"><input type="search" aria-label="Search feedback text" placeholder="Search these comments…" value={search} onChange={e=>{setSearch(e.target.value);setShowAll(false);}}/><Button disabled={!filteredFeed.length} onClick={()=>exportCsv(filteredFeed)}>Export CSV</Button></div>}>
          <div className="haze-feed-count" role="status">{filteredFeed.length} posts and comments in this list · labels describe sentiment toward the programme</div>
          <div className="haze-feed" data-reviewed-rows>{shownFeed.length ? shownFeed.map(row=><article className="haze-feed-row" key={row.id}>
            <div className="haze-feed-meta"><span className={`haze-pill ${tone(row.sentiment)}`}>{row.sentiment}</span><time dateTime={row.date || undefined}>{dateLabel(row.date)}</time><span>{row.community}</span><span>{row.contentType}</span><span className="haze-type-label">{row.evidence}</span></div>
            <EvidenceText row={row}/>
            <div className="haze-feed-foot"><div><span className="haze-topic-tag">{row.theme}</span><span className="haze-text-type">{row.textType}</span></div><div><button className="haze-detail-button" onClick={()=>setDetail(row)}>Review label</button><SourceLink row={row}/></div></div>
          </article>) : <Empty>No feedback matches this search. Clear the text or reset the page filters.</Empty>}</div>
          {filteredFeed.length>6 && <div className="haze-load-more"><Button onClick={()=>setShowAll(!showAll)}>{showAll?'Show fewer':`Show all ${filteredFeed.length} mentions`}</Button></div>}
        </DataComponent>
      </div>
    </Section>

    <Section id="programme-heading" title="Programme context" spacing="section">
      <DataComponent id="programme-context" queryId="programme" title="Official rollout timeline" kind="narrative" variant="card" sourceRows={context} displayRows={context}>
        <div className="haze-timeline" data-reviewed-rows>{context.map(row=><article key={row.date}><time dateTime={row.date}>{dateLabel(row.date)}</time><h3>{row.event}</h3><p>{row.detail}</p><a href={row.url} target="_blank" rel="noreferrer">Official source ↗</a></article>)}</div>
      </DataComponent>
    </Section>
    <footer className="haze-footer">Public comments are claims and opinions. Machine-level stock, outages and successful collections are not measured here. <button onClick={()=>setMethodOpen(true)}>View coverage</button></footer>

    <Dialog open={Boolean(detail)} title="Review feedback classification" onClose={()=>setDetail(null)} className="haze-dialog">
      {detail && <div><div className="haze-detail-meta"><span className={`haze-pill ${tone(detail.sentiment)}`}>{detail.sentiment}</span><span>{dateLabel(detail.date)} · {detail.community}</span></div><EvidenceText row={detail}/><dl><dt>Primary topic</dt><dd>{detail.theme}</dd><dt>Evidence type</dt><dd>{detail.evidence} · {detail.contentType}</dd><dt>Collection channel</dt><dd>{detail.collectionChannel}</dd><dt>Location</dt><dd>{detail.location}{detail.locationContext && detail.locationContext !=='Not specified' ? `; ${detail.locationContext}, not a verified machine location` : ''}</dd><dt>Classification</dt><dd>AI-assisted interpretation. Sarcasm, context and ambiguous wording can affect labels.</dd><dt>Evidence note</dt><dd>{detail.note || 'Programme reaction, not a verified operational incident.'}</dd><dt>Text & date</dt><dd>{detail.textType}. {detail.dateBasis}{detail.publishedAt ? ` (${detail.publishedAt})` : ''}</dd>{detail.retrievedAt && <><dt>Retrieved</dt><dd>{detail.retrievedAt}</dd></>}{detail.provenance && <><dt>Source review</dt><dd>{detail.provenance}</dd></>}</dl><div className="haze-dialog-links"><SourceLink row={detail}/>{detail.url !== detail.threadUrl && <a href={detail.threadUrl} target="_blank" rel="noreferrer">Open full discussion ↗</a>}</div></div>}
    </Dialog>
    <Dialog open={methodOpen} title="Coverage & method" onClose={()=>setMethodOpen(false)} className="haze-dialog">
      <p><strong>Scope:</strong> Singapore’s government N95 mask vending rollout for the October 2026 haze, including eligibility and wider collection-policy discussion. Community Club experiences are identified separately. COVID-era programmes, general haze discussion and unrelated political comments are excluded.</p>
      <p><strong>Coverage:</strong> {allRows.length} selected posts and comments across {summarize(allRows).threads} discussions on {capturedSources.join(', ')}. Verified calendar dates span {dateLabel(allDates[0])}–{dateLabel(allDates[allDates.length-1])} 2026; {allRows.length-allDates.length} mentions have no exact date. Retrieved {updated} SGT. Public search, readable original forum/social pages and indexed discussion text were reviewed. This is a purposive search sample, not an exhaustive feed or a representative survey.</p>
      <p><strong>Refresh:</strong> This dashboard contains a fetched snapshot. No continuous platform API is connected. Reddit’s unauthenticated endpoint returned HTTP 403; some social pages could not be read. The dashboard’s refresh action requests a new source review through Codex.</p>
      <p><strong>Classification:</strong> AI-assisted labels describe sentiment toward the programme. Neutral / mixed includes questions, caveats and conditional opinions. Each post or comment gets one primary topic. Votes are not weights; mentions are not unique people. Official announcements and news captions are excluded from sentiment; their public replies can qualify.</p>
      <p><strong>Rates & dates:</strong> Negative share = negative mentions ÷ all selected mentions. Empty selections show no rate. Relative-only social dates stay uncertain and do not enter the daily chart. Firsthand reports require a stated personal collection attempt; replies about an incident are not additional incidents.</p>
      <p><strong>Locations & channels:</strong> The firsthand reports do not identify a specific machine location. A CC collection or an unspecified collection channel is not evidence of vending-machine performance. No location rankings, availability estimates or operational failure rates can be derived from these records.</p>
      <p>Open a component’s source menu for the underlying rows and provenance. CSV export includes the current feedback list and its links.</p>
    </Dialog>
  </div>;
}
