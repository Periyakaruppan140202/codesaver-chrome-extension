console.log('This Background extension is running...!');

// function btnClicked(tab) {
//   chrome.tabs.sendMessage(tab.id, "start");
// }
// chrome.browserAction.onClicked.addListener(btnClicked);

let gotMessage = (message, sender, sendRes) => {
  let { title, text, code } = message;
  console.log('Successfully Downloading: ', title);
  var blob = new Blob(
    ['PROBLEM DESCRIPTION:\n\n', text, '\n\n\nYOUR CODE:\n\n', code],
    {
      type: 'text/plain',
    }
  );
  var url = URL.createObjectURL(blob);
  chrome.downloads.download({
    url: url,
    filename: `${title}.txt`,
  });
};

chrome.runtime.onMessage.addListener(gotMessage);
