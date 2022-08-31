---
sidebar_position: 2
---

# Using hex

Sets the respective color channels.

## Declaration

`:set_color(hex[, weapon_id])`

## Syntax

```lua
local col = my_var:color();

if col ~= nil then
  print(string.format("0x%.8X", col))
end

my_var:color(nil, 0xFF323232)
```

## Parameters

### `hex`

The color code as 32 bit hexadecimal.

### `weapon_id`

Optional the index of the current weapon to get an individual value, otherwise `nil` for the default value.

## Return value

The function returns no value.
