<template>
    <section>
        <ul>
            <li
            v-for="product in productsList"
            :key="product.id"
            
            >
            <span :class="[product.completed ? 'completed' : 'uncompleted']">
                {{ product.product }}
            </span>
            <button
            @click="markAsCompleted(product.id)"
            >
                Done
            </button>
            </li>
        </ul>
    </section>

</template>

<script>
export default {
    name: "Products List",
    data() {
        return {
            productsList: this.$store.state.productsList
        }
    },
    methods: {
        markAsCompleted(productId) {
        this.$store.commit("markProduct", productId)
    }
    }
}

</script>