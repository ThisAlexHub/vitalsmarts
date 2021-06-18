<template>
  <div class="uk-container uk-container-small nav">
    <div class="uk-container uk-margin-bottom">
      <router-link to="/">Home</router-link> |
      <router-link to="/test">QA Test</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "uikit/src/scss/variables-theme.scss";
@import "uikit/src/scss/mixins-theme.scss";
@import "uikit/src/scss/uikit-theme.scss";

.nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 30px;

  a {
    font-weight: bold;
  }
}
</style>
