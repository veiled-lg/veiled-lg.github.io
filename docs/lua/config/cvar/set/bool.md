---
sidebar_position: 1
sidebar_label: 'bool'
---

# set_bool

Set `value` if the internal type is `boolean`, `number` or `string`.

## Declaration

`:set_bool(value[, weapon_id])`

## Syntax

```lua
my_var:set_bool(false)
```

## Parameters

### `value`

The new `value` of the respective `CVar`.

### `weapon_id`

Optional the index of the current weapon to get an individual value, otherwise `nil` for the default value.

## Return value

The function returns no value.
