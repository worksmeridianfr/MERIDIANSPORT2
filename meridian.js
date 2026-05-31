/* MERIDIAN APP v2 — MUSCLE SPLITS + WEEKLY CALENDAR UI */
var PROGRAM_END = new Date("2026-07-15T23:59:59");
var MP_BASE = 180;
var STREAK_BONUS = 0.10;
var XP_EXO = 50;
var XP_LVL = 500;

/* ── PROGRAMME : 5 splits musculaires, pas de jambes ── */
var EXO = {
  CHEST: {
    label: "Pectoraux", icon: "💪", color: "#6366f1",
    exos: [
      {id:"ch1",name:"Developpe couche machine",muscle:"Pectoraux",sets:"4x10",rest:"90s",mp:MP_BASE,info:"Machine guidee. Regle la hauteur pour que les poignees soient au niveau des pecs. Pousse en expirant, descends lentement."},
      {id:"ch2",name:"Developpe incline machine",muscle:"Pectoraux haut",sets:"3x12",rest:"75s",mp:MP_BASE,info:"Incline 30-45°. Machine Smith ou presse inclinee. Concentre-toi sur la contraction de la partie haute des pecs."},
      {id:"ch3",name:"Pec deck / Butterfly machine",muscle:"Pectoraux internes",sets:"4x12",rest:"60s",mp:MP_BASE,info:"Machine butterfly. Coudes legerement flechis. Resserre les pecs en fermeture, etire bien en ouverture."},
      {id:"ch4",name:"Dips assistes machine",muscle:"Pectoraux / Triceps",sets:"3x10",rest:"75s",mp:MP_BASE+20,info:"Machine dips assistee. Penche-toi legerement en avant pour viser les pecs. Descends jusqu'au parallelisme."}
    ]
  },
  BACK: {
    label: "Dos", icon: "🏋️", color: "#0ea5e9",
    exos: [
      {id:"ba1",name:"Tirage vertical machine",muscle:"Dos (lats)",sets:"4x10",rest:"90s",mp:MP_BASE,info:"Tirage vertical prise large. Tire jusqu'en bas des pecs. Contracte les lats a fond en bas."},
      {id:"ba2",name:"Rowing machine",muscle:"Dos (milieu)",sets:"4x10",rest:"90s",mp:MP_BASE,info:"Rowing machine ou chest-supported. Rentre les coudes vers l'arriere. Garde le dos droit, pas de balancement."},
      {id:"ba3",name:"Tirage horizontal machine",muscle:"Dos (epaisseur)",sets:"3x12",rest:"75s",mp:MP_BASE,info:"Machine row assis. Prise neutre ou pronation. Tire vers le nombril. Squeeze en fin de mouvement."},
      {id:"ba4",name:"Face pull machine",muscle:"Rear delts / Dos",sets:"3x15",rest:"60s",mp:MP_BASE,info:"Cable poulie haute. Tire vers le visage. Coudes hauts et en dehors. Travaille les deltoïdes posterieurs."}
    ]
  },
  SHOULDERS: {
    label: "Epaules", icon: "🎯", color: "#f59e0b",
    exos: [
      {id:"sh1",name:"Presse militaire machine",muscle:"Epaules (avant)",sets:"4x8",rest:"90s",mp:MP_BASE+20,info:"Presse epaules machine ou Smith. Dos colle au dossier. Ne bloque pas les coudes en haut."},
      {id:"sh2",name:"Elevation laterale machine",muscle:"Epaules (lateral)",sets:"4x12",rest:"60s",mp:MP_BASE,info:"Machine laterale ou cable. Bras legerement flechis. Monte jusqu'a l'horizontal, pas plus haut."},
      {id:"sh3",name:"Elevation frontale machine",muscle:"Epaules (avant)",sets:"3x12",rest:"60s",mp:MP_BASE,info:"Cable ou machine. Monte le bras devant toi jusqu'a l'horizontal. Controle la descente."},
      {id:"sh4",name:"Oiseau machine",muscle:"Epaules (arriere)",sets:"3x15",rest:"60s",mp:MP_BASE,info:"Machine reverse fly ou pec deck inverse. Bras legerement flechis. Ecarte les bras en arriere, serre les omoplates."}
    ]
  },
  ARMS: {
    label: "Bras", icon: "⚡", color: "#10b981",
    exos: [
      {id:"ar1",name:"Curl biceps machine",muscle:"Biceps",sets:"4x12",rest:"60s",mp:MP_BASE,info:"Machine curl ou pupitre. Coudes fixes au sol. Monte sans balancer le buste."},
      {id:"ar2",name:"Curl marteau machine",muscle:"Biceps / Avant-bras",sets:"3x12",rest:"60s",mp:MP_BASE,info:"Machine curl prise neutre. Travaille le brachial et l'avant-bras en plus du biceps."},
      {id:"ar3",name:"Extension triceps machine",muscle:"Triceps",sets:"4x15",rest:"60s",mp:MP_BASE,info:"Machine extension ou cable poulie haute. Coudes fixes le long du corps. Etire bien en haut."},
      {id:"ar4",name:"Triceps corde cable",muscle:"Triceps (lateral)",sets:"3x15",rest:"60s",mp:MP_BASE,info:"Cable poulie haute avec corde. En bas du mouvement, ecarte les deux extremites de la corde. Coudes fixes."}
    ]
  },
  ABS: {
    label: "Abdos + Cardio", icon: "🔥", color: "#ef4444",
    exos: [
      {id:"ab1",name:"Crunch machine",muscle:"Abdominaux",sets:"4x15",rest:"45s",mp:MP_BASE,info:"Machine abdominaux. Roule le buste vers les genoux. Ne tire pas avec le cou. Expire en contractant."},
      {id:"ab2",name:"Rotation abdos machine",muscle:"Obliques",sets:"3x15",rest:"45s",mp:MP_BASE,info:"Machine rotation ou cable. Tourne le buste lentement. Controle le retour, ne laisse pas aller."},
      {id:"ab3",name:"Levage de jambes machine",muscle:"Abdos bas",sets:"3x12",rest:"60s",mp:MP_BASE,info:"Machine levage de jambes ou chaise romaine. Monte les jambes a 90°. Controle la descente."},
      {id:"ab4",name:"Planche avec poids",muscle:"Core",sets:"3x45s",rest:"60s",mp:MP_BASE+20,info:"Planche sur avant-bras. Ajoute un disque sur le dos si trop facile. Dos neutre, pas de cambrure."},
      {id:"ab5",name:"HIIT Bike",muscle:"Cardio",sets:"15 min",rest:"-",mp:MP_BASE+60,info:"Velo assis. 30s full power / 30s lent x 15. Explose sur les phases intenses, recupère vraiment sur les lentes."}
    ]
  }
};

