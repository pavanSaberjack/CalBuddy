const { google } = require('googleapis');
const googleServices = require('../google-services/google-calendar-service');
const events = [];

module.exports = class Event {
    constructor(title, description, eventId, start) {
        this.title = title;
        this.description = description
        this.eventId = eventId;
        this.start = start;
        // this.requiredMemberEmailIds = requiredMemberEmailIds
    }

    save() {
        events.push(this);
    }

    static fetchAll(cb) {
        googleServices.getMyEvents().then((calendarEvents) => {
            calendarEvents.map((calendarEvent, i) => {
                let title = calendarEvent.summary;
                let eventId = calendarEvent.id;
                let description = calendarEvent.description;
                let start = calendarEvent.start.dateTime || calendarEvent.start.date;
                const event = new Event(title, description, eventId, start);
                events.push(event);
            });
            cb(events);
        });   
    }
}