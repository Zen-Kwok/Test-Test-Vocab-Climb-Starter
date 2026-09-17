/* 2026 1G3 年终考试词语复习题库 */
const UNIT_NAME = "2026 1G3 年终考试词语复习";
const SECONDS = 90;

const QUESTION_DATA = [
["新颖","xīn yǐng","哪一个词语指“构思或形式特别，给人新鲜感”？","新颖","新颖","讲究","繁荣","中央"],
["尴尬","gān gà","第一次上台时，我忘了台词，站在那里感到十分____。","尴尬","焦急","尴尬","由衷","平静"],
["赖床","lài chuáng","闹钟响了好几次，弟弟还是不肯起床，一直____。","赖床","漫步","哀求","赖床","催促"],
["辅导员","fǔ dǎo yuán","学校的____耐心地听取同学们的烦恼，并给予建议。","辅导员","辅导员","工作坊","班主任","教务处"],
["以礼待人","yǐ lǐ dài rén","“用礼貌和尊重的态度对待别人”是指：","以礼待人","尽心尽力","以礼待人","开卷有益","坚持不懈"],
["工作坊","gōng zuò fāng","学校举办写作____，让同学通过活动学习写作技巧。","工作坊","交流会","工作坊","训练营","读书会"],
["焦急","jiāo jí","弟弟走失后，妈妈四处寻找，心里十分____。","焦急","尴尬","从容","焦急","由衷"],
["哀求","āi qiú","小男孩不断____母亲，让他再玩十分钟。","哀求","催促","哀求","抨击","允许"],
["友谊","yǒu yì","哪一个词语指朋友之间真诚而亲密的感情？","友谊","友谊","奉献","光芒","挫折"],
["一帆风顺","yī fān fēng shùn","创业过程不可能永远____，我们要做好面对困难的准备。","一帆风顺","朗朗上口","一帆风顺","慢条斯理","坚持不懈"],
["繁荣","fán róng","港口带动了贸易和旅游业，使这座城市变得更加____。","繁荣","中央","新颖","繁荣","讲究"],
["策略","cè lüè","比赛前，教练根据对手的特点制订了新的____。","策略","策略","方法","挫折","光芒"],
["由衷","yóu zhōng","我____地感谢同学们在我生病期间给予的帮助。","由衷","焦急","由衷","尴尬","冷淡"],
["伤脑筋","shāng nǎo jīn","电脑突然坏了，而报告明天就要交，真让人____。","伤脑筋","很开心","有把握","伤脑筋","很轻松"],
["开卷有益","kāi juàn yǒu yì","“阅读有益，能让人增长知识”可以用哪个成语概括？","开卷有益","开卷有益","坚持不懈","绞尽脑汁","一帆风顺"],
["光芒","guāng máng","太阳升起后，金色的____照亮了整片大地。","光芒","中央","光芒","友谊","策略"],
["催促","cuī cù","眼看校车快开了，妈妈不停地____弟弟穿鞋。","催促","哀求","允许","催促","抨击"],
["嗓子眼","sǎng zi yǎn","听见老师突然叫到自己的名字，我紧张得心都提到____了。","嗓子眼","嗓子眼","脑海中","心里面","胸口上"],
["漫步","màn bù","晚饭后，爷爷奶奶喜欢在公园里悠闲地____。","漫步","赖床","漫步","奉献","哀求"],
["坚持不懈","jiān chí bù xiè","哪个句子正确使用了“坚持不懈”？","遇到挫折后，他坚持不懈地继续练习。","遇到挫折后，他坚持不懈地继续练习。","下课铃响后，他坚持不懈地走出教室。","天气转晴后，天空却坚持不懈地变蓝。","坐在椅子上，她仍坚持不懈地看窗外。"],
["讲究","jiǎng jiu","哪个句子正确使用了“讲究”？","他对食材和烹调方法十分讲究。","学校正中央讲究在操场的旁边。","他对食材和烹调方法十分讲究。","弟弟一直讲究妈妈给他买玩具。","太阳每天讲究发出耀眼的光芒。"],
["挫折","cuò zhé","虽然经历了许多____，她仍没有放弃自己的梦想。","挫折","光芒","友谊","挫折","繁荣"],
["允许","yǔn xǔ","哪个句子正确使用了“允许”？","妈妈允许我完成作业后看半小时电视。","妈妈允许我完成作业后看半小时电视。","运动会上，他允许自己快速冲向终点。","面对这道难题，我感到自己十分允许。","这些年以来，城市发展得越来越允许。"],
["抨击","pēng jī","哪个句子正确使用了“抨击”？","评论者严厉抨击浪费食物的行为。","妹妹用力抨击我刚刚打开的窗户。","评论者严厉抨击浪费食物的行为。","大家抨击公园里盛开的美丽花朵。","这首新儿歌听起来显得十分抨击。"],
["慢条斯理","màn tiáo sī lǐ","哪个情境最能表现一个人“慢条斯理”？","大家等着出发，他却不慌不忙地收拾书包","上课快要迟到了，他慌慌张张地冲进教室","听到这个坏消息以后，他急得不停地转圈","大家等着出发，他却不慌不忙地收拾书包","为了赢得比赛，他每天都十分刻苦地训练"],
["中央","zhōng yāng","“学校位于社区的中央”中的“中央”是什么意思？","正中间的位置","最繁荣的地方","正中间的位置","中央政府部门","光线最亮之处"],
["奉献","fèng xiàn","哪个句子正确使用了“奉献”？","医护人员为照顾病人奉献了时间和精力。","医护人员为照顾病人奉献了时间和精力。","他为了买到玩具，奉献妈妈答应他要求。","这条崭新的道路奉献在繁华的城市中央。","她听完老师提问后，奉献地说出了答案。"],
["由衷","yóu zhōng","朋友取得好成绩时，哪一句最能表达“由衷”的祝福？","我真心为你感到高兴！","你不过是运气好罢了！","我真心为你感到高兴！","快告诉我你的成绩吧！","这真让人感到伤脑筋！"],
["朗朗上口","lǎng lǎng shàng kǒu","哪个词语的拼音是“lǎng lǎng shàng kǒu”？","朗朗上口","绞尽脑汁","一帆风顺","朗朗上口","坚持不懈"],
["绞尽脑汁","jiǎo jìn nǎo zhī","选出书写正确、表示“想尽一切办法”的词语。","绞尽脑汁","搅尽脑汁","绞进脑汁","绞尽脑汁","饺尽脑汁"]
];

