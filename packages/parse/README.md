# @cosm-changesets/parse

[![View changelog](https://img.shields.io/badge/changelogs.xyz-Explore%20Changelog-brightgreen)](https://changelogs.xyz/@cosm-changesets/parse)

Parses a changeset from its written format to a data object.

```js
import parse from "@cosm-changesets/parse";

const changeset = `---
"@cosm-changesets/something": minor
"@cosm-changesets/something-else": patch
---

A description of a minor change`;

const parsedChangeset = parse(changeset);
```

For example, it can convert:

```md
---
"@cosm-changesets/something": minor
"@cosm-changesets/something-else": patch
---

A description of a minor change
```

to

```json
{
  "summary": "A description of a minor change",
  "releases": [
    { "name": "@cosm-changesets/something", "type": "minor" },
    { "name": "@cosm-changesets/something-else", "type": "patch" }
  ]
}
```

Note that this is not quite a complete Changeset for most tools as it lacks an `id`.

For written changesets, the id is normally given as the file name, which parse is not aware of.
