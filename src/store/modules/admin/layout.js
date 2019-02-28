
const layout = {
  state: {
    collapsed: false
  },
  getters: {
    getterCollapsed (state) {
      return state.collapsed
    }
  },
  mutations: {
    mutationCollapsed (state) {
      state.collapsed = !state.collapsed
    }
  },
  actions: {
    actionCollapsed (context) {
      context.commit('mutationCollapsed')
    }
  }
}

export default layout
