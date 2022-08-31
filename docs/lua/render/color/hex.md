---
sidebar_position: 7
---

# hex

Returns the color value as 32 bit hexadecimal number.

## Declaration

`:hex([value])`

## Syntax

```lua
-- read, prints "0xXXXXXXXX
print(string.format("0x%.8X", col:hex()))

-- write
col:hex(0xFF323232)
```

## Parameters

### `value`

Optionally che color code as 32 bit hexadecimal.

## Return value

If the function succeeds, the return value is `number`.

If the function fails, the return value is `nil`.

## Remarks

The function can only fail if it was called as a table method with `.` instead of a metatable method with `:`.

```lua
-- bad, prints "nil"
print(col.hex())

-- bad, does nothing
col.hex(0xFF323232)
```
