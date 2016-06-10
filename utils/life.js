var _ = require('lodash')

var generate = () => {
  var result = {}
  _.times(36, (i) => {
    result[i] = []
    _.times(36, () => {
      result[i].push(_.random(0, 35))
    })
  })
  return result
}

module.exports = {
  generate: generate
}
