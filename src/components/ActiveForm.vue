<template>
  <div>{{this.active}}</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: mapState({
            active: state => state.activeForm
    })
}
</script>

<style>

</style>