---
sidebar_position: 11
---

# calc_health_color

Calculates the color from green to red based on the given `health`.

## Declaration

`.calc_health_color(health, max_health)`

## Syntax

```lua
local text_width, text_height = Draw.calc_health_color(50, 100)
```

## Parameters

### `health`

The current health as `number` which must not be higher than `max_health.

### `max_health`

The maximum health as `number`.

## Return value

If the function succeeds, the return value is the color as 32 bit hexadecimal `number`.

If the function fails, the return value is `nil`.
