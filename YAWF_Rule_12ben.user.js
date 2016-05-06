// ==UserScript==
// @name        YAWF Rule 12ben
// @name:zh     无聊微博取关吧
// @name:zh-CN  无聊微博取关吧
// @name:en     No jabberwocky
// @namespace   https://github.com/weibo-list-12ben/
// @description 各种无聊转发
// @copyright   列表由 @12ben 整理
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAALxUExURUxpcfLw9rSkybWlyf38/aaSvfDs88q82ff1 eHZ6ebg7djR4v////39/t3W5svA2eTd69XM4M7D27ipy/b1 dbN4OTd68i81u7r8 Lb6sq 172uzralytnQ4sGz0djP48zA27qszPXz L zz66bwq2bwsW41Pf1 tXK4ebg7L6w0L wz8q92NPH4L w0MrA2M3A3MS31dzU5v///7CextXK4beoyuDZ6OHb6NvS5NfN4tLH4Mi61si71iQZJyYbKyodLigcLSUbKiUbKCUaKSseMCccLC0gNAAAACMXJiUZJyMZJigbLMKy0iIXJCkcLsS11CwfMbamygkACsy/2rioy7Oix8u92eXX9gsBDRcNGQUABgcACD4zRLCexBQJFRoOHdLF4se61hAEE7Kgxs7A3BUKGLWlySUaJ8m71xgLHcOz1MW21tDC4DAhNtjI6icaK8q82B0TICAVJMW31RQHF6qWwLGfxXhtgRIGFA0DD8Cx0CwfMqyZwgMABCAWIkM4TLutzMO10kg9T76vz9DB4trK7CwfM62cwrWkycOy2DcsPM293 DR8a cxLmpzTAmNLanyBcKGxAGERwQIDwxQYV3kEM4SR8TIrSjyE9DVr2vzdXG5Ma31s2/20w/U4d8kXRnfsW31Me42FNIWs/A397Q7dzM7su83NXG50Y6S9C86Ma13KeVwCMXJygdLLyszuPU876s09PC67uq0C4jMsi617qry9fJ5jMoOOLS9fDi/7qsyH5xiriqyMi52dLD5J2HtSYZK8Cu1KubwMGv2L2vymtfdcm62WRXbrqsyqmZu8/B22hbcW5iea hu4t/lpGEnKSXsuXY98u448m53r6t0Oze/M6/4nxxhena sW319/P8llOYX1viKKNu9nH8Mu64nFmeqOTtJaJpb xzdjL6LOlwqCUraeatpuOqKmdtl5SZ6CLudC/55SHn4V3k4h6lfTl/5yNrIF1irelzHprh9bF7ubY9qmavvzv/73/KhgAAAA dFJOUwAk8fME/h/yDJBdUwoHZ31VhY7PEnBzqEN/icP5kKen4bcVnvXowhfPNtTu0dreovT18gL7vuBAQKm059jnxSEO6QAACsFJREFUWMOUlnlQG9cdx WmvtvESdrUnsa1J9NJ0smdmXam16LVLmJX0q4ASQjdQgKBEBQkATYShyUkGYxkkBEO4Qw3 MDgg/sKPsD44KjvI01c33bqxHHPv/rernBI4qTpbxi0//w 73e93/tyON9iS9asfPft5dDe2bhh3ZolnP/L1q581RpNUb1Ws9lgMESfO3eOen392u/r/cq6N9KorF65Fbibew11dXVNdWmWc7LuP7zwk /h/tLKt6k6uRy4W Wttf21tbXpHYampqboJnd3yWvP/k/EC8spgxS4S2/ 61Ig3X0MmLve1xPwNlFui6U78bWnv9N9ya pZqlUbu0/33PjQWOLpnwfsHJNy7W5YV9Pq5OiqLJNL39HPVf1RtdL5ea2IfNstVBCqBw6k8mk1DlUBZKU6p03Br0ej9OZ OKqb/NfSfXWy839Q4ZrGFGgtJOkEBEiwMCPXakqwCZrBjtcHqes Nkn 2 g5CD7S20XbUQFybhiGCIAhgGGECFzCVtja3tNjcdV/NaT/H9HSaXmhIczA0QuBs/FcBznMQY MAEgpuiI8vnBtL4a15GffdP/t5aTUkP7 UfqAgQTCjAM50UsMgCBCEQl2ezzj7pcOd IYaXlZL050HOVMOHwcB5w5/P5IhGKikTgg2GAwHAl0eK9EHTJ9n6tDqss0pPmQHwRYQNpY/BwPvBFUS4wVAy/GEQKglURmgsXgn3BvWsW y/rtZ60tvUUETTwx HhKCrmLjYUhWEAAkITGv/ZYF/i9lcWAV6NPimtHbpK2DFBCvRnj ZyIxkDvwxDBIIQCBCSqD5wOLYs/ VF82tJksofPiJsbPgiNOwbE8P xTAULsyDBwpRRTR LJOV7X081SukU0nW8zNqUD94voh1z8vbujUKOOdF5eVBxJcETCn54kCyLPHFH3/ZAWl/20AB449X6XdkZ2fvCE1sjVpkALFASEFw9aE922JlOeFOrEiaqrcOXSS6gD/Xnssr3dJQXd2giczdEfUn1iAhj0FAApgIhDj9cbIsLhzCOlCBNoMtF3Q5IjTw4JYnq6PVP0XNzDYYyScTEERni9sDQvgpA/j95Xr50DUC5MaLyC0KdDaDZUZZ6lqvdO5MtTO zL8FAp8pA3H8n7Gy7W8y  9yvfSmNbMCDgDf9F5a9HBzu8 XccE5nXZp1iReVImtW5k68GESOuz9bTJZ8a YEkrl52cJEgwwC2ieGRkZmb3T6R lAleNsA95sCOMwWagMARSNXIgtiznOQB4o05e31NdAG4AGF8IaP IUCgc uoa/7TvrimTbSnaFdKnhiZgFiAEMAyqok/KYmEOy RT8ps1pEkIWshHdwBAxk4jgoNp2eWlOoKHqrjcKLvCGIop1WgGQoquqEhYBYFQKTyyLfb9xGWcNZfl5vgHEhqWUBQG5PIicLxKOe9t9pTqRSg5cH/n/KjbKnfPTJpSo0AOIARa8fnfYmPzV4MSWM2XGgkhzADlsoDsTDAvtOn2eHMNAIgkF/8T39afkJ6e0DM0H9LHiPmwk6pTBwDgOc67lFkeaFGRCM4AtrAAER8tKB9La51BbDye5OIlQ1NCWyCQ0NT7cE4hgmVEhOqGs2Wx QZOUvNUa6vGIRTw4CVI3ZIFi gwKiTIfOfw4OcKsM/Um MN8mN3bt81t7mTAkVGlAFUlHafC25/h7Ncbq51l uE2GOA/4urx49Pjrg6R1u9pToeJlBt/nNSQpFaVyG8F3Cf/0ACEwTDeCjucDD5Kc5ys6H22D7lIsB0c0Znp8/X4bpMaSSRfBxjAJUqO02U3qxvu6cnYQkQJX5iW3LsDzjLDRBggk0ASwgCajxglJ0ej2dseJcDEfN5agh4T0HSNt299tobh/RwMSH6wr9uS4YRGAwJw2EAykZQ1zk Pp7RPjU6FTjlAF2XbI6HALqwUHG9J723VIcgJAsoKWEiGB8GKSCPI2i923L//v3jI87O0Q5fUTYXZQC7HGRhoWo2Pl1amUuSAKDETgDAU5zLhqZ0ChQRAETihS4YjaAN  6NTwfmclFUwQIQslD1AQRUIJCgK0/cXwJS2GiJltdXgjbiC0XM CwbFYvEkarSjmj/rUg7lwVUIMJCNQMAmwMAKkrLDpZsep6z4WBWXQYYJHiZwwAwSGimCBWE5r11zko9Cygy4gsAHZYCHl5Jw56SuPxfcNYdzGrqOV1AsqMcBkxkZkbwcf3d2jpKkyp DKAlEKDJ5uEkDUZ5d1zc3mc4q7qzoq/MSezMZRKzgFz4pPJT7bc6xlwDer4knAJCKsIAXhdNOz47AwCrOUsoi9s7mqJEwCzzxexdMDKDQpzK8IzfsdkjFrpALgDAPqGVyInDcZu2L NwNna7ozOqVcxCYa4z6IJaragonPQ3Tw OqHk4M0i7FDTNpgCLSNPqIliC5 FKi7VQgzthEUAIEDB2p7Gx8aO5W77mUa /HIgFFTuJNB0uImgjTav sTsxbilcaWvLKMp/A2O2egSzVMfAUvVldNT0jcdfVWFCIQMAKSwAjPYquw7T7k9MXAqXKuePZZRzcJJd68aiK940ygnMMtY56G6R2HGBoODRUG1bg4IkafXcUH /RhIK2Yjju7WJOb9hn9Y4yuN12XQwBP3A9WF3h9frTR9z3W5E1V2iiYkJyen4BKkGhNgluRjf7y536PUO25Gj2ri/sA/LCk fs/vKNQIBT5u4ynRIU1Td0lK9a0CvTkVFmcC6Mis1pV0RoLV2XqWmPGRT6onJ3dpN b/8Ifs4rtc6u8f85WocJMFHQjuywVUwZusFjDIBKieyCzy2mVAdoFVGo46ushXE7D oTfz0mfDr/CNX0DPtuy1RMmXgs8pGzBVDQ6FUYT5EmRMAwcPBPVBKrp8p3pSzEACH83RxTbfrSiNRhbAEMdQkUFREhg0guADBZwVGIXF6t1ar/XCRSnpdW9NnyWgBEomRKKzEiQyLFFblAADzrgowmmg48/di7ac/Xyyy4pJdwbMXNJDAiCQRyuV TWSx5wsQukBzeP8Rbc7Sl74i83KCsqD/rIYohDKNx q0sNQSc9GwO5R5dkJz9Oi/i/M/XP1Vobh qawv6P kmlCyQhMqRVYqioDzYqHZcPToke3F/91BKfSmqvja0NCZazYvDI4BNq29IG1VpKYuWLudXXDwuSubjvTFHVTGbCyLrw0KTT/84PNWj3iQWqAZ0LY2SDMwaIAOS/PY mQ1MPz6Dipia64DTdgeFLp5zbkij3hwc98LCqB9hniPouObrsT1lXdgsx8EhMrC kNndj0IO lcFxPlB okgAGQ9ouKic442bF6SwcwC2H6Hx4XJrWhoUHpa77P3NvsGVkXPDktKiEhKn5ycHSkd/O3uNVH4 LK4 6zooY/Dwtyp0u6rBxkRNfmh0c np3fvdXZz89lQvf8sx9Or1m9qby8PKXsrSIbqq0sHChG8DGtDQMZEdr1bvPVLSmnHz8 ndK/5t3Dw50pKSlhtfdVsXT7eDl4kXgigkxlfaFBINC/5XBXV9fRTVuCwkAgpey Kj8HVr/zcCA7QkRUq6 2vBNkRDoQzASBsPJaVlZhUQ5coQf0hzEy30JIK6yvozwMqL zc2Z5bVltnLCUOd4 Ky KI0Dhyc0vJ83MxMzMxCQsx8/NhksjAJ8HSJWaTW7gAAAAAElFTkSuQmCC
// @include     http://www.weibo.com/*
// @include     http://weibo.com/*
// @include     http://d.weibo.com/*
// @include     http://s.weibo.com/*
// @exclude     http://weibo.com/a/bind/*
// @exclude     http://weibo.com/nguide/interests
// @require     https://tiansh.github.io/yawf-rules/YAWF_Rule_Base.js
// @homepageURL https://github.com/weibo-list-12ben/list
// @downloadURL https://raw.githubusercontent.com/weibo-list-12ben/list/master/YAWF_Rule_12ben.user.js
// @updateURL   https://raw.githubusercontent.com/weibo-list-12ben/list/master/YAWF_Rule_12ben.meta.js
// @version     2016.03.01.3
// @grant       GM_info
// @grant       unsafeWindow
// @run-at      document-start
// ==/UserScript==

