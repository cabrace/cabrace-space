
<section class="hero is-small">
  <div class="hero-body">
    <p class="title logo flex-center">
      CaBrace.
    </p>
      <p class="sub-logo flex-center">
     [ space ]
    </p>
  </div>
</section>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a href="/#" class="navbar-item logo is-size-3">
      <!-- <img alt="Logo" src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
      <!-- CaBrace.[Space] -->
    </a>

    <a href="/#" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a href="/blog" class="navbar-item">
        About
      </a>
      <a href="/posts" class="navbar-item">
        Posts
      </a>
      <a href="/blog" class="navbar-item">
        Blog
      </a>
      <a href="/blog" class="navbar-item">
        Photography
      </a>

      <!-- <div class="navbar-item has-dropdown is-hoverable"> -->
        <!-- <a href= "/#" class="navbar-link"> -->
          <!-- More -->
        <!-- </a> -->
        <!-- <div class="navbar-dropdown"> -->
          <!-- <a href="/#" class="navbar-item"> -->
            <!-- About -->
          <!-- </a> -->
          <!-- <a href="/#" class="navbar-item"> -->
            <!-- Jobs -->
          <!-- </a> -->
          <!-- <a href="/#" class="navbar-item"> -->
            <!-- Contact -->
          <!-- </a> -->
          <!-- <hr class="navbar-divider"> -->
          <!-- <a href="/#" class="navbar-item"> -->
            <!-- Report an issue -->
          <!-- </a> -->
        <!-- </div> -->
      <!-- </div> -->
    </div>

    <!-- <div class="navbar-end"> -->
      <!-- <div class="navbar-item"> -->
        <!-- <div class="buttons"> -->
          <!-- <a href="/#" class="button is-primary"> -->
            <!-- <strong>Sign up</strong> -->
          <!-- </a> -->
          <!-- <a href="/#" class="button is-light"> -->
            <!-- Log in -->
          <!-- </a> -->
        <!-- </div> -->
      <!-- </div> -->
    <!-- </div> -->

  </div>
</nav>

<style lang="scss">

  a.navbar-item{
    font-family: "UbuntuMono";
    font-size: 1.5rem;
  }

  .line {
    align-items: center;
    margin: 1em -1em;

    &:before,
    &:after {
      height: 1px;
      margin: 0 1em;
    }
  }
  .divider {
    display: flex;

    &:before,
    &:after {
      content: "";
      flex: 1;
    }
  }
  .one-line {
    &:before,
    &:after {
      background: black;
    }
  }
  .flex-center{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  .logo{
    //font-family:"FuzzyBubbles";
    font-family:"Caveat";
    color:black;
    font-size: 70px;
  }
  .sub-logo{
    margin-top:-20px;
    // font-family: "UbuntuMono";
    // font-family:"FuzzyBubblaes";
    font-family:"sawah";
    // font-family: "BlinkMacSystemFont", "-apple-system", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    color:black;
    // font-size: 2rem;
    font-size:1.1rem;
    text-transform:uppercase;
  }
  .sample{
    display:flex;
    alight-items:center;
    align-content:center;
  }
</style>
