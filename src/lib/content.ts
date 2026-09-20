import type { Lang } from "@/lib/site";

/**
 * Bilingual copy.
 *
 * The zh-Hant recruitment copy is adapted from the current live site
 * (portfoliomanagement.com.hk): the 大灣區「一小時生活圈」paragraph, the
 * 2009 founding / 50 → 500 consultants story, the rail-branch facts and the
 * 核心階段 / 發展階段 training ladder are all real. Anything invented for the
 * preview is marked PLACEHOLDER.
 */

export const CONTENT = {
  zh: {
    langName: "中文",
    otherLangName: "EN",
    nav: {
      why: "為何加入我們",
      branches: "鐵路分行",
      insights: "最新觀點",
      book: "預約",
    },
    hero: {
      eyebrow: "友邦保險 · 資產管理區域 Portfolio Management District",
      titleLine1: "加入港鐵唯一保險合作夥伴",
      titleLine2: "在大灣區「一小時生活圈」開創無限可能",
      sub: "2009 年，我們由 50 人開始；今日，團隊已發展至 500 位精英顧問。我們相信事業的高度，取決於你站在哪一個平台上——獨家鐵路口岸據點、強大後勤支援、清晰晉升階梯，讓你專注客戶與收入，走一條屬於自己的長線事業路。",
      softNote: "見面不代表要決定什麼。我們只想先聽聽你的想法。",
      ctaPrimary: "立即預約職業諮詢",
      ctaSecondary: "了解為什麼選擇我們",
      imageAlt: "資產管理區域團隊合照",
    },
    stats: [
      { value: "500+", label: "精英顧問", note: "由 2009 年的 50 人起步" },
      { value: "MDRT · TOT · COT", label: "眾多會員", note: "業界公認的專業肯定" },
      { value: "唯一", label: "全港鐵路保險合作夥伴", note: "西九龍 · 羅湖 · 落馬洲" },
      { value: "清晰", label: "晉升階梯", note: "個人銷售或營業管理，自選路線" },
    ],
    pillarsHeading: "為什麼選擇我們",
    pillarsSub: "四件我們真的做得到的事。",
    pillars: [
      {
        title: "收入無限，貢獻決定回報",
        body: "這裡沒有薪酬上限。你的回報，由你為客戶創造的價值決定——「多勞多得」對我們來說不是口號，而是每一次服務累積出來的結果。",
      },
      {
        title: "大灣區先機，獨家鐵路口岸優勢",
        body: "我們是全港鐵路唯一的保險合作夥伴，於西九高鐵站、羅湖及落馬洲口岸設有分行，讓你在每日往來灣區的人流之中，接觸其他人接觸不到的客戶。",
      },
      {
        title: "強大後勤，專注客戶與收入",
        body: "行政、培訓、數碼工具、產品與理賠支援，由區域後勤基建團隊處理。你不需要一個人做完全部事情——時間應該放回客戶身上。",
      },
      {
        title: "清晰階梯 + 領導力培養",
        body: "你可以選個人銷售晉升階梯，專注發展個人業務；也可以選營業管理階梯，學習帶團隊。配合友邦精英學院核心課程與區域培訓中心，一步一步培養你的領導力。",
      },
    ],
    gba: {
      eyebrow: "大灣區發展",
      title: "成為大灣區財富策劃的先鋒",
      paras: [
        "大灣區發展藍圖其中一個重點，是「一小時生活圈」——當中最依賴的，就是區內的鐵路系統。",
        "因此我們兩年前開始部署，在全港的鐵路口岸設置分行：羅湖口岸、落馬洲口岸，以及西九高鐵站口岸，並成為全港鐵路唯一的保險合作夥伴，於站內設置營運中心，為灣區抵港的旅客提供專業的財務策劃服務。",
        "對顧問來說，這代表一個罕有的位置：站上人流最集中的口岸，服務一個正在快速融合的市場。",
      ],
      branchesHeading: "三間鐵路分行",
    },
    testimonials: {
      heading: "顧問心聲",
      // PLACEHOLDER — the brief's two example quotes were not available in this
      // session; these four cards are stand-ins. Prisken replaces them with real,
      // cleared advisor quotes (AIA compliance requires clearance before the
      // real domain goes live).
      note: "示範內容（PLACEHOLDER）：以下引言為暫用示範，將由真實顧問分享取代。",
      items: [
        {
          quote:
            "入行前我做酒店，最擔心的是「無底薪」。區域的後勤同事幫我把行政、保單同理賠流程全部接住，我第一年就可以專心見客，唔需要邊做邊摸索。",
          name: "PLACEHOLDER 顧問 A",
          detail: "2023 年入職 · 前酒店業",
        },
        {
          quote:
            "我喜歡這裡沒有「一定」的路。你可以選擇純做銷售，也可以選擇帶團隊；轉路線的時候，區域會給你培訓，不會讓你自生自滅。",
          name: "PLACEHOLDER 顧問 B",
          detail: "2019 年入職 · MDRT 會員",
        },
        {
          quote:
            "我最初只是想找一份「時間彈性」的工作。做落才發現，這裡真正給我的是專業——客戶問的問題，我今日答得到，是因為背後有人在教我。",
          name: "PLACEHOLDER 顧問 C",
          detail: "2021 年入職 · 前教育界",
        },
        {
          quote:
            "口岸分行係一個好特別嘅平台。每日見到嘅客人都唔同，你唔會覺得自己困在一個寫字樓裡面。",
          name: "PLACEHOLDER 顧問 D",
          detail: "2022 年入職 · 口岸分行",
        },
      ],
    },
    insights: {
      heading: "最新觀點",
      sub: "我們對行業、培訓與大灣區的想法。",
      readMore: "即將推出",
      items: [
        {
          tag: "大灣區",
          title: "「一小時生活圈」對財務策劃代表什麼？",
          excerpt: "當跨境往來變成日常，客戶對保障與資產傳承的需求會怎樣改變？我們從鐵路口岸的第一線觀察說起。",
        },
        {
          tag: "事業發展",
          title: "轉行做財務策劃顧問前，先問自己三條問題",
          excerpt: "不是每個人都適合這一行。與其聽我們的介紹，不如先看看這三條問題你有沒有答案。",
        },
        {
          tag: "專業成長",
          title: "MDRT 不是終點：談顧問的長線專業成長",
          excerpt: "業績獎項只是其中一個刻度。真正決定你走得多遠的，是持續學習與客戶信任的累積。",
        },
        {
          tag: "培訓",
          title: "友邦精英學院核心課程：兩星期學到什麼？",
          excerpt: "由產品知識到合規要求，我們把新人首兩個月的訓練拆開，讓你清楚知道每一步在做什麼。",
        },
      ],
    },
    bookingCta: {
      heading: "想先聊聊，再決定？",
      body: "一個 30 分鐘、沒有壓力的對話。你可以問任何問題——行業實況、收入結構、培訓安排，甚至「我適唔適合」。決定權永遠在你手上。",
      cta: "立即預約職業諮詢",
      alt: "或直接 WhatsApp 我們",
      points: ["30 分鐘", "沒有推銷壓力", "資料保密處理"],
    },
    why: {
      heading: "為什麼選擇資產管理區域",
      intro: "這一頁是 Phase 1 的簡短版本，完整內容會在下一階段補上。",
      body: [
        "我們是友邦保險旗下的資產管理區域，2009 年由陳永業先生創立，由 50 人的團隊發展至今日 500 位精英顧問。",
        "我們的名字來自一個管理哲學：Customer Centricity——所有管理決定，都以客戶為出發點。所以我們的同事叫做「顧問」，而不是「銷售」。",
        "如果你重視專業、長線發展與團隊支援，而唔想被硬推銷文化包圍，這裡值得你先了解。",
      ],
      cta: "立即預約職業諮詢",
    },
    book: {
      heading: "預約職業諮詢",
      intro: "填寫以下資料，我們會盡快跟你確認時間。這是一個雙向的了解，不是面試，也不是推銷。",
      fields: {
        name: "姓名",
        namePh: "你的姓名",
        phone: "聯絡電話",
        phonePh: "例：9123 4567",
        email: "電郵",
        emailPh: "you@example.com",
        time: "方便的時段",
        timePh: "請選擇一個時段",
        times: ["平日 10:00 – 13:00", "平日 14:00 – 18:00", "平日 19:00 – 21:00", "週末 11:00 – 17:00"],
        submit: "我有興趣加入",
      },
      errors: {
        name: "請填寫你的姓名。",
        phone: "請填寫有效的電話號碼（8 位數字）。",
        email: "請填寫有效的電郵地址。",
        time: "請選擇一個方便的時段。",
      },
      success: {
        title: "收到你的預約",
        body: "以下是我們收到的資料。這是預覽版本的示範表單，資料並沒有傳送或儲存到任何地方。",
        refLabel: "參考編號",
        again: "再填一次",
        note: "正式上線時，這裡會接上預約系統並發出確認訊息。",
      },
    },
    footer: {
      branchesHeading: "鐵路分行",
      officeHeading: "辦公室",
      joinHeading: "加入我們",
      quickLinks: "快速連結",
      disclaimer:
        "本網站為招聘用途的預覽版本。收入及事業發展取決於個人表現，並非保證。所有保險及理財服務由持牌中介人提供。",
      rights: "資產管理區域 Portfolio Management District · 友邦保險（國際）有限公司",
      previewNote: "預覽版本（Preview）— 部分內容為示範資料。",
      wa: "WhatsApp 查詢",
    },
  },

  en: {
    langName: "English",
    otherLangName: "中文",
    nav: {
      why: "Why join us",
      branches: "Rail branches",
      insights: "Insights",
      book: "Book",
    },
    hero: {
      eyebrow: "AIA · Portfolio Management District",
      titleLine1: "Join the MTR network's only insurance partner",
      titleLine2: "Build something bigger in the Greater Bay Area's one-hour living circle",
      sub: "We started in 2009 with 50 people. Today the district is 500 consultants strong. Where your career goes depends a lot on which platform you stand on — exclusive rail-border branches, serious back-office support and a clear promotion ladder, so you can focus on clients and income.",
      softNote: "Meeting us commits you to nothing. We would just like to hear what you are thinking.",
      ctaPrimary: "Book a career chat",
      ctaSecondary: "Why choose us",
      imageAlt: "The Portfolio Management District team",
    },
    stats: [
      { value: "500+", label: "Consultants", note: "Up from 50 people in 2009" },
      { value: "MDRT · TOT · COT", label: "Members", note: "Industry-recognised recognition" },
      { value: "Only one", label: "Insurance partner on HK rail", note: "West Kowloon · Lo Wu · Lok Ma Chau" },
      { value: "Two tracks", label: "Clear promotion ladder", note: "Personal sales or business management" },
    ],
    pillarsHeading: "Why choose us",
    pillarsSub: "Four things we can actually deliver.",
    pillars: [
      {
        title: "Income has no ceiling — contribution decides the return",
        body: "There is no cap on what you can earn here. Your return follows the value you create for clients; for us that is not a slogan, it is what every engagement adds up to.",
      },
      {
        title: "Greater Bay Area access through exclusive rail branches",
        body: "We are the only insurance partner across Hong Kong's rail network, with branches at West Kowloon (high-speed rail), Lo Wu and Lok Ma Chau — putting you in front of cross-border traffic others never reach.",
      },
      {
        title: "Strong back office, so you can focus on clients",
        body: "Administration, training, digital tools, product and claims support are handled by the district's back-office team. You are not expected to do all of it alone.",
      },
      {
        title: "A clear ladder plus leadership development",
        body: "Choose the personal-sales track and build your own book, or the management track and learn to lead a team — supported by AIA Premier Academy core courses and the district training centre.",
      },
    ],
    gba: {
      eyebrow: "Greater Bay Area",
      title: "Become a wealth-planning pioneer in the Greater Bay Area",
      paras: [
        "A central idea in the Greater Bay Area blueprint is the one-hour living circle — and nothing supports it more than the region's rail system.",
        "So two years ago we started positioning branches at Hong Kong's rail border crossings: Lo Wu, Lok Ma Chau and West Kowloon high-speed rail. We became the only insurance partner on the rail network, running service centres inside the stations for travellers arriving from across the Bay Area.",
        "For a consultant that means a rare position: standing at the busiest crossing points, serving a market that is integrating fast.",
      ],
      branchesHeading: "Our three rail branches",
    },
    testimonials: {
      heading: "What consultants say",
      // PLACEHOLDER — stand-in quotes. Replace with real, compliance-cleared
      // advisor testimonials before the real domain is used.
      note: "PLACEHOLDER content — these quotes are placeholders and will be replaced with real consultant stories.",
      items: [
        {
          quote:
            "I came from a hotel background and my biggest worry was having no base salary. The district back office took the admin, policy and claims work off my plate, so in my first year I could just focus on meeting clients.",
          name: "PLACEHOLDER Consultant A",
          detail: "Joined 2023 · ex-hospitality",
        },
        {
          quote:
            "What I like is that there is no single prescribed path. You can stay in sales or move into leading a team, and the district trains you through the switch instead of leaving you on your own.",
          name: "PLACEHOLDER Consultant B",
          detail: "Joined 2019 · MDRT member",
        },
        {
          quote:
            "At first I was only looking for flexible hours. What I actually got was professional depth — I can answer my clients' questions today because someone taught me how.",
          name: "PLACEHOLDER Consultant C",
          detail: "Joined 2021 · ex-education",
        },
        {
          quote:
            "A border branch is a very different platform. The clients are different every day, and you never feel stuck in one office.",
          name: "PLACEHOLDER Consultant D",
          detail: "Joined 2022 · border branch",
        },
      ],
    },
    insights: {
      heading: "Latest insights",
      sub: "Our thinking on the industry, training and the Greater Bay Area.",
      readMore: "Coming soon",
      items: [
        {
          tag: "Greater Bay Area",
          title: "What does the one-hour living circle mean for financial planning?",
          excerpt: "As cross-border travel becomes routine, how do clients' protection and legacy needs change? Notes from the front line at a rail border branch.",
        },
        {
          tag: "Career",
          title: "Three questions to ask yourself before switching to financial planning",
          excerpt: "This career is not for everyone. Rather than our pitch, start with whether you have answers to these three questions.",
        },
        {
          tag: "Professional growth",
          title: "MDRT is not the finish line",
          excerpt: "Awards measure one thing. What really decides how far you go is sustained learning and accumulated client trust.",
        },
        {
          tag: "Training",
          title: "AIA Premier Academy core course: what do two weeks actually give you?",
          excerpt: "From product knowledge to compliance, we break down a new consultant's first two months so you know what each step is for.",
        },
      ],
    },
    bookingCta: {
      heading: "Want to talk it through first?",
      body: "A 30-minute conversation with no pressure. Ask anything — the reality of the job, how income works, training, or simply whether this suits you. The decision stays with you.",
      cta: "Book a career chat",
      alt: "Or message us on WhatsApp",
      points: ["30 minutes", "No sales pressure", "Handled confidentially"],
    },
    why: {
      heading: "Why the Portfolio Management District",
      intro: "This page is the short Phase 1 version; the full page comes in a later phase.",
      body: [
        "We are the Portfolio Management District of AIA, founded in 2009 by Mr Chan Wing Yip, grown from 50 people to 500 consultants today.",
        "Our name comes from a management philosophy — Customer Centricity. Every management decision starts from the client. That is why our people are called consultants, not salespeople.",
        "If you value professionalism, long-term growth and real team support — and you would rather avoid a hard-sell culture — this is worth a look.",
      ],
      cta: "Book a career chat",
    },
    book: {
      heading: "Book a career chat",
      intro: "Leave your details and we will confirm a time. It is a two-way conversation — not an interview and not a pitch.",
      fields: {
        name: "Name",
        namePh: "Your name",
        phone: "Phone",
        phonePh: "e.g. 9123 4567",
        email: "Email",
        emailPh: "you@example.com",
        time: "Preferred time",
        timePh: "Choose a slot",
        times: ["Weekday 10:00 – 13:00", "Weekday 14:00 – 18:00", "Weekday 19:00 – 21:00", "Weekend 11:00 – 17:00"],
        submit: "I'm interested",
      },
      errors: {
        name: "Please enter your name.",
        phone: "Please enter a valid phone number (8 digits).",
        email: "Please enter a valid email address.",
        time: "Please choose a time slot.",
      },
      success: {
        title: "Request received",
        body: "Here is what we received. This is a preview-only demo form — nothing was sent or stored anywhere.",
        refLabel: "Reference",
        again: "Submit another",
        note: "On the live site this will connect to the booking system and send a confirmation.",
      },
    },
    footer: {
      branchesHeading: "Rail branches",
      officeHeading: "Office",
      joinHeading: "Join us",
      quickLinks: "Quick links",
      disclaimer:
        "Preview version of a recruitment website. Income and career progression depend on individual performance and are not guaranteed. Insurance and financial services are provided by licensed intermediaries.",
      rights: "Portfolio Management District · AIA International Limited",
      previewNote: "Preview build — some content is placeholder material.",
      wa: "WhatsApp us",
    },
  },
} as const;

export function content(lang: Lang) {
  return CONTENT[lang];
}
