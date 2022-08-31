---
sidebar_position: 6
---

# save

Writes a configuration file to the file system.

:::info

All configurations can be found at `~/.local/share/veiled/configs/<process.exe>/[NAME].conf`.

:::

## Declaration

`.save(name)`

## Syntax

```lua
Configs.save('default')
```

## Parameters

### `name`

The `name` of the config file without `.conf` extension.

## Return value

The function returns no value.
