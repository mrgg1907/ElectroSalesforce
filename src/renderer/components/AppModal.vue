<template>
    <div>
      <div :class="'slds-notify slds-notify_alert slds-theme_alert-texture slds-theme_'+messageType" role="alert">
  <span class="slds-assistive-text">info</span>
  <span class="slds-icon_container slds-icon-utility-user slds-m-right_x-small" title="Description of icon when needed">
    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
      <use xlink:href="iconUrl+'/utility-sprite/svg/symbols.svg#user'"></use>
    </svg>
  </span>
  <h2>{{message}}
    <a href="javascript:void(0);">Log out</a>
  </h2>
  <div class="slds-notify__close">
    <button class="slds-button slds-button_icon slds-button_icon-small slds-button_icon-inverse" @click="closeModal" title="Close">
      <svg class="slds-button__icon" aria-hidden="true">
        <use :xlink:href="$store.state.iconUrl+'/utility-sprite/svg/symbols.svg#close'"></use>
      </svg>
      <span class="slds-assistive-text">Close</span>
    </button>
  </div>
</div>
    </div>
</template>
<script>
export default {
  props: ['message', 'messageType'],
  methods: {
    closeModal () {
      this.$emit('closeModal')
    }
  },
  watch: {
    message (newValue, oldValue) {
      console.log('message geldi')
    }
  }
}
</script>

<style>

</style>