
import React, {Component} from 'react';
import {StyleSheet,View, Text,ScrollView,TouchableOpacity,RefreshControl} from 'react-native';
import {SixrandomModule} from './SixrandomLib/SixrandomModule'
import EightrandomModule from './EightrandomLib/EightrandomModule'

var NKyuusei = new Array(-1,-1,-1);
var solarMonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31); 
var KyuuseiJDF= new Array(1,-3,1,7,-9,-3,1,7,-9,7,-3,1,-3,1,7,-3,1,-3,1,7,-9,-3,1,7,-9,-3,1,7,-9,7,-3,1,1,7,-3,1,-3,1,7,-9,-9); 
var moonglk=new Array('孟春','仲春','季春','孟夏','仲夏','季夏','孟秋','仲秋','季秋','孟冬','仲冬','季冬');
var SukuDofs = 12;
var Sukuyou2 = new Array(
  '角木蛟-吉','亢金龙-凶','氐土貉-凶','房日兔-吉','心月狐-凶','尾火虎-吉','箕水豹-吉',
  '斗木獬-吉','牛金牛-凶','女土蝠-凶','虚日鼠-凶','危月燕-凶','室火猪-吉','壁水貐-吉',
  '奎木狼-凶','娄金狗-吉','胃土雉-吉','昴日鸡-凶','毕月乌-吉','觜火猴-凶','参水猿-凶',
  '井木犴-吉','鬼金羊-凶','柳土獐-凶','星日马-凶','张月鹿-吉','翼火蛇-凶','轸水蚓-吉'); 
var KyuuseiJD = new Array(
  2404030,2404600,2404810,2408800,2409010,2413000,2413210,2417200,2417410,2421220,
  2421400,2421610,2425420,2425630,2429620,2429800,2430010,2433820,2434030,2438020,
  2438230,2442220,2442430,2446420,2446630,2450620,2450830,2454820,2455030,2458840,
  2459020,2459230,2463250,2467240,2467420,2467630,2471440,2471650,2475640,2475850,
  2477650); 
