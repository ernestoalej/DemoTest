<template>
    <div>
        
         <v-row justify="center">
    <v-dialog v-model="mostrarlocal" persistent max-width="600px">

      <v-card>
        <v-card-title>
          <span class="headline">Clientes </span>
        </v-card-title>

        <v-card-text>
            <b>clienteData:</b> {{clienteData}} 
            <br>
            <b>dataTest:</b> {{dataTest}}
            <br>
            <b>dataTestLocal:</b> {{dataTestLocal}}
            <br>
            <b>clienteDataLocal:</b> {{clienteDataLocal}}
            <br>
            <b> dataTestStringLocal: </b>: {{dataTestStringLocal}}
            <br>
            <b> dataTestString: </b>: {{dataTestString}}
                
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="clienteDataLocal.id" label="ID" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="clienteDataLocal.nombre" label="Nombre"></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="dataTestLocal.data" label="dataTest"></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="dataTestStringLocal" label="dataTestStringLocal"></v-text-field>
              </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cerrar()">Close</v-btn>
          <v-btn color="blue darken-1" text @click="cerrar()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
        
    </div>
</template>

<script>
export default {

    // data(){

    //     return {
    //         //clienteDataLocal: {}
    //         clienteDataLocal: this.clienteData
    //     }
    // },

    data() {
        return {
       
        }
    },
    // props: [
    //     // 'mostrar',
    //     // 'clienteData'

    // ],

    props: {
        mostrar:{
            type: Boolean,
            required: true
        },
        clienteData: {
            type: Object,
            required: true
        },
        dataTest: {
            type: Object,
            required: true
        },
        dataTestString: {
            type: String,
            required: true
        }

    },

    computed: {

        clienteDataLocal(){

             return this.clienteData             
        },

        mostrarlocal(){

            if (this.mostrar){
                this.showDialog()
            }

            return this.mostrar;
        },

        dataTestLocal(){
            return this.dataTest;
        },
        dataTestStringLocal: {

            get(){
                return this.dataTestString;
            },
            
            set(val){
                this.$emit("cambiarDataTestString", val)
            }
        }

    //  clienteDataLocal: {
    //     get(){

    //         return this.clienteData
    //     },

    //     set(val){

    //         this.$emit('dataEdited', val);
    //     }
    //  }
        
    },

    methods: {

        cerrar(){

            this.$emit('cerrar', true)
        },

        showDialog(){

            console.log("Se ha mostrado el dialogo");
        }
    }
}
</script>