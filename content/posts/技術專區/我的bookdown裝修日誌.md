---
title: "我的bookdown裝修日誌.md"
date: 2023-09-25T12:00:00+08:00
lastmod:


tags: 
    - Site
categories:
description:
slug:
draft: false

# include_toc: true
showToc: true
---


## To-do list for my bookdown

1. [x] 引用資料的展開收起






## 引用資料的展開收起

實現效果：

1. 點擊按鈕展開資料文本
2. 雙擊資料本文處，即可收起，並捲動回到按鈕位置

為bookdown 加入css 與 js

```css:sytle.css
/* Style the button that is used to open and close the collapsible content */
.collapsible {
  background-color: #fcc8c8;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.collapsible:active, .collapsible:hover {
  background-color: #f7f1f1;

}

/* Style the collapsible content. Note: hidden by default */
.content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #ffffff;
  border-width:3px;border-style:dashed;border-color:#FFAC55;padding:5px;
}
```

```html: custom_def.html
<script>
  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      toggleContent(content, this);
    });
  
    var contentElement = coll[i].nextElementSibling;
    contentElement.addEventListener("dblclick", function() {
      var button = this.previousElementSibling;
      toggleContent(this, button);
    });
  }
  
  function toggleContent(content, button) {
    if (content.style.display === "block") {
      content.style.display = "none";
      button.scrollIntoView({ behavior: "smooth" }); // 滚动到按钮的位置
    } else {
      content.style.display = "block";
    }
  }
  
    </script>
```
