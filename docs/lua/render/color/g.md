---
sidebar_position: 3
sidebar_label: 'g'
---

# g

Returns the green tone and optionally offers the possibility to update it.

## Declaration

`:g([value])`

## Syntax

```lua
-- read
print(col:g())

-- write
col:g(180)
```

## Parameters

### `value`

Optionally the green tone between `0` and `255` to update the color value.

## Return value

If the function succeeds, the return value is `number` between `255` and `0`.

If the function fails, the return value is `nil`.

## Remarks

The function can only fail if it was called as a table method with `.` instead of a metatable method with `:`.

```lua
-- bad, prints "nil"
print(col.g())

-- bad, does nothing
col.g(25)
```
