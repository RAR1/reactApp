export default {
  namespace: 'count',
  state: {
    count: 0,
  },
  reducers: {
    addCount(state, action) {
      return {
        count: state.count+1
      }
    },
    delCount(state, action) {

      return {
        count: state.count-1
      }
    }
  },
  effects: {}
}
