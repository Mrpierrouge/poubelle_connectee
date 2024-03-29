<template>
  <div>
    <navbar-component />
    <school-list :schools="schools" />
  </div>
</template>

<script>
import NavbarComponent from '../components/Navbar.vue';
import SchoolList from '../components/SchoolList.vue';

export default {
  components: {
    NavbarComponent,
    SchoolList
  },
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