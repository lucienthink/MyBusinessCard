//card.js
import {connect} from '../../libs/wechat-weapp-redux'
import {changeCardInfo} from '../../actions/card'
import Api from '../../helpers/api'

const pageConfig = {
  onLoad(opt){
    Api.loadCradInfo(opt.id, resp => {
      if (resp && resp.ret === 0) {
        this.changeCardInfo(resp.data)
      }
    })
  }
}

const mapStateToData = state => ({
  cardInfo: state.card.cardInfo
})

const mapDispatchToPage = dispatch => ({
  changeCardInfo: (data) => dispatch(changeCardInfo(data)),
})

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)
Page(nextPageConfig);