---
sidebar_position: 4
sidebar_label: 'int'
---

# get_int

Returns the current value as `number` without decimals.

## Declaration

`:get_int([weapon_id])`

## Syntax

```lua
if my_var:get_int() == 4 then
  -- do something special
end
```

## Parameter

### `weapon_id`

The index of the current weapon to get an individual value, otherwise `nil` for the default value.

## Return value

If the function succeeds, the return type is `number`.

If the function fails, the return value is `nil`.
