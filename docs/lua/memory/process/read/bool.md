---
sidebar_position: 1
sidebar_label: 'bool'
---

# read_bool

Reads a `boolean` from given `address`.

## Declaration

`.read_bool(address)`

## Syntax

```lua
if Process.read_bool(0xDEADBEEF) then
  -- do something special
end
```

## Parameter

### `address`

The `address` in the target process space as number (32/64 bit integer).

## Return value

If the function succeeds, the return type is `boolean`.

If the function fails, the return type is `nil`.
