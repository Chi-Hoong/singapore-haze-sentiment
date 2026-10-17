const SENTIMENTS = ['Positive', 'Neutral / mixed', 'Negative'];
const CSV_FIELDS = [
  'date', 'sentiment', 'theme', 'evidence', 'source', 'community', 'collectionChannel', 'location',
  'textType', 'summary', 'url', 'threadUrl', 'dateBasis', 'publishedAt', 'note', 'id', 'coding',
  'channel', 'contentType', 'retrievedAt',
];

export function summarize(rows) {
  const total = rows.length;
  const negative = rows.filter((row) => row.sentiment === 'Negative').length;
  return {
    total,
    negative,
    positive: rows.filter((row) => row.sentiment === 'Positive').length,
    mixed: rows.filter((row) => row.sentiment === 'Neutral / mixed').length,
    negativeShare: total ? negative / total : null,
    firsthand: rows.filter((row) => row.evidence === 'Firsthand report').length,
    threads: new Set(rows.map((row) => row.threadUrl).filter(Boolean)).size,
  };
}

function countGroups(rows, field) {
  const groups = new Map();
  for (const row of rows) {
    const key = row[field];
    if (key == null || key === '') continue;
    if (!groups.has(key)) {
      groups.set(key, { [field]: key, Positive: 0, 'Neutral / mixed': 0, Negative: 0 });
    }
    if (SENTIMENTS.includes(row.sentiment)) groups.get(key)[row.sentiment] += 1;
  }
  return [...groups.values()];
}

export function dailyCounts(rows) {
  return countGroups(rows, 'date').sort((a, b) => a.date.localeCompare(b.date));
}

export function topicCounts(rows) {
  return countGroups(rows, 'theme')
    .map((group) => ({
      ...group,
      total: group.Positive + group['Neutral / mixed'] + group.Negative,
    }))
    .sort((a, b) => b.total - a.total || a.theme.localeCompare(b.theme));
}

function csvCell(value) {
  const text = value == null ? '' : String(value);
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

export function csvForRows(rows) {
  return [
    CSV_FIELDS.join(','),
    ...rows.map((row) => CSV_FIELDS.map((field) => csvCell(row[field])).join(',')),
  ].join('\r\n');
}