var KyuuseiName3 = new Array(
'门中太乙明，星官号贪狼，赌彩财喜旺，婚姻大吉昌。出入无阻挡，参谒见贤良，此行三五里，黑衣别阴阳。',
'门前见摄提，百事必忧疑，相生犹自可，相克祸必临。死门并相会，老妇哭悲啼，求谋并吉事，尽皆不相宜。只可藏隐遁，若动伤身疾。',
'出入会轩辕，凡事必缠牵，相生全不美，相克更忧煎。远行多不利，博彩尽输钱，九天玄女法，句句不虚言。',
'招摇号木星，当之事莫行，相克行人阻，阴人口舌迎。梦寐多惊惧，屋响斧自鸣，阴阳消息理，万法弗违情。',
'五鬼为天符，当门阴女谋，相克无好事，行路阻中途。走失难寻觅，道逢有尼姑，此星当门值，万事有灾除。',
'神光跃青龙，财气喜重重，投入有酒食，赌彩最兴隆。更逢相生旺，休言克破凶，见贵安营寨，万事总吉同。',
'吾将为咸池，当之尽不宜，出入多不利，相克有灾情。赌彩全输尽，求财空手回，仙人真妙语，愚人莫与知，动用虚惊退，反复逆风吹。',
'坐临太阴星，百祸不相侵，求谋悉成就，知交有觅寻。回风归来路，恐有殃伏起，密语中记取，慎乎莫轻行。', 
'迎来天乙星，相逢百事兴，运用和合庆，茶酒喜相迎。求谋并嫁娶，好合有天成。祸福如神验，吉凶甚分明。'); 
var Sukuyou3 = new Array(
'角星造作主荣昌，外进田财及女郎，嫁娶婚姻出贵子，文人及第见君王，惟有埋葬不可用，叁年之後主瘟疫，起工修建坟基地，当前立见主人凶。释义：角星造作则可荣昌，可置田产及早办喜事。如果用角星来办嫁娶则可出贵子，读书人的功名可一帆风顺。但是不可用角星行埋葬，否则叁年之後有瘟疫。如果用角星起工修建坟墓或地基，则主人不利。',
'亢星造作长房当，十日之中主有殃，田地消磨官失职，接运定是虎狼伤，嫁娶婚姻用此日，儿孙新妇守空房，埋葬若还用此日，当时害祸主重伤。释义：亢星造作则长房在十日之中有灾殃，祖田不保且会失去官职，及会受小人所伤。如果用亢星行嫁娶，则儿孙新妇要守空房。如果用亢星行埋葬则有灾祸、重伤。',
'氐星造作主灾凶，费尽田园仓库空，埋葬不可用此日，悬绳吊颈祸重重，若是婚姻离别散，夜招浪子入房中，行船必定遭沉没，更生聋哑子孙穷。释义：氐星造作会有灾殃，田园财产一时空。用氐星进行埋葬，则有人会悬吊自缢、灾祸接二连叁。用氐星行婚礼则会离别、妇人不贞，航行又不利，更会生产聋哑的子孙，而闹得家庭更穷。',
'房星造作田园进，钱财牛马遍山岗，更招外处田庄宅，荣华富贵福禄康，埋葬若然用此日，高官进职拜君王，嫁娶嫦娥至月殿，叁年抱子至朝堂。释义：房星造作则财源滚滚来，享受荣华富贵、有福禄，并且身体健康。用房星行埋葬则仕途平稳，嫁娶用此，日婚姻美满，叁年得贵子。',
'心星造作大为凶，更遭刑讼狱囚中，忤逆官非宅产退，埋葬卒暴死相从，婚姻若是用此日，子死儿亡泪满胸，叁年之内连遭祸，事事教君没始终。释义：心星造作则大凶，有囚狱之灾，忤逆长辈、惹官非，损失宅产。埋葬则大凶，用於婚姻则伤子，凶事接二连叁，令人寝食难安。',
'尾星造作主天恩，富贵荣华福禄增，招财进宝兴家宅，和合婚姻贵子孙，埋葬若能依此日，男清女正子孙兴，开门放水招田宅，代代公侯远播名。释义：尾星造作可荣华富贵、福禄、财源滚滚而来。行婚姻则大吉利、子孙有利，有贵气。用尾星行埋葬则子孙兴旺，地理方面的开门放水则财源滚滚而来，并且有名望。',
'箕星造作主高强，岁岁年年大吉昌，埋葬修坟大吉利，田蚕牛马遍山岗，开门放水招田宅，箧满金银谷满仓，福荫高官加禄位，六亲丰荣乐安康。释义：箕星造作可年年大吉昌，埋葬修坟也大吉利，风水方面的开门放水，则可升官，使财源滚滚而来，六亲丰足，生活过得快乐平安且身体健康，仕途平稳。',
'斗星造作主招财，文武官员位鼎台，田宅家财千万进，坟堂修辑贵富来，开门放水招牛马，旺蚕男女主和谐，遇此吉宿来照护，时支福庆永无灾。释义：斗星造作可招财、有利於仕途，家业欣欣向荣。修辑坟地可招富贵，开门放水则有进财，可使家庭和睦，有福而无灾。',
'牛星造作主灾危，九横叁灾不可推，家宅不安人口退，田蚕不利主人衰，嫁娶婚姻皆自损，金银财谷渐无之，若是开门并放水，牛猪羊马亦伤悲。释义：牛星造作有灾厄，天灾横祸不能免，家庭不安而且伤人口，事业不利。如果行婚姻则不利，钱财渐退，假若开门放水则不利六畜。',
'女星造作损婆娘，兄弟相嫌似虎狼，埋葬生灾逢鬼怪，颠邪疾病主瘟惶，为事遭官财失散，泻利留连不可当，开门放水用此日，全家财散主离乡。释义：女星造作则不利妇女，恐会损人口。兄弟互相猜忌，感情不和睦，好比水火不能相容。如果行埋葬则容易招鬼怪，有怪病发生，作事易惹事生非而失财。要是开门放水，则家庭破散，离乡别井。',
'虚星造作主灾殃，男女孤眠不一双，内乱风声无礼节，儿孙媳妇伴人床，开门放水遭灾祸，虎咬蛇伤又卒亡，叁叁五五连年病，家破人亡不可当。释义：虚星造作则有灾殃，男女相克无法成双。家庭不和睦，而且儿孙媳妇都不守节操，甚至乱了伦理。假如开门放水更有灾祸，损人口，有伤亡，疾病接二连叁，直至家破人亡。',
'危星不可造高楼，自遭刑吊见血光，叁年孩子遭水厄，後生出外永不还，埋葬若还逢此日，周年百日取高堂，叁年两载一悲伤，开门放水到官堂。释义：危星造作则有刑吊及血光之灾，叁年内孩子会遭水厄，损人口，年青出外不归家。若行埋葬则更悲伤，周年或百日年长的有灾厄，要是开门放水，则会上官堂 (打官司) 。',
'室星修造进田牛，儿孙代代近王侯，家贵荣华天上至，寿如彭祖八千秋，开门放水招财帛，和合婚姻生贵儿，埋葬若能依此日，门庭兴旺福无休。释义：室星修造则大吉利，富贵荣华，而且财源广进，长寿。开门放水则可招财进宝，行婚礼则可生贵子。要是行埋葬则子孙兴旺、福禄无穷。',
'璧星造作主增财，丝帛大熟福滔天，奴婢自来人口进，开门放水出英贤，埋葬招财官品进，家中诸事乐陶然，婚姻吉利主贵子，早播名誉着祖鞭。释义：璧星造作可招进财、财源广进，事业有成。开打放水则後代贤能，埋葬则可招财，并且有利於仕途，家庭生活幸福美满。如果行婚礼则大吉利，早生贵子而有名声。',
'奎星造作得祯祥，家内荣和大吉昌，若是埋葬阴卒死，当年定主两叁伤，看看军令刑伤到，重重官事主瘟惶，开门放水遭灾祸，叁年两次损儿郎。释义：奎星造作算得了祯祥，可使家内繁荣而和睦。但是不可用来埋葬，否则一年内必有伤亡，而且有官事及怪病发生。要是开门放水则有灾祸，对儿子不利。',
'娄星修造起门庭，财旺家和事事兴，外进钱财百日进，一家兄弟播高名，婚姻进益生贵子，玉帛金银箱满盈，放水开门皆吉利，男荣女贵寿康宁。释义：娄星造作则可使家业兴旺，财源广进，兄弟和睦有名望。行婚礼则早生贵子，要是开门放水则身体健康而长寿，经济很好。',
'胃星造作事如何，家贵荣华喜气多，埋葬贵临官禄位，夫妇齐眉永保康，婚姻遇此家富贵，叁灾九祸不逢他，从此门前多吉庆，儿孙代代拜金阶。释义：胃星造作则荣华富贵，喜气洋洋。行埋葬则有利於仕途，夫妇可白首偕老。行婚礼则可使家内富贵，儿孙代代有名望。',
'昴星造作进田牛，埋葬官灾不得休，重丧二日叁人死，尽卖田园不记增，开门放水招灾祸，叁岁孩儿白了头，婚姻不可逢此日，死别生离是可愁。释义：昴星造作可使家业兴盛。但埋葬则常有官灾，且会继续死人，更会变卖田产。开门放水则会招灾祸，孩童会得怪病，行婚礼则更悲哀，会有死别生离。',
'毕星造作主光前，买得田园有馀钱，埋葬此日添官职，田粮大熟永丰年，开门放水多吉庆，合家人口得安然，婚姻若得逢此日，生得孩儿福寿全。释义：毕星造作则财源广进，行埋葬则有利於仕途，事业兴旺，开门放水，则合家欢乐，行婚礼则早生贵子而福寿双全。',
'觜星造作有徒刑，叁年必定主伶丁，埋葬卒死多因此，取定寅年使杀人，叁丧不止皆由此，一人药毒二人身，家门田地皆退败，仓库金银化作尘。释义：觜星造作则有刑害，会变成伶仃。假若行埋葬则容易有暴死的现象，多数应於寅年，灾祸不断，直至使田地退散而破家。',
'参星造作旺人家，文星照耀大光华，只因造作田财旺，埋葬招疾哭黄沙，开门放水加官职，房房子孙见田加，婚姻许遁遭刑克，男女朝开幕落花。释义：参星造作可旺人家，文星高照，并对田产有利，但是行埋葬则大凶。开门放水则有利於仕途，与田产及子孙兴旺。但是行婚礼则大凶，会遭刑克，感情无法和睦。',
'井星造作旺粮田，金榜题名第一光，埋葬须防惊卒死，狂颠风疾入黄泉，开门放水招财帛，牛马猪羊旺莫言，贵人田塘来入宅，儿孙兴旺有馀钱。释义：井星造作则财源广进，可金榜题名。埋葬则不利，容易得怪病而命归黄泉。开门放水可招财进宝，贵人重重，儿孙兴旺。',
'鬼星起造卒人亡，堂前不见主人郎，埋葬此日官禄至，儿孙代代近君王，开门放水须伤死，嫁娶夫妻不久长，修土建墙伤产女，手扶双女泪汪汪。释义：鬼星造作则大凶，有伤人口。埋葬用此日则可加冠进禄，对儿孙的仕途有利，但是开门放水则有伤人口，要是行婚礼夫修土建墙也大凶。',
'柳星造作主遭官，昼夜偷闭不暂安，埋葬瘟惶多疾病，田园退尽守冬寒，开门放水遭聋瞎，腰佗背曲似弓弯，更有捧刑宜谨慎，妇人随客走盘桓，释义：柳星造作则有官事，无日安宁，埋葬则多疾病，并且田产退败。开门放水则会产生耳聋及瞎眼的毛病，甚至弯背，严重的话甚至遭刑打，妇人不守妇道。',
'星宿日好造新房，进职加官近帝王，不可埋葬并放水，凶星临位女人亡，生离死别无心恋，要自归休别嫁郎，孔子九曲殊难度，放水开门天命伤。释义：星星造作则有利於仕途。但不可埋葬与放水，否则大凶，会遭生离死别之祸。',
'张星日好造龙轩，年年并见进庄田，埋葬不久升官职，代代为官近帝前，开门放水招财帛，婚姻和合福绵绵，田粮人满仓库满，百般顺意自安然。释义：张星造作则财源广进，埋葬则有利於仕途。开门放水则可招财进宝，行婚礼则夫妻恩爱和合福绵绵，事事如意，安然自得。',
'翼星不利架高堂，叁年二载见瘟惶，埋葬若还逢此日，子孙必定走他乡，婚姻此日不宜利，归家定是不相当，开门放水家须破，少女恋花贪外郎。释义：翼星修造则容易得怪病，要是行埋葬则子孙远走他乡。行婚礼则不利，妇女不守妇道。开门放水则家破，少女会淫奔。',
'轸星临水造龙宫，代代为官受皇封，富贵荣华增受禄，库满仓盈自昌隆，埋葬文昌来照助，宅舍安宁不见凶，更有为官沾帝宠，婚姻龙子入龙宫。释义：轸星造作则有利於仕途，荣华富贵，增福寿，财源广进。行埋葬则宅舍安宁。'); 

  var moonglk=new Array('孟春','仲春','季春','孟夏','仲夏','季夏','孟秋','仲秋','季秋','孟冬','仲冬','季冬');
  var Gan2=new Array()
  Gan2={
    "甲":'甲不开仓，财物耗亡',
    "乙":'乙不栽植，千株不长',
    "丙":'丙不修灶，必见灾殃',
    "丁":'丁不剃头，头主生疮',
    "戊":'戊不受田，田主不祥',
    "己":'己不破券，二比并亡',
    "庚":'庚不经络，织机虚张',
    "辛":'辛不合酱，主人不尝',
    "壬":'壬不决水，更难提防',
    "癸":'癸不词讼，理弱敌强'};
  var Zhi2=new Array()
  Zhi2={
    "子":'子不问卜，自惹祸殃',
    "丑":'丑不冠带，主不还乡',
    "寅":'寅不祭祀，神鬼不尝',
    "卯":'卯不穿井，水泉不香',
    "辰":'辰不哭泣，必主重丧',
    "巳":'巳不远行，财物伏藏',
    "午":'午不苫盖，屋主更张',
    "未":'未不服药，毒气入肠',
    "申":'申不安床，鬼祟入房',
    "酉":'酉不宴客，醉坐颠狂',
    "戌":'戌不吃犬，作怪上床',
    "亥":'亥不嫁娶，不利新郎'};
  var jc=new Array()
  jc={
    "建":'建宜出行，不可开仓',
    "除":'除可服药，针炙宜良',
    "满":'满可肆市，服药遭殃',
    "平":'平可涂泥，安机吉昌',
    "定":'定宜进畜，入学名扬',
    "执":'执可捕捉，盗贼难藏',
    "破":'破宜治病，主必安康',
    "危":'危可捕鱼，不利行船',
    "成":'成可入学，争讼不强',
    "收":'收宜纳财，却忌安葬',
    "开":'开可求仕，安葬不详',
    "闭":'闭不竖造。只许安床'}
  var jcluck=new Array()
  jcluck={
    '建':'宜:出行.上任.会友.上书.见工.|忌:动土.开仓.嫁娶.纳采',
    '除':'宜:除服.疗病.出行.拆卸.入宅.|忌:求官.上任.开张.搬家.探病',
    '满':'宜:祈福.祭祀.结亲.开市.交易.|忌:服药.求医.栽种.动土.迁移',
    '平':'宜:祭祀.修坟.涂泥.余事勿取.|忌:移徙.入宅.嫁娶.开市.安葬',
    '定':'宜:交易.立券.会友.签约.纳畜.|忌:种植.置业.卖田.掘井.造船',
    '执':'宜:祈福.祭祀.求子.结婚.立约.|忌:开市.交易.搬家.远行',
    '破':'宜:求医.赴考.祭祀.余事勿取.|忌:动土.出行.移徙.开市.修造',
    '危':'宜:经营.交易.求官.纳畜.动土.|忌:登高.行船.安床.入宅.博彩',
    '成':'宜:祈福.入学.开市.求医.成服.|忌:词讼.安门.移徙',
    '收':'宜:祭祀.求财.签约.嫁娶.订盟.|忌:开市.安床.安葬.入宅.破土',
    '开':'宜:疗病.结婚.交易.入仓.求职.|忌:安葬.动土.针灸',
    '闭':'宜:祭祀.交易.收财.安葬.|忌:宴会.安床.出行.嫁娶.移徙',
  }


  var zrxName = new Array()
  zrxName["子"] = zrxName["午"] = {"申":"青龙(黄道日)","酉":"明堂(黄道日)","戌":'天刑(黑道日)',"亥":'朱雀(黑道日)',"子":'金匮(黄道日)',"丑":'天德(黄道日)',
                                  "寅":'白虎(黑道日)',"卯":'玉堂(黄道日)',"辰":'天牢(黑道日)',"巳":'玄武(黑道日)',"午":'司命(黄道日)',"未":'勾陈(黑道日)'};

  zrxName["寅"] = zrxName["申"] = {"子":"青龙(黄道日)","丑":"明堂(黄道日)","寅":'天刑(黑道日)',"卯":'朱雀(黑道日)',"辰":'金匮(黄道日)',"巳":'天德(黄道日)',
                                  "午":'白虎(黑道日)',"未":'玉堂(黄道日)',"申":'天牢(黑道日)',"酉":'玄武(黑道日)',"戌":'司命(黄道日)',"亥":'勾陈(黑道日)'};

  zrxName["卯"] = zrxName["酉"] = {"寅":"青龙(黄道日)","卯":"明堂(黄道日)","辰":'天刑(黑道日)',"巳":'朱雀(黑道日)',"午":'金匮(黄道日)',"未":'天德(黄道日)',
                                  "申":'白虎(黑道日)',"酉":'玉堂(黄道日)',"戌":'天牢(黑道日)',"亥":'玄武(黑道日)',"子":'司命(黄道日)',"丑":'勾陈(黑道日)'};

  zrxName["辰"] = zrxName["戌"] = {"辰":"青龙(黄道日)","巳":"明堂(黄道日)","午":'天刑(黑道日)',"未":'朱雀(黑道日)',"申":'金匮(黄道日)',"酉":'天德(黄道日)',
                                  "戌":'白虎(黑道日)',"亥":'玉堂(黄道日)',"子":'天牢(黑道日)',"丑":'玄武(黑道日)',"寅":'司命(黄道日)',"卯":'勾陈(黑道日)'};

  zrxName["巳"] = zrxName["亥"] = {"午":"青龙(黄道日)","未":"明堂(黄道日)","申":'天刑(黑道日)',"酉":'朱雀(黑道日)',"戌":'金匮(黄道日)',"亥":'天德(黄道日)',
                                  "子":'白虎(黑道日)',"丑":'玉堂(黄道日)',"寅":'天牢(黑道日)',"卯":'玄武(黑道日)',"辰":'司命(黄道日)',"巳":'勾陈(黑道日)'};

  zrxName["丑"] = zrxName["未"] = {"戌":"青龙(黄道日)","亥":"明堂(黄道日)","子":'天刑(黑道日)',"丑":'朱雀(黑道日)',"寅":'金匮(黄道日)',"卯":'天德(黄道日)',
                                  "辰":'白虎(黑道日)',"巳":'玉堂(黄道日)',"午":'天牢(黑道日)',"未":'玄武(黑道日)',"申":'司命(黄道日)',"酉":'勾陈(黑道日)'};


  var jcName= {
    "寅":['开','闭','建','除','满','平','定','执','破','危','成','收'],
    "卯":['收','开','闭','建','除','满','平','定','执','破','危','成'], 
    "辰":['成','收','开','闭','建','除','满','平','定','执','破','危'],
    "巳":['危','成','收','开','闭','建','除','满','平','定','执','破'],
    "午":['破','危','成','收','开','闭','建','除','满','平','定','执'], 
    "未":['执','破','危','成','收','开','闭','建','除','满','平','定'],
    "申":['定','执','破','危','成','收','开','闭','建','除','满','平'], 
    "酉":['平','定','执','破','危','成','收','开','闭','建','除','满'],
    "戌":['满','平','定','执','破','危','成','收','开','闭','建','除'], 
    "亥":['除','满','平','定','执','破','危','成','收','开','闭','建'],
    "子":['建','除','满','平','定','执','破','危','成','收','开','闭'], 
    "丑":['闭','建','除','满','平','定','执','破','危','成','收','开'],
  }
  var Sukuyou2 = new Array(
    '角木蛟-吉','亢金龙-凶','氐土貉-凶','房日兔-吉','心月狐-凶','尾火虎-吉','箕水豹-吉',
    '斗木獬-吉','牛金牛-凶','女土蝠-凶','虚日鼠-凶','危月燕-凶','室火猪-吉','壁水貐-吉',
    '奎木狼-凶','娄金狗-吉','胃土雉-吉','昴日鸡-凶','毕月乌-吉','觜火猴-凶','参水猿-凶',
    '井木犴-吉','鬼金羊-凶','柳土獐-凶','星日马-凶','张月鹿-吉','翼火蛇-凶','轸水蚓-吉'); 
  var KyuuseiName = new Array('一白','二黒','三碧','四緑','五黄','六白','七赤','八白','九紫'); 
  var KyuuseiName2= new Array(
    '-太乙星(水)-吉神','-摄提星(土)-凶神','-轩辕星(木)-安神',
    '-招摇星(木)-安神','-天符星(土)-凶神','-青龙星(金)-吉神',
    '-咸池星(金)-凶神','-太阴星(土)-吉神','-天乙星(火)-吉神'); 

