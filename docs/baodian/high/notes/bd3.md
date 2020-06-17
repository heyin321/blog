# 云应用案例

现实世界里，常见的典型企业通常可以分为以下两类：

1. 业务导向型企业，IT 作为背后的技术支撑。例如某酒业有限公司，它的主业是白酒酿造和销售，公司内部部署了昂贵的 ERP （企业资源规划，Enterprise Resource Planning）系统，有复杂的 IT 系统为整个公司的业务活动提供支持。

   这类企业的主业是其核心竞争力所在，是企业的收入来源。而 IT 部门不直接创造利润，是企业的“成本中心” 。无论自己的 IT 部门有多大，首席执行官（Chief Executive Officer，CEO）对它的关注度总是不会太高，它大概占整个企业营业成本的 1～2%，甚至更少。随着信息化在全国许多企业的全面推进，IT 部门在企业中的作用愈加重要。但是，CEO 仍觉得 IT 部门是只花钱不赚钱的部门，不是核心业务部分。CEO 更多关心，更多投入的是能带来直接盈利的市场营销和财务部门。

2. IT 产品或服务的供应商。如微软，它提供套装软件如 Office，也提供平台基础设施如 Azure 云服务，还提供专业的 IT 服务外包。这类企业的主业就是为市场提供 IT 产品或服务，当然，它也会有仅服务于内部的 IT 部门，但因对外的 IT 产品和服务是企业的收入来源，技术相关的岗位受重视程度会相对较高，在研发方面的投入比例也较高。

复合型的企业也常见，例如亚马逊最早是传统纸质书的电子商务平台，后来发展出 AWS 云服务。

如果是第一类的企业，很可能作为合同甲方将 IT 服务外包；而第二类企业，通常作为合同乙方承接这些外包项目。我们的例子将以第二类企业为视角，假想有一个业务需求，要开发一个 Web 应用程序为外界提供服务。

获利是企业的主要目标，或许不能称之为唯一目标，但肯定是其多个目标里非常重要的一个部分。不能获利的企业将无法存续，而获利丰厚的企业也一定程度上意味着它的经营活动能够给社会带来更多价值。

企业参与市场竞争，为了获取最大利益，最关切的因素可以简单归纳如下：

- **多**。多是指有丰富的产品线，品牌和档次，尽最大可能提高产量满足市场需求。
- **快**。快是指效率高，它在不同行业有着不同的定义。例如在制造业，快是指比竞争对手更快地开发或生产出满足市场需求的新产品，或是快速响应市场需求的变化调整产品线。在电子商务网站上，快被定义为将商品快速递送到客户手中。在项目外包的服务业，快被定义为快速实施和交付项目。
- **好**。努力提高产品或服务质量，赢得客户的满意与口碑，形成更高的技术壁垒，突出自己在市场中的竞争优势。
- **省**。尽最大可能降低总体运营和生产成本。例如依据企业战略决策综合权衡投入产出比或总拥有成本，选择哪些工作必须自主研发或外包，哪些物资购买或租用等。

在这些目标里面，采用新技术都是非常重要的。虽然新技术也意味着不确定性和风险，但它同时伴随着高收益。科技型企业，尤其是初创企业，为了和现存的大企业竞争，会更热衷于采用新技术以提高竞争优势。

新兴的云计算平台就是新技术的一种。对于大多数企业而言，采用云平台来部署 Web 应用程序的优势是显而易见的，从云计算平台近些年来的蓬勃发展就可见一斑。事实上，传统自建机房的部署方式依然有存在的根基，比如出于数据安全方面考虑，银行和政府等对数据安全高度敏感的组织，是不可能将数据存放在外部环境的。再有，在某些特定场景下，若规模和使用时间长度恰当的话，也有可能总使用成本会低于租用云平台的使用费。未来可以预见，传统自建机房的部署方式会逐渐减少，但不会消亡，它和云平台部署两种方式终将达到一个市场占比的均衡并长期并存。

大多数情况下，将 Web 应用程序部署在云平台，与自建机房的传统方式相比更灵活、快捷，也更经济。本书的例子 Web 应用程序的部署方式也毫无疑问的将采用租用云平台的方式来部署。

### [#](https://cloudappdev.netlify.app/book/content.html#_3-1-简单的-web-应用程序)3.1 简单的 Web 应用程序

