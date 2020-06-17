# 分布式版本控制系统

分布式版本控制系统（Distributed Version Control System, DVCS）是一种不需要中心服务器来管理文件版本的方法，但是它也可以使用中心服务器。也即，中心服务器是可选的。

知名的分布式版本控制系统有：

- **Git** （[https://git-scm.com](https://git-scm.com/)） Git（读音为/gɪt/）是 Linus Torvalds 为了帮助管理 Linux 内核开发而编写的一个开放源码的版本控制软件。它采用 C 语言实现，是开源界目前最广泛使用的分布式版本控制系统。Git 是基于 GNU General Public License version 2.0 (GPLv2) 授权的开源项目。
- **Mercurial** （https://www.mercurial-scm.org/） Mercurial 是一个轻量级分布式版本控制系统，采用 Python 语言实现，因而天生跨平台支持更完善。它易于学习和使用，扩展性强。Mercurial 是基于 GNU General Public License version 2.0 (GPLv2) 授权的开源项目。

知名的集中式版本控制系统有：

- **Subversion** （http://subversion.apache.org/）
- **CVS** （http://www.nongnu.org/cvs/）

相比集中式版本控制系统，分布式版本控制系统的主要优点是：

1. 它比集中式的版本控制系统更灵活。因为它除了支持传统集中式的工作流，还支持其他各种工作流； 例如使用 Git，每个开发者通过克隆（git clone），在本地机器上拷贝一个完整的 Git 版本库。开发者可以提交到本地，变更可以合并到 DVCS 的任何其他用户的本地版本库中， 实现非常灵活的工作流。
2. 它比集中式版本控制系统快得多。它不依赖于服务器端软件的支持就可以工作。因为大多数操作可以在客户机本地执行，不需要通过网络操作。

鉴于 Git 在开源界的广泛使用，本书将只使用 Git 作为版本控制系统。

### [#](https://cloudappdev.netlify.app/book/content.html#_4-1-git-快速入门)4.1 Git 快速入门

以下将以 Windows Pro 64-bit 为平台，讲述 Git 的安装，以及常见的基本命令行操作。注意，Git 本是 Linux 上原生的应用程序，涉及的 Git 命令也当然都适用于 Linux。

#### [#](https://cloudappdev.netlify.app/book/content.html#_4-1-1-windows-上安装-git)4.1.1 Windows 上安装 Git

1. 下载并安装： https://git-scm.com/downloads

![Git for Windows](https://cloudappdev.netlify.app/book/img/git_tutorial/git_for_windows_download.png)

图4.1.1 Git For Windows 的下载页面

默认的安装路径是 `C:\Program Files\Git`，安装程序会自动添加 `C:\Program Files\Git\cmd` 到系统 PATH 环境变量中。安装完成后，打开命令行窗口，查看版本，命令如下：

```shell
git --version
```

按下列命令配置它（需替换用户自己的名字和邮箱）：

```shell
git config --global user.name "YourName"
git config --global user.email "email@example.com"
git config --global gui.encoding "utf-8"
```

它将在 `%USERPROFILE%` 里自动创建一个文本文件 `.gitconfig`，内容如下：

```shell
C:\Users\bobyuan>type .gitconfig
[user]
        name = YourName
        email = email@example.com
[gui]
        encoding = utf-8
```

这里创建的是当前用户的全局配置信息。对于单个具体的 `Git` 项目，如果不指定的话将继承上面的全局配置，当然，也可以指定本项目内私有的配置信息，即不使用 `--global` 参数。私有的配置信息将保存在项目文件夹内的 `.git\config` 文件里。

如果为了方便，避免每次访问远程仓库的时候 Git 都问你登录的用户名和密码，希望将登录用户名和密码保存在本地，可以使用以下命令。它将把登录成功的用户名和密码保存在 `%USERPROFILE%` 里“.git-credentials”文件中，同样是个文本文件。

```shell
# to store the passwords in .git-credentials in your home directory.
git config --global credential.helper store
```

而对于单个具体 Git 项目私有的配置，即不使用 `--global`参数，可以这样。

```shell
# to store the passwords in your specific Git project.
git config credential.helper store

# let Git to resume to asking you for credentials every time.
git config --unset credential.helper
```

另外，此安装包自带了一个极为简单的图形界面，运行 `git-gui` 来打开。

![git-gui](https://cloudappdev.netlify.app/book/img/git_tutorial/git_gui_main.png)

图4.1.2 Git For Windows 自带的图形用户界面

如果我们主要是在 Windows 上工作，免费的 Git 图形界面软件值得推荐的是 TortoiseGit （网址是 https://tortoisegit.org/）。图形界面的使用不是本文讨论的范畴，它只是为了方便脱离命令行使用，原理都是一样的。如果我们掌握了 Git 命令行操作，理解了 Git 的工作原理，那么图形界面软件的操作也肯定是不在话下了。

#### [#](https://cloudappdev.netlify.app/book/content.html#_4-1-2-常见的基本命令行操作)4.1.2 常见的基本命令行操作

##### [#](https://cloudappdev.netlify.app/book/content.html#_1）本地版本库)1）本地版本库

在本地创建一个文件夹 `learngit`，通过 `git init` 命令把这个目录初始化成 Git 可以管理的版本库（repository）。为了避免出现一些不必要的麻烦，请注意文件夹路径不要包含中文，空格等字符。

```shell
D:\TEMP>mkdir learngit

D:\TEMP>cd learngit

D:\TEMP\learngit>git init
Initialized empty Git repository in D:/TEMP/learngit/.git/
```

我们可以看到一个隐藏文件夹 `.git`，它里面有多个文件，是 Git 在本地的版本库。

Git 的版本库里存了很多东西，其中最重要的就是称为 Stage（或者叫 Index）的暂存区，还有 Git 为我们自动创建的第一个分支 `master`，以及指向 `master` 的一个指针 `HEAD`。

提交到版本库需要分2步走：先是将文件添加（add）到暂存区，再一并提交（commit）到版本库里的`master`分支上。简单的示例如下图。

![git_repo_0](https://cloudappdev.netlify.app/book/img/git_tutorial/git_repository_0.png)

图4.1.3 Git 的版本库

小结，涉及创建本地版本库的常用命令有：

- 初始化本地版本库： `git init`

##### [#](https://cloudappdev.netlify.app/book/content.html#_2）添加并提交)2）添加并提交

新建一个文本文件 `readme.txt`。

```shell
D:\TEMP\learngit>echo Git is a version control system. > readme.txt

D:\TEMP\learngit>type readme.txt
Git is a version control system.
```

把它加到暂存区，再提交到版本库里。

```shell
D:\TEMP\learngit>git add readme.txt

D:\TEMP\learngit>git commit -m "add readme.txt into repository"
[master (root-commit) 0cd3695] add readme.txt into repository
 1 file changed, 1 insertion(+)
 create mode 100644 readme.txt
```

用 `git log` 查看提交记录，并用 `git status` 查看当前的工作区状态。

```shell
D:\TEMP\learngit>git log
commit b2054aba8f7be9049b35aec08574fde93547a11a (HEAD -> master)
Author: bobyuan <yuan.bob@outlook.com>
Date:   Tue Mar 12 10:34:11 2019 +0800

    add readme.txt into repository

D:\TEMP\learngit>git status
On branch master
nothing to commit, working tree clean
```

再多创建几个文件，将它们都提交到版本库里：

```shell
D:\TEMP\learngit>echo file1 content > file1.txt

D:\TEMP\learngit>echo file2 content > file2.txt

D:\TEMP\learngit>echo file3 content > file3.txt

D:\TEMP\learngit>git add file1.txt file2.txt file3.txt

D:\TEMP\learngit>git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   file1.txt
        new file:   file2.txt
        new file:   file3.txt


D:\TEMP\learngit>git commit -m "add file1, file2 and file3"
[master 2165d38] add file1, file2 and file3
 3 files changed, 3 insertions(+)
 create mode 100644 file1.txt
 create mode 100644 file2.txt
 create mode 100644 file3.txt
```

我们可以看到，提交成功后工作区空间便是空的了。用 `git log` 可以看到这次提交的记录。

```shell
D:\TEMP\learngit>git status
On branch master
nothing to commit, working tree clean


D:\TEMP\learngit>git log
commit 7c77f840f332074cb75085a31a8c5e862382055c (HEAD -> master)
Author: bobyuan <yuan.bob@outlook.com>
Date:   Tue Mar 12 10:35:26 2019 +0800

    add file1, file2 and file3

commit b2054aba8f7be9049b35aec08574fde93547a11a
Author: bobyuan <yuan.bob@outlook.com>
Date:   Tue Mar 12 10:34:11 2019 +0800

    add readme.txt into repository
```

小结，涉及添加并提交到本地版本库的常用命令有：

- 添加文件到暂存区： `git add <file>`
- 提交到本地版本库： `git commit -m "a short description"`
- 查看提交记录： `git log`
- 查看当前状态： `git status`

##### [#](https://cloudappdev.netlify.app/book/content.html#_3）修改并提交)3）修改并提交

给 `readme.txt` 增加一行文字。

```shell
D:\TEMP\learngit>echo Git is a free software.  >> readme.txt

D:\TEMP\learngit>type readme.txt
Git is a version control system.
Git is a free software.
```

我们可以通过 `git status` 看到，提示 `readme.txt` 文件已经更改。

```shell
D:\TEMP\learngit>git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   readme.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

如果此时我们对当前的修改不满意，想要回退到之前提交的版本，可以参照上面的提示，用命令 `git checkout -- readme.txt` 回退。当前的修改将被丢弃。注意，命令中的“--”很重要，没有它，就变成了“切换到另一个分支”的命令，

而如果我们认可当前的修改，我们就可以把它加入到工作区，然后提交到版本库。

```shell
D:\TEMP\learngit>git add readme.txt

D:\TEMP\learngit>git commit -m "append a line into readme.txt"
[master 03ac17e] append a line in readme.txt
 1 file changed, 1 insertion(+)
```

提交后，工作区的状态已经空了，且 `git log` 可以看到这次提交的记录。

```shell
D:\TEMP\learngit>git status
On branch master
nothing to commit, working tree clean

D:\TEMP\learngit>git log
commit 22ddccf734d1568391a0e84d1d2b07c02d2601b8 (HEAD -> master)
Author: bobyuan <yuan.bob@outlook.com>
Date:   Tue Mar 12 10:39:04 2019 +0800

    append a line into readme.txt

commit 7c77f840f332074cb75085a31a8c5e862382055c
Author: bobyuan <yuan.bob@outlook.com>
Date:   Tue Mar 12 10:35:26 2019 +0800

    add file1, file2 and file3

commit b2054aba8f7be9049b35aec08574fde93547a11a
Author: bobyuan <yuan.bob@outlook.com>
Date:   Tue Mar 12 10:34:11 2019 +0800

    add readme.txt into repository
```

在有些场景下，若出现了人为错误，希望修改先前的提交，可以用 `--amend` 命令。例如：

场景1： 如果提交后，不满意之前的提交信息（即 `-m` 参数后面跟的描述信息），可以修改它。命令格式如下：

```shell
git commit --amend -m "New commit message"
```

例如在下面的例子中，我们把之前的提交信息“append a line into readme.txt”改成了“New commit message”。

```shell
D:\TEMP\learngit>git commit --amend -m "New commit message"
[master 67e8599] New commit message
 Date: Tue Mar 12 10:39:04 2019 +0800
 1 file changed, 1 insertion(+)
```

从 git log 中可见，修改后描述从之前的“append a line into readme.txt”已经变成了“New commit message”。

```shell
D:\TEMP\learngit>git log
commit 67e8599c82a0623e2f77fbeab3aea77a46f7f764 (HEAD -> master)
Author: bobyuan <yuan.bob@outlook.com>
Date:   Tue Mar 12 10:39:04 2019 +0800

    New commit message

commit 7c77f840f332074cb75085a31a8c5e862382055c
Author: bobyuan <yuan.bob@outlook.com>
Date:   Tue Mar 12 10:35:26 2019 +0800

    add file1, file2 and file3

commit b2054aba8f7be9049b35aec08574fde93547a11a
Author: bobyuan <yuan.bob@outlook.com>
Date:   Tue Mar 12 10:34:11 2019 +0800

    add readme.txt into repository
```

场景2：当你提交之后，发现还有一个文件给漏掉了，想把它加到之前的提交上，而描述不变。命令格式如下：

```shell
git add another_file.txt
git commit --amend --no-edit
```

例如在下面的例子中，我们新增了一个文件 `another_file.txt`，把它加到先前的提交上。

```shell
D:\TEMP\learngit>echo It is another file that is needed. > another_file.txt

D:\TEMP\learngit>type another_file.txt
It is another file that is needed.

D:\TEMP\learngit>git add another_file.txt

D:\TEMP\learngit>git commit --amend --no-edit
[master b2750d1] New commit message
 Date: Tue Mar 12 10:39:04 2019 +0800
 2 files changed, 2 insertions(+)
 create mode 100644 another_file.txt
```

从 git log 中我们可以看到，最近的提交 ID 变化了。之前的提交是“67e8599c82a0623e2f77fbeab3aea77a46f7f764”，而现在是“b2750d179ac0ca566c6ba9dc8c88824d99a6086b”。

```shell
D:\TEMP\learngit>git log
commit b2750d179ac0ca566c6ba9dc8c88824d99a6086b (HEAD -> master)
Author: bobyuan <yuan.bob@outlook.com>
Date:   Tue Mar 12 10:39:04 2019 +0800

    New commit message

commit 7c77f840f332074cb75085a31a8c5e862382055c
Author: bobyuan <yuan.bob@outlook.com>
Date:   Tue Mar 12 10:35:26 2019 +0800

    add file1, file2 and file3

commit b2054aba8f7be9049b35aec08574fde93547a11a
Author: bobyuan <yuan.bob@outlook.com>
Date:   Tue Mar 12 10:34:11 2019 +0800

    add readme.txt into repository
```

小结，涉及修改并提交到本地版本库的常用命令有：

- 文件修改后提交到本地版本库，需要先添加（add）再提交（commit）。
- 如果要修改先前提交信息，或者将漏掉的文件加入到之前的提交，可以用 `--amend` 选项。

##### [#](https://cloudappdev.netlify.app/book/content.html#_4）暂存区)4）暂存区

我们再次修改 readme.txt，给它尾部增加一行文字，同时，创建了一个新文件 LICENSE 。查看状态，可以看到提示说，readme.txt 已被修改过（modified），而 LICENSE 未被版本管理跟踪（Untracked）。

```shell
D:\TEMP\learngit>echo Git has a mutable index called stage. >> readme.txt

D:\TEMP\learngit>echo License Information > LICENSE

D:\TEMP\learngit>git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   readme.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        LICENSE

no changes added to commit (use "git add" and/or "git commit -a")
```

若要将它们提交，依然是分2步走：先添加，再提交。

在添加后，我们可以看到这2个文件已经进入暂存区。如下图所示：

```shell
D:\TEMP\learngit>git add readme.txt LICENSE

D:\TEMP\learngit>git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   LICENSE
        modified:   readme.txt
```

![git_repo_1](https://cloudappdev.netlify.app/book/img/git_tutorial/git_repository_1.png)

图4.1.4 暂存区，添加文件到暂存区

提交后，暂存区就清空了。

```shell
D:\TEMP\learngit>git commit -m "modify readme.txt and add LICENSE"
[master be0af06] modify readme.txt and add LICENSE
 2 files changed, 2 insertions(+)
 create mode 100644 LICENSE

D:\TEMP\learngit>git status
On branch master
nothing to commit, working tree clean
```

![git_repo_2](https://cloudappdev.netlify.app/book/img/git_tutorial/git_repository_2.png)

图4.1.5 暂存区，提交文件到版本库

暂存区（Stage）提供了一个缓冲，我们把当前工作区（即当前文件夹）的文件先添加到暂存区，然后一次性提交到本地版本库。有暂存区的好处是，如果添加文件过程中发生人为错误还来得及修改。

需要注意的是，当前工作区内的文件修改后（此文件之前已经入库），一定要添加到缓存区后才能被提交。如果我们修改后，忘记再次添加到缓存区，则提交时只会将缓存区内的文件提交，而不会把我们工作区内新的修改带上。

下面我们试看利用暂存区回滚的情况。

我们再给 readme.txt 增加一行文字。

```shell
D:\TEMP\learngit>echo But my boss still prefers SVN. >> readme.txt

D:\TEMP\learngit>type readme.txt
Git is a version control system.
Git is a free software.
Git has a mutable index called stage.
But my boss still prefers SVN.

D:\TEMP\learngit>git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   readme.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

因为还没添加到缓存区，如果想要丢弃修改，按提示 `git checkout -- <file>...` 所述命令，回到最近一次提交的情况。具体命令如下：

```shell
D:\TEMP\learngit>git checkout -- readme.txt

D:\TEMP\learngit>type readme.txt
Git is a version control system.
Git is a free software.
Git has a mutable index called stage.
```

要是不小心已经将它添加到暂存区了：

```shell
D:\TEMP\learngit>echo But my boss still prefers SVN. >> readme.txt

D:\TEMP\learngit>git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   readme.txt

no changes added to commit (use "git add" and/or "git commit -a")

D:\TEMP\learngit>git add readme.txt

D:\TEMP\learngit>git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   readme.txt
```

我们可以按提示所述 `git reset HEAD <file>` 命令将它移除暂存区（Unstage）：

```shell
D:\TEMP\learngit>git reset HEAD readme.txt
Unstaged changes after reset:
M       readme.txt

D:\TEMP\learngit>git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   readme.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

我们可以继续按提示 `git checkout -- <file>...` 所述命令，丢弃修改，返回到最近一次提交的情况。

```shell
D:\TEMP\learngit>type readme.txt
Git is a version control system.
Git is free software.
Git has a mutable index called stage.
My stupid boss still prefers SVN.

D:\TEMP\learngit>git checkout -- readme.txt

D:\TEMP\learngit>type readme.txt
Git is a version control system.
Git is free software.
Git has a mutable index called stage.

D:\TEMP\learngit>git status
On branch master
nothing to commit, working tree clean
```

小结，涉及暂存区的常用命令有：

- 将已经添加到暂存区的文件撤销。 `git reset HEAD <file>`

- 若要将本地文件的修改丢弃，退回到最近一次提交到本地版本库的样子。

  `git checkout -- <file_name>`

##### [#](https://cloudappdev.netlify.app/book/content.html#_5）删除与改名)5）删除与改名

如果由于误操作删除了某个文件，可以很方便地按 `git checkout -- <file>...` 恢复到最近一次提交的情况。这与之前丢弃本地修改的例子一样。

```shell
D:\TEMP\learngit>del readme.txt

D:\TEMP\learngit>type readme.txt
The system cannot find the file specified.

D:\TEMP\learngit>git checkout -- readme.txt

D:\TEMP\learngit>type readme.txt
Git is a version control system.
Git is free software.
Git has a mutable index called stage.
```

如果我们确实是想删除某个文件，例如“file3.txt”，可以用 `git rm <file>...` 命令操作。

```shell
D:\TEMP\learngit>git rm file3.txt
rm 'file3.txt'
```

然后，提交到版本库。

```shell
D:\TEMP\learngit>git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        deleted:    file3.txt

D:\TEMP\learngit>git commit -m "deleted file3.txt"
[master ba5eb05] deleted file3.txt
 1 file changed, 1 deletion(-)
 delete mode 100644 file3.txt
```

如果一个文件已经被提交到版本库中了，那么不用担心误删，但是要注意，我们只能恢复文件到版本库里的版本。也就是说，这将会丢失最近一次提交之后的修改。

类似的，移动或改名的命令是：`git mv <source> <destination>`。例如，我们将文件“file2.txt”改名为“file2_renamed.txt”：

```shell
D:\TEMP\learngit>git mv file2.txt file2_renamed.txt
```

然后，提交到版本库：

```shell
D:\TEMP\learngit>git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        renamed:    file2.txt -> file2_renamed.txt

D:\TEMP\learngit>git commit -m "rename file2.txt"
[master eca88d6] rename file2.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 rename file2.txt => file2_renamed.txt (100%)
```

可以显示它的更多信息：

```shell
D:\TEMP\learngit>git show file2_renamed.txt
commit eca88d631b8f59edf2b075ebbeae9c83e8d80a26 (HEAD -> master)
Author: bobyuan <yuan.bob@outlook.com>
Date:   Tue Mar 12 11:54:02 2019 +0800

    rename file2.txt

diff --git a/file2_renamed.txt b/file2_renamed.txt
new file mode 100644
index 0000000..00db75b
--- /dev/null
+++ b/file2_renamed.txt
@@ -0,0 +1 @@
+file2 content
```

小结，涉及删除、移动或改名的常用命令有：

- 将某个文件删除： `git rm <file>`
- 将某个文件或文件夹移动或改名：`git mv <source> <destination>`
- 显示某个文件的多项信息： `git show <file>`

##### [#](https://cloudappdev.netlify.app/book/content.html#_6）分支)6）分支

Git 把每次提交串成一条时间线，这条时间线就是一个分支（branch）。截止到目前，只有一条时间线，在Git里，这个分支叫主分支，即 master 分支。HEAD 严格来说不是指向提交，而是指向 master，master 才是指向提交的分支名称，所以，HEAD 指向的就是当前分支。

一开始的时候，master 分支是一条线，Git 用 master 指向最新的提交，再用 HEAD 指向 master，就能确定当前分支以及当前分支的提交点，具体如图所示：

![git branch](https://cloudappdev.netlify.app/book/img/git_tutorial/git_branch_0.png)

图4.1.6 分支

每提交一次，master 分支都会向前移动一步。这样，随着我们不断提交，master 分支的线也越来越长。例如下图所示为经过三次提交后的情形。

![git_branch_1](https://cloudappdev.netlify.app/book/img/git_tutorial/git_branch_1.png)

图4.1.7 增加一次提交

例如，当创建新的分支 `dev` 时，Git 会新建一个 `dev` 指针指向 `master` 相同的提交，再把 `HEAD` 指向 `dev`，就表示当前分支在 `dev`上。如下图所示：

![git-br-create-dev](https://cloudappdev.netlify.app/book/img/git_tutorial/git_branch_create_dev.png)

图4.1.8 新建 dev 分支

Git 能快速创建一个分支，因为除了增加一个 `dev` 指针、改变 `HEAD` 的指向外，工作区的文件不需要任何变化。

然而，从现在开始，对工作区的修改和提交就是针对 `dev` 分支了，比如新提交一次后，`dev` 指针往前移动一步，而 `master` 指针没变。如下图所示：

![git-br-dev-fd](https://cloudappdev.netlify.app/book/img/git_tutorial/git_branch_dev_fd.png)

图4.1.9 在 dev 分支上提交

假如在 `dev` 上的工作完成了，就可以把 `dev` 合并到 `master` 上。Git 是直接把 `master` 指向 `dev` 的当前提交，就完成了合并。如下图所示：

![git-br-merge](https://cloudappdev.netlify.app/book/img/git_tutorial/git_branch_merge.png)

图4.1.10 在 master 分支上合并 dev 分支

可见 Git 合并分支也很快。只改变了指针，工作区内容不需要变动，效率非常高！

合并完分支后，可以删除不用的 `dev` 分支。删除 `dev` 分支就是删掉 `dev` 指针，之后就剩下了一条 `master` 分支。如下图所示：

![git-br-rm-dev](https://cloudappdev.netlify.app/book/img/git_tutorial/git_branch_rm_dev.png)

图4.1.11 删除不用的 dev 分支

下面我们示范操作。

创建分支，并切换到新的分支上:

```shell
D:\TEMP\learngit>git branch dev

D:\TEMP\learngit>git checkout dev
Switched to branch 'dev'
```

注意，在实际工作中，以上两步其实可以简化成一条命令：

```shell
git checkout -b dev
```

我们查看一下分支情况（当前是在打“*”号的分支上）。

```shell
D:\TEMP\learngit>git branch
* dev
  master
```

修改 `readme.txt`，增加一行文字：

```shell
D:\TEMP\learngit>echo Creating a new branch is quick.  >> readme.txt

D:\TEMP\learngit>type readme.txt
Git is a version control system.
Git is free software.
Git has a mutable index called stage.
Creating a new branch is quick.
```

然后提交：

```shell
D:\TEMP\learngit>git add readme.txt

D:\TEMP\learngit>git commit -m "append a line of text to readme.txt"
[dev 5f1bd73] append a line of text to readme.txt
 1 file changed, 1 insertion(+)
```

现在，`dev` 分支的工作完成，我们就可以切换回 `master` 分支。

```shell
D:\TEMP\learngit>git checkout master
Switched to branch 'master'
```

需要注意的是，切换到其他分支时，当前分支必须没有修改，或者修改已经提交到版本库中了，否则会切换失败。

切换回 `master` 分支后，再查看一下 `readme.txt` 文件，刚才添加的内容不见了！那是因为之前提交的是在 `dev` 分支上，而 `master` 分支此刻的提交点并没有变。结果如下图所示：

![git-br-on-master](https://cloudappdev.netlify.app/book/img/git_tutorial/git_branch_on_master.png)

图4.1.12 切换回 master 分支

现在，我们把 `dev` 分支的工作成果合并到 `master` 分支上：

```shell
D:\TEMP\learngit>git merge dev
Updating eca88d6..5f1bd73
Fast-forward
 readme.txt | 1 +
 1 file changed, 1 insertion(+)
```

`git merge` 命令用于合并指定分支到当前分支。合并后，再查看 `readme.txt` 的内容，可以看到，和 `dev` 分支的最新提交是完全一样的。

Git 提示我们，这次合并是快进模式（Fast-forward），也就是直接把 `master` 指向 `dev` 的当前提交，所以合并速度非常快。不是每次合并都能 Fast-forward，后面会介绍其它方式的合并。

合并完成后，就可以删除 `dev` 分支了。删除后查看分支，可以看到只剩下了 `master` 分支：

```shell
D:\TEMP\learngit>git branch -d dev
Deleted branch dev (was 5f1bd73).

D:\TEMP\learngit>git branch
* master
```

Git 创建、合并和删除分支非常快，所以 Git 推荐使用分支完成某个任务。这和直接在 `master` 分支上工作效率是一样的，且更安全（不影响 master 分支），更灵活（自己的分支只有自己可见，且不能预判什么时候能开发完），特别适用于多人协作开发的场合：

- 假如在分支上的任务完成，可以合并到 `master` 分支后再将此分支删掉；
- 如果分支上的任务完成得不理想，则可以直接丢弃，不进行合并，直接将此分支删除。

小结，涉及分支的常用命令有：

- 查看分支：`git branch`
- 创建分支：`git branch <branch_name>`
- 切换分支：`git checkout <branch_name>`
- 创建+切换分支：`git checkout -b <branch_name>`
- 合并某分支到当前分支：`git merge <branch_name>`
- 删除分支：`git branch -d <branch_name>`

##### [#](https://cloudappdev.netlify.app/book/content.html#_7）解决冲突)7）解决冲突

在合并分支的操作中，一般情况下 Git 会自动合并文本文件的修改，但是，若同一个文件的同一行存在不同的修改时，就需要人工参与合并，解决冲突后再次提交。

例如，我们创建一个新的 `feature1` 分支，在新分支上开发：

```shell
D:\TEMP\learngit>git checkout -b feature1
Switched to a new branch 'feature1'
```

修改 `readme.txt` 文件，增加了一行文字：

```shell
D:\TEMP\learngit>echo This line will cause conflict. >> readme.txt

D:\TEMP\learngit>type readme.txt
Git is a version control system.
Git is a free software.
Git has a mutable index called stage.
Creating a new branch is quick.
This line will cause conflict.
```

然后在 `feature1` 分支上：

```shell
D:\TEMP\learngit>git add readme.txt

D:\TEMP\learngit>git commit -m "add a line to readme.txt that will in conflict."
[feature1 b5fe885] add a line to readme.txt that will in conflict.
 1 file changed, 1 insertion(+)
```

切换回到 `master` 分支。

```shell
D:\TEMP\learngit>git checkout master
Switched to branch 'master'
```

这次也是修改 `readme.txt` 文件，增加了一行文字，但稍许不同（它们都处在同一行，即第5行）：

```shell
D:\TEMP\learngit>echo This line will cause conflict while merging. >> readme.txt

D:\TEMP\learngit>type readme.txt
Git is a version control system.
Git is free software.
Git has a mutable index called stage.
Creating a new branch is quick.
This line will cause conflict while merging.
```

在 `master` 分支上提交：

```shell
D:\TEMP\learngit>git add readme.txt

D:\TEMP\learngit>git commit -m "add a line to readme.txt, it for sure will result a conflict."
[master fe8dbec] add a line to readme.txt, it for sure will result a conflict.
 1 file changed, 1 insertion(+)
```

现在，`master` 分支和 `feature1` 分支各自都分别有新的提交，变成了下图所示情况：

![git-br-feature1](https://cloudappdev.netlify.app/book/img/git_tutorial/git_branch_feature1.png)

图4.1.13 master 和 feature1 分支都有新的提交

这种情况下，Git 无法执行“快速合并”，只能试图把各自的修改合并起来，但这种合并就可能会发生冲突：

```shell
D:\TEMP\learngit>git merge feature1
Auto-merging readme.txt
CONFLICT (content): Merge conflict in readme.txt
Automatic merge failed; fix conflicts and then commit the result.
```

可见发生了冲突！Git 告诉我们 `readme.txt` 文件存在冲突，必须手动解决冲突后再提交。用`git status` 也可以查看到发生冲突的文件：

```shell
D:\TEMP\learngit>git status
On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)

        both modified:   readme.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

我们可以直接查看 `readme.txt` 的内容。它变成了这样：

```shell
D:\TEMP\learngit>type readme.txt
Git is a version control system.
Git is a free software.
Git has a mutable index called stage.
Creating a new branch is quick.
<<<<<<< HEAD
This line will cause conflict while merging.
=======
This line will cause conflict.
>>>>>>> feature1
```

Git 用 `<<<<<<<`，`=======`，`>>>>>>>` 标记分割不同分支的内容，便于我们对比后合并。

我们修改 `readme.txt` 后保存。内容如下：

```shell
D:\TEMP\learngit>type readme.txt
Git is a version control system.
Git is a free software.
Git has a mutable index called stage.
Creating a new branch is quick.
This line will now have no conflict, merged manually.
```

再次提交，这次成功了。

```shell
D:\TEMP\learngit>git add readme.txt

D:\TEMP\learngit>git commit -m "conflict resolved."
[master fa56be4] conflict resolved.
```

现在，`master` 分支和 `feature1` 分支变成了下图所示的情形。

![git-br-conflict-resolved](https://cloudappdev.netlify.app/book/img/git_tutorial/git_branch_conflict_resolved.png)

图4.1.14 在 master 分支上合并 feature1 分支

用带参数的 `git log` 查看分支的合并情况。

```shell
D:\TEMP\learngit>git log --graph --pretty=oneline --abbrev-commit
*   fa56be4 (HEAD -> master) conflict resolved.
|\
| * b5fe885 (feature1) add a line to readme.txt that will in conflict.
* | fe8dbec add a line to readme.txt, it for sure will result a conflict.
|/
* 5f1bd73 append a line of text to readme.txt
* eca88d6 rename file2.txt
* ba5eb05 deleted file3.txt
* 8ff8d96 modify readme.txt and add LICENSE
* b2750d1 New commit message
* 7c77f84 add file1, file2 and file3
* b2054ab add readme.txt into repository
```

我们还可以运行 `gitk` 图形界面来看分支情况。如下图所示：

![gitk_branch](https://cloudappdev.netlify.app/book/img/git_tutorial/gitk_main_branches.png)

图4.1.15 运行 gitk 图形界面

最后，合并后不再需要的 `feature1` 分支，须删除：

```shell
D:\TEMP\learngit>git branch -d feature1
Deleted branch feature1 (was b5fe885).
```

当 Git 无法自动合并分支时，就产生了冲突，需要手工修改发生冲突的文件，编辑成为我们希望的内容，再提交即可。

小结，涉及解决冲突的常用命令有：

- 合并另一分支到当前分支：`git merge <another_branch_name>`
- 冲突解决后，再次提交：`git commit -m "a short description"`
- 合并完成后，删除另一分支：`git branch -d <another_branch_name>`
- 图形化显示提交记录：`git log --graph --pretty=oneline --abbrev-commit`

##### [#](https://cloudappdev.netlify.app/book/content.html#_8）远程版本库)8）远程版本库

以 Git 托管服务 GitHub 为例，在上面新建立一个远程版本库（Repository），然后将它克隆到本地（Clone），作为本地版本库。我在本地版本库上做修改，完成后提交到本地库（Commit），再推送到远程版本库上（Push）。其他合作开发者也可以进行同样的操作，于是就可以通过远程版本库来协作开发了。如果需要让本地库和远程库同步，可执行拉操作（Pull），大多数情况下 Git 会自动合并（Merge），但如果有冲突（Conflict），那么也可以解决冲突后，再次提交并推送到远程版本库上。

这就是作为团队协作开发使用远程版本库的常见模式。如果是单个人开发，则这样做的好处是，远程版本库可以作为备份，从而保证数据安全。

在 GitHub 上创建一个“learngit”的远程版本库，如下图所示：

![GitHub create learngit repo](https://cloudappdev.netlify.app/book/img/git_tutorial/github_create_learngit.png)

图4.1.16 创建新的代码库

创建成功后，按“Clone or download”按钮，会出现下拉窗口，显示了克隆此远程版本库的URL：

https://github.com/bobyuancn/learngit.git

记住这个 URL，它将用在后面的克隆命令中。代码库的克隆链接位置如下图所示：

![GitHub view learngit](https://cloudappdev.netlify.app/book/img/git_tutorial/github_view_learngit.png)

图4.1.17 代码库的克隆链接

将它克隆到本地，使用命令`git clone <remote_repo_url>`，如下：

```shell
D:\TEMP>mkdir github

D:\TEMP>cd github

D:\TEMP\github>git clone https://github.com/bobyuancn/learngit.git
Cloning into 'learngit'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
```

结果显示，本地只有一个“README.md”文本文件：

```shell
D:\TEMP\github>cd learngit

D:\TEMP\github\learngit>type README.md
# learngit
```

我们用文本编辑器打开它，修改成为如下内容并保存：

```markdown
# learngit
This is my first Git based project.
```

检查一下“README.md”的内容，将它提交到本地库：

```shell
D:\TEMP\github\learngit>type README.md
# learngit
This is my first Git based project.

D:\TEMP\github\learngit>git add README.md

D:\TEMP\github\learngit>git commit -m "Add a line of text to README.txt"
[master bdedcc7] Add a line of text to README.txt
 1 file changed, 2 insertions(+), 1 deletion(-)
```

再把当前工作的主分支 `master` 推送到服务器上的远程版本库中，使用命令`git push origin master`，如下：

```shell
D:\TEMP\github\learngit>git push origin master
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Writing objects: 100% (3/3), 304 bytes | 304.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/bobyuancn/learngit.git
   678719e..bdedcc7  master -> master
```

用浏览器访问此远程版本库（https://github.com/bobyuancn/learngit），发现我们的修改已经存在了，如下图所示：

![GitHub view learngit new](https://cloudappdev.netlify.app/book/img/git_tutorial/github_view_learngit_new.png)

图4.1.18 查看版本库的变更

若有需要从远程版本库同步到本地库，使用命令`git pull`，如下：

```shell
D:\TEMP\github\learngit>git pull
Already up to date.
```

分布式版本系统在本地工作完全不需要考虑远程库的存在，没有联网时也可以正常工作；而集中式版本控制系统 （如 Subversion）在没有联网的时候是无法工作的！当有网络的时候，再把本地提交推送到远程版本库。

小结，涉及远程版本库的常用命令有：

- 将远程版本库克隆到本地库： `git clone <remote_repo_url>`
- 将本地库的修改推送到远程版本库： `git push ...`
- 将远程版本库同步到本地库： `git pull`

##### [#](https://cloudappdev.netlify.app/book/content.html#_9）-gitignore-文件)9）“.gitignore”文件

“.gitignore”是一个纯文本文件，置于工作区中，方便 Git 过滤掉那些不需要版本控制的文件，例如：

1. 操作系统自动生成的文件，例如： `Thumbs.db, ehthumbs.db, Desktop.ini`
2. 编译生成的中间文件、可执行文件等，例如：`*.class，*.jar, *.war, *.exe`
3. 其他文件，例如备份文件 `*.bak`、日志文件 `*.log` 、个性化配置文件等。

例如，下面是一个 Python 项目中的过滤条件。

```shell
# ignore specific folder.
/.idea/
/.settings/
/.vscode/
/build/apidoc/


# ignore specific file.
/src/.coverage


# ignore any folder.
__pycache__/


# ignore any file.
*.pyc
*.log
*.bak
```

我们可以参照它来编写符合自己项目使用的“.gitignore”。“.gitignore”本身可以加入版本库里，作为项目文件的一部分。

值得提及的是，GitHub 里有个“.gitignore”的模板大集合，方便我们参考： https://github.com/github/gitignore

例如，我们创建一个文件“mybackup.bak”，欲添加它到暂存区，但添加不了，因为这个文件符合“*.bak” 规则，被过滤掉了。

```shell
D:\TEMP\learngit>echo This is a backup file > mybackup.bak

D:\TEMP\learngit>git add mybackup.bak
The following paths are ignored by one of your .gitignore files:
mybackup.bak
Use -f if you really want to add them.
```

若要强制添加，如上提示，可以用“-f”参数： `git add -f mybackup.bak`

若你想知道是哪个过滤规则导致了此文件被过滤，可以用 `git check-inore` 命令来检查。

```shell
D:\TEMP\learngit>git check-ignore -v mybackup.bak
.gitignore:2:*.bak      mybackup.bak
```

反馈提示是“.gitignore”的第2行，规则“*.bak”。根据这样的提示，可以方便编写“.gitignore”以调整规则。

小结，涉及“.gitignore”的知识点有：

- 在工作区内添加一个文本文件“.gitignore”，可用来定义不需要版本管理的文件过滤规则。此“.gitignore”文件本身可被添加到版本库中。
- 强制添加某文件到暂存区，增加一个“-f”选项： `git add -f <file>`
- 对发生过滤的文件，检查生效的过滤规则： `git check-ignore -v <file>`
- “.gitignore”的模板大集合： https://github.com/github/gitignore

##### [#](https://cloudappdev.netlify.app/book/content.html#_10）git-学习资料)10）Git 学习资料

以上简要介绍了 Git 的基本命令行操作，方便读者理解 Git 的工作原理，足以应付常见的版本控制使用场景。当然，还有很多实用的命令未覆盖到，建议有兴趣深入的读者继续阅读 Git 官方的用户手册或免费电子书《ProGit》。

- Git User Manual https://git-scm.com/docs/user-manual.html
- ProGit，2nd Edition (2014) https://git-scm.com/book/en/v2

### [#](https://cloudappdev.netlify.app/book/content.html#_4-2-安装-git-客户端)4.2 安装 Git 客户端

我们可以自己搭建私有的分布式版本控制系统，也可以使用现成的云平台，这些云平台提供不同付费等级的服务，有免费的，适用于个人或小团队，也有收费的，适用于企业。直接使用这些云平台比自建更有优势，本文将采用直接使用免费的 GitLab 云平台。

知名的免费 Git 托管服务网站有：

- GitLab, 支持免费的公开和私有代码库，适合个人和小团队使用。 https://gitlab.com/
- Bitbucket，支持免费的公开和私有代码库，适合个人和小团队使用。 https://bitbucket.org/
- GitHub，仅支持免费的公开代码库（私有代码库要收费），已经被微软收购。 https://github.com/

Windows 操作系统上知名的免费 Git 图形界面客户端有：

- TortoiseGit, https://tortoisegit.org/
- SourceTree, https://www.sourcetreeapp.com/

本文将只使用 Windows 操作系统上的 TortoiseGit 作为客户端，配合使用 GitLab 代码托管服务。按以下步骤安装客户端：

1. 在 GitLab 上注册账号。注意，GitLab 新用户注册时使用了 Google 提供的 reCAPTCHA 服务，用以验证真人，因此在国内的网络上是无法注册的。不过注册好账号之后，在国内的网络上使用 GitLab 不会受影响。
2. 安装 Git for Windows（网址是 https://git-for-windows.github.io/）。如果你已经安装了，可以跳过这一步。 提示：如果不用它自带的命令行方式工作（仅使用 TortoiseGit 的图形界面），可以不选择 “Shell Integration”，以避免点击鼠标右键出现菜单项过多的问题。
3. 安装 TortoiseGit，选择默认安装选项即可。安装完后，可以设置您的用户名和电子邮件。
4. 如果您还没有密钥对，可以用 Puttygen.exe 生成您的密钥对，私钥保存在本地，公钥配置到 GitLab 上您的账号里。
5. 在 GitLab 上创建一个测试用的项目，以验证一切工作正常。

例如，在 TortoiseGit 中设置用户名和电子邮件，如下图所示：

![Settings_TortoiseGit](https://cloudappdev.netlify.app/book/img/git/Settings_TortoiseGit.png)

图4.2.1 TortoiseGit 的配置

安装设置完后，在 %USERPROFILE% 文件夹里，会出现一个配置文件“.gitconfig”，它们存储了 Git 的相关配置信息。

另外，在 Windows 的 “Credential Manager” 里，会留存登录网站的用户名和密码信息。

![Windows_Credential_Manager](https://cloudappdev.netlify.app/book/img/git/Windows_Credential_Manager.png)

图4.2.2 Windows 的 Credential Manager 的用户名和密码

如果登录信息（用户名和密码）输入错误，则可删除这个留存的记录，再次尝试将会提示重新输入用户名和密码。

### [#](https://cloudappdev.netlify.app/book/content.html#_4-3-git-分支模型)4.3 Git 分支模型

Git 的使用并不难，难点是实际开发过程中采用的分支模型和发布管理流程。

《一个成功的Git分支开发模型》是发表于2010年关于此内容的一篇有影响力的博文，原文请参考 A successful Git branching model（网址是 https://nvie.com/posts/a-successful-git-branching-model/）， 以下将对这篇文章主要内容做一诠释。

如下图所示，用 Git 建立了一个用于代码版本控制的仓库（repository）。这个仓库是中心版本库（因为 Git 是一个分布式版本管理系统，从技术上来讲，并没有一个中心版本库），我们把这个版本库称为原始库（origin），这个名字很容易理解。

![centr-decentr-chs](https://cloudappdev.netlify.app/book/img/git/centr-decentr@2x_chs.png)

图4.2.1 代码版本控制仓库

所有的开发者都从 origin 拉取（pull）代码或者上传（push）代码。但是除了向中央仓库进行的 push 和 pull 操作外，每个开发者都有可能从其他开发者那里拉取代码变更，形成子团队。在两个或者更多的开发者需要协作开发一个较大的新功能特性的情况下，可以避免将个人不成熟的代码直接推向 origin。例如在上图中，alice 和 bob，alice 和 david，clair 和 david 分别形成了三个子团队。

从技术上讲，这不过是 alice 定义了一个 Git 远程仓库，指向了 bob 的仓库而已，反之亦然。

#### [#](https://cloudappdev.netlify.app/book/content.html#_4-3-1-主要分支)4.3.1 主要分支

中心仓库有两个主要分支：master 分支和 develop 分支（也有人将它命名为 dev 分支），它们贯穿于整个开发过程的始终。

我们把 origin/master 作为主要分支，在这个分支上，源代码的 HEAD 指针总是指向一个稳定的可发布的版本。该分支也被称为“集成分支”，它是每晚自动构建的代码来源地。

当 develop 分支达到了一个稳定待发布状态时，所有的代码变更将合并到 master 分支，并且打上发布版本号的标签（Tag）。

因此，只要是有变化合并到 master 分支上时，就应该有一个新版本要发布。于是每当 master 分支上有一个提交（commit），就可以用 Git 钩子（hook）脚本来执行自动构建，然后发布到生产环境上。

主要分支情况如下图所示：

![main-branches-chs](https://cloudappdev.netlify.app/book/img/git/main-branches@2x_chs.png)

图4.2.2 主要分支

#### [#](https://cloudappdev.netlify.app/book/content.html#_4-3-2-辅助分支)4.3.2 辅助分支

在 master 分支和 develop 分支的基础上，我们添加了一系列辅助分支来实现平行开发、新功能特性的开发、新发行版本的准备、以及紧急 Bug 的快速修复等实际问题。和主要分支不同的是，这些辅助分支都是临时的，因为它们在使用完毕后最终都要被删除。

辅助分支有三个：feature 分支、release 分支，和 hotfix 分支。

每一个辅助分支都有其特定的目的和用途，且这些辅助分支是从哪个分支开始产生，又最终将合并到哪些分支，都有严格的规定。从技术角度来说，这些辅助分支都是简单的 Git 分支，并没有什么特别的，只是根据用途来进行分类而已。

**1）feature 分支**

- 可能从哪个分支分叉： develop
- 最终必须合并到哪个分支： develop
- 此分支的命名规范： 除了 master、develop、release-* 或者 hotfix-* 之外的任何名字

feature（功能）分支有时被称为话题分支（topic branch），是为开发新功能特性所准备的，可以是近期（即将发布）或远期（较为遥远的将来发布）。当我们刚开始开发一个新功能特性时，可能并不知道这个功能特性将要放到哪一个目标发行版本里。只要这个功能特性还在开发，这个 feature 分支就会一直存在下去，直到最终开发完成被合并到 develop 分支上（它将保证这个新功能特性会被加入到下一个发行版里），或者最终被放弃（这个新功能特性只是一次失败的尝试罢了）。

> **注意：** feature 分支只存在于开发者的本地仓库里，而不会是在 origin 里。也就是说，开发者只在本地创建 feature 分支，开发完成之后要么合并到 develop 分支，要么被丢弃。

feature 分支如下图所示：

![feature-branches-chs](https://cloudappdev.netlify.app/book/img/git/fb@2x_chs.png)

图4.2.3 feature 分支

**2）release 分支**

- 可能从哪个分支分叉： develop
- 最终必须合并到哪个分支： develop 和 master
- 此分支的命名规范： release-*

release （发布）分支是为一个新发行版做准备用的。在这个分支上做最后的细节修饰工作，同时也为小 Bug 的修复，准备版本号和构建日期等留有余地。在 release 分支上完成这些工作，将会让 develop 分支保持干净，为下一个大版本开发做好准备。

那么，何时从 develop 分支分叉出一个新的 release 分支呢？建议是当 develop 分支呈现出或者近乎呈现出一个新发行版本的理想状态时。此时新发行版本所必须具备的全部功能特性都已经被合并到 develop 分支上了，而为未来发行版本准备的功能特性不会被合并，它们必须要等到该版本对应的 release 分支被分叉出来时再合并。

正式创建 release 分支时，将为此发行版分配一个版本号。那时，develop 分支将继续为下一个发行版工作，只是并不清楚这“下一个发行版”最终会是0.3版本还是1.0版本，直到创建新的 release 分支时才能确定。总之，发行版本号是在创建 release 分支时开始确定的，并且会随着版本的更新贯穿项目的始终。

**3）hotfix 分支**

- 可能从哪个分支分叉： master
- 最终必须合并到哪个分支： develop 或 master
- 此命分支的命名规范： hotfix-*

在为新发行版做准备的角度上，hotfix （修补）分支和 release 分支非常相似，只不过 hotfix 分支的出现是非计划的，临时出现的。当生产环境上的发行版不理想或者一个重要的 Bug 需要紧急修复时，我们可以从打上了对应标签的 master 分支上分叉出来一个 hotfix 分支。这个操作的作用在于，当一些成员在进行 Bug 修复时，团队的其他成员基于 develop 分支的工作还可以继续，不受打扰。

hotfix 分支可以从 master 分支上创建。比如说，“1.2”版本是目前正在生产环境中的发行版，出于一个严重的 Bug 需要立刻修复。但是 在develop 分支上的功能还不是很稳定，于是我们将从 master 分支上分叉出 hotfix 分支来修复。当我们完成 Bug 修复后，这些修改需要被合并到 master 分支，同时也需要被合并到 develop 分支，因为我们需要让接下来的发行版本也包含这个 Bug 修复。这个过程和 release 分支是非常相似的，如下图所示：

![hotfix-branches-chs](https://cloudappdev.netlify.app/book/img/git/hotfix-branches@2x_chs.png)

图4.2.4 hotfix 分支

以上提供了一个让开发者容易理解的 Git 版本控制分支模型与发布流程。

完整的分支模型与发布流程汇总如下图：

![git-model-chs](https://cloudappdev.netlify.app/book/img/git/git-model@2x_chs.png)

图4.2.5 完整的分支模型

通常情况下：

- master 和 develop 两个分支同时存在。
- master 分支上始终是最稳定的代码（随时可以发布到生产环境），develop 分支是正在开发的代码。
- feature 分支是某个开发者为了自己开发的功能在本地创建的临时分支。
- release 分支是为某个发行版而创建的临时分支。

特殊情况下：

- develop 分支正在开发，如果生产环境上有突发情况需要紧急修复 Bug，则可以从 master 上新开一个 hotfix 分支，改好之后再将此 hotfix 分支分别合并到其他分支