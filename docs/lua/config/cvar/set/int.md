---
sidebar_position: 2
sidebar_label: 'int'
---

# set_int

Set `value` and cast / format it before, if the internal type is not `int`.

## Declaration

`:set_int(value[, weapon_id])`

## Syntax

```lua
my_var:set_int(10)
```

## Parameters

### `value`

The new `value` of the respective `CVar`.

### `weapon_id`

Optional the index of the current weapon to get an individual value, otherwise `nil` for the default value.

## Return value

The function returns no value.
