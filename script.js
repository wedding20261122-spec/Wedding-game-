// ================================================
// 1. 關卡靜態資料（含前台快速驗證答案）
// ================================================
const pages = [
  {
    type: "input",
    story: `很開心今天能與大家相聚\n一起見證我們人生的重要時刻\n\n所以今天的婚禮\n也偷偷準備了一場\n屬於大家的冒險\n\n接下來的婚宴中\n網頁不只是搜尋工具\n更是大家破解謎題的重要夥伴\n\n不用擔心\n就算沒有玩過密室逃脫\n也一定能慢慢上手\n\n那麼……`,
    prompt: "（請輸入「新手村」）", placeholder: "請輸入答案…", answer: "新手村"
  },
  {
    type: "input",
    story: `從現在開始\n你們就是今天的——「現場偵探」\n\n放心\n這裡沒有體力值\n也沒有 Game Over\n\n只要仔細觀察\n勇敢猜測\n再加上一點點……\n\n「不要臉的直覺」\n\n就能繼續往下走\n\n接下來先來一道簡單的暖身題`,
    prompt: "（請輸入「暖身題」）", placeholder: "請輸入答案…", answer: "暖身題"
  },
  {
    type: "input", title: "", story: "今天的主角是誰?",
    prompt: "（請輸入「___________」）\nPS. 無告知答案數量，需要自行解答，輸入「」內答案",
    placeholder: "請輸入答案…", answer: "couple"
  },
  {
    type: "imageText", story: `沒錯\n今天就是這兩位主角\n\n而且……\n\n你們現在看到的\n就是他們本人`,
    image: ["001.jpg"], next: true
  },
  { type: "text", story: "接下來稍微增加一點難度", next: true },
  {
    type: "input", title: "", story: "新郎新娘都是位很有愛心的人，請問他們分別做過哪些公益?",
    prompt: "（請輸入「□□□□」）\nPS.有告知答案數量，輸入「」內答案",
    placeholder: "請輸入答案…", answer: "charity"
  },
  { type: "image", image: ["002.jpg"], next: true },
  { type: "image", image: ["003.jpg"], next: true },
  {
    type: "text", story: `原來你們兩個\n不只很會放閃\n還真的有在做好事`, next: true
  },
  {
    type: "text", story: `新手村教學完成！\n\n恭喜各位偵探\n你們已經學會最重要的事情：\n\n① 看線索\n② 找答案\n③ 直接輸入答案\n④ 不要害怕猜錯\n\n從現在開始\n遊戲正式開始\n\n準備好了嗎？`, next: true
  },
  {
    type: "input", title: "", story: `新手村教學已完成\n請大家放下手機先享用餐點\n待主詞人提示後再繼續遊戲\n感謝大家配合`,
    prompt: "請輸入 「□□□□□」 ", placeholder: "請輸入答案…", answer: "我獨自升級", locked: true
  },
  {
    type: "input", title: "", story: `準備好了嗎?\n後續每道關卡\n請認真觀看提示\n可能會有意想不到的驚喜唷(つ≧維≦)つ`,
    prompt: "請輸入 「□□□」 ", placeholder: "請輸入答案…", answer: "新娘篇", locked: true
  },
  {
    type: "input", title: "", story: `婚禮當天\n新娘突然失去了記憶\n她隱約知道今天是個非常重要的日子\n卻怎麼也想不起來究竟發生了什麼\n婚禮即將開始\n時間所剩不多\n請各位賓客化身偵探\n在婚宴結束前\n協助新娘拼湊遺失的回憶\n找回屬於今天的幸福`,
    prompt: "（請輸入「開始調查」）\n展開這場尋找記憶的旅程", placeholder: "請輸入答案…", answer: "開始調查"
  },
  {
    type: "inputImage", image: ["w1.jpg"], story: `新娘緩緩睜開眼睛\n發現自己正躺在地上\n她揉了揉腦袋\n只覺得頭昏昏的\n卻完全想不起來剛才發生了什麼\n\n環顧四周\n\n只看到桌上放著一本筆記本以及一個空瓶子\n但筆記本被密碼鎖鎖住了!!`,
    prompt: "（請輸入「新娘好正」）\n已獲得提示", placeholder: "請輸入答案…", answer: "新娘好正"
  },
  {
    type: "inputImage", image: ["w2.jpg"], story: "發現一張紙條，或許……答案就在裡面",
    hint: "提示：密碼絕對不是我生日",
    prompt: "（請輸入「□□□□」）", placeholder: "請輸入4位數密碼", answer: "0517", isNumericCode: true
  },
  {
    type: "imageText", image: ["w3.jpg"], story: `「密碼不是我生日ㄛ」\n既然都特地寫了這句話……\n那就先試試生日吧！\n喀──\n還以為多難\n還真的打開了！\n果然\n越刻意否認的東西\n越值得先試試看`, next: true
  },
  { type: "image", image: ["wd1.jpg"], next: true },
  { type: "image", image: ["wd2.jpg"], next: true },
  { type: "image", image: ["wd3.jpg"], next: true },
  { type: "image", image: ["wd4.jpg"], next: true },
  {
    type: "inputImage", story: `翻閱著筆記本\n一張張照片、一段段回憶慢慢浮現在腦海\n其中\n有一個人總是不斷出現在每一頁\n一起旅行、一起吃飯、一起笑、一起拍照……\n\n可是……\n她卻怎麼也想不起他的名字\n\n但……他是誰?`,
    prompt: "（請輸入「□□□」）", placeholder: "請輸入答案…", answer: "林恩澤"
  },
  { type: "imageText", image: ["w4.jpg"], story: `對！就是今天最帥的新郎官`, next: true },
  {
    type: "inputImage", image: ["w51.jpg", "w52.jpg"], story: `等等……\n我怎麼會躺在地上？\n難道……\n剛剛喝的飲料有問題？`,
    prompt: "（請輸入「□□」）", placeholder: "請輸入答案…", answer: "梅酒"
  },
  {
    type: "imageText", image: ["w6.jpg"], story: `什麼？！\n我一直以為那是梅子汁！\n沒想到竟然是梅酒？！\n難怪越喝越順口……\n\n我到底喝了多少啊？\n雖然我平常就有點迷迷糊糊的\n但喝幾口就直接失億\n也太誇張了吧！`, next: true
  },
  {
    type: "input", story: `等等……\n如果今天不是普通的一天\n那今天到底是什麼日子？`,
    prompt: "（請輸入___________）", placeholder: "請輸入答案…", answer: "20261122"
  },
  {
    type: "imageText", image: ["w7.jpg"], story: `我終於想起來了\n原來\n今天不是我忘記要做什麼的日子\n而是我要永遠記住的一天\n\n謝謝每一位幫助我找回記憶的偵探\n因為有你們~\n\n我才能想起這份屬於今天的幸福`, next: true
  },
  {
    type: "input", story: `新娘篇已完成\n請大家放下手機先享用餐點\n待主詞人提示後再繼續遊戲\n感謝大家配合`,
    prompt: "(請輸入___________）", placeholder: "請輸入答案…", answer: "開始玩耍", locked: true
  },
  {
    type: "input", story: `二進敲敲杯時間到🥂\n請各位偵探仔細觀察新郎身上的精緻名牌\n那是屬於新郎的重要標誌唷!`,
    prompt: "請輸入 「□□□□□」 ", placeholder: "請輸入答案…", answer: "全場NPC", locked: true
  },
  {
    type: "text", story: `婚禮前夕\n新郎忙著確認婚宴大小事\n桌次、菜單、流程、禮物……\n腦袋裡塞滿了各種待辦事項\n\n連續好幾天都沒睡好\n眼看明天就是人生最重要的一天\n家人看不下去\n決定拿出「祖傳秘方」\n讓他今晚好好睡上一覺\n\n只是……\n這一覺好像睡得太好了`, next: true
  },
  {
    type: "inputImage", image: ["e1.jpg"], story: `新郎醒來後\n腦袋昏昏沉沉\n一切都準備好了……\n等等！\n好像少了一樣最重要的東西！\n\n他翻遍了桌面\n卻怎麼也找不到`,
    prompt: "（請輸入「□□」）", placeholder: "請輸入答案…", answer: "ring"
  },
  {
    type: "imageText", image: ["e6.jpg"], story: `原來是婚戒！\n怎麼躲在這裡啊！\n也不會自己出來打聲招呼\n害我找了老半天\n\n有了婚戒\n終於可以放心出門了\n\n等等……\n\n今天還得去迎接新娘\n可是平常上班騎的機車偏偏在今天罷工……\n看來只好派出我的寶貝了！`, next: true
  },
  {
    type: "inputImage", image: ["e650.jpg"], story: "",
    prompt: "（請輸入新郎寶貝的「□□□」cc 重型機車）", placeholder: "請輸入數字", answer: "650"
  },
  {
    type: "imageText", image: ["ec650.jpg"], story: `沒錯！\n就是陪伴我許多旅程的 C650！\n今天就靠你載 me 去迎接人生最重要的另一半！`, next: true
  },
  {
    type: "input", story: `我們要抵達的位置於：\n靚點飯店的天日廳 2 樓\n共有 200 位賓客需要前往會場\n\n館內設有電梯，其規格如下：\n\n最大載重：900 公斤\n每趟最多搭乘：12 人\n\n賓客體重統計如下：`,
    table: true,
    tableRows: [["50 公斤", "42 人"], ["60 公斤", "58 人"], ["70 公斤", "46 人"], ["80 公斤", "34 人"], ["90 公斤", "20 人"]],
    extra: `婚宴主持人提供上述資料\n希望大家能思考如何讓所有賓客盡快且安全地抵達會場\n\n請問：賓客們要怎麼抵達會場？`,
    prompt: "（請輸入「___________」）", placeholder: "請輸入答案…", answer: "transport"
  },
  {
    type: "inputImage", image: ["E2.jpg"], story: `終於順利抵達婚宴現場\n接著要把最重要的東西放到指定位置……\n可是……\n我到底該放在哪裡？`,
    prompt: "（請輸入「□□□」）", placeholder: "請輸入答案…", answer: "新娘房"
  },
  {
    type: "inputImage", image: ["E9487.jpg"], story: `等等……\n事情好像還沒結束\n因為太擔心婚禮還有哪些地方沒準備好\n我一邊檢查、一邊思考\n\n結果……\n\n竟然把自己反鎖在房間裡了！\n\n\n各位偵探\n拜託救救我！`,
    prompt: "（請輸入「9□□□」）", placeholder: "請輸入4位數密碼", answer: "9487", isNumericCode: true
  },
  {
    type: "input", story: `嗯!真是 9487 呢!!\n把自己關在房內\n再晚一點\n新娘可能就要逃婚了\n\n總算一切都準備完成\n接下來\n就輪到今天最重要的另一件事了……`,
    prompt: "（請輸入「開飯」）", placeholder: "請輸入答案…", answer: "開飯"
  },
  {
    type: "inputImage", image: ["E5.jpg"], story: `感謝您們配合我們玩到現在\n希望我們準備的餐點您們還滿意\n期盼今天大家能吃得開心、聊得盡興`,
    prompt: "（請輸入___________）", placeholder: "請輸入答案…", answer: "彩蛋", locked: true
  },
  {
    type: "inputImage", image: ["E94520.jpg"], story: "",
    prompt: "（請輸入「__________」）", placeholder: "請輸入答案…", answer: "131494520", locked: true
  },
  {
    type: "imageText", image: ["Egg.jpg"], story: `彩蛋已解鎖！\n\n謝謝各位偵探一路玩到最後\n記得找我們拿彩蛋禮物唷！\n\nPS 轉傳沒用唷~\n請記得重新整理，後台才會有您的資料唷~`, final: true
  }
];

