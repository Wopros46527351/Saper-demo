let good = false;
let fast = false;
let cheap = false;
let music = true;
let timer_exists = false;
let field = []
let mine_count = 0
let mine_chance = 10

class Tile {
    constructor(x, y, is_mine, size) {
        this.x = x;
        this.y = y;
        this.is_mine = is_mine;
        
        this.cell = document.createElement('td');
        this.cell.onclick = function () { Hello(x, y); };
        this.cell.classList.add('mine-cell');
        this.cell.classList.add('mine-cell-inactive');
        this.cell.style.height = size.toString() + "px";
        this.cell.style.width = size.toString() + "px";
        this.cell.id = this.x.toString() + "-" + this.y.toString()
        let content = document.createTextNode("");
        this.cell.appendChild(content);
    }


}


function toggleSound() {
    if (music) {
        music = false;
        var image = document.getElementById("sound");
        image.src = "https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-sound-off-line-black-icon-png-image_709526.jpg";
    }
    else {
        music = true;
        var image = document.getElementById("sound");
        image.src = 'https://www.vhv.rs/dpng/d/436-4366373_volume-sound-png-download-audio-icon-transparent-background.png';
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function Setup() {
    mine_count=0;
    start_timer();

    let elem = document.getElementById("minefield");
    if (elem != null) {
        elem.remove();
    }

    let size = 10;
    const papa = document.getElementById('game-holder');
    let table = document.createElement('table');
    table.id = "minefield";
    table.classList.add('minefield');
    papa.appendChild(table);
    for (let x = 0; x < size; x++) {
        let row = document.createElement('tr');
        table.appendChild(row);
        let f_row = []
        for (let y = 0; y < size; y++) {
            let is_mine = getRandomInt(100)<mine_chance;
            if(is_mine){
                mine_count+=1;
            }
            let tile = new Tile(x, y, is_mine, 600 / size)
            f_row.push(tile)
            row.appendChild(tile.cell);
        }
        field.push(f_row);
    }
    const mine_counter = document.getElementById('mine-counter');
    mine_counter.innerText = mine_count.toString();
}


function s_cheap() {
    let elem = document.getElementById('cheap')
    cheap = elem.checked;
    if (cheap && good && fast) {
        fast = false;
        document.getElementById('fast').checked = false;
    }
}

function s_fast() {
    let elem = document.getElementById('fast')
    fast = elem.checked;
    if (cheap && good && fast) {
        good = false;
        document.getElementById('good').checked = false;
    }
}

function s_good() {
    let elem = document.getElementById('good')
    good = elem.checked;
    if (cheap && good && fast) {
        cheap = false;
        document.getElementById('cheap').checked = false;
    }
}

function start_timer() {
    let elem = document.getElementById('timer');
    elem.innerText = "00:00"
    if (!timer_exists) {
        setInterval(Timer, 1000);
        timer_exists = true;
    }

}

function Timer() {
    let elem = document.getElementById('timer');
    var str = elem.innerText;
    var str = str.split(":");
    var min = parseInt(str[0]);
    var sec = parseInt(str[1]) + 1;
    var new_str = min.toString() + ':' + sec.toString();
    elem.innerText = new_str;
}

function Hello(x, y) {
    let elem = document.getElementById(x.toString() + "-" + y.toString())
    elem.classList.remove("mine-cell-inactive")
    if(field[x][y].is_mine){
        elem.classList.add("mine-cell-mine");
    }else{
        elem.classList.add("mine-cell-empty");
    }
    elem.innerText=x.toString() + "-" + y.toString();
    
}
