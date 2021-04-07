import axios from 'axios'

const state = {
    partidosLst: [],
    politicosLst: []
}

const getters = {
    getPartidos: state => state.partidosLst,
    getPoliticos: state => state.politicosLst
}

const mutations = {
    setPartidot(state,partido){
        state.partidosLst.push(partido)
    },
    resetPartidos(state){
        state.partidosLst= []
    },
    setPoliticos(state,politico){
        state.politicosLst.push(politico)
    },
    resetPoliticos(state){
        state.politicosLst = []
    }
}

const actions = {
    getPartidos(context){
        return new Promise((resolve,reject) => {
            resolve
            reject
            const getUrl = "https://dadosabertos.camara.leg.br/api/v2/partidos?ordem=ASC&ordenarPor=sigla"
            axios.get(getUrl).then(function (resp){
                context.commit('resetPartidos')
                for (let i=0; i < resp.data.dados.length; i++){
                    context.commit('setPartidot',{id: resp.data.dados[i].id, nome: resp.data.dados[i].nome})
                }
            })
        })
    },
    getMembros(context,payload){
        for (let i=0; i<payload.length; i++){
            context.commit('resetPoliticos')
            axios.get(`https://dadosabertos.camara.leg.br/api/v2/partidos/`+ payload[i] + `/membros?dataInicio=2021-01-01&dataFim=2021-01-03`)
                .then(function (resp){

                    for (let i=0; i< resp.data.dados.length; i++){
                       console.log( resp.data.dados[i])
                        context.commit('setPoliticos', {nome: resp.data.dados[i].nome, partido:  resp.data.dados[i].siglaPartido, estado: resp.data.dados[i].siglaUf})
                    }
                })
        }
    }

}

export default {
    state,
    actions,
    getters,
    mutations
}