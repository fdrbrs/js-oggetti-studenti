/* 
Istruzioni:
Creare un oggetto che descriva uno studente, con le seguenti proprietà:
nome,
cognome
età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
*/


//Istruzioni: Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome, età.
var studente01 = {
    nome : 'Shinji',
    cognome: 'Ikari',
    anni: '14'
}

//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
/* for (var key in studente01){
    document.getElementById('keys').innerHTML = key;
    document.getElementById('values').innerHTML = studente01[key];
    console.log(studente01[key]);
} */

var sectionEl = document.querySelector('section');

for (var key in studente01){
    sectionEl.insertAdjacentHTML('beforeend',`
    <p>${key}:</p>
    <p><strong>${studente01[key]}</strong></p>
    `)
}

//Creare un array di oggetti di studenti.

var arrayStudenti = [
    {
        nome: 'Rei',
        cognome: 'Ayanami'
    },
    {
        nome: 'Asuka',
        cognome: 'Langley-Soryu'
    },
    {
        nome: 'Toji',
        cognome: 'Suzuhara'
    },
    {
        nome: 'Suzuhara',
        cognome: 'Aida'
    },
    {
        nome: 'Hikari',
        cognome: 'Horaki'
    },
    {
        nome: 'Pen',
        cognome: 'Pen'
    },

]

//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

var studenteEl = document.getElementById('studenti');

for (var i = 0; i < arrayStudenti.length; i++){
    var studente = arrayStudenti[i];
    studenteEl.insertAdjacentHTML("beforeend",`
        <div  style="margin-top: 2rem">
            STUDENTE N.${i}
        </div>
        `)


    for (var key in studente){
        studenteEl.insertAdjacentHTML("beforeend",`
        <div>
            <div>${key}</div>
            <div><strong>${studente[key]}</strong></div>
        </div>
        `)
    }
}

//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

document.querySelector('button').addEventListener("click", function(){
    var nuovoStudente = {
        nome: '',
        cognome:'',
        anni: ''
    }

    nuovoStudente.nome = prompt('Inserisci il nome del nuovo studente');
    nuovoStudente.cognome = prompt('Inserisci il cognome del nuovo studente');
    nuovoStudente.anni = prompt('Inserisci l\'età del nuovo studente');

    arrayStudenti.push(nuovoStudente);

    studenteEl.insertAdjacentHTML("beforeend",`
        <div  style="margin-top: 2rem">
            STUDENTE N.${arrayStudenti.length - 1}
        </div>
        <div>
            <div>nome</div>
            <div><strong>${nuovoStudente.nome}</strong></div>
        </div>
        <div>
            <div>cognome</div>
            <div><strong>${nuovoStudente.cognome}</strong></div>
        </div>
        `)


})


