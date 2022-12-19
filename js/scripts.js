// INIZIO

alert('Buongiorno utente!')

// Chiedi all'utente il suo nome
const nome = prompt("Qual è il tuo nome?");

console.log(nome)

console.log(typeof nome)


// Chiedi il suo cognome
const cognome = prompt("Qual è il tuo cognome?");

console.log('cognome');

console.log(typeof cognome);

// Chiedi il suo colore preferito
const colore = prompt("Qual è il tuo colore preferito?");

console.log('colore');

console.log(typeof colore);

// Scrivi sulla pagina nomecognomecolorepreferito21

// SOLUZ.1

// let password = nome + cognome + colore + 21;

// console.log(password);

// console.log(typeof password);


// document.getElementById('info').innerHTML=password;

// SOLUZ.2

document.write(nome + cognome + colore + "21");


// FINE

