<script lang="ts">
	import WatsonHealthImageAvailabilityLocal from 'carbon-icons-svelte/lib/WatsonHealthImageAvailabilityLocal.svelte';
</script>

<div class="topbar">
	<div class="title">Whimsy Sky</div>
	<div class="subtitle">
		<WatsonHealthImageAvailabilityLocal size={24} /> Your position
	</div>
</div>

<style>
	.topbar {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding: 16px 0;
	}

	.title {
		font-size: 32px;
		font-weight: 700;
	}

	.subtitle {
		font-size: 24px;
		font-weight: 400;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
