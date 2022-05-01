<template>
  <div>
    <featured-info-component
        :paragraphs="[
          'Você não tem permissão para abri-la ou tentou acessá-la de forma ilegal.',
          'Houve uma tentativa de redirecioná-lo para o local correto, mas algo impediu',
          'Sua conexão com o servidor não está estável',
          ]"
        end-text="Tente novamente, caso necessite de ajuda, use o sistema de Suporte."
        icon="fa-solid fa-circle-exclamation"
        image="1"
        sub-title="A página que você tentou acessar não foi carregada e geralmente acontece pelos seguintes motivos:"
        title="Acesso Negado"
    />
    <footer-component/>
  </div>
</template>
<script>
import FeaturedInfoComponent from "@/components/FeaturedInfoComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {FooterComponent, FeaturedInfoComponent}
}
</script>