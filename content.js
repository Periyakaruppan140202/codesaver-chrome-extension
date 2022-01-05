console.log('This is Content.js');
// let gotMessage = (message, sender, sendRes) => {
var btn = document.querySelector('#j_id_7t');
btn &&
  btn.addEventListener('click', () => {
    console.log('Clicked');
    const title = document
      .querySelector('#leftpane > div > div')
      .textContent.trim();
    const text = document
      .querySelector('#leftpane > div')
      .textContent.replace(/\s\s+/g, '\n\n')
      .trim();
    const code = document
      .querySelector('#editortxtCode > div.ace_scroller > div')
      .textContent.replace(/\s\s+/g, '\n\n')
      .trim();
    console.log(title, text, code);
    setTimeout(() => {
      if (
        document.querySelector('#successmsg > div.ui.label.green.big')
          .textContent == 'Great! Your code has passed.'
      ) {
        chrome.runtime.sendMessage({ title, text, code });
      }
    }, 10000);
  });
// };
// chrome.runtime.onMessage.addListener(gotMessage);
