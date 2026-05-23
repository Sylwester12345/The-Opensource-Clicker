let clicks = 0
let if2xbought = false
let ifeverysecbought = false
let cursors = 0

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

    }  else if(if2xbought = true){
        setTimeout(() => {
              document.getElementById("DOUBLECLICK").textContent = "2 Times Clicks - 200 Clicks"
        }, 2000)
        document.getElementById("DOUBLECLICK").textContent = "You arleady bought it"
        
    }



    else if(clicks < 500){
        setTimeout(() => {
              document.getElementById("DOUBLECLICK").textContent = "2 Times Clicks - 200 Clicks"
        }, 2000)
        document.getElementById("DOUBLECLICK").textContent = "You dont have enough money"
        
    }
    

}

function PointEverySecound() {
    let howmanyclicksgenerates = cursors * 1
    clicks += howmanyclicksgenerates

    document.getElementById("MainLabel").textContent = "Clicks: " + clicks
    setTimeout(() => {
        PointEverySecound()
    }, 1000)
}


function ShopBuyACursor(){
    if (clicks >= 50 ){
        if (cursors >= 1){
            clicks -= 50
            cursors += 1
            document.getElementById("HowMuchCursors").textContent = "Cursors: " + cursors
            document.getElementById("EVERYSECOUND").textContent = "Bought!"
            
            setTimeout(() => {
                document.getElementById("EVERYSECOUND").textContent = "Buy A Cursor - 50 Clicks"
            }, 2000)
            document.getElementById("MainLabel").textContent = "Clicks: " + clicks
            
        } else {
            clicks -= 50
            cursors += 1
            document.getElementById("HowMuchCursors").textContent = "Cursors: " + cursors
            document.getElementById("EVERYSECOUND").textContent = "Bought!"
            setTimeout(() => {
                document.getElementById("EVERYSECOUND").textContent = "Buy A Cursor - 50 Clicks"
            }, 2000)
            document.getElementById("MainLabel").textContent = "Clicks: " + clicks
            PointEverySecound()
        }
    }
    else if(clicks < 50){
        setTimeout(() => {
              document.getElementById("EVERYSECOUND").textContent = "Buy A Cursor - 50 Clicks"
        }, 2000)
        document.getElementById("EVERYSECOUND").textContent = "You dont have enough money"
        
    }

}