var userlist = [
  ["81824985", "这里是日本"],
  ["1793620870", "邓喵叽"],
  ["2219088342", "全球创意"],
  ["1768008414", "腐宅姬"],
  
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
  'name': '无聊微博取关吧',
  'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAALxUExURUxpcfLw9rSkybWlyf38/aaSvfDs88q82ff1 eHZ6ebg7djR4v////39/t3W5svA2eTd69XM4M7D27ipy/b1 dbN4OTd68i81u7r8 Lb6sq 172uzralytnQ4sGz0djP48zA27qszPXz L zz66bwq2bwsW41Pf1 tXK4ebg7L6w0L wz8q92NPH4L w0MrA2M3A3MS31dzU5v///7CextXK4beoyuDZ6OHb6NvS5NfN4tLH4Mi61si71iQZJyYbKyodLigcLSUbKiUbKCUaKSseMCccLC0gNAAAACMXJiUZJyMZJigbLMKy0iIXJCkcLsS11CwfMbamygkACsy/2rioy7Oix8u92eXX9gsBDRcNGQUABgcACD4zRLCexBQJFRoOHdLF4se61hAEE7Kgxs7A3BUKGLWlySUaJ8m71xgLHcOz1MW21tDC4DAhNtjI6icaK8q82B0TICAVJMW31RQHF6qWwLGfxXhtgRIGFA0DD8Cx0CwfMqyZwgMABCAWIkM4TLutzMO10kg9T76vz9DB4trK7CwfM62cwrWkycOy2DcsPM293 DR8a cxLmpzTAmNLanyBcKGxAGERwQIDwxQYV3kEM4SR8TIrSjyE9DVr2vzdXG5Ma31s2/20w/U4d8kXRnfsW31Me42FNIWs/A397Q7dzM7su83NXG50Y6S9C86Ma13KeVwCMXJygdLLyszuPU876s09PC67uq0C4jMsi617qry9fJ5jMoOOLS9fDi/7qsyH5xiriqyMi52dLD5J2HtSYZK8Cu1KubwMGv2L2vymtfdcm62WRXbrqsyqmZu8/B22hbcW5iea hu4t/lpGEnKSXsuXY98u448m53r6t0Oze/M6/4nxxhena sW319/P8llOYX1viKKNu9nH8Mu64nFmeqOTtJaJpb xzdjL6LOlwqCUraeatpuOqKmdtl5SZ6CLudC/55SHn4V3k4h6lfTl/5yNrIF1irelzHprh9bF7ubY9qmavvzv/73/KhgAAAA dFJOUwAk8fME/h/yDJBdUwoHZ31VhY7PEnBzqEN/icP5kKen4bcVnvXowhfPNtTu0dreovT18gL7vuBAQKm059jnxSEO6QAACsFJREFUWMOUlnlQG9cdx WmvtvESdrUnsa1J9NJ0smdmXam16LVLmJX0q4ASQjdQgKBEBQkATYShyUkGYxkkBEO4Qw3 MDgg/sKPsD44KjvI01c33bqxHHPv/rernBI4qTpbxi0//w 73e93/tyON9iS9asfPft5dDe2bhh3ZolnP/L1q581RpNUb1Ws9lgMESfO3eOen392u/r/cq6N9KorF65Fbibew11dXVNdWmWc7LuP7zwk /h/tLKt6k6uRy4W Wttf21tbXpHYampqboJnd3yWvP/k/EC8spgxS4S2/ 61Ig3X0MmLve1xPwNlFui6U78bWnv9N9ya pZqlUbu0/33PjQWOLpnwfsHJNy7W5YV9Pq5OiqLJNL39HPVf1RtdL5ea2IfNstVBCqBw6k8mk1DlUBZKU6p03Br0ej9OZ OKqb/NfSfXWy839Q4ZrGFGgtJOkEBEiwMCPXakqwCZrBjtcHqes Nkn 2 g5CD7S20XbUQFybhiGCIAhgGGECFzCVtja3tNjcdV/NaT/H9HSaXmhIczA0QuBs/FcBznMQY MAEgpuiI8vnBtL4a15GffdP/t5aTUkP7 UfqAgQTCjAM50UsMgCBCEQl2ezzj7pcOd IYaXlZL050HOVMOHwcB5w5/P5IhGKikTgg2GAwHAl0eK9EHTJ9n6tDqss0pPmQHwRYQNpY/BwPvBFUS4wVAy/GEQKglURmgsXgn3BvWsW y/rtZ60tvUUETTwx HhKCrmLjYUhWEAAkITGv/ZYF/i9lcWAV6NPimtHbpK2DFBCvRnj ZyIxkDvwxDBIIQCBCSqD5wOLYs/ VF82tJksofPiJsbPgiNOwbE8P xTAULsyDBwpRRTR LJOV7X081SukU0nW8zNqUD94voh1z8vbujUKOOdF5eVBxJcETCn54kCyLPHFH3/ZAWl/20AB449X6XdkZ2fvCE1sjVpkALFASEFw9aE922JlOeFOrEiaqrcOXSS6gD/Xnssr3dJQXd2giczdEfUn1iAhj0FAApgIhDj9cbIsLhzCOlCBNoMtF3Q5IjTw4JYnq6PVP0XNzDYYyScTEERni9sDQvgpA/j95Xr50DUC5MaLyC0KdDaDZUZZ6lqvdO5MtTO zL8FAp8pA3H8n7Gy7W8y  9yvfSmNbMCDgDf9F5a9HBzu8 XccE5nXZp1iReVImtW5k68GESOuz9bTJZ8a YEkrl52cJEgwwC2ieGRkZmb3T6R lAleNsA95sCOMwWagMARSNXIgtiznOQB4o05e31NdAG4AGF8IaP IUCgc uoa/7TvrimTbSnaFdKnhiZgFiAEMAyqok/KYmEOy RT8ps1pEkIWshHdwBAxk4jgoNp2eWlOoKHqrjcKLvCGIop1WgGQoquqEhYBYFQKTyyLfb9xGWcNZfl5vgHEhqWUBQG5PIicLxKOe9t9pTqRSg5cH/n/KjbKnfPTJpSo0AOIARa8fnfYmPzV4MSWM2XGgkhzADlsoDsTDAvtOn2eHMNAIgkF/8T39afkJ6e0DM0H9LHiPmwk6pTBwDgOc67lFkeaFGRCM4AtrAAER8tKB9La51BbDye5OIlQ1NCWyCQ0NT7cE4hgmVEhOqGs2Wx QZOUvNUa6vGIRTw4CVI3ZIFi gwKiTIfOfw4OcKsM/Um MN8mN3bt81t7mTAkVGlAFUlHafC25/h7Ncbq51l uE2GOA/4urx49Pjrg6R1u9pToeJlBt/nNSQpFaVyG8F3Cf/0ACEwTDeCjucDD5Kc5ys6H22D7lIsB0c0Znp8/X4bpMaSSRfBxjAJUqO02U3qxvu6cnYQkQJX5iW3LsDzjLDRBggk0ASwgCajxglJ0ej2dseJcDEfN5agh4T0HSNt299tobh/RwMSH6wr9uS4YRGAwJw2EAykZQ1zk Pp7RPjU6FTjlAF2XbI6HALqwUHG9J723VIcgJAsoKWEiGB8GKSCPI2i923L//v3jI87O0Q5fUTYXZQC7HGRhoWo2Pl1amUuSAKDETgDAU5zLhqZ0ChQRAETihS4YjaAN  6NTwfmclFUwQIQslD1AQRUIJCgK0/cXwJS2GiJltdXgjbiC0XM CwbFYvEkarSjmj/rUg7lwVUIMJCNQMAmwMAKkrLDpZsep6z4WBWXQYYJHiZwwAwSGimCBWE5r11zko9Cygy4gsAHZYCHl5Jw56SuPxfcNYdzGrqOV1AsqMcBkxkZkbwcf3d2jpKkyp DKAlEKDJ5uEkDUZ5d1zc3mc4q7qzoq/MSezMZRKzgFz4pPJT7bc6xlwDer4knAJCKsIAXhdNOz47AwCrOUsoi9s7mqJEwCzzxexdMDKDQpzK8IzfsdkjFrpALgDAPqGVyInDcZu2L NwNna7ozOqVcxCYa4z6IJaragonPQ3Tw OqHk4M0i7FDTNpgCLSNPqIliC5 FKi7VQgzthEUAIEDB2p7Gx8aO5W77mUa /HIgFFTuJNB0uImgjTav sTsxbilcaWvLKMp/A2O2egSzVMfAUvVldNT0jcdfVWFCIQMAKSwAjPYquw7T7k9MXAqXKuePZZRzcJJd68aiK940ygnMMtY56G6R2HGBoODRUG1bg4IkafXcUH /RhIK2Yjju7WJOb9hn9Y4yuN12XQwBP3A9WF3h9frTR9z3W5E1V2iiYkJyen4BKkGhNgluRjf7y536PUO25Gj2ri/sA/LCk fs/vKNQIBT5u4ynRIU1Td0lK9a0CvTkVFmcC6Mis1pV0RoLV2XqWmPGRT6onJ3dpN b/8Ifs4rtc6u8f85WocJMFHQjuywVUwZusFjDIBKieyCzy2mVAdoFVGo46ushXE7D oTfz0mfDr/CNX0DPtuy1RMmXgs8pGzBVDQ6FUYT5EmRMAwcPBPVBKrp8p3pSzEACH83RxTbfrSiNRhbAEMdQkUFREhg0guADBZwVGIXF6t1ar/XCRSnpdW9NnyWgBEomRKKzEiQyLFFblAADzrgowmmg48/di7ac/Xyyy4pJdwbMXNJDAiCQRyuV TWSx5wsQukBzeP8Rbc7Sl74i83KCsqD/rIYohDKNx q0sNQSc9GwO5R5dkJz9Oi/i/M/XP1Vobh qawv6P kmlCyQhMqRVYqioDzYqHZcPToke3F/91BKfSmqvja0NCZazYvDI4BNq29IG1VpKYuWLudXXDwuSubjvTFHVTGbCyLrw0KTT/84PNWj3iQWqAZ0LY2SDMwaIAOS/PY mQ1MPz6Dipia64DTdgeFLp5zbkij3hwc98LCqB9hniPouObrsT1lXdgsx8EhMrC kNndj0IO lcFxPlB okgAGQ9ouKic442bF6SwcwC2H6Hx4XJrWhoUHpa77P3NvsGVkXPDktKiEhKn5ycHSkd/O3uNVH4 LK4 6zooY/Dwtyp0u6rBxkRNfmh0c np3fvdXZz89lQvf8sx9Or1m9qby8PKXsrSIbqq0sHChG8DGtDQMZEdr1bvPVLSmnHz8 ndK/5t3Dw50pKSlhtfdVsXT7eDl4kXgigkxlfaFBINC/5XBXV9fRTVuCwkAgpey Kj8HVr/zcCA7QkRUq6 2vBNkRDoQzASBsPJaVlZhUQ5coQf0hzEy30JIK6yvozwMqL zc2Z5bVltnLCUOd4 Ky KI0Dhyc0vJ83MxMzMxCQsx8/NhksjAJ8HSJWaTW7gAAAAAElFTkSuQmCC',
  'author': '黑名单由 <a href="http://weibo.com/u/1146215435">@12ben</a> 整理及维护',
  'description': '转发有好远才怪',
  'date': '2016-03-01',
  'homepage': 'https://github.com/weibo-list-12ben/list',
  'rules': {
    'original.blacklist': userlist.map(function (x) { return x[0]; }),
    'mention.blacklist': userlist.map(function (x) { return x[1]; }),
  }
});

