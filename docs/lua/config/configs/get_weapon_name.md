---
sidebar_position: 2
---

# get_weapon_name

Returns the name of the weapon with the associated `id` if possible.

## Declaration

`.get_weapon_name(id)`

## Syntax

```lua
local wpn_name = Configs.get_weapon_name(1)

if wpn_name ~= nil then
  print(wpn_name)
end
```

## Parameters

### `id`

The unique `id` of the weapon.

## Return value

If the function succeeds, the return type is `string`.

If the function fails, the return type is `nil`.