/* Programme sur 5 semaines : cycle des 5 splits */
var DAY_ORDER = ["CHEST","BACK","SHOULDERS","ARMS","ABS"];

var SHOP = [
  {id:"kebab",name:"Menu Kebab",price:1000,cat:"snack",emoji:"🥙",desc:"Un menu kebab classique avec frites et boisson",maxQty:10},
  {id:"shein",name:"Commande Shein",price:5000,cat:"clothes",emoji:"👗",desc:"Commande vetements Shein d'une valeur de 50€",maxQty:1},
  {id:"maillot",name:"Maillot Equipe",price:10000,cat:"clothes",emoji:"👕",desc:"Maillot officiel de ton equipe preferee, valeur 100€",maxQty:1},
  {id:"chaussures",name:"Paire Chaussures",price:3500,cat:"shoes",emoji:"👟",desc:"Paire de chaussures au choix, valeur 35€",maxQty:1},
  {id:"boisson",name:"Boisson Energie",price:250,cat:"snack",emoji:"⚡",desc:"Canette boisson energisante post-training",maxQty:999},
  {id:"creme",name:"Creme Proteinee",price:400,cat:"other",emoji:"🧴",desc:"Creme proteinee pour recuperation musculaire",maxQty:999}
];

var S = {
  mp:0, xp:0, level:1, streak:0, lastWorkoutDate:null, workouts:0, minutes:0, mpEarned:0,
  history:[], inventory:[], completedDays:{}, /* completedDays: { "2026-06-01_CHEST": [exoIds...] } */
  currentExo:null, timerStart:0, timerInterval:null, selectedRessenti:2,
  /* UI state */
  view:"calendar",        /* "calendar" | "session" */
  activeDay:null,         /* "CHEST" | "BACK" | etc. */
  activeDayDate:null,     /* ISO date string */
  expandedExo:null        /* exo id currently expanded */
};

