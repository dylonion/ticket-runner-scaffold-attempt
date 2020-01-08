<template>
  <div>
    <project-number 
        :pnumber.sync="formToSubmit.name"
        ref="projectNumber" />
    <q-input 
        v-for="(item, index) in inputs"
        :key="index"
        outlined
        v-model="item.vModel"
        ref="introduction"
        label="Introduction"
        class="col"
        :rules="[val => isIntroduction(val) || 'Please enter five words or less.']"
    />
        <q-btn
            color="white"
            text-color="black"
            @click="addInput"
            label="Add Input" />  
    </div>
</template>

<script>
import { regPatterns } from '../../utils/regPatterns.js'

export default {
    data() {
        return {
            formToSubmit: {
                pnumber: '',
                introduction: ''
            },
            inputs: [
                {
                    vModel: ''
                }
            ]
        }
    },
    methods: {
        ...regPatterns,
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
        },
        addInput() {
            let newInput = {
                vModel: ''
            }
            this.inputs.push(newInput)
        }
    },
    components: {
        'project-number' : require('components/FormElements/ProjectNumber.vue').default
    }
}
</script>

<style>

</style>