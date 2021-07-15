const exp = document.getElementById("exp");
exp.innerText = "";
let first_number = 0;
let second_number = 0;

function number(i){
    first_number+=i;
    exp.innerText = first_number.toString();
}
