<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            Verify Your Email Address
          </div>

          <div class="card-body">
            <div class="alert alert-success" role="alert" v-if="showStatus">
                A fresh verification link has been sent to your email address.
            </div>

            Before proceeding, please check your email for a verification link.
            If you did not receive the email,
            <button @click="verificationResend" class="btn btn-link p-0 m-0 align-baseline">
              click here to request another
            </button>.
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
      showStatus: false
    }
  },

  methods: {
    verificationResend () {
      axios.post('/email/resend').then(() => {
        this.showStatus = true
      })
    }
  }
}
</script>