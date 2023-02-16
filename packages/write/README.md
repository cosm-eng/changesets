# @cosm-changesets/write

Writes a changeset to a file.

```js
import write from "@cosm-changesets/write";

const changeset = {
  summary: "A description of a minor change",
  releases: [
    { name: "@cosm-changesets/something", type: "minor" },
    { name: "@cosm-changesets/something-else", type: "patch" },
  ],
};

const uniqueId = await write(changeset, cwd);
console.log(uniqueId); // orange-foxes-waggle
```

For example, it can convert:

```json
{
  "summary": "A description of a minor change",
  "releases": [
    { "name": "@cosm-changesets/something", "type": "minor" },
    { "name": "@cosm-changesets/something-else", "type": "patch" }
  ]
}
```

to

```markdown
---
"@cosm-changesets/something": minor
"@cosm-changesets/something-else": patch
---

A description of a minor change
```

This package will take care of generating a unique id for the changeset.
