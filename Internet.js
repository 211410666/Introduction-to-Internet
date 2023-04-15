const data = [
    {
        id: 1,
        title: "Internet 的前身是",
        option: ["ANET", "ARPANET", "NET", "HINET"],
        answer: "B"
    },
    {
        id: 2,
        title: "台灣三個大的網際網路服務公司,不包括:",
        option: ["台灣學術網路(TANet)", "中華電信(Hinet)", "種子網路(SeedNet)", "台灣索尼網路(SoNET)"],
        answer: "D"
    },
    {
        id: 3,
        title: "使用瀏覽器來上到 WWW,你可以查看",
        option: ["政府公告", "最新發行之音樂", "上映之電影", "以上皆是"],
        answer: "D"
    },
    {
        id: 4,
        title: "在WWW理可使用什麼方式和朋友哈拉聊天",
        option: ["即時通訊", "E-mail", "部落格", "隨選視訊"],
        answer: "A"
    },
    {
        id: 5,
        title: "企業與企業間透過網路進行溝通與交易,是?",
        option: ["B2B", "B2C", "C2B", "C2C"],
        answer: "A"
    },
    {
        id: 6,
        title: "消費者與消費者之間透過仲介網站進行交易,是?",
        option: ["B2B", "B2C", "C2B", "C2C"],
        answer: "D"
    },
    {
        id: 7,
        title: "透過網路進行各種多媒體式的教學活動,是?",
        option: ["瀏覽網路資訊", "電子商務", "遠距教學", "傳送訊息與郵件"],
        answer: "C"
    },
    {
        id: 8,
        title: "一種常被更新,便於編寫的日記個人網站?",
        option: ["部落格", "電子商務", "遠距教學", "傳送訊息與郵件"],
        answer: "A"
    },
    {
        id: 9,
        title: "蘋果電腦因搭配販售iPod和iTunes 服務而支配了整個",
        option: ["線上遊戲市場", "線上音樂市場", "線上電影", "隨選視訊"],
        answer: "B"
    },
    {
        id: 10,
        title: "全球化企業經營可透過甚麼與遠方的客戶或企業分公司進行有效率的會議,是",
        option: ["即時通訊", "E-mail", "視訊會議", "隨選視訊"],
        answer: "C",
    },
    {
        id: 11,
        title: "透過網路進行各種多媒體式的教學活動,是",
        option: ["遠距醫療", "電子商務", "遠距教學", "隨選視訊"],
        answer: "C",
    },
    {
        id: 12,
        title: "在WWW裡你可以輕易地找到一些地圖網站,是",
        option: ["線上地圖", "電子商務", "遠距教學", "隨選視訊"],
        answer: "A",
    },
    {
        id: 13,
        title: "一向是敢秀,愛秀的網友最重要的表現管道,你可找到很多有趣的分享影音,是",
        option: ["線上地圖", "電子商務", "線上影音分享", "隨選視訊"],
        answer: "C",
    },
    {
        id: 14,
        title: "那一個不是網路的未來發展?",
        option: ["網路寬頻化", "網路無線化", "家庭網路化", "娛樂化"],
        answer: "D",
    },
    {
        id: 15,
        title: "何種服務提供了核心計算資源和網路基礎建設的服務?",
        option: ["SaaS", "PaaS", "IaaS", "以上皆是"],
        answer: "C",
    },
    {
        id: 16,
        title: "那一個作業系統適用於 Server(伺服器)?",
        option: ["Windows 3.1", "Win95", "WinXP", "Linux"],
        answer: "D",
    },
    {
        id: 17,
        title: "那一個伺服器用來發送電子郵件",
        option: ["檔案伺服器", "印表機伺服器", "資料庫伺服器", "電子郵件伺服器"],
        answer: "D",
    },
    {
        id: 18,
        title: " 「主從式」網路架構是指",
        option: ["(A)Client/Server 網路架構", "(B) Peer to Peer 網路架構", "(C) Hybrid 網路架構", "(D)以上皆非"],
        answer: "A"
    },
    {
        id: 19,
        title: "網路中的每部電腦都可以扮演 Client 與 Server 的角色來「相互」分享彼此的資源,是",
        option: ["(A)Client/Server 網路架構", "(B) Peer to Peer 網路架構", "(C) Hybrid 網路架構", "(D)以上皆非"],
        answer: "B"
    },
    {
        id: 20,
        title: "跨縣市都市、跨國家、甚至跨洲際之網路,是",
        option: ["(A)區域網路", "(B)都會網路", "(C)廣域網路", "(D)以上皆非"],
        answer: "C"
    },
    {
        id: 21,
        title: "無線電視台傳送電視節目至電視機,其傳輸的模式,是",
        option: ["(A)單工", "(B)半雙工", "(C)全雙工", "(D)以上皆非"],
        answer: "A"
    },
    {
        id: 22,
        title: "一個電腦(節點)對其他全部電腦(節點)的傳輸形式是",
        option: ["(A)單工", "(B)半雙工", "(C)點對點式傳輸", "(D)廣播式傳輸"],
        answer: "D"
    },
    {
        id: 23,
        title: "數位訊號所代表的每個0或1,是",
        option: ["(A)位元", "(B)位元組", "(C)位元率", "(D)頻寬"],
        answer: "A"
    },
    {
        id: 24,
        title: "數位訊號在網路上傳輸的最高位元率,是",
        option: ["(A)位元", "(B)位元組", "(C)位元率", "(D)頻寬"],
        answer: "D"
    },
    {
        id: 25,
        title: "雲端運算何者是經由網際網提供遠端取用近乎無限電腦運算資源的服務模式與技術組成?",
        option: ["(A)伺服器", "(B)雲端伺服器", "(C)用戶端", "(D)精簡型用戶端"],
        answer: "B"
    },
    {
        id: 26,
        title: "雲端運算何者是不需追著規格跑,製造業者就使用者實際需求,提供簡單且成本低的平台?",
        option: ["A. 伺服器", "B. 雲端伺服器", "C. 用戶端", "D. 精簡型用戶端"],
        answer: "D"
    },
    {
        id: 27,
        title: "網路上使用TCP/IP的每一個電腦或網路設備,具備有一個IP位址,就稱為",
        option: ["A. 網路節點", "B. 主機", "C. 路由器", "D. 伺服器"],
        answer: "A"
    },
    {
        id: 28,
        title: "何者是一種網路設備,具有路由的功能?",
        option: ["A. 網路節點", "B. 主機", "C. 路由器", "D. 伺服器"],
        answer: "C"
    },
    {
        id: 29,
        title: "區域網路因為傳送距離短,使用",
        option: ["A. 基頻傳輸", "B. 寬頻傳輸", "C. 衛星傳輸", "D. 無線傳輸"],
        answer: "A"
    },
    {
        id: 30,
        title: "網路的共同語言,是",
        option: ["A. 協定", "B. 程式語言", "C. 數據機", "D. 集線器"],
        answer: "A"
    },
    {
        id: 31,
        title: "OSI 模型的那一層負責資料的加密與解密?",
        option: ["A. 應用層", "B. 表現層", "C. 會議層", "D. 傳輸層"],
        answer: "B"
    },
    {
        id: 32,
        title: "網際網路上的IP協定位於OSI模型的第幾層?",
        option: ["A. 第一層", "B. 第二層", "C. 第三層", "D. 那一層都可以"],
        answer: "C"
    },
    {
        id: 33,
        title: "OSI 網路層最主要的工作是?",
        option: ["A. 定址與路由", "B. 提供資料流介面", "C. 資料封包保證送達", "D. 定義收送的電壓大小"],
        answer: "A"
    },
    {
        id: 34,
        title: "那一個不是OSI網路第一層實體層的特色?",
        option: ["定義光電訊號的規格", "定義連接器的規格", "定義網路封包的大小", "定義傳輸速度的高低"],
        answer: "C"
    },
    {
        id: 35,
        title: "Internet 是採用下列何種通訊協定?",
        option: ["TCP/IP", "ISO的 OSI", "X.25", "HDLC"],
        answer: "A"
    },
    {
        id: 36,
        title: "若將TCP/IP比對至OSI 參考模型,則TCP 與UDP是屬於那一層的規範?",
        option: ["應用層", "表現層", "會議層", "傳輸層"],
        answer: "D"
    },
    {
        id: 37,
        title: "MAC位址的解析是屬於OSI 模型中哪一層的規範?",
        option: ["傳輸層", "網路層", "資料連結層", "實體層"],
        answer: "B"
    },
    {
        id: 38,
        title: "OSI 那一層作資料傳輸工作",
        option: ["第一層", "第二層", "第三層", "第四層"],
        answer: "D"
    },
    {
        id: 39,
        title: "OSI 參考模型中的第二層,是",
        option: ["網路層", "資料鏈路層", "傳輸層", "實體層"],
        answer: "B"
    },
    {
        id: 40,
        title: "下列何者不是由OSI 參考模型的應用層所負責?",
        option: ["檔案傳輸", "協調資料交換格式", "目錄服務", "密碼檢查"],
        answer: "B"
    },
    {
        id: 41,
        title: "在OSI七層網路架構中,負責決定資料封包(packets)要送達目的端,應行走的路徑(路由),是那一層?",
        option: ["應用層(Application layer)", "傳輸層(Transport layer)", "網路層(Network layer)", "實體層(Physical layer)"],
        answer: "C"
    },
    {
        id: 42,
        title: "在OSI七層網路架構中,WWW是那一層所提供的服務?",
        option: ["應用層(Application layer)", "網路層(Network layer)", "連結(Link layer)", "傳輸層(Transport layer)"],
        answer: "A"
    },
    {
        id: 43,
        title: "下列何者是由OSI參考模型的傳輸層所負責?",
        option: ["流量控制", "建立通訊設備之間的連線", "加密/解密", "錯誤修正"],
        answer: "D"
    },
    {
        id: 44,
        title: "「國際標準組織」定義了通訊協定層的標準,這個標準通訊協定模型的名稱為:",
        option: ["OSI", "FDDI", "DNA", "SNA"],
        answer: "A"
    },
    {
        id: 45,
        title: "ISO所制定之開放系統互連(OSI)網路協定有幾層",
        option: ["4", "5", "6", "7"],
        answer: "D"
    },
    {
        id: 46,
        title: "由國際標準組織(ISO)所訂的OSI通訊協定中,路由器是屬於那一層的功能?",
        option: ["網路層", "傳輸層", "交談", "應用層"],
        answer: "A"
    },
    {
        id: 47,
        title: "OSI參考模型的最高層是",
        option: ["表示層", "網路層", "應用層", "會議層"],
        answer: "C"
    },
    {
        id: 48,
        title: "欲連上Internet 網際網路,在windows 網路協定中需有何種通訊協定?",
        option: ["IPX/SPX", "NetBuei", "TCP/IP", "Getway"],
        answer: "C"
    },
    {
        id: 49,
        title: "網際網路所使用的主要通訊協定是",
        option: ["網路上的芳鄰", "Novell IPX", "NETBEUI", "TCP/IP"],
        answer: "D"
    },
    {
        id: 50,
        title: "TCP/IP 模型,分成幾層",
        option: ["4", "5", "6", "7"],
        answer: "A"
    },
    {
        id: 51,
        title: "TCP/IP 模型,其中的傳輸層是第幾層?",
        option: ["1", "2", "3", "4"],
        answer: "C"
    },
    {
        id: 52,
        title: "TCP/IP 模型,其中哪一層的任務主要提供各種應用程式協定",
        option: ["鏈結層", "網路層", "傳輸層", "應用層"],
        answer: "D"
    },
    {
        id: 53,
        title: "TCP/IP 模型的應用層相當於 OSI模型的",
        option: ["第1、2、3三層", "第2、3、4 三層", "第4、5、6三層", "第5、6、7 三層"],
        answer: "D"
    },
    {
        id: 54,
        title: "TCP/IP 模型的鏈結層相當於OSI模型的",
        option: ["第1、2層", "第2、3層", "第4、5三層", "第5、6層"],
        answer: "A"
    },
    {
        id: 55,
        title: "TCP/IP的標準大部份都是以那一類技術報告的形式公開",
        option: ["TCP", "RFC", "UDP", "DOD"],
        answer: "B"
    },
    {
        id: 56,
        title: "RFC 文件可至那裏下載",
        option: ["http://tw.yahoo.com", "http://www.microsoft.com", "http://www.ietf.org/rfc", "http://www.ebay.com"],
        answer: "C"
    },
    {
        id: 57,
        title: "「網路卡驅動程式+網路卡+網路線」相對於DoD模型的",
        option: ["鏈結層", "網路層", "傳輸層", "應用層"],
        answer: "A"
    },
    {
        id: 58,
        title: "作業系統內建的TCP/IP 協定相對於DoD模型的",
        option: ["網路層/鏈結層", "傳輸層/網路層", "應用層/傳輸層", "應用層/鏈結層"],
        answer: "B"
    },
    {
        id: 59,
        title: "瀏覽器程式會使用HTTP協定與 WWW伺服器溝通相對於DoD模型的",
        option: ["鏈結層", "網路層", "傳輸層", "應用層"],
        answer: "D"
    },
    {
        id: 60,
        title: "哪一種用來聯結網路的裝置,提供訊號通道",
        option: ["電腦", "協定", "傳輸媒介", "網路設備"],
        answer: "C"
    },
    {
        id: 61,
        title: "哪一種有集線、中繼和路由傳遞...等功能,正確的將資料傳送端傳遞到另一端接收到",
        option: ["電腦", "協定", "傳輸媒介", "網路設備"],
        answer: "D"
    },
    {
        id: 62,
        title: "集線器是對應 OSI模型的第幾層設備",
        option: ["第一層", "第二層", "第三層", "第四層"],
        answer: "A"
    },
    {
        id: 63,
        title: "試問 ISO OSI七層模型中,負責網路位址的定址是位於哪一層",
        option: ["應用層", "表現層", "傳輸層", "網路層"],
        answer: "D"
    },
    {
        id: 64,
        title: "試問 ISO OSI七層模型中,哪一層負責資料的加/解密工作",
        option: ["應用層", "表現層", "會議層", "傳輸層"],
        answer: "B"
    },
    {
        id: 65,
        title: "試問 ISO OSI七層模型中,哪一層負責資料的訊號的轉換工作",
        option: ["應用層", "表現層", "會議層", "實體層"],
        answer: "D"
    },
    {
        id: 66,
        title: "試問 TCP/IP(或稱DoD模型)協定組中,我們常用的瀏覽器是屬於哪一層",
        option: ["應用層", "傳輸層", "網際網路層", "資料鏈結層"],
        answer: "A"
    },
    {
        id: 67,
        title: "以下哪一種協定屬於應用層",
        option: ["SMTP", "Ethernet", "TCP", "IP"],
        answer: "A"
    },
    {
        id: 68,
        title: "試問 MAC Address 的位址長度為",
        option: ["32", "48", "64", "128"],
        answer: "B"
    },
    {
        id: 69,
        title: "試問 MAC Address 位址的前三個位元組代表",
        option: ["流水號", "網路卡製造商代號", "任意給定的號碼", "每張網路卡都不同"],
        answer: "B"
    },
    {
        id: 70,
        title: "以下哪一項不是網路層所負責的工作",
        option: ["定址", "路由", "選擇最佳路徑", "編碼"],
        answer: "D"
    },
    {
        id: 71,
        title: "在連線通訊的雙方,可以透過哪一層來達到流量控制",
        option: ["實體層", "資料鏈結層", "網路層", "傳輸層"],
        answer: "D"
    },
    {
        id: 72,
        title: "以下哪一個設備可以支援至ISO OSI七層模型的網路層",
        option: ["集線器", "交換器", "路由器", "橋接器"],
        answer: "C"
    },
    {
        id: 73,
        title: "目前電腦通訊傳輸媒介的傳輸速度以何種介質最快?",
        option: ["雙絞線", "光纖", "電話線", "同軸電纜"],
        answer: "B"
    },
    {
        id: 74,
        title: "下列那種傳輸介質, 中間不經過增強設備,可以傳輸的距離最長?",
        option: ["電纜線", "雙絞線", "光纖", "電話線"],
        answer: "C"
    },
    {
        id: 75,
        title: "下列那一種線材抗電磁輻射干擾(EMI)雜訊最好?",
        option: ["細同軸電纜", "粗同軸電纜", "雙絞線", "光纖電纜"],
        answer: "D"
    },
    {
        id: 76,
        title: "SERVER 上插了 Gigabit 的網路卡,要發揮網卡的效能, 下列那項要求是不必要的?",
        option: ["標準的CAT5e 或CAT6的連接線", "有GB PORT 的 SW HUB", "標準的機種", "最新的網路卡驅動程式"],
        answer: "C"
    },
    {
        id: 77,
        title: "依照TIA/EIA-568UTP纜線標準,8條芯線的排列方式有幾種?",
        option: ["1種", "2種", "3種", "4種"],
        answer: "B"
    },
    {
        id: 78,
        title: "下列有關光纖的敘述,何者有誤?",
        option: ["只適於傳送數位化的信號", "可使用的頻寬,比同軸電纜高出許多", "由玻璃纖維所組成,不受電磁干擾", "傳輸速率高,體積細小,架設方便"],
        answer: "D"
    },
    {
        id: 79,
        title: "個人電腦透過電話線通訊時,須再配合下列那一種設備?",
        option: ["數據機(Modem)", "多工機(multiplexer)", "前端機(front-end)", "集訊機(concentrator)"],
        answer: "A"
    },
    {
        id: 80,
        title: "下列何者為資料傳輸速度的單位?",
        option: ["BPI", "CPI", "BPS", "CPS"],
        answer: "C"
    },
    {
        id: 81,
        title: "通用 10BaseT 或100BaseTX 的乙太網路就是採用何種拓撲?",
        option: ["匯流排", "星狀", "環狀", "樹狀"],
        answer: "B"
    },
    {
        id: 82,
        title: "IBM Token-Ring 採用何種拓樸?",
        option: ["匯流排", "星狀", "環狀", "樹狀"],
        answer: "C"
    },
    {
        id: 83,
        title: "網路卡以介面卡分類,常見的目前的個人電腦的主流",
        option: ["ISA BUS 介面卡", "PCI(Peripheral Component Interconnect)介面", "USB bus", "PCMCIA"],
        answer: "B"
    },
    {
        id: 84,
        title: "記號環網路可以透過哪種設備實體接接成形的拓撲?",
        option: ["集線器", "交換器", "路由器", "多站存取單元(MAU)"],
        answer: "D"
    },
    {
        id: 85,
        title: "乙太網路的標準是?",
        option: ["IEEE802.3", "IEEE 802.4", "IEEE 802.5", "IEEE802.6"],
        answer: "A"
    },
    {
        id: 86,
        title: "乙太網路採用的方法是",
        option: ["CSMA/CA", "CSMA/CD", "CSMC/CA", "CSMA/CD"],
        answer: "B"
    },
    {
        id: 87,
        title: "各種規格的乙太網路以A-B-C三個值來描述其架構,分別代表",
        option: ["傳輸速度,訊號傳輸方式,傳輸媒介類型", "訊號傳輸方式,傳輸速度,傳輸媒介類型", "訊號傳輸方式,傳輸媒介類型,傳輸速度", "傳輸媒介類型,訊號傳輸方式,傳輸速度"],
        answer: "A"
    },
    {
        id: 88,
        title: "乙太網路的規格已進步到",
        option: ["10Mbps", "100Mbps", "1000Mbps", "10000Mbps"],
        answer: "C"
    },
    {
        id: 89,
        title: "10Mbps 的乙太網路,是以那一種標準網路協定為基礎的?",
        option: ["IEEE 802.3", "IEEE 802.3u", "IEEE 802.3z", "IEEE 802.3ae"],
        answer: "A"
    },
    {
        id: 90,
        title: "100Mbps 的快速乙太網路,是以那一種標準網路協定為基礎的?",
        option: ["IEEE 802.3", "IEEE 802.3u", "IEEE 802.3z", "IEEE 802.3ae"],
        answer: "B"
    },
    {
        id: 91,
        title: "1000Mbps 的 Gigabit 乙太網路,是以那一種標準網路協定為基礎的?",
        option: ["IEEE 802.3", "IEEE 802.3u", "IEEE 802.3z", "IEEE 802.3ae"],
        answer: "C"
    },
    {
        id: 92,
        title: "10000Mbps 的 Gigabit 乙太網路,是以那一種標準網路協定為基礎的?",
        option: ["IEEE 802.3", "IEEE 802.3u", "IEEE 802.3z", "IEEE 802.3ae"],
        answer: "D"
    },
    {
        id: 93,
        title: "早期的 10Base5 是用何種拓樸?",
        option: ["匯流排", "星狀", "環狀", "網狀"],
        answer: "A"
    },
    {
        id: 94,
        title: "現在的乙太網路都會使用集線器,是用何種拓樸?",
        option: ["匯流排", "星狀", "環狀", "網狀"],
        answer: "B"
    },
    {
        id: 95,
        title: "下列何者不是100BaseTX 與 10BaseT 的差異?",
        option: ["頻寬", "訊號的傳輸頻率", "線材", "接頭"],
        answer: "B"
    },
    {
        id: 96,
        title: "下列何者採用雙絞線為傳輸媒介?",
        option: ["10Base5", "100BaseFX", "1000BaseSX", "1000BaseT"],
        answer: "D"
    },
    {
        id: 97,
        title: "目前最普遍的 100Mbps 乙太網路規格為何?",
        option: ["100BaseFX", "100BaseT2", "100BaseTX", "100BaseTP"],
        answer: "C"
    },
    {
        id: 98,
        title: "100BaseT 其中100為?",
        option: ["傳輸速率", "傳輸距離", "傳輸干擾", "傳輸編號"],
        answer: "A"
    },
    {
        id: 99,
        title: "10Base 2其中10的意思是表示傳輸速度",
        option: ["10Kbps", "10K bytes", "10Mbps", "10M bytes"],
        answer: "C"
    },
    {
        id: 100,
        title: "細同軸電纜之網路線簡稱",
        option: ["RJ-45", "RG-58", "RG-68", "RG-78"],
        answer: "B"
    },
    {
        id: 101,
        title: "下列有關高速乙太網路(Fast Ethernet) 100 Base-TX,的敘述,何者錯誤?",
        option: ["屬於分享式網路,採用CSMA/CD的碰撞處理方式傳輸資料", "網路上用戶多時,傳輸速率會變慢", "線材使用同軸電纜", "相較其他網路技術(如 ATM),其使用成本較便宜"],
        answer: "C"
    },
    {
        id: 102,
        title: "如果經濟許可,網路卡應購買的規格是",
        option: ["100BaseFX", "100BaseTX", "1000BaseCX", "1000BaseTX"],
        answer: "D"
    },
    {
        id: 103,
        title: "10 Gigabit 雙絞線乙太網路的線材必須哪個等級以上",
        option: ["Cat.5", "Cat.Se", "Cat.6", "Cat.6a"],
        answer: "C"
    },
    {
        id: 104,
        title: "10 Gigabit 雙絞線乙太網路的接頭是",
        option: ["RJ11", "RJ45", "GG11", "GG45"],
        answer: "D"
    },
    {
        id: 105,
        title: "一般所謂的 WAN(Wide Area Network),其所代表的意義為何?",
        option: ["樹狀網路", "匯流排網路", "區域網路", "廣域網路"],
        answer: "D"
    },
    {
        id: 106,
        title: "如果只是個人或家庭使用者,申請ADSL,只需要準備一台,便可以利用電話線路來和外界的廣域網路(電腦)連接",
        option: ["ADSL數據機", "集線器", "IP分享器", "交換器"],
        answer: "A"
    },
    {
        id: 107,
        title: "傳統公眾電信網路是",
        option: ["電路交換", "固定長度交換", "非固定交換", "細胞交換"],
        answer: "A"
    },
    {
        id: 108,
        title: "廣域網路的交換方式除了電路交換、封包交換,還有",
        option: ["細胞交換", "固定長度交換", "分封交換", "以上皆是"],
        answer: "A"
    },
    {
        id: 109,
        title: "資料被切成固定長度的單元(ATM為例)",
        option: ["電路交換", "固定長度交換", "非固定交換", "細胞交換"],
        answer: "D"
    },
    {
        id: 110,
        title: "一條T3的傳輸速率為44.736Mbps,約為幾條T1的頻寬?",
        option: ["8", "24", "28", "32"],
        answer: "C"
    },
    {
        id: 111,
        title: "ATM 是一種以幾位元固定大小細胞(Cell)為基礎的高速分封多工交換標準?",
        option: ["43", "53", "63", "73"],
        answer: "B"
    },
    {
        id: 112,
        title: "一個 ATM 細胞固定包含53個位元組。其封包可分成標頭(head)與資訊欄 (payload)兩部份,各佔幾Byte?",
        option: ["5,48", "10,43", "15,38", "20,33"],
        answer: "A"
    },
    {
        id: 113,
        title: "T1 專線提供速率",
        option: ["64kbps", "1.544 Mbps", "6.312 Mbps", "44.736 Mbps"],
        answer: "B"
    },
    {
        id: 114,
        title: "有線電視(Cable TV)之頻寬是",
        option: ["大家共享", "獨享頻寬", "部份共享", "以上皆非"],
        answer: "A"
    },
    {
        id: 115,
        title: "利用現有之雙銅線(一般傳統家用電話線),但不同的是它是利用人耳所聽不到的高頻部份來提供高速網際網路上網服務的調變/解調變技術?",
        option: ["MODEM", "Cable MODEM", "SONET", "ADSL"],
        answer: "D"
    },
    {
        id: 116,
        title: "直接把光纖接到用戶的家中之網路技術是",
        option: ["FTTH", "Cable MODEM", "SONET", "ADSL"],
        answer: "A"
    },
    {
        id: 117,
        title: "光纖只拉到建築大樓的電信室或機房裡。再從大樓的電信室,以電話或網 路線等等的其他通訊技術到用戶家,技術是",
        option: ["FTTH", "FTTB", "FTTC", "FTTCab"],
        answer: "B"
    },
    {
        id: 118,
        title: "那一個不是ISM 頻段?",
        option: ["902-928MHz", "2.4-2.4835GHz", "5.725~5.850GHz", "7.725~7.850GHz"],
        answer: "D"
    },
    {
        id: 119,
        title: "ISM 頻段,此頻段主要是開放給",
        option: ["工業", "科學", "醫學", "以上皆是"],
        answer: "D"
    },
    {
        id: 121,
        title: "GPS (Global Positioning System,全球衛星定位系統)的定位,由幾顆繞地球 衛星所組成?",
        option: ["3顆", "6", "12顆", "24顆"],
        answer: "D"
    },
    {
        id: 122,
        title: "紅外線距離傳輸距離可達約",
        option: ["5公尺", "10公尺", "15公尺", "20公尺"],
        answer: "A"
    },
    {
        id: 123,
        title: "IrDA1.1規格是採用哪一種無線傳輸媒介",
        option: ["無線電波", "微波", "衛星", "紅外線"],
        answer: "D"
    },
    {
        id: 124,
        title: "筆記型電腦沒有內建無線網路卡,可以使用那種介面的無線網路卡",
        option: ["PCMCIA", "PCI", "ISA", "PCI Express"],
        answer: "A"
    },
    {
        id: 125,
        title: "通常連接有線的區域網路,再發送無線電波,供筆記型電腦存取網路的設備 是",
        option: ["無線網卡", "無線網路基地台", "GPRS Modem", "3G網卡"],
        answer: "B"
    },
    {
        id: 126,
        title: "可以透過xDSL,Cable Modem,或是ISDN,以無線的方式,連上網際網 路,只需要一個固定或是變動IP,是那一種設備",
        option: ["無線網卡", "無線網路路由器", "GPRS Modem", "3G網卡"],
        answer: "B"
    },
    {
        id: 127,
        title: "傳輸層的通訊協定有",
        option: ["TCP,UDP", "IP,IRAP", "HTTP,FTP", "DNS, WINS"],
        answer: "A"
    },
    {
        id: 128,
        title: "欲連上 Internet 網際網路,在windows 網路協定中需有何種通訊協定?",
        option: ["IPX/SPX", "NetBuei", "TCP/IP", "GatWAY"],
        answer: "C"
    },
    {
        id: 120,
        title: "衛星是一種以微波方式傳送的通信系統,利用距離地球公里的高空的同步衛星",
        option: ["6000", "16000", "26000", "36000"],
        answer: "D"
    },
    {
        id: 129,
        title: "TCP 協定採用哪種方式的握手程序",
        option: ["單向式", "雙向式", "三向式", "四向式"],
        answer: "A"
    },
    {
        id: 130,
        title: "TCP 如何提供可靠性傳輸是非常複雜的,必須採用一定的確認機制來保證傳輸之可靠性。這種技術需要接收端以哪種方式回應發送端,肯定資料正確無誤的到達,同時雙方保留傳輸的封包記錄,以作為下一筆資料的確認依據。",
        option: ["確認信息封包", "友善封包", "回應封包", "錯誤檢查碼"],
        answer: "A"
    },
    {
        id: 131,
        title: "TCP 多重發送和多重確認的技術。",
        option: ["三向式握手程序", "逾時(Timeout) 和重送機制", "滑動窗", "確認封包機制"],
        answer: "C"
    },
    {
        id: 132,
        title: "每一部電腦的UDP連線埠,最多有多少個埠號。",
        option: ["65,536", "1,023", "1,024", "80"],
        answer: "A"
    },
    {
        id: 133,
        title: "以下何者對 TCP的敘述是正確的",
        option: ["TCP屬於位元組串流(Byte Stream)傳輸", "可以藉由『滑動視窗』(Sliding Window)來控制傳輸端的流量", "當封包逾時未回應傳送端,傳送端即會重新重送一次", "以上皆是。"],
        answer: "D"
    },
    {
        id: 134,
        title: "『已知埠號』(Well-Know Ports)的連線埠號區間為",
        option: ["0-1,023", "1,024-49,151", "0-1,924", "只要小於65,535即可,IANA 並沒有限制。"],
        answer: "A"
    },
    {
        id: 135,
        title: "FTP 預設使用哪一個埠號(port number) 來傳送資料?",
        option: ["21", "80", "110", "7150"],
        answer: "A"
    },
    {
        id: 136,
        title: "一個IP 與一個Port 所組成的是",
        option: ["插座對", "網路組合", "封包標頭", "封包標尾"],
        answer: "A"
    },
    {
        id: 137,
        title: "網際網路所使用的主要通訊協定是",
        option: ["TCP/IP", "網路上的芳鄰", "Novell IPX", "NetBEUI"],
        answer: "A"
    },
    {
        id: 138,
        title: "那個協定提供了非連結性的快速服務。",
        option: ["UDP", "TCP", "SMTP", "以上皆是"],
        answer: "A"
    },
    {
        id: 139,
        title: "TCP 協定解決那個的問題。",
        option: ["資料不會失序與重複", "流量控管", "保證送達", "以上皆是"],
        answer: "D"
    },
    {
        id: 140,
        title: "下列有關網路運輸階層的敘述,何者有誤?",
        option: ["TCP必須配合IP的使用", "UDP為非連接式的通訊協定", "TCP為連接導向的通訊協定", "UDP無需配合IP的使用"],
        answer: "D"
    },
    {
        id: 141,
        title: "「防火牆」的原理和簡單,其實就是控管「IP位址」和",
        option: ["埠號", "使用者", "帳號", "網路名稱"],
        answer: "A"
    },
    {
        id: 142,
        title: "哪個設備可用來防止病毒、蠕蟲、木馬和駭客等入侵",
        option: ["防火牆", "集線器", "交換器", "路由器"],
        answer: "A"
    },
    {
        id: 143,
        title: "WWW 網站使用哪一個埠號來傳送資料?",
        option: ["80", "21", "110", "7150"],
        answer: "A"
    },
    {
        id: 144,
        title: "那一種服務可將『 Domain Name」對應為「IP Address」?",
        option: ["DNS", "WINS", "DHCP", "Proxy"],
        answer: "A"
    },
    {
        id: 146,
        title: "學校的同仁反應使用瀏覽器軟體輸入網站的網域名稱((Domain Name)無法瀏覽網站資料,但輸入該網站的IP address 卻可以正常連線,此問題的可能 原因是學校的",
        option: ["switch 故障", "DNS故障", "mail 伺服器(Server)故障", "DHCP伺服器(Server)故障"],
        answer: "B"
    },
    {
        id: 147,
        title: "有關 DNS 以下何者錯誤",
        option: ["DNS的基本工作是作主機名稱及IP位址的轉換", "APACHE是UNIX系統上常用的DNS系統軟體", "win2000及UNIX 作業系統皆可以提供DNS 服務", "在UNIX系統中可使用 nslookup 去查詢FQDN所對應 IP address"],
        answer: "B"
    },
    {
        id: 148,
        title: "用來將主機名稱轉譯成IP的伺服器是",
        option: ["DHCP", "Proxy", "Web 伺服器 (Server)", "DNS"],
        answer: "D"
    },
    {
        id: 149,
        title: "網際網路所使用之階層式命名規則為以下那種方式?",
        option: ["WINS", "NAT", "DNS", "dotted decimal notation"],
        answer: "C"
    },
    {
        id: 150,
        title: "什麼是DNS?",
        option: ["學術網路", "網域名稱系統", "台灣網路資訊中心", "中華電信局"],
        answer: "B"
    },
    {
        id: 151,
        title: "「網域名稱伺服器」的英文簡稱為何?",
        option: ["ISDN", "DNS", "ISP", "TCP"],
        answer: "B"
    },
    {
        id: 152,
        title: "要利用 windows95 的撥號網路上Internet,必須安裝TCP/IP的網路通訊協定,並且下列何者不是TCP/IP的可能設定?",
        option: ["主DNS", "次DNS", "Router", "IP位址"],
        answer: "C"
    },
    {
        id: 153,
        title: "DNS 架構的最上層是",
        option: ["根網域", "頂層網域", "國家網域", "一般網域"],
        answer: "A"
    },
    {
        id: 154,
        title: "以國別為名的網域是",
        option: ["根網域", "頂層網域", "國家網域", "一般網域"],
        answer: "C"
    },
    {
        id: 155,
        title: "一般網域中「.edu」是",
        option: ["教育機構", "政府機構", "軍事機構", "網路機構"],
        answer: "A"
    },
    {
        id: 156,
        title: "常見的主機服務,該主機多半提供 WWW全球資訊服務",
        option: ["WWW", "MAIL", "FTP", "NEWS"],
        answer: "A"
    },
    {
        id: 157,
        title: "那一種服務可自動將 為每台電腦設定IP、Subnet Mask、Gateway」?",
        option: ["WINS", "DNS", "DHCP", "Proxy"],
        answer: "C"
    },
    {
        id: 158,
        title: "動態主機配置協定允許IP位址自動配置;其英文縮寫為?",
        option: ["WWW", "TCP/IP", "POP", "DHCP"],
        answer: "D"
    },
    {
        id: 159,
        title: "下列何者不是安裝 WWW Server 的軟體?",
        option: ["Apache", "Server", "PWS IIS", "DHCP"],
        answer: "D"
    },
    {
        id: 160,
        title: "那一種服務可將「Domain Name」對應為「IP Address」?",
        option: ["WINS", "DNS", "DHCP", "Proxy"],
        answer: "B"
    },
    {
        id: 161,
        title: "Windows 2000 client 如要重新向DHCP Server 取得一組新IP要執行下列那一指令?",
        option: ["ipconfig/all", "ipconfig/renew", "ipconfig/release", "ipconfig"],
        answer: "B"
    },
    {
        id: 162,
        title: "何種網路協定可以自動設定使用者電腦的IP Address ?",
        option: ["RIP", "TCP/IP", "DHCP", "IPX/SPX"],
        answer: "C"
    },
    {
        id: 163,
        title: "為了方便管理學校中上百台電腦的IP address,讓每台電腦開機後能夠自動取得IP address,通常會利用那一種 server 來管理?",
        option: ["Web server", "lock server", "DHCP server", "PHP server"],
        answer: "C"
    },
    {
        id: 145,
        title: "「創新小點子」商店,想藉由網際網路(Internet)提供世界各地的客戶預訂產 品,他們申請網域,應該架設何種系統?",
        option: ["FTP伺服器", "WWW伺服器", "DNS 伺服器", "Mail伺服器"],
        answer: "C"
    },
    {
        id: 164,
        title: "當 DHCP 客戶端第一次成功的從DHCP伺服器端租用到IP位址之後,就 永遠使用這個位址的是?",
        option: ["自動分配(Automatic Allocation)", "動態分配 (Dynamic Allocation)", "靜態分配(Static Allocation)", "以上皆非"],
        answer: "A"
    },
    {
        id: 165,
        title: "當 DHCP 第一次從HDCP 伺服器端租用到IP位址之後,並非永久的使 用該位址,只要租約到期,客戶端就得釋放(release)這個IP位址,以給其 它工作站使用是?",
        option: ["自動分配(Automatic Allocation)", "動態分配 (Dynamic Allocation)", "靜態分配(Static Allocation)", "以上皆非"],
        answer: "B"
    },
    {
        id: 166,
        title: "當 DHCP 客戶端(client)啟動時,它會向 DHCP server 廣播請求IP-Address 租用,稱為?",
        option: ["DHCPDISCOVER 封包", "DHCPOFFER 封包", "DHCPREQUEST 封包", "DHCPACK 封包"],
        answer: "A"
    },
    {
        id: 167,
        title: "ICANN 開放由非英文字母撰寫的網域名稱,共幾種文字的網域名稱",
        option: ["9", "10", "11", "12"],
        answer: "C"
    },
    {
        id: 168,
        title: "「WWW」(World Wide Web)全球資訊網是哪個單位所發明",
        option: ["IEEE", "歐洲高能粒子協會", "ANSI", "IETF"],
        answer: "B"
    },
    {
        id: 169,
        title: "進入一個網站時所看到的第一個網頁,就是",
        option: ["公司頁", "公告頁", "首頁", "網站頁"],
        answer: "C"
    },
    {
        id: 170,
        title: "有別於靜態網頁只能單純地顯示html 內容,其可以依據瀏覽者的輸入資訊不同?",
        option: ["動態網頁", "一般網頁", "動畫網頁", "電子商務網頁"],
        answer: "A"
    },
    {
        id: 171,
        title: "網站伺服器(Web server)與客戶端(Web client)之間溝通所使用的協定,是",
        option: ["HTTP", "FTP", "Email", "MSN"],
        answer: "A"
    },
    {
        id: 172,
        title: "中文稱作「超文件傳輸通訊協定」的服務,是",
        option: ["HTTP", "FTP", "Email", "MSN"],
        answer: "A"
    },
    {
        id: 173,
        title: "哪一種協定,在傳統 HTTP 及TCP間再加認證及加密部份",
        option: ["HTTP", "HTTPS", "Email", "MSN"],
        answer: "B"
    },
    {
        id: 174,
        title: "網頁位址,就是",
        option: ["URI", "UAL", "INDEX", "URL"],
        answer: "D"
    },
    {
        id: 175,
        title: "可以依據瀏覽者的輸入資訊不同(例如:不同的瀏覽者、瀏覽行為、瀏覽時 間...),而呈現不同的內容,是",
        option: ["首頁", "網頁", "靜態網頁", "動態網頁"],
        answer: "D"
    },
    {
        id: 176,
        title: "JavaScript 是一種甚麼技術",
        option: ["視窗程式", "普通網頁技術", "客戶端動態網頁技術", "伺服器端動態網頁技術"],
        answer: "C"
    },
    {
        id: 177,
        title: "PHP是一種甚麼技術",
        option: ["視窗程式", "普通網頁技術", "客戶端動態網頁技術", "伺服器端動態網頁技術"],
        answer: "D"
    },
    {
        id: 178,
        title: "全球網站伺服器佔有率,最高的是",
        option: [" Apache", "Tomcat", " IIS", " 雷電"],
        answer: "A"
    },
    {
        id: 179,
        title: "下列哪一網站使用免費的開放原始碼(open-source)自由版權",
        option: [" Apache", "Tomcat", " IIS", " 雷電"],
        answer: "A"
    },
    {
        id: 180,
        title: "支援 PHP 網頁程式語言的是網站伺服器",
        option: ["IIS", "Apache", "Websphere", "Sun"],
        answer: "B"
    },
    {
        id: 181,
        title: "微軟作業系統內建的網站伺服器是",
        option: ["IIS", "Apache", "Websphere", "Sun"],
        answer: "A"
    },
    {
        id: 182,
        title: "微軟作業系統內建的瀏覽器是",
        option: ["IE", "Navigator", "FireFox", "KKman"],
        answer: "A"
    },
    {
        id: 183,
        title: "第一個點燃網際網路商業化戰火的瀏覽器,是",
        option: ["IE", "Navigator", "FireFox", "KKman"],
        answer: "B"
    },
    {
        id: 184,
        title: "自由軟體的瀏覽器,是",
        option: ["IE", "Navigator", "FireFox", "KKman"],
        answer: "C"
    },
    {
        id: 185,
        title: "能透過快取技術,加快網際網路存取的伺服器是",
        option: ["WWW", "FTP", "Proxy Server", "DNS Server"],
        answer: "C"
    },
    {
        id: 186,
        title: "方便讓第一次上網際網路的民眾所做的網站,是",
        option: ["人口網站", "搜尋引擎", "電子商務網站", "索引網站"],
        answer: "A"
    },
    {
        id: 187,
        title: "Web 1.0+網友的創意和共用",
        option: ["Web 1.0", "Web 2.0", "Web 3.0", "Web 4.0"],
        answer: "B"
    },
    {
        id: 188,
        title: "現在的 E-mail 支援那一種格式,可以附加檔案?",
        option: ["SMTP", "MIME(Multipurpose Internet Mail Extensions)", "POP3", "WWW"],
        answer: "B"
    },
    {
        id: 189,
        title: "E-mail送信就是靠",
        option: ["SMTP", "POP3", "http", "ftp"],
        answer: "A"
    },
    {
        id: 190,
        title: "E-mail 收信就是靠",
        option: ["SMTP", "POP3", "http", "ftp"],
        answer: "B"
    },
    {
        id: 191,
        title: "E-mail 送信使用的埠號",
        option: ["21", "25", "80", "110"],
        answer: "B"
    },
    {
        id: 192,
        title: "E-mail 收信使用的埠號",
        option: ["21", "25", "80", "110"],
        answer: "D"
    },
    {
        id: 193,
        title: "D通道的速率為",
        option: ["16Kbps", "32Kbps", "64Kbps", "128Kbps"],
        answer: "A,C"
    },
    {
        id: 194,
        title: "B通道的速率為",
        option: ["16Kbps", "32Kbps", "64Kbps", "128Kbps"],
        answer: "C"
    },
    {
        id: 195,
        title: "T1 的速率為",
        option: ["1 Mbps", "1.544Mbps", "6.176Mbps", "45Mbps"],
        answer: "B"
    },
    {
        id: 196,
        title: "T3的速率為",
        option: ["1 Mbps", "1.544Mbps", "6.176Mbps", "45Mbps"],
        answer: "D"
    },
    {
        id: 197,
        title: "T1的速率為",
        option: ["24個通道所組成", "25個通道所組成", "26個通道所組成", "27個通道所組成"],
        answer: "A"
    },
    {
        id: 198,
        title: "BRI 介面包含為",
        option: ["2B+D0通道所組成", "2B+2D0通道所組成", "30B+D2通道所組成", "30B+2D2通道所組成"],
        answer: "A"
    },
    {
        id: 199,
        title: "PRI介面包含為",
        option: ["2B+D0通道所組成", "2B+2D0通道所組成", "30B+D2通道所組成", "30B+2D2通道所組成"],
        answer: "C"
    },
    {
        id: 200,
        title: "哪一個不屬於光纖的結構",
        option: ["纖覆", "外保護層", "纖核", "纖維"],
        answer: "D"
    },
    {
        id: 201,
        title: "UTP 真正有用來傳收網路訊號的是哪幾支接腳,以下哪一個選項屬於其中之一",
        option: ["1", "5", "7", "8"],
        answer: "A"
    },
    {
        id: 202,
        title: "UTP 真正有用來傳收網路訊號的是哪幾支接腳,以下哪一個選項屬於其中之一",
        option: ["3", "5", "7", "8"],
        answer: "A"
    },
    {
        id: 203,
        title: "UTP 真正有用來傳收網路訊號的是哪幾支接腳,以下哪一個選項屬於其中之一",
        option: ["4", "6", "7", "8"],
        answer: "B"
    },
    {
        id: 204,
        title: "UTP 真正有用來傳收網路訊號的是哪幾支接腳,以下哪一個選項屬於其中之一",
        option: ["4", "5", "2", "8"],
        answer: "C"
    },
    {
        id: 205,
        title: "UTP 真正有用來傳收網路訊號的是哪幾支接腳,以下哪一個選項屬於其中之一",
        option: ["8", "7", "6", "5"],
        answer: "C"
    },
    {
        id: 206,
        title: "目前網路線使用的接頭稱之為",
        option: ["RJ-11", "RJ-12", "RJ-45", "RJ-47"],
        answer: "C"
    },
    {
        id: 207,
        title: "以下哪一個選項是用於位址解析協定",
        option: ["ipconfig", "ARP", "tracert", "netstat"],
        answer: "B"
    },
    {
        id: 208,
        title: "以下哪一個選項是用於全程追蹤封包從開始到終點經過的路徑",
        option: ["ipconfig", "ARP", "tracert", "netstat"],
        answer: "C"
    },
    {
        id: 209,
        title: "以下哪一個選項是用於查看網卡設定值",
        option: ["ipconfig", "ARP", "tracert", "netstat"],
        answer: "A"
    },
    {
        id: 210,
        title: "請問下列哪一個並不是社交程式?",
        option: ["LINE", "QQ", "FB", "KKbox"],
        answer: "D"
    },
    {
        id: 211,
        title: "請問下列哪一種行為是在執行程式?",
        option: ["打卡", "按讚", "寄送電子郵件", "以上皆是"],
        answer: "D"
    },
    {
        id: 212,
        title: "台灣三大網路分別為",
        option: ["TANet", "Seednet", "Hinet", "以上皆是"],
        answer: "D"
    },
    {
        id: 213,
        title: "TI 的傳輸速率為",
        option: ["1.544 Mbps", "3.14 Mbps", "45 Mbps", "54 Mbps"],
        answer: "A"
    },
    {
        id: 214,
        title: "T3的傳速率為",
        option: ["1.544Mbps", "3.14 Mbps", "45 Mbps", "54 Mbps"],
        answer: "C"
    },
    {
        id: 215,
        title: "下列哪一個網頁程式是在瀏覽器上執行",
        option: ["ASP", "CGI", "JavaScript", "以上皆是"],
        answer: "C"
    },
    {
        id: 216,
        title: "下列哪一個網頁程式是在瀏覽器上執行",
        option: ["ASP", "CGI", "VB Script", "以上皆是"],
        answer: "C"
    },
    {
        id: 217,
        title: "Java 現在是下列哪一個家公司產品",
        option: ["Microsoft", "Intel", "Oracle", "IBM"],
        answer: "C"
    },
    {
        id: 218,
        title: "下列哪一個不是搜尋引擎 (Search Engine)",
        option: ["Altavista", "Google", "Excite", "IBM"],
        answer: "D"
    },
    {
        id: 219,
        title: "下列哪一個不是網站伺服器",
        option: ["Apache", "Tomcat", "IIS", "JJS"],
        answer: "D"
    },

];


