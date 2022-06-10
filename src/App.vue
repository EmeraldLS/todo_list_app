<template>
  <nav>
    <div class="navbar-brand">
      <router-link to="/">Home</router-link>
    </div>
    <div class="ml-auto">
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/admin">Admin</router-link>
    </div>

  </nav>
  <router-view />
</template>

<style>
#app {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

nav {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  gap: 10px;
  background-color: #2c3e50;
  padding: 20px 10px;
}

.ml-auto{
  display: flex;
  gap: 20px;
}

nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  font-size: 1.1em;
}

nav a.router-link-exact-active {
  color: #fde908;
}
</style>
