<template>
  <div>
      <project-number 
        :pnumber.sync="formToSubmit.name"
        ref="projectNumber" />
  </div>
</template>

<script>
export default {
    data() {
        return {
            formToSubmit: {
                pnumber: ''
            }
        }
    },
    methods: {
        submitForm() {
            let failCheck = false;
            this.$refs.forEach(function(item) {
                item.validate()
                if(item.hasError) {
                    failCheck = true
                }
            })
            if(!failCheck) {
                this.addForm(this.formToSubmit)
            }
        }
    },
    components: {
        'project-number' : require('components/FormElements/ProjectNumber.vue').default
    }
}
</script>

<style>

</style>