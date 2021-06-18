<template>
  <div>
    <form class="uk-form-stacked" action="/home">
      <legend class="uk-legend">Sign Up for a course</legend>

      <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text">Full Name *</label>
        <div class="uk-form-controls">
          <input
            class="uk-input"
            id="form-stacked-text"
            type="text"
            placeholder="Please Enter your Full Name..."
            :value="fullName"
            @input="setState({ fullName: $event.target.value })"
          />
        </div>
      </div>

      <div class="uk-margin">
        <label class="uk-form-label" for="course-select"
          >Course Selection *</label
        >
        <div class="uk-form-controls">
          <select class="uk-select" id="course-select">
            <option disabled selected value>-- select an option --</option>
            <option>Course 1</option>
            <option>Course 2</option>
          </select>
        </div>
      </div>

      <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text"
          >(Optional) Reason for Request</label
        >
        <div class="uk-form-controls">
          <textarea
            class="uk-textarea"
            rows="5"
            placeholder="Please Explain why you want to take this course"
            :value="reason"
            @input="setState({ reason: $event.target.value })"
          ></textarea>
        </div>
      </div>

      <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
        <label
          ><input
            class="uk-checkbox"
            type="checkbox"
            :checked="agree"
            @input="setState({ agree: $event.target.checked })"
          />
          &nbsp; I Agree to the Terms and Conditions</label
        >
      </div>

      <div class="uk-margin">
        <input
          class="uk-button uk-button-primary"
          type="submit"
          value="submit"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapMutations, mapState } from "vuex";

@Component({
  computed: { ...mapState(["fullName", "reason", "agree"]) },
  methods: { ...mapMutations(["setState"]) },
})
export default class QA extends Vue {}
</script>
