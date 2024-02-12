import {createStore} from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            account: {
                id: 0,
            }
        }
    },
    mutations: {
        setAccount(stat, playLoad) {
            stat.account.id = playLoad;
        }
    }
})

export default store;