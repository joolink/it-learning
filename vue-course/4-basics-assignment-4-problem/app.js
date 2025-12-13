const app = Vue.createApp({
  data() {
    return {
      userInputClass: "",
      visibleClass: "visible",
      visibility: true,
      color: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.userInputClass === "user1",
        user2: this.userInputClass === "user2",
        visible: this.visibility,
        hidden: !this.visibility,
      };
    },
  },
  methods: {
    toggleVisibility() {
      this.visibility = !this.visibility;
    },
  },
});

app.mount("#assignment");
