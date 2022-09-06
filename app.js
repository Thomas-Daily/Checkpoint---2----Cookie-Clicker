const Upgrades = [
  LuffyandNaruto = {
    cost: 25,
    amountBought: 0,
    bonusEXP: 0
  },
  ZoroandMan = {
    cost: 100,
    amountBought: 0,
    bonusEXP: 0
  },
  KabutoandRockLee = {
    cost: 500,
    amountBought: 0,
    bonusEXP: 0
  },
  MorePunching = {
    cost: 10,
    amountBought: 0,
    bonusEXP: 0
  }
]

let clickValue = 1
let passiveValue = 0
let totalEXP = 0
let narAndLufFightTemplate = ''
let zorAndManFightTemplate = ''
let kabAndLeeFightTemplate = ''

function updateEXPperClick() {
  document.getElementById('EXPperClick').innerText = clickValue
}

function updatePassiveEXP() {
  let totalPassiveEXP = document.getElementById('passiveEXP')
  let total = ZoroandMan.bonusEXP + LuffyandNaruto.bonusEXP + KabutoandRockLee.bonusEXP

  totalPassiveEXP.innerHTML = total
}

function picChange() {
  //Do Picture Later (3-5) with TA's
  document.getElementById('bagPic').src = 'bagNoPunch.png'
}

function punchBag() {
  document.getElementById('bagPic').src = 'bagPunch.png'
  setTimeout(picChange, 100)
  totalEXP += clickValue
  updateTotalEXP()
}

function updateTotalEXP() {
  document.getElementById('totalExperience').innerText = totalEXP
}

function narutoAndLuffyGif() {
  let narutoAndLuffyFight = document.getElementById('narutoAndLuffyFight')

  narAndLufFightTemplate += `
  <div class="col-12 nAndLBG">
   <img src="NarutoandLuffyFight.gif" alt="NarutoandLuffyFight.gif">
  </div>
  `
  narutoAndLuffyFight.innerHTML = narAndLufFightTemplate
}

function zoroAndManGif() {
  let zoroAndManFight = document.getElementById('zoroAndManFight')

  zorAndManFightTemplate += `
  <div class="col-12 zAndMBG">
   <img src="ZoroandManFight.gif" alt="ZoroandManFight.gif">
  </div>
  `
  zoroAndManFight.innerHTML = zorAndManFightTemplate
}

function kabutoAndRockLeeGif() {
  let kabutoAndRockLeeFight = document.getElementById('kabutoAndRockLeeFight')

  kabAndLeeFightTemplate += `
  <div class="col-12 kAndLBG">
   <img class="fitFight" src="KabutoandRockLeeFight.gif" alt="KabutoandRockLeeFight.gif">
  </div>
  `
  kabutoAndRockLeeFight.innerHTML = kabAndLeeFightTemplate
}

function buyNarutoAndLuffy() {
  if (totalEXP >= LuffyandNaruto.cost) {
    totalEXP -= LuffyandNaruto.cost
    LuffyandNaruto.cost += 25
    LuffyandNaruto.amountBought++
    LuffyandNaruto.bonusEXP += 5
    narutoAndLuffyGif()
    updateTotalEXP()
    updateNarutoandLuffy()
    updatePassiveEXP()
  }
}

function buyMorePunches() {
  if (totalEXP >= MorePunching.cost) {
    totalEXP -= MorePunching.cost
    MorePunching.cost += 5
    MorePunching.amountBought++
    MorePunching.bonusEXP++
    clickValue += 1
    updateTotalEXP()
    updateMorePunching()
    updateEXPperClick()
    updatePassiveEXP()
  }
}

function buyZoroAndMan() {
  if (totalEXP >= ZoroandMan.cost) {
    totalEXP -= ZoroandMan.cost
    ZoroandMan.cost += 100
    ZoroandMan.amountBought++
    ZoroandMan.bonusEXP += 10
    zoroAndManGif()
    updateTotalEXP()
    updateZoroAndMan()
    updatePassiveEXP()
  }
}

function buyKabutoandRockLee() {
  if (totalEXP >= KabutoandRockLee.cost) {
    totalEXP -= KabutoandRockLee.cost
    KabutoandRockLee.cost += 250
    KabutoandRockLee.amountBought++
    KabutoandRockLee.bonusEXP += 15
    kabutoAndRockLeeGif()
    updateTotalEXP()
    updateKabutoAndRockLee()
    updatePassiveEXP()
  }
}

function updateNarutoandLuffy() {
  let NandLinfo = document.getElementById('NandLinfo')
  template = ''

  template = `
  <p><u><b>Naruto and Luffy</b></u></p>
  <p>Cost: ${LuffyandNaruto.cost}</p>
  <p>Amount Bought: ${LuffyandNaruto.amountBought}</p>
  <p>Bonus to EXP : ${LuffyandNaruto.bonusEXP}</p>`

  NandLinfo.innerHTML = template
}

function updateZoroAndMan() {
  let NandLinfo = document.getElementById('ZandMinfo')
  template = ''

  template = `
  <p><u><b>Zoro</b></u></p>
  <p>Cost: ${ZoroandMan.cost}</p>
  <p>Amount Bought: ${ZoroandMan.amountBought}</p>
  <p>Bonus to EXP : ${ZoroandMan.bonusEXP}</p>`
  ZandMinfo.innerHTML = template
}

function updateKabutoAndRockLee() {
  let KandLinfo = document.getElementById('KandLinfo')
  template = ''

  template = `
  <p><u><b>Rock Lee</b></u></p>
  <p>Cost: ${KabutoandRockLee.cost}</p>
  <p>Amount Bought: ${KabutoandRockLee.amountBought}</p>
  <p>Bonus to EXP : ${KabutoandRockLee.bonusEXP}</p>`
  KandLinfo.innerHTML = template
}

function updateMorePunching() {
  let MPinfo = document.getElementById('MPinfo')
  template = ''

  template = `
  <p><u><b>Faster Punches</b></u></p>
  <p>Cost: ${MorePunching.cost}</p>
  <p>Amount Bought: ${MorePunching.amountBought}</p>
  <p>Bonus to EXP : ${MorePunching.bonusEXP}</p>`
  MPinfo.innerHTML = template
}

function passiveEXPNarutoAndLuffy() {
  totalEXP += 5 * LuffyandNaruto.amountBought
  updateTotalEXP()
}

function passiveEXPZoroAndMan() {
  totalEXP += 10 * ZoroandMan.amountBought
  updateTotalEXP()
}

function passiveEXPKabutoAndRockLee() {
  totalEXP += 15 * KabutoandRockLee.amountBought
  updateTotalEXP()
}



setInterval(passiveEXPNarutoAndLuffy, 3000)
setInterval(passiveEXPZoroAndMan, 3000)
setInterval(passiveEXPKabutoAndRockLee, 3000)
updateNarutoandLuffy()
updateZoroAndMan()
updateKabutoAndRockLee()
updateMorePunching()
