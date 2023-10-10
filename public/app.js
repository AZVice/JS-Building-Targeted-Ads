// get user's data
// get user's coordinates
function getUserCoordinates(){
    let position = await new Promise = ((resolve, reject) => {navigator.geolocation.getCurrentPosition(resolve, reject)})
    return[position.coords.latitude, position.coords.longitude]
}


// get user's time
function getUserTime(){
    const currentTime = new Date()
    return currentTime.getHours()
}
getUserTime()


// helper functions
// check time of day
function getMeal(){
    const currenHour = getUserTime() //usercurrent hour 0-23
    if(currenHour > 0 && currenHour <= 11) return "breakfast"
    else if (currenHour > 11 && currenHour <=16) return "lunch"
    else if (currenHour > 16 && currenHour <=20) return "dinner"
    else return "late night snack"
}


// build ads
// build ad 1
function createAd1(){
    const meal = getMeal();
    let ad1div = document.querySelector(".ad1")
    let text = document.createElement("p")
    AdText.innerHTML = `we have the best ${meal} <strong>in town. Come and try us`
    ad1div.append(adtext)
}
createAd1()


// build ad 2
async function createAd2(){
    const UserCoords = await getUserCoordinates()
    let ad2div = document.querySelector(".ad2")
    let text = document.createElement("p")
    AdText.innerHTML = `we have the best ${meal} <strong>in town. Come and try us`
    ad1div.append(adtext)
}
createAd2()



// event listeners
// on load, build ads
