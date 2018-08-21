<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="success" fixed="top">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand class="mr-5" href="#">CalSite</b-navbar-brand>
      <b-collapse is-nav id="nav-collapse">
        <b-navbar-nav class= "ml-4 w-100 d-flex justify-content-center">
          <b-nav-item v-for="link in centerlinks" :key="link.name" :to="link.to" :exact="link.exact">{{link.name}}</b-nav-item>
        </b-navbar-nav>

        <!-- Potential Left-aligned search tool -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item v-for="link in rightLinks" :key="link.name" :to="link.to">{{link.name}}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- Used to take up identical space at the top since real navbar is fixed (probably a better way to do this) -->
    <b-navbar class="invisible" toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">CalSite</b-navbar-brand>
      <b-collapse is-nav id="nav-collapse">
        <b-navbar-nav>
          <b-nav-item to="/" exact>Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>
        <!-- <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2" variant="outline-success" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav> -->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data: function () {
    return {
      centerlinks: [
        {name: 'Home', to: '/', exact: true},
        {name: 'Writing', to: '/writing'},
        {name: 'Drawing', to: '/drawing'},
        {name: 'Music', to: '/music'}
      ],
      rightLinks: [
        {name: 'About', to: '/about'},
        {name: 'Contact', to: '/contact'}
      ]
    }
  }
}
</script>
