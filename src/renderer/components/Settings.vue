<template>
  <div class="slds-grid slds-grid_vertical padDiv">
    <div class="slds-form-element slds-col padDiv1" >
      <label class="slds-form-element__label" >Client Id</label>
      <div class="slds-form-element__control">
        <input type="text"  v-model="$store.state.credentials.clientId" placeholder="Placeholder Text" class="slds-input" />
      </div>
    </div>
    <div class="slds-form-element slds-col padDiv1">
      <label class="slds-form-element__label" >Client Secret</label>
      <div class="slds-form-element__control">
        <input type="text"  v-model="$store.state.credentials.clientSecret" placeholder="Placeholder Text" class="slds-input" />
      </div>
    </div>
    <div class="slds-form-element slds-col padDiv1">
      <label class="slds-form-element__label" >Security Token</label>
      <div class="slds-form-element__control">
        <input type="text"  v-model="$store.state.credentials.securityToken" placeholder="Placeholder Text" class="slds-input" />
      </div>
    </div>
   <div class="slds-form-element slds-col padDiv1">
      <div class="slds-form-element__control">    
      <span class="slds-checkbox slds-checkbox_standalone">
        <input type="checkbox" v-model="$store.state.credentials.isProdOrg" >
        <span class="slds-checkbox_faux"></span>
      </span>
       <label class="slds-form-element__label">Production</label>
      </div>
  </div>
  <div class="slds-form-element">
    <button style="width:100%;height:100%" class="slds-button slds-button_brand">Save</button>
  </div>
     
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState['credentials']
  }
}
</script>

<style>
 .padDiv{
   padding: 0px;
   width: 500px;
   height: 200px;
 }
 .padDiv1{
   padding: 10px;
 }
</style>