<template>
  <div>
    <h2 class="heading-1">Button</h2>
    <h2 class="heading-2">Disabled</h2>
    <div class="line">
      <x-button label="Primary" :disabled="true" />
      <x-button label="Secondary" color="secondary" :disabled="true" />
      <x-button label="Success" color="success" :disabled="true" />
    </div>
    <h2 class="heading-2">Color</h2>
    <div class="line">
      <x-button label="Primary" />
      <x-button label="Secondary" color="secondary" />
      <x-button label="Success" color="success" />
      <x-button label="Warning" color="warning" />
      <x-button label="Error" color="error" />
    </div>
    <h2 class="heading-2">Rounded</h2>
    <div class="line">
      <x-button label="Primary" :rounded="true" />
      <x-button label="Secondary" color="secondary" :rounded="true" />
      <x-button label="Success" color="success" :rounded="true" />
      <x-button label="Warning" color="warning" :rounded="true" />
      <x-button label="Error" color="error" :rounded="true" />
    </div>
    <h2 class="heading-2">Outlined</h2>
    <div class="line">
      <x-button label="Primary" :outlined="true" />
      <x-button label="Secondary" color="secondary" :outlined="true" />
      <x-button label="Success" color="success" :outlined="true" />
      <x-button label="Warning" color="warning" :outlined="true" />
      <x-button label="Error" color="error" :outlined="true" />
    </div>
    <h2 class="heading-2">Size</h2>
    <div class="line">
      <x-button label="Normal" />
      <x-button label="Large" size="large" />
    </div>
    <h2 class="heading-2">Click</h2>
    <div class="line">
      <x-button label="@click" :outlined="true" @click="eventClickHandler" />
    </div>
  </div>
</template>

<script setup>
const eventClickHandler = () => {
  alert('Clicked!')
}
</script>

<style></style>