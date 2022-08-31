---
sidebar_position: 2
sidebar_label: 'find'
---

# find

Searches for the `CVar` with the given `name` and returns it on success.

## Declaration

`:find(name)`

## Syntax

```lua
local my_var = CVar.find('some_var');

if my_var ~= nil then
  print(my_var:get_string())
end
```

## Parameter

### `name`

The internal and unique `name` of the target `CVar´`.

## Return value

If the function succeeds, the return type is `userdata`.

If the function fails, the return value is `nil`.
