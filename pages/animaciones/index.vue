<template>
    <div>
        
        <h1>Demo animaciones</h1>
      
        <button v-on:click="show = !show">
                Toggle
        </button>
        <transition name="fade">
                <p v-if="show">hello</p>
        </transition>


      <v-menu
        bottom
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            class="ma-2"
            v-on="on"
          >A Menu</v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="() => {}"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>
      <br><br><br>


      <!-- <v-btn @click="getReferenciaObj()">Get referencias</v-btn> -->
    
    <div>
        
        <v-row>
            <v-btn class="mt-10" id="btnTotalALejo2"  ref="reftotal2"  @mouseenter="mostrarReferencias2 = !mostrarReferencias2" @mouseleave="mostrarReferencias2=false"> 100 $
                  <ToolTipInfo :mostrar="mostrarReferencias2"></ToolTipInfo>      
            </v-btn>              
        </v-row>

        <v-row>          
            <v-btn class="mt-10" id="btnTotalALejo3"  ref="reftotal3"  @mouseenter="mostrarReferencias3 = !mostrarReferencias3" @mouseleave="mostrarReferencias3=false"> 100 $
                  <ToolTipInfo :mostrar="mostrarReferencias3"></ToolTipInfo>
            </v-btn>              
        </v-row>

        <v-row>
              <v-btn class="mt-10" id="btnTotalALejo"  ref="reftotal"  @mouseenter="mostrarReferencias = !mostrarReferencias" @mouseleave="mostrarReferencias=false"> 100 $
                  <ToolTipInfo :mostrar="mostrarReferencias"></ToolTipInfo>
              </v-btn>
        </v-row>

                                  
          
      </div>  


 
    </div>


    
</template>

<script>

import ToolTipInfo from '~/components/ToolTipInfo';

export default {
    data(){
        return {
            show: true,
            mostrarReferencias: false,
            mostrarReferencias2: false,
            mostrarReferencias3: false,
           
            items: [
            {
                title: '111 - PANCENTA DE CERDO', price: 10
            },
            {
                title: '112 - LOMO DE CERDO', price: 20
            },
            {
                title: '113 - TOCINO SUPERIOR', price: 5
            },
            {
                title: '114 - PICKING SEDIASA', price: 12
            },
            ]

        }
    },
     components: {
         ToolTipInfo
     },

     computed: {
          
     },

     methods: {

        getReferenciaObj() {

         const left = this.$refs.reftotal
         console.log(left) ;
                 
    }
     }
     
}
</script>


<style>


   
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 2s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(50px);
  opacity: 0;
}


    
</style>

