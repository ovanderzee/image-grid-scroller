<template>
  <form v-if="!count">
    <button type="button" v-on:click="fetchGallery">
      Explore "Color in Nature"
    </button>
  </form>
  <section v-if="count">
    <h2>{{photos.length}} Colors of Nature</h2>
    <figure v-for="photo in photos" v-bind:key="photo">
      <img :src="photo.url" />
      <figcaption>{{photo.title}}</figcaption>
    </figure>
  </section>
</template>

<script>
import {gallery, photograph} from "../config"

export default {
  name: "TenThousand",
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
      buildPhotoUrl: (photo) => {
        const path = `${photo.server}/${photo.id}_${photo.secret}_m.jpg`
        return `${photograph.path}${path}`
      }
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
      this.photos.forEach(photo => {
        photo.url = this.buildPhotoUrl(photo)
      })

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
figure {
  display: inline-block;
  width: 240px;
  margin: 1em;
  vertical-align: top;
}
figure img {
  max-height: 240px
}
</style>
