class Notifier {
    constructor() {
        Notification.requestPermission();

        this.notify = this.notify.bind(this);
    }

    notify() {
        new Notification(
            'Hey!',
            { body: 'C\'est l\'heure de la notification !' }
        );
    }
}
