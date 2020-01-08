const state = {
    activeForm: {
        type: '',
        fields: {
            schemaField: {
                fieldName: '',
                fieldValue: ''
            }
        }
    },

}

const mutations = {
    setActiveForm(state, payload) {
        state.activeForm = payload
        console.log(state.activeForm)
    },
    updateActiveForm(state, payload) {
        Object.assign(state.activeForm.fields[payload.id], payload.updates)
    }
}

const actions = {
    setActiveForm({ commit }, payload) {
        commit('setActiveForm', payload)
    },
    updateActiveForm({ commit }, payload) {
        commit('updateActiveForm', payload)
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