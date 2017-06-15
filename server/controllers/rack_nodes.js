exports.node = function(req, res, next) {
  if (req.body.rack == "LV1"){
    res.status(200).json({
      "nodes":[ "Node1", "Node2", "Node3"]
    });
  } else if (req.body.rack == "LV4"){
    res.status(200).json({
      "nodes":[ "Node4", "Node5", "Node6"]
    });
  } else {
    res.status(200).json({
      "nodes":[ "Node7", "Node8", "Node9"]
    });
  }
}
