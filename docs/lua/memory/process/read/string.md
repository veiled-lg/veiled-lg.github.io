---
sidebar_position: 12
sidebar_label: 'string'
---

# read_string

Reads a string from given `address`.

## Declaration

`.read_string(address, length[, unicode])`

## Syntax

```lua
local value = Process.read_string(0xDEADBEEF)
```

## Parameters

### `address`

The `address` in the target process space as number (32/64 bit integer).

### `length`

The `length` of the string in memory as `number`.

### `unicode`

If `unicode` is `true`, then `wchar_t` is used under the hood.

## Return value

If the function succeeds, the return type is `string`.

If the function fails, the return type is `nil`.
