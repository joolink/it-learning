const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      availableSpecial: false,
      thresholdSpecial: 0,
      lose: false,
      win: false,
      logs: [],
    };
  },
  watch: {
    monsterHealth() {
      if (this.monsterHealth < 0) {
        this.gameWin();
      }
    },
    playerHealth() {
      if (this.playerHealth < 0) {
        this.gameOver();
      }
    },
  },
  methods: {
    battle() {
      monsterDamage = Math.floor(Math.random() * 10);
      playerDamage = Math.floor(Math.random() * 20);
      this.monsterHealth -= monsterDamage;
      this.playerHealth -= playerDamage;
      this.logs.push({
        Attacker: "Player",
        Defender: "Monster",
        Damage: monsterDamage,
      });
      this.logs.push({
        Attacker: "Monster",
        Defender: "Player",
        Damage: playerDamage,
      });
      this.thresholdSpecial++;
      if (this.thresholdSpecial == 3) {
        this.thresholdSpecial = 0;
        this.availableSpecial = true;
      }
    },
    specialAttack() {
      monsterDamage = Math.floor(Math.random() * 20);
      playerDamage = Math.floor(Math.random() * 10);
      this.monsterHealth -= monsterDamage;
      this.playerHealth -= playerDamage;
      this.logs.push({
        Attacker: "Player",
        Defender: "Monster",
        Damage: monsterDamage,
      });
      this.logs.push({
        Attacker: "Monster",
        Defender: "Player",
        Damage: playerDamage,
      });
      this.availableSpecial = false;
    },
    heal() {
      heal = Math.floor(Math.random() * 20);
      this.playerHealth += heal;
      this.availableSpecial = false;
      this.logs.push({
        Healing: heal,
      });
    },
    gameOver() {
      this.lose = true;
    },
    gameWin() {
      this.win = true;
    },
  },
});

app.mount("#game");
