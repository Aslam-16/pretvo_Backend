var DB = require("./schemaconnection");

function GetDocument(model, query, projection, extension, callback) {
  var query = DB[model].find(query, projection, extension.options);
  if (extension.populate) {
    query.populate(extension.populate);
  }
  if (extension.sort) {
    query.sort(extension.sort);
  }
  query.exec(function(err, docs) {
    if (extension.count) {
      query.count(function(err, docs) {
        callback(err, docs);
      });
    } else {
      callback(err, docs);
    }
  });
}
module.exports={GetDocument:GetDocument}