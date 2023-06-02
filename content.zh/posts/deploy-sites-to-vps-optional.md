---
title: Deploy Sites to VPS (Expand Content)
author: scillidan
date: 2023-05-02
description: Rocky Linux, Apache , 腾讯云, VPS, CDN, VNC, pm2, rsync
categories: 
tags: ["html"]
BookToC: true
---

## CDN

1. 云产品 > 对象存储 > 存储桶列表 > 创建存储桶 > ... > 公有读私有写
2. 内容分发网络 > 域名管理 > 添加域名 > ... > 静态加速/流媒体点播加速 > COS源
    - 高级配置 > 宽带封顶配置 > 访问闸值
3. DNS解析 > 添加记录 > 记录类型CNAME...

### HTTPS

1. 云产品 > SSL证书 > 我的证书 > 申请
2. 内容分发网络 > 域名管理 > 管理 > HTTPS配置 > 配置证书

### CORS

可用于CDN字体服务等。详情请参考[设置静态网站](https://cloud.tencent.com/document/product/436/14984)、[设置跨域访问](https://cloud.tencent.com/document/product/436/13318)。大致流程为：

1. 新建储存桶，用于静态网站
    - 储存桶 > 安全管理 > 跨域访问CORS设置 > 添加规则
    - 上传网页字体文体到储存桶
2. 给储存桶设置CDN加速
    - 设置HTTP响应头配置
3. 在`.css`文件中调用字体文件的网址，进行测试

## VNC

### VNC server[^1] [^2]

```bash
sudo dnf update -y
sudo dnf install -y epel-release
sudo dnf groupinstall -y "Xfce" "base-x"
sudo systemctl set-default graphical
sudo reboot
```

```bash
sudo dnf install tigervnc-server
sudo adduser vncuser
sudo passwd vncuser
sudo su - vncuser
```

```bash
sudo dnf install firewalld -y
sudo systemctl enable firewalld
sudo systemctl start firewalld
sudo firewall-cmd --state
firewall-cmd --zone=public --permanent --add-service=vnc-server
firewall-cmd --reload
```

```bash
su vncuser
vim ~/.vnc/config
```

```
session=xfce
geometry=1280x800
# localhost
# alwaysshared
```

```bash
sudo systemctl start firewalld
```

If you need to kill the process.

```bash
pf -fu vncuser
kill -9 vncuser
```

### VNC viewer (on PC)

```cmd
scoop install tightvnc
tvnviewer vpsip::5901 -password=yourpwd
```

{{< expand "reference" "..." >}}
1. https://www.howtoforge.com/how-to-install-vnc-server-on-rocky-linux/
{{< /expand >}}

## PM2[^3]

```bash
dnf install nodejs -y
npm install --global yarn
yarn global add pm2
```

```
<VirtualHost *:80>
  ServerName www.home.example.com
  ServerAlias home.example.com

  ErrorLog /var/log/httpd/home.example.com-error.log
  CustomLog /var/log/httpd/home.example.com-access.log combined
  ProxyPreserveHost On
  ProxyPass / http://localhost:3000/
  ProxyPassReverse / http://localhost:3000/
</VirtualHost>
```

## rsync

```bash
dnf install rsync
```

## gopher[^4]

...

## Reference

[^1]: https://techviewleo.com/install-and-configure-vnc-server-on-rocky-linux
[^2]: https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-firewalld-on-rocky-linux-8
[^3]: https://stackoverflow.com/questions/74681648
[^4]: https://lantian.pub/article/modify-website/serve-gopher-with-nginx.lantian