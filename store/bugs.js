export const state = () => ({
  list: []
})

export const getters = {
  getById: state => id => {
    return state.list.find(bug => bug.id === id)
  },
  getAll: state => {
    return state.list.slice().sort((x, y) => y.dateCreated - x.dateCreated)
  }
}

export const mutations = {
  add(state, bug) {
    const item = {
      ...bug,
      dateCreated: new Date(),
      id: state.list.length + 1
    }

    state.list.push(item)
  }
}
