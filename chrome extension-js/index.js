
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")



function getValue() {
    myLeads.push(inputEl.value)
    inputEl.value =" " 
    renderLeads()
    
}

inputEl.addEventListener('keypress', pressedEnter)

function pressedEnter(pressed) {
    if (pressed.which === 13){
        getValue()
        console.log("Key Pressed")
        // console.log(myLeads)

        // console.log(myLeads)


        // 2. Call the renderLeads() function

    }
}

    
      
inputBtn.addEventListener("click", function() {
    getValue()
    // myLeads.push(inputEl.value)
    console.log(myLeads)
    console.log("save pressed");
    // renderLeads()
    // inputEl.value =" " 
    
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
    }
    ulEl.innerHTML = listItems
}



