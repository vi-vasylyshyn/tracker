function findElementContainingTextDeep(selector, text) {
    let element;
    
    if (selector.startsWith('#')) {
        // Handle ID selector
        element = document.getElementById(selector.slice(1));
    } else if (selector.startsWith('.')) {
        // Handle class selector
        console.log(document.querySelectorAll(selector))
        element = Array.from(document.querySelectorAll(selector)).find(el =>
          el.innerText.trim().includes(text)
        );
    } else {
        // Handle any other type of selector
        element = Array.from(document.querySelectorAll(selector)).find(el =>
            el.innerText.trim().includes(text)
        );
    }

    return element;
}

function sendEvent(eventData) {
    console.log("Sending event:", eventData);
}

(function () {
  const events = [
      { selector: '.radioButtonGroup_radioButton__1S1fy', textContent: 'Female', event: 'click' }
  ];

  function attachTracking(events) {
      events.forEach(({ selector, event, textContent }) => {
        const element = findElementContainingTextDeep(selector, textContent); 
          console.log()

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

  // Only call the attachTracking function if there are events to track
  if (events.length > 0) {
      attachTracking(events);
  } else {
      console.log('No events to track.');
  }

  const today = new Date().toISOString().split("T")[0];
  sendEvent({ event: 'Initialization', timestamp: today });
})();
