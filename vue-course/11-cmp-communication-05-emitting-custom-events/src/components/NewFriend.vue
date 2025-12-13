<template>
  <form>
    <input v-model="friendName" type="text" />
    <input v-model="friendPhone" type="text" />
    <input v-model="friendMail" type="text" />
    <button @click.prevent="submitFriend">Send</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      friendName: '',
      friendPhone: '',
      friendMail: '',
    };
  },
  methods: {
    submitFriend() {
      this.$emit('new-friend', {
        id: this.friendName,
        name: this.friendName,
        phoneNumber: this.friendPhone,
        emailAddress: this.friendMail,
        isFavorite: false,
      });
    },
  },
};
</script>
