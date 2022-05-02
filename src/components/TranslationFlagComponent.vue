<template>
  <div class="level">
    <div class="level-item level-left">
      <img
          alt="Language Brazil"
          height="45"
          src="../assets/images/social/brazil.svg"
          v-bind:class="getLocale('pt-BR')" width="45" @click="setLocale('pt-BR')"
      >
    </div>
    <div class="level-item level-left">
      <img
          alt="Language English"
          height="45"
          src="../assets/images/social/usa.svg" v-bind:class="getLocale('en')" width="45" @click="setLocale('en')"
      >
    </div>
  </div>
</template>

<script>
import LocalStorageUtils from "@/utils/LocalStorageUtils";

export default {
  name: "TranslationFlagComponent",
  data() {
    return {
      locale: LocalStorageUtils.getLocale()
    }
  },
  methods: {
    setLocale(locale) {
      if (this.$root.$i18n.locale !== locale) {
        this.$root.$i18n.locale = locale;
        this.locale = locale;
        LocalStorageUtils.setLocale(locale);
      }
    },
    getLocale(locale) {
      return this.locale === locale ? '' : 'label-opacity';
    },
  }
}
</script>

<style scoped>
img {
  cursor: pointer;
}

.label-opacity {
  opacity: 0.3;
}
</style>