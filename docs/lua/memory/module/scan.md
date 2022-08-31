---
sidebar_position: 3
---

# scan

Searches the region of the module for the given `signature`.

## Declaration

`:scan(signature)`

## Syntax

```lua
local results = mod:scan('A1 ? ? ? ? 33 D2 6A 00 6A 00 33 C9 89 B0')

if results ~= nil then
  for _,address = pairs(results) do
    -- do something with address
  end
end
```

## Parameter

### `signature`

The instruction `signature` as [Hex Rays IDA](https://hex-rays.com/ida-pro/) like string.

## Return value

If the function succeeds, the return type is `table`.

If the function fails, the return value is `nil`.
