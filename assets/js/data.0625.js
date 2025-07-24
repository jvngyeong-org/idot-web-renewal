const company = {
  "main_title1": "In Dreaming On Technology",
  "main_title2": "We are team of talented IT expert",
  "main_image": "assets/img/hero-bg.jpg",
  "intro1": "고객별로 최적화한 IT 소프트웨어 솔루션 및 관련 기술의 적시 제공 ",
  "intro2": "(주)아이디오티는 고객별로 최적화한 IT 소프트웨어 솔루션 및 관련 기술의 적시 제공을 통하여, 고객의 핵심 사업 가치를 보호하고 증대 하는데 일조함으로써,  고객과 함께 동반 성장하고자 하는 기업 이념 하에 설립한 회사입니다. ",
  "intro_image": "assets/img/about.jpg",
  "intro_items": ["아이디오티(iDot)는 금융 및 공공산업 고객을 주 대상으로, 고객의 핵심 ICT 인프라 중 DBMS, WAS, 보안(Security) 분야에 특화 하여 고객의 요구 및 필요에 최적화된 솔루션 제안 및 설계부터 관련 기술지원, 교육, 유지보수, 운영을 아우르는 고객 맞춤형 서비스를 제공합니다.",
    "남보다 ‘한발 앞선’ 고객지원 및 ‘한번 더 생각한’ 솔루션 제공을 통하여 고객에게 ‘안전하고 효율적인 ICT인프라를 제공한다’ 를 경영의 최우선 순위에 두고 신뢰와 헌신을 바탕으로 고객 과 협력사로부터 인정 받음으로써, 최상의 고객만족을 유지하여 이를 바탕으로 아이디오티(iDot)의 지속적 발전 및 성장이 가능하게끔 하는데 경영의 목표를 두고 있습니다.",
    "아이디오티(iDot)는 고객에게 최선의 솔루션을 제공하기 위하여 IBM을 비롯한 ICT 글로벌 혁신기업과 특화된 분야에 있어서 비즈니스 동반자관계를 맺고 있으며, 관련 기술자원을 획득 유지 심화시키는 데 있어서 특별한 노력을 경주하고 있습니다."
  ],
  "address" : "서울 영등포구 영신로 166 반도아이비밸리 820호",
  "email" : {"sales":"sales@idot4u.com", "tech":"tech@idot4u.com", "recruit":"recruit@idot4u.com"},
  "tel" : "02-6326-5585",
  "ceo" : "김덕영 ",
  "business_no" : "105-87-44852",
  //구글맵에서 검색후 링크 복사
  "googlemap_src" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.381039107157!2d126.90212419999999!3d37.522514199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9ee5a5d3952d%3A0xafd9da4f9b6be633!2z7ISc7Jq47Yq567OE7IucIOyYgeuTse2PrOq1rCDsmIHsi6DroZwgMTY2!5e0!3m2!1sko!2skr!4v1698921101636!5m2!1sko!2skr"
};

const histories = {
  "title":"회사연혁",
  "items":
  [
    {"2020":[{"05":"Oracle 비즈니스 파트너 "}, {"01":"NetFUNNEL 비즈니스 파트너"}]},
    {"2018":[{"07":"CISCO 비즈니스 파트너"}]},
    {"2017":[{"08":"안랩 비즈니스 파트너"}, {"03":"레드햇 비즈니스 파트너"}]},
    {"2016":[{"12":"테라데이타 (빅데이타 솔루션)  비즈니스 파트너"}]},
    {"2013":[{"10":"IBM  DB 및 WAS 구축 전문 비즈니스 파트너 (Core Partner)"}]},
    {"2012":[{"03":"벤처기업 등록"}]},
    {"2011":[{"11":"대표이사 변경 (김덕영)"}]},
    {"2010":[{"05":"법인 설립 (대표이사 : 박경원)"}]},
  ]};

