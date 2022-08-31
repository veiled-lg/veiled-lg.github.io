---
sidebar_position: 12
sidebar_label: 'string'
---

# write_string

Writes the `string` `value` to the given `address`.

## Declaration

`.write_string(address, value[, length, unicode])`

## Syntax

```lua
Process.write_string(0xDEADBEEF, "Hello, World")
```

## Parameters

### `address`

The `address` in the target process space as number (32/64 bit integer).

### `value`

The `string` to write.

### `length`

By default the length of `value` is evaluated, with this you can limit the length.

### `unicode`

If `unicode` is `true`, then `wchar_t` is used under the hood.

## Return value

The function returns no value.
