<template>
  <div class="">
    <q-input
    outlined
    :value="prefilled"
    @input="$emit('update:prefilled', $event)"
    ref="prefilled"
    label="Prefilled input sample"
    class="col">
    </q-input>
  </div>
</template>

<script>
import { regPatterns } from '../../utils/regPatterns.js'

export default {
    props: ['prefilled']
}
</script>