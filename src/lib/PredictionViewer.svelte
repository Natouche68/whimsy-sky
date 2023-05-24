<script lang="ts">
	import type { Prediction } from './Predictions';

	export let prediction: Prediction;
</script>

<div class="prediction-viewer">
	<div class="icon">
		<img src={prediction.icon} alt={prediction.name + ' icon'} />
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
		height: 64vh;
	}

	.icon {
		width: 150px;
		height: 150px;
		text-align: center;
	}

	.icon img {
		width: 100%;
		height: 100%;
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
