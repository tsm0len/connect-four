const combinations = [
    [
        [0, 0]
        [0, 1],
        [0, 2],
        [0, 3],
    ],
]
let board = [
    ["gray", "gray", "gray", "gray","gray", "gray"], //rotated 90deg left
    ["gray", "gray", "gray", "gray","gray", "gray"],
    ["gray", "gray", "gray", "gray","gray", "gray"],
    ["gray", "gray", "gray", "gray","gray", "gray"],
    ["gray", "gray", "gray", "gray","gray", "gray"],
    ["gray", "gray", "gray", "gray","gray", "gray"],
    ["gray", "gray", "gray", "gray","gray", "gray"]
];

let color = "red"
function changeColor() {
    if (color=="red") {
        color = "yellow";
    } else {
        color = "red";
    }
}
function refreshBoard() {
    for (let c=0; c<7; c++) {
        for (let r=0; r<6; ++r) {
            let column = document.getElementById('column'+c);
            let row = column.querySelector('#row'+r);
            row.style.backgroundColor = board[c][r];
        }
    }
}
function checkForWin(placed) {
    for (let c=0; c<4; c++) {
        for (let r=0; r<3; ++r) {
            if (board[c][r]==board[c+1][r+1] && board[c+1][r+1]==board[c][r]) {
                return
            }
        }
    }
}
function column(column) {
	console.log("test");
    for (let cell=7; cell>=0; cell--) {
        if (board[column][cell]=="gray") {
            board[column][cell] = color;
            console.log(board);
            changeColor();
            break;
        }
    }
    refreshBoard();
}