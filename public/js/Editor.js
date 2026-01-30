import { EventManager } from './EventManager.js';
import { TemperatureDisplayListener } from './TemperatureDisplayListener.js';
import { HistoryListener } from './HistoryListener.js';
import { AlertListener } from './AlertListener.js';

export class Editor {
    constructor() {
        this.events = new EventManager();
        this.temperatures = this.createRandomArray(20, -10, 40);
        this.currentIndex = 0;
    }

    getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    createRandomArray(size, min, max) {
        let array = [];
        for (let i = 0; i < size; i++) {
            array[i] = this.getRandomArbitrary(min, max);
        }
        return array;
    }

    start() {
        const temperatureDisplay = new TemperatureDisplayListener();
        const historyListener = new HistoryListener();
        const alertListener = new AlertListener();

        this.events.subscribe('temperatureChange', temperatureDisplay);
        this.events.subscribe('temperatureChange', historyListener);
        this.events.subscribe('temperatureChange', alertListener);

        setInterval(() => {
            this.events.notify('temperatureChange', { temperature: this.temperatures[this.currentIndex] });
            this.currentIndex++;
            if (this.currentIndex >= this.temperatures.length) {
                this.currentIndex = 0;
            }
        }, 2000);
    }
}