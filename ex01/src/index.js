var text = document.getElementById("textarea");
var spaceKey = " ";
function keyboardInput(key) {
   return text.value += key;
   
    
}
function backSpace() {
    text.value = text.value.substring(0, text.value.length - 1);
}

function enter() {
    text.value += '\n';
}
function space() {
    text.value = text.value.substring(0, text.value.length) + ' ';

}
function submit() {
    alert(text.value);
};
function shift() {
    
}


/*function keyboardInput(key) {
    if (key === 1) {
        text.value += "1";
    };
    if (key === 2) {
        text.value += "2";
    };
    if (key === 3) {
        text.value += "3";
    };
     if (key === 5) {
        text.value += "5";
    };
    if (key === 4) {
        text.value += "4";
    };
    if (key === 6) {
        text.value += "6";
    };
    if (key === 7) {
        text.value += "7";
    };
    if (key === 8) {
        text.value += "8";
    };
    if (key === 9) {
        text.value += "9";
    };
    if (key === 0) {
        text.value += "0";
    };
    if (key === 'A') {
        text.value += "a";
    };
    if (key === 'B') {
        text.value += "b";
    };
    if (key === 'C') {
        text.value += "c";
    };
    if (key === 'D') {
        text.value += "d";
    };
    if (key === 'E') {
        text.value += "e";
    };
    if (key === 'F') {
        text.value += "f";
    };
    if (key === 'G') {
        text.value += "g";
    };
    if (key === 'H') {
        text.value += "h";
    };
    if (key === 'I') {
        text.value += "i";
    };
    if (key === 'J') {
        text.value += "j";
    };
    if (key === 'K') {
        text.value += "k";
    };
    if (key === 'L') {
        text.value += "l";
    };
    if (key === 'M') {
        text.value += "m";
    };
    if (key === 'N') {
        text.value += "n";
    };
    if (key === 'O') {
        text.value += "o";
    };
    if (key === 'P') {
        text.value += "p";
    };
    if (key === 'R') {
        text.value += "r";
    };
    if (key === 'Q') {
        text.value += "q";
    };
    if (key === 'S') {
        text.value += "s";
    };
    if (key === 'T') {
        text.value += "t";
    };
    if (key === 'U') {
        text.value += "u";
    };
    if (key === 'V') {
        text.value += "v";
    };
    if (key === 'W') {
        text.value += "w";
    };
    if (key === 'X') {
        text.value += "x";
    };
    if (key === 'Y') {
        text.value += "y";
    };
    if (key === 'Z') {
        text.value += "z";
    };
    if (key === 10) {
        text.value += "-";
    };
    if (key === 11) {
        text.value += "_";
    };
    if (key === 20) {
        text.value = text.value.substring(0, text.value.length - 1)
    }
    if (key === 40) {
        text.value += '\n';
    }
    if (key === 30) {
        

    }
} */


