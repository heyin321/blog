# 自动化测试

软件测试是发现软件错误的主要手段，通过测试可以发现软件缺陷，为软件产品的质量测量和评价提供依据。最基本的测试思想是，将被测试对象视为黑箱（即内部的处理过程不可见），给定多组不同边界条件下的输入参数和预期的输出结果，与被测试对象的实际输出结果相比较，如果一致则测试通过，反之则测试不通过，从而及早发现软件缺陷并修复。

根据国家标准 GB/T 15532-2008，软件测试可分为单元测试、集成测试、确认测试、系统测试、配置项测试和回归测试等类别。

1. **单元测试**。单元测试也称为模块测试，测试的对象是可以独立编译的程序模块、软件构件或面向对象的类，其目的是检查每个模块能够正确的实现其设计的功能、性能、接口和其他设计约束等条件。单元测试通常是由模块开发人员自己完成的，也就是说，开发人员编码实现一个功能模块，同时也完成其单元测试的编码并通过测试。由开发人员在编写功能模块具体实现代码的时候一并完成提交，它可以是白盒测试（即内部处理过程可见）也可以是黑盒测试，这也是最基础的测试，保障基础的功能模块能够正常工作。
2. **集成测试**。所谓集成，即是将各个功能模块组装成为一个相对独立的应用程序，从整体的角度进行功能验证，看它是否达到设计目标。集成测试的目的是检查模块之间，以及模块和已集成的软件之间的接口关系，验证已集成的软件是否符合设计要求。在进行集成测试前，这些模块应该都已经通过单元测试。集成测试是黑盒测试，可以由开发人员或由专门的测试团队（有的称为 Quality Assurance 团队，或 QA 团队）完成。
3. **确认测试**。确认测试主要用于验证软件的功能、性能、以及其他特性是否与用户需求一致。根据用户的参与程度不同，通常包括以下类型：内部确认测试、Alpha 和 Beta 测试、用户验收测试。其中用户验收测试是从用户角度对最终项目要交付的产品和服务进行验收测试，核对是否达到合同约定的交付参数和指标。用户验收测试更多地侧重于关注业务需求是否得到满足，并不十分关注底层技术如何实现。它通常会是甲方或甲方聘请的第三方专业测试机构来负责执行。
4. **系统测试**。系统测试的对象是完整的、集成的计算机系统，系统测试的目的是在正式生产环境下，验证完整的软件配置项能否和系统正确相连，满足系统设计文档和软件开发合同规定的要求。一般来说，系统测试的主要内容包括功能测试、健壮性测试、用户界面测试、安全性测试、安装与卸载测试等。其中，最重要的工作是进行功能测试和性能测试。功能测试主要是采用黑盒测试方法，验证特定的输入能够得到预期的输出。性能测试主要是验证软件系统在承载情况下表现出来的特性是否符合要求，主要的指标如响应时间、吞吐量、并发用户数量、资源利用率等。例如冒烟测试、可用性测试（用户体验，系统响应速度等）、失效测试（模拟部分功能发生故障后恢复的情况）、性能测试、安全测试（黑客攻击，漏洞检测）等。例如其中常见的性能测试是指，在高并发、大流量、突发大负载的情况下，系统的响应。根据系统反馈发现性能瓶颈，提供对硬件配比估算的计算依据。
5. **配置项测试**。配置项测试的对象是软件配置项，其目的是检验软件配置项与接口需求规格说明书的一致性。在开始配置项测试之前，除了应当满足一般测试的准入条件外，还应当让被测试软件配置项通过单元测试和集成测试。
6. **回归测试**。回归测试主要用于新版本升级，目的是测试软件变更后，变更部分的功能正确性，以及原有的正确的功能不受影响（还能正常工作）。

在软件开发的 W 模型中（W-Model），强调的是测试伴随着整个软件开发周期，测试的对象不仅仅是程序，需求、设计和文档等同样都需要测试。测试与开发是同步进行的，从而有利于尽早地发现问题。从这个角度来说，一个合格的测试人员对软件各方面把握程度应该比开发人员更高，一个测试人员要能够胜任软件开发的任何一个岗位。

