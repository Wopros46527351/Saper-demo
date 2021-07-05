function draw() {
<<<<<<< HEAD
    setInterval(Timer,1000);
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        for (var x = 0; x < 500; x += 10) {
            for (var y = 0; y < 500; y += 10) {
                ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.fillRect(x, y, 10, 10);
                ctx.fillStyle = 'rgb(200, 200, 200)';
=======
    setInterval(Timer, 1000)
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        /*
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 1)';
        ctx.fillRect(30, 30, 50, 50);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillRect(0, 0, 500, 500);
        
        for (var x = 0; x < 500; x += 10) {
            for (var y = 0; y < 500; y += 10) {
                ctx.fillStyle = 'rgb(0,0,0)';
                ctx.fillRect(x, y, 10, 10);
                ctx.fillStyle = 'rgb(200,200,200)';
>>>>>>> b5541a9d609fe236042dd318f6295ffa53551918
                ctx.fillRect(x + 1, y + 1, 8, 8);
            }
        }
        
<<<<<<< HEAD
        /*
=======
        ctx.fillStyle = 'rgb(255,0,0)';
>>>>>>> b5541a9d609fe236042dd318f6295ffa53551918
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(100, 100);
        ctx.lineTo(50, 150);
        ctx.lineTo(0, 100);
        ctx.fill();
<<<<<<< HEAD
        ctx.closePath();*/
        Hex(100,100,50,'rgb(255, 255, 255)',ctx);
        Circle(100,100,50,ctx);
    }
}
function Hex(x,y,len,color,ctx){
    ctx.fillStyle = color;
    var pi = Math.PI;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for(var i = 90;i<=450;i+=60){
        var x1 = x+Math.cos(i*(pi/180))*len;
        var y1 = y+Math.sin(i*(pi/180))*len;
        ctx.lineTo(x1, y1);
    }
    ctx.fill();
    ctx.closePath();
}

function Circle(x,y,len,ctx){
    ctx.beginPath();
    ctx.arc(x,y,len,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
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
=======
        ctx.closePath();
        */
        Hex(100, 100, 50, 'rgb(200,200,200)', ctx);
        Circle(100, 100, 50, ctx)

    }
}
function Hex(x, y, len, color, ctx) {
    var pi = Math.PI;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (var i = 90; i <= 450; i += 60) {
        var x1 = x + Math.cos(i * (pi / 180)) * len;
        var y1 = y + Math.sin(i * (pi / 180)) * len;
        ctx.lineTo(x1, y1);

    }
    ctx.fill();
    ctx.closePath();

}
function Circle(x, y, len, ctx) {
    ctx.beginPath();
    ctx.arc(x, y, len, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();



}
function Timer() {
    let elem = document.getElementById('timer')
    var str = elem.innerText;
    var str = str.split(':');
    var min = parseInt(str[0]);
    var sec = parseInt(str[1]);
    sec += 1
    if (sec == 60) {
        min += 1;
        sec = 0;
    }
    if (min < 10) {
        min = '0' + min.toString();
    }
    if (sec<10){
        sec='0'+sec.toString();
    }
    var new_str = min + ':' + sec;
    elem.innerText = new_str;
}



>>>>>>> b5541a9d609fe236042dd318f6295ffa53551918
