exports.test = function(req, res, next) {
  var node_data = []
  var nodes = []
  nodes = req.body.node
  nodes.map(function(node){
    if (node == "Node1"){
        node_data.push([{"name": "Node1", "OS": "X", "age":26}])
    } else if (node == "Node2"){
      node_data.push([ {"name": "Node2", "OS": "Y", "age":28}])
    } else if (node == "Node3"){
      node_data.push([ {"name": "Node3", "OS": "Z", "age":24}])
    } else if (node == "Node4"){
      node_data.push([ {"name": "Node4", "OS": "A", "age":24}])
    } else if (node == "Node7"){
      node_data.push([ {"name": "Node7", "OS": "A", "age":29}])
    } else if (req.body.node == "Node9"){
      node_data.push([ {"name": "Node9", "OS": "A", "age":30}])
    } else {
      node_data.push([ {"name": "Node4", "OS": "A", "age":24}])
    }
  })

  res.status(200).json({
    "node_data": node_data
  });
}
