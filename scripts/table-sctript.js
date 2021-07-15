let big_papa;
let field = [];
window.onload = Load;
class Tile {
    constructor(x, i) {
        this.cell = document.createElement("td");
        this.cell.classList.add('cell');
        this.cell.id = x.toString() + "-" + i.toString();
        this.cell.onclick = function () { click(x.toString() + "-" + i.toString()); };
        this.cell.innerText = x.toString() + "-" + i.toString();
    }
}

function Load() {
    big_papa = document.getElementById("parent");
    for (let x = 0; x < 10; x++) {
        let row = document.createElement("tr");
        let f_row = [];
        for (let i = 0; i < 10; i++) {
            let tile = new Tile(x, i);
            row.appendChild(tile.cell);
            f_row.push(tile);
        }
        big_papa.appendChild(row);
        field.push(f_row);
    }
}

function click(id) {
    let cell = document.getElementById(id);
    if (cell.classList.contains("cell-active")) {
        cell.classList.remove("cell-active");
    } else {
        cell.classList.add("cell-active");
    }
}
function clear() {
    alert("hello!");
    for (let y = 0; y < field.length; y++) {
        for (let x = 0; x < field[y].length; x++) {
            let tile = field[y][x]
            if (tile.cell.classList.contains("cell-active")) {
                tile.cell.classList.remove("cell-active");
            } else {
                tile.cell.classList.add("cell-active");
            }
        }
    }
}
function hello(){
    alert("hello!");
}
