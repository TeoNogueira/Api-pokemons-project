const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

//slots do array + fill('') com strings vazias como argumento
//const generatePokemonPromises = () => Array(300).fill('').map((_, index) => { //return (fetch(getPokemonUrl(index + 1))
//.then(response => response.json()))
//})
//-----------------------------------------------------------------------------
// FIZ COM O LOOPING POR CAUSA DO ERRO DO SITE NO POKEMON 48, SOMENTE DUPLIQUEI POR CAUSA DESSE ERRO PULANDO O LOOPING Nº 48 ASSIM A APLICAÇÃO CONTINUOU 

const pokeArray  = []
const promiseImprovise = () => {
 
for(let i = 1; i <= 96; i++) {
   
 pokeArray.push(fetch(getPokemonUrl(i))
    .then(response => response.json()))

}


for(let i = 98; i <= 421; i++) {
   
  pokeArray.push(fetch(getPokemonUrl(i))
     .then(response => response.json()))
     
 }

}

promiseImprovise()

const generateHTML = pokemons => 
 pokemons.reduce((accumulator, pokemon) => {
      
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)

   accumulator += `
        <li class="card ${types[0]}">
        <img class="card-image " alt="${pokemon.name}" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"/>
        <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
        <p class="card-subtitle">${types.join(' | ')}</p>
        </li>
        `

   return accumulator
  
      }, '') 
  

  const insertPokemonsintoPage = pokemons => {
    const ul = document.querySelector('[data-js="pokedex"]')
      ul.innerHTML = pokemons
  }


// const pokemonPromises = promiseImprovise()// generatePokemonPromises()
 
 //Gerar caixa/espaçosDentroDela + mão + o item
 
Promise.all(pokeArray)
.then(generateHTML) //Gerar AS LISTAS (UL's CRIADAS)
.then(insertPokemonsintoPage) // Injetar na DOM




//CRIANDO ARRAY DE PROMISES:
//looping até 251, depois crio um array vazio, ponho o push para adicionar no final de um array, uso o fetch para pegar os dados de um local... juntamente com o link dentro do fetch... passo o argumento como parametro do incremento,
//trago a resposta de uma promise no caso o .then depois o parametro + json()

  //  for(let i = 1; i <= 390; i++) {
    //  
      //  pokemonPromises.push(fetch(getPokemonUrl(i))
       // .then(response => response.json()))

    //}
    

//Metodo join() retorna uma nova string com todos os itens do array concatenados e separados por virgula
//join() um argumento opcional que pode ser um separador

