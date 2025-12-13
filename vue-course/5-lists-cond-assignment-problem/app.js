const app = Vue.createApp({
  data() {
    return {
      task: "",
      taskList: [],
      visibility: true,
    };
  },
  methods: {
    addTask() {
      if (this.task != "") {
        this.taskList.push(this.task);
        this.task = "";
      }
    },
    toggleVisibility() {
      this.visibility = !this.visibility;
    },
  },
});

app.mount("#assignment");
