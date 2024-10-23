function explodedString(str) {
    let result = "";

    for (let i = 1; i <= str.length; i++) {
        result += str.slice(0, i);
    }

    return result;
    
}

let exploded = explodedString("Baku");
console.log(exploded);