const fullFlow = pages;
let current = 0;

// ================================
// 🌟 核心新功能：圖片背景預載入機制 (Preload)
// ================================
const preloadedImages = new Set();

function preloadNextImages(currentIndex) {
  // 自動預先下載未來 3 個關卡的所有圖片
  for (let i = currentIndex + 1; i <= currentIndex + 3 && i < fullFlow.length; i++) {
    const page = fullFlow[i];
    if (page && page.image && Array.isArray(page.image)) {
      page.image.forEach(imgSrc => {
        if (!preloadedImages.has(imgSrc)) {
          const img = new Image();
          img.src = imgSrc;
          preloadedImages.add(imgSrc);
        }
      });
    }
  }
}

// ================================
// 2. 玩家資料與 LocalStorage 設定
// ================================
const GUEST_STORAGE_KEY = "weddingQuestGuest";
const GUEST_LEVEL_KEY = "weddingQuestLevel";
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzQ8N5pAKIVmAfHUiEgf1bbpFI0hm9H54uIrlWzKtFOAKrG4yvdz__Q_EzG2jSti63KVA/exec";

let guestInfo = null;

function loadGuestInfo() {
  try {
    const saved = localStorage.getItem(GUEST_STORAGE_KEY);
    if (saved) guestInfo = JSON.parse(saved);
  } catch (err) {
    console.warn("讀取玩家資料失敗", err);
  }
}

