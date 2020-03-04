<template>
  <li :class="'slds-tabs_default__item ' + (tab.active ? 'slds-is-active':'')" @click="clickTab()" >
        <a class="slds-tabs_default__link">
          <span class="slds-tabs__left-icon">
            <span :class="'slds-icon_container slds-icon-standard-'+tab.icon" >
              <svg class="slds-icon slds-icon_small" aria-hidden="true">
                <use :xlink:href="$store.state.iconUrl + '/standard-sprite/svg/symbols.svg#'+tab.icon"></use>
              </svg>
            </span>
          </span>{{tab.description}}</a>
      </li> 
</template>

<script>
import {EventBus} from '../event-bus'
export default {
  props: ['tab'],
  methods: {
    clickTab () {
      if (this.tab.name === 'app-login' && (this.$store.state.credentials.clientId === '' || this.$store.state.credentials.clientSecret === '' ||
                                               this.$store.state.credentials.securityToken === '')) {
        let alertBox = {
          message: 'You must fill clientId and clientSecret',
          messageType: 'error'
        }
        EventBus.$emit('activateModal', alertBox)
        return
      }
      if (this.tab.name === 'flow-list' && this.$store.state.accessToken === '') {
        let alertBox = {
          message: 'You must login salesforce first',
          messageType: 'error'
        }
        EventBus.$emit('activateModal', alertBox)
        return
      }
      this.$emit('clearActiveTabs')
      this.tab.active = true
      EventBus.$emit('activeTabs', this.tab.name)
    }
  }
}
</script>

<style>

</style>