---
sidebar_position: 2
---

# From hex

Creates a new `Color` `userdata` and assigns it the values from `hex` to it.

## Declaration

`.new(hex)`

## Syntax

```lua
-- r: 0, g: 176, b: 255
local col = Color.new(0xFF00B0FF)
```

## Parameters

### `hex`

The color code as 32 bit hexadecimal.

## Return value

The function returns `userdata` of type `Color`.

## Remarks

```lua
local hex = 0xFF00B0FF
```

If a `userdata` type is returned, then an allocation is performed in the background.
Accordingly, the method should **not** be called in a loop, but at a safe place at the beginning of a script.
