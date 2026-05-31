/* MERIDIAN APP - ARCTIC THEME - FIXED */
var PROGRAM_END = new Date("2026-07-15T23:59:59");
var MP_BASE = 180;
var STREAK_BONUS = 0.10;
var XP_EXO = 50;
var XP_LVL = 500;

var EXO = {
  A: [
    {id:"a1",name:"Developpe couche machine",muscle:"Pectoraux",cat:"Push",sets:"4x10",rest:"90s",mp:MP_BASE,info:"Machine guidee. Regle la hauteur pour que les poignees soient au niveau des pecs. Pousse en expirant."},
    {id:"a2",name:"Developpe incline machine",muscle:"Pectoraux haut",cat:"Push",sets:"3x12",rest:"75s",mp:MP_BASE,info:"Incline 30-45°. Machine Smith ou presse inclinee. Concentre-toi sur la partie haute des pecs."},
    {id:"a3",name:"Elevation laterale machine",muscle:"Epaules",cat:"Push",sets:"4x12",rest:"60s",mp:MP_BASE,info:"Machine laterale ou cable. Bras legerement flechis. Monte jusqu'a l'horizontal."},
    {id:"a4",name:"Presse militaire machine",muscle:"Epaules",cat:"Push",sets:"4x8",rest:"90s",mp:MP_BASE+20,info:"Presse epaules machine ou Smith. Dos colle au dossier. Ne bloque pas les coudes en haut."},
    {id:"a5",name:"Extension triceps machine",muscle:"Triceps",cat:"Push",sets:"3x15",rest:"60s",mp:MP_BASE,info:"Machine extension ou cable poulie haute. Coudes fixes le long du corps."},
    {id:"a6",name:"Dips assistes machine",muscle:"Triceps / Pecs",cat:"Push",sets:"3x10",rest:"75s",mp:MP_BASE+20,info:"Machine dips assistee. Penche-toi legerement pour viser les pecs, droit pour les triceps."}
  ],
  B: [
    {id:"b1",name:"Tirage vertical machine",muscle:"Dos (lats)",cat:"Pull",sets:"4x10",rest:"90s",mp:MP_BASE,info:"Tirage vertical prise large. Tire jusqu'en bas du pecs. Contracte les lats."},
    {id:"b2",name:"Rowing machine",muscle:"Dos (milieu)",cat:"Pull",sets:"4x10",rest:"90s",mp:MP_BASE,info:"Rowing machine ou chest-supported. Rentre les coudes vers l'arriere. Garde le dos droit."},
    {id:"b3",name:"Tirage horizontal machine",muscle:"Dos (epaisseur)",cat:"Pull",sets:"3x12",rest:"75s",mp:MP_BASE,info:"Machine row assis. Prise neutre ou pronation. Tire vers le nombril."},
    {id:"b4",name:"Curl biceps machine",muscle:"Biceps",cat:"Pull",sets:"4x12",rest:"60s",mp:MP_BASE,info:"Machine curl ou pupitre. Coudes fixes. Monte sans balancer."},
    {id:"b5",name:"Curl marteau machine",muscle:"Biceps / Avant-bras",cat:"Pull",sets:"3x12",rest:"60s",mp:MP_BASE,info:"Machine curl prise neutre. Travaille le brachial et l'avant-bras."},
    {id:"b6",name:"Face pull machine",muscle:"Rear delts / Dos",cat:"Pull",sets:"3x15",rest:"60s",mp:MP_BASE,info:"Cable poulie haute. Tire vers le visage. Coudes hauts. Exterieur des epaules."}
  ],
  C: [
    {id:"c1",name:"Tapis de course",muscle:"Cardio / Full body",cat:"Cardio",sets:"20 min",rest:"-",mp:MP_BASE+40,info:"Course moderee 70-75% FCmax. Incline leger si possible. Respiration reguliere."},
    {id:"c2",name:"Stepper",muscle:"Cardio / Jambes",cat:"Cardio",sets:"15 min",rest:"-",mp:MP_BASE+20,info:"Stepper machine. Maintiens un rythme constant. Ne te tiens pas aux barres."},
    {id:"c3",name:"Rameur",muscle:"Cardio / Dos",cat:"Cardio",sets:"10 min",rest:"-",mp:MP_BASE+40,info:"Rameur concept2. Jambes-dos-bras. Explosion sur les jambes, fini avec le dos."},
    {id:"c4",name:"Velo elliptique",muscle:"Cardio / Full body",cat:"Cardio",sets:"20 min",rest:"-",mp:MP_BASE+20,info:"Velo elliptique. Bras et jambes ensemble. Resistance moderee."},
    {id:"c5",name:"HIIT Bike",muscle:"Cardio / Jambes",cat:"Cardio",sets:"15 min",rest:"-",mp:MP_BASE+60,info:"Velo assis. 30s intense / 30s lent x 15. Explose sur les phases courtes."}
  ],
  D: [
    {id:"d1",name:"Crunch machine",muscle:"Abdominaux",cat:"Abdos",sets:"4x15",rest:"45s",mp:MP_BASE,info:"Machine abdominaux. Roule le buste vers les genoux. Ne tire pas avec le cou."},
    {id:"d2",name:"Rotation abdos machine",muscle:"Obliques",cat:"Abdos",sets:"3x15",rest:"45s",mp:MP_BASE,info:"Machine rotation ou cable. Tourne le buste. Controle le mouvement."},
    {id:"d3",name:"Levage de jambes machine",muscle:"Abdos bas",cat:"Abdos",sets:"3x12",rest:"60s",mp:MP_BASE,info:"Machine levage de jambes ou chaise romaine. Monte les jambes a 90°."},
    {id:"d4",name:"Planche avec poids",muscle:"Core",cat:"Abdos",sets:"3x45s",rest:"60s",mp:MP_BASE+20,info:"Planche sur avant-bras. Ajoute un disque sur le dos si trop facile. Dos neutre."},
    {id:"d5",name:"Abdos declines machine",muscle:"Abdos haut",cat:"Abdos",sets:"3x12",rest:"60s",mp:MP_BASE,info:"Banc decline avec machine ou poids. Descends lentement, remonte en expirant."}
  ]
};