![test_v_model](https://cloudappdev.netlify.app/book/img/testing/sdlc_w_model.png)

图5.1 软件开发的 W 模型

W 模型的优点是有利于尽早全面地发现问题。例如，需求分析完成后，测试人员就应该参与到对需求文档的验证和确认活动中，以尽早地找出缺陷。同时，对需求的测试也有利于及时了解项目难度和测试风险，及早制定应对措施，这将显著减少总体测试时间，加快项目进度。

当然，W 模型也存在局限性。在 W 模型中，需求、设计、编码等活动被视为是串行的；同时，测试和开发活动也保持着一种线性的前后约束关系，上一阶段完全结束，才可正式开始下一个阶段工作。这样就无法支持迭代的开发模型。对于当前软件开发复杂多变的情况，W 模型并不能完全解决测试管理所面临的困惑。

实际工作中，软件开发公司的开发人员将会负责做单元测试（Unit Test）；集成测试（Integration Test）可能由开发人员或专门的测试团队来做（这要看公司在这块的具体安排，可能不尽相同）；测试团队将会负责系统测试（System Test）；而接收测试（Acceptance Test）通常将由甲方或甲方聘用的第三方测试机构来执行。

实际软件开发过程中，常见的测试主要有：单元测试、集成测试、系统测试和接收测试。如下图所示：

![acceptance_vs_integration_test](https://cloudappdev.netlify.app/book/img/testing/acceptance_vs_integration_test.png)

图5.2 软件测试的象限分布

不难想象，发布一个软件的新版本引入了众多大大小小的新功能，因而测试需要多次重复执行，确保功能正常符合预期。且在软件开发过程中，不可避免地会影响到之前已经测试通过的那部分现存功能，因而需要在软件发布之前，反复不断地通过一系列的测试做验证。这种固化的重复劳动工作正是计算机所擅长的，自动化测试就是把人工测试行为转化为机器自动执行的一个过程。

自动化测试与软件开发过程从本质上来讲是一样的，无非是利用自动化测试工具（对应于软件开发工具），经过对测试需求的分析（对应于软件过程中的需求分析），设计出自动化测试用例（对应于软件过程中的需求规格），从而搭建自动化测试的框架（对应于软件过程中的概要设计），设计与编写自动化脚本（对应于详细设计与编码），测试脚本的正确性，从而完成该套测试脚本（即主要功能为测试的应用软件）。

实施自动化测试之前需要对软件开发过程进行分析，以观察其是否适合使用自动化测试。通常需要同时满足以下条件：

1. **需求变动不频繁**。测试脚本的稳定性决定了自动化测试的维护成本。如果软件需求变动过于频繁，测试人员需要根据变动的需求来更新测试用例以及相关的测试脚本，而脚本的维护本身就是一个代码开发的过程，需要修改、调试，必要的时候还要修改自动化测试的框架，如果所花费的成本不低于利用其节省的测试成本，那么自动化测试便是失败的。项目中的某些模块相对稳定，而某些模块需求变动性很大。我们便可对相对稳定的模块进行自动化测试，而变动较大的仍是用手工测试。
2. **项目周期足够长**。自动化测试需求的确定、自动化测试框架的设计、测试脚本的编写与调试均需要相当长的时间来完成，这样的过程本身就是一个测试软件的开发过程，需要较长的时间来完成。如果项目的周期比较短，没有足够的时间去支持这样一个过程，那么自动化测试也没必要，手工测试或许更快捷。
3. **自动化测试脚本可重复使用**。如果费尽心思开发了一套近乎完美的自动化测试脚本，但是脚本的重复使用率很低，致使其间所耗费的成本大于所创造的经济价值，自动化测试便无法产生足够的效益。
4. **手工测试无法完成**。在手工测试工作量巨大，需要投入大量时间与人力时，需要考虑引入自动化测试，或者半自动化测试。比如性能测试、配置测试、大数据量输入测试等。

如果不适合自动化，就只能用人工测试代替。在实际工作中，就可以看到在测试图形化界面时，由于不方便自动化，较大比例都是人工测试。如下图所示：

![testing_percentage](https://cloudappdev.netlify.app/book/img/testing/testing_percentage.png)

图5.3 自动化软件测试的比例

综上所述，自动化测试的金字塔如下图。

![auto_testing_pyramid](https://cloudappdev.netlify.app/book/img/testing/auto_testing_pyramid.png)

图5.4 自动化软件测试的金字塔

其中，单元测试、组件测试、集成测试主要是以验证功能为目的，最适合自动化。而系统测试和接收测试处于模糊区间，可视情况而定。例如系统测试中的性能测试，如果频繁执行，也可以将它自动化，反之，如果只有大版本发布时执行一次（次数间隔可能按年计算），则完全可以手动执行。

以下是来自实际工作中总结的一些建议：

- 开发人员负责功能模块的实现代码与对应的单元测试代码，它们必须同时提交才能算完成此项开发任务。与此同时，编码风格和注释等都应当达到质量标准，要求严格的还将经过人工的同行评审（Peer review）。
- 单元测试的代码量和被测模块的代码量大体相当，有时还会更多。单元测试要完备需要考虑多种情况，例如正常情况下的上边界、中值、下边界，以及非正常（即发生异常，各种可能发生的错误）情况。
- 测试案例要考虑完备各种情况，除了预期内的典型正常值输入外，还应当包括边界值、特殊值、空（Null）、非法值、预期发生异常的值等。除了考虑正常情况下运行，还应当根据设计需求，考虑数据库连接中断、网络中断、甚至断电等意外情况。
- 测试覆盖率不必追求100%，对于重点部分可以要求高些，可视实际情况而定。测试的投入如同开发一样都是研发成本，它随着测试覆盖率的升高，也会收益递减。
- 每次修复一个 Bug，应该在测试案例中增加对应的测试，在回归测试中执行这些测试案例，以便保证此修复在后续的版本中都能够正常工作。

### [#](https://cloudappdev.netlify.app/book/content.html#_5-1-单元测试)5.1 单元测试

我们来看一个单元测试的示例。

以下是一个 Java 的类 “ArithmeticOperations.java”，执行简单的加减法操作。

![Java class ArithmeticOperations](https://cloudappdev.netlify.app/book/img/java_auto_test/Ashampoo_Snap_2018.07.03_16h30m32s_001_ClassExample.png)

图5.1.1 被测试的类

它对应的的单元测试 “ArithmeticOperationsTest.java”，仅对加法进行了测试，未对减法进行测试。基于 Junit 3的 API 编码。

![Java class ArithmeticOperationsTest](https://cloudappdev.netlify.app/book/img/java_auto_test/Ashampoo_Snap_2018.07.04_11h49m36s_004_ClassTestCaseExample.png)

图5.1.2 测试案例

测试覆盖率功能可通过在 Eclipse Marketplace 中的插件“Eclemma Java Code Coverage”来支持。在“Eclipse IDE for Enterprise Java Developer”集成开发环境里面，此插件已经默认安装好了。

![EclEmma Plugin](https://cloudappdev.netlify.app/book/img/java_auto_test/EclEmma_Java_Code_Coverage_Plugin.png)

图5.1.3 Eclipse 中单元测试覆盖率的插件

例如我们用此插件来执行单元测试，结果如下图所示。左侧是 JUnit 单元测试的结果，其中仅有一个测试案例 “testAdd”，绿色进度条表示测试正常通过。右边是测试覆盖率的结果，右下方可见测试覆盖率为58.8%，右上代码可见减法（subtract）方法未被测试覆盖（代码行用红色标记）。

![eclipse unit test result](https://cloudappdev.netlify.app/book/img/java_auto_test/Ashampoo_Snap_2018.07.03_16h42m02s_004_Coverage.png)

图5.1.4 Eclipse 单元测试覆盖率运行结果

这便是开发中常见的单元测试，完善后即可用于自动化执行。

在本书配套的单元测试示例代码“UnitTestExample1”中，有一个用 Junit 3编写的相对完整的测试样例，测试了“IntOperations.java”的静态方法和类成员方法。下面是“IntOperations.java”的第一版实现。其中静态方法是 getName()，类成员方法有 add()、subtract() 和 average()。

```java
package com.example.math;

public class IntOperations {
    public static final String getName() {
        return "IntOperations";
    }

    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }

    public double average(int a, int b) {
        return (a + b) / 2.0;
    }
}
```

它们的测试代码节选如下，请留意其中测试 average() 方法为了测试边界值时对 `Integer.MIN_VALUE` （32位整型数的最小值：-2147483648）和 `Integer.MAX_VALUE` （32位整型数的最大值：2147483647）的使用：

```java
package com.example.math;

import junit.framework.Assert;
import junit.framework.TestCase;

/**
 * Unit test for IntOperations, coded in JUnit3 style.
 *
 * Integer.MIN_VALUE = -2147483648
 * Integer.MAX_VALUE = 2147483647
 */
public class IntOperationsTest extends TestCase {

    /**
     * Example of testing the static method.
     */
    public void test_getName() {
        Assert.assertEquals("IntOperations", IntOperations.getName());
    }

    /**
     * Test case for average(a, b) method.
     */
    public void test_average() {
        IntOperations io = new IntOperations();
        Assert.assertEquals(0.0, io.average(0, 0));
        Assert.assertEquals(2.0, io.average(1, 3));
        Assert.assertEquals(2.5, io.average(2, 3));

        Assert.assertEquals(Integer.MIN_VALUE / 2.0, io.average(Integer.MIN_VALUE, 0));
        Assert.assertEquals(Integer.MIN_VALUE / 2.0, io.average(0, Integer.MIN_VALUE));

        Assert.assertEquals(Integer.MAX_VALUE / 2.0, io.average(Integer.MAX_VALUE, 0));
        Assert.assertEquals(Integer.MAX_VALUE / 2.0, io.average(0, Integer.MAX_VALUE));

        Assert.assertEquals(Integer.MIN_VALUE + 0.0, io.average(Integer.MIN_VALUE, Integer.MIN_VALUE));
        Assert.assertEquals(Integer.MAX_VALUE + 0.0, io.average(Integer.MAX_VALUE, Integer.MAX_VALUE));
    }
}
```

运行上述单元测试，不通过！经调查发现，原因在于 add() 方法的第一版实现中，先将 a 和 b 求和，而输入参数 a 和 b 又同时可能是整型变量（int）最大或者最小值（代码中有对最大和最小值具体数值的注释），导致溢出。

于是我们修改了实现代码：

```java
public class IntOperations {

    public double average(int a, int b) {
        //return (a + b) / 2.0;  //may cause overflow!
        return (a / 2.0) + (b / 2.0);
    }
}
```

新版的实现代码先将两个输入参数分别除以2.0后再相加，这样避免了先相加导致溢出情况的发生，测试得以通过。如下图所示：

![Average test passed](https://cloudappdev.netlify.app/book/img/java_auto_test/average_test_passed.png)

图5.1.5 Eclipse 单元测试覆盖率运行测试通过

以上案例说明，在实际开发过程中，理论上任何编写的代码都不要想当然地认为它能正常工作，一定要经过测试才能确保其正常运行。不要因为功能简单，就凭感觉以为它没问题，只有通过测试验证后，我们才能对代码的功能有信心。

单元测试中常用的技术还有 Mock 测试，适用于被测试代码有依赖的情况下，这在面向对象的程序设计中很常见。比如，我们的支付业务调用了第三方的支付平台，为了测试支付业务的功能正确性，我们必须对它进行测试，但同时我们又不想测试的时候去真正调用第三方的支付平台产生实际的支付。在这样的情况下，Mock 技术显得非常有用。

在本书配套的单元测试示例代码“UnitTestExample2”中，有一个用 Junit 4编写的相对完整的测试样例，它使用功能强大的第三方包 JMockit （网址是 http://jmockit.github.io/）。用 Mock 技术的第三方包有许多，关于选择谁也有很多不同的见解，它们是技术实现不同而背后的理念都是一样的。本书的例子“UnitTestExample2”中选用的是 JMockit。

第三方 Mock 包的选择不是唯一的，一般认为 Mockito 比较成熟稳定，而新秀 JMockit 功能更强更有潜力。这也是本文以 JMockit 为例的原因。请参考以下链接：

- 在 Stackoverflow 上，Mockito 被评为“Java 的最佳模拟框架” https://stackoverflow.com/questions/22697/whats-the-best-mock-framework-for-java
- Mockito、EasyMock、JMockit 三者对比 https://www.baeldung.com/mockito-vs-easymock-vs-jmockit

下面我们来看 “UnitTestExample2”中的代码。

DBHelper 类是一个访问数据库的 API 集合，其中有一个函数 getUserNameById()，它根据输入的 user_id 到数据库中取出对应的用户名字。

```java
/**
 * This class is an API layer to the database.
 */
public class DBHelper {
    public String getUserNameById(String user_id) {
        String sUserName = "";

        // connect to DB and lookup the user name by given ID.

        return sUserName;
    }
}
```

由于它依赖于底层数据库才能工作，导致所有使用 DBHelper 的上层模块的测试很麻烦。你可以想象，数据库若是空的则返回空值或错误，若对应的 `user_id` 变化了，返回的值又不同。总之，它不确定！

Mock 的思想是，我们伪造一个 DBHelper 对象，让它在指定的某个或某几个 user_id 下返回某些确定的值，这样，上层依赖于此 DBHelper 对象的模块就可以测试了。

例如以下这个 Greeting 类，它依赖于 DBHelper，在 greetById() 方法中，它使用了 DBHelper 中的 getUserNameById() 方法，在返回的用户名前面加上问候语“Good day! ”，返回一个字符串。

```java
/**
 * This Greeting class has dependency to DBHelper.
 */
public class Greeting {
    private DBHelper dbh = null;

    public Greeting(DBHelper dbh) {
        this.dbh = dbh;
    }

    public String greetById(String user_id) {
        String sUserName = dbh.getUserNameById(user_id);
        return "Good day! " + sUserName + ".";
    }
}
```

为了测试 Greeting 类，我们将它依赖的 DBHelper 对象换成一个“假的”对象，即它表面上具有 DBHelper 的接口，可供 Greeting 类调用，但内部实现却是自定义的 Mock 对象。

用 JMockit 写的测试代码如下，请注意“dbh”这个是用 JMock 模拟的“假”对象：

```java
import org.junit.Assert;
import org.junit.Test;

import mockit.Expectations;
import mockit.Mocked;
import mockit.Verifications;

/**
 * Mocked test for Greeting class.
 */
public class GreetingTest {
    @Mocked
    DBHelper dbh;  // mock to DBHelper, no need to initialize.

    @Test
    public void test_greetById() {
        // prepare the mocked object.
        new Expectations() {{
            dbh.getUserNameById("001"); result = "Tom";
            dbh.getUserNameById("002"); result = "Mike";
            dbh.getUserNameById("003"); result = "John";
        }};

        // use the mocked object to create the testing class.
        Greeting gt = new Greeting(dbh);

        //perform the tests.
        Assert.assertEquals("Good day! Tom.", gt.greetById("001"));
        Assert.assertEquals("Good day! Mike.", gt.greetById("002"));
        Assert.assertEquals("Good day! John.", gt.greetById("003"));
        Assert.assertEquals("Good day! Mike.", gt.greetById("002"));

        // verify the mocked instance been called.
        new Verifications() {{
            gt.greetById("001"); times = 1;
            gt.greetById("002"); times = 2;
            gt.greetById("003"); times = 1;
        }};
    }
}
```

在测试案例 test_greetById() 中，这个被 Mock 的 DBHelper 对象 dbh 先被设置了3个模拟的输入参数与返回值，即让它在这几种输入参数的情况下，返回指定的结果。然后用该 dbh 来创建我们的被测对象 Greeting 类。当然，测试将只能以上述设定的几个指定输入参数进行，测试完成后，还可以验证这个 dbh 被调用的次数。

下面我们在 Eclipse 里建立此测试的配置。对项目里的“src/test/java”点击鼠标右键，选择“Coverage As | 2 JUnit Test”菜单，如下图所示。

![Coverage As Junit Test](https://cloudappdev.netlify.app/book/img/java_auto_test/Ashampoo_Snap_2019.04.10_16h51m26s_001_Coverage_as_JUnit_Test.png)

图5.1.6 Eclipse 以单元测试方式运行

它将建立一个默认的“Coverage Configuration”并运行。运行后，我们再选择菜单“Run | Coverage Configurations...”，适当调整部分属性，如图：

![Eclipse UnitTestExample2 coverage run 1](https://cloudappdev.netlify.app/book/img/java_auto_test/Eclipse_UnitTestExample2_coverage_run_1.png)

图5.1.7 Eclipse 以单元测试方式运行的基本配置

我们只希望对“src/main/java”里面的 Java 源程序进行覆盖率测试。

![Eclipse UnitTestExample2 coverage run 2](https://cloudappdev.netlify.app/book/img/java_auto_test/Eclipse_UnitTestExample2_coverage_run_2.png)

图5.1.8 Eclipse 以单元测试方式运行的代码覆盖配置

使用 JMockit 需要在“VM arguments”里新增加的一行参数：

```
-javaagent:C:/Users/bobyuan/.m2/repository/org/jmockit/jmockit/1.44/jmockit-1.44.jar
```

如下图：

![Eclipse UnitTestExample2 coverage run 3](https://cloudappdev.netlify.app/book/img/java_auto_test/Eclipse_UnitTestExample2_coverage_run_3.png)

图5.1.9 Eclipse 以单元测试方式运行的 VM 参数配置

需要特别注意的是，该参数必须指向本机 JMockit 的 Jar 包。读者需要根据自己机器上的文件位置情况做调整。另外，注意路径分隔符是“/”，即将Windows上的路径分隔符“\”更改成了 Linux 上的分隔符“/”。

我们需要检查并确保此 Jar 文件存在，否正无法运行。

```shell
C:\Users\bobyuan\.m2\repository\org\jmockit\jmockit\1.44>dir *.jar
 Volume in drive C is SYSTEM
 Volume Serial Number is 0009-BA81

 Directory of C:\Users\bobyuan\.m2\repository\org\jmockit\jmockit\1.44

01/09/2019  08:05 PM           437,296 jmockit-1.44-sources.jar
01/09/2019  08:05 PM           757,982 jmockit-1.44.jar
               2 File(s)      1,195,278 bytes
               0 Dir(s)  388,709,863,424 bytes free
```

运行后，单元测试覆盖率显示如下图。我们可以看到，在并未调用真实的 DBHelper 对象的情况下（测试覆盖率为0.0%），我们已经测试了 Greeting 类（测试覆盖率为100.0%）。

![Eclipse UnitTestExample2 coverage result](https://cloudappdev.netlify.app/book/img/java_auto_test/Eclipse_UnitTestExample2_coverage_result.png)

图5.1.10 Eclipse 单元测试覆盖率运行结果

以上示例仅是单元测试中最基本的语句覆盖（Statement Coverage），又称行覆盖。即通过一定数量的测试用例来保证被测方法每一行代码都会被执行一遍。

语句覆盖是最基本的覆盖方式，用得最多。其他覆盖类型还有：

- 判定覆盖 / 分支覆盖（Decision Coverage / Branch Coverage）。代码里每一个布尔值的判定都要跑一次真（true）和假（false）。例如，假设被测代码段有2个逻辑判断语句，判定A： (a>1 || b ==0) 和判定B：(a==2 || x>1)，要满足判定覆盖，需要这两个判定A和判定B分别各取一次真假，才能满足覆盖。
- 条件覆盖（Condition Coverage）。和上面判定覆盖有点类似，只不过判定覆盖关注整个判定语句，而条件覆盖则关注某一个判断条件。条件覆盖要求每个判定条件的真（true）和假（false）都要覆盖到，而不仅仅是整个判定。例如，判定A (a>1 || b ==0)，判定覆盖只要求整个判定A分别取一次真假即可满足，而条件覆盖则需要其中2个判断条件 (a>1) 和 (b==0) 分别各取一次真假才算满足。
- 路径覆盖（Path Coverage）。路径覆盖就是设计测试用例，覆盖所有可能执行的路径。

一般情况下，语句覆盖和判定覆盖都满足，则已经算是比较良好的单元测试了。

单元测试是开发人员的基本功，和编写业务代码一样重要。代码量越大，复杂度越高，越能体现出单元测试的重要性。单元测试保证了基本功能模块的正确性，为构建稳定可靠的上层结构打下了坚实的基础，它是不可或缺的，怎么强调其重要性都不过分。

对于 Java 项目，让 Apache Maven（网址是 http://maven.apache.org/) 来标准化项目的构建，在此基础上，让构建服务器（build server）侦测到代码更新时自动执行一遍全部的自动化测试案例，从而保证这部分逻辑始终是能够正常工作的。一旦测试不通过，也可以很快发现并及时修复。

例如我们打开命令行窗口，在“UnitTestExample1”文件夹下，用 Maven 执行编译、测试的过程，结果显示构建成功。

```shell
mvn test
```

执行结果截图如下图。

![Maven build](https://cloudappdev.netlify.app/book/img/java_auto_test/Ashampoo_Snap_2019.04.08_18h36m47s_002_UnitTestExample1_mvn_test.png)

图5.1.11 用 Maven 执行单元测试

还可以让 Maven 一条命令执行多个复杂的构建操作：清空 target 文件夹、编译、测试、直到生成项目的一个站点（包含多个报告，如 Javadoc 文档， 单元测试覆盖率等）。

例如我们打开命令行窗口，在“UnitTestExample2”文件夹下，运行命令：

```shell
mvn clean site
```

输出站点的 HTML 起始页是“target/site/index.html”，我们可以双击后用浏览器打开。生成的站点如图。

![UnitTestExample2 site](https://cloudappdev.netlify.app/book/img/java_auto_test/Ashampoo_Snap_2019.04.08_18h51m38s_002_UnitTestExample2_site.png)

图5.1.12 用 Maven 生成项目的静态网页站点

在“Project Reports”中，我们还可以看到 Cobertura 插件生成的单元测试覆盖率的报告。

![UnitTestExample2 cobertura](https://cloudappdev.netlify.app/book/img/java_auto_test/Ashampoo_Snap_2019.04.08_18h52m23s_003_UnitTestExample2_cobertura.png)

图5.1.13 用 Maven 生成项目静态网页站点里的测试覆盖率报告

实际工作中，单元测试是最常见，同时也是最基础的自动化测试场景。学会使用它是非常有价值的。

### [#](https://cloudappdev.netlify.app/book/content.html#_5-2-集成测试)5.2 集成测试

以上仅介绍了最基础的单元测试，更复杂的，用于集成测试方面的自动化测试，还包括：

- 与上下游集成的测试案例。企业级应用一般都是多个子应用程序集成，甚至包括第三方软件或服务 API 的集成，组成一个完整的应用服务。需要模拟这些输入输出的接口，以便测试它们的联动情况。
- 兼容性测试案例。对于 Web 应用，测试多个品牌的浏览器，以及同一个品牌下不同浏览器版本的支持情况；对于移动应用，测试不同操作系统（Android / iOS），不同硬件设备（平板 / 手机），不同版本（特别是 Android 有很多定制版本），不同屏幕大小，不同内存大小，不同处理器速度等情况下的支持情况；或是桌面应用软件，测试多个操作系统，以及同一个操作系统下不同版本、语言环境与数字日期格式的支持情况。
- 网页相关的测试案例。 对于 Web 应用，可以调用 Selenium（网址是 http://docs.seleniumhq.org/）以模拟用户对网页的操作。例如用户登入，输入数据并按提交按钮，校验返回页面的输出，以判定网页相关的测试案例是否执行成功。

由于集成测试的复杂度高，在大企业里，集成测试以及更深入的系统测试（如性能测试）一般由专门的测试团队完成。市场上也对此有商业产品或服务提供支持，有些云平台提供自动化测试服务。例如：

- AWS Device Farm（网址是 https://amazonaws-china.com/cn/device-farm/)。 这是一项应用程序测试服务，让我们可以立即在很多设备上测试 Android、iOS 和 Web 应用程序并与之交互，或者在设备上实时地重现问题。查看视频、屏幕截图、日志和性能数据，以便在推出应用程序前查明和解决问题并提高质量。
- 阿里云测（网址是 http://mqc.aliyun.com/)。 阿里云测移动质量中心（简称 MQC） ，是国内领先的真机移动测试云平台，为广大企业客户和移动开发者提供专业的移动测试解决方案。MQC 致力于打造强大、高效、便捷的综合性移动应用测试平台，全面支持移动领域四大主流平台的测试。

### [#](https://cloudappdev.netlify.app/book/content.html#_5-3-测试驱动开发)5.3 测试驱动开发

测试驱动开发（Test-Driven Development，TDD），是一种不同于传统软件开发流程的新型的开发方法。传统软件开发流程是先开发再测试，而测试驱动开发则要求在编写实现某个功能之前先编写测试案例的代码，然后只编写使测试通过的功能代码（即最小化实现），通过测试来推动整个开发的进行。这有助于编写简洁可用和高质量的代码，并加速开发过程。

测试驱动开发的基本过程如下：

1. 新增一个单元测试案例，从需求角度清晰定义待实现功能的输入参数和预期输出结果。
2. 运行所有的单元测试（有时候只需要运行一个或一部分），发现新增的单元测试不能通过（甚至不能编译）。通常在集成开发环境上测试执行后显示红色，表示不通过。
3. 快速编写实现代码，尽快地让单元测试可运行通过，为此可以在程序中使用一些不合情理的“快捷”实现方法。通常在集成开发环境上测试执行后显示绿色，表示通过。
4. 代码重构（Refactoring）。在所有单元测试全部通过的前提下，优化代码的设计实现。

![test_driven_development_loop](https://cloudappdev.netlify.app/book/img/testing/test_driven_development_loop.png)

图5.3.1 测试驱动开发

简单来说，测试驱动开发就是测试不通过，再测试通过，再重构的开发过程。测试驱动开发的特征是，测试驱动开发中需求分析和详细设计的范畴，都体现在测试案例中，并且这些测试案例已成为单元测试的一个部分。只要测试案例通过，我们就可以放心大胆地修改代码实现，而不会影响调用方的功能。测试案例还兼具文档的作用，在原开发人员离职的情形下，越发能凸显其重要性。

举个比较生动的例子做比喻。盖房子的时候，工人师傅砌墙，会先用桩子拉上线，以使砖能够垒的笔直，因为垒砖的时候都是以这根线为基准的。TDD 就像这样，先写测试代码，就像工人师傅先用桩子拉上线，然后编码的时候以此为基准，只编写符合这个测试的功能代码。

而一个新手小师傅，却可能不知道拉线，而是直接把砖往上垒，垒了一些之后再看是否笔直，这时候可能会用一根线，量一下砌好的墙是否笔直，如果不直再进行校正，敲敲打打。使用传统的软件开发过程就像这样，我们先编码，编码完成之后才写测试程序，以此检验已写的代码是否正确，如果有错误再一点点修改。