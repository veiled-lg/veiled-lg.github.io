---
sidebar_position: 2
---

# From hex

Creates a new `CVar` `userdata` and sets the internal type to `u8[8]`.

## Declaration

`.create_color(name, weapon_based, description, hex)`

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

### `hex`

The color code as 32 bit hexadecimal.

## Return value

:::caution

This method uses `alloc` under the hood and should **not** be called in a loop, but at a safe place at the beginning of a script.
Veiled releases the memory when terminated with `free`.

:::

If the function succeeds, the return type is `userdata`.

If the function fails, the return value is `nil`.
