## @cosm-changesets/test-utils

> Utilities for testing @cosm-changesets/\* packages

### Utilities

#### temporarilySilenceLogs

Silence the logs created but the `@cosm-changesets/logger` packages.

**Usage**

```
// index.test.ts
import { temporarilySilenceLogs } from "@cosm-changesets/test-utils";

temporarilySilenceLogs();
```
