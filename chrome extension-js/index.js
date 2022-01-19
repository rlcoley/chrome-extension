let myLeads = []
let oldLeads = []


const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")


// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
let leadsFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads"))


// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


const tabs = [
    // {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBtn.addEventListener("click", function(){
        
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })    

})



function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems +=  `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
    `

    }
    ulEl.innerHTML = listItems
    // console.log(listItems);
}



deleteBtn.addEventListener('click', function(){

    console.log("swac");
    let deleteLastOne = leadsFromLocalStorage[leadsFromLocalStorage.length - 1]
    console.log(deleteLastOne);
    leadsFromLocalStorage.pop(deleteLastOne)
    // myLeads = []
    render(myLeads)
    console.log(leadsFromLocalStorage)
    if(leadsFromLocalStorage == 0){
        localStorage.clear()
    }
    
})



// deleteBtn.addEventListener('dblclick', function(){
    
//     // 3. When clicked, clear localStorage, myLeads, and the DOM    
        
//         localStorage.clear()
//         myLeads= []
//         renderLeads()
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
    render(myLeads)
    
    // To verify that it works:
    console.log( localStorage.getItem("myLeads") )

    render(myLeads)
    
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


