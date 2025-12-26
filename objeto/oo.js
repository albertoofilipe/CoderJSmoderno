//CÓDIGO NÃO EXECUTÁVEL

// PROCEDURAL

let obj = {
    a01: ["Banana", "Manga", "Limão", "Maracuja", "-----------", typeof Array],
    a01: ["Banana", "Manga", "Limão", "Maracuja", "-----------", typeof Array],
    a02: ["Banana", "Manga", "Limão", "Maracuja", "-----------", typeof Array],
    a03: ["Banana", "Manga", "Limão", "Maracuja", "-----------", typeof Array],
    a04: ["Banana", "Manga", "Limão", "Maracuja", "-----------", typeof Array],
    a04: ["Banana", "Manga", "Limão", "Maracuja", "-----------", typeof Array],

    a05: ["Banana", "Manga", "Limão", "Maracuja", "-----------", typeof Array]
}

for (const i in obj) {
    for (const e in obj[i]) {
        console.log(obj[i][e])
    }
}

console.log(new Object("OOOOOOOOOOO", "OOOOOOOOOOOOOO"))