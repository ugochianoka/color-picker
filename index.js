const colorPicker = document.getElementById("color-picker")
const colorMode = document.getElementById("color-mode")
const displayColor = document.getElementById("display-colors")
const submitColor = document.getElementById("submit")


submitColor.addEventListener("click", function(e){
    displayColor.innerHTML = ``
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.value.slice(1)}&mode=${colorMode.value}`)
    .then(response => response.json())
    .then(data => 
        data.colors.forEach(function(color){
            displayColor.innerHTML += `<div id="${color.hex.value}">
                                        <div style="background-color:${color.hex.value}"></div>
                                        <p class="hex-number">${color.hex.value}</p>
                                    `
            
        })
    )
})


console.log(colorPicker.value)
console.log(colorMode.value)

addEventListener("click", function(e){
    if(e.target.parentElement.id.includes("#")){
        navigator.clipboard.writeText(e.target.parentElement.id)
        alert("Copied: " + e.target.parentElement.id)
    }
})