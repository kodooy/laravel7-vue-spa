<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Change Password</div>

          <div class="card-body">
            <div class="alert alert-success" role="alert" v-if="status">
                {{ status }}
            </div>

            <form @submit.prevent="passwordChange" novalidate>

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
                    Change Password
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
  data() {
    return {
      password: '',
      password_confirmation: '',
      status: '',
      errors: {}
    }
  },

  methods: {
    passwordChange () {
      this.$store.dispatch('auth/passwordChange', {
        password: this.password,
        password_confirmation: this.password_confirmation
      }).then(status => {
        this.password = ''
        this.password_confirmation = ''
        this.errors = {}
        this.status = status
      }).catch(errors => {
        this.errors = errors
      })
    }
  }
}
</script>