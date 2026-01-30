export class TemperatureDisplayListener {
    constructor() {
        this.element = document.getElementById('valeur');
    }

    update(data) {
        this.element.textContent = data.temperature + "°C";

        if (data.temperature >= -10 && data.temperature < 0) {
            this.element.className = "blue";
        } else if (data.temperature >= 0 && data.temperature < 20) {
            this.element.className = "green";
        } else if (data.temperature >= 20 && data.temperature < 30) {
            this.element.className = "orange";
        } else if (data.temperature >= 30 && data.temperature <= 40) {
            this.element.className = "red";
        }
    }
}