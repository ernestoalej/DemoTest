<template>

 <v-dialog v-model="mostrar" persistent max-width="500">

      <!-- <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template> -->

    
      <v-card>
        <v-card-title class="headline primary white--text">Filtrar ofertas</v-card-title>
        <v-card-text class="mt-5">
         
                <v-text-field v-model="nomOfertaFiltrar" label="Escriba un nombre de oferta"></v-text-field>  
                
                                                             
         </v-card-text>
            

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="green darken-1" text @click="filtrarOfertas({ nomOferta: nomOfertaFiltrar })">Filtrar</v-btn>
          <v-btn color="red darken-1" text @click="cerrarVentana()">Cancelar</v-btn> 
        </v-card-actions>
      </v-card>
    </v-dialog>

</template>


<script>

import {mapActions} from 'vuex'

export default {

  data() {
    return {
        nomOfertaFiltrar: null
    }
  },

    props: [
        'mostrar'        
    ],

    methods: {

        ...mapActions(['getOfertas'])

        ,cerrarVentana(){

            this.$emit("cerrarfiltrar", false)
        },

        async filtrarOfertas(nomOferta){
        
           await  this.getOfertas(nomOferta)
            .catch(error => {

               if (error.response != undefined && error.response.status == 404){               
                 alert("No se han encontrado coincidencias");

               } else {
                  alert("Ha ocurrido un error: " + error);
               }
                                  
            })

            this.cerrarVentana();
        }
    }
}
</script>