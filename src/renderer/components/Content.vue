<template>
<div>
   <div v-show="isModalActive">
    <app-modal :messageType="messageType" :message="message" @closeModal="isModalActive=false"/>
  </div>
 <div v-show="isSpinner" class="demo-only" style="height:6rem">
  <div class="slds-spinner_container">
    <div role="status" class="slds-spinner slds-spinner_medium slds-spinner_brand">
      <span class="slds-assistive-text">Loading</span>
      <div class="slds-spinner__dot-a"></div>
      <div class="slds-spinner__dot-b"></div>
    </div>
  </div>
</div>
 <div style="display:flex;justify-content:center">
   <component :is="activeTab"></component>
 </div>
</div>
 
</template>

<script>
import Login from './Login'
import { EventBus } from '../event-bus'
import Settings from './Settings'
import FlowList from './FlowList'
import AppModal from './AppModal'
export default {

  components: {
    'app-login': Login,
    'app-settings': Settings,
    'flow-list': FlowList,
    'app-modal': AppModal
  },
  data () {
    return {
      activeTab: 'app-settings',
      isSpinner: false,
      isModalActive: false,
      message: '',
      messageType: ''
    }
  },
  created () {
    EventBus.$on('activeTabs', (tabName) => {
      this.activeTab = tabName
    })

    EventBus.$on('activatedSpinner', () => {
      this.isSpinner = true
    })
    EventBus.$on('deActivatedSpinner', () => {
      this.isSpinner = false
    })
    EventBus.$on('activateModal', (message) => {
      console.log('data', message)
      this.isModalActive = true
      this.message = message.message
      this.messageType = message.messageType
    })
  }

}
</script>
<style>

</style>
<style>

</style>