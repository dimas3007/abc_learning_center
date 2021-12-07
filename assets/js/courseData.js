const dataCourse = [
  {
    id: 1,
    title: 'Programming in Java',
    img: '../assets/img/programming/java.webp',
    description:
      'Java Programming Course for Beginners to Java Object Oriented Programming, Leran java programming writing 200+ java programs, puzzle & exercisse. recommend for absolute beginners to Java and Programming! ',
    star: 500,
    level: 'Begginer',
    price: 'IDR 500.000',
    courseOverview: [
      'Java is one of the most popular programming languages. Java offers both object-oriented and functional programming features. ',
      'We take a hands-on approach using a combination of JShell and Eclipse as an IDE to illustrate more than 200 Java Coding Exercises, Puzzles, and Code Examples. This course assumes no previous ( beginner ) programming or Java experience. If you’ve never programmed a computer before, or if you already have experience with another programming language and want to quickly learn Java, this is a perfect course for you. ',
      'In more than 250 Steps, we explore the most important Java Programming Language Features ',
    ],
    courseFor: [
      'You have ZERO programming experience and want to learn Java Programming ',
      'You are a Beginner at Java Programming and want to Learn to write Great Java Programs ',
      'You want to learn the Basics of Object Oriented Programming with Java ',
      'You want to learn the Basics of Functional Programming with Java ',
    ],
    schedule: [
      {
        module:
          'Basics of Java Programming - Expressions, Variables, and Printing Output ',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module:
          'Java Operators - Java Assignment Operator, Relational and Logical Operators, Short Circuit Operators',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module: 'Java Conditionals and If Statement',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module: 'Methods - Parameters, Arguments, and Return Values',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module:
          'Object-Oriented Programming - Class, Object, State, and Behavior',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module:
          'Basics of OOPS - Encapsulation, Abstraction, Inheritance, and Polymorphism',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module: 'Basics about Java Data Types - Casting, Operators, and More',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module:
          'Java Built-in Classes - BigDecimal, String, Java Wrapper Classes',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module:
          'Conditionals with Java - If Else Statement, Nested If Else, Java Switch Statement, Java Ternary Operator',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module:
          'Loops - For Loop, While Loop in Java, Do While Loop, Break and Continue',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module: 'Immutability of Java Wrapper Classes, String and BigDecimal',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module:
          'Java Dates - Introduction to LocalDate, LocalTime and LocalDateTime',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module:
          'Java Array and ArrayList - Java String Arrays, Arrays of Objects, Primitive Data Types, toString and Exceptions',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module: 'Introduction to Variable Arguments',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module:
          'Basics of Designing a Class - Class, Object, State and Behavior. Deciding State and Constructors.',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module: 'Understanding Object Composition and Inheritance',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module:
          'Java Abstract Class and Interfaces. Introduction to Polymorphism.',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module:
          'Java Collections - List Interface(ArrayList, LinkedList and Vector), Set Interface (HashSet, LinkedHashSet and TreeSet), Queue Interface (PriorityQueue) and Map Interface (HashMap, HashTable, LinkedHashMap and TreeMap() - Compare, Contrast and Choose',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module:
          'Generics - Why do we need Generics? Restrictions with extends and Generic Methods, WildCards - Upper Bound and Lower Bound.',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module:
          'Functional Programming - Lambda Expression, Stream and Operations on a Stream (Intermediate Operations - Sort, Distinct, Filter, Map and Terminal Operations - max, min, collect to List), Functional Interfaces - Predicate Interface, Consumer Interface, Function Interface for Mapping, Method References - static and instance methods',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module: 'Introduction to Threads and MultiThreading - Need for Threads',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module:
          'Implementing Threads - Extending Thread Class and Implementing Runnable Interface',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module: 'States of a Thread and Communication between Threads',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module:
          'Introduction to Executor Service - Customizing the number of Active Threads. Returning a Future, invokeAll, and invokeAny',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module:
          'Introduction to Exception Handling - Your Thought Process during Exception Handling. try, catch, and finally. Exception Hierarchy - Checked Exceptions vs Unchecked Exceptions. Throwing an Exception. Creating and Throwing a Custom Exception - CurrenciesDoNotMatchException. Try with Resources - New Feature in Java 7.',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module:
          'List files and folders in Directory with Files list method, File walk method and find methods. Read and write from a File.',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
    ],
  },
  {
    id: 2,
    title: 'Basic of HTML5',
    img: '../assets/img/programming/html5.jpg',
    description:
      'This course provides resources that will present Hypertext Markup Language (HTML) to novices who want to learn how to create Web pages using HTML. ',
    star: 500,
    level: 'Begginer',
    price: 'IDR 300.000',
    courseOverview: [
      'This course provides resources that will present Hypertext Markup Language (HTML) to novices who want to learn how to create Web pages using HTML. ',
      `This course will also cover the fundamental tags and elements that can be used to construct a Web page, as well as introduce Cascading Style Sheets (CSS), which can be used to apply styles to HTML elements to make Web pages more appealing and interactive.
      In addition, this course will cover how to use tables and frames to create data structures in Web sites, as well as how to develop dynamic Web pages with JavaScript and HTML form components.
      There will also be a discussion of canvas components and an introduction to jQuery for the purposes of creating visual effects on Web pages. `,
      'Teaching participants in this course are provided with slides and source code to make it easier for them to study and practice the material they are being taught. ',
      'Instructors in this course will lead instructing participants through questions and answers in the comments column, as well as provide feedback for each assignment and exercise used as evaluation material. ',
    ],
    courseFor: ['Anyone interested in learning more about HTML5 '],
    schedule: [
      {
        module: 'Introduce HTML Tag',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module: 'Introduce Style in HTML5',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module: 'Transition, Animation, Transformation',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module: 'Data Tables in HTML 5',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module: 'Introduce Javascript',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module: 'Dynamic Web',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module: 'Canvas in HTML5',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module: 'JQUERY in HTML5',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
      {
        module: 'Whats Next',
        time: '1:00 - 2:00',
        mentor: 'Dimas Setiaji',
      },
    ],
  },
];
