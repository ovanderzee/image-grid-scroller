<template>
  <form v-if="!count">
    <button type="button" v-on:click="fetchGallery">
      Explore "Color in Nature"
    </button>
  </form>
  <section v-if="count">
    <p
      v-for="photo in photos"
      v-bind:key="photo.id"
    >
      {{photo.title}}
    </p>
  </section>
</template>

<script>
import {gallery} from "../config"

export default {
  name: "TenThousand",
  data () {
    return {
      count: 0,
    }
  },
  methods: {
    fetchGallery () {
      const searchPart = []
      Object.keys(gallery.search).forEach(prop => {
        searchPart.push(`${prop}=${gallery.search[prop]}`)
      })
      const getPhotosUrl = `${gallery.path}?${searchPart.join('&')}`
      fetch(getPhotosUrl)
        .then(response => {
          console.log('response', response)
          return response.json()
        })
        .then(
          this.showPhotos
        )
        .catch(err => {
          console.error(`${getPhotosUrl} could not be processed; ${err}`)
        })
    },
    showPhotos (json) {
      this.count = json.photos.total
      this.photos = json.photos.photo
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
