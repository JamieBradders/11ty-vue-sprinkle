<template>
  <section>
    <h2>Launchpad Information</h2>

    <div v-if="loading">Loading...</div>

    <div v-else>
      <p>{{ launch.details }}</p>
      <ul>
        <li>Flight Number: {{ launch.flight_number }}</li>
        <li>Rocket: {{ launch.rocket }}</li>
      </ul>

      <div class="grid spaced">
        <div class="col">
          <img :src="launch.links.patch.small" alt="Lazy Image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
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

      // If we are 'go' 😉
      if (res.ok) {
        const json = await res.json()

        setTimeout(() => {
          this.launch = json
          this.loading = false
        }, 2000)
      } else {
        alert('There was a problem acquiring mission data')
      }
    }
  }
}
</script>
