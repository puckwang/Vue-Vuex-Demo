<template>
  <div class="container">
    <!-- Example row of columns -->
    <div class="row">
      <div v-for="item in list" class="col-md-4">
        <h2>{{ item.title }}</h2>
        <p>{{ item.info }}</p>
        <p><a class="btn btn-default" href="https://getbootstrap.com/docs/3.3/examples/jumbotron/#" role="button">{{ item.btntext }}</a></p>
      </div>
    </div>

    <hr>

    <footer>
      <p>© 2016 Company, Inc.</p>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'container',
    props: {
        list: Array
    }
  }
</script>
