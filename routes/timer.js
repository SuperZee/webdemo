function _get(req, res) {
  res.render('index');
}

function _post(req, res) {
  res.end('post to timer');
}

module.exports.get = _get;
module.exports.post = _post;
