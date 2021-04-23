<template>
  <form v-if="!count">
    <button type="button" v-on:click="fetchGallery">
      Explore "Color in Nature"
    </button>
  </form>
  <section v-if="count">
	<h2>{{photos.length}} Colors of Nature</h2>
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

      // add more references
      const max = 10000;
      do {
        this.photos = this.photos.concat(json.photos.photo)
      } while (this.photos.length < max)
      this.photos.splice(max, (this.photos.length - max));
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  border: 4px solid yellowgreen;
  padding: 8px 12px;
  background: none;
  border-radius: 2em;
  font-size: 16px;
}
button:hover {
  border-color: limegreen;
}
button:focus {
  border-color: gold;
  outline: none;
}
section {
  border-top: 4px solid yellowgreen;
  max-width: calc(1200px + 12em);
  margin: .5em auto;
}
</style>
