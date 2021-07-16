let big_papa;
let field = [];
window.onload = Load;

class Tile {
    constructor(i1, i) {
        this.cell = document.createElement('td');
        this.cell.classList.add('cell');

        this.cell.id = i1.toString() + '-' + i.toString();
        this.cell.onclick = function() { click(i1.toString() + '-' + i.toString()); };
        this.cell.innerText = i1.toString() + '-' + i.toString();
    }
}

function Load() {
    big_papa = document.getElementById('parent');


    for (let i1 = 0; i1 < 10; i1++) {
        let row = document.createElement('tr');
        let f_row = [];
        for (let i = 0; i < 10; i++) {
            let tile = new Tile(i1, i);
            row.appendChild(tile.cell);
            f_row.push(tile);

        }
        big_papa.appendChild(row);
        field.push(f_row);
    }
}

function click(id) {
    let cell = document.getElementById(id);
    if (cell.classList.contains('cell-active')) {
        cell.classList.remove('cell-active');
    } else {
        cell.classList.add('cell-active');
    }

}

function clear() {
    for (let y = 0; y < field.length; y++) {
        for (let x = 0; x < field[y]; x++) {
            let tile = field[y][x];
            if (tile.cell.classList.contains('cell-active')) {
                tile.cell.classList.remove('cell-active');
            } else {
                tile.cell.classList.add('cell-active');
            }

        }


    }
}