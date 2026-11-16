(() => {
  'use strict';
  const copy = {
    en: {
      skip: 'Skip to content', navLearn: 'The learning path', navFaq: 'Good to know', studio: 'By Funnyday ↗',
      eyebrow: 'A seat at the table starts here', title1: 'Your first table.', title2: 'A little more', title3: 'confidence.',
      intro: 'New to American Mahjong? Meet the tiles, make sense of the card, and find your rhythm — one small lesson at a time.',
      explore: 'Explore the lessons', availability: 'Coming soon for iOS', heroNote: 'No experience needed.\nJust a little curiosity, and a place to begin.',
      noteLabel: 'YOUR NEXT CHAPTER', noteTitle: 'From “what’s a Bam?”\nto “my turn.”',
      promise1: 'Made for your first game', promise2: 'Learn by doing', promise3: 'Go at your own pace',
      learnLabel: 'THE LEARNING PATH', learnTitle1: 'A new game.', learnTitle2: 'A familiar feeling.',
      learnIntro: 'You don’t have to learn everything at once. Nine guided modules turn a table full of unfamiliar tiles into something that starts to make sense.',
      step1Title: 'Meet your new essentials.', step1Desc: 'Start with the goal of the game, recognize the tiles and suits, then explore the colors, symbols and groups on a practice card.', step1Foot: 'THE TABLE · THE TILES · THE CARD',
      step2Title: 'Find the flow of play.', step2Desc: 'Build the wall, follow the turns, and learn the Charleston. Get comfortable with passing, calls and exposures.', step2Foot: 'THE WALL · THE CHARLESTON · THE CALLS',
      step3Title: 'Put it all together.', step3Desc: 'Choose a direction for your hand, walk through a scripted first hand, and keep a game-night checklist close by.', step3Foot: 'A DIRECTION · A FIRST HAND · GAME NIGHT',
      courseNote: 'The full nine-module course unlocks with a one-time purchase. No recurring subscription.',
      practiceLabel: 'A LITTLE LOOK INSIDE', practiceTitle1: 'Less memorizing.', practiceTitle2: 'More “I’ve got this.”',
      practiceIntro: 'Short explanations meet hands-on practice. Find a tile, try a decision, revisit a lesson. Every little step has a place.',
      option1Title: 'Get to know the tiles', option1Desc: 'Bams, Craks, Dots, and the rest of the table.',
      option2Title: 'See the path ahead', option2Desc: 'A guided course you can return to anytime.',
      option3Title: 'Make a little progress', option3Desc: 'Your next lesson and learning progress, together.',
      previewCaption: 'A look inside the app · English interface', practiceNote: 'Learn at your pace. Revisit what you need. Your learning progress stays on your device.',
      faqLabel: 'BEFORE YOU PULL UP A CHAIR', faqTitle: 'Good questions.\nSimple answers.',
      q1: 'Is this for complete beginners?', a1: 'Yes. First Table Coach starts with the goal of American Mahjong and the tiles themselves. You can follow the guided path and return to lessons whenever you need a refresher.',
      q2: 'Is this a Mahjong game I can play online?', a2: 'It’s a learning companion with guided lessons and interactive exercises, including a scripted first hand. It does not offer online multiplayer games.',
      q3: 'Does the app include an official current-year card?', a3: 'The app uses a practice card for teaching. Bring your own current-year card for actual play. First Table Coach is independent and is not affiliated with or endorsed by the National Mah Jongg League.',
      q4: 'How does the full course unlock?', a4: 'A one-time in-app purchase unlocks all nine modules, with no recurring subscription. Availability and the current price will be shown in the app when it is released.',
      q5: 'Where can I get the app?', a5: 'First Table Coach is preparing for its iOS release. This page will link to the App Store when it is publicly available. For release questions or support, contact support@funnyday.xyz.',
      closingLabel: 'FIRST TABLE COACH', closingTitle1: 'There’s a seat', closingTitle2: 'with your name on it.', closingDesc: 'A few small lessons now.\nA little more confidence on game night.',
      contact: 'Ask about the release', footerNote: 'Small ideas. A little more joy.', privacy: 'Privacy', terms: 'Terms', support: 'Contact support',
      pageTitle: 'First Table Coach — Learn American Mahjong, one tile at a time', description: 'Get ready for your first American Mahjong table with nine guided learning modules, tile practice and a step-by-step first hand. An app by Funnyday Studio.',
      homeAlt: 'First Table Coach home screen showing a game-night countdown, the next lesson and a wooden progress rack', tilesAlt: 'Tile recognition lesson explaining Bams with illustrated bamboo tiles', learningAlt: 'Guided learning path with nine American Mahjong modules'
    },
    zh: {
      skip: '跳转到内容', navLearn: '学习路线', navFaq: '常见问题', studio: 'Funnyday 出品 ↗',
      eyebrow: '你的第一张牌桌，从这里开始', title1: '第一次上桌，', title2: '多一点', title3: '从容。',
      intro: '第一次接触美式麻将？从认牌、读懂牌卡，到找到摸打的节奏，让每一节小课，带你离牌桌更近一点。',
      explore: '探索学习路线', availability: 'iOS 版即将上线', heroNote: '不需要任何经验。\n带上一点好奇心，就可以开始。',
      noteLabel: '下一段小小的旅程', noteTitle: '从「条牌是什么？」\n到「该我了」。',
      promise1: '为第一次牌局准备', promise2: '在动手中学会', promise3: '跟随自己的节奏',
      learnLabel: '循序渐进的学习路线', learnTitle1: '新游戏，', learnTitle2: '也能慢慢熟悉。',
      learnIntro: '不用一次记住所有规则。9 个循序渐进的模块，让满桌陌生的牌面，变成你逐渐熟悉的语言。',
      step1Title: '先认识这张牌桌。', step1Desc: '从游戏的目标开始，认识牌面和花色，再用教学练习牌卡，理解颜色、符号和不同组合。', step1Foot: '认识牌桌 · 认识牌面 · 读懂牌卡',
      step2Title: '找到牌局的节奏。', step2Desc: '学习砌牌墙、轮流摸打和 Charleston 换牌。慢慢熟悉传牌、碰牌与亮牌的时机。', step2Foot: '砌牌墙 · CHARLESTON 换牌 · 碰牌亮牌',
      step3Title: '把学过的串起来。', step3Desc: '练习选择手牌方向，跟随预设牌局走完第一手牌，再带着准备清单，迎接你的牌局之夜。', step3Foot: '手牌方向 · 第一手牌 · 上桌准备',
      courseNote: '一次性购买，即可解锁全部 9 个模块，无需定期订阅。',
      practiceLabel: '来看看 APP 里面', practiceTitle1: '少一点死记，', practiceTitle2: '多一点「我会了」。',
      practiceIntro: '简短讲解，配上动手练习。认一张牌，试一次选择，回看一节课。每一步小进展，都算数。',
      option1Title: '把每一张牌认熟', option1Desc: '从条、万、筒，到风、箭、花牌和百搭。',
      option2Title: '看见接下来的路', option2Desc: '沿着课程学习，随时回到需要巩固的地方。',
      option3Title: '看见一点点进步', option3Desc: '下一节课程与学习进度，都在手边。',
      previewCaption: 'App 真实界面 · 此处展示英文版本', practiceNote: '按自己的节奏练习，需要时随时回顾。学习进度保存在你的设备上。',
      faqLabel: '拉开椅子之前', faqTitle: '你可能想问的，\n都在这里。',
      q1: '完全没有基础，也可以学吗？', a1: '可以。First Table Coach 从美式麻将的游戏目标和认识牌面开始。你可以沿着路线学习，也可以随时回顾需要巩固的课程。',
      q2: '这是可以联网对战的麻将游戏吗？', a2: '这是一款包含课程与互动练习的学习工具，也提供预设的第一手牌教学，不提供在线多人对战。',
      q3: '应用包含当年的官方牌卡吗？', a3: '应用使用教学练习牌卡，实际游戏请自备当年的牌卡。First Table Coach 是独立学习工具，与美国麻将联盟（National Mah Jongg League）没有关联，也未获其背书。',
      q4: '如何解锁完整课程？', a4: '一次性应用内购买即可解锁全部 9 个模块，无需定期订阅。商品是否可用及具体价格，以上线后应用内显示为准。',
      q5: '在哪里可以下载？', a5: 'First Table Coach 正在准备 iOS 版上线。公开上架后，本页会提供 App Store 入口。如需了解上线进展或获取支持，可联系 support@funnyday.xyz。',
      closingLabel: 'FIRST TABLE COACH · 美式麻将入门', closingTitle1: '牌桌旁，', closingTitle2: '为你留了一个位置。', closingDesc: '现在，学会一点点。\n上桌时，就能更从容一点。',
      contact: '咨询上线进展', footerNote: '小小的创意，多一点生活的乐趣。', privacy: '隐私政策', terms: '用户协议', support: '联系支持',
      pageTitle: 'First Table Coach 美式麻将 — 从认识牌面到第一次上桌', description: '用 9 个循序渐进的学习模块、识牌练习和第一手牌教学，准备好你的第一场美式麻将。Funnyday Studio 出品。',
      homeAlt: 'First Table Coach 首页，展示牌局倒计时、下一节课程和木质学习进度牌架', tilesAlt: '识牌课程，展示条牌说明和竹节牌面', learningAlt: '包含 9 个美式麻将模块的循序渐进学习路线'
    }
  };
  const images = { home: 'assets/home.png', tiles: 'assets/tiles.png', learning: 'assets/learning.png' };
  let selectedPreview = 'tiles';
  const initialQuery = new URLSearchParams(window.location.search).get('lang');
  let language = initialQuery === 'zh' || initialQuery === 'en' ? initialQuery : (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';
  function renderLanguage() {
    const dictionary = copy[language];
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-copy]').forEach(element => {
      const value = dictionary[element.dataset.copy];
      if (value !== undefined) {
        element.textContent = value;
        if (value.includes('\n')) element.style.whiteSpace = 'pre-line';
      }
    });
    document.title = dictionary.pageTitle;
    document.querySelector('meta[name="description"]').content = dictionary.description;
    document.querySelector('meta[property="og:title"]').content = dictionary.pageTitle;
    document.querySelector('meta[property="og:description"]').content = dictionary.description;
    const toggle = document.querySelector('[data-language-toggle]');
    toggle.textContent = language === 'zh' ? 'EN' : '中文';
    toggle.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
    document.querySelector('.brand').setAttribute('aria-label', language === 'zh' ? 'First Table Coach 首页' : 'First Table Coach home');
    document.querySelector('.site-header nav').setAttribute('aria-label', language === 'zh' ? '主导航' : 'Main navigation');
    document.querySelector('.footer nav').setAttribute('aria-label', language === 'zh' ? '页脚导航' : 'Footer navigation');
    document.querySelector('[data-preview-group]').setAttribute('aria-label', language === 'zh' ? '选择 App 界面预览' : 'Choose an app preview');
    document.querySelector('[data-image="home"]').alt = dictionary.homeAlt;
    document.querySelector('#preview-image').alt = dictionary[`${selectedPreview}Alt`];
    document.querySelectorAll('[data-legal]').forEach(link => {
      link.href = `/first-table-coach-${link.dataset.legal}.html#${language === 'zh' ? 'zh-Hans' : 'en'}`;
    });
  }
  document.querySelector('[data-language-toggle]').addEventListener('click', () => {
    language = language === 'en' ? 'zh' : 'en';
    const url = new URL(window.location.href);
    url.searchParams.set('lang', language);
    window.history.replaceState(null, '', url);
    renderLanguage();
  });
  document.querySelectorAll('[data-preview]').forEach(button => {
    button.addEventListener('click', () => {
      selectedPreview = button.dataset.preview;
      const preview = document.querySelector('#preview-image');
      preview.src = images[selectedPreview];
      preview.alt = copy[language][`${selectedPreview}Alt`];
      document.querySelectorAll('[data-preview]').forEach(option => {
        const selected = option === button;
        option.classList.toggle('selected', selected);
        option.setAttribute('aria-pressed', String(selected));
      });
    });
  });
  renderLanguage();
})();
