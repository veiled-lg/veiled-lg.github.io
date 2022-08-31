---
sidebar_position: 3
---

# rect

Draws a rectangle.

## Declaration

`.rect(x, y, w, h, color[, thickness, rounding])`

## Syntax

```lua
-- draws a 10x10px rectangle at 5|5
Draw.rect(5, 5, 10, 10, 0xFFFF0000)
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

### `thickness`

Optionally the thickness of the rectangle (default: `1`).

### `rounding`

Optional rounding of the corners (default: `0`).

## Return value

The function returns no value.

## Remarks

The method must be called within a render callback.
