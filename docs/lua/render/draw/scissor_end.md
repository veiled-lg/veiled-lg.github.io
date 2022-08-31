---
sidebar_position: 9
---

# scissor_end

Ends rendering within a specific region.

## Declaration

`.scissor_end()`

## Syntax

```lua
if Draw.scissor_begin(10, 10, 100, 100) then
  -- render your stuff

  Draw.scissor_end()
end
```

## Return value

The function returns no value.

## Remarks

:::caution

This function refers to `scissor_begin` and must be called in advance. Check [this `api`](scissor_begin).

:::

The method must be called within a render callback.
