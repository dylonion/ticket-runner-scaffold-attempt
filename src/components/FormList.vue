<template>
  <ul>
      <li
        v-for="(item, key) in this.tabs"
        :key="key"
        @click="setActive(item)"
        >{{ item }}</li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            tabs: [
                'Handoff Notes',
                'Course/CME Details',
                'Partner Details',
                'Product-Secific Info/Addons',
                'CME Post test',
                'Linked Learning Assessment',
                'Disclosures',
                'Abbreviations/References',
                'General Information',
                'Credits Available',
                'Collection Page Details',
                'Learning Objectives and KMI Map',
                'Interactivity Questions',
                'Content',
                'Related Links',
                'Additional Resources'    
            ]
        }
    },
    methods: {
        ...mapActions('activeForm', ['setActiveForm']),
        setActive(item) {
            this.setActiveForm(item)
        }

    }
}
</script>

<style>

</style>