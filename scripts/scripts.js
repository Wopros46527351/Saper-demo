let good = false;
let fast = false;
let cheap = false;
let music=true;
let timer_exists = false;
const easy = 8
const medium = 12
const hard = 15



function toggleSound(){
    if (music){
        music = false;
        var image = document.getElementById("sound");
        image.src = "https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-sound-off-line-black-icon-png-image_709526.jpg";
    }
    else{
        music = true;
        var image = document.getElementById("sound");
        image.src ='https://www.vhv.rs/dpng/d/436-4366373_volume-sound-png-download-audio-icon-transparent-background.png';
    }
}

function hello() {
    start_timer();
    
    let elem = document.getElementById("minefield");
    if (elem !=null){
        elem.remove();
    }
    
    let select = document.getElementById("diff-select");
    let diff = select.value;
    let size_x;
    let size_y;
    if (diff == "easy"){
        size_x = easy;
        size_y = easy;
    }else if (diff == "med"){
        size_x = medium;
        size_y = medium;
    }else{
        size_x = hard;
        size_y = hard;
    }
    const papa = document.getElementById('game-holder');
    let table = document.createElement('table');
    table.id = "minefield";
    table.classList.add('minefield');
    papa.appendChild(table);
    for (let x = 0; x < size_x; x++) {
        let row = document.createElement('tr');
        table.appendChild(row);
        for (let y = 0; y < size_y; y++) {
            let cell = document.createElement('td');
            cell.classList.add('mine-cell');
            cell.classList.add('mine-cell-inactive');
            cell.style.height = (600/size_y).toString()+"px";
            cell.style.width = (600/size_x).toString()+"px";
            cell.id = x.toString() + "-" + y.toString()
            let content = document.createTextNode(x.toString() + "-" + y.toString());
            cell.appendChild(content);
            row.appendChild(cell);
        }
    }
}


function s_cheap(){
    let elem = document.getElementById('cheap')
    cheap = elem.checked;
    if (cheap && good && fast){
        fast = false;
        document.getElementById('fast').checked = false;
    }
}

function s_fast(){
    let elem = document.getElementById('fast')
    fast = elem.checked;
    if (cheap && good && fast){
        good = false;
        document.getElementById('good').checked = false;
    }
}

function s_good(){
    let elem = document.getElementById('good')
    good = elem.checked;
    if (cheap && good && fast){
        cheap = false;
        document.getElementById('cheap').checked = false;
    }
}

function start_timer(){
    let elem = document.getElementById('timer');
    elem.innerText = "00:00"
    if(!timer_exists){
        setInterval(Timer,1000);
        timer_exists=true;
    }
    
}
function Timer(){
    let elem = document.getElementById('timer');
    var str = elem.innerText;
    var str = str.split(":");
    var min = parseInt(str[0]);
    var sec = parseInt(str[1])+1;
    var new_str = min.toString()+':'+sec.toString();
    elem.innerText = new_str;
}
