const _ = require('lodash'); 

const course = [
  {
    "key": "Coding",
    "title": "Coding",
    "desc": "製作簡單、方便、好用的小工具可以幫助很多剛開始踏入 React 的新手快速的熟悉，像是 StartKit 就是我們想讓大家可以快速上手的所搭件的橋樑",
    "dataList": [
      {
        "key": "用程式構築的繪畫世界 — CSS 繪圖",
        "name": "用程式構築的繪畫世界 — CSS 繪圖",
        "description": "如果你對 CSS 有興趣，並且希望能夠看到不同樣貌的 CSS，或者厭倦了普通的切版，希望了解更多 CSS 的特殊變化，那麼這堂課可以讓你看到 CSS 有趣的另一面。",
        "img": "http://res.cloudinary.com/de8zvhth3/image/upload/v1510073026/coding1_kq2ydy.jpg",
        "demoUrl": "https://reactmaker.github.io/react_generator/",
        "videoUrl": "http://127.0.0.1/123/Liveshare/Animation/%E6%88%91%E7%9A%84%E6%BB%91%E6%9D%BF%E9%9E%8B.mp4",
        "repoUrl": "https://github.com/ReactMaker/react_thumbnail"
      },{
        "key": "Python 入門到製作遊戲演算法",
        "name": "Python 入門到製作遊戲演算法",
        "description": "這堂課程總共有 400 分鐘，聽起來很多，但是我把它分成六大關卡，每次只要看一點點就可以休息了，不用擔心。在這六大關卡內，有兩種單元，第一種是「由我講解」；第二種是「練習題」。因基礎內容太無聊了，所以我會用邊教邊練習的方式來讓你聽懂。練習題只要有確實的上完課程，都可以輕鬆完成，而且每題都會有講解，可以先自己試試看，真的想不出來再看我提供的解答。",
        "img": "http://res.cloudinary.com/de8zvhth3/image/upload/v1510073027/coding2_pryx1k.jpg",
        "demoUrl": "https://reactmaker.github.io/react_thumbnail/",
        "videoUrl": "http://127.0.0.1/123/Liveshare/Animation/%E6%88%91%E7%9A%84%E6%BB%91%E6%9D%BF%E9%9E%8B.mp4",
        "repoUrl": "https://github.com/ReactMaker/react_generator"
      },{
        "key": "JavaScript 程式設計新手村",
        "name": "JavaScript 程式設計新手村",
        "description": "若說程式語言中最勵志的故事， JavaScript 絕對可以排到前幾名，從過去的跑龍套到現在獨挑大樑。現在的 JavaScript 不僅是網頁開發中最重要的明星，更可以開發手機 App、物聯網（IoT）、VR/AR 應用程式。本課程將會帶領大家從零開始打好 JavaScript 基礎，由淺入深介紹 JavaScript 重要特性，實作有趣的應用程式，最後帶領大家實作課後專題，做出一個屬於自己的 Chrome 瀏覽器外掛程式，並上架到 Google Chrome 市集。",
        "img": "http://res.cloudinary.com/de8zvhth3/image/upload/v1510073025/coding3_neqfrr.jpg",
        "demoUrl": "",
        "videoUrl": "http://127.0.0.1/123/Liveshare/Animation/%E6%88%91%E7%9A%84%E6%BB%91%E6%9D%BF%E9%9E%8B.mp4",
        "repoUrl": "https://github.com/ReactMaker/simple_react_start_kit_2017"
      },{
        "key": "動畫互動網頁程式入門 (HTML/CSS/JS)",
        "name": "動畫互動網頁程式入門 (HTML/CSS/JS)",
        "description": "你曾經想學過網頁設計嗎?經看過線上課程，大部分的程式設計教學往往只講解功能沒教你如何讓網頁好看，好用學完做出來之後，總離真正上線的網頁有段距離而覺得沮",
        "img": "http://res.cloudinary.com/de8zvhth3/image/upload/v1510073027/coding4_x3mmby.jpg",
        "demoUrl": "",
        "videoUrl": "http://127.0.0.1/123/Liveshare/Animation/%E6%88%91%E7%9A%84%E6%BB%91%E6%9D%BF%E9%9E%8B.mp4",
        "repoUrl": "https://github.com/ReactMaker/simple_react_start_kit_2017"
      },{
        "key": "Python Web 程式設計入門實戰",
        "name": "Python Web 程式設計入門實戰",
        "description": "人臉辨識、網路爬蟲、圖片下載、Youtube 下載工具，網站開發等多個願望一次滿足！馬上學，馬上用！",
        "Python": "網路程式設計與網路爬蟲入門實戰課程預購最後倒數！。",
        "img": "http://res.cloudinary.com/de8zvhth3/image/upload/v1510591564/python_inrz0w.jpg",
        "demoUrl": "",
        "videoUrl": "http://127.0.0.1/123/Liveshare/Animation/%E6%88%91%E7%9A%84%E6%BB%91%E6%9D%BF%E9%9E%8B.mp4",
        "repoUrl": "https://github.com/ReactMaker/simple_react_start_kit_2017"
      },{
        "key": "App Inventor 2 入門特訓",
        "name": "App Inventor 2 入門特訓",
        "description": "本課程基於Android平台，將介紹Android APP程式設計所需的軟、硬體和 App Inventor 2 編程方法。從認識基本的變數和運算符號開始，詳細講解如何使用拼圖構建程式，如何編寫函式和運行函式，如何在程序中加入邏輯判斷和迴圈，最後視募資結果還會加碼如何處理APP上架，就是要讓學員能親手做出屬於自己的APP。本課程適合對Android手機APP程式設計感興趣的人，對於剛入門新手或有經驗的熟手都有幫助。",
        "img": "http://res.cloudinary.com/de8zvhth3/image/upload/v1510073025/coding6_ec81ig.jpg",
        "demoUrl": "",
        "videoUrl": "http://127.0.0.1/123/Liveshare/Animation/%E6%88%91%E7%9A%84%E6%BB%91%E6%9D%BF%E9%9E%8B.mp4",
        "repoUrl": "https://github.com/ReactMaker/simple_react_start_kit_2017"
      },{
        "key": "後端全攻略，用 Rails 讓你的網頁活起來！",
        "name": "後端全攻略，用 Rails 讓你的網頁活起來！",
        "description": "這門課不會只教你如何用 Rails 快速開發後端，更會帶你走過一個個指令與操作，了解每步驟背後的原理。除了程式語言的教學之外，我們也用圖像化的方式，為你介紹後端那堆複雜抽象的概念，打下扎實的後端開發基礎。一旦掌握了這些概念，未來不管用任何語言、框架都能更容易上手！",
        "img": "http://res.cloudinary.com/de8zvhth3/image/upload/v1510073025/coding7_x6yz2v.jpg",
        "demoUrl": "",
        "videoUrl": "http://127.0.0.1/123/Liveshare/Animation/%E6%88%91%E7%9A%84%E6%BB%91%E6%9D%BF%E9%9E%8B.mp4",
        "repoUrl": "https://github.com/ReactMaker/simple_react_start_kit_2017"
      },{
        "key": "Python 網頁爬蟲入門實戰",
        "name": "Python 網頁爬蟲入門實戰",
        "description": "網路上有許多網頁爬蟲的教學文章與影片，它們都是很好的自學素材，但是這些素材多為片段，常常直接切入主題，沒有循序漸進的概念建構，本課程是針對網路爬蟲的完整教學，由淺入深，搭配實戰範例與專題練習，力求符合學生的需要。講者有各種網頁及手機 App 的爬蟲撰寫經驗，也會在課程中分享個人遇過的困難及處理經驗，解答學生的問題。",
        "img": "http://res.cloudinary.com/de8zvhth3/image/upload/v1510073026/coding8_sglyli.jpg",
        "demoUrl": "",
        "videoUrl": "http://127.0.0.1/123/Liveshare/Animation/%E6%88%91%E7%9A%84%E6%BB%91%E6%9D%BF%E9%9E%8B.mp4",
        "repoUrl": "https://github.com/ReactMaker/simple_react_start_kit_2017"
      },{
        "key": "C 語言入門特訓",
        "name": "C 語言入門特訓",
        "description": "培養邏輯思辯：分級且循序漸進的課程設計，強調邏輯思辯過程，幫助學員系統性學習。",
        "img": "http://res.cloudinary.com/de8zvhth3/image/upload/v1510073025/coding9_tkjw3i.jpg",
        "demoUrl": "",
        "videoUrl": "http://127.0.0.1/123/Liveshare/Animation/%E6%88%91%E7%9A%84%E6%BB%91%E6%9D%BF%E9%9E%8B.mp4",
        "repoUrl": "https://github.com/ReactMaker/simple_react_start_kit_2017"
      }
    ]
  }
];


module.exports = app => {
  app.get('/course', function(req, res) {
    return _.find(course, function(e){
       return e.dataList.map(video => video.videoUrl)
    })
  });
}