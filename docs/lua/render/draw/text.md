---
sidebar_position: 7
---

# text

Draws a text.

## Declaration

`.text(x, y, color, text[, flags])`

## Syntax

```lua
Draw.text(5, 5, 0xFFFFFFFF, 'Some cool watermark')
```

## Parameters

### `x`

The X coordinates of the window in pixels.

### `y`

The Y coordinates of the window in pixels.

### `color`

The color of the line, allowed types are `number` (32 bit hexadecimal), `string` or `userdata` of type `Color`.

### `text`

The text to render.

### `flags`

Optionally the `TEXT_FLAG_` [constants](constants) can be used here.

## Return value

The function returns no value.

## Remarks

To create a bit mask like in C (e.g. `1 | 2 | 4`), use `Veiled.bit_mask()`.

```lua
-- would be the same as using TEXT_FLAG_CENTERED directly
local flags = Veiled.bit_mask(TEXT_FLAG_CENTER_X, TEXT_FLAG_CENTER_Y)
```

The method must be called within a render callback.
