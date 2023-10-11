let versions = {
    date: "today",
    ver : "0.8"
}

let drawerActivated = false
document.querySelector("#drawer").style.display = "none"

function showDrawer() {
    drawerActivated = !drawerActivated
    if (drawerActivated) {
        document.querySelector("#drawer").style.display = "block"
    } else {
        document.querySelector("#drawer").style.display = "none"
    }
}

document.getElementById("ftr").innerText = `
    ${versions.date}
    Copyright 2023 Secret1000
    Version ${versions.ver}

`
