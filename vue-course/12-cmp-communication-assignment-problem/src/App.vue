// Task 2: Output both components side-by-side in your main App template

<template>
  <div class="container">
    <div class="box">
      <active-user
        v-for="user in users"
        :key="user.username"
        :username="user.username"
        :age="user.age"
      ></active-user>
    </div>
    <div class="box">
      <user-data @new-user="addUser"></user-data>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          username: "Hans",
          age: 10,
        },
        {
          username: "hannelore",
          age: 10,
        },
      ],
    };
  },
  methods: {
    addUser(username, age) {
      this.users.push({ username: username, age: age });
    },
  },
};
</script>

<style>
.container {
  display: flex;
  gap: 16px; /* space between elements */
}

.box {
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
>
