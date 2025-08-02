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

/** Etch a sketch **/
//Create EtchASketch Area
const etchASketch = document.createElement('div')
etchASketch.classList.add('etch-a-sketch')
etchASketch.classList.add("grid-container")
testArea.insertAdjacentElement('afterend', etchASketch)

//Create Grid
function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}
function createGrid(parent, length) {
    let percentage = Math.floor(100 / length)
    for (let i = 0; i < length * length; i++) {
        let gridItem = document.createElement('div')
        gridItem.classList.add('grid-item')
        gridItem.setAttribute("style", `min-width: ${percentage}%;`)
        gridItem.addEventListener('mouseenter', () => {
            gridItem.setAttribute('style', `min-width: ${percentage}%;background:${getRandomColor()};opacity:0.${i < 10 ? i + 1 : 10}`)
        })
        parent.appendChild(gridItem)
    }
}

let length = 4
createGrid(etchASketch, length)

//Custom Length Button
function openModal(parent) {
    const modalOverlay = document.createElement('div')
    modalOverlay.classList.add('modal-overlay')

    const modalContainer = document.createElement('div')
    modalContainer.classList.add('modal-container')

    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', 'Length?')

    const buttonElement = document.createElement('button')
    buttonElement.textContent = 'Confirm'
    buttonElement.addEventListener('click', () => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
        modalOverlay.remove()
        let val = input.value <= 100 ? input.value : 4
        createGrid(parent, val || 4)
    })

    modalContainer.appendChild(input)
    modalContainer.appendChild(buttonElement)

    modalOverlay.appendChild(modalContainer)
    document.body.appendChild(modalOverlay)
}

const openModalButton = document.createElement('button')
openModalButton.setAttribute('style', 'background:blue;color:white;padding:50px;border-radius:10px')
openModalButton.textContent = 'Select Length'
openModalButton.addEventListener('click', () => {
    openModal(etchASketch)
})
etchASketch.insertAdjacentElement('beforebegin', openModalButton)

