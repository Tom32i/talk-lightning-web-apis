class BatteryMonitor {
    constructor(element) {
        this.element = element;
        this.manager = null;


        this.setManager = this.setManager.bind(this);
        this.display = this.display.bind(this);

        navigator.getBattery().then(this.setManager);

        console.log('BatteryMonitor', this);
    }

    setManager(manager) {
        this.manager = manager;

        this.manager.addEventListener('chargingchange', this.display);
        this.manager.addEventListener('chargingtimechange', this.display);
        this.manager.addEventListener('dischargingtimechange', this.display);
        this.manager.addEventListener('levelchange', this.display);

        this.display();
    }

    display() {
        const { charging, chargingTime, dischargingTime, level } = this.manager;

        this.element.innerHTML = [
            `<p><span>${charging ? '🔌' : '🔋'}</span> <progress value="${level}" max="1" style="width: 3em;"></progress></p>`,
            charging ? `<p>${(chargingTime / 60).toFixed()}min avant recharge complète</p>` : `<p>${(dischargingTime / 60).toFixed()}min de batterie restante</p>`,
        ].join('\r\n');
    }
}
