// 获取文本框和按钮的引用
let input = document.querySelector(".outerBox .button input");
let button = document.querySelector(".outerBox .button button");

button.addEventListener("click", function () {
    let text = input.value;
    if (text == "") {
        alert("请输入内容,再点击");
        return ;
    } else {
        console.log(text);
        input.value = "";
        input.focus();
    }
    
    
});
