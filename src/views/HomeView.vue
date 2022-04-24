<template>
  <div>
    <nav-bar-component/>
    <div class="home-bg"></div>
    <b-button class="is-uppercase is-bold is-register" size="is-large" type="is-primary">Cadastre-se</b-button>
  </div>
</template>
<script>
import NavBarComponent from "@/components/NavBarComponent";

export default {
  components: {NavBarComponent}
}
</script>

<style scoped>
.home-bg {
  border-bottom: 0.7rem solid #184d86;
  height: 95vh;
  background-image: url(../assets/images/layout/topo.jpg);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
}

.is-register {
  margin-top: -2.2rem;
}
</style>