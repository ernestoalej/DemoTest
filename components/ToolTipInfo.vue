<template>
    <div  class="popover mt-n2" style="width: 450px">

         <transition name="slide-fade">

            <v-card width="400px" v-if="mostrarToolTip" @mouseenter="mostrarToolTip= true"> 

                <v-card-text>
                         
                    <table>

                        <tr>
                            <th width="250px">
                                Referencia 
                            </th>

                            <th>
                                Precio 
                            </th>                                                        
                        </tr>

                        <tr v-for="(item, i) in items" :key="i" @click="() => {}">
                            <td>
                                    {{item.title}}
                            </td>

                            <td>
                                    {{item.price}}
                            </td>
                        </tr>
                        
                    </table>
                </v-card-text>

            </v-card>
            
        
        </transition>

    </div>
</template>

<script>
export default {
        
    data(){

        return {
         
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

    props: [
        'mostrar'
      
    ],

    computed: {
        
        mostrarToolTip: {

            set(newValue) {
                
            },
                      
            get(){
                
                if (this.mostrar) {
                    this.setPosition();
                }

                return this.mostrar;
            },
            
        }
    },
    
    methods: {
        setPosition(){
               // Esta funcion permite posiciona la ventana.
               // Encontré que un componente que está dentro de otro este caso, 
                // El top de el siempre va a comentar dentro del padre, osea que top 0
                //  siempre va a ser el mismo top de padre.
                // Teniendo esto cuenta obtengo la referencia a elemento actual para obtener su ancho
                // y asi muevo la ventana par que quede al lado del elemento padre.
                   
                //  const top = this.$parent.$el.offsetTop;
                //  const left = this.$parent.$el.offsetLeft;

                //   const width = this.$parent.$el.clientWidth;
                //   const height = this.$parent.$el.clientHeight;

                  const width =  0;
                  const height = 0;

                 const popover = this.$el;

                 if (popover){

                    const postTop = 0;
                    const postleft = width
                     
                     popover.style.top = `${postTop}px` ;
                     popover.style.left = `${postleft}px` ;
                  }               
            }
    },

    mounted() {

        this.setPosition();
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
    transform: translateX(20px);
    opacity: 0;
    }

    /* .toolTip{
  background-color: red;      
    } */


.popover
{
   /* background-color: aqua; */
   position: absolute;
   z-index: 999;
   top: 0;
   left: 0
}

</style>