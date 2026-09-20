import type { Lang } from "@/lib/site";

/**
 * Phase 2 page copy (zh-Hant primary, EN mirror).
 *
 * Everything below is either (a) taken from the scraped corpus in
 * `docs/wix-source/*.json` — the district's own published material — or
 * (b) explicitly marked `待確認 / TO CONFIRM` where the corpus is silent.
 * Nothing is invented: there are no made-up award counts, dates or quotes.
 *
 * `toConfirm` is the shared marker string; views render it with <ToConfirm>.
 */

const zh = {
  toConfirm: "待確認 / TO CONFIRM",

  nav: {
    why: "為什麼選擇我們",
    story: "我們的故事",
    career: "事業發展",
    achievements: "成就與團隊",
    gba: "大灣區機會",
    clients: "客戶服務",
    insights: "見解",
    events: "活動",
    contact: "預約及申請",
  },

  // ── 1. Why join us ────────────────────────────────────────
  why: {
    eyebrow: "為什麼選擇我們",
    title: "為什麼 500 人選擇加入這個家庭",
    intro:
      "2009 年，我們由 50 人開始；今日，團隊已發展至 500 位精英顧問。以下是四件我們真的做得到的事，以及它們背後的依據。",
    pillarsHeading: "四件我們真的做得到的事",
    pillarsSub: "每一項都有出處，不是口號。",
    pillars: [
      {
        title: "收入無限，貢獻決定回報",
        body: "這裡沒有薪酬上限。你的回報，由你為客戶創造的價值決定——「多勞多得」對我們來說不是口號，而是每一次服務累積出來的結果。",
        proof: "依據：區域設有「個人銷售晉升階梯」，讓同事專注發展個人銷售，為自己賺取最直接回報（事業發展）。",
      },
      {
        title: "大灣區先機，獨家鐵路口岸優勢",
        body: "我們是全港鐵路唯一的保險合作夥伴，於西九高鐵站、羅湖及落馬洲口岸設有分行，讓你在每日往來灣區的人流之中，接觸其他人接觸不到的客戶。",
        proof: "依據：兩年前開始在全港鐵路口岸設置分行，並成為全港鐵路唯一的保險合作夥伴（大灣區發展）。",
      },
      {
        title: "強大後勤，專注客戶與收入",
        body: "行政、培訓、數碼工具、產品與理賠支援，由區域後勤基建團隊處理。你不需要一個人做完全部事情——時間應該放回客戶身上。",
        proof: "依據：區域擁有龐大的後勤基建力量，並自設電話預約團隊為顧問安排客戶會議（陳總的話／電話預約服務）。",
      },
      {
        title: "清晰階梯 + 領導力培養",
        body: "你可以選個人銷售晉升階梯，專注發展個人業務；也可以選營業管理階梯，學習帶團隊。配合友邦精英學院核心課程與區域培訓中心，一步一步培養你的領導力。",
        proof: "依據：核心階段三階段課程（友邦精英學院核心課程、資產管理策劃高階課程、區域培訓中心）＋兩條晉升階梯（事業發展）。",
      },
    ],
    compareHeading: "與一般保險公司的分別",
    compareIntro:
      "以下為行業普遍情況的概括，用來幫你看清差異，並非針對任何個別公司。本區一欄的資料全部取自本區對外公佈的內容。",
    usLabel: "資產管理區域",
    otherLabel: "一般保險公司（行業普遍情況）",
    compareRows: [
      {
        topic: "品牌理念",
        us: "命名源自 Customer Centricity 管理哲學：所有管理決定以客戶為核心，同事的職銜是「顧問」，而不是「銷售」。",
        others: "多以產品或銷售目標掛帥，職銜與訓練以推廣產品為中心。",
      },
      {
        topic: "口岸據點",
        us: "全港鐵路唯一的保險合作夥伴，於三個鐵路口岸設有分行（西九高鐵站、羅湖、落馬洲）。",
        others: "一般沒有獨家的口岸或鐵路據點，客源多靠個人網絡。",
      },
      {
        topic: "後勤支援",
        us: "區域自設後勤基建力量，並聘有電話預約團隊，為顧問安排客戶會議。",
        others: "行政、約見與跟進多由顧問自行處理。",
      },
      {
        topic: "培訓體系",
        us: "核心階段三階段課程（兩星期核心課程、兩星期高階課程、六個月區域培訓中心）＋發展階段選修。",
        others: "多為單一入職課程，後續進修需自行安排。",
      },
      {
        topic: "晉升路徑",
        us: "個人銷售與營業管理兩條清晰階梯，可按志向自選。",
        others: "一般只有單一晉升路線。",
      },
      {
        topic: "領導力培育",
        us: "已引進同事心理質素培訓，並計劃培育入職同事成為品牌未來領袖，造就 sub branding。",
        others: "較少主張培育同事的個人品牌與新文化。",
      },
    ],
    compareNote:
      "「一般保險公司（行業普遍情況）」一欄是行業常見做法的一般性概括，並非對任何具名公司的評論或指控；如與閣下所屬公司的實際安排不同，以對方公佈為準。本區一欄的資料取自本區對外公佈的內容。",
    faqHeading: "常見問題",
    faq: [
      {
        q: "收入實況係點？",
        a: "這是一份回報與貢獻成正比的工作。區域不設收入上限，回報來自你為客戶創造的價值。但必須說清楚：收入並非保證，會因個人表現、市場環境與投入程度而有很大差異，任何人都不應假設一個特定數字。我們建議你在見面時直接問清楚收入結構與佣金安排。",
      },
      {
        q: "培訓要自己出錢嗎？",
        a: "區域為同事準備了核心階段課程：第一階段（兩星期）友邦精英學院核心課程；第二階段（兩星期）資產管理策劃高階課程；第三階段（六個月）區域培訓中心。完成後可按興趣選修發展階段課程。區域亦資助財務策劃顧問考取多個業界認可的專業資格。",
      },
      {
        q: "工作與生活怎樣平衡？",
        a: "區域會舉辦多項活動，讓同事在工作之餘輕鬆一番、舒緩壓力，包括 Annual Dinner、賀歲盃、MDRT Dinner、「遊船河」等，貫徹區域「Work Hard，Play Hard」的理念。",
      },
      {
        q: "大灣區發展同我有咩關係？",
        a: "我們兩年前開始在全港的鐵路口岸設置分行——羅湖口岸、落馬洲口岸及西九高鐵站口岸，並成為全港鐵路唯一的保險合作夥伴，於站內設置營運中心。站上人流最集中的口岸，服務一個正在快速融合的市場，就是你在大灣區的起點。",
      },
      {
        q: "無經驗、跨行業可以申請嗎？",
        a: "可以。區域的理財顧問出身來自不同的行業、背景或經驗，他們都可以善用區域的強大配套，做出比同業優秀的成績。",
      },
      {
        q: "入職要求、牌照與申請流程？",
        a: "待確認 / TO CONFIRM — 具體入職門檻、所需牌照與申請流程的官方說明未載於區域現有網站，需由區域提供後補上。",
      },
    ],
    faqNote: "以上答案均取自區域對外公佈的內容；如與最新安排有出入，以區域的正式資料為準。",
    ctaHeading: "想先聊聊，再決定？",
    ctaBody:
      "一個 30 分鐘、沒有壓力的對話。你可以問任何問題——行業實況、收入結構、培訓安排，甚至「我適唔適合」。決定權永遠在你手上。",
  },

  // ── 2. Our story & culture ────────────────────────────────
  story: {
    eyebrow: "我們的故事",
    title: "由 50 人開始的十四年",
    intro: "2009 年創區至今，區域的業績與人數持續增長，背後是一套以客戶為核心的經營理念。",
    foundingHeading: "創立與成長",
    foundingParas: [
      "香港資深區域總監陳永業先生於 2009 年創立「資產管理區域」。這十四年來，團隊的生意及人數快速增長，獲得眾多客戶信任，多年來取得突破性發展。",
      "區域成立十四年至今，營業團隊人數由 50 人躍升至現時的 500 人，印證區域的發展理念能夠配合同事們的個人事業成長。",
      "2009 年正值金融海嘯，陳總同年加入友邦並創立友邦資產管理品牌，旨為拓展友邦的中高端理財策劃業務——他的答案綜合起來只有四個字：有危有機。",
    ],
    factsNote: "數字取自區域現有網站（「這十四年來」的表述）。",
    facts: [
      { value: "2009", label: "創區年份" },
      { value: "50 → 500", label: "營業團隊人數" },
      { value: "14 年", label: "創區至今（沿用區域原文表述）" },
    ],
    visionHeading: "願景",
    visionParas: [
      "我們的命名來自一個管理哲學——Customer Centricity：把所有的管理決定以客戶為核心，包括品牌名稱（資產管理）與同事的職銜（顧問），好讓同事習慣以客戶為所有決定的出發點。",
      "選擇「資產管理」四個字，是希望客戶明白：保險再不只是產品，而是以客戶為中心、度身訂造的綜合理財方案。",
      "未來方向：除了加強硬件的設計，區域已引進同事的心理質素培訓，並計劃培育每一位入職的同事成為品牌未來的領袖，造就 Portfolio Management 的 sub branding。",
    ],
    cultureHeading: "文化",
    cultureParas: [
      "區域會舉辦多項活動，令同事在工作之餘可以輕鬆一番、舒緩工作壓力，貫徹區域「Work Hard，Play Hard」的理念。",
    ],
    cultureItems: ["Annual Dinner", "賀歲盃", "MDRT Dinner", "遊船河"],
    bannerHeading: "區域大事回顧",
    bannerNote:
      "區域現有網站設有「區域大事回顧」，記錄由 2010 年創區至今的所有年度主題。待確認 / TO CONFIRM — 逐年主題與大事需由區域提供後補上。",
    chairmanHeading: "陳總的話",
    chairmanTitle: "香港資深區域總監 陳永業先生",
    chairmanQuote: "理想，只要你不停步，最終定能達到！",
    chairmanParas: [
      "2009 年正值金融海嘯，同年我加入友邦並創立了友邦資產管理品牌，旨為拓展友邦的中高端理財策劃業務。入職頭數年經常接受媒體及財經雜誌記者等訪問，他們的第一條問題總是問為何當時我會選擇友邦？當時我的答案綜合可以有四個字：有危有機。及後面對投資相連產品的監管，我們把保單融資業務引入代理業，以至疫情封關，我們包攬了所有鐵路關口站內開設三間分行，都是秉承住這個概念：「改變沒有好與壞，但改變一定帶來機遇」。",
      "第二條問題是問為何品牌名稱改為「資產管理」？命名概念源自一個管理哲學——Customer Centricity，即是把所有的管理決定以客戶為核心，包括品牌名稱（資產管理）、同事的 Title（顧問），好讓同事習慣以客戶為所有決定的出發點。選擇「資產管理」四個字是希望客戶明白，保險再不只是產品，而是綜合理財方案，以客戶為中心而度身訂造的方案。",
      "時至今日，團隊結集了數百位精英，堪稱行業最強的資管理財團隊，擁有龐大的後勤基建力量，為同事拓展他們的事業王國。最令我們驕傲的是，不論我們的理財顧問出身來自不同的行業、背景或經驗，他們都可以善用區域的強大配套，做出比同業優秀的成績；而客戶亦可以透過我們專業的理財顧問服務去掌握市場最獨到的資訊和角度，引入全新的理財概念，為自己和家人設置最全面的保障和資產保護屏障，把資產最大化並承傳予至愛的家族成員。",
      "我們未來要突破本身已經十分完善的配套支援。除了加強硬件的設計以外，我們已引進同事的心理質素培訓，並計劃培育每一位入職的同事成為品牌未來的領袖——世上沒有天生的領導者，但只要有適當的思想調教，我們就可以培育更多的品牌領袖，造就 Portfolio Management 的 sub branding，讓同事可以在這強大的配套之下創造有自己特色的新文化去迎接未來新世代的財務或事業發展需求，讓友邦資產管理集團，繼續過去不敗的傳奇，成就不朽的基業，領導群雄，獨領風騷。",
    ],
    galleryHeading: "區域照片",
    galleryNote: "照片取自區域現有網站，僅供預覽使用；人物照片的版權屬區域及友邦保險所有。",
    gallery: [
      { src: "/images/leader-portrait.jpg", caption: "區域創辦人／領袖肖像" },
      { src: "/images/team-wide.jpg", caption: "團隊合照（友邦制服）" },
      { src: "/images/team-annual-presentation.jpg", caption: "2019–20 年度週年大會團隊合照" },
      { src: "/images/team-new-director.jpg", caption: "新任高級區域總監合照" },
      { src: "/images/growth-chart.jpg", caption: "2010–2022 人數／業績增長圖" },
    ],
    ctaHeading: "想成為下一個十四年的一部分？",
    ctaBody: "我們可以坐下來談談你的背景，以及這套理念可以怎樣配合你的成長。",
  },

  // ── 3. Career path ────────────────────────────────────────
  career: {
    eyebrow: "事業發展",
    title: "一條清晰的事業階梯",
    intro:
      "我們不單資助財務策劃顧問考取多個業界認可的專業資格，更關注他們長遠的事業發展——你可以選擇專注個人銷售，或發展管理技能、創造自己的理想企業。",
    ladderHeading: "核心階段 → 發展階段",
    ladderIntro: "資產管理區域為各位準備了一系列的課程，為大家奠定事業基礎。",
    ladder: [
      {
        stage: "核心階段",
        label: "建立基礎",
        items: [
          {
            phase: "第一階段 · 兩星期",
            title: "友邦精英學院核心課程",
            body: "入職起點的系統訓練，由基礎產品知識到合規要求。",
          },
          {
            phase: "第二階段 · 兩星期",
            title: "資產管理策劃高階課程",
            body: "把產品知識推進到以客戶為中心的策劃層面。",
          },
          {
            phase: "第三階段 · 六個月",
            title: "區域培訓中心",
            body: "在區域層面持續跟進與實戰支援。",
          },
        ],
      },
      {
        stage: "發展階段",
        label: "按興趣選修",
        items: [
          {
            phase: "完成所有區域培訓後",
            title: "選修進修課程",
            body: "大家可以隨著自己的興趣和意向，去選擇不同的進修課程。",
          },
        ],
      },
    ],
    tracksHeading: "兩條晉升階梯",
    tracksIntro: "選擇權在你手上。",
    tracks: [
      { title: "個人銷售晉升階梯", body: "專注發展個人銷售，為自己賺取最直接回報。" },
      { title: "營業管理晉升階梯", body: "發展管理技能，創造自己的理想企業。" },
    ],
    leadershipHeading: "領袖是怎樣煉成的",
    leadershipIntro: "區域在「就業機會」頁問過一條問題：",
    leadershipQuestion: "要選擇一個成功的事業發展，以下五項指標，你會如何優先考慮？",
    leadershipParas: [
      "區域已引進同事的心理質素培訓，並計劃培育每一位入職的同事成為品牌未來的領袖——世上沒有天生的領導者，但只要有適當的思想調教，就可以培育更多的品牌領袖。",
      "區域設有龐大的後勤基建力量，加上自設的電話預約團隊為顧問安排客戶會議，讓同事把時間放回客戶與專業成長上。",
    ],
    openingsHeading: "現正招聘",
    openingsNote:
      "待確認 / TO CONFIRM — 具體職位空缺清單未在區域現有網站公佈，需由區域提供後補上。本頁的申請意願仍可透過下方預約或 WhatsApp 提交。",
    openings: [] as Array<{ role: string; note: string }>,
    ctaHeading: "想了解哪條階梯適合你？",
    ctaBody: "見面時，我們可以一起看你的背景，談談個人銷售或營業管理哪一條路更適合你。",
  },

  // ── 4. Achievements & our people ──────────────────────────
  achievements: {
    eyebrow: "成就與團隊",
    title: "成就與我們的團隊",
    intro: "業界公認的專業肯定，以及每一位站在它背後的名字。",
    mdrtHeading: "MDRT 百萬圓桌會員",
    mdrtIntro:
      "MDRT（Million Dollar Round Table，百萬金圓桌會）自 1927 年推行，為國際公認壽險從業人員最高榮譽，是保險業內公認的業績證明。",
    mdrtFacts: [
      "以今年為例，香港區 MDRT 會員資格生意額要達 53.32 萬元，或有效保費 213.28 萬元。",
      "截至去年 8 月，友邦香港及澳門有 2,648 名代理擁有 MDRT 資格，平均每 5 位就有一位是 MDRT。",
    ],
    mdrtLeadersHeading: "MDRT Leader",
    mdrtLeaderNames: [
      "Tammy Tse",
      "Ivy Hon",
      "Vicki Lam",
      "Chris Chen",
      "Sally Au Yeung",
      "Pui Ying",
      "Jojo Cheung",
      "Jason Hung",
      "Ivan Ho",
      "Leo Tse",
    ],
    mdrtMembersHeading: "MDRT",
    mdrtMemberNames: [
      "Regina He",
      "Keith Law",
      "Emily Chan",
      "Gloria Chu",
      "Frankie Wong",
      "Chris Ho",
      "Jake Cheung",
      "Angela Yip",
      "Sharon Cheung",
      "Myron Lam",
      "Paul Law",
      "Ivan Leung",
      "Jeff Lee",
      "Peter Li",
      "Ling Ma",
      "Wing Wu",
      "Neo Cheung",
      "Sue Lai",
      "Kathleen Tsang",
      "Erin Ng",
      "Annie Cheung",
      "Kenji Wong",
      "Pat Wu",
      "Michael Lo",
      "William Choy",
      "Sam Chan",
      "Alex Lee",
      "Kenneth Chan",
      "Ringo Lui",
      "Laura Chu",
      "Elko Le",
      "Jacqueline Ng",
      "Queenie Chan",
      "Kishi Lee",
      "Keung Leung",
      "Connie Sheung",
      "Jody Wong",
    ],
    cotHeading: "COT 超級百萬圓桌會員",
    cotIntro:
      "超級百萬圓桌會員（Court of the Table – COT）為國際公認壽險從業人員最高榮譽，COT 的業績是 MDRT 的 3 倍。",
    cotMembers: ["Echo Zhang", "Gigi Sheung", "Benny Lam", "Kendy Yeung"],
    totHeading: "TOT 頂尖百萬圓桌會員",
    totNote:
      "待確認 / TO CONFIRM — 區域現有網站只列出「頂尖百萬圓桌會員」這個獎項類別，未提供名單。",
    listNote: "以上名單為 2022 年度，取自區域現有網站。",
    awardsHeading: "區域獎項",
    awardsIntro: "區域卓越成就包括以下類別：",
    awards: [
      "區域獎項",
      "百萬金圓桌會",
      "五年內百萬圓桌會員",
      "頂尖百萬圓桌會員",
      "區域年度大獎",
      "區域培訓領袖",
    ],
    awardsNote:
      "待確認 / TO CONFIRM — 各獎項的年度、得獎人數與細節未在區域現有網站公佈，需由區域提供後補上。",
    mediaHeading: "雜誌專訪",
    mediaIntro:
      "區域所有同事一直努力不懈，不斷尋求突破。在短短五年間，本區已憑著驕人的業績而登上各大媒體，亦曾登上雜誌封面。",
    media: [
      { outlet: "《智富 iMoney》", issue: "第 574 期", topic: "" },
      { outlet: "Ceo Capital", issue: "第 172 期", topic: "" },
      { outlet: "《資本企業家》", issue: "第 162 期", topic: "全方位 MPF 財務策劃方案 助客戶財富增值" },
      { outlet: "《保險風雲薈》", issue: "", topic: "" },
      { outlet: "《經濟一週》", issue: "第 1898 期", topic: "2017 年投資連繫壽險顧問" },
    ],
    csrHeading: "社會責任",
    csrParas: [
      "本區域一直致力與復康會合作，推動社區資本發展，參與不同的社會項目。2014 年及 2016 年更有幸獲頒兩年一度的「社會資本動力獎」，鼓勵團隊繼續發揮更多正能量，支援社會上更多有需要的人。",
      "區域以人為本，重視回饋社會，為不同階層出一分力，促進階層融合、社會和諧。因此，我們每年度也會舉辦大大小小、與不同志願團體合作的義工探訪活動。",
    ],
    csrItems: [
      "石壁宿舍探訪小朋友",
      "新春老人院探訪",
      "匡智瑞財中心探訪（表演環節）",
      "與復康會合作的社會資本項目",
    ],
    ctaHeading: "下一個名字，可以是你的",
    ctaBody: "成就的起點，通常都是一次沒有壓力的對話。",
  },

  // ── 5. GBA opportunity & locations ────────────────────────
  gba: {
    eyebrow: "大灣區機會",
    title: "在大灣區「一小時生活圈」開創機會",
    intro: "大灣區發展藍圖其中一個重點為「一小時生活圈」，當中最依賴的，就是區內的鐵路系統。",
    oneHourHeading: "一小時生活圈",
    oneHourParas: [
      "大灣區發展藍圖其中一個重點為「一小時生活圈」，當中最依賴的是區內的鐵路系統。",
      "因此，我們兩年前開始部署在全港的鐵路口岸設置分行，包括羅湖口岸、落馬洲口岸及西九高鐵站口岸，並成為全港鐵路唯一的保險合作夥伴，於站內設置營運中心，為灣區抵港內地旅客帶來專業的財務策劃服務。",
      "對顧問來說，這代表一個罕有的位置：站上人流最集中的口岸，服務一個正在快速融合的市場。",
    ],
    branchesHeading: "三間鐵路分行",
    branchesIntro: "以下地址與營業時間取自區域現有網站。",
    mapCaption:
      "分行位置示意圖只按分行所屬口岸排列，並非按地理位置比例繪製，亦不構成任何官方路線圖。",
    whyHeading: "這對你的意義",
    whyParas: [
      "口岸分行讓顧問接觸到其他渠道無法觸及的跨境人流，也讓區域的資產管理業務延伸至抵港的內地旅客。",
      "區域亦設有電話預約團隊，為顧問安排會議，令同事可以投放更多資源為客戶服務。",
      "跨境市場的規模與政策細節需以官方公開資料為準；我們不會在此陳述未經核實的數字。",
    ],
    ctaHeading: "想親身看看口岸分行？",
    ctaBody: "我們可以安排你到其中一間分行，看看第一線的實際運作。",
  },

  // ── 6. What we offer clients ──────────────────────────────
  clients: {
    eyebrow: "客戶服務",
    title: "你會代表什麼",
    intro: "這是客戶在你身上會看到的服務——也是你加入後要落力守護的標準。",
    platformsHeading: "區域服務平台",
    platformsIntro:
      "資產管理區域在「客戶服務」及「產品創新」方面均屢創新猷，一直以來備受廣泛認同，並以「財富管理」及「風險管理」為業務發展重心。區域服務包括以下平台：",
    platforms: [
      { title: "風險管理", body: "以保障為本的方案，為客戶與家人設置保護屏障。" },
      { title: "財富管理", body: "以客戶為中心度身訂造的綜合理財方案。" },
      { title: "經紀服務", body: "透過經紀渠道處理投資相關安排。" },
      { title: "貸款", body: "配合理財策劃的貸款安排。" },
      { title: "零售及私人銀行", body: "銀行端的零售與私人銀行服務配套。" },
      { title: "醫療", body: "醫療相關的保障與服務安排。" },
    ],
    platformsNote:
      "平台名稱取自區域現有網站的「區域服務平台」圖示；各平台的詳細服務範圍需由區域確認。待確認 / TO CONFIRM。",
    lifestyleHeading: "品味生活",
    lifestyleIntro: "除了作為客戶的理財夥伴，區域亦同時照顧客人的身心健康、建立生活品味，助他們更懂細嚼人生。",
    lifestyle: ["電影之夜", "試車會", "紅酒會", "高爾夫球指導日暨親子同樂日", "兒童藝術家交流日"],
    talksHeading: "講座及座談會",
    talksIntro: "區域更會舉辦多類型講座及座談會，為客戶提供生活、理財、升學等各方面所需要的重要資訊。",
    talks: ["學前教育講座", "高端資產信託講座", "毅行者講座", "婚前輔導講座", "投資名人分享會"],
    telemarketingHeading: "電話預約團隊",
    telemarketingParas: [
      "為了節省同事的工作時間、令同事工作能力提升、約見客戶更有效率，區域特別聘請電話預約團隊，為同事安排會議，令每位同事可以投放更多資源為客戶服務。",
    ],
    ctaHeading: "想了解你日後要守護的標準？",
    ctaBody: "我們可以把客戶服務的實際流程，由預約到售後，完整講一次給你聽。",
  },

  // ── 7. Insights / blog ────────────────────────────────────
  insights: {
    eyebrow: "見解",
    title: "見解與專欄",
    intro: "我們對行業、培訓與大灣區的想法，以及陳總的專欄文章。",
    groups: [
      { id: "insight", heading: "招募觀點" },
      { id: "column", heading: "陳總專欄" },
    ],
    calendarLabel: "內容日曆 · 第 1 個月",
    calendarNote: "標示「內容日曆 · 第 1 個月」的文章，為區域內容日曆的首月計劃（類別：事業心態 / GBA 趨勢 / 成功故事）。",
    readMore: "閱讀全文",
    ctaHeading: "讀完之後，想聊聊？",
    ctaBody: "任何一篇文章提到的事，我們都可以在見面時講得更仔細。",
  },

  // ── 8. Events & activities ────────────────────────────────
  events: {
    eyebrow: "活動",
    title: "活動與開放日",
    intro: "區域全年舉辦不同類型的活動——由商場路演到大型展覽，由團隊內部活動到客戶活動。有興趣的，可以在下面留位。",
    items: [
      {
        id: "roadshow",
        type: "對外活動",
        heading: "路演活動",
        intro:
          "區域路演活動遍及全港九新界不同黃金地段，每週最少一次在各區各大商場設置攤位，為客戶提供個人理財諮詢服務，同時為同事帶來更廣闊的人際網絡。",
        list: [
          "國際移民展",
          "Easter Egg Hunt 愉景灣",
          "海怡西廣場",
          "白石高爾夫球練習場",
          "Smart Land",
          "麗城匯",
          "Aeon 康怡",
          "奧海城",
          "珀麗高爾夫球場",
        ],
        note: "以上為區域現有網站列出的過往路演地點，並非活動時間表。",
      },
      {
        id: "exhibition",
        type: "對外活動",
        heading: "大型展覽",
        intro:
          "本區每月一次參加大型展覽，並針對性地接觸年輕家長、健康新一代及成熟穩重派等客戶，令資產管理業務可以有效推廣至目標客戶群。區域參與過的展覽包括：",
        list: [
          "健康生活博覽",
          "探索大自然遊學園 x 動物農莊",
          "百家寶 BB 展",
          "媽媽咪咪嘉年華",
          "TVB 繽紛生活嘉年華",
          "運動博覽",
          "國際中小企博覽",
          "香港結婚節",
        ],
        note: "以上為區域現有網站列出的過往展覽，並非活動時間表。",
      },
      {
        id: "team",
        type: "團隊活動",
        heading: "區域內部活動",
        intro: "區域會舉辦多項活動，令同事在工作之餘可以輕鬆一番、舒緩工作壓力。",
        list: ["Annual Dinner", "賀歲盃", "MDRT Dinner", "遊船河"],
        note: "貫徹區域「Work Hard，Play Hard」的理念。",
      },
      {
        id: "training",
        type: "培訓",
        heading: "培訓與進修",
        intro: "核心階段課程、區域培訓中心，以及發展階段的選修課。",
        list: ["友邦精英學院核心課程", "資產管理策劃高階課程", "區域培訓中心", "發展階段選修課程"],
        note: "詳見「事業發展」頁。",
      },
      {
        id: "openday",
        type: "招募",
        heading: "開放日",
        intro: "",
        list: [] as string[],
        note: "待確認 / TO CONFIRM — 開放日的日期、地點與形式未在區域現有網站公佈，需由區域提供後補上。",
      },
    ],
    rsvpHeading: "報名 / 留位",
    rsvpIntro: "選擇你有興趣的活動，填寫資料留位。這是預覽版本的示範表單，資料不會傳送或儲存到任何地方。",
    rsvpSubmit: "我有興趣",
    ctaHeading: "想參加，但未決定？",
    ctaBody: "你也可以先預約一次見面，我們再按你的時間安排活動。",
  },

  // ── 9. Contact & apply ────────────────────────────────────
  contact: {
    eyebrow: "預約及申請",
    title: "預約及申請",
    intro:
      "與「立即預約」相同的流程——留下資料，我們會盡快跟你確認時間。這是一個雙向的了解，不是面試，也不是推銷。",
    channelsHeading: "其他聯絡方式",
    whatsappLabel: "WhatsApp 對話",
    whatsappValue: "點擊開始對話（示範號碼）",
    emailLabel: "招募電郵",
    phoneLabel: "電話",
    faxLabel: "傳真",
    officeHeading: "辦公室",
    officeHoursHeading: "辦公時間",
    officeHoursNote: "待確認 / TO CONFIRM — 辦公室的對外開放時間未在區域現有網站公佈，需由區域提供後補上。",
    branchesHeading: "鐵路分行",
    branchesNote: "分行地址與營業時間取自區域現有網站。",
    ctaHeading: "或者，直接寫低你嘅問題？",
    ctaBody: "用 WhatsApp 或電郵都可以，我們會親自回覆。",
  },

  // ── Insight article bodies (rendered at /insights/<slug>) ─
  insightPosts: [
    {
      slug: "one-hour-living-circle",
      tag: "大灣區",
      title: "「一小時生活圈」對財務策劃代表什麼？",
      excerpt: "當跨境往來變成日常，客戶對保障與資產傳承的需求會怎樣改變？我們從鐵路口岸的第一線觀察說起。",
      body: [
        "大灣區發展藍圖其中一個重點為「一小時生活圈」，當中最依賴的是區內的鐵路系統。",
        "兩年前，我們開始在全港的鐵路口岸設置分行——羅湖口岸、落馬洲口岸及西九高鐵站口岸，並成為全港鐵路唯一的保險合作夥伴，在站內設置營運中心，為灣區抵港的內地旅客提供專業的財務策劃服務。",
        "站在口岸的第一線，我們看到的不只是人流，而是需求：跨境生活令保障、退休與資產傳承變成更迫切的題目。對財務策劃顧問來說，這是一個正在形成、而且會持續擴大的市場。",
        "如果你想知道這個市場的實際面貌，最好的方法不是讀文章，而是親身到分行看看。",
      ],
    },
    {
      slug: "three-questions-before-switching",
      tag: "事業心態",
      title: "轉行做財務策劃顧問前，先問自己三條問題",
      excerpt: "不是每個人都適合這一行。與其聽我們的介紹，不如先看看這三條問題你有沒有答案。",
      body: [
        "區域在「就業機會」頁問過一條問題：要選擇一個成功的事業發展，以下五項指標，你會如何優先考慮？不同人會有不同排序，而排序本身就反映了你重視什麼。",
        "第一條問題：你願意為自己的回報負責嗎？這是一份回報與貢獻成正比的工作——區域不設收入上限，但收入並非保證，取決於你為客戶創造的價值。",
        "第二條問題：你願意先學，後賺嗎？區域的核心階段訓練由兩星期的友邦精英學院核心課程開始，然後是兩星期的資產管理策劃高階課程，再加上六個月的區域培訓中心跟進。",
        "第三條問題：你享受與人建立長期關係嗎？我們的命名來自 Customer Centricity——所有管理決定以客戶為核心，同事的職銜是「顧問」，而不是「銷售」。",
        "以上三條問題如果有兩條以上答得肯定，你值得來談一次。",
      ],
    },
    {
      slug: "mdrt-is-not-the-finish-line",
      tag: "專業成長",
      title: "MDRT 不是終點：談顧問的長線專業成長",
      excerpt: "業績獎項只是其中一個刻度。真正決定你走得多遠的，是持續學習與客戶信任的累積。",
      body: [
        "MDRT（Million Dollar Round Table，百萬金圓桌會）自 1927 年推行，為國際公認壽險從業人員最高榮譽。以今年為例，香港區 MDRT 會員資格生意額要達 53.32 萬元，或有效保費 213.28 萬元。",
        "截至去年 8 月，友邦香港及澳門有 2,648 名代理擁有 MDRT 資格，平均每 5 位就有一位是 MDRT。COT（Court of the Table）的業績要求更是 MDRT 的 3 倍。",
        "這些數字值得尊重，但它們只是刻度。真正決定一位顧問走得多遠的，是持續學習與客戶信任的累積——這也是區域把培訓放在核心位置的原因。",
        "想了解我們的培訓與晉升階梯，歡迎預約見面。",
      ],
    },
    {
      slug: "aia-premier-academy-two-weeks",
      tag: "培訓",
      title: "友邦精英學院核心課程：兩星期學到什麼？",
      excerpt: "由產品知識到合規要求，我們把新人首兩個月的訓練拆開，讓你清楚知道每一步在做什麼。",
      body: [
        "區域為新同事準備了核心階段課程：第一階段（兩星期）是友邦精英學院核心課程，第二階段（兩星期）是資產管理策劃高階課程，第三階段（六個月）則在區域培訓中心持續跟進。",
        "兩星期的核心課程，是把你由「行業以外的人」變成「知道自己在說什麼的人」：由基礎產品知識、銷售流程，到合規要求。",
        "完成核心階段後，你可以隨著自己的興趣和意向，去選擇不同的進修課程（發展階段）。區域亦資助財務策劃顧問考取多個業界認可的專業資格。",
        "想知道實際的上課安排，我們可以在見面時詳細說明。",
      ],
    },
    {
      slug: "career-mindset-beyond-effort",
      tag: "事業心態",
      title: "事業心態：把「盡力」換成「超越」",
      excerpt: "「盡力」只是在能力範圍內做事。區域的成長心態是：去找一些超出能力範圍的事做。",
      body: [
        "「人之所以會進步，其實係因為佢會做能力範圍以外嘅野。」這是區域創辦人陳永業先生在專欄中寫過的一句話。",
        "他認為「盡力」的意思是 within 自己能力去做一件事——如果人人只做能力以內的事，就不會有進步。要令自己有突破，就要去找一些 beyond 自己能力範圍的事做。",
        "這個心態，是區域由 50 人發展至 500 人的原因之一。",
        "我們在見面時，會坦白告訴你哪些目標是能力以內、哪些是需要跳一跳才夠得著的。",
      ],
      quote: "理想，只要你不停步，最終定能達到！",
    },
    {
      slug: "gba-cross-border-trend",
      tag: "大灣區",
      title: "GBA 趨勢：跨境理財需求正在改變",
      excerpt: "跨境生活正在改變客戶對保障、退休與傳承的看法。",
      body: [
        "「一小時生活圈」把大灣區城市之間的距離縮短，也把客戶的資產與家庭關係拉得更近。",
        "我們在全港鐵路口岸設有三間分行——西九高鐵站、羅湖與落馬洲，並成為全港鐵路唯一的保險合作夥伴，於站內設置營運中心。",
        "當跨境往來變成日常，客戶需要的往往不只是單一產品，而是橫跨兩地的保障與傳承安排。這正是區域以「財富管理」及「風險管理」為業務重心的原因。",
        "跨境市場的具體規模與政策細節需以官方公開資料為準，我們不會在此陳述未經核實的數字。",
      ],
    },
    {
      slug: "success-story-50-to-500",
      tag: "成功故事",
      title: "成功故事：由 50 到 500 的平台力量",
      excerpt: "2009 年由 50 人開始，今日是 500 位顧問。這個故事是怎樣寫成的？",
      body: [
        "香港資深區域總監陳永業先生於 2009 年創立「資產管理區域」，同年正值金融海嘯。他的答案只有四個字：有危有機。",
        "由 50 人躍升至 500 人，跨越的不只是人數，而是一套可以被複製的支援系統：核心階段訓練、兩條晉升階梯、龐大的後勤基建，以及自設的電話預約團隊。",
        "區域最引以為傲的，是不論顧問出身自哪個行業、背景或經驗，都可以善用這套配套做出比同業優秀的成績。",
        "如果你也想成為下一個故事的主角，預約一次見面，我們先把現實條件講清楚。",
      ],
    },
    {
      slug: "directors-quote-effort",
      tag: "陳總專欄",
      title: "原來「盡力」只會令你不斷退步",
      excerpt: "做老闆最經常會聽見同事同自己講：「嗯！我會盡力架啦！」但原來「盡力」只會令你不斷退步。",
      body: [
        "做老闆最經常會聽見同事同自己講:「嗯！我會盡力架啦！」正常人聽到呢句說話都應該會幾開心嘅，證明呢個同事真係會盡力吧，但係我每次聽到這句說話我都有點「忟忟地」。「人之所以會進步，其實係因為佢會做能力範圍以外嘅野。」",
        "盡力的意思就係 within 自己能力入面，盡人事咁去做一件事，即係話永遠你個人能力係得咁多就做咁多架唧。如果係咁人類就唔會有進步，我地就會停留在石器時代啦！",
        "所以如果要令到呢個世界包括埋自己有所突破的話，你就一定要去搵一啲 beyond 自己能力範圍嘅野做，唔好再只是「盡力」去做每一件事！",
      ],
      authorNote: "陳永業（Otto）——資深區域總監。本文為區域專欄原文（廣東話）。",
    },
    {
      slug: "directors-quote-barbie",
      tag: "陳總專欄",
      title: "Barbie 嫁得出嗎？",
      excerpt: "只靠一種獨特性去 differentiate 自己，並不足以在這個世界保持優勢——你要成為各個領域的 Pioneer。",
      body: [
        "經常聽到一些品牌強調自己產品的獨特性，但係我地總發現這些品牌 hit 了幾年就好快唔見咗影。",
        "玩具業龍頭 Mattel（美泰）今年市值暴瀉 47% 至 50 億美金，最近仲傳出可能會被排行第四的 Hasbro（孩之寶）收購。因為他只有一個獨特性 — Barbie。",
        "原來要贏到呢個世界，只是做一種事去 differentiate 自己令其他人學唔到，呢種諗法有點不切實際。因為不論你的設計有幾獨特都好，好快你就會見到個你設計比人抄左，仲要抄得叻過你添。所以你想係呢個世界保持優勢，你一定要成為各個領域的 Pioneer。雖然做 Pioneer 係有成本的，因為你所做的事物唔一定成功的。但相比之下，行動比市場慢的代價將會是更大。而且如果你成為 Pioneer 成功創造了一個市場出來，優勢好多時都可以持續好多年的。講返 Barbie，佢都係風光左三十年先可能比人收購啫～",
      ],
      authorNote: "陳永業（Otto）——資深區域總監。本文為區域專欄原文（廣東話），部分字詞依原文保留。",
    },
    {
      slug: "directors-quote-goalposts",
      tag: "陳總專欄",
      title: "搬龍門",
      excerpt: "當客觀環境改變唔到的時候，我地要改變自己，直至自己 strong enough 去將客觀環境改變。",
      body: [
        "假設一場足球比賽，當我發覺好難入到波的時候，我可否將個龍門搬前少少呢？又或者將個龍門框放大少少呢？呢個行為就係俗語所講的搬龍門啦。",
        "咁原來係唔得架喎，但係我又要入波咁點算呢？咁就唯有練好 D 腳法囉。練下 D 香蕉射球呀，猛虎射球呀，學下插花呀等等啦。聽落呢個道理好簡單，但放返落去工作裏面，又唔知點解經常性當同事遇到問題或者困難嗰陣，我聽到個要求佢地都係希望改變呢個遊戲規則架喎。「可唔可以 extend 個 deadline 呀？」「喂可唔可以 special approval 呀？」但咁樣同叫我放大 D 同埋搬前 D 個龍門框有咩分別呢？",
        "我記得我師父教過我呢番說話:「當客觀環境改變唔到的時候，我地要改變自己，直至自己 strong enough 去將客觀環境改變。」所以當大家成為話事人之前，都係跟遊戲規矩玩啦！",
      ],
      authorNote: "陳永業（Otto）——資深區域總監。本文為區域專欄原文（廣東話）。",
    },
    {
      slug: "directors-quote-mandela",
      tag: "陳總專欄",
      title: "曼德拉的夢想",
      excerpt: "因為你想成就其他人，過程中你成就了自己。",
      body: [
        "大家想一想：曼德拉的夢想是什麼？A) 成為南非首位黑人總統；B) 取消種族隔離制度，令黑人地位提升；C) 成立一個公平及強大的國家，不論任何種族的人都可和平相處。",
        "相信大家都會選擇 C。不過當公眾談論起他最大的成就時，卻又不是想起答案 (C)，而會說是 (A) 同 (B)。",
        "夢想就是這樣的一回事，是一個偉大的願景；是一個窮一生去追尋的境界。可能是一個不會有確實所謂完全實現得了的目標——好像環保、世界和平這些都一樣。但這些夢想都有一個共通點：你的對象人物一定是大眾。愈偉大的夢想可以服務的人數愈多。你完全不需要去想自己，因為成就這些夢想的過程之中的先決條件就是要令自己強化；在追夢的過程之中，令自己變得更強大，其實只不過是副產品而已。",
      ],
      quote: "因為你想成就其他人，過程中你成就了自己。",
      authorNote: "陳永業（Otto）——資深區域總監。本文為區域專欄原文。",
    },
    {
      slug: "directors-quote-income-contribution",
      tag: "陳總專欄",
      title: "一份收入與貢獻成正比的工作",
      excerpt: "在今時今日這金錢世界上，還有比保險更有意義的工作嗎？",
      body: [
        "還記得小時候老師必定要求過大家寫一篇「我的志願」。我相信大部份學生都會寫醫生或者護士，還有消防員、警察等。但我頗肯定應該沒有人會寫：我的志願是成為一個偉大的理財顧問、跨國銀行家、股票經紀等。",
        "原因很簡單，因為小時候的志願都是想做有意義的工作，既有優越感，又能幫到人就最好了。但長大後，基於現實考慮，慢慢遺忘所謂社會責任這回事。除非，你加入了保險行業。這個「志願」又可重拾起來。",
        "保險的工作其實在做社會福利，儘管保險公司是一個盈利機構。但不能否認它的工作與政府一樣，在向普羅大眾收稅，再分發給有需要的人使用。同時可幸是保險公司是一個盈利機構，所以保險公司的福利一定不會中斷，而且會是可持續發展的。我們從投保者收取保費，在家庭有缺損、金錢能發揮最大作用時，將他的保費再以數十倍來提供財務協助，讓缺損家庭渡過難關。",
        "在今時今日這金錢世界上，還有比保險更有意義的工作嗎？",
      ],
      authorNote: "陳永業（Otto）——資深區域總監。本文為區域專欄原文（廣東話）。",
    },
    {
      slug: "directors-quote-sharpest-knife",
      tag: "陳總專欄",
      title: "周身刀",
      excerpt: "與其「周身刀」，不如磨利你最擅長的那把刀吧！",
      body: [
        "經常聽到有人會說：「XX 很厲害，涉足很多行業！」於是我開始留意究竟 XX 的生活指數能否反映他的收入高低呢？我發覺這些 XX 大部分只算中產，小康之家也未必談得上。",
        "可是沒道理啊，他那麼多生意，每樣也能賺錢，理應很富有才對啊！看看李嘉誠，他雖然擁有很多業務，但其實想一想李嘉誠的發跡經過是做玩具的。即使從未與他面談，我相信在他做玩具的時期，他是十分專注去發展這行業的。",
        "其實這世界，尤其是香港，機會何其多，你每次想花時間在新機遇時，等於放棄了花在你強項上和專業上的時間。那你應該思考一個問題：你的時間應該押在你的專長上，還是押在各種不同類型的機遇、那些你不熟悉的領域上呢？",
        "所以要想新構思，就留在你的本業裏構想。我相信一件事：如果自己的本業已經能夠發展得好好，應該沒有空閒時間去開拓那些自己不認識的範疇。與其「周身刀」，不如磨利你最擅長的那把刀吧！",
      ],
      authorNote:
        "編按：陳永業（Otto）——資深區域總監，2009 年正式加入 AIA，並成立「友邦資產管理區域」。團隊管理有方，短短 8 年間區域發展迅速，由 50 人增加至超過 300 人，並於多個業務成為 AIA 之冠。多次受雜誌專訪，並於 2016 成為「保險風雲人物」。",
    },
  ],
};

