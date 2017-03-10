import _ from '../libs/lodash.core.min'

import cardList from './cardList'
import cardInfo from './cardInfo'

const loadCardList = (callback) => {
  callback(cardList)
}

const loadCradInfo = (id, callback) => {
  callback(cardInfo)
}

module.exports = {
  loadCardList,
  loadCradInfo
}