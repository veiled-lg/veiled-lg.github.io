---
sidebar_position: 3
---

# get_configs

Returns an index based `table` with all config names.

## Declaration

`.get_configs()`

## Syntax

```lua
local configs = Configs.get_configs()

if configs ~= nil then
  for _,config_name in pairs(configs) do
    print(config_name)
  end
end
```

## Return value

If the function succeeds, the return type is `table`.

If the function fails, the return type is `nil`.
