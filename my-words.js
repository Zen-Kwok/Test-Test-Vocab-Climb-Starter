/* ==========================================================================
   ↓↓↓  老师们，只需要改这个文件。别的文件都不用动。  ↓↓↓
   TEACHERS: this is the only file you need to edit. Leave everything else alone.
   ========================================================================== */

// 显示在开始画面上的单元名称 · unit name shown on the start screen
const UNIT_NAME = "中一 单元五";

// 每一局的时间，单位是秒 · seconds per run
const SECONDS = 90;

// 11 个目标词语的汉语拼音（声调符号）· Hanyu Pinyin with tone marks
const PINYIN = {
  "伤脑筋": "shāng nǎo jīn",
  "拜访": "bài fǎng",
  "中央": "zhōng yāng",
  "漫步": "màn bù",
  "绞尽脑汁": "jiǎo jìn nǎo zhī",
  "华侨": "huá qiáo",
  "银行": "yín háng",
  "由衷": "yóu zhōng",
  "摩天大楼": "mó tiān dà lóu",
  "打击": "dǎ jī",
  "挫折": "cuò zhé"
};

/*
  中一单元五：11 个词语，每个词语 2 题，共 22 题。
  每题都有 4 个固定选项，def 是正确答案。
  同一道题的四个选项刻意控制为相同或非常接近的字数，避免长度提示答案。
*/
const VOCAB = [
  // 伤脑筋
  {
    id: "伤脑筋-1", vocab: "伤脑筋", pinyin: PINYIN["伤脑筋"],
    word: "“伤脑筋”的意思最接近哪一项？",
    def: "因事情难办而烦恼",
    options: ["因事情难办而烦恼", "因事情顺利而开心", "因受到表扬而兴奋", "因休息不足而疲倦"]
  },
  {
    id: "伤脑筋-2", vocab: "伤脑筋", pinyin: PINYIN["伤脑筋"],
    word: "这道难题想了很久也不会做，真让人____。",
    def: "伤脑筋",
    options: ["伤脑筋", "不在乎", "没关系", "想得开"]
  },

  // 拜访
  {
    id: "拜访-1", vocab: "拜访", pinyin: PINYIN["拜访"],
    word: "“拜访”的意思最接近哪一项？",
    def: "有礼貌地前往探望",
    options: ["有礼貌地前往探望", "有计划地外出旅行", "有耐心地等待消息", "有顺序地整理物品"]
  },
  {
    id: "拜访-2", vocab: "拜访", pinyin: PINYIN["拜访"],
    word: "周末，我们带着礼物去____退休的班主任。",
    def: "拜访",
    options: ["拜访", "漫步", "打击", "挫折"]
  },

  // 中央
  {
    id: "中央-1", vocab: "中央", pinyin: PINYIN["中央"],
    word: "“中央”的意思最接近哪一项？",
    def: "位于中心正中的地方",
    options: ["位于中心正中的地方", "位于城市边缘的地方", "位于建筑顶层的地方", "位于河流下游的地方"]
  },
  {
    id: "中央-2", vocab: "中央", pinyin: PINYIN["中央"],
    word: "国旗杆立在操场____。",
    def: "中央",
    options: ["中央", "银行", "华侨", "由衷"]
  },

  // 漫步
  {
    id: "漫步-1", vocab: "漫步", pinyin: PINYIN["漫步"],
    word: "“漫步”的意思最接近哪一项？",
    def: "悠闲缓慢地随意走动",
    options: ["悠闲缓慢地随意走动", "快速匆忙地来回奔跑", "认真专心地坐下读书", "安静耐心地原地等候"]
  },
  {
    id: "漫步-2", vocab: "漫步", pinyin: PINYIN["漫步"],
    word: "傍晚，我们沿着海边慢慢____，欣赏夕阳。",
    def: "漫步",
    options: ["漫步", "拜访", "打击", "挫折"]
  },

  // 绞尽脑汁
  {
    id: "绞尽脑汁-1", vocab: "绞尽脑汁", pinyin: PINYIN["绞尽脑汁"],
    word: "“绞尽脑汁”的意思最接近哪一项？",
    def: "费尽心思想尽办法",
    options: ["费尽心思想尽办法", "毫不费力轻松完成", "不加思考随意决定", "停止尝试马上放弃"]
  },
  {
    id: "绞尽脑汁-2", vocab: "绞尽脑汁", pinyin: PINYIN["绞尽脑汁"],
    word: "为了破解谜题，他____，终于找到了答案。",
    def: "绞尽脑汁",
    options: ["绞尽脑汁", "轻而易举", "漫不经心", "半途而废"]
  },

  // 华侨
  {
    id: "华侨-1", vocab: "华侨", pinyin: PINYIN["华侨"],
    word: "“华侨”指的是哪一类人？",
    def: "旅居国外的中国公民",
    options: ["旅居国外的中国公民", "加入外籍的华人后代", "来华旅游的外国公民", "短期出差的中国游客"]
  },
  {
    id: "华侨-2", vocab: "华侨", pinyin: PINYIN["华侨"],
    word: "陈伯伯仍持中国护照，却长期住在澳大利亚，他是一名____。",
    def: "华侨",
    options: ["华侨", "游客", "外宾", "导游"]
  },

  // 银行
  {
    id: "银行-1", vocab: "银行", pinyin: PINYIN["银行"],
    word: "“银行”主要是什么机构？",
    def: "办理金融业务的机构",
    options: ["办理金融业务的机构", "提供医疗服务的机构", "负责学校教学的机构", "提供公共交通的机构"]
  },
  {
    id: "银行-2", vocab: "银行", pinyin: PINYIN["银行"],
    word: "爸爸到____办理存款手续。",
    def: "银行",
    options: ["银行", "学校", "医院", "车站"]
  },

  // 由衷
  {
    id: "由衷-1", vocab: "由衷", pinyin: PINYIN["由衷"],
    word: "“由衷”的意思最接近哪一项？",
    def: "出自内心真诚表达",
    options: ["出自内心真诚表达", "为了礼貌勉强表达", "按照要求机械重复", "因为害怕故意隐瞒"]
  },
  {
    id: "由衷-2", vocab: "由衷", pinyin: PINYIN["由衷"],
    word: "看到队友夺冠，我____地为他高兴。",
    def: "由衷",
    options: ["由衷", "勉强", "随意", "冷淡"]
  },

  // 摩天大楼
  {
    id: "摩天大楼-1", vocab: "摩天大楼", pinyin: PINYIN["摩天大楼"],
    word: "“摩天大楼”指的是什么？",
    def: "非常高大的现代楼房",
    options: ["非常高大的现代楼房", "面积宽广的低层商场", "年代久远的传统民居", "位于郊外的独立住宅"]
  },
  {
    id: "摩天大楼-2", vocab: "摩天大楼", pinyin: PINYIN["摩天大楼"],
    word: "城市里一座座____高耸入云。",
    def: "摩天大楼",
    options: ["摩天大楼", "体育场馆", "地下车站", "社区花园"]
  },

  // 打击
  {
    id: "打击-1", vocab: "打击", pinyin: PINYIN["打击"],
    word: "“打击”在“信心受到打击”中是什么意思？",
    def: "使人受到挫败伤害",
    options: ["使人受到挫败伤害", "使人得到鼓励支持", "使人感到轻松愉快", "使人获得表扬奖励"]
  },
  {
    id: "打击-2", vocab: "打击", pinyin: PINYIN["打击"],
    word: "这次落选对他的信心造成了不小的____。",
    def: "打击",
    options: ["打击", "鼓励", "帮助", "支持"]
  },

  // 挫折
  {
    id: "挫折-1", vocab: "挫折", pinyin: PINYIN["挫折"],
    word: "“挫折”的意思最接近哪一项？",
    def: "前进中遇到的失败",
    options: ["前进中遇到的失败", "努力后得到的成功", "比赛前受到的鼓励", "学习中获得的进步"]
  },
  {
    id: "挫折-2", vocab: "挫折", pinyin: PINYIN["挫折"],
    word: "学习过程中遇到____时，不要轻易放弃。",
    def: "挫折",
    options: ["挫折", "成功", "奖励", "进步"]
  }
];

