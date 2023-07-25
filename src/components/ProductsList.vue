<template>
    <section>
        <ul>
            <li
            v-for="product in productsList"
            :key="product.id"
            :class="[product.completed ? 'completed' : 'uncompleted']"
            >
            <span>
                {{ product.product }}
            </span>
            <button
            v-if="!product.completed"
            @click="markAsCompleted(product.id)"
            >
                Done
            </button>
            <button 
            class="btn-disabled"
            v-else
            disabled
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

<style lang="scss">
    ul {
        padding-left: 0;
        list-style: none;
    }

    li {
        font-size: 20px;
        font-family: sans-serif;
        display: flex;
        width: 280px;
        justify-content: space-between;
        padding-left: 18px;
        padding-right: 18px;
        padding-top: 8px;
        padding-bottom: 8px;
        border-radius: 15px;
        margin-bottom: 7px;
    }

    .uncompleted {
        border: 3px dotted #108864;
        background: #cff3e2;
    }
    .completed {
        border: 3px dotted #5f6e8d;
        background: #aec1ed;

        span {
            text-decoration: line-through;
        }
    }

    .btn-disabled:disabled {
        &:hover {
            background: none;
            color: #646464;
            cursor: default;

        }
    }
</style>