// SECTION Global Variables

const heroes = [
  {
    name: 'harriet',
    type: 'boar',
    damage: 5,
    health: 100
  },
  {
    name: 'tim',
    type: 'wolf',
    damage: 10,
    health: 50
  }
]

const boss = {
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1,
  reward: 10
}

let wallet = 0

// SECTION Logic

function attackBoss() {
  let totalDamage = 0
  heroes.forEach(hero => {
    totalDamage += hero.damage
  })
  boss.health -= totalDamage
  checkBossHealth()
  console.log(boss.health)
}

function checkBossHealth() {
  if (boss.health < 1) {
    giveReward()
    levelUpBoss()
    levelUpHeroes()
    drawBoss()
  }
}

function levelUpBoss() {
  boss.maxHealth += 50;
  boss.health = boss.maxHealth
  boss.level++
  boss.reward += 5;
  console.log('boss:', boss)
}

function levelUpHeroes() {
  const harriet = heroes[0]
  const tim = heroes[1]
  harriet.health += 2
  harriet.damage++
  tim.health++
  tim.damage += 2
  console.log(heroes);
}

function damageHeroes() {
  heroes.forEach(hero => {
    if (hero.health < 1) {
      return
    }
    hero.health--
    console.log(hero.health)
  });
}

function giveReward() {
  wallet += boss.reward
  drawWallet()
}

//SECTION - Draw
function drawBoss() {
  const bossElem = document.getElementById('bossLevel')
  const bossLevelNumber = bossElem.querySelector('p')
  bossLevelNumber.innerText = `Level ${boss.level.toString()}`
}

function drawWallet() {
  const walletElem = document.getElementById('reward')
  const walletNumber = walletElem.querySelector('p')
  walletNumber.innerText = `$${wallet}`
}

// !SECTION 


// SECTION On Page Load
setInterval(damageHeroes, 5000)