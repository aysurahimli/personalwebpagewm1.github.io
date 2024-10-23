function wordSlices(word) {
    for (let i = 1; i < word.length; i++) {
        console.log(word.slice(0, i) + "_" + word.slice(i))
    }
}

wordSlices("SITE");