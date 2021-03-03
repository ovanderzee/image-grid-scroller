<template>
  <figure>
    <img :src="buildPhotoUrl(photo)" />
    <figcaption>{{photo.title}}</figcaption>
  </figure>
</template>

<script>
import { photograph } from "../config"

export default {
  name: "ImageCell",
  data () {
    return {
      buildPhotoUrl: (photo) => {
        const path = `${photo.server}/${photo.id}_${photo.secret}_m.jpg`
        return `${photograph.path}${path}`
      },
    }
  },
  props: {
    photo: Object
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
