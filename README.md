# ReactJSResumeWithPDF

### 使用ReactJS制作简历，并导出成PDF格式

## 为什么使用React制作简历？
简历的制作，有几点特点：
* 内容为王。简历不是一个比拼谁做的更漂亮、更好看的战场，简历所传达的信息、简历背后的人，才是最关键的。
* 信息密度大。简历当中蕴含着一个人职业生涯的浓缩信息，如同国家的编年史，寥寥数语，每一句都很关键，需要保证被看清楚。
* 需要“一点点的设计”。很多人对设计有误解，以为设计就是为了漂亮，实则不然。设计是围绕着人脑的特点，改进阅读的体验。既不让人错过重要的信息，又能突出重点。
* 需要更新。每过一段时间，我们就会积累新的职场经验，这是我们的财富，但对于简历而言，常意味着编辑好的格式被破坏了。
* 可能需要多个版本。我的一些朋友会针对不同工作岗位制作不同针对性的简历。这让我第一时间想到git的“branch”功能。

针对以上的特点，我们可以看看主流的制作简历的工具各有哪些优缺点：

* Word  
作为最好的文字编辑工具，word的功能其实非常适合制作简历。尤其是用word制作简历的时候，我们会觉得专注在文字内容上，非常爽。
word的问题主要出在“一点点的设计”上面。要做到这一点点的设计，在word当中非常困难，需要使用表格等方法来“曲线救国”。
而表格在调整格式的时候是很麻烦的。（此处可插入图片来说明）

* 简历设计网站  
比如fotor、创客贴等。他们也有很多的优点，这里不赘述了。但在网页上操作，其实体验不是很好。拖拽、调整的时候，都有很明显的延迟。
本质上，这些网站所提供的，是一个在线版、有素材库的PPT。你很难说它们像photoshop，因为PS当中重要的图层、蒙版等功能，它们都没有。
那么既然这样，直接PPT好不好呢？

* Powerpoint
我认为PPT是最适合做简历的工具之一。编辑格式很方便，甚至有“磁吸”。
当然，它也有两个小缺点。首先是PPT的横版体验很好，但竖版体验比较一般。在PPT的模板库中，也只有寥寥几个竖版的简历模板。
这个问题可以说是由于PPT的“简历生态”不发达所致。
其次，当出现“跨页”的时候，编辑起来还是很麻烦的。
最后，对于“概念组合”的格式套用，还是存在一定的麻烦。举个例子：【职位经历】当中包含[项目经验]的对应信息。因为我们一些行业以项目为主，而项目，一般是在
这个功能，就比较接近于编程当中的“面向对象”。为什么我们需要“class”？就是因为可以少写很多重复的代码，也少动很多重复的脑筋。
而这种“格式”套用，我们似曾相识：是的，html&CSS就是用来干这个的。
而我们还有一个更为强大的UI库：React，处理这种问题更加方便。

* React
React的component概念特别适合我们上述的结构。
在这个工程里，所有的信息都存在json文件里。后续会考虑把信息放在yaml里面

#导出PDF的方案
目前导出pdf的方式很多。最为常用的是两种：
* html2canvas
* chrome
其中html2canvas非常成熟，也很方便，甚至可以做到简历本身的网页上，一个按钮就导出成功了。但它有两个很大的缺点：
1. 体积非常大。因为其原理是转化成位图。
2. 文字显示不锐利。
用chrome则
