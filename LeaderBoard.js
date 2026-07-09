let firstName = document.querySelector('.firstName')
let lastName = document.querySelector('.lastName')
let country = document.querySelector('.country')
let score = document.querySelector('.score')
let addPlayer = document.querySelector('.addPlayer')
let container = document.querySelector('.container')


let requiredMsg = document.querySelector('.required') 

let playerInfo = []
let idCount = 0

const showDateTime = () => {
    const padZero = (num) => {
        return num < 10 ? '0' + num : num
    }
    const now = new Date()
    const year = now.getFullYear()
    const month = padZero(now.getMonth() + 1)
    const day = padZero(now.getDate())
    const hours = padZero(now.getHours())
    const minutes = padZero(now.getMinutes())

    return `${day}/${month}/${year} ${hours}:${minutes}`
}


function sortLeaderboard() {

    let cards = Array.from(document.querySelectorAll('.playerCard'))
    

    cards.sort((a, b) => {
        let scoreA = parseInt(a.querySelector('.playerScore').innerText)
        let scoreB = parseInt(b.querySelector('.playerScore').innerText)
        return scoreB - scoreA 
    })
    
    cards.forEach(card => container.appendChild(card))
}

function addPlayerCard(player) {
    let playerCard = document.createElement('div')
    playerCard.className = 'playerCard'
    playerCard.id = `player-${idCount}`
    
    playerCard.innerHTML = `
        <div class='playerNameAndDate'>
            <div class='name'>${player.firstName} ${player.lastName}</div>
            <p class='date'>${showDateTime()}</p>
        </div>
        <div class='playerCountry'>${player.country}</div>
        <div class='playerScore'>${player.score}</div>

        <div class='buttons'>
            <button class='button delete'><img src='Images/icons8-delete-24.png' alt='Delete'></button>
            <button class='button plusFive'>+5</button>
            <button class='button minusFive'>-5</button>
        </div>
    `
    container.append(playerCard)

    let deleteButton = playerCard.querySelector('.delete')
    deleteButton.addEventListener('click', (e) => {
        let cardToRemove = e.target.closest('.playerCard')
        cardToRemove.remove()
    })

    let minusFiveButton = playerCard.querySelector('.minusFive')
    minusFiveButton.addEventListener('click', (e) => {
        let scoreElement = playerCard.querySelector('.playerScore')
        let currentScore = parseInt(scoreElement.innerText)
        scoreElement.innerText = currentScore - 5
        sortLeaderboard() 
    })

    let plusFiveButton = playerCard.querySelector('.plusFive')
    plusFiveButton.addEventListener('click', (e) => {
        let scoreElement = playerCard.querySelector('.playerScore')
        let currentScore = parseInt(scoreElement.innerText)
        scoreElement.innerText = currentScore + 5
        sortLeaderboard() 
    })
    
    idCount++
}

// addPlayerCard({firstName: 'Paras', lastName: 'Dwivedi', country: 'India', score: '540'})
// addPlayerCard({firstName: 'Jane', lastName: 'Doe', country: 'USA', score: '620'})
// addPlayerCard({firstName: 'John', lastName: 'Smith', country: 'UK', score: '480'})
// addPlayerCard({firstName: 'Krishna', lastName: 'Panchwani', country: 'Italy', score: '380'})
// addPlayerCard({firstName: 'Ravi', lastName: 'Kishan', country: 'Pakistan', score: '260'})
// addPlayerCard({firstName: 'Jon', lastName: 'Wick', country: 'Australia', score: '500'})
// addPlayerCard({firstName: 'Messi', lastName: '', country: 'Jharkhand', score: '510'})
// addPlayerCard({firstName: 'Rambo', lastName: 'Desusa', country: 'Japan', score: '406'})

// sortLeaderboard()

addPlayer.addEventListener('click', () => {
    let fNameVal = firstName.value.trim()
    let lNameVal = lastName.value.trim()
    let countryVal = country.value.trim()
    let scoreVal = score.value.trim()

    if (!fNameVal || !lNameVal || !countryVal || !scoreVal) {
        requiredMsg.innerText = "All fields are required!"
        requiredMsg.style.color = "red"
        return 
    }

    requiredMsg.innerText = ""

    playerInfo.push({
        firstName: fNameVal,
        lastName: lNameVal,
        country: countryVal,
        score: scoreVal
    })
    
    addPlayerCard(playerInfo[playerInfo.length - 1])
    
    sortLeaderboard()

    firstName.value = ''
    lastName.value = ''
    country.value = ''
    score.value = ''
})