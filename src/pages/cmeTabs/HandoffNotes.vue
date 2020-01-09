<template>
  <div>
    <q-input
        filled
        label="Email (Vuelidate Test)"
        v-model="email"
        @input="$v.email.$touch()"
        :rules="[
            val => $v.email.required || 'Email is required',
            val => $v.email.email || 'Invalid email format'
        ]"
        ref="email"
        lazy-rules
    />
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
        label="Test word limit validation: 5 words"
        class="col"
        :rules="[val => isIntroduction(val) || 'Please enter five words or less.']"
    />
        <q-btn
            color="white"
            text-color="black"
            @click="addInput"
            label="Add Input" />  
        <q-btn
            color="white"
            text-color="black"
            @click="showErrors"
            label="Validate"
        />
        <div v-if="formToSubmit.error.length > 0">{{ formToSubmit.error }}</div>
    </div>
</template>

<script>
import { regPatterns } from '../../utils/regPatterns.js'
import { required, email } from 'vuelidate/lib/validators'
import { Notify } from 'quasar'
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            email: '',
            formToSubmit: {
                pnumber: '',
                introduction: '',
                prefilled: 'Developed through a partnership between Medscape and',
                answer: '',
                checkAnswer: [],
                error: ''
            },
            inputs: [
                {
                    vModel: ''
                }
            ]
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required
        }
    },
    computed: {
        ...mapGetters('activeForm', ['notifyCount']),
        showOptions() {
            let answerString = []
            this.formToSubmit.checkAnswer.forEach((el)=>{
                answerString.push(el)
            })
            return answerString.join(', ')
        }
    },
    methods: {
        ...mapActions('activeForm', ['setNotifyCount']),
        ...regPatterns,
        showErrors() {
            let testRef = this.$refs.projectNumber.$refs.pnumber
            testRef.validate()
            if(testRef.innerErrorMessage && testRef.innerErrorMessage.length && this.notifyCount <= 5){
                this.setNotifyCount('+')
                this.$q.notify({
                    message: 'Problem(s) Detected:',
                    caption: this.$refs.projectNumber.$refs.pnumber.innerErrorMessage,
                    icon: 'announcement',
                    closeBtn: 'X',
                    timeout: 5000,
                    onDismiss: () => {this.setNotifyCount('-')}
                })
            }
        },
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