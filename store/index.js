import {api} from '../api/api'
import axios from 'axios'
export const state = () => ({
  authUser: null
})

export const mutations = {
  SET_USER (state, user) {
    state.authUser = user
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login ({ commit }, { username, password }) {
      const user = {username,password}
      var stateUser = null;
      const res = await api.post('/api/auth', { user})
      console.log(res.data)
      if(res.data === true){
        alert('login successful')
        await axios.post('/service/login',{username,password})
        stateUser = username;
      }else{
        alert('login failed')
        stateUser = null
      }
      commit('SET_USER', {username : stateUser})
      setTimeout('location.href="/judge"',0)
  },


  async logout ({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
  }

}