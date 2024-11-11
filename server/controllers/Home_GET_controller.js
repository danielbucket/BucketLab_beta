const stub = require('../stubs/home_stub')

const GET_content = (req, res) => {
  res.status(200).json({...stub})
}

module.exports = {
  GET_content
}