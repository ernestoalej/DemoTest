<template>

<div>
  <v-row>
    <v-col>
        <h1 class="text-center primary--text">Página principal</h1>
        <h2>Autor: {{ nombre }}</h2>
      
        <v-btn medium color="primary" class="mt-10" @click="getOfertas()" :loading="ofertaLoading">Obtener ofertas</v-btn>
        <v-btn medium color="secondary" class="mt-10" @click="getOfertasSinNombre()" :disabled="ofertas.length == 0">Filtrar ofertas sin nombre</v-btn>

        <v-btn medium color="secondary" class="mt-10" @click="mostrarFiltrar = true" :disabled="ofertas.length == 0">Filtrar</v-btn>
    
        <FiltrarOfertas :mostrar = "mostrarFiltrar" v-on:cerrarfiltrar = "mostrarFiltrar= $event"></FiltrarOfertas>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12">      
        <v-card>

            <ul v-for="(oferta, index) in ofertas" :key="index">
              <li>
                  {{oferta.idOferta}} - {{oferta.nomOferta }}
              </li>
            </ul>
            
        </v-card>        
    </v-col>

   </v-row>
    
  </div>
</template>

<script>

import {mapActions, mapState, mapGetters} from 'vuex';

import FiltrarOfertas from '~/components/FiltrarOfertas.vue';


export default {

  data(){

    return {
      capituloLoad: false,
      mostrarFiltrar: false
    }
  },
  
  methods: {

    imprimir(e){
      console.log(e);
    },
 
      ...mapActions(['cambiarNombre', 'getCapitulos', 'getOfertas', 'getOfertasSinNombre']),
      
  },

  computed: {
         ...mapState(['nombre', 'capitulos','ofertas', 'capituloLoading', 'ofertaLoading']),
         ...mapGetters(['ofertasConNombre'])
  },
  components: {
    FiltrarOfertas
  }
 
}
</script>
