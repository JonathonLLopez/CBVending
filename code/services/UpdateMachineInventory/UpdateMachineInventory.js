function UpdateMachineInventory(req, resp) {
    ClearBlade.init({request:req});
    const vendingMachine = VendingMachine();
    if(!req.params.VendingMachineID || !req.params.MachineBinNumber || !req.params.Quantity){
      resp.error("Some Inventory Data is missing, please Check");
    }
    const inventoryData = req.params;
    vendingMachine.UpdateBinInventory(inventoryData)
    .then(function(data){
      var msg = "The inventory for bin number " + inventoryData.MachineBinNumber + "";
      msg += " in vending machine " + inventoryData.VendingMachineID + "";
      msg += " has been updated to " + data.updatedQuantity + ".";
        
        resp.success(msg);
    })
    .fail(function(errData){
        resp.error("An error occured updating machine inventory" + JSON.stringify(errData));
    });
}