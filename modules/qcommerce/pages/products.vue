<template>
    <div>
        <ProductsComponent/>        
    </div>
        
    
</template>
<script setup lang="ts">
import ProductsComponent from '../components/productsComponent.vue';

const router = ref(useRouter())
</script>