export const state = () => ({
  list: []
})

export const mutations = {
  add(state, bug) {
    state.list.push(bug)
  }
}
