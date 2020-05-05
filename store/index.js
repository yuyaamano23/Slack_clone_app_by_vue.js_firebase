export const strict = false

export const state = () => ({
    // user: {
    //   email: 'test@example.com'
    // }
    user: null
})

export const getters = {
    isAuthenticated (state) {
        return !!state.user
    }
}

export const mutations = {
    setUser(state, user) {
        state.user = user
    }
}