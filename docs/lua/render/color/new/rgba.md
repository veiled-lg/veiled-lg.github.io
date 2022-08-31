---
sidebar_position: 1
---

# From rgba

Creates a new `Color` `userdata` and assigns it the values `r`, `g`, `b` and optionally `a`.

## Declaration

`.new(r, g, b[, a])`

## Syntax

```lua
-- If a is not given 255 is used as default value
local col = Color.new(0, 176, 255)
-- or
local col = Color.new(0, 176, 255, 220)
```

## Parameters

### `r`

The value between `0` and `255` for the red tone of the color.

### `g`

The value between `0` and `255` for the green tone of the color.

### `b`

The value between `0` and `255` for the blue tone of the color.

### `a`

The value between `0` and `255` (default) for the alpha value (transparency) of the color.

## Return value

The function returns `userdata` of type `Color`.

## Remarks

If a `userdata` type is returned, then an allocation is performed in the background.
Accordingly, the method should **not** be called in a loop, but at a safe place at the beginning of a script.
