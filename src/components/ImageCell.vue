<template>
  <figure>
    <div class="tile">
	  <img :src="buildPhotoUrl(photo)" />
    </div>
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
figure {
  display: inline-block;
  height: 280px;
  width: 240px;
  margin: 1em;
  vertical-align: top;
}
figure .tile {
  position: relative;
  width: 240px;
  height: 240px;
  background: seashell;
  background: whitesmoke;
}
figure img {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  max-width: 100%;
  max-height: 100%;
}
</style>
