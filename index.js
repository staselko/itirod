const udp = require("dgram");
const server = udp.createSocket("udp4");
const stdin = process.openStdin();

const DISCONNECT = "exit";

let connectedPort;
const chatHistory = {};

const displayChatHistory = () => {
  console.clear();
  chatHistory[connectedPort].forEach((message) =>
    console.log(
      Object.keys(message)[0] + ": " + message[Object.keys(message)[0]]
    )
  );
};

console.log('\x1b[32m', 'Server is running');

stdin.once("data", (d) => {
  server.bind(d.toString().trim());

  stdin.addListener("data", (d) => {
    const inputLine = d.toString().trim();
    const { port, family, address: ipAddr } = server.address();
    switch (inputLine) {
      case '/exit':
        if (connectedPort) server.send(DISCONNECT, connectedPort, "localhost");
        connectedPort = null;
        console.clear();
        break;
      case '/port':
        console.log('Port is: ', port);
        break;

      case '/family':
        console.log('Family is: ',family);
        break;

      case '/address':
        console.log('Address is: ',ipAddr);
        break;

      default:
        if (inputLine.includes("/join") && inputLine.split(" ").length === 2) {
          connectedPort = inputLine.split(" ")[1];
        } else {
          if (connectedPort) {
            server.send(inputLine, connectedPort, "localhost");
            chatHistory[connectedPort] = [
              ...(chatHistory[connectedPort] || []),
              {
                [`Vanya`]: inputLine,
              },
            ];
            displayChatHistory();
          } else {
            console.log("No connections");
          }
        }
    }

  });

});