var SHOP = [
  {id:"kebab",name:"Menu Kebab",price:1000,cat:"snack",emoji:"🥙",desc:"Un menu kebab classique avec frites et boisson",maxQty:10},
  {id:"shein",name:"Commande Shein",price:5000,cat:"clothes",emoji:"👗",desc:"Commande vetements Shein d'une valeur de 50€",maxQty:1},
  {id:"maillot",name:"Maillot Equipe",price:10000,cat:"clothes",emoji:"👕",desc:"Maillot officiel de ton equipe preferee, valeur 100€",maxQty:1},
  {id:"chaussures",name:"Paire Chaussures",price:3500,cat:"shoes",emoji:"👟",desc:"Paire de chaussures au choix, valeur 35€",maxQty:1},
  {id:"boisson",name:"Boisson Energie",price:250,cat:"snack",emoji:"⚡",desc:"Canette boisson energisante post-training",maxQty:999},
  {id:"creme",name:"Creme Proteinee",price:400,cat:"other",emoji:"🧴",desc:"Creme proteinee pour recuperation musculaire",maxQty:999}
];

var S = {
  mp:0,xp:0,level:1,streak:0,lastWorkoutDate:null,workouts:0,minutes:0,mpEarned:0,
  history:[],inventory:[],completedToday:{},currentDay:"A",currentExo:null,
  timerStart:0,timerInterval:null,selectedRessenti:2
};

var shopCat = "all";
var months = ["jan","fev","mar","avr","mai","juin","juil","aout","sept","oct","nov","dec"];

