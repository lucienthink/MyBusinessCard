const Redux = require('../libs/redux.js')
const combineReducers = Redux.combineReducers
const card = require('./card.js')

const todoApp = combineReducers({
  card,
})

module.exports = todoApp