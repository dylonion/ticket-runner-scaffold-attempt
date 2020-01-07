<template>
  <div class="">
    <q-input
    outlined
    :value="pnumber"
    @input="$emit('update:pnumber', $event)"
    :rules="[val => val > 0 && productNumber || 'Please enter a 9 digit project ID number']"
    autofocus
    ref="pnumber"
    label="Product ID"
    class="col">
    </q-input>
  </div>
</template>

<script>
import { patterns } from '../../utils/patterns.js'

export default {
    props: ['pnumber'],
    methods: {
        ...patterns
    }
}
</script>