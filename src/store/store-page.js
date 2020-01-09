const state = {
    notifyCount: 0,
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
    setNotifyCount(state, payload) {
        console.log('setNotifyCount: ', payload)
        payload === '-' ? (state.notifyCount = state.notifyCount - 1) : (state.notifyCount = state.notifyCount + 1)
    },
    setActiveForm(state, payload) {
        state.activeForm = payload
        console.log(state.activeForm)
    },
    updateActiveForm(state, payload) {
        Object.assign(state.activeForm.fields[payload.id], payload.updates)
    }
}

const actions = {
    setNotifyCount({ commit }, payload) {
        commit('setNotifyCount', payload)
    },
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
    },
    notifyCount: (state) => {
        return state.notifyCount
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}