/*----------------------------------------------*
 | TABLEAUX / Exercice 6 / Retour sur map()
 *----------------------------------------------*
 |
 | OBJECTIF: comprendre comment on peut utiliser map()
 | pour obtenir un tableau de chaînes HTML, à partir
 | de chaînes simples
 */


// ------------- EXEMPLES, ne pas modifier ---------------

const theBeatles = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
const beatlesDivs = theBeatles.map(
  beatle => `<div class="beatle">${beatle}</div>`
)
console.log(`
  EXEMPLE - Génère une div avec la classe "beatle", pour chaque Beatle du tableau
`)
console.log(beatlesDivs)


// ----------------- EXERCICES ---------------------------

const theStones = ['Mick Jagger', 'Keith Richards', 'Ronnie Wood', 'Charlie Watts']
const stoneItems = [] // REMPLACER [] par ton code

console.log(`
  CODE - Génère un list item (li) avec la classe "stone" pour chaque Rolling Stone du tableau
`)
// Attendu:
// [
//   '<li class="stone">Mick Jagger is a Rolling Stone</li>',
//   '<li class="stone">Keith Richards is a Rolling Stone</li>',
//   '<li class="stone">Ronnie Wood is a Rolling Stone</li>',
//   '<li class="stone">Charlie Watts is a Rolling Stone</li>'
// ]
console.log(stoneItems)

if(typeof global !== 'undefined') {
  module.exports = { stoneItems }
}
