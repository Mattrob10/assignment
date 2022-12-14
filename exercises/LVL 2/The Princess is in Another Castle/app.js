class Player {
  constructor(
    name = "",
    status = "Small",
    totalCoins,
    hasStar,
    gameActive = true
  ) {
    this.name = name;
    this.status = status;
    this.totalCoins = totalCoins;
    this.gameActive = gameActive;
    this.hasStar = hasStar;
  }ΓΈ

  /* DAMAGE gotHit */
  gotHit() {
    if (this.hasStar) {
      console.log("You used your Star β­οΈ power π!");
      this.hasStar = false;
    } else {
      this.status =
        this.status === "PowerUp"
          ? "Big"
          : this.status === "Big"
          ? "Small"
          : this.endGame();
    }
  }

  /* POWER UP */
  gotPowerUp() {
    if (this.status === "PowerUp") this.hasStar = true;
    else if (this.status === "Big") this.status = "PowerUp";
    else this.status = "Big";
  }
  /* ADDS COINS TO CURRENT COIN COUNT */
  addCoin() {
    this.totalCoins++;
  }

  /* PRINTS PLAYER */
  print() {
    console.log(
      `\n Name: ${this.name} \n Status: ${this.status} \n Coins π°: ${this.totalCoins} \n StarPower β­οΈ: ${this.hasStar}`
    );
  }

  /* ENDGAME(stops running) */
  endGame() {
    this.gameActive = false;
    console.log(`\n ${this.name} π Died πͺ¦, \n πΎ Game Over `);
    clearInterval(runTime);
  }
}
//SET INTERVAL
let player = new Player("Mario", "Big", 0, false);


let runTime = setInterval(() => {
  player.print();
  let randomEvent = Math.floor(Math.random() * 3);
  console.log(` Random β Event(s): ${randomEvent}`);
  if (randomEvent === 0) {
    player.gotHit();
  } else if (randomEvent === 1) {
    player.gotPowerUp();
  } else player.addCoin();
}, 1000);