const arguments = process.argv.slice(2)


function areaCalculator(radius) {
    let area = Math.PI * (radius ** 2)
    return console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area} `)
}

console.log(areaCalculator(arguments[0]))