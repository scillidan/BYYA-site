---
title: Renpy Project Devlog (Lrnlog)
author: scillidan
date: 2023-06-30
description: "Renpy, Love2d, Devlog, Learn"
categories: ""
tags: ["log"]
BookToC: true
---

## 𝖗𝖊𝖓𝖕𝖞

[07.03] 日志的问题是，它不像文档那样有条理。我在`7月2号`潦草写了`7月3号`日志，而前后文，连续地读起来…自然的、即时的、未多少加工的，就是日志，的问题…目前，它使我感觉轻松。我也需要用它们，去训练我缺乏运动的表达欲。  
[07.02] 我有归档各类，之间相关联的源的表格文件。在`lua.csv`中——和其他的，作同样用的表一样，我之前进行了一些粗略的排序和标记——竖列「分组」的旁边，是一列「标签」，填写此表时，我在这里作了校正和扩充，并根据它们来排序。另外，以往的这些表格，我大约在2021-2022年集中收集并记录，保存在一个`pkg.txt`里。在2022-2023年，它被多次拆分、合并，变得更小、更有序，以至可以进一步处理、使用。在人生时间、相关事件空间的图表上，它们应该是多而松散、广袤而荒凉的。这表，就是前时间的表格陷阱所捕到的，非季节性的物产。  
[06.30] 我觉得有必要、我应该记录一份日志。以便后来回收和它用。

### 表

||For|Tags|Days|
|-|-|-|-|
|✖|[renpydraw](https://github.com/NyashniyVladya/RenPyDraw)|other||
|✖|[renpy-color-picker](https://github.com/shawna-p/renpy-color-picker)|other||
|✖|[lezinventory-framework](https://www.lezcave.com/lezinventory-framework)|fmk||
|✖|[pink-engine](https://pink-productions.itch.io/pink-engine)|fmk||
|✖|[renpygame](https://github.com/DRincs-Productions/Renpygame)|fmk||
|✖|[renpy_rhythmbeats](https://github.com/CharlieFuu69/RenPy_RhythmBeats)|fmk||
|✖|[nqtr-system](https://github.com/DRincs-Productions/NQTR-System)|fmk||
|✖|[rdaa](https://github.com/Xrisofor/RDAA)|tool||
||[renpy2flatpak](https://github.com/dcbaker/renpy2flatpak)|tool, pkger||
||[renpyfmt](https://github.com/kobaltcore/renpyfmt)|tool||
||[renpy-demotools](https://github.com/Ayowel/renpy-demotools)|tool||
||[renpy-counter](https://github.com/b1f6c1c4/renpy-counter)|tool||
|✖|[fdtorenpy](https://github.com/RunawayHaggis/FDtoRenpy)|act||
|✖|[renpymaker](https://renpymaker.com)|act||
|✖|[puppitor](https://github.com/njunius/Puppitor)|act||
|✖|[twine-to-renpy-tool](https://ludowoods.itch.io/twine-to-renpy-tool)|act||
|✖|[renpy_parser](https://github.com/gameboxthing/renpy_parser)|act||
|✖|[autofocus](https://github.com/Elckarow/Autofocus)|script||
|⤴|[replacement-blur](https://github.com/renpy/renpy/issues/4442#issuecomment-1470990844)|script||
|✖|[renpydialogtoaudio](https://github.com/lugia19/renpyDialogToAudio)|aud||
|✖|[expreviewer](https://github.com/Elckarow/Expreviewer)|sn||
|✖|[better-emr-phone](https://github.com/Elckarow/Better-EMR-Phone)|sn||
|✖|[renpy_phone](https://github.com/albireo-games/renpy_phone)|sn||
|✔|[character-customization](https://patreon.renpy.org/character-customization.html)|txt, screen|0.5|
|✔|[multiple-dialogue](https://patreon.renpy.org/multiple-dialogue.html)|txt, screen|0.5|
|✖|[renpy-rainbowtext](https://github.com/Lezalith/renpy-rainbowtext)|txt|0.5|
||[ren-py-fancytext](https://github.com/yukinogatari/Ren-Py-FancyText)|txt|0.5|
|✔|[chatlogging](https://github.com/JimTheCactus/chatlogging)|txt screen|1|
|✔|[renpy-encyclopaedia](https://github.com/jsfehler/renpy-encyclopaedia)|txt, screen|1|
|✔|[renpy-word-description](https://github.com/valery-iwanofu/renpy-word-description)|txt, frame|1|
|⤴|[renpy-tutorial-conditional-main-menu-background](https://github.com/jbondguy007/Renpy-tutorial-conditional-main-menu-background)|sn||
|✔|[renpygui](https://github.com/shawna-p/EasyRenPyGui)|ui|1|
|⤴|[renpy-stuff-and-cool-things-i-put-in-the-demo](https://albireogames.tumblr.com/post/684623598192902144/renpy-stuff-and-cool-things-i-put-in-the-demo)|log||
|✔|[feniksdev.com](https://feniksdev.com)|doc|1|


### 词表

[缩写病] 我有记所有缩写的文件`zk.csv`。大部分词从[allacronyms.com](https://www.allacronyms.com)查到，但也有其他来源、例外情况。如`scene`的缩写选择了`sn`，来自[从新·EVA特报2中可以获取到什么信息？](https://www.bilibili.com/video/BV1zt411E7RV/)。

## 𝖑𝖔𝖛𝖊𝖎𝖎𝖉

[05.30] [lunarvim](https://github.com/LunarVim/LunarVim)很酷，`love2d`很难，已弃🤡