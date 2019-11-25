<template>
    <div>
        <h1>
            Componente Hover test. Aquiiiii
       </h1>    

        <p> {{openOnHover }} </p>
    </div>
</template>

<script>

export default {

    name: 'TestHoverProp',
    
    props: {
          openOnHover: Boolean
    }
}
</script>