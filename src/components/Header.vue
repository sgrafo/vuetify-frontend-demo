<template>
  <v-app-bar elevation="4">
    <v-app-bar-nav-icon @click="$emit('handleDrawer')"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-col cols="6">
      <v-form class="mt-5">
        <v-text-field
            rounded
            density="compact"
            variant="outlined"
            placeholder="Buscar aquí"
            append-inner-icon="mdi-magnify"
        />
      </v-form>
    </v-col>

    <v-spacer></v-spacer>

    <v-menu>
      <template v-slot:activator="{ props }">
				<span
            v-bind="props"
            style="cursor: pointer"
            class="mx-5"
        >
					<v-badge
              offset-x="5"
              offset-y="5"
              color="red"
              content="3"
          >
						<v-icon size="x-large">mdi-bell-outline</v-icon>
					</v-badge>
				</span>
      </template>
      <v-list
          :items="items"
          item-props
          lines="three"
      >
        <template v-slot:subtitle="{ subtitle }">
          <div v-html="subtitle"></div>
        </template>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {type: 'subheader', title: 'Hoy'},
        {
          title: 'Notificiacion 1',
          subtitle: `<span class="text-primary">Hola</span> &mdash; xd`,
        },
        {type: 'divider', inset: true},
        {
          title: 'Notificiacion 2',
          subtitle: `Como crees Como crees Como crees!!`,
        },
        {type: 'divider', inset: true},
        {
          title: 'Notificiacion 3',
          subtitle: 'Oh noo',
        },
      ],
    };
  },
};
</script>

<style></style>
