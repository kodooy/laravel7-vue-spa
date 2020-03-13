<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            Confirm Password
          </div>

          <div class="card-body">
            Please confirm your password before continuing.

            <form @submit.prevent="passwordConfirm" class="mt-4">

              <div class="form-group row">
                  <label for="password" class="col-md-4 col-form-label text-md-right">
                    Password
                  </label>

                  <div class="col-md-6">
                    <input id="password" type="password" class="form-control" :class="{'is-invalid': errors.password}" name="password" required autocomplete="current-password" v-model="password">

                    <span class="invalid-feedback" role="alert" v-if="errors.password">
                      <strong>{{ errors.password[0] }}</strong>
                    </span>
                  </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">
                    Confirm Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isEmpty } from 'lodash'

export default {
  data () {
    return {
      password: '',
      errors: {}
    }
  },

  beforeCreate () {
    if (isEmpty(this.$route.params)) {
      this.$router.push({name:'Home'})
    }
  },

  methods: {
    passwordConfirm () {
      this.$store.dispatch('auth/passwordConfirm', { password: this.password })
        .then(() => {
          this.$router.push(this.$route.params.intended)
        }).catch(errors => {
          this.errors = errors
        })
    }
  }
}
</script>