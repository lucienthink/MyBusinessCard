const Redux = require('../libs/redux.js')
const combineReducers = Redux.combineReducers
import _ from '../libs/lodash.core.min'


const cardList = (state = [], action) => {
  switch (action.type){
    case 'CHANGE_CARD_LIST':
      return action.cardList
    default:
      return state
  }
}

const cardInfo = (state = [], action) => {
  switch (action.type){
    case 'CHANGE_CARD_INFO':
      return action.cardInfo
    default:
      return state
  }
}

module.exports = combineReducers({
  cardList,
  cardInfo
})