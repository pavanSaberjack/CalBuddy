const { google } = require('googleapis');
const googleServices = require('../google-services/google-calendar-service');
const invites = [];

module.exports = class Invite {
    constructor(title, inviteId, requiredMemberEmailIds) {
        this.title = title;
        this.inviteId = inviteId;
        this.requiredMemberEmailIds = requiredMemberEmailIds
    }

    save() {
        // invites.push(this);
    }

    static fetchAll(cb) {

        googleServices.getMyEvents().then((list) => {
            cb(list);
        });

        // googleServices((list) => {
        //     cb(list);
        // })

        // googleServices.getMyEvents((list) => {
        //     this.invites.push(list);
        //     cb(list) ;
        // })        
    }
}