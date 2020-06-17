# 虚拟机的搭建

Oracle VirtualBox（网址是 https://www.virtualbox.org/） 是一款知名的开源虚拟机软件，本书后续的实验都将在 Oracle VirtualBox 创建的 Ubuntu Server 虚拟机上完成。虚拟机上安装部分软件的步骤也将逐一介绍，注意它们具有依赖性，因此需要按顺序安装。

VirtualBox 扩展功能的使用还可以参考“附录A - VirtualBox”。

### [#](https://cloudappdev.netlify.app/book/content.html#_2-1-安装-oracle-virtualbox)2.1 安装 Oracle VirtualBox

Oracle VirtualBox 在 Windows 操作系统上的安装过程很简单。因为开启虚拟机将占用较多内存，推荐 Windows 宿主机器是64位操作系统，且内存至少 8GB 以上。

安装步骤如下：

1. 假设 6.0 系列发行版的最新版本是“6.0.8” ，下载 “Windows hosts” 和 “Extension Pack”（如下图）。读者看到的版本应该已经更新，请视情况调整。

   ![VirtualBox6_Downloads](https://cloudappdev.netlify.app/book/img/ubuntu_vm/VirtualBox6_Downloads.png)

   图2.1.1 VirtualBox 6.0 下载网页

   下载完成后可见： `VirtualBox-6.0.8-130520-Win.exe` 和 `Oracle_VM_VirtualBox_Extension_Pack-6.0.8.vbox-extpack` 共2个文件。 ![VirtualBox6_Downloaded_Files](https://cloudappdev.netlify.app/book/img/ubuntu_vm/VirtualBox6_Downloaded_Files.png)

   图2.1.2 VirtualBox 6.0 的安装文件

2. 安装 VirtualBox 必须要有管理员权限。以默认的设置和安装路径，先安装 `VirtualBox-6.0.8-130520-Win.exe`。安装过程中会导致暂时的网络中断，且需要重启 Windows 宿主机。

3. 安装完成并重新启动宿主 Windows 计算机后，可以看到 `Oracle_VM_VirtualBox_Extension_Pack-6.0.8.vbox-extpack` 的图标正常显示为绿色小盒子，双击即可安装此扩展包。如果碰到图标未能正常显示，也可以将它拖到 VirtualBox 在桌面的图标上来安装。

需要注意的是，Extension Pack 必须和 VirtualBox 安装相同版本，它包含了很多有用的功能增强，是必须安装的。

本书附录 A 还有 VirtualBox 的进阶使用介绍，供读者参考。

### [#](https://cloudappdev.netlify.app/book/content.html#_2-2-安装-ubuntu-server-虚拟机)2.2 安装 Ubuntu Server 虚拟机

Oracle VirtualBox 安装完成后，我们在 VirtualBox 里创建一个64位 Linux 类型的虚拟机，取名为 “ubuntuvm1”，给它分配 2GB 内存和 80GB 硬盘存储空间。注意这里分配的 80G 硬盘存储空间只是设定了虚拟硬盘的上限，而它实际占用的磁盘空间是根据写入内容的多少相关，因此不必担心一开始它就占用 80G 的磁盘存储空间。相反的，如果我们在创建虚拟机时把硬盘存储空间分配小了，到后面不够用，则扩容会很麻烦，甚至可能不得不重新安装虚拟机。

如下图所示创建虚拟机。输入虚拟机的名称（Name），这里是“ubuntuvm1”，注意选择正确的类型（Type）和版本（Version）。

![VirtualBox_ubuntuvm1_Settings_1](https://cloudappdev.netlify.app/book/img/ubuntu_vm/VirtualBox_ubuntuvm1_Settings_1.png)

图2.2.1 VirtualBox Ubuntu 虚拟机设置之通用

到 Ubuntu Server 官方下载页面（网址是 https://www.ubuntu.com/download/server）下载安装光盘镜像文件。请选择下载标记为 LTS 的版本，它是长期支持（Long-Term Support）的版本。例如下面例子中下载的是 `ubuntu-18.04-live-server-amd64.iso`。另外请注意，此服务器版只有64位的发行版。

在虚拟机 ubuntuvm1 的设置对话框里，将下载的发行版 ISO 文件装载到光盘驱动器里。

![VirtualBox_ubuntuvm1_Settings_2](https://cloudappdev.netlify.app/book/img/ubuntu_vm/VirtualBox_ubuntuvm1_Settings_2.png)

图2.2.2 VirtualBox Ubuntu 虚拟机设置之存储

启动虚拟机，即可开始 Ubuntu Server 的安装。大多以默认的选项安装，即以默认的美国英语安装，记得勾选“OpenSSH Server”（默认是不安装），具体过程可以参考 Installation Ubuntu Server（网址是 https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-server)，此处从略。

> **注意：** 若您在国内访问国外网站速度过慢的情况下，可以考虑在安装过程中将官方 Ubuntu 的源替换成阿里云的 Ubuntu 镜像，这样会快些。
>
> ![img](https://cloudappdev.netlify.app/book/img/ubuntu_vm/VirtualBox6_use_mirrors_aliyun_ubuntu.png)

网络设置可以选择 “Bridged Adapter” ，即虚拟机的网卡桥接直连网络，这是最简单的方式。虚拟机启动完成后，登入虚拟机后用 `ip addr show`，也可以简写为`ip addr`， 或 `ifconfig` 命令来找到它的 IP 地址。例如，下图中可见，此虚拟机 ubuntuvm1 的 IPv4 地址是 192.168.1.7。

![VirtualBox_ubuntuvm1_IP](https://cloudappdev.netlify.app/book/img/ubuntu_vm/VirtualBox_ubuntuvm1_IP.png)

图2.2.3 VirtualBox Ubuntu 虚拟机的 IP 地址

在虚拟机已经启动后，如果桥接模式下我们发现桥接的网络不对，可以在虚拟机的设置里更改，如下图：

![VirtualBox6_ubuntuvm1_Settings_bridged_network](https://cloudappdev.netlify.app/book/img/ubuntu_vm/VirtualBox6_ubuntuvm1_Settings_bridged_network.png)

图2.2.4 VirtualBox Ubuntu 虚拟机的桥接网络设置

更改成正确的桥接网络后，按“OK”按钮保存。我们还需要在虚拟机的命令行窗口中运行如下命令，重新启动网络让它生效。

```shell
sudo netplan apply
```

之后再去查看它新的 IP 地址。

为了方便使用，我们将通过专门的 SSH 客户端软件，例如 PuTTY（网址是 https://putty.org/）或 MobaXterm（网址是 [https://mobaxterm.mobatek.net](https://mobaxterm.mobatek.net/)）来连接到此虚拟机。其中前者功能相对简单快捷，后者功能丰富，其免费的 Home 版在功能上略有限制，但也足够个人一般使用。SSH 客户端的安装从略。

如果我们选择用开源免费的 PuTTY 作为 SSH 客户端，请按下图设置连接到此虚拟机（指定虚拟机的 IP 地址，SSH 服务默认侦听的22端口）。可以取名为“ubuntuvm1”并保存配置，方便下一次快速载入。

![SSH_Client_PuTTY_Configuration](https://cloudappdev.netlify.app/book/img/ubuntu_vm/SSH_Client_PuTTY_Configuration.png)

图2.2.5 VirtualBox Ubuntu 虚拟机的 PuTTY 连接设置

登入后，检查防火墙状态。默认情况下，Ubuntu Server 虚拟机 ubuntuvm1 的防火墙是关闭的（Status: inactive）。本虚拟机是测试环境，暂不考虑安全性，为避免网络连接被防火墙阻隔的问题，可以暂不开启防火墙。

```shell
# check firewall status.
sudo ufw status
```

屏幕显示示例应该如下图。

![ubuntuvm1_ufw_status](https://cloudappdev.netlify.app/book/img/ubuntu_vm/VirtualBox_ubuntuvm1_ufw_status.png)

图2.2.6 VirtualBox Ubuntu 虚拟机的防火墙状态

将系统更新到最新。

```shell
# update system to latest.
sudo apt update -y
sudo apt upgrade -y
```

> **注意：** apt 是继 apt-get 后的改进版命令行工具，它在2016年发布的 Ubuntu 16.04 中首次引入，日常使用上可以取代旧版的 apt-get 命令。也就是说，在 Ubuntu 16.04 和后续的 Ubuntu 操作系统中，apt-get 命令依然存在且可以使用，但在多数情况下，我们可以使用 apt 命令来取代旧版的 apt-get 命令。关于它们的区别，可以阅读这篇文章：
>
> - Difference Between apt and apt-get Explained https://itsfoss.com/apt-vs-apt-get-difference/

下面安装 “VirtualBox Guest Additions CD”。先在虚拟机的窗口如下图放入光盘。

![VirtualBox_Insert_Guest_Additions_CD](https://cloudappdev.netlify.app/book/img/ubuntu_vm/VirtualBox_Insert_Guest_Additions_CD.png)

图2.2.7 VirtualBox Ubuntu 虚拟机放入 Guest Additions 光盘镜像

挂载光盘并安装。

```shell
# mount the CD-ROM.
sudo mkdir -p /mnt/cdrom
sudo mount /dev/cdrom /mnt/cdrom

# launch the installer.
cd /mnt/cdrom
sudo ./VBoxLinuxAddition.run

# check the installed version.
ls /opt | grep VBox
```

安装完成后，在虚拟机设置里面将此光盘移除，可能需要重启虚拟机（reboot）。

```shell
# reboot the machine.
sudo reboot
```

若实验完成后，需要关闭虚拟机，我们可以用如下任一命令：

```shell
# poweroff the machine.
sudo poweroff

# shutdown the machine now.
sudo shutdown -h now
```

### [#](https://cloudappdev.netlify.app/book/content.html#_2-3-安装-openjdk)2.3 安装 OpenJDK

以下内容是在 Ubuntu Server 虚拟机 ubuntuvm1 上安装免费开源的 OpenJDK （网址是 [https://openjdk.java.net](https://openjdk.java.net/)）。当然，也可以选择 Oracle JDK （网址是 http://www.oracle.com/technetwork/java/javase/downloads/index.html）。

关于安装 JDK (Java Development Kit，开发工具包) 的版本，我们这里建议安装 Java SE 8，其原因是：

- Oracle Java SE 9 、10、12 是非长期支持版本，Java SE 8 因推出的时间久（2014年3月）而支持更为广泛，因此安装 JDK 8 是当前相对稳妥的选择。后续的长期支持版本（Long Term Support, LTS）是 JDK 11，在2018年9月26日发布，第三方软件在11上的支持还不够广泛。

- Oracle Java SE 11 是继 Java 8之后首个长期支持版本，也是 Java SE 的首个长期支持版本。根据官方支持路线图，Java 11 的高级支持将持续到2023年9月，扩展支持则会延续到2026年9月，也就是生命周期长达8年。非长期支持的版本例如 Java 9、10、12 仅提供半年的技术支持。见下图：

  ![oracle_jdk_support_roadmap](https://cloudappdev.netlify.app/book/img/ubuntu_vm/oracle_jdk_support_roadmap.png)

  图2.3.1 Oracle Java SE 技术支持路线图

Java SE 是否免费？这个问题有点复杂，接下来我们探究一下。

现在常见的 OpenJDK 和 Oracle JDK 以及其他服务商提供的变种版本，它们各自的授权许可是什么，又都提供哪些服务和支持，让许多 Java 开发者理不清头绪。Oracle 在2018年7月份启用新的 Java SE 订阅模式，更是让许多开发者认为是不是 Java 从此要开始收费了？

虽然 Java 11 LTS 已经发布，但从统计数据来看，至今（即本书写作时间，2019年）更多的开发者还停留在上一个 LTS 版本上，即 Java 8。关于开发者最为关注的 Java 8 的授权许可问题，官方文档给出了解答：

> Oracle 将在2020年12月前为个人桌面用户继续提供 Oracle JDK 8 的公共更新。若是商业用途，则在2019年1月之后不会再有免费的商业版本更新。但是，自 Java SE 9 以后，Oracle 还提供了 OpenJDK 版本，可免费用于商业用途，并且还有其他服务商提供的免费 Open JDK 版本可供选择。

也就是说，商业用途如果在2019年1月之后想继续免费使用 Java 8，可以选择：

- 不再更新，继续无限期地使用旧版 Oracle JDK 8 。注意，这对于商业用途是存在安全隐患的；
- 使用来自其他服务商的免费 Java SE 8 或 OpenJDK 8 二进制发行版。

再有，由于 Oracle 在2018年7月份改变了 Java SE 的商业支持模式，所以从 Java 11 开始，支持方式有所不同：

- OpenJDK —— 使用 GPLv2 + CE 许可，可免费用于商业用途；
- Oracle JDK —— 使用付费商业许可，但个人和非商业使用免费。

总之，商业用途如果想要继续免费使用 Java 11 的，请选择 OpenJDK。

Ubuntu 18.04 服务器操作系统如果更新到最新，已经自带了OpenJDK 11 的 JRE (Java Runtime Environment，Java 运行环境)，可以通过下面的命令进行检查：

```shell
bobyuan@ubuntuvm1:~$ java -version
openjdk version "11.0.3" 2019-04-16
OpenJDK Runtime Environment (build 11.0.3+7-Ubuntu-1ubuntu218.04.1)
OpenJDK 64-Bit Server VM (build 11.0.3+7-Ubuntu-1ubuntu218.04.1, mixed mode, sharing)

bobyuan@ubuntuvm1:~$ which java
/usr/bin/java

bobyuan@ubuntuvm1:~$ readlink -f $(which java)
/usr/lib/jvm/java-11-openjdk-amd64/bin/java
```

进一步的信息还有。

```shell
bobyuan@ubuntuvm1:~$ apt depends default-jdk
default-jdk
  Depends: default-jre (= 2:1.11-68ubuntu1~18.04.1)
  Depends: default-jdk-headless (= 2:1.11-68ubuntu1~18.04.1)
  Depends: openjdk-11-jdk

bobyuan@ubuntuvm1:~$ apt list --installed | grep jdk

WARNING: apt does not have a stable CLI interface. Use with caution in scripts.

openjdk-11-jre-headless/bionic-updates,bionic-security,now 11.0.3+7-1ubuntu2~18.04.1 amd64 [installed,automatic]
```

为了保证 Ubuntu 操作系统的稳定性，我们不卸载默认安装的 OpenJDK 11 JRE，只是并行安装额外的 OpenJDK 8，修改符号链接和环境变量指向我们想要使用的那个 OpenJDK 8 即可。

如前所述，出于免费商业使用的考虑，推荐安装使用 OpenJDK 而非 Oracle JDK。在当前（2019年）JDK 8 的使用和支持更广泛，鉴于 JDK 11 新推出，部分应用程序的兼容性支持还不足的原因，我们将按如下方式安装 OpenJDK 8：

```shell
# update system to latest.
sudo apt update -y
sudo apt upgrade -y

# install OpenJDK 8.
sudo apt install openjdk-8-jdk
```

安装完成之后，我们需要设置它为默认的 JDK。先用下面命令进行查看：

```shell
# list the installed JDKs.
sudo update-java-alternatives --list
```

屏幕输出示例如下。

```shell
bobyuan@ubuntuvm1:~$ sudo update-java-alternatives --list
java-1.11.0-openjdk-amd64      1111       /usr/lib/jvm/java-1.11.0-openjdk-amd64
java-1.8.0-openjdk-amd64       1081       /usr/lib/jvm/java-1.8.0-openjdk-amd64
```

我们可以看到，第2个选项 `java-1.8.0-openjdk-amd64` 是我们想要设置为默认的选项。为了将 OpenJDK 8 设置为默认选项，可以用以下命令：

```shell
# set to use the specific JDK from the list.
sudo update-java-alternatives --set java-1.8.0-openjdk-amd64
```

屏幕输出示例如下。

```shell
bobyuan@ubuntuvm1:~$ sudo update-java-alternatives --set java-1.8.0-openjdk-amd64
update-alternatives: error: no alternatives for jaotc
update-alternatives: error: no alternatives for jdeprscan
update-alternatives: error: no alternatives for jhsdb
update-alternatives: error: no alternatives for jimage
update-alternatives: error: no alternatives for jlink
update-alternatives: error: no alternatives for jmod
update-alternatives: error: no alternatives for jshell
update-alternatives: error: no alternatives for mozilla-javaplugin.so
update-java-alternatives: plugin alternative does not exist: /usr/lib/jvm/java-8-openjdk-amd64/jre/lib/amd64/IcedTeaPlugin.so
```

更改完成后，检查一下：

```shell
bobyuan@ubuntuvm1:~$ readlink -f $(which java)
/usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java

bobyuan@ubuntuvm1:~$ java -version
openjdk version "1.8.0_212"
OpenJDK Runtime Environment (build 1.8.0_212-8u212-b03-0ubuntu1.18.04.1-b03)
OpenJDK 64-Bit Server VM (build 25.212-b03, mixed mode)
```

一切正常，符合预期。

根据上面的屏幕输出信息，我们可以看到 OpenJDK 8 的实际安装路径是 `/usr/lib/jvm/java-8-openjdk-amd64`，于是我们用 root 用户修改适用于虚拟机系统全局的配置文件 `/etc/profile`，在文件末尾添加如下几行内容：

```shell
# added by bobyuan.
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
export JRE_HOME=/usr/lib/jvm/java-8-openjdk-amd64/jre

export PATH=$JAVA_HOME/bin:$PATH
```

这将使得上面两个环境变量（`JAVA_HOME` 和 `JRE_HOME`）成为虚拟机 ubuntuvm1 的全局环境变量。

重启虚拟机，让设置生效。最后，分别用普通用户和 root 用户都检查一下，屏幕输出示例如下：

```shell
bobyuan@ubuntuvm1:~$ echo $JAVA_HOME
/usr/lib/jvm/java-8-openjdk-amd64

bobyuan@ubuntuvm1:~$ echo $JRE_HOME
/usr/lib/jvm/java-8-openjdk-amd64/jre

bobyuan@ubuntuvm1:~$ which java
/usr/lib/jvm/java-8-openjdk-amd64/bin/java

bobyuan@ubuntuvm1:~$ java -version
openjdk version "1.8.0_212"
OpenJDK Runtime Environment (build 1.8.0_212-8u212-b03-0ubuntu1.18.04.1-b03)
OpenJDK 64-Bit Server VM (build 25.212-b03, mixed mode)

bobyuan@ubuntuvm1:~$ sudo -i
[sudo] password for bobyuan:

root@ubuntuvm1:~# echo $JAVA_HOME
/usr/lib/jvm/java-8-openjdk-amd64

root@ubuntuvm1:~# echo $JRE_HOME
/usr/lib/jvm/java-8-openjdk-amd64/jre

root@ubuntuvm1:~# which java
/usr/lib/jvm/java-8-openjdk-amd64/bin/java

root@ubuntuvm1:~# java -version
openjdk version "1.8.0_212"
OpenJDK Runtime Environment (build 1.8.0_212-8u212-b03-0ubuntu1.18.04.1-b03)
OpenJDK 64-Bit Server VM (build 25.212-b03, mixed mode)
```

输出符合预期，OpenJDK 8 安装完毕。

### [#](https://cloudappdev.netlify.app/book/content.html#_2-4-安装-apache-maven)2.4 安装 Apache Maven

Apache Maven（网址是 http://maven.apache.org/）是一个开源项目，它是一个 Java 的构建工具。在虚拟机 ubuntuvm1 上安装仅需要一条命令：

```shell
# install apache-maven package.
sudo apt install maven
```

安装完毕后，测试一下是否正常。例如：

```shell
bobyuan@ubuntuvm1:~$ which mvn
/usr/bin/mvn

bobyuan@ubuntuvm1:~$ mvn --version
Apache Maven 3.6.0
Maven home: /usr/share/maven
Java version: 1.8.0_212, vendor: Oracle Corporation, runtime: /usr/lib/jvm/java-8-openjdk-amd64/jre
Default locale: en_US, platform encoding: UTF-8
OS name: "linux", version: "4.15.0-52-generic", arch: "amd64", family: "unix"
```

至此，Apache Maven 已经安装完毕。根据上面的信息，我们可以看到 Maven 的实际安装路径是 `/usr/share/maven`。当前用户的 `~/.m2` 文件夹存放着当前用户的设置，还有本地的 jar 包库（repository）。

以上是使用 `apt` 命令从 Ubuntu 发行版的软件仓库里安装，推荐用这种方式安装，最为简单。

我们有可能会碰到这样一种情况，Maven 的最新版已经发布了一段时间，但还未加入到 Ubuntu 发行版的软件仓库里，导致用上面的方式安装的是旧版。在这种情况下，若希望安装 Maven 的最新版本，可以选择手动安装。

手动安装的步骤也非常简单，请参考下面的步骤。或者参考官方的安装文档（网址是 http://maven.apache.org/install.html）。

假设我们在 Maven 的官方网站看到最新版是 3.6.1，想选择手动安装这个最新版。我们到官方网站下载最新版的安装包 `apache-maven-3.6.1-bin.tar.gz` 到当前用户的 Home 文件夹中，想将它安装在 `/usr/local` 文件夹里。按以下步骤解包并创建符号链接。

```shell
# move to the target directory.
cd /usr/local

# extract the release package.
sudo tar zxf ~/apache-maven-3.6.1-bin.tar.gz

# create symbolic link to the real installation.
sudo ln -s apache-maven-3.6.1 apache-maven
```

完成后，用 `ls -la` 命令查看文件清单，我们可以看到类似这样的输出。它显示 `apache-maven` 符号链接指向真正的安装路径 `apache-maven-3.6.1`。后面我们将使用此符号链接来设置环境变量。之所以使用符号链接，其目的是，若后期我们升级 Maven 到其他的安装版，将仅需要修改此符号链接指向新的安装版路径即可。

![usr_local_apache_maven](https://cloudappdev.netlify.app/book/img/maven/usr_local_apache_maven.png)

图2.4.1 列文件清单查看Maven的安装

用 root 用户修改 `/etc/profile` 文件。如下例所示，添加了 `M2_HOME` 环境变量，并修改了环境变量 `PATH`，将 `M2_HOME/bin` 添加到 `PATH` 路径中。

```shell
# added by bobyuan.
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
export JRE_HOME=/usr/lib/jvm/java-8-openjdk-amd64/jre
export M2_HOME=/usr/local/apache-maven

export PATH=$JAVA_HOME/bin:$M2_HOME/bin:$PATH
```

至此手动安装已经完毕。我们退出当前用户，重新登入后，检查一下。

屏幕输出示例如下。

```shell
bobyuan@ubuntuvm1:~$ which mvn
/usr/local/apache-maven/bin/mvn

bobyuan@ubuntuvm1:~$ mvn --version
Apache Maven 3.6.1 (d66c9c0b3152b2e69ee9bac180bb8fcc8e6af555; 2019-04-04T19:00:29Z)
Maven home: /usr/local/apache-maven
Java version: 1.8.0_212, vendor: Oracle Corporation, runtime: /usr/lib/jvm/java-8-openjdk-amd64/jre
Default locale: en_US, platform encoding: UTF-8
OS name: "linux", version: "4.15.0-52-generic", arch: "amd64", family: "unix"
```

可以看到，它显示的路径和版本，都符合我们的预期。

Maven 的基本使用请参考官方用户手册文档（网址是 http://maven.apache.org/users/index.html)。 另外，还有多本 Maven 的相关书籍，例如《Maven 实战》，《Maven 应用实战》等。

### [#](https://cloudappdev.netlify.app/book/content.html#_2-5-安装-jenkins)2.5 安装 Jenkins

Jenkins（网址是 https://jenkins.io/) 是一个开源项目，它是一个基于 Java 的持续集成系统。我们可以在 Jenkins 上配置持续集成的任务，让机器自动完成构建（build），集中展示集成中存在的错误，提供详细的日志文件，提醒功能，以及用图表的形式展示项目构建的趋势和稳定性。

在 Ubuntu 上安装 Jenkins，请参考官方安装文档：

https://jenkins.io/doc/book/installing/#debian-ubuntu

下面的步骤选择用 `apt-get` 方式来安装，具体命令如下。如果网络访问较慢，请耐心等待。

```shell
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -

sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'

sudo apt-get update
sudo apt-get install jenkins
```

安装完成后，它会自动启动 Jenkins 服务。我们看一下它的状态，从屏幕输出可以看到，它当前正常运行。

```shell
bobyuan@ubuntuvm1:~$ sudo systemctl status jenkins
● jenkins.service - LSB: Start Jenkins at boot time
   Loaded: loaded (/etc/init.d/jenkins; generated)
   Active: active (exited) since Wed 2018-07-11 09:09:56 UTC; 50s ago
     Docs: man:systemd-sysv-generator(8)
    Tasks: 0 (limit: 2322)
   CGroup: /system.slice/jenkins.service

Jul 11 09:09:55 ubuntuvm1 systemd[1]: Starting LSB: Start Jenkins at boot time...
Jul 11 09:09:55 ubuntuvm1 jenkins[5787]: Correct java version found
Jul 11 09:09:55 ubuntuvm1 jenkins[5787]:  * Starting Jenkins Automation Server jenkins
Jul 11 09:09:55 ubuntuvm1 su[5833]: Successful su for jenkins by root
Jul 11 09:09:55 ubuntuvm1 su[5833]: + ??? root:jenkins
Jul 11 09:09:55 ubuntuvm1 su[5833]: pam_unix(su:session): session opened for user jenkins by (uid=0)
Jul 11 09:09:55 ubuntuvm1 su[5833]: pam_unix(su:session): session closed for user jenkins
Jul 11 09:09:56 ubuntuvm1 jenkins[5787]:    ...done.
Jul 11 09:09:56 ubuntuvm1 systemd[1]: Started LSB: Start Jenkins at boot time.
```

Jenkins 默认的侦听端口是8080，通过浏览器输入 ubuntuvm1 虚拟服务器地址和8080端口即可访问。首次访问需要解锁，请按屏幕提示操作。例如，从虚拟机里面查到密码是 “2bcb508f031743d5ada3fefb93e3167d”，将它填写在 “Administrator password” 输入框里，再按 “Continue” 按钮提交。

![Jenkins admin](https://cloudappdev.netlify.app/book/img/jenkins/Ashampoo_Snap_2018.07.11_17h20m34s_001_Jenkins_1.png)

图2.5.1 Jenkins 安装后解锁

选择让 Jenkins 加载常用的插件。

![Jenkins SetupWizard 1](https://cloudappdev.netlify.app/book/img/jenkins/Ashampoo_Snap_2018.07.11_17h30m31s_002_SetupWizard_1.png)

图2.5.2 Jenkins 加载常用插件

插件加载完成后，将可以设置管理员账号，请牢记用户名和密码。然后设置服务器的URL，这步对于目前安装在虚拟机上供实验实验的 Jenkins 实例不太重要，可以暂时跳过（在 Jenkins 设置页面中还有机会更改）。

![Jenkins SetupWizard 2](https://cloudappdev.netlify.app/book/img/jenkins/Ashampoo_Snap_2018.07.11_17h33m14s_003_SetupWizard_2.png)

图2.5.3 Jenkins 创建首个管理员用户

至此安装配置完毕，进入 Jenkins 的欢迎页面。

![Jenkins Dashboard 1](https://cloudappdev.netlify.app/book/img/jenkins/Ashampoo_Snap_2018.07.11_17h36m37s_004_Dashboard_1.png)

图2.5.4 Jenkins 欢迎页面

Jenkins 正确安装后：

- Jenkins 的配置文件是： `/etc/default/jenkins`
- Jenkins 的后台服务进程是： `/etc/init.d/jenkins`
- Jenkins 的后台日志是： `/var/log/jenkins/jenkins.log`
- 创建了 jenkins:jenkins 用户以启动 Jenkins 服务。

为了避免端口占用冲突，我们将 Jenkins 的侦听端口从默认的8080改为9090。修改配置文件 `/etc/default/jenkins`，再重启 Jenkins 服务，具体如下：

```shell
# stop Jenkins service.
sudo systemctl stop jenkins

# change from "HTTP_PORT=8080" to "HTTP_PORT=9090" in this file.
sudo vi /etc/default/jenkins

# restart Jenkins service.
sudo systemctl start jenkins

# check service status, should be active now.
sudo systemctl status jenkins
```

至此，Jenkins 已经修改到侦听于9090端口了。 接上例，若虚拟机 ubuntuvm1 的 IP 地址是192.168.1.7，我们可以通过 http://192.168.1.7:9090/ 来访问虚拟机 ubuntuvm1 上的 Jenkins 应用程序了。

注意本例中 Jenkins 是以服务的方式安装的，即虚拟机重启后，Jenkins 会自动以服务的方式启动。

Jenkins 的基本使用请参考官方文档（网址是 https://jenkins.io/doc/)。 另外，还有多本 Jenkins 的相关书籍，例如《Jenkins 权威指南》，《Mastering Jenkins》等。

### [#](https://cloudappdev.netlify.app/book/content.html#_2-6-安装-apache-tomcat)2.6 安装 Apache Tomcat

Apache Tomcat（网址是 http://tomcat.apache.org/）是知名的 Java Web 应用程序服务器。本文中的 Web 应用程序将部署到 Tomcat 上运行，作为开发和测试环境，因而选择更灵活的手动安装模式。

Apache Tomcat 有多个发行版。在本文写作的时间，可以看见同时有 7、8、9 三个版本，本文将选择最新的 9 版本（下载链接 https://tomcat.apache.org/download-90.cgi），版本号是 9.0.21。

> **注意：** 在您阅读本书的时候，最新的 Tomcat 版本很可能已经不是这个版本了，因此下载链接可能失效，应根据当时的版本号对应的下载链接，适当修改命令。

我们还可以参考以下的官方安装文档：

- Apache Tomcat 官方的安装文档 http://tomcat.apache.org/tomcat-9.0-doc/setup.html
- Ubuntu 官方的安装文档 https://help.ubuntu.com/lts/serverguide/tomcat.html

本机安装的 Tomcat 实例主要用于部署 Web 应用程序，作为测试环境。用当前用户 “bobyuan” 来安装和启动 Tomcat， 它的安装路径选择在 `/usr/local`。先把安装包下载到当前用户的 Home 路径中，按如下命令执行安装过程，将创建符号链接 `/usr/local/apache-tomcat` 指向真实的安装路径 ，例如这里是`/usr/local/apache-tomcat-9.0.21`。

```shell
# we will going to install tomcat here.
cd /usr/local

# unpack the tomcat release package.
sudo tar xzf ~/apache-tomcat-9.0.21.tar.gz

# change ownership to current user bobyuan
sudo chown -R bobyuan:bobyuan ./apache-tomcat-9.0.21

# create symbolic link pointing to the specific tomcat release.
sudo ln -s apache-tomcat-9.0.21 apache-tomcat

# remove the tomcat release package.
rm ~/apache-tomcat-9.0.21.tar.gz
```

列文件清单，查看 Tomcat 的安装，应该如下图所示。须注意符号连接“apache-tomcat”指向真正的安装路径。

![usr_local_apache_tomcat](https://cloudappdev.netlify.app/book/img/tomcat/usr_local_apache_tomcat.png)

图2.6.1 列文件清单查看Tomcat的安装

修改当前用户 “bobyuan” 的 `~/.profile`，在最后添加一行如下内容：

```shell
export CATALINA_HOME=/usr/local/apache-tomcat
```

退出当前用户并重新登录（这将载入更新后的 `~/.profile`）。

用当前用户 “bobyuan” 启动和关闭 Tomcat 服务，命令如下：

```shell
# start Tomcat server.
$CATALINA_HOME/bin/startup.sh

# stop Tomcat server.
$CATALINA_HOME/bin/shutdown.sh
```

Tomcat 默认的侦听端口是 8080，启动后，我们可以看到8080端口正在侦听。命令如下：

```shell
bobyuan@ubuntuvm1:~$ netstat -an | grep 8080
tcp6       0      0 :::8080                 :::*                    LISTEN
```

因此，若虚拟机的 IP 地址是 192.168.42.61，则可以用 http://192.168.42.61:8080 来访问 Tomcat，如果看到了 Tomcat 的欢迎页面（如下图），则表示安装和运行是正确的。

![Tomcat welcome page](https://cloudappdev.netlify.app/book/img/tomcat/tomcat_9_welcome_page.png)

图2.6.2 Tomcat的欢迎页面

注意，以上 Tomcat 并非以系统服务的方式安装，因此，启动和关闭 Tomcat 都需要手动操作，执行启动和关闭命令。另外，虚拟机重启后也需要手动启动 Tomcat 服务。

至此，Tomcat 的安装已经完成。

以下是可选的步骤，“manager” 和 “host-manager” 是Tomcat自带的 Web 界面管理应用程序，在后续的实验中并未用到，我们也可以选择跳过。

为了使用 Tomcat 的 “manager” 和 “host-manager” 两个 Web 应用程序，需要继续按如下步骤设置。

修改 Tomcat 的管理员登录账号。编辑配置文件 `conf/tomcat-users.xml` ，添加如下内容。注，下例中用 `itsasecret` 作为密码，它可以更改成其它的密码。

```xml
<!-- user manager can access only manager section -->
<role rolename="manager-gui" />
<user username="manager" password="itsasecret" roles="manager-gui" />

<!-- user admin can access manager and admin section both -->
<role rolename="admin-gui" />
<user username="admin" password="itsasecret" roles="manager-gui,admin-gui" />
```

如下图所示：

![Tomcat config 1](https://cloudappdev.netlify.app/book/img/tomcat/Ashampoo_Snap_2018.07.12_13h08m47s_004_tomcat_2.png)

图2.6.3 Tomcat 的用户设置

默认的情况下，出于安全考虑，Tomcat 的 “manager” 和 “host-manager” web 应用程序只能从本地（localhost）访问。如果要从其它机器远程访问，则需要修改配置文件，将远端机器的 IP 或 IP 地址段添加到配置文件中。配置文件如下：

- Manager File: `./webapps/manager/META-INF/context.xml`
- Host Manager File: `./webapps/host-manager/META-INF/context.xml`

如下图所示，我们需要从 Windows Host 主机来访问虚拟机上的 “manager” 和 “host-manager” web 应用程序，经查 Windows Host 主机的 IP 地址是 192.168.1.10，则在配置文件里添加 “192.168.1.10” 为远程访问客户端：

![Tomcat remote access](https://cloudappdev.netlify.app/book/img/tomcat/tomcat-enable-remote-access.png)

图2.6.4 Tomcat 的远程管理访问设置

若虚拟机的 IP 地址是 192.168.42.61，我们于是可以在 Windows Host 主机上，通过浏览器用 http://192.168.42.61:8080/manager/ （用户名 / 密码： manager / itsasecret）来访问 “Tomcat Web Application Manager”，用 http://192.168.42.61:8080/host-manager/ （用户名 / 密码： admin / itsasecret）来访问 “Tomcat Virtual Host Manager”。