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
  text-align: center;
  color: #2c3e50;
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

.button.is-primary {
  background-color: #fc8834 !important;
  border-radius: 0.5rem !important;
  letter-spacing: 0.1rem;
}

.button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active) {
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
</style>
