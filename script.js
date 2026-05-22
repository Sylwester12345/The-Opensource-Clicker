let clicks = 0
let if2xbought = false
let ifeverysecbought = false

document.getElementById("clicknotification").style.visibility = "hidden"
function ClickFunction(){
    if (if2xbought == true) {
        clicks += 2
        document.getElementById("clicknotification").style.color = "white"    
        document.getElementById("MainLabel").textContent = "Clicks: " + clicks
        document.getElementById("clicknotification").style.visibility = "visible"

        setTimeout(() => {
            document.getElementById("clicknotification").style.visibility = "hidden"
            document.getElementById("clicknotification").style.color = "white"  
        }, 500)

        document.getElementById("clicknotification").style.visibility = "visible"
    } else{
    
        clicks += 1
        document.getElementById("clicknotification").style.color = "white"    
        document.getElementById("MainLabel").textContent = "Clicks: " + clicks
        document.getElementById("clicknotification").style.visibility = "visible"

        setTimeout(() => {
            document.getElementById("clicknotification").style.visibility = "hidden"
            document.getElementById("clicknotification").style.color = "white"  
        }, 500)

        document.getElementById("clicknotification").style.visibility = "visible"
    }
}


function Shop2XClick(){
    if (clicks >= 500 && if2xbought == false){
        clicks -= 500
        document.getElementById("MainLabel").textContent = "Clicks: " + clicks
        if2xbought = true
        document.getElementById("DOUBLECLICK").textContent = "Bought!"

    }
    else if(clicks < 500){
        setTimeout(() => {
              document.getElementById("DOUBLECLICK").textContent = "2X CLICK - 500 CLICKS"
        }, 2000)
        document.getElementById("DOUBLECLICK").textContent = "You dont have enough money"
        
    }
    else if(if2xbought = true){
        setTimeout(() => {
              document.getElementById("DOUBLECLICK").textContent = "2X CLICK - 500 CLICKS"
        }, 2000)
        document.getElementById("DOUBLECLICK").textContent = "You arleady bought it"
        
    }

}

function PointEverySecound() {
    clicks += 1
    document.getElementById("MainLabel").textContent = "Clicks: " + clicks
    setTimeout(() => {
        PointEverySecound()
    }, 1000)
}


function ShopPointEverySecound(){
    if (clicks >= 200 && ifeverysecbought == false){
        clicks -= 200
        ifeverysecbought = true
        document.getElementById("EVERYSECOUND").textContent = "Bought!"
        document.getElementById("MainLabel").textContent = "Clicks: " + clicks
        PointEverySecound()
    }
    else if(clicks < 200){
        setTimeout(() => {
              document.getElementById("EVERYSECOUND").textContent = "CLICK EVERY SECOUND - 200 CLICKS"
        }, 2000)
        document.getElementById("EVERYSECOUND").textContent = "You dont have enough money"
        
    }
    else if(if2xbought = true){
        setTimeout(() => {
              document.getElementById("EVERYSECOUND").textContent = "CLICK EVERY SECOUND - 200 CLICKS"
        }, 2000)
        document.getElementById("EVERYSECOUND").textContent = "You arleady bought it"
        
    }

}

