let board, d, size, cellSize;
let selected;

function preload() {
    selected = loadImage('https://i.imgur.com/s3d1Zrb.png');
}

function setup() {
    d = Math.min(windowHeight, windowWidth);
    size = floor(sqrt(sentence.length));
    createCanvas(d, d);

    board = generateBoard();
}

function draw() {
    background(255);
    cellSize = d / size;
    rectMode(CORNERS)

    for (let i = 0; i <= size; i++) {
        strokeWeight(6);
        line(0, i * d / size, d, i * d / size);
        line(i * d / size, 0, i * d / size, d);
    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (board[i][j].selected) {
                tint(255, 200);
                image(selected, i * cellSize, j * cellSize, cellSize, cellSize);
            }

            let t = board[i][j].text
            let textSize = `text-align: center; font-size: ${cellSize / 7}px; direction: rtl;`
            createP(t).position(i * cellSize, j * cellSize).size(cellSize).style(textSize).class("noselect")
        }
    }
}

function mouseClicked() {
    let i = floor(mouseX / cellSize);
    let j = floor(mouseY / cellSize);

    board[i][j].selected = !board[i][j].selected;
    console.log(board[i][j]);
}

function generateBoard() {
    let board1 = Array(size);
    let tempSentence = sentence;

    for (let i = 0; i < size; i++) {
        board1[i] = Array(size);
        for (let j = 0; j < size; j++) {
            let r = floor(random(0, tempSentence.length));
            board1[i][j] = sentence[r];
            tempSentence.splice(r, 1);
        }
    }

    return board1
}

function checkBingo() {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {

        }
    }
}