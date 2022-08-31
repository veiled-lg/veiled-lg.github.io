---
sidebar_position: 1
---

# From rgba

Creates a new `CVar` `userdata` and sets the internal type to `u8[4]`.

## Declaration

`.create_color(name, weapon_based, description, r, g, b[, a])`

## Syntax

```lua
local aim_active = CVar.create_bool('aim_active', nil, 'Enables the aimbot', true);
```

## Parameters

### `name`

The internal name of the `CVar` `userdata`, which must be an unique `string`.

### `weapon_based`

Determines if the `CVar` has multiple ways to represent a value, must be `true`, `false`, or `nil`.

### `Description`

If the `description` is not an empty `string` or `nil`, the `description` will be written above when saving.
There is also the possibility to use it in the UI (as an example: tooltip).

### `r`

The value between `0` and `255` for the red tone of the color.

### `g`

The value between `0` and `255` for the green tone of the color.

### `b`

The value between `0` and `255` for the blue tone of the color.

### `a`

Optional the value between `0` and `255` (default) for the alpha value (transparency) of the color.

## Return value

:::caution

This method uses `alloc` under the hood and should **not** be called in a loop, but at a safe place at the beginning of a script.
Veiled releases the memory when terminated with `free`.

:::

If the function succeeds, the return type is `userdata`.

If the function fails, the return value is `nil`.
