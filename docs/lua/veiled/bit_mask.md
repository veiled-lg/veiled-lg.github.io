---
sidebar_position: 2
---

# bit_mask

Creates a mask using bitwise `AND` from `flag`.

## declaration

`.bit_mask(...flag)`

## Syntax

```lua
-- will result in 1 | 2 | 4 | 8 => 15
print(Veiled.bit_mask(1, 2, 4, 8))
```

## Parameters

### `flag`

:::tip

The parameter can be used as often as you want.

:::

Flag which is composed `N` times by bitwise `AND`.

:::info

`N` stands for the number of parameters (respective `flag`), which was passed to the function.

:::
