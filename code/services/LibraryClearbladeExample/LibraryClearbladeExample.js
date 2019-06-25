function LibraryClearbladeExample(req, resp) {
  ClearBlade.init({request: req});

  var query = ClearBlade.Query({collectionName: "Vending_Machines"});
  query.equalTo("machine_location_state", "TX");

  var fetchedDataCallback = function(err, data) {
    if(err) {
      resp.error("Error"); 
    } else {
      resp.success(data);
    }
  };

  var col = ClearBlade.Collection({collectionName: "Vending_Machines"});
  col.fetch(query, fetchedDataCallback);
}
