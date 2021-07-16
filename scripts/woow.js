let big_papa;
let field = [];
const mine_chance = 10;
let mine_counter = 5;
window.onload = Load;



class Tile {
    constructor(i1, i, is_mine) {
        this.is_mine = is_mine;
        this.cell = document.createElement('td');
        this.cell.classList.add('cell');
        this.cell.classList.add('cell-closed');

        this.cell.id = i1.toString() + '-' + i.toString();
        this.cell.onclick = function() { click(i1.toString() + '-' + i.toString(), false); };
        /*
        if (is_mine) {
            this.cell.classList.add('cell-active');
        }
        */

    }
}

function randomInt(int) {
    return Math.floor(Math.random() * int);

}


function Load() {
    big_papa = document.getElementById('parent');


    for (let i1 = 0; i1 < 10; i1++) {
        let row = document.createElement('tr');
        let f_row = [];
        for (let i = 0; i < 10; i++) {
            let is_mine = randomInt(100) <= mine_chance;
            if (is_mine) {
                mine_counter++;
            }
            let tile = new Tile(i1, i, is_mine);
            row.appendChild(tile.cell);
            f_row.push(tile);

        }
        big_papa.appendChild(row);
        field.push(f_row);
    }
}

function click(id, rec) {
    let cell = document.getElementById(id);
    if (cell.classList.contains('cell-closed')) {
        cell.classList.remove('cell-closed');
        let coords = id.split('-');
        let y = parseInt(coords[0]);
        let x = parseInt(coords[1]);


        let content = find_mates(y, x);
        cell.innerText = content;
        if (content < 0) {
            cell.classList.add('class-active');
            return false;
        } else if (content == 0) {
            cell.classList.add('cell-open-clear');
            if (!rec) {
                cell.classList.add('cell-closed');
                flood_fill(id);
            }
            return true;

        } else if (content > 0) {
            cell.classList.add('cell-open-near');
            return false;

        }
    } else {
        return false;
    }


}

function hello() {


    for (let y = 0; y < field.length; y++) {
        for (let x = 0; x < field[y].length; x++) {
            let tile = field[y][x];
            tile.cell.innerText = find_mates(y, x);

        }
    }

}

function find_mates(y, x) {
    let limitY = field.length;
    let limitX = field.length;
    let result = 0;

    if (field[y][x].is_mine) {
        return -1

    }
    for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
            if (!(dy == 0 && dx == 0)) {
                if (-1 < x + dx && x + dx < limitX && -1 < y + dy && y + dy < limitY) {
                    if (field[y + dy][x + dx].is_mine) {
                        result++;
                    }
                }
            }

        }

    }
    return result;


}

function flood_fill(id) {
    let limitY = field.length;
    let limitX = field.length;
    let stack = [id];
    while (stack.length > 0) {
        let elem = stack.pop();
        let flag = click(elem, true);
        alert(flag);
        if (flag) {
            let coords = id.split('-');
            let y = parseInt(coords[0]);
            let x = parseInt(coords[1]);
            for (let dy = -1; dy <= 1; dy++) {
                for (let dx = -1; dx <= 1; dx++) {
                    if (!(dy == 0 && dx == 0)) {
                        if (-1 < x + dx && x + dx < limitX && -1 < y + dy && y + dy < limitY) {
                            stack.push((y + dy).toString() + '-' + (x + dx).toString());
                        }
                    }
                }
            }
        }
    }
}