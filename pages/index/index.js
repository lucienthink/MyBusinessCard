//index.js
import {connect} from '../../libs/wechat-weapp-redux'
import {changeCardList} from '../../actions/card'
import Api from '../../helpers/api'

const pageConfig = {
  onLoad: function() {
    Api.loadCardList(resp => {
      if(resp && resp.ret === 0){
        this.changeCardList(resp.data)
      }
    })
  },

  handleClickCard(e){
    const id = +e.target.id
    const url = `../card/card?id=${{id}}`
    wx.navigateTo({url})
  }
}

const mapStateToData = state => ({
  cardList: state.card.cardList
})

const mapDispatchToPage = dispatch => ({
  changeCardList: (data) => dispatch(changeCardList(data)),
})

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)
Page(nextPageConfig);