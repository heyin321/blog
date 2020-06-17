# 菜鸟级

## 调用方法，返回值

“好的，我们来尝试另一种方式。我将向你展示如何调用方法，然后你尝试复习一下上一节课的内容，好吗？”

“咱们开始吧。”

“好的。我将介绍有关调用函数/方法以及它们返回的值（返回值）的内容。”

“命令（或语句）被分组为方法，因此它们可以像单个复杂命令一样作为单个块执行。要完成此操作，你需要编写方法（函数）名称，然后在括号内列出该方法的参数。”

示例



```java
package com.codegym.lesson2;
public class MethodCall
{
    public static void main(String[] args)
    {
         print4("我喜欢移动它，移动它。");
    }

    public static void print4(String s)
    {
        System.out.println(s);
        System.out.println(s);
        System.out.println(s);
        System.out.println(s);
    }
}
```

“在上面的示例中，我们编写了一个函数，该函数将在屏幕上将传递的字符串显示四次。然后，我们在第 6 行调用了 `print4` 函数。”

“当程序到达第 6 行时，它将跳到第 9 行，并将值`‘我喜欢移动它，移动它’`赋给变量 s。”

“接下来将执行 11-14 行。函数完成，程序将重新回到第 7 行开始执行。”

“我明白了。”

“不仅可以将参数（值）传递给函数，函数还可以返回其工作结果（返回值）。这是通过关键字 return 完成的。它的代码是这样的：“

| 代码示例 1。 确定两个数字中的最小值。`public class MethodCall {   public static void main(String[] args)   {      int a = 5, b = 7;      int m = min(a, b);      System.out.println("最小值为 "+ m);   }    public static int min(int c, int d)   {      int m2;      if (c < d)           m2 = c;      else           m2 = d;       **return m2;**   } }` | 下面是此代码的工作方式：`public class MethodCall {   public static void main(String[] args)   {      int a = 5, b = 7;      int c = a, d = b;      int m2;      if (c < d)           m2 = c;      else           m2 = d;       int m = m2;      System.out.println("最小值为 "+ m);   } }` |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |

“我觉得我能理解了！左列和右列中的代码实际上是相同的。只是左侧的代码具有独立的函数。”

“函数计算出某个值，然后使用 return 语句将该值传递给调用它的任何函数。至少，我看到的就是这样。”

“你说的很对！”

“但是这里的 void 类型是什么呢？”

“有些函数只是执行操作，但不计算和返回任何值，例如我们的 **main()** 方法。特殊的 return 类型 **void** 就是针对此类功能而创建的。”

“如果函数不返回任何内容，为什么不声明无内容呢？”

“还记得我们如何声明变量吗？类型和名称。对于函数，我们声明类型、名称和括号。函数名称后跟括号是你调用函数的方式。”

“因此，发明一个‘void 类型’比将函数分为两个类别（返回值的类别和不返回值的类别）更容易？”

“的确如此。你真是一个聪明的孩子。”

“我们如何返回 void 类型呢？”

“我们不需要返回。它的工作原理如下。当执行 return 语句时，Java 机器会计算单词‘return’右侧的表达式的值，将此值存储在内存的特殊部分，**然后立即结束函数**。在调用函数的位置使用存储的值，作为函数调用的结果。你可以在我前面给出的示例中看到这一点。”

“你是指将 int m = min(a,b) 转换为 m = m2 的部分？”

“是的。函数完成后，一切都像将该函数的返回值写入其位置一样。在你的大脑中重复此短语，并查看上一示例中的代码。”

“我认为这只是看起来容易。实际上很难。我只理解了其中的一部分内容。”

“没关系。第一次尝试时，你只能理解已经知道的内容。你不了解的事物越多，你对新事物的投入就会越深，你的收获也就越大。时间可以更好地检验这一点。”

“嗯，既然你这么说的话，让我们继续吧。”

## 类的全名

“嗨，阿米戈。我想给你介绍一下类的全名。”

“你已经知道，类存储在包中。因此，类的全名由所有包的名称（由句点分隔）和类名组成。**下面是一些示例**：”

| 类名              | 包名      | 全名                        |
| ----------------- | --------- | --------------------------- |
| `String`          | java.lang | java.lang.**String**        |
| `FileInputStream` | java.io   | java.io.**FileInputStream** |
| `ArrayList`       | java.util | java.util.**ArrayList**     |
| `IOException`     | java.io   | java.io.**IOException**;    |

“要在代码中使用类，你需要指出类的全名。你也可以使用类的短名称，即只使用类名，但你需要‘导入类’。这意味着在声明类之前，你要指出单词 **import**，后跟要导入的类的名称。java.lang 包中的类是默认导入的，因此你无需导入它们。下面是一个示例：”

类的全名：



```java
package com.codegym.lesson2;

public class FileCopy2
{
    public static void main(String[] args) throws java.io.IOException
    {
        java.io.FileInputStream fileInputStream =
                        新的 java.io.FileInputStream("c:\\data.txt");
        java.io.FileOutputStream fileOutputStream =
                        新的 java.io.FileOutputStream("c:\\result.txt");

        while (fileInputStream.available() > 0)
        {
            int data = fileInputStream.read();
            fileOutputStream.write(data);
        }

        fileInputStream.close();
        fileOutputStream.close();
    }
}
```

“下面是使用短名称的示例：”

类的短名称：



```java
package com.codegym.lesson2;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class FileCopy
{
    public static void main(String[] args) throws IOException
    {
        FileInputStream fileInputStream =
                        新的 FileInputStream("c:\\data.txt");
        FileOutputStream fileOutputStream =
                        新的 FileOutputStream("c:\\result.txt");

        while (fileInputStream.available() > 0)
        {
            int data = fileInputStream.read();
            fileOutputStream.write(data);
        }

        fileInputStream.close();
        fileOutputStream.close();
    }
}
```

“明白了。”



