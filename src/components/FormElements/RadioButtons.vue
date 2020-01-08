<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
        <q-radio
            @input="$emit('update:answer', $event)"
            val="Yes"
            v-model="option"
            name="radio"
            label="Yes" />
        <q-radio
            @input="$emit('update:answer', $event)"
            val="No"
            v-model="option"
            name="radio"
            label="No" />
    </div>

    <div class="q-px-sm">
      Your selection is: <strong>{{ answer }}</strong>
    </div>
  </div>
</template>

<script>
export default {
    props: ['answer'],
    data() {
        return {
            option: ['opt']
        }
    }
}
</script>

<style>

</style>