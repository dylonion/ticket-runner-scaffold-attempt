const state = {
    activeForm: {
        id: '',
        fields: {

        },
    },

}

const mutations = {
    setActiveForm(state, payload) {
        state.activeForm = payload
        console.log(state.activeForm)
    }
}

const actions = {
    setActiveForm({ commit }, payload) {
        commit('setActiveForm', payload)
    }
}

const getters = {
    getActiveForm: (state) => {
        return state.activeForm
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}