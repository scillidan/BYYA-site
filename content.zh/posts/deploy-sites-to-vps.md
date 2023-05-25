---
title: Deploy Sites to VPS
author: scillidan
date: 2023-05-01
description: "Deploy Site, Rocky Linux, Apache , Ubuntu, Nginx, VPS"
categories: ""
tags: ["html"]
BookToC: true
---

## 腾讯云VPS

1. 注册腾讯云帐号 > 实名认证
2. 云服务器 > 立即选购
3. 云产品 > DNS解析DNSPod > 域名注册
4. 域名 > 操作 > 解析 > 记录管理 > 添加记录 >  ...
5. 网站备案 > 我的备案 > 网站信息 > 新增网站 > ...
6. 留意核验短信

流程记于2021年。随着平台的更新，具体操作可能会有些变化，但旧笔记可以沿用。

## Rocky Linux[^1] ^ Ubuntu

云服务器 > 实例 > … > 更多操作 > 重装系统 > 公共镜像 > ...

{{< tabs "tab1" >}}
{{< tab "Rocky Linux" >}}
```bash
hostnamectl
dnf update -y
```

If you need migrating To Rocky Linux.

```bash
dnf update -y
wget https://raw.githubusercontent.com/rocky-linux/rocky-tools/main/migrate2rocky/
chmod u+x migrate2rocky.sh
./migrate2rocky.sh -V
./migrate2rocky.sh -r
sudo reboot
```
{{< /tab >}}
{{< tab "Ubuntu" >}}
```bash
sudo apt-get update
sudo apt-get upgrade -y
```
{{< /tab >}}
{{< /tabs >}}

## Apache[^2] ^ Nginx[^3]

{{< tabs "tab2" >}}
{{< tab "Rocky Linux" >}}
```bash
dnf install httpd php -y
systemctl enable httpd
```

![](../media/rocky-linux-&-apache.png)
{{< /tab >}}
{{< tab "Ubuntu" >}}
```bash
sudo apt-get install nginx -y
sudo service nginx restart
systemctl daemon-reload
```
{{< /tab >}}
{{< /tabs >}}

## create sites.conf[^4] [^5]

{{< tabs "tab3" >}}
{{< tab "Rocky Linux" >}}
```bash
mkdir -p /var/www/example.com
vi /etc/httpd/conf.d/example.com.conf
```

```
<VirtualHost *:80>
  ServerName example.com
  ServerAlias www.example.com
  # ServerName www.demo.example.com
  # ServerAlias demo.example.com
  DocumentRoot /var/www/example.com
  DirectoryIndex index.php index.htm index.html
  ErrorLog /var/log/httpd/example.com-error.log
  CustomLog /var/log/httpd/example.com-access.log combined
</VirtualHost>
```

```bash
sudo systemctl restart httpd
sudo systemctl status httpd
```

{{< /tab >}}
{{< tab "Ubuntu" >}}
```bash
sudo mkdir /etc/nginx/vhost
sudo mkdir /var/www/example.com
sudo vi /etc/nginx/vhost/example.com.conf
```

```
server {
    listen 80;
    server_name www.example.com example.com;
    root /var/www/example.com;
    index index.html index.htm index.php;

    error_page 403 /403.html;
    error_page 404 /404.html;
    error_page 500 501 502 503 504 /50x.html;

    location = 403.html {
        internal;
    }
    location = /404.html {
        internal;
    }
    location = /50x.html {
        internal;
    }
}
```

```bash
sudo vi /etc/nginx/nginx.conf
```

```
http {
        …
        include /etc/nginx/vhost/*.conf;
}
```

```bash
sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/default_bak
sudo vi /etc/nginx/sites-available/default
```

type `:.,$d` in command mode to delete all, then write

```
server {
    listen 80 default_server;
    server_name _;
    return 404;
}
```

```bash
sudo systemctl restart httpd
```
{{< /tab >}}
{{< /tabs >}}

