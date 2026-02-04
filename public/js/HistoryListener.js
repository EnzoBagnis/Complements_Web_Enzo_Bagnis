/**
 * HistoryListener class to display temperature history in a table format
 */
export class HistoryListener {
    /**
     * Initializes the HistoryListener
     */
    constructor() {
        this.tableBody = document.getElementById('historique-body');
        this.history = [];
    }

    /**
     * Updates the history table with new temperature data
     * @param {Object} data - The temperature data object
     * @param {number} data.temperature - The temperature value
     * @param {number} data.timestamp - The Unix timestamp
     */
    update(data) {
        this.history.push({
            temperature: data.temperature,
            timestamp: data.timestamp
        });
        this.render();
    }

    /**
     * Renders the history table with all stored data
     */
    render() {
        // Clear existing rows
        this.tableBody.innerHTML = '';

        // Add each history entry as a table row
        this.history.forEach(entry => {
            const row = document.createElement('tr');

            // Temperature cell
            const tempCell = document.createElement('td');
            tempCell.textContent = `${entry.temperature}°C`;

            // Time cell
            const timeCell = document.createElement('td');
            timeCell.textContent = this.formatTimestamp(entry.timestamp);

            row.appendChild(tempCell);
            row.appendChild(timeCell);
            this.tableBody.appendChild(row);
        });
    }

    /**
     * Formats a Unix timestamp to a readable time string
     * @param {number} timestamp - The Unix timestamp to format
     * @return {string} The formatted time string
     */
    formatTimestamp(timestamp) {
        if (!timestamp || isNaN(timestamp)) {
            return new Date().toLocaleTimeString('fr-FR', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
        }
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }
}