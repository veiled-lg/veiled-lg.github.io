---
sidebar_position: 5
---

# circle

Draws a circle.

## Declaration

`.circle(x, y, radius, color, segments[, thickness])`

## Syntax

```lua
Draw.circle(5, 5, 25, 'rgb(0, 255, 0)', 30)
```

## Parameters

### `x`

The X coordinates of the window in pixels.

### `y`

The Y coordinates of the window in pixels.

### `radius`

The circle radius in pixels.

### `color`

The color of the line, allowed types are `number` (32 bit hexadecimal), `string` or `userdata` of type `Color`.

### `segments`

The `number` of segments for the circle. The higher the better, but can negatively affect the performance. `30` is a good value.

### `thickness`

Optionally the thickness of the rectangle (default: `1`).

## Return value

The function returns no value.

## Remarks

The method must be called within a render callback.