function $(id){ return document.getElementById(id); }
function pad2(n){ return n < 10 ? "0"+n : ""+n; }

function load(){
  try {
    var saved = localStorage.getItem("meridian_state");
    if(saved){
      var p = JSON.parse(saved);
      for(var k in p){ if(S.hasOwnProperty(k)) S[k] = p[k]; }
      checkStreak();
    }
  } catch(e){}
}

function save(){
  try { localStorage.setItem("meridian_state", JSON.stringify(S)); } catch(e){}
}

function checkStreak(){
  if(!S.lastWorkoutDate) return;
  var last = new Date(S.lastWorkoutDate);
  var now = new Date();
  var diff = Math.floor((now - last) / (1000*60*60*24));
  if(diff > 1) S.streak = 0;
}

function toast(msg){
  var t = $("toast"), txt = $("toast-txt");
  txt.textContent = msg;
  t.classList.add("show");
  setTimeout(function(){ t.classList.remove("show"); }, 2500);
}

function updateMP(){
  $("mp-balance").textContent = S.mp + " MP";
  $("mp-balance-shop").textContent = S.mp + " MP";
  $("mp-balance-profile").textContent = S.mp + " MP";
}

function updateLevel(){
  var need = S.level * XP_LVL;
  var pct = Math.min(100, (S.xp / need) * 100);
  $("user-level").textContent = S.level;
  $("xp-current").textContent = S.xp;
  $("xp-next").textContent = need;
  $("level-fill").style.width = pct + "%";
}

function updateStreak(){
  $("streak-count").textContent = "Streak: " + S.streak + " jours";
  $("stat-streak").textContent = S.streak;
}

function updateCountdown(){
  var diff = PROGRAM_END - new Date();
  if(diff <= 0){ $("countdown-timer").textContent = "Programme termine !"; return; }
  $("countdown-timer").textContent = Math.ceil(diff / (1000*60*60*24)) + " jours restants";
}

function updateStats(){
  $("stat-workouts").textContent = S.workouts;
  $("stat-minutes").textContent = S.minutes;
  $("stat-mp-earned").textContent = S.mpEarned;
  $("stat-streak").textContent = S.streak;
}

function renderHistory(){
  var list = $("hist-list");
  if(S.history.length === 0){
    list.innerHTML = '<div style="padding:20px 0;text-align:center;color:var(--text-dim);font-size:13px;">Aucun historique encore</div>';
    return;
  }
  var html = "";
  for(var i = S.history.length-1; i >= 0; i--){
    var h = S.history[i], d = new Date(h.date);
    var ds = d.getDate() + " " + months[d.getMonth()];
    html += '<div class="hist-item"><div class="hist-left"><div class="hist-ex">' + h.exercise + '</div><div class="hist-meta">' + ds + " · " + h.duration + " · " + h.ressenti + '</div></div><div class="hist-mp"><div class="mp-icon"></div><div class="hv">+' + h.mp + "</div></div></div>";
  }
  list.innerHTML = html;
}

function renderInventory(){
  var list = $("inventory-list");
  if(S.inventory.length === 0){
    list.innerHTML = '<div style="padding:20px 0;text-align:center;color:var(--text-dim);font-size:13px;">Inventaire vide</div>';
    return;
  }
  var g = {}, html = "";
  for(var i = 0; i < S.inventory.length; i++){
    var it = S.inventory[i];
    if(!g[it.id]) g[it.id] = {name:it.name, emoji:it.emoji, price:it.price, qty:0};
    g[it.id].qty++;
  }
  for(var k in g){
    var it = g[k];
    html += '<div class="hist-item"><div class="hist-left"><div class="hist-ex">' + it.emoji + " " + it.name + '</div><div class="hist-meta">Quantite: ' + it.qty + "</div></div><div class="hist-mp"><div class="mp-icon"></div><div class="hv">" + it.price + " MP</div></div></div>";
  }
  list.innerHTML = html;
}

