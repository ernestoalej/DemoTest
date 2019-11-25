export const state = () => ({

    nombre: 'Ernesto Contreras',
    capitulos: [],
    ofertas: [],
    capituloLoading: false,
    ofertaLoading: false
})

export const mutations = {

    CAMBIAR_NOMBRE(state, payload){

            state.nombre = payload;
    },

    SET_CAPITULO(state, payload){

        state.capitulos.push(payload);

    },

    SET_OFERTA(state, payload){

        state.ofertas.push(payload);

    },

    CLEAR_OFERTA(state){

        state.ofertas = []
    },

    SET_LOADING_CAPITULO(state, payload){

        state.capituloLoading = payload
    },
    SET_LOADING_OFERTA(state){
        // console.log("antes de state.ofertaLoading: ", state.ofertaLoading);
        state.ofertaLoading = !state.ofertaLoading

        // console.log("despues de state.ofertaLoading: ", state.ofertaLoading);
    },

    FILTRAR_SIN_NOMBRE(state){

        state.ofertas = state.ofertas.filter(o => o.nomOferta != '');
    }
}


export const actions = {

    
    getOfertasSinNombre({commit}, payload){

        commit("FILTRAR_SIN_NOMBRE");
    },

    cambiarNombre({commit}, payload){

        commit("CAMBIAR_NOMBRE", payload);
    },
    

    async getCapitulos({commit}){

     

        commit("SET_LOADING_CAPITULO")
        
 
        await this.$axios.get("http://localhost:5000/api/Capitulos")

 
        .then(res=> {
            
            res.data.forEach( ca => {

                const capitulo = {
                    codCapitulo: ca.codCapitulo,
                    idCapitulo: ca.idCapitulo,
                    tituloCapitulo: ca.tituloCapitulo
                };
                
                commit("SET_CAPITULO", capitulo)
                
            });
        
        }).catch(error => {

            console.log("Ha ocurrido un error", error);
        }).finally(

            commit("SET_LOADING_CAPITULO")
     
        )


    },

    async getOfertas({commit}, payload){

        commit("CLEAR_OFERTA")
        commit("SET_LOADING_OFERTA")

        console.log(payload);

        let urlOferta ="";

        if (payload == undefined || payload.nomOferta == undefined || payload.nomOferta == "" ){
            urlOferta = "http://localhost:5000/api/Ofertas?pageSize=100&pageIndex=1&orderColumn=codOferta&orderType=1"
        } else {

            urlOferta = `http://localhost:5000/api/Ofertas?pageSize=100&pageIndex=1&orderColumn=codOferta&orderType=1&filterColumn=nomOferta&filterValue=${payload.nomOferta}`
        }
    
        return await this.$axios.get(urlOferta)
        .then(res=> {

            var data = res.data.data;
            
            data.forEach( o => {

                const oferta = {
                    idOferta: o.idOferta_v2,
                    codOferta: o.codOferta,
                    nomOferta: o.nomOferta,
                    tituloCapitulo: o.tituloCapitulo
                };
               
         
                commit("SET_OFERTA", oferta)
                           
            }) 

        }).finally(error => { 

            commit("SET_LOADING_OFERTA")        
        })
    }
  
}

export const getters = {

    ofertasConNombre(state){

        return state.ofertas.filter(o => o.nomOferta != '')
        

    }, 
    getLoading(state){

        return state.ofertaLoading
        
    }


}

