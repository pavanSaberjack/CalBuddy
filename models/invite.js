const invites = [];

module.exports = class Invite {
    constructor(title, inviteId, requiredMemberEmailIds) {
        this.title = title;
        this.inviteId = inviteId;
        this.requiredMemberEmailIds = requiredMemberEmailIds
    }

    save() {
        invites.push(this);
    }

    static fetchAll() {
        return invites;
    }
}