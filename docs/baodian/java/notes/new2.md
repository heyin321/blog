# 入门级

## 串联 (concatenation)

“我想告诉你如何合并字符串。合并或连接字符串的过程通常使用简短的词语‘串联’来表示。喜欢猫的人这样记会很容易：con-Cat-en-Nation。**开个玩笑。**。”

“合并字符串的规则很简单。如果我们将字符串和其他内容‘相加’(+)，则‘其他内容’将通过 toString() 方法隐式地转换为字符串。

“你现在是在跟我说话吗？”

“好吧，我将以更简单的方式进行解释。如果我们将字符串、数字和猫相加，那么数字和猫都会被转换为字符串。下面是一些示例：”

| 代码                                                         | 等效代码                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `Cat cat = new Cat(); String text = "猫是 " + cat;`          | `Cat cat = new Cat();` `String s = cat.toString();` `String text = "猫是 " + s;` |
| `int a = 5; String text = "a 是 " + a;`                      | `int a = 5;` `String s = Integer.toString(a);` `String text = "a 是 " + s;` |
| `int a = 5; String text = a + "a 是 ";`                      | `int a = 5;` `String s = Integer.toString(a);` `String text = s + "a 是 ";` |
| `Cat cat = new Cat(); int a = 5; String text = "猫是 " + cat + a;` | `Cat cat = new Cat();` `String s1 = cat.toString();` `String s2 = Integer.toString(a);` `String text = "猫是 " + s1 + s2;` |
| `Cat cat = new Cat(); int a = 5; String text = a + "猫是 " + cat + a;` | `Cat cat = new Cat();` `String s1 = cat.toString();` `String s2 = Integer.toString(a);` `String s3 = Integer.toString(a);` `String text = s3 + "猫是 " + s1 + s2;` |
| `Cat cat = new Cat(); int a = 5; String text = cat + a + "猫是 " + cat + a;` | *该程序将无法编译！* 相加操作从左到右执行，因此我们将得到： `String text = (((cat + a) + "猫是 ") + cat) + a;` *如果我们将猫和数字相加，则不会自动执行字符串转换。* |
| `// 但是你可以这样做： Cat cat = new Cat(); int a = 5; String text = cat + (a + "猫是 ") + cat + a; // 这与以下代码相同： Cat cat = new Cat(); int a = 5; String text = ((cat + (a + "猫是 ")) + cat)+a;` | `Cat cat = new Cat();` `String s1 = cat.toString();` `String s2 = cat.toString();` `String s3 = Integer.toString(a);` `String s4 = Integer.toString(a);` `String text = s1 + s3 + "猫是 " + s2 + s4;` |

## 键盘输入

“阿米戈，该你了。我现在要给你讲述有关键盘输入的内容。”

“我们已经使用 **System.out** 在屏幕上显示数据。为了接收输入内容，我们将使用 **System.in**。”

“听起来很容易。”

“但是 **System.in** 有一个缺点 – 它只允许我们从键盘读取字符代码。为了解决这个问题，能够一次性读取大块数据，我们将使用更复杂的结构：”

示例 1
从键盘输入字符串和数字



```java
InputStream inputStream = System.in;
Reader inputStreamReader = new InputStreamReader(inputStream);
BufferedReader bufferedReader = new BufferedReader(inputStreamReader);

String name = bufferedReader.readLine(); //从键盘读取字符串
String sAge = bufferedReader.readLine(); //从键盘读取字符串
int nAge = Integer.parseInt(sAge); //将字符串转换为数字。
```

示例 2
上一个示例的精简版本：



```java
BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

String name = reader.readLine();
String sAge = reader.readLine();
int nAge = Integer.parseInt(sAge);
```

示例 3
更为精简



```java
Scanner scanner = new Scanner(System.in);
String name = scanner.nextLine();
int age = scanner.nextInt();
```

“有任何问题吗？”

“嗯...我完全不明白。”

“要从键盘读取字符串，最方便的方法是使用 **BufferedReader** 对象。但是要做到这一点，你必须传入要从中读取数据的对象。在本例中，即为 **System.in**。”

