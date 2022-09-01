---
sidebar_position: 1
---

# register

Registers a `script` for the desired `process`, which will be executed as soon as the `process` is started.

## Declaration

`.register(process, script)`

## Syntax

```lua
Veiled.register('csgo.exe', 'some-script');
```

## Parameters

### `process`

The name of the target process.

### `script`

The name of the script to run when `process` exists.

## Return value

The function returns no value.
