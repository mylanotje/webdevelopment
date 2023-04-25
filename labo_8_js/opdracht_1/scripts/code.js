const birthday = new Date('2023-09-29');
const today = new Date();

// Bereken het verschil tussen de twee data in milliseconden
const diffTime = Math.abs(today - birthday);

// Converteer het verschil in milliseconden naar dagen
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

// Toon het aantal dagen in de console
console.log('Aantal dagen tot mijn verjaardag: ' + diffDays + ' dagen');