var shopCat = "all";
var months = ["jan","fev","mar","avr","mai","juin","juil","aout","sept","oct","nov","dec"];
var jours = ["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];

function $(id){ return document.getElementById(id); }
function pad2(n){ return n < 10 ? "0"+n : ""+n; }
function dateKey(d){ return d.getFullYear()+"-"+pad2(d.getMonth()+1)+"-"+pad2(d.getDate()); }
function sessionKey(date, split){ return date+"_"+split; }

function load(){
  try {
    var saved = localStorage.getItem("meridian_v2_state");
    if(saved){
      var p = JSON.parse(saved);
      for(var k in p){ if(S.hasOwnProperty(k)) S[k] = p[k]; }
      checkStreak();
    }
  } catch(e){}
}
function save(){
  try { localStorage.setItem("meridian_v2_state", JSON.stringify(S)); } catch(e){}
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

/* ── CALENDAR VIEW ── */
function buildCalendar(){
  /* Génère 30 jours depuis aujourd'hui */
  var today = new Date();
  today.setHours(0,0,0,0);
  var days = [];
  for(var i = 0; i < 30; i++){
    var d = new Date(today.getTime() + i*86400000);
    /* Skip dimanche (0) = repos */
    if(d.getDay() === 0) continue;
    /* Assigne le split en cycle */
    var splitIdx = days.length % DAY_ORDER.length;
    days.push({ date: d, split: DAY_ORDER[splitIdx] });
  }
  return days;
}

function getSessionDone(dateStr, split){
  var key = sessionKey(dateStr, split);
  return S.completedDays[key] || [];
}

function renderCalendar(){
  var container = $("calendar-list");
  var days = buildCalendar();
  var today = new Date(); today.setHours(0,0,0,0);
  var html = "";
  for(var i = 0; i < days.length; i++){
    var d = days[i];
    var dStr = dateKey(d.date);
    var split = EXO[d.split];
    var done = getSessionDone(dStr, d.split);
    var total = split.exos.length;
    var isToday = d.date.getTime() === today.getTime();
    var isPast = d.date.getTime() < today.getTime();
    var isComplete = done.length >= total;
    var dayLabel = isToday ? "Aujourd'hui" : (isPast ? jours[d.date.getDay()] + " " + d.date.getDate() + " " + months[d.date.getMonth()] : jours[d.date.getDay()] + " " + d.date.getDate() + " " + months[d.date.getMonth()]);
    var statusClass = isComplete ? "cal-done" : (isToday ? "cal-today" : (isPast ? "cal-past" : ""));
    html += '<div class="cal-row ' + statusClass + '" data-split="' + d.split + '" data-date="' + dStr + '">' +
      '<div class="cal-left">' +
        '<div class="cal-day-label">' + (isToday ? '<span class="today-badge">AUJOURD\'HUI</span>' : dayLabel) + '</div>' +
        '<div class="cal-split-name">' + split.icon + ' ' + split.label + '</div>' +
      '</div>' +
      '<div class="cal-right">' +
        (isComplete
          ? '<div class="cal-check">✓</div>'
          : '<div class="cal-progress">' + done.length + '/' + total + '</div>') +
        (!isPast || !isComplete ? '<button class="cal-btn" data-split="' + d.split + '" data-date="' + dStr + '">' + (done.length > 0 ? 'REPRENDRE' : 'COMMENCER') + '</button>' : '') +
      '</div>' +
    '</div>';
  }
  container.innerHTML = html;
}

/* ── SESSION VIEW ── */
function openSession(split, dateStr){
  S.view = "session";
  S.activeDay = split;
  S.activeDayDate = dateStr;
  S.expandedExo = null;
  var splitData = EXO[split];
  $("session-title").textContent = splitData.label;
  $("session-icon").textContent = splitData.icon;
  var d = new Date(dateStr);
  $("session-date").textContent = jours[d.getDay()] + " " + d.getDate() + " " + months[d.getMonth()];
  renderSession();
  $("view-calendar").style.display = "none";
  $("view-session").style.display = "block";
  $("view-session").scrollTop = 0;
}

function closeSession(){
  S.view = "calendar";
  S.activeDay = null;
  S.activeDayDate = null;
  S.expandedExo = null;
  $("view-session").style.display = "none";
  $("view-calendar").style.display = "block";
  renderCalendar();
}

function renderSession(){
  var split = S.activeDay;
  var dateStr = S.activeDayDate;
  var splitData = EXO[split];
  var done = getSessionDone(dateStr, split);
  var container = $("session-ex-list");
  var html = "";
  /* Progress bar */
  var pct = Math.round((done.length / splitData.exos.length) * 100);
  $("session-progress-fill").style.width = pct + "%";
  $("session-progress-txt").textContent = done.length + "/" + splitData.exos.length + " exercices";

  for(var i = 0; i < splitData.exos.length; i++){
    var ex = splitData.exos[i];
    var isDone = done.indexOf(ex.id) !== -1;
    var isExpanded = S.expandedExo === ex.id;
    var bonus = Math.floor(ex.mp * (S.streak * STREAK_BONUS));
    var total = ex.mp + bonus;
    html += '<div class="exo-row ' + (isDone ? "exo-done" : "") + (isExpanded ? " exo-expanded" : "") + '" data-exid="' + ex.id + '">' +
      '<div class="exo-row-header">' +
        '<div class="exo-row-left">' +
          (isDone ? '<div class="exo-check">✓</div>' : '<div class="exo-num">' + (i+1) + '</div>') +
          '<div class="exo-row-info">' +
            '<div class="exo-row-name">' + ex.name + '</div>' +
            '<div class="exo-row-meta">' + ex.muscle + ' · ' + ex.sets + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="exo-row-right">' +
          '<div class="exo-mp-small">+' + total + ' MP</div>' +
          '<div class="exo-chevron">' + (isExpanded ? '▲' : '▼') + '</div>' +
        '</div>' +
      '</div>';
    if(isExpanded){
      html += '<div class="exo-detail-panel">' +
        '<div class="exo-detail-info">' + ex.info + '</div>' +
        '<div class="exo-detail-grid">' +
          '<div class="exo-detail-item"><div class="exo-detail-label">Series</div><div class="exo-detail-val">' + ex.sets + '</div></div>' +
          '<div class="exo-detail-item"><div class="exo-detail-label">Repos</div><div class="exo-detail-val">' + ex.rest + '</div></div>' +
          '<div class="exo-detail-item"><div class="exo-detail-label">Muscle</div><div class="exo-detail-val">' + ex.muscle + '</div></div>' +
          '<div class="exo-detail-item"><div class="exo-detail-label">MP</div><div class="exo-detail-val">' + total + '</div></div>' +
        '</div>' +
        (!isDone ? '<button class="btn-start-exo btn-p btn-v" data-exid="' + ex.id + '">DEMARRER CET EXERCICE</button>' : '<div class="exo-done-label">Exercice termine ✓</div>') +
      '</div>';
    }
    html += '</div>';
  }
  container.innerHTML = html;
  /* Check all done → show finish button */
  if(done.length >= splitData.exos.length){
    $("session-finish-wrap").style.display = "block";
  } else {
    $("session-finish-wrap").style.display = "none";
  }
}

function toggleExo(exId){
  S.expandedExo = S.expandedExo === exId ? null : exId;
  renderSession();
}

/* ── WORKOUT TIMER ── */
function startWorkout(exId){
  var ex = null;
  outer: for(var k in EXO){
    for(var i = 0; i < EXO[k].exos.length; i++){
      if(EXO[k].exos[i].id === exId){ ex = EXO[k].exos[i]; break outer; }
    }
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
  var rbs = document.querySelectorAll(".rb");
  for(var i = 0; i < rbs.length; i++) rbs[i].classList.remove("sel");
  var def = document.querySelector('.rb[data-r="2"]');
  if(def) def.classList.add("sel");
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
  /* Mark exo done in session */
  var key = sessionKey(S.activeDayDate, S.activeDay);
  if(!S.completedDays[key]) S.completedDays[key] = [];
  if(S.completedDays[key].indexOf(ex.id) === -1) S.completedDays[key].push(ex.id);
  /* Streak + workouts */
  var today = new Date().toDateString(), last = S.lastWorkoutDate ? new Date(S.lastWorkoutDate).toDateString() : null;
  var yesterday = new Date(Date.now() - 86400000).toDateString();
  if(last !== today){
    if(last === yesterday) S.streak++;
    else S.streak = 1;
    S.lastWorkoutDate = new Date().toISOString();
  }
  /* Count workout only when session complete */
  var splitData = EXO[S.activeDay];
  if(S.completedDays[key].length === splitData.exos.length) S.workouts++;
  var labels = {1:"Facile", 2:"Moyen", 3:"Dur"};
  S.history.push({
    id: ex.id, exercise: ex.name, split: S.activeDay,
    date: new Date().toISOString(), duration: timeStr, mp: total, xp: XP_EXO,
    weight: $("input-weight").value || "-",
    ressenti: labels[S.selectedRessenti] || "Moyen"
  });
  save(); updateMP(); updateLevel(); updateStreak(); updateStats();
  S.expandedExo = null;
  renderSession();
  renderHistory();
  $("comp").classList.remove("active");
  $("workout").classList.remove("active");
  toast("+" + total + " MP gagnes !");
}

/* ── SHOP ── */
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
    html += '<div class="shop-item">' +
      '<div class="shop-img">' + it.emoji + '</div>' +
      '<div class="shop-info"><div class="shop-n">' + it.name + '</div><div class="shop-p"><div class="mp-icon"></div><div class="pv">' + it.price + ' MP</div></div><div class="shop-e">' + it.desc + '</div>' +
      (owned > 0 ? '<div style="font-size:11px;color:var(--accent-light);margin-top:4px;font-weight:700;">En possession: ' + owned + '</div>' : '') +
      '<button class="shop-btn ' + (isMaxed?"owned":"") + '" data-itemid="' + it.id + '" ' + (canBuy?"":"disabled") + '>' + (isMaxed?"MAX ATTEINT":"ACHETER") + '</button></div></div>';
  }
  grid.innerHTML = html;
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
    html += '<div class="hist-item"><div class="hist-left"><div class="hist-ex">' + h.exercise + '</div><div class="hist-meta">' + ds + ' · ' + h.duration + ' · ' + h.ressenti + '</div></div><div class="hist-mp"><div class="mp-icon"></div><div class="hv">+' + h.mp + '</div></div></div>';
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
    html += '<div class="hist-item"><div class="hist-left"><div class="hist-ex">' + it.emoji + ' ' + it.name + '</div><div class="hist-meta">Quantite: ' + it.qty + '</div></div><div class="hist-mp"><div class="mp-icon"></div><div class="hv">' + it.price + ' MP</div></div></div>';
  }
  list.innerHTML = html;
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
  if(name === "training"){
    if(S.view === "calendar") renderCalendar();
    else renderSession();
  }
}

