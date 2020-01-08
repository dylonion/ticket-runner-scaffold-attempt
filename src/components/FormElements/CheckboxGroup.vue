<template>
    <div class="q-pa-lg">
        <q-option-group
            v-model="group"
            :options="options"
            color="green"
            type="checkbox"
            @input="$emit('update:answer', $event)"
        />
    </div>
</template>

<script>
    export default {
        props: ['answer'],
        data () {
            return {
                group: [],
                options: [
                    {
                    label: 'Option 1',
                    value: 'op1'
                    },
                    {
                    label: 'Option 2',
                    value: 'op2'
                    },
                    {
                    label: 'Option 3',
                    value: 'op3'
                    }
                ]
            }
        }
    }
</script>

<style>

</style>