var luckytime = new Array()
luckytime["甲子"]=["甲子 金匮 吉","乙丑 天德贵人 吉","丙寅 白虎 凶","丁卯 玉堂天开吉神 吉","戊辰 天牢 凶","己巳 元武黑道 凶","庚午 司令金星 吉","辛未 勾陈 凶","壬申 青龙吉","癸酉 明堂 吉","甲戌 天刑孤辰 凶","乙亥 朱雀天讼 凶"]
luckytime["甲寅"]=["甲子 青龙 吉","乙丑 贵人明堂 吉","丙寅 天刑 凶","丁卯 元武 凶","戊辰 金匮 吉","己巳 天德 吉","庚午 白虎 凶","辛未 玉堂 吉","壬申 空亡 凶","癸酉 截路 凶","甲戌 司命贵人 吉","乙亥 勾陈 凶"]
luckytime["甲辰"]=["甲子 元武天牢 凶","乙丑 截路空亡 凶","丙寅 三合黄道 吉","丁卯 勾陈 凶","戊辰 青龙 吉","己巳 黄道明堂 吉","庚午 天刑五鬼 凶","辛未 朱雀 凶","壬申 金匮 吉","癸酉 天德黄道 吉","甲戌 白虎 凶","乙亥 玉堂天开吉神 吉"]
luckytime["甲午"]=["甲子 金匮 吉","乙丑 天乙贵人 吉","丙寅 白虎 凶","丁卯 玉堂 吉","戊辰 天牢 凶","己巳 元武 凶","庚午 司命 吉","辛未 勾陈 凶","壬申 青龙 吉","癸酉 明堂 吉","甲戌 天刑 凶","乙亥 朱雀 凶"]
luckytime["甲申"]=["甲子 青龙 吉","乙丑 明堂 吉","丙寅 天牢 凶","丁卯 朱雀 凶","戊辰 金匮 吉","己巳 天德 吉","庚午 白虎 凶","辛未 玉堂 吉","壬申 截路 凶","癸酉 截路 凶","甲戌 司命 吉","乙亥 勾陈 凶"]
luckytime["甲戌"]=["甲子 元武天刑 凶","乙丑 截路空亡 凶","丙寅 三合黄道 吉","丁卯 勾陈 凶","戊辰 青龙 吉","己巳 黄道明堂 吉","庚午 天牢五鬼 凶","辛未 玉堂 吉","壬申 金匮 吉","癸酉 天德黄道 吉","甲戌 白虎 凶","乙亥 天开玉堂 吉"]
luckytime["乙丑"]=["丙子 天刑 凶","丁丑 朱雀 凶","戊寅 金匮 吉","己卯 天德 吉","庚辰 白虎 凶","辛巳 玉堂 吉","壬午 天牢 凶","癸未 元武 凶","甲申 贵人司命 吉","乙酉 勾陈 凶","丙戌 青龙 吉","丁亥 明堂 吉"]
luckytime["乙卯"]=["丙子 司命贵人 吉","丁丑 勾陈 凶","戊寅 青龙 吉","己卯 明堂 吉","庚辰 天刑 凶","辛巳 朱雀 凶","壬午 金匮 吉","癸未 天德 吉","甲申 白虎 凶","乙酉 玉堂 吉","丙戌 天牢 凶","丁亥 元武 凶"]
luckytime["乙巳"]=["丙子 白虎 凶","丁丑 天德 吉","戊寅 天牢 凶","己卯 寡宿五鬼 凶","庚辰 司命黄道 吉","辛巳 勾陈 凶","壬午 青龙明堂 吉","癸未 勾陈 凶","甲申 朱雀 凶","乙酉 天刑 凶","丙戌 金匮 吉","丁亥 天德 吉"]
luckytime["乙未"]=["丙子 天刑 凶","丁丑 朱雀 凶","戊寅 金匮 吉","己卯 天德 吉","庚辰 白虎 凶","辛巳 玉堂 吉","壬午 截路空亡 凶","癸未 截路 凶","甲申 司命 吉","乙酉 勾陈 凶","丙戌 青龙 吉","丁亥 明堂 吉"]
luckytime["乙酉"]=["丙子 天乙贵人 吉","丁丑 勾陈 凶","戊寅 青龙 吉","己卯 明堂 吉","庚辰 天牢 凶","辛巳 朱雀 凶","壬午 天贵黄道 吉","癸未 天德 吉","甲申 白虎 凶","乙酉 玉堂 吉","丙戌 天牢 凶","丁亥 元武 凶"]
luckytime["乙亥"]=["丙子 白虎 凶","丁丑 天德 吉","戊寅 天牢 凶","己卯 寡宿五鬼 凶","庚辰 司命黄道 吉","辛巳 勾陈 凶","壬午 青龙明堂 吉","癸未 勾陈 凶","甲申 朱雀 凶","乙酉 天刑 凶","丙戌 金匮 吉","丁亥 天德 吉"]
luckytime["丙子"]=["戊子 金匮 吉","己丑 天德 吉","庚寅 白虎 凶","辛卯 玉堂 吉","壬辰 截路 凶","癸巳 截路 凶","甲午 司命 吉","乙未 勾陈 凶","丙申 青龙 吉","丁酉 明堂贵人 吉","戊戌 天刑 凶","己亥 朱雀 凶"]
luckytime["丙寅"]=["戊子 青龙 吉","己丑 明堂 吉","庚寅 天刑 凶","辛卯 朱雀 凶","壬辰 金匮 吉","癸巳 天德 吉","甲午 白虎 凶","乙未 明堂 吉","丙申 天牢 凶","丁酉 元武 凶","戊戌 司命太阴 吉","己亥 勾陈 凶"]
luckytime["丙辰"]=["戊子 天刑 凶","己丑 元武 凶","庚寅 司命 吉","辛卯 勾陈 凶","壬辰 青龙 吉","癸巳 天乙黄道 吉","甲午 天牢 凶","乙未 朱雀 凶","丙申 金匮 吉","丁酉 天德贵人 吉","戊戌 白虎 凶","己亥 玉堂贵人 吉"]
luckytime["丙午"]=["戊子 金匮 吉","己丑 天德 吉","庚寅 白虎 凶","辛卯 玉堂 吉","壬辰 截路 凶","癸巳 截路 凶","甲午 司命 吉","乙未 勾陈 凶","丙申 青龙 吉","丁酉 明堂 凶","戊戌 天牢 凶","己亥 朱雀 凶"]
luckytime["丙申"]=["戊子 青龙 吉","己丑 明堂 吉","庚寅 天刑 凶","辛卯 朱雀 凶","壬辰 金匮 吉","癸巳 天德 吉","甲午 白虎 凶","乙未 玉堂 吉","丙申 天牢 凶","丁酉 元武 凶","戊戌 司命 吉","己亥 勾陈 凶"]
luckytime["丙戌"]=["戊子 天牢 凶","己丑 元武 凶","庚寅 司命 吉","辛卯 勾陈 凶","壬辰 天乙贵人 吉","癸巳 贵人明堂 吉","甲午 天刑 凶","乙未 朱雀 凶","丙申 金匮 吉","丁酉 天德 吉","戊戌 白虎 凶","己亥 玉堂 吉"]
luckytime["丁丑"]=["庚子 天刑 凶","辛丑 朱雀 凶","壬寅 金匮 吉","癸卯 天德 吉","甲辰 白虎 凶","乙巳 玉堂 吉","丙午 天牢 凶","丁未 元武 凶","戊申 司命 吉","己酉 勾陈 凶","庚戌 青龙 吉","辛亥 明堂贵人 吉"]
luckytime["丁卯"]=["庚子 司命 吉","辛丑 勾陈 凶","壬寅 青龙天贵 吉","癸卯 明堂 吉","甲辰 天刑 凶","乙巳 朱雀 凶","丙午 金匮 吉","丁未 天德贵人 吉","戊申 白虎 凶","己酉 玉堂贵人 吉","庚戌 天牢 凶","辛亥 元武 凶"]
luckytime["丁巳"]=["庚子 白虎 凶","辛丑 玉堂 吉","壬寅 截路 凶","癸卯 截路 凶","甲辰 司命玉堂 吉","乙巳 勾陈 凶","丙午 青龙 吉","丁未 明堂 吉","戊申 天刑 凶","己酉 朱雀 凶","庚戌 金匮 吉","辛亥 天德贵人 吉"]
luckytime["丁未"]=["庚子 天刑 凶","辛丑 朱雀 凶","壬寅 金匮 吉","癸卯 天德 吉","甲辰 白虎 凶","乙巳 玉堂 吉","丙午 天牢 凶","丁未 元武 凶","戊申 司命 吉","己酉 勾陈 凶","庚戌 青龙 吉","辛亥 明堂贵人 吉"]
luckytime["丁酉"]=["庚子 司命黄道 吉","辛丑 勾陈 凶","壬寅 天贵青龙 吉","癸卯 天乙明堂 吉","甲辰 天刑 凶","乙巳 朱雀 凶","丙午 金匮 吉","丁未 天德 吉","戊申 白虎 凶","己酉 玉堂贵人 吉","庚戌 天牢 凶","辛亥 元武 凶"]
luckytime["丁亥"]=["庚子 白虎 凶","辛丑 玉堂 吉","壬寅 截路 凶","癸卯 截路空亡 凶","甲辰 司命黄道 吉","乙巳 勾陈 凶","丙午 青龙 吉","丁未 明堂 吉","戊申 天刑 凶","己酉 朱雀 凶","庚戌 金匮 吉","辛亥 天德 吉"]
luckytime["戊子"]=["壬子 金匮 吉","癸丑 天德 吉","甲寅 白虎 凶","乙卯 玉堂 吉","丙辰 天牢 凶","丁巳 元武 凶","戊午 司命 吉","己未 勾陈 凶","庚申 青龙 吉","辛酉 明堂 吉","壬戌 天刑 凶","癸亥 朱雀 凶"]
luckytime["戊寅"]=["壬子 青龙 吉","辛丑 明堂 吉","甲寅 天刑 凶","乙卯 朱雀 凶","丙辰 金匮 吉","丁巳 天德 吉","戊午 白虎 凶","己未 玉堂 吉","庚申 天牢 凶","辛酉 朱雀 凶","壬戌 司命 吉","癸亥 勾陈 凶"]
luckytime["戊辰"]=["壬子 天牢 凶","癸丑 元武 凶","甲寅 司命 吉","乙卯 勾陈 凶","丙辰 青龙 吉","丁巳 明堂 吉","戊午 天刑 凶","己未 朱雀 凶","庚申 金匮 吉","辛酉 天德六合吉","壬戌 白虎 凶","癸亥 玉堂 吉"]
luckytime["戊午"]=["壬子 金匮 吉","癸丑 天德 吉","甲寅 白虎 凶","乙卯 玉堂 吉","丙辰 天牢 凶","丁巳 元武 凶","戊午 司命 吉","己未 勾陈 凶","庚申 青龙 吉","辛酉 明堂 吉","壬戌 天刑 凶","癸亥 朱雀 凶"]
luckytime["戊申"]=["壬子 青龙 吉","癸丑 天官 吉","甲寅 天刑 凶","乙卯 朱雀 凶","丙辰 金匮 吉","丁巳 天德 吉","戊午 天牢 凶","己未 天乙贵人 吉","庚申 天牢 凶","辛酉 勾陈 凶","壬戌 司命 吉","癸亥 勾陈 凶"]
luckytime["戊戌"]=["壬子 截路 凶","癸丑 截路 凶","甲寅 天乙明堂 吉","乙卯 勾陈 凶","丙辰 青龙 吉","丁巳 明堂 吉","戊午 截路 凶","己未 朱雀 凶","庚申 金匮 吉","辛酉 天德 吉","壬戌 白虎 凶","癸亥 玉堂 吉"]
luckytime["己丑"]=["甲子 天寡孤辰 凶","乙丑 朱雀 凶","丙寅 金匮福神 吉","丁卯 天德 吉","戊辰 白虎 凶","己巳 天德 吉","庚午 空亡 凶","辛未 元武 凶","壬申 司命 吉","癸酉 截路 凶","甲戌 青龙 吉","乙亥 勾陈 凶"]
luckytime["己卯"]=["甲子 司命 吉","乙丑 勾陈 凶","丙寅 青龙 吉","丁卯 明堂 吉","戊辰 天刑 凶","己巳 朱雀 凶","庚午 贵人 吉","辛未 天德 吉","壬申 截路 凶","癸酉 玉堂 吉","甲戌 天牢 凶","乙亥 元武 凶"]
luckytime["己巳"]=["甲子 白虎 凶","乙丑 玉堂 吉","丙寅 天牢 凶","丁卯 元武 凶","戊辰 司命 吉","己巳 勾陈 凶","庚午 青龙 吉","辛未 明堂 吉","壬申 截路 凶","癸酉 截路空亡 凶","甲戌 金匮 吉","乙亥 天德 吉"]
luckytime["己未"]=["甲子 天刑 凶","乙丑 朱雀 凶","丙寅 金匮 吉","丁卯 天德 吉","戊辰 白虎 凶","己巳 玉堂 吉","庚午 天牢 凶","辛未 元武 凶","壬申 司命 吉","癸酉 截路 凶","甲戌 青龙 吉","乙亥 明堂 吉"]
luckytime["己酉"]=["甲子 天乙贵人 吉","乙丑 勾陈 凶","丙寅 青龙 吉","丁卯 明堂 吉","戊辰 天刑 凶","己巳 朱雀 凶","庚午 金匮 吉","辛未 天德 吉","壬申 截路 凶","癸酉 司命 吉","甲戌 天牢 凶","乙亥 元武 凶"]
luckytime["己亥"]=["甲子 白虎 凶","乙丑 玉堂 吉","丙寅 天牢 凶","丁卯 朱雀 凶","戊辰 司命 吉","己巳 勾陈 凶","庚午 青龙 吉","辛未 玉堂 吉","壬申 截路 凶","癸酉 截路 凶","甲戌 金匮 吉","乙亥 天德 吉"]
luckytime["庚子"]=["丙子 金匮 吉","丁丑 天德贵人 吉","戊寅 白虎 凶","己卯 玉堂 吉","庚辰 天牢 凶","辛巳 元武 凶","壬午 司命 吉","癸未 截路 凶","甲申 青龙 吉","乙酉 明堂 吉","丙戌 天刑 凶","丁亥 朱雀 凶"]
luckytime["庚寅"]=["丙子 青龙 吉","丁丑 明堂 吉","戊寅 天刑 凶","己卯 朱雀 凶","庚辰 金匮 吉","辛巳 天德 吉","壬午 空亡 凶","癸未 福德天官 吉","甲申 天牢 凶","乙酉 元武 凶","丙戌 黄道 吉","丁亥 勾陈 凶"]
luckytime["庚辰"]=["丙子 天牢 凶","丁丑 元武 凶","戊寅 司命金匮 吉","己卯 勾陈 凶","庚辰 青龙 吉","辛巳 明堂 吉","壬午 天刑 凶","癸未 朱雀 凶","甲申 天寡 凶","乙酉 天德 吉","丙戌 白虎 凶","丁亥 玉堂 吉"]
luckytime["庚午"]=["丙子 金匮 吉","丁丑 天德 吉","戊寅 白虎 凶","己卯 玉堂 吉","庚辰 天牢 凶","辛巳 元武 凶","壬午 司命 吉","癸未 截路 凶","甲申 青龙 吉","乙酉 明堂 吉","丙戌 天寡天刑 凶","丁亥 朱雀 凶"]
luckytime["庚申"]=["丙子 青龙 吉","丁丑 明堂贵人 吉","戊寅 天刑 凶","己卯 朱雀 凶","庚辰 金匮 吉","辛巳 天德 吉","壬午 青龙 吉","癸未 玉堂金匮 吉","甲申 天牢 凶","乙酉 元武 凶","丙戌 司命 吉","丁亥 勾陈 凶"]
luckytime["庚戌"]=["丙子 天牢 凶","丁丑 元武 凶","戊寅 司命 吉","己卯 勾陈 凶","庚辰 青龙 吉","辛巳 明堂 吉","壬午 截路 凶","癸未 截路 凶","甲申 金匮 吉","乙酉 天德 吉","丙戌 白虎 凶","丁亥 玉堂 吉"]
luckytime["辛丑"]=["戊子 天刑天牢 凶","己丑 朱雀 凶","庚寅 金匮 吉","辛卯 天德三合 吉","壬辰 截路 凶","癸巳 天官福星 吉","甲午 黑煞 凶","乙未 元武天牢 凶","丙申 司命喜神 吉","丁酉 勾陈 凶","戊戌 青龙 吉","己亥 明堂三合 吉"]
luckytime["辛卯"]=["戊子 司命 吉","己丑 勾陈 凶","庚寅 青龙贵人 吉","辛卯 明堂 吉","壬辰 截路空亡 凶","癸巳 截路 凶","甲午 金匮 吉","乙未 天德 吉","丙申 白虎 凶","丁酉 玉堂 吉","戊戌 天牢 凶","己亥 元武 凶"]
luckytime["辛巳"]=["戊子 白虎 凶","己丑 玉堂 吉","庚寅 天牢 凶","辛卯 元武 凶","壬辰 贵人黄道 吉","癸巳 截路 凶","甲午 天乙贵人 吉","乙未 明堂 吉","丙申 天刑 凶","丁酉 朱雀 凶","戊戌 金匮 吉","己亥 朱雀 凶"]
luckytime["辛未"]=["戊子 天刑天牢 凶","己丑 朱雀 凶","庚寅 金匮 吉","辛卯 天德三合 吉","壬辰 截路 凶","癸巳 天官贵人 吉","甲午 黑煞 凶","乙未 元武 凶","丙申 司命喜神 吉","丁酉 勾陈 凶","戊戌 青龙 吉","己亥 明堂三合 吉"]
luckytime["辛酉"]=["戊子 司命 吉","己丑 勾陈 凶","庚寅 青龙贵人 吉","辛卯 明堂 吉","壬辰 截路 凶","癸巳 截路 凶","甲午 金匮 吉","乙未 天德 吉","丙申 白虎 凶","丁酉 玉堂 吉","戊戌 天牢 凶","己亥 元武 凶"]
luckytime["辛亥"]=["戊子 白虎 凶","己丑 玉堂 吉","庚寅 天牢 凶","辛卯 元武 凶","壬辰 司命 吉","癸巳 勾陈 凶","甲午 青龙 吉","乙未 勾陈 凶","丙申 天刑 凶","丁酉 朱雀 凶","戊戌 金匮 吉","己亥 天德 吉"]
luckytime["壬子"]=["庚子 金匮 吉","辛丑 天德 吉","壬寅 截路 凶","癸卯 玉堂 吉","甲辰 天牢 凶","乙巳 元武 凶","丙午 司命 吉","丁未 勾陈 凶","戊申 青龙 吉","己酉 明堂 吉","庚戌 天刑 凶","辛亥 朱雀 凶"]
luckytime["壬寅"]=["庚子 青龙 吉","辛丑 明堂 吉","壬寅 天刑 凶","癸卯 截路 凶","甲辰 金匮 吉","乙巳 天乙贵人 吉","丙午 白虎 凶","丁未 玉堂 吉","戊申 天牢 凶","己酉 元武 凶","庚戌 司命 吉","辛亥 勾陈 凶"]
luckytime["壬辰"]=["庚子 天牢 凶","辛丑 元武 凶","壬寅 司命 吉","癸卯 截路 凶","甲辰 青龙 吉","乙巳 天乙贵人 吉","丙午 天刑 凶","丁未 朱雀 凶","戊申 金匮 吉","己酉 天乙贵人 吉","庚戌 白虎 凶","辛亥 天德 吉"]
luckytime["壬午"]=["庚子 金匮 吉","辛丑 天德 吉","壬寅 截路 凶","癸卯 贵人 吉","甲辰 天牢 凶","乙巳 截路 凶","丙午 司命 吉","丁未 勾陈 凶","戊申 青龙 吉","己酉 明堂 吉","庚戌 天牢 凶","辛亥 朱雀 凶"]
luckytime["壬申"]=["庚子 青龙 吉","辛丑 明堂 吉","壬寅 天刑 凶","癸卯 截路 凶","甲辰 金匮 吉","乙巳 天乙贵人 吉","丙午 白虎 凶","丁未 玉堂 吉","戊申 天牢 凶","己酉 元武 凶","庚戌 司命 吉","辛亥 勾陈 凶"]
luckytime["壬戌"]=["庚子 天刑 凶","辛丑 元武 凶","壬寅 司命 吉","癸卯 截路 凶","甲辰 青龙 吉","乙巳 明堂 吉","丙午 天牢 凶","丁未 朱雀 凶","戊申 金匮 吉","己酉 天德 吉","庚戌 白虎 凶","辛亥 玉堂 吉"]
luckytime["癸丑"]=["壬子 截路 凶","癸丑 截路 凶","甲寅 金匮 吉","乙卯 天德 吉","丙辰 白虎 凶","丁巳 玉堂 吉","戊午 天刑天牢 凶","己未 元武 凶","庚申 司命 吉","辛酉 勾陈 凶","壬戌 青龙 吉","癸亥 明堂 吉"]
luckytime["癸卯"]=["壬子 司命 吉","癸丑 天寡孤辰 凶","甲寅 青龙 吉","乙卯 贵人 吉","丙辰 天刑 凶","丁巳 朱雀黑道 凶","戊午 金匮福德 吉","己未 勾陈 凶","庚申 白虎 凶","辛酉 玉堂 吉","壬戌 天牢 凶","癸亥 黑道 凶"]
luckytime["癸巳"]=["壬子 截路 凶","癸丑 天乙玉堂 吉","甲寅 天牢 凶","乙卯 元武 凶","丙辰 司命 吉","丁巳 勾陈 凶","戊午 青龙 吉","己未 明堂 吉","庚申 天刑 凶","辛酉 朱雀 凶","壬戌 金匮 吉","癸亥 天德 吉"]
luckytime["癸未"]=["壬子 截路 凶","癸丑 截路 凶","甲寅 金匮 吉","乙卯 天德 吉","丙辰 白虎 凶","丁巳 玉堂 吉","戊午 天牢 凶","己未 元武 凶","庚申 司命 吉","辛酉 勾陈 凶","壬戌 青龙 吉","癸亥 明堂 吉"]
luckytime["癸酉"]=["壬子 司命 吉","癸丑 天寡孤辰 凶","甲寅 青龙 吉","乙卯 贵人 吉","丙辰 天刑 凶","丁巳 朱雀黑道 凶","戊午 金匮福德 吉","己未 天德 吉","庚申 白虎 凶","辛酉 玉堂 吉","壬戌 天牢 凶","癸亥 黑道 凶"]
luckytime["癸亥"]=["壬子 截路 凶","癸丑 玉堂 吉","甲寅 天牢 凶","乙卯 元武 凶","丙辰 司命 吉","丁巳 勾陈 凶","戊午 青龙 吉","己未 明堂 吉","庚申 天刑 凶","辛酉 朱雀 凶","壬戌 金匮 吉","癸亥 天德 吉"]
/*
这里的“煞”乃“杀”之意，即中国古典哲学术语~~“犯三杀”是也！如“巳酉丑三合西方金~~三杀寅卯辰东方木”；“申子辰三合北方水~~三杀巳午未南方火”。你不妨对一下日历看，逢巳日、酉日、丑日必是“煞东”；亥日、卯日、未日必“煞西”；申日、子日、辰日必“煞南”；寅日、午日、戌日必“煞北”。
*/
var daycrash = new Array()
daycrash["子"]="鼠日冲马 煞南"
daycrash["丑"]="牛日冲羊 煞东"
daycrash["寅"]="虎日冲猴 煞北"
daycrash["卯"]="兔日冲鸡 煞西"
daycrash["辰"]="龙日冲狗 煞南"
daycrash["巳"]="蛇日冲猪 煞东"
daycrash["午"]="马日冲鼠 煞北"
daycrash["未"]="羊日冲牛 煞西"
daycrash["申"]="猴日冲虎 煞南"
daycrash["酉"]="鸡日冲兔 煞东"
daycrash["戌"]="狗日冲龙 煞北"
daycrash["亥"]="猪日冲巳 煞西"


    
class UniversechangesConfig extends React.Component {
    Ymd2Jd(yy,mm,dd) {
      var days,tmp,yym1;
      yym1 = yy - 1;
      days = 1721422;
      solarMonth[1] = 28;
      if (yy % 4 == 0) {
        solarMonth[1] = 29;
        if (yy > 1582) {
          if (yy % 100 == 0) {
            solarMonth[1] = 28;
            if (yy %400 == 0) {
              solarMonth[1] = 29;
            }
          }
        }
      }
      days += Math.floor(365.25 * yym1 + 0.1);
      for (m = 0; m < (mm - 1) ; m++) {
        days += solarMonth[m];
      }
      days += dd;
      if (days >= 2299160) days -= 10;
      if (yym1 >= 1600) {
        days -= Math.floor((yym1 - 1600 + 0.1) / 100);
        days += Math.floor((yym1 - 1600 + 0.1) / 400);
      }
      return days;
    }
    GetTenton(JD) {
      var KJD,KJDF;
      var n,ne;
      ne = KyuuseiJD.length;
      JD = Math.floor(JD);
      if (JD < KyuuseiJD[0]) return -1;
      if (JD >= KyuuseiJD[ne - 1]) return -1;
    
      for (n = 1 ; n < ne ; n++) {
        if (JD < KyuuseiJD[n]) break;
      }
      KJD = KyuuseiJD[n-1];
      KJDF = KyuuseiJDF[n-1];
      ne = KyuuseiJD[n];
      do {
        NKyuusei[0] = KJD;
        KJD += 180;
        if (KJD + 61 > ne) {KJD = ne;}
        if (JD >= KJD) {
          KJDF = (KJDF < 0) ? 1 : -9;
        }
      } while (JD >= KJD);
      NKyuusei[1] = KJD - NKyuusei[0];
      NKyuusei[2] = KJDF;
      return NKyuusei[0];
    }
  
