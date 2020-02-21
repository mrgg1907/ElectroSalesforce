<template>
 <div id="app" style="display:block">
   <div> 
      <app-header  style="height:70px;" title="Salesforce Metadata Edit App" icon="opportunity"/>
   </div>
   <div>
      <app-main style="height:800px;background-color:white" />
   </div>
  
 </div>
</template>

<script>
import HeaderVue from './components/Header'
import MainPage from './components/MainPage'
import Tab from './components/Tab'
console.log('dasdasd')
export default {
  name: 'sfapp',
  components: {
    'app-header': HeaderVue,
    'app-main': MainPage,
    'app-tab': Tab
  }
}
</script>

<style>
  /* CSS */
</style>