// async function fetchData(){
//     try{
//         // const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
//         let poke = (Math.floor(Math.random() * 1025)+1);
//         let poke1 = (Math.floor(Math.random() * 1025)+1);
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
//         const response1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke1}`);
//         if(!response.ok){
//             throw new Error("Could not able to Fetch Resource");
//         }
//         if(!response1.ok){
//             throw new Error("Could not able to Fetch Resource");
//         }
//         const data = await response.json();
//         const data1 = await response1.json();
//         const pokemonImage = document.getElementById("pokemonSprite");
//         const pokemonImage1 = document.getElementById("pokemonSprite1");
//         const pokemonSprite = data.sprites.front_default;
//         const pokemonSprite1 = data1.sprites.front_default;
//         pokemonImage.src = pokemonSprite;
//         pokemonImage.style.visibility = "visible";
//         pokemonImage1.src = pokemonSprite1;
//         pokemonImage1.style.visibility = "visible";
//         console.log(data);
//     }
//     catch(error){
//         console.error(error);
//     }
//  }

let PokemonName1 = "";
let PokemonHP1 = 0;
let PokemonAttack1 = 0;
let PokemonDefense1 = 0;
let PokemonSpeed1 = 0;
let PokemonWeight1 = 0;
let PokemonName2 = "";
let PokemonHP2 = 0;
let PokemonAttack2 = 0;
let PokemonDefense2 = 0;
let PokemonSpeed2 = 0;
let PokemonWeight2 = 0;
let player1 = 0
let player2 = 0;

async function fetchData1(){
    try{
        // const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        let poke = (Math.floor(Math.random() * 1025)+1);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
        if(!response.ok){
            throw new Error("Could not able to Fetch Resource");
        }
        const data = await response.json();
        const pokemonImage = document.getElementById("pokemonSprite");
        const pokemonSprite = data.sprites.front_default;
        pokemonImage.src = pokemonSprite;
        pokemonImage.style.visibility = "visible";
        document.getElementById("pokemonName").textContent = data.name;
        document.getElementById("pokemonHP").textContent = `HP - ${data.stats[0].base_stat}`;
        document.getElementById("pokemonAttack").textContent = `Attack - ${data.stats[1].base_stat}`;
        document.getElementById("pokemonDefense").textContent = `Defense - ${data.stats[2].base_stat}`;
        document.getElementById("pokemonSpeed").textContent = `Speed - ${data.stats[3].base_stat}`;
        document.getElementById("pokemonWeight").textContent = `Weight - ${data.stats[4].base_stat}`;
        PokemonName1 = data.name;
        PokemonHP1 = data.stats[0].base_stat;
        PokemonAttack1 = data.stats[1].base_stat;
        PokemonDefense1 = data.stats[2].base_stat;
        PokemonSpeed1 = data.stats[5].base_stat;
        PokemonWeight1 = data.weight;
        document.getElementById('player-2').disabled = false;
    }
    catch(error){
        console.error(error);
    }
}

async function fetchData2(){
    try{
        let poke = (Math.floor(Math.random() * 1025)+1);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
        if(!response.ok){
            throw new Error("Could not able to Fetch Resource");
        }
        const data = await response.json();
        const pokemonImage = document.getElementById("pokemonSprite1");
        const pokemonSprite = data.sprites.front_default;
        pokemonImage.src = pokemonSprite;
        pokemonImage.style.visibility = "visible";
        document.getElementById("pokemonName1").textContent = data.name;
        document.getElementById("pokemonHP1").textContent = `HP - ${data.stats[0].base_stat}`;
        document.getElementById("pokemonAttack1").textContent = `Attack - ${data.stats[1].base_stat}`;
        document.getElementById("pokemonDefense1").textContent = `Defense - ${data.stats[2].base_stat}`;
        document.getElementById("pokemonSpeed1").textContent = `Speed - ${data.stats[3].base_stat}`;
        document.getElementById("pokemonWeight1").textContent = `Weight - ${data.stats[4].base_stat}`;
        PokemonName2 = data.name;
        PokemonHP2 = data.stats[0].base_stat;
        PokemonAttack2 = data.stats[1].base_stat;
        PokemonDefense2 = data.stats[2].base_stat;
        PokemonSpeed2 = data.stats[5].base_stat;
        PokemonWeight2 = data.weight;
        document.getElementById('player-2').disabled = true;
        let result = calculateResult();
        if(result === 1){
            player1++;
            document.getElementById("outcome").textContent = "Player 1 WINS !!!";
            document.getElementById("outcome").style.display = "block";
            document.getElementById("player-1-score").textContent = `Player 1 = ${player1}`;
        }
        else if(result == -1){
            player2++;
            document.getElementById("outcome").textContent = "Player 2 WINS !!!";
            document.getElementById("outcome").style.display = "block";
            document.getElementById("player-2-score").textContent = `Player 2 = ${player2}`;
        }
        else{
            document.getElementById("outcome").textContent = "Its a Tie !!!";
            document.getElementById("outcome").style.display = "block";
        }
    }
    catch(error){
        console.error(error);
    }
}

function calculateResult(){
    let player1Sum = 0;
    let player2Sum = 0;
    player1Sum = PokemonHP1+PokemonAttack1+PokemonDefense1+PokemonSpeed1+PokemonWeight1;
    player2Sum = PokemonHP2+PokemonAttack2+PokemonDefense2+PokemonSpeed2+PokemonWeight2;
    console.log(player1Sum);
    console.log(player2Sum);
    if(player1Sum > player2Sum){
        return 1;
    }
    else if(player1Sum < player2Sum){
        return -1;
    }
    else
    return 0;
}