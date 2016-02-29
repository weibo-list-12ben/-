// ==UserScript==
// @name        YAWF Rule 5473010691
// @name:zh     无聊微博取关吧
// @name:zh-CN  无聊微博取关吧
// @name:en     No jabberwocky
// @namespace   https://github.com/weibo-list-12ben/
// @description 各种无聊转发
// @copyright   列表由 @12ben 整理；程序代码由 @tsh90 书写，适用于 MIT 协议
// @icon        data:image/png;base64,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
// @include     http://www.weibo.com/*
// @include     http://weibo.com/*
// @include     http://d.weibo.com/*
// @include     http://s.weibo.com/*
// @exclude     http://weibo.com/a/bind/*
// @exclude     http://weibo.com/nguide/interests
// @require     https://tiansh.github.io/yawf-rules/YAWF_Rule_Base.js
// @homepageURL https://tiansh.github.io/yawf-rules/5473010691/
// @downloadURL https://tiansh.github.io/yawf-rules/5473010691/YAWF_Rule_5473010691.user.js
// @updateURL   https://tiansh.github.io/yawf-rules/5473010691/YAWF_Rule_5473010691.meta.js
// @version     2016.02.29.1
// @grant       GM_info
// @grant       unsafeWindow
// @run-at      document-start
// ==/UserScript==

