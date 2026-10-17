"""Reject incomplete or stale reviewed-data bundles before Pages deployment."""
import hashlib
import json
import re
from pathlib import Path

root = Path(__file__).resolve().parents[2]
dist = root / 'dist'
manifest = json.loads((dist / 'data-app-build.json').read_text())
for key in ('html', 'snapshot'):
    item = manifest[key]
    path = (dist / item['path']).resolve()
    assert path.parent == dist.resolve(), 'Unexpected artifact path'
    payload = path.read_bytes()
    assert hashlib.sha256(payload).hexdigest() == item['sha256'], f'{key} checksum mismatch'
    assert len(payload) == item['bytes'], f'{key} size mismatch'
source = (root / 'src/data.json').read_bytes()
assert hashlib.sha256(source).hexdigest() == manifest['sourceSnapshotSha256'], 'Rebuild after editing reviewed data'
assert json.loads(source)['buildStatus'] == 'complete', 'Dashboard authoring is unfinished'
html = (dist / manifest['html']['path']).read_text()
assert not re.search(r'<meta\s+name=[\"\']data-app-local-thread', html), 'Local task metadata is present'
print('Verified complete static dashboard and reviewed snapshot.')
