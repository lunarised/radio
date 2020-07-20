<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">{{name}}</span>
        <span class="d-none d-lg-block">
          <!--<img
            class="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="https://avatars1.githubusercontent.com/u/18286813?s=460&v=4"
            alt
          /> -->
          <img
            class='img-fluid img-profile rounded-circle mx-auto mb-2'
            src='https://graph.facebook.com/100000693201824/picture?type=large&width=720&height=720'
            alt
          />
        </span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li v-for="navItem in navLinks" class="navItem" :key="navItem.href">
            <a class="nav-link" :href="navItem.href">{{navItem.displayName}}</a>
          </li>
        </ul>
      </div>
    </nav>

</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        { displayName: 'Home', href: '#home' },
        {
          displayName: 'Technical Proficiencies',
          href: '#technical-proficiencies',
        },
      ],
      name: 'James McKenzie',
    };
  },
};
</script>

<style>
a {
  color: #add8e6;
}

a:hover,
a:focus{
  color: #72bcd4;
}
a .active {
  color: #72bcd4;
}

a.view-source {
  text-decoration: none;
  color: #868e96;
}

a.view-source:hover {
  color: #72bcd4;
}
#sideNav .navbar-nav .nav-item .nav-link {
  font-weight: 800;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
}
#sideNav .navbar-toggler:focus {
  outline-color: #e8f4f8;
}
@media (min-width: 992px) {
  #sideNav {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 17rem;
    height: 100vh;
  }
  #sideNav .navbar-brand {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: auto auto 0;
    padding: 0.5rem;
  }
  #sideNav .navbar-brand .img-profile {
    max-width: 10rem;
    max-height: 10rem;
    border: 0.5rem solid rgba(255, 255, 255, 0.2);
  }
  #sideNav .navbar-collapse {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    width: 100%;
    margin-bottom: auto;
  }
  #sideNav .navbar-collapse .navbar-nav {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
  }
  #sideNav .navbar-collapse .navbar-nav .nav-item {
    display: block;
  }
  #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
    display: block;
  }
}
</style>
