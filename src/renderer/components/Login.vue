<template>
<div>
  <div v-show="isModalActive">
    <modal-app :messageType="messageType" :message="message" @closeModal="isModalActive=false"/>
  </div>

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
export default {
  components: {
    'modal-app': AppModal
  },
  data () {
    return {
      isModalActive: false,
      messageType: '',
      message: ''
    }
  },
  methods: {
    login () {
      EventBus.$emit('activatedSpinner')
      let jsforce = require('jsforce')
      let conn = new jsforce.Connection({
        clientId: this.clientId,
        clientSecret: this.clientSecret,
        loginUrl: this.credentials.isProdOrg ? 'https://login.salesforce.com' : 'https://test.salesforce.com',
        redirectUri: 'http://localhost'
      })
      conn.login(this.credentials.username, this.credentials.password + this.credentials.securityToken, (err, userInfo) => {
        EventBus.$emit('deActivatedSpinner')
        console.log(this)
        this.isModalActive = true
        if (err) {
          this.message = err
          this.messageType = 'ERROR'
          return console.error(err)
        }
        // Now you can get the access token and instance URL information.
        // Save them to establish connection next time.
        this.connection = conn
        console.log(this.connection)
        this.messageType = 'SUCCESS'
        this.message = 'Login Successful'
        console.log(conn.accessToken)
        console.log(conn.instanceUrl)
        // logged in user property
        console.log('User ID: ' + userInfo.id)
        console.log('Org ID: ' + userInfo.organizationId)
        // ...
      })
    }
  },
  created () {
    console.log('login oluştu')
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