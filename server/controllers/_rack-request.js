//============================
// Define the functions that will be called
// when someone accesses the route on our
// api
//=========

exports.rack = function(req, res, next) {
  if (req.body.dc == "CCG1"){
    res.status(200).json({
      "racks":[ "LV1", "LV2", "LV3"]
    });
  } else if (req.body.dc == "CCG2"){
    res.status(200).json({
      "racks":[ "LV3", "LV4", "LV5"]
    });
  } else {
    res.status(200).json({
      "racks":[ "LV7", "LV8", "LV9"]
    });
  }
}
