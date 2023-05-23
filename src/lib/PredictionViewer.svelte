<script lang="ts">
	import type { Prediction } from './Predictions';

	export let prediction: Prediction;
</script>

<div class="prediction-viewer">
	<div class="icon">
		{prediction.icon}
	</div>
	<div class="name">
		{prediction.name}
	</div>
	<div class="message">
		{prediction.message}
	</div>
</div>

<style>
	.prediction-viewer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 60vh;
	}

	.icon {
		width: 128px;
		height: 128px;
		font-size: 100px;
		text-align: center;
	}

	.name {
		font-size: 48px;
		font-weight: 600;
		text-align: center;
	}

	.message {
		font-size: 24px;
		font-weight: 400;
		text-align: center;
		padding: 0 24px;
	}
</style>
