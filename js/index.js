// 导航条 左侧滚动事件
// 获得元素
$con = $('.contro .controls');  
// 容器
$contro = $('.contro'); 
// 声明最大值
var max = $con.length - 1;
// 声明信号量
var idx = 0;

// 声明定时器
var timer = setInterval(cycle, 3000);

// 封装处理事件
function cycle() {
    // 更改信号量
    idx++;
    // 移动
   /*  $contro.animate({top: -50 * idx}, 500,function() {
         // 判断是否到达猫腻图
         if (idx === max + 1) {
            // 瞬移到原图
            $contro.css('top', 0);
            // 改变信号量
            idx = 0;
        }
    });   */
    if (idx > max) {
        // 瞬移到原图
        $contro.css('top', 0);
        // 改变信号量
        idx = 1;
    }
    $contro.animate({top: -50 *idx},1000); 
}

// banner 轮播图
// 获取元素
var lis = document.querySelectorAll('.unit li');
var left = document.querySelector('.btns #left');
var right = document.querySelector('.btns #right');
var cirs = document.querySelectorAll('.cirs li');
var right = document.querySelector('.banner .bannerMiddle .right');

// 声明锁
var lock = false;
// 声明信号量
var idx = 0;
// 获得索引最大值
var max = lis.length - 1;
// console.log(lis, left, right, cirs, max);
// 左键绑定事件
left.onclick = function() {
    // 判断锁
    if(lock) {
        return;
    }
    // 更改锁
    lock = true;
    // 当前图片退场
    console.log(idx);
    animate(lis[idx],{left: 970},1000);
    // 改变信号量
    idx--;
    // 判断边界
    idx = idx < 0 ? max: idx;
    // 候场图片进入候场位置
    lis[idx].style.left = '-970px';
    // 候场图片进场
    animate(lis[idx],{left: 0}, 1000, function() {
        // 重置锁
        lock = false;
    })
    change();
}

// 右键绑定事件
right.onclick = function() {
    // 判断锁
    if(lock) {
        return;
    }
    // 更改锁
    lock = true;
    // 当前图片退场
    console.log(idx);
    animate(lis[idx],{left: -970},1000);
    // 改变信号量
    idx++;
    // 判断边界
    idx = idx > max ? 0 : idx;
    // 候场图片进入候场位置
    lis[idx].style.left = '970px';
    // 候场图片进场
    animate(lis[idx],{left: 0}, 1000, function() {
        // 重置锁
        lock = false;
    })
    change();
}

 // 封装一个函数
 function change() {
    // 展示最后一张图片
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.display = 'none';
    }
    // 当前元素加上class属性为active
    lis[idx].style.display = 'block';
    // 展示小圆点
    for (var i = 0; i < cirs.length; i++) {
        cirs[i].style.backgroundColor = '#ccc';
    }
    // 当前元素加上class属性为active
    cirs[idx].style.backgroundColor = 'white';
}


// 点击小圆点展示对应图片  循环绑定
cirs.onclick = function () {
    // 获得对应的索引
    var index = this.index;
    // 没有变化
    if (index === idx) {
        return;
    }
    // 防流氓
    lock = true;
    // 判断移动方向
    if (index < idx) {
        // 相当于左键
        // 当前图片退场
        console.log(idx);
        animate(lis[idx], { left: 970 }, 1000);
        // 改变信号量
        idx--;
        // 判断边界
        idx = idx < 0 ? max : idx;
        // 候场图片进入候场位置
        lis[idx].style.left = '-970px';
        // 候场图片进场
        animate(lis[idx], { left: 0 }, 1000, function () {
            // 重置锁
            lock = false;
        })
        change();
    } else {
        // 相当于右键
        // 当前图片退场
        console.log(idx);
        animate(lis[idx], { left: -970 }, 1000);
        // 改变信号量
        idx++;
        // 判断边界
        idx = idx > max ? 0 : idx;
        // 候场图片进入候场位置
        lis[idx].style.left = '970px';
        // 候场图片进场
        animate(lis[idx], { left: 0 }, 1000, function () {
            // 重置锁
            lock = false;
        })
        change();
    }
}

// 周期执行
var timer = setInterval(demo, 1000);
// 鼠标移入，清除定时器
right.onmouseenter = function() {
    clearInterval(timer);
}
// 鼠标移出，设置定时器
right.onmouseleave = function() {
    timer = setInterval(demo, 2000);
}
// 设置demo函数
function demo() {

    animate(lis[idx], { left: 970 }, 1000);
        // 改变信号量
        idx--;
        // 判断边界
        idx = idx < 0 ? max : idx;
        // 候场图片进入候场位置
        lis[idx].style.left = '-970px';
        // 候场图片进场
        animate(lis[idx], { left: 0 }, 1000, function () {
            // 重置锁
            lock = false;
        })
        change();
}


