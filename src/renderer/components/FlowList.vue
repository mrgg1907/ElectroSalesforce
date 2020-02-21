<template>
  <div>
      
  </div>
</template>

<script>
export default {
  data () {
    return {
      flowList: []
    }
  },
  beforeMount () {
    console.log('conn ', this.conn)
    /* var types = [{type: 'Flow', folder: null}]
    this.conn.metadata.list(types, '43.0', (err, metadata) => {
      if (err) { return console.error('err', err) }
      var meta = metadata[0]
      this.flowList = metadata
      console.log('metadata count: ' + metadata.length)
      console.log('createdById: ' + meta.createdById)
      console.log('createdByName: ' + meta.createdByName)
      console.log('createdDate: ' + meta.createdDate)
      console.log('fileName: ' + meta.fileName)
      console.log('fullName: ' + meta.fullName)
      console.log('id: ' + meta.id)
      console.log('lastModifiedById: ' + meta.lastModifiedById)
      console.log('lastModifiedByName: ' + meta.lastModifiedByName)
      console.log('lastModifiedDate: ' + meta.lastModifiedDate)
      console.log('manageableState: ' + meta.manageableState)
      console.log('namespacePrefix: ' + meta.namespacePrefix)
      console.log('type: ' + meta.type)
    }) */
  }
}
</script>

<style>

</style>