<template>
  <b-navbar :fixed-top="true">
    <template #brand>
      <b-navbar-item :to="{ path: '/' }" class="logo" tag="router-link">
        <img
            alt="Logo Ng"
            src="../assets/images/layout/logo.png"
        >
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        Notícias
      </b-navbar-item>
      <b-navbar-item href="#">
        Hall da Fama
      </b-navbar-item>
      <b-navbar-item href="#">
        Contato
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-button class="is-uppercase is-bold" type="is-primary">
            <font-awesome-icon class="mr-2" icon="fa-regular fa-user"/>
            Login
          </b-button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBarComponent"
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