function renderExercises(){
  var day = S.currentDay, list = EXO[day], container = $("ex-list"), done = S.completedToday[day] || [];
  $("ex-title").textContent = "Jour " + day + " — " + (day==="A"?"Push":day==="B"?"Pull":day==="C"?"Cardio":"Abdos");
  $("ex-count").textContent = done.length + "/" + list.length;
  var titles = {A:"Push Power", B:"Pull Strength", C:"Cardio Burn", D:"Core Blast"};
  $("hero-program-title").innerHTML = titles[day] + "<br>Session";
  var html = "";
  for(var i = 0; i < list.length; i++){
    var ex = list[i], isDone = false;
    for(var d = 0; d < done.length; d++) if(done[d] === ex.id){ isDone = true; break; }
    var bonus = Math.floor(ex.mp * (S.streak * STREAK_BONUS));
    var total = ex.mp + bonus;
    html += '<div class="ex-card ' + (isDone?"done":"") + '" data-exid="' + ex.id + '">' +
      '<div class="ex-head"><div class="ex-info"><div class="ex-cat">' + ex.cat + '</div><div class="ex-name">' + ex.name + '</div><div class="ex-muscle">' + ex.muscle + '</div></div>' +
      '<div class="ex-mp"><div class="mp-icon"></div><div class="mp-txt">' + total + ' MP</div></div></div>' +
      '<div class="ex-details"><div class="det-item"><div class="det-label">Series</div><div class="det-val">' + ex.sets + '</div></div><div class="det-item"><div class="det-label">Repos</div><div class="det-val">' + ex.rest + '</div></div><div class="det-item"><div class="det-label">Base</div><div class="det-val">' + ex.mp + ' MP</div></div></div>' +
      '<div class="ex-actions">' +
      '<button class="btn-p ' + (isDone?"":"btn-v") + ' btn-start" data-exid="' + ex.id + '" ' + (isDone?"disabled":"") + '>' + (isDone?"FAIT":"DEMARRER") + '</button>' +
      '<button class="btn-s btn-info" data-exid="' + ex.id + '">Infos</button>' +
      '</div></div>';
  }
  container.innerHTML = html;
  // EVENT DELEGATION — pas de getElementById dynamique, un seul listener sur le container
}

function renderShop(){
  var grid = $("shop-grid"), items = [];
  if(shopCat === "all"){ items = SHOP; }
  else { for(var i = 0; i < SHOP.length; i++) if(SHOP[i].cat === shopCat) items.push(SHOP[i]); }
  var html = "";
  for(var i = 0; i < items.length; i++){
    var it = items[i], owned = 0;
    for(var j = 0; j < S.inventory.length; j++) if(S.inventory[j].id === it.id) owned++;
    var canBuy = S.mp >= it.price && owned < it.maxQty;
    var isMaxed = owned >= it.maxQty;
    var btnClass = isMaxed ? "owned" : "";
    var btnText = isMaxed ? "MAX ATTEINT" : "ACHETER";
    html += '<div class="shop-item">' +
      '<div class="shop-img">' + it.emoji + '</div>' +
      '<div class="shop-info"><div class="shop-n">' + it.name + '</div><div class="shop-p"><div class="mp-icon"></div><div class="pv">' + it.price + ' MP</div></div><div class="shop-e">' + it.desc + '</div>' +
      (owned > 0 ? '<div style="font-size:11px;color:var(--accent-light);margin-top:4px;font-weight:700;">En possession: ' + owned + "</div>" : "") +
      '<button class="shop-btn ' + btnClass + '" data-itemid="' + it.id + '" ' + (canBuy?"":"disabled") + '>' + btnText + '</button></div></div>';
  }
  grid.innerHTML = html;
  // EVENT DELEGATION sur shop-grid
}

