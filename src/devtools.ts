chrome.devtools.panels.create("Three Dev Tool", "", "./panel.html");

// chrome.tabs.query({ currentWindow: true, active: true }, function (tabArray) {
//   console.log("tab: ", tabArray[0].id);

//   if (tabArray[0].id)
//     chrome.scripting.executeScript(
//       {
//         target: { tabId: tabArray[0].id },
//         files: ["./canvasSpy.js"],
//       },
//       () => { console.log('script executed') }
//     );
// });

