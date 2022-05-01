<template>
  <div id="app">
    <!--    <nav>-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--      <router-link to="/about">About</router-link>-->
    <!--    </nav>-->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Phagspa, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
}

:root {
  --background-color-primary: white;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #363636;
  --element-size: 4rem;
}

:root.dark-theme {
  --background-color-primary: #363636;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: white;
}

p, li {
  color: var(--text-primary-color);
}

.is-title {
  color: var(--text-primary-color) !important;
}

/*nav {*/
/*  padding: 30px;*/
/*}*/

/*nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/

body {
  padding-top: 0 !important;
  background-color: var(--background-color-primary);
  color: var(--text-primary-color);
}

.button {
  border-radius: 0.5rem !important;
  letter-spacing: 0.1rem;
}

.button.is-primary {
  background-color: #fc8834 !important;
}

.button.is-primary:hover {
  filter: brightness(90%);
}

.button:hover, .button.is-hovered {
  border-color: transparent !important;
}

.button:focus, .button.is-focused {
  border-color: transparent !important;
}

.button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active),
.button.is-default:focus:not(:active), .button.is-default.is-focused:not(:active) {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

@font-face {
  font-family: "Phagspa";
  src: local("Phagspa"),
  url(assets/fonts/phagspa.ttf) format("truetype");
}

@font-face {
  font-family: "GTAmericaBold";
  src: local("GTAmericaBold"),
  url(assets/fonts/GTAmericaBold.ttf) format("truetype");
}

@font-face {
  font-family: "TAHOAMA";
  src: local("TAHOAMA"),
  url(assets/fonts/TAHOAMA.ttf) format("truetype");
}

.navbar-menu.is-active {
  background-color: transparent !important;
  margin-top: 2.5rem;
}

.navbar-burger {
  color: white !important;
}

.title {
  color: var(--text-primary-color);
  font-family: GTAmericaBold, Helvetica, Arial, sans-serif;
}

.link {
  color: #007bff !important;
}

.link:hover {
  color: #0056b3 !important;
  text-decoration: underline;
}

.input:focus {
  border-color: #70c5c0 !important;
  box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%) !important;
}

.modal-card-head {
  overflow-x: auto;
}

.link {
  color: #007bff;
}

.link:hover {
  color: #0069d9;
}
</style>
