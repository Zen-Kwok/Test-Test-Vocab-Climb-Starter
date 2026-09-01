/* ==========================================================================
   ↓↓↓  老师们，只需要改这个文件。别的文件都不用动。  ↓↓↓
   TEACHERS: this is the only file you need to edit. Leave everything else alone.
   ========================================================================== */

// 显示在开始画面上的单元名称 · unit name shown on the start screen
const UNIT_NAME = "中一 单元五";

// 每一局的时间，单位是秒 · seconds per run
const SECONDS = 90;

/*
  中一单元五：11 个词语，每个词语 2 题，共 22 题。
  每题都有 4 个固定选项，def 是正确答案。
*/
const VOCAB = [
  // 伤脑筋
  {
    id: "伤脑筋-1", vocab: "伤脑筋",
    word: "“伤脑筋”的意思最接近哪一项？",
    def: "因事情难办而感到烦恼",
    options: ["因事情难办而感到烦恼", "悠闲地随意走动", "真心实意地表达", "有礼貌地前往看望别人"]
  },
  {
    id: "伤脑筋-2", vocab: "伤脑筋",
    word: "这道难题想了很久也不会做，真让人____。",
    def: "伤脑筋",
    options: ["伤脑筋", "漫步", "由衷", "拜访"]
  },

  // 拜访
  {
    id: "拜访-1", vocab: "拜访",
    word: "“拜访”的意思最接近哪一项？",
    def: "有礼貌地前往访问或看望",
    options: ["有礼貌地前往访问或看望", "悠闲地四处走动", "受到失败或阻碍", "把钱存进金融机构"]
  },
  {
    id: "拜访-2", vocab: "拜访",
    word: "周末，我们准备去____退休的班主任。",
    def: "拜访",
    options: ["拜访", "打击", "漫步", "中央"]
  },

  // 中央
  {
    id: "中央-1", vocab: "中央",
    word: "“中央”的意思最接近哪一项？",
    def: "中心或正中间的地方",
    options: ["中心或正中间的地方", "非常高的建筑物", "发自内心的感情", "长期居住海外的中国公民"]
  },
  {
    id: "中央-2", vocab: "中央",
    word: "学校操场的____升起了国旗。",
    def: "中央",
    options: ["中央", "银行", "华侨", "挫折"]
  },

  // 漫步
  {
    id: "漫步-1", vocab: "漫步",
    word: "“漫步”的意思最接近哪一项？",
    def: "悠闲、缓慢地随意走",
    options: ["悠闲、缓慢地随意走", "费尽心思想办法", "前去探望别人", "受到失败和阻碍"]
  },
  {
    id: "漫步-2", vocab: "漫步",
    word: "傍晚，我们沿着海边慢慢____，欣赏夕阳。",
    def: "漫步",
    options: ["漫步", "打击", "拜访", "绞尽脑汁"]
  },

  // 绞尽脑汁
  {
    id: "绞尽脑汁-1", vocab: "绞尽脑汁",
    word: "“绞尽脑汁”的意思最接近哪一项？",
    def: "费尽心思，想尽办法",
    options: ["费尽心思，想尽办法", "轻松地到处散步", "从内心真诚地表达", "到银行办理业务"]
  },
  {
    id: "绞尽脑汁-2", vocab: "绞尽脑汁",
    word: "为了破解谜题，他____，终于找到了答案。",
    def: "绞尽脑汁",
    options: ["绞尽脑汁", "由衷", "漫步", "中央"]
  },

  // 华侨
  {
    id: "华侨-1", vocab: "华侨",
    word: "“华侨”指的是哪一类人？",
    def: "长期居住在国外但仍具有中国国籍的中国公民",
    options: ["长期居住在国外但仍具有中国国籍的中国公民", "已经加入外国国籍的所有华人后代", "来中国短期旅游的外国人", "在银行工作的中国人"]
  },
  {
    id: "华侨-2", vocab: "华侨",
    word: "陈伯伯仍持中国护照，却长期住在澳大利亚，他是一名____。",
    def: "华侨",
    options: ["华侨", "银行", "摩天大楼", "中央"]
  },

  // 银行
  {
    id: "银行-1", vocab: "银行",
    word: "“银行”主要是什么机构？",
    def: "办理存款、贷款等金融业务的机构",
    options: ["办理存款、贷款等金融业务的机构", "负责教学的教育机构", "供人散步的公共场所", "专门建造高楼的公司"]
  },
  {
    id: "银行-2", vocab: "银行",
    word: "爸爸到____办理存款手续。",
    def: "银行",
    options: ["银行", "中央", "华侨", "挫折"]
  },

  // 由衷
  {
    id: "由衷-1", vocab: "由衷",
    word: "“由衷”的意思最接近哪一项？",
    def: "出于内心，真心实意",
    options: ["出于内心，真心实意", "勉强而不情愿", "悠闲地走来走去", "因为失败而难过"]
  },
  {
    id: "由衷-2", vocab: "由衷",
    word: "看到队友夺冠，我____地为他高兴。",
    def: "由衷",
    options: ["由衷", "漫步", "中央", "打击"]
  },

  // 摩天大楼
  {
    id: "摩天大楼-1", vocab: "摩天大楼",
    word: "“摩天大楼”指的是什么？",
    def: "非常高、仿佛直入天空的高楼",
    options: ["非常高、仿佛直入天空的高楼", "城市正中央的广场", "专门办理金融业务的大厅", "供人登山的石壁"]
  },
  {
    id: "摩天大楼-2", vocab: "摩天大楼",
    word: "城市里一座座____高耸入云。",
    def: "摩天大楼",
    options: ["摩天大楼", "银行", "华侨", "挫折"]
  },

  // 打击
  {
    id: "打击-1", vocab: "打击",
    word: "“打击”在“信心受到打击”中是什么意思？",
    def: "使人受到挫败、损害或精神上的伤害",
    options: ["使人受到挫败、损害或精神上的伤害", "真诚地赞美别人", "悠闲地散步", "有礼貌地访问别人"]
  },
  {
    id: "打击-2", vocab: "打击",
    word: "这次落选对他的信心造成了不小的____。",
    def: "打击",
    options: ["打击", "由衷", "拜访", "中央"]
  },

  // 挫折
  {
    id: "挫折-1", vocab: "挫折",
    word: "“挫折”的意思最接近哪一项？",
    def: "在前进过程中遇到的失败或阻碍",
    options: ["在前进过程中遇到的失败或阻碍", "成功之后的喜悦", "发自内心的真诚", "非常高大的建筑物"]
  },
  {
    id: "挫折-2", vocab: "挫折",
    word: "学习过程中遇到____时，不要轻易放弃。",
    def: "挫折",
    options: ["挫折", "摩天大楼", "银行", "漫步"]
  }
];

/*
  游戏原本会从其他题目的答案中随机抓三个干扰项。
  这里改成使用每题自己准备好的四个选项，并让 22 题在全部出现前不重复。
*/
let questionQueue = [];

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

setTimeout(() => {
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

  // 长题目用较紧凑的字号，手机和电脑都不会挤出画面。
  const questionEl = document.getElementById("word");
  if (questionEl) {
    questionEl.style.fontSize = "clamp(1.15rem, 4.6vw, 1.55rem)";
    questionEl.style.letterSpacing = ".02em";
    questionEl.style.lineHeight = "1.45";
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
