He: message(0xf8a7ea5) TokenTransfer {     query_id: Int as uint64;     amount: Int as coins;     destination: Address;     response_destination: Address;     custom_payload: Cell?;     forward_ton_amount: Int as coins;     forward_payload: Slice as remaining; }  请教一个问题 0xf8a7ea5 这个值是用什么方法计算出来的？，我发现改掉中间的某一个值之后，将无法使用这个结构

gavin: crc32('transfer query_id:uint64 amount:VarUInteger 16 destination:MsgAddress response_destination:MsgAddress custom_payload:Maybe ^Cell forward_ton_amount:VarUInteger 16 forward_payload:Either Cell ^Cell = InternalMsgBody') = 0x8f8a7ea5 & 0x7fffffff = 0xf8a7ea5 (reply to 34173)

He: 请教一个问题  transfer 这个字符串是如何得出来的 (reply to 34175)

Logan 🐯: b5ee9c7201010101003000005b00000016000000000000000080116fc756499e806e936f64d5ef7d8c6ca095f9fb87d412c2e29910f41416ce3f10

Logan 🐯: 这个怎么解码

gavin: 规范里面给的 (reply to 34176)

gavin: https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md

He: 那么我如果想自定义一个结构  这个参数要怎么给

He: 比如  message FFDDWWPP {     user: Address;     a_time: Int as uint32;     token_id: Address?;     token_amt: Int as coins;     routing_code: Slice as remaining; } 这种？

gavin: 这个参数不重要, 你自己自定义一个 message(0x000000) 随便写一个就行, 默认你不写的华Tact 在编译阶段会给你生成一个的 (reply to 34183)

He: 好的感谢我去实验一下

User<6864211003>: 谢谢回复，但是还是没摸清，我没搜到对应的解析过程，比如具体的字段名，或者解析方式。是不是说开发人员不用去理会这个boc？但是我觉得也不可能 (reply to 34147)

Logan 🐯: Cell underflow

Logan 🐯: 一般啥原因

admin: 为什么没有文啊

admin: 中

User<6086637958>: 这你就要去问毛子了

User<6086637958>: 合约解析cell的时候，cell里面已经没数据了 (reply to 34191)

User<6086637958>: 那个boc就是你构造的cell, 你怎么构造的就怎么解析 (reply to 34189)

User<6086637958>: 比如这种， 第一个loaduint 512，然后loaduint 64

User<6864211003>: 但是我没构造过cell

User<6086637958>: 因为你用的库在底层帮你做了这些事情

User<6086637958>: 你要解析就得理解他是怎么做的

User<6864211003>: 我使用的官方文档例子

User<6864211003>: 在这里我做了结果回调

User<6864211003>: 然后我就解析不了此时result里的boc了

User<6864211003>: 意思是，我得自己构造一个cell

User<6864211003>: 然后再去发送交易，对么？

Logan 🐯: 为啥官方的代币合约会报错呢

Logan 🐯: 是因为没传这个歌嘛 jettonParams

Logan 🐯: tokenMetadataCell 是否一定要传

User<6086637958>: metadata部署jetton的时候才用的到

User<6086637958>: boc转化为cell, 去解析TonWeb.boc.Cell.oneFromBoc (reply to 34208)

Logan 🐯: 成功了

Allen: TON Reach現在不能註冊了嗎

User<6864211003>: 感谢大佬解答 (reply to 34217)

Allen: https://link.medium.com/k6F7UHEiGKb  寫了一篇文章，關於交易的部分，前幾天等待交易通知的，我有把代碼跟說明都放在這裡面了，希望對大家有幫助 (reply to 34189)

Allen: 其實你拿到手的那個boc，是可以轉換成message的，然後再拿裡面的body就能拿到comment了

User<6864211003>: 感谢大佬解答 (reply to 34226)

Allen: 為什麼寫了IP不符合..Orz (reply to 34222)

Logan 🐯: 调用mini还是报错 无语

Logan 🐯: 代币的用户钱包合约报错了

Akinkunmi: 09042183039 this is my watsapp number I need someone we will tell me more about ton please

lin: 请问外部消息的boc怎么解析 mempool 里边监听到的

Logan 🐯: 官方的代币合约报错了

Logan 🐯: 用户合约报9

Logan 🐯: query_id: 0 amount: "2000" from: 0:d1dac6bb1e81e4bc29145129d97ed739545e99b67af097ec175c6ba6e4574236 response_address: 0:8b7e3ab24cf403749b7b26af7bec636504afcfdc3ea0961714c887a0a0b671f8 forward_ton_amount: "1"

Leo: 你还没搞定啊

Leo: 9 是你cell不对

Leo: cell的组建方式不对

Logan 🐯: 搞定了，Mini在创建代币的时候，那个用了主合约编译来应该用用户合约的钱包代码来编译，导致报错

MEW: 可以的 (reply to 34260)

User<6219127996>: 在测试网上发布jetton后，怎么mint呢

MEW: 直接转换就行

匿名交易平台: hi 大家好

User<6086637958>: 以太坊用的是ecdsa, ton用的是ed25519 这两互相转一下就行

wikig: 话说，但是默认的evm的kp的私钥长度不是unit8array (32)嘛  然后 TON wallet的默认长度似乎是unit8array (64) 欸（用的nacl.sign.keypair的话） 。  这两在不依赖于 fromSeed()这种扩长的方案下真的好相互转吗（？我现在好像是做了扩长，但是会导致总体的安全系数维持在 unit8array (32) (reply to 34274)

MEW: 以太坊是链那一层验证签名，ton是钱包合约里验证签名 (reply to 34280)

User<7345977936>: 😀

wikig: 是的，我上面说的，只是说，私钥复杂度（抗碰撞）的安全系数的问题，因为我现在这里做的一个东西也是要一个私钥通吃所有主流链。  https://t.me/tonspack_bot/app (reply to 34282)

Alex: 为什么其他钱包生成的24位助记词导入到tonkeeper的时候会报错"助记词有问题"呢? TON的官方钱包对助记词有额外的特殊要求吗?

gavin: 估计规范不一样 (reply to 34290)

Alex: 无法确定 所以才到群里问下 助记词直接用代码生成钱包发交易是没问题的 但是这个助记词无法导入到tonkeeper钱包使用 有谁遇到过这种情况吗?

wikig: 估计是tonkeeper没做24位注记词的支持或兼容吧（  我记得他家默认是12位的？ (reply to 34292)

Alex: 而且 tonkeeper生成的助记词也无法导入到其他钱包使用 是因为用了不同的规范或者词库吗?

Alex: ton这边只支持24位助记词吧

wikig: 完全可能，建议去他们source code的仓库了翻一下看他们用了哪个库来做的（ (reply to 34294)

wikig: https://github.com/search?q=repo%3Atonkeeper%2Fwallet++mnemonic&type=code (reply to 34294)

wikig: const seed = await pbkdf2_sha512(entropy, 'TON default seed', PBKDF_ITERATIONS);

Alex: 代码是有看过的 他自己有对种子加盐 这些都没问题 git上的官方代码是能正常运行的 我奇怪的是官方钱包为什么直接校验不过 说助记词有问题 加盐只会导致生成的地址不同而已

Alex: 群里有TON的官方开发吗?

Alex: 果然 助记词校验规则和其他钱包是不一样的 看来无法互通啊

️Kai: 查收

qknow: 有stake 质押的源码学习吗

Howard: https://github.com/HipoFinance/contract (reply to 34326)

qknow: 好的  谢谢

Allen: @dev_rel 請問你知道為什麼現在ton research block 台灣IP嗎

芭比Q: 代币合约的content是存的什么数据？

芭比Q: meta信息？ 像symbol，decimals, name这些吗

MEW: 存芭比q (reply to 34349)

Maxey: 嗨大家，我這週撰寫了有關TON wallet的介紹，特別詳細解釋了wallet v4的程式碼，大家有興趣可以來看看！有任何問題也都歡迎跟我討論😎  文章連結: https://medium.com/@ipromise2324/探索ton錢包-從v1到v4的演變及wallet-v4深度解析-6d7dc562edf3

gavin: 对就是类似这个 是一个cell (reply to 34351)

qknow: 这个是质押ton， 有质押 jetton token的吗 (reply to 34327)

cai: 问个问题兄弟们。我这个body构造的是正确的不。反正交易失败了

cai: abi方法如下

底单: 中文下载

— 2024-06-25 —

mx: 我问个问题哈， 我们ton的公钥可以在没有私钥的情况下获得么

mx: 这个有大佬知道不

mx: 自己对数据进行验签

mx: Ed25519验签的时候不是要公钥么

mx: 现在好像没有办法拿到

gavin: 有数据+签名就能还原公钥吧

mx: 还原公钥那我要知道本来的公钥是啥呢

mx: 好像你说的有点道理， 我验证验证

mx: 你们有做过自己验证签名么

mx: 要ton 私钥签名验证签名是否有效

User<6086637958>: 调用钱包合约的get_public_key

mx: 用tonkeeper 好像拿不到是吧

mx: tonkeeper 有办法拿么

mx: 嗯 (reply to 34441)

mx: 这个里面需要公钥

mx: 服务器验签的时候没有公钥

mx: 这个有例子不 (reply to 34432)

Y: 请问有管理员在吗？

carol: 就算能还原，你还原的公钥有什么用？跟谁去比较？

mx: 公钥推出地址

mx: 地址是唯一标识

carol: 直接用tonkeepr的 wallet = useWallet()    wallet.account.publicKey就能获取地址公钥

Bot Developer: 我看了一下钱包生成代码，ton的钱包完全可以用私钥生成钱包地址，可是几个钱包只提供助记词导入

Howard: https://github.com/JVault-app/floating-staking-contracts (reply to 34367)

mx: TON 的公钥转地址，有详细的算法吗

Howard: 老實說這個不是很好讀，建議有一天寫一版 Tact 版本出來給大家 🐱🐶 (reply to 34462)

mx: 我问个问题哈， ton 有好多版本的地址， 他们公钥是一个吗？

Howard: 可以是一個: 不同錢包地址影響的是合約代碼 code 不一樣所以生成地址才會不同 (reply to 34466)

Anthony: 有开源的tact 开源的项目吗  不是demo的那种

Anthony: 好多都是func  看不懂。。。。。。

carol: 需要指定版本的钱包代码 + 公钥 就能计算出地址 (reply to 34463)

mx: 有怎么计算的逻辑么

carol: 比如使用@ton/ton库， 用这个就能生成地址

Howard: https://www.notion.so/ton-org/Developer-Guideline-by-Howard-024429d0b28c409f992d238057b60f4f?pvs=4#ac6b11fcfb6148c4ba7f7ff6a8d404d7 (reply to 34468)

Logan 🐯: unverified Token啥情况

gavin: 就是没有认证的token (reply to 34476)

cai: 求求了 告诉下吧 这个结构体怎么构造cell

cai: 我这样有问题么

gavin: 你用Tact 编译的时候warpper 都给你生成好了 (reply to 34480)

gavin: 直接调用库函数就行

cai: 所有人 悬赏2个ton

cai: 我用go去交互的

cai: 求帮解决。猪脚饭2个ton立马打去。

cai: 用tonutil-go调用 构造cell

cai: 最终能跟合约成功就算行

Evan: dict单独放cell试试，感觉你这个位数溢出了

cai: 我试过也没用。整个message当作一个cell

Evan: 报错信息是什么

cai: 我试过很多次了。没办法了

cai: go程序不报错。

cai: 但是链上报是compute phase abort了

Evan: 错误码

cai: 稍等。

gavin: 我来 (reply to 34485)

Mr.A: 为什么通过from和to地址拿交易列表 同一笔交易的hash不是同一个

gavin: 你们先, 解决不了在喊我

cai: https://testnet.tonviewer.com/transaction/b1a48d519badab4c7df37078380fa0a9c1c96f38abe8c5d9f152be0bfe2473d9

cai: 求帮看看了 昨天开始上班。今天要我去弄这个。然后发现公司没一个人会这个

Evan: gas耗尽了

gavin: value 没有传值哦

Evan: 是合约问题，和go没关系

cai: 我直接按照例子写 这样有问题么

cai: 对了忘了说了 写这个合约的都没自测。 我都想直接骂娘了 (reply to 34507)

gavin: 要指定下value 你用0.01个ton 试试 但是我看你的合约里面也没找零回来 相当于是一个吞金兽啊

Evan: 这个mod是1

Evan: 你value呢

gavin: 让你们那个协约的哥们改下 要把你剩余的ton还给你 (reply to 34510)

Evan: mod没问题

gavin: 另外你的OpCode 不可能是0x00000001

cai: 好 value是不是就是amount那个字段。我amountt填了0.03 还是不行的 (reply to 34511)

cai: opcode我怎么算？就是普通的合约 我一直不明白这个东西 就乱填了。合约里面也没有校验opcode (reply to 34516)

Evan: 你发消息没设置value

gavin: 你让你们那个写合约的哥们 (reply to 34520)

Evan: 只设置了mod

gavin: 把Tact build一下

Evan: opcode是合约决定的

gavin: 在build文件夹里面

cai: 我去看下。 (reply to 34521)

gavin: 会有一个tact_xxxxx.md

gavin: 里面有op相关的文档

cai: 合约开发者都没测试。他验证过了。

cai: 我放在https://ide.nujan.io/都无法编译

cai: https://verifier.ton.org/EQA362tjDbgG4hEwfxB09LBXDjqmEO_MXRfBu_DI-Sv-N3vr?testnet

cai: 这个是验证的合约 兄弟们帮看下

cai: 解决我只能提供2ton猪脚饭了

gavin: 或者让他改代码

cai: 这个opcode是合约自定义的对么

gavin: 可以自定义 如果没有自定义 编译后会自动生成一个

Evan: 对的

Evan: // w = wallet.FromSeed("domain owner seed phrase") err = w.Send(context.Background(), &wallet.Message{   Mode: 1, // pay fees separately (from balance, not from amount)   InternalMessage: &tlb.InternalMessage{     Bounce:  true, // return amount in case of processing error     DstAddr: domainInfo.GetNFTAddress(), // destination is domain contract     Amount:  tlb.MustFromTON("0.03"),     Body:    body,   }, }, true) if err != nil {     panic(err) }

cai: 了解了。所以我应该填编译后自动生成的那个opcode对吧

cai: opcde是不是填这个兄弟们

cai: 我不知道怎么填opcode了

Evan: 不清楚tact，哈哈哈，func自己指定

cai: 好。

cai: 合约开发的人写的这个合约 我放在ide里面无法编译 (reply to 34532)

cai: 我试了下 填了opcode和amount 不行

cai: https://testnet.tonviewer.com/transaction/11db9fb41c082b8f52856eae0e57b090971a24c22f609826c756b679ff91ac6c

cai: 我看了下填了value不行

Evan: 是header的十六进制

gavin: 这次上链了 gas 是够的 (reply to 34553)

gavin: 是你传参错了

gavin: 导致合约内部执行溢出了

Evan: 我看了下jetton的header值和jetton合约内标注的一样

cai: 我删去了其余的部分 编译后的ts文件里 发现了这个数字以及是这么构造的。

gavin: 对 需要按照这个结构

gavin: 转换成你的golang代码

cai: 那是不是说明这个1498033505是opcode？

gavin: 对 (reply to 34563)

gavin: 这个是十进制的

cai: 可是我确实是这么构造的呀。

cai: 我懂了 我len那里填错了 (reply to 34550)

gavin: 我觉得你别这样搞, 你就算弄通了也会有问题啊 你为什么要传两个map呢, 我看你这个代码就很难受 添加白名单你用个数组不久完了 (reply to 34559)

Evan: 错误是读取传的数据挂了，位数不对

cai: 不是我写的合约 我看到ton合约就不想碰

cai: 我是sol开发者。

cai: 临时有这个活

Howard: 不建議這樣整，你數據大會導致溢位吧 (reply to 34479)

cai: 合约开发者没有自测。。。。

cai: 😂😂

cai: 我都想去喷他了

Evan: 是的，这个传参写法很有问题

Evan: 合约不应该这么定义传入值

Evan: 很容易数据溢出

Evan: 目前报错是下溢，可能是参数结构问题

cai: 我又检查了一下 应该对的上了。 但是不行🤣🤣🤣

cai: 兄弟们就说是不是合约本身可能有问题

Evan: 257你改成256试试呢

cai: 好

gavin: 可以去砍他 (reply to 34577)

Evan: 看你传参结构没什么问题

gavin: 我觉得你别研究这个合约了, 你让那个合约开发者 自己想清楚 把代码改改, 这个你就算调通了也不敢用啊

Evan: 确实

cai: 不行。我改成了256和更小的8都不行

cai: 好 (reply to 34589)

Evan: 这个写合约的自己还没搞明白，写法是solidity写法

Evan: 那你就改回去吧

我有超能力: 有没有大佬知道  miniapp里下滑会关闭   这个怎么能禁用掉

Evan: 最后length是257 (reply to 34582)

Evan: "name": "length",                "type": {                   "kind": "simple",                   "type": "int",                   "optional": false,                   "format": 257                }

Evan: 你存的8位uint64

Evan: 他合约是int，257位

Evan: 也挺离谱的，257位，这里最多也就传几个数据就要溢出了

Evan: 而且这个map也没指定int的位数

Evan: tact编译abi里没有给出

Evan: 都存一个数据cell好像也要溢出

cai: 哦哦 我再试下

cai: length填成257不行。too big size

cai: 算了。

cai: 不管了。让他先自己搞明白先。大不鸟不干这活了。

Evan: 对，他合约有问题，会溢出

MEW: 哪家公司，给兄弟们发出来避下坑

cai: 深圳盘。

cai: 没工资 只给代币份额的那种

Mr.A: 哪位大佬知道为什么通过from和通过to地址拿到的交易列表里的交易哈希不一样

carol: 交易是异步的， 发送给from的是一个交易， from发给to的又是一个交易

Mr.A: 那这两个交易哈希能够相互转换吗

Mr.A: 或者交易签好名之后能够提前计算出这两个哈希吗 (reply to 34614)

Allen: 可以算出in的 (reply to 34617)

Allen: 可以參考這個 (reply to 34225)

Allen: 交易發出去主要是有一個inMessage的hash

User<6086637958>: out的message hash无法预测 (reply to 34617)

Mr.A: 好的,我看一下文章 (reply to 34619)

User<6086637958>: 你从tonscan看就很明显了

User<6086637958>: 这个hash就是你发交易的body bocHahs

Mr.A: 那有没有什么方法能把这两个哈希关联起来 (reply to 34625)

Mr.A: 知道一个之后能否推算出另外一个

User<6086637958>: 你这个合约132错误吗什么意思 (reply to 34488)

User<6086637958>: 可以啊， 用api

User<6086637958>: toncent或者tonapi找一下， 我忘记了

User<6086637958>: 可以用messageHash找到到这笔tx的信息

Mr.A: 好的,我看一下api,看看有没有

Yang: 請各位善用由 Awesome Doge 精心製作的 Awesome TON 頁面：  https://tonresear.ch/t/awesome-ton-the-open-network/504  從基本理論到實際智能合約的操作演練都在論壇上有連結，同時也整理了許多在開發上會使用到的實用工具。  也歡迎大家到 TON Research 論壇發表自己在 TON 上面遇到的問題、心得等等。 (forwarded from Yang)

zilin: 这也太离谱了，他晚上睡得着吗 (reply to 34510)

z: 有哪位仁兄懂tonviewer上的插件开发的？有偿咨询。

cai: 是owner错误吗 (reply to 34628)

cai: 我也是坤坤的粉丝。坤坤是我的故人。

cai: 验证的合约是这个https://verifier.ton.org/EQA362tjDbgG4hEwfxB09LBXDjqmEO_MXRfBu_DI-Sv-N3vr?testnet

happy: 有SDK么

Cake: 想咨询下大家，jetton wallet 可以单独设置 metadata 吗

Allen: 但是現在ton research 不給註冊⋯ (reply to 34635)

🐈‍⬛: 我想问在哪里查看ton链上的小游戏项目 我现在只知道一部分还有一部分全然不知

gavin: 这个是什么？ (reply to 34642)

User<6086637958>: 小黑子 (reply to 34645)

Mr.A: 老哥,我没找到能通过from 哈希推算出 to hash的接口 (reply to 34630)

wikig: 用他的trace (reply to 34665)

Mr.A: 大佬细说 (reply to 34666)

wikig: 你的诉求是，一笔交易因为有多个Hash，你想用其中一笔查到其他交易是吧 (reply to 34667)

Mr.A: 同一笔交易,通过from和通过to查到的交易哈希不一样,有没有一种办法可以通过一个哈希拿到另外一个哈希

wikig: 那可以考虑用这套接口 (reply to 34669)

Mr.A: 好的,我去看看

Mr.A: 这个是节点的接口还是第三方的接口 (reply to 34671)

wikig: tonapi.....算三方接口A（

Mr.A: 我目前用的是节点,引入第三方数据的话有些不好搞,我先研究一下吧

wikig: 你是自建全节点的逻辑吗 (reply to 34676)

Mr.A: 是的 (reply to 34677)

Mr.A: 引入第三方数据源不太好办,公司的项目,引入第三方接口需要额外购买接口使用次数,而且会增加运维成本

wikig: 既然是自建全节点，照理说数据应该更全。  可以考虑通过message hash为关联做相关交易筛选 (reply to 34679)

Mr.A: 我重新查一下接口文档吧,ton不熟悉,刚接触

Mr.A: 这个链有点与众不同,对接了几十条链了,第一次遇见这样的

🅰🅻🅰🅽: 有沒有小夥伴知道為什麼當初 Jetton 標準設計的時候，不讓 burn 也帶有 forward_payload 呢？ 我感覺有的話 burn 可以更靈活些。

芭比Q: scan上如何看trans错误消息

cai: 我有时候真的不理解公司。直接在这个群里招一个会ton合约的不就好了。 招了一大堆自学ton合约的。结果感觉学的写的都很抽象。

Taro: 请教个问题，jetton这里为什么是uint256的格式？ts上怎么转换？

game00s1a: 我想问下.TG的小程序..咋去获取Ton余额??

Taro: 连接钱包才能获取余额吧 (reply to 34692)

User<6086637958>: 反正折磨的是下面的人，上面的人怎么会管牛马的感受 (reply to 34690)

gavin: 老板想省钱 (reply to 34690)

小光: 运行 Scan 分析代码  查看 Scan 生成的分析报告  在报告中找到标记为 "TRAN" 类型的错误消息  查看 TRAN 错误的详细信息,包括错误发生的位置、调用链以及错误描述  TRAN 错误表示代码中存在潜在的传递性安全问题,需要仔细分析。 (reply to 34689)

game00s1a: 链接了..但是..官方的API里面没有任何获取余额的接口 (reply to 34693)

carol: 因小失大，菜鸟写合约就是给人送钱

game00s1a: 出了问题..找谁呢? (reply to 34690)

game00s1a: 外面的人..它会到你公司下写吗?

Evan: 哈哈哈哈

Evan: 都是自学的

Evan: 抽不抽象看水平

Evan: 现在开ton培训班蓝海

game00s1a: 万一..写合约的人..留个后门啥的.

wikig: 不是自己的公司，自己留blackdoor (reply to 34699)

wikig: 多爽（

game00s1a: 公司损失谁来负责?

wikig: 光速盗币，然后走tonnel洗币

wikig: 而且可以把这个行为写的很绕，装成逻辑事故的方式哈哈哈哈

wikig: 反正不能给你追责吧哈哈哈哈

game00s1a: 看公司的实力吧。 (reply to 34712)

game00s1a: 没实力的话..绝对会追责

Evan: 仿照官方案例写成并发bug就行

Evan: 除非能查到你账户有币，不然怎么都不好追查

Evan: 🥹

He: 有大佬知道买游戏道具怎么接ton钱包的支付呀

wikig: 走tonconnectui捏，但是现在最好直接接telegram star (reply to 34718)

User<6086637958>: 没一个懂的人，怎么敢找外包写合约的

wikig: 没法定则啊，大家都是按照规范写的，然后跟公司说要去找审计不然自己不担责。  审计大部分都是交钱放你挂名，审不了一点 (reply to 34714)

He: 有文档嘛大佬 (reply to 34719)

wikig: 查不了一点。现在ton上混币协议还是很多的 (reply to 34716)

Evan: 不是超大额的根本就无力追查

wikig: https://ton-connect.github.io/sdk/modules/_tonconnect_ui.html  注意，你现在是卖卖游戏道具，根据applepay的限制，你要使用这个，不然会被ban  https://core.telegram.org/bots/payments-stars (reply to 34722)

gavin: 不要混币。。。容易被bn冻结 (reply to 34723)

gavin: 兄弟 你知道怎么查看我的这个bot一共收到了多少 stars吗？ (reply to 34725)

He: 好的谢谢大佬我研究下 (reply to 34725)

wikig: 拿命ban。走ton上混币一波，然后走simpleswap或者ff.io到xmr隐私链上，再走去中心化交易所。  bn对这种成熟的洗钱流程ban不了一点 (reply to 34726)

wikig: 好家伙，这个还能看的吗（ (reply to 34727)

gavin: 你好专业啊 (reply to 34729)

User<6086637958>: 业务挺熟练啊

gavin: 我就想知道收到用户支付过来stars 怎么变现啥的, 目前连流水都看不到 (reply to 34730)

wikig: 那帮在evm上到处打Oracle攻击或者flashloan攻击的家伙，大部分都是走tonando然后走一遍中心化桥到隐私链防止被gank的 (reply to 34731)

wikig: 不是说七月才出来吗 (reply to 34733)

wikig: 我看文档说7月去看fragment

gavin: 这不马上了么 (reply to 34735)

wikig: 估计也是准备仓促

gavin: 这个就叫作专业 (reply to 34734)

wikig: 7月初也是7月，7月底也是7月哈哈哈哈哈哈啊哈 (reply to 34737)

Mr.A: 感觉大家都很专业啊

wikig: 看得出来telegram跟apple的battle还是很仓促的 (reply to 34738)

wikig: 而且不是前两天telegram给apple store给ban了几个小时吗（

wikig: 不太清楚，我没验证（没apple淦

Alice: 所以谁最终荣获一碗猪脚饭 是坤坤吗 (reply to 34487)

gavin: 他那个问题2个ton 估计打不住,所以没解决😁 (reply to 34746)

Alice: 😆😆😆hahha

Alice: 氛围不错

wikig: 话说上周六的深圳 meetup你们有人去了嘛（ ？

Mr.A: 大佬们,ton usdt转账,交易上链,但是状态是失败的,这种交易有什么特征?该怎么识别?

MEW: tornado/railgun->thorchain->一些迪拜所 (reply to 34734)

wikig: 也可能是一些之前hk合规化之前的所。比如HKD或者JPE (reply to 34755)

User<6086637958>: 我试不了，他owner限制给我banl (reply to 34644)

芭比Q: ton的开发文档怎么感觉这么零乱

User<6086637958>: 一点干货都没有 (reply to 34750)

wikig: 还真是 (reply to 34762)

gavin: 还真是 (reply to 34763)

wikig: 笑死原来你们在的吗，早知道就在群里吼一声线下面基了

Taro: 说了些啥呢？ (reply to 34762)

wikig: 我是那个maxwell讲 链抽象，做统一钱包，然后站起来跟他讲在做的东西撞车了的那个哥们

MEW: 拉个群吧

MEW: 我也在..

User<6086637958>: 啥也没说， 商业互吹一波 (reply to 34766)

User<6086637958>: 然后各自交朋友

wikig: 笑死真是

User<6086637958>: 最可恶的是

wikig: 但是来的人太多，TONX的哥们在门口没票不给进笑死

User<6086637958>: 不能混吃混喝

User<6086637958>: 我就是奔着这个去的

wikig: （跟hk那个比确实差好多待遇

gavin: 没有茶歇吗

wikig: 确实没小蛋糕了

wikig: 闹麻了

gavin: 没有抽奖吗

Taro: 那确实罪孽深重 (reply to 34775)

wikig: 深圳小蛋糕比hk便宜那么多

wikig: （居然没有小蛋糕

gavin: 下次不能去了 (reply to 34775)

gavin: 当初参加eth沙龙

gavin: 每个人领100个eth

gavin: 给我都没要

Taro: 嗤之以鼻 (reply to 34787)

Taro: 😄

User<6193384291>: 😳最早V神来的时候嘛 (reply to 34787)

MEW: 来，下次面基

MEW: 讨论点牛逼的技术

wikig: 好欸，下次面基hhh

User<6086637958>: 这能加wx群的吗

wikig: 笑死，虽然但是，我们应该都在那个，dev meetup的wechat群里吧

MEW: maybe

User<6086637958>: 主链币和erc20的关系

wikig: 具体问题是指？ (reply to 34802)

wikig: 这个好理解 (reply to 34806)

MEW: 可能是那个老哥理解错了

wikig: TON上是。每一个复杂交易中独立的call都有一个hash。我举个例子

MEW: 练习生

wikig: https://tonviewer.com/transaction/182b0b13679d6015c2227eb2e311026e0803a52af5593ab8db92c7e927702f66  https://tonviewer.com/transaction/e11f1ca370dedb47b8adcfc89e7e6a24d7bb938c5f7ec5b8eb0421609ed55af9  https://tonviewer.com/transaction/ede8101c9e2b95190d6d308289b505aea8934f0282c5299f78cdcb8498fcc143  https://tonviewer.com/transaction/d67bc94251bce83c00a7a91c019857bbddf06d79057be84bdc122e5dd18d5ad8  https://tonviewer.com/transaction/7eabc6532717852a79387c3262845430aa577c92754c7651570fa8cd0320b9fb (reply to 34813)

MEW: 估计他是直接看字段里有from和to，然后又有一堆hash

MEW: 没太搞懂

wikig: 比如这一大票交易，都指向同一笔大交易的 (reply to 34814)

MEW: 他需要的是一个根据trace中某个hash，找到完整trace的方法

wikig: 但是每个sub地址 发出的时候，会有一个新hash  这一点跟原有evm中，所有行为都在同一个hash下不同

carol: 他说的from应该是指钱包合约地址，  to是指Jetton合约这些地址。

j: 你好，有谁能告诉我如何通过 TonConnect UI 的 sendTransaction 方法发送 NOTCOIN？

wikig: 我认为是这个意思。想trace到完整交易树 (reply to 34818)

User<6086637958>: 我觉得他是想知道这些hash

User<6086637958>: 都是啥

MEW: xdm，有个技术小群，最后再收一波人 (reply to 34794)

wikig: official的docs有  https://docs.ton.org/develop/dapps/asset-processing/jettons (reply to 34821)

j: 我需要通过 TonConnect UI 的 sendTransaction 方法来完成此操作

wikig: 可以根据上面那个docs里面tonweb的构造部分。来修改 (reply to 34830)

User<6086637958>: 小黑子出来，tonutils-go store的uint最大是256，你可以在后面补一个bit位凑成257 (reply to 34487)

芭比Q: 这个包文档基本等于没有

hi_scott: 有吗，谁组织的，错过了 (reply to 34750)

芭比Q: 这个例子能transfer吗？ 感觉少一步 发送的动作

User<6086637958>: 需要contract.send(transfer)

芭比Q: 谢谢。这文档 真是服了

芭比Q: https://testnet.tonviewer.com/transaction/2b900e3914d99607353f896c80915e3091f9dbe9faf43b88ec0772b325b3e74e 用demo跑transfer ton一直错误，这个错误原因去哪里看呢

mx: 地址里面有版本号信息么

User<6086637958>: https://docs.ton.org/learn/tvm-instructions/tvm-exit-codes 看错误吗

gavin: 没有报错啊 (reply to 34841)

gavin: 你看的什么错误

gavin: 你转的目标地址没有初始化吧

芭比Q: 啊？这个传参的地址不是 友好地址的格式是吧

芭比Q: 我在试试看

芭比Q: 这个to 他到底要什么样格式的地址啊

芭比Q: 我直接从tonkeeper 复制过来的地址不行吗

芭比Q: 这个是什么意思

User<6086637958>: 未初始化的地址

JT | TOP: 问了下

User<6086637958>: 你这个也不是报错，目标地址为初始化给你吧消息bounce了而已 (reply to 34841)

User<6086637958>: 你要是硬要给对方转过去，就加个bounce: false

芭比Q: 未初始化是啥意思？ 查了下 表示这个地址没有传出过消息是吗 (reply to 34857)

User<6086637958>: https://tonhelloworld.com/01-wallet/

User<6086637958>: 学习文档

wikig: yep .  代表了这个wallet还未初始化 (reply to 34862)

User<6086637958>: 看一遍再来问问题

User<6086637958>: 可能你就没有问题了

芭比Q: 零零散散看过很多了。具体落到细节还是卡不少壳，这个未初始化 需要设置bounce 都没看到有提

User<6086637958>: ton的钱包，是一个合约

User<6086637958>: 这个合约在没部署的时候是空的，你往里面打钱

User<6086637958>: 当然就给你退回去了

芭比Q: 看到这个文档明白了

芭比Q: 😂

Mr.A: 前不久在群里提问了一个问题,表达的可能有些问题,导致很多人没理解,问题如下 通过from地址和to地址获取交易列表,同一条交易会有不同的hash 示例: EQAAJHEsmjfQaMvSyvqRASBN2LZyKkEHvh2KEbQZkhqWh65v  向 EQBsq5dFnlLFUl2-aYsTgEvhejBsYEyIbrb_o8qG8I5ah4vi 转账 ton from:   地址: EQAAJHEsmjfQaMvSyvqRASBN2LZyKkEHvh2KEbQZkhqWh65v    浏览器链接:  https://tonscan.org/address/UQAAJHEsmjfQaMvSyvqRASBN2LZyKkEHvh2KEbQZkhqWh_Oq#transactions  最后一条交易hash:  LgDTWIcfQMcYxOImY0ieN+1pGaDNCCgPw7XH6bRWat8= to:   地址: EQBsq5dFnlLFUl2-aYsTgEvhejBsYEyIbrb_o8qG8I5ah4vi  浏览器链接: https://tonscan.org/address/UQBsq5dFnlLFUl2-aYsTgEvhejBsYEyIbrb_o8qG8I5ah9Yn#transactions  最后一条交易hash: k+TUqFy2NaF8VoRV8O2AuH4tkksM7sTDMl/sC6yI53Y= 疑问:  1.两个浏览器链接中的最后一条交易是同一笔交易,为什么通过from和to查询交易列表同一笔交易会出现不同的hash?     2.已知一笔交易hash(LgDTWIcfQMcYxOImY0ieN+1pGaDNCCgPw7XH6bRWat8=)能否推算出另外一笔交易hash(k+TUqFy2NaF8VoRV8O2AuH4tkksM7sTDMl/sC6yI53Y=)

MEW: 这些搞完，后面还有大坑等你，如果是全自建数据的话 (reply to 34877)

MEW: 得rescan

Mr.A: 不至于,不需要深度解析,够用就好

wikig: 上述群聊记录已经大致讲过了这个问题  1.跟EVM或者Solana那种整笔交易原子性，有一个独立Hash的逻辑不同 TON上每个独立的call或者子交易都是独立的不可预测或者不可提前计算hash的。所以正如我上面举例的一样，有一堆子交易hash指向同一个大交易  2.目前我没有找到推算方法，但是，可以使用tonapi的trace方法。实现拿到所有的解析。 (reply to 34877)

wikig: 但是如果是自建数据的话，我并无见解。可以考虑通过搜索messagehash的方式对所有的交易进行归类分组，实现trace的职能。 (reply to 34881)

Mr.A: 唉,看来是搞不出来了,我尝试换方案吧

Mr.A: 你知道怎么根据一个哈希知道另外一个hash?

MEW: hash->trace->[hash]

gavin: 可以拿到 prev hash (reply to 34886)

gavin: 下一个能拿到上一个 如此一直迭代

wikig: 如果是全节点的话，是有所有的onchain交易的。  照理说，你是能根据message进行划分的 (reply to 34883)

gavin: 就能拿到整个

wikig: 但是这个pre-hash的操作，拿到的是这笔交易的发送者的上一笔交易吧我咋记得 (reply to 34889)

Mr.A: 不搞了

Mr.A: 换方案

Mr.A: 草

gavin: 你别想的太复杂 (reply to 34877)

gavin: 我跟你简单的说一下你就知道了

gavin: 在分布式系统里异步操作 你发一笔转账 内部就是会有两个动作啊 第一笔hash是 A 发出, 第二笔hash 是B收到 所以就是两个

Mr.A: 不搞了不搞了,在业务层面做更改,避开这个蛋疼的点

gavin: 同步操作的那种才是只有一个

wikig: 不懂就问，什么级别的业务，要自己跑个全节点啊 (reply to 34899)

wikig: 不会是cex吧哈哈哈哈

gavin: 肯定是个大项目 (reply to 34902)

MEW: 巨大项目看起来是

Mr.A: 答对一半

MEW: cex的wallet

wikig: 你要真是cex级的，上面讲哪些躲不掉的。  但是可以考虑通过，做类型约束，来降低筛选量 (reply to 34905)

Mr.A: 资产托管，不可能用别人的节点和数据

wikig: 对的呀，所以躲不掉的（

wikig: 老老实实写吧哈哈哈哈啊哈哈哈

Mr.A: 客户中有交易所，所以我才说你说对一半

wikig: 写完之后开多几台服务，然后顺带卖api服务

wikig: 哥们第一个跑来用（

Mr.A: 😅

gavin: 你这个是个大活 (reply to 34909)

Mr.A: 还好吧,比挖矿简单多了

Mr.A: 大家都是做什么的

wikig: 好像干啥的都有  最近我在折腾把uniswap丢到webapp上，然后实现原生体验的多链兼容MPC 钱包 (reply to 34922)

MEW: 搞抽象的 (reply to 34922)

MEW: 哈哈

Mr.A: 细说抽象

Mr.A: Ton上有啥比较好的dex吗？

Mr.A: Defi类的项目有啥做的比较好的么

Mr.A: 看看能不能跑几个机器人

gavin: https://ston.fi/ (reply to 34929)

Mr.A: Ok，我看看，我的机器人全都跑在evm系，非evm的还没有尝试过

Mr.A: 拿ton练练手

Mr.A: 上边好多币不认识,有啥比较出名的代币么 (reply to 34932)

gavin: USDT (reply to 34937)

Mr.A: 看了一下,有利润,不多

cai: 有好的ton合约教程不

U: 大佬们如何绕过有些mini app 不能在pc端打开的限制

— 2024-06-26 —

He: 购买游戏道具的话必须使用这个支付？

mx: 这个只是swap (reply to 34932)

mx: uniswap

csyr: @wake

csyr: here

mx: 我觉得不是 (reply to 35021)

He: 有大佬用cocoscreator 在ton开发有游戏？

gavin: 有的 (reply to 35027)

He: 可以直接在cocos里面接ton支付这块嘛

gavin: 可以的

He: 有相关的sdk嘛大佬

He: 我看有unity的cocos没找到

gavin: https://github.com/CocosTechLabs/game-engines-sdk

gavin: 你用这个试试

He: ts

gavin: typescript (reply to 35036)

He: 感谢大佬分享 (reply to 35034)

Lynn: 各位大佬，请教个问题，我们现在在构建我们的Miniapp，有个功能是想验证 我们的用户是否打开了另一个miniapp或是已经添加某个Bot，这个功能是要如何实现啊？

Lynn: 大佬有方案吗？😜 (reply to 35045)

gavin: 都能拿到uid 直接一关联就行了吧 (reply to 35047)

Logan 🐯: nft miner的调用例子有不

Mr.A: tonKeeper不支持usdt这种合约币转账吗?

Lynn: 如果另一个miniapp不是我自己开发的，我就拿不到？ (reply to 35048)

Mr.A: 我看官网页面上显示支持,刚下载还不会用

Logan 🐯: 啥情况

Mr.A: 这群里咋啥都有 (reply to 35026)

Mr.A: 教程居然有方言版的

Taro: 我也想知道这个jetton verify要怎么做 (reply to 35067)

csyr: 有没有一个接口可以获取用户是不是TG会员的？

csyr: 哪位大神有用过么？

carol: permium用户吗？ (reply to 35076)

X RAY 🦴️️️️: 有人知道这个验证码怎么通过吗

X RAY 🦴️️️️: 真是什么防呆设计吗 硬是没整明白 这要点啥

Taro: 。

Taro: 看到啥打啥，打错了再试过就是了

X RAY 🦴️️️️: 我真服了，是输入啊，我以为让我点图片上的字

X RAY 🦴️️️️: 感谢。

csyr: yes, i found that there is a field to indicate in init data~ thank you (reply to 35082)

X RAY 🦴️️️️: https://docs.ton.org/mandarin/develop/get-started-with-ton#%E5%9C%A8-ton-blockchain-%E4%B8%8A%E6%8C%96%E7%9F%BF 根据入门指南，我支付了testnet的费用，但是没有收到nft，是怎么回事？

X RAY 🦴️️️️: https://testnet.tonviewer.com/kQAv9tex7n3_CTUGLvXouLVQpA-q1sjscACIDW1jQCgfKF5h

asher: testnet很慢，我上次试这个过了几天才看到钱包里有nft了

Logan 🐯: func如何编译成pkg

asher: 可以参考用官方的blueprint框架生成的项目

X RAY 🦴️️️️: 沒收到nft 也不知道成功沒成功...

summerishere: 如何从链上数据确认jetton token 充值成功的呢？

aier: 有大佬知道怎么查询一个地址的jetton和nft地址吗？

aier: 😂😂我现在连查询这个地址都不知道咋查询，大佬你知道不？ (reply to 35110)

wikig: 是指监听某一笔交易有没有实现转账吗？ (reply to 35110)

summerishere: 对的

wikig: https://github.com/Tonspay/Tonspay-monitor/blob/master/monitor/ton.js  很久之前写过一个很挫的例子，可以试试看能不能用（依赖tonapi 或 dton.io (reply to 35116)

summerishere: 我发现有些交易状态是成功，但是jetton是转账失败的

summerishere: 好的，谢谢，我看下 (reply to 35117)

aier: 大佬们，有没有人知道我的问题咋解决？我知道我的 主钱包地址，之后如何查出来jetton和nft地址呢？

aier: 只能肉眼去看吗？

Logan 🐯: 啥情况

wikig: 可以根据jetton地址去算（如果coding1的话 (reply to 35121)

wikig: 是的，但是这句话有点小问题  交易状态是指什么的交易状态？   一笔jetton交易行为涉及到多笔交易（  子交易状态不一定是成功的 (reply to 35118)

carol: TON的地址都是code + stateInit计算出来的，你需要的是Jetton的 code和stateInit

aier: 可是nft呢？没有一个接口替我去统计这些吗？ (reply to 35127)

carol: nft的地址就是nft的code和stateInit

wikig: 如果是接口的话，可以去看看tonapi的docs看看有没有你想要的，或者toncenter  但是吧，正常来讲，是可以算出来的 (reply to 35130)

aier: 好吧，我去找找看。我还是觉得设计有点问题，我构建自动服务是可能并不知道我有哪些nft和哪些代币。。

aier: 我希望程序能自适应的查到并处理这些玩意

summerishere: @carzygod 方便语音一下吗？我们希望接一下ton链jetton token的充值

gavin: 你需要一个索引服务 (reply to 35133)

gavin: 有第三方的

gavin: https://tonapi.io/

aier: 收到，我看看，感谢

wikig: 可以是可以，只是我觉得上面的code应该，写了大致的方法了 (reply to 35138)

Degen: 有没有大佬有脚本领取测试网的币

Degen: 每小时领取一次

Degen: 要输入验证码

wikig: puppeteer + OCR 。 应该不是难事。 (reply to 35147)

Degen: 大佬帮我写 哈哈 我想票到底

Degen: 我爱你

wikig: 笑死，我觉得吧，上手puppeteer快的，就是OCR你可能要折腾半天，毕竟现在人机验证不知道一般OCR能不能过哈哈哈哈

Degen: 哈哈 我去研究下puppeteer

Degen: 但是好像只能用小程序领吧？ 没有看到网页，不知道具体链接呀

gavin: 你要撸测试币干啥

Degen: 发图

Degen: 主要为了批量发图测试

carol: 1个小时领5个TON很多了

wikig: 一回事， miniapp就是web (reply to 35156)

Degen: 你说的对，小程序是指向web的，但是看不到链接呀 (reply to 35163)

Degen: 我要发几万张呢 一个nft 消耗0.08 (reply to 35162)

Logan 🐯: 这里的数据格式就是 String嘛

wikig: 很简单啊，你打开浏览器版本，f12打开编辑模式，然后看网络请求 (reply to 35166)

Logan 🐯: 怎么说这个 (reply to 35171)

wikig: 看起来是的吧（反正先传着呗） (reply to 35172)

lin: 有人知道怎么发送不需要签名的消息吗

lin: 老哥 我是说ton链上发送交易

小光: 使用无需私钥的功能 使用第三方服务 离线签名后上链 部署智能合约 (reply to 35187)

wikig: 但是这个流程中，还是执行了 离线签名 这个 签名行为 (reply to 35189)

wikig: 我认为他想问的是，如何通过修改wallet v4 合约中的验签部分逻辑，实现无限权限操作行为。然后部署了无限权限钱包后通过无签名交易上链

wikig: （我也想知道（

Logan 🐯: 这种方法怎么暴露的

gavin: 直接改就行,很简单啊 (reply to 35193)

Logan 🐯: 就是显示在这里

wikig: 应该要去explorer那里去开源合约吧（至少开源interface？ (reply to 35196)

gavin: 你的合约开源了吗 (reply to 35196)

Logan 🐯: 去指定网站是吧

wikig: 就是，改完之后，部署之后。交易如何发呢（？  不签名的话我想不出来交易怎么发 (reply to 35197)

wikig: 是的 (reply to 35201)

Logan 🐯: 我用的Pen 的nft合约

gavin: 直接发boc啊 外部消息 (reply to 35202)

wikig: 可是send BOC这个行为不需要签名吗原来（？ (reply to 35205)

gavin: 我去整个demo试试 (reply to 35206)

wikig: 牛批

Logan 🐯: 这种怎么区分的

qknow: 请问 bot 机器人可以给所有用户发送信息不，  能不能批量发，还是只有一个用户一个用户的发送信息

wikig: 这不是....人家的marketplace嘛 (reply to 35209)

Logan 🐯: 哦对

Logan 🐯: 业务端的数据，我以为放在链上的

wikig: 理论上，你想怎么发怎么发，但是人家收不收得到是另一回事。如果没有给你发送过消息的bot或者subscribe的bot，你可以给他发，但是他收不到就是了 (reply to 35211)

User<6086637958>: 这里一改就完事了

wikig: 是的呀，我是说，改了之后将其作为wallet部署了之后，怎么实现无签名发送交易行为（ (reply to 35217)

User<6086637958>: 签名和发消息本身就是两步的操作，不影响

User<6086637958>: 吧sdk里发交易的copy一份按你的要求改一改就行

Logan 🐯: 你们对于nft合约的mini做鉴权不，还是随意发行nft

Logan 🐯: 一般来说

wikig: 也就是说，构建交易的时候，不做签名直接发送boc的形式发出即可（？ (reply to 35222)

User<6086637958>: 我看了下，这个sendExternal甚至不用改， 直接构造你要的cell就行

User<6086637958>: 你自己写的业务合约，其实也是可以接受external的message的

User<6086637958>: 想咋玩咋玩

Logan 🐯: 你们对于nft合约的mini做鉴权不，还是随意发行nft；一般来说

gavin: 对就是这个意思 (reply to 35230)

User<6086637958>: 随意发

User<6086637958>: 有缘人得知

wikig: 只要能发，其实wallet合约随便改，以及验签部分也可以改成之前TRON上那种私钥钓鱼 (reply to 35228)

carol: 签名验证是标准钱包合约(v3,v4..)规定的,  去掉签名验证就不是钱包合约了

Logan 🐯: 我看这个修改collection拥有者都不鉴权的嘛

Logan 🐯: 有问题

gavin: 在上面呢 op顶部就鉴权了 (reply to 35239)

User<6086637958>: v我五十ton， 教你花式限制mint 功能

wikig: 但是interface是不变的，那么..... 对于插件钱包之类的应该还是照常当做wallet处理的 (reply to 35238)

Evan: v我五十ton， 教你花式限制mint 功能

Logan 🐯: 哦哦 看到了

Evan: 马上安排一下用btc钱包签名mint

carol: 地址变了，tonkeeper之类的钱包app认不出来

Logan 🐯: func没有像tact那样自动生成这些的方法嘛？

wikig: 确实 (reply to 35251)

Logan 🐯: 有一些项目是用户可以自己随意发行nft就不需要鉴权了是吧 (reply to 35241)

gavin: 这个得问你的产品经理是什么需求了吧 (reply to 35256)

Logan 🐯: okay 我看有一些是直接请求collection的

Logan 🐯: 但是如果有了鉴权都要通过一个中间的代理合约去调用collection才合理

Logan 🐯: 我这么设计没问题吧 (reply to 35260)

lin: 这个用的是哪个sdk @ksskjsjs (reply to 35223)

Logan 🐯: 这个是把数据上传到这里就会显示嘛

User<6086637958>: tonutils-go (reply to 35263)

lin: 对应ts是哪个sdk？

MEW: 解答问题不利于赚钱

MEW: xdm，专注印钱

MEW: 不要偷懒

User<6086637958>: 有道理，专心搬砖去

User<6086637958>: ts自己找一找

gavin: https://testnet.tonviewer.com/kQBDsjLbwr-5H-Lal7w30-L8sPpNgMX45nechmHN_juMHKgw (reply to 35207)

gavin: 整出来了

gavin: 这个wallet 任何人的私钥都能通过发交易

gavin: 5个testnet ton送给有缘人

gavin: 把这行代码注释掉就行了

wikig: 笑死好家伙 (reply to 35277)

User<6086637958>: 看来浏览器是根据codehash来判断钱包的，改了就不显示了

User<6086637958>: 这个就叫专业 (reply to 35284)

wikig: 话说，这玩意儿导到wallet之后（私钥

wikig: tonkeeper之类的wallet还能正常解析其地址和获取balance嘛（？

wikig: 毕竟interface没变诶

wikig: 如果可以的话，理论上在鉴权上加手脚（，比如验证签名者与私钥不是一个权限主体）

wikig: 不就有能玩当初那套TRON上的私钥钓鱼了

gavin: 当然不行 (reply to 35288)

gavin: 字节码变动了啊

wikig: 也是（

MEW: 是的 (reply to 35285)

Jamil: 这项目有1000美金空投。

MEW: 群友之前扫了mainnet所有trace的root，且codehash不是正常钱包的合约

MEW: 群友都在印钱，你们还在这解答问题

MEW: stop！

Yang: @aablsol TON Research 已修復完畢，你再嘗試看看。

JET'K: 钱包地址和合约地址系统上如何区分？

JET'K: 地址上有不同规则吗

Allen: 我還以為是我的問題 太感謝了 (reply to 35317)

X RAY 🦴️️️️: Error: exception in fetch(https://ton.access.orbs.network/mngr/nodes?npm_version=2.3.3): TypeError: fetch failed

X RAY 🦴️️️️: 这是个什么错误 合约部署了，这是网络错误还是缺少合约方法？

enpitsulin: 代理

Degen: ton 是不是有个小程序分析sdk

Degen: 类似微信小程序一样的 分析统计的

MEW: v10TON (reply to 35345)

Degen: ??

Degen: 测试币吗

User<694804783>: 你好  我如何验证Jetton，以避免在tonkeeper上获得未经验证的令牌

Degen: https://docs.tganalytics.xyz/

Degen: 找到了 免费分享给大家

User<6732698731>: 😁

User<6732698731>: 😐

User<6732698731>: 😱

— 2024-06-27 —

Logan 🐯: 你们的nft Collection要写提现方法嘛

gavin: 要的

Logan 🐯: Item应该不用写吧啊 哈哈

Logan 🐯: 我看官网提供的没写提现方法 要写自己写个

Logan 🐯: ton 跨链桥的文档在哪里

11: 想问一下各位大佬，这里的https://testnet.tonviewer.com/transaction/8122380cefa06d5a19770f078da2123d6c0eaa2a12c16b7c40a99c461334d4b2 为什么会出错啊，我是调用的ft的mint方法

11: 但是mint成功了，这个excess显示错误是什么意思

gavin: 你参数传错了 (reply to 35416)

gavin: excees 应该返回到A才对 你返回到了jetton master

Logan 🐯: 这个怎么验证

Logan 🐯: queryId有啥用来着 nft和ft的合约里

Logan 🐯: nft里一般交易是怎样实现的，通过makerplace调用item的transfer嘛

Logan 🐯: 还是分布操作的？消费者付完钱，nft拥有者手动transfer？

Logan 🐯: 这个只有nft的拥有者自己能调

Yang: 找 Tonkeeper (reply to 35423)

Y: 通过这个api获取的交易信息，如何解析jetton的转账呀

Y: https://tonapi.io/v2/traces/96f1c64959e4708cfa8647ac6b08e0e75172fd14d2ce835923a4b57870e2b5c5

gavin: 解析body 里面的boc

Y: 有文档地址嘛

Y: 我看看

Y: 请求出来是这样的，是不是解析第二个jetton_wallet里面的row

King's uncle: 2/1 = 0？是不是doc写错了

Joe: ton 用哪个python sdk开发 大佬们

Joe: 可以python创建地址

Joe: 想离线创建地址 不知道怎么弄的

Logan 🐯: nft里一般交易是怎样实现的，通过makerplace调用item的transfer嘛

Joe: 官方的吗 (reply to 35454)

Logan 🐯: content_url放的是啥

User<6286494483>: ton链转账能指定某个钱包支付gas费么

Alex: 想问下大家

Alex: tg mini app的用户IP地址，是通过tg的SDK

Alex: 还是通过客户端HTML5界面拿到的呀

Logan 🐯: 合约如何调用另外一个合约的查询方法？

maktub: 请问 rpc. getTransactions 返回中有哪个数据是用来标识交易成功还是失败吗

wikig: 可以参照下tonkeeper的battlery (reply to 35464)

wikig: 那可能是唯一有gsn服务的地方了

User<7298188941>: 🎉NEW JETTON AİRDROP🎉 (reply to 2)

User<6286494483>: 测试链 哪里能领取到TON币

🦴 Brenda: 大佬们怎么印钱的

🦴 Brenda: 发币吗

🦴 Brenda: 我听说ton搞游戏比较好

🦴 Brenda: 是不是真的啊

Evan: 都在并夕夕

User<6286494483>: 这是什么情况

User<6286494483>: 运行的官方 的  npm create ton@latest  npx blueprint run

Ou: 我遇到同样的问题，这个是找Tonkeeper官方处理吗？ (reply to 35433)

Mr.A: 没有戳你的意思,不用向我解释这么多 (reply to 35450)

Mr.A: 第一: 联合国会员国有不同的观点且通常使用不同的语言。 联合国共有六种正式语文，分别是阿拉伯文、中文、英文、法文、俄文和西班牙文。不清楚你说的这个六大语言包含粤语有哪些依据 第二: 在语言学上，尽管语言（language）与方言（dialect）之间没有明显界限[3]，但语言与方言往往引起分类争议。中国大陆绝大部分学者将吴语、闽语、客语、粤语等汉语变体称作汉语的方言，不过也有部分欧美学者称该等变体为语言--来源 维基百科 第三: 我没有引战的意思 (reply to 35450)

wikig: 作为广东佬，来捧捧场hhh (reply to 35450)

wikig: 两广在普通话运动浪潮下，基本是双语通吃。  但是吧，其实我是感兴趣的是，明明西南官话群体更大哈哈哈哈哈 (reply to 35510)

Mr.A: 我只是随口说一句,没有地图炮的意思,结果对方把孙中山都拉出来了,搞得跟我没有读过书一样 (reply to 35513)

wikig: 真讲方言群体基数，桂柳话、四川话、贵州方言等等混杂的西南官话体系的通用程度好像确实比粤语无论是人口基数还是地域广度都更大。  所以我也好奇为什么没有西南官话版的语言版本或者语言会议。  所以.....我个人看法是，粤语区发声实力更强劲，或者说是粤语区的覆盖范围在东南亚整体经济水平更高，因而相对而言生态会更完备一点，以至于完备到超出了 方言 的犯愁。 (reply to 35514)

Taro: 牛逼，URL有吗 (reply to 35450)

Logan 🐯: 为什么有的nft_collection有这个页面

Mr.A: 嗯,你认为是语言那就是语言,毕竟同一件事务每个人都有不同的定义 (reply to 35517)

Mr.A: 我在重申一遍,我没有开地图炮的意思,不要玻璃心,也不要动不动就把中山先生拉出来 (reply to 35517)

User<6086637958>: 咩吖

wikig: （虽然但是，我还是看做是方言为主hhh (reply to 35522)

wikig: 毕竟缺乏文字作基础（当然啊，威玛拼音或者粤语拼音当初要是真搞了，拉丁化了，那就很难界定了）

Mr.A: 不该说方言这句话的,我真的完全没有引战的意思

wikig: 应该没人...觉得这是个争议点吧（？ (reply to 35527)

gavin: 是的 没人觉得。。。

🌑: 玩币的人应该很少对政治感兴趣

wikig: 我是觉得，基于两广地区的下南洋运动，导致粤语文化圈在东南亚分布较广，然后现代化与互联网化热潮下由于其经济实力导致的发声更大，故而有脱离“方言”体系成为语言体系的势头。  这一点跟湾湾体系下的闽南语生态有一定的相似处？  （来一起唱《豪大大鸡排》😂） (reply to 35517)

Logan 🐯: 为什么有的nft_collection有这个页面

Logan 🐯: 怎么弄出来的

gavin: 为什么不能有。。。 这个是tonviewer 针对nft collection合约的功能展示 (reply to 35533)

Logan 🐯: 我部署的没有

gavin: 只要是标准规范的nft_collection 能解析metadata 就都有

gavin: 那就是你的metadata规范不对

gavin: 或者是你没mint吧 要有item才行

Logan 🐯: 有了啊 已经发到我账号上了

Logan 🐯: 还有这个未验证啥情况

Logan 🐯: 这个是nftCollection的Meta

Logan 🐯: 是不是content_url的问题？

Logan 🐯: content_url我写的图片地址

gavin: 有可能

Logan 🐯: 这个未验证是啥情况

🌑: 请教个问题，有办法检测到用户在使用鼠标连击的程序来撸空投吗？

wikig: 你的意思是，想做抗女巫？ (reply to 35551)

wikig: 抗女巫不是这么做的，前段信息不可信，最好从逻辑上规避。  不然哥们有一万种方式规避

wikig: 最简单的场景，我上Puppeteer起无头浏览器集群，模拟点击流。  跟普通用户做不出区分的 (reply to 35552)

🌑: 明白了谢谢 (reply to 35555)

wikig: 所以最好在行为流上加校验鉴权。  当然，也可以让用户付出算力成本，让集群方案做不到集群化。  https://www.tonshive.xyz/  可以考虑这个服务 (reply to 35556)

deng: 你们有没有遇到转账,转过去就会立马退回来的情况

wikig: 注意看你的转账地址是EQ还是UQ。  我猜测是这边用了可退回转账导致的 (reply to 35560)

deng: 就是让我确认,会出现2个动作的确认

wikig: 要不是试一下address用tostring()走一遍，toString里面的参数在isbounchable那一位设置为false (reply to 35559)

deng: 我转账的帐号就是一般的TON 测试 (reply to 35562)

wikig: testnet也是分isbounchable与否的 (reply to 35565)

deng: 一般的这种地址

wikig: isBounceable

wikig: https://github.com/toncenter/tonweb/tree/master/src/utils

deng: 一般的UQDIslgeeztKiJ*******w3这种地址还能toString 么 (reply to 35571)

deng: 我拿到的就已经是这种了

Mr.A: 请教个问题,通过节点/sendBocReturnHash接口推送交易上链,接口返回的hash: IubeAC8v-HTJoQ0qnKQjKEOMJpcuKTATzF3G7JW8nTM=  但是通过浏览器搜索该笔交易,浏览器页面显示的hash: l+cmm2nbVrne66CgS+cziqbo9ztK1IARI8568Hgdhuw=  疑问: 这两个hash都能通过浏览器定位到同一笔交易,二者有什么对应关系吗? 浏览器链接: https://tonscan.org/tx/by-msg-hash/IubeAC8v-HTJoQ0qnKQjKEOMJpcuKTATzF3G7JW8nTM=

wikig: 先把他转到address的结构  from一下先 (reply to 35573)

deng: 我试试

wikig: 这个方法拿到的是message hash吧？   而且务必记住，ton上每个交易对应多笔交易。 每个子交易都对应一笔hash (reply to 35576)

Mr.A: 我好像知道了 IubeAC8v-HTJoQ0qnKQjKEOMJpcuKTATzF3G7JW8nTM= 是in 里边的hash, l+cmm2nbVrne66CgS+cziqbo9ztK1IARI8568Hgdhuw= 是交易hash

wikig: 话说那个方法返回的，真不是message hash吗我咋记得 (reply to 35580)

Yang: 是的，這是要自己填表申請的，請到 Tonkeeper 頻道去找相關資訊 (reply to 35504)

Mr.A: 接口返回的是in里边的哈希 (reply to 35581)

wikig: 是的，in_message 的 message hash，没错的 (reply to 35584)

User<1842230456>: 有人验证过这个数据吗 我这边验证一直失败

wikig: 这个是上面那个demo就可以直接用的啊（ (reply to 35586)

wikig: 我这边验证好像一直没啥问题。

enpitsulin: 可以去 tonscan 上看看 exit code如果是合约账户可能要看合约代码了 (reply to 35561)

enpitsulin: https://docs.ton.org/mandarin/learn/tvm-instructions/tvm-exit-codes

Joe: ton直接分层钱包吗

Joe: 支持

MEW: 这个exit code，能直接在区块数据中得到吗 (reply to 35590)

deng: 就是说帐号是合约账户就不行是吧 (reply to 35590)

MEW: 目前我看几个sdk的tx都没有这个字段

MEW: 只能模拟执行才能得到

MEW: 🥹

MEW: 目前只能通过tx的out msg数量来判断

eqasw: 小程序支付必须充ton才能测吗

deng: 还是不行啊 (reply to 35564)

deng: 看上去那个字段就是false

wikig: 是指，还是会退回吗 (reply to 35604)

wikig: 额，你试一下，false和true打出来的格式不一样的 (reply to 35605)

wikig: 试试

deng: 是我toString后地址没改变

wikig: 你试一下，交叉打一下

deng: 嗯嗯

deng: 我试试 改成false 和true

deng: 地址是不是不一样

wikig: 照理说，交叉打出来是不一样的如果调用没错的话 (reply to 35617)

Sebastian: 请教一下，哪里可以实现类似微信开放平台的TG官方管理后台？  1、开发者申请支付权限； 2、开发者上架、管理多个bot、miniapp 3、统一查看所有应用的用户、支付等数据看板

deng: new 的时候 const address = new Address(“xxxxxxx”);

deng: 直接传字符串是没问题的吧

wikig: 之前他们不是说7月嘛。  然后估计.....telegram star比较仓促 (reply to 35621)

wikig: 应该是没问题的 (reply to 35624)

Sebastian: 哈哈 现在咋搞

wikig: 要不试一下交叉打一下 true false的情况比对一下有无差异 (reply to 35623)

Sebastian: 先申请stars？再去wallet pay里面

deng: 嗯嗯

wikig: 估计等下个月再议了，说是能在fragment上查询 (reply to 35627)

Ou: 官方文档这个jetton是发出去了吗，还是只是构建了消息，没把消息发出去？

wikig: 看你们啥场景了，如果不涉及apple条款的，直接web3链上支付也行的 (reply to 35629)

Sebastian: 在pay里面申请新游戏

Sebastian: 提示说是digital goods

Sebastian: 但搞链游

Sebastian: 不需要法币

Sebastian: 咋搞呢

wikig: 那确实是，那只能用telegram star

deng: address.toString(true,true,false) 是一样

deng: address.toString(true,true,true) 不一样

wikig: 话说你上面打的地址也不是testnet地址啊 (reply to 35640)

wikig: 你不会在testnet上给主网地址打钱吧（

Sebastian: 这里需要填BOT，大概率就是自动检查是否集成了Telegram-stars。之前提交多次用来占位的BOT都没有完成star的集成。

deng: 不是

Sebastian: 搞懵了

wikig: 毕竟之前没有telegram star要求 (reply to 35645)

wikig: 那如果地址是不可回退的，就要交易的不可回退有无设置了 (reply to 35646)

wikig: 具体是什么场景？往地址打钱？ (reply to 35646)

deng: 就是我做了个web,里面有充值,我直接申请了一个地址,然后别人充钱就是往那个地址转钱

wikig: 然后呢，这个地址初始化了没 (reply to 35651)

wikig: 有没有往外发过第一笔交易

deng: 收钱的地址？

wikig: 是的

deng: 有进行转账

wikig: 有对外发过交易是吧

wikig: 那没道理退回的

deng: 嗯嗯

deng: 我用true后的地址也还是一样 (reply to 35658)

deng: 动作有退回

wikig: 你要不试一下，手动用钱包去对false的地址转账 (reply to 35661)

deng: 手动是ok的

wikig: 手动是ok的没理由你这不行，怪

wikig: 要不show show code

deng: 那个地址我直接在telegram里转是可以收到的

deng: 代码很简单

wikig: 类似的写法应该，可以本地试试？ (reply to 35673)

deng: 你的ok

deng: 你的地址有做什么处理？

enpitsulin: 看下你之前失败的的tx

wikig: 你直接把地址替换成你的地址看看呗 (reply to 35677)

deng: UQAI9ack-mbNM

deng: 这种是啥地址 啊

enpitsulin: 主网钱包啊

enpitsulin: 你的是啥

enpitsulin: ~~EQ~~0Q 的话是测试网

enpitsulin: 哦 0q

enpitsulin: 记错了

wikig: EQ不是那啥，可退回嘛 (reply to 35685)

wikig: 啊？我记得我就钱包直接复制的，默认是不可退回地址吧我觉得 (reply to 35682)

wikig: 我记得

deng: 是的,默认是不可退回地址

deng: 这个里面的是你的地址么 (reply to 35673)

enpitsulin: 一般可退回就是智能合约嘛

wikig: 是的hhhh (reply to 35692)

wikig: 你改成你的试试

wikig: 这个倒不是，是之前他们出的诡异规范，导致了一堆问题 (reply to 35693)

deng: 真是奇怪

enpitsulin: 所以你出问题的 tx 给大家看下不就知道了嘛

enpitsulin: 有点晕

deng: tx是交易明细？ (reply to 35698)

enpitsulin: 你钱包转钱包被退回了就是报 TVM 错误了

enpitsulin: 就是交易哈希

deng: 我去找找

deng: 9d208742b990874e437070b8b203d48c6763903707cc0260151122927e48ca21

wikig: 退还了呀 (reply to 35705)

wikig: 中间那个 bounce 是trye

wikig: true

wikig: 所以你要不改成你的试试 (reply to 35695)

deng: 嗯嗯

enpitsulin: 你这个 to是合约吧 至少不是标准钱包

enpitsulin: 哦不是合约

deng: 好像是地址的问题

wikig: 可能 (reply to 35716)

enpitsulin: 这个地址都是 inactive 的诶好奇怪

deng: 我看看那个地址是啥

wikig: 那说白了不就是 (reply to 35718)

wikig: 没往外发过交易嘛

enpitsulin: https://tonscan.org/address/UQDIslgeeztKiJX5DOmlBXUOaqcXA78TOfGYr9VHGsGMYUw3

wikig: 对外发一笔交易不就结了

enpitsulin: 是这个吧

deng: 是

wikig: 写的很清楚了

wikig: uninit

wikig: 去对外发一笔交易init一下

deng: 这属于没发生交易？

enpitsulin: 是要转出去才是 active 吗 我以为收到就好了

deng: 但好像转账过啊

wikig: 就是，他的钱包合约没部署

wikig: 你要对外转出一笔

wikig: 或者

wikig: 用tonweb的walletdeploy一下

wikig: 对外转账相当于会自动帮你

wikig: deploy

deng: 好,我试试

deng: 应该ok了

wikig: en

enpitsulin: 所以这个地址你是怎么搞到的

wikig: 估计就是某个钱包生成的

wikig: 只是没对外转账过

deng: ok了

deng: 随便找的一个钱包生成的 (reply to 35745)

deng: 后端自己生成的,我调他接口,他返回给我的 (reply to 35744)

Steven: 有没有人知道这个 myAppExplorerService 是要自己实现么

deng: 应该是吧

deng: 看命名应该是自己的吧

Steven: 感觉也是，不知道调用哪个 RPC 实现

Steven: 看论坛也有人有一样的问题

wikig: 啊？这里上一步不是已经拿到message hash了吗 (reply to 35752)

wikig: 那走tonapi或者toncenter拿一下交易不就行了

Steven: 这个拿到的不是 hash 吧？

Steven: 这个签名里面可能有多个交易哈希

wikig: 我记得，你只能拿到，in_msg的message hash 在返回值里 (reply to 35763)

MEW: 哥，能解析拿到exit code吗？（不走tonapi） (reply to 35766)

Steven: 刚光播完应该没有 exit code 吧

Steven: 我也这么想的 (reply to 35766)

Steven: 我这个合约里面是有两个 transaction 的

Steven: 应该可以努力拿到 in_transaction 的 hash， in_transaction 里面还有多个 message

Steven: 一个 external_msg 一个 internal_msg

wikig: 应该拿不到吧，这个时候都还没走完结果 (reply to 35767)

wikig: 可以.....吗？  in_transaction hash 拿不到吧，那一步发生了吗在你拿到这个hash的时候 (reply to 35771)

MEW: go和python的sdk，关于transaction，都没有exit code相关的字段

Joe: 老板们 这两个地址是一样的嘛 有什么区别呢

Joe: python生成的地址怎么和导入钱包的不一致

Joe: 是不是只是格式问题

Joe: 这么写对不对呢

Steven: 还没根据 BOC 解析 hash (reply to 35775)

Steven: Bounceable 和 Non-bounceable 的区别 (reply to 35779)

Joe: 哦 怎么转呢

Joe: 哦哦哦  懂了

Joe: 谢谢

Steven: https://docs.ton.org/learn/overviews/addresses

Steven: 这里转看下说明

Steven: https://ton.org/address/

Steven: 这个是不同地址格式的转换网址

MAX-SlerfTools|一键发币|批量发送｜捆绑交易｜市值管理｜需求定制: 找管理员吗

anan: nice to be here

Z: 请问下， 和ton 合约交互的话。除了用官方的typescript 的library, 还有其他的语言的么？

— 2024-06-28 —

Logan 🐯: tact写nft会有什么bug？

Logan 🐯: 或者说会遇到什么问题

Howard: 誰有去嗎 (reply to 34774)

Howard: ？ (reply to 34835)

Howard: Tact 寫的 NFT 翻車案例還沒碰到過才是.... 但是 Tact 的 Jetton 會問題比較多。因為涉及很多其他 DApp 的兼容性。 (reply to 35878)

Howard: https://www.youtube.com/watch?v=7NCrmDaRL7Y&t=200s (reply to 35779)

Poseidon海王: 啥时候？ (reply to 35889)

pony: 我是 ton 钱包开发者，如何在 wallet 实现 ton-connect bridge？ 我现在拿到了二维码里面的内容，可以构造 connect 的结果，通过什么接口发送 response 到 dapp 端呢？还是我把消息post 到 universal url ？有没有对应的文档？

Howard: https://medium.com/@allenhsu.dev/d152c2eb323c

Logan 🐯: 兼容性具体是指什么 (reply to 35896)

Logan 🐯: tact写jetton

Alan: Hi

Y: 奇怪了

Y: ws要发送心跳消息吗，没看见文档有

Howard: 写出来的 Jetton 要兼容 DeDust / Ston.fi 的内部逻辑。他们可能会有 gas 校验的问题。 (reply to 35898)

User<7367118838>: Howard (reply to 35907)

User<7367118838>: Can you confirm or deny some issues going on with dedust / swaps

User<7367118838>: I cannot make any swaps anywhere.

Howard: from their UI right now? (reply to 35910)

User<7367118838>: dedust / tonkeeper / mytonwallet (reply to 35911)

User<7367118838>: nothing works no anywhere

Logan 🐯: gas校验

Logan 🐯: gas校验是啥意思 啥问题 (reply to 35907)

炒币养家: 这个视频你们看了没

gavin: 没有 (reply to 35917)

炒币养家: 这个扫二维码的测试版APP是哪里下载的

Howard: 我可以使用 DeDust 兌換 (reply to 35912)

Logan 🐯: gas校验是啥意思 (reply to 35920)

炒币养家: https://stepik.org/lesson/1279831/step/1?unit=1294212

gavin: 就是 func 相当于是控制力度更细, tact 因为是中间语言转换过去 最终生成的func代码可能会比较粗糙 导致gas偏高 (reply to 35915)

gavin: 你就用FunC就行了, 大家都用FunC

炒币养家: 这个是官方讲的视频，俄罗斯人说中文

Logan 🐯: 因为gas费高，交易所不给增加pool？

Howard: DeDust 里面 DEX 合约有判断 Gas 消耗是否足够。否则就会 bounce. (reply to 35915)

User<7367118838>: no way, its broken 100% for me (reply to 35920)

User<7367118838>: which version wallet? (reply to 35920)

Howard: 還是可以兌換呀 (reply to 35929)

炒币养家: 这玩意学习难度有点高啊，比solidity麻烦好多

Logan 🐯: 那我钱多，也可以解决这个问题是吧 (reply to 35927)

User<7367118838>: Im no trying to redeem anything I'm trying to preform swap (reply to 35931)

Howard: 不行，相當於它裡面合約有寫 throw_error 判斷.... 主要是 DeDust 沒開源。不好測。 (reply to 35933)

Logan 🐯: 就是说gas费高的话，就直接bounce回去了是吧

Logan 🐯: 就是说gas费高的话，就直接bounce回去了是吧 (reply to 35935)

User<7367118838>: Its trying to swap the token for itself

User<7367118838>: why does it do this?

User<7367118838>: token swap for token? I have TON selected

Evan: gas都要精确控制，如果你的jetton gas消耗更高，可能会导致pool无法执行结束，也是他们出于安全的考虑吧

niuzi: Exit code:136  有哪位老哥知道怎么回事吗

Logan 🐯: 明白的

User<7367118838>: something is broken somewhere

User<7367118838>: I cannot swap any of my tokens

Logan 🐯: 对了，理论上map可以无限存，只要钱够多？、

gavin: 不是啊 有最大限制 (reply to 35948)

gavin: 3w多个key吧

Logan 🐯: 3万？

niuzi: 想问一下 测试环境下我新mint了一个token 然后我一交易 就Exit code:136  有哪位老哥知道怎么回事吗

Logan 🐯: tact的ton里面，如何判断一个合约地址有没有部署

User<7367118838>: tonkeeper / dedust / mytonwallet all broken

User<7367118838>: whats the deal

Logan 🐯: tact的ton里面，如何判断一个合约地址有没有部署

Logan 🐯: 啥情况

niuzi: 昨天就遇到了 (reply to 35958)

gavin: 我昨天就说了 你的nft collection 可能搞错了 (reply to 35958)

gavin: metadata 数据不规范

Logan 🐯: 好难 nft的没人写好func的minter

niuzi: 给Token添加流动性这个怎么搞

niuzi: 求大神教教

gavin: 有的 (reply to 35965)

gavin: 你没找到而已

炒币养家: tact感觉资料好少

Logan 🐯: 地址多少

炒币养家: 你们都在用tact吗

Mr.A: 请教个问题,如何根据签名后的交易在上链前获取到交易hash

gavin: https://github.com/ton-community/assets-sdk 你看看这个 啥都有 (reply to 35971)

Logan 🐯: 可以

gavin: 我称为ton one piece

gavin: boc 转hash就行了 之前讨论过这个问题 (reply to 35973)

Logan 🐯: 直接sdk生成了

gavin: 是不是很牛逼 (reply to 35979)

Logan 🐯: 牛逼 我这个不知道哪里找的demo 写了一个蜜汁工具类

Logan 🐯: 蛇皮算法

Logan 🐯: 看着像

gavin: 把你这个代码删掉吧 (reply to 35982)

Mr.A: 直接取boc的哈希吗? (reply to 35977)

Logan 🐯: 是啊 这玩意引用的ton版本还跟正常的不一样

gavin: 你看下这个库就知道了 https://github.com/VanishMax/foton (reply to 35986)

Mr.A: 签名后的原始数据是  te6ccgEBAgEAtQAB34gAAEjiWTRvoNGXpZX1IgJAm7Fs5FSCD3w7FCNoMyQ1LQ4Bmd+q87HKcG/pnhB8LTxgg6elHVFH2B34XBIpV2oCRcqV0hXuS77xDT/0MubsyKygdIAq1fyjFOUNc9u/7dvAKU1NGLsz8ZagAAABIBwBAIBCAGzeZzUo/JHFAfsvoDb5p9lBqLb5jxtZNsh2WB0D9KY7CBgAAAAAAAAAAAAAAAAAAAAAAGhlbGwgZ29sYW5n   直接hash能拿到交易哈希吗? (reply to 35988)

炒币养家: https://docs.tact-lang.org/book

Mr.A: sdk里边的waitForTransaction接口返回的transaction可以拿到交易hash,但是交易推送我并没有使用sdk,而是直接通过节点sendBocReturnHash接口推送上边的字符串使交易上链,上链之后这个接口返回的是in中的hash,交易hash拿不到

X RAY 🦴️️️️:   const op::increase = "op::increase"c; ;; create an opcode from string using the "c" prefix, this results in 0x7e8764ef opcode in this case 这是什么转化 crc32 又是什么 有大神指导一下吗

Aogo: 请问现在TON上主流的SWAP是哪个呀？

lee: 问下 部署合约有没有其它方法，除了import { prepareTactDeployment } from "@tact-lang/deployer";这种部署需要他们的服务

yan: STON.FI

&: Ston.fi and dedust.io (reply to 35998)

yan: 你们有没有遇到这种情况

yan: 我钱包怎么不能用了

雷老虎: 等吧 (reply to 36004)

yan: 你们也遇到了啊？

yan: 这玩意还是处于初级阶段

eqasw: 你们ton是咋买的，我这用美国信用卡买不了

Mr.A: 交易所

Mr.A: okx

eqasw: 欧易我没看到有ton啊

Mr.A: 有的

eqasw: c2c还是哪

Mr.A: 币币交易

eqasw: 好的。谢谢你

yyy: 有人去ethcc吗   https://lu.ma/ndwrca42

Logan 🐯: item的创建都没有啊

andy: 问下ton 上如何监控钱包，有没有web 支持配置tg 监控的

cfs chef: 这个文件每写一份新的合约，都要自己手搓吗，还是有生成工具

0xCaptainApr: 使用 TonWeb 转账 TON ，报错 Cell underflow

0xCaptainApr: const transfer = senderWallet.methods.transfer({    secretKey: Buffer.from(base.fromBase58(data.privateKey)),    toAddress: toAddress,    amount: new TonWeb.utils.BN(amount),    seqno,    sendMode: isFullTonBalance     ? SendMode.CARRY_ALL_REMAINING_BALANCE     : SendMode.PAY_GAS_SEPARATELY + SendMode.IGNORE_ERRORS,    expireAt   });   await transfer.send();

0xCaptainApr: 各位大佬有遇到过吗？

summerishere: ton，jetton，nft这三种资产transfer的opcode有吗？

Tyler: Ton 哪个api 服务最快最稳定呀

niuzi: 去哪可以直接买Ton币啊

whong: 你们这个怎么解决了啊

whong: 认证的时候传了身份证就不给用了

whong: 日本

niuzi: 新人在哪可以买Ton币

niuzi: 不是交易哈

限: 欧意可以买的 (reply to 36047)

niuzi: 有没有买的少点

niuzi: 30$太多了

限: 你买0.几不就好了 (reply to 36050)

niuzi: 不太行哇 至少30$  而且欧意没看到Ton  看看买别的交易一下 (reply to 36052)

限: 30块钱也不算多啊，你要用来干嘛

niuzi: 学习啊

niuzi: 发个Token (reply to 36055)

niuzi: 测试环境的5个ton都没用完😂 (reply to 36055)

mx: 我们ton 地址能拿到公钥不

mx: 公钥是公开的么

King's uncle: 这不是build后会自动生成的吗 (reply to 36028)

&: 你可以从该地址获取公钥。 有 get 函数 (reply to 36061)

eqasw: 你们是如何判断是否交易成功的

carol: 解析交易，查看ComputePhase， ExitCode等等是否有错误

Evan: force_chain(WORKCHAIN, sender_address, WRONG_WORKCHAIN); 有人知道stonfi中强制在workchain上执行的原因吗

niuzi: 测试网可以添加流动性吗

niuzi: 测试网发的token

niuzi: 可以添加流动性吗

condi: 这种不久回归到最传统的游戏攻防了么 (reply to 35555)

Logan 🐯: Item的创建什么鬼啊 Collection成功了

bc1p: 大佬们，我想接通星星支付，按照这个流程，用户如果支付了星星，bot去哪里确认收款到账哦？

bc1p: bot是收到usd还是星星？

niuzi: 各位老哥  测试网发的token可以添加流动性吗

bc1p: 可以 dedust有测试合约 (reply to 36075)

Yii: 好像是星星 需要自己再去卖 (reply to 36074)

gavin: 收到的星星 (reply to 36074)

gavin: 有api能查 (reply to 36073)

bc1p: 那要去哪里查星星余额哦

gavin: 而且bot会有回调

gavin: 查不到, 还在开发中 (reply to 36080)

bc1p: 哦哦 噗

bc1p: 多谢

niuzi: 可以发我一下吗 (reply to 36076)

niuzi: 老哥 可以发我一下吗 (reply to 36085)

bc1p: 有点久远稍等 我搜搜 (reply to 36086)

wikig: 问题是在telegram webapp上本来就是传统攻防战呐 (reply to 36070)

niuzi: ston.io的也行 谢谢老哥 (reply to 36087)

mx: https://toncenter.com/api/v3/#/ (reply to 36063)

mx: 这个里面有不

bc1p: Dedust   Factory - kQAMBGwEhoY532YW0Z02qZWW4yJnW8Xe5ebEJRa7ABEe3MOR Token SCALE - kQAbMQzuuGiCne0R7QEj9nrXsjM7gNjeVmrlBZouyC-SCALE Vault TON - kQDLcce6SZW3lk39MubJ55w5v8Lt-EBs60EapzNyrKHQ0ERz Vault SCALE -  kQAwqX6nmIX_EW8SRu3zeBXhkrpdsXX7TPQJCPQojGj_3ItB Pool TON / SCALE - kQDBJdRJ-meLncmzyIrLykEofIfpFPmxOlkxZoc8zWNR1zn- (reply to 36089)

niuzi: SCALE 这是自己发行的token吗 (reply to 36094)

bc1p: 是他示范的币

bc1p: 似乎

niuzi: 有示例代码吗

niuzi: 。 (reply to 36097)

MEW: 是Dedust转账时候用的固定value (reply to 35935)

MEW: 如果jetton里面耗费的gas过多，或者jetton里面对value的最小值要求比较高

MEW: 就会导致失败

404 Not Found: 大家有愿意接个小活的吗,定制一个jetton代币

404 Not Found: 有意向的私我哈

Luke: 什么功能，私聊我看看 (reply to 36112)

Mr.A: web版tg好像是有bug,输入框历史输入的消息无法删除,一直显示在输入框了,有人知道怎么解决吗

Mr.A: 删除之后点击输入框还是会显示一大坨已经发送的消息

Mr.A: 看样子是保存成draft了

Mr.A: sdk里边的waitForTransaction接口返回的transaction可以拿到交易hash,但是交易推送我并没有使用sdk,而是直接通过节点sendBocReturnHash接口推送上边的字符串使交易上链,

Mr.A: sdk里边的waitForTransaction接口返回的transaction可以拿到交易hash,但是交易推送我并没有使用sdk,而是直接通过节点sendBocReturnHash接口推送上边的字符串使交易上链,

Mr.A: 打不了字了,一直给我自动输入这条消息

Mr.A: mac桌面版也这样,有遇到同种情况的吗

Archer: 有沒有TON上小游戲比較強的開發團隊，麻煩聯係我。

User<5695916992>: hello

— 2024-06-29 —

Logan 🐯: 一个nft上全部的item都公用一个 metadata嘛？

gavin: 不是

Logan 🐯: 我看那个sdk没看到item的json咋构建的

Howard: 剛剛在英文群看到好像是下個月才會有更新一步的流程 (reply to 36077)

Howard: 可以看我的 NFT 範例，裡面指向的 URL 就是按照 item_index ID 去對應的 (reply to 36207)

Howard: 這部分 MetaData URL 跟 OpenSea 那一套一樣邏輯

Logan 🐯: 不知道是不是子合约啥问题了现在

Logan 🐯: 初始化的时候就bounce了

Logan 🐯: 代码也没动过呀

Wendy: 有老哥知道安卓机怎么开测试环境吗，只看到pc 和ios的方法

User<6286494483>: 要下载其他tg的app版本，所以我选择买台ios

User<6286494483>: 😂😂😂

miya: ton 扫快为什么这么慢啊

miya: 代码有问题么

live: 请问wallet space可以切换到测试网吗？

cfs chef: 以前转账评论不是限制127个字符的吗，现在怎么这么长😱

walker: ton的deeplink有相关文档没？

walker: 类似这种，点击可以唤起钱包转账 ton://transfer/UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKZ?amount=1&text=hello

— 2024-06-30 —

qknow: 请问你是怎么扫块的 (reply to 36251)

Foodtrust🦴: tontown应该最容易注册 (reply to 36037)

Bot Developer: 耗时2周，终于开发完了一个小程序，所有坑都踩了一遍😁

Max: 开发费用多少 (reply to 36310)

Bot Developer: dm (reply to 36311)

Degen: 插件这个东西的文档在哪里

Degen: 请教个问题，比如有一个这样的需求，A钱包给B钱包打款，然后B钱包收到打款之后mint一个NFT转移给A钱包

Degen: 现在的合约能满足吗？

Degen: 需不需要二次开发

11: 需要二次开发，打款也要看是Ton还是jetton

Degen: ton

Degen: 好像还有一种实现方案  就是轮询监听那个钱包，收到新的交易 相当于出发事件

Degen: ton是不是没办法监听某个地址的方法被调用了

11: 如果你在链下实现这个功能其实也可以，这样的话不需要改合约，链下监听转nft就行

11: 这样子现在的合约就能满足，不需要二次开发

Degen: 在链下是什么意思呢，钱是打到钱包里面的，要收到钱那一刻就转nft

Degen: 是需要有一个触发的事件

Allen: 可以用轉帳裡面有一個事件 (reply to 36324)

Allen: https://docs.ton.org/develop/dapps/asset-processing/

Allen: 其實你可以看一下這個

Allen: /

Allen: Jetton有一個transform notice跟excess

Allen: https://docs.ton.org/develop/dapps/asset-processing/jettons

Allen: 其實你就一個收款錢包

Allen: 鏈下監聽

Allen: 然後你自己後端有個msg queue 收到相符合的交易 往這個queue丟 然後你自己後端有發貨nft那個錢包的私鑰 這個queue 去消費然後發貨就好了

Allen: 最簡單的方法應該是這樣

Degen: 🤔

Degen: 因为铸造需要0.08个ton 这部分费用要用户来支付，就是用户transfer到官方钱包这个时机要能监听到 (reply to 36346)

Degen: 发货nft的钱包有可能跟收钱的钱包不是同一个

11: @wisdom_yang  大哥，又有开发者被误伤muted了

Yang: 誰？

11: 这里 (reply to 36348)

Yang: 居然是 Allen ，好，我研究一下

User<6707872053>: 你可以不扫-1的其实 (reply to 36250)

11: 这个不影响吧，用api读取官方钱包的交易拿到sender就行 (reply to 36350)

Yang: 這是防洪水，短時間發太多條訊息

Yang: @aablsol 試看看

Allen: 可以了 看來打字不能太快 😂不然就進小黑屋了

Max: 有没有大佬测试网给我转点jetton：0QAjOtSlnu8aFlaoIlxW9_c_NucKwhazoBIJ-x0x4N74qvB2

niuzi: 可以找机器人无限领取啊 (reply to 36404)

niuzi: 、、、、

Max: 测试ton我有，jetton没有

niuzi: 自定义一个 ，jetton可以mint自己的 (reply to 36408)

Yang: 幫你解洪水了，你可以打快一點  哈哈 (reply to 36403)

Ayayi: 有朋友最近有使用过 TON 申请 telegram apps 成功过的吗  https://my.telegram.org/apps

Maxey: 嗨大家好，我撰寫了 Highload Wallet v3 的深度解析，大家有興趣可以來看看！裡面介紹了 Highload Wallet 的基本須知，以及程式碼解析，讀完這篇文章後，你將對於 Highload Walelt 有更深層的理解。  文章 Link 在此

Allen: 大大有沒有研究過錢包合約插件啊 (reply to 36427)

Maxey: 你說wallet v4的plugin嗎 (reply to 36429)

Allen: 對的，最近在看V4跟v5的

Allen: 但好像沒有一些好範例

Allen: 還在研究ing~

Allen: 原本也想好好研究錢包合約的，但看大大的文章就好了

Allen: 哈哈哈哈哈哈哈哈

Maxey: 我有研究過 但還沒實際寫合約互動過哈哈 我之前有寫過wallet v4的文章，在here。  可以一起討論呀 我也蠻想寫一個plugin玩看看的 但就還沒啥時間試

Allen: >可以一起討論呀 我也蠻想寫一個plugin玩看看的 但就還沒啥時間試 好呀，我是看了一下v5的代碼了，到時候如果有一些東西再發出來跟大大討論

Maxey: 我下一個文章就是想寫v5的 我們可以一起玩！ (reply to 36437)

<You>: If you are looking for a developer for Telegram bots, mini apps, Hamster, NotCoin, etc., please message me.

User<6286494483>: 哪里领 (reply to 36406)

niuzi: https://t.me/testgiver_ton_bot (reply to 36451)

User<6286494483>: 这验证码，一言难尽

User<6286494483>: 😅😅😅

&: 请检查您的 tx 参数，您的 tx 丢失了一些参数，因此它给您 exit_Code 9（单元下溢） (reply to 36218)

— 2024-07-01 —

Eric: Hello, guys , how are you , i already buidling project on bnb and thinking of taking idea about ton can i know more details

gavin: 什么单位？

Lucas: 请问  ton链怎么获取 jetton token 的metadata

gavin: 估计要考虑小数位吧 你用toNano 试试呢 (reply to 36517)

niuzi: ston.fi在测试环境下可以去为自己发布的token添加流动性吗

niuzi: 有人可以解答一下吗

User<6286494483>: Ton的代币后端构建交易，能不能跟sol一样，指定领取人支付gas费用，从后端的钱包领取代币

芭比Q: throw_unless(708, slice_bits(in_msg_body) >= 1); 请问调用合约抛出708异常，查看源码如上， 这个更具体的原因是什么呢

Maxey: 你這個是跟Jetton 互動嗎 應該是forward_payload 沒有塞東西哦 可以放begin_cell().store_uint(0, 1).end_cell()試看看 (reply to 36554)

Logan 🐯: nft的tact语言有没有好的example

芭比Q: tonviewer testnet 怎么总是好久都不同步的

Logan 🐯: testnet啥情况，pending一下就消失了？

品誉: 哪位仁兄可以告知一下有没有查询TON链上USDT转账交易详情的api

Logan 🐯: 超级慢 现在testnet

Logan 🐯: 部署一个合约没反应

Ton: 为啥Tonkeeper 付款会有bad request啊

v: 请教一个问题，这笔交易 SUSPICIOUS transaction 是什么原因呢 https://tonviewer.com/transaction/4b957dbc66d5b5cb56ecf9ab34d2bef36c289dcfb515a75650d257f79356c6da

Logan 🐯: 哪个实习生在动testnet (reply to 36570)

wikig: 好家伙，细说坑哈哈哈哈哈 (reply to 36310)

wikig: 可以考虑参照tonapi的文档实现。  当然，如果这边对tps有要求，也可以自己做解析 (reply to 36569)

Ton: 我都做1个多月了

Ton: 终于快搞定了

carol: 已经耗时3周了

wikig: 好家伙，做好发群友看看？ (reply to 36586)

gavin: 好家伙，发一下

carol: 这里能发啊，都没怎么测，不知道有没BUG😆

eqasw: f来看看

eqasw: 学习学习

Lou: miniapp有办法监听窗口关闭吗

carol: https://t.me/RedPacketAssistantBot/app?startapp=p_cuFiH1P7umq2YCQlnyvweTSV 🧧 Wow!!hunter gives away a red packet with 0.03 TON, click and open it to claim your reward!!,    👉 恭喜发财

carol: 没TON了，只剩这点了。。😆

wikig: 好像没有看到有这个方法（但是即使有.......好像也做不了什么？  但是有个方法可以使得关闭miniapp时触发一个用户手动确认  可能那个方法有回调事件 (reply to 36593)

Lou: 我想在用户关闭的时候更新一次用户数据

walker: ton上发交易时的seq，会像ethereum上一样有mempool去缓存未来的seq吗？比如钱包的seq现在是1，我发个seq是2的交易出去，这笔交易是会被节点丢弃掉，还是会等seq=1的交易被确认后，seq=2的交易会被节点确认？

wikig: 使用telegram.expland()之后，好像关闭会触发一个确认。  如果没有关闭确认操作的话........ close的时间好像不足以让你发出request实现更新用户数据 (reply to 36597)

Lou: 有道理

wikig: window.Telegram.WebApp.expand();        window.Telegram.WebApp.enableClosingConfirmation() (reply to 36600)

wikig: 这两个用法可以让用户关闭的时候，触发警告（其实核心是后一个）  我不知道有没有回调 (reply to 36601)

wikig: Demo在  https://t.me/tonshive_bot/demotiktok (reply to 36602)

Lou: 我尝试尝试

Lou: maybe?

wikig: hhhhh

wikig: 可以试试

wikig: window.Telegram.WebApp.enableClosingConfirmation()  这个方法有没有可能可以await（？  触发的时候实现触发？  当然，这个得看telegramwebapp.js的源码了 (reply to 36606)

Lou: 既然可以开启监听，那源码应该就有监听的代码

eqasw: 你这个在ios上好像没法上滑视频 (reply to 36603)

wikig: 没做手势禁用。向下滑会直接触发telegram miniapp的关闭手势 (reply to 36619)

eqasw: 如何做手势禁用

wikig: sad，我也没找到，不然我就禁了哈哈哈哈哈哈 (reply to 36621)

wikig: https://core.telegram.org/bots/webapps#events-available-for-mini-apps  popupClosed   不知道可行否 (reply to 36606)

eqasw: 感觉不是这个

eqasw: 我也找很久了，安卓的可以锁死，苹果的不行

wikig: 安卓的怎么做（？  还能做锁死的嘛 (reply to 36625)

wikig: 我的理解是，禁用手势的部分，直接用minigame去了（

eqasw: 你这个在安卓上滑就不会关掉小程序啊

wikig: 由上往下滑，好像也会触发手势

wikig: 但是.......

wikig: 因为有那个windows.close的限制，所以会提醒

eqasw: 不会

eqasw: 安卓不会的

eqasw: 苹果由上往下滑就会关闭小程序

wikig: 我这边是安卓，由下往上没啥问题  由上往下会触发关闭webapp的手势 (reply to 36633)

wikig: 怪

eqasw: 你安卓会？

eqasw: 我安卓不会

wikig: 我是摩托罗拉X30。我下滑会触发关闭，怪 (reply to 36637)

eqasw: 感觉他这小程序坑太多

eqasw: 你vue是咋解决路由问题的

eqasw: 我之前用vue写，路由跳不到子页面

eqasw: 你们是如何判断支付吃饭的

Jack: 有没有地方可以查看各路miniapp的数据啥的呀

芭比Q: 130  Tact (Compiler)  Invalid incoming message — no suitable operation is found jetton token 转移成功最后一步将剩余ton  excess原合约的时候 抛出这个错误是为什么？

yyy: https://lu.ma/ndwrca42

Binaplexus1: Who will create me telegram mini app for 100$?

eqasw: what features do you need

Logan 🐯: nftItem里的individual_content一般存的是地址还是啥

User<6610577332>: 我提现频道收益的时候，链接的ton空间地址，然后显示错误，稍后再试，已经半个月了没到账也不退回，是不是需要kyc，有人遇到过这个问题吗

Logan 🐯: 这测试网这么不稳定老是部署失败

𝐔𝐋𝐓𝐑𝐀: Hi guys , need some help from u

wikig: 是指支付完成？ (reply to 36650)

Emil: Which (reply to 36673)

Emil: What give details (reply to 36656)

Logan 🐯: nftItem的content这样不行嘛

MT: tonweb怎么查某个钱包里的NFT合集呢？

Tequila: hi 测试网上拿到了ton 如何可以拿到一些usdt的测试币？我看几个swap app都没有测试网

Howard: 💡💡💡   Star Reward Withdrawals, Subsidized Ads and Bot API 7.6 🦾  接受 Telegram Stars ⭐️ 的機器人開發者現在可以通過 TON 區塊鏈提取獎勵，或者使用 stars 在 Telegram 上投放補貼廣告。  Telegram 幾乎不收取任何佣金，並增加了 30% 的廣告折扣，以補償第三方支付系統費用 – 你可以在這裡了解更多。  今天發布的 Bot API 7.6，為所有機器人和小應用程序帶來了更多改進，如： 1/  原生多任務處理 – 允許小應用程序最小化和擴展而不會有加載延遲。  2/ 通過直接鏈接打開的小應用程序默認全屏模式🤯。  3/ 支持以內容創作者身份發送付費媒體 / Content。  4/  更新的交易歷史，支持 Telegram Ads 和機器人指定的 payload。  5/ 以及更多，請參見完整更新日誌 了解詳情 ✅

Howard: Telegram Stars 的轉換（贖回系統）已經有下落啦！項目方讓用戶使用蘋果內置支付後的星星有著落了。 (reply to 36704)

Cake: TL-B 中的 $ 和 # 的区别 ，有哪位能解惑吗？

Shawn: 请问有TonKeeper的工作人员吗？我们USDT-Ton转账是成功的，但是在转账过程中一直显示failed。感觉是钱包的问题。

— 2024-07-02 —

Logan 🐯: 为毛直接访问就可以 通过axios访问就超时？

Logan 🐯: 谁会nft合约，有偿，nftItem部署json读不出来

Logan 🐯: 有偿协助，3天了都解决不了

gavin: metadata错了

gavin: 你发下你的代码我给你瞅瞅

Logan 🐯: 我模仿assets的sdk

gavin: 你这个是item合约？  你的collection 合约是怎样的？

Logan 🐯: 不是啊这是我组装metadata的数据

Logan 🐯: nftItem的合约是这个

Logan 🐯: 上面那个就是组装individual_content，

Logan 🐯: 是因为collection指定的那个标志位是链上，那item的就必须是链上不能是链下嘛？

gavin: 主要是collection (reply to 36780)

gavin: collection 的部署init 代码我看下

Logan 🐯: collection显示没问题啊

gavin: collection 错了 item 也不会显示

gavin: collection 的metadata 里面的cell 要 ref 两个string

Logan 🐯: 有的

Logan 🐯: 我中间有个代理合约透传去调用，参数才前端传的

Logan 🐯: collection显示是正常的

gavin: 看着还真的没问题

gavin: commonContent url 是多少？ (reply to 36789)

gavin: 链外解析的时候 好像是 commonContent + nft item metadata url

Logan 🐯: https://project-fy-ai-sz.oss-cn-shenzhen.aliyuncs.com/NFTChannel.json

Logan 🐯: 我写的我阿里云的oss地址

Logan 🐯: 我看实际代码 item里也没存链上还是链下的标志位

Logan 🐯: individual_content 好长啊 我看别人的都很短

Logan 🐯: item会去调用这个么

Logan 🐯: 是不是这个方法错了

gavin: nft合约代码都是通用的 肯定不会错 应该是部署的传参错了可能

Logan 🐯: tact版的跟那个func的不一样

Logan 🐯: tact版的写死一个地址然后拼接 无语

Logan 🐯: item里要啥数据 直接字符串嘛

gavin: 存相对地址

Logan 🐯: 不是存绝对地址啊

Logan 🐯: 他是拼在一起显示的是吧

Logan 🐯: 我一直存的绝对地址

Logan 🐯: 成功了

Logan 🐯: 我的爷

Logan 🐯: 真的是存相对地址

Logan 🐯: 之前的example完全看不出来

CarlEZ🆓: 有项目，找研发伙伴，有做过现成的挖矿mini app完整代码最好，感兴趣的dm我

Emil: @dev_rel  I mistakenly transferred ton to usdt jetton master  Can you help me reach out to the team to recover it  It is 480 ton   Here is the transaction hash e7b663778809cbb4ac7884bfe8b5ada1a0a9145e49208d947cc3ad4769c702da

Howard: 看看, TX_ID? (reply to 36713)

Howard: 這個我也想知道 (reply to 36710)

Emil: Please respond to me 😭 (reply to 36845)

Emil: @dev_rel

Emil: @dev_rel @wisdom_yang  any help (reply to 36831)

Yang: As a rule, seek assistance in the language you are accustomed to speaking  @tondev_eng (reply to 36848)

Emil: 我说普通话 (reply to 36851)

Yang: 別鬧了....

Emil: 你能帮助我或给我指明正确的方向吗 (reply to 36851)

Yang: Here,PLS (reply to 36851)

Kime: Hi there~  This is Kime from FastX Parking bot, we are open for collabs.  Intro: FastX is a free play-to-earn game where you can earn token rewards by parking your car.   Our current users count: Around 1.8M, and we also have some other bots like Tap Coin (3M),and Hold Coin(3M).  Let me know if you are interested.❤️❤️

Emil: It does not matter where I ask if you can help just do (reply to 36855)

Emil: I asked there mo reply from any admin

Yang: Do you understand what your transfer means? (reply to 36858)

Yang: 你自己把幣打到 USDT 的合約地址，然後想要請求對方退還。  如果你明白你做了什麼事情，那麼你就知道這是不可能的。

eqasw: 你们是通过什么方法判断用户ton支付成功的

User<6034345711>: 请问有unity to play 的大神吗，想要了解怎么和Telegram做交互

User<6034345711>: Tonplay

carlbiotic: 请问ton现在可以做代付吗，类似以太坊AA账户的那种能力

Tequila: api查询就可以了呀 (reply to 36862)

Bfp36: @tonxnotbot airdrop for SBT's Ton Society

eqasw: 为啥我用代码转账会回退金额

eqasw: 有没有吊大的朋友知道

kpo: 合约里面的body 包含执行另一个合约的调用应该怎么写？ 我这边出现异常：Integer overflow. Integer does not fit into −2256 ≤ x < 2256 or a division by zero has occurred. 哪个大哥能解答一下。

Wendy: https://docs.telegram-mini-apps.com/platform/sticky-app 可以试试这个 (reply to 36622)

wikig: (好家伙，看起来不错  应用上去试试看 (reply to 36889)

eqasw: 兄弟你知道吗 (reply to 36890)

eqasw: 我代码转账会回退钱

cfs chef: send mode的问题吧，有的是余额留在合约有的退回

beat: 求教个问题 这个transaction里的hash是怎么计算的 我用的go的sdk，调用send方法并没有返回交易的hash

wikig: 建议查看地址是不是又用了可退回地址 (reply to 36892)

eqasw: 什么叫可退还地址

eqasw: UQAE5m3mCq-****-E3P-B9da

eqasw: 我这个是收款地址来着，但是我手动转问题不大，我代码转会退还

Wendy: 你们申请tg开发者账号有没有什么好办法

wikig: https://github.com/toncenter/tonweb/blob/master/src/utils/README.md (reply to 36899)

wikig: 这个 (reply to 36901)

wikig: 先检查地址是不是用了可退回地址

wikig: 然后再排其他问题，包括payload之类的解构有没有错

eqasw: payload我都没填

wikig: 可以参照这个 (reply to 35673)

eqasw: 我也这样写的

芭比Q: 如何监听jetton transfer 是否成功？ 需要整个transcation链条一步步check吗？ 还是只需要check  Jetton Internal Transfer

思维: ton 智能合约是使用 ts 开发语言来搞吗?

Tee: 不是

eqasw: 解决了 (reply to 36906)

eqasw: 收款地址必须发起一笔转账才行

eqasw: 必须发起转账他才会给你把钱包合约部署

思维: 也是，我看 ston 合约有 ts 代码有点奇怪 (reply to 36912)

wikig: 那多半就是地址问题。建议尝试转给其他地址看看能否成功。检查收款地址状态是否为active (reply to 36907)

eqasw: 他这个myAppExplorerService是啥，我看你的代码把这个删掉了 (reply to 36906)

wikig: 估计是他内部实现的类rpc查询方法吧，我不查询所以就干掉了 (reply to 36920)

eqasw: 这个咋实现

eqasw: 我没找到他这个代码

wikig: 参照tonapi或者toncenter的http 文档

eqasw: 哦

eqasw: 👌

wikig: 因为他这里就是查询功能、所以tonapi基本满足

eqasw: payload有啥用

eqasw: 我没加一样可以转

wikig: payload是加消息 没消息可以不用

芭比Q: 请问像evm里扫链 判断充提的功能，在ton上是如何处理。需要整个transcation链条一步步check吗？ 还是只需要check  Jetton Internal Transfer 最后一步？ (reply to 36924)

wikig: 我的建议是trace一下获取整个transaction链条（然后约束交易类型。）接着根据payload内容的opcode和jetton地址锁定交易验证 (reply to 36931)

wikig: 不然不排除，我构建复杂交易，转入再触发对端账户的转出行为。实现在你的监听端我转入了，但实际上我钱还在手里

芭比Q: ok 就是一步步check 做各种状态切换 直到成功

Steven: 对端账户如果是标准 wallet 合约账户也会有这种问题么？

wikig: 然后约束没有额外交易（防止转入转出 (reply to 36935)

wikig: 一般不会把,只是说，不排除就是了（如果是标准的wallet要验签的，一般不好无许可转出） (reply to 36936)

芭比Q: ok 谢谢  我试试看

adam: 请问下给jetton wallet发消息，有什么办法只执行forward_payload内容，而不执行transfer吗？

adam: 这个问题有大佬知道怎么解决么 (reply to 36955)

Shawn: 这个用官方的代码Tonkepper显示都是错的  TxID 最终转账是成功的，但是在等待过程中，显示failed. (reply to 36844)

miya: 有懂TON扫块的吗

miya: 这个扫块为什么这么慢，我测试了一笔交易 block 都到 44339925 了 还差一百多个块..?

tobenumberone: 请问ton怎么进行交易验证是否成功？

Play: https://docs.ton.org/mandarin/develop/howto/faq#%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E7%A1%AE%E5%AE%9A%E4%BA%A4%E6%98%93100%E5%AE%8C%E6%88%90%E6%9F%A5%E8%AF%A2%E4%BA%A4%E6%98%93%E7%BA%A7%E6%95%B0%E6%8D%AE%E6%98%AF%E5%90%A6%E8%B6%B3%E4%BB%A5%E8%8E%B7%E5%BE%97%E8%BF%99%E4%BA%9B%E4%BF%A1%E6%81%AF (reply to 36961)

果果: 如何使用正则 检测ton的地址

cfs chef: import { Address } from "@ton/core"; Address.isFriendly(tempAddress);  这个库可以检测，要正则可以看他源码

Howard: 可以透過這網站查看試試: https://explorer.tonnft.tools/collection (reply to 36784)

Shawn: 问题解决了 Ton里面不是Atomic transaction的缘故 (reply to 36958)

Kyle: 求教一下，我使用tonConnectUI的sendTransaction方法尝试转账，转的金额是0.002ton，但是客户钱包看到的是转出去的同时扣掉gas再退回来，这个是怎么回事呢？

Kyle: 这是我的代码

cfs chef: 测试网挂了吗，tonkeeper发出去好几笔交易都不见了😳

bc1p: 今天很奇怪 dton也挂了好像

cfs chef: v1到v5一系列钱包地址能用一个raw address就全部获得吗，首富们

Howard: sdk 有支持, 可以參考; https://www.youtube.com/watch?v=U29jmiIs9oI (reply to 37016)

Jamil: TON还有25亿枚，解锁机制是怎么样的？

cfs chef: 好，感谢

Power: wallet kyc你们都是怎么搞的

Power: 有没有什么渠道？

— 2024-07-03 —

Logan 🐯: 钱包的扫描怎么用v3的getTranstion扫不到

Subdog 🐈‍⬛️: 我如何在 ton 区块链上生成代币，或者您可以在这件事上帮助我吗？

pony: https://minter.ton.org/ (reply to 37080)

Subdog 🐈‍⬛️: 还有其他平台吗？ (reply to 37081)

pony: https://docs.ton.org/develop/dapps/asset-processing/jettons 什么需求满足不了？可以参考文档

ro: get account state failed: error code: 651 message: cannot load block (0,8000000000000000,44351240):A5F113FA61A77614EC6E515CAB2E8DC2C9B611C7A1ABBA9063511F56890851E2:AB35536E7F11AEB18B4D071253E E8C18B4904957A6BA7AE333B87C1A629BC35F : block (0,8000000000000000,44351240) is not in db (possibly out of sync: shard_client_seqno=38751108 ls_seqno=3875 9213)

ro: 为什么我的 服务器钱包，交易时，会一直报错，交易失败，老是取状态就报错

ro: 用的 github.com/tonkeeper/tongo

ro: 现在 服务器 钱包都没法操作交易了

ro: 这样 没法使用啊， 交易都发不出去

Tom: hello

Tom: tonkeeper移动端切换到开发模式，但是没有显示测试币，有知道的嘛

Tom: 用浏览器插件就能正常看到

carol: 钱包最低的费用都是0.005了， 0.002不够GAS费 (reply to 36991)

ro: 这个问题 只能 自己部署 liteserver 节点么？

ro: 这样成本太高，基本不用玩了吧

Yii: 为啥不直接到fragment买

Yii: 有套路？

mina: ton链的池子要怎么锁池呀

ieurjcbei345whs: 各位技术小伙伴 有没有比较空闲点的个人或是团队，我们有minn app要开发，自己的技术人员都在忙项目，没时间开发。

Yang: Ton Raffle 跟 JVault 都有這服務可以鎖 (reply to 37114)

mina: 谢谢你，我去看看 (reply to 37119)

阿果🐾: 有谁在做监控地址报单的，想聊聊合作

Logan 🐯: telegreame怎么支持多个域名登录？

Play: 有大佬帮帮忙吗？  现在要测试Telegram Stars的支付，要连接到Telegram 的专用测试环境； 但是在专用测试环境  @BotFather不会回复导致无法创建机器人    这个要怎么解决？  还是有别的方法测试Telegram Stars的支付？

Chuck: 请问一个问题，TON 的文档说在 Test 环境 BotFather 可以接受 http 协议的地址甚至直接是 IP，但是实际操作过程中发现，只能接受 https 协议的地址，这要怎么解决？

Sebastian: mini app链游，必须接telegram stars吗？

pony: 1 (reply to 37115)

Play: 测试环境要用上面的这个BotFather,可以正常创建；下面那个不行 (reply to 37131)

asher: 上面那个BotFather为啥搜不到啊

Play: 试一下这样搜？

asher: 卧槽，你的账号更屌

Play: 你进入测试环境了吗？

asher: 哦哦，还以为在主环境也可以直接用测试bot

Play: 那可能不行

Heath Ledger🤡: 你好，请问mac版本的tg怎么开启控制台呢？已经下载好beta版tg了

asher: 我试过可以使用http://127.0.0.1:port这样的 (reply to 37132)

asher: 不能打开控制台吧

Chuck: 确实可以，我之前加了 / 不行，感谢！ (reply to 37159)

Emil: 你好，我是开发人员，我可以帮助您创建您的令牌 (reply to 37080)

lvann: 大佬们知道这是什么原因吗error: failed to run custom build command for tonlib-sys v2023.6.4

a&b: 请教一下大佬，ios 按照这个流程进入test 的时候，输入手机号想要注册个test 环境的账号，一直收不到验证码，尝试了国内外的手机号以及虚拟号都收不到，是什么原因 (reply to 37154)

a&b: 请教一下大佬们，tg test 账号都是怎么申请到的？用手机号注册一直收不到验证码

Sebastian: https://docs.tonconsole.com/invoices

Sebastian: 这个文档还没写完。。

Sebastian: 大概多久有完整版本

longer_2021: 哪位做小游戏或小程序的大佬确认下，现在小游戏和小程序是不是还是50M的包体限制，能不能用微信的那种加载方式扩容？

Tequila: testnet 今天是不是有问题

Tonuser02: 咨询下：TG 游戏miniapp  还支持接入ton-connect使用加密货币给游戏充值吗？如果支持的话费率是多少？如果不支持的话，是因为Apple/Google 商店要抽水30%的原因吗？

Tequila: usdt充值

wikig: ？telegram 的 minigame有包大小限制吗？又不是wx小程序，h5随便怎么折腾都行把？ (reply to 37185)

wikig: 可以直接用，但是IOS端会ban bot。如果想IOS也用，那就参照 telegram star (reply to 37187)

Logan 🐯: ton挂了？

longer_2021: 这样就牛了，我看文档miniapp写的是50m (reply to 37195)

wikig: 挂个文档链接？  我印象里好像没有限制？  哦也不是，webapp才是直接h5的  但是minigame应该也是h5编译版本把（？ (reply to 37200)

longer_2021: 忘了在哪里看的，刚翻了了官方的文档没找到 (reply to 37201)

longer_2021: 老兄也是搞小游戏方面的么？ (reply to 37201)

wikig: 不完全算是，只是刚好前阵子做有这块的测试 (reply to 37204)

longer_2021: 老兄，你们那边小游戏是用phaser 还是纯js 什么的做？我刚来，觉得它这个无需许可的尽头挺好，国内搞小游戏越来越不方便，但还在坚持... (reply to 37205)

Marco: 新人请教一下，大家用哪种语言写TON合约的多，FunC 还是 Tact

wikig: 上了cocos，直接用treejs也有，但是走的是webapp的形式 (reply to 37207)

longer_2021: cocos 开发也挺块的了，估计以后跟别的平台一样，联网和深度占主流，纯休闲的出头很少 (reply to 37209)

wikig: 跟unity或者UE比起来，确实快也轻度很多 (reply to 37211)

wikig: 但是轻度和社交向的估计后续在tg生态还是占大头 (reply to 37211)

wikig: 但是如果是中文区的tg的话，多半是加密向的占大头。毕竟如果在国内的用户，上来还得翻墙。只能说不太可能上来玩玩游戏，多半是冲着crypto来的 (reply to 37213)

gavin: 冲着暴富

User<6975986471>: {  "UQ...":{"value":"1","comment":"Hello world!"},  "UQ...":{"value":"2","comment":""},  "UQ...":{"value":"1.3","comment":"no comments :)"}, } 我如何运行该脚本？

longer_2021: 有道理 (reply to 37214)

RichFa: 有人知道 trylocateresulttx 这个方法吗，感觉没法定位到下一笔交易啊

azad: Hello

Tequila: 1

Subdog 🐈‍⬛️: 是否可以从字节数据中获取令牌代码？

— 2024-07-04 —

Logan 🐯: nft markplace和sale的tact版有不

Play: 这个我也不清楚哦  很玄学；我的两个同事用iphone都收到验证码了，用的都是国内手机号；我在mac输入我的手机号  我也收不到验证码，但是在同事那里添加我的手机号，就收到验证码了 (reply to 37180)

Lucas: https://github.com/ton-blockchain/wallets-list

Lucas: 这个库有开发人员在群里面么  一直不合PR。。。

Play: 我现在是在mac添加了同事的手机号，并且创建了机器人，然后进行测试；你也可以试试 (reply to 37180)

feng: 请教一下大佬们，ton api的sse服务是不是不稳定，消息推送不完整，时不时漏推消息？

Lucas: 用着还行 没出现过 (reply to 37312)

feng: 有没有其他的服务商？我发现不是很靠谱 (reply to 37318)

Lucas: 自己搭建bridge

Na: ton的nft 会把文件放到ipfs里面去吗?有人用过ipfs吗?我放上去的图片不显示

longer_2021: 这读下ipfs的文档就行吧……

Logan 🐯: 在哪里

longer_2021: 记得官网上的示例用的是p网，可以参考下

Freeman: 用Pinata (reply to 37325)

Na: pinata 是直接吧图片传上去就可以对吧?

Freeman: 对

Freeman: 图片或文件都行

Freeman: 有免费空间可以使用

Na: 好的,谢谢

Na: pinata 有bug 电子邮件验证了之后一直要重新验证,登录不了😂

Emil: 如果你的元数据是正确的，那就保留它，这是一个大问题，很快就会解决 (reply to 37325)

Emil: 😂😂😂 (reply to 37340)

Ai: 使用open wallet in telegram有问题，请问有人知道为啥吗

Ai: tonkeeper啥的都可以

Tr: 我在使用install.sh安装mytonctrl的时候报错，导致mytonctrl不能正常启动，有没有遇到过类似问题的大佬呢？如能给指导，感激不尽

feng: 请问有相关文档吗 (reply to 37322)

feng: 自建full node节点？

Tr: https://docs.ton.org/participate/run-nodes/full-node (reply to 37357)

芭比Q: tonviewer中是如何通过任意一个transaction节点得hash找出完整流程得？[在浏览器中输入任意一节点得hash它打开得都是一个完整得流程]。有没有类似root hash得概念 能直接找到一笔交易完整流程得transactions

Tr: 我在安装MyTonCtrl的时候遇到了错误，请问有哪位大神可以不吝指教，感激不尽：https://github.com/ton-blockchain/ton/issues/1047

Lucas: https://docs.ton.org/mandarin/develop/dapps/ton-connect/protocol/bridge (reply to 37356)

Pangolin: 问一下，mini app中 sendData("hello")，bot要什么样才能接收到hello数据的？

Tonuser02: 你是什么手机？在打开哪个miniapp ？ (reply to 37346)

wikig: 考虑到miniapp就是个webview.....  一般来讲，是直接webapp的前端向你的一个独立后端去发送一个http、wss网络请求 (reply to 37374)

User<1496299585>: 请问ton mini app 在电脑端的时候， 支持横板显示吗   我们游戏是横板的， 电脑上打开没法玩啊

c: 麻烦问一下 有人知道ton 交易记录失败的结构是怎么样的嘛

eqasw: 交易失败貌似是报错

eqasw: 我反正交易是包在try catch里面的

Aogo: bot 移动端震动反馈怎么实现的 有知道的大佬吗？谢谢

Aogo: Ton 除了DEV群，请问还有运营群吗？ 谢谢

kpo: 请问，哪个大佬知道 HighloadWalletV2 钱包如何发送 关于 Gram Submit Proof Of Work 的操作？ 现在发送过去 Exit code: 4   这个是什么原因？

wikig: minigame的话默认不就是横板吗？ (reply to 37380)

User<1496299585>: 是吗    那我可能没弄对， 再研究下

User<1496299585>: 你说反了吧， 默认是竖版的， 怎么样设置才能改为横板呢 (reply to 37393)

lee: 问下 有没有质押合约的实例或者例题

eqasw: 我发现他这小程序，官方有个心跳接口，一直在轮询

eqasw: https://bridge.ton.space/bridge/events

eqasw: 这个

eqasw: 加这个心跳有啥用

TT: TON的小程序能不能接TON以外的链啊？

wikig: 啊？我打开好多好像是web显示直接横版的 (reply to 37397)

Null: 哈囉有誰使用過 @tontrade 嗎？很好奇他們的機器人交互速度為什麼那麼快 😆

User<6399486871>: 请问用户在mini app中注册的时候，如何能知道他们是否为premium会员呢，有没有某个参数可以识别判断的？

Tom: 大佬，获取tg的好友列表这个能搞吗

zolnex: 这个我也找了好久没找到接口，可能tg的隐私性比较强 (reply to 37413)

Tom: 大佬，我请教下，获取好友的应用场景一般是用啥 (reply to 37414)

lee: 问下 有没有质押合约的实例或者例题

11: https://github.com/ton-blockchain/liquid-staking-contract (reply to 37419)

User<6726273357>: 大佬们 Jetton转账怎么写呀 官方文档上那个示例Jetton 转账不行呀

lee: 多谢，我看下

Yang: New wallet smart contract 5.0   The TON Core team has finalised the code for the new wallet smart contract version 5.0 or "w5" for short. The concept and initial code for this wallet was proposed and implemented by the Tonkeeper team.  New functionality:  — "Gasless" transactions. Ability to perform an action by paying network commissions with USDt or NOT.  — Up to 255 transactions at a time. For example, the ability to renew all your TON domains at once.  — Optimised network commissions.  Possibility to extend wallet functionality with new format plugins:  — Decentralised subscriptions, including USDt subscriptions.  —Two-factor authorisation.  — Wallet freezing in case its key is compromised.  — Recovery of a forgotten key.  — Other features.  It is also worth noting the enhanced security — the smart contract tries to protect your funds, even if the wallet application developers made a technical bug.  Having completed thorough testing, we offer everyone to take part in a contest to find bugs in this smart contract with a prize fund of up to $100,000.   TON wallet developers are invited to support this smart contract in your products — we can't wait to use the new features in practice.  https://github.com/ton-blockchain/wallet-contract-v5/ (forwarded from Anatoly Makosov)

飞行员舒克: 有没有会tg小程序开发的

adam_chi: 在，要开发啥

— 2024-07-05 —

Alex: hello大家

Alex: 想问下这个IP地址和基础设备信息，设备信息都能包括哪些呀

condi: 就是web (reply to 37461)

condi: 不像wx一样，tg的小程序就是web

Logan 🐯: tg小程序有什么坑

longer_2021: tg小游戏有哪些游戏引擎支持的sdk

炒币养家: https://github.com/Ton-Fun/ton-fun-parser (reply to 37524)

gavin: cocos (reply to 37524)

timi: 支持h5的都可以啊

炒币养家: https://github.com/ton-org/game-engines-sdk

lin: 有人知道使用sdk发送交易之后如何获取txhash吗 各位

whong: 一般ton的小游戏的设计分辨率是多少,1334*750?

Codingzzz: 扫描 (reply to 37535)

lin: 脚本发送之后 await 后返回的null 再不扫描的情况下 通过boc如何计算出txhash (reply to 37540)

enpitsulin: 有大佬了解过 ston.fi 协议和他这个合约实现的具体细节吗？和EVM上实现 AMM 差别好像很大

Codingzzz: 看官方文档，理论上你上链之前就有cell信息了

gavin: 和uniswap v2是类似的 (reply to 37542)

Codingzzz: hash有个生成规则

Codingzzz: 文档里有说明

enpitsulin: Lp 账户和 Lp钱包这部分似乎比 uniswap 复杂多了 (reply to 37544)

gavin: 思想是一样的

gavin: 只不过把同步改成了异步

gavin: 把账户模型改成了jetton wallet关联账户

gavin: 很简单 多看几遍就理解了

刘皓 转账语音确认: 官方人员在吗？

cfs chef: 大佬们，keypair 里面的 secretKey能公开的吗，我看tonraffles开源的nftlaunchpad要把admin的secretKey放在前端，用户每次mint时帮用户签名😳

gavin: 当然不能公开 (reply to 37553)

Bill: 这也太牛逼了

Logan 🐯: tact版的nft marketplace和sale哪里有

condi: 那啥 为什么充到cex需要写commit，也太那啥了

condi: 脑子一抽 忘了写了

Jiang: hi，各位我在利用golang来与主网进行交互时出了一些问题。msg="get wallet address error: error code: 651 message: cannot load block (0,c000000000000000,44388441):703DE28B23311FDF2AA944FA566F53C2FA607864DB13C89EB5BCF16581B73DDE:16CB30E7CC28CA240EBD536077C8C6CB85939BA404BF0DC73D114D480CD3832C : block (0,c000000000000000,44388441) is not in db (possibly out of sync: shard_client_seqno=38795899 ls_seqno=38806797)"

Jiang: 我在通过golang 来验证签名是否有效时出现了这个问题，其中我利用的是主网默认的配置文件

wikig: 价值公式？  话说他们开源没，我咋记得他们的price oracle是没开源的 (reply to 37544)

wikig: 大部分其实都支持（  从cocos到unity到UE (reply to 37524)

wikig: 要不先抛个实例，说一下走官方示例走到哪出错了 (reply to 37428)

wikig: 我觉得，应该是他们的热钱包系统的问题。跟cosmos一样。  当然，另一方面，毕竟ton的wallet部署需要gas（所以也可能是为了省gas (reply to 37560)

Lind: 现有有分析自有mini app的用户行为的平台吗？

ora: 估计交易所所有用户用的是几个地址，comment用来区分你账户的 (reply to 37560)

wikig: (一般这东西不都是开发者自己做的吗（？  毕竟，这东西。miniapp就是h5欸，现有web2开发生态已经有很完备的数统分析了吧 (reply to 37577)

Logan 🐯: tact版的nft marketplace和sale哪里有

Logan 🐯: tact版的nft marketplace和sale哪里有

Logan 🐯: tact版的nft marketplace和sale哪里有

炒币养家: tact发token有例子吗

longer_2021: 大佬开玩笑了吧……Unity 或许还行，unreal没可能吧…… (reply to 37570)

wikig: 没试过，但是按理说没理由不行，反正UE也有H5编译hhhh (reply to 37590)

wikig: 晚点可以试试整个UE的样例demo编一份看看

longer_2021: 期待一下……喜欢UE但是链上用的太少

wikig: 主要太重  链游说到头都是链为主 游为辅 (reply to 37593)

longer_2021: unity 能用就不错，效率很高，虽然收费有点不靠谱phaser没用过 (reply to 37594)

wikig: 正常来讲，能用的，毕竟能编H5版本  虽然确实，收费有点诡异（  但是值得担心的还是预加载会不会太久，毕竟也蛮重的 (reply to 37595)

User<1496299585>: 我发现一个游戏性不错的项目， hashwar,   玩家充值变成预售额度。  相当于项目方放弃了所有游戏收入， 冲到池子里面去了

User<1496299585>: 有哪个项目方能做到不要游戏充值收入呢？      不知道他们咋赚钱？

jay: https://github.com/godemodegame/ico/blob/89f7c39b12f82947cb22c71298077b772568c483/contracts/ico.tact#L39 这种就是。 (reply to 37584)

adam_chi: 什么游戏

longer_2021: 这意思还是回到了js 和ts为主的引擎…… (reply to 37598)

adam_chi: 我打算开一个项目， chat-to-earn，只要在里面发言就可以赚钱

wikig: 毕竟轻。treejs轻到家了 (reply to 37603)

longer_2021: 这不是都玩烂了的么…… (reply to 37604)

adam_chi: 有类似的参考么

wikig: 放弃游戏收入，那我觉得代币部分赚不少吧 (reply to 37599)

User<1496299585>: 我估计项目方是也和玩家一样， 拿了初始额度的。 有点像老鼠仓的方式

wikig: https://www.tonshive.xyz/  可以考虑集成这套SDK实现一点点正向的现金流（ (reply to 37604)

longer_2021: 先走遍官方流程 (reply to 37605)

wikig: 确实。  像现在主流的我看都是cocos (reply to 37611)

User<1496299585>: 目前他们只赚了卖nft的钱， 然后把nft的收入也打入池子， 和玩家一起分初始代币额度

adam_chi: 这个 XMR 链是个啥

adam_chi: 有池子不

adam_chi: 感觉小游戏不行，ton应该有那种天王级，很弱智的，就是可以赚钱的应用

adam_chi: 你又是谁，为啥可以打广告 (reply to 37619)

wikig: 老东西了，门罗（ (reply to 37615)

wikig: 好处是randomX的pow模式是CPU only（ (reply to 37626)

Deo: 有大佬了解怎样获取ton链上某个wallet的usdt余额吗？

Deo: 我能通过sdk调用获取ton的余额，但不知道怎么获取usdt的余额。

Deo: 解答有赏

11: 这位老板，代码如下  async getWalletData(provider: ContractProvider) {         let { stack } = await provider.get('get_wallet_data', []);         return {             balance: stack.readBigNumber(),             owner: stack.readAddress(),             minter: stack.readAddress(),             wallet_code: stack.readCell()         }     }     async getJettonBalance(provider: ContractProvider) {         let state = await provider.getState();         if (state.state.type !== 'active') {             return 0n;         }         let res = await provider.get('get_wallet_data', []);         return res.stack.readBigNumber();     } (reply to 37632)

eqasw: 我按他文档走的，但是就是最后结果和hash对不上

eqasw: 大佬们看看我的代码，我最后结果和hash对不上

Deo: 我能通过sdk调用获取ton的余额，但不知道怎么获取usdt的余额。解答有赏

gavin: 读取usdt jetton wallet 的合约 (reply to 37645)

gavin: 能取到余额

longer_2021: 跟用phaser有区别么？没用过这两个 (reply to 37612)

gavin: 这样能取到哈

condi: 拉不拉盘，不拉盘都是垃圾，拉盘是什么都没关系 (reply to 37604)

gavin: cocos有编辑器更好用 (reply to 37648)

condi: phaser工具链不全，cocos工具链全

condi: phaser只能算是一个库，不能算是游戏引擎

Sun: cocos工具链全 有开发文档链接吗？

condi: 搜一下就有了

condi: 不然还可以考虑 unity或者godot

condi: 缺点是两个比较大

condi: 但是 tg限制不像微信

Sun: 新手，找半天。😅

condi: unity

condi: 教程和各种库更多

condi: 不信你去找找，不管b站还是油管，unity教程是最多的

condi: cocos，写棋牌多一点

adam_chi: 可以把项目收入全部拿来拉盘 (reply to 37651)

Degen: 有没有写合约的高手？？

11: 多高才算高，185体育生可以吗

adam_chi: 蜀将在此

adam_chi: 精通合约开发

adam_chi: 基本机器人调试完成；我要去准备发推了

adam_chi: 有没有社区长和我对接

adam_chi: XMR上线了吗

尼奥: 本地开发mini app，必须要https吗

wikig: 我觉得差别不大吧，看开发习惯了 (reply to 37648)

wikig: XMR好几年了，16年把我记得（？ (reply to 37685)

Danceinhell: https://t.me/RifthronBot

Danceinhell: 说是Telegram mini APP王炸项目，不为过吧？？

阿果🐾: 看着像飞机大战

wikig: 上啥做的，unity？

Danceinhell: 全球首发，全部原创

eqasw: 6666

阿果🐾: ...

eqasw: 没开服

eqasw: 咋体验

Danceinhell: 开服了的，

Danceinhell: 但现在只是测试调试阶段

eqasw: 咋测试

Danceinhell: 狂点F字母7下

eqasw: 好的

eqasw: 有点东西

eqasw: 写了合约吗

Danceinhell: 正在搞

eqasw: 厉害

condi: gamefi 还是看拉盘，玩不玩法都无所谓

condi: 只要拉盘，让我坐着一直点按钮，我都觉得好玩

Danceinhell: 慢慢来，不急

condi: 都是要钱的，找kol宣发，找各种媒体

condi: 都是有报价 多少钱一条

Danceinhell: 只是先来亮个相，哈哈哈。

eqasw: 我记住你的链游了

longer_2021: 您这是用哪个引擎开发的？ (reply to 37723)

Eason: tonConnectUI.setConnectRequestParameters({           state: 'ready',           value: { tonProof: tonProofPayload },         })  有没有人知道在在前端调用以上代码但是没有弹出签名流程是为什么吗？我确认已经连接了 ton wallet，且可以正常的调起sendTransaction()

MEW: 这个一直有问题的 (reply to 37728)

Navy | Ton.AI: 请教一下，the mini app支持embed到其他的the mini app上吗？

Navy | Ton.AI: 如果支持要怎么实现？

wikig: 可以考虑用一下iframe实现（？  但是auth用不了 (reply to 37742)

hi_scott: 最近感觉TON的夹子多了起来啊

User<6423775175>: I have a problem, can you help me please?

— 2024-07-06 —

Allen: Ton能搞夾子嗎 (reply to 37763)

hi_scott: 我也想问呢 (reply to 37792)

andy: 这个是那个token? (reply to 37762)

Mavior: 有没有大佬帮忙看下，为什么转账给同一个钱包地址，有时候能正常收到，有时候显示交易确认但是金额又被回弹给付款钱包了..

Navy | Ton.AI: 谢谢，auth问题有其他可能的解决方案吗？ (reply to 37749)

Tom: 有大佬能说下写合约func和tact怎么选嘛

Howard: 看視頻 (reply to 37809)

wikig: 好像保证不了交易原子性吧 (reply to 37792)

wikig: 目前来看没有。  需要分为：  1.两个webapp隶属于同一个bot  2.两个webapp是两个bot  两种来看。  前者可以，只需要把参数带入iframe即可  后者不行，因为参数签名验签使用的bot—key，如果bot不同，key不同是无法验签的。 (reply to 37803)

h: ton有开源的扫链工具框架没

Max: 请问mini app的hash验证你了解吗 (reply to 37815)

cfs chef: 电报匿名号码使用完还能再挂出去卖的吗

User<6279166148>: 🉑️ (reply to 37832)

Logan 🐯: telegram上线mini 有教程嘛

cfs chef: 这么猛的吗，那买一个不是无限开号😳

cfs chef: 而且还不会封

思维: 怎么买啊，这个匿名号码 (reply to 37835)

cfs chef: nft市场

思维: 链接?

eqasw: tg小程序能获取到用户头像吗

gavin: 可以

gavin: 需要通过附加菜单启动才行

wikig: 有文档的。我是按着官方那个文档来的 (reply to 37827)

Randolph: 大佬们，应用是在哪里上架呀

B安O易gate: 币安 欧易 bybit 火币 gate bitget高返用找微❤️:eth868btc

jove: 请问ton有没有什么好的nft项目啊

Yang: 請不要在開發者社群討論無關開發的問題喔！謝謝 (reply to 37868)

Yang: https://blog.ton.org/deep-dive-into-usdt-on-ton

Tonuser02: 有支持wallet、ton-connect支付的游戏miniapp 案例吗？

Simon: 用Ton的桥跨USDC，已经好几个小时了，一直卡在最后一步5/9

Simon: 有谁知道为什么吗

User<6279166148>: 正常8小时 (reply to 37895)

— 2024-07-07 —

Neo: Hi 想问下为什么testnet的API getTransactions返回的地址是mainnet的地址。

Neo: 用的https://testnet.toncenter.com/api/v2/getTransactions的这个API

Neo: 这里response的地址是mainnet的。

Neo: source 和 destination里的都是mainnet的

Howard: nice (reply to 37815)

Simon: 这个刚才显示最后一步也结束了，但是，钱包里并没有收到USDC (reply to 37893)

Simon: 有谁知道为什么吗

lee: 请教，获得map值错误,这是什么原因  struct StakeRecord {     amount: Int as coins;     stakeTime: Int as uint32;     minEndTime: Int as uint32;     bExit:Bool; }  stakeRecordMap: map<Int, StakeRecord>;  let record: StakeRecord = self.stakeRecordMap.get(0)!!; require(record != null, "not stake"); require(record.amount > 0, "not stake");    building error Func compilation error: /dist/tact_StakingContract.code.fc:77:105: error: cannot apply function null? : Forall (_Z) _Z -> int to arguments of type (int, int, int, int): cannot unify type ??547 with (int, int, int, int): cannot unify generic type and tensor throw_unless(38370, (~ null?(($record'amount, $record'stakeTime, $record'minEndTime, $record'bExit)))

longer_2021: 哪位大佬撸过官网的gamefi示例，为啥使用assets-cli deploy-jetton这步就当掉了，是网络问题还是咋的？

Simon: Howard，有可能知道为什么吗 (reply to 37935)

Simon: 有人在成都吗

王老五: 要在天府大道对狙？ (reply to 37951)

11: 就不能在二仙桥嘛

friday: 不是应该天府三街嘛

jove: 想参加一些ntf开源项目的开发，有推荐的吗

Simon: 成都组个线下活动

Simon: 我刚来

Simon: 谁熟悉地形

11: 大佬们，怎么用~dump打印slice的address啊

wikig: 照理说是没啥问题的。但是还是建议放在外部地址，不然可能会在游戏引擎编译的时候造成莫名其妙的冲突 (reply to 37982)

Happy: 有人知道从dedust的factory获取poolAddress，参数应该怎么传吗

Happy: 我这样子传一直返回错误

zerefsong: 大佬们  有人遇到过这个错误吗  LITE_SERVER_UNKNOWN: cannot apply external message to current state : Failed to unpack account state

— 2024-07-08 —

Leon: 请问有什么办法固定住web app的屏幕么，开发的打飞机小游戏操控飞机的时候屏幕会下滑

Lucas: ton connect 的wallet-list 没人维护了么 都一周多了 还没个反馈

User<6726273357>: 请问要拉起钱包进行jetton转账使用@tonconnect/ui是对的吗

gavin: 可以的 (reply to 38078)

User<6726273357>: 是使用tonConnectUI.sendTransaction();不

11: 大佬们，这里的https://docs.ton.org/mandarin/develop/smart-contracts/security/ton-hack-challenge-1#4-%E5%BD%A9%E7%A5%A8 这个rand怎么暴力破解lt时间啊

Logan 🐯: 咩情况

Logan 🐯: ton测试链被攻击了啊

gavin: 是你请求太频繁了

gavin: 被限流了

harlan: 调用-256什么意思

Logan 🐯: 前端一个组件请求一次

eqasw: 这小程序细节还是挺多的

Logan 🐯: 如何通过代码生成 ton的助记词

Logan 🐯: 解决了

张强: 有没有ton的空投工具

11: 直接写合约批量发送就行吧 (reply to 38121)

兰兰/防封飞机号/会员代开/🍎苹果ID: 有卖888的嘛

User<7493859481>: 请问一下各位大佬, miniapp游戏接入tonconnect, sendTransaction 之后  怎么判断用户是否成功支付,是前端判断还是后端判断?来给游戏发货

eqasw: 小程序可以使用usdt支付吗

wikig: 如果用户有IOS的，建议考虑使用telegram star  如果没有的话，当然可以 (reply to 38137)

eqasw: 大佬有没有示例代码，官网没看到 (reply to 38141)

wikig: 这边是需要：  1.支付服务还是2.自己吊起发起请求 ？  如果只是吊起jetton转账，可以参考  https://test.tonspay.top/test.html  原生写的，wget下来就是源码。  如果是支付服务，可以考虑使用官方： https://pay.wallet.tg/  也可以考虑使用我们这边的支付服务: https://www.tonspay.top/  当然，也可以使用我们的支付提醒服务，然后前段吊起和支付规则按照这边的自定义或者demo的规则来实现（ (reply to 38142)

User<7493859481>: 大佬 支付服务 怎么监听用户成功交易  来给用户添加对应的商品啊? (reply to 38143)

wikig: 支付服务都是有对应的请求规范和callback规范的。  官方的支付接口文档： https://docs.wallet.tg/pay/  我们的服务接口文档： https://docs.tonspay.top/develop/get-start (reply to 38145)

eqasw: 我擦

eqasw: tonspay这玩意你写的？

eqasw: 你是真大佬阿

wikig: ?虽然但是这是最简单的服务了（只涉及到稳定监听业务

wikig: 无非是需要做服务提供得有一堆稳定的rpc和稳定数据提供解析方案

eqasw: 你这个能吊起usdt支付吗，在小程序上

wikig: 有做的，当然，这边也可以根据自己的需求和接口文档、接口规范来diy自己的连接接入口（endpoint） (reply to 38155)

wikig: 本质我们做的东西就一个监听、提醒服务。以及一个可选用的吊起支付前端（提供给那些不想折腾tonconnectui或者其他deeplink的开发者）

eqasw: 有示例吗，就usdt的，你之前发的我看了下，都是ton的

wikig: 根据文档来讲是有的，我可以generate样例invoice来实现吊起支付 (reply to 38158)

eqasw: 文档我没看到，git上看到一个示例代码，但是他机器人我看了下支付报错

eqasw: https://github.com/ton-community/tma-usdt-payments-demo?tab=readme-ov-file#tma-usdt-payments-demo

Logan 🐯: ton的跨链桥只支持这两种嘛目前

wikig: https://t.me/tonspaydev_bot/invoice?startapp=c3903d58b647770636331ff3ed0df57b 💐 Please help me to pay this invoice 💐   Thanks !

wikig: 上面讲的关于USDT支付的样例 (reply to 38160)

wikig: 这个其实是tonconnectui的吊起示例吧应该属于。  对应上面发的  https://test.tonspay.top/test.html (reply to 38161)

wikig: 目前official的bridge是只支持这些。  但是说是年底会有新的bridge出来。  至于灵活性的中心化跨链，可以考虑使用ff.io simpleswap或者swapspace之类的服务 (reply to 38166)

Logan 🐯: 那ff.io能实现每个链的子代币互转嘛 (reply to 38170)

wikig: 部分链有吧，ton不知道有无ton的usdt

wikig: 但是支持的肯定有限的

Logan 🐯: usdt倒不用，就是ton上面建的代币转到evm上的代币

Logan 🐯: 自己实现的代币

wikig: 客制化代币跨链桥是吧。这个目前是之前好想见到过有哪家做过（但是ruge了好像。  因为问题是，现在还没有ton根evm连或者其他链的跨链消息协议 (reply to 38177)

wikig: 然后做的话只能中心化做

wikig: 那作恶空间或者ruge空间就比较大

Logan 🐯: 目前官方对evm跨链桥就是只能做主币的转换是吧 比如ton币转eth这种

wikig: 是的，官方的话。 (reply to 38182)

wikig: 但是我记得官方桥，不是也支持客制第三方代币转移吗 (reply to 38182)

Logan 🐯: 没看到这个介绍

炒币养家: https://openbuild.xyz/learn/challenges/2023609337/2935

炒币养家: tact 视频教程

eqasw: 你这个付款的还是ton啊，有没有那种我付usdt，你收usdt的 (reply to 38167)

wikig: （这个是USDT的 (reply to 38189)

wikig: 如果这边balance里有USDT的话

eqasw: 我钱包是有usdt的

wikig: 但是一样需要TON作为USDT转账的手续费

eqasw: 你的意思是这个ton是付gas？

wikig: （额，这是tonchain的意思 (reply to 38194)

wikig: 指向的ton上的tonconnectui对应的那一堆钱包

eqasw: 我咋向你支付usdt

wikig: 点进去然后 (reply to 38198)

wikig: 比如我这边就长这样

wikig: 吊起wallet做支付

eqasw: 😭

Metas: 有大佬知道用ton-connect怎么转账jetton吗？

wikig: 啊？这边balance里有USDT吗？（因为现在tonconnect默认调的@wallet的tonspace就是去中心化钱包那块  如果USDT是在@wallet里，是两个钱包的 (reply to 38203)

eqasw: 啊？

wikig: 正常tonconnectui现在默认调的是TON空间里面的资产 (reply to 38209)

wikig: 外面是@wallet的托管钱包

eqasw: 哦哦哦，意思是我要把usdt转到ton空间里面

wikig: 嗯，如果用tonconnectui调任何defi。默认走的都是ton space的wallet

wikig: （我之前也被这套嵌套设计绕晕了md

wikig: 但是估计是为了规避托管钱包欺诈的风险之类的

eqasw: 明白了，感谢大佬

Logan 🐯: 这个方案ok么，

Logan 🐯: mint保证去重

MEW: 本质不都是这种。看你用哈希时间锁还是见证人集合

Logan 🐯: 哈希时间锁还是见证人集合 有没有资料啊

wikig: 这就是我们上面说的中心化方案，你只要能保证中间的监听者不rug就行 (reply to 38220)

Logan 🐯: rug是啥意思

wikig: *ruge

wikig: 跑路（

eqasw: 这个发两种币是因为你那边写了两笔交易还是因为他默认是同时收两种币 (reply to 38225)

wikig: 是两笔交易，其中的ton是提醒交易。用于触发中心化的事件回调。 (reply to 38229)

eqasw: 了解，相当于gas？

wikig: gas是在USDT那笔交易里面另算的。  比较好的理解是使用该提醒服务的使用费 (reply to 38231)

eqasw: 明白，你这代码是咋写的

wikig: 因为这一笔提醒交易最后不是给到主链，而是给到我们的vault钱包那边。  对我们来说，我们是直接监听这个vault实现活动监听。

wikig: 是指前端还是监听？ (reply to 38233)

eqasw: 就是创建usdt支付这个

eqasw: 他好像是创建发票？

wikig: 如果你只是想要吊起tonnectui进行USDT发送行为，可以参照这里 (reply to 38169)

wikig: 因为这个是支付系统。所以正常的流程是先构建发票，然后用户支付发票 (reply to 38238)

eqasw: 哦哦，看到了。感谢感谢，祝大佬事业一路长虹

Logan 🐯: 官方的那个跨链桥如果要支持代币要自己改造吧

wikig: 需要吗？ (reply to 38243)

wikig: https://bridge.ton.org/

Logan 🐯: 没看到哪里可以指定代币的合约地址

Logan 🐯: 原来如此

Logan 🐯: 这里代币的代币合约的地址

Logan 🐯: 这个合约相当于我们要自己部署，用来做验签的是吧

wikig: 是滴，我的理解是这样 (reply to 38249)

wikig: 但是没有实操过

Logan 🐯: 生成签名和验签专用的

wikig: 能做链上验签嘛？ (reply to 38254)

Logan 🐯: 代码里写的

Logan 🐯: 这三个合约的各自的功能好像没说明

Logan 🐯: 这个也是自己实现的嘛

Leon: 求问：swpie down screen会自动关闭web app，这个有什么办法可以避免么？

Leon: 我看有人之前找到了解决方案，但是最近6.30改版后也不好用了

gavin: 不需要吧 (reply to 38244)

gavin: 如果是主网的 应该是自己能用

Logan 🐯: 预言机扫日志还要自己部署这个嘛

Logan 🐯: 没看懂这个

Logan 🐯: 我看预言机是去中心的的，官方的，那我部署的bridge合约如何跟预言机交互呢，要在那里告诉他我这个地址么

fish: 我拿到了交易哈希,怎么请求交易是否成功?

Leon: 这个我懂 (reply to 38270)

fish: 或者怎么获取交易数据

Leon: 我刚跑通

Leon: 怎么回去交易数据的事儿

Leon: 链上确认

Leon: 我用的是TONCENTER的api

Leon: 记得用v3

Metas: 我也想问怎么通过返回的boc判断交易成功

fish: v2是没有接口吗

Leon: 官方的boc这个方法我没搞成功

Leon: v2处理不同版本的地址不是很好

Leon: 很多地址收不到

Logan 🐯: 这个合约指定 oracles_address 、bridge_address 是吧就可以链接官方的预言机

Leon: v3解决了这个问题

fish: 所以你用的那个接口?

Leon: transaction

Leon: https://toncenter.com/api/v3/#/default/get_transactions_api_v3_transactions_get

Leon: 这个好用

Leon: 我用官方的方法不太好用

fish: 我去研究一下,谢谢

Leon: 大家都在开发tg小游戏么

zolnex: https://github.com/solnex/tact-contract 写了几个常用的tact合约 比如空投，水龙头，验证签名等，后续更新nft相关的，欢迎收藏一起学习

Lev1: 有没有开源的mini program github可以fork看看的

zolnex: https://github.com/telegram-mini-apps-dev/vanilla-js-boilerplate (reply to 38295)

Simon: 刚听说Ton上的合约可以随意升级，这是不是Ton生态没有DeFi项目的原因呢？

gavin: evm 不也能升级么

lin: 请问有什么 api 可以实时监听新创建的币吗？

fish: 通过api获得的交易数据怎么区分是代币转账还是主币转账?

wikig: Sol也能升级虽然但是 (reply to 38306)

eqasw: getTransactions这个接口你是咋判断是不是usdt转账的

王大锤: 怎么购买TG ADS

fish: toncenter有Responses字段说明的文档吗

jay: 请问有遇到计算 jetton 地址不准确的问题么？  大概就是说给你一个jetton master address 和一个用户地址，计算出的这个用户的jetton wallet address 是错的。 (reply to 38294)

Howard: 他們 SDK 文檔有。可以參考。 (reply to 37988)

Howard: 這部分有 Bug, 應該近期會更新修復 (reply to 38071)

Leon: transaction 这个接口目前我只是用来track TON的转账

Vincent: hi,大家好，有人知道 jetton_content 在 typescript中如何解析吗？

Vincent: const jettonMaster = provider.open(await ExampleJettonMaster.fromAddress(testTokenAddress));     const data = await jettonMaster.getGetJettonData();     //How to parse this data, I want to get jetton's symbol and decimals etc     const content= data.jetton_content;     //const symbol= content???     //const decimals= content???

Vincent: 如上代码，怎么获取到symbol和decimals

cajh: func怎么发送事件通知呢

User<7272294490>: FLOKI  0.000130－0.000134 區間多  TP1: 0.00013988 TP2: 0.00014350 TP3: 0.00014982  SL: 0.000128 (forwarded from Crypto_獵捕者合約帝)

Alfred: 使用 cell 解析 content (reply to 38369)

Leon: 感谢🙏 (reply to 38336)

Jambo: Помогу наладить трафик🤑 Пиши в ЛС🤑

Leon: 希望这块可以尽快解决，不然很多品类的tg游戏都没办法支持，目前只有静态的taptap类不会很影响体验 (reply to 38336)

User<7272294490>: FLOKI  0.000130－0.000134 區間多  TP1: 0.00013988 TP2: 0.00014350 TP3: 0.00014982  SL: 0.000128 (forwarded from Crypto_獵捕者合約帝)

叮鐺鐺鐺！: #LINK  入：11.88-11.68📈  盈：12.4-12.9-13.5  損：11.3 (forwarded from Leo-加密貨幣頻道)

— 2024-07-09 —

Logan 🐯: 跨链桥没有测试网的啊

jay: 输入框失焦问题麻烦也记录下。这个也很影响有输入框的应用。 (reply to 38336)

Metas: tonkeeper app 怎么切测试网呀

K: click the tonkeeper icon in the bottom  more than 5times

Jonathan: hi

Metas: v4.8.0 have not switch testnet (reply to 38448)

Jonathan: 我也想做个跨链桥

Jonathan: 请问一下， 有人知道func 的合约， 如何像evm solidity 那样产生事件，然后链下程序去扫链吗

Jonathan: 获取事件

cfs chef: 老师们，有什么好的办法可以在合约拿ton价格吗

K: im using 3.16.1, not sure for 4.8 (reply to 38451)

lin: ton 的交易，如何加快上链啊？

cajh: 有大佬知道怎么监听链上消息事件么

zolnex: 暂时还没遇到，他这个地址是根据合约代码和初始化参数计算的，参数能自定义 (reply to 38331)

Anders: https://github.com/hylthink/gongde (reply to 38295)

jay: 我看你了的代码，是绕开了计算逻辑。直接传入的 jettonWalletAddress。 你可以尝试通过 jetton master + owner 算 wallet address，应该是算不准的。 (reply to 38487)

jay: get fun jettonWalletAddress(jettonMasterAddress: Address): Address {         let init: StateInit = initOf JettonDefaultWallet(jettonMasterAddress, myAddress());         let myJettonWalletAddress: Address = contractAddress(init);         return myJettonWalletAddress;     } 这是合约代码，算不准（JettonDefaultWallet 来自 tact-by-example ）

zolnex: myaddress是合约当前地址，你这个算的是jettonWallet合约的jettonwallet地址，肯定不对呀，这个方法应该放到master合约中去掉用的

eqasw: 小程序可以用indexDB吗

jay: 不是的，这个 myAddress 是业务合约地址。这个代码是写在业务合约中的。 (reply to 38497)

炒币养家: layerzero 支持TON了吗

jay: full code. (reply to 38514)

Kuku: 还没有 (reply to 38516)

Kuku: 上次问过他们了 说现在没人手做

炒币养家: 这么火居然不做

炒币养家: 不过TON的对接难度估计比较大吧

Kuku: 跟我说 接了86条链 只有两条非evm  没时间做 (reply to 38521)

炒币养家: 接EVM了吗

炒币养家: 接EOS EVM了吗

User<7493859481>: 大佬们 为什么我的钱包地址是Nonexist

User<7493859481>: 转的钱ton收不到

cilicili: 钱包没有部署，你转的是可弹回的地址

DL: 1

NeiroDoge: 请问有java sdk能监听转账事件的吗

Howard: 你有录制荧幕吗 或者我待会也录制一下 (reply to 38071)

zolnex: jettonwallet在两个不同合约里编译后的code字节码不一样，你可以试一试，abi不一样导致生成的fc代码不一样，所以生成的合约地址不一样 (reply to 38517)

zolnex: 你用dump(init.code)看下

ㅤ: who can help me to create a lottery smart contract mini app bot i will pay

小韭菜: How to use UE5 to associate ton sdk

eason: 有人有想法做ton链上的短视频app吗

eason: 一开始可以从色情视频开始

eason: 肯定有巨大的流量

eason: 我有足够充分的调研

eason: 类似于tiktok

小: 这不需要调研😂

小: 不过不合法吧

eason: 为什么

eason: 我们又不一定非的做色情视频app

eason: 但是不可否认的是

eason: tg上有很多色情视频频道

eason: 有巨大的流量

eason: 我们也可以做抖音短视频那个模式

eason: 在ton链上，基于ton的用户基础

eason: 其实就是微信视频号

eason: 有没有感兴趣的

User<1842230456>: 额 这个东西跟ton 能有啥关系？

User<1842230456>: 收费？

eason: 这个是开发者社区吗

Kenny: 好几家上线了 (reply to 38581)

User<1842230456>: 分享看看

eason: web3的抖音，快手，视频号 (reply to 38598)

User<1842230456>: 去app center 里搜吗

eason: 分享一下 (reply to 38601)

User<1842230456>: 我也在找这个 找到了吗 (reply to 38546)

eason: 你知道这跟传统的相比有什么优势吗 (reply to 38603)

NeiroDoge: 没呢 (reply to 38606)

jay: 是这个原因，所以这种有办法解决么？我试过交叉编译fc的jetton合约，但blueprint识别不了fc文件中相对路径。 (reply to 38557)

cajh: 这个数据应该怎么解析呢，大佬们

Ted: 现在学ton 用tact语言还是  fc 好一些呢？

Ted: https://docs.ton.org/develop/dapps/tutorials/jetton-minter   我看官网直接丢了一个 repo 来部署代币，然后没有讲为什么这么写合约， 请问如果要学合约编写应该看哪些资料呢

Alfred: 学 tact 上手，但是要懂 fc，tact 会被编译成 fc

Ted: 官网怎么直接上fc了， 难懂

eqasw: 能用func就用func 把

eqasw: 文档也推荐用func

Yang: 請各位善用由 Awesome Doge 精心製作的 Awesome TON 頁面：  https://tonresear.ch/t/awesome-ton-the-open-network/504  從基本理論到實際智能合約的操作演練都在論壇上有連結，同時也整理了許多在開發上會使用到的實用工具。  也歡迎大家到 TON Research 論壇發表自己在 TON 上面遇到的問題、心得等等。 (forwarded from Yang)

D: 求问大佬们，有什么通用的方法可以 decode raw cell 吗？目前手动 decode 还挺费劲的

D: 而且还有一半 decode 不出来😥

Hakeen｜Gate.io Ventures: 接EVM生态了

Yang: Coindesk 這篇報導  使用 TON 區塊鏈 不太恰當，應該使用 TON 區塊鏈上的開發團隊。  基金會的人已有出來說明這是由 Bemo 的技術團隊所開發的囉！  請大家把正確資訊傳下去～ (forwarded from AlphaTon)

Yang: Recent news reports about TON building a Layer-2 chain are inaccurate. TON Foundation has no plans for such a development, and TON’s programming languages will continue to be FunC and Tact. The initial article has been amended to address any concerns. (forwarded from TON Dev News)

MEW: 知道语法解，要么就自己写算法去试 (reply to 38642)

HY game: 对，就是说 ton l2 不是ton发的

— 2024-07-10 —

Amy.X - Hubble AI: 请问有更新修复的时间表吗？ 目前比较影响游戏用户的体验 (reply to 38336)

Jonathan: 请问大佬们，我如何在链下获取jetton的burn 事件呢

Logan 🐯: 如何把程序发布到telegram的mini

Logan 🐯: 哪里有文档

lee: 有没有 jujan 测试例题？

Logan 🐯: 自由设计

11: 取决于合约的实现 (reply to 38724)

11: 只能说TEP-62标准里面没有规定必须管理员才可以mint

11: 具体你的一键部署代码是什么得看具体的代码

condi: 关键是，没啥优势啊，尤其是抖音这种，推荐算法就很好啊，都是中心化，推你喜欢看的 (reply to 38603)

condi: 这跟web3 没有任何关系

condi: 跟你要搞啥没关系，你甚至可以白皮书都是一张白纸，什么应用都没有，你不听拉盘一样牛逼

condi: 拉盘的都牛逼 不拉盘的都是傻逼

wikig: https://t.me/tonshive_bot/demotiktok  你是说这种？ (reply to 38585)

wikig: https://docs.ton.org/develop/dapps/telegram-apps/ (reply to 38707)

wikig: 如果这边打算做的话，我倒是可以把源码开源（反正本来也是基于开源仓库的哈哈哈哈哈）  可以考虑用这套服务做做什么，刷视频赚钱之类的。如果有精力折腾的话。 https://www.tonshive.xyz/  数据上链倒是好做的。用户资源塞IPFS。都是比较成熟的东西。我们两三年前在ETH上做过。但是做的毕竟是桌面端，更偏向于youtub。 (reply to 38597)

condi: 把balatro这种rougue游戏 改到tg打牌算了

eqasw: 开源呗 (reply to 38747)

eqasw: 我学习学习

wikig: https://github.com/Tonspay/Tonshive-demo-tiktok.git (reply to 38757)

User<7493859481>: 发布TeleMiniApp,接入ton支付收款,有没有相关的文档啊,研究了几天了,前端可以用ton connect向指定的钱包转钱收款,这个钱包需要部署什么合约吗?

tobenumberone: 请问tg小程序能获取到用户头像吗？

wikig: https://t.me/tondev_zh/38143 (reply to 38782)

User<7493859481>: 比如程序里有商品,让用户用ton支付

wikig: https://t.me/tondev_zh/38148 (reply to 38785)

Howard: 也許可以 (reply to 38581)

Howard: 讚 (reply to 38148)

eqasw: 大佬，啥时候修复那个下滑关闭小程序的问题 (reply to 38797)

deng: 像机器人的这种消息,能看到多少人点击么

Logan 🐯: 说跨链桥的锁仓、或者mini和burn，他是如何拥有权限去调用这些方法的

Logan 🐯: 没太搞懂

harlan: 怎么使用ts官方库@ton/ton发送消息

harlan: 调用合约

harlan: deployer_wallet_contract这里面不知道怎么写了

wikig: 既然都是外链，可以考虑在站点那侧做统计吧 (reply to 38803)

deng: 就是想知道点击到站点的损耗

wikig: 可以考虑在webapp这一侧带参。然后site那边就能统计绘制不同入口来源的用户量 (reply to 38818)

roberts: 哪位帮忙看一下，这个浏览器端使用tonconnectUI发送交易，调用Tonkeeper的时候，提示计算手续费失败，是什么情况

wikig: 建议检查payload，一般这种都是payload格式有问题（ (reply to 38821)

roberts: 应该就是payload的问题，但是我这个payload已经看了无数次了，不知道什么原因 (reply to 38823)

wikig: 我看了一下，这边是打算做jetton transfer行为（？ (reply to 38825)

roberts: 对 (reply to 38826)

roberts: 这个是官方例子，因为我这个开发环境是html+js

wikig: https://test.tonspay.top/test.html  这是原生写的，可以pull下来对照一下 (reply to 38827)

roberts: 好的，感谢，我看一下

Wendy: disableVerticalSwipes() 已经更新了 (reply to 38800)

wikig: 实测，新增  disableVerticalSwipes()方法后  解决了页面上下滑动手势的问题。 (reply to 38744)

harlan: 怎么发送指定消息

harlan: 大佬，这里面只有转ton和jetton，怎么发送指定消息格式到合约 (reply to 38829)

Degen: nft 铸造，在合约里如何做限购啊？？

Degen: 难道要每次mint 都记下钱包地址和数量？？

Degen: 那岂不是很耗资源

wikig: 那这个就是你需要去构造你的payload boc了 (reply to 38839)

Degen: @carzygod 大佬是不是这样

wikig: 啊？超纲了哥，我也在看nft mint相关的东西hhh (reply to 38844)

Degen: 哈哈 我在学tact

Degen: 然后做到这个需求的时候，不知道咋搞了

Degen: 如果用户mint一次就在合约里面地址+1 那就很耗存储了是不

harlan: 大佬，能给个模板吗 (reply to 38843)

wikig: 有点超纲了。但是大概应该就跟上面构造jetton的boc类似。  只是内容变了。  以及操作码、操作位变了 (reply to 38849)

harlan: message Subtract {     amount: Int as uint32; }  receive(msg: Subtract) {         self.val = self.val - msg.amount;     } 比如调用这个

wikig: 确实，但是吧。不是不行 (reply to 38848)

harlan: 利用发jetton的代码完全不知道怎么改😭

harlan: 就知道怎么调用get的方法

harlan: 发消息的不知道怎么弄

wikig: 我看了下，确实没法改。  因为我看了下我的code用了tonweb的jetton封装。没有操作boc (reply to 38854)

wikig: 但是可以考虑参照这种方案直接操作boc。 (reply to 38828)

Manta: 怎么直观观察一个地址的erc20 转帐

Manta: 那个网站

wikig: erc20都出来了吗 (reply to 38859)

wikig: 这不是ton的dev group吗

Manta: 就是ton的 jetton

Manta: 主网交易 没法直观看到转帐啊

wikig: jetton的话，tonviwer之类的应该都有吧

wikig: 可以点进去用户对应这个代币生成的pda账户看

Manta: 都是这样的 一点也不直观 不知道再搞什么

Degen: 哈哈，是不是可以理解，越后面mint的用户，gas费越贵 (reply to 38853)

Degen: 🤔

wikig: (用户出钱等于不出钱（嘿嘿 (reply to 38877)

cajh: 用func还是tact呢

harlan: 不是分片的吗，每个nft就是一个合约

Freeman: 带交易手续费的jetton，添池一直显示失败

Freeman: 交易手续费，是需要排除哪些地址才行吗

Freeman: 添池用的ston，目前排除了router地址的手续费收取

Freeman: 有大佬知道吗

Yancy: 大佬们有会在TG上投广告的吗

cajh: 大家是用func开发还是tact呀，这两个语言好纠结

User<6086637958>: 一个合约能记录的数据有限的， 你这样后面就玩不下去了 (reply to 38879)

User<6086637958>: 别问， 问就是func (reply to 38894)

enpitsulin: 有点好奇，如果让用户 mint 那还是 nft 吗，我看不是你要1000个nft item 就部署1个 collection 1000个item这样的吗

enpitsulin: 按 标准来的话

cajh: 😅 (reply to 38902)

User<6086637958>: 你在evm 不也要mint吗

enpitsulin: 哦 mint 是mint 我看上面的意思是要让用户去部署 item 的意思啊

User<6086637958>: 对， ton基本干啥都要生成合约

User<6086637958>: 你收一个Jetton 也会给你部署一个Jetton item

User<6086637958>: 一样的

User<6086637958>: 你咋不说sui呢，还过分点

User<6086637958>: object拆来拆去

enpitsulin: 哦懂了，那也没必要存地址到合约里吧，我看标准就是存个 index 消耗完就没了

enpitsulin: 要用地址就用 contractAddress 拿回来的地址就行了

Volunteer🇻: 我想使用@tonconnect/ui  进行ton转账，我是完全按照文档写的，但是总是发送后又立马转给自己的地址 ，救救我

enpitsulin: 大概率to地址没部署钱包

Volunteer🇻: 这个钱包怎么部署 (reply to 38922)

eqasw: 收款地址发起一笔转账就行了

Volunteer🇻: 多谢我去试试

Volunteer🇻: 为啥直接通过交易所就不会弹回

eqasw: 母鸡啊

User<6086637958>: 你可以设置弹不弹会的

enpitsulin: 确实哦

enpitsulin: 可能交易所指定了

Volunteer🇻: 我设置了一下，还是不行

User<6086637958>: 交易所充钱了

enpitsulin: 好像不是这样的设置的吧 还没咋用过 connectUI

enpitsulin: 应该构造个cell传body还是啥参数来的

Volunteer🇻: 我先转出去一下试试

eqasw: 收款地址转笔钱就行了

Volunteer🇻: 还是大佬们牛逼，小弟撅屁股研究一天，一下搞定了

eqasw: 我之前也是遇到这个问题，也是群里大佬帮忙解决的

Volunteer🇻: 👍

wikig: 还真是 (reply to 38896)

0x: tg小程序上线需要审核吗？

HY game: 不需要

wwqq: 问一下群里的大神，swap交易提交上去以后，tonview就能看到，但是内部消息流转很慢，有时候可能要5min+才能完成。这是正常的嘛，更换节点能解决这个问题不

gavin: 就是ton链慢 (reply to 38967)

eason: 感谢，我感觉我想和您再深入交流一下，刚才有人说，链上的短视频app没有优势，我想说1短视频无疑是一个杀手级应用，特别是在ton链上基于tg的大量web2日活，流量转化方便快捷，又是很好的注意力经济。而且所有web2的app都值得在web3重塑一遍。2有什么优势，抖音快手是不是有很多被封禁的网红，包括很多现象级网红如天佑，铁山靠他们本身自带巨大的粉丝流量给我引流，有的甚至在腾讯会议直播，而且tg上的色情频道每个关注量都是巨大的，就是搞web3上的p站都可以，在链上的平台，他们的数据是自己的，平台不能封他们，国家也封不了，他们的作品，直播会给他们带来永久收益。3大家知不知道pump.fun这个sol链上的一键发币平台，也是初步推出了直播功能，但说实话，网站做的很烂也很乱，但已经赚了几千万美金，如果再加上我们tg的流量呢，试想一下，左边是你喜欢的大主播在直播，右边是k线图，刷礼物就是充代币拉盘，打pk更是恐怖，榜一大哥不仅能有成就感，还能赚钱成为大户，代币又凝聚了主播粉丝的共识 (reply to 38747)

eason: 未来5年内，我会成为下一个Justin sun，币圈张一鸣，我们迪拜见

eason: @dev_rel

eason: 孙宇晨34岁，张一鸣41岁，我21岁 (reply to 38998)

HY game: hahhh

— 2024-07-11 —

Logan 🐯: 跨链桥是如何操作ton代币合约的mini和burn方法的，在evm里有授权操作

Logan 🐯: 还是说ton是锁仓？

Logan 🐯: 有人吗

Logan 🐯: 看来是的 锁仓

Logan 🐯: 每针对一个代币都会建立一个子合约

Logan 🐯: 做跨链

llllIIIIIIlIllI: 大手子们 有遇到网页被 rpc 节点跨域的问题吗

llllIIIIIIlIllI: 正常请求头不应该都是放开的吗

harlan: 钱包发送消息到合约，消息构建那儿能看看吗 (reply to 39072)

feng: 请问，如果要自己部署一套私有ton api服务，搭建lite server node够用吗？还是说必须搭建full node？

killer47: 全节点最好 (reply to 39074)

killer47: 速度快

killer47: 请求效率高

killer47: 招人吗 (reply to 38995)

feng: 全节点的话，一个月成本大概多少？

killer47: 就物理成本

killer47: 电脑配置好，网络好就可以了

killer47: 电费不高

炒币养家: 我以前也想做一个这样的 (reply to 38995)

炒币养家: 不过这个成本有点高啊，直播

feng: 租云服务器来搞， 一个月700u能cover吗 (reply to 39080)

killer47: 700没问题，还有剩的 (reply to 39086)

killer47: 带宽按量计费就可以了 (reply to 39086)

炒币养家: TON小程序里面写公用的RPC，能抗住几百万上千万的用户吗

User<6864211003>: tonconnect/ui这个库无法设置带有评论的转账？得用tonconnect/sdk这个库吗？那位大佬知道怎么用吗

condi: 有什么优势，抖音快手是不是有很多被封禁的网红，包括很多现象级网红如天佑，铁山靠他们本身自带巨大的粉丝流量给我引流  别人为啥去了

enpitsulin: payload 这个参数就是设置评论的 https://docs.ton.org/mandarin/develop/dapps/ton-connect/message-builders#%E6%B7%BB%E5%8A%A0%E8%AF%84%E8%AE%BA%E7%9A%84%E8%BD%AC%E8%B4%A6 (reply to 39090)

killer47: 肯定不行啊 (reply to 39089)

killer47: 要自己做分布式节点处理请求

eason: 没法私聊啊 (reply to 39095)

w: 8核能跑吗 (reply to 39075)

feng: 跑不动吧

feng: 官方指导的配置远远高于8核

harlan: 大佬，你那个bot上面好像是通过链接钱包发送消息到合约，发送这个逻辑能分享下吗 (reply to 39072)

w: 官方建议16 (reply to 39101)

harlan: 这个问题解决没有 (reply to 38822)

harlan: 我构建也出现了这个

roberts: 你是哪种构建方式 (reply to 39110)

harlan: let body = new Cell();         body.bits.writeUint(1,32)

harlan: 也是这个方式

roberts: 昨天一哥们提供了这个  https://test.tonspay.top/test.html  例子，但是这个就是属于直接走jetton transfer，固定形式，这个我试了，确实没问题，但是如果我想自定义payload的，就会出现那个错误，目前还在调试。

roberts: 一样，保持沟通 (reply to 39112)

harlan: 我发送给我自己的写的合约，不是转账消息，自定义的消息

harlan: 那个是使用的封装库肯定没问题

roberts: 嗯，那只能走自定义，感觉主要还是那个cell 构建的问题

roberts: 可以起个引入包的项目按照这个去生成body试一下。

roberts: 这个很奇怪，暂时不知道什么原因导致的，一直出现手续费计算失败。 (reply to 39112)

User<6086637958>: 因为你这个交易有问题， 必然会失败

User<6086637958>: 钱包模拟不出要多少gas

User<6086637958>: 你这样的body 是要去干嘛

User<6086637958>: 调用自己的合约？

harlan: 我这个cell肯定有问题，只是说用的这个方式

harlan: message Subtract {     amount: Int as uint32; } receive(msg: Subtract) {         self.val = self.val - msg.amount;     } 想构建这种自定义的去交易

User<6086637958>: 果然用的tact

User<6086637958>: 少了op

Logan 🐯: telegram mini内拿到授权信息的方法是

User<6086637958>: 你看你tactbuild出来的， 他会给你生成一个自定义的op值， 你在构造message得时候第一个得加上这个op

Logan 🐯: telegram有什么内置对象嘛

harlan: 大佬，能给个完整构建 的cell发送这个消息示例吗

User<6086637958>: 建议去读文档，菜🐔表示不懂这些 (reply to 39134)

User<6086637958>: beginCell().storeUint(你的op, 32).storeUint(1,32).endCell()

Logan 🐯: 主要在tgminiapp内再调用网页去拿token有点奇怪

发财: 搞像素农场谁有兴趣

HY game: 你准备了多少预算搞像素弄彩虹

HY game: 农场

发财: 一起搞 (reply to 39145)

wikig: 你是说miniapp的auth这块吗。官方文档写的蛮全的 (reply to 37827)

芭比Q: 能否根据jetton wallet 和jetton master 反推出个人wallet地址？

wikig: 我倒是整过这套逻辑，然后尝试做过商业化。但是最后面临的问题，还是监管本身（没听错，还是监管）。  原有体系我们开放了自由tag和R18许可。  然后索引数据在合约里，内容数据在IPFS和AR上。（还写了合约规范，让任何人都可以自己部署该合约，然后通过合约地址区分成不同的独立的小宇宙来通过使用我们的前端读取小宇宙中的自由视频）  但是后面最致命的问题反而是监管不可用（毕竟是去中心化体系，压根没打算做监管，也做不过来监管）。  导致后续部分contract直接成了儿童色情扎堆地。 接着就是认怂了，TOR上那么大体量的Lolitamagazine 都能给干碎，走的还是BTC和隐私链XMR做图包付费。 那我跟Lolitamagazine比起来相当于隐私透明，真要FBI open我家门说开就开。 所以光速滑轨认怂，还好前端没部署到IPFS上还来得及关服。 (reply to 38995)

eqasw: 你是真大佬 (reply to 39158)

wikig: tornado cash的逻辑已经宣判了技术无罪论的死刑。  什么？老子关不了IPFS还关不了你吗？ (reply to 39158)

芭比Q: 老铁们，如何获取jetton wallet的holder address?

HY game: 你这是真牛逼。 不过图片和tonado cash不一样吧。 去中心化存储都会有这个问题。要不你就弄个治理委员会。大家一致投票通过的话，就禁止他使用。或者分叉 (reply to 39158)

HY game: 还有你这种用红qi做头像的.... 不是卧底就是反贼或者自以为牛逼的技术哥 (reply to 39160)

wetkin: 那就应该不是去中心化了吧。还是有监管吧

HY game: 去中心化 不代表无监管啊，还有委员会呢 (reply to 39171)

eqasw: 就不能是爱国青年吗😛 (reply to 39170)

HY game: 中文圈翻译有问题，言论自由不是说瞎几把说  是free 说

HY game: 这种行为就很扭曲（文字意思） ，if you love this CN ，don't break his law... (reply to 39173)

eqasw: 红旗保命

HY game: if you accept crypto, code is law.

condi: 然后初期走的就是 看视频得空投的路子，类似各种极速版 (reply to 39158)

condi: 主要是那个哥们说各种被封杀的网红，别人只是被封杀了，有些本身还是有钱，转幕后的

condi: 这种合作可能就进去了

eqasw: 唯一能搞的就是色情直播了

condi: 有很多现成的啊，别人能签约更多，除非你砸更多钱

condi: 不然的话，这个跟区块链本身也没啥关系

condi: only fans这种别人本来就收钱

condi: 欧美不少顶流网黄一年也上千万刀

eqasw: 玩法很多把

condi: 试想一下，左边是你喜欢的大主播在直播，右边是k线图，刷礼物就是充代币拉盘，打pk更是恐怖，榜一大哥不仅能有成就感，还能赚钱成为大户，代币又凝聚了主播粉丝的共识  别人要是不在外国会进去的，在国外也可能会有风险

condi: 别人只是被封杀了，不是傻子

condi: 而且要给多少钱 别人才愿意来

eqasw: 这种只能走色情路线

condi: 你发个土狗 让一些小kol喊单，发推文，也要几千刀一条

eqasw: 类似myavlive

condi: 完事 kol还会删掉，当无事发生

condi: 这就牵扯到如何谈独家了 (reply to 39194)

condi: 你不可能去爬吧

eqasw: 拉点小妹直播就行

eqasw: 主播还是很好解决的

condi: 先肉身出去先

condi: WeChatSina WeiboFacebookTwitterEmailWhatsAppPrintCopy Link分享 商业内幕报道说，研究神经科学和心理学的艾斯拉·穆恩（ Isla Moon）发现自己在OnlyFans走红后，决定全职创作成人内容。仅 2023 年，她就获得了近 500 万美元的收入。   2021 年初，艾斯拉·穆恩打算从事神经科学方面的工作。然后，她遇到了 OnlyFans。  为保护个人隐私而使用化名的艾斯拉·穆恩 告诉 Business Insider，”我想试一试，”很多模特都是你在 Instagram 上看到的典型模特，而我不一定是那种体型。我想证明给自己看，我也可以成功。”  当时，这位加拿大人正处于心理学和神经科学本科学习的最后一年，在大学里担任实验室技术员和实验室协调员，一直在申请博士研究项目（一些加拿大的大学和专业允许优秀的本科生直接进入博士项目，尤其是在科学、工程和一些其他专业领域。这通常被称为“直接博士”项目或“硕博连读”项目）。  后来，她为推广自己的内容而制作的 TikTok 视频走红网络。一夜之间，她的OnlyFans 页面的订阅人数激增，她在两天内赚到了相当于她作为实验室技术人员的年薪（约 11,000 美元）。  就在这两天，她也收到了一份她喜欢的实验室的博士录取通知书。最终她决定放弃研究计划，努力把 OnlyFans 做成自己的事业。  艾斯拉·穆恩说，”做决定太难了。我记得我给我妈妈打了电话，我告诉她，’嗨，顺便说一下，我在做 OnlyFans，你觉得怎么样？她接受，非常支持我。我告诉自己，你知道吗？我两天就挣到了年薪。最坏的情况是，如果和OnlyFans合作不成功，我明年再申请。但结果太好了。我再也没有回头”。  2023 年，在 OnlyFans抽取20%的提成之前，伊斯拉在平台上的两个账户赚了近 500 万美元。总计净收入略高于 400 万美元(Insider根据她提供的文件核实了这一信息）。

eqasw: 直播，bc链游，做盘一条龙

User<5695916992>: 有人用fragment的API吗？

User<5695916992>: 昨晚fragment嵌了cdn接口都无法访问了

wikig: 所以问题的核心就不在存储上。  因为大家都知道存储管不了。我不存IPFS我有钱我直接存BTC的主网区块里行不行？当然行！ 08年~12年英国关于BTC上主网区块存在的儿童色情数据是有过短期判例的。  但是问题的核心在提供索引和解码上。  因为裸数据用户根本获取不到。你实际上是对已有数据做了解码然后给到用户看。  在BTC上，这个就是对区块数据做解析。 在IPFS上，就是提供IPFS的后缀路径信息。  所以就成了一种习惯。管提供索引的，管不了最终存的地方。 (reply to 39169)

wikig: 我是觉得，也别说什么web3什么去中心化，没啥必要。   反正路径摆在那，web3一定弱监管，然后就是翘起屁股挨打。  web2中心化被诟病就被诟病了。只是服务成本、审核成本会指数增加倒是 (reply to 39179)

wikig: 上面讲的那些，碰的恰恰不算是国内的G点。  如果涉及到毒品贩售、儿童色情这两块领域。  国内倒是真比走出国门安全哈哈哈哈哈 (reply to 39201)

condi: 会抓的

condi: 其实还有个很大的问题就是，内容

condi: 没有很多内容推荐不行的

condi: 那个ghs的，其实也就是刷一下，估计还不如很多盗版站呢

condi: 最后还是靠空投 拉盘解决

condi: 很多链，空投之前 社群火热

condi: 空投完了，说话的人都没几个了

wikig: 法律体系差异。  具体可以看判例内容与密集度。  儿童色情判例对比起来真没多少重的 (reply to 39209)

condi: 区块链都是奔着钱来的，没钱我玩啥区块链

芭比Q: 没人讨论技术吗 (reply to 39168)

wikig: 内容的前置条件是审核、带宽、存储。  一个完整的视频站，其实蛮重的可以说。  如果是自己提供用户upload的模型，那带宽、存储都是支出大头。  然后审核则是业务流里的大头 (reply to 39210)

killer47: 你要学会用ai (reply to 39218)

wikig: 可以考虑遍历跟jetton wallet交互过的所有地址做筛？  因为理论上好像这个值没法直接算吧 (reply to 39168)

condi: 搞起来了，是不是web3 无所谓了

condi: 搞不起来，也就是茫茫多，一看就拉不起盘的项目

wikig: 每个PDA都是用户地址+token地址算出来的。  但是不一定部署了。所以理论上除非使用一些中心化索引可能就只能查历史交互了 (reply to 39221)

芭比Q: 你问问ai看回答你吗 (reply to 39220)

wikig: 所以这就是我说的意思。别讲什么web3去中心化的故事 (reply to 39207)

wikig: 想发币拉盘直说

condi: 这个才是唯一核心

芭比Q: 但是tonviewer 能直接找到holder 不知道怎么做到的 (reply to 39221)

condi: pepe有啥，拉盘就可以了

wikig: 但是其实他们诉求已经达到了。  一个盘到底是to用户赚钱、to vc赚钱。  是值得分析的 (reply to 39215)

condi: 主要是他们本身就融资很多啊

condi: 有钱

wikig: 大部分空投盘都是to vc赚钱。用户数据造好看。扩大融资 (reply to 39231)

condi: 是的

wikig: 然后下一轮融资清晰出去上一轮融资

wikig: 上所做市

killer47: 要获取Jetton Wallet的持有者地址，您可以调用Jetton Wallet合约的get_wallet_data()方法。这个方法会返回包括余额、持有者地址、Jetton Master合约地址和Jetton Wallet代码在内的一系列数据。  以下是使用TonWeb SDK来获取Jetton Wallet持有者地址的示例代码：  import TonWeb from "tonweb";   const tonweb = new TonWeb();   const jettonWalletAddress = "<JETTON_WALLET_ADDRESS>"; // 替换为实际的Jetton Wallet地址  const jettonWallet = new TonWeb.token.jetton.JettonWallet(tonweb.provider, {     address: jettonWalletAddress   });  async function getJettonWalletHolderAddress() {   const jettonData = await jettonWallet.getData();     const holderAddress = jettonData.owner_address; // 持有者地址   return holderAddress.toString(true, true, true); // 返回格式化后的持有者地址 }  getJettonWalletHolderAddress().then((holderAddress) => {   console.log('Jetton wallet holder address:', holderAddress); });   请确保将<JETTON_WALLET_ADDRESS>替换为您想要查询的Jetton Wallet的实际地址。此代码段会异步获取Jetton Wallet的数据，并从中提取持有者地址。  更多关于Jetton Wallet的信息和如何与之交互，您可以参考TON文档中关于Jetton Wallet处理的部分。此外，您也可以查看Jetton Wallet代码和Jetton Wallet的get方法以获取更多详细信息。  ---- ⏳ Verifying info & enhancing response, hold on a sec. (reply to 39225)

wikig: 玩烂了的逻辑

condi: 包括现在所谓的 ai领域的币

wikig: 原本来可以直接找到holder吗。我一直以为，是tonviwer这种中心化节点提供商做了数据入库的数据缓存。类似于dton.io那样。  然后这样一来，数据一统就出来了🫠 (reply to 39229)

rdyer chen: 咨询一下.TON对于版权管的严么.比如你用了别人家的版权. 是否会牵扯到法律

wikig: 我是觉得，会。但是铁拳不一定砸的到。  ton domain 和 ton proxy 以及后续如果能出的来的ton site......我感觉会是个 TOR pluse 。 估计监管是很难监管的了。 (reply to 39242)

rdyer chen: 有没有这样的案例 . 最坏的结果是什么.直接抓 到肉身么

condi: 侵权这种 赔钱吧

condi: 参考，前不久的， 任天堂游戏模拟的

condi: 任天堂告了大陆的模拟器开发商

condi: 任天堂今年 2 月 27 日提告 Switch 模擬器 Yuzu（柚子）開發團隊 Tropic Haze，理由是「大規模助長盜版」，日前傳出被告請律師與被告打法律戰，今（5）日又傳出 Tropic Haze 以 240 萬美元賠償金與任天堂達成庭外和解。     根據兩造律師簽署的聯合聲明文件，Tropic Haze 不僅同意向任天堂支付 240 萬美元（新台幣 7,572 萬元），還承認 Yuzu「主要是為了規避和遊玩 Nintendo Switch 遊戲系統而設計的」，團隊將永久禁止開發、託管、提供下載 Yuzu 的程式碼與功能。     Tropic Haze 將關閉所有經營的社群媒體，官方網站 yuzu-emu.org 域名歸由任天堂公司掌控，團隊不僅同意刪除 Yuzu 的副本，也刪除開發或使用該軟體的相關規避工具，如「TegraRcmGUI、Hekate、Atmosphère、Lockpick_RCM、NDDumpTool、nxDumpFuse 和 TegraExplorer」。

wikig: （得看你用什么注册了  现在作为刚出来的早期，估计是没那么快出现第一个案例的。  但是如果按照TOR的历史判例将的话，侵权好像没啥事（因为不涉及儿童色情、毒品贩售两大重拳出击的地方。  只要你没有法律实体，然后立足于ton domain这种接近去中心化的地方，用的是+888手机号和ton domain.......  那我觉得应该短期判不到你

rdyer chen: 因为我觉得后期会有大量的开发者.因为美术资源的问题而大量使用国内做好的美术资源.

condi: 换个皮完事

wikig: 那我觉得无所谓，如果不是大厂根本没有法务预算跟你扯皮 (reply to 39250)

rdyer chen: 会出现短平快.甚至套壳上架的可能

condi: ai绘画，改改

condi: 已经有很多年了 (reply to 39253)

condi: 不说各种小游戏，就算端游以前也不少

condi: 比如完美多胞胎

eqasw: 侵权问题很难判的

eqasw: 只要你不是完全一比一复刻

condi: https://github.com/pagefaultgames/pokerogue

condi: 那冲这个

condi: 上个月还有五六万人在线

condi: 宝可梦 + 肉鸽

rdyer chen: 这个移植到TON上

eqasw: web3不看玩法把

condi: 整体换一套皮

rdyer chen: 靠谱 (reply to 39263)

condi: 老外对于宝可梦也有情怀的

condi: 这个游戏本来就是宝可梦 + 肉鸽，素材就是宝可梦的

rdyer chen: 情怀老了去了

eqasw: 马里奥更有情怀

condi: 全开源

rdyer chen: 肯定有人准备做了

wikig: 好家伙

condi: 我还有套小丑牌的

condi: 哪有那么容易做

eqasw: 两天前还在提bug

rdyer chen: 群里不缺技术

eqasw: 这代码你敢用？

condi: 我之前跟的老板，算了下，发币 一套流程搞下来，最少也要几百个

eqasw: 那不是无尽的坑

condi: 为什么不敢，肯定自己改啊 (reply to 39279)

condi: 能看得懂

wikig: https://t.me/fragements_bot/app

eqasw: 然后发现改不完的坑 (reply to 39282)

wikig: 这直接塞进去

wikig: 能用吗

wikig: 我看看

wikig: 啊，iframe给ban了

condi: 能用，全开源的

wikig: 那只能手机看看了

condi: 服务端都有

wikig: 做没做移动适配哈哈哈哈哈哈

rdyer chen: TON发币这么贵吗

HY game: 很多web3的人都是土狗思路，恨不得五万块买淘宝代码 然后做出一个马里奥

condi: 自己编译就行了

condi: 这个本来就是非盈利的

wikig: 我给他塞到了webapp里面 (reply to 39284)

condi: 要是盈利，早就被任天堂告了

wikig: 不知道效果如何

condi: 开源作者都放弃，交给社区维护了

condi: 别的链 (reply to 39294)

condi: 发币不贵，gas就行

condi: 但是后续 宣发 拉盘

condi: 找对接 各种

HY game: 开发者在哪里看star收入 余额啊

rdyer chen: 这种如果想告 ,他告谁去?

wikig: 麻烦的一批，从kol对接、喊单、做市再到上所，一个比一个满帆 (reply to 39304)

condi: 是的 (reply to 39308)

wikig: 看文档说在fragment (reply to 39306)

condi: 你要融资，得有个实体 (reply to 39307)

rdyer chen: 这个他任天堂懒得管 吧 (reply to 39299)

condi: 任天堂法务部出名的

condi: 除非你喊个美术，全套资源改一下

rdyer chen: 我的意思是 如果你不融资那没问题是吧

condi: 跟那个啥

wikig: 可能会直接搞telegram。  然后跟Apple与telegram对线一样的结果。telegram把该BOT设定为不可打开 (reply to 39307)

condi: 前段时间火的

condi: 弄的 帕鲁一样

rdyer chen: 顶多给你封了 (reply to 39317)

condi: 像又不像

condi: 弄的帕鲁 跟 宝可梦一样

wikig: 对啊，就是把bot封了 (reply to 39320)

condi: 还有另一个 宝可梦自走棋，我给你们发发

rdyer chen: 自走棋 应该也会有一定的玩家

condi: https://github.com/keldaanCommunity/pokemonAutoChess

condi: 这个是回合制 肉鸽 闯关 (reply to 39260)

condi: 宝可梦自走棋 (reply to 39327)

rdyer chen: 你还别说 这款游戏 可玩性 还不错呢 (reply to 39330)

condi: 肉鸽 闯关 现在还有2w5个在线玩家

condi: 这两个都可以的

condi: 不然我发给你们干嘛

rdyer chen: 执行力强的人,已经开始动手了.

condi: 还有个 类似wow + 塞尔达的，也开源

condi: 不过代码rust

condi: 应该是被人改过，然后开源的官方发了个声明 禁止用在任何区块链项目上

condi: 像素风的

condi: 无缝地图

rdyer chen: 不过这种游戏都太重度了. 不知道适不适合 TON玩家的尿性

HY game: ton玩家

HY game: 都是垃圾

rdyer chen: 都是垃圾吗\

rdyer chen: 可玩性 不看.只看能捞多少吗

wikig: 还真是

wikig: 薅空投就薅空投

wikig: 谁关心游戏是啥哈哈哈哈哈

wikig: NOT：你好，只需要点点点就可以了

rdyer chen: 和赌狗谈情怀

eqasw: 以太坊不也一样？

wikig: 一样啊

wikig: 所以gamefi在fi

eqasw: 玩链游谁关系玩法

rdyer chen: 和赌狗谈情怀就跟和渣男谈恋爱一样

wikig: 跟game属于是，真没啥大关系

Howard: 正在, 滑動關閉的已經好了。下個版本會更新關閉的問題 (reply to 38800)

eqasw: 你们搞链游不也是想着做盘

condi: 别的链也是薅空投

eqasw: 难道你们真想做一款好玩的游戏？

condi: 一样的 核心就是这样的

Howard: They must use newest Telegram API to prevent app close with vertical scroll. They fixed this, but not scroll.   滚动的没改好 (reply to 39360)

condi: 上线就要宣发 玩了给空投

condi: 然后对接各种

Howard: 🐶 大家好熱烈

condi: 谈kol

rdyer chen: 怀情总会被无情的抛压

condi: 一些小交易所

condi: 有些 类似抹茶 几万刀可以上

wikig: 是这味，春风吹又生的韭菜（ (reply to 39371)

Howard: 該不該分主題了，有 mini-app, API, Wallet, SmartContract, Telegram Stars..... 🫠🫠🫠  問題五花百樣

condi: 代码我都能看懂 不然为啥我没行动 (reply to 39337)

wikig: 还真是，蛮杂的讨论的

rdyer chen: 因为赌狗不看玩法只看收益 (reply to 39377)

rdyer chen: 游戏越简单粗暴即可

condi: 小丑牌 我改了一半也放弃了

rdyer chen: 是不是玩法太复杂了

condi: 简单，锄大地 + 肉鸽 + 一些自走棋元素

condi: 抄的

condi: 原版就叫小丑牌

eqasw: 点点点是最好的

rdyer chen: 嗯  不动脑子是最好的

condi: 天生适合赌博 上头的

condi: 不过 单机玩的

condi: 就是打分

rdyer chen: 是这个吗

eqasw: 以太坊那些赚到钱的链游，基本上是点点点

condi: 是啊

rdyer chen: 风格像素 风 .很TON平台应该喜欢

condi: 后面我老板给我说了那些道理，我就放弃了

rdyer chen: 啥道理

condi: 上面说过啊

eqasw: 本来就是快节奏，谁有耐心玩那么复杂的游戏

rdyer chen: 博的在简单点

rdyer chen: 赌的太简单点

condi: 就是 发一个币要走那些流程，比如 发一个kol发推要多少钱，上抹茶这种要几万u，找各种团长等等

condi: 有能力卡的

condi: 后面一个对子可以几万分

magic: 你看那个仓鼠 .天天说发币.结果一直叼着.这不也赚了么

condi: 每关过了以后可以买卡，就跟自走棋买棋子一样的

magic: 也不一定非要上交易所

condi: 这种 估计是 用用户数据 谈了融资 (reply to 39406)

magic: 但你可以先把牛吹出去

eqasw: 仓鼠咋推的

condi: 然后融资，也有谈，名义上，给你1000w，对外也是，实际上没那么多

condi: 也是之前老板给我说的，我才知道那么多门道

magic: 应该是TOn做为标杆了 (reply to 39411)

magic: 我感觉 像仓鼠那种.先别想这么多.先做出来. 如果有用户量了. 在拉融资. 后面的都不是事

eqasw: 他现在还没发币吗

condi: 人与人不一样的，有些人圈子都是老板，出去吃个饭，刷刷脸就可以拿几百万刀种子轮

condi: 国外也一样

magic: 你用了KOL . 发布也在日程了.

magic: 现在仓鼠 一直都没有发币

condi: 昨天好像说全平台 (reply to 39416)

magic: 全平台什么 (reply to 39421)

condi: 多个cex

condi: 我记得昨天好像是发过类似的

Yang: 討論請以開發者問題為優先

Yang: 無關問題請移步至其他群組討論

magic: 但是感觉 也是出来吹吹牛.加点人气.

roberts: 发送交易的时候，由于收款账户未产生过交易，无法成功发送，在发送交易的时候怎么配置强制发送不回弹呢？

eason: 直播+有流量的up主一键发币一定是比现在的抖音直播更加高级的，哪怕是黄播，web2的打赏是消费，web3的打赏是投资，在名声地位激励基础上加了个金钱激励。就打pk来说，两个社区基于共识和想赚钱心理的拉盘绝对比现在的pk更加疯狂

eason: @所有人

wikig: 可以考虑发送给不可退回地址 (reply to 39429)

roberts: 试过了，一样发不出去

eason: web3明显比web2多了很多人性驱动

wikig: 那要不 (reply to 39434)

wikig: 考虑一下先把对端地址初始化了先 (reply to 39434)

roberts: 对这个验证了，只要初始化了就可以。

wikig: 我也不记得规则了，我印象里未初始化只能收一笔收款（？

roberts: 哈哈，现在就是在想想看，怎么能解决这个未初始化的情况

wikig: 尝试转不可退还地址呢？ (reply to 39440)

wikig: 也会被reverse？

CarlEZ🆓: 谁知道，DOGS那个获取用户的TG注册时长，如何获取呀，有API吗

roberts: 对

11: 各位大佬，有办法用dump打印出一个地址吗

rdyer chen: DOGS是最近最火的 (reply to 39443)

rdyer chen: 这个如何获取.是不是通过飞机号 算出来的

DeMarcus Edwards🇭🇰: 有大佬知道 是国人的项目吗

magic: @Musdt_9 他是如何获取到飞机的使用年限的

Manta: 发布一个这个合约 为什么给我标记成欺诈了

Mao: Running to the moon 能实现吗？实现不了不是欺诈吗？🐶 (reply to 39462)

Smart: ton合约直接通过tonClient.getContractState(contractAddress) 获取其中的data，如果这个data是一个cell 类似这样 begin_cell() .store_slice(a) .store_ref(b) .store_dict(c) .end_cell()， 我现在可以直接获取a，我可以直接获取c，然后遍历这个字典吗？

Smart: 还有这个getContractState应该直接就是返回的目前合约最新的状态对吧

Mao: 你们可以开测试 mini app 的账号吗？

Mao: 按照这个登录，一直提示超时

live: 请问master合约能获取该jetton持有者的余额吗？

Smart: ton合约直接通过tonClient.getContractState(contractAddress) 获取其中的data，如果这个data是一个cell 类似这样 begin_cell() .store_slice(a) .store_ref(b) .store_dict(c) .end_cell()， 我现在可以直接获取a，我可以直接获取c，然后遍历这个字典吗？

ball@Solace.ai: tonkeeper浏览器插件可以连接dapp吗

ball@Solace.ai: 有人没

Codingzzz: 当然 (reply to 39477)

kevin: 不能， 不过 jetton wallet 可以 (reply to 39473)

eason: 那针对监管方面，我们有什么好的解决办法没有 (reply to 39216)

eason: @carzygod 姐

enpitsulin: 链上就没有办法监管别想了

wikig: 无。  无非是强监管和无监管两条路走。  上面已经论述了两种方案各自的差异优缺了 (reply to 39493)

enpitsulin: 最多 client 屏蔽

炒币养家: 你们TON MiniAPP小程序前端连接钱包，RPC节点用的官方免费的还是收费的？

wikig: 如果是前端链接 tonconnectui ，好像不需要自己填RPC (reply to 39498)

Smart: 有个关于TON合约的问题，我现在直接可以通过合约地址getState获取到实时的data,那写get方法的意义是什么呢？

eason: 所以无监管就会大概率触及到关于儿童色情的内容，然后就g了是吧 (reply to 39496)

wikig: 差不多是这个逻辑。要看用户范围多大 (reply to 39502)

炒币养家: 确实是的，多谢了 (reply to 39499)

炒币养家: https://foton.sh/docs/why-foton

炒币养家: 这个你们有在使用吗

Mao: 你们是用测试账号开发 app 吗？ (reply to 39505)

炒币养家: 在测试网开发的

Mao: 测试账号咋注册的呀

Mao: 我一直没注册成功

Mao: 是以前注册的吗？

炒币养家: 不是啊，TON测试钱包就行

炒币养家: 然后这里endpoint用测试网地址

Mao: app 要加到机器人

Mao: 你机器人是测试账号下的吗

炒币养家: 机器人你创建个测试用的就行撒

Mao: 你的网页从哪打开的

Mao: 是 mini app 吗

炒币养家: 是啊

炒币养家: 你创建个bot做测试用不就可以了吗

炒币养家: telegram又不会给你搞个测试版的

Mao: tg 有个专门测试的登录入口

Mao: app 地址可以填写本地 ip

炒币养家: 那我不太清楚额

Mao: 开发更方便的

炒币养家: 这个好像是可以

Mao: 你用的正式账号？

炒币养家: 相当于你本地启动了个ngrok

炒币养家: 你在本地启动个ngrok就行了

Mao: 哦哦

炒币养家: 就是内网穿透

Mao: 我按照这个，一直登录不上

Mao: 你试下可以吗

Mao: 可以的话不需要 ngrok 了

wikig: 额。你本地调试。理论上讲，如果是本机的话

wikig: 其实可以直接改本地DNS或者hostname来实现把某个本地domain指向过去吧

wikig: 或者内网在路由里设置一下解析不就好了

Mao: https 可以走本地吗

炒币养家: 可以啊

wikig: https是个问题。走是能走，但是证书是无效的

Mao: 生产的 app 地址只能是 https 的

wikig: 那你要不还是

wikig: 老老实实走frpc或者ngrok之类的穿透出去

wikig: 然后套一层cf

Mao: 这个可以

wikig: https搞定了，实时性debug也解决了

wikig: （因为我就是这么干的

Mao: 你也是因为测试的没登录成功？

wikig: 我是嫌测试账户太麻烦

wikig: （所以都是直接公网debug的笑死

Mao: 哦哦

炒币养家: ngrok很方便啊，安装了启动个命令就帮你穿透了

wikig: 部私有化的可以 (reply to 39559)

wikig: 用官方的sever的话慢的发指

Mao: 那就先用 ngrok 吧

Mao: 测试账号是在是搞不定

wikig: ngrok / frp 之类的内网穿透，如果你有云服务器搭个自用的蛮方便的

gavin: 你们都搞复杂了

gavin: 用Cloudflare就行

wikig: cf也有穿透服务 (reply to 39566)

wikig: 但是没直接用过

w: 有知道怎么看节点同步进度吗

Degen: 有没有人知道沙箱里怎么切换到测试网

Degen: 这边默认的一直连不上

炒币养家: ngrok 3步搞定

炒币养家: 可以给你映射个https的域名

Cake: 有哪位写过或者找到过转账收费的 Jetton 吗，想学习一下

Wick李: 哈哈，发诈骗币吗 (reply to 39579)

Cake: 啊不是，

Cake: 我是看一下这个该怎么实现，因为这种币在 EVM 链上很常见，所以想看下Func 如何实现。

wikig: 可以直接改jetton wallet的合约把 (reply to 39582)

gavin: 重新实现transfer op

wikig: 虽然大概率会被识别成非jetton

gavin: 不是大概率 是100%

wikig: 还真是

Cake: 在 wallet 的存储放一个收费地址，然后每次 transfer op 的时候 发两条消息吗

Cake: 现在有代币是收费模式的吗

w: 有下载latest.tar.lz快照到朋友吗，用什么解压快一点啊，我用的lzip -d latest.tar.lz ，太慢了，一分钟解压1g的速度

Mr.A: 大佬们,请教个问题,这笔交易我怎么才能拿到交易的 in hash

Freeman: tact，一个合约怎么读取其他合约的状态变量呢

Freeman: 毕竟get方法不能用于合约之间通讯

Freeman: 有大佬知道吗

Freeman: 官方都还没给出个文档

Freeman: 是不是目前Tact的版本就没有这个合约间的通讯功能呀

Howard: TON 上面合約本來就不能互相 get 值, 只能透過 message 直接請求 (reply to 39615)

Howard: 你看了教程嗎老鐵 🌊  https://tact-by-example.org/06-communicating-subcontract (reply to 39609)

Freeman: 所以必须要通过message进行通讯

Freeman: 好的，感谢 (reply to 39618)

Gary: @dev_rel Hi Howard, 请问这个是什么工具吗？  可以看到bot数据

Yang: TGstats

MEW: 现在有什么小程序广告的CPC平台吗

MEW: 可以按照每个tg用户的点击去统计给费用的

CarlEZ🆓: 知道在获取tg注册年限的接口在哪吗，没找到 (reply to 39461)

Yang: 找 TGstats

User<5695916992>: fragment.com昨晚更新加了cdn API接口都被拦截了 会员机器人相关的都崩了 有人知道怎么解决这个问题吗？或者有新接口

User<5695916992>: 有偿 指教或者交流下

Howard: 這個感覺生意太好被官方注意到了？ (reply to 39645)

Howard: https://tgstat.com/ratings/channels (reply to 39625)

Xu: 请问拿到接收到的Jetton的的master呢

Xu: Jettonwallet那边发过来的消息 (reply to 39663)

Degen: 怎么在合约里给另外一个合约发消息更新状态不成功呀

Degen: 看我这个写的有问题吗

Degen: 发送test test接收到再发送add

Degen: Add更新变量

Degen: 正常next item index 要变成1了

Degen: 🤔

Tina: 有做项目联合推广的吗

— 2024-07-12 —

Alfred: 先 verify transaction 是 success 的 (reply to 39667)

harlan: 哪位大佬能解答下为什么，getValue能获取到合约的值，send就会回来500错误码

Leo: 看看 500的具体错误时什么？

Manta: 为什么官网的代码都要扫码部署

Manta: 就不能用私钥 部署吗

Leo: 看response 返回的是什么

Leo: 可以，设置私钥的环境变量就能自动读取到了 (reply to 39737)

harlan: 这个就是response，500 Internal Error (reply to 39736)

Leo: 哦哦，response 的data 呢

harlan: 就是500错误码了，有data就正常返回了

harlan: status: 500,     statusText: 'Internal Server Error',

Leo: 好吧，估计是发过去的cell不对

Mr.A: 大佬们,请教个问题,交易里的body hash和in hash有什么关联吗?知道一个可以推导出另外一个吗?

Manta: 有没有tact 合约开发 有偿拜师 想达到简单代码部署的程度

Manta: 有没有tact 合约开发 有偿拜师 想达到简单代码部署的程度 私聊我一下

User<6086637958>: https://testnet.toncenter.com/api/v3/#/default/get_transactions_by_message_api_v3_transactionsByMessage_get (reply to 39748)

Mr.A: 鸡哥,你又出现了,每次出现都会带给我惊喜😀 (reply to 39755)

🦴 Brenda: react v4转账有大佬做过吗

🦴 Brenda: "LITE_SERVER_UNKNOWN: cannot apply external message to current state : Failed to unpack account state"

🦴 Brenda: 我这边出现问题

Laoli: TG自带钱包怎么备份助记词

enpitsulin: tg自带的是托管钱包，转到ton空间那个是有助记词的 (reply to 39769)

Logan 🐯: 怎么调用get方法会返回-13

Logan 🐯: pc端没事，网页端就会报错

enpitsulin: 不是标准 TVM exit code 找你合约里面定义的

Logan 🐯: 我没有定义这个 就是单纯的获取某个值

Logan 🐯: pc端没有报错 移动端报错

enpitsulin: 哦 -13 啊 没gas了

Logan 🐯: get方法要啥gas

Logan 🐯: 找到问题了 请求到正式网区了

Manta: 方法需要接受主币 用特殊标注吗

elon: ton 的交易hash是如何计算的

Allen: >ton 的交易hash是如何计算的 initstate的data跟code

eqasw: ton的订阅支付有谁用过吗

elon: 有没有代码模板 (reply to 39804)

Metas: ton connect ui前端怎么检查一个交易完成呀？

Metas: 大佬们

User<6086637958>: 看账号的seqno

wikig: @wisdom_yang 提问，想问一下关于telegram  browser version什么时候 web version的 /a 或者 /k 版本可以支持多webapp同时打开？  目前，尤其是/a 似乎是只能单次打开webapp，然后会把上一个webapp给close掉。  这样在连接钱包，实现@wallet确认操作的时候会中断掉原有webapp的行为和操作。还是蛮不方便的。 @dev_rel

User<6086637958>: 现在貌似在pc端app去连wallet都会顶掉

Metas: 怎么看？有文档吗 (reply to 39811)

wikig: 对的，只有mobile端幸免。  但是这样对于前端逻辑设计改变就大很多 (reply to 39813)

wikig: 重新load一遍很多状态都乱掉了（

Metas: 上面大佬说用toncenter的get transaction api， 是用什么参数呢

User<6086637958>: https://docs.ton.org/mandarin/develop/dapps/

User<6086637958>: 读一遍你就知道了

User<6086637958>: 主要重新进来钱包链接的状态也没了 (reply to 39816)

User<6086637958>: 然后又换起来，套娃

wikig: 就会导致一直处于：  1.我webapp要连接钱包  2.tonconnectUI 吊起钱包 。然后把原有webapp顶掉  3.然后我点了确认。  4.然后wallet确认完之后自动关掉了。  5.然后我再打开我的webapp  6.因为刚才webapp被关掉了我重开了。然后我又陷入了第一步，要连接钱包

wikig: 闹麻了

Metas: 连接过会restore的 (reply to 39822)

User<6086637958>: 我不理解的是，为啥移动端可以，pc端不行

Metas: 技术栈不一样，移动端用的人多优先级高一些

wikig: 没有诶，我browser连接完就是close掉了@wallet的webapp (reply to 39824)

Metas: 需要重新打开你的webapp，就会自动连接

User<6086637958>: 并不会

eqasw: 会自动连接把

eqasw: 他会把连接信息保存在Localstorage里面

User<6086637958>: 你用pc端去catizen 连一下tg的ton wallet就知道了

Yang: 這部分可能要問一下 @dev_rel (reply to 39812)

User<6086637958>: 主要是缺人 (reply to 39826)

Metas: https://github.com/ton-connect/demo-dapp-with-react-ui

User<6086637958>: tg这么大一个产品

Metas: 刚试了下这个demo，已经可以自动返回了

User<6086637958>: 建议多招点人

Metas: 不会把页面关掉

User<6086637958>: 比如我

eqasw: 终于露出鸡脚了

wikig: 哪个demo？dugerking ? (reply to 39837)

User<6086637958>: 我去试试 (reply to 39835)

eqasw: 我这一直可以返回啊

User<6086637958>: 毫无区别

Metas: 看我的视频

Metas: pc已经不会把页面关闭了

wikig: 话说方便否把test的webapp地址发一下？  我也录一个browser版本的 (reply to 39848)

Metas: https://ton-connect.github.io/demo-dapp-with-react-ui/

Metas: 你要在tg里面打开

User<6086637958>: https://t.me/danielll_test_bot/testApp

wikig: 试了一下， `/k`是可以的，没顶掉旧webapp  我去试试`/a` (reply to 39853)

wikig: 试了一下/a 好像确实还真可以。  那问题来了。/a 是确实把原有的webapp顶掉了。  所以他是，怎么做到把连接信息往回带的？  以及因为我之前写的原生的走 tonconnectUI被顶掉了就顶掉。 中间有什么方案去实现保持连接状态吗？localstorage？（也不能吧，它可咋写入的） (reply to 39856)

wikig: 如果是在mobile端打开的话，因为他是默认走tg内的浏览器。点击连钱包会吊起@wallet，但是似乎@wallet优先级比内置browser高，会把browser给close掉。  所以就会出现比较尴尬的情况， 你给人发这个链接，相当于这个用户的行为流是：  1.用户点击link  2.用户连接wallet（然后会自动把link的browser窗口关掉）  3.用户会到wallet的webapp在连接完之后  4.用户需要重新点击link

MEW: 帅 (reply to 39848)

wikig: 提问。想问一下有没有办法做到就是，在不close掉原网页链接的情况实现？ (reply to 39860)

Metas: mobile不是早就不会关掉原网页了吗？

wikig: ??? 啊？为啥我这边的几台Android和IOS测试设备都是会关掉的啊，怪 (reply to 39874)

wikig: 比如我点上面你发那个link也是

Metas: @carzygod 看我这个

wikig: 我这边长这样

Metas: 你这个不在tg里面

Metas: 打开chrome的窗口了

Metas: 你要用这种链接，需要在bot里面创建app (reply to 39855)

wikig: 我说的就是telegram中的web窗口.没有在说miniapp (reply to 39884)

wikig: 这种是封装了webapp之后的（虽然也是web） (reply to 39885)

wikig: 我这里说的就是如果 群聊直接点击链接,用户的行为流 (reply to 39860)

eqasw: 有重定向的，连接完钱包他会重定向回你的小程序

Howard: 这个属于 Telegram 团队的范畴 (reply to 39812)

Howard: 估计现在有其他方式绕开，毕竟 mini-app 多開 薅羊毛的工作室好多.... (reply to 39812)

Alfred: 不用特殊标注，但要特殊处理，主要是区别用来 pay gas 和实际操作用的 Ton (reply to 39797)

mu: 开发ton学Tact就可以了么？还需要学FunC和Fift么？

Alfred: Tact 好上手，了解 func 对于开发有帮助

mu: 好的 谢谢 (reply to 39929)

Yang: 關於 Tact 與 FunC 語言比較，可以參考：https://t.me/tondev_zh/20999  初學者可以先從 Tact 入門：  從 tact-by-example.org  實作，了解 Tact 語言的基本語法。Howard 的教學影片👈   ScaleBit & TON 贊助的講座：https://openbuild.xyz/learn/challenges/2023609337  TON Research 論壇：了解最即時的 TON 生態資訊及學習資源  官方文件： ton.org/dev 生態系統一覽： https://github.com/ton-society/ecosystem-map  #入門 (forwarded from Yang)

c: 写合约学哪种语言

mu: TL-B 这些 前期不看，也可以写复杂的合约吧？？

Alfred: 可以的

Alfred: Tact 好上手 (reply to 39935)

OK不OK: 有人在写类似dogs那种小程序吗

wikig: Android端就是多开的。并行 (reply to 39911)

— 2024-07-13 —

David: 问一下有人试过这个FunC课程的代码吗？ https://github.com/romanovichim/TonFunClessons_Eng 其中Lesson 5，6的合约部署不成功，部署时显示exitcode：9 ,cell underflow, 有人遇到过这种问题么？

kevin: 大家好， 哪位兄弟知道如何 Lock stonfi/dedust 的 LP， 比如说 Lock 一段时间

kpo: 哪个大哥能解释一下为什么这里的完成时间是7秒，有时候是0秒，但是我这边发起同样的操作要40多秒？

ball@Solace.ai: 这是什么原因

ETON: 各位大佬号，有没有TON安全开发原则或审计手册之类的文档

xihucuyu🦴: 大佬们，为啥我在测试网上发的一笔USDT的交易一直在pending啊

xihucuyu🦴: https://testnet.tonviewer.com/transaction/3fc9dade935e36c50c6fd0145f5ad9433af68b7baf3b808316f9f5fefb4e85db

jove: 有没有中文的开发教程啊

jove: 或者有没有大佬做项目让我去打打下手啊

Poseidon海王: 这种不会轻易招陌生人的 (reply to 40060)

— 2024-07-14 —

mu: https://docs.ton.org/mandarin/develop/dapps/defi/tokens  我在看的 (reply to 40059)

lin: 请问 哪个接口能够判断一笔交易是否已经处于完成的状态

Chaincode: 请问有没有人知道这里展开的菜单怎么修改呢？

Chaincode: 是 PopupParams吗？

ZimHook: 可以问一下怎么监听合约调用是否完成吗

ZimHook: 钱包没返回tx

Louis: I am a developer of TON Chain and have already minted Jetton, but I cannot create a swap using the SDK in the documentation

Louis: 我已经铸造jetton了，想给代币在ston平台添加交易，但是用他们给的sdk，用ts脚本运行之后没有报错，但ston上我的币没办法交换

尼奥: 为什么在ios端打开tma 获取的env(safe-area-inset-top)的值是0，避免底部导航被底部小黑条遮挡

尼奥: 大佬们 问一下 频道中这个置顶中带打开tma的按钮是怎么做的，我看到是发了一条消息，下方带有打开小程序的按钮，这个需要借助第三方吗 tg内部可以直接发这样的消息吗

Ashley: Good afternoon everybody

User<6286494483>: 这个得用代码

苞: 求助 哪位大佬知道为什么我的钱包可以接受和发送ton但不能发送和swapjetton

11: blueprint网络配置无法加载的bug啥时候能修修啊

cj: 合约开发用TACT好吗

— 2024-07-15 —

gavin: Tact很好用, Func 更流行 (reply to 40198)

Howard: 代表部署腳本沒寫對, message 裡面的 body 字元數不夠 (reply to 39978)

Howard: TG API: inline Message (reply to 40152)

Howard: Ton Bit 應該出一版 — cc @CoinDada_Nissa  haha (reply to 40006)

Howard: 寫一個合約 lock Jetton Token 就可以了唄 (reply to 39983)

Howard: 可以自己配置自己的付費 API, 否則就多試幾次了吧.... (reply to 40161)

11: 但是目前这个配置根本用不了https://github.com/ton-org/blueprint?tab=readme-ov-file#custom-network (reply to 40236)

11: 命令行里面设置是可以的，blueprint config里面这个设置了根本没有用

Jonathan: 大家有没有人知道如何去监听jetton 的 mint事件啊， burn,和transfer 好办， 直接在toncenter 可以查到， 但是mint 好像还不是很好查呢

gavin: 标准jetton 规范里面没有mint事件 (reply to 40239)

Jonathan: 嗯， 标准里面是没有， 但是我我看mint 其实也是一个转账， 我去查trasnfer 好像也查不到...

Jonathan: 我感觉toncenter 也是根据这些交易分析出来的事件？

Jonathan: 因为我在转账里面其实没有看到jettonwallet 去调用jettonmaster 的transfer_notification

Jonathan: 貌似不对， jetton master 也 没有transfer_notification 这个op

kevin: int op::mint() asm "21 PUSHINT"; (reply to 40246)

Jonathan: 是的，这个我知道， 但是里面去操作jetton wallet 的时候其实是调用了一个jetton_interval_transfer。 我就好奇toncenter里面就查询不到这个这个transfer 了

Logan 🐯: ton有没有什么多签钱包的工具

wikig: http://tonkey.app/ (reply to 40258)

ETON: @dev_rel 有研究过Bounce Msg吗，我看文档只能返回原交易的前256 bits（32 bits bounce flag + 224 bits date）, 如果业务需要的数据超过256位，应该怎么处理 jetton token处理前224bits的开源代码如下 https://github.com/EmelyanenkoK/modern_jetton/blob/13a898ddfdf5c37860e9ddd261f11eadf8963682/contracts/jetton-wallet.func#L200

Yang: Bot API 7.7  • Mini Apps can now disable vertical swipes – preventing users from exiting by accident. • Bots can now detect service messages about refunded payments.  • And more, see the full changelog for details:  https://core.telegram.org/bots/api-changelog#july-7-2024 (forwarded from BotNews)

Yang: 机器人 API 7.7  •小程序现在可以禁用垂直滑动——防止用户意外退出。 •机器人现在可以检测有关退款的服务消息。  •更多详情，请参阅完整的更新日志：  https://core.telegram.org/bots/api-changelog#july-7-2024

gavin: 期待这个API很久了

Zorro: 德政 幹 ANON 小遊戲我一直跳出 還不能加回來 (reply to 40264)

Yang: 有啦！之前就有說在針對這點改善，目前正式實裝了，各位 DEV 上吧

Yang: 請到你適用語言的頻道 (reply to 40268)

Leo: 还得过阵子才能放心用，很多用户的安装版本低到不敢想象🥵

gavin: cell 不能ref cell吗？ (reply to 40261)

harlan: @tact-lang/deployer这个是已经不支持了吗

harlan: 哪位大佬知道

gavin: 为何这样说？ (reply to 40277)

harlan: 部署测试出现服务异常

harlan: {   "backends": ["https://ton-source-prod-1.herokuapp.com","https://ton-source-prod-2.herokuapp.com","https://ton-source-prod-3.herokuapp.com"],   "backendsTestnet": ["https://ton-source-prod-testnet-1.herokuapp.com"],   "funcVersions": ["0.4.4", "0.4.3", "0.4.2", "0.4.1", "0.4.0", "0.3.0", "0.2.0"],   "tactVersions": ["1.4.0", "1.3.1", "1.3.0", "1.2.0", "1.1.5", "1.1.4", "1.1.3", "1.1.2", "1.1.1", "1.1.0", "1.0.0"] }测试地址用的backendsTestnet这个

harlan: 使用的这个https://github.com/tact-lang/tact-template

gavin: 看上去是你的 api节点的问题 (reply to 40281)

gavin: 跟代码没有关系哦

harlan: 直接用的这个https://github.com/tact-lang/tact-template，啥都没有改，上面的节点是在@tact-lang/deployer这个依赖里面找到的

Logan 🐯: 中心化跨链桥好实现么

Logan 🐯: 😂

gavin: 中心化跨链桥。。。, 没人敢用吧 (reply to 40291)

Logan 🐯: 现在ton官方没支持多链代币跨链支持 ，公司让我写个跨链桥，我咋写

gavin: 都中心化了 还叫什么跨链桥啊

Yang: 我怎麼記得有r，你在多找找吧 (reply to 40294)

Logan 🐯: 只有evm的

Logan 🐯: bsc只支持toncoin不支持代币

Yang: 我確定 Sol 也有，只是不知道橋是不是還好的

Yang: 2022 就有團隊實現過了

wikig: 实现是好实现  但是没法保证自己不ruge (reply to 40291)

harlan: 那有可用的api节点吗 (reply to 40286)

Yang: 一億躺在自己橋上，很難不動心是吧 😂 (reply to 40301)

wikig: 好像凉了。之前考察的时候好像是只有official的桥还是活着的。 (reply to 40299)

Logan 🐯: bsc和solona大概啥时候可以支持啊

wikig: 剩下的中心化bridge居多，如什么simplesawp这种

gavin: @tonapibot (reply to 40302)

Yang: 涼是涼了，但是可以實現，我想應該是 Fee 太高吧

Yang: 你老闆不是叫你寫，等你寫完就支持了啊 (reply to 40305)

wikig: 哈哈哈哈哈哈好坏

Yang: 我說的大實話 = =

wikig: 话说doge不是说下半年TON会有新bridge吗

Yang: Yap

wikig: 还支持跨链消息传输协议那种（

Yang: 在努力這一塊

gavin: 自己实现一个跨链桥, 难度还是很大的吧

Yang: 說不定人家實力過硬，我從不小看江湖上的每位豪傑 (reply to 40317)

wikig: 中心化的不大，去中心化的得足够多人玩（ (reply to 40317)

gavin: 还是你的格局高 (reply to 40318)

gavin: 是我狭隘了

wikig: 除了那帮搞ZK的。现在好像主流的方案都是把原本bridge中心化的调控机制和消息传输重新打包成一条新链，然后就成去中心化的了（ (reply to 40319)

Yang: 因為我麻瓜，你們每位都比我強，哈哈

wikig: 像什么layer0或者CCIP好像都是这么玩的（所以得有足够多的人玩才算去中心化（？ (reply to 40322)

Yang: 這部分 Tonnel 在做，他目前已經實現在 Metamask 上面使用 TON 了 (reply to 40322)

Yang: 但是還沒穩定，目前仍 Beta

wikig: 啊？tonnel不是混币的吗，咋把bridge也做了 (reply to 40325)

wikig: 整蛮好，刚好我是做aggrator的，到时候嫁接过去 (reply to 40326)

Yang: https://t.me/tonnel_en/360  他想把 EVM 流動性都搞過來  再次聲明：Beta 中 (reply to 40327)

Yang: 另外一點，這也是賺錢的大頭啊

wikig: 看起来像是做了地址映射类似的方案？metamask的用户签名然后对应keypair在那上面 (reply to 40329)

wikig: 确实，bridge确实赚。  就是，现金流拿着太大了，有点考验人性（

wikig: 除非逻辑设计上就已经是去中心化的了  （不然换我我铁ruge

Yang: Tonnel 要搞的，我認為都是去中心化的 (reply to 40333)

Yang: 他先做在 MM 上實現 TON 鏈傳輸，下一步怎麼做得看他。 (reply to 40331)

11: bridge很多桥都是直接中心化转

wikig: 还是挺期待的。他们的逻辑应该是从现在成熟的evmchain 虹吸liqudity (reply to 40335)

wikig: 这套方案对原有defi用户还是很...吃香的 (reply to 40338)

gavin: 没想到metamask这么开放

wikig: 我倒是觉得不是metamask开放，应该是tonnel做了对端映射然后起了个evm兼容链之类的方案实现（？ (reply to 40341)

gavin: 不是哦 仔细看是metamask开放的api (reply to 40342)

gavin: https://docs.metamask.io/snaps/features/non-evm-networks/

gavin: https://docs.metamask.io/snaps/features/custom-ui/

wikig: 啊？那么帅 (reply to 40343)

wikig: 确实，但是闹麻了  到头还是bip44 (reply to 40345)

Logan 🐯: 中心化的跨链桥就是监听双边日志嘛？

wikig: 最后靠派生映射来规避 (reply to 40347)

wikig: 正常来说是的。 (reply to 40348)

harlan: 这些api里面没有deployer中使用的接口啊？这里面使用的/prepareTactDeployment 这个 (reply to 40307)

gavin: 哥 这个跟deployer没关系啊, 你这个错误是广播BOC的时候 ton api node api 挂了 返回503 导致没部署成功吧 (reply to 40351)

harlan: 就是不知道怎么解决

bf: https://testnet.toncenter.com/api/v3/jetton/wallets   有人知道这个接口的数据是怎么来的吗

Taro: Tact现在还没有Merkle tree的验证吗？

wikig: 提问，在什么情况下，window.open会在webapp环境下失效？  目前有一个直接场景： 在webapp A 中 window.open("webapp B.telegramwebapp.url")  然后在大部分场景中，它是ok的，并且在pc场景下是没出过问题。  但是目前是在小部分场景如使用安卓设备打开时，会跳不出该webapp.B 。（但是大部分情况是能出来的。）  目前没找到具体是什么原因。  难道说移动端的webapp也有禁止窗口频繁弹出之类的限制？

wikig: 目前排障找到的规律是：  1.在用户唤起（如，绑定该function在button.onclick上）是可以吊起的  2.非用户唤起（如，写在 body.onload 上） 返回值是null (reply to 40369)

wikig: 但是仅限Android/IOS移动端。  目前在PC端还没遇到类似问题。 (reply to 40370)

kevin: 有没有 GOlang 实现的 stonfi add LP 逻辑？ 目前能搞定 swap， 唯独 add LP 还没通过， 想找个例子参考下。

Mao: 连接钱包的怎么切换测试网络？

Asaki: 请问下， jetton token 如何通过其 UQ 地址转换到其 EQ 地址

wikig: 可以考虑使用tonweb.utils.address的tostring() (reply to 40389)

He: stonfi sdk 有木有大佬用过？  import { TonClient, WalletContractV4, internal, toNano } from "@ton/ton"; import { mnemonicToWalletKey } from '@ton/crypto'; import { DEX, pTON } from "@ston-fi/sdk"; import dotenv from 'dotenv';  dotenv.config();  async function main() {      const keyPair = await mnemonicToWalletKey(process.env.ADMIN0!.split(' '));      const client = new TonClient({       endpoint: "https://toncenter.com/api/v2/jsonRPC",       apiKey: ''     });     const workchain = 0;     const wallet = WalletContractV4.create({       workchain,       publicKey: keyPair.publicKey,     });      const dex = client.open(new DEX.v1.Router());      const contract = client.open(wallet);      const txArgs = {       offerAmount: toNano("1").toString(),       askJettonAddress: "EQA2kCVNwVsil2EM2mB0SkXytxCqQjS4mttjDpnXmwG9T6bO",       minAskAmount: toNano("0.1").toString(),       proxyTon: new pTON.v1(),       userWalletAddress: wallet.address.toString(),     };      const txParams = await dex.getSwapTonToJettonTxParams(txArgs);      await contract.sendTransfer({       seqno: await contract.getSeqno(),       secretKey: keyPair.secretKey,       messages: [internal(txParams)],     }) }  main().catch(console.error); 按照他们的教程 一直报  TypeError: provider.open is not a function  这个错误

Sun: 大佬帮你们有遇到过这个问题吗？https://docs.telegram-mini-apps.com/platform/init-data 按照此说文一毛一样都对不上

Sun: hash 死活对不上

SMI: tonConnectUI.sendTransaction(transaction).then((result) => {       const boc = result.boc       const hash = Cell.fromBoc(Buffer.from(boc, 'base64'))[0].hash().toString('hex')       console.log('result', result)       console.log(hash)     }) 我使用 tonConnect 發送交易。但是，從 boc 輸出檢索到的雜湊值與實際的 tx 雜湊值不符。如何從此輸出檢索 tx 雜湊值？

Jerry: 有没有朋友知道。怎么在tg 上开一个测试app 让我可以直接打开本地的链接

Sun: app 需要https 的url

wikig: 你用这个文档里的demo code来解码一下就有了 (reply to 40397)

Sun: 是的，就是原封不动的。最后hash对不上 (reply to 40431)

Sun: 不知道错什么地方了。

Sun: 圈起来的地方对上了，最后一步对不上

Sun: 有大佬，验证出来了，一定要call我一下，拜谢

wikig: function tgVerfiy(apiToken, telegramInitData) {    const initData = new URLSearchParams(telegramInitData);     initData.sort();     const hash = initData.get("hash");     initData.delete("hash");     const dataToCheck = [...initData.entries()].map(([key, value]) => key + "=" + value).join("\n");     const secretKey = crypto.createHmac("sha256", "WebAppData").update(apiToken).digest();     const _hash = crypto.createHmac("sha256", secretKey).update(dataToCheck).digest("hex");     return hash === _hash;} (reply to 40436)

wikig: 我这边在跑的服务是这么玩的 (reply to 40436)

— 2024-07-16 —

Lynn: Hey, would love to do some cross marketing, we have 300k users. If you are interested in it, please send me a dm. 🤝 有兴趣做cross marketing的开发者可以dm哦。 🤝

kevin: 大家知道如何通过程序创建一个 pTon 的 wallet 么？

Howard: 殘念，現在 Bounced 訊息回傳就是這麼少。所以其實沒法可用。  https://docs.tact-lang.org/book/bounced#caveats (reply to 40261)

Sun: 非常感谢你的源码，我找出了问题啦。 (reply to 40446)

Sun: 新手，请问tact 有像bsc转u 的标准合约吗？

Mao: 这个代码块怎么发的？ (reply to 40445)

wikig: mark down格式。  用\` (reply to 40508)

Mao: test  const a = 1;

Mao: 可以

eqasw: \` $a = 1;

eqasw: print(“Hello, world!”)

eqasw: 会玩了😆

cj: \ $a = 1\

Tee: 大家写ton合约，一般使用func还是tact变成语言呢？官方推荐的是那种？

David: 问一下各位大佬，Ston.Fi的Func代码已经是很久之前的了，他们实际部署的合约已经不一样了吧？https://github.com/ston-fi/dex-core

David: 有人知道Ston.fi合约的实际地址么？ 尤其是Farm的

Jerry: 想问下大家有用test server 吗？我现在注册测试环境收不到验证码

Jerry: https://core.telegram.org/bots/webapps#testing-mini-apps

deng: 这下面的东西是咋设置的

deng: 在这里找半天

deng: 有人知道咋设置么

kevin: ston.fi合约 EQB3ncyBUTjZUA5EnFKR5_EnOMI9V1tTEAAPaiU71gc4TiUt  ， farm 是 NFT 协议， code不公开。 (reply to 40524)

gavin: 需要代码设置 (reply to 40543)

deng: 代码？ (reply to 40548)

deng: 这不是机器人的显示么

gavin: 就是调用api 设置 (reply to 40550)

gavin: 这块比较特殊 bot father 好像没法设置

deng: KeyboardButton

deng: 这个？

deng: 我去找找api

gavin: 好像不是 (reply to 40555)

deng: 看看可不可以直接postman 调用

gavin: 可以postman (reply to 40560)

deng: 不是这个？ (reply to 40559)

deng: setChatMenuButton 这个也好像不对

11: blueprint里面有mock时间戳的办法吗

User<5183898074>: telegram小程序能直接调用 ton链上智能合约吗

wikig: 用tonconnectUI理论上可以的 (reply to 40575)

User<5183898074>: 有样例产品么，想写一个练练手 (reply to 40576)

wikig: 蛮多的应该，比如什么stonfi的webapp (reply to 40577)

芭比Q: tonweb 调用合约func是wallet.methods.transfer(params).send() 吗？ 我怎么用这个是直接发成ton了

芭比Q: 有人清楚吗？构建的cell信息给我当成文本放comment里了、 (reply to 40582)

Ikhtisham: UQBNIK-uK4_rWIinUyhDM5O5upfxo0BUQX_TR-h1AQaJIsgW

Howard: Only on NFTs I guess? (FunC)  - https://github.com/krigga/TEPs/blob/compressed-nfts/text/0000-compressed-nft-standard.md#1-itemsindex - https://github.com/ton-society/sbt-platform?tab=readme-ov-file#ton-society-use-compressed-sbts-csbt (reply to 24096)

Howard: 對，目前沒有。 (reply to 40366)

Qi: 各种大佬，有什么方法能把USD 转化为TON吗 可直接用的

west: 找个靠谱的开发者哦

kevin: swap ？ (reply to 40604)

Qi: ？ 汇率一直在变？有什么公共API可用的吗？

kevin: https://tonapi.io/v2/rates?tokens=ton&currencies=ton,usd,rub (reply to 40607)

Qi: 厉害了，正是我要的 (reply to 40608)

kevin: 这个有 limit， 如果想要没有 limit 的也有办法 (reply to 40610)

Pangolin: 代币名称不显示要什么设置才可以的

kevin: 这应该是 symbol 没有设置好， 显示了 unkown，下午我发的一个币也有同样现象。

Pangolin: @victoleon1979 你后面是什么配置好的

Gleb: Searching for Front End Team Lead. Equity project

Zachary: [TON_CONNECT_SDK_ERROR] U: Wallet connection called but wallet already connected.

Zachary: 有大佬遇到这个问题吗 (reply to 40629)

Zachary: "[TON_CONNECT_SDK_ERROR] U: Wallet connection called but wallet already connected. To avoid the error, disconnect the wallet before doing a new connection."

lin: 请问这种cell 如何解析成上边的那种格式

Gleb: Searching for Front End Team Lead. Equity project

— 2024-07-17 —

qknow: 问下这个是怎么转的

qknow: 不知道为什么对不上

gavin: 对不上是正常的… (reply to 40664)

gavin: 你可以理解成自定义了op code

qknow: 我看文档里面说了转crc32

qknow: https://docs.ton.org/develop/data-formats/crc32

11: 但是你传错了 (reply to 40661)

qknow: https://emn178.github.io/online-tools/crc32.html

qknow: 你试下

qknow: 应该传什么

11: 要传整个TL-B进去

11: https://github.com/ton-blockchain/TEPs/blob/master/text/0062-nft-standard.md#tl-b-schema

11: 类似这样

qknow: 明白了

11: crc32('transfer query_id:uint64 new_owner:MsgAddress response_destination:MsgAddress custom_payload:Maybe ^Cell forward_amount:VarUInteger 16 forward_payload:Either Cell ^Cell = InternalMsgBody') = 0x5fcc3d14 & 0x7fffffff = 0x5fcc3d14

qknow: 谢谢

qknow: blueprint func 可以生成tlb 文档吗，

11: 貌似不行

qknow: 嗯  我也没看到

qknow: 我看tact 可以生成

11: 你着急的话就自己随便搞一个code，没必要非得严格按照这个来。

11: 这个只是建议

qknow: 不着急，只是为了验证这个code

Logan 🐯: 这个钱包怎么切测试网？

Howard: 使用第三方數據? CMC or Coingecko? (reply to 40604)

Howard: .@wallet 沒有測試網 💀 (reply to 40688)

kevin: package main  import (   "encoding/binary"   "encoding/hex"   "fmt"   "hash/crc32"   "strings" )  func crcCoversion(schema string) {   schema = strings.ReplaceAll(schema, "(", "")   schema = strings.ReplaceAll(schema, ")", "")   data := []byte(schema)   var crc = crc32.Checksum(data, crc32.MakeTable(crc32.IEEE))    var b_data = make([]byte, 4)   binary.BigEndian.PutUint32(b_data, crc)   var res = hex.EncodeToString(b_data)   fmt.Println(schema, " ", res) }  func main() {   crcCoversion("provide_lp")   crcCoversion("pay_to")   crcCoversion("add_liquidity")   crcCoversion("cb_add_liquidity")   crcCoversion("pay_to")   crcCoversion("pay_to")   crcCoversion("pay_to")   crcCoversion("transfer_bounce_invalid_request")  } (reply to 40663)

kevin: 正好有个工具， 希望对你有帮助

qknow: 好的 谢谢

qknow: 但如果只对string crc32 和 官方的结果有点不一样，正常要对整个tlb 进行crc32 ，但不影响使用

qknow: 那有没有工具生成func 的 tlb文档 ，

gavin: 我觉得你不需要执着这个op code, 实际上写合约的时候都是自定义一个code, 如果是写jetton合约都是按照jetton规范的那个code来自定义 (reply to 40695)

qknow: 嗯  是的  我只是为了验证官方的文档

11: don't trust verify是吧 (reply to 40699)

harlan: tact有没有质押ton和jetton的demo

tsunamier: wallet flutter sse 开发哪位大佬有相关教程

tsunamier: http bridge

noah: 想问一下 ton 上有签名交易么？ 比如签名机签好名发给应用去发送交易

Sun: 弱弱的问一下。你们是怎么处理入金的，怎么区分是什么代币 to和from 的,你们用什么sdk？

Tony: TON 的tg 钱包有测试版吗

Tony: TON 的tg 钱包能使用测试网吗

harlan: 这里面怎么调用合约的gei方法 (reply to 38829)

Mr.A: caroplay这个项目有人听过吗?我再另一个社区里看到有人疯狂推这个,但是谷歌没搜到,感觉像骗子

wikig: 里面没调get (reply to 40731)

harlan: 就是怎么加get调用

wikig: （额，我也没有写过类似demo（摊手

c: 有没有大佬 有telegram mini app ton支付的demo 前端的

wikig: 上面那个其实.....其实就是  https://test.tonspay.top/test.html (reply to 40737)

c: 好的 多谢

c: 这个支付成功的回调 是怎么处理的 我看没有配置 是和 后端交互的 机器人能监听到嘛？ (reply to 40739)

Wake: https://t.me/NotonOffice_bot/game?startapp=238d2d31d3d3b6801695cbda1e8ea2f28ee9520a6a9c115beb6bf7  推荐赚NOT的minigame，赚NOT，还挺快的

wikig: 最好是做链上监听，然后以链上数据为准。可以参照  http://docs.tonspay.top/  https://github.com/Tonspay/Tonspay-monitor (reply to 40743)

c: 1

Jackie: 有哪位大佬见过这个错误？望指教，部署合约时报错

Jackie: fetch报错，但https://ton.access.orbs.network/mngr/nodes?npm_version=2.3.3是可以正常访问的

mu: 网络不稳定吧 (reply to 40748)

mu: 多试试

Jackie: 试了几百次了 (reply to 40752)

Jackie: 直接克隆例子工程也不行

mu: 我前几天也遇到这个，开代理多试几次可以了

Jackie: 代理是已经开了的，你看上面，我直接curl 这个链接都可以访问的到的 (reply to 40756)

mu: npm配置国内源了么，curl可能走了代理，但是npm没有走 (reply to 40758)

Jackie: 貌似没有。。我看看 (reply to 40760)

Jackie: 国内，国外源全试了下，还是一样的报错，我怀疑根本就不是这个FETCH有问题 (reply to 40760)

condi: npm也配置proxy

Jackie: 你node版本是多少？ (reply to 40760)

condi: 有时候 什么淘宝镜像 不好用

condi: 还是得配置代理

Jackie: 我试试 (reply to 40767)

Jackie: 然而并没有什么用。。我感觉这个不太像是网络问题，到像是orbs-network这个库有问题 (reply to 40767)

Jackie: 例子工程都跑不动，这还怎么搞？😂

mu: 其实还是网络的问题，你可以改下源码 (reply to 40771)

mu: 54行，fetch（），给它配置个代理

Jackie: 你意思改下blueprint的框架代码？ (reply to 40776)

Jackie: 我试试 (reply to 40777)

Jackie: 翻了下这个API，没地方设置PROXY，https://developer.mozilla.org/docs/Web/API/fetch (reply to 40779)

mu: import fetch from 'node-fetch'; import HttpsProxyAgent from 'https-proxy-agent';  const agent = new HttpsProxyAgent('http://127.0.0.1:7890');      const response = await fetch(`https://.json`, { agent });

Lev1: 怎么获取和解析Jetton的元数据啊？？？

Freeman: +1

Tequila: 有用rust语言开发的吗

MEW: 大家都在做啥捏

MEW: 有例子没 (reply to 40789)

kevin: API 最省事 (reply to 40792)

Lev1: 给个链接？ (reply to 40802)

MEW: v50 ton (reply to 40803)

11: 收费风气要不得

11: https://docs.tonconsole.com/tonapi/api-v2  这里的/v2/jettons/{accoundid} 方法 (reply to 40803)

kevin: https://tonapi.io/v2/jettons/EQAvlWFDxGF2lXm67y4yzC17wYKD9A0guwPkMs1gOsM__NOT (reply to 40804)

Lev1: 爱你 (reply to 40807)

noah: @dev_rel 你好 请问我有交易hash的情况下 如何确定交易的状态呢？

gavin: 判断每一个tx的exit code (reply to 40814)

eqasw: tg小程序是不是崩了

wikig: tonapi 或者 toncenter有相应的jetton信息获取的api的吧 (reply to 40792)

Lev1: 是的，已经找到对应的api了 (reply to 40819)

wikig: 获得hash后，前端后端都可以判断 (reply to 40818)

Tequila: code: 500, message: LITE_SERVER_UNKNOWN: cannot apply external message to current state : External message was not accepted 谁遇到这个呢 一直你卡在这

Potter: @dev_rel 您好， 问一下，ton 现在有 多签钱包么？

wikig: https://tonkey.app/ (reply to 40827)

kevin: 看下是不是地址搞错了 (reply to 40824)

kevin: 地址是不是 notexist (reply to 40824)

Potter: 👍 (reply to 40828)

GOD: tg钱包没有通过验证，里面的ton怎么转移出来？？

GOD: 一直显示这个

Sun: 需要分析 主交易和子交易的状态 (reply to 40814)

Qi: 继承TONConnect ，connect  wallet时候显示dapp manifest not found，无法进行connect操作

Qi: 这是为啥呢，哪位大神踩过坑，配置的tonconnect-manifest.json就在xxx.com/tonconnect-manifest.json 下，可以访问到。

c: 我的 ton 钱包支付成功得到了一个 doc 有啥用啊

User<6464643890>: 这个是空投到钱包的 (reply to 40852)

c: 支付成功只返回一个这个嘛 没有其他的信息嘛 (reply to 40855)

User<6464643890>: 你去主页看就行了

c: 不是很懂 可以麻烦在 请教下嘛 我得不到其他的信息

Freeman: 请教下，现在dedust添加了LP后，怎么锁池子呀

Tequila: 这个sum_type是自己设置的吗

Freeman: jetton的 metadata怎么把twitter放上去呀

Stephan: 嗨，伙计们，请帮助我，我根据这个标准创建了jetton https://tact-by-example.org/07-jetton-standard 之后，我不得不通过合同发送我创建的令牌，我向合同发送了1000个令牌。 然后我用我的Jetton的代码导入了文件  import "./sample_jetton";   并应用了TransferToken消息  receive("Finish") {         require(self.playersCount == MaxPlayers, "Maximum");         require(sender() == self.owner, "Only owner is allowed to finish game");         require(self.state.status == StatusStarted, "Only started game is allowed to finish");          nativeRandomizeLt();           let wonAmount: Int = (self.ticketsCount * ton("1") - self.meta.comissionAmount);          let winnerTicket: Int = random(1, self.ticketsCount + 1);          let winner: Address = self.state.tickets.get(winnerTicket)!!;          self.state.winnerTicket = winnerTicket;         self.state.status = StatusFinished;                   send(SendParameters{                 to: winner,                  value: 0,                 mode: SendIgnoreErrors,                  bounce: false,                 body: TokenTransfer{                     queryId: 0,                     amount: 100,                     destination: winner,                     response_destination: self.owner,                     custom_payload: emptyCell(),                     forward_ton_amount: 0,                     forward_payload: emptySlice()                 }.toCell(),             });       }  我想从合同中发送一百个代币到彩票中奖者的钱包地址  然后我运行了彩票完成代码。 彩票中奖者被选中，但没有给他发送代币。   const sendParams = {         value: toNano('0.1'),          bounce: false      };       await lotteryJtl.send(         owner, {              value: sendParams.value,          },           'Finish'     );  我该如何解决这个问题，请帮助我  如果我写错了，我很抱歉，我是从翻译那里写的

hi_scott: 请教一下呀，哪位大佬在电报投放过广告呢

— 2024-07-18 —

Lalita S.: 真是恥辱，對富有成效的溝通如此暗中攻擊 😡 (reply to 40927)

Logan 🐯: ton拿钱包余额的前端sdk哪里有

gavin: 有钱包地址 直接请求链上rpc就行了, 要什么sdk呢

Sun: 有文档地址吗？ (reply to 40957)

Sun: 球球

Logan 🐯: 我懒

Logan 🐯: connectui里面竟然没有

killer47: 我教你 (reply to 40959)

Sun: qiuqiu (reply to 40963)

Yang: Zh_fiftbase_dark_繁中註解導讀版_v1.pdf  https://tonresear.ch/t/29104  Powered by @tonresear_ch (forwarded from TON Research)

7A 😁XXXX: https://x.com/tokenpocket_tp/status/1813754833280864690?s=46

noah: 请问服务端如何操作 有没有样例 我通过 https://testnet.toncenter.com/api/v3/transactions?hash=06a3a903c12385c0a16ac3fd1d4baac86c1ae7aefd9d878086a06ab8e0d9658a&limit=128&offset=0&sort=desc  这是失败的 https://testnet.toncenter.com/api/v3/transactions?hash=c492e34a99d8da2a071ca2376198a5a0e68674b2def0ecb88ca4e0a3f1d6c7a9&limit=128&offset=0&sort=desc  这是成功的 在区块链浏览器里是能区别的 但如果是exit_code 他们都是0 无从判断 (reply to 40815)

gavin: https://testnet.tonviewer.com/transaction/3c9704daf20b497e96a308f1013ff980c7e3ba6a81baa917241f3d5ffcfd4721 (reply to 40968)

gavin: 不是0

noah: 请问这个调用什么接口可以拿到呢

noah: https://testnet.tonviewer.com/transaction/06a3a903c12385c0a16ac3fd1d4baac86c1ae7aefd9d878086a06ab8e0d9658a  这个失败的ExitCode 是 0

noah: 我看到了 这个是非0

Sun: test 链的吗？https://testnet.tonapi.io/v2/traces/{hash}

killer47: 叫爸爸 (reply to 40965)

Sun: 分析主交易和子交易

Sun: 你的子交易是false，这笔交易失败

Sun: 你小子 (reply to 40977)

noah: 好的 感谢 @chrisiali @huqingfei123 (reply to 40979)

gavin: 不客气 (reply to 40983)

Sun: 话说你们入金怎么验资？

Sun: 交易信息有有什么字段可以区分代币吗？

Evgeniy: 有人知道圖示為何不同嗎？

killer47: 通过代币合约区分啊 (reply to 40986)

killer47: 监听区块查看转账代币的信息

gavin: jetton wallet 找到jetton master

gavin: 很容易啊

killer47: 对

Sun: https://testnet.tonviewer.com/transaction/67b2f5fba1315063c82b81b38fbb0ccef532c5a3525614aab423bc1929f61c20

Sun: 代币合约是那个字段？ (reply to 40990)

killer47: 这个

Sun: 这个我知道，在区块链浏览器可以看出来，调用api，我找不出来。😅

Qi: 连接钱包，connectWallet()，点击完Open wallet in telegram 就一直这样。。。

Qi: 这啥玩意了

Logan 🐯: 为啥本地调用https://sandbox-v4.tonhubapi.com老是超时，直接访问浏览器就不会

Logan 🐯: 代理没办法代理axios卧槽

发: 这个是调整可视高度实现的吗

hi_scott: 有没有telegram小程序的开发群，求拉

wikig: 根据hash查 状态 (reply to 41013)

gavin: 我发现每天都有人问这个问题

wikig: 因为来来回回大部分都是那几个问题（地址EQUQ、hash怎么查、callback怎么用 (reply to 41029)

gavin: 应该把这些问题加入新手指引

User<6106615034>: 我就不一样，我想问如何让别人自愿给我转TON😉

wikig: 还真是（ (reply to 41032)

wikig: 好办的啊，写个scam walle（然后就会有人转你了 (reply to 41033)

gavin: v我50 (reply to 41033)

Howard: 沒那麼容易換算, 可參考過去影片~~ (reply to 40663)

gavin: boss人家昨天提的问题, 你现在才回🤣🤣 (reply to 41037)

Howard: 有理有理 (reply to 41030)

Howard: 不行啊 太多訊息了, 還有重點客戶 🥹 (reply to 41038)

Howard: 得共筆一下, 這些問題寫成標準解答

gavin: 咱们应该也去youtube上搞点开发影片,或者写点教程,然后让官方给推推赚点广告费😁 (reply to 41034)

gavin: 钱包地址去浏览器能看到最近的交易 (reply to 41044)

gavin: 如果没有错的话,应该是这个tx

wikig: 最近这两月，docs肉眼可见的变多，蛮好的 (reply to 41042)

aman: 有大佬知道jetton transfer的comment怎么获取？

gavin: 解析cell 能拿到所有 (reply to 41055)

gavin: 哥你这个问题问的，看你怎么理解成功  是收到钱了就算成功, 还是说要求合约正确执行没有任何错误 (reply to 41052)

gavin: 你发的这个是成功的

wikig: 你也可以监听接收方地址。  然后筛选新交易 (reply to 41062)

Crypto 🔑🐦‍⬛️: Ton上开发好做吗？感觉现在ton生态很中心化

wikig: 这话说得没错，毕竟跟telegram关联性满强的。 (reply to 41070)

wikig: 但是也正是这样，所以方便打造很多具有高用户粘性的产品

Pangolin: 问一下，要是usdt是func合约开发部署的，我自己的代币A是tact开发的，这样能不能通过我自己的合约来发送usdt代币的？

gavin: 可以的 只要满足jetton 的op规范就行 (reply to 41073)

Logan 🐯: 这个跨链桥好像支持ton夸大部分链

Logan 🐯: rocketx

Crypto 🔑🐦‍⬛️: 关联性强不代表项目能有用户买单，这么大用户量应该项目遍地开花，但是目前看来都是tg自己的或有关系的项目。跟他们没有关联的做起来的没看到 (reply to 41071)

Pangolin: 有这方面的示例代码吗？ (reply to 41074)

wikig: 这里讲关联性强，主要是佐证上述说的中心化偏强的部分。  倒还没谈用户买不买账问题（ (reply to 41078)

Crypto 🔑🐦‍⬛️: 那关于用户增长这块，请问有没有什么建议可以给 (reply to 41081)

wikig: 还真就，不太清楚。  因为在我看到的大部分project其实跟在不在ton上，或者在不在telegram上关系不大，没有彻底的利用telegram作为社交工具的裂变属性及IM及时通讯的特性。 大部分我看来还是gamefi那套聚敛用户、发币、上所的公式化流程。 (reply to 41082)

harlan: 哪儿可以看错误代码的文档

kevin: https://docs.ton.org/learn/tvm-instructions/tvm-exit-codes (reply to 41084)

harlan: 130是啥

11: 搞点grant可以大家一起写新手Q&A啊

wikig: https://github.com/Tonspay/Tonspay-monitor/blob/master/monitor/ton.js (reply to 41089)

Pangolin: 群里有大佬囤大量的ton代币了没有

cj: jetton 是如何与swap 交互的？

Logan 🐯: 有没有人出现过日志扫不到的情况

Crypto 🔑🐦‍⬛️: 怎么搞 (reply to 41090)

kevin: 两家 dex 机制不一样， 比较复杂， 一句半句讲不清。 (reply to 41093)

kevin: 130 应该是contract 自定义了。 (reply to 41086)

cj: 我看了ston.fi的文档，看了一些流程。我大概猜是 直接调用jetton的transfer方法，然后在transfer方法上，加一些消息之类的东西，能够使得jetton 与swap 通信 (reply to 41096)

Logan 🐯: 蛮奇怪的，通过助记词调用合约日志就扫不到，正常通过钱包调用就可以扫的到；但是区块链浏览器是可以看的到的

kevin: 基本上是的，你的 jetton wallet 和 stonfiRouter 的 wallet 交流。  但 pTon 又略有不同。 (reply to 41099)

kevin: 通过 seed 算出的 address 正确么？  这里我踩过坑。 (reply to 41101)

Logan 🐯: 通过 seed 算出的 address 正确啥意思

kevin: 方便show 下代码？

kevin: Wallet Version 是哪一个？  地址发出来看看 (reply to 41107)

Logan 🐯: 合約地址還是錢包地址

cj: 好的 有人认同 那我就朝着这个方向 继续去看 (reply to 41102)

kevin: 钱包 (reply to 41110)

Logan 🐯: EQCLfjqyTPQDdJt7Jq977GNlBK_P3D6glhcUyIegoLZx-OWZ

Logan 🐯: 我这个也没写死钱包地址，传助记词

kevin: 地址不存在啊  testnet？ (reply to 41114)

Logan 🐯: 对

Logan 🐯: 合约地址：EQCZBjHIQsKYDo4xob7C3IbHL8X4hUz1Q4A7BgzXNNt_yPIP

Logan 🐯: 好像是一直扫不到，

Logan 🐯: api不查询条件都查不到

Logan 🐯: 没放条件都查不到 奇怪了

Logan 🐯: 之前的数据可以查到，新的查不到

wikig: https://tonviewer.com/EQCZBjHIQsKYDo4xob7C3IbHL8X4hUz1Q4A7BgzXNNt_yPIP  这个好像空的 (reply to 41119)

Logan 🐯: 测试网

wikig: 哦哦

Logan 🐯: https://testnet.tonviewer.com/EQCZBjHIQsKYDo4xob7C3IbHL8X4hUz1Q4A7BgzXNNt_yPIP

Logan 🐯: 😂啥情况 日志扫不到

jay: 请问下， ton 钱包转 jetton ， seqno 一样的交易会被覆盖么？

jocker: 有没有大佬会搞正向代理的啊，求指点🙏

Logan 🐯: 测试网是不是出bug了

pony: https://github.com/stevenroose/dart-eventsource/tree/master (reply to 40713)

Matt: ton的合约和evm完全不一样啊，好难啊

Logan 🐯: 测试网是不是出bug了

gavin: 为啥会有这个需求 (reply to 41134)

gavin: 不是ton难 是 evm太简单了 (reply to 41138)

wikig: 啊？不是应该是反代？正代是啥（？ (reply to 41134)

gavin: 你要学习下solana 也会发现solana 好难啊

wikig: 真是，确实难 (reply to 41145)

炒币养家: 有人搞过tact合约开发吗

炒币养家: 怎么在自己写的tact合约里面接收USDT之类的代币

mu: npx ts-node ./src/chapter2/External_and_Internal_transactions.ts  data: { ok: false, result: 'Network not allowed', code: 403 }  官方教程里面，发送内部消息（通过toncenter），提示这个是什么原因，你们知道么？

pony: 我这 crc32 为什么不对呢大佬 文档: crc32('plaintext text:Text = PayloadCell') = 0x754bf91b 我的代码:     var res = crc32c(Buffer.from("plaintext text:Text = PayloadCell"))   console.log(res.toString('hex'))   我的结果: fc427aca (reply to 40677)

cj: 学了solana，会发现，ton简单了 (reply to 41145)

Crypto 🔑🐦‍⬛️: 是的，乱七八糟的，一点不清晰 (reply to 41140)

User<6301135112>: 🫨 solana不是比这个TON简单么

User<6301135112>: TON的文档底层的太少了，不好造轮子

eqasw: ton就是个半成品

eqasw: 急不可耐的发布来圈钱

wikig: 话说有折腾过 TON Teleport的嘛

wikig: 毕竟历史包袱比较重（ (reply to 41158)

Nick: 我在测试环境发了一个Jetton的token，验证流程也走过了，但钱包里显示的token，还是“未验证的令牌”，是缺少哪一步操作吗？

MEW: 请停止内卷 (reply to 41030)

J: 如果是主网那还需要去ton的github仓库提交一下token信息，不然都是未认证或者说是fake😂 (reply to 41172)

Kojh: 但是提交了，貌似也很久都没通过？有什么方法能加快通过吗？ (reply to 41187)

Crypto 🔑🐦‍⬛️: 方向就不对，根本不是从一个完全开放去中心化的理念来建设的，用户理解成本特别高，就想这能控制生态能捞钱 (reply to 41162)

J: 没有办法，只能等，要不就去找ton官方的人套套近乎试试🤣 (reply to 41188)

MEW: 强者从不抱怨环境

MEW: tonkeeper又不是官方，只不过现在数据方面被tonkeeper垄断了

Crypto 🔑🐦‍⬛️: 作为一个多年区块链开发者看不到ton生态存在一点去中心化精神

Y: 我看 python的sdk "tonsdk" 好像不支持W5钱包,  谁知道哪个SDK支持W5钱包?

Freeman: ton有没有什么节点商啊

Y: 没有靠谱的节点 我现在直接用 tonkeeper内置的节点, (reply to 41202)

Freeman: 节点随时会崩掉

Freeman: 想找个稳定的

Y: keeper点tonapi点io

Y: 用这个,, 我用着挺稳定,

Freeman: 好的，谢谢我试试

Freeman: 应该是API，不是RPC节点

w: 有知道这个怎么解析嘛

w: 解析出来的body和这里复制的对不上

w: 一部分是相同的

Asaki: 想请教一下怎么获取 jetton 的 decimals ？

&: 检查 tonapi.io (reply to 41227)

Howard: 廣告！ (reply to 41240)

Howard: 這是哪的文檔？ (reply to 41215)

— 2024-07-19 —

Logan 🐯: 现在又可以扫到了

Logan 🐯: 太慢了吧 这个测试网的链日志

Logan 🐯: 为什么昨天出的日志很久才能扫到

Logan 🐯: 啥情况捏

Z: 早上好，沙雕们

Howard: 應該是 RPC Endpoint 不穩定~ (reply to 41296)

one: 冲了Telegram stars 在Telegram 哪里可以看到啊

one: 有没有知道的

Howard: 目前應該只有付費時、喚醒的彈窗有展示。這個我也得去研究下。  應該未來可以有地方看餘額才是。 (reply to 41308)

Yang: 在設定裏面是看的到的 (reply to 41308)

one: 我的飞机好像没有这个，是不是版本问题啊

one: 苹果美区，telegram 被下架了吗

gavin: 想问下 bot 收到的星星在那里能看到？ (reply to 41316)

one: 星星目前的用途有哪些哈哈

Yang: 抓到！不看 Doc 的吼～  To view the Star balance of your bot, open its Profile > tap 'Edit' > Balance. For channels, go to Profile > Statistics > Monetization.  若要查看機器人的 "星級 "餘額，請開啟其 "設定檔" > 點選 "編輯" > "餘額"。對於頻道，請前往 "設定檔" > "統計" > "貨幣化"。  資訊來源：https://telegram.org/blog/mini-app-bar-paid-media-and-more (reply to 41323)

gavin: 看到啦！谢谢 (reply to 41327)

gavin: 能换回ton (reply to 41325)

one: 哪里换

gavin: 抓到！不看 Doc 的吼～  To view the Star balance of your bot, open its Profile > tap 'Edit' > Balance. For channels, go to Profile > Statistics > Monetization.  資訊來源：https://telegram.org/blog/mini-app-bar-paid-media-and-more (reply to 41331)

Yang: 關於 Telegram 的問題，包含 API 接口，各種功能有沒有支援，歡迎都到： telegram.org  而關於 TON 的問題，可以在 ton.org 尋找。  Telegram 的文檔往往資訊量都非常大，開發時建議大家都可以仔細閱讀。  TON 的文檔有時可能有些地方會找不到答案，這時就大家就可以在這裡詢問其他開發者，有沒有遇上類似的問題。

harlan: 有没有使用tact开发的代币质押demo

harlan: 主要是合约怎么接收ton或者jetton token的质押

harlan: 哪位大佬能解答下吗

gavin: 接收ton质押很简单, 写一个receive 接收ton代币 记录好存款人和金额就行了啊 (reply to 41335)

gavin: 接收 jetton 复杂点 需要创建jetton wallet 账户管理

🐮: func是真滴恶心，完全不想看

harlan: 接收ton时，会去为每个用户创建单独对应的合约，这样ton时怎么走呢，不知道接收到ton后创建用户的合约这个过程gas怎么操作了

harlan: 接收到ton后去创建用户合约这样会把当前用户携带的ton都发送到创建的合约去

gavin: 你也可以预估一下创建这个合约需要多少ton (reply to 41343)

gavin: 这样只发送预估的ton就行了

harlan: 我想把用户质押的ton留在这个master合约

harlan: master合约是主入口

harlan: value给个固定的值？

w: https://docs.tonconsole.com/tonapi/streaming-api (reply to 41244)

User<6156456675>: 问一下大佬们“"address": "0:6648cccacb665ce053b161e5857127aaa98118cfff93af3605e912888c3cf13b",”jetton的这样的地址怎么转换成平常的格式啊

jay: Address.parse(xx).toString()

wikig: https://test.tonspay.top/test.html  可以拉下来看 (reply to 41371)

Jackie: 使用同一个助记词为什么blueprint框架里生成的地址和钱包扩展的地址不一样呢？ (reply to 41372)

wikig: 不是很懂，但是盲猜两种可能：  1.两套框架使用的助记词生成算法不同  2.你生成的地址没有指定wallet 类型/版本。可能A生成的是wallet v3 ，b生成的是walletv3r2或者v4 (reply to 41374)

Jackie: 钱包里的设置是V4R2, BLUEPRInt里的设置是V4 (reply to 41372)

wikig: （我寻思，你为啥不直接导成私钥

wikig: 省的跟他助记词胡搅蛮缠

Jackie: blueprint这里没看到怎么导入私钥 (reply to 41380)

wikig: 啊这，那......  那要不尝试一下把wallet version都转到V3

Jackie: 试了，不一样。。。所以才震惊了 (reply to 41382)

Jackie: 全换成V3R2也是不一样

wikig: 没找着blueprint的框架文档

Jackie: 我直接跳过去看代码的 (reply to 41386)

wikig: 但是我看他似乎可以支持用@ton/ton的keypair类型

Jackie: const key = await mnemonicToWalletKey(mnemonic.split(' '));     const wallet = WalletContractV4.create({ publicKey: key.publicKey, workchain: 0 });      // print wallet address     console.log('testOnly', wallet.address.toString({ testOnly: true }));

wikig: 那照理说，可以直接先在@ton/ton包中生成keypair，或者说wallet的结构体

wikig: 在丢进去（

Jackie: 这段按理应该输出和钱包一样的地址吧

wikig: 如果你说的钱包是testnet的钱包的话 (reply to 41392)

wikig: 我看@ton/ton是可以直接拿privatekey到keypair的（

Manta: 有人了解dedust吗 有偿

Manta: 会使用sdk就行

Pacino: 前端如何查询非原生币钱包余额呢

Pacino: 有大佬知道吗

jay: 只是格式不一样。 (reply to 41374)

jay: 用 tonapi。 (reply to 41400)

s: 大佬在ton链做什么项目的创业呢

jay: https://docs.ton.org/mandarin/develop/dapps/cookbook#%E5%A6%82%E4%BD%95%E5%90%91-dexdedust%E5%8F%91%E9%80%81%E4%BA%A4%E6%8D%A2swap%E4%BF%A1%E6%81%AF (reply to 41398)

Mao: 是不是需要 tg 登录测试账号才能交互？ (reply to 41372)

wikig: 不需要，这是主网的（ (reply to 41418)

Mao: 哦，看错了

Logan 🐯: 这一

Logan 🐯: 这一般是啥问题啊

Louis: 有人知道如何在合约里部署合约吗

Crypto 🔑🐦‍⬛️: 这里有拿到 ton grant 的开发者吗

Nick: 发送消息，带上code和data https://www.tact-lang.cn/book/communication/send.html#%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF (reply to 41463)

&: 请查看 jetton-master 合约代码 (reply to 41463)

Tequila: 节点是真垃圾

Aleksandr: 有谁知道如何创建像这样关闭行为的功能吗？https://docs.telegram-mini-apps.com/platform/closing-behavior

— 2024-07-20 —

Logan 🐯: 解决了 混合使用了2个ton包 导致的 (reply to 41440)

Logan 🐯: toncenter稳定不

Ton: 有没有转usdt 的代码案例啊各位哥

Ton: 这个构建了消息要怎么发送啊

jay: 请问 ton api 有丢数据的案例么？ 我这遇到了 ton api 返回的 events 中，丢了两条数据（是通过 seqno排查到的）

jay: tonweb 代码如下，供参考：  const jettonTransferBody = buildJettonTransferBody(         senderInfo.senderAddress.toString(),         item.finalAddress,         'xxx',         item.amount       );        const transferObj = senderInfo.senderWallet.methods.transfer({         secretKey: senderInfo.senderSecretKey,         toAddress: senderInfo.jettonWalletAddress.toString(),         amount: TonWeb.utils.toNano('0.1'),         seqno: seqno || 1,         payload: jettonTransferBody,         sendMode: 2 + 1,       }); (reply to 41544)

jay: export function buildJettonTransferBody(   sender: string,   receiverWallet: string,   comment: string,   amount: number ) {   const toAddress = new TonWeb.Address(receiverWallet);   // 构造消息内容   const forwardPayload = new TonWeb.boc.Cell();   forwardPayload.bits.writeUint(0, 32); // 0 opcode 意味着我们有一个评论   forwardPayload.bits.writeString(comment);   // 构建cell   const jettonTransferBody = new TonWeb.boc.Cell();   jettonTransferBody.bits.writeUint(0xf8a7ea5, 32); // jetton 转账的 opcode   jettonTransferBody.bits.writeUint(0, 64); // query id   jettonTransferBody.bits.writeCoins(new TonWeb.utils.BN(amount * 10 ** 9)); // jetton 数量，数量 * 10^9   jettonTransferBody.bits.writeAddress(toAddress);   // jettonTransferBody.bits.writeAddress(toAddress);   jettonTransferBody.bits.writeAddress(new TonWeb.Address(sender)); // 响应目的地   jettonTransferBody.bits.writeBit(false); // 无自定义有效载荷   jettonTransferBody.bits.writeCoins(new TonWeb.utils.BN(0)); // 转发金额   jettonTransferBody.bits.writeBit(true); // 我们将 forwardPayload 作为引用存储   jettonTransferBody.refs.push(forwardPayload);   // 返回cell   return jettonTransferBody; }

Louis: 这个可以快速生成吗

Jamil: TON的体验真的太差了

Jamil: Defi一笔，ton就扣了，币一个小时还没有到。

Jamil: 技术不提高，发展不起来。

gavin: tact可以生成 (reply to 41562)

Louis: 我用的func

gavin: 那就手写

Louis: ？

gavin: 自己按照对应的逻辑包装cell就好了

Louis: ok

Nick: Tonkeeper app怎切切换testnet？

Louis: 不发这个，直接发其他消息是不是也可以部署

vision: 请教一下，关于支付这块是怎么打通的？ 就是用户通过购买star 直接在小程序里消费。 这块有相关的文档吗

Louis: 这个值设置高低有影响吗，设成0会怎么样呢？

gavin: 会失败

Louis: 这个铸造成功后发送的消息是干嘛用的

gavin: 你这个没有铸造

gavin: 这里面的逻辑是先帮用户创建一个jetton wallet地址

gavin: 然后在调用一个InternalTransfer 去mint

Louis: master_msg是啥，里面要写什么

Zee: 想请教个问题啊，我们在调起ton支付的时候总会碰到’Unable to verify user transaction‘的问题，想问下你们有碰到这个问题么？找了两天没找到相关解决办法

Zee: 大家有碰到的么？

Louis: amount和jettonamount有什么区别

Lucy: 有人吗

Lucy: 这个上面创建属于自己的代币需要多少ton？

Lucy: 有人发过吗

Lucy: 有人组队嘛😂

Lucy: 想找志同道合的朋友一起在ton上面搞项目

来: 我的也是刚刚接触这个

Louis: 为什么TON会不够啊，我都放了两个了

Louis: 是因为jetton合约部署jetton_wallet出了问题吗

Steven: 两个 ton 放在钱包里还是调用合约里 (reply to 41635)

jay: 设置里面点logo 6次 (reply to 41575)

Howard: 用哪裡的 code? (reply to 41636)

Howard: 一個是 Tx 附帶的 Gas 值, 一個是 Jetton ERC20 代幣轉帳數量  https://www.youtube.com/watch?v=ikYavd9tZpM (reply to 41613)

— 2024-07-21 —

7A 😁XXXX: https://x.com/TokenPocket_TP/status/1814182974239478026  Let's gain more attention from TON's communities! @wetomoon 💙💙 (forwarded from Sam)

User<7110342170>: 部署示例代码遇到这个问题，有人能帮忙解答吗

jay: 检查网络。 (reply to 41696)

jay: 控制台也要代理。

User<7110342170>: 好的，我看下

s: 大佬们在做什么创业项目啊，求带

cj: 我有个问题，ton链不是异步的嘛，如果我swap的时候，我的币转到swap 消息成功了，但是swap返回过来的时候消息失败了，那我的交易 会回滚吗

cj: 不知道我理解的异步 对不对 (reply to 41708)

Ton: 好像就不会有消息吧 (reply to 41708)

Asaki: 如何追踪一个 event 的全链路？

Asaki: 我发现第一个交易会成功，但是后续的不一定，这个得怎么全链路的追踪啊

wikig: trace一下整个交易链 (reply to 41718)

wikig: 然后判断status

Asaki: 通过类似这样的方法吗

wikig: 是的

Asaki: 为什么 ton-http-api 没有提供类似的方法？

Asaki: tonapi 不会是通过 tryLocateTx 自己封装出来的吧。。

Howard: 不會回滾 (reply to 41708)

Howard: 当你广播一条消息时，会获得一个消息哈希。一旦使用该消息的交易执行完毕，你可以使用以下链接找到它：https://toncenter.com/api/v3/#/default/get_transactions_by_message_api_v3_transactionsByMessage_get

User<7472694934>: 小额换ton，有人可以帮忙换一点吗？

pony: 如何用 dapp 发送 usdt 呢？

Alfred: 就是 send jetton 的操作，参考官方 jetton 相关的代码和示例 (reply to 41746)

Alfred: 交易不会直接回滚，具体会如果处理需要看合约上是怎么设计的，如何处理 bounce 的消息。可能采取的操作有以下两种： 1. 不直接处理已发送的 token，但提供方法，由用户选择继续执行，或者提走 token 2. 在 bounce 的消息中，给用户退回相应的 token (reply to 41708)

尼奥: 有什么好用的平台，方便管理电报机器人的指令回复和频道发送各种通知消息啊

cj: 好的，谢谢。那有没有这种相应的tact合约例子。 (reply to 41749)

cj: 比如我要做一个批量转账工具，应该也是要处理这种情况 对吧

Alfred: 没有完全一致的，bounce 的处理可以参考 jetton default wallet 的实现 (reply to 41758)

Alfred: 肯定是需要处理的 (reply to 41759)

— 2024-07-22 —

Logan 🐯: Ton哪里可以一次性买大量测试币？

cj: 好的 谢谢 (reply to 41778)

Ou: 测试网testnet从那里获得stars来做测试呢？

gavin: telegram 切到test环境 (reply to 41793)

gavin: telegram stars 和 ton testnet 是两种东西 并不冲突  你直接拿真实的 telegram stars支付测试也是行的 反正很便宜

Ou: stars在test环境通过什么途径获得？ (reply to 41794)

Ou: 你的意思，测试环境也可以使用主网的stars测试？ (reply to 41795)

gavin: 对 ton和telegram是两个东西 (reply to 41797)

Ou: 嗯，我知道他们是两个东西，就是不清楚测试网下，怎么测试stars (reply to 41798)

Ton: 一笔怎么转多个人TON啊 我发现用循环只能执行一个

Ton: 使用tonkeeper也只能一次性转4个人

gavin: 写一个分发合约就行了 (reply to 41800)

Ton: 有没有案例可以学一下啊

Louis: 有工厂合约参考代码吗

gavin: #include "imports/stdlib.fc"; #include "imports/jetton-utils.fc";   const op::distribute = "op::distribute"c; ;; create an opcode from string using the "c" prefix, this results in 0xf0bf073f opcode in this case int op::transfer() asm "0xf8a7ea5 PUSHINT"; int op::successful_distribute() asm "100 PUSHINT"; int op::transfer_notification() asm "0x7362d09c PUSHINT";  (slice) load_data() inline {     slice ds = get_data().begin_parse();     return (         ds~load_msg_addr() ;; admin_address         ;; ds~load_ref() ;; jetton_wallet_code     ); }  () distribute_tokens (slice in_msg_body, slice sender_address, int msg_value, int fwd_fee) impure {     int query_id = in_msg_body~load_uint(64); ;; also by convention, the next 64 bits contain the "query id", although this is not always the case     slice jetton_wallet_address = in_msg_body~load_msg_addr();     int jetton_amount = in_msg_body~load_coins();     slice address_slice = in_msg_body~load_ref().begin_parse();      slice response_address = in_msg_body~load_msg_addr();     int forward_ton_amount = in_msg_body~load_coins();     cell custom_payload = in_msg_body~load_dict();      ;; 解析to address 列表, 循环发送代币     while (address_slice.slice_empty?() == 0) {         slice to_address = address_slice~load_msg_addr();         send_jettons_payload(to_address, response_address, jetton_wallet_address, forward_ton_amount, jetton_amount, op::successful_distribute(), query_id); ;; 0.01 TON in payload     } }  () recv_internal(int my_balance, int msg_value, cell in_msg_full, slice in_msg_body) impure {         if (in_msg_body.slice_empty?()) { ;; ignore all empty messages         return ();     }      slice cs = in_msg_full.begin_parse();     int flags = cs~load_uint(4);     if (flags & 1) { ;; ignore all bounced messages         return ();     }     slice sender_address = cs~load_msg_addr();     cs~load_msg_addr(); ;; skip dst     cs~load_coins(); ;; skip value     cs~skip_bits(1); ;; skip extracurrency collection     cs~load_coins(); ;; skip ihr_fee     int fwd_fee = muldiv(cs~load_coins(), 3, 2); ;; we use message fwd_fee for estimation of forward_payload costs     int op = in_msg_body~load_uint(32);     (slice admin_address) = load_data(); ;; 加载管理员地址和wallet code         if (op == op::distribute) {         throw_unless(73, equal_slices(sender_address, admin_address));         distribute_tokens(in_msg_body, sender_address, msg_value, fwd_fee);         return ();     }      if (op == op::transfer_notification()) {         ;; 需要校验sender 必须是特定的wallet address         slice payload = in_msg_body;         int either_payload = payload~load_uint(1);         if (either_payload) {             slice payload = payload.preload_ref().begin_parse();         }          int sub_op = payload~load_uint(32);         if (sub_op == op::successful_distribute()) {             ~strdump("successful_distribute");         }         return();     }       throw(0xffff); ;; if the message contains an op that is not known to this contract, we throw } (reply to 41803)

gavin: 发你一个我写的

Ton: 感谢

jay: 这种也是单发？ 直接写ts脚本是不是就行了？ (reply to 41805)

jay: 不好意思，看到是多发。 这个发送速度怎么样？ (reply to 41808)

jay: 我之前是用脚本发的，1分钟三笔。 特别慢。

gavin: 不会很慢啊啊就是一笔交易, 没有实际测过 可以自测下哈 (reply to 41809)

jay: 脚本发，需要等 seqno +1，不然就会失败。

Alfred: 肯定快一点的，毕竟脚本发是走三遍，上面合约的转账可以并行 (reply to 41816)

gavin: 你用的是 wallet 钱包吧  有那种高负载钱包 (reply to 41816)

gavin: 你可以试试

gavin: 几千笔没问题

jay: 高负载每一轮最大 254，确实会快不少。

Ton: 哪个wallet啊 (reply to 41823)

Ton: 我看V5可以支持254个批量发了

Ton: V4只能发4个同时

a: 怎么通过分片链的BlockId获取到主链的啊

timi: 上面同问

jay: 代码调用高负债钱包。 (reply to 41825)

jay: tonapi ，订阅。 或者轮训。 (reply to 41835)

Ton: 调用哪个啊 (reply to 41836)

Ton: tonkeeper不是的

Ton: 我最经常用的

He: 合约状态显示 Frozen  是什么含义

jay: 脚本代码，提供助记词/私钥 创建的。 不会调用浏览器钱包。 (reply to 41838)

jay: https://github.com/TON-NFT/ton-wallet-utils/blob/main/_modules/transferJettonFromHighload.js

wikig: tonapi/toncenter 或者dton轮询也行 (reply to 41835)

wikig: 有hash获取详情然后根据成功与否的字段判定的 (reply to 41848)

wikig: https://tonapi.io/v2/blockchain/transactions/GCsLE2edYBXCIn6y4xECbggDpSr1WTq425LH6SdwL2Y%3D  举例 (reply to 41853)

wikig: 其中的`success`字段

Louis: 0 和 0+1 有什么区别

Logan 🐯: Ton哪里可以一次性买大量测试币？

wikig: 可以考虑用tonweb的utils/boc 库 (reply to 41861)

Logan 🐯: Ton哪里可以一次性买大量测试币？

Louis: 这两个值有什么区别。。。

Louis: 都是指ton费用

mu: 测试环境钱包交易列表接口返回的是主网的弹回地址，你们遇到过么？

Ton: ~dump(in_msg_body);     ;; #DEBUG#: s0 = CS{Cell{01c968008751cd89939e14c1d70e115368f5e09b4e9093ebaf574f8f2443b0b064643c633fd2da36eb393585c7bf0b7ba92579255dd5d82d21e06615deee0f02378f4fea71d0ee6b28000752f3800000000000b71b02cd3be3f200001387800000000000000040} bits: 801..801; refs: 1..1}     ~dump(in_msg_body~load_msg_addr());  这个却没有结果，有没有哥知道为啥

Ton: 这个im_msg_body明明有值啊

adam: @Advac777 这个解决了么 (reply to 33949)

timi: 刚学ton，这个错误会是什么引起的？

Louis: int ton_balance_before_msg = my_ton_balance - msg_value; 为什么要当前余额要减掉发过来的消息携带的余额

Louis: 没看懂

Logan 🐯: Ton哪里可以一次性买大量测试币？

timi: 水龙头不是一天50个吗

deng: 交易信息有错呗 (reply to 41884)

deng: 是不是有备注？

deng: 备注留言的格式不对？

timi: 感谢，我看下 (reply to 41891)

Ton: 交易还没上链 没有hash (reply to 41900)

Ton: API 查

wikig: 用的什么库发？topnconnectui？ (reply to 41900)

wikig: 如果是tonweb的话，我也没办法（摊手  但是如果是tonconnectui，会有个回调，然后给你message hash (reply to 41905)

wikig: 那你await一下应该能拿到一个message hash (reply to 41913)

wikig: 然后去tonapi根据message hash获得交易trace

Louis: 这种代码可以反编译吗

Louis: 想看源码

wikig: 哪一块？ (reply to 41925)

wikig: 那建议检查这边的写法。 (reply to 41928)

wikig: https://test.tonspay.top/test.html (reply to 41928)

deng: 有晓得这种机器人设置的么

deng: 没找到文档😂

Play: https://core.telegram.org/bots/api#getstartransactions  有大佬用过查TG-star交易流水的接口的吗?   为什么最新的订单在最底下?  这也太奇怪了

Louis: .store_coins

Louis: .store_coins是直接发钱吗，单位是naton？

Pacino: 前端发起一个ton链原生币兑换ton链其他币种的交易，怎么发起有大佬知道吗，使用什么api

Alfred: 可以调 stonfi sdk 的 swap，如果有池子，就可以用 (reply to 41943)

jay: Keyboard Button Mini App (reply to 41935)

Pacino: 谢谢大佬，我试一下 (reply to 41946)

deng: 没找到文档怎么设置啊 (reply to 41947)

deng: 我看过这个

jay: 发 message，再 reply_markup 中 附带 keyboard

deng: 这个

deng: 我试试

deng: 我想 在postman 调用接口设置,不知道行不行

jay: 这个不是机器人本身的设置，是设置到个人。

deng: 肯定是设置所有人算了

deng: 我看别人机器人点开就自带了下面的 keyboard (reply to 41952)

国际: https://core.telegram.org/bots/webapps (reply to 41960)

wikig: 你decode一下就能拿到message hash (reply to 41941)

wikig: 可以参照ston.fi的sdk (reply to 41943)

Pacino: 非常感谢哦 (reply to 41964)

0x: 如何获取tg用户的注册时长？

0x: 有大哥知道吗？

jay: Start 就是第一条指令。 (reply to 41960)

jay: 回复 start 也算。

live: 请问ton有没有开源的链游啊？能直接部署跑起来的

Howard: Notcoin 的遊戲算嗎？ (reply to 41971)

live: 我就买过它的币，没玩过它，有它的仓库吗？ (reply to 41973)

wikig: 同问，这个我也很感兴趣 (reply to 41967)

wikig: 是的，好像也都是要申请api，也可以用toncenter或者dton (reply to 41979)

0x: 大哥有找到的话@我一下哈 (reply to 41981)

deng: +1 (reply to 41985)

wikig: 你在这一步拿到的应该是message hash，可以找关于使用message hash获取交易的接口 (reply to 41984)

wikig: https://toncenter.com/api/v3/transactionsByMessage?direction=out&msg_hash=nMPBDcLhN%2BmQFqDpfw1nvZW4%2BngmHEctl7WQicalwvo%3D&limit=128&offset=0 (reply to 41988)

wikig: 比如toncenter应该有这种根据messagehash获取hash簇的操作

Potter: ton 上mint token 后， 可以分批 issue 么？

c: 你Hash 咋拿到的 (reply to 41989)

c: boc咋转hash (reply to 41989)

Ton: 同问 (reply to 42011)

gavin: https://github.com/VanishMax/foton/blob/main/packages/core/src/shared/utils/boc-to-hash.ts (reply to 42011)

gavin: 再一次分享一下 boc to hash的代码

gavin: Cell.fromBase64(boc).hash().toString('base64');

c: ok 多谢 (reply to 42022)

Louis: 一般往合约里留多少个Ton比较合适

Louis: 比如这个jetton主合约，我只留0.01个ton合适吗

Ton: ref~load_msg_addr() = 0043800e1bd5bbf6e6ea524f6b96a765b76ec32c2d279de0ad095538e8e175a84bbe8a70  我该怎么解析这个嘞

Sun: https://tonviewer.com/transaction/a2ee764149983051edaf410c4d9d0d6d622de376b568a45877a1edef1ba7f998 大佬帮我砍一下，这笔交易咋回事？

Sun: 帮我看一哈

Sun: 😥

User<7002830043>: 怎么了 (reply to 42035)

Sun: 看不懂，发起一笔交易，这到底成功了还是失败了。怎么失败的？

User<7002830043>: 你这是哪个交易所 (reply to 42039)

Sun: 这是我自己写的一个提现交易

User<7002830043>: 点不开 (reply to 42041)

Sun: 好吧，只是自己的资产不够。精度搞错了。😅

— 2024-07-23 —

c: 大佬们 听说用tact比func花费的gas要多很多，你们都用的啥

enpitsulin: 你可以把 tact 编译完的 func 再改改，要我说真的怎么节约的话可以直接写 fift🤣

gavin: fift一步到位

enpitsulin: 感觉还不如去帮忙优化tact编译器

Tee: tact也敢用吗？

Tee: https://docs.ton.org/develop/smart-contracts/ 警告 由社区开发。请谨慎使用。

Tee: 而且tact合约似乎无法升级

Tee: 官方都不支持用tact

enpitsulin: 可以啊直接映射到 native function 就好了

enpitsulin: 开源的有啥不敢用的

gavin: 可以用的 tact是趋势

gavin: 升级自己手动写一个function就行了

rao: ton 写合约一般都用func么  tact 有啥不好的么？

gavin: 缺啥自己用func写一下 然后tact调用就行

enpitsulin: tact 确实会多费一点 gas

rao: func 有像 openzeppelin这样的库么

gavin: tact 目前的问题是  1. 主流开源的项目目前没有用tact实现 （比如 Swap、Lend、marketplace）  2. 因为它要转译成func 所以gas会多一点  , 我猜测是因为它有很多语法糖做了很多func兼容所以这样 (reply to 42114)

rao: 看着写起来有点费劲

gavin: 有 github有一个repo上有大量的基础库 (reply to 42117)

jay: tact 能力还对不齐，不过支持混合编译能一定程度上弥补。

Tee: https://docs.ton.org/develop/smart-contracts/ 警告 由社区开发。请谨慎使用。  官方不太支持用tact

gavin: 熟悉之后你会发现func还是简单 它的关键字少, 能做的就算术运算、发消息、构建解析cell, 就是代码表达力差点 (reply to 42119)

Tee: 另外，tact写的合约似乎不能升级

jay: 用 tact 写出业务逻辑的bug比 func 要低。已经包含了不少最贱实践。

enpitsulin: 主要是可读性低点 (reply to 42124)

jay: 硬编码太重。

enpitsulin: 有时候给自己绕来绕去的整晕了

rao: 叫什么名字呀 (reply to 42120)

Tee: 一直没搞懂gas费用的计算和使用， 像消息里头ihr_fee, fwd_fee几个字段如何用的，有文档说明吗？

gavin: https://docs.ton.org/develop/smart-contracts/fees (reply to 42131)

jay: 极端一点，可以先 tact 跑完，然后再对照编译结果搬到func。

Tee: 要每次发消息前自己计算下gas费用，然后填进去吗？ (reply to 42132)

jay: 多携带一些ton。然后用不完的退回来。

jay: 当然，代码稍不注意，ton 就退不回来了。

Tee: 怎么注意呢，有没具体些的文档，或者example参考？

gavin: 就是自己预估好每个操作大概要多少gas, 然后填充进去。 合约里最后一步可以把剩余的gas都找零给用户 (reply to 42134)

gavin: 没有文档, 参考的话去github上开源的ton项目看他们怎么写的就清楚了

jay: 我也迷惑中，很容易ton 就退不回去。

c: 感觉这玩意好难，还有完全异步的设计，让一个简单的转账都复杂了，可能双花 ，不像以太坊那样简单

Tee: 每一个消息流程都要评估gas费用，然后最后一步退回

Tee: 这还是一个现代语言吗

Tee: 还要手动拼凑二进制消息体，这体验不是很好

enpitsulin: 是哦这点也有点蛋疼

Tee: func合约升级合约代码是比较方便的，如果是要修改合约中的数据，比如增加修改字段，要保持前后兼容，这样的需求好实现吗？

enpitsulin: 本来最蛋疼的是异步模型，现在又加一个

gavin: 是的没错

Tee: ton基本上没编程的易用性，evm上手难度是60的话，ton起码一万

gavin: 增加修改字段, 主要是cell能正确的被parse, 我没试过 但是我觉得能做到但是需要很仔细,一个字段顺序搞错就都错了 (reply to 42146)

Leo: 兄弟们，tonconnect能跑在手机上吗？

gavin: evm 60 solana 200 ton 10000 (reply to 42149)

gavin: 可以 的 (reply to 42151)

Leo: 比如我有个app，想用tonconnect连钱包，

Tee: 关键是怎么跟新老数据兼容呢？比如protobuf这种序列化就支持前后兼容 (reply to 42150)

Leo: 这是怎么个流程呢，我们试了react-native，失败了

gavin: 你这个说的太对了, 哈哈哈很精准 这个就是ton开发的痛点 (reply to 42144)

炒币养家: 也不知道是哪个沙雕设计的

炒币养家: 确实非常不好用

gavin: 八成是俄罗斯人搞的 (reply to 42159)

Leo: 就是react-native on android，然后调用tonconnect，没搞成

Tee: 这个反过来理解，也算对程序员友好吧，门槛高，不太容易替代

Crypto 🔑🐦‍⬛️: ton 里的沙雕设计太多了 (reply to 42161)

gavin: 你可以理解成它就是一个类似多链表结构, 新老数据兼容只要你解析的顺序不错就行了。。。, 它还没有序列化反序列化那么高级的东西 (reply to 42156)

7A 😁XXXX: 你这么讲。。。有点DOT那个味道

Jackie: 这算啥，3个钱包同一个助记词导入的生成的地址都不一样。。

Jackie: 3个不同的钱包软件

gavin: 有道理, 门槛越高待遇越高，护城河啊 (reply to 42163)

Jackie: 流行起来的东西才有护城河 (reply to 42169)

gavin: 说到钱包地址 不得不吐槽下btc 也是一样 哈哈哈 (reply to 42167)

Jackie: 不流行，你护起来干啥

enpitsulin: 不流行也不行啊

Tee: 同一份代码解析新老数据，代码本事并不知道是新数据还是老数据，没有版本号类的东西 (reply to 42165)

炒币养家: 大多数公司估计也就发个token

enpitsulin: 没人看不起 Telegram 的用户量啊

gavin: 你是不是钱包的版本不一样呢, 如果都是wallet contact v4 出来的应该是一样的呢  除非是 回弹或者不回弹的区别 (reply to 42167)

Jackie: 毛的用户量，有多少机器人，大家难道不知道吗？ (reply to 42176)

炒币养家: 其它的用中心化

Louis: 怎么样可以debug，我想看合约的某些值

He: 如何计算传输一条数据所需的gas

Q: 有个dump方法可以 (reply to 42181)

gavin: tact 是 dump  func是~dump、strdump

He: 在合约中能根据 输入参数计算 所需 gas 么

Louis: 我用的func

gavin: 我的哥 你怎么还在搞这个合约 (reply to 42178)

Louis: 不一样

Louis: 这是工厂模式

gavin: 这种发jetton的合约有啥好debug的,直接用模板合约不就行了

Louis: 我前几天在弄别的

gavin: 要啥工厂模式呢

Tee: evm合约可以用wss监听event, ton环境如何实现类似的需求？

gavin: ton 也有websocket的那种监听 (reply to 42194)

gavin: 但是据群友反馈多次容易丢消息

gavin: 所以他们最终都是用的扫指定地址的transaction

Tee: 比如一次transfer, 有多个消息。这算一个tx,还是每个消息是一个tx?

gavin: 每个消息一个tx (reply to 42198)

Q: 存储费倒是可以算,其他的就不太清楚了 (reply to 42186)

gavin: 各位ton开发的新人, 强烈建议大家学习下这个开源项目哈 https://github.com/ton-community/assets-sdk  这个库里面很全 从发型jetton、nft、到转账、获取余额解析数据都有

gavin: 相当于solana 的spl-token 了

Tee: 嗯嗯，多谢多谢

He: 合约之间交互所需的 gas 费有办法计算么 (reply to 42201)

Tee: 每个用户都有地址，数量无上限，这咋扫描？ (reply to 42197)

gavin: 你可以用ts代码 有一个计算fee的 打印出来就行 (reply to 42205)

gavin: 你项目不是有一个合约吗？只扫描这个合约的transaction就行了, 每个用户只要跟这个合约交互过就能捕获到的 (reply to 42206)

Leo: tonconnect/ui-react能在react-native里面跑吗

Tee: 嗯，思路基本理解，多谢 (reply to 42209)

He: 是否有可用的用例  能告诉一下么 谢谢 (reply to 42208)

Q: 官网有ts计算的交互费用的例子 (reply to 42205)

Q: https://docs.ton.org/mandarin/develop/smart-contracts/fee-calculation#computation-fee

He: 好的非常感谢

gavin: 可以的 稍等下 我来寻找一下我的代码库 (reply to 42212)

gavin: @ton/sandbox 这个库里，有一个printTransactionFees方法 可以打印出你的合约涉及到所有指令的费用情况 (reply to 42212)

He: 感谢感谢

c: 这玩意不好使啊 学习源码倒是可以 (reply to 42202)

炒币养家: 为啥不用tact呢

炒币养家: 虽然tact也不好用，比fc好一点点

Louis: 这是什么错

c: 我觉得他不应该去搞tact 搞一个简单的框架不是更好 像solana那样 anchor框架就比用原生rust写好多了

gavin: 有点blueprint的感觉 (reply to 42224)

Logan 🐯: 哪里可以买测试币，

Logan 🐯: 领取的太慢

c: 买测试币 你还不如直接买ton

Louis: 一小时5个 测试够用了啊

gavin: 哈哈哈对直接用主网测 (reply to 42228)

gavin: 是不是你的这个msg_value类型错了呢  最好能给出更多的代码 (reply to 42223)

Louis: 已经解决了

c: 我看写的那个文章就是 说测试网烂的很 直接本地测了 再用主网测 主网便宜 要不了几个钱

Jackie: 那为啥不用blueprint呢？ (reply to 42225)

Jackie: tonkeeper手机APP切不到测试网😂 (reply to 42233)

enpitsulin: 可以的啊怎么不行

Jackie: 啊，哪里切？ (reply to 42236)

enpitsulin: 点几次版本号进去把 dev mode 开了然后在添加钱包

Jackie: 我先添加的钱包，再切就不行是吗 (reply to 42239)

Jackie: 我先导入再切，完全不行

enpitsulin: 你新建的时候选 testnet 钱包

Jackie: 其实我有点不理解，同一套助词，按理这直接网络一切换不就OK了？为什么要这么复杂

enpitsulin: 又不是 evm

Jackie: 我的意思是钱包端。。 (reply to 42245)

Jackie: 钱包本身就可以自动做这个事的

enpitsulin: 他钱包这个实际上是aa账户，切了网络肯定要重新部署了啊

Jackie: 问题是在测试网上已经部署了这个钱包啊，已经有过交易记录的

enpitsulin: 因为没办法直接知道对应合约的地址和状态吧

Jackie: 难道在部署之前不能计算出地址吗？不太理解 (reply to 42252)

enpitsulin: 应该是本来加主网钱包的时候就不保存你的助记词，然后你想加测试网就没法去获取地址和状态，所以就要你手动再来一遍这个流程

Jackie: 这个解释到是合理，不过如果不保存的话，钱包签名的时候用的是啥？ (reply to 42254)

Jackie: 还有在钱包里没有看到类似导入私钥的东西，难道只能用助记词？ (reply to 42254)

adam: 同时发送两条消息，两个send_raw_msg，哪种消息模式是全部由用户支付gas费？mode都试了，为啥其中一条消息的gas费是合约余额支付的？

enpitsulin: 好问题 这个确实没啥想法 (reply to 42255)

Jackie: 正式网上做测试花费大不，测试网一直连不上，要疯了 (reply to 42258)

adam: @dev_rel @CryptoGamesV1  大佬们，这个有办法解决么？ (reply to 42257)

Leo: 兄弟们，react-native调用tonconnect可行吗？你们有人做过吗？

Leo: 我们这边遇到的情况是tonconnect/ui和tonconnect/ui-react都只能在网页里跑，不能在手机端跑

condi: 因为react是react + native  tonconnect/ui-react 里面 element都还是div的，rn肯定用不了 (reply to 42261)

condi: 里面不少功能都是web限定的，rn不能用

condi: 要不然开个webview吧

condi: 最起码 div再rn里面对应的是view标签，然后还要考虑一些 网络通信的库，rn是否支持，不支持就要桥接原生代码，还有一些密码相关的库，rn是否支持 (reply to 42262)

Soybean_HashKey: 我们做了一些辅助ton开发的AI bot，不知各位感不感兴趣，欢迎各位尝试一下

Howard: https://www.youtube.com/watch?v=rkXiURiNmpU (reply to 42017)

Howard: 😳 (reply to 42035)

Howard: 拜託大家一塊來優化 🙏🏾 (reply to 42103)

Howard: 好問題，但還是不夠模組化。看人吧。我覺得初階用戶來說、還是偏困難。 FunC 天生很難快速模塊化使用、對開發者要求較大：  https://github.com/ston-fi/funcbox (reply to 42120)

Howard: 沒錯！混合編譯 可參考: https://github.com/howardpen9/jetton-hybrid-template/tree/main/contracts (reply to 42122)

Howard: 你的發送 mode 是用啥, https://docs.tact-lang.org/book/message-mode (reply to 42260)

adam: 我用0、1、64都试过了，都不符合预期 (reply to 42284)

adam: 另外有地方可以设置gasLimit么？报out of gas错误

wikig: 有个 success的字段的吧 (reply to 42294)

jay: 这种也不完全保真， https://testnet.tonviewer.com/transaction/48ad0e1695d20786c594613804372068941c14eb720f03b227de653119208d3e 看这笔交易，看起来是成功的，但实际是失败的。 (reply to 42300)

jay: 要所有的子交易都 success。

wikig: 是的所以最好trace一遍

jay: 我因为这种，之前超发了几笔交易，导致资损。

Louis: 73代表什么错

Sun: hash发出来看看

Louis: 不用了 这个是我自己抛的异常

Snow: ton接受棋牌类小游戏的上架吗

Jiam: 賭場都可以上架 (reply to 42316)

Snow: 这么牛 (reply to 42318)

wikig: 蛮多casino的 (reply to 42319)

Snow: 是基本不限游戏类型哈

Jiam: 就是不知道景不景氣 (reply to 42320)

wikig: 总的来看，还是不错的。而且基本都是在TON生态之前就有的玩意儿 (reply to 42322)

Snow: 上架了会有有导量的资源不

Jiam: 要是AppStore能上架就厲害了

Louis: 这个值到底指的是什么

Louis: 我想把合约的余额全部转发出去

User<7002830043>: 你直接在交易所出金就好了啊 (reply to 42333)

Louis: 我想做到类似于这种效果

Louis: 我记得那三种模式是可以做到的

fun🦴: TON 钱包有类似evm的signMessage 协议嘛， 目前只看到在连接钱包（InitialRequest）的时候支持请求个ton_proof： https://docs.ton.org/mandarin/develop/dapps/ton-connect/protocol/requests-responses  signMessage或者叫signData的协议是支持的吗？ 只是SDK不支持嘛： https://github.com/ton-connect/sdk/issues/207 https://github.com/ton-connect/sdk/issues/122

Sun: 不行

wikig: 目前没看到sign操作。 (reply to 42341)

Sun: 你可以试试，gas费不足的情况下，还有代币余额不足的情况下。发起转账试试，检查又什么不同

Louis: 这个值是啥

Sun: 这一看看这里又更详细的交易记录

Snow: 棋牌类可以上telegram吗

wesson 🆙 UXUY: 都可以

Snow: 感谢

sua: 各位大佬有ton节点的请求和发送交易得文档吗

Pacino: https://tonviewer.com/transaction/66c1ab459733fa93c664dd159e7707a8812747f359c2092c8c66ed0977b3c5ef 有大佬帮忙看看这个交易为什么失败了吗

jay: 用混合编译 @name(merkle_verify) native merkle_verify(proof_cell: Cell, merkle_root: Int, index: Int): Slice; (reply to 40366)

jay: slice merkle_verify(cell proof_cell, int merkle_root, int index) method_id {     (slice cs, int exotic?) = proof_cell.begin_parse_exotic();     throw_unless(42, exotic?);     throw_unless(400, cs~load_uint(8) == 3);     throw_unless(401, merkle_root == cs~load_uint(256));      cell dict = cs~load_ref();     (slice entry, int found?) = dict.udict_get?(256, index);     throw_unless(404, found?);      return entry; }

jay: tonapi 可查。

Manta: let winit1: StateInit = initOf JettonDefaultWallet(ctx.sender, myAddress());          require(msg.amount <= winit1.balance, "Wallet amount not enough");

Manta: 现在想实例化一个wallect 看看里面的值 得需要怎么实例化

Manta: winit1.balance

Louis: 有人知道合约代码怎么更新到链上吗

Gibran: 小程序要开通用户支付TON，服务端java应该怎么对接？求大佬指定，看文档完全没找到相关接口文档

jay: 做不到，异步的。 (reply to 42375)

wikig: https://t.me/tondev_zh/38143 (reply to 42380)

Leo: 多谢，兄弟 (reply to 42273)

Alex: 你好，使用这个代码没有获取到对应的 tonProof.proof，wallet 对象上连 connectItems的字段都没有，请问您用的是哪个版本的tonconnect/react ? (reply to 17291)

yiii: 为什么这个图片怎么都上传不了

&: 您选择了错误的操作码，请仔细查看 dedust.io 文档，按照示例代码， (reply to 42362)

Pacino: 什么意思，没太明白 (reply to 42399)

Chaincode: 往哪儿上？ (reply to 42357)

Chaincode: 有商店吗

User<7103317108>: 以太坊的用例是 DeFi、NFT 和 DAO。TON 的用例是支付、游戏和供应链。 (reply to 42316)

c: 感觉tg开发起来好麻烦哦 获取tg用户数据还有验证miniapp 前后端都要放在公网

MEW: 有个tact的例子合集，有farm还有nft交易市场啥的，是哪个repo来着

Pacino: 我在stonfi前端发起了一笔兑换，控制台返回了上面的参数，想问一下有没有人知道这里面的address是什么地址。还有这个from是怎么变成这个格式的。包括payload如何转成这个格式的

MEW: 印象中是哪个项目开源的 (reply to 42415)

gavin: from 是原始地址 可以转换的 (reply to 42416)

gavin: https://ton.org/address/

Pacino: 这个address是什么地址啊大佬 (reply to 42420)

Pacino: EQARULUYsmJq1RiZ-YiH-IJLcAZUVkVff-KBPwEmmaQGH6aC 新人小白问一个问题，这个格式的地址是什么地址，是账户地址或者token地址经过什么处理转换的吗

jay: bounced 地址，你可以理解为：主网 + 合约 的地址格式。

jay: 主网 + 用户 = UQ...

Pacino: 这个地址应该不是固定的吧

User<6464643890>: yes

Pacino: 这个地址既然不是固定的，改怎么样生成呀 (reply to 42431)

0x: 大佬们

0x: dapp如何链接ton钱包呀？

0x: 电报小程序

Asaki: 一个 dedust swap 怎么统计账号花了多少 gas ？

Asaki: 怎么算都算不对，有没有懂的

wikig: 可以去看tonconnectUI (reply to 42451)

Konstantin: 大家好 Jetton Tokens 的創造者使用 airdrop 來訂閱專案的頻道和聊天內容，作為行銷工具。 該專案的創造者需要建立具有這樣功能的機器人。 我們將可以在幾分鐘內推出這樣的機器人。如果您有興趣成為早期使用者，請與我們聯絡。使用該機器人的第一個月將免費。

D: 大佬们求问下，TonClient 和 TonClient4 什么区别啊，我看用两种的都有

D: @ton/ton 里 (reply to 42478)

— 2024-07-24 —

c: tg上怎么调试？ 我只看到 WebApp.showAlert(initDataParsed.user.username); 有没有console.log("Login info sent:", data);这样的方法去调用，或者打断点调试

enpitsulin: https://docs.ton.org/mandarin/develop/dapps/telegram-apps/testing-apps (reply to 42499)

jojo: 请教一下，func中字典 dict 的最大容量是多少啊

jay: try it

Manta: 一个函数发2个消息 消息是并发的吗？ 能顺序执行吗？

Alfred: 顺序不保证 (reply to 42513)

Louis: 这里A和B分别调用了谁，没看懂

Louis: A收到了超额消息，应该是不会再调用其他合约了吧

Alfred: 我在哪看到单合约中约 30000 个 (reply to 42507)

0x: 好的，谢谢 (reply to 42463)

elon: ton 的消息是怎么排序的，有人知道么

Johnny: 兄弟们，怎么使用7.7的api？ 是由客户端决定的嘛？

Johnny: 我想实现禁止垂直滑动，api一直提示7.2不支持

wikig: disableVerticalSwipes  建议确认你用的telegramwebapp.js是latest的 (reply to 42537)

Johnny: 兄弟，我想使用last的该怎么信用？ (reply to 42543)

wikig: 你咋用的， 原生html直接引的CDNJS吗 (reply to 42547)

wikig: 还是走框架

tobenumberone: <script src="https://telegram.org/js/telegram-web-app.js"></script>请问这样是不是下载的最新的？

Johnny: 我用的import { postEvent,on } from '@telegram-apps/sdk'; (reply to 42548)

Johnny: 这个样子是不是不行啊？

wikig: 这样一般是的 (reply to 42550)

wikig: 看样子是上了react或者vue，我记得他们的'@telegram-apps/sdk'这个包，是最近才更的 (reply to 42553)

wikig: 所以我也不知道具体这个包的版本有没有做该项支持

Johnny: 我用了script标签

Johnny: 然后打印版本  还是7.4 不是7.7

Johnny: 有哪位大佬知道  我如何才能使用7.7的版本吗？

Johnny: 我需要禁止页面垂直滑动  只有7.7的版本才支持。。

Johnny: 这个BOT API版本 到底是由sdk决定的？    还是由客户端版本决定的啊

wikig: 啊？ (reply to 42565)

wikig: https://t.me/tonshive_bot/demotiktok  这个就是用上述写法，然后限制了上下滑动的 (reply to 42565)

cajh: 有没有创建Jetton代币的工厂合约示例呀

gavin: 奇怪 为什么我的没生效呢 (reply to 42574)

gavin: 我的是7.7 但是还是能滑动

wikig: 这边具体写法长啥样 (reply to 42579)

gavin: 不是 我是说我打开你刚发的那个应用 (reply to 42580)

cajh: 是的 (reply to 42583)

cajh: 在工厂合约中创建Jetton

wikig: 额。也就是说，你打开上面那个Dapp，还是生效手势控制？ (reply to 42584)

gavin: 对

wikig: 那怪,我猜测是端版本差别？

gavin: 我是iOS 最新版

wikig: 我这边用的Android 版本的telegram是已经禁用手势了打开的时候

wikig: 怪

wikig: 我晚点找个iOS用户试试

Levi: hello

Levi: ton verify contract 有完整的文档吗

Levi: 看到有好几个github仓库 有点乱

Levi: contract-verifier-backend contract-verifier-contracts contract-verifier-sdk contract-verifier

Johnny: 有哪位大佬做过 star支付吗？   能给讲讲流程吗

Bill: 听说现在有一个新的合约协议发jetton，转账gas更便宜？请问大家知道吗？有没有源代码或者现成发行的样例？

gavin: 那个？有具体的代币吗 (reply to 42603)

Bill: 我也是听说，所以过来打听？？我们项目涉及到大量转币，所以对gas这类比较关注

Levi: 什么协议

Bill: 应该就是jetton代币协议吧，有节约gas的实现版本吗

Bill: jettonMaster不能省，jetronWallet不能省，存储费用不能省，还有什么办法节约gas呢？？

Bill: 另外有没有办法或者把gas消耗体现在net费用上而不是转账支付ton上

c: 大佬们 有没有做游戏的？如果我要单独拉一套登录比如各个链的钱包登录 是不是只能写sdk给游戏那边集成

wikig: 各个链的钱包登录？  你是指在TON中使用EVM或者SOLANA规则进行签名吗？（因为目前TON的原生钱包好像没有签名方法） (reply to 42615)

Poseidon海王: 应该只能分开不同的链发布版本 (reply to 42615)

tsunamier: 多谢大佬 (reply to 41137)

c: 你说的是游戏要分很多版本发布吗？他就想游戏不变，登录外部来做。我登录了以太坊的钱包那就算是以太坊登录，solana钱包连上了 就算是solana登录了，ton也一样

c: 相当于王者荣耀调微信和qq登录

c: 游戏可以选择以不同的方式登录 调到我的服务完成登录再回调回来

gavin: 得用sdk

gavin: 不然开发者对接太复杂了

c: sdk不会写哇

c: 我本来想的只是简单的页面跳转 游戏说做不了

wikig: 几个问题：  1.为什么不直接考虑用telegram Oauth或者telegram的webapp authdata  2.如果是连钱包的话，一般常规方案是：做签名。 但是正如上面所说，目前TON的wallet似乎没有签名规范支持。  至于其他链的话，可以考虑上walletconnect  或者直接唤起钱包deeplink实现mobile登录签名如：https://docs.phantom.app/phantom-deeplinks/deeplinks-ios-and-android  至于telegram上的多链支持的话，我们目前在做这个方向： https://tonspack.com/ (reply to 42619)

c: 或者我给他一个web地址 他嵌入

c: 大佬 你这个6 啊 还有跨链 (reply to 42626)

Logan 🐯: ton的支付价格怎么超过3位小数就不见了

Logan 🐯: 实际我传入的支付价格大于3位小数

c: 签名规范 不太懂。他没做那么复杂 就是只需要你连钱包了 把钱包地址和游戏的uuid绑定就可以了

wikig: 那可以考虑做多链连接整合。  如：  1.solana wallet-adapter  2.evm web3modal / wagi / rainbow  3.ton tonconnectUI  主流其实就这么几个 (reply to 42632)

c: 我的意思是必须写sdk吗？这些接入我都会 只是说只能写web服务

wikig: 这些是连钱包及吊起操作、签名、发交易的集成。  而且都有开源demo，方便的 (reply to 42633)

wikig: 但是坏消息是，如果这game是base在telegram上，那么用户在mobile打开，大概率上面的那些sdk都掉不起

c: tg

c: 就是唤起tg的钱包

wikig: 因为没有extension在mobile的tg上。大概率需要依赖deeplink。  或者我上面提的tonspackwallet来解决多链问题 (reply to 42636)

c: 他是想tg也有 网页端也有

wikig: 当然。如果在tg上只唤起tonconnectUI的话那没啥问题，有@wallet的支持。 (reply to 42639)

c: 这是我写的页面，我想游戏直接拉起这个页面，我说给url，他说不行，要写成sdk，他调用sdk拉起

J: 钱包的接入都是 sdk，只给 url 有啥用

c: 我怎么把我的钱包按钮写成sdk给他用呢

c: 我以为可以嵌入 在我的页面进行操作 各自独立 通过后端传输数据 (reply to 42643)

wikig: 照理说，这样也不是不行 (reply to 42646)

wikig: 只要那边后端做了相应的接口。

wikig: 但是还是前面那个问题，ton chain不支持原生钱包签名

wikig: 所以后端没法验签

c: 游戏端说搞不了 哎

wikig: 所以也就没有办法直接用TONCONNECTUI做鉴权。

Crypto 🔑🐦‍⬛️: 好反常识的设计

wikig: 但是如果是其他的，如solana之类的，用wallet-adapter做个消息签名作为鉴权。不是不行。

c: 他就是想单独做一套多链登录系统 到时候游戏随便换 直接套

🦴 Brenda: tonconnectUI 怎么调用合约方法并传入一个比较复杂的值呢

wikig: 可以考虑这样的流程：  1.游戏向后端请求一个跟UID绑定的的临时uuid  2.然后游戏端组装外链，如https://yourdomain.xxx/?uuid=uuid  3.你web拿到该信息后吊钱包签名，把uuid和时间戳签个名。  4.web把签好名的内容走http发回后端。 (reply to 42651)

Crypto 🔑🐦‍⬛️: 是部署一套游戏支持多链，还是说要一套游戏兼容适配多链

Logan 🐯: ton的支付价格怎么超过3位小数就不见了 (reply to 42631)

wikig: （估计游戏是中心化的，然后采集一下用户的address信息方便后续空投 (reply to 42658)

Logan 🐯: 实际我传入的支付价格大于3位小数

wikig: tonviwer显示的时候tofixed掉了吧 (reply to 42661)

Louis: 测试网炸了

Louis: 咋回事啊

Logan 🐯: 哪个网站可以看到不fix的

wikig: 直接api拿这条交易

wikig: 不就行了

Crypto 🔑🐦‍⬛️: 那这种只需要前端集成几个 sdk，就可以用户选择不同钱包链接，然后发送钱包地址给后端 (reply to 42660)

Logan 🐯: 还四舍五入了

Logan 🐯: 😂

wikig: 对的，但是前面提了，tonchain的原生钱包没有signmessage操作。所以估计做不到 (reply to 42669)

Crypto 🔑🐦‍⬛️: 测试网炸是正常的 (reply to 42664)

🦴 Brenda: @carzygod 大佬怎么给合约传一个map值啊

wikig: 因为直接发信息不签名的话，造伪很容易 (reply to 42672)

c: 是这样的 游戏是中心化的 只是充值道具这些信息上链 所以只需要一个钱包地址就行了。到时候对应地址给金库打钱了 找到地址对应的uuid 给游戏里面加对应的金币或者道具 (reply to 42660)

Crypto 🔑🐦‍⬛️: 不需要签名，签不签没啥影响，如果只是要地址的话 (reply to 42672)

wikig: 逻辑上是，只是说，没有签名的话，后续AirDrop水分会很大（因为这个接口外部谁都可以调hhh (reply to 42678)

Louis: MMP马上要上报了，还没测过 这时候给我炸了

wikig: TON的合约吗？（话说func有map操作吗，我咋记得都得用pda账户？ (reply to 42675)

🦴 Brenda: 我用的tact

Crypto 🔑🐦‍⬛️: 这都是坑，做过 ton 开发的基本都踩过 (reply to 42680)

Louis: 其实tact能实现 func也可以，因为tact官网说了，最终都是tact代码转成func再执行的

Louis: func是官方的语言，tact是社区的人发明的，只不过tact更像是solidity？

Logan 🐯: 我草 果然tonviewr四舍五入

🦴 Brenda: 嗯嗯  是的 tact写起来更弱智更适合我一些

🦴 Brenda: 现在合约部署了  用前端不知道怎么给它调用

c: https://docs.tonspack.com/ 大佬 你这个是只能再tg里面用哇？

wikig: 其实不是，照理说哪都行。  但是是依赖于telegram的deeplink和web callup (reply to 42690)

wikig: 因为我们相当于也依赖于telegram的auth做MPC (reply to 42694)

Christina: Hi

Christina: How does this work

wikig: What you means (reply to 42713)

fun🦴: 我用的 rainbow ，在tg环境唤不起metamask那些钱包，应该是还没支持 (reply to 42633)

fun🦴: 有一个connect proof， 连接ton钱包的时候会给一个签名，这个做web2的登录够用了，基于这个的jwt的示例官方也有给。 (reply to 42626)

wikig: 额，如果是移动端，是肯定不支持的。 (reply to 42718)

fun🦴: 很多dapp，我看自己都支持了。再tg唤起metamask和okx这些app (reply to 42720)

wikig: ton proof是能用的，当然，没有直接sign message那么直接 (reply to 42719)

wikig: tg唤起是要依赖deeplink的，如果设备端装有对应app，是支持的。  之前写Tonspay的时候写了deeplink兼容 (reply to 42721)

wikig: 但是大部分情况下需要考虑用户xx钱包的场景（毕竟移动端钱包占有率其实蛮低的。 (reply to 42724)

fun🦴: 在我看来。会点到metamask的人，80%是有metamask的

fun🦴: 没有的，估计是引导下载。那就是从web2拉新过来的问题了。

wikig: 看目标用户了。  如果目标用户是原有crypto用户的话，可能会有 (reply to 42726)

wikig: 所以像unipass和web3auth这些MPC提供商天天整社交登录就是解决这些问题。  当然，在tg上调不起google所以web3auth也烂了 (reply to 42727)

wikig: 所以我们才在折腾基于telegram webapp的MPC wallet和签名方案，就是上面我发的Tonspack那玩意儿 (reply to 42729)

fun🦴: tonspack 基于 window.Telegram?.WebApp?.initData 的把

wikig: ~额，其实不基于（说白了靠telegram的webapp和依赖于telegram的deeplink~

wikig: 所以就没浏览器extension插件依赖（

wikig: 哦，你说initData。那是的，基于，同时还依赖telegram的Oauth (reply to 42731)

fun🦴: 那就是打开一个dapp，点击连接钱包，唤起tonspack（telegram webapp），tonspack 通过initData验证用户，帮用户维护一个远程钱包。。。好像我现在在做的也是这个，只是我不是做服务。

wikig: 逻辑流程上类似，只是说接litprotocol的MPC service去实现去中心化 (reply to 42735)

wikig: ( 毕竟还没胆子那么肥做个中心化钱包，虽然不排除最后会有中心化version类似于 @wallet 和 ton space一样分开 (reply to 42737)

csyr: 我通过 telegram passport的授权来获取用户的passport的数据，但我的BOT没有收到消息，有大神遇到这样的问题吗？

Levi: Uncaught TypeError: Failed to parse URL from /Users/lidada/dbs-project/minter-contract/node_modules/ton-contract-executor/dist/vm-exec/vm-exec.wasm

Levi: npm run test 报错

Levi: 有人遇到过吗

Poseidon海王: 你参考catizen，他有做了一个MNT代币的版本，但是他在TON里面这个版本只能通过TON的钱包登录，MNT版本只能通过其他钱包登录 (reply to 42619)

Myron: 请教个问题  我在按这个https://docs.ton.org/mandarin/develop/smart-contracts/tutorials/multisig 部署多签钱包的时候最后发送交易的时候出现这个报错： sendfile wallet-query.boc [ 1][t 1][2024-07-24 16:03:12.601885][lite-client.cpp:1157][!testnode]  sending query from file wallet-query.boc [ 1][t 1][2024-07-24 16:03:14.229936][lite-client.cpp:153][!testnode]   liteserver error: [Error : 0 : cannot apply external message to current state : External message was not accepted Cannot run message on account: inbound external message rejected by transaction 11ED7168A00FF491F13867903CFD0C4F1F659976B9DF8B09A1D0A939616452DA: exitcode=42, steps=50, gas_used=0 VM Log (truncated): ...2PU s10,s11,s10 execute CHKSIGNU execute THROWIFNOT 32 execute XCHG s6 execute LDDICT execute DUP execute HASHSU execute SWAP execute LDU 32 execute XCPU s1,s8 execute EQUAL execute THROWIFNOT 42 default exception handler, terminating vm with exit code 42 ]  不知道大家有没有什么解决方案  🙏

Myron: https://multisig.ton.org/   这个多签我在创建的时候显示api错误  不知道你们可以用吗？

wikig: 多签要不考虑下 https://tonkey.app/ (reply to 42792)

Myron: 这个好用吗   我看之前有人说这个usdt提取有问题

TG: Hey Everyone :)

— 2024-07-25 —

User<6337847911>: 👋

Myron: https://multisig.ton.org/  请问这个可以用代码发交易签名吗？

Myron: 或者这个可以用代码签名吗？ (reply to 42793)

Myron: 测试了一下  提现TON出不来😭 (reply to 42793)

Myron: 这个TON充提都可以 (reply to 42836)

Chirs: 我想实现mini app连接ton钱包的功能，有什么参考资料吗

Myron: https://github.com/ton-blockchain/multisig-contract-v2   这个大家有用过的吗

wikig: 我看他们说多签现在不是都用这个为主嘛 (reply to 42839)

wikig: 好像没有 因为ton connect ui现在没做sign message (reply to 42838)

Myron: 可能是吧   不过我确实没提现出来   点完了确认执行就卡住了 (reply to 42857)

wikig: 我记得 官方文档不是有多签的example嘛 (reply to 42859)

Myron: https://docs.ton.org/mandarin/develop/smart-contracts/tutorials/multisig  这个我在最后发交易的时候报错了

Myron: 报错内容是这个    怎么感觉这个ton在这方面比较差 (reply to 42788)

Myron: 我确实没成功   不确定是不是我哪里操作有问题  不知道是否有人成功创建、收发TON

Logan 🐯: 如何动态调用某个合约的get方法

gavin: 异步没有调用一说 (reply to 42870)

gavin: 只能通过sendmessage 通信

gavin: 可以试试@ton/ton 这个库哈 (reply to 42862)

gavin: 这个库官方有实现多签的封装

Myron: 尝试过了   还是有报错   跟着教程完全一致的   激活钱包的时候也只能用外部消息激活  internel消息也是失败   激活后发交易报错是这个： (reply to 42873)

Myron: await mw.sendOrder(order1b, keyPairs[0].secretKey);  报错：  error: 'LITE_SERVER_UNKNOWN: cannot apply external message to current state : External message was not accepted\n' +         'Cannot run message on account: inbound external message rejected by transaction D7134B85866FE1F5AB9E75F73FBC34FFF99AF493DC32D98582589E366EF2E59A:\n' +         'exitcode=42, steps=50, gas_used=0\n' +         'VM Log (truncated):\n' +         '...2PU s10,s11,s10\n' +         'execute CHKSIGNU\n' +         'execute THROWIFNOT 32\n' +         'execute XCHG s6\n' +         'execute LDDICT\n' +         'execute DUP\n' +         'execute HASHSU\n' +         'execute SWAP\n' +         'execute LDU 32\n' +         'execute XCPU s1,s8\n' +         'execute EQUAL\n' +         'execute THROWIFNOT 42\n' +         'default exception handler, terminating vm with exit code 42\n',

gavin: 你看下它的 spec的test (reply to 42875)

gavin: 自己本地执行下test，如果test能过就对比下你的代码是不是那块写的不一样

gavin: 这种基础设施的库不可能出这么低级的bug

Myron: 👍   TON交易发送成功了 (reply to 42879)

Myron: 多谢提供思路

ieurjcbei345whs: ton开发大佬们 来活了 来活了

ieurjcbei345whs: 有空闲的 欢迎沟通交易 我们需要开发一款ton mini  app

Wick李: 麻烦dm一下，我双向了谢谢 (reply to 42886)

sunyoki: tvm  exit_code 在哪里查询

Myron: tg bot是不是也有web端的桥可以直接用呢？

wikig: web端的桥是指？bridge？ (reply to 42910)

Myron: 就是在tg bot里跨链资产   有这种bot吗

fun🦴: tg bot 测试网的 services怎么启动， 用的这个： https://github.com/telegraf/telegraf 没见到测试网的开关。。

wikig: 有倒是....算是有吧。但是比较简陋  （几个月之前我们做了这个 @tonsbridge_bot 作为跨链聚合器  但是由于太过简陋了，近期正在做前端重构。） (reply to 42916)

Myron: 挺好的   这个bot把两个链的钱包连接上做跨链   是不是tg里的普通网页打开也可以直接跳转连接metamask啥的   我这样没成功不确定是不是网络问题

c: Telegram Stars 支付 有大佬有demo嘛 别人支付我的这个stars在哪里看呢 在我机器人绑定的账户余额下面嘛

c: 在我的mini app中支付

wikig: 是这样的。  关于吊起evm / solana链支付问题。  之前我们的服务包括 Tonspay 或者上面那个 Tonsbridge aggrator ， 都是依赖于 Metamask / Phantom 等wallet的deeplink的。  所以是做了端判别。如果是mobile，就唤起Deeplink（前提是用户有该wallet app）  如果是desktop，就window.open通过打开browser，然后唤起extension实现。  后续可能会接我们现在正在做的Tonspack 方案，来支持原生telegram mpc 。 (reply to 42919)

Myron: 理解了   非常感谢

User<7493859481>: 有没有老哥知道tonconnect 钱包有链接成功的 但是 sendTransaction 一直在转圈是什么原因

wikig: 唤起钱包执行确认支付行为了吗？  还是说只是单纯的转圈圈 (reply to 42930)

User<7493859481>: 没有唤起钱包

User<7493859481>: 单纯转圈圈转10分钟都有  看console日志也没有报错信息

wikig: 要不log一下确认一下当前的连接状态？  有无触发什么error log  （可以考虑看一下是否与这个有关  https://github.com/ton-connect/sdk/issues/158 (reply to 42933)

User<7493859481>: 好的  我研究研究

喜欢你: https://x.com/xychso/status/1816387674716201295

Gibran: 为啥这个群一直要join

Gibran: 用户直接向ton地址转账，怎么确定是哪个用户呢？要给每个用户分配一个ton地址吗？

User<7493859481>: 交易可以附带playload  里面可以传订单号 (reply to 42951)

Gibran: 如果用户知道收款地址，直接线下向该地址转账，这种情况怎么办呢？ (reply to 42954)

User<7493859481>: 那可能需要换其他方式了  我记得好像有app按你说的方式来

Gibran: 你们对接是看这个文档吗？https://docs.ton.org/mandarin/develop/overview，文档看下来没看到用户付款的接口 (reply to 42958)

User<7493859481>: 是的啊 用的tonconnect  我也还在研究

wikig: 啊？你一个支付系统还要管逃单问题啊。 (reply to 42957)

wikig: 基于payload做识别的方案可以参见  https://docs.tonspay.top/develop/get-start  对应的开源监听器  https://github.com/Tonspay/Tonspay-monitor/blob/master/monitor/ton.js (reply to 42962)

wikig: 我的评价是，如果不想用户知道最终的收单地址，那无非只能：  1.走tonnel，毕竟是混币，不太现实  2.走中心化分账，类似于交易所热钱包模式 (reply to 42957)

Gibran: 我们之前U充，用户不下单直接线下转账的情况挺多的 (reply to 42962)

wikig: 额，直接线下转账？  我寻思一般做充值系统，前端不是应该在你手里吗。然后应该是前端吊起支付然后发出指定打包交易吧（ (reply to 42965)

wikig: 如果你们是公开某个地址给用户充值，那也不是不行，只是不同的逻辑。需要用户转账的时候手动填memo，就跟binance的部分代币充币一样

Gibran: 可能是U和TON不一样，TON充值是由前端调起钱包支付？完成付款后怎么通知服务端呢？有回调吗？ (reply to 42966)

deng: 服务端自己判断订单状态啊 (reply to 42969)

deng: 有备注订单号和用户id,服务端根据订单号判断是否成功,然后给用户加钱

wikig: 你如果是说ton上的U的话，是一样的。  都是前端打包交易，然后打包的时候带一个额外的提醒交易之类的即可 (reply to 42969)

Gibran: 服务端怎么拿到交易信息，主动轮询查api还是有回调啊 (reply to 42972)

deng: 主动轮询查api

Gibran: 前端打包交易之后怎么通知服务端啊 (reply to 42973)

Gibran: 哦哦 这样啊 (reply to 42975)

wikig: 主动轮训或者wss  具体的监听可以看上述我发的链接 (reply to 42974)

Degen: How to clear the Telegram miniapps wallet connect cache

Degen: 如何清除 Telegram miniapps 钱包连接缓存

cj: telegram小程序 在测试环境，有wallet吗？

Degen: 好像没看到

wikig: 看你是什么了，browser端就直接清浏览器缓存 (reply to 42981)

wikig: 移动端......自求多福吧， Android到系统里把telegram的cache擦掉

wikig: 最近debug被缓存折磨死

Degen: 哈哈 (reply to 42984)

Degen: 咋办啊

Degen: 客户端我清了缓存还是连着着的

Degen: 其实就是把他放到了bot那个域名下的缓存里面了

Degen: 技术人员可以手动清 用户咋办

wikig: 目前来讲，无解。  所以我现在正在把我之前用原生写的那堆业务代码用nextjs重构 (reply to 42994)

EdwardHHH: 请问ton小程序游戏开发现在有unity引擎的sdk之类的吗？

Degen: 大佬 (reply to 42996)

Gibran: 哦哦 现在对对接有概念了 (reply to 42978)

Coder: 大家好，请问小程序direct link只能接收一个startapp参数吗？

wikig: 文档上说是的。  但是可以自己定义一套解码规则，对这一个参数拆分实现多参数的效果 (reply to 43000)

Coder: 我们是想要去推广direct link，第三方归因，会自动拼接一些参数，会被忽略，如果只能一个参数，可能我们得搞一个中转页

deng: Keyboard Button Mini Apps 里面配置的链接点开是拿不到initData 的么

Louis: 怎么在一个合约中发送多条消息

Louis: 是send_raw_message(msg.end_cell(), 1);多发送几次吗，好像不行

Pacino: 请问如何获取到用户的jetton wallet地址啊

He: 请教一个问题 有没有这么一种可能，用户和一个合约交互 并创建了一个子合约，然后很久很久之后，久到子合约中的 gas 已经没有了， 然后用户回来又和这个子合约进行了一次交互，但是因为 子合约 gas 没有了 合约 都成为 冻结 状态了 会发生这样的事情么？

He: 😂

He: 我有点迷茫

He: 因为我检查发现  冻结了的 合约 是没有办法进行交互的， 同理冻结了的合约 里面的数据也没办法读取了

Alfred: 非常好的问题，实际情况是，存储 gas 只有在与合理交互时才收。所以我的理解是，查应该是可以查的，而且下次交互时，给的 gas 能覆盖 storage fee，就能继续交互 (reply to 43035)

— 2024-07-26 —

Fedor: 大家好！我是俄罗斯人，我正在做一个小调查：  你们使用哪种 VPN？ 你们是不是觉得在 Telegram 中使用 VPN 更方便吗？

gavin: 走的trojan 协CN2网络，普通的vpn在大陆是不好用的 (reply to 43098)

He: 有那么一种可能没 就是 一般写的合约都能接收到 jetton Notification ，然后发起请求的时候携带的 gas 很少，会不会就会影响到 自己的合约， 我检查 区块链浏览器发现 一般只要一个合约有那么一点余额，就会有很多奇怪的地址给你发乱七八糟的nft和jetton (reply to 43096)

Alfred: 你可以写对 Jetton Notification 怎么处理，正常情况下也不会消耗自己合约的 Ton，forward fee 已经支付过了，没有逻辑处理就没有 compute fee

Chaincode: 是要雇人吗 (reply to 42886)

uupp $ZAI: 哪里可以购买telegram stars ？ 可以用Usdt兑换吗？

He: 那请教一个 当一个合约很久没有执行了 如何确定合约缺多少  storage fee？ (reply to 43105)

老高: 片段那里可以买 (reply to 43117)

Ton: 我写了一个可以一次性分发254个地址不同金额TON的机器人，有需要用的@tontoolsforyoubot

deng: Keyboard Button Mini Apps点开时没有初始化数据,有人遇到过么

deng: menu_button  里的就可以

deng: 这大概是个啥问题啊

Sun: 机器人发出来玩一下

deng: 这两位置均能拿到数据

IIIllll: 大佬们, liteserver 节点在哪儿能买?

IIIllll: 节点服务, 不是自建节点, 这节点建起来太贵了

Louis: 还真是构图问题

Louis: 我自己写完了，A合约完全没调用，全是B合约发送的消息

timi: 手机版的钱包怎么切换到testnet吗

Chaincode: 本来就拿不到，建议抛出消息让用户再点就能拿到 (reply to 43124)

deng: 那这个按钮在这岂不是很鸡肋

deng: 我是想他直接点这个,拿到数据然后做登录用的

Louis: 我做到了

jay: 高负载钱包？ 貌似 V5 默认支持高负载 (reply to 43122)

Ton: 写了一个分发合约，v5还在测试阶段啊 (reply to 43143)

Alfred: 不是很好确认，使用 tonkeeper 发起时，会有 simulation，可以知道 gas 够不够 (reply to 43118)

Navy | Ton.AI: 请教一下，TG mini app 上怎么获取 用户的 设备id 和 IP？

X RAY 🦴️️️️: 有团队招前端的吗，最好是ton方向的

He: 😂，还要考虑gas 问题，真叫人头大，有那种 gas 收取的最佳示例么，比如合约的一个方法 到底会使用多少gas 目前对 gas 使用 概念 太模糊 (reply to 43145)

Ник🦴: I'm a military man from Ukraine We don’t have a water We don't have a roof over our heads If anyone has the opportunity to help, I will be very grateful  5168745021947871

Ник🦴: 🙏🏻

Logan 🐯: 为啥tg的sdk拿不到用户头像

Chirs: 我想进行ton connect，但是返回到上一个页面再重新进入就会出现这个问题：Cannot define multiple custom elements with the same tag name，我该怎么解决

wikig: 你是不是重复初始化了tonconnectui (reply to 43168)

Chirs: 是的

wikig: 那确实会爆炸

Chirs: 但是怎么避免重复初始化

Chirs: 那需要怎么解决呢

wikig: 首先，你是写原生还是写的ract

Chirs: vue

wikig: 理论上呢，可以根据tonConnectUI.connected  进行判别

wikig: 但是吧，如果是原生的话，可能要注意版本  因为我提的这个issues好像他们还没看  https://github.com/ton-connect/sdk/issues/158

wikig: 4月提的，一个季度了还没修呢闹麻了

Logan 🐯: 为啥tg的sdk拿不到用户头像

deng: Keyboard Button Mini Apps点开web_app链接,拿不到initData,也是无语

sunyoki: 青椒一下， 智能合约写入调用， ton 数量必须要传的吗

sunyoki: gas费用

fuck eth: 测试环境不给创建bot咋搞

IIIllll: 垃圾Bot注册多了, 离封号一步之遥

Logan 🐯: 为啥tg的sdk拿不到用户头像

Logan 🐯: who can help me

wikig: 没试过诶，但是我记得头像好像，不在initdata里 (reply to 43197)

Logan 🐯: 没有

Logan 🐯: 奇怪

wikig: 从附件菜单启动，是不是用的不是initdata (reply to 43203)

wikig: 啊？Java还真是有点少见了再这块。好像JAVA的SDK都没几个 (reply to 43205)

Logan 🐯: 用node写好 java调api就可以了

Logan 🐯: node也可以

wikig: 这套逻辑赞同hhhh (reply to 43210)

wikig: 大不了就缝合怪，美其名曰 模块化

wikig: 然后做进程间通信

wikig: 或者本地网络通信

gavin: 不要用java

gavin: java不适合web3…

wikig: 但你可以把发交易整个整合到你的后端服务作为一个子服务

wikig: 这样相当于保持了你后端服务的完整性、一体性。省的前端用户私自篡改数据

gavin: I can (reply to 43198)

gavin: 我告诉你们 取头像不要用tg mini apu

gavin: 你都有用户的tg id

gavin: 直接用tg bot api 用tg user id 取就完事

Logan 🐯: 那调啥去查头像

Logan 🐯: 没找到这个api 好像都是发送消息的 (reply to 43237)

wikig: https://stackoverflow.com/questions/74416222/how-to-get-telegram-user-profile-photo-by-user-id-with-aiogram-v2  https://core.telegram.org/constructor/userProfilePhoto (reply to 43240)

wikig: 有是有，至于能不能掉或者有没有被telegram-bot-nodejs封装，就另说了

ngn: 哪里找ton的rpc node?有没有swift/kotlin/java的实现.

Logan 🐯: 牛啊 (reply to 43242)

wikig: 好像toncenter 有提供 rpc？ (reply to 43246)

a: 用node写个api服务 java去掉 (reply to 43236)

ngn: 这个.send也得发送网络请求吧

ngn: 刚开始看, ton这rpc怎么还分好几种的样子.

wikig: 各家规范有别 (reply to 43255)

Logan 🐯: 用调用另一个合约的get方法

Logan 🐯: 再合约里

elon: tonkeeper w5版本的钱包有人使用过么

Jerry: 想问大家一个问题，TON 转账是可以用COM 加密吗？

Jerry: commons 可以用加密吗？

gavin: 备注加密？

Danceinhell: 群里有做项目宣发的么

sunyoki: 有确认次数吗

Yang: MyTonWallet 轉帳有這功能 (reply to 43273)

sunyoki: 大佬们， 合约交易， 有没有这个确认次数🤣

Jerry: 又来是这样，感谢 (reply to 43277)

gavin: 推出W5智能钱包：无Gas交易现已在TON上线  TON核心团队与Tonkeeper合作推出了W5智能钱包，可在TON上实现无Gas交易。Toncoin不再是促进支付的必需品，大大降低了进入TON的门槛。现在，您可以在发送USDt时使用USDt支付Gas费，在发送NOT时使用NOT支付Gas费。  无Gas功能现已在Tonkeeper上针对部分资产上线，并将很快登陆TON空间和MyTonWallet。享受多交易功能，最多可同时进行255次转账等。使用W5，管理您的TON资产就像在Telegram上发短信一样简单——了解更多信息。 (forwarded from Ton中文频道)

gavin: 都支持无Gas交易了

wikig: 理论上当然可以。直接用传统的对称、非对称加密不就好了 (reply to 43273)

wikig: v5其实提出来到现在快满一年了。  只是他们的battery一直推不出去（毕竟天然账户抽象，GSN还是好做的 (reply to 43283)

ETON: 各位好，TON的反弹消息处理有没有gas消耗限制，有没有什么操作限制

gavin: 好像就这个限制

ETON: 感谢，这边完全在224bits限制内， 不能操作字典，感觉有gas限制 (reply to 43287)

Gala: 请问各位大佬，Ton FunC合约可以实现主链币和jetton币的批量转账吗？

kevin: 批量 swap 可以做到的 (reply to 43294)

Gala: 多谢大佬，请问有代码可以参考吗

User<6728625002>: 卖 vpn 每月 15 元，90 岁

Gala: 是不是用这两个就可以实现主链币和jetton币的批量转账 (reply to 43305)

c: 有人知道 telegram stars 支付 付到哪里去了嘛

事事顺心: 我知道 (reply to 43308)

c: 我自己调用 实现了telegram  stars 支付 有大佬知道这个钱付到哪里去了嘛 我机器人对应下的账户没有收到钱

Darren ETH: t.me/muskempire_bot/game?startapp=hero839955246  跪求++朋友，用Ton小程序來扮演Musk，需要朋友才能再升級QQ  💸 +5k 用連結會有分享獎勵 💵 如果有 Telegram Premium，會再多25k

yiii: 请教一下tg小程序怎么使用真机调试

Howard: 🎉 Tact 1.4.1 已經在 NPM 上發布了!  🐞 我們修復了 TON 開發者和 TOL 黑客馬拉松參與者報告的大量 bug。  ❤️‍🔥 非常感謝你們的寶貴反饋！擁有如此活躍的 Tacticians 社區對我們意義重大。  🍳 現在 bug 已經被消滅，我們將添加更多令人興奮的新功能（並不可避免地會引入一些新 bug）。Tact 1.5.0 的材料已經從冰箱裡拿出來，準備下鍋了。  — Tact 團隊  ♨️ @tact_kitchen

— 2024-07-27 —

Sun: 这种情况，球球大佬给我看看

Sun: https://testnet.tonviewer.com/transaction/63200fd5f578c8a568f7d79e0a4fa97b3d3e1a669d38b863bbf6f8252e3ac005

Sun: 这里面有没有写错呀。

User<5183898074>: ton小程序可以不用接入后端直接调用ton合约吗

0x7c26: 我觉得应该可以 (reply to 43376)

enpitsulin: rpc查数据频率太高的话体验不好

Ton: op 不识别吧 (reply to 43366)

Sun: 这里不是识别了么 (reply to 43381)

Sun: 你们有什么标准测试代币吗？转一点给我。0QAdV3YqhXWMhNgQXuWgibQGo1Y9Dv_v_0gaoP_lDXLcAvxB

Ton: 合约里有识别码 (reply to 43382)

Sun: 这是我领取的代币，合约并没有来源。

Sun: 你有测试代币吗？能给我发几个我想测试一下。

eqasw: 我web端连接钱包为啥是2e2e2e

Louis: 怎么回事

Louis: 没事了 网络问题

壮壮: 大家好  有使用tonConnectUI 接入交易的吗

壮壮: 怎么登录测试钱包

Logan 🐯: tg小程序怎么重定向

壮壮: 大神们  怎么用测试钱包测试呀

壮壮: 使用 tonConnectUI登陆的钱包好似都是正式的

Logan 🐯: tg小程序怎么重定向啊

Leon: 求问，大家有遇到过dapp里connect button突然不见了的问题吗

Graham: 请问各位，https://docs.tganalytics.xyz/sdk 按照流程注册了 Data Chief 又接入了 Api

Graham: 数据回传没有问题，但数据后台应该在哪里看呢

Gala: 请问Transactions tree有限制吗，最大可以是几

User<5183898074>: tact的ramdon()可以被攻破吗

Leon: 是被ban掉了么 (reply to 43447)

Gala: 请问调用合约时报这个，怎么办：Error: Deployer sender does not support bounce

— 2024-07-28 —

Sun: 大佬有ton转移代币的js代码吗？

Sun: 这里写的有问题吗？转移一个标准代币

Sun: 这里面有没有写错呀。 (forwarded from Sun)

ELE: 求问大佬们 哪个交易所ton质押收益率最好

Howard: StormTrade, Tradoor, Evaa 都有其他收益 at Toncoin  LSDs: TonStakers.com, TonStake.com, Bemo Finance, Hipo Finance (reply to 43516)

cj: 转账ton给对方的时候，可以加额外数据 上链吗

Degen: Nft 支持3D格式吗

wiwi: 你用什麼套件啊? (reply to 43510)

wiwi: https://github.com/ton-org/ton 用這個的話寫法跟你截圖的不一樣才對

Graham: 请问有大大知道吗 (reply to 43435)

c: 有人用过ton4j嘛

Sun-J: 有没有人用java写的  ton4j  各位大佬

c: 我也想找java的  这个无从下手 有写过demo的大佬嘛

Sun-J: 你试过没有 (reply to 43534)

Sun-J: 我写了两个版本

wiwi: ton4j 的 github 都有提供範例

Sun-J: 官网都是  生成的钱包  我想从已有助词器 链接钱包 并且发送交易 (reply to 43538)

wiwi: https://github.com/neodix42/ton4j/blob/351b9d80e170fb59ef3dbc8a7d4de472ac3ff905/utils/src/main/java/org/ton/java/utils/Utils.java#L583  generateSignatureKeyPairFromSeed (reply to 43539)

wiwi: 有 keyPair 之後就看你要那一種 wallet  https://github.com/neodix42/ton4j/blob/main/smartcontract/README.md

Sun-J: 我就是这样设置的😂  但是获取到的 并不是我的钱包

sphiNxr: wallet p2p 验证随便填的内容导致年龄不合规，请问还能撤回重新填吗

wiwi: 這很奇怪，你註記詞丟進 tonkeeper 之類的生出來的地址跟你程式的不同嗎？ (reply to 43543)

Sun-J: 并不一样

Sun-J: 另一位也是一样的问题

wiwi: 太詭異了，可能要追看看他實作是不是有問題

c: 我也这样 从新生成了一个新钱包

c: 而且 助记词 检验也通过了

gavin: 检查下你的助剂词是不是有多余空格哦 (reply to 43543)

gavin: wallet id好像也不对 有一个便宜量的

lee: 请问有没有质押jetton的合约 参考下

wikig: 要不检查一下生成address的wallet version (reply to 43562)

Levi: ton-contract-executor  怎么获取ton的余额

Sun-J: 这是V4版本的钱包，go代码能正确获取，只是交易实在不稳定 (reply to 43597)

— 2024-07-29 —

Jackie: 在TG中能设置钱包使用TESTNET吗？要是可以，如何设置

Jackie: 在TG中能设置钱包使用TESTNET吗？要是可以，如何设置，使用JS调起支付的时候，如果使用TESTNET (reply to 43597)

Jackie: https://test.tonspay.top/test.html

壮壮: 我也需要这个问题  想用testnet 测试

壮壮: 一直调起的事正式的钱包

gavin: 使用tonkeeper就行了

gavin: tonkeeper可以切testnet

gavin: telegram wallet 的切不了

壮壮: 大佬能加个好友嘛

Jackie: 这样行为会不会和TG钱包不一致啊 (reply to 43628)

gavin: 同样一套助记词就是一样的啊 (reply to 43631)

gavin: 不过tg的是托管钱包肯定不一样

gavin: ton空间的应该是可以的

壮壮: 那就是测试也要用真实b去交易最稳妥咯

Jackie: 理论上是这样吧，毕竟交互上还是有点区别的 (reply to 43635)

壮壮: 你这边也是支付tg的钱包做转入转出嘛

Jackie: 试了下，用TONKEEPER可以的，貌似这样测试起来更方便些 (reply to 43637)

Jackie: 直接使用CHROM做页面开发，然后调起来TONKEEPER做支付 (reply to 43637)

Jackie: 就是不知道这样在TG的MINIAPP里会不会有问题 (reply to 43637)

壮壮: 真是环境走一走吧

壮壮: 我流程还没摸清楚

壮壮: 前辈带带

Jackie: 前辈忙着会所嫩模呢 (reply to 43644)

gavin: 在送外卖了 (reply to 43646)

Jackie: https://pay.wallet.tg/看这个文档 (reply to 43647)

壮壮: tonkeeper 找回的测试钱包没有b

壮壮: https://wallet.ton.org/?testnet=true   这测试给了5个呀

Noah: Hey，请问Ton团队有官方的人在这里回答问题吗？

壮壮: 应该没有 我都没看到。只能问前辈们

gavin: 群主就是 (reply to 43655)

cj: 转账ton给对方的时候，可以加额外数据 上链吗

壮壮: 有个commit

cj: 代码里是哪个字段

cj: 这两个吗

壮壮: BUSHI

gavin: 代码里你用wallet contract 比较方便

gavin: 不然自己构造payload很麻烦

壮壮: 大佬 我用tonConnectUI  感觉就是2句话 就能交易吗 (reply to 43668)

gavin: 对 (reply to 43669)

cj: 别用tonConnectUI ,用wallet contract那样写是吗 (reply to 43667)

壮壮: 我钱包上面写测试中这是啥意思。 我这个钱包是测试钱包吗

gavin: 意思是这个是一个测试功能。。。 (reply to 43674)

壮壮: 啊啊啊

壮壮: 有点搞不懂这个交易了

User<6086637958>: 你的成分太纯了

User<6086637958>: 先去看一遍官方教程吧

Noah: 群里有没有做TON 应用的外包团队呀

one: 有没有兄弟转入wallet u 被暂停了啊

one: 怎么处理啊

one: 验证都做了说要等12 小时，但是这也没到帐啊

Yang: @wallet 有客服的，請聯繫客服 (reply to 43685)

Sun: 有大佬尝试过使用vue 集成@tonconnect/sdk 链接钱包和转移Jetton吗？

Sun: ``test``

enpitsulin: 不是哥们瞎发啥文件呢 直接发代码片段不就好了

Yang: 我刪了，為了大家的安全

Sun: 大佬看看，代码是不是写错了，转移Jetton

one: @wallet_supportbot是这个客服吗 (reply to 43691)

Sun: 好难受哦

Yang: 是 (reply to 43700)

one: 好的，谢谢

wikig: @wallet好像没有testnet支持（？至少我好像没见到 (reply to 43623)

Yang: @wallet 沒有測試網

Sun: https://testnet.tonviewer.com/transaction/da1be228dde9058da33255e48e29307469f101b54a92776c6695c22d3a6d6c3f 这种失败如何排查呢？

c: 大哥 有谁遇到这个问题嘛 助记词 拿不到自己的钱包地址

c: 拿到都是一个全新的钱包地址了

wikig: 还是上面说的，有检查address生成对应的wallet版本吗？ v3r2 ? v4r2? (reply to 43715)

c: v4r2

c: 没错的

Jackie: game的话，有见过横屏的吗？能不能做横屏 (reply to 43716)

Howard: 👍🏾 (reply to 43655)

J: 这个提交的是不是根本不会通过啊

J: ton 尽然是去中心化的区块链，搞个 token 还要要官方审核，不然就各种贴标签，什么玩意啊

Howard: exit code 65535 在你的 output file 裡面的 TS file 應該有 (reply to 43712)

Howard: TonKeeper 負責展示這些，主要他們目前是市占率最高的錢包廠商。大家已經以他們為主當作共識了。  相當於 TON Blockchain 上的 MetaMask (reply to 43728)

Crypto 🔑🐦‍⬛️: ton 生态真是搞笑，打着去中心化的幌子，尽干中心化的事，没有 ton 的支持，没有 tg 的支持，根本做不起来。发个一个 token 都要所谓的中心化审核，还搞什么 defi 。对外宣传都是把 tg 创始人当神一下，垃圾生态，各位开发者还是切换到其他生态，及时止损吧。

enpitsulin: 有点好奇你们发过代币吗？别的链想要在钱包里显示标签不是都要审核？

enpitsulin: 就是去 github 提 issue 这个事确实有点原始了，应该有其他官方渠道才对

enpitsulin: 什么杂七杂八的肯定一律默认 scam token 先

shi: 请教个问题，怎么从tx里得到blocknumber，我发现tx里只有Logical time？

MEW: 都是这种的 (reply to 43734)

MEW: 唯独65535不会被输出呢 (reply to 43729)

enpitsulin: 一般项目方直接找市场反馈给点资料肯定比这种快 (reply to 43742)

MEW: 所有钱包list都是这种的

gavin: 65535 我猜就是op不match (reply to 43743)

gavin: package 传错了

Nolan: 可以自己搞个钱包，给自己贴个天下第一的标签，哈哈

MEW: 官网文档是这么写的，但不match还有个报错是130 (reply to 43746)

Nolan: ton生态的用户，新手居多，谨慎一点也是一种保护，互相理解，共同进步

wikig: 虽然但是，我的理解是这块防scam的设计不是toncenter还是tonviwer那边设的吗？ (reply to 43731)

User<7103317108>: 当然。是的。 TON 是世界上最快的区块链，但对此还是要小心谨慎。 (reply to 43751)

Nolan: 这种设计在其他链钱包里也是有的，所以应该不构成一个喷点，啊哈哈

wikig: 额，这个....我好像没怎么见过，咋说。 (reply to 43755)

Nolan: 以前tokenpoket里面上个币都要付费的，链是去中心化，钱包本来很多东西都是中心化的 (reply to 43759)

Nolan: 高风险的token还有risk标签

Nolan: 所以说他说的东西不构成喷ton的点，实在不行自己搞个钱包，妥妥的想怎么上币怎么上币

wikig: TP啊.....那玩意儿真有人用吗.....🫠 (reply to 43760)

Nolan: 以前很火

Nolan: 现在不行了而已吧

wikig: 主流去中心化wallet像是metamask或phantom哪怕是OKEX好像也....不至于玩出这操作

wikig: 不过吧，这也不能怪@wallet或者tonkeeper？

Nolan: 因为一些政策和他们自己的安全问题，很多人不用了，3年前也算是钱包里的第一梯队

wikig: 好像从toncenter那边拿到的数据就已经被替换修饰成scame了

Pradeep: How to create stake transaction object for tonstakers liquid staking protocol which accepts wallet address and amount

Nolan: 如果这个币是scam，放在wallet里面如果有人被骗，有人肯定会找wallet维权

wikig: 我倒是觉得他们关心的不是“放在”wallet里 (reply to 43773)

wikig: 而是哪怕你拿到代币地址，去toncenter或者tonviwer上查都是SCAM

wikig: 又或者tonconnectuI吊起钱包进行交易estimate的时候显示scame

Nolan: 意思是不是scam也被打上了scam的标签？

Nolan: 我随意发的token也没见有这个标签😂

wiwi: 兩回事啊，你隨便都能發 token 在 ton 上面又沒人管你。 送 github 也只是加入到顯示列表，實際上這東西就是因為最多人用就變成這樣了

Crypto 🔑🐦‍⬛️: stonfi 上也会被贴标签，所以这么看到这些服务的数据来源都是一家，这就很中心化了。 (reply to 43775)

wikig: 有点疑罪从有逻辑

wikig: 我印象里好像是的，有人吐槽过这事儿 (reply to 43777)

Nolan: 他们本来就走的很近，数据一起的很正常 (reply to 43781)

Nolan: 额，这就有点奇怪了，最多就是个unverified，也不至于scam (reply to 43783)

Crypto 🔑🐦‍⬛️: 是走的近，还是就都是一个团队做的，那就不得而知了 (reply to 43784)

wikig: 所以对发币方就会变成一个，头疼的闭环，他们得自证好像 (reply to 43784)

enpitsulin: 钱包本来就是很中心化的基础设施了

wikig: 倒还好吧，毕竟大部分web3钱包像啥metamask都是开源的（？ (reply to 43789)

Ton: 他这个scam怎么判断啊

Ton: 我想用合约给别人发ton做推广还被标记为scam

wikig: 好像是需要主动提审来着

Crypto 🔑🐦‍⬛️: 还有这种事，他们狠起来连自己都不放过吗 (reply to 43792)

Ton: 可能是我有comment吧

Ton: 不太懂

Crypto 🔑🐦‍⬛️: 那也不应该啊 (reply to 43795)

Ton: 挺无语的

wikig: 确实可能 (reply to 43795)

wikig: 也有可能是小额

wikig: 我现在小额测试也是scam

Ton: 无语了

Ton: 本来开开心心的以为又多个宣传渠道

wikig: hhhh

wikig: 那其实是不是，你只用对你的合约做个备案就行了（

Ton: 咋备案

Ton: verify？

Ton: 是个思路

Ton: ！

Ton: 我可以去试试

wikig: 我记得official是不是有个仓库可以提交备案？

Ton: 啥意思

Ton: 没听过这个

Ton: 还有备案的说法吗

fun🦴: 我一直以为tg 有用户的注册时间可以查询, 那些发币的小程序都用这个数据空投, 一查才发现,全都是用用户id预测出来的????

Ton: 是的

Ton: 没有查询注册用户时间的借口

wikig: 差不多是这个意思？只是说误差比较大就是了，毕竟注册行为是离散的 (reply to 43818)

fun🦴: 谁有data.json

fun🦴: 难怪不同小程序,给我计算的年份不一样.

Sun-J: 来给ton4j玩家避坑了 (reply to 43715)

c: 咋说 (reply to 43825)

Sun-J: 这个walletid 确实不对

Sun-J: 话说别的语言  怎么不用传这玩意

Ton: TG用bot通过id 批量给用户发消息违规吗

wikig: 前提是用户subscribe了这个bot才能收到这个消息吧 (reply to 43830)

Sun-J: 有被ban的可能性  要有间隔 (reply to 43830)

Ton: 不用

Ton: 间隔多久呢 (reply to 43832)

Sun-J: 用户删除机器人聊天 就收不到了 (reply to 43833)

Ton: 一次性发多少不会被ban

Sun-J: 我间隔了1秒 (reply to 43835)

Ton: 一次发一个？

Ton: 至少能看到一条信息呀

Sun-J: 是  TG就不建议  这样发广告

Ton: 如果有便宜的宣传渠道

Ton: 谁愿意这样呢

Ton: 😣

wikig: ?用的吧，我之前给为点击该bot的用户id发消息，似乎是收不到的 (reply to 43833)

Ton: 应该可以的吧。。。你把你id 给我，晚点我发你个信息

fun🦴: 看配置, 用户配置了不允许陌生人私聊之类的应该是没法发送的, 没配置的话,不确定.

wikig: 我之前试过，尝试通过bot来做陌生人红包的操作 (reply to 43846)

wikig: 然后发现，消息到达不了

Sun-J: 不行  没有点过你的机器人 直接报错 (reply to 43846)

wikig: 除非该用户曾经/start过该bot

Ton: 哦哦

Ton: 就是用过才行？

wikig: 是的

Ton: 晚点我再试试

wikig: 所以只能作为公告下发

Sun-J: 用过且不能删除和机器人聊天

wikig: 恐怕作为获客手段是不太行的

wikig: 因为用户收不到

Ton: 🙂‍↕️

Ton: 路又少了一条

Ton: 大家都怎么宣发的

wikig: 可以考虑telegram的adv投放？ (reply to 43862)

wikig: 效果好不好就不知道了

Ton: 屁用没有

wikig: 啊这

Ton: 审核都没人

wikig: 那确实有点草台了

Ton: 充了20TON，还退不回来

Ton: 主要没人审核

Ton: 有路子介绍介绍呀 生态要发展大家才能赚到钱呀

Crypto 🔑🐦‍⬛️: 你是要获取新用户是吧

Ton: 对

Ton: 新项目，要用户

Crypto 🔑🐦‍⬛️: 你现在用户量多少了

Ton: 200多😭

Ton: 还没开始宣传

Gala: 这条链如何通过交易哈希查询块高🥹

国际城品茶: 高手们，有没有python 的ton转账demo

国际城品茶: 网上看了一堆资料，总是不成功

wikig: 直接发群里让群里帮帮忙呗嘿嘿 (reply to 43876)

fun🦴: 做好邀请机制，发群里 (reply to 43884)

fun🦴: 一堆人帮你推

gavin: 🤩🤩🤩大家一起发财

赵子龙: 有大神知道这个怎么玩吗

Ton: 有邀请机制啊

Ton: 假的 (reply to 43890)

Ton: 假的nft

Ton: https://www.tonflix.xyz?ref=185  大家看看提提意见

Ton: 🤓

赵子龙: 日，吃了我100多个Ton

c: 有大佬知道 java怎么连ton 链上的合约嘛

Ton: 学费学费 (reply to 43896)

Nolan: 找合作方导流吧，加点积分裂变，几十万用户妥妥的

Ton: 我当时好像也买了一个，日

Nolan: tongift可以用ton 发红包 (reply to 43891)

Ton: 在进行了，有点贵 (reply to 43900)

Ton: 在对接了 (reply to 43902)

Ton: 不便宜只能说

eqasw: 你还上架谷歌商店了？

Ton: 没啊

eqasw: 你这是啥功能，视频站吗

Ton: Watch to earn呀

Gala: 好像找到了seqno (reply to 43880)

Gala: 太神奇了这条链🙈

Ton: 这个很简单啊 (reply to 43882)

Ton: 官方就有

wiwi: seqno 是 nonce 不是 block number (reply to 43910)

eqasw: 你这个没搞tg小程序吗

eqasw: 直接推h5？

Ton: 有bot

eqasw: bot效果咋样

国际城品茶: 能帮忙发个链接吗 (reply to 43913)

Ton: 还行

Ton: 准备宣传

Ton: 当时主要不会TMA 测试

Gala: 尴尬了 (reply to 43915)

Gala: 😅

国际城品茶: 我在chatgpt和谷歌都搜了一圈，都跑不通

eqasw: 你这个好丝滑阿

eqasw: 视频咋加载这么快

Ton: https://docs.ton.org/develop/dapps/cookbook (reply to 43926)

Gala: 请问大佬 block number 从哪个接口可以获取🥹，"mc_block_seqno吗🥹 (reply to 43915)

Ton: 用cdn 啊 (reply to 43928)

eqasw: cf吗

国际城品茶: github又没有demo (reply to 43929)

国际城品茶: 官网没有demo吧

Ton: 什么叫demo，不就是实现转账的功能吗

Ton: 安装几个库，复制粘贴一下

deng: 一直让登录？ (reply to 43894)

Gala: "mc_block_seqno": 39317060

Ton: 有点问题

Ton: 在修改了 (reply to 43937)

Gala: 这个吗🥹 (reply to 43940)

deng: 有机器人瞧瞧么

Ton: @TonflixOfficial_bot

eqasw: 你还做了pwa

eqasw: 准备的很充足阿

国际城品茶: 是哦，就是没找到，刚入门ton开发 (reply to 43935)

Ton: 我发你链接了啊，

Ton: 官方文件很齐全的

Ton: 更新了很多

Ton: TWA没做好 (reply to 43946)

Ton: 刚开始不会TWA测试

wikig: 直接把bot share出来呗 (reply to 43918)

Ton: 就这个 (reply to 43945)

deng: 不是很顺畅

wikig: (真不考虑，bot里面用webapp指向？

Ton: 以后还要更新用id 做标志的

deng: 进去就报错

国际城品茶: 这个吗 (reply to 43949)

Ton: 今天刚开始，还要优化

Ton: 对啊 (reply to 43962)

Ton: 这不就是嘛

I16000: Hello,does anybody knows,how convert hex code of contract like b5eee to cell in FunC contract,i need deploy contract from another contract

国际城品茶: 嗯，如果是自定义币种呢

Ton: 那是Jetton了 (reply to 43967)

Ton: 你自己去摸索

Ton: 文档里也有的

国际城品茶: 摸索了两天了，用chatgpt和google的例子跑不通

国际城品茶: 哈哈

国际城品茶: 头疼

Ton: 网上的ton的东西很少

Ton: ChatGPT帮不上忙

Ton: 只能看文档

Ton: 自己摸索

wiwi: 少就算了，還東錯西錯... 無語

Ton: Func搞起来更痛苦

国际城品茶: 这个获取到的stack总是为空

sua: 各位大佬有ton4j头疼的吗，生成的地址和tonkeeper对不上😂

国际城品茶: 我和你一样 (reply to 43982)

Ton: 上面不是有人说了吗 (reply to 43982)

Ton: 什么id不对？

sua: walletId

sua: 这个id吗

sua: 这个我知道是什么意思   这个是子钱包的意思

国际城品茶: 我用tonkeeper助记词，生成的钱包地址对不上

Ton: 不知道，你自己搜索一下，不会java

Ton: 网络对吗 (reply to 43990)

国际城品茶: 对

Ton: Bounceable 呢

sua: 其他链都是私钥对应地址一对一 他这个是助记词和私钥一对一，然后对应多个walletid

Nolan: 没做好就先合作，不然花了钱留存太低也浪费，加油 (reply to 43956)

国际城品茶: 是不是钱包版本错了

Ton: 感谢！ (reply to 43996)

sua: V4R2吗

sua: 怎么生成都跟钱包生成的不一样，真是醉了

sua: 还没到转账 生成地址就卡主了

sua: 有没有大佬指点迷津一下

sua: 想着直接用这个签名交易试试呢

kent: 请问大家，我建了一个 token 名叫 ibUsdt, 然后发了一个交易，转了 1.34 个 ibUsdt，查交易资讯，如 traces，能知道 amount = 1340000000， 但我要怎么知道是 ibUsdt 这个 token，谢谢。 https://testnet.tonviewer.com/transaction/aeadd17a52a4710a2afe986feb89fb3acd08bb9dcb0e1ef4f48f5cc3ab0ae03f?section=trace https://testnet.tonapi.io/v2/traces/rq3RelKkcQoq/phv64n7Os0Iu53LDh709I9cw6sK4D8=

sua: Tonlib这个指定的json文件要一堆的配置。。

sua: 有大佬知道这个json在哪弄的吗

sua: Tonlib节点配置的json

sua: chatgpt给的配置，完全看不懂干啥的

a: walletId = 698983191 + workchain;  你试试 (reply to 44002)

国际城品茶: 我的改成v4r2的钱包版本就对的上了

国际城品茶: 不过获取seqno总是为空

sua: 卧槽，大佬牛逼啊 (reply to 44012)

sua: 这个698983191数字是代表的啥啊

sua: 用这个就对了

sua: 是钱包统一的规范吗

Ton: 在官网文档里我看过这个数字 (reply to 44016)

c: 在哪里看过 如果其他代币呢 就不知道是什么了 (reply to 44019)

sua: 我研究两天地址了 都没找到，早知道早来请教各位大佬了

Ton: 其他代币可以计算出来的 (reply to 44020)

sua: 实例化要求

sua: 大佬知道这个文件在哪获取吗

c: 咋算的 (reply to 44022)

Ton: 。。。

Ton: 官网文档

c: 可以发个链接嘛 (reply to 44027)

c: 这个我发你 我找找 (reply to 44024)

sua: 感谢大佬

c: https://ton-blockchain.github.io/ (reply to 44024)

sua: 上面执行文件这两个文件我找到了，一个Linux一个windows的

sua: 多谢 (reply to 44032)

c: 这两个 挺好找的

sua: 我去试试转账去，感谢

c: 我也在弄

壮壮: 我的ton钱包发起转账就是无法验证

壮壮: 你们遇到过吗

w: 有大哥知道为什么 STON.fi Dex通过get_pool_address获取的pool地址不对吗

gavin: 怎么个不对法？

gavin: 你的入参对么

tot: 大佬们,我要在miniapp中连接钱包应该看哪个文档

w: 好了，破案，要传wallet_addr

wikig: tonconnectUI相关的dev文档 (reply to 44056)

Howard: 咦  65535 好像是超過 opcode 數字、我依稀記得是 Gas Fee 不夠？ (reply to 43743)

Alfred: * op = 0xffffffff means "operation not supported". It is followed by the 64-bit query_id extracted from the original query, and the 32-bit op of the original query. All but the simplest smart contracts should return this error when they receive a query with an unknown op in the range 1 .. 2^31-1. * op = 0xfffffffe means "operation not allowed". It is followed by the 64-bit query_id of the original query, followed by the 32-bit op extracted from the original query.

Alfred: 好像还不是

Alfred: Often you can see the exit code 0xffff (65535 in decimal form). This usually means that the received opcode is unknown to the contract. When writing contracts, this code is set by the developer himself.

Alfred: 这个

Alfred: opcode 不认识，和 0xffffffff 似乎是同一个意思

Ton: 有个问题，如何生成那个t.me的link直接指向我的miniapp呢

gavin: 找@BotFather (reply to 44075)

Ton: 谢！ (reply to 44077)

Howard: 👍🏾👍🏾👍🏾👍🏾

User<7103317108>: This is scam... Hey, scammer! Go away! (reply to 44095)

OK不OK: 哪位兄弟最近有空，能开发mini app的？

— 2024-07-30 —

Chaincode: 要开发mini app？ (reply to 44104)

OK不OK: 是哈 (reply to 44122)

Pangolin: 问一下 ton的admin权限转给0钱包，要什么操作的？

Howard: 0 錢包是什麼意思 (reply to 44125)

Pangolin: 就是不要admin的权限，转给类似黑洞地址

Pangolin: 让jetton合约完全去中心化

User<6086637958>: 0:0000000000000000000000000000000000000000000000000000000000000000

Pangolin: 这个地址，是不是大家都没有私钥的

Pangolin: 相当于黑洞地址

enpitsulin: 别加admin的实现不就好了吗

Asaki: 怎么样在发起一笔 swap 的同时，再发送一笔 msg ?

Asaki: https://tonviewer.com/transaction/dfb81436ecf4a237ef311a0b858184a43280e4543cfbbd8a0540199260249c70?section=trace

Asaki: 有没有大佬解解惑

kevin: https://github.com/ton-blockchain/token-contract/blob/2c13d3ef61ca4288293ad65bf0cfeaed83879b93/ft/jetton-minter.fc#L90 (reply to 44125)

kevin: 同一个 external msg 发送多个 internal msg 即可，比如这种 https://tonviewer.com/transaction/23343ba50c3dfd94900c7b0000a5fdf7cc7a4e98c70ca127a9e6bb7f0a64a601 (reply to 44134)

Asaki: ok，懂了 (reply to 44137)

kevin: tonutills-go里面有 example (reply to 44138)

Pangolin: 这个0地址，是不是假的黑洞地址的

User<6039663848>: 很有可能 (reply to 44142)

Pangolin: 看tonview上还有解锁时间的

Manta: 有人研究过 用合约调用 dudest 创建池子吗

Manta: 有人研究过 用合约调用 dedust 创建池子吗

Mavicas: 大家好

Mavicas: 大佬，哪里有ton  质押的合约示例代码吗？

wiwi: 想請問有沒有 ton testnet 可以領 jetton token 的地方呢? 想測試轉帳相關

c: 有人写过 java ton4j Jetton 转账的功能嘛

壮壮: 各位钱包的私钥在哪里看

Karm: 问一下 Cocos 2d小游戏 TG支持怎么样

condi: 没问题，通过、

condi: tg就是web

Karm: 我的理解 在Webview没有问题 就应该没问题的吧

wikig: 好多都是cocos写的，问题应该不大

Anders: https://t.me/GongDeBot/GongDe?startapp=ref_code_6693829565 Invite you to play an interesting game

eqasw: 和web还是有区别的

Anders: 纯H5，没却别

condi: 是的 (reply to 44174)

壮壮: 可以

eqasw: 区别肯定有的

壮壮: 我现在就是那么做的

壮壮: 但是就是卡在钱包上了

condi: 我之前写过别的 电报app，没区别

eqasw: 自己写就知道了，你把一些h5网站直接放上去，有些js库不兼容

wikig: 如果你用webapp的操作的话，那确实没区别 (reply to 44181)

condi: mini app，都是直接丢个url上去，又不是微信小程序那种

wikig: 如果你是minigame的话

Anders: https://github.com/CocosTechLabs/gongde

wikig: 那可说不准

eqasw: 他有些js库直接不兼容

Hooray: 有大佬知道TG有官方的小游戏方面联盟吗

Anders: 需要什么样的联盟？

Anders: 技术？运营？

wikig: 你是说，Cocos不兼容还是？ (reply to 44191)

Hooray: 有开发者和官方沟通渠道之类的

eqasw: h5的 (reply to 44195)

eqasw: cocos没写过，不清楚

Anders: 这个开源项目，你们可以参考一下。 (reply to 44189)

壮壮: 请问各位大佬 你们怎么做的用户转账啊

Hooray: 大佬你知道有类似的吗？ (reply to 44194)

壮壮: 用户购买总不能还要设置私钥什么的吧

壮壮: 真的奇怪

wikig: 这个到还真没遇见过诶，要不举个例子？ (reply to 44197)

Anders: https://t.me/gamefortg

Jackie: 同问。。 (reply to 44159)

wikig: 你是指，telegram star还是就tonconnect (reply to 44202)

eqasw: 我前两天不是发了个问题吗，吊起钱包直接是2

eqasw: 直接是2e2e2e

Anders: 搞个群

壮壮: tonconnect (reply to 44207)

eqasw: 我把一些js库去掉，就能正常吊起了

eqasw: 具体是哪个js库和tg的sdk冲突我没仔细去排查

壮壮: 我现在一发起转账就是无法验证交易

wikig: tonconnect 的话，如果用户没有ton钱包...那确实会让用户生成私钥 (reply to 44211)

Jackie: 多充点，我还感觉可能 是余额太低 (reply to 44214)

Anders: Cocos 游戏接入Ton

Anders: https://github.com/CocosTechLabs/game-engines-sdk

wikig: 额，js 库 和 什么的SDK？  是指原有的一些类库和telegram-webapp.js sdk引入包冲突吗？ (reply to 44213)

壮壮: 每个用户都生成一个私钥吗 (reply to 44215)

壮壮: 可是我调起的事钱包集合呀。 用户可以选择自己的有的

wikig: 是的，因为tonconnect吊的是@wallet的ton space ，去中心化的 (reply to 44220)

eqasw: 和tg的ui的sdk冲突 (reply to 44219)

wikig: 所以上面说了，如果用户没有钱包的话的前提 (reply to 44221)

wikig: 哦那没事了，那就是纯粹的包冲突。  minigame或者miniapp不引tg的ui库或者webapp.js也没啥大影响我的理解是 (reply to 44223)

壮壮: 我现在就是引用了 tg ui库

壮壮: 用的这个玩意 TON_CONNECT_UI

eqasw: 这个库很容易和其他js

eqasw: 冲突

壮壮: 感觉这个库是最简单

eqasw: 上次排查我半天，后面我把引入的js全部去掉就没问题了

wikig: 这倒是真的，原生引入倒没啥冲突 (reply to 44228)

壮壮: 用tonweb 吗

壮壮: 里面那些秘钥到底哪里来的

壮壮: 我只是想在游戏里面 让用户给我指定的地址转账

wikig: 原生引入tonconnectui 我的意思是 (reply to 44233)

Jackie: minigame，没地方可以设置URL啊， (reply to 44225)

壮壮: 我现在就只引入了它  但是交易不了 (reply to 44236)

wikig: 我咋记得docs写有 (reply to 44237)

wikig: 啊？为啥 (reply to 44238)

壮壮: tonconnectui  发起转账 就那么两句话

壮壮: 我完全照搬的。调起到wallet的时候就是无法验证交易

wikig: 啊这

wikig: 无法验证交易是吧

wikig: 多半是payload组装的锅

壮壮: 是啊。 给我折腾的头大了

壮壮: 可是我没组装呀

wikig: 也可能是timeout没做限定，然后导致吊起的时候已经超时了

wiwi: 自己部署 jettoken 吧 (reply to 44206)

壮壮: 大佬救我

wiwi: 找不到

wikig: https://test.tonspay.top/test.html (reply to 44247)

壮壮: 我就这么两句话。

wiwi: 這個是送出去，但想要的是能領 jettoken ... (reply to 44252)

eqasw: 你这金额错了

wikig: amount

eqasw: 0.01

wikig: 一眼爆炸

wikig: 记得乘decimal

壮壮: 啊？

壮壮: 例子就是那么写的嘛 我想着少点测试 还不行吗

壮壮: 应该怎么写啊

wikig: amount 改成 10^8 *  0.1 (reply to 44265)

eqasw: 他这个解析boc的库我没找到js的调用，他都是ts

wikig: 考虑换换tonweb的库呗 (reply to 44268)

eqasw: tonweb能实现吗

壮壮: 这是哪里有文档说明的呀 (reply to 44266)

wikig: TON 的精度大小 (reply to 44271)

壮壮: 我擦 还真是

User<7493859481>: miniapp 有没有方法让它最小化?

wikig: 有的 webapp.close 带参数 (reply to 44274)

User<7493859481>: Close方法没参数啊

壮壮: 一下解决我了转账的问题 大佬呀 (reply to 44275)

壮壮: 转账成功 就差查询了

Pangolin: ton正式链上jetton代币名称下面一行黄字【未验证的】要什么处理的

wikig: 诶，可能记错了，我记得.....现在可以做最小化操作的 (reply to 44277)

Mavicas: 各位老师，好，ton jetton  token  质押的合约有可以参考的没有呢？ 感谢ton 这个大家族

lin: 请问 截图是tonview func 源码 .store_dict(storage::pool_code); 我要如何使用ton/core sdk 组装数据， sdk 中的storeDict 和 func 中的 store_dict 使用方法好像不一样

壮壮: 各位大佬 交易完成boc 怎么查询这笔交易

wikig: 解码boc应该能拿到message hash，然后去toncenter或者tonapi查吧 (reply to 44286)

壮壮: 我交易的时候 能带自定义数据进去吧

MEW: storeMaybeRef (reply to 44283)

壮壮: 我想交易的事 把用户订单搞进去 。不然游戏验证了没法发货

lin: 好的 我试试 (reply to 44289)

Jackie: 可以的 (reply to 44288)

wikig: 那可以考虑payload带东西，然后验证。 (reply to 44290)

Jackie: TON交易可以估算GAS吗？ (reply to 44287)

Jackie: TON交易可以估算GAS吗？ (reply to 44294)

wikig: https://github.com/Tonspay/Tonspay-monitor/blob/master/monitor/ton.js (reply to 44294)

wikig: 好像....没见到这个说法 (reply to 44296)

MEW: 可以的 (reply to 44296)

Jackie: 那GAS是钱包自己算的？还是要自己算 (reply to 44298)

wikig: 如果是tonconnectUI，我记得是钱包算的

Jackie: 请问调用的是哪个方法 (reply to 44299)

Jackie: 也就是说如果用这个库，就不用GAS这档子事了 (reply to 44302)

Jackie: 看了下GAS可不便宜

wikig: gas 是不便宜

壮壮: tonconnectUI  那个金额 只能自己手动10^8吗  没用方法转换嘛

wikig: 我倒是记得tonweb也是默认加的

壮壮: 我转了10^8*0.1  还不够手续费

wikig: 可以考虑用tonweb的tonano好像？但是我一般是直接乘的哈哈哈哈 (reply to 44307)

MEW: 问问题最低v50 ton

MEW: 🔞

壮壮: 我换成toweb来写

壮壮: 刚好有那个cocos的例子 直接搬过去

壮壮: https://gongde.forgeheroes.com/api/config  我看他里面这个是配置的收款地址吗

壮壮: tokenRecipient  这玩意是啥

eqasw: tonweb咋转其他币种

壮壮: 币种还要自己转嘛、

eqasw: tonweb咋转usdt

ETON: @dev_rel 有什么方法可以提前计算某个合约方法的手续费, 有相关SDK接口吗，类似web3js的estimateGas？

wikig: 也是构建payload (reply to 44320)

eqasw: 交易感觉用tonweb不好用

eqasw: 但是用他的utils还行

wikig: 确实，是不好用

壮壮: 那用啥

wikig: ton/ton ?

eqasw: 交易我现在是用ui，用tonweb的工具类

Louis: 为什么我用tact写的jetton合约部署到测试网，测试网识别不了是jettonmaster

壮壮: 我现在也是用的tonui

Nolan: 大佬们，有个问题想请教一下，ton这边有个那种不需要gas的签名方法可以去校验钱包的所有权么

wikig: 好像只有tonpoorf (reply to 44331)

MEW: 我现在也是，很奇怪 (reply to 44329)

MEW: 可能是测试网把rescan服务关了

Nolan: 这个有文档可以看看么 (reply to 44332)

MEW: 一堆公开资料，自己研究 (reply to 44321)

MEW: 但我是部署了一个lib code

Nolan: https://docs.ton.org/develop/dapps/ton-connect/sign

MEW: 不过既然not能显示，我这个为啥不能显示

Nolan: 似乎是这个，我研究看看

wikig: https://docs.ton.org/develop/dapps/ton-connect/sign

Jackie: MINAPP代码修改了，没有生效，如何强制刷新？ (reply to 44341)

Jackie: 我找到了 (reply to 44341)

Jackie: 我再试试

wikig: 清缓存呗 (reply to 44343)

Mavicas: doc.ton 需要多看呀，哈哈

Jackie: 现在就是第一步选择了tonkeeper钱包，然后想换另一个钱包，每次都是自动连接到tonkeeper了 (reply to 44346)

壮壮: 断开就好了

User<6106615034>: 创建TelegramApp一直报错误ERROR   有什么好用的办法吗？

wikig: 啊这，你是浏览器版本 (reply to 44348)

wikig: 什么错？ (reply to 44350)

Howard: emulator at TON API? (reply to 44321)

timi: 合约那边生成的abi，有什么工具能生成golang的代码吗

Jackie: 为什么钱包的版本不能显示啊？

Jackie: 而且转0。001过去就一直退回0。0006，是什么原因

kevin: 应该是仅仅 transfer， 没有deploy contract (reply to 44355)

Jackie: 要手动DEPLOY这个合约吗？ (reply to 44358)

a: ..代码要判断

kevin: 是的 (reply to 44359)

Jackie: 那发出转帐的人岂不是要付钱，还要再给免费给人家部署一个合约？

Jackie: 双重支出

wikig: 需要先deploy (reply to 44357)

wikig: 可以用不可退回方式发。 (reply to 44362)

wikig: 但是接收方如果没有deploy，就只能接受一次

Jackie: 这个和普通交易方式有什么区别？ (reply to 44365)

Jackie: 代码上

wikig: 地址类型，可以参见tonweb.utils.address (reply to 44368)

Jackie: 如果已经部署了合约，用这种方式发送是不是会失败

Jackie: 用不可退回的方式

wikig: 不会 (reply to 44370)

Play: 请教一下  有兄弟知道怎么通过ton connect sdk发起USDT支付吗?   有什么参考文档吗?  麻烦告知一下🙏

cj: 用tonConnectUI发交易，这个res有什么作用？返回个boc

壮壮: 验证交易的

cj: 🌝那我用不着吧，怎么没返回个类似交易hash的东西

cj: 代码 (reply to 44377)

Play: 哇  谢谢👍  我看看

User<6106615034>: 这个，我看其他开发者报错换了很多方法，我也是了全不行一直创建不了 (reply to 44352)

Yang: 請問你的 Bot 是收費的嗎？ (reply to 44384)

Yang: 好險沒收費，不然我就....

cj: bot 咋用

Tee: Jetton合约代码有个地方看不明白，谁能帮忙解释下：  JettonMinter.ts 组消息时：

Tee: storeCoins 调用了两次

Tee: jetton-minter.fc解消息时只调用了一次：

Tee: 这里感觉不对称啊

Tee: https://github.com/ton-blockchain/token-contract/tree/main/ft  开源项目中的代码

User<7383996493>: BTC/USDT  LONG  進場/Entry：64700-65300  TP1：66000  TP2：67000  合理建倉，最多可使用總資金的5%！ (forwarded from Tori幣勝信徒|加密趨勢雷達站)

Tee: 谁能帮下我

Suntrider: 有谁实现了BabyJubJub签名验证在合约里？

gavin: 我可以 (reply to 44404)

Tee: 大哥指点下

gavin: 它那个代码确实有bug (reply to 44411)

gavin: https://github.com/ton-community/assets-sdk/blob/main/src/jetton/types/JettonMintMessage.ts#L18  https://github.com/ton-community/assets-sdk/blob/main/src/jetton/contracts/jetton-minter-discoverable.fc#L65  看这个合约代码仓库吧

cj: 为什么这个wallet_address是对方的地址？这个入参不是msg.sender吗

Tee: 好的，感谢 (reply to 44413)

gavin: 这不是要转移给对方吗 (reply to 44418)

gavin: 要计算出对方的jetton 代币地址

cj: 入参msg.sender，这个不是自己吗。为什么生成的是对方的jetton_wallet

cj: 这个入参，不应该填对方的地址吗

Zonkie🦴: 有没老哥有怎么做收款的教程或者实例

cj: 哇 好恶心，和别人的例子代码不一样。

wikig: https://t.me/tondev_zh/38143 (reply to 44425)

壮壮: tg ui调起各个钱包一点不稳定呀

安: 有尝求个批量转账usdt 并且可以附加评论通知的成品 或者代码

安: 有大佬吗

Tee: 这个代码貌似也有问题，ts部分代码 (reply to 44414)

Tee: https://github.com/ton-blockchain/minter-contract  这个是官网上的

Louis: 学习论坛吗，给个链接？ (reply to 44455)

c: 有没有java  jetton 的 demo可以参考下 大佬们

Yang: @toncn_info 這畢竟是官方群組，如果你有建設 TON 生態的心，建議你建立自己的頻道，並到其他地方進行宣傳。  官方技術群組以技術討論為主，你明顯已經違規，還請你下次注意。

User<5183898074>: 为啥部署上链后区块浏览器不会显示这部分属性

frlyh: 现在链上有什么活动吗，交易膨胀了好几倍

Yang: 有嗎 (reply to 44464)

frlyh: 我这打印观察单个区块的交易数量，前段时间单个区块消息数量平均大概在200左右，现在差不多平均800-1000，最近几个小时 (reply to 44465)

frlyh: 还有上3000的突刺，持续了大概3-5个小时。现在看最近20分钟有所下降

MEW: 某项目在刷地址数

User<5183898074>: 这个有人解答一下吗，调用了部署还是没有属性 (reply to 44461)

MEW: 问下tonkeeper的人，我是前几天在testnet部署jetton，显示UNKNOW。今天部署发现直接不能识别类型了 (reply to 44471)

MEW: 原理是他们会rescan一下，可能是这部分服务在升级

User<5183898074>: 对新手开发者太不友好了

MEW: 没有啥是友好的

Howard: 你用哪裡的代碼呀？我看看 (reply to 44329)

jay: 大量bug😂，生产环境用有点担心。 (reply to 43327)

jay: 有项目再发空投。 (reply to 44469)

c: 为什么我用tonui支付成功了 然后收款的钱包又给我退回了

Sun-J: 有没有大佬知道centos7 scl这个源有没有替代产品

Sun-J: 之前的好像都不能用阿

— 2024-07-31 —

发财: 最近你们又开发出了不少小游戏吧

Louis: https://github.com/lly6661/Jetton-Tact (reply to 44480)

deng: 收款的钱包状态不对吧 (reply to 44499)

deng: 直接用收款的钱包在tg里手动转账一笔 (reply to 44499)

壮壮: 交易后的boc 怎么验证呀

User<6907310132>: 你好，很高興見到你。 這是 TON 區塊鏈開發者，我可以開發 Telegram 機器人、迷你應用程式遊戲和智慧合約。 如果您正在尋找開發人員，我們可以合作嗎？

Jackz: 新人是学func还是tact比较好？

User<6907310132>: FunC

Jackz: 好的，谢谢

Tee: 解消息时，load_int 和 preload_int 差别是啥？

gavin: 类似“弹栈” (reply to 44536)

gavin: preload load完了又放回去。。。

大嘴: ton的gas 怎么那么贵

大嘴: 电池怎么充电

发财: 这个如何？

c: 正常的 (reply to 44525)

壮壮: 各位这块验证的逻辑在那有参考呀

deng: 有看到状态？ (reply to 44547)

deng: 去看看交易明细

c: 对的

c: 他是这样的

c: 转过去了

c: 然后又转回来了

deng: 让你看看上面的状态

c: 正常的我现在不在电脑旁边

c: 都是成功的

Howard: 我今天看下 嘻嘻 (reply to 44522)

Mao: 请教个问题，假如我同一时间提交部署两个 item_index 相同的 nft，是如何保证拒绝另一个的？

Tee: () recv_internal(int my_balance, int msg_value, cell in_msg_full, slice in_msg_body) impure {  这个方法中，my_balance是不是账户中ton余额， msg_value是消息中携带的ton数额？

Tee: 是这样理解吗？

gavin: 代码不是很清楚吗 会在402的地方拒绝掉 (reply to 44566)

gavin: 前提是next_item_index 要初始化对

Mao: 如果两个请求同时发出，是不是第一个先到达的请求进入到 recv_internal，执行完才会执行第二个请求？ (reply to 44570)

Mao: recv_internal 就像一个列队只能一个个执行吗？

Mao: 我的意思不是并行执行吗？

Tee: 应该同一个合约是串行执行的，actor模型

Tee: 单个actor处理消息时串行，actor间并发

Vincent: ok

Tee: 大佬，我上面的问题帮忙确认下哈

Mao: 感觉应该是同步的，要不然按照上边的写法 item_index 就乱套了

elon: 现在有什么公共的ton节点可以使用么

c: 为什么我这个地方拿到的总是和我的 代币的地址不一样 导致我调合约的方法出错了

Levi: ton 怎么获取到wallet的所有token

jay: 得知道 token 列表。 (reply to 44584)

Tee: 遍历wallet的事务记录吧

c: 这里面有直接发起 token 转账的api嘛 (reply to 44590)

kevin: 无， 可以自己写 (reply to 44591)

wiwi: 轉帳你要自己打合約然後組 body

c: 有没有大佬有java ton4j 的demo  一直用不了

Jackie: 使用本段代码发送交易 ，一直回弹，哪位大佬知道原因？

wikig: 接收地址的状态是？ (reply to 44597)

tot: tonkeeper测试网怎么打开的

Jackie: 未部署合约 的状态 (reply to 44600)

wikig: 啊？哪个功能 (reply to 44602)

wikig: 那建议先用接收方地址发出去一笔交易，然后初始化该地址 (reply to 44605)

Jackie: 接收方的地址里面没有GAS啊，能发送交易吗？。 (reply to 44607)

wikig: 那就先往里面发一点TON？  如果是不存在或者uninit的状态，能接收一笔转账好像？ (reply to 44609)

Jackie: 就是发送ton的时候回弹啊 (reply to 44610)

wikig: 那确保接收方地址是“不可退回”状态 (reply to 44611)

wikig: 就是，地址类型里面有，不可退回体质

wikig: 然后往里面发（

Jackie: 不是这样设置的吗？

wikig: 具体是哪一位不记得了，但是isbounchable设置为false (reply to 44617)

Jackie: 是的，我就是看文档这样设置的

wikig: 那照理说

wikig: 第一笔交易能发进去

Jackie: 回弹的地址开头是：EQ (reply to 44621)

Jackie: 我现在已经给他UQ的地址了，还是一直弹

wikig: 地址里面是一笔交易都没接收过吗？还是收过一笔交易 (reply to 44624)

Jackie: 全是回弹

Jackie: 是新地址

wikig: 第一笔都没成功吗

Jackie: 我创建的，是的

wikig: 那建议尝试手动转入

Jackie: 使用钱包啥的应该是可以，但我就是想从代码上解决，不然这个问题会一直存在

Tee: 为啥创建项目时生成的Counter合约代码中，int变量，用uint方式读取？

Jackie: 用钱包软件手动转成功了 (reply to 44630)

wikig: 看code是没啥问题的，要不试一下改：  https://test.tonspay.top/test.html (reply to 44631)

wikig: 那应该address就没问题....那该检查code了 (reply to 44634)

Jackie: 太奇怪了，我用软件转了一笔，再用CODE转，还是回弹 (reply to 44635)

Jackie: 状态还是未初始化

wikig: 要不把这个html拉下来，地址改成自己的然后转一下 (reply to 44635)

wikig: 现在你需要对外转出一笔实现地址初始化 (reply to 44638)

Jackie: 我就是用这个代码改的。。。 (reply to 44639)

Jackie: 😂

wikig: 啊这 (reply to 44641)

Jackie: 手动转出了一笔，现在用CODE转也正常了 (reply to 44643)

Jackie: 地址激活了

Jackie: 也就是这段代码只有在地址激活之后才能用

wikig: 不会啊，我记得空地址也能接 (reply to 44646)

Jackie: UQDw3P5HbIn-h_waCO5FqVbgxdPOjSDLy24Qy44kvFFmHRGK (reply to 44647)

Jackie: 往这个钱包转点试试，这个我刚创建的新钱包 (reply to 44647)

Jackie: 绝对 不行，我折腾了快一天了，先是用https://test.tonspay.top/test.html，实行不行后，就自己折腾着改 (reply to 44647)

wikig: https://tonviewer.com/transaction/5a926d2698e61ce5045142705ecb670db1ad84ebe73de88b12f0c41f839a2144  好像没问题啊 (reply to 44650)

wikig: 不知会不会被打回

wikig: 好像没被打回

wikig: 我只改了收款地址》。。。

Jackie: 这。。。 (reply to 44655)

Jackie: 我再看看

wikig: 但是只能接一笔我记得？其他要init之后才能接 (reply to 44647)

Jackie: 见鬼了。。真的可以 (reply to 44658)

User<6086637958>: 并不是 (reply to 44658)

Jackie: 😭

User<6086637958>: 随便发

User<6086637958>: 请看vcr

User<6086637958>: https://testnet.tonviewer.com/kQCyz27-VCbzhDWPVNDZwWcImPZFFJjCx4CTOLMKBq33HcHV

gavin: 你们遇到了什么问题？

User<6086637958>: 如何暴富 (reply to 44668)

gavin: 这个问题解决了吗？ (reply to 44673)

wikig: +1 (reply to 44673)

Jackie: 监听地址用哪个SDK？类似监听区块交易的那种

Jackie: 哪位大佬指导一下

wikig: https://github.com/Tonspay/Tonspay-monitor/blob/master/monitor/ton.js (reply to 44677)

Mao: 有查看 jetton 流动量的接口吗？

Jackie: 多谢大佬 (reply to 44679)

Jackie: 这个接口有测试钥吗？ (reply to 44679)

Jackie: 测试KEY

wikig: 啥key，tonapi的？

Jackie: const tonapiWs = wss://tonapi.io/v2/websocket?token=${process.env.TONVIWER_API}

Jackie: 这应该是要个TOKEN吧

wikig: tonapi的key是吧，去tonapi申一下就行

Jackie: 好的，多谢 (reply to 44684)

Hooray: 有大佬知道这种邀请链接怎么生成吗

wikig: 看着就是webapp然后带参传参 (reply to 44689)

Voyager: 是做合约开发的吗？ (reply to 44687)

Voyager: TON 的开发者生态和 EVM 比起来还任重道远啊。

Zonkie🦴: 现在不能收其他了?

Zonkie🦴: 游戏只允许收stars

wikig: IOS是如果不用star会被IOS本身给ban掉好像 (reply to 44696)

wikig: 但是没有明确边界，所以也不知道

Voyager: 有开发 DEX 的可以交流交流

Hooray: 识别了设备吧，电脑端可以token支付 (reply to 44697)

wikig: 其实也没识别，我觉得是人工审查的。  因为你真要用ios吊起TON支付或者其他chain支付，也没啥问题 (reply to 44707)

sunyoki: func 怎么打印日志🤷🏼‍♂️

Zonkie🦴: 不是, 官方申请直接拒绝了

Zonkie🦴: 只能stars

Zonkie🦴: 看了cat 那边也改了

Zonkie🦴: 看来只能跳出去到第三方支付TON

Zonkie🦴: 赶紧做个网关赚钱, 风口

wikig: 你好，有没有可能一年前的今天就已经做了🥲  https://t.me/tondev_zh/38143 (reply to 44717)

wikig: 我记得是没有限制的吧？毕竟@wallet用也就是个webapp，内部deeplink吊起别的webapp还是蛮常见的、  我记得是如果遇到不用star的bot，会在IOS侧ban掉bot的使用 (reply to 44714)

Zonkie🦴: 参考猫城

Zonkie🦴: 已经只剩下这个了

wikig: 猫猫是怕被ban吧估计 (reply to 44725)

Zonkie🦴: 是吧哈哈哈

wikig: 我记得几周前Android还可以选择上链支付的哈哈哈哈 (reply to 44725)

Zonkie🦴: 前几天我们在调研时候还打开过

cj: 啥意思？mini app用链上支付 还会被封？

wikig: IOS 的话，恐怕是的 (reply to 44734)

eqasw: 为啥

cj: 😳mini app被官方封吗

wikig: https://core.telegram.org/bots/payments-stars

wikig: 详见条款

wikig: 单纯IOS侧不给进 (reply to 44738)

cj: 那在mini app 里，不是搞不了代币分发，转账，质押等东西咯

wikig: defi 部分好像不受影响

cj: 不给进，那是什么样的表现 (reply to 44741)

wikig: 之前有人截图过，就是此bot在您版本telegram不可用之类的 (reply to 44744)

cj: 😱😱

Zonkie🦴: 感觉很麻烦

Sun: 电报内置的wallet 是没有测试网络的吗？

Hooray: 不是还有吗，PC就还是可以 (reply to 44715)

fun🦴: 校验 ton_proof 的时候报错: message ='EOF'  有没有人帮忙分析下. https://github.com/ton-connect/demo-dapp-with-react-ui/blob/f739f62d0674c490f3aa267af2f67a1a53d1728f/src/server/services/ton-api-service.ts#L34 这行报错.  message ='EOF' stack ='Error: EOF\n    at TupleReader.pop

fun🦴: result信息

fun🦴: https://github.com/ton-connect/demo-dapp-with-react-ui/blob/f739f62d0674c490f3aa267af2f67a1a53d1728f/src/server/wrappers/wallets-data.ts#L25 有没有懂王科普下, 这里写到V4, 那V5 怎么办, 以后V6789X的, 代码不更新没法支持签名验证了吗.....

Ton: star支付咋搞啊

Ton: 一直想研究一下

Ton: 有没有代码可以学一下

Pangolin: tact-lang中有没有 MerkleProof 的示例的

sunyoki: ~dump

sunyoki: 哈喽， 怎么得到这个数据啊

sunyoki: 哪里看这个日志

sunyoki: 🤣

— 2024-08-01 —

qknow: https://github.com/ton-connect/sdk (reply to 42450)

sua: 各位大佬有知道为什么转账jetton代币的时候为什么要带一笔ton过去吗

Zonkie🦴: 我这边IOS和安卓打开都没了 (reply to 44763)

Pangolin: tact合约升级要什么部署的？

gavin: 付gas啊 (reply to 44831)

sua: 是支付消息的费用吗，要用转账的方式支付吗

sua: 但是我看他直接到账户里面了 ，有余额显示

gavin: 付的是合约的租金 (reply to 44837)

sua: 哦   就是每次转账都需要付租金，这个有点浪费，不如sol得一次性租金

Pangolin: tact 合约中能不能批量转账jetton代币的？

eqasw: 你这样发广告会被管理警告的把

Pangolin: 在开发群发广告

wikig: 算是群友创业了xs，小小支持一下（话说这个tact bot是不是之前群里有人发过？

Yang: 屢勸不聽....

Voyager: 开发者群，大部分应该都可以发个jetton 吧？！

Voyager: 还有AI 就是个 按照提示的bot 吧

Voyager: 和AI 有半毛钱关系

wikig: 话说，提问一下群里大佬  有没有人折腾webapp的时候发现  IOS端的Telegram webapp在dev时候跟其他端有差异  （盲猜是浏览器内核差异？  以及目前遇到一些尽在IOS侧的webapp出现的error   TypeError : undefined is not an object (evaluating 'window.TelegramGameProxy.receiveEvent')   想问一下各位有没有遇到类似问题。仅IOS端webapp遇到的问题。（telegram的ios版是对window做了什么注入吗？？？

wikig: 这个webapp甚至没有引入任何跟telegram/TON有关的依赖库。从tonconnectUI到webapp.js都没有。 (reply to 44856)

gavin: 怎么是这个对象

gavin: 不是 window.Telegram.WebApp 吗？

wikig: 怪，我也不知道，我都没引入任何相关依赖库

wikig: 我连Telegram.WebApp都没引入过

wikig: 话说你们谁现在正在用着iOS的

eqasw: 他这个小程序用的是谷歌内核吗

wikig: https://t.me/tonspack_bot/gate?startapp=F7pXcna7voXyHLSYGS8G4LE5PQT3muAVRmy1p

wikig: 我记得，应该走默认系统默认浏览器内核 (reply to 44863)

eqasw: 那没搞头

wikig: 如果是IOS，照理说，是webkit/safaria

eqasw: 不统一内核，没搞头

wikig: 如果你们有IOS。要不点一下试试？ 看看是只有我这边的测试机IOS会报错还是都会？ (reply to 44864)

eqasw: 杂牌安卓机默认浏览器各种各样

wikig: 虽然但是，大部分杂牌安卓默认现在不是chromie就是webkit魔改吧 (reply to 44870)

wikig: 诶，那你这个还算正常，只是http请求错误 (reply to 44872)

Pangolin: @carzygod tact 合约中能不能批量转账jetton代币的？

wikig: 难道只有我手里的测试ios设备有问题？？？？？

eqasw: 我电脑打开的

wikig: 理论上没啥不行的吧....? 转jetton不就发消息嘛（？ (reply to 44874)

eqasw: 手头没ios

wikig: 嗷，那没事了，我Android开是正常的 (reply to 44876)

Pangolin: 我写的合约，单个转是成功的，多个就报错了 (reply to 44877)

wikig: 具体是报啥？ (reply to 44880)

wikig: 我Android和pc都正常，一走IOS就爆这个 (reply to 44864)

wikig: 可是这是raydium-v3仓库pull下来的font-end，里面跟telegram相关的东西一点没有。 别说webapp.js了，这个telegramgameproxy更加是没有  所以我怀疑是不是telegram的IOS侧往系统浏览器内核吊起的时候租了window注入？还是？  怪

gavin: 你的mode 写错了 (reply to 44884)

gavin: 一次就吧所有gas都消耗光了

gavin: 所以for循环是不行的

Pangolin: 哦，那这里要什么改

Sun: 这是什么意思？这个地址怎么传递？

Sun: 有人会用这个 在线编译器吗？https://ide.nujan.io/ 。

Pangolin: 这个传地址类型不行的

Sun: 是合约里面，这个发放就是错误的，还是什么？

Pangolin: mode: SendPayGasSeparately,  改成这个了，也没有成功

gavin: 你传的是0 ton 啊 怎么成功。。。

gavin: 多看看下文档，sendmessage 需要自己预估下fee 传入正确的ton

wikig: 总算是找到问题源头了  IOS端telegram默认走的是IOS version 的webkit/safaria 浏览器内核  然后窒息的来了  window.open()  函数在Safari下是不支持popup方法的（浏览器内核不统一全责）   所以现在解决方案是在这个function前面加了一个 navigator.userAgent.match来做端访问判别（这是人类想的出来的？  希望后续有人遇到类似问题可以作为参考 (reply to 44882)

Nolan: 有个问题想请教一下大家，我看dogs和seed这些miniapp好像能够获取到用户账号年龄，这是怎么做到的，从tg给我的信息里似乎获取不到用户注册时间的这种字段

wikig: 不是说根据uid估算的嘛 (reply to 44904)

Nolan: 啊，这么神奇的么

Nolan: 他们的uid是递增的么

wikig: 还真是hhhh

wikig: 但是就是不知道是不是线性的

wikig: 但是既然他们都可以估算

wikig: 应当就是线性的了

Nolan: 好吧，我以为是能知道什么时候注册的，不过确实tg应该不会给app这种信息

wikig: @wisdom_yang 诶？刚才那个接口哪来的（？

Yang: @creationdatebot 這個 Bot 很早就有了，但有人反應過這個沒有到很準 (reply to 44904)

Yang: 有興趣的可以去 bot 內，找那個作者的頻道，挖看看有沒有聯絡資訊

Yang: Message   ├ id: 480493955   ├ first_name: 💎 Yang 🥱   ├ username: wisdom_yang   ├ language_code: zh-hant   ├ is_premium: True   └ registered: 2018-01-10

Yang: 呈現方式會是這樣，我用於示範！  但請各位別在這邊試，避免洗頻。 (reply to 44924)

Nolan: 嗯嗯，估计他也是按照算法估算的，我去看看 (reply to 44922)

Nolan: 感谢

wikig: 吊起link (reply to 44926)

wikig: https://t.me/share/url?url={url}&text={text} (reply to 44929)

Yang: 有很多關於 Telegram 的 Code 操作，如果中文群真的沒人回，建議也可以到：https://t.me/twa_dev 這個開發群請教，那邊有更多聚焦於 Telegram 的討論

sua: 各位大佬转账是如何拿到hash的，这个奇葩的链为啥不直接返回hash呢

Yang: Android、iOS 和 macOS 版 Telegram 已更新至 10.15 版本  新版本为用户提供以下功能：  •更新后的应用内浏览器现在支持多个选项卡，显示您的浏览历史记录，允许您创建和管理书签，支持大量网站并提供一些其他设置。  •小程序商店允许您查看最近使用或最流行的网络应用程序列表，以及按名称搜索它们。小程序现在可以创建自定义内容，以便进一步分享到故事中。  •现在可以直接从菜单部分“设置 › 您的星星”向联系人赠送星星。  •闪光灯可让您在录制视频信息时突出显示物体，并且适用于主摄像头和前置摄像头。  •天气贴纸可让您将与您的位置相对应的温度和天气添加到您的故事中。  •封面编辑器允许您选择已发布故事的视频序列中的哪一帧将显示在您的个人资料中。  文章： https://telegram.org/blog/w3-browser-mini-app-store/en? setln=en  Android ：可在Google Play上获取，也可从官方网站以 APK 形式获取，或通过经过验证的渠道获取。 iOS ：应用商店。 macOS ： App Store 。  #update #Android #ios #macOS

wikig: 他好像只会返回message_hash (reply to 44933)

sua: 我这个java的   啥hash都没返回

wikig: Java啊，那只能说，自求多福了哈哈哈哈哈哈哈  （你是怎么调的 (reply to 44937)

sua: 唉    很烦啊这条链，一步一坎

sua: 好不容易可以转账成功了

sua: hash还没有

wikig: 你如果是发到toncenter的rpc的话

wikig: 应该是有个message hash返回的

cj: 有没有碰到 tg mini app里面跳转频道 没反应的。我用的是window.open

sua: 不是调用的那个rpc

sua: 是走的tdlib那个官方的全局配置那种

wikig: 那你是咋发出去的 (reply to 44946)

wikig: 与这个有关？  https://t.me/tondev_zh/44902 (reply to 44945)

wikig: 哦哦，那确实不清楚了

sua: 走的这种，配置上这个就可以发交易请求了

sua: 有点没搞懂这条链，getblock有支持ton,但是也只是给的rpc  不知道怎么集成到这个上

sua: 包括那个toncenter应该也得申请他们官方的url加key

wikig: 都是rpc，应该是有统一rpc规范的，getblock那边也是 (reply to 44954)

sua: 是吗

sua: 那我走错了吗。。

sua: 应该也走api文档的那种方式吗

wikig: （能用不就行

wikig: 拿不到hash不就换个思路

wikig: 直接监听发送地址

sua: 关键是我现在也一步一坎  很艰难走的

wikig: 毕竟是java，可以理解hhhhh

sua: 可以通过拿最后一条交易的方式拿到hash

wikig: 大部分库都是py和js的我记得

sua: 我大java沦落至此。。。 (reply to 44963)

sua: 😂

wikig: 总之是个办法吧 (reply to 44964)

sua: 难搞哦这条链

wikig: 受不了就最后在考虑换方案用rpc呗 (reply to 44970)

cj: 加个判断的话，有解决问题吗

cj: @carzygod

sua: 那个toncenter的api文档  我没有看到怎么发送交易的

cj: 但是dogs那个项目，又能丝滑加入群聊，不知道怎么实现的

wikig: 至少我目前是解决了。  https://t.me/Tonspack_bot/gate?startapp=25K6n8x9BaUPfne6zFhSW9B5S9ZerNX5aeytN78 (reply to 44972)

wikig: 我记得它rpc有涉及到发交易的接口的 (reply to 44974)

wikig: 啊？直接吊起群聊链接不就好了 (reply to 44975)

cj: 我是直接window.open(“https://t.me/xxxxxx”)

cj: 他们有人反馈 ，没反应

sua: 直接仨post请求   也没教怎么提交

wikig: 问一下他们是什么端？ (reply to 44981)

wikig: 如果是pc browser的话，可能被chrome拦截了

wikig: 让他们看右上角是不是有拦截弹出窗口的标志

wikig: https://toncenter.com/api/v2/ (reply to 44982)

cj: 有一个是苹果端的

wikig: 苹果的IOS还是mac，毕竟是不同的 (reply to 44989)

sua: 这个v2的也没看到教发送转账的入参啊 (reply to 44988)

wikig: 应该是调那个sendboc接口？ (reply to 44991)

wikig: 就是把交易签好名打包成boc，然后发出去

cj: 苹果手机，我自己mac 桌面端表现正常 (reply to 44990)

sua: 感觉是这个接口，但是怎么打包没教啊😂

sua: 都有啥字段啥的也没

wikig: IOS的话，应该没问题的。  因为我这边call好像都正常的。 (reply to 44994)

wikig: 有道理，如果你是js，那我倒是清楚怎么打包，java我就摊手了 (reply to 44995)

wikig: 要不还是老老实实用js起个服务单独做ton的签名、打包、发送吧 (reply to 44995)

sua: nodejs吗。。  我不会

sua: 你js打包的文档在哪里看到的？

sua: 有定义字段解释吗

wikig: 用express起个简单的本地http进程用于通信不就好了。 (reply to 45000)

wikig: 我记得是tonweb的交易打包最后toboc好像 (reply to 45001)

sua: 好像有个js的sdk

wikig: js全是SDK

sua: 希望有java大佬看见拯救我一下吧，不然我还得慢慢研究下去

wikig: 我的建议还是拆分成独立服务吧，不然估计一大堆boc打包之类的操作（难是不难，主要是绕，而且规则一大堆，简单来说就是手动组装二进制数据结构）够吐血的

sua: 😂   只能是当备选方案了

Sun-J: 你们tg上webapp用什么框架写的

Sun-J: 换语言吧   服务器折腾崩溃了3次 (reply to 45007)

Sun-J: 我 (reply to 45012)

sua: 我啊大佬

sua: 发送交易获取不到hash

sua: 对

sua: 转账搞定了

sua: 没hash返回

sua: 啊？

sua: 正式网可以吗

v: https://tonviewer.com/transaction/3024b5097408b64528b72dbc6886a8d66bd0c5a72f0314398124a13217edf836  这种交易是什么问题造成的呢

sua: 老哥  你这个怎么崩的3次呢  为何 (reply to 45013)

sua: 难哦

Sun-J: 你把java的代码  放服务器上  要升级glibc

Sun-J: 我还在用centos7.9呢

sua: 他这个不就是首次需要同步百分百吗

sua: 为何后面也会崩呢

Sun-J: 是那个.so的包  运行需要glibc

sua: 嗷嗷   这个东西啊

Sun-J: 而且java我测了  和 go那个 一样  可能拿不到数据  就很郁闷

sua: 阿里云服务器直接升级呢

Sun-J: 要么 发了交易没反应

wikig: webapp 嘛，目前是原生或者nextjs (reply to 45010)

sua: 大概需要多大的配置可以

wikig: 什么前朝老兵好家伙 (reply to 45036)

wikig: ctos都停更多久了

sua: 如果这个崩的问题解决不了  那岂不是解决了我得问题也白扯，还是得需要换语言咯

Sun-J: 要么钱包  余额拿不到   那个延迟和重试 调长了也没啥用

a: 看你能不能重写那个send方法 (reply to 45020)

Sun-J: 经典服务器   用新的也有一堆问题  只是老服务器确实不适合这种新生态的东西 (reply to 45046)

a: 换成那个sendBocReturnHash的接口 (reply to 45050)

sua: sendBocReturnHash是tonlib里面的接口吗

Sun-J: 我去调调看

wikig: 我记得这接口getblock的rpc好像支持 (reply to 45053)

sua: 我在java里面没看到。。。

sua: 没找到

sua: 我这底层走的都是这个东西

a: getblock和toncenter是一样的 (reply to 45055)

a: 这呢 (reply to 44988)

wikig: 大体上的接口应该是一致的（rpc规范）  但是有点小feature不一样我记得，

harlan: ton4j这个库需要配置啥，没看到文档说明这些呢

harlan: 咋个不像web3j的库有文档参考

wikig: 理论上当然可以  只需要在starapp=后面加参数就行。记得url打包 (reply to 45064)

wikig: 就是记得把url关键字给脱敏 (reply to 45069)

wikig: https://t.me/tonspay_bot/invoice?startapp=d159a5f9181031f68efe328b6a621118 Please pay this invoice for me ! Thanks ! (reply to 45068)

wikig: 如

محمد: 🎮🎮🎮 (reply to 20814)

cj: 桌面版跳转频道时，如何不关闭小程序

wikig: 如果是要吊起bot的话，要改成 (reply to 45078)

wikig: https://t.me/tonspay_bot?start=d159a5f9181031f68efe328b6a621118 Please pay this invoice for me ! Thanks !

wikig: 不能使用startapp，得用stat= (reply to 45082)

cj: 我就是加入频道 (reply to 45085)

wyz: 大家有开源tg小游戏推荐吗 学习一下

wikig: 频道的话·，可以考虑参照这个  https://github.com/yagop/node-telegram-bot-api/issues/1031 (reply to 45088)

fun🦴: https://github.com/ton-connect/demo-dapp-with-react-ui/blob/f739f62d0674c490f3aa267af2f67a1a53d1728f/src/server/wrappers/wallets-data.ts#L25 这里校验钱包的 ton_proof 只写到V4, 那V5(tonkeeper新版默认全给用户生成的是v5的)怎么办, 以后V6789X的, 代码不更新没法支持签名验证了吗.....有咩有规范/逻辑, 一次性编码,兼容后面的版本. 谁知道V5的先怎么处理.

harlan: tonlibjson library这个包怎么配合ton4j引入

wikig: 我的理解是，没更新确实用不了？ (reply to 45091)

fun🦴: V5的怎么处理知道不. (reply to 45093)

fun🦴: V6789x的靠规范才能一劳永逸, 签名验证代码还要一直更新,太不友好了~

wikig: 我也想知道， 而且我现在做钱包打算直接上来就wallet v5规范 (reply to 45095)

wikig: 这样后面能做gas station 服务

Mr: hi

Anders: 啥玩意儿？

Coder: telegram小程序哪里可以查看小程序的打开数据、浏览数据啥的吗？

wikig: 好像没有？不过可以在前端做一个数据记录然后接到google的打开记录分析之类的

Coder: mac版本今天不是更新了吗，popular有个用户数据

gavin: 对今天更新的

Coder: 没有bot api啥的可以查看数据吗？ 感觉应该要有类似微信小程序后台那种 统计数据

Ton: 我也刚看到 (reply to 45114)

Ton: 这要咋进啊

Nolan: v5钱包不是还在beta么，就开始全面推广了嘛？

wikig: 规范推出已经一年了吧，我记得仓库是去年七月的 (reply to 45131)

Nolan: 嗯嗯，不过真默认生成v5钱包，不知道有没有啥兼容性的问题 (reply to 45132)

wikig: 主要是支持gas station 服务吧，毕竟他们打算推他们自家的battery服务 (reply to 45134)

Nolan: 嗯嗯，我还没怎么使用gas 代付，得体验一下了 (reply to 45135)

wikig: 主要是TON本身就是自带账户抽象，这玩意儿现在才做才是让我觉得离谱的，这玩意儿应该早就有了才对 (reply to 45136)

prometheusoo: gas还可以不用ton吗？

wikig: gas station network就是这个意思，用别的玩意儿代付 (reply to 45139)

wikig: 也就是abstract account

wikig: 也是老活了

prometheusoo: 👍🏻

Nolan: 是的，本来ton上业务应该玩的更花，但是现在ton上复杂的合约基本没有，都是连下钱包发个交易就行，哈哈 (reply to 45138)

Nolan: ton有人在做layer2吗，ton还是有点慢也有点贵呢

wikig: 嘛，毕竟是telegram用户主导，那web2.5还是吃香的 (reply to 45144)

wikig: 确实贵，但是这种异步链，我觉得能做layer2估计都往zk那边靠拢去了 (reply to 45146)

Nolan: 也理解，一开始来就玩这么复杂，用户也不懂

安: 谁有批量转账带评论功能的

Devin: ton转账很便宜啊，为什么说贵呢？

cfs chef: https://www.tonpenguins.org/mass-sender   这里 (reply to 45154)

安: @tonmemelabs2024 有源码吗😂

安: 它不能发送别的代币吗

Devin: 批量转账不是Wall V5就自带的功能吗？

安: 哪里自带有？ (reply to 45163)

安: 我是需要批量转usdt

安: 不是ton

Devin: 可以的

Devin: Wallet V5：Send up to 255 messages at once;

安: 怎么可以实现 用哪个😂

安: 用哪个钱包 可以实现 (reply to 45170)

安: 其他代币也可以吗

sunyoki: 不可以吧

Devin: 可以

Devin: TonKeeper已经上线Wallet V5了。

Devin: 你先生成V5的钱包，然后打Ton和U到这个钱包

Devin: 然后用程序构建批量转U的交易

安: 我就是v5

安: 用哪个程序构建？ (reply to 45179)

Devin: 自己写代码

Devin: 用tonkeeper官方的sdk构建交易

Wayne: 请问哪位大哥做过group人数20w限制的升级吗？

0x7c26: TONKeeper Pro(Desktop)有 (reply to 45166)

0x7c26: 手机版目前没有自带 (reply to 45204)

0x7c26: TONKeeper主页上面写着W5那就是了(从开发者选项那也有) (reply to 45181)

Yang: Attention Developers!  We need your valuable insights to make the TON & Telegram Apps platform even better! 🚀  As a token of our appreciation, every developer who completes our questionnaire will receive an exclusive SBT from TON Society! 🎁  Your feedback is crucial in shaping the future of our ecosystem. Take a few minutes to share your thoughts and experiences with us.  👉 Start the Questionnaire Now  Thank you for being a vital part of our community and helping us build a stronger, more vibrant platform! (forwarded from TON Dev News)

Yang: New Localization Workflow for TON Documentation made by Townsquare Labs  Townsquare Labs is excited to announce that the new localization workflow for the official TON documentation is now live!   🎉 Check out the detailed guidelines to get started: https://docs.ton.org/contribute/localization-program/overview   📢This update is a significant step because by providing documentation in multiple languages, we are breaking down language barriers and making it easier for people worldwide to understand and contribute to the TON ecosystem.  Not only solving the language barrier, we have also included the following features in this new localization:  1. Automated processes: Streamlines development, integration, and deployment, enhancing efficiency and consistency.  2. Role separation: Decouples developer, translator, and verifier roles for high-quality translations and smooth collaboration.  3. Community incentives: Rewards members who contribute to the localization process, encouraging active participation.  4. Advanced AI integration: Enhances translation accuracy and efficiency with intelligent suggestions and automation.  ✨ Coming Soon:  We’re working closely with various local communities, including JP, KR, RU, PL, UA, and more, to make the TON blockchain more accessible to everyone. The support for TACT docs and Telegram Mini Apps are on the way.   Join us in our mission to make the TON blockchain accessible to all! 🌐 (forwarded from TON Dev News)

— 2024-08-02 —

prometheusoo: 请教下，v5这个是不是跟highload差不多？ (reply to 45170)

Ton: 收不到验证码咋办

Ton: 有大佬知道吗

alex: 我是一名全栈/区块链开发人员。我想帮助你。

Play: 请教一下  有兄弟知道   转账USDT怎么确定100%到账吗?  之前转账TON,通过https://toncenter.com/api/v2/getTransactions接口查找流水可以确定100%到账  但是转账USDT, "in_msg" 里面的金额"value" 和 "message"都对不上了,这个有什么解决办法呢?

Sun: 发一笔hash来看看 (reply to 45285)

Sun: 在这儿

Play: 你好  请问  这个是去哪里查询到的? (reply to 45289)

Play: 哇  十分感谢!!  我去看看👍

Devin: queryid唯一就好判断了

deng: tg  出了个数字商品支付？

deng: Telegram Stars：支付数字商品等费用

Devin: 数字商品就是VPN之类的

deng: 这种

deng: 感觉是打通了支付

Devin: 好像用Ton或者其他Jetton也可以购买Telegram的Premier会员

HarvinderGill: 问一下各位,Ton合约开发新手直接学Tact可以吗

Sun: 请问一下，有人在合约中转移过代币吗？有转移代码片段吗？

Sun: 不是主笔，比如usdt什么的

Sun: 是这个是吧

2: 可以试试这个

兰兰/防封飞机号/会员代开/🍎苹果ID: 这个怎么开 (reply to 45305)

兰兰/防封飞机号/会员代开/🍎苹果ID: 电报之星可以开会员嘛

Rick: dedust api v3 有文档吗

尼奥: 为啥有的机器人显示多少名用户 我的机器人不显示 就显示"机器人"三个字 也有用户关注呀

Levi: ton合约开发怎么debugger

Levi: 有点困难

Levi: 我想输出合约里面获取的数据

gavin: 用dump语句

g: 请教一下 有兄弟们知道 tonConnectUi.sendTransaction()怎么实现USDT、NOT转账么

Levi: ~dump(sender_address);   ~dump(123456); (reply to 45329)

gavin: yes (reply to 45332)

Levi: 获取logs的时候也没有看到123456

Levi: tvm logs

gavin: 你可能需要开启debug log解析

Levi: 我加了一个debug的选项

Levi: 有完整的例子吗 (reply to 45336)

gavin: 看样子你是加错了

gavin: 你用的是sandbox 吗？

Levi: 用的ton-contract-executor

Levi: 没有用sandbox

sunyoki: 要用沙盒 (reply to 45344)

Levi: OK，有文档吗

Levi: 我去研究一下

Levi: 谢谢

sunyoki: https://github.com/ton-org/sandbox

Levi: thanks

Levi: 大概看懂了

Levi: blockchain = await Blockchain.create(); 设置debugLogs = true

sunyoki: en

Jackie: 哪位大佬知道，为什么明明成功的交易，浏览器查到的里面显示的却是失败呢？

sunyoki: gas不足 (reply to 45360)

Jackie: 但整 个交易是成功的啊 (reply to 45362)

Jackie: 251250eee9888ed409d484ca53b61425cdf4d16a112168d9808de2122786ca22 (reply to 45362)

Jackie: 这已经被确认了

Jackie: 理解 不了，为啥失败了却也成功了😂 (reply to 45362)

Jackie: 其它成功的交易确实是0

sunyoki: 不知道

Jackie: 我感觉还是因为我没理解TON的整个交易流程 (reply to 45371)

11: 所有区块链都有out of gas的错误

sunyoki: 还有个弹回消息把

11: 你的消息gas不足也可以上链成功，但是链上无法成功执行

eqasw: 成功了，但没完全成功

wikig: 提问，tonweb或者ton/ton有没有类似tonconnect那种，一次可以包最多4笔交易的，发送方法

eqasw: 回答，没有 (reply to 45377)

sunyoki: 合约内，使用了send_raw_Message ,   gas耗尽，前面的数据也会保存的

wikig: 淦，那tonconnect怎么发的 (reply to 45379)

eqasw: 看看他源码

wikig: 我看tonconnect的tx部分是个array，其他的tonweb或者@ton/ton都是只能单笔操作。怪

eqasw: 协议不同把

wikig: 协议？ (reply to 45384)

Jackie: 但币确实是转过去了，像ETH如果GAS耗尽是不会成功转币的 (reply to 45375)

wikig: 哦也不对，tonconnectui是message为array。那我理论上也可以对@ton干这事儿 (reply to 45386)

11: 但是后续的tx没有了啊，相当于交易链你只执行了第一笔 (reply to 45387)

11: 你把gas给高再重新发一笔，后面肯定还有交易没有被你执行

wikig: https://tonviewer.com/UQDcVhCbf5r0r8VkHK4ZxbuWj-r39h1AB0aVQquIbnitA5R7

wikig: 话说什么情况下会出现这种，只触发了一次发送行为，但是一直failed然后燃烧gas的情况

wikig: const ret = await contract.sendTransfer({             seqno,             secretKey: keyPair.secretKey,             messages: [ton.internal({               value: txn.v,               to: txn.t,             //   body: txn.data,             })]           });

wikig: 也没干啥，也就node环境下用@ton/ton发了笔简简单单的交易，甚至没带payload (reply to 45394)

wikig: https://tonscan.org/address/UQDcVhCbf5r0r8VkHK4ZxbuWj-r39h1AB0aVQquIbnitA5R7#events  而且在tonscan上直接找不到交易发送记录 (reply to 45391)

Jackie: 听起来像灵异事件，是不是带循环了 (reply to 45396)

wikig: 完整的code就在这 (reply to 45394)

wikig: 看起来就是用ton/ton向外发出一笔交易

wikig: 而且就只是一笔payload都没有的ton转账交易

wikig: 很变态的是，肉眼可见的在过去5min里，balance从0.5TON一直drop到0.148

wikig: （早知道不在主网测试了

wikig: 有无懂哥，救救 @dev_rel (reply to 45403)

wikig: 怕了怕了，换tonweb玩玩 (reply to 45400)

wikig: 但是tonweb似乎又不能一次发多个复合交易。怪 (reply to 45408)

sua: 老哥  你有通过toncenter使用hash查询到过交易详情吗

wikig: toncenter可以查呀，文档还是蛮清楚的 (reply to 45411)

User<7018927630>: 单笔1trx

sua: 我transactions查出来的没有返回交易详情

sua: 感觉好像在body里面，有朋友做个反序列化不

wikig: 哦，也就是说boc解码啊 (reply to 45414)

wikig: tonweb有现成的库我记得

sua: 额。。。

sua: 感觉在body中

User<7103317108>: 获取交易ID (TXID): 每次USDT转账都会生成一个唯一的交易ID，您可以从钱包或交易平台获取此ID。  使用区块浏览器查询: 访问USDT区块浏览器（如OKLink USDT Explorer或Anycoin Direct USDT Explorer），输入交易ID进行查询。 (reply to 45285)

wikig: body里那个看起来是个boc，用现成库解一解好了 (reply to 45419)

sua: 没有在java中找到

sua: 没有找到反序列化的工具包

sua: 我再找找吧

wikig: 变态的是我在tonscan.org里面还看不到任何相关交易  如果我是正常用户。那我的视角就是：  1.21小时前充值0.5TON 2.21小时前deploy钱包 3.现在莫名其妙只剩0.14 TON了  我是完全不知道我的资产发生了什么的。神奇 (reply to 45392)

sua: 应该是你上面重复提交交易了

sua: 一直报错 一直重复提交了

sua: 就这个 (reply to 45403)

wikig: 很怪，但是我只触发了一次请求。 (reply to 45427)

sua: 就这样的  我经历过

wikig: 用的则是toncookbook的demo (reply to 45394)

sua: 只要是出错了

sua: 就是多笔

wikig: https://docs.ton.org/develop/dapps/cookbook (reply to 45432)

wikig: 怪

Jackie: 自动的吗？ (reply to 45434)

sua: 自动的   我提交一笔错的，浏览器上就不停的自动好几笔

sua: 如果交易是正确的  就正常是一笔了

David: 这个value (reply to 45394)

David: 格式不对吧

David: body:           is_right: false           value:             sum_type: TextComment             op_code: 0             value:               text: ""

wikig: 我把文档复制粘贴了没审hhh (reply to 45442)

David: 应该是被解析成一个大数了，所以Result code是37, balance insufficient

wikig: tx.v 是个number to是个address (reply to 45440)

wikig: 哦也不是，是个string . (reply to 45446)

David: 那个string大概有问题

wikig: 应该不会吧，我写的大小也没到bignumber的数值？

David: 这是10000 TON了

wikig: 啊？

wikig: 不是应该是10000 / 10^9  ?

wikig: 这个数不是应该传乘过decimal的tonano值吗

Sun: 请问，这地址怎么传递？

wikig: 艹，这里不会是要传float吧。那不是直接爆炸？

wikig: 啊？

wikig: 不会把，用惯了tonweb之类的库都是传tonano的。我去试试，有点太逆天了

wikig: 换回tonweb又能发了          const ret = await wallet.methods.transfer({             secretKey: keyPair.secretKey,             toAddress: txn.t,             amount: txn.v,             seqno: await wallet.methods.seqno().call(),             sendMode: 3         }).send();   真的乖 (reply to 45460)

wikig: 可惜tonweb不能打包多笔交易，难受 (reply to 45463)

Jackie: 能节省GAS吗 (reply to 45464)

wikig: 好像没有这个说法吧，只是说能够做多笔打包 (reply to 45465)

wikig: 给你举个例子

wikig: https://tonviewer.com/transaction/53b36eb178c0b30c1d59e3a1ade0bf09c5ffaa28f20a541db13a24a300d19fdd

gavin: 这个是传说中的铭文吗

David: 而且你之前“valid_until”这个值传的好像有问题，应该是unix timestamp 1开头的，之前的交易都是4开头的时间 (reply to 45463)

David: 所以一次签名可以一直被发送广播

David: 导致一直消耗gas

Jackie: 解释不了啊，按理只发送一次交易也不可能被多次执行 (reply to 45473)

Jackie: 这太吓人了

David: 那是成功的情况，失败的话就可以重复发送吧？ (reply to 45475)

Jackie: 失败重复发送这不应该是自主处理吗？

Levi: ston 有部署deploy pool的代码例子吗

Levi: 部署成功之后添加流动性

Mao: 请问下这个分块的编码函数有没有呀？ https://docs.ton.org/mandarin/develop/dapps/asset-processing/metadata#%E5%88%86%E5%9D%97%E7%BC%96%E7%A0%81

timi: 哥，你用@ton/cocos-sdk，打包没问题吗 (reply to 44178)

timi: cocos打包我只要连接钱包，就是这个问题

cj: 这也没说 怎么解码boc数据

wikig: 可以考虑用tonweb的utils来decode (reply to 45497)

sua: 根据加密的Cell顺序来解 (reply to 45497)

prometheusoo: https://testnet.tonviewer.com/transaction/c9f8d766a7091472463440a87bbd6fb94d66bea1177ad2e14afd773fc2d66e21 一次交易500笔

Nadia✈️ Slow Reply |: 有关于stars支付的疑问：我们在测试的时候是没问题可以支付成功，但是一旦放到正式bot上就会经常超时，是需要审核吗？不知道是哪里出了问题 🙋求助

wikig: 这是从微信问到tg了好家伙hhh (reply to 45516)

wikig: 超时长啥样的 (reply to 45516)

Nadia✈️ Slow Reply |: Hhhhhhh (reply to 45518)

Nadia✈️ Slow Reply |: 就是一直loading

Nadia✈️ Slow Reply |: 转圈圈

wikig: 我觉着这是Telegram wallet pay 的问题吧

wikig: 一般这种操作没有实时审核的（毕竟也审不了啊

Nadia✈️ Slow Reply |: 很头疼 (reply to 45526)

hkjc.ton: 过期域名是怎么竞拍的？有人可以告诉我吗？

frlyh: 又有啥活动吗?交易膨胀20-50倍？

frlyh: 常规水准 200 -400

frlyh: 现在都破万了

Yang: 我感覺是無意義的交易tx (reply to 45559)

— 2024-08-03 —

liam: 有大佬知道，wallet.methods.transfer 无法进行转账，转账报错exitcode=33，是怎么回事吗

Degen: 有没有大佬部署过getgems的marketplace contract

Howard: 有點不同， V5 是針對 gas-less 去設計的；不需要 toncoin 也可以發 USDT (reply to 45276)

wiwi: free gas

Yang: https://t.me/investkingyru_en/1191  好像是 Kingy 再進行多筆轉帳( 9千多 ） (reply to 45561)

Howard: what (reply to 45403)

wikig: 似乎找了一圈是错误交易会自动重发的问题（ (reply to 45623)

cj: 😂

Wong: Get method "seqno" for account Address

Wong: 各位老大，能否帮忙一下

Wong: 我在做TON转账的时候，获得错误

Wong: pytoniq.liteclient.client.RunGetMethodError: Get method "seqno" for account Address<EQDXHrmlnlTK4TAZvf22qClMe75

Wong: remote get method result is not provable, use run_get_method_local for local tvm execution

Wong: 感谢。。。

Chaincode: 哪位大神知道怎么在链下判断一个交易是否成功了呢？

Chaincode: 例如这个交易，消息上链后在多个合约之间产生了很多交易，有成功的有失败的，我怎么判断全成功呢？ https://testnet.tonviewer.com/transaction/d9aa9c0fbe9286764144134e8a7b47b89a318a0d35b434cd56c3acfda700d0c9

User<5183898074>: 部署mint成功了但是没有到账是啥原因，有人遇到过吗

cj: 这两个变量 如何计算来的？

Howard: 高估 多給的一個值 (reply to 45664)

wikig: trace一下全流程 然后逐个判断呗 (reply to 45634)

— 2024-08-04 —

GIM: 为什么tonviewer上看我jetton的logo总是旧的cache，怎么清除这个cache

Chaincode: 这个好难，换其他方式了😂有个疑问，比如这种多合约调用，后面的交易失败了，前面的交易是不是不会回滚？回滚的话是不是由程序自己控制 (reply to 45681)

gavin: 你要开启下兼容模式 (reply to 45496)

gavin: 打包的时候兼容下浏览器的版本 (reply to 45496)

gavin: 不会回滚，合约自己处理回弹消息逻辑 (reply to 45700)

Howard: Message mode without flag 2 and invalid action phase (for example sending more than balance)   Flag 設置沒有對吧 (reply to 45625)

Howard: 如果你有寫 bounce 邏輯，則會 (reply to 45700)

wikig: 是的，并且设置了不可回退（然后就会一直回退 (reply to 45709)

Logan 🐯: 不同钱包地址如何统一判断是否是同一个钱包

User<7148949927>: 用account id来判断即可 (reply to 45712)

Howard: https://core.telegram.org/bots/payments-stars  #stars

Howard: this (reply to 45522)

Howard: 需要在bot的后端侦听事件，并且正确return (forwarded from 0xnomad2082)

Howard: 关于 Telegram Stars 支付在生产环境时，会持续有圈圈没有下一步的问题。  #stars #mini_app (reply to 45516)

User<7148949927>: stars的提现限制是21天，后续会不会考虑减少这个时间呢？ (reply to 45721)

Howard: 這不是我來決定的事情😅 不確定呢。 (reply to 45723)

User<7148949927>: 好的 (reply to 45729)

Logan 🐯: w5钱包 data 的格式是？

User<7103317108>: It's smart contract. If you want to know more, please DM me. I'll explain more deeply to you. (reply to 45741)

Finch: 钱包怎么连测试网？

lang: 有人做ton游戏后台吗

Chakra: 什么游戏后台

Hizz on Ton: Anyone have complete mini app like hamaster..!?

大宝宝 兑换TRX能量 代开飞机会员公群担保 *资金往来语音确认*: ton  现在什么行情

Howard: GM! Spamers! (reply to 45826)

— 2024-08-05 —

Howard: I would like to clarify that there is a small peculiarity in creating the link. For example, TON Space uses a link in the format https://t.me/wallet?attach=wallet, TON Connect transforms it into a new link format, resulting in https://t.me/wallet/start.  You need to specify the link for your wallet in the same format https://t.me/BOT_NAME?attach=wallet, and be aware that TON Connect will send the user to the link https://t.me/BOT_NAME/start.  —  關於 TonConnect 交互的一些未來更新..... 🦑👏👀

Sun: 大佬们，你们对Blueprint熟悉吗？这是替换沙盒到测试链吗？好像没有生效

Sun: blueprint test — 好像还是走的沙盒

Play: 请教一下  有兄弟知道 mini app怎么获取用户头像吗?  看文档,是要从附件菜单启动的app才能获取到  但是有些app,即使没有从附件菜单启动,也获取到了,是怎么做到的呢?

尼奥: 可以通过用户id获取用户资料的图片id 然后在通过这个id获取文件 然后下载保存下来，可以保存到自己的服务器 也可以上传到对象存储 (reply to 45838)

Play: 你好  感谢回答!  我还是不太懂, 通过什么方式获取用户资料的图片id?   然后获取文件呢?   有什么接口或者文档可以看吗? (reply to 45841)

timi: 感谢 (reply to 45702)

尼奥: 我用的grammy这个库 可以看看

尼奥: https://grammy.dev/ref/core/api#getuserprofilephotos

Play: 看到了  十分感谢!!

尼奥: 通过这个方法拿到file id ，然后下面还有一个getFile方法 拿到文件

Play: 嗯嗯  good

尼奥: 我也在想 有不有可以直接拿到用户头像的tg的图片链接 不然还要自己保存下来😂

Play: 哈哈哈哈😂   这得看群里的其他兄弟了

尼奥: 我目前的办法是通过cloudflare写一个worker 传用户id，返回用户图像buffer，直接插入img标签 就是速度不是很快

Play: 原来如此  很详细   谢谢你👍

Leven: tg内置wallet bot 打开 显示。Operation Unavailable 怎么办啊， 换节点不行， 清除缓存也不行。

Leven: O， 查了聊天记录， +1 的手机号注册的不能使用吗

Leven: 另外想请教下， 部署了func 测试网合约， 怎么verify合约啊， 有咩有文档， 跟hardhat那样的

Ton: 测试网不知道，主网有一个ton verify的网站可以 (reply to 45857)

Ton: 验证需要0.5T

Leven: 哦， 只要输入合约地址， 把合约上传就行吗？

Ton: 好像是

Ton: 反正挺简单的

Leven: 好的， 谢谢

wikig: 建议可以考虑直接用userid查询 (reply to 45838)

User<7148949927>: 还可以这样？ (reply to 45865)

wikig: 有接口的。 (reply to 45868)

wikig: https://stackoverflow.com/questions/47835425/how-do-i-get-the-user-profile-picture-of-someone-using-the-telegram-bot-chat-api (reply to 45868)

User<7148949927>: 看到了，🙏谢谢

fun🦴: 这个接口好像测试网是不行的. 害我研究了半天, 最后发现主王其实是正常的. (reply to 45870)

Ton: 看看用起来丝不丝滑

壮壮: 太丝滑了

Ton: 😘

壮壮: 你的pc上连接钱包 交易后 会不会返回小程序 (reply to 45878)

Ton: 不会

Ton: pc上并不会

壮壮: 我也发现了

壮壮: 你的支付已经写好了吗

Ton: 写好了啊

壮壮: 厉害啊

Ton: 你可以付一个试试

Ton: 年华3700%

Ton: 😉

Ton: 做我第一个付费用户

壮壮: 好呀

Ton: 啵啵，爱你呦～

Ton: 建议买月卡

Ton: 比较值

Ton: 买单次 没有每天的增长

sunyoki: 啥来的，短剧 啊

Ton: 嗯

sunyoki: 流批

Ton: 有没有认识俄语社区的啊

Ton: 听说那边购买力可以

0x3lang: 老哥们 这个ton合约怎么调用啊

0x3lang: 一定要abi吗？

wikig: 好诶，是之前发过的那版本的更新版嘛qwq (reply to 45877)

Ton: 是嘟是嘟

壮壮: 大佬再现

wikig: 我好想掉起不了诶，跟我说 请先登录 (reply to 45888)

Ton: 要连钱包呀

Ton: 他那个connectui有个问题 就是无法渲然两次

wikig: 阿找到了

wikig: 个人建议

wikig: 要不这里加个

壮壮: 干嘛没登录不直接调起

wikig: 登录态判别呗

wikig: 大概就是这个意思 (reply to 45913)

壮壮: 付款还要自己找钱包

壮壮: 我刚也觉得不合理

Ton: 啥意思

Ton: 没理解

壮壮: 点支付 判断没有登录 就应该拉取登录钱包

壮壮: 不应该让用户 懵逼去自己点链接触发

Ton: 好意见

Ton: 收到

Ton: 下个版本更新

Ton: 这都小问题

壮壮: 今天我也要开始研究轮训到账

wikig: 好耶

wikig: 充值成功

Ton: 感谢支持！

壮壮: 大佬怎么做的到账 监听吗 (reply to 45926)

Ton: 轮训啊

Ton: 这也是别人教我的

wikig: 轮询啊 (reply to 45932)

壮壮: 那就还是走的大佬的那套

wikig: https://github.com/Tonspay/Tonspay-monitor/blob/master/monitor/ton.js 可参考 (reply to 45936)

壮壮: 搞起来 我那天搞了下环境还没搞起来

壮壮: 大佬我是整个库拉下来嘛 (reply to 45937)

wikig: 啊这 建议把有用的部分截走就好了 (reply to 45939)

wikig: 不然环境怪多的

wikig: 连还有别的chain的 没啥必要

壮壮: 我就是对这个环境这块不熟悉

壮壮: 那我开始拆一下

cj: 为什么我多给的value，不会回到deployer上，如果我把destination也改成deployer的话，value就可以正常的回道deployer上

sunyoki: 官方的jetton吗 (reply to 45945)

cj: 对

cj: 从官方那个github 考下来的项目，

cj: 我用dump去打印，都有执行到那一步，但是ton就不知道跑哪里去了

sunyoki: 我也是，不知道啥情况，我重写了😂

cj: 我将deployer,wallet2, jettonDataWallet余额都查了一遍，钱没了...

cj: 🌝苦涩

allen: 有完整的miniapp demo 吗？请给一个

deng: 为啥啥都没有

Ton: 不会吧

Ton: 你刷新一下呢

deng: 是不是我上次打开过了

Ton: ying gai shi

deng: 我把缓存全部清了看看

Ton: 你需要到设置里面

Ton: 设置里面有清除缓存

deng: 我点登录就闪退了

Ton: 你去设置里面

Ton: 清除一下缓存

Ton: 然后整个关了重开试试呢

deng: 不行

Ton: 😣

Ton: 母鸡

cj: @sunyoki 我知道原因了，实际的msg_value不够用了

sunyoki: 👍 (reply to 45979)

deng: 需要外网么 (reply to 45975)

deng: 估计是我开了代理

cj: 我在这里-0.1 就能发出去了，但是肯定不能这样写，得从根本上解决

Ton: 你没vpn 咋用的TG

allen: 有谁知道 client.getContractState(walletAddress) 获取到的数据，怎么想区块链浏览器一样反解析出来可以看的懂的数据

deng: 给你看看我的 (reply to 45984)

deng: 我开了代理的原因

deng: 关掉代理就行了

Ton: 哦哦

Ton: 应该是抓不到你的tg 信息

Ton: 所以就不对

deng: 不是

deng: 是接口的原因

Ton: 最近在研究海外抓包

Ton: 这个还不太懂

单笔1trx: 单笔1trx

Levi: ton合约里面的op操作码是怎么转为16进制的

兰兰/防封飞机号/会员代开/🍎苹果ID: 这是TG (reply to 45877)

K: 不都是直接从十进制转过去吗 (reply to 46003)

allen: @tsivarev 有谁知道 client.getContractState(walletAddress) 获取到的数据，怎么想区块链浏览器一样反解析出来可以看的懂的数据

Flow: 哪位大佬知道bot users的具体统计口径吗？💡

allen: 我想问下，ton 支付交易 和 业务订单怎么挂钩上

deng: ton支付时,输入备注 (reply to 46011)

deng: 把你业务订单号什么的备注过去

allen: 那通过 getTransaction 获取到数据后，怎么解析出备注来

deng: payload

deng: 这个本来就是解析了的啊 (reply to 46014)

deng: 没明白

allen: 你能把你使用的 getTransaction 的接口文档地址发我一下吗

allen: 谢谢

maneka: 您听说过名为 SeaTAP 的新型加密点击器吗？他们承诺为参与 Beta 测试提供 AirDrop。

sunyoki: 什么来的

Mao: 你们本地写合约调试是用 sandbox 验证，还是发到测试网？

Levi: ton-minter 之后怎么创建pool以及添加流动性

Levi: ston fi怎么在代码里面创建pool

Leven: 有插件的话， 会直接显示，  "sdasdf"c   这样 (reply to 46003)

Levi: OK

Levi: 这个我知道了

Levi: 谢谢

Levi: ton上怎么创建pool啊

壮壮: TONVIWER_API 的key在哪里申请呀

sunyoki: 在TONVIWER_API申请

壮壮: 申请了

Mao: 这种地址如何转换成这种 UQA19p98sngw2xlRaE-Cq9U8hNmymQZ14PYUSv9x_WOsPJS9？

壮壮: 用户友好地址吗

sunyoki: Address.parse (reply to 46049)

Mao: 这个是反的 (reply to 46051)

Mao: 原始转友好

sunyoki: 传进去也可以的

Mao: ok

王大锤: 大佬们最近 做游戏吗

Mao: func 中怎么获取当前账户的 ton 余额呀？

w: 一个简单swap交易确认要好几分钟，有办法快一点嘛

w: 直接从交易失败搞成交易成功

User<6907310132>: 我可以開發 Telegram 機器人、迷你應用程式遊戲和智慧合約。

sunyoki: get_balance (reply to 46058)

whale3pro: 提交排队要一个月了 😅 (reply to 46057)

Mao: 我试试 (reply to 46074)

Louis: TON有触发事件然后让外面监听的机制吗

Louis: 通过消息调用工厂合约，工厂合约里部署了token，但是外面没法获得token的地址然后那些状态也没法获得怎么办？

Chakra: 有人知道mini app中分享给好友可以拿到发送或者取消的回调吗

wikig: 没这种说法吧,share走的是tg的外部调用吧 (reply to 46080)

Chakra: 确实是这样的

Chakra: 我看mini app文档也没有这样的api

Levi: ton sandbox 发送交易有几种方式

Levi: provider.internal 指定不了sender address为合约地址

sunyoki: 不能吧，那不就是漏洞吧， 伪造发件人哇

sunyoki: 合约内，怎么获取其他代币余额啊

prometheusoo: external (reply to 46088)

Levi: ok

Levi: external(message: Cell): Promise<void>;     internal(via: Sender, args: {         value: bigint | string;         bounce?: Maybe<boolean>;         sendMode?: SendMode;         body?: Maybe<Cell | string>;     }): Promise<void>;

Levi: external怎么指定 (reply to 46096)

K: .

liam: 使用tonweb的transfer  接口时候请求ton链报了个错：Ratelimit exceed，是什么原因呢

Ton: 问个问题，那个window.Telegram.webApp.disableVerticalSwipes()设置了没有用呀

Ton: 有没有大佬知道啥情况

— 2024-08-06 —

wikig: 是什么框架呢？  原声的话好像没啥问题？  https://t.me/tonshive_bot/demotiktok (reply to 46106)

Ton: Mini app vue2 (reply to 46137)

Ton: 这是你们做的吗 (reply to 46137)

Ton: 牛呀

wikig: 上面是原生写的demo 好像没啥冲突？

Ton: 就在初始化的时候设置嘛

wikig: 是的 我是直接load之后就设置了 (reply to 46145)

11: 有办法解析交易携带的payload嘛

wikig: 可以用tonweb的utils的boc (reply to 46154)

David: 这个社群还能加入么？ 有没有类似这种TON上新玩法分享的社群呀？ (reply to 42938)

allen: 请教下，前端代码怎么判断钱包的连接已经无效了，我这边写了两个demo，第一个先连接成功可以支付，第二个再去连接成功可以支付，再回到第一个显示钱包连接成功，但是发送交易却无响应了？

DaDa: 各位好  我是「Talking Web3」的主理人，我们每周四有一期「TON生态之夜」的专题 Space ，本周四想要邀请一些在 TON / TG 上做常规应用（非 Tap To Earn 小游戏）的开发者和项目方一起交流一下。  如果大家有做常规 MiniAPP ( 非 Tap To Earn 游戏)的，或者有朋友做这块儿的，欢迎加我。

allen: 请教下，前端代码里怎么判断钱包连接是否还有效

allen: 当两个程序同时都连接同一个用户的同一个钱包时，前面连接的session无效了，但是没有找到怎么判断无效

wikig: 有个is connect ed的属性的我记得 (reply to 46159)

allen: 谢谢，我找到了。之前是我把两个app的manifestUrl 设置的一样，导致其中一个连接成功，另一个不行。每个app的manifestUrl json 应该不一样的。 (reply to 46168)

wikig: 有这个说法吗.....？ 我好像一直都是 通用的manifest面向我做的所有webapp (reply to 46170)

allen: 我之前测试如果一样的，两个程序一个先连接钱包，另一个再去连接同样的钱包，前一个显示的是连接，但是发起交易的时候就没有响应了，我改了之后就可以了。至少我这里是这样的 (reply to 46171)

allen: 你每个app的manifes的地址都是一样的吗？还是manifes内容一样，但是请求manifes的地址是放在每个app的根目录下的 (reply to 46171)

wikig: 请求地址一样，我写的同一个url (reply to 46174)

Mao: 合约的升级文档在哪呀？怎么没看到

wikig: 有群友在abs面基吗~

Steven: 請教一下各位大佬 為什麼recipient 在交易中也會被收取network fee？ 目前有文檔在說明這個設計嗎？可能是我漏掉了🙏

allen: 好奇怪，那我两个app都先后连接同一个钱包，使用这个钱包发起交易，前一个连接的就没有反应 (reply to 46175)

wikig: 会有我记得 之前还专门测试过hhhh (reply to 46184)

wikig: 要不你把 is connect ed状态打出来看看 (reply to 46188)

allen: 你使用的是 tonConnectUI.connected 或 tonConnectUI.connector.connected 吗？ (reply to 46191)

wikig: 应该是其中之一 (reply to 46192)

allen: 打印了，都是true (reply to 46193)

cajh: 在func 里面怎么创建 STON.fi交易对和添加流动性呢，有大佬做过么

allen: 但是前一个连连接都钱包的发起交易就是不行

wikig: https://github.com/ton-connect/sdk/issues/158 (reply to 46194)

wikig: 可能是这个

wikig: 我几个月前提的issues

wikig: 好像还没修

allen: 我试了也是不行 (reply to 46198)

allen: 调用 getTransaction 都可以，就是调用 tonConnectUI.sendTransaction 有问题

wikig: 那我觉得可以提个issues了 (reply to 46202)

allen: 会不会是测试网不稳定问题，你所有app在测试网上，同一个用户同时在不同的app连接tonkeeper 钱包，不会有问题是吗？ (reply to 46198)

allen: 你连接的是 telegram wallet 还是 tonkeeper的钱包

wikig: 都用过 主要是@wallet (reply to 46205)

sua: api/v3/transactionsByMasterchainBlock 各位大佬有调用过这个接口解析充值吗，ton充值的话可以看in_msg，但是如果是jetton代币转账的话没有找到代币的合约地址，有大佬知道怎么确定是哪个代币的充值吗

allen: 问下，你钱包的连接都是前端发起连接的是吗？所有app连接后的本地存储中的ton-connect-storage_bridge-connection 里的值都是不一样的是吗？ (reply to 46207)

allen: 我故意尝试了一下，把本地存储的值覆盖到另一个浏览器的启动的app里，两个app都可以支付了，和session有关？

wikig: 这个得看tonconnect ui的缓存规则了 (reply to 46212)

wale: 哪位大牛帮忙看看这个程序哪里有问题 写数据没错误，调getCounter的时候在load_data()就报错了 Unable to execute get method. Got exit_code: 9  #include "imports/stdlib.fc";  ;; global cell counters;  (cell) load_data() impure {     slice ds = get_data().begin_parse();     return ds~load_dict();     ;; ds.end_parse(); }  ;; save_data stores storage variables as a cell into persistent storage () save_data(cell counters) impure {     set_data(         begin_cell()             .store_dict(counters)             .end_cell()     ); }  () recv_internal(int my_balance, int msg_value, cell in_msg_full, slice in_msg_body) impure {     if (in_msg_body.slice_empty?()) { ;; ignore all empty messages         return ();     }      slice cs = in_msg_full.begin_parse();     int flags = cs~load_uint(4);     if (flags & 1) { ;; ignore all bounced messages         return ();     }      var counters = load_data();     var sender_address = cs~load_msg_addr();     int user_to_int = sender_address~load_uint(256);      int op = in_msg_body~load_uint(32);      int amount = in_msg_body~load_int(32);      ;; int slot = in_msg_body~load_uint(32);      if (op == 1) {         counters = udict_set(counters, 256, user_to_int, begin_cell().store_int(amount, 32).end_cell().begin_parse());         save_data(counters);         return ();     }      throw(0xffff); ;; if the message contains an op that is not known to this contract, we throw  }  (int) getCounter(slice user_address) method_id {     cell counters = load_data();     if counters.dict_empty?() {         return 0;     }     return 111;     int user_int = user_address~load_uint(256);     (slice data, int res) = udict_get?(counters, 256, user_int);     if (res) {         return data~load_int(32);     }     return res; }

wale: 要怎么初始化，文档上好像没写

wale: 如果初始化有问题，写数据应该 也会报错吧

wale: blueprint

wale: 那可能是初始化的问题，我研究下怎么初始化合约，谢谢大佬🙏

Mao: 合约报这个错是int放的太大了吗？

Manta: 有没有func 的ts 部署代码

Manta: 大佬们

sunyoki: 蓝图示例不是有吗 (reply to 46235)

allen: 请教大老们，客户端a向b发起支付交易后，在服务端怎么知道b是否有交易了？通过 api/v3/transactions 或 api/v2/transactions 无法得到b的全部交易数据，怎么做更合理些？

Mao: 请问下，这种减去 USD，增加 TON 的是如果操作才能这项展示？

Fedor: 你好，请告诉我在哪里可以租到中国的 VPS 服务器

leon: 请教大佬们，这个jettonMinter构造的时候怎么传啊，我看很多例子都是传一个address，但是一个参数不够呀

Louis: 怎么通过FUNC合约代码添加代币流动性

Yang: 🐞 Misti – TON Static Program Analyzer  The first release of Misti – a static program analyzer for the TON blockchain has landed!  🐛 Detect Vulnerabilities: Identify and fix potential security flaws early in the development cycle.  🛠 Create Custom Detectors: Solve specific problems in your code or provide a thorough security review if you are an auditor.  📄 Improve Code Quality: Maintain high standards by catching bugs and enforcing best practices automatically.  🚀 Streamline Development: Integrate Misti into your CI/CD pipeline to ensure continuous code quality checks.  💎 Language Support: Tact ⚡ is supported; FunC support is planned.   - GitHub: https://github.com/nowarp/misti, contributions are very welcome! - Documentation: https://nowarp.github.io/tools/misti/docs - Telegram Group: @misti_dev (forwarded from TON Dev News)

— 2024-08-07 —

Jerry: 请问发送交易后，如何跟踪交易是否成功

Jerry: boc里包含txid吗

Jerry: @Advac777

sunyoki: 同问 (reply to 46332)

Play: https://docs.ton.org/mandarin/develop/howto/faq#%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E7%A1%AE%E5%AE%9A%E4%BA%A4%E6%98%93100%E5%AE%8C%E6%88%90%E6%9F%A5%E8%AF%A2%E4%BA%A4%E6%98%93%E7%BA%A7%E6%95%B0%E6%8D%AE%E6%98%AF%E5%90%A6%E8%B6%B3%E4%BB%A5%E8%8E%B7%E5%BE%97%E8%BF%99%E4%BA%9B%E4%BF%A1%E6%81%AF   这个看看 (reply to 46332)

Ou: 购买星星，国内需要什么样的银行卡，我这边提示

wikig: Telegram star在国区能用吗？还是说可以用Apple pay直接买来着 (reply to 46344)

Ou: 用不了，就是问下有没有可以用的可能

User<5183898074>: ton api:https://sandbox-v4.tonhubapi.com    是不是挂了，最近在测试网部署一直超时，有人遇到吗

wale: FunC有没有类似remix的之类的调试工具？

2: 好像香港的网络请求偶尔会被ban (reply to 46349)

User<5183898074>: 换了好几个节点都不行，你用的哪个节点 (reply to 46354)

🐮: 我用正式的网络好像也不行

🐮: 获取的余额不对  合约也发不出去

🐮: 这种是合约写的有问题吗   这个合约是github上的

wale: 一般合约有问题也编译不过去吧

🐮: https://github.com/howardpen9/jetton-implementation-in-tact

🐮: 我是用的这个合约代码

🐮: 直接编译的

wale: 不太懂，我是个初学者，不过没遇到你这个问题

🐮: 你们正式节点是用的哪个

wale: 默认的吧，我没指定过

User<7002830043>: 自己买的啊 (reply to 46365)

wale: 要买什么？

wale: FunC的调试工具在哪儿可以买？

User<5183898074>: 找到问题了，应该是新钱包没初始化，换个旧钱包就行了。哎处处是坑 (reply to 46349)

wale: 转点ton进去就初始化了吧

User<5183898074>: 不行，新钱包在水龙头领完，依然不能发送。得老钱包

wale: 以后留意下，我都是在测试网练习

2: 不会有这样的问题啊，我用新钱包也部署成功了 (reply to 46378)

Rhonda: 请问一下，链下签名，合约里面验证。用tact怎么做？

Rhonda: 没看到相关示例。

Rhonda: 比如：让用户调用合约领取空投，就需要做身份验证。

泊相: 应该不用啊 (reply to 46387)

泊相: 这些是这么样的

Mao: https://testnet.tonviewer.com/EQCbqjsQRZjBguy1O8Xe207AA8508iUPDeV8+BLVt+lu62ju

Mao: 这个钱包地址咋不一样？

wale: ton有两种编码方式,可以用这个转换 https://ton.org/address/ (reply to 46398)

lemon: 有没有大佬开发Android tonwallet的

Mao: 这个回弹不回弹有啥区别呀？

wale: 我也不太懂，只看文档是有两种格式

Mao: 哦哦

wale: 哪位大佬指点下FunC有啥调试工具没有？

wale: 主要就是看看代码是怎么跑的，比如if进没进，某个变量的内容是什么

🐮: 怎么初始化 (reply to 46378)

2: ~dump (reply to 46412)

wale: 方便详细说下么？

wale: 有没有相关的文档，我看官方的文档写的很简略

wale: 嗯嗯，我再研究研究，谢谢各位大佬

Mao: 执行部署合约会进到 recv_internal 事件吗？

Mao: 我用 sandbox 测不会，先上的好像会

Mao: 明白了传了 body 就会进

Mao: ~dump 如何打印一个 slice 地址呀？

11: 同问 (reply to 46426)

User<7393351146>: SOL  141.39－143.55  區間多  TP1: 147 TP2: 150 TP3: 154  SL: 137.58 (forwarded from Crypto_獵捕者合約帝)

CryptoCooker: Looking for dev position as ton blockchain dev

— 2024-08-08 —

Jerry: 感谢，我们用的tonconnect，阅读完您提供的文档，代码已写完，如何尝试进行测试呢 (reply to 46342)

Play: 你好 我这边是直接在正式环境  往一个地址支付TON  之后检查交易完成  完成测试的 (reply to 46487)

Qubitcoin: 测试环境测的手续费消耗和正式环境一样吗？

Qubitcoin: 能在测试环境算一个手续费，用到正式环境吗？

Bojack: 有没有带支付的例子，前后端，学习下

outcast: 想知道 ton的前端库是 如何查询 合约在浏览器中显示 Inactive 和Active这种状态的

🐮: 这个错误有没有大佬遇到过

gavin: jetton master 合约部署成功了么

🐮: 部署成功了

Howard: oh, cute 可愛 👀🙂🥸⭐️⭐️ (reply to 46169)

Hizz on Ton: Anyone have ready mode app like hamaster?

c: tact 好用吗

11: 不好用，不如func

LilMe: 有没有比较完整的一个小应用的demo

LilMe: 前端基本还好，func有点懵

Autumn: 现在是否有官方的开发人员在维护 Dart SDK? darttonconnect??

Autumn: SDK 目前只支持到2.18, 而且都已经8个月没有维护了

Manta: () save_data(int total_supply, slice admin_address, cell content, cell jetton_wallet_code) impure inline {     set_data(begin_cell()             .store_coins(total_supply)             .store_slice(admin_address)             .store_ref(content)             .store_ref(jetton_wallet_code)             .end_cell()     ); } func的jetton的jetton_wallet_code 怎么用ts代码生成

User<6218334417>: 请教下 在@telegram-apps/telegram-ui中，怎么导入文档中给出的Icon?  比如这里的Icon20QuestionMark.  https://tgui.xelene.me/?path=/docs/blocks-iconbutton--documentation

🐮: 调用mint之类的方法的话  也需要waitForDeploy吗

wonderful: 有大佬用java查询ton这块的没

allen: 大佬们，getTransactions 的返回值说明有吗？都代表什么意思？有文档吗

Chirs: 怎么能够通过go开发验证ton的钱包地址是符合编码格式的主网地址

Chirs: 谢谢、 (reply to 46554)

Rhonda: tact编译成的ts文件，这个sender怎么手动创建？

Rhonda: How to manually create a sender?Guys, help me. (forwarded from Rhonda)

🐮: 像这种代码执行完了    哈希也有了  但代币没有发出来是什么原因有大哥知道吗

Lek: ton链有经验的开发加一下，有业务

Sean: 跪求大佬指点，jetton dedust购买代币，交易完成，会出现没有上链，没有报错的情况。大概10笔中有1笔会这样。已经尽可能的进行广播了，这个一般是啥原因？有啥能排查出没有上链的原因吗？

Sun-J: 你用的啥语言 (reply to 46577)

Sean: node (reply to 46579)

Chaincode: opcode错了？ (reply to 46569)

🐮: https://github.com/howardpen9/jetton-implementation-in-tact/tree/main

🐮: 我用这个代码发的

🐮: 没搞懂为啥不行了

Chaincode: 不会tact😂觉得直接用FunC更简单

🐮: 计算出合约地址后  直接调用合约的mint接口是不是就会自动部署了

Chaincode: 你没init怎么能调用成功？

🐮: init不是在计算合约地址之前吗

Chaincode: 地址链下都能计算出来

🐮: 我看示例是直接计算后 调用的mint

Chaincode: 这个调用了init (reply to 46593)

🐮: 没搞懂哪里出的问题😂

🐮: 用blueprint就能正常发

Logan 🐯: tg一对一推送消息给用户的demo有吗

william: ？

— 2024-08-09 —

Jerry: 发送0.01的交易，余额够，但是一直显示发送失败是怎么回事呀

Sun-J: 这里面这个哈希 怎么转成自己的看得懂的额

gavin: toString('hex') 呢 (reply to 46652)

Sun-J: 结果倒是可以   a0056a4d12a47a85499b0ce0929dc8e22509ce59fc64160703e4c735f135e4c3 (reply to 46653)

Sun-J: 只是 按道理 这个哈希  应该和网站上查询一直吧

Sun-J: 和这个应该一样吧

gavin: 🤣 你好好看看代码吧 你的这个cell 是payload 的cell吧

Sun-J: 是的  主要那个js方法发送 不返回任何参数😂 (reply to 46657)

Jerry: 求助 (reply to 46646)

Jerry: {     "method": "sendTransaction",     "params": [         "{\"messages\":[{\"address\":\"0:83cbb6c15b997e5183e72aa5393b7ec506f40202fa6ad1022032dc7ceda2f912\",\"amount\":\"20000000\"}],\"from\":\"0:c88351a5ac0c7b106eb899ff61adcbaa91d03d43e7a878890205e738ade9ed06\",\"network\":\"-239\"}"     ],     "id": "16" }

Jerry: 参数又是对的

Logan 🐯: tg一对一推送消息给用户的demo有吗

HY game: 奇怪

Trinity: 想请问下有人了解如果tg号被封了，ton钱包里的钱怎么取回来来吗

HY game: 少放一点

wale: ton 执行错误发生回滚也不报错么？

earth: ton链能套利吗😀？

earth: 有人在ton链上套利吗

Na: 你如果有记录  助记词,应该就可以 (reply to 46671)

mtxsser: ton的钱包好像没有助记词吧

Trinity: 刚发现ton space有助记词

Trinity: 可以导入到别的tg号的钱包

Leo: 兄弟们，怎么能在bot里调用@Wallet的转账和签名功能啊

earth: 兄弟们，ton链能做三明治吗

gavin: 可以的有很多夹子 (reply to 46686)

earth: 我特么

earth: 钱还真难赚啊

🐮: 谁有tact能发布代币的代码

🐮: 不用blueprint的那种

Bill: jetton-implementation-in-tact  看看 github这个例子 (reply to 46691)

🐮: 这个发布不了

🐮: 重新编译就发布不了

🐮: 他应该是改了哪里代码

Miss Siyu: 求助，我的Tonkeeper是W5如何切换W4?

Bill: 我都是删除了W5钱包，然后给对应V4钱包地址打TON，然后重新导入

Bill: 我也找半天没有对应切换功能，好像只能让V4钱包激活，这样他导入时候自动识别成V4钱包 (reply to 46699)

Bill: 刚试了成功了。。你需要在.env写上钱包私钥。。参考contract.deploy.ts的19行 (reply to 46697)

🐮: 你build一下

🐮: 看看是不是就不行了

🐮: 他build的那个代码是可以的    但后面源码改过了 应该

🐮: 用他源码build一次   就发布不了了

Miss Siyu: 谢谢你的回答，我的APP 切换不了，可能要桌面端 (reply to 46703)

Bill: 我本地的代码，你看看吧。我build和deploy都可以的 (reply to 46704)

🐮: OK  多谢   我对比对比

🐮: @billiiblock 哥们你用的哪个版本的node

Logan 🐯: tg一对一推送消息给用户的demo有吗

Logan 🐯: 谁知道呀

Bill: node --version v18.19.0 yarn --version 1.22.22 macos

OlaXBT: 🙏 tap2earn: Bettor Whale

🐮: 哥哥  再帮我试试  删掉yarn.lock  然后重新yarn install   yarn build  后再部署看行不行 (reply to 46720)

Bill: 嗯嗯

Bill: 。。yarn install [4/4] 🔨  Building fresh packages... success Saved lockfile. ✨  Done in 79.75s. 。。yarn build    > JettonDefaultWallet    > SampleJetton ✨  Done in 2.19s. 。。yarn deploy ====== Deployment message sent to =======  EQAUiLNS0xNRSeousCACfM_XnItU8bZ2-E3CXoHwoiXIVqkO ✨  Done in 10.92s.

Bill: 都可以，没问题

🐮: 麻了   这是什么情况

🐮: 你发的代码  刚刚发成功了两个  后面又不行了

Jennie: 请问miniapp里面连钱包有没有文档参考

🐮: 是@tact-lang/compiler版本问题    你改成1.4.0看看能发布不 (reply to 46726)

Jennie: 请问miniapp里面连钱包有没有文档参考

Jennie: https://docs.ton.org/mandarin/develop/dapps/ton-connect/tg-bot-integration 我尝试参考这个文档，但它已经失效

壮壮: txn 和 jetton 区别是啥

gavin: 这个就是telegram bot的api, 很容易 你在google 里面搜这个 关键词 “telegram bot send message github” (reply to 46718)

gavin: https://docs.ton.org/develop/dapps/ton-connect/developers (reply to 46739)

Nick: TON这边，有没有哪个网站，可以统计TON合约的每日交易量和交易的地址？

Nick: 有的话，就不用我重复造轮子了

wyz: 肯定又把

wyz: 现在coinmarketcap 这些网站都会监听吧

Louis: 怎么在TON链监控链上的数据，就像EVM的事件一样。。。

Yo🐾: 想请问下 我现在有message_hash 有什么办法可以直接推导出txid吗

rdyer chen: 谁可以做企业 代签

rdyer chen: 谁可以做苹果企业 代签

gavin: https://tonconsole.com/analytics/query (reply to 46750)

gavin: 都可以直接查sql

Brian: Ton区块链一般怎么监听交易是否成功的？ 轮询？ 还是后端去扒数据？

Chaincode: 笨办法，后端去链上抓数据，确认结果 (reply to 46780)

🐮: https://github.com/tact-lang/tact/issues/674   有人知道这个问题的原因吗

Cake: hello，想请教下大家TON的 send_raw_message 是一次能发送多个消息是吗

Cake: 我看了下高性能钱包V3 的代码中没有使用for 循环调用 send_raw_message ，那就是通过send_raw_message 本身去一次能发多个消息吗？

Coder: 有人知道为什么小程序链接会提示这个吗

User<7148949927>: Http? (reply to 46792)

sunyoki: 各位大佬，字典是怎么使用的

dkdn: ton技术有经验的急需，

sunyoki: 有一星期经验行不行，哈哈🤣

Ton: 要做啥 (reply to 46812)

gavin: game要订阅event 处理 (reply to 46788)

Degen: 如何确定一笔交易已经完成了呢，有什么api可以检测到？

bc1p: 大佬们，请教个问题：  用户打开miniapp，miniapp对应的bot就会有这句提示，是不是意味着bot可以主动给用户发消息，  在api sendMessage里面必须要填chat id，如果是bot主动发起，要怎么发呢

— 2024-08-10 —

cajh: 怎么在func合约里向 ston.fi 创建交易对添加流动性呢

cajh: 有没有大佬做过呢

kevin: Golang 脚本做过 (reply to 46927)

cajh: 脚本的话ston.fi 官方文档都是有的，但是func的全网我是没找到呀😅。太难受了

kevin: 官方有 JS 的， 我写了个 Golang 的。

Jeme: 有人对Ton版的314合约感兴趣吗？

maiya: 有项目吗

Jeme: 有要发币的吗？

Howard: 我理解你是要 「Telegram Stars 用戶支付成功後、取得這個用戶的 Chat ID」？ (reply to 46895)

Howard: 可以这样说，但是还是要编译、写测试、然后到测试网测试。  对于合约开发没经验得人来说，也挺难的。 (reply to 46931)

11: func中的`save_data`是规定的函数名嘛，我可以用其他的函数名代替它嘛

Howard: 不行，是标准语句。相当于加减乘除的加法符号。 (reply to 46939)

11: func中的标准语句在哪个文档能找到哇

Howard: 我說錯了, save_data() 這段是自己宣告的 名字應該是可改動的.  https://github.com/ston-fi/funcbox/blob/main/contracts/stdlib.fc; 倒是這個 standard library 是可以直接用的 (reply to 46941)

sunyoki: 除了c4 语句 都可以改吧 (reply to 46942)

11: 想请教一下大佬，那在合约初始化的时候，是会默认调用save_data这个函数吗，我如果有`save_data1` 和 save_data2 两个函数，怎么指定初始化的时候调用哪个函数？ (reply to 46943)

sunyoki: 说的有道理，还没尝试😂 (reply to 46945)

11: 但是初始化的时候，在wrappers中调用了 createFromConfig 的函数，这个函数的参数是和 save_data 中的参数相同的， 我有点不太理解为什么需要和 save_data 的参数相同，如果有两个不同的save_data函数我应该在写wrappers的时候用哪一个呢

sunyoki: 记得好像问过，c4是始终覆写最新的， createFromConfig不写对应的数据位也可以好像，忘记了

11: c3,c4都是始终覆写最新数据吧，区别好像是c3不会改变当前代码

11: 我大概理解了，如果有不同的 save_data 采用了不同的数据格式， 可能会导致数据错乱， 在合约初始化的时候调用的数据格式和哪个 save_data 相同，就代表合约用的是哪个函数的数据存储方案

Chaincode: 初始化和函数没半毛钱关系

11: 是啊，但是后面更改数据存储的时候还会调用到set_data，所以还是需要和函数内的set_data格式一致

XG: 有谁知道miniapp如何蓝标认证吗

HY game: 找 bot

HY game: 用bot验证

cajh: 写test的合约抱错的时候怎么能知道抱错信息呢

gavin: 看exit code (reply to 46980)

gavin: Google telegram verify 需要组织kyc (reply to 46967)

cajh: default exception handler, terminating vm with exit code 65535  这是个啥错误，不是我定义的

gavin: 你在这个群里搜索 65535的聊天记录 有人问过了 (reply to 46983)

小: 一个cell可以有4个ref，当cell存在ref的时候是否会影响data的存储空间哇

小: 无论一个cell是否有ref，data空间都是1023bit？

cajh: 好的 谢谢 (reply to 46984)

cajh: 找到问题了，是OP Code不匹配 (reply to 46983)

XG: 公司的信息是吗 (reply to 46982)

XG: 信息提交了，不知道什么时候能下来

allen: 大佬们 mini app , telegram wallet 有测试网的概念吗？开发时能连钱包的测试网吗？

gavin: 没有 不过你可以用其他wallet 比如ton keeper 支持testnet (reply to 46994)

🐮: 有链接不    我没找到这个😂 (reply to 46930)

🐮: 现在的跨链桥也没有完全去中心化吧     是不是也只是找个第三方托管    是这么理解的吗

maiya: 没赶上

wikig: @wallet似乎是没有testnet的 (reply to 46994)

maiya: 有的，官方的钱包浏览器插件可以切换到测试网络的 (reply to 47017)

cajh: stron.fi 的测试网的链接谁知道呀，找不到

wikig: 阿？插件？ @wallet不是直接做的telegram托管钱包吗 (reply to 47019)

maiya: 开发的时候不在浏览器调试吗 (reply to 47022)

Howard: no man (reply to 47031)

allen: 谢谢，tonkeeper 那个我知道有，也调通了 (reply to 46995)

GIM: 我最近也要研究这个 (reply to 46685)

— 2024-08-11 —

maiya: 😽

0x7c26: 调用托管钱包(Wallet Pay)  调用非托管钱包(Wallet TON Space)  Wallet官网 (reply to 46685)

Alex: 大家有碰到过telegram小程序ws报错，然后mac和iphone客户端能玩，安卓和windows卡在加载页面的问题吗

Alex: 想知道怎么解决

Alex: 有问题的端，连接是正常的，服务端没有读取到客户端的消息，主动发出关闭请求的

GIM: thx (reply to 47074)

泊相: 这就给你问对了 (reply to 47108)

Volunteer🇻: 按照github上的示例发送代币，怎么老是失败嘞，，

Volunteer🇻: 吐了

Volunteer🇻: 搞了两天一个转账死活转不出去

Gibran: 轮询查询交易信息接口是什么？

Gibran: 各位大佬,服务端只能通过轮询API接口获取成功交易信息吗？没有类似回调机制吗？另外轮询接口是什么🤔️

Howard: TON API 試試 (reply to 47132)

Volunteer🇻: 哪个大佬能给我一个转账jetton的脚本，我这死活不成功。。

大宝宝 兑换TRX能量 代开飞机会员公群担保 *资金往来语音确认*: 厉害👍🏻

maiya: 🥹

葫芦娃: 怎么才能赚钱

— 2024-08-12 —

Jerry: @dev_rel 请问小程序内接入telegram star支付和bot是一样的吗？后端sendinvoic拿到返回，怎么在miniapp小程序中展示呢，bot是可以按chatid返回给用户消息，小程序怎么做呢

Md Tarek: ও

Jeme: 有招Ton开发的吗？

Gibran: 感谢大佬指点，请问只能通过轮询拿到交易信息吗？ 是通过上面截图上tonAPI 这个接口获取交易信息吗？ (reply to 47138)

gavin: 小程序一样的 有一个openInvoice的方法调用就完事了 (reply to 47164)

🐮: tg的game可以做成横屏吗

lemon: Android  ton钱包有没有什么集成demo

User<6337847911>: 👋

None: 官方示例中解析getTransactions接口有transaction.in_msg.info但是我通过getTransactions接口拿到的数据没有info这个字段，有大佬知道是什么原因吗。还有就是官方示例中有判断type=internal，我这里transaction中也没有internal的字样，我该怎么判断。

gavin: 是不是用的lib 或者 api 不一样呢

None: 我用的java的tonlib

None: 官方示例只有js和python的

Chaincode: 拿到数据反序列化出来的吧 (reply to 47184)

None: 对

None: 我拿到的结构数据结构是这样的，跟官方给的示例不太一样

allen: 大佬们，有没有碰到 连续多次发送交易后，有些交易是 Pending transaction，在钱包客户端 Pending 一段时间后，记录就消失了。

gavin: 是不是 seqno 自增导致的  试试高负载钱包呢 (reply to 47192)

allen: 有demo网址吗？这个还不太了解，谢谢 (reply to 47193)

gavin: https://docs.ton.org/participate/wallets/contracts#highload-wallet-v3 (reply to 47194)

Chaincode: 你进你使用的python库看一下如何反序列化的 (reply to 47190)

Howard: 👍🏾 — @devs_zh (reply to 47172)

None: 我用的java的，  现在能对in_msg.msg_data.body进行反序列化，解析成CellSlice， 但是还是不知道该怎么判断internal (reply to 47196)

Vicki: 问下这个能连测试钱包不

🐮: java有ton的库吗 (reply to 47199)

None: 有   ton4j

Degen: 你们都用什么graphql 拉链上的数据

wikig: 方案很多 可以试试tonapi toncemter 或者tonxapi 和dton (reply to 47132)

Chi: import {   TonClient,   Address,   internal,   WalletContractV4,   TonClient4, } from "@ton/ton";  import { mnemonicToPrivateKey } from "@ton/crypto";  const keyPair = await mnemonicToPrivateKey(fromMnemonic.split(" "));  const wallet = WalletContractV4.create({   publicKey: keyPair.publicKey,   workchain: 0, });  const walletContract = client.open(wallet); const address = wallet.address.toString();  // Prepare transfer const resInfo = await fetch(   `https://testnet.toncenter.com/api/v2/getAddressInformation?address=${address}`,   {  method: "GET",  headers: {    "Content-Type": "application/json",    "X-API-Key":   process.env.API_KEY,  },   } );  const info = await resInfo.json(); const seqno = info.result.block_id.seqno;  console.log(seqno, amount, toAddress); console.log(await client.getBalance(Address.parse(address)));  const cell = walletContract.createTransfer({   seqno,   secretKey: keyPair.secretKey,   messages: [  internal({    value: "1",    to: "EQBmzLAL3h2i78tu72Lt5pc0KxecwVOgpvLu8R-ySb0C4TYQ",    bounce: false,  }),   ], });  console.log(await walletContract.send(cell));        我在嘗試 build 一個傳送 TON 的 API，但送出交易時候都會得到 405 Method Not Allowed 我確認 boc 是存在的，下面是送出時得到錯誤訊息  method: 'post',     url: 'https://testnet.toncenter.com/api/v2/',     data: '{"boc":"te6cckEBAgEAqgAB4YgBrBHk6YRVs5wxu4C2MLyx1orUsJbO1sdgE0wSYvmv834BEn6l6bjNHlv3+dfEDeDj4Ejxnw86G10jgUdABV/I+5EEGBw4WmrGOGUK5d6WXcA0g+ReeUjGQky76SHzIgnQQU1NGLs1y7rYCnc9eAAMAQBoQgAzZlgF7w7Rd+W3d7F280uaFYvOYKnQU3l3eI/ZJN6BcKHc1lAAAAAAAAAAAAAAAAAAAPhgElk="}' .... data: { ok: false, error: 'Method Not Allowed', code: 405 }   接著我將 boc 複製到 Toncenter 的 Swagger，得到以下錯誤  "ok": false,   "error": "LITE_SERVER_UNKNOWN: cannot apply external message to current state : External message was not accepted\nCannot run message on account: inbound external message rejected by transaction D608F274C22AD9CE18DDC05B185E58EB456A584B676B63B009A609317CD7F9BF:\nexitcode=33, steps=23, gas_used=0\nVM Log (truncated):\n...te NOW\nexecute LEQ\nexecute THROWIF 36\nexecute PUSH c4\nexecute CTOS\nexecute LDU 32\nexecute LDU 32\nexecute LDU 256\nexecute LDDICT\nexecute ENDS\nexecute XCPU s4,s3\nexecute EQUAL\nexecute THROWIFNOT 33\ndefault exception handler, terminating vm with exit code 33\n",   "code": 500   我推測是 boc 的編碼錯誤，我該怎麼修正

s: 大佬们，请教个问题，我想进行ton转账，使用php语言有什么好用的SDK吗

s: 谢谢

Chi: const client = new TonClient({     endpoint: "https://testnet.toncenter.com/api/v2/", // Replace with your preferred endpoint     apiKey: process.env.TONCENTER_API_KEY,   }); (reply to 47223)

Chi: Tonkeeper : 0QDWCPJ0wirZzhjdwFsYXljrRWpYS2drY7AJpgkxfNf5vxIA

Chi: 如果 boc 沒問題的話，那為什麼我透過 Swagger 的 UI 直接發送會出問題？ (reply to 47215)

Chi: sendBoc 這隻 API 應該只有 boc 一個 parameter 而已

Chi: https://testnet.toncenter.com/api/v2/#/send/send_boc_sendBoc_post

Chi: 好我試試

Chi: 有了，非常感謝你

Chi: 但這個 function 好像不能用，我是直接 call getWalletInformation 得到 seqno 的 (reply to 47233)

Chi: @ton/ton 在 getAddressInformation 的預設好像都是用 post ，不知道有沒有人遇到一樣的問題

Gibran: 这三种方案有什么区别？我通过/v2/accounts/{account_id}/events 能拿到交易详情数据，是不是也可以用这个接口？ (reply to 47210)

Chi: 你用的 version 是多少 ？ (reply to 47238)

Chi: headers: Object [AxiosHeaders] {       Accept: 'application/json, text/plain, */*',       'Content-Type': 'application/json',       'X-Ton-Client-Version': '14.0.0',       'X-API-Key': '542bf2e33ab20353c2152ede36116b1bab33e4e61687e3f421bae33bddde273b',       'User-Agent': 'axios/1.7.3',       'Content-Length': '131',       'Accept-Encoding': 'gzip, compress, deflate, br'     },     method: 'post',     url: 'https://testnet.toncenter.com/api/v2/',     data: '{"id":"1","jsonrpc":"2.0","method":"getAddressInformation","params":{"address":"EQDWCPJ0wirZzhjdwFsYXljrRWpYS2drY7AJpgkxfNf5v_RP"}}'  我在調用 getSeqno() 的時候會得到 405 Method Not Allow

Chi: 如果有成功的 repo 請讓我參考一下

wikig: 也可以 无非是提供商不同 (reply to 47239)

Chi: 有了，謝謝 (reply to 47243)

Gibran: 感谢解惑 (reply to 47244)

xixi: 请问有人试过从 miniapp 使用 openTelegramLink 打开 https://t.me/xxxx 这样的 url 吗，按理说应该不会打开浏览器而是直接打开特定的 chat 或者 channel 吧

Gibran: https://tonapi.io/v2/accounts/{accountId}/events 这个接口拿不到payload,哪个接口可以取 (reply to 47244)

wikig: 直接获取transaction详情那个呗 (reply to 47258)

mind: 遇到个奇怪的问题，输入message参数cell的长度大于6的情况，会执行失败， 以前测试的时候没有这个问题。 是新加了什么限制吗？

mind: 本地测试是正常的，但是在测试网络或者正式网络，调用的时候就返回 exit code -14

mind: 不是 我直接调get方法

mind: 我怀疑现在限制了输入数据的大小

mind: 或者限制了循环次数？

mind: 就是cell的块的个数

mind: 当我6个块的时候是正常的，7个块就报错了…. 本地测试是正常执行的

gavin: 你换成ref sclie试试 (reply to 47270)

gavin: 一个cell里面别搞那么多

gavin: 多ref几个 拆开就好了

mind: 就是多个ref

gavin: ref了几个

mind: 7个就失败

gavin: 那必然失败

mind: 7个以内是正常的

gavin: 应该类似多叉树那样

gavin: ref ref ref 那样就行

mind: storeref 不能连太多吗

mind: 那传入长数组怎么处理

mind: 我是一个cell只ref一个

mind: 一个个连起来的

mind: 不是一个ref多个

mind: 应该符合这个规则的

gavin: 最好能发下代码, 现在信息很少也猜不着

Gibran: 前端这么请求会报错，不传payload可以正常请求，传payload会提示无法验证交易

gavin: 你是想加上自定义的memo str？ (reply to 47290)

gavin: 你可能需要用cell的形式来构建payload 而不是一个普通的btoa

mind: 这搞get是我用来测试的，就是做一个默克尔验证，实际的那个接受消息的函数钱包发送的时候直接报失败：  message Mint {     index: Int;     to: Address;     amount: Int;     proof: Cell;     proof_length: Int;     to_str: String; }  get fun testMerkle(msg: Mint): String {         // Merkle tree verification         let current_hash: String = self.calculate_transaction_hash(msg.to_str, msg.amount);         let frist_cell: Bool = true;          let parser : Slice = msg.proof.beginParse();         let index: Int = msg.index;                  repeat (msg.proof_length) {             if (!frist_cell) {                 if !parser.refsEmpty() {                     parser = parser.loadRef().beginParse();                 }             }             let _hash: Int = parser.loadUint(128);             let sb: StringBuilder = beginString();               if (index % 2 == 0) {                 sb.append(current_hash);                 sb.append(_hash.toString());             } else {                 sb.append(_hash.toString());                 sb.append(current_hash);             }             current_hash = self.sha128(sb.toString());             index = index / 2;             frist_cell = false;         }          return current_hash;      }

cajh: 合约ton到账是异步的么，现在有个业务场景，交易池达到200ton 添加dex交易池，但是正好到200或大于200的时候转账ton失败，是因为ton异步到账的原因么，同样的交易发起第二笔就成功了。

mind: 以前是正常的，最近突然发现proof ref连超过6个 链上就给失败

gavin: 看这个好像跟cell没关系啊 return的是一个hash？ (reply to 47293)

mind: 嗯

gavin: 哦 是 msg.proof 这个里面是一堆cell是吧

mind: 对

mind: 本地test是正常返回的 链上似乎不给执行

mind: cell里ref连6个以内又是能返回的orz

Devin: get function不应该是不消耗Gas的吗？

gavin: 你可以在   parser = parser.loadRef().beginParse();  加一个dump 看看是不是loadRef了多次 (reply to 47301)

mind: 似乎不是ref的问题，我把proof length设置成6 就能正常返回

mind: 难道循环次数被限制了…proof length设小就正常…. (reply to 47303)

Gibran: 试了两笔，出款账户tansactions列表会返回payload, 入款账户transactions没有payload (reply to 47292)

gavin: 没有限制啊 才6次而已, 大概率是代码的问题  get 方法不收gas (reply to 47307)

mind: 如果代码问题 应该blueprint本地的test也过不了吧 😭 本地是正常的，很迷… 我再检查下…. (reply to 47309)

gavin: 本地sandbox没问题？

mind: 对 (reply to 47313)

fuck eth: 怎么获取钱包里usdt余额

fuck eth: 🥲

cc: @tonconnect/ui-react这个库有具体的方法来构建和解析的吗？ (reply to 47292)

Ether: @dev_rel 不好意思想請問一下，未來 mini app 會支援移動裝置上全屏顯示嗎？如果要實現像是 mini game 那樣的全屏顯示體驗，是不是只能用 mini game 去做呢？

Louis: 你真是天才啊 (reply to 44679)

Louis: 大腿中的大腿

web3项目开发定制、链游、Dapp: 👍👍

🐮: 有没有FunC的高手  指导一下学习  给学费

🐮: 话说你们整个ton

🐮: 链研究下来 从tact到func  一般是花了多少时间研究透呀

Gibran: 自定义的payload参数获取不到什么原因啊？

maiya: 好的

c: {     "user": {         "id": 7255019437,         "first_name": "c",         "last_name": "ao",         "username": "caocaovao",         "language_code": "en",         "allows_write_to_pm": true     },     "chat_instance": "-3296365182887715484",     "chat_type": "sender",     "auth_date": "1723471068",     "hash": "f4ef6d776bb24ae233c3c344f535d588a8d4a650bbbf80dea12ae152575bafc7" } 我从telegram 拿到的 这些信息 我要怎么校验这个hash

c: 大佬们

c: 我是java

Chaincode: https://core.telegram.org/widgets/login#checking-authorization (reply to 47360)

c: 这个我试过了 加密出来的hash 还是不一致 不知道哪里出了问题 (reply to 47363)

Chaincode: 从URL拿的话要先 Unescape下，具体不知道你怎么取的

c: 不使用这个 js不是也能拿到 teleram 用户的信息嘛 {     "user": {         "id": 7255019437,         "first_name": "c",         "last_name": "ao",         "username": "caocaovao",         "language_code": "en",         "allows_write_to_pm": true     },     "chat_instance": "-3296365182887715484",     "chat_type": "sender",     "auth_date": "1723471068",     "hash": "f4ef6d776bb24ae233c3c344f535d588a8d4a650bbbf80dea12ae152575bafc7" }  这就是直接打印出来的 然后我用这些参数去加密 永远不等于这个hash (reply to 47365)

c: 我的js没有嵌这段的代码 用的telegram 直接拿到的 console.log(window['Telegram"l.WebApp.initDataUnsafe); 打印的这个 然后hash死活校验不了 (reply to 47365)

Louis: 这个你是怎么拿到的 (reply to 47355)

Louis: 可以给文档我参考一下吗

Polaris_2 | BitsLab: https://github.com/Polaristow/awesome-ton-security

Polaris_2 | BitsLab: ton安全相关的资料汇总，感兴趣可以看一下

Gibran: https://tonapi.io/v2/blockchain/accounts/{accountId}/transactions 返回中raw_body就是payload (reply to 47369)

JO: 请问有哪位小伙伴知道如何申请ton社区的Grant吗，我已经递交了网站的申请好久了🥹

maiya: 各位大佬早上好

— 2024-08-13 —

None: 各位大佬好， 请问java sdk (ton4j) 的tonlib调getRawTransactions接口，该怎么解析到消息类型是internal啊

Leo: 有解决方案吗 (reply to 47060)

GIM: 我想先学点基础的区块链知识再说

GIM: 我做了个bot，有什么好的推广方法呢

Leo: 我感觉就是tonconnect吧

Leo: 可能也没有其他办法

wonderful: ton怎么去查询他这比是否成功的呢

wonderful: 他这笔交易

wonderful: 有没有对应的状态值去判断

User<6218334417>: 有没有大佬知道 我随便写了个小程序页面链接到bot， 为啥网页的telegram上可以打开， 但是macos和iphone的telegram app上打开就报错啦

gavin: 这个不是证书错了么- -

User<6218334417>: 刚开始是正常的， 后面我在页面多写了一些UI就报错 所以感觉不是证书的问题

兰兰/防封飞机号/会员代开/🍎苹果ID: 有韩国人吗？

Logan 🐯: tonkeeper 没办法自动切测试样嘛

Logan 🐯: 还要手动切换

Howard: 那是一個方式 (reply to 47170)

Howard: 目前也許會有新接口？目前無法將 mini-app 全屏唷 (reply to 47327)

User<6437679751>: Hi 我是来自TON生态defi项目LayerPixel的coco,我们正在招募对TON生态感兴趣的文章作者，欢迎私信我加入我们社区的建设。

gavin: 你可能需要把tx hash link 发出来啊 这样大家才能看到 不然光凭一句话很难判断呢 (reply to 47474)

cajh: 这种错误信息怎么看啊

cajh: 点不动，点了transaction  tree 里面看到了exit code (reply to 47482)

cccc: 请问下ton 这边开发大佬，如果想实现以太这边的defi 清算，以太的流程是1、获取预言机的价格，2、在合约里判断是否需要清算，这都是原子的，但是ton是异步的，这种清算需要怎么实现呢

San: Tonvpn怎么样

gavin: 一样的 异步处理啊 (reply to 47501)

cccc: 不是说 getBalance 这种只能用于 类似小狐狸这种客户端去调用

gavin: 转账还成功了？ (reply to 47496)

gavin: 对 链下调用 get 方法 (reply to 47505)

gavin: 你想清算的是那个平台？ 他们应该会给出对应的设计文档吧

cccc: 我是想实现这样的功能，但是ton 这个异步，又觉得这样实现不了，毕竟清算的时候需要这个价格是高保真的，因为getPrice 这种是链下的，怎么确保这个值是预言机真实写入链上可以拿来清算的呢 (reply to 47508)

cccc: 好像走入死胡同了

Bill: 设计清算机制？？ 还是开发清算别人的bot ？

cccc: 就是比如我想写一个借贷协议，如何来实现清算功能呢

Bill: 主要是没有合格的预言机确定价格吧

cccc: 对，就算有预言机合约可以喂价了，但是我的借贷合约如何去读取这个预言机价格呢，读出来的价格不是不准么

cccc: 难道要相信链下读取的价格？

cccc: 这不是太中心化了么

wyz: 去看uniswap v2引进的twap预言机，完全去中心化的。 (reply to 47518)

gavin: 确实, 目前看价格不好确定 (reply to 47516)

gavin: 我之前看到一个ton上的借贷项目

gavin: 我找下

gavin: 其实有矛盾啊, 没有价格你的借贷协议怎么计算健康系数的？ (reply to 47516)

cccc: 嗯，我是举个清算的例子，便于理解，一样的问题 (reply to 47527)

cccc: 这个不还是只能链下获取价格，然后中心化的管理员账号去触发合约的清算方法，说白了就是个中心化的东西了 (reply to 47525)

cccc: 管理员的权限太大了，类似以太的onlyOwner，有作恶的情况

Bill: 有时间延迟的预言机制，在清算会犹豫价格敏感性导致有可能亏损，比如价格瀑布 (reply to 47520)

cccc: 链上是异步的，咋清算，你调用清算的这笔tx 都没有价格啊

Bill: 喂价， 链上GAS会是一个高昂的支出

Bill: 我觉得，链上有实时预言机的话，清算还好说，无非就是价格变动可能导致清算失败呗

Bill: 祝需要保证是否触发清算这里，和实时价格正相关就可以了，至于后面清算时候价格又变动了导致清算和预测不符，没关系，清算结余多少的问题

Bill: 对，还是链上没有实时价格的问题，stonfi 获取价格的tx， 难道清算时候让他真的去swap一笔，哈哈

Otter: 有没有大佬知道为什么我的jetton转账明明已经触发了消息通知,但是raw_get_block_transactions_ext用这个接口去获取对应区块高度的交易 却什么都拿不到

cccc: evm 扩展到 ton 链的 开发，真的难受死我了

cccc: 嗯嗯，谢谢解答 (reply to 47538)

Otter: 使用的合约是usdt 官方的合约

Otter: 对比了一下交易的内容都一样.

Otter: https://testnet.tonviewer.com/transaction/0bdeeb0fbbd7ddf76b74258866465162755793ee9d0bf7703c9f6dd95fb7c5f2

Otter: 有大佬解惑一下么~

Otter: 这是对应的交易

User<6937277232>: 咋给你解惑

cccc: 是不是调用的是正式网的api

cccc: 哥哥们，你们都是直接func 上手的么

cccc: solidity 转过来，真难受死我了

Bill: 用tact 很好

cccc: 看了下，说tact 有些高级功能不支持

Otter: 就比如说我正常usdt转账 我通过raw_get_block_transactions_ext 可以获取对应的交易信息 转账多少ton 多少usdt 留言是什么 (reply to 47554)

Otter: 然后我自己用官方的合约 我部署了一下 然后我使用了转账

Otter: 链上可以查询的到 区块那边也看到这笔hash

Otter: 但是我用raw_get_block_transactions_ext这个接口去获取 就获取不到关于这笔交易的任何数据

zlj: 我用ton4j 库测试发交易，为什么每次启动tonlib 都会调用一次updateSyncState, 一同步就是好几分钟。

zlj: 效率好低。

Otter: 正常的usdt转账 触发notify之后 就可以监听到这个

gavin: 怎么取不到 这浏览器都能显示出来啊 (reply to 47565)

gavin: 建议用func, tact 最终也是func (reply to 47556)

Bill: 那好吧

gavin: 是不是这个原因

gavin: 给的ton太少咯

Otter: 好

Otter: 我在加大一下

Otter: 因为我看官方给的比这个还少

Ginta 🦴: func好像不太够，还要看tlb吧？ (reply to 47572)

gavin: 哈哈哈哈可以 (reply to 47580)

gavin: https://app.evaa.finance/ 你看这个 这个就是在ton 上𰟱的借贷 也有清算 (reply to 47557)

gavin: 虽然没开源, 但是可以分析下他的交易行为 能猜出来逻辑

cccc: 好的，我去调研一下 (reply to 47583)

Ginta 🦴: ton合约有没有什么比较好的开源项目可以学习呢

Ginta 🦴: 前一段时间看了一下官方视频，想看点项目的

Otter: https://testnet.tonviewer.com/transaction/805063117d4cfa6aed4dbee8e3537e6ba7eea30cf75bb0fe202e29cdabe1f7be 这笔加到了0.05 还是获取不到~

Otter: 真的好怪~~

2: jetton -> stonfi/getgems (reply to 47586)

Ginta 🦴: 好的，我看看，谢谢

Ginta 🦴: 有深圳的朋友吗

Jackz: 哈哈，最近也在看ton，从solidity转过来学习好难受

gavin: @hashplayer911 你看他们的github 有很多资料了  https://github.com/evaafi/merkle-oracles 预言机 https://github.com/evaafi/liquidator-bot-v2-pub 清算bot (reply to 47583)

cccc: 以前写evm合约逻辑理清楚就完事了，一步一步写下来很快就上手了，现在看文档看的我都想哭，逻辑思维还得转变为异步，奈何公司要往ton 扩展没得办法只能硬着头皮啃 (reply to 47593)

cccc: 谢了，哥们 (reply to 47595)

sunyoki: 调试困难

Jackz: 是的，要先理解转换概念 (reply to 47596)

Levi: hello

Levi: ton 怎么获取pool 列表啊

Manta: 官方的func代码 是不是wallet代码有问题啊 (reply to 46527)

Manta: 官方的func代码 是不是wallet代码有问题啊 消息函数 是不是多一个参数啊

Manta: () recv_internal(int my_balance, int msg_value, cell in_msg_full, slice in_msg_body) impure {

Manta: int my_balance 就很奇怪

gavin: 啥奇怪的 (reply to 47610)

Manta: () recv_internal(int msg_value, cell in_msg_full, slice in_msg_body) impure { 这个是minter的代码

gavin: 不是

gavin: 这个是 internal message 的入口

gavin: mint 逻辑只不过是在里面被处理了而已

Manta: wallect 的内置函数  为啥多一个参数

gavin: recv_internal 有4种写法

gavin: () recv_internal(int balance, int msg_value, cell in_msg_cell, slice in_msg) {} () recv_internal(int msg_value, cell in_msg_cell, slice in_msg) {} () recv_internal(cell in_msg_cell, slice in_msg) {} () recv_internal(slice in_msg) {} 这4种都是有效的

gavin: 对

Manta: await provider.internal(via, {             value: opts.value,             sendMode: SendMode.PAY_GAS_SEPARATELY,             body: beginCell()                 .storeUint(*, 32)                 .storeUint(0, 64)                 .storeCoins(opts.amount)                 .storeAddress(opts.toAddress)               .endCell(),         });

Manta: 那ts 这么写 有问题吗

Manta: 感谢

User<6682207053>: 0

大丁丁: 有大佬知道，Func合约里怎么获取代币余额吗

大丁丁: 类似于solidity的balanceOf函数

Heliosagent: miniapp 的页面滚动穿透怎么解决有人知道嘛 一滑页面app也跟着滑动

cajh: [int, cell] get_balance() asm "BALANCE"; (reply to 47635)

大丁丁: 要发送一条消息获取吗？

cajh: 直接调用这个方法就行

大丁丁: 这个是获取Ton代币余额还是Jetton代币余额？

User<7106205946>: Jetton钱包合约提供了一个get_wallet_data()方法，可以用来检索特定Jetton钱包的余额和其他相关信息。该方法返回一个包含余额、所有者和Jetton合约地址等信息的结构体。  // 假设我们有一个Jetton钱包合约的地址 const jetton_wallet_address = <YOUR_JETTON_WALLET_ADDRESS>;  // 获取Jetton钱包的余额 func get_jetton_balance(wallet_address: slice) : int {     // 调用get_wallet_data方法     var data = get_wallet_data(wallet_address);     return data.balance; // 返回余额 }  // 获取钱包数据的函数 func get_wallet_data(wallet_address: slice) : (int, slice, slice) {     // 这里调用Jetton钱包合约的get_wallet_data方法     // 需要实现合约调用的逻辑     // 返回余额、所有者和Jetton合约地址 }  如果您想了解更多信息，请直接给我发私信。 我会帮助您。 (reply to 47634)

— 2024-08-14 —

cajh: 有人做过在func中向ston.fi 添加流动性的功能么，研究了两天了，还是抱错

cajh: 65535

cajh: 刚学两个礼拜，一脸懵逼

cajh: 😅

cajh: https://testnet.tonviewer.com/transaction/99b905cf208770c451109384222431297dfb56c11e8ac13ecf7fd9abcce0ded0?section=trace

cajh: 奥奥。我检查一下

cajh: 好像也不是，我用这个pTON :kQARULUYsmJq1RiZ-YiH-IJLcAZUVkVff-KBPwEmmaQGHx0I 就没问题，前端给我另外一个pTON :kQAcOvXSnnOhCdLYc6up2ECYwtNNTzlmOlidBeCs5cFPV7AM 就是不行，折磨了两天，这两个代码还没开源😅

cajh: 额  这这这

gavin: 就是传错地址了吧

cajh: 谢谢大佬啊

cajh: 是的  给错地址了

Chaincode: 据我了解无法直接调用获取，只能线下获取，通过其他机制处理 (reply to 47675)

Paul | Futures: Ton怎麼使用在ton app能獲得最大收益 有這個攻略嗎？

maiya: 怎么挖矿

David: dm我 (reply to 46574)

User<6218334417>: 这个方法应该可以解决 WebApp.disableVerticalSwipes(); (reply to 47638)

Wayne: 各位大佬，我在dedust上建了代币池子，但是在ton space里面找不到代币，请问有什么解决办法吗

User<6218334417>: 有没有大佬知道小程序怎么连接phantom钱包？

cajh: 看文档应该是可以获取到的 (reply to 47714)

Chaincode: 这是获取ton余额？ (reply to 47726)

cajh: int 是ton的余额吧，cell应该是包含其他代币的，具体还没确认过，只是我自的理解

Chaincode: 那应该可以，要测试一下

gavin: 只能取到ton的, jetton 的balance 取不到的

gavin: 除非异步回调过去

Chaincode: 我也是这么考虑的。知道钱包地址去取jetton余额都得绕几个弯儿 (reply to 47731)

Howard: 關於 Tact 語言的 Slice as remaining 有了更新跟補充 😳☺️  https://docs.tact-lang.org/book/cells#serialization-remaining

cajh: rpc？

maiya: 直接调用http，有swagger文档

Wayne: 各位大佬，我在dedust上建了代币池子，但是在ton space里面找不到代币，请问是什么原因呢?

Manta: if (op == 5) { ;; buy                  slice to_address = in_msg_body~load_msg_addr();         int amount = in_msg_body~load_coins();         throw_unless(101, amount >= 100000000);                  int ton_calcula  = sqrt(ton + amount);         int jetton_amount = 2 * 10000000000000 * ton_calcula / 3  - total_supply ;         var buy_msg = begin_cell()                 .store_uint(0x178d4519, 32)                 .store_uint(0, 64)                 .store_coins(jetton_amount)                 .store_slice(my_address())                 .store_slice(my_address())                 .store_coins(0)                 .store_uint(0, 1)             .end_cell();             mint_tokens(to_address, jetton_wallet_code, 50000000, buy_msg);         save_data(total_supply + jetton_amount, admin_address, content, jetton_wallet_code, ton + amount);         return ();     }

Manta: 写了 一个卖币的代码 功能都能完成  但是最后报错了

Manta: 写了 一个买币的代码 功能都能完成  但是最后报错了

gavin: 这不很清楚吗 你的合约没有实现 excess的op code 处理

Manta: func jetton 有实现的例子吗 我照抄一下

Manta: 我仿照mint 写的 mint 应该没问题吧

Abcold: TypeError: axios_1.default.get is not a function     at TonClient4.getLastBlock (TonClient4.js:49:1)

Abcold: 请问大家，这个错误是怎么回事

Heliosagent: 大哥牛逼 (reply to 47722)

大丁丁: 是不是要加上获取余额的msg？ (reply to 47732)

Nash: 大佬们有尝试过给 tg 用户转 usdt  通过用户id ，通过代码的方方式实现吗

Chaincode: 对，还要加个notification的消息吧。复杂了 (reply to 47759)

Manta: 我吧func wallet 的burn函数 拷贝了一份代码 只改了一个函数名字其他都没变 为什么外部访问不到

Manta: 在wallet函数里面 写新的函数 还需要特殊声明吗

大丁丁: 不应该啊，swap合约怎么获取代币的流动性的呢？每次swap都有在swap合约存储合约本身的余额吗？ (reply to 47762)

Chaincode: 要前置声明 (reply to 47766)

Chaincode: 是的，应该是有些冗余操作吧。你去研究研究代码🤣 (reply to 47769)

大丁丁: 没有swap相关的代码研究😂 (reply to 47771)

Chaincode: ston-fi 够你研究的了吧 https://github.com/ston-fi/dex-core/tree/main/contracts (reply to 47772)

大丁丁: ok，我看下

大丁丁: 谢谢兄弟

cajh: 放在前面调用，这里识别不到这个函数。 (reply to 47768)

cajh: 有没有人遇到加ston.fi 遇到精度的问题，ton和test 的交易对，ton精度是9，test进度是6，但是池子都是按两个精度都为9去计算的，怎么处理这个精度问题呢

Ether: @dev_rel 大佬不好意思又有個問題需要請教下:   我想要在 mini app 實現像是 telegram 聊天室監測用戶 screen shot 或是 screen recording事件發生時觸發屏蔽特定內容，在看過接口文檔之後好像沒有看到目前有支援相關 feature的接口。  是否有其他方法可以調用到 telegram 監測用戶screen shot事件的方法呢？如果目前接口不支援，後面 telegram 這邊會考慮開放這個接口嗎？ 謝謝🙇🙇🙇

cajh: 嗯嗯，明白了 谢谢 (reply to 47785)

Ou: CreateInvoiceLink query: [400] Bad Request: STARS_INVOICE_INVALID 创建票报这个错，有没有人遇到过  https://github.com/rubenlagus/TelegramBots/issues/1410

wale: 大佬们有遇到过代码执行到一半就结束，程序不报错的情况么？ 用 blueprint test 跑的

cajh: 不行你试试jest 我用的这个

cajh: 😅目前良好

wale: 好的，我研究下

Ou: 要支持玩家通过星星，机器人里要设置什么的吗？

Ou: 要支持玩家通过星星购买，机器人里要设置什么的吗？

cajh: @leouvw 大佬，要在合约里记录空投信息，用户地址=》空投金额（根据邀请用户数量增加） 这个用什么数据结构记录的好呢

cajh: 没有上限😅，这就是麻烦的地方 (reply to 47798)

gavin: 建议参考jetton的那种设计 通过父子合约实现无限扩容

gavin: 否则在一个合约里面你肯定会遇到限制, 要么不好遍历 要么长度有限制

cajh: 嗯  我看看

壮壮: 兄弟们 jetton 为什么有三个地址呀

gavin: 另外你就存个空投数量  就写合约非常奢侈了 这种你还不如放到链下

壮壮: 第一个地址有人知道代表的什么吗

gavin: E 开头的是 Bounceable

gavin: U 开头的是 Non-bounceable

壮壮: 啊  这是哪里来的呀

壮壮: U 是用户钱包地址对吧

lemon: 各位大佬  Android 开发钱包 应该用哪个依赖?

Alfred: 比如呢》 (reply to 47559)

Alfred: 子合约妥妥的 (reply to 47797)

Chaincode: Certik不建议这么干。https://blog.ton.org/secure-smart-contract-programming-in-func#recommendation-4-use-a (reply to 47759)

Turtle: jetton 是什么

wale: ton 的erc20token

cajh: 有没有这样的demo呀😅 (reply to 47819)

Logan 🐯: 有人招ton开发不

Alfred: jetton 就是这样的设计 (reply to 47823)

maiya: 涨了

cajh: 那我能在minter合约中存取wallet合约的数据么，因为核心业务在minter合约，目前的业务代码也是一个标准的jetton 合约，只不过在这个之上加了邀请，记录空投数据了，领取空投的功能 (reply to 47825)

wadaxiwa: 大佬们，有个问题想咨询下，怎么调用合约的get_jetton_data方法呢，获取Wallet code。

wadaxiwa: 我想封装一个离线获取Jetton的地址。

gavin: 通过ton rpc 就可以 参考ton/core的库吧 (reply to 47835)

wadaxiwa: 好，我找找试试，我用了官方的demo，离线生成出来的，跟通过get_wallet_address请求返回的地址不一致。测试链 (reply to 47838)

gavin: 如果你想离线生成 你需要跟jetton 的代码一样才行 (reply to 47841)

wadaxiwa: 一样的，只是合约不一样～

壮壮: jetton 怎么构建自定义参数payload里面呀

Felix-旺达: 麻烦问下上架APP需要哪些步骤，或者官方文档？ 有大佬能帮忙下吗？

壮壮: 兄弟们啊。你们出来说说话啊

Bojack: 请问ton.js和tonweb库有啥区别吗？官方文档有很多例子是tonweb的，ton的没有

Yang: Bot API 7.9  • Introduced Star Subscriptions ⭐️ – allowing bots to manage subscription-based invite links. • Bots can now send Paid Media to any chat, including on behalf of Business Accounts. • Added support for Super Channels – where admins may post as their own profiles or channels.  • And more, see the full changelog for details:  https://core.telegram.org/bots/api-changelog#august-14-2024 (forwarded from BotNews)

Alfred: 只能通过消息来读 (reply to 47831)

cajh: 可以通过hashmap字典去存储么，弊端是什么呀 (reply to 47865)

cajh: 看大佬们都不推荐这个格式

gavin: 有数据上限啊

gavin: 比如最多不能超过几万个key

cajh: 哦 那到不会那么多

cajh: 如果不超过1万，可以用hashmap不

gavin: 如果你都放在一个地方存储, 不符合高性能的设计理念, ton 为什么性能高 是因为数据能分片, 读写不至于集中在一个地方

gavin: 如果key的数量很少那是没问题的 (reply to 47886)

cajh: 哦哦  谢谢

cajh: 🙏

Howard: 這個不好監測吧。是的，沒接口的樣子呢。 (reply to 47783)

Howard: 一個是 你自己的 Jetton Wallet Address 一個是 新的接收者的地址 一個是新的接收者的 Jetton Wallet Address  更多可觀看: Video (reply to 47807)

Ou: @dev_rel 这个能帮忙看下吗 (reply to 47788)

— 2024-08-15 —

Howard: TG Stars 的問題嗎? 我還沒碰過 (reply to 47788)

Ou: 对的，Stars问题，这个需要在bot怎么设置的。

Ou: bot 下有payments，stars要怎么设置

gavin: 我可以打开 (reply to 47927)

Alfred: 有上限，gas 非线性 (reply to 47881)

gavin: 请问这个规则有具体文档吗？ (reply to 47940)

壮壮: 是不是说错了一个 有一个是jetton master地址 (reply to 47929)

壮壮: 第一个就是主链的master地址

壮壮: https://docs.ton.org/mandarin/develop/dapps/asset-processing/usdt  这里面就有这个地址说明

Howard: 是的，說錯了. 一個是 Jetton Master 地址。 (reply to 47942)

壮壮: 这个是固定的对吧

壮壮: 大佬jetton 这种交易方式 怎么携带自定义参数呀。 (reply to 47947)

壮壮: payload  我看着好像没有字段像ton 那样构建

Heliosagent: ton钱包怎么切测试网兄弟们

Yang: From @alphaton (reply to 47952)

11: 大家有没有遇到部署时候报9 Cell Underflow的现象啊，之前还能部署，代码没改再部署就报错了，好奇怪

David: 一般是初始化参数传少了 (reply to 47963)

壮壮: 大佬们 求告知下 jetton 这种交易方式 怎么携带自定义参数呀。

David: 有大佬看过tg bot连接ton wallet发交易的例子么？ 我看到的bot一般都是托管钱包的，没有自己连钱包签名的

Hooray: 支付时候wallet钱包出现这种情况是为什么

Hooray: 有大佬知道吗

wikig: 检查payload (reply to 47969)

wikig: 是直接bot里面连是吧 我记得有的 (reply to 47966)

Hooray: POST https://tonapi.io/v2/wallet/emulate 406 (Not Acceptable)

Mike: error :  "LITE_SERVER_UNKNOWN: cannot apply external message to current state : External message was not accepted\nCannot run message on account: inbound external message rejected by transaction 我一直报这个错误，有大佬们知道啥问题么

Mike: 我看github上也有人提问，但是都没有人回答啥问题

Mike: 或者啥原因也好呀

wikig: 可参照  https://github.com/ton-connect/demo-telegram-bot?tab=readme-ov-file (reply to 47971)

Mike: 大佬这个问题解决了么 (reply to 47215)

Mike: 大佬这个问题解决了么 (reply to 40824)

Alfred: 先检查消息格式是否正确，再看目标账户状态是否正确。如果都没问题，再检查下合约逻辑 (reply to 47974)

Mike: en

Fo9732: 小白新手来

古风背景书: 搞什么的？ (reply to 47991)

cajh: @leouvw 大佬，dict怎么存取的呀，有dict_set 没发现dict_get 还不是这么用的😂

cajh: 他两限制key必须是int ，我的key是 地址类型，这个应该怎么处理呢 (reply to 47996)

gavin: 昨天他说 他这个白名单就那么几个😅 (reply to 47999)

cajh: 就是记录空投数据。 地址=》数量 肯定不超过1万人的那种。

cajh: 😂

cajh: 要记录数量，后面领取空投的

cajh: 链下记录倒是可以的，但是怎么防止修改领取数量呢

11: 你自己发的币嘛？那为啥不把这个data存在jetton-wallet里

cajh: 是自己发的币，minter里面有一个简单的池子，通过ton去买token，类似于ICO，但是可以邀请人，这时候要记录邀请人可以领到多少token，这个怎么记录到wallet合约呢 (reply to 48012)

gavin: 邀请关系 邀请人你都放到链下

Ginta 🦴: 请问一下MsgAddressInt是256位，文档里addr_none才两位

Ginta 🦴: 这样tlb解析不会有问题吗？

cajh: 链下是记录了的，包括领取多少数量都是计算了的，但是怎么防止用户在发起领取请求的时候修改数量，而链上无法去确认这个情况 (reply to 48015)

Ginta 🦴: 我理解的是就算是空地址是不是也应该占位256？

gavin: 验证签名啊  你项目方自己用私钥签一个 (reply to 48020)

cajh: 哦哦  谢谢，我试试 (reply to 48022)

Ginta 🦴: 不是吧，就是msg_info的src

Ginta 🦴: 它置空

11: 大佬现在func有验证签名的方法嘛 (reply to 48022)

gavin: 有的 你自己去看下文档 (reply to 48029)

gavin: 这个Ext 是不是类似 是可选的意思？ (reply to 48026)

Ginta 🦴: 只是三种类型吧

Ginta 🦴: 可能 用的是下边的？

Ginta 🦴: ext_out

Ginta 🦴: 外部消息吧

Ginta 🦴: 第一次接触tlb，感觉写法有点不习惯

Ginta 🦴: 入门合约还是需要点成本的，不少代码里还有fif文件

gavin: 应该是 外部出消息 (reply to 48040)

gavin: 对应的有外部in消息

Crypto: я нанимаю русских ребят

Cheng: const result = await tonConnectUI.sendTransaction(transaction); 请教下各位大佬，发起交易后，小程序关闭了，有什么方法获取到txid值呢

Manta: .store_slice(0)  这样传0地址可以吗

User<6218334417>: 有大佬知道怎么配置小程序的context menu吗？ 就是右上角的那3个点

tobenumberone: SettingsButton

User<6218334417>: 我看SettingsButton只是多一个Setting item啦

OneKey: ton生态有没有借贷

c: 有没有老哥 试过这个 就是进行循环 发消息的时候 第一条一定 成功 后面就失败了 是要等 后面前面的结束 才可以进行交易嘛

c: 如果是合约 钱包呢 (reply to 48064)

c: 那他 这个链 太慢了呀 (reply to 48064)

c: 这 人数一多 转代币 怎么转的完

c: 你是什么语言 发的 老哥 (reply to 48069)

壮壮: 哥们你们都是jetton 带参数吗

c: 能 给个 文档链接  获取啥样子的 嘛 没找到 (reply to 48074)

c: 或者

Manta: ton 零地址可以这么搞吗

c: 1 多谢 (reply to 48078)

Manta: 那怎么定义一个0地址的slice

🅰🅻🅰🅽: funC stdlib 有一個 address_none()  slice address_none() asm "<b 0 2 u, b> <s PUSHSLICE"; (reply to 48082)

🅰🅻🅰🅽: 這沒有規定呢 ton 本身沒有地址 不過我們團隊的確在某些特定場景下會用 address_none 來表示這是 ton 轉帳

昊天: Dogs 如何提幣到交易所

壮壮: 我包装0 好像交易不了

昊天: 啥 (reply to 48090)

壮壮: jetton 交易 我想包装一个提醒交易

壮壮: 这里是交易费吗

gavin: 是 但是不能为0啊 (reply to 48093)

Soybean_HashKey: 群友们，我们这边做了一个帮助开发者写tact和查阅开发文档的bot，现在想先做一些调研问卷~ 试用了产品并且填写调研问卷，有u红包相送🫡如果愿意跟我们去深度交流一下（大概15分钟），会有更多u红包🫡 感兴趣的群友联系我~

sunyoki: 哦，你人怪好来

Soybean_HashKey: 主要还是想了解一下群友们在开发场景中的真实需求哈，也希望能做出有用的东西来

User<322136105>: Hi everyone,  We are a team currently working on creating a TON Academy for developers. We're gathering feedback from the community and would love to conduct interviews with developers to understand your needs and expectations from the educational materials and courses.  If you're interested in participating and sharing your thoughts, please reply to this message, and we'll get in touch to arrange an interview.   Thank you in advance!

Soybean_HashKey: 但是问卷链接我没法发哈，感觉发了会被禁言的样子

Bojack: 机器人呢 (reply to 48097)

Soybean_HashKey: 我私信你，以前在群里发链接喜提三天大禁言来着 (reply to 48102)

sunyoki: 这种是啥意思，没有gas吗

Soybean_HashKey: 或许大佬们平时需要查开发文档的时候，也可以尝试问一下我们的ai bot，可以直接私聊我，目前完全不收费

HunWu: testnet ton indexer api 有開源嗎? github 上面 mainnet 的版本比較舊，沒有 actions api，這部分可以在哪裡找到嗎?

Ginta 🦴: 想请教一下，监控链上实时到账有什么省资源的方式吗，我之前监控自己的钱包是直接高频扫链，但是感觉很不优雅

Ginta 🦴: 如果监控上千个或者上万个钱包的资金变化，循环感觉很不好

Manta: 如果前端给我传个slice 类型  我合约里面怎么给他接住

Manta: 我用哪个方法能接收到呢

gavin: 就是in_msg_body 按照顺序去load 就行了啊

Manta: 前端给我传个 slice 我用哪个load 函数接？

Manta: 没有load_slice 函数啊

sunyoki: 自己封装一个load_slice

sunyoki: 要不然把前端骂一顿

sunyoki: 我的问题， 大佬帮我指点一下呗

gavin: 😂😂😂前端好惨 (reply to 48130)

gavin: 你发下tx link啊

Mike: 不知道呀，哎

Mike: 太难了

one: 有没有trc20 u 转ton u 的例子

one: 有没大佬

one: 通过交易所接口感觉有点慢

wikig: 用哪个库？ (reply to 48147)

wikig: tonconnectui的倒是有 (reply to 48151)

— 2024-08-16 —

one: 我也在问呢哈哈 (reply to 48151)

壮壮: 大佬有币种转换价值的接口吗 (reply to 48152)

peter: 兄弟们， 请问哪里可以看到Gram Giver的源码啊

gavin: 建议用tonview

peter: 这种消息结构， 应该就是用钱包，给这个Giver合约发送了一个InternalMessage， 然后进入了 合约 0x4d696e65 这个方法吧

gavin: 对 看着是

壮壮: 兄弟们 这jettonAmount 单位是多少啊

gavin: 看你的metadata怎么定义的 (reply to 48200)

壮壮: 按照官网的根本调不起来

peter: 兄弟， 问一下， 我想调用EQCiLN0gEiZqthGy-dKl4pi4kqWJWjRzR3Jv4jmPOtQHveDN这个合约，然后进入他的0x4d696e65方法， 我按照上面的代码进行构造，但是发送的交易，txid是这样的https://tonscan.org/tx/vG9I8nrhyyrOrFyixbjT_Dc_1bQWJDHKhpmghsJGjKY=， 看起来不太对，是啥原因呢 (reply to 48197)

peter: Source , Destination, OpCode, 都不对...

gavin: 你是想直接逆向啊

gavin: 你链外发起不了InternalMessage

gavin: 先发 ExternalMessage

peter: 但是我是用钱包构造的交易，钱包他会给我自己的钱包发送一个external， 然后我的钱包会给合约目标地址发Internal，是这样吧

gavin: 哦 我看错了 你是通过钱包的 没问题

peter: 就很奇怪就是进不去4d696e65

gavin: 你的这个 Hex 是从那来的 (reply to 48213)

gavin: 不会是自己手挫的吧

gavin: https://tonviewer.com/transaction/bc6f48f27ae1cb2aceac5ca2c5b8d3fc373fd5b4162431ca8699a086c2468ca6 (reply to 48204)

gavin: 你用tonview看

Manta: 合约里面怎么把 cell 转成slice，有没有类似的函数，或者写法

gavin: 看上去是没有加ton value (reply to 48204)

peter: 好的我加上一下试试！

gavin: 啥项目啊哥 不要偷偷发财 (reply to 48223)

Manta: .store_slice(           begin_cell()             .store_uint(1, 4)             .store_uint(0, 😍             .store_slice(my_address())             .end_cell()             .begin_parse()         )@Leo

peter: Gram的挖矿啊。 没啥机会的 (reply to 48224)

peter: 我就是想研究一下TON上面的mining。

peter: 当初挖TON的时候，那些挖矿的人赚大了

peter: 之后不知道TON上会不会有自己的pow meme

peter: 自己跑一个TON的LiteServer， 成本要多少钱呀， 我看文档上写IOPS要求64K，这太夸张了 (reply to 48230)

prometheusoo: 很高。。 (reply to 48232)

peter: 没有的， 主要是disk 太贵了。 一个月要8000刀

peter: 服务器本身不贵， 磁盘太贵了。 我们启动了一个， 用的是GP3， IOPS7200， 也不低了， 但是同步不起来，网络同步速度跟不上网络速度

peter: 我是用chatgpt估算的成本。 run node requirement:https://docs.ton.org/participate/run-nodes/full-node (reply to 48242)

peter: 没法同步， 高度跟不上网络 (reply to 48245)

peter: 成本没注意， 一个月几百刀吧

Howard: hi, 有鉴于 mini-app 的开发社群逐渐扩大，很高兴跟大家分享: mini-app 有中文社群可以讨论了！  https://t.me/devs_zh

Howard: 對應英文 mini-app 社區的: @devs (reply to 48248)

gavin: 这么高 自己采购物理机会便宜很多 (reply to 48241)

Howard: 得找找狗博士，他是 ton節點專家。但我猜 Tonresear.ch 上有？ (reply to 48251)

gavin: 哥啥需求啊, 都要自己跑node? 是不是在搞mev了 (reply to 48232)

peter: 不是， 想搞矿池， 自己跑节点，现在算下来， 成本太高了 (reply to 48254)

gavin: 这么看非常公平😋 (reply to 48255)

gavin: 哦 那是 可能都回本不了 (reply to 48256)

gavin: 我看有些地址的bot 好像就是无脑发交易  运气好总能夹一个 (reply to 48259)

MEW: 亲测，9000u (reply to 48239)

Ginta 🦴: ton钱包的主链和测试链地址竟然不一样

Ginta 🦴: 我说怎么转几次没收到

Asaki: i4i.4xlarge 不是一个月就 1000+ 吗 (reply to 48261)

gavin: https://ton.org/address/ (reply to 48268)

Asaki: 节点一般用什么 aws 实例跑？

Asaki: 现在社区的 best practices 是啥？

Asaki: 各位有推荐的吗

Jeme: 可以找一些做廉价机子的服务器，不到100刀一个月，2*1Tnvme还能组阵列 (reply to 48239)

gavin: 这个配置 100刀一个月？不太可能吧 (reply to 48280)

Jeme: 独服，德国大厂

Jeme: Ton搭节点能挖矿？

Jeme: 收益多少？

L: 大家好 问个问题，为什么ton的浏览器上只能看到代币极少的转账交易信息？更多的信息要怎么看？

L: 就是这个代币在区块浏览器上几个小时才有一次转账，但是在行情软件上 几秒就有一笔交易。 (reply to 48289)

L: 和eth Solana的情况完全不一样呀

L: dexscreen 呀

L: 去中心化交易所

L: 那要怎么看到这些tx呢

L: 转账也是的

L: 用api吗

L: 行情软件里只有交易没有转账

L: https://tonconsole.com/dashboard 用这个好像可以 但是不知道怎么查

gavin: 注册账号 写query 语句查 (reply to 48304)

L: 注册了 query语句不会写。。用chatgpt写 了一个主合约地址的交互，发现查出来的和区块浏览器展示的是一样的

L: 主要是不知道从哪方面下手查 我说查交互记录

Qubitcoin: 你们有做合约升级吗？wallet 地址是通过jetton_wallet_code 算出来的，如果 jetton_wallet 合约代码升级了，jetton_wallet_code 就会改变，算出来的地址还一样吗？

gavin: 你是想抓取某一个jetton的 所有转账记录？ (reply to 48307)

L: 是的

Qubitcoin: 那就是 wallet 升级后 master 的 jetton_wallet_code 还是用原来的

Qubitcoin: 用原来的，wallet 地址初始化的还是旧的吧？

gavin: 还真是 https://docs.tonconsole.com/tonapi/api-v2 (reply to 48313)

Qubitcoin: 目前来看 master 可以升级， wallet 好像不能动

gavin: https://docs.tonconsole.com/tonapi/api-v2 看看这个jetton 相关的api呢  自己抓取很麻烦 (reply to 48309)

L: 是不是很麻烦  其实我不懂技术

gavin: 自己抓取 得扫到所有 jetton wallet的合约 去扫他们的交易

gavin: 不懂的话就用别人实现好的 (reply to 48321)

Qubitcoin: 比如 wallet v1 部署上去了，master 存的 jetton_wallet_code 是 v1 版本，现在想要升级 wallet v2，需要更新 master 存的jetton_wallet_code 为 v2 版本，这样部署的 wallet 才是 v2 吧？ (reply to 48318)

Qubitcoin: 但是更新了 jetton_wallet_code，用户地址对应的 wallet 合约地址也会跟这改变

L: 我这种情况 要选哪个呢 大佬 (reply to 48325)

L: 我看都是输入区块ID查询

L: 这种吗

Qubitcoin: wallet 指的是合约

壮壮: 怎么监听jetton

壮壮: 交易的订单啊

Qubitcoin: master 可以做成升级的，wallet 目前好像不行

Qubitcoin: 不过一般都是更新 master，只有特殊情况可能才需要更新 wallet

gavin: 我好像理解你的意思了, 你是想改 master的合约, 但是master合约里面有一个地方是要根据 wallet code 计算用户的 wallet 地址, 你担心变了是吧

gavin: 所以这个jetton合约最好是不要升级？

Qubitcoin: 主要是探讨下 wallet 能不能升级

gavin: 我感觉技术上是可行的, 但是业务上是有损的

cajh: master可以升级

Qubitcoin: 明白

🐮: notcoin 怎么用作转账的gas啊

🐮: tonkeeper里要自己充电池

cajh: 一直有一个疑惑，就是合约中的变量必须一开始部署合约的时候就要传进来，还是在合约中可以自己去添加，能不能像EVM的那种

cajh: @leouvw

Chaincode: 你是说初始化？ (reply to 48353)

cajh: 嗯，如果初始化没有的变量，但合约中需要，能不在部署合约的时候进行初始化，然后在合约中用么

cajh: 还是所有的变量必须在部署合约的时候初始化

User<6218334417>: 有大佬知道小程序获取粘贴板内容为啥总是null吗？ 是无权获取粘贴板内容吗

cajh: 哦哦 那就是必须在部署合约的时候初始化变量是么

Chaincode: 合约地址与init state有关系，感觉部署的时候至少要把state空间申请出来，至于你自己定义的初始化函数去初始化一次多此一举 (reply to 48357)

cajh: 但要留位置是吧 (reply to 48364)

cajh: 哦哦 明白了 谢谢🙏

Peter: 问个低级问题，为啥一直报这个

cajh: https:// 加上试试

cajh: 或者检查下名字吧 / 后面是定义的参数？

cajh: 还是app

Peter: 加了https也不行

gavin: 。。。。

Peter: 草

gavin: @xpocketgames 我也有一个问题,  我在写FunC的时候 我发现每次都要预估下我这个方法大概要消耗多少ton的gas, 但是每次我都预估的不准导致每次都有一些零碎的ton(非常少 但是积少成多呃)留在合约里, 有没有什么办法能解决这个问题呢

cajh: 同上，我也有这个问题 (reply to 48386)

Chaincode: 不是message能带个response_address 吗？把剩下的返回来，这个要自己合约去实现，调别人合约应该做不到 (reply to 48386)

gavin: 我的合约里实现了这个 (reply to 48389)

Peter: 我miniapp绑定的我本地h5，浏览器可以访问，点击tg launch就崩了。有没大兄弟知道嘛问题

Chaincode: 达不到想要的效果？很难把gas算精确，所以才叫estimate gas。为了保证交易执行成功一般都要多附加Gas，不然执行失败反而费钱 (reply to 48390)

gavin: 对 我目前是这样做的  找回ton = 传入ton - 预估 ton gas  同时判断 当前余额 - 找回ton <= 最小租金成本 (reply to 48393)

Chaincode: 我也对合约里面看着剩的钱有点恶心😂TON不能贿赂验证者吗？把多的Gas给验证者

gavin: 对 主要是 这个 gas 预估的不准 每次都剩下那么一堆堆 食之无味 弃之可惜 哈哈哈 (reply to 48397)

Chaincode: 你可以加个功能，合约不要的时候一次性提出来

gavin: 那就不够优雅

Chaincode: 完美主义者🤣

u7: 可以请问一下 我能从哪里知道workchain的sahrd总共有哪些吗?

gavin: ok

u7: 这个shard (reply to 48411)

Qubitcoin: telegram 钱包有个 ton 地址，另外还有个 space 的 ton 地址，为啥搞俩呀？

gavin: 一个是托管钱包 一个是非托管的呗 (reply to 48414)

gavin: 最开始他们肯定是想做成托管钱包, 后来发现不行 得做成非托管的 就开了一个space😅😅

Qubitcoin: 我看连接第三方是优先使用的是非托管的，没看到选择钱包，可以连接托管的吗？

Qubitcoin: 哈哈，明白，应该有些人不放心 (reply to 48417)

deng: 这个messages数组的话,是不是多几个地址,可以一起转出

u7: 我看了官方的文档 发现这个api内显示的shard好像跟文档上写的不太一样 想请问为什么

Manta: 有大佬 知道 这是什么错误吗

sunyoki: cell 读写问题，一般类型错误吧 (reply to 48433)

gavin: 多半是解析没按照预期类型load (reply to 48434)

Heliosagent: 兄弟们 miniapp进入某个群组是哪个方法

Volunteer🇻: https://tonviewer.com/UQBoEfDx2QEEcAuWwFFLaEKeulDIoTHbiLn0J-_BrqvY24XU

Volunteer🇻: 兄弟们帮我看一下这个，我按照官方写的脚本，jetton死活无法转账成功😢

Volunteer🇻: 有没有老兄帮忙看一眼

Volunteer🇻: 救命了 (reply to 48456)

Boy: https://github.com/neodix42/ton4j这个的demo生成的钱包，用其它钱包导入私钥，地址不一样，有大佬知道是什么原因吗

Boy: 这个是TON 开发网站上链接的Java仓库

Ton: 有个问题请教一下，我想要在我的合约里面存储很多很多个地址，并且地址数量还是变化的，这要怎么做？

Ton: 我记得如果存很多地址存储费会很贵并且gas可能全部会消耗完

Ton: 有一个解决方案，我忘记了，有没有大佬教一下

Chaincode: 我觉得可以分合约存储

Ton: 就跟EMV代理合约一样？一个合约存储，一个合约执行？

Ton: 但存储合约也一样归很大很大啊

Alfred: 参考 jetton 合约 (reply to 48476)

Alfred: 可能是 forward ton amount 没给够，如果有源码的话可以看看细节 (reply to 48455)

Alfred: forward_ton_amount: "20000000" 再试试

Chaincode: 地址传错了 (reply to 48483)

Chaincode: 看这个代码：https://tonviewer.com/EQC1vLRVLK6sSfDzPWoh-2KBemopfwe1F2dLGEcB_yMIUAus?section=code (reply to 48455)

Finch: merkleTree？ (reply to 48478)

— 2024-08-17 —

Chaincode: 要看你具体需求了。Proof-of-Inclusion当然可以 (reply to 48493)

Volunteer🇻: 谢谢大哥，确实地址错了搞定了👍 (reply to 48488)

Chaincode: 🥹 (reply to 48525)

Jerry: sendtransaction能不关闭当前窗口吗

Jerry: 请问

Jerry: @dev_rel

Jerry: tonconnect

Na: hi,请问,要怎么在  mini app 中,点击按钮打开 tg 的分享 ,就是点击后,让用户选择要把消息发给哪个用户的意思.

wikig: 可以参照  https://core.telegram.org/widgets/share (reply to 48544)

Na: 谢谢 (reply to 48545)

Ginta 🦴: 请问合约执行失败只有这点信息吗

Jerry: 拼接成一个t.me/share的链接就行 (reply to 48544)

Na: 好的,谢谢,已经解决了 (reply to 48556)

Na: 非常感谢! (reply to 48556)

Chaincode: 点进去看exit code (reply to 48555)

Jerry: sendtransaction能不关闭当前窗口吗

Jerry: 这个求帮助

Jerry: tonconnect转账把当前小程序给关闭

maiya: 不关

Chaincode: 看合约代码哪里报103错误

Ginta 🦴: 哦

Ginta 🦴: 那可以log吗

Chaincode: 这就是log

Ginta 🦴: 那如果是info呢

Ginta 🦴: 这个是异常

Chaincode: 看代码

Ginta 🦴: 比如想记录一下info日志

Jerry: 咋做呢 (reply to 48564)

Sun-J: idea现在官方支持中文了 是真的6😂

Puzheng: 我问一下怎么换链啊，我们想把BNB换成TON

Puzheng: 具体呢，现在有点懵

User<5468388672>: 大佬们，用tact-template 跑部署的时候报这个错

User<5468388672>: 有没有遇到的

— 2024-08-18 —

jay: 看起来是你网络不行。连接重置了。

User<5468388672>: 有解决方案吗 (reply to 48626)

jay: 检查下你的vpn?

Asaki: 编码格式不一样，实际上是一个东西 (reply to 48430)

User<5587491323>: java sendBocReturnHash boc格式的消息怎么构建呢 有大佬知道吗

Jeb: 这个群能问技术问题吗，我在用 func 实现一个合约，这个合约需要用一个 set 保存调用过合约的中心化事务 id，cell 要怎么存呀，没有头绪。。

Jeb: 这些中心化事务 id 都是 uint 类型的

— 2024-08-19 —

Vage: 🐝

dalee: 大佬们，为什么这个方法定义了provider参数并且后面没有问号，但是在调用的时候可以不穿呢？

gavin: 构造对象的时候已经传了 所以不用在传了

dalee: 好的谢谢

elon: When calling GetTransaction, "lite server error, code -400: requested account id is not contained in the shard of the specified block" is returned. How to solve it? 当我调用go的sdk的GetTransaction 方法时，返回这个错误，有人知道怎么解决么

jdn43: tonsdk  怎么发起一笔转账啊？

cajh: 在合约里能直接调用另一个合约的get 方法么。比如在minter合约调用wallet合约的 get_wallet_data 方法

cajh: 那有什么办法进行数据传输呢，弹回消息？

Peter: mac版本咋进测试环境，我看这个和官方文档不一样啊

Manta: 大佬知道如何在func 把address slice 转成 uint256吗

Ton: 有个问题，

Ton: 这是怎么索引的啊

Ton: 怎么知道有多少个holder

Ton: 各有多少个

Ton: 有没有大佬会

Mike: hello，使用tonweb发起转账，有方法可以拿到交易hash不？

Mike: boc拿到了，不知道怎么去解析😂 (reply to 48777)

Ton: 就是从第一个区块开始扫？ (reply to 48773)

Ton: 感谢 (reply to 48782)

gavin: 简单做 https://toncenter.com/api/v3 直接用toncenter api 就好了 别人都处理好了

国际城品茶: 给大家分享个Ton链的空投项目，非韭菜盘

国际城品茶: https://t.me/gaodecoinbot/join_gdc?startapp=1721716417z49GVx

国际城品茶: 技术大佬们提提建议

An: 各位大佬好，有验证 ton 签名的java 例子呀

Mov: 大佬们，请教一下哪里能获取到Ton链上的 的 Token 列表，Token 实时价格，Token 历史价格 api [抱拳]

Mov: 🙏

wikig: 可以考虑  https://api.geckoterminal.com/api/v2/networks/ (reply to 48799)

Ton: 我现在想做一个功能，用户购买我的权益，当有其他用户购买产品时，自动分成，这个有没有解决方案？

Mov: OK 我看下，感谢！🙏 (reply to 48802)

jdn43: 有人用过 TONsdk 吗 ？

jdn43: boc 完成了，要怎么发起转账呢 ？

muho: .

Yang: TVM Debugger  I have just released an early version of TVM Debugger, which will allow developers to debug their TON contracts as they would debug any regular program - line by line, with breakpoints and variable inspection.  You are welcome to try it out - just look at this example repo.  If you have any feedback, suggestions, bug reports, or anything else of that sort, do not hesitate to post it in the discussion of this post, or simply DM me.  The implementation of the debugger is definitely a little dirty in some places at the moment, so please don't judge the quality of code too harshly yet.  If you would like to learn about the inner workings of the debugger, or about the features that may be implemented in the future, please read this post. (forwarded from krigga is typing...)

jdn43: 怎么用 python 发一笔转账啊 ？哪个库能转账 ？

jdn43: 这是什么啊，怎么就简单的转个帐都这么麻烦。 官网的python skd  都不清不楚的

Ton: 密钥都泄露了啊 (reply to 48806)

jdn43: 对啊，钱给大家了， 发个转账案例

wikig: 还真是 小心被我这种坏逼偷钱 (reply to 48818)

Ton: 牛

wikig: 但是py的还真没试过 只用过node环境的

gavin: 有钱吗哥

Ton: 有钱吗哥

gavin: 直接这样发啊

gavin: https://pypi.org/project/tonsdk/

gavin: 官方文档不是写了么

jdn43: 怎么发都是，https://toncenter.com/api/v2sendBoc   {"detail":"Not Found"}

jdn43: {'func': <bound method ToncenterClient.__post_request of <tonsdk.provider._toncenter._client.ToncenterClient object at 0x000002011992ED60>>, 'args': ['https://toncenter.com/api/v2sendBoc'], 'kwargs': {'data': {'boc'

Mike: 发了之后的交易hash怎么拿到呢 (reply to 48826)

gavin: 看上去你的钱包是不是没初始化呢 (reply to 48833)

jdn43: tonsdk.provider._toncenter._client.ToncenterWrongResult: 500 <ClientResponse(https://toncenter.com/api/v2/sendBoc) [500 Internal Server Error]>

jdn43: 为什么助记词 导入的 钱包 出来的地址和 我的真实地址不一样 ？

jdn43: Wallets.from_mnemonics(mnemonics=mnemonics)  wallet.address.to_string 居然不是真实地址

Galen: 由助记词推导ton钱包，有没有大佬有文档啊

Galen: 跪求demo

Mike: 😂这个不是文档上就有了么

Galen: 有链接不，发一下，🙏

Mike: 自己找把

Galen: ok (reply to 48863)

Galen: 找到了，之前找错文档了。感谢 (reply to 48863)

Amir: Hi everyone

Ginta 🦴: 你们能提现dogs吗

Development: 0QA1xpyYSdK_VV_RrKvMjOclSzpVqs2vJOlGGzGDHh_yiHuF gift me test ton please help please

Ton: 有无教一下的？ (reply to 48803)

— 2024-08-20 —

None: 有谁知道opcode=0xfbdb461f是什么类型的交易吗

Mike: 解析boc，我是可以拿到内容的hash，但还是拿不到交易的hash；虽然通过gettransactions可以拿到，但就想交易完就拿到来着 (reply to 48777)

Vincent: 老哥们，ton 中预执行的方法是哪个？要调api 吗？

prometheusoo: miniapp中保存图片到系统相册，是不是不支持？

prometheusoo: 有大佬了解这个吗

cajh: 我要往wallet合约发送一个消息，这个写法对么，大佬们

gavin: 最后的那个 message mode 可能有点问题 (reply to 48923)

cajh: 那我应该用哪个呢，这个消息的目的就是把reward传给invite_reward

cajh: test 也不抱错，一脸懵

壮壮: 传参数？

cajh: wallet合约自定义了一个op 用来记录返佣数据，现在需要在master合约传过去

Pangolin: tact合约中如何有效的防止Int 整数溢出的

gavin: 你messageBody里面的 reward 只是一个普通的变量值, 具真正的 ton amount 应该是那个 grams (reply to 48925)

cajh: 还是一头雾水，这个消息我不发送ton，不发送Jetton，只发送到wallet的op::invite_reward 记录一下数据

11: 那你直接发就行啊， op code 改成你这个，cell里面啥也不加

cajh: 哦哦

11: beginCell().storeUint(Op.invite_reward, 32).endCell()

cajh: 上面不用再封装一层么，目标wallet地址传哪呢，大佬

gavin: 填的0 就是期望转发所有, 那 send_raw_message 的mode 你试试64 (reply to 48929)

gavin: 我靠 你自己写的代码 都不知道参数传在哪儿么🥹 (reply to 48936)

cajh: 😅 上面大佬说直接发，我以为直接发messageBody就好

11: 你用这个函数替代你的internalMessage方法  () send_simple_message(int amount, slice to, cell body, int mode) impure inline_ref {      cell msg = begin_cell()         .store_uint(0x18, 6)         .store_slice(to)         .store_coins(amount)         .store_uint(1, 1 + 4 + 4 + 64 + 32 + 1 + 1)         .store_ref(body)     .end_cell();      send_raw_message(msg, mode);  }

cajh: 好的 谢谢🙏

11: 然后cell按照你的方式写，我刚刚没看清楚你还有个参数，不好意思

gavin: 我觉得你还是搞清楚每个参数的含意比较好

gavin: 别回头写完了币转丢了😅

cajh: 嗯 要的要的

cajh: 哈哈哈哈

11: 确实，你靠猜合约很容易有漏洞

cajh: 😭

U: 大神们，mini app 中是不是无法使用第三方cookie

U: mini app 中使用 iframe 加载一个站点，这个站点会设置cookie ，但是放到 telegram mini app 中 设置cookie 没有成功，如何解决这个问题

jdn43: 请问一下， wallet_workchain = 0 wallet_version = WalletVersionEnum.v3r2 mnemonics, pub_k, priv_k, wallet = Wallets.from_mnemonics(mnemonics=mnemonics, version=wallet_version, workchain=wallet_workchain)  这个导入助记词 之后 看到的钱包地址 为什么和 Tonkeeper钱包里面的地址不一样 ？

gavin: 你得确认ton keeper 的wallet version 跟你的是否一致

william: tonkeeper转入测试币不显示是为啥？

william: 已经切换测试网了

壮壮: 你们能获取到tg的头像吗

cajh: 可以的 (reply to 48970)

壮壮: 我miniapp 进去没有任何头像的信息呢

壮壮: 只有名字 id那些信息

cajh: 要接口去拿，转好几个接口呢，我记得

壮壮: 啊

壮壮: 什么接口 有文档方便告诉下吗

jdn43: <ClientResponse(https://toncenter.com/api/v2/sendBoc) [500 Internal Server Error]> 一直这个错误 是boc 不对吗？

Play: 这个接口  https://core.telegram.org/bots/api#getuserprofilephotos   然后这个https://core.telegram.org/bots/api#getfile 就有了 (reply to 48976)

cajh: 忘了文档地址，你去telegram官方文档里看看 (reply to 48976)

Metas: ton-connect的浏览器插件发起交易拿到的boc解析为hash正常，手机app解码的hash查不到交易，有人遇到吗？

None: 问一下，我通过ton4j的tonlib调getRawTransactions接口，拿到一条数据的in_msg.source="", 把in_msg.msg_data.body解析成CellSlice后长度为624位，有谁知道这是什么交易吗，需要怎么解析出body中的内容啊？

Wendy: 有没有老哥知道enableClosingConfirmation()  启用关闭小程序确认按钮时，点击确认的回调方法啊

Wendy: 我找文档没看到呢

Wendy: 点这个关闭或者右上角的×有回调方法吗

CN: 有没有老哥知道，Tonkeeper钱包如何操作由v 4 R 2变成v 3 R 2?

壮壮: 钱包点那个v4 好像就能切

wikig: 设置里不是可以选择嘛？ (reply to 48999)

CN: 这里改不了

壮壮: getUserProfilePhotos  这是机器人的方法吗

cccc: 用 blueprint run 部署合约，报账户问题，有碰到过么，LITE_SERVER_UNKNOWN: cannot apply external message to current state : Failed to unpack account state'

cccc: 是不是我钱包是tonkeepr 创建的额，是v5的版本，blueprint 好像依赖的是v4的版本

cccc: 可是我blueprint 是最新的版本了，里面钱包不一致咋搞，我是直接把ton 版本改到了14的版本，默认bluepint 创建的项目是 13的版本

gavin: 那你就用tonkeeper 把ton转到v4就行啊

gavin: v5 v4不一样 钱包地址就不一样

wikig: 现在好像确实是默认V5 (reply to 49015)

tom: 各位大佬，请问store_uint(4 + 2 + 1, 1 + 4 + 4 + 64 + 32 + 1 + 1 + 1)这个语句是什么意思呢，来自https://github.com/ton-blockchain/token-contract/blob/main/ft/jetton-wallet.fc#L72

cccc: 嗯嗯，我自己就是这么搞的，现在可以了，这个 blueprint 官方sdk的最新版，怎么依赖的ton 还是 13版的旧的啊，这也太不上心了 (reply to 49017)

gavin: 都是草台班子 (reply to 49022)

cccc: tonkeeper 默认v5 , 按照官网不用框架的例子 得更新 ton 的版本，本来想着用框架省点事，还得自己踩坑 (reply to 49020)

gavin: https://docs.ton.org/mandarin/develop/smart-contracts/messages#%E6%B6%88%E6%81%AF%E6%A8%A1%E5%BC%8F (reply to 49021)

cccc: 官网的文档也写的乱七八糟的

Metas: 有用boc取hash来判断交易确认的兄弟吗？有测试过在app中能work吗？

Metas: 我这边插件可以，app扫码的交易不行

wikig: 主要是最近才改的（两个月？  为了配合他们自家的singer app (reply to 49025)

wikig: 可以是可以，但是不是很stable。强烈建议用监听方案（ (reply to 49028)

Metas: 监听方案是哪种 (reply to 49031)

wikig: 就是做链下监听，监听链上信息 (reply to 49033)

Vicki: 问下，是ws监听指定钱包的转账信息么 (reply to 49034)

wikig: 可以是ws也可以是轮训方案，看这边具体写法和诉求 (reply to 49036)

Vicki: 轮询就是HTTP  api 获取对吧 (reply to 49038)

wikig: 是的

Vicki: 3q (reply to 49040)

Metas: 具体是监听什么 (reply to 49034)

wikig: 看这边目的是什么啊，如果是监听交易那就是监听交易呀~ 。 (reply to 49043)

Metas: 轮询钱包的transactions？

wikig: 也是一种办法吧

Metas: 我的目的是判断当前钱包调的合约交易是否确认？

Mike: 目前只看到这个 (reply to 49045)

Mike: 其它的好像没看到呀

Mike: 就像我想拿到交易hash，感觉也是要拿这个

Metas: 轮询交易你怎么判断某个交易和刚刚调的合约交易是同一个呢？

Mike: 还是可以的

Mike: 不是有个payload啥的么，传个你的唯一标识

Mike: 轮询之后比较下入参，我觉得是可以的。就是不够及时呀，还有其它链的pending啥状态看到有么？

Metas: payload传的是合约的参数呀

Mike: 那咋拿

wikig: 额，你们现在的诉求是什么？

wikig: 就是，用户发出交易，有个hash没错。message hash，然后你们需要对这个hash做什么？

wikig: 入库？

wikig: 还是什么类型的操作

Metas: 就是你调了一个合约，要判断交易确认和有没有成功？

Metas: 类似evm的waitForTransaction

wikig: 这个确认行为是前端执行是吗？

Mike: message hash还是tx hash呀 (reply to 49058)

Metas: 判断链上有没有确认和成功

Metas: 不是啊 (reply to 49063)

wikig: 哦，如果是前端执行的话，那就算了别轮训了（虽然其实后面也还是要轮训查询交易状态，毕竟异步）  前端使用tonconnectui发出交易之后获得hash。message hash  接着可以直接去tonapi用trace接口

Metas: 比如你发个交易可能失败、pending、成功

wikig: 我是说这个判断，以及状态获取，是在用户前端实时获取然后展示给用户看。还是说你们有一个后端需要统计或者记录某些交易入库 (reply to 49061)

Metas: 我就是用这个方式， 在 tonkeeper app里面解析的hash不对 (reply to 49067)

Metas: {     "boc": "te6cckEBAwEA3wABnDB1UN28q+Ct8T7p4LvYCG69g7sRTRxSIatE3t1rdzRijbDvWYB7u0H2HuAIz/orDtPPPa4gKJQiYB0maPQvawgpqaMXZsRcVwAAANcAAwEBZmIAHjrrdtxHIQa9EIXbp4XBNJqQS1X/dBA4Y7D7Hr+u4zScxLQAAAAAAAAAAAAAAAAAAQIAq8RmAKgAAAAAAAAAAIAH/dPvLbO57YLqYZekMisRAvloV1Hdedlmv7thxKVr3GzYQ2aM39fwGO5Dz1WBX0xUwdb+kGvbVqCe3Nt6DQ9yI77lJ5k9q+Nwo8Y5yw==" }

Mike: 这个状态怎么取呢 (reply to 49069)

wikig: 如果是前者，可以考虑这样。  轮训trace。  直到获取到成功状态 (reply to 49067)

Metas: 可以试下我这个boc，解析出来的hash在tonviewer找不到

wikig: 可以考虑用tonweb.utils.boc库

wikig: 这个解析出来应该是个message hash吧，应该可以用trace接口找到才对 (reply to 49074)

Metas: 插件是可以的， 就是app不行

Metas: trace和events都是一样的参数

wikig: 等下，app ？ 你是在移动端的tonkeeper里面执行这个行为？ (reply to 49077)

Metas: 是的 (reply to 49079)

Mike: 我昨天解析出来了，去网站上查，在入参里边可以找到。但是通过接口找不到呀 (reply to 49074)

wikig: 那就很难说了。毕竟tonconnectui的多端多环境下拿到的返回值和信息都会有很奇怪的feature，这也就是我不用这个返回的boc的原因（比如之前好像测过，在Android的移动端直接拿不到boc之类的事情）  实在不行要不考虑轮训用户地址吧 (reply to 49079)

Mike: 我就是用这个 (reply to 49075)

Mike: 这个不是message hash么 (reply to 49082)

Mike: 要交易hash才能像其它链查询状态把

wikig: 下面这个wait for看起来是需要传入的是transaction的hash (reply to 49082)

wikig: 但是你拿到的是message hash

Mike: 话说这个ton链有状态么，看不明白，主要是通过getTransactions没看到有返回状态

Mike: 为啥tonweb的没看到呢

Metas: 难道是app调用拿到的hash和tx hash不一样，插件钱包的hash是一样的 (reply to 49088)

Metas: Tx hash怎么拿

wikig: 额，不是啊，插件钱包拿到的也是message hash (如果能拿到的话） (reply to 49092)

wikig: 然后用trace api去看整个交易簇呗

wikig: 或者gettransactionbymessagehash

Metas: 但是我用插件钱包拿到的这个hash可以去区块浏览器查到

wikig: 可否decode一个样例hash（app的） (reply to 49097)

wikig: 我去tonapi走走接口看

wikig: 主网的还是testnet？

Metas: 这里 (reply to 49071)

Metas: 这是app的，测试网

Metas: Boc，你可以解出hash

Mike: 这个接口不是作废了么 (reply to 49096)

Mike: 同问 (reply to 49093)

Mike: 其实我就想在发出交易（如转账）之后，直接给我返回个交易hash

Metas: https://github.com/ton-connect/sdk/issues/189

Metas: 我用的就是最下面那个方法

Metas: import { Cell } from '@ton/core';  const transactionRes = await walletConnect.sendTransaction() const cell = Cell.fromBase64(transactionRes.boc) const buffer = cell.hash(); const hashHex = buffer.toString('hex'); // hashHex: 57123dffb9029bdaa9187b5d035737eea94a1b8c018e2ab1885f245eb95c6e30 // const hashBase64 = buffer.toString('base64');

Mike: toweb好像只返回了个 {@extra: "1723608477.1462789:0:0.6971379973574183", @type:""}这种呀

Mike: 这个extra是有什么意义的么

Metas: @carzygod 咋样

Metas: 有找到吗

Mike: 找啥

wikig: 嗷 没在电脑边 还没decode boc😢 (reply to 49122)

Chain: error: 'LITE_SERVER_UNKNOWN: cannot apply external message to current state : External message was not accepted\n' +         'Cannot run message on account: inbound external message rejected by transaction 084xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx:\n' +         'exitcode=136, steps=55, gas_used=0\n' +         'VM Log (truncated):\n' +         '...s0,s7\n' +         'execute AND\n' +         'execute THROWIF 132\n' +         'execute XCPU s2,s5\n' +         'execute EQUAL\n' +         'execute THROWIFNOT 133\n' +         'execute XCHG2 s3,s6\n' +         'execute EQUAL\n' +         'execute THROWIFNOT 134\n' +         'execute NOW\n' +         'execute LEQ\n' +         'execute THROWIF 136\n' +         'default exception handler, terminating vm with exit code 136\n',       code: 500  谁懂只要通过jsonRPC创建交易无论用哪个库，只能执行一次，再次就出现这个错误

壮壮: tg 的头像地址  web加载跨域 怎么搞

壮壮: 在自己服务器先下载吗

Mike: 大佬要是有方案拿到tx hash分享下哈 (reply to 49099)

🔵Roshan 👾 BITS: UQDLmOkg372-tXfbBavR11mSSr0BhcegmmGjUxusHG2QQkpe

🔵Roshan 👾 BITS: 1ton

Development: Test? (reply to 49183)

— 2024-08-21 —

Myron: 想问一下telegram的wallet可以切换到ton测试网吗？

Ginta 🦴: tonkeeper吧

Metas: ton space 不行

Metas: tonhub可以

gavin: 直接可以计算出来啊 (reply to 49146)

Mike: 怎么计算 (reply to 49212)

Mike: 可以分享给我下么

Mike: 就是没在哪里看到可以计算

gavin: 你是什么编程语言

Mike: js

Mike: 用的tonweb这个sdk

gavin: 我看下

Mike: 好的呀，感谢

Mike: 那上链的时候能返回么 (reply to 49223)

Mike: 这个计算出来了，但是v2的接口好像没有根据msg hash查的呀 (reply to 49224)

Mike: ton是不是也没有pending状态之类的呀，通过gettransactions也没看到有状态的字段

cajh: 一个方法要发送多个消息，怎么才能做到某一个失败，异常后，后面不执行，必须要用弹回么

gavin: 对 需要处理回弹消息 (reply to 49229)

cajh: 额  好麻烦呀😅

gavin: 我刚看了下  确实是能根据 payload 的 in message cell 计算出这个hash, 你找找根据这个hash 查询出整个tx的API呢 (reply to 49226)

Mike: 这个就是计算的msg hash。v1版本有根据这个去查询的，但是好像作废了，不知道能不能用 (reply to 49232)

gavin: 异步架构的都是这样  CAP不可能三角 (reply to 49231)

gavin: 我也来找下 (reply to 49233)

Mike: 这个好像可以查，能不能查到就不知道了

Mike: 还真可以查到 (reply to 49239)

Mike: 也是toncenter.com域名的，应该不是第三方的

Mike: 好的呀 (reply to 49245)

Mike: 这个sdk就是的 (reply to 49245)

Mike: 应该也算是官方的

Mike: 不管了，先用着再说

Myron: 有没有那种可以在miniapp使用的支持测试网的钱包呢 (reply to 49208)

gavin: 对, 我们团队之前就遇到 某个tx交易延迟了很久才能查到 (reply to 49256)

gavin: 后来就没有用那种方式了

Mike: 那后来咋搞的 (reply to 49260)

Mike: 这个就不知道他们的历史了 (reply to 49253)

Mike: 你们后来这个tx hash咋处理的 (reply to 49259)

gavin: 就是轮询单个合约地址的交易列表+前端会传tx (reply to 49263)

Mike: 前端怎么拿到这个tx

gavin: https://www.npmjs.com/package/@tonconnect/sdk 我们用的这个玩意 (reply to 49265)

gavin: 肯定也不可靠, 都是等交易上链了才有tx Hash

Mike: 本来还想看看他这个怎么实现的，没找到这里的源码，还是算了

Mike: 主要是看看它这个是不是也是通过接口拿到的

Mike: 至于说换sdk，这个换不了

gavin: 都是屎上雕花

cajh: 测试网节点挂了么，怎么部署不上去

cajh: 😂

Myron: https://t.me/wallet   这个不支持测试网是吗？

wikig: 啊？拿tx hash不是可以直接根据前端给的message hash直接trace出关联交易簇吗 (reply to 49146)

gavin: 刚刚讨论了 都是要等交易上链才有 (reply to 49278)

Mike: 这个怎么trace，用啥方法 (reply to 49278)

Mike: 是要拿message hash通过api去查询到么

wikig: 好像有直接的http-RPC服务吧（只是太难用然后好像大家一般都用的比较少，我看tonweb的类库里有这个操作， GetBlock和toncenter都提供有rpc服务）  但是大家比较习惯用tonapi . toncenter-api . tonxapi 或者Dton的注意要原因还是，相对来说方便很多hhh (reply to 49255)

wikig: 目前好像没有（@wallet没做支持）  但是我们正在折腾一个MPC wallet（webapp base），应该会支持。  晚点会放个beta version出来试试 (reply to 49254)

wikig: 是啊，所以要轮询啊 (reply to 49279)

Mike: 轮询是可以的，就是会有个时间差

wikig: 如果你是前端发出去之后直接查，大概率是空  所以一般是得间隔轮询。  如10s轮一次 (reply to 49281)

Mike: 前端发出去之后，等不了10s，哈哈。所以只能空着先

wikig: 这个躲不掉。  因为你没有办法获取这笔message hash对应的交易簇的行为状态  以及停止没有 (reply to 49286)

gavin: 就是你得有多种方案补偿这个业务, 不能仅靠这个轮询. 刚刚说了 这个都是第三方节点实现的 会有不稳定因素

wikig: 如果你是为了前端给用户展示，这笔交易的状态跟踪啥的。  拿完全可以等10s，展示pending，然后轮询更新跟进。 (reply to 49288)

Mike: 说的很有道理

wikig: 这个确实。  但是把........ 其实一点点不稳定因素倒是没啥关系。  因为我用诸如raydium / JUP / Uniswap之类的前端是不是也会因为RPC返回错误导致状态不更新 (reply to 49290)

Mike: 这个都会有的

wikig: 他这个应该是抽象写了个伪代码我觉得。具体实现得自己写吧 (reply to 49269)

wikig: 会有这种情况。raydium在Solana上的交易也有时会pending很久很久（由于主网堵塞或者gas没加够） (reply to 49259)

Mike: 这个ton好像也没看到让我加gas费呀

Mike: 哈哈

wikig: l是滴，所以就更迷了hhh，上面说的gas是Solana~ (reply to 49297)

lemon: 各位大佬这两个位置数据怎么解析?

Mike: 这个倒是也没有试

wikig: 看样子都是boc cell的形式。 https://github.com/toncenter/tonweb/blob/master/src/boc/README.md  当然，我是懒狗，我选择直接用toncenter他帮我解析好 (reply to 49300)

lemon: 感谢大佬  我试下 (reply to 49303)

lemon: 这种是boc 还是cell? 方法知道了 具体应该怎么处理呢 (reply to 49303)

wikig: 看是是要用来干什么呢 (reply to 49306)

lemon: 看他交易数据

lemon: 不是封装数据

wikig: 那你最好就得知道你封装进这个boc的时候的数据结构和数据类型呢 (reply to 49308)

lemon: 如果不知道的话就不行了么

lemon: 现在交易内容顺序不是固定的么

lemon: 之前只弄过eth的

lemon: 所以不太理解Ton的数据到底是怎么组装的

Metas: 发现个问题， app钱包的message hash 去ton api查不到交易

Metas: 插件可以

Metas: const res = await tonConnectUi.sendTransaction(tx);     console.log(res);     const hash = Cell.fromBase64(res.boc).hash().toString('hex');     console.log(`message hash: ${hash}`);

Metas: 你们的message hash是这样计算的吗

wikig: 额，只是问你最终是需要啥。需要看到的内容是啥。  如果是dex如ston.fi之类的交易内容，应该是有独立封装的。  如果只是你传了某个string或者说你自己封装的boc，那你得按照你自己的封装方式来解 (reply to 49312)

wikig: 看起来好像没啥问题（？ (reply to 49318)

gavin: 每天都有人来问 message hash

wikig: 要不你丢个你decode出来但是查不到的hash看看 (reply to 49315)

Metas: 昨天发了呀 (reply to 49322)

wikig: 哦对哦，你昨天发了个boc (reply to 49323)

Metas: {     "boc": "te6cckEBAwEA3wABnDB1UN28q+Ct8T7p4LvYCG69g7sRTRxSIatE3t1rdzRijbDvWYB7u0H2HuAIz/orDtPPPa4gKJQiYB0maPQvawgpqaMXZsRcVwAAANcAAwEBZmIAHjrrdtxHIQa9EIXbp4XBNJqQS1X/dBA4Y7D7Hr+u4zScxLQAAAAAAAAAAAAAAAAAAQIAq8RmAKgAAAAAAAAAAIAH/dPvLbO57YLqYZekMisRAvloV1Hdedlmv7thxKVr3GzYQ2aM39fwGO5Dz1WBX0xUwdb+kGvbVqCe3Nt6DQ9yI77lJ5k9q+Nwo8Y5yw==" }

Metas: 看看这个你们能查到tx吗

wikig: 但是cell下面有fromBase64用法吗 (reply to 49320)

lemon: 这ton真复杂

cajh: 门槛高了 人就少嘛。

cajh: 😅

cajh: solidity rust 多繁荣

lemon: 额 我觉得复杂 和门槛高好像不太一样

cajh: ton要不是有tg ，估计没多少人去玩这个生态吧， 当年的eos多牛逼，干翻以太坊呢，结果自己兼容evm了

lemon: 哈哈哈

Metas: 有，@ton/core (reply to 49327)

lemon: 总想干翻苍穹

wikig: 嗷，我之前用的tonweb,那我换个库试试

wikig: 我用tonweb来解这个boc拿到的乖乖的

wikig: 741d429a41308dada54a991fcc8f54478dc5da50352a7be1f201edcb19fbd28d (reply to 49338)

Metas: 你试试

lemon: 大佬怎么做到的 (reply to 49339)

wikig: 啊？换到`@ton/core`去了啊 (reply to 49339)

lemon: 1.将boc转成cell?

lemon: 2.???

Metas: 上面我代码都贴了呀

Metas: 你试试这个message hash能查到tx不

wikig: 但是他好像不是来找hash的 (reply to 49346)

wikig: 你是要decode boc内容是吧 (reply to 49343)

lemon: 对对对

Metas: Message hash可以查交易的，有api

wikig: 我的建议是，如果是一个公开的协议、格式，可以直接去用toncenter来查这笔交易

wikig: 然后它的接口会帮你deoce好

wikig: 如果不是，那就只能自己一个个buffer的读了

wikig: 当然，实际上也不至于hhh (reply to 49354)

lemon: 自己弄了半天也没搞出来

lemon: 就是这个data解不出

cajh: 根据cell的格式解析呗

lemon: 是呀 弄出来好多位2进制的

lemon: 不知道解析的顺序啥的

wikig: 这就是我说的你得知道封装顺序是啥 (reply to 49361)

lemon: 这个行业没有标准的么😂 (reply to 49362)

lemon: toncenter是怎么解出来的呢

Logan 🐯: 同一个助记词，公钥的主网和测试网的地址一样么

User<7148949927>: 看你什么地址格式，如果是hex应该是一样的

Logan 🐯: EQ地址？

gavin: 不一样哦 (reply to 49367)

gavin: https://ton.org/address/

Logan 🐯: 明白

gavin: public key 是一样的  钱包地址不一样哈 (reply to 49367)

wikig: 不是标准问题 是你封装内容是自定义的 (reply to 49363)

wikig: 所以如果不是开源并且常用的如dex或者什么message之类的

wikig: 那他也不在知道你写的啥呐

🐮: 你们研究ton生态用了多久   从合约到前端和swap

🐮: 感觉坑比较多    想弄个项目都不知道预估多少时间才够

prometheusoo: 😅

🐮: 怎么说 (reply to 49382)

🐮: Dogs好像没啥应用吧  也弄得停牛批的

Metas: @carzygod 那个boc的transaction有查到吗

wikig: 确实是，所以大家都做web2.5现在，怂 (reply to 49381)

wikig: testnet上没有查到 (reply to 49390)

wikig: 但是解析用法没有问题的1

wikig: 所以可能真的是，app端拿到的message hash跟实际不一致？

Metas: 嗯，很奇怪，也可以用我这个demo在app试下，https://github.com/YanYuanFE/demo-dapp-with-react-ui (reply to 49395)

wikig: 可否直接避开这种用法（ (reply to 49398)

wikig: 用监听用户account之类的方法实现

Qubitcoin: ston.fi 的合约地址在哪看呀

Qubitcoin: 官方文档翻了个遍也没看到

gavin: https://docs.ston.fi/docs/developer-section/sdk/dex-v2/swap (reply to 49408)

Qubitcoin: 这个我看了，都是测试网的

Qubitcoin: 主网的没看到哪里有写

gavin: https://github.com/ston-fi/dex-core (reply to 49412)

Qubitcoin: 👍

wikig: 啊这，那我就蛮好奇，如果我起个ton的全节点，不会连个标准的rpc都没有吧（ (reply to 49403)

Asaki: 确实没有的 (reply to 49415)

wikig: 那确实神奇😂

wikig: 那大部分服务应该用的都是索引服务吧，确实方便（ (reply to 49419)

Asaki: 现在没有一套标准的接口定义规范，ton-center & ton-api 的标准都不通用，属实不应该 (reply to 49419)

wikig: 但是toncenter和tonapi的角色应该是etherscan-api (reply to 49421)

gavin: 就是你自己有节点的话  自己部署一个 https://github.com/toncenter/ton-http-api 这个玩意就行了

wikig: 没理由通用，或者没有必要通用的吧（毕竟不是RPC）

Asaki: 方便吗，不方便吧；本来数据就在节点里了，还要再存储一次，我理解这根本是基建差导致的无奈的冗余了 (reply to 49420)

Asaki: 话虽如此，对生态的铺开听不利的 (reply to 49424)

gavin: 相当于TON node 只提供tcp, 这个服务在这个基础上包装一个 http

wikig: 我说的是用服务。比如我去使用tonapi/toncenter的服务  相当于他们是这个索引服务提供商  或者dton.io也是这套逻辑 (reply to 49425)

Asaki: 只是用的话，那确实没关系了 (reply to 49430)

wikig: 我的理解是，一般Dapp前端builder，折腾不来adnl，所以tonapi/toncenter这类索引服务，转成标准restful api的模式还是蛮重要的。  生态应该算是evm上etherscan-api类似的服务。（毕竟我确实可以去rpc拿信息，但是如果需要拿统计性的信息，如某个address的主流erc20持有情况，使用这类服务和自己查的复杂度还是...区别蛮大的）

Asaki: 后端也折腾不来 adnl

Asaki: 🤓 也不想折腾

gavin: 这个有啥好讨论的

wikig: 话又说回来，现在 doge 他们不是在折腾 tonxapi （前tonfura) 嘛。

wikig: 有用上了的吗（

wikig: 我是用toncenter用破防了（tonapi的ws一直爆炸）  所以现在主要用的其实是dton..........

wikig: 我觉得算是降低开发门槛的一种方案吧。 (reply to 49445)

wikig: (确实

gavin: 自建成本是不是又很贵

wikig: 但是麻烦呐 (reply to 49451)

wikig: dapp开发，能写的明白前端调用，tonconnectui，http查询服务，读写合约，就已经很不错了（

wikig: 在这个基础上再做个自建节点、adnl，我个人觉得有点地狱了（ (reply to 49455)

gavin: 怎么说？ 那些场景？ (reply to 49456)

gavin: 我看v3 给的挺全了  区块 交易 账户、 jetton、nft、转账记录

Metas: 你说下具体怎么监听呢 (reply to 49401)

wikig: 轮训监听用户地址呗。然后拿到最新一笔交易（ (reply to 49463)

品誉: 各位大佬，mint jetton有相关的代码库吗？

Metas: 我试了，最新一笔交易不是刚发出去的，有延迟 (reply to 49465)

wikig: 是的 所以意思就是 轮询等到最新发出去那笔然后比对是不是你发出去的 (reply to 49469)

lemon: 大佬这个dex的标准在哪看的?? (reply to 49378)

Metas: 怎么对比呢？ (reply to 49470)

wikig: 标准的话，我记得有操作opcode的吧（但是至于说ston.fi他们有没有公开规范的opcode就不太知道了，可以看下他们的docs (reply to 49471)

wikig: trace一下最新的交易，然后对比opcode之类的的呗 (reply to 49474)

IIIllll: TON 的节点是我目前建立过最简单的了 (reply to 49452)

Metas: 有代码参考吗？ opcode不知道怎么取， transaction里面没看到有opcode的东西 (reply to 49476)

wikig: 没找到，我记得群里发过opcode规范列表的仓库 (reply to 49483)

品誉: 这个自己mint的jetton如何验证？

wikig: 提问，有无大佬写过telegram Oauth .  现在关于telegram Oauth在miniapp中的feature问题想请教一下。

CN: 大佬，web程序使用ton钱包中的usdt进行支付，怎么实现？麻烦大佬推荐一下方案

壮壮: 直接支付就行  使用大佬的test.html 参考 (reply to 49492)

wikig: https://test.tonspay.top/test.html (reply to 49492)

CN: 谢谢 (reply to 49495)

CN: 谢谢 (reply to 49494)

enpitsulin: scam吧这个 TON Community 是个小程序来着

gavin: 那必然是 (reply to 49501)

cfs chef: 有富豪用过电报的广告吗，这个cpm要怎么给

User<5587491323>: miniapp 更新了部署包后 tg内打开还是之前的功能效果 这个是什么原因呢 缓存吗 哪里可以设置这个

User<5587491323>: 有大佬指点一下呗

wikig: 清缓存 (reply to 49516)

User<5587491323>: 游戏开发是cocos 在cocos里面清吗

wikig: 如果你是移动端，恭喜您有福咯。  老老实实跑到应用管理，强制停止应用，清楚缓存数据 (reply to 49516)

wikig: 别问俺怎么知道的。痛苦

User<5587491323>: 应用管理 在哪里

User<5587491323>: 😂 看来你踩过坑了？

wikig: 我说的是Android系统内的应用管理hhh (reply to 49516)

User<5587491323>: 那如果是苹果呢

wikig: 当然，如果你用了cloudflare的服务，你还得先把云端缓存清了 (reply to 49526)

wikig: Apple 就不太知道了 (reply to 49527)

User<5587491323>: 我把机器人拉黑 重新访问也不行

wikig: 因为缓存在你本地 (reply to 49530)

wikig: 跟Bot无关

User<5587491323>: 代码里面没有加缓存

User<5587491323>: 代码里面没有加缓存 也不行 (reply to 49531)

miya: 实际上是浏览器的缓存

Metas: import {Cell, Address, beginCell, storeMessage, TonClient} from "@ton/ton";  const res = tonConnectUI.send(msg); // exBoc in the result of sending message const exBoc = res.boc; const client = new TonClient({         endpoint: 'https://toncenter.com/api/v2/jsonRPC',         apiKey: 'INSERT YOUR API-KEY', // https://t.me/tonapibot     });  export async function getTxByBOC(exBoc: string): Promise<string> {      const myAddress = Address.parse('INSERT TON WALLET ADDRESS'); // Address to fetch transactions from      return retry(async () => {         const transactions = await client.getTransactions(myAddress, {             limit: 5,         });         for (const tx of transactions) {             const inMsg = tx.inMessage;             if (inMsg?.info.type === 'external-in') {                  const inBOC = inMsg?.body;                 if (typeof inBOC === 'undefined') {                      reject(new Error('Invalid external'));                     continue;                 }                 const extHash = Cell.fromBase64(exBoc).hash().toString('hex')                 const inHash = beginCell().store(storeMessage(inMsg)).endCell().hash().toString('hex')                  console.log(' hash BOC', extHash);                 console.log('inMsg hash', inHash);                 console.log('checking the tx', tx, tx.hash().toString('hex'));                   // Assuming inBOC.hash() is synchronous and returns a hash object with a toString method                 if (extHash === inHash) {                     console.log('Tx match');                     const txHash = tx.hash().toString('hex');                     console.log(Transaction Hash: ${txHash});                     console.log(Transaction LT: ${tx.lt});                     return (txHash);                 }             }         }         throw new Error('Transaction not found');     }, {retries: 30, delay: 1000}); }   txRes = getTxByBOC(exBOC);  console.log(txRes);

Metas: 在ton的文档找到了根据boc查tx hash的方法

Metas: https://docs.ton.org/develop/dapps/cookbook，最下面

gavin: 又来一个😅 这个问题讨论一整天了 (reply to 49538)

gavin: 看它的实现也是遍历地址下的交易列表然后去match

Navy | Ton.AI: 请教一下，大家写Ton的智能合约，用什么语言来写？

Metas: 这不是没结果吗 (reply to 49540)

gavin: FunC 或者 Tact、 或者 Fift (reply to 49543)

User<5587491323>: 这个有没有解决办法 (reply to 49536)

gavin: Leo哥说的不是很清楚么, 你的消息如果是刚构建出来， 只能计算出in msg hash， 需要等这个交易上链之后, 去transaction list 里面去挨个match in msg hash 能对应上的 才能取到tx. 所以结论是 如果没有上链是拿不到tx hash, 上链后才能拿到 (reply to 49544)

Metas: No bb，show code

Metas: 这个逻辑都知道，没人把核心代码发一下呀

Navy | Ton.AI: 感谢，有一些案例代码库发我参考吗？比如签到收gas fee功能 (reply to 49545)

Mike: 0:7dd8297a7734a140580493d9454831ded1e5a1bc46456344960ebdca4a3728a4 大佬们，这种是啥格式的

gavin: 看着像row地址 (reply to 49557)

Mike: 怎么解析出来，这个对应的是钱包地址

gavin: https://ton.org/address/

gavin: 你复制进去看看

gavin: ton core 有个库能parse

Mike: 复制进去是可以的 (reply to 49561)

Mike: 找到了，谢谢 (reply to 49562)

X RAY 🦴️️️️: 有国内远程的 ton 方向的工作机会吗？

maiya: 都在哪搞得ui，又一个项目

wikig: 话说有没有ton/telegram的前端组件库哦 比如dogs那种

wikig: 是开源库嘛？ (reply to 49586)

wikig: 那没事了

wikig: 那有明码标价吗😭 (reply to 49586)

— 2024-08-22 —

None: tonlib.getRawTransactions我只能取到10条，参数limit传20也只能取到10条，你们有这个情况吗？

Mike: 那就取10条呗

None: 10条取不到想要的

None: 我就说直接用tonlib调的

None: 咦？

None: 那我用的是java ton4j里面的tonlib

None: 😂

None: 好的  多谢

Qubitcoin: 请教下，在 stonfi 测试网加了 LP，如何验证是否加成功？

Kenny: 兄弟们，想请教下 TON 链上能生成公平的随机数吗？官方文档里有一篇讲这个话题的，在这 https://docs.ton.org/develop/smart-contracts/guidelines/random-number-generation 。他说，由于 validator 可以决定自己区块的 seed，所以可以跳过一个区块（通过向 master chain 发 message 的方式），让「请求随机数」和「生成随机数」的交易不在同一个区块里，所以处理「请求随机数」这笔交易的 validator 就没法构造一个对自己有利的 block seed。  可是尽管如此，一个 validator 也可以在自己的区块来临之前，就发送「请求随机数」的 message。这样子，等 master chain 发送回「生成随机数」的 message 时，刚好就到自己的区块里了，此时他再构造一个对自己有利的 block seed 不就好了？感觉文档里说的「跳区块」的方法不是很有用的样子？

Howard: 對於想要找工作的小夥伴, 可以嘗試這裡

Qubitcoin: ok (reply to 49712)

lin: tonconnect sdk 交易发送之前能获取到boc吗 哪位知道相关方法

Jackie: 大佬们，打开小程序的时候可以带参数吗？

gavin: 可以的 (reply to 49717)

gavin: 发送交易前取到boc？ 你要这个boc干啥？ (reply to 49716)

Jackie: https://t.me/runroolbot/runcoolgame?parame=1这种形式吗？ (reply to 49718)

gavin: 不是的 (reply to 49720)

gavin: https://core.telegram.org/bots/webapps#launching-the-main-mini-app 看这个文档 (reply to 49720)

Jackie: 哪如何传递 (reply to 49721)

gavin: only startapp parameter

Kenny: 谢谢回答！想请教下，TON 的生态里有没有 VRF 呀？ (reply to 49711)

Qubitcoin: 预言机是不是用 ton 的 sandbox 实现的？

wikig: 用 startapp=xxx 的形式 (reply to 49717)

Kenny: 这个我也看到了，可是我感觉一个公平的随机数 oracle 至少需要通过链下的去中心化的方式生成（比如 EVM 世界里 Chainlink 的 VRF）？这种 dev 自己写的，怎么感觉像是只有自己一个节点，他一个人岂不是就能控制随机数，感觉似乎不是很公平？ (reply to 49728)

Kenny: 谢谢了🙏我再去研究下 VRF 吧，感觉是我知识水平还不够 (reply to 49735)

Howard: 合約內有內置的 function 參數可以調用隨機數 (reply to 49725)

Kenny: 谢谢！但是这个随机数可以轻而易举被预测吧，我想要的是公平的随机数 (reply to 49740)

bysolana: 大哥们，wallet is not deployed怎么解决啊，明明是active的，我在做ton hello world系列，钱包扫码后就默认了钱包地址，

gavin: 你的网络选对了吗？ (reply to 49749)

bysolana: v5r1的网络 哥 (reply to 49750)

bysolana: testnet

gavin: https://testnet.tonviewer.com/ 你去这里查一下就清楚了

gavin: 有么有deployed 一眼就看出来

bysolana: 哥 是active状态

bysolana: 是不是要清缓存呀

gavin: 不用清缓存 (reply to 49759)

gavin: 的确是部署了, 那就得看下代码或者日志了 (reply to 49757)

bysolana: 代码都是copy教程里 就改了钱包版本号，另外npx blueprint run 几次后就默认了要连接某个钱包地址

Alan: 开发的tg钱包没上线tonconnect的时候。可以使三方应用通过tonbridge api和钱包进行链接吗

Lorance: Ton上面能做出Swap来吗

Robert: 大家好！我来自 TON 区块链上的 @Memebattleapp 项目💎。我们在 Ton App 和 Telegram 应用中心上列出。很高兴认识大家。我可以在这里分享我们的游戏链接吗

Yang: 不行 (reply to 49783)

zilin: 我猜测，你传入的地址还是被默认转换为可弹回的 (reply to 44650)

zilin: 目前我看到的有 evaa，一个借贷协议。他们有一个公开的 清算机器人的仓库代码。 链下获取价格，有官方的 api 接口，里面会有一个 signature，然后这个 price + signature 一起打包到消息中，发送给 evaa master，evaa master 会根据价格信息自己计算一次，如果符合要求就开始清算，并把奖励给你。这些都是异步消息的 (reply to 47501)

zilin: 这是 scam 吧？怎么看起来是官方发的 (reply to 49799)

Howard: 對 但取決於 看你要多安全 (reply to 49745)

Kenny: 想要那种任何人都不可以提前预测的随机数。现在感觉只能透过链下 oracle 实现了 (reply to 49802)

x: 有谁知道为什么这条 tx 没有包含 comment 吗？这个 payload 有任何问题吗？我是小白 (forwarded from x)

Qubitcoin: 请问下这个 forward_payload 字段如何解析呀？

Qubitcoin: 到这里卡住了

lemon: 大佬你们解析Transactions的时候是怎么将整个交易的 例如 usdt—>Ton  怎么拿到Ton数量和usdt的数量的呢 (reply to 49835)

lemon: 大佬那个op_code里面的数据 内容我昨天没有找到

lemon: 只看到了op_code的值  但是里面具体放了什么数据就不知道了

lemon: 这种得在哪看呢?

User<7405374332>: 有人在找开发人员吗？

lemon: 得去合约内看是吧    例如我在Ston.fi dex上交易  Ton—>usdt  这个我应该去ston合约中看么

lemon: 这两个都看着支持了

lemon: 但是里面的数据应该在哪个func中看呢

lemon: 哦哦 (reply to 49873)

lemon: 这两个标准在哪看

lemon: 纯小白   感谢大佬了

lemon: 弄了半个月了  天天头发一把一把掉 天天尿黄尿

lemon: 感谢大佬   我先自己研究下

lemon: crc32('transfer_notification  query_id:uint64  amount:VarUInteger 16  sender:MsgAddress  forward_payload:Either  Cell ^Cell = InternalMsgBody') = 0xf362d09c & 0x7fffffff = 0x7362d09c

lemon: cell^cell这个是指下一个层级么

gavin: 就是引用的意思 (reply to 49887)

gavin: TL-B格式 https://docs.ton.org/mandarin/develop/data-formats/tl-b-language

Howard: 一種格式 (reply to 49887)

Null: 请问搭建验证节点必须把私钥保存在服务器上吗？

lemon: 所以这op code=0x7362d09c时  它里面填充的数据和顺序就是 query_id:uint64  amount:VarUInteger 16  sender:MsgAddress  forward_payload:Either  这样么 (reply to 49916)

lemon: 那Cell^Cell=InternalMsgBody 这部分是什么意思  是指从上面load之后  然后剩下的内容重新解下Cell么

Qubitcoin: 如果第一位是0则直接解析，否则取 ref 解析

lemon: 好的  感谢 (reply to 49920)

E: 最近怎样？

— 2024-08-23 —

m: 哪个SDK支持w5的钱包地址

gavin: https://github.com/ton-blockchain/wallet-contract-v5 (reply to 49977)

Hưng: 大家好，有人能帮我提取 21 颗星吗？

m: 有可以调用w5的js sdk吗 (reply to 49978)

Howard: 不行～ 你只能花掉 (reply to 49979)

Hưng: 我以后可以转到 ton 吗？ (reply to 49984)

gavin: 可以的 (reply to 49985)

Hưng: 我可以问一下从 star 到 Ton 的转换具体时间吗？ (reply to 49986)

gavin: 现在你可以提现到fragment

Hưng: Thanks (reply to 49990)

aier: 有大佬知道jettonwallet地址是如何计算出来的吗？我地址很多，全部去请求合约有点吃不消

kevin: 知道， 参数是 walletAddr + jettonMaster Code + init data (reply to 49999)

aier: 我知道这仨，具体咋计算的？代码我没找到

aier: 我需要知道这个方法calculate_user_jetton_wallet_address，在哪里

Aaron: TON 如何生成一个钱包转账消息，然后用签名机生成签名，然后把生成的签名放到消息里，发送给链上。

kevin: https://github.com/ton-blockchain/token-contract/blob/2c13d3ef61ca4288293ad65bf0cfeaed83879b93/ft/jetton-utils.fc#L19 (reply to 50004)

aier: ok，感谢

gavin: HSM？ (reply to 50005)

Aaron: 是的，由单独的签名机来签名，然后放回消息中。 (reply to 50008)

Aaron: 钱包构造消息，发给签名机签名，然后拿到签名后把签名放入消息中，广播上链。

Aaron: https://docs.ton.org/mandarin/develop/dapps/cookbook 这里面多个语言的例子 (reply to 49999)

aier: 感谢，有大用👍

gavin: 一会儿我找下之前见到过 (reply to 50009)

wikig: 啊？  我记得如果用类库，如ton/ton之类的是可以做到签名然后再说。  但是tonconnectUI好像没有抽象出来签名函数？ (reply to 50005)

wikig: 我好像记得，是有方法可以直接发送已经打包的Cell数据上链的。  所以照理说应该，有方法可以单独只打包Cell然后签好名之后封好数据丢给别人发吧（？ (reply to 50019)

wikig: Tonkeeper的wallet v5的battery这种gas station 服务应该就得依赖这套用户签名，他们封到他们自己的交易里发出的逻辑？

wikig: 待签消息.......  我寻思（单纯是俺寻思之力），对这一部分内容打包序列化一下是不是可以作为原始消息（未签名毕竟签名是下一步）然后移交出去呢？ (reply to 50023)

wikig: 啊确实，看了一下上面🫠

wikig: 啊？我的理解，这个的诉求，不是应该，外部单独签好名，然后设法让另一个人把这个签好名的消息丢给rpc或者广播出去吗🫠 (reply to 50005)

Aaron: 感谢各位大佬，发送链上可以用SendBoc，把签名后的Boc发出去，目前主要是待签名消息的格式没有参考，不知道如何构建，还有签名后要把签名放在那个结构中，应该是cell里，cell的结构有点不太能搞定。

Hooray: 有人知道bot的description photo，我上传的gif为啥自己看是清晰的，别人看到就是被压缩的吗

wikig: 啊，原来是硬件钱包。那确实需要未签署的消息。然后再把签署好的boc打包走sendboc发出

Aaron: 感谢大佬，这个版本v3R2 (reply to 50036)

Aaron: 目前我门的签名机是在线的一台HSM 云主机，专门负责签名和私钥管理。 (reply to 50037)

Aaron: 第7行的 intMsg是什么？还有这里的待签名信息中不需要包含转账的from和to和amount。 (reply to 50042)

CN: let jettonMinterAddress = await jettonMinter.getJettonWalletAddress(new TonWeb.utils.Address(wallet.account.address))

Aaron: extMsg 省略号部分是构造转账消息的吗？form to amount等

CN: 大佬，这个错误是什么原因？

Aaron: int msg cell 中放的是转账的cell序列化之后的数据是吧。 (reply to 50049)

Aaron: 感谢哈，解决了这个卡脖子问题，有点思路了，我再查资料消化一下 (reply to 50051)

gavin: https://github.com/ton-org/ton/blob/master/src/wallets/signing/singer.ts#L12 (reply to 50015)

gavin: 你看下这个就知道了 ton core底层的实现

gavin: https://github.com/ton-org/ton-crypto/blob/master/src/primitives/nacl.ts#L34

x: 是不是说类似以太坊这种TOKEN

gavin: 你HSM 只要能用相同的加密算法, 然后你自己实现下signer 方法应该就行了

x: 是集合于一个合约上的，以一个合约来跟踪所有用户的 balance 之类的

m: 大家做什么应用

x: 但是 TON 则是每个用户都有相同代码的token合约，用户如果持有这个token，就相当于拥有一个独立的token合约？

gavin: 直接实现一个 SendArgsSignable 是最优的方案, 这样你很多代码都可以复用ton/core的 (reply to 50057)

gavin: 否则你需要自己撸一套底层东西

Aaron: 得消耗一下，还不太了解SendArgsSignable的内部细节，签名算法都是共用的还好，现在主要是不熟悉待签名消息如何构造，以及获得签名后，如何把签名放入消息中，然后发送到链上。 主要是因为 我门上链和签名分布在不同的机器上，各司其职，所以要拆开来，麻烦些。 (reply to 50061)

gavin: https://github.dev/ton-org/ton/blob/master/src/wallets/WalletContractV4.ts 你看下这里面的sendTransfer 的底层实现就一目了然了, 先构建相关合约的cell，然后签名，在经过TonClient的external send boc 到链上 (reply to 50064)

🐮: token的持有量   是不是可以自己在合约里放一个int值来保存就可以了

Aaron: 在看了，多谢哈！！！ (reply to 50065)

gavin: 官方的太乱了 (reply to 50069)

gavin: 一部分逻辑在@ton/core | @ton/ton 一部分又搞了一个Provider (blueprint)

gavin: 不过归根结底大部分都是调用的 wallet 的sendTransfer

maiya: 👍

Mike: 大佬你们gasfee怎么算的呀 (reply to 50051)

Mike: ton转账的时候是不是不校验余额是否足够呀

Mike: https://github.com/toncenter/tonweb/issues/124 用的这个文档一样的方法，好像确实是差很多呀

aier: 有大佬知道现在swap问题解决了吗？就是之前用v4钱包，如果to地址没用过，那么swap会失败的问题

aier: 现在w5是不是解决这个问题了

aier: 还有就是官方的tonweb是没来的及更新吗？我找来半天，没看见支持w5地址的文件

Heliosagent: async function handleRecharge(amount: number, userId: string) {     console.log(`Recharging amount: ${amount} for user: ${userId}`);     if (!tonConnectUI.value) {       console.error('TON Connect UI is not initialized');       return;     }     try {       let a = new TonWeb.boc.Cell();       a.bits.writeUint(0, 32);       a.bits.writeString(userId);       let payload = TonWeb.utils.bytesToBase64(await a.toBoc());        estimateNetworkFee(amount,payload)       const request = createSendTransactionRequest([           {             address: RECHARGE_ADDRESS,             amount: toNano(amount.toString()).toString(),             payload: payload,           }         ])        const result = await tonConnectUI.value.sendTransaction(request);       console.log('Recharge transaction sent:', result);       await updateBalance();       return result;     } catch (error) {       console.error('Error during recharge:', error);       throw error;     }   } 兄弟们该怎么解析payload 读取出userid

gavin: 关于W5 你可以看看这个哈 https://github.com/ton-org/ton/blob/master/src/wallets/v5r1/WalletContractV5R1.ts (reply to 50085)

gavin: 就是payload 你反着来一遍 loadUint(32) loadRefString啥的 试试 (reply to 50087)

Ginta 🦴: ton合约是不是不能像ETH那样预置多一点gas，然后没用完返回给用户

Mike: eth那个哪里会返回

Mike: ton能设置gas么？

aier: 所以大佬，以后tonweb还会维护吗？还是直接用@ton/ton 这个包？ (reply to 50088)

gavin: 哥别问我啊, 我又不是tonweb的人 我只是发现了这个, 当然我建议你用@ton/ton这个包 比较是官方的 (reply to 50093)

aier: web也是官方的，当时图方便大部分方法用的它。。要是不更新就麻烦了

Mike: 我也发现ton/ton这个的东西多

Mike: 这个时间怎么算的

cajh: 怎么预估一个消息需要多少gas呢

Mike: 主要是不知道这个怎么来的 (reply to 50101)

Mike: 好把

aier: LITE_SERVER_UNKNOWN: cannot apply external message to current state : Failed to unpack account state

aier: 有大佬遇上过这个错误吗？

aier: 我查是没有init地址？有参考代码和文档吗？

Mike: gas不够，会上链失败的把 (reply to 50100)

Mike: 现在我就用那个estimateFee获取了下gas，差距比较大

Mike: 就是做这个嘛😂

Mike: openmask.app 比如说我用这个去转账，全部转出的话，它的gas计算也不对，但是它最后能成功

gavin: 你说为啥ton 不能像evm那样实时扣gas呢, 是因为异步考虑到一致性不好处理账户余额么

Mike: 那比如说我要转账，我把所有的余额全部转出，转出的金额写多少呢

Mike: 因为还要扣gasfee，可以自动从总额里边支出么

Mike: 😂

Mike: 可以发个文档看看么

Mike: 不明白

gavin: https://docs.ton.org/develop/smart-contracts/messages#message-modes (reply to 50133)

gavin: 128 就是梭哈了 所有gas ton都带走

Mike: 要看看这个sdk怎么处理，现在是用的tonweb

gavin: 感觉理论上也是能实现啊, 就是搞个锁控制好账户余额状态吧 (reply to 50135)

gavin: 现在这样要预估简直反人类对开发者太不友好了🫣🫣🫣

Mike: gas不能准确计算的话，怎么带走所有呢

gavin: 你看中文的这个吧 一目了然

Mike: 嗯

Mike: 看这个能看出，再去看看sdk怎么调用,哎

Mike: 烦

Development: 你好，  我希望你一切都好。我有一項任務需要一些指導。我需要向錢包發送命令以轉移特定數量的代幣，為此，我需要錢包的地址。您能告訴我如何實現這個目標嗎？  預先感謝您的幫忙！

gavin: ok 明白了 (reply to 50149)

gavin: 你搞清楚这个库怎么用就大概清楚了 https://github.com/ton-org/ton (reply to 50149)

Mike: 是的，就是要看这个库才行

Ton: 哈喽，有个问题想问一下大家

Ton: 我看有滴miniapp点击分享可以直接吊起telegram的share

Ton: 这咋做到的

gavin: 这个很简单 就是一个url 拼一下 (reply to 50168)

Ton: 他能调起这个

Ton: 咋做的

gavin: https://t.me/share/url?url=https://t.me/catizenbot/gameapp

Ton: 我也想做 一直不回

gavin: 你点这个

gavin: 就明白了

Ton: 牛逼

Ton: 内容呢

Ton: 内容咋加

gavin: https://core.telegram.org/widgets/share

gavin: 文档自己看咯

Ton: 牛

Ton: 兄弟牛

Ranko: 3周前，我们在Telegram中发布了一项作为迷你应用程序的VPN服务，我们需要TON和Telegram开发人员社区的反馈。  到目前为止，机器人中有18,000人和2000多台服务器。我们需要反馈：  1.从中国连接时速度好吗？  2.开始时有什么限制吗？  3.我如何改进服务？  链接到Telegram Mini-App进行测试。

Mike: 这个确实是可以，刚刚把余额清0了😂 (reply to 50138)

Qubitcoin: 填 128 是把余额放到哪个字段了？ (reply to 50192)

Mike: 还是一样的操作

Mike: 我待会去试试部分转账看有没有问题

Qubitcoin: cell msg = begin_cell()     .store_uint(0x18, 6)     .store_slice(addr)     .store_coins(amount)     .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1 + 1)     .store_slice(message_body)   .end_cell();

Qubitcoin: 是把余额自动放到 amount 字段了吗？

Qubitcoin: 看下消息结构能看出来

Mike: 这个要去看源码

Mike: 部分转账也是全部，要定个规则才行

Qubitcoin: 在区块浏览器就能看到

Mike: 好吧

gavin: 别写代码了 牛回速归

2: 牛又走了

2: 继续打工

Руслан: Scum? (reply to 50227)

— 2024-08-24 —

Sr: 大佬们，用tonConnectUI sendTransaction 转账， tg显示 unable to verify transaction，应该如何解决呢？

carlbiotic: 有家人知道NotCoin的链上空投方案是什么吗

w: 大佬们，tonapi的/v2/message/decode 应该传入什么参数啊

w: https://tonapi.io//api-v2

w: "error": "unknown magic prefix"

w: base64编码了又报"error": "illegal base64 data at input byte 364"

Ton: Vue导入ton库报错有大佬知道咋解决吗

cj: 有啥ton的黑客松吗

cajh: ton上的黑客都没几个，玩啥黑客松

cajh: 😅

Chaincode: 我是黑客🙊

Mike: 你看到可以么 (reply to 50090)

飞行员舒克: 有没有接活的前端，可以走担保的

Hao: 我 (reply to 50300)

D: 求问，Tact 里面能验证 ECDSA 签名吗？我看到只有验证 Ed25519 签名的方法？

BCtwelve: 你好

BCtwelve: 哪个大佬能解决哈吗 代码直接clone的仓库

cj: dm (reply to 50300)

cj: 你这是部署时候报错是吧？选择网络的时候？ (reply to 50306)

BCtwelve: 为啥我导进去的记住词生成的地址跟我钱包地址不一样啊

BCtwelve: 有哪位哥知道

Volunteer🇻: 只输入address和amount，其他的全删除 (reply to 50257)

Volunteer🇻: 我这样能跑，但是只要加payload，不管怎么样都会 unable to verify transaction

Volunteer🇻: 吐了。。

— 2024-08-25 —

Mike: 你这个描述能放多少个字 (reply to 50306)

Alfred: 可以聊聊 (reply to 50300)

User<6666775889>: 大家好，想开发ton gamefi 需要学习什么？我打算10月份买台mac mini做开发

gavin: jetton (reply to 50344)

Chi: 官方Doc写得挺好的

2: 学俄语 (reply to 50344)

2: 乌拉

11: 话说Ton有办法同一份代码部署到不同的地址吗

11: 感谢大佬，有提前计算出地址的办法嘛 (reply to 50378)

11: 感谢么么哒

Ton: 这个是咋做的啊

Ton: 文字加超链接

w: 发送相同seqno会覆盖tx吗

wiwi: ton 地址有各種不同的格式，通常中間會一樣就前後不同。 就行為不一樣而已實際上都是互通的  https://docs.ton.org/develop/dapps/cookbook#what-flags-are-there-in-user-friendly-addresses (reply to 50313)

wiwi: 檢查你網路狀態，看起來是 http 請求失敗 (reply to 50305)

Giessen: 有人清楚为什么我自己部署的nft collection在getgem上不显示吗

Giessen: EQBtzttPz3tR3rWscXOAi80JKNHhvD4MhAgfRs2rch0UWwvx

Giessen: so if i want my collection shows up in getgems i have to create the collection in getgems's website?

one: 杜罗夫还有救吗😂

Teiv 🦴: 亲爱的开发者/项目团队，  我正在开发 DeChess，一个在 Telegram 上的国际象棋平台。我希望与其他 Telegram MiniApp 进行合作。如果您的项目对合作感兴趣，请给我发私信。  期待与您的联系！

Hưng: 嗨亲爱的，我怎样才能将 star 转移到 Ton 或 usdt？

TON: 应该没问题 (reply to 50426)

Ton: 这种频道里超链接文字还有特效怎么弄的

Alfred: 右击文本 -> Formatting -> spoiler 示例

Ton: 谢谢哥 (reply to 50466)

— 2024-08-26 —

adoge: 想找技术做一个trading bot, 能阻止sandwich attack等功能, 是否有志同道合的技术大拿愿意一起

Alfred: Ton 上没这种攻击吧

Ton: 有的

Ton: 比较复杂

Bill: 阻止 为什么要阻止？

Alfred: 执行时的状态在执行前都不确定，顺序也不确定，如何实现的 sandwich attack，我倒是有点好奇

Bill: 我看到的都是事后在各种地方搬砖

Bill: 因为TON上无法确定性的抢先交易

gavin: 是有这种交易发生

Bill: 请教如何抢先交易呢？？有这种可能吗

gavin: 我也看到过,但是我 觉得应该是随机的那种, 不是每次都能成功

Bill: 随机？？ 赌 节点拥堵？ 走 空闲节点 超速？

Ton: 上次有听别人说过

Ton: 是可以固定成功的

Ton: 分片那里 具体我也不懂

Mike: 不懂哟

gavin: 除非validator大家一起作弊？

aier: 大佬们，交易fee有指定的字段吗？我知道链上费用不固定，但是能不能必定小于某个值，要不然不好定量啊

Mike: 同问 (reply to 50498)

aier: 合约我知道，ton转账如何制约？

Mike: 是的，他有限制么

aier: 也就是写合约里面去执行。。。难搞哦，只能走那个估算了，就是怕特殊情况，估算坏了就g了

aier: 前几天ethgas暴涨的时候我也是这么想的

aier: 然后就亏成狗了

Mike: 估算那个差距有点大 (reply to 50510)

Mike: 我也不知道咋定义来着

Mike: 大佬们有好的方案么，就那最简单的ton转账来说

aier: 没有，我现在只有走估算。。。同求

Mike: 直接转的话，比如我有1ton，我现在转0.999，剩下的可能不够gasfee，会失败么 (reply to 50521)

gavin: 你这个可以转成功 (reply to 50523)

Mike: sendmode用128那个？

gavin: transfer 的时候填的是总金额, fee 是从 总金额里面扣

Mike: 看来默认的模式就可以呀

Mike: 嗯

lemon: 各位大佬  workerchain 和 masterchain 啥区别

Howard: https://docs.ton.org/develop/blockchain/shards#masterchain (reply to 50531)

muho: ，  我们正在开发一个项目，一个在 Telegram 上的web3电商项目。我希望与其他 ton技术进行合作。如果您的项目对合作感兴趣，请给我发私信。  期待与您的联系！

allen: 大佬们请教个问题，A 支付给 B ton 时，能否在发生交易前预估 B 可以收到多少ton

allen: 没有接口 可以获取到 预估 可以收到的费用 或 扣除的费用是吗？ (reply to 50539)

allen: 我看到过这个接口，不是很明白，这个接口预估的是交易发送方产生的费用，还是其他什么？ (reply to 50541)

aier: 有大佬知道咋看一个交易是否成功执行完了不？

aier: getTransactions   接口返回 "ok"值为true?

aier: 有大佬知道不？还有那个logical time 感觉好抽象，因为我一般只有hash

aier: 为啥还需要address + logical time + hash才能锁定一笔交易？

wikig: 电商呀，具体的支付方案有考虑过吗🥸 (reply to 50535)

Mike: 这个hash是要交易hash (reply to 50556)

aier: 目前一头雾水，我看之前有人问过，确认交易是否成功要查执行的链条。。。

aier: 只能说不愧是异步交易，真方便

wikig: 逻辑上是的吧（？  我的理解是因为下一步的操作状态在发生之前都不知道（ (reply to 50560)

Mike: 是的呀

aier: 所以很不方便。。。正常人不回去研究这个，不如最后完成后更新最初部分的状态

aier: 要不然跟个链表的啥x样，有多长查多长

aier: 搞个循环链表记录下状态不行吗

Mike: 都不知道哪笔是哪笔

aier: 也不一定是坏事，好像可以按照这个搞攻击，整交易所

aier: 交易路径上搞部分回退交易，部分成交交易，交易所如果检查不到位好像就能搞搞事情

wikig: 之前考虑过，但是.....好像走不通。 (reply to 50571)

wikig: 因为要求你发送内容的接收方地址做出对应的行为。如把你转过去的钱转到别的地方。  不然的话，你同笔交易分叉的别的子交易失败了就失败了不影响。

lemon: 有大佬能解释一下这个么

Giessen: kQDKz-qAT4W0yXQZo3kJ3nG1Ri9PjbIVFJP_R67CdgD7RLhZ这种和EQDXCtqevkvtl_4CvwrCzxt4t-Xy4NilWP4ZWMAMgPuhFU1y这种格式的地址区别是什么

Mike: 嗯

Mike: 是呀

lemon: ton jetton架构 这个具体在哪看?

Giessen: https://testnet.tonviewer.com/kQDKz-qAT4W0yXQZo3kJ3nG1Ri9PjbIVFJP_R67CdgD7RLhZ?section=method 为什么这个被识别为nft collection接口方法那里却没有get_collection_data出现

Giessen: 但是手动输入却又可以 这是tonviewer的问题吗

Chi: A是你的TON钱包地址，B是你的Jetton钱包地址，C是收钱的Jetton钱包地址 (reply to 50577)

lemon: 大佬这个介绍的文档在哪看呢?

Chi: TON官方博客里详细介绍了Jetton合约的工作流程：https://blog.ton.org/how-to-shard-your-ton-smart-contract-and-why-studying-the-anatomy-of-tons-jettons

aier: 不一定需要失败，部分成功，部分卡在判断中应该就行 (reply to 50573)

lemon: 感谢 (reply to 50592)

aier: 得想办法在合约中做手脚，让交易卡时间

wikig: 可是交易所现在充币逻辑好像都是。  根据payload写个memo进去，然后做转账行为。  那么他只用判断他收款那笔子交易带着memo就算充值成功。 (reply to 50593)

wikig: 如果是notcoin之类的jetton充值逻辑的话，也是memo但是在那个，jetton transfer的forward payload里面好像？

aier: 有点烧脑，不过好像是有漏洞可钻，算了有空在研究

User<6301135112>: 有转账状态，看看有没有errorCode

H: https://tonscan.org/tx/OQ4joFK8Bnr1M591RNM9wlrYzUdVXtyyyym6HDBcZlY=

H: 这笔交易的高度怎么查

aier: 有大佬知道，ton上jetton账号能移除吗？

aier: 明白了，感谢

DaYuan: 有大佬知道，TMA 是否有本地持久化存儲的方式嗎？ 希望可以改善載入速度

Y: 崩了

Y: 又让我回想起了 之前打铭文的时候,, 崩了N次,,

Yang: 16 條分片  https://tonalytica.redoubt.online/public/dashboards/zUxa8vz67SzLZqvBIcze2tYuxFkDhSquSTKjNVS1

gavin: 这个图表很漂亮

Yang: 附上連結了，歡迎取用 (reply to 50632)

0xluck: 佬们,有没有将合约里的代币转给其他地址的例子

c: 太漂亮了 这个图 (reply to 50629)

Ton: 大哥们，那个share链接如何在miniapp中直接调用啊

wikig: 你直接window.open不就好了 (reply to 50643)

Ton: 哦？可以吗

Ton: 我试试

Ton: 他直接打开好像不对啊 (reply to 50647)

wikig: 如果是移动端 是一样的 (reply to 50651)

wikig: pc的话 没试过 应该会直接打开一个外部url

wikig: 所以可以考虑做端判别 然后pc用location.herf

Ton: 牛

bili: 你好  有管理人员在吗

bili: 我在八点钟的时候 在ston.fi发起了一笔$redo交换ton的交易  到现在都没有到账 我的$redo和ton都没有了

bili: I initiated a transaction of exchanging $redo for ton on ston.fi at eight o'clock, but it has not arrived yet. My $redo and ton are gone. I hope to get my $redo back. I don't. Transaction done, this is my address UQAjBPT4ngnzzZjielzkbPmYmDpXOU5SF9JutgoCme4OJPKC

bili: The transaction time has exceeded 2 hours, I want to get my $redo back

aaaaaa: 您好，交易显示这种情况如何操作

w: 卡死了 (reply to 50663)

Chi: 好像TON已经到账了？https://tonviewer.com/transaction/51a260e19eb0111e69c51e013037362704fde622a836692ffccd6b2d5aa6200c (reply to 50666)

w: 话说是合约代码层面怎样确保串行执行的呀，遇到这种小场面就卡死了是什么原因有大佬知道吗

w: 卡死的合约突然就处理了大量tx，人肉重启了嘛

Chi: 貌似是比较慢现在

x: 不是用了分片技术吗，还能这么卡

— 2024-08-27 —

H: workchain API怎么获取这个的最新高度

H: 哦，明白了，多谢

Na: 大家好,我这里设置了返回的url 但是跳到钱包就不自己跳回来了.请问下是什么情况啊 ?

aier: 😂账号的jetton地址真的没办法取消吗？我得搞好多某个合约的地址，要是事后能取消是笔收入

aier: 啥都搞，啥有钱搞啥

gavin: 就当燃烧掉了吧😋

aier: 行吧，唉

H: 这两个状态不同是啥意思

User<7405374332>: I have checked your wallet but transaction have already finished ton token have been deposited to your wallet (reply to 50666)

Rex: 大佬们 ton的助记词表基于哪个？

Chi: 应该是BIP39的2048个词表：https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt (reply to 50761)

Rex: 不对的·我试了生成的助记词导入不了

Chi: 导入不了啥意思

Rex: 我生成的助记词 在tonkeeper中导入 提示助记词错误

Chi: 这是ton-crypto的源码词表，你看你单词都在里面吗：https://github.com/ton-core/ton-crypto/blob/master/src/mnemonic/wordlist.ts

Rex: 按理说不会啊·我直接复制的 (reply to 50768)

Rex: 我逐个检查下

Rex: 谢谢 我核对下 (reply to 50769)

Rex: 确实和BIP39不一样

Chi: TON这个不是也有吗

Rex: 还是导入不了·我再研究下·

Rex: firm apology beach comic banner now minimum useful sand inch aunt fuel script output various mad spawn visa film minimum employ else direct bid

Rex: 这些都有导入钱包就是不行 0 0

Hao: 大佬们，请教一下，react一般是通过哪个库去调用智能合约呀，有没有demo参考一下

gavin: ton connect 官方文档有很多例子 (reply to 50783)

Hao: 好的，感谢🙏 (reply to 50784)

Chi: 可能是TonKeeper有什么规则，直接用代码生成地址是可以的  import { mnemonicToWalletKey } from "ton-crypto"; import { WalletContractV4 } from "@ton/ton";  async function main() {   // open wallet v4 (notice the correct wallet version here)   const mnemonic = "firm apology beach comic banner now minimum useful sand inch aunt fuel script output various mad spawn visa film minimum employ else direct bid"; // your 24 secret words (replace ... with the rest of the words)   const key = await mnemonicToWalletKey(mnemonic.split(" "));   const wallet = WalletContractV4.create({ publicKey: key.publicKey, workchain: 0 });    // print wallet address   console.log(wallet.address.toString({ testOnly: true })); }  main(); (reply to 50781)

Chi: 我知道了，有个助记词检查过不了  import { mnemonicToWalletKey } from "ton-crypto"; import { WalletContractV4 } from "@ton/ton"; import * as tonWebMnemonic from 'tonweb-mnemonic';  async function main() {   const mnemonic = "firm apology beach comic banner now minimum useful sand inch aunt fuel script output various mad spawn visa film minimum employ else direct bid"; // your 24 secret words (replace ... with the rest of the words)   const isValid = await tonWebMnemonic.validateMnemonic(mnemonic.split(" "));   console.log(isValid); }  main(); (reply to 50782)

Chi: 你如果想自己生成助记词，这个函数要能返回True， 或者直接调用 tonWebMnemonic.generateMnemonic(); 比如MyTonWallet钱包就是这么干的： https://github.com/mytonwalletorg/mytonwallet/blob/764633a37ad5ea80afc1f92a54eda2f762dee08a/src/api/blockchains/ton/auth.ts#L26C10-L26C44

Rex: 是的·我看tonkeeper 里面的单词表没有问题·看来是检查了单词表 限制了一些单词 (reply to 50792)

Chi: tonWebMnemonic.generateMnemnic()的原理也是试不同的助记词直到检查通过为止： https://github.com/toncenter/tonweb-mnemonic/blob/master/src/functions/generate-mnemonic.ts

P: Okay (reply to 50799)

Over: 请问有人知道部署ton合约时报错地址不合理是为什么吗 Connected to wallet at address: EQDg5B5UWbSyC31m5sWwBlVxVdHbDaL1jB85IGyzfGZ1-YeA Error: Invalid address. Got EQDg5B5UWbSyC31m5sWwBlVxVdHbDaL1jB85IGyzfGZ1-YeA     at BitBuilder.writeAddress (/Users/pete/ton/func_course/my_first_contract/node_modules/@ton/core/dist/boc/BitBuilder.js:256:15)     at Builder.storeAddress (/Users/pete/ton/func_course/my_first_contract/node_modules/@ton/core/dist/boc/Builder.js:237:20)     at mainContractConfigToCell (/Users/pete/ton/func_course/my_first_contract/wrappers/MainContract.ts:21:6)     at Function.createFromConfig (/Users/pete/ton/func_course/my_first_contract/wrappers/MainContract.ts:37:18)     at Object.run (/Users/pete/ton/func_course/my_first_contract/scripts/deploy.ts:7:35)     at async run (/Users/pete/ton/func_course/my_first_contract/node_modules/@ton/blueprint/dist/cli/run.js:20:5)     at async main (/Users/pete/ton/func_course/my_first_contract/node_modules/@ton/blueprint/dist/cli/cli.js:100:5)  在初始化时传了我的钱包地址作为初始参数

H: 怎么判断转账是否成功了。

wikig: 走tonapi/toncenter查查就好啦~ (reply to 50808)

wikig: （其实这堆常见问题是不是可以直接整合各FAQ，好像来来回回主要都是那几个....

Cat Boss: 有个疑问，TON的钱包是不是只要存储有coin，就会产生“租金” 这个费用？

H: 查询接受地址的transaction，里面有对应的交易记录，就说明转账成功了？ (reply to 50809)

wikig: 笑死，会被ban的吧😆  但是真的，可以整合个常规FAQ然后做个检索了我觉得

wikig: 建议再对拿到的数据做一下状态判别~ (reply to 50814)

Cat Boss: 那就说，咱们每个人开通了钱包，存了TON币进去，就会有费用了。。是吧？ (reply to 50816)

Cat Boss: 这个定价一般是多少呢？ (reply to 50820)

gavin: 舍生取义 (reply to 50815)

gavin: 有个 计算 fee的文档写的很详细, 你去搜一下就知道了 (reply to 50821)

yan: 还有这个说法啊 (reply to 50819)

Cat Boss: 好咧，多谢。 (reply to 50823)

Chi: https://docs.ton.org/develop/smart-contracts/fees

Cat Boss: 收到，多谢啦！这看来TON的钱包还是不能随便搞，就跟银行似的，还需要办卡的年费😂 (reply to 50826)

Chi: Saving 1 MB of data for one year on TON will cost you 6.01 TON. Note that you don't usually need to store big amounts of data on-chain. Consider TON Storage if you need decentralized storage.

gavin: 实际上存1MB 比 EVM便宜

H: 哪个接口可以查询状态 (reply to 50817)

H: 这个不是查询地址的交易记录么。 (reply to 50835)

H: 这个么？

x: jetton

x: jetton transfer 中这个destinationAddress 是不是目标的 jettonWalletAddress

H: 我给某个地址转账，我想知道这笔转账成功了没 (reply to 50839)

wikig: 我有一计，咱可以维护一个FAQ topic在 https://tonresear.ch/  然后后续常规问题就可以直接share这玩意儿。 (reply to 50822)

H: 你刚才说查询地址的tx列表就可以，然后另外一个同学说再核对一下状态 (reply to 50843)

gavin: 可以啊 (reply to 50844)

gavin: 就是让你 先查tx列表 在核对状态 (reply to 50845)

H: 核对状态怎么核对。

Rex: 我试了把代码弄下来自己编译写了判断一样的导入不了 我回头再研究下 (reply to 50796)

gavin: 是不是有空格？ 我之前发现单词多个空格就完全不一样了 (reply to 50852)

Howard: 是的 要注意自己的字節內容 (reply to 50853)

gavin: 你这个头像真吓人 (reply to 50854)

Rex: 我试下 (reply to 50853)

x: 我怎么获得自己的指定 Jetton的 Jetton Wallet？

Howard: 輸入 接收者的 Wallet address, 就會生成該地址的 Jetton Wallet Address (reply to 50857)

Chi: 我试了可以啊，导入钱包成功了  import * as tonWebMnemonic from 'tonweb-mnemonic';  async function main() {   const mnemonic = await tonWebMnemonic.generateMnemonic();   console.log(mnemonic); }  main(); (reply to 50852)

Rex: 我改成C#语言实现 还是不对·

Chi: 可以算出来，需要owner address， jetton master address，还有jetton wallet code: https://github.com/ton-blockchain/token-contract/blob/main/ft/jetton-utils.fc#L27 (reply to 50857)

Rex: 生成助记词

Rex: 现在生成的助记词导入到其他钱包报错

wikig: TON Dev Chat (中文) 常见问题汇总  https://tonresear.ch/t/30278  Powered by @tonresear_ch (forwarded from TON Research)

gavin: 哈哈哈 我去水个帖子 (reply to 50868)

wikig: 嘿嘿，欢迎水帖更新

Over: 请问可以解释下吗，是因为我这个地址是否bounceable所以报 Invalid address吗 (reply to 50807)

Yang: 大家蓋樓蓋起來 (reply to 50868)

User<7148949927>: 这个toncenter好像说是返回hex格式吧，我看到返回的是base64 啊

Rex: 代码太长了·我缩放了一下 (reply to 50875)

User<7148949927>: 返回的却不是hex格式，有哪位大佬用过不这个接口

gavin: https://tonresear.ch/t/ton-dev-chat/30278/2 给你问题记录在案了 (reply to 50857)

Rex: 能看清了吧

carl: 大佬们 昨天到今天通过 sendBocReturnHash 广播交易经常出现 广播返回成功 但是无法上链的问题。 是有什么升级吗

Rex: 不行了·眼花了·晚点再搞

User<6301135112>: 描述里面，检查有无异常code (reply to 50849)

Ignacia: CBC a

H: 多谢 (reply to 50889)

User<6301135112>: 就像这种

Over: Address.parse()是对的，现在可以部署了。 address()好像是ton-core里的，Address.parse()是@ton/core里的，你知道两个库的区别吗 (reply to 50876)

Over: 是不是之前用ton-core现在都用@ton/core了

Over: 明白了，谢谢👍

x: 有没有示例代码

Rex: 全部无效· (reply to 50904)

Rex: 改好了 验证助记词的地方错了·

x: 这个jetton

x: transfer 为什么会报错啊

Howard: Exit Code: 709, 是不是 Gas 給太少了？ Toncoin 給多一點試試  https://t.me/tondev_eng/91768 (reply to 50910)

gavin: 你给的ton 太少了 (reply to 50911)

Rex: 在验证之前需要对助记词做一个HMAC

Rex: 之前的代码传入了一个空密码 所以生成的hash是错的

gavin: 牛哇也算是手挫了基础库了

gavin: 开源出来吧

Rex: 代码都贴上面了

Rex: 今天才开始做 做完开源

Chi: 我在testnet上测试发Jetton 0.05TON 也够了呀 (reply to 50912)

Rex: 嗯 之前 这个方法就是做HMAC的 多传了一个空字符串的密码

gavin: 注意下 forward_ton_amount 的作用 (reply to 50926)

Chi: 哦对，我一般都是0.05TON的gas 0.01TON的forward_ton_amount

Rex: 恩 是的 其实用什么方式生成无所谓主要是这个验证就可以了 (reply to 50929)

wikig: 提问，有无用@telegram-apps/sdk-react这个库的哥们。

Walker: https://docs.ton.tg/develop/dapps/telegram-apps/

Walker: 502了。

Leo: replace .tg with .org

Walker: THX

x: 我如何通过钱包地址检查目标钱包合约是否是一个有效的地址？

wikig: 把交易模拟一遍或者说直接用tonweb的address库校验一下？  前者可以知道能不能发过去，后者只能知道符不符合格式 (reply to 50959)

Rex: 应该有API吧

Rex: 翻一下官方那些钱包的源代码

lin: node ton包 Address 的类的静态方法可以检测是否是一个有效地址

x: 谢谢，如果地址无效好像会报错

David: 交易模拟一般用什么工具呀？ (reply to 50960)

H: 我怎么在封装中初始化字典？    const dictKey = sha256_sync("4") // console.log("hash res1",dictKey); //  const collectionContentDict =  Dictionary.empty(); // const collectionContentDict =  Dictionary.empty(Dictionary.Keys.BigUint(256), Dictionary.Values.Cell()); // const collectionContentDict =  Dictionary.empty(Dictionary.Keys.Buffer(32), Dictionary.Values.Cell())     // .set( dictKey , beginCell().storeUint(1024, 256).endCell())   //   .set(  BigInt('0x' + dictKey.toString('hex')) , beginCell().storeUint(1024, 256).endCell())   //  collectionContentDict.set( dictKey , beginCell().storeUint(0, 256).endCell())     //    collectionContentDict.set( BigInt('0x' + sha256_sync("1").toString('hex')) , beginCell().storeUint(0, 256).endCell()) //  const collectionContentDict =  Dictionary.empty(Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256));  // const collectionContentDict =  ( Dictionary.Keys.BigUint(256), Dictionary.Values.Cell()) ;  //  const collectionContentDict =  Dictionary.empty() ;  //BigInt('0x' + sha256_sync(s).toString('hex'))  BigInt(0)  //  //   key_value_content: beginCell().endCell() //      const collectionContentDict =  Dictionary.empty<Buffer, Cell>()  let collectionContentDict =Dictionary.empty(Dictionary.Keys.Buffer(32), Dictionary.Values.Cell())  collectionContentDict.set(dictKey , beginCell().storeUint(1024, 256).endCell())    // const collectionContentDict = Dictionary.empty<Buffer, Cell>(Dictionary.Keys.Buffer(32));  export function nftCollectionConfigToCell(config: NftCollectionConfig): Cell {     return beginCell()         .storeAddress(config.ownerAddress)         .storeUint(config.nextItemIndex, 64)         .storeRef(config.collectionContent)         .storeRef(config.nftItemCode)    .storeRef(             beginCell()                 .storeUint(config.royaltyParams.royaltyFactor, 16)                 .storeUint(config.royaltyParams.royaltyBase, 16)                 .storeAddress(config.royaltyParams.royaltyAddress)                 .endCell() )                  .storeDict(collectionContentDict)                 //  .storeDict(config.key_value_content,Dictionary.Keys.BigInt(256),Dictionary.Values.Cell())                 //   .storeDict( config.key_value_content ,Dictionary.Keys.Buffer(32) ,Dictionary.Values.Cell())                //  .storeDict(config.key_value_content, Dictionary.Keys.Buffer(32) , Dictionary.Values.Cell())               //    .storeDict(Dictionary.empty<Buffer, Cell>(), Dictionary.Keys.Buffer(32) , Dictionary.Values.Cell())                 //   .storeDict(Dictionary.empty<Buffer, Cell>() )                //    .storeDict(null)                 .endCell(); //, Dictionary.Keys.BigInt(256) , Dictionary.Values.Cell( ) Dictionary.Keys.Buffer(255), Dictionary.Values.Cell( )  storeDictDirect //.storeRef(config.key_value_content)  //.storeDict(config.key_value_content , Dictionary.Keys.BigInt(256) , Dictionary.Values.Cell( ))         //   .storeDict(Dictionary< Dictionary.Keys.BigInt(256) , Dictionary.Values.Cell() > )        //  //      .storeRef(config.key_value_content) beginCell().endCell()      //       }

Aaron: 请教大佬，币安充TON要1个区块确认，OKX要50个区块确认，请问如何判断区块确认次数

Aaron: TON是否有1个区块确认就是安全的？

柯里昂: 你说的转币吧 (reply to 50995)

Aaron: 就是如何确保充值是安全的不可逆的。 (reply to 50997)

User<6301135112>: master高度

Hassan: 🪂🪂🪂🪂🪂 🙏NEW ТОN АIRDRОР🙏 🙏Claim your 50-1000 ТОN аirdrор from The Оpеn Lеаguе!🙏 🌐Нurrу up tо gеt frее tоn соins🌐 ➡️@TON_PRIZE_AUTOBOT

west: 大家都这样吗现在，转个ton这么久还没成功

west: 最后还失败了

west: 好像不止，昨天晚上就这样了

shi: TON炸了

shi: 老板被抓，服务器没人续费了

shi: 已经不出块了

— 2024-08-28 —

west: 币都得归法国

west: ton conncet brigde，谁会搭建

gavin: 恢复了

Steven: TON 是不是挂了

gavin: 是的 (reply to 51053)

gavin: 挂了至少2小时

Steven: 看浏览器都不走了

Steven: 官方也没出公告？

gavin: 项目方还没起床

Steven: cz 共识

west: 恢复个毛

c: 用amman启动本地节点 ，部署合约一直卡这 ，有人出现过这总问题嘛

gavin: solana 建议用 anchor框架哈 (reply to 51065)

c: 发错地方了。。。

unknow: 哪儿的公告？

unknow: 区块链的服务器节点不是分布式的吗？，这就不出块了？

gavin: Mainnet validator  If your validator has index < 100 please be prepared to urgent action at 04:00 UTC (Wed Aug 28 2024 04:00:00 GMT+0000). Please set alarm.   P.S. Due to high recent activity (>20m transactions in recent 2 days), garbage collection overloaded many of validators for enough time for them to lost consensus with each other. To restore consensus back, validators need to be restarted at about the same time with specific flags. (forwarded from TON Status)

gavin: 公告可以看这里哈 (reply to 51072)

unknow: 好的谢谢，我看看哈

gavin: 节点扛不住, 共识崩了呗 (reply to 51073)

gavin: 鸡蛋放在不同的篮子里, 篮子在一辆车里面

gavin: 翻车了

unknow: 呃，很奇怪

unknow: 那这分布式，分了个毛啊。。。。

gavin: 习惯就好

unknow: 😐

unknow: 还有两个小时才能恢复

Chi: 主网还没恢复？

Ginta 🦴: 这个在哪看的 (reply to 51088)

unknow: 上面那一大坨英文公告说的

unknow: action at 04:00 UTC

Ginta 🦴: 按理来说只要有节点能处理就能出块

Aaron: 这中心化也太明显了，验证节点不能都在俄罗斯吧 (reply to 51061)

unknow: 说不定服务器都在同一个机房里😂

Aaron: 是呀，就没有个人或者小团队运行节点？ (reply to 51096)

unknow: 管理员一上班，看到机房控制台闪的像圣诞树一样

unknow: 厚礼蟹

cajh: 😅

maiya: 把测试服当主网得了😂

3kingdoms: 中心化得可怕😂

jensen: 用tonConnectUI sendTransaction 转账， Wallet显示 unable to verify transaction是什么原因导致的大佬们

ZimHook: ...

ZimHook: ton主网都挂了

ZimHook: 等恢复吧

3kingdoms: 现在链挂了，不出块

jensen: 这样嘛。好吧，谢谢大佬们！

enpitsulin: 还好昨天把钱包奖励里的都转到币安了不然感觉怕怕的

jensen: Wallet怎么切到测试网进行测试呢

Ginta 🦴: 其实没区别

Ginta 🦴: 只要能恢复转不转都行

enpitsulin: 被一只🐶搞挂了，太出圈也不行

User<6301135112>: 隔壁sol之前不也老是挂

allen: 大神们，有知道怎么从 telegram wallet 转账的吗（a钱包给b钱包转ton）？通过 程序操作（例如 go、php 后端程序）

Rex: 网上有源码

allen: 麻烦能给一下源码地址吗？万分感谢 (reply to 51128)

Over: 切到设置tab，连点最下面图标5下 (reply to 51122)

allen: 因为 telegram wallet 无法导出助记词，我找到的现有的go demo 都是通过助记词来交易的

jensen: 感谢大神 (reply to 51130)

Rex: https://github.com/tonkeeper/tongo (reply to 51129)

allen: 感谢你的回复。我看这个里面的demo也是通过 助记词 来操作的，你说的不需要助记词交易的是哪个examples (reply to 51133)

Rex: 助记词导入进去就是私钥了啊·

jay: 大家有遇到 tonapi 查询 events 丢数据的问题么？

Rex: 你直接转换了 不要助记词导入的部分就好了·

jay: tonapi 查询 events 经常遇到丢数据，很奇怪。

allen: 助记词导入是为了获取到指定钱包，如果不要助记词怎么获取到指定钱包 (reply to 51140)

Rex: 你是不是搞错了一个概念啊

Rex: 私钥和私钥只是用来签名的

Rex: 你指的钱包是什么？

Rex: USDT？

allen: TON (reply to 51143)

Rex: 那就看TON转账的代码就好

allen: 我大概知道你的意思了，我去尝试下，非常感谢 (reply to 51148)

Rex: 不客气

cccc: 家人们，请问下这个操作码是怎么生成的，evm 是直接hash 方法名参数这些就行了，ton 里面是根据啥规则来生成这个操作码的

gavin: 随性

gavin: 没有严格统一的规定

cccc: 我试着hash 了一下，hash 出来的的值对不上，看了下文档也没说明是咋生成的，这个拍脑袋自定义一个值么🤣

cccc: 这么不靠谱的么，你定义0x1 0x2 我能理解自定义的，但是你像模像样搞个0x5fcc3d14， 总感觉是这个方法 encode 之后产生的一个值

gavin: 是有一套算法能算

gavin: 但是没有严格要求

gavin: 你用01 02也行

cccc: 有算法就行，有知道这个算法么，这样比较统一点，直接op:: 方法名 来标记就行

cccc: 自定义总感觉怪怪的

gavin: https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md

gavin: 你看这个就行

gavin: 严格意义上讲没有 op:: 方法名的概念 就是一个 操作码 (reply to 51162)

cccc: 嗯，就是定义一个别名，读代码的时候好理解一点

cccc: 最终还是跟opcode 比较

gavin: 是的 没错

IIIllll: 大腿子们, 这个 flag 判断有存在的必要吗?

gavin: 当然 (reply to 51173)

gavin: 这个就是防御性编程

one: Ton怎么一直跌啊

Chi: 这个注释写错了把， flags & 1 检查的是不是bounced消息，不是外部消息 (reply to 51172)

Chi: 4位flags分别是 0, ihr_disabed, bounce, bounced:  https://docs.ton.org/develop/smart-contracts/messages

Cat Boss: 求问一下，频道里的图文消息是如何发送的？ 类似图片这样

gavin: 是的 看样子是注释错了 (reply to 51179)

gavin: 那这个判断还是很有必要的, 否则会处理错 bounced

gavin: 用代码 (reply to 51181)

gavin: 看着像是 markdown

Chi: 外部消息应该都到不了这个函数，因为去了recv_external 处理

Cat Boss: 是直接写成markdown形式，在聊天框里发送吗？ 或者需要调用什么api来实现？ (reply to 51185)

okx钱包真好用: 请问网络暂停什么时候恢复

Play: 这个  https://core.telegram.org/bots/api#sendphoto (reply to 51188)

Yang: TON Blockchain is currently experiencing a disruption in block production. The issue is occurring due to the abnormal load currently on TON. Several validators are unable to clean the database of old transactions, which has led to losing the consensus.  TON Core has issued a call to validators to restart at 4am UTC today. If enough validators will restart, consensus will be reestablished.  Stay tuned for more updates here. Rest assured your transactions will be made, no cryptocurrency assets will be lost due to the issue. (forwarded from TON Community)

okx钱包真好用: utc4点，不就是北京时间12点吗，希望快点恢复 (reply to 51192)

Chi: 按道理现在应该已经重启了

okx钱包真好用: 我就是疑问这一点。

okx钱包真好用: 如果有足够多的验证者重启，共识将重新建立。只能等待了。

Cat Boss: 谢谢，我去瞅瞅。👍 (reply to 51191)

jay: sendPhoto (reply to 51181)

Chi: Mainnet validators with index <100  So far not enough validators restarted their nodes with correct flags. If you didn't restarted your nodes with new flags yet, please do it ASAP. (forwarded from TON Status)

Yang: 昨天似乎有聽到有人以為節點在俄羅斯居多，勘誤一下，其實節點多半在歐洲喔！  https://ton.org/en/validators

fun🦴: 所以这是中心化还是去中心化。

i_n_t_e_r_n_a_t_i_o_n_a_l: 不管是什麼，很明顯，我們人類需要努力實現完全去中心化。 (reply to 51204)

www: 不出块 确实问题大

www: 这刚被抓 就整这出

www: 很难让人放心

wiwi: 重要嗎？ (reply to 51204)

www: 不重要吗？

Mr.A: 网络是不是出问题了

Mr.A: 我看币安和ok把充值/提币停了

Yang: https://dton.io/

fun🦴: 是不是好了。我看scan

Yang: 這裡不是就有圖片證明出塊了 (reply to 51217)

Ginta 🦴: 我钱包互转都成功了..

Ginta 🦴: 当然可以了

gavin: 已经是出块了

peilipu: 现在浏览器看着是正常的吧

IIIllll: 大腿够硬, 我去啃下文档 (reply to 51180)

wikig: 话说有无昨天为什么宕的公告之类的。  还是说刚好是dogs上binance又开放上链提现导致的大规模脸上操作行为？

gavin: @tonstatus 这个账号里面有 (reply to 51231)

gavin: 宕机很正常, 很多链都是宕机了才起飞 (reply to 51231)

Chi: Ton Community里写了点

Chi: TON Blockchain is currently experiencing a disruption in block production. The issue is occurring due to the abnormal load currently on TON. Several validators are unable to clean the database of old transactions, which has led to losing the consensus.  TON Core has issued a call to validators to restart at 4am UTC today. If enough validators will restart, consensus will be reestablished.  Stay tuned for more updates here. Rest assured your transactions will be made, no cryptocurrency assets will be lost due to the issue. (forwarded from TON Community)

User<6301135112>: 不宕机怎么引起大家的关注

User<6301135112>: 😅

wikig: 逻辑上是。上次solana宕机也是meme和ore挖矿导致的 (reply to 51233)

wikig: 为啥没有社区派生版本？ (reply to 51245)

gavin: 没人去弄呗 (reply to 51246)

wikig: 也确实，估计后面用户量上来了可能会有吧

w: 你们有自己跑全节点吗，怎样提取dht信息呀

w: 想看下mempool

MEW: 为何要提取dht呢

w: 看一个项目实现是通过dht监听的

Wayne: 有

MEW: 来个repo看看 (reply to 51253)

gavin: 这个有点东西 (reply to 51257)

gavin: 他想拿到类似evm的 mempool

gavin: 这个dht 看样子只是存了每个节点的信息, 没有tx的吧

gavin: 喔那就是就算能拿到mempool 的tx, 也没办法抢跑

gavin: 拿到就已经确认完了？ (reply to 51273)

MEW: 一直没搞懂，如果不是solana那种，那就肯定有协议内的mempool，怎么拿到呢

IIIllll: 有个问题问下大腿们: 基于合约的消息处理是异步的这个特点: TON 是怎么做到 合约一次只处理一条消息的 换句话问:  TON 的合约能并发吗?

wikig: 这个问题俺也想问。  因为好久之前我记得群里有群友写nft，然后说nft的分配ID会出现重号的情况（ (reply to 51281)

IIIllll: (瞎扯的, 有错误还请斧正) TON 交易的本质是 区块链网络内 漫天的 Message 发来发去, 你如果一定要内存池的话, 解析这些 Message? (reply to 51280)

MEW: 不可以呢 (reply to 51281)

澀谷工程師: TON 是 async的設計，他是併發的沒錯，所有的 tx皆不相依 (reply to 51281)

aier: 也就是说虽然发消息是异步的，实际执行起来还是单线程一个个执行？

MEW: 很多概念用简单几句话描述不清楚，但也没那么复杂，直接实践就能理解了，可以讨论点真正复杂的

Mr.A: 老哥们,请教个问题,这种交易是啥情况? 为什么有个弹回的标记?

澀谷工程師: 他會把internal message 放到sharding裡面以不相依的方式執行，每一條sharding都是一條queue，消化完後再把資料同步到master chain

MEW: 这里有啥说的不对的地方吗

Mr.A: 这种交易是什么意思?转进来之后立马有个弹回标记,又转出去了

MEW: 涉及到冲突怎么办 (reply to 51289)

gavin: 关于Ton链的 交易处理 可以查看官方的代码 (reply to 51281)

gavin: 我刚看了一下

Mr.A: 大佬们,谁知道的话帮小弟解答一下 (reply to 51291)

gavin: 应该是根据logic time做了类似幂等吧

澀谷工程師: 實際原因可以查看 exit code 通常會bounce 是因為 internal message的 boc的tl b組成位置錯誤，根本無法解析，就把錢彈回去了 (reply to 51291)

gavin: 你把tx hash复制下 去查下exit code就清楚了 (reply to 51296)

Mr.A: 怎样才能识别出这种弹回的交易? (reply to 51298)

澀谷工程師: 要查exit code

澀谷工程師: https://docs.ton.org/learn/tvm-instructions/tvm-exit-codes

Mr.A: 多谢,我去查看一下 (reply to 51299)

Mr.A: 多谢多谢 (reply to 51302)

澀谷工程師: 然後檢查一下你組出來的boc是否符合合約的tl-b，不符合的話parse壞掉就會直接回彈，前提是你的錢包是有bounceable tag

IIIllll: 大腿子们真的是又粗又硬

gavin: @leouvw 一起来看看ton的消息处理代码, 还是很有趣的 https://github.com/ton-blockchain/ton/blob/master/validator/impl/collator.cpp#L3007 (reply to 51282)

IIIllll: 直接上源码解答问题🥹

gavin: 有代码当然是看源码啊, 没有代码就要逆向了 (reply to 51308)

澀谷工程師: 基本上不太可能，因為他在部署合約的時候會把index佔據，簽出來的contract address會重複，這個tx會失敗 (reply to 51282)

澀谷工程師: 如果有實例可以分享的話再麻煩哥了

Mr.A: 大佬,这个bounceable tag怎么看 (reply to 51305)

澀谷工程師: https://docs.ton.org/develop/smart-contracts/guidelines/non-bouncable-messages

澀谷工程師: the message will be "bounced" back carrying the remainder of the original value (minus all message transfer and gas fees). The body of the bounced message will contain 32 bit 0xffffffff followed by 256 bit from original message, but with the "bounce" flag cleared and the "bounced" flag set. Therefore, all smart contracts should check the "bounced" flag of all inbound messages and either silently accept them (by immediately terminating with a zero exit code) or perform some special processing to detect which outbound query has failed. The query contained in the body of a bounced message should never be executed.

澀谷工程師: 他會包含在boc裡面有一個uint(1)的位置給他

澀谷工程師: 通常在結尾

澀谷工程師: 實際怎麼包的，每個合約不太一樣

澀谷工程師: 現在沒有一個固定的標準

Mr.A: 我研究研究,有点蒙

IIIllll: 源码看不懂, 基于注释来看, 所有合约要处理的消息需要先入队, 一个一个处理(落块), 直到队列空掉; 这就能保证没有 R/W 冲突的问题; 即 消息是并行的, 合约处理是串行的 (reply to 51309)

gavin: 我觉得你理解的没错啊, 看上去是这样. sharding 只是增加了处理的队列, 最重消息还是串行处理 保证幂等 (reply to 51320)

gavin: 抱歉是我@错人了 🫣🫣🫣 (reply to 51323)

澀谷工程師: 以@ton/core來說，他已經把internal message 的 bounce 處理得很high level (reply to 51319)

gavin: 就是随便看看, 目前看ton的设计确实挺厉害的 (reply to 51329)

IIIllll: 那... 我能抢先入列吗🥹

gavin: 抢跑是吧, 这个问题好多人问 哈哈哈 (reply to 51334)

gavin: 所以社区里面没有第二个ton node... 大家都用的官方的 中心化了哈哈哈哈 (reply to 51336)

IIIllll: 可不是, 之前调研过, 结论是 没法抢跑 (reply to 51337)

MEW: 有办法 (reply to 51341)

IIIllll: 不过这个入列的处理思路, 好像有那么一丢丢希望

aier: 话说ton上那个dexswap好啊？

aier: 好像没有出名的

IIIllll: deDust 合约没开源

IIIllll: ston.fi 合约开源

Boris: ton恢复了吗？

IIIllll: 恢复了

Boris: 交易所还得等等？

IIIllll: 交易所说的是 BN ?

Boris: 是

IIIllll: 那得看BN, 在这问不到结果

kevin: TON 的整个 TX 可以看作是消息传递和处理，合约可以看作是一段可执行代码， 代码可以被消息触发运行，也可以发送消息（可以多条消息）， 所以你看到的 in 可以看作是代码的入参， OUT 可以看作是出参数。 (reply to 51296)

IIIllll: 合约开源 != 万事大吉 合约开源 = TON苦的开始 (reply to 51355)

kevin: stonfi 的代码公开可以学习 (reply to 51352)

aier: ...啥意思，不是合约开源更好吗？

IIIllll: 学习曲线有点陡峭, 很长一段时间都在绝望之谷里面爬

kevin: 虽然合约不开源，dedust 的ABI接口是公开的， 也提供了很好用的 SDK

IIIllll: API 接口?

aier: 6,两位大佬研究的够深，我具体看看吧

IIIllll: 别带上我, 我才开始研究, 还在绝望谷底

IIIllll: 🥹

Mr.A: 已上链的交易可以识别出金额是否被反弹回去吗 (reply to 51327)

aier: 看了下，感觉ton_dex有点点原始

aier: 是不是能套利？按erc20那套？

aier: 搞三明治机器人

wikig: 前提是有MEV (reply to 51378)

wikig: 我之前专门找过有无MEV

wikig: 因为有的话就不止做三明治了，哥们直接去做flashbot的业务了，打包不更赚钱？

aier: 6，看来大佬们都研究过了

wikig: 但是 三角应该是能做的

gavin: 三角没有原子交换

gavin: 一样亏钱

wikig: 逻辑上是

wikig: 就是，类似AMM一样套利 (reply to 51387)

wikig: 多交易所套利

wikig: 好像就算写个三角合约在ton上也实现不了原子性 (reply to 51385)

wikig: 是滴 (reply to 51392)

gavin: evm早期容易

gavin: 后来卷翻天了

aier: 三角不太可行

gavin: 都要flashbot

wikig: 卷死了

aier: 容易翻车

wikig: 现在三角都要flashbot了

wikig: 之前我就是在polygon做三角的

wikig: 给哥们卷麻了

wikig: 毕竟套利这个赛道赢者通吃

aier: 是的，算法设备好一点就全吃光了

gavin: 不如做机枪池质押

MEW: 唉，现在的币圈

MEW: 很难的

wikig: 可以说没区别 (reply to 51408)

aier: 不过新链还是有咱们这种小散的机会

gavin: 只要资金大，蛋糕越做越大

wikig: 也难，算法设计不好，可能不够gas费 (reply to 51409)

wikig: beefy算是做到极致了

wiwi: 我自己是覺得不太重要，目前多數還是跟 tg 綁定很深而且你看目前小遊戲那一個不是大部分都是中心化主機？ (reply to 51211)

wikig: 我的评价是，美其名曰 "web2.5" (reply to 51418)

wiwi: 這其實爭論很久了，全鏈遊戲是否真的這麼重要 (reply to 51419)

wikig: 是争议蛮久的了 (reply to 51422)

wikig: 但是标榜自己 build on TON 或者 美其名曰 web3game , 我的理解是，最好真的是web3agme 😆。  又不是没有前车之鉴

wiwi: build on tg

aier: 深度游戏玩家表示，游戏上不上链不重要，好不好玩才重要

gavin: 😅 之前看到一款PVP的链油 号称全链

aier: 币圈现在这风气，做出好玩的游戏很难的

gavin: 每秒弹出钱包签名一次

gavin: 智障死了

wikig: gamefi本来就不是来玩的倒是

wikig: 哈哈哈哈哈哈哈哈哈哈哈 (reply to 51433)

wikig: 所以这就有了approve或者AA的重要些

wikig: *重要性

gavin: 不予置评

aier: 如果币圈还是开发不好玩的游戏，就很明显，还不成熟，只是发个新币噶韭菜而已

wikig: 只是不得不说，总体上来讲，TON上涉及合约开发，或者真正在TON上做链游逻辑的，其实不多。  大部分都是做了充值功能到时

User<7419915430>: 请问要是项目收到用户充值的star，在哪里换成u

wikig: 我觉得核心还是诉求不一致。  gamefi更像是defi增长乏力之后的添头 或者defi世界向web2募新的渠道。 所以其实核心还是fi (reply to 51439)

wikig: 我记得是在fragment 吧 https://fragment.com/ (reply to 51443)

None: 问个问题：我通过tonlib.getMasterChainInfo()拿到的最新区块shard=-9223372036854775808，但是通过区块链浏览器看是 8000000000000000，这是为什么啊？

User<7419915430>: 这里好像只能消费掉吧，比如当广告费用掉，买账户之类的 (reply to 51445)

wikig: 啊？不是说可以换到TON吗 (reply to 51449)

User<7419915430>: 在网站上找了一圈，没看到 (reply to 51450)

None: 那我转10进制试试   前面那个负号呢  是根据什么确定的

wikig: https://telegram.org/blog/telegram-stars (reply to 51451)

wikig: 不知道他这个soon是多久

None: 好勒 谢了 (reply to 51453)

User<7419915430>: 哦哦，好的，感谢 (reply to 51455)

live: Ton什么操作可以让用户接受消息为jetton，类似于这种

live: OK

live: thanks

live: Ton如何验证token呢？

gavin: 联系钱包 有一个github issue提交 (reply to 51464)

Abdulaziz: 我对在单笔交易中发送多个 jetton、nft、用户名/电话号码有疑问...如果你能帮忙，我会给你价值 600 美元的用户名...  如果感兴趣，请直接发信息给我。

live: 线下联系吗？没有自动化的操作？ (reply to 51465)

wikig: 好像现在是人工audit (reply to 51467)

live: 好的，谢谢 (reply to 51468)

wikig: 折腾了两个多月，可算是能用了

wikig: 我倒比较好奇，为啥@wallet不用MPC 方案

live: 6啊！

gavin: 我有一个issue

wikig: 明明 @wallet 做MPC就不会有那一堆中心化钱包的破事。  除了KYC监管限制我想不到别的原因。 (reply to 51473)

Ginta 🦴: 话说tg创始人还没出来啊 四天了

live: func有类似于Ton-Dynasty的仓库吗？

Mr.A: 创始人如果挂了是不是就成真正的web3了

wikig: 笑死。可是team还在啊

Mr.A: 社区主导,社区自治

Mr.A: 没有金主爸爸在后边指手画脚了

Mr.A: 这种交易类型是不是只有合约能实现 (reply to 51291)

Mr.A: 发出之后再立马退回

Mr.A: 没看到鸡哥,不然从鸡哥那求一段go代码就爽歪歪了

Mr.A: 就是像一个账户转账,转账之后金额又原路退回了,这种交易得咋构建?是不是只能用只能合约构建

Mr.A: 我试过了,不行,应该是还需要某种条件

Mr.A: false改成true

Mr.A: 不管用,也可能是我试的有问题

Mr.A: 那怎么才能故意让交易失败呢

Mr.A: 这种是不是就只能通过智能合约来做了

Mr.A: 我浑身上下加起来也就能凑两顿猪脚饭的

wikig: 可以考虑在payload里面塞点东西可能能做到？ (reply to 51497)

Ton: 大家都不是用Vue 写的嘛

Mr.A: 那大佬知道该怎么识别这种交易吗? (reply to 51502)

Mr.A: 今天群里边一个大佬让我看Exit code,这个code我没找到在哪取

wikig: 识别是指？链上？链下？ (reply to 51504)

Mr.A: {             "@type": "raw.transaction",             "address": {                 "@type": "accountAddress",                 "account_address": "EQAQu4JoD3KBlxWrY4EfvsA_yPR-Kr8_n-uu0WbQ7-L_XPjb"             },             "utime": 1724704047,             "data": "te6cckECBwEAAZcAA7VxC7gmgPcoGXFatjgR++wD/I9H4qvz+f667RZtDv4v9cAAAsVgSZ1QNbnVauj8vjtWYBzsgEw5Yq6T0pnBlNnAT1r9YN6JnobgAALE7DzAkBZszlLwACBgQacoAQIDAgHgBAUAgnIzXEHCzBipVwvrRUvqRpiwA8k0vz0qrxDg3/ix9KrCXqnEGfP69F03NRzbDKgjT9DY4VQt4tQnuJFi34Fd8YrkACUEgRmJQJUC+QABwDAgjTMEEa1AAM1oAGDQjx38Xikz2yO5YZRcCXKX1P4fBq6D4c1t9hi/nWKXAAQu4JoD3KBlxWrY4EfvsA/yPR+Kr8/n+uu0WbQ7+L/XFAlQL5AABggjWgAAWKwJM6oEzZnKXgAAAAAampscG5obmRlAAQHfBgDVWAAhdwTQHuUDLitWxwI/fYB/kej8VX5/P9ddos2h38X+uQAMGhHjv4vFJntkdywyi4EuUvqfw+DV0Hw5rb7DF/OsUtQJUBcmAAYII1oAAFisCTOqCM2Zyl5/////gAAAABqamxwbmhuZGUBQc6fP",             "transaction_id": {                 "@type": "internal.transactionId",                 "lt": "48747956000003",                 "hash": "LtLOWKJ185KJu37oiKsRDV7iQKSGJs8UOT7Dh/CNT6g="             },             "fee": "401126",             "storage_fee": "1126",             "other_fee": "400000",             "in_msg": {                 "@type": "raw.message",                 "source": "EQAwaEeO_i8Ume2R3LDKLgS5S-p_D4NXQfDmtvsMX86xSwcc",                 "destination": "EQAQu4JoD3KBlxWrY4EfvsA_yPR-Kr8_n-uu0WbQ7-L_XPjb",                 "value": "10000000000",                 "fwd_fee": "266669",                 "ihr_fee": "0",                 "created_lt": "48747956000002",                 "body_hash": "+9baPzk8xE7xGMJlIJo8gqJQc1TQmKWJDQk11qjy3+g=",                 "msg_data": {                     "@type": "msg.dataText",                     "text": "NTU2ODc0NzIy"                 },                 "message": "556874722"             },             "out_msgs": [                 {                     "@type": "raw.message",                     "source": "EQAQu4JoD3KBlxWrY4EfvsA_yPR-Kr8_n-uu0WbQ7-L_XPjb",                     "destination": "EQAwaEeO_i8Ume2R3LDKLgS5S-p_D4NXQfDmtvsMX86xSwcc",                     "value": "9999600000",                     "fwd_fee": "266669",                     "ihr_fee": "0",                     "created_lt": "48747956000004",                     "body_hash": "QCEdMtLgXykttclpneTklCenCjnAY0MPwZeMEguqNww=",                     "msg_data": {                         "@type": "msg.dataRaw",                         "body": "te6cckEBAQEAEwAAIv////8AAAAANTU2ODc0NzIyfBhdFg==",                         "init_state": ""                     },                     "message": "/////wAAAAA1NTY4NzQ3MjI=\n"                 }             ]         }

Mr.A: 以这笔交易为例,这笔交易是通过/getTransactions接口从节点上拉下来的,已知这些数据,怎么才能判断出exit code

Mike: 可以用了？

None: 我调tonlib.lookupBlock报这个错，大佬帮我看看什么原因吧？

None: 这是我的代码

yojoy: TON链上有多少个DAPP

yojoy: TON有多少用户

User<7529893053>: 两个 (reply to 51530)

yojoy: 哪两个呀

User<7529893053>: DeDUST跟STON

live: 如果要实现这种在TonKeeper中展示接收token的数量（而不是Toncoin），消息构建格式是怎样的啊？

west: 现在每次转账ton都要pending好久，大家都这样吗

west: ton怎么变得这么垃圾了

west: 而且到最后还失败 😅

live: 我USDT转Ton也一直不成功 (reply to 51548)

gavin: 就是jetton 的transfer 的payload (reply to 51542)

live: forward_payload吗？我刚刚添加了文本评论，但似乎不行，他显示的还是默认的（Ton数量），还是说有什么特殊的消息格式？ (reply to 51551)

Mike: 你这个费用咋获取的？ (reply to 51556)

live: 钱包自己获取的啊 (reply to 51558)

Mike: 这是交易之后查到的？

live: 确定交易前

Mike: 网络费用不是没法准确计算么

live: 但钱包却是给我这样显示了 (reply to 51564)

live: 还没搞清楚他这个咋个才能切换到jetton

gavin: 你把你的代码发一下 (reply to 51556)

gavin: 我给你看一下吧  看你问这个问题一晚上了

live: 好的，谢谢佬

GMjja: 💎

Y: 🚀 Telegram 创始人 Pavel Durov 案件审理结果尚未确定  据 PANews 报道，Telegram 创始人兼 CEO Pavel Durov 尚未被释放，目前已从警方移交至法院，案件审理结果尚未确定。  #Telegram #PavelDurov #案件审理 #警方 #法院 (forwarded from 飞讯-币圈快讯)

x: 这个我知道啊 (reply to 51542)

x: import { Address, beginCell, toNano } from "@ton/core"; import {   SendTransactionRequest,   useTonAddress,   useTonConnectUI, } from "@tonconnect/ui-react"; import { useRef } from "react"; import TonWeb from "tonweb"; import { usePopup } from "@telegram-apps/sdk-react";  enum EOpcodes {   TRANSFER = 0xf8a7ea5,   BURN = 0x595f07bc,   MINT = 21, }  export default function JettonPayment() {   const [tonConnectUI] = useTonConnectUI();   const addr = useTonAddress();   const inpRef = useRef<HTMLInputElement>(null);   const popup = usePopup(false);    const tonweb = new TonWeb(     new TonWeb.HttpProvider("https://testnet.toncenter.com/api/v2/jsonRPC", {       apiKey:         "1dab8c1b846ae871c0ea33155e2bf1edd2eac8230111f0372dcb3d3909c5babc",     })   );    const sendJettonTransaction = async () => {     const Wallet_SRC = addr;     const Wallet_DST = inpRef.current?.value ?? "";      // 校验目标地址是否存在     try {       const walletInfo = await tonweb.provider.getAddressInfo(Wallet_DST);       console.log("walletInfo", walletInfo);     } catch (error) {       popup.open({         title: "Target address has error",         message: error as string,         buttons: [           {             type: "ok",           },         ],       });       console.log("error", error);     }     const forwardPayload = beginCell()       .storeUint(0, 32) // 0 opcode means we have a comment       .storeStringTail("Hello, TON!")       .endCell();      const body = beginCell()       .storeUint(EOpcodes.TRANSFER, 32) // opcode for jetton transfer       .storeUint(0, 64) // query id       .storeCoins(toNano(5)) // jetton amount, amount * 10^9       .storeAddress(Address.parse(Wallet_DST)) // TON 钱包目标地址       .storeAddress(Address.parse(Wallet_SRC)) // 额外响应       .storeBit(0) // 没有自定义负载       .storeCoins(toNano(0.1)) // 转发 ton 额度 (if >0, will send notification message)       .storeBit(1) // we store forwardPayload as a reference       .storeRef(forwardPayload)       .endCell();      const myTransaction: SendTransactionRequest = {       validUntil: Math.floor(Date.now() / 1000) + 360,       messages: [         {           address: "kQDAsic1NjskDUIk8BKaLInjw8IwT8gCfQxoDj5XDf1H6zJb", // sender jetton wallet           amount: toNano(0.2).toString(), // for commission fees, excess will be returned           payload: body.toBoc().toString("base64"), // payload with jetton transfer and comment body         },       ],     };      if (!addr)       return popup.open({         title: "Wallet not connected",         message: "Please connect wallet first",         buttons: [{ type: "ok" }],       });     const result = await tonConnectUI.sendTransaction(myTransaction);     console.log("send result", result);   };   return (     <div className="flex flex-col">       <h3>Jetton Transaction</h3>       <div className="flex mb-4">         <label>target wallet addr：</label>         <input ref={inpRef} type="text" className="flex-1" />       </div>       <button className="flex-1" onClick={sendJettonTransaction}>         Send transaction       </button>     </div>   ); }

x: 你参考下不

live: 感谢！ (reply to 51583)

west: ton链这是又挂了吗

jay: 最近发dogs空投的dapp能算么？ (reply to 51537)

Y: 今天挂好几次了,

11: ton宝别崩了，妈妈怕

Y: 屋漏偏逢连夜雨

Y: 上次铭文的时候 更严重, 哈

jay: https://tonviewer.com/stats/transactions 没挂吧。

Y: 都不出块了 还没挂?

unknow: 挂半小时了

jay: 额，确实。。

Y: 要我说 直接把dogs的合约删了得了 哈

Y: 这样马上恢复了,, 压力测试结束

Y: 上次铭文导致崩半个月的时候我还说呢, gas应该做浮动的,  就这么一口价gas,  太任性了,,

Y: 资源是有限的, 价格确是写死的,

adam: 什么垃圾链 太拉了

unknow: 这么合理的提案都不通过？

unknow: 这么中心化？

jay: ton gas 也不便宜吧。

x: 还说恢复了

Y: 很便宜啊, (reply to 51608)

Y: 我一天交互 三千多次,  gas也就十多个TON

jay: 对比evm l2 ，solana没什么优势呢。

Y: 问题是 他一口价,

jay: 确实是一口价。

Y: 闲时 便宜点 高峰 贵点, 这才对,,

jay: 发消息这种也很特别吧。

jay: 你们用tonapi么?它的events接口老丢数据，很不可靠。

Ton: 哥，你都干啥，一天交互这么多次 (reply to 51611)

Y: 薅羊毛

— 2024-08-29 —

None: 我调getBlockTrnasactions接口，入参workchain=0返回以上错误，请问该怎么拿workchain的交易记录啊？

None: 从返回的错误信息看像是去masterchain取数据了

Gala: 请问TON广播过期时间默认是多少

Andy: https://docs.ton.org/develop/data-formats/block-layout  TON block layout 里面的key block是什么意思，有人知道吗，另外有人知道怎么找到分片是从哪条分片分出来的么

Chi: 想請問各位，最近在研究 TON 的架構，發現合約間的溝通是非同步的，也就是說一筆交易的原子性不夠，交易可能產生部分失敗的狀況，那有沒有什麼方式可以解決這種問題，就是我希望一筆交易可以持續維持原子性，像 Ethereum 會 revert 那樣

Chi: https://blog.ton.org/six-unique-aspects-of-ton-blockchain-that-will-surprise-solidity-developers 我看到這篇文章第二點提到的，但他好像沒講除了手動處理以外的調整方法？

wikig: 目前好像没有办法？  但是思路上，如果所有中间合约/中间地址是可控的话。  是否可以在每个函数调用做一个回滚校验。  然后出问题就一步步退还回退到起点（当然，回退本身也可能错误 (reply to 51676)

Chi: 感謝回答，所以這樣做鏈上的 aggregator之類的就特別困難？ (reply to 51680)

Chi: 相較於 EVM 而言

wikig: 不只是aggrator，MEV或者三角套利都会不可行。 (reply to 51681)

wikig: 就在昨天这个群里讨论过三角的可行性

wikig: 但是现在TON上是有dex aggregator的。  至于有没有做多层路由聚合就没细看。  如果只是单层路由择优。那根上述不冲突。  但是如果支持多层路由，则说明人家有办法解决原子性问题 (reply to 51681)

Chi: 請問多層 單層指的是？ (reply to 51685)

wikig: 单层路由就是，单纯做了一下比价。 然后选择价格最好的那个路由执行。  多层路由就是跟1inch那种类似， 有路径表、交易拆分表。实现一笔交易走多个dex择优并且甚至执行部分套利。 (reply to 51686)

MEW: V100TON告诉你 (reply to 51670)

MEW: 已经实现了，链稳定的情况下，很稳 (reply to 51681)

wikig: 意思是能做回滚或者说交易原子性吗 (reply to 51690)

Chi: 能請問是哪個項目，或有能參考的資源嗎 (reply to 51690)

wikig: 这点倒是很感兴趣，毕竟是关系了整个三角套利、

MEW: 基本能成功，不是100%

wikig: 三明治攻击，以及MEV这块的东西 (reply to 51693)

wikig: 额，这个听起来，怎么像是，抢跑相关的逻辑。 (reply to 51694)

wikig: 上面主要讨论的是交易原子性（也就是失败回滚这块的

MEW: 就是拆单和路径规划

MEW: 失败再写处理逻辑就行，风险很小

wikig: 拆单核路径规划。  单路径失败能做回滚吗？ (reply to 51698)

MEW: 基本不会失败

MEW: 发tx时留有余地的

MEW: 失败也可以处理

wikig: 因为我的理解是，如果全是自己的合约。那没啥关系，可以写回滚操作。

wikig: 但是如果走三方dex聚合，回滚就由不得我了

MEW: 都有办法滴

wikig: 那蛮好，那恭喜可以做三角套利了

aier: ？？那个三方dex有聚合？

wikig: （如果成功率高的话。

wikig: https://ton.diamonds/ (reply to 51708)

MEW: 做不了多pair套利，需要高性能indexer，我那个速度还不行

MEW: 有几个大哥，应该做了类似于dton那种，直接改了节点

wikig: https://ton.diamonds/dex/swap?inputToken=TON&outputToken=EQDv-yr41_CZ2urg2gfegVfa44PDPjIK9F-MilEDKDUIhlwZ (reply to 51710)

wikig: 啊这，大概猜到了，因为没有排块，所以是在拼节点走更快的数据获取然后广播的路径是吧 (reply to 51711)

MEW: 多pair套利，99%情况下，容量只有1笔tx

MEW: 抢不到

wikig: 我看了下居然能拆 (reply to 51687)

MEW: 你要有solver去解路径，solver的数据依赖indexer构建到本地

wikig: 传闻 cashcash_bot那边也在做TON的抢跑 (reply to 51715)

wikig: 可能也是这块逻辑

MEW: 抢跑我现在炉火纯青

MEW: 多pair套利是back run

wikig: hhhh那你岂不是可以做MEV了 (reply to 51721)

MEW: 已经在跑的，所以说很稳..

wikig: 但是有memopool监听吗

wikig: 我咋印象里TON好像拿不到memopool数据

MEW: 不能泄露秘密hh，虽然仔细看后就会发现很简单

wikig: hhhhh好，好家伙，加油

Chi: 是因為非同步的關係嗎？ (reply to 51727)

wikig: 那也就是说，其实更多是快，而没到能排块的操作。  我还想啥时候出MEV规则做validator做flashbot呢

Yang: 財富密碼就這樣討論，太大方惹 (reply to 51728)

wikig: 这个就不清楚了。可能？ 我觉得单纯是同步规则的问题？ (reply to 51730)

wikig: 毕竟memopool也是MEV的基础核心之一

aier: 没啥用吧，没memopool池子数据，赚不到利润啊

Yang: 這個對妳們三角套利應該會有影響吧～ (reply to 635)

wikig: 不知道啊，既然人家在跑了，多半是有memopool信息的吧 (reply to 51736)

Chi: 我的想法是 TON 做平行化，所以每個 contract 的狀態是非同步的處理的，所以不會有一個類似mempool 的東西，來統一管理交易的順序，不確定這樣的思路對不對 (reply to 51733)

Yang: 或者實現類 memopool 的資訊，不然是不可能盈利的 (reply to 51738)

aier: 除非和出块的那边关系好能拿到数据

Yang: 既然人家做到了，活該賺錢 XD

wikig: 当然，一切从简。我只是说，万一，万一他们有toncenter的memopool接口呢。毕竟链上大部分交易都是走toncenter出的 (reply to 51736)

aier: 同时你发数据也能准确排在前面

MEW: 看起来问题不大，猜测就是创建池子后，多少时间内不能交易 (reply to 51737)

wikig: 是的，在我的理解里也是这样。  但是在单一的provider手里肯定还是有一个memopool的列表或者操作的。  刚好，TON的大头交易基本都在toncenter。所以可能只用拿一家的。最多拿个两三家的就能覆盖90% (reply to 51739)

wikig: 这应该就是防抢跑 (reply to 51745)

Chi: 有趣的想法 很有道理 (reply to 51746)

Andy: solana 的jito是不是也是这么实现private mempool的？

wikig: 虽然链是《去中心化》的。但是谁控制了provider谁就控制链嘿嘿  那么当某个服务商的provider的市场占有率比较大的时候，你就可以只接一家实现大范围覆盖

aier: 三角套利应该是有空间

aier: 板砖就行了

wikig: jito好歹是有mev逻辑啊，jito可以排块啊 (reply to 51749)

Codingzzz: 谁控制出块权，谁就能做这部分功能

wikig: 但是现在TON上好像没有交易排序、块排序的操作把 (reply to 51755)

Codingzzz: solana也没有啊

Yang: 技術大佬平凡無奇的秀了一波肌肉 (reply to 51757)

wikig: 话说这个量级TPS，跑全节点重不重 (reply to 51757)

Codingzzz: 这是利益驱动的部分，eth上的mev就是这样产生的

Codingzzz: 原来solana官方还限制这部分了

MEW: 其实你们跑节点，本地也有个local validator

wikig: jito那边不是有validator的排块权嘛（虽然是后来才有的，一开始也没有，后来为了屏蔽垃圾交易加的） (reply to 51759)

MEW: 和全节点差别不大

Codingzzz: 对节点惩罚

Codingzzz: 到最后不还是没限制住

wikig: solanabeach上还可以看单个validator的MEV小费收益。收到排块后的小费收益 (reply to 51766)

Andy: 好吧原来如此 (reply to 51766)

Andy: 还以为也是靠垄断

MEW: solana，是完全没有协议内的mempool

MEW: 发送给leader，直接上链

wikig: 不知道啥时候TON上也出一套MEV规则。毕竟年初的时候不是刚出现过垃圾交易攻击然后导致链阻塞的情况嘛

MEW: jito是协议外的贿赂和排序

Yang: 你說的是 Archive Node 對吧 (reply to 51765)

Andy: 那些solana tgbot 的是自己的mempool么那

Codingzzz: 合作 (reply to 51779)

MEW: full node也有，不用开Archive模式

wikig: 头部的基本是合作的 (reply to 51779)

wikig: 不合作基本snipe不到（

Andy: 懂了

MEW: 大部分用的bloxroute (reply to 51779)

Andy: 哦哦 (reply to 51786)

Andy: 国人👍

MEW: bloxroute不是乌克兰人

MEW: 吗

aier: 算了，这种套利轮不到我们吃，得和出块的人有合作才行

MEW: 不需要的..

Andy: 🧐我之前以为是国人，但不确定创始人是不是

wikig: 但是你可以募资然后做节点提供商 (reply to 51791)

wikig: 然后做成头部

wikig: 然后你就给自己吃hhhhh

wikig: 很合理的路径啊

Codingzzz: 套利方式又不是只有一种，不存在绝对的垄断。

aier: 我要有那影响力我去做其他的不更好。。。

gavin: 你们讨论出结论了吗？

aier: 正在想板砖的方法 (reply to 51801)

Codingzzz: 你捡多少了？ (reply to 51801)

aier: 好像是能搬，得明确研究下

Codingzzz: 可以啊

wikig: 你这说的也确实哈哈哈哈哈 (reply to 51799)

wikig: 但是刚才@MVE 应该是指可以做抢跑操作，而且成功率比较高，但是容量只有一笔 (reply to 51804)

wikig: 也就是说，做三明治（如果能拿到toncenter的memopool）是可以做的

wikig: 三角可能有一定风险，因为容量只有一笔保障

MEW: back run (reply to 51808)

Chi: 這什麼意思？ (reply to 51811)

MEW: https://www.techflowpost.com/newsletter/detail_34576.html

MEW: 多pair套利是back run (reply to 51812)

MEW: 不是front run

wikig: 多pair就是三角嘛，好理解的 (reply to 51814)

wikig: font-run才能三明治

gavin: 牛 这个验证者的奖励多吗？ (reply to 51813)

MEW: 不多，主要是有锁定的TON，delegate到节点挖个低保

MEW: 3%左右

wikig: 啊这，那确实有点，低保

wikig: 勉强持平通胀了

gavin: 八成是

gavin: 大户就是不一样

MEW: 不是， 我意思让他直接问同事 (reply to 51670)

wikig: Animoca下场做validator少见呐

wikig: 应该不会用自有资金吧，不然这个收益率和代币本身的浮动风险扛不住的呐

wikig: 啊？本行不是做投资的吗

wikig: 我咋记得阿尼是家投资大头

wikig: 而且还是万人追捧那种（

Andy: xs 能解决尽量自己解决 (reply to 51833)

wikig: 艹那确实赚麻了 (reply to 51844)

wikig: 但是估计他们也不敢出把这个行情

wikig: 大概率是缓释的

wikig: 而且，说好的TON上老矿工持仓占大头呢

gavin: 我靠 赚麻了

wikig: 确实麻了啊

gavin: 这。。。太可怕了

wikig: 去年我们在ton上做支付project嘿嘿

gavin: 打倒狗庄！

wikig: 没钱啊哥哥（ (reply to 51865)

gavin: 去年 我知道的时候ton才 3块 (reply to 51862)

wikig: 🥲

Codingzzz: @mewbrother 别怕

wikig: 低谷1.5

wikig: 稳定2.0上下

gavin: U (reply to 51873)

wikig: 嘛

wikig: 那时候tonnel还没起来

wikig: TON上的长尾资产的倍率高的跟隔壁solana meme一样

wikig: 但是由于telegram没更新很多feature，其实这个群只有2k人3k人hhh

Yang: 各方大佬，請勿在這邊發廣告喔！真有各種需求，可以私訊討論。

Alan | Torch: 我們 torch finance 這一年來都在研究最適合 tvm 的DEX，最近會在我們的DEX中加入類原子交換特性，未來可以在我們這裡安全的交換 ton usdt 等常用幣種，有興趣了解細節可以點我頭像關注我們社區🙌 (reply to 51676)

Chi: Joined ! 會公開技術細節嗎？ (reply to 51894)

Alan | Torch: 會依照時間依序發佈 敬請期待🙌 (reply to 51895)

gavin: 比较好奇是怎么实现的, 最终swap的时候通过send message 怎么控制呢 (reply to 51894)

wikig: 逻辑上，如果是双币交换的话，实现原子性应该靠中间的所有相关的地址支持回滚行为能做到保障原子性吧 (reply to 51898)

gavin: 那就是类似实现分布式事务的最终一致性了 (reply to 51903)

wikig: 我觉得不用吧，只用在每一个操作下下一个回溯方法就好了吧 (reply to 51904)

gavin: 很难, 举一个场景  A 和 B 两个jetton 交换 A成功了, B失败了  可以处理B的on_bounce 但是A都转走了 (reply to 51905)

wikig: 所以前提是可控啊，但是dex的话，流动性池合约、swap合约都在自己手上。也就是A B 两个 jetton互换，那么实际发生时在swap合约。  用户拿着 A 去 swap合约 换B  swap合约去流动性池合约，走曲线换出B  swap合约把 B 给 用户 （或者直接流动性池合约给到用户）  中间每步都写好回溯就行了吧 (reply to 51906)

Yancy: hello 各位大神好，请问有人在tg小程序里接入三方广告吗

wikig: Google Ads  ? (reply to 51910)

Yancy: 接不了，我刚试过了 (reply to 51911)

wikig: 遇到什么问题？

gavin: 对 你这个是ston.fi的做法, 不清楚刚刚torch的技术细节, 回头在研究吧 (reply to 51907)

Yancy: 输入tg的小程序域名，就无法进行下一步了 (reply to 51913)

wikig: tg webapp 本质是h5啊  虽然没折腾过google ads ，但是老榕树好像是能用的 (reply to 51912)

wikig: 你别填小程序域名啊 (reply to 51916)

Yancy: tg他不是一级域名 (reply to 51917)

wikig: 你填你的website的网址和地址啊

Yancy: google ads 是直接插入页面的，插入网址没啥用

wikig: 啊？ston.fi是这么干的啊  我胡诌的，哥们FUNC一窍不通😆 (reply to 51914)

wikig: 我记得，Google ads，也是有那个，页面信息采集script的吧 (reply to 51921)

Yancy: 我try一下

wikig: 照理说，你用telegram webapp进入还是普通浏览器进入，对Google ads的识别来说，是一样的。  首先你的site必须是公网可访问的，最好也是独立的一级域名解析。  相当于你先是一个独立的website，再给他添加到telegram webapp里 (reply to 51921)

wikig: 所以你到Google ads那边填的信息，应该是你的website的信息

Yancy: 对，我本来也是这么想的，觉得应该可以接goole ads 但是域名就卡住了

gavin: 类似那样的 你可以看看他的router.func 差不多就能知道 (reply to 51922)

wikig: 啊？你域名填你公网的一级域名没问题的才对啊 (reply to 51927)

Yancy: 我试试 成功了群里反馈 (reply to 51929)

wikig: 但是其实这种方案感觉是有局限性的 (reply to 51928)

Wake: 有人遇到这个问题吗

Yang: 今天群組的技術討論濃度很高阿！

国际城品茶: GitHub上有吧 (reply to 48799)

Ton: 在合约里面能调用其他合约的get方法嘛？

User<7405374332>: 在 TON 区块链的智能合约中，合约是可以调用其他合约的 get 方法的。这种调用一般被称为 "内部消息调用"（internal message call），也就是说一个合约可以向另一个合约发送消息，调用它的公开方法来获取数据。 (reply to 51964)

jay: 没法调用。

— 2024-08-30 —

Metas: toncenter testnet的rpc还是挂的， 429

兰兰/防封飞机号/会员代开/🍎苹果ID: 这里是不是也可以买NFT

jay: 请问下 tonkeeper 有独立的 sdk 么？

jay: 想试验下 v5 的批量转账。

peter: 兄弟们,问下, 调用调用RunGetMethod 获取最新数据,一定要先调用CurrentMasterchainInfo 这个方法获取最新当前区块,然后把结果作为参数传递给RunGetMethod吗

Metas: 公共rpc， 都没有apikey的，整个办公室的都是 (reply to 52006)

peter: 我没有自己的节点, 我是subscribe监听一个地址的交易, 然后发现交易, 我立即去调用GunGetMethod获取数据,这种只能先调用一下吗 (reply to 52016)

Metas: 那几十万人的dapp也是走自己的apikey？ (reply to 52015)

Metas: 在哪租节点

Metas: 之前只用过买的api key，也会挂

peter: 好的,谢谢, 请问一下, 就是我监听tx, 为啥延迟会比较多,如何才能比较快的监听到交易呢 (reply to 52018)

peter: 过了3秒中, 才监听到, 但是,GetMethod, 3秒钟前就有新的值

IIIllll: 大腿们, stonfi dex 里 如果 on_bounce 没有对 lp_wallet 的 余额进行操作: 代码: File contracts/lp_wallet.func Line 138 ==> balance += jetton_amount;  那么这个 bounced msg 携带的 jetton_amount 会被直接丢弃吗?

gavin: 我理解是 (reply to 52030)

IIIllll: 那这个 total_supply 什么的不都受影响

gavin: 这个lp_wallet 其实就是 基于标准 jetton wallet改的

gavin: 你就认为是jetton wallet 合约就完事了

IIIllll: 哦, on_bounce 是 jetton 的强制要求吗 (reply to 52033)

gavin: 对啊, 这是因为 你没按照规范去实现 当然数值就对不上了 (reply to 52034)

gavin: 不过话说回来 好像最新版的 stonfi 的合约没开源

gavin: 仅供参考

peter: 是公共的, toncenter 有订阅tx的功能吗? 我只看到他提供了api (reply to 52029)

IIIllll: 妈耶池子迁移可是个大工程 (reply to 52040)

None: /v2/getTransactions拿到的数据结构是这样的，里面包含in_msg, out_msg这样的数据。

None: 但是/v2/getBlockTransactions拿到的数据里面只有个hash。

None: 我想逐块拿像/getTransactions这样的数据结构应该怎么拿啊？

kevin: 是保证数据最新 (reply to 52012)

Sen: Hello 各位大佬，我们想在运行主网validator节点前先跑下测试网validator节点，请问哪里可以申请一些测试币来注册验证人呀？ 自动领取的bot一次只能领5个远远不够，来请教下各位大佬该如何获取方便！

aier: 求问大佬，https://mainnet-v4.tonhubapi.com

aier: 这个api又限频吗？

aier: 我在文档中没看见限频

aier: 行吧

aier: 我还以为遇上个不限频的嘞

Sen: @howard_ton Hello，请问可否帮忙看下呀？ 我们是一个staking服务商，准备跑主网验证人节点了，想先申请点测试币跑测试网节点测试下。 (reply to 52059)

Champer Wu: 那你可以使用 v3 來query  curl -X 'GET' \   'https://toncenter.com/api/v3/transactions?workchain=0&shard=2000000000000000&seqno=45373813&limit=128&offset=0&sort=desc' \   -H 'accept: application/json'  順序基本上也是一樣的 (reply to 52049)

🍅... 👾 BITS: 各位大佬，请教一下，txHash 要怎样构建出来？我构建出来的是in message。

gavin: 上链之后才会有txHash (reply to 52077)

🍅... 👾 BITS: 那就是只能从交易记录里查了？ (reply to 52078)

wikig: 但是你可以用message hash来查相关交易呢 (reply to 52077)

🍅... 👾 BITS: 是的，我们有一些逻辑需要与txHash匹配，自己构建出来的是in message，似乎没办法只通过本地将两者关联起来。 (reply to 52080)

Champer Wu: 本地建構出來 inMsg沒有包含上鏈後的lt，無法當作query 的 index (reply to 52077)

Champer Wu: 本地建構的hash只可能是 external mesaage

Dev: 各位大佬。有个问题，  Telegram.WebApp.initDataUnsafe 获取到的 user.language_code 这里的language_code 是telegram语言设置变化的吗

🍅... 👾 BITS: 我懂了，谢谢大佬解惑。 (reply to 52084)

wikig: 纯本地好像确实不行。  得去询接口 (reply to 52081)

🍅... 👾 BITS: 嗯，是的，多谢大佬解惑，本地构建出来的交易只是真实交易的一部分，确实没法计算出来真实的txHash。 (reply to 52087)

molemole: 请问hashkey做的小程序，给我提供了一批可邀请用户的名单，但那些用户不是我的好友，有人知道怎么实现的吗

Bill: 是的

li: 问一下如果制作小程序的话，需要了解func吗

li: 大佬们

wikig: 只是webapp或者bot的话，不用 (reply to 52099)

Metas: 看下这个，https://docs.ton.org/develop/dapps/cookbook#how-to-find-transaction-or-message-hash (reply to 52077)

🍅... 👾 BITS: 谢谢大佬提供的文档链接🙏 (reply to 52102)

harlan: 哪位大佬知道api中回来的数据怎么解码https://toncenter.com/api/v2/

Champer Wu: 他們應該有建立server去儲存互動過但尚未有referring 的用戶，並隨機推薦給用戶讓你們去邀請 (reply to 52093)

Champer Wu: 不太明白你的問題，toncenter回來的資料大多解析完了 (reply to 52104)

Champer Wu: 你只需要暸解js or ts 即可 (reply to 52099)

Mike: tg mini app能接入第三方广告吗

wikig: 昨天群里好像讨论过。可以翻一下记录 (reply to 52111)

Mike: 好的谢谢

jay: 还是没办法在发送那一刻知道交易 hash么？ (reply to 52102)

Champer Wu: 通常一個action包含多個 txs，拿 jetton transfer來看 雖然結果是 wallet A 減錢 wallet B 加錢 但是中間的過程是 鏈下 -> Wallet A -> Jetton Wallet A -> Jetton Wallet B -> Wallet B                                                                                                                            -> Wallet ?(指定回彈) 所以你只能知道 鏈下 -> Wallet A 的 hash (external message) (reply to 52114)

jay: 第一个就行哇。后续的都能串起来 (reply to 52116)

jay: 现在拿第一个都比较费劲。

Champer Wu: 第一個可以用 toncenter/api/v2/sendBocReturnHash 來拿 https://toncenter.com/api/v2/#/send/send_boc_return_hash_sendBocReturnHash_post (reply to 52120)

jay: 我看前端自己也可以解析 boc的 hash。但是库一般都没开放这个接口出来。

Mike: 这个只是msg hash把，反正也可以算，无所谓把 (reply to 52121)

harlan: 接口回来的数据类型是这几个，怎么解码呢

Adaora Media 💸💮🐍: 大佬们请教下，小程序里面钱包连接外部app钱包只能连接ton链么

gavin: 你想连evm链？ (reply to 52125)

Adaora Media 💸💮🐍: 对

Adaora Media 💸💮🐍: 可以连么 (reply to 52126)

gavin: 这个问题我调研过, 结论是 很多钱包的sdk 弹出的时候 用的是 window.open ， 在小程序里面是弹出不了的  另外就算改造成  tg 的openLink 也不行

Champer Wu: 沒錯的 Mike Su 大佬 指出了  https://github.com/ton-org/ton-core/blob/3a68441b615f5fa817106c7f4d9586656a9f81b4/src/boc/cell/wonderCalculator.ts#L132-L133 你可以透過這個 function 鏈下解析 (reply to 52122)

gavin: 所以主流的做法是利用 deeplink 的方式 拉起钱包 然后在钱包里面的浏览器访问你的应用 但是这样就脱离了 miniapp

Adaora Media 💸💮🐍: 好的，谢谢大佬，我再查查资料 (reply to 52131)

gavin: 你可以试试catizen 的mantle 版本 它就有 (reply to 52132)

wikig: 目前是这样的。主流的链多链的操作主要是：  1.走Deeplink和extension，做端判别。  这个很好理解，做端判别，如果是pc就走windows.open大browser解决问题。如果是Android就走deeplink到移动端app处理 也可以走wallet connect   2.自己部署中心化钱包走http请求交互（反正风险摆在那）  目前我们是做了MPC 解决方案，但是还在B测，感兴趣可以看看： https://t.me/tonspays/29 (reply to 52125)

wikig: 但是可以带参带鉴权TOKEN来实现行为连续性和鉴权连续性 (reply to 52131)

Adaora Media 💸💮🐍: 好的，非常感谢 (reply to 52134)

IIIllll: 大腿们, 这个 cell 里的 ref 我能理解了, 但是这个 store_ref 之前, 还有个 store_uint 的操作, 这是个啥? 非常迷惑

Mike: 正好在踩坑😂 (reply to 52130)

aier: 求问大佬，dedust上有滑点这个属性吗？我研究他们sdk没找到

aier: 他们那边tg工作人员感觉不太活跃，头疼

None: 好的  我试一下  多谢 (reply to 52074)

aier: limit字段限制？

aier: 还是swapParams里面具体限制？

sakura: 有大佬可以帮忙看一下这个转账Jetton类代币的操作有什么问题吗？调用时候在钱包里提示参数错误

sakura: 😭

IIIllll: 哎, 刚才有大腿回复我是指针来着

gavin: yes (reply to 52154)

IIIllll: 咋消息没了

gavin: https://docs.dedust.io/reference/tlb-schemes (reply to 52155)

aier: 明白嘞，感谢大佬

wonderful: 有没有大佬遇到过 电报小程序 安卓显示不了图片 但是苹果和pc能正常显示

IIIllll: 这大概就是精准筛选目标客户吧

发财: 谁有dogs 或cats类似mini app演示

cfs chef: 群里有kol或者正在运营社区的吗，寻求合作🙏

Champer Wu: 都是血與淚🥲 (reply to 52139)

Eliot🦴: 时区的问题，老毛有9大时区 (reply to 52147)

recovery: 大佬们请教一个问题 ，web mini  app 链接钱包 会跳转到 @wallet  ,连接成功后也一直在@wallet  ,不会返回小程序  ，看别人做的小程序连接钱包不会跳转到@wallet 会在当前小程序打开 。请大佬指导一下

Eliot🦴: 你提问的时候，可能刚好人家在睡大觉

recovery: 我们链接钱包会跳转到

recovery: 我看demo ，同样的代码

recovery: 没有跳转到@wallet bot 打开

Howard: 你要幾顆呀 (reply to 52059)

— 2024-08-31 —

Ton: 哥，工作介绍发我一份 (reply to 52187)

jay: payload直接传cell (reply to 52156)

Tofu: Hi

Ginta 🦴: 可以发一下功能

卡: 大佬们，这个@interface("org.ton.jetton.wallet")是干嘛的

2: 应该就是导入默认 jetton wallet钱包支持的接口吧

卡: 相关的文档可以在哪查看呢

奶昔: 请教一下 大佬们  我用 @ton/ton 库 导入助记词 都是 生成的 E开头的地址

奶昔: 但是 使用 钻石钱包生成的 都是U 开头的 咋回事

奶昔: 如何在代码你生成 U 开头的额

jay: 不同格式可以互转。toString时有参数。 (reply to 52286)

teamo: 有大佬 知道 怎么控制 在 dedust 添加流通性后 ，代币 能收滑点的吗

奶昔: 我一个个测试了 都不太对 (reply to 52293)

Leo: https://tonresear.ch/t/ton-dev-chat/30278/3 (reply to 52291)

奶昔: console.log(wallet.address.toString({     urlSafe: false,     bounceable: false, }));

奶昔: ooo

teamo: 不是交换数量，是 收代币的3%的数量 用来分红 这种类型的 (reply to 52297)

teamo: 只要能抽出一部分金额 给到一个地址就行 ，线下去计算分红吧

wikig: 但是是不是可以，在内部交易抽出一部分倒别的地址作为一个分支就行 (reply to 52301)

teamo: 是要改 jetton 代币合约的  transfer 方法吗 (reply to 52304)

wikig: 好像.....从我的逻辑来讲，可能得在流动性池的合约上改东西才行？就是实现每一笔swap行为版税  或者jetton合约里面，在整个transfer行为里面动手脚？ (reply to 52306)

teamo: 流动性 池 是用的 dedust  肯定改不了吧，只能改自己的 wallet 子合约吧

wikig: 那可能，但是如果改了jetton内容那岂不就不符合jetton规范了

奶昔: EQ ,也就是我们常说的 isBounceable ， 可退还格式。向在该格式下的地址发起交易，交易遇到问题时会自动退款。这也是部分场景下在尝试自生成地址转账失败的原因。  3.UQ，也就是对应unBounceable ，不可退还格式。目前似乎在大多数场景建议使用并适用。  也就是说 U 开头的 地址 也就是 钻石钱包的地址 如果调用其他合约 失败  钱不会退回? 而 E 开头的 会退回?

wikig: 那不就收录不了？

wikig: 分给holder好像做不到吧。太分散了欸，做个账本然后holder来主动claim可能可以？ (reply to 52314)

wikig: 额，逻辑上来说，调用失败应该是会回退的。 (reply to 52312)

wikig: erc20也是得holder来主动claim把 (reply to 52316)

wikig: ERC20也做不到直接给holder赋分红啊。交易不得多的爆炸

奶昔: 对 但是 看这个回答 让我更加迷惑了 地址的不同性 (reply to 52317)

wikig: 这个回答上面贴了具体的关于地址类型的官方文档 (reply to 52321)

wikig: 啊？可是，balance对应的是solidity里面的一个map  然后如果要修改对应的balance内容的话，得去直接修改这个balance map里面一堆 address 对应的 uint 数据吧（那不是得....爆炸 (reply to 52322)

teamo: 就 买卖跟swap有关系的 抽3个点 ，正常转账 不抽 ，3个点的金额 直接转到 一个用户地址 (reply to 52315)

teamo: 这样应该可以吧

wikig: 那不还是得在上述两个地方  jetton合约  或者  dex合约  这么干 (reply to 52325)

wikig: 那确实，玩法可花了 (reply to 52327)

wikig: 可以带一个基准值，然后写个内部增值逻辑

wikig: 笑死，确实

wikig: 但是SPL和Jetton应该是没法这么玩了

wikig: 做了规范限制

wikig: 好消息，更难rug了

wikig: 坏消息，束手束脚

wikig: 但写别的token program别人就不认了呀hhh

wikig: 虽然现在有SPL2022扩展蛮好

wikig: 但是用的人好像也不多

wikig: meme圈用的比较多，因为要收版税

奶昔: 看了 但是看了更加迷惑了 是不是 写代码 E 开头的地址 是更安全的 (reply to 52323)

奶昔: 笑死额 (reply to 52336)

wikig: 逻辑上是，但是问题就会出现，你想给一个空地址转钱，然后你拿到空地址的安全地址，一直转钱给他一直回退 (reply to 52346)

wikig: 确实啊 (reply to 52345)

wikig: 然后用户压根不敢用哈哈哈哈哈哈哈 (reply to 52344)

wikig: 作为一个用户，我真的，spl2022都不怎么敢买，怕rug

wikig: 不多

wikig: 都怂的很

未对: 0:0320309e395bb010473f4a3b50f8c4d330abc71d2130b3774c3edcb1c54a1769

未对: 这种编码的地址格式是怎么生成的啊

未对: python或者ts都可以

未对: 有没有大佬给个代码

wikig: 看起来是地址的hex格式。  可以参照一下 tonweb.utils.address tostring (reply to 52365)

裸裸: 1

08 IT-Feng-231-0283: https://crates.io/crates/tonlib 用這個開發，怎樣通過api獲得一個帳戶的seqno啊，發交易之前需要用seqno組裝交易

08 IT-Feng-231-0283: get_acount_state 後拿到的 FullAccountState 裡有 AccountState，是個 raw.accountState，裡面是 code, data, hash

Howard: 有人有這樣問題麻？ API 申請不了

Howard: 我這邊測試不同手機號都可以

Howard: shit, spammm (reply to 52425)

Alan | Torch: report (reply to 52425)

recovery: Ton web mini app 在手机端不能很好的使用 WalletConnect 组件有啥好的解决方案

— 2024-09-01 —

User<6666775889>: ton技术和eth哪个更牛？

xixi: 想请问一下有没有前端小伙伴知道 @tonconnect/ui-react 里面 modal 的 z-index 层级如何修改呀

jay: 完全可以用css覆盖。

cubone: 请问，怎么在我的商品网站上集成telegram wallet支付接口？有文档资料或者开源项目吗?

长醉三百杯: 感觉TON更牛 (reply to 52454)

长醉三百杯: 但是没有看到相关对比的资料

Yang: 你要的是這個嗎

Yang: 中文版

MCT 小客服 | Never DM you first: 为什么我的交易基本都1分钟以上才上链 (reply to 52470)

MCT 小客服 | Never DM you first: 我用的是假ton吗

Eliot🦴: 不是，这是由于最近dogs发行，导致ton链热度过高，所以才变慢的 (reply to 52479)

MCT 小客服 | Never DM you first: 怎么能把交易变快呢

Eliot🦴: 这个只能等官方提升节点服务器的性能了 (reply to 52483)

MCT 小客服 | Never DM you first: 有点失望啊说实话，这个体验

Kwin: 有tg小程序个人开发者吗

— 2024-09-02 —

卡: 大佬们，我知道0xf8a7ea5是这样来的： crc32('transfer query_id:uint64 amount:VarUInteger 16 destination:MsgAddress response_destination:MsgAddress custom_payload:Maybe ^Cell forward_ton_amount:VarUInteger 16 forward_payload:Either Cell ^Cell = InternalMsgBody') = 0x8f8a7ea5 & 0x7fffffff = 0xf8a7ea5 它在message标注出来，是起到什么作用吗？

gavin: bush 它这个只主动声明

gavin: 如果不标注出来 Tact 在编译的期间会自动生成一个

gavin: 自动生成出来的可能不是0xf8a7ea5 回导致不符合jetton规范

gavin: 所以主动声明了一下

卡: 那标注了(0xf8a7ea5)，消息体里面是写什么都可以吗？我不太理解“主动声明”这个概念

卡: 我另外想的是，这个标注是不是起到检验的作用：在编译时对消息进行crc32同样的计算，检查是否和标注的一样

cajh: 需要监听一个地址上的所有交易，怎么处理呢

gavin: yes  消息体里面写什么都可以  这个标注的意思是  当你send message的时候 如果用了这个 message struct, 会自动的把op设置成你标注的这个 你可以通过查看编译后的func代码能看到具体实现 (reply to 52574)

gavin: 没有, 不会检验 (reply to 52575)

cajh: 有没有大佬做过这个呀

卡: 好的感谢，我再深入了解一下🫡 (reply to 52577)

gavin: ton center  api 了解一下 (reply to 52576)

cajh: lt 可以当作交易同步的进度么，类似于EVM的block number (reply to 52581)

harlan: 怎么对api回来的数据进行解析，回来的类型是call之类的 (reply to 52581)

gavin: cell？ 按照对应的规则去parser 就行了, 前提是你得知道这个合约是那种规则 (reply to 52584)

harlan: 回来是这种，比如第二个cell是地址怎么解析

gavin: 用Cell解析库 类似 beginParse().loadAddress() 试试呢 (reply to 52586)

sakura: 大佬我把我forwardPayload放cell里面钱包依旧提示参数错误，是不是我body体写错了，我按ton文档写也不行 (reply to 52245)

aier: 有大佬知道dedust的swap有什么平替的方法吗？他们的sdk啥都不返回，我想搞自动化的追踪events

aier: 他们这个sendSwap方法返回的是个空。。

gavin: 你可以去看它的 swap的 tx 分析他的 payload的内容 (reply to 52589)

aier: 解析出来自己整一套？也不是不行。。

aier: 我试试

jay: /**  * 构造交易内容  *  * @param toAddress  * @param comment  * @returns  */ export function buildJettonTransferBody(   sender: string,   receiverWallet: string,   comment: string,   amount: number ) {   const toAddress = Address.parse(receiverWallet);   // 构造消息内容   const forwardPayloadBuilder = new Builder();   forwardPayloadBuilder.storeUint(0, 32); // 0 opcode 意味着我们有一个评论   forwardPayloadBuilder.storeStringTail(comment);    // 构建cell   const tranferJettonBuilder = new Builder();   tranferJettonBuilder.storeUint(0xf8a7ea5, 32); // jetton 转账的 opcode   tranferJettonBuilder.storeUint(0, 64); // query id   tranferJettonBuilder.storeCoins(toNano(amount)); // jetton 数量，数量 * 10^9   tranferJettonBuilder.storeAddress(toAddress);    tranferJettonBuilder.storeAddress(Address.parse(sender)); // 响应目的地   tranferJettonBuilder.storeBit(false); // 无自定义有效载荷   tranferJettonBuilder.storeCoins(0); // 转发金额   tranferJettonBuilder.storeBit(true); // 我们将 forwardPayload 作为引用存储   tranferJettonBuilder.storeRef(forwardPayloadBuilder.endCell());   // 返回cell   return tranferJettonBuilder.endCell(); } (reply to 52245)

jay: 看看有没有用~ (reply to 52588)

sakura: 我研究一下

Sen: 如果可以的话，想要跑2 rounds的数量 (reply to 52187)

M: 想问一下大家都是怎么个开发环境Scan the QR code in your wallet or open the link...[TON_CONNECT_SDK] Wallet message received: {   id: 2,   event: 'connect',   payload: {     items: [ [Object] ],     device: {       platform: 'iphone',       appName: 'Tonkeeper',       appVersion: '4.9.0',       maxProtocolVersion: 2,       features: [Array]     }   } } Connected to wallet at address: EQAkU0p01CPznItJGV0epOtegD1Na7W1OGEg4vIKhsKsRPjx AxiosError: timeout of 5000ms exceeded     at RedirectableRequest.handleRequestTimeout (/root/_code/ton_test_file/BridgeTon/node_modules/axios/lib/adapters/http.js:657:16)     at RedirectableRequest.emit (node:events:519:28)

M: 我死活发不了合约，感觉Ton的开发工具都好难用啊，网页的那个Nujan，也贼难用，麻了

august.l: 想咨询一个问题，就是我用官方hellow world里面的程序， code得到的address和我tonkeeper上展示的不一致  import { mnemonicToWalletKey } from "@ton/crypto"; import { WalletContractV5R1 } from "@ton/ton";   async function main() {   // open wallet v4 (notice the correct wallet version here)   const mnemonic = "void world suffer yellow planet lend exchange copy patient crouch picture enough dose expect follow obtain anxiety echo comfort depart hire forget confirm lawsuit"; // your 24 secret words (replace ... with the rest of the words)   const passphrase = '330324';    // const key = await mnemonicToWalletKey(mnemonic.split(" "));   const key = await mnemonicToWalletKey(mnemonic.split(" "), passphrase);   // console.log("public key:", key.publicKey.toString("hex"));   const wallet = WalletContractV5R1.create({ publicKey: key.publicKey, workchain: 0 });    // print wallet address   console.log(wallet.address.toString({ testOnly: true }));    // print wallet workchain   console.log("workchain:", wallet.address.workChain); }  main();

august.l: 这个会是什么问题，钱包类型和浏览器上的一致

sakura: 大佬我用你这个方法，参数为发起地址，接收地址，说明，转账数量，结果钱包里还是报错了 (reply to 52597)

sakura: /**  * 构造交易内容  *  * @param toAddress  * @param comment  * @returns  */ function buildJettonTransferBody(     sender,     receiverWallet,     comment,     amount ) {     const toAddress = Address.parse(receiverWallet);     // 构造消息内容     const forwardPayloadBuilder = new Builder();     forwardPayloadBuilder.storeUint(0, 32); // 0 opcode 意味着我们有一个评论     forwardPayloadBuilder.storeStringTail(comment);      // 构建cell     const tranferJettonBuilder = new Builder();     tranferJettonBuilder.storeUint(0xf8a7ea5, 32); // jetton 转账的 opcode     tranferJettonBuilder.storeUint(0, 64); // query id     tranferJettonBuilder.storeCoins(amount); // jetton 数量，数量 * 10^9     tranferJettonBuilder.storeAddress(toAddress);      tranferJettonBuilder.storeAddress(Address.parse(sender)); // 响应目的地     tranferJettonBuilder.storeBit(false); // 无自定义有效载荷     tranferJettonBuilder.storeCoins(0); // 转发金额     tranferJettonBuilder.storeBit(true); // 我们将 forwardPayload 作为引用存储     tranferJettonBuilder.storeRef(forwardPayloadBuilder.endCell());     // 返回cell     return tranferJettonBuilder.endCell(); }  const a = buildJettonTransferBody("0QBhIzGF2D4MZgdbtOXQogfGSnFgHO9BAIhyWZHe-CJP5du0", "0QBTX1bGgNBvDbefpaIU7n6BgEztqQnC5kCKIr8EX1fk4Ft6", "nihao", 100)         console.log(a, "a");         // 构建交易对象         const transaction = {             validUntil: Math.floor(Date.now() / 1000) + 360, // 交易有效期             messages: [                 {                     address: jettonWalletContract,  // 发送方 Jetton 地址                     amount: String(toNano("0.05")),         // 用于手续费，超额部分将被退回                     payload: a.toBoc().toString("base64") // 带有 Jetton 转账和评论的载荷                 }             ]         };         console.log(transaction, "交易对象");         // 发送构建好的Jetton转账交易         const res = await tonStore.sendTransactions(transaction); (reply to 52614)

sakura: 官方这文档也有问题，大小写

august.l: 没有paasphrase也不对 (reply to 52611)

august.l: 0QCckTFgSXzU1WKuJgETZh4YJfHKmJ01PESLFnhRvL5bRQW2 (reply to 52619)

august.l: 生成的是kQAs47qa98wkFBZnfoj6gl8D1gmVGGkGfomy_m_5j8ew-CmU workchain: 0

sakura: 我去看看

jay: payload 直接放 cell 就行，另外你可以贴失败的交易 hash。 (reply to 52615)

sakura: 我拿不到交易的hash，它在发送到钱包里直接就报错了，没有给返回

Howard: 🐶☠️ 我沒有這些數量 (reply to 52599)

Howard: 😅 (reply to 52617)

august.l: 俩个截图 应该是正确的吧 都是从tonkeeper上获取的 (reply to 52627)

gavin: 我来给你康康

gavin: 0QCckTFgSXzU1WKuJgETZh4YJfHKmJ01PESLFnhRvL5bRQW2

gavin: 没问题啊

gavin: 没问题啊 (reply to 52633)

gavin: let keyPair = await mnemonicToPrivateKey("void world suffer yellow planet lend exchange copy patient crouch picture enough dose expect follow obtain anxiety echo comfort depart hire forget confirm lawsuit".split(" "));     const publicKey = keyPair.publicKey.toString('hex');     let workchain = 0; // Usually you need a workchain 0     let wallet = WalletContractV5R1.create({ workchain, publicKey: Buffer.from(publicKey, 'hex') });     console.log(wallet.address.toString({ testOnly: true, bounceable: false }))   代码给你

gavin: 我擦 哥你这个代码我怎么感觉有点不对 (reply to 52615)

sakura: 哪里有问题，方便指出来嘛？ (reply to 52643)

gavin: const res = await tonStore.sendTransactions(transaction);

gavin: 这个tonStore是什么对象？

sakura: 这个就是我多套了一层，里面就是

wikig: 我这边好像是这样写的:          const tonweb = new TonWeb();        const jettonMinter = new TonWeb.token.jetton.JettonMinter(tonweb.provider, {address: new TonWeb.utils.Address('EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs')});        console.log(jettonMinter);        const jettonMinterAddress = await jettonMinter.getJettonWalletAddress(new TonWeb.utils.Address(account.account.address));        console.log(jettonMinterAddress.toString(true))        const jettonWallet = new TonWeb.token.jetton.JettonWallet(tonweb.provider, {          address: jettonMinterAddress        });        const tonFee = '50000000'          const seqno = Date.now()        const jettonBody = {          queryId: seqno,          jettonAmount: 1000,          toAddress: new TonWeb.utils.Address('UQAI9ack-mbNMw2oQEuiB6899ZZ1gdDAZXWzv_oIz_N7j9-0'),          responseAddress: new TonWeb.utils.Address(account.account.address)        }                console.log('🚧 jettonWallet.createTransferBody',jettonBody)        let payload = await jettonWallet.createTransferBody(jettonBody)            console.log('🚧 payload :',payload)          //Invoice payment          transaction = {          validUntil: Math.floor(Date.now() / 1000) + 6000, // 6000 sec          messages: [              {                  address: jettonMinterAddress.toString(true),                  amount: tonFee,                  payload: TonWeb.utils.bytesToBase64(await payload.toBoc())              },          ]        }        console.log(transaction)    try {        const result = await tonConnectUI.sendTransaction(transaction);        console.log("result : ",result)    } catch (e) {        console.error(e);        window.alert(e)    }  用的类库不同，语句用法也不一样。  但是大体看下来逻辑好像....好像没问题？ (reply to 52615)

gavin: 哦 用的Ton Connect 走的钱包签名广播那没问题 (reply to 52647)

wikig: 主要是payload构建那块。因为看起来我们走的好像是不同的类库。虽然结构上看好像是没问题的，但是最后打出来的payload的boc是否是有效值呢？ (reply to 52648)

sakura: 打印出来是这个"te6cckEBAQEAWgAAsA+KfqUAAAAAAAAAAEO5rKAIAKa+rY0BoN4bbz9LRCnc/QMAmdtSE4XMgRRFfgi+r8nBABhIzGF2D4MZgdbtOXQogfGSnFgHO9BAIhyWZHe+CJP5SAX14QDDHEbO"

august.l: 好的 感谢 我试试 (reply to 52642)

wikig: 这个如果decode出来是message hash (reply to 52651)

sakura: 你这代码里面的俩个地址分别是什么地址，我试试tonweb这个库 (reply to 52648)

wikig: 一个是接收方wallet地址 (reply to 52657)

wikig: 一个是jetton地址

wikig: 然后这两个地址可以计算出接收方的jetton wallet地址

august.l: 尴尬 知道我刚为啥不对了 助记词从备忘录复制过来中的分隔符 不是 空格 尴尬了 (reply to 52653)

sakura: const jettonMinterAddress = await jettonMinter.getJettonWalletAddress(new TonWeb.utils.Address(Wallet_SRC));计算的这里报错TypeError: anyForm.search is not a function是什么原因 (reply to 52660)

wikig: 你这里完整的code是？ (reply to 52662)

sakura: 看一下有没有问题  const TransferJetton = async () => {     const Wallet_SRC = tonStore.walletAddress; // 替换为你的钱包地址          // 创建TonWeb实例     const tonweb = new TonWeb(new TonWeb.HttpProvider('https://testnet.toncenter.com/api/v2/jsonRPC'));          // 初始化JettonMinter对象，用于操作特定的Jetton Minter合约     const jettonMinter = new TonWeb.token.jetton.JettonMinter(tonweb.provider, {         address: new TonWeb.utils.Address('kQAN6TAGauShFKDQvZCwNb_EeTUIjQDwRZ9t6GOn4FBzfg9Y')     });     console.log(jettonMinter);      // 获取用户的Jetton Wallet地址     const jettonMinterAddress = await jettonMinter.getJettonWalletAddress(new TonWeb.utils.Address(Wallet_SRC));     console.log(jettonMinterAddress.toString(true));      // 初始化JettonWallet对象，用于操作用户的Jetton Wallet合约     const jettonWallet = new TonWeb.token.jetton.JettonWallet(tonweb.provider, {         address: jettonMinterAddress     });      // 定义转账时的Ton费用     const tonFee = '50000000';      // 生成一个序列号，用于唯一标识此次交易     const seqno = Date.now();      // 构建Jetton转账请求体     const jettonBody = {         queryId: seqno,         jettonAmount: 100,         toAddress: new TonWeb.utils.Address('0QBTX1bGgNBvDbefpaIU7n6BgEztqQnC5kCKIr8EX1fk4Ft6'),         responseAddress: new TonWeb.utils.Address(Wallet_SRC)     };      console.log('🚧 jettonWallet.createTransferBody', jettonBody);      // 创建Jetton转账的payload     let payload = await jettonWallet.createTransferBody(jettonBody);      console.log('🚧 payload :', payload);      // 构建最终的交易对象     transaction = {         validUntil: Math.floor(Date.now() / 1000) + 6000, // 6000秒有效期          messages: [             {                 address: jettonMinterAddress.toString(true),                 amount: tonFee,                 payload: TonWeb.utils.bytesToBase64(await payload.toBoc())             },         ]     };      console.log(transaction);      // 尝试通过Ton Connect UI发送交易     try {         const res = await tonStore.sendTransactions(transaction);          console.log("result : ", res);     } catch (e) {         console.error(e);         window.alert(e);     } } (reply to 52664)

wikig: ```tonStore.walletAddress;```这里的数据类型是什么，是不是没有tostring (reply to 52665)

sakura: 转了一下格式后又报错这个TypeError: Cannot read properties of undefined (reading 'digest')，不知道什么没有

wikig: 看下哪行爆的 (reply to 52668)

aier: 大佬们，ton_core_ContractProvider.internal这个方法有替代的吗？

sakura: const jettonMinterAddress = await jettonMinter.getJettonWalletAddress(new TonWeb.utils.Address(Wallet_SRC));还是这个获取对应Jetton钱包报的错 (reply to 52669)

aier: 这玩意不返回hash啥的，我从dedust一路扒到ton_core。。。。

aier: 有没有可替换的方法我去look下

wikig: 啊这，你有打出来过你传进去的信息内容吗 (reply to 52671)

sakura: 有的，我直接写死也是报错

sakura: 我去查也有Jetton的钱包地址来着

wikig: const jettonMinterAddress = await jettonMinter.getJettonWalletAddress(new TonWeb.utils.Address(account.account.address)); (reply to 52676)

wikig: 我这是这么些的

wikig: https://test.tonspay.top/test.html (reply to 52676)

wikig: 完整的code在这里便

sakura: 你这个account.account.address就是钱包地址对吧

wikig: 是的 (reply to 52681)

sakura: 合约地址拿这个Address有问题没？

aier: 😂大佬们问个事情，如果合约里面不写，是不是evens都可以不返回的

卡: 这里V4R2版本，为什么会有两个地址

Chaincode: Ton地址有多种格式，是同一个钱包 (reply to 52698)

Jackz: 请问下部署tact

Jackz: 部署报错啥问题

Jackz: 看给出来的url（https://ton-source-prod-testnet-1.herokuapp.com/prepareTactDeployment）调用访问是可以的

卡: 好的

Eason: 请问应该选择哪个语言作为开发语言？看起来Tact是最简单的，但是并没有找到有产品在使用这个

Jackz: 我也是看到tact简单，deploy过不了😭

Jackz: 可能是我网络问题

Metas: 这个是因为你的域名不是https吧，需要用到crypto相关的api (reply to 52668)

Jackz: 看报错是网络，但我用网页访问接口是可以的，不知道咋回事

sakura: 本地开发环境是不行吗？ (reply to 52710)

Root: ton 发送交易之前如何计算费用

Root: 使用liteserver 的estimateFee api 拿到的费用与实际消耗差很多啊

Champer Wu: 看起來是adapter的問題，你用哪一家的？ (reply to 52702)

Jackz: 不太懂，就是用官方仓库（https://github.com/tact-lang/tact-template）里面的代码，准备跑一下测试 (reply to 52716)

Jackz: https://github.com/tact-lang/tact-template

Jackz: 这个

Jackz: 啥也没改，好像没看到要自己配置网络节点

Jackz: 只看到这里能改

Champer Wu: 我拉下來直接照著跑是成功的

Champer Wu: 看來不是adapter的問題

Champer Wu: 推薦可以用blueprint自己編譯出hex_boc, 然後自己選擇 adapter進行部署

Jackz: vpn的问题吗，开了全局都试了下

Champer Wu: https://www.npmjs.com/package/@ton/blueprint

Jackz: 好的，非常感谢，我再研究下

Champer Wu: https://sandbox-v4.tonhubapi.com/

Champer Wu: 這個你有辦法訪問嗎？

Jackz: 可以访问

Champer Wu: 那這個呢 https://toncenter.com/api/v2/

Jackz: 也可以

Jackz: 跟证书啥的有关系吗

Champer Wu: 那你先試著照blueprint的方式把boc造出來，使用toncenter搭配 tonClient來部署看看

Champer Wu: 這是怎麼弄出來的？ (reply to 52737)

Jackz: 报错 (reply to 52740)

Champer Wu: 哪裡的報錯？

Jackz: 就deploy的时候

Jackz: test和build都没问题

sakura: 这里显示失败是怎么回事

Champer Wu: 我有特別注意到這是透過heroku去部署的 (reply to 52744)

Champer Wu: 感覺是VPN的問題

Champer Wu: 他的DNS不匹配

sakura: 发送不出去

Jackz: 好的，我先换个服务器上试试 (reply to 52750)

Champer Wu: 簽名沒過的樣子，還沒發送tx之前pasre signature就壞了 (reply to 52746)

sakura: 我该怎么解决呢？

Champer Wu: 你的tx是怎麼簽出來的？

Champer Wu: 這個畫面的上一個action是什麼呢？

sakura: 我触发转账操作后，直接就是弹这个页面出来

Champer Wu: 對，轉帳的畫面應該是外部的Dapp才對 這看起來不是單純操作錢包

Champer Wu: 那個Dapp的簽名過程可以截圖看一下嗎？

sakura: 好像没有手动签名流程，直接就触发转了

sakura: 感觉gas花费好高

Rex: 你自己加入手动签名提示啊

Rex: 私钥就是你签名的关键

M: https://testnet.tonviewer.com/EQBLSu-qFNAAC2ERp6gtdJH46exvLD9K8xuyR4Jq7MWwTGd5 大佬们，我直接用tokenkeeper向合约转jetton，但是为什么转了以后合约收不到信号Notice的信号呢？

M: 也没错啊

Champer Wu: 這個jetton的master contract是你自己部署的嗎？ (reply to 52761)

sakura: 不是

Champer Wu: 那直接觸發minter發到自己的錢包是沒問題的對嗎？

sakura: 现在转jetton代币没问题

Champer Wu: 我晚點用你的代碼試試看

Champer Wu: 我看最新的一筆交易是contract called，看起來是是成功的 你是說轉jetton進去 scaner看不到轉帳資訊嗎？ (reply to 52770)

M: 不是，是jetton转进去，收不到TokenNotification 这个信号，这个amount没增加 (reply to 52777)

Champer Wu: 你的合約有open source嗎？看方不方便分享出來大家一起檢查一下

M: https://github.com/godemodegame/ico/blob/89f7c39b12f82947cb22c71298077b772568c483/contracts/ico.tact#L39就这个

M: 我本来是自己写的一个存取的合约，发现也是怎么转都收不到notice这个信号，就去网上找了一个这个合约试试，结果发现这个也不行，我怀疑是不是我的操作有问题。我就直接tokenkeeper直接对着合约地址转账就完事了。也没加什么参数。代币也是我用官方的这个https://minter.ton.org/?testnet=true 发的

卡: 大佬们，TON的钱包有多个版本，不同版本之间是独立。为什么不进行兼容呢？用起来好奇怪

wonderful: 有大佬知道，navigator苹果点击屏幕振动好像没用，怎么解决

Vera: 想跟大家请教一下 请问有办法在链上区分原生的@wallet托管钱包和非托管钱包吗

古风背景书: 没有看懂 (reply to 52805)

wikig: 意思就是在问，@wallet 和 @tonspace 的钱包类型及格式上有无差异 (reply to 52809)

wikig: 那有没有 @wallet 的地址发一个出来看看。我好像因为kyc问题拿不到我的wallet了哈哈哈哈哈

Vera: kyc可以直接填 也不太涉及核心信息基本填了就给过… (reply to 52812)

Vera: 地址格式一样的 UQCb1exwcRr0DKVFpb-YkbG2EGB6vA-TDh6x-TIrLeIp3F7t (reply to 52812)

Vera: 对 或者有第三方标记托管钱包的也行… (reply to 52810)

wikig: 主要是我也不记得，有没有特殊标识了，或者说使用的wallet type 有没有区别 (reply to 52815)

wikig: 如果没有用独立的wallet type 那我认为就没法，辨识了

🐮: 写个小游戏的话  是用games好  还是直接用web apps就可以

gavin: webapps (reply to 52819)

Vera: wallet type好像就是标记了version 我也没分出来。。 (reply to 52817)

Alan | Torch: 跟大家分享我們 Torch Finance 研究團隊對於 Ston.fi v1 和 v2 的解析（英文版），以及 Ston 在技術面遇到的潛在挑戰，我們之後也會持續在社群進行技術討論：  https://blog.torch.finance/ston-fi-a-pioneer-in-the-ton-ecosystem-4a4cfb29bf4f  很榮幸能被 TON 首屈一指的中文社群 Alpha TON 轉載： https://t.me/alphaton/2378

— 2024-09-03 —

User<6106615034>: 请问 TG 怎么获取用户注册时间呀?

gavin: 根据userid 估算出来 (reply to 52873)

User<6106615034>: 好，谢谢我推算试试 (reply to 52874)

gavin: 收集下2013年至今的用户id库, 然后根据位置能算出来 (reply to 52875)

aier: 大佬们，求教，一个地址咋看是属于那个类型的？

aier: 从前面几个字符看？

gavin: https://ton.org/address/ (reply to 52881)

aier: 我是想问有代码吗？

Rex: ton支持12位助记词不

aier: 大佬有知道具体实现的方法不？ (reply to 52883)

🍅... 👾 BITS: ton 本身不支持12助记词，市面上的多链钱包12助记词生成ton私钥是用bip39+ed25519生成的。但不保证通用性。 (reply to 52885)

live: hello，有人知道验证jetton的具体流程是怎样的吗？提交的位置在哪啊？

gavin: 哥 私钥怎么可能是 sha256呢 (reply to 52892)

gavin: ok

Root: 转账前 怎么估算费用呢,

Root: liteserver 的estimateFee 不好用

Root: 我现在只做了主币哈 目前代码里面没有设置fee进去, 难道是这个参数?

Root: 我现在这个给的0

Root: 测试链可以交易成功

wadaxiwa: 大家有遇到这个情况嘛

wadaxiwa: 今天转账啥的都不行了

wadaxiwa: 昨天还可以

wadaxiwa: 测试网

Root: https://tonviewer.com/UQAjs5qD7pKJaLlbQOFkL2YZMF3LWo_TqRvfvBRDwWQpZ3t9 再请教个问题,我这个钱包这样是被盗了还是怎么

Rex: 谢谢,就是为了兼容现有的钱包 (reply to 52888)

Root: 不是 我的钱包 转进来19.99 之后 部署合约被转走了. 用的插件下载的tonkeeper (reply to 52916)

Root: 🥲我以为是tonkeeper的什么机制

Root: 也没记得点过什么钓鱼链接

Root: 这个我知道😂,我想问我这个20ton 就是被盗了?还是部署合约到什么地方了

allen: 测试网，我今天也发生了这个问题，一直报这个错，有大佬知道为什么吗？ (reply to 52909)

wadaxiwa: 应该是测试网坏了

wadaxiwa: 我用mytonwallet也不行

wadaxiwa: 最近的交易记录停留在8小时前

wadaxiwa: 有可能 (reply to 52934)

David: 你这个20ton是转到这个地址了：https://tonviewer.com/EQDUr2CHioOuwfUiZInvaJh2s4dU21fKfOeOzy3wv6PtLCIn (reply to 52927)

David: 估计是地址输错了，这个是个空地址，甚至还没部署合约钱包

sakura: 交易完成后返回的boc如何解析文档在哪儿

wadaxiwa: 我研究下，谢了哥们～ (reply to 52942)

Root: 这20ton是我跟公司财务要的😂,本来拿来做测试的,只检查了一下有没有到账,后来就没开过钱包.再打开的时候就是发生出币的那天,我2点钟打开的钱包发现 中午被转走了 (reply to 52941)

Root: 实在没想到哪里泄漏住记词

gavin: 还好才20个ton

gavin: 不是20wton

Root: 有时间重置下电脑

Root: 🥲

gavin: 不过看你这个行为不像是被盗

gavin: 是不是自己搞了什么误操作了

David: 对，你之后看看这个地址有没有再转出，没有的话估计是误操作，有转出就是被盗：https://tonviewer.com/UQDUr2CHioOuwfUiZInvaJh2s4dU21fKfOeOzy3wv6PtLH_i

Root: 没记得 看到到账之后,钱包就没再开过,本来等有时间测试下正式币转账的

Root: 结果再打开就没了

Root: 而且我测试的助记词是12位的

Root: 我们钱包是12位助记词,最近在接ton 只能从12位派生

Root: 就上面那个同学说的  bip44 +ed25519

Root: 不是

Root: 丢的这个是tonkeeper生成的

Root: 直接自动生成的 官方规则

Root: 可以看trust的规则

Root: trust 也是12位

Rex: 这样可以确定现有的钱包地址能生成对应地址吗 (reply to 52963)

Rex: 有没有例子可以参考

Root: 肯定的

Root: 能兼容trust 就行了

Root: 😂已经搞好了

gavin: 20个ton找回来了吗？

Root: 没

Root: 大概率被盗了

Root: 那笔交易发生的时候我在午休

harlan: 测试链挂了？转账怎么都失败了

gavin: 是不是你上次在群里提问的时候 把私钥公布了 - - (reply to 52984)

Root: 没有吧

Root: 我一直问的是矿工费问题

Root: 链没挂

harlan: 钱包转账

Root: 钱包不清楚

Root: 我用的toncenter的服务

Root: 助记词使用ed25519派生私钥 派生路径m/44'/607'/0' 就可以拿到和trust一样的地址了. (reply to 52980)

Root: 不同的派生方式拿到的私钥不一样

Root: 你说的私钥是什么私钥

Root: 😮根私钥?

Rex: TON的私钥还有个问题 需要以0开头 这个路径可以实现吗 (reply to 53002)

Rex: 我对这个不太懂

Rex: 实在不行就需要给用户生成单独的助记词了

Root: 有个ed25519HD,我的根私钥用这个派生出来的,我记得相同路径下好像是和Hdwallet 派生出来的不一样的.得再确认下

Rex: 哦·我是说之前我用生成钱包的方式,用BIP39的助记词生成出来的私钥 需要验证私钥的第一位是不是0

Rex: 如果不是0的私钥是无法导入到其他钱包的

Rex: 如果不行还是不搞这种兼容了 直接但是给一套助记词好了·

Rex: tonkeeper 导入助记词的时候会验证 不符合要求的就会说助记词不对

Y: Toncenter V3的/nft/items 无法获取最新创建的NFT信息, 已经持续7个小时了,,  有没有管理 管管啊?

Y: 感觉杜罗夫被抓后 出现好多问题啊,

Rex: 好吧 那试试看 对这个不太懂

Y: 网站没有任何提交问题的渠道呢 (reply to 53027)

Y: 不是429  这个我多key多IP轮询 解决了,,

Y: 官方网站的测试也是一样结果, 返回空列表,  7小时前生成的NFT都可以查到, 最近7小时的都差不到,   提交到官方了,, 看看什么时候解决,,,

Y: 钱包的 Dashboard也废了,,

Y: 真是没一天是消停的,,

sakura: 只有测试链出问题了吗？

wetkin: 测试链也挂了

Doflamingo: 请问下各位大佬有人知道如何管理已经在app center上架的app吗？比如说更换里面的图片之类的

Root: 你说对了 还真是有误解. 不过 ed25519hd 派生过程和普通bip39 hdwallet的派生过程不一样也是对的🥲 (reply to 53011)

Root: 结果就是相同的助记词和路径无法推导出相同的私钥

J: {   "status": 500,   "body": "{\"ok\":false,\"error\":\"LITE_SERVER_UNKNOWN: cannot apply external message to current state : External message was not accepted\\nCannot run message on account: inbound external message rejected by transaction CA1D9EDEEF40B3A9DBD9082F3767859547C3CE0BF641D0iyyrtA3CF06FB309:\\nexitcode=8, steps=77, gas_used=0\\nVM Log (truncated):\\n...1CF16\\nexecute PUSHCONT \\nexecute IFELSE\\nexecute DROP\\nexecute NEWC\\nexecute PUSH s4\\nexecute STZEROES\\nexecute STSLICECONST xC_\\nhandling exception code 8: cell overflow\\ndefault exception handler, terminating vm with exit code 8\\n\",\"code\":500}" }  广播message偶尔会遇到这个异常，有佬遇到过吗

aier: ？？？

aier: 有大佬知道ston.fi咋回事不？我1个ton换0.89个ston

aier: 这是明宰啊

aier: 还是说ston和ton就不是1比1的？

wyz: 割割 你ston1个可以换1.1个ton 比例是一样的 别慌 不是对等1：1的 (reply to 53051)

gavin: 我有一个小白问题  不用ed曲线行吗 (reply to 53056)

Root: 怎么说 我是菜鸡.很多概念不清楚.就说下我现在使用过程中遇到的.  这玩意是个golang的工具库.有几个链都是基于这个库的规则派生私钥的. 就比如ton的推导.我这边参考的是用trust做对比的.就只能用这个所谓的ed25519HD

Degen: tact咋解析exotic类型的cell

Root: 我看了下代码,他里面的确没有曲线的东西

Root: 我用这玩意的目的就是为了和别的钱包推导出一样的地址来

Root: 你说的那种也是可以的

gavin: 就是因为大家都用成了一个共识了是吧。。。 (reply to 53064)

DaDa: 本周四 「TON生态之夜」计划主题：【如何看待TON生态的撸毛大军？】  欢迎 TG/TON 生态的项目方、开发者、投资人、研究者加入一起交流讨论。  有兴趣参与的伙伴，请给我私信，有信必回！

Root: 其实本来就可以用bip39推导出来, 再直接用这个私钥的. 但是这样的话 你的助记词导入别的钱包的时候,拿不到一样的地址了

Root: 你说的 bip32的hd标准就是现在通用的标准吧

Root: 举个例子 eht现在派生地址 都用的这个

Root: 是吧

Root: 嗯他们新的钱包可能用了这个标准.这个我没搞过

Root: tongolib 我看了 就是你说的

Root: 没有hd

Root: 我的派生就只是为了迎合trust

Root: 不同的链不一样

Root: 我用ed25519hd 可以推导出一样的地址来

Root: 用bip32不行

Root: 相同的路径,相同的助记词

Root: 就是 大概率他不是bip32的标准

Root: 就是私钥  然后 我傻逼 我说错了

Root: 私钥的确不一样

Root: 我误导你了

Root: 这个我还真不清楚 他不叫什么ed25519hd 我重新看了下

Root: 😂这是我给他取的名字

Root: https://github.com/blocto/solana-go-sdk/blob/main/pkg/hdwallet/path.go 来源是这里

Root: 这个是啥,😂真心请教

Root: 细说

Root: 膜拜= =  有几个链都是用的这个派生的.

Root: 我这里包括迎合官方或者trust

gavin: 关于钱包这个如果你用的是golang 可以看看okx 开源的这个项目 https://github.com/okx/go-wallet-sdk 很全

Root: 我如果再接新链我就来着抠代码

Root: 如果有重合的话

Root: 😂

gavin: 我觉得这种非常底层的东西尽量不要自己去实现，万一有个bug岂不是很麻烦🤣🤣

Root: 太底层的没有,就封装一下而已

Root: var masterKey = []byte("Bitcoin seed")

Blue Sky: 0

sakura: 怎么在tg小程序这里面加功能

DaYuan: 有推薦在 mini app 中取得 user wallet 中資產的方式嗎？  目前在看 tonx 跟 ton center 但好像沒辦法抓到全部

品誉: 我想问一下，有没有golang的库可以直接实现mint jetton，有的话还麻烦指点一下

gavin: https://github.com/okx/go-wallet-sdk (reply to 53133)

Rex: 我就是这种有洁癖的 我要自己撸出来的才有安全感，自己用就好 (reply to 53120)

Rex: 有BUG也是自己搞出来的 没那么难过

gavin: 是的 这样也不错 正好能熟练下 (reply to 53136)

gavin: 主要是担心把公司的币搞没了 到时候只能跑路 (reply to 53137)

品誉: 这个目前没看到支持TON链呢 (reply to 53135)

LV: 想问问 如何在tg小程序里监听这种tg自己的弹窗被点击或者弹窗关闭这种事件

gavin: https://github.com/okx/go-wallet-sdk/blob/main/coins/ton/ton/jetton/jetton.go  sorry 刚看了下 它这个实现的确实不完善 好多功能都没 (reply to 53140)

品誉: 是的，他这里面的代码都是tonutil库的

Root: 用tongo

DaYuan: 我目前看應該只有 小程序本身的視窗可以被監聽，也許要去找一下有實做出來的小程序看一下源碼 (reply to 53141)

品誉: 我再仔细看一遍tongo，之前看过一边没看到mint jetton相关的 (reply to 53144)

sakura: 你们有给tg小程序的这个菜单加功能过没

maiya: ton跟okx挺亲密的

熊猫头: 只能加setting，其他没法自定义 (reply to 53147)

teamo: 这个接口网站打不开了 ，也没人管吗

Rex: 什么服务器 嘎嘣脆啊

sakura: 只能加这个是吧，但是为啥提示我6.0版本不支持设置，我直接用这个的链接不是最新的吗telegram-web-app.js (reply to 53149)

teamo: 就这还一堆人用，三天停2次 (reply to 53152)

熊猫头: 写了7.0+支持啊

熊猫头: 我用的@twa-dev/sdk

熊猫头: 你不会在浏览器打开的吧

teamo: 我想 写个滑点代币合约，求指导 😂

User<6301135112>: 感觉toncenter的接口不是很好用

User<6301135112>: tonscan.org关键信息都显示不出来，有些页面还套用tonviewer的接口

sakura: 我这样导入的为啥不是最新版本的<script src="https://telegram.org/js/telegram-web-app.js"></script> (reply to 53155)

熊猫头: 你如果是在浏览器里直接测 webapp的版本信息是空的 所以他判断你是6.0版本

Tasha: 各位大哥，能帮我看下这个获取代币余额方式对不对呢，你们是怎么获取获取代币余额的，我这边都获取不到。好累，用的tonweb

Tasha: 第一个实例化合约，methods里面没有方法 (reply to 53166)

gavin: 你是要看ton的余额 还是某个jetton的余额？ (reply to 53166)

sakura: 用手机就好了，主要是一开始弄了没生效，以为哪里有问题 (reply to 53165)

Tasha: 想要查询的jetton，比如JTT这个

gavin: 那不是调用 get_balance 都没这个方法吧 (reply to 53171)

cajh: get_wallet_data

gavin: 对用 get_wallet_data

Tasha: 谢谢大佬，我看这个是能查出来，上面那个用的chatgpt给的 (reply to 53173)

jems: 你們那邊能訪問測試鏈嗎

cajh: chagpt func 的资料是非常少的

cajh: 最好看文档

Tasha: 好的，继续摸索中，感谢

aier: 求教大佬们，ston.fi里面的

aier: get_pool_address方法中，要是我一个地址是ton，另一个是jetton

aier: 这种情况下咋输入？

Jerry: 请教一下，这个Root Hash 和这个file Hash 的含义是啥

卡: ✅ Compiled successfully! Cell BOC result:  {   "hash": "88627b1e2ac62051dbc1fc78b05b8b0043a7407a175f8dc12187fbc7155449cd",   "hashBase64": "iGJ7HirGIFHbwfx4sFuLAEOnQHoXX43BIYf7xxVUSc0=",   "hex": "b5ee9c72410106010044000114ff00f4a413f4bcf2c80b0102016202050202ce0304002d46c3120d749c140f263d33f30ed44d0d33f3001a0f0028000d4c8cb3fc9ed5480011a1e9fbda89a1a67e61a5993a25" } 这个hex就是合约对应的TVM字节码吗？

aier: 混进ston.fi群问了，传pton (reply to 53196)

wikig: 话说问一下群里各位大佬。像dogs这种判别用户注册年限1

wikig: 用的是telegramID递增然后模糊判断的方案吗

wikig: 那岂不是误差很大。

DaYuan: 查了下 需要很多樣本來判斷

wikig: 比方说？ (reply to 53212)

gavin: 我知道

DaYuan: https://github.com/karipov/creationDate/

gavin: 首先要收集尽可能全的id范围 从2013年

DaYuan: 我目前看到這個實作比較完整

gavin: 允许有误差 误差不会很大的

gavin: 这个项目没有开源id库 (reply to 53216)

gavin: 跟没有一样

gavin: 核心的是id库

wikig: 确实，还是得要ID库

gavin: 通过id范围，首次发言时间，头像创建地址 可以大数据推算出来一个

wikig: 作为基础的判别一句

wikig: 毕竟这玩意儿递增的

gavin: dogs 也是一误差的 他是到year

gavin: 都不是月

DaYuan: 我自己的需求是年即可，但樣本還是太少了 😭

wikig: 很合理。毕竟tg的用户增长也是浮动的 (reply to 53227)

wikig: 那没事了，那还不如直接根据号段斩成几段呢

DaYuan: @creationdatebot 這個不知道是怎麼算出日期的

wikig: 估计也是做精准增流

wikig: 就是拿每周的telegram用户增速，然后递增一个内部大致ID ？

wikig: 然后做indexer区间入库？

lin: 有没有什么开发文档呢

gavin: 这个 creationdatebot 就是你刚刚发的那个开源项目, 核心是那个id映射的文件 (reply to 53232)

Yun: 这玩意不对吧，我号好久前的了，它说我今天创建的😂 (reply to 53232)

alex: 请问一下，首页这个创建应用，进去是个errorcode该怎么办

Y: 又开始作死了,,,

Happy: ton套得太死了有没有什么币可以做短线收益高的

User<7051737661>: 现在只有合约😂 (reply to 53288)

User<6150550005>: I have full exp about dapps, nft project, bots and mini app.  plz letme know if you're interested in.

超人: 这个抽奖机器人的奖品能提现吗

— 2024-09-04 —

gavin: 果然跌麻了, 今天都没人提问了

Jackz: 合约里面发送ton，一直回弹，是咋回事

Jackie: 大佬们，在手机TG里，TONCONNECT-UI是不是没办法在TG小程序里用啊

Jackie: 我在PC端都测试的正常的，一到手机端就不行了

gavin: 可以用啊 (reply to 53328)

Jackie: 看看代码，应该还是发送交易的问题 (reply to 53329)

Jackz: 地址是存在的，tonkeeper里面生成的 (reply to 53329)

Jackie: 之前我也碰到过，一样的代码，就是少了一个空行。。 (reply to 53333)

Jackz: 发送这里有啥问题吗

Jackie: 这里没问题吗，我不知道你用的哪个，这个地方应该是个整数

Jackz: 可以小数吧

Jackie: 我不知道ton函数是啥作用，但这个地方应该是个速度

Jackie: 整数

Jackie: value

Jackie: https://t.me/runroolbot/runcoolgame

Jackie: 这个用手机TG打开看看，能不能连接成功

Jackie: 哪位铁子试一下

gavin: 我给你试试

Jackie: 我死活不能连

Jackz: 这是官方的例子，是可以的

gavin: 能连

gavin: 交易都发能拉起

Jackie: 我。。。。

Jackie: 那是我手机的问题？

Jackie: 不能啊

Jackz: 可能tg版本问题

Jackie: 刚升级到了最新版本的TG。。不行 (reply to 53356)

Jackie: 报红了

Jackie: 呼出连接界面一点就报红

Jackie: 有没有大佬碰到过。。

Jackz: 这里啥意思，看到nonexist，有没有大佬知道

Jackie: 不存在啊

Jackz: 合约直接不能转账ton，tookeeper可以转

Jackz: nonexist是没有任何数据

Jackz: 不是地址不存在

Jackie: 地址不存在存在不存。。。只有使用和未使用，也就是有和没有数据

Jackie: 这个地址映射是数学意义上的存在

Jackz: tookeeper转账之后变成了uninit，还是回弹😂

Jackie: uninit也可以接收转帐的 (reply to 53371)

Jackz: 不知道我这个为啥一直回弹

Jackz: 应该是这里有问题 (reply to 53334)

Jackz: 看不出来😭

xixi: 我打开正常的没报错，也没遇到过这个错误 (reply to 53358)

User<6301135112>: 没初始化地址

User<6301135112>: 发送把回弹标志设置为false

Jackz: 好的，我试下

xixi: 有没有人遇到过 Timeout reached 1000ms 的错误啊，@telegram-apps 里报出来的错误，并且好像只有部分手机客户端会出现

Jackz: 感谢大佬，可以了 (reply to 53378)

User<6301135112>: 好的

User<6301135112>: 最好手动初始化一下新的地址，交一下租金啥的

Jackz: 这个是对方的地址，做一个批量转账功能，还要给对方交租金？

User<6301135112>: 没事，转账的话可以无视对方地址产生的各种问题，只要你不设置反弹状态

Jackz: 好的，感谢

User<6301135112>: 一般fake转账才会想各种方法让对方接收时产生异常，好弹回自己的资产

Jackz: 👌

Jackie: 难道是因为我手机太旧了？ (reply to 53376)

xixi: 你看看你的tg版本

Jackie: 不对啊，你要点击连接wallet in talagram才会报错 (reply to 53376)

xixi: 这个参数里面有一个 tgWebAppPlatform

Jackie: 要点击connectwallet,然后点击wallet in talagram (reply to 53392)

Jackie: 这时才会报错

xixi: 我能连上

xixi: 没报错

Jackie: 😂 (reply to 53398)

Jackie: 。。我。。

Jackie: initdata里这个 tgWebAppPlatform参数？

Jackie: 直接看TG版本应该也行吧

xixi: 不一样吧

xixi: 是这个 tgWebAppVersion=7.8

xixi: version

xixi: 但是你这里是钱包连接的问题应该跟 tonconnect sdk 有关？

Jackie: initdata解出来，没看到这个参数 (reply to 53406)

Jackie: 等等

Jackie: 真的没有 (reply to 53406)

Jackie: user=%7B%22id%22%3A1811656202%2C%22first_name%22%3A%22Jackie%22%2C%22last_name%22%3A%22Lee%22%2C%22username%22%3A%22CryptoGamesV1%22%2C%22language_code%22%3A%22zh-hans%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=4497436555669590667&chat_type=sender&auth_date=1725424020

xixi: 直接用这个复制出来看一眼就行了

xixi: 不过我感觉你这个不是sdk版本的问题

Jackie: 就没有你这些输出。。

Jackie: 所有输出 就这点

xixi: 你要在这里自己输入呀

Jackie: 你是用手机TG连的吗 (reply to 53413)

Jackie: PC上没问题的，我也没问题。。就是手机TG才有问题

宝儿: 被攻击了

xixi: 刚刚是pc，但是试了一下手机也可以 (reply to 53419)

Jackie: 😭

Jackie: 我要扔了我这个破手机。。

sakura: 出现这种情况是什么原因呢？

Jackie: 参数错了 (reply to 53429)

sakura: 我这是转usdt的，我测试转Jetton代币都可以，换成u就不行了 (reply to 53430)

Jackie: 余额不足了吧。。。 (reply to 53431)

sakura: 我有2u余额，0.2ton，我换测试网的u好像也不行 (reply to 53432)

Jackie: 之前我碰到过的就是余额不足 (reply to 53433)

sakura: 第一个是转aiotx，第二个我换成测试u地址怎么发起的是ton (reply to 53435)

Jackie: 啊，你地址改了吗

sakura: 改了

Aaron: 请教一下，在哪里能获得测试币？

wiwi: 測試的只有 ton 可以領沒有 token

sua: 各位大佬  ton无法用一个助记词生成多个地址吗

sua: 我改了walletId后就无法发送交易了

Aaron: 测试的ton在哪里能得到？ (reply to 53444)

sua: 找机器人领

Aaron: 提示一下吧，那个机器人，多谢哈

tg3: @testgiver_ton_bot (reply to 53449)

sakura: 有没有大佬帮我看看这笔交易有什么问题4fe365e18b57b964911947ea6ee2af30c4e3d94a29af4327548ede4511924419

User<6301135112>: 目标地址没初始化，发送设置回弹

sakura: 啥意思，我该做什么处理？ (reply to 53456)

User<6301135112>: 你的目标地址是不是这个 EQC7Z6t57ZWDYPaMFYa6py3-4S88FyLn1FgvprAGXkmdrxRK

sakura: 接收者地址吗？

User<6301135112>: 对

sakura: 我是这样写的

User<6301135112>: 这种情况下，目标地址如果没初始化，资产会跟着消息会回弹回来

User<6301135112>: 明白意思了吗

teamo: https://toncenter.com/api/v3/index.html

teamo: 用的 三方接口地址 都挂了

teamo: 你们都是自己搭建的 节点 拉数据吗

User<6301135112>: 想成功可以做以下两种动作(2选1)： 1.发送时，回弹标志位设置为false 2.提前激活目标地址

User<6301135112>: 只是面板挂了，接口没挂

User<6301135112>: v2的面板是好的

sakura: 就是说我要使它不弹回我得给body里带上bounce：false操作

User<6301135112>: sdk应该可以设置

User<6301135112>: 你研究研究

sakura: 嗯，好的

teamo: 我前端 用 js 写的 ，谁那有 代币转账的 方法 让参考参考吧

sakura: 谢谢大佬

teamo: 谁有 js  写的 代币转账 发放 ，让参考参考

Metas: 群里有@orbs-network/ton-access的朋友吗？用这个rpc超限好像会封域名

Metas: 这个域名的rpc会一直429，换个域名就正常

M: 想请教一下，为什么我在转帐的时候传payload，在合约的Notice里解析不出来呢？结构体解析不出来，直接解析slice也解析不出来，是哪里出问题了吗？ (forwarded from M)

User<6301135112>: 解析缺少判断

Aaron: 请教大佬，目前创建地址的时候workchain_id是选择-1还是0，看文档说0 basechain 的手续费便宜，有这个说法吗？是要都创建0的地址吗？那什么时候会选择-1 主链来创建地址

M: 什么意思，解析前先判断cell是不是空吗？还是怎么判断 (reply to 53508)

User<6301135112>: 稍等

User<6301135112>: https://docs.ton.org/develop/dapps/cookbook#how-to-parse-transactions-of-an-account-transfers-jettons-nfts

User<6301135112>: 看这个

User<6301135112>: @看上面的文档 (reply to 53511)

User<7477302810>: 其实手续费没啥区别 (reply to 53509)

User<6301135112>: jetton body在解析完地址后，有一个标志位提示后面的payload，差异化就这这里

User<6301135112>: 除了这一点要注意以外，还需要注意一点就是正式解析payload时先判断是否为空，为空就终止解析

Aaron: 选择-1还是0 有什么决策依据吗？还是随便选，会对交易和后续环节有什么影响吗？ (reply to 53518)

gavin: 通常你用的都是0

User<7477302810>: -1是只能运行主链，0的话是工作链，你考虑地址选择的话，主要看你合约和资产在那个工作链 (reply to 53521)

gavin: -1 是 Masterchain

gavin: 绝大部分情况你是在 工作链

Alan | Torch: 你可以去查查部署在master chain 的 library cell （USDT 合約目前就是這樣使用），透過library cell 可以減少部署重複程式碼的手續費，我們 Torch Finance Research Team 之前有發布教學，歡迎參考：  https://medium.com/@ipromise2324/ton%E7%AF%80%E7%9C%81gas-fee%E7%9A%84%E7%A7%98%E8%A8%A3-%E5%A6%82%E4%BD%95%E5%88%A9%E7%94%A8func%E4%B8%AD%E7%9A%84library-cells%E5%B0%87%E6%88%90%E6%9C%AC%E9%99%8D%E4%BD%8E%E8%B6%85%E9%81%8E3%E5%80%8D-19908e4ae0eb (reply to 53521)

User<6301135112>: -1不是给我们用的，哈哈

gavin: https://docs.ton.org/mandarin/learn/overviews/ton-blockchain

gavin: 贵族用 哈哈哈 (reply to 53527)

User<6301135112>: 👍

Alan | Torch: Gas 貴了 1000 倍，但是如果使用同一份程式碼部署超過 1000 份就回本了 ，例如 jetton wallet

IIIllll: utf8x{004D595F4A4554544F4E} 大腿们, 这种怎么解构啊, 应该是个字符串才对..

M: 感谢，我再研究研究 (reply to 53520)

User<6301135112>: 好的

IIIllll: 好的非常感谢

crimant: 请问代币如何认证，钱包显示未认证令牌

黄鹤楼: 现在行情就这样，都在跌 (reply to 53549)

M: 大佬，我在右边用ts解析交易的数据，是可以解析出来的，但是左边红框是tact合约中解析的，解析不出来，let forwardOp = stake.forward_payload.loadUint(32);都没过去，下面的信息都没打印。这会有哪些原因导致的呢？我是想在合约里做判断的。 (reply to 53538)

M: 合约是进去了的，amount我发了80肯定也够，就是解析这一步过不去，不知道咋回事

Champer Wu: 延伸討論下去的話，還有 1 2 3 4 5 6 只是官方還沒做 根據一些官方的說法，他們是打算做 the blockchain of blockchain (reply to 53521)

Champer Wu: 他們想把其他公鏈的資料鏡像過來，讓ton blockchain同時是自己的主鏈也是別條鏈的layer 2

Champer Wu: IHR Fee這個欄位就是為了這件事情預備的

gavin: 给你看看我写的代码

gavin: 你参考下 我的解析成功过

gavin: 很简单的一个东西

gavin: 好像是你要先 loadref 然后在处理下

M: message(0x7362d09c) TokenNotification {     queryId: Int as uint64;                   amount: Int as coins;     from: Address; // not jetton wallet     forward_payload: Slice as remaining; // Comment Text message when Transfer the jetton  }细节就是，我在合约接受这个信号的时候，想要解析这个forward_payload，但是tact解析不出来，我不知道为什么，是我的tact版本问题吗？我怀疑是不是这个as remaining这个东西搞的鬼

gavin: 你说的没错 就是 as remaining 的机制

M: 嗯嗯， 应该是这样，我试试看 (reply to 53571)

gavin: 类似包皮一样 包了一层

gavin: 把这个包皮割了

gavin: 你就能得到

c: "proof": {         "timestamp": 1725370696,         "domain": {             "lengthBytes": 11,             "value": "onetime.dog"         },         "signature": "uDmrXGtRjujjpBfKPftS3HxN0A2RoM6OycR1Q40+Bo7BPp3miTJk/aAzlYuJEXby8pt85Zlv8dtgI2ACFilTAw==",         "payload": "jlnVMg8XwcyAmudKpqZHRHdbi7VT9NVFcpvumbmWBzQ="     }  有大佬知道怎么 对这个验证嘛 是连接钱包获取的

gavin: ton (reply to 53549)

M: 感谢几位大佬，搞定了,确实是这个道理 (reply to 53577)

gavin: 不客气 (reply to 53581)

gavin: 后面还有很多坑

gavin: 慢慢踩

teamo: send_raw_message(msg1.end_cell(), 17); ;; revert on errors   send_raw_message(msg2.end_cell(), CARRY_REMAINING_GAS); ;; revert on errors

teamo: 我想 send  2 条消息 ，第一个消息的 默认是 应该选 几啊

Champer Wu: 你可以參考這裡 https://github.com/TonoxDeFi/open-contracts/blob/main/contracts/messages/messages.func (reply to 53590)

Champer Wu: 那IHR是為了什麼呢？ (reply to 53597)

Rex: 也可以说就和美女一样一层一层的脱了·最后都差不多 (reply to 53575)

gavin: 哥你研究的好深啊 (reply to 53603)

Rex: 你们在说什么 我怎么看不懂

gavin: 我就想问 赚钱了吗？ 有没有好方法 (reply to 53606)

Champer Wu: 都是這裡處處是大佬啊，受教了

Null: 麻了

Champer Wu: 還有這邊 https://docs.ton.org/develop/smart-contracts/messages#example-with-use-cases 參考jetton的作法的話，他只用了 1跟2 https://github.com/ton-blockchain/minter-contract/blob/074b7d5f45f43552146fdf54f972020b2757bc18/contracts/jetton-wallet.fc#L141 (reply to 53593)

gavin: 支持

User<6301135112>: 亏麻了 (reply to 53609)

User<6301135112>: @错了，亏麻了 (reply to 53549)

Chirs: 请问在开发mini app的时候，怎么解决iPhone的底部安全区域的问题的，我试了一些参数，似乎不起作用

Champer Wu: https://t.me/devs_zh Mini app可以到這裡發問 (reply to 53627)

User<6879147844>: 请问下大佬们，使用tonweb获取jetton wallet过程中报错是咋回事？ 使用官方的代码，exit_code是 -13，没有返回0

gavin: 链没选错吧 (reply to 53652)

User<6879147844>: https://github.com/toncenter/tonweb/issues/231  使用官方的代码，但是返回错误吗是-13

User<6879147844>: 有大佬遇到过这个问题没？🫡

User<6879147844>: 没有的，api请求地址是 https://toncenter.com/api/v2/jsonRPC  address也是线上的USDT地址 (reply to 53654)

Coder: 有大佬知道，用户进入小程序的，initdata没有hash是因为什么呢？

User<6879147844>: 你怎么 init 的 (reply to 53661)

Coder: 用户通过小程序链接进入，取到的就是没有hash的

熊猫头: 你从哪取的 跟缓存对过吗

— 2024-09-05 —

teamo: 我第一条 用1 第二条用2 的话 转账都不痛了 我是 transfer 里面 第一条 用2 ，第二条 用默认的 64 ，钱可以发出去 ，转100 ，第一笔10的 不知道那了，第二笔90的到了 这是因为什么 (reply to 53615)

august.l: 想咨询下 我们这个测试的话 怎么进行mock调用呢？

august.l: 这个有个案例吗？ 就看到fork相关的函数 没有找到怎么mock 调用的 (reply to 53738)

Vic: 关于dapp 钱包因为TON是使用24个助记词， 但早期开发的时候，其他链上注记词创是12个注记词， 所以现在的问题是dapp wallet 创建的使用者会变成 有一部分是24注记词创建的地址， 一部分是12个注记词创建的地址。 这样会无法兼容，请问业界怎么排除这个问题。 在不影响既有的12个注记词的使用者。

ztwq: 那就可以兼容 12 词，只是约定了后面 12 词是一样的

gavin: dapp wallet 需要关心某个钱包地址对应的助记词的个数吗？ 对于用户来讲体验是一样的吧 无非是签名的时候选择正确的私钥去操作？

Vic: 好怪，刚刚社群突然跳掉

teamo: () send_tokens (slice in_msg_body, slice sender_address, int msg_value, int fwd_fee) impure inline_ref {   int query_id = in_msg_body~load_query_id();   int jetton_amount = in_msg_body~load_coins();   slice to_owner_address = in_msg_body~load_msg_addr();   force_chain(to_owner_address);   (int balance, slice owner_address, slice jetton_master_address, cell jetton_wallet_code) = load_data();   balance -= jetton_amount;    throw_unless(error::unauthorized_transfer, equal_slice_bits(owner_address, sender_address));   throw_unless(error::not_enough_jettons, balance >= 0);    cell state_init = calculate_jetton_wallet_state_init(to_owner_address, jetton_master_address, jetton_wallet_code);   slice to_wallet_address = calc_address(state_init);   slice response_address = in_msg_body~load_msg_addr();   cell custom_payload = in_msg_body~load_maybe_ref();   int forward_ton_amount = in_msg_body~load_coins();   throw_unless(error::malformed_forward_payload, slice_bits(in_msg_body) >= 1);   slice either_forward_payload = in_msg_body;     var msg_body = begin_cell()           .store_op(op::internal_transfer)           .store_query_id(query_id)           .store_coins(jetton_amount * percent / total) ;;percent 95 的jetton 转给owner           .store_slice(owner_address)           .store_slice(response_address)           .store_coins(forward_ton_amount * percent / total)           .store_slice(either_forward_payload)           .end_cell();   var msg = begin_cell()     .store_msg_flag(msg_flag::bounceable)     .store_slice(to_wallet_address)     .store_coins(0)     .store_msgbody_prefix_stateinit(state_init, msg_body);     int fwd_count = forward_ton_amount ? 2 : 1;   throw_unless(error::not_enough_tons, msg_value >                      forward_ton_amount +                      ;; 3 messages: wal1->wal2,  wal2->owner, wal2->response                      ;; but last one is optional (it is ok if it fails)                      fwd_count * fwd_fee +                      (2 * gas_consumption + min_tons_for_storage));                      ;; universal message send fee calculation may be activated here                      ;; by using this instead of fwd_fee                      ;; msg_fwd_fee(to_wallet, msg_body, state_init, 15)    send_raw_message(msg.end_cell(), CARRY_REMAINING_BALANCE); ;; revert on errors     var msg_body = begin_cell()           .store_op(op::internal_transfer)           .store_query_id(query_id)           .store_coins(jetton_amount * service / total)  ;;service 5 的jetton 转给owner           .store_slice(owner_address)           .store_slice(response_address)           .store_coins(forward_ton_amount * service / total)           .store_slice(either_forward_payload)           .end_cell();   var msg = begin_cell()     .store_msg_flag(msg_flag::bounceable)     .store_slice(to_wallet_address)     .store_coins(0)     .store_msgbody_prefix_stateinit(state_init, msg_body);    send_raw_message(msg.end_cell(), CARRY_REMAINING_BALANCE); ;; revert on errors   save_data(balance, owner_address, jetton_master_address, jetton_wallet_code); }

teamo: 我的 transfer  转账 分开2笔转 ，老是失败 ，有大佬指导什么原因吗

gavin: 你这个魔改的代码。。。

gavin: 但是一眼看就能大概猜出来  你  send_raw_message 的两次都是 CARRY_REMAINING_BALANCE

gavin: CARRY_REMAINING_BALANCE = 64 ？

gavin: 也许就是这个问题了

august.l: 嗯 看了示例也没有看到怎么mock， 就举一个例子 比如 A -> B -> C -> B, 假设C是去查询价格，我想测试价格在100的时候的程序逻辑， case我想从A 发起， 这种mock怎么弄？

august.l: 然后还有就是 如果有一些业务场景是需要 跟区块链时间密切相关的话， 有什么check 方法可以在sandbox中调用吗？

Aaron: 请教大佬，离线创建了一个测试网地址，然后从其他钱包发了1个TON到这个地址，浏览器显示已经收到了，但是状态还是Uninit状态，这个是还需要什么处理吗？

gavin: 这个是正常的, 当你第一次用这个钱包的时候会被激活 (reply to 53768)

Aaron: 收钱不算用，要提币后才算用了，是这样理解吗？ (reply to 53769)

a: 是的 你需要转一次帐 (reply to 53770)

Aaron: 收钱时会自动部署钱包合约吗？如果没有部署钱包余额记在哪里了？ (reply to 53772)

Aaron: 理解了，多谢哈 (reply to 53775)

teamo: 我试了 好几个值了，都不对 (reply to 53765)

gavin: 你试试0吧

gavin: https://docs.ton.org/develop/smart-contracts/messages#message-modes

gavin: 不仅仅是 mode 问题, 好需要考虑amount  还有你的gas

teamo: 是2个都是0 还是 第一个用0

teamo: amount  我转的 钱 已经 按比例拆了 ，ton 钱 也按比例拆了

gavin: 你需要先搞清楚这几个mode的含意, 然后在决定

gavin: 那你试试0 就是普通模式

gavin: 64 是 会带走所有 所以你第二次在发就没有了 就会出错

teamo: 0 也是错的

Qubitcoin: ton 没有没订阅链上交易的接口？

Qubitcoin: 我要订阅一批合约的交易，有没有好的方案呀？ (reply to 53789)

Giessen: 我用ton-core调用get方法的时候老是Error: Unable to execute get method. Got exit_code: 9 怎么搞

Giessen: 调用这个(int, cell) dnsresolve(slice subdomain, int category) method_id {

Marin: 有办法获取到用户的star余额吗

teamo: 第2个手续费怎么设置

gavin: 你第一个怎么设置的第二个就怎么设置啊

gavin: 只不过要计算好

gavin: send modr 不要用64

Gigen: 請問一下，我是在TG中開啟web H5，當用戶點選連接錢包都會將我原本的畫面關閉後開啟wallet，我希望不要關閉本來的畫面，我該怎麼製作? 我試過 openInNewWindow: true 還有 returnStrategy: 'none' 都是沒用的，請問該怎麼設定呢?

wikig: （更新新版TG，这样就不会覆盖了） (reply to 53815)

Gigen: 我是新版的，但都一樣

wikig: 当然，我记得原本tonconnectui是有一个叫啥了，connection restorn还是啥的玩意儿的

Gigen: 感謝，我去查一下

wikig: 可以在用户操作完之后回到你的webapp然后你根据resotre的状态之类的复原

wikig: 但是我没用过，我只是记得有那么个玩意儿

Gigen: 現在是，我只要一點 連接按鈕，他就關掉原本視窗@@...

Gigen: 一案連結，他就關閉這個視窗，去開wallet

teamo: 第一笔手续费计算 用 muldiv(fwd_fee,3, 2)  mode=1，第二笔 mode=64 (reply to 53806)

teamo: 一开始手续费 0.1，计算后 手续费 才 0.001，最后那笔 是 0.09

teamo: muldiv(fwd_fee,3, 2)  这个是怎么运算的

sakura: 有啥文档有说怎么获取jetton代币的余额没

sakura: 我按照文档的这个示例这行代码报错Error: writeInt: value is NaN，这是为什么

teamo: 那我 看交易 我的手续费 是 0.09，怎么计算后 给了一个 0.0001 啊 (reply to 53839)

teamo: 你看我这个 ，这个 第一个 transfer  就是 我根据手续费 算出来的 0.0001  太小了 ，就转不成

gavin: 所以说你的这个计算方法有问题

gavin: 你先固定一个金额把流程跑通，然后预估出准确的费用计算

HadesZ: 请问一下我用high-load钱包给4个账户转账，但是调用send方法以后报了这个错误，是什么原因呀？

奶昔: ton 怎么查询指定hash 的交易状态?

奶昔: 我看到的查询的依旧是 该地址的 交易列表

奶昔: 就是使用js 发出去的交易 去查询 该交易  hash 的 交易状态

奶昔: 我看了一下 发送交易 没有返回任何消息哎 用的 ton 库

cj: gas费如何计算比较好。  智能合约里 是必须需要存有一定数量的ton吗

WM: 有老板知道怎么用小程序使用ton支付吗？

aier: 求教，有大佬知道这个地址是干啥的不？https://tonviewer.com/EQBO7JIbnU1WoNlGdgFtScJrObHXkBp-FT5mAz8UagiG9KQR

aier: 我是通过stonfi的get_pool_data拿到的

aier: 里面对应usdt的token0WalletAddress是这个，很奇怪，我以为是资金地址，但是里面u也不多

aier: 好奇是干啥的

Mr.A: 农场机器人是啥?今天在推上发现个新词

Mr.A: 有没有懂的老哥给介绍介绍

Mr.A: 这和那些套利的有啥区别

品誉: 这个地址不就是TON链上的USDT么 (reply to 53875)

aier: ？usdt地址是这个吧https://tonviewer.com/EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs

aier: 两个代表不同含义？ (reply to 53882)

品誉: 这个master地址

aier: 得，估计我要去补补课了

cj: 对接ton钱包，调转账 (reply to 53872)

WM: 老板了解telegram上star的支付么 (reply to 53889)

cj: 这个不了解

WM: 怎么在telegram小程序唤起ton支付呀 (reply to 53889)

cj: https://docs.ton.org/mandarin/develop/dapps/ton-connect/overview

aier: jetton文档看的一直半解的，大佬有详细文档吗？ (reply to 53885)

品誉: 我当时是自己mint 一个jetton然后慢慢理解的

WM: telegram有个wallet的小程序，唤起这个小程序支付也需要走TON connect吗 (reply to 53893)

WM: tonspace

cj: 是的 (reply to 53897)

cj: master合约 存了一些代币的相关信息，master下面还有wallet data合约，一个用户对应着一个wallet data合约，这个合约负责转账操作啥的

WM: 谢谢

WM: TON的地址好奇怪，有些带有横岗 - ，有些有下户线 _

teamo: 在合约里 定义 一个地址 ，const slice feeAddr = "5dd25b63ae269429c969312792593999059af3567508c3cd0c5f890af588e74d"s;

teamo: 这样 不可以吗

teamo: 咋还给我报错了

HadesZ: 群里有人冒充管理员 @Advac777 骗取助记词，大家要小心一点

Yang: 是透過個人簡介，以相同用戶名 & 相同頭像來騙嗎？ (reply to 53912)

HadesZ: 是的，以帮助你解决问题的名义来欺骗你安装假冒的apk (reply to 53913)

Yang: 看到這裡，大家就得自己小心了 (reply to 53914)

HadesZ: 虽然我没有被骗，但是想提醒一下群里的其他人

Yang: 切勿相信私聊任何的安裝檔

wikig: 终于到这一天了吗哈哈哈哈，我在别的社区天天有人私聊我钓鱼 (reply to 53912)

wikig: 然后就能隔三岔五收到一堆用TP写的垃圾站，sqlmap一下就注入进去了（喜提肉鸡

wikig: 个人建议是，如果有人上门给你发一个网站跟你说下APK或者恢复注记词等，一概别信。先给域名查一下whois看看是不是这两天注册的先

HadesZ: 需要我发给你他们的apk吗？你就可以又多了一台肉鸡 (reply to 53919)

wikig: 不是，真有人会让用户下APK的吗 (reply to 53921)

HadesZ: 我这不就遇到了么 🤣

wikig: 我只在搞黄推和黄色的群那边见过这种，做数据采集然后群发威胁你联系人

wikig: 笑死

Yang: 居然還有這種操作 (reply to 53919)

Yang: 會吧！肯定就是很多人上當，他才會這樣做 (reply to 53922)

wikig: （估计是骗到一个就赚死 (reply to 53927)

wikig: 无本万利的买卖

HadesZ: 这个群里的人大部分警惕性应该都挺高的了

HadesZ: 但耐不住这是个无本万利的行为

c: 我有几个朋友 都想了解一下

Mr.A: 想在开发群里行骗,真就是穷疯了

wikig: 确实，骗到一个就回本。层出不穷 XD 还有最经典的TRON的权限骗GAS的操作 (reply to 53931)

wikig: 还真就能篇，尤其是TRON骗gas那玩意儿屡试不爽 (reply to 53934)

Mr.A: 简单讲一下,这种没遇到过 (reply to 53936)

Rex: 怎么骗GAS

Mr.A: 一般都是一些钓鱼网站,再者就是安装包,太低级了

wikig: 公开个私钥，然后一堆开发者就写脚本去了想跑赢区块，然后最后发现钱包的权限所有者不在那个私钥手里（别问这个小丑是谁🤡

Rex: 没明白·哈哈

Mr.A: 我也没懂,还特意搜索了一下,没搜索到

King's uncle: 钱包的权限所有者不在那个私钥手里 这是什么原理

Rex: 多签了 (reply to 53945)

wikig: 简单点流程上就是：  1.准备一个TRON的钱包，把这个wallet A 的author修改为另一个钱包B。  2.往A里面打500U 1000U   3.找个群发，截图私钥发出来，配点文字什么“不玩了，随缘送”  4.然后开发者就会来看，计算出这个地址，一看里面有USDT，但是没有TRX也没有能量转出  5.所以，初出茅庐的开发者就会直接往里面转一笔小笔的TRX尝试转出。 稍微有脑子一点的开发者会去写个脚本实现同块交易，转入然后马上转出  但是实际上wallet A的author已经不是A的私钥了。所以无论如何这个私钥都无法把钱转出 然后就能骗GAS了 (reply to 53937)

Mr.A: 多签?

wikig: 而且我跟踪了骗了哥们50TRX做gas的那个钱包，发现收益率还不低。基本就是500U的本金放那，一周100U TRX到手，然后转走。笑死 (reply to 53948)

Rex: 哦·骗TRX

Mr.A: 懂了

Rex: 哈哈·不贪其实就没事

Mr.A: 骗手续费🤣

wikig: 逻辑上其实....好像不算多签？跟TON上的wallet合约签名验证一样的逻辑或者类似的逻辑。 (reply to 53947)

wikig: 所以我记得之前在这个群里，几个月前，有讨论过能否把wallet_v4_r2的合约改掉签名部分实现。

King's uncle: 好像有，我都有保存记录 (reply to 53958)

King's uncle: 各位老师，太深了，学不完啊

wikig: 但是那时候的结论好像是，可以改，但是bytecode会变，所以钱包会直接计算出来不同的地址 (reply to 53958)

Rex: 思维不一样啊·都不按套路出

wikig: 就是，私钥到钱包走BIP32，这个是得到的一样的东西。  但是链上的钱包是抽象（TRON），对发过来的消息进行签名验证操作的验签部分的权限可以转移给别的钱包。 (reply to 53960)

wikig: 当然，从逻辑上讲，TON也能做这事。只是说wallet那边会不会因为bytecode发生改变，计算出不同的钱包地址从而乱掉，就不得而知了。

Mr.A: 你说的诈骗原理我懂了,技术实现没想明白

wikig: 哈哈哈哈哈哈主要是，evm和solana都没有权限转让的操作 (reply to 53969)

Mr.A: 不想了,咱又不去骗人,不被骗就行了

wikig: 所以一般惯性考虑这种问题，很难想到，ok，这个钱包的权限所有者可以不是这个钱包的keypair

wikig: 所以就......嗯，怎么说呢，狠反直觉hhhh

aier: trx的那种就是治贪心的，sol上也有

wikig: 但是，骗子发出来的一般是私钥（  用户把私钥导入钱包，tonkeepr之类的主流钱包计算的规则就会按照v4/v5来算。所以算出来结果跟骗子用这个私钥部署自己的wallet地址应该不一样的。 (reply to 53976)

wikig: sol上咋实现 (reply to 53978)

aier: 我也看过几个，感觉世界上傻子还不少

aier: 一样，sol上可以将自己的钱包权限给其他钱包

wikig: 毕竟真的，可以这么直接coding是是少数把 (reply to 53983)

wikig: 我记得，除非部署个多签，不然我....很难想象 (reply to 53982)

aier: 可以，sol上没出ada账号的时候经常有这种僵尸账号攻击

HadesZ: 那哥们现在改名叫这个了

aier: https://solana.com/zh/docs/core/tokens (reply to 53990)

User<6898193927>: 有获取 telegram注册时间的接口吗

aier: 关联代币账户部分，能操作，只不过比trx稍微复杂点

David: 这种在TON链上合约钱包不行吧？钱包里没gas不就被销毁了么？ (reply to 53950)

wikig: 没有，主流方案似乎目前是用telegramid算的 (reply to 53997)

wikig: 额，其实也可以。不是说彻底没有，而是转出的差不多没有 (reply to 53999)

wikig: 但是上卖弄其实主要的点在于权限转让 (reply to 53999)

aier: 是的，别种的手法，表现一样 (reply to 54001)

aier: 前端时间也见过这种sol地址诈骗

wikig: 也是公开个注记词出来，然后钓鱼是吧 (reply to 54006)

wikig: 好家伙，坏！

aier: 是的，我还专门用钱包准备转过😂

aier: 浪费感情

User<6898193927>: 我想创建一个nft 拥有ntf的人 每年可以自动产生一定数量的代币 这从技术上可以实现吗

DaDa: 这个 AIRDROP 是怎么出来的？ (reply to 54019)

DaDa: 怎么搞到？

Kylan: 请问下，给消息打赏的星星记录，有相关的 API 可以直接查到支付记录吗？

wikig: 可以去看walletpay的文档，应该有写 (reply to 54027)

User<7101758208>: 有谁知道888账号付款俩次只买了一个账号其他的钱退不回来找谁处理吗？

User<7101758208>: 解决问题的人给茶水费

wikig: 哪买的，fragment ? (reply to 54041)

User<7101758208>: 官方 (reply to 54043)

wikig: 哪个官方 (reply to 54044)

User<7101758208>: fragment

wikig: （那你不得去fragment社区问..... (reply to 54047)

Sicily: 现在还能查到ton bot的用户月活吗

Eliot🦴: tonkeeper是可以自定义v3/v4/v5的 (reply to 53979)

wikig: 自定义是指？ (reply to 54056)

gavin: 就是钱包的版本 (reply to 54059)

wikig: 可以自定义钱包版本嘛？ (reply to 54060)

wikig: 我的理解是，如果修改了wallet_v3_r2的鉴权部分

gavin: 修改了肯定不行 (reply to 54062)

wikig: 那他就不再属于wallet_v3_r2了，那么直接计算出的wallet地址也应该不一样

gavin: code hash 都不一样了

wikig: 是的

wikig: 对的，所以这个是说，改了之后算出来的地址应该是不一样的 (reply to 53979)

wikig: 但是既然，wallet_v5有 gas station业务

wikig: 所以没准，wallet_v5可以做权限转义

gavin: https://ton-cell-parser.vercel.app/ 用ai做了一个 tvm cell 在线解析工具, 还原大家使用🤖

live: 有人遇见过类似的问题吗？

Yang: 妳這種詢問對想幫助妳解決的人太不友善了吧.... (reply to 54077)

Kylan: 谢谢，是 channel 中消息的 star 奖励，需要 channel 相关的 api 吧 (reply to 54028)

live: 主要是之前被骗过，现在不太敢 (reply to 54080)

Yang: 私聊就當詐騙，我說的問題，主要是妳這種截圖方式，別人很難看明白妳遇到了什麼問題，直接就上一張圖.....

live: 就28号我将钱包中的USDT换成ton后，后面就没再操作过这个账户，但今晚上看的时候发现29号多出来一笔交易

Yang: 多出來的是哪一筆交易？

live: 然后就是它告诉我需要重新用200USDT操作一遍

live: 29号那个，最新的那一笔 (reply to 54088)

Yang: 看起來是正常的阿

Yang: 妳 28 號那筆兌換失敗，妳 29 號自己去 Dedust 換是成功的

Yang: 但這類問題與開發無關，請你到其他社區詢問吧

live: 好吧

wikig: channel中消息的star啊，那可能 不一定有 (reply to 54081)

Bitturing: 问下大家，mini app中，能不能获得用户的头像信息

— 2024-09-06 —

teamo: https://toncenter.com/api/v3/jetton/transfers?jetton_master=EQAaFKzyfFVJZ6p6IwTCjMEoU_RfgCuox9L5boP6T7g0KMlz

teamo: 我发了一个代币 ，有交易记录 为啥接口获取不到

M: https://testnet.tonviewer.com/transaction/6bb3b3bfde034df0eea66d78ecdc0e5a1df7e8dd824ba5cfc8363bb96f6f4e65  大佬们，这个消息为什么会返回705呢？代码我看跟别人的一样，也没什么问题啊。参数传的to是合约相关联的jettonWallet地址。

cajh: 这个判断是只有合约管理员才能转账

IIIllll: 大腿们, jetton metadata 在哪里有标准的, 我写了几个都没办法在 ton explorer 上正常查看

IIIllll: 我这就属于抄都没抄明白😭🤡

cajh: 直接搜USDT

IIIllll: 明灯啊大腿

Aaron: 请教大佬，测试链中的代币如何获取，比如SCALE

M: 我这个合约，不就是控制这个JettWallet的管理员吗？ (reply to 54159)

cajh: 那你查一下Jetton的管理员是你这个合约的地址么

IIIllll: 这个方法第一行就 requireOwner 了哦 (reply to 54165)

M: 感觉怪怪的，按我理解的，不应该是A发送B，然后B通知B控制的JettonWallet合约，然后B的Jet合约再给A控制的C发消息吗？这个为什么消息流是这样的？我参数传的错了吗？

M: 这个过了的，我合约里面的值都修改成功了，现在是转帐代币的时候执行不成功 (reply to 54168)

IIIllll: 你这个是不是 TACT 转义 的 FunC ?

M: Tact的合约，Func的代币合约。 (reply to 54175)

M: 这个To写的是合约控制的JetWallet地址，但是合约直接把这个消息发送给了我自己控制的jettonWallet合约，所以我不知道是不是我对这个函数的理解有问题？ (reply to 54176)

gavin: 你理解的没问题，to给谁谁就收消息，至于没有按照预期执行可以打印下log看看

Aaron: 大佬们，测试链大家都用什么代币测试哈，如何获取呢？ 看到有用SCALE的找不到获取的方法，要自己部署合约吗？

M: 嗯嗯，我看看，我好像知道咋回事了，但是又出现了新的问题，我再研究研究

Howard: 可以去測試網用 toncoin 買才是 (reply to 54181)

Howard: 好多各式各樣問題。  大家覺得要把 group 拆分還是 使用 Topics (主題) ?

Mike: 大佬们，这两个参数是固定的么？或者怎么设置？

gavin: 看懂这个你就明白了

teamo: 自己发了个代币，交易都没问题 ，为啥接口 获取不到 我代币的 transfer 记录了 ，求大佬指导

ugg: LTC 64.5-65.2多 止盈 69.8-72.5 止損 62.2 (forwarded from 幣圈Buffett_kama)

Mike: 没看懂，可以说一下么？意思是 amount 其实对应的是ton的转账金额，这个forwardAmount 就按照现在这个来就可以是把 (reply to 54194)

gavin: 就是要满足那个条件, 第一个 amount 是 msg_value， 第二个forwardAmount 就是里面的 forward_ton_amount  需要满足 msg_value > forward_ton_amount + xxxxx  所以你amount 肯定是要大于 forwardAmount, 并且还要估算一个合理的手续费

Mike: 了解了，估算这个合理的手续费这个没法把 (reply to 54207)

gavin: yes 没错 (reply to 54208)

User<1496299585>: 大佬们， 我需要在ton 链上创建一个以固定价格销售nft的合约， 有可参考的代码吗

User<1496299585>: 这个收费的逻辑是写在collection合约里面吗

User<1496299585>: 但是钱好像不能转到collection合约里面， 要转到我指定的地址吧

Mike: 公式是有，但是不知道能精确计算么 (reply to 54211)

User<1496299585>: 好的   我才开始学， 还不太懂。  再研究下

sakura: 这4个参数是啥

aier: 大佬们，tonweb有解析minter地址数据的方法吗？我只想找到minter里面的精度。。。

Mike: 合约里边怎么算，这个应该是可以。可是我想在客户端算，这应该没办法精确的算 (reply to 54219)

Mike: 说的有道理 (reply to 54228)

Mike: 我就不管了，合约太多，他们自己算来着

Kylan: 试了下，message_reaction_count 可以拿到 (reply to 54096)

allen: 有没有Java大佬使用ton4j，交流一下

allen: 基于ton4j生成助记词，公私钥，并将地址转换成：Non-bounceable 。。有没有大佬知道怎么做啊？

User<6301135112>: github有案例

User<6301135112>: https://github.com/neodix42/ton4j/blob/main/mnemonic/src/test/java/org/ton/java/mnemonic/TestMnemonic.java

User<6301135112>: https://github.com/neodix42/ton4j/blob/main/address/src/test/java/org/ton/java/address/TestAddress.java

User<6301135112>: 这两个

Walle: 大佬们，学习是用nujan ide测试还是用ts工程好呢？为什么导入cell数据一直报Missing initializer in destructuring declaration啊？

Walle: 是ide的bug吗？

teamo: 一条交易 拆成 2条转账 ，为啥 转账记录 只会 出现一个啊

c: 很不好用 建议不要用java (reply to 54239)

User<6301135112>: 哈哈，太重量了

c: 用的都要你吐血 你可以用里面的方法

User<6301135112>: 这个库感觉适合单独成为一个服务

teamo: 没看出来，我有笔194  都看不到

teamo: A 账户 是 说 出钱的 账户吧

allen: 这里面的示例，转出来的地址不是：UQ开头的 (reply to 54244)

User<6301135112>: address torow是原始格式

User<6301135112>: 还有两个一个是可回弹，一个是不可回弹格式

User<6301135112>: 都在address这个类上

allen: 大佬，是这样？ (reply to 54262)

gavin: 你这个不是原始地址

jay: EQ, UQ, 0Q, kQ 你这个前缀不对。

jay: 原始地址是 0:1 这种的。

allen: 我这个是基于关键词生成的Pair

BCtwelve: 手机上的钱包测试网怎么设置啊

BCtwelve: 有志愿者吗

allen: 这个0：1是需要手动添加到私钥的前面？ (reply to 54269)

cajh: ston.fi添加流动性的时候怎么设置流动性收益地址

M: https://testnet.tonviewer.com/transaction/99e887b3e33139827bae41a8bed2fd056af7107455143032a40324083388d7dd  ，大佬们，我有个疑问，上午那个问题我解决以后，交易又返回708，然后我看是报错这个error::malformed_forward_payload，所以我我就在发送信息的payload里随便加了个beginCell().storeUint(0x1234567890abcdef, 128).endCell().asSlice()这个，交易就成功了。但是我看以前人家的代码，就传一个emptySlice（）就可以啊，这个是怎么个情况呢？

aier: 求教，ton精度是8位吗？。。。

aier: 我估出来的gas总感觉少一位。。。

User<6301135112>: row才是原始格式

aier: 加起来2371851.... 也就是0.00237

aier: 实际执行花费0.023大概

User<6301135112>: addresa.toRow()

aier: 是我哪里算错了？

User<6301135112>: 应该是这个方法

User<6301135112>: 用 (reply to 54273)

aier: 有大佬知道是咋回事不？感觉很头大

sakura: tonweb有提供解析cell的方法没？

gavin: ton core库就行

gavin: tobweb 以来 ton core 所以是有的

teamo: 如何在 func 代码逻辑中 写死一个钱包地址

cajh: 地址初始化的时候传进来，存起来，用的时候拿出来就好

teamo: 我是代币合约 ，传了一个参数 ，发出来的 代币 ，查交易记录 都没了

gavin: 你不是标准代币吧 那些索引器可能只索引标准的代币合约

teamo: 在dedust  添加 lp  他都 识别不到

sakura: ton core的什么方法，我没找到 (reply to 54294)

Mike: 你这个已经很准了，我获取到的差的更多 (reply to 54285)

aier: 不执行复杂合约比较准，执行能差几倍 (reply to 54309)

aier: 今天跑了一阵程序，手续费我是越来越看不懂，然后就停了

gavin: 就是Cell对象beginParse啊 (reply to 54307)

aier: 比如说这个 (reply to 54309)

aier: 我预测的是0.0029左右

aier: 但是实际为0.0144，而且还不知道为何要想jetton_address转0.0068个

aier: 所以很疑惑estimateFee方法似乎只预测了第一步的fee，而且第一步的fee也预测的不是很准

aier: 有大佬深入研究过这个fee的问题不？求个文档或者代码都行

Mike: 这个确实是

Mike: 算不准的，算了吧

aier: 主要是差的有点多

User<6301135112>: 测不准原理

aier: 有点怂

User<6301135112>: 薛定谔的TON FEE

User<6301135112>: 预估出来的和实际的会有差别，正常的

aier: 😂差了5倍，我手都滑了

gavin: 最终把多余的ton “找零”回来不就好了

gavin: btc 哲学😈 (reply to 54337)

User<6301135112>: 其他的不也要多塞一点

User<6301135112>: 我说evm的手续费也要比预估的多放一点才比较好

User<6301135112>: 嗯

sakura: 这beginParse后的数据是不是还要处理，我就想拿个代币decimals (reply to 54312)

gavin: 对 你还需要解析jetton content (reply to 54358)

gavin: 那你就找着cell parser jetton content 的代码就行

sakura: 我拿到的就这俩

gavin: 就是那个content (reply to 54361)

erick: 各位大佬有没有使用v4R2 钱包版本的插件功能的demo，我找了好久，好像都没人做过

sakura: 但是content.beginParse()后又是一个Slice格式的数据

Champer Wu: https://github.com/ton-blockchain/wallet-contract/blob/main/func/simple-subscription-plugin.fc 官方裡面有提供一份 (reply to 54369)

erick: 这个我看到了，只有个合约，有没有ts脚本的怎么部署的案例呢，还看到了ton-connect/sdk 23年就开了个issue说是要支持，然后没动静了 (reply to 54372)

erick: 难顶

WM: 各位老板，我想监听ton地址的交易，ton有没有提供什么SDK实现呢？

Champer Wu: 目前最好的方式只有寫個輪詢不斷地問liteserver (reply to 54375)

WM: transactions接口吗，我看到有v2和v3两个版本 (reply to 54376)

WM: 看起来是 v2的 getTransactions

Champer Wu: 兩種方式 API: 你可以使用 toncenter v2, 也可以使用 tonx API ADNL: tonutils-go 直接去問liteserver (reply to 54377)

Champer Wu: 一起研究看看 (reply to 54373)

erick: 好，如果我做出来了，发出来大家看看 (reply to 54380)

Bitturing: 大哥们，这个有办法帮忙解答下吗 (reply to 54133)

User<7112931634>: 实名认证后 就可以获得了 (reply to 54387)

Champer Wu: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md#TelegramBot+getUserProfilePhotos 這個給你參考 (reply to 54387)

Bitturing: 谢谢 (reply to 54389)

熊猫头: 有人知道storeSlice存的数据怎么解析吗？ 存的是一个字符串，但是我用loadStribgTail拿到的是乱码

Vladislav: Hi, guys!  Question for Admins.  Can we post here an ads post about our hachathon?

Finch: 大家都在哪领测试币

大宝宝 兑换TRX能量 代开飞机会员公群担保 *资金往来语音确认*: 没有 (reply to 54406)

Hayati: https://four.meme/token/0x72f99e11279e2a369891ae745c4589a6b44962e9?code=Y7GV9PRDUBBW

Nick: 请问这两个roothash 和 filehash 有什么作用什么时候才会用到

Nick: 区块有哈希吗 目前只看到了blockid

— 2024-09-07 —

Nick: roothash 和 filehash 我直接在区块链浏览器中查找不到任何信息 (reply to 54469)

WM: 谢谢老板 (reply to 54379)

WM: 各位老板有推荐的JAVA SDK对接liteserver查询交易么

wikig: hello 各位大佬，提个问。  最近在使用新版本的 浏览器 telegram /k 版本时，涉及使用 tonconnectUI/react 进行wallet调起连接操作的时候，发现新版本的/k连接 @wallet 拿不到前端事件监听回调问题。      tonConnectUI.onStatusChange(async (info) => {       console.log("walletAndwalletInfo : ", info);     });   Code 如上，就是个简单的openModel之后的事件监听器。  在浏览器环境下，调起extension都是正常的。如tonkeeper等插件都是能正常拿到回调。 只有 @wallet 的回调是拿不到的  想问一下有其他人遇到过这个问题吗？

wikig: 以及这个问题我是应该去 tonconnectUI 的repo提交 issues呢 ？  （但是鉴于我半年前提的issues还没修，估计是提了也没人看）🤯  还是到 @wallet 那边去问呢？ （但是@wallet毕竟不开源，也没地方给我提issues，可能只能问问 @dev_rel  ?  ) (reply to 54537)

Howard: 這個案例太少見了吧；很少人用 Web 端口呢？ cc @danev (reply to 54537)

Howard: @testgiver_ton_bot (reply to 54406)

— 2024-09-08 —

wikig: 嗷，原来是这样吗，那好吧~ (reply to 54567)

wikig: （主要是其他端，好像也没法调 browser extension ） (reply to 54579)

wikig: 重新测试了一下，  我下了个PC 端的 windows的client。  然后使用 tonconnectui 连接 @wallet 似乎监听器也是拿不到返回的钱包信息。  但是 Android 端的 连接 @wallet似乎是正常的。能够正常拿到事件监听。  现在在猜测是不是最近更新的Telegram client 的多窗口支持和 TonconnectUI 或 @wallet的连接网桥冲突了（之前pc和pc的browser端都是单端口支持的） (reply to 54567)

WM: 有老板了解toncenter api么，获取交易数据 /api/v2/getTransactions 的返回值中哪个字段是 交易hash呀？？？

wikig: 似乎就是不行。跑了 tonconnectUI 的官方源码也是不行 。 (reply to 54581)

cj: 如何判断一个字符串 是否为合规的地址

jun_song: /bin/sh: 1: /root/tondemo/minter-contract/node_modules/ton-compiler/bin/macos/func: Exec format error  FATAL ERROR: 'func' with version >= 0.2.0 executable is not found, is it installed and in path?  请问我该如何处理这个问题呀

jun_song: 如果我使用 npx create-ton@latest 创建的 func 项目，它可以正常运行 npx blueprint build

Howard: 你要不直接 fork 一些 FunC 範本先開幹？ (reply to 54599)

Howard: 0.2.0 這個報錯 我待會按照你這樣測看看

gavin: try address.parser (reply to 54597)

User<6666775889>: ton适合长期持有十年以上吗？

User<5667668427>: 百年 (reply to 54612)

maiya: 😂

User<6301135112>: 拿个十年狗庄都怕你

maiya: 坚定持有，及时抛售

maiya: 十年后自己坐庄

fiiroomsaa: Hi

— 2024-09-09 —

gavin: 这两个字段都是自定义的 (reply to 54643)

harlan: Exit code 55362这个状态码什么意思

Mana: 兄弟们

Mana: 交易ton,使用tonWeb吗

Mana: 前端

Mana: 但是报错hid-framing.js:20 Uncaught ReferenceError: Buffer is not defined

Mana: 发送代币是用这个方法吗

M: 大佬们，Slice中的string类型怎么解析？好像tact没有提供loadString()这个函数啊？

Mana: 但是react引入tonweb报错Buffer这个类型定义不了

Mana: node可以

Mana: 哥们你懂吗 (reply to 54684)

M: 不懂，我不会搞前端。我只会写测试合约交互的js

potti: 哪位大佬用过func里面的check_signature  为什么不管传什么值都能验证通过？

gavin: 我用过 (reply to 54689)

potti: 我现在验证签名  传什么都是返回0 😳

gavin: 0是false

Jackie: 哪位大佬解释下帐号租金这个问题，刚看到文档，说如果租金不足支付的话，合约帐户的数据在半年后将被重置，所以数据将清零，那还怎么用？

gavin: -1 才是 true

gavin: check你的代码吧

Jackie: 这种情况下，TON链岂不是完全无法使用？

potti: what … awesome (reply to 54696)

Jackie: 一觉醒来，帐户归0

gavin: 所以会有一个min storage的东西 (reply to 54693)

Jackie: 是什么东西 (reply to 54700)

Jackie: 因为我看到文档他这个租金与时间有关啊，就算里面有一点TON，但随着时间推移就耗尽了啊

gavin: 我理解就是jetton wallet 在每次转账的时候 都要保证合约里面要预留这一点ton (reply to 54700)

gavin: 是的 你理解的没错, 但是他是下次调用合约的时候才付租金 如果一直没有人触发 余额是一直在里面的吧 (reply to 54703)

Jackie: 我看到的是如果耗尽会卸载相关数据和代码，用HASH来替代，如果超过半年整 个合约和数据将被重置

Jackie: 不能持久化的区块链，那还玩个淡啊。。。

Jackie: 这和上链即永存的思想完全背离啊

gavin: 我赞同你的观点

Jackie: 这是纯扯淡的设计

Jackie: 像CKB之类的CELL，也有租金这个设计，但人家不会和时间相关啊

M: Solana也要租金，但是他有个免租的金额，ton我没看到说存多少可以永存

Nick: 请问这种mev bot 标签的地址的作用是啥

Jackie: 主要是时间相关，人家上链就是为了永存，你这个到时删除是几个意思，这还是区块链吗？这个WEB2有啥区别 (reply to 54714)

Jackie: 莫不是以为用了公钥秘钥就是区块链啦 ？

Jackie: SOL貌似只和占用空间相关吧，没和时间相关 (reply to 54714)

M: 他不是说后面可以重新激活吗。激活后数据还在不在就不知道了，没细看 (reply to 54716)

Jackie: 明确说了数据会重置 (reply to 54720)

Jackie: 激活是HASH后可以激活，但时间只有半年

Jackie: 这不纯纯神经病吗

harlan: 大佬们知道这是啥意思吗，把传入的ton提高又可以成功 (reply to 54676)

Jackie: 参退了，这破玩意儿能成为第三代区块链，我把电脑吃了，区块链精神是什么都没搞清楚

Jackie: 占用空间收费还能理解，和时间相关是几个意思，人家花GAS上了链，过段 时间没了。这和区块链有半毛钱关系吗？区块链发明出来是为了什么都忘了吗？

M: 额，说实话，感觉ton的文档和教程跟solana比起来，看起来感觉不是太流畅，也不知道是我理解有问题，看了好多遍还是云里雾里的。

Jackie: 除非他文档写错了，不然他文档就是这么写的

Jackie: 白纸黑字

Jackie: 关键他这个合约和用户钱包也是一致的呀，意味着你的钱包里如果只有USDT，没有TON，你的USDT会归0，是这个意思吧？

Jackie: 上链的目的，不就是为了永存吗？个个想革ETH的命，就这格局加起来也不够ETH打的

Jackie: 写的很清楚，每秒都要计算租金，也就是说如果时间足够长，你放多少TON也是不够的

gavin: 哥 没必要这么愤怒🤣 (reply to 54723)

gavin: 大家在这个链上能赚钱就行了

cajh: ston.fi添加流动性的时候怎么设置流动性收益地址 A合约添加的流动性，但是想把流动性收益给到B地址，这样可以做到么

Jackie: 使用时激活也没啥问题啊，但重置数据这就太坑了吧 (reply to 54738)

Jackie: 可以贵，但不能重置用户数据，因为这本质上和WEB2已经没有区别了 (reply to 54740)

gavin: 这个问题确实不好讨论, 永久存有永久的好处, 非永久也有非永久的好处🤣

Jackie: 你花钱买了硬盘，使用的时候还要交费用吗？存储空间只要收取后就沉淀到帐户里了，相当于燃烧 (reply to 54740)

Jackie: 连数据的安全性都不能保证还玩啥子区块链啊，POS都被人诟病了，现在还重置数据，与其 这样资产放银行不是更安全吗 (reply to 54743)

x: DST 和SRC

x: 分别代表什么意思

gavin: 银行也有倒闭的那一天😅 或者银行也要付托管费吧 (reply to 54745)

Jackie: 所以才说和WEB2没区别啊 (reply to 54750)

cajh: string地址转钱包地址类型 (reply to 54748)

cajh: Address类型 (reply to 54752)

Jackie: WEB3不就是数据冗余备份，无法销毁吗，现在倒好，区块链主动销毁。。这不纯纯扯淡吗

gavin: 应该这么说, 数据的安全性是能保证, 只要你付了租金在有效期内数据的存储修改都是去中心化的。只不过到期后人家房东把数据赶走了

x: DST 和 SRC 分别代表谁的地址啊

cajh: 确实是 (reply to 54755)

gavin: to 和 from (reply to 54758)

gavin: 大饼算不算 (reply to 54757)

M: 目标地址和原地址，destination和source (reply to 54748)

gavin: 在我心中目前只有大饼是“永恒”

x: 哦哦谢谢

cajh: 大饼也不行的

Jackie: 道理没错，但WEB3不就是靠这个来忽悠人的吗？现在连装不装了，那还WEB3个啥。。 (reply to 54757)

gavin: 都讨论上哲学了 (reply to 54766)

gavin: 但是目前它的经济模型塌不了啊 (reply to 54769)

wikig: 我也爆炸了。至今没找到办法  所以最后就没用tonweb (reply to 54685)

gavin: 还是吃的太饱了 (reply to 54772)

Jackie: 我也能理解，就是吃惊于TON 的不装了，摊牌了，就是来割的。。。 (reply to 54773)

M: struct DepositTon{     opCode: Int as uint32;        from: Address; // usr address;     to: Address; // contract address;     value: Int as coins; // value     chain: String; // target }  let payload: Slice= stake.forward_payload;        let forward: Cell = payload.loadRef();         payload = forward.beginParse();        let opCode = payload.loadUint(32);         let from = payload.loadAddress();        let jettonMasterAddr = payload.loadAddress();         let value = payload.loadCoins();趁现在人多，我再问一遍，这个结构体的string我该怎么解析出来？大佬们。从payload_forward as remaing中解析这个chain的string类型，解析不出来。

gavin: 心情好最重要, 换库 (reply to 54775)

wikig: 好像不影响把，重新打钱进去，你的所有关联地址又能接着用了吧？（*跟Solana类似？ (reply to 54693)

gavin: 现在 value 你是能解析出来是吧 就差 string？ (reply to 54780)

Jackie: 不是，HAHS化后，半年就重置所有数据 (reply to 54782)

M: 对的 (reply to 54783)

wikig: 怎么说呢，您这套诉求，符合的也有。但是都是那批原教旨主义的POWchain 从BTC到XMR到DOGS。  至于公链，尤其是项目方还活着的公链......... 我的评价是，开心就好 (reply to 54767)

wikig: 毕竟使用公私钥算出来的地址不是应该，一样的吗。  那 租金 应该只是现在，现阶段无法调把 (reply to 54787)

Jackie: 是的，SOL只是空间占用费，销仓，TON相当于燃烧 (reply to 54788)

M: 我想用这个或者fromSlice解析，但是这个用不了，解析不出来

wikig: 阿这，也就是说，地址会变吗？？？（不至于吧，地址应该不变吧） (reply to 54790)

gavin: 试试这个呢 (reply to 54785)

Jackie: 没毛病，至少我看到的文档是这样，因为TON的地址也是合约，所以也会被销毁 (reply to 54793)

wikig: 我的理解是，TON不行吗（  销毁了之后，同一个公私钥对应的地址应该也不变吧 (reply to 54796)

M: 这样吗？没用 (reply to 54795)

gavin: 把它编译后的 func 代码看下 (reply to 54800)

gavin: 看看它转成了什么func

Jackie: 他的原文是重置所有数据 (reply to 54799)

wikig: 可是这个应该也就是，合约钱包的空间占用租金吧。  然后如果你有什么jetton资产，应该是在你的 对应的 jetton 的 jetton wallet 里面吧（类似PDA的一个独立账户？）  所以你原始的钱包，什么信息重置，好像不是很要紧？ (reply to 54790)

Jackie: 地址没变但数据变了呀，被重置了 (reply to 54799)

wikig: 只要地址不变，验签逻辑没变，那照逻辑来讲，不是应该重新deploy一遍自己的wallet，init，之后还是有权限控制自己的jetton wallet 之类的吗 (reply to 54804)

Jackie: JETTON WALLET也是合约吧，也是会被销毁的啊 (reply to 54804)

wikig: 但是 jetton wallet 是个独立的合约有租金的呐  意思是你人为销毁了自己的主账户，对jetton wallet应该是没有影响的吧 (reply to 54808)

wikig: 如果你说的是拉长时间线，所有相关都自动销毁了那确实没办法 (reply to 54808)

Jackie: 对的，但你不能保证你的JETTON帐户不被销毁啊 (reply to 54810)

wikig: 但是毕竟现有主流模型（除了EVM）都是租金模式吧，从 near 到 solana (reply to 54811)

Jackie: SOLANA租金和时间无关 (reply to 54815)

wikig: 我的理解是，现阶段与时间无关  （之前我看sol社区不是说打算后面再说这个部分吗？）1 (reply to 54816)

M: 这样，主要是，知道这个string多长，那我怎么截取这个string然后frombase64那 (reply to 54802)

Jackie: 事实上已经放弃时间这个选择了吧

Jackie: 从逻辑上很扯淡

wikig: 我的理解是，这套逻辑很可能最早想缓解/降低 全节点数据爆炸激增问题。  毕竟高性能公链最后都会面临这个问题。 (reply to 54819)

Jackie: HASH化就可以了，但删除数据是不是违背了区块链精神 (reply to 54821)

M: 但是solana可以退租金，你不租了就关闭程序就好了。

Jackie: 是的，我觉的SOL的设计还是挺合理的 (reply to 54825)

gavin: 你看下 $Cells_fun_asSlice的实现是怎么样的 (reply to 54818)

wikig: 毕竟整体操作就相当于把整个链上数据包由N个全节点全球性的分别负载N份。  在原教旨主义的一些chain里面由于TPS和快容量本来就不大的情况下，确实可以这么来  从BTC 到 ETH LTC BCH 可能这么做是基于TPS不大的 (reply to 54820)

wikig: 我的态度是Solana可能最后也是得继续下去  毕竟SOLANA的全节点现在也是真的tm重，太重了  它再不减减肥，估计最后会变成极度中心化的事情，又回到只有那几个头部云计算厂家能跑的时代（虽然现在已经够中心化了）  然后就变成了去中心化和永久化忠孝两难全的问题了 (reply to 54819)

gavin: 哦我看了 func里面 字符串就是 slice 存的 没问题 (reply to 54829)

M: slice $Cell$_fun_asSlice(cell $self) impure inline {     var ($self) = $self;     return begin_parse($self); } (reply to 54829)

Jackie: 所以WEB3精神现在看起来就是个空中楼阁，庞低骗局 (reply to 54834)

Jackie: 😂

gavin: 你上游的 string 是怎么传进来的 最初的是不是用的 storeStringRefTail 过来的 (reply to 54836)

M: let depostiJetton = beginCell()         .storeUint(0, 32) // 0 opcode means we have a comment         .storeAddress(deployer.address)         .storeAddress(jettonMinter.address)         .storeCoins(sentAmount)         .storeStringTail("0xDead")         .endCell();

gavin: 我之前解析过 没问题的 Cell里面用 storeStringRefTail

wikig: 如果你从 tech 角度来讲的话。是的。  就像我上面说的，除了那些原教旨主义chain，尤其是bitcoin doge 和 XMR ...... 其他我都只能说，开心就好 （项目方都还没解散的chain谈什么decentralized）  更多相当于去中心化对实用性以及金融属性的妥协。 (reply to 54837)

gavin: 用RefTail

a: 请问国内能开发ton 小游戏吗，会被请喝茶吗

Jackie: 赚钱了就会。。 (reply to 54844)

Jackie: 不赚没事

gavin: 精辟

M: 怎么个意思 (reply to 54843)

a: 那如何定义赚不赚钱呢

gavin: 不赚钱人家帽子叔叔都懒的屌你

a: 那你们都在国外搞？

gavin: .storeStringTail("0xDead") 换成 .storeStringRefTail 试试 (reply to 54848)

gavin: 我们都不赚钱 (reply to 54851)

Jackie: 你以为叔叔们都是吃干饭的？你赚没赚钱，他们比你自己都清楚 (reply to 54849)

x: 这是怎么回事？

wikig: 我盲猜iframe (reply to 54856)

M: 👍可以了，感谢大佬 (reply to 54852)

gavin: 不客气 (reply to 54861)

a: 好的，感谢解答

Jackie: 如果赚钱了还没找上你，只能证明你赚的太少了。。不够出动一次的成本的。。 (reply to 54858)

wikig: 咋说呢，还得看小地方的财政紧张程度😆 (reply to 54858)

gavin: 我当什么疑难问题呢 原来是传错了🤣 (reply to 54861)

Jackie: 看来大佬是有经验的。。。 (reply to 54866)

wikig: yep，所以我们在国内就在做conflux数图链那边的东西 (reply to 54870)

M: 那他这个storeStringTail有什么用，解析不出来玩什么 (reply to 54867)

wikig: 主要是跨省基本不怎么讲道理淦 (reply to 54868)

gavin: 别讨论了, 群里说不定有监控😏

Jackie: 国内除了几个和公安合作的安全公司，还有搞国内链的大厂，哪个公司敢站出来说我赚钱了，从区块链赚的，搞不死算你命大，很多想搞的也要套马甲提个

Jackie: 太多跨省了，都是小地方的 (reply to 54874)

Jackie: 不讲规矩

wikig: 认同，但是有时候不是很讲道理是真的。吐吐保护费跨省这事儿........ 前两年疫情快扛不住的时候不是没出现过..... (reply to 54881)

wikig: yep，而且hk直接做试点，我觉得国内态度是，开放试水的。  GFW作为基础门槛把达不到门槛的圈起来保护起来  剩下的，基本态度是不主动出重拳（ (reply to 54884)

wikig: 一般一线基本...还好。  但是之前真的很多，小地方跨省案例  莫名其妙就被跨省拘了，然后交点交点就出来了笑死 (reply to 54887)

wikig: 主要就身边人hhh (reply to 54890)

wikig: 这个倒没啥所谓，我反正在国内也是明牌的  哥们两袖清风，逮我还不够执法成本笑死 (reply to 54875)

x: 这里每个环节的ton

x: 都是发送者支付的 fee 吗

gavin: 源头是A 然后捉个往下传播 每次都要扣 具体是A出还是B 出还是C出 看合约的逻辑 (reply to 54895)

wikig: 锕这，都是试试水而已，写写开源project或者心血来潮折腾点什么罢了（ (reply to 54897)

wikig: 倒也没有，基本就是XMR那个时期的，那时候折腾coinhive类的XMR的randomX 浏览器 CPU 挖矿 (reply to 54898)

wikig: 别骂了，为什么最近折腾数图链呢，就是因为毕设打算交个微信和alipay基础的MPC wallet🤡 (reply to 54902)

wikig: 嗷，都是小打小闹笑死，不是做量化的，就是做点常规的聚合、MEV、三明治之类的  最近在折腾GBA.JS 在做GBAJS2和GBAJS3的缝合，然后打算包装成telegram webapp给自己玩笑死 （ 要是有用户的话后面再开个云存档系统和其他的配套服务系统，我和我身边自己玩的话.....那就从简哈哈哈哈） (reply to 54903)

wikig: 然后刚好国内，如果不折腾联盟链这块的话，CONFLUX就成了最好都选择笑死 (reply to 54904)

Aaron: 您可以在 @test_giver_ton_bot 获取免费的测试代币 (reply to 54406)

Aaron: MPC 算法用的是那个库，还是自己写的？ (reply to 54904)

wikig: 原本是打算，走 web3 auth来实现。但是考虑到 微信小程序和alipay小程序 都做了网络白名单限制，所以可能后续考虑自己上MPC算法库写，但是先阶段还是打算通过proxy和反代、穿透来尽可能实现走web3auth或者litprotocol的现成MPC解决方案 (reply to 54908)

Ton: 大学生这么厉害的吗 (reply to 54909)

Ton: 牛马了呀

gavin: 建议一步到位 直接自己用个MPC算法库 (reply to 54909)

wikig: 嗷，就是GBA掌机捏 (reply to 54916)

wikig: GBA.js是个 js版本的GBA模拟器所以......

wikig: 但是MPC这东西，虽然密码学上是确实有一定复杂性，但是头大的基本不是密码学实现上。  而是在于解决用户信任问题。  用web3auth的最大用处就是用web3auth背后的那套多签集群来解决用户信任问题 (reply to 54913)

wikig: （嘿嘿，俺也一样 (reply to 54921)

wikig: 主要是GBA类的复古游戏耐玩是真耐玩，而且在轻度游戏的移动端时代还是蛮合适的

wikig: 可惜了还是只本科狗捏（ (reply to 54923)

wikig: 确实，而且蛮适合做mobie的（虽然虚拟摇杆...是差那么点意思 (reply to 54927)

wikig: 闹麻了，经典大六毕不了业份子笑死 (reply to 54929)

wikig: 前几年折腾Depin去了，所以学校就一直放着鸽子 (reply to 54931)

wikig: 最近主要要忙的基本都折腾的差不多了（其实还差很多，但是team里多招了几个人笑死）

wikig: 别骂了别骂了，何止延毕，再不回去退学了都笑死 (reply to 54934)

wikig: 啊？不是啊，就国内当条本科🐕捏

wikig: CS专业一堆数学课，然后光速爆炸

wikig: （额，有没有可能，这里的team是我在外面的公司捏（ (reply to 54939)

wikig: 额...有没有可能，是我开的（ (reply to 54942)

wikig: 所以我们前几年折腾Depin去了。去做了helium生态的七七八八的设备，什么hivemapper之类的。

wikig: 然后这两年再TON和Solana生态上做产品和东西

wikig: （所以导致了我两年没回校报道差点给退学笑死 (reply to 54946)

wikig: （你好，是的😆 (reply to 54950)

wikig: 所以我们现在就在折腾Telegram base的 MPC wallet了 (reply to 54947)

gavin: 6啊

wikig: Crypto不都这样，三年开一单，一单吃三年笑死 (reply to 54954)

gavin: 大佬都是大学退学 (reply to 54956)

gavin: 三年不开张, 开张吃一辈子 (reply to 54957)

wikig: 还有点脂肪层，所以总体还算游刃，所以现在做项目没那么，迫切融资或者做代币分发

wikig: 嗷，我们三四年前也是做传统web2的 (reply to 54962)

wikig: 从IOT做到政府投标，最后混不下去了就滚去四川做矿机二道贩子去了

wikig: 然后就折腾web3了呗（

wikig: （所以险些惨遭退学 (reply to 54967)

wikig: 但是我们相当于有条不成文的说法  如果你提出的一个project，是非融资做不得的类型，那就可以把这个project毙了（当然，除非你的目的就是投资人那批钱） (reply to 54965)

gavin: 面向VC开发 (reply to 54969)

wikig: 所以这几年就在做社群、流量、垂直用户。  毕竟crytpo由于GFW的缘故，是被很神奇的分成了好多层完全不同的用户群  而且还有很多封闭社区。  所以传统VC或者KOL影响势力还是蛮大的。 (reply to 54969)

wikig: 九成需要融资没错（web2不融包吃不上饭的）  但是如果一个事情非融资不能做，那基本可以毙了  因为你和资方的姿态绝对是失衡的，这种姿态下其实最多赚个辛苦钱 (reply to 54970)

wikig: 现在敢这么玩的都怂了说实话 (reply to 54971)

wikig: 比如说TON上现在这堆minigame

User<6682207053>: 看了一下你的项目，bridge应该是很有盈利的

wikig: 最常见的玩法就是，换皮，起个号，反正都是credit不上链。  然后做用户群，懂不懂几十万几百万月活  然后吃一波二三线的机构  再那这批机构的钱扩一手用户然后上所 (reply to 54976)

wikig: 我吗？bridge那玩意儿是去年底给我们自己team写的一个example，来作为连接 tonconnectUI和多钱包deeplink调起的开源demo用的😆  那玩意儿也就接了个1inch的api (reply to 54979)

wikig: 话又说回来，还真有人用，所以本来是打算等 TON这边的bridge重构了之后我也重构一下的（至少改的好看点）  但是现在好像TON的bridge得等明年 (reply to 54982)

User<6682207053>: 不知道你对ton生态，如果小团队来做的话，非minigame的项目，有什么好建议吗

wikig: 是的呀，但是crypto的特性导致了自有用户群的模式下，可以做裂变和流量转化，以及很方便的公募私募 (reply to 54977)

User<6682207053>: 质押，借贷

wikig: 因为就是个给内部看的example啊，然后刚好到现在都没人做，所以就真的有人用了啊（ (reply to 54988)

wikig: 有人用了就不再只是个example了啊哈哈哈哈哈 (reply to 54989)

User<6682207053>: bridge是有需求的

wikig: yep，但是在crypto是再常见不过了 (reply to 54990)

wikig: 怎么说呢这个问题 (reply to 54984)

wikig: 得看是哪方面了 (reply to 54984)

wikig: 如果是传统的链上lending的话，我个人态度是比较悲观的 (reply to 54987)

wikig: 这么说，确实也是。  从合规性角度来讲，不可避免的（但是从资产流动便利性来讲，天然的） (reply to 54992)

User<6682207053>: trx那边的usdt不知道有没有多大的需求转移到ton这边

wikig: （但是这块官方做有。虽然估计是涉及到USDT那边开出来的条款导致了KYC体系很复杂闹得 (reply to 54999)

wikig: 这个问题是这样的。  比如TON上的Defi生态，到目前来看还是...... 不能夸至少。  说到底还是合约开发者太少。   FUNC / TACT 的用户群确实不够多   导致大部分开发者都热衷于与Telegram绑定做web2.5 (reply to 54997)

User<6682207053>: defi dapp还是质押、借贷吧，但也要把其它链的钱跨过来,trx那边的资金是天然符合的

User<6682207053>: 目前我们在弄借贷的产品，可以说就是抄功能吧，只能从营销模式上面去突破

User<6682207053>: 不管aave,还是evaa逻辑是一样的

wikig: 这里面涉及的问题五花八门。  1.farming pool或者机枪池，可以做的，但是没有人做目前。 当然，如果算上流动性，也算有吧  但是总的来说，由于Dapp种类不是很多，所以实际上，能够staking的地方也就 dedust / stonfi / tunnel 和 tonstak这种年化低保   2.衍生品。  这个问题就面临了采用哪套逻辑的问题。  链上衍生品，说是话做订单簿逻辑的，dydx现在都算是泥菩萨过河  做对赌逻辑，那理论上可以，但是func没有原子性（当然，可以每个function都写个回滚） 。   所以最后可能又会回归web2.5 (reply to 55002)

User<6682207053>: 单纯staking是没有多大意义

User<6682207053>: staking之后可能要资金利用最大化

wikig: 当然，我觉得核心的问题，当然也不能算问题，算feature。  就是TON和Telegram的深度绑定。  这是个很好用的东西能够快速扩展用户群没错。  但是对Dapp生态其实是打压的。  最直接一个问题就是： 1.用户能用到 @wallet 都是中心化的  然后从项目运营角度来讲，你用户入口是中心化的，用户用的钱包是中心化的，那我再做个完全去中心化的Dapp就有点脱裤子放屁了（ (reply to 55010)

User<6682207053>: restaking之后再borrow

wikig: 对赌倒是简单点，像GMX那种就不算撮合性质了，单纯就是向用户拿钱募资，然后开赌场，跟任何一个赌徒做相反操作。  然后最后靠手续费带来的净期望值偏移赚钱 (reply to 55012)

User<6682207053>: ton生态要深度了解telegram的用户群体，不看ton的trade

wikig: restaking和循环借贷提高资产使用效率这条路径怎么说呢......   我反正是觉得挺好的。  但是之前Dforce那边也在做这事儿，但是最后.......好像没啥反响 (reply to 55016)

wikig: 狠反直觉对吧，但是GMX还真就赚麻了  赌徒赌徒，十赌九输 (reply to 55018)

wikig: 所以核心就在高额的操作手续费和持仓费率，导致的净期望值的偏移。  然后技术够大收敛之后GMX总体上就是浮盈的 (reply to 55018)

wikig: 这倒没有，他们Oracle用的是chainlink的高速price feed (reply to 55022)

wikig: 主要我们两年前打算做衍生品协议的笑死

wikig: 但是最后毙了（还好毙了）

wikig: 所以就需要你能够把你的底池募的足够大，然后单位多空开单量加上限限制捏（ (reply to 55027)

wikig: 底池足够大就相当于把基数收敛了，就会整体符合这个数学期望 (reply to 55030)

wikig: 当然，高波动或者单边行情，我的理解是容易亏的 (reply to 55031)

wikig: 但是chainlink本身的寓言机更新在单边行情就是会失效（

wikig: 而且他们还会在中心化交易锁跟自己的资产做同向对赌（当极度单边的时候）

TronGas.io: 请教下9月3日程序开3个月的会员，多给的TON找官方可以退回来吗

wikig: 相当于用户来他这里开了个单边的单子，然后他就........去到中心化交易所去开对应的单子，直接稳赚手续费 (reply to 55035)

wikig: 所以只有像上一轮牛转熊的那次他们这么干了 (reply to 55038)

Yang: 今天討論挺讚的

wikig: 啊？不是捏，我们是做depin的捏 (reply to 55046)

wikig: 额，有没有可能，主浪潮是两三年前刚卷过去的helium (reply to 55049)

wikig: 然后我们也不需要管商业模式本身，而是做硬件制造及配套固件呢（

User<6682207053>: 哈哈

gavin: 不会是做硬件钱包吧🌞 (reply to 55051)

wikig: 硬件+销售生产捏 (reply to 55053)

wikig: 倒不是，虽然也做有国 (reply to 55056)

wikig: 反正来来回回加密芯片就那几种方案，支持原生签名的就更少了

aier: 大佬们求教，这个地址kQDwpyxrmYQlGDViPk-oqP4XK6J11I-bx7fJAlQCWmJB4m74

aier: 是测试链的吗？我看ston.fi给的，但是我没找到

x: query_id 是什么作用

云决: 下午好

wikig: 看格式是testnet的吧 (reply to 55064)

wikig: 虽然但是，其实一直都蛮火的，不就硬件签名那套东西，说白了结构就摆在那边 (reply to 55066)

云决: 在线

wikig: 其实涉及到硬件钱包定义问题。比如我们之前的界定唯一标准是，最终你的私钥是否可读。  这个可读是包含了所有的中间内存状态、程序状态的可读。  所以才折腾硬件签名  （虽然理论上来讲，你把这个芯片盗走了.....也不是不能用hhh (reply to 55073)

l: 纯软件离线情况下没办法验证正确吧

gavin: 数字人民币就是伪区块链 (reply to 55078)

gavin: big 胆😎

gavin: 我没用过啊, 现在数字人民币只是离线交易了吗？ 双端离线那种 (reply to 55084)

wikig: 逻辑上是。  但是你如果你把这个硬件拿到手了，那相当于还是有处置权。  正常情况下，你的外部软件是确实读不到，硬件芯片里的私钥情况。  也没有办法读到。  但是如果你偷了个硬件钱包，自己飞线，然后走软件调用，也确实是能拿到你想要的对应的签名的（物理拿到硬件后，理论上 (reply to 55076)

wikig: 离线交易这事......我的评价是，逻辑上很难走得通吧（双花问题）  硬件钱包真的就只是硬件做了个钱包，换句话说其实也就是个u盾签名器 (reply to 55088)

wikig: 是的，因为说白了就是个装私钥的口袋 (reply to 55094)

wikig: (yep ， 所以像我是没有用硬件钱包的习惯 (reply to 55098)

wikig: 甚至是全套云备份

wikig: 因为丢私钥的概率比被盗概率大多了（

Champer Wu: 我好像有遇過類似的問題，應該是bridge的問題，當初把bridge換掉就好了。 詳細內容，我trace一下之前的專案跟你說，印象中只有 ton space wallet有這個問題而已 (reply to 54581)

wikig: 感谢！请问这里的 “把当初的bridge换掉” ， 是用哪个方法实现呢？  因为我相当于操作流是走tonconnectui 吊起的mask，然后我是不知道用户有没有走 @wallet 的 (reply to 55103)

Champer Wu: tonkeeper好像不會這樣

wikig: tonkeeper 好像是能正常拿回调的。 (reply to 55105)

aier: 求问各位大佬们，ston.fi那个getpooldata砸区分地址0还是地址1啊？

aier: 我看的一脸懵逼，因为你拿池子地址的时候，不管传a，b还是b,a拿到的都是一个地址

aier: 用这个地址去拿数据，我怎么知道你的token0是代表的a还是b啊？

cajh: 用pTON 地址去做对比，我是这么做的

cajh: 区分jetton和pTON

aier: 万一我是全jetton swap嘞。。。

aier: 比如 dogs 和 usdt

Champer Wu: 應該是一樣的問題，我晚點有空來看看 (reply to 55106)

cajh: 正常都是按加池子的顺序给你传的

aier: 也就是说只有jetton和ton这种例外？

cajh: 它返回的是有序

cajh: 不是的 (reply to 55117)

cajh: 都是有序包装好传给你的

cajh: 我加的那一步只是为了计算市值

Jackie: BTC的闪电网络，不就是基于算法的防双花吗 (reply to 55102)

aier: 没明白大佬，我应该咋区分？ (reply to 55120)

cajh: 拿到地址去 get_wallet_data 获取到 jetton 地址，就知道是哪个币了

aier: 我去试试

Play: 请教一下  现在mini app要增加提现功能  要怎么给用户转TON呢?   参考这个吗? https://docs.ton.org/mandarin/develop/dapps/asset-processing/ 还是说有别的文档呢?

Play: 嗯嗯   好的

Aaron: 大佬们帮看下，jetton notify阶段出了个错误提示，这种属于什么情况，这个gas从哪里出，我看几个钱包的ton余额都够用呀

Aaron: 到compute阶段说gas不够了，没有到action阶段，这种交易算是失败了还是成功了。

gavin: 这是一个非常经典的错误

Aaron: 是目的地钱包没有部署吗？ 这里为啥是提示gas不够？

Aaron: 从浏览器上看，发出放token减少了，接受方token也增加了，只是notify没有发出

Aaron: 是说notify这个通知失败了，但是整个交易是成功的是吧？因为看余额都改了。

Kai: 你好，我是Twendee公司的Kai，来自越南。我们公司已有将近十年的科技经验，专注于区块链解决方案、软件开发，以及类似“点赚”、交易机器人和钱包等Telegram小程序的开发。我们最近的成功案例包括、Purrfund（4万用户）和DFantasy（3万用户）还有等等。  我们非常期待和大家交流合作的机会，欢迎联系我(可以DM我），我们一起探讨合作的可能性！

Aaron: 就是说，钱包收到了Token，余额也增加了，但是因为没有初始化，所以没有代码来接受这个notify是吧。 (reply to 55140)

gavin: 你把你完整的tx发一下

Aaron: 这个通知的gas是从被通知的一方，也就是接受方钱包收取的是吧，所以提示gas不够。 (reply to 55152)

Aaron: https://testnet.tonviewer.com/transaction/2c425495e0be8da212afa57d2960a0ade4173b29e287cf4c98dd4bc264b54c67 (reply to 55153)

gavin: 这个地址的状态是有钱但是没代码

gavin: 没代码处理不了Jetton Notify

cajh: 没初始化

gavin: 准确的说不是没代码 就是没有初始化

Aaron: 我是线下生成的地址，然后从其他钱包给这个地址转账。钱是可以到的对吧，只是收不到通知。等我发一笔提现就会部署代码，后面就可以收到通知了。 (reply to 55157)

Jackie: 电子现金也是默认抵押了的吧，里面的余额就是抵押额 (reply to 55128)

gavin: ton 肯定能收到 因为你用的是 不回弹

Jackie: 我是无法相像没抵押怎么去从算法上防双花，肯定是要先有余额才行的 (reply to 55169)

Jackie: 。。我说的是数字货币 (reply to 55172)

Jackie: 支付宝是什么玩意儿，那东西不就是个数据库字段吗

Jackie: 数字人民币

Jackie: 不是离线可以用吗

Aaron: 有几种写法呢？指点一下。 (reply to 55169)

gavin: 不是写法 是 WalletContract 的合约 只要是标准的目前都是没问题的 (reply to 55180)

gavin: 不会的哥 (reply to 55183)

gavin: 都不是一个合约地址

gavin: 最后那个 notify 一般都是 忽略一切错误

gavin: 不管它是否存在

gavin: 是的 是拒绝了的 (reply to 55187)

M: 那我这个呢，它下面这个presist state没执行到。会不会有影响

gavin: 这个是你的合约问题 (reply to 55193)

gavin: 理论上没影响, 但是建议你修复下Excess的 op

M: 就是我再合约处理一下接受到这个op的时候操作是吧。

Jackie: 选哪个啊，兄弟们

gavin: @wisdom_yang 这哥们是个广告 (reply to 55200)

云决: 包一丝 群发的

云决: 删了

gavin: 你这个是啥玩意？考试吗 (reply to 55201)

x: 13 (reply to 55201)

Jackie: 学习 (reply to 55209)

x: 我发送 jetton 中，整个步骤是不是所消耗的 ton，都是从我源那边传入的 ton 来扣除的？

x: 如果我第一次发送 jetton，那么对方如果没有 ton，是不是就会失败

x: jetton wallet 本身不是没有ton吗，它能够支付得了合约调用吗？所以是不是我传给某人 jetton，就必须携带一部分 ton 给他，以供他 deploy 这个 jetton 合约，以及接受 jetton？ (reply to 55219)

Jackie: 😂

x: 我不是很明白这个 jetton 合约，我传入它的时候，相当于直接帮他部署了？那么这个fee 是我出吧

x: 就是初次传入的时候，就自动 deploy 那个

User<6684618535>: Any dev here needs assistance in setting up Telegram group channel and handling of social media can dm me am available 24/7

Champer Wu: 我找到了，方邊提供一下你在browser 發出的connection event嗎？ (reply to 55106)

a: 大佬们，想问一下自己做了小游戏的话，该如何推广？

User<7477302810>: 花钱罗 (reply to 55236)

Champer Wu: 官方一開始給的橋是這個 (reply to 55106)

a: 请问给谁呢？ (reply to 55238)

Champer Wu: 你改用 bridge.ton.space 看看 (reply to 55106)

Champer Wu: 應該就解決了

User<7477302810>: 找找线下吧 (reply to 55241)

M: SandBox正常，测试网报错，这可咋整？

Champer Wu: 去參加 hackathon，跟主辦單位套些近乎 (reply to 55236)

Champer Wu: 這看起來是 parse  boc時 記憶體錯位了 你可以把boc包完之後自己在線下解開看看是不是正常的 (reply to 55246)

Champer Wu: https://rainboltz.github.io/awesome-ton-toolkit/ 這個工具滿好用的，推薦給你 (reply to 55246)

M: 好嘞,我研究研究 (reply to 55249)

a: 好的 (reply to 55247)

teamo: 我在dedust 添加了LP 池子 ，ton 链 有 三方 锁池子的没？

wikig: 是的，但是现有闪电网络通道，如果我没有理解错的话，可以说基本都不做关闭通道操作的吧 (reply to 55123)

wikig: 好！，感谢！，我尝试下看看怎么操作 (reply to 55243)

wikig: 懂了，应该是tonapi的bridge的问题 （ ？ (reply to 55239)

Champer Wu: 應該是，當初用官方預設值 bridge.tonapi.io , 一直拿不到 response 改用 bridge.ton.space就有了，我猜接口不一樣，換bridge就解決了 (reply to 55256)

wikig: 可能规范更新了，但是tonapi没做更新 (reply to 55257)

Champer Wu: {     "app_name": "telegram-wallet",     "name": "Wallet",     "image": "https://wallet.tg/images/logo-288.png",     "about_url": "https://wallet.tg/",     "universal_url": "https://t.me/wallet?attach=wallet",     "bridge": [       {         "type": "sse",         "url": "https://bridge.ton.space/bridge"       }     ],     "platforms": ["ios", "android", "macos", "windows", "linux"]   },  config.json也提供給你 (reply to 55258)

wikig: 谢谢！！！！！ (reply to 55259)

Aaron: 在向离线生成的地址发送外部消息时能同时初始化钱包吗？要传那个参数，没找到，帮忙提示一下。 (reply to 55160)

gavin: 可以的 (reply to 55263)

gavin: 你用标准的@ton/core 里面封装好的 WalletContract 类就行了

gavin: 底层都帮你做好了

gavin: 当然如果你自己做也是可以的

Aaron: 在用java的ton4j 找不到例子哈，能发个链接吗？多谢哈

gavin: 我智能找到typescript的例子

gavin: java的你可能需要自己实现下

gavin: 就是有点绕,底层库一层套一层

vision: 现在项目做好了，怎么推广 这个大伙儿有什么好的方式么？

recovery: 老铁们，解释 ton 交易 怎么获取交易的 seqno

Niu: 没办法啊，我目前只能获取到 inmsg hash 还不对 (reply to 55294)

Niu: 感觉有点乱

recovery: 那怎么确认交易的唯一性

Niu: 我目前通过备注做的

Niu: 有点乱，没有直接给一个hash

recovery: 这是个好思路

recovery: 转帐时只能指定seqno

recovery: 唯一性

Niu: 你说的是类似eth的 nonce吗 (reply to 55301)

recovery: 是的

Niu: 我现在还不知道咋指定

recovery: eth 交易发送的时候已经知道了hash

Niu: 我用的库不支持指定seqno

Niu: ton 发送的时候可以告诉你 当前消息的hash ，但是这玩意在对方钱包里是另外一个hash (reply to 55306)

Niu: ton的交易是一个合约向另外一个合约发送消息，两边的合约各自存储一个消息，两个消息的hash 还不一样

Niu: 不像eth的hash 是唯一的

recovery: 这b 玩意，转帐也不便宜

Niu: 我用的是这个库 xssnick/tonutils-go

recovery: in_msg: {    msg_data: {    body:

Niu: 我同时发送了3笔交易，只有一笔成功了，gas都是充足的，我怀疑seqno 重复了

recovery: 有可能存了seqno

recovery: 不过不知道怎么解释这段内容

recovery: 发tokenn 是可以获取到 ，我找的demo ,没有ton 转出的 demo

Niu: 我用通过调起 @wallet 发起3笔转账，都有一笔失败😔

Niu: ton转出比较简单 (reply to 55317)

Niu: Jetton 转出麻烦点

Niu: 不知道有没有解惑的开发者在群里啊

recovery: 整不到 seqno ，没办法确认交易唯一

recovery: const msgBody = TonWeb.utils.base64ToBytes(tx.in_msg.msg_data.body);              const cell = TonWeb.boc.Cell.oneFromBoc(msgBody);             const slice = cell.beginParse();             const op = slice.loadUint(32);             if (!op.eq(new TonWeb.utils.BN(0x0f8a7ea5))) continue; // op == transfer             const queryId = slice.loadUint(64);             const amount = slice.loadCoins();

Niu: 感觉ton 太灵活，又不完善

recovery: const queryId = slice.loadUint(64);

recovery: queryId 可以是seqno

Niu: 拿到的是seqno吗 (reply to 55325)

recovery: 是

recovery: 要设置成 seqno

recovery: 才行

Niu: 看起来可以指定seqno，随便指定吗

Niu: 还是必须要和eth一样有顺序？

Niu: 看来我用的golang的库不太行，不支持seqno的设置，他自己管理了

Niu: 最简单的办法用comment存一个唯一的订单号吧 (reply to 55330)

recovery: 好

recovery: comment  是用  payload: '123',  吗4

Niu: 不是，有个特定的格式 (reply to 55339)

Niu: 你查查文档

Niu: ton web 不太好用，我用的是tonconmect

Niu: https://docs.ton.org/develop/dapps/ton-connect/developers

Niu: ton web 看起来接口比较底层

User<6684618535>: Anyone looking for COMMUNITY manager can dm me

我要飞: 大佬们，我技术小白，最近在学习实验用JavaScript 写个 与ston.fi dex 合约交互的代码，执行上面介绍的tonweb  sdk  交易的代码，一直405 错误， 我节点用的是ton-http-api

我要飞: ton-http-api  这个节点怎么和以太坊的那种不一样，搞的有点蒙

Justin: https://blocks-onchain.surge.sh/Connect.html

Justin: 各位大神，这个网站安全吗？

Justin: 我在dedust组Ton/USDT出了问题，他们的管理员让我用这个修复

Justin: 手动链接钱包需要助记词，我怕被骗，大神们可以帮我看一下吗？

Justin: dedust管理员给的链接。。。

Justin: 嗯，好的，谢谢

— 2024-09-10 —

gavin: 这种一看就是骗人的网站 (reply to 55387)

Justin: 嗯，确实是骗人的

User<6020920297>: 你们好聪明啊

User<6020920297>: 我看你们聊天我都看不懂

teamo: 运行 yarn blueprint run  报 Service Unavailable   他运行的 是这个接口 https://ton.access.orbs.network/55013c0ff5Bd3F8B62C092Ab4D238bEE463E5501/1/mainnet/toncenter-api-v2/jsonRPC

teamo: 有人在用这个吗

Jackie: 有离线交易的 (reply to 55254)

Jackie: 离线交易不就是这样 (reply to 55416)

teamo: 如果我想换 一个 接口 如何修改 ，改 config 的 network 中endpoint 这个参数吗

Jackie: 最终肯定是要上链啊，但中间是可以离线交易的 (reply to 55420)

teamo: 对，blueprint 他的接口 走不通了

Jackie: 难道数字货币不需要最终上链吗

teamo: 用这种 自定义 config 的也走不通

teamo: 这种谁用过？ (reply to 55427)

gavin: blueprint.config.ts

gavin: 用这个配置文件

gavin: @tonapibot 去这个bot里面申请key

teamo: 跟后面的 参数没关系，他 第一个 地址验证 就报错了 ，后面参数 不带也这样

teamo: 换成配置形式 运行的 ，说我地址无效

Sun: 这种结构体返回值不支持吗？

Sun: ok

DaDa: 本周四（9月12日） 「TON生态之夜」嘉宾招募 ————— 计划主题：【TON生态的创新与求变之路】  背景介绍：在快速变化的加密市场中，TON 生态正面临全新的挑战与机遇。随着市场环境的不断变化，早期的一些经验和数据逐渐失去了参考价值。TG/TON 生态作为一个独特且充满潜力的生态系统，如何在这一变革期中找到创新的路径，是我们每一个生态参与者共同关心的问题。 ————— 欢迎 TG/TON 生态的项目方、开发者、投资人、研究者加入一起交流讨论。  有兴趣参与的伙伴，请给我私信，有信必回！

aier: 假的吧

Leo: 有ts与ton链上合约交互的例子吗？ 翻了几遍官方文档没有找到😂

Mana: How to use sendtransfer to initiate a transfer? I read the documentation for two days and didn’t understand it. (forwarded from Mana)

Mana: I'm really tired (forwarded from Mana)

Mana: Initiate a transfer and automatically open the wallet to confirm the transfer. (forwarded from Mana)

Mana: Do I need to use the API? Is there a basic transfer function? (forwarded from Mana)

Mana: ton里有自带的transfer吗，不用自己写合约

Mana: 发起转账，打开钱包，确认转账，前端怎么用啊

Mana: 我研究两天了

Mana: 我真的

Mana: 🥹

Mana: 就比如ethers里这个功能

teamo: 用 yarn blueprint run  跑脚本的 一直失败 ，极低的概率成功，就没人遇到吗？

teamo: 这种该如何解决呢？

Yang: 防洪.... (reply to 55466)

gavin: 你设置api key 了没 (reply to 55470)

gavin: 失败大概率就是限流了

Yang: 請問是你朋友嗎？那你可以請他友好發問嗎？ (reply to 55480)

Yang: 我以為你是他朋友，著急幫他解

Yang: 主要我認為這不算誤禁，他的確觸發了 Rose 的規範，我剛剛看了一下他發的內容，確定沒問題，已經幫他解除了

teamo: 这种怎么解决，带上 apikey  参数吗 (reply to 55477)

gavin: 对

teamo: 是 --custom-key 这个参数吗

Aaron: 哪位大佬帮看下，用ton4j 库 java代码发送外部消息报错了，不知道什么原因。{"@type":"error","code":500,"message":"LITE_SERVER_UNKNOWN: cannot apply external message to current state : External message was not accepted\nCannot run message on account: inbound external message rejected by transaction B4A7E53E7725842F9920C68244A5910CCCB2E32CE2F24268FA4948D5E2D24BAF:\nexitcode=0, steps=0, gas_used=0","@extra":"9369634a-20bb-4ecd-8d7a-69cccc5b69f0"}

Aaron: 要整理一下，代码有点杂。 (reply to 55497)

我要飞: data: { ok: false, error: 'Method Not Allowed', code: 405 }   },   status: 405   大腿们，我用的自建的  ton-http-api  应该是v2 de api, 报错时什么问题，我想实现交易

我要飞: 加了之后还是这个错误😅

我要飞: 这个v2不会用呀

我要飞: LITE_SERVER_UNKNOWN: cannot apply external message to current state : Failed to unpack account state error

我要飞: 还是有

我要飞: 这个节点咋用 ，我想实现和交易，不知道用哪个端点，怎么操作

我要飞: 嗯，

我要飞: 根据这个

aier: wc，求问大佬个事情，我该咋样获取jetton代币的精度？

aier: 我之前找的getTokenData方法

aier: 但是我在请求ston那个代币的数据时候，jetton_content变成网址了

aier: 这个数据能整成网址我是没想到的，同时想问下，这网址还能改不？会不会有一天他吧data网址变了，然后说我们精度是100位的情况

我要飞: 我写了个测试节点能不能用的，节点是好用的，就是我之前的交易的那个不知道为什么失败的，那些代码我是stonfi 文档上找的

我要飞: 😂头疼

gavin: 这有啥想不通 nft 的metadata 不一直这样么 (reply to 55528)

wikig: 逻辑上可以，但是EVM上NFT也是这个逻辑。  都是由metadata指向对应的image或video  所以一般来讲，为了防止篡改，一般都是塞到IPFS上的  但是反正现在其实大家也不care，所以你就是防到个中心化的CDN 如 CF这种，也没有人管 (reply to 55528)

aier: 😂就怕他那天跑路了，一改，我手里的代币都成废纸了

gavin: Yes, if you mind, you can choose onchain mode to store in cell

gavin: There are risks in buying coins, so be cautious when investing (reply to 55540)

wikig: 理论上，可以这么玩 (reply to 55540)

gavin: 我靠 这个是个中文群, 刚不小心点了那个Translate to English 我还说怎么大家都说英语了

aier: 😅希望到时候真有跑路的，ton会补偿下吧，我估计ton越做越大，肯定后面会有这个问题

aier: 代币多了，什么项目都有

wikig: ton包不补偿的。项目跑路跟ton有啥关系 (reply to 55545)

aier: 那不怕被骂死

wikig: solana上scam千千万，至于EVM那更是钓鱼铸造机

wikig: 这又不是ton的特性（

wikig: 算是所有智能公链的共性

aier: 但是其他链上合约数据不好改，也基本上改不了，我的意思是项目方利用改合约的手段跑路

aier: 这种情况，韭菜估计会冲ton官方

wikig: ？ (reply to 55552)

wikig: 不是...... 其他链也好改的一啊 (reply to 55552)

wikig: EVM随便找个ERC721 指向的metadata都是外部的啊（

wikig: 外部的metadata就可以像上面那样做奇奇奇怪怪的操作（比如删图，比如改稀有属性等 (reply to 55556)

gavin: 他估计是刚进入币圈

aier: 😅行吧，能指向的另说了，这也是erc20nb之处了

gavin: 被割怕了

Ginta 🦴: 最近Ton价格又回来点了

Ginta 🦴: 可惜我4.9全抛了

wikig: 总的来说，EVM合约，solidity这类的开放性比sol和ton要开放很多（毕竟真的可以diy代币合约或NFT合约。  TON和solana至少是有bytecode的类型校验的，solana更是有program限制的。  solidity才是最狠的，想怎么写怎么写，给你整个隐晦的后门随便rug (reply to 55552)

yang: 大佬们，请问这几种模式 第1、2种支付GAS 是从哪里扣取

aier: 优秀，还好我谨慎，没公开合约的代码的项目我都不玩 (reply to 55563)

wikig: 我说实话，就算是公开的，我也不一定审的出来有后台（ (reply to 55566)

yang: 有没有办法提前知道转账手续费呢 (reply to 55565)

wikig: 我也听他们这么说，涉及到价格预言季好像没公开 (reply to 55567)

aier: 公开的放心点。。。dudest和ston都有部分没公开

wikig: 给你随便塞到哪个犄角旮旯，或者放一个block.time驱动的条件判断，放几个烟雾弹我就被绕晕了笑死 (reply to 55568)

我要飞: 有没有大腿知道，这个v2 的api 这个rungetmethod 咋用呀

我要飞: 就我想执行交易的话，要传入什么参数

gavin: 执行不了交易 (reply to 55582)

gavin: run get method 看名字就知道是只读

我要飞: 那v2 的话想执行交易用哪个功能？

我要飞: sendboc?

Lan: 🥹

Champer Wu: 對 (reply to 55586)

cj: https://github.com/Web3-Duck/ton-transfer 开源一个jetton 批量转账，单次最大支持119笔，可添加评论。感兴趣的可以看看

wikig: 盲猜是单次payload大小限制？ (reply to 55597)

yan: 这是不是钓鱼的

wikig: 一概别信就对了 (reply to 55601)

wikig: 看一眼bot名就对味了

yan: 哈哈哈哈，确实是钓鱼的

wikig: 显然是没抢到  @Ton_Airdrop_bot  所以用的近似字符替代

Champer Wu: 是吧，我之前開了一個帳號嘗試了一下 所有自己發的垃圾幣，包含殘值的ton都給他轉走了 (reply to 55601)

cj: 首先在 TON 区块链中，Cell 是一种基础的数据结构，用于存储和传递信息。每个 Cell 最多可以包含 1023 个连续排列的比特位和最多 4 个对其他 Cell 的引用（refs）。这种设计使得 Cell 可以被视为一种四叉树或有向无环图（DAG）。

wikig: 可是jetton转账不是蛮麻烦的（又是创建关联账户 jetton wallet 又是 退款啥的 (reply to 55604)

Champer Wu: 想試試看的話，記得開新錢包玩，不然要欲哭無淚了 (reply to 55605)

yan: ☠️

cj: 一个cell只能存3个address,又只能引用4个ref

cj: 然后是这个原因

wikig: 0.08 TON . 0.4 U . 2.8 RMB   获客成本有点高吧

wikig: 下图的意思好像是，最大stacks的循环层数 ？ (reply to 55617)

wikig: 估计是复杂度限制防止持续loop然后卡死主网

cj: 合约都开源了😄我只是把该写的功能写上，我自己没用 (reply to 55619)

cj: 至于为什么是119，测试结果最大到119。然后肯定和那些原因分不开的

Champer Wu: https://answers.ton.org/question/1536438046080110592/is-there-a-maximum-storage-limit-for-a-smart-contract 這個限制也是為了防止無限loop卡死主網嗎？ (reply to 55621)

wikig: 那就不懂了，这个看起来像是限制最大合约大小限制的一个限制，但是为什么要有这个限制，我猜也是防止stacks太深吧（ (reply to 55624)

aier: ton上手续费是真的贵，现在已经超过eth链上的手续费了

wikig: 看是什么操作吧（合约交互确实贵 (reply to 55626)

aier: 唉，难搞，感觉盈利追不上手续费

wikig: 嗷，这样嘛，我还以为是防止你进行栈存取操作太深（ (reply to 55630)

wikig: 啊？做交易吗？ (reply to 55629)

wikig: "由于最大的CELL深度"   我的理解是，他这里是指可嵌套堆放的数据层数吗？ (reply to 55633)

Champer Wu: 如果要做一個類似evm compound 的服務，這樣真的特別難處理呢 (reply to 55630)

cj: 👍

gavin: 我之前看到过一个 ton 上的借贷抵押项目 (reply to 55637)

gavin: 已经有团队做出来了呢

Champer Wu: 異步就很難這樣設計 要是TON可以像 SUI or SOL 這樣選擇async or sync 的話 一切就會簡單很多🥲 (reply to 55639)

Champer Wu: 我還需要多練練

wikig: 我其实到现在都不知道EEVA怎么实现在没有交易原子性的情况下进行过抵押借贷的 (reply to 55644)

Champer Wu: 叫什麼來著？ (reply to 55642)

gavin: eeva啊

wikig: 还有 tonpound

gavin: 每隔一段时间 就会有开发者吐槽这个异步 哈哈哈哈

gavin: 没有开源看不了 (reply to 55653)

Yang: 你是不是也看習慣了 XD (reply to 55652)

gavin: 他还有清算呢

Yang: 清算 Bot 有公開

gavin: 对 习惯就好 😆 (reply to 55655)

gavin: 你怎么这么清楚 是不是项目方就是你 (reply to 55657)

gavin: 没有 只开源了清算bot (reply to 55659)

Yang: 他們有辦黑客松阿～ (reply to 55660)

wikig: 最终保证原子性吗......   那岂不是得像dex一样保障每个环节都在自己的合约手上（  那是不是就做不了flashloan了 (reply to 55653)

gavin: 是最终一致性 (reply to 55663)

Yang: 公開資料都找的到，我代碼小白，粗淺讀一讀而已

wikig: 对的，要保证最终一致性，我的理解是，中间的行为得是可控的吧（ (reply to 55664)

Champer Wu: solana是 async 吧 他是poh的做法 (reply to 55651)

jun_song: 请问下如何用ts扫描区块 用来记录我们dapp用户的进行的链上交易记录

Champer Wu: 你要採用中心化的作法還是去中心化的做法？ (reply to 55672)

jun_song: 中心化的 (reply to 55673)

jun_song: 请问文档在哪里呀 (reply to 55674)

Kai: 你好，我是Twendee公司的Kai，来自越南。我们公司已有将近十年的科技经验，专注于区块链解决方案、软件开发，以及类似“点赚”、交易机器人和钱包等Telegram小程序的开发。我们最近的成功案例包括、Purrfund（4万用户）和DFantasy（3万用户）还有等等。  我们非常期待和大家交流合作的机会，欢迎联系我(可以DM我），我们一起探讨合作的可能性！

Champer Wu: 去中心化，你就用ＡＤＮＬ自己跟Liteserver溝通 中心化，你可以跟toncenter 的indexer溝通，tonx api , ton api, 好多家 (reply to 55673)

Champer Wu: 原來... 怎感覺跟TON完全相反 哈哈 合約內部seqno，外部全是async (reply to 55671)

Champer Wu: 閃電貸對營運方的風險是還是挺高的吧 所有的交易都在同一個區塊的話 客戶端掌握得好，或者他自己是礦工，直接把項目方嚕爆 (reply to 55668)

gavin: 除非有bug, 不然就是0风险

gavin: 断言下还回来的钱 > 借出去的钱+利息就行了吧

大丁丁: 问下各位大佬，Ton链上keccak256库在哪里能找到demo

gavin: keccak256 ？ 你是说slice_hash吗？ (reply to 55687)

Champer Wu: 是evaa 還是eeva, 剛剛搜了一圈都沒看到 (reply to 55649)

gavin: https://evaa.gitbook.io/intro

gavin: https://evaa.finance/

大丁丁: 在合约上验证链下签名用的 (reply to 55688)

gavin: var public_key = in_msg_body~load_uint(256);         var signature = in_msg_body~load_bits(512);          int signature_result = check_signature(slice_hash(in_msg_body), signature, public_key);         throw_unless(401, signature_result != 0); ;; 成功则返回-1 (reply to 55692)

大丁丁: 在Solidity上是这样的😂

大丁丁: 在Ton上原来叫slice_hash，多谢大佬 (reply to 55693)

gavin: 哥 你拿solidity来举例 那就没意思了哈 都不是一个语言啊 (reply to 55694)

大丁丁: 👍

大丁丁: 大佬你肯定能懂🤣 (reply to 55697)

teamo: 大佬们 有人知道 如何 运行 yarn blueprint run 的 时候 追加 apikey 没

teamo: 这种加上 都是错误

teamo: 没找到 具体这个位置啊

teamo: 直接写死这个对吧

Sun: https://testnet.tonviewer.com/transaction/7998bcb8e3fe7bbb5060dde3a573fe0a5bb287ff61aea04b97e9ca3fec082660

Sun: 好吧

llllIIIIIIlIllI: 有大佬用过 除了 tonhubapi 以外的 http-api v4 的 RPC 服务吗

llllIIIIIIlIllI: 付费的也ok

Sun: 这段代码，转币出现了错误

Sun: 用的是这个

live: 请问我用bluePrint的script获取地址，为啥这一部分会报错啊？

Jackie: 我也觉的TON的GAS太贵，就以这个水平，TON的价格要跌10倍才是合理GAS

Jackie: 所以TON应该0。5U

teamo: 写死也不对，走不通啊 (reply to 55711)

Qubitcoin: ton_proof 只能连接钱包时才能触发吗？

Qubitcoin: 还是连接后可以随时触发？

大丁丁: 不是在Ton上验以太坊的hash，是在ton上验证链下的签名 (reply to 55702)

L: 大佬们， @orbs-network/ton-access包getHttpEndpoint请求rpc节点直接报错了Cannot read properties of undefined (reading 'v2-mainnet')  ， 有啥替代方案吗？

L: getHttpEndpoint({ network: import.meta.env.VITE_CONTRACT_net as Network })

L: 这个方法直接报错了

大丁丁: 不用也可以，只要能验证链下签名就行了 (reply to 55734)

live: 你是刚刚才开始连不上的吗？ (reply to 55733)

L: 大概半个小时了

大丁丁: 链下是这样签名数据的

live: 我也差不多，应该是它们的问题 (reply to 55742)

live: 刚刚部署合约，刚部署两个，第三个就出这个问题了

L: 没有一个固定可用的节点吗😂

live: 我倒是知道测试网的 (reply to 55747)

L: 可以用了

M: 这玩意直接放地址就行吗？总是405，403 (reply to 55750)

M: 我用chainstack申请的，也不行，我干脆就没用配置文件，堵他那自带的成功概率了😂

M: https://testnet.toncenter.com/jsonRPC'这样吗？ (reply to 55754)

M: 那我搞的其他的也是没加jsongRPC的原因可能？

M: 还真是

teamo: 我用的 bluprint  这几天都是失败 ，成功率1%

teamo: 咱们是同样的问题吗

Champer Wu: 這個討論串已經過時了是嗎 哈哈哈哈哈 (reply to 55652)

Champer Wu: 面對問題四階段 -> 面對它、接受它、處理它、放下它 我現在還在接受它的這個階段🥲

teamo: 有大佬 可以给看看问题吗？

淡泊明志: 什么 (reply to 55774)

teamo: 我 运行 yarn  blueprint  run

teamo: 之前走转账 方法 都可以操作代币的

teamo: 这2天 突然 报 503 ，服务不行了

teamo: 换参数 现在也不知道 怎么去换这个

teamo: 就这样 ，他都报错 ，说我的地址 是无效的

teamo: 我去升级下了 @ton-community/blueprint

teamo: 是 0.12.0 版本

teamo: 之前 是 0.4.0 都没问题

Champer Wu: Mnemonic 是註記詞的吧😳 (reply to 55782)

teamo: 嗯

teamo: 走的 助记词默认 ，直接 cli执行

teamo: 谁知道 是怎么回事吗？

Champer Wu: 我晚點看一下問題的context 看能不能幫到你 (reply to 55791)

teamo: 好的

teamo: @ton/blueprint  用这个 掉转账 方法之类的 有例子吗，我文档上 看的 都是 @ton-community/blueprint

jun_song: 请教下getTransactions这个方法获取到了地址的ton的交易记录 没看到代币的记录 该从哪里获取代币交易记录呢

jun_song: 这个data里是啥数据呀

jun_song: 好 谢谢

jun_song: 换成v3报错了

jun_song: 怎么解析呀 (reply to 55805)

jun_song: 好 我再看看 谢谢解答

jay: 大家有遇到 orbs-network/ton-access 老是报429么？

jay: 某个域名下报，换个域名域名就会好。

jun_song: 解析区块详情和交易详情的ts或者js代码哪里有呀

Ton: 哈喽哈喽，我想问一下，游戏开发godot支持吗

&: 在这里尝试。 https://docs.tonconsole.com/tonapi/streaming-api (reply to 55814)

— 2024-09-11 —

Aaron: 请教大佬，发送jetton时，jetton wallet的gas费是从发送的ton钱包扣费吗？还是每个jetton wallet上也要充上gas费。

Jackie: JETTON WALLET里也要有TON余额，用作租金 (reply to 55886)

Jackie: 没有就清空数据了

Aaron: 只是租金，不是用来付gas费的是吗？ (reply to 55887)

Kylan: 有想要找 TG 生态开发工作的朋友吗，欢迎私聊我

Jackie: GAS由发起外部消息的地址支付 (reply to 55890)

Aaron: 请教一下，转token时出现错误 cskip_no_gas 是什么原因，owner和jetton wallet都转了足够的gas了

gavin: 最好发完整的tx link

Aaron: https://testnet.tonviewer.com/transaction/7bbacd659d87a8d579df71dc8323cdde8422ace4d3ed11bbfe5282bdb3c3a0fe (reply to 55900)

Sun: 有大佬看看么？不明所以

Sun: https://testnet.tonviewer.com/transaction/e9151f3415f5dce06e8c325eb6adf64bfe4157b9606f99f8e55299ec961a48ef

gavin: 还是给的太少 (reply to 55899)

Aaron: 这个事什么原因，改了forward后错误变成这个了 (reply to 55906)

Sun: 这种错误代码去哪儿看？

gavin: 去看你的合约源代码 (reply to 55914)

gavin: 你的交易发错了 你没权限用Internal Transfer (reply to 55908)

Aaron: 好像是这几个值的大小关系不匹配，把amount改的很大后过了，还要研究一下什么值是合适的 (reply to 55913)

Aaron: 有时你在发送jetton时可能会遇到709错误。它说附加在消息上的toncoin的值不足以发送它。确保Toncoin>to_nano（TRANSFER_CONSUMPTION）+forward_ton_amount。如果forward_payload不是太大，TRANSFER_CONSUMPTION在大多数情况下可能是0.037。另外不要忘记附加足够的forward_ton_amount否则如果附加的值太小，你可能会遇到cskip_no_gas错误。

Sun: 请问这样写不行吗？我改控制权限呢？ (reply to 55916)

gavin: 不可以哦

gavin: 你用 transfer 别用internal_transfer

teamo: 有锁Lp 的三方没？

Mana: 哈哈

Mana: 兄弟们问个问题打扰一下

Mana: 我这个有什么问题，大概率问题出在哪里

Mana: 转账显示这个

Mana: 截图是不是没法出去

Mana: 能看见截图吗

Mana: 能看见截图吗

Sun: 可是我不知道这个地方怎么填。 (reply to 55922)

Mana: 哪里可能有问题

Mana: 失败

Doflamingo: 换量滴滴

Sun: https://testnet.tonviewer.com/transaction/94a5d940a81849e80a6e783e5b4073ae07c498347cb70cac146ba3993bcf88a9

Sun: 帮忙看一下，有点儿抽象

erick: 各位大佬，zero-address.ton 这个地址是官方地址吗？

ztwq: 请问大佬们，如何获取 STONFI 的 POOL 的reserver币的数量

erick: 哦哦好的,感谢 (reply to 55956)

Jeff: 直接打pool的get method (reply to 55958)

zilin: 写的非常好，质量太高了，我看了好几遍，太喜欢了～ ❤️ (reply to 52848)

ztwq: thanks.got it (reply to 55960)

wiwi: contract.sendTransfer({         seqno,         secretKey: keyPair.secretKey,         messages: [           internal({             value: amount,             to,             bounce: false,           }),         ],       });   sendTransfer 之後可以用什麼方式確認這筆轉帳結果呢? 發送之後沒有 tx 有查到兩種方式  1. 一直去掃 address 有沒有新的 tx  2. 在 message 塞特定內容然後掃到新的 tx 比對 message 內容

User<6684618535>: I can mod manage both telegram and discord good at social media handling

wiwi: ext msg ? 你是說組出來的 Cell 嗎 (reply to 55968)

ztwq: 有没有觉得现在 TON 扫TX 要十几秒，貌似很慢 (reply to 55963)

wiwi: 慢沒關係可以等，問題是你不一定等的到 (reply to 55974)

ztwq: 这就尴尬了，不一定等到。

Mana: 早告诉我，我都不用研究三天了 (reply to 55952)

IIIllll: 大腿们, 为什么 Jetton_minter 这个合约, 要 mint 需要发两次消息上链 send_message 不是可以通过合约直接调用合约的吗

Mana: 😭

Mana: 你这个代码里有提示怎么搞得什么插件 (reply to 55952)

IIIllll: 没呢, 官方给的 jetton_minter

Giessen: ton dns nft的元数据是怎么插进去 又大佬知道吗

IIIllll: 官方给的 test 里面也是发两次

IIIllll: 我看了 ston.fi 的那个合约, 对比了一下 jetton_minter 这个合约, 理论上应该会直接调用啊( 就是合约调用合约 )

IIIllll: 都封装了 internalMsg , 再通过 send_raw_message 发走才对

IIIllll: 发一条会报错, 发两条才能成功...

IIIllll: mint 和 burn 都是这样

IIIllll: 是不是发消息的 mode 用错了?

IIIllll: 这个 mode 不会继续往下走吗

Mana: 1

Champer Wu: 單看你的圖回應的話 jetton的走法是像這樣 如果對方沒有jetton wallet他會先幫對方部署 這是走兩次的原因嗎？ 我不知道，但如果你可以提供完整的實作流程 也許可以幫助大家一起釐清你的問題 (reply to 55989)

IIIllll: 就是说只需要发送一条消息出去, 就可以了吧

Alan | Torch: 代表Torch finance 感謝你的支持🙌   這裡有兩間DEX的分析以及alphaton 的懶人包：  https://blog.torch.finance/  https://t.me/alphaton/2390  https://t.me/alphaton/2378 (reply to 55961)

IIIllll: 哎, 一条消息又成了

Aaron: 请教大佬，通过api获得address的交易以后，如何通过交易获得blockid信息，看浏览器上有，但是api返回的交易信息中没有找到。

IIIllll: 是不是漏传了`区块高度参数`

Champer Wu: 你用哪個api (reply to 56007)

Aaron: tonlib.getRawTransactions (reply to 56009)

Mana: 那我不想transfer了，我想把jt wallet的代币转走咋搞

Mana: 我的jetton wallet有代币

Mana: 因为当时交易失败是经过了transfer

Mana: 没有上链去交易

Mana: 这是代币怎么提出来

gavin: 你只要是这个 jetton wallet的 owner holder 直接发交易就能转移啊 (reply to 56016)

Aaron: 是要自己封装直接调用节点api吗？有相关的java库可用吗？ (reply to 56017)

IIIllll: 我知道为什么没有 forward 的了 @Leo 手续费给少了🤡

Mana: connectui有提供节点吗

Mana: 不用链接

Mana: 就是provider

Aaron: 该用liteserver指的是自己封装直接访问节点API吧？ (reply to 56021)

Mana: 通过用户钱包地址，通过provider去获取jetton wallet地址

Mana: connectui上有方法吗

Mana: 这个能用connectui替代吗有没有方法，我没找到

gavin: 有的 (reply to 56030)

Mana: 因为项目用节点不稳定，想用钱包提供的

Mana: 通过用户钱包地址获取jetton wallet address

gavin: 稍等 我正在寻找 (reply to 56030)

Mana: 辛苦了

wikig: 我记得tonweb也有类库？ (reply to 56030)

wikig: 也可计算jetton wallet

Mana: 要用链接的节点把

Mana: 就想知道connect上有没有这类方法，

Mana: connectui

Mana: 就不用url节点了

Mana: 没有的话，就只能买一个了

Mana: 哈哈gavin被我备注成大佬了

Mana: 先下班了兄弟们，手机聊

p: 我想问个问题，ton转账可以让别人支付手续费吗？

Mana: 怎么可能

Mana: 你可以登陆别人钱包吗

Mana: 😂

品誉: 你可以选择创建两笔交易合并支付 (reply to 56048)

p: 我好像听别人说可以指定别人支付gas

p: 原来不能啊

p: 实际上还是发送交易这个钱包支付gas是吗？

p: 我捋一捋你说的东西，谢谢

Aaron: 好像可以通过钱包插件的方式实现别人付gas，具体需要看下钱包插件的文档。

Mana: 看出来了，你就是想开挂 (reply to 56065)

Mana: 人家说的通过底层去实现

Mana: 你想着通过工具去实现。

wikig: 理论上不是不行，现在TON上的GSN服务商好像只有tonkeeper以及wallet v5规范吧，我记得叫battery？ (reply to 56065)

p: 我刚刚看了一下这个文档

p: 有一句Users will have access to a 25% reduction in blockchain fees, a new flexible plugin interface for developers, and an internal message signature that enables delegation of gas payments.

p: 可以委托gas支付者

wikig: 是的，所以现在tonkeeper在全力在推 (reply to 56075)

p: 钱包没这个选项，好像消息结构也没这个参数

wikig: 如果你用tonconnectui的话，我的理解是，可能还没有跟进。 (reply to 56077)

Ton: 有文档吗 (reply to 56076)

Ton: 瞅瞅

Ton: 跟波场那个类似吗？

wikig: 嗯...怎么说呢，跟unipass那种类似 (reply to 56081)

wikig: 我看下 (reply to 56079)

wikig: https://tonkeeper.helpscoutdocs.com/article/88-what-is-a-battery-and-what-is-it-used-for (reply to 56079)

Sergey Haiduk: The new project is almost ready, join CryptoGameSpace  There is a link in the profile

Champer Wu: 不是很懂你的問題啊 把代幣轉走不就是transfer嗎0.0 (reply to 56012)

gavin: forward_ton_amount 是不是太低了 (reply to 56093)

Champer Wu: tonutils-go 我覺得挺好用的，試試看盃 https://github.com/xssnick/tonutils-go (reply to 56025)

Neo: 这个错误码也没在编译后的文件中找到

Neo: 这个提示是这样的

gavin: 去搜索你的Tact 编译后的代码

gavin: 根据错误代码找到对应的逻辑

Neo: 编译后的代码中，就是找不到这个错误码，它不是自定义错误

Champer Wu: 這看起來是人腦編譯 🤣  不是電腦 (reply to 56104)

Neo: 也没有

Neo: 是这个合约的

Aaron: 请教一下，一笔token转账中，如何由后面的交易找到前面的交易，比如找零的交易，我如果想知道备注信息，就只能往前找jettonwallet交易，然后找对应msg中的备注信息。

Aaron: 类似这种我如何由A能找到C再找到D

Neo: 这里面也是没有 (reply to 56114)

Aaron: https://github.com/ton-blockchain/token-contract/blob/main/ft/build/jetton-wallet.fif

Win: 大神们；你好。我按照官方步骤操作。注册了ton  账户里有余额 也转出了。         通过区块链查询也显示部署了。我用的是主网操作；助记词也填进去了。但是我到step9.ts运行的时候；总是提示没有部署。还有我打印了那个钱包地址根本不是我这个助记词的地址。这是怎么回事？

Win: 打印出来的地址

Win: 检查过了；钱包版本不一致；是WalletContractV5R1 但是改了之后这里报错

Win: 大神；我该怎么改正这里呢？

Win: 我用的钱包是V5的；改了就报那个错

Win: 怎么搞？确实不会。我用的是VSCODE

Win: 快速修复

Neo: @leouvw 测试网usdt 是哪个呀

Neo: 这代码，我刚刚在主网用真usdt测没有问题

Aaron: 请教大佬，钱包层面会出现jetton转账成功，但是ton找零交易失败的情况吗？

Win: 大神；可以教一下怎么写  send mode吗？ (reply to 56141)

Win: 我这不对啊

Win: 大神；可以直接说一下怎么写吗？谢谢。我这真的找不到其他的地方了解。主要是英文不好；谢谢

Aaron: 😂 钱包插件也是需要开发的，v4版钱包已经支持插件了。 (reply to 56068)

Aaron: 请教一下，大家生产上线用的是自己部署的节点还是节点服务商，TON有什么好的节点服务上推荐吗？

Mana: 我懂你，我前几天也是这样，但是 (reply to 56152)

Mana: 我研究三天才完成转账

Mana: 直接告诉你

Mana: 感觉还是自己先研究一下吧，加深一下印象

Mana: 😋😋

Mana: 还有就是文档最好别直接选择中文

Mana: 因为中文的有很多问题

Mana: 浏览器右键翻译。

Mana: 就行

Mana: sendMode写3吧 (reply to 56152)

Mana: 后面你再去了解一下sendmode干嘛的

Mana: 👾🤡🤡

User<7504165862>: ICP/USDT📈  8.45－8.60  多  TP1: 8.75 TP2: 8.85 TP3: 9.00  SL: 8.32 (forwarded from Crypto_獵捕者合約帝)

Ton: rawbody可以反解析吗

🐾Tomyx: 🪂🪂🪂🪂🪂 🙏NEW ТОN АIRDRОР🙏 🙏Claim your 50-1000 ТОN аirdrор from The Оpеn Lеаguе!🙏 🌐Нurrу up tо gеt frее tоn соins🌐 ➡️@TON_PRESENT_BOT

Ton: 就是rawbody解析成cell (reply to 56234)

Ton: 试了一下午，估计不大行

Ton: 但是里面的内容结构不知道呀

Ton: 有几个ref ref里面的内容

Ton: 是的，但是有迹可循，比较难解析

Ton: 因为比如说begincell的开头的hex都是一样的

Ton: b5ee9c720102040100013000019c0bf64f3382a565b667dcc5723e33fe0168025110ab6d75239b959430840338d90d3f9293d2c663539f4803c3b00357c655c29d791b2eb25ee6e08389c2c1700129a9a31766e20ded0000002a000301016862007fa0a4eaa60e780df783052553a1c6312d8a9a507b33fa7d13ff5d5a18caae902017d78400000000000000000000000000010201d9402ff4c44ede864bbfa5a2f14e679add958bb420b6ed2fb8d55d1f9086e6c603cb5bccfb376567e62ecb9f68e8aff32c0223b39cf2cf744287cec5769816e5c8f0a0d2060000000030f424080194eb355d6ed46ec2a9a61318c51511bd628eba88cf3c22b20175d04f14b8007503006c576f6e746f6e3a65356539666339382d616561612d346163352d393533372d3363373966313934373062633a31373734393037343531

Ton: 就比如说这个

Ton: b5ee…0019

Ton: 就应该是begincell的意思

Ton: 那是啥

Ton: Emmm

Ton: 我觉得可能不是的

Ton: Ok..

Ton: 所以不开源的情况下

Ton: 不可能反推出来喽

Ton: 但是我们在用钱包sdk 的时候，不也是像Tonkeeper 发送了这一个包含这个的请求，Tonkeeper是怎么emulate的结果呢？

Ton: 在没有执行之前，就知道有几个actions和具体的action内容

Ton: 嵌入式..

Ton: 大概懂你意思了

Ton: 感谢

Ton: 还有一个问题

Ton: 他这个rawbody里面我知道肯定存在一个地址，那我去把那个地址转化为bytes 可以在这里面找到吗？

Ton: 或者amount

Ton: 地址那么长，转化为bytes相同的地方不就是吗？

Ton: 他这个应该怎么变化呢

Ton: 就是比如说我知道一个地址，经过怎么变换，才能够得到这个bytes的值，并在这个rawbody里面找到呢

Ton: 没理解 (reply to 56295)

Ton: 那不能变成16进制去比较吗，bytes不是16进制的吗

Ton: 😭我去摸索摸索吧

Ton: 好的

Ton: 计算机基础是不太行

— 2024-09-12 —

Aaron: 请教一下，大家都是自己部署的TON节点还是购买的节点服务，买的话，常用的都是那几家，帮忙推荐一下哈。

Pangolin: ton-connect前端js如何对hello字符串签名的，用来判断中心化登录用的

Qubitcoin: 用 ton_proof 校验钱包所有权

aier: 求教大佬们，jetton_wallet的地址是具体如何算的？

aier: 有代码和示例吗？我现在有账号地址和jetton_master地址

Mana: 用tonclient

Mana: 1 (reply to 56335)

u7: 想请问如何只用hash在toncenter api V2里查到对应的交易

🦄: 哈喽

🦄: 我这个call contract失败了，但5TON没有反弹还是发送到合约里了，应该怎么处理呢，求大佬解答🙏

IIIllll: 已经发走了, 没得救 (reply to 56348)

🦄: 😂😂

🦄: 做不到把发送的ton value回弹嘛？

IIIllll: 大腿们, 合约从 active 变为 inactive之后, 数据全部丢失吗? 目前看到的, 重新 active 之后, 之前的数据没有保存

IIIllll: 需要 在合约里bounce (reply to 56352)

🦄: 这样也没有起效果呀

Eliot🦴: 只有收款地址是未激活状态的前提下，你设置回弹才能生效 (reply to 56348)

CA_BOT: 大家好请问一下有没有类似wagmi 和rainbow kit的类似开源项目？

🦄: 啊 那不是无救了吗这种情况？ (reply to 56357)

🦄: 我去调用我自己的合约，那我的wallet肯定是active的了呀

IIIllll: 大腿说的是 dest 地址  inactive

IIIllll: 你这个合约是不是一次性的 (reply to 56362)

IIIllll: 是的话, mode 用 128 + 32

Eliot🦴: 注意是收款地址，不是发款地址 (reply to 56362)

🦄: 我想要退回给msg.sender地址是要怎么做

🦄: 试了下，还是留在合约里了 (reply to 56366)

Eliot🦴: 那没事的，反正也是你自己部署的合约

Eliot🦴: 操纵该合约把TON转账回来即可

CA_BOT: 大家好请问一下有没有类似wagmi 和rainbow kit的类似开源项目？miniapp 接入钱包怎么破🥲

🦄: 场景是这样的，我的钱包地址A，合约地址B，我用A发送交易到B使用的mode=1，value=5TON，这时候合约B执行失败了，5TON打进合约B了。现在没办法自动退回5TON

IIIllll: 官网不是有的 (reply to 56372)

🦄: 😂😂麻烦呀 (reply to 56371)

IIIllll: 搞一个 self_distruct, 废弃合约取回 TON

🦄: 合约B执行失败了在合约B里本身是没有感知的吗

🦄: 所以应该在钱包地址A（wallet v2R的合约做处理的？）

Eliot🦴: 哪里麻烦了？一句命令行搞定 (reply to 56375)

IIIllll: 有, throw 什么的

🦄: 这个嘛

Mana: 转账的时候bounce为true或false代表什么

🦄: 那我这也是true了呀

🦄: 好难懂，这TVM

Mana: 那一般都要设置true吧

Mana: false有使用场景吗

🦄: 不可能超呀，我发送的ton数量是0，使用128返回所有余额 (reply to 56355)

🦄: 还是Action Phase失败了并不是触发这个 flags & 1的？ (reply to 56355)

IIIllll: 比如发 notify, 无所谓 bounce, 通知到即可 (reply to 56397)

Mana: 嗷嗷

IIIllll: 你咋发的交易 (reply to 56398)

🦄: 这笔交易

🦄: 我钱包A是直接这样发起交易的

User<6898193927>: 同一个助记词 sdk和tonkeeper钱包 生成的地址存在差异 怎么解决

🦄: 合约代码还不方便发，产品还没上线😂😂

User<6898193927>: 助记词 medal vocal slice soldier coach salt century wave ramp engine black female crater dose pattern opinion suspect easily wish picture early human believe romance pytoniq-core 生成的是 UQAxPtdaPi58aRsjpR-S2t5vvpnJTYi1B8ClbSA9DVHVVmQb tonkeper生成的是 UQCKn9QkZ3KDH0grN-HTDFmC97sW8gz9yL7oFH5ExC0ZST32

User<6898193927>: 同一个助记词 sdk和tonkeeper钱包 生成的地址存在差异 怎么解决

User<6898193927>: tonkeeper钱包 和okx 钱包生成的也不一样

User<6898193927>: ton 助记词生成 地址有官方文档吗

wikig: 额，这边走的是同一套注记词库然后生成的wallet版本是一致的嘛？ (reply to 56416)

User<6898193927>: 对

User<6898193927>: 路径问题吗

🦄: tonkeeper 已经是wallet v5了吧

User<6898193927>: path m/44'/607'/0' ？

User<6898193927>: 这里面有实现wallet v5 的吗

User<6898193927>: 现在 wallet v5 实现标准文档 好像没有

Sun: 有合约如今和出金的demo吗？

wikig: 确实，可能会是派生路径差异 (reply to 56422)

User<6898193927>: sdk 都过时

User<6898193927>: 都是几年前的东西

User<6898193927>: 叫啥 (reply to 56435)

User<6898193927>: js 那个吗

wikig: *（有没有可能，要吃饭的捏*（

wikig: 话说这边主力做哪个方向的呀，game  ？ (reply to 56456)

wikig: 哦哦，是聚焦TON上吗，还是说也有传统链游开发经验

wikig: 哦哦，有没有考虑把原有的链游产品搬到Telegram上的打算hhh😆 (reply to 56460)

wikig: 了解。那确实

owen: 想请教下，ton上如何实现类似于 evm 的transferfrom呀？就是用户调用合约，将jetton转到指定账户~

wikig: transferFrom 一般好像是指，受Approve有allowance的支配者，去向ERC20合约发起对这笔资金的操作行为把（大部分都是合约见调用吧）  照理说，TON应该也能做类似的实现（可能比较绕就是了） (reply to 56467)

owen: 或者简单来说，用户调用合约，实现将jetton转到另外的账户。这个有啥参考嘛？不是直接transfer jetton

u7: 請問/v2/getTransactions是不是沒辦法知道交易在哪個區塊

wikig: 我觉最大的作用是，许可非代币持有方进行代币控制行为 (reply to 56476)

wikig: transfer 是 owner 对reciver的转让。  Transferfrom是第三方 （有allowance权限的人）对owner的资产进行转移给reciver的操作

wikig: 两个场景应该还是蛮不一样的

gavin: 对 我也认同

gavin: 你都代扣了 跟你转给对方有啥区别

gavin: 都是“信任”

wikig: 嗷，那确实，我的表述问题。  我个人倒是觉得，在EVM生态里面，大部分DEX或lending都是使用transferFrom（虽然我觉得是event的问题这里） 但是approve的作用和概念在做订阅形付款作用还是蛮有用的。  以及对orderbook类型的或者limit订单类型的链下撮合成交还是有用的。 典型的就是1inch的fusion (reply to 56482)

wikig: approve和allowance我的理解是，只是许可对方使用我所持有的 ${allowance}金额的代币。  但是我并不保证我拥有这个金额的代币（发起的时候，以及对方使用的时候）  但是对于链下撮合以及订阅式服务，跟直接transfer操作比起来，还是蛮好的。（相当于在EVM这套没有原生账户抽象的系统里，实现了非owner的调用操作行为） (reply to 56487)

wikig: 淦，那solidity开发者得transfer行为都搓一条notify_data不得累死hhhh (reply to 56493)

wikig: 我想了想，倒也不完全是（？）  毕竟现在的transfer函数是在erc20上的。然后默认校验的是msg.sender 或4337之后的msgSender()  如Uniswap等的实现逻辑都得依赖其中的contract通过transferFrom来实现非owner转账？  至于lending或者对赌、撮合之类的，好像也是（ (reply to 56490)

owen: 也就是说，ton针对 jetton的transfer，可以指定notify？ 业务上是希望链上可以知道转账发生的这个行为，触发其他逻辑的

owen: 明白，这个有啥代码实例可以参考呀？

wikig: 也是，这下倒果为因了

Play: 请教一下大佬   要实现给用户提款TON   是参考这个吗?   有没有Java语言的示例呀?😢

owen: notify 也就是payload吧？jetton transfer成功后会触发，这个payload应该支持调用链上合约的吧？这个文档看着好抽象🙈

X: 有 Ton 大佬兼职开发吗，主要是 Ton 上转账 和 Ton star 购买相关的后端开发

X: 可以做的 dm 我，前端有了主要是后端开发，解析链上转账数据购买 + Ton star 购买

gavin: yes (reply to 56511)

Leon: 大佬们，有个telegram bot的问题想请教下，就是teleram bot发送消息的时候延迟忽快忽慢，有的时候1秒内发送，有的时候要用一分钟才发送成功，但我如果用timeout控制的话就会有timout超时但是消息发送成功的情况，这样就会导致消息发送两遍，大佬们有什么好的解决办法吗

wikig: 先问个很蠢的问题，这边吊telegram server 的 服务器，不会在境内吧*（ (reply to 56518)

Leon: 不在境内😂但是是亚洲地区

wikig: 中间没有接任何proxy吧* (reply to 56520)

Champer Wu: 你是用 long polling 還是 webhook? (reply to 56518)

Leon: 没有proxy，用的就是简单的polling

Leon: 大部分sendMessage请求都会在1内，但是有时就会连着几个请求耗时十几秒

𝗨𝗻𝗰𝗹𝗲 𝗗á𝘄è𝗻: 换服务器

Leon: 嗯嗯好的，我试试欧洲那边的服务器

zeven: 有ton链合约自动化测试好用的工具不？

Daniil: 嘿，Catizen 是如何规避监管并通过冥王星充值接受 TON 币支付的？   因为在游戏中无法使用加密货币支付，但在充值应用程序中却可以。  怎么做到的？

Aaron: 请教一下，发送交易是本地生成的queryid，等到上链后在浏览器中看，queryid变了，这个是什么原因。

11: ton ctf有家人参加嘛，求带

Jackie: 大佬，JETTON如何获取所有HOLDER？ (reply to 56521)

wikig: 还有这种事？还真没见过 (reply to 56529)

wikig: 如果没有proxy的话，最好走一下trace，然后看看慢的原因是啥 (reply to 56541)

wikig: 我的理解的话，好像没法直接获得所有holder address？ 可能有？但是我不知道？  我的理解是即使EVM也没有办法获得所有holders的地址 依赖于链下那堆交易清洗交易统计的操作（？ (reply to 56539)

Jackie: 刚群里有人说回调URL是什么意思？难道TON区块链可以回调外部URL？ (reply to 56543)

wikig: 额，有这种说法吗？我真没见过（也觉得调外部url有点逆天了 (reply to 56544)

Jackie: 我没看全，是这个意思吗

Jackie: JETTON自带的NOTIFY是啥 (reply to 56545)

wikig: 额，不是调外部URL的意思 (reply to 56546)

品誉: mint 出来的jetton怎么验证？

云决: 下午好

链财: 刚接触这个，问下飞机上只能开发类似微信的小程序应用吗？

链财: 也就是 Mini App

gavin: 还能开打game (reply to 56559)

gavin: 全屏的那种

Champer Wu: 全屏？ 你是說連邊框都沒有嗎？ (reply to 56562)

gavin: 对

Champer Wu: 應該不是鏈上的服務吧 我看tonviewer 的確有把所有holders印出來，但他應該是中心化的做法 (reply to 56544)

链财: 刚刚看了下官网介绍，可以开发小程序，向现有项目提供ton链生态的支持，好像就没其它应用场景了 (reply to 56561)

链财: 不过飞机的小程序是不是和微信的原生小程序开发一样有门坎啊

wikig: 性质不一样，wx/ali 是重写了整个底层，相当于得用他们的规则走，webapp就是纯H5 (reply to 56570)

链财: 飞机的没区别就是h5是这个意思吗 (reply to 56571)

wikig: 可以这么理解吧 (reply to 56573)

链财: 那岂不是加个sdk扔个网站域名就行😂

链财: 对于大陆注册的(至少)，飞机用的是国内的机房🫡👮‍♂ (reply to 56521)

链财: 我就见识过

Aaron: 有大佬用过queryid吗？如何生成的？ 我java里用这个生成的          BigInteger queryId = BigInteger.valueOf(Instant.now().getEpochSecond() + 5 * 60L << 32);   但是到链上在浏览器看id和本地的不一样了，主要是数字尾部不一样了，这样我之前发交易记录下来的querid就不能找到链上扫回的数据了。 (reply to 56537)

eason: 哪位大佬帮忙看看，调用walletv4 internal 往出转ton，为什么会附带了一笔转到黑洞地址的交易

wikig: 我笑死，不会在贵州吧 (reply to 56576)

wikig: 还真是，甚至不用，直接静态部署到IPFS就行 (reply to 56575)

owen: jetton 的notify，是可以触发合约调用的吧？没有找到说明和样例诶，，

CryptoHarbor: 这种问题有大佬知道如何解决吗？

CryptoHarbor: 不能讨论这个？刚才怎么被移出群聊了？

CryptoHarbor: 这不是技术讨论群吗

User<7529893053>: 去私聊管理员 (reply to 56602)

CryptoHarbor: 😂

Ton: ton star支付有没有源码看看啊

Ton: 有没有大佬给我瞅瞅

User<7106205946>: Hello, Everyone! I'm so glad to see you. I'm a fullstack and blockchain developer. If you want me, pls call me anytime. Let's work together.

Ton: hello hello

Ton: 现在TGstar是不是还不能提现啊

Ton: 目前还是欢乐豆阶段

증식엄: 可以提现的 (reply to 56617)

증식엄: 5折回收欢乐豆，可以卖给我

gavin: 哈哈哈我6折

증식엄: 6.5折，不能再多了

Ton: 在哪里提啊 (reply to 56622)

OK不OK: Fragment

Ton: 没看到接口啊

증식엄: 这里 (reply to 56627)

Ton: 只有buy啊

User<1979953056>: How do I fix this error? I tried every code in python and js to send jetton, but it didn't work

— 2024-09-13 —

Jackie: TON的NFT合约，能实现类似EVM 的授权机制吗？ (reply to 56584)

Aaron: 请教一下，自己部署liteserver官方推荐配置要16核心，128G内存，这个够高的，能够降低配置吗，有部署过的朋友指点一下？

gavin: 上次听群友说 这个配置还不够 (reply to 56692)

gavin: 存储IO 要求很高

Jackie: 没部署过，不过以其它链的经验，配置越高越好，不然你存储的速度追不上新块增加的速度 (reply to 56692)

gavin: 没有 目前是不可以 (reply to 56691)

gavin: 或者你可以弄一个中间的托管合约

gavin: 让用户把nft打过去

Jackie: 多市场上架就是不可行了 (reply to 56698)

Jackie: 如果这样

gavin: 对

owen: tonweb 咋实例化部署好的合约呢？没找到啥资料诶，，

long: 我是技术上，有合作的吗

Yii: TgStar有购买的API吗

Aaron: 请教一下，发了一笔jetton交易，TON交易前余额和交易后余额差值，和发送时设置的费用及找零后的差额对不上，差了0.00X的费用不知道花在了哪里？一笔交易的总费用拿 发送时给的-找零的 难道不对吗？求大佬指点一下哈

🦄: 上hash？

Aaron: https://testnet.tonviewer.com/transaction/96ef5cd281b0394ef403c882ebb401b1ab39b6d15867f332783905cdb30d5ed5

Aaron: ...交易前... 余额: 6960650282  ...交易后...    余额: 6935382202

Aaron: 余额是链上查出来的。

Mana: 有领取方法吗，不写合约的话

Mana: clim

gavin: 有mint的例子 还是得自己写一个简单的合约 (reply to 56714)

Aaron: 发交易时设置0.05，后来找零时0.027782366

Aaron: 差额 0.022217634 应该是费吧

Aaron: 6935382202 是交易后的余额 (reply to 56718)

Aaron: 找零交易的endbalance是6935 (reply to 56722)

Mana: 有没有remix类似的在线部署的编译器 (reply to 56719)

Aaron: 在A交易发生之前记录的链上余额是 6960650282 (reply to 56723)

Aaron: 690是从哪里看到的 (reply to 56724)

gavin: 这个？

Aaron: 690是A交易的endbalance吧，这个是否应该是A交易结束后扣了费用之后的余额？ (reply to 56727)

gavin: 交易前  6.960650282 交易开始 6.907639837 交易结束 6.935382202

Aaron: 交易前-交易结束=0.02526808 ，交易设置的费0.05-0.027782366（找零）=0.022217634

Aaron: 两个对不上，我门现在是拿0.05-找零 作为费用的，现在看来这样是不对的是吗？ (reply to 56739)

gavin: 确实 我也发现好像对不上。。

Aaron: 余额差应该是费用吧，他和0.05-找零的差对不上。 (reply to 56743)

gavin: 好像是他forward 的 (reply to 56747)

Aaron: 交易开始设置的费用总额。在A上可以看到。 (reply to 56747)

gavin: 噢

gavin: 我靠 太绕了哈哈哈

gavin: @easedot 这玩意也要算进去

Aaron: 我门想简化一下费用计算，就是给多少，最后找回多少，作为费用，这样就不用每一笔去算了，逐笔算太麻烦了。 (reply to 56753)

Aaron: 找零前 6.907639837 是A交易的Endblance，他本身已经花费了fee了，就是说外部消息打包上链也花费了费用了。 (reply to 56752)

Aaron: 有没有简单的方法，我门能计算发送一笔jetton究竟花了多少ton作为费用？ (reply to 56770)

Jackie: 不能预估GAS费 (reply to 56772)

Jackie: TON就没这个功能

Jackie: 不过你可以手动计算

Jackie: 每条指令的GAS再加上，合约的租金欠费

Aaron: 不是预估，是实际上链后，花费了多少？这个要做记账处理的。 (reply to 56773)

Jackie: 内部消息的GAS咋估啊，合约 再调用其它合约 (reply to 56780)

Jackie: 这种情况

Jackie: 有方法可以直接调吗？ (reply to 56787)

Jackie: 这不合理啊，出错归出归，就EVM的模式来思考，只要GASPRICE确定，成功执行，GAS应该不会有区别才对 (reply to 56790)

Jackie: 出错了那GAS肯定会变化

Jackie: 我说的实际消耗

Jackie: 与估算

Jackie: 这个怎么理解？ (reply to 56794)

Jackie: 不出错也会不同吗？

Jackie: TON

Jackie: 我大概了解实际 是如何消耗的

Jackie: 估算不清楚

Aaron: 就是发送jetton后ton余额减少了，我门要给财务一个合理的解释说付gas了。 刚刚把每笔交易的totalfee加起来，也是少于余额的减少的。 (reply to 56787)

Aaron: 预估我门都是给的固定的，不再预估了，反正也不准，但是已经上链发生的应该能对上就可以。

gavin: 羡慕能吃肉的

Aaron: 不是没看，在想办法呢，钱少了，我门要给财务一个合理的解释花钱的明细要拿出来，对的上哈。 总账和明细要对的上才行。 (reply to 56814)

Qubitcoin: 你的意思是计算已经交易完成的 gas 吧？

Qubitcoin: 请问下，Contract type 是如何定义的？

Qubitcoin: 是检测一个合约曝漏的 get 方法确定吗？

Alan | Torch: 根據經驗，是的 (reply to 56821)

Qubitcoin: 👌

gavin: 我觉得不仅仅是根据get.  感觉是有多个维度, 比如 hash code 一样就认为是某个合约, 或者根据 op code 看看有没有实现对应的 (reply to 56821)

Qubitcoin: 不是 hash code，我改过 minter 逻辑，一样能识别是 master

Champer Wu: 各位大佬，想問一下tonviewer 是如何在頁面上面顯示 contract type的啊？ https://tonviewer.com/EQDKHZ7e70CzqdvZCC83Z4WVR8POC_ZB0J1Y4zo88G-zCXmC

gavin: 我觉得如果你的合约是常见的  WalletContract 、Jetton Wallet /Master 、Nft 等只需要开源一下就行, 或者只需要按照规范实现 (reply to 56834)

Champer Wu: 我的理解是，就算是中心化的處理方式，他們也要透過地址來辨別，但是辨別的指標是什麼，他們透過地址就能辨認出來嗎？ (reply to 56836)

gavin: 这块他们没有公开具体的标准,但是根据经验是 检测某个合约暴露的某个方法来匹配的似乎 (reply to 56837)

Champer Wu: 我剛剛問了一下同事，跟大家總結一下 1. 透過 getTransactions 取得 stateinit中的 code，然後比對 boc （第一筆transaction一定會有 stateinit，其中包含 code 和初始 data） 2. 比對 state init 可行，但是不適用於微幅魔改的 code（bytecode會不同），或是 TEP180的做法 query 已知的 get method id getAccountInformation 應也能得到 state init

Champer Wu: 另外，query 已知 get method id的缺點就是讓惡意合約有機會偽裝

gavin: 对，看上去就只有这些手段，就跟鸭子模型一样 (reply to 56839)

云决: 下午好

Aaron: A交易 https://testnet.tonviewer.com/transaction/5ca47e722d119af88a9756624e5ca3189186018184f7b1f5daa07612a58211fa Endbalance=6.907639837  A之前交易 https://testnet.tonviewer.com/transaction/eeed4be3dff678b58ae56360e611b408be2141bce75ffaf755eff6d39180d8a2 Endbalance=6.960650282  这中间余额减少了0.053010445  可是A中显示的Totalfee=0.002474974  和减少的余额对不上 其他的部分花在哪里了？是还有其他隐含花费吗？ (reply to 56752)

Sun: 请问一下，你们有谁使用源码部署过tg的客户端？

Aaron: 可是余额减少了，要有个交代，从哪里能查出这比费用。 (reply to 56853)

Aaron: 从哪里能查到这个fwd fee (reply to 56860)

owen: 想请教下，transfer jetton 传入payload，调用合约函数，这里的前缀call是不是不太对，合约端一直包 exit code 130 🙈

wikig: 好像没有Approve的说法？因为似乎没有approve的必要？ (reply to 56691)

Jackie: 那交易市场怎么弄？ (reply to 56869)

wikig: NFT交易市场具体得看code怎么走的（有开源的吧）  我的理解是，  主要模型应该挂单，（这种比较多？），拥有者发一笔然后相当于直接把这nft发出去了，然后买方来买就是买走就行 (reply to 56871)

teamo: 有人 用户 在服务器端检查 ton_proof  这个功能吗？

teamo: 谁用过 在服务器端检查 ton_proof  这个功能？

teamo: 给个文档  点开链接 都访问不了

gavin: https://docs.ton.org/mandarin/develop/dapps/ton-connect/sign (reply to 56878)

gavin: https://github.com/ton-connect/demo-dapp-backend

gavin: 官方的例子给的很清楚

Aaron: 请教一下，现在自建节点的话，同步到最新块大概需要多久？有快照的方式快点同步吗？

Champer Wu: 這邊有個雷區，就是拿取 pubKey的方式, wallet V5 的實作方式不太一樣，這邊沒提供 分享一下我 parse的方法        const stateInitCell = Cell.fromBoc(Buffer.from(walletInfo.account.walletStateInit, "base64"))[0]         data.address = `0:${stateInitCell.hash().toString("hex")}`         if (data.address !== walletInfo.account.address) {             logger.warn('stateinit address mismatch (11010)')             throw new Error()         }     const stateInitSlice = stateInitCell.asSlice()         stateInitSlice.loadRef() // wallet code         const walletData = stateInitSlice.loadRef().asSlice() // wallet data         if (walletData.remainingBits >= 1 + 32 + 32 + 256 + 1) {             walletData.skip(1 + 32 + 32) // wallet v5         } else if (walletData.remainingBits >= 32 + 32 + 256 + 1) {             walletData.skip(32 + 32) // wallet v4         } else if(walletData.remainingBits >= 32 + 32 + 256){             walletData.skip(32 + 32) //  wallet v3         }else{             walletData.skip(32) // wallet v1, v2 doesn't checked         }         const publicKeyBits = walletData.loadBits(256)         const public_key = publicKeyBits.toString().toLowerCase() (reply to 56881)

Jackie: 这种限制很大的 (reply to 56872)

gavin: 你这个不错 建议发起 merge request 哈哈 (reply to 56892)

wikig: 如？  我能想到最大的问题就是，跟approve比起来消耗的gas会更高 (reply to 56893)

Jackie: 多市场挂单也没法弄吧 (reply to 56895)

wikig: 而且不能多个交易所同时挂单 (reply to 56895)

wikig: 是的，

Jackie: 而且挂单，取消挂单都要消耗GAS

wikig: 是的，这个就是上面说的gas更高 (reply to 56899)

Jackie: GAS是一方面，操作速度也会降低

Jackie: 因为像挂单这种操作本来是可以不用上链的

Jackie: 这样就变成了，都要上链

wikig: 我的理解是，总的还在可接受范围内吧。主要是没有Approve概念。 (reply to 56901)

Jackie: TON可以链下签名，链上验签吗 (reply to 56904)

wikig: 目前主流钱包似乎是没做签名方法支持的 (reply to 56905)

wikig: 当然，你要是走tonweb.js 或者别的什么类库，那确实应该可以签好名打包boc

Champer Wu: 甚至不用ipfs, 放在中心化的 storage就行🙃 (reply to 56584)

wikig: 看心情。就算不放在去中心化存储，也可以说是怕太慢了，所以放个中心化cdn (reply to 56909)

wikig: 我印象里面。之前看很多头部nft就是直接放Amazon S3的

Jackie: 链上拿到这个包，要是可以提供一个方法，允许验签过后可以识别出签名者，其实就是变相实现授权

Jackie: 比如在JETTON里写一个方法，识别出附加数据里的签名者，然后如果和OWNER一致就允许操作，这样也相当于授权了 (reply to 56912)

wikig: 但是这就相当于改了JETTON规范，可能导致代币无法识别，或者别的钱吧无法识别 (reply to 56915)

Jackie: 应该不至于吧，增加一个方法，不改变其它方法，所有要求的接口都在不就好啦 (reply to 56916)

Kron: 各位大佬，我安装官网的例子写个转账，但只扣了手续费，有没具体的示例啊

wikig: 应该是至于的，跟EVM只校验interface 有没有改变不太一样，TON好像是要验证整体bytecode的？  因为之前群里在讨论能否修改标准wallet_v4 的鉴权部分实现骗gas费的scam的时候讨论过这个议题 (reply to 56917)

Jackie: EVM上其实就很多这种不借助授权的而是借助验签来做的。扩展了基础的NFT协议

wikig: 这就是上面讲的问题，EVM理论上你是符合interface要求就行。没有做强制的内容限制。  你甚至可以直接把auth写成随机。 (reply to 56921)

Aaron: 有相关的文档参考吗？没找到相关快照的说明，只看到了部署的说明。 (reply to 56887)

gavin: 我刚刚看了下这个demo给的库  获取publicKey 他好像没问题耶 https://github.com/tonkeeper/tongo/blob/38b0f76711fd396a0f8bc427b0ead5b6967fd2a8/abi/get_methods.go#L2499 他底层是这个方法, 好像是自己用TonVM 执行的code, 似乎能正确的解码出来 (reply to 56892)

我要飞: v5钱包，可弹回不可弹回是两个公钥

我要飞: 我用这个官方文档的用助记词转换公钥 ，得到了一个公钥，然后我发现和我钱包的公钥的开头和结尾不一样，但是都能看到钱包的活动，我在官方文档，看见有个查地址的，结果弹跳和不弹回的两个公钥开头和结尾都不一样，  那往这两个公钥转账  这个钱包都能收到币吗？

我要飞: ok明白了，这个文本不一样但是都代表一个地址

我要飞: 才开始学习ton，要换换脑回路了

hk: go  SDK 订阅交易，如何在交易结构中获取备注信息

57: 你好我是初学者，想问下 通过tonConnectUI.sendTransaction 成功支付后，返回一个boc，这个需要怎么去使用

57: 服务端需要怎么去效验交易

wikig: 用 tonweb 的utils类里的boc进行decode  能够拿到transaction的message hash  然后去tonapi 或者 toncenter 调getTransactionBymessagehash接口 (reply to 56954)

57: 好的，谢谢。 (reply to 56957)

57: utils类里面没有boc (reply to 56957)

wikig: 那可能就是boc类或address类？ (reply to 56961)

wikig: https://github.com/toncenter/tonweb/blob/master/src/boc/README.md

57: 好嘞，谢谢

我要飞: ok，谢谢 (reply to 56942)

Amelia: Ok

cj: jetton 未验证的令牌，如何验证

Aaron: 请教一下，自己部署节点的话，有一条要求是要外网固定IP，这个事必须的吗？运维对这个要求有疑问，想确定一下。

jay: 30天了么？

jay: Please see: https://telegram.org/blog/telegram-stars#ready-for-app-stores (reply to 56982)

jay: 那就还得等等。

Niel: hi

jay: 文档是这样写的。之前看是要持有 30 天之后

我要飞: 这啥意思呀？我也没操作啥

Yang: 詐騙，請忽視 (reply to 57022)

我要飞: 哦，这是骗子给我地址发了些诈骗链接是吧

Yang: 對，與開發無關，請到其他社群

Ton: 问个问题

Ton: 我通过字典去获取balance 传入的地址是int

Ton: 那我在测试的时候

Ton: 如何把Address转为int？

Ton: solved

Ton: 这样读取对吗。。。

— 2024-09-14 —

Ethan: ton的 h5 怎么实现只能全屏不能下滑到半屏

Mana: 我也想知道😲 (reply to 57061)

Mana: 还有自动全屏的

Mana: 先半屏再自动全屏

Adaora Media 💸💮🐍: 有sdk，加载完之后强制全屏，屏蔽下滑事件

Jay: 大佬们，请教一下，使用highload_v3出现部分地址广播交易后上不了链，部分地址发送相同交易可以上链的情况

Jay: 有没有遇到过，而且部分钱包地址广播交易exitcode=35

Aaron: 请教一下Ton的转账信息中能加类似queryid的东西吗？场景就是我提交交易时会把提币任务queryid放入数据库，等到得到链上成功的消息后，需要从链上取出queryid然后匹配库里之前存的queryid，然后更新当初提币任务的状态。

Sun: https://testnet.tonviewer.com/transaction/0fde46e78ff10297e7f41185861b42281ea16056df550c66c6f87e413f3706f4

Sun: 请教一下为什么这么抽象？

IIIllll: 大腿们, deDust 有测试网吗

IIIllll: 合约里面的 send_raw_message 的参数有问题吧 (reply to 57072)

IIIllll: 可以加自定义的 comment (reply to 57070)

Sun: 帮忙展展眼 (reply to 57074)

IIIllll: 看下生成的 func

IIIllll: tact 写过一次, 发现还是得写 func

Aaron: 提币时用户会输入comment的，需要把用户的comment传到链上去。不能用吧。 (reply to 57076)

IIIllll: 你别让用户输入 comment 不就完了 (reply to 57081)

IIIllll: 这生成的也太tm复杂了 (reply to 57080)

Sun: 好吧

Mana: ton前端如何查询转账是否成功

Mana: 家人们

IIIllll: jetton transfer 应该是 到 用户的 jetton wallet 把 (reply to 57086)

IIIllll: 而且还得带上 jetton_wallet_code

aier: ？网又炸了吗？

aier: https://tonviewer.com/transaction/2757563e50657b25aa4abdbf7b0337902eb53afab389d776d2c0f9f6ea1ae97a

aier: 我这笔卡了几分钟了

Mana: ton前端如何查询转账是否成功 (reply to 57094)

Mana: 🥸

Md: Hi

Mana: 我做了个游戏兄弟们回来给你们内测一下

Sun: 用的是这个 (reply to 57091)

Sun: 不过我想的是从合约里面提现给sender

IIIllll: 提现给sender, 提的是什么

IIIllll: TON 还是 jetton

Sun: jetton

Sun: 请教一下

IIIllll: code 在 jetton_master 里可以拿到的

IIIllll: 你这个场景, 如果确定 dest_jetton_wallet 已经是 ACTIVE 状态, 可以不管 initState

Sun: https://testnet.tonviewer.com/kQCX3J7gcvhDoolx6zB7UtfEg1yNvqqKSXBiAGoSCeGhXqr1/jetton/kQB8StgTQXidy32a8xfu7j4HMoWYV0b0cFM8nXsP2cza_QVS

GGG: 有没有项目能订阅ton链上所有dex的交易的

aier: @chrisiali 帮忙看看，有大佬在吗？

aier: https://tonviewer.com/transaction/2757563e50657b25aa4abdbf7b0337902eb53afab389d776d2c0f9f6ea1ae97a

aier: 完全卡住了

Mana: 怎么通过boc去查询交易状态

我要飞: 我用代码执行的交易，为什么有的一分钟以内就交易完成，有的半个多小时才完成，ton 不是5秒的区块吗？交易成不成功，不是在5秒后就得到结果吗？

我要飞: 这个交易完成时间受什么影响？

Aaron: 请教一下，如何能够根据txhash得到交易所在的块信息，比如块高seqno等。

aier: 跑路了？dex全挂了

我要飞: 啥意思 (reply to 57139)

aier: 两家dudest,ston.fi 都g了

aier: 已经无法交易了

我要飞: 你是直接在网页试的，还是走的router代码

aier: 都有，你试试usdt转账

aier: 应该也不行

aier: https://tonviewer.com/transaction/c69f5aedef791799b11dddf667dba22dedc654466ac9194f1f4124dc5c9e209d

Bobby: 网络上比较堵

aier: 宕机了

我要飞: 我说呢，昨天我试代码，一笔几秒就确认了，两笔等了四十几分钟

aier: 是不是要跑路了

aier: 要不要空？

我要飞: 跑啥路亚

aier: 主要是问题有点频繁，上次也是在几天前

wikig: 确实，好像暂停充币了Binance

我要飞: 欧意也停提币了，这么大链有点问题也正常

云决: 下午好

teamo: 验证钱包授权 proof 这个信息 是不是 都是走接口  https://demo.tonconnect.dev 这个地址验证的，

Sun: fc,有官方demo吗？我学习学习吧 (reply to 57107)

IIIllll: tact 也可以完成你的需求的啊

IIIllll: 我估计是哪点搞错了, 就是 外部账户 跟 Jetton Wallet Address 这里一定要理解清楚

IIIllll: 外部账户 不直接持有 Jetton 外部账户 控制 JettonWallet ==> JettonWallet 里控制拥有的 Jetton

Sun: 嗯嗯，我大概是理解了。我再试试

Spark: ton如果真的跑路，对telegram的声誉会照成多大影响？ (reply to 57158)

🦄: 有没有批量转发的合约参考

Jett: ton交易出不去，官方有没有公告呀

aier: 估计都在抢修。。。

aier: 有公告，但是公告时间不准

Jett: 现在只有等待网路恢复吗

Jett: 要提高手续费了？

IIIllll: 没有看到过关于 手续费 和 优先打包 相关的 topic

我要飞: 统一gasprice ，好像没办法优先打包吧？ (reply to 57180)

Aaron: 请教一下，有碰到comment中汉子乱码的问题吗？咋解决呢？

Kai: Hi Guys, is anyone here attending Token2049!

ΞSoli|Waifush: 原来都没法交易啊。。。我还以为是我钱包出问题了

zhixing: 请教一下,为什么我加了payload之后就会报错,无法验证的交易?是格式不对吗,如何发送交易的时候把订单号带过去😐

Niu: 转USDT一直卡在这里是什么鬼

Niu: 搞不懂哦，难道是网络卡了？

jay: 这种首先检查下是不是ton不够。 (reply to 57066)

Jay: ton是足够的

Jay: 现在感觉是链路有问题，看很多交易频繁的地址出入账都卡住了

Niu: 我现在转的USDT有2笔正在卡着

Niu: 也不知道在哪里看链上有多少堆积

jay: https://tonviewer.com/stats/transactions 这里可以看下索引。

jay: 状态。

gavin: ton 链主网又挂了？

Niu: 看起来交易量也不大 (reply to 57204)

Joe: 最近在监控测试网本地的验证者节点性能，有什么好的方式监控ton节点吗，质押是否正常，节点是否同步。有些问题想请教一下，非常谢谢！ 1.上面链接查询的是针对主网验证者的，有测试网的api吗？ https://elections.toncenter.com/docs  https://toncenter.com/api/qos/index.html#/ 2.本地验证者节点可以搭建链接中的api吗，这样服务更加稳定 3.本地验证者节点有查询本地节点数据和性能的api吗，我在官方api文档上没有看到。 https://toncenter.com/

zhixing: 有大佬知道前端这块是什么问题吗😭 (reply to 57194)

gavin: 我也觉得是 我今天用那个多签都私活不执行 (reply to 57214)

Niu: 这个会影响USDT的交易确认？ (reply to 57216)

zhixing: cell？什么意思😰 (reply to 57218)

Niu: 需要使用cell包装一下 (reply to 57194)

aier: 所有啥时候能修好？

aier: 唉

aier: 有个大概时间吗？

zhixing: 开发文档完全没提及啊,大佬你是在哪学习的😁 (reply to 57224)

Niu: https://docs.ton.org/ (reply to 57229)

zhixing: 👍

Niu: https://docs.ton.org/develop/data-formats/cell-boc

Niu: 至少把这个文档大致浏览一遍，不用很仔细的看

Jay: 好的，多谢 (reply to 57204)

Jay: 索引是两天前的了

Sun: https://testnet.tonviewer.com/transaction/ada8c96d6a5c628aba7e50edf98851a1524986f3aac8508b21bf2f44fd8cf0dd

Sun: 搞不明白了哦

Sun: 难受

Niu: 这是在干嘛？调用合约？ (reply to 57239)

Sun: 从合约里面转jetton

Niu: sum_type: Unknown 看起来这个不正确 (reply to 57244)

Sun: sum_type是什么？

Niu: sum_type: JettonTransfer

Niu: 这个看起来是这样子的

Niu: 看起来这才是转移 Jetton

Niu: 你数据的结构体看起来不正确，缺少很多数据，有些字段可以没有值，但是不能不发送

Niu: 你的body里面，都没有  amount: "300000"               destination:                response_destination:               custom_payload: null               forward_ton_amount: "1"               forward_payload:

Sun: 我用的是这个

Niu: 只有value

Niu: 看起来这个没错，但是数据没带过去 (reply to 57254)

Sun: 明白了

Niu: 我蒙的，对这块也是一知半解

carlbiotic: TON bridge是不是又卡了，能不能把基建搞好一点啊

carlbiotic: 客服也找不到，工单也没有

Niu: 很有可能，我目前转的USDT还卡着，不知道怎么回事 (reply to 57262)

carlbiotic: 请问知道找谁吗 (reply to 57263)

carlbiotic: 真的太烂了，卡过好几次了

Yang: The network is experiencing performance issues. Transactions may take longer than usual to complete. A fix is being worked on. (forwarded from TON Status)

Niu: https://t.me/addlist/1r5Vcb8eljk5Yzcy (reply to 57265)

Niu: 这里有一堆群组，你挨个试试

Niu: 官方推荐的群组

carlbiotic: 我看上面老哥发的网络出问题了，再等等吧 (reply to 57268)

Niu: 跟sol一样，经常出问题 (reply to 57270)

Niu: 发送ton没问题，发送 token不行，搞不懂了

Niu: The network is experiencing performance issues. Transactions may take longer than usual to complete. A fix is being worked on. (forwarded from TON Status)

gavin: The network is experiencing performance issues. Transactions may take longer than usual to complete. A fix is being worked on. (forwarded from TON Status)

gavin: 不要慌 项目方在修

carlbiotic: 我的到了，谢天谢地

aier: 卡了20u

Niu: 卡了一小时了 (reply to 57278)

aier: 不是20ton

aier: 我从11点卡到现在了

aier: 。。。

aier: 快把钱给我qwq

gavin: 我老板差点把我开了 (reply to 57278)

Niu: 看起来像是一个中心化的区块链

gavin: 因为卡了资金😭

Niu: 哈哈哈 (reply to 57288)

jay: 现在链性能降低。得耐心等待了。

Niu: 我只卡了0.3U

gavin: 从多签钱包转一笔钱 弄了一天都没弄好🥶🥶

马正恩: 钱包被多签了就没用了 你还想转钱出来？ (reply to 57297)

jay: ton多签反而容易实现。

Niu: 难道就废了钱就拿不出来了？ (reply to 57300)

Niu: 本来就是合约，初始化的时候部署一个多签的合约？ (reply to 57303)

马正恩: 对 、

Niu: 什么原理 (reply to 57306)

Niu: 愿闻其详

gavin: 多签的合约很成熟 我用的就是这个 https://github.com/ton-blockchain/multisig-contract-v2

gavin: 之前一直用的好好的, 今天链卡了 各种乱七八糟的问题就出现了

jay: 多签安全的，没啥毛病。

gavin: 对 凌晨2点多的时候出的问题

Niu: 区块链的bug解决起来都比较漫长

Niu: 要联系很多节点更新代码

Niu: 除非这些节点都是ton基金会自己控制的，就更新起来比较容易

hk: 哪位大神知道如何获取交易的备注信息吗？

hk: 获取图片中playload 的信息

Niu: 刚好我做过 (reply to 57322)

Niu: 在你的go库里，有一个findxx函数

Niu: wallet. FindLastTransactionByInMsgHash

Niu: 不过这个函数你需要传入正确的hash，发送者的hash不行

Niu: 找到tx就可以拿到comment了

hk: 这个hash怎么获取到呢

Niu: 不知道，我自己重写了 FindLastTransactionByInMsgHash 这个函数，改成 FindLastTransactionByInMsg Comment了😁 (reply to 57328)

Niu: 同一个交易，发送消息的hash 和接收人消息的hash 不同 (reply to 57328)

hk: 我是通过订阅的方式，可以获取到交易

hk: 现在就是不知道怎么获取comment的内容

Niu: 那tx 对象上就有comment字段 (reply to 57331)

hk: 这个是cell

Niu: https://github.com/xssnick/tonutils-go/blob/master/tlb/message.go 91行 你看看

Niu: AsInternal（）.Comment() (reply to 57334)

carlbiotic: 今天有大型活动吗，为什么转账都转不了了

carlbiotic: 一步一个坑😢

Niu: 好像我看到有一个meme币在领 (reply to 57337)

hk: 好的，我试试 (reply to 57336)

carlbiotic: 是哪个，我没搜到，辛苦发一下 (reply to 57339)

hk: 可以了，谢谢

Niu: 在一个俄语频道看到的，我取关了 (reply to 57341)

carlbiotic: 好吧

Niu: https://t.me/tonsocietycis/138645 (reply to 57341)

Niu: 好像是SBT ，不知道是不是他搞挂的 (reply to 57345)

Niu: 多看看你使用的库源码，这个就很好解决了，不过tonuntils-go 不太好用 (reply to 57342)

hk: 新手，有推荐比较好用的库吗

hk: 通过js发送的交易，交易中payload也可以通过comment获取吗？

Niu: tongo 好像更好 tonkeeper 开源的 (reply to 57348)

Niu: 可以 (reply to 57349)

Niu: 必须可以 (reply to 57349)

hk: 前端项目还没有部署好，好了试一下

hk: 研究一下 (reply to 57350)

Maruf: Hum (reply to 57358)

Jett: ton交易有没有加速方案呀？  @MissRose_bot

carlbiotic: 交易卡住了吗？现在是链出问题了

Jett: 现在交易的交易都是pending

carlbiotic: 是的，我也是

carlbiotic: 真的牛皮

Jett: Ton官方有没有公告解释现在网络原因吗，啥时候能恢复。

gavin: 已经恢复了 (reply to 57366)

卡: TON CTF 2个人一队，有朋友来玩吗

recovery: 老铁们 ，这个链接是怎么设置的

recovery: 机器人名字后面加game ,直接跳转到小程序

li: ton的合约可以调用另一个合约吗？

jay: bot father创建webapp。 (reply to 57400)

recovery: 后面的 game  这个  path 是怎么整的

jay: 可以，但因为是异步消息，上下文会丢失。 (reply to 57410)

jay: webapp的id。 (reply to 57416)

Niu: @botfather 里发送 /newapp (reply to 57416)

— 2024-09-15 —

Lugia: 想问下tg或者TON现在哪个红包机器人/小程序比较好用？

li: ton的合约 开发 有哥们擅长吗？

Ton: 啥需求 (reply to 57484)

li: 私聊你

recovery: 好，谢谢 (reply to 57447)

jun_song: 请问下可以获取到好友列表吗

CA_BOT: Not是怎么知道哪些钱包是可以用的呢？

one: 有没有那个大佬知道，这个机器人名字下单显示活跃人数怎么做到或者设置

gavin: 就是tg统计的 每周更新一次好像 (reply to 57517)

one: 我看了好多机器人，挺多只显示机器人，但是有好多显示的是活跃人数

one: 是活跃人数，一定数量才会显示吗

幽草: 请教下，TON网络下面的USDT代币转账可以监听到转账的备注吗？

Niu: 可以 (reply to 57524)

— 2024-09-16 —

幽草: 请问大佬有文档可以参考吗？指点一下 (reply to 57567)

Howard: 看哭了，Tact 語言迎來重大更新 v1.5.0 😭  https://t.me/tondev_news/151

Howard: 在飛機上，這幾天 token2049 有空我試試一下。再來跟大家分享。 (reply to 57579)

Yang: asm 函数允许您访问 TVM 的深层黑暗角落  因為這句看哭的嗎 (reply to 57580)

Alan | Torch: 可以算gas 了

云决: 中午好

Niu: 你用什么语言 (reply to 57574)

Sarang Ali: Asalam o Alikum  All Friends

幽草: Php (reply to 57592)

wikig: php好像真没有hhh (reply to 57599)

幽草: 有其他可参考的语言吗 (reply to 57601)

wikig: js比较多吧 (reply to 57606)

Mana: 我跟着文档走的

Mana: 为啥钱包部署不成功啊

Mana: 没让我付gas

Mana: 手机扫码登陆的用的时v4 r2

Mana: 钱包余额0.15，

Mana: what happen？

Mana: 大佬们，带我入个门，后面就不麻烦你们了

Mana: 这合约地址应该没部署成功吧，我都没付gas

Mana: ........

— 2024-09-17 —

Zqy: 我想问一下，在官方文档上面写的inline_ref ，是引用它的成本比字典的搜索和查询要少。所以在调用一两次的时候，可以用这种的方式。我的问题是，既然他比字典的哈希搜索gas少，为什么在频繁调用的时候也不能一直用这个方式呢？

Zqy: 这个问题，我不太懂，在官方文档当中也没有找到具体的解答

Leo: 时间和空间是一体两面，运行开销减少的同时也会增加存储开销

Leo: 类比c/c++的inline就明白了

Mana: ton的合约要写这么多文件吗

Mana: 怎么还要写js

Mana: 😂

you: 有没有大腿能帮忙解答下，如果大量用户通过parent合约创建部署了未知数量的child-wallet合约，在parent合约里能不能在不手动存储用户地址的情况下获取到所有已生成的child-wallet合约的地址信息？🥹

Zqy: 在inline它是属于空间换时间，因为这个是直接把代码嵌入内部，但是inline_ref是去引用呀，我感觉并没有增加储存呢 (reply to 57752)

Zqy: C艹里面只有inline，但是这个里面它有两个，一个是inline，一个是inline_ref，我就很疑惑 (reply to 57752)

Mana: 不会写wrappers咋办

Mana: 但是在blueprint又必须要这个

Mana: 你懂吗 (reply to 57767)

Mana: 🥹

Mana: blueprint只写合约部署不了

Mana: 要wrappers还要写脚本

Zqy: 我一般用func也得写，我感觉这种东西就是比较流程化的呀 (reply to 57773)

Mana: 仅仅部署合约的话 (reply to 57774)

Mana: 这是不是通用

Mana: 不调用方法

錒（谨防骗子）: Ton什么时候才能提币？

DaDa: 本周四 「TON生态之夜」嘉宾招募 ————— 计划主题：Catizen 和 Hamster 的学习与思考  背景介绍： Catizen 和 Hamster Kombat 是 TON 生态中备受关注的项目，通过它们的发展历程，我们看到了区块链游戏和 Web3 应用的巨大潜力。这两个项目展示了如何通过创新的经济模型和简化的用户体验，吸引大量用户参与并促进生态增长。在这个快速变化的市场中，它们为其他项目提供了宝贵的经验和学习机会。 本次「TON生态之夜」的主题将围绕 Catizen 和 Hamster 的发展过程展开，讨论我们可以从中学到什么，并如何结合这些经验促进自身业务的发展。无论你是开发者、投资人，还是生态的建设者，都可以通过这次交流获得启发和新思路。 ————— 欢迎 TG/TON 生态的项目方、开发者、投资人、研究者加入一起交流讨论。  有兴趣参与的伙伴，请给我私信，有信必回！

HadesZ: 请问一下各位，应该怎么判断TON转账的Transaction是失败了还是成功了？

HadesZ: 我发现Transaction如果出错了的话，通过getTransaction拿链上历史记录会一直拿不到交易结果

maiya: 说明没上链

cj: 前端如何拿到某个jetton的jetton wallet data init

cj: 这个方法 有大哥知道怎么用吗

jun_song: 没有交易hash吗 (reply to 57786)

HadesZ: 我用的是js的tonweb包，它发送交易以后没有返回boc也没有返回txHash (reply to 57791)

Zqy: 这里面的蓝色部分是什么意思呢？指的是某些操作码吗？

Leo: inline_ref是给调用处的continuation cell加引用，cell的引用比数据贵多了 (reply to 57766)

Leo: 每个引用要几百 nanoton，而正常不inline就只要加个几字节的method_id，每个bit就1nanoton

Zqy: 那为什么官方文档上面写的，如果只是调用一两次的话，推荐使用inline_ref呢？ (reply to 57800)

Zqy: 😭

Zqy: 我还是不太懂，谢谢您

Zqy: 可以再讲讲吗

Leo: 还是和c/c++类比，调用次数少的话，存储开销增加的不大，inline又减少了运行开销，总体就是划算的 (reply to 57802)

Leo: inline：每个调用处展开被调代码，无global table开销 inline_ref：每个调用处加引用，指向被调代码，无global table开销 non-inline：每个调用处加method_id，去global table查找被调代码，有运行开销

Leo: 函数很小且被调次数不算多就inline；函数大但很少调用就inline_ref

Bitturing: 老师们，在使用t.me/bot/start?startapp的时候，用户直接通过浏览器或tg内打开miniapp。怎么在他打开miniapp的同时启动bot。有没相关的文档

— 2024-09-18 —

gavin: 这个就叫专业 (reply to 57810)

gavin: 启动到时候你不是能取到用户的tgid么，默认启动miniapp的时候就会拉起一次bot 能拿到event的应该 (reply to 57824)

aier: 大佬们求教

aier: get_address_info exception:{'ok': False, 'error': 'LITE_SERVER_UNKNOWN: timeout(during last block synchronization)'

aier: 假期一回来https://toncenter.com/api/v2/getWalletInformation?address=UQBPtD_K-y-J5CbyQGgS5wpIlOysRI1QvAbhDaVk6ZHW5Vth这个请求就报错了

aier: 但是在toncenter官方网页上请求是可以的

Zqy: 专业的话我问个面试问题 (reply to 57855)

Zqy: 如何理解这里面的IHR和HR的区别？

Zqy: 我看不懂英文缩写

Zqy: BD是啥

Zqy: 上年纪了落伍了

aier: https://toncenter.com/ 节点504了，我该去哪里反馈？

aier: 😂难搞，修再少有个戒指日期啊

carl: 链又挂了吗

aier: 感觉是toncenter跑路了

aier: 上次修的时候吧center的服务器给主网了？要不然不至于一直504啊

Zqy: ton中有没有工具把编译好的hex逆成fift代码

teamo: 接口什么时候修好 ，去那看

teamo: ton 官方 怎么联系

u7: 請問我可以從廣播的boc解析出txHash而不是inMsgHash嗎

Mana: 部署合约，钱包都付钱了，为什么提示报错了

Mana: 这是啥意思

Mana: 说我合约没有部署

Mana: 但是我执行npx blueprint run，钱包弹窗付钱了

Mana: 是脚本有问题吗

teamo: ？？？

teamo: 有人在用toncenter接口吗

teamo: rpcjson有人能调通吗

teamo: ？？？

Xu: func 如何在一个合约捕获另外一个合约的回弹消息？

卡: 大佬们好，如何通过RPC API访问区块链呢？

gavin: recv_internal 里面处理   slice cs = in_msg_full.begin_parse();     int flags = cs~load_uint(4); (reply to 57904)

Xu: 前4个字节不是操作码吗？

Xu: 打印出来的和throw出来的不一致

Xu: 这是抛出异常的地方

Xu: 抛出的错误码为111，但是打印出来是5 (reply to 57927)

LuckyBoy: https://t.me/evaaappbot/share?startapp=referral-UQAr_djsdAly2Nx3WjchCRX5EQNGOFwdGt3mnjqmDMST5lGI  Join me on EVAA and let's earn together! Use my invite link to join the fun 💥

u7: 有大佬能帮我解答吗🙏 (reply to 57888)

Xu: 我有两个合约：我想在合约1里面捕获合约2回弹的错误码 (reply to 57933)

He: 请问是否有 带签名  相关的合约 和 脚本用例

gavin: 不可以 (reply to 57937)

Xu: 如果合约1要想知道合约2为什么错了，有什么办法可以让合约1感知到吗？ (reply to 57941)

c: 有没有大佬可以贴下 js ton jetton 的代币转账的代码

He: 请教！有木有 脚本使用 私钥签名的用例  然后再合约中如何验证😂

gavin: 有没有可能在 合约2回滚的时候 在转发一个消息给合约1 带上错误码？ (reply to 57947)

wikig: 嗯.....我寻思，wallet合约不就是这种操作的基础模型吗？ (reply to 57955)

He: 想知道一个 使用@ton/crypto 或者 @ton/ton 或 @ton/core 包 来对 消息进行 签名的用例 另外 需要将 公钥传输进 合约中保存我检查 合约中是需要一个 int256 类型 但是构建出的 publicKey 是一个 Buffer 类型 类型转换都很蒙 (reply to 57957)

He: 没有找到用例都

wikig: 消息进行签名的用例.....嗯.....我记得Tonweb好像有，最后签到BOC结构（然后boc就可被丢来丢去的） (reply to 57960)

He: 合约中要传入 pubkey 的 INT 类型 (reply to 57962)

wikig: pubkey的INT类型啊....... 难不成是address的HEX格式（？ (reply to 57964)

He: Tact 文档中没有用例也没有说 (reply to 57965)

gavin: 没问题的

gavin: const publicKey = signatureKeyPair.publicKey.toString('hex');  let signaturePublicKey = BigInt('0x' + publicKey)

gavin: 这样就行

gavin: 明白了吗？

wikig: 那确实就是address的HEX格式hhh (reply to 57968)

He: 简直了。。。。

Bitturing: 能拿到tgid，但是似乎启动miniapp是不需要透过bot的，所以好像没有event (reply to 57857)

c: 有什么方法可以判断TON的钱包地址是不是 交易所的地址嘛 大佬们

c: 这种效果

증식엄: 这只是一个友情提醒，不用实际检查的

c: 我看只有交易所的地址才会有 正常用户的地址 不会出来

c: 所以就想看看 有什么 能通过地址知道这个

Andrii Ivaniv: 如何检查某些 jetton 是否有非标准逻辑？  例如，TEN jetton 已实现 jetton_master 标准 (tonviewer) 和 jetton_wallet 标准 (tonviewer)。 但是这个代币有一些额外的逻辑 - 它为买卖设置了 10% 的税。

Zqy: 这个链接访问不了，怎么办呢？

wangwei: 请问有大佬遇到转账最后点确认出现报错的么

Sergey Haiduk: Looking for investors

teamo: 在 dedust 添加了LP 流通性 ，lp 代币都给了，池子是 unknown token  交易也 看不到价格 ，谁见过这种情况没

you: 各位大佬们，想问一下，用户通过 主合约 创建了很多 子合约 钱包，现在想通过 主合约 主动对所有创建出来的子合约钱包发送消息，除了花高昂存储费在主合约存储所有用户的地址外，还有没有其他的办法可以做到？

Ton: 我也想问 (reply to 58021)

Ton: 有答案了麻烦通知一下

Ton: 字典存储的能力太有限了

jay: 链下获取到，然后转入。 (reply to 58021)

you: 链上没办法获取吗？我以为都是通过一个合约生成的，应该会有个方法能获取到所有的子钱包🙃 (reply to 58034)

Yang: 我在努力惹 (reply to 58033)

jay: 需要一定的设计，比如你的子钱包都通过一个自增id来生成。主合约存这个id的最大值。 (reply to 58038)

jay: 未来就可以通过循环来找到这些地址。

巴尼(幻幽): 需要協助的話我也可以幫忙 (reply to 58044)

you: 用自增id，用户是不是就找不到自己的钱包了😂，子钱包不是靠用户地址和子钱包代码组合生成的吗 (reply to 58046)

jay: jetton才是这样。子钱包的生成规则是你主合约定的。 (reply to 58051)

you: 那用自增id的话，用户怎么访问自己的那个子合约呢？😂，我想不出来 (reply to 58052)

jay: 告诉用户他的id 是啥~ (reply to 58054)

jay: btw，这不是一个主流的设计，请走链下处理数据。

jay: ton 的合约互操作性是比较差的。

you: 这倒也是个办法😂，就是用户操作的时候可能会麻烦一点，链下处理数据要怎么弄？涉及到奖励的话，可信度会很差吧 (reply to 58056)

jay: merkle tree 了解么？差不多是这个安全级别。 (reply to 58060)

you: 用链下方式是不是还得准备个服务器啊😂，用来备份那些钱包地址，大佬能细说说链下的思路吗 (reply to 58062)

— 2024-09-19 —

jay: 扫描交易记录，把地址存下来。 (reply to 58071)

User<6218334417>: 请问下 通过 @telegram-apps/sdk-react 有办法获取到当前小程序的link吗？ 像下面这样 https://t.me/botusername/appname

DaDa: Catizen 和 Hamster Kombat 是 TON 生态中备受关注的项目，通过它们的发展历程，我们看到了区块链游戏和 Web3 应用的巨大潜力。这两个项目展示了如何通过创新的经济模型和简化的用户体验，吸引大量用户参与并促进生态增长。在这个快速变化的市场中，它们为其他项目提供了宝贵的经验和学习机会。 本次「TON生态之夜」的主题将围绕 Catizen 和 Hamster 的发展过程展开，讨论我们可以从中学到什么，并如何结合这些经验促进自身业务的发展。无论你是开发者、投资人，还是生态的建设者，都可以通过这次交流获得启发和新思路。 (forwarded from DaDa)

Sun: 出现这个错误什么情况？

Sun: 我是这么写的

喜欢你: 额

Logan 🐯: 测试链和正式链的workchain是多少

Sun: 有懂哥吗？不加也不减什么意思？余额不动？

Sun: https://testnet.tonviewer.com/transaction/102339058dff9e8565283c0780493efdcca2e7542fe87940a1ca92d49201fd1e

芃憧: 前端是否可以主动切换用户钱包的Ton版本地址，例如，从W5切换到V4R2?

wikig: 这玩意儿......如果你用tonkeeper的sdk可能有，但是tonconnectUI好像没有抽象出来这个用法吧*（ (reply to 58133)

芃憧: emm 我就是在tonconnect 里没有找到对应的方法

芃憧: 还有一个问题 请教一下大家 前端怎么查看用户地址是否部署了walletV4呢 如果没有部署如何部署 只能通过WalletContractV4.create 然后发起一个交易吗

芃憧: 哦不对 如何检查我知道  主要就是 如果没有部署walletV4 如何部署

wikig: 看你用什么类库了，如果是tonconnect的话 对自己发一笔交易应该就会把初始的合约部署交易给带上 (reply to 58138)

芃憧: 有没有单独能部署walletV4的方法呢

芃憧: 要使用订阅合约的功能 我看官网描述  这个是V4版本钱包的特定内容吧

🦄: 这个在func里是怎么设置的呀。我设置store_slice 怎么不会被解析出来

cj: 你得这样传数据，才能解析出来是个评论吧

🦄: 我试试，感谢大佬

Sun: 有懂哥吗？不加也不减什么意思？余额不动？ (forwarded from Sun)

Sun: https://testnet.tonviewer.com/transaction/102339058dff9e8565283c0780493efdcca2e7542fe87940a1ca92d49201fd1e

🦄: 反弹了吧

allen: 大佬们，Java 转账的时候，如果获取交易hash?

Sun: 什么意思？

🦄: token转账失败了

🦄: 我理解是这样

Sun: 接收方也有消息，只是余额不增加，也不减少

Sun: 😅

🦄: 这个有func吗 (reply to 58157)

cj: 我不知道，我tact写的

Ton: 这个bad request 是不是网络原因啊

M: 为什么同样的助记词，导入到手机上的TonKeeper，显示的地址和chrome插件里显示的地址不一样呢？各种版本都不一样，也没看到说有不同的派生路径的地方啊

Ton: 我用tonconnect/ui发送transaction跳转到tonkeeper，就出现这个bad request. (reply to 58174)

Ton: 你们会有这个情况吗

cj: 万一你参数错误呢

cj: 没碰到过这个

Ton: 不会啊 之前都好用的

Ton: 我之前也遇到过 过一段时间就好了

gavin: manifest.json 文件是不是错了

gavin: 你截个图我们看看 (reply to 58175)

gavin: 别发私钥😚

M: 一导入进来显示的就是这个

gavin: 。。。。。。

gavin: 你先把网络弄成一样的

M: ***7V4s是默认的，手机上的，不知道怎么来的

gavin: 这个也是v5吗？ (reply to 58187)

M: w5

User<7106205946>: Hello, everyone! I'm a blockchain developer. If you have some problems or want me, pls contact me anytime.  Really thanks.

M: 不是，这个不是，没显示什么版本 (reply to 58194)

M: 主要是派生路径，没法看也没法选，这地址多了多尴尬啊

Alexander: 请问一下，这个Unverified Token，要怎么进行认证？

M: 没关系啊，那就怪了，搞不懂，我研究研究去 (reply to 58182)

allen: 大佬们，这里发送上链后，如何获取交易hash?

hk: 订阅交易 (reply to 58207)

hk: 交易上可以获取hash内容

hk: tx.Hash

allen: 这样？ (reply to 58208)

allen: 但是在浏览器去查的时候，不能像eth浏览器定位到具体的交易信息，是还需要进一步处理hash？ (reply to 58214)

allen: 好的，谢谢 (reply to 58216)

User<1496299585>: boc怎么转为txid？

teamo: toNano(1)  转1个代币可以 ，怎么自定义 他的小数位啊

Logan 🐯: 测试链和正式链的workchain是多少

Logan 🐯: 怎么看这个

teamo: 这个 谁用过啊 (reply to 58231)

sufferer: is there any english channel for ton dev pls? im not chinese

Pavel: @Tondev_eng (reply to 58242)

Pavel: hi, I am a FunC Smart Contract Developer, I am currently looking for a job, I have a lot of experience in developing high-load systems. I will be glad to cooperate!

Logan 🐯: 主链是-1是吧

Pavel: Yes (reply to 58252)

william: 如何只让手机用户打开游戏

william: 有大佬知道吗？

— 2024-09-20 —

Play: https://core.telegram.org/bots/webapps#initializing-mini-apps (reply to 58304)

Ignacia: Join

Aaron: 有大佬了解mytonctrl返回的状态中 灰色部分的block是什么含义，昨天系统不能获取最近的交易列表是否和这个值变大有关，昨晚最大到了4千多，api不能返回交易。

Aaron: tonlib的getRawTransactions，逐页往前查，每次返回10条，到中途就停了只返回1条，明明还有记录，就是不返回了，哪位大佬帮看看下。

Xu: func 如何记录一个日志？

Mao: 上次在 github 仓库看到一个收集的通用 opcode 码对应的功能，链接丢了找不到了，请问大家有这个链接吗？

Aaron: 这个清除的规则有说明吗？1天、半天 (reply to 58325)

jay: 看看钱包版本 (reply to 58175)

Xu: 有大佬知道，如何记录一个自定义的日志吗？

Aaron: 请教大佬 ，我门有笔交易，从链上看没有前序交易，这个是什么情况，他周围的交易都有，就是这笔没有，我门如果从他找前序交易就停在这里了。有 Prev. tx hash https://tonviewer.com/transaction/6f0133f7dc4c5ab932ecea88ddc4092a832d6cd5e3f6cdd5a72401d11c2618c7  无 Prev. tx hash https://tonviewer.com/transaction/508f6846e976ad95dc770186148b7b762644af340c8c51509fddf98336cfb475

gavin: 无Prev tx的说明这个地址是个处

Sun: 问下，ton合约能实现转移sender的jetton代币吗,有授权这么一说吗？

11: 不行，只能预充值

Sun: 预充值是什么个逻辑？感觉也不错

allen: 大佬们，基于ton4j怎么转账合约代币？

M: TonKeeper Web 3.22.4 和 TonKeeper 4.9.0 (reply to 58330)

Aaron: 哈，这笔交易前后都有交易，他咋会没有呢，这不成了创世交易了，是否链有问题导致的，搞得我门昨天搞了很久，现在还没搞清楚啥情况。 (reply to 58335)

jay: 钱包的版本，V4R2, V5 这种。 不同版本生成的地址格不一样。 (reply to 58340)

jay: 说明它是这笔交易的第一条消息。 (reply to 58341)

jay: 要区别看待 event 和 transaction。 TON 中 transaction 表示一笔消息（类似evm 的 internal txs）。 event 是由一堆 transaction 聚合起来的，表示完成一件事。

Aaron: 交易的边界是什么，比如这笔交易是典型的提币交易，应该是个完整的多笔交易吧，他的每一个交易组成，都能看到Prev tx hash (reply to 58344)

Aaron: 源码readme中有例子的哈 (reply to 58339)

jay: 每条消息都有一个id（transaction id） (reply to 58345)

Aaron: 在哪里配置，指点一下哈 (reply to 58349)

gavin: 对 所以我说如果没有prev tx 说明这个地址是个处

Aaron: 这个应该不是，这个地址这笔交易之前之后有老多交易了，这个事币安的提币钱包地址。 就L没有，其他前后的看了都有 (reply to 58355)

Aaron: 无 Prev. tx hash https://tonviewer.com/transaction/508f6846e976ad95dc770186148b7b762644af340c8c51509fddf98336cfb475 (reply to 58359)

M: 那问题是，我如果用python去加载助记词，他显示的web上的那个地址，那我怎么使用手机上的地址呢？这个地址该怎么找到呢？有了助记词结果地址还原不出来，这不是狗血吗 (reply to 58342)

jay: 检查你的初始化钱包的版本。

M: web插件初始化的钱包

allen: 大佬，这个示例没有看懂，没看到关联的合约 (reply to 58346)

M: 我现在想用python去调用合约

M: 因为发合约的时候用的手机发的，那个才是管理员。

Aaron: 嗯，应该是这个原因了，只开了充，没开提，所以没有部署。那就事gas的问题了，要先充TON进来。

jay: 是说你代码中初始化合约的对象（要用对应的版本） (reply to 58363)

owen: ton 的测试网和主网是不是存在差别呢？同样的合约代码，执行jetton的inner transfer，主网就是不行诶🙈

owen: 好奇怪，UKWN是什么，大家有碰到过么

Sun: hash 发出来看看

allen: 大佬这个示例，感觉像是合约的拥有者，从合约转账到普通账户。。。有没有 普通账户拥有的合约代币，转账到普通账户示例？ (reply to 58346)

Sun: https://docs.ton.org/mandarin/develop/dapps/ton-connect/message-builders

Sun: Blueprint 编写测试, 测试完后，可以直接拿到前端程序里面用吗？

harlan: ton钱包可以签名，程序对签名做验签操作这种吗，类似evm签名的网页登录操作

gavin: 可以把warpper给前端 (reply to 58400)

Sun: 蟹蟹

Jackz: 请问下toncenter中接口拿到的区块hash（Ua1K1keZhU5BN+EMoqxXlIxtC0Cb0HT4UMOxb+J4BWQ=）怎么转换为浏览器中的区块hash（51ad4ad64799854e4137e10ca2ac57948c6d0b409bd074f850c3b16fe2780564），用了啥加密算法？

Jackz: 好的，我试试，谢谢

wikig: 目前好像只有tonproof (reply to 58402)

carl: 大家有没有碰到，用户A给B转token A那边有转账记录 B这边没有的情况呢

carl: 就在9月6号那天

wikig: 消息签名好像...tonconnect还是没有整

Jackz: 请问下toncenter中/api/v3/blocks查询指定区块那个shard参数怎么传？固定8000000000000000这个吗？

🦴 Brenda: 有没有需要空投脚本的

🦴 Brenda: 便宜出

M: 哥哥们，有用过tonutils这个python包吗？这个调用怎么传参数啊？我想把address传进去，可是不管用差不到东西

M: 这参数该怎么传

M: Tact这么写的

M: 包了总报错 (reply to 58432)

M: 我直接写地址[******]，试了好几种方案，就报网络超时错误，但是上面两个都可以查询，我也领不准到底是网络问题导致的还是参数写错了导致的了

jay: 查 jetton wallet， tonviewer 会丢数据。 (reply to 58413)

erick: ton-connect 的sendTransaction可以发external Message吗？或者ton-connect可以签名消息。用ton-connect 调用用户walletV4合约的external 方法，比如intsall pulgin等操作

M: 坑是真多啊，RUSSIAN搞这些乱七八糟的东西，去踏🐎，黔驴技穷了，先开开心心过完周末再说😄

Play: 有大哥知道   前端把钱包地址传给后端,  后端怎么验证这个地址中途没有被篡改过呢?

Play: https://docs.ton.org/mandarin/develop/dapps/ton-connect/sign 是这篇文章这样吗?

Alexander: 有哥哥知道，可以把交易消息，通过deeplink发给钱包，钱包授权后，进行交易吗？

jay: tonviewer背后是tonapi，这玩意的events聚合和transactions不完全保证绝对正确性。 (reply to 58443)

jay: 遇到过几次。

jay: events丢得很严重，transaction偶尔会少。

jay: 尽量别依赖events做判定，tonapi文档明确说的。

gavin: 他估计evm 搞多了

gavin: 应该说的是解析payload 里面的cell吧

jay: 你看tonviewer 上第一栏就是events。 (reply to 58460)

jay: 这个就是。

jay: event 是一组transaction 的组合。从开始到结束。 不是 evm 上 event 的概念。

jay: 这个就是event，tonapi的events接口。

jay: 你调用tonapi抓过数据么？

jay: 抓钱包 events 数据的时候，会发现数据会少几条。抓jetton。transfer 的 transactions 的数据会偶尔少一条。从jetton wallet作为主要钱包抓暂时还没遇到丢的。

jay: tonviewer的数据源就是来自tonapi。 (reply to 58478)

jay: tonapi是对liteserver数据的二次索引组合。

jay: 交易量大么？

jay: 😂tonviewer的数据是tonapi。

jay: 此时可以对照tonscan，多维度比较。

jay: 从jsonrpc从liteserver直接抓会更加精准，但复杂度就更高。

jay: jsonrpc是标准，跟liteserver交互。

jay: https://testnet.tonviewer.com/transaction/1e3050c38f73ac0cefb874d52ca183a4e969b72298069c50336ec440a24f330d 从收方角度看看这笔交易。

jay: 这笔交易在收方查不到。

jay: 算的，当你依赖它的转账做交易对比的时候，就会挂掉。

jay: 逻辑上我也认为是这样。 (reply to 58505)

jay: 这就导致一个典型问题：A 给 B 转了账，B 查不到转账记录，但钱到了。

jay: transaction也不行。

jay: event 是聚合，供展示用。

jay: 我明白你说的东西，我只是说这种问题非常考验大家的认知。没遇到的很容易踩坑。

jay: 我都是花钱买到的经验，😭。因为这些，产生了超发。

jay: 不是浏览器，而是它背后的数据组装逻辑。

jay: 我觉得不能这么去考虑。当然归根结底都可以算是没吃透这条链。

jay: 这些算是无形之中的门槛吧。链作为基础设施还是有更好的可能的。

jay: 没强求呢，这才到哪。。 更多是提醒大家不要在这方面在拿金钱买经验。 (reply to 58533)

jay: 这个地方你是把 jetton 当成业务层逻辑，也说得过去。

jay: 下探一点是因为ton 是一条偏 IM 架构的链。

jay: 哈哈，是呀~ (reply to 58536)

jay: ton 的内核只有消息这一个核心，迭代ton 作为费用。其他都是迭代之上的业务，只是 jetton 有 tip 算是标准化业务。

jay: viewer 完全是有能力捕获tip 协议的东西的。只是没有这样去计算而已。

jay: yes， 之前也叫 tip。 (reply to 58544)

jay: 难是肯定的。毕竟ton 开发都很难。

jay: 站在 viewer 也合理，业务视角看就会产生诸多奇怪的现象。

jay: 再举个有趣的点： A 给 B 转了 10 TON，请问 B 会收到多少 TON？

11: 🤣看大佬们聊天获益匪浅啊

11: 直接转账不应该是直接收到10ton么，如果a账户已经是激活状态 (reply to 58554)

jay: https://tonviewer.com/transaction/6aed07e250c411f8b1eefdb574d8f8b692ea8ff45a518aaba96a7d995e001e45?section=valueFlow (reply to 58556)

jay: 找了一笔交易。

jay: 理解。但从表象看会不会觉得疑惑，哈哈~

11: 话说ihr这个启用了吗

11: 确实，而且publish合约和浏览器调用合约也很难用

jay: 不懂ihr是啥🥹

11: cells解析也不太行

jay: 这个算是简单的了，只是核心库封装得太初级。 (reply to 58567)

jay: 还有就是rpc老限流~

jay: 我觉得是链设计之初固有的设计问题。 (reply to 58565)

jay: 假设哈：转账交易保持绝对的精确值，然后再自动产生一笔存储费扣除交易。

11: 话说请教一下各位大佬，目前func没有event，只能靠主动发送msg到对应合约的方式发消息，但是主动发消息又会拖慢处理速度，这个有什么好办法吗

jay: 固定 gas 有利也有弊吧。

jay: 无法根据链负载自动调节，容易产生流量聚集。

jay: Solana 怎么说~ (reply to 58577)

jay: ton 上我觉得不需要event。主要都靠链下查询数据了，event 可有可无了。 (reply to 58574)

jay: 没仔细用过，我的理解应该是相关同步，不相关异步吧。 (reply to 58580)

jay: ok，理解你的意思。

jay: 我个人更喜欢并行这种方案。

jay: 甚至觉得 evm 未来应该有并行。

jay: 不太理解极端并行的价值点，还有不少问题:  1. 合约互操作性问题 2. 交易结果判定

jay: 固定 gas 明显的问题就是流量集中。优势就是gas 固定。

jay: 不能存在热点。

jay: 来得慢，所以调节不了人性。

jay: 所以遇到热点，链的稳定性就有风险。

jay: 把 ton 当成 im 更容易理解 ton~😭个人愚见。

wikig: https://docs.ton.org/develop/dapps/tutorials/how-to-run-ton-site  提问，有群友折腾过 TON web 或者 TON proxy的吗

gavin: 怎么啦遇到什么问题

wikig: 还是跑不通 怪 😭 (reply to 58611)

gavin: 你运行这个干啥

wikig: 因为打算做点好玩的东西*（ (reply to 58615)

𝗨𝗻𝗰𝗹𝗲 𝗗á𝘄è𝗻: 这样搭建的网站是否会有安全问题，比如被攻击？

wikig: TON SITE ?   我的理解，安全性问题应该跟正常公网站点差不多  因为这套逻辑就是TOR的逻辑罢了 (reply to 58619)

Aaron: 你门后来如何解决的哈，是检查这边的jetton wallet 的交易来解决的吗？ (reply to 58498)

jay: 已jetton wallet为主地址检查交易。

— 2024-09-21 —

Leo: tonwallet w4 和 w5的地址会变吗

Leo: 大家好

Leo: 有人了解吗，能帮忙回答下吗

jay: 会变。

Leo: 收到。多谢。

hk: 我也想问这个问题，有哪位大神知道的，分享一下经验 (reply to 58628)

hk: 是不是要自己部署主合约、钱包合约？

gavin: 当然 (reply to 58664)

gavin: 就是收ton 返 jetton 写一个合约就好

hk: 什么样的场景会用到jetton？

hk: 直接ton币交易会有什么风险吗

SAIVO SUPPORT: 我需要在 Dart Flutter 应用程序中实现 Jetton（代币）转账。我正在使用 tonutils 包，但在创建和发送 Jetton 转账交易时遇到了困难。  如何正确创建 Jetton 转账？ 应该使用哪些方法或类来发送交易？ 谢谢你的帮助！

Alex: Hi all. To welcome Token 2049 and improve the security of more TON projects, we provide free penetration testing and unit testing services, only for this week. If interested, please DM.  大家好。为了提高更多TON项目的安全性，我们近期提供免费的渗透测试和单元测试服务，有兴趣的话请DM。

Leo: 我感觉eth上的山寨币就相当于ton上的jetton吧 (reply to 58669)

jay: Jetton 就是EVM 上的 ERC20。

hk: 🤣 (reply to 58675)

Leo: 有什么库能够算w4到w5的地址转换吗

jay: 只要你有公钥，随意计算。

sakura: 我用tonConnectUI.connectWallet链接tg的wallet后直接发送交易为啥没有反应直接中断了

aier: jetton感觉和erc20差不少，倒是和sol的ada差不多

Aaron: 请教一下，你门的交易费是如何计算的？ (reply to 58623)

Aaron: 有投入有找零，还有其他潜在的费

aier: 估算。。。 (reply to 58694)

aier: 平均值乘上1.5倍。。。

Aaron: 我门在每笔交易上记录这笔交易的fee，然后汇总应该和Ton余额的减少能对的上，目前看交易上记录的费是不太准的，拿投入的减去找零的作为交易费，差不多能对上，但是还是有误差。 (reply to 58697)

aier: 群里一群大佬早就盖棺定论了，没法算，也让我们不要在意，你按照这个交差就行，就是没法算。。。

aier: 你领导不信你群里扒拉下我们讨论的截图，发过去。。。

Aaron: 开始的估算我理解是估算不准的，但是交易上链后，这笔交易的费用总是能算清楚的吧，要不TON的余额是咋扣减的呢？ (reply to 58702)

aier: 上链后你也算不准，完成后你才知道花了多少

aier: 它那个是一步步执行的，每步花的gas费用都不固定

aier: 减扣就是你给多点钱，让他能执行下去，执行完成后剩余钱还给你 (reply to 58703)

Aaron: 完成后咋算，指点一下。 (reply to 58704)

aier: 😂你发交易之前的钱减现在的钱

Aaron: 中间有充值进来就不行了 (reply to 58708)

aier: 你别咬这么死就行，一笔交易正常也就2分钟以下就上链了

BERSERK: I Sell mini app clicker, dm

jay: 多付一点，用不完退。 (reply to 58694)

jay: 交易过程是能算的，但我认为没必要算，太折腾。

Aaron: 比如一开始给0.05，后来找回了 0.03，这笔业务（包含TON的多笔交易）就花费了0.02的费用，是这样吧。 (reply to 58713)

Aaron: 这样基本差不多，但是有时候发现也有几率，发现，余额的变化会比这个花费多那么一丢丢。

jun_song: 请问Telegram.WebApp.initData获取到的电报个人信息里这个名称是中文咋解析出来是乱码呀

有人: 我需要miniapps开发，会的联系我

User<7025465243>: ？

jay: 有很多case会多花点，很难算。有个大概就行。 (reply to 58715)

Aaron: 现在用ton4j的getRawTransation获得的交易中，没有endbalance，所以无法根据交易前后的余额变化准确计算一个业务活动个gas花费（比如提币，包含多个TON交易），所以想看看有没有其他计算方法。 (reply to 58732)

jay: 直接查交易记录，里面有精确值。

Aaron: 而且我发现，在高负载钱包中，一次发多笔交易，然后找回交易会异步返回，找回交易中间会零星夹杂其他的交易，这样用交易的前后endbalance差额计算可以能会跑到其他业务中了，再往前又回到当前业务的找零交易。

jay: 单笔交易里直接算，差额也是单笔交易算。

Aaron: 取交易记录里的totalfee加总起来是不对的，和余额的减少差对不上的。 (reply to 58739)

Aaron: 嗯，可以落库后，用同一个queryid联系起来，我现在就是用api取不到 endbalance和pre tx hash。 (reply to 58741)

Aaron: 取出1的前面交易的endbalance，再取出 2的找零的endbalance，两者差额就是AABCD这也逻辑业务（提币）的交易费了。

Aaron: 想想太麻烦了，可能想之前有个朋友说的。 提币前取一次余额提币后取一次余额，两者之差就是这次的gas，这样更简单，就是中间不能有充值进来。

Aaron: 你门是如何算的能指点一下吗？ (reply to 58742)

jay: 算的总额，没仔细算单笔的。 (reply to 58747)

Aaron: ton4j的返回就这些，缺少关键的endbalance和pre tx hash，我门用了inmsg和outmsg，data是一堆没有解析的16进制数据，缺乏说明不知道里面是什么。 public class RawTransaction implements Serializable {     @SerializedName("@type")     final String type = "raw.transaction";     long utime;     String data;     LastTransactionId transaction_id;     String fee;     String storage_fee;     String other_fee;     RawMessage in_msg;     List<RawMessage> out_msgs; } (reply to 58737)

jay: 搞ts吧。

jay: 你是从toncenter rpc抓的transactions么？

Aaron: 是自己跑的节点，只是liteserver，指点一下。 (reply to 58756)

Aaron: 不太了解，没关系你说下方法。 (reply to 58766)

Aaron: 嗯，ton4j不新，有些坑，比如comment中文的话取出是乱码。 要如何包一层呢，指点一下哈。 (reply to 58771)

Aaron: 对的，刚看了，没有，只有一个按地址或者地址+blockid的。 (reply to 58775)

Aaron: 我门看下bytx的原始api接口资料哪里找哈，我门包一下试试。 (reply to 58776)

Aaron: 老的系统限制哈，新写可能会用go了。 (reply to 58779)

Aaron: 这个包装后相当于是得到tx的endbalance是吧？ (reply to 58781)

Aaron: 如果要得到当前交易的前一个交易的endbalance有什么办法能找到当前tx的prev tx hash呢？ (reply to 58783)

Aaron: 前面发的图中，要找到最左边的圆圈对应的tx的前一个tx的endbalance才可以，这个才是业务进入前的balance，最左边的tx得到的已经是A花费之后的balance了。

Aaron: 好的，这个data是boc吗，用boc反解出来，用cellslice取数据是吧 (reply to 58788)

Zephyr: 各位朋友，大家好！我们正在组建 InviteNow 链游交流群，这里是链游爱好者的聚集地。群内会持续不定时发放各大链游福利，大家可以一起交流链游心得、分享游戏技巧、探讨行业动态。如果你也对链游感兴趣，欢迎加入我们的交流群，一起开启精彩的链游之旅！

Leven: 请教个问题：  message Add {     amount: Int as uint32; }  Tact合约这个消息编译后2278832834这个code怎么计算得来的， TLB编码后，我参照Ton官网提供的crc32 2个方法都计算不到。

Leven: @dev_rel 大佬有时间帮忙指正下。🫡

jay: tonapi的transactions接口可以看看，也不确定。 (reply to 58764)

幸运: https://fragment.com，有这个网站的开发文档吗

— 2024-09-22 —

🐤 wahaha qubic: 兄弟们  有没有自己搭节点？

Mob: 自己搭节点的好处是什么

Niu: 在使用 @wallet Bot (TON Space) 发送 USDT 时，余额不足显示错误不正确  问题描述： 在使用 TON Space 上的 @wallet Telegram bot 发送 USDT 时，我发现显示的错误信息不准确。当我的 USDT 余额不足以完成交易时，bot 显示的是“未验证的交易”，而不是“USDT 余额不足”的提示。这让人误解，因为实际问题是 USDT 余额不足，而不是交易未验证。  值得注意的是，当我发送 TON 时，如果余额不足，错误信息是正确的，清楚地显示余额不足。然而，针对 USDT 交易的错误信息处理不正确，这让我认为这个问题可能是 TON Space 中 USDT 交易的特定 bug。  重现步骤： - 尝试通过 TON Space 上的 @wallet Telegram bot 发送 USDT，且余额低于要发送的金额。 - bot 返回“未验证的交易”信息，而不是正确提示 USDT 余额不足。  预期行为： 当用户的 USDT 余额不足以完成交易时，bot 应该显示明确的提示，如“USDT 余额不足”。  其他信息： - 网络费用（TON）足够。 - 此问题仅与 USDT 余额不足相关。 - 当发送 TON 时，如果余额不足，错误提示是正确的，而 USDT 的错误提示不正确。

Niu: 你们有没有遇到这个问题？

Bruce Lee: 0x87D43AC2 (reply to 58812)

Bruce Lee: 通过这个 方法  hex to decimal 算出来的

Bruce Lee: op == 0x87D43AC2

Bruce Lee: 使用这个TLB.   TLB: add#87d43ac2 amount:uint32 = Add  进行crc32 计算得到的

erick: h

我要飞: import { Address } from "@ton/core"; import { createTestClient } from "../utils/createTestClient"; import { JettonMaster } from "./JettonMaster"; import { JettonWallet } from "./JettonWallet";  describe('JettonMaster', () => {     it('should resolve jetton wallet address', async () => {         let client = createTestClient('mainnet');         let master = client.open(JettonMaster.create(Address.parse('EQDQoc5M3Bh8eWFephi9bClhevelbZZvWhkqdo80XuY_0qXv')));         let walletAddress = await master.getWalletAddress(Address.parse('EQCo6VT63H1vKJTiUo6W4M8RrTURCyk5MdbosuL5auEqpz-C'));         let jettonData = await master.getJettonData();         expect(walletAddress.equals(Address.parse('EQDslTlGmbLTFi0j4MPT7UVggWR7XRDI2bW6vmNG6Tc_FBDE'))).toBe(true);         expect(jettonData.mintable).toBe(true);         expect(jettonData.adminAddress.equals(Address.parse('EQCppzUtmGSMg3FIRlFLzhToqbaC0xjmjzOn0o7H4M8Aua1t'))).toBe(true);                  let wallet = client.open(JettonWallet.create(walletAddress));         let balance = await wallet.getBalance();         expect(balance).toBe(0n);     }); });   这个查询 jatton 的代码，把EQDQoc5M3Bh8eWFephi9bClhevelbZZvWhkqdo80XuY_0qXv这个代币换成别的代币 throw new Error("Invalid address: " + type);                   ^  Error: Invalid address: 0  就这个错误

John: 有大佬知道小程序上怎么调麦克风权限吗

User<7499124468>: 你指的是那种小程序？ (reply to 58912)

John: tg上的mini app

John: 我在安卓语音每次都要唤起权限通过才能输入，这有毒呀

wikig: 因为权限状态跟随内置browser的记录，然后因为android走的应该是系统默认浏览器内核的无头浏览器，不记录状态，导致了状态不跟随 (reply to 58916)

John: 小程序没有方法授权吗？🤔

幸运: 钱包验证被拒绝，访问限制是怎么回事啊大佬们

— 2024-09-23 —

wikig: 我印象里webapp就是套了一层的OS 默认browser。所以......他的权限系统和控制系统都是建立在默认浏览器内核之上的。 (reply to 58922)

erick: 各位大佬，ton-connect-sdk可以发送external Message 的交易吗

erick: 大佬，有啥案例或者demo吗？我这边需要调用walletV4 钱包合约的External方法，去intsall插件，但是通过ton-connect-sdk 发交易，交易上链了，但是没有调用合约。 (reply to 58985)

erick: 这个是我的代码

erick: https://testnet.tonviewer.com/transaction/c69368c0adfa9fc9102443ef1d01e6d16a3b21e062df9d11d31d73a4551a0d5f  这个是通过ton-connect-sdk发送的install 插件交易

erick: https://testnet.tonviewer.com/transaction/b9955139bed9c9987b74b51ca407bfadc60002350e6b1a09a3db5eadefb8c490 正常的应该是这样的，这笔交易是我用ts脚本发送的，通过助记词签名Message 发送External Message，成功intsall 插件的

erick: 我怀疑是不是ton-connect-sdk 把交易op==2 （install 插件），改成了op==0？

live: 各位大佬，如何检查tg bot是否在群中?有相应的api吗？

gavin: 我没搞过插件

gavin: 你弄个bot 设置成管理员 就能监听消息了 (reply to 58997)

nohara: 1. 如果是自己的 bot，用 getChat 接口(https://core.telegram.org/bots/api#getchat)，成功就是在群中，失败就是不在。 2. 如果是检查其他的 bot，那就用 getChatMember 接口（https://core.telegram.org/bots/api#getchatmember） 前提是自己的 bot 在对应的群中。 3. 如果自己的 bot 不在群中，又想检查其他的 bot 是否在群中，这个做不到，只能将自己的 bot 拉进群再去校验 (reply to 58997)

gavin: 这个我没有调研过， 我觉得ton connect 肯定会限制 必须是自己的钱包才签名吧

live: 好的,thanks！ (reply to 59003)

allen: 大佬们，这种转账出错，怎么查看错误信息？

gavin: 目标账户是钱包吗还是自己的合约

allen: 是个钱包 (reply to 59032)

owen: 请教下 ton sdk 有没有办法拿到调用合约交易的成功或失败信息呢？

备用: 请问一下,ton上面想做一个挂单合约,有开源的参考实现吗?最好是tact的

我要飞: /**  * Copyright (c) Whales Corp.   * All Rights Reserved.  *  * This source code is licensed under the MIT license found in the  * LICENSE file in the root directory of this source tree.  */  import { Address } from "@ton/core"; import { createTestClient } from "../utils/createTestClient"; import { JettonMaster } from "./JettonMaster"; import { JettonWallet } from "./JettonWallet";  describe('JettonMaster', () => {     it('should resolve jetton wallet address', async () => {         let client = createTestClient('mainnet');         let master = client.open(JettonMaster.create(Address.parse('EQDQoc5M3Bh8eWFephi9bClhevelbZZvWhkqdo80XuY_0qXv')));         let walletAddress = await master.getWalletAddress(Address.parse('EQCo6VT63H1vKJTiUo6W4M8RrTURCyk5MdbosuL5auEqpz-C'));         let jettonData = await master.getJettonData();         expect(walletAddress.equals(Address.parse('EQDslTlGmbLTFi0j4MPT7UVggWR7XRDI2bW6vmNG6Tc_FBDE'))).toBe(true);         expect(jettonData.mintable).toBe(true);         expect(jettonData.adminAddress.equals(Address.parse('EQCppzUtmGSMg3FIRlFLzhToqbaC0xjmjzOn0o7H4M8Aua1t'))).toBe(true);                  let wallet = client.open(JettonWallet.create(walletAddress));         let balance = await wallet.getBalance();         expect(balance).toBe(0n);     }); });   问下大佬们， 我用这个代码查jatton 钱包里面代币的数量，  只有原代码里面的这个地址能查到，换别的地址都报错

我要飞: throw new Error("Invalid address: " + type);                   ^  Error: Invalid address: 0  这个错误

我要飞: 是哪里出了问题

c: 大佬们 知道为啥 我转jetton 代币 查询记录一分钟都查不到嘛 过了好久才能查询到转账记录

Evan: 是不是和你查询的节点同步速度有关系，你可以换一个节点试一试；

c: https://toncenter.com/api/v3/index.html#/jettons/api_v3_get_jetton_transfers

c: 我用的是这个 接口api

c: 但是ton 很快

c: jetton 死活很慢 很慢

live: 大佬们，又方法用tg link获取chatid吗？

c: 我试试 v2的 多谢大佬

nohara: 简单一点的话就是去轮训 wallet 的 seqNo（seqNo 增加了的话就是成功的），复杂一点的话就是去自己构建 tx，拿到对应的 txid然后再通过node去查询tx的状态 (reply to 59039)

owen: 感谢🙏，第二种，目前有没有代码参考呢？

allen: 大佬们，ton4j 转账这里，有没有什么办法可以及时且准确的获取交易hash ?

nohara: 你这里除了Address其他的调用的都是本地的代码，没有其他的代码没人知道是什么问题 (reply to 59050)

c: 大佬麻烦在问个问题 就是 v2 只有这种查询不像v3一样  不能满足我的需求 我是想查询开始时间 到结束时间这一段时间的 交易记录 (reply to 59065)

nohara: 这个可以看看 tonkeeper 的代码 (reply to 59071)

c: 好的 感谢 (reply to 59078)

nohara: 我目前的做法是先判断 seqno，seqno 增加后再去拿最新的 txid，然后再去查 tx 的状态

allen: 大佬们，这个tonlib每次执行都要很久，有没有快速执行的方法？

gavin: 这个是jni调用？ (reply to 59082)

gavin: 看着像是有锁导的啊

Champer Wu: v3 是 indexer, 他是中心化處理的，所以他parse的時間本來就會有誤差。 (reply to 59058)

c: 懂了 看到介绍了

c: 但是v2 实在是没有v3方便

c: 单独处理 我也得拉数据 v3都处理了

Champer Wu: 他有付費方案

Champer Wu: 可能會好一點

c: 值得是 那个 apikey是吧

c: 我看看

harlan: 哪位知道在小程序里面分享出去的链接点开怎么拿到链接中的邀请码

c: 链接加startapp 就好了 直接能获取到 (reply to 59095)

harlan: 进入在程序里面怎么拿到

Coder: initData

c: https://www.jackygu.me/posts/a-telegram-mini-app/

harlan: 多谢，去瞧瞧

allen: 有什么办法可以解决吗？ (reply to 59085)

c: 是这个嘛 (reply to 59091)

Champer Wu: 對得

我要飞: /**  * Copyright (c) Whales Corp.   * All Rights Reserved.  *  * This source code is licensed under the MIT license found in the  * LICENSE file in the root directory of this source tree.  */  import { Address } from "@ton/core"; import { createTestClient } from "../utils/createTestClient"; import { JettonMaster } from "./JettonMaster"; import { JettonWallet } from "./JettonWallet";  describe('JettonMaster', () => {     it('should resolve jetton wallet address', async () => {         let client = createTestClient('mainnet');         let master = client.open(JettonMaster.create(Address.parse('EQDQoc5M3Bh8eWFephi9bClhevelbZZvWhkqdo80XuY_0qXv')));         let walletAddress = await master.getWalletAddress(Address.parse('EQCo6VT63H1vKJTiUo6W4M8RrTURCyk5MdbosuL5auEqpz-C'));         let jettonData = await master.getJettonData();         expect(walletAddress.equals(Address.parse('EQDslTlGmbLTFi0j4MPT7UVggWR7XRDI2bW6vmNG6Tc_FBDE'))).toBe(true);         expect(jettonData.mintable).toBe(true);         expect(jettonData.adminAddress.equals(Address.parse('EQCppzUtmGSMg3FIRlFLzhToqbaC0xjmjzOn0o7H4M8Aua1t'))).toBe(true);                  let wallet = client.open(JettonWallet.create(walletAddress));         let balance = await wallet.getBalance();         expect(balance).toBe(0n);     }); });   问下大佬们， 我用这个代码查jatton 钱包里面代币的数量，  只有原代码里面的这个地址能查到，换别的地址都报错

Crypto 🔑🐦‍⬛️: ton上交易确认和解析，目前有好的方案吗

wikig: tonapi toncenter dton tonxapi (reply to 59106)

Champer Wu: 你要用jetton address 才會查到 (reply to 59105)

Champer Wu: https://tonxapi.com/ 現在使用 free plan就可以用了 (reply to 59106)

jay: const client = new TonClient({   endpoint: 'https://toncenter.com/api/v2/jsonRPC',   apiKey: '请填写 api key', });  async function getJettonBalance(jettonMaster: string, owner: string) {   const jettonMasterContract = client.open(     JettonMaster.create(Address.parse(jettonMaster))   );   const jettonWalletAddress = await jettonMasterContract.getWalletAddress(     Address.parse(owner)   );    const jettonWalletContract = client.open(     JettonWallet.create(jettonWalletAddress)   );    const balance = await jettonWalletContract.getBalance();    return fromNano(balance); }

Champer Wu: 或者你可以使用tonx api，這邊有教學 https://docs.tonxapi.com/reference/build-a-defi (reply to 59105)

Champer Wu: https://docs.tonxapi.com/reference/build-a-defi tonx api也有提供資料，你可以試試看這個 (reply to 59090)

c: 1

c: 我看看 付费的好不好

Crypto 🔑🐦‍⬛️: 实时监听交易是否成功，并解析交易，tonx 能做吗

我要飞: 嗯，我代码和这个一样，能查到余额了，我知道问题在哪里了，有的代币，getdata那个不行报错的是获得代币数据的 (reply to 59112)

Crypto 🔑🐦‍⬛️: 目前 ton 上想要知道实时知道一笔转账是否成功，是不是只有监听交易这一个方法

Champer Wu: 只要ton 沒壞掉，基本上很快的 (reply to 59119)

Champer Wu: 是的，基本上所有區塊鏈都是這樣。 他不會與外部網路主動溝通。 只能自己搞個long polling 一直問 (reply to 59122)

Champer Wu: 這也是有說法 (reply to 59125)

我要飞: 我用lite节点创建的rpc 怎么感觉读取数据好慢呀

我要飞: 应该像在本地调用数据很快才是呀

Champer Wu: 一定是慢的，自己跟節點互動的成本太高了，那需要確保整個網路狀態是好的之外，還要在意共識層的工作情況。 (reply to 59128)

Champer Wu: 成本好高的呀😭 (reply to 59131)

我要飞: 我就自建的呀，就简单查数据就要几秒

Champer Wu: https://docs.ton.org/participate/run-nodes/full-node 你是建這個嗎？ (reply to 59134)

Champer Wu: 我以為你是網路上隨便找個節點問的。 (reply to 59134)

我要飞: 对的

我要飞: 开的lite模式‘

Crypto 🔑🐦‍⬛️: 没有好的 rpc可用吗，都开始自建啦？

我要飞: 自建本地用不是方便吗？结果好慢，以为会快

Champer Wu: 也許搞一搞自己也變rpc廠商 (reply to 59143)

HelloDex-lronMan: 大佬们 求教个问题 小程序 使用startapp=xxx win 可以拿到xxx参数，并且可以直接打开小程序  问题是 1：mac os 无法使用startapp=xxx 直接打开小程序，会跳转到机器人 2：ios 无法获取start=xxx携带的参数 但是可以直接打开小程序  以上两个问题哪位大佬知道 万分感谢

Champer Wu: 有很多要搞的，確保連線狀態，共識狀態。有的沒的，不然rpc廠商都收一收了 (reply to 59144)

Crypto 🔑🐦‍⬛️: 现在 ton 上头部的 rpc 服务商是哪些 (reply to 59145)

Champer Wu: tonapi toncenter dton tonxapi (reply to 59148)

Champer Wu: 就這些了

wikig: 我记得有个issues专门关于这个问题的，是不同OS的大小写问题  https://github.com/TelegramMessenger/Telegram-iOS/issues/1091 (reply to 59146)

Champer Wu: vendor lockin是指什麼？

Champer Wu: 我看他們的API跟toncenter 一個樣，差別在誰維護節點維護得更好的感覺

Champer Wu: 我之前有嘗試使用toncenter與tonx api比較過

Champer Wu: toncenter給我的資料是在sharding合併前的東西

Champer Wu: 反而是tonx api 跟 tonviewer的資料一致

Champer Wu: 畢竟開源(X (reply to 59163)

我要飞: 所以自建的不行吗？我感觉还没有普通节点快

Champer Wu: 那這幾家沒有vendor lockin的問題嗎？ (reply to 59152)

Champer Wu: 可以的吧～infra搞得好，錢夠多，沒什麼不可以😂 (reply to 59167)

我要飞: 我自建的liteserver

我要飞: 当在完整节点中激活端点时，该节点将充当精简服务器的角色。此节点类型可以处理并响应来自精简客户端的请求，从而实现与 TON 区块链的无缝交互。  就是这个

我要飞: 16核2t 存储，1g网应该够了呀

我要飞: 不知道为什么满

我要飞: 慢

Crypto 🔑🐦‍⬛️: 2T 存储太小了吧

我要飞: 16核CPU 128 GB 内存 1TB NVME SSD或预配置的 64+k IOPS 存储 1 Gbit/s 网络连接  这是全节点要求的配置

我要飞: 读取个资产竟然能4秒

Crypto 🔑🐦‍⬛️: 之前搞 bnb 和 eth 全节点，都是 4T SSD 起步

我要飞: w哦看公共节点都是秒回

Champer Wu: db index調整一下？ (reply to 59183)

我要飞: 啥意思？ (reply to 59186)

Champer Wu: 他搞節點底層有個db

Champer Wu: 應該是rock db

Champer Wu: 那邊可能要調教一下

我要飞: 节点配置文件调整下吗？

我要飞: 没懂，我按照官方安装的全节点，然后启用的Liteserver  ，又用toncenter/ton-http-api   转成http 的，然后代码走本地的  http://127.0.0.1 来使用的

Champer Wu: https://github.com/xssnick/tonutils-go 自架節點的話直接用adnl溝通吧

我要飞: 原生ADNL  这个不会用，我想用ton、tonweb  sdk

Champer Wu: 那才是最接近底層的protocol

我要飞: JavaScript

Yoyyo: 自己封一个啊  我用golang自己封的

我要飞: 好的，谢谢，我看官方文档 读取价格和钱包交互 等功能示范都用ton 写的，我图省事就用ton sdk 的包，我看看ton-lite 这个有没有我需要的功能 (reply to 59209)

Yoyyo: 其实不复杂  。建议自己尝试 弄一个。 这样更好理解  原理。

我要飞: 嗯，我我先研究下，我代码能力太弱了，js 的  ton 的sdk 我还算能看懂些，  有直接封装的方法的我还能用下，底层的我一点不会·····好磨

我要飞: 代码我一点没学过，就看看视频自学了点

我要飞: 哈哈，看不懂

我要飞: 几个功能函数我搞了几天才写出来，我先再研究下我这自建转的http  节点为啥这么慢·····

erick: 是这样的，如果实在不行，只能直接对接某个支持这个功能的钱包看看，不使用tonconnect了 (reply to 59011)

wikig: 提问，真的有人跑通过TON PROXY吗

wikig: 我JP的server似乎

wikig: 似乎并不太行，当我尝试访问 127.0.0.1:9999/just-for-test.ton  的时候，看起来是暴毙的

wikig: 然后当我尝试，访问自己建的tonsite的时候，似乎是暴毙的 (reply to 59227)

jay: api主要是协议标准和额外扩展的。协议标准的哪家都是一样的。主要是jsonrpc这套。然后额外扩展的每家都是独有的，需要分别对接。

我要飞: toncenter  节点限速是多少

我要飞: 公共的够用吗？

Y: toncenter 太蛋疼了,, 又出问题了,

Skyler: 大佬，有谁知道 这个报错有什么比较好的解决方案吗 code 651: too big masterchain block seqno

User<7211476611>: 有接开发bot的吗？

Ginta 🦴: 什么bot (reply to 59245)

Jason-Bitslab: 有人组队参加Ton CTF的比赛吗

Jason-Bitslab: 用FunC和 Tact写的

gavin: 求组队 (reply to 59248)

Jason-Bitslab: 可以，最多两个人

Jason-Bitslab: https://x.com/tonbit_/status/1837041796137836939?s=46&t=79iXDueU7WiLCgl96KpP-A

Jason-Bitslab: 求队友

11: 大佬求带 (reply to 59250)

11: https://ctf.tonbit.xyz/teams/invite?code=eyJpZCI6NDcwLCJ2IjoiNDY2ZWUwMDMyZjZjNTkzMzQyMGVlZjdhNjViMDIwNmI2YTM3YzE4ZSJ9.ZvF3gQ.Rg-qLPo7cN6sd6QRenwxR_mlT8M

我要飞: 这是我用自己节点读资产的时间戳，波动这么大呢，并且还很慢，有自建节点的吗？咱们探讨下，谢谢

User<1317452579>: 1️⃣2️⃣3️⃣4️⃣5️⃣⭐️⭐️⭐️⭐️  ❤️1.000.000 $TON AirDrop❤️  🚀Don't miss your chance🚀 🙏 Available to everyone🙏  ⚡️Take your reward⚡️  ⤵️🔤🔤🔤🔤🔤 🔗🔡🔡🔡 @tonsfi_bot➡️ 🌐 (forwarded from Notifications)

User<5518865890>: ❗️❗️❗️❗️❗️❗️  🟠❗️❗️❗️❗️❗️❗️❗️❗️❗️☠️💀👻☠️ ❗️❗️❗️❗️ 💵❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ ❗️❗️❗️❗️💵 🎁❗️❗️❗️❗️❗️❗️❗️❗️❗️ ➖❗️❗️❗️❗️❗️❗️❗️ ➖❗️❗️❗️❗️❗️❗️ ➖❗️❗️❗️❗️ . ❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ 👈❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ 👈@DOGSxSPIN_zbot

— 2024-09-24 —

Crypto 🔑🐦‍⬛️: 请教各位大佬一个问题，我需要后端验证交易，怎么才能保证这个交易就是我在前端发起的交易呢。

Mana: 可有人知道推特转发怎么搞，什么个流程

Champer Wu: 你呼叫哪個API ? (reply to 59240)

Skyler: 用的tonutils， 使用 global config。然后在获取 jettonWallet的时候就会大概率报错 client.AddConnectionsFromConfigUrl(context.Background(), "https://ton.org/global.config.json") (reply to 59353)

Skyler: 就是一直 code 651: too big masterchain block seqno，偶尔会timeout，偶尔能正常跑

Skyler: 这个怎么用呢？我刚接触到tonutils，然后基本是按照他们的 examples 来写的

Skyler: `ctx := client.StickyContext(context.Background()) usdtJettonMaster := jetton.NewJettonMasterClient(api, address.MustParseAddr(usdtMaster)) // find our jetton wallet shiokUsdtWallet, err := usdtJettonMaster.GetJettonWallet(ctx, myWallet.WalletAddress())`  应该是用了ctx，那个waitblock的用法是什么呢

Champer Wu: 參數來一下吧 (reply to 59354)

Skyler: 没有什么特别的参数吧，就是按照他们的examples 来的，在下午和晚上的时候经常出现报错。 https://github.com/xssnick/tonutils-go/blob/master/example/jettons/main.go (reply to 59364)

Skyler: 好的～thx

🦄: TON普通转账什么情况下会失败呢

Champer Wu: 很多情況，看你說得是鏈上還是鏈下 (reply to 59376)

Aaron: 请教一下，收到加密的comment后，解密时需要对方的公钥，如何才能拿到呢？

Champer Wu: runGetMethod -> get_public_key (reply to 59387)

wikig: 提问again，有没有，大佬写过tonsite的。为啥我的部署似乎还是暴毙 (reply to 59230)

User<6218334417>: 请教大佬 网页版（web a)mini app可以设置启动的窗口大小吗？现在我打开mini app很扁

Jackie: 啥是tonsite? (reply to 59230)

wikig: 就是TON proxy那块配套的 TON site (类似于TOR站点 (reply to 59392)

Jackie: 站点跑在TON链上？还是TON的中心化服务器上

wikig: https://docs.ton.org/participate/web3/sites-and-proxy (reply to 59394)

Jackie: 这个技术的使用场景是什么呀？ (reply to 59395)

Jackie: 正在阅读中。。。。 (reply to 59395)

wikig: 类TOR，做抗审查、抗监管站点的二级网络 (reply to 59396)

wikig: 当然了。原则上还能做访问设备（子机）的IP混淆哈哈哈哈

Jackie: 其实也也就是把自己的SITE隐藏在TON网络后

Jackie: 大概是这么个做法

Jackie: 看起来

wikig: 是的，SITE隐藏在TON后面  然后前台访问者的IP也混淆掉。  就是纯粹的TOR的那一套二级网络系统

Jackie: 能2级WEBSOKET吗？ (reply to 59403)

Jackie: 比如我的SITE是提供WEBSOCKET服务的，这个时候也能骑过 这东西来隐藏一下真实IP吗？

wikig: 逻辑上也行 (reply to 59404)

wikig: https://www.torproject.org/  逻辑上跟这套的原理一致 (reply to 59405)

Jackie: 我看他的文档里只有HTTP-PROXY (reply to 59407)

Jackie: 貌似是没办法WEBSOCKET的

wikig: 走的是http-proxy跟websocket没有影响啊 (reply to 59411)

wikig: 只是proxy类型是http-proxy， 理论上（我猜测），是可以相当于把websocket反代到对应的proxy端口传输的内容的吧

wikig: 至少握手应该是能握的，至于实际能不能传......嗯.....这个得看过实际的proxy写法

Jackie: HTTP协议有固定结束符的，就怕这玩意儿识别这个，并不是真正的做为2进制流来传输 (reply to 59416)

Jackie: 不然的话，HTTP也好，WEBSOCKET也好，实质上还是TCP协议

wikig: https://github.com/SlowsieNT/nodejs-tor-websocket-client-server  看起来TOR是有的  如果TON proxy遵循类似的规则或者proxy构建规则话，应该也是支持的。 (reply to 59419)

Jackie: 貌似要做专门改造 (reply to 59421)

Jackie: 不过应该不会太麻烦

wikig: 我看他就是个标准ws库+TOR proxy

wikig: readme写的很好玩，说不过是几行的事情，但是没人写，遂开源

wikig: 笑死

Jackie: 貌似这段代码就是解析了下HOST。。。

Jackie: 本来PROXY也不能太复杂

Jackie: 不然用不起来

Jackie: 那这么看，SERVER端大概也不用改啥，映射一下就好了 (reply to 59429)

wikig: 我估计是的。 (reply to 59433)

wikig: 只是现在我根据TON proxy的官方文档跑

wikig: 似乎TON site 跑不起来

wikig: 我能跑起来TON proxy，能访问到 http://fundation.ton

wikig: https://github.com/xssnick/Tonutils-Proxy  我用的是这个proxy的clinet

wikig: 得先开proxy

Jackie: 在TG里直接访问也的开代理？ (reply to 59441)

wikig: 应该是要的，两者独立应该 (reply to 59442)

Jackie: 😂。。

wikig: 毕竟这个是网络层的

wikig: 期待TG开发者像对待端对端加密一样  什么时候出一个 里模式   直接在mobile client 默认自动启动TON proxy (reply to 59442)

Jackie: 是呀，BUILDIN才是王道 (reply to 59449)

Jackie: 不然门槛太高了，太复杂了

Jackie: 要做到一端在手，天下我有才行

wikig: 我记得之前有个专门把TON site proxy到公域网络的站点，但是好像挂了 (reply to 59452)

wikig: 不然没准确实能做

wikig: 相当于所有TON proxy的site都被这个gateway混淆了一遍请求流量

区块链解决方案: jetton-minter合约部署后，怎样向合约发送消息，mint代币，小白刚入门，求大伙赐教

Bruce Lee: 构造wrapper

Bruce Lee: 写script

区块链解决方案: 有参考案例吗，谢谢大神👍

古风背景书: 刚入们就跑去做合约叫学费吗 (reply to 59459)

Champer Wu: https://github.com/ton-blockchain/minter-contract/blob/074b7d5f45f43552146fdf54f972020b2757bc18/test/lib/jetton-minter.ts#L25 傳一個internal message給合約 (reply to 59462)

区块链解决方案: 谢谢👍👍👍

wikig: 合约开发怎么交学费啊😶‍🌫️ 真的不是把smart contract 和 future trading 搞混了吗？ (reply to 59464)

aier: 😂估计是门外汉看门内汉，他给整混了

kevin: 这个可以放在本地文件直接 度 (reply to 59354)

kevin: 可以设置 retry (reply to 59363)

我要飞: 大佬们，问一下，ton  每一笔交易都这么慢吗？感觉要好几分钟，靠读取sequo  能判断交易是否成功吗？

Bruce Lee: 能判断交易是否发出去

Bruce Lee: 但不能ensure success

User<6642254425>: TON本来就会卡链，交易本就会慢 (reply to 59471)

我要飞: 正常一个区块不是6秒左右吗？一笔交易不是一个区块确定的吗？要分好几个区块逐步确认吗？

Bruce Lee: 这就是workchain 的定义

Bruce Lee: 异步执行

Bruce Lee: 一点点 往下执行的， 不是一步到位的

我要飞: ···不是很清楚，那是我转账到合约，一个区块确认了，然后合约内部传那些消息有逐步分几个区块确认然后整体要几分钟才能确认一笔交易是吗？那交易顺序是怎么排的，按照提交顺序吗？我看也没有gas选项

我要飞: 我在stonfi  交易，我看当我收到第一笔返回的ton 的费用，dex 就认为我交易成功了，是这样吗？

TON: wallet钱包里资产看不到是怎么回事啊？有知道的嘛？

Jason-Bitslab: 🚀 TON开发者们，TON CTF 倒计时4天开始！🚀  首次在#TON上举办的夺旗大赛（CTF）报名已正式启动🎉 该比赛由TON赞助，Tonbit和TONX Studio组织。 我们诚邀所有#FunC 和 #Tact 开发者加入这场挑战！ 比赛详情： 🔗 了解更多并注册: https://ctf.tonbit.xyz  🗓 比赛时间: 开始: 2024年9月28日 01:00 UTC – 结束: 2024年9月29日 01:00 UTC 📝 注册截止: 2024年9月28日 01:00 UTC 🎮 比赛示例问题: https://ctf.tonbit.xyz/challenges 💰 奖池: $10,000 立即加入，展示你的实力吧！让我们看看谁能捕获最多的旗帜并带回大奖！🚩💪

wikig: 但是话又说回来，现在做CTF会不会有点为时尚早（毕竟好像实际FUNC开发者....不是很多的样子） (reply to 59486)

wikig: 哦TONBIT做的CTF，没事了，之前在abs听了他们人在TON展台讲

我要飞: 我要飞 飞起来, [2024/9/24 16:41] ···不是很清楚，那是我转账到合约，一个区块确认了，然后合约内部传那些消息有逐步分几个区块确认然后整体要几分钟才能确认一笔交易是吗？那交易顺序是怎么排的，按照提交顺序吗？我看也没有gas选项  我要飞 飞起来, [2024/9/24 16:47] 我在stonfi  交易，我看当我收到第一笔返回的ton 的费用，dex 就认为我交易成功了，是这样吗？  大佬这个你清楚，确认交易的过程吗？ (reply to 59490)

Giessen: 有人知道如何用tonweb 从cell里拿到地址出来吗

Aaron: 请教一下，有没有TON的块形成机制的文档，一直没有太弄明白在TON中，master chanin中的块和base chain中的块有什么关系 每个分片的块如何产生，包含了什么，和master chain的块如何关联起来？  一个Jetton转账，如果来源账号和目的账号在不同的分片中，那这个转账就会被分别包含在不同分片的不同块中吗？ 这时候master chain是否也产生了块和这些分片的块是如何建立关联关系的？

shi: ton测试币哪里领？

Evan: ton 生态里面，求推荐比较好的nft 拍卖平台了

Giessen: 没有找到这个方法 (reply to 59494)

Giessen: 就是从getmethod里面返回了个cell 然后cell里面有地址

Jason-Bitslab: 🚀 TON CTF 倒計時4天開始！  首次在#TON上舉辦的奪旗大賽（CTF）報名已正式啓動🎉 該比賽由TON贊助，Tonbit和TONX Studio組織。  我們誠邀所有#FunC 和 #Tact 開發者加入這場挑戰！ 比賽詳情： 🔗 瞭解更多並註冊: https://ctf.tonbit.xyz  🗓 比賽時間 開始: 2024年9月28日 01:00 UTC – 結束: 2024年9月29日 01:00 UTC 📝 註冊截止: 2024年9月28日 01:00 UTC 🎮 比賽示例問題: https://ctf.tonbit.xyz/challenges 💰 獎池: $10,000  立即加入，展示你的實力吧！讓我們看看誰能捕獲最多的旗幟並帶回大獎！🚩💪

User<6898193927>: ton 库怎么调用合约

User<6898193927>: 感觉官方文档比微信开发文档还要low

wadaxiwa: 大佬们，用小程序下载过图片嘛！没有找到API呢

wikig: 直接window.open到外部下载 (reply to 59507)

wadaxiwa: 明白了，谢谢

M: 确实low，而且，这个什么官方群都不鸟说英语的，都是russian (reply to 59506)

User<1496299585>: 谁能教我一下啊， 电报机器人怎么设置点击复制功能。

User<1496299585>: 比如玩家获取到邀请链接后，  希望玩家点击链接仅仅是复制， 而不是跳转

User<6898193927>: 文档里面的好多库好久没有更新了

wiwi: 目前我送出 transaction 的當下只有 cell 跟 seqno ，這樣要去查 transaction 是否完成變成會需要把 getAccountTransactions 一直去打好幾次，如果很久之前的就要查好幾次  有沒有方式是可以一次就查到的? 我看 getAccountTransactions 有 hash 欄位但是送出交易時並不會知道 hash

Eliot🦴: 本来TG创始人就是俄罗斯人啊，那官方群肯定是说俄语，不说英语的 (reply to 59511)

wikig: markdown格式里面的  code block 可以试试 (reply to 59512)

wikig: 你看你点这句话时候是不是就是复制 (reply to 59526)

wikig: 但是如果你说的是 [link](https://google.com/) 这种的话，那确实做不到点击复制

Eliot🦴: https://blog.ton.org/how-to-shard-your-ton-smart-contract-and-why-studying-the-anatomy-of-tons-jettons (reply to 59495)

User<6898193927>: ton 合约交互库有什么推荐

User<6898193927>: ton 合约交互例子有吗

M: ton合约交互还挺简单的，直接把操作码和参数构建成cell对着地址发就完事了 (reply to 59531)

Eliot🦴: ton-client-js, TON SDK, grammy (reply to 59530)

M: python的话用tonutils官方也有文档，调合约就类似这样，都一个原理

User<6898193927>: 可以 这些比官方库好用多了

User<6898193927>: 文档那些库好🌶︎🐔

User<6898193927>: 几年没有更新了 库文档也乱七八槽

User<6898193927>: 谢谢 大哥们

User<1496299585>: 但是我看有一个游戏就做到了，旅行青蛙的 (reply to 59528)

User<1496299585>: https://t.me/travel_frog_bot?start=sl_1496299585

wikig: 你是说bot吗 (reply to 59544)

User<1496299585>: 是的

User<1496299585>: 你一点链接就复制了

wikig: 这个不就是我说的  用code block 来实现复制 嘛

wikig: 这里呀 (reply to 59526)

wikig: 你来点下呗 https://google.com/

User<1496299585>: 好的，我去找下相关文档

User<1496299585>: 谢谢大佬

wikig: 不用找文档啊.......  你输入的时候 输入 \ \ (reply to 59554)

User<1496299585>: 哦，确实实现了。

wikig: ` 这个字符 ·

User<1496299585>: 这下知道了，帮了大忙。

Coder: 请问有开源的 bot 消息后台编辑器吗

我要飞: 怎么看 ston fi 交易失败的原因，合约会给反馈吗？

Kim: 各位，求帮助，我使用TONWEB发送了一笔JETTON交易，我如何知道这笔交易是否执行成功呢？

🦄: 浏览器查看😹

Kim: 😂，我想在交易的评论里面放一下系统的单号，后面拿到交易记录时，如果成功就根据这个单号更新自己系统的数据状态，这个要怎么搞呀，看了一晚上，实在不知道怎么在交易记录里面实现这个功能。。。

🐤 wahaha qubic: 老铁们 这个地址 的算法 有吗？

— 2024-09-25 —

Spark: 大家好！这里有开发者愿意加入我的团队吗？我是一名全栈开发人员和项目经理，我已经有一个好点子了。

Spark: 最大的 TON 黑客马拉松 Hackers League 2024：做好准备！  仅两周后，在线 TON 黑客马拉松 Hackers League 2024 就将拉开帷幕，为准备在 TON 生态系统中打造下一个大事件的创始人和开发者带来 200 万美元的奖金池。这项全球竞赛涵盖 DeFi、GameFi、SocialFi 等赛道，是您展示技能和创造力的机会。  内容：  ▪️ 参加五项赛道并赢得大奖 ▪️ 全球 19 个线下训练营 ▪️ 获得 TON Ventures 的投资  Hackers League 将于 2024 年 10 月 5 日至 12 月 20 日举行。  不要错过这个创新机会！ (forwarded from Ton中文频道)

Spark: 来一起打黑客松咯

Chaincode: 参与黑客松？ (reply to 59618)

Spark: 是啊

Chaincode: 缺什么开发人员

Spark: 前端开发和ton开发

maiya: 🥹

User<6898193927>: 开发小游戏吗 (reply to 59622)

Ton: Ton我还行 (reply to 59622)

Ton: Func

Spark: 是的 (reply to 59627)

Chi: 各位求问一下TON上有没有像Solidity那样的MultiSwap套利代码？ 我Google了一下好像没看到有相关的信息

User<6898193927>: 和约有 get value 方法 和 increment 方法 increment 方法 是val+1   get value 是获取当前的value 怎么调用这两个方法

User<6898193927>: 加你了 (reply to 59625)

Aaron: 请教一下，两笔提币，先后提交，前一笔没返回错误，但是没有上链，第二笔上链成功了。 这种可能会是什么原因？节点日志能看到ls请求信息吗？

wikig: 大概是因为不能保障原子性把。套利不保障原子性就是包亏钱的 (reply to 59634)

Chi: 嗯理解，确实TVM的设计感觉让套利很难，但是如果比如币安的价格和Ston.fi或者DeDust出现价差，套利的机会还是存在的，否则dex的价格就无法跟上cex，就是好奇现在这些价差是谁在套 (reply to 59641)

Howard: 我記得我記得答案，但我現在想不起來..... 22788 這串好像是跟某個值有關 (reply to 58812)

wikig: 如果是CEX和DEX的套利的话，那潜在因素就多了  从充币时效到最终交易完成，走完整个三角流程。是有时间差的 (reply to 59644)

wikig: 当然，小金额，半自动，应该是没啥问题。  金额大了，一是滑点，二是充币确认、提币磨损。三是循环亏损。可能会出问题 (reply to 59650)

Howard: 是的 (reply to 59650)

Howard: 再度推廣一下, 關於 Telegram Mini-app (@Tapps) 討論可以到: @devs_zh ✅✉️💰

Jason-Bitslab: https://x.com/ton_blockchain/status/1838555263227642203  💎TON Developers, this is your moment!  Just announced: the Capture The Flag competition on #TON – TON CTF! 🎉 Granted by TON Foundation and organized by Tonbit & TONX Studio.  Calling all #FunC and #Tact developers to join the challenge! Each solved challenge earns you a "flag," which can be exchanged for points. The more points, the higher you climb the leaderboard – and the closer you get to winning your share of the $10,000 prize pool! 💸🏆  🔗 Learn More & Register: https://ctf.tonbit.xyz 🗓 Competition: Sept 28, 2024, 1:00 am UTC – Sept 29, 2024, 1:00 am UTC 📝 Registration Closes: Sept 28, 2024, 1:00 am UTC 🎮 Try a Sample Question: https://ctf.tonbit.xyz/challenges  Don’t miss out – join now and show your skills! 🚀

Jason-Bitslab: 开发者们可以再冲一波TON CTF！

​Spitzenpilot: 今天有sbt吗

live: 各位大佬，请问Int类型的参数要怎么填入啊？

Champer Wu: [“num”, 123] 可以參考一下 toncenter/ton-http-api https://github.com/toncenter/ton-http-api/blob/111dff3149ba314ac91e372d7a94a9c715e59087/ton-http-api/pyTON/main.py#L717 (reply to 59666)

User<6898193927>: 怎么调用合约中的某个函数

User<6898193927>: 怎么才知道 函数的操作码

Champer Wu: 直接去讀合約的opcode (reply to 59676)

User<6898193927>: 是这个吗

备用: 合约源码里有个op.fc或者op-code.fc

Champer Wu: 這已經是bytecode了，你要看編譯前的Func或者tact 除非你可以人腦編譯bytecode (X (reply to 59679)

Champer Wu: usdt 的參考下 https://tonviewer.com/EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs?section=code (reply to 59678)

User<6898193927>: ton 合约现在可以使用abi 吗

User<6898193927>: 我看到build 有生成

Champer Wu: 你用什麼工具build的呢？ 我用blueprint沒看過這個 (reply to 59688)

User<6898193927>: 这个是opcode 吗

User<6898193927>: 这样调用吗

Champer Wu: in_msg應該是一個boc，你要看他儲存的順序來parse. 通常是`.loadUint(32)`前面如果有東西要先skip掉 (reply to 59696)

Champer Wu: 562看起來就不對... (reply to 59699)

Champer Wu: 不知道你這段是要處理什麼來使用的 (reply to 59698)

User<6898193927>: 想要调用这个 (reply to 59700)

User<6898193927>: +1

User<6898193927>: 1

User<6898193927>: 有这方面的教程吗

Aaron: 请教一下，今天我门提交交易，有一段时间，没有报错，但是也没上链成功，然后下午晚点什么都没做，又好了。 这种情况有什么dashboard能监控或者获知一些信息吗？

M: 你tact编译出来build文件夹有一个***.code.fc的文件 (reply to 59710)

M: 你直接全局搜一下你那个字段，应该能找到

Evan: 基于nf质押的矿池，在ton里面， 如果查询个人质押哪些nft， 大家使用API查询接口， 还是存在链上，调链上接口来查询了？ 大家谁做过类似，给建议，我少走一些弯路

Evan: 如果 API 接口，个人要检索数据，自己维护记录；

Logan 🐯: 这个表情一般怎么处理

User<6898193927>: body = begin_cell().store_uint(0,32).store_slice("增量").end_cell()  cell 这种 入栈 的语法 在哪里可以学习

User<6898193927>: ta 合约 有没有更方便的调用方法

User<6898193927>: 除了 call

🦄: send_raw_message前后的合约余额有办法获取吗

jay: 你是干啥啦，被封了？ (reply to 59738)

L: 请问各位大牛，电报小程序发布，需要公司认证啥的吗

Alex: ？？？ (reply to 59755)

🦴 Brenda: ???

华纳娱乐开户: zh-ch

증식엄: 需要，在我这里交费300 TON提交资料认证，年审也是300 TON (reply to 59755)

증식엄: 看你也是说中文的，只收你200 TON就行

L: 提交到哪个平台呢

jay: 😂提交给我，只需要1个ton

🦴 Brenda: 这就开始卷了

Rashid: گی

L: 也就是说不需要，有个人电报账户就可以提交mini app?

Logan 🐯: Tg登陆的时候特殊字符怎么处理啊

Logan 🐯: 有表情的时候检验失败了

Logan 🐯: 😂

Alex: tg官方没人帮你审核东西 (reply to 59766)

jay: 不存在提交，创建就能用。 (reply to 59766)

jay: 被微信审核习惯了吧😂

FatAsianCrypto: 😂 抱歉刚才不小心按到 谢谢老板解封

FatAsianCrypto: 有人遇到过这个问题吗？  https://github.com/ton-connect/sdk/issues/203  我们一直被这个问题困扰，更新了我们的域名，结果又被屏蔽了，有人找到解决方法了吗？或者有办法找人帮忙解除屏蔽吗？  我的团队基本上测试很多方式，github里的人是建议找tonsupport的人因为是个bug

FatAsianCrypto: 这是一个bug，以在github有人问过 (reply to 59751)

jay: 找人吧。

wikig: miniapp的initdata有特殊字符是吧 我建议压缩成hex或base58 (reply to 59767)

考尔斯: 夜間掛單  ETH   多 進:   2600-2570 盈：2650-2700 損：2550 (forwarded from Asuka-幣圈交易軌跡)

沧浪之水: 请问下，执行这个函数之后，会实际扣除这些钱吗，还是说store

沧浪之水: 还是说storecoin只是一个set函数

华纳娱乐开户: 在吗多

Logan 🐯: 最后用node检验了，Java坑多 (reply to 59783)

Investor: 🥳BIGGEST 🦴🩸🩸🩸🩸 🔤🔤🔤🔤🔤🔤 🔤  🤑Gеt your  🩸🩸🩸🩸 tоkens NОW!  ⤵️🔤🔤🔤🔤🔤 ➡️ @thedogsesairdrop_bot👈 🛩 🔥 Get your 100,000 $DOGS tokens NOW! 😮 New refferal system: +20.000 $DOGS for per friend 🔝 Fast withdraw to any wallet

Андрей: ❗️❗️❗️❗️❗️❗️  🟠❗️❗️❗️❗️❗️❗️❗️❗️❗️☠️💀👻☠️ ❗️❗️❗️❗️ 💵❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ ❗️❗️❗️❗️💵 🎁❗️❗️❗️❗️❗️❗️❗️❗️❗️ ➖❗️❗️❗️❗️❗️❗️❗️ ➖❗️❗️❗️❗️❗️❗️ ➖❗️❗️❗️❗️ . ❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ 👈❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ 👈@DOGSxSPIN_zbot

User<7205700737>: 🕞🕟🕠🕡🕢🕣  📱TОN SPINS📱  - An easy way to win valuable prizes! 🚀 🚀   💎NOT SPINS🐶 - An easy way to win valuable prizes! 🚀 🚀   Just spin the reel and get your rewards! 🪙 🪙 🪙 Every spin is a chance for good luck!   Invitе уоur friеnds  👥  and get ехtrа triеs! 🧞‍♂️ ⤵️🔤🔤🔤🔤🔤  Don't miss your chance to win! 🔥 😁😁😁😁😁 🤑💱💱 🔗➡️ @TONxNOT_obot ✔️🌐 🔗➡️ @TONxNOT_obot ✔️🌐 🔗➡️ @TONxNOT_obot ✔️🌐

User<1632926552>: ❗️❗️❗️❗️❗️❗️  🟠❗️❗️❗️❗️❗️❗️❗️❗️❗️☠️💀👻☠️ ❗️❗️❗️❗️ 💵❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ ❗️❗️❗️❗️💵 🎁❗️❗️❗️❗️❗️❗️❗️❗️❗️ ➖❗️❗️❗️❗️❗️❗️❗️ ➖❗️❗️❗️❗️❗️❗️ ➖❗️❗️❗️❗️ . ❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ 👈❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ 👈@DOGSxSPIN_zbot

User<1632926552>: ❗️❗️❗️❗️❗️❗️  🟠❗️❗️❗️❗️❗️❗️❗️❗️❗️☠️💀👻☠️ ❗️❗️❗️❗️ 💵❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ ❗️❗️❗️❗️💵 🎁❗️❗️❗️❗️❗️❗️❗️❗️❗️ ➖❗️❗️❗️❗️❗️❗️❗️ ➖❗️❗️❗️❗️❗️❗️ ➖❗️❗️❗️❗️ . ❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ 👈❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ 👈@DOGSxSPIN_zbot

— 2024-09-26 —

User<7515690653>: 👆點擊「Super」加入福利報單群  #BTC/USDT    LONG Entry：63200-62800  Target 1：64300 Target 2：65000 Target 3：66000  Stop loss：62000 (forwarded from V神幣圈論)

User<1632926552>: ❗️❗️❗️❗️❗️❗️  🟠❗️❗️❗️❗️❗️❗️❗️❗️❗️☠️💀👻☠️ ❗️❗️❗️❗️ 💵❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ ❗️❗️❗️❗️💵 🎁❗️❗️❗️❗️❗️❗️❗️❗️❗️ ➖❗️❗️❗️❗️❗️❗️❗️ ➖❗️❗️❗️❗️❗️❗️ ➖❗️❗️❗️❗️ . ❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ 👈❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ 👈@DOGSxSPIN_zbot

SunG: 大佬们请教 我用Stonfi的SDK里的getSwapTonToJettonTxParams得到to、value、body，然后在合约上把body发送给to（Stonfi的pTon地址）。但没有进行交易，出错。怎么才能在合约上成功地向Stonfi发送Swap message？

凱: ETH  2575多  TP：2665  SL：2535 (forwarded from Yo！這裡是最後的幣風港)

User<1632926552>: ❗️❗️❗️❗️❗️❗️  🟠❗️❗️❗️❗️❗️❗️❗️❗️❗️☠️💀👻☠️ ❗️❗️❗️❗️ 💵❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ ❗️❗️❗️❗️💵 🎁❗️❗️❗️❗️❗️❗️❗️❗️❗️ ➖❗️❗️❗️❗️❗️❗️❗️ ➖❗️❗️❗️❗️❗️❗️ ➖❗️❗️❗️❗️ . ❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ 👈❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ 👈@DOGSxSPIN_zbot

David: Jetton wallet 里剩余的ton有办法全部提出来么？ 类似solanan 扫dust那样？

Aaron: 哪位兄弟有HMSTR，需要搞一点测试用，或者哪位告诉一下哪里能购买到。

Vicki: 问下 这三种 地址可以互转 么？

Vicki: golang 有没有现成代码？

🦴 Brenda: 可以互转

hk: 我看群里都讲jetton代币， ton币 跟 jetton 代币有什么关联性？

Vicki: 请问有现成代码不，golang 的 又不 (reply to 59870)

User<6898193927>: store_uint(0, 32) 和store_uint(0, 6) 有什么区别

DaDa: 随着 #BSC（BNB Smart Chain）通过 Telegram 上的钱包应用正式接入 #TG生态，Telegram 不再仅仅是 #TON链 的专属生态。这一变化标志着多个区块链项目正在进入 #TG生态，包括 EVM 系的各条公链，这为 #Telegram 用户带来了更多选择，同时也让 TG 生态更具多样性和包容性。 对于 #TON链 来说，这既是一个重要的挑战，也可能是一次巨大的机遇。多链的并存使得 TON 需要面对更多的竞争，但同时，这也为 TON 提供了与其他链互通合作的机会，扩大生态范围，吸引更多开发者和用户，推动创新发展。 在这次 #TON生态之夜 中，我们将重点讨论多链接入带来的影响，特别是 BSC 等公链的加入对 TON 生态的深远影响，以及 TON 如何在竞争中保持优势，抓住机遇实现生态的进一步拓展。欢迎项目方、开发者、投资人共同参与这场交流，一起探讨 TON 的未来发展策略！ (forwarded from DaDa)

华纳娱乐开户: 打白家乐吗哥们多

wikig: 所以我还是没看明白到底要在哪用BSC (reply to 59884)

증식엄: 就是第三方小程序生成自托管模式的BNB钱包（evm钱包）

증식엄: 任何公链都能这样来做产品，接入到TG生态

wikig: 有无文档或方案code？  原理上来讲，bnb发这条公告之前就可以这么干。我只是比较好奇bnb干了什么 (reply to 59893)

wikig: 像之前就有 UXUY wallet 和我折腾的Tonspack wallet 是做了多链MPC wallet的。以及数不胜数的中心化多链钱包。  所以BNB是提供了个官方方案还是怎么操作的？ (reply to 59895)

증식엄: BNB也没提供，也没啥文档，这个消息也没找到比较官方的来源

wikig: 好的吧，因为我比较好奇（因为刚好我们就是做telegram上多链兼容的） 之前刚做完solana adapter现在在折腾EVM配套的adapter sdk 集成这块。 (reply to 59898)

wikig: 最近看到铺天盖地的BNB入场telegram的消息。但是没看懂他们走什么接入的。 (reply to 59899)

증식엄: 可能是bnb那边的一些马拉松比赛有些项目接入了吧

wikig: BNB官方下场做了什么之类的

증식엄: 做了一个喇叭📢 (reply to 59904)

wikig: 那没事了闹麻了

wikig: 我还好奇他们做了什么新方案比原有MPC操作更便利啥的

wikig: 虽然我觉得这事儿OKX的web3 wallet下场做的概率更大就是了

증식엄: 还得把ton-connect-ui也改改，兼容一下多链才行，或者做一个新的支持多链的connect-u

증식엄: 现在大部分小程序都是用ton-connect-ui来连接钱包

증식엄: 你们这种多链是什么模式的 (reply to 59899)

wikig: ton-connect-ui改我估计是悬的，有那力气不如快点把sign message函数给加入到抽象接口去 (reply to 59909)

wikig: @tonspack_bot  其实跟ton-connect-ui差不多，telegram内部吊起。 (reply to 59911)

wikig: 钱包方案是老生常谈的web3auth基础的telegram webapp initData的auth方案  https://github.com/Tonspay/Tonspack-Web3auth-Telegram-Webapp-MPC-Middleware (reply to 59911)

증식엄: 你们这个看起来工作量挺大的 (reply to 59913)

wikig: 其实还好。主要是逻辑简单（实际开发量其实都在前端） (reply to 59916)

shengsheng: 请问下 我是通过 ton://transfer/拼接生成的字符串 转成二维码给到用户去支付的，设置了&callback_url，但支付的时候，没有收到回调请求

shengsheng: 请问需要怎么处理？

Champer Wu: sendTx本身就不會有callback，你要自己去getSeqno看它有沒有+1 有了才算成功上鏈 (reply to 59919)

hk: 请问一下， 在tonnet上 如何使用jetton？

hk: testnet 上

Champer Wu: 看不太懂你的問題欸 可以具體講一下是什麼樣的狀況嗎？ (reply to 59931)

hk: 在testnet 网络环境可以铸造 jetton 代币吗？

hk: 就是想在testnet中实现代币交易

Champer Wu: token transfer的話 (reply to 59938)

Vicki: 为什么总是显示这个 (reply to 59939)

Champer Wu: 你部署好合約，Mint完之後可以直接傳送沒問題

Champer Wu: 這是什麼畫面？ (reply to 59939)

Vicki: 调起钱包

Vicki: 转账

Vicki: 有时候可以，有时候不行

Champer Wu: 那是rpc的鍋

Champer Wu: 這是什麼錢包？

Vicki: 就 tg 的

hk: 你的意思是在testnet上部署jetton主合约和jetton 钱包合约，然后再mint Token，成功之后就可以 Token transfer 是吗？ (reply to 59942)

Champer Wu: Mint就會幫你部署錢包了，trnasfer也會幫你要轉帳的對象部署錢包 (reply to 59953)

Vicki: 在网上找的一段代码，想转USDT，但是执行还是转的TON，为啥？

备用: 大佬们,ton自定义合约也可以衍生出自己的jetton wallet吗?

Champer Wu: https://docs.ton.org/develop/dapps/asset-processing/jettons 參考這個 (reply to 59955)

Champer Wu: 只要send internal msg都是需要消化ton的 (reply to 59955)

备用: 那其实做一个兑换合约的话,这个合约本身其实只需要做一些记录,校验即可,实际的转账其实还是在jetton wallet之间进行的？ 是这样吗?

备用: 最简单的swap

hk: 我一直搞不明白，已经有ton了，为何还会有jetton 这种代币产物

hk: 直接用ton 交易不就行了

hk: 还是说jetton 更有优势，或者说更安全

Champer Wu: ton 是 native coin, jetton 你可以想像成自己開發的應用 (reply to 59965)

wikig: XD

Vicki: 哦哦，我是想直接调起USDT，比如转1个USDT，但是上面代码调起来还是转1TON (reply to 59959)

allen: 大佬们，基于ton4j开发，tonlib每次调用的方法的时候非常慢，有没有解决办法？

Champer Wu: 0.1TON(decimal 是 9)是手續費, code裡面naming挺清楚的 (reply to 59972)

Champer Wu: 而且應該是不用0.1這麼多

Vicki: 代码昨天还行，今儿硬是不行，不知道是不是网络问题

jay: 封装了一些 ton 的操作， 供参考: https://github.com/hstarorg/tonkit

Vicki: 哦 没问题，是看错了 (reply to 59975)

Vicki: 谢谢 (reply to 59980)

Giessen: ton 拿到nft系列的所以nft用什么api

hk: 谢谢 解惑 (reply to 59968)

备用: 没用过这两. 现在有个问题啊, 我向自己写的合约转jetton, 自定义合约上的jetton余额与合约对应的jetton wallet的余额不一致 (reply to 59964)

备用: 这是我的合约 kQC-u_wlcXK83ArxadSGz2MLIgnQvpqhstv2rnuoYG3mgpUN

备用: 这是合约对应jetton wallet的

备用: 很奇怪,是我哪里操作错了吗?

备用: 哦...应该是我代码的问题, 其实这是两个钱包了, 一个钱包是我合约的钱包, 另一个钱包是钱包的钱包😂

备用: 是的

有人: 这里的URL怎么填呀

enpitsulin: 今天晚上网络会不会又要崩

有人: 有知道的吗 (reply to 59994)

M: https://minter.ton.org/?testnet=true是说这个？ (reply to 59937)

🦄: jetton这个，它这里携带的ton数量是0，为啥最终还是会发送出去

Giessen: 为啥userfriendly地址都有两种类型啊

Giessen: 0QA5ZIUF5tSEDuLyzBdLXOq6UOZW5WYkOPBWU6e8YABXlOjJ

Giessen: UQA5ZIUF5tSEDuLyzBdLXOq6UOZW5WYkOPBWU6e8YABXlFND

Giessen: 这两个是同一个地址

증식엄: 最后校验码不一样

jay: 0Q是测试网，UQ是主网。 (reply to 60011)

jay: 地址一共有5种格式~

Ƥυrу: any script to send hamster using typescript or python ?

jay: 都是可以互转的。

jay: You can see this library. (reply to 59979)

jay: ^^ (reply to 60023)

Ƥυrу: you have ? (reply to 60026)

jay: Look at the library above.

Giessen: 关于这个的详细文档我在ton上好像没看到

Giessen: ton doc上

Aaron: 请教一下，大家是否碰到过，发送交易后，没有错误返回，返回的状态码和信息中的code都是无措状态，但是就是交易没有上链，浏览器中查不到。

Aaron: 什么情况会丢掉，重新再发一次就可以了。 (reply to 60035)

Aaron: 不返回错误，太隐蔽，都是事后才发现的，也不知道什么原因。 通过 sendRawMessage发送的。 (reply to 60036)

Aaron: Mode设置的是默认的3，过期时间是60秒。

Aaron: 那种情况会丢失呢？ (reply to 60037)

Aaron: 如何能发现呢，因为没返回错误，我门认为已经给用户发出了，很被动。 (reply to 60044)

jay: ton里面，必须有核对逻辑。

Aaron: 嗯，我门试试，其实异步的交易，为啥不能发送交易时给他传一个回调地址呢，等他成功的时候回调一下，返回txid多好。 (reply to 60047)

cj: https://tonviewer.com/transaction/93554f40a8096e6c6abc8d0d740bbeb28f09198923b0cc861fff57e47481b952  有老哥知道 okx钱包 卖cati ，交易失败了，币跑哪去了？

jay: 嘿，帮我把信送出去。问: 当他把信送出去之后，他还会回来告诉你么？ (reply to 60050)

jay: 大概就是这么个类比。

🅰🅻🅰🅽: 今天有幾個初學 ton 的夥伴想參加 CTF，但是前面創錢包就卡關，幫他們寫了這個 script 做了前置準備，也分享給大家：  https://github.com/alan890104/ton-script (reply to 59658)

Asahi: 刚做ton开发不久，想咨询个问题，就是比如我在bot里售卖一个商品，比如卖1TON，能否根据用户钱包里剩余什么币，就自动转化成别的去付费吗？比如用户有5U，就也可以用这5U付费  还一个问题是，目前如果用wallet付费，是不是必须用到的是用户链上钱包里的余额去支付  感谢

​Spitzenpilot: 这啥卡

— 2024-09-27 —

Degen: 大佬们 ton4j 怎么构造map

Degen: 为什么这样子报错啊

Degen: tact里 get不到

Xu: 遇到一个问题 "exit_code": 9,                     "vm_steps": 123，应该怎样去查找Vm_step执行了什么？

Leo: ton4j那个试试v-> 包一层ref？

Degen: v -> CellBuilder.beginCell().storeRef((Cell) v).endCell() (reply to 60127)

Degen: v -> CellBuilder.beginCell().storeCell((Cell) v).endCell()

Degen: 还是这样

Degen: 大佬

Leo: storeref (reply to 60130)

Degen: 卧槽

Degen: 为啥啊

Leo: 猜的，你没给报错信息，没法判断

Degen: 可以了

Degen: 大佬果然是大佬

Shiokut: ভাই কী ভাবে টাকা বের করবে

Degen: 调试消息的数据很麻烦啊 有没有号的办法 cell一层套一层 一个地方位置错了 就得一步步试 (reply to 60138)

Degen: 你们怎么调试的

gavin: 打log

Degen: 在合约里面打log？

gavin: 要么就脑内运行代码

Degen: 脑内运行代码？？

gavin: 肉眼debug 代码多看几遍就行了

Degen: 中心化的可以debug一步一步走 链上太麻烦了

Degen: 花钱又花时间

Degen: 报错的内容 也没有具体告诉 你哪一个地方报错了

Degen: 对 只有一个exitcode

Degen: 我现在是要定位到具体哪一行出错，就是在可能出错的地方 打require 然后看代码有没有走到这里。。

Degen: 感觉好麻烦

gavin: 结合合约代码 + exitcode 能大概猜到位置

Degen: 其他链也是这样的吗

Degen: 我web3萌新  不懂

gavin: evm会好很多 (reply to 60163)

gavin: 跑路了？

gavin: 等明天吧

Xu: 遇到奇怪问题：提交交易后 Wallet seqno 增加了费用也扣除了，但是没有找到执行的交易

Xu: 通过浏览器没找到交易，感觉像是交易丢失了

Xu: 什么原因会出现这种情况

Eliot🦴: 被打穿了

Xu: 被打穿了是什么意思？

Eliot🦴: 就是靶机系统被参赛选手打奔溃了

Eliot🦴: 应该是实施了拒绝服务攻击

Eliot🦴: 本身靶机系统的服务器就不会采用性能太好的服务器来部署

Eliot🦴: 毕竟不是真实的生产环境，只是一个模拟的测试环境

Xu: 今天测试网都是这样吗？

华纳娱乐开户: 🤕

华纳娱乐开户: 】

loser: 请教一下， 发放到钱包的sbt有链上记录么，我在浏览器里找不到发放的tx，只能看到有nft

Bliand: 什么大项目？直接说

Bliand: 这里又不是搞空投赚钱的，这里是开发者社区

Bliand: 书哦 (reply to 60230)

Bliand: 说

Champer Wu: 有的啊，你要到collection contract 看deploy (reply to 60219)

SunG: 大佬们请教 发送message出现 8 cell overflow error，怎么解决

Champer Wu: 應該是你組裝boc 沒有照著位置來，導致合約上面parse壞掉了 Underflow 跟 overflow 都可能這樣導致 (reply to 60243)

M: 也有可能string或者cell应该传成 ref的你直接传进去了

SunG: 上面的这个代码没有over flow error 但缺个response_destination。 下面添加了就出现这种现象。不知道该怎么办 (reply to 60245)

Champer Wu: ton_transfer為什麼包成這樣？ 不是dest跟amount就好了根本不用body? (reply to 60247)

Luis | BitsLab(MoveBit/TonBit): 样题开放结束了，明天是正式比赛 (reply to 60172)

Luis | BitsLab(MoveBit/TonBit): 是的 (reply to 60255)

Degen: 测试网如何创建w5版本的钱包？

Howard: https://youtu.be/MHmqTMAFDhU?si=IHUOIzJH3WcWAuM9  ❤️ (reply to 59685)

Howard: 应该是 rpc 厂商不给力吧。延迟了。 (reply to 59711)

Champer Wu: 先用 @ton/ton 算出v5的助記詞，然後打測試幣進去做init https://github.com/ton-org/ton/blob/master/src/wallets/v5r1/WalletContractV5R1.ts (reply to 60263)

Yoyyo: 嗯？合约 还是 啥

Yoyyo: FunC 的何宇么

Yoyyo: 合约

Degen: tonkeeper钱包不支持导入w5版本的钱包吗 (reply to 60274)

Degen: 为啥同样的助记词代码生成的地址 跟导入tp的地址不一样

Champer Wu: 錢包地址有不同的format https://ton.org/address/ 你可以玩看看這個 (reply to 60282)

Degen: 代码生成的助记词 导入tp 是完全另外一个钱包。。 (reply to 60283)

Degen: 这个是ton4j的测试用例拉过来改改生成的

Degen: 我擦 是不是walletid的问题

Degen: tonkeeper

Degen: 钱包

Degen: 请教一下 使用W5钱包批量发送消息进行mint的时候 其中部分失败了

Degen: 是合约的问题 还是链并发的问题呢

Degen: 😅

Degen: 他有个批量发消息的方法啊

Degen: 可以批量转账

Degen: 有米有合约高手

jay: 不保证全部成功。也有可能是你某些参数的问题。 (reply to 60298)

Degen: 参数都是一样 for循环里发送的

Degen: NFT 下标已经被使用了

Degen: 但是合集往nft里发送的消息没有成功

Degen: 哦哦哦 (reply to 60309)

wikig: 对了提问一下各位大佬。  想问一下大家现在对TON上的bridge是怎么看的。有没有什么好用的bridge推荐？  因为我们最近打算快到Tonsbridge那个demo一周年了准备做一趟重构  毕竟是bridge aggregator，所以还想咨询一下在做各位大佬的意见看看有没有用什么bridge service是可以聚合的，或者大家伙推荐的bridge我们给聚合进去~

Alan | Torch: 就我現在得到的資訊 layer zero 要來 ton 上了 (reply to 60319)

wikig: 最后是layer 0吗..... 我年初听他们说是说ccip开价太高所以最后选了l0，然后快一年过去了没消息 。 官方桥的事情其实，好像大家伙也不急？（这点挺神奇的）。 有没有什么推荐的三方桥呢 (reply to 60321)

recovery: 老铁们 ，有没有api 获取加入机器人的所有用户列表

Aaron: 请教大佬，自己跑的节点挂了，看磁盘负载指标100%了，大家跑节点的磁盘性能都是咋配置的呀？Disks load average (MB/s): nvme0n1:[52.29, 100.03%]

0xRango: Hi, 新手请教一下，如何能快速获得交易的结果？ 我现在使用tonlib 去查seqno或代币余额变动，要几分钟，对API不不熟悉，已经被tonlib, liteserver, http api各种搞晕，希望大大指点下

recovery: const jettonData = await jettonWallet.getData(); 老铁们是不是钱包有币用这个方法才能查询到余额

— 2024-09-28 —

Luis | BitsLab(MoveBit/TonBit): https://ctf.tonbit.xyz/ Ton CTF is live! Please try it out!

jay: 这个完成时间有积分加成么？ (reply to 60388)

Luis | BitsLab(MoveBit/TonBit): first blood 有加成

Luis | BitsLab(MoveBit/TonBit): 技术支持群： https://t.me/BitsLabHQ/1330

Degen: 合约的代码就是这样的呀

备用: tg可以接币安和波场吗?

Luis | BitsLab(MoveBit/TonBit): 你有去解题么？好像其他选手是ok的 (reply to 60389)

gavin: 有解啊, 我的代码都写好了 但是他们家的API挂了 可能访问的人太多了吧 (reply to 60399)

Luis | BitsLab(MoveBit/TonBit): 有问题可以在技术支持群里问哈： https://t.me/BitsLabHQ/1330 (reply to 60400)

kevin: 同问， 我是 liteserver + anton， nvme disk utils 经常跑满， 不行准备分开多台服务器了。 (reply to 60336)

0xRango: anton 是啥？

0xRango: 昨天装了节点，跑一晚上卡在这，正常吗？

jay: 有人要加入组队么？ (reply to 60401)

Luis | BitsLab(MoveBit/TonBit): @jay 可以在技术支持群里找人组队： https://t.me/BitsLabHQ/1330

Luis | BitsLab(MoveBit/TonBit): 一个人也可以参加比赛

jay: ok，那就先一个人吧，tonx 文档和表现不一致，有点拉胯。

Eric: 大佬们，同ton space 进行ton token合约交互时，直接报错这个，能帮忙分析下什么原因吗？ （ton token余额足够的）

Jason-Bitslab: TON CTF 比赛正式启动！🚀  各位 #FunC 和 #Tact 开发者，TON CTF 比赛现已正式开始！这是你展示技术、冲击排行榜，并角逐 $10,000 奖金池的机会。  比赛时间： - 开始时间： 2024年9月28日，UTC时间凌晨1点   - 结束时间： 2024年9月29日，UTC时间凌晨1点  已经注册的选手们，现在是时候展现你们的实力了！通过解决挑战获得“旗帜”，积分越多，排名越高，向着 $10,000 奖金池全力冲刺吧！  抓住机会，展示你的实力，赢取丰厚奖励！💪

jay: 很多算法题是吧，电脑都算炸了。

gavin: 都很简单

gavin: 直接用穷举 (reply to 60426)

jay: 我电脑算不出来~~ (reply to 60435)

gavin: 你是做 的ecc 还是curve (reply to 60437)

jay: 数字太大了。eccs。

jay: airdrop 这个要30000个地址领取，没gas 呢~

gavin: 我是把算法换成python实现 然后跑。。。还挺快 (reply to 60439)

jay: 我换成 js，暴力破解不懂，然后反向计算，算了上千万次，也没算出来。

kevin: 我是 golang 和 func 党， 准备战略性放弃了， 题目很赞

gavin: 感觉题目跟tact 关系不大。。。都是一些算法

jay: 备受打击，哈哈~

kevin: 幼小心灵有收到亿点点伤害啊

Ken: 新手请教，刚想创建测试账号但是一直收不到验证码是为啥

Ken: 我用另一台手机登录倒是立马收到了验证码

jay: 哈哈，发现了~ 这点有点奇怪，习惯了 uint，一开始没转过弯来。

jay: 还在硬算 ecc， 感觉走不下去了~

live: +！ (reply to 60448)

gavin: 可以算出来的 (reply to 60466)

gavin: 我都算出来了

jay: 可能我电脑垃圾，试了js，py 都没算出来，哈哈。

jay: 话说你算了多久？我看还需要算么~

gavin: 是 我的电脑算了2分钟

jay: 。。。我都算了几十分钟了。

jay: 那看来是凉了~

jay: 群里还有人没有领到 HMSTR 么？ 可以提供领取帮助。

jay: scan 看到有也不意味着完全受你控制，这个 token 是一套扩展的 jetton 标准。

jay: 我放弃了~ (reply to 60491)

Aaron: 咋扩展的，有什么安全问题吗？ 指点一下哈。 (reply to 60486)

jay: mintless jetton standard.

jay: 没什么安全问题，就是比较破坏生态。

Aaron: 嗯，那还好，吓了一跳哈 (reply to 60501)

Xu: "exit_code": 9,                     "vm_steps": 123, 如何查看Vm_step:123的代码

Xu: 有大神知道吗？

jay: 看 exit_code 就差不多了。 (reply to 60515)

— 2024-09-29 —

好茶: hook  0.4773市價多  TP：0.538  SL：0.4495 (forwarded from Yo！這裡是最後的幣風港)

M: w5r1的id是0，w4r2的id默认是 698983191 (reply to 60287)

1: 大佬们，请教个问题，web3钱包生成的助记词如何派生ton的地址和私钥啊? 怎么搞都不对

jay: https://github.com/hstarorg/tonkit/blob/main/src/utils/ton-utils.ts#L63 (reply to 60577)

jay: 助记词转私钥，私钥初始化钱包算地址。

1: 好的，谢谢，我看看

1: 之前都是用python的，没用过js

gavin: https://leoq7.com/2024/09/TON-CTF-2024/ 转发一个大佬（第一名)昨天的挑战赛的题解 (reply to 60495)

炒币养家: 有人能看明白这个.store_unit里面表达什么意思吗

炒币养家: store_unint

jay: 数据类型长度。

jay: 但确实为啥要写成一串数字相加，估计是想表达存储结构啥的

炒币养家: 好的，谢谢大佬

炒币养家: store_unit(0x18, 6)这个呢

炒币养家: 多谢大佬

Xu: 主要是组装的结构有点复杂，不晓得是哪个cell出问题了，给的信息太笼统了 (reply to 60520)

gavin: 关于这个魔数你可以看这个文档 https://docs.ton.org/mandarin/develop/smart-contracts/messages#%E6%B6%88%E6%81%AF%E5%B8%83%E5%B1%80 (reply to 60604)

Leonardo: 老哥们，ton的dapp 怎么调用起ton钱包签名自定义消息啊。

gavin: 好像不再我们这个群 (reply to 60614)

cj: comment么 (reply to 60618)

Leonardo: 应该是类似与小狐狸那样，调用起钱包签名一个自定义的消息。

Leonardo: 老哥，搞过吗？

gavin: 好像钱包没有统一这个规范

gavin: 导致不好实现

Leonardo: 就是说没法唤起钱包签名吗？

Leonardo: 我看了官方的，貌似只能校验一下公钥地址对不对。

gavin: 在我的认知里面是的可以连接但是不能自定义签名 (reply to 60625)

Leonardo: 只能check一下proof

炒币养家: 各位大佬有没有什么系统性讲FunC和智能合约开发的教程吗

炒币养家: 感觉很多知识点了解不全面

jay: 连接钱包时带上 proof，就是消息签名。 (reply to 60618)

jay: proof 就是tonconnect 约定的签名方式。 openmask 支持普通签名（但其他钱包大都不支持）

Leonardo: 然后checkproof吗？

Leonardo: 我想得到签名得到一个结果，保证这个结果每次都一样。

Leonardo: 目前这个proof，因为时间和随机的playload，会每次都不一样。

Leonardo: 像小狐狸，我每次签名helloword，通过签名之后，得到的结果都是一样的。

Leonardo: 老哥，有无办法解决 (reply to 60633)

gavin: ton connect 的 ton_proof 只能验证用户有这个钱包, 但是不能自定义签名数据的

gavin: https://docs.ton.org/develop/dapps/ton-connect/sign

Leonardo: 这个我看了 也实现了

jay: 没办法 (reply to 60639)

Leonardo: OK

Leonardo: 那么换一种方式呢，我想得到这个钱包的唯一hash，不会每次变

Leonardo: 只能校验一下proof，然后后端返回一个数据给用户吗

炒币养家: 领空投，先链下签名，然后合约验签，这个你们搞定了没

Degen: 领空投，先链下签名，然后合约验签，这个你们搞定了没

sponge: 老哥们，请教个问题，我使用 toncenter 的 API/V3 接口，请问接口返回的交易信息是已经确认的么，我是否还需要等待几个区块才能确认交易是已经确认不会回滚的

1: 感觉ton的钱包很复杂呢，包括地址、签名这些， eth的就简单很多

User<6642254425>: 哈哈是这样的 (reply to 60655)

jay: 可以说你的原始场景~ 你已经选的路可能思路就是偏的。 (reply to 60644)

jay: 发空投直接找三方服务呀，没必要自己做。 (reply to 60647)

Degen: 有哪些服务 (reply to 60660)

Degen: 举个例子 (reply to 60660)

wikig: 领空投和发空投的逻辑不太一样的吧（？  看这个说法好像是主动发起领取操作 (reply to 60660)

Degen: 大佬

Degen: 🥰

wikig: 链下签名现在似乎tonconnectUI没做这个接口抽象。  所以我估计，用户是得向合约发交易然后合约对交易数据验签匹配空投白名单列表来实现claim这个token (reply to 60647)

jay: https://x.com/tokentable (reply to 60662)

jay: DOGS 、WAT 这些就是这家。

jay: NOT 的方法也可以用：直接高负载钱包给用户转账。

live: 如果是验证签名，你可以参考这个老哥的空投合约https://github.com/solnex/tact-contract (reply to 60647)

gavin: 可能要给上百万地址空投？ (reply to 60672)

gavin: 应该是想限制不是所有地址都能领, 不用集合存 用签名中心化控制

gavin: 其实用默克尔证明是最好的

gavin: 生成好证明, 合约里面校验就行了 都不用签名

gavin: 不是A的签名

gavin: 比如我是狗庄, 我发了一个jetton  我要给10个人空投  先写一个合约, 把jetton 存到这个合约里, 然后 韭菜跟这个合约交互领他对应的jetton 数量, 每次领的时候为了防止韭菜不要乱领数量 就对参数签名验证  这里的签名是狗庄的签名

gavin: 狗庄不想承担gas

gavin: 哎就是没意义, 杀鸡用牛刀 不讨论了

jay: 验签的意义在于让用户调合约。其实是 merkle tree 方案的降级版本。 (reply to 60685)

live: 主要还是方便项目方控制领取数量，特别是给用户空投数量不一致时，防止用户随便构建消息，恶意临取 (reply to 60685)

备用: 合约发消息转账的时候, 计算钱包地址, tact里面如何计算? 我现在是初始化的时候把钱包的code写进去, 但计算的时候会报136

wikig: 还真是 (reply to 60693)

wikig: 虽然但是吧，用户随意构建消息.......虽然但是，这玩意儿，涉及到jetton数量的话，为啥不直接把数值塞到合约里...... (reply to 60691)

gavin: 类似这样

wikig: 我的理解是，狗庄部署好一个用于领取jetton的合约，然后里面指定了白名单地址和白名单地址的领取数值。  然后用户掉交易cliam不就好了 (reply to 60686)

gavin: 是的没错 (reply to 60699)

gavin: 但是这个集合可能特别大, 他们不想存呗

gavin: 所以后来有了 merkle 方案

live: 因为有的项目开始用的是数据库中的积分制，后面它们想将其给用户换成币，就发布一个这种空投合约，让用户根据自己的积分领取，如果全放合约就太多了 (reply to 60696)

wikig: 啊....总不能是用户前端发起交易带上数量信息想领多少领多少吧 (reply to 60704)

gavin: @carzygod 你改网名啦

备用: 就是不想用initOf, 因为这样还要引入jettonWallet (reply to 60698)

wikig: 但是如果是这种涉及到中心数据和去中心化合约的方案，其实可以考虑采用一个折中方案  1. 准备一个主地址A ，然后私钥是只有你有的 2.用户要体现的时候，你先用地址A来签名了数量信息。 3.用户把A签名的信息打包在自己的交易里上链 4.链上校验用户信息，以及交易数量信息是否属于A签名 (reply to 60704)

wikig: 笑死，其实username 没改 (reply to 60706)

gavin: 哦？ 那你是自己构建的 StateInit 对象吗？ 奇怪 那应该是一样的效果呢 你 dump下看看差异呢 (reply to 60707)

wikig: 诶，那就是我上面说那一串嘿嘿，想一块去了。 (reply to 60710)

wikig: 嗯...这个是这样的。 涉及到行为流上的差别。  比如，第一种方案，用户可以在claim操作的simulate的时候看到具体的能获得的代币和消耗的gas  而第二种则是没有simulate相关操作的。  加之要实现第二种其实还得维护一个监听器（ (reply to 60713)

wikig: 所以我的理解他们可能确实还是会倾向方案一，虽然有点绕或者杀鸡用牛刀，但是对用户来说相当于没有涉及到陌生操作，用户也不会质疑我这个转账操作是转给谁，为啥我要花钱，之类的问题。 (reply to 60714)

Bob: 现在是不是还是func用的多一点

live: 是的，目前用的就是这种方式，merkle我还没试过 (reply to 60708)

gavin: 是的没错 (reply to 60717)

wikig: v5 我猜是不熟悉。至少我没看到要怎么走tonconnectui来用wallet v5的用例。我觉得v5还是局限在tonkeeper和他们的服务battery的 (reply to 60720)

wikig: 我记得extension版本的tonkeeper有，但是其他的wallet我也没啥印象。不记得 @wallet 的 ton space有没有 (reply to 60722)

jay: 看似效果差不多，但业务角度看就很不一样。当然验签本身的价值不大，最好升级到 merkle 方案。 (reply to 60693)

wikig: merkle方案是不是从 Solana 的 CNFT时期才开始大规模猎装的吧。 (reply to 60725)

wikig: 哈哈哈哈哈哈是的，但是我上会用tonkeeper还是半年前，所以可能.....现在不知道有没有 (reply to 60726)

jay: 不是，很早就是标准了。 (reply to 60728)

wikig: simulate好tm麻烦啊🥲  真的写死我了，还得用纯前端实现。闹麻了  所以TON的simulate确实没写，过于unstable (reply to 60730)

wikig: 诶，这样吗。因为我的印象是merkle tree的方案是在solana或者TON这类不支持mapping的非EVM公链起来之后才被广泛拿来用的（ (reply to 60733)

wikig: 我能想到的这两个方案的区别和优势就是  1.同一笔交易进行，可以simulate。时效性也高  2.用户吊起的交易不会是transfer交易，用户不会起疑 (reply to 60708)

wikig: 算了，自己维护一套索引器还是半公开的状态（得累死） (reply to 60736)

wikig: EVM还好办，chainlist公共节点集群轮取就行。  Solana和TON的真折磨，RPC贵得要死还有一堆速率限制 (reply to 60736)

gavin: 真的能看到, 我用ton keeper 的时候遇到过 (reply to 60722)

gavin: 能看到jetton 代币的变动啊 (reply to 60741)

gavin: 他的钱包是开源的

gavin: 我去看看他怎么做的

wikig: 应该是的，靠谱不靠谱另说毕竟能回滚。 (reply to 60741)

wikig: 我记得代币数额发生改变失能simulate然后展现给用户看的

wikig: 我的理解是当然可以，以前最喜欢干的事情就是solana上的钓鱼骗simulate合约。 (reply to 60749)

gavin: 是的 没错 (reply to 60750)

wikig: 有啊，Solana因为是前端最终发送到rpc（不是钱包）  所以就有人写过钓鱼合约，能够用户签名之后给到页面前端，然后页面前端再包一笔状态改变交易。  两笔交易上去之后。就会状态改变交易先触发，然后后面用户签名交易再出发 (reply to 60752)

wikig: 所以就会出现，simulate的时候是获得xxx 代币  然后实际上触发的是什么就是另一回事了

1: 请问下，用代码通过助记词生成出来的ton地址和导入到钱包的地址不一致要怎么解决

wikig: 但是用户没得选，在这个站点前端claim或者minted这个行为，交易发送操作是页面前端做的。等于他有天然优势包交易。 (reply to 60757)

wikig: 当然也有些EVM方案则是  写一个钓鱼合约，这个钓鱼合约走的是fontrun的方案，在memopool里面监听然后走flashbot ，抢在你成交之前更改合约状态 (reply to 60757)

1: import { mnemonicToWalletKey } from "@ton/crypto"; import { WalletContractV4 } from "@ton/ton";  async function main() {   // open wallet v4 (notice the correct wallet version here)   const mnemonic = "unfold sugar water ..."; // your 24 secret words (replace ... with the rest of the words)   const key = await mnemonicToWalletKey(mnemonic.split(" "));   const wallet = WalletContractV4.create({ publicKey: key.publicKey, workchain: 0 });    // print wallet address   console.log(wallet.address.toString({ testOnly: true }));    // print wallet workchain   console.log("workchain:", wallet.address.workChain); }  main();

1: 我是直接用官网的例子的

1: 钱包是gate钱包的，地址版本是v4的

1: 是的

1: 12词的不能用这个嘛

1: 那不是ton的钱包生成的助记词，要怎么弄

1: 而且这些钱包还能派生多个地址，搞了好久，实在不知道怎么弄了

1: 我研究研究

wikig: 啊？还能骗过simulate吗，怎么做到的 (reply to 60774)

wikig: 好家伙，那就是simulator的问题了 (reply to 60778)

kevin: 各位， 请问有没有人遇到这个问题：  failed to send message: lite server error, code 0: cannot apply external message to current state : External message was not accepted Cannot run message on account: inbound external message rejected by transaction 771BE310FFA2362C4AFD018BD2BEF7070F6BDD5BE174E45C7B94CA4C955DA922: exitcode=0, steps=0, gas_used=0   ================ exitcode 是 0， 但是 liteserver reject 了

Ken: 各位，请问小程序还有必要用tg账号登录吗，还是直接连接钱包就当账号来用了？

jay: 这种很容易遇到。多半是你的数据构造有误，貌似没钱也会出这个。 (reply to 60782)

live: 大佬们，正常tg账号能登录测试环境吗？为啥我登录收不到验证码啊？

Jackie: 测试链又挂啦 ？

1: 哥，有没有例子，btc、以太坊用这个都能正常生成，但是ton不行 (reply to 60773)

loyce.eth: 有boc解析的例子吗？

Degen: 有boc解析的例子吗？

gavin: https://github.com/beyondblog/ton-cell-parser/blob/main/app/components/CellParser.tsx#L36

1: 好的，我试试，不过我是用的Python的sdk

1: js不太熟

1: 嗯嗯

1: 好的，谢谢

1: 我试试

炒币养家: 但是你说的还是没解决用户应该领多少的问题，除非你把数据都写到合约里 (reply to 60713)

炒币养家: 签名和验签就是不用写数据到合约，同时防止用户伪造数据

wscsm1: 各位大哥,我想开发个交易工具,但是官网的文档我有一些看不懂,能帮我解答一下吗

炒币养家: 如果领空投的用户量特别大，批量转账和写数据到合约都不行吧，默克尔树和签名验签是解决的思路

炒币养家: 不是不行，是gas成本比较高

炒币养家: 我说的是批量转账和把数据写到合约的方式

炒币养家: 你说的方式我没看明白，我没说你的方式有问题

炒币养家: 我只是解释我之前的提问

炒币养家: 你说的有细节没，没看太明白

炒币养家: 用户给项目方钱包转TON，项目方给用户转币？

wiwi: ton 能夠讓用戶 sign ? (reply to 60815)

炒币养家: 我对TON不熟，所以才问这个问题的

wiwi: 我指的是像 evm 那樣可以直接 off chain sign ，通常用來讓用戶每日簽到功能 (reply to 60831)

gavin: 他是不是想问ton connect 系列的wallet 是否支持拉起签名自定义payload 得到boc

wiwi: 看看之後 ton 有沒有人搞出鏈下驗證的 sdk 就比較方便，通常是一些項目做簽到或是叫你簽協議說自己不是美國人之類的

wikig: 现在看tonconnect是没做sign message 的签名接口抽象的。 (reply to 60836)

wikig: 目前好像只有openmask 做了签名接口抽象，而大的 tonconnect没做 (reply to 60837)

wikig: 验签好做，只是签名方法没有做 (reply to 60839)

wikig: 偌大一个tonconnect连sign message都没做

wikig: 刚看到的时候觉得在做玩具笑死

wikig: 又不是什么很难的东西（

wiwi: 難受了，還是大家都用 tg mini app 去簽給後端處理根本不用錢包處理

wikig: 不懂就问，请教一下tg miniap 怎么做签名啊 (reply to 60847)

wikig: 能做自定义消息签名？

wikig: 怎么做的，这个感兴趣（我好像一直没找到方案）

wikig: 除了initdata有个签名

wikig: 好像没有自定义消息签名的方法

wiwi: tg 遊戲不管私鑰，他直接綁定用戶 uid

wikig: 用户跟miniapp交互除了initdata就没别的特征值了（也没别的锚点  所以唯一能做鉴权的也就只有inidata的sign了

wiwi: 像之前有遊戲做鏈上籤到他就是要發一筆鏈上紀錄然後再 payload 塞特定資料，這就很醜了

wikig: 那门槛可就高了。前提用户得有钱。 (reply to 60860)

wiwi: 是的，所以後來那遊戲的簽到改成直接中心化處理掉

wikig: 算了，别说大调整了，我tm一个小小的版本问题半年没修

Na: 有谁用过sdk的方式发送交易吗?就不是tonconnectui的,我在  debug里面调用发送交易,没有弹出钱包界面

Na: 3

jay: tonconnect proof 签名。 (reply to 60848)

Shawn: hello各位大神 我们的群和频道是公开的，但是无法搜索显示 有大佬遇到过这个问题吗

allen: 大佬们，以：te6cckEBBAEA6wABnIeotTNJjjBAlG5xL1SdqFvr4rSaACy6CUjaX2mbOZ211wzUQvdXSh  这样格式的body怎么解码？

allen: 大佬，怎么转成可读的内容？ (reply to 60879)

allen: 就是转账里面的：forwardPayload (reply to 60881)

gavin: 可以盲猜😚

gavin: 挨类型个try_load

Mr.A: ton链现在工作正常吗?

Mr.A: 推送交易时节点报这个错误时啥情况?LITE_SERVER_UNKNOWN: cannot apply external message to current state : Failed to get account state

Mr.A: 有大佬知道吗

jay: 检查你的入参和合约状态。

Mr.A: https://tonviewer.com/EQCNwPBUen0kRVe5K7S3FSor7Y7S9xfP1wlbf_QrFR6zFq4p 这个状态有问题吗? (reply to 60893)

jay: 有，uninit，所以你发起交易需要传init。

Mr.A: 有传init,这个报错是获取账户状态时报的错

Mr.A: 这个是签名后的数据  te6ccgEBAgEAqQAB34gBmb6EJcJLWrnXNwF1hdJqQkxIQ8qqKT/9Z3bVHo2OKtAC6MzvYjzw3pYquLwk9svPAQtHNeWZ3gsNSyK9qrgcrZVDE9wvvvkWFbUm9LKRtimWqe/Ii+StwYNfI+RSKOhYMU1NGLs3yayQAAAAMBwBAGhCAAhdwTQHuUDLitWxwI/fYB/kej8VX5/P9ddos2h38X+uICFg7AAAAAAAAAAAAAAAAAAA (reply to 60895)

Mr.A: 感觉像是节点出了问题导致无法广播交易

jay: 先检查自己这部分。

jay: 这个错误很容易遇到，大概率不是链的问题。

allen: 这个值如何获取？

炒币养家: 有人部署的时候遇到这个问题吗

wikig: tonproof 是tonproof ，有办法做自定义消息签名吗 (reply to 60874)

炒币养家: 用的官方的npm create ton命令里的example  执行 yarn blueprint run  部署报错

jay: ton proof就是你给的消息呢。

炒币养家: 有人用yarn blueprint run 来部署测试网吗

James: 各位大佬，w5钱包，有脚本转hmstr出来吗？遇到了好多坑啊，真是…

Kim: 各位大神们求助，问题困扰好久了，我有个自动处理程序，根据用户提交的申请，要给用户自动转帐USDT，现在转帐是可以转，但如果怎么确认每笔转帐是否成功呢，我自己测试，从client.getTransactions，成功不成功的交易信息，通过状态之类的完全区分不出来？比如我直接转一笔超出我帐号金额的交易，在浏览器上明确能看到失败，在从API获取到这个条交易信息，怎么都没有办法区分出来是否失败

Kim: TON真是太猛了，之前开发ETH，马上都上手了，做TON，就做这个自动转帐的小程序，结果做了两周了，还是搞不定。。。这东西太复杂了。。。。

gavin: 加油 (reply to 60918)

Kim: Transaction: {     address: bigint;     description: TransactionDescription;     endStatus: AccountStatus;     inMessage?: Maybe<Message>;     lt: bigint;     now: number;     oldStatus: AccountStatus;     outMessages: Dictionary<number, Message>;     outMessagesCount: number;     prevTransactionHash: bigint;     prevTransactionLt: bigint;     stateUpdate: HashUpdate;     totalFees: CurrencyCollection; }

Kim: 这个定义里面，我反反复复输出比对，成功不成功的交易看起来都一样呀。。

gavin: description: TransactionDescription; (reply to 60917)

gavin: 这个里面好像有一个exit code？

gavin: right

Kim: description: {     type: 'generic',     creditFirst: true,     storagePhase: {       storageFeesCollected: 256n,       storageFeesDue: undefined,       statusChange: 'unchanged'     },     creditPhase: undefined,     computePhase: {       type: 'vm',       success: true,       messageStateUsed: false,       accountActivated: false,       gasFees: 1323200n,       gasUsed: 3308n,       gasLimit: 0n,       gasCredit: 10000n,       mode: 0,       exitCode: 0,       exitArg: undefined,       vmSteps: 68,       vmInitStateHash: 0n,       vmFinalStateHash: 0n     },     actionPhase: {       success: true,       valid: true,       noFunds: false,     },     actionPhase: {       success: true,       valid: true,       noFunds: false,     actionPhase: {       success: true,       valid: true,       noFunds: false,       statusChange: 'unchanged',       totalFwdFees: 828800n,       totalActionFees: 276262n,       success: true,       valid: true,       noFunds: false,       statusChange: 'unchanged',       totalFwdFees: 828800n,       totalActionFees: 276262n,       noFunds: false,       statusChange: 'unchanged',       totalFwdFees: 828800n,       totalActionFees: 276262n,       resultCode: 0,       resultArg: undefined,       totalActions: 1,       specActions: 0,       statusChange: 'unchanged',       totalFwdFees: 828800n,       totalActionFees: 276262n,       resultCode: 0,       resultArg: undefined,       totalActions: 1,       specActions: 0,       skippedActions: 0,       messagesCreated: 1,       resultCode: 0,       resultArg: undefined,       totalActions: 1,       specActions: 0,       skippedActions: 0,       messagesCreated: 1,       skippedActions: 0,       messagesCreated: 1,       actionListHash: 26723394498924541821991506994834549035663015626687652766721407731824279399591n,       totalMessageSize: [Object]     },这个吗？

Kim: 我都已经快崩溃的想写爬虫去抓https://tonviewer.com/里面的信息了，什么SDK能拿出来像浏览器这样清楚的交易数据呀

Kim: 多谢大神，我去查查哈 (reply to 60930)

Kim: 在toncenter API 中返回的交易数据的格式里面有吗？ (reply to 60930)

Kim: 这是TONweb的类库吗？我在@ton的类库里面查CELL，没有Cell.fromBase64这个方法。。。

Kim: 我输出了地址里面最近10条：console.log('Transaction aborted:', tx.description.aborted);结果全是false...

jay: 浏览器数据来自tonapi (reply to 60928)

Kim: 我的疑惑就是，我最近测试的几笔都是成功转帐的，但是最后的这一笔我故意输入了超出帐号数量的USDT来转帐，在浏览器中看到已经失败了，但这查最近几条的转帐API，都是FALSE... (reply to 60938)

Kim: 是不是因为,JETTON的转帐，需要再往下查我的JETTON地址的那条消息？

User<6301135112>: 看终止状态，除了终止还要看回弹状态

User<6301135112>: 这两个一起看

User<6301135112>: 因为是异步的，有时候终止状态为true，但回弹为false，资产不会回弹回去

Kim: 多谢几位，我发现查JETTON钱包里面的交易信息挺好使，通过aborted能和我实际的交易情况匹配上

Kim: 各位大神，还有个问题，我现在发送交易前，先createTransfer一个，拿到BOC，然后后面通过getTransactions拿到最近的交易数据，去比对每次交易中inMessage的BODY是否同之前保存的BOC相等再匹配交易，还有没有更好的方式？

sakura: https://t.me/xxxx_bot/xxxx?code=PL8VJH爲什麽我一直拿不到tg的app網頁地址帶的參數呢？有大佬説明一下沒？

Kim: 要用startapp (reply to 60947)

sakura: tg某個api？

Kim: 类似这样：t.me/TelinkXYZ_bot/Telink?startapp=activity_6-GJMsHLwDMEu9bvpDSyEkWw_7082382444，类似这样传递，要有多个参数的话字符串拼在一起然后程序自己解析

sakura: 就是説只能參數定義為startapp吧

Kim: 是的

recovery: 老铁们小程序使用  WalletConnect

recovery: 连接不上钱包有啥好的方法

User<7148949927>: 用来查这个交易记录是否成功？ (reply to 60946)

sakura: 我在代碼裏拿到的是網頁域名的，不是tg分享的地址我是缺少什麽操作嗎？ (reply to 60952)

sakura: 解決了

Kim: 是的 (reply to 60956)

Kim: 各位，怎么实现用一个帐号地址批量给多个地址转帐USDT呀，我现在理解只能一笔一笔，每一笔等待wallet的seqno变化后，再转帐下一笔，那这样一次自动处理多笔交易运行时间好长呀，有没有更好的办法呀

Ton: 我有机器人和代码 (reply to 60961)

Ton: 一次传254个

Ton: 或者你用Tonkeeper的会员

jay: w5或者高负载钱包。 (reply to 60961)

— 2024-09-30 —

Ton: 有没有api可以修改用户头像？

Ton: 就是用户一键点击可以修改头像

Crypto 🔑🐦‍⬛️: 为啥要去理解这机制，ton 这机制就有问题，搞得这么复杂，迟早完蛋 (reply to 61000)

gavin: 🤣🤣🤣 人家好着呢 (reply to 61012)

gavin: 没有 (reply to 61004)

gavin: 我曾经想做一个换头像的bot, 但是没有api实现

Crypto 🔑🐦‍⬛️: 目前你看到的好，都是哦假象 (reply to 61013)

Crypto 🔑🐦‍⬛️: 这是什么逻辑😒🤔 (reply to 61017)

kevin: 有个策略仅供参考， 转账成功之后发一条加密的 comment， 转账阶段公钥加密，确认阶段私钥解密，如果账户余额增加且加解密成功则转账成功。 仅供参考。 (reply to 60918)

galuna233: 各位大神， 有搞过ton dns域名的吗，为什么竞拍结束了域名会自动到我账户里，我看合约里是需要手动更新owner

Degen: 帮我看看批量mint的时候 为啥老是 有一部份失败

Degen: 而且失败的那部分 ton不知道转哪里去了

Crypto 🔑🐦‍⬛️: 就 ton 这架构，不给生态开发者一些精神补偿都说不过去

Degen: 这个是合约的代码

Degen: 有没有大佬帮忙看看一下

Degen: 是不是合集的gas不够？

Kim: 多谢，我现在查询JETTON的钱包帐号，然后比对BOC，现在看还可以，这个好处也不用解密 (reply to 61025)

kevin: wallet v4可以一次 4 个， v5 可以任意个， highloaad v3 可以8380415个 供你选择 (reply to 60961)

Kim: 谢谢呀，我有个疑问，我使用是是ton类库做开发，但是里面的钱包类库只到V4,我要用V5的钱包怎么发呀？ (reply to 61036)

kevin: 可以自己 deploy 的， 1，找到代码编译成 fifi； 2， 一般 sdk 都提供 deploy 的例子（比如tonutils-go） (reply to 61038)

Mr.A: 感谢两位大佬的回复,问题已确定,节点同步出了问题 (reply to 60897)

1: 老哥们，我这个代码派生eth和bit生成的私钥没问题，派生ton生成的私钥就是不对，谁能帮忙看看吗

kevin: https://github.com/xssnick/tonutils-go/blob/master/example/deploy-nft-collection/main.go  这是如何 deploy 一个 collection

1: 改了

1: 不行

Kim: 多谢，各位，我去研究下

1: 输出的私钥和从钱包拷贝出来的私钥对不上

1: eth的能对上

gavin: 别用emit (reply to 61031)

1: gate (reply to 61055)

Kim: 我在TON的说明上，看不到V5的类库呀？https://ton-community.github.io/ton/modules.html (reply to 61039)

1: 可以

Degen: emit 会影响吗 (reply to 61056)

gavin: yes

Degen: 那我试试删掉

jay: @ton/ton (reply to 61038)

1: 我试试 (reply to 61072)

1: 也不对

1: childkey怎么改

1: 好的，我找找看看

1: 是不是这样的

1: 试了，也不行

1: 改了这三个地方

Degen: 还是会失败呀 (reply to 61066)

Degen: https://testnet.tonviewer.com/transaction/31df7faad66729376007eb60301b89325e5ff7ca74b2f9a60881cf3899977488

Degen: 一下子发100多条消息过去

Degen: 失败率还挺高

1: 不行 (reply to 61094)

Degen: 是不是gas给的不够？？

Degen: 大佬能不能帮我分析下这笔交易 (reply to 61094)

allen: 大佬们，基于tron4j，怎么把这个值解析出来？

Degen: 嗯嗯

Degen: 就是nft mint的时候 collection给nft item发消息 会出现部分失败

Degen: 代码在这里 (reply to 61031)

gavin: 那里失败了 这交易不都成功了吗？ (reply to 61096)

Degen: 没有呀

Degen: 成功是要给nft发消息成功才行

Degen: 有好几个到collection那里就停止了

gavin: 哦 看到了 到了collection之后就没继续了是吧

Degen: 嗯嗯

gavin: 确实奇怪, 也没exit code

1: 吃完饭试试

1: 真难搞

1: 哈哈哈，那感情好

gavin: 降低批量个数 是不是就好了？ 看上去合约没问题啊 同样的代码 有些就能成功 (reply to 61111)

Degen: 对啊

Degen: 降低数量ye bu xing

Degen: 有时候3个都能一个失败

loyce.eth: slice.LoadStringSnake 出现乱码的结果，要怎么解决的？

User<6301135112>: @allenYJ

User<6301135112>: 这位兄弟，可以尝试判断一下这一步 (reply to 61126)

gavin: 是不是你的钱包里面的ton数量不够了 (reply to 61124)

Degen: 不是

loyce.eth: 我解析的是tonconnect sendTransaction 返回结果里的boc，他这个好像是自定义的boc，没找到对应的文档描述其具体结构

Degen: 这个改一下是不是可以打印出错误了 (reply to 61133)

Degen: 改成啥

allen: 感谢大佬，解决了 (reply to 61130)

Degen: 可以的

Degen: 我再搞一发试试

Degen: 你们都是去那个水龙头领取测试笔

Degen: 我在giver里面一小时只能领5个

Degen: 沙箱里没有浏览器啊 🤔

