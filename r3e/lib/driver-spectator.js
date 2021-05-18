/*
* Sends a log to the /log API
*/
function sendLog(log) {
  const data = JSON.stringify({
    log: log,
  });

  const request = new XMLHttpRequest();

  request.open('POST', 'http://localhost:8080/log', true);
  request.setRequestHeader('Content-Type', 'application/json');

  request.send(data);
}

/*
* Updates spectator cam to target driver
*/
function updateCamera() {
  const targetDriver = {
    id: 5931666,
    name: "Bruno Brito"
  };

  r3e.getDriversInfo(function (data) {
    const driver = data.driversInfo
      .find(each => each.portalId === targetDriver.id || each.name === targetDriver.name);

    if (driver) {
      sendLog({
        event: 'setCamera.trackside',
        data: {
          driver: {
            name: driver.name,
            slotId: driver.slotId,
            portalId: driver.portalId
          }
        }
      });

      r3e.setCamera.trackside(driver.slotId);
    }
  });
}

(function tick() {
  setTimeout(tick, 10000);

  sendLog({
    event: 'tick'
  });

  updateCamera();
})();