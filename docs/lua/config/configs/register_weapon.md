---
sidebar_position: 1
---

# register_weapon

Registers a key-value pair (Id, Name) to get individual values of the `CVar` `userdata`.

## Declaration

`.register_weapon(id, name)`

## Syntax

:::tip

It makes sense to start with the highest index to reduce the number of `alloc()` or `realloc()` calls internally.

:::

```lua
Configs.register_weapon(64, 'Revolver')
--[[

...

]]--
Configs.register_weapon(1, 'Deagle')
```

## Parameters

### `id`

The unique `id` of the weapon.

### `name`

The corresponding `name` of the weapon

## Return value

The function returns no value.