const topic_exist = new Array(data.length).fill(false);
const topic = new Array();



const SectionTopic = document.querySelector(".inner-section");


const SetTopic = ()=>{
    for (var i = 0; i < 25; i++) {
        let n = Math.floor((Math.random() * 219) + 1);
        while (topic_exist[n] == true) {
            n = Math.floor((Math.random() * 219) + 1);
        }
    
        topic_exist[n] = true;
        topic.push(data[n]);
    }
}




let count = 0;
let grade = 0;


const ReTopic = () => {
    SectionTopic.innerHTML = `
        <h2 class="title">${topic[count].id}.${topic[count].title}</h2>
        <button class="option A">(A) ${topic[count].option[0]}</button>
        <button class="option B">(B) ${topic[count].option[1]}</button>
        <button class="option C">(C) ${topic[count].option[2]}</button>
        <button class="option D">(D) ${topic[count].option[3]}</button>
        <h3 class="grade">共 25 題,目前做到第 1 題,總共得分:0</h3>`;
};



SetTopic();
ReTopic();

const YourAnswer = document.querySelectorAll('.option');
const Title = document.querySelector('.title');
const YourGrade = document.querySelector('.grade');
const endBtn = document.querySelector('.end');



YourAnswer.forEach((answer) => {
    answer.addEventListener('click', (e) => {
        console.log('123');
        if (e.currentTarget.classList.contains(topic[count].answer)) {
            grade += 4;
        }
        count++;
        if (count < 25) {
            YourGrade.textContent = "共 25 題,目前做到第 " + (count + 1) + "題,總共得分:" + grade;
            Title.textContent = topic[count].id + "." + topic[count].title;
            YourAnswer.forEach((item, index) => {
                if (index == 0) {
                    item.textContent = "(A) " + topic[count].option[index];
                }
                if (index == 1) {
                    item.textContent = "(B) " + topic[count].option[index];
                }
                if (index == 2) {
                    item.textContent = "(C) " + topic[count].option[index];
                }
                if (index == 3) {
                    item.textContent = "(D) " + topic[count].option[index];
                }

            });
        }
        else {
            YourGrade.textContent = "結束了! 你得到"+grade+"分";
            endBtn.style.display = 'inline-block';
        }

    });
});


endBtn.addEventListener('click',()=>{
    window.location.reload();
});


