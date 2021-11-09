let board, d, size, cellSize, selected, style; //L
let background;

function setup() {
    d = 0.94 * Math.min(windowHeight, windowWidth);
    size = floor(sqrt(16));
    cellSize = floor(d / size);
    background = `background-size: ${cellSize}px; background-image: url('https://i.imgur.com/s3d1Zrb.png');`;

    board = generateBoard();

    let table = createElement("table").position(0, 0).size(d, d);
    //I
    for (let i = 0; i < size; i++) {
        let row = createElement("tr");
        for (let j = 0; j < size; j++) {
            style = `text-align: center; font-size: ${cellSize / 6}px; direction: rtl; color: white; border-color: black;`;
            //I
            let cell = createElement("td", board[i][j].text).style(style).size(cellSize, cellSize).id(`${i} ${j}`); //S
            cell.parent(row);
        }

        row.parent(table);
    }
}

function mouseClicked() {
    let i = floor(mouseY / cellSize); //U
    let j = floor(mouseX / cellSize);

    let cell = document.getElementById(`${i} ${j}`); //B

    board[i][j].selected = !board[i][j].selected;

    if (board[i][j].selected) {
        cell.style = style + background; //X
    } else {
        cell.style = style;
    }
}

//M

function generateBoard() {
    let board1 = Array(size);
    let tempSentence = sentence;

    for (let i = 0; i < size; i++) {
        board1[i] = Array(size); //A
        for (let j = 0; j < size; j++) {
            let r = floor(random(0, tempSentence.length));
            board1[i][j] = sentence[r]; //E
            tempSentence.splice(r, 1);
        }
    }

    return board1
}