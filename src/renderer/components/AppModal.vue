<template>
    <div>
      <section class="slds-modal slds-fade-in-open">
        <div class="slds-modal__container">
          <header class="slds-modal__header">
            <button class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse" @click="closeModal()" title="Close">
              <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
                <use :xlink:href=" iconUrl + '/utility-sprite/svg/symbols.svg#close'"></use>
              </svg>
              <span class="slds-assistive-text">Close</span>
            </button>
            <h2 id="modal-heading-01" class="slds-modal__title slds-hyphenate">{{messageType}}</h2>
          </header>
          <div class="slds-modal__content slds-p-around_medium" id="modal-content-id-1">
            <p>{{message}}</p>
          </div>
        </div>
        </section>
        <div class="slds-backdrop slds-backdrop_open"></div>
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