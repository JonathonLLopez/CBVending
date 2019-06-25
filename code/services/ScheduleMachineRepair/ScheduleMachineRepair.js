function ScheduleMachineRepair(req, resp) {

  var parameters = req.params;
  if(!parameters.VendingMachineID) {
    resp.error("Failed to provide valid VendingMachineID. Maintenance was not scheduled.");
  }
  if(!parameters.MaintenanceCode) {
    resp.error("Failed to provide valid MaintenanceCode. Maintenance was not scheduled.");
  }
  var msg = "Maintenance scheduled for vending machine: " + parameters.VendingMachineID +". Maintenance code:" + parameters.MaintenanceCode + ".";
  resp.success(msg);
}
