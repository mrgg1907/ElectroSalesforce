<template>
    <div class="slds-page-header">
        <div class="slds-page-header__row">
          <div class="slds-page-header__col-title">
            <div class="slds-media">
              <div class="slds-media__figure">
                <span class="slds-icon_container slds-icon-standard-opportunity" title="opportunity">
                  <svg class="slds-icon slds-page-header__icon" aria-hidden="true">
                    <use :xlink:href="$store.state.iconUrl+'/assets/icons/standard-sprite/svg/symbols.svg#'+icon"></use>
                  </svg>

                </span>
              </div>
              <div class="slds-media__body">
                <div class="slds-page-header__name">
                  <div class="slds-page-header__name-title">
                    <h1>
                      <span class="slds-page-header__title slds-truncate" >{{title}}</span>
                    </h1>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['title', 'icon']
}
</script>
<style >

</style>