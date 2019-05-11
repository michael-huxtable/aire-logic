export const state = () => ({
  list: []
})

export const getters = {
  getById: state => id => {
    return state.list.find(bug => bug.id === id)
  }
}

export const mutations = {
  add(state, bug) {
    const sss = {
      ...bug,
      dateCreated: new Date(),
      id: state.list.length + 1
    }

    state.list.push(sss)
  }
}
