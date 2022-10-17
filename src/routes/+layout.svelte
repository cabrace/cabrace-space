<script>
	import '../app.scss';
  import Nav from '$lib/components/layout/Nav.svelte'
  import Footer from '$lib/components/layout/Footer.svelte'
</script>

<section class="section">
  <header>
    <Nav />
  </header>
  <main class="main">
    <slot /> <!-- pure page content -->
  </main>
</section>
<Footer />
