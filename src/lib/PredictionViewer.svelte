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
	<div class="background-image">
		<img src={prediction.backgroundImage} alt="" />
	</div>
</div>

<style>
	.prediction-viewer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 460px;
		width: calc(100% - 32px);
		margin: 64px 16px;
		background: rgba(255, 255, 255, 0.5);
		border-radius: 24px;
	}

	.icon {
		width: 150px;
		height: 150px;
		text-align: center;
		opacity: 1;
		animation: appear-anim 1s ease;
	}

	.icon img {
		width: 100%;
		height: 100%;
	}

	.name {
		font-size: 48px;
		font-weight: 600;
		text-align: center;
		opacity: 1;
		animation: appear-anim 1s ease;
	}

	.message {
		font-size: 24px;
		font-weight: 400;
		text-align: center;
		padding: 0 8px;
		opacity: 1;
		animation: appear-anim 1s ease;
	}

	.background-image {
		position: absolute;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		z-index: -1;
		overflow: hidden;
		opacity: 1;
		animation: appear-anim 3s ease;
	}

	.background-image img {
		height: 100%;
	}

	@keyframes appear-anim {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
