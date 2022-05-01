<template>
  <div>
    <featured-info-component
        :end-text="$t('notFound.paragraph5').toString()"
        :paragraphs="[
          $t('notFound.paragraph2'),
          $t('notFound.paragraph3'),
          $t('notFound.paragraph4'),
          ]"
        :sub-title="$t('notFound.paragraph1').toString()"
        :title="$t('notFound.title').toString()"
        icon="fa-solid fa-circle-exclamation"
        image="1"
    />
    <footer-component/>
  </div>
</template>
<script>
import FeaturedInfoComponent from "@/components/FeaturedInfoComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {FooterComponent, FeaturedInfoComponent}
}
</script>