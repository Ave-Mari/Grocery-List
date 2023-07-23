<template>
   <section>
      <input type="text" v-model="product" @keydown.enter="addProductToList(product)" placeholder="Type your product here">
      <button v-if="product != ''" @click="addProductToList(product)">Add product</button>
        <button disabled v-else>Add product</button>
    </section>
</template>


<script>
export default {
    name: "Add Product",
    data() {
        return {
            product: ''
        } 
    },
    methods: {
        addProductToList(product) {
            this.$store.commit("addProduct", product);
            this.product = '';
        }
    }

  }
</script>