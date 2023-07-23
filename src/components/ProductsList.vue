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
            <button>
                Done
            </button>
            </li>
        </ul>
    </section>

</template>

<script>

</script>