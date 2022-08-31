---
sidebar_position: 7
sidebar_label: 'string'
---

# get_string

Returns either the existing value (if the internal type is `string`), otherwise it is formatted as described below:

|Type|Result|
|:-:|:-:|
|`bool`|`"true"` or `"false"`
|`int`|`"1234"`
|`float`|`"12.34"`
|`u8[4]`|`"rgba(0, 176, 255, 255)"`|

## Declaration

`:get_string([weapon_id])`

## Syntax

```lua
-- prints the (formatted) string value
print(my_var:get_string())
```

## Parameter

### `weapon_id`

The index of the current weapon to get an individual value, otherwise `nil` for the default value.

## Return value

If the function succeeds, the return type is `string`.

If the function fails, the return value is `nil`.
