---
title: Linux基础操作速查
sidebarDepth: 2
---

## 常用命令

| 序号 | 命令 | 英文 | 作用 |
| --- | --- | --- | --- |
| 01 | ls | list | 查看当前文件夹下的内容 |
| 02 | pwd | print work directory | 查看当前的文件夹 |
| 03 | cd [文件夹] | change directory |  切换文件夹 |
| 04 | touch [文件名] | touch | 如果文件不存在，新建文件 |
| 05 | mdir [文件夹] | make directory | 创建文件夹 |
| 06 | rm [文件名] | remove | 删除文件 |
| 07 | rmdir -rf [文件夹]| remove directory | 删除文件夹 |
| 08 | mv [旧地址 新地址] | move | 移动或重命名 |
| 09 | cp [源地址 新地址] | copy | 复制文件 |

## 常用终端快捷键
[参考：常用终端快捷键](https://www.cnblogs.com/nihaorz/p/10916413.html)

## ls

* ls -a ，包括查看隐藏文件（.开头的文件）
* ls -l -h, 显示详细信息（包括权限，创建时间），让文件大小更直观
* ls \*.png， 通配符过滤显示列表中的文件，跟正则很像

## find

在某个文件夹中查找指定文件，相当于平时的ctr + f

* find 目录 -name 正则
## cd

* ~ 根目录
* .. 上一级目录
* \- 最近一次目录

## mkdir

* mkdir -p a/b/c ，递归创建目录

## rm

注意：rm删除直接把文件从磁盘上抹掉，无法恢复

* rm -f , 强制删除
* rm -r , 递归删除目录
* rm \*.png，匹配删除

## tree

列表显示文件目录

* tree -d ， 只显示目录

## cp

* cp -i ，提示是否需要覆盖文件（如果目标目录已存在该文件，这样更安全）
* cp -r , 复制目录

## mv

* mv -i ，提示是否需要覆盖文件（如果目标目录已存在该文件，这样更安全）

## cat

查看文件内容（适合查看内容比较少）

* cat 文件名
* cat -n 文件名，显示行号

## more

分屏查看文件内容（适合查看内容比较多）

* more 文件名
* 空格，下一屏
* enter，依次滚动一行
* b，上一屏
* f，下一屏
* q，退出
* /word，搜索字符串

## grep

搜索文件内容，相当于ui中的ctr+f

* grep "hello world" a.txt
* -n，显示行号
* -i，忽略大小写

## echo

配合> >> 保存到文件中

* echo xxxx >> 文件名 , 将内容xxxx写到文件中
* ls -a >> 文件名， 将输出的内容写到文件中

## 管道

将前一个命令的输出，传递给下一个命令处理

* ls -l -h | more ， 列表太长了，用more来显示
* ls -l -h | grep，列表要查询一些东西，用grep来查询
* ifconfig | grep inet，查看网卡对应的IP地址

## Linux上复制粘贴

在MAC上：

* ctr + fn + enter， 复制
* shift + fn + enter, 粘贴

### 远程

## 查看系统配置

* cat /etc/os-release

## 关机重启

维护远程系统的时候一般重启而非关闭。

* shutdown [选项] [可选时间] ，默认一分钟后关闭系统
* shutdown -c，取消关闭命令
* shutdown -r，重启

## 查看或配置网卡信息

* ifconfig , 查看/配置网卡
* ip addr | grep inet，查看ip地址
* ping IP地址（127.0.0.1测试本地网卡）

## SSH远程登录

Secure Shell（SSH）协议，转为远程登录会话提供的安全协议。它在SSH客户端和SSH服务器间实施了数据加密和压缩。(一般操作系统都安装了SSH服务器，默认监听22端口)

### 安装ssh

* 服务端安装ssh server，sudo apt install openssh-server
* 客户端安装ssh client, sudo apt install openssh-client
* （一般云主机会集成server，我们的操作系统都集成了client）
* netstat -t -l -p | grep ssh，查看shh服务是否开启
* sudo /etc/init.d/ssh [start/stop/restart]，启动/关闭/重启ssh服务


### 配置ssh

通过一些配置可以使其更加便捷：

* 配置文件于 ~/.ssh/config，若没有就touch一个
* 简单配置，存储IP地址，用户名，端口号。`ssh localUbuntu`
```txt

Host localUbuntu
  HostName 10.211.55.4
  User alan
  Port 22
  
```

* 使用钥匙对，免密登录。
```bash

# 在ssh server使用 ssh-keygen生成秘钥
ssh-keygen

# 上传公钥到服务器
ssh-copy-id user@hostname
```

### 命令
* ssh [-p port] ec2-user@18.191.147.122
* [-i 私钥的的路径.pem]， 指定私钥作为免密访问（权限需为700）
* exit ，退出ssh连接

## scp远程拷贝

该命令从客户端发出

* scp [-P 端口号] 文件路径A 文件路径B，把文件A复制到B
* scp user@remote:Desktop/01.js 01.js，将远程的脚本复制到当前文件夹下
* scp 01.js user@remote:Desktop/01.js，当前文件复制到远程文件夹中
* scp -r temp user@remote:Desktop，复制文件夹用-r
[几种linux的远程传输方式](https://www.cnblogs.com/anay/p/8682031.html)

### 用户与权限

1. 读，read，r，4
2. 写，write，w，2
3. 执行，excute，x，1

（如果文件夹没有可读权限，则无法进入文件夹）
（如果文件夹没有可写权限，则无法修改文件夹）
（如果一个文件夹没有执行权限x,则无法执行该文件夹相关的任何命令）


![35ef1036656303548d2e4457c21e340a.png](evernotecid://895A999E-A3C1-40F6-A602-39798D4605E0/appyinxiangcom/12904980/ENResource/p353)@w=500

## 组 与 用户

组，是一些用户的组合，他们往往具有相同的权限

## 超级用户 与 标准用户

* root用户用于系统的维护和管理
* 平时操作的用户称为标准用户，标准用户使用sudo可以提升至root用户权限

### 修改文件权限

用数字4、2、1相加的方法是最直观简洁的：

如，`chomod 777 文件名`

r(4) + w(2) + x(1) = 7
r(4) + w(2) = 6
r(4) + x(1) = 5

第一位：拥有者的权限
第二位：组权限
第三位：其他用户权限

### 组管理

* groupadd 组名，添加组
* groupdel 组名，删除组
* cat /etc/group，查看组信息
* chgrp 组名 文件名，修改文件或文件夹的所属组（change group）


### 运维类

## 磁盘信息

* df -h ，显示磁盘剩余空间（disk free）
* du 0h 目录名，显示目录下的文件大小（disk usage）

## 查看与终止 进程

* ps au ，显示通过终端启动的进程
* ps aux，显示所有进程
* top，动态显示所有进程
* kill [-9强制] pid

## 压缩和解压

* win中常用rar
* mac中常用zip
* linux中常用tar.gz


1. gzip压缩算法

```bash

# 压缩
tar -zcvf xxx.tar.gz 需打包的文件路径（多个文件用空格）

# 解压
tar -zxvf xxx.tar.gz

```

2.bzip2

```bash

# 压缩
tar -jcvf xxx.tar.bz2 需打包的文件路径（多个文件用空格）

# 解压
tar -jxvf xxx.tar.bz2

```


## 安装与卸载软件

* apt （Advanced Packaging Tool），包管理工具
* 可以在终端中，安装、卸载、更新软件

```bash


# 安装软件
sudo apt install 软件名

# 卸载软件
sudo apt remove 软件名

# 更新已安装的包
sudo apt upgrade 软件名
```

如果遇到没法定位的软件，使用如下方法修复
```bash

apt-get update
apt-get upgrade

```

## 下载文件

* wget 文件的ftp地址或http地址

## 查看主机监听的端口

* ss -tnl
* netstat -nltp

## 查看防火墙开放端口

* firewall-cmd --list-all


* 启用
```
sudo ufw enable

sudo ufw default deny 
 
```

* 关闭
```
sudo ufw disable 
```

* 查看防火墙状态
```
sudo ufw status
```

* 开启/禁用响应端口或服务
```
sudo ufw allow 80 允许外部访问80端口

 sudo ufw delete allow 80 禁止外部访问80 端口

 sudo ufw allow from 192.168.1.1 允许此IP访问所有的本机端口

 sudo ufw deny smtp 禁止外部访问smtp服务

 sudo ufw delete allow smtp 删除上面建立的某条规则

 sudo ufw deny proto tcp from 10.0.0.0/8 to 192.168.0.1 port 22 要拒绝所有的TCP流量从10.0.0.0/8 到192.168.0.1地址的22端口

 
 可以允许所有RFC1918网络（局域网/无线局域网的）访问这个主机（/8,/16,/12是一种网络分级）：
 sudo ufw allow from 10.0.0.0/8

 sudo ufw allow from 172.16.0.0/12

 sudo ufw allow from 192.168.0.0/16
```
## 后台运行
参考：[Linux 技巧：让进程在后台运行更可靠的几种方法](https://www.cnblogs.com/xyyhcn/p/12501959.html)

例如：
* 使mongod后台运行 mongod .... & （后面加上&号）
* 是node程序后台运行 node ... &
* 后台运行的程序，需要使用kill命令来停止他们

* 正在前台运行的程序，使用 ctr+z暂停，然后 bg %[数字] 把程序挂到后台运行。
* jobs -l ，查看有多少个后台程序
* fg %[数字]，把后台程序掉到前台执行

## 查看程序运行使用了哪些网路端口
netstat -t -l -p

## 发送get请求或下载
wget http://xxxxx



[参考：ss用法](https://www.imooc.com/article/26972)