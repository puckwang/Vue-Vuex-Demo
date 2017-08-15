<template>
  <div>
    <NavBar></NavBar>
    <JumBotron></JumBotron>
    <Container></Container>
  </div>
</template>
<script>
  import NavBar from '../components/navbar'
  import JumBotron from '../components/jumbotron'
  import Container from '../components/container'

  export default {
    name: 'learnComponent',
    components: {
      NavBar,
      JumBotron,
      Container,
    },
  }
</script>
