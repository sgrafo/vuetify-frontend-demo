<template>
  <v-navigation-drawer
      permanent
      v-model="drawerIsOpen">
    <v-img
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        :width="300"
        aspect-ratio="1/1"
        cover/>
    <v-list-item title="Nuevo Sistema" subtitle="Valores y Suministros"></v-list-item>
    <v-divider></v-divider>

    <v-list>
      <v-list-item
          v-for="[icon, text, path] in links"
          :key="icon"
          :prepend-icon="icon"
          :title="text"
          :to="path"
          link
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: Boolean,
  },
  data({$props}) {
    return {
      links: [
        ['mdi-chart-line', 'Parámetros', '/param'],
        ['mdi-account-outline', 'Responsables', '/responsible'],
        ['mdi-clipboard-list-outline', 'Tipos Suceso', '/types_su'],
        ['mdi-format-list-checks', 'Tipos Anulación', '/types_an'],
        ['mdi-cog-outline', 'Tipos Almacen', '/types_al'],
      ],
      drawerIsOpen: $props.drawer,
    };
  },
  watch: {
    drawer(newValue) {
      this.drawerIsOpen = newValue;
    },
  },
};
</script>

<style></style>
