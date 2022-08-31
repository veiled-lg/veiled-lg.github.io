---
sidebar_position: 5
sidebar_label: 'a (transparency)'
---

# a

Returns the alpha value (transparency) and optionally offers the possibility to update this value.

## Declaration

`:a([value])`

## Syntax

```lua
-- read
print(col:a())

-- write
col:a(180)
```

## Parameters

### `value`

Optionally the alpha value (transparency) between `0` and `255` to update the color value.

## Return value

If the function succeeds, the return value is `number` between `255` and `0`.

If the function fails, the return value is `nil`.

## Remarks

The function can only fail if it was called as a table method with `.` instead of a metatable method with `:`.

```lua
-- bad, prints "nil"
print(col.a())

-- bad, does nothing
col.a(25)
```
