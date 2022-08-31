---
sidebar_position: 2
---

# line

Draws a line.

## Declaration

`.line(start_x, start_y, end_x, end_y, color[, thickness])`

## Syntax

```lua
-- draws a red line from 5|5 to 50|50
Draw.line(5, 5, 50, 50, 0xFFFF0000)
```

## Parameters

### `start_x`

The start coordinates on the X axis of the window.

### `start_`

The start coordinates on the Y axis of the window.

### `end_x`

The destination coordinates on the X axis of the window.

### `end_y`

The destination coordinates on the X axis of the window.

### `color`

The color of the line, allowed types are `number` (32 bit hexadecimal), `string` or `userdata` of type `Color`.

### `thickness`

Optionally the thickness of the line (default: `1`).

## Return value

The function returns no value.

## Remarks

The method must be called within a render callback.
