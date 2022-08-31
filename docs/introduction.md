---
sidebar_position: 1
sidebar_label: 'Introduction'
---

# Introduction

[url_lg]: https://looking-glass.io
[url_lua51]: https://www.lua.org/manual/5.1
[url_luajit]: https://luajit.org

Veiled is a KVM (QEMU/libvirt) framework to develop script based applications efficiently and with little effort.
It uses Lua as scripting language, is written in C and extends the client of [Looking Glass][url_lg] for the `Draw` and `Mouse` API.

Under the hood, [LuaJIT][url_luajit] ([Lua 5.1][url_lua51]) is used to get the maximum performance out of the scripting language and fully supports its full functionality.
