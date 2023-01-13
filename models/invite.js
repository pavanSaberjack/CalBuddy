const invites = [];

module.exports = class Invite {
    constructor(t) {
        this.title = t;
    }

    save() {
        invites.push(this);
    }

    static fetchAll() {
        return invites;
    }
}