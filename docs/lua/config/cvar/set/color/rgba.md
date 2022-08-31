---
sidebar_position: 1
---

# set_color

Sets the respective color channels.

## Declaration

`:set_color(r, g, b, a[, weapon_id])`

## Syntax

```lua
my_var:set_color(0, 176, 255, 255)
```

## Parameters

### `r`

The value between `0` and `255` for the red tone of the color.

### `g`

The value between `0` and `255` for the green tone of the color.

### `b`

The value between `0` and `255` for the blue tone of the color.

### `a`

The value between `0` and `255` (default) for the alpha channel (transparency) of the color.

### `weapon_id`

Optional the index of the current weapon to get an individual value, otherwise `nil` for the default value.

## Return value

The function returns no value.
