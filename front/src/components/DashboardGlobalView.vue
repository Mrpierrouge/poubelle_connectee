<template>
	<div class="dashboard-section global-view">
		<h3>VUE GLOBALE</h3>
		<div class="columns">
			<div class="column">
				<h4>Entrée</h4>
				<p>{{ entry }}G</p>
			</div>
			<div class="column">
				<h4>Plat</h4>
				<p>{{ mainCourse }}G</p>
			</div>
			<div class="column">
				<h4>Dessert</h4>
				<p>{{ dessert }}G</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			entry: 0,
			mainCourse: 0,
			dessert: 0,
		}
	}
}
</script>

<style scoped>
.columns {
	display: flex;
	border-radius: 15px;
	padding: 0px 15px;
	width: 80%;
	background-color: #fff;
	gap: 20px;
	filter: drop-shadow(1px 2px 3px #b2b2b2);
}

.column {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
