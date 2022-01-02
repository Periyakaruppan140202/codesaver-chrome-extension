console.log("This is Content.js");
let gotMessage = (message, sender, sendRes) => {
  if (message === "start") {
    const title = document
      .querySelector("#leftpane > div > div")
      .textContent.replace(/\s\s+/g, "\n\n")
      .trim();
    const text = document
      .querySelector("#leftpane > div")
      .textContent.replace(/\s\s+/g, "\n\n");
    const code = document
      .querySelector("#rightpane > div")
      .textContent.replace(/\s\s+/g, "\n\n");
    console.log(title, text, code);

    chrome.runtime.sendMessage({ title, text, code });
  }
};
chrome.runtime.onMessage.addListener(gotMessage);
