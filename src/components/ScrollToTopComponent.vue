<template>
  <div ref="scrollTopButton" class="is-invisible scroll-to-top">
    <button class="button is-primary" @click="scrollToTop">
      <font-awesome-icon icon="fa-solid fa-arrow-up"/>
    </button>
  </div>
</template>

<script>
export default {
  name: "ScrollToTopComponent",
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTopButton = this.$refs.scrollTopButton;
      if (scrollTopButton.classList !== undefined) {
        if (window.scrollY > 200) {
          scrollTopButton.classList.remove("is-invisible");
        } else {
          scrollTopButton.classList.add("is-invisible");
        }
      }
    },
    scrollToTop() {
      window.scrollTo({top: 0, behavior: "smooth"});
    },
  },
}
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  transition: all 0.3s;
  z-index: 2;
}

.is-primary {
  background-color: #2A2A2A !important;
}
</style>