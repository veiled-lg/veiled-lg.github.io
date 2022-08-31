---
sidebar_position: 3
---

# Floating

Creates a new `CVar` `userdata` and sets the internal type to `float`.

## Declaration

`.create_float(name, weapon_based, description, value[, min, max])`

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

### `value`

The current `value` as `number`.

### `min`

The maximum value that `value` must not exceed

### `max`

The minimum value that `value` must not exceed

## Return value

:::caution

This method uses `alloc` under the hood and should **not** be called in a loop, but at a safe place at the beginning of a script.
Veiled releases the memory when terminated with `free`.

:::

If the function succeeds, the return type is `userdata`.

If the function fails, the return value is `nil`.
