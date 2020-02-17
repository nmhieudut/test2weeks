var boxes = document.querySelectorAll('div.box');
var winNotice = document.querySelector('.winNotice');
var button = document.querySelector('button');
function checkWinner() {
    var box1 = document.querySelector("#box1");
    var box2 = document.querySelector("#box2");
    var box3 = document.querySelector("#box3");
    var box4 = document.querySelector("#box4");
    var box5 = document.querySelector("#box5");
    var box6 = document.querySelector("#box6");
    var box7 = document.querySelector("#box7");
    var box8 = document.querySelector("#box8");
    var box9 = document.querySelector("#box9");
    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML && box2.innerHTML === box3.innerHTML)
    notice(box1, box2, box3);
    else if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML && box5.innerHTML === box6.innerHTML)
    notice(box4, box5, box6);
    else if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML && box8.innerHTML === box9.innerHTML)
    notice(box7, box8, box9);
    else if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML && box4.innerHTML === box7.innerHTML)
    notice(box1, box4, box7);
    else if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML && box5.innerHTML === box8.innerHTML)
    notice(box2, box5, box8);
    else if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML && box6.innerHTML === box9.innerHTML)
    notice(box3, box6, box9);
    else if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML && box5.innerHTML === box9.innerHTML)
    notice(box1, box5, box9);
    else if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML && box5.innerHTML === box7.innerHTML)
    notice(box3, box5, box7);
    // boxesArr = Array.from(boxes);
    // for (let i = 0; i < boxesArr.length; i++) {
    //     if (boxesArr[i].innerHTML == boxesArr[i + 1].innerHTML && boxesArr[i + 1].innerHTML == boxesArr[i + 2].innerHTML && boxesArr[i].innerHTML == boxes[i + 2].innerHTML)
    //         console.log(`${boxesArr[i].innerHTML} wins`);
    //     else if (boxesArr[i].innerHTML == boxesArr[i + 3].innerHTML && boxesArr[i + 3].innerHTML == boxesArr[i + 6].innerHTML)
    //         console.log(`${boxesArr[i].innerHTML} wins`);
    //     else if (boxesArr[i].innerHTML == boxesArr[i + 4].innerHTML && boxesArr[i + 4].innerHTML == boxesArr[i + 8].innerHTML)
    //         console.log(`${boxesArr[i].innerHTML} wins`);
    // }
}
var toggle = 0;
function addVal() {
    for (let i = 0; i < boxes.length; i++) {
        if (toggle % 2 == 0) {
            this.innerHTML = "X";
            toggle++;
            checkWinner();
            this.removeEventListener('click', addVal);
        }
        else {
            this.innerHTML = "O";
            toggle++;
            checkWinner();
            this.removeEventListener('click', addVal);
        }
    }
}
function notice(b1) {
    winNotice.innerHTML = `${b1.innerHTML} Wins`;
    boxes.forEach(box => box.removeEventListener('click',addVal))
}
button.addEventListener('click',() => {
    window.location.reload();
})
boxes.forEach(box => box.addEventListener('click', addVal));
