function LibraryHTTPExample(req, resp) {
  var requests = Requests();
  var options = {
    "uri": "https://google.com",
    "headers": {"Content-type": "application/json", "date": "Thurs, 23 May 2019 14:24:55 CMT", "Server": "nginx/1.2.1"},
  };

  requests.get(options, function(err, body) {
    if(err) {
      resp.error("Error is " + JSON.stringify(error));
    } else {
      resp.success("Success is " + JSON.stringify(body))
    }
  });
}