/*
  游戏原本会从其他题目的答案中随机抓三个干扰项。
  这里改成使用每题自己准备好的四个选项，并让 22 题在全部出现前不重复。
*/
let questionQueue = [];
let pinyinEnabled = false;

function buildQuestionQueue(){
  const q = VOCAB.slice();
  for (let i = q.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [q[i], q[j]] = [q[j], q[i]];
  }

  // 尽量避免同一个词语的两道题连续出现。
  for (let i = 1; i < q.length; i++){
    if (q[i].vocab !== q[i - 1].vocab) continue;
    const swapAt = q.findIndex((item, j) => j > i && item.vocab !== q[i - 1].vocab);
    if (swapAt > i) [q[i], q[swapAt]] = [q[swapAt], q[i]];
  }
  return q;
}

function renderPinyin(){
  const line = document.getElementById("pinyinLine");
  if (!line) return;
  line.textContent = (pinyinEnabled && answer && answer.pinyin) ? answer.pinyin : "";
  line.classList.toggle("on", Boolean(pinyinEnabled && answer && answer.pinyin));
}

function updatePinyinToggle(){
  const button = document.getElementById("pinyinToggle");
  if (!button) return;
  button.setAttribute("aria-pressed", pinyinEnabled ? "true" : "false");
  button.classList.toggle("on", pinyinEnabled);
  button.innerHTML = '<span>汉语拼音</span><b>' + (pinyinEnabled ? "开" : "关") + '</b>';
}

