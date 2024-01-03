$(document).ready(function() {
    // 功能1
    // 在這裡加入顯示學號、姓名、大頭照的程式碼

    // 功能2
$("#btnFontColor").click(function() {
    $("#studentID, #studentName").css({
        'color': 'red', // 請更換為你想要的顏色
        'font-size': '20px' // 請更換為你想要的字體大小
    });
});

    // 功能3
    $("#btnBorderStyle").click(function() {
        // 在這裡加入調整大頭照樣式的程式碼
    });

    // 功能4
    $("#btnChangeImage").click(function() {
        // 在這裡加入換圖的程式碼
    });

    // 功能5
    $("#btnFade").click(function() {
        // 在這裡加入淡入淡出的程式碼
    });

    // 功能6
    $("#linkHTML").attr("href", "test\index.html");
    $("#linkJS").attr("href", "test\script.js");
});
