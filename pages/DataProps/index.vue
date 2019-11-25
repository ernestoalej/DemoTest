<template>
    <div>
            
        <AddEditCliente :mostrar="mostrarModal" :clienteData="clienteDataEdit" :dataTest="dataTest" :dataTestString="dataTestString"  v-on:cerrar="mostrarModal=!$event"  v-on:cambiarDataTestString="dataTestString=$event"></AddEditCliente>

        <h1>Test de Enviar datos con props y cambiar valor en la modal.</h1>

        <b>(Parent) clientes: </b> {{clientes}}
        <br>
        <b>(Parent) idClienteActual:</b> {{idClienteActual}}
        <br>
        <b>(Parent) clienteDataEdit:</b>  {{clienteDataEdit}}
         <br>
        <b>(Parent) dataTest:</b> {{dataTest}}
            <br>
         <b>(Parent) dataTestString: </b>: {{dataTestString}}


        <v-row class="mt-5">

            <v-col cols="4">
                <v-text-field v-model="idClienteActual" label="ID Cliente"></v-text-field>
            </v-col>

            <v-col cols="8">
                                     
                <v-btn @click="editar()" color="success">Editar</v-btn>
            </v-col>
        </v-row>

       
    </div>
</template>


<script>

import AddEditCliente from '~/components/DataProps/AddEditCliente';


export default {
    
    data(){
        return {
            clientes: [
                {id: 1, nombre: 'Ernesto'},
                {id: 2, nombre: 'Virginia'},
                {id: 3, nombre: 'Victoria'},
                {id: 4, nombre: 'Carmen'},
                {id: 5, nombre: 'Yuleidy'},
                {id: 6, nombre: 'María'},
                {id: 7, nombre: 'Jehpyson'},
                {id: 8, nombre: 'Gabriel'},
                {id: 9, nombre: 'Leo'},
                {id: 10, nombre: 'Santy'},
                {id: 11, nombre: 'Junior'},
                {id: 12, nombre: 'Jesylain'}
            ],

            mostrarModal: false,
            clienteDataEdit: {},
            idClienteActual: '',
            dataTest: {},
            dataTestString: ''
            
        }
    },
    components: {AddEditCliente},

    methods: {
        editar(){

            const cliente = this.clientes.filter(c => c.id == this.idClienteActual);

            if (cliente.length){

                const payload= {
                    id: cliente[0].id,
                    nombre: cliente[0].nombre
                };

                this.dataTest = {data: 'Ernesto Contreras'}
                this.dataTestString= 'Alejandro'
                this.clienteDataEdit = payload;
                this.mostrarModal = true
    }
            }
            
    }
}
</script>