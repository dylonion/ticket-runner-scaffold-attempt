<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-primary"
    >
      <q-toolbar class="bg-secondary text-white shadow-2">
        <q-toolbar-title>
          <q-btn color="primary" :label="getActiveCategory.label">
            <q-menu content-class="bg-purple text-white" auto-close>
              <q-list style="min-width: 100px">
                <q-item 
                v-for="(cat, index) in categories"
                :key="cat.label"
                clickable
                @click="setActiveCategory(index)"
                >
                  <q-item-section>{{ cat.label }}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar-title>
      </q-toolbar>
      <q-list dark>
        <q-item
          v-for="nav in categories[getActiveIndex].navs"
          :key="nav.label"
          :to="nav.to"
          class="text-grey-4"
          exact
          clickable>
            <q-item-label> {{ nav.label }} </q-item-label>
            <q-linear-progress
              size="25px"
              :value="nav.progress"
              v-if="nav.progress > 0"
              color="accent">
                <div class="absolute-full flex flex-center">
                  <q-badge color="white" text-color="accent" :label="progressLabel(nav.progress)" />
                </div>
            </q-linear-progress>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MyLayout',
    data () {
      return {
        leftDrawerOpen: true,
        categories: [
          {
            label: 'Form1',
            defaultPage: 'form-one-start',
            active: false,
            navs: [
              {
                label: 'Handoff Notes',
                to: '/handoff-notes',
                progress: 0.1
              },
              {
                label: 'Cat 1, Nav 2',
                to: '/testpage',
                progress: 0.55
              }
            ]
          },
          {
            label: 'Form2',
            defaultPage: 'form-two-start',
            active: true,
            navs: [
              {
                label: 'Cat 2, Nav 1',
                to: '/',
                progress: 0.2
              },
              {
                label: 'Cat 2, Nav 2',
                to: '/testpage',
                progress: 0.6
              }
            ]
          },
          {
            label: 'Form3',
            defaultPage: 'form-three-start',
            active: false,
            navs: [
              {
                label: 'Cat 3, Nav 1',
                to: '/',
                progress: 0.9
              },
              {
                label: 'Cat 3, Nav 2',
                to: '/testpage',
                progress: 1.00
              }
            ]
          }
        ]
    }
  },
  methods: {
    ...mapGetters('test', ['']),
    setActiveCategory(category) {
      this.categories.forEach(el => el.active = false)
      this.categories[category].active = true
      this.$router.push(this.categories[category].defaultPage)
    },
    progressLabel(number) {
      return (number *100).toFixed(2) + '%'
    }
  },
  computed: {
    getActiveCategory() {
      return this.categories.find(el => el.active === true)
    },
    getActiveIndex() {
      return this.categories.indexOf(this.getActiveCategory)
    }
  }
}

</script>

<style>
  .q-router-link--exact-active {
    color: white !important;
    background-color: grey !important;
  }
</style>