function showInfo(exId){
  var day = S.currentDay, list = EXO[day], ex = null;
  // Cherche dans tous les jours si pas trouvé dans le jour courant
  for(var k in EXO){
    for(var i = 0; i < EXO[k].length; i++){
      if(EXO[k][i].id === exId){ ex = EXO[k][i]; break; }
    }
    if(ex) break;
  }
  if(!ex) return;
  $("info-title").textContent = ex.name;
  $("info-desc").textContent = ex.info;
  $("info-details").innerHTML =
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px;">' +
    '<div style="background:rgba(255,255,255,0.03);padding:12px;border-radius:12px;border:1px solid var(--card-border);"><div style="font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:800;margin-bottom:4px;">Muscle</div><div style="font-size:14px;font-weight:700;color:#fff;">' + ex.muscle + '</div></div>' +
    '<div style="background:rgba(255,255,255,0.03);padding:12px;border-radius:12px;border:1px solid var(--card-border);"><div style="font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:800;margin-bottom:4px;">Categorie</div><div style="font-size:14px;font-weight:700;color:#fff;">' + ex.cat + '</div></div>' +
    '<div style="background:rgba(255,255,255,0.03);padding:12px;border-radius:12px;border:1px solid var(--card-border);"><div style="font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:800;margin-bottom:4px;">Series</div><div style="font-size:14px;font-weight:700;color:#fff;">' + ex.sets + '</div></div>' +
    '<div style="background:rgba(255,255,255,0.03);padding:12px;border-radius:12px;border:1px solid var(--card-border);"><div style="font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:800;margin-bottom:4px;">Repos</div><div style="font-size:14px;font-weight:700;color:#fff;">' + ex.rest + '</div></div>' +
    '</div>';
  $("info-modal").classList.add("active");
}

function startWorkout(exId){
  var ex = null;
  for(var k in EXO){
    for(var i = 0; i < EXO[k].length; i++){
      if(EXO[k][i].id === exId){ ex = EXO[k][i]; break; }
    }
    if(ex) break;
  }
  if(!ex) return;
  S.currentExo = ex;
  S.timerStart = Date.now();
  $("w-name").textContent = ex.name;
  $("w-info").textContent = ex.sets + " · " + ex.rest + " repos · " + ex.muscle;
  $("workout").classList.add("active");
  clearInterval(S.timerInterval);
  S.timerInterval = setInterval(function(){
    var elapsed = Date.now() - S.timerStart;
    var mins = Math.floor(elapsed / 60000);
    var secs = Math.floor((elapsed % 60000) / 1000);
    var ms = Math.floor((elapsed % 1000) / 10);
    $("timer").innerHTML = pad2(mins) + ":" + pad2(secs) + '<span class="ms">.' + pad2(ms) + "</span>";
    $("w-prog-bar").style.width = Math.min(100, (elapsed / 300000) * 100) + "%";
  }, 50);
}

function stopWorkout(){
  clearInterval(S.timerInterval);
  $("workout").classList.remove("active");
  S.timerInterval = null;
}

function completeWorkout(){
  clearInterval(S.timerInterval);
  var elapsed = Date.now() - S.timerStart;
  var mins = Math.floor(elapsed / 60000), secs = Math.floor((elapsed % 60000) / 1000);
  var timeStr = pad2(mins) + ":" + pad2(secs);
  var ex = S.currentExo;
  var bonus = Math.floor(ex.mp * (S.streak * STREAK_BONUS)), total = ex.mp + bonus;
  $("comp-sub").textContent = ex.name + " · " + ex.sets;
  $("comp-mp").textContent = "+" + total + " MP";
  $("comp-time").textContent = timeStr;
  $("input-weight").value = "";
  // Reset ressenti
  var rbs = document.querySelectorAll(".rb");
  for(var i = 0; i < rbs.length; i++) rbs[i].classList.remove("sel");
  var defaultRb = document.querySelector('.rb[data-r="2"]');
  if(defaultRb) defaultRb.classList.add("sel");
  S.selectedRessenti = 2;
  $("comp").classList.add("active");
}

