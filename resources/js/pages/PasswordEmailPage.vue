<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            Reset Password
          </div>

          <div class="card-body">

            <div class="alert alert-success" role="alert" v-if="status">
              {{ status }}
            </div>

            <form @submit.prevent="sendResetLinkEmail">

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">
                  E-Mail Address
                </label>

                <div class="col-md-6">
                  <input id="email" type="email" class="form-control" :class="{'is-invalid': errors.email}" name="email" autocomplete="email" autofocus required v-model="email">

                  <span class="invalid-feedback" role="alert" v-if="errors.email">
                    <strong>{{ errors.email[0] }}</strong>
                  </span>
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-primary">
                    Send Password Reset Link
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
  data () {
    return {
      email: '',
      status: '',
      errors: {}
    }
  },

  methods: {
    sendResetLinkEmail () {
      this.$store.dispatch('auth/sendResetLinkEmail', { email: this.email })
        .then(status => {
          this.email = ''
          this.errors = {}
          this.status = status
        }).catch(errors => {
          this.errors = errors
        })
    }
  }
}
</script>