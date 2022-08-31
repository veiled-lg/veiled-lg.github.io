---
sidebar_position: 2
sidebar_label: 'r'
---

# r

Returns the red tone and optionally offers the possibility to update it.

## Declaration

`:r([value])`

## Syntax

```lua
-- read
print(col:r())

-- write
col:r(25)
```

## Parameters

### `value`

Optionally the red tone between `0` and `255` to update the color value

## Return value

If the function succeeds, the return value is `number` between `255` and `0`.

If the function fails, the return value is `nil`.

## Remarks

The function can only fail if it was called as a table method with `.` instead of a metatable method with `:`.

```lua
-- bad, prints "nil"
print(col.r())

-- bad, does nothing
col.r(25)
```
