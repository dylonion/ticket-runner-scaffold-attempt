<template>
  <div class="">
    <q-input
    outlined
    :value="pnumber"
    @input="$emit('update:pnumber', $event)"
    :rules="[val => isProjectNumber(val) || 'Product ID numbers should contain alphanumeric and period (.) characters only.']"
    autofocus
    ref="pnumber"
    label="Project ID"
    lazy-rules
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