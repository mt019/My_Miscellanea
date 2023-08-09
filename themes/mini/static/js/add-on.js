(function addTitleToCodeBlock() {
    let list = document.body.getElementsByClassName("highlight");
  
    for (i = 0; i <= list.length - 1; i++) {
      let code = list[i].firstElementChild.firstElementChild;
      let codeName = code ? code.className.split(":")[1] : null;
  
      if (codeName) {
        let div = document.createElement("div");
        div.textContent = codeName;
        div.classList.add("code-name");
        code.parentNode.insertBefore(div, code);
      }
    }
  }());



// var els = document.getElementsByClassName("highlight");
// for (var i = 0; i < els.length; i++) {
//   if (els[i].title.length) {
//     var newNode = document.createElement("div");
//     var textNode = document.createTextNode(els[i].title);
//     newNode.appendChild(textNode);
//     newNode.classList.add("highlight-title");
//     els[i].parentNode.insertBefore(newNode, els[i]);
//   }
// }