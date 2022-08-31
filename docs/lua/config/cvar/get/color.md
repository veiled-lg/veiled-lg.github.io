---
sidebar_position: 6
sidebar_label: 'color'
---

# get_color

Returns the color as 32 bit `number`.

## Declaration

`:get_color([weapon_id])`

## Syntax

```lua
Draw.text(5, 5, my_var:get_color(), 'My cool watermark');
```

## Parameter

### `weapon_id`

The index of the current weapon to get an individual value, otherwise `nil` for the default value.

## Return value

If the function succeeds, the return type is `number`.

If the function fails, the return value is `nil`.
