let jian = document.getElementsByClassName('jian')[0];
let left = document.getElementsByClassName('left')[0];
let right = document.getElementsByClassName('right')[0];
let demo = document.getElementsByClassName('demo')[0];
let button = document.getElementsByTagName('span');
let speed = 300;
function timer() {
    if (parseInt(jian.style.left) >= -1200) {

        jian.style.left = parseInt(jian.style.left) - speed + "px";
        jian.classList.add('ahh');
        
    } else if (parseInt(jian.style.left) == -1500) {
        jian.classList.remove("ahh");
        jian.style.left = "0px";


    };

};

let st;
st = setInterval(timer, 2000);
demo.addEventListener('mouseout', function () {
    st = setInterval(timer, 2000);
});
demo.addEventListener('mouseover', function () {
    clearInterval(st);
});


left.onclick = function () {
    if (parseInt(jian.style.left) <= 0) {
        jian.classList.add('ahh');
        jian.style.left = parseInt(jian.style.left) + speed + "px";

    }
    if (parseInt(jian.style.left) > 0) {
        jian.classList.remove("ahh");
        jian.style.left = "-1800px";
        jian.style.left = parseInt(jian.style.left) + speed + "px";
    }

};
right.onclick = function () {
    if (parseInt(jian.style.left) >= -1800) {
        jian.classList.add('ahh');
        jian.style.left = parseInt(jian.style.left) - speed + "px";
    } if (parseInt(jian.style.left) == -2100) {
        jian.classList.remove("ahh");
        jian.style.left = "0px";
        jian.style.left = parseInt(jian.style.left) - speed + "px";
    }

};
let sum = -300;
for (let i = 0; i < button.length; i++){
    button[i].onmouseover = function () {
        jian.style.left = sum * (i+1) + "px";
    }
};