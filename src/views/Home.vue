<template>
  <div>
    <img alt="VitalSmarts Logo" src="../assets/logo.png" />
    <h1>Welcome to the VitalSmarts QA Test</h1>
    <TestComponent class="uk-margin-top uk-container uk-container-small" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TestComponent from "@/components/TestComponent.vue"; // @ is an alias to /src

@Component({
  components: {
    TestComponent,
  },
})
export default class Home extends Vue {}
</script>
