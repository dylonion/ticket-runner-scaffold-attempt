<template>
  <div>
    <project-number 
        :pnumber.sync="formToSubmit.pnumber"
        ref="projectNumber" />
    <prefilled 
        :prefilled.sync="formToSubmit.prefilled"
        ref="prefilled"
    />
    <radio-button
        :answer.sync="formToSubmit.answer"
        ref="radioButton"
    />
    <checkbox-group
        :answer.sync="formToSubmit.checkAnswer"
        ref="checkboxGroup"
    />
    <p>Options selected: {{ showOptions }}</p>
    <q-input 
        v-for="(item, index) in inputs"
        :key="index"
        outlined
        lazy-rules
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
                introduction: '',
                prefilled: 'Developed through a partnership between Medscape and',
                answer: '',
                checkAnswer: []
            },
            inputs: [
                {
                    vModel: ''
                }
            ]
        }
    },
    computed: {
        showOptions() {
            let answerString = []
            this.formToSubmit.checkAnswer.forEach((el)=>{
                answerString.push(el)
            })
            return answerString.join(', ')
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
        'project-number' : require('components/FormElements/ProjectNumber.vue').default,
        'prefilled' : require('components/FormElements/Prefilled.vue').default,
        'radio-button' : require('components/FormElements/RadioButtons.vue').default,
        'checkbox-group' : require('components/FormElements/CheckBoxGroup.vue').default
    }
}
</script>

<style>

</style>