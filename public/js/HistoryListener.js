export class HistoryListener {
    constructor() {
        this.element = document.getElementById('historique');
        this.history = [];
    }

    update(data) {
        this.history.push(" " + data.temperature + "°C");
        this.element.textContent = this.history;
    }
}