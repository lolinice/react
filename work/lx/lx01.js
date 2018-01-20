var a = [];
var i = 0
// console.log(i);
for (;i < 10; i++) {
    console.log(i);
    // var d = 12
    a[i] = function () {
        console.log("a[]中的i等于"+i);
    };
    /*function fn() {
        console.log("function中的i等于"+i);
    }*/
}
console.log("i现在等于"+i);
a[6]();
// a[2]()
// fn()
// a[3]()
// console.log(d);



/*
 结果：
 0
 1
 ..
 9
 i现在等于10
 a[]中的i等于10
 a[]中的i等于10
 function中的i等于10
 a[]中的i等于10
 12

 todo for循环中定义的变量是全局变量
 */