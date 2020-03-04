<template>
<div>

  <div class="slds-grid slds-grid_vertical padDiv">
    <div class="slds-form-element slds-col padDiv1" >
      <label class="slds-form-element__label" >Username</label>
      <div class="slds-form-element__control">
        <input type="text"  v-model="credentials.username" placeholder="Placeholder Text" class="slds-input" />
      </div>
    </div>
    <div class="slds-form-element slds-col padDiv1">
      <label class="slds-form-element__label" >Password</label>
      <div class="slds-form-element__control">
        <input type="password"  v-model="credentials.password" placeholder="Placeholder Text" class="slds-input" />
      </div>
    </div>
    <div class="slds-form-element">
      <button style="width:100%;height:100%" @click="login()" class="slds-button slds-button_brand">Login</button>
    </div>   
  </div>
</div>
</template>

<script>
import { EventBus } from '../event-bus'
import AppModal from './AppModal'
import { mapState } from 'vuex'
import store from '../store'
export default {
  components: {
    'modal-app': AppModal
  },
  data () {
    return {
      isModalActive: false
    }
  },
  computed: {
    ...mapState(['credentials'])
  },
  store,
  methods: {
    login () {
      EventBus.$emit('activatedSpinner')
      let jsforce = require('jsforce')
      let conn = new jsforce.Connection({
        clientId: this.credentials.clientId,
        clientSecret: this.credentials.clientSecret,
        loginUrl: this.credentials.isProdOrg ? 'https://login.salesforce.com' : 'https://test.salesforce.com',
        redirectUri: 'http://localhost'
      })

      conn.login(this.credentials.username, this.credentials.password + this.credentials.securityToken, (err, userInfo) => {
        EventBus.$emit('deActivatedSpinner')
        let alertMessage = {
          message: '',
          messageType: ''
        }
        if (err) {
          alertMessage.message = err
          alertMessage.messageType = 'error'
          return console.error(err)
        }
        alertMessage.message = 'Login Success'
        alertMessage.messageType = 'success'
        EventBus.$emit('activateModal', alertMessage)
        store.dispatch('setTokenAction', conn.accessToken)
        store.dispatch('setInstanceAction', conn.instanceUrl)
      })
    }
  }

}
</script>

<style>
 .padDiv{
   padding : 0px;
   width : 500px;
   height: 200px
 }
 .padDiv1{
   padding: 10px
 }
</style>