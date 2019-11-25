<template>
    <div>

            <H1>Demo de Slots</H1> 


            <div v-for="(item, index) in users" :key = "index">

                    <navigation-link :url="item.url">
                        Your Profile
                    </navigation-link>


            </div>


       <MultipleSlots>
           
            <template v-slot:header>
                <h1 class="info">Este es el Header de mi componente. MultipleSlots</h1>
            </template>
            
            <template v-slot:footer>
                <h2 class="secondary">Este es el pie de página.</h2>
            </template>

            <!-- Si se quiere se más explicito se coloca default -->
            <template v-slot:default>
                <p>A paragraph for the main content.</p>
                <p>And another one.</p>
            </template>

            <!-- <h5>Si este texto está fuera de algun slot entonces se muestra en la sección por defecto.</h5> -->
        </MultipleSlots>

        <current-user>
            <template v-slot:default="slotProps">
               Cambio por Primer nombre:  {{ slotProps.user.firstName }}
               Edad:  {{ slotProps.user.edad }}
            </template>
        </current-user>


        <v-row>
            <v-col>
                <v-btn v-on:click="saludar()">Aceptar</v-btn>
            </v-col>
        </v-row>
                
    </div>
</template>

<script>

import NavigationLink from '~/components/DemoSlots/NavigationLink';

import MultipleSlots from '~/components/DemoSlots/MultipleSlots';

import CurrentUser  from "~/components/DemoSlots/CurrentUser";

export default {
    
    components:{
        NavigationLink,
        MultipleSlots,
        CurrentUser
    },

    data(){
        return {
            users: [
                {id: 1, name: 'Virginia', url: "/user/1"},
                {id: 2, name: 'Ernesto', url: "/user/2"},
                {id: 3, name: 'Victoria', url: "/user/3"},
            ]
           
        }
    
    },
    methods: {
        saludar(e){
            //alert('Hola');

            console.log(Object.keys);
        }
    }
}
</script>