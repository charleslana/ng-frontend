<template>
  <b-navbar :fixed-top="true">
    <template #brand>
      <b-navbar-item :to="{ path: '/' }" tag="router-link">
        <img alt="Logo Naruto Game" src="../assets/images/layout/logo-mobile.png"/>
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-dropdown class="is-hoverable" label="Usuário">
        <b-navbar-item tag="router-link" to="/create-character">Templos Ninjas</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Notícias</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Meus dados</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Mensageiro</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Vantagens VIP</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Temas Vips</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Jogador VIP</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Compras com Créditos VIP</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Fórmulas do Jogo</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Indique seus amigos</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Trocar Senha</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Criar Personagem</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Trocar Personagem</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Suporte</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Logout</b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown class="is-hoverable" label="Personagem">
        <b-navbar-item tag="router-link" to="/create-character">Status</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Clãs</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Invocações</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Selo Amaldiçoado</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Mode Sennin</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">8 Portões de Chakra</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Talentos Ninja</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Elementos</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Modo História</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Estudo Ninja</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Objetivos</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Sorte Ninja</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Profissão</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Chakra das Bijuus</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Conquistas</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Histórico Ninja</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Recompensas</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Lista de Amigos</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Localizador de Amigos</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Fidelidade Ninja</b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown class="is-hoverable" label="Academia">
        <b-navbar-item tag="router-link" to="/create-character">Graduações</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Treinamento de Atributos</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Treinamento de Jutsus</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Aprender Jutsus</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Jutsus Elementais</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Jutsus de Portão</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Jutsus de Clã</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Jutsus Medicinais</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Kinjutsus</b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown class="is-hoverable" label="Sensei">
        <b-navbar-item tag="router-link" to="/create-character">Tutorial</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Sensei</b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown class="is-hoverable" label="Vila atual">
        <b-navbar-item tag="router-link" to="/create-character">Tarefas</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Status da Vila</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Eventos</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Objetivos</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Ramen Shop</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Pacotes</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Ninja Shop</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Equipamentos Ninja</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Votação dos Conselheiros</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Fórum</b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown class="is-hoverable" label="Combates">
        <b-navbar-item tag="router-link" to="/create-character">Dojo</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Dojo 4x4</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Torneios</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Histórico de Batalhas</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Missões de Combate</b-navbar-item>
      </b-navbar-dropdown>
      <!--      <b-navbar-dropdown class="is-hoverable" label="Equipe">-->
      <!--        <b-navbar-item tag="router-link" to="/create-character">Equipe</b-navbar-item>-->
      <!--      </b-navbar-dropdown>-->
      <!--      <b-navbar-dropdown class="is-hoverable" label="Organização">-->
      <!--        <b-navbar-item tag="router-link" to="/create-character">Organização</b-navbar-item>-->
      <!--      </b-navbar-dropdown>-->
      <b-navbar-dropdown class="is-hoverable" label="Ranking">
        <b-navbar-item tag="router-link" to="/create-character">Ninjas</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Sensei</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">4x4</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Combates</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Equipes</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Organizações</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Vilas</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Conquistas</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Estudo Ninja</b-navbar-item>
        <b-navbar-item tag="router-link" to="/create-character">Guerra Ninja</b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <template #end>
      <b-navbar-item tag="div">
        <theme-button-component/>
      </b-navbar-item>
      <b-navbar-item tag="div">
        <translation-flag-component/>
      </b-navbar-item>
      <b-navbar-item tag="div">
        <font-awesome-icon icon="fa-solid fa-power-off"/>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import ThemeButtonComponent from "@/components/ThemeButtonComponent";
import TranslationFlagComponent from "@/components/TranslationFlagComponent";

export default {
  name: "NavBarLoggedComponent",
  components: {TranslationFlagComponent, ThemeButtonComponent}
}
</script>

<style>
.navbar {
  color: #e9e9e9 !important;
  background: rgb(0, 23, 71, 0.8) !important;
}

.navbar-link {
  color: #e9e9e9 !important;
  background-color: transparent !important;
  text-transform: uppercase;
  font-weight: 600;
}

.navbar-link:hover, .navbar-link:focus {
  background-color: transparent !important;
  color: #0056b3 !important;
}

.navbar-link:not(.is-arrowless)::after {
  border-color: #637ea0 !important;
}

.navbar-item.has-dropdown.is-active .navbar-link {
  background-color: transparent !important;
}

.navbar-dropdown {
  background: #0d316b !important;
  box-shadow: rgb(0 0 0 / 17%) 0 -23px 25px 0 inset, rgb(0 0 0 / 15%) 0 -36px 30px 0 inset, rgb(0 0 0 / 10%) 0 -79px 40px 0 inset, rgb(0 0 0 / 6%) 0 2px 1px, rgb(0 0 0 / 9%) 0 4px 2px, rgb(0 0 0 / 9%) 0 8px 4px, rgb(0 0 0 / 9%) 0 16px 8px, rgb(0 0 0 / 9%) 0 32px 16px !important;
  border-radius: 25px !important;
  border-top: 2px solid #0d316b !important;
  padding: 10px !important;
}

.navbar-dropdown a {
  color: white !important;
}

.navbar-dropdown a:hover {
  color: #f8b764 !important;
  background-color: transparent !important;
}

.navbar-dropdown .navbar-item {
  padding: 2px 16px !important;
}

.fa-power-off {
  color: white;
  cursor: pointer;
}
</style>