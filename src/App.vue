<template>
  <div id="app">
      <b-container fluid="sm" >
          <b-button class="mb-3" @click="pesquisaPartidos">Listar Partidos</b-button>
        <b-form-group
            label="Individual inline checkboxes">
          <b-form-checkbox
              v-for="partido in $store.getters.getPartidos"
              v-model="selected"
              :key="partido.id"
              :value="partido.id"
              name="flavour-4a"
              inline
          >
            {{ partido.nome }}
          </b-form-checkbox>
        </b-form-group>
        <b-button @click="lsMembros" class="mb-3"> Ver Membros </b-button>
        <b-table small responsive="sm" striped hover :items="$store.getters.getPoliticos" v-if="$store.getters.getPoliticos"></b-table>
      </b-container>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      partidos: [],
      selected: []
    }
  },
  methods:{
    pesquisaPartidos(){
      this.$store.dispatch('getPartidos')
    },
    lsMembros(){
      this.$store.dispatch('getMembros', this.selected)

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
