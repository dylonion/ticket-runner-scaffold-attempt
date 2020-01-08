<template>
  <div class="">
    <q-input
    outlined
    :value="pnumber"
    @input="$emit('update:pnumber', $event)"
    :rules="[val => productNumber(val) || 'Please enter a 6 digit project ID number']"
    autofocus
    ref="pnumber"
    label="Product ID"
    class="col">
    </q-input>
  </div>
</template>

<script>
import { regPatterns } from '../../utils/regPatterns.js'

export default {
    props: ['pnumber'],
    methods: {
        ...regPatterns
    }
}
</script>