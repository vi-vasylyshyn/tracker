console.log("Tracker script loaded on another site!");


(function () {
  console.log("Tracker script loaded from file!");

  const EVENT_NAME = "dailyActivityReport";
  const today = new Date().toISOString().split("T")[0];

  // Get last sent date
  const lastSentDate = localStorage.getItem("lastEventSentDate");

  if (lastSentDate !== today) {
    sendEvent();
    localStorage.setItem("lastEventSentDate", today);
  }

  function sendEvent() {
    const eventData = {
      event: EVENT_NAME,
      timestamp: new Date().toISOString(),
      activity: "User engaged with the app",
    };

    console.log("Sending event:", eventData);
  }
})();

