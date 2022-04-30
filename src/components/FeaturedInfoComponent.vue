<template>
  <div>
    <div class="featured-info"></div>
    <div class="container">
      <section class="hero featured-info-margin">
        <div class="hero-body">
          <div class="featured-info-title">
            <h1>
              <font-awesome-icon :icon="icon"/>
              {{ title }}
            </h1>
          </div>
          <div class="featured-info-body columns">
            <div class="column content">
              <p>{{ subTitle }}</p>
              <ul>
                <li v-for="(paragraph, index) in paragraphs" :key="index">
                  {{ paragraph }}
                </li>
              </ul>
              <p>{{ endText }}</p>
            </div>
            <div class="column is-relative">
              <img :src="require(`../assets/images/featured-info/${image != null ? image : 1}.png`)"
                   alt="Character Info"
                   class="character is-hidden-mobile"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedInfoComponent",
  props: {
    icon: String,
    title: String,
    subTitle: String,
    paragraphs: {
      type: Array,
    },
    endText: String,
    image: String
  }
}
</script>

<style scoped>
.featured-info {
  background-color: #0c306a;
  height: 15rem;
}

.featured-info-margin {
  margin-top: -7.222rem;
}

.featured-info-title {
  --shadow: #af4417;
  --color: #FFF;
  background-image: linear-gradient(90deg, #af4417 0%, #ee7221 63%, rgba(238, 114, 33, 0) 100%);
  align-items: center;
  border-radius: 40px 0 0 0;
  color: #FFF;
  display: flex;
  margin-bottom: 0;
  position: relative;
  width: 100%;
  padding: calc(5px * 2) calc(8px * 3);
}

.featured-info-title h1 {
  font-style: italic;
  text-shadow: 0 2px 0 #af4417;
  margin-left: 15px;
  font-family: GTAmericaBold, Helvetica, Arial, sans-serif;
  color: white;
  font-size: 2rem;
  text-transform: uppercase;
}

.featured-info-body {
  border: solid white;
  border-width: 60px 64px 82px 88px;
  border-image-source: url(../assets/images/layout/border-chamfer-orange.png);
  border-image-slice: 120 128 164 176 fill;
  border-image-outset: 26px;
  padding: 0;
  font-family: TAHOAMA, Helvetica, Arial, sans-serif;
}

.featured-info-body .column {
  padding: 0;
}

.columns {
  margin: 0 !important;
}

@media only screen and (max-width: 768px) {

  .featured-info-body .column {
    margin: -60px -50px -82px -78px;
    padding: calc(8px * 4) 0 calc(13px * 5);
  }
}

.featured-info-body .character {
  bottom: -77px;
  max-width: 212px;
  right: 0;
  position: absolute;
}

.content:not(:last-child) {
  margin-bottom: 0 !important;
}
</style>