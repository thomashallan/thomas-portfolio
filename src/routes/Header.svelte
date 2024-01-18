<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo/TH_LOGO.svg';
</script>

<header >
	<div class="flex content-between justify-between items-center p-2 px-4 max-w-screen-2xl mx-auto">
		<div>
			<a href="/">
				<img  class="w-16" src={logo} alt="TH Design" />
			</a>
		</div>
	
		<nav>
			<ul class="flex space-x-3 text-xl">
				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a href="/about">About</a>
				</li>
				<li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
					<a href="/projects">Projects</a>
				</li>
			</ul>
		</nav>
	</div>
	
</header>

<style>
	
</style>
