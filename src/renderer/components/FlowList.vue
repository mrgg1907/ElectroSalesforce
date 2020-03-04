<template>
  <div>
      <ul class="slds-has-dividers_around slds-has-block-links_space">
        
      </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
var jsforce = require('jsforce')
export default {
  data () {
    return {
      flowList: [],
      flowMap: new Map()
    }
  },
  computed: {
    ...mapState(['credentials'])
  },
  beforeCreate () {
    var conn = new jsforce.Connection({
      instanceUrl: this.$store.state.instanceUrl,
      accessToken: this.$store.state.accessToken
    })

    // status ve version number çekme
    conn.tooling.sobject('Flow')
      .find({ }, ['id', 'status', 'VersionNumber', 'MasterLabel'])
      .execute((err, records) => {
        if (err) { return console.error(err) }
        this.flowList = records
      })
  },
  created () {
    let flowOfVersion1 = []
    flowOfVersion1 = this.flowList.filter(flow => flow.VersionNumber === 1)
    for (let i = 0; i < flowOfVersion1.length; i++) {
      let array = this.flowList.filter(flow => flow.MasterLabel === flowOfVersion1[i].MasterLabel)
      this.flowMap.set(flowOfVersion1[i], array)
    }
    console.log('this.flowMap', this.flowMap)
    console.log('flowList', this.flowList)
  }
}
</script>

<style>

</style>