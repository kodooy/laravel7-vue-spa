<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            Reset Password
          </div>

          <div class="card-body">
            <form @submit.prevent="passwordUpdate">

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">
                  E-Mail Address
                </label>

                <div class="col-md-6">
                  <input id="email" type="email" class="form-control" :class="{'is-invalid': errors.email}" name="email" autocomplete="email" required v-model="email">

                  <span class="invalid-feedback" role="alert" v-if="errors.email">
                    <strong>{{ errors.email[0] }}</strong>
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">
                  Password
                </label>

                <div class="col-md-6">
                  <input id="password" type="password" class="form-control" :class="{'is-invalid': errors.password}" name="password" autocomplete="new-password" autofocus required v-model="password">

                  <span class="invalid-feedback" role="alert" v-if="errors.password">
                    <strong>{{ errors.password[0] }}</strong>
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <label for="password-confirm" class="col-md-4 col-form-label text-md-right">
                  Confirm Password
                </label>

                <div class="col-md-6">
                  <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password" required v-model="password_confirmation">
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-primary">
                    Reset Password
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
export default {
  props: {
    token: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      email: this.$route.query.email,
      password: '',
      password_confirmation: '',
      errors: {}
    }
  },

  methods: {
    passwordUpdate () {
      this.$store.dispatch('auth/passwordReset', {
        token: this.token,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      }).then(() => {
        this.$router.push({name:'Home'})
      }).catch(errors => {
        this.errors = errors
      })
    }
  }
}
</script>