const app = Vue.createApp({
  data() {
    return {
      myName: "Joonas",
      myAge: 2,
      myLink:
        "https://cdn.shopify.com/s/files/1/0076/3471/4688/files/Finland_meme_5_600x600.jpg?v=1679763777",
    };
  },
  methods: {
    outputNumber() {
      const randomNum = Math.random(10);
      return randomNum;
    },
    ageIn5() {
      return this.myAge + 5;
    },
  },
});

app.mount("#assignment");
