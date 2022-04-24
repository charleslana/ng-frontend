<template>
  <div>
    <nav-bar-component/>
    <div class="home-bg"></div>
    <div class="has-text-centered">
      <b-button class="is-uppercase has-text-weight-bold is-register" size="is-large" type="is-primary">Cadastre-se
      </b-button>
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
    <section class="is-relative detail">
      <div class="top">
        <img alt="Detail 1" src="../assets/images/layout/home/detail-1.png"/>
      </div>
      <div class="hero">
        <div class="hero-body">
          <div class="columns is-flex-wrap-wrap has-text-centered is-align-items-center">
            <div class="column is-half is-uppercase">
              <p class="is-size-2 title">Bem vindo ao Naruto Game</p>
              <p>Aventure-se nessa Aventura Ninja</p>
              <p>Naruto Game é um dos mais populares "browser games" de Naruto. Em nosso jogo você será um ninja e sua
                missão é desenvolver suas habilidades e traçar seu próprio caminho ninja para tornar-se Kage.</p>
              <b-button class="is-uppercase has-text-weight-bold mt-5 is-detail-button is-size-7-mobile"
                        size="is-size-4-desktop" type="is-default">Crie sua
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
      </div>
      <div class="bottom">
        <img alt="Detail 2" src="../assets/images/layout/home/detail-2.png"/>
      </div>
    </section>
    <section class="map-section">
      <div class="map"></div>
      <div class="map-content">
        <div class="circle circle-left">
          <img alt="Circle left" src="../assets/images/layout/home/circle-left.png"/>
          <div class="villages-left">
            <div class="round-left circle-active village-1">
              <img alt="Village 1" src="../assets/images/layout/home/villages/1.png" @click="changeCharacter(1)"/>
            </div>
            <div class="round-left circle-active village-2">
              <img alt="Village 2" src="../assets/images/layout/home/villages/2.png" @click="changeCharacter(2)"/>
            </div>
            <div class="round-left circle-active village-3">
              <img alt="Village 3" src="../assets/images/layout/home/villages/3.png" @click="changeCharacter(3)"/>
            </div>
            <div class="round-left circle-active village-4">
              <img alt="Village 4" src="../assets/images/layout/home/villages/4.png" @click="changeCharacter(4)"/>
            </div>
          </div>
        </div>
        <div class="circle circle-right">
          <img alt="Circle right" src="../assets/images/layout/home/circle-right.png"/>
          <div class="villages-right">
            <div class="round-right circle-active village-5">
              <img alt="Village 5" src="../assets/images/layout/home/villages/5.png" @click="changeCharacter(5)"/>
            </div>
            <div class="round-right circle-active village-6">
              <img alt="Village 6" src="../assets/images/layout/home/villages/6.png" @click="changeCharacter(6)"/>
            </div>
            <div class="round-right circle-active village-7">
              <img alt="Village 7" src="../assets/images/layout/home/villages/7.png" @click="changeCharacter(7)"/>
            </div>
            <div class="round-right circle-active village-8">
              <img alt="Village 8" src="../assets/images/layout/home/villages/8.png" @click="changeCharacter(8)"/>
            </div>
          </div>
        </div>
        <div class="character-image">
          <img :src="require(`../assets/images/layout/home/hall-of-fame/${characterImage}.png`)"
               alt="Character avatar"/>
        </div>
        <div class="character-name is-uppercase title">
          <h3>{{ characterName }}</h3>
        </div>
        <div class="account">
          <h3 class="is-uppercase">{{ name }}</h3>
          <p>{{ kage }} - Nível {{ level }}</p>
        </div>
      </div>
    </section>
    <section class="is-relative detail detail-2">
      <div class="top reverse">
        <img alt="Detail 2" src="../assets/images/layout/home/detail-2.png"/>
      </div>
      <div class="hero">
        <div class="hero-body">
          <div class="columns is-flex-wrap-wrap has-text-centered is-align-items-center">
            <div class="column is-half is-hidden-mobile">
              <b-carousel :arrow="false" :indicator="false" :indicator-inside="false" :interval="5000"
                          :pause-hover="false" animated="fade">
                <b-carousel-item v-for="(item, i) in 2" :key="i">
                  <b-image :src="require(`../assets/images/layout/home/featured-${2 - i}.png`)" class="image"></b-image>
                </b-carousel-item>
              </b-carousel>
            </div>
            <div class="column is-half is-uppercase">
              <p class="is-size-2 title">Escolha seu personagem</p>
              <p>Aventure-se nessa Aventura Ninja</p>
              <p>Você é livre para personalizar seu personagem e criar suas próprias combinações de habilidades,
                invocações, clãs e elementos</p>
              <b-button class="is-uppercase mt-5 is-detail-2-button has-text-weight-bold is-size-7-mobile"
                        size="is-size-4-desktop" type="is-default">Ver todos
                os personagens
              </b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom reverse">
        <img alt="Detail 1" src="../assets/images/layout/home/detail-1.png"/>
      </div>
    </section>
  </div>
