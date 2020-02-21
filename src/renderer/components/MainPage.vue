<template>
  <div >
    <div  style="height:12rem">
        <div class="table">
            <top-tab />
            <tab-content />
        </div> 
    </div>
  </div>
</template>

<script>
import Tab from './Tab'
import Content from './Content'

export default {
  components:
    {
      'tab-content': Content,
      'top-tab': Tab
    }
}
</script>

<style>
.table{
    width: 100%;
    display: block
}
</style>