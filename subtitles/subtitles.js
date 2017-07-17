/**
 * Subtitles Demo
 */
class SubtitlesDemo {
    /**
     * Constructor
     *
     * @param {Element} video
     * @param {FormElement} form
     */
    constructor(video) {
        this.video = video;
        this.content = '';
        this.step = 0;
        this.track = null;
        this.cue = null;
        this.steps = [
            () => this.setContent('Tu connais pas sheraf ?'),
            () => this.setContent('C\'est un groupe, ils étaient number one.'),
            () => this.setAlign('right'),
            () => this.setAlign('left'),
            () => this.setAlign(),
            () => this.setSize(50),
            () => this.setSize(25),
            () => this.setSize(),
            () => this.setVertical('rl'),
            () => this.setVertical('lr'),
            () => this.setVertical(),
            () => {
                this.setLine(10);
                this.setPosition(25);
                this.setSize(50);
                this.setAlign('center');
            },
            () => {
                this.setLine(2);
                this.setPosition(70);
                this.setSize(30);
                this.setAlign('right');
            },
            () => {
                this.setLine();
                this.setPosition();
                this.setAlign();
                this.setSize();
            },
        ];

        this.onLoad = this.onLoad.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.next = this.next.bind(this);

        this.video.addEventListener('loadedmetadata', this.onLoad);

        this.video.volume = 0;
    }

    /**
     * On video loaded
     */
    onLoad() {
        this.track = this.video.addTextTrack('captions', 'English', 'en');
        this.track.mode = 'showing';
        this.cue = new VTTCue(0, 60 * 10, this.content);
        this.track.addCue(this.cue);
    }

    next() {
        if (!this.hasNextStep()) {
            return false;
        }

        this.hide();
        this.steps[this.step++]();
        this.show();

        return this.hasNextStep();
    }

    hasNextStep() {
        return this.step < this.steps.length;
    }

    stop() {
        this.step = 0;
    }

    hide() {
        this.track.mode = 'hidden';
    }

    show() {
        this.track.mode = 'showing';
    }

    setContent(content) {
        this.cue.text = content;
    }

    setAlign(align = 'center') {
        this.cue.align = align;
    }

    setSize(size = 100) {
        this.hide();
        this.cue.size = size;
        this.show();
    }

    setVertical(vertical = '') {
        this.cue.vertical = vertical;
    }

    setLine(line = 'auto') {
        this.cue.line = line;
    }

    setPosition(position = 'auto') {
        this.cue.position = position;
    }

    reload() {
        this.hide();
        this.show();
    }
}
