function isFilled (state, x, y) {
  let row = state.cells[y]
  return _.includes(row, x)
}

function countNeighbours (state, x, y) {
  let amount = 0
  if (isFilled(state, x - 1, y - 1)) amount++
  if (isFilled(state, x, y - 1)) amount++
  if (isFilled(state, x + 1, y - 1)) amount++
  if (isFilled(state, x - 1, y)) amount++
  if (isFilled(state, x + 1, y)) amount++
  if (isFilled(state, x - 1, y + 1)) amount++
  if (isFilled(state, x, y + 1)) amount++
  if (isFilled(state, x + 1, y + 1)) amount++

  return amount
}

function update (state) {
  let result = {}
  let rows = _.keys(state.cells)
  _.forEach(rows, (row) => {
    result[row] = []
    let cells = _.get(state.cells, row)
    _.forEach(cells, (cell) => {
      let alive = 0
      const count = countNeighbours(state, cell, row)
      if (cell > 0) {
        alive = count === 2 || count === 3 ? 1 : 0
      } else {
        alive = count === 3 ? 1 : 0
      }
      if (alive) {
        result[row].push(cell)
      }
    })
  })

  return result
}


let reducer = function (state, action) {
  switch (action.type) {
    case 'NEXT_GENERATION':
      return _.assign({}, state, {
        cells: update(state)
      })
    default:
      return state;
  }
}

export default reducer