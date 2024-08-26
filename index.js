let homeTeamScore = 0
let guestTeamScore = 0
let homeScore = document.getElementById("homeScore-el")
// console.log(homeScore)
let guestScore = document.getElementById("guestScore-el")
// console.log(guestScore)

function addOneHome(){
    homeTeamScore = homeTeamScore + 1
    homeScore.textContent = homeTeamScore  
}

function addTwoHome(){
    homeTeamScore = homeTeamScore + 2
    homeScore.textContent = homeTeamScore
}

function addThreeHome(){
    homeTeamScore = homeTeamScore + 3
    homeScore.textContent = homeTeamScore
}

function addOneGuest(){
    guestTeamScore = guestTeamScore + 1
    guestScore.textContent = guestTeamScore
}

function addTwoGuest(){
    guestTeamScore = guestTeamScore + 2
    guestScore.textContent = guestTeamScore
}

function addThreeGuest(){
    guestTeamScore = guestTeamScore + 3
    guestScore.textContent = guestTeamScore
}