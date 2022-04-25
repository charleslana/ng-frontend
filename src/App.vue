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
  font-family: GTAmericaBold, Helvetica, Arial, sans-serif;
}

.card {
  box-shadow: inset 8rem 54rem 0 0 #0c306a !important;
  color: white !important;
}

.link {
  color: #007bff !important;
}

.link:hover {
  color: #0056b3 !important;
  text-decoration: underline;
}
</style>
