<template>
    <div>
        
        <h1>Tarea3</h1>

        <h5>editedItem:  {{editedItem}}</h5>
        <h5>Válido: {{valido}}</h5>
        <h5>nombreReq: {{nombreReq}}</h5>

        <v-form ref="form" v-model="valido">

        <v-row>
            <v-col colos="4">

                    <v-text-field
                        v-model="editedItem.nombre"
                        label="Nombre"
                        :rules="nombreReq ? reglaNombre: []"
                        required
                    >
                        

                    </v-text-field>

                    <v-btn @click="toggleRequerido()">toggle requerido</v-btn>

            </v-col>

            <v-col colos="4">

                <v-text-field
                    v-model="editedItem.password"
                    label="Password"
                    type="password"
                    :rules="reglaPassword"
                    :counter="6"                    
            >

                        
                </v-text-field>

            </v-col>

            <v-col colos="4">

                <v-text-field
                        v-model="editedItem.passwordConfirm"
                        label ="Confirmar contraseña"
                        type="password"
                        :rules="reglaPasswordConfirm"
                         
                >
                        
                    </v-text-field>

            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-btn :disabled="!valido" @click="guardar()">Guardar</v-btn>
            </v-col>
        </v-row>



        </v-form>

    </div>
</template>

<script>
export default {

    data(){
        return {

            editedItem: {
                nombre: '',
                password: '',
                passwordConfirm: ''
            },

            valido: false,
            nombreReq: true,

            reglaNombre: [
                v=> !!v  || 'El nombre es requerido'
            ],
            reglaPassword: [
                v => !!v  || 'El password es requerido',
                v =>  v.length > 5 || 'El password debe tener mínimo 6 caracteres'
            ],
            reglaPasswordConfirm: [
                v => !!v || 'El password es requerido',
                v => (v === this.editedItem.password || 'El password no coincide')
            ]
        }
    },
    methods: {
        
        guardar(){
            if (this.$refs.form.validate()) {
                alert('Datos válidos!')
            } else {
                 alert('Datos no válidos!')
            }
        },
        toggleRequerido(){
            
            this.nombreReq= !this.nombreReq;
            this.resetValidation();
            
        },
         reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
    }
    
}
</script>

