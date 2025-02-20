// SECTION Global Variables

const heroes = [
  {
    name: 'harriet',
    type: 'boar',
    damage: 5,
    health: 100,
    level: 1
  },
  {
    name: 'tim',
    type: 'wolf',
    damage: 10,
    health: 50,
    level: 1
  }
]

const boss = {
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1
}


// SECTION Logic

function attackBoss() {
  let totalDamage = 0
  heroes.forEach(hero => {
    totalDamage += hero.damage
  })
  boss.health -= totalDamage
  console.log(boss.health)
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

// !SECTION 


// SECTION On Page Load
setInterval(damageHeroes, 5000)