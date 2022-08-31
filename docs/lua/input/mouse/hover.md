---
sidebar_position: 2
---

# hover

Checks if the mouse is within a region.

## Declaration

`.hover(x, y, w, h)`

## Syntax

```lua
if Mouse.hover(50, 50, 500, 500) then
  -- mouse is in between x: 50-550 and y: 50-550
end
```

## Parameters

### `x`

The X coordinates of the region in pixels.

### `y`

The Y coordinates of the region in pixels.

### `w`

The width of the region in pixels.

### `h`

The height of the region in pixels.

## Return value

If the function succeeds, the return type is `boolean`

If the function fails, the return type is `nil`.
