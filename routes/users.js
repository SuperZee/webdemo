function _get(req, res) {
  res.end('get user');
}

function _post(req, res) {
  res.end('post to user');
}

module.exports.get = _get;
module.exports.post = _post;