在企业里，通常业务需求是先导，综合考虑技术、人员等其它因素来确定系统架构。例如选择 Java 这种业界主流的 Web 应用程序开发技术的好处是：

- 技术成熟。有众多大企业商务关键性应用案例，安全稳定性有口碑，碰到技术上无法实现的可能性极小。
- 生态链成熟。有众多的第三方包和开发调试工具可以使用；有大量的文档和书籍可供学习参考；碰到了技术问题很容易通过网络搜索到公开的解决方案，或是可以相对容易在社区和论坛上获得帮助。
- 生命力长。因为有大量商业应用采用此项技术，使得这项技术在未来很长一段时间不会被淘汰，技术上能够持续积累竞争优势，在此技术上的投资将获得相对久远的回报。
- 人才市场上更容易找到开发人员，选择面宽，开发和维护的成本较低。

软件开发没有银弹，没有“最好”的应用程序开发语言或框架，只有适合应用场景的才是最好的。在比较复杂的企业级商业应用场景下，还会综合使用多种程序开发语言，综合多个工具和技术的优势特性来构建整个应用服务。

技术选型通常是由项目经理和经验丰富的高级技术人员（如架构师）来确定，通常会采用快速原型法，制作一个或多个仅具备基本功能的原型（Prototype），证明技术可行性，比选后再最终确定技术路线。

本文假定技术路线已经确定，将采用 Java 作为这个示例 Web 应用程序的开发语言，采用 Spring MVC 作为 Web 应用程序的框架。

示例 Web 应用程序 CounterWebApp 是一个非常简单的 Browser / Server 架构应用程序，它用来贯穿本书涉及的知识点。它是一个网页版的计数器，没有复杂的业务逻辑。为了方便下载，整个 CounterWebApp 应用程序的代码已经托管在 GitLab 上，其地址是：

https://gitlab.com/bobyuan/20190224_cloudappdev_code

它是公开的项目，我们可以通过网页把它下载到本地，便于稍后与自己创建的项目文件相对比。

