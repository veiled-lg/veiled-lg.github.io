---
sidebar_position: 8
---

# scissor_begin

Start of redering within a region. Anything that rises above it is not visible.

## Declaration

`.scissor_begin(x, y, w, h)`

## Syntax

```lua
if Draw.scissor_begin(10, 10, 100, 100) then
  -- render your stuff

  Draw.scissor_end()
end
```

## Parameters

### `x`

The X coordinates of the region in pixels.

### `y`

The Y coordinates of the region in pixels.

### `w`

The region width in pixels.

### `h`

The region height in pixels.

## Return value

If the function succeeds, the return value is `true`.

If the function fails, the return value is `false`

## Remarks

:::caution

When everything has been rendered within the region, `scissor_end` must be called. Check [this `api`](scissor_end).

:::

The method must be called within a render callback.
