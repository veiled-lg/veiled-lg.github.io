---
sidebar_position: 3
sidebar_label: 'bool'
---

# get_bool

Returns the current value as `boolean` if possible.

## Declaration

`:get_bool([weapon_id])`

## Syntax

```lua
if my_var:get_bool() then
  -- do something special
end
```

## Parameter

### `weapon_id`

The index of the current weapon to get an individual value, otherwise `nil` for the default value.

## Return value

If the function succeeds, the return type is `boolean`.

If the function fails, the return value is `nil`.
