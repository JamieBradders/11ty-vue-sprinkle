<template>
  <section>
    <div class="section" v-if="loading">
      <div class="sp sp-circle"></div>
    </div>

    <div v-else class="section">
      <div class="grid spaced">
        <div class="col-3">
          <img
            :data-src="launch.links.patch.small"
            alt="Lazy Image"
            class="is-lazy-js"
            width="250"
          />
        </div>

        <div class="col">
          <p>{{ launch.details }}</p>
          <ul>
            <li>Flight Number: {{ launch.flight_number }}</li>
            <li>Rocket: {{ launch.rocket }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LazyLoad from '../plugins/lazyload'

export default {
  data() {
    return { launch: null, loading: true }
  },

  mounted() {
    this.fetchLaunch()
  },

  methods: {
    async fetchLaunch() {
      const res = await fetch(`https://api.spacexdata.com/v4/launches/latest`)

      if (res.ok) {
        const json = await res.json()

        setTimeout(() => {
          this.launch = json
          this.loading = false

          this.$nextTick(() => {
            LazyLoad().update()
          })
        }, 2000)
      } else {
        alert('There was a problem acquiring mission data')
      }
    }
  }
}
</script>

<style scoped>
.section {
  padding: 2rem 0 3rem;
}
</style>