const business = {
  "title": "사업내용",
  "desc" : "아이디오티는 DBMS, WAS 등의 인프라 소프트웨어 솔루션 공급 및 기술지원과 관련 유지정비 서비스를 주력 사업으로 하고 있으며,  특히 데이터 솔루션 영역에 많은 경험을 가지고 있습니다.",
  "items":
  [
    {"id":"features_s", "icon":"bx-receipt", "menu_title":"솔루션", "title":"소프트웨어 솔루션", "contents":["데이터 솔루션 / 어플리케이션 연계 솔루션 / 시스템 솔루션", "IBM, 레드햇, 오라클, 테라데이타 솔루션, NetFUNNEL, 안랩  솔수션, CISCO 비즈니스 솔루션"]},
    {"id":"features_t", "icon":"bx-cube-alt", "menu_title":"기술지원","title":"기술지원 전문서비스", "contents":["데이터 솔루션 운영에 대한 컨설팅 서비스", "데이터베이스 솔루션에 대한 성능 진단 컨설팅 및 수행", "데이터베이스 솔루션에 대한 장애 진단/분석 서비스"]},
    {"id":"features_m", "icon":"bx-images", "menu_title":"유지보수", "title":"유지보수 전문서비스", "contents":["DBMS 운영관리 프리미엄 서비스", "DB2, WAS 유지보수 기술지원 서비스"]}
  ]};

