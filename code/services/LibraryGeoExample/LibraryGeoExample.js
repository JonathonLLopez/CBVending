function LibraryGeoExample(req, resp) {
  var geoObj = new geo(’cartesian’);

  var pointWork = geoObj.Point(30.266703, -97.742862);
  var pointLittleField = geoObj.Point(30.267342, -97.741561);
  var pointAlamoparking = geoObj.Point(30.268213, -97.740469);

  var closetToWork = geoObj.Nearest(pointWork, [pointLittleField, pointAlamoparking], 1);
  resp.success(closetToWork);
}
