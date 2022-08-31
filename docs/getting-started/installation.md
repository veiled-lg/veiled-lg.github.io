---
sidebar_position: 1
---

# Installation

This article assumes you already have a fully functional libvirt domain with CPI passthrough working on a dedicated monitor. Otherwise, check out [this ArchWiki page](https://wiki.archlinux.org/title/PCI_passthrough_via_OVMF).

[url_lg_libvirt]: https://looking-glass.io/docs/B5.0.1/install/#libvirt-configuration
[url_lg_deps]: https://looking-glass.io/docs/B5.0.1/build/#required-dependencies
[url_arch]: https://archlinux.org

:::caution

Veiled was developed using [Arch Linux][url_arch] and therefore does not guarantee that the code will compile on other systems without further modification.

:::

First you **must** configure your libvirt domain as described [here][url_lg_libvirt].

## Building

:::info

Make sure that you have installed the [dependencies][url_lg_deps] of Looking Glass as well as `luajit` and `rust`.

:::

:::caution

Veiled Looking Glass is compiled **without** Wayland support and thus requires X11 as display server.

:::
