
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputEl.addEventListener('keypress', pressedEnter)

function pressedEnter(pressed) {
    if (pressed.which === 13){
        console.log("Key Pressed")
        // console.log(myLeads)

        myLeads.push(inputEl.value)
        console.log(myLeads)


        // 2. Call the renderLeads() function
        renderLeads()
        inputEl.value =" " 

    }
}


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    console.log("save pressed");
    renderLeads()
    inputEl.value =" " 
    
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
    }
    ulEl.innerHTML = listItems
}