![CounterWebApp master download zip](https://cloudappdev.netlify.app/book/img/CounterWebApp/Ashampoo_Snap_2019.09.25_16h56m59s_007_Files_master_download_zip.png)

图3.1.1 下载 CounterWebApp 的源程序压缩包

以下将简述在 Windows 上从零开始创建 CounterWebApp 项目，用于开发和调试的过程。这也符合通常的现实情况，即在 Windows 桌面环境下开发软件，完成后，将应用程序打包，部署到 Linux 服务器上运行——也就是之前安装配置好的 Ubuntu Server 虚拟机上。

下面假定我们的 Windows 电脑已经安装了 Maven、Eclipse （请注意选择：Eclipse IDE for Enterprise Java Developers）和 Apache Tomcat 9 （下载二进制发行包“zip”即可），这些工具在 Windows 上的安装都非常简单，我们可以参考官方的安装文档，此处从略。

首先用 Maven 创建 Web 应用程序的文件结构。在命令行窗口输入下面的命令。请注意，以下命令是一行，且开头为“#”的是注释，可以忽略。

```shell
# create the CounterWebApp web application.
mvn archetype:generate -DgroupId=com.example -DartifactId=CounterWebApp -DarchetypeArtifactId=maven-archetype-webapp -DinteractiveMode=false
```

添加 “.gitignore” 文本文件，它的作用是让 Git 忽略掉不需要加入版本控制的文件和文件夹。此文本文件的内容是：

```text
# ignore specific folder.
/.settings/
/target/

# ignore specific file.

# ignore any file.
*.class
*.log
*.bak
```

至此，CounterWebApp 项目的文件夹结构将如下图所示。

```text
CounterWebApp
│
│  .gitignore
│  pom.xml
│
└─src
   └─main
       ├─resources
       └─webapp
           │  index.jsp
           └─WEB-INF
                  web.xml
```

修改 “pom.xml” 文件，将其内容替换如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>CounterWebApp</artifactId>
    <packaging>war</packaging>
    <version>1.0-SNAPSHOT</version>
    <name>CounterWebApp Maven Webapp</name>
    <url>http://maven.apache.org</url>

    <properties>
        <!-- Set default encoding -->
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>

        <!-- Set compiler version -->
        <maven.compiler.target>1.8</maven.compiler.target>
        <maven.compiler.source>1.8</maven.compiler.source>

        <spring.version>5.1.6.RELEASE</spring.version>
        <jstl.version>1.2</jstl.version>
        <junit.version>4.12</junit.version>
        <logback.version>1.0.13</logback.version>
        <jcl-over-slf4j.version>1.7.5</jcl-over-slf4j.version>
    </properties>

    <dependencies>
        <!-- Unit Test -->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>${junit.version}</version>
            <scope>test</scope>
        </dependency>

        <!-- Spring Core -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-core</artifactId>
            <version>${spring.version}</version>
            <exclusions>
                <exclusion>
                    <groupId>commons-logging</groupId>
                    <artifactId>commons-logging</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <dependency>
            <groupId>org.slf4j</groupId>
            <artifactId>jcl-over-slf4j</artifactId>
            <version>${jcl-over-slf4j.version}</version>
        </dependency>

        <dependency>
            <groupId>ch.qos.logback</groupId>
            <artifactId>logback-classic</artifactId>
            <version>${logback.version}</version>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-web</artifactId>
            <version>${spring.version}</version>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>${spring.version}</version>
        </dependency>

        <!-- jstl -->
        <dependency>
            <groupId>jstl</groupId>
            <artifactId>jstl</artifactId>
            <version>${jstl.version}</version>
        </dependency>
    </dependencies>

    <build>
        <finalName>CounterWebApp</finalName>

        <plugins>
            <!-- Apache Maven Eclipse Plugin (RETIRED)
            The Maven Eclipse Plugin is used to generate Eclipse IDE files (*.classpath, *.project,
            *.wtpmodules and the .settings folder) for use with a project.
            Disclaimer: Users are advised to use m2e
            https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-eclipse-plugin/
            -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-eclipse-plugin</artifactId>
                <version>2.9</version>
                <configuration>
                    <!-- Always download and attach dependencies source code -->
                    <downloadSources>true</downloadSources>
                    <downloadJavadocs>false</downloadJavadocs>
                    <!-- Avoid type mvn eclipse:eclipse -Dwtpversion=2.0 -->
                    <wtpversion>2.0</wtpversion>
                </configuration>
            </plugin>

            <!-- Apache Maven Resources Plugin
            The Resources Plugin handles the copying of project resources to the output directory.
            There are two different kinds of resources: main resources and test resources.
            The difference is that the main resources are the resources associated to the main
            source code while the test resources are associated to the test source code.
            https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-resources-plugin/
            -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-resources-plugin</artifactId>
                <version>3.1.0</version>
                <executions>
                    <execution>
                        <phase>test</phase>
                        <goals>
                            <goal>resources</goal>
                            <goal>testResources</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>

            <!-- Apache Maven Site Plugin
            The Site Plugin is used to generate a site for the project. The generated site also
            includes the project's reports that were configured in the POM.
            https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-site-plugin/
            -->
            <!-- Note.
            To fix "mvn site" error "NoClassDefFoundError: org/apache/maven/doxia/siterenderer/DocumentContent" problem.
            -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-site-plugin</artifactId>
                <version>3.7.1</version>
            </plugin>

            <!-- Tomcat Maven Plugin
            It provides goals to manipulate WAR projects within the Tomcat servlet container version 7.x
            https://repo.maven.apache.org/maven2/org/apache/tomcat/maven/tomcat7-maven-plugin/
            -->
            <plugin>
                <groupId>org.apache.tomcat.maven</groupId>
                <artifactId>tomcat7-maven-plugin</artifactId>
                <version>2.2</version>
                <configuration>
                    <server>TomcatServer</server>
                    <path>/CounterWebApp</path>
                </configuration>
            </plugin>
        </plugins>
    </build>

    <reporting>
        <plugins>
            <!-- Apache Maven Project Info Reports Plugin
            The Maven Project Info Reports plugin is used to generate reports information about the project.
            Normally, we take off the dependency report to save time.
            https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-project-info-reports-plugin/
            -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-project-info-reports-plugin</artifactId>
                <version>3.0.0</version>
                <configuration>
                    <dependencyLocationsEnabled>false</dependencyLocationsEnabled>
                </configuration>
            </plugin>

            <!-- Apache Maven Javadoc Plugin.
            The Javadoc Plugin uses the Javadoc tool to generate javadocs for the specified project.
            https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-javadoc-plugin/
            -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-javadoc-plugin</artifactId>
                <version>3.1.0</version>
            </plugin>

            <!-- Maven JXR Plugin.
            The JXR Plugin produces a cross-reference of the project's sources.
            https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-jxr-plugin/
            -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-jxr-plugin</artifactId>
                <version>3.0.0</version>
            </plugin>

            <!-- Apache Maven PMD Plugin.
            The PMD Plugin allows you to automatically run the PMD code analysis tool on your project's
            source code and generate a site report with its results.
            It also supports the separate Copy/Paste Detector tool (or CPD) distributed with PMD.
            https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-pmd-plugin/
            -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-pmd-plugin</artifactId>
                <version>3.12.0</version>
                <configuration>
                    <skipEmptyReport>false</skipEmptyReport>
                </configuration>
            </plugin>
        </plugins>
    </reporting>
</project>
```

按下面的文件夹结构，创建文件夹，并添加源文件：

```text
CounterWebApp
│
│  .gitignore
│  pom.xml
│
└─src
    ├─main
    │  ├─java
    │  │  └─com
    │  │      └─example
    │  │          ├─controller
    │  │          │      BaseController.java
    │  │          │
    │  │          └─model
    │  │                  SimpleCounter.java
    │  │
    │  ├─resources
    │  │      logback.xml
    │  │
    │  └─webapp
    │      └─WEB-INF
    │          │  mvc-dispatcher-servlet.xml
    │          │  web.xml
    │          │
    │          └─pages
    │                  index.jsp
    │
    └─test
        └─java
           └─com
               └─example
                   └─model
                           SimpleCounterTest.java
```

其中，“com.example.controller.BaseController.java” 的内容如下：

```java
package com.example.controller;

import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.model.SimpleCounter;


@Controller
public class BaseController {
    private static SimpleCounter sc = new SimpleCounter();

    private static final String VIEW_INDEX = "index";
    private final static org.slf4j.Logger logger = LoggerFactory.getLogger(BaseController.class);

    private static synchronized long getNextCounterValue() {
        sc.increase();
        return sc.getValue();
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String welcome(ModelMap model) {
        long counterValue = BaseController.getNextCounterValue();

        model.addAttribute("message", "Welcome");
        model.addAttribute("counter", counterValue);
        logger.debug("[welcome] counter : {}", counterValue);

        // Spring uses InternalResourceViewResolver and return back index.jsp
        return VIEW_INDEX;
    }

    @RequestMapping(value = "/{name}", method = RequestMethod.GET)
    public String welcomeName(@PathVariable String name, ModelMap model) {
        long counterValue = BaseController.getNextCounterValue();

        model.addAttribute("message", "Welcome " + name);
        model.addAttribute("counter", counterValue);
        logger.debug("[welcomeName] counter : {}", counterValue);

        // Spring uses InternalResourceViewResolver and return back index.jsp
        return VIEW_INDEX;
    }
}
```

数据模型中，“com.example.model.SimpleCounter.java” 的内容如下：

```java
package com.example.model;

public class SimpleCounter {
    private long counter = 0;

    public SimpleCounter() {
        this.counter = 0;
    }

    public SimpleCounter(long initValue) {
        this.counter = initValue;
    }

    public void increase() {
        this.counter = this.counter + 1;
    }

    public long getValue() {
        return this.counter;
    }
}
```

它对应的单元测试 “com.example.model.SimpleCounterTest.java” 的内容是：

```java
package com.example.model;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class SimpleCounterTest {

    @Test
    public void test_basic_usage() {
        SimpleCounter sc = new SimpleCounter();
        assertEquals(0, sc.getValue());

        sc.increase();
        assertEquals(1, sc.getValue());

        sc.increase();
        assertEquals(2, sc.getValue());

        sc.increase();
        assertEquals(3, sc.getValue());
    }

    @Test
    public void test_extended_usage() {
        SimpleCounter sc = new SimpleCounter(5);
        assertEquals(5, sc.getValue());

        sc.increase();
        assertEquals(6, sc.getValue());

        sc.increase();
        assertEquals(7, sc.getValue());

        sc.increase();
        assertEquals(8, sc.getValue());
    }
}
```

资源文件 “logback.xml” 的内容是：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>

    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <layout class="ch.qos.logback.classic.PatternLayout">
            <Pattern>
                %d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n
            </Pattern>
        </layout>
    </appender>

    <logger name="com.example.controller" level="debug" additivity="false">
        <appender-ref ref="STDOUT" />
    </logger>

    <root level="error">
        <appender-ref ref="STDOUT" />
    </root>

</configuration>
```

Spring MVC 的配置文件 “mvc-dispatcher-servlet.xml” 的内容是：

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:context="http://www.springframework.org/schema/context"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="
        http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context.xsd">

    <context:component-scan base-package="com.example.controller" />

    <bean
        class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix">
            <value>/WEB-INF/pages/</value>
        </property>
        <property name="suffix">
            <value>.jsp</value>
        </property>
    </bean>

</beans>
```

Web 应用程序的配置文件 “web.xml” 的内容是：

```xml
<web-app xmlns="http://java.sun.com/xml/ns/javaee"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://java.sun.com/xml/ns/javaee
          http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"
    version="2.5">

  <display-name>Counter Web Application</display-name>

    <servlet>
        <servlet-name>mvc-dispatcher</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>

    <servlet-mapping>
        <servlet-name>mvc-dispatcher</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>

    <context-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>/WEB-INF/mvc-dispatcher-servlet.xml</param-value>
    </context-param>

    <listener>
        <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
    </listener>
</web-app>
```

唯一的页面 “index.jsp”（注意它位于“WEB-INF/pages”文件夹下） 的内容如下：

```text
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<html>
<body>
<h1>Maven + Spring MVC Web Project Example</h1>

<h2>Message : ${message}</h2>
<h2>Counter : ${counter}</h2>
</body>
</html>
```

打开命令行窗口中，切换当前路径到 “CounterWebApp” 的文件夹下，用 Maven 生成 Eclipse 的项目文件（“.classpath” 和 “.project”）。执行此命令：

```shell
# generate Eclipse web project files.
mvn eclipse:eclipse -Dwtpversion=2.0
```

打开 Eclipse 集成开发环境，点选菜单“File | Import... ”导入这个项目。

![CounterWebApp Import 1](https://cloudappdev.netlify.app/book/img/CounterWebApp/Ashampoo_Snap_2019.09.25_17h02m13s_008_Import_1.png)

图3.1.2 Eclipse 导入 CounterWebApp 项目之第1步

![CounterWebApp Import 1](https://cloudappdev.netlify.app/book/img/CounterWebApp/Ashampoo_Snap_2019.09.25_17h03m31s_009_Import_2.png)

图3.1.3 Eclipse 导入 CounterWebApp 项目之第2步

导入后，项目在 Eclipse 里将如下所示。

![eclipse of CounterWebApp](https://cloudappdev.netlify.app/book/img/CounterWebApp/Ashampoo_Snap_2018.07.25_14h41m16s_001_eclipse.png)

图3.1.4 Eclipse 导入 CounterWebApp 项目之完成

假定本机的开发环境安装了 Apache Tomcat 9.0。添加 Tomcat Server 环境如下：

![eclipse Server Runtime](https://cloudappdev.netlify.app/book/img/CounterWebApp/Ashampoo_Snap_2018.07.25_14h51m27s_004_Tomcat_Server.png)

图3.1.5 Eclipse 设置 Tomcat Server 运行环境

按 “Add Library...” 按钮，添加 Web 应用程序服务器的 API：

![elipse - Java Build Path](https://cloudappdev.netlify.app/book/img/CounterWebApp/Ashampoo_Snap_2019.09.25_16h40m42s_001_Build_Path_for_CounterWebApp_Add_Library.png)

图3.1.6 Eclipse 设置 Tomcat Server 运行环境之添加库第1步

![eclipse - Add Library - Server Runtime](https://cloudappdev.netlify.app/book/img/CounterWebApp/Ashampoo_Snap_2019.09.25_16h42m40s_002_Build_Path_for_CounterWebApp_Add_Server_Runtime.png)

图3.1.7 Eclipse 设置 Tomcat Server 运行环境之添加库第2步

![eclipse - Add Library - Server Library](https://cloudappdev.netlify.app/book/img/CounterWebApp/Ashampoo_Snap_2019.09.25_16h44m58s_003_Build_Path_for_CounterWebApp_Add_TomcatServer.png)

图3.1.8 Eclipse 设置 Tomcat Server 运行环境之添加库第3步

按“Finish”按钮完成。注意下面的“Apache Tomcat v9.0 [Apache Tomcat v9.0”，是刚才新添加的：

![eclipse - Add Library - Complete](https://cloudappdev.netlify.app/book/img/CounterWebApp/Ashampoo_Snap_2019.09.25_16h47m18s_004_Build_Path_for_CounterWebApp_Add_Library_Finished.png)

图3.1.9 Eclipse 设置 Tomcat Server 运行环境之完成

在 Eclipse 里检查一下，整个项目应该没有任何的错误标记。

如果我们在“Problems”视图窗口中看到这样的错误：

![Problems of Facets](https://cloudappdev.netlify.app/book/img/CounterWebApp/Ashampoo_Snap_2019.03.27_18h28m48s_002_Problems_Facets.png)

图3.1.10 Eclipse 错误视图窗口

注，如果您找不到“Problems”视图窗口，可以通过菜单“Window | Show View | Problems”打开它。

根据错误提示，我们可以在项目设置里面，搜索“facets”，做如下设置。

![Facets for CounterWebApp](https://cloudappdev.netlify.app/book/img/CounterWebApp/Ashampoo_Snap_2019.09.25_17h11m50s_011_Facets_for_CounterWebApp.png)

图3.1.11 Eclipse 设置 Project Facets

至此，整个 CounterWebApp 应用程序项目的代码已经建立完毕。

### [#](https://cloudappdev.netlify.app/book/content.html#_3-2-运行-web-应用程序)3.2 运行 Web 应用程序

在 Eclipse IDE 里，我们可以让这个 Web 应用程序在本地 Tomcat 应用服务器上运行，主要目的是用于代码开发过程中的调试。

配置好 Tomcat Server 后，切换到“Java EE”的视图，选中 CounterWebApp 项目，选择菜单 “Run | Run As | Run on Server”。

![Eclipse JavaEE Perspective](https://cloudappdev.netlify.app/book/img/CounterWebApp/Ashampoo_Snap_2019.03.26_11h20m52s_001_Eclipse_JavaEE_Perspective.png)

图3.2.1 Eclipse 运行 CounterWebApp 第1步

![eclipse CounterWebApp Run On Server 1](https://cloudappdev.netlify.app/book/img/CounterWebApp/Ashampoo_Snap_2019.03.12_20h56m48s_003_RunOnServer_1.png)

图3.2.2 Eclipse 运行 CounterWebApp 第2步

![eclipse CounterWebApp Run On Server 2](https://cloudappdev.netlify.app/book/img/CounterWebApp/Ashampoo_Snap_2019.03.12_20h57m53s_004_RunOnServer_2.png)

图3.2.3 Eclipse 运行 CounterWebApp 第3步

按“Finish”按钮，即可以将此 CounterWebApp 发布到 Tomcat Server 中运行。

下图中我们可以看到，它已经正常运行。每次刷新这个页面，可以看到计数器会增加1。

![eclipse CounterWebApp Running](https://cloudappdev.netlify.app/book/img/CounterWebApp/Ashampoo_Snap_2019.03.26_11h36m24s_003_eclipsews01_CounterWebApp.png)

图3.2.4 Eclipse 运行 CounterWebApp 结果

如果选择菜单 “Run | Debug As | Debug on Server”，则可以在调试模式下将此 CounterWebApp 发布到 Tomcat Server 中运行。适用于开发过程中的代码调试。

回到命令行窗口，我们来试试用 Maven 来打包和启动此 Web 应用程序。

我们先用 Maven 来生成发行包，将会在 “target” 文件夹中生成 “CounterWebApp.war” 文件：

```shell
mvn package
```

再直接用 Maven 来运行这个 Web 应用程序，用于测试 CounterWebApp 是否可以正常工作。只是这次 Maven 将自动选择用 “Apache Tomcat 7.0.47” 来作为应用服务器：

```shell
mvn tomcat7:run
```

![Maven run CounterWebApp](https://cloudappdev.netlify.app/book/img/CounterWebApp/Ashampoo_Snap_2018.07.25_17h04m08s_007_mvn_run_CounterWebApp.png)

图3.2.5 通过 Maven 运行 CounterWebApp

从上图示例中，我们可以看到 CounterWebApp 运行正常。