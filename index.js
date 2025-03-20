function findElementContainingTextDeep(selector, text) {
    return Array.from(document.querySelectorAll(selector)).find(element =>
        element.innerText.trim().includes(text)
    );
}

function sendEvent(eventData) {
    console.log("Sending event:", eventData);
}

(function () {
  const events = [
      { selector: '.radioButtonGroup_radioButton__1S1fy', textContent: 'Female', event: 'click' }
  ];

  if (events.length > 0) {
      function attachTracking(events) {
          events.forEach(({ selector, event, textContent }) => {
            const element = findElementContainingTextDeep(selector, textContent); 

            if (element) {
                element.addEventListener(event, function (e) {
                    console.log(e, `Event on element ${selector} with text ${textContent} has been triggered. Send event!`);
                    sendEvent({ event: 'ElementTriggered', elementText: textContent, timestamp: new Date().toISOString() });
                });
            } else {
                console.log(`Element with text "${textContent}" not found for selector: ${selector}`);
            }
          });
      }

      attachTracking(events);

      const today = new Date().toISOString().split("T")[0];
      sendEvent({ event: 'Initialization', timestamp: today });
  } else {
      console.log('No events to track.');
  }
})();
