---
title: (draft) Termux
author: scillidan
date: 2023-06-01
description: ""
categories: ""
tags: [""]
BookToC: true
bookHidden: true
---

## install

pkg install termux-setup-storage
apt update && apt upgrade
apt install git fzf
pkg install curl wget perl coreutils zsh

## kbd

nvim ~/.termux/termux.properties
extra-keys = [ ]

### python39

pkg install tur-repo
pkg update
pkg install python3.9

### trash-cli

apt install python-pip
pip install trash-cli

### exa

pkg install exa

## vnc

### firewall

### tmp

pkg install proot
termux-chroot
trash  /usr/tmp/.X11-unix/*