    Jd2KyuuseiNameL(JD)
    {
      var ans;
      ans = this.Jd2Kyuusei(JD);
      if (ans >= 0) {
        return '九星:'+(KyuuseiName[ans] + KyuuseiName2[ans]);
      }
      return '';
    }
    Jd2Kyuusei(JD)
    {
      
      var flag,base;
      JD = Math.floor(JD);
      //console.log("JD"+JD)
      if ((JD < NKyuusei[0]) || (JD >= NKyuusei[0] + NKyuusei[1])){
        if (this.GetTenton(JD) < 0) return -1;
      }
      
      if (NKyuusei[2] < 0) {flag = -1;}
      else { flag = 1;}
      base = flag * NKyuusei[2] - 1 + 270;
      base += (JD - NKyuusei[0]) * flag;
      return base % 9;
    }
    GetSuku2D(dd) {
      var s;
      s = (dd + SukuDofs) % 28;
      return Sukuyou2[s];
    }
    GetSuku2DInfo(dd) {
      var s;
      s = (dd + SukuDofs) % 28;
      return Sukuyou3[s];
    }
    GetInfo(cur)
    {
      var info =new Array()
      
      var numYY = cur.info.Year
      var mm = cur.info.gzMonth
      var dd = cur.info.gzDate
      var numMM = cur.info.Month
      var numDD = cur.info.Date
      info.push("")
      info.push("春秋通诠:"+moonglk[numMM-1])
      
      info.push(dd+"日")
      //return info;
      ddgan=dd.slice(0,1);
      ddzhi=dd.slice(1,2);

      var mmzhizhen = mm.slice(1,2)
      
      info.push(Gan2[ddgan]);
      info.push(Zhi2[ddzhi]);

      var firstNode = SixrandomModule.getTerm(numYY*1,numDD*2-1)
      var secondNode = SixrandomModule.getTerm(numYY*1,numDD*2)
      if (numDD>firstNode-1)
      {
        numMM++;
      }
      var seqday=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
      var m = jcName[mm.slice(1,2)]

      var jcday = m[seqday.indexOf(ddzhi)]
      //console.log("12jc",m,numMM)  
      info.push("")
      info.push("十二建除:"+jcday+"日")
      info.push(jc[jcday])
      var luck = jcluck[jcday].split("|");
      //info.push(luck)
      info.push(luck[0])
      info.push(luck[1])
      //console.log(cur)
      //return info
      info.push("")
      //五行：
      info.push("五行:"+EightrandomModule.gettwelfth(dd))
      info.push("值神:"+zrxName[mmzhizhen][ddzhi])
      info.push("冲煞:"+daycrash[ddzhi])
      info.push("")
      //info.push(this.Jd2KyuuseiNameL(YMD2JD))
      var YMD2JD = this.Ymd2Jd(cur.info.Year,cur.info.Month,cur.info.Date)
      info.push(this.Jd2KyuuseiNameL(YMD2JD))
      //info.push("")
      info.push("宿名:"+this.GetSuku2D(YMD2JD))
      info.push(this.GetSuku2DInfo(YMD2JD))
      
      //console.log(info)
      return info

    }
    gettimelucky(key)
    {
      //.log("gettimelucky",key)
      return luckytime[key]
    }
};
var universechangesConfig = new UniversechangesConfig()
module.exports=universechangesConfig;  