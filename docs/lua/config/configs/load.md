---
sidebar_position: 5
---

# load

Reads a configuration file from the file system and parses its contents.

:::info

All configurations can be found at `~/.local/share/veiled/configs/<process.exe>/[NAME].conf`.

:::

## Declaration

`.load(name)`

## Syntax

```lua
Configs.load('default')
```

## Parameters

### `name`

The `name` of the config file without `.conf` extension.

## Return value

The function returns no value.
