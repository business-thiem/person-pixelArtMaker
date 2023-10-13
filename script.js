/*TODO list


*/


let body = document.getElementsByTagName('body')[0]



function createBoard(){
    createContainerAndSquares()


    let inputElements = document.querySelectorAll('input')
    inputElements.forEach(inputEle => {
        addEventListeners(inputEle, 'keyup')
    })
    // console.log(inputElements)
    // addEventListeners(HTMLelement, 'keyup')
}

function createContainerAndSquares(){
    let container = document.createElement('div')
    container.style.cssText = `
    border: 1px solid black;
    display:flex;
    flex-wrap: wrap;
    width:800px;
    height:800px;
    `

    container.classList.add('squaresContainer')

    let squareCount = 1024;
    for(let i = 0; i < squareCount; i++){
        createSquares(container, i)
    } 
    body.appendChild(container)
}

function createSquares(container, id){
    let square = document.createElement('div')
    square.style.cssText = `
    width:3.125%;
    height:3.125%;
    background-color:white;
    `
    
    square.setAttribute(`id`, `square${id}`)
    square.classList.add('squareCell')
    addEventListeners(square, `click`)

    container.appendChild(square)
}




function addEventListeners(HTMLelement, eventType){
    HTMLelement.addEventListener(eventType, (e) => {
        console.log(e.target.id, `in listener`)
        eventHandler(HTMLelement, e)
    })
}

function eventHandler(HTMLelement, event){
    //if elementid includes .some of the eventTypes then do this. //certain elements should have certain functions
    let eventTypesArr = []
    let elementTypes = []
    let colorPicked, colorBox;

    console.log(HTMLelement, event.type, 'in handler')

    if(event.type === 'click' && event.target.id.includes('square')){
        console.log('clicked in square to change color')
        HTMLelement.style.backgroundColor = `rgb(${getColorFromInput().join()})`
    }

    if(event.type === 'keyup' && event.target.id.includes('color')){
        console.log('keyup from', event.target.id)
        colorBox = document.getElementsByClassName('') //TODO last let off here
        colorBox.style.backgroundColor = `rgb(${getColorFromInput().join()})`
    }

    //keyup event on the input values = new color joined


}

function getColorFromInput(){
    let rVal = document.getElementById('Rcolor').value
    let gVal = document.getElementById('Gcolor').value
    let bVal = document.getElementById('Bcolor').value

    let colorStr = `${rVal},${gVal},${bVal}`
    let colorArr = colorStr.split(',')

    let colorBox = document.querySelector(`.pixelColorBox`)
    colorBox.style.cssText = `
    background-color: rgb(${colorStr});
    `

    // return colorBox.style.backgroundColor
    return colorArr
}

function setPixelColor(element, pixelId){
    
}





createBoard()