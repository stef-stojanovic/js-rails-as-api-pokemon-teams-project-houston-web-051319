const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded', loadPage)

let arrayTrainers = []

function loadPage() {
    
    fetch(TRAINERS_URL)
        .then(function(response){
            return response.json()
        }).then(function(trainers){
            arrayTrainers = trainers
            createCards(trainers)
        })

    function createCards(array){
        array.forEach(function(trainer){
            let trainerCard = document.createElement('div')
            trainerCard.className = "card"
            trainerCard.setAttribute('data-id', `${trainer.id}`)
            trainerName = document.createElement('p')
            trainerName.innerText = `${trainer.name}`
            trainerCard.append(trainerName)
            let addButton = document.createElement('button')
            addButton.setAttribute('data-trainer-id', `${trainer.id}`)
            addButton.innerText = "Add Pokemon"
            // function addPokemon(){
            //     if (trainer.pokemons.length < 6){
            //         fetch(POKEMONS_URL)
            //         .then(function(response){
            //             return response.json()
            //         }).then(function(pokemonsAll){
            //             // index = Math.floor(Math.random()*pokemonsAll.length)
            //             trainer.pokemons.push(pokemonsAll[0])
            //         })
                    
            //     }}
            //     addButton.addEventListener('click', function(e){
            //         e.preventDefault()
            //         addPokemon()     
            //     })
                trainerCard.append(addButton)
                let list = document.createElement('ul')

                trainer.pokemons.forEach(function(pokemon){
                let listedItem = document.createElement('li')
                let releaseButton = document.createElement('button')
                listedItem.innerText = `${pokemon.nickname}` + ` (${pokemon.species})`
                releaseButton.className = "release"
                releaseButton.setAttribute('data-pokemon-id', `${pokemon.id}`)
                releaseButton.innerText = "Release"
                listedItem.append(releaseButton)
                releaseButton.addEventListener('click', function(e){
                    e.preventDefault()
                    listedItem.remove()})
                list.append(listedItem)
            })
                trainerCard.append(list)
                document.querySelector("main").append(trainerCard)

        })
    

    }

};

