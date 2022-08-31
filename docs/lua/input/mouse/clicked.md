---
sidebar_position: 4
---

# clicked

Returns `true` when the mouse `button` is released.

## Declaration

`.clicked(button)`

## Syntax

```lua
if Mouse.clicked('mouse1') then
  -- do something special
end
```

## Parameter

### `button`

The mouse `button` that should be checked, possible values are:

- `mouse1` - left button
- `mouse2` - right button
- `mouse3` - middle button
- `mouse4` - lower side button
- `mouse5` - upper side button

## Return value

If the function succeeds, the return type is `boolean`

If the function fails, the return type is `nil`.