function submitWorkout(){
  var ex = S.currentExo; if(!ex) return;
  var elapsed = Date.now() - S.timerStart;
  var mins = Math.floor(elapsed / 60000), secs = Math.floor((elapsed % 60000) / 1000);
  var timeStr = pad2(mins) + ":" + pad2(secs);
  var bonus = Math.floor(ex.mp * (S.streak * STREAK_BONUS)), total = ex.mp + bonus;
  S.mp += total; S.xp += XP_EXO; S.mpEarned += total;
  S.minutes += mins + (secs > 30 ? 1 : 0);
  var need = S.level * XP_LVL;
  if(S.xp >= need){ S.xp -= need; S.level++; toast("Niveau " + S.level + " atteint !"); }
  if(!S.completedToday[S.currentDay]) S.completedToday[S.currentDay] = [];
  S.completedToday[S.currentDay].push(ex.id);
  var today = new Date().toDateString(), last = S.lastWorkoutDate ? new Date(S.lastWorkoutDate).toDateString() : null;
  var yesterday = new Date(Date.now() - 86400000).toDateString();
  if(last !== today){
    if(last === yesterday) S.streak++;
    else S.streak = 1;
    S.lastWorkoutDate = new Date().toISOString();
    S.workouts++;
  }
  var labels = {1:"Facile", 2:"Moyen", 3:"Dur"};
  S.history.push({
    id: ex.id, exercise: ex.name, day: S.currentDay,
    date: new Date().toISOString(), duration: timeStr, mp: total, xp: XP_EXO,
    weight: $("input-weight").value || "-",
    ressenti: labels[S.selectedRessenti] || "Moyen"
  });
  save(); updateMP(); updateLevel(); updateStreak(); updateStats();
  renderExercises(); renderHistory();
  $("comp").classList.remove("active");
  $("workout").classList.remove("active");
  toast("+" + total + " MP gagnes !");
}

function buyItem(itemId){
  var item = null;
  for(var i = 0; i < SHOP.length; i++) if(SHOP[i].id === itemId){ item = SHOP[i]; break; }
  if(!item) return;
  var owned = 0;
  for(var j = 0; j < S.inventory.length; j++) if(S.inventory[j].id === itemId) owned++;
  if(owned >= item.maxQty){ toast("Quantite max atteinte !"); return; }
  if(S.mp < item.price){ toast("Pas assez de MP !"); return; }
  S.mp -= item.price;
  S.inventory.push({id:item.id, name:item.name, emoji:item.emoji, price:item.price, boughtAt:new Date().toISOString()});
  save(); updateMP(); renderShop(); renderInventory();
  toast(item.name + " achete !");
}

function goTo(name){
  var screens = document.querySelectorAll(".screen");
  for(var i = 0; i < screens.length; i++) screens[i].classList.remove("active");
  $("screen-" + name).classList.add("active");
  var navItems = document.querySelectorAll(".nav-item");
  for(var j = 0; j < navItems.length; j++) navItems[j].classList.remove("a");
  document.querySelector('.nav-item[data-screen="' + name + '"]').classList.add("a");
  if(name === "profile"){ updateStats(); renderHistory(); }
  if(name === "shop"){ renderShop(); renderInventory(); }
}

function setDay(day){
  S.currentDay = day;
  var pills = document.querySelectorAll(".day-pill");
  for(var i = 0; i < pills.length; i++) pills[i].classList.remove("active");
  document.querySelector('.day-pill[data-day="' + day + '"]').classList.add("active");
  renderExercises();
}

function scrollToEx(){
  $("ex-list").scrollIntoView({behavior:"smooth"});
}

