
let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")



// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
let leadsFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads"))


// Check if leadsFromLocalStorage is truthy
// If so, set myLeads to its value and call renderLeads()

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener('click', function(){
//  when click delete last item in localStorage and update the DOM
    console.log("swac");
    let deleteLastOne = leadsFromLocalStorage[leadsFromLocalStorage.length - 1]
    console.log(deleteLastOne);
    leadsFromLocalStorage.pop(deleteLastOne)
    renderLeads()
    console.log(leadsFromLocalStorage)

    
})




// deleteBtn.addEventListener('dblclick', function(){
    
//     // When clicked, clear localStorage, myLeads, and the DOM    
        
//         localStorage.clear()
//         myLeads= []
//         ulEl.innerHTML = " "
//         console.log("ya bish")
// })


// let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

// Log out the variable
// localStorage.clear()
console.log(leadsFromLocalStorage)


function getValue() {
    myLeads.push(inputEl.value)
    inputEl.value =" " 

     // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )  
    renderLeads()
    
    // To verify that it works:
    console.log( localStorage.getItem("myLeads") )

    renderLeads()
    
}

inputEl.addEventListener('keypress', pressedEnter)

function pressedEnter(pressed) {
    if (pressed.which === 13){
        getValue()
        console.log("Key Pressed")
        // console.log(myLeads)

        // console.log(myLeads)


        // Call the renderLeads() function

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
        listItems +=  `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
    `

    }
    ulEl.innerHTML = listItems
    // console.log(listItems);
}