export type PagesCopy = typeof zh;

const en: PagesCopy = {
  toConfirm: "TO CONFIRM / 待確認",

  nav: {
    why: "Why join us",
    story: "Our story",
    career: "Career path",
    achievements: "Achievements",
    gba: "GBA opportunity",
    clients: "Client services",
    insights: "Insights",
    events: "Events",
    contact: "Contact & apply",
  },

  why: {
    eyebrow: "Why join us",
    title: "Why 500 people chose to join this family",
    intro:
      "We started with 50 people in 2009. Today the district is 500 consultants strong. Here are four things we can actually deliver — with the evidence for each.",
    pillarsHeading: "Four things we can actually deliver",
    pillarsSub: "Every one of them has a source, not a slogan.",
    pillars: [
      {
        title: "Income has no ceiling — contribution decides the return",
        body: "There is no cap on what you can earn here. Your return follows the value you create for clients; for us that is not a slogan, it is what every engagement adds up to.",
        proof: "Source: the district publishes a Personal Sales promotion ladder so consultants can focus on personal production and earn the most direct return (事業發展).",
      },
      {
        title: "Greater Bay Area access through exclusive rail branches",
        body: "We are the only insurance partner across Hong Kong's rail network, with branches at West Kowloon (high-speed rail), Lo Wu and Lok Ma Chau — putting you in front of cross-border traffic others never reach.",
        proof:
          "Source: the district opened branches at every rail border crossing two years ago and became the only insurance partner on the rail network (Greater Bay Area section).",
      },
      {
        title: "Strong back office, so you can focus on clients",
        body: "Administration, training, digital tools, product and claims support are handled by the district's back-office team. You are not expected to do all of it alone.",
        proof:
          "Source: the district states it holds substantial back-office infrastructure and employs its own telephone appointment team to book client meetings for consultants.",
      },
      {
        title: "A clear ladder plus leadership development",
        body: "Choose the personal-sales track and build your own book, or the management track and learn to lead a team — supported by AIA Premier Academy core courses and the district training centre.",
        proof:
          "Source: the three-stage core programme (AIA Premier Academy core course, advanced asset-management planning course, district training centre) plus the two promotion tracks (事業發展).",
      },
    ],
    compareHeading: "How we differ from a typical insurance agency",
    compareIntro:
      "The right-hand column is general industry framing, used to make the contrast clear; it is not aimed at any named company. Everything in our column comes from the district's own published material.",
    usLabel: "Portfolio Management District",
    otherLabel: "Typical insurance agency (industry generalisation)",
    compareRows: [
      {
        topic: "Brand philosophy",
        us: "The name comes from a Customer Centricity management philosophy: every management decision starts from the client. Our people are titled consultants, not salespeople.",
        others: "Usually driven by product or sales targets, with titles and training centred on pushing products.",
      },
      {
        topic: "Border locations",
        us: "The only insurance partner across Hong Kong's rail network, with branches at three rail border crossings (West Kowloon high-speed rail, Lo Wu, Lok Ma Chau).",
        others: "Normally no exclusive border or rail presence; client flow relies on personal networks.",
      },
      {
        topic: "Back-office support",
        us: "The district runs its own back-office infrastructure and employs a telephone appointment team to book client meetings for consultants.",
        others: "Administration, appointments and follow-up are usually handled by the consultant alone.",
      },
      {
        topic: "Training system",
        us: "A three-stage core programme (2-week core course, 2-week advanced course, 6-month district training centre) plus elective development-stage courses.",
        others: "Often a single onboarding course; further study is left to the individual.",
      },
      {
        topic: "Promotion path",
        us: "Two clear ladders — personal sales and business management — chosen by ambition.",
        others: "Usually a single promotion route.",
      },
      {
        topic: "Leadership development",
        us: "Psychological-quality training has been introduced, with a plan to develop every new joiner into a future brand leader, building sub-brands.",
        others: "Less emphasis on developing a consultant's personal brand and new culture.",
      },
    ],
    compareNote:
      "The right column is a general description of common industry practice — not a comment on, or allegation against, any named company; where your own firm's arrangements differ, theirs prevail. Our column is drawn from the district's own published material.",
    faqHeading: "Frequently asked questions",
    faq: [
      {
        q: "What is the income really like?",
        a: "This is a job whose return is proportional to contribution. There is no income ceiling in the district, and the return comes from the value you create for clients. But it must be said plainly: income is not guaranteed and varies widely with individual performance, market conditions and effort — nobody should assume a specific number. We suggest asking directly about the income structure and commission arrangements when you meet us.",
      },
      {
        q: "Do I pay for the training?",
        a: "The district prepares a three-stage core programme: Stage 1 (two weeks) AIA Premier Academy core course; Stage 2 (two weeks) advanced asset-management planning course; Stage 3 (six months) district training centre. After that you may choose development-stage electives by interest. The district also sponsors consultants to obtain several industry-recognised professional qualifications.",
      },
      {
        q: "How does work-life balance work?",
        a: "The district runs events so consultants can relax and relieve pressure outside work, including the Annual Dinner, Lunar New Year Cup, MDRT Dinner and boat trips — in keeping with its Work Hard, Play Hard philosophy.",
      },
      {
        q: "What does the Greater Bay Area mean for me?",
        a: "Two years ago we began opening branches at every rail border crossing in Hong Kong — Lo Wu, Lok Ma Chau and West Kowloon high-speed rail — and became the only insurance partner on the rail network, running service centres inside the stations. Standing at the busiest crossings, serving a market that is integrating fast, is your starting point in the GBA.",
      },
      {
        q: "Can I apply with no experience or from another industry?",
        a: "Yes. Our consultants come from different industries, backgrounds and experience levels, and all of them can use the district's strong support system to outperform their peers.",
      },
      {
        q: "Entry requirements, licences and the application process?",
        a: "TO CONFIRM / 待確認 — an official description of the entry threshold, required licences and application process is not published on the district's current website and must be supplied by the district.",
      },
    ],
    faqNote: "Answers are drawn from the district's own published material; where arrangements have changed, the district's official information prevails.",
    ctaHeading: "Want to talk it through first?",
    ctaBody:
      "A 30-minute conversation with no pressure. Ask anything — the reality of the job, how income works, training, or simply whether this suits you. The decision stays with you.",
  },

  story: {
    eyebrow: "Our story",
    title: "Fourteen years that began with 50 people",
    intro:
      "Since the district was founded in 2009 its business and headcount have grown steadily — on top of a management philosophy that puts the client at the centre.",
    foundingHeading: "Founding and growth",
    foundingParas: [
      "Mr Chan Wing Yip, Senior District Director, founded the Portfolio Management District in 2009. Over these fourteen years the team's business and headcount have grown quickly, earning the trust of many clients and achieving breakthrough development.",
      "Fourteen years on, the sales force has grown from 50 people to 500 today — evidence that the district's philosophy fits the personal career growth of the people who join it.",
      "2009 was the year of the financial crisis, and Mr Chan joined AIA and founded the AIA portfolio-management brand the same year to develop AIA's upper-mid-market financial planning business. His answer distilled to four words: crisis and opportunity.",
    ],
    factsNote: "Figures are taken from the district's current website (framed there as \"these fourteen years\").",
    facts: [
      { value: "2009", label: "Founded" },
      { value: "50 → 500", label: "Sales force" },
      { value: "14 years", label: "Since founding (district's own wording)" },
    ],
    visionHeading: "Vision",
    visionParas: [
      "Our name comes from a management philosophy — Customer Centricity: every management decision starts from the client, including the brand name (asset management) and people's title (consultant), so that consultants get used to starting every decision from the client's point of view.",
      "The words \"asset management\" were chosen so clients understand that insurance is no longer merely a product, but a comprehensive financial solution tailored around the client.",
      "Looking ahead: beyond strengthening hardware and design, the district has introduced psychological-quality training and plans to develop every new joiner into a future brand leader, building the Portfolio Management sub-brand.",
    ],
    cultureHeading: "Culture",
    cultureParas: [
      "The district runs a range of activities so consultants can relax and relieve pressure outside work, in keeping with its Work Hard, Play Hard philosophy.",
    ],
    cultureItems: ["Annual Dinner", "Lunar New Year Cup", "MDRT Dinner", "Boat trip"],
    bannerHeading: "District milestones",
    bannerNote:
      "The district's current website carries a \"district milestones\" section recording annual themes from 2010 to today. TO CONFIRM / 待確認 — the year-by-year themes and milestones must be supplied by the district.",
    chairmanHeading: "Chairman's message",
    chairmanTitle: "Mr Chan Wing Yip, Senior District Director",
    chairmanQuote: "With an ideal, as long as you never stop walking, you will reach it in the end.",
    chairmanParas: [
      "2009 was the year of the financial crisis. That same year I joined AIA and founded the AIA portfolio-management brand to develop AIA's upper-mid-market financial planning business. In my first few years I was often interviewed by the media and financial magazines, and their first question was always why I chose AIA at that time. My answer distilled to four words: crisis and opportunity. Later, facing regulation of investment-linked products, we brought policy-financing business into the agency industry; and when the pandemic closed the border, we took on all three branches inside the rail crossings. All of it follows one idea: \"Change is neither good nor bad, but change always brings opportunity.\"",
      "Their second question was why the brand was named \"asset management\". The naming concept comes from a management philosophy — Customer Centricity: putting the client at the core of every management decision, including the brand name and people's title (consultant), so consultants get used to starting from the client. Choosing the words \"asset management\" was meant to help clients understand that insurance is no longer merely a product, but a comprehensive, client-centred and tailored financial solution.",
      "Today the team has gathered hundreds of elite consultants, arguably the industry's strongest asset-management team, with substantial back-office infrastructure behind it to help colleagues build their business empires. What we are proudest of is that, whatever industry, background or experience our financial consultants come from, they can all use the district's strong support system to outperform their peers — and clients can, through our professional advisory service, grasp the market's most distinctive information and perspectives, adopt new financial concepts, and build the most comprehensive protection and asset-protection barrier for themselves and their families.",
      "Our future task is to break through an already well-developed support system. Beyond hardware, we have introduced psychological-quality training and plan to develop every new colleague into a future brand leader — there are no born leaders, but with the right mindset coaching we can develop more brand leaders and build the Portfolio Management sub-brand, so colleagues can create a new culture with their own character and meet the financial and career needs of a new generation.",
    ],
    galleryHeading: "District photos",
    galleryNote:
      "Photographs are taken from the district's current website for preview use only; people photography is copyright of the district and AIA.",
    gallery: [
      { src: "/images/leader-portrait.jpg", caption: "District founder / leader portrait" },
      { src: "/images/team-wide.jpg", caption: "Team photo (AIA uniforms)" },
      { src: "/images/team-annual-presentation.jpg", caption: "2019–20 annual presentation team photo" },
      { src: "/images/team-new-director.jpg", caption: "Team photo marking a new Senior District Director" },
      { src: "/images/growth-chart.jpg", caption: "Headcount / business growth chart, 2010–2022" },
    ],
    ctaHeading: "Want to be part of the next fourteen years?",
    ctaBody: "We can sit down, look at your background, and talk about how this philosophy can fit your growth.",
  },

  career: {
    eyebrow: "Career path",
    title: "A clear career ladder",
    intro:
      "We do not only sponsor consultants to obtain several industry-recognised professional qualifications — we care about their long-term career. Choose to focus on personal sales, or to develop management skills and build your ideal enterprise.",
    ladderHeading: "Core stage → development stage",
    ladderIntro: "The district has prepared a series of courses to lay the foundation for your career.",
    ladder: [
      {
        stage: "Core stage",
        label: "Building the foundation",
        items: [
          {
            phase: "Stage 1 · two weeks",
            title: "AIA Premier Academy core course",
            body: "Structured onboarding training, from basic product knowledge to compliance requirements.",
          },
          {
            phase: "Stage 2 · two weeks",
            title: "Advanced asset-management planning course",
            body: "Moves product knowledge up to client-centred planning.",
          },
          {
            phase: "Stage 3 · six months",
            title: "District training centre",
            body: "Continued follow-up and practical support at district level.",
          },
        ],
      },
      {
        stage: "Development stage",
        label: "Electives by interest",
        items: [
          {
            phase: "After completing all district training",
            title: "Elective further-study courses",
            body: "You can choose different further-study courses according to your own interests and direction.",
          },
        ],
      },
    ],
    tracksHeading: "Two promotion ladders",
    tracksIntro: "The choice is yours.",
    tracks: [
      { title: "Personal sales ladder", body: "Focus on personal production and earn the most direct return for yourself." },
      { title: "Business management ladder", body: "Develop management skills and create your own ideal enterprise." },
    ],
    leadershipHeading: "How leaders are made",
    leadershipIntro: "The district's careers page asks one question:",
    leadershipQuestion:
      "To choose a successful career path, how would you prioritise the following five indicators?",
    leadershipParas: [
      "The district has introduced psychological-quality training, and plans to develop every new joiner into a future brand leader — there are no born leaders, but with the right mindset coaching more brand leaders can be developed.",
      "The district holds substantial back-office infrastructure and employs its own telephone appointment team to book client meetings, so consultants can put their time back into clients and professional growth.",
    ],
    openingsHeading: "Current openings",
    openingsNote:
      "TO CONFIRM / 待確認 — a specific list of job openings is not published on the district's current website and must be supplied by the district. You can still register your interest via the booking button or WhatsApp below.",
    openings: [] as Array<{ role: string; note: string }>,
    ctaHeading: "Which ladder suits you?",
    ctaBody: "When we meet we can look at your background together and talk about whether personal sales or business management fits you better.",
  },

  achievements: {
    eyebrow: "Achievements & our people",
    title: "Achievements and our team",
    intro: "Industry-recognised professional standing, and the names standing behind it.",
    mdrtHeading: "MDRT — Million Dollar Round Table",
    mdrtIntro:
      "The Million Dollar Round Table (MDRT) has run since 1927 and is internationally recognised as the highest honour for life-insurance professionals and as industry-wide proof of production.",
    mdrtFacts: [
      "This year, qualification in Hong Kong requires business volume of HK$533,200 or in-force premium of HK$2,132,800.",
      "As of August last year, AIA Hong Kong and Macau had 2,648 agents holding MDRT status — about one in every five.",
    ],
    mdrtLeadersHeading: "MDRT Leaders",
    mdrtLeaderNames: [
      "Tammy Tse",
      "Ivy Hon",
      "Vicki Lam",
      "Chris Chen",
      "Sally Au Yeung",
      "Pui Ying",
      "Jojo Cheung",
      "Jason Hung",
      "Ivan Ho",
      "Leo Tse",
    ],
    mdrtMembersHeading: "MDRT members",
    mdrtMemberNames: [
      "Regina He",
      "Keith Law",
      "Emily Chan",
      "Gloria Chu",
      "Frankie Wong",
      "Chris Ho",
      "Jake Cheung",
      "Angela Yip",
      "Sharon Cheung",
      "Myron Lam",
      "Paul Law",
      "Ivan Leung",
      "Jeff Lee",
      "Peter Li",
      "Ling Ma",
      "Wing Wu",
      "Neo Cheung",
      "Sue Lai",
      "Kathleen Tsang",
      "Erin Ng",
      "Annie Cheung",
      "Kenji Wong",
      "Pat Wu",
      "Michael Lo",
      "William Choy",
      "Sam Chan",
      "Alex Lee",
      "Kenneth Chan",
      "Ringo Lui",
      "Laura Chu",
      "Elko Le",
      "Jacqueline Ng",
      "Queenie Chan",
      "Kishi Lee",
      "Keung Leung",
      "Connie Sheung",
      "Jody Wong",
    ],
    cotHeading: "COT — Court of the Table",
    cotIntro:
      "Court of the Table (COT) is internationally recognised as the highest honour for life-insurance professionals; COT production is three times MDRT.",
    cotMembers: ["Echo Zhang", "Gigi Sheung", "Benny Lam", "Kendy Yeung"],
    totHeading: "TOT — Top of the Table",
    totNote:
      "TO CONFIRM / 待確認 — the district's current website lists Top of the Table only as an award category, with no member list.",
    listNote: "The lists above are for 2022 and are taken from the district's current website.",
    awardsHeading: "District awards",
    awardsIntro: "The district's outstanding achievements cover the following categories:",
    awards: [
      "District awards",
      "Million Dollar Round Table",
      "MDRT within five years",
      "Top of the Table",
      "District annual grand award",
      "District training leader",
    ],
    awardsNote:
      "TO CONFIRM / 待確認 — the year, number of recipients and details for each award are not published on the district's current website and must be supplied by the district.",
    mediaHeading: "Magazine interviews",
    mediaIntro:
      "Everyone in the district has kept working hard and seeking breakthroughs. Within just five years the district has appeared in major media on the strength of its results, and has been on magazine covers.",
    media: [
      { outlet: "iMoney", issue: "Issue 574", topic: "" },
      { outlet: "Ceo Capital", issue: "Issue 172", topic: "" },
      { outlet: "Capital Entrepreneur", issue: "Issue 162", topic: "A full-scope MPF financial planning solution to help clients grow wealth" },
      { outlet: "Insurance Circle", issue: "", topic: "" },
      { outlet: "Economic Digest", issue: "Issue 1898", topic: "Investment-linked life consultant, 2017" },
    ],
    csrHeading: "Social responsibility",
    csrParas: [
      "The district has long worked with the Rehabilitation Alliance to promote community capital development and take part in social projects. In 2014 and 2016 it was honoured with the biennial \"Social Capital Builder Award\", encouraging the team to keep contributing positive energy and support those in need.",
      "The district is people-oriented and values giving back, contributing to different sectors of society and promoting social inclusion and harmony. Every year it runs volunteer visits of all sizes with different voluntary organisations.",
    ],
    csrItems: [
      "Visit to children at Shek Pik hostel",
      "Lunar New Year elderly-home visit",
      "Visit to Chi Shui Choi Centre (performance)",
      "Social-capital projects with the Rehabilitation Alliance",
    ],
    ctaHeading: "The next name could be yours",
    ctaBody: "Achievement usually starts with one pressure-free conversation.",
  },

  gba: {
    eyebrow: "GBA opportunity",
    title: "Build your career in the Greater Bay Area's one-hour living circle",
    intro: "A central idea in the Greater Bay Area blueprint is the one-hour living circle — and nothing supports it more than the region's rail system.",
    oneHourHeading: "The one-hour living circle",
    oneHourParas: [
      "A central idea in the Greater Bay Area blueprint is the one-hour living circle — and nothing supports it more than the region's rail system.",
      "So two years ago we started positioning branches at Hong Kong's rail border crossings: Lo Wu, Lok Ma Chau and West Kowloon high-speed rail. We became the only insurance partner on the rail network, running service centres inside the stations for travellers arriving from across the Bay Area.",
      "For a consultant that means a rare position: standing at the busiest crossing points, serving a market that is integrating fast.",
    ],
    branchesHeading: "Our three rail branches",
    branchesIntro: "Addresses and opening hours below are taken from the district's current website.",
    mapCaption:
      "The branch diagram orders branches by the crossing they serve; it is not drawn to geographic scale and is not an official route map.",
    whyHeading: "What it means for you",
    whyParas: [
      "Border branches put consultants in front of cross-border traffic that other channels never reach, and extend the district's asset-management business to mainland travellers arriving in Hong Kong.",
      "The district also runs a telephone appointment team to book client meetings, so consultants can put more resources into serving clients.",
      "Cross-border market size and policy detail should be taken from official public sources; we do not state unverified numbers here.",
    ],
    ctaHeading: "Want to see a border branch for yourself?",
    ctaBody: "We can arrange for you to visit one of the branches and see the front line in practice.",
  },

  clients: {
    eyebrow: "Client services",
    title: "What you will represent",
    intro: "This is the service clients will see in you — and the standard you will be asked to protect once you join.",
    platformsHeading: "District service platforms",
    platformsIntro:
      "The district has repeatedly innovated in client service and product development, and is widely recognised for it, with wealth management and risk management as its business focus. District services include the following platforms:",
    platforms: [
      { title: "Risk management", body: "Protection-led solutions that build a barrier around clients and their families." },
      { title: "Wealth management", body: "Comprehensive, client-centred and tailored financial solutions." },
      { title: "Brokerage", body: "Investment-related arrangements through brokerage channels." },
      { title: "Loans", body: "Lending arrangements that fit a financial plan." },
      { title: "Retail & private banking", body: "Retail and private-banking service support on the bank side." },
      { title: "Medical", body: "Medical-related protection and service arrangements." },
    ],
    platformsNote:
      "Platform names are taken from the district's current \"district service platforms\" graphic; the detailed scope of each platform must be confirmed by the district. TO CONFIRM / 待確認.",
    lifestyleHeading: "Lifestyle events",
    lifestyleIntro:
      "Beyond being a client's financial partner, the district also cares for clients' wellbeing and lifestyle, helping them savour life more fully.",
    lifestyle: ["Movie night", "Test-drive day", "Wine tasting", "Golf clinic with family day", "Children's artist exchange day"],
    talksHeading: "Talks and seminars",
    talksIntro:
      "The district also runs many types of talks and seminars, giving clients the key information they need on life, financial planning, education and more.",
    talks: [
      "Pre-school education seminar",
      "High-end asset trust seminar",
      "Trailwalker seminar",
      "Pre-marriage counselling seminar",
      "Investment celebrity sharing session",
    ],
    telemarketingHeading: "Telephone appointment team",
    telemarketingParas: [
      "To save consultants time, raise their capability and make client meetings more efficient, the district employs a dedicated telephone appointment team to arrange meetings, so every consultant can put more resources into serving clients.",
    ],
    ctaHeading: "Want to understand the standard you will protect?",
    ctaBody: "We can walk you through the real client-service process, from booking to after-sales.",
  },

  insights: {
    eyebrow: "Insights",
    title: "Insights and columns",
    intro: "Our thinking on the industry, training and the Greater Bay Area — plus Mr Chan's columns.",
    groups: [
      { id: "insight", heading: "Recruitment insights" },
      { id: "column", heading: "Chairman's columns" },
    ],
    calendarLabel: "Content calendar · Month 1",
    calendarNote:
      "Posts marked \"Content calendar · Month 1\" are the district content calendar's first-month plan (themes: career mindset / GBA trends / success stories).",
    readMore: "Read",
    ctaHeading: "Read something that raised a question?",
    ctaBody: "Anything mentioned in any article, we can cover in more detail when we meet.",
  },

  events: {
    eyebrow: "Events",
    title: "Events and open days",
    intro:
      "The district runs events all year — from mall roadshows to major exhibitions, from internal team activities to client events. If any interests you, reserve a place below.",
    items: [
      {
        id: "roadshow",
        type: "Public",
        heading: "Roadshows",
        intro:
          "Roadshows reach prime locations across Hong Kong, Kowloon and the New Territories, with booths in major malls at least once a week to give clients personal financial-consulting service — and to widen consultants' networks.",
        list: [
          "International Immigration Expo",
          "Easter Egg Hunt, Discovery Bay",
          "South Horizons West Plaza",
          "Whitehead golf driving range",
          "Smart Land",
          "Belvedere Garden",
          "AEON Kornhill",
          "Olympian City",
          "Park Island golf course",
        ],
        note: "These are past roadshow locations listed on the district's current website, not a schedule.",
      },
      {
        id: "exhibition",
        type: "Public",
        heading: "Major exhibitions",
        intro:
          "The district joins a major exhibition once a month, targeting young parents, the health-conscious new generation and established clients, so its asset-management business reaches the right audience. Exhibitions have included:",
        list: [
          "Healthy Life Expo",
          "Nature Discovery Study Park x Animal Farm",
          "Baijia Baby Expo",
          "Mama Mimi Carnival",
          "TVB Fun Life Carnival",
          "Sports Expo",
          "International SME Expo",
          "Hong Kong Wedding Festival",
        ],
        note: "These are past exhibitions listed on the district's current website, not a schedule.",
      },
      {
        id: "team",
        type: "Team",
        heading: "Internal district activities",
        intro: "The district runs a range of activities so consultants can relax and relieve pressure outside work.",
        list: ["Annual Dinner", "Lunar New Year Cup", "MDRT Dinner", "Boat trip"],
        note: "In keeping with the district's Work Hard, Play Hard philosophy.",
      },
      {
        id: "training",
        type: "Training",
        heading: "Training and further study",
        intro: "Core-stage courses, the district training centre, and development-stage electives.",
        list: [
          "AIA Premier Academy core course",
          "Advanced asset-management planning course",
          "District training centre",
          "Development-stage electives",
        ],
        note: "See the Career path page for detail.",
      },
      {
        id: "openday",
        type: "Recruitment",
        heading: "Open days",
        intro: "",
        list: [] as string[],
        note:
          "TO CONFIRM / 待確認 — dates, locations and format for open days are not published on the district's current website and must be supplied by the district.",
      },
    ],
    rsvpHeading: "Reserve a place",
    rsvpIntro:
      "Pick the activities you are interested in and leave your details. This is a preview-only demo form — nothing is sent or stored anywhere.",
    rsvpSubmit: "I'm interested",
    ctaHeading: "Interested but undecided?",
    ctaBody: "You can also book a chat first, and we will fit an activity around your schedule.",
  },

  contact: {
    eyebrow: "Contact & apply",
    title: "Contact and apply",
    intro:
      "The same flow as Book now — leave your details and we will confirm a time. It is a two-way conversation, not an interview and not a pitch.",
    channelsHeading: "Other ways to reach us",
    whatsappLabel: "WhatsApp",
    whatsappValue: "Start a chat (demo number)",
    emailLabel: "Recruitment email",
    phoneLabel: "Phone",
    faxLabel: "Fax",
    officeHeading: "Office",
    officeHoursHeading: "Office hours",
    officeHoursNote:
      "TO CONFIRM / 待確認 — public office hours are not published on the district's current website and must be supplied by the district.",
    branchesHeading: "Rail branches",
    branchesNote: "Branch addresses and opening hours are taken from the district's current website.",
    ctaHeading: "Or just write down your question?",
    ctaBody: "WhatsApp or email both work — we answer personally.",
  },

  insightPosts: [
    {
      slug: "one-hour-living-circle",
      tag: "Greater Bay Area",
      title: "What does the one-hour living circle mean for financial planning?",
      excerpt: "As cross-border travel becomes routine, how do clients' protection and legacy needs change? Notes from the front line at a rail border branch.",
      body: [
        "A central idea in the Greater Bay Area blueprint is the one-hour living circle — and nothing supports it more than the region's rail system.",
        "Two years ago we began opening branches at Hong Kong's rail border crossings — Lo Wu, Lok Ma Chau and West Kowloon high-speed rail — and became the only insurance partner on the rail network, running service centres inside the stations for mainland travellers arriving from across the Bay Area.",
        "On the front line at the crossings we see not just footfall but demand: cross-border living makes protection, retirement and legacy planning more urgent. For a financial-planning consultant this is a market that is forming and will keep expanding.",
        "The best way to understand it is not to read an article, but to stand in a branch.",
      ],
    },
    {
      slug: "three-questions-before-switching",
      tag: "Career mindset",
      title: "Three questions to ask yourself before switching to financial planning",
      excerpt: "This career is not for everyone. Rather than our pitch, start with whether you have answers to these three questions.",
      body: [
        "On its careers page the district asks one question: to choose a successful career path, how would you prioritise five indicators? Different people rank them differently, and the ranking itself shows what you value.",
        "Question one: will you take responsibility for your own return? This is a job whose return is proportional to contribution — there is no income ceiling, but income is not guaranteed and depends on the value you create for clients.",
        "Question two: will you learn before you earn? The core stage starts with a two-week AIA Premier Academy core course, then a two-week advanced asset-management planning course, then six months at the district training centre.",
        "Question three: do you enjoy building long-term relationships? Our name comes from Customer Centricity — every management decision starts from the client — and our people are titled consultants, not salespeople.",
        "If you can answer two or more of these positively, you are worth a conversation.",
      ],
    },
    {
      slug: "mdrt-is-not-the-finish-line",
      tag: "Professional growth",
      title: "MDRT is not the finish line",
      excerpt: "Awards measure one thing. What really decides how far you go is sustained learning and accumulated client trust.",
      body: [
        "The Million Dollar Round Table has run since 1927 and is internationally recognised as the highest honour for life-insurance professionals. This year, qualification in Hong Kong requires business volume of HK$533,200 or in-force premium of HK$2,132,800.",
        "As of August last year, AIA Hong Kong and Macau had 2,648 agents holding MDRT status — about one in five. Court of the Table (COT) requires three times MDRT production.",
        "Those numbers deserve respect, but they are only a scale. What really decides how far a consultant goes is sustained learning and accumulated client trust — which is why the district puts training at its core.",
        "To understand our training and promotion ladder, book a chat.",
      ],
    },
    {
      slug: "aia-premier-academy-two-weeks",
      tag: "Training",
      title: "AIA Premier Academy core course: what do two weeks give you?",
      excerpt: "From product knowledge to compliance, we break down a new consultant's first two months so you know what each step is for.",
      body: [
        "The district prepares a three-stage core programme for new colleagues: Stage 1 (two weeks) is the AIA Premier Academy core course, Stage 2 (two weeks) the advanced asset-management planning course, and Stage 3 (six months) continues at the district training centre.",
        "The two-week core course turns you from someone outside the industry into someone who knows what they are talking about: from basic product knowledge and the sales process to compliance requirements.",
        "After the core stage you can choose further-study courses (the development stage) by interest. The district also sponsors consultants to obtain several industry-recognised professional qualifications.",
        "For the actual class arrangements, we can explain in detail when we meet.",
      ],
    },
    {
      slug: "career-mindset-beyond-effort",
      tag: "Career mindset",
      title: "Career mindset: trade \"doing my best\" for \"going beyond\"",
      excerpt: "\"Doing my best\" stays inside your current ability. The district's growth mindset is to find work beyond it.",
      body: [
        "\"People improve because they do things beyond the range of their ability.\" That is a line the district's founder, Mr Chan Wing Yip, wrote in his column.",
        "He argues that \"doing my best\" means working within your ability — and if everyone only did that, nobody would progress. To break through, you have to find work beyond your current range.",
        "That mindset is one reason the district grew from 50 people to 500.",
        "When we meet, we will tell you plainly which targets are within your grasp and which need a stretch.",
      ],
      quote: "With an ideal, as long as you never stop walking, you will reach it in the end.",
    },
    {
      slug: "gba-cross-border-trend",
      tag: "Greater Bay Area",
      title: "GBA trends: cross-border planning needs are changing",
      excerpt: "Cross-border living is changing how clients think about protection, retirement and legacy.",
      body: [
        "The one-hour living circle shortens distances between Greater Bay Area cities — and brings clients' assets and family relationships closer together.",
        "We run three branches at Hong Kong's rail border crossings — West Kowloon high-speed rail, Lo Wu and Lok Ma Chau — and are the only insurance partner on the rail network, with service centres inside the stations.",
        "As cross-border travel becomes routine, clients often need more than a single product: they need protection and legacy arrangements that span both sides. That is why the district focuses on wealth management and risk management.",
        "Concrete market size and policy detail should be taken from official public sources; we do not state unverified numbers here.",
      ],
    },
    {
      slug: "success-story-50-to-500",
      tag: "Success story",
      title: "Success story: the platform behind 50 to 500",
      excerpt: "50 people in 2009, 500 consultants today. How was that story written?",
      body: [
        "Mr Chan Wing Yip, Senior District Director, founded the Portfolio Management District in 2009 — the year of the financial crisis. His answer was four words: crisis and opportunity.",
        "Going from 50 to 500 is not only about headcount; it is a replicable support system: core-stage training, two promotion ladders, substantial back-office infrastructure and its own telephone appointment team.",
        "What the district is proudest of is that whatever industry, background or experience a consultant comes from, they can use that support system to outperform their peers.",
        "If you want to be the subject of the next story, book a chat and we will start with the practical realities.",
      ],
    },
    {
      slug: "directors-quote-effort",
      tag: "Chairman's column",
      title: "Why \"doing your best\" only makes you fall behind",
      excerpt: "A manager often hears \"I'll do my best!\" — but doing your best keeps you inside your current ability.",
      body: [
        "As a manager, the thing I hear most from colleagues is: \"Mm, I'll do my best!\" Most people would be pleased by that — it shows the colleague really will try. But every time I hear it I get a little irritated. \"People improve because they do things beyond the range of their ability.\"",
        "Doing your best means working within your ability — doing as much as your ability allows, no more. If that were all, humanity would never progress and we would still be in the Stone Age.",
        "So if you want the world, including yourself, to break through, you have to find work beyond your ability — and stop only \"doing your best\" at everything.",
      ],
      authorNote:
        "Chan Wing Yip (Otto) — Senior District Director. This is the district column's original text (Cantonese); the English is a translation.",
    },
    {
      slug: "directors-quote-barbie",
      tag: "Chairman's column",
      title: "Will Barbie marry out?",
      excerpt: "One unique selling point is not enough to hold an advantage — you have to be a pioneer in every field.",
      body: [
        "We often hear brands stress how unique their product is, yet those brands tend to vanish a few years later.",
        "Toy giant Mattel's market value fell 47% to US$5bn this year, with talk it may be acquired by the fourth-largest player, Hasbro. Because it has only one unique thing — Barbie.",
        "To win in this world, trying to differentiate yourself with one thing others cannot copy is unrealistic: however unique your design, it will soon be copied, and copied better. To keep an advantage you must be a pioneer in many fields. Pioneering has a cost, because not everything you try will succeed — but the cost of moving slower than the market is greater. And if you pioneer successfully and create a market, the advantage often lasts for years. As for Barbie, it shone for thirty years before possibly being acquired.",
      ],
      authorNote: "Chan Wing Yip (Otto) — Senior District Director. District column original (Cantonese); English is a translation.",
    },
    {
      slug: "directors-quote-goalposts",
      tag: "Chairman's column",
      title: "Moving the goalposts",
      excerpt: "When the objective environment will not change, we change ourselves until we are strong enough to change it.",
      body: [
        "Imagine a football match: when I find it hard to score, may I move the goalposts forward a little, or make the frame bigger? That is what people call \"moving the goalposts\".",
        "Turns out you may not — so if I still want to score, the only way is to practise my technique: banana shots, thunder shots, step-overs. The idea sounds simple, yet at work, whenever colleagues hit a problem, the request I hear is often to change the rules — \"can we extend the deadline?\" \"Can I get special approval?\" But how is that different from asking me to move and enlarge the goalposts?",
        "I remember my mentor taught me this: \"When the objective environment will not change, we change ourselves, until we are strong enough to change the environment.\" So until you are the decision-maker, play by the rules of the game.",
      ],
      authorNote: "Chan Wing Yip (Otto) — Senior District Director. District column original (Cantonese); English is a translation.",
    },
    {
      slug: "directors-quote-mandela",
      tag: "Chairman's column",
      title: "Mandela's dream",
      excerpt: "Because you want to lift others up, in the process you lift yourself up.",
      body: [
        "Think for a moment: what was Mandela's dream? A) To become South Africa's first black president; B) To end apartheid and raise the standing of black people; C) To build a fair and strong nation where people of every race can live in peace.",
        "Most people pick C. Yet when the public discusses his greatest achievement, they do not think of (C) — they say (A) and (B).",
        "That is what a dream is: a great vision, a state pursued for a lifetime, possibly never fully realised — like environmental protection or world peace. But all such dreams share one thing: their subject is always the many. The greater the dream, the more people it can serve. You do not need to think of yourself at all, because the precondition of achieving such dreams is strengthening yourself; becoming stronger while chasing the dream is merely a by-product.",
      ],
      quote: "Because you want to lift others up, in the process you lift yourself up.",
      authorNote: "Chan Wing Yip (Otto) — Senior District Director. District column original; English is a translation.",
    },
    {
      slug: "directors-quote-income-contribution",
      tag: "Chairman's column",
      title: "A job where income is proportional to contribution",
      excerpt: "In today's money-driven world, is there a more meaningful job than insurance?",
      body: [
        "Remember the essay teachers always set: \"My ambition\". Most students wrote doctor or nurse, firefighter, police officer. But I am fairly sure nobody wrote: my ambition is to become a great financial consultant, an international banker, a stockbroker.",
        "The reason is simple: childhood ambitions are about meaningful work that carries prestige and helps people. Yet as adults, under practical pressure, many gradually forget social responsibility. Unless you join the insurance industry — then that \"ambition\" can be picked up again.",
        "Insurance work is in fact social welfare, even though an insurer is a for-profit institution. Its work is like government: collecting from the public and distributing to those in need. Fortunately an insurer is for-profit, so its welfare never stops and is sustainable. We collect premiums, and when a family suffers a loss — the moment money matters most — we provide financial assistance many times the premium, helping that family through.",
        "In today's money-driven world, is there a more meaningful job than insurance?",
      ],
      authorNote: "Chan Wing Yip (Otto) — Senior District Director. District column original (Cantonese); English is a translation.",
    },
    {
      slug: "directors-quote-sharpest-knife",
      tag: "Chairman's column",
      title: "Jack of all trades",
      excerpt: "Rather than being a jack of all trades, sharpen the knife you are best at.",
      body: [
        "People often say of someone: \"XX is impressive — involved in so many industries!\" So I started wondering whether XX's standard of living really reflected his income. Most of them turn out to be merely middle-class, barely comfortable.",
        "That makes no sense: with so many businesses, each profitable, he should be rich. Look at Li Ka-shing: he owned many businesses, yet his rise began in toys. Even without meeting him, I believe that while he was in toys he was utterly focused on that industry.",
        "In this world — especially Hong Kong — opportunities are everywhere, and every time you spend time on a new opportunity you give up time on your strengths and expertise. So ask yourself: should your time be bet on your specialty, or on various types of opportunity in fields you do not know?",
        "So if you want new ideas, generate them inside your own profession. I believe one thing: if your own profession is developing well, you should have no spare time to open up fields you do not understand. Rather than being a jack of all trades, sharpen the knife you are best at.",
      ],
      authorNote:
        "Editor's note: Chan Wing Yip (Otto) — Senior District Director, joined AIA in 2009 and founded the AIA Portfolio Management District. Within eight years the district grew from 50 to over 300 people and led AIA in several business categories. Interviewed by magazines many times and named an \"Insurance Man of the Year\" in 2016.",
    },
  ],
};

/**
 * Normalised insight-post shape.
 * The two languages declare posts inline with differing optional keys, so views
 * read them through this type instead of the inferred union.
 */
export type InsightPost = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  body: string[];
  quote?: string;
  authorNote?: string;
};

export const PAGES: Record<Lang, PagesCopy> = { zh, en };

export function pages(lang: Lang) {
  return PAGES[lang];
}

/** All insight posts for a language, normalised. */
export function listPosts(lang: Lang): InsightPost[] {
  return PAGES[lang].insightPosts as unknown as InsightPost[];
}

/** Look up one insight post by slug for a language. */
export function insightPost(lang: Lang, slug: string): InsightPost | undefined {
  return listPosts(lang).find((p) => p.slug === slug);
}
