<template>
<div>
    <h2>Tareas 2- vee-validate</h2>

    
    <ValidationObserver v-slot="{ invalid, validated }">

    <v-form>

        <v-row>

            <v-btn @click="toggle()">toogle required</v-btn>


            <v-col cols="12" md="4">

                <ValidationProvider rules="nombreArtista" v-slot="{ errors }">
                    <v-text-field
                        v-model="nombre"     
                        label="Nombre"           
                        :counter="10"                    
                    >
                        
                    </v-text-field>
                     <span>{{ errors[0] }}</span>
                </ValidationProvider>
                
            </v-col>

            
            <v-col cols="12" md="4">

                <ValidationProvider name="apellido" :rules="req=== 'yes' ? 'requiredIf:yes': ''" v-slot="{ errors }">                    
                    <v-text-field
                        v-model="apellido"     
                        label="Apellido"           
                        :counter="10"                    
                    >
                    
                </v-text-field>
                 <span>{{ errors[0] }}</span>
                </ValidationProvider>
                
            </v-col>

               <v-col cols="12" md="4">

                <ValidationProvider name="edad" rules="lengthBetween:3,6" v-slot="{ errors }">

                    <v-text-field
                        v-model="edad"     
                        label="Edad"                                      
                    >
                        
                    </v-text-field>
                     <span  class="error--text caption">{{ errors[0] }}</span>
                 </ValidationProvider>

            </v-col>

              <v-btn :disabled="invalid || !validated" class="primary">Guardar</v-btn>

      
        </v-row>

      

    </v-form>
        
    </ValidationObserver>
           
            
</div>
</template>


<script>

import { ValidationProvider,ValidationObserver,  extend } from 'vee-validate';


// Add a rule.
extend('nombreArtista', {
  validate: value => value != 'shakira' && value.length>=3,
  message: 'El nombre no está permitido' 
});


extend('lengthBetween', {
  validate: (value, { min, max }) => {
    const length = value && value.length;

    return length >= min && length <= max;
  },
  params: ['min', 'max'],
  message: 'The {_field_} length must be between {min} and {max}'
});


extend('requiredIf', {
  computesRequired: true,
  message: 'This field is required.',
  params: ['req'],
  validate: (value, { req }) => {
    const isEmpty = !!(!value || value.length === 0);
    const isRequired = req === 'yes';

    return {
      valid: !isRequired ? true : !isEmpty,
      required: isRequired
    };
  }
})


export default {

    data(){
        return {
            nombre: '',
            apellido: '',
            edad: '',
            req: 'yes'
        }
    },
    components: {
        ValidationProvider,
        extend,
        ValidationObserver
    },
    methods: {

         toggle() {
             this.req = this.req === 'yes' ? 'no' : 'yes';
        }
    }


    
}
</script>


