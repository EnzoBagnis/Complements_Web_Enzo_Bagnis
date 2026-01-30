export class TabManager {
    constructor() {
        this.tabs = document.querySelectorAll('[role="tab"]');
        this.tabpanels = document.querySelectorAll('[role="tabpanel"]');
        this.init();
    }

    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', (e) => this.handleTabClick(e));
            tab.addEventListener('keydown', (e) => this.handleTabKeydown(e));
        });
    }

    handleTabClick(event) {
        const tab = event.currentTarget;
        this.activateTab(tab);
    }

    handleTabKeydown(event) {
        const tab = event.currentTarget;
        let nextTab = null;

        if (event.key === 'ArrowRight') {
            nextTab = tab.nextElementSibling;
            if (!nextTab || nextTab.getAttribute('role') !== 'tab') {
                nextTab = this.tabs[0];
            }
        } else if (event.key === 'ArrowLeft') {
            nextTab = tab.previousElementSibling;
            if (!nextTab || nextTab.getAttribute('role') !== 'tab') {
                nextTab = this.tabs[this.tabs.length - 1];
            }
        }

        if (nextTab) {
            event.preventDefault();
            this.activateTab(nextTab);
            nextTab.focus();
        }
    }

    activateTab(tab) {
        this.tabs.forEach(t => {
            t.setAttribute('aria-selected', 'false');
            t.setAttribute('tabindex', '-1');
        });

        this.tabpanels.forEach(panel => {
            panel.classList.add('is-hidden');
        });

        tab.setAttribute('aria-selected', 'true');
        tab.removeAttribute('tabindex');

        const panelId = tab.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);
        if (panel) {
            panel.classList.remove('is-hidden');
        }
    }
}