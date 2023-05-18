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

var Chatroom = function () {
    var participants = {};

    return {
        register: function (participant) {
            participants[participants.name] = participant;
            participant.chatroom = this;
        },

        send: function (message, from, to) {
            if (to) {
                to.receive(messsage, from);
            } else {
                for(key in participants) {
                    if(participants[key] !== from) {
                        participants[key].receive(message, from);
                    }
                }
            }
        }
    }
}

function run() {
    var baljeet = new Participant("Baljeet");
    var friend = new Participant("friend");
    var monAmi = new Participant("monAmi");
    var meraDost = new Participant("meraDost");

    var chatroom = new chatroom();
    chatroom.register(baljeet);
    chatroom.register(friend);
    chatroom.register(monAmi);
    chatroom.register(meraDost);

    baljeet.send("Hello Guys");
    friend.send("hey man");
    monAmi.send("Long time",baljeet);
    meraDost.send("Where have you been all this time?", friend);
}

run();