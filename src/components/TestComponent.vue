<template>
  <div class="uk-card uk-card-default uk-card-body uk-text-center">
    <p class="uk-text-justify">
      Please run a test against the QA Test form using E2E or Unit Testing. This
      project defaults to using Jest for component testing and Cypress for E2E.
      You are not limited to Cypress or Jest. Feel free to add any packages or
      setup that you like. The goal is to show you can test a Vue application
      and Html Form using E2E and as a bonus component testing. Please test as
      much user interaction as you feel appropriate keeping in mind that some
      form fields are mandatory and the Full Name field has been pre-populated
      using the Vuex Store. The form will return to this page after submission.
    </p>
    <h3 class="uk-card-title">
      These are the plugins installed. Use the link at the top to view the QA
      Test Form
    </h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
          target="_blank"
          rel="noopener"
          >router</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
          target="_blank"
          rel="noopener"
          >vuex</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest"
          target="_blank"
          rel="noopener"
          >unit-jest</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress"
          target="_blank"
          rel="noopener"
          >e2e-cypress</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
          target="_blank"
          rel="noopener"
          >typescript</a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
p {
  padding: 10px 30px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
