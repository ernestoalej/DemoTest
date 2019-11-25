<template>
    <div>

       <span>
            <slot v-bind:user="user">
                currrent-user: {{ user.lastName }}
            </slot>
        </span>

    </div>
</template>

<script>
export default {
    
    data(){
        return {
            user: {firstName: 'Ernesto', lastName: 'Contreras', edad: 36}
        }
    }

}
</script>