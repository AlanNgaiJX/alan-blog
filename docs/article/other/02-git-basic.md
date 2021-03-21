---
title: Git常用命令速查
sidebarDepth: 2
---

## git log

查看日志，常规操作，必备

```bash

# 日志
git log

# 概要日志
git log --oneline

# 带样式的日志
git log --graph --date=relative --pretty=tformat:'%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%an %ad)%Creset'

```

## git status

查看工作区状态

```bash

# 查看工作区
git status

# 概要查看工作区
git status --short

```

## git checkout

切换分支，放弃更改

```bash

# 切换分支
git checkout dev

# 新建并切换到分支
git checkout -b dev

# 新建一个分支 它拉取远程分支origin/devBranch
git checkout -b devBranch origin/devBranch

# 放弃工作区文件更改（撤销modified）
git checkout main.js

# 放弃工作区所有文件更改
git checkout .

```

## git commit

将暂存区的文件，提交到本地仓库

```bash

# 提交
git commit

# 概要提交
git commit -m

# 追加到上次提交记录中（此时可以编辑上次记录的描述）
git commit --amend

# 直接追加到上次提交记录中，不编辑
git commit --amend --no-edit

```

## git reset

reset本质上就是改变当前HEAD指针指向哪个commit

```bash

# 默认mixed reset，reset时，保留当前工作区的内容，并把add到暂存区的东西放回工作区
git reset --mixed（默认） HEAD或commitid

# 软reset，reset时，保留当前工作区的内容，暂存区的内容也没变
git reset --soft HEAD或commitid

# 硬reset，丢弃当前工作区和暂存区的内容（危险）
git reset --hard HEAD或commitid

##

# 撤销add，相当于mixed reset到HEAD
git reset HEAD [可以指定文件名]

# 撤销commit，相当于软reset到HEAD
git reset --soft HEAD
```
参考：
[hard soft mixed 的区别](https://www.cnblogs.com/keystone/p/10700617.html)
[hard reset 后怎么挽救](https://www.cnblogs.com/dongcanliang/p/11162235.html)


## git revert

调整HEAD的指向，除了reset外，revert也能胜任。

* reset 是使HEAD指针指向之前的commit，log中会丢失后面那些commit的记录，如若需要恢复则需要配合reflog去查找。

* revert则是生成之前commit的一份拷贝，再commit一次，所以保留了log信息。（建议回退时使用这种操作，便于多人维护）

```bash

# 平稳回滚commit，完整保留log记录
git revert commit_sha1

```

## git rebase

rebase变基，跟merge的功能很像，但会修改commit记录。

除此之外，rebase还常用来压缩整理commit信息

```bash
# 在不同分支上执行rebase，跟merge相似可参考区别
git rebase 分支名

# 在同一分支上整理多个commit
git rebase -i 起始commitId [结束commitId]

进入图形界面后
r 可以重名名 
f 可以压缩commit记录到后一次commit中
```

注意：
git rebase会修改提交记录，应仅在自己的本地分支上执行rebase操作，否则会使多人维护变得混乱。

参考：
[视频，rebase  与 merge 的区别](https://haokan.baidu.com/v?vid=13952907173298275157&pd=bjh&fr=bjhauthor&type=video)
[视频，使用rebase整理commit](https://www.bilibili.com/video/av34852122/)

## git merge

合并分支

```bash

# 将目标分支合并到当前分支上
git merge 分支名

```

## git pull

pull相当于fetch + merge操作。

场景：远程仓库的commit平行或超前于本地仓库的commit时（说白了就是本地仓库在开发时不是最新的代码，没有进行一次pull操作，或线上仓库开发进度比你本地的快）。

操作：此时执行git pull会把远程仓库最新的代码fetch下来，并与当前的commit merge一次产生新的commit，这样会在log记录上产生了一个棱形（使用# 带样式的日志，可观察到）

后果：产生太多的棱形会使整体commit看起来很臃肿，不便于review；如果能保持一种线性的commit记录，那是最理性的。

解决方案：

* --rebase操作（建议每次pull都使用rebase）
```bash

git pull --rebase

```

参考：
[聊下git pull --rebase](https://www.cnblogs.com/wangiqngpei557/p/6056624.html)

## git push

push都是些与远程仓库进行交互的操作

```bash

# 将新的本地分支推送到远程仓库，
# -u是设置了分支跟踪， 
# origin 是 remote 名, dev 是远程仓库的分支名
git push --set-upstream origin dev

# 删除远程仓库的分支
git push origin -d dev

```

## git remote

这个东西用在你需要考虑维护多个地方仓库的时侯会考虑，或者修改仓库源的时侯。

```bash

# 建立与远程仓库的关系（通常要push到新的远程仓库时需要这个操作）
git remote add origin url

# 一个本地仓库可以与多个远程仓库建立关系
git remote add origin2 url...

# 修改目标远程仓库url
git remote set-url origin url

```

## git branch

操作分支

```bash

# 创建分支
git branch 分支名

# 删除分支
git branch -d 分支名 [-D强制删除]

# 重命名分支
git branch -m 旧名 新名

# 设置上游分支
git branch --set-upstream-to origin xxx 

```

## git stash

我喜欢称 stash 为剪切板，它在 stage的维度之外。stash不仅可以实现在不同分支分享工作区更改，也是减少add、commit的利器。

```bash

# 保存内容
git stash push [-m "描述"]

# 查看剪切板
git stash list

# 查看剪切板有什么更改（diff）
git stash show stash@{0} 

# 使用内容并删除记录
git stash pop [stash@{0}]

# 使用内容但不删除记录
git stash apply stash@{0}

# 删除某条记录(慎用)
git stash drop 

# 删除所有记录(慎用)
git stash clear

```

## git reflog

reflog中存储了仓库的所有操作记录，硬reset或rebase丢失的commit都能找回

```bash

git reflog

```







* * *

## github创建项目后
```bash

# 步骤1：与远程仓库建立关系
git remote add origin https://github.com/AlanNgaiJX/resp.git

# 步骤2：重命名分支名字（默认是master但是黑人运动提倡使用main）
git branch -M main

# 步骤3：将分支push出去，--set-upstream是main
git push -u origin main

```

## 查看所有分支，并拉取远程分支
```bash

# 查看所有分支
git branch -a

# 拉取远程分支（命名一个分支，将远程分支的内容拉取到该分支）
git checkout -b dev origin/dev

```

## 将当前修改的内容提交到新的分支

```bash

# 步骤1：在当前的master分支上的修改暂存起来
git stash

# 步骤2：暂存修改后，在本地新建分支（new_branch为新分支的名字）
git checkout -b new_branch

# 步骤3：将暂存的修改放到新建分支中
git stash pop

# 步骤4：进行commit
git commit

# 步骤5：将提交的内容push到远程服务器
git push

```

## 将某分支的内容更新到当前分支

```bash

# 步骤1：切回到master分支
git checkout master

# 步骤2：更新master分支
git pull

# 步骤3：切回dev分支
git checkout dev

# 步骤4：合并分支
git merge master
```
