const events = [];

module.exports = class Event {
    constructor(t) {
        this.title = t;
    }

    save() {
        events.push(this);
    }

    static fetchAll() {
        return events;
    }
}