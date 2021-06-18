let cheap = false;
let good = false;
let fast = false;
function cheap_button() {
    let element = document.getElementById("cheap_b");
    cheap = element.checked;
    if (cheap && good && fast) {
        element = document.getElementById("fast_b");
        element.checked = false;
        fast=false;
    }

}
function fast_button() {
    let element = document.getElementById("fast_b");
    fast = element.checked;
    if (cheap && good && fast) {
        element = document.getElementById("good_b");
        element.checked = false;
        good=false;
    }

}
function good_button() {
    let element = document.getElementById("good_b");
    good = element.checked;
    if (cheap && good && fast) {
        element = document.getElementById("cheap_b");
        element.checked = false;
        cheap=false
    }

}