</template>
<script>
import NavBarComponent from "@/components/NavBarComponent";

export default {
  data() {
    return {
      numbers: [1, 2, 3],
      data: [
        {
          village: 1,
          name: 'Test',
          characterImage: 2,
          characterName: 'Naruto',
          level: 2,
          kage: 'Hokage'
        },
        {
          village: 2,
          name: 'Test 2',
          characterImage: 3,
          characterName: 'Sabaku',
          level: 3,
          kage: 'Kazekage'
        },
        {
          village: 3,
          name: 'Test 3',
          characterImage: 4,
          characterName: 'Deidara',
          level: 4,
          kage: 'Mizukage'
        },
        {
          village: 4,
          name: 'Test 4',
          characterImage: 5,
          characterName: 'Shinki',
          level: 4,
          kage: 'Tsuchikage'
        },
        {
          village: 5,
          name: 'Test 5',
          characterImage: 6,
          characterName: 'Sasuke',
          level: 5,
          kage: 'Raikage'
        },
        {
          village: 6,
          name: 'Test 6',
          characterImage: 7,
          characterName: 'Kakashi',
          level: 6,
          kage: 'Líder'
        },
        {
          village: 7,
          name: 'Test 7',
          characterImage: 8,
          characterName: 'Itachi',
          level: 7,
          kage: 'Otokage'
        },
        {
          village: 8,
          name: 'Test 8',
          characterImage: 9,
          characterName: 'Yahiko',
          level: 8,
          kage: 'Amekage'
        }
      ],
      village: 1,
      name: 'Charles',
      characterImage: 1,
      characterName: 'Sasuke',
      level: 1,
      kage: 'Staff'
    }
  },
  methods: {
    changeCharacter(villageId) {
      this.data.forEach(element => {
        if (element.village === villageId) {
          this.name = element.name
          this.characterImage = element.characterImage;
          this.characterName = element.characterName;
          this.level = element.level;
          this.kage = element.kage;
        }
      });
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

.card-image {
  overflow: hidden;
}

.image img {
  transition: all 0.3s;
}

.image img:hover {
  transform: scale(1.1);
}

.detail .hero {
  background-color: #fc8833;
  color: white;
}

.detail .title {
  color: white;
}

.is-detail-button {
  color: #fc8833;
}

.detail .top img {
  background-color: #fc8833;
  margin-bottom: -0.4rem;
}

.detail .bottom img {
  background-color: #fc8833;
}

.detail-2 .hero {
  background-color: #5b8c79;
  margin-top: -0.1rem;
}

.detail-2 .top img {
  background-color: #5b8c79;
  margin-bottom: 0.7rem;
}

.detail-2 .bottom img {
  background-color: #5b8c79;
  margin-bottom: -0.4rem;
}

.is-detail-2-button {
  color: #5b8c79;
}

.map-section {
  position: relative;
  padding-top: 0;
  height: 60rem;
  display: flex;
  justify-content: center;
}

.map {
  filter: grayscale(100%);
  background-image: url(../assets/images/layout/home/map.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  height: 100%;
  width: 100%;
  position: relative;
}

.map-content {
  max-width: 64%;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
}

.circle {
  position: absolute;
  bottom: 0;
  top: 5rem;
}

.circle-left {
  justify-content: flex-start;
  left: 0;
}

.villages-left, .villages-right {
  height: 20rem;
}

.villages-left {
  position: absolute;
  top: 1.6rem;
  left: -3.9rem;
  max-height: 64rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  bottom: 0;
}

.round-left, .round-right {
  z-index: 1;
}

.round-left {
  padding: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.round-left img {
  border-radius: 50%;
  max-width: 100%;
  height: auto;
  display: block;
  cursor: pointer;
  transition: all 0.3s;
}

.round-left img:hover, .round-right img:hover {
  transform: scale(1.1);
}

.circle-active {
  width: 14rem;
}

.village-1 {
  transform: translate(-1rem, 13rem);
}

.village-2 {
  transform: translate(-4rem, 11rem);
}

.village-3 {
  transform: translate(-3rem, 10rem);
}

.village-4 {
  transform: translate(3rem, 7.5rem);
}

.circle-right {
  justify-content: flex-end;
  right: 0;
}

.villages-right {
  position: absolute;
  top: 1.6rem;
  max-height: 64rem;
  right: -3.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  bottom: 0;
}

.round-right {
  padding: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.round-right img {
  border-radius: 50%;
  height: auto;
  max-width: 100%;
  display: block;
  cursor: pointer;
  transition: all 0.3s;
}

.village-5 {
  transform: translate(1rem, 13rem);
}

.village-6 {
  transform: translate(4rem, 11.5rem);
}

.village-7 {
  transform: translate(3rem, 10.5rem);
}

.village-8 {
  transform: translate(-3rem, 8rem);
}

.character-image {
  width: 50rem;
  height: auto;
  transform: translateY(1rem);
}

.character-name {
  position: absolute;
  z-index: -1;
  top: 2rem;
}

.character-name h3 {
  font-size: 10rem;
  color: #5b8c79;
  letter-spacing: 1rem;
}

.account {
  margin-top: -14rem;
}

.account h3 {
  color: #5b8c79;
  font-weight: bold;
  font-size: 4rem;
  margin-top: -7rem;
}

.account p {
  color: #0c306a;
  font-weight: normal;
  font-size: 2.5rem;
}

.reverse {
  transform: rotate(180deg);
}

@media screen and (max-width: 769px) {
  .villages-left, .villages-right {
    height: 10rem;
  }

  .circle-active {
    width: 7rem !important;
  }

  .character-image {
    width: 15rem;
  }

  .character-name h3 {
    font-size: 3rem;
  }

  .account {
    margin-top: 0;
  }

  .account h3 {
    font-size: 1.7rem;
    margin-top: -5rem;
  }

  .account p {
    font-size: 1rem;
  }

  .circle {
    height: 65%;
    display: flex;
  }

  .circle-left {
    left: 0;
  }

  .circle-right {
    right: 0;
  }

  .village-1 {
    transform: translate(1.5rem, 7rem);
  }

  .village-2 {
    transform: translate(0.5rem, 5rem);
  }

  .village-3 {
    transform: translate(2rem, 3rem);
  }

  .village-4 {
    transform: translate(5rem, -0.5rem);
  }

  .village-5 {
    transform: translate(-1rem, 7rem);
  }

  .village-6 {
    transform: translate(0.4rem, 5rem);
  }

  .village-7 {
    transform: translate(-1rem, 3rem);
  }

  .village-8 {
    transform: translate(-4rem, -0.2rem);
  }

  .map-section {
    height: 27rem;
  }

  .detail-2 .top img {
    margin-bottom: 0.4rem;
  }
}
</style>