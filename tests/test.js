var assert = require('chai').assert
var _ = require('lodash')
var life = require('../utils/life')

describe('random', () => {
  it('should generate an object w/ random numbers', () => {
    const state = life.generate()

    assert.equal(36, _.size(state))
  })
})
