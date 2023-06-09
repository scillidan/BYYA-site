---
title: Renpy Project Devlog
author: scillidan
date: 2023-07-04
description: "Renpy, Love2d, Devlog, Log"
categories: ""
tags: ["log"]
BookToC: true
---

## 表

### todo

||||
|-|-|-|
| ? | 文本触发图表内绘制 | |
| ? | 独立文本框, 可切换激活 | |
| ? | 变量图片 | |
| ? | 变量文字 | |
| or | 词条增加内容行? | 词条主题=词条, 词条=词条行, 隐藏未解锁 |
| try | 通过变量锁定、解锁交互 | |
| try | 场景布局拆分, 词打开同级文本框 | |
| test | 事件交互条件和限制 | |
| test | 词打开次级文本框 | |
| test | 角色Buff图标 | |
| test | 标记文字块, 文字块高亮 < 词条解锁 | |
| test | 未解锁状态的缺省值, 提示用的临时词条 < 词条主题, 词条, 显示未解锁; 文字注释 | |
| test | 图表, 风格地图 | |

### idea

|  | 标签 | 参考标签 | 相关 | 特殊 | 事件 |
| - | - | - | - | - | - |
|  | 主题 | | | | |
|  | 声音 | | | | |
|  | 动画 | | | | |
|  | UI | | | | |
|  | 画面 | 等角视角 | | | 视角 |
| ✖ | 时间 | 时间系统 | | | |
|  | 取向 | 选择取向 | 对话, 行为 | 判定 | 文本, 场景, 计数, 数值 |
|  | 互动 | 指向点击 | 角色, 检查 | | 文本, 场景, 道具 |
|  | 剧情丰富 | | 文本量, 演出 | | |
|  | 视觉小说 | | 背景, 人物 | | |

## log

[07.07] docker-desktop抽风，重新弄了一遍本地的jeffyfin和komga服务，没用docker。看了一天Vikings。  
[07.06] 每天大概看10~15条，只标记，不进行测试。最后再看其中的文档集。看了一天Vikings。  
[07.05] 遍历中。  
[07.04] 拆开了Devlog和Lrnlog。需要再遍历一边https://github.com/methanoliver/awesome-renpy，之前跳过了不少。  
[07.03] 表格中增加了`Note`列，意思尽可能具体。还要填一些其他表。注册了danbooru帐号以收藏一些图片（其本上跟背景有关，少量人物），可以用在sd-webui的某个插件中。这上面的图太多了，先浏览些页数，以后可以按词搜索。看了一天的Vikings S02。  
[07.03] 日志的问题是，它不像文档那样有条理。我在`7月2号`潦草写了`7月3号(伪)`条目，而前后文，连续地读起来…自然的、即时的、未多少加工的，就是日志，的问题…目前，它使我感觉轻松。我也需要用它们，去训练我缺乏运动的表达欲。  
[07.02] 我有归档各类，之间相关联的源的表格文件。在`lua.csv`中——和其他的，作同样用的表一样，我之前进行了一些粗略的排序和标记——竖列「分组」的旁边，是一列「标签」，填写此表时，我在这里作了校正和扩充，并根据它们来排序。另外，以往的这些表格，我大约在2021-2022年集中收集并记录，保存在一个`pkg.txt`里。在2022-2023年，它被多次拆分、合并，变得更小、更有序，以至可以进一步处理、使用。在人生时间、相关事件空间的图表上，它们应该是多而松散、广袤而荒凉的。这表`T1`，就是前时间的表格陷阱所捕到的，非季节性的物产。  
[06.30] 我觉得有必要、我应该记录一份日志。以便后来回收和它用。

## 其他

|  | works | feel |  |
| - | - | - | - |
| game | 圣殿春秋 | ✔ | 演出 |
| drama | 维京 | ✔ | 演出 |
| drama | 孤国春秋 | ✖ | 剧情 |
| game | 白色相薄1 | ✖ | 角色、演出 |
| game | 极乐迪斯科 | ✖ | RPG类型 |
| game | FLOWERS | ✖ | 系列相关 |
| game | 命运石之门 | ✔ | 角色 |
| game | 428 | ✔ | 角色、演出、剧情 |
| game | 弹丸论破 | ✔ | 角色、演出、剧情 |
| game | 虚ノ少女 | ✔ | 配乐、系列相关 |
| game | Clannad | ✔ | 角色、系列相关 |
| game | 魔法使之夜 | ✔ | 角色、演出 |