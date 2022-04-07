<template>
  <div>
    <h1>Everywhere</h1>
    <nav id="nav">
      <div id="inner-nav">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/videos">Videos</nuxt-link>
      </div>
    </nav>
    <div id="display-page">
      <nuxt />
    </div>
  </div>
</template>

<style>
#nav {
  padding: 1rem;
  background-color: aqua;
}

#inner-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 800px;
  margin: 0 auto;
}

#display-page {
  padding: 1rem;
  background-color: #f0f0f0;
  max-width: 800px;
  margin: 0 auto;
}
</style>
