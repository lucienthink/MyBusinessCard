import _ from '../libs/lodash.core.min'

const changeCardList = (cardList) => ({
  type: 'CHANGE_CARD_LIST',
  cardList
})

const changeCardInfo = (cardInfo) => ({
  type: 'CHANGE_CARD_INFO',
  cardInfo
})

module.exports = {
  changeCardList,
  changeCardInfo
}