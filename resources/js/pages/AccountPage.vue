<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Account</div>

          <div class="card-body">
            Your address e-mail is verified.

            <div class="mt-2">
              <router-link :to="{name:'PasswordChange'}" class="btn btn-outline-secondary">
                Change Password
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>