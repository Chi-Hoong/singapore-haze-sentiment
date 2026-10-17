# Expanded scan — 17 October 2026

The dashboard now contains **140 distinct selected public posts/comments from 8 contributing platforms and 24 discussions**, an increase of **74** over the prior 66-mention snapshot. There are **27 machine-specific mentions** and **113 wider-rollout mentions**; each record belongs to exactly one group. There are 70 social-media mentions. 66 records have no verified exact calendar date and are excluded only from the daily chart.

The expanded pass deepened existing forum/social discussions and checked new ones. It covers the whole government haze-mask rollout, while separating explicit machine feedback from eligibility, allocation, mask-use and other collection discussion. Generic haze politics, copied news, official/publisher captions, historical COVID programmes and quoted duplicates are excluded. Public audience replies under official/publisher posts can qualify.

The dashboard offers a Feedback focus filter, a side-by-side sentiment breakdown, per-record scope explanations and CSV scope fields. Machine-specific opinions, firsthand collection reports and firsthand observations remain different evidence categories. Neither mention counts nor sentiment shares measure machine failure rates or population opinion.

## Current snapshot by platform

| Platform | Selected mentions | Vending machines | Wider rollout |
|---|---:|---:|---:|
| Reddit | 38 | 10 | 28 |
| HardwareZone | 23 | 6 | 17 |
| MyCarForum | 5 | 0 | 5 |
| Sammyboy | 4 | 1 | 3 |
| Facebook | 12 | 0 | 12 |
| Instagram | 3 | 1 | 2 |
| YouTube | 17 | 2 | 15 |
| TikTok | 38 | 7 | 31 |

**Coverage limits:** 19 platforms have been searched across the combined passes; eight contribute evidence. Native X, Threads, Xiaohongshu and Bluesky access remains limited. Ranking, visible subsets and collapsed replies prevent an exhaustive scan. Zero captured records do not imply zero discussion. The dashboard is a reviewed snapshot, not a live feed or a representative survey.

## Latest review logs

# Forum rescan — 17 October 2026

## Result and scope

Saved **29 new records** in `work/rescan-forums-feedback.json`: Reddit 22, HardwareZone 3, MyCarForum 2, Sammyboy 2. Three explicitly concern vending machines; 26 concern the wider government mask rollout. This is a manually selected, source-linked public-comment snapshot, not representative public opinion, a census, unique-person counts, incident totals, or a live feed. The search pass was bounded and does not establish that no further relevant posts exist.

The three machine records are `reddit-1x78e70-post` (NEX observer), `reddit-pgubmkn` (self-described distribution volunteer), and `hwz-160051038` (location question). Neither observation is a personally completed redemption or an independently confirmed fault. Only NEX basement is explicitly attached to the individual observation. The volunteer lists several deployment locations but does not identify a particular machine where the observed difficulties occurred.

All 29 calendar dates are now verified against exact public HTML `time` attributes, converted to Singapore time. Initial indexed-date-only checks for six Reddit allocation-thread comments were upgraded by directly opening the comments in a normal browser. `publishedAt` preserves the source timestamp. All selected text is paraphrased. No commenter names are exported.

## Actual breadth and depth

| Source | Pages/threads reviewed in this pass | New selected records | Limits |
|---|---|---:|---|
| Reddit | AskSG collection thread `1x78e70`; Singapore allocation thread `1x6bl8s`; SingaporeSpeaks AMK queue thread `1x6f5a5`; initial rollout `1x3ru7r`; missing-location `1x6bdpi`; latest deployment `1x7brix`; community-club opening `1x5m5k5`; initial task-force thread `1x1izbg` | 22 | Public indexed text plus browser-rendered comments. Some branches remain collapsed; not an exhaustive comment census. |
| HardwareZone | Re-filtered saved pages 270–540 of consolidated haze thread: 271 pages, 5,374 distinct posts, from 9 Oct 09:49 through 17 Oct 13:42 SGT. Keyword screening of original text produced 118 candidate posts. Refetched page 540 and read 13 additional posts through 17 Oct 14:22. | 3 | The 118 candidates include unrelated uses of keywords. Earlier 9 Oct content before page 270 and later updates are outside this cached window. Only a concise subset can be republished within the thread's source-summary budget. |
| MyCarForum | Filled prior scan gaps: pages 55, 58, 59, 60, 61 of haze thread. Pages 58–61 exposed 18 posts each (72 posts); page 55 also read. Combined with previous pass, pages 50–64 have been reviewed. | 2 | Original text separated from embedded quotations. Numerous general haze, weather, school and political posts excluded. |
| Sammyboy | Pages 2 and 3 of mask-task-force thread, posts #21–41 (21 additional posts). Page 1 was reviewed in prior pass. | 2 | Generic politics, personal arguments, news copies, conspiracy and medical-advice posts excluded. |
| SGtalk, SGClub, Singapore Expats, KiasuParents | Domain-constrained web searches below | 0 | No accessible, current, relevant primary programme feedback was verified. Search results are not proof of no discussion. Historical and general haze/travel matches excluded. |

HardwareZone's 13 newly published page-540 posts concern air readings, old personal mask stocks, retail availability, general health messaging and the haze-advisory webpage. None explicitly evaluates the current government mask collection programme, so none was added. Source cache: `work/hardwarezone-rescan-540.html`; extracted originals: `work/hardwarezone-rescan-newposts.json`.

## Selected source links

