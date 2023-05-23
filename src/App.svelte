<script lang="ts">
	import Topbar from './lib/Topbar.svelte';
	import PredictionViewer from './lib/PredictionViewer.svelte';

	import type { Prediction } from './lib/Predictions';

	import { predictions } from './lib/Predictions';

	const prediction: Prediction = predictions[Math.floor(Math.random() * predictions.length)];
</script>

<Topbar />
<PredictionViewer {prediction} />
