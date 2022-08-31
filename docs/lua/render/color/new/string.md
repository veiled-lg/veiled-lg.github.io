---
sidebar_position: 3
---

# From string

Creates a new `Color` `userdata` and assigns it the color from `format`.

## Declaration

`.new(format)`

## Syntax

```lua
local col = Color.new('#FFFFFFFF')
-- or
local col = Color.new('rgb(255, 255, 255)')
-- or
local col = Color.new('rgba(255, 255, 255, 255)')
```

## Parameters

### `format`

The color in a valid `format`

|Format|Description|
|:---:|---|
|`#...`|The color code as a 32-bit hexadecimal value after `#`.|
|`rgba(...)`| The red, green and blue tones of the color including the transparency as the 4th parameter. All values must be between `0` and `255`.
|`rgb(...)`| The red, green and blue tones of the color. All values must be between `0` and `255`.

## Return value

The function returns `userdata` of type `Color`.

## Remarks

If a `userdata` type is returned, then an allocation is performed in the background.
Accordingly, the method should **not** be called in a loop, but at a safe place at the beginning of a script.
