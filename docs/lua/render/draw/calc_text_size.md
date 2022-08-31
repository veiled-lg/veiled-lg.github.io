---
sidebar_position: 10
---

# calc_text_size

Calculate the width and height of given `text`.

## Declaration

`.calc_text_size(text)`

## Syntax

```lua
local text_width, text_height = Draw.calc_text_size('Foo')
-- or ignore height if you only need the width
local text_width = Draw.calc_text_size('Foo')
```

## Parameters

### `text`

The text to render.

## Return value

If the function succeeds, the return values are width and height as `number`.

## Remarks

The method must be called within a render callback.
