let replied = false;

function replyMessage() {
    if (!replied) {
        let name = document.getElementById("chatbox").value;
        document.getElementById("chatbox").value = '';

        // Adding user message
        let message = document.createElement("div");
        message.innerHTML = name;
        message.style.backgroundColor = "rgb(160, 160, 160)";
        message.style.position = "absolute";
        message.style.right = "0";
        message.style.width = "auto";
        message.style.fontSize = "1.4vw";
        
        if (window.matchMedia("(max-width: 480px) and (orientation:portrait)").matches) {
            message.style.fontSize = "3vw";
        }

        message.style.padding = "1vw"
        message.style.borderRadius = "1vw 1vw 0 1vw";
        message.style.margin = "0.5vw";
        message.style.marginTop = "0";
        message.style.marginRight = "0.8vw";
        message.style.color = "black";
        message.fontSize = "1vw"
        message.setAttribute("id", "new-usermessage-addition");
        message.classList.add('new-addition');
        document.getElementById("screen").append(message);

        if (name == '')
        name = "random person";

        // Adding reply to user message
        setTimeout(() => {
            let reply = document.createElement("div");
            reply.classList.add('text-message', 'new-addition');
            reply.innerHTML = `Nice to meet you, ${name}!`;
            reply.style.position = "absolute";
            reply.style.top = "21vw"
            reply.setAttribute("id", "new-message-addition");

            if (window.matchMedia("(max-width: 480px) and (orientation:portrait)").matches) {
                reply.style.top = "36vw";
            }

            reply.style.width = "auto";
            document.getElementById("screen").append(reply);
            replied = true;
        }, 2000);
    }
}