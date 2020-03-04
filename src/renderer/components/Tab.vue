<template>

    <ul class="slds-tabs_default__nav centertab"  role="tablist">
      <tab-item @clearActiveTabs="clearTabs()" v-for="tab in tabs" :tab="tab" v-bind:key="tab.id"/>
    </ul>
   
</template>

<script>
import TabItem from './TabItem'
export default {
  components: {
    'tab-item': TabItem
  },
  data () {
    return {
      tabs: [
        {
          id: 1,
          description: 'Change Connection Properties',
          active: true,
          icon: 'calibration',
          name: 'app-settings'
        },
        {
          id: 2,
          description: 'Connect',
          active: false,
          icon: 'apex',
          name: 'app-login'
        },
        {
          id: 3,
          description: 'Process and Flow Bulk Delete',
          active: false,
          icon: 'flow',
          name: 'flow-list'
        }
      ]
    }
  },
  methods: {
    clearTabs () {
      this.tabs.forEach(tab => {
        tab.active = false
      })
    }
  }
}
</script>

<style>
  .centertab{
    justify-content: center
  }
</style>