const QUESTION_PINYIN = [
  "Nǎ yí ge cí yǔ zhǐ “gòu sī huò xíng shì tè bié, gěi rén xīn xiān gǎn”?",
  "Dì yī cì shàng tái shí, wǒ wàng le tái cí, zhàn zài nà li gǎn dào shí fēn ____.",
  "Nào zhōng xiǎng le hǎo jǐ cì, dì di hái shì bù kěn qǐ chuáng, yì zhí ____.",
  "Xué xiào de ____ nài xīn de tīng qǔ tóng xué men de fán nǎo, bìng gěi yǔ jiàn yì.",
  "“Yòng lǐ mào hé zūn zhòng de tài dù duì dài bié rén” shì zhǐ:",
  "Xué xiào jǔ bàn xiě zuò ____, ràng tóng xué tōng guò huó dòng xué xí xiě zuò jì qiǎo.",
  "Dì di zǒu shī hòu, mā ma sì chù xún zhǎo, xīn li shí fēn ____.",
  "Xiǎo nán hái bù duàn ____ mǔ qīn, ràng tā zài wán shí fēn zhōng.",
  "Nǎ yí ge cí yǔ zhǐ péng yǒu zhī jiān zhēn chéng ér qīn mì de gǎn qíng?",
  "Chuàng yè guò chéng bù kě néng yǒng yuǎn ____, wǒ men yào zuò hǎo miàn duì kùn nan de zhǔn bèi.",
  "Gǎng kǒu dài dòng le mào yì hé lǚ yóu yè, shǐ zhè zuò chéng shì biàn de gèng jiā ____.",
  "Bǐ sài qián, jiào liàn gēn jù duì shǒu de tè diǎn zhì dìng le xīn de ____.",
  "Wǒ ____ de gǎn xiè tóng xué men zài wǒ shēng bìng qī jiān gěi yǔ de bāng zhù.",
  "Diàn nǎo tū rán huài le, ér bào gào míng tiān jiù yào jiāo, zhēn ràng rén ____.",
  "“Yuè dú yǒu yì, néng ràng rén zēng zhǎng zhī shí” kě yǐ yòng nǎ ge chéng yǔ gài kuò?",
  "Tài yáng shēng qǐ hòu, jīn sè de ____ zhào liàng le zhěng piàn dà dì.",
  "Yǎn kàn xiào chē kuài kāi le, mā ma bù tíng de ____ dì di chuān xié.",
  "Tīng jiàn lǎo shī tū rán jiào dào zì jǐ de míng zi, wǒ jǐn zhāng de xīn dōu tí dào ____ le.",
  "Wǎn fàn hòu, yé ye nǎi nai xǐ huan zài gōng yuán li yōu xián de ____.",
  "Nǎ ge jù zi zhèng què shǐ yòng le “jiān chí bù xiè”?",
  "Nǎ ge jù zi zhèng què shǐ yòng le “jiǎng jiu”?",
  "Suī rán jīng lì le xǔ duō ____, tā réng méi yǒu fàng qì zì jǐ de mèng xiǎng.",
  "Nǎ ge jù zi zhèng què shǐ yòng le “yǔn xǔ”?",
  "Nǎ ge jù zi zhèng què shǐ yòng le “pēng jī”?",
  "Nǎ ge qíng jìng zuì néng biǎo xiàn yí ge rén “màn tiáo sī lǐ”?",
  "“Xué xiào wèi yú shè qū de zhōng yāng” zhōng de “zhōng yāng” shì shén me yì si?",
  "Nǎ ge jù zi zhèng què shǐ yòng le “fèng xiàn”?",
  "Péng yǒu qǔ dé hǎo chéng jì shí, nǎ yí jù zuì néng biǎo dá “yóu zhōng” de zhù fú?",
  "Nǎ ge cí yǔ de pīn yīn shì “lǎng lǎng shàng kǒu”?",
  "Xuǎn chū shū xiě zhèng què, biǎo shì “xiǎng jìn yí qiè bàn fǎ” de cí yǔ."
];

