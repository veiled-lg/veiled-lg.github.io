---
sidebar_position: 4
---

# get_current

Return the name of the current configuration if one is loaded.

## Declaration

`.get_current()`

## Syntax

```lua
local current_config = Configs.get_current()

if current_config ~= nil then
  print(current_config)
end
```

## Return value

If the function succeeds, the return type is `table`.

If the function fails, the return type is `nil`.
