<template>
  <div>
    <nav-bar-component/>
    <div class="home-bg"></div>
    <div class="has-text-centered">
      <b-button class="is-uppercase is-bold is-register" size="is-large" type="is-primary">Cadastre-se</b-button>
    </div>
    <section class="hero">
      <div class="hero-body">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="title is-uppercase is-bold">
                Ultimas Noticias
              </p>
            </div>
          </div>
          <div class="level-right">
            <router-link to="/">
              <div class="level-item is-uppercase link"><p>Ver todas as Notícias</p></div>
            </router-link>
          </div>
        </div>
        <div class="columns is-flex-wrap-wrap">
          <div v-for="number of numbers" :key="number" class="column is-one-third">
            <router-link to="/">
              <div class="card">
                <div class="card-image">
                  <figure class="image">
                    <img :src="require(`../assets/images/news/${number}.png`)" alt="News">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <time>22/04/2022</time>
                    <p class="subtitle is-uppercase">Game Beta Lançado</p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <div class="is-relative detail">
      <div class="top">
        <img alt="Detail 1" src="../assets/images/layout/home/detail-1.png"/>
      </div>
      <section class="hero">
        <div class="hero-body">
          <div class="columns is-flex-wrap-wrap has-text-centered is-align-items-center">
            <div class="column is-half is-uppercase">
              <p class="is-size-2 title">Bem vindo ao Naruto Game</p>
              <p>Aventure-se nessa Aventura Ninja</p>
              <p>Naruto Game é um dos mais populares "browser games" de Naruto. Em nosso jogo você será um ninja e sua
                missão é desenvolver suas habilidades e traçar seu próprio caminho ninja para tornar-se Kage.</p>
              <b-button class="is-uppercase is-bold mt-5 is-detail-button" size="is-large" type="is-default">Crie sua
                Conta
              </b-button>
            </div>
            <div class="column is-half is-hidden-mobile">
              <b-carousel :arrow="false" :indicator="false" :indicator-inside="false" :interval="5000"
                          :pause-hover="false" animated="fade">
                <b-carousel-item v-for="(item, i) in 2" :key="i">
                  <b-image :src="require(`../assets/images/layout/home/featured-${i + 1}.png`)" class="image"></b-image>
                </b-carousel-item>
              </b-carousel>
            </div>
          </div>
        </div>
      </section>
      <div class="bottom">
        <img alt="Detail 2" src="../assets/images/layout/home/detail-2.png"/>
      </div>
    </div>
  </div>
</template>
<script>
import NavBarComponent from "@/components/NavBarComponent";

export default {
  data() {
    return {
      numbers: [1, 2, 3]
    }
  },
  components: {NavBarComponent}
}
</script>

<style scoped>
.home-bg {
  border-bottom: 0.7rem solid #184d86;
  height: 95vh;
  background-image: url(../assets/images/layout/home/bg.jpg);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
}

.is-register {
  margin-top: -2.2rem;
}

.card .subtitle {
  color: white;
}

.detail {
  background-color: #fc8833;
  color: white;
}

.detail .title {
  color: white;
}

.is-detail-button {
  color: #fc8833;
}
</style>