const partnership = {
  "title":"파트너쉽",
  "items":[
    {"name":"한국 IBM", "title":"IBM 소프트웨어 비즈니스 파트너", "desc":"Analytic (DB2/PDA/WEX 등), WebSphere (WAS), Rational, 보안 및 Cloud 솔루션", "image":"assets/img/partners/ibm.png"},
    {"name":"레드햇", "title":"레드햇 비즈니스 파트너", "desc":"Linux 및 관련 공개 소프트웨어 솔루션", "image":"assets/img/partners/redhat.png"},
    {"name":"Oracle", "title":"Oracle 비즈니스 파트너", "desc":"소프트웨어 / Appliance 솔루션", "image":"assets/img/partners/oracle.png"},
    {"name":"테라데이타", "title":"테라데이타 비즈니스 파트너", "desc":"빅데이타 솔루션 등", "image":"assets/img/partners/teradata.png"},
    {"name":"STC LAB", "title":"NetFUNNEL 비즈니스 파트너", "desc":"", "image":"assets/img/partners/stclab.png"},
    {"name":"안랩", "title":"안랩 파트너", "desc":"기업용 통합 보안솔루션", "image":"assets/img/partners/ahnlab.png"},
    {"name":"서비스나우", "title":"서비스나우 파트너", "desc":"서비스나우 비즈니스 파트너", "image":"assets/img/partners/ServiceNow.png"},
    {"name":"유아이패스", "title":"유아이패스 파트너", "desc":"유아이패스 비즈니스 파트너", "image":"assets/img/partners/uipath.png"},
    {"name":"디노도", "title":"디노도 파트너", "desc":"디노도 비즈니스 파트너", "image":"assets/img/partners/denodo.png"}
]};
const portfolios = {
  "title":"공급실적",
  "types":[{"type":"*","name":"전체"},
    {"type":".filter-solu","name":"솔루션"},
    {"type":".filter-tech","name":"기술지원"},
    {"type":".filter-main","name":"유지보수"}
  ],
  "items":[
    {"type":"solu", "client" : "유진투자증권", "sdate": "2021-7", "edate": "", "product":"NetFUNNEL 공급"},
    {"type":"solu", "client" : "유진투자증권", "sdate": "2021-6", "edate": "", "product":"안랩 솔루션 공급"},
    {"type":"solu", "client" : "NH 투자증권", "sdate": "2021-6", "edate": "", "product":"안랩 솔루션 공급"},
    {"type":"solu", "client" : "현대해상", "sdate": "2020-10", "edate": "", "product":"정보계 재구축 DW 솔루션 공급및 구축 (IBM IIAS Appliance, DB2)"},
    {"type":"solu", "client" : "NHN", "sdate": "2020-09", "edate": "", "product":"Cloud 구축시 DB 솔루션 공급 (IBM DB2)"},
    {"type":"solu", "client" : "미래에셋생명", "sdate": "2019-10", "edate": "", "product":"IFRS17 통합 DW 부문 솔루션 공급 및 구축 (IBM IIAS Appliance 등)"},
    {"type":"solu", "client" : "농협손해보험", "sdate": "2018-12", "edate": "", "product":"IFRS17 통합 DW 부문 솔루션 공급 및 구축 (오라클 ExaData)"},
    {"type":"solu", "client" : "농협손해보험", "sdate": "2017-06", "edate": "", "product":"DW 고도화 사업 솔루션 공급 및 구축 (IBM PDA Appliance 등)"},
    {"type":"solu", "client" : "신한은행", "sdate": "2017-01", "edate": "", "product":"빅데이터 활용분석 지원을 위한 DW시스템 고도화 사업 Total 솔루션 공급 (Teradata Appliance 등)"},
    {"type":"solu", "client" : "국세청", "sdate": "2018.06", "edate": "", "product":"근로장려금사업을 위한 DB2 (PureScale) 공급 및 구축"},
    {"type":"solu", "client" : "삼성증권", "sdate": "2016-06", "edate": "", "product":"차세대 DB2 솔루션 공급)"},
    {"type":"solu", "client" : "KERIS 및 17개 시도교육청", "sdate": "2012-12", "edate": "", "product":"나이스 교육정보 시스템 구축을 위한 Db2 및 WAS 솔루션 공급"},
    {"type":"solu", "client" : "대신증권", "sdate": "2016-12", "edate": "", "product":"DRM/DLP 솔루션,  신온라인 고객관리 구축 솔루션 및 문서중앙화 솔루션 공급 (2014, 2015, 2016)"},
    {"type":"solu", "client" : "스마트로", "sdate": "2012-03", "edate": "", "product":"DB2 pureScale 솔루션 공급"},
    {"type":"solu", "client" : "서울디자인재단", "sdate": "2014-02", "edate": "", "product":"IT 구축 사업에 Db2 &WAS 솔루션 공급"},
    {"type":"solu", "client" : "농협", "sdate": "2013-08", "edate": "", "product":"IBM DataStage & WMQ 솔루션 공급"},
    {"type":"solu", "client" : "외환은행", "sdate": "2013.12", "edate": "", "product":"DB2, WAS, MQ 솔루션 공급 및 Renewal 계약"},

    {"type":"tech", "client" : "현대해상", "sdate": "2020.10", "edate": "2021.09", "product":"정보계 재구축 사업에서 IBM Appliance  구축 및 DB Migration 서비스"},
    {"type":"tech", "client" : "NHN", "sdate": "2020.09", "edate": "현재", "product":"클라우드 서비스 구축 IIAS 솔루션 제공 서비스 (IBM DB2)"},
    {"type":"tech", "client" : "국세청", "sdate": "2018.06", "edate": "", "product":"DB2 Recovery Expert 및 Db2 고도화 작업 전문 서비스"},
    {"type":"tech", "client" : "신한은행", "sdate": "2017.06", "edate": "2017.07", "product":"고객이동경로 분석 컨설팅"},
    {"type":"tech", "client" : "농협생명", "sdate": "2017.06", "edate": "2017.08", "product":"DW어플라이언스 고도화 자문(PM) 및 구축"},
    {"type":"tech", "client" : "신한은행", "sdate": "2017.02", "edate": "2017.05", "product":"빅데이터 활용분석 지원을 위한 DW시스템 고도화 기술 자문(PM) 및 구축"},
    {"type":"tech", "client" : "교육부 18개 시도교육청 및 KERIS", "sdate": "2017.05", "edate": "2018.02", "product":"DB2 Upgrade 사업 수행"},
    {"type":"tech", "client" : "우리은행", "sdate": "2016.05", "edate": "2016.08", "product":"EDW 테스트 데이터 변환 개발 자문 및 분석 서비스"},
    {"type":"tech", "client" : "삼성화재", "sdate": "2016.01", "edate": "2016.05", "product":"통합 Db2 재구축 기술지원"},
    {"type":"tech", "client" : "KCB", "sdate": "2016.02", "edate": "2016.05", "product":"IBM PDA 구축 기술지원"},
    {"type":"tech", "client" : "국세청", "sdate": "2013.08", "edate": "2015.03", "product":"차세대 사업에서 정보 분석 업무 솔루션 (IBM PDoA) 기술 자문 및 분석, 구축"},
    {"type":"tech", "client" : "대우증권", "sdate": "2013.04", "edate": "2013.07", "product":"상품정보 통합시스템 PDA (분석 솔루션) 기술자문 및 구축"},
    {"type":"tech", "client" : "스마트로", "sdate": "2011.12", "edate": "2012.03", "product":"승인업무 및 배치업무 고도화 DB 구축 컨설팅 및 구축"},
    {"type":"tech", "client" : "스마트로", "sdate": "2014.07", "edate": "2014.10", "product":"승인업무 및 배치업무 고도화 DB 구축 컨설팅 및 구축"},

    {"type":"main", "client" : "농협 손해보험", "sdate": "2014.12", "edate": "현재", "product":"PDA(Netizza) Appliance, CDC 솔루션 Renewal 공급 및 유지보수 서비스"},
    {"type":"main", "client" : "삼성증권", "sdate": "2016.6", "edate": "현재", "product":"전사 DB2 (Core 시스템) Renewal 공급 및 유지보수 서비스"},
    {"type":"main", "client" : "미래에셋생명", "sdate": "2018.10", "edate": "현재", "product":"IFRS17 DW 용 IIAS (Db2) Renewal 공급 및 유지보수 서비스"},
    {"type":"main", "client" : "KDB생명", "sdate": "2017.1", "edate": "현재", "product":"DB2 및 WAS, WPS(Websphere Portal Server) Renewal 공급 및 유지보수 서비스"},
    {"type":"main", "client" : "대신증권", "sdate": "2018.1", "edate": "현재", "product":"IFMX Db 및 EAI 솔루션 Renewal 공급 및 유지보수 서비스"},
    {"type":"main", "client" : "미래에셋대우", "sdate": "2019.8", "edate": "2020.7", "product":"PDA(Netizza) Renewal 공급 및 유지보수 서비스"},
    {"type":"main", "client" : "한국 스마트카드", "sdate": "2015.10", "edate": "2019.6", "product":"DW Appliance (PDOA) 솔루션 Renewal 공급 및 유지보수"},
    {"type":"main", "client" : "신한은행", "sdate": "2017.06", "edate": "현재", "product":"빅데이터 활용분석 지원을 위한 DW시스템 Renewal 공급 및 유지보수 서비스"},
    {"type":"main", "client" : "농협 손해보험 ", "sdate": "2019.01", "edate": "현재", "product":"IFRS17 DW (오라클 ExaData) Appliance 솔루션 Renewal 공급 및 유지보수"},
    {"type":"main", "client" : "KERIS 및 17개 전국시도교육청", "sdate": "2013.03", "edate": "현재", "product":"교육행재정 나이스 물적기반 유지관리 사업의 DB2, WAS 유지보수 서비스)"},
    {"type":"main", "client" : "대한항공", "sdate": "2016.10", "edate": "현재", "product":"여객예약시스템 WAS, 태평양물산, 유지보수 서비스"}
]};

const recurits = {
  "title":"채용공고",
  "desc":"(주)아이디오티에서 신입 및 경력 사원을 상시모집합니다.  열정과 패기 가득한 분들의 지원을 기다리겠습니다!",
  "items":[
    {"title":"모집분야", "icon":"bi-emoji-smile", "items":["<strong>데이터베이스 설계, 튜닝</strong>", "<strong>데이터베이스 운영/관리(DBA)</strong>", "<strong>데이터베이스 관련 개발</strong>"]},
    {"title":"복리후생", "icon":"bi-award", "items":["<strong>4대 보험, 퇴직연금</strong>","<strong>식대제공, 다과제공</strong>","<strong>경조휴가</strong>"]},
    {"title":"제출서류", "icon":"bi-journal-richtext", "items":["<strong>이력서</strong>","<strong>자기소개서</strong>(신입사원에 한함)","<strong>경력소개서</strong>(경력사원에 한함)"]},
    {"title":"접수방법", "icon":"bi-clock", "items":["이메일(<strong>recruit@idot4u.com</strong>)","접수 후 개별 통보 및 면접 진행"]},
  ]
}
//-----------------------------------------------------------------------------------------------------------------------------------------
