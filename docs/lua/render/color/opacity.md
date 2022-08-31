---
sidebar_position: 6
sidebar_label: 'opacity (transparency)'
---

# opacity

Returns the value of the opacity and optionally offers the possibility to update it.

## Declaration

`:opacity([value])`

## Syntax

```lua
-- read
print(col:opacity())

-- write
col:opacity(0.5)
```

## Parameters

### `value`

Optionally the opacity (transparency) between `1` and `0`, where `1` is interpreted as `255`.

## Return value

If the function succeeds, the return value is `number` between `1` and `0`.

If the function fails, the return value is `nil`.

## Remarks

The function can only fail if it was called as a table method with `.` instead of a metatable method with `:`.

```lua
-- bad, prints "nil"
print(col.opacity())

-- bad, does nothing
col.opacity(0.5)
```