function resetAll(){
  if(!confirm("Reinitialiser toute la progression ?")) return;
  S.mp=0; S.xp=0; S.level=1; S.streak=0; S.lastWorkoutDate=null;
  S.workouts=0; S.minutes=0; S.mpEarned=0;
  S.history=[]; S.inventory=[]; S.completedToday={};
  S.currentDay="A"; S.currentExo=null;
  S.timerStart=0; S.timerInterval=null; S.selectedRessenti=2;
  save(); updateMP(); updateLevel(); updateStreak(); updateStats();
  renderExercises(); renderShop(); renderHistory(); renderInventory();
  toast("Progression reinitialisee");
}

// ============================================================
// INIT
// ============================================================
load();
checkStreak();
updateMP();
updateLevel();
updateStreak();
updateStats();
updateCountdown();
renderExercises();
renderShop();
renderHistory();
renderInventory();

// --- NAVIGATION (event delegation via nav) ---
document.querySelector('.nav').addEventListener('click', function(e){
  var btn = e.target.closest('.nav-item');
  if(!btn) return;
  goTo(btn.getAttribute('data-screen'));
});

// --- DAY PILLS ---
document.querySelector('.day-selector').addEventListener('click', function(e){
  var pill = e.target.closest('.day-pill');
  if(!pill) return;
  setDay(pill.getAttribute('data-day'));
});

// --- SHOP CATEGORIES ---
document.querySelector('.shop-cats').addEventListener('click', function(e){
  var cat = e.target.closest('.shop-cat');
  if(!cat) return;
  var cats = document.querySelectorAll('.shop-cat');
  for(var i = 0; i < cats.length; i++) cats[i].classList.remove('a');
  cat.classList.add('a');
  shopCat = cat.getAttribute('data-cat');
  renderShop();
});

// --- EXERCISE LIST (EVENT DELEGATION — survit aux re-renders) ---
document.getElementById('ex-list').addEventListener('click', function(e){
  var startBtn = e.target.closest('.btn-start');
  if(startBtn && !startBtn.disabled){
    startWorkout(startBtn.getAttribute('data-exid'));
    return;
  }
  var infoBtn = e.target.closest('.btn-info');
  if(infoBtn){
    showInfo(infoBtn.getAttribute('data-exid'));
    return;
  }
});

// --- SHOP GRID (EVENT DELEGATION) ---
document.getElementById('shop-grid').addEventListener('click', function(e){
  var btn = e.target.closest('.shop-btn');
  if(btn && !btn.disabled){
    buyItem(btn.getAttribute('data-itemid'));
  }
});

// --- WORKOUT CONTROLS ---
$("btn-complete").addEventListener("click", function(){ completeWorkout(); });
$("btn-cancel").addEventListener("click", function(){ stopWorkout(); toast("Exercice annule"); });
$("w-close").addEventListener("click", function(){ stopWorkout(); });
$("btn-submit").addEventListener("click", function(){ submitWorkout(); });

// --- RESSENTI (event delegation sur comp) ---
document.getElementById('comp').addEventListener('click', function(e){
  var rb = e.target.closest('.rb');
  if(!rb) return;
  var rbs = document.querySelectorAll('.rb');
  for(var i = 0; i < rbs.length; i++) rbs[i].classList.remove('sel');
  rb.classList.add('sel');
  S.selectedRessenti = parseInt(rb.getAttribute('data-r'));
});

// --- INFO MODAL ---
$("btn-info-close").addEventListener("click", function(){ $("info-modal").classList.remove("active"); });

// --- HERO SCROLL ---
$("btn-scroll").addEventListener("click", function(){ scrollToEx(); });

// --- RESET ---
$("btn-reset").addEventListener("click", function(){ resetAll(); });

// Mark loaded
$("js-debug").textContent = "JS OK";
$("js-debug").style.background = "#22c55e";
setTimeout(function(){ $("js-debug").style.opacity = "0"; }, 2000);

setInterval(updateCountdown, 3600000);
