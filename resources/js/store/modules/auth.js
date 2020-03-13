export default {
  namespaced: true,

  state: {
    authUser: null,
    hasPasswordConfirmed: false
  },

  getters: {
    isGuest: state => state.authUser == null,
    isAuth: state => state.authUser && state.authUser.id > 0,
    isVerified: state => state.authUser && state.authUser.email_verified_at != null,
    hasPasswordConfirmed: state => state.hasPasswordConfirmed
  },

  actions: {
    setAuthUser ({commit}, user) {
      commit('authUser', user)
    },

    setConfirmPassword ({commit}) {
      commit('confirmPassword', true)
    },

    login ({dispatch}, credentials) {
      return new Promise((resolve, reject) => {
        axios.get('/airlock/csrf-cookie').then(() => {
          axios.post('/login', credentials)
            .then(() => {
              axios.get('/api/user').then(response => {
                dispatch('setAuthUser', response.data)
                resolve()
              })
            })
            .catch(error => {
              reject(error.response.data.errors)
            })
        })
      })
    },

    register ({dispatch}, data) {
      return new Promise((resolve, reject) => {
        axios.get('/airlock/csrf-cookie').then(() => {
          axios.post('/register', data).then(() => {
            axios.get('/api/user').then(response => {
              dispatch('setAuthUser', response.data)
              resolve()
            });
          }).catch(error => {
            reject(error.response.data.errors)
          })
        })
      })
    },

    sendResetLinkEmail ({}, email) {
      return new Promise ((resolve, reject) => {
        axios.get('/airlock/csrf-cookie').then(() => {
          axios.post('/password/email', email)
            .then(response => {
              resolve(response.data.message)
            }).catch((error) => {
              reject(error.response.data.errors)
            })
        })
      })
    },

    passwordReset ({dispatch}, credentials) {
      return new Promise ((resolve, reject) => {
        axios.get('/airlock/csrf-cookie').then(() => {
          axios.post('/password/reset', credentials)
            .then(() => {
              axios.get('/api/user').then(response => {
                dispatch('setAuthUser', response.data)
                resolve()
              })
            }).catch(error => {
              reject(error.response.data.errors)
            })
        })
      })
    },

    passwordConfirm ({dispatch}, password) {
      return new Promise ((resolve, reject) => {
        axios.post('/password/confirm', password)
          .then(() => {
            dispatch('setConfirmPassword')
            resolve()
          }).catch(error => {
            reject(error.response.data.errors)
          })
      })
    },

    passwordChange ({}, password) {
      return new Promise ((resolve, reject) => {
        axios.get('/airlock/csrf-cookie').then(() => {
          axios.put('/password', password)
            .then(response => {
              resolve(response.data)
            }).catch(error => {
              reject(error.response.data.errors)
            })
        })
      })
    },

    logout ({dispatch}) {
      axios.post('/logout')
      dispatch('setAuthUser', null)
    }
  },

  mutations: {
    authUser (state, user) {
      state.authUser = user
    },

    confirmPassword (state, status) {
      state.hasPasswordConfirmed = status
    }
  }
}