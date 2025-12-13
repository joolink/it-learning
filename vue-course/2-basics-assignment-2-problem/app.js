const app = Vue.createApp({
    data() {
    return {
        input:'',
        inputEnter:''
    };
  },
  methods: {
    alert() {
      alert("Hello world!");
    },
    saveInput(event) {
      this.input=event.target.value;
    }
    ,
    saveInputOnEnter(event) {
      this.inputEnter=this.input;
    }
  },
});

app.mount("#assignment");
