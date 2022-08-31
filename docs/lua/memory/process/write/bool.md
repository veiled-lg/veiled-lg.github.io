---
sidebar_position: 1
sidebar_label: 'bool'
---

# write_bool

Writes the `value` as `boolean` to the given `address`.

## Declaration

`.write_bool(address, value)`

## Syntax

```lua
Process.write_bool(0xDEADBEEF, false)
```

## Parameter

### `address`

The `address` in the target process space as number (32/64 bit integer).

### `value`

The `boolean` value to write.

## Return value

The function returns no value.
