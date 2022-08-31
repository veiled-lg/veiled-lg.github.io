---
sidebar_position: 1
---

# register_weapon

Set `value` if the internal type is `boolean`, `number` or `string`.

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