function saveGuestInfo(desk, name) {
  guestInfo = { desk: String(desk).trim(), name: String(name).trim() };
  localStorage.setItem(GUEST_STORAGE_KEY, JSON.stringify(guestInfo));
}

// 背景默默回傳進度給 Google 試算表
function sendProgress(levelNumber) {
  if (!guestInfo) return;
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes("你的_Google")) return;

  const data = new URLSearchParams();
  data.append("desk", guestInfo.desk);
  data.append("name", guestInfo.name);
  data.append("level", String(levelNumber));
  data.append("completed", levelNumber >= fullFlow.length ? "是" : "否");

  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    body: data,
    keepalive: true
  }).catch(err => {
    console.warn("進度回傳失敗", err);
  });
}

// ================================
// 3. 字串清洗與前台本地驗證邏輯
// ================================
function normalize(s) {
  return String(s || "")
    .trim()
    .toLowerCase()
    .replace(/[\s\u3000]+/g, "")
    .replace(/[，,。．.·・！!、/／\-—_「」『』（()()：:；;～~]/g, "");
}

function isCorrect(kind, value) {
  const v = normalize(value);
  if (kind === "couple") {
    return v === "林恩澤黄筱雯" || v === "黄筱雯林恩澤";
  }
  if (kind === "charity") {
    return v.includes("捐血") && v.includes("捐髮");
  }
  if (kind === "ring") {
    return v.includes("婚戒") || v.includes("戒指");
  }
  if (kind === "transport") {
    return v.includes("手扶梯") || v.includes("電梯");
  }
  if (kind === "20261122") {
    return v === "20261122" || v === "2026年11月22日" || v === "2026年11月22";
  }
  return v === normalize(kind);
}

