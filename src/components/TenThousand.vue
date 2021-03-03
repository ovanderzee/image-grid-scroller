<template>
  <form v-if="!count">
    <button type="button" v-on:click="fetchGallery">
      Explore "Color in Nature"
    </button>
  </form>
  <section v-if="count">
    <ImageCell
      v-for="photo in photos"
      v-bind:photo="photo"
      v-bind:key="photo.id"
    />
  </section>
</template>

<script>
import { gallery } from "../config"
import ImageCell from "./ImageCell.vue";

export default {
  name: "TenThousand",
  components: {
    ImageCell,
  },
  data () {
    return {
      count: 0,
      buildFetchUrl: () => {
        const searchPart = []
        Object.keys(gallery.search).forEach(prop => {
          searchPart.push(`${prop}=${gallery.search[prop]}`)
        })
        return `${gallery.path}?${searchPart.join('&')}`
      },
    }
  },
  methods: {
    fetchGallery () {
      const getPhotosUrl = this.buildFetchUrl()
      fetch(getPhotosUrl)
        .then(response => {
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
