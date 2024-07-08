// MORNING - JS DOM

// console.log("Hello there!")
// console.log("We are utilising JS DOM")
// console.log(document)
// console.log(document.getElementsByTagName(`li`)) 
// document.getElementsByClassName - get multiple elements
// document.getElementById(`ID name`) - single element 
// document.querySelector(`.ID Name`)
// document.querySelector(`#Class Name`)
// // document.querySelector(`tag`)
// const List = document.getElementsByTagName(`li`)
// for (let i = 0; i<List.length; i++) {
//     List[i].style.color = "blue"
//     List[i].textContent = `I am item index number ` + i
// }
// const heading = document.getElementById(`Heading1`)
// heading.textContent = `My new heading`
// heading.innerHTML = `Heading`

// ACTIVITY 1
const hide = document.getElementById('hide');
const utft = document.getElementById('utft');
hide.addEventListener('click', () => {
    if (utft.style.display === 'none') {
        utft.style.display = 'block';
        hide.textContent = 'Hide utft';
    } else {
        utft.style.display = 'none';
        hide.textContent = 'Show utft';
    }
});
utft.style.width = "500px"

// ACTIVTY 2
// const utft = document.getElementById(`utft`)
// const url = document.getElementById(`url`)
// const input = document.getElementById(`input`)
// url.addEventListener( `click`, () => {
//     utft.src = input.value
//     utft.style.width = "300px"
// }
// )

// ACTIVITY 3
const Heading1 = document.getElementById(`Heading1`)
const color = document.getElementById(`color`)
const update = document.getElementById(`update`)
update.addEventListener( `click`, () => {
    Heading1.style.color = color.value 
}
)

//ACTIVITY 4
const x = document.getElementById('xCoordinate')
const y = document.getElementById('yCoordinate')
 
let doc = document.addEventListener('click', (event) => {
    x.textContent = event.clientX 

})
let doc2 = document.addEventListener('click', (event) => {
    y.textContent = event.clientY
})    