// ================================
// 4. 玩家登入介面
// ================================
function showGuestForm() {
  const firstPage = document.querySelector('[data-page="1"]');
  if (!firstPage) return;

  document.querySelectorAll(".game-page").forEach(el => {
    el.classList.remove("active");
    el.innerHTML = "";
  });

  firstPage.classList.add("active");

  const deskList = [
    " 主桌 ", " B1 ", " B2 ", " B3 ", " B5 ", " B6 ", " B7 ", " B8 ",
    " C1 ", " C2 ", " C3 ", " C5 ", " D1 ", " D2 ", " E1 ", " F1 ",
    " G1 ", " G2 ", " H1 ", " 工作人員 "
  ];

  let deskOptions = '<option value="">請選擇您的桌號</option>';
  deskList.forEach(desk => {
    deskOptions += `<option value="${desk}">${desk}</option>`;
  });

  firstPage.innerHTML = `
    <div class="brand" style="text-align: center;">
      <span class="crown">♛</span> WEDDING QUEST
    </div>
    <div class="ornament" style="text-align: center;">— ♥ —</div>
    <div class="card guest-start" style="text-align: center;">
      <div class="story large" style="text-align: center; margin-bottom: 50px;">
        歡迎來到恩澤與筱雯的大吃大喝派對
      </div>
      <div class="guest-start-card" style="text-align: center;">
        <div class="guest-title" style="text-align: center;">開始遊戲前</div>
        <div class="guest-subtitle" style="text-align: center;">請填寫您的桌號與姓名</div>
        <div style="background: #fff5f6; border: 1px dashed #E88D9C; padding: 10px; border-radius: 8px; font-size: 13px; color: #C65B6D; margin: 15px 0; text-align: center; line-height: 1.5;">
          💡 請輸入真實的桌號與姓名唷！<br>以免找不到人拿禮物～
        </div>
        <div class="guest-form" style="text-align: left;">
          <label style="display: block; text-align: left; margin-bottom: 10px;">
            桌號
            <select id="guestDesk" class="answer-input" style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd; background:#fff; font-size:16px; margin-top: 5px;">
              ${deskOptions}
            </select>
          </label>
          <label style="display: block; text-align: left; margin-bottom: 15px;">
            姓名
            <input id="guestName" type="text" placeholder="請輸入姓名" autocomplete="name" style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd; font-size:16px; margin-top: 5px; box-sizing: border-box;">
          </label>
          <button class="submit-btn" data-action="start-game" style="width: 100%;">開始遊戲 →</button>
        </div>
      </div>
    </div>
    <div class="bottom-flower" style="text-align: center;">
      <span>🌹</span>
      <div class="gold-script">Together We Begin ♡</div>
      <span>🌷</span>
    </div>
  `;

  const deskInput = document.getElementById("guestDesk");
  const nameInput = document.getElementById("guestName");
  if (deskInput) deskInput.focus();

  [deskInput, nameInput].forEach(input => {
    if (!input) return;
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") startGame();
    });
  });
}