function setPinyinEnabled(value){
  pinyinEnabled = Boolean(value);
  try { localStorage.setItem("vocabClimbPinyin", pinyinEnabled ? "on" : "off"); } catch (e) {}
  updatePinyinToggle();
  renderPinyin();
}

setTimeout(() => {
  /* --- 汉语拼音开关 · Hanyu Pinyin toggle ---------------- */
  const style = document.createElement("style");
  style.textContent = `
    #pinyinToggle{
      position:absolute; top:10px; right:10px; z-index:10;
      width:88px; min-height:44px; padding:5px 8px;
      border-radius:11px; border:1px solid rgba(224,168,60,.5);
      background:rgba(18,15,11,.88); color:#f6efe2;
      font-family:inherit; cursor:pointer;
      box-shadow:0 4px 14px rgba(0,0,0,.3);
      display:flex; flex-direction:column; align-items:center; justify-content:center;
      line-height:1.05;
    }
    #pinyinToggle span{ font-size:.68rem; letter-spacing:.05em; opacity:.82; }
    #pinyinToggle b{ margin-top:3px; font-size:.9rem; color:#e0a83c; }
    #pinyinToggle.on{ border-color:rgba(105,190,111,.9); background:rgba(28,67,35,.92); }
    #pinyinToggle.on b{ color:#9ee7a4; }
    #pinyinLine{
      display:none; text-align:center; min-height:1.3em;
      margin:-5px 0 10px; font-size:clamp(.86rem,3.4vw,1rem);
      line-height:1.25; letter-spacing:.045em; color:#f3d47e;
      font-weight:600;
    }
    #pinyinLine.on{ display:block; }
    @media (max-width:520px){
      .hud{ padding-right:108px !important; }
    }
  `;
  document.head.appendChild(style);

  const stage = document.querySelector(".stage");
  if (stage && !document.getElementById("pinyinToggle")) {
    const toggle = document.createElement("button");
    toggle.id = "pinyinToggle";
    toggle.type = "button";
    toggle.setAttribute("aria-label", "开启或关闭汉语拼音");
    toggle.onclick = () => setPinyinEnabled(!pinyinEnabled);
    stage.appendChild(toggle);
  }

  const questionEl = document.getElementById("word");
  if (questionEl) {
    questionEl.style.fontSize = "clamp(1.15rem, 4.6vw, 1.55rem)";
    questionEl.style.letterSpacing = ".02em";
    questionEl.style.lineHeight = "1.45";

    if (!document.getElementById("pinyinLine")) {
      const line = document.createElement("div");
      line.id = "pinyinLine";
      line.setAttribute("aria-live", "polite");
      questionEl.insertAdjacentElement("afterend", line);
    }
  }

  try { pinyinEnabled = localStorage.getItem("vocabClimbPinyin") === "on"; } catch (e) { pinyinEnabled = false; }
  updatePinyinToggle();
  renderPinyin();

  /* --- 使用固定四选项与 22 题队列 ------------------------ */
  if (typeof nextQuestion === "function") {
    nextQuestion = function(){
      // 新一局从全新的 22 题队列开始。
      if (recent.length === 0 && score === 0 && altitude === 0) {
        questionQueue = buildQuestionQueue();
      }
      if (!questionQueue.length) questionQueue = buildQuestionQueue();

      answer = questionQueue.shift();
      recent.push(answer.id);

      $("word").textContent = answer.word;
      renderPinyin();

      const box = $("options");
      box.innerHTML = "";

      const choices = answer.options.slice();
      for (let i = choices.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [choices[i], choices[j]] = [choices[j], choices[i]];
      }

      choices.forEach((choice, i) => {
        const b = document.createElement("button");
        b.innerHTML = '<span class="n">' + (i + 1) + '</span><span>' + escapeHtml(choice) + '</span>';
        b.onclick = () => choose(b, choice);
        box.appendChild(b);
      });
    };
  }

  // 开始画面显示真实的词语与题目数量。
  const info = document.getElementById("startInfo");
  if (info) {
    info.innerHTML = '<b>' + UNIT_NAME + '</b><br>11 个词语 · 22 道题 · ' + Number(SECONDS) + ' 秒';
  }

  // 游戏角色：使用 6 格女生角色精灵图，沿用原有待机、攀爬、转向和庆祝动画。
  const sprite = document.getElementById("climber");
  if (sprite) {
    sprite.style.backgroundImage = 'url("schoolgirl-climber.svg")';
    sprite.setAttribute("role", "img");
    sprite.setAttribute("aria-label", "女生攀登角色");
  }
}, 0);

/* ==========================================================================
   ↑↑↑  改到这里为止。END OF THE PART YOU EDIT.  ↑↑↑
   ========================================================================== */
