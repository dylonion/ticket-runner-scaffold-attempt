<template>
<q-page
  padding
  class="flex flex-center">   
    <div class="q-pa-md absolute full-width full-height column">
      <div class="row q-mb-lg">
        <form-list />
        <active-form />
      </div>
      <q-scroll-area class="q-scroll-area-tasks">
      </q-scroll-area>
    </div> 
  </q-page>

</template>

<script>
  export default {
    name: 'PageIndex',
    data() {
      return {
      }
    },
    components: {
      'form-list' : require('components/FormList.vue').default,
      'active-form' : require('components/ActiveForm.vue').default
    }
  }
</script>

<style>
  .q-scroll-area-tasks {
    display: flex;
    flex-grow: 1;
  }
</style>