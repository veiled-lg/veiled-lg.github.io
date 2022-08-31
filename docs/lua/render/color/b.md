---
sidebar_position: 4
sidebar_label: 'b'
---

# b

Returns the blue tone and optionally offers the possibility to update it.

## Declaration

`:b([value])`

## Syntax

```lua
-- read
print(col:b())

-- write
col:b(180)
```

## Parameters

### `value`

Optionally the blue tone between `0` and `255` to update the color value.

## Return value

If the function succeeds, the return value is `number` between `255` and `0`.

If the function fails, the return value is `nil`.

## Remarks

The function can only fail if it was called as a table method with `.` instead of a metatable method with `:`.

```lua
-- bad, prints "nil"
print(col.b())

-- bad, does nothing
col.b(25)
```
