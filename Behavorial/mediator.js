var Participant = function(name) {
    this.name = name,
    this.chatroom = null;
}
 
Participant.prototype = {
    send: function(message,to) {
        this.chatroom.send(message, this, to);
    },
    receive: function(message,from) {
        console.log(from.name + "to" + this.name + "=>" + message);
    }
}

var chatroom = function () {
    var participants = {};

    return {
        register: function (participants) {

        }
    }
}