function startGame() {
  const deskInput = document.getElementById("guestDesk");
  const nameInput = document.getElementById("guestName");
  if (!deskInput || !nameInput) return;

  const desk = deskInput.value.trim();
  const name = nameInput.value.trim();

  if (!desk || !name) {
    alert("請先輸入桌號與姓名");
    if (!desk) deskInput.focus();
    else nameInput.focus();
    return;
  }

  saveGuestInfo(desk, name);
  localStorage.setItem(GUEST_LEVEL_KEY, 0);

  sendProgress(1);
  showPage(0);
}

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}

function asset(src) {
  return `<div class="media-frame"><img src="${esc(src)}" alt="" loading="eager"></div>`;
}

// ================================
// 5. 畫面渲染與控制
// ================================
function render(page, pageNo) {
  const el = document.querySelector(`[data-page="${((pageNo - 1) % 23) + 1}"]`);
  if (!el) return;

  let html = `<div class="brand"><span class="crown">♛</span> WEDDING QUEST </div>`;
  if (page.title) html += `<h1 class="hero-title">${esc(page.title)}</h1>`;
  if (page.subtitle) html += `<div class="hero-subtitle">${esc(page.subtitle)}</div>`;
  html += `<div class="ornament">— ♥ —</div><div class="card">`;

  if (page.image) {
    html += `<div class="image-card">${page.image.map(asset).join('<div class="spacer"></div>')}</div>`;
  }
  if (page.story) html += `<div class="story ${page.type === "text" ? "large" : ""}">${esc(page.story)}</div>`;
  if (page.hint) html += `<div class="hint"><div class="hint-title">💡 提示</div>${esc(page.hint)}</div>`;
  if (page.table) {
    html += `<table class="data-table"><thead><tr><th>體重</th><th>人數</th></tr></thead><tbody>`;
    html += page.tableRows.map(r => `<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td></tr>`).join("");
    html += `</tbody></table><div class="story">${esc(page.extra)}</div>`;
  }

  if (page.prompt) {
    html += `<div class="prompt">${esc(page.prompt)}</div>`;
    if (page.isNumericCode) {
      html += `<div class="code-grid" data-code-grid style="--code-count:4">
        <input inputmode="numeric" maxlength="1" aria-label="第1位">
        <input inputmode="numeric" maxlength="1" aria-label="第2位">
        <input inputmode="numeric" maxlength="1" aria-label="第3位">
        <input inputmode="numeric" maxlength="1" aria-label="第4位">
      </div>`;
    } else {
      html += `<div class="input-wrap"><input class="answer-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(page.placeholder || "請輸入答案…")}" aria-label="答案輸入"></div>`;
    }
    html += `<button class="submit-btn" data-action="submit">送出 →</button>`;
  } else if (page.next || page.final) {
    html += `<button class="next-btn" data-action="next">${page.final ? "完成遊戲 ♥" : "下一步 →"}</button>`;
  }
  html += `</div>`;

  html += `<div class="bottom-flower"><span>🌹</span><div class="gold-script">${page.final ? "Thank You ♥" : "Together We Begin ♡"}</div><span>🌷</span></div>`;
  el.innerHTML = html;
}

function showPage(i) {
  current = Math.max(0, Math.min(fullFlow.length - 1, i));

  if (guestInfo) {
    localStorage.setItem(GUEST_LEVEL_KEY, current);
    sendProgress(current + 1);
  }

  document.querySelectorAll(".game-page").forEach(el => {
    el.classList.remove("active");
    el.innerHTML = "";
  });

  const slot = document.querySelector(`[data-page="${(current % 23) + 1}"]`);
  if (slot) {
    render(fullFlow[current], current + 1);
    slot.classList.add("active");
  }
  window.scrollTo({ top: 0, behavior: "smooth" });

  // 🌟 每次切換頁面時，自動觸發背景預載未來 3 關的圖片
  preloadNextImages(current);
}

