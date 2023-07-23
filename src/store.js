import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            productsList: []
        }
    },
    getters: {
        thisProduct: (state) => (productId) => {
            return state.productsList.find((product) => product.id === productId)
        }
    },
    mutations: {
        addProduct: (state, product) => {
            state.productsList.push({
                id: Math.random().toString(16).slice(2),
                product: product,
                completed: false
            })
        },
        markProduct: (state, productId) => {
            let productIndex = state.productsList.find(product => product.id === productId);
            if (productIndex) {
                productIndex.completed = true;
            }
            let productToEnd = state.productsList.splice(productIndex, 1)[0];
            state.productsList.push(productToEnd)

        }
    },
    
})

export default store;