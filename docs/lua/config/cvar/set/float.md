---
sidebar_position: 3
sidebar_label: 'float'
---

# set_float

Set `value` and cast / format it before, if the internal type is not `float`.

## Declaration

`:set_float(value[, weapon_id])`

## Syntax

```lua
my_var:set_float(10)
```

## Parameters

### `value`

The new `value` of the respective `CVar`.

### `weapon_id`

Optional the index of the current weapon to get an individual value, otherwise `nil` for the default value.

## Return value

The function returns no value.