## SSL[^6] [^7]

{{< tabs "tab4" >}}
{{< tab "Rocky Linux" >}}

```bash
sudo dnf install epel-release -y
sudo dnf install certbot python3-certbot-apache mod_ssl -y
sudo systemctl restart httpd
sudo systemctl status httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo firewall-cmd --list-all
sudo certbot --apache example.com, www.example.com, demo.example.com
crontab -e
```

```
0 0 * * * /usr/bin/certbot renew > /dev/null 2>&1
```

```bash
sudo certbot renew --dry-run
sudo certbot --apache delete -d example1.com
```

{{< /tab >}}
{{< tab "Ubuntu" >}}
```bash
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python-certbot-nginx
sudo certbot --authenticator webroot --installer nginx
sudo certbot --nginx -d example.com
sudo certbot renew --dry-run
```
{{< /tab >}}
{{< /tabs >}}

## git init (on PC)

```cmd
git config --global user.name ".username"
git config --global user.email .email
git config --list
ssh-keygen -t rsa -C ".email"
ssh -T git@github.com
```

copy content from C:\Users\username\.ssh\id_rsa.pub, then open https://github.com/settings/keys and paste in.  
open https://github.com/new, then create a repository.

{{< tabs "tab5" >}}
{{< tab "General" >}}
```cmd
mkdir dir
cd dir
git init
git remote add origin git@github.com:xxx/xxx.git
git remote add vps git@.ip:/home/git/example.com.git
```

edit `.git/config`

```
[remote "origin"]
    …
    url = git@.ip:/home/git/example.com.git
    fetch = +refs/heads/*:refs/remotes/vps/*
```

edit `.gitignore`

```
node_modules/
...
```
{{< /tab >}}
{{< tab "Hexo" >}}

edit `dir/_config.yml`

```
deploy:
  - type: git
    repo: git@github.com:user/repo.git
    branch: main
  - type: git
    repo: git@.ip:/home/git/example.com.git
    branch: main
```

{{< /tab >}}
{{< /tabs >}}

## adduser[^8]

```bash
sudo adduser git
sudo passwd git
sudo chown git:git -R /var/www/example.com
su git
cd ~
mkdir .ssh
touch .ssh/authorized_keys
vim .ssh/authorized_keys, paste in
ssh git@.ip
```

## create post-receive[^8]

```bash
sudo yum install git -y
cd ~
mkdir example.com.git
cd example.com.git
git config --global init.defaultBranch main
git init --bare
cd hooks
touch post-receive
chmod +x post-receive
vi post-receive
```

```
#!/bin/bash -l
GIT_REPO=/home/git/example.com.git
TMP_GIT_CLONE=/tmp/example.com
PUBLIC_WWW=/var/www/example.com
rm -rf ${TMP_GIT_CLONE}
git clone $GIT_REPO $TMP_GIT_CLONE
rm -rf ${PUBLIC_WWW}/*
cp -rf ${TMP_GIT_CLONE}/.public/* ${PUBLIC_WWW}
# cp -rf ${TMP_GIT_CLONE}/* ${PUBLIC_WWW}
```

## git push (on PC)

```
git add .
git commit -m "text"
git push -u origin master
```

## Reference

[^1]: https://docs.rockylinux.org/guides/migrate2rocky
[^2]: https://docs.rockylinux.org/guides/web/apache-sites-enabled
[^3]: https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-8
[^4]: https://docs.rockylinux.org/guides/web/apache-sites-enabled
[^5]: https://linuxapt.com/blog/706-encrypt-apache-webserver-with-lets-encrypt-ssl-certificate-on-rocky-linux-8
[^6]: https://www.tecmint.com/secure-apache-with-ssl-in-rocky-linux
[^7]: https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-centos-8
[^8]: https://github.com/scillidan/gh-cos/blob/main/deploy-hexo-sites-to-vps.md