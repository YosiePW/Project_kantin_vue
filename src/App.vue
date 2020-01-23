<template>
  <div id="app">
    <router-view name="header" />
     <router-view name="sidebar" />
      <div class="wrapper">
        <router-view />
      </div>
    <router-view name="footer" />
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