function resetAll(){
  if(!confirm("Reinitialiser toute la progression ?")) return;
  S.mp=0; S.xp=0; S.level=1; S.streak=0; S.lastWorkoutDate=null;
  S.workouts=0; S.minutes=0; S.mpEarned=0;
  S.history=[]; S.inventory=[]; S.completedDays={};
  S.currentExo=null; S.timerStart=0; S.timerInterval=null; S.selectedRessenti=2;
  S.view="calendar"; S.activeDay=null; S.activeDayDate=null; S.expandedExo=null;
  save(); updateMP(); updateLevel(); updateStreak(); updateStats();
  renderCalendar(); renderShop(); renderHistory(); renderInventory();
  $("view-session").style.display = "none";
  $("view-calendar").style.display = "block";
  toast("Progression reinitialisee");
}

/* ══════════════ INIT ══════════════ */
load();
checkStreak();
updateMP();
updateLevel();
updateStreak();
updateStats();
updateCountdown();
renderCalendar();
renderShop();
renderHistory();
renderInventory();

/* Restore session view if was in session */
if(S.view === "session" && S.activeDay && S.activeDayDate){
  openSession(S.activeDay, S.activeDayDate);
}

/* ── NAVIGATION ── */
document.querySelector('.nav').addEventListener('click', function(e){
  var btn = e.target.closest('.nav-item');
  if(!btn) return;
  goTo(btn.getAttribute('data-screen'));
});