“但是 **System.in** 与 **BufferedReader** 不兼容，因此我们使用另一个适配器 – 另一个 **InputStreamReader** 对象。”

“我想我现在明白了。这个 [Scanner 类](https://codegym.cc/groups/posts/5-scanner-class)是什么呢？”

“Scanner 可能很方便，但不是很有用。事实上，当你继续学习和工作时，你会经常使用 BufferedReader 和 InputStreamReader，而极少用到 Scanner。它在我们的示例中很方便，但将来不会经常有用。因此，我们不会经常使用它。”

“似乎清楚了，但是我不确定我是否已明白了全部内容。”

## Scanner 类

Scanner class Hi! Our lesson today will be special!  Previously, the process of completing tasks and writing programs was simple: we write some code, run the `main()` method, the program does what is required, and we're done.  But now everything will change! Today we'll learn how to really interact with the program: we'll teach it how to respond to our actions!  Before we start analyzing the code, have you ever had to deal with a device like a scanner?

### Java's Scanner class

First and foremost, we must get acquainted with the `java.util.Scanner` class.  Its functionality is very simple. Like a real scanner, it reads data from a source that you specify. For example, a string, a file, the console. Next, it recognizes the information and processes it appropriately.  Here's the simplest example:

```java
public class Main {

   public static void main(String[] args) {

       Scanner scanner = new Scanner("It matters not how strait the gate,\n" +
               "How charged with punishments the scroll,\n" +
               "I am the master of my fate,\n" +
               "I am the captain of my soul");
       String s = scanner.nextLine();
       System.out.println(s);
   }
}
```

We've created a scanner object, and specified its data source (a string of text).  The `nextLine()` method accesses the data source (our text with a quatrain), finds the next unread line (which is the first line in this case), and returns it. Then we display it on the console:  Console output:

```undefined
It matters not how strait the gate,
```

We can use the `nextLine()` method several times and display the entire poem excerpt:

```java
public class Main {

   public static void main(String[] args) {

       Scanner scanner = new Scanner("It matters not how strait the gate,\n" +
               "How charged with punishments the scroll,\n" +
               "I am the master of my fate,\n" +
               "I am the captain of my soul");
       String s = scanner.nextLine();
       System.out.println(s);
       s = scanner.nextLine();
       System.out.println(s);
       s = scanner.nextLine();
       System.out.println(s);
       s = scanner.nextLine();
       System.out.println(s);
   }
}
```

Each time, our scanner takes one step forward and reads the next line.  The program's output is displayed: 

```undefined
It matters not how strait the gate,
How charged with punishments the scroll,
I am the master of my fate,
I am the captain of my soul
```

As we've already said, the scanner's data source doesn't have to be a string.  For example, it could be the console. Some exciting news for you: previously, we just displayed data there, but now we'll read data from the keyboard!  Let's see what else the `Scanner` class does:

```java
public class Main {

   public static void main(String[] args) {

       Scanner sc = new Scanner(System.in);
       System.out.println("Enter a number:");

       int number = sc.nextInt();

       System.out.println("Thanks! You entered the number " + number);

   }
}
```

The `nextInt()` method reads and returns the entered number. In our program, we use it to assign a value to the variable `number`.  It's already more like a real scanner! The program asks the user to enter any number. After the user has done this, the program thanks the user, displays the result, and finishes.  But we still have a serious problem. The user might make a mistake and enter something wrong.  Here is an example where our current program stops working:

```java
public class Main {

   public static void main(String[] args) {

       Scanner sc = new Scanner(System.in);
       System.out.println("Enter a number:");

       int number = sc.nextInt();

       System.out.println("Thanks! You entered the number " + number);

   }
}
```

Let's try entering the string "CodeGym" instead a number:  Console output: 

```undefined
Enter a number:
CodeGym
Exception in thread "main" java.util.InputMismatchException
at java.util.Scanner.throwFor(Scanner.java:864)
at java.util.Scanner.next(Scanner.java:1485)
at java.util.Scanner.nextInt(Scanner.java:2117)
at java.util.Scanner.nextInt(Scanner.java:2076)
at Main.main(Main.java:10) Process finished with exit code 1
```

Uh, oh. We're in big trouble -_-  To avoid such situations, we need to come up with a way to verify the data entered by the user. For example, if the user enters anything other than a number, it would be good to display a warning that the entered information is not a number. And if the information is okay, then we could confirmation.  But this would require us to "look into the future" to see what's coming in our stream. Can `Scanner` do this?  And how! And it has a slew of methods for doing this:  `hasNextInt()` — This method checks whether the next chunk of input data is a number (returns true or false, as appropriate).  `hasNextLine()` — This method checks whether the next chunk of input is a string.  `hasNextByte()`, `hasNextShort()`, `hasNextLong()`, `hasNextFloat()`, `hasNextDouble()` — All these methods perform similar checks for the remaining data types.  Let's try changing our number-reading program:

```java
public class Main {

   public static void main(String[] args) {

       Scanner sc = new Scanner(System.in);
       System.out.println("Enter a number:");

       if (sc.hasNextInt()) {
           int number = sc.nextInt();
           System.out.println("Thanks! You entered the number " + number);
       } else {
           System.out.println("Sorry, but this is clearly not a number. Restart the program and try again!");
       }

   }
}
```

Now our program checks whether the next character entered is a number. And it displays confirmation only if it is. If the input doesn't pass the check, the program takes note and asks the user to try again.  Basically, you can communicate with the `Scanner` object and find out in advance what data type awaits you. A number, string, or something else? A number? And what kind? An `int`, `short`, `long`?"  This flexibility gives you the opportunity to build program logic that depends on the user's behavior. We should make note of another important method: `useDelimiter()`. You pass a string to this method.

Even if three different verses are passed to us as one awkward string, we can easily split them and render them beautifully:

```java
public class Main {

    public static void main(String[] args) {

        Scanner scan = new Scanner("On a withered branch\n" +
                "A crow has alighted.\n" +
                "Nightfall in autumn.\n\n***" +
                " \n" +
                " \n" +
                "Such a moon above,\n" +
                "Like a tree cut at the root:\n" +
                "The fresh cut is white.\n\n***" +
                " \n" +
                " \n" +
                "How the river floods!\n" +
                "A heron wanders on short legs,\n" +
                "Knee-deep in the water.");

        scan.useDelimiter("\n/*/*/*");

        while (scan.hasNext()) {
            System.out.println(scan.nextLine());
        }

        scan.close();
    }
}
```

We use "\n/*/*/*" (new line character and three asterisks) as our delimiter.  As a result, we have beautiful console output, just like in books: 

```undefined
On a withered branch
A crow has alighted.
Nightfall in autumn.

***

Such a moon above,
Like a tree cut at the root:
The fresh cut is white.

***

How the river floods!
A heron wanders on short legs,
Knee-deep in the water.
```

This example has one more method that we must absolutely point out: `close()`. Like any object working with I/O streams, the scanner must be closed when it is done so it stops consuming the computer's resources. Never forget the `close()` method!

```java
public class Main {

   public static void main(String[] args) {

       Scanner sc = new Scanner(System.in);
       System.out.println("Enter a number:");

       int number = sc.nextInt();

       System.out.println("Thanks! You entered the number " + number);

       sc.close(); // Now we've done everything right!

   }
}
```

## 转义字符

Hi!  In previous lessons, we've already gotten acquainted with text strings, which are represented by the `String` class in Java.

As you probably remember, a string is a sequence of characters. These characters can be any letters, numerals, punctuation marks and so on. The main thing when creating a string is that the entire sequence must be enclosed in quotation marks:

```java
public class Main {
   public static void main(String[] args) {
       String alex = new String ("My name is Alex. I'm 20!");
   }
}
```

But what do we do if we need to create a string that itself must contain quotation marks? For example, suppose we want to tell the world about your favorite book:

```java
public class Main {
   public static void main(String[] args) {
       String myFavoriteBook = new String ("My favorite book is "Twilight" by Stephanie Meyer");
   }
}
```

It seems the compiler is unhappy about something! What do you think the problem could be? And what does it have to do with quotation marks?  In fact, it's all very simple. The compiler interprets quotation marks in a very specific way, i.e. it expects strings to be wrapped in them. And every time the compiler sees ", it expects that the quotation mark will be followed by a second quotation mark, and that the content between them is the text of a string to be created by the compiler. In our case, the quotation marks around the word "Twilight" are **inside other quotation marks**. When the compiler reaches this piece of text, it simply doesn't understand what it is expected to do. The quotation mark suggests that a string must be created. But that's what the compiler is *already* doing!  Here's why: simply speaking, the compiler gets confused about what it is expected to do.   *"Another quotation mark? Is this some kind of mistake? I'm already creating a string! Or should I create another one? Argh!...:/"* We need to let the compiler know when a quotation mark is a command ("create a string!") and when it is simply a character ("display the word "Twilight" along with quotation marks!"). To do this, Java uses **character escaping**. This is accomplished using a special symbol: `\`. This symbol is normally called "backslash". In Java, a backslash combined with a character to be "escaped" is called **a control sequence**. For example, `\"` is a control sequence for displaying quotation marks on the screen. Upon encountering this construct in your code, the compiler will understand that this is just a quotation mark that should be displayed on the screen. Let's try changing our code with the book:

```java
public static void main(String[] args) {
       String myFavoriteBook = new String ("My favorite book is \"Twilight\" by Stephanie Meyer");
       System.out.println(myFavoriteBook);
   }
}
```

We've used `\` to escape our two "internal" quotation marks. Let's try running the `main()` method... Console output: ***My favorite book is "Twilight" by Stephanie Meyer\*** Excellent! The code worked exactly how we wanted it to! Quotation marks are by no means the only characters we may need to escape. Suppose we want to tell someone about our work: 

```java
public class Main {
   public static void main(String[] args) {
       String workFiles= new String ("My work files are in D:\Work Projects\java");
       System.out.println(workFiles);
   }
}
```

Another error! Can you guess why? Once again, the compiler doesn't understand what to do. After all, the compiler doesn't know `\` as anything other than **a control sequence**! It expects the backslash to be followed by a certain character that it must somehow interpret in a special way (such as a quotation mark).  But, in this case, `\` is followed by ordinary letters. So the compiler is confused again. What should we do? Exactly the same thing as before: we just add another `\` to our `\`!

```java
public class Main {

   public static void main(String[] args) {

       String workFiles= new String ("My work files are in D:\\Work Projects\\java");
       System.out.println(workFiles);

   }
}
```

Let's see what we get: Console output: ***My work files are in D:\Work Projects\java\*** Super! The compiler immediately determines that the `\` are ordinary characters that should be displayed along with the rest. Java has quite a lot of control sequences. Here's the full list:

- `\t` - tab.
- `\b` - backspace (a step backward in the text or deletion of a single character).
- `\n` - new line.
- `\r` - carriage return. ()
- `\f` - form feed.
- `\'` single quote.
- `\"` double quote.
- `\\` backslash.

Thus, if the compiler encounters `\n` in the text, it understands that this is not just a symbol and a letter to display on the console, but rather a special command to "move to a new line!". For example, this may be useful if we want to display part of a poem:

```java
public class Main {
   public static void main(String[] args) {
       String byron = new String ("She walks in beauty, like the night, \nOf cloudless climes and starry skies\nAnd all that's best of dark and bright\nMeet in her aspect and her eyes...");
       System.out.println(byron);
   }
}
```

Here's what we get: Console output: *She walks in beauty, like the night,  Of cloudless climes and starry skies  And all that's best of dark and bright  Meet in her aspect and her eyes...* Just what we wanted! The compiler recognized the escape sequence and output an excerpt of the poem on 4 lines.

## 变量作用域的详细介绍

“教授很容易墨守成规。习惯于讲课的老教师总是如此。他只能给你讲授书本上的东西。你不会通过听游泳课来学习如何游泳。只有当你熟悉主题并且知道的几乎跟教授一样多时，讲座才有用。”

“不过，他的课还是有用的。”

“是的。我是说，但愿如此。你所听到的有关主题的观点越多，你就越接近真相。如果只听到一种观点，你所能做的只是相信它或不相信它。好吧，让我们言归正传。”

“现在来一张我以前给你看过的照片。”

```java
┏
┃public class Variables
┃┏
┃┏
┃┃   private static void String TEXT = "结束。";
┃┃  ┗━━━━━━━━━━━━━━━━━━━┛
┃┃   public static void main (String[] args)
┃┃ ┏                         ┗━━━━━━━┛
┃┃ ┃ {
┃┃ ┃    System.out.println("你好");
┃┃ ┃    String s = "你好！";
┃┃ ┃  ┏┗━━━━┛
┃┃ ┃  ┃ System.out.println(s);
┃┃ ┃  ┃ if (args != NULL)
┃┃ ┃  ┃ {
┃┃ ┃  ┃    String s2 = s;
┃┃ ┃  ┃   ┗━━━━┛
┃┃ ┃  ┃  ┏
┃┃ ┃  ┃  ┃ System.out.println(s2);
┃┃ ┃  ┃  ┗
┃┃ ┃  ┃ }
┃┃ ┃  ┃ Variables variables = new Variables();
┃┃ ┃  ┃ System.out.println(variables.instanceVariable);
┃┃ ┃  ┃ System.out.println(TEXT);
┃┃ ┃  ┗
┃┃ ┃ }
┃┃ ┗
┃┃   public String instanceVariable;
┃┃  ┗━━━━━━━━━━━━━━━┛
┃┃   public Variables()
┃┃   {
┃┃      instanceVariable = "实例变量测试。";
┃┃   }
┃┃}
┃┗
┗
```

1.在方法中声明的变量从其声明开始到方法结束一直存在（可见）。

2.在代码块中声明的变量在代码块结束之前一直存在。

3.方法的参数在方法返回前一直存在。

4.对象中的变量在包含它们的对象的整个生命周期中都存在。它们的可见性也可以由特殊访问修饰符控制。

5.static（类）变量在程序运行的整个过程中都存在。它们的可见性也可以由访问修饰符定义。”

"是的。我记得这张照片。”

“好的。我来提醒你一些要点。”

“在方法内声明的所有变量从声明开始到方法结束一直存在（可见）（示例1）。”

“如果变量是在代码块中声明的，则它在代码块结束之前一直存在（示例 2）。”

“如果变量是方法参数，则它在方法的整个主体中都存在（可见）（示例3）。”

“如果变量是实例变量（示例4），则它链接到某个对象，并且在对象存在期间一直存在。**如果没有对象，则该变量没有任何实例。**可以从类的所有方法中访问变量（即变量可见），无论这些方法是在该变量之前还是之后声明的。将为每个对象创建一个新变量。该变量独立于其他对象。不能从 static 方法访问实例变量。”

“如果变量被声明为 static，即标记有关键字 **static**，则它在类存在期间一直存在。JVM 通常在首次使用类时将其加载到内存中。static 变量也是在此时进行初始化的。”

[![变量作用域的详细介绍 - 1](https://codegym.cc/images/article/237d3615-a622-48c3-a882-e759d077ac92/original.jpeg?size=0)](https://codegym.cc/images/article/237d3615-a622-48c3-a882-e759d077ac92/original.jpeg)

“上述示例声明了 Cat 类，该类包含四个变量：a、b、s（非 static 变量）和 count（static 变量）。如果我们为此类创建几个对象（例如，三个），则对于此类的非 static 变量，每个对象都将包含自己的实例。static 变量由类的所有对象共享。从技术上讲，它甚至不在这些对象之内，因为它甚至在创建任何 Cat 对象之前既已存在。”

“如果我们声明变量 `s` static，则会发生以下情况：”

[![变量作用域的详细介绍 - 2](https://codegym.cc/images/article/2434d002-accd-4eea-8eac-38d9a2f0367e/original.jpeg?size=0)](https://codegym.cc/images/article/2434d002-accd-4eea-8eac-38d9a2f0367e/original.jpeg)

“好的。我想我明白了。”

“你可以使用相同的名称来声明变量吗？”

“在方法内不可以。方法内声明的所有变量都必须具有唯一的名称。方法的参数也被视为局部变量。”

“成员变量如何呢？”

“成员变量对于每个类也必须是唯一的。”

“但是有一个例外：局部变量和成员变量的名称可以相同。&#34

“如果我们更改这样一个变量，那么名称相同的两个变量中的哪一个会被更改呢？”

“如果代码中有多个可见（可访问）变量（例如，实例变量和局部变量），则将访问局部变量。”

包含两个 count 变量的示例



```java
class Main
{
    public int count = 0;     // 声明实例变量

    public void run()
    {
        count = 15;           // 访问实例变量
        int count = 10;       // 声明局部方法变量
        count++;             // 访问方法变量
    }
}
```

“此代码声明了两个 count 变量。第 3 行声明了一个实例变量，第 8 行声明了一个局部变量。”

“执行 run 方法时会发生以下情况：”

“在第 7 行，我们访问实例变量并为其赋值 15”

“在第 8 行，我们声明（创建）一个新的局部变量：`count`。它遮罩了实例变量。方法中的所有后续代码都将看到（访问）该局部变量。”

“明白了。”

“局部变量将遮罩实例变量。换言之，局部变量是要访问的变量。但是，你也可以访问实例变量。只是这样做有点复杂。”

| static（类）变量`ClassName.variableName *// 下面是一些示例：* Cat.catsCount` | 非 static（实例）变量`this.variableName *// 下面是一些示例：* this.catsCount` |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |

“关于 static 方法和 static 变量，你还有什么要讲的吗？”

“static 方法和变量不链接到类的对象；它们链接到类本身。如果我们创建十个 **Variables** 对象（请参见本级别开头的示例），我们将有十个 instanceVariable 变量（每个对象一个），并且仅有一个共享的 (static) 变量 **TEXT**。”

“我有一个问题。”

“static 方法和非 static 方法有什么区别？"

“我们来看一下非 static 方法的工作原理：”

| 代码看起来如下所示`Cat cat = new Cat(); String name = cat.getName(); cat.setAge(17); cat.setChildren(cat1, cat2, cat3);` | 实际发生的情况如下`Cat cat = new Cat(); String name = Cat.getName(cat); Cat.setAge(cat,17); Cat.setChildren(cat, cat1, cat2, cat3);` |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |

“使用 **<对象>** 点 <方法名称> 调用方法时，实际上是在调用类方法，并将**该对象**作为第一个参数进行传递。在方法内，对象称为**‘this’**。方法中的所有操作都是针对此对象及其数据执行的。”

“哇！那么这就是它的工作原理了！”

“这就是 static 方法的工作原理。”

| 代码看起来如下所示`Cat cat1 = new Cat(); Cat cat2 = new Cat(); int catCount = Cat**.getAllCatsCount**();` | 实际发生的情况如下`Cat cat1 = new Cat(); Cat cat2 = new Cat(); int catCount = Cat**.getAllCatsCount**(**null**);` |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |

“在调用 static 方法时，不会向它传递任何对象。换言之，‘this’等于 null。这就是 static 方法无法访问非 static 变量和方法的原因（因为它没有‘this’传递给这些方法）。”

“嗯。我想我明白了。至少明白一点了。”

“迭戈叔叔来了... 带着他的任务。”

## 命令和代码块

"我来给你介绍命令（语句）和代码块。真的非常简单。方法主体由命令或语句组成。每条命令都以分号结尾。”

|      | 命令示例：                      |
| ---- | ------------------------------- |
| 1    | `String s = "名字";`            |
| 2    | `System.out.println(1234);`     |
| 3    | `return a + b * c;`             |
| 4    | `throw new RuntimeException();` |
| 5    | `;`                             |

“代码块由几条使用花括号组合在一起的命令组成。方法主体是代码块。”

|      | 示例：                                                       |
| ---- | ------------------------------------------------------------ |
| 1    | `{}`                                                         |
| 2    | `{    throw new RuntimeException(); }`                       |
| 3    | `{    return null; }`                                        |
| 4    | `{    System.out.println(23);    System.out.println(1);    System.out.println(14); }` |

“以下规则几乎适用于所有情况：只要可以编写一条命令的地方，都可以编写一个代码块。我们将在后续任务中看到这种示例。”