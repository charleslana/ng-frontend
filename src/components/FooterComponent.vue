<template>
  <div>
    <footer class="footer is-uppercase">
      <div class="content has-text-centered">
        <p>Naruto Game by Charles © {{ new Date().getFullYear() }}</p>
        <div class="columns">
          <div class="column">
            <h4 class="has-text-weight-medium has-text-left has-text-white">Naruto Game</h4>
            <p class="has-text-left">Personagens e ilustrações originais © Copyright 2002 por Masashi Kishimoto.
              <br>
              Todos os direitos reservados.
            </p>
          </div>
          <div class="column">
            <h4 class="has-text-weight-medium has-text-white">Explorar</h4>
            <p>
              <router-link to="/">Manual</router-link>
              <br/>
              <router-link to="/">Notícias</router-link>
              <br/>
              <router-link to="/">Hall da Fama</router-link>
              <br/>
              <router-link to="/">Divulgue-nos</router-link>
              <br/>
              <a href="#" target="_blank">Discord</a>
            </p>
          </div>
          <div class="column">
            <h4 class="has-text-weight-medium has-text-justify has-text-white">Geral</h4>
            <p>
              <router-link to="/">Termos de Uso</router-link>
              <br/>
              <router-link to="/">Política de Privacidade</router-link>
              <br/>
              <router-link to="/">Regras e Punições</router-link>
              <br/>
              <router-link to="/">Aviso Legal</router-link>
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
}

.footer a {
  color: white;
}

.footer a:hover {
  text-decoration: underline;
}
</style>