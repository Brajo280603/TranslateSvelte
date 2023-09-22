<script>
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';

</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-2xl uppercase text-primary-500 ">Translate</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
					<a class="btn variant-outline-secondary p-1" href="https://github.com/Brajo280603/TranslateSvelte" target="_blank">
						<img src="/github.svg" class="h-10 dark:invert" alt="">
					</a>
					<!-- <LightSwitch></LightSwitch> -->
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
