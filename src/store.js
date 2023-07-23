import { createStore } from 'vuex';

const store = createStore({ 
    state() {
        return {
            productsList: []
        }
    },
    getters: {},
    mutations: {
        addProduct: (state, product) => {
            state.productsList.push({
                id: Math.random().toString(16).slice(2),
                product: product,
                completed: false
            })
        },
    }


})

export default store;