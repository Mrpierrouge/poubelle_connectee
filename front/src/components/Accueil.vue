<template>
	<div>
		<header>
			<nav>
				<div class="navbar">
					<img
						src="../assets/clamart.fr 2_0.svg"
						alt="Logo"
						class="logo"
					/>
				</div>
			</nav>
		</header>
		<div class="title">
			<h1>NOS ECOLES</h1>
		</div>

		<div class="card-grid">
			<div class="card" v-for="(school, index) in schools" :key="index">
				<img :src="school.image" :alt="school.name" />
				<h2>{{ school.name }}</h2>
				<button>VOIR LES STATISTIQUES ></button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      schools: [
        { name: 'CHARLES DE GAULLE', image: '../src/assets/CharlesDeGaulle.png' },
        { name: 'JEAN DE LA FONTAINE', image: '../src/assets/JeanDeLaFontaine.png' },
        { name: 'LOUISE MICHEL', image: '../src/assets/LouiseMichel.png' },
        { name: 'ROCHERS', image: '../src/assets/Rochers.png' },
        { name: 'JEAN MONNET', image: '../src/assets/JeanMonnet.png' },
        { name: 'PLAINE SUD', image: '../src/assets/PlaineSud.png' }
      ]
    };
  }
}
</script>

<style>
nav {
	background-color: #e42353;
	padding: 10px;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 10px 20px;
	box-sizing: border-box;
}

.navbar {
	display: flex;
	justify-content: center;
}

.logo {
	width: 100px;
	height: auto;
}


.title {
	text-align: center;
	margin-top: 20px;
}

@media (min-width: 1024px) {
	.card-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		margin-top: 20px;
	}
}

@media (max-width: 1024px) {
	.card-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 20px;
		margin-top: 20px;
	}
}

.card {
	border: 1px solid #ddd;
	border-radius: 8px;
	padding: 20px;
	text-align: left;
	background-color: #fff;
}

.card img {
	width: 100%;
	height: auto;
	border-radius: 8px;
	margin-bottom: 10px;
}

.card h2 {
	margin-bottom: 10px;
}

.card button {
	background-color: rgb(50, 45, 41);
	color: #fff;
	border: none;
	padding: 15px 20px;
	border-radius: 5px;
	cursor: pointer;
	width: 100%;
	transition: transform 0.3s ease;
}

.card button:hover {
	transform: scale(1.03);
}
</style>


