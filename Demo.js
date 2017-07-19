/**
 * Demo
 */
class Demo {
    /**
     * @param {String} name
     * @param {Array} steps
     */
    constructor(name, steps = []) {
        this.name = name;
        this.steps = steps;
        this.step = 0;

        this.load = this.load.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.next = this.next.bind(this);
        this.resize = this.resize.bind(this);

        addEventListener('load', this.resize);
        addEventListener('resize', this.resize);

        setTimeout(this.load, 0);
    }

    load() {
        if (typeof(parent.setDemo) === 'function') {
           parent.setDemo(this.name, this);
        } else {
            this.start();
            addEventListener('keypress', this.next);
        }
    }

    /**
     * Start
     */
    start() {
        this.step = 0;
    }

    /**
     * Stop
     */
    stop() {

    }

    /**
     * Next
     */
    next() {
        if (!this.hasNextStep()) {
            return false;
        }

        this.execute();

        return this.hasNextStep();
    }

    /**
     * Execute
     */
    execute() {
        this.steps[this.step++]();
    }

    /**
     * Has next step?
     *
     * @return {Boolean}
     */
    hasNextStep() {
        return this.step < this.steps.length;
    }

    /**
     * Resize body
     */
    resize() {
        document.body.style.width = `${window.innerWidth}px`;
        document.body.style.height = `${window.innerHeight}px`;
    }
}
