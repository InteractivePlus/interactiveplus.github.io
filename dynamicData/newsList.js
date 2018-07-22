var XSYD_News = {
    newsList: [
        { //First Element, articleID = 0
            cn:{
                title: "形随意动简要介绍",
                briefDescription: "本文章介绍形随意动的前身由来, 我们做什么和我们未来要做什么!",
                articleURL: "0_InteractivePlusIntro_CN.html",
                showOnIndexNews: false, //Not showing on index news block because this is the team introduction.
                isURLAbsolute: false, //if URL is not absolute, articleBaseURL will be added.
                AuthorID: 0
            },
            en:{
                title: "InterActive+ Introduction",
                briefDescription: "This article describes how Interactive+ were founded earlier, what we do now and what we are going to do in the future!",
                articleURL: "0_InteractivePlusIntro_EN.html",
                showOnIndexNews: false,
                isURLAbsolute: false,
                AuthorID: 0
            }
        },
        { //articleID = 1
            cn:{
                title: "形随意动新官网上线!",
                briefDescription: "本文章介绍新官网开发动机, 以及背后蕴含的技术!",
                articleURL: "1_InteractivePlusNewWeb_CN.html",
                showOnIndexNews: true, //Not showing on index news block because this is the team introduction.
                isURLAbsolute: false, //if URL is not absolute, articleBaseURL will be added.
                AuthorID: 0
            },
            en:{
                title: "We launched our new website!",
                briefDescription: "This article describes what motivates us to make this new website and what are the technologies behind it!",
                articleURL: "1_InteractivePlusNewWeb_EN.html",
                showOnIndexNews: true,
                isURLAbsolute: false,
                AuthorID: 0
            }
        }
    ],
    articlesBaseURL: "dynamicData/articles/"
};