const VOCAB = QUESTION_DATA.map((q, i) => ({
  id: String(i + 1), vocab: q[0], pinyin: q[1],
  word: q[2], questionPinyin: QUESTION_PINYIN[i], def: q[3], options: q.slice(4)
}));

let questionQueue = [];
let pinyinEnabled = false;

function buildQuestionQueue(){
  const q = VOCAB.slice();
  for (let i = q.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [q[i], q[j]] = [q[j], q[i]];
  }
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
  line.textContent = (pinyinEnabled && answer && answer.questionPinyin) ? answer.questionPinyin : "";
  line.classList.toggle("on", Boolean(pinyinEnabled && answer && answer.questionPinyin));
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
  const style = document.createElement("style");
  style.textContent = `
    #pinyinToggle{position:absolute;top:10px;right:10px;z-index:10;width:88px;min-height:44px;padding:5px 8px;border-radius:11px;border:1px solid rgba(224,168,60,.5);background:rgba(18,15,11,.88);color:#f6efe2;font-family:inherit;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.3);display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.05}
    #pinyinToggle span{font-size:.68rem;letter-spacing:.05em;opacity:.82}
    #pinyinToggle b{margin-top:3px;font-size:.9rem;color:#e0a83c}
    #pinyinToggle.on{border-color:rgba(105,190,111,.9);background:rgba(28,67,35,.92)}
    #pinyinToggle.on b{color:#9ee7a4}
    #pinyinLine{display:none;text-align:center;min-height:1.3em;margin:-5px 0 10px;font-size:clamp(.86rem,3.4vw,1rem);line-height:1.25;letter-spacing:.045em;color:#f3d47e;font-weight:600}
    #pinyinLine.on{display:block}
    @media (max-width:520px){.hud{padding-right:108px!important}}
  `;
  document.head.appendChild(style);

  const stage = document.querySelector(".stage");
  if (stage && !document.getElementById("pinyinToggle")){
    const toggle = document.createElement("button");
    toggle.id = "pinyinToggle";
    toggle.type = "button";
    toggle.setAttribute("aria-label", "开启或关闭汉语拼音");
    toggle.onclick = () => setPinyinEnabled(!pinyinEnabled);
    stage.appendChild(toggle);
  }

  const questionEl = document.getElementById("word");
  if (questionEl){
    questionEl.style.fontSize = "clamp(1.15rem, 4.6vw, 1.55rem)";
    questionEl.style.letterSpacing = ".02em";
    questionEl.style.lineHeight = "1.45";
    if (!document.getElementById("pinyinLine")){
      const line = document.createElement("div");
      line.id = "pinyinLine";
      line.setAttribute("aria-live", "polite");
      questionEl.insertAdjacentElement("afterend", line);
    }
  }

  try { pinyinEnabled = localStorage.getItem("vocabClimbPinyin") === "on"; } catch (e) { pinyinEnabled = false; }
  updatePinyinToggle();
  renderPinyin();

  if (typeof nextQuestion === "function"){
    nextQuestion = function(){
      if (recent.length === 0 && score === 0 && altitude === 0) questionQueue = buildQuestionQueue();
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

      // Even equal-character choices may wrap differently on narrow screens.
      // Match all four buttons to the tallest rendered choice.
      requestAnimationFrame(() => {
        const buttons = Array.from(box.querySelectorAll("button"));
        buttons.forEach(button => { button.style.minHeight = "0"; });
        const tallest = Math.max(...buttons.map(button => button.offsetHeight));
        buttons.forEach(button => { button.style.minHeight = tallest + "px"; });
      });
    };
  }

  const info = document.getElementById("startInfo");
  if (info) info.innerHTML = '<b>' + UNIT_NAME + '</b><br>29 个词语 · 30 道题 · ' + Number(SECONDS) + ' 秒';

  const sprite = document.getElementById("climber");
  if (sprite){
    sprite.setAttribute("role", "img");
    sprite.setAttribute("aria-label", "荷叶跳跃角色");
  }
}, 0);
