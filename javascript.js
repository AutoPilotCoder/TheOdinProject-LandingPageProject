function add7(num) {
    return parseInt(num) + 7
}

function multiply(n1, n2) {
    return parseInt(n1) * parseInt(n2)
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}

function lastLetter(str) {
    return str.slice(str.length - 1)
}

function fizzBuzz(num) {
    if (typeof (num) != 'number') {
        return 'Hey! Numbers only :('
    }
    if (num % 3 == 0) {
        return 'Fizz'
    }
    if (num % 5 == 0) {
        return 'FizzBuzz'
    }
    let result = ''
    let i = 0
    while (i <= num) {
        result += i.toString()
        i++
    }
    return result
}

const testArea = document.querySelector('.test-area')
console.log(testArea)
const paragraph = document.createElement('p')
paragraph.style.color = 'red'
paragraph.textContent = "Hey I'm red!"
testArea.appendChild(paragraph)

const h3 = document.createElement('h3')
h3.setAttribute('style', 'color: blue;')
h3.textContent = "I'm a blue h3!"
testArea.appendChild(h3)

const div = document.createElement('div')
div.setAttribute("style", "border: 1px solid black; background:pink;")
const h1 = document.createElement('h1')
h1.textContent = "I'm in a div"
const p = document.createElement('p')
p.textContent = "ME TOO!"
div.append(h1, p)
testArea.appendChild(div)


// etch a sketch
const etchASketch = document.createElement('div').classList.add('etch-a-sketch')
testArea.after(etchASketch)