- [Have you collected your N95?](https://www.reddit.com/r/asksg/comments/1x78e70/have_you_collected_your_n95/) — eleven rows including the original post. Public browser verified individual timestamps and comment links. Initially rendered article nodes included deleted/empty and nested content; the UI total is not used as a reviewed-comment count.
- [Two-mask allocation discussion](https://www.reddit.com/r/singapore/comments/1x6bl8s/ysk_govt_is_giving_out_just_two_one_time_use/) — six rows. Direct links to `pgubmkn`, `pgu5u8i`, `pgu1f05` opened successfully; remaining selected timestamp attributes visible in the resulting rendered thread.
- [AMK queue discussion](https://www.reddit.com/r/singaporespeaks/comments/1x6f5a5/long_queues_in_amk_for_free_n95_masks/) — five new rows, excluding two previously retained comments. Browser verified exact timestamps.
- [HardwareZone consolidated haze thread](https://forums.hardwarezone.com.sg/threads/consolidated-el-nino-and-haze-discussions.6117454/) — three extra rows on pages 436, 450 and 453. Post links and exact dates in cached public HTML; original message text excludes `blockquote` content.
- [MyCarForum haze thread](https://www.mycarforum.com/forums/topic/2719412-haze-updates-2021-23-trilogy-and-beyond/) — two new rows on pages 58 and 59. Stable `findComment` URLs and exact timestamps exposed in public DOM.
- [Sammyboy mask-task-force thread](https://www.sammyboy.com/threads/haze-task-force-n95-masks-will-be-distributed-to-vulnerable-singaporeans-when-psi-hits-unhealthy-range.435131/) — two new rows on page 2. Public post IDs and exact HTML timestamps verified.

## Search log

These queries were actually issued through web search, with domain filters where stated. Repeated or empty-result searches are retained to document coverage limitations.

1. `site:reddit.com Singapore "haze" "vending" "2026"`
2. `site:forums.hardwarezone.com.sg "haze" "vending" "October" "2026"`
3. `site:sgtalk.net "masks" "2026" haze`
4. `site:mycarforum.com "N95" "2026"`
5. `site:reddit.com "N95" "October" "2026" "collect"`
6. `site:reddit.com "haze" "masks" "eligible" "2026"`
7. `site:reddit.com "haze" "masks" "two" "2026"`
8. `site:reddit.com "haze" "machine" "2026" -March -May -September`
9. `site:mycarforum.com/forums/topic/2719412 "vending"`
10. `site:sammyboy.com "haze" "N95" "2026" "masks"`
11. `site:sgtalk.net "N95" "2026"`
12. `site:forums.hardwarezone.com.sg "masks" "vending" "2026" -bcrs -beverage -meal`
13. `haze N95 mask vending October 2026`, domain `sgtalk.net`
14. Same query, domain `sammyboy.com`
15. Same query, domain `forums.hardwarezone.com.sg`
16. `site:reddit.com "collect" "mask" "October 17 2026"`
17. `site:reddit.com "vending" "mask" "October 15 2026"`
18. `site:reddit.com "CHAS" "haze" "2026"`
19. `site:sgtalk.net "haze" "mask"`
20. `Singapore haze collect N95 vending Reddit October 2026`
21. `site:reddit.com/r/singapore "masks" "community clubs"`
22. `site:reddit.com/r/asksg "N95"`
23. `site:reddit.com/r/SingaporeRaw "N95"`
24. `https://www.reddit.com/r/singapore/comments/1x5m5k5/`
25. `site:reddit.com/r/singapore/comments/1x1izbg "eligible"`
26. `site:sgtalk.net haze masks October`
27. `haze N95 masks vending collection`, domain `sgtalk.net`
28. Same query, domain `forums.sgclub.com`
29. `haze N95 masks October 2026 collection`, domain `forum.singaporeexpats.com`
30. Same query, domain `forum.kiasuparents.com`

Reddit threads `1x4ffb9` and `1x4fgft` concern a separate NTUC worker distribution programme and were excluded from the core government-rollout sample. Threads `1x71b64`, `1x6o5d2`, `1x5jymi` and `1x5ihl2` primarily concern mask efficacy, retail buying or general school masking and were not treated as programme feedback. Historical KiasuParents material and SGtalk COVID-era mask discussions were excluded despite recent indexing/crawl dates.

## Deduplication and interpretation audit

- Compared all new IDs and durable post/comment URLs with the existing 66 rows. No exact new-vs-existing ID or durable-link duplicates. Reactions with similar themes are different posts, not necessarily different people.
- The AMK thread's existing mailing complaint is comment `pgurldr` (`2026-10-15T07:28:14.156Z`), and existing indoor-machine clarification is `pguy61i` (`2026-10-15T08:22:56.983Z`). Neither was added again.
- The SingaporeRaw missing-machine author's further replies were treated as details of the same report, not additional independent incidents.
- A second comment by the same distribution volunteer about CC uncertainty was not added. An additional response by the author questioning the two-mask allocation in the AskSG thread was also not counted again.
- HardwareZone and MyCarForum repeated quoted posts were excluded from the reply author's selected text. Copied announcements/news were not counted as public feedback.
- Existing scope audit found two initial-rollout rows requiring machine scope: `pfdtgnq` explicitly discusses machine activation/access; `pfdxqwg` explicitly predicts vending-machine resale abuse. Root has already updated both. Other existing 13 machine classifications are defensible. `hwz-160049703` and `hwz-160050711` include CC context but also explicitly discuss machines. No additional obvious scope errors found in the saved 66 rows.
- New explicit CC context: `reddit-ph255j0` (successful assisted collection), `reddit-pgurqwx` (unverified suggestion of no queues at nearby CCs), `hwz-160050922` (successful two-mask collection). Staff assistance in `reddit-ph22tau` does not establish a collection channel. Work-hour barrier `hwz-160049791` also does not explicitly identify its collection channel.
- `reddit-ph2ezap` is negative because the original conditionally disparages a two-mask allocation for the entire haze season. Its summary now preserves that criticism, rather than reading as a neutral question.
- `reddit-pgu3c52` and `reddit-pgu2fcn` defend stock suitability/use; mapping them to existing `Mask usability` taxonomy is reasonable. Other taxonomy normalization is left to root; no app files edited here.

## Publication and measurement limits

Paraphrases are intentionally short. Existing plus new summary/note words per canonical source thread: HardwareZone 198, MyCarForum 183, Sammyboy task-force 74, Reddit AskSG 117, allocation 61, AMK 98. These are text-budget checks, not coverage or representativeness statistics. Do not extend those paraphrases with detailed copied source text without checking source limits.

Sentiment is an analyst interpretation, not an author-provided rating. Questions, satire and mixed statements are inherently ambiguous. Do not interpret the selected balance as the population balance. Firsthand labels describe self-reported experience and are not independently verified. Reports of eligibility, hours, stock or mask use are public claims, not official guidance.

Web retrieval sometimes returned cache misses for Reddit and Sammyboy. Normal public Chrome pages supplied the relevant visible text and dates. No login, CAPTCHA, access-control bypass or private content was used. Dynamic sorting, deleted/hidden comments and incomplete indexing limit reproducibility. All source links may change after this snapshot.


---

# Expanded Facebook and Instagram public-browser scan

Completed 2026-10-17 (Asia/Singapore), approximately 06:23–06:30 UTC. Scope: Singapore's October 2026 government haze-mask rollout, with explicit separation of machine-specific feedback from wider distribution feedback. Reviewed current dashboard data and prior 11 social records before deduplication. No dashboard files edited.

## New evidence

`rescan-meta-feedback.json` contains four new, distinct comments:

- Instagram: two comments from a new gov.sg mask-distribution discussion. One explicit own collection report concerns masks collected at Toa Payoh MRT vending machines; classified Vending machines and Firsthand report. The other asks about reuse; classified Wider rollout and Information request.
- Facebook: one newly reviewed top-level allocation/travel-cost criticism and one newly expanded mask-strap reply in the existing Dinesh Vasu Dash discussion. Both are Wider rollout and do not establish firsthand collection.
- Three Negative and one Neutral / mixed. Sentiment reflects the comment's expressed issue, not an independently verified operational failure. No newly verified original citizen post was found; these are audience comments under official posts.

Dates: Instagram rendered time elements supplied `2026-10-16T13:42:57.000Z` and `2026-10-16T09:31:31.000Z` (both October 16 in Singapore). Retrieval was `2026-10-17T06:26:21Z`. Facebook showed only `2d` and `21h`; dates remain null, with dateBasis and retrieval `2026-10-17T06:29:58Z`. Comment/reply permalinks were observed in rendered DOM. No personal author names are retained.

The two Facebook additions bring that thread's selected paraphrase summary+note text to 136 words including the previous ten records. The two new Instagram rows total 33 summary+note words. No direct quotations are included in the new dataset. The expiry concern is a collector's report, not a verified stock-quality finding or medical guidance.

## Exact new searches: 8 queries

Batch 1 (empty pooled results):

1. `site:facebook.com "haze" "N95" "October" "2026"`
2. `site:instagram.com "haze" "N95" "2026"`
3. `site:facebook.com "N95" "vending machines" "2026"`
4. `site:instagram.com "mask" "vending" "Singapore" "2026"`

Batch 2 (pooled results included current Singapore news, old/unrelated overseas content, and official-source leads; no indexed eligible social comment text):

5. `"haze" "masks" "2026" "facebook.com" "community"`
6. `"haze" "mask distribution" "Facebook" "October 2026"`
7. `"haze" "N95" "Instagram" "October 2026"`
8. `"N95" "Siglap" "facebook" "2026"`

Relevant discovery articles opened:

- https://mustsharenews.com/grace-fu-indonesia-haze/amp/ — supplied a Grace Fu Facebook photo link. News caption and official statements excluded from sentiment.
- https://mustsharenews.com/haze-very-high-n95-mask/amp/ — official rollout context and existing Dinesh announcement lead. No new user feedback captured from this article.
- Direct web-tool click to https://www.facebook.com/photo.php?fbid=1702124534606608&set=pb.100044272337460.-2207520000&type=3 failed with cache miss; the separate normal browser view succeeded and showed no comments.

## Instagram browser review bounds

Public grid review did not mean every linked post/comment was opened:

1. https://www.instagram.com/channelnewsasia/ — twelve public grid items reviewed (October 16 news). No specifically identified mask-distribution item in that visible grid. Show more posts led to a signup/login requirement; stopped.
2. https://www.instagram.com/leehsienloong/ — twelve grid links exposed, including October 14 post https://www.instagram.com/leehsienloong/p/DeegAU3GXnb/. Clicking that post led to a See this post signup/login prompt; its comments were not read and were not counted.
3. https://www.instagram.com/asiaonecom/ — twelve public grid items reviewed (including pinned older posts and October 16 news). No specifically identified mask-distribution item in that visible grid. No full historical-feed claim.
4. https://www.instagram.com/gov.sg/ — twelve public grid items exposed. Selected the October 15 distribution graphic at https://www.instagram.com/gov.sg/p/DeinTiNE0nq/. Two public user comments were visible and both qualify. Load more comments produced a signup requirement; stopped. The displayed engagement count was not treated as a reviewed-comment count.
5. https://www.instagram.com/nea_sg/p/Degdtg_CaGZ/ — October 15 indoor haze protection post. Two visible comments concerned general health policy and electricity costs, not mask distribution; both excluded.
6. https://www.instagram.com/nea_sg/p/DeiXIOnkzIK/ — October 15 beverage-container-return content. One visible comment was unrelated to masks and excluded.
7. https://www.instagram.com/msesingapore/reel/Dei0NNvtKaB/ — climate-adaptation exhibition post. Two visible comments were unrelated to the mask rollout and excluded. Its related-post grid supplied the GovTech mask-locator post link below.
8. https://www.instagram.com/govtechsg/p/DegXy6HgXAE/ — actual October 15 HazeMaskGoWhere/vending-machine announcement. One visible comment appealed for firefighting help in Kalimantan; excluded as unrelated to the Singapore mask rollout. The official caption itself is not sentiment.

Across the five successfully opened Instagram post/reel comment sections above, eight public comment objects were actually reviewed: two eligible and six excluded. This is not the full platform or account comment population.

## Facebook browser review bounds

1. https://www.facebook.com/photo.php?fbid=1702124534606608&set=pb.100044272337460.-2207520000&type=3 — public Grace Fu photo linked by the news article. Browser explicitly displayed No comments yet. This is a finding for that photo only.
2. https://www.facebook.com/gracefu.hy — initial optional invitation dismissed through Close. Three recent feed entries became visible: a general haze response update, an air-quality-indicator explainer, and a Singapore–Brunei meeting post. The visible general-policy comment and emoji-only response were not mask-rollout feedback. Further scrolling reached a non-dismissible login requirement; stopped before reaching the sought earlier distribution discussion.
3. https://www.facebook.com/gov.sg — initial optional invitation dismissed through Close. Three recent feed entries became visible: firefighting/enforcement, flexible work, and worker protection. A visible flexible-work response was unrelated and excluded. Further scrolling reached a non-dismissible login requirement; stopped.
4. Existing discussion entry: https://www.facebook.com/dinesh.vasudash/posts/pfbid02cuiyqZgnx8g25N8utPTJSzz5YTEz9Uoay7mVBxxTH3TMsH2FgP5X2wmUU8uLHvS4l — two View more comments expansions exposed 25 top-level comment objects under Most relevant. Initial displayed pagination mentioned 28; actual DOM count was 25, and the final interface stated that some comments may be filtered out. Do not describe this as all comments. Twenty were re-reviewed from the prior pass and five were newly exposed, of which one allocation/travel-cost comment was selected. One mask-usability reply was then expanded and selected. Other newly exposed material was generic thanks, image-only or GIF-only.
5. Observed canonical parent anchor for those comments: https://www.facebook.com/dinesh.vasudash/posts/pfbid0ZBvndFnhHV3W1EvXrXR51ujnJLQxzSDaWnQG7AbiXRBuhj42LS1jB48R63haB7pxl. The reply link preserves both comment_id and reply_comment_id. Existing ten records from this discussion were not duplicated.

The attempt broadened Facebook source discovery and direct profile checks, but no eligible comment from a new Facebook thread was verified in this pass. That limitation remains explicit.

## Method limits

Public Chrome browser views and rendered DOM only. Optional dismissible invitations were closed through the visible control; mandatory signup/login screens ended that path. No login, credential entry, comment submission, reaction, private group access, CAPTCHA handling or access-control bypass. No account history or private content was inspected.

This is a bounded purposive scan, with default relevance ordering and login-limited history. The selected records cannot establish representative sentiment proportions, uniqueness of people, complete coverage, independent confirmation of reported mask expiry, or the operational status of a vending machine. Feedback scope follows actual comment text: general eligibility, allocation and mask-design discussion remains Wider rollout even when the surrounding post mentions vending machines.


---

# Additional YouTube and TikTok review

Reviewed 17 October 2026, initial pass approximately 14:24–14:31 Singapore time; deeper public-comment follow-up approximately 14:32–14:36 SGT. Scope: October 2026 government haze-mask rollout. Existing dashboard records and `work/video-social-coverage.md` were read first. This pass adds 41 verified records from five previously unused source videos: seven YouTube comments, thirty-three TikTok comments and one TikTok creator post. No prior ID is repeated.

## Scope and interpretation

Eight additions are labelled `Vending machines`; thirty-three are `Wider rollout`. Eligibility, allocation, delivery requests and general queues remain wider-rollout feedback unless the text explicitly references a machine or the interaction is clearly about a machine part. A collection point at a transport interchange is not automatically classified as a machine. The retrieval-door question is machine-specific because it refers to the door shown in the creator's machine video. Every row has `scopeBasis`.

Three additions are self-reported experiences: an unspecified listed location not ready, a transport-hub machine absent despite website availability, and failed machine collection for children followed by direction to a CC. They are unverified reports, not proven operational incidents. The first remains wider rollout because the commenter does not specify a machine. The latter two explicitly concern machines. The creator post is a neutral installation observation supported by visible footage, not inferred satisfaction or successful collection.

All dates remain null: only relative timestamps were visible. Each row preserves its exact displayed label and the retrieval date. There are six Positive, eighteen Negative and seventeen Neutral / mixed analyst labels. No commenter names or raw comment bodies are stored in the additions. Publisher captions, general haze politics, school closures, medical claims, retail advertising and personal attacks are excluded.

## Reviewed sources

| Primary source | Directly reviewed scope | New records |
|---|---|---:|
| [CNA YouTube readiness Short](https://www.youtube.com/shorts/kHKisixeU-k) | 102 displayed comments. Read 20 loaded comments in Top sort, then 20 in Newest sort, with overlap. Dates ranged from 4–6 days ago. Replies not expanded. | 4 |
| [CNA YouTube earlier-distribution Short](https://www.youtube.com/shorts/z2vBjSbaX8Q) | 37 displayed comments. Read 20 loaded top-level comments. Retained three directly relevant collection reports/suggestions. | 3 |
| [TikTok Ang Mo Kio queue video](https://www.tiktok.com/@thai_buzz2026/video/7696769850689047829) | 126 displayed comments. Read first 20 top-level comments and expanded the CHAS Green reply thread; three replies loaded from nine advertised. Replies were explanatory, emoji-only or continuations and added no record. Creator caption is descriptive and was not counted. | 6 |
| [CNA TikTok machine-preparation video](https://www.tiktok.com/@channelnewsasia/video/7694940490482994438) | 376 displayed comments. Initial 20 top-level comments, then ordinary panel scrolling loaded and exposed 59 further distinct top-level comments: 79 read in total. Replies not expanded. Retained 23 selected relevant comments overall. Publisher caption excluded. | 23 |
| [TikTok Bukit Panjang machine creator video](https://www.tiktok.com/@runnerkao/video/7696712095622008070) | 118 displayed comments. Read first 20 top-level comments; retained four. Direct creator caption and visible machine footage support one neutral creator observation. Complete audio was not transcribed. | 5 |

Displayed totals are interface counts at review time, not counts of comments fully inspected. Ranking, pagination and reply expansion limit coverage. This is a broader bounded review, not an exhaustive platform scan or representative sentiment sample.

## Discovery and navigation log

No new search-engine query was necessary in this pass. Two YouTube URLs and two TikTok URLs had been directly observed in the preceding search pass; they were opened as new detail sources. Exact prior discovery queries were `singapore haze n95 vending 2026` on YouTube and `singapore haze N95 vending` on TikTok. This pass followed those candidate links, opened public comment panes and changed the first YouTube source from Top to Newest.

The Bukit Panjang creator source was discovered through the visible related-video link on the CNA TikTok readiness page. Its caption named the location and machine; a screenshot of the public video verified machine footage. No claims were inferred from likes, view counts or the absence of comments.

## Identifiers, deduplication and word limits

YouTube rows use observed native comment IDs and direct `lc` permalinks. In this pass, TikTok's public detail layout exposed comment text and relative labels but no native comment ID or comment permalink. Those rows therefore use `tiktok-research-…` identifiers: a SHA-256 prefix of the exact parent URL plus normalized visible comment text. These are explicitly research identifiers, not invented TikTok comment IDs. The exact parent video is the source URL. This allows deterministic text deduplication without storing commenter names. The creator post uses its native video ID.

The seven YouTube comment IDs and one TikTok video ID were checked against the existing fourteen video/social records. All five parent source videos are new to those fourteen, so the combined per-source paraphrase budget equals this pass's budget. Summary plus note word counts are 47, 58, 66, 168 and 71 respectively. No direct comment quotes are reproduced. `scopeBasis`, date provenance and this audit do not restate full source narratives.

## Deeper CNA TikTok follow-up

The requested follow-up reused the exact CNA machine-preparation URL above. No additional search query was run. Public comment-panel scrolling loaded successive batches and the rendered DOM contained 79 top-level Reply controls, with no reply thread expanded. Relative timestamps on retained additions were 2d, 3d and 6d ago; no calendar date was inferred. Nineteen selected original comments were added after the initial four; each used the same source-URL plus lowercase, whitespace-normalized text hash. These included machine instruction and cost concerns plus wider distribution questions and appreciation. General haze, private-employer supply, political remarks, unclear fragments and image-only comments were excluded. Some repetitive eligible questions were not selected: this remains a purposive sample.

The follow-up stopped after the requested additional 40–60-comment depth was met (59 additional). It did not hit an access barrier or reach the end of the source. The interface count of 376 is not a claim that 376 comments were read. No commenter identity was stored, and no machine-use success or charge was inferred from the comments.

## Access outcomes

Normal public browser access worked for all five sources. TikTok briefly displayed a loading screen before rendering normally. No login, CAPTCHA, private API, hidden state, source-code extraction or access bypass was used. No likes, replies, subscriptions or follows were submitted. A video-player control action did not receive approval; the read-only comment review continued successfully without it. The blocked web-fetch route for TikTok was not retried.

The evidence supports separate machine and wider-rollout views. It does not establish failure rates, the share of all recipients affected, or current machine stock availability.


---

# Additional social and multilingual scan — 17 October 2026

Scope: the government Singapore haze-mask rollout, 9–17 October 2026. English, Chinese and Malay discovery terms were used. No new eligible original post/comment was verified in this part of the scan. This is an access and discovery result, not evidence of absent discussion.

## Public web queries (16)

1. `Singapore haze N95 mask vending machine October 2026 site:threads.com`
2. `Singapore haze masks vending 2026 site:x.com`
3. `新加坡 烟霾 口罩 自动贩卖机 2026`
4. `新加坡 N95 免费 口罩 2026 site:xiaohongshu.com`
5. `"haze" "mask" site:threads.com/@`
6. `"N95" "Singapore" site:x.com`
7. `"haze" "masks" site:lemon8-app.com`
8. `"新加坡" "领口罩" "2026"`
9. `"haze" "N95" site:threads.net`
10. `"haze" "vending" site:twitter.com`
11. `"新加坡" "口罩" site:xiaohongshu.com/explore`
12. `"haze" "mask" site:bsky.app/profile`
13. `"新加坡" "N95" "领取" site:xhslink.com`
14. `"haze" "masks" "Singapura" "2026"`
15. `"jerebu" "pelitup" "mesin" "Singapura"`
16. `"Singapore" "mask vending" site:lemon8-app.com`

Results included current publisher reporting in English, Chinese and Malay; generic haze discussion; old Lemon8 mask tips; irrelevant products and profiles. Publisher articles and translated copies were not inserted as independent social sentiment. No identifiable original current-rollout comment was established on X, Threads, Lemon8, Xiaohongshu or Bluesky from these queries.

## Native public browser checks

- [Threads search](https://www.threads.com/search?q=Singapore%20haze%20mask): a No results region was accompanied by a sign-in/join dialog. No readable relevant post; do not infer platform-wide absence.
- [X search](https://x.com/search?q=Singapore%20haze%20mask%20since%3A2026-10-09&src=typed_query&f=live): redirected to the login onboarding page before showing results.
- [Xiaohongshu search](https://www.xiaohongshu.com/search_result?keyword=%E6%96%B0%E5%8A%A0%E5%9D%A1%20N95%20%E5%8F%A3%E7%BD%A9): page explicitly required login to view search results.
- [Bluesky search](https://bsky.app/search?q=Singapore%20haze%20mask): explicitly stated search is unavailable when logged out.

No login, account creation, access-control workaround or posting was performed. Public search-index access remains partial. These native checks improve the diagnosis of the earlier fetch errors; they do not create complete platform coverage.


---

# Historical review logs and prior snapshot

The following sections describe earlier passes. Their snapshot counts and access outcomes are historical; the current totals and latest source-specific checks above take precedence.

# Public-source research audit

Latest review: **17 October 2026, 14:13 Singapore time**. The current snapshot contains **66 selected posts and comments across 16 discussions and eight contributing platforms**. Nineteen platforms were searched. This is a purposive, unevenly sampled review, not a representative survey, exhaustive census or continuous feed.

The social-media browser follow-up found 25 additional records. It supersedes earlier search-only access gaps for Facebook, Instagram, YouTube and TikTok on the pages actually reviewed. X, Threads and Bluesky remain without qualifying verified records in this search.

| Source | Mentions | Negative | Neutral / mixed | Positive |
|---|---:|---:|---:|---:|
| Reddit | 16 | 10 | 4 | 2 |
| HardwareZone | 20 | 11 | 6 | 3 |
| MyCarForum | 3 | 2 | 1 | 0 |
| Sammyboy | 2 | 2 | 0 | 0 |
| Facebook | 10 | 6 | 2 | 2 |
| Instagram | 1 | 1 | 0 | 0 |
| YouTube | 10 | 6 | 3 | 1 |
| TikTok | 4 | 2 | 1 | 1 |
| **Total** | **66** | **40** | **17** | **9** |

Forty-three mentions have verified calendar dates spanning 9–16 October. Twenty-three social records expose only relative dates; these remain undated and are excluded from the daily chart. They remain in total and sentiment counts. Source-specific dates, original URLs, record IDs and classification notes are exported in the CSV.

Four firsthand reports remain: two about machines, one about a Community Club and one with channel unspecified. None of the new social posts establishes a verified machine incident. One YouTube comment reports a spouse’s CC experience and is labelled secondhand. Creator satire/opinions and media-derived discussion remain distinct from collection testimony.

Public browser access exposed original comments without logging in or posting. Default Top/Most relevant ordering, incomplete replies, dynamic loading and uncertain dates limit coverage. Publisher and official captions are excluded from sentiment, while their public comments may qualify. Zero captured records is missing coverage, not neutral sentiment or proof of no discussion.

The latest social logs follow. Earlier forum and search-index logs are retained below as history; their initial zero-result statements are superseded by the new browser observations where noted.

# Facebook and Instagram public-browser follow-up

Research date: 2026-10-17, Asia/Singapore. Scope: actual public audience feedback about Singapore's October 2026 haze N95 mask vending/distribution programme. This follow-up supersedes the Facebook/Instagram access gap in `work/social-coverage.md`; that older file accurately records the earlier web-tool-only attempt. YouTube/TikTok gaps are unchanged.

## Result

`facebook-instagram-feedback.json` contains 11 directly observed public user comments: Facebook 10 and Instagram 1. These are 7 negative, 2 neutral/mixed, and 2 positive interpretations. None qualifies as an explicit firsthand collection report. Official parent announcements are context only and are excluded from sentiment counts. No user names or profile data are retained.

The sample is purposive and small, not a population estimate. Facebook supplied 10 selected comments from 20 rendered comments under its default Most relevant ordering. Instagram supplied the single mask-distribution comment among eight visible comments on one public post. Platform rankings, limited accessible posts, selection, and a concentration in two discussions affect the sample. No inference about overall public sentiment or sentiment prevalence is justified.

Summary plus note text totals 113 words from the Facebook source and 15 words from the Instagram source; all are paraphrases, with zero direct quotation in the dataset. Coding is AI-assisted interpretation and not author-verified.

## Dates and provenance

- Facebook retrieval: `2026-10-17T06:08:26Z`. Nine selected comments displayed `2d` and one displayed `1d`. The rendered timestamp links did not expose an exact calendar date through title, aria-label or datetime attributes. Preserve `date: null`, relativeDate, dateBasis and retrievedAt. Exclude these ten rows from daily charts unless explicitly represented as undated; do not back-calculate calendar dates from rounded relative labels.
- Instagram retrieval: `2026-10-17T06:11:47Z`. The eligible comment displayed `1w`, but its rendered time element exposes `datetime="2026-10-09T13:54:33.000Z"` and `title="Oct 9, 2026"`. The Singapore calendar date is October 9. The dataset preserves the exact timestamp and date basis.
- Every row includes an observed direct comment URL and its parent thread URL. Tracking parameters were removed from Facebook links; the observed comment_id was retained. Collection channel remains Not applicable because these comments do not explicitly report their own completed collection attempt.

## Browser method and access boundaries

The available browser was Chrome through the browser tool. The in-app browser was unavailable and Chrome did not support hidden-tab visibility. A dedicated research tab was used. Normal optional login/signup invitations on Facebook and Instagram had a visible Close button and were dismissed. No account login, credential entry, posting, reaction, CAPTCHA completion, security bypass, private group access or access-control workaround occurred.

NEA's Facebook public profile showed recent posts and some comments. Scrolling eventually produced a non-dismissible See more on Facebook login wall; research stopped on that profile. A separate, already identified public announcement link loaded a public post dialog and comments after the ordinary initial login invitation was closed. View more comments was clicked once to expose 20 comments. Instagram's public profile and one specific post exposed public comments after closing an optional signup invitation.

## Exact new search queries

The four-query batch below returned an empty pooled result list. This outcome does not imply that platform comments do not exist; the successful browser observations demonstrate the web-search coverage limitation.

1. `site:facebook.com "mask" "vending" "haze" "2026" "CNA"`
2. `site:facebook.com "masks" "October 14, 2026"`
3. `site:instagram.com "N95" "haze" "vending"`
4. `site:facebook.com "N95" "Mothership" "2026"`

The earlier 28 exact queries and failed direct-fetch outcomes, including CNA/Mothership/AsiaOne source leads, remain recorded in `work/social-coverage.md`. This bounded follow-up did not directly inspect every publisher's Facebook/Instagram account, and it must not be described as exhaustive coverage of those accounts.

## Facebook pages reviewed

1. https://www.facebook.com/NEASingapore — public recent profile content visible; mask-distribution feedback not captured from the examined recent posts. Later scrolling reached a non-dismissible login wall and stopped.
2. https://www.facebook.com/NEASingapore/posts/pfbid02En546M6EFk7i4N6a3M1cQvaKQtWKfuPcTDX9K9sFbGSnj5wYqZcCUpPvhvHCCYhNl — October 16 general haze update. Visible generic political/haze response excluded because not mask distribution feedback.
3. https://www.facebook.com/NEASingapore/posts/pfbid02s74WYRC7HpR1J3BR6bJ1grbUjLByBXEMQjGhBQL48qV4GPryAD6J3WEQmkaz4YiTl — October 15 general haze update. Visible general diplomacy discussion excluded.
4. https://mothership.sg/2026/10/community-clubs-distribute-n95-eligible-singaporeans/ — previously verified news lead links the official Dinesh Vasu Dash announcement. Publisher content is not counted as social sentiment.
5. Entry link from that article: https://www.facebook.com/dinesh.vasudash/posts/pfbid02cuiyqZgnx8g25N8utPTJSzz5YTEz9Uoay7mVBxxTH3TMsH2FgP5X2wmUU8uLHvS4l — public comments successfully read in the browser.
6. Parent timestamp and comment anchors in the rendered DOM used https://www.facebook.com/dinesh.vasudash/posts/pfbid0ZBvndFnhHV3W1EvXrXR51ujnJLQxzSDaWnQG7AbiXRBuhj42LS1jB48R63haB7pxl — this exact observed parent URL is preserved in every Facebook record. Its official distribution announcement is excluded. The dataset includes direct URLs with each observed comment_id.

Excluded Facebook material: generic praise without clear programme meaning, image/GIF-only material, general air-purifier/medical assertions, and redundant policy comments beyond the bounded selection. A proposed future collection is not coded as completed collection. Mask-strap criticism did not explicitly establish a personal collection attempt, so it is a Discussion reaction.

## Instagram pages reviewed

1. https://www.instagram.com/nea_sg/ — observed official Instagram account link from NEA's public Facebook profile. Public grid exposed twelve posts, including October 9–16 haze posts and unrelated campaigns. Grid captions and official graphics are not sentiment observations.
2. https://www.instagram.com/nea_sg/p/DeRaSO2GjGh/ — October 9 haze-response post, selected from the public grid. The public post exposed eight comments. One explicitly criticised delayed mask distribution and restricted eligibility; the other seven concerned broader haze governance, firefighting, sanctions, air purifiers or general response and were excluded from this mask-distribution dataset.
3. https://www.instagram.com/p/DeRaSO2GjGh/c/17976014799125188/ — exact observed eligible comment permalink. The time element supplies the exact timestamp described above.

The Instagram result is one verified comment, not a full account scrape or a representative Instagram sample. No original citizen/creator post specific to mask vending/distribution was verified in this bounded search; captured social evidence consists of public audience comments under official posts.


---

# YouTube and TikTok public sentiment research

Reviewed on 17 October 2026, Singapore time. Scope: the October 2026 Singapore government haze N95-mask distribution, including vending collection and related programme access. This is a bounded, dated review of readable public posts and comments, not exhaustive social listening or a representative sample.

## Result

`video-social-feedback.json` contains 14 records:

| Platform | Creator video posts | Public comments | Total |
|---|---:|---:|---:|
| YouTube | 1 | 9 | 10 |
| TikTok | 1 | 3 | 4 |

There are 8 Negative, 4 Neutral and 2 Positive analyst labels. All summaries are paraphrases. There are no copied comment bodies. Paraphrases and notes remain below 200 words per source video/page. No official or publisher announcement caption is counted as a sentiment record. One independent creator's approving caption accompanying a programme graphic is counted as creator commentary, not as an official announcement or firsthand use.

Only the YouTube creator video's exact publication date was visible. The other 13 dates are deliberately `null`, with the exact relative label recorded in `dateBasis`. These records can support a dated retrieval snapshot but should not be assigned exact days in a trend chart. The scope of each comment is supported by the video it replies to. Relative timestamps, topical context and direct public access establish current discussion; precise posting times were not inferred from numeric IDs.

## Primary sources and evidence

### YouTube creator video

[SG Money No Enough video](https://www.youtube.com/watch?v=WwXSooEylTU) — expanded video details displayed **Oct 15, 2026**. The public description and transcript were read. The relevant transcript section is approximately 0:47–1:29 and critiques the mask locator, stock availability and working adults' access. The creator identifies the work as satire. One original commentary record is retained; factual allegations within the satire are not independently validated or promoted to incident facts. The one visible pinned comment concerned clinic subsidies and was excluded as outside mask collection scope.

### YouTube CNA rollout discussion

[CNA rollout video](https://www.youtube.com/watch?v=8-3auyIUboU) — expanded video details displayed **Oct 14, 2026**. At review, the page showed 25 comments and 17 loaded top-level comments under the default Top sort. Three relevant original comments were retained: size guidance, elderly collection effort, and quantity sufficiency. Every retained comment has a directly observed `lc` permalink. Unrelated haze politics, health claims, air-purifier suggestions and duplicated off-topic commentary were excluded. Replies were not systematically expanded. The publisher description itself is excluded from sentiment.

### YouTube Straits Times vending Short discussion

[Straits Times vending-machine Short](https://www.youtube.com/shorts/nqO2XiwH_Yc) — search and comment context showed a current rollout clip. At review it displayed 23 comments, with 11 top-level comments readable in the default Top view. Six relevant comments were retained. A complaint involving Tampines North CC is explicitly a secondhand report about the author's spouse, not a verified firsthand machine failure. The brief approving comment is labelled Positive with tone uncertainty noted. Replies were not systematically expanded. No publisher caption was counted as sentiment.

### TikTok AsiaOne collection discussion

[AsiaOne collection video](https://www.tiktok.com/@asiaone/video/7697158507488972053) — publisher caption identifies its reporting as Friday **October 16**, day three of distribution; the post timestamp displayed **23h ago**. Public comments loaded without logging in. The page displayed 24 comments and nine visible top-level comment bodies were reviewed. Three relevant comments were retained: queue value, doorstep delivery and postal delivery. Their DOM comment IDs were read from the rendered page:

- `7697301488950969094` — visible 13h ago.
- `7697202678048949008` — visible 20h ago.
- `7697249026463253249` — visible 17h ago.

TikTok did not expose individual comment permalinks in the observed interface, so each record links to the exact parent video and carries its distinct comment ID. Generic political reactions, image-only comments and playback complaints were excluded. Neither publisher footage nor its caption is counted as a public opinion.

### TikTok creator post

[Christina Ng creator post](https://www.tiktok.com/@christina.ng7/video/7696516571719568660) — visible timestamp **2d ago**. The directly read personal caption praises government action. A browser screenshot verified that the video displays the current programme's mask-collection graphic, including the two-mask allocation, eligibility categories, PA Community Clubs, transport-hub vending machines and social-service offices. This supports the caption's specific scope. The page displayed zero comments. One creator opinion is retained; it is not evidence of personal collection.

## Discovery queries

Initial public web searches:

1. `site:youtube.com Singapore haze N95 masks vending October 2026`
2. `site:youtube.com Singapore N95 mask collection 2026 comments`
3. `site:tiktok.com Singapore haze N95 vending masks October 2026`
4. `site:tiktok.com N95 mask vending Singapore October 2026`

The web-search results surfaced older or tangential YouTube material. The TikTok search attempt reported a non-retryable robots restriction. No TikTok URL was reopened through that blocked web tool.

Independent normal browser searches:

- YouTube search field: `singapore haze n95 vending 2026` at `https://www.youtube.com/results?search_query=singapore+haze+n95+vending+2026`.
- TikTok search field: `singapore haze N95 vending` at `https://www.tiktok.com/search?q=singapore%20haze%20N95%20vending`.

The YouTube results directly exposed the current creator video, CNA report and Straits Times Short. TikTok exposed public publisher videos and creator posts, including the two retained source pages. Informational creator guides without a discernible reaction and retail advertisements were not counted as sentiment.

## Access log and limitations

| Surface | Observed access | Outcome |
|---|---|---|
| Public web search, YouTube | Readable results; mostly stale/tangential | Normal browser search used for current discovery. |
| Public web open of creator YouTube video | Cache miss/internal fetch error | Normal browser page, details and transcript readable. |
| Public web search, TikTok | Robots restriction | No retry of the blocked tool resource. |
| YouTube public browser | Current video pages, transcript, comment text and permalinks readable | No login action, posting, liking or subscribing. Default Top sort limits completeness. |
| TikTok public browser search | Initial ordinary server-error message | One normal Try again button action succeeded; results and public comments then loaded. No challenge or security bypass. |
| TikTok public browser detail pages | Readable public posts and comments; login offered only for commenting | No login, comment submission, follow or reaction action. |

No CAPTCHA was solved, private data source queried, or access restriction bypassed. Search indexing and ranking, default comment sorting, unexpanded replies, dynamic loads and unknown exact dates limit coverage. Zero matched records on an unreviewed page would not prove absence of sentiment. These records represent readable comments and creator reactions found during this review, not all YouTube or TikTok sentiment.


---

# X, Threads and Bluesky coverage audit

Research date: 2026-10-17. Scope: original public user commentary about Singapore's current government haze N95 mask distribution/vending programme. Target window: 9–17 October 2026. News-publisher captions, official announcements, COVID-era schemes, generic haze commentary and unverifiable dates were excluded.

**Result: zero qualifying records verified.** `work/microblog-feedback.json` is intentionally an empty array. This means accessible research did not establish eligible evidence; it does **not** mean there are no relevant posts on these platforms.

## Search log

Queries were run through public web search; queries with domain filters are marked.

1. `site:x.com "Singapore" "mask" "vending" "haze"`
2. `site:threads.com "Singapore" "mask" "vending"`
3. `site:bsky.app "Singapore" "haze" "mask"`
4. `site:threads.net "haze" "N95"`
5. `site:x.com "haze" "free masks"`
6. `site:x.com "haze" "N95" "2026"`
7. `site:threads.com "haze" "masks"`
8. `site:bsky.app "mask vending"`
9. `"haze" "vending" "threads.com"`
10. `"haze" "vending" "twitter.com"`
11. `"haze" "masks" "bsky.app/profile" "2026"`
12. `site:x.com/status "mask" "Singapore" "haze"`
13. `site:x.com "hazemask"`
14. `site:threads.com "hazemask"`
15. `site:threads.net "mask vending"`
16. `"N95" "Singapore"` restricted to `x.com`
17. `"N95" "Singapore"` restricted to `threads.com` and `threads.net`
18. `"haze" "masks"` restricted to `bsky.app`
19. `"mask vending" Singapore twitter October 2026`
20. `site:threads.com "新加坡" "口罩" "烟霾"`
21. `site:x.com "新加坡" "口罩" "贩卖机"`
22. `site:threads.com "N95" "collect"`
23. `site:bsky.app "Singapore" "free masks"`

The combined searches returned either no matches or unrelated material, general haze posts, news pages, and already known Reddit threads. None yielded an identifiable, dated, original user post about this programme suitable for inclusion.

## Public access checks

| Platform | Public entry point | Observed result |
| --- | --- | --- |
| X | `https://x.com/search?q=Singapore%20haze%20mask%20since%3A2026-10-09&src=typed_query&f=live` | Web tool returned an internal fetch error; no result text available. |
| Threads | `https://www.threads.com/search?q=Singapore%20haze%20mask` | Web tool returned an internal fetch error; no result text available. |
| Bluesky | `https://bsky.app/search?q=Singapore%20haze%20mask` | Web tool returned an internal fetch error; no result text available. |
| Bluesky public API | `https://public.api.bsky.app/xrpc/app.bsky.feed.searchPosts`, q=haze, since=2026-10-09T00:00:00Z, until=2026-10-18T00:00:00Z, limit=100, sort=latest | Unauthenticated HTTP GET returned HTTP 403 and an HTML Forbidden page, not search results. Cause not established. No further endpoint variants or access-control workarounds attempted. |

The API documentation entry `https://docs.bsky.app/docs/api/app-bsky-feed-search-posts` redirected to `https://endpoints.bsky.app/` and returned no readable details through the web tool. No account, login, session cookies, CAPTCHA solving or access-control bypass was used. An initial API tool attempt was aborted before returning a result; the single completed request returned 403.

## Identified but excluded material

- [A Bluesky profile with Singapore haze posts](https://bsky.app/profile/glengyron.bsky.social) was indexed, but the accessible material concerned air-quality conditions and a haze app, rather than mask collection or vending. It was excluded. No account-level profile analysis was performed.
- A search result on an X Grok-share URL contained unrelated generated content rather than a relevant original programme comment. It was excluded.
- News coverage and old annual reports about vending machines are neither original microblog commentary nor evidence of current user sentiment.

## Dashboard treatment

Use a coverage status such as **“Searched; no qualifying accessible posts verified”** for these platforms. Do not show “0% negative,” “no complaints,” “fully monitored,” or a purported live connection. This bounded search did not establish comprehensive platform coverage or population sentiment. No record lacks a date because no record was accepted; do not infer dates from crawler recency or fabricate placeholders.


---

# Earlier forum review and initial search logs

# Singapore government haze-mask programme: public-source search audit

Research completed on 17 October 2026, Singapore time. This audit accompanies the sentiment dashboard.

The expanded snapshot contains **41 selected public comments across nine discussions and four platforms**, dated 10–16 October 2026. It covers vending-machine discussion and related government mask-collection policy. It is a purposive sample, not a representative survey, complete census or continuous live feed.

| Contributing source | Selected comments | Negative | Neutral / mixed | Positive |
|---|---:|---:|---:|---:|
| Reddit | 16 | 10 | 4 | 2 |
| HardwareZone | 20 | 11 | 6 | 3 |
| MyCarForum | 3 | 2 | 1 | 0 |
| Sammyboy | 2 | 2 | 0 | 0 |
| **Total** | **41** | **25** | **11** | **5** |

The dashboard's negative share is 25 / 41 (61% rounded), a share of the selected sample only. Four firsthand collection reports are included: two concerning vending machines, one explicitly at a Community Club, and one with the channel unspecified. CC or unspecified collections do not establish machine success. One Sammyboy opinion comments on news-reported incidents and is labelled media-derived commentary, not independent firsthand testimony.

Eighteen platforms were searched: Reddit, HardwareZone, MyCarForum, Sammyboy, SGForums, KiasuParents, Singapore Expats, SGClub, SGTalk, Tripadvisor, Facebook, Instagram, YouTube, TikTok, X, Threads, Lemon8 and Xiaohongshu. Four supplied verified eligible contributions. The remaining sources are documented below as unmatched, out of scope, partially accessible or inaccessible. **Zero captured comments does not mean no discussion or neutral sentiment.**

Original comment links and date bases are retained in the dashboard and CSV export. Sentiment and primary topics are AI-assisted interpretations. Quoted replies, copied news and unrelated comments were excluded; comments are not unique-person counts. HardwareZone received a much deeper page review than other sources, so comparisons reflect uneven search coverage.

No authenticated social-platform API is connected. The local dashboard is a reviewed snapshot; refreshing requests a new source review through Codex. No private data, accounts or machine stock/uptime feeds were accessed. Full downloaded forum pages remain research intermediates and are not shipped in the dashboard.

The following logs preserve the actual search queries, page-review scope, source links and limitations. Query lists can contain overlapping searches; they are not a count of unique platforms or an assertion that all relevant content was found.

---

# Additional public-source search coverage

Search date: 17 October 2026. Scope: the Singapore government haze N95 vending/distribution programme; older COVID programmes, general haze symptoms, beauty masks, retail promotions and reverse vending machines are excluded.

Targeted queries executed through web search:
- `"haze" "vending" "masks" "forum" "2026"`
- `"N95" "vending machines" Singapore "comments" October 2026 -site:reddit.com -site:straitstimes.com -site:channelnewsasia.com`
- `"haze" "vending" Singapore "Facebook" 2026`
- `site.sammyboy.com "haze" "mask" "2026"`
- `site.sgforums.com "haze" "vending"`
- `site.sg-talk.com "haze" "mask"`
- `新加坡 2026 烟霾 口罩 自动贩卖机 领取 评论`
- `"haze mask" "vending" -site:reddit.com -site:channelnewsasia.com -site:asiaone.com -site:straitstimes.com -site:nea.gov.sg -site:gov.sg`
- `site:sammyboy.com "N95" "vending"`
- `site:sgtalk.net "N95" "haze"`
- `site:forums.hardwarezone.com.sg "mask" "vending" "Oct"`
- `Singapore haze October 2026 forums discussion mask machines HardwareZone`
- `"2026" "haze" "mask" "SGTalk"`
- `"2026" "haze" "mask" "Sammyboy"`
- `"烟霾" "口罩" "领取机" "留言"`
- `site:threads.com "Singapore" "haze" "vending"`
- `site:x.com "haze" "vending" "mask"`
- `site:lemon8-app.com Singapore haze mask vending 2026`
- `site:xiaohongshu.com 新加坡 烟霾 口罩 领取 2026`

Results: discovered current HardwareZone consolidated haze discussion and Tripadvisor current air-quality thread, forwarded for targeted primary inspection. Search alone did not surface eligible X, Threads, Lemon8, Xiaohongshu or SGTalk user comments. This is an indexing/access limitation, not proof that discussion is absent. News interviews and news reposts were retained as research leads, excluded from public-forum sentiment counts.


---

# HardwareZone / EDMW coverage audit

Research date: 2026-10-17 (Singapore). Output: `work/hardwarezone-feedback.json`.

## Result and scope

- 20 selected primary forum contributions; all paraphrases, no direct quotes republished.
- One selected contribution per author; author names omitted from dashboard output. These remain post counts, not representative population counts.
- Posts concern the October 2026 government mask-distribution programme and vending rollout. Programme context and machine-specific experience must remain distinguishable.
- Two records describe completed collections: one explicitly at a Community Club and one with channel unstated. **Neither establishes vending-machine success.** No new firsthand machine failure was established.
- Every selected record has an exact timestamp from the post's `time[datetime]` HTML attribute with `+0800`, and a stable `/post-ID` link observed in the HTML. They are not dates inferred from a crawler's relative “Today” label.
- The 20 selected summary strings total 140 words; summaries plus short evidence notes remain below 200 words for this consolidated thread.

## Discovery searches

Used web search in batches, including:

1. `site:forums.hardwarezone.com.sg "haze" "vending" "2026"`
2. `site:forums.hardwarezone.com.sg "N95" "vending" "Oct"`
3. `site:forums.hardwarezone.com.sg "mask" "vending" "2026"`
4. `site:forums.hardwarezone.com.sg/threads/ "N95" "haze" after:2026-10-08`
5. `site:forums.hardwarezone.com.sg/threads/ "mask vending" haze`
6. `site:forums.hardwarezone.com.sg/threads/ "haze" "masks" "eligible"`
7. `site:forums.hardwarezone.com.sg/threads/ "haze" "200" "mask" "2026"`
8. `site:forums.hardwarezone.com.sg "haze" "vending" -meals -bcrs -return`
9. `site:forums.hardwarezone.com.sg "mask" "vending" "Oct 15, 2026"`
10. `site:forums.hardwarezone.com.sg "haze" "mask" "collect" "2026"`
11. `site:forums.hardwarezone.com.sg "haze" "CHAS" "mask"`
12. `site:forums.hardwarezone.com.sg/threads/consolidated-el-nino-and-haze-discussions.6117454/ "vending"`
13. `site:forums.hardwarezone.com.sg "haze" "free masks"`
14. `site:forums.hardwarezone.com.sg "N95" "collect" "October"`
15. `hardwarezone haze masks vending October 2026`
16. `hardwarezone "N95" "eligible"`
17. `hardwarezone "masks" "two" "haze" "2026"`
18. `hardwarezone "vending" "haze" "37"`

## Relevant destinations inspected

1. [Consolidated El Nino and Haze Discussions](https://forums.hardwarezone.com.sg/threads/consolidated-el-nino-and-haze-discussions.6117454/). Current parent source for all 20 records. Opened web-index versions of pages 482 and 483, then followed current public HTML pagination to establish date range and available pages. At collection, page 540 was the latest page. Public HTML pages **270–540 inclusive** were read, with at most three concurrent requests: 271 pages, 5,374 unique extracted posts, all responses HTTP 200. This covers part of Oct 9 through Oct 17; it does not establish complete coverage of all Oct 9 posts.
2. [Community clubs to begin distributing N95 masks](https://forums.hardwarezone.com.sg/threads/mothership-community-clubs-to-begin-distributing-n95-masks-to-eligible-sporeans-amid-worsening-haze-situation.7227361/). Opened. Available content was a news repost without additional user commentary. Excluded from sentiment.
3. [Haze subsidy scheme](https://forums.hardwarezone.com.sg/threads/scheme-providing-subsidies-for-haze-related-conditions-to-start-oct-12-ong-ye-kung.7226803/). Search text mostly republished journalism about clinical subsidies. Excluded from mask-vending feedback.
4. [Climate Vouchers / air purifiers](https://forums.hardwarezone.com.sg/threads/kenneth-tiong-let-households-use-their-climate-vouchers-on-air-purifiers-which-are-not-on-the-eligible-list.7227816/). Search result included a political statement repost. Excluded as primary resident feedback; the consolidated thread also contained its repost.
5. Retail mask advice, January/March 2026 haze, 2013/2015 mask shortages, meal-vending projects, and beverage-return-machine threads appeared in search. Excluded as wrong period or wrong programme.

## Selection and verification

The public HTML was parsed into post ID, exact timestamp, original contribution text and quoted context. Quoted prior comments were separated from the current author's contribution. Broad matching identified 330 mask/N95/vending mentions; narrower collection/location/free-mask/eligibility matching produced 54 initial candidates, followed by targeted distribution/activation searches within the extracted text. The scope filter excluded general medical advice, retail shopping, political insults without programme substance, article copies, and duplicated quoted content. The output selects 20 concise contributions across timing, access, eligibility, allocation, information, support and collection experience. Repeated contributions by the same author were not added to inflate the sample.

This is a broad, bounded forum review, **not an exhaustive census of HardwareZone or the public**. Short opinions can be sarcastic or ambiguous; labels are analyst interpretations. Dates with no selected feedback do not mean no discussion. The dataset should not produce location rankings or machine reliability rates.

## Access and provenance limitations

- Initial shell network resolution was blocked by the workspace sandbox; the permitted network escalation succeeded. Public pages were read without an account, login, or access-control bypass.
- Search-index pages and live pages differed because posts had been merged into this consolidated thread. Page numbers can shift. Use stable per-post links rather than treating a page number as permanent identity.
- Current and historical public HTML were not continuously monitored. Changes or deletions after collection are possible.
- Exact timestamps are established only for these HardwareZone records; do not retroactively assign times/timezones to the earlier Reddit dataset.
- Some selected comments discuss the wider distribution scheme or Community Clubs. Preserve `collectionChannel` and evidence notes in source detail/export.
- Cached HTML and parsed scan records in `work/hardwarezone-pages/` and `work/hardwarezone-scan.json` are research intermediates, not dashboard deliverables. Do not ship these full forum copies.


---

# Other Singapore forum research coverage

Research date: 17 October 2026, Singapore time. Scope: public discussion of the October 2026 government haze N95-mask distribution and its vending machines. Reddit and HardwareZone were handled separately. This is a documented targeted search, not an exhaustive census, representative sample, live feed, or proof that unlocated discussion does not exist.

## Curated result

`other-forums-feedback.json` contains five original public comments: three Mycarforum comments and two Sammyboy comments, across three threads. Four discuss the broader distribution rules or allocation. One explicitly discusses vending-machine collection, but is commentary on published news rather than firsthand testimony. Do not present all five as customer reviews or machine-use experiences.

All stored summaries are paraphrases. No comment body is quoted. Each thread contributes under 200 words of paraphrase. Quoted earlier comments, copied news, generic haze reactions, unrelated COVID discussion, health advice, interpersonal jokes, and political remarks without a clear mask-programme connection were excluded. Sentiment labels are analyst interpretation, not platform ratings. There was no need to infer an unknown date; all retained records have original HTML time elements.

## Search and access outcomes

| Forum | Search/read outcome | In-scope retained result |
|---|---|---|
| SGForums | Public homepage was readable and labelled 1999–2018. Search results concerned older haze discussion or unrelated posts. No matching current-rollout result located. | 0 |
| Mycarforum | Search index initially showed a stale 34-page version of the long-running haze topic. Public browser view showed 64 pages. Read pages 50, 51, 52, 53, 54, 56, 57, 62, 63 and 64, focusing on October 2026 mask mentions. Page subset review, not complete thread extraction. | 3 original opinions on eligibility and quantity. |
| Singapore Expats | Domain searches found no matching current vending/collection discussion. The living-in-Singapore category appeared in search results, but a clean direct category URL returned an internal error through the web tool. Partial access/search coverage only. | 0 |
| KiasuParents | Forum homepage readable. Mask-related indexed results were historical haze (2013) or COVID (2020), not current government haze vending collection. No matching current-rollout result located. | 0 |
| SGClub | Targeted domain query found no matching in-scope result. No claim of complete forum access or coverage. | 0 |
| SGTalk | Targeted domain query found no matching in-scope result. Parent researcher also searched this community. No claim of complete forum access or coverage. | 0 |
| Sammyboy | Two relevant current threads identified. Initial automatic access check resolved through the normal public browser view without interaction. Read the one-post vending commentary thread and page 1 of the three-page announcement discussion. | 2 original opinions; one is satirical commentary on news, one an eligibility reaction. |
| Tripadvisor Singapore | The supplied October 14 current-air-quality thread and all 3 replies were readable after a normal automatic device check. Posts concerned travel, general haze and mask advice; none mentioned the government collection programme or vending experience. | 0; excluded as outside scope. |

No login, CAPTCHA solving, security bypass, private forum access or posting was performed. A terminal retrieval attempt for Mycarforum and Sammyboy failed due sandbox DNS/network resolution; ordinary public-browser retrieval provided readable content. These access outcomes must not be interpreted as absence of sentiment.

## Relevant primary threads read

- [Mycarforum: Haze Updates 2021-23 trilogy and beyond](https://www.mycarforum.com/forums/topic/2719412-haze-updates-2021-23-trilogy-and-beyond/) — despite its old title, current pages contain October 2026 posts. Reviewed page subset is specified above. Retained post IDs 7818862, 7818866 and 7819174. Official notice reposts were excluded.
- [Sammyboy: vending-machine collection commentary](https://www.sammyboy.com/threads/free-n95-masks-two-per-person-website-say-got-stock-machine-say-no-plug.435513/) — one original satirical post, no replies visible; media-derived incident discussion, not a collector review.
- [Sammyboy: October government distribution announcement discussion](https://www.sammyboy.com/threads/haze-task-force-n95-masks-will-be-distributed-to-vulnerable-singaporeans-when-psi-hits-unhealthy-range.435131/) — page 1 read; original announcement article excluded, one clear eligibility opinion retained.
- [Tripadvisor: Concerns re current air quality](https://www.tripadvisor.com/ShowTopic-g294265-i1748-k15594079-Concerns_re_current_air_quality-Singapore.html) — initial post plus 3 replies read; no government collection feedback.

## Other source pages inspected or rejected

- [SGForums homepage](https://sgforums.com/) — historical archive heading.
- [KiasuParents forum homepage](https://forum.kiasuparents.com/).
- [KiasuParents mask-buying topic](https://forum.kiasuparents.com/topic/57500/where-to-buy-mask-for-haze-kid-amp-adult-size) — historical 2013 topic, excluded.
- [KiasuParents COVID topic](https://forum.kiasuparents.com/topic/95466/corona-virus-disease-covid-19-updates/386) — historical COVID material, excluded.
- [Singapore Expats category](https://singaporeexpats.com/forum/viewforum.php?f=13) — direct web retrieval error; search index provided category context only.

## Query log

The following literal query strings were used during the research. Unless an explicit domain filter is listed, queries were submitted to public web search without a domain filter. Initial broad dotted-site queries were followed by explicit `site:` queries; the dotted form should not be assumed to enforce a domain restriction.

1. `site.sgforums.com "haze" "vending" "mask"`
2. `site.mycarforum.com "haze" "vending" "2026"`
3. `site.singaporeexpats.com "haze" "vending" "mask"`
4. `site.kiasuparents.com "haze" "vending" "2026"`
5. `haze masks vending October 2026` — domain filter `sgforums.com`.
6. `haze masks vending October 2026` — domain filter `mycarforum.com`.
7. `haze masks vending October 2026` — domain filter `singaporeexpats.com`.
8. `haze masks vending October 2026` — domain filter `kiasuparents.com`.
9. `"Haze Updates 2021-23 trilogy and beyond" "masks"`
10. `site.mycarforum.com "vending" "N95"`
11. `site.forum.singaporeexpats.com "haze" "2026"`
12. `site.forum.kiasuparents.com "2026" "haze"`
13. `"N95" "vending" site:sgforums.com`
14. `"mask" "vending" site:singaporeexpats.com`
15. `"N95" "2026" site:forum.kiasuparents.com`
16. `"haze" "mask" site:forums.sgclub.com`
17. `site:mycarforum.com/forums/topic/2719412 "October 15"`
18. `site:mycarforum.com/forums/topic/2719412 "vending"`
19. `site:mycarforum.com/forums/topic/2719412 "N95"`
20. `site:mycarforum.com/forums/topic/2719412 "October 16"`
21. `"haze" "N95" "2026" site:sammyboy.com`
22. `"haze" "vending" site:sgtalk.net`
23. `"haze" "masks" "2026" site:singaporeexpats.com`
24. `"haze" "mask" "2026" site:forum.kiasuparents.com`
25. `"Free N95 Masks: Two Per Person, Website Say Got Stock, Machine Say No Plug"`
26. `site.sammyboy.com "mask" "vending" "2026"`
27. `site.tripadvisor.com/ShowTopic-g294265-i1748-k15594079 "masks"`
28. `site.mycarforum.com "haze" "collect" "masks"`

Search-index freshness, page indexing, inaccessible pages and the short time since the rollout limit coverage. Absence of a relevant indexed result is logged as a search outcome only. The retained records should be described as public comments found during a dated review, not as all public sentiment.


---

# Social platform research coverage

Research date: 2026-10-17 (Asia/Singapore).

Scope: public user feedback concerning Singapore's government haze N95 mask vending machines in October 2026. Searched Facebook, Instagram, YouTube and TikTok through public web search and open tools. No login, posting, or restricted-content access attempted. No dashboard files changed.

## Result and interpretation

**Zero verified, eligible social feedback records captured.** `social-feedback.json` is intentionally an empty array. Searches did not produce accessible, dated public user feedback about this specific rollout. This is a coverage limitation, not evidence that no discussion exists and not evidence of neutral sentiment.

Do not label these four platforms as covered sentiment sources. A suitable dashboard label is: “Facebook, Instagram, YouTube and TikTok searched; no verified comments captured.” Do not include unobserved comments, engagement counts, official announcements or news captions in sentiment denominators.

TikTok search returned “Blocked by robots.txt” and identified tiktok.com as non-retryably inaccessible. Other direct social opens returned cache misses or fetching errors; this does **not** establish that those pages require login or have no comments.

## Exact search queries and outcomes

Each line below represents an actual web search. Batches had four independent searches; result lists were pooled by the search tool. Outcomes describe the reviewed batch and relevant platform findings without claiming an individual query returned a particular pooled result.

### Batch 1

1. `site:facebook.com Singapore N95 mask vending machines haze October 2026`
2. `site:instagram.com Singapore N95 mask vending machines haze October 2026`
3. `site:youtube.com Singapore N95 mask vending machines haze October 2026`
4. `site:tiktok.com Singapore N95 mask vending machines haze October 2026`

Outcome: no eligible October vending-machine user feedback. TikTok was robots-blocked. The result pool included a CNA August 13, 2026 YouTube news video about retailer mask stocks, a July 2023 CNA stockpile video, and a February 2024 MOH Facebook mask-rule announcement. These concern different dates/subjects, and their available metadata did not expose eligible user comments. Unrelated TikTok business/newsroom pages and unrelated Facebook results were excluded.

### Batch 2

5. `site:facebook.com "N95" "vending" "haze"`
6. `site:instagram.com "N95" "vending"`
7. `site:youtube.com "N95" "vending"`
8. `"haze mask vending machines" comments`

Outcome: no eligible records from the requested four platforms. The pool returned the existing October 12 Reddit discussion plus October news and government pages. News interview leads from AsiaOne were sent to the parent agent for separate review; they are not social-platform comments. The note.com news digest's editorial opinion was excluded from this subtask.

### Batch 3

9. `site:facebook.com/mothershipsg "masks" "haze"`
10. `site:facebook.com/ChannelNewsAsia "vending" "mask"`
11. `site:instagram.com "Singapore" "haze" "masks"`
12. `site:youtube.com "mask vending machines" Singapore`

Outcome: two YouTube videos from 2020 were returned. One creator described reusable-mask quality during COVID-19; the other was a CGTN news report about the COVID-19 distribution. Both were excluded because they are not October 2026 haze N95 feedback. No current user comments were exposed.

### Batch 4

13. `"N95" "vending" Facebook Singapore 2026`
14. `"N95" "vending" Instagram Singapore haze`
15. `"haze" "vending" YouTube October 2026`
16. `"haze" "vending" TikTok Singapore October`

Outcome: the result pool contained CNA, AsiaOne, Mothership-derived reporting, Reddit and other web documents, with no eligible public social-platform user feedback. CNA's October 15 distribution-experience article includes attributed resident interviews and is a useful separate news-source lead, not a platform comment source.

### Batch 5

17. `"haze" "masks" "2026" site:facebook.com`
18. `"haze" "mask" "2026" site:instagram.com/p`
19. `"haze" "masks" "October" site:youtube.com/watch`
20. `"口罩" "自动贩卖机" "2026" "Facebook"`

Outcome: no eligible social-platform feedback. A Chinese-language news report cited an ActiveSG Facebook facilities announcement; this was institutional information, not user feedback about vending machines. Other results were unrelated.

### Batch 6

21. `Singapore haze mask vending` with domain filter `facebook.com`
22. `Singapore haze mask vending` with domain filter `instagram.com`
23. `Singapore haze mask vending` with domain filter `youtube.com`
24. `"Singapore readys haze mask vending machines"`

Outcome: no verified social comments. Relevant CNA short-video and Mothership pages were identified. Mothership linked an October 14 Facebook announcement by Dinesh Vasu Dash; direct opening failed (see access log). The announcement itself is institutional context and is not eligible sentiment. The pooled result list also included the unrelated 2024 MOH Facebook announcement.

### Batch 7

25. `"mask" "vending" "haze" "Facebook" "comments"`
26. `"mask" "vending" "haze" "Instagram"`
27. `"mask" "vending" "haze" "TikTok"`
28. `"N95" "October 15, 2026" "YouTube"`

Outcome: no eligible public comments. The Independent described Lee Hsien Loong's October 14 Instagram public-health announcement; the source article could not be opened. The description was official advice and did not contain eligible vending-machine user comments. Other results were unrelated discussions or product promotion.

## Direct access log

- https://www.facebook.com/NEASingapore — open failed with cache miss; no comments observed.
- https://www.facebook.com/dinesh.vasudash/posts/pfbid02cuiyqZgnx8g25N8utPTJSzz5YTEz9Uoay7mVBxxTH3TMsH2FgP5X2wmUU8uLHvS4l — followed the Facebook source link from the Mothership October 14 article; open failed with cache miss; no comments observed.
- https://www.instagram.com/channelnewsasia/ — open failed with fetching error; no posts/comments reviewed from the profile.
- https://www.youtube.com/watch?v=7fQ5AIp2-uI — search metadata identified a CNA retailer-stock news video dated August 13, 2026; direct open failed with cache miss. Excluded for subject/date and no visible user comments.
- https://www.youtube.com/watch?v=tPdMUbwIMVc — search metadata identified chompbear's July 16, 2020 reusable-mask vending video; direct open failed with fetching error. Excluded as historical COVID-19 material.
- https://www.youtube.com/watch?v=ku9Rgm3VWCs — search metadata identified CGTN's May 27, 2020 reusable-mask vending video; excluded from metadata without opening because it is historical COVID-19 reporting.
- tiktok.com — tool reported robots.txt blockage in batch 1. No attempt to bypass the restriction.
- https://mothership.sg/2026/10/community-clubs-distribute-n95-eligible-singaporeans/ — opened successfully; official rollout context and one linked Facebook announcement, no observed public user comments.
- https://www.channelnewsasia.com/shorts/singapore-readys-haze-mask-vending-machines-deployment-if-needed-6448556 — opened successfully; article/video title but no user comments; a search extraction reported the video unavailable in the tool's region. Excluded as news content.
- https://theindependent.sg/with-the-haze-affecting-singapore-wear-a-mask-stay-indoors-when-the-haze-is-bad-sm-lee-urges-residents-as-he-collects-n95-masks-at-cc — direct open failed with cache miss; search extraction describes official advice and no user feedback.

## Useful non-social leads handed to parent agent

These are not included in `social-feedback.json`; parent research must review and deduplicate them before inclusion elsewhere.

- https://www.channelnewsasia.com/singapore/n95-masks-distribution-vending-machines-community-clubs-haze-6462106 — October 15 article, updated October 16. Attributed resident interviews on vending-machine failures, eligibility clarity and collection access, plus separate community-club experiences. Keep the collection types distinguishable.
- https://www.asiaone.com/singapore/haze-n95-masks-collection-vending-machine-asthma-toa-payoh — published October 17; reporting from October 16. A Toa Payoh collector describes eligibility confusion and criticises rollout timing. Use reporting date rather than publication date for the event only if clearly labelled.
- https://www.asiaone.com/singapore/haze-singapore-n95-mask-collection-experience — October 15 collection reporting. Requires separate review for actual attributed user feedback; reporter observations are not automatically user sentiment.

## Inclusion rule

A future social record needs accessible actual user text, a traceable post/comment URL, a defensible date basis, and relevance to the October 2026 haze N95 distribution. News publisher captions, official statements, engagement totals, failed fetches and old COVID-era reviews cannot substitute for user sentiment. Absence of captured records should remain a missing-coverage state.
