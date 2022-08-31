---
sidebar_position: 5
sidebar_label: 'float'
---

# get_float

Returns the current value as `number`.

## Declaration

`:get_float([weapon_id])`

## Syntax

```lua
if my_var:get_float() >= 2.5 then
  -- do something special
end
```

## Parameter

### `weapon_id`

The index of the current weapon to get an individual value, otherwise `nil` for the default value.

## Return value

If the function succeeds, the return type is `number`.

If the function fails, the return value is `nil`.
