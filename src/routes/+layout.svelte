<script>
	import '../app.scss';
  import Nav from '$lib/components/layout/Nav.svelte'
  import Footer from '$lib/components/layout/Footer.svelte'
</script>

<Nav />
<main class="main">
    <!-- Content -->
    <slot />
</main>
<Footer />
