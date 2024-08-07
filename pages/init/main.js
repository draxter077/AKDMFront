import bodyDiv from "./comps/body/main.js"
function initPageAddFunctionsToButtons(){
}

export default function initMain(){
    const root = document.getElementById("root")
    root.innerHTML = bodyDiv()
    initPageAddFunctionsToButtons()
}