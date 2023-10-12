
let body = document.getElementsByTagName('body')[0]

function createBoard(){
    createContainer()
}

function createContainer(){
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
        createSquares(container)
    } 


    
    body.appendChild(container)
}

function createSquares(container){
    let square = document.createElement('div')
    square.style.cssText = `
    width:3.125%;
    height:3.125%;
    background-color:lightblue;
    `
    

    container.appendChild(square)
}



createBoard()