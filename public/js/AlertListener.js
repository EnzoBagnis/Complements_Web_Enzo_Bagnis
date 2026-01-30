export class AlertListener {
    constructor() {
        this.element = document.getElementById('temp');
    }

    update(data) {
        if (data.temperature >= -10 && data.temperature < 0) {
            this.element.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
        } else if (data.temperature >= 30 && data.temperature <= 40) {
            this.element.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
        } else {
            this.element.textContent = "";
        }
    }
}