var userlist = [
  ["1003273015", "漫趣"],
  ["1582894780", "钙片叔"],
  ["1583124707", "我的极品评论"],
  ["1642635773", "我们爱讲冷笑话"],
  ["1644395354", "冷笑话精选"],
  ["1647334535", "耽美H漫画控"],
  ["1653953053", "重口味腐女营"],
  ["1660612723", "可爱宠物中心"],
  ["1663723820", "杰克波比"],
  ["1665672180", "火神CG工场"],
  ["1667480033", "智言趣语"],
  ["1671526850", "星座爱情001"],
  ["1689294374", "新番动漫"],
  ["1704750133", "你的档案"],
  ["1705439524", "机智的散漫娘"],
  ["1713926427", "微博搞笑排行榜"],
  ["1728551812", "三位好友"],
  ["1762605491", "CCTV美丽中国乡村行"],
  ["1768008414", "腐宅姬"],
  ["1779744180", "二逼青年这样过"],
  ["1780296372", "宅男腐女爱冷笑话"],
  ["1783428572", "英国留学-中英网"],
  ["1789834424", "我Hold不住了"],
  ["1790597487", "五行属二"],
  ["1806910981", "美食和旅行"],
  ["1822398137", "插班生小明明"],
  ["1852220282", "全球幽默趣事"],
  ["1868120090", "娱乐圈揭秘"],
  ["1872546697", "家庭教师hitman"],
  ["1880222353", "宅男腐女都震惊了"],
  ["1880230915", "宅男腐女都爱冷笑话"],
  ["1883564374", "我和动漫的日常"],
  ["1883674043", "宅腐女集中营"],
  ["1886419032", "宅腐集中营"],
  ["1887826884", "屌絲打分蜻蜓隊長"],
  ["1911406750", "二次元的大世界"],
  ["1911956100", "一只小肥兎"],
  ["1913382117", "深圳晚报"],
  ["1995839643", "笑到你肚子疼"],
  ["2011796120", "笑话有木有"],
  ["2080114694", "动漫基地"],
  ["2088547717", "锋绘动漫"],
  ["2111146932", "日本动漫季"],
  ["2146965345", "大咕咕咕鸡"],
  ["2151223234", "禁片集中营"],
  ["2153734894", "这里是在日本"],
  ["2166792032", "腐女大本营"],
  ["2171915732", "鬼谷猎奇"],
  ["2178690247", "口味有些重"],
  ["2210475152", "腐女资源社长"],
  ["2213526752", "视角_日本"],
  ["2241592845", "古风卷"],
  ["2259401900", "海贼王精选"],
  ["2289388231", "CG美术人网"],
  ["2289537274", "日本零距离"],
  ["2329718214", "和风之日语学习"],
  ["2336169183", "家居师装饰"],
  ["2346404435", "电影Mr"],
  ["2352843617", "手绘工厂"],
  ["2368702730", "宅男腐女大本营"],
  ["2373286762", "伪意见领袖"],
  ["2394069222", "我朋友是个奇葩"],
  ["2396658275", "趣闻搞笑"],
  ["2406213380", "漫能"],
  ["2408562972", "漫画铺子"],
  ["2420016564", "宅腐萌基二次元女"],
  ["2466386627", "史上第一最腐女"],
  ["2470360481", "热门榜"],
  ["2477002587", "耽美同人资源"],
  ["2528168852", "二次元娘"],
  ["2615577972", "这个微博有点贱"],
  ["2641774891", "动漫绘馆"],
  ["2644350892", "2次元學生同好會"],
  ["2645352682", "宅腐女大本营"],
  ["2681256780", "宅腐18禁"],
  ["2682630973", "关注二次元"],
  ["2686948620", "ACG动漫频道"],
  ["2687450383", "宅腐搞笑日记"],
  ["2697257333", "电影怪客"],
  ["2709577332", "Happy张江"],
  ["2726601057", "进击的阿木君"],
  ["2759412501", "内存告急的小怪兽"],
  ["2773676520", "这微博笑死我了"],
  ["2784340910", "漫友菌"],
  ["2803301701", "人民日报"],
  ["2806862350", "脑洞先生"],
  ["2855071827", "我和宠物的日常"],
  ["2865065844", "神奇的美帝"],
  ["2917034412", "进击的巨人中文站"],
  ["2917903744", "旷课生"],
  ["2993873502", "我整个人都感到不太好了"],
  ["3096347625", "原画梦官网"],
  ["3099016097", "英国报姐"],
  ["3125368501", "电影图解师"],
  ["3129816345", "这个微博有点婊"],
  ["3139266413", "耽美同人动漫"],
  ["3164835813", "大脑切片"],
  ["3167305545", "秋田六千"],
  ["3167805527", "晋江-糊里糊涂"],
  ["3174759514", "钙片家族"],
  ["3185385654", "挑战神回复"],
  ["3216940077", "宅腐搞笑排行"],
  ["3229125510", "小野妹子学吐槽"],
  ["3258218272", "美搭关注"],
  ["3640272825", "新番日剧"],
  ["3676435761", "我和表妹的极品事"],
  ["3704920351", "神测子"],
  ["3802068521", "情话段子大本营"],
  ["3922774869", "电影狙击手"],
  ["3929428825", "我和贱人的狗血经历"],
  ["3974469906", "辣条娘"],
  ["5075902902", "设计帝国"],
  ["5114879073", "耽美总部"],
  ["5121200687", "每日速报"],
  ["5126581695", "布丁娘"],
  ["5156515926", "厕所必修课"],
  ["5177397355", "派趣科技"],
  ["5181795803", "钙片帝"],
  ["5205919794", "热门美食精选"],
  ["5223108574", "超次元ACG研究社"],
  ["5295359076", "奇犽不开花"],
  ["5319457132", "快看漫画"],
  ["5386057519", "我的玛丽你的苏"],
  ["5426802496", "七次元研究所"],
  ["5571124284", "玩手机的小熊猫"],
];

__YAWF_WeiboSubscribeRuleList__({
  'id': '{82f42250-7be6-48c1-9381-59f50f24820f}',
  'name': '@Miss_Donuts 营销号黑名单',
  'icon': 'data:image/png;base64,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',
  'author': '黑名单由 <a href="http://weibo.com/u/5473010691">@Miss_Donuts</a> 整理及维护',
  'description': '微博营销号黑名单，针对盗图/盗梗营销号',
  'date': '2015-07-26',
  'homepage': 'https://tiansh.github.io/yawf-rules/5473010691/',
  'rules': {
    'original.blacklist': userlist.map(function (x) { return x[0]; }),
    'mention.blacklist': userlist.map(function (x) { return x[1]; }),
  }
});

