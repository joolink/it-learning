// ActiveUser should output a username (h2) and age (h3)
<template>
  <section id="ActiveUser">
    <h2>{{ username }}</h2>
    <h3>{{ age }}</h3>
  </section>
</template>
<script>
export default {
  props: ["username", "age"],
};
</script>
