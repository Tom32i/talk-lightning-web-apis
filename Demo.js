/**
 * Demo
 */
class Demo {
    /**
     * @param {Array} steps
     */
    constructor(steps = []) {
        this.step = 0;
        this.steps = steps;

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.next = this.next.bind(this);
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

        console.log('next', this.hasNextStep());

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
}
