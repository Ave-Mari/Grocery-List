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

<style lang="scss">
        section {
            display: flex;
            justify-content: space-around;
            padding-left: 56px;
            padding-right: 56px;
        }
        input {
            width: 234px;
            font-size: 16px;
            padding: 6px 6px 6px 11px;
            border: none;
            border-bottom: 2px solid #636fb0;
        }

        button {
            font-size: 18px;
            border: none;
            background: none;
            cursor: pointer;
            border-radius: 20px;
            padding-left: 9px;
            padding-right: 9px;

            &:hover {
                background: #5f4cbf;
                color: #fff;
            }
        }
    
</style>