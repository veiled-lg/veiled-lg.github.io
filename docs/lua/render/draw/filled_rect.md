---
sidebar_position: 4
---

# filled_rect

Draws a filled rectangle.

## Declaration

`.filled_rect(x, y, w, h, color[, rounding])`

## Syntax

```lua
-- draws a 10x10px filled rectangle at 5|5
Draw.filled_rect(5, 5, 10, 10, 0xFFFF0000)
```

## Parameters

### `x`

The X coordinates of the window in pixels.

### `y`

The Y coordinates of the window in pixels.

### `w`

The width of the rectangle in pixels.

### `h`

The height of the rectangle in pixels.

### `color`

The color of the line, allowed types are `number` (32 bit hexadecimal), `string` or `userdata` of type `Color`.

### `rounding`

Optional rounding of the corners (default: `0`).

## Return value

The function returns no value.

## Remarks

The method must be called within a render callback.
