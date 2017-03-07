//index.js
const {connect} = require( '../../libs/wechat-weapp-redux.js' )
const {addTodo, setVisibilityFilter, toggleTodo} = require( '../../actions/index.js' )

const pageConfig = {
  data: {
    styles: {
      padding: '50rpx'

    },

    cards: [
      {
        type: 'text',
        data: {
          text: '我是测试text组建',
        },
        styles: {
          padding: '30rpx 70rpx'
        }
      },{
        type: 'image',
        data: {
          mode: 'scaleToFill',
          src: 'https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/0.jpg?t=201733',
        },
        styles: {
          width: '200px',
          height: '200px',
          backgroundColor: '#eee',
          padding: '10px'
        }
      }
    ],

    todos: [],
    filters: [ { key: 'SHOW_ALL', text: '全部' }, { key: 'SHOW_ACTIVE', text: '正在进行' }, { key: 'SHOW_COMPLETED', text: '已完成' }]
  },
  handleCheck: function( e ) {
    const id = parseInt( e.target.id )
    this.toggleTodo( id );
  },
  applyFilter: function( e ) {
    this.setVisibilityFilter( e.target.id )
  },
  onLoad: function() {
    console.log('on load')
  },
  onUnload: function() {
    console.log('on unload')
  }
}

const filterTodos = ( todos, filter ) => {
  switch( filter ) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter( t => t.completed )
    case 'SHOW_ACTIVE':
      return todos.filter( t => !t.completed )
    default:
      throw new Error( 'Unknown filter: ' + filter )
  }
}

const mapStateToData = state => ({
  todos: filterTodos( state.todos, state.visibilityFilter ),
  visibilityFilter: state.visibilityFilter
})

const mapDispatchToPage = dispatch => ({
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter)),
  toggleTodo: id => dispatch(toggleTodo(id)),
  addTodo: event => dispatch(addTodo(event.detail.value.todo)),
})

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)
Page(nextPageConfig);