<template>
  <li :class="'slds-tabs_default__item ' + (tab.active ? 'slds-is-active':'')" @click="clickTab()" >
        <a class="slds-tabs_default__link">
          <span class="slds-tabs__left-icon">
            <span :class="'slds-icon_container slds-icon-standard-'+tab.icon" >
              <svg class="slds-icon slds-icon_small" aria-hidden="true">
                <use :xlink:href="iconUrl + '/standard-sprite/svg/symbols.svg#'+tab.icon"></use>
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
      console.log('asdas')
      this.$emit('clearActiveTabs')
      this.tab.active = true
      EventBus.$emit('activeTabs', this.tab.name)
    }
  }
}
</script>

<style>

</style>