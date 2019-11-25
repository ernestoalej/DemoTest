<template>
    <div>
      
        <a
          v-bind:href="url"
          class="nav-link"
        >
            <slot></slot>
        </a>


    </div>
</template>

<script>
export default {
    
  props: [
      'url'
  ]

}
</script>