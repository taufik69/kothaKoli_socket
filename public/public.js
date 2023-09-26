const socket = io();

/**
 * todo : Enter a promt input filed
 */

let nam;
do {
  nam = prompt("Enter your name");
} while (!nam);

/**
 *  *get input Field using queryselector
 *
 */

const textbox = document.querySelector(".textbox");
const message_area = document.querySelector(".message_area");
textbox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    sendMessage(event.target.value);
    textbox.value = "";
  }
});

/**
 * todo : send messge machanism
 *
 */

function sendMessage(msg) {
  let msgobj = {
    user: nam,
    msg: msg,
  };

  /**
   * todo : append message in outgoing_message
   *  */

  appendMessge(msgobj, "outgoing_message");

  /**
   * todo : send msg to socket database
   */
  socket.emit("message", msgobj);
}

function appendMessge(msg, type) {
  const outgoing_message = document.createElement("div");
  let className = type;
  outgoing_message.classList.add(className, className);

  let markup = `
    <h5> ${msg.user} </h5>
    <p> ${msg.msg} </p>
  `;
  outgoing_message.innerHTML = markup;
  message_area.appendChild(outgoing_message);
}

/**
 *
 * todo: reciving message from server
 */

socket.on("message", (servermsg) => {
    appendMessge(servermsg, "incoming_message");
 
});

// function appendMessge2(msg, type) {
//   const incoming_message = document.createElement("div");
//   let className = type;
//   incoming_message.classList.add(className, className);

//   let markup = `
//       <h5> ${msg.user} </h5>
//       <p> ${msg.msg} </p>
//     `;
//   incoming_message.innerHTML = markup;
//   message_area.appendChild(incoming_message);
// }
