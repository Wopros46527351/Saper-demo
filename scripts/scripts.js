
function hello() {
    const size_x = 10
    const size_y = 10
    alert('Привет, мир!');
    const papa = document.getElementById('game-holder');
    let table = document.createElement('table');
    table.classList.add('minefield');
    papa.appendChild(table);
    for (let x = 0; x < size_x; x++) {
        let row = document.createElement('tr');
        papa.appendChild(row);
        for (let y = 0; y < size_y; y++) {
            let cell = document.createElement('td');
            cell.classList.add('mine-cell');
            cell.classList.add('mine-cell-inactive');
            cell.style.height = (600/size_y).toString()+"px";
            cell.style.width = (600/size_x).toString()+"px";
            cell.id = x.toString() + "-" + y.toString()
            cell.onmousedown = function(){
                let cell = document.Get
            };
            let content = document.createTextNode(x.toString() + "-" + y.toString());
            cell.appendChild(content);
            row.appendChild(cell);
        }
    }
    alert('Привет, мир!');
}


