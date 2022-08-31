---
sidebar_position: 1
sidebar_label: 'Introduction'
---

# Introduction

[url_lg]: https://looking-glass.io
[url_lg_libvirt]: https://looking-glass.io/docs/B5.0.1/install/#libvirt-configuration
[url_lg_deps]: https://looking-glass.io/docs/B5.0.1/build/#required-dependencies
[url_lua51]: https://www.lua.org/manual/5.1
[url_luajit]: https://luajit.org
[url_arch]: https://archlinux.org
[url_arch_wiki_ovmf]: https://wiki.archlinux.org/title/PCI_passthrough_via_OVMF

Veiled is a KVM (QEMU/libvirt) framework to develop script based applications efficiently and with little effort.
It uses Lua as scripting language, is written in C and extends the client of [Looking Glass][url_lg] for the `Draw` and `Mouse` API.

Under the hood, [LuaJIT][url_luajit] ([Lua 5.1][url_lua51]) is used to get the maximum performance out of the scripting language and fully supports its full functionality.

## Installation

:::caution

Veiled was developed using [Arch Linux][url_arch] and therefore does not guarantee that the code will compile on other systems without further modification.

:::

This article assumes you already have a fully functional libvirt domain with CPI passthrough working on a dedicated monitor. Otherwise, check out [this ArchWiki page][url_arch_wiki_ovmf].

First you **must** configure your libvirt domain as described [here][url_lg_libvirt].

### Building

:::info

Make sure that you have installed the [dependencies][url_lg_deps] of Looking Glass as well as `luajit` and `rust`.

:::

:::caution

Veiled Looking Glass is compiled **without** Wayland support and thus requires X11 as your display server.

:::
