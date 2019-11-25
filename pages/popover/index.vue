<template>

  <div class="text-center">

    <v-menu        
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x      
    >
      <template v-slot:activator="{ on }">
        <span class="pr-5" @mouseenter="menu=true" @mouseleave="menu=false">$100</span>
      </template>

    
      <v-card>
        <v-list>
          <v-list-item>
    
            <v-list-item-content>
              <v-list-item-title>Jose Carlos Muños</v-list-item-title>
              <v-list-item-subtitle>Referencias trabajadas</v-list-item-subtitle>
            </v-list-item-content>

      
          </v-list-item>

        </v-list>

        <v-divider></v-divider>

    
        <v-card-actions>
          <v-spacer></v-spacer>

        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>


<script>
  export default {
    data: () => ({
      menu: false,
  
    }),
  }
</script>