/* ── SHOP CATEGORIES ── */
document.querySelector('.shop-cats').addEventListener('click', function(e){
  var cat = e.target.closest('.shop-cat');
  if(!cat) return;
  var cats = document.querySelectorAll('.shop-cat');
  for(var i = 0; i < cats.length; i++) cats[i].classList.remove('a');
  cat.classList.add('a');
  shopCat = cat.getAttribute('data-cat');
  renderShop();
});

/* ── SHOP GRID ── */
document.getElementById('shop-grid').addEventListener('click', function(e){
  var btn = e.target.closest('.shop-btn');
  if(btn && !btn.disabled) buyItem(btn.getAttribute('data-itemid'));
});

/* ── CALENDAR ── */
document.getElementById('calendar-list').addEventListener('click', function(e){
  var btn = e.target.closest('.cal-btn');
  if(btn){
    openSession(btn.getAttribute('data-split'), btn.getAttribute('data-date'));
  }
});

/* ── SESSION : retour + expand exos ── */
document.getElementById('btn-back-session').addEventListener('click', function(){ closeSession(); });

document.getElementById('session-ex-list').addEventListener('click', function(e){
  /* DEMARRER button */
  var startBtn = e.target.closest('.btn-start-exo');
  if(startBtn && !startBtn.disabled){
    startWorkout(startBtn.getAttribute('data-exid'));
    return;
  }
  /* Toggle expand */
  var row = e.target.closest('.exo-row');
  if(row) toggleExo(row.getAttribute('data-exid'));
});

/* ── WORKOUT CONTROLS ── */
$("btn-complete").addEventListener("click", function(){ completeWorkout(); });
$("btn-cancel").addEventListener("click", function(){ stopWorkout(); toast("Exercice annule"); });
$("w-close").addEventListener("click", function(){ stopWorkout(); });
$("btn-submit").addEventListener("click", function(){ submitWorkout(); });

/* ── RESSENTI ── */
document.getElementById('comp').addEventListener('click', function(e){
  var rb = e.target.closest('.rb');
  if(!rb) return;
  var rbs = document.querySelectorAll('.rb');
  for(var i = 0; i < rbs.length; i++) rbs[i].classList.remove('sel');
  rb.classList.add('sel');
  S.selectedRessenti = parseInt(rb.getAttribute('data-r'));
});

/* ── RESET ── */
$("btn-reset").addEventListener("click", function(){ resetAll(); });

/* ── COUNTDOWN ── */
setInterval(updateCountdown, 3600000);

/* Mark loaded */
$("js-debug").textContent = "JS OK";
$("js-debug").style.background = "#22c55e";
setTimeout(function(){ $("js-debug").style.opacity = "0"; }, 2000);
