---
sidebar_position: 3
---

# get_module

Searches for the `Module` with the given `name`.

If available in the internal cache the object will be returned, otherwise a new module will be created if `name` was found.

## Declaration

`.get_module(name)`

## Syntax

```lua
local mod = Process.get_module('engine.dll')

if mod ~= nil then
  -- do something with it
end
```

## Parameter

### `name`

:::info

The given `name` of the module is searched case sensitively.

:::

## Return value

If the function succeeds, the return type is `userdata`.

If the function fails, the return value is `nil`.
