<template>
    <div>
        

            <h1>Test hover</h1>

            <TestHoverProp open-on-hover></TestHoverProp>

    </div>
</template>

<script>
import TestHoverProp from '~/components/TestHover/TestHoverProp.vue';

export default {

    components: {
        TestHoverProp        
    },

    props: {
         openOnHover: Boolean
    },

    mounted(){
        
    }
}
</script>