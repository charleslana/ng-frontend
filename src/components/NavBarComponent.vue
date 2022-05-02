<template>
  <div>
    <b-navbar :fixed-top="true">
      <template #brand>
        <b-navbar-item :to="{ path: '/' }" class="logo" tag="router-link">
          <img alt="Logo Ng" src="../assets/images/layout/logo.png">
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item tag="router-link" to="/">
          {{ $t('navBar.linkHome') }}
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/news">
          {{ $t('navBar.linkNews') }}
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/hall-of-fame">
          {{ $t('navBar.linkHallOfFame') }}
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/contact">
          {{ $t('navBar.linkContact') }}
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <b-button class="is-uppercase is-bold" type="is-primary" @click="toggleLoginModal">
              <font-awesome-icon class="mr-2" icon="fa-regular fa-user"/>
              {{ $t('navBar.loginButton') }}
            </b-button>
          </div>
        </b-navbar-item>
        <b-navbar-item tag="div">
          <translation-flag-component/>
        </b-navbar-item>
        <b-navbar-item tag="div">
          <theme-button-component/>
        </b-navbar-item>
      </template>
    </b-navbar>
    <b-modal v-model="isModalActive" :can-cancel="false" has-modal-card trap-focus>
      <div class="card">
        <div class="card-content">
          <form @submit="handleFormLogin">
            <div class="modal-card" style="width: auto">
              <header class="modal-card-head">
                <p class="modal-card-title">
                  <font-awesome-icon icon="fa-solid fa-user-ninja"/>
                  {{ $t('navBar.modalTitle') }}
                </p>
                <button :disabled="isLoading" class="delete" type="button" @click="toggleLoginModal"/>
              </header>
              <section class="modal-card-body">
                <b-field :label="$t('navBar.modalEmailField').toString()">
                  <b-input
                      :placeholder="$t('navBar.modalPlaceholderEmailField').toString()"
                      :value="email"
                      required
                      type="email">
                  </b-input>
                </b-field>
                <b-field :label="$t('navBar.modalPasswordField').toString()">
                  <b-input
                      :placeholder="$t('navBar.modalPlaceholderPasswordField').toString()"
                      :value="password"
                      password-reveal
                      required
                      type="password">
                  </b-input>
                </b-field>
              </section>
              <footer class="modal-card-foot">
                <b-button :disabled="isLoading" :label="$t('navBar.modalAccessButton').toString()" :loading="isLoading"
                          expanded native-type="submit" type="is-info"/>
                <router-link :hidden="isLoading" class="link" style="width: 100%" to="/recover-password">
                  {{ $t('navBar.modalLinkRecoveryPassword') }}
                </router-link>
              </footer>
            </div>
          </form>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import ThemeButtonComponent from "@/components/ThemeButtonComponent";
import TranslationFlagComponent from "@/components/TranslationFlagComponent";

export default {
  name: "NavBarComponent",
  components: {TranslationFlagComponent, ThemeButtonComponent},
  data() {
    return {
      isModalActive: false,
      email: null,
      password: null,
      isLoading: false
    }
  },
  methods: {
    toggleLoginModal() {
      this.isModalActive = !this.isModalActive;
    },
    handleFormLogin(e) {
      this.isLoading = true;
      setTimeout(() => {
        this.showToast('Login error');
        this.isLoading = false;
      }, 3000);
      e.preventDefault();
    },
    showToast(message) {
      this.$buefy.toast.open({
        message: message,
        type: 'is-danger'
      });
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 769px) {
  nav {
    padding: 1rem !important;
  }

  .logo {
    transform: none !important;
    left: 0 !important;
    top: 0 !important;
  }
}

nav {
  padding: 1rem 5rem 1rem 20rem;
  background-color: rgb(0, 23, 71, 0.8);
}

nav a {
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border-left: 0.1rem solid rgba(255, 255, 255, 0.3);
  letter-spacing: 0.1rem;
}

nav a:hover {
  filter: brightness(80%);
  background-color: transparent;
  color: white;
}

nav a:focus {
  background-color: transparent;
  color: white;
}

nav a:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 100%;
  bottom: 0;
  background: #fc8833;
  height: 4px;
  -webkit-transition-property: right;
  transition-property: right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

nav a:hover:before {
  right: 0;
}

.navbar-burger a {
  color: white !important;
}

.logo {
  transform: translate(2rem, 1rem);
  max-width: 20rem;
  width: 223px;
  height: 116px;
  position: absolute;
  left: 4rem;
  top: 0;
  border-left: none;
}

.logo:hover {
  filter: brightness(100%);
}

.logo:hover:before {
  right: 100%;
}

.navbar-item {
  padding: 0.5rem 1.2rem 0.75rem 1.2rem;
}

.navbar-item img {
  max-height: none;
}
</style>