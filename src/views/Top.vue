<template>
  <div>
    <v-btn
      @click.stop.prevent="goSignIn"
    >
      SignIn
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Top',
  methods: {
    goSignIn: function() {
      this.$router.push({ path: '/signin' });
    },
  },
};
</script>