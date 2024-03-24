let music = new Audio("music.mp3");
let audioturn = new Audio('ting.mp3');
let gameoveraudio = new Audio("gameover.mp3");
let gameover = false;
let turn = "X";

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

const checkwin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let Wins = [
        [0, 1, 2,5,5,0],
        [3, 4, 5,5,5,0],
        [6, 7, 8,5,15,0],
        [0, 3, 6,-5,15,90],
        [1, 4, 7,5,15,90],
        [2, 5, 8,15,15,90],
        [0, 4, 8,5,15,45],
        [2, 4, 6,5,15,135],
    ];
    Wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
            document.querySelector(".line").style.width="20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    });
};
//music.play()
//main logic
let boxes = document.getElementsByClassName("box");

// Loop through each box
Array.from(boxes).forEach(box => {
    // Add click event listener to each box
    box.addEventListener('click', () => {
        // Get the box text
        let boxtext = box.querySelector('.boxtext');
        // Check if box is empty
        audioturn.play();
        if (boxtext.innerText === '') {
            // Set the text to current turn
            boxtext.innerText = turn;
            // Change turn
            turn = changeTurn();
            // Call checkWin function
            checkwin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});
let resetButton = document.getElementById('reset');

resetButton.addEventListener('click', () => {
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    })
    turn ="X";
    gameover=false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".line").style.width="0px";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
});