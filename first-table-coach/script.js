(() => {
  'use strict';
  const copy = {
    en: {
      skip: 'Skip to content', navLearn: 'The learning path', navFaq: 'Good to know', studio: 'By Funnyday ↗',
      eyebrow: 'A seat at the table starts here', title1: 'Your first table.', title2: 'A little more', title3: 'confidence.',
      intro: 'New to American Mahjong? Meet the tiles, make sense of the card, and find your rhythm — one small lesson at a time.',
      download: 'Download on the App Store', availability: 'Available for iPhone and iPad', heroNote: 'No experience needed.\nJust a little curiosity, and a place to begin.',
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
      q4: 'How does the full course unlock?', a4: 'A one-time in-app purchase unlocks all nine modules, with no recurring subscription. See the app for the current price.',
      q5: 'Where can I get the app?', a5: 'Use either download button on this page to get First Table Coach from the App Store for iPhone or iPad.',
      closingLabel: 'FIRST TABLE COACH', closingTitle1: 'There’s a seat', closingTitle2: 'with your name on it.', closingDesc: 'A few small lessons now.\nA little more confidence on game night.',
      footerNote: 'Small ideas. A little more joy.', privacy: 'Privacy', terms: 'Terms', support: 'Contact support',
      pageTitle: 'First Table Coach — Learn American Mahjong, one tile at a time', description: 'Get ready for your first American Mahjong table with nine guided learning modules, tile practice and a step-by-step first hand. An app by Funnyday Studio.',
      homeAlt: 'First Table Coach home screen showing a game-night countdown, the next lesson and a wooden progress rack', tilesAlt: 'Tile recognition lesson explaining Bams with illustrated bamboo tiles', learningAlt: 'Guided learning path with nine American Mahjong modules'
    },
    'zh-Hans': {
      skip: '跳转到内容', navLearn: '学习路线', navFaq: '常见问题', studio: 'Funnyday 出品 ↗',
      eyebrow: '你的第一张牌桌，从这里开始', title1: '第一次上桌，', title2: '多一点', title3: '从容。',
      intro: '第一次接触美式麻将？从认牌、读懂牌卡，到找到摸打的节奏，让每一节小课，带你离牌桌更近一点。',
      download: '在 App Store 下载', availability: '适用于 iPhone 和 iPad', heroNote: '不需要任何经验。\n带上一点好奇心，就可以开始。',
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
      previewCaption: 'App 真实界面 · 简体中文版', practiceNote: '按自己的节奏练习，需要时随时回顾。学习进度保存在你的设备上。',
      faqLabel: '拉开椅子之前', faqTitle: '你可能想问的，\n都在这里。',
      q1: '完全没有基础，也可以学吗？', a1: '可以。First Table Coach 从美式麻将的游戏目标和认识牌面开始。你可以沿着路线学习，也可以随时回顾需要巩固的课程。',
      q2: '这是可以联网对战的麻将游戏吗？', a2: '这是一款包含课程与互动练习的学习工具，也提供预设的第一手牌教学，不提供在线多人对战。',
      q3: '应用包含当年的官方牌卡吗？', a3: '应用使用教学练习牌卡，实际游戏请自备当年的牌卡。First Table Coach 是独立学习工具，与美国麻将联盟（National Mah Jongg League）没有关联，也未获其背书。',
      q4: '如何解锁完整课程？', a4: '一次性应用内购买即可解锁全部 9 个模块，无需定期订阅。具体价格以应用内显示为准。',
      q5: '在哪里可以下载？', a5: '点击本页的下载按钮，即可前往 App Store，在 iPhone 或 iPad 上下载第一桌教练。',
      closingLabel: 'FIRST TABLE COACH · 美式麻将入门', closingTitle1: '牌桌旁，', closingTitle2: '为你留了一个位置。', closingDesc: '现在，学会一点点。\n上桌时，就能更从容一点。',
      footerNote: '小小的创意，多一点生活的乐趣。', privacy: '隐私政策', terms: '用户协议', support: '联系支持',
      pageTitle: 'First Table Coach 美式麻将 — 从认识牌面到第一次上桌', description: '用 9 个循序渐进的学习模块、识牌练习和第一手牌教学，准备好你的第一场美式麻将。Funnyday Studio 出品。',
      homeAlt: 'First Table Coach 首页，展示牌局倒计时、下一节课程和木质学习进度牌架', tilesAlt: '识牌课程，展示条牌说明和竹节牌面', learningAlt: '包含 9 个美式麻将模块的循序渐进学习路线'
    },
    'zh-Hant': {
      skip: '跳至內容', navLearn: '學習路線', navFaq: '常見問題', studio: 'Funnyday 出品 ↗',
      eyebrow: '你的第一張牌桌，從這裡開始', title1: '第一次上桌，', title2: '多一點', title3: '從容。',
      intro: '第一次接觸美式麻將？從認牌、讀懂牌卡，到找到摸打的節奏，讓每一堂小課，帶你離牌桌更近一點。',
      download: '在 App Store 下載', availability: '適用於 iPhone 和 iPad', heroNote: '不需要任何經驗。\n帶上一點好奇心，就可以開始。',
      noteLabel: '下一段小小的旅程', noteTitle: '從「條子是什麼？」\n到「該我了」。',
      promise1: '為第一次牌局準備', promise2: '在動手中學會', promise3: '跟隨自己的節奏',
      learnLabel: '循序漸進的學習路線', learnTitle1: '新遊戲，', learnTitle2: '也能慢慢熟悉。',
      learnIntro: '不用一次記住所有規則。9 個循序漸進的模組，讓滿桌陌生的牌面，變成你逐漸熟悉的語言。',
      step1Title: '先認識這張牌桌。', step1Desc: '從遊戲的目標開始，認識牌面和花色，再用教學練習牌卡，理解顏色、符號和不同組合。', step1Foot: '認識牌桌 · 認識牌面 · 讀懂牌卡',
      step2Title: '找到牌局的節奏。', step2Desc: '學習砌牌牆、輪流摸打和 Charleston 換牌。慢慢熟悉傳牌、碰牌與亮牌的時機。', step2Foot: '砌牌牆 · CHARLESTON 換牌 · 碰牌亮牌',
      step3Title: '把學過的串起來。', step3Desc: '練習選擇手牌方向，跟隨預設牌局走完第一手牌，再帶著準備清單，迎接你的牌局之夜。', step3Foot: '手牌方向 · 第一手牌 · 上桌準備',
      courseNote: '一次性購買，即可解鎖全部 9 個模組，無需定期訂閱。',
      practiceLabel: '來看看 APP 裡面', practiceTitle1: '少一點死記，', practiceTitle2: '多一點「我會了」。',
      practiceIntro: '簡短講解，配上動手練習。認一張牌，試一次選擇，回看一堂課。每一步小進展，都算數。',
      option1Title: '把每一張牌認熟', option1Desc: '從條、萬、筒，到風、箭、花牌和百搭。',
      option2Title: '看見接下來的路', option2Desc: '沿著課程學習，隨時回到需要鞏固的地方。',
      option3Title: '看見一點點進步', option3Desc: '下一堂課程與學習進度，都在手邊。',
      previewCaption: 'App 真實介面 · 繁體中文版', practiceNote: '依自己的節奏練習，需要時隨時回顧。學習進度儲存在你的裝置上。',
      faqLabel: '拉開椅子之前', faqTitle: '你可能想問的，\n都在這裡。',
      q1: '完全沒有基礎，也可以學嗎？', a1: '可以。First Table Coach 從美式麻將的遊戲目標和認識牌面開始。你可以沿著路線學習，也可以隨時回顧需要鞏固的課程。',
      q2: '這是可以連線對戰的麻將遊戲嗎？', a2: '這是一款包含課程與互動練習的學習工具，也提供預設的第一手牌教學，不提供線上多人對戰。',
      q3: '應用程式包含當年的官方牌卡嗎？', a3: '應用程式使用教學練習牌卡，實際遊戲請自備當年的牌卡。First Table Coach 是獨立學習工具，與美國麻將聯盟（National Mah Jongg League）沒有關聯，也未獲其背書。',
      q4: '如何解鎖完整課程？', a4: '一次性應用程式內購買即可解鎖全部 9 個模組，無需定期訂閱。實際價格請見應用程式內的說明。',
      q5: '在哪裡可以下載？', a5: '點選本頁的下載按鈕，即可前往 App Store，在 iPhone 或 iPad 上下載第一桌教練。',
      closingLabel: 'FIRST TABLE COACH · 美式麻將入門', closingTitle1: '牌桌旁，', closingTitle2: '為你留了一個位置。', closingDesc: '現在，學會一點點。\n上桌時，就能更從容一點。',
      footerNote: '小小的創意，多一點生活的樂趣。', privacy: '隱私權政策', terms: '使用者協議', support: '聯絡支援',
      pageTitle: 'First Table Coach 美式麻將 — 從認識牌面到第一次上桌', description: '用 9 個循序漸進的學習模組、認牌練習和第一手牌教學，準備好你的第一場美式麻將。Funnyday Studio 出品。',
      homeAlt: 'First Table Coach 首頁，展示牌局倒數、下一堂課程和木質學習進度牌架', tilesAlt: '認牌課程，展示條子說明和竹節牌面', learningAlt: '包含 9 個美式麻將模組的循序漸進學習路線'
    },
    es: {
      skip: 'Ir al contenido', navLearn: 'El recorrido', navFaq: 'Preguntas frecuentes', studio: 'Por Funnyday ↗',
      eyebrow: 'Tu lugar en la mesa empieza aquí', title1: 'Tu primera mesa.', title2: 'Un poco más de', title3: 'confianza.',
      intro: '¿Te inicias en el mahjong americano? Conoce las fichas, aprende a leer la tarjeta y encuentra tu ritmo, una pequeña lección a la vez.',
      download: 'Descargar en el App Store', availability: 'Disponible para iPhone y iPad', heroNote: 'No necesitas experiencia.\nSolo un poco de curiosidad y un lugar donde empezar.',
      noteLabel: 'TU PRÓXIMO PASO', noteTitle: 'De «¿qué es un Bam?»\na «me toca».',
      promise1: 'Para tu primera partida', promise2: 'Aprende practicando', promise3: 'Avanza a tu ritmo',
      learnLabel: 'EL RECORRIDO DE APRENDIZAJE', learnTitle1: 'Un juego nuevo.', learnTitle2: 'Cada vez más familiar.',
      learnIntro: 'No tienes que aprenderlo todo de golpe. Nueve módulos guiados te ayudan a encontrarle sentido a una mesa llena de fichas desconocidas.',
      step1Title: 'Conoce lo esencial.', step1Desc: 'Empieza por el objetivo del juego y reconoce las fichas y sus palos. Después, explora los colores, símbolos y grupos de una tarjeta de práctica.', step1Foot: 'LA MESA · LAS FICHAS · LA TARJETA',
      step2Title: 'Encuentra el ritmo.', step2Desc: 'Construye el muro, sigue los turnos y aprende el Charleston. Familiarízate con los pases, las declaraciones y las exposiciones.', step2Foot: 'EL MURO · EL CHARLESTON · LAS DECLARACIONES',
      step3Title: 'Une lo aprendido.', step3Desc: 'Elige una dirección para tu mano, recorre una primera mano guiada y ten a mano una lista para preparar tu noche de juego.', step3Foot: 'UNA DIRECCIÓN · UNA MANO · LA PARTIDA',
      courseNote: 'Una compra única desbloquea los nueve módulos. Sin suscripción recurrente.',
      practiceLabel: 'UN VISTAZO A LA APP', practiceTitle1: 'Menos memorizar.', practiceTitle2: 'Más «ya lo entiendo».',
      practiceIntro: 'Explicaciones breves y ejercicios prácticos. Reconoce una ficha, toma una decisión o repasa una lección. Cada pequeño paso cuenta.',
      option1Title: 'Conoce las fichas', option1Desc: 'Bambúes, caracteres, círculos y mucho más.',
      option2Title: 'Descubre el camino', option2Desc: 'Un curso guiado al que puedes volver cuando quieras.',
      option3Title: 'Sigue tu progreso', option3Desc: 'Tu próxima lección y tus avances, en un mismo lugar.',
      previewCaption: 'Pantallas reales de la app · Versión en español', practiceNote: 'Aprende a tu ritmo y repasa lo que necesites. Tu progreso se guarda en tu dispositivo.',
      faqLabel: 'ANTES DE SENTARTE A LA MESA', faqTitle: 'Buenas preguntas.\nRespuestas claras.',
      q1: '¿Es para principiantes sin experiencia?', a1: 'Sí. First Table Coach empieza por el objetivo del mahjong americano y las fichas. Puedes seguir el recorrido guiado y volver a las lecciones cuando necesites repasar.',
      q2: '¿Puedo jugar al mahjong en línea con esta app?', a2: 'Es una herramienta de aprendizaje con lecciones guiadas y ejercicios interactivos, incluida una primera mano con una secuencia preparada. No ofrece partidas multijugador en línea.',
      q3: '¿Incluye una tarjeta oficial del año en curso?', a3: 'La app usa una tarjeta de práctica para enseñar. Para jugar, lleva tu propia tarjeta del año en curso. First Table Coach es independiente y no está afiliada ni respaldada por la National Mah Jongg League.',
      q4: '¿Cómo se desbloquea el curso completo?', a4: 'Una compra única dentro de la app desbloquea los nueve módulos, sin suscripción recurrente. Consulta el precio actual en la app.',
      q5: '¿Dónde puedo descargar la app?', a5: 'Usa cualquiera de los botones de descarga de esta página para obtener First Table Coach en el App Store para iPhone o iPad.',
      closingLabel: 'FIRST TABLE COACH', closingTitle1: 'Hay un lugar', closingTitle2: 'con tu nombre.', closingDesc: 'Unas pequeñas lecciones hoy.\nUn poco más de confianza en tu próxima partida.',
      footerNote: 'Pequeñas ideas. Un poco más de alegría.', privacy: 'Privacidad', terms: 'Condiciones', support: 'Contactar con soporte',
      pageTitle: 'First Table Coach — Aprende mahjong americano, una ficha a la vez', description: 'Prepárate para tu primera mesa de mahjong americano con nueve módulos guiados, práctica de fichas y una primera mano paso a paso. Una app de Funnyday Studio.',
      homeAlt: 'Inicio de First Table Coach con cuenta atrás para la partida, próxima lección y fichas de progreso', tilesAlt: 'Lección para reconocer los Bams con fichas de bambú ilustradas', learningAlt: 'Recorrido guiado con nueve módulos de mahjong americano'
    }
  };
  Object.assign(copy.en, {
    languageLabel: 'Language', brandLabel: 'First Table Coach home', navLabel: 'Main navigation', footerLabel: 'Footer navigation', previewLabel: 'Choose an app preview',
    matCaption: 'A LITTLE PRACTICE. A LOVELY GAME NIGHT.', stampMotto: 'ONE TILE AT A TIME', readyBadge: 'READY\nFOR THE TABLE'
  });
  Object.assign(copy['zh-Hans'], {
    languageLabel: '页面语言', brandLabel: 'First Table Coach 首页', navLabel: '主导航', footerLabel: '页脚导航', previewLabel: '选择 App 界面预览',
    matCaption: '多一点练习，上桌时更从容。', stampMotto: '一张牌，一点进步', readyBadge: '准备好\n上桌了'
  });
  Object.assign(copy['zh-Hant'], {
    languageLabel: '頁面語言', brandLabel: 'First Table Coach 首頁', navLabel: '主導覽', footerLabel: '頁尾導覽', previewLabel: '選擇 App 介面預覽',
    matCaption: '多一點練習，上桌時更從容。', stampMotto: '一張牌，一點進步', readyBadge: '準備好\n上桌了'
  });
  Object.assign(copy.es, {
    languageLabel: 'Idioma', brandLabel: 'Inicio de First Table Coach', navLabel: 'Navegación principal', footerLabel: 'Navegación del pie de página', previewLabel: 'Elige una vista previa de la app',
    matCaption: 'UN POCO DE PRÁCTICA. UNA GRAN NOCHE DE JUEGO.', stampMotto: 'UNA FICHA A LA VEZ', readyBadge: 'LISTO\nPARA LA MESA'
  });
  const locales = {
    en: { htmlLang: 'en', assetDirectory: 'assets', legal: 'en', store: 'https://apps.apple.com/us/app/first-table-coach-mahjong/id6830724702' },
    'zh-Hans': { htmlLang: 'zh-Hans', assetDirectory: 'assets/zh-Hans', legal: 'zh-Hans', store: 'https://apps.apple.com/cn/app/id6830724702' },
    'zh-Hant': { htmlLang: 'zh-Hant', assetDirectory: 'assets/zh-Hant', legal: 'zh-Hant', store: 'https://apps.apple.com/tw/app/id6830724702' },
    es: { htmlLang: 'es', assetDirectory: 'assets/es', legal: 'es', store: 'https://apps.apple.com/es/app/first-table-coach-mahjong/id6830724702' }
  };
  const preferenceKey = 'first-table-coach-language';
  function supportedLanguage(value) {
    const code = String(value || '').toLowerCase().replaceAll('_', '-');
    if (code === 'zh' || code.startsWith('zh-')) {
      return code.includes('-hant') || /-(tw|hk|mo)(-|$)/.test(code) ? 'zh-Hant' : 'zh-Hans';
    }
    if (code === 'es' || code.startsWith('es-')) return 'es';
    if (code === 'en' || code.startsWith('en-')) return 'en';
    return null;
  }
  function storedLanguage() {
    try { return supportedLanguage(localStorage.getItem(preferenceKey)); } catch { return null; }
  }
  function rememberLanguage() {
    try { localStorage.setItem(preferenceKey, language); } catch { /* The page also works when storage is unavailable. */ }
  }
  function previewSource(name) {
    return `${locales[language].assetDirectory}/${name}.png`;
  }
  let selectedPreview = 'tiles';
  const pageParams = new URLSearchParams(window.location.search);
  const initialQuery = supportedLanguage(pageParams.get('lang'));
  const providerToken = pageParams.get('pt');
  const campaignToken = pageParams.get('ct');
  const deviceLanguage = (navigator.languages || [navigator.language]).map(supportedLanguage).find(Boolean);
  let language = initialQuery || storedLanguage() || deviceLanguage || 'en';
  function renderLanguage() {
    const dictionary = copy[language];
    document.documentElement.lang = locales[language].htmlLang;
    document.querySelectorAll('[data-copy]').forEach(element => {
      const value = dictionary[element.dataset.copy];
      if (value !== undefined) {
        element.textContent = value;
        element.style.whiteSpace = value.includes('\n') ? 'pre-line' : '';
      }
    });
    document.title = dictionary.pageTitle;
    document.querySelector('meta[name="description"]').content = dictionary.description;
    document.querySelector('meta[property="og:title"]').content = dictionary.pageTitle;
    document.querySelector('meta[property="og:description"]').content = dictionary.description;
    const selector = document.querySelector('[data-language-select]');
    selector.value = language;
    selector.setAttribute('aria-label', dictionary.languageLabel);
    document.querySelector('.brand').setAttribute('aria-label', dictionary.brandLabel);
    document.querySelector('.site-header nav').setAttribute('aria-label', dictionary.navLabel);
    document.querySelector('.footer nav').setAttribute('aria-label', dictionary.footerLabel);
    document.querySelector('[data-preview-group]').setAttribute('aria-label', dictionary.previewLabel);
    const homeImage = document.querySelector('[data-image="home"]');
    homeImage.src = previewSource('home');
    homeImage.alt = dictionary.homeAlt;
    const preview = document.querySelector('#preview-image');
    preview.src = previewSource(selectedPreview);
    preview.alt = dictionary[`${selectedPreview}Alt`];
    const storeUrl = new URL(locales[language].store);
    // Preserve Apple Campaign Link parameters when a campaign is shared via this page.
    if (/^\d+$/.test(providerToken) && campaignToken?.trim() && campaignToken.length <= 30) {
      storeUrl.searchParams.set('pt', providerToken);
      storeUrl.searchParams.set('ct', campaignToken);
      storeUrl.searchParams.set('mt', '8');
    }
    document.querySelectorAll('[data-app-download]').forEach(link => {
      link.href = storeUrl.href;
    });
    document.querySelectorAll('[data-legal]').forEach(link => {
      link.href = `/first-table-coach-${link.dataset.legal}.html#${locales[language].legal}`;
    });
  }
  document.querySelector('[data-language-select]').addEventListener('change', event => {
    const selected = supportedLanguage(event.target.value);
    if (!selected) return;
    language = selected;
    const url = new URL(window.location.href);
    url.searchParams.set('lang', language);
    window.history.replaceState(null, '', url);
    rememberLanguage();
    renderLanguage();
  });
  document.querySelectorAll('[data-preview]').forEach(button => {
    button.addEventListener('click', () => {
      selectedPreview = button.dataset.preview;
      const preview = document.querySelector('#preview-image');
      preview.src = previewSource(selectedPreview);
      preview.alt = copy[language][`${selectedPreview}Alt`];
      document.querySelectorAll('[data-preview]').forEach(option => {
        const selected = option === button;
        option.classList.toggle('selected', selected);
        option.setAttribute('aria-pressed', String(selected));
      });
    });
  });
  if (initialQuery) rememberLanguage();
  renderLanguage();
})();
