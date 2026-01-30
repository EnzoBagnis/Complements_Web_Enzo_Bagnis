function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function createRandomArray(size, min, max) {
    let A_tableau = [];
    for (let i = 0; i < size; i++) {
        A_tableau[i] = getRandomArbitrary(min, max);
    }
    return A_tableau;
}

let A_tableau = createRandomArray(20, -10, 40);
let A_historique = []
let O_element = document.getElementById('valeur');
let O_elementTemperature = document.getElementById('temp');
let O_elementHistorique = document.getElementById('historique');

let I_temp = 0;

function changeblock(){
    O_element.textContent = A_tableau[I_temp]+"°C";
    A_historique.push(" "+A_tableau[I_temp]+"°C")
    O_elementHistorique.textContent = A_historique;
    if (A_tableau[I_temp] >= -10 && A_tableau[I_temp] < 0) {
        //blue
        O_element.className= "blue";
        O_elementTemperature.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
    }
    if (A_tableau[I_temp] >= 0 && A_tableau[I_temp] < 20) {
        //green
        O_element.className= "green";
        O_elementTemperature.textContent = "";
    }
    if (A_tableau[I_temp] >= 20 && A_tableau[I_temp] < 30) {
        //orange
        O_element.className = "orange";
        O_elementTemperature.textContent = "";
    }
    if (A_tableau[I_temp] >= 30 && A_tableau[I_temp] < 40) {
        //rouge
        O_element.className= "red";
        O_elementTemperature.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
    }
    ++I_temp;
    if (I_temp === A_tableau.length - 1) {
        I_temp = 0;
    }

}



setInterval(() => { changeblock()},2000);