function readAnswer() {
  const grid = document.querySelector(`[data-page="${(current % 23) + 1}"] [data-code-grid]`);
  if (grid) return [...grid.querySelectorAll("input")].map(x => x.value).join("");
  const input = document.querySelector(`[data-page="${(current % 23) + 1}"] .answer-input`);
  return input ? input.value : "";
}

function shake() {
  const host = document.querySelector(`[data-page="${(current % 23) + 1}"] [data-code-grid]`) ||
               document.querySelector(`[data-page="${(current % 23) + 1}"] .answer-input`);
  if (host) {
    host.classList.remove("error");
    void host.offsetWidth;
    host.classList.add("error");
  }
}

function correctFeedback() {
  const f = document.getElementById("feedback");
  const c = document.getElementById("confetti");

  if (c) {
    c.innerHTML = "";
    for (let i = 0; i < 22; i++) {
      const x = document.createElement("i");
      x.style.setProperty("--x", (Math.random() * 260 - 130) + "px");
      x.style.setProperty("--y", (Math.random() * 260 - 130) + "px");
      x.style.transform = `rotate(${Math.random() * 180}deg)`;
      x.style.background = ["#E88D9C", "#F2C76E", "#EFA6B5", "#D4AF37"][i % 4];
      c.appendChild(x);
    }
  }

  if (f) {
    f.classList.add("show");
    f.setAttribute("aria-hidden", "false");
  }

  setTimeout(() => {
    if (f) {
      f.classList.remove("show");
      f.setAttribute("aria-hidden", "true");
    }
    showPage(current + 1);
  }, 1000);
}

// ================================
// 6. 提交與事件處理
// ================================
function handleSubmit(page) {
  const val = readAnswer();
  let ok = isCorrect(page.answer, val);

  if (ok) {
    correctFeedback();
  } else {
    shake();
    const prompt = document.querySelector(`[data-page="${(current % 23) + 1}"] .prompt`);
    if (prompt) {
      const old = prompt.innerHTML;
      prompt.innerHTML = `<span style="color:#C65B6D;font-weight:800">答案好像不太對唷，再努力想想看</span>`;
      setTimeout(() => { prompt.innerHTML = old; }, 1400);
    }
  }
}

// 事件監聽
document.addEventListener("click", e => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  const page = fullFlow[current];

  if (btn.dataset.action === "start-game") startGame();
  if (btn.dataset.action === "submit") handleSubmit(page);
  if (btn.dataset.action === "next") showPage(current + 1);
});

document.addEventListener("keydown", e => {
  const grid = e.target.closest("[data-code-grid]");
  if (grid && e.target.tagName === "INPUT") {
    if (e.key === "Backspace" && !e.target.value) {
      const all = [...grid.querySelectorAll("input")], idx = all.indexOf(e.target);
      if (idx > 0) all[idx - 1].focus();
    } else if (e.key.length === 1 && /\d/.test(e.key)) {
      setTimeout(() => {
        const all = [...grid.querySelectorAll("input")], idx = all.indexOf(e.target);
        if (idx < all.length - 1) all[idx + 1].focus();
      }, 0);
    }
  }
  if (e.key === "Enter") {
    const btn = document.querySelector(`[data-page="${(current % 23) + 1}"] [data-action="submit"]`);
    if (btn) btn.click();
  }
});

function buildPetals() {
  const host = document.getElementById("petals");
  if (!host) return;
  for (let i = 0; i < 16; i++) {
    const p = document.createElement("i");
    p.className = "petal";
    p.style.left = (Math.random() * 100) + "%";
    p.style.animationDelay = (Math.random() * 9) + "s";
    p.style.animationDuration = (8 + Math.random() * 7) + "s";
    host.appendChild(p);
  }
}

// 初始化
buildPetals();
loadGuestInfo();

if (guestInfo) {
  const savedLevel = localStorage.getItem(GUEST_LEVEL_KEY);
  const startLevel = savedLevel !== null ? Number(savedLevel) : 0;
  showPage(startLevel);
} else {
  showGuestForm();
}