function GetMachineLocation(req, resp) {
  ClearBlade.init({ request: req });
  log("In GetMachineLocation!!");

  MachineLocationLibrary.getBinInventory().then(MachineLocationLibrary.notifyAdmin)
    .then(function (err) {
      if (err) {
        log("GetMachineLocation - in if");
        resp.error("Failed to fetch records")
      } else {
        log("GetMachineLocation - in else");
        resp.success("Admin has been notified");
      }
    })
    .catch(function (error) {
      log("GetMachineLocation - In catch");
      resp.error("error");
    });
}
