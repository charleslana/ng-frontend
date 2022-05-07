<template>
  <div>
    <footer class="footer is-uppercase">
      <div class="content has-text-centered">
        <p>{{ $t('footer.paragraph1', [new Date().getFullYear()]) }}</p>
        <div class="columns">
          <div class="column">
            <h4 class="has-text-weight-medium has-text-left-desktop has-text-white">{{ $t('footer.footerTitle1') }}</h4>
            <p class="has-text-left">{{ $t('footer.paragraph3') }}
              <br>
              {{ $t('footer.paragraph4') }}
            </p>
          </div>
          <div class="column">
            <h4 class="has-text-weight-medium has-text-white">{{ $t('footer.footerTitle2') }}</h4>
            <p>
              <router-link to="/">{{ $t('footer.linkManual') }}</router-link>
              <br/>
              <router-link to="/">{{ $t('footer.linkNews') }}</router-link>
              <br/>
              <router-link to="/">{{ $t('footer.linkHallOfFame') }}</router-link>
              <br/>
              <router-link to="/">{{ $t('footer.linkDisclosure') }}</router-link>
              <br/>
              <a href="#" target="_blank">{{ $t('footer.linkDiscord') }}</a>
            </p>
          </div>
          <div class="column">
            <h4 class="has-text-weight-medium has-text-justify has-text-white">{{ $t('footer.footerTitle3') }}</h4>
            <p>
              <router-link to="/">{{ $t('footer.linkTermsOfUse') }}</router-link>
              <br/>
              <router-link to="/">{{ $t('footer.linkPrivacyPolicy') }}</router-link>
              <br/>
              <router-link to="/">{{ $t('footer.linkRulesAndPunishments') }}</router-link>
              <br/>
              <router-link to="/">{{ $t('footer.linkLegalNotice') }}</router-link>
            </p>
          </div>
        </div>
      </div>
    </footer>
    <scroll-to-top-component/>
  </div>
</template>

<script>
import ScrollToTopComponent from "@/components/ScrollToTopComponent";

export default {
  name: "FooterComponent",
  components: {ScrollToTopComponent}
}
</script>

<style scoped>
.footer {
  background-color: #0d0f1d;
  color: white;
  font-family: TAHOAMA, Helvetica, Arial, sans-serif;
  margin-top: 1rem;
}

.footer a {
  color: white;
}

.footer a:hover {
  text-decoration: underline;
}

.footer p {
  color: white;
}
</style>