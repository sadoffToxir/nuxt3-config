<template>
  <h1>{{ text }}</h1>
  <!-- <div class="columns is-mobile is-vcentered is-centered is-gapless">
    <div class="column is-10">
      <h2 class="title is-2 has-text-centered my-6">VeeValidate Quickstart</h2> -->
      <!-- <VForm class="card p-6 has-background-light">
        <VField
          name="field"
          :rules="isRequired"
          class="input"
          placeholder="Enter text"
        />
        <VErrorMessage name="field" class="help is-danger" />
      </VForm> -->
      <!-- <Form as="v-form">
        <Field name="password" type="password" />
      </Form>
    </div>
  </div> -->
</template>

<script setup>
const text = useToUpper("it works!");

// const isRequired = (value) => {
//   if (value && value.trim()) {
//     return true;
//   }
//   return "This is required right now!";
// };
</script>
