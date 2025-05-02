Degen: 新手还是习惯看浏览器

gavin: 自己dump transaction (reply to 61153)

1: 这也不行 (reply to 61115)

Degen: 那数据太多了 - -

Degen: 我看不懂

Degen: 你的意思是在沙箱里打log

User<6301135112>: 一般都是通用boc格式吧，按标准文档解析就行了 (reply to 61135)

1: 不对，这个行了，哥 (reply to 61156)

1: 牛逼

loyce.eth: loadUint(32) 获取操作码是：2281783259，也没找到这个操作码对应的是个啥类型😂 (reply to 61161)

1: 直接算到第三位就够了，绝了

User<6301135112>: 有个网站可以查

User<6301135112>: 应该是合约自定义的op

loyce.eth: 我就发的一个普通的ton转账，按文档上说的这个操作码应该是0才对吧

allen: 大佬有遇到过在部署云服务器的时候，builder tonlib的时候一直卡到，也不报错的问题吗？ (reply to 61169)

User<6301135112>: 在同步吧

Degen: https://testnet.tonviewer.com/transaction/bcc8f883d84a0357d889be38ed058e07f91ea74b967d64edb73902a251c08f32

loyce.eth: 后来又发了一个usdt的转账，从返回的boc里解析出来的也是这个操作码 (reply to 61165)

Degen: 错误出来了

Degen: 给的0.05太少了吗

Degen: 是不是部署合集的时候要给合集里面留点ton才行啊

allen: 这个同步一般要多久？主要是也没有日志 (reply to 61172)

allen: 我看本地测试的时候，很快

User<6301135112>: 把日志改了

User<6301135112>: 我都没用他这个

Degen: 我试过给0.08 0.1 都还会出现

User<6301135112>: 日志等级

Degen: 构造一个nft 是不是也要消耗gas

gavin: 看来就是gas给的太低了

Degen: 合集部署的时候 里面是0TON

Degen: 是不是在部署的时候要留点在里面

Evan: 需要留

Evan: 支付存储费用

gavin: 对 要留

Degen: 怎么留- -

gavin: 你这个是个什么逻辑 怎么还除了呢 会不会是这里太低了

Degen: 这里length 都是1 (reply to 61196)

Degen: 除以没关系吧

gavin: 不是这个 (reply to 61201)

Degen: 我在部署的时候设置了不回弹 他还是把钱给我退回来了

gavin: 总感觉那里不对 - -

gavin: 我看下我的代码

Degen: https://testnet.tonviewer.com/kQDCScaf2OLf-ucPo5E3EnHk-8BssnFtyjI2-mmg6JtVfef_

Degen: 只是找到问题了

gavin: 我知道了

gavin: 你不能直接用msgValue

gavin: 你得比msgValue 小一点才行

gavin: 相当于 A - 0.5ton -> collection   到了你的collection的时候 你要发送到 nft item  这个时候你用0.5 ton 就不够了

Degen: 那为啥有些可以成功

Degen: 🥹

gavin: 因为你的collection 里面 之前有剩余的 (reply to 61217)

gavin: 我还以为你是标准nft呢

gavin: 你这个是自己魔改的mint

Degen: 不是啊 这个是老外写的tact版本的

Degen: 这个地方我都没动

gavin: https://github.com/getgems-community-tact/nft-template-editable/blob/tutorial/contracts/nft_collection.tact#L38

gavin: 你看这个

gavin: 用这个合约就没错

Degen: https://github.dev/howardpen9/nft-template-in-tact

gavin: 我擦 这个是群主

gavin: 撤回我的话 哈哈哈

Degen: 嗷嗷 哈哈

Degen: 我知道了 老外没写错

Degen: 我少拷贝了部分逻辑

Degen: 计算的逻辑

Degen: 擦

Degen: 🥲

gavin: 哎

Kim: d感谢各位，改了代码，用W5钱包运行成功代码，大家有用W5钱包一次发多笔交易的代码示例吗？我想实现用钱包一次发多笔交易

User<6301135112>: excuseme

Degen: 这样调整后就行了对吗

Kim: 就是之前发单笔交易的代码，生成多条吗？是不是就是这个代码里面，MESSAGES,里面数组加多成员对吗？ (reply to 61243)

Kim: 多谢大神 (reply to 61249)

Kim: 😀

Degen: 好像没法在初始化部署的时候 往里面打钱 (reply to 61201)

Degen: https://testnet.tonviewer.com/0QDZ5PnVwFWmgFyPINBmSnuXWEugTy9t2E6q-nsz5m9UaQyl

Degen: 我设置了 (reply to 61255)

Degen: 嗯嗯

Degen: 可以了啊。感谢两位老哥

Degen: ☺️

User<6712474621>: 🤣

User<6712474621>: 大A已经疯到技术群了

Kol a: 哈哈哈哈哈哈

aier: 空活了几十年，不曾想能看见a股一天拉7%

User<6712474621>: 太疯狂了

User<6712474621>: 很魔幻 怕不是有啥陷阱🤔

备用: 看节后还得不得继续疯

sponge: 大佬们请教个问题，我通过 api/v3/transactions 查到交易后，怎么确认整个的交易都已经执行成功，我理解可以去查 trace_id?

gavin: 放心吧 冲就完了 (reply to 61272)

galuna233: 注册了个 ton 域名 https://tonviewer.com/EQBiYZkCqrUI_wF8nEV3vc-faTy6vDcVewq_vT4-xqLJgFr0?section=method， owner address为空，但是能识别到我的钱包里，怎么做到呢？各位大佬

allen: 那大佬是怎么发起转账这些的？ (reply to 61182)

zonh: 各位老哥，请教一个问题。 我使用钱包插件从 A 向 B 发送了一笔 jetton 转账，两个地址都是 wallet address。 我看链上数据，A 在向 A.jetton wallet 发送 jetton transafer 消息的同时携带了 0.1 ton，我理解这 0.1 ton 是用于支付后续通讯的手续费的，所有消息执行完会通过 excess 消息把剩余的 ton 返回给 A。 但我有一个疑惑是从 A.jetton wallet 向 B.jetton wallet 发送 jetton internal Transfer 消息的时候把这个 0.1 ton (请忽略具体的值，到达 B.jetton wallet 的时候是会被扣掉手续费，并不是 0.1 ton） 也携带过去了，但是最终 B.jetton wallet 的地址会留下一部分的 ton，这是什么原因？

galuna233: 这个我知道，我的疑问是dns的前端代码里没有找到自动发消息的代码，还有就是我刚刚发的这个交易owner我没发消息是空没错，但是钱包和nft市场能识别到我的账户下 (reply to 61291)

galuna233: nft解析的元数据读owner不是读的owner_address吗， 为什么会读取get_auction_info， 我晕了

galuna233: 还能这样 我还特地看了一遍nft的TIP规范 里面好像没提到

galuna233: 我可以理解为是钱包和nft市场主动适配了ton的域名?

zonh: 大佬，这个有类似文档说明jetton wallet会预留多少ton不？ 另外还有一个问题向B发送jetton转账， 是不是只会触发B.jetton wallet 扣除 storage_fee. B.wallet 地址不会扣storage fee，除非指定了jetton notify消息到B，B的wallet才会扣storage fee的呀 (reply to 61290)

galuna233: 嗯 这个解释比较合理 我好想抓一个ton基金会的...

wiwi: 想問下 ton 測試網有沒有 TEP-74水龍頭可以領呢?

zonh: 懂了

Champer Wu: 怎麼樣會產生欠費？ (reply to 61310)

zonh: jetton wallet 的 ton 余额通过哪个接口可以查的到不

Champer Wu: 我的理解是ton value不可能為負的

Champer Wu: 你直接拿Jetton wallet的地址去getBalance 就行了 (reply to 61313)

Champer Wu: 所以ton 存資料是有成本的

Champer Wu: 你太久沒動它，你的錢就蒸發了

Champer Wu: 是這個意思？

Champer Wu: 那是因為現在ton 便宜的吧⋯⋯

Champer Wu: 哪天他貴了，狀況就不一樣了🫠

Champer Wu: 假設真的有那麼一天，他的市值衝擊sol, 而且我想應該也不會太遠，20塊就到了

Champer Wu: 那這個成本變得好高啊🫠

galuna233: 这样 toncenter 的 indexer 就没法索引到我没有设置owner的那个域名，但是tonkeeper和getgem可以，搞的我们dapp集成显示不好做 (reply to 61300)

zonh: getBalance获取的不是jetton余额么。。我想获取他的ton余额。 (reply to 61316)

Champer Wu: 不是啊,是ton的餘額 我說的不是getMethod 是rpc 供應的api (reply to 61337)

galuna233: 自己搞索引成本还是有点高，请问state 是指？ (reply to 61336)

Champer Wu: 這個我也好奇啊⋯⋯ 我最近也買了.ton 他是有期限的啊 那owner沒有在我身上好像也合理？ (reply to 61334)

Champer Wu: 那時間到了，他要把域名收回，是直接把nft 燒掉嗎？ (reply to 61345)

Champer Wu: https://docs.tonxapi.com/reference/get-account-balance (reply to 61337)

Champer Wu: 看著他倒數呢🫠

Aaron: 哪位大佬帮看看这个合约，是否有安全风险，或者指点一下要注意哪些方面。https://tonviewer.com/EQAn95MspiVx8gP3LieWM55I6tCRUWv7rnTjUBwU4PEqVMuE?section=code

zonh: 感谢两位大佬

Howard: 有人試過指定 shard 的手法在 Smart Contract 了嗎？

Degen: 请问下 nft合集里面的ton可以转出来么

Degen: 标准合约里没有这个逻辑吧

Degen: 卧槽

Degen: 转不出来

Degen: 打进去了100块了

Degen: 🥲

gavin: 测试网吗 (reply to 61361)

gavin: 有些collection 有claim op

gavin: 自己加

Degen: 正式网

Degen: 😅

Degen: 就是加了那个计算的逻辑

Degen: 钱全部留在collection里面了

gavin: 那没了 (reply to 61369)

gavin: @marstomars2024 发下代码哥

Degen: 🤔

Degen: 就是那个代码呀

Degen: 标准合约

Degen: 你们刚刚发的

Degen: https://github.com/getgems-community-tact/nft-template-editable/blob/tutorial/contracts/nft_collection.tact#L38

zonh: @leouvw  大佬再请教一个问题，jetton wallet 的 ton 余额，是不是只能用于支付 jetton wallet 的 storage fee，不能用于支付转账的手续费？ 比如我发起转账时，如果携带的ton设置为0，也不会使用jetton wallet 的余额？

gavin: jetton wallet 就是一个普通合约

gavin: 如果合约里面没有针对ton做特殊的操作  那就只能当作租金啦

gavin: 目前大部分的jetton wallet都是一个简单的合约维护余额, 多余的ton都是躺着

wiwi: 有點難受，有方式可以在 sendTransfer 就計算出 tx hash 嗎?  目前用 cell 方式判斷有沒有發送成功，但是 cell 不能當作唯一的 key 判斷因為 amount 改變其實不影響 cell  例如同時發送兩筆 amount 1 跟 2 因為同時發送所以 seqno 會相同的，這時候你用 seqno 跟 cell 不能判斷出來是那一筆發送成功

Champer Wu: 還沒送出之前就算的出來了 (reply to 61392)

gavin: 每个一段时间就会有人问这个问题

Champer Wu: Cell.hash()可以算出header hash

Alan | Torch: 可以先算msg hash (reply to 61392)

Champer Wu: 但是上鏈的hash要上鏈才算的出來

gavin: 我就奇怪了 什么场景会要求用到这个hash呢

Champer Wu: 就沒啥用 (reply to 61400)

wiwi: amount 不影響 hash 所以也不能 100% 分辨出來 (reply to 61397)

wiwi: 這是怎樣的方式? (reply to 61398)

Champer Wu: Cell.hash() (reply to 61405)

wiwi: 例如 transfer ton 的話，這時候你轉帳的數量不同 cell 也是一樣 (reply to 61404)

Champer Wu: 不一樣吧 (reply to 61408)

Champer Wu: 是不是哪裡搞錯了

Champer Wu: 如果都一樣，那hacker們要笑了

wiwi: 一樣的啊

Champer Wu: 賺它幾個億都是手指動動的事情🤌

wiwi: const internalMessage = internal({         value: amount,         to,         bounce: false,         body: payload,       });        const transfer = await contract.sendTransfer({         seqno,         secretKey: keyPair.secretKey,         messages: [internalMessage],       });  const hash = internalMessage.body.toBoc().toString("base64")   最後的 hash 是一樣的，還是說我寫錯了?

wiwi: 但這問題又回到了沒上鏈前我抓不到....

Champer Wu: 你悟了😂 (reply to 61423)

Champer Wu: Seqno +1成功就可以去query了

wiwi: 我現在就是這樣做的，把一堆東西湊在一起然後去 account tx list一筆一筆比對

gavin: 我记得加过了的 (reply to 61428)

wiwi: 這樣就要把整個請求卡住等他 seqno +1 ，如果中間網路斷掉或是真的 ton 又掛了會危險 (reply to 61429)

Champer Wu: static createExtMsgBoc(         wallet: any,         intMsgParams:{           toAddress: string,           value: string,           bounce?: boolean,           init?: StateInit,           body?: string | Cell         } ,          subWalletId: number,          seqno: number,          opCode = 0       ){         const { toAddress, value, init, bounce = true, body } = intMsgParams;         const intMsg = internal({           to: Address.parse(toAddress), // Send TON to this address           value: toNano(value),           init,           bounce,           body,         });         const msg = beginCell()           .storeUint(subWalletId, 32)           .storeUint(0xFFFFFFFF, 32)           .storeUint(seqno, 32)           .storeUint(opCode, 😍           .storeUint(SendMode.PAY_GAS_SEPARATELY, 😍           .storeRef(beginCell().store(storeMessageRelaxed(intMsg)));                  const signedMsg = {           builder: msg,           cell: msg.endCell()         }         const extMsgBody = beginCell()           .storeBuffer(sign(signedMsg.cell.hash(), wallet.keyPair.secretKey))           .storeBuilder(signedMsg.builder)           .endCell();                       const extMsg = external({           to: wallet.address,           init: wallet.init,           body: extMsgBody         });                       const extMsgCell = beginCell()           .store(storeMessage(extMsg))           .endCell();                    return extMsgCell.toBoc().toString('base64')       }  這個組出來再去拿hash

Degen: 怎么看我这一笔消息里面发了多少条消息

Degen: 我刚丢了160+ 结果只有130+发出去了

Degen: https://tonviewer.com/transaction/2e50d27cc7147e94af7c8cbfa99be5ee2c0a2dc9235df6e22b6fcb663d889675

Degen: 看这笔交易

Champer Wu: 怎麼變成emoji了～”～ (reply to 61433)

wiwi: 我來看看 👍 (reply to 61433)

Champer Wu: 什麼論壇？ 我也想加入 (reply to 61431)

Degen: 节点是不是不接收这么大的请求

Degen: 但是消耗的钱是对的

Degen: 🥹

Degen: 100个 100个来没问题 我搞了167个 只有131个发出去了

Degen: 这个 (reply to 61436)

gavin: 哥 这次又拿主网测试呢 (reply to 61450)

Degen: 🥹

gavin: 太奢侈了

Degen: 但是gas扣是正常的

Degen: 多出来的给我打回来了

Champer Wu: 財大氣粗

gavin: 这个看着没问题啊  不都成功了么 (reply to 61436)

gavin: 而且是主网的 太壕了 (reply to 61458)

Degen: 数量不对 (reply to 61459)

Degen: 🥲

Degen: 我发了167个

Champer Wu: 拿主網在測試的人都值得我叫聲哥

Degen: 只有131个完成了

Champer Wu: 我的tonviewer全部變成俄語了，怎麼回事～“～

Degen: 哪里 (reply to 61467)

Degen: 怎么看

Degen: 截个图我看看

Degen: 我找不到呀

Degen: 🥹

Degen: 感觉是

Degen: 🥹

Degen: 看来还是要去监听有没有到账才严谨啊

Degen: 直接发出去 不表示已经成功了

Degen: 监听一般怎么做，那个合约里面的emit 就是可以被节点捕捉到的是不

gavin: 可以考虑监听 Excess 的code？ (reply to 61488)

Degen: tonapi 是不是有个sse的监听方法 那个可以吗

Degen: 能够同时监听上千个地址？

Degen: 这个。。。还要自己搭节点吗 这个成本太高了吧 (reply to 61489)

gavin: 如果你用了excess 你只需要监听你自己的钱包就行了吧 (reply to 61491)

Degen: 卧槽 这个思路号啊 (reply to 61494)

Degen: 但是监听自己的钱包 我不知道是那个到账了呀

Champer Wu: 怎麼找不到你的那個圖

gavin: 哥 你能拿到tx啊 根据 prve tx 能拿到payload 解析cell 就行了 (reply to 61496)

kevin: sse没法传太长的 url query， 不过 websocket  的参数可以支持 1000 个 account (reply to 61492)

Kim: 这位，又有问题了，我想解析出来在JETTON钱包里面的交易的信息，即想解析出来JETTON的转帖金额 和评论信息，知道在tx.inMessage.body里面，但怎么解析出来呀？TON类库里面要用什么方法呢，tx.inMessage.body输出在控制台是图上这样的信息，应该是一条转帐信息一条评论信息，怎么把它还原出来呀

kevin: 解析 boc 可以的，  jetton 官方提供过 schema 的， 只要按照 schema 读取相应字段就行

Kim: : x{0F8A7EA50000000000000000227108011B3F025A9EFB1FBC5268B4F2E4F5A62D10C1D3EC5F0699005ED53D7210D6199F002983A9BEFDF3BCD7341AEC7FC2F8362684ED4F65DEA54CB25A2CDC99BF89D308861E8481}  x{000000007635746573745F31}

Kim: 就是输出这样的信息

gavin: 我之前发过一个解析的代码

User<6301135112>: 组装boc单独发送交易，不用liteserver (reply to 61284)

User<6301135112>: liteserver理论上同步完成后，后面应该会很快的

User<6301135112>: 我的意思是不用java里面的那个，用外部的

User<6301135112>: ton4j里面应该是liteclient底层使用tonlib，对于业务开发来说太重了，又不是开发一个节点

User<6301135112>: 专注业务，按官方scheme封装交易数据，发送到第三方节点上链比较友好

Evan: ton 生态有好的预言机吗？ 如何实现使用预言机进行加密资产的质押了，然后实现清算相关业务了

Evan: 求大神给实现的思路

gavin: 你们都搞上借贷项目了吗 (reply to 61525)

Howard: 好像最近滿多人做借貸的 (reply to 61530)

gavin: 是的 借贷很赚钱 (reply to 61531)

gavin: 之前有一个lend的项目 你去参考下evaa (reply to 61525)

Degen: 质押的合约有没有例子呀

Kim: 大家有没有关于TON 的CELL结构解析或 序列化反序列化好的文章呀，现在开发就在这块上怎么都绕不过去，做JETTON转帐时，组装BODY，完全是按网上找的代码抄的，根据理解不了，从链上读取出来交易后，想解析出来转帐信息和评论信息，也完全无从下手，看官方文档完全没有看懂，大家有这块好的资料吗？

gavin: 我有 (reply to 61537)

gavin: https://github.com/beyondblog/ton-cell-parser/blob/main/app/components/CellParser.tsx#L49  你先参考这个代码吧, 我回头写一个  核心的逻辑是 先把Cell parser下, 先loadUint(32) 一般这个都是 opcode, 然后根据不同的opcode 找到对应的tlb 规则 然后进行下一步 (reply to 61537)

gavin: 我的这个示例里面给出了JettonTransfer、JettonInternalTransfer、JettonNotify和Excess 的逻辑了

Kim: 太好了，多谢

Dylan: stonfi 和 dedust 哪个好啊

Aaron: 大佬帮忙看下，要上一个合约，发现有部分代码和标准实现不太一样，帮看看是否有安全问题。

Aaron: 左边是合约代码，右边是一个标准的实现参考。

Aaron: 主要是bounce设置不同。

Valoryn: 这么花里胡哨的广告

— 2024-10-01 —

Howard: Bounce 不同不會影響結果。只不過說你設置 false 的話、接收地址如果失敗時 不會回傳值給你。 (reply to 61547)

Shawn: @howard_ton  GM，各位大佬好！我们遇到了一个搜索问题。新用户无法通过搜索来找到我们的群组和频道。  想问各位大佬有遇到过吗？不知是否与收款有关，之前收到Apple政策的通知，我们已移除 Ton 付款，只保留 Stars付款。

Valoryn: 遇到过，但仍然无法确定是什么原因

Valoryn: 今天还能搜索到bot，过了一天又搜索不到了

Shawn: 😅 各位大佬知道怎么解决吗 目前自然流搜索都不显示 (reply to 61620)

User<7106205946>: 我有一个天才的想法，可以做一个项目，这个想法太离谱了，没人会想到。这就像黑客一样——但只有聪明人才能做到。😎  谁能帮我把想法变成现实？

User<7106205946>: 引用： [1] https://docs.ton.org/develop/dapps/asset-processing/jettons [2] https://hexdocs.pm/ton/Ton.Cell.html [3] https://docs.ton.org/learn/overviews/cells [4] https://docs.tonsdk.net/user-manual/core/cell [5] https://docs.ton.org/develop/data-formats/cell-boc (reply to 61537)

User<7106205946>: ttps://docs.ton.org/mandarin/develop/dapps/cookbook https://launch.tonstarter.com/successful-cases/de-dust (reply to 61635)

User<7106205946>: Testnet Address: kQDKbjIcfM6ezt8KjKJJLshZJJSqX7XOA4ff-W72r5gqPrHF Mainnet Address: EQDKbjIcfM6ezt8KjKJJLshZJJSqX7XOA4ff-W72r5gqPrHF (reply to 61635)

gavin: https://github.com/dedust-io/sdk/blob/main/src/constants.ts#L12 (reply to 61643)

gavin: github上有代码 可以看到相关地址

Abubakkar: Hi

Howard: okx wallet 也有 mini-app 了嗎？在哪啊？

Howard: 這個..... 我也不清楚. 剛剛我也查了下、沒看到呢。 (reply to 61620)

Howard: New Dedust Factory for testnet: EQAROb_l-1yGMKjPGUmc0tNjYOsXTKTsucXmhh2Fm9y98z7Y  More details about changes: https://t.me/dedust_dev/3313 (forwarded from Anastasiia)

Howard: 這裏 https://t.me/tondev_zh/61658 (reply to 61647)

Valoryn: 其实我主要担心的是，当全局搜索搜索不到的话是不是意味着频道或群组是有问题的 (reply to 61656)

Valoryn: 还是仅仅是telegram的问题

— 2024-10-02 —

Jake（打款先语音确认）: I see the number of exchanges has remained at 63. Are they still accepting new users?

Jake（打款先语音确认）: 交易所我看一直停留63家，是否还接受新用户

증식엄: @OKX_WALLET_BOT (reply to 61655)

Howard: nice 好像還沒做好、應該後面會是 MPC wallet (reply to 61700)

증식엄: 这个看起来是原web3打包后适配的，他们已经是大公司了，估计没能力维护多端产品 (reply to 61702)

gavin: 这个看着没对接ton connect ，要是能接上ton connect 就好了 (reply to 61700)

증식엄: ton connect不会支持多链的，okx自己搞一个兼容ton connect的sdk也可以

jay: 他们再搞了，app connect (reply to 61706)

증식엄: app connect是连app的，还得再搞一个miniapp connect

jay: 应该不需要。

Sergey Haiduk: We need a person who disassembles for the bot in TG and servers, urgently

Rohit: I am not seeing the option for the testnet in the TON Keeper wallet, even though I have enabled developer mode. If anyone knows how to resolve this, please let me know.

Aaron: 这个可用用queryid来贯穿。 (reply to 61496)

Champer Wu: 有人嘗試過造跨鏈橋嗎？ 剛剛在英文社群遇到了有趣的題目，除了這個老哥的實作方式，有沒有別的方式來實現這件事情啊？

Champer Wu: okx wallet也出mini app了！ (reply to 61702)

Valoryn: okx的miniapp是什么情况

Valoryn: 是他支持telegram的miniapp钱包的调起吧

Champer Wu: 看起來就是他們的web 3錢包 (reply to 61737)

Champer Wu: 跟 web extension 看起來沒有區別

Valoryn: 那跟钱包的浏览器有什么区别，似乎没有

Valoryn: 应该只是说okx支持连接telegram钱包

증식엄: 看ui就是从同一套代码打包出来的

Valoryn: 入口在哪

Valoryn: 手机端的okx web3钱包吗

증식엄: 我上面发的

Valoryn: 原来是okx钱包做上了mini app

jay: connect 协议的逻辑应该就是通过 deep link 和 walletapp 交互。

Na: 请问下，我已经走到sendTransaction 这里了，怎么打开wallet 进行支付，就是自动弹出窗口支付，我可以手动打开，但是感觉有点不正常。

Na: 这个按钮做了什么事情啊

— 2024-10-03 —

kevin: 请教一个问题， @tonconnect/ui-react connect钱包后如何进行 usdt支付，有示例吗？大佬们？

Howard: https://t.me/devs/78121  他的意思是現在搜索 BOT 本身還沒優化好。必須打全名。 (reply to 61631)

Shawn: 谢谢 Howard！我们测试群和频道可以被搜，主群和bot现在搜不出来。感觉是系统限流了，不知道是不是跟Payments有关。我跟Xin联系一下～ (reply to 61818)

wikig: wget 下来把收款地址换做自己的即可 https://test.tonspay.top/test.html (reply to 61807)

Valoryn: 可能过几天又搜不出来了 (reply to 61819)

west: 搭建ton-connect桥  使用此包 https://github.com/ton-connect/bridge  它不是跨链桥，而是用于连接ton dapp和钱包的桥

Y: 💰重金求助 帮我写一个 ton connect 签名程序 (要求使用python实现) 验证网站: fragment.com 参考签名过程(tonkeeper源码): URL  具体过程: 1. 当在fragment 点开ton connect登录窗口, 并选择钱包时, 会有一个event向bridge请求一个client_id 2.点击打开钱包后网页会向钱包发送一个包含 client_id和payload的消息, 3.钱包会根据这两个参数进行签名, 并把结果发送给bridge(包含了上面的client_id作为参数) 4.网页监控到bridge的event转发来的签名信息后会登录成功.  要求: 步骤1,2,4不用python实现 我只需要把步骤2中的数据转入给python时, python签名后发送给event服务器, 并且网页确保能成功登录. 简而言之, 用python实现你要在钱包上点授权第三方登录的过程.  酬劳: 5000RMB 等值USDT.

gavin: 这是什么操作？想做fragment的自动化？

Y: 不是,, 有些账号,,  手动登录钱包太麻烦,,

Y: 好几个 空投网站 都需要钱包登录,

Y: 每个网站的ton connect都是一样的,  只是拿 fragment做验证,

Y: 你能搞定?

gavin: 明白了，相当于是要模拟wallet client 处理ton proof的签名验证

Y: 是的,,

Y: 我自己也试过,, 但是签名结果总是不对,,  不知道问题出在哪里,

Y: 按照官方文档做了, 也没有成功,

gavin: 是的，你这个思路没有问题

gavin: 我这几天在没时间，先看看其他人能不能搞定吧

Y: 好的,, 谢谢,, 如果能搞定 我在额外给你个介绍人红包 😁

Y: github上 tonkeeper的源码 应该是很清楚的,, 只是我太菜,,, 哎.

User<5022752803>: Assalamualaikum

寄托（全国可飞）: 用c++ 生成tron地址和助记词，要求用gpu加速，速度达到1秒1亿个地址

satoshi: 想问一下，我想申请test ton coin，但是那个bot给我图片我点不了，没办法拿test ton coin。我还被那个bot给block，请问该怎么办

west: fragment爬虫谁能写

Zahid: Hi

— 2024-10-04 —

User<7136299467>: 👋

Bruce Lee: Hi

Bruce Lee: 合约里面的USDT ， 大佬们都是使用什么方法提出来的

Bakary: Salut

yu: 麻烦问一下 ton扫链，是用的这个接口么

yu: 每次给 后面的block+1？

kevin: 感谢，我试一下，有问题再请教您🤝 (reply to 61824)

jun_song: 请问下forward_payload这个字段里的内容如何解析呀

Wick李: 完成了吗？ (reply to 61842)

Y: 没

Wick李: 没问题的，我帮你做

Wick李: 你应该是做撸毛的吧

Y: 什么时候开始?

Y: 对,  这个钱包登录 需要的网站很多,,

Wick李: 明天吧，今天还在过节

Y: 私聊吧

jun_song: 有大佬帮忙解答下吗 非常感谢 (reply to 61932)

kevin: hash 提供下看看 (reply to 61944)

jun_song: 82d01ac072d55f839704ee3c813482bdd296713feca036bb72f40496ebf98dd4

jun_song: 主网的交易    就是备注的test1 (reply to 61946)

kevin: 请问ton 支付交易返回的boc ，如何跟区块链上支付的交易记录匹配上啊？ 试了好多种解析出来的结果，都跟 交易记录里字段匹配不上

live: 你可以试试用tonapi获取交易，它应该是会自动解析的 (reply to 61932)

live: 大佬们，DOGS合约地址最后的四个字符是“DOGS”，这是咋个弄的啊？有人清楚吗？

QSO: 用脚本跑随机数，硬随机到的？ (reply to 61959)

loyce.eth: 大佬们好，我在解析boc的时候遇到个问题，tonconnect发送同样一笔交易v4钱包和v5钱包返回的boc格式还有区别，请问下这个哪里有文档介绍吗？

loyce.eth: jetton转账的交易

jun_song: 请教下这种messgae如何用tonweb解析呀

live: 好吧！还以为有什么特殊的算法来着 (reply to 61960)

Valoryn: 那么注册时间是怎么得到的

live: 你这是哪条交易啊？我试试 (reply to 61968)

sponge: 有没有哪位大佬知道 V3 的 API 获得的交易是已确认的么，有可能回滚么

Howard: 可以參考 cell 字符串解析的內容 (reply to 61968)

Howard: 我理解是不會的 (reply to 61981)

— 2024-10-05 —

jun_song: 请问下用啥方案去获取咱们10000个用户地址的交易记录呀，比如获取咱们用户转usdt、转ton、swap交易等，没有搭建节点，用什么方法方可以获取到这些交易记录呀

jay: 找现成的api，tonapi，toncenter tonxapi 等等。

jun_song: toncenter同时查两个地址的转账记录就报错

jun_song: 有知道解决的吗🙏

live: 有大佬知道tact版的Stonfi吗？dex就行

Na: 大佬们，请问下，有没有办法打开 wallet 的ton 空间的 支付确认页面

Na: 我是用的js sdk 的，然后现在创建 转账的订单是正常的，但是没有办法直接跳转到钱包打开。

kevin: 链接账户，再调用open方法就可以打开啦

live: 大佬们，有人知道这个函数的功能吗？它似乎可以一次发送两种Jetton？

Kim: 各位大神，我用tonconnect/ui来做用户向我帐号的支付功能，之前已经钱包已经确定连接成功并能读取出来的钱包地址，运行这段代码，钱包就提示：confirm the transaction in wallet it will only take a moment，然后就一直在转圈，没有结果，这是为什么呀

dkdn: 谁做了推特API接口

kevin: 前面钱包授权做了吗？ (reply to 62040)

User<7329446028>: 😭😭😭😭😭😭😭😭😭😭  🎁 HAMSTER SPIN - Opportunity to win valuable prizes from Telegram Numbers up to 50k $HMSTR  🎁 And that's only 3% of what we plan to do later. Promotion is limited! Act fast...  🎁  CHECK BIO 🎁

User<7317019792>: 🍀🍀🍀       🐏🍀🍀🍀🍀🍀🍀  🏳️Don’t miss your shot at an easy crypto boost!🏳️  🌐Claim 1,OOO tokens and start building your portfolio!🌐  🔥The TON ecosystem is growing, and now is the time to join it and harness its potential!🔥  🤑Earn 1,000 tokens today and take the first step towards future earnings!🤑  ⏱ Hurry, this offer won’t last forever — act now!⏱  ➡️@toncoin_reward_bot

Parisa: 😀😀😀😀😀😃 🐳 Limited edition game by 🐳! ⭐️ Spin the wheel and earn $Whale tokens! 🐳 Invite friends and earn even more tokens! 😀😄😃😃😁😆😁😀 ➡️@WHALESPINSBOT ➡️@WHALESPINSBOT ➡️@WHALESPINSBOT

— 2024-10-06 —

Kim: tonConnectUI = new TON_CONNECT_UI.TonConnectUI({                 manifestUrl: 'https:/xxx.xyz/tonconnect-manifest.json',                 buttonRootId: 'ton-connect'             });我前面只有这一步呀，会出来一个钱包按纽，然点后连接跳出钱包可以连接上并且能显示出来地址，还有一步单独的授权吗？ (reply to 62050)

Kim: 各位，我在官方文档看到的，使用tonConnectUI转帐JETTON的代码，但我实际按照这样开发时，发现按代码，body是个Builder，这是tom类库官方文档的定义：beginCell(): Builder，Builder根本就是没有toBoc（）这个方法，根本运行不了，那这块要怎么做呀？我的代码是这样的:

Kim: 提示没有toBoc()方法报错

wadaxiwa: 有小伙伴知道与合约做交互，怎么个流程吗，或者有案例分享不。除了转账的。

SunG: 大佬们，请帮我一下怎么用Dedust SDK实现测试网上进行deposit和swap jettons

User<7148949927>: 没有测试网吧 (reply to 62100)

Howard: 有人試過 CloudStorage 嗎？這做什麼用的; https://core.telegram.org/bots/webapps#cloudstorage

jay: 看描述是local storage的云端版本。

jay: 能够跨设备少量存储用户数据。

wikig: 看起来是为了解决移动端内置的无头浏览器不做用户localstorage状态存储问题提出的替代方案吧（话说啥时候出的，咋之前没见到有） (reply to 62111)

live: hello！我想问问tact循环中没有break吗？

Howard: 沒 Gas 就會 break 了..... (reply to 62122)

Howard: 我記得以前沒有寫 bouce 會產生死迴圈就是了。後來好像修復了。

live: 那循环想要中途跳出岂不是只能写在条件中了？

User<6323497659>: Hello! I am a senior UI/UX designer with experience working with Ocean Kombat, Blum and other projects. Ready to take a leadership position in a project or make a one-time design for your child’s Web3! Contact: @slacked Providing a portfolio upon request

gavin: 确实没有。。。func 也没有 (reply to 62122)

gavin: 但是TVM有SETEXITALT指令,未来可能会支持吧

— 2024-10-07 —

jun_song: 兄弟们 请问下  ton这个链多久产生一个区块呀  一个区块内的交易数量大概多少呀

jun_song: 区块浏览器咋看不到🙈

Yuton: 请教下各位大佬，机器人怎么才能公开显示月活呢？上周用户活跃有明显提升，但是依然没有显示。

Ton: 到达下限就显示 (reply to 62190)

Ton: 大概2 3w?

Yuton: 下限是多少呀？ (reply to 62191)

Yuton: 好的。谢谢大佬。

小鸡毛: 有没有做镜像的大佬

Ginta 🦴: 什么镜像，docker？ (reply to 62200)

allen: 大佬们，linux服务器，builder tonlib的时候，这一句代码一直卡起是啥原因？大佬们遇到过吗？

Crypto sniper: 有没有做后端的 一起学习啊，我是做游戏前端的

Elizabeth: Okay (reply to 62211)

Crypto sniper: 我是币安的博主，最近在学习ton开发，有没有兄弟一起啊，互相帮助

Crypto sniper: 自己研究有点不懂

Crypto sniper: hi (reply to 62212)

Crypto sniper: 有没有开发者教程啊

Crypto sniper: 咱们有没有合作引擎 推荐 (reply to 62111)

小鸡毛: @ginta_xx gpt镜像的 不需要翻墙

— 2024-10-08 —

Luka: Hello, looking for savvy developers on TON   Scammers - don't even try to write, I don't fall for your tricks)

Mana: 学写合约如何入手啊

Mana: 😹

jojo: in_msg_body~load_uint(256)什么意思？

Mana: 你也刚学啊 (reply to 62280)

Mana: 😹😹

jojo: 是的哈哈哈哈哈

Mana: 哈哈哈

Mana: 有点难度哈

jojo: 完全看不懂

Mana: 靠北了

EncryptPecker（-25s->100s）: 群里有人方便转点usdt测试代币给我嘛？

Mana: 我给你吧

EncryptPecker（-25s->100s）: 嗯嗯，谢谢哈

EncryptPecker（-25s->100s）: 再问问哈，群里有人方便转点usdt测试代币给我嘛？不是ton测试代币。小白，不太会自己部署合约上去增发usdt😂

jay: https://minter.ton.org/ 自己去铸造。

jay: 大家知道如何根据一个transaction id，把整个交易树聚合起来么？

EncryptPecker（-25s->100s）: 收到，谢谢分享 (reply to 62293)

Y: 大佬们想问问手机怎么装中文包

kevin: 你怎么拿到 transaction id？如果能拿到肯定是可以的 (reply to 62295)

jay: txid很好拿，直接查钱包的交易记录就有。

Alexander: 请问在钱包里，“未验证的令牌”的文字，要怎么取消

gavin: https://github.com/tonkeeper/ton-assets/pulls (reply to 62309)

kevin: 哦，这个，那是我理解错了，以为是boc查记录 (reply to 62307)

jay: 之前以为是靠prev hash，结果不是。

Vicki: 小白问下 js 调起支付  tonConnectUI.sendTransaction 之后，后端怎么去获取这笔交易信息？

jay: 单独抓每个交易之后，想做关联。 (reply to 62314)

jay: 要对消息内容做hash 么？ 纯粹一个大对象比较不太好。

Vicki: 查是通过api查么？ (reply to 62320)

jay: 我原本以为会有一个 message id（hash）

jay: toncenter 和其他api 服务都有。 (reply to 62323)

wiwi: 上鏈前不會有，但問題是上鏈你也不知道是那一筆 (reply to 62324)

wiwi: cell 可以塞 query id 我是用這個自己塞資料判斷

jay: 就是没看到 message id

jay: https://docs.ton.org/develop/dapps/cookbook#how-to-find-transaction-or-message-hash

jay: 上链拿到任意一笔交易，理论上通过 message id就能串联出来。 (reply to 62326)

jay: 这样有可能会存在重复吧，想通的 inmessage。

jay: tonapi 的 trace 接口能构建一个交易树。

jay: 这个不太理解为啥 ton 不带这么个 id。 (reply to 62337)

jay: 常规设计个分布式系统，基本也会有个 trace id~

jay: 当前好像就 ton 比较难。其他链暂时没遇到这个问题。

yan: 这个令牌如何验证

jojo: 合约地址如果是512位有什么影响？

gavin: https://github.com/tonkeeper/ton-assets/pulls 去这里提交issue (reply to 62350)

Degen: 来个财富密码 (reply to 62213)

Degen: 来个财富密码 (reply to 62213)

Mana: 这是为什么为什么钱包连接不了

Mana: 节点问题吗

Mana: 可以获取钱包的啊

zhixing: 为什么我这个一直报错 Invalid address. Got UQDh    无效的地址,都是按文档来的,是还缺少什么吗

zhixing: 对接的  @wallet 接usdt 有懂的吗😥

Na: wallet

Na: 有没有对应的接口可以获取ton到usdt的汇率的啊?

EncryptPecker（-25s->100s）: 问一下,我本地运行的网站（比如192.168.3.333这种）发起一笔交易，提示我无法验证交易，这是什么情况呢？

EncryptPecker（-25s->100s）: 一直提示这个

wikig: 会不会是https问题 (reply to 62383)

EncryptPecker（-25s->100s）: 我也在想这个问题，明天验证一下

EncryptPecker（-25s->100s）: 再想想，如果是https的问题，那本地开发业务进行测试怎么搞哦😂

CICI: tonConnectUI.sendTransaction  界面一直在loading， 也不跳到钱包那边，是因为网络问题嘛

Crypto sniper: 哈哈 (reply to 62361)

Crypto sniper: 这个不是开发群吗

Crypto sniper: 学习资料在哪里

Crypto sniper: 我想学习一下 然后教我的粉丝们

Crypto sniper: 有没有大佬 交流交流

Crypto sniper: 我们可以在币安举办 TON开发者交流会

Crypto sniper: 有感兴趣的嘛

Wild: Hello! Is it possible to track closing TG app event? We need to sync user data wen user closing mini app

wikig: i think it should have such method to listen the event ( because it have a confirm enable method (reply to 62435)

Wild: Can't find yet (reply to 62436)

— 2024-10-09 —

live: 大佬们，用bluePrint测试的时候，要测试合约一个函数向指定地址发送了内部消息，该怎么测试啊？有没有相关的例子?

live: 目的是要该函数成功发送指定的内部消息

User<5451215282>: 最火稳定像木 日挣3k 无套录 先给利润 后回款 见我个认签铭 @qin669922

User<5451215282>: 最新曝俐搞米方试 1小时挣1-3k 见我个认签铭 @qin669922

aier: 你这不行啊，才日挣3k, 我们币圈随便开个合约都比这赚的多

aier: 管理员出来干活了

Champer Wu: 這只能上測試網測試吧 (reply to 62457)

熊猫头: 文件名字不对  tonconnect-manifest.json，不是manifest.json (reply to 62366)

EncryptPecker（-25s->100s）: 请问一下，http不支持发起交易的吗？

gavin: 支持的啊 (reply to 62470)

EncryptPecker（-25s->100s）: 那就奇怪了，wallet一直提示无法验证交易，看了它们链接关于无法验证交易的问题文档，也看不出什么问题。

EncryptPecker（-25s->100s）: 难道是钱包还需要做高级认证吗？我现在钱包是基础版认证的

wikig: 应该不是吧（毕竟 ton space 不是独立的嘛 (reply to 62476)

gavin: 不需要 (reply to 62476)

gavin: show me code

EncryptPecker（-25s->100s）: 一直都这样子，也没报错

gavin: 你用ton keeper钱包试试先 (reply to 62484)

live: 好吧 (reply to 62465)

EncryptPecker（-25s->100s）: 交易代码就这么点😂

EncryptPecker（-25s->100s）: 嗯，我去试试 (reply to 62486)

gavin: 写 spec 脚本就行了啊, blueprint 自带沙盒环境 (reply to 62456)

Jacob: 怎么精确控制发送给对方的ton的数量，例如A发给B 5个ton, B精确的得到5个ton？ 也就是说能精确估计出来所有的费用（例如， storage fee， fwdFee, executeFee等）

wikig: 一般这样都是payload构造有问题 (reply to 62483)

EncryptPecker（-25s->100s）: 嗯？好的，我看看

zhixing: 有好心人能帮我看看我这个payload构造有什么问题吗?我也是报错无法验证的交易😅

User<1496299585>: 请教下   bot怎么做事件推送呢？

User<1496299585>: 应该去查哪个api的文档

User<1496299585>: 我们想实现游戏发送体力的时候， 提醒玩家上线

EncryptPecker（-25s->100s）: 还真的是payload的问题，我注释掉payload看到交易了😂 (reply to 62492)

gavin: https://core.telegram.org/bots/api#sendmessage (reply to 62495)

gavin: 哦 你的payload 要用cell (reply to 62498)

gavin: 不能用普通字符串

User<1496299585>: 谢谢 (reply to 62499)

EncryptPecker（-25s->100s）: 嗯，看了到这位兄弟的写法了 (reply to 62494)

zhixing: 这个 (reply to 62503)

zhixing: 能帮忙看下我写的接USDT的payload有什么问题吗,完全按照文档来的啊😅 (reply to 62501)

gavin: 看着也没啥问题呃。。。 (reply to 62505)

allen: 大佬们，基于ton4j，怎么根据交易hash，去查询交易是否成功？

zhixing: 这块是用原始地址还是友好地址?

gavin: 都行 (reply to 62509)

sakura: 余额不足会影响验证不？

备用: 大佬们, 为什么计算usdt的钱包地址的操作与一般jetton的不一样啊?

备用: 没明白status=0是什么意思,为啥要在usdt里面指定,而一般的jetton不用指定

jay: 这是合约自己的逻辑，不用特别管。

备用: 我印象里usdt应该也是一个jetton,没想到这里还有区别😂

gavin: 害 就是 usdt的jetton wallet 支持 黑名单的功能 (reply to 62519)

gavin: status控制的 所以不一样

gavin: usdt的jetton master 可以控制每个wallet的status 来锁定账户

备用: 那我应该如何判断notify过来的是usdt还是其他jetton呢?

备用: 我做一个swap,需要判断充进来的是usdt还是我自己发行的jetton,以便后续逻辑处理

gavin: 一个思路 notify里面预设下 usdt 的 code 然后通过 calculate 计算address 然后对比？ (reply to 62524)

备用: code可以直接初始化进去,但是感觉对于判断usdt来说没有意义啊. 因为你先要知道这个交易是来自usdt wallet的,然后才能用带status=0的data来计算address,非usdt wallet的,就用不带status=0的计算

live: 是的，我是在沙盒环境测试的，但我不清楚如何去检查它发送的这个内部消息是否正确😂 (reply to 62490)

gavin: 沙盒能得到transaction list 么 里面能得到message 去解析就好 (reply to 62530)

live: 😂行吧

备用: 意思是带status不带status的都算一遍? 那即便是最简单的两个jetton的swap, 也得算4次哦😂 (reply to 62529)

gavin: 你这个是swap 的router逻辑么？

gavin: 或者你参考 swap pair的设计思路呢  你有两个jetton 那你就创建两个pair, 每个pair 处理特定的jetton  最终通知回你的swap

备用: 不知道,没仔细研究dex的代码. 我要先判断过来的jetton是换入的还是换出的(假定最简单的swap里面的换入换出的jetton是固定的) (reply to 62536)

备用: 是啊,照理说既然是标准的jetton,就不应该做特化处理 (reply to 62539)

备用: 这样是不是在pair里面只算一次,但是router里还是要判断一次用哪个pair吧 (reply to 62538)

备用: 不懂,麻烦指点一下🤣 (reply to 62544)

gavin: 但是这样能解决你的问题, 哈哈哈   判断pair就好说了啊 因为pair是你自己的合约很好判断吧 参数都能统一 (reply to 62545)

备用: 我自己做的一个简单的swap,里面的两个jetton是固定的,比如usdt和自己发的x. 刚开始添加储备的时候,需要转x进去,后续做swap的时候,就转usdt进去,拿到x出来. 这两个方法都是通过notify进来的.如果不考虑forwardpayload里面带op的方法, 那就要通过计算address来判断是在充x还是在swap. (reply to 62544)

CICI: message里的address 试试用jetton address，通过jettonMaster 得到 (reply to 62509)

备用: 这里写死的jetton wallet是指swap合约的jetton wallet吗? 但是我希望不同的用户都能用这个合约, 只是swap的两个jetton币种是固定的 (reply to 62549)

备用: 明白了,我相叉了,感谢!  还有G兄, 感谢! (reply to 62554)

live: 大佬们，我尝试测试router给pool发送第一次添加流动性的消息时，为啥pool正常部署但pool中的Reverse没有变化呢？（单独给已部署的pool发送添加流动性的消息是会变的，但由router过去的就不变）

Evan: EQCZFB7iE8OHur1X_GnwmLRQAMEO4tTRzo06a3yU7RQftgaO get_nft_data {   init: -1n,   index: 13n,   collectionAddress: EQDdkoojy93j_UFaFpvuD9GszgNMPRW0ySZXg_CcfJU11Kqy,   ownerAddress: EQBGFxPe2VYIsGgGf7n7WIt8yEmtTU9e-fUSIsH6qidmVvRW,   type: 49,   url: '3/meta.json' } 其中 type: 49, 是什么意思？ url: '3/meta.json' 是个相对地址哪里的？ 怎么和 官方的标准协议不一致了，不是 0 和 1 吗？

Evan: 谁做相关nft 的 metadata 是怎么搞的？

Evan: 有些 type, 还是 50

EncryptPecker（-25s->100s）: 你这个截图的usdt转账能跑通的吗？ (reply to 62509)

zonh: 请问大佬们，usdt地址生成和其他的jetton地址似乎不大一样，我一直无法派生正确的地址。。 有好的思路么

wikig: 啊？为啥不一样，都是jetton啊 (reply to 62570)

备用: 看这里 (reply to 62515)

zonh: 不一样，合约代码有区别 (reply to 62571)

zonh: usdt在构造pack_jetton_wallet_data不需要合约代码

zonh: 这个方法calculate_jetton_wallet_state_init是构造state_init的吧，我看其中用到了pack_jetton_wallet_data的方法

zonh: 然后usdt的pack_jetton_wallet_data方法中没用到jetton_wallet_code

zonh: 这两边构造state_init的规则不是也不一样么。。那我理解地址规则就是不一样的。jusdt的地址，我可以直接构造出来。 但是usdt不行

Evan: 我使用自己的域名mint nft metadata 的json 访问地址 ,不显示metadata, 所以参考另外一个 https://tonviewer.com/EQD9VQOdOWbtpLe5EwGs-DGLKiadFjz-DUsiNp7OevzP2Ed6?section=nft 是按标准协议mint的nft，也不显示metadata，返回格式如： get_nft_data   {   init: -1n,   index: 3n,   collectionAddress: EQBJMZgCEnJbK5DDCQonIYznAJtVLytioOnFD7VHbHG3zvTl,   ownerAddress: EQAiCw1netQ5ZQWbWgmXUppSteIjkxHIAq0SOvbv9TtmQdgf,   type: 1,   url: 'https://potok66.pages.dev/nft/13.json' }  但是这个metadata可以显示出来，一模一样的 https://tonviewer.com/EQDHK1p8vuAdf9YSqgV6j5nqOW95pztK-4gEBNHFkSLXWLeY?section=nft  是不是现在 tonviewer  有什么潜规则了，不显示某些域名的metadata了

gavin: @leouvw 你看明白了没, 其他jetton的wallet 里面存了 code 而usdt 的wallet 里面不存code (reply to 62589)

gavin: 因为usdt的 jetton wallet的func 代码里面 用了 MYCODE的指令

gavin: 这样能节约一点存储成本

gavin: 第一波人在实现jetton的时候没有MYCODE指令 所以要存

gavin: 后来的人实现的时候 有这个指令了 就不存了

gavin: 是一样的， 他不是纠结那个jetton_wallet_code么 (reply to 62596)

zonh: 那也就是说 地址生成 和 state_init 里面的 data一点关系没有嘛😅

gavin: 有关系 (reply to 62601)

zonh: 那既然有关系，塞了code和没塞code的hash，我理解肯定是不一样的呀。 有点迷糊

zonh: 对的，这个结构我理解。 我没说明白，链层次规则没变化，都是jetton wallet类型，但是业务层不一样了。 我意思是有些jetton钱包的data中塞了code（如jusdt），有些没塞（usdt）。 那我用代码实现去生成地址的时候，两边实现的逻辑不就不一样了嘛。 比如说我用jusdt的逻辑去生成usdt的，就无法正确生成😂

zonh: 还有我不确定是不是我塞的wallet code有问题，usdt的wallet code特别短？

zonh: b5ee9c72010101010023000842028f452d7a4dfd74066b682365177259ed05734435be76b5fd4bd5d8af2b7c3d68   就这么一丢丢

EncryptPecker（-25s->100s）: 再请教一下，想执行转usdt的，但这里的代码有问题，但不知道在哪里参数填错了。

zonh: 了解，感谢。 我再研究下，目前我没办法根据tg给的 owner address ,配合usdt wallet code + usdt Master address 生成和 tg 一样的 usdt wallet address (reply to 62612)

备用: 大佬们,问一下,在ton合约上记录交易记录,有什么比较推荐的方法吗?还是说不推荐将交易记录这种数据写在合约上?

brian: 大佬们，问一下golang中怎么确定ton上的一笔transaction是成功还是失败？ 我用的是tonutils-go这个包，看了一圈文档，好像没有看到类似于eth上的status字段。

gavin: 根据你的业务, 你可以拿到tx里面的  exit code 在 message description里面 (reply to 62621)

live: 大佬们，tact中比较两个地址是否相同可以直接用==吗？

gavin: 每天都有人来问这个

gavin: yes (reply to 62623)

brian: 谢谢 (reply to 62622)

Vicki: 问下 cocos 3.8 里面 使用 toweb 来发起tg钱包USDT转账，会报错

brian: 我试了试，tonutils-go解析ComputePhase是空的，而我用tonapi.io查是有值的 (reply to 62622)

zonh: 我用的java

zonh: 哪里不对么

zonh: 使用不能生成正确的地址

brian: 它把ComputePhase解析成ComputePhaseSkipped而不是ComputePhaseVM。

brian: 那也行 (reply to 62645)

brian: 我只是对ton的一些字段含义不是很理解

brian: 这是一个测试网机器人给我发了2个ton的交易

brian: transaction: LT: 26725328000003, In: 2 TON, From EQCSES0TZYqcVkgoguhIb8iMEo4cvaEwmIrU5qbQgnN8fmvP, Comment: https://t.me/testgiver_ton_bot

brian: 这是测试网的交易哈希： 746AA9D08540713EEC53646655ED216F5CACCC6CDA042D6BD865FE6B8A2C4C1C  账号是：   UQCwxyBrDh2FL3MycXF0-XgInMp1aMbND_1SIggGS2cVjAlV

Evan: 那个高人，自己部署nft  metadata 搞死我了； 是不是有什么潜规则了, 怎么搞都不显示

zonh: skip == true 的时候不一定失败吧。 如果to地址是新地址，skip 好像是为true的 (reply to 62647)

zonh: 可以说是一毛一样了，真搞不懂😭 (reply to 62640)

k: 各位大佬好，有查詢 如何安裝ton智能合約環境，但查到的通常是mac ，或是windows安裝Ubuntu ，請問windows11只能安裝虛擬機去開發嗎？

k: 謝謝

zonh: 哈？？？ 这个ton真的好多奇怪的设计 (reply to 62662)

Evan: 我自己部署按官方文档标准介意进行部署， metadata 在 tonveiw 解析不出来，然后我把一个其他可以正常显示nft  的 individual_content copy 过来，还是不显示。   我的， individual_content ： 1,URl , 其中url 是我定义的URL 按标准格式返回metadata;   这个是我的 ：https://tonviewer.com/EQD9VQOdOWbtpLe5EwGs-DGLKiadFjz-DUsiNp7OevzP2Ed6?section=nft 这个是其他人的： https://tonviewer.com/EQD9VQOdOWbtpLe5EwGs-DGLKiadFjz-DUsiNp7OevzP2Ed6?section=nft

Evan: 两个NFT 的 individual_content 是一样的

zonh: 我看他算完，连hash (reply to 62665)

zonh: hash(state_init) 都不一样

zonh: 是4 (reply to 62671)

zonh: 我是想先拿hash，hash和链上对上了，再去处理友好地址。 现在hash都对不上😱 (reply to 62672)

zonh: 这个使用state_init计算hash的方法应该没问题，ton地址和普通的jetton地址都可以正常算出来

zonh: owner address : UQBdqqpTrNxcaRrsCJvS5gtjjAWotIrVuYWXQObFZnjUINVq jetton wallet address: EQDcw9ApW-C3hp53la-zFSq4VDNPK2yZ1qo-jy26Tw8F_JSN

zonh: 实际正确的地址应该是 usdt jetton wallet address 应该是 EQAatu2N232etRFiX8ad-fSdRQgtDunPD9p3ZK2vZDY9uVyZ

zonh: 这个方法可以算出原始地址的hash

zonh: 大佬，我确认下 usdt 的wallet code 是这个没错吧，b5ee9c72410101010023000042028f452d7a4dfd74066b682365177259ed05734435be76b5fd4bd5d8af2b7c3d68c9ac677d (reply to 62679)

Lee: 大家用的是tract 还是func啊？

Lee: 这不是java吗 (reply to 62681)

live: 快速开发用tact，不急用func吧，可以更细致 (reply to 62685)

Lee: 搜噶，刚入行 还是个小白

Lee: 谢谢

zonh: 这里，浏览器查的 (reply to 62686)

zonh: b5ee9c72010101010023000842028f452d7a4dfd74066b682365177259ed05734435be76b5fd4bd5d8af2b7c3d68  b5ee9c72410101010023000042028f452d7a4dfd74066b682365177259ed05734435be76b5fd4bd5d8af2b7c3d68c9ac677d   多了一串 c9ac677d

zonh: 但其实不影响结果，我试过

zonh: 两个的结果，算出来是一样的东西

备用: 如果notify过来后合约执行报错,如何回滚之前的jetton转账交易呢?

备用: 那应该如何处理呢? 再发一笔反向交易?

zonh: 太多了，杂乱的代码 (reply to 62698)

备用: 好吧

zonh: Jetton Internal Transfer 动作之后，只要不被回弹，就一定成功的吧

zonh: owner addr: UQBdqqpTrNxcaRrsCJvS5gtjjAWotIrVuYWXQObFZnjUINVq jetton master addr: EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs jetton wallet code: b5ee9c72010101010023000842028f452d7a4dfd74066b682365177259ed05734435be76b5fd4bd5d8af2b7c3d68

zonh: Address 和 MsgUtils都是 ton4j sdk里面提供的方法。

zonh: 还有Cell

Vicki: 有老哥 用 cocos3.8 搞了调钱包转USDT的代码么？求一段...  感谢

gavin: 有的 (reply to 62720)

— 2024-10-10 —

Mana: 兄弟们我这个mint大概哪里出现了问题

Mana: https://testnet.tonviewer.com/transaction/84a6a05835573fe4c1e2c9a36941f6fdeeb6ba94169619a9ac271d6a83eb724b

Mana: 为什么最后又是B了，B好像是claim的合约地址

live: 你这不是Jetton的mint吧？ (reply to 62770)

Mana: 😭😭

Mana: 反正就是领取

live: 这是触发JettonTransfer消息的回弹了 (reply to 62772)

live: 要做空投吗？ (reply to 62776)

Mana: 我刚学，

Mana: 不是，就是让别人领取我的代币

Mana: 😭😭 (reply to 62778)

Mana: 唉，搞了一天也没整出来

Mana: 🥹🥹

live: 你等等，我之前做过

Mana: 私聊嘛

EncryptPecker（-25s->100s）: 你们在做发起交易的时候，需不需要提前查询一次gas费用呢？

jay: 需要通过交易激活。 (reply to 62791)

zonh: 是的。 大佬你有之前写过的代码可以正常计算么 (reply to 62716)

Mana: 这怎么解决

Mana: 加上这个，已解决

Mana: Holder address 怎么转化为jetton wallet,

jay: https://github.com/hstarorg/tonkit (reply to 62801)

Nadica: https://github.com/hstarorg/tonkit.git

Nadica: https://github.com/hstarorg/tonkit.git

Nadica: pnpm cs

Vicki: 这种情况有遇到过么？

diwo1: 这个情况不同步 应该怎么处理呀

diwo1: 大佬能帮我看看吗

Abe.: 有用java做过助记词转地址的么 研究不明白了

Abe.: ton4j生成的地址跟钱包不一样阿

Abe.: 有人么

w: walletId是多少，试试698983191这个默认id (reply to 62829)

Abe.: 试了

Abe.: 去浏览器查也是这个191

Kai: 你好，我是Twendee公司的Kai，来自越南。我们公司已有将近十年的科技经验，专注于区块链解决方案、软件开发，以及类似“点赚”、交易机器人和钱包等Telegram小程序的开发。我们最近的成功案例包括、Purrfund（4万用户）和DFantasy（3万用户）还有等等。  我们非常期待和大家交流合作的机会，欢迎联系我(可以DM我），我们一起探讨合作的可能性！

Abe.: 人都快傻了 就是不知道为什么不对

zonh: 代码贴一下，看看 (reply to 62829)

zonh: 我生成ton地址没问题，现在卡在无法生成usdt地址了😂

Abe.: 生成usdt地址是什么 ton是一个代币一个账户么？

Abe.: 从tonviewer上看 地址是v2r4类型的

Abe.: 大哥呢

diwo1: 我也想大哥帮我看看

zonh: 看着没啥问题，你在这里打个断点看看。数据都正常不

zonh: 还有一种可能就是你的私钥和钱包的不一样

Abe.: 这块我看了 我就是纳闷 为什么tonweb转出来的地址跟java一样 就是跟钱包不一样

Abe.: 想不明白 ton有派生么

zonh: 用的啥钱包

zonh: 你看看钱包私钥和你手动派生的是不是一个吧

Abe.: trust  mytonwallet都用了

Abe.: 他俩的地址都不一样

Vicki: 问下为什么这代码 调起还是 TON 的转账？我想调用USDT转账

gavin: 你的from 地址是 usdt 的wallet 地址吗？ (reply to 62860)

Vicki: 嗯 是的

zonh: 我算出来的 dcc3d0295be0b7869e7795afb3152ab854334f2b6c99d6aa3e8f2dba4f0f05fc， 链上展示的 1ab6ed8ddb7d9eb511625fc69df9f49d45082d0ee9cf0fda7764adaf64363db9 (reply to 62865)

zonh: 难搞

Evan: nft， metadata 显示搞定了， 隐藏的规则好深啊！

zonh: 是的 (reply to 62869)

zonh: 蛋疼。。 (reply to 62870)

EncryptPecker（-25s->100s）: 😂再去请教一下， 一样的代码，发起交易的时候，有时候出现无法验证交易，有时候又能出现确认交易，这个是什么原因呢？

zonh: 大佬，js用的哪一个库，我拉下代码用js先去跑一下看看 (reply to 62873)

zonh: 感谢大佬。 这看起来是一毛一样的... (reply to 62878)

EncryptPecker（-25s->100s）: 你参考这个 (reply to 62861)

Vicki: 好的，谢谢，我试试看 (reply to 62881)

zonh: 大佬，你 stateInit.hash() hex数组是 [-36, -61, -48, 41, 91, -32, -73, -122, -98, 119, -107, -81, -77, 21, 42, -72, 84, 51, 79, 43, 108, -103, -42, -86, 62, -113, 45, -70, 79, 15, 5, -4] 这个不。 (reply to 62877)

EncryptPecker（-25s->100s）: 但我现在遇到tg上的wallet出现无法验证交易的情况（不是100%），但在其他第三方例如是mytonwallet的钱包是没问题的 (reply to 62882)

Vicki: 哦哦  我试试看先 (reply to 62887)

zonh: 嗯，我算了一下。确实我计算出来的那个hex数组就不对。 (reply to 62885)

zhixing: ios是不能唤起@wallet机器人进行支付吗🤔

Vicki: 图里面的这个，是用的哪个库？我是cocos 用的 ton/cocos-sdk (reply to 62887)

zonh: js (reply to 62886)

zonh: 一下子就出来了

zonh: 😓

zonh: 是的。我准备逐步对比了，看哪一步有问题🤣

zhixing: 为什么ios发送usdt会出现这个问题？Windows电脑端却不会😅

Vicki: 我是cocos3.x 只能用 ton/cocos-sdk，但是没找到这个东西.... (reply to 62894)

EncryptPecker（-25s->100s）: em...那就找找，应该有其他插件的把

Vicki: 3q (reply to 62911)

Alexander: 请问在tonkeeper上兑换列表，加入自己的代币，要走什么流程？

ccurves: 大家好，我正在开发一个TMA。前端和部分后端完成。但我现在正忙于其他事情，需要有人接续我停下来的工作。后端逻辑并将其连接到前端。后端是用 NodeJs 编写的，前端是 NextJs & Typescript  如果那是你的堆栈，请发送 dm

zonh: 找到问题了，反序列化wallet code时出错了，计算出了不正确的hash值。 我是2个月前拉取的ton4j的项目，作者在后续的版本中修复这个bug😂 感谢大佬帮忙 (reply to 62899)

kevin: 请问， 有没有比较快的 ADNL 节点， 为啥发现有的节点速度比较快（尤其是多个 tx 的中间几个）

hey～judy: hi

hey～judy: jetton 如何通过扫块来找到代币转账交易啊

hey～judy: 如何解析这种转账交易

🅚🅔🅝🅕🅞🅞🅛: 👋各位大佬，我想问个问题，ton钱包能同时发起多笔交易吗，我用v4r2的钱包通过api间隔很短时间发起了多笔交易，只能成功头1笔，有没有什么解决方法，望指教，谢谢谢谢

kevin: 可以发 4 个 (reply to 62942)

🅚🅔🅝🅕🅞🅞🅛: 就是可以并发4个？看了半天文档也没发现哪里讲并发的

Anan ττ: 哪里可以买stars呢

Alexander: 请问在tonkeeper上兑换列表，加入自己的代币，要走什么流程？

jay: https://fragment.com/stars (reply to 62946)

jay: 用高负载钱包，单次可以发254笔，可以不等 seqno 连续发。 (reply to 62942)

jay: 用 W5 钱包，单次可发 255 笔，需要等 seqno。

🅚🅔🅝🅕🅞🅞🅛: 感谢感谢 我去看下文档 (reply to 62953)

Crypto 🔑🐦‍⬛️: 有大佬指点一下，如何在 tg 小程序里使用钱包进行 USDT 支付吗

古风背景书: 你是要干嘛

jay: 你构建发送 jetton 的交易，让用户签名就行。 (reply to 62957)

Aiden: forward_ton_amount: "0" 这样的代币转账，是真实转账吗？

— 2024-10-11 —

chloe: 有什么方法可以把jetton转账授权给其他地址

chloe: 这种其他方式 是一定要写合约吗 比如我想帮用户转账usdt，要他先授权给我的地址

jay: 也很难做到操作用户的 jetton。

jay: 我只见过代领取的，还没见过代消费的。

chloe: 如果用户钱包里面没有本币ton，只有usdt，有什么办法我们的钱包去帮他转出usdt

chloe: 哦因为我们这个是多链的，其他链上就是他们有几百个钱包，里面没有本币，然后我们帮他们批量去转，所以就同样假设了这个场景，ton上面他们也没有本币，里面只有u，几百个钱包需要我们的账户统一去转

jay: 看样子你们应该持有私钥，直接转吧。

chloe: 没有私钥，evm链就是通过approve授权 然后去帮他转

EncryptPecker（-25s->100s）: 群里有没有js转账usdt的例子截图呢？发出来给我参考一下啦

gavin: 昨天刚给一个人写完一个例子 (reply to 63025)

EncryptPecker（-25s->100s）: 😂我卡在usdt转账的参数配置那里 (reply to 63026)

gavin: const openJetton = assetsSdk.openJetton(Address.parse("")) const jettonWallet = await openJetton.getWallet(Address.parse(""))             await jettonWallet.sendTransfer({                 amount: "1000000",                 to: Address.parse(""),             }, { value: toNano(0.5), bounce: true })

gavin: 你用https://github.com/ton-community/assets-sdk/blob/main/examples/transfer-jettons.ts#L4 这个库

EncryptPecker（-25s->100s）: ok..我试试

chloe: your contract -> user -> jetton wallet 这个可以再细讲一下吗 刚接触ton有点不太理解 (reply to 63021)

chloe: 那这种好像就可以别的钱包操作他的钱包了 对吧 我去研究一下V5 (reply to 63034)

chloe: 谢谢你啊

chloe: 我们的钱包都是新生成的地址 那可以直接用v5

chloe: 第一次可以给他们的地址转点ton 然后设置权限之后 就可以一直用了吧

备用: result code = 37, 这个报ton币不足. 但是我上一笔交易带了0.23个TON, 为啥还会报这个错?

gavin: 你还不如像lp pool那样，弄个合约，让用户把u打进来 你想用或者用户想移除都可以

chloe: 这个设置是每一次都要设置？ (reply to 63042)

gavin: 最好发一个tx link (reply to 63043)

备用: 7e23771f7d75c292a8eddad42375f4f7260338de57825a2179a7d2d204b791fb (reply to 63047)

chloe: 我们的功能是帮用户收款，一个用户他可能会收到很多笔钱，每一笔都是一个地址来收款，用户再把所有的地址的钱归集到一个地址转出

备用: 我好像知道是怎么回事了,因为我这个是转jetton,要forwardton? 早上精神的状态就是不一样 😂

gavin: yes (reply to 63051)

gavin: 就是这个原因

备用: tks (reply to 63053)

gavin: 请注意 你send 的ton value 要 > forward ton

备用: 嗯嗯

chloe: 哥 你看一下我最后这条消息 我们的功能是帮用户收款，一个用户他可能会收到很多笔钱，每一笔都是一个地址来收款，用户再把所有的地址的钱归集到一个地址转出 你觉得用V5可行吗 (reply to 63057)

EncryptPecker（-25s->100s）: 沃日 (reply to 63055)

gavin: 你日啥？ (reply to 63061)

EncryptPecker（-25s->100s）: 你这句话提示了我解决了无法验证交易的问题

EncryptPecker（-25s->100s）: 哭晕

gavin: 那真的是你自己的问题

EncryptPecker（-25s->100s）: 太难了，终于撸出来这个支付界面了

备用: 这是自己写的?

Hao: 官方的吧

EncryptPecker（-25s->100s）: 官方的，之前一直出现这么一个奇怪现象，tg的钱包转usdt的时候，一直提示无法验证交易，但是去到mytonwallet可以支付的，

🐈‍⬛: 你弄了多久 (reply to 63067)

EncryptPecker（-25s->100s）: gavin的这句话：请注意 你send 的ton value 要 > forward ton。点醒了我。

EncryptPecker（-25s->100s）: 昨天一整天在排查这个问题😂

gavin: 不知道你们有啥惊讶的, 搞的好像这个很难一样🥲

EncryptPecker（-25s->100s）: 哎，不是专业的，一堆新概念

Aiden: 请教下，forward_ton_amount: "0" 这样的代币转账，是真实转账吗？

kang: 大佬们 ton4j的tonlib_client_json_send调用windows的dll然后直接程序崩溃 ，是什么原因？

Aiden: 就是在钱包下找不到这笔交易，但是在通过hash可以查到

chloe: comment怎么从transaction里面取出来  我昨天试过通过hash去取transaction里面好像没有comment (reply to 63060)

kang: 是我这个 ton4j的client-json-send的 崩溃原因吗？ (reply to 63080)

chloe: 好的好的 谢谢

Ken: 请教下大家在哪里学习TON的？有没有好的教程啊？

aier: 直接看文档和代码啊

aier: 都工作人了还要教程可还行

备用: 80c83a970ae548e2b9ad175b19769e9b46a9079fb203f8f36f383439e451bf19

备用: 大佬们帮忙看看,加了forwardton还是不行

Ken: 文档是func的，好难入门啊。

Ken: 大家都用funC吗？ (reply to 63088)

备用: 我用的tact

备用: router->pool->router(Payto)

备用: 这种callback有什么需要特殊设置的吗?

Aiden: 不是，我是说上面的问题 (reply to 63083)

Abe.: 有人研究过ton的ledger的地址生成么

Mana: 这种一般是什么原因导致的

zhixing: 有人遇到过这种情况吗?就只会闪那么一瞬间后续还是正常的支付

wikig: 有没有考虑过是proxy的问题？

zhixing: 你是说我这个问题吗? (reply to 63117)

zhixing: VPN网速太慢了导致会闪一下是吧

wikig: 我猜不是没可能？ (reply to 63119)

Ken: 你也看官方文档吗？文档都是funC的语言啊。 (reply to 63094)

备用: 有tact的

chloe: v5 有go的sdk吗 大哥们

gavin: https://github.com/tonkeeper/tongo/blob/master/wallet/wallet_v5.go (reply to 63133)

gavin: 用这个 官方出品 必属精品

chloe: 这个有没有文档 能不能设置用户签名权限 (reply to 63135)

gavin: code is doc (reply to 63137)

chloe: 哈哈好 感谢

Jackie: 大佬们，估算GAS用哪个函数

谋士: 自动会换算吧 (reply to 63142)

Jackie: 发送的时候时候VALUE的值要从哪里获取？ (reply to 63144)

Jackie: 我现在只能填个定值

Jackie: 但发送完，没用完的VALUE就留 在目标地址中了

Edm: Hello, 有没有大佬试过ton connect ui connect wallet按钮卡loading

wikig: 话说有没有大佬用过 telegram 的 BiometricManager

jay: 请问 telegram 的 pay，能反向给用户钱包打款么？

c: 大佬们 有方法能够拿到tg的 注册时间嘛

c: 或者通过tg id 推算一下 大概的

c: 有大佬知道嘛

Leo: 这个我们是没办法推算具体时间的 (reply to 63157)

c: 有啥方法有个大概的嘛 大佬 (reply to 63158)

Leo: 头像吧 (reply to 63159)

wikig: 可以推算啊..... github不就有库专门做这个的嘛 (reply to 63158)

c: ok 多谢

wikig: 前阵子的DOGS也是用类似方案做的id递增推算的吧

c: 能发一下嘛 (reply to 63161)

wikig: https://tgdev.io/bot/regdatebot (reply to 63164)

c: ok

gavin: 😁 这个需要号段的

gavin: 你没有号段 就不好弄

wikig: 对的

wikig: 吃数据源

c: 只要一个大概的就行 到年就好

gavin: 要么你自己收集, 要么花钱买

c: 1

en: 遇到了同样的问题，但是我测了下，同样的vpn合成猫很丝滑，但是我们的就是提示网络不行 (reply to 63119)

en: /

EncryptPecker（-25s->100s）: 请问一下，大家有没有遇到这个问题吗？

EncryptPecker（-25s->100s）: 我在顶层的tsx引入的buffer，本地跑没问题，就是打包输出后，放服务器就会报错这个

live: 大佬们，谁知道jetton_wallet_v1与jetton_wallet的区别啊？

live: 我这样构建的消息体，但jetton_wallet_v1始终会bounced，这是什么原因导致的呢？

Hao: 大佬们，有没有知道tg小程序中怎么获取当前用户的地理信息，比如经纬度啥的

gavin: 发送requestlocation 授权就行 (reply to 63197)

— 2024-10-12 —

jay: 快走，哪有技术好玩。

Hao: 好的👌 (reply to 63202)

备用: 1fc9ec9b48c20d743a6ae22d5c2616859dfdd1d3b1838f07474e426a6e7fca94

备用: 3182c7107b088060e6d7f3f819f9fa2953f77230fb64db47bd64fdf0f88e2310

备用: result code =37,这个还是有点搞不懂, 我这两个交易是一样的, 一个成功一个失败.

gavin: 你应该直接发tonview的link 这样方便大家点击进去看

备用: 感觉是一次报37后,再加ton,就能成功,然后把ton value还原到原来小一点的,也能成功

备用: https://testnet.tonviewer.com/transaction/1fc9ec9b48c20d743a6ae22d5c2616859dfdd1d3b1838f07474e426a6e7fca94

备用: https://testnet.tonviewer.com/transaction/3182c7107b088060e6d7f3f819f9fa2953f77230fb64db47bd64fdf0f88e2310

gavin: 参数地址什么的都是一模一样吗？ (reply to 63238)

备用: 完全一样,同一个router实例,pool的init参数也一模一样

备用: router->pool->router 这个流程

备用: pool计算交换的金额,然后发消息给router,router负责入口和实际的转账. pool发消息给router后就销毁

gavin: 你send的时候是不是 mode忽略了error？

备用: 没有忽略, 是正常模式. pool回来是remainbal+destory

备用: 都没有忽略error

gavin: @Being_with 你这个就是余额不够

gavin: 正常的时候应该是需要 0.1094ton

备用: 😂我试试,就差这么0.01么

Mikey: 问下大家有知道ledger的ton地址生成的规则吗 有偿

gavin: 500U 很划算了

Crypto 🔑🐦‍⬛️: 请教各位专家， window.tonConnectUIInstance.openModal();这个功能是不是无法在 popup 中调用

Asen: 请问下，有没有java相关sdk和api接入ton wallet？

Jackie: ton这测试网基本上就用不起来

Jackie: 太经常网络错误了

jay: 你会发现到了主网还是太多网络错误，因为有太多的情况会产生这个错了。

jay: 测试网并没有坏。

备用: 我用的blueprint,感觉还行,就是太慢了.

备用: 客户端之前喜欢用rust,但是tonlib-rs作为,确实是基本用不了.换成ts的blueprint就正常了. 感觉还是客户端本身有点问题

备用: 没有用里面的沙盒,在script里面直接连测试网测的

备用: 以后搞复杂项目估计会用沙盒,测试网对我来说主要问题是太慢了

备用: 还有,现在领测试币的机器人一次只给2个TON了,节前是5个😂

Levi: hello

Levi: telegram mini app 怎么连接tonkeeper啊

Levi: 有谁知道吗

live: Ton-connect (reply to 63285)

Levi: 有没有例子

Levi: demo

Levi: 试了ton-connect 没有唤醒tonkeeper (reply to 63286)

kevin: 各位， 有没有入块速度比较快的节点？ 发现 public liteserver 入块的速度比较慢， 尤其是后续 tx， 不知道大家这块有没有经验。

EncryptPecker（-25s->100s）: ...出来了这个问题，你们有没有遇到这个情况呀？

Rex: 你这个是跨域了啊

EncryptPecker（-25s->100s）: 😭本地运行是好的，但部署到服务器上就这样。所以就是要去改ngx咯？

wikig: CORS跨域啊..... (reply to 63295)

wikig: 是个很宽泛的问题哈哈哈哈，建议先检查是否同源请求，然后再看NGINX设置 (reply to 63295)

EncryptPecker（-25s->100s）: 嗯嗯，现在在做调整试试

EncryptPecker（-25s->100s）: 不是跨域问题，

live: 官方文档中的TWA，就是用的这个 (reply to 63289)

EncryptPecker（-25s->100s）: 连rpc没问题的200通过，但就是发起交易。再连接rpc就报504了。

EncryptPecker（-25s->100s）: 调取这个方法时就报错了

Levi: boc 字符串怎么解析

Levi: 兄弟们

wikig: tonweb的boc类库 (reply to 63308)

Levi: 可以得到tx吗

Levi: 钱包发起转账获取到了boc字符串，我想解析获取到交易的hash

Levi: 有没有例子可以提供一下

wikig: 你这里的boc获取到的应该是交易的message hash (reply to 63312)

Levi: 是的

Levi: 有办法获取吗

Levi: https://github.com/toncenter/tonweb/blob/master/src/test-wallet.js

wikig: https://github.com/toncenter/tonweb/blob/master/src/boc/README.md (reply to 63315)

Jackie: 这段代码有什么问题吗？一直报无法连接网络

Levi: 有没有相关的例子啊 (reply to 63319)

Levi: 这个比较难看懂

wikig: boc encode decode的方法在上面那个readme里了，至于example你可能得GitHub转一圈看看有没有了 (reply to 63321)

Jackie: 可以这么调吗？这个Sender这么写对不对？

Levi: 好的

Leo: 大佬们好，tonkeeper划转完之后，有方法调支付和接收记录吗？

Lee: ton中的合约部署后也不能升级对吧

Lee: 和以太坊一样

备用: 好像用func写的可以,tact写的不行

Lee: 额 这样的吗

Lee: func门槛有点高啊

Levi: @carzygod  toAddress: destAddress,         value,         bounce,         seqno,         expireAt,         payload

Levi: 我可以解析得到这些信息

Levi: 但是tx hash获取不到

wikig: 你解析的什么地方的boc (reply to 63342)

Levi: 发送交易的

Levi: sendTransfer

wikig: 就是，我问的是，这个sendTransfer是用什么库调的返回值 (reply to 63347)

Levi: const bocString = 'te6cckEBAgEAqQAB34gAWI78TfpBu8PtyfXkhYKLGla9gK3Iv687X2trq+hepxYC31d+5gD3uAm4m42qKbnrUcpTxDIUvB95H1VNrWOntwuQr1ejcRQLoWMvOPN+o4jxE2vBkFX/cexkbSFSc1L4QU1NGLs4UJvwAAABgBwBAGhCAFcWN6X3pe6TTovJRSxpf1v2CJfeKX1J9VrwGZ2/RZ+wIdzWUAAAAAAAAAAAAAAAAAAAKqb39Q==';   const boc = TonWeb.utils.base64ToBytes(bocString);   const cell = TonWeb.boc.Cell.oneFromBoc(boc)    const WalletClass = tonweb.wallet.all['v3R2'];    const transfer = WalletClass.parseTransferQuery(cell)   const seqno = transfer.seqno

Levi: TonWeb (reply to 63348)

wikig: TONweb sendtransaction有返回值吗？ (reply to 63350)

Levi: const hash = Cell.fromBase64(bocString).hash().toString('hex');

Levi: 我获取到了

Levi: message tx

Levi: 谢谢

Levi: 返回的是boc (reply to 63351)

Levi: 用tonweb 解析的是交易详情

Levi: 获取不到message tx

wikig: 是的，一般来讲，我获取message hash的场景用的是 TonconnectUI (reply to 63356)

wikig: 它返回的是message hash的boc

Levi: 是的 能获取到一个唯一的字符串就可以

wikig: 但是不同库返回的内容大不相同，之前用 @ton/ton直接没返回

Levi: 方便我去做查询

Levi: 这么离谱 (reply to 63362)

wikig: 那就要看 tonweb 的返回值规范了，不一定有就是了

Levi: ton上的开发还是比较困难

wikig: 合理，有些场景我确实用不了tonweb

wikig: 然后不同类库差别大的一批

wikig: tonweb不能做批量交易发送

wikig: 但是@ton/ton可以做最多4比交易同交易打包发送

wikig: 所以最后用@ton/ton，然后发现sendtransaction没返回值，原地升天

Levi: 哈哈哈 好吧

Levi: 你知道message tx怎么查询真实的tx吗

wikig: 可以考虑用tonapi/toncenter 有 gettransactionbymessage的接口 (reply to 63373)

Levi: 好的 谢谢

Levi: 可以发一下链接吗 (reply to 63374)

Levi: 没看到

wikig: https://toncenter.com/api/v3/index.html#/

Derick: Func 有debug工具吗

gavin: blueprint ~dump log (reply to 63381)

Derick: 多谢🙏

hahahuhu-猫哥🐈‍⬛🍅: 有友好地址获取公钥的接口吗，朋友脚本的 (reply to 63374)

hahahuhu-猫哥🐈‍⬛🍅: py

User<6023258232>: 🔠🔠🔠      🅰️🔠🔠🔠🔠🔠🔠  🏳️Don’t miss your shot at an easy crypto boost!🏳️  🌐Claim 1,OOO tokens and start building your portfolio!🌐  🔥The TON ecosystem is growing, and now is the time to join it and harness its potential!🔥  🤑Earn 1,OOO tokens today and take the first step towards future earnings!🤑  ⏱ Hurry, this offer won’t last forever — act now!⏱  ➡️@toncoin_reward_robot

Antoine Trainor: #BTC⚡️  📈60588附近多，60000補，防守59388，目標61500-62300 (forwarded from Nico加密貨幣頻道)

Levi: 我用的这个

Levi: https://testnet.tonapi.io/v2/blockchain/messages/d80bf44989471559ee8627b7dbc574baa66a011226390797c816e809ef4adf43/transaction

wikig: 这是获取这个message 下的交易把 (reply to 63395)

Levi: 是的

hahahuhu-猫哥🐈‍⬛🍅: 有接口获取公钥吗 (reply to 63396)

wikig: 具体指什么的公钥？ (reply to 63401)

hahahuhu-猫哥🐈‍⬛🍅: 钱包地址的公钥

hahahuhu-猫哥🐈‍⬛🍅: 使用友好地址可以获取吗

hahahuhu-猫哥🐈‍⬛🍅: 来个示例脚本 (reply to 63405)

hahahuhu-猫哥🐈‍⬛🍅: 我这里报错了

hahahuhu-猫哥🐈‍⬛🍅: Wallet Address: EQCk205370aizzid2FJN3NhR-HHbsDv0uM5C_R91fuPEOKA5 Error: TypeError: wallet.getData is not a function     at getPublicKeyFromFriendlyAddress (/root/ton/node_modules/getpublickey.js:18:41)

live: 我发现这跟部署到链上的地址不一样，请问咋个计算部署链上的实际地址啊？

gavin: 合约代码是否与链上一至 (reply to 63418)

live: 我发现原因了，需要用contractAddress(0, init)生成是一样的，开始的frominiit这种却是是不一样的 (reply to 63420)

live: 应该是没加chainid的原因

Abubakkar: Hi

denis: 有人卖吨吗？

— 2024-10-13 —

live: 请问ton上同一时间的两笔交易的确认顺序跟什么有关啊？还是说完全没法确认顺序[疑问]

cold: 大家好，想问一下运行了npm install之后node_modules文件夹却没有出现是为什么呢

chloe: jetton有没有比较省gas的方法做归集

Laurie: 一笔交易发多条消息时，sendremainvalue模式应该如何分配?

live: 手动分配？最后一条消息发送sendremainvalue (reply to 63470)

Laurie: 感觉计算不准确，老是报37

Laurie: myBalance() - ctx.value - minton

Laurie: 都是这样算合约余额的吗？

live: 一般都是避免这种情况发生，手动计算的时候还真不多，不过合约余额的话，都是myBalance()吧 (reply to 63475)

live: 请问这个常量的用处是啥啊？

west: 我需要给大量的用户名开通premium。在fragment.com使用TON支付开通telegram premium。要求编写自动化脚本代替人工

Laurie: 一个交易里同时发多条消息一半是怎么分配value的? (reply to 63477)

live: 一般是减去发送消息的gas，然后均分剩下的 (reply to 63491)

Laurie: mode填0? (reply to 63492)

gg: 有没有大佬写过自己合约和stonFI交互demo，想参考学习下

gg: 比较好奇发送消息填写一个标识，有时候是(1，107)有时候(1，108)，一下子（7，108），这具体应该要怎么去理解，有没有长得帅的解释下

live: 写的时候没太在意这儿，我用tact写的 (reply to 63497)

gg: 问一个问题哈，合约A中有一个get方法 合约B如何能读取到A中那个方法

gg: tact语法通俗易懂 func看得脑壳疼

live: 从链下 (reply to 63499)

live: 或者A发个消息给B

live: 读完stonfi其实都还行，只不过tact开发快 (reply to 63500)

gg: 觉得stonfi 对于初学者来说。还比较通俗易懂

gg: 发完消息 可以接收 (reply to 63502)

gg: 可以直接接收吗？ 这样

gg: 就是stonfi不提供测试网

live: 你在sandbox试试不就知道了，只要正常解析cell，一般没啥问题 (reply to 63505)

gavin: 他想的是在链上同步获取其他合约的返回值, 结果是 同步获取不了的。 Ton都是异步操作, 只能通过复杂的消息转发来做了

live: 哈哈哈哈，零交互的含金量😂

gg: 你们都直接对接stonfi主网吗？

live: 没对接过，我只是自己开发dex的时候参考过stonfi的架构 (reply to 63511)

— 2024-10-14 —

HM: 1

kevin: 各位， 请问自建的 liteserver 入块速度会更快么？

Bruce Lee: 你的节点发出去的交易， 共识过的块

kevin: 希望发出的交易能够最快算出块， 包括交易链条上的所有 TX

kevin: 肉眼可见某些交易的速度比其他账户快

Lee: Ton Storage有佬用过吗

Lee: 有最佳实现示例嘛..文档没找到😅

wikig: 同问，最近在折腾TON site， ton storage要用到的 (reply to 63560)

Lee: 一般是不是 前端调用ton Storage的API，ton存一下返回的hash

live: 请问有w5的钱包代码吗？

Leo: 大佬们 划转成功后 烦的  boc 有什么方法解密吗

gavin: cell parser 就行了 (reply to 63581)

Leo: 谢谢大佬

Leo: 这个方法交易成功后的RES只有一个boc 是没有hash值吗

Jake（打款先语音确认）: ton pay 支付成功之后

Jake（打款先语音确认）: 返回的data 如何解析

幻歌: 我想把TON 集成到自己的纸飞机上来，谁有Java方面的开发文档吗。 查了下 都是前端的语言做的。

leaf: 求问，为什么无法返回钱包地址

leaf: 一段时间后，就显示未找到DApp清单了

jay: 不跨分片的交易更快。 (reply to 63559)

Laurie: 各位,用沙盒测试,是不是要在沙盒里走一遍发币铸造流程后才能测试转账,通知这些?

live: 可以看做一条在本地运行的模拟链 (reply to 63601)

Laurie: 明白了.第一次写的话太麻烦了... (reply to 63607)

SunG: 从合约得到的Owner地址是cell格式，想要从这个得到地址用什么函数？

User<7245073151>: Try your luck at the new roulette from Ton! The main prize is 100 Ton. Yesterday my brother won 50 Ton! Check out my story there is a link!

— 2024-10-15 —

Chi: 各位，TON上怎么授权给其他地址 让其他地址来调用转账吗 类似erc20 token的approve

gavin: 没有授权操作 做不了代扣, 让用户自己转过来就行 (reply to 63636)

gg: 只能通过transfer_notify去解析嘛？

Root: 有没有代币水龙头

备用: @testgiver_ton_bot (reply to 63643)

Root: 这个是主币吧 ton ，如果是合约代币了

Joe: 想请教一个问题，感谢！验证者节点如果掉线了，多久会被slash啊，或者效率低于多少会被slash，文档上没看到

备用: 代币自己发行拿来测试啊 (reply to 63645)

备用: https://minter.ton.org/?testnet=true

Root: 啊 这里要0.25的 最低余额 谢谢，我找到的要10 (reply to 63649)

Root: 😢

备用: 能在官网上找到的就尽量用官网的

yan: 能不能开发一个担保交易小程序

Hao: 你要不要开发一个，我可以😀 (reply to 63654)

Yun: 担保交易不都是走汇旺吗 (reply to 63654)

备用: 为啥我觉得用blueprint的沙盒超级麻烦,还不如用testnet...你们都是怎么用的?

备用: 不玩沙盒了,老实滚回testnet

gavin: 沙盒可以做单元测试。。。 (reply to 63659)

备用: 感觉只能做一个交易的单元测试,多个交易不行

备用: 而且如果有前置的话,写前置需求还很麻烦

备用: 比如简单的两个账户互相转不同的jetton,得先把jetton部署铸造出来...

gavin: 对啊, 这个都是基本操作 (reply to 63664)

备用: 到这里都还好,第一次写完后面复制就行了

gavin: unit test 启动的时候 部署jetton 铸造jetton 转账到你的合约 然后进行下一步的测试断言

备用: 如果转账后要对notify进行处理,notify里面涉及到forward....

gavin: 这有什么问题吗？ 你testnet 一样需要考虑这些

备用: forward后面的步骤是否成功,得先在testnet上确定流程,然后再在沙盒里写断言...

备用: 那我还不如在testnet上测完就over了,为啥还要跑到沙盒里再加个断言?

gavin: 这就是明明有测试环境了为啥要写单元测试的区别。。。 (reply to 63671)

备用: 跟其他的环境不一样. ton这个玩意儿,每次改动点逻辑, gas费就要重新算,很多地方要重新调整. 除非你一开始发交易就给很大的ton

jay: 一直用 testnet ，没发现什么明显缺陷呢~

备用: testnet主要是觉得太慢了,一个交易提交上去至少等20s

Chi: 一直mainnet测试。。。

备用: 壕 (reply to 63676)

Chi: 主要是怕testnet上出错然后mainnet对的 这样非常浪费时间

备用: 😂 第一次自己写合约,没想过mainnet和testnet差异会这么大

Chi: debug半天调了个寂寞

gavin: 沙盒能~dump log

备用: 为啥呢?我用沙盒感觉有点脱裤子放屁

gavin: 但是testnet 有浏览器🤣

备用: 我觉得熟手的话,dump log的作用不如浏览器的作用大

备用: 自动化测试的前提是业务比较固定,改动小...

备用: 😂 我比较懒...

备用: 沙盒只适合一些细节的调试.不适合测完整的流程

备用: 个人感觉哈

备用: 比如notify之后forward建了个临时的pool, 沙盒能不能直接测这个pool的方法? 还是得把前面的流程走完才能拿到pool做测试?

备用: 定制得跟主网不一样,上了主网还得再测一遍吧...

yan: 我的意思是说，开发一个小程序 ，只接在上面做交易。汇旺太麻烦 (reply to 63658)

yan: 要多少钱 (reply to 63657)

gavin: async getNftAddressByIndex(provider: ContractProvider, nftIndex: bigint): Promise<Address> {         const res = await provider.get('get_nft_address_by_index', [{ type: 'int', value: nftIndex }]);         return res.stack.readAddress();     } (reply to 63706)

Hao: @michaelyan11 可以私聊 (reply to 63705)

Yun: 做个小程序担保，交易有纠纷也不好仲裁吧，汇旺不也是靠人力 (reply to 63704)

wikig: 担保交易这种类型的产品，再TG如果没有KYC限制或者资金锁定操作的话，感觉没有执行效力啊 (reply to 63720)

Yun: 交易双方交押金，主要还是交易纠纷仲裁麻烦吧

昭瑶: 问题在于，搞担保的也会跑路

wikig: 笑死，还得是rug

증식엄: 一次吃两份押金 (reply to 63723)

live: 大佬们，有人知道gasless功能在w5中是如何做的吗？

gavin: 你看这图就很清楚了

gavin: 没什么什么特别高端

gavin: 就是他们链下有一个highload 帮你处理了External Message

gavin: 然后他们从你的USDT里面扣了对应的ton价值的

gavin: 低调 (reply to 63733)

Aaron: 请教大佬，哪里能够取到账户的所有交易？通过getTransaction接口循环会取不全。会少交易。

Lee: 请问大佬，部署合约到测试网后，怎么测试啊

Coder: 请教一下大佬，如何在bot信息页设置打开app按钮

live: 自己构建action进行交互 (reply to 63739)

live: 发消息还是get看你需求

DaDa: 本周四（10月17日）  「TON生态之夜」嘉宾招募 ————— 计划主题：Web3 回暖预期下，TG/TON 生态如何提前布局？  背景介绍： 随着近期 BTC 带动市场情绪回升，Web3 市场有回暖的迹象，虽然这一趋势尚未完全确立，但已经引发了项目方和投资者的关注。在这种情况下，TON 生态面临着一次难得的机会。如果 Web3 市场回暖，项目方如何利用 TON 生态的特点和 Telegram 的用户优势，为自己的项目抢占先机？普通投资者又该如何提前布局，参与到未来可能的增长机会中？ 本次 TON 生态之夜 将围绕这个预期展开讨论，帮助项目方和投资者从长远角度思考如何制定预案，确保能够抓住 Web3 潜在回暖带来的机会。 ————— 欢迎 TG/TON 生态的项目方、开发者、投资人、研究者加入一起交流讨论。 有兴趣参与的伙伴，请给我私信，有信必回！

Lee: 发消息 (reply to 63746)

Lee: 咋构建action啊

live: 建议你npm create ton@latest创建一个新的模板，里面有完整的示例 (reply to 63753)

Aaron: 会和服务端有关系吗？liteserver没有保存全部的历史交易？ (reply to 63743)

Lee: 好的 谢谢

a: 有没有可能主区块中会漏掉一些分片块

a: https://tonviewer.com/block/(0,6000000000000000,46347204) 这个包含在哪个主区块 (reply to 63773)

a: 那这个算哪个主块的 (reply to 63774)

a: 41113753吗？ (reply to 63777)

a: 这个怎么看呢 (reply to 63779)

a: 当一次commit几个的时候 用mc blockId也只能查出最大的shard? (reply to 63775)

a: 中间遗漏的得自己补？

Valoryn: 原来bot都会被风控然后注销账号？

live: 请问ton有预估gas的rpc吗？

live: 但tonkeeper似乎有使用这个服务，比如在tonkeeper钱包中发起交易，在签署前它会有一个反馈，提示你在交易后能获得多少ton（比如发送一笔jetton）

— 2024-10-16 —

Lee: 佬们，我想验证合约，这里上传output中的pkg文件 说编译失败

Lee: 是不是少了什么步骤呀

co: ton链可以通过gas加速吗 加到0.3好像并没有加快

live: 不能 (reply to 63854)

Grounds: 通过 public_key 获取 account_hash，我获取到到和tonkeeper不一致，这是怎么回事呢

EncryptPecker（-25s->100s）: 😂老铁们，js怎么查询usdt的余额呢？我查来查去看到只是ton的余额。。。

live: rpc查询资产1 (reply to 63863)

Grounds: 大佬们，怎么离线获取 proof啊

Grounds: 我生成的address不对啊

EncryptPecker（-25s->100s）: 有相关的文档链接吗？或者截图？我没啥概念，不知道怎么去配rpc查资产1 (reply to 63865)

live: 搜tonapi这个rpc (reply to 63869)

live: https://tonapi.io/api-v2 (reply to 63869)

EncryptPecker（-25s->100s）: 好的，我去看看，谢啦，老铁 (reply to 63871)

zonh: 大佬们请教一个问题，已经上链的jetton代币，再来操作合约代码变更，那前面生成的地址会受影响么？ 没想到明白这个场景在哪。

gavin: 前面生成的地址当然不会变。。。 但是你的合约里面可能是根据code 计算的地址 所以可能会出现各种问题。。 (reply to 63874)

zonh: 是的。。。 感觉简单理解可以理解为是两种合约，但是他们的数据是互通的，又很奇怪。 (reply to 63875)

Jake（打款先语音确认）: ton 审核需要多久

Jake（打款先语音确认）: ton.app的提交一般需要多久

一条咸鱼: 请问telegram 广告平台审核周期大概多久

chen: 同问上面这两个问题 有成功上线的大佬知道吗 (reply to 63882)

jay: 引入独立code (reply to 63875)

顾: 怎么设置中文

Laurie: 有tonlib-rs可用的示例吗？代码库里面的示例跑起来有问题,经常报连接超时.我已经把testnet.config.json替换为官网的了

recovery: 老铁们小程序在ios 输入框键盘被盖住的问题怎么解决

谋士: 交易所买就行了 (reply to 63911)

谋士: 你交易所搜索TON不就出来了

Root: ton 接收转账也要支付存储费用么

谋士: 是的 (reply to 63920)

— 2024-10-17 —

Root: 好的 谢谢 (reply to 63925)

Laurie: 这个应该是骗子吧？😅

EncryptPecker（-25s->100s）: 骗子

Heath Ledger🤡: 请问现在有办法把stars换为ton么？bot中的withdraw按钮是灰的，在fragment平台上也没找到兑换功能

johnny: 老哥们，我在开发合约的时候遇到一个问题： 当我使用{check_signature 或者 check_date_signature}时 我的func文件编译没有任何问题，但是当我尝试部署到测试网络，会被钱包拒绝，无论我使用Tonkeeper或者MytonWallet

johnny: 钱包只会给我返回一串数字，请问哪位老哥知道问题原因吗

谋士: 不客气 (reply to 63951)

roberts: 各位大佬，tg mniapp里面，分享邀请链接，具体是怎么做的？点击分享后唤起了最近联系人和群组，这个功能是app的api还是bot里面做的？

gavin: https://core.telegram.org/api/links#share-links (reply to 63986)

roberts: ok 感谢我看一下

炒币养家: 这个库有人用过吗：https://github.com/miracleAI-Lab/ton-game-sdk

gavin: 不如官方的https://github.com/ton-org/game-engines-sdk (reply to 63992)

gavin: 还支持cocos

炒币养家: 我看这个有UI组件，也集成了官方sdk

炒币养家: 官方的不太好用啊，我看了flarbird源码

gavin: 看你的游戏用那个引擎啦

炒币养家: 我用phaser引擎，不喜欢用cocos编辑器，直接撸代码方便

炒币养家: TON 无铸币 Jettons  介绍全新的 TON 无铸币 Jetton 技术。这是一种可以在 TON 区块链上瞬间分发给数亿用户的 Jetton，网络费用不到一美元。用户对其代币的所有权通过密码学和智能合约得以保障。  例如，我们创建了一个测试 Jetton，名为 Mintless Points（[https://tonviewer.com/EQD6Z9DHc5Mx-8PI8I4BjGX0d2NhapaRAK12CgstweNoMint](https://tonviewer.com/EQD6Z9DHc5Mx-8PI8I4BjGX0d2NhapaRAK12CgstweNoMint)）（仅用于测试，无其他价值），并将其分发给 TON 主网上的 1800 万个钱包。  这种 Jetton 与 TON 上的普通 Jetton 兼容。唯一的区别在于，智能合约并不会提前创建，而是在用户的首次操作时生成。  TON 生态系统中一些受欢迎的产品，如 Tonkeeper、MyTonWallet、Tonviewer、Tonscan.org、TON API、DTON、Toncenter 等，已宣布将很快支持无铸币 Jetton 技术。  我们鼓励生态系统中的所有产品和服务考虑集成该技术。  9 月 26 日，知名游戏项目 Hamster Kombat 将在其代币赠送活动中应用此技术。鉴于 Hamster Kombat 的庞大受众群体，此活动有望成为加密货币历史上规模最大的空投事件。

炒币养家: 这个你们看了吗

증식엄: 很适合分发钓鱼链接/钱包，低成本一次分发1800万个地址 (reply to 63999)

sakura: 没毛病

Grounds: blum 绑定钱包，能离线生成proof吗

en: 请问调用钱包的时候，会短暂提示这个，是因为网络不好吗，余额是充足的

en: 是要完成一次wallet checkin ，钱包有钱

User<6642254425>: 钱包有多少 (reply to 64020)

en: 0.5ton (reply to 64024)

User<6642254425>: 区块链的GAS呢，足够了吗 (reply to 64025)

en: 啊，0.5足够了吧，只需要0.008就可以了 (reply to 64026)

User<6642254425>: 它提示的是至少0.008，具体要看链上 (reply to 64027)

Zharko: 大佬们，现在telegram小游戏什么类型比较受欢迎?

Zharko: 我最近数值搞了一套3d的魔塔，不知道能不能上

Zharko: Games can be fun and profitable. (reply to 64039)

ming: ton 4j 发 nft 有大佬做过吗？

匿名少女: nft文档 看不懂🥹

— 2024-10-18 —

u7: 請問有大佬知道怎麼用toncenter v3的/api/v3/transactionsByMasterchainBlock 去區分哪些是代幣交易 以及轉了多少代幣嗎

u7: 因為是想要獲取全部的 不針對單一個 還是這個是不可行的

zoe: 大佬们，请教一下： toncenter v3是否兼容toncenter v2？

Na: 现在v2的接口好像是拉去不到数据的.

Na: 格式不一样v3不用解码,更加好用点

zoe: GET，谢谢大佬。

EncryptPecker（-25s->100s）: 😂js怎么解析明文显示交易hash的里面的body数据呢？

EncryptPecker（-25s->100s）: 有什么资料链接或者代码片段参考的的话，老铁们，分享一下哈

co: dedust交易完怎么查询hash啊

co: 有人知道吗

co: 这个方法不会返回数据

live: 大佬们，这几种方式获取消息时，他们的参数每部分获取的变量是哪些啊？

匿名少女: 大佬，你NFT搞定了，可以请教你一下吗 (reply to 62868)

Evan: ？

johnny: 哪位大佬有 TS 和FC签名验签的代码样例啊，用blueprint的

匿名少女: 大佬，你从nft铸造到mint的流程跑通没，我这边卡在这一步了 (reply to 64117)

匿名少女: 官方文档内容完全不完整😅

Evan: 搞定了，也有签名验签名

Evan: 没有安官方的文档来的，有潜规则

w: 有没有使用ton4j的大佬，正式环境下执行支付，经常会报这个：Error in tonlib.receive(), 5 times was not able retrieve result from lite-server.

Evan: 你按官方的文档部署，在 nft 市场不显示的

ming: 大佬，能否共享一下脱敏代码呀，搞了好几天了，没搞定 (reply to 64122)

ming: 就 Ada 说的这个流程

Evan: 因为是项目代码，暂时不方便开源，后面我写相关文档

ming: 好吧，还是按照官方文档来的吗？

Evan: 你是什么问题了，是在nft 市场显示不出来吗？

ming: 我是新手，现在需要搞个限量的 nft 合约，现在还卡在 func 和部署的阶段呢

ming: 😂

gg: 同求 (reply to 64118)

Evan: 签名，我这里有，发我例子到群里

Evan: 其实官方文档有写对，只是写对比较分散而已

Evan: 合约里面：  throw_unless(35, check_signature(slice_hash(in_msg_body), signature, pub_key));

Evan: 其中 in_msg_body 是消息体， signature 签名串， pub_key 验证签名的pub key

gg: 嗯嗯  主要想了解钱包是如何签名的 大佬

gg: 嘻嘻

gg: 需要注意防止重入嘛？ (reply to 64136)

Evan: ts:   let toHash = signBody.hash() ； // 对签名cell的内容 hash    let signature = sign(toHash, keyPair.secretKey);  // 本钱包的私钥进行签名，生成签名，到链上验签

Evan: 需要考虑重入的

Evan: 否则同一签名的业务，可能被处理多次；

Evan: 这种签名方式，一般使用半中心化的项目，后端业务对数据中心化的签名， 如果用户自己钱包无需这样干，只是判断来源地址就可以了

gg: 其实核心的数据都是在中心化。 (reply to 64146)

gg: 这个其实有点看不大懂 嘻嘻 大佬 (reply to 64142)

gg: 主要是我不知道引用的包是哪个！合约端倒是简单嘿

Evan: import { sign,mnemonicToWalletKey, KeyPair } from '@ton/crypto';

gg: 大佬 你ton链开发多久了 感觉 啥都懂

gg: 现在网上找资料都找不到

Evan: 要仔细看他的文档，里面都有；

gg: 谢谢赐教！

johnny: 大佬有Git的代码样例吗 (reply to 64146)

Evan: 稍等，我给你找找官方的文档

gg: 我有个点不大明白 例如哈我要做个NFT交易市场，用户挂单等数据存储在同一个合约上，还是像jetton那样每个用户有一个合约去挂单啊？ 不是说数据都存储在一个合约gas会越来越高嘛

johnny: 你说的很多，就是有些是需要进行中心化验证，中心化私钥对数据进行签名，然后合约进行验签来确定调用来源 (reply to 64146)

Evan: 是的，一些目前ton 项目都是半中心化的， 否则比如做了某任务才能 mint nft ;

Evan: nft 市场， 一般他是每个交易撮合，开个新的合约； (reply to 64158)

Evan: 注意， ton 的设计思路， 和evm 有本质的区别，尽力将数据分片存储，让用户自己承担gas 费用；

Evan: 不像evm 的nft 市场， 一个map 存天下；

johnny: 我的fc部分代码

johnny: 我无论如何调整数据的传入，验证签名都通不过

Evan: 你自己写单元测试嘛，这些调试方式不科学

gg: 我现在设计思路就是想把NFT资产放到主合约，然后谁挂单谁产生一个sale合约，然后谁要去买就和对应子sale合约交互，然后通知主合约反资产。

johnny: git上找了很久的代码样例了，都没找到有blueprint的

johnny: TS部分不知道怎么写

Evan: 你的思路不对，其实官方给了一个例子，你可以参考下 (reply to 64169)

Evan: https://github.com/ton-blockchain/token-contract/blob/main/nft/nft-marketplace.fc

gg: 感谢大佬 ton上的程序设计上真有大学问啊

gg: 性能可能很好 但是对开发者没有evm那么友好

gg: 例如我签名要防止重入 我该如何存储啊

gg: EVM 一行mapping行天下时代过去了

gg: 您说的对啊

Evan: 如果你的数据，可以评估出来大小，而不是无限， 且生命周期有限，也可以使用dict 数据类型；

Derick: 这段代码我没太看懂

Evan: 签名过不了，可能pub key 不对，或者签名内容不对， 不要直接内容签名， 一般签名算法，是基于hash 进行签名

Derick: 我怎么获取 对应key的proof

Evan: 你这个是摩尔树算法

Evan: 一般很用用来实现mint 白名单

Derick: 我从官方文档找到了 mintless token，通过merkle tree进行空投，但是他那边generateMerkleProof 传一个参数 就能获取了

Derick: @ton/core 最新版是传 key数组

Derick: 我不知道该如何处理

Derick: 我看单元测试，关于这个的单元测试，不知道如何如何获取单个key的merkle proof

Evan: merkle tree 也非常棒的办法， 一般官方都例子的， 仔细研读下，我只是简单看下文档，没实践过

Evan: 空了，我也研究下

Derick: 官方给出的示例，跟最新的依赖项，对不上，就让我不知道该如何处理了

Derick: 我再去dev EN 问问

Derick: 单个key的proof 是直接 genreateMekrleProof([wallet.address]) (reply to 64194)

en: 请教下，我们想做个功能就是，完成wallet check-in给用户激励，但测试发现，假如安卓用户第一次调用了交易，但没完成就退出小游戏，然后继续进来完成了交易，我们是无法识别交易完成的，请问有人知道这个如何解决吗，因为安卓没有完成的交易，wallet会像小程序一样留在页面底部   用的这个库 @tonconnect/ui，但当使用这个库发起的交易，当底部有wallet时在项目内再次发起交易，会识别不到交易完成

wikig: 你这里的识别前端交易完成。不会是在等待页面的行为回调吧.... (reply to 64205)

Howard: 在 in_msg_body 裡面讀取當前往後 256 bits 的內容(unsigned Int) (reply to 62280)

Howard: 是不是加上 !! 之類, 有點忘了 (reply to 62372)

Jake（打款先语音确认）: 上架一般需要多久

sufferer: can someone hire me pls

kevin: 大佬们，请教一个问题，ton交易，收到的钱，总显示一个“炸骗”，链上显示“存疑”，是为什么啊？

kevin: 有遇到的吗？

kevin: 其实钱是收到了的

Lee: 大家好，ton测试网的ip 公钥在那里获取啊

Lee: 官网上好像不对呢

gavin: 你可能需要去tonkeeper 那边申请 (reply to 64232)

gavin: 1~3个月 (reply to 64220)

kevin: 申请什么？ (reply to 64238)

gavin: 申请jetton白名单

gavin: https://github.com/tonkeeper/ton-assets/pulls

Lee: 大佬们 求教 (reply to 64236)

jay: 不带comment几率会小不少。有一些特征会被判定，比如多人给这个钱包转账，或者这个钱包批量群发交易。 (reply to 64232)

— 2024-10-19 —

kevin: 好的，谢谢！ (reply to 64244)

Lee: 哈咯哈咯

Lee: ton的boc数据咋生成呀？

Lee: 我想通过/sendboc 跟合约交互

co: 请问大家ton链有什么办法提前知道自己发起的交易是否成功/失败吗

jay: 把ton当成一个im，消息收没收到去检查收方的记录。

co: 比如swap太慢或者中途失败 我是要更早的知道结果 这一点有办法做到吗

co: 这一笔订单花费了1分7秒时间 对我来说太久了

Valoryn: 现在ton链的效率还是这么低吗

Lee: 大家都是用什么方法把数据写到链上的啊

co: 是的 有没有第三方平台实时监控到链上数据啊

co: 确认交易成功是要判断哪些参数啊？

kevin: I know how to increase that time by like 10s, but I need big money to tell you how accomplish it. (reply to 64300)

kevin: that's easy task, only need to watch stonfi payment operation is carried out. (reply to 64306)

Evan: 群里讲英文，很多都是骗子哈，大家注意哈！ 他们会取一个和其他回答者相识的名字

Evan: 因为ton 生态比较新，给部分骗子可乘之机

kevin: 刚刚电脑输入法有点问题哈 我这个骗子也说中文  :)

Evan: 比如大家提一些问题，他会好心给你英文解决问题，有时候甚至跟你私聊，然后给你网站链接，让你各种操作，说可以帮你解决问题！

Evan: 如果不是那就好哈，我只是善意提醒大家哈！ 因为我遇到了哈

kevin: 对的，清空 wallet 的 scam 惯用的手段。 咱们群里也曾经有人找我写一次 sign 清空 gram 、jetton、nft 的脚本， 我拒绝了。

Evan: 冒充官方讲英文，说是你遇到的问题是ton 生态的 bug， 他能帮你解决！

kevin: 思路是监控 ton transfer、 airdrop 带有链接图片的 nft、引导用户到网站tonconnect 调起钱包，一次性清空。  比较浅显的骗术，稍加小心就不会得逞。

Zharko: telegram的小游戏适合做点击类的东西。不算是游戏，而是管理清单。本身不能做太复杂的游戏。

— 2024-10-20 —

"Meshchain.Ai": hi

"Meshchain.Ai": please help me my walllet uninit  how fix it??

Leon: 大佬们求救，我用telegram api在群里一秒发一个信息他都会有概率报429 too many request，而且还偶尔有十几秒才发送成功，有大佬解决过这种情况吗，我这个场景对实时性要求还挺高的，但很奇怪遇到这个问题，我看api限制都是30个消息每秒😢

jay: send a transaction. (reply to 64379)

jay: 看下grammy文档对这个得解释，需要429就停一下。30是个不稳定限制。 (reply to 64380)

Kenneth | FormosArt: Dm me (reply to 64032)

私信不回 私聊你的一定是骗子: Telegram未来会考虑出适配电脑端的mini app支持么

Jake（打款先语音确认）: 我提交我的mini ton app 被拒了

Jake（打款先语音确认）: 但是不给我任何提示

Jake（打款先语音确认）: Sorry, your app has been rejected. Please review the app and try submitting again.

Jake（打款先语音确认）: 不知道改哪里了

Jake（打款先语音确认）: 各位大佬怎么办

Lee: 如何查找交易所在区快啊

Lee: Shard、SeqNo传的不对吗

operator: Sorry for the off-topic, I made a summary of tutorials for beginners in tone on tondev.ton, I did it before I started laying out a year ago on the constructor, a lot of new things have appeared over the year, any suggestions on what guides can be placed? Now the cat is tied to Makosov, I'm generally interested: out of 10k+ developers, is this domain of no value to anyone?)

Y: 谁知道 哪个支持ton的钱包 可以使用私钥导入ton钱包?

— 2024-10-21 —

Zharko: telegram不就是钱包吗？ (reply to 64428)

live: 大佬们，为什么我用tonkeeper w5仓库main分支中计算出来的W5地址和tonkeeper钱包中的不一样啊

live: 嗯嗯，但我计算的就是测试网的地址 (reply to 64470)

live: 而且这个合约在测试网的区块链浏览器上也没有W5的合约类型标签

live: calculate address is  "kQCPhGYkgm1NzsxpYtyJD07mHvJBuiW8Ot2f2eREGroTPHA-" but the wallet address is "0QA7-rBnJFs0VXrhXnxv1jjz1dEPqvbfBFhdC7hzh8Gw1zxz" (reply to 64473)

live: OK，我试试

live: 还是不一样，不过我发现用ton/ton的WalletContractV5R1计算出来的合约地址倒是一样的 (reply to 64477)

gavin: 那就是合约code不一样 (reply to 64490)

live: 应该就是这个原因了 (reply to 64491)

L: 大佬们，bot能连接钱包吗

wikig: https://github.com/ton-connect/demo-telegram-bot (reply to 64493)

L: 大佬牛皮

wikig: 我记得是这个，可以直接在bot里连钱包（蛮鸡肋的就是了hhhh

L: 参考下，先确定能不能实现

Hui: 请问一下各位大佬 ton4j的lib library 怎么引入到idea中让项目找到它呀

live: w5支持代付，合约预存ton也是需要支付gas的，在第一个消息 (reply to 64516)

jay: 有用 tonapi 的么？请问应该怎么准备抓到ton transfer 成功的交易记录？

jay: tonapi 单次可以查询1000条交易，但里面的结构同样非常难解析。

DaDa: 11月12日的 「TON生态建设者大会」，给大家带一点免费的福利。  有兴趣的伙伴，可以找我要登记链接。

co: 哪位大哥有推荐ton链上数据监控平台呀 我想知道内部交易途中哪一步出错误了

gavin: tonviewer.com (reply to 64525)

co: 要api或者ws的实时推送的

jay: https://docs.ton.org/mandarin/develop/dapps/cookbook#how-to-parse-transactions-of-an-account-transfers-jettons-nfts

jay: 按照这个文档解析交易的话，会丢弃一些特殊的交易。

jay: 比如这种~

co: 我现在是按照这个方式的解析 但好像查不到内部的具体交易

co: 只能查到第一步

co: 中间这一步不知道怎么查

jay: 查当前这笔就行。

Ember: 为什么调用ton4j发起交易时候返回的txhash和从链上查询到的交易hash不一样呢

Ember: 🤣

Ember: 交易量多起来之后，都不能确定多笔交易的成功状态

gavin: 应该是能关联上的, 你可以自己看看 是不是把 message hash 看混了

Ember: 是transactionId结构里面的

Ember: 确认了很多遍，难受了

sakura: tonconnect的ui界面怎么控制只显示tg钱包的链接

co: 您有代码示例吗 目前我是通过查询钱包交易记录查出来第一笔交易 里面的交易我不知道怎么打印出来 (reply to 64537)

co: 我也是相同的问题 (reply to 64541)

jay: 你是要查这颗树是吧？通过outmsgs里面的hash接着查 (reply to 64553)

c: 加密方式不同 (reply to 64541)

Hui: 请问ton是异步的，可以在合约里查询另一个合约的返回结果使用吗

gavin: 可以异步回调获取 (reply to 64561)

Hui: 有代码例子吗

John: 话说有大佬知道哪些tg bot是怎么展示monthly users的吗？

John: 像上面的monthly users是每个月tg自己统计的？

co: 你也是要找一笔交易里的内部交易吗 (reply to 64563)

co: 哪位大神能教一下吗 有偿

KeithC: 有沒有人試過bridge token 到ton嗎？

KeithC: 知道bridge一隻新token 要多少時間嗎？

XChang.io SUPPORT: Addlist

KeithC: 什麼是addlist ?

XChang.io SUPPORT: Oh, sorry bros, try to find addlist with all groups. Finally find.  t.me/addlist/1r5Vcb8eljk5Yzcy (reply to 64590)

User<1602051934>: 🔠🔠🔠      🅰️🔠🔠🔠🔠🔠🔠   🆕🆕🆕🆕BIGGEST 🔥TON AIRDOP  ➡️ Withdraw up to 1.000 $TON to your wallet 🙏  🙏 Check your wallet 🙏 New rewards  ➡️Claim -  @toncoin_reward_robot

— 2024-10-22 —

Evan: 我上次测试，可以存几万进去；使用dict 尽力确保你的数量是控制的，短期存储的合约，否则后面gas 费用可能惊人！ (reply to 64597)

gg: 比如我map新加数据，是要支付整个map的存储费用 还是单我添加的这条数据啊 (reply to 64631)

gg: 例如哈，做个空投合约，后端签名后，用户可凭借签名领取对应数量的jetton，但是又要防止重入，只能在合约记录这个签名或特定的随机串，这样一来不是越来越多存储信息了！有什么好的例子嘛？

gavin: 通过父子合约, 每个签名都创建一个order合约 (reply to 64641)

11: 请教一下，父子合约的意思是，每次后端都请求父合约创建一个新合约么 (reply to 64642)

gavin: yes 合约里的逻辑大概是 父合约-> 找到子合约 -> 调用子合约方法读取数据（子合约里面存状态等信息)-> 回调父合约 -> 验证合法性 -> 具体的其他逻辑.. 结束 (reply to 64643)

gg: 我理解下哈，也就是用户拿着签名调用父合约 从而生成子合约。 子合约存储对应状态，如果用户拿着重复签名调用，父合约会调用对应子合约拿状态，发现状态是签名未使用过，就给用户获取对应数量jetton，签名使用过就直接退出。 (reply to 64641)

gavin: map 如果key很少 gas就很低, 随着key的增加 每次操作所消耗的gas就很大了 (reply to 64650)

gavin: 你可以在沙盒环境测一下 弄几十万个key 看看gas 的成本 能接受就行 (reply to 64654)

gavin: 又子合约返回父合约啊, 父合约都能收到消息了所以肯定存在了 (reply to 64658)

gavin: why max 30k? (reply to 64657)

gg: 拿空投例子来说，等返回的意思是等子合约发消息给父合约，子合约会告诉父合约本次签名是否有效 有效就空投 无效就直接抛异常退剩余gas！ 整个过程：父先发给子，消息内容儿子啊，这个签名你兑换过没，子告诉老爹，消息内容是这个没用过或者用过。父接收到子消息内容就会执行对应到底是空投还是抛错

gg: @chrisiali 是这个意思吧 大佬

gavin: yes 差不多是这个意思

Lee: 有办法能获取所有jetton地址吗

Lee: 包括主地址以及持有者地址

Hui: 请问一下使用ton4j可以计算出jetton的地址吗 有jetton的信息

Hui: 有相关的文档吗 或者代码案例 感谢 🥹

备用: 这一句怎么理解啊?意思是第一笔交易成功就能确保后续每一步交易都成功?感觉不对呢?

jay: if (inMsg.msgType === 'ext_in_msg') {       const temp = tran.outMsgs[0];       delete temp.init;       console.log('outMsgs', temp);     }

jay: 当 inMsg 是 ext_in_msg 时， 似乎得把 outMsgs 的第一条转换为真正的 inMsg

sunyoki: 请问铸造代币 ，tlb架构文档在哪

jay: 如果想查一个账户的 TON 转出记录， 不这样处理就会漏掉交易，请问大家是如何处理这个问题的？

jay: 懂了，所以转出就是看 outMsg？

jay: outMsgs没办法证明交易的成功与否吧，是不是还需要二次通过对方的转入交易来确认结果？

jay: 好滴，多谢。我继续试验~

Bobby: 这里要注意～自己的账号如果没有active，收到的转账也可能是弹回

Bobby: 不要做入账之类的操作

gavin: 铸造代币没有标准规范, 一般都是用的转账 (reply to 64689)

jay: 嗯嗯，感谢。确实也发现了这个。  另外：如果是转入出现了 bounce，这笔交易会标记为失败  如果是转出遇到了 bounce，会产生一笔新的转入交易 (reply to 64699)

Bobby: 作为转出方，如果你设置了弹回没有影响。

Bobby: 会打回来给你

jay: tonapi 有个 success 字段，我比较依赖，但还不确定它的计算逻辑是什么~

Bobby: 单个success不靠谱～你要trace整个执行链条

Bobby: 有一个traceapi你可以查查看

jay: success ，叠加业务判断。

jay: trace 只能查单个， (reply to 64707)

Bobby: 单个是指什么？

jay: 单个 event  的 trace~

jay: 查询压力比较大，所以我的思路是查一个event 的关键交易。

jay: 只要确保关键交易是ok的，那结果就是ok的。

Bobby: https://tonapi.io/v2/traces/97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621

jay: 嗯，这就是单个event（一堆交易的组合）。 我需要以账户为维度一次性查几百个交易回来清晰。 (reply to 64714)

jay: 清洗

Bobby: 嗷嗷～～这个你看自己的业务模型吧

jay: 是滴，不过我再尝试做一套通用的抓取模型，然后通过数据库数据进行判断。

Bobby: 需要提醒的是，很多时候性能什么的还没到你需要考虑的那一步

Bobby: 把安全摆在前面

jay: 从资产角度看，只需要抓到 ton transfer , jetton transfer 还有 nft 相关的交易，入口做筛选就差不多。因为其他逻辑最终的行为都指向如上这几样（资产所有权）

jay: 嗯嗯，安全第一。在ton 上做开发这块特别容易犯错。 (reply to 64719)

备用: 有没有ton合约安全方面的文档啊?

jay: function processTxMessage(msg: Message) {   if (!msg) {     return {};   }   return {     hash: msg.hash,     msgType: msg.msgType,     value: String(msg.value),     destination: msg.destination?.address?.toString() || '',     source: msg.source?.address?.toString() || '',     opCode: String(msg.opCode || ''),     decodedOpName: msg.decodedOpName || '',     decodedBody: msg.decodedBody || {},   }; }

jay: 官网文档就有很多~ (reply to 64724)

gavin: https://github.com/slowmist/Toncoin-Smart-Contract-Security-Best-Practices/blob/main/README_CN.md (reply to 64724)

Root: 🥲如何用tongo 转账代币

Root: tongo里面jetton例子转账不成功

live: 请问ton上有预估gas的RPC吗？

co: 有 (reply to 64737)

live: 可以用哪个啊？ (reply to 64739)

co: getEstimated 搜一下

备用: thanks (reply to 64728)

User<7950000631>: Hello

Champer Wu: 有人follow到 MyTonWallet近期的更新 造成註記詞無法直接拿取 Ton Wallet私鑰的問題嗎？ 如果有的話，我這邊已經有solution了，提供給大家

Champer Wu: import { derivePath } from 'ed25519-hd-key'; import { mnemonicToSeed } from 'bip39'; import { keyPairFromSeed } from '@ton/crypto'; import { WalletContractV5R1 } from '@ton/ton';  async function extractKeysFromBip39Mnemonic(mnemonic, index) {   const seed = await mnemonicToSeed(mnemonic);   const seedContainer = derivePath(`m/44'/607'/${index}'`, seed.toString('hex'));   const keyPair = keyPairFromSeed(seedContainer.key);   const { publicKey, secretKey } = keyPair;    const publicKeyHex = publicKey.toString('hex');   const privateKeyHex = secretKey.toString('hex').slice(0, 64);    const wallet = WalletContractV5R1.create({     workchain: 0,     publicKey: keyPair.publicKey,   });   const address = wallet.address.toString({ bounceable: false });    return { wallet, address, publicKeyHex, privateKeyHex }; }

gavin: 请问 这个路径 m/44'/607 是规范吗？ 会不会每个钱包还不一样 (reply to 64753)

Champer Wu: 每個都不一樣，但ton上面的路徑是這個 (reply to 64755)

User<7795696100>: 進我頻道，看免費策略

Champer Wu: https://docs.tonxapi.com/reference/estimate-fee (reply to 64740)

gavin: 了解拉

Champer Wu: Ledger的路徑也附上  async function extractKeysFromLedgerMnemonic(mnemonic: string, index: number) {   const seed = await mnemonicToSeed(mnemonic)   const seedContainer = derivePath(`m/44'/607'/0'/0'/${index}'/0'`, seed.toString('hex'))   const keyPair = keyPairFromSeed(seedContainer.key)   const wallet = WalletContractV4.create({     workchain: 0,     publicKey: keyPair.publicKey,   })    return { contract: wallet, keyPair } }

Myron: 想问一下使用liteserver时扫描区块发生这个报错   大家有遇到过吗？

Lee: tonhub可以切换钱包版本吗

Lee: 咋只有w5版本的

古风背景书: 这什么代码？ (reply to 64777)

007: 有谁知道怎么提交app审核

007: 开发完应用 怎么提交商店审核 审核需要多久

— 2024-10-23 —

DaDa: 本周四（10月24日）  「TON生态之夜」嘉宾招募 ————— 计划主题：大会前瞻：你期待 TON 生态带来哪些新机遇？  背景介绍： 随着 2024年11月12日 TON 生态建设者大会 的临近，全球的项目方、开发者、和社区成员即将聚首，共同探讨 TON 生态的未来。这样的大会不仅是展示技术和产品的舞台，更是捕捉合作机会、交流新趋势的绝佳场合。在这场汇聚创新与思想的盛会上，你最期待看到哪些突破？又希望在大会中收获什么灵感或机会？  在这次 TON生态之夜 中，我们邀请大家一起聊聊对大会的期待，分享以往的收获和经验，为即将到来的活动做好准备。 ————— 欢迎 TG/TON 生态的项目方、开发者、投资人、研究者加入一起交流讨论。 有兴趣参与的伙伴，请给我私信，有信必回！ (forwarded from DaDa)

EZ: hello 我想问一下：

EZ: amountTokens := uint64(1e9) // 1 Jetton queryId := uint64(1428712277500113) // Create the forward payload forwardPayload := cell.BeginCell() forwardPayload.MustStoreUInt(0x7362d09c, 32) // Example op code forwardPayload.MustStoreUInt(queryId, 64) forwardPayload.MustStoreCoins(amountTokens) forwardPayload.MustStoreAddr(w.WalletAddress()) forwardPayloadCell := forwardPayload.EndCell()  fmt.Println("forwardPayloadCell", forwardPayloadCell)  // Build the transfer payload to := address.MustParseAddr(cAddr) //dest := address.MustParseAddr()  transferPayload, err := tokenWallet.BuildTransferPayloadV2(  to, w.WalletAddress(),  tlb.FromNanoTONU(amountTokens),  tlb.FromNanoTONU(1e7), forwardPayloadCell, nil) if err != nil {  return err }   我这个转账可以转过去 但是最后总是 JETTON NOTIFY EXIT CODE ：128

Hui: 有没有大佬帮我看下为啥我用java的ton4j生成的cell数据和ts生成的@ton/core生成的cell数据不同呢   就是jetton的content 包含 name、symbol、description、image

Hui: java的代码和ts的代码

Myron: 这个不像是稳定性问题    感觉可能是数据不对   会一直卡住  不知道有什么办法吗 (reply to 64763)

Mana: 闪退怎么肥西

lv: 咨询  pytonapi  不支持 wallet_v5r1   我需要decode  boc  有什么办法可以解决否

lv: https://github.com/ton-blockchain/wallet-contract-v5/blob/main/wrappers/wallet-v5.ts   是这块吗？ (reply to 64864)

lv: 之前使用的是tonapi  提供的Message decode 方法

groue_juice: 请教下，我想实现一个合约，某个方法需要支付一定数量的usdt，怎么写呢

Champer Wu: 感覺是沒辦法，usdt的 Jetton minter 是usdt 官方提供。 你要實作這層邏輯，應該會導致init_data無法跟usdt master有關聯性。 但也許有其他大佬們有能力做這件事情 🙃 (reply to 64868)

Champer Wu: 可以提供範例嗎？ 嘗試幫你debug看看 (reply to 64852)

Champer Wu: 試試看生成hash比對看看一不一樣 (reply to 64852)

gavin: 他的代码的问题, ts 里用的是Dictionary类型 java里没这个类型 它就用个HashMap 来存了 (reply to 64877)

备用: 你合约接收usdt,然后用合约上的usdt来支付 (reply to 64868)

Hui: 我调通了 感谢 还是我代码写的问题 (reply to 64876)

Lee: 大家用蓝图部署的时候一般用tonhub吗

Lee: 还是别的选项

jun_song: 使用了@townsquarelabs/ui-vue包 就会报错 does not provide an export named 'default' 请教下咋解决呀

recovery: 老铁们小程序启动时的白屏怎么解决

jun_song: vue项目不能用recat的@tonconnect/ui-react库吧

Islom: 大家好，  我开发了一个支持 Java 的 TonAPI SDK。如果您感兴趣，可以在这里查看：https://github.com/h6x0r/tonapi4j  此外，我还创建了一个支持 Java 的区块链反汇编器。您可以在这里找到：https://github.com/h6x0r/ton-disassembler4j  #java #sdk #tonapi #h6x0r #ton #blockchain

gavin: 非常赞 (reply to 64907)

Lee: 为啥用tonhub扫会失败啊..

User<6680041152>: ❗️❗️❗️❗️❗️❗️❗️❗️  💵❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ ❗️❗️❗️❗️❗️❗️❗️❗️❗️💵 💎❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️💵  💎🐶❗️❗️❗️❗️❗️❗️❗️❗️❗️ - ❗️❗️❗️❗️❗️❗️ - ❗️❗️❗️❗️❗️❗️❗️ - ❗️❗️❗️❗️❗️❗️❗️ - ❗️❗️❗️❗️❗️❗️  👈❗️❗️❗️❗️❗️❗️❗️❗️❗️

west: 如何用C生成钱包，有大佬做过吗

— 2024-10-24 —

roberts: 各位大佬 bot上面的这个人数的东西怎么设置显示出来的？我的bot 这里只有bot三个字母

Root: 怎么精确估算jetton转账的费用

Evan: 预算多一点，一般 0.01 足够了，用不完会会退还给用户；

Evan: 如果jetton 的用户钱包不存，则需要 0.05+0.01;

Root: 就直接配置这样固定值呗，我看估算费用的api，返回的数据不怎么准确 (reply to 64974)

co: 有人知道tonapi需要的accountID怎么获取吗

co: 👏

co: 那没错诶

co: https://docs.tonconsole.com/tonapi/streaming-api#real-time-notifications-about-finalized-transactions

co: 我在订阅账号交易 结果我触发了交易不给我推送 不知道什么原因 那边官方也不回复

co: 离谱了

co: 地址是我自己的账号id (reply to 64994)

co: https://tonviewer.com/transaction/fe61aba10003fa3020331b77a12b45c69c8c9fc51de93b456d95587c085a391c

co: 我订阅消息有误吗

co: 要这个地址？

co: 其实我现在是想实时监控自己的账号有swap交易的时候通知

co: 一个交易不是一个tree嘛 在Jetton Transfer · 0x0f8a7ea5这一步的时候通知我

co: 这个ton的ws支持这样嘛

co: 👍

co: 我时常在ston-fi/dedust上做swap操作 刚发起交易的时候钱包和区块链浏览器上是不会出现hash的 这个交易过程很漫长 有时40s 有时1min多  比如wallet —dedust_swap—> dedust_payout_from_pool—>jetton_transfer—>jetton_internal_transfer—> excess 这一个交易下来我想更早的了解swap是否交易成功了 我理解为jetton_transfer这一步成功了就没问题 所以监控自己钱包地址更好还是vault地址呢 是否有一些现成的demo或api @leouvw

Champer Wu: 哥，你有開源嗎？ (reply to 64907)

co: 谢谢 (reply to 65016)

co: 如果只监控jetton转入的地址会存在一个问题 swap中如果 wallet —dedust_swap—> dedust_payout_from_pool—>jetton_transfer—>jetton_internal_transfer—> excess 在这一步的时候dedust_payout_from_pool出现错误也jetton_transfer好像就不会执行了 所以我这时候可能会等很久jetton_internal_transfer的消息都还没有来

co: 目前没有找到

co: 理解你的意思了 谢谢呀 大哥

co: 通过hash查询交易状态是哪个接口呢@leouvw

jay: 通过收方查结果是比较靠谱的，如果你是发起方，那可以通过 outMsgs 中的 hash 查接收方交易。

co: 其实我主要目的是提早知道交易结果 就像我这里所说 在一个交易树中的其中一个交易完成jetton_internal_transfer这一步就视为整个交易完成 (reply to 65020)

co: 目前我接入ton的ws只能获取到hash 得不到结果还

co: 没有像evm那种可以通过hash查询交易结果的接口嘛

gavin: 有这个, 但是你得能获取到正确的tx hash (reply to 65033)

gavin: 交易在没有被链上确认之前是拿不到tx hash的 你能拿到的只是 in message hash

gavin: 并且因为是异步的 你就算有hash查到的结果 也只是某一步message的结果, 至于后续是否成功可能还是需要遍历所有交易状态检测

co: 找到了 目前我只用确认其中一步我视为所有交易成功

Islom: 1. https://github.com/h6x0r/ton-disassembler4j 2. https://github.com/h6x0r/tonapi4j (reply to 65015)

Root: 的确是差不少，他这个返回值我应该怎么去用呢 (reply to 64980)

co: 按照你的demo会出现这个错误

gavin: 哥你这个解析的真详细😁 (reply to 65047)

gavin: 是的 很多人的学习方法都不正确 (reply to 65049)

Hao: 大佬们，请教个问题， 机器人和小程序怎么获取https://t.me/xxxx?botName=xxxx连接上的参数呀

gavin: 参数名用 startapp

Hao: bot呢

Hao: 小程序用startapp好像是可以了

Hao: 👍

Islom: 在改进过程中，如果发现其他问题，请随时告知。此外，非常欢迎提交 Pull Requests。 (reply to 65042)

Yang: Tech Stack in TON & Telegram  Howard 近期寫了一篇很棒的文章，歡迎大家一起閱讀。  https://x.com/0xHoward_Peng/status/1849156001783529974

Ginta 🦴: USDT是在ETH主链，想转到其它钱包，但是能不能用usdt作为gas呢

Yang: 哥們，是不是走錯棚了 (reply to 65066)

Ginta 🦴: 没，只是问问看看有没有知道的大哥

Ginta 🦴: 好像不太行

2: 你是否在找：意图交易

Champer Wu: 感謝～ (reply to 65038)

Champer Wu: 想問一下是哪個API可以確認交易是否成功呢？ (reply to 65037)

Champer Wu: 人總是需要踩坑了才能痛定思痛😂 踩的坑越多，理解得越全面ＸＤ (reply to 65052)

gavin: 它说的可能是这个  https://toncenter.com/api/v3/index.html#/blockchain/api_v3_get_transactions_by_message (reply to 65075)

Champer Wu: 謝哥 (reply to 65077)

Champer Wu: 你可以打到OKX Binance 等中心化交易所啊😂 這些主流交易所就是目前做的最好的中心化跨鏈橋解決方案 至於去中心化的解決方案，就要等大神們動動手指了 (reply to 65066)

Martinez Mark | TribeTon | Play & Earn $TON: hello guy

— 2024-10-25 —

M: 不能，交易的gas只能是以太坊 (reply to 65066)

yan: 如何以这个页面消除未验证的令牌呢，各位大哥

yan: 各位哥哥姐姐，前辈 们帮看下，如何 在这个页面消除未验证的令牌

熊猫头: 提交你的pull request (reply to 65159)

yan: 点哪个地方提交

yan: 我是不是要登录 github

yan: 才能提交

yan: 登录 了，但是这个提交按钮是灰色的，点不了啊

熊猫头: 先拉出去建一个你的分支 然后push

yan: 我试试哈，谢谢

co: ton链到底能提升gas加速交易🥲 我加了没有用

wikig: 现在TON还没有MEV吧我记得？有排块和交易排序了吗？应该还没有把 (reply to 65195)

erick: 大佬们，我监听到了消息B，如果根据消息b获取的消息A呢

6666feile: tonkeeper的v5钱包的默认wallet_id是多少，同样的助记词，恢复的地址不一样了，😧

erick: 那我可以通过这个A-B消息获得 A的external-In message,就是这个 (reply to 65203)

erick: 通过tonutils-go包的FindLastTransactionByInMsgHash 函数

erick: 好的，感谢，我去看看 (reply to 65207)

Alessia: 各位大哥，jetton钱包是不是只能由另一个已经部署的钱包来部署啊？

Alessia: 说出来你不信，我网上冲浪3天了也没找到相关代码，难道是我姿势不对？

湾仔: 誰有批量轉移telegram nft 的方法？

Alessia: 我有个v4钱包，里面有个相关的空投钱包jw，v4和jw都是noexist，我想直接把jw里的代币转出，就这么朴素的功能

Alessia: 我找到的全是在jw已部署的情况下转出

湾仔: 各說各話，各個需求都不一樣。

湾仔: 誰有批量轉移telegram nft 的方法？

湾仔: 這就把我踢出群了？

DY: 这个我信, 小白深有体会 (reply to 65211)

湾仔: 為什麼我老是不在群裡面呢？

DY: 请教下大佬,为什么APP端生成的V5和谷歌插件生成的V5地址不一样? 我用程序生成的V5地址和谷歌插件是一样的

Alessia: 诈骗APP

DY: 别闹

6666feile: 我也碰到了，头疼。walletId是为了子钱包，但是如果插件和钱包不公开默认使用的walletId是哪一个，就钱包都不能互导了 (reply to 65226)

6666feile: 你用程序生成时，walletId用的42？ (reply to 65226)

DY: 我领测试币用的谷歌插件地址,很尴尬,得手动转下

6666feile: 是，我也是想导一下钱包到app，发现用同一个助记词，导出的地址不一样了

DY: 程序中从V3到V5我都生成了,对比了一下 (reply to 65231)

6666feile: 用的是哪个嘛？

DY: 用V4的地址全都一样了, 就V5有问题

6666feile: java吗？

DY: ts

6666feile: 刚进的，哪条？

6666feile: chrome插件（Tonkeeper Web）的对上了。 APP的呢？ (reply to 65202)

6666feile: Tonkeeper APP

6666feile: 我用v5，walletId是-239+2^31，得到的钱包跟谷歌浏览器插件的一样了。

6666feile: 但是同样的助记词，app里v5的地址不一样

6666feile: 版本是这个

6666feile: 就用这个

6666feile: 密钥是从助记词转出来的

6666feile: 这里的v5是哪个版本，v5beta还是v5r1。那估计是版本不同了咯

galuna233: 标准库里check_signature是验证签名来自合法的钱包地址，我想要的是这个签名是服务器api获取我们后端的合格用户钱包然后服务器私钥发一个签名给合约验证，并且希望合约签名里能拿到那个用户的钱包地址，这样我把它当owner给他mint nft

galuna233: 这样可以做到吗，说的有点乱....

6666feile: 主要是没得选。导入他默认v5

galuna233: ok, 是公钥，钱包地址是公钥的hash吧，以太坊地址我记得是这样的

galuna233: 不知道怎么表述，我想实现的是类似solidity的链下签名，这个签名里会包含api的某些自定义信息，然后在合约里反解出来

galuna233: 哦哦 明白,请问ton里面如何实现这个需求呢, 关于签名的设计

aier: 整个公钥整个合约不就行了，

Allen: 你是想做類似 SIWE 簽名登入嗎？ (reply to 65265)

aier: 地址 -》 合约 -》公钥 -》私钥

Allen: 看一下ton_proof

galuna233: 好的 我先研究一下各位大佬发的。简单说就是我想合约里能验证来自服务器特定私钥的签名，并且能获得额外的信息，这个信息就是我们api再后端逻辑里带出来的，比如用户id 收集的用户钱包等等...

6666feile: 懂你，还没研究到那步，你如果会了可以共享下，哈哈

gavin: https://answers.ton.org/question/1602580552903299072/check-signature-check-data-signature-usage-for-signing (reply to 65277)

Kim: 各位，有telegram miniapp打开的中文社群吗

gavin: 这些操作网络上都能搜得到 直接google一下列子一大把

galuna233: 这个我看过，不是我想要的 (reply to 65284)

gavin: why？ 这还不行吗？ 让你们后端把cell拼好然后对这个cell  的 hash 生成 signature (reply to 65285)

gavin: 合约里面直接用public checkSignature 就完事了

galuna233: 这只能校验，如何反解包cell里带的数据呢

gavin: boc 的cell 是可以parser的 (reply to 65289)

gavin: 按照顺序load 就行了

galuna233: 我理解你是把data cell和 signature cell 一起发送对吧，和leo大佬说的一样，我可能想直接从签名里decode出来

gavin: yes (reply to 65292)

galuna233: 这样也行，那我应该还需要对这个签名做各种拦截检查，比如重入等等?

gavin: 直接从签名里 decode 出来没有必要, 它的安全性是一样的 反而会更加浪费gas

galuna233: 加时间戳?

gavin: 无非是你选择check_signature还是check_data_signature的问题

gavin: https://docs.ton.org/develop/func/stdlib#signature-checks

gavin: 你说的应该是重放吧, 你需要针对签名做一个过期的操作, 比较好的方案是把这个签名的hash 存到一个已经使用过的地方. (reply to 65294)

galuna233: 谢谢 上面的各位大佬，我想这个方案已经能解决我问题了，我是之前写以太坊先入为主了.

gavin: 如果你的潜在用户不是很多你可以使用dict类型来存, 如果很多的话 你可能需要用到“父子合约”的方式

Alessia: 各位大佬，jetton钱包的state_init如何构造？

galuna233: 哦哦 是的，hash是单向不可逆的，我记岔了

groue_juice: 不是很理解，大佬能详细讲讲吗 (reply to 64879)

groue_juice: 这种message中的16进制是如何定义的，我想自定义一个message要如何设置呢？有规范吗

gavin: 十六进制就行

gavin: 没有规范

groue_juice: 随便写对吗

gavin: 随意定义

groue_juice: 好的

sunyoki: 有人接单？

Ginta 🦴: @sunyoki 什么单

谋士: ？ (reply to 65323)

sunyoki: tonkeeper钱包， App版本怎么打开测试网

2: 狂点版本号

sunyoki: func的 (reply to 65324)

6666feile: v5 发jetton的java版本有没有demo啊 @sunyoki

sunyoki: 发jetton 很简单哇

6666feile: wallet v5 (reply to 65332)

Islom: 大家好，  将 Java 版本从 17 降级到 8 https://github.com/h6x0r/ton-disassembler4j  将 Java 版本从 17 降级到 8，修复了与 WebSocket 连接订阅方法相关的错误。TON API 的 Java SDK https://github.com/h6x0r/tonapi4j

我要飞: 有大佬操作过sui 吗？遇到个安装问题能帮看看吗？

User<7832581827>: 你好。 我可以帮你。 (reply to 65336)

User<7832581827>: 您是否希望安装 Sui CLI 来与 Sui 区块链交互？ (reply to 65336)

— 2024-10-26 —

sunyoki: 有人接单吗

Ton: 接啥 (reply to 65377)

sunyoki: 有个不会

sunyoki: 简单的

sunyoki: 一个小功能

co: 👍 (reply to 65335)

hong: tonweb 怎么从助记词获取 w5钱包地址，有哪位大佬知道咋弄吗？

co: @leouvw

co: 我在12:46:08发起的交易 监控到12:46:18 dedust_pool, jetton_master 这一笔交易的时候ws推送过来的时间是12:46:37 间隔相处了这么久 大概是什么原因 是否还可以加速呢 (reply to 65394)

hong: tonweb 怎么从助记词获取 w5钱包地址，有哪位大佬知道咋弄吗？ (forwarded from hong)

co: 哪个接口呀 (reply to 65399)

jay: 直接@ton/ton 就解决了呢，一定要tonweb? (reply to 65397)

co: 你的意思是查最新区块的每一笔交易然后再解析是吗 (reply to 65405)

co: 找到了

hong: 还有其他方法吗？ (reply to 65406)

hong: 好，多谢

sunyoki: y有大神接单吗

007: 什么单

sunyoki: 转账

co: 我通过http发现更慢了 哈哈 无语啦 (reply to 65408)

co: toncenter api没看到有这个接口呀 能帮忙截个图吗 (reply to 65425)

co: 这个吗 (reply to 65426)

co: 那使用哪个字段判断交易状态呢 {   "ok": true,   "result": [     {       "@type": "raw.transaction",       "address": {         "@type": "accountAddress",         "account_address": "EQA-X_yo3fzzbDbJ_0bzFWKqtRuZFIRa1sJsveZJ1YpViO3r"       },       "utime": 1729922790,       "data": "te6cckECEgEAA74AA7Vz5f/Kjd/PNsNsn/RvMVYqq1G5kUhFrWwmy95knVilWIAAAtuqj4HoPqaa7hYNL7veJVrW+fIKYt7G2HacNnDOlc8AbY+kOytQAALbqoQQOBZxyG5gAFRu/BqoAQIDAgHgBAUAgnL+BvG66xzeEy143Ygiks1jHmTvhBWh4dkOuX8eTkYi0z9igPyThliQA3FVf5rme7mORoZZB28un3PikSAIBWO0AhcEU8kC6nIzmG1OchEQEQGxaAAxVRxd2qLo+1wGeA83JxB7KDlbHsqLPl3TmujpbXHauwAPl/8qN3882w2yf9G8xViqrUbmRSEWtbCbL3mSdWKVYhAupyM4BhTCoAAAW3VR8D0EzjkNzMAGAgHdCQoCZWHuVC0AAAAAAAAAAE3Mx7kYATbMWBnHwrWlGsLl26HWqKBXwdOCB7PJMLAe+KLbD33QBAcIAIeAC+Csn2vsCPB7auBjnDns0VEamprbTbybZEVpckGt+wAAIgFiJ1MpagSULOM+0icmUdbrKy2HFEvrIFFijf2bhsQ7/QBLAAAAAIAYnVPRVIwkI9ng7EMEHR2+4CksWcxm+Ws5EuNVFjZ6POEBASALAQEgDQG94AHy/+VG7+ebYbZP+jeYqxVVqNzIpCLWthNl7zJOrFKsQAAAW3VR8D0IzjkNzE4whvGIBYidTKWoElCzjPtInJlHW6ysthxRL6yBRYo39m4bEO/wJuZj3IrXV8X4NUAMAF+AE2zFgZx8K1pRrC5duh1qigV8HTggezyTCwHvii2w990DjI9EX/XAMbD9xkHtPfQBsWgAfL/5Ubv55thtk/6N5irFVWo3MikIta2E2XvMk6sUqxEANrhU6dNiUu8MnSBmM1ibk9d9Kaa0vpWzoD8JkS1cI0gQLKSIfAYRi7QAAFt1UfA9Cs45DczADgFmrU629QAAAAAAAAAAWur4vwaoAYnVPRVIwkI9ng7EMEHR2+4CksWcxm+Ws5EuNVFjZ6PODwCJgAvgrJ9r7Ajwe2rgY5w57NFRGpqa2028m2RFaXJBrfsAAEAQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id/oAJ5IhCwd25gAAAAAAAAAAekAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/JixloTDWz2AAAAAAABAAAAAAABUvm25QuoyVKL/92uOv/cVA4qx8Yqcm4pXil1isiN6QQQVBXXBKVsU0=",       "transaction_id": {         "@type": "internal.transactionId",         "lt": "50279722000003",         "hash": "ZCQfWO45qdA9ZwdvVAvhk94fk9g+q/nobIwHzpgmzRE="       },       "fee": "8431279",       "storage_fee": "79",       "other_fee": "8431200",       "in_msg": {         "@type": "raw.message",         "source": "EQAYqo4u7VF0fa4DPAebk4g9lBytj2VFny7pzXR0trjtXQaO",         "destination": "EQA-X_yo3fzzbDbJ_0bzFWKqtRuZFIRa1sJsveZJ1YpViO3r",         "value": "195676366",         "fwd_fee": "680272",         "ihr_fee": "0",         "created_lt": "50279722000002",         "body_hash": "Qa6fS+sAXVLx+RCvL+gptB3zu2qaAmPmszPYpn/IqnE=",         "msg_data": {           "@type": "msg.dataRaw",           "body": "te6cckEBAwEApQACZWHuVC0AAAAAAAAAAE3Mx7kYATbMWBnHwrWlGsLl26HWqKBXwdOCB7PJMLAe+KLbD33QBAECAIeAC+Csn2vsCPB7auBjnDns0VEamprbTbybZEVpckGt+wAAIgFiJ1MpagSULOM+0icmUdbrKy2HFEvrIFFijf2bhsQ7/QBLAAAAAIAYnVPRVIwkI9ng7EMEHR2+4CksWcxm+Ws5EuNVFjZ6POEpiqiE",           "init_state": ""         },         "message": "Ye5ULQAAAAAAAAAATczHuRgBNsxYGcfCtaUawuXbodaooFfB04IHs8kwsB74otsPfdAA\n"       },       "out_msgs": [         {           "@type": "raw.message",           "source": "EQA-X_yo3fzzbDbJ_0bzFWKqtRuZFIRa1sJsveZJ1YpViO3r",           "destination": "",           "value": "0",           "fwd_fee": "0",           "ihr_fee": "0",           "created_lt": "50279722000004",           "body_hash": "aqe4Ct/2HpNStehHFcjvorRVjQ5yKvcaUZEmTdfZBF4=",           "msg_data": {             "@type": "msg.dataRaw",             "body": "te6cckEBAgEAZQABYJxhDeMQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id/gTczHuRWur4vwagEAX4ATbMWBnHwrWlGsLl26HWqKBXwdOCB7PJMLAe+KLbD33QOMj0Rf9cAxsP3GQe099E8WS/A=",             "init_state": ""           },           "message": "nGEN4xALETqZS1AkoWcZ9pE5Mo63WVlsOKJfWQKLFG/s3DYh3+BNzMe5Fa6vi/Bq\n"         },         {           "@type": "raw.message",           "source": "EQA-X_yo3fzzbDbJ_0bzFWKqtRuZFIRa1sJsveZJ1YpViO3r",           "destination": "EQDa4VOnTYlLvDJ0gZjNYm5PXfSmmtL6Vs6A_CZEtXCNICq_",           "value": "187245087",           "fwd_fee": "574938",           "ihr_fee": "0",           "created_lt": "50279722000005",           "body_hash": "kERwS5RXdVMiX803zknbRUIWiGr65iXyVMM0R/ouYJI=",           "msg_data": {             "@type": "msg.dataRaw",             "body": "te6cckEBAgEAfQABZq1OtvUAAAAAAAAAAFrq+L8GqAGJ1T0VSMJCPZ4OxDBB0dvuApLFnMZvlrORLjVRY2ejzgEAiYAL4Kyfa+wI8Htq4GOcOezRURqamttNvJtkRWlyQa37AABAEAsROplLUCShZxn2kTkyjrdZWWw4ol9ZAosUb+zcNiHf6L3h9SE=", (reply to 65428)

co: "init_state": ""           },           "message": "rU629QAAAAAAAAAAWur4vwaoAYnVPRVIwkI9ng7EMEHR2+4CksWcxm+Ws5EuNVFjZ6PO\n"         }       ]     }   ] } (reply to 65428)

jay: 这个好像有边界问题。我之前遇到过 aborted=true，但交易算成功的。 (reply to 65437)

co: 看见了谢谢 (reply to 65437)

jay: 但这种在业务上就属于正常。 (reply to 65441)

jay: tonapi对此也是success=true

6666feile: TONkeeper APP的测试环境用的wallet_id是2147483645

6666feile: Tonkeeper Web 测试环境用的才是 -239+2^31=2147483409

6666feile: v5的版本到是一致的都是v5R1

6666feile: v5不是可以不用ton转jetton吗？我issue上问ton4j那作者，他还没回我

co: 试了  还是相差了10秒左右 和ws差不多 (reply to 65425)

zonh: 大佬们，toncenter v3版本的接口获取交易，有个traceId字段。 这个v2版本可以获取得到么？

co: 也有20秒的情况 (reply to 65462)

zonh: toncenter v3版本的接口，似乎了用了indexer，但是目前支持indexer的节点提供商似乎并不多。所以想用v2版本的接口去实现一个v3版本数据结构的逻辑。 这个traceId 似乎无法算出来？我现在我想知道查询到的一笔交易是不是这个交易链的第一笔交易。。

co: https://github.com/toncenter/ton-http-api 自己搭这个api节点？ (reply to 65470)

co: 就是想提前预知交易状态 有时候会卡很久才交易完成 我只要确认一步是正常状态就视为整笔交易完成

zonh: 也是个好方式。 traceId 有办法能拿到么？ (reply to 65469)

co: 我不理解的是为什么出块都那么久了 10多秒才同步到api里面 我从未见过如此高的延迟数据 (reply to 65462)

gavin: 要知道可能会分叉 (reply to 65477)

gavin: 就像交易所充值需要确认区块数吧

co: 这样吗 (reply to 65478)

zonh: 假设我现在拿到了链上数据，可以离线算出traceId、txHash不。没搞懂为啥设计的v2版本查询交易的接口没有这些东西

lig: HI

only268: 你好

only268: 有大佬知道怎么调用合约交互吗

lig: 你好

hong: @ton/ton哪位大佬知道有使用文档或者demo吗？

zonh: 还有个问题请教大佬们，{{ton_url}}/v2/getTransactions?address=0:940156D6860735DE9670BE0E80E172D40EF7D49E887B71F7B90F47A0AA70A201&lt=27341990000001&hash=026868b5e64040fec83e992e405c545b767ea4a92e3205013b9f26ca6cf9cfb5&archival=true 这个接口按道理不是应该返回精确的一条交易记录么，为啥会返回一堆交易数据。。

gavin: 😁 (reply to 65497)

夏天: 请教大佬 TON钱包的地址怎么转换呀

co: 牛逼 (reply to 65495)

zonh: tcv3的甚至能直接查到，不需要追溯。 现在我用的v2版本。v3是基于indexer做的，支持的不多 (reply to 65496)

zonh: 哈哈哈，但是我输入了精确条件呀。 (reply to 65497)

zonh: 对的，目前有几个支持的节点rpc。 但我们公司采购的都不支持indexer😂

zonh: 所以就得用v2实现

User<7017804028>: 🪙 🔠🔠🔠🔠🔠🔠🔠 🪙  🙏СLАIМ YОUR 1.000,000 $Х Empire АIRDRОР🙏  🎁New referral system: +50.000 $Х Empire  🌐НURRY UР ТО GЕТ FRЕЕ $Х Empire🌐  🪙🔣Х AIRDROP🔣🪙  🪙🔣Х AIRDROP🔣🪙  🪙🔣Х AIRDROP🔣🪙 (forwarded from User<7017804028>)

Kenneth | FormosArt: 想要登機 (reply to 64524)

Champer Wu: 想問一下各位大佬，既然ton是非同步的設計，那在ton 上面有機會在同一個錢包裡面出現復數個transactions是一樣的logic time嗎？

— 2024-10-27 —

pursue: 有大佬装过func环境吗

pursue: 编译合约时无法识别

Ton: 没遇到过这情况呗

gavin: 用blueprint (reply to 65576)

pursue: 我怎么老是被机器人移除

pursue: 😂

pursue: 有没有比较标准类似 ERC的合约库可以参考的

pursue: https://github.com/Ton-Dynasty/tondynasty-contracts

pursue: 这个合约库，可以通过网址导入吗，还是clone到本地才能使用

pursue: 有大佬在用吗

6666feile: 有没有查交易状态的接口？ 或者说判断标志是解析什么？之前看到群里说判断abort。true是成功还是false是成功？ 但是这笔 https://testnet.tonviewer.com/transaction/5de22caf3fb265618fdcc292de1ff8f681a7333621664d52a081106acd314266 是成功的， abort是false 这笔是失败的 https://testnet.tonviewer.com/transaction/2b9531f176ec8f29e2ad9e6a9e58a3031f45ff025e0f5a7df5da89198801b213  abort 也是false。 那要拿什么判断呢？

Mov: 大佬们，请教一下，Ton链在客户端签完名，服务器怎么验证签名（go）🙏

galuna233: https://docs.ton.org/develop/dapps/ton-connect/sign#examples-of-ton-proof-verification (reply to 65629)

Mov: 多谢多谢！🙏

groue_juice: 请教下，我发了一个jetton token，我现在要实现一个合约方法，操作某些方法要支付我这个jetton 一定数额的token，要如何实现呢？

groue_juice: 我的思路是，在我的jetton wallet中编写一个方法，方法中两个逻辑，先调用TokenTransfer发送到业务合约，然后再发送一个action的message，这样的逻辑对吗？有没有更加优雅的写法？

api: Which project? (reply to 65650)

pursue: blueprint 测试网部署报错

pursue: 有大佬在用吗

SunG: 什么项目 (reply to 65660)

User<7369057093>: 带你入坑 (reply to 65663)

User<7369057093>: 😂

Valoryn: 那就是想骗我钱

— 2024-10-28 —

en: 请问这种徽章是怎么发的，普通项目也可以发吗

Ton: TG 目前能调用gps 定则功能嘛？

gavin: 这个不就是nft么 (reply to 65722)

Hui: 想问下各位大佬 我新地址刚领了一笔测试币 怎么样才能变成激活的地址呢

Lee: 大佬们 请教下。通过toncenter 请求接口后，拿到的cell数据如何解析啊

Evan: 可以参考下，看是否解决你的问题 (reply to 65735)

Lee: 好像不太行

Evan: 它的返回的格式，是hex 编码的不

Lee: 通过toncenter的runGetMethod，调用get_jetton_data 方法获取到的数据

Lee: 类似这样

Evan: 这个直接读就可以了

Lee: 咋操作啊大佬

Evan: 官方demo 里面有

Lee: 没找到呐

Lee: 在哪里啊

Evan: https://github.com/ton-blockchain/token-contract/blob/main/wrappers/JettonMinter.ts

wikig: https://t.me/fragements_bot/app  可以参照这个 (reply to 65726)

Lee: 这是ts的，和我的场景不太一样

Lee: 我是想用go去调用toncenter的api，解析返回值

Jackie: 大佬们有懂SOL链的没有，https://testme.mefoundation.com/login这个网站是不是钓鱼网站？

Jackie: https://testme.mefoundation.com/login

wikig: 反正没签名就屁事没有，有签名一概不要点。  或者去 blowfish.xyz 查一下白名单 (reply to 65764)

Jackie: 签名了这种消息

wikig: 看起来没问题，但建议不要签

wikig: sol上签名需谨慎

Jackie: 问题是已经点了，后来才发现有点不对。。

wikig: 看起来电子包浆还算合格，但是说明不了什么问题

Jackie: 朋友发给我的，我以为是官网，没仔细看

wikig: 那安全起见就老老实实换个钱包把资产转走呗有什么可说的 (reply to 65771)

wikig: 赔率为负，不赌为赢

Jackie: 有几个SOL，我已经转走了，但这个地址还绑了一些其它撸毛的，空投的东西

Jackie: 按理，没办法转走还没有发行的币吧。。

Jackie: 😂

wikig: 嘛，那你不就留一点点sol在里面拿到空投之后再说咯hhh (reply to 65778)

Champer Wu: https://github.com/xssnick/tonutils-go  裡面有包tvm/cell 他有定義Cell Slice的 method，跟ts Parse一樣照著做就行。 (reply to 65757)

Lee: ！谢谢

zonh: v2版本的获取交易信息的接口里面查不到高度么

u7: 請問如果/api/v3/jetton/masters沒有回傳decimals默認是9嗎

Root: 哪个API可以使用jetton master address 获取token的详细信息，为什么有些token 不返回小数长度

Root: 🥲啊。。。访问URL？

— 2024-10-29 —

Po: 請問有空投工具介紹嗎? 以下那個收費超貴, 要0.12TON才發一個地址 anyone come across a good token distribution tool that is not charging a lot? I found one (ton multisender app) but it is charging about 0.12 TON per address Thanks!

gavin: 什么工具？

Po: 例如空投代幣到300個地址 (reply to 65861)

Po: 可惜已部署了, 是已流通的 (reply to 65864)

gavin: 0.12 ton 其实成本就差不多了

gavin: 因为用户接收一个新的jetton  要预留一点ton做租金

Po: 這樣子啊, 我如果手動發送, 預計的fee只是 0.03, 多出4倍 (reply to 65867)

gg: 请教下 如果合约通过transfer_notification监听到代币收入，发送人是钱包地址还是jetton_wallet地址

gavin: 当然是 jetton_wallet

Po: 這群可以發連結的嗎? (reply to 65871)

Po: https://tonviewer.com/transaction/41ad0dc637682c46c8a1e3e88550634438e91640ed0c228884ca367ebab4ddd3  這個手動發的 (reply to 65876)

Po: 最終才 0.02 TON (如果我沒有看錯) (reply to 65877)

Root: 这个应该用哪些api组合去获取呢，如果是默认9，有没有办法识别到，或者哪里有api文档可以看 (reply to 65794)

zonh: 大佬们，这个cell

zonh: 大佬们，这个cell如何变成地址？ cell.fromBoc() 变回去的值不对啊

zonh: bytes 就是那个Cell，下面那个b64是干嘛的

gg: wallet - A - 合约 - B - wallet 这里合约收到的发送方是A的话，只能通过ref解析钱包地址才能把B发送到用户wallet嘛？ (reply to 65873)

Po: 謝謝你, 我不是很熟TON生態的合約, 沒有完全看懂 (reply to 65888)

gg: 例如私募： 用户投入jettonA 得到jettonB  用户钱包 — jettonA — 合约 —jettonB — 将代币B返回钱包 合约收到的消息发送方是jettonA的话，我如何正确的吧jettonB返回给用户钱包 只能通过携带的ref去解析嘛？

Po: 確實是花了多少? TON viewer 太詳細看不太懂 有什麼好的explore也可以介紹一下 (reply to 65896)

gg: 哥 再接着请教一下 合约只知道要收jettonB代币，我在合约里面是写死jettonB的mint合约地址嘛？如何判断我收入的是预期代币 合约操作JettonB的前提是需要知道jettonB_wallet地址才能发消息，也就是说我需要提前在合约记录jettonB_wallet嘛，有没有知道合约mint地址，能自动算出wallet地址方法！还是说都只能通过携带的相关信息来处理啊 (reply to 65897)

Dan: 亲测，最少要0.045 (reply to 65899)

Dan: 批量空投，少了会抱错

Dan: 官方jetton合约限制了的

Dan: 2 * gas_consumption() + min_tons_for_storage()就0.04了

Dan: 那就只能看代码或者自己尝试了

Dan: @leouvw 话说老哥知道ton verify开源合约代码有api支持的么

Alessia: 请问一下，只要广播成功，last_trans_hash就一定会变吗？会有延迟吗？

Champer Wu: const data = await response.json()   const jettonWalletAddress = data.result.stack[0][1]; console.log(jettonWalletAddress);   const cell = Cell.fromBase64(jettonWalletAddress.bytes);   console.log(cell.beginParse().loadAddress());   {   bytes: 'te6cckEBAQEAJAAAQ4AJXbRpaltZuJXb/N2jyX8uNbQOi8UiEAnrxFGPoRoebpC+5KtH',   object: {     data: {       b64: 'gAldtGlqW1m4ldv83aPJfy41tA6LxSIQCevEUY+hGh5ugA==',       len: 267     },     refs: [],     special: false   } }  EQBK7aNLUtrNxK7f5u0eS_lxraB0XikQgE9eIox9CNDzdMFX (reply to 65884)

zonh: @carzygod 感谢大佬，搞出来了。

zonh: 用v2版本的接口去处理业务真蛋疼🙁

wikig: (又不是不能用.jpg (reply to 65935)

zonh: 没错，“能用” 🤪

zonh: v2版本根据地址查，这笔交易也查不到么🙁

zonh: 地址状态变成nonexist，ton链上会把所有的数据都清掉么？ 通过v3直接用msgHash查，查的数据难道是indexer的db缓存的么。。。。

gavin: 当然 不缴纳租金 难道让白嫖吗🤪 (reply to 65945)

zonh: 那就是区块数据和账户数据还分开了，区块数据还是包含这笔交易的，但是账户没有租金后，所有的信息就都清掉了。

zonh: 也就意味着如果某个nonexist的地址发生回弹，v2版本的接口无法查询到这笔交易 (reply to 65947)

zonh: 牛逼。 我如果不保存前一个交易节点，在这个回弹节点怎么能拿到前一个节点的txhash么？ (reply to 65955)

zonh: 确实是，no

zonh: 确实是nonexist的地址，lastTransactionid 是无效的。

zonh: A向B发送转账消息，B账户收到outMsg消息处理后后发现交易需要回弹，会向A发送一条回弹消息，然后A收到回弹条消息后，怎么从A收到的这条回弹消息反查回B账户收到的那条消息。 如果B账户不是nonexist，可以根据地址遍历出B的这条outMsg的消息。但是现在B账户是noexist的，只通过address查不到任何信息。那可以从A收到的这条回弹消息，关联回B的发送的那条消息么。我看A收到的回弹消息似乎拿不到B发送的那条信息的txHash和Lt？ (reply to 65962)

zonh: 简单来说就是A收到的一条回弹消息，我想去B的地址上查到这笔交易。从这条回弹消息可以拿到查询所需要的txHash和lt不。 我解析了一下交易似乎没发现相关的数据(B账户下的txhash和lt)，我不确定是不是我漏掉了什么🧐

zonh: 这种可以，直接用inMsg的信息就能查出前一笔的消息，这种方式可以替换大部分v2版本的getTransation场景了。

mackey: 麻烦问下大佬，在miniapp如何使用eventSource，我这边监听sse事件一直报错，其他miniapp打开链接我的钱包，监听sse

gavin: 分享一篇 TL-B相关的文章 https://mirror.xyz/0x8f7BEE940b9F27E8d12F6a4046b9EC57c940c0FA/1XzAVkEQOel1b6dvZkvGD3MnyX91yJI9aVYMTthH_eg

Oudi: 大佬们api  key怎么取啊？

Oudi: 找了一圈没找到怎么获得

大宝宝 兑换TRX能量 代开飞机会员公群担保 *资金往来语音确认*: https://fragment.com/number/88804161369

大宝宝 兑换TRX能量 代开飞机会员公群担保 *资金往来语音确认*: 便宜出

asfffe: 大佬们，收到交易消息，通过什么来确认是usdt呢

asfffe: 哪家的api key (reply to 65987)

Evan: 我也收到了

Evan: 这个群的骗子不少，大家一定要小心

Valoryn: 他p图的是吧

Evan: 群里管理员，把这些都给踢了

Valoryn: 他个人账号，也能做这个问候语吗

Valoryn: 原来如此

Valoryn: 兄弟们，他也来了

Yang: 已移除，有這些事況可以 @ 我。  感謝各位！良善環境維護，你我攜手

— 2024-10-30 —

zonh: @leouvw 大佬再请教一个问题。。。v2版本的{{ton_url}}/v2/shards?seqno=24477642 和 v3版本的{{ton_url}}/v3/masterchainBlockShards?seqno=24477642 为啥结果不一样啊。。我擦

zonh: 我理解这接口不都是查询主链某个高度打包的分片链的信息么。。

zonh: v3版本中有 shard.seqno  等于 26131133 的接口，v2版本接口就没这个。。。

zonh: 而且接口返回的v3的workchain=0的分片有7个，v2的只有4个。。。

Zqy: https://github.com/ton-blockchain/ton/issues/1328#issue-2622800255

zonh: 这不是原始数据么。。v3直接返回了。 v2才是贴心的合到一起去，多次一举啊😤 (reply to 66071)

zonh: 那v2版本怎么查mc下所有打包的分片，看api没有其他方法了啊

Zqy: 文档更新的建议可以这么写吗

zonh: 有道理。 只是感觉v2版本做了很多比较奇怪的操作。。明明链上都有的数据，但是v2版本返回的时候就不全。 (reply to 66077)

zonh: 也可能是链上数据就是这样，是v3帮忙解决了这些逻辑

zonh: 我想根据mcSeqno拿到他下面的所有的shard和seqn，是不是就做不到了。 (reply to 66080)

zonh: 大佬，麻烦指教下🥸  我看接口没有 (reply to 66091)

zonh: 根据prevBlock追溯到上一个shard？ (reply to 66094)

jojo: 1

Root: https://testnet.tonviewer.com/transaction/dea1823d9e93caf66b8ebdfffa0a57fd1eb968d310e7a600538c4ba5123f1386?section=trace   这种jetton 转账的失败 怎么通过liteserver的api获取到呢

jun_song: hbuild创建的项目 当pages.json文件中路径有多个的时候，tg打开小程序就会出现白屏 但是在浏览器打开是正常的

jun_song: 请问下有遇到的大神吗

jun_song: pages里只放一个页面首页是可以的 多放一个另外的页面就会白屏

chen: 最近老板要开发ton上的gamefi小游戏，但我当前只是是laya前端开发。看文档有点懵逼，有没有经验丰富的大佬带带啊🙈

pursue: blueprint部署测试网，钱包版本识别失败

pursue: 有大佬遇到过吗

gavin: 版本问题 (reply to 66132)

pursue: 有修复方法吗 (reply to 66134)

gavin: blueprint 升级到最新版

gavin: https://github.com/ton-org/blueprint/commit/ca4dcdd9e17e4bd0fcc2168801fe311997a81e67

gavin: 上个月的最新版已经支持了V5R1

pursue: Ok

pursue: 我试试

pursue: 升级了blueprint又报了识别不到ton-crypto错误

gavin: 你直接重建新的工程试试呢？

jun_song: @chrisiali 你好 有遇到我这问题吗 (reply to 66116)

gavin: 你这个如果不用tg打开 用普通浏览器打开 正常？ (reply to 66146)

gavin: 这个看着是uniapp的问题, 和tg没啥关系吧，去找找uni的文档吧

pursue: 我拉的是这个repo  https://github.com/ton-blockchain/token-contract/ (reply to 66145)

pursue: 无法构建

pursue: 标准代币合约

gavin: 这个工程都是很老的了。。。。 当时都没有v5吧 (reply to 66150)

jun_song: 对 (reply to 66148)

pursue: 额。。。

pursue: 有没有比较新的标准代币合约呢，大佬 (reply to 66153)

gavin: https://github.com/ton-org/blueprint?tab=readme-ov-file#quick-start- 重建新的工程, 然后把旧的合约拷贝过去就行了 (reply to 66156)

jun_song: 和代码没关系 我新建项目加一个页面也是这样

pursue: 新建的工程没问题 (reply to 66157)

pursue: 但我想问的是有没有标准的代币合约可以拉下来直接用的😂

User<6975664628>: 有没有大佬知道这个问题如何解决呢

EncryptPecker（-25s->100s）: buffer这个文件 (reply to 66164)

EncryptPecker（-25s->100s）: 你需要用之前，把buffer这个依赖给引用上

Champer Wu: 以前還有 ton-core, ton3-core 並行的時段 然後 現在的 @ton/core Cell type 跟過去的兩個包都互相不支援😵‍💫😵‍💫😵‍💫 (reply to 66153)

Champer Wu: 沒辦法吧 你要自己去每一個phase裡面判斷他的exit code才能知道他成功或失敗 你要簡單只能透過rpc provider 建立的 indexer service (reply to 66115)

CICI: 这里的这个地址是什么作用

gavin: 找零通知

pursue: tact vscode 插件是哪个

乌冬: 哪里有测试币 可以领的呢？

Zqy: 你好你好 (reply to 66206)

Zqy: 啥？ (reply to 66231)

— 2024-10-31 —

Kenneth | FormosArt: 請問各位大大我要從miniApp發訊息到自己的bot怎麼做 有什麼key word嗎

M: https://docs.python-telegram-bot.org/en/stable/examples.webappbot.html (reply to 66260)

品誉: 分析交易信息 (reply to 65995)

Alessia: 代币钱包里的ton要怎么转出啊😂

Kenneth | FormosArt: answerWebAppQuery  無法使用 請問要怎麼發訊給bot呢?  我從外面發post 想要傳送訊息到bot chat裡面

Ginta 🦴: 有做过tg mini app 的吗

QSO: 有需求要外包吗？ (reply to 66281)

wikig: 看做什么内容了，这东西本质还是h5 (reply to 66281)

CICI: 怎么知道 sendTransaction 后 交易有没有成功，有没有类似以太坊的，事件广播

en: 现在ios 也可以用虚拟货币支付了吗？不是必须用star 吗

chen: 大佬们 使用ton-connect ui链接钱包之后，有办法直接获取当前toncoin余额呢？

gavin: 拿到地址就能取啊 (reply to 66292)

chen: 试了下用返回的地址 使用TonClient getBalance 获取到了 👍 (reply to 66293)

chen: 请问如果使用TonClient4 需要一个seqno， 这个参数tonconnectui那边有办法获取到吗？

live: 这个参数是在钱包合约中的 (reply to 66297)

wikig: 估计只是监管铁拳没砸上去hhhh  而且看样子走的是bsc也就是走uxuy wallet (reply to 66291)

live: 你可以通过seqno方法从钱包合约中获取 (reply to 66298)

chen: 我想new一个WalletContractV5R1 需要publicKey [Buffer 32]参数， 但是tonconnectui那边获取publicKey确实个64位的string ，如何才能转换成32的buffer ，规则是什么呢 在文档里面没找到  求大佬解答 (reply to 66298)

gavin: 一个是hex string 一个是buffer 可以相互转换的

chen: 额 主要是不知道这个hex是按哪种算法来的

galuna233: const publicKeyHex = '0x' + Buffer.from(publicKey).toString('hex')

galuna233: 自己反一下

en: 你说的监管，是说电报吗 (reply to 66299)

chen: 666 就是这个 👍👍👍 (reply to 66307)

wikig: TG和apple的联合操作其实是 (reply to 66309)

Laertes 🐈‍⬛: 大佬们，为啥我 Tonhub 发送交易一直在超时状态啊，想在测试网上部署合约

Laertes 🐈‍⬛: 总是这样，已经很久了

Laertes 🐈‍⬛: 我搞好了

Lee: 咋搞的

Lee: 我之前也是这样

Laertes 🐈‍⬛: 看了下tonhub的文档，钱包换成了SandBox，可以正常连接测试网了

U🙅TRX: telegram ads 10月份有人过审了吗，我的怎么一直in review

— 2024-11-01 —

Kenneth | FormosArt: 我正在做 (reply to 66281)

Ember: 朋友们，同步节点一直报错是咋回事呢

Ember: {"@type":"error","code":500,"message":"LITE_SERVER_NETWORKtimeout for adnl query query","@extra":"364ebd62-4153-4352-870b-3d232c38651c"}

Ember: Error in tonlib.receive(), 5 times was not able retrieve result from lite-server.

Lou: ton 文档又更新了

Lou: 我干

Lou: 😅

w: 有没有大佬知道highLoad walletV3钱包要怎样创建，在tonkeeper没见到可以创建这种类型的钱包的😳

jay: 代码创建

jay: https://github.com/hstarorg/tonkit/blob/main/scripts/02-batch-send-jetton-1.ts

Zqy: TON区块链部署的Gas优化专家 您是否正在寻找具有优化Gas使用的合约部署？我是TON区块链部署领域中的Gas优化专家。我的专业领域包括： 在TVM汇编代码中实现功能等价的指令替换，以减少Gas消耗。 在不改变底层逻辑的情况下最小化单元操作，从而优化Gas使用。 运用多种策略实现成本效益更高的部署和功能实现。 我的专业知识确保您的合约在保持与高级代码相同的逻辑功能的同时，显著降低部署和执行的成本。

郑云: 兄弟方便加个飞机吗 (reply to 65935)

郑云: 像你学下

Laertes 🐈‍⬛: "ton": "^6.13.1",   TonClient 没有 open 方法了， 要怎么打开合约？

Laertes 🐈‍⬛: Property 'open' does not exist on type 'TonClient'

CICI: 怎么使用v3的接口

cai: 大佬们 谁能指导下ton用助记词 完成API自动支付要怎么搞

cai: 有例子吗

Cyber: lp质押合约有例子吗

Na: 大家好,请问下,有没有谁有ton兑换usdt的汇率的啊?

Zharko: 大佬们，这tg小游戏有缓存吗？为啥看不到?每次都需要重新拉资源

Fuckintosh: hello, how to get w5 wallet address by nodejs?

jay: https://github.com/hstarorg/tonkit (reply to 66425)

zk: 求问下liquid staking的问题，我看https://github.com/ton-blockchain/liquid-staking-contract/blob/main/Readme.md这里流程的话，需要validators主动向controllers请求funds，那么理论上就是pool本身也需要创建自己的validator是吗？

Asset@⃝꙰⃝꙰⃝꙰⃝꙰⃝꙰⃝꙰⃝꙰⃝꙰⃝꙰⃝🚀 ℵ: Hi

Tony: 有人用过ton4j吗？我的Java应用在windows上跑得好好的，但是放在linux跑2分钟后会报"A fatal error has been detected by the Java Runtime Environment:"的错误，已经下载了最新的tonlibjson-linux-x86_64.so文件

U🙅TRX: telegram ads 是不是中文都过不了啊

U🙅TRX: 一直inreview，十月份

U🙅TRX: 谁有过的？

U🙅TRX: 生成私钥和公钥： 使用助记词生成对应的私钥和公钥。 可以使用TON官方提供的工具或库，如ton-community/ton-api-v4来完成此操作。 确保在安全的环境中进行，并妥善保管私钥。  部署钱包合约： 在TON区块链上，每个钱包都是一个智能合约。 您需要使用生成的公钥部署钱包合约。 部署时需要支付少量的TON币作为网络费用。 请注意，不同版本的钱包合约可能具有不同的功能，选择适合您需求的版本。  TOKENPOCKET HELP  与TON区块链交互： 使用TON提供的API或SDK，与区块链进行交互。 您可以通过这些接口查询账户余额、发送交易等操作。 TON官方提供了REST API，方便开发者进行集成。  TON  构建并签名交易： 根据您的支付需求，构建相应的交易数据。 使用私钥对交易进行签名，以确保交易的合法性和安全性。 签名过程可以使用TON的开发工具或库来完成。  发送交易： 将签名后的交易通过API发送到TON网络。 等待交易被确认后，即可完成支付操作。 (reply to 66413)

— 2024-11-02 —

User<8042106964>: 找到组织了， 之前 TG 账号退出，短信不能登录，不得不重新注册账号。

Tony: 这个问题有人能帮忙看看吗，用java的大佬们😂 (reply to 66446)

Andrew: 一劳永逸的方案就是，不要用 Java，改用 JavaScript/TypeScript (reply to 66481)

Logan 🐯: 4158错误码是啥

sponge: 大佬们，请教个基础问题，我向一个 inactive 地址转账，init 该怎么填呀

gavin: 填空 (reply to 66492)

Andrew: 你是可以给一个 nonexist 或者 uninit 的钱包地址转账，对方是可以接受 TON 转账的。  当钱包所有者自己发消息时，会自己初始化  https://docs.ton.org/learn/overviews/addresses (reply to 66492)

6666feile: 跑了挺久了，好像没碰到这个问题，ubuntu20 (reply to 66481)

jay: 对方是收款方，你不填init都是ok的。 (reply to 66492)

zk: 有大佬了解吗 求问 (reply to 66433)

11: 十月开始就这样了 以前没问题的 (reply to 66467)

Lee: 哈咯，

Lee: 纸飞机的bot，怎么上线啊

U🙅TRX: webhook

U🙅TRX: 对接好

Lee: 我本地写了个demo,怎么样才能让大家都能搜到我这个demo呢。。。

Lee: 一般部署在哪里呀 (reply to 66520)

Lee: Heroku 吗？

U🙅TRX: cloudflare

U🙅TRX: 赛博活菩萨

U🙅TRX: 你们不用吗

U🙅TRX: 用cloudflare woker

U🙅TRX: worker

Lee: 刚接触呢，我去了解下

Lee: 谢谢哈

Lee: 大佬，我这个demo用的是ts写的，这个是不是指支持js啊 (reply to 66530)

— 2024-11-03 —

mackey: 大佬们，如果作为一个miniapp钱包开发者，如何接入tonconnect/sdk，能够与其他dapp创建链接，并提供钱包的相关能力

Andrew: 类似 UXUY Wallet 这样的效果吗？ (reply to 66582)

mackey: 对 (reply to 66583)

Andrew: mini-app 的 url 后面可以附带参数，可以互相跳转。 定义一个 protocol 支持相关能力就好。不过这不是一个简单的工作。 (reply to 66585)

mackey: 这些功能现成的sdk还没有支持哈 (reply to 66586)

Andrew: 是的，你需要的功能已经不是 tonconnect 的场景了，缺失的功能就自己写吧 (reply to 66587)

mackey: 好吧

Logan 🐯: ton钱包能直接支付usdt 嘛？

TON: 可以，有TON链的USDT (reply to 66620)

— 2024-11-04 —

Evan: 大家平时使用多的 usdt， 还是jusdt了？

备用: jsdt是啥? u都是指usdt. 在不同的链都有发行. (reply to 66678)

Sophia Rose: 大佬们。开发支付的时候这个前端返回的密文如何php解密

Sophia Rose: 就这个json

Sophia Rose: 他的sdkphp 版本看的不太明白

Ginta 🦴: 有没有做过链上游戏的ui呢 或者认识的

Kim: 各位，miniapp代码运行到这段：await tonConnectUI.sendTransaction(transaction);在小程序上弹出了WALLET，但一直在加载，不会自动跳到确认转帐界面，必须手动点击打开WALLET才能显示转帐确认，这是因为什么呢？

gavin: https://mirror.xyz/0x8f7BEE940b9F27E8d12F6a4046b9EC57c940c0FA/nlZCX3UHx865gFy9jLApzzZifG1FPl3gfoFm9DIoz-c 分享一篇文章 写的TL-B Cell的实现原理不错

Evan: 可以参考ts解包逻辑： (reply to 66693)

Evan: 语言本身只是写略有变化，但是思路是一样的

Kim: tonConnectUI= new TonConnectUI({             manifestUrl: tonConnectUI_manifestUrl,             buttonRootId: buttonid,                      });  各位求助呀，如果是使用在miniapp上，上面代码中的manifestUrl参数怎么设置，是需要miniapp的地址格式吗？要怎么写？

Yang: QoS maintenance  Due to emergency infrastructure maintenance work, services https://elections.toncenter.com, https://testnet-elections.toncenter.com and https://toncenter.com/api/qos will experience reduced availability in the period between 03:30am and 05:30am UTC on Tuesday, 5 of November 2024. (forwarded from TON Status)

Yang: 望週知 (reply to 66715)

Ali Karaman: 问下ton钱包kyc失败怎么办

Ali Karaman: 有人知道吗？

jun_song: 请问下如何解析 https://tonapi.io/v2 接口返回的 raw 字段内容呀 或者raw_body

gavin: https://docs.ton.org/v3/documentation/smart-contracts/tolk/overview  又新出了一个Ton 开发语言啊

Aiko: 📎We are recruiting for our Web3 project!  We are looking for passionate and talented people to join our team and help us build the future of the decentralized web.  🎮 We are recruiting for the following positions:  1) Beta Tester: ($485/week)  2) Moderator: ($760/week) 3) Community Manager: ($940/week) 4) NFT artist: (to be negotiated personally) 5) Developer:  ($1,540 - $4,800+/week) 6) Game Designer: ($1,350 - $3,850+/week) 7) Marketer:  ($1,150 - $3,460+/week) 8) Security specialist:  ($1,730 - $4,800+/week) 9) Tokenomics specialist:  ($1,920 - $5,770+/week) 10) UI/UX Specialist: ($1,350 - $3,460+/week)  📊The presale for our game token is also open !  If you want to try your hand at this project, contact our manager: @LuciaVelasquez💬

Leo: 看起来只是把func的语法改成像ts🧐 (reply to 66736)

— 2024-11-05 —

gavin: 对，语法糖而已没解决问题 (reply to 66776)

jay: 官方态度是怎么样的呢？这么多语言，能扶正一个么？

jay: tolk从文档层面比tact 地位高。

jay: 看下来，感觉这个语言比 tact 更有机会。

jay: 看下来tolk就是亲儿子，我看官方目标是替代func

zk: 感觉替代func不太可能 主要老合约都是func

jay: 我理解最终都是编译到fift。

jay: 另外是编译器分支，所以提供了转换器。

jay: 这个玩法功能层面没有损失。tact有点难竞争。

gavin: tolk的可读性比 func强很多

Evan: 是FunC v0.5 分叉出来的，变成tolk； 看里面的介绍，可以理解func 的大升级单独拉一个版本；

Evan: 还是继续func 吧，等它发个几个版本稳定了，相关工具链支持不错再搞吧，否会花很多时间去折腾各种坑！

Evan: 😀

jay: 正式环境继续 func，这个可以提前折腾。

Noah: 有大佬帮忙看下吗？为什么交易的状态时成功了 但是，但是加以细节里却是失败了。

Andrew: Jetton Internal Transfer 成功了就好，你这个失败的应该是一个 Jetton Notify，只是用于通知，不影响转账。  就像你银行转账成功，发送通知短信失败，可以忽略 (reply to 66810)

Andrew: 当然，如果你是开发者，还是要保证 Jetton Notify 成功的，比如是否是因为 gas 不够等等。

Victor: 哈啰，如果你需要一个 API/RPC 以更稳定和快速的构建应用，TONX API 刚发布了一些重要更新，分享给各位：  • New JS SDK tonx/core（适合新用户） 支持 TONX API v2 • tonx/adapter: 从 TonClient, TonWeb, TonClient4 无缝迁移 • BoC Parser • Estimate Fee API  详细内容请看这里: https://t.me/tonxapi/36 。11 月是免费体验期间 (Code: NOV30)，欢迎试试！

CICI: forward_ton_amount 这个值必须设置嘛，是干嘛的

User<8042106964>: 看你的 forward_payload做啥用 (reply to 66833)

w: 有大佬知道怎样创建一个highload-wallet吗？我用的是tonkeeper，但没找到在哪里创建highload-wallet

Andrew: https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md (reply to 66833)

Andrew: https://docs.ton.org/v3/documentation/smart-contracts/contracts-specs/highload-wallet (reply to 66835)

w: 不能用app创建吗？😳 (reply to 66837)

Andrew: 你既然需要highload 了，应该需要编程的方式来使用吧？ 所以最好是编程部署和使用 (reply to 66839)

w: 用v5钱包可以代替highload钱包吗，我看v5钱包的demo是可以一次性进行多笔转账的🙈

Andrew: 你的需求是什么？ (reply to 66843)

w: 要支持一次发送10笔以上的转账

Andrew: 你是想通过某个 App ，一次发送 10 笔转账？ 还是你可以编写代码不需要 App ？ (reply to 66846)

w: 用代码

CICI: transfer usdt (reply to 66834)

CICI: 需要设置嘛，多少合适

w: 我看GitHub上面ton4j的v5钱包的demo演示，这是可以一次性发送255笔转账的意思吧😳

Andrew: git@github.com:ton-blockchain/wallet-contract-v5.git  看代码是可以的，你写的demo 测试一下 (reply to 66855)

CICI: 怎么解析这个transaction

CICI: 我想知道这个转账USDT的金额是多少

wiwi: 去看 outMessage

CICI: 这个值不对啊 (reply to 66866)

CICI: 我想要这个值

CICI: 找到了，感谢 (reply to 66866)

Champer Wu: 今天聽同事講 TON transaction 的機制要改變了 為了要實現Atomic 所以之後他的每一個message會用ref包起來，讓一整個transactions是可以被追蹤的 大家有follow到這件事情嗎？

aier: 我还以为终于要妥协了嘞，下次找交易是否成功就好找了，结果白高兴一场

Champer Wu: 也是，我本來想的是可以追蹤代表他可以在單一message失敗的狀況下全部rollback 剛剛思考了一下，message發送出去就是發送出去了，成功的部分還是已經執行完畢了

Champer Wu: 但對於開發者來說已經算是一大福音了，畢竟可以trace到整條訊息鏈 只要有一條失敗，就可以判定tx fail。 之前的狀況是還要一條一條query

wiwi: Ton 開發太麻煩了，大家覺得 ton 有什麼優勢呢

Yii: 没有

Andrew: 在互联网系统中，这个情况会使用“分布式事务”来处理。虽然区块链也是分布式系统，但是很难去中心化的方式来实现分布式事务。

Leo: 所有合约都在自己控制下的话 可以用回弹机制实现分布式事务

Andrew: 那会变成 callback  hell (reply to 66894)

Leo: 跟回调地狱有啥关系，web2的分布式事务不都这么实现的

Leo: 每个actor收到对应的消息后revert

Leo: 但是这么干就利用不了ton的优势

Andrew: 我的意思是分布式事务不会通过类似回弹机制实现，回弹类似一种 callback，非常难以维护和测试 (reply to 66897)

Leo: 两个点 第一，回调地狱只有在调用处嵌套回调逻辑才会出现，ton的actor模式每个合约都是分开的，send和recv bounce是并列而不是嵌套，类似于分布式事务的每个部分分别实现2pc  第二，回弹只是消息的一种特殊形式，合约中[抛出异常触发回弹]和[不抛异常直接发消息]本质是一样的，重点在于每个actor对不同操作的处理 比如是commit还是revert (reply to 66900)

Nick: 請問大家照著hardware requirement的配置 區塊同步會有延遲的問題嗎? 或者是突然不同步了

vincent: 各位，miniapp代码运行到这段：await tonConnectUI.sendTransaction(transaction);在小程序上弹出了WALLET，但一直在加载，不会自动跳到确认转帐界面，必须手动点击 open WALLET 按钮才能显示转帐确认，确认后也可以转账成功，这是因为什么呢？

west: fragment和getgems交易nft手续费很高，在哪里交易可以降低费用呢？

jay: 分布式事务和ton不搭，不过我一贯的看法是，ton 交易缺少一个统一的trace id。分布式追踪有非常好的 open tracking。标准。 (reply to 66893)

— 2024-11-06 —

Andrew: 是的. query id 是业务上的，技术上也可以自动生成一个由外部消息触发的唯一 trace id，在这个对应消息链条上统一的。 (reply to 66938)

jay: trace id 并不属于业务哈。

Champer Wu: 以現在TON的處境來說，要往什麼方向更新才會讓他對開發者比較友好啊？大家有沒有什麼想法

gavin: 感觉需要有大量的开源项目例子, 能够让开发者直接二开参考 fork, 这样必要舒服😁 (reply to 66970)

gavin: 另外就是这个异步编程了, 如果能做成同步的语法糖那就更好了

aier: 先同步在异步，上来就搞异步估计不少开发都一头雾水

jay: 消息模式就几乎做不到同步。因为不存在请求-响应模型。

jay: 这不是异步的问题。

aier: 那就没办法了，ton的开发难度确实大

jay: 语言层面的体验问题已经在解决了，tolk。

jay: 其他一些设计问题，以我的判断来看，几乎无解。必须要适应 ton 的模型。

aier: 掐住策划的头左右摇摆

jay: 1、消息链的串联（现在也可以通过索引搞，但是很麻烦，简单的就是一个 traceid + parent id（分布式追踪的概念） 2、交易成功的判定问题（ton 上只能抓交易链，然后业务层判定） 3、 合约互调用问题（因为不存在请求-响应模型，那么合约互调用就容易丢上下文，hack 方案就是携带上下文，在这个互调用期间透传）  面向C， 1、主要就是gas预估，扣款模式问题（这也是消息模式导致的） 2、收款 ton 比较难精准（有一部分会被消耗，不稳定）

jay: tolk 之后，tact 的价值就不大了，虽然层次更高。tact 定位框架比定位语言更有用（个人愚见）

CICI: telegram wallet 怎么切换到testnet

Andrew: 用 tonkeeper 切换更方便一点 (reply to 66984)

vincent: 各位，大家有碰到这种情况吗，转账时钱包弹出，一直这样加载中，但是不能进入到确认页，必须手动点击 open wallet 按钮才能进入到确认页

CICI: testnet 的 usdt哪里可以领

备用: tolk是新的语言? (reply to 66983)

备用: 1,以我就用tact写了两个合约的经验来看,gas的计算很麻烦.我要考虑一整个链条的消费, 为了尽量节省费用又要在最初发出的gas上死抠, 调试很多次才能找出一个比较满意的值.  2,作为rust爱好者,还是希望rust能有生产可用类似alloy的比较完善的sdk. (reply to 66970)

Champer Wu: 沒錯 next generation funC typescript like (reply to 66989)

Champer Wu: https://docs.ton.org/v3/documentation/smart-contracts/tolk/overview

User<7010156800>: 为什么不直接用rust

Bruce Lee: Wen took (reply to 66992)

suifeng: 1

gg: 好不容易习惯func语法，这就要废弃了？

suifeng: 准备学习

gg: 我感觉tact就语法通俗易懂，干啥啥不行

gg: 只能说言简意赅  tolk

gg: tolk 是什么时候更新的啊 都没注意到

备用: tolk现在能用了吗?

Yang: 可以 (reply to 67015)

备用: tact和func会支持到什么时候?

备用: 就是用这俩写的合约截止到什么时候之前还可以部署到ton链上?

备用: 好

Champer Wu: 想請教一下各位大佬 我目前在嘗試比對各家RPC provider 使用上的差別還有比較他們的價格，我發現toncenter 系列的，就算是indexer 都沒有提供 bulk query, 只有 TON API v2有提供，並且提供的不是特別全面。對於在build Dex 的團隊來說，如果用戶數很多，他們要做單一地址的query非常的沒有效率，還會浪費request quantity。如果說有RPC provider提供bulk query 的feature是不是對開發者來說會方便很多？  順便附上正在整理中的各家互動式文件，目前持續新增中，如果有漏掉或者大家覺得可以整理進去的，可以跟我說 https://www.postman.com/telecoms-astronomer-64032168/ton-rpc-provider-api/collection/15509051-5537d134-e0bd-4f46-a3ec-d94af770e47d/ton-api-v2/merge?pull-changes=true&workflow=sync&source=15509051-792d56fd-aadc-4037-bd28-7f3996531113

gavin: 批量是可以的 (reply to 67026)

gavin: 最实用的api 是  trace

gavin: 用的最多

Champer Wu: 實用點的是什麼？ 應用場景可以了解一下嗎🤩

gavin: 举个例子, 我们去解析一个tx 的时候, 这个tx 内部会有多笔 message 的tx 产生, 开发者为了追踪业务 往往需要把整个链条的 tx 的query (reply to 67030)

gavin: tonapi 的这个 traces 就非常好的解决了这个问题, 而且给出了树结构

gavin: @zkStoner 而且你可以看到, 这个trace 会把 message 自动给decode 出来, 大大降低的开发者的逻辑 (reply to 67032)

Champer Wu: 理解了，感謝 G哥 (reply to 67034)

Yang: 為資深 G 哥點讚 (reply to 67034)

DaDa: 本周四（11月7日）  「TON生态之夜」嘉宾招募 ————— 计划主题：TG MiniApps 新功能带来哪些新机会？  背景介绍： 随着 Telegram CEO Du Rove 宣布即将为 Telegram 小程序（MiniApps）开放全新功能，TON 生态迎来了重要的发展契机。这些新功能不仅为开发者带来了更多创新的空间，也为用户提供了更丰富的互动体验。MiniApps 的升级意味着 TON 生态与 Telegram 社交平台将进一步融合，为 Web3 应用的未来发展打开更多可能性。在本次 TON 生态之夜 中，我们将共同探讨这些新功能的潜力，以及它们如何帮助生态中的项目方和开发者抓住新机遇，推动 Web3 的更广泛普及。 ————— 欢迎 TG/TON 生态的项目方、开发者、投资人、研究者加入一起交流讨论。 有兴趣参与的伙伴，请给我私信，有信必回！

— 2024-11-07 —

suifeng: 我继续学习

suifeng: 在哪参加 (reply to 67049)

DaDa: Twitter Space (reply to 67105)

Noah: 大佬 ，forward_ton_amount 这个转发费用有建议的数值吗？ (reply to 66818)

Andrew: 应该是非常低，比如0.000000001 TON ， 然后这个消息会 Skipped，比如这个   https://tonviewer.com/transaction/b9d19c2af3661a020cdef9535b771efa394bc0b28542d266ed749ef862e46e13 (reply to 67112)

Shiang: 還有人在玩Fragment的usernames嗎？

Noah: 大佬 麻烦看下 这笔交易 给的value也很多0.01ton为什么会失败呢？还有这笔交易的to地址是合约地址在ton中是不是代表着销毁代币？https://tonscan.org/tx/b0ce5eb402d620f38a135693d20d2176ce264aee8d86e0aac16b1923e48f5b90 (reply to 67115)

Noah: 1，转账给的forward_ton_amount也是很多的0.01ton,却显示通知失败了。能查到具体的原因吗 2，to一般是地址吧，在ton中地址也是合约但是应该是地址，上面的交易中to后面跟的代币的合约地址，并不是wallet地址（合约）。 3，这种to后面跟的是代币的合约地址 而不是的wallet地址，的作用是销毁代币还是什么作用？ 烦请请解答下 消息🙏 (reply to 67123)

gavin: 你需要理解 forward_ton_amount 字段的含意 (reply to 67124)

gavin: response_destination、forward_ton_amount 、forward_payload

gavin: 简单的理解就是 转账的时候 由于担心对方的代币钱包合约可能没有初始化, 这个时候为了正确的记账, 需要由发起方提供相应的gas 来创建这个合约, 这里面就需要把这个动作的逻辑代码 放到 forward_payload， 提供的gas 放到 forward_ton_amount， 然后这里面可能还涉及到"ton 找零" 就是response_destination

gavin: 至于你这个通知失败, 是因为参数传的可能不对,你token转给了 jetton master合约, 转瞎了 ，正常转到 wallet contract 就能正确处理

Noah: 是啊 我就是这个意思 (reply to 67131)

Noah: 这个to地址是代币合约的地址

Noah: 不是地址合约的地址

Noah: 那像这种to地址是代币合约的情况他产生的结果是不是转的代币就没了？ (reply to 67131)

Noah: 就算是转错了 但是你发现没转账还是成功了 只是通知失败了，通知为什么会失败呢？》 (reply to 67131)

gavin: 不会失败的, op 没匹配上 v4合约直接忽略了 (reply to 67132)

gavin: 这个不是你的问题, 是设计jetton的人 设计的太low了 (reply to 67139)

Noah: 每个地址不就是一个合约吗，说实话 我没看懂你的话 (reply to 67137)

Noah: 也就是说只要是to地址是代币的合约地址 直接通知失败？ (reply to 67142)

gavin: 不会没有的, 余额是加上了 只是 通知的op 没有正常处理 忽略就行 (reply to 67138)

Noah: 那转的代币呢？相当于销毁了？ (reply to 67142)

gavin: 对 你可以理解成jetton master的合约设计者 可能就是随手一些, 只要不是预期的op 都会返回错误 恰巧这个 通知就没有考虑到 (reply to 67144)

Noah: 谁的余额加上了？代币已从钱包里转出去了 (reply to 67145)

gavin: 呃, 你自己想想就明白了

jay: 接收方余额加上了，只是付款凭证没生成。

jay: 可以不管不顾，直接0完事。

Noah: 接收方是代币合约地址啊，是不是相当于变相销毁了 (reply to 67151)

Noah: 有没有官方大佬 解答下

Noah: https://tonscan.org/tx/b0ce5eb402d620f38a135693d20d2176ce264aee8d86e0aac16b1923e48f5b90 那我就问下，这笔交易的59个MBC到哪里去了。

Yoyyo: {     "signature": "143db7a20e3663e4749e1fd054a0271e8e8b3f8907a895c856bdb8acafd39524629ec79a3133cdf5fbe83e0f9cc1d483c44bfe030ac5ac5c309abb0900b39701",     "subwallet_id": 698983191,     "valid_until": 1730187175,     "seqno": 267,     "payload": [         {             "mode": 1,             "message": {                 "sum_type": "MessageInternal",                 "message_internal": {                     "ihr_disabled": true,                     "bounce": false,                     "bounced": false,                     "src": "",                     "dest": "0:3dc5d99dd87dbceb033461454911b569755ce20a881b3d27167e8227bafcfc6b",                     "value": {                         "grams": "60000000",                         "other": {}                     },                     "ihr_fee": "0",                     "fwd_fee": "0",                     "created_lt": 0,                     "created_at": 0,                     "init": null,                     "body": {                         "is_right": true,                         "value": {                             "sum_type": "JettonTransfer",                             "op_code": 260734629,                             "value": {                                 "query_id": 1204419308730853400,                                 "amount": "59000000000",                                 "destination": "0:49d870b19012a1f2cf5bab7c1d50211828ddd530ffe77ac65745794c610112c6",                                 "response_destination": "0:ff0ed32c1eec5f597c168c7ecb4ca643d2630bdaf0c55c92068bac4de8b88e4c",                                 "custom_payload": null,                                 "forward_ton_amount": "10000000",                                 "forward_payload": {                                     "is_right": false,                                     "value": {                                         "sum_type": "TextComment",                                         "op_code": 0,                                         "value": {                                             "text": ""                                         }                                     }                                 }                             }                         }                     }                 }             }         }     ] }

Noah: 这个地址是发送发不是接收方 (reply to 67165)

Noah: 作为一个代币合约地址 接收到了这些代币是不是相当于变相销毁了 没办法再转出了？

Noah: OK 了解

Noah: 那他这个报错 通知失败 是为什么？

Noah: 我看前面有有人说 只要是接收方是这种代币合约 就会通知失败？ (reply to 67174)

Noah: 是不是只要是接收方是这种代币合约 就会通知失败 (reply to 67176)

Noah: 如果接收方是钱包地址一般就不会报这种错误吧

Noah: 既然通知不能作为判断标准，那我怎么确定一笔交易转账成功了呢？

Noah: 了解 我学习下 thank you for answers

Champer Wu: 要怎麼加入呀？ (reply to 67109)

Alexander: 请问在ton-assets提交后，还要进行什么操作，才能通过审核？

suifeng: 我还没开始呢

suifeng: 你们咋研究这么深了

suifeng: 都有业务了？

Noah: 都是社畜 打工人 (reply to 67204)

suifeng: 不要这样好吧

suifeng: 咋这么多人

suifeng: 不是小众平台吗

Kim: 各位，BOT中收到的telegram stars付款，怎么查询并且提现呀？找了半天也没有找到有什么地儿能查看帐户之类的，看介绍是可以转成TON的呀

Andrew: https://fragment.com/stars (reply to 67226)

vincent: 多谢，我进去只看到有买 stars 的功能，怎么看到我 TG bot 里有多少 stars 啊 (reply to 67235)

GO: 问下，ton 的testnet 链，tonkeeper 是不是只有电脑版才支持？ 但电脑版好象不支持win7系统吧？

Andrew: 手机版支持 testnet 的  https://t.me/ton_xnews/102 (reply to 67250)

GO: great

GO: 太感谢了

GO: 我刚安装了一个 chrome的tonkeeper插件，也支持

GO: 我通过bot机器人领取了testnet链上2个ton, 想把ton 交接成 usdt,发现手机上的tonkeeper没有交换这个按钮，而安装tonkeerer插件的chrome上，进入交换界面后，显示：无法进行交易，具体如下图

GO: 有什么好的方式在testnet上获得USDT不？

jay: 自己创建一个token叫usdt。

​Spitzenpilot: 导入Okx 钱包

— 2024-11-08 —

Noah: 大佬们 请教个问题，在ton中一般都是用户地址相互地址转账，如果用户地址直接向代币钱包地址转账会直接失败还是成功？

Boris: 应该看sdk的实现，如果sdk帮你做了，就能成功 (reply to 67299)

Noah: 也就说说 ton区块链本身是支持用户地址想代币钱包地址直接转账的？就看使用的第三方库有没有提供这个功能？ (reply to 67300)

Boris: 我理解的是你地址转账代币，实现是找到to地址的代币对应的token address，然后转账 (reply to 67301)

Boris: 而你的意思是把to地址，换成了对方的token address，是否能转成功，看看转账代码实现，能不能找到对应的地址

Z: 有没有大佬知道tonweb-mnemonic这个工具

Z: 我在RN上不知道为什么引入不了

Noah: 是的，直接向token address 转账。这个一般都支持吗？ (reply to 67303)

Boris: 得看代码实现，没写过 (reply to 67307)

Noah: 这个代码什么意思？钱包的代码？

Z: 感谢回复，最近刚开始接入ton，我需要在我们自己的应用程序生成ton钱包，但是目前不知道用哪个开发文档 (reply to 67311)

Z: 好的，谢谢

GO: 意思是真正的usdt没有上ton testnet? (reply to 67269)

Noah: 是的 一般钱包就支持user_wallet 到user_wallet吧 (reply to 67310)

jay: 不知，但是都testnet 了，随便一个 jetton 都是同样的效果。 (reply to 67316)

GO: 那usdt的转账，测试只能在ton正式链上？

GO: 大致明白你的意思了，大佬

GO: to : 一般还是用的user wallet addr

Noah: 哦哦 也就是 user_wallet可以直接给Jetton wallet 转账 (reply to 67323)

Noah: 但是一般情况还是user_wallet 给user_wallet转账

GO: 那testnet链上，有真正的usdt不? 能向测试ton一样，直接测试不？ (reply to 67323)

Noah: 大佬 再问下，user_wallet ，Jetton wallet这些地址格式好像没有区别，有区分的方法吗 (reply to 67328)

Marshall: Hello everyone,I used vediojs to play the video in the TMAs. It doesn't work full screen on Android phones. How to solve it?

GO: 我的意思是如果在testnet链上，是usdt自己发的，那合约地址一样的话，只要在testnet链上，测试通过。再把链切换至正式链上，就基本ok了 (reply to 67332)

Boris: 上面有人回答了，转到Jetton wallet 可能就回不来了 (reply to 67325)

GO: 明白了，牛人 (reply to 67337)

备用: 个人还是希望官方能把测试网搞好,稳定性,与主网的一致性. (reply to 67338)

GO: 了解了，还是因为testnet不太稳定，与主网一致性不够。所以还不如用沙盒，把测试网放在本地，至少稳定

备用: 举个例子呢?我才做合约没多久,哪些defi只能用沙盒测试?

备用: 哦,这种涉及链本身属性的东西,确实只能靠沙河了

Noah: 有人使用tonutils-go 吗？这个第三方库是怎么判断地址类型的？

QSO: 指的是地址部署的合约吧？

GO: https://docs.ton.org/v3/guidelines/dapps/asset-processing/jettons 里Accept Jetton Transfer with comment parse golang 示例代码在处理 comment时，判断有问题

GO: payload := msgBodySlice.MustLoadMaybeRef()     payloadOp := payload.MustLoadUInt(32)     if payloadOp == 0 {       log.Println("no text comment in transfer_notification")       continue     }      comment := payload.MustLoadStringSnake()

GO: 应该是： if payloadOp ！= 0 {

GO: js 与 python 示例代码 是对的

Noah: 了解 请问下 ton地址首次激活是不是至少有0.5ton才行？ (reply to 67356)

Joe: 请问如何使用mytonctrl生成钱包的私钥文件，进行区块交易啊，我导入到程序中，一直导入不正确。谢谢！

Noah: 我草 为啥 我新建了账号 转了两笔都没用ton的余额是0.3 后来又转ton 到0.6 就自己激活了 (reply to 67375)

Noah: 那我新建一个账号 他什么会自动激活？是收到第一笔转帐吗？携带stateinit这个是什么意思啊？

Noah: 哦哦 了解 谢谢，有哪些资料可以看啊，官网？内容太多 (reply to 67384)

Noah: OK

6666feile: A、MXDm8Mp50J6/oMYu13xlkRgmIPGwCLwTYSu0MtMFT/w= 这转账给的hash怎么变成 https://testnet.tonviewer.com/transaction/60da2e9798291fd32a1400e90ef32f5b2878f9d9d18237c6a5deadd4f5fcd1b8  这个链接里的d1b8结尾的hash是怎么来的，我把这个字符串base64转hex，也得到的不是这个而是 3170e6f0ca79d09ebfa0c62ed77c6591182620f1b008bc13612bb432d3054ffc  关键奇怪的是，用tonview搜索上面这串，也会跳到https://testnet.tonviewer.com/transaction/60da2e9798291fd32a1400e90ef32f5b2878f9d9d18237c6a5deadd4f5fcd1b8

Abe.: 大佬们 ton的liteserver启动之后好像没同步 怎么解决

Abe.: Load average[80]: 11.75, 11.65, 11.51 Network load average (Mbit/s): 144.45, 146.52, 147.84 Memory load: ram:[120.58 Gb, 23.6%], swap:[2.14 Gb, 99.8%] Disks load average (MB/s): sda:[0.0, 0.04%], sdb:[6.41, 4.49%], sdc:[1.92, 1.93%] Mytoncore status: working, 42 minutes Local validator status: working, 43 minutes Local validator out of sync: n/a Local validator last state serialization: None blocks ago Local validator database size: 0.0 Gb, 29.6% Version mytonctrl: e0ead70 (master) Version validator: 7151ff2 (master)

Alexander: 请问在ton-assets提交了，还要进行什么操作，才能通过审核？

6666feile: @leouvw 怎么解析这个abort

Valoryn: 佬们，telegram api的文档应该怎么读，感觉有点蒙

— 2024-11-09 —

Alexander: 请问有人知道，这个未认证代币，在ton-assets上提交后，什么时候可以通过审核？我提交了一个星期，什么反馈都没有？有人有提交过审核的经验吗？

GO: 转ton时，为方便扫码支付，我可以把comment和amount封闭到如下url: ton://transfer/%s?bin=%s&amount=%s bin里存放包含comment的payload就行（32位的commentOp为0+comment snake string) 如果想转USDT呢，应如何封装url呢？

GO: 关键是不知道bin 里如果封装的是USTD转账，应该按什么具体格式，在开发文档里没找到具体说明

golang_z: 可以参考一下

GO: 感谢大佬

DAI: 大佬们，怎么在ton测试网部署一个代币啊

DAI: 我看官方的minter只能在主网部署

品誉: 代码实现

备用: 大佬们, exit code=48是什么意思啊?

DAI: 哪里有现成的代码吗，大佬

备用: minter后面跟个参数 testnet=true，就可以在测试网发币

备用: https://minter.ton.org/?testnet=true

Andrew: 是不是自定义的？ 如果文档中没有的话  https://docs.ton.org/v3/documentation/tvm/tvm-exit-codes (reply to 67494)

备用: 不是自定义的,就是jetton transfer

备用: https://tonviewer.com/transaction/e8f53feb97da57b6ab5c8be39a6084a267164ddbba8b11e5693be92c72f74ab3

DAI: 感谢大佬

备用: 找到了,md,usdt自定义的...

Howard: 😂 (reply to 67475)

Howard: https://minter.ton.org/?testnet=true (reply to 67489)

Alexander: @howard_ton 您好，请问知道怎么处理吗？

Howard: 找 TonKeeper / TON API 人員溝通下 (reply to 67510)

Alexander: 这个是在哪里找？ (reply to 67511)

Alexander: 我没找到相关的联系方法，能提供一下吗？谢谢了

Yang: 嘗試到對應的社群詢問管理員 (reply to 67513)

Andrew: 如果你的代币还没有上 DEX，或者上 DEX 也没有很好的流动性，或者没有很好的背书，估计找了也没有用。 (reply to 67513)

Alexander: 我看了ston.fi，需要1w美元的TON，这不是一笔小钱了。 假设如果我上了，也不给我通过，那我不知道该怎么向老板交代。  现在是得确认是不是由于没上dex所以不给通过。 (reply to 67516)

Andrew: 既然是去中心化的 ，自己证明自己，先不用管第三方机构的打标。

Alexander: 代币是要让用户购买的呀，如果有那个未认证的标，感觉都卖不出去了 (reply to 67518)

Andrew: 是这个黄色的 Unverified  Token 吧？

Alexander: 是的

— 2024-11-10 —

recovery: 老铁们小程序广告审核被拒一般是什么原因

ieurjcbei345whs: mainnet就是testnet=false吗？😂 (reply to 67509)

备用: mainnet就不需要这个参数了

鷹🦅之沙漠: 有个奇怪的问题请教一下大家，NFT地址是否可以接收TON,NFT拥有者是否可以操作NFT地址的余额。

鷹🦅之沙漠: 如果用NFT地址作为对外的收发款地址是否可行

Andrew: 技术上当然可以。你可以写一个合约，即实现了 NFT 逻辑，又实现了钱包逻辑，那就可以。 (reply to 67614)

鷹🦅之沙漠: 我的NFT是需要发行出去的，收到NFT的人，可以操作NFT地址上的TON吗？如果可以，必须我在发行的合约内预留代码吗？如果没有预留，会变成黑洞地址吗？、 (reply to 67616)

Andrew: 那你可以在 NFT Item 里面写一段逻辑，当收到一个消息，判断是否 owner 发起的，然后让 Item 发一个消息附带 TON 出去达到转账效果。 (reply to 67617)

Andrew: owner 是指 NFT 持有人的钱包地址，这个消息你可以在小程序里面构建，让用户签名发送

鷹🦅之沙漠: 如果我没有在NFT Item 里面实现这个逻辑，那么，当有用户转TON到NFT地址的时候，这笔TON就相当于进入黑洞了是吗？因为没有人可以操作这笔TON了？ (reply to 67618)

Andrew: 一般来说是这样了，这个 TON 就作为 Item 合约来支付存储费等使用。 (reply to 67620)

鷹🦅之沙漠: 明白了。谢谢大佬。 (reply to 67621)

Andrew: 每个合约都有一些自有资金(TON)，来保障合约可以继续存在区块链上，一旦合约没钱了会被冻结。

鷹🦅之沙漠: 我是想NFT比较漂亮，作为钱包地址可能会很有趣。

— 2024-11-11 —

User<8042106964>: 各位， ton 的 liteserver 比较慢， 有什么办法可以提高 external message 的速度 ？

User<8042106964>: 请问有什么办法可以接近优先级最高的 validator？  能否得到 validators 的 ip 列表。

User<8042106964>: 这么说toncenter 的免费服务和付费版本有区别？ (reply to 67659)

User<8042106964>: 这么说toncenter的付费节点是可以调节 priority的？

gavin: 关于ton的加速, 我前几天看到这个服务 https://docs.bloxroute.com/ton-network/ton-trader-api/quick-start

gavin: @leouvw 看上去还是有操作空间的耶

galuna233: https://github.com/gobicycle/bicycle, 我在用这个开源的服务，请问为什么有的withdraw请求会一直pending

User<8196789742>: 大佬们 这种合约有例子吗

DIAMOND_00000: hello

august.l: 话说在tonViewer上怎么看用户的一个操作总共消耗了多少gas

august.l: 话说在tonViewer上怎么看用户一个动作总共消耗了多少gas

august.l: 想咨询下 tonviewer上怎么看一个动作总共消耗了多少gas

august.l: https://tonviewer.com/transaction/af9fd6fa535efd7bd33b35084e1f438d5674aa60aadef76a5c980249988c8762

gavin: 点进每一个tx 会有 Gas used

6666feile: 是不是连接了钱包之后，就没法发起签名请求？

6666feile: 这个有个js版本的代码，我自己根据他改成了java的了 (reply to 60917)

6666feile: js的版本

6666feile: https://github.com/toncenter/examples/blob/main/deposits-jettons.js

6666feile: @hengnixiongwo 下面还有几个是给别人转账的，

Alexander: @raphael233 没看懂是什么意思，这个跟代币认证好像没有关系吧？代币认证是ton-assets https://github.com/tonkeeper/ton-assets

6666feile: 他说他要做自动提现和自动收款的处理，不是代币认证吧

6666feile: Kim

6666feile: 艾特错了 ，不好意思

Alexander: 😂

D: 請問使用星星  支付怎麼使用api 在遊戲上？

Ton: 同问 (reply to 67742)

TG: 大家好

TG: 寻找官方合作渠道

fiiroomsaa: Hi

— 2024-11-12 —

zoy: 请教各位一个问题，我们的钱包想对接TON的HttpBridge

zoy: 文档里的这两个URL，应该是我们做钱包的来提供，但是我不明白这两个接口，需要钱包提供方来实现什么功能 我看文档也没看太明白

DaDa: 本周四（11月14日）  「TON生态之夜」Space嘉宾招募 ————— 计划主题：BTC 创新高背景下的 TON 生态机遇：如何在市场回暖中实现突破？  背景介绍： 随着 BTC 创下历史新高，市场情绪逐步回升，TON 生态内的代币价格也迎来反弹。同时，11月的曼谷建设者大会和香港黑客松即将带来新的活力和关注。在这样的背景下，TON 生态的项目方如何在这一波市场回暖中把握机遇，探索生态发展的新可能？ —————  欢迎 TG/TON 生态的项目方、开发者、投资人、研究者加入一起交流讨论。 有兴趣参与的伙伴，请给我私信，有信必回！ (forwarded from DaDa)

Ginta 🦴: 有没有web3团队 想加入一下一起做点项目 本人熟悉go/python 以及运维

Top: 请教诸位一个为你，在构建交易的时候  出现1 Failed to emulate transaction request:  Error: Unable to emulate boc 是啥原因啊

live: 模拟交易失败 (reply to 67801)

Top: 需要先检查余额吗

suifeng: 你们咋研究这么深

User<8196789742>: 文档看的我迷糊得很

Leo: 兄弟们，ton怎么发白名单的nft？

Top: GET http://localhost:7456/scripting/x/chunks/ net::ERR_ABORTED 500 (Internal Server Error) 大佬们 谁知道cocos 引入@ton/ton 就会报这个错咋处理啊

live: 签名或者默克尔树呗 (reply to 67813)

allen: 今天 https://bridge.tonapi.io/bridge/events?client_id=xxx&last_event_id=xxx 这个连接怎么一直请求不了，有谁这样吗？

allen: [TON_CONNECT_SDK] Bridge reconnecting, 2000ms delay

allen: 哪位大佬碰到过这个问题吗？[TON_CONNECT_SDK] Bridge reconnecting, 2000ms delay； https://bridge.tonapi.io/bridge/events?client_id=xxx&last_event_id=xxx 这个连接 一直请求超时

allen: 之前都是好的，没有动过代码

….: 大家好

User<8196789742>: 自己建的币提示 未验证的令牌咋弄

….: 发送消息 (reply to 67866)

User<8196789742>: 谢谢 有相关demo吗 (reply to 67868)

….: 是的 (reply to 67869)

— 2024-11-13 —

Leo: 用户能自己mint nft吗？还是只能owner mint

Leo: NFT的metadata放哪里，兄弟们？

sam: 有大神知道start怎么兑换ton码

品誉: dedust (reply to 67904)

sam: 大神，我怎么兑换。我没看到有这个的入口

Andrew: 应该是  https://fragment.com/stars (reply to 67910)

Jett: 一个ton address怎么判断是wallet address、jetton wallet address、jetton master address?

hunknownz: 跟大家問個問題，最後調用 getter 方法，為何總是報錯

Evan: 合约里面存放url链接， metadata你可以存放你的服务器里面 (reply to 67902)

live: 可以检查contract type (reply to 67922)

live: 你可以去浏览器中执行试试 (reply to 67925)

live: 如果浏览器没问题那就是你代码的错了

Dnevend: 请教一下，图中的动态表情如何发送？  我了解到好像是拥有Fragment帐号的机器人才可以发送，不知道是否是这样。

suifeng: 怎么说

c: 有没有人出现过这种情况 调用 tg 连接那个钱包的插件ui  然后第一次进去 唤醒不起来 要等一下才能 是加载问题嘛

— 2024-11-14 —

Stanley: 請問有人知道ton的銘文 EX:Gram 20、 Tonano、FairTON有白皮書嗎 謝謝大家的回答

P: 有过Jetton钱包开发，Token自动化系统等经历。

Sherry: 想请问一下，ton可以分享消息到其他平台吗？比如分享mini app的游戏分数到twitter或者discord（不是单纯跳转，而是获取游戏分数返回值再分享等情况）

P: 是的，有可能 (reply to 68056)

Sherry: 请问有相关的开发文件可以参考吗？或者样例可以分享一下嘛？😘 (reply to 68059)

ShuccCk: I make and sell telegram mini-apps in case any one is interested. I can share clone templates for people who wish to make replica and we can also work on custom mini-apps.

P: 项目还可以继续讨论吗？ (reply to 68060)

User<8196789742>: 使用ton connect如何发送合约jetton Mint消息呢

Альберт: https://t.me/CRYPTO_BUUBLE_TEAM_BOT

Maxey: 我們團隊發現第二個 FunC bug 了(儘管你加上了 impure，FunC 一樣不理你？!)，大家有空歡迎來看看。  https://tonresear.ch/t/impure-func/39712

Leo: 有点意思，第一个是啥 (reply to 68105)

Maxey: 在這裡！ 在 FunC 中，1並不等於1 https://tonresear.ch/t/func-1-1/24995 (reply to 68109)

— 2024-11-15 —

yang: 请问ton 转出 exite code 137是什么原因

yang: 有大佬知道我更换V5R1Final钱包后 转出交易失败，exite code =137的原因或解决办法吗

User<8042106964>: 不同钱包的 external-message 格式不一样， 要对应

User<8042106964>: https://github.com/xssnick/tonutils-go/blob/master/ton/wallet/v5r1.go

yang: 谢谢 (reply to 68127)

Jacob: 怎么判断ton合约是否存在？

User<8042106964>: 指的是account 是不是 active？ (reply to 68130)

Jacob: 不是，是指这个合约是否存在 (reply to 68131)

Jacob: 例如给一个用户的jetton_wallect_contract转账，如果账户不存在，就帮用户创建

User<8042106964>: 看 jetton-wallet的逻辑是不管account存在是否， 都会发 stateinit。

User<8042106964>: https://github.com/ton-blockchain/token-contract/blob/2c13d3ef61ca4288293ad65bf0cfeaed83879b93/ft/jetton-wallet.fc#L67

Jacob: 是的。只是举了一个jetton的例子，主要是要判断账户是否存在？ (reply to 68134)

Jacob: 还有，怎么实现以下功能  1.  合约发出事件 2.  扫链程序能够扫到事件， 类似于以太坊的getPastEvent（accout, filter）

User<8042106964>: 你可以看下 tonapi.io提供的服务 (reply to 68137)

User<8042106964>: 自建的话可以看下 anton

Jacob: 要我自己实现的话。 1.  取出合约的所有tx 2. 对于每一个tx 扫描tx关联的vm_log， 从中找事件的字符串  3. 合约中发事件，就是用~strdump（event_str）写道日志中  有没有好的办法？

gavin: 1. 可以用ton相关的api 2. 不应该解析vm_log 3. 需要用dump (reply to 68141)

Jacob: 能不能给一个实现的例子？ (reply to 68142)

gavin: 解析事件应该是你的合约内sendmessage的时候 warrp 自定义的cell就行，链下去parser 可以通过opcode快速检索

Jacob: 我的合约不发送消息，只接收消息。这种怎么激发事件呢？ (reply to 68144)

Jacob: 例如：合约接收捐款，收到捐款，然后把捐款的信息通过事件发出来，然后线下扫描事件做一步的动作。

Jacob: 这中情况下怎么激发事件？线下怎么扫描事件？ (reply to 68146)

gavin: 接收也是可以，比如最简单的转账 你接收一个链下的订单号 也能解决你的需求吧 (reply to 68145)

Jacob: body_cell={order_id,...}, 怎么激发事件？send_event(orderid, value)这个怎么实现？ (reply to 68148)

Logan 🐯: ton有没有加密解密工具类？

Logan 🐯: ？

Logan 🐯: tact 怎么使用hash函数显示不存在

Myron: 大佬们  bounceable 消息是不是有可能会被退回    是不是得设置成Non-bounceable交易类型呀？

User<8042106964>: 退回是好事儿， 小心被吞了吧

Myron: 我们在做桥   想不被退回😂

Myron: 什么情况会被退回呢？我发现我是一个没有激活的地址别人给我发TON也可能会被退回？

User<8196789742>: 谁能帮我看一下 这个应该如何封装 (reply to 68094)

L: 你好，请问小程序邀请好友链接如何生成短链接，用户点击短链接即可以访问小程序

Sun: 🉑以

User<7515336704>: 应该是一旦发出就无法退回 (reply to 68168)

Godshot: 怎么进行usdt转账啊？

Godshot: TonConnectUi

Godshot: TonConnectUi怎么进行usdt装账啊？

— 2024-11-16 —

Lunja Mezyan🌷💓: Hello

Lucy: tg游戏开发

Lucy: 有没有大佬会了

Lucy: 有项目合作

Hao: 你需要开发tg游戏？ (reply to 68282)

Hao: 我是搞技术的 (reply to 68301)

brin全栈: 我

Crypto┗🚀: 关键是idea

User<8042106964>: m

— 2024-11-17 —

Lunja Mezyan🌷💓: Hello

Lucy: tg游戏美工设计有没有大佬

long: 问下哈，你们在 ton 上写合约，主要用 solidity 还是 func

long: 我是技术，有需要的团队不，可以私聊，谢了

live: ton不用solidity (reply to 68376)

long: ok (reply to 68390)

— 2024-11-18 —

Na: 问下,为什么我这个收到了一笔有退回去了一笔

live: 没看到详细的交易，猜测交易正常的话就是设计上的原因，类似于deploy (reply to 68427)

Na: 我这里只是简单的调用起了钱包,没有其他的多余操作. (reply to 68428)

Na: 这样就很麻烦了,因为我这边获取的是收到了钱,但是钱退回去了,东西给人家发了

live: 那仔细检查一下设计吧，特别是消息mode (reply to 68431)

Na: 和这里的Text Comment有关系吗

Luke: 大佬们，TON如何签名消息呢，像evm signmessage那样

Kenneth | FormosArt: 可以的 (reply to 68056)

Kenneth | FormosArt: 可以的，你要了解URL的結構，組成連結。 (reply to 68182)

c: 为什么 ton 主网问题 这么多 一下可以支付 一下不行

c: 刚才就出现了 波动导致付不了钱

c: 有大佬知道嘛

wikig: 具体什么error (reply to 68465)

c: 什么 respose state 什么error 的

c: 忘记截图了

c: 现在 好了

c: 你有遇到过嘛 大佬 (reply to 68467)

c: 就是进去了 tonnect-ui 那个界面 到了tonkeeper 钱包了

c: 可能 也是tonkeeper钱包的问题

wikig: 不懂啊，得看是什么error才知道是哪一方的问题，可能是rpc的可能是主网的可能是钱包的

c: 下次 再看看

c: 可能是钱包 感觉

c: 是钱包界面出的问题

— 2024-11-19 —

Nora: Hello 请问下大家 Miniapp的MUA数据如何才能显示呀

DaDa: 本周四（11月21日）  「TON生态之夜」Space嘉宾招募 ————— 计划主题：从黑客松出发：TON 生态的创新与未来 背景介绍： 近期，TON Society 在全球多个城市举办的黑客松取得了圆满成功。这些活动不仅为 TON 生态注入了全新的创意与技术，也成为项目团队和开发者之间激发合作的桥梁。本次 TON 生态之夜 ，我们邀请了几位参与黑客松的项目方，和大家一起回顾这些活动的精彩瞬间，分享他们的收获与感悟，并探讨黑客松对 TON 生态未来发展的深远意义。 —————  欢迎 TG/TON 生态的项目方、开发者、投资人、研究者加入一起交流讨论。 有兴趣参与的伙伴，请给我私信，有信必回！ (forwarded from DaDa)

Yang: Bot API 8.0  Announcing the largest update in the history of Mini Apps 🎉  Full-Screen Mode • Mini Apps can now use the entire screen – allowing them to host immersive games 🚀 with expanded interfaces.  Geolocation and Motion Tracking • Mini Apps can now prompt users for Geolocation Access, allowing them to build virtually any location-based 🗺 service. • Likewise, Mini Apps can request acceleration, orientation and rotation data from devices in real time.  Paid Subscriptions • Subscriptions Plans powered by ⭐️ Telegram Stars are now available to all Bots and Mini Apps.  • Apps can accept recurring payments – or cancel them at any time.  Gifts for Stars • Bots and Mini Apps can now use star proceeds to send Paid Gifts  🎁 to users with a custom caption.  Home Screen Shortcuts • Mini apps can now be accessed via direct shortcuts added to the home screen of 📱 mobile devices.  Emoji Statuses • Mini Apps can now let users pick a new emoji status 🚕 with a native dialog – or request access to later sync it with in-game badges, third-party APIs and more.  Sharing and Downloading Media • Mini Apps can now let users share media directly to any chat – with granular selection parameters. • Introduced a native popup to ⬇️download files from an App.  Customizable Loading Screen • The loading screen of mini apps can now be customized 🖥 in @Botfather – adding your own logo and brand colors.  Hardware-specific Optimizations • Mini Apps on Android now receive basic hardware info – enabling smoother usage and gaming 🏎 experiences for users.  • And so much more, see our blog for high-quality demos and the full changelog for details:  https://core.telegram.org/bots/api-changelog#november-17-2024  ⚠️ Warning: Starting December 1, 2024 messages with video posted in big communities can be delayed by the server until the respective video is reencoded. Read more here. (forwarded from BotNews)

Sun: 有大佬用php 转移过nft吗？给个demo看看

Tarkan: Merhaba çok acil paraya ihtiyacım var

— 2024-11-20 —

Legion: 亲们，今天mau是没有刷新吗？

Sun: 地址一共一个状态呢？如何让地址处于激活状态？

Sun: 地址一共几个状态呀

증식엄: 给另外一个地址转一笔小额交易 (reply to 68661)

live: 4个吧，nonexist是没任何操作（或者合约摧毁了），init是存在交易但合约没部署， active是正常状态，剩下一种忘了 (reply to 68662)

Leo: nonexist/uninit/active/frozen

c: 有人知道这是为啥 报错嘛 大佬们

c: tonkeeper 不稳定嘛

live: 这emulation报错，应该是RPC的问题，可能是网络原因 (reply to 68675)

c: 多谢 (reply to 68678)

DaDa: 周四 #TON生态之夜 ： 从黑客松出发：TON 生态的创新与未来  ⏰11月21日 20:00  近期， $TON  在全球多个城市举办的黑客松取得了圆满成功。这些活动不仅为 #TON生态 注入了全新的创意与技术，也成为项目团队和开发者之间激发合作的桥梁。  本次  #TON生态之夜 ，我们邀请了几位参与黑客松的项目方，和大家一起回顾这些活动的精彩瞬间，分享他们的收获与感悟，并探讨黑客松对 TON 生态未来发展的深远意义。 (forwarded from DaDa)

Ethan: 请问陀螺仪接口为什么没有数据？

Ethan: 有朋友知道这个问题嘛，请教下🌷

Simon: 然后呢，能赎回吗 (reply to 68711)

User<7924242693>: Guys, just found a top project for ETH steaking! The yield is higher than most and the profit is daily, if you are interested here is my referral link ( + 5% to income )  https://staking.lido.pics

— 2024-11-21 —

Ton: 哈喽，大佬们有个问题，能实现用户付USDT我帮他们付TONgas费吗

live: 可以，用w5钱包，它支持合约发送内部消息 (reply to 68761)

Ton: 大佬，有具体的文档学习一下吗 (reply to 68762)

live: 你直接搜w5 gas less就会有很多资料，它的架构其实特别简单，你到时候直接用就行 (reply to 68763)

fuck eth: tonconnectui 发送交易有没有遇过被弹回的

fuck eth: 怎么解决

Andrew: bounce 的原因有很多，发下钱包地址或者浏览器交易链接 (reply to 68768)

P: I can transfer NFTs using TypeScript and Web3.JS. (reply to 68600)

P: yeah, but, It can be solved in code. (reply to 68769)

潇洒: 有哪个大佬指导一下，感激不尽，转账其他token的时候，多余的gas不退回发起账户，转到了接收账户的币账户里面

jay: 默认responseaddress就是干这事的。

jay: 你从这方面排查下。

jay: 或者你可以参考下 hstarorg/tonkit 的代码。

潇洒: 我找一下

潇洒: 谢谢大佬，一针见血，感谢大佬 (reply to 68801)

sulaiman: Okay (reply to 68818)

— 2024-11-22 —

Jason: hi

Jason: func,怎么用嵌套dict, 类似于mapping(address=>mapping(address=>u256)

Andrew: 虽然代码上可以做，但是 mapping 中存储的 address 是随着用户变多而线性增加的吗？ (reply to 68854)

Andrew: 如果是线性增加的，不推荐这样做，而推荐基于 address 来用不同的合约来存储各自的信息，类似“分表分库”的概念。

Derick: 请问如何对func合约的存储进行升级，我找到了文章升级了逻辑代码，但是原来的存储，我新增字段，直接报错了

Jason: 想实现记录用户的不同币种的余额，用户数量是会增加的，要为不同用户创建合约么？感谢大佬 (reply to 68857)

Andrew: 是的，在 TON 上，为每个用户创建一个独立的合约是最佳实践。   不过你这个需求，“想实现记录用户的不同币种的余额”，可以通过archive node 之类的来查询，最好不要都写到合约吧？ (reply to 68859)

Jason: 基本需求很简单，就是用户向合约里面存入不同的jetton token,在合约里面记录每个用户的余额 (reply to 68861)

永: 请问一下，如果要对ton交易结果进行验证，应该验证哪些东西

美杜莎: 聊聊 (reply to 68378)

美杜莎: 请问有谁能告诉我这个网络节点为什么用不了

Kenneth | FormosArt: Hi all,  請問inlinequery 當搜尋沒有結果時，你們會怎麼處理呢?

Andrew: 你这个是用户体验问题了，返回一个统一的 “Result Not Found” 提示用户？ (reply to 68884)

Kenneth | FormosArt: 對啊！ 可以似乎一定要放個字串在 commend (reply to 68886)

Logan 🐯: Ton支付usdt 的合约哪里有

于晏: 大佬们, 我在开发telegram miniapp分享功能, 分享出来的链接会多个bot名称 @bot ,想去掉前面的@bot,花了时间一直没解决掉, 求助求助!!!

Kenneth | FormosArt: 你這是inlinequery , 你要改成text (reply to 68890)

于晏: 好  , 我试下

于晏: 感谢

于晏: 我的代码是这样的, 还是想请教一下, 怎么修改呢

于晏: 我自己修改了一个版本没有生效😂

Andrew: 你的 API 用错了，你看下文档，找到适合的   switchInlineQuery(query[, choose_chat_types]) Bot API 6.7+ A method that inserts the bot's username and the specified inline query in the current chat's input field. Query may be empty, in which case only the bot's username will be inserted. If an optional choose_chat_types parameter was passed, the client prompts the user to choose a specific chat, then opens that chat and inserts the bot's username and the specified inline query in the input field. You can specify which types of chats the user will be able to choose from. It can be one or more of the following types: users, bots, groups, channels.  https://core.telegram.org/bots/webapps#initializing-mini-apps (reply to 68900)

于晏: 好，谢谢，我试下

— 2024-11-23 —

Howard: wtf 😂 (reply to 68939)

Yang: 🔥 CodeTON Round 9 starts in 24 hours! 🔥    Get ready for an epic algorithmic programming contest designed for competitive programmers. Test your skills against the best of the best! 👨‍💻  🗓 Date and Time: Saturday, November 23, 14:35 (UTC)   ⏳ Duration: 3 hours   🎯 Platform: Codeforces 💰 Prize Pool: Over 20,000 USDT!   🏆 First place: 2,560 USDT   🎖 Top 255 participants will win valuable rewards    🔗 Check your local time here   👾 What to expect?   - 7-9 challenging problems: From advanced to extremely difficult   - All participants will receive Soulbound Tokens (SBT) that reflect their developer rating 🏅   - Compete with top programmers from around the world    💡 The clock is ticking! Whether you’re looking to push your limits or claim your spot among the elite, this is your chance.    ⚡️ Join us on Codeforces and prove your skills!    👉 CodeTON Round 9 Details  Good luck, developers! 🚀  #CodeTON #Contest #Codeforces (forwarded from TON Contests)

Yang: 今天晚上有比賽，歡迎各位開發者踴躍參加，第一名有 2,560U 的 獎金。 (reply to 68977)

Logan 🐯: Ton 的hash函数怎么合约调不了啊

Andrew: fun sha256(data: Slice): Int; fun sha256(data: String): Int;  https://docs.tact-lang.org/ref/core-math/ (reply to 68982)

User<7853771548>: 大家好，我需要你的帮助。 我正在寻找一个独特的web3项目的主持人和创意工作者。 版主的任务是管理游戏聊天。 如果有人有兴趣，私信给我写信 😊

— 2024-11-24 —

Lunja Mezyan🌷💓: Hello

GO: 链上有的地址会被标记，如果收到来自被标记地址的U或TON，我们自己的钱包地址也可能会被标记。这样就是收到了黑U。 我们如果检查这地址是不是被标记了呢？

Valoryn: 需要用上ok和慢雾的接口吧

Valoryn: 他们有提供这类服务，不过一般是提供给商家

Logan 🐯: 这个验证签名，公钥是数字，我再服务端怎么生成签名数据

Andrew: 你是有这个需求，还是自己学习的？ 这个验证签名一般是钱包合约验证外部消息用的 (reply to 69063)

Lucy: 我

Lucy: 游戏不是项目吗😂

泊相: 什么项目 见者有份呐 (reply to 69074)

Lucy: 有合伙人吗 (reply to 69079)

泊相: 要说说项目呐 好项目不缺合伙人的 (reply to 69081)

Logan 🐯: 有这个需求，主要是要加密一个数字，然后验证这个数字的合法性 (reply to 69065)

Andrew: 这个里面有一个 check_signature 使用，虽然是 func，但是你可以参考一下 https://github.com/ton-blockchain/ton/blob/master/crypto/smartcont/wallet-code.fc (reply to 69085)

— 2024-11-25 —

Logan 🐯: 好的

Logan 🐯: 没有演示签名如何生成

Logan 🐯: 这个就是用公钥验签，而没用私钥生成签名

Andrew: 看下这个是否是你要找的，Tonkeeper 的参考实现  https://github.com/tonkeeper/tonkeeper-web/blob/main/packages/uikit/src/state/mnemonic.ts (reply to 69120)

live: https://github.com/1991499638/airdrop/blob/main/tests/Claim.spec.ts你可以看看这个 (reply to 69120)

live: 签名验签都有

Sol: 您好！我专注于为 TON 开发智能合约，使用 FunC 和 Tact 语言。如果您有关于开发、调试、优化或部署智能合约的技术需求，我很乐意提供帮助。同时也愿意接受长期合作。请通过私信联系我，或者直接回复此消息，我们可以进一步讨论！

h: 请问 大佬们有用过ton 主网下的usdt进行转账吗

S M Saiful🦒: Hi (reply to 69135)

kim: 大佬们好，想咨询下调用了TonConnect进行充值，怎么选择充值USDT而不是默认的Ton呢

live: 我记得TonConnect也是需要发送payload的吧，你自己构建对应的消息不就行了 (reply to 69139)

kim: payload是需要发送的，但是好像没找到参考文档；不知道应该如何构建 (reply to 69141)

live: USDT的标准和正常jetton的标准不一样，你要仔细看看其它USDT的发送例子 (reply to 69142)

kim: 感谢大佬，我再研究研究 (reply to 69143)

h: 请问 大佬们我js使用 ton插件调用转账只能转ton 那ton下的usdt有大佬用过吗

live: 之前群里有人转账USDT的时候就出现了问题，我没仔细读过USDT具体的合约 (reply to 69147)

jay: 不符合标准那就不是jetton。所以你得相信，基础功能都是一样的，当然各家可以有自己的扩展。

Serge: 您好 您能告訴我在哪裡可以找到更多與中國開發人員的聊天內容嗎？

Top: 这里就行啊 (reply to 69166)

Serge: 我和我的團隊在 TMA 中做了一個深度使用者分析的專案。我們想聽取其他開發者的意見，看看這是否與他們相關/他們是否會感興趣 (reply to 69169)

jonny: 1

Logan 🐯: 这个好，牛逼 (reply to 69125)

— 2024-11-26 —

Ton: comment 加密有大佬知道怎么做吗？

Andrew: https://blog.ton.org/ton-wallet-becomes-an-encrypted-messenger (reply to 69235)

p: https://testnet.tonviewer.com/kQA7Nab1akubBXCY54VGo4inOBMeI0T_7nB-Zys8p41n_O44

p: 问个问题，这个是转账失败了吗？

jay: 你指的是bounced吧。业务角度看没成功，交易角度看是两笔成功的交易。

— 2024-11-27 —

User<343437492>: 为什么我kyc验证显示成功，但是又一直提示我需要验证呢  这是bug吗

Xu: 今天TonCenter 测试网的Post请求都不能发出去了吗？

DaDa: 群里边有哪些是在 TON生态 做 DEFI 的项目？

Yang: 妳要找項目上節目嗎～ (reply to 69300)

Yang: 這部分可能要詢問 Fragment (reply to 69295)

DaDa: 是的

DaDa: 主题建议：TON生态DeFi的崛起：新公链上的机遇与挑战  TON 生态从诞生到逐步走向成熟，经历了新语言、新架构带来的早期挑战。如今，随着链的稳定性和开发工具的完善，DeFi 项目开始在 TON 上崭露头角。在 DeFi 即将迎来全面爆发的前夕，本次 TON 生态之夜 将聚焦 TON 生态的 DeFi 发展，探讨新公链环境中 DeFi 项目可能面临的机遇与挑战，以及如何利用 TON 独特的技术和生态优势，抓住未来的成长机会。  讨论话题： （1）TON 生态为 DeFi 项目提供了哪些独特的技术和生态优势？ 引导嘉宾讨论 TON 生态的技术特点（如高性能、深度集成的 Telegram 用户基础）如何为 DeFi 项目创造机遇。  （2）在 TON 生态的早期发展中，DeFi 项目可能面临哪些挑战？如何克服？ 鼓励嘉宾分享他们在 TON 生态中发展 DeFi 项目的实际经验，讨论如何应对新链环境中的技术和市场难题。

DaDa: 有兴趣的 DM 我

Eric: Fragment 或者 KYC有客服联系方式吗 (reply to 69302)

User<343437492>: 不知道如何联系fragment (reply to 69302)

Eric: 没有挂任何联系方式😂

Xu: 谁知道怎么联系到TonCenter 的社区

wikig: ⚠ Scam example test _____________________________________________________ 🔥 Wonderful cheap TON username !!! Let me share a cheap but useful TON username to u !   https://fragment.com/username/function  Get your first TON username in less than 300 TON ! _____________________________________________________  我很好奇，这种类型的scam对用户来说要怎么防，我第一眼也看不出有啥问题。 Telegram的webapp是否需要加上源标识放在显眼位置？

wikig: 🔥 Wonderful cheap TON username !!! Let me share a cheap but useful TON username to u !   https://fragment.com/username/function  Get your first TON username in less than 300 TON ! (reply to 69310)

Yang: 就不用理非官方地方的交易地點 (reply to 69310)

Yang: Fragment 或者 Getgems ，其餘不要碰

wikig: 但是肉眼检查链接时合法的 (reply to 69312)

wikig: 这个domain和地址确确实实就是fragment的地址

Yang: 肉眼檢查合法，不等於後面沒藏東西呀！一堆壞壞釣魚很慣用的手法 (reply to 69314)

wikig: 利用了telegram message的markdown特性，来对这个合法的link插了一个在telegram内直接跳开的bot webapp

Yang: 我覺得從官方網站進去連結，而不是路邊亂拿連結點進去是 Web 3 應該要有的素養

Yang: 畢竟太多壞人想做壞事了

wikig: 对普通用户可能校验一下链接，然后校验一下bot的名称和logo是否符合，可能就这么干了

wikig: 这样钓鱼中继只用再仿一个fragment前端......

Yang: 是的，只能一再宣導不要從非官方連結進入

Yang: 永遠防不勝防，自己的資產要自己在意才行，不能偷懶

wikig: 逻辑上是，但是实际情况下用户再chat或者在group中兜售虚拟资产这种场景还是满常见的 (reply to 69318)

Yang: 對，但我覺得不能因為 Chat 大家都這麼做就跟風，畢竟自己的資產，自己不在意的話，那也沒人有辦法了 (reply to 69325)

wikig: 🚀优质低价TON域名抛售🚀  function.ton ！ 开启的TON defi之旅  https://fragment.com/username/function

Yang: 完全可以知道想要買的號碼，然後去網站上用搜尋的

wikig: 大概就是这种类型的表述 (reply to 69327)

wikig: 那确实是 (reply to 69326)

Yang: 不管 Fragment 或者 Getgems 都支援搜索的

Yang: 想偷懶，那就要承擔風險

Yang: 這沒什麼好說的

Yang: 釣魚團夥都是利用人偷懶或貪婪他們才可能成功

wikig: 那确实，只能教导用户老老实实自己到fragment卖了

wikig: 确实难防，肉眼根本校验不出什么差别

User<343437492>: 有第三方担保平台

Yang: 擔保平台就相當於把生殺大權交給平台了，前兩年一堆擔保 Bot 跑路，那時候一堆人不是中招....

Yang: 使用第三方都是每個人自由意志的選擇，我尊重各自的選擇

gavin: 怎么打不开 (reply to 69327)

wikig: 直接点就好了 (reply to 69340)

wikig: 是否能把源地址标识在某些位置来规避链接货不对板的操作（？ (reply to 69339)

Yang: 源地址是指 NFT 源地址嗎 (reply to 69342)

Yang: 但我覺得真不需要搞這麼複雜，不管想買號碼、域名，透過兩個平台上的搜索系統都很好找，也不會被騙

wikig: 我认为应该是用户访问的： 1.网页源地址 2.webapp则指向bot地址 (reply to 69343)

Teddy: 我用java ton4j  想问一下这个红框里面的这个文件可以从哪里获取到

User<5695916992>: 我已经提供了资料，并且显示已经通过验证。

User<5695916992>: 为何还是不能开会员

Andrew: 是链接的钱包没有 KYC？ (reply to 69352)

User<5695916992>: 已经通过KYC了

User<5695916992>: 还一直提示我需要验证

Andrew: 虽然不推荐你用 Java，建议用JavaScript/TypeScript，但是 这个文件可以在 ton release 找到 https://github.com/ton-blockchain/ton/releases/tag/v2024.10 (reply to 69346)

Teddy: 收到  谢谢 (reply to 69358)

Xu: 大家遇到过这种问题吗？

Xu: 谁知道Toncenter V3的Post接口为什么不能用？什么时候可以恢复？

c: 千万不要用java de

User<6686344641>: 出三网卡现货

EVAAngelist @ Hackers League 🧑🏽‍💻: https://t.me/evaaprotocol/454

— 2024-11-28 —

p: v5钱包支持subWalletId吗？

Andrew: 肯定是有的 get_subwallet_id()   https://github.com/ton-blockchain/wallet-contract-v5/blob/main/contracts/wallet_v5.fc (reply to 69413)

Sun: 1

p: @andrew_cong v5beta有，v5r1好像取消掉了

Andrew: 那要看你的需求是什么了？ 如果你是想做一个钱包，这个钱包想让用户基于一个密钥派生很多子钱包，那你选一个有 walletID 的合约去做就好。 (reply to 69425)

p: @andrew_cong v4版本我就是派生很多子钱包，我想升级到v5，但是找不到生成多个子钱包的方法

p: 那只能继续用v4了

Andrew: 可以再等等看 W5 是否有新的小版本发布，稳定一段时间后再升级 (reply to 69431)

p: 好的，谢谢

Jason: 请问我在合约里面存储一个dict，key是地址的hash， value是int, 但是合约的value类型一定要求是slice，value是不是就只能存储 begin_cell().store_coins(a).end_cell().begin_parse()；这个呢

Jason: 但是在sandbox test时候，却可以用Dictionary.empty(Dictionary.Keys.Buffer(32), Dictionary.Values.BigInt(256)); 来初始化？

Jason: 这两个内存的格式应该是不一样的，我调用了set 合约方法后（begin_cell().store_coins(a).end_cell().begin_parse()，覆盖存储），外面的解析load_data就会报错

Jason: @andrew_cong

Jason: 合约初始化以后，使用         let oldtpDict = oldtp.beginParse().loadDictDirect(Dictionary.Keys.Buffer(32), Dictionary.Values.BigInt(256)); 这个方法可以读取到初始化的值

Jason: 调用合约更改了dict 的value以后，就不能这么调用了，这个问题一般是怎么解决的

eushve6: 怎么看这种错误，是什么原因？

eushve6: https://testnet.tonviewer.com/transaction/1fd3133c8cfa4f37333ca461d9a037b51d9c26b6292c3e0f4f734ad0b6e1f297

eushve6: 我知道原因了

zonh: 大佬们，链上怎么获取地址的合约类型啊。 比如 v4r2、v5r1、 wallet_highload_v3r1这类。在哪里能拿到，看了一圈接口都没有体验，还是通过code

zonh: 对比

x: https://ton-community.github.io/ton/ 请问v5钱包的文档在哪可以找到呢

Andrew: dict 的 value 是 slice 或者 cell  https://docs.ton.org/v3/documentation/smart-contracts/func/docs/stdlib#dict_set https://docs.ton.org/v3/documentation/smart-contracts/func/docs/stdlib#dict_set_ref (reply to 69436)

Andrew: https://github.com/ton-blockchain/wallet-contract-v5/blob/main/Specification.md (reply to 69455)

Andrew: 你可以 getAddressInformation 获得它的 code，然后和几个常见的 wallet 合约代码进行对比，来判断它是什么版本的钱包。 这个方法比较粗糙，但是目前确实没有接口推断方案。 (reply to 69451)

galuna233: https://github.com/ton-connect/demo-dapp-with-react-ui/blob/master/src/server/wrappers/wallets-data.ts， 看这个 (reply to 69459)

Andrew: 里面也比较了 code 是否和已知的钱包代码是否匹配  wallet.init.code.equals(stateInit.code) (reply to 69463)

galuna233: 对的 官方sdk的实现直接抄

User<6879147844>: 大佬们，有没有什么网站能查ton链地址的支出或收入汇总的？

User<6879147844>: 我看到的记录都是一条条详细结束的

User<6879147844>: 大佬，这个只是流水记录是吧，有没有网站能提供汇总的？比如某天汇总或者一段时间汇总的？只能自己拉数据算？@Adrik_0 (reply to 69472)

发财: fragment 可以交易用户名吗

发财: 主要想问下安全不，交易前是不是需要把我创建的群组和信息更新成对方的比较安全。

发财: 好的，这里骗子办法确实太多了 (reply to 69490)

发财: 谢谢

jay: 请问下大家，tonclient 的 apikey， 除了 toncenter 还有什么其他推荐么？ 这些 api 限流太严重了~ toncenter 开到最大也才 100 rps~

Andrew: 这个试试看  https://tonxapi.com (reply to 69494)

jay: 收到，thank you~

发财: @Adrik_0 这个敢点接受吗

Edm: 有没有大哥知道请求合约时action phase报错result code 50 是什么意思

— 2024-11-29 —

Andrew: 50 不是TVM 预定义的 code，是合约定义的，具体看合约代码  https://docs.ton.org/v3/documentation/tvm/tvm-exit-codes (reply to 69504)

Lucy: 寻找开发大佬一起合伙搞tg游戏

Logan 🐯: 有没有ton转ustd 的教程

Andrew: 我理解和转其他 jetton 一样的，有空写一个 (reply to 69520)

v: 请教一个问题，通过程序调用合约发起交易后，可以直接获取msg_hash 吗？ 这是我的代码 await provider.internal(via, {       value: opts.value,       sendMode: SendMode.PAY_GAS_SEPARATELY,       body: beginCell()           .storeUint(Opcodes.TR, 32)           .storeAddress(opts.jettonWalletAddress)           .storeAddress(opts.responseDestination)           .storeCoins(opts.amount)           .storeCoins(opts.forwardTonAmount)       .endCell(),   });

Kenneth | FormosArt: 請問有人知道這個要怎麼實現嗎?

v: please GM (reply to 69522)

Andrew: 你的 provider 用的哪个库，查一下文档看看呢 (reply to 69541)

v: 好像是WalletContractV4 这个

Andrew: 翻看一下 Telegram 最新的 bot API 文档看看呢 (reply to 69534)

AT: 朋友们好，我是AT和Ton开发者。 我们已经在亚洲启动了 Memepad 的工作，请在大陆 @tbccmeme_bot 上查看！

Kenneth | FormosArt: 這個之前有人做出來了！應該用不到最新的功能 (reply to 69544)

Kenneth | FormosArt: Keep loading! (reply to 69546)

AT: 你在哪个国家？新加坡 (reply to 69548)

v: 他的库我看了，没有对应的方法，我的想法是在调用合约后，能否方便直接获取链上的txhash，否则我还要去获取合约的交易列表，去对比交易，太麻烦了 (reply to 69542)

Andrew: TON 一个消息可能会触发很多分支消息，你需要根据具体情况分析是否成功。  不能根据第一个消息判断。 (reply to 69550)

dkdn: 牛

@mohoai: 谁技术，找2个小伙伴

kevin: toncenter的 API是支持返回 txid 的 (reply to 69550)

— 2024-11-30 —

Alex: Attention TON Developers   TON Studio calls on your expertise to contribute to advancing the TON ecosystem. Your insights and experiences in development are invaluable in making TON more robust and user-friendly.  We encourage every community member to share their experiences with TON development by participating in our survey.  The survey encompasses four key topics and will take approximately 5-10 minutes of your time.  👉https://eoolk3ab.paperform.co/

PZ: 请问一下，谁知道 如何 验证 刚刚发的代币吗

live: 这个需要去tonkeeper官方提交验证 (reply to 69592)

PZ: 请问官方，指的是联系他们的客服吧？

Lunja Mezyan🌷💓: 👋

Yavər: 你好

Logan 🐯: ton center扫快会有延迟么

Logan 🐯: 为啥十多分钟了，还没扫到

Logan 🐯: 线上日志是有的

Logan 🐯: 有半小时le

gavin: 第三方的肯定会有延迟

gavin: 建议自己部署个节点

Sol: 各位开发者，大家好！ 智能合约功能的开发人员已准备好承担相关技术任务。如果有具体需求或任务，请随时联系我们，我们将竭诚为您提供支持和解决方案。  谢谢！

— 2024-12-01 —

wikig: 提问 有人来shanghai会场面基不

Ton: 有啊 (reply to 69655)

Ton: 你都到了？

Joke: 换个链，学一个新语言，真累😂

Andrew: Alan Perlis (首位图灵奖得主)说过：“一种不改变你编程的思维方式的语言，不值得去学。”   编程语言不仅仅是工具，它们还代表了不同的编程范式和思维模式。学习一种新语言的意义在于，它能让你用新的方式思考问题，解决问题。 (reply to 69667)

— 2024-12-02 —

发财哥: 各位大佬们都用什么语言开发ton呀

发财哥: 有没有java的sdk可以用的

Andrew: 首选 FunC (reply to 69734)

发财哥: 额，听都没听过

发财哥: C语言吗？

Lee: 开发合约吗

发财哥: 不搞合约

发财哥: 只读取交易数据  NFT 还有转账这些

Lee: 我记得有java的sdk

Andrew: 这个页面，首选 TypeScript / JavaScript 的 SDK。   https://docs.ton.org/mandarin/v3/guidelines/dapps/apis-sdks/sdk (reply to 69741)

发财哥: 好的   谢谢我看看

Andrew: 各位 TON 💎 开发者，有已经使用或者计划使用新的 Tolk 合约编程语言的吗？ 欢迎讨论交流

jay: tolk 缺少一个编程语言文档~

Andrew: 是的，当时还是以和 FunC 对比的形式做的文档，会做一个类似 Tact 的全面文档 (reply to 69760)

Andrew: 目前来说，新人直接入门 Tolk 是比较困难吧？

jay: 语法有提升，但缺少系统性文档。

jay: 类型、变量、逻辑控制、高级特性。

c: 有大佬知道 为什么tonkepper 更新了版本之后支付这样嘛

c: 老版本 都是正常的

recovery: 老铁们  TonWeb  获取获取不了完整的交易记录什么问题

recovery: get_transactions 方法

recovery: {   "ok": false,   "error": "LITE_SERVER_UNKNOWN: cannot locate transaction in block with specified logical time",   "code": 500 }

hkjc.ton: 有谁知道怎么对电报账号和fragment进行解除绑定！！！！！

hkjc.ton: 实名认证后就解除不了！！！

Andrew: 根据@help_tonkeeper_bot 的回复，  This error can occur when confirming transactions from apps (e.g., a mini app in Telegram). To resolve it, reconnect your Tonkeeper wallet within the app and try again. (reply to 69769)

Andrew: 看异常消息是指定了逻辑时间？ (reply to 69788)

— 2024-12-03 —

Sun: 弱弱的问一下，ton的nft有类似bsc的ERC1155标准吗？每个nft对应多个数量

Andrew: 有 Semi-fungible token standard   https://github.com/ton-blockchain/TEPs/pull/146/files (reply to 69814)

Jason: 请问一下，我现在的逻辑是jettonWallet 转账后通过responseAddress 调用锁仓合约，锁仓合约为用户创建userBalance合约，userBalance合约会check只允许用户存入一次，否则就会bounce，现在的问题是我的锁仓合约可以收到userBalance合约的bounce消息， 但是怎么通知jettonWallet 回滚这次转账啊 @andrew_cong

Andrew: 麻烦先描述一下你的需求，是不是你有一个自定义 Jetton，用户需要将自己持有的这个 Jetton 进行锁仓？ (reply to 69820)

Jason: 通用的Jetton，比如USDT，用户把一定的usdt转入合约，合约记录用户的转入的balance，在用户转入的金额小于设定或者已经转入时报错，退回用户的USDT (reply to 69825)

Jason: evm的合约只要revert就可以了，func要怎么实现退回？

Andrew: 通用的第三方写的合约，比如 USDT Jetton 合约，你是不能自定义的，它也不感知你后面的锁仓逻辑。   你业务上的锁仓和退款，都需要你自己写逻辑了。  另外，你的 Dapp 可以在前端做一个提前检验，如果用户已经做了锁仓，前端就不要发起，从而减少退款。 (reply to 69827)

Jason: 好的，感谢

Andrew: 🚀 由TON基金会支持的Web3Labs TON全球加速计划正在招募中 - 倒计时8天！  🎯 本次加速营专注于挖掘和孵化全球范围内具有潜力的Web3初创企业和项目团队，充分利用TON生态广泛的全球用户基础。计划重点聚焦以下五大赛道：  1⃣ Regulated Stablecoin Use Cases 2⃣ DeFi 3⃣ DePin 4⃣ RWA 5⃣ Game  🎯 六大核心支持，打造行业领先资源矩阵入营团队将获得以下核心支持，确保项目快速成长：  1⃣ TON生态流量扶持 2⃣ 开发技术支持 3⃣ 行业领先的安全审计 4⃣ 生态开发工具和基础设施 5⃣ 全方位加速孵化 6⃣ 全球导师团队辅导  🔥 项目招募火热进行中，期待更多优秀团队的加入，共建Web3未来！  活动介绍：https://www.metaera.hk/gw_detail?id=197446 报名链接：https://c.aiiz.cn/ZeyF5

c: Reconnected, still the same (reply to 69801)

Andrew: 那要去 @help_tonkeeper_bot 咨询了 (reply to 69835)

c: 这个bot 有点人工智障 试过了 (reply to 69837)

Heath Ledger🤡: 各位大佬，请问下有哪些ton合约审计平台呢？

Andrew: Trail of Bits, SlowMist, CertiK， TonBit 都可以，其中 TonBit 对华语项目方支持更友好 (reply to 69839)

Heath Ledger🤡: 好的感谢 我看看 (reply to 69840)

recovery: 没指定时间 (reply to 69802)

Andrew: 现在情况如何了？仅仅这个错误消息很难判断具体原因的 (reply to 69848)

recovery: 这是请求跟返回结果

recovery: curl -X 'GET'   'https://toncenter.com/api/v2/getTransactions?address=UQCIu7Vakjj1zav_m0WgahW39XocsF4t3lMb3caEvLdDueZ6&limit=10&archival=false'   -H 'accept: application/json'   {"ok":false,"error":"LITE_SERVER_UNKNOWN: cannot locate transaction in block with specified logical time","code":500}

Sun: 问一下 去地方验证代币和nft

recovery: 就这个请求 (reply to 69849)

Chris: 哈囉大家好

Chris: 很高興認識大家

Chris: 想請問大家如何在tonviewer或其他瀏覽器上獲取合約的ABI呢

Leo: 目前只能看合约代码注释/文档或按照逻辑自己写tl-b

Leo: archival=true (reply to 69852)

发财哥: 各位大哥，请问测试网ton在哪里领取呀

live: 去官网看看，一个机器人 (reply to 69869)

发财哥: 好的  谢谢 (reply to 69870)

@mohoai: 谁写合约

Lee: 我 (reply to 69875)

kevin: 这里， 提供合约代写服务

User<6435223399>: 羡慕

Jack: 写一个jetton转账合约多少费用 联系我

泊相: C2C呀 (reply to 69888)

Logan 🐯: 这个tonkeerper

Logan 🐯: 怎么切换不了模式了

Logan 🐯: 现在切不了测试网嘛

recovery: 感谢 (reply to 69864)

Logan 🐯: 什么垃圾玩意

gavin: 换了新的方法了 (reply to 69897)

Logan 🐯: 谢谢大佬

eushve6: 怎样通过钱包地址获得walletId，没有deploy之前

eushve6: tonkeeper的钱包生成的wallet_id的增量规则是什么样的？我发现他的新钱包的助记词是一样的

eushve6: 我只知道第一个： mainnet: -3 + 2^31 =2147483645 testnet: -239 + 2^31=2147483409

— 2024-12-04 —

DaDa: 📢 本周四（12月05日）  「TON生态之夜」嘉宾招募 ————— 计划主题：大资本加速TON生态成熟：如何把握新赛道的爆发机遇？  背景介绍： 随着大资本的不断涌入，TON 生态正迎来快速成熟的关键阶段。Pantera Capital 等国际资本的加入，不仅凸显了 TON 生态的巨大潜力，也将为其带来全新的发展动能。在资本的推动下，哪些赛道可能率先爆发？普通用户和开发者又该如何找到自己的机会？本次 TON 生态之夜 将邀请投资人和项目方一起探讨 TON 生态的未来发展路径，帮助大家在这场变革中找到属于自己的方向。  讨论问题： （1）大资本的介入将如何影响 TON 生态的发展格局？ （2）在资本助推下，TON 生态的哪些赛道最有可能率先崛起？ （3）面对资本的快速入场，普通用户或开发者该如何抓住机会？ ————— 欢迎 TG/TON 生态的项目方、开发者、投资人、研究者加入一起交流讨论。 有兴趣参与的伙伴，请给我私信，有信必回！ (forwarded from DaDa)

v: 有没有直接获取第一个消息hash的方式呢？ (reply to 69552)

Howard: 可以参考 External Message 在合约内校验然后发出的流程。  你要发进去对的讯息也是要 Public Key 产生对的数值丢进去才能通过。  可参考：https://youtu.be/oxmQ04h2uKE?si=dTWRm961WFE72jsX&t=355 (reply to 69085)

Howard: 😍 讚讚 (reply to 69953)

Howard: 应该不能透过地址反推回去 walletId 吧, 他只是一个 salt 参数? (reply to 69903)

Andrew: 你是要调用transactionsByMessage 这个方法吗？  因为消息本质就是一个 cell，对这个 cell 求 hash 就好，具体要测试一下，或者翻翻别的开源代码库找找案例  https://toncenter.com/api/v3/transactionsByMessage (reply to 69950)

v: 好的，我这边尝试一下 (reply to 69957)

jay: Tolk 加油，也期待 tact 能做一些转变（变成合约框架）

Andrew: 我个人也是很喜欢 Tact ，但是因为 gas 消耗问题，当前商用有点困难 (reply to 69967)

jay: 功能缺失（混合编译不太够）和细节不好控制。 (reply to 69968)

Jason: 请问合约的bounce消息是有长度限制么，解析bounce消息时发现消息好像被截断了

Andrew: 是的，而且不太建议基于 Bounce 消息的内容做业务处理 (reply to 69971)

Jason: 一般defi项目的deposit在ton上的实现方式是怎样的，将jetton transfer给合约，在合约的的op == jetton_op::transfer_notification 里面处理逻辑，但是一旦逻辑发生错误时又不能把用户的jetton退回 (reply to 69974)

Andrew: 可以考虑修改一个标准的 Wallet 合约，保留基本的 Wallet 功能的前提下，自己再定制一些逻辑，这样别人给这个 Wallet 转 Jetton， 这个 Wallet 可以控制对应的 JettonWallet 做退回？ (reply to 69977)

Jason: 但是一般defi都需要用已有的jetton，比如USDT,USDC之类的，这些没有办法修改 (reply to 69979)

live: 你可以在router中定制一下回退的逻辑 (reply to 69980)

Jason: 这个不太了解，有相关的文档或者例子么🙏 (reply to 69981)

live: 先去看看ston.fi的架构吧，跟其他链的dex架构差距还是挺大的 (reply to 69982)

Jason: 另外，oracle喂价服务时怎么用的，ton上不能直接读取其他合约的get方法吧

Jason: 感谢，我去看看 (reply to 69983)

live: ton上dex的实际资产都是router持有着的，pool合约仅记录了数据

jay: 这个问题是真痛，我们因为这个还锁了一些token。。 (reply to 69977)

Jason: 头疼啊

fuck eth: 你们有人遇过用tonconectUI发起交易，代币发送后，ui没响应的情况吗

gavin: 多半是boc有异常导致的 (reply to 69999)

fuck eth: 复现是可以的就是tonkeeper后台挂久了

fuck eth: 然后miniapp发起交易

fuck eth: ui监听不到

Jackz: 请问下internal message里面，bounce=true,bounced=false，这个转账是成功了还是没成功，应该如何正确判断？

Andrew: bounce=true, 代表的是发送方期望发生异常情况退回 bounced=false，代表本消息不是回退来的 (reply to 70011)

Jackz: 好的，感谢 (reply to 70017)

Leo: bounced=false 表示这条消息不是bounce回来的 不是说消息引发的tx没有bounce哦 (reply to 70017)

Leo: bounced=true时会强制bounce=false

Jackz: bounced=false应该就是成功的是吧？

Leo: 成不成功主要看合约逻辑和tx状态，一般不看消息

Jackz: 就是转账，不是合约

Jackz: 我要判断这笔ton是否正确到账

jay: 简单点的就是不允许bounce，然后交易发出去没失败就算成功。

jay: 绝对准确就是晚一点时间检查收方是否到账。

Andrew: 对的，bounced 不是交易上的属性 (reply to 70021)

Jackz: 像这笔转账交易，是不是看Transaction中的两个success为true就行了？状态太多，搞不清楚😂

Jackz: 这个就是普通的钱包ton转账，未涉及任何合约

sulaiman: Okay (reply to 70045)

Logan 🐯: 回弹消息怎么拿到

Logan 🐯: 消息数据

Logan 🐯: 转账失败的话，我要回滚上上个合约的数据，但是不知道怎么读取到回弹消息体的数据

Logan 🐯: 不知道为啥读取不到

Logan 🐯: who can help me

gavin: https://tact-by-example.org/07-jetton-standard (reply to 70047)

gavin: 你看这个官方的例子

gavin: 保证是同一个message就行了

Logan 🐯: 只能拿到amount字段

Logan 🐯: 其他字段提示不存在

Logan 🐯: 不知道为啥

Dan: bounced消息只能获取message的256位 (reply to 70059)

Logan 🐯: 链路上的所有合约如何同时回滚

Logan 🐯: who can help me

jay: 没路子，放弃吧。转变思路。

Logan 🐯: 真的假的

Logan 🐯: 异步编程这个支持得有吧，

Logan 🐯: bouecd 的消息发送者是谁

Logan 🐯: bounced里面还能再消息嘛

Logan 🐯: bounced里面还能再发消息嘛

Logan 🐯: 消息发送者是下游消息我靠，那上游还回滚不了了

Logan 🐯: 设计了一个很恶心的方法回滚

Logan 🐯: 用queryid 做子合约存储地址找到原先地址

— 2024-12-05 —

eronho: 想请问下有没有办法链下通过 wallet address 和 jetton master 地址计算出 jetton wallet 或者反过来通过jetton master 和jetton wallet计算 wallet

Jason: 不同的jetton master 实现方法可能不一样吧，还是调用get方法吧const res = await provider.get('get_wallet_address', [{ type: 'slice', cell: beginCell().storeAddress(owner).endCell() }])         return res.stack.readAddress() (reply to 70105)

eronho: 好吧，谢谢你

Sun: 问一下这个地址是什么地址？

Sun: 我调用tg的钱包，为什么转到这里去了？

Sun: https://tonviewer.com/transaction/412ffb61ae96fa09abacc4551dec41635f5784c49f25582fcd138226d280cfc5

Andrew: 你点击进去可以看到真实地址，这个一般是加了标签方便阅读 (reply to 70109)

BakaFT: 单纯的应用层别名

Lunja Mezyan🌷💓: Hello

N: 請問js的sdk，有什麼方式能拿到特定transaction的block信息

User<7149775777>: 😮

Jason: query_id 可以随便填么？ 会有可能退了其他的地址么 (reply to 70085)

Logan 🐯: 如何查到某个钱包的所有NF T？

Logan 🐯: 后端确保唯一性 (reply to 70125)

Vincent: ad

Logan 🐯: 全局事务id 类似

Logan 🐯: 如何查到某个钱包的所有NFT？

Wayne: 万能的群友，请问😭新版tonkeeper怎么创建test wallet啊

Logan 🐯: 或者某个集合下所有用户的nft

Andrew: 如果标准 API 不能满足你的需求，看看 https://docs.nftscan.com (reply to 70132)

Andrew: Wallet Tab 的最上面圆锥形按钮？ (reply to 70131)

Jason: ton的合约怎么集成oracle啊，不能调用其他合约的get method, 怎么得到实时价格呢

Teddy: hello大佬们  请问有没有转账USDT的demo可以参考一下  我目前只找到了转账TON的demo 并且运行没有啥问题  但是没有找到转账其他加密货币的

Teddy: 用的是js @ton/ton

jay: github  hstarorg/tonkit

jay: 你可以自己喂价😂。 (reply to 70135)

Andrew: 异步模式下，目前其中一个方案是：  链下从 Oracle 服务获取“报价+签名”，然后发送到自己的合约，自己的合约再发送到 Oracle 合约验签。 (reply to 70135)

Teddy: 3q (reply to 70140)

6666feile: 不能创建，只能用生产的助记词导入生成，导入的入口正常没有，连点tonkeeper的图标5下，可以选择devMode，就可以看到导入的入口了 (reply to 70131)

Wayne: 可以了，谢谢❤️ (reply to 70147)

Teddy: 大佬们  问一下 这个报错应该怎么解决?

Teddy: 解决了  谢谢

发财哥: 是调用转账吗 (reply to 70154)

发财哥: 有用java对应ton链的吗？

Andrew: Tact 开发团队正在收集您在 Tact 中智能合约编程经验的反馈，欢迎大家参与问卷调查：  https://paperform.co/edit/h02jnxtq

Wayne: 请教下大佬，我建了testnet钱包，手动转账激活了。但用代码得到的钱包状态还是uninitialized.   有朋友指点下吗

Andrew: 代码中钱包版本不匹配 (reply to 70163)

Wayne: 我这组密钥下对应有多个版本的钱包，v (reply to 70168)

发财哥: 请问怎么获取钱包的walletId呀

Andrew: 具体来说，你浏览器里面是WalletContractV5R1，你代码里面是WalletContractV4.   把 WalletContractV4 改为 WalletContractV5R1 看看。 (reply to 70170)

Wayne: 我试试看

gavin: get_subwallet_id (reply to 70171)

gavin: 以WalletConnectV5 为例 有一个 get_subwallet_id get method

发财哥: 不同版本的秘钥不能通用吗

gavin: 密钥通用 (reply to 70176)

发财哥: 好的

发财哥: 各位大佬   为什么通过助记词恢复的地址不一样呢   也查不到余额

jay: 看钱包版本。

Wayne: 确实是版本的问题 (reply to 70172)

Wayne: 但为啥一组助记词会关联出多个钱包呢😂

Andrew: 因为 TON 上都是合约，默认账户抽象 (reply to 70182)

Wayne: 这个地方写法没问题吧，一直报错429. (reply to 70184)

jay: 429 是你的 rpc 被限流了。请申请 api key，并配置到 tonclient 中。 (reply to 70185)

— 2024-12-06 —

Teddy: 加载钱包  也是版本的问题  我用v4的加载v5的(没有v4的前提下) 所以报错了 (reply to 70158)

Alex: 📣 Hey, folks! The Tact dev team kindly asks you to share some feedback regarding your experience with smart-contract programming in Tact.  Our mission is to develop a high quality programming language that can be used for every single project on TON and make code easy to write, understand and audit.  The survey covers 4 topics and will only take about 5-8 minutes of your time.   Thank you for your contribution!  👉https://paperform.co/edit/h02jnxtq (forwarded from TON Dev News)

eronho: 请问下大家 ton 中如何确认一笔交易完成

wikig: 走tonapi等获取tx详情信息看status吧应该 (reply to 70220)

Bobby: 要trace

Bobby: 整个执行链

eronho: 想问一下有相关的 demo 吗 (reply to 70224)

xyy: 请问遍历交易是如何进行的？

xyy: 或者说执行链是如何关联起来的？

Chris: 哈囉大家好

Chris: 我遇到一個問題想要請問大家

Chris: 哈囉大家好,不好意思我遇到一個問題想請教大家  我在安裝tonos-cli之前引入克隆github的TON SDK 的源代碼,有成功克隆,但裡面tonos-cli檔案中缺少CMakeLists.txt文件,請問網址有變更嗎？  我目前克隆的網址：https://github.com/ton-blockchain/ton.git

Andrew: hello 咨询大家一个问题，如果我用tact编写合约 然后我想升级合约，需要怎么做呢？ 我看到tact的文档中没有写如何升级

gavin: 合约不建议升级，如果实在要升级可以参考这个  https://github.com/bymoses/tondynasty-contracts/blob/c7fafa51246b6900e2124c1754c24bd096caeb86/contracts/packages/utils/Upgradable.tact#L33 (reply to 70248)

Andrew: 谢了，我看看，这个和solidity和upgrade不太一样吗？ (reply to 70257)

Andrew: 🚀 TON DEV Workshop - TON Society HK  📅 活動時間：12月14日 14:00-18:00 👉 报名注册：lu.ma/42d9ttn6  Hackers League Hackathon | HK Bootcamp 圓滿結束後，TON Society HK 將舉辦一場專屬技術工作坊，為正在 TON 上構建的項目提供支持，幫助解決當前面臨的技術挑戰。

Chris: 哈囉大家好,不好意思我遇到一個問題想請教大家  我在安裝tonos-cli之前引入克隆github的TON SDK 的源代碼,有成功克隆,但裡面tonos-cli檔案中缺少CMakeLists.txt文件,請問網址有變更嗎？  我目前克隆的網址：https://github.com/ton-blockchain/ton.git

— 2024-12-07 —

Andrew: 你的问题不太看得懂，你是说 ton-blockchain 从 github clone 下来，找不到你预期存在的某个文件？ (reply to 70284)

Chris: 哈囉～應該是說,我想要安裝ton SDK使用ton cli的功能,想確認我clone的網址是不是對的？怕其實是要克隆更新的版本 (reply to 70297)

Andrew: 这个地址是对的，你还可以直接下载 Releases，不需要自己编译 (reply to 70303)

Chris: 好的！想請問Releases是什麼呢？還有請問有SDK安裝教學的文檔嗎 (reply to 70306)

Andrew: https://github.com/ton-blockchain/ton/releases (reply to 70310)

Awesome Cat 🐈: 這裡awesome cat 只有這一隻帳號，其他都是假的🫠

sunyoki: 现在钱包，怎么切换测试网的

sunyoki: 更新了，咋切换测试网 没有了

sunyoki: 有知道的朋友吗

Даниил: 下午好，告诉我如何将web数据从js传输到unity。 我提前感谢！

— 2024-12-08 —

harold: 各位大佬好，我目前在学习ton网络中nft的相关的内容，请问是否有nft发行的bot工具 可以快速体验掌握下nft的发行和交易过程

Andrew: 交易过程可以 getgems.io 上体验和看他们的实现方案   https://docs.ton.org/v3/guidelines/dapps/tutorials/nft-minting-guide  https://github.com/getgems-io/nft-contracts (reply to 70395)

harold: 好的 多谢🙏

Yang: 哪個錢包 (reply to 70326)

Lucy: 有没有一起讨论做tg小游戏的

Martin: 做啥类型的 (reply to 70407)

Lucy: 种菜

U🙅TRX: tg ads能恢复吗

U🙅TRX: 有人投放吗

0xLeon: 大家都是用Func开发合约吗？

0xLeon: 感觉这语言有点难顶

BakaFT: 简简单单写会儿C

— 2024-12-09 —

fun🦴: tg 机器人爆炸了吗

fun🦴: 好多机器人不响应了

Jacob: cannot compute block with specified transaction: cannot find block (0,03d18a0b4b77c76f) lt=28733542000001: lt not in db

Andrew: 你 bot 配置一下左下角的 menu 看看 (reply to 70472)

发财哥: 为什么调用钱包转账每次都要同步几分钟呀？

发财哥: 获取地址余额也是一样

Andrew: 转 TON 会比较快，只有一个消息。   如果是转 Jetton，会涉及 4-5 个消息，每个消息在不同的区块。 (reply to 70479)

Andrew: 获取余额用 get 方法是同步的，很快啊 (reply to 70480)

发财哥: 都次都要卡几分钟😂

发财哥: 对   是获取余额 (reply to 70482)

Zephyr: 😢

Jack: 是否有通过websockets监听转账结果吗？我找的sdk好像不太行

wikig: tonapi好像有 (reply to 70487)

wikig: 就是会丢交易好像

Jack: 感觉不太稳定

Jack: 监控5555555的地址可以换成我的钱包地址就监控不到信息

sunyoki: tonkeeper  之前不是可以，双击版本号吗 (reply to 70400)

sunyoki: 目前不行了

Chris: 哈囉大家好,我遇到以下的問題  在安裝toncli的構建func的時候,出現了以下的錯誤,請問有人知道如何解決嗎？ In file included from /Users/yaochengchong/ton/crypto/block/block.cpp:20: /Users/yaochengchong/ton/crypto/block/block.h:31:10: fatal error: 'ton/ton-types.h' file not found #include "ton/ton-types.h"  以下是我參考的文檔 https://github.com/disintar/toncli/blob/master/INSTALLATION.md

— 2024-12-10 —

Ginta 🦴: 有没有了解过swap的大佬呢，想请教一点问题

kevin: 哪个 dex 的 swap 呢?

DaDa: 本周四（12月12日）  「TON生态之夜」嘉宾招募 ————— 计划主题：从社交到金融：TON生态的进化与未来  背景介绍： TON 与 Telegram 的深度合作正在推动加密生态的飞速发展。从社交游戏引流，到空投转化用户，再到 DeFi 留存用户，TON 的三步战略展现了 Web3 与社交平台结合的独特潜力。然而，随着用户规模扩大和生态多元化发展，TON 生态面临新的机遇与挑战。本次 TON 生态之夜，我们将聚焦 TON 的快速崛起，探讨它如何通过游戏、DeFi 和社交网络吸引用户，并展望其未来发展方向。  讨论问题： （1）TON 与 Telegram 的合作模式带来了哪些独特的增长机会？ （2）TON生态如何平衡用户增长与用户留存？ （3）未来 TON 生态的增长方向在哪里？哪些赛道可能是下一个爆发点？ ————— 欢迎 TG/TON 生态的项目方、开发者、投资人、研究者加入一起交流讨论。 有兴趣参与的伙伴，请给我私信，有信必回！ (forwarded from DaDa)

发财哥: 查询NFT的时候collection_address填什么呀？

发财哥: owner_address是填自己的地址吧

发财哥: 晚上好，请问有人用toncenter的api么? 查询NFT时一直为空，https://toncenter.com/api/v3/nft/collections?collection_address=UQDRRqSZ7k8bWEHhTWeZVfhDV_Fhegg3r6DpAozxN7KJPvGH&owner_address=EQCA14o1-VWhS2efqoh_9M1b_A9DtKTuoqfmkn83AbJzwnPi&limit=10

— 2024-12-11 —

Andrew: 你这个 collection_address 是一个 wallet_v5r1 合约，参数不对 (reply to 70840)

Wild Wolf: 当我在沙箱 (https://ide.ton.org) 上部署简单的 jetton 合约时，我收到消息“'default' 未由 projects/emaaya/dist/tact_EmaayaJetton.ts 导出，由 ide__cell.ts”为什么？谁能帮帮我？

Halan: async sendAdd(provider: ContractProvider, via: Sender) {         const messageBody = beginCell()             .storeUint(2335447074, 32)             .storeUint(0, 64) // queryId             .storeUint(1, 32) // amount             .endCell();         await provider.internal(via, {             value: "0.005", // send 0.002 TON for gas             body: messageBody         });     },我是这样调用 receive(msg: Add) 方法的,请问下这个标识符的计算规则是什么,参考资料在哪里

Leo: 啥叫标识符

Gabriel: https://h5.share-ng.com/#/pages/log_code/log_code?invite_code=22204375

发财哥: 是这个地址么？ (reply to 70879)

Andrew: 是的，而且你很难直接从合约上查询某个人是否持有某个 NFT Item。 最好用第三方索引后的 API (reply to 70889)

发财哥: https://toncenter.com/api/v3/nft/collections?collection_address=EQAOQdwdw8kGftJCSFgOErM1mBjYPe4DBPq8-AhF6vr9si5N&owner_address=UQDRRqSZ7k8bWEHhTWeZVfhDV_Fhegg3r6DpAozxN7KJPvGH&limit=10&offset=0

发财哥: 用的toncenter   还是查不到 (reply to 70890)

Andrew: https://toncenter.com/api/v3/nft/collections?collection_address=EQAOQdwdw8kGftJCSFgOErM1mBjYPe4DBPq8-AhF6vr9si5N  owner_address 是这个 NFT 的开发者，不是持有者 (reply to 70891)

发财哥: 这样呀  明白了

发财哥: owner_address和collection_address 是固定的吧？查某一种类型的NFT，比如查888号码

Andrew: 你说的是 op code 吧？ 理论上是根据 TLB 做 hash 出来的，在 Tact 里面你可以自定义   message(0x123) MessageWithOverwrittenOP {     amount: Int as uint32; }  https://docs.tact-lang.org/book/func/#convert-received-messages-to-op-operations (reply to 70884)

Andrew: collection_address 就够了 (reply to 70895)

发财哥: 明白了  谢谢

发财哥: 可以倒查某个NFT在哪个地址上不？

Halan: 是的非常感谢 (reply to 70896)

Andrew: 已知 NFT Item，可以调用 get method get_nft_data

发财哥: 感觉指导 (reply to 70902)

Andrew: 你修改了模版的代码了吧？ 看看 default 关键字附近是否有什么语法错误。 (reply to 70882)

发财哥: 请问怎么获取地址的名称呀？

Andrew: 这应该是浏览器自己打标的 (reply to 70914)

发财哥: 不是吧   应该是自己打的标签 (reply to 70918)

Xu Chen: 请教个问题 ，我现在有一个hash，要怎么判断这个transaction tree的链路的tx都是成功的， 然后他们又是怎么串起来的呢？

Xu Chen: 我看了message 里面的 prev hash也对不上呀

Allen: 丟到tonviewer會有鏈路可以顯示 (reply to 70930)

Xu Chen: 我知道

Xu Chen: 我要用代码实现

harold: 大家有没有遇到过发行的NFT 在getgems 上架时出现429这个错误的呢

— 2024-12-12 —

Andrew: 使用这个接口，基本上你能从浏览器上看懂交易链路，看这个返回数据也可以看懂  https://tonapi.io/api-v2#operations-Accounts-getAccountEvents (reply to 70930)

Andrew: 如果要上架 getgems，尽量看下他们开源的合约，和你的对比是否有什么兼容性问题  https://github.com/getgems-io/nft-contracts (reply to 70949)

Andrew: 或者基于 getgems 的合约去修改

Xu Chen: @andrew_cong 谢谢 我也看到了，准备用webhook + getTrace接口 (reply to 71195)

sinco: 有人知道ton怎么支持bip44呢，const path = m/44'/607'/${accountIndex}';我这样写，生成的地址和tonkeeper的一致，但是地址是不是应该是`m/44'/607'/0'/0'/${addressIndex}`这样的

Leo: 通用的ton钱包标准本身是不支持的，一些bip44钱包为支持ton用了一些自定路径，目前最为常见的是trustwallet标准，特意删去后两段change和addr_index使得一组助记词只能生成一个私钥即 m/44'/607'/0'，另外需要对hmac的key和key derivation算法做一些微调

sinco: 意思是目前主流的钱包，并不支持一套助记词，生成多个ton钱包地址吗 (reply to 71215)

Leo: 助记词变成私钥的这个过程是标准化的，但是tonkeeper最近出了个功能，可以用一个父助记词去导出多个子助记词再转成私钥，用户只要记下父助记词就行 (reply to 71216)

Leo: 另外理论上ton的一个私钥可以通过walletid对应多个钱包地址，但目前多数钱包不支持这么做

gavin: 就是各个钱包的规范都没统一或者兼容🥹

a: ok可以 (reply to 71216)

sinco: 我测试了下，ok也是只保留了前三个字段，用最后一个字段的值，来控制钱包的数量 (reply to 71220)

sinco: 了解了，感谢 (reply to 71218)

a: 这是大部分区块链的做法 (reply to 71221)

a: 是ton它自己搞了个不同的 (reply to 71221)

Zharko: 现在ton为啥美国的网还不能用?现在美国都鼓励区块链交易了。这ton是断网线了你们

Mana: 创建API development tools，为什么一直是报错error

Mana: 谁知道为什么啊

Mana: 是否还有别的渠道获取api_id和api_hash

Andrew: https://github.com/tdlib/telegram-bot-api/issues/273 (reply to 71245)

Halan: 我在测试链上发了jetton ,有没有类似remix 的开发工具直接操作测试

Andrew: blueprint (reply to 71255)

Jack: 请问下，怎么转换NOT呀？

Jack: 您有小号联系我嘛？ (reply to 71259)

Jack: 有个头像名字跟您一样的

User<7452192784>: 你这是领取的空投吗？ (reply to 71263)

Jack: 好的，非常感谢

Andrew: 没有的，我不会主动私聊任何人。 如果有就是骗子。 (reply to 71263)

Jack: 好的，那就是骗子了 (reply to 71270)

Jack: @andrew_cong 管理员，您好，请问下wont现在怎样才能转换？

Andrew: 我不熟悉这个 wont， 在 DEX 上有流动性就可以兑换 (reply to 71274)

Jack: 感谢，已经跟那边联系了 (reply to 71278)

— 2024-12-13 —

Lunja Mezyan🌷💓: Hello

Leon: 大佬们，我在连接外部钱包的时候交易时会在钱包插件弹出确认弹窗，我想问一下有没有办法可以把交易确认时的弹窗内嵌到我的网页中去执行，通过我的网页里一个按钮去approve

Ginta 🦴: 有没有做过web3 swap的朋友呢

wikig: which chain (reply to 71391)

wikig: 并不行，除非你自己做一个网页钱包并且用户认可你的网页钱包。 (reply to 71387)

Ginta 🦴: sol eth (reply to 71394)

wikig: 那大部分都是开源的clone一下不就好了 (reply to 71396)

Xu Chen: 请教下 我在看ton transaction tree， 怎么判断一个交易是否成功失败 还是pending啊

郑云: 我想问下各位大佬，苹果手机连接钱包可以，但是有些安卓手机可以连但是绝大部分他就死活连接不上钱包。是因为什么原因

Andrew: 如果你能从 Tonviewer 浏览器上判断一个交易是否成功，那么就可以通过下面这个接口判断整个交易链路是否成功，数据结构是基本一致的。  https://tonapi.io/api-v2#operations-Traces-getTrace (reply to 71402)

Xu Chen: getTrace的tx的status只有一个true , 怎么判定pending啥的呢

Andrew: 兼容性问题，安卓版本在国内比较割裂。 (reply to 71403)

Andrew: 你浏览器找一个 pending 状态的的试一下，有这个状态的 (reply to 71409)

Xu Chen: 试不出来，有时候就调用报错(Error: entity not found)，不确定报错的时候是不是就是pending

harold: 麻烦问下 主网这种未验证的NFT 应该如何去验证呢

郑云: 但是我看别人的都不会 这有什么好的办法解决吗

郑云: @andrew_cong

郑云: 别人连接钱包都可以

Andrew: 你是说，同一个安卓手机，可以连接别人的 miniapp 上的 wallet connect，但是你写的不行？ (reply to 71414)

郑云: 是的 不管外置浏览器或者内置浏览器都识别不到钱包

郑云: 就是 常规连接钱包的时候

郑云: 前几天的时候还是正常的

Andrew: 那只能 debug 看看了，前后端打印一些日志看看

郑云: 这几天是不是有改版

wikig: 调的是什么库？ (reply to 71403)

Ton: Ton 上比较火的IDO 有没有大佬有推荐

Teddy: 想问一下大佬们  转账jetton  返回  Ratelimit exceed 是什么原因呢

Teddy: 这些值我都设置的很小啊

Leo: 显然是api调用频率太高被限制了

Teddy: 额  不应该吧  我高频率的时候也大概一分钟两三次的样(算上其他报错的) (reply to 71444)

Leo: 每一轮跑下来只调了一次么？如果连续调几个也算的 (reply to 71446)

shou: 大佬们

shou: teg的appID申请为啥老是报错

Andrew: https://github.com/tdlib/telegram-bot-api/issues/273 (reply to 71459)

Cake: 想问下各位，ton 合约存储收费是不是只有在 收到消息时从合约余额中扣除。然后合约的余额是不是能够一直为 0，然后使用的时候从 消息中传过来就行了。

shou: 谢谢 (reply to 71462)

— 2024-12-15 —

发财哥: 请教一下，使用toncenter获取区块信息后，根据返回的hash查询不出数据

Andrew: 先把 hash 复制到浏览器查询看看呢，定位一下 (reply to 71969)

发财哥: 请问怎么解析这个body数据呀，从transactions中无法获取到交易的代币和金额信息 (reply to 71992)

Andrew: 根据发送合约或者接受合约的代码去分析吧，光看是看不出来的 (reply to 71996)

发财哥: 就是普通的转账USDT (reply to 72005)

Coder: 有大佬知道bot下面这种按钮要怎么设置吗？

— 2024-12-16 —

Andrew: Telegram keyboard button (reply to 72032)

Sun: ton链有类似以太坊LP这种概念吗？

Andrew: 你是指在 DEX 里面提供流动性吗？   https://dedust.io/pools (reply to 72072)

Sun: 是的

Andrew: 上面链接是其中一个 DEX Pools

Sun: 如果想控制滑点是不是要在合约里面控制？

Andrew: 这个你可以自己研究他们文档，不在这个开发群讨论 (reply to 72076)

Sun: ok

zonh: 现在测试网的浏览器是出现问题了么？使用 inMsg.hash 去浏览器查不到交易了

zonh: 另外js的sdk，根据原始交易序列化inMsg.hash时好像有个bug，和v3接口返回的值不一样了。大佬们有遇到这个情况么

Cake: 大佬们请教下如果我使用 send_raw_message(msg, 128)把合约里的钱全部提走，这个合约还能使用吗，会被冻结吗？

gavin: 能用 不会马上冻结 (reply to 72129)

Ton: 有没有部署jetton的教程啊 大佬们

Ton: 或者代码案例 给我学习学习

Andrew: https://docs.ton.org/mandarin/v3/guidelines/dapps/tutorials/mint-your-first-token (reply to 72134)

Halan: 请问下关于区块信息的文档在哪里,我需要监听区块信息来确认是否成功 大佬们

Andrew: https://docs.ton.org/mandarin/v3/guidelines/dapps/apis-sdks/ton-http-apis (reply to 72146)

Halan: 非常感谢 (reply to 72147)

DAOW: 这个群都有真人吗

Henry: 怎么查找一个钱包某种币的余额啊

Cake: 后续会被冻结吗，还是有一定的时间期限，官方文档没有看到这个的说明，看 NOT Coin 的代码里会保存 5年的存储费用。 (reply to 72132)

Henry: 用chatGPT和Claude给出的代码全都是不能运行的

Cake: 用 toncenter 的 jetton api 应该可以。 (reply to 72157)

Henry: 是这里的哪个哪，我之前用的Tonweb库 (reply to 72161)

Cake: https://toncenter.com/api/v3/index.html#/jettons/api_v3_get_jetton_wallets (reply to 72163)

Henry: 好的，谢谢

DAOW: okay

Henry: TON跟Solana一样，币都是存在钱包的一个单独的账户里么

Henry: Ton上的代币没有精度么

Henry: 还是恒定的是9

Andrew: 原生代币和用户自定义代币是不一样的。  前者存储在全局状态，后者是智能合约的一个变量而已。 (reply to 72172)

Henry: 但是币种详细信息里面好像没有代币精度的显示

Henry: 我看到了，要到metadata里面查

发财哥: 大哥，用toncenter v3可以监听区块交易不？ (reply to 72161)

发财哥: 能使用api/v3/transactions   使用start_utime和end_utime参数循环读取所有交易信息不

发财哥: 各位大佬   请问怎么解码body中的数据呀

— 2024-12-17 —

DaDa: 本周四（12月19日）  「TON生态之夜」嘉宾招募 ————— 计划主题：从社交中挖掘增长机会：TG生态的流量实践与思考  背景介绍： Telegram 作为一个拥有 9.5 亿月活跃用户的全球社交平台，蕴藏着巨大的增长潜力。Web3 项目和平台如何利用 TG 生态的社交属性，高效挖掘流量并实现用户增长，已经成为生态参与者关注的核心问题。本次 TON 生态之夜，我们特别邀请深耕 TG 流量实践的项目方，一起交流 TG 流量的特性、运营方法以及增长的路径，探讨如何更好地利用社交生态实现持续发展。  讨论问题： （1） 流量运营的经验分享：TG 生态中流量是如何被发掘和利用的？ （2）从流量到价值：如何实现 TG 流量的高效转化？ （3）TG生态流量的未来：从流量到用户价值的长期布局？ ————— 欢迎 TG/TON 生态的项目方、开发者、投资人、研究者加入一起交流讨论。 有兴趣参与的伙伴，请给我私信，有信必回！ (forwarded from DaDa)

Cake: 这个没试过。。。 (reply to 72235)

Ton: 有没有大佬知道如何使用tonconnectui 发送交易的方式部署一个jetton，里面的payload应该怎么写

Andrew: 就是发的消息里面要带上 state_init, 其中 state_init 就是 jetton master 的代码和初始化数据  let state_init = { code: code, data: data };  messages: [   {     address: address,     amount: toNano(0.2),     payload: payloadBase64,     stateInit: state_init   }, ], (reply to 72406)

科: 大佬们 怎么实现转账的功能啊

科: 有了解的大佬吗

wang: 想请教一下各路大佬  ton怎么监听链上jetton的交易(类似于erc20)的,只监听20协议的标准转账方法  想知道每笔交易的 1、发起者地址 2、合约地址() 3、接受者地址 4、交易是否成功

Ton: code我理解上大家都是一样的，数据不同，具体该如何写呢 (reply to 72411)

Henry: import TonWeb from "tonweb"; const tonweb = new TonWeb(); const jettonMinter = new TonWeb.token.jetton.JettonMinter(tonweb.provider, {address: "<JETTON_MASTER_ADDRESS>"}); const data = await jettonMinter.getJettonData(); console.log('Total supply:', data.totalSupply.toString()); console.log('URI to off-chain metadata:', data.jettonContentUri);

Henry: https://tonscan.org/jetton/EQCz_xK2vAf6DHSrmSQ3mV-uEigJbKPP0tWUpqkqYW-RHoLD#holders

Henry: 我用上面那段代码查这个代币的Metadata的uri居然显示为null

Henry: 但是实际是有数据的

Henry: 这是为什么哪

gavin: 也许是你的解析有问题getJettonData() (reply to 72426)

Andrew: 是转 TON 还是自定义的 Token 是不一样的，你还是需要看一下官方文档学习下的，不是几句话可以说清楚 (reply to 72413)

Henry: 原始的data数据打印出来就是null

Henry: 不知道为什么了

Andrew: 看看 API https://tonapi.io/ 能不能满足你的需求，如果不行就 https://github.com/toncenter/ton-indexer (reply to 72417)

Henry: const jettonMinter = new TonWeb.token.jetton.JettonMinter(tonweb.provider, {address: process.env.TOKEN_ADDRESS});         const data = await jettonMinter.getJettonData();         console.log('data:', data);         console.log('Total supply:', data.totalSupply.toString());         console.log('URI to off-chain metadata:', data.jettonContentUri);

Henry: TOKEN_ADDRESS传的EQCz_xK2vAf6DHSrmSQ3mV-uEigJbKPP0tWUpqkqYW-RHoLD

Andrew: jetton_content 在合约里面是有值的，但是你的 SDK 应该是没有解析出来 (reply to 72433)

Andrew: jettonContentCell: Cell  是有一个 Cell 的，需要解析这个 Cell (reply to 72429)

Henry: 哦，这个cell要怎么解析哪

Henry: 你这个用的是什么工具哪 (reply to 72439)

Andrew: https://tonviewer.com/EQCz_xK2vAf6DHSrmSQ3mV-uEigJbKPP0tWUpqkqYW-RHoLD?section=method (reply to 72442)

Henry: 你这个比官方的tonscan的功能要多哪

zonh: 请问，这个gas fee是在什么场景才会收取啊。 当出现-14的时候，发起方的转账的金额会扣么

Andrew: 不管交易是否成功，gas 都会收取 (reply to 72446)

DAOW: 是的

zonh: 有些交易有这个gas fee，有些交易又没有。 没大明白他这个的收取规则 (reply to 72447)

Leo: 进入了compute phase 就有gas fee

Leo: 跳过了就没有

zonh: @leouvw 这个可以提前预估出来么

Leo: 当然，一般只有三种情况会跳过

Leo: 1) credited value 不够启动tvm，目前是0.0004 ton

Leo: 2) 合约需要部署，且消息不含stateinit

Leo: 3) 合约需要部署但消息的stateinit不匹配

zonh: hr给yf转了0.0001ton，gas 不足，返回了错误码-14。 这个时候gas fee判断的是转账金额中是否足够支付？类似这笔交易，虽然失败了，但是发起方账户也会被扣除这0.0001ton

zonh: 了解 (reply to 72453)

Leo: 你这个属于进入了compute phase但gas不够 (reply to 72457)

wang: 我是用的 https://docs.tonconsole.com/tonapi/streaming-api,来监听jetton的交易,再使用 tonlib 来读取 交易信息  tonlib 用的 java的 https://github.com/neodix42/ton4j  来读取 交易信息,但是解析出来的交易信息里 和 tonview 的数据对不上 按照 https://docs.ton.org/mandarin/v3/guidelines/dapps/asset-processing/jettons 文档里的描述的话,实在看不出来验证过程是个什么样的 (reply to 72432)

Ton: 大佬，我这个state_init 分别知道code 和data的 string了,但是我要怎么放进去呢 (reply to 72411)

zonh: 我理解进入了compute之后，compute 的 gas fee就和from地址无关了吧，这个费用会从转账金额中收取。 不然不是完全可以从from地址扣除么 (reply to 72459)

Henry: 大佬，cell要怎么解析 (reply to 72440)

zonh: 有前提哈，mode设置的手续费从from地址出 (reply to 72463)

Leo: 当然无关了，所有gas fee都是从运行地址余额+消息金额扣的 (reply to 72463)

Andrew: 不同 SDK 有些差异的，你根据文档看下 (reply to 72462)

zonh: 大佬这个例子是不是可以这样理解。to地址（运行地址）收到这个0.0001的消息，然后运行 compute，发现此次消息金额 0.0001 不足以启动 compute vm，会抛出exit -14的错误，不会启动。但是from地址转出的这0.0001还是从from的余额中减掉了。to地址收到的这0.0001ton，用于支付了storage fee 嘛 (reply to 72466)

Ton: 这个sdk是指tonconnectUI还是指ton/core啊 (reply to 72467)

zonh: @leouvw 有一个新的疑问，如果说这笔交易是可回弹交易，compute阶段出现错误，这0.0001是不是还要回弹给 from 地址（但是不足以支付手续费了）

Ton: 我把这两个放一起拼接好像不对

DAOW: 大家好

Leo: 不是。from地址发出消息时已经扣除了携带的ton+消息发送费，这笔钱是预付而不是等recepient运行时再付，然后这个金额足以启动vm，但运行到一半时不够了，这种情况下更没有钱付弹回的发送费，也就不会弹回了 (reply to 72468)

Ton: 哥，能看看我的问题不😭 (reply to 72475)

Leo: 你啥问题 (reply to 72476)

Ton: 就是这个 (reply to 72462)

Ton: 我code 和data 的string都知道了

Ton: 怎么连到一起放在stateInit里面

Leo: beginCell().storeUint(0,2).storeMaybeRef(code).storeMaybeRef(data).storeUint(0,1).endCell().toBoc()

Ton: 我试试

zonh: 哦，那我理解了。 to地址接收的时候运行了代码，然后from地址预付的手续费不够，又尝试从携带的金额中扣除手续费，扣完发现也不够，就直接失败了。

Leo: from预付的就是携带的金额，不是预付手续费。。

Leo: from地址上没有to手续费的概念，它只是把钱转给to然后to再尝试运行自己的代码

Ton: n牛逼哥 (reply to 72481)

Ton: 这个知识点在那里

Ton: 我去学学

Leo: 你就这么理解，你把钱放信里寄出去，信就跟你无关了，至于收件人怎么处理是他的事，但你得付邮票（forward fee）+携带的金额（message value）

Leo: 官方文档有很多吧……这个属于基础常识 (reply to 72489)

zonh: 我没说明白。from地址发送一个消息（携带一个金额）， from地址处理发起消息的这段程序运行的手续费从from余额扣除（交易的send_mode设置了1），程序处理完，发出去后，然后剩下的就和他无关了。 to地址收到后，运行自己的程序处理消息，和from没任何关系。 (reply to 72485)

Leo: 对的 (reply to 72494)

zonh: 感谢大佬，真就是我ton路上的指明灯啊 (reply to 72495)

Henry: 这个是解析cell的嘛 (reply to 72481)

Henry: 求教大佬，用的tonweb库，这种cell要怎么解析

Henry: 没有大佬知道嘛😂

Leo: 去读tep64吧

Leo: nft和jetton metadata格式都写在标准里

Andrew: 根据Cell 的值，强行解析出来  ==============================  import { Cell } from "@ton/core";  let str = "b5ee9c7201010701009300010300c00102012002030143bff872ebdb514d9c97c283b7f0ae5179029e2b6119c39462719e4f46ed8f7413e640040143bff7407e978f01a40711411b1acb773a96bdd93fa83bb5ca8435013c8c4b3ac91f400601020005006a68747470733a2f2f7374617469632e686f6c64636f696e2e78797a2f746f6b656e2f6d6574612d3230303037393238352e6a736f6e00040039"; let cell_list = Cell.fromBoc(Buffer.from(str,"hex")); const cell1 = cell_list[0]; console.info(cell1); let refs = cell1.refs; let cell1_ref1 = refs[0];  let cell1_ref1_ref1 = cell1_ref1.refs[0]; let cell1_ref1_ref1_ref1 = cell1_ref1_ref1.refs[0]; let cell1_ref1_ref1_ref1_ref1 = cell1_ref1_ref1_ref1.refs[0]; const slice1 = cell1_ref1_ref1_ref1_ref1.beginParse();  try {     const url = slice1.loadStringTail();     console.log(`Load String Url :${url}`); } catch (error) {     console.error("error:", error); } (reply to 72498)

Henry: 厉害

Andrew: 主要是因为 Cell 是一个非常紧凑的数据表示格式，不像我们常见的编程语言中的 struct 或 class 那样帮我们解析好了

sinco: 有人知道这个怎么解决吗，我使用ton这个库在测试网进行转账，使用contract.sendTransfer或者contract.createTransfer在进行contract.send都可以转账成功，但是用postman调用sendBoc，就不能成功，显示：failed to parse external message: external message must begin with ext_in_msg_info$10

— 2024-12-18 —

Leo: createtransfer 返回的是body，要包装成full message才能sendboc

sinco: 这个方法传的不是body么，有什么函数可以直接得到完整的message吗 (reply to 72584)

Leo: 当然不是，只传body怎么知道你发给哪个合约 https://docs.ton.org/v3/guidelines/smart-contracts/howto/wallet#external-message-creation (reply to 72585)

sinco: const transferMessage = internal({         to: Address.parse(toAddress),         value: BigInt(amounts),         bounce: true       }); 我在前面有创建这个，指定了接收的合约地址和转账金额 (reply to 72586)

Leo: sendboc是发到你的钱包，然后你钱包再发到toaddress

Leo: 指的是**钱包合约**

sinco: 成功了，感谢。  contract.send(external) 也就是这个函数其实把消息包装成了externalMessage，所以能执行成功。我看代码，没找到send的具体实现，感觉js代码，不容易追踪进去 (reply to 72589)

Leo: 你这个contract应该是纯合约对象绑定provider生成的contract with provider，可以去看纯合约类的实现，例如@ton/ton的walletcontractxx类 (reply to 72593)

Jean: hello，我想请教一下，为什么我下载了 latest_archival.zfs.lz，并运行了 fullnode，ton-indexer 也设置了 TON_WORKER_FROM=1，为什么我没有历史数据，只有运行后的新数据？

Tasha: 各位大佬，tonkeeper这个切换不了环境，咋回事😅

sinco: 找到了，果然是包裹成了externalMessage,难怪一直不成功，tonweb这个包就是上层API封装好的，不需要自己在多一步包装，ton这个库给拆开了 (reply to 72595)

Jean: 为什么把我移出去呢😢

Jean: 请问有谁了解吗 (reply to 72597)

sinco: 我也一直切不了，还以为是我的网络问题 (reply to 72598)

Andrew: Add Wallet ，拉到列表最下面，不是有 Testnet Account 吗 (reply to 72605)

Tasha: 好的，应该是改版了，不过账号里面的代币不显示了，咋导入代币

Tasha: 同助计词，导入的账号和测试账号，地址对不上，不知道咋搞的，前面的测试账号又切不过去，不咋友好😅

Andrew: 看下是否是钱包合约版本问题，浏览器上查询确认一下 (reply to 72611)

Halan: https://toncenter.com/api/v3/ 大佬们问下这个接口字段说明有吗

sinco: 测试网的usdt什么地方可以领取呢

Andrew: @testnet_usdt_giver_bot (reply to 72615)

zonh: 大佬，这个是链上哪个参数控制的，找了一圈文档，没看到计算公式😓 (reply to 72454)

Leo: 少打个0，是0.00004🧐 (reply to 72618)

Leo: 在config param #21 flat_gas_price

zonh: 哈哈哈。 是不是可以理解为超过这个金额会启动tvm，然后tvm消耗gas上限是flat_gas_limit (reply to 72620)

Leo: 不是，是说不超过flat_gas_limit的部分都要0.0004这么多，后续按正常价格

Leo: 就像ktv 前四小时开场500，后续每小时+50，你说你只唱俩小时，那也得500

zonh: 那我理解的还是有问题。。。 是以什么条件来判断要不要收取gas_fee的（redited value 不够启动tvm，目前是0.00004 ton）。 我之前以为是小于0.00004的时候不启动tvm😱 (reply to 72622)

Leo: 就是你理解的那样，小于0.00004时不启动tvm，也就不收gas fee (reply to 72624)

Leo: 我上面说的是进入compute phase之后怎么收gas fee的逻辑

zonh: 了解了 👍 (reply to 72626)

— 2024-12-19 —

DaDa: 周四 #TON生态之夜 ： 从社交中挖掘增长机会：TG生态的流量实践与思考  ⏰12月19日 20:00 🔗 预约Space：https://x.com/i/spaces/1gqGvNEQAQOGB  #Telegram 拥有近 10 亿月活跃用户，成为 Web3 项目方争相入驻的重要平台。然而，如何从 TG 的社交网络中高效挖掘增长机会，已经成为生态参与者必须面对的问题。  在 TG 生态中，流量的获取、转化和价值最大化，不仅影响项目的成长，也为普通用户提供了丰富的参与场景。  本次 #TON 生态之夜，我们特别邀请几位深耕 TG 流量平台的项目方，共同探讨 TG 生态流量的特点、运营策略和未来趋势。 (forwarded from DaDa)

HY game: 今晚又要开始聊啦 (reply to 72777)

Jacob: Q1: what's the relation between lt and created lt?    I have convert  17.12.2024, 12:20:03 to timestamp , it is 1734438003, but is not 29170423000002  Q2:  for all the actions of one contact, how to get the min lt and max lt?   when we get transactions of on contract , how to  build parameters such as opts.lt and  opts.to_lt?  getTransactions(address: Address, opts: {         limit: number;         lt?: string;         hash?: string;         to_lt?: string;         inclusive?: boolean;         archival?: boolean;     })  Created at: 17.12.2024, 12:20:03 Created lt: 29170423000002

Leo: 1/ created_at is unix timestamp while created_lt is logical time, which represents the logical order of certain actions and has nothing to do with real-world timestamp - i.e., created_lt cannot be converted to created_at and vice versa;  2/ you can only get the max lt of a specific contract, which will be the beginning lt of the next transaction of the contract; getTransactions searches for transactions of an account backwards (from recent to old), with lt being the starting lt and to_lt the ending lt which is less than lt.

Lunja Mezyan🌷💓: Hello

Traffic Builder: telegram miniapp 用ton支付收款会被封号吗？

Andrew: 不会。 可能该用户涉及了其他风险行为。 (reply to 72814)

Traffic Builder: 如果是其他钱包类型呢？

夏天: API发起的交易 可以不用钱包输入密码确认吗

夏天: 哪位大哥知道吗， 有偿解答

Arvin: 正常来说钱包内分交易都是需要密码的。 (reply to 72833)

jay: 你自己有私钥，写脚本就可以绕过密码。

夏天: 私聊 谢谢 (reply to 72836)

— 2024-12-20 —

E: 求问， tact 语法中的 radom 相关的所有函数是真实安全的么？ 如果是的话是怎么做到安全，不会被攻击的

E: 不会有像 ETH 一样被预测或攻击的风险么？在智能合约里面使用

Andrew: 看这个文档，验证节点有一些优势，但是如果你依赖随机数做一些小金额的游戏，不值得验证节点投入就没有风险。  https://docs.ton.org/v3/guidelines/smart-contracts/security/random-number-generation (reply to 72915)

E: 好的，谢谢

Logan 🐯: 怎么突然有这个错误

Logan 🐯: 以前都不会，又更新了什么东西嘛😅

夏天: 有大神可以帮忙 助记词签名改为私钥签名吗  有偿帮忙

Logan 🐯: 什么情况😳

Traffic Builder: 我通过createInvoiceLink创建了一个star的付款链接。但是这个链接点击后无法付款，付款按钮会一直显示转圈圈。能帮我看看我的链接创建方式有什么问题吗？下面的这是我的payload: {"business_connect_id":"da24fffb8d43a8204c57dffcb4c26c20","title":"Upgrade to VIP1","description":"To be premium user and earn higher commissions.","payload":"eyJvcmRlcl9ubyI6InRlc3QiLCJzaWduYXR1cmUiOiJiNzFiZmM0MWJjOGJjNmY3OTgzOWJlYjBlOWFiZWQ3NSJ9","currency":"XTR","prices":[{"label":"ProductPrice","amount":1}]}

Andrew: hi @leouvw ，有空看下 dm，有群组邀请 (reply to 72785)

Thea: About what? (reply to 73033)

Logan 🐯: 咩情况

Andrew: 这个可能性很多，  比如网络问题，参数问题等等。 (reply to 73044)

— 2024-12-21 —

Logan 🐯: 现在好了

Jarvins: 有人知道如何从Transaction对象（我用额度@ton/ton）里面拿到这个数据么，为啥这个链拿点交易结果数据都非常费劲。。。

Liho: 大家好，我在 ton 合约中遇到了一个问题 我如何在合约中转移或提取 jettton test usdt，我是合约的owner

Liho: 有js版的例子吗？

Andrew: 这个是浏览器加工后的数据，看看 tonapi.io 的 event 相关接口 (reply to 73265)

Liho: @andrew_cong 能帮我看看吗？ (reply to 73270)

Andrew: 你需要了解 Jetton 的标准，然后按照这个文档操作  https://docs.ton.org/v3/guidelines/dapps/asset-processing/jettons#send-jettons-with-comment (reply to 73274)

Jarvins: 感谢感谢，我先研究研究这个 (reply to 73273)

king: W5版本钱包在API中对应的是V5钱包类型吗？

— 2024-12-22 —

Andrew: 是的，详细版本在浏览器可以看到 (reply to 73309)

Joe: ton 这个币怎么看啊

Evan: 多买一些，等涨

Joe: 真的嘛

— 2024-12-23 —

Andrew: ⚡️ 助记词泄露风险提醒  最近发现有一些开发者助记词泄露，可能的泄露场景是助记词写在代码或者配置文件中，如果有使用主网的助记词，请注意防范，不要使用大额钱包助记词用于开发。  https://tonviewer.com/UQB1QBhyiY76wtIDTaV3pFtl8jE_aCrlGeDDTRbz2LaNjTvH

Yang: 所以這是還在正在收款服務的錢包？  開發者怎麼還沒換 (reply to 73861)

Andrew: 最终疑似汇总到这个地址 (reply to 73865)

Alex: TonTech team is developing infrastructure projects like Liteserver and is eager to improve them. To better understand the current needs, they launched a survey. Please share the needs you feel are and will be helpful for your product with the Infrastructure Developer Survey.   👉https://forms.gle/D9ZWAo1qMnNrio3dA (forwarded from TON Dev News)

Sun: 问下ton链的这种状态码，文档链接有人保留了码？一下子找不到了

Chaincode: 直接在NFT的合约代码里面去找 (reply to 73876)

— 2024-12-24 —

hk: 各位大神有没有TON转换美元利率实时获取的接口？

hk: 就是获取市场转换利率

kevin: https://anton.tools/api/v1/swagger/index.html#/dex/get_dex_prices_ton (reply to 74058)

hk: 这个接口要怎么传参数

hk: 获取美元的转换率 (reply to 74063)

zonh: {  "error": "INVALID_BAG_OF_CELLS: bodyinvalid bag-of-cells last cell #2: end offset 245 is different from total data size 373" } 这个错有人遇到过么，之前都是好的，最近出现了这个错误

zonh: 这是啥原因

MT: 有什么方法可以同时发起多笔NFT交易吗？

MT: 比如使用智能合约之类的

Kim: 各位，请教一下呀，获取一个地址交易记录的代码，之前在线上运行的好好的，为什么最近突然一直在报500错误呀，代码很简单：const transactions = await client.getTransactions(jettonWalletAddress,{         limit:ids.length*2,     });

Kim: const client = new TonClient({         endpoint: 'https://toncenter.com/api/v2/jsonRPC',         apiKey: '1b312c91c3b691255130350a49ac5a0742454725f910756aff94dfe44858388e',     });      const myAddress = Address.parse('EQBKgXCNLPexWhs2L79kiARR1phGH1LwXxRbNsCFF9doc2lN'); // address that you want to fetch transactions from      const transactions = await client.getTransactions(myAddress, {         limit: 5,     });我把TON Cookbook中的代码，直接运行，也是报500，之前都是好好呀，报的错误：  data: {       ok: false,       error: 'LITE_SERVER_UNKNOWN: cannot locate transaction in block with specified logical time',       code: 500     } (reply to 74101)

Leo: 节点清除了过期索引，你要加上archival=true 做归档查询

Leo: 传的boc不对呗 (reply to 74090)

Kim: 是说getTransactions吗？ (reply to 74107)

Leo: 对

Kim: 在哪里加呀。。。另外，这个方法不是查找最近的交易吗？怎么还要加归档？

Kim: 好厉害，加上果然好使了，能查出来数据了！！太感谢了 (reply to 74111)

Abe.: tonapi 有没有额度大一点的端点

MT: 默认用的好像是lite节点吧 (reply to 74104)

MT: 不会保存很久之前的数据

MT: 如果这个地址很久没交易过了 lite节点上查不到好像就会报错

zonh: 逻辑是一样的。输入30个emoji的时候可以成功 😄😄😄😄😄😄😄😄😄😄😄😄😄😄😄😄😄😄😄😄😄😄😄😄😄😄😄😄😄😄，然后输入31个时候就失败了， 看长度也没有超过1023，就没搞明白了。。 (reply to 74108)

Leo: 你这个明显是build cell成功了，但是打包的boc无效，如果长度超过的话本地build cell就过不了 (reply to 74122)

Leo: 得检查打包上传boc的逻辑

— 2024-12-25 —

zoy: @andrew_cong 请问一下，提交的pull request 已验证通过，怎样才能合并到主分支去？

Andrew: 有专人再 review 的，等待一段时间 (reply to 74216)

zoy: @andrew_cong 我的提交已经有两周了， 还需要等待一段时间吗？

Andrew: ok， 那我问问 (reply to 74219)

zoy: 好的 谢谢

zonh: @leouvw 大佬，你有构造长memo的demo么。 我看tokenkepper都没限制长度，我的sdk输入超过1023就提示长度不够了😓

Leo: 1023是单个cell的限制吧，长comment一般是连续几个cell用ref连起来，你是不是没考虑ref (reply to 74233)

zonh: 用了ref。 我找到原因了，还是我之前用的方式不对。 (reply to 74236)

zonh: 我之前无脑的ref，原来是有特定的格式的😂

— 2024-12-26 —

Work: 兄弟们，TON项目排行版有吗

匿名少女: 有TMA推广或者开发经验的小伙伴可以DM我，合作或者一起做项目

Logan 🐯: Telegram mini怎么调用下载？

Xu Chen: 请问有 node.js端 调用合约方法的demo么？

Andrew: 如果你是前端，就用TON Connect https://docs.ton.org/v3/guidelines/ton-connect/frameworks/react (reply to 74425)

Andrew: 如果是后端，就用 SDK   https://docs.ton.org/v3/guidelines/dapps/apis-sdks/sdk#typescript--javascript

Xu Chen: 我知道 ，我想找个demo

Andrew: https://tonhelloworld.com/03-client/  Step 7: Increment the counter on-chain (reply to 74429)

Logan 🐯: telegrams mini 下载怎么接，我用传统拼接dom的方式好像下载不了

sinco: 请问下这个点开，怎么没有反应呢，应该怎么领取测试币呢，也没看见输入测试地址的地方 (reply to 72616)

🐮: tg钱包上这个swap怎么查看链上记录   他这个swap是用的哪个 有人知道不

User<7148949927>: 你查这个地址 (reply to 74474)

User<7148949927>: 然后看你自己交易记录不就好了

🐮: 查不到  我通过钱包充值地址去查  查出来跟tg上的操作对不上

User<7148949927>: 这交易，总归给你hash了吧

🐮: 没给hash啊

🐮: 有哈希那就好查了

🐮: 而且tg钱包的地址好像会变

🐮: 只有这笔对上了  其他的连余额都对不上

Andrew: 上面写了用你的钱包扫二维码 (reply to 74473)

— 2024-12-27 —

Ton: 大佬们，谁知道怎么使用代码Verify 合约啊

gavin: verify 合约？ verify啥？ (reply to 74638)

Ton: verify 合约

Ton: 说只有func才能verify，但是我这里只有tact。。

Logan 🐯: telegrams mini 下载怎么接，我用传统拼接dom的方式好像下载不了

Finch: 调用 api 即可 (reply to 74735)

User<7107859197>: tokeeper报错,应该怎么定位问题啊?

Amo: 跟大佬们咨询一个问题，关于TON的交易哈希，我发送完交易怎么拿到交易哈希，感觉跟其他的链不一样，拿不到交易哈希

Amo: 这是我的计算方式，我是先签名的，签名结果我查文档由hash这个函数，但是不一样

Amo: 我是先签名，后send

Leo: txhash取决于链上运行结果，发送时拿不到，可用消息哈希/运行地址去查tx

TG: 有可以合作的吗

D: 星星換成ton 台灣地區可以嗎？

Amo: 消息哈希是指我上面代码里的messages部分做哈希吗？ (reply to 74752)

Leo: 你代码的messages 是钱包发给target合约的消息，需要用外部发给钱包的消息，即signedTx包装成full external msg的哈希 (reply to 74847)

— 2024-12-28 —

Logan 🐯: app如何拉起telegram 登陆

sinco: 我是用的浏览器插件钱包，没法扫码 (reply to 74546)

Andrew: 在 TG 打开 mini app，自动会给你注入登录信息，用 TG SDK (reply to 74885)

Andrew: 那就手机安装一个 tonkeeper (reply to 74887)

CA_BOT: Tg 群聊加群 需要用户持有某个nft 怎么做呀？

CA_BOT: 有现成api 吗

CA_BOT: 或者持有一定量的某资产也行

D: Telegram Bot收款收到的Stars怎么提现？

D: 知道的 給5ton

Andrew: https://teletype.in/@alteregor/how-to-integrate-telegram-stars (reply to 74895)

Andrew: miniapp 让用户链接钱包，判断符合条件，给他发入群邀请链接，一次性链接，入群后 bot 再做验证，不在名单就踢出去 (reply to 74892)

dkdn: 谁在做游戏web3

intereno_o: l

Roger: 我们有做 (reply to 74927)

Roger: 提现很麻烦，要被抽30%税，还要等21天才可以提，要2FA 只能转到Ton ，这个好像还没开发好。目前只能投广告 (reply to 74895)

Logan 🐯: 我是自己的app (reply to 74889)

Logan 🐯: 想绑定tg的id

D: 只能投廣告？ 2FA 轉到ton 是什麼意思 (reply to 74933)

Roger: 2FA 就是账号必须做二次验证 (reply to 74940)

Roger: 是的，我们刚把stars支付关闭了

D: 那這樣 寫程式的時候 用ton 支付是不是比較好？ (reply to 74941)

Roger: 是的 (reply to 74950)

Roger: TON 用户付完就到账了

D: 從星星 改寫到ton 會不會很複雜 (reply to 74952)

Roger: 不会啊，完全不同的东西 (reply to 74954)

D: 👌🏽

D: 謝謝回覆

Roger: 接 Ton 的钱包 SDK 和 链上支付就行

D: 但用星星的話 就只好等21天 才能到帳

Roger: 对

D: 謝謝😊

Roger: 客气

D: 所以基本上 只是改 支付這塊 遊戲的程式碼 不需要改對吧 (reply to 74958)

Roger: 是的

D: 感恩感恩 人真好！

D: Sdk 從這裡看嗎

Roger: 嗯

D: 謝謝

Johnathan: Hi

— 2024-12-29 —

Ton: 文档越来越详细了 (reply to 74910)

Ton: 之前啥都没

Ton: 有没有大佬遇到过这个错误

Ton: 大佬们，我build之后使用fromBase64去读取报错， throw Error('Invalid magic');

Andrew: let cell = Cell.fromBoc(Buffer.from(str,"hex")); (reply to 75149)

Ton: 大佬，这是我从官方库clone下来运行的代码，然后报 throw Error('Invalid magic');这个错误... (reply to 75154)

Kang: 這個頻道太神了！真的准啊，跟著都賺麻了 (reply to 5011) (forwarded from .)

Ton: 这个hex为 {   "hex": "b5ee9c72c1020d0100029c000000000d00120018002a006b007000bc0139018f02110218027b0114ff00f4a413f4bcf2c80b01020162050202037a600403001faf16f6a2687d007d206a6a183faa9040007dadbcf6a2687d007d206a6a183618fc1400b82a1009aa0a01e428027d012c678b00e78b666491646580897a007a00658064fc80383a6465816503e5ffe4e8400202cc07060093b5f0508806e0a84026a8280790a009f404b19e2c039e2d99924591960225e801e80196019241f200e0e9919605940f97ff93a0ef003191960ab19e2ca009f4042796d625999992e3f60102f1d906380492f81f000e8698180b8d8492f81f07d207d2018fd0018b8eb90fd0018fd001801698fe99ff6a2687d007d206a6a18400aa9385d47199a9a9b1b289a6382f97024817d207d006a18106840306b90fd001812881a282178050a502819e428027d012c678b666664f6aa7041083deecbef29385d718140b0801a682102c76b9735270bae30235373723c0038e1a335035c705f2e04903fa403059c85004fa0258cf16ccccc9ed54e03502c0048e185124c705f2e049d4304300c85004fa0258cf16ccccc9ed54e05f05840ff2f00901fe365f03820898968015a015bcf2e04b02fa40d3003095c821cf16c9916de28210d1735400708018c8cb055005cf1624fa0214cb6a13cb1f14cb3f23fa443070ba8e33f828440370542013541403c85004fa0258cf1601cf16ccc922c8cb0112f400f400cb00c9f9007074c8cb02ca07cbffc9d0cf16966c227001cb01e2f4000a000ac98040fb0001c036373701fa00fa40f82854120670542013541403c85004fa0258cf1601cf16ccc922c8cb0112f400f400cb00c9f9007074c8cb02ca07cbffc9d05006c705f2e04aa1034545c85004fa0258cf16ccccc9ed5401fa403020d70b01c300915be30d0c003e8210d53276db708010c8cb055003cf1622fa0212cb6acb1fcb3fc98042fb002eedfd83" }

Andrew: 具体要看字符串是什么格式的，b5ee 是 Bag of Cell，不是 base64 (reply to 75156)

Ton: 我看别人的code都是te6cc开头

Ton: 我的为啥是b5ee开头

Ton: 怎么变成这个te6cc开头的

Ton: 有没有func部署jetton的教程啊，最好是视频...

Ton: 我用Howard tact的部署去给审计看

Ton: 没通过

Ton: 我又不知道怎么改

Ton: 大佬有空帮忙解答一下 (reply to 75159)

Andrew: @tonbelieverforever 看这个也是 b5ee，你先解析看看 (reply to 72511)

jun_song: 各位大神 请教下在tg小程序里如何下载自己服务器上的图片到用户手机里呀

— 2024-12-30 —

Andrew: 小程序是运行在 TG 的 vebview 里面，为了安全可能会有一些限制， 比如禁止下载。  你的真实需求是什么，为什么要下载到用户手机？ (reply to 75170)

Traffic Builder: react ton钱包TonConnectButton链接上后我希望执行一个回调操作应该使用哪个属性呢？

hk: 这些内容从交易中那个字段获取呀

Leo: description

wikig: 话说，有人试过用类似的ZK执行层在TON上构建低成本jetton方案吗  https://github.com/Lightprotocol/light-protocol

hk: 我就是想获取实际到对方账号有多少TON？ (reply to 75287)

Leo: 就是msg value减去所有费用 (reply to 75290)

gavin: 有什么优势吗？ (reply to 75289)

wikig: 省gas（ (reply to 75293)

wikig: 虽然但是我想了下，好像在jetton环境下省不了

wikig: 因为它省gas的原理是去除掉中间PDA账户的存在

gavin: pda？？？ 你是不是搞solana 搞混了 (reply to 75296)

hk: 代码上怎么实现？ (reply to 75292)

hk: 这个返回的msg 中没有value

wikig: 我上面发的link就是Solana的呀 (reply to 75300)

wikig: 所以我才在想在jetton下能否做类似的（

Leo: 可以用tx的in msg (reply to 75305)

hk: 这个里面是external in ，这个里面没有找到value的内容 (reply to 75308)

Leo: 当然是接收方tx的in msg (reply to 75310)

Leo: 如果是发送方就看outmsg

hk: 这个是发起交易返回的交易

hk: 这个out里没有内容

DaDa: 本周四（1月2日）  「TON生态之夜」嘉宾招募 ————— 计划主题：迈向新未来：2025年TON生态的机遇与探索  背景介绍： 作为 2025 年的第一期 TON 生态之夜，我们希望以一个充满期待的主题拉开序幕。在过去几年，TON 生态依托 Telegram 的优势，迅速崛起，成为 Web3 领域的重要组成部分。站在新的时间节点上，我们将一起回顾过去的经验，展望未来的方向，探讨 TON 生态在新一年中的潜力赛道和发展机遇。  讨论角度： （1）站在 2025 年的起点，你认为 TON 生态有哪些新的机遇值得关注？ （2）在新一年的发展中，TON 生态需要解决哪些关键问题，才能更上一层楼？ ————— 欢迎 TG/TON 生态的项目方、开发者、投资人、研究者加入一起交流讨论。 有兴趣参与的伙伴，请给我私信，有信必回！

— 2024-12-31 —

Jacob: 1.1 mtc-jsonrpc.service   ● mtc-jsonrpc.service - mtc-jsonrpc service. Created by https://github.com/igroman787/mypylib.      Loaded: loaded (/etc/systemd/system/mtc-jsonrpc.service; enabled; vendor preset: enabled)      Active: activating (auto-restart) (Result: exit-code) since Tue 2024-12-31 10:05:52 CST; 9s ago     Process: 2072198 ExecStart=/usr/bin/python3 /usr/src/mtc-jsonrpc/mtc-jsonrpc.py (code=exited, status=1/FAILURE)     Process: 2072207 ExecStopPost=/bin/echo service down (code=exited, status=0/SUCCESS)    Main PID: 2072198 (code=exited, status=1/FAILURE)   1.2 mytoncore.service   ● mytoncore.service - mytoncore service. Created by https://github.com/igroman787/mypylib.      Loaded: loaded (/etc/systemd/system/mytoncore.service; enabled; vendor preset: enabled)      Active: active (running) since Mon 2024-12-30 18:27:04 CST; 15h ago    Main PID: 1752693 (python3)       Tasks: 18 (limit: 9476)      Memory: 72.8M      CGroup: /system.slice/mytoncore.service              ├─1752693 /usr/bin/python3 -m mytoncore              └─2072531 /usr/bin/ton/validator-engine-console/validator-engine-console -k /var/ton-work/keys/client -p /var/ton-work/keys/server.pub -a 127.0.0.1:44175 -v 0 --cmd getstats    1.3 ton_http_api.service   ● ton_http_api.service - ton_http_api service. Created by https://github.com/igroman787/mypylib.      Loaded: loaded (/etc/systemd/system/ton_http_api.service; enabled; vendor preset: enabled)      Active: active (running) since Mon 2024-12-30 17:49:25 CST; 16h ago    Main PID: 1741636 (ton-http-api)       Tasks: 4 (limit: 9476)      Memory: 44.4M      CGroup: /system.slice/ton_http_api.service              └─1741636 /opt/virtualenv/ton_http_api/bin/python /opt/virtualenv/ton_http_api/bin/ton-http-api --logs-level=INFO --host 127.0.0.1 --port 8801 --liteserver-config /usr/bin/ton/local.config.json --cdll-path /usr/bin/ton/tonlib/libtonlibj> ton@vmi1805943:~/ton-tools/ton-tools/node$   1.4 validator.service      ● validator.service - validator service. Created by https://github.com/igroman787/mypylib.      Loaded: loaded (/etc/systemd/system/validator.service; enabled; vendor preset: enabled)      Active: activating (auto-restart) (Result: exit-code) since Tue 2024-12-31 10:08:34 CST; 22s ago     Process: 2073057 ExecStart=/usr/bin/ton/validator-engine/validator-engine --threads 2 --daemonize true --global-config /usr/bin/ton/global.config.json --db /var/ton-work/db/ --logname /var/ton-work/log --archive-ttl 2592000 --verbosity 2 (code=e>     Process: 2073183 ExecStopPost=/bin/echo service down (code=exited, status=0/SUCCESS)    Main PID: 2073057 (code=exited, status=1/FAILURE)  我只想启动liteserver的功能，现在问题是liteserver不同步区块，能不能帮忙看看是什么问题导致的？ 上面是启动的服务和状态(disable了validator的功能)

Jacob: MyTonCtrl> status fast [debug]   31.12.2024, 03:09:59.416 (UTC)  <MainThread>  start GetValidatorStatus function [warning] 31.12.2024, 03:10:09.436 (UTC)  <MainThread>  GetValidatorStatus warning: Command '['/usr/bin/ton/validator-engine-console/validator-engine-console', '-k', '/var/ton-work/keys/client', '-p', '/var/ton-work/keys/server.pub', '-a', '127.0.0.1:44175', '-v', '0', '--cmd', 'getstats']' timed out after 10 seconds [debug]   31.12.2024, 03:10:09.437 (UTC)  <MainThread>  start GetValidatorWallet function [debug]   31.12.2024, 03:10:09.437 (UTC)  <MainThread>  start GetLocalWallet function [debug]   31.12.2024, 03:10:09.437 (UTC)  <MainThread>  start GetDbSize function  MyTonCtrl> help help                   Print help text clear                  Clear console history                Print last commands exit                   Exit from application update                 Pull mytonctrl update upgrade                Pull up the source code and recompile the TON components installer              Run the installer of TON modules status                 Show TON status status_modes           Show MTC modes status_settings        Show all available settings with their description and values enable_mode            Enable mode disable_mode           Disable mode about                  Mode description get                    Get settings set                    Set settings rollback               Rollback to mytonctrl 1.0 create_backup          create_backup_cmd restore_backup         restore_backup_cmd add_custom_overlay     Add custom overlay list_custom_overlays   List participating custom overlays delete_custom_overlay  Delete custom overlay benchmark              Run benchmark  MyTonCtrl> status_modes Name              Status             Description validator         disabled  Validator functions. Activates participating in elections and staking. If pools and l/s modes are disabled stakes from validator wallet. nominator-pool    disabled  Standard nominator pools. single-nominator  disabled  Orbs's single nominator pools. liquid-staking    disabled  Liquid staking controllers. liteserver        enabled   For liteserver usage only without validator. alert-bot         disabled  Telegram bot alerts  MyTonCtrl>  上面是MyTonCtrl的输出信息，liteserver还是不同步? 安装MyTonCtrl的时候，使用的参数如下：  sudo bash install.sh -m liteserver -d -n testnet -i

Yang: 祝各位新年快樂！

— 2025-01-02 —

鲜陳多的陳.: 什么方向

a: 广播交易时如果前一笔还没确认 后一笔是不是不能广播啊

a: 本地维护了nonce (reply to 75934)

Andrew: 理论上，你可以不停地向一个合约发送消息，TON 验证节点会按照逻辑时间一个一个执行。 (reply to 75934)

Andrew: 但是这样做很容易发多了消息不受控，所以钱包合约都会有一个 seqno 来控制并发。

a: seqno我自己递增 也发不了。。 (reply to 75938)

Andrew: 你是用标准的 wallet 合约发的吧？ 那是做了限制的，前一个消息处理成功前，后一个消息不能被接受。

Andrew: 你试试 Highload Wallets ？ (reply to 75939)

a: wallet v4 r2 (reply to 75940)

Andrew: https://docs.ton.org/v3/documentation/smart-contracts/contracts-specs/highload-wallet (reply to 75942)

a: 感谢 (reply to 75943)

Jacob: 有没有创建节点的频道？

Jacob: 有没有一个频道，关于创建节点的？

Jacob: 自己按照文档建立了liteserver节点，但是不同步

wikig: 问一下万能的群友

wikig: 有没有认识UXUY wallet team的 我这边尝试集成UXUY wallet的 wallet adapter 以实现telegram 内的UXUY wallet调用 但是遇到错误 https://github.com/uxuycom/test-tg-dapp/issues/8  找了一圈一个像样的dev community都没找到

鲜陳多的陳.: 买到貔貅币怎么办

User<7374666566>: 你好👋

— 2025-01-03 —

a: 已经初始化的地址能改为Highload Wallets (reply to 75943)

Andrew: 理论上如果合约支持 setcode 是可以的。 但是不建议这样操作，标准钱包也不支持 setcode。 (reply to 76028)

Jacob: 错误如下：  1.  log.thread3.log:[ 2][t 3][2025-01-03 01:45:55.006824358][adnl-ext-server.cpp:34][!manager]      failed ext query: [Error : 651 : node not synced] log.thread3.log:[ 2][t 3][2025-01-03 01:46:03.930348324][full-node-shard.cpp:538][!manager]     getnextkey: [Error : 651 : not inited]  2.  log.thread3.log:[ 2][t 3][2025-01-03 02:29:16.692658581][manager-init.cpp:86][!downloadproofreq]        failed to download proof link: [Error : 652 : timeout for adnl query get_prepare] log.thread3.log:[ 2][t 3][2025-01-03 02:29:22.006226980][manager-init.cpp:86][!downloadproofreq]        failed to download proof link: [Error : 651 : proof not found]   3.   log.thread3.log:[ 2][t 3][2025-01-03 02:16:22.557539404][manager-init.cpp:156][!next]   failed to download key blocks: [Error : 651 : received answer with error]  4.   log.thread3.log:[ 2][t 3][2025-01-03 02:31:06.085298163][manager-init.cpp:156][!next]   failed to download key blocks: [Error : -666 : cannot verify newer block (-1,8000000000000000,26022915):4D92C34361B3D9D01907971E15CB66B0E56E42E861C828B5C07F1A4C7FB66D3D:23B745A2E36EB31F5927CF82084A047987128839AAE0BD1B7A028BF1B5FA151D using key block (-1,8000000000000000,26022915):4D92C34361B3D9D01907971E15CB66B0E56E42E861C828B5C07F1A4C7FB66D3D:23B745A2E36EB31F5927CF82084A047987128839AAE0BD1B7A028BF1B5FA151D because the newer block declares different previous key block seqno 26022182]  5.  log.thread3.log:[ 3][t 3][2025-01-02 23:58:17.512078045][manager.cpp:1726][!manager]    failed to load blocks from import dir: [PosixError : No such file or directory : 2 : File "/var/ton-work/db//import" can't be opened for reading]  6.  DA86B1A:3B318016D05E69F59A5E3D1B2EBFE47F57AE52F1336EBF933C6710B533D554E0 from 26QhDkeFy8kOt4cPDPUYlSo4x7FW1Dp6nU61gtd6bbI=: [Error : 651 : state not found] log.thread3.log:[ 2][t 3][2025-01-02 23:12:04.001955223][download-state.cpp:244][!downloadstatereq(-1,8000000000000000,26641486)]       failed to download state : [Error : 651 : state not found]  7.   log:[ 1][t 0][2025-01-02 10:03:40.626628515][adnl-ext-connection.cpp:129][!inconn]      Client got error [PosixError : Connection reset by peer : 104 : Error on [fd:550]] log:[ 1][t 0][2025-01-02 10:24:07.374017837][adnl-ext-connection.cpp:129][!inconn]      Client got error [PosixError : Broken pipe : 32 : Error on [fd:544]]  8.   log.thread2.log:[ 2][t 2][2025-01-02 13:04:04.728402630][adnl-peer.cpp:561][!localid]   failed to answer query: [Error : 603 : dropping IN message from h4PY2YOOneQasf78m388RLC5zUIBD0YqN3T6rQw5XA4=: no callbacks for custom query. firstint=-855800765] log.thread2.log:[ 2][t 2][2025-01-02 15:19:46.111339371][download-state.cpp:55][!downloadstatereq(-1,8000000000000000,26641486)]        failed to download state (-1,8000000000000000,26641486):7C9EA3883D52488C7FF4556035D1F2DE7563CEB1B6C119C13A9528C47DA86B1A:3B318016D05E69F59A5E3D1B2EBFE47F57AE52F1336EBF933C6710B533D554E0 from bgs8owu12QmpVg27LKxB1scN84z1BgZIEDpjkd0qCrg=: [Error : 652 : timeout] log.thread2.log:[ 2][t 2][2025-01-02 15:19:46.111576783][download-state.cpp:244][!downloadstatereq(-1,8000000000000000,26641486)]       failed to download state : [Error : 652 : timeout] log.thread3.log:[ 2][t 3][2025-01-02 11:25:49.953982496][adnl-peer.cpp:561][!localid]   failed to answer query: [Error : 603 : dropping IN message from h4PY2YOOneQasf78m388RLC5zUIBD0YqN3T6rQw5XA4=: no callbacks for custom query. firstint=-855800765] (reply to 75947)

Jacob: ./install.sh -m liteserver 只启动了liteserver,不启动validator的功能，就是不出块，不参与选举。只是需要一个liteserver的功能。

Jacob: validator.service是不是也和同步块有关。

Jacob: 环境 Ubuntu 20.04.6 gcc version 9.4.0  sudo ./install.sh  -m liteserver -n testnet 不用dump, 块快照的方式同步。

Jacob: About no progress in node synchronization within 3 hours Try to perform the following checks:  Is the process running without crashes? (Check systemd process status)  Is there a firewall between the node and internet, if so, will it pass incoming UDP traffic to port specified in field addrs[0].port of /var/ton-work/db/config.json file?  Is there NAT between the machine and the internet? If so, ensure that the IP address defined in the addrs[0].ip field of the /var/ton-work/db/config.json file corresponds to the real public IP of the machine. Note that the value of this field is specified as a signed INT. The ip2dec and dec2ip scripts located in ton-tools/node can be used to perform conversions.  文档的这些都check过了，依然不能同步，大神能不能帮我看看？

Andrew: 开发者部署 liteserver 的不多，但是应该可以走通。  你主要检查网络方面的问题，比如防火墙是否开了需要的端口（30303？），再检查 ton-global.config.json 文件，看看其中的节点是否活跃是否链接得上？ (reply to 76039)

Jacob: ======监听的端口，已经打开，可以在别的机器上 访问 启动了哪些进程？监听了哪些端口？  1.  14153 liteserver  2. 30839  validat+ 2847256       1 86 12:10 ?        00:01:08 /usr/bin/ton/validator-engine/validator-engine --threads 3 --daemonize --global-config /usr/bin/ton/global.config.json --db /var/ton-work/db/ --logname /var/ton-work/log --archive-ttl 2592000 --verbosity 1  3. 37770  (Not all processes could be identified, non-owned process info  will not be shown, you would have to be root to see it all.) tcp        0      0 0.0.0.0:37770           0.0.0.0:*               LISTEN      - tcp        0      0 127.0.0.1:59822         127.0.0.1:37770         TIME_WAIT   - tcp        0      0 127.0.0.1:59852         127.0.0.1:37770         TIME_WAIT   - tcp        0      0 127.0.0.1:59854         127.0.0.1:37770         TIME_WAIT   - tcp        0      0 127.0.0.1:59824         127.0.0.1:37770         TIME_WAIT   - tcp        0      0 127.0.0.1:59828         127.0.0.1:37770         TIME_WAIT   -  mytonctl 和 valiadator-engine的通道？？  4. 8801  root@vmi1805943:/etc/systemd/system# netstat -anp | grep 8801 tcp        0      0 127.0.0.1:8801          0.0.0.0:*               LISTEN      2853397/python root@vmi1805943:/etc/systemd/system# ps -ef | grep 2853397 ton      2853397       1  1 12:30 ?        00:01:33 /opt/virtualenv/ton_http_api/bin/python /opt/virtualenv/ton_http_api/bin/ton-http-api --logs-level=INFO --host 127.0.0.1 --port 8801 --liteserver-config /usr/bin/ton/local.config.json --cdll-path /usr/bin/ton/tonlib/libtonlibjson.so --tonlib-keystore /tmp/tonlib_keystore/ root     2886657 1649651  0 14:54 pts/6    00:00:00 grep --color=auto 2853397 root@vmi1805943:/etc/systemd/system# (reply to 76041)

Jacob: 其中的节点是否活跃是否链接得上？ 可以连接上，写了程序能访问

jay: 请教下大伙，我用 tonconnectui 发起交易：this.tonConnectUI.sendTransaction ， tonkeeper钱包始终会切换到的第一个钱包。我新创建的测试网账号毫无用处。

jay: 请问大家知道原因么？   我有个猜测：因为我用的是同一个助记词导入的测试网钱包，我怀疑 tonkeeper 判断的时候，直接基于地址匹配，匹配到了第一个正式钱包。

jay: 经过验证，还真是这个原因~😂~ (reply to 76106)

— 2025-01-04 —

伊: TonConnect 在安卓设备上使用 TonSpace ，多个 telegram账号共享一个 Wallet 的storage,导致多个telegram账号在 miniApp 上显示连接了同一个地址。在 ios以及电脑端没问题，这里有官方 sdk的维护者在吗

T: 想請教一下，最近在實作 jetton 空投，做一個批量空投合約會比較省 gas fee 嗎，還是就 for loop 直接跑 transfer 就好了

gavin: 做一个合约批量空投的速度会更快一些, 至于省gas 不会省很多 (reply to 76253)

6666feile: {"@type":"error","code":500,"message":"LITE_SERVER_UNKNOWN: cannot apply external message to current state : External message was not accepted\nCannot run message on account: inbound external message rejected by transaction BBCB1D4316D140FD0A5501C8C751536A5DF88E2A3BBC5C0522711E66B0AF6DA1:\nexitcode=133, steps=49, gas_used=0\nVM Log (truncated):\n...SIGNU\nexecute PUSHCONT x28945F0ADB31E1F2C087\nexecute IFNOT\nexecute XCHG s2\nexecute NOT\nexecute XCHG2 s0,s7\nexecute AND\nexecute THROWIF 132\nexecute XCPU s2,s5\nexecute EQUAL\nexecute THROWIFNOT 133\ndefault exception handler, terminating vm with exit code 133\n","@extra":"015d2f51-0c2d-4511-be70-b76e2aa31633"}

6666feile: 这个错误的原因是啥

6666feile: 我知道了

HY game: 绑定到账号

Yasmin: Assalamualaikum 👋

— 2025-01-05 —

yarg0xxxx: https://github.com/ton-connect/sdk/issues/255

yarg0xxxx: 没人解决这个问题吗

Andrew: 你在 github 提了 issue，开发者会评估解决的 (reply to 76341)

Ton: 如何把我的用户名铸造出来啊

u7: 請問TON的交易可以直接設定從A地址轉到B地址後再轉回來嗎? (同一筆交易)

Andrew: 在 https://fragment.com 根据规则做 (reply to 76362)

Andrew: 这需要 B 地址里面写了这样的逻辑，所有行为都是写在合约里的 (reply to 76366)

u7: 好的 十分感謝 (reply to 76376)

Jacob: 有没有人成功搭建了自己的liteserver

Jacob: 或者大家测试网测试的时候用的哪家的 liteserver? 用了orbs-network的，很不稳定 toncenter也不稳定

— 2025-01-06 —

小北: 大佬

小北: ？

小北: 𝓚𝓸𝓷𝓼𝓽𝓪𝓷𝓽𝓲𝓷

Andrew: NFT 没有什么真假之分，你可以自己部署和发布，只是盗用别人的图片的话，涉及图片版权 (reply to 76505)

小北: @andrew_cong 如何批量部署

Andrew: https://docs.ton.org/v3/guidelines/dapps/tutorials/nft-minting-guide (reply to 76509)

小北: 看不懂

小北: 我交易了一笔马上就有收到nft，我如何才能像他一样

Ton: 有没有大佬知道如何使用bot给用户发送star

11: 好的不学学坏的是吧 (reply to 76512)

Herry: 各位大神好，请教一个问题。我有个钱包A拥有若干 Jetton，所以这个钱包A拥有自己的一个 JettonWallet，称为B。 上次我朋友给我转 Jetton 的时候没有转到A里面，而是转到B里面了，所以目前 B 自己拥有一个 JettonWallet，称为C。 我想知道这种情况下，有什么办法能将B的 Jetton 转给 A 么？

Andrew: 标准的 JettonWallet 合约都没有定义处理外部消息的方法，所以没法给 JettonWallet 发外部消息让他做这个操作。 (reply to 76518)

Herry: 这么说也有道理…不行的话就算了，还好是测试钱包里面没多少钱😂 感谢回复 (reply to 76519)

Hao: 我是前端工程师，被双向了，可以联系我一下 (reply to 76532)

Lee: 我是后端，主要语言是java和go，熟悉常见合约语言 比如func solidity (reply to 76532)

Lee: 也可以联系我下

小北: @adnmb2 ？？？

小北: 自动生成nft批量发送给别人，谁有或者可以做这个脚本

jay: 发nft? (reply to 76539)

— 2025-01-07 —

w: 有大神知道 java sdk 获取交易后怎么判断交易是成功还是失败吗

Andrew: 每个消息对应一个交易，有些消息是通知或者 gas refund 类型的可以忽略，判断所有核心消息处理成功了，就是成功了 (reply to 76635)

w: 好的 我试试 (reply to 76641)

Sol: 大家好！ 我们是一支经验丰富的智能合约开发团队，专注于TON区块链开发。我们提供以下服务：  • 智能合约的设计、开发和优化  • NFT项目的部署和管理  • 使用FunC、TACT和其他工具进行高效开发  如果您有任何相关需求，或者需要技术支持，请随时与我们联系！ 让我们一起把您的项目推向成功！

Go: 请教下大神，我现在从boc里解析出了cell和他的ref，我现在还需要知道什么信息才能把cell数据还原成交易原始信息呢？例如地址，amount等

Sun: 地址和金额可以从别的地方获取，不用这么复杂 (reply to 76652)

Go: 大神好，目前这个交易还没广播，而且只能拿到一串boc，这个理论上可以还原原始交易信息吗？ (reply to 76653)

Sun: boc 可以转换成hash

Sun: 通过hash判断交易是否成功和获取交易信息

Sun: 我不知道你要的是不是这个

Go: 嗯，这个hash我也能拿到的，但是交易还未广播的话我是没法通过hash获取原始信息的是吗？我主要需要做原始数据校验，想通过boc还原出来 (reply to 76657)

Leo: 按消息的tlb格式解析cell就行了

Go: 想问下，这个tlb格式是定义在合约里的吗？ (reply to 76661)

Leo: 消息分两部分，info和body，你要的地址和ton amount都在info，这部分是固定格式，body则是合约自定义的信息和格式 (reply to 76662)

Go: 明白了谢谢大佬，那ton sdk里有什么function是可以根据自定义tlb解析出源数据的吗？ (reply to 76663)

Leo: 目前ton似乎没有直接从tlb解析的工具，但是sdk都会提供底层解析方法比如load uint，load ref，load address等等，可以根据tlb的描述或合约代码逻辑用这些底层方法做解析 (reply to 76664)

Go: 好的感谢大佬 (reply to 76666)

万顺: ton区块是每秒的吗

User<7263596021>: привет

— 2025-01-08 —

Zaza: 请问有谁做过ton链上USDT支付的开发吗？测试网有没有测试的usdt可以领取？

Ton: 有的 (reply to 76750)

Andrew: http://tondevdoc.xyz (reply to 76750)

Root: https://tonviewer.com/transaction/6c94c310c2a82c14db5e736e98f97952276004d7422ff91949ba104475f53b0d  各位 这种交易是怎么创建出来的

Leo: 这有啥特别的吗

Root: 入账被退回 ,我们的交易扫描没有处理好 中了招

Root: 想看下这种交易怎么创建,再看看有没有其他的类似的坑

a: 。。

a: 充币扫描用的哪家的api

jay: 地址没有处于激活状态。 (reply to 76757)

Root: 搞出来了..

Root: IhrDisabled 是什么意思

Leo: 跟ihr 有啥关系

Leo: 只是合约没部署被bounce了

Root: bounce=true  IhrDisabled = false  才会bounce ,bounce=true  IhrDisabled =true 不会被bounce

Root: IHR是干嘛的

gavin: Instant Hypercube Routing (reply to 76769)

gavin: 即时超立方体路由 好像没启用

Leo: ihr只是影响路由 不可能出现这种情况

Leo: 他估计是没控制变量 误会了啥 (reply to 76771)

Andrew: IHR 是为了加快消息的跨分片传输的，如果打开 gas 会贵很多，可以不用等下一个区块，以最快的方式传输消息。  但是不打开这个，也差不太多，就是稍微慢一点点

Leo: ihr 现在好像还没实现？ (reply to 76774)

Leo: 还有anycast 也是

Leo: 等节点升级😎

Root: 这个设置 以后,如果是未初始化的接收地址,为什么会导致交易回弹

Ton: 哈喽，大佬们，问个问题，可以在TMA中让用户点一个按钮，然后向一个固定的账号发送一条消息吗

Ton: 就是用户点了这个按钮，然后就带着一些消息发给一个固定的账号

a: bounce设置为false (reply to 76782)

6666feile: 这个链条是怎么串起来的

6666feile: 如果想通过 toncenter.com 的api，怎么通过转账的hash，得到这个链条

6666feile: 最奇特的是，转账的hash，不在这个链条上，神特么设计

a: 它用的tonapi (reply to 76795)

D: 我想問一下，bot 中 收到的星星要去哪裡看 有人知道嗎，是迷你小程式

6666feile: 使用tonapi的traces接口，如何确认他失败了。像这种

6666feile: 他只有一个tx，没有children，即使是成功，也认定失败？ (reply to 76797)

6666feile: 大佬 ，这种，认定失败规则是怎么样的

a: success为false (reply to 76810)

6666feile: 他的最外面 的success是true

jay: 今天ton主网有什么问题么？我这边交易大面积pending。

Arvin: 估计是有点问题。

jay: 好像过段时间又好了，因为我看的 tonviewer 的交易，也不确定是不是 tonviewer 显示延迟的问题

— 2025-01-09 —

6666feile: 我也发现一些问题，隔了快一个小时，walletV5.getSeqno()，居然返回同一个值

jay: 是不是中途没交易？

llllIIIIIIlIllI: 可能是 tonview 的 rpc 出了点问题

llllIIIIIIlIllI: 换个节点 本地查看看

llllIIIIIIlIllI: getSeqno 你估计是这个地址两次查询中间没有交易吧

6666feile: 不是，产生了交易，上面图上是服务器，是utc时间，这个图是gmt+8，时间是对应的

6666feile: 就很奇怪，卧槽

miya: 有没有人知道 例如我想监控 TON NFT mint信息和拍卖信息，应该怎么实现?  解决有偿。

gavin: 监控所有的collection吗？ (reply to 76902)

miya: 我其实想监控 fragment 上的number的最新上架 (reply to 76903)

miya: 不知道怎么去实现...

miya: 不太懂 ton

gavin: https://tonviewer.com/EQAOQdwdw8kGftJCSFgOErM1mBjYPe4DBPq8-AhF6vr9si5N?section=overview 看样子是监控这个就行了 (reply to 76904)

miya: 我知道这个 (reply to 76907)

gavin: 你是要监控 报价 还是 list？ (reply to 76904)

miya: 最新上架的number ， 拍卖和sale的 (reply to 76911)

miya: 有没有大佬指点一下 100u+红包感谢。

gavin: 我马上看下 (reply to 76913)

miya: 感谢， 本来我可以直接抓取 fragment 进行实现，但是他好像有延迟 (reply to 76915)

Jacob: 合约中能不能发送外部交易？

gavin: 不能 (reply to 76917)

gavin: https://tonviewer.com/transaction/3a49cd7e381d3cc0bbb01d179db0f0b2f528d792e9bdc89d4e94a657105f8509  这笔是报价的交易, 可以观察到它的特征是给对以的 number nft item 转账 并且固定了备注 通过这个特征扫交易就行了 (reply to 76916)

gavin: https://tonviewer.com/transaction/ef83e0c63f9bc578f34f963d299079c1dfba5dadaee23e643499b816e46b56e8 这个是买家成功买入的交易

gavin: 看上去很复杂, 需要监控这个集合的所有事件. 另外这个number nft 会在不同的市场上都list (reply to 76912)

miya: 不管怎么样 他们都调用了 EQAOQdwdw8kGftJCSFgOErM1mBjYPe4DBPq8-AhF6vr9si5N ，我不管其他市场 我只用关注 UQBAjaOyi2wGWlk-EDkSabqqnF-MrrwMadnwqrurKpkla4QB 市场的 (reply to 76922)

miya: 我只关注 Fragment 市场的

miya: 能写个代码的demo给我吗 我愿意付费 (reply to 76922)

gavin: 我没有这个代码, 你自己找找看看nft相关的 history 接口 (reply to 76925)

gavin: https://tonapi.io/api-v2#operations-NFT-getAccountNftHistory

gavin: 看看是否满足你的需求吧

miya: 这是获取地址NFT历史吧 (reply to 76928)

Jacob: 用户发送一个外部交易，包含两个output message,目标：要么两个交易同时成功，要么两个交易同时失败， 不能出现一个交易成功，一个失败。 怎么实现呢？

Jacob: SC_whitelist (白名单判断合约), JettonWalletSC_A (用户A的jetttonWAllet合约)  externalMessage = {  outputMessage: [msg1,msg2] }  msg1: userA_SC-> SC_whitelist 判断用户在不在白名单  msg2: userA_SC->JettonWalletSC_A -> JettonWalletSC_Project 如果用户在白名单中，用户才可以转账token给JettonWalletSC_Project

Leo: 实现思路错了，要么在链下判断好再让用户发tx，要么让用户直接发到sc whitelist，如判断通过再转发给jwsc project，否则退款

Jacob: 要么让用户直接发到sc whitelist，如判断通过再转发给jwsc project，否则退款  ------------------------- 用户直接发body数据到sc_whitelist,  sc_whitelist解析body的数据，判断是否是白名单。这个简单。 然后：  谁来转发？sc_whitelist转发吗？转发给谁？转发给用户的账户合约吗？ sc_whitelist不能发外部交易给用户的账户合约？  转发应该不能动用户的jetton token，只有用户才能动自己的jetton token

Leo: 很简单，让wl持有资产而不是proj，这样wl只需发个通知给proj即可，用户可以直接转到wl的jw  如果资产一定要由proj持有，就把wl的功能合并到proj内，减少不必要的模块化  如果一定要分开且proj持有资产，让wl把变动或状态同步给proj，用merkle之类的方式让用户不经过wl也能在proj中验证 或者还有个思路是用户转给proj的jw后通知proj向wl请求验证，wl返回结果再处理下一步或退款

yarg0xxxx: ton 小程序内部可以实现保存图片到手机相册吗

yarg0xxxx: 浏览器 a 标签下载没反应

Nix: 您可以使用 TonApi 获取 Fragment 的交易历史记录。如果您没有解决它，我可以为您提供帮助。 (reply to 76902)

miya: 没有解决 (reply to 76954)

Lunja Mezyan🌷💓: Hello

Nix: 您正在寻找哪个 Ton 地址？ (reply to 76955)

miya: EQAOQdwdw8kGftJCSFgOErM1mBjYPe4DBPq8-AhF6vr9si5N (reply to 76958)

Nix: 您想列出这些数字吗？ (reply to 76961)

miya: no， 不是 (reply to 76962)

Nix: 您可以向我发送私信，告诉我您具体需要什么吗？ (reply to 76964)

Nix: 我之前确实监控过所有拍卖和匿名号码转让。请告诉我你到底想要什么，这样我才能帮助你。 (reply to 76964)

miya: 监控最低的匿名号码出价 , for sale ，另外 fragment上的数据是否存在延迟 (reply to 76973)

— 2025-01-10 —

Amo: 使用ton connect 调用ton keeper发交易的时候回调回来报Context must be an activity 的错误，大佬们有没有遇到过

User<7158594595>: Hi guys, I can't see any function read string on smart contract kind of load_slice.... what I want to do is accept string on smart contract and send ton with comment    cell message_body = begin_cell() ;; Creating a cell with message                         .store_uint(0, 32)                         .store_slice(referId)                         .end_cell(); How can  I implement this?

Andrew: 可以下载 ton connect 的源代码，找Context must be an activity 关键字看看 (reply to 77023)

Root: https://tonviewer.com/transaction/135b552bb67151d4239c63d8f44db30ad2160f6f27880aa8e2d816fe00b0e58a 这种交易 怎么查询失败信息

Root: 如何获取失败的原因

Leo: 要么爬vm trace，要么把发消息时mode去掉2

Chuck: 想问一下，这种是怎么实现的，使用的哪个 API

Andrew: 这个就是在一个 mini app A 里面打开另外一个 mini app B (reply to 77056)

Chuck: 您好，我可以通过这种办法获取向用户发送消息的权限吗 (reply to 77111)

Andrew: 本质上是，用户打开了你的 bot 或者 miniapp，你就获得了用户的 TG id，就可以给用户发消息 (reply to 77114)

Andrew: 不过不要乱发消息，用户会把你 block

— 2025-01-11 —

c: 有没有人知道 转发到群里 story 的消息怎么自动删除 没看这种类型的字段、消息

Valoryn: 转发设自动删除？自己脚本定时任务吧

— 2025-01-13 —

c: 我的意思 怎么识别这条消息是 story 类型的 我试过删除转发类型的 删除不了

Ivan: 大家好！ 希望你们一切顺利。我有一个稍微有些不寻常的请求，但对我正在进行的项目非常重要。我需要在TON测试网上进行测试，需要大约10,000个TON。如果有人能帮忙，我将非常感激。提前感谢大家！🙏 0QA-q5mP8QBgLv9AGelDYUv3KfNmzF4JfnzmBe_JRJa6Yf_L

— 2025-01-14 —

jay: 你最好是调整参数来验证~

User<7107859197>: 要不了那么多ton,我做合约全程在测试链上测试,应该没用到20个ton.而且还可以先在本地测试,逻辑测完了就是在测试网上走遍流程就行了.更用不了几个ton (reply to 77471)

Ginta 🦴: 有没有用golang做过 sol链监控的呢，有偿咨询一些问题，有做过的话可以私聊我一下

gavin: dm 我 (reply to 77520)

Sun: 有人知道怎么通过API获取 ton链的最新区块吗？到

zonh: 之前在官网能看到 jetton_wallet_governed 类型的合约介绍，现在怎么全没了😓

zonh: 是 jetton_wallet_governed 治理功能下掉了么

Leo: 看usdt就行了

Leo: get shards (reply to 77529)

zonh: 按照之前的介绍，使用governed类型的合约，usdt是有中心化治理功能的，usdt的owner可以冻结任意地址的usdt。 那现在这部分是没有了么 (reply to 77532)

zonh: 全网都搜不到相关信息了，我以为我穿越了🤣

zonh: 删的也太干净了

Leo: 可能没多少人看吧就下了，但是功能还是可以实现 (reply to 77534)

Leo: 这个文档本身也没啥informative 的东西吧 都是常识

zonh: 除了usdt合约的代码支持这个，找不到其他任何信息了

zonh: 之前官网有特意强调，usdt是稳定币，治理合约是中心化的。  今天同事问我，ton的usdt现在是没法冻结了么，我还非常肯定可以冻结。我去找资料就没看到了。。。

Leo: 这个直接看合约就行了

gavin: 是可以冻结的。。

gavin: https://tonviewer.com/EQASW-SMQa1WqCsgAfEayPZxMQxaQY4Zt032Lhlg1r7GsC4t?section=code  在jetton-wallet.fc 里 非常邪恶 可以冻结任意usdt钱包 (reply to 77540)

Andrew: Tether 在所有链上都是这样，很正常，合规和反洗钱等等需要。 (reply to 77547)

gavin: 对的对的 (reply to 77549)

wikig: 我其实很好奇，如果今天我写个fc合约 什么都不做，只针对usdt包一层，名之LPusdt (reply to 77547)

wikig: 然后其他主体使用LPUSDT来实现洗钱之类的操作，USDT不能把LPUSDT的fc合约地址列入黑名单吧

ZEN 📟: 我想询问，怎么让miniapp 可以显示出 月用户量？

Leo: 拉黑的是usdt wallet地址，无论你弄啥合约持有u就能被ban (reply to 77560)

— 2025-01-15 —

tim: hello，能请教你们个问题吗，为啥ston这个dex, ton swap token走的是jetton transfer? pton有啥用啊？是不是要先换掉pton才能走 ton swap token?

gavin: pton 类似weth (reply to 77600)

LC💎: 大家好，显示未验证令牌如何解决呢？

gavin: 去找ton kepper的人 (reply to 77604)

LC💎: 好的 大佬 (reply to 77606)

TON: 你發的幣嗎？ (reply to 77604)

— 2025-01-16 —

Zephyr: 大佬们 boc数据怎么解析出来

cc: 请教各位大咖，怎么在miniapp里加关联ton钱包的功能呀，让用户添加ton钱包，有攻略吗，求指导🫸🫷

pony: 连接钱包就可以啊

pony: https://www.npmjs.com/package/@tonconnect/sdk @cc

cc: 哦哦哦，原来是这个文档，感谢！

cc: 之前找了其他文档，没有研究明白

小北: Tg  Ads 广告怎么过？有没有大神？

Finch: 冲会员 (reply to 77693)

Andrew: 首先你需要明确知道 TLB 的具体格式，你才能解析。  如果是通用的数据结构，下面这个文档  https://docs.ton.org/mandarin/v3/documentation/data-formats/tlb/msg-tlb  如果是其他合约内容，需要知道源代码或者具体结构才能解析。 (reply to 77665)

Wayne: 有兄弟搞个twa里miniapp的shareMessage嘛

Wayne: 这个地方的callback一直没收到消息是咋回事啊

— 2025-01-17 —

Ton: 我刚想问这个，这个能让用户转到一个指定的账号然后发送信息吗？ (reply to 77706)

Lunja Mezyan🌷💓: Hello

Andrew: 我测试了是可以 callback 的，你需要在 bot 里面先构建一个消息，获得id (reply to 77707)

Andrew: 测试代码在这里，按需修改一下就好  savePreparedInlineMessage https://github.com/ton-builders/open-tg-bot/blob/main/bot.ts  window.Telegram.WebApp.shareMessage("Q80OofhZLXrSW8Br",callme)) https://github.com/ton-builders/open-mini-app/blob/main/app/page.tsx (reply to 77707)

yarg0xxxx: 这是用来分享 media 的吗 (reply to 77758)

Andrew: 是的，各种媒体消息都可以分享。 因为这个接口还比较新，所以我 demo 一下 (reply to 77762)

yarg0xxxx: 如果是图片的话 必须是 url 吧 不能是前端本地生成的 blob 什么的么

Andrew: 这个具体你看文档就好，实在遇到问题可以群里问

yarg0xxxx: 好的 明天试试看看能不能分享本地图片 感谢🙏

Karen: tonweb 的哪个版本是文档中的版本： 因为当我写入：const jettonMinter = new TonWeb.token.jetton.JettonMinter(tonweb.provider, {address: "<JETTON_MASTER_ADDRESS>"}); 我收到错误，它需要 JettonMinterOptions，而不是单个地址

Влад: Why I'm banned right away as joined in other languages chats? I mean En/ru. Add me please

— 2025-01-18 —

6666feile: 这个错误是因为啥？〈〉

Andrew: 最好用 @ton/ton 的 SDK (reply to 77796)

Andrew: 如果下面的文档没有定义这个错误码，就要看源代码   https://docs.ton.org/v3/documentation/tvm/tvm-exit-codes (reply to 77819)

Karen: I mean the version  What is the version in this documentation? (reply to 77820)

Andrew: who knows what is 'this' documentation? (reply to 77835)

TON: 電報上沒發TRUMP 幣的？

小: 那真的是特朗普发的

TON: 真是也沒永遠的，說不好，老普哪天嘎了

小: 等噶了再说😂

— 2025-01-20 —

Wu: 杜罗夫最近怎么样？

Traffic Builder: Wallet里面没有地址信息，那我如何获取地址信息呢？

Traffic Builder: 如果这样写会报错？

Leo: wallet.account就是

sakura: 經常掛

pony: 哪里有水龙头呢

Andrew: https://t.me/testgiver_ton_bot (reply to 78030)

Andrew: 大部分问题，都可以在这里找到索引 http://tondevdoc.xyz/

pony: 好的。

pony: https://tonviewer.com/transaction/7a5be56effd7c5183a51193ff9733c462a162faa75ae020415ff169e459146ec 我如何知道交易为什么失败吗？

Joe: ton 怎么一直都不涨啊

金龙科技: ton 链下面的代币都是垃圾

金龙科技: 不管我买哪个，都是一路刷新最低，Ton 链全是空气

— 2025-01-21 —

yan: 确实都在跌

yan: 我昨天 研究了下storm

yan: storm其实还是有希望的。。

yan: 不是空气。相当于平台币，不过也跌了好久，

Andrew: 你这个未初始化的新钱包里面有 4.553 TON，你要转 4.552 去 Gate，但是新钱包初始化需要超过 0.001 的费用，所以失败。  实际初始化钱包消耗 0.0054 TON。后面你再转就成功了 (reply to 78038)

pony: 相当于最大值计算的有问题，或者用户输入的转账金额太大了

eronho: 想请问下 wallet id 在 tonapi有哪个接口可以获得吗，或者不需要接口得到

Andrew: 从 V3 开始引入subwallet_id，V4 和 V5 都可以通过 get method 获取   int get_subwallet_id() method_id (reply to 78111)

eronho: 好的，谢谢 (reply to 78113)

pony: swap 会一直执行么？如果余额不够，发一条message会重试？ https://tonviewer.com/UQA8HBFcWIe5PuZEXCIqBLpypOYFIYhECIe6f-xABHWA29_R 直到消耗完 gas

yan: 假的吧

yan: 钓鱼的吗

Alex: TON Studio is a team of experienced engineers working with the fast growing TON Ecosystem.  We are seeking an experienced and motivated Tech Support to join our team and contribute to the growing TON Ecosystem.   Your primary responsibility will be to provide technical support to partners and users, as well as to ensure smooth interactions with first-level projects.  👉Read More

Jarvins: @andrew_cong 我参考tonapi的getAccountEvents，发现event可能是中间状态的event，比如TonTransfer的，我如果同时进行了两笔交易，我根本没办法区分哪笔是哪笔的，我发现想通过event配上交易的txHash这种功能，在ton上好困难，没太理解这种设计，难道发起一笔交易，拿到这笔交易的查询回执不是一个再正常不过的诉求么，为什么ton拿到交易回执这么麻烦。

Andrew: 确实开发体验上需要持续改进，但是是可以计算的。 我明天整理一些 demo code 分享一下 (reply to 78144)

Jarvins: 感觉ton生态链想火热，对比其他主流链，应用层还得打磨打磨，我作为开发者体感上，确实感觉很多问题😌 (reply to 78146)

Zephyr: ton 钱包显示inactive 怎么激活呢

11: 打钱

Zephyr: 打了啊

— 2025-01-22 —

Ton: 因为是异步的啊，你发起的时候不知道hash是啥 (reply to 78144)

Jarvins: 从设计上来说，从上链到验证需要时间，但是有些东西上链了就是确定的了，为什么上链的时候不把txHash返给我呢？人家也说了可以算。或者你想想其他链，eth，bsc，sonala，核心框架有本质区别嘛？站在异步架构设计上，异步返回可操作的句柄，回调函数，或者唯一key用于客户端自己构建其他操作，都已经成标准范式了，这和这个场景没啥关系的。

Leo: eth和bsc没本质区别，但eth/bsc和solana有本质区别啊，而这三者都是同步的，和异步的ton又有本质区别

Leo: 简单说ton为了追求极致tps做了很多取舍，很突出的一点就是基于cell的存储，这种设计下tx hash和上链运行结果有关，所以不可能发起tx时返回hash

Leo: 但你说的句柄确实是有的，只不过是msghash而不是txhash，不然就没法查状态了

market ur event for free[DM me]: 想咨询下官方，以下消息是意味着tg mini app之后只能接ton wallet作为钱包了是吧？ 其他跨链的支付、非ton 链的钱包和支付都不支持了？  https://blog.ton.org/ton-telegram-exclusive-partnership-2025

Andrew: 以下面 Telegram 官方的文档为准哦  https://core.telegram.org/bots/blockchain-guidelines https://telegram.org/tos/bot-developers#7-blockchain-integration (reply to 78214)

Velder: 请问Tonkeeper桌面版现在怎么把账号设置成Testnet啊 我记得之前老版本的时候很好设置，现在怎么找找不到

Yang: 直接输入测试网的 key words (reply to 78221)

Yang: 好像是这样的。 (reply to 78224)

Velder: 噢噢 现有的账号没办法切换了嘛 因为我这些账号都是以前创建的测试网账号 软件更新了几个版本之后全变成主网了

Velder: 而且之前的助记词都没保存😂😂

Velder: 谢啦，原来现在要使用测试网钱包需要重新导入在输入一遍助记词 (reply to 78224)

Tom: 想问下ton支付支持用户批量提现嘛

Tom: 有相关管理人员在嘛？为什么我提问了此问题被踢出群组？这样对待ton的支持者的吗？ (reply to 78240)

Andrew: 你是说哪个群？ (reply to 78242)

Andrew: 批量提现是指什么？ (reply to 78240)

pony: 如何判断 mintless jetton 是已经领取过的呢？ 比如空头给 A 100 个， A 没有 cliam，但是转账 1 个 给 B，其余99个是不是还在链下？

pony: 我根据 mintless-jetton example 代码，发送并提出一个 mintless jetton，但是出错了。 https://testnet.tonscan.org/tx/8d997bebea2f9968531e70f69f639124f1ac522109c5a543199f7f3be283e078 能知道因为什么吗

Andrew: A 没有 cliam 的话， A 如何转账 1 个给 B ？ (reply to 78246)

pony: - 如果还未认领，则从自定义负载 API 获取数据，并将链下余额添加到链上余额中。 - 在向外转账时，如果用户尚未领取空投，则从自定义有效载荷 API 获取自定义有效载荷和初始状态，并将其包含在发送至 jetton 钱包的 transfer 信息中。

pony: 那这个机制是， 空头给 A 100 个， A 必须先 cliam 100（不能是其他数量） 个，再进行转账？

pony: 但是从 generateTestJetton.ts 中没有看到这些逻辑

pony: Compute phase Success false Exit code 74 VM steps 218 Gas used 2924000  我怎么根据这些 exitCode 排查错误呢？ @andrew_cong

Andrew: 先在下面这个文档查询标准错误码，如果查询不到，就去异常产生的开源合约里面查询  https://docs.ton.org/v3/documentation/tvm/tvm-exit-codes (reply to 78253)

jack: hello， 官方你好，https://core.telegram.org/bots/blockchain-guidelines  基于这个条款，不太明白。像okx和bitget wallet，这类的钱包是否符合规范？还是说也是违规的呢？

jack: @andrew_cong

Nick: 同问，我们是一个网赚平台，每天要给用户处理批量 Ton 转账，像 EVM 都是有批量转账合约可以调用的，可以省不少 Gas 费用 (reply to 78240)

Andrew: 本群主要讨论技术，这个以 Telegram 官方指南描述为准。  我个人的理解是，小程序不允许直接链接 okx和bitget wallet。 但是 okx和bitget wallet 如果实现了 TON Connect，作为 TON Connect 中的一个可选钱包，小程序集成 TON Connect，用户是可以选择到第三方钱包的。 (reply to 78261)

Andrew: TON 的钱包合约 V5 支持一次性给 255 个地址批量转账。  https://github.com/ton-blockchain/wallet-contract-v5 (reply to 78264)

jack: 谢谢，就是说如果本身的多链钱包，在自己的mini app内的多链操作都是没问题的是吗？ 只是其他mini app不能通过非TON Connect来链接OKX或者bitget Wallet (reply to 78265)

wikig: 我的理解是，这个挺难约束的吧。 先不提做托管钱包的（用户私钥导入或服务端私钥生成） 就算是okx web3 或bitget钱包的方案，走的也是url带参吊起，然后签名走网桥或带参回传的形式，本质跟其他webapp没有太大区别。  只能说应该是表个态表示不再支持就tg生态做其他链的gamefi或其他类型TMA， 真正想约束我认为不是很现实。 (reply to 78267)

Andrew: 以官方文档为准  https://core.telegram.org/bots/blockchain-guidelines#wallet-guidelines (reply to 78267)

jack: 是。但是如果不从技术上约束，而且从主观上限制。所以还是想搞清楚到底现有的这些多链钱包是否符合规定。 (reply to 78268)

wikig: 个人认为哈，应该是跟telegram star的约束类似。  原则上讲，在IOS侧使用TMA都应当走telegram star来完成虚拟物品交易。  但是实际上，并不是一个容易约束的事，所以一些头部TMA会带头去修改自己TMA内的支付体系，以使其合规化。 但是也不太容易筛查并主动管辖。 (reply to 78271)

jack: 对外像物品支付这种，我觉得必须走Ton也无可厚非。 就是说多链钱包内部，其他链的转账或者Swap兑换、NFT的购买。是否合规 (reply to 78272)

wikig: 从新规角度来说，我认为是不允许的。 但是我个人认为不会主动管辖。 因为现有的Telegram 交易BOT等生态，都严重依赖这类模式。  所以我认为更多是表达一下对TMA的链支持立场。  翻译：“快来做TON的TMA，有相比其他链有更多支持” 的意思 (reply to 78275)

Jacky: 弱弱问一下 TMA 是什么意思？ (reply to 78276)

jack: 没错，bot这种可以搞很多账号，要管应该也不好管。但是想OKX和Bitget Wallet 这种主流的钱包，可能是不合规的，要管的话可能会好管一些，从新规定的角度来看的话。 (reply to 78276)

wikig: Telegram mini app (reply to 78277)

wikig: 但我个人认为，直接撕脸概率不太大（ (reply to 78278)

wikig: 毕竟这类生态，从去年中旬开始陆续出来，从UXUY，我们做的TONSPACK，再到后面OKX web3 和bitget入场，其实用户也不算少了。  毕竟算是App的平替，也支持Deeplink，还是蛮友好的 (reply to 78278)

Jacky: 是的 这是一刀砍向 uxuy 和 okx wallet 啊 lol (reply to 78282)

wikig: 嘛，可以这么说，但也不是很伤就是了。 毕竟这半年验证下来TMA 的非TON web3 wallet，其实.....用量不算很大。   倒是对我们正在写的东西不是很友好哈哈哈（虽然因为太忙没怎么写就是了） 我们刚好最近在折腾TMA上的非TON钱包统一连接器（类wallet adapter 或 TONconnect） 来补全当前这块生态的拼图 (reply to 78284)

Alex: telegram mini app 如何开启调试窗口看日志？

wikig: browser版本然后 f12不就好了 (reply to 78289)

Alex: 网站跟mini app 环境有点不一样。 (reply to 78290)

wikig: 我的意思是，在浏览器的telegram里打开webapp (reply to 78295)

快讯简报官方: mini app不受苹果监管的？

wikig: 照理说，受的。  但是实际上监管不监管的过来，不好说 (reply to 78300)

Jacky: 咨询一下，我们有没有接口可以查询用户的 star 余额？我们想查询用户的 star 余额，然后展示到mini app 的界面上，不知道可行不。 (reply to 78269)

Jarvins: 啥情况，我看不少交易已经pending了10分钟了快

Karen: The problem is the same.  I am using official tonweb@0.0.66, but the new TonWeb.token.jetton.JettonMinter wants not only single address but adminAddress, contentURI and etc too  How can I solve? (reply to 77840)

— 2025-01-23 —

( ･_･)»(ﾟｰﾟ)»ݦځݦد «(ﾟｰﾟ)«( ･_･): Use %1$s on Telegram: %2$s

Jase: 请教下这个是什么？非Ton连接器  - Not Permitted: Using other wallet connection protocols outside of bridging scenarios. Modifying or forking the TON Connect SDK.  官方这个说明是不是会影响啊？ (reply to 78285)

Roger: 我们刚接上OKX Wallet，现在又要拿下来，这个新的公告确实对开发者不友好，而且对生态本身而言并不开放，变得更加封闭了 (reply to 78285)

Roger: Ton Connect 本身也有挺多问题的，钱包拉起支付经常会断开，还有 ton connect 自身也集成了其他家的钱包

Howard: 可以用 TON 链基础、去跨链的沟通协议 (reply to 78377)

Roger: ？？？ (reply to 78385)

wikig: 从公告角度，我认为可能是会做一定限制的。 因为现在官方并不鼓励这种行为。  所以我们本来是打算做个打包继承 uxuy/okx-web3/bitget之类的钱包连接器UI的。 还好只打了地基hhh (reply to 78375)

wikig: 性质还是有点差别的 Tonconnect 是集成了多家钱包，但是都是TON钱包。 所以本质是为TON生态构建的配套。 (reply to 78378)

wikig: 这个倒是有意思。  但是我个人认为这里可能有很多是需要fundation亲自下场做的一些事情（哪怕有些事是要做部分中心化托管）  比如可以考虑构建一个并非去中心化的TON和其他chain的资产映射、行为操作映射桥。（如SOL，但是在TON上做资产映射为TSOL） 就可以同时保TON链活动（txs）的同时最低限度的保持用户在telegram中对其他链的行为操作。（如把另一条链的代理操作以transaction的形式打包为base64再塞到BOC中以TON上的消息交易形式丢到这个资产映射桥的合约。随后桥再根据中心化的本地派生将这个操作行为广播到对应链上）  但是这类服务相应的风险也是蛮大，包括但不限于资产托管、监听器攻击实现资产盗取之类的。同时对用户来说也多了一笔TON交易手续费（和BOC带参的信息费） (reply to 78385)

Roger: 对，主要其他交易所的钱包是多链的

Jacky: 请问一下，我们想跟 ton space 的钱包做交互，请问哪里有教程可以参考的吗？

Roger: 直接对接Ton connect 就可以

6666feile: 这个是不是官方的？  https://github.com/neodix42/ton4j Tonlib，要每次广播事务时，都重新构造？

Andrew: 这个是由开源社区开发者提供。   推荐使用 TypeScript 的 SDK (reply to 78420)

— 2025-01-24 —

Jarvins: @andrew_cong 我咨询一下，highload钱包有独立操作的js sdk么，我看@ton/core似乎只有v5r1版本的

Andrew: SDK 就是 wrapped 了一下，如果没有你可以自己根据需求包装一下 (reply to 78490)

Jarvins: 所以逻辑上我是通过那个源码本地生成一个钱包，然后自己根据那个wrapped的逻辑自己做一层钱包得操作抽象是吧

Andrew: 是的 (reply to 78492)

Max: ton connect能和以太交互么？

Max: 现在的新公告意思是只能用ton链 还是允许其他evm链 但是要用ton connect？

증식엄: 不允许evm了

증식엄: 要把evm资产包装到ton链，在ton链活跃操作

wikig: tonconnect 不是本来就没法跟evm交互吗 (reply to 78499)

token: 如何开发一个ton钱包呢

wikig: 把tonxapi和ton/core 或 tonweb包一层就搞定了 (reply to 78511)

token: 我去研究下 (reply to 78514)

Lucy: 有没有全栈开发大佬

Lucy: 我这边是一个部署在ton主网上面的Ai角色游戏平台

Lucy: 寻找更多全栈大佬加入我们

Lucy: 有兴趣的大佬欢迎联系我

— 2025-01-27 —

Jerry: @Jay4204 全栈要有多全？

— 2025-01-28 —

X_coder: 请问现在TON区块链转账USDT，一笔转账需要多少手续费啊。

X_coder: 我正在设计一个电报机器人，准备用TON上的USDT支付。需要评估一下手续费成本。

克劳德斯基: 粗略算，几美分吧 (reply to 78849)

X_coder: 谢谢，我刚打开tonkeeper钱包检查了。设定了USDT转账，看到显示预估0.07美元。  另外，我的程序有一个环节是，自动化用USDT回购ton区块链上的某个代币。这个购买代币的手续费，和简单转账手续费高一些吗，还是一致的呢。  是否有相应的程序接口可以取到这些预估的值？方便和tonkeeper一样，显示给我的客户。我使用的主要语言是python，是否有相应的sdk或示范代码呢？

wikig: 按理说，应该是可以estimate出一个预估消耗TON的值的。 然后你再根据TON币价乘下好了 (reply to 78855)

顺顺: 如何在telegram小程序中链接钱包并获取钱包的地址好友地址以及余额

TON: 0.15U (reply to 78849)

Howard: 有沒有一種 BOT 能每週統計問題跟內容輿情呀？知道大家每週都在問啥開發問題

wikig: 感兴趣的话倒是可以做dev群的关键词提取类BOT（聊天总结，反正刚好deepseek的token便宜）  当然，前提是这个群可以拉bot（我记得会被BAN） (reply to 78892)

— 2025-01-29 —

Lucy: 我们正在做以deepseek为框架的Ai代理平台，包括投资，游戏，各种方面

Lucy: 有没有感兴趣的全栈大佬

Howard: 這個賽道很多、但是沒有區別性? 且很難獲取用戶（不像遊戲一樣好玩） (reply to 78969)

Howard: 開搞 @carzygod

wikig: 其实，我个人认为不是很难。  1.bot记录群聊record  2.然后每24h 或者8h 丢给deepseek生成一边summary  3.接着再写个可视化页面或者写个bot定期分析播报就可以了 (reply to 78984)

Ton: 我看ton上有很多套利机器人啊，有一个机器人很专业，能够一笔交易內买卖，这怎么做到的

— 2025-01-30 —

wikig: 我印象里好像没有办法做原子性交互吧 (reply to 78998)

Traffic Builder: ton钱包实现充值一定需要gas费吗？

wikig: 主力在哪个方向，如果是量化或者auto-trader的话，还是感兴趣的（因为折腾过hhh (reply to 78969)

Lucy: 各种方面都有 (reply to 79087)

Lucy: 现在我们已经做出了一个基于deepseek模型的Ai角色对话游戏

wikig: 哪套方案？如果只是现有主流的ai-agent方案在promote上绣花的话，从原有（无论是llama还是gpt）切到deepseek只是换个api-key和api地址的问题吧（ (reply to 79089)

Lucy: 是的

Lucy: 目前是主流方案

Lucy: api以及训练

wikig: 嘛，倒也是有效的，只是说如果只做promtoe绣花，难度和门槛都比较低

Lucy: 当然本地部署更好

wikig: 如果是预训练的话，比较烧钱

wikig: 本地部署，烧卡

Lucy: r1模型要求不高

wikig: 隔壁群，群友亲测，4090，7B deepseek，每秒输出不到2token

Lucy: 之前用的v3

Lucy: 现在升级r1

Lucy: 😂

wikig: 没有很强隐私性需求的，我觉得用官方服务性价比还是蛮高的哈哈哈哈

Lucy: 都是公开的

wikig: 都是公开的用官方性价比蛮高的

Lucy: 我们的源码都已经上传GitHub开源

wikig: 哦哦，蛮好的

Lucy: 只是现在可能需要更多的开发者

Lucy: 😂

wikig: 晚点过两天过完年我也写个deepseek base的群聊内容清晰和收录

wikig: https://github.com/Tonspay/LLM-Base-Telegram-Group-Analytics-Bot  先挖个坑

wikig: 过完年动土

wikig: 方便 repo或org 发一下？ (reply to 79106)

Lucy: 我是商务

Lucy: 明天我问问技术😂

wikig: 好~那你们的project名是？

Lucy: 有兴趣加入我们嘛 (reply to 79113)

Lucy: 我也是创始人

wikig: 我可以凑凑热闹hhh，可能指望不上什么dev议程，但是可以提提issues或pr

Lucy: 我们平台名字叫Elysium

Lucy: 应该年后会陆续上线官网和应用

Lucy: 没事的，只要有兴趣就好 (reply to 79119)

Lucy: 我们现在团队几个人都是有着共同的兴趣

wikig: 这只？ https://github.com/elysiumai  https://github.com/Tolga1452

Lucy: 不是😂

— 2025-01-31 —

Howard: 咱也想一下營利方式, 再不行就申請 grants (reply to 79111)

TON: 群眾適應，簡單，易用就好

wikig: 群聊bot就当个开源项目开心做好了hhh，也没有什么必要盈利吧hhh就当社区福利好了 (reply to 79196)

Howard: 不行，我去申請 toncoin 給回答者吧 (reply to 79212)

Howard: Q&A 挖礦

Lucy: avax那边对于AI项目的资助申请已经给到1亿美金了

Lucy: 我们的项目越来越有搞头了😚

— 2025-02-01 —

Traffic Builder: 有使用Ton进行实现各种虚拟货币的充值提现的好文推荐吗？

Traffic Builder: a关于具体实践的

— 2025-02-03 —

Traffic Builder: a找来找去发现ton上其实没有什么知名的代币啊，那新的开发规范以后，如何用ton来交易一些比较知名的代币呢？

Traffic Builder: a这些成熟代币会以jetton的形式在Ton网络中交易吗？

Howard: 啥 (reply to 79323)

— 2025-02-04 —

wikig: 比如 (reply to 79452)

Ton: 大佬们有个问题，我看dedust 可以设置接受人的地址和payload，那现在能不能我在dedust swap成功之后，将token发送到stonfi的相应的池子附上相应的payload，那是不是一笔交易里面做了套利？

Howard: 📢 2025.02 TON Repo 更新    🚀 核心改進 & 修復   🔹 適用於Config8.version >= 9，詳見 [GlobalVersions.md] 🔹 優化驗證節點（validators）IP 發現機制，透過重試 DHT 查詢提升準確性   🔹 增強額外貨幣支持：修復 `c7`（`rungetmethod`）、優化保留模式   🔹 TVM 修復：深層跳轉（deep jump）時的續處理控制數據   🔹 TL-B Scheme 修復：     🔸 CRC 計算錯誤修正     🔸 Merkle 證明標籤修復     🔸 advance_ext & NatWidth 優化   🔹 模擬器改進：修復庫加載、增強額外貨幣支持   🔹 提高 Gas 限制，解鎖 2024 年初被鎖的 highload-v2 錢包   🔹 驗證節點控制台優化：分片顯示格式、支持虛線名稱    ⚡️ 完整細節：[查看 Changelog]

Howard: 但你不保證你打到 STON.fi 時價格有沒有變化 (reply to 79508)

Ton: 那就是理论上可以实施的 (reply to 79511)

— 2025-02-05 —

Ton: 大佬们，func里的now()，addr_none()改到ts里应该是啥

Andrew: now() 就是一个Unix 时间戳，各个语言通用的格式。  addr_none (two zero bits 00). (reply to 79524)

Andrew: 你使用 addr_none 的场景是什么？ (reply to 79524)

Ton: 改写代码..

Andrew: OK，正常的业务你应该发到一个有效的地址，不太会用 addr_none

Ton: .storeBits(0x00) // referral_addr:MsgAddress addr_none()

Ton: 这个storeBits咋用...

Joe: ton 怎么跌成狗了

yan: 都没怎么涨，就跌成这样 了

yan: 电报其实应该开发一个发红包的功能

yan: 我想在群里发个红包都发不了

Jacky: Okx wallet 可以 (reply to 79542)

yan: 还有就是有些telegram账户老是被封，这谁还敢用啊。

yan: 手握10亿用户，应当首先培养用户使用习惯，而不是动不动就封号

pony: 如何检查交易的错误原因呢？ https://testnet.tonscan.org/tx/a0ae67a2103d9d4f0ff3d1d651be04dcc02c24bd6b08057b57f14e4efb988145#details

Andrew: 给一个未初始化的合约转账，但是设置了 Bounce = true（主网EQ，测试网kQ 开头）  https://testnet.tonviewer.com/transaction/888a4d24af8bdacffb49fd71af923e87b54d49263f260804e2d8555b45e87d01 (reply to 79552)

Howard: 可以用 @sign (reply to 79541)

pony: 那是不是换成 nonbounce 的地址就可以？ 还是得主动加参数 (reply to 79556)

Andrew: 你是通过什么方式发这个交易的？ (reply to 79559)

pony: 我在研究这个 mintless jetton。

pony: 跑的 mintless-jetton 的 generateTestJetton 的测试代码

pony: 但是一直不成功

pony: 合约可以部署，但是无法转账 mintless-jetton

Andrew: 那代码中发送时指定一下 bounce 等于 false 看看

pony: 好

Traffic Builder: a如果我的TMA使用TON进行充值提现，Telegram会封禁我的TMA吗

— 2025-02-06 —

Traffic Builder: ```javascript import fs from 'fs'; import path from 'path'; import { Address, contractAddress } from "@ton/core"; import { DailyCheckIn } from "../build/DailyCheckIn/tact_DailyCheckIn.ts"; import { prepareTactDeployment } from "@tact-lang/deployer";  // Parameters let testnet = true;                                 // Flag for testnet or mainnet let owner = Address.parse('UQBpWhIopkwTSwbSBQqIfGpgEMEkaOwdw-xtT1YWHosyQLJL');    // Our sample contract has an owner let init = await DailyCheckIn.init(owner);    // Create initial data for our contract  // Calculations let address = contractAddress(0, init);     // Calculate contract address. MUST match with the address in the verifier let data = init.data.toBoc();               // Create init data let pkg = fs.readFileSync(                  // Read package file     path.resolve("./build/DailyCheckIn/tact_DailyCheckIn.pkg") );  // Prepare deploy let link = await prepareTactDeployment({ pkg, data, testnet });  // Present a deployment link and contract address console.log('Address: ' + address.toString({ testOnly: testnet })); console.log('Deploy link: ' + link); ```  got error:  node:internal/process/esm_loader:40       internalBinding('errors').triggerUncaughtException(                                 ^ AxiosError: connect ECONNREFUSED 0.0.0.0:443  at the code "let link = await prepareTactDeployment({ pkg, data, testnet });"

Traffic Builder: 1有大佬知道这是为啥吗？

Traffic Builder: 1我npx tsx scripts/deploy.js运行这段代码，他在访问这个地址，是什么原因？

Andrew: 这个 ECONNREFUSED 看是网络问题 (reply to 79661)

Andrew: 本地有代理吗

ZombHunt: 有没有大佬知道说怎么才能够上Telegram App Center的推荐位的？

ZombHunt: 是需要跟官方的人联系上了才有机会还是说只要我的app数据好就会自动在首页推荐位显示呢？

Andrew: 这个最佳实践文档应该可以帮到你  https://www.notion.so/Telegram-App-Standards-and-Best-Practices-Guide-for-TON-teams-6ba3e413137e41c5b0be901d5e8c6790?pvs=4 (reply to 79670)

ZombHunt: 感谢老哥，但链接打不开 (reply to 79671)

Andrew: http://tondevdoc.xyz/

ZombHunt: 谢谢大佬，我研究看看 (reply to 79673)

Traffic Builder: 1哦哦，是的，在代理环境下跑就好了 (reply to 79666)

Traffic Builder: 1我试着部署合约到testnet上，显示了这个错误，并且我链接好了钱包后这个网站不会有变化

Traffic Builder: 1这是我的链接，https://verifier.ton.org/tactDeployer/QmQeLpm4MZex5KKozGRkaw4vKNdKYVwXUvn3axG8ZxWSqN?testnet

Andrew: Connect wallet to send a transaction. (reply to 79687)

Traffic Builder: Are there any specific requirements for my wallet? I’ve already switched my TON Wallet to Testnet, but I can’t connect my wallet on this webpage. My wallet shows it’s connected, but the webpage doesn’t show any changes. (reply to 79691)

Andrew: 按 F12 看看网页端是否有异常

Traffic Builder: 1是的，报错告诉去链接钱包。我已经切换ton wallet到testnet，但是我无法在这个网页中链接我的钱包。我钱包显示已经链接了，但是网页却没有变化。

Andrew: 我用的 Tonkeeper Chrome插件，是可以的 (reply to 79694)

Traffic Builder: 1尝试的是我的链接吗？

Traffic Builder: 1我的链接虽然能显示网页，但是直接Get，得到的是404

Traffic Builder: 1这正常吗？

Joe: 有人买ton嘛

yan: 群里的都买了

Traffic Builder: 1跌死了，如果有办法可以服务端支付gas的话，就买一些以后当gas

yan: 手握这么好的牌都搞不好，垃圾团队。TON

Eric: Star 可以兑换成Ton，如果TG star的营收没有回购Ton的话，团队相当于一直在卖TON

yan: 在哪换

Traffic Builder: 我在build tact代码的时候为方法生成了这样的代码，我应该按照这个方式去调用这个合约吗？

Traffic Builder: 1我常识编写了调用合约的代码，const cell = beginCell().store((builder) => {     let b_0 = builder;    b_0.storeUint(1628779796, 32);     b_0.storeStringRefTail("test comment");}).endCell(); await tonConnectUI.sendTransaction({    messages: [         {            validUntil: Math.floor(Date.now() / 1000) + 360,             network: CHAIN.TESTNET,            address: Address.parse("0QA2JQ-j9xCHzaOH76xW5x1mfAy19ZaCPlhpo6MAgAUlR6H5").toRawString(),             amount: toNano("0.08").toString(),            payload: cell.toBoc().toString("base64")         }    ] })，我成功发送了交易

Traffic Builder: 1但是合约似乎没有正常运行，我在testnet.tonscan.org上看到了如下报错

Andrew: Tact 只有接受 Message 的方法才能被 外部消息 触发调用，更多语言细节可以在 @tactlang 群里咨询 (reply to 79720)

Traffic Builder: 1谢谢，我尝试在这个群里提问，但是没有什么响应。可以细说一下如何去调用合约中的方法吗？这是我的合约代码，import "@stdlib/deploy"; import "@stdlib/ownable";  message SignAction1 {     comment: String; }  message OwnerWithdraw {     amount: Int; }  message OwnerWithdrawJetton {     value: Int as coins;     gas: Int as coins;     jetton_wallet_contract_address: Address; }  contract DailyCheckIn with Deployable, OwnableTransferable {     total_count: Int;     owner: Address;      init(owner: Address) {         self.total_count = 0;         self.owner = sender();     }      receive(msg: SignAction1) {         let ctx: Context = context();         self.total_count += 1;         self.reply("".asComment());     }      receive(msg: OwnerWithdraw) {         self.requireOwner();         send(SendParameters{         to: self.owner,         value: msg.amount,         bounce: false         });     }      receive(msg: String){         require(context().value >= ton("0.002"), "not enough fee");     }      get fun totalCount(): Int {         return self.total_count;     }      get fun balance(): Int {         return myBalance();     } } 我使用blueprint build，然后使用 Tact-lang/developer进行了部署 (reply to 79723)

Traffic Builder: 1我阅读了一下build的生成内容，他在生成二进制合约的同时还生成了ts代码。上面的cell构造是ts代码测试合约的时候用到的，我尝试在实际调用时也使用一样的cell构造方法，但是遭到了失败。

Andrew: blueprint 可以自动生成一个 Counter 合约代码，你参考一下就懂了 (reply to 79724)

c: 有人知道 java 怎么接 币安的 web 钱包的API 进行转账嘛

杰: Telegram Star 支付有回调吗

杰: @andrew_cong Telegram Star 支付有回调吗

Traffic Builder: 1在update里面有 (reply to 79731)

Traffic Builder: 1我常识检查了一下我的合约代码，看上去似乎ok，有什么办法可以查看失败原因吗？ (reply to 79726)

Andrew: 有的  https://flawless-singer-f4d.notion.site/Telegram-Star-1780cb484ba88070aa25dabb32015464 (reply to 79731)

Andrew: 多看一些开源代码学一下比如这个  https://github.com/howardpen9/jetton-implementation-in-tact (reply to 79735)

c: 有大佬知道 币安的web3钱包有没有 API嘛

Andrew: 你问错群了 (reply to 79743)

wikig: 我记得binance web3 wallet是直接劫持 window.web3的（所以会直接跟metamask抢，纯流氓，不知道后面改了没）  但是有官方docs的（你问错群了哈哈哈哈 (reply to 79743)

— 2025-02-07 —

杰: 请问,启动有时候报错

杰: 是什么原因

Andrew: bot 有两个工作模式，push（Webhooks） 和 pull （Long Polling）， 确认下你本地开发是用哪个模式，一般本地用 pull （Long Polling）。   你这个异常是清理之前的 push 配置，自己看源码确认下 (reply to 79771)

杰: 我是继承的TelegramLongPollingBot

Andrew: 具体你要自己分析，Java 的框架基本不用 (reply to 79777)

c: ok 多谢 (reply to 79750)

Emil: Any python dev here

— 2025-02-08 —

clark: 大家出现过 https://toncenter.com/api/   connection time out 的问题吗，从昨天开始，我们这边频繁出现

Mike: 大佬这个成功或者失败的状态怎么判断呢 (reply to 78213)

Andrew: 大家好！为了进一步优化 TG Mini App 的开发体验，正在面向华人小程序开发者进行一次调研。希望各位能抽出宝贵的时间填写并转发给，您的反馈对我们非常重要。  《小程序开发者调研问卷》https://www.wjx.cn/vm/w26Fcul.aspx#   感谢您的支持和参与，完成答卷领取[红包]！

杰: 这是什么原因?

杰: @andrew_cong

杰: /

Andrew: 你是在开发阶段对吧？ 文档中的所有回调接口都实现了吗？ (reply to 79866)

Andrew: 你这个是 precheckout 回调没有实现

杰: precheckout 回调接受到了之后,需要返回什么

Andrew: 这里文档 (reply to 79737)

杰: 感谢回答

杰: 我想问问,我创建一个测试机器人,并支付了star

杰: 然后在哪里去提前这个 star

杰: 提取

Andrew: 这类常见问题文档中有的

Andrew: 大家好！为了进一步优化 TG Mini App 的开发体验，正在面向华人小程序开发者进行一次调研。希望各位能抽出宝贵的时间填写并转发给，您的反馈对我们非常重要。  《小程序开发者调研问卷》https://www.wjx.cn/vm/w26Fcul.aspx#   感谢您的支持和参与，完成答卷领取[红包]！

Leo: 可以用get tx by address或tcv3的get tx by msg去查对应的tx状态 (reply to 79857)

Mike: tcV3这个我倒是看到，我也这么处理。但是之前转出jetton，看到有个Jetton Notify是失败的，tonviewer上看到状态是“Confirmed transaction”。转也转出去了，对方的账号也接收到了，这就算是成功了么？ (reply to 79878)

Mike: 比如：https://tonviewer.com/transaction/87b9a2daffd4fb1fea59d0049392f22be722e7d46a22c592ac1f24b75d3b6e5f

Mike: 然后我操作了swap，合约啥的先不管，但是在tonviewer上看到的流程很长，而且都有这个jetton notify的操作，不知道中间某一步出错的话，会不会导致后边的失败了。比如：https://tonviewer.com/transaction/444a99cdb505377dfed7a1b3ac8a83e14dfaf88c91411c43f988aa063e8832aa 所以不知道这个要怎么判断了，难不成还分ton转账/jetton转账/swap转账不同的类型来区分么

Mike: 另外就是在这个tonviewer上看到上边的步骤对应了下边好几步，暂时没看出来是怎么关联上的

Howard: 底下每一個泡泡之間都是 message 挑轉傳遞; 多個 message 才可以稱為一個完整的「事件」  比如說轉帳這件事情在以太上是一個動作，但我們這邊會有幾個 messages 之間跳轉。 (reply to 79884)

Mike: 了解 (reply to 79885)

Mike: 那这个因为不影响到后边的流程，所以整个流程的状态是成功的？

Mike: 然后这个，因为后边的流程是依赖这里，所以如果它失败了，整个操作的状态就是失败的？

ZK: 为什么curl请求后出现这个错误{“error":"no rows in result set","code":0}

ZK: curl -X POST https://tonconsole.com/api/v1/services/invoices/invoice \   -H 'Content-Type: application/json' \   -H 'Authorization: Bearer <YOUR_API_TOKEN>' \   -d '{"amount": "1000000", "life_time": 1800, "currency": "USDT", "description": "Example description"}'

ZK: TOKEN换成了我自己的token

Mike: 谢谢 (reply to 79885)

ZK: 激活project找谁？

ZK: @tonrostislav分享给他后，似乎没有人响应

ZK: 怎样激活一个project

ZK: 是否有人知道怎么联系并验证project

Leo: 转账成功后才发notify，所以失败不影响钱已经转出去了 ton的一个用户操作，包括swap，jetton transfer等等都包含多笔tx，要根据具体流程去找关键tx，从关键tx的状态去判断操作成功与否 比如对于jetton transfer的tx链是 sender -> sender wallet -> recipient wallet -> recipient，关键tx就是第三笔 (reply to 79881)

Howard: 這個 message: op_notify 是通知到帳的用處。沒有足夠 gas 也沒關係. (reply to 79887)

ZK: 这个自动生成的token在哪里查看？

ZK: @tsivarev

ZK: @holds

ZK: I need help

Thea: What type of help (reply to 79908)

Andrew: TON Console  是由第三方公司提供的服务，具体参考 https://tonapi.io/ 文档和相关技术支持 (reply to 79903)

pony: mintless jetton 是什么样的机制呢？ 我如何检查用户是否 claim 了呢？ -- 现在做到获取余额这里。 @andrew_cong

Andrew: 你根据这个代码学的吗 https://github.com/ton-community/mintless-jetton (reply to 79915)

pony: 是的啊。

pony: 我调整代码之后，可以发行 mintless jetton。但是我要用自己的钱包集成进去。我的算法和它24个词的算法不一致。

pony: 然后我生成空投的时候，给我自己地址空投了。但是无法转出来。 所以我先做地址查询，但是又有疑惑，如果判断地址已经领取了？我查余额先去 api 查还是链上？

pony: 都没有详细文档

Andrew: 目前只有极少数项目用到这个规模的空投方案，你是自学还是项目需要？ 如果是项目需要可以找之前给 $DOGS 做空投服务商复用方案 (reply to 79920)

pony: 我是交易所钱包开发者，钱包需要支持 mintless jetton

Andrew: 那你们可以找TokenTable 的人交流下  https://m.marsbit.co/flashshare/20240826161609683648.html (reply to 79925)

pony: 好的。多谢

— 2025-02-09 —

Howard: mintless Jetton: https://github.com/ton-community/mintless-jetton  而且我記得 TonKeeper 前陣子做進去了 (reply to 79925)

Howard: mintless Jetton by TonKeeper: https://github.com/tonkeeper/mintless-toolbox (reply to 79965)

Howard: cc @carzygod 哥來做 CS Dev AI 吧; 這些資料應該語言模型很容易學習記起來

s: 朋友们都在做哪方面创业呢？有需要web3的开发者吗？

Ton: 有个问题，tg支不支持银行卡收款啊

Ton: 这个payments啥意思

Andrew: 给 bot 接的传统的法币渠道 (reply to 79972)

Ton: 这个手续费在哪里看啊 (reply to 79973)

Andrew: 里面都是不同的渠道服务商，你自己调研 (reply to 79974)

Asahi: 支持，但感觉都不太好使 (reply to 79970)

Ton: 为啥 (reply to 79979)

Ton: 那接支付都咋弄，直接跟银行对接吗

Andrew: 因为 TG 没有做类似 微信支付 这样的传统金融支付工具，而是直接做了数字化的 Star 和 TON 支付 (reply to 79982)

Andrew: 所以传统支付对接会隔了一层，只能是按照业务不同各自按需设计了

Randolph: 大佬们，tolk 文件怎么设置ide友好提示呢

Randolph: 新出的tolk语法终于符合常用习惯了，怎么设置才能让ide有友好的函数自动补全呢？

Andrew: 目前 VS Code 和 IDEA 有插件 (reply to 79988)

wikig: 在做了在做了hhh，目前暂定是 GOLANG写一版，然后rust重构 (reply to 79967)

User<7549723373>: Rust了哈哈 (reply to 79999)

— 2025-02-10 —

pony: https://github.com/tonkeeper/wallet  在他们钱包里面没看到相关代码。 这个应该只是一个工具 (reply to 79965)

Mike: 我也是这么理解，但还是想找大佬们确认 (reply to 79899)

Mike: 可以说一下 jetton的swap么 (reply to 79899)

Mike: 比如它的notify的作用

Leo: swap 流程因项目而异，没有统一的标准，比如以stonfi为例swap的tx链是 (jetton A transfer) -> router -> pool -> router -> (jetton B transfer) swap一般自身合约没有notify，主要是借助jetton transfer的notify，例如上面A的notify可以通知router做swap操作，B的notify通知用户地址，多数情况下可以忽略 (reply to 80023)

Mike: 所以在这个流程下，后边的操作应该就断了 (reply to 80025)

Mike: 了解了，谢谢

Andrew: 新年好，欢迎有需要孵化相关支持的项目方报名TON Nest（TON官方孵化营计划）。请填表后按链接指示入TON Nest项目群，并自我介绍。  https://eco.ton.org/en/opportunities/ton-nest  TON Nest可链接总部全球资源，进入TON全球项目群组。有workshop, online pitch，技术支持，市场支持，对接VC等全方位扶持。  顺利进入后请通知 @Yuki_Web3_HK 或 @Katiya74 😁我们好跟进后续服务。

Traffic Builder: 1刚注册的钱包会处于inactive的状态吗？

wiwi: 那如果被 bounce 返回發送方會有兩次 notify 嗎 (reply to 79899)

Traffic Builder: o,原来要转帐一次才会进入active状态

c: 有人知道 ton4j 有没有批量转jetton 的方法嘛

Andrew: 没有主动发起过交易的地址，就默认是 inactive (reply to 80037)

Traffic Builder: @andrew_cong 我在mainnet中部署遇到了这样的报错，但是testnet中我可以正常，mainnet比testnet有更多的要求吗？ (reply to 80042)

Traffic Builder: 1看上去是mainnet和testnet的getAddressInfomation的返回有些不同

Andrew: 你打印出来看看，也许是钱包版本不同之前的 (reply to 80046)

Traffic Builder: 1我看了一下，正式网的extra_currency这个字段如果空就会直接没有

Traffic Builder: 1testnet的会为[]

Traffic Builder: 1blueprint会按array去解析，所以报错了，我修改了依赖中的manifest/scripts/sign/node_modules/@ton/ton/dist/client/api/HttpApi.js可以解决

— 2025-02-11 —

品誉: 测试网络出问题了吗？

Andrew: 再试几次看看，有时候 API 服务不稳定 (reply to 80081)

品誉: 看过了，其实交易已经发生，区块浏览器看不到

Solomon: https://blog.ton.org/ton-telegram-exclusive-partnership-2025

Solomon: 请问一下所以是要在2/21之前完成只链接TON Connect钱包，不能连接其他钱包是吗？如果还链接其他钱包会影响mini app运行吗？

Solomon: @andrew_cong

Solomon: 感谢

Andrew: 是的，具体以公告为准 (reply to 80089)

Solomon: 那请问如果我的miniapp暂时还没有上链的动作，是不是并不影响？只是如果之后要on-chain的话，钱包只能选择TON钱包。公告里也没有涉及这块，所以有点疑问，谢谢 (reply to 80094)

Solomon: @andrew_cong

Andrew: 是的，这里是技术讨论群组，不展开 (reply to 80096)

Solomon: 好的谢谢

clark: 大家有没有推荐的rpc 服务商，感觉 toncenter 不太稳定，而且客服响应比较慢

Andrew: https://tonxapi.com/ https://tonapi.io/ (reply to 80105)

clark: https://tonconsole.com/  怎么样？

clark: 哦，这就是 tonapi.io

clark: 谢大佬

ZombHunt: 有没有老哥懂飞机的这个affiliate program是咋结算的？意思是说我创了个app，给他佣金设80%之后，给别人频道连接上，有人从这个链接进来充钱的话就给我80%的佣金？

Halan: 大佬,有没有vue转账jetton的案例

— 2025-02-12 —

品誉: 兄弟们，哪里可以领多一点的测试币

Evan: 貌似有地方可以买

品誉: 什么地方

Howard: yes (reply to 80038)

Howard: TONX API or  TON API (reply to 80105)

Andrew: 欢迎加入 TON Nest TON Society 官方孵化营计划 ！   TON Nest 为开发者提供全面项目支持服务，链接全球资源，目标助力 TON 项目取得成功。加入 TON Nest，您将有机会接触 TON 生态全球项目方和 TON 生态合作伙伴。  详见附件📎

molir: 什么的测试币 (reply to 80147)

— 2025-02-13 —

Joe: 大佬们 分层确定性钱包 能量不能一个主号共用吗

wiwi: 想請問我目前想檢查轉帳 token 之後對方是否有收到我要檢查 jetton::transfer_notification  目前我做法是當轉帳 A -> B 那我就去檢查 B 是否有 jetton::transfer_notification ，具體做法我是用 1. clientV4.getAccount 用裡面的 accountInfo.account.last.lt 2. clientV4.getAccountTransactionsParsed  遇到問題 1. 如果當只有接收 token 但是沒有 ton 的時候 clientV4.getAccount 不會有 lt 所以就沒辦法抓到 account transactions 2. 轉一些 ton 進去後的紀錄可以拿到但是之前的就抓不到了

Andrew: 你转账 token 后，可以根据这个转账交易去判断整个交易链路是否成功就好，其中 transfer_notification 是一个可能因为 gas 不够而异常的可忽略的消息 (reply to 80202)

wiwi: 不需要去檢查接收方是否收到嗎?

wiwi: 那我該如何判轉整個交易是否成功?  整個交易有多個 tx 我可以只判斷第一筆? (reply to 80203)

Andrew: 我的意思是，消息是组成一个“消息链”的，你需要根据第一个消息，从头开始判断每一个消息对应的交易是否执行成功。  但是有些交易是可以忽略的，比如 Notify 和 Excess。 (reply to 80204)

Andrew: 更具体一点，对于 Jetton 转账，你只要判断 B 发出的 Jetton Internal Transfer 消息是否处理成功就好。

wiwi: 你是指這個嗎?

Andrew: 是的，B 发出给 C 的 (reply to 80208)

杰: 和微信一样推广呗

wiwi: 請問是要查 B 轉帳 token 的 jetton wallet 嗎?  我對 jetton wallet 用 clientV4.getAccountTransactionsParsed 會回傳 Mailformed response (reply to 80209)

ZombHunt: 我也想问，有没有什么好办法 (reply to 80211)

ZombHunt: 咱还没上线呢，可以关注下我们频道https://t.me/ZombHuntOfficial😂

ZombHunt: 现在在想前期怎么起步

ZombHunt: 搞不到真实玩家

ZombHunt: 哈哈哈哈不是，是美女大战僵尸

ZombHunt: 先垫的，给真实玩家看着真实点

ZombHunt: 总不能放个个位数的频道吧，看着多冷清

ZombHunt: 刷人数挺简单的，主要是不知道怎么让真是玩家看见

aier: 找油管游戏up主做推广应该可以

aier: 找个相关的，估计一条视频要出点推广费

Andrew: 理论上，消息对应的交易处理成功就好，你只需要关注“交易”。 但是你做检查也可以，取决于你的需要。 (reply to 80213)

wiwi: 我現在不知道 jatton transfer 成功是否代表整串都會成功，所以我想要多檢查是否真的收到 有什麼方式可以把 jetton wallet 地址底下的紀錄 parsed 嗎? getAccountTransactionsParsed 會有錯誤 (reply to 80231)

Andrew: getAccountTransactionsParsed 你是用的哪个 SDK？ (reply to 80232)

wiwi: js 的 @ton/ton  clientV4.getAccountTransactionsParsed

wiwi: https://testnet.tonviewer.com/kQDbVevWJycVvEbLVRgbKEIx9Wqp03G0Czd21s051zmH2dwN/jetton/kQC3-HfuyPWD3sUiwk8Cb_ymcmcSZdZEu3atb0-dYUZPKjMB  例如這個地址

Andrew: @wiwiGreen 你看这个方法的源代码，是返回值不符合期望所以说格式异常。   据我了解是返回值中某些字段调整，SDK 需要更新。 这需要一点时间才会发布新版本。   之前有人反馈是 extra_currency 为空的时候，到底是返回 null 还是 [] 的问题。

wiwi: 那這樣的話有什麼其他方案可以知道具體是做什麼事嗎?  自己拆 cell ? (reply to 80236)

Andrew: 调用 getAccountTransactions ，然后自己 parse (reply to 80239)

wiwi: 請問有相關的範例可以參考嗎 (reply to 80241)

Andrew: clientV4.getAccountTransactions 然后你根据你的需要判断 (reply to 80242)

Andrew: 準備好迎接一個精彩的夜晚：DJ、暢飲，最重要的是，這是與 $TON 建設者們交流的絕佳機會！💎  💎💎 加入我們，在 #ConsensusHK2025 一起參加 $TON Rooftop Night 🔥🔥  ✨ 特別感謝我們的聯合主辦方：OpenAD Protocol, Ave.ai, Adsgram, Catizen,Web3Labs, KuCoin Web3  👉請點擊下方註冊：https://t.me/theontonbot/event?startapp=c07a234d-2673-4e7f-8029-26fc0876425e (forwarded from TON Society Hong Kong Announcements)

wiwi: 請問有相關的拆解說明文件跟範例可以參考嗎？ (reply to 80243)

Andrew: 没有的，如果你写的时候遇到问题可以提 (reply to 80249)

wiwi: ... 都沒文件那我可以怎麼開始下手

Andrew: 标准的 API v2 v3   https://toncenter.com/api/v2/#/accounts/get_transactions_getTransactions_get (reply to 80251)

Grace: That's a good idea!

— 2025-02-14 —

D: 請問 要如何 像這樣 顯示活躍人數

Ton: 有个问题请教一下，对于一个Jetton而言如何给用户授权数量，让用户来领呢？

Andrew: 当你用户规模达到一定阈值，就会自动显示。 具体规则暂不公开。 (reply to 80279)

Ton: 我理解上dict存储只能有255个？

Andrew: https://docs.ton.org/v3/guidelines/dapps/asset-processing/mintless-jettons (reply to 80280)

Ton: 这个支持每天授权的额度变化吗？比如说我今天授权10个，明天授权5个这种 (reply to 80283)

Andrew: 这个方案不是为每天变化设计的，你先看下原理。 (reply to 80284)

Andrew: 你要每天更新合约的merkle_hash 和线下的Merkle tree data 也可以，只是我觉得没必要。不如先做中心化积分，最终再用这个方案分发代币。

Ton: 我代币不是一次性分发的哇 (reply to 80286)

Ton: 类似挖矿，每天产出

Andrew: 那你先每天中心化的积分，后面一次性 TGE (reply to 80288)

Ton: 不行啊，跟商业模式违背了

Ton: 或者说我有个中心化的database，记录用户的值，可以每天变，他来领取的时候，我给他清零，这种方案可以吗

Ton: 这个合约要咋写呢

Andrew: 那就中心化的存储积分，用户可以 claim ，将积分变为 token

Andrew: 自己写个 claim 方法，让用户付 gas fee 来 claim

Ton: 这个咋写 有教程吗 (reply to 80294)

ZombHunt: 请问下如果要想在Telegram App Center里发布的应用能够被打上New的标签并且展示在首页New这边的话需要什么条件呢？

Andrew: 修改 Jetton master 的合约，里面加一个自定义方法，这个方法只有指定的 admin 地址可以调用，然后参数是给哪个用户地址 mint 多少 token (reply to 80295)

Dan: 这种业务需求一般应该写新合约去处理吧， 改资产合约是大忌

Dan: 改了都不认可你这个jetton

ZombHunt: 有老哥知道这个规则吗？ (reply to 80296)

Andrew: 修改实现，不是修改接口没问题 (reply to 80299)

Andrew: ❓❓❓ 之前有群友咨询，发送消息后，如何根据消息 id 来进行查询，分别在 TON Connect 和 TON SDK 下我写了一个 demo，欢迎参考试用   TON Connect 发送消息如何查询 https://github.com/ton-builders/open-mini-app/blob/main/app/page.tsx   TON SDK 发送消息如何查询 https://github.com/ton-builders/open-backend/blob/main/src/index.ts

— 2025-02-15 —

Andrew: 💎TON Society HK * Gate.io给大家送福利啦！💎 🎫200张在HK wonderland举行的Token of Love Music Festival门票免费送💎 陈冠希将领衔组合 3CORNERZ 登场！ 📅 时间：2月19日星期三18:00 - 22:30 GMT+8  ✅进TON官方中文群留言你的邮箱，先到先得： t.me/TON_HongKong (forwarded from Katiya｜TON)

Маханова Зарифа: привет

Gimme: Where I am?

— 2025-02-16 —

Howard: ❗️ 关于 Telegram Mini Apps 带有区块链功能的新规则的重要信息  大家请注意，TON 现已成为 Telegram Mini Apps 内唯一可用的区块链。    🛎 自 2 月 1 日起 ，禁止在 TApps 中提及、推广或使用任何非 TON 资产或钱包。   🛎 团队需在 2 月 21 日前完成资产和合约迁移至 TON，以避免被封禁。    尽管官方在 1 月底已发布公告，但仍有许多现有项目（无论大小）违反了相关规定，并未积极整改。此外，预计未来仍会有新应用铤而走险，试图规避审核团队的监管。    🔗 其他重要链接   📌 [迁移至 TON 的操作指南]   📌 [违规举报 Google 表单]  🌟 TON 生态系统支持团队感谢大家的协助！   目前仍有数十个 Mini Apps 违反规则，但我們基金會成員盡力協助.   ➡️ 如有任何问题，欢迎私訊[@TONecosupport] ！

rex: 想问一下 怎么链接ton钱包获取奖励

rex: 我看其他人小程序都有链接ton钱包

Andrew: 通过 集成 TON Connect 可以提供这个能力。   但是奖励是指什么？ (reply to 80423)

rex: 就是在链接钱包那里

rex: @andrew_cong  我看到所有小程序都会鼓励用户连接钱包

rex: 这个链接钱包 我看到好像是有奖励的

Andrew: 各个项目根据自己业务给积分和奖励，官方也会举办联赛。 (reply to 80428)

rex: 我该如何对接了额

rex: 有网站？

rex: @andrew_cong

Andrew: <TON Eco Dev Collection>   - Chinese: http://tondevdoc.xyz/   <Telegram & TON Demo Codes> https://github.com/orgs/ton-builders/repositories (reply to 80432)

Joe: ton 怎么都不涨啊 卧槽 要出了

— 2025-02-17 —

U🙅TRX: ton

U🙅TRX: 一直跌

Erdan: Bridge error -> READY_STATE_CONNECTING

Erdan: 'bridge_url': 'https://walletbot.me/tonconnect-bridge/bridge'  这个怎么解决？

Joe: md 几万个ton 我快抗不住了 这组织方太不会搞事情了

yan: 是的，确实

yan: 这么多用户搞不起来事情

yan: 太垃圾了

Joe: 5块跌到3.8 尼马的

Joe: bsc都起飞了都

yan: 那还好，没亏多少

yan: 、会涨回来的

Joe: 亏了5万多了

yan: 还好。。我亏了几十万了

Joe: 大佬 我感觉每天项目干活的人蛮多的啊

Joe: doge币都没人干事 都牛逼哄哄

Joe: 见鬼了

yan: 都是垃圾项目。。天天在那点点点，也没一点创新

yan: 如果是我，直接复制微信，QQ，几天估计就火起来了

yan: TON基金会很有钱的，不知道天天在干啥

yan: 把QQ游戏复制过来，把微信红包复制过来

yan: 这个都不弄，不知道天天在搞什么

yan: 天天在搞点点点游戏，全是垃圾

Joe: 😑

Jacky: 咨询一下，各位大佬，我们想做一个用户通过 ton 的钱包充值后监听是否到账的功能，我们目前用的查询接口是 Ton Center 的。 但这个 Ton Center 提供的 API 经常换，导致线上功能失效。  请问各位大佬，这个 Ton Center 是官方的 API 吗？ 另外，有没有其他更好的方法可以实现对用户充值成功之后的监听功能？

Jacky: https://toncenter.com/

Jacky: 之前用的这个 api

Andrew: https://tonapi.io/ https://tonxapi.com/

Yang: ⚠️提醒：這裡是開發者群詢問問題、討論的地方，其餘無關討論請勿在本群，謝謝。

Eric: 请问除了在BotFather中更改Bot信息之外，还有其他方式可以更改Bot信息吗（Bot的Name\About\Description和启动链接等 ）

wikig: 直接去bot页面改也行我记得 (reply to 80515)

6666feile: https://github.com/neodix42/ton4j/issues/68 (reply to 80041)

Eric: 😂 我是Bot的Owner，在我不知情且未进行任何操作的情况下。  我的Bot的信息被更改成其他Bot的信息了（包括About\Description和启动链接），甚至在BotFather中也没有任何更改记录的信息。

Andrew: 不要自己加戏哦， 最可能的就是 token 泄露了。  你可以通过 Bot API 的setMyName 、setMyDescription修改 bot 的信息。  https://core.telegram.org/bots/api#setmyname (reply to 80518)

Halan: 大佬,这个数据是怎么解析的

Halan: value数据

Andrew: @dhdj2738 可以像这样解析，你最好是知道这个 Cell 的结构，否则比较难 (reply to 72511)

Halan: 谢谢

Grace: 💪

— 2025-02-18 —

liam: tg mini app 在使用  @tonconnect/ui-react  <TonConnectButton />的时候，会在拉起ton wallet后关闭小程序，有没有人知道怎么禁止关闭小程序

king: 如果想查询外部账户的交易信息 哪个文档中能找到解决方案呢🤥

T: Hi  All, 想問一下當某個地址 ton 發生變化，如何實時讓後端知道

Traffic Builder: 1我在执行合约的时候会收到返还的多余的ton，我是否可以编写合约逻辑来返还更多的ton

Andrew: 应该是 modal 模态的形式打开，不会关闭你的小程序。  ton connect 仓库有 demo，你学习看看 (reply to 80581)

Andrew: 通过 API 查询所有交易信息？ (reply to 80583)

Andrew: 最简单的是自己做定时任务周期性查询。  或者有些 API 服务商提供 webhook 回调模式。 (reply to 80584)

Abe.: 1

Andrew: 没有约束 (reply to 80605)

king: 是的 (reply to 80595)

— 2025-02-19 —

ZombHunt: 请问下如果要想在Telegram App Center里发布的应用能够被打上New的标签并且展示在首页New这边的话需要什么条件呢？ (forwarded from ZombHunt)

Less Enter🐺MrBeast: 请问star支付成功创建了InvoiceLink后，点击支付时，机器人一直没有触发pre_checkout_query监听，有没有大神知道是什么原因

Andrew: 是不是被其他处理方式处理了，比如通用的 message 方法。 (reply to 80646)

Andrew: 注册监听是排序的

Less Enter🐺MrBeast: 刚刚找到原因了 在机器人start时allowed_updates没有配置pre_checkout_query， 感谢@andrew_cong

Andrew: 其他申请过的项目方可以解答下，是否申请 listing 后就展示？ 我没走过这个流程 (reply to 80642)

Jase: 请教一下区块链新规会对trading bot，比如trojan这些有影响吗？

谋士: 没什么影响 (reply to 80672)

liam: 请教个问题，const response = await tonConnectUI.sendTransaction(transaction); 交易返回的boc，怎么解码，有没有文档

Jase: 所以只是针对TMA有影响？ (reply to 80673)

Andrew: @qingfeng9903 像这样解码。 你需要解码做什么？ (reply to 72511)

谋士: 影响不大吧 (reply to 80675)

liam: 需要拿到hash，然后判断交易状态是否成功 (reply to 80677)

Andrew: @qingfeng9903 看这个 (reply to 80310)

liam: 好的

— 2025-02-20 —

liam: const response = await tonConnectUI.sendTransaction(transaction);  转U的话，transaction 传什么参数

u7: 想請問一下如果我用https://toncenter.com/api/v3/jetton/transfers 獲取到的forward_payload = null 但瀏覽器上確實是有payload的 這種情況我可以在其他哪個api獲取到正確的payload嗎?

Andrew: USDT 也是一个 Jetton，按照 Jetton 的参数格式 (reply to 80718)

Andrew: 你是用 Tonkeeper 看的吗？那用https://docs.tonconsole.com/tonapi/sdk 看看 (reply to 80719)

liam: const transaction = {       validUntil: Math.floor(Date.now() / 1000) + 60,        messages: [         {           address: USDT_CONTRACT_ADDRESS, //  USD 合约地址           amount: '1000000', // 转账金额           payload: JSON.stringify({             recipient: "XXXX",  // 收款方地址             amount: '1000000', // 转账金额           }),         },       ],     };这样子的参数，拉起ton wallet后，提示 验证交易失败 (reply to 80722)

Andrew: 按照这个来  https://docs.ton.org/v3/guidelines/ton-connect/guidelines/preparing-messages#jetton-transfer-with-comment (reply to 80724)

liam: 好的

liam: const body = beginCell()     .storeUint(0xf8a7ea5, 32) // op transfer     .storeUint(0, 64) // queryId     .storeCoins(toNano("0.0001")) // deposit_amount     .storeAddress(       Address.parse("xxx"),     ) // receiver address     .storeAddress(Address.parse("xxx")) //response_adress - address nhận phí GD thừa     .storeMaybeRef(null) // custom_payload     .storeCoins(toNano("0.05")) // forward_ton_amount     .storeMaybeRef(beginCell().storeStringTail("something").endCell()) // forward_payload_amount if receiver is a smart contract     .endCell();    const transaction = {     validUntil: Math.floor(Date.now() / 1000) + 360,     messages: [       {         address: USDT_CONTRACT_ADDRESS, // Your USDT jetton wallet address         amount: toNano(0.001).toString(), // feee         payload: body.toBoc().toString("base64"), // payload with jetton transfer and comment body       },     ],   };  这样传了，但报了验证交易失败的错误 (reply to 80725)

Andrew: 里面每个参数都检查一下，这个 xxx 修改了吗 (reply to 80738)

liam: 修改了，修改成正式的地址了

Andrew: 发起交易的钱包，里面有余额吗？

liam: usdt吗

liam: usd没有，但是有ton

liam: 这个也会影响吗

Edward: 大家好，我在搭建tact合约出现了一些问题  import "@stdlib/deploy";  message(0xf8a7ea5) JettonTransfer {     queryId: Int as uint64;     amount: Int as coins;     destination: Address;     responseDestination: Address?;     customPayload: Cell? = null;     forwardTonAmount: Int as coins;     forwardPayload: Slice as remaining; }  const JettonTransferGas: Int = ton("0.05");  struct JettonWalletData {     balance: Int as coins;     ownerAddress: Address;     jettonMasterAddress: Address;     jettonWalletCode: Cell; }  fun calculateJettonWalletAddress(     ownerAddress: Address,     jettonMasterAddress: Address,     jettonWalletCode: Cell, ): Address {      let initData = JettonWalletData{         balance: 0,         ownerAddress,         jettonMasterAddress,         jettonWalletCode,     };      return contractAddress(StateInit{         code: jettonWalletCode,         data: initData.toCell(),     }); }  message Withdraw {     amount: Int as coins;     receiver: Address; }  contract Example with Deployable {     myJettonWalletAddress: Address;     myJettonAmount: Int as coins = 0;     currentWithdrawCount: Int = 0;      init(jettonWalletCode: Cell, jettonMasterAddress: Address) {         self.myJettonWalletAddress = calculateJettonWalletAddress(             myAddress(),             jettonMasterAddress,             jettonWalletCode,         );     }      receive(msg: Withdraw) {         require(             msg.amount <= self.myJettonAmount,             "Not enough funds to withdraw"         );        let qid = self.currentWithdrawCount;        self.currentWithdrawCount = qid + 1;          send(SendParameters{             to: self.myJettonWalletAddress,             value: JettonTransferGas,             body: JettonTransfer{                 queryId: qid,                 amount: msg.amount,                 destination: msg.receiver,                 responseDestination: msg.receiver,                 customPayload: null,                 forwardTonAmount: 1,                 forwardPayload: emptySlice(),             }.toCell(),         });     } } 有mode: SendRemainingValue，不管是在sandbox还是testnet都是一直不够TON的报错（resultCode: 37)  替换成其他或移除mode之后没有报错了，但是只可以Jetton Transfer而无法到下一步Jetton Transfer Internal和Jetton Notify等，这是什么原因呢？

Zzuki: 新手开发 请问下各位 testnet w5下为什么同一套助记词 tonhub和tonkeeper出来的0Q地址不同 但是互相转账又会弹出不能给自己转账

Andrew: 有 TON 就好，具体为什么异常，如果没有发送上链比较慢排查，一个参数一个参数对比排查一下 (reply to 80746)

Andrew: 地址不同具体是什么，浏览器查一下合约是否已经部署，合约什么版本 (reply to 80754)

Zzuki: 我明白了 我使用了mainnet地址去获取测试币 然后testnet的0Q地址获取到了但是合约没有被激活 (reply to 80756)

Zzuki: 感谢回答

Vladimir: 📝 TON devs — we need your feedback!  Building on TON? Tell us what works (and what doesn’t) in a quick survey on:  • Developing on TON, tooling, programming languages (FunC, Tact, Tolk), TMAs, guides  Fill it out, drop your wallet & claim an exclusive reputation SBT!  Make your voice count.  (forwarded from Society Builders)

Andrew: 📝 TON 开发者 — 用你的反馈来改进 TON!  你是 TON开发者吗？通过快速问卷调查告诉我们，哪些对开发是有效（哪些无效）：  • 关于在TON上的开发，工具，编程语言（FunC, Tact, Tolk），TMAs，指南  填写调查，留下您的钱包地址，领取独家SBT！  让您的声音被听到。  🔗 点击问卷地址  📝📝📝📝📝📝

Traffic Builder: shift,上次填的那个没有空投

Andrew: ctrl, 上次有红包的

Jack: 有人遇到过Telegram迷你应用在Android上无法打开的问题吗？在macOS、Windows和iPhone上都能正常使用，但在Android上，5次中有4次无法打开。  技术栈是Next.js。

— 2025-02-21 —

Andrew: 有什么异常或者截图看看 (reply to 80808)

booker: 1

6666feile: 这里的金额不能低于0.02，才能保证大概率成功，而且根据账号来，而且我记得文档有一处写了，交易的平均成本是0.037来着，意味着，有些许久没用的账号因为存储成本，会高于0.037 (reply to 80738)

D: 請問這個要什麼特定的網址嗎？

— 2025-02-22 —

Randolph: 大佬们，pyth的TON预言机如何使用啊，有更详细一点的教程吗

Randolph: 官网只有两端代码，这个使用流程是这样吗？ 1.先使用pyth的js sdk获取到ton价格信息 2.通过ton connect ui把价格信息传到自己的合约中，例如方法A 3.在自己合约方法A接收后再把价格数据传到 pyth parse_price_feed_updates方法里面 4.pyth预言机的parse_price_feed_updates接受价格信息并且更新价格，再把更新结果转发会我的合约例如方法B 5.我的合约方法B 接受到parse_price_feed_updates的通知，此时获取其中的ton价格，开始执行自己的业务逻辑

— 2025-02-23 —

Randolph: 这个已经接通了，流程是 1.先使用pyth的js sdk获取到ton价格信息 2.直接调用pyth在ton的智能合约，并在target参赛填上自己的合约地址 3.pyth接收到价格更新后，合约会验证数据，验证后会把价格信息在转发回自己的合约 (reply to 80927)

Nevan: 各位大佬，请教一个问题：  我们在做一个基于TG mini app和TON的MidCore游戏，由于资源比较大，所以采用Web的Cache API作为游戏资源存储，现在发现似乎iOS的TG webview并不支持serviceWorker，Cache API也没有工作，而其他平台包括Android、PC的TG下Cache Storage是work的，serviceWorker也正常工作。不知道各位大佬有没有遇到过。感谢感谢

wikig: 主要看数据量吧  数据量大的话，是否可以考虑使用local.storage 来替代？  不大的话可以考虑tgstorage ? (reply to 81018)

Green: Hi guys, I have a question. on contract,  define this function  (int) get_now_time() method_id {     return now(); } But anytime I call it the now time is same... what's happening here?

— 2025-02-24 —

Andrew: 1.  return int not (int)  2. you can use now() directly instad of using get_now_time() (reply to 81057)

chen: 请问 在telegram的应用想要接入广告sdk，一般使用的是哪一家的呢？

Tom: adsgram    adstar (reply to 81082)

chen: 好的 谢谢 (reply to 81083)

— 2025-02-25 —

Danping: Ton.AI 也有，可以了解一下 (reply to 81082)

Jacky: @andrew_cong

Jacky: https://docs.tganalytics.xyz/

Jacky: Telegram 的 Analytics 的 SDK，接入之后，开发者在哪可以看到这些上报的数据？ 还是说这些数据报上去之后，只有官方才能看到？

Andrew: 是的，目前这个数据还没开发对外查询的接口。 (reply to 81162)

Jacky: 明白了

Jacky: 谢谢

Jacky: 求问一下，ton connect 里的这个发起签名的操作，我们前端可以监听到吗？ (reply to 81166)

Andrew: 你的前端是可以监听用户是否点击了按钮，然后跳转到钱包你就不知道了，但是好像可以设置一个 callback 得到签名成功或者失败 (reply to 81172)

Jacky: 好滴

brett: 如果你是 Meme 币项目方，希望在 游戏或应用类 DApp 领域实现场景落地，欢迎联系 Debug_Pet！  我们是一个 开源社区团队，致力于提供 免费开源的商业级 DApp 应用，可供免费下载和商用。  此外，如果你有资源，我们也能提供 技术支持，共同推进深度合作，实现更大价值！

— 2025-02-26 —

芃憧: 前端发起ton交易后 tg会弹窗这个弹窗 但并没有影响流程 有哪个大佬知道可能是什么原因吗

Root: 我的钱包发起一笔交易，但是没有确认，链上相近时间确认了另外一笔金额地址和我的数据一模一样的交易。🤔这是什么情况

Andrew: 发浏览器记录 (reply to 81232)

Root: https://tonviewer.com/transaction/7b59e57f23a827523c73ebb60ca468197c02c066372582f9f289f039c1e21a58

Root: 这一笔确认时间在我自己构建广播之后几秒，地址和金额都对得上，但不是我构建的交易

Andrew: 那你的钱包地址是什么

Root: UQDNJ_nqvJv9MDv8qMBv75fb0JKo1WIusCoquJoqGB-oTG_G

Root: 收币地址也对得上

Andrew: 从这个交易记录看，就是UQDNJ_***-oTG_G 这个钱包发起转账，因为是第一次发消息，所以会有个 Deploy Contract 部署钱包合约，看起来很正常。 (reply to 81234)

Root: 单看这一笔是正常的,整个过程不正常，我发起的交易返回A hash，但是链上确认了一个相同数量和地址的B hash。现在排查不到哪里的问题

Andrew: 如果你说的是这个，属于“地址投毒”，就是生成一个结尾和你的地址类似的地址，给你一个小金额转账，然后你下次转账的时候，可能图方便从历史交易中复制它的地址。

Root: var rawTx = `te6cckECHwEABU0AA7V80n+eq8m/0wO/yowG/vl9vQkqjVYi6wKiq4mioYH6hMAAAxYeCdZIHXDP6oVg2FkKvxPW3NkW3n0KfM8KWx2dycFXb9nrQtBwAALxITnWlBZ7uvwAACRp6pRoAQIDAgHgBAUAgnKmPxytDBmxjcd1GLifIYNAf37cf/pufZQZyQZ+8lxrlIT8WWWiDcn8RDShy/yG8XANzbwxj1LlhRjr8c865AytAhEMuqwGGKGGBEAdHgPjiAGaT/PVeTf6YHf5UYDf3y+3oSVRqsRdYFRVcTRUMD9QmBGfa/EFDOKj15bt7PZns1YWSTa0XNPEFNptEorQU3TEUjOVYtrgJk2ycAuBJAoOWUFgFbnLA5OJmmv0psVXMMZA5TU0Yuz3d7mgAAAAAABwBgcIAQHfHAEU/wD0pBP0vPLICwkAUQAAAAApqaMXz0FfQiq9sb5LbA+6gbBQ4qu5WR1Xn6/p0RTVBAGBSTFAAGpCAAzgjAqRuhK7lMJJovQKwuk1hWd04yFKowzZNc8OaHOUqAoHDYcAAAAAAAAAAAAAAAAAAAIBIAoLAgFIDA0E+PKDCNcYINMf0x/THwL4I7vyZO1E0NMf0x/T//QE0VFDuvKhUVG68qIF+QFUEGT5EPKj+AAkpMjLH1JAyx9SMMv/UhD0AMntVPgPAdMHIcAAn2xRkyDXSpbTB9QC+wDoMOAhwAHjACHAAuMAAcADkTDjDQOkyMsfEssfy/8YGRobAubQAdDTAyFxsJJfBOAi10nBIJJfBOAC0x8hghBwbHVnvSKCEGRzdHK9sJJfBeAD+kAwIPpEAcjKB8v/ydDtRNCBAUDXIfQEMFyBAQj0Cm+hMbOSXwfgBdM/yCWCEHBsdWe6kjgw4w0DghBkc3RyupJfBuMNDg8CASAQEQB4AfoA9AQw+CdvIjBQCqEhvvLgUIIQcGx1Z4MesXCAGFAEywUmzxZY+gIZ9ADLaRfLH1Jgyz8gyYBA+wAGAIpQBIEBCPRZMO1E0IEBQNcgyAHPFvQAye1UAXKwjiOCEGRzdHKDHrFwgBhQBcsFUAPPFiP6AhPLassfyz/JgED7AJJfA+ICASASEwBZvSQrb2omhAgKBrkPoCGEcNQICEekk30pkQzmkD6f+YN4EoAbeBAUiYcVnzGEAgFYFBUAEbjJftRNDXCx+AA9sp37UTQgQFA1yH0BDACyMoHy//J0AGBAQj0Cm+hMYAIBIBYXABmtznaiaEAga5Drhf/AABmvHfaiaEAQa5DrhY/AAG7SB/oA1NQi+QAFyMoHFcv/ydB3dIAYyMsFywIizxZQBfoCFMtrEszMyXP7AMhAFIEBCPRR8qcCAHCBAQjXGPoA0z/IVCBHgQEI9FHyp4IQbm90ZXB0gBjIywXLAlAGzxZQBPoCFMtqEssfyz/Jc/sAAgBsgQEI1xj6ANM/MFIkgQEI9Fnyp4IQZHN0cnB0gBjIywXLAlAFzxZQA/oCE8tqyx8Syz/Jc/sAAAr0AMntVACzSAGaT/PVeTf6YHf5UYDf3y+3oSVRqsRdYFRVcTRUMD9QmQAGcEYFSN0JXcphJNF6BWF0msKzunGQpVGGbJrnhzQ5ylQFA4bDgAYII1oAAGLDwTrJBM93X4BAAJ1BnYMTiAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAG/Jgw1ATAgjTAAAAAAAAgAAAAAAA05z8XbeZ3//6Vdbj24sA2WIqobp9tuN1iD/BZAIjmREQFAWTFmWM+g=`  能否帮我解析一下这个交易的数据，一层cell 无法解析为Messagev2-MessageV5， InternalMessage 解析到MsgOpCode 为180294614（0xabf13d6）但是没找到定义

Andrew: 这是一个内部消息吗？ 哪个合约发给哪个合约的？是 TEP 标准消息吗 (reply to 81242)

Root: 这是我上面发出来的那笔交易广播的数据，具体是个啥我也不知道，还在看

Root: 但是hash是对得上的

Root: MessageV3 MessageV4 MessageV5 都解析不出来

Root: internal 应该也不对

Andrew: 根据 TL-B 看看  https://docs.ton.org/v3/documentation/data-formats/tlb/msg-tlb (reply to 81246)

Jacky: @andrew_cong 咨询一下，接入 Analytic 时的 token，应该是用哪个 token 来着？

Jacky: 一个是 token for recoriding.

Jacky: 一个是 token for getting analytics

Andrew: 这个我也没接过，文档上有描述吗 (reply to 81267)

Jacky: 文档上没说清楚是用哪个 lol

Jacky: 我们再摸索一下吧

Andrew: 第二个 token是用于获取分析结果？

Jacky: ok

Jacky: 调试好了

Jacky: 确实是第一个 哈哈

xin: 请问有tonlib的java开发工程师吗

xin: 有问题请教 本地win链接vpn情况下 去创建钱包然后部署到链上为啥还是提示网络链接不通

Andrew: 你本地 windows 配置了代理，但是 java 代码并不会使用这个代理。 你需要在 java 代码里面设置代理信息。 (reply to 81286)

— 2025-02-27 —

crypto: 请问我的payload怎么构造

crypto: 是直接像这样发个字符串吗

Leo: 是的

crypto: 好像不可以

crypto: 请问我这个应该怎么改

xin: 大家好

xin: 想问下在本地还有新加坡的机器去链接tonlib报错咋处理 org.springframework.web.util.NestedServletException: Handler dispatch failed; nested exception is java.lang.Error: Error in tonlib.receive(), 5 times was not able retrieve result from lite-server. Caused by: java.lang.Error: Error in tonlib.receive(), 5 times was not able retrieve result from lite-server. 一直显示网络问题，然后过一会会一整个java服务会自动down了 想问下大家如何处理啊

xin: 有tonlib的java开发者请教下吗 求求

Andrew: 先 ping 一下目标网址看看，能不能通，云服务器默认也有端口和 IP 限制之类的。  然后建议使用TypeScript/JavaScript 兼容性更好 (reply to 81359)

Traffic Builder: 有人知道这个按钮是怎么做的吗？

Andrew: ⚠️ 盗号风险提示  最近如果有人私信联系你，不要点击 Bot 或者链接，诱导你操作会盗号。  建议开启二阶段验证(2FA)。

crypto: 请问我这个该怎么解决

Andrew: 你这个是数组越界吗？ 自己  debug 看一下 (reply to 81395)

— 2025-02-28 —

xin: 想问下大家有试过使用助记词 生成私钥公钥 并且初始化v5钱包吗 我初始化钱包后发现地址和tonkeeper的不一样 确定是v5钱包以及正式网络 根据 tonlib代码来 但是初始化结果的和app钱包的不一样就很尴尬

xin: 有没有什么api可以查询一个地址是哪个钱包版本😂

6666feile: walletId： testnet: -239 + 2^31=2147483409 mainnet: -3 + 2^31 =2147483645 (reply to 81461)

6666feile: 不过tonkeper同密钥生成的更多子钱包，就不知道规则了，好像问了他们客服，客服不说

xin: 看了不太懂这个 这个钱包确实是同keeper生成的 然后才记助词导入 (reply to 81464)

xin: 这个id不对吗 如何获取😂

Tom: 请问一下 电报的tma有没有什么方法可以限制打开时的分辨率啊。我现在在电脑上的电报运行的时候，新手引导的坐标不对

Martin Suger | Work: And dev and designer here? We need you! Send dm for details 🙏🏻 (C++/JS/TS)

Martin Suger | Work: 或者最好用中文 ?

— 2025-03-01 —

Andrew: Tact 1.6 重磅升级发布  https://t.me/tondev_news/191

— 2025-03-02 —

Cryptosiz: Hello guys I’m also a ton developer  Very good to be here

— 2025-03-03 —

xin: 请问下使用tonlib链接ton服务器经常报链接 Caused by: java.lang.Error: Error in tonlib.receive(), 5 times was not able retrieve result from lite-server.   at org.ton.java.tonlib.Tonlib.syncAndRead(Tonlib.java:427)   at org.ton.java.tonlib.Tonlib.sendRawMessage(Tonlib.java:1396)   at org.ton.java.smartcontract.wallet.v5.WalletV5.send(WalletV5.java:146) 服务器也是用的外网的了 但还是报的这个错 主要服务器日志也看不到调用的是哪个lite-server的ip 有大佬解答下吗

Katiya｜TON: gm

Andrew: 在 pom.xml 里面找一下作者邮件问，这里用 java 的比较少 (reply to 81648)

Max: 大家好，您能分享一下测试网中需要进行大量测试的 TON 吗？  0QDZYHOyA_4Lgwvip63q9J-PDIqjmd49teVlVfKCUAqizaxV

Yuki | TON: 我应该是加进来了，吧 (reply to 81653)

莫茶: 大佬睡觉了么？

Andrew: 有技术问题直接群里咨询，很多群友都会回复的。 (reply to 81694)

— 2025-03-04 —

xin: 想问下tonlib如何校验交易有效性

Andrew: xin 通过这个方式获取对应的交易。交易成功与否，你需要根据具体业务逻辑判断。 (reply to 80310)

Andrew: 比如 Jetton Transfer 你需要判断除了 notification 和 excess 的消息以外，全部成功

【超1分钟未回复直接弹语音】: 请问一下     ton支付接口url    怎么申请

【超1分钟未回复直接弹语音】: ？？？？？

芃憧: 想使用Ton 进行USDT代币转账 这么写有什么问题吗  转账总是失败

Green: myTransaction's amount should be greater than your set, recommend 0.05TON

芃憧: 使用tonkeeper 钱包转账 弹窗的转账显示的是转账我设置的0.0001Ton 或者是你刚说的0.05Ton  并不是我希望的一定数额的USDT代币

Green: so you mean emulate shows just ton transfer, not jetton transfer? can you share the transaction? (reply to 81745)

Green: pls check my code, it's working

芃憧: fde7ddd859fef84b9dea7b4affe6f10ab0c1dd51c401f6b5a17963b2557cfcb4

Green: first on your wallet, there is no jetton... furthermore, seems destination is not your wallet's jetton wallet address

Andrew: 什么叫支付接口 url？  你看下这个文档，是说 API 服务吗 http://tondevdoc.xyz/ (reply to 81741)

芃憧: 这就是我另外的问题。。不知道为什么 转账的地址是另外一个 并不是我设置的UQCkf2dT0s3PRzDMVt6S9rixcpZhlwyQRFgXd0uAGbcLjW5t

芃憧: 但这确实是我今天用这个代码发起的交易

芃憧: 任意一个Ton 的钱包地址就可以发送或者接受代币吗 还需要什么前提准备工作吗

Andrew: 你需要看下 Jetton 协议标准，这个文档的第二章节的第 6 小节，自定义 Token  http://tondevdoc.xyz/ (reply to 81754)

Hui: 请问一下各位大佬有没有使用api扫描ton所有交易的demo

Andrew: 你为什么需要扫描所有交易？部署一个 indexer 可以吗  https://github.com/toncenter/ton-indexer (reply to 81757)

Hui: 大佬你好，我是想监控一批指定的jetton的内盘交易（由一个发币合约创建的），交易的事件分别在jetton代币合约上，我的思路是是扫块所有的交易，然后过滤出由发币合约创建的这些jetton代币的交易，然后解析他们的内盘交易事件  不太懂indexer，这个我理解和公共的 ton.io api 的liteserver是一样的东西吗  或者我换个问法，ton.io有个 API 可以根据区块id，拿到区块内的所有交易的api，但是这个区块ID不是long的自增类型的，还分什么 workchain、shard、seqno，这里我要如何构建这个blockId的自增参数来扫块呢  还是说我的出发点不太对，一般不这种需求不是这样做的呢，求大佬解惑🙏

Leo: 你的思路大体上没错，比如想实时监控所有tx，可以在masterchain（wc=-1）扫块，包括扫每个块包含的workchain shards  但只想监控特定合约的话，几个常用api接口都能直接扫合约地址，就没必要扫块了 (reply to 81762)

Zzuki: 请问各位大佬 我又个简单的银行合约 用户存钱后产生利息 之后用户领取利息 这个用户领取利息的流程是不是 用户 -> 银行合约 -> 银行代币钱包 -> 用户代币钱包 我这个利息领取的转账消息是否构建正确 困扰了很多天 希望各位大佬不吝赐教

Andrew: 那我倒推荐你用 Tact 去写，先实现业务逻辑，帮你理解  https://tact-lang.org (reply to 81784)

Puzheng: 大家有做后端开发的吗？

Zzuki: OK 多谢给个方向  再请问下 诸如CS{Cell{00fb68001925f3a058999d347a9261796b59709fb485c05aaac0e3cb24ff7fefbddec07500058f19cf75998343fc100076dacecd902ef6ab4e41d10c755a6e0d1aa1dac714d017d784000608235a0000000002625a02cf8de7ee00000003c003865ed5046875efe08b7af85ff4e6cbd72fe87d44cc9d5b9890531f2e5dc9b378}  这样的数据能否转成友好可懂的数据格式 有没有什么工具之类的 (reply to 81788)

— 2025-03-05 —

Andrew: https://polyprogrammist.github.io/tlb-editor/#/main (reply to 81796)

Zzuki: 感谢 (reply to 81824)

Zzuki: 请问下 CS{Cell{00fb68001925f3a058999d347a9261796b59709fb485c05aaac0e3cb24ff7fefbddec07500058f19cf75998343fc100076dacecd902ef6ab4e41d10c755a6e0d1aa1dac714d017d784000608235a0000000002625a02cf8de7ee00000003c003865ed5046875efe08b7af85ff4e6cbd72fe87d44cc9d5b9890531f2e5dc9b378} 要转成tlb 吗 目前这个网页不太懂怎么使用

Andrew: https://docs.ton.org/v3/documentation/data-formats/tlb/tl-b-language (reply to 81837)

Aloys: 跟你一样的问题，转账的方式 地址变了，且还是用ton转的 ，不是usdt ，你是怎么解决的 (reply to 81751)

芃憧: 还没解决 还在看

Andrew: @mengpengchong TON 的地址 UQ 和 EQ 开头虽然不同，但是是一样的， 看下是否这个问题？ (reply to 81844)

Zzuki: 抱歉 我比较愚钝 使用了各种AI解析 还是没有搞出结果 请问下 CS{Cell{00fb68001925f3a058999d347a9261796b59709fb485c05aaac0e3cb24ff7fefbddec07500058f19cf75998343fc100076dacecd902ef6ab4e41d10c755a6e0d1aa1dac714d017d784000608235a0000000002625a02cf8de7ee00000003c003865ed5046875efe08b7af85ff4e6cbd72fe87d44cc9d5b9890531f2e5dc9b378}  这个有什么工具转吗 看不太明白 tl-b 不会自己写工具转 找遍了各种文档 没看到有转义的工具

Andrew: ImsorryImstupidIveusedallkindsofAIanalysisandIstillhavengotanyresults  这上面就相当于是根据TLB 生成的 Bag of Cell 的二进制，它是把所有数据放在一起，如果不知道具体的数据结构，你就不知道如何拆分。  "3字符 空格 5字符 逗号 3字符 空格 6字符... "这个就相当于 TL-B，你根据这个规则，可以解析到下面的句子  I'm sorry, I'm stupid, I've used all kinds of AI analysis, and I still haven't got any results (reply to 81853)

Andrew: 下面这 2 个代码你看下  https://github.com/ton-builders/open-backend/blob/main/src/cell-encode.ts  https://github.com/ton-builders/open-backend/blob/main/src/cell-decode.ts (reply to 81853)

Zzuki: 感谢 我试试

Zzuki: 不过我发现这个 00fb68001925f3a058999d347a9261796b59709fb485c05aaac0e3cb24ff7fefbddec07500058f19cf75998343fc100076dacecd902ef6ab4e41d10c755a6e0d1aa1dac714d017d784000608235a0000000002625a02cf8de7ee00000003c003865ed5046875efe08b7af85ff4e6cbd72fe87d44cc9d5b9890531f2e5dc9b378 没有带 id tl-b of the BoC structure --- b5ee9c72

Zzuki: 是不是我的表述出现了问题   我dump 这个ttt_master_addr 出来 CS{Cell{0255773594008003b4a5efaa07f397d2b9394b0532bd1c9c475a0fac802fcc39958aa99867274538010f9fc63d} bits: 299..343; refs: 1..1} 但是 我使用cell-decode出现了问题

Zzuki: throw Error('Invalid magic');

Andrew: dump 的应该是二进制，不包含 magic code 等。 boc 有自己的格式 (reply to 81858)

Zzuki: 你好 那我需要怎么处理dump出来的二进制

Zzuki: 十分抱歉问这些问题 但是希望您能帮我解开疑惑 目前我并为发现如果处理dump出来的数据的文档 可能是我还未找到

Leo: 沙盒的dump对slice/cell可能不太友好，可以尝试set_data后用ts直接从链下读合约数据

Zzuki: 您好 你的意思是 合约里不打印出来然后使用合约将需要打印的数据存储起来然后通过ts 去读取合约的数据达到类似打印的效果吗 (reply to 81865)

Leo: 差不多吧，你在save_data里面不是已经存了ttt，那么按格式读就行了 (reply to 81866)

Zzuki: 好的 多谢 我并没有想到这样去处理 感谢

Aloys: 为什么 转到了一个新的地址上面了，不是，接受者的地址，且转的不是usdt

Aloys: @andrew_cong

Andrew: 发交易的浏览器地址看看 (reply to 81869)

Aloys: 你好，具体是什么意思 (reply to 81871)

Andrew: https://tonviewer.com/ (reply to 81876)

Andrew: 或者发起交易的钱包地址

Aloys: UQCkccA5wFuLac9BYqsFsWrSqPGGoQKvu9e3p1kC_tGts2bT

Aloys: 这个是发起交易的

Andrew: 交易还没成功发上链吗？下面这个文档要好好看的  https://docs.ton.org/develop/dapps/asset-processing/jettons (reply to 81879)

Aloys: 转的为什么还是ton呢，为啥不是usdt呢

swz: 请问要在 Mini App 中集成 TON Wallet 并使用 USDT 进行支付，需要怎么实现？大概是哪几个步骤。 目前 TON Wallet 已经集成到 Mini App ，就是支付这个环节还没调通。

wikig: 以前写的很挫的code  但是应该能用  https://github.com/Tonspay/Tonspay-webapp/blob/e8a0c14b1e671a4cf3ceb3496588a8a5890c294b/views/static/js/utils/deeplink.js#L1329 (reply to 81885)

Howard: 🎉 Tact v1.6.1 发布！   👉 [更新详情](https://www.npmjs.com/package/@tact-lang/compiler/v/1.6.1)    重点更新：   🛠 Bug 修复：   - 支持多个通配符函数参数。   - 修复结构体作为合约字段时 .toCell() 的调用问题。    🧰 标准库新增：   - 添加 `StateInit.hasSameBasechainAddress()`，高效检查地址匹配。   - 新增 `cashback()`，用于转发多余资金。   - 核心库实体添加文档注释。    🧳 其他改进：   - 内联合约加载函数，降低 gas 消耗。   - TypeScript 包装器支持退出代码双向映射。   - 生成的文件名不再添加 .code 后缀。    📥 立即升级：   - [完整更新日志](https://github.com/tact-lang/tact/releases/tag/v1.6.1)   - [升级指南](https://docs.tact-lang.org/book/compile/#upgrades)    工具支持更新：   - tact.vim 和 tact-sublime 已支持 v1.6.0 和 v1.6.1。   - Misti 静态分析器 更新至 v0.7.0，支持 Tact v1.6.x。    🚀 新工具测试：   - tact-language-server 开始 alpha 测试，支持 VSCode 及衍生编辑器。   👉 [加入测试](https://github.com/tact-lang/tact-language-server)    🍲 Tact 类型节奏（加速版）   ♨️ @tact_kitchen 来自 @ton_studio  Details: https://t.me/tondev_news/193

Aloys: 为什么 总是 显示 余额不足呢，明明有0.3个ton

Aloys: @andrew_cong

Andrew: 截个全图吧，描述具体一点问题，我也猜不到 (reply to 81896)

Aloys: 就是这串代码 jetton 钱包地址都是对的，发起usdt转账交易，钱包总是出现余额不足，钱包里的ton 还是充足的，他就是显示余额不足

Andrew: 那就是 mainnet 和 testnet 问题吧，你代码使用哪个网络？

Aloys: 这个key吗？用的主网

Aloys: @andrew_cong  郁闷了，急

Andrew: @xf_0502   你需要了解TEP-74: Jettons Standard 的原理才能完成 jetton 转账，然后再参考群友发的这个代码案例，急不来的。     - ⭐️ [TEP-74: Jettons Standard](https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md) (reply to 81886)

6666feile: @xf_0502 你们都没注意到区块浏览器里，如果转账0.00000001的ton如果能成功，为啥大家还要转0.0几个ton出来吗？ (reply to 80850)

Aloys: 我设0.05 也是 显示 这个余额不足

6666feile: 你用于notify的ton太多了

6666feile: 你写了toNano(0.1)

Aloys: 你的usdt的合约地址 能够将你发送者的ton钱包地址 转成jetton的钱包地址吗

6666feile: 这里不对，信我

Aloys: 这样 也是 不行的，显示余额不足

Aloys: @raphael233

6666feile: 你要发的是usdt吗？

Aloys: 对

6666feile: usdt的精度是6，toNano是按9位精度转的，你usdt有 0.01*10^9/10^6 个代币吗？

Aloys: 也就是 说 这个地方 要特别少，我目前 只有一个的话

Aloys: 这个转账的额度 也有限制把

6666feile: 群主说的意思是，其实你们要搞懂，每个字段存的是什么东西，你就能转账成功了。 怎么会有转账额度这种东西呢？转账额度不就是你账号上有多少usdt吗？

Aloys: 改成0.001了 就验证不通过了

Aloys: @raphael233  谢谢啦

Illia: What wallets do you use for developing on localnet (MyLocalTon)?

— 2025-03-06 —

EntropyKey: 大佬们，ton console里面的webhook订阅账户新的交易之后只收到了ton交易的推送，没有jetton_transfer的推送 怎么破

xin: 想问下大佬们 如何验证boc是否是有效的 我的boc为te6cckEBBAEAtgAB5YgAlD1yqVdk0qlpwQi8ulsjwDDo/YSx3APfjz1xH99JO/gDm0s7c///+Is+SELYAAAAjRuHZG1EjpvXp70cCbo1ai8k2PmCjjVR70AUffKMxqLxgL3rindPXUlGW81P7mFGYQdBzswl69r8cic9c5jYTgUBAgoOw8htAwIDAAAAZkIAW00HHut12f/NC/tW5Pn7E92ChiR2/Z5zNkK+oU6Tt7KYehIAAAAAAAAAAAAAAAAAAJtx9tM=

Andrew: 这个问题问 @tonapitech 吧 (reply to 81976)

Andrew: 解析一下，不报错就是有效的？ (reply to 81977)

xin: 官方的去解析转化为trasaction会报错

Andrew: let cells = Cell.fromBoc(   Buffer.from(     'te6cckEBBAEAtgAB5YgAlD1yqVdk0qlpwQi8ulsjwDDo/YSx3APfjz1xH99JO/gDm0s7c///+Is+SELYAAAAjRuHZG1EjpvXp70cCbo1ai8k2PmCjjVR70AUffKMxqLxgL3rindPXUlGW81P7mFGYQdBzswl69r8cic9c5jYTgUBAgoOw8htAwIDAAAAZkIAW00HHut12f/NC/tW5Pn7E92ChiR2/Z5zNkK+oU6Tt7KYehIAAAAAAAAAAAAAAAAAAJtx9tM=',     'base64',   ), );  console.info(cells);  这是一个 base64 格式的 boc 输出，是有效的，但是具体 TL-B 是什么不知道，我也无法解析 (reply to 81981)

xin: 是可以成功转换为cell的，但是无法转换为trasaction；而且是用api或者tonlib去获取最近的交易，也不知道具体去如何对比

Andrew: 这个消息是标准的消息吗？ 根据它的 TL-B 定义你一层一层解析看看，不排除 java SDK out of date (reply to 81992)

Hui: 感谢大佬的回复，麻烦在在想问一下各位大佬，是一共有4个分片是固定的吗？所以如果我想扫描全部的tx，是否是扫描这4个分片的每个blockId的交易就可以呢 (reply to 81769)

Leo: 对的，分片会根据负载自动分裂/合并，所以不固定

Tom: 请问你们有没有遇到这个问题：A连接钱包之后，B也连接同一个钱包，则当A发起交易的时候会出错，提示交易没发送。有什么办法可以监听这个事件吗？

Andrew: 没有看懂你的问题 ，AB 分别是什么 (reply to 82036)

c: 他的意思是 同一个ton 钱包 两个用户去连接 A用户先连接的钱包正常能发起交易 然后B用户再去连接这个钱包 A用户就在那个钱包不能交易了 能跳转到钱包 然后没有那个确认交易的按钮 (reply to 82038)

Andrew: 把同一套助记词导入到 A，B 两个不同钱包？ (reply to 82039)

c: 是用 telegram ton-connect 去连接 tonkeeper 的钱包 (reply to 82041)

c: 然后发起tonkeeper 的交易 一个用户连接正常 交易正常 当另一个用户 也去连接这个钱包 第一个连接这个钱包的人 就不能发起交易了

— 2025-03-07 —

DaDa: https://x.com/0x99DaDa/status/1897808236109349154 (forwarded from DaDa)

Andrew: TON 优化路线图  TON Core 在 1 月份发布 2025 上半年路线图后，刚刚又发布了如下 2 篇文章，分别详细介绍了 TON 接下来 1 年左右的性能优化细节和对 TON 侧链的执行策略。在各种组合拳下，相信TON 生态会越来越丰富和精彩。  - TON 优化路线图 - TON/TVM 侧链概述

Sol: 你好！ 如果你在 TON 生态系统中开发项目，并遇到技术问题或复杂的任务，欢迎交流。我们有智能合约、Telegram Mini Apps 和其他 TON 相关开发经验。如果需要帮助，可以随时联系我，我们可以一起讨论解决方案。  希望你的项目成功发展！🚀

yan: 电报 有没有人在开发麻将程序

wikig: 什么类型的 (reply to 82090)

yan: 微信里面的那种手机麻将，有玩过吗

yan: 不知道在电报 开发一个要多少钱？

wikig: 这种类型的？

yan: 对的

wikig: 这边直接自己编译一份Web版本 (reply to 82094)

yan: 好，我来看看，谢谢啦

wikig: https://github.com/JCGit/mahjong-1

wikig: 然后配套接一套tonconnectUI做支付系统 (reply to 82098)

wikig: 再折腾个热钱包充值系统（balance管理）就行了

yan: 恩，我先看看

Yang: 挖，你開源出來喔！太帥了 (reply to 82099)

wikig: 只是随手找的hhh (reply to 82103)

wikig: 因为这类东西太多了来着（

丶尐陽ご: q x

丶尐陽ご: 配置

wikig: 提问，tonconnectUI有办法调Wallet-bot 发起testnet交易吗？  （我记得之前不行，现在出解决方案了吗）

wikig: 我又回去看了下，发现tonconnectUI一年前（四月）的issues还是没人管，遂拷问下（ (reply to 82118)

Andrew: bot 中使用 ton connect 目前这个方案已经不推荐了，不过这里有一个代码案例，你可以看看   https://github.com/memeclublabs/memeclub_bot (reply to 82118)

wikig: 或者TMA种，是否支持发起testnet交易？ (reply to 82121)

Andrew: RPC API 配置 testnet 不就好了吗？ (reply to 82122)

liam: 用@tonconnect/ui-react  写的mini-app 想实现 ton wallet转USDT，这样写的代码，报错  Verify Transaction。转TON是没有问题的。

liam: const body = beginCell()       .storeUint(0xf8a7ea5, 32) // op transfer       .storeUint(0, 64) // queryId       .storeCoins(toNano("0.1")) // deposit_amount       .storeAddress(         Address.parse("XXX"),       ) // receiver address       .storeAddress(Address.parse("XXX")) //response_adress - address nhận phí GD thừa       .storeCoins(toNano("0.05")) // forward_ton_amount       .storeMaybeRef(beginCell().storeStringTail("something").endCell()) // forward_payload_amount if receiver is a smart contract       .storeMaybeRef(null)       .endCell();          const transaction = {       validUntil: Math.floor(Date.now() / 1000) + 300,       messages: [         {           address: USDT_CONTRACT_ADDRESS, // Your USDT jetton wallet address           amount: toNano("0.15").toString(), // feee           payload: body.toBoc({ idx: false }).toString("base64"), // payload with jetton transfer and comment body         },       ],     };   try {       const response = await tonConnectUI.sendTransaction(transaction);       console.log("交易已发送:", response);        const resData = await decodeBoc(response.boc);       console.log("解码后的数据：", resData);        listenForTransactionConfirmation(resData);     } catch (error) {       Toast.show({         icon: "fail",         content: ${i18n.t("toastMsg4")},         position: "top",       });       console.error("交易失败:", error);     }

liam: const jettonMasterAddress = Address.parse(USDT_CONTRACT_ADDRESS);  //      const destinationAddress = Address.parse(TONWALLET_PAYADDRESS); // 接收地址      const userAddress = Address.parse(tonAddress)     const jettonMaster = TON_CLIENT.open(JettonMaster.create(jettonMasterAddress))     const jettonWallet = await jettonMaster.getWalletAddress(userAddress);     const body = beginCell()       .storeUint(0xf8a7ea5, 32)       .storeUint(0, 64)       .storeCoins(toNano("0.01")) // amount           .storeAddress(destinationAddress) // to address              .storeAddress(destinationAddress) // response address           .storeMaybeRef(null)       .storeCoins(toNano("0.03"))       .storeMaybeRef(null)       .endCell();      const transaction = {       validUntil: Math.floor(Date.now() / 1000) + 60,       messages: [         {           address: jettonWallet.toString(), // sender jetton wallet                  amount: toNano("0.5").toString(), // for gas fees, excess will be returned                     payload: body.toBoc().toString("base64") // payload with jetton transfer and comment body                 }       ]     }   用react 写的转USDT 代码，余额明明有1TON，但还是提示 这个，有哪位大佬知道是为什么吗

— 2025-03-08 —

Aloys: 新建的ton空间钱包，里面有充足的ton，在首次没有usdt的情况下，生成的转账界面，会发现，转出一个新的地址，而且转的是ton，这种情况是什么原因，有没有大佬解答一下，谢谢啦

Leo: 描述的有点抽象，怎么生成的，长啥样，具体有啥不对

Aloys: 就是 在tg里面创建了一个新的ton钱包，我给里面转了一定量的ton，为了满足gas费的需求，我的代码是转jetton usdt的，然后，拉起转账给一个用户转usdt，gas费是充足的，生成的转账界面，变成了转ton的，而且这个转出的地址，不知道是谁的，是新生成的，关键变成了转ton的，因为我的usdt是零，不应该显示是余额不足的界面吗，你看看是什么原因

EntropyKey: 这个确实有点疑问，好像是转u的时候jetton地址未激活，然后交易就到了合约地址里去了

2: 你说的是转usdt会转到jetton wallet里面吧？

— 2025-03-09 —

liam: const tonAddress = useTonAddress() const jettonMasterAddress = Address.parse("EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs");      const destinationAddress = Address.parse("接收地址");       const userAddress = Address.parse(tonAddress)     const jettonMaster = TON_CLIENT.open(JettonMaster.create(jettonMasterAddress))     const jettonWallet = await jettonMaster.getWalletAddress(userAddress);     const jettonWalletContract = TON_CLIENT.open(JettonWallet.create(jettonWallet)); const body = beginCell()       .storeUint(0xf8a7ea5, 32)       .storeUint(0, 64)       .storeCoins(toNano("0.01")) // amount           .storeAddress(destinationAddress) // to address              .storeAddress(jettonWallet) // response address           .storeBit(false)       .storeCoins(toNano("0.05"))       .storeBit(false)        .endCell();      console.log("jettonWallet.toString():",jettonWallet.toString());        const transaction = {       validUntil: Math.floor(Date.now() / 1000) + 60,       messages: [         {           address: jettonWallet.toString(), // sender jetton wallet                  // address: userAddress.toString(),           amount: toNano("0.1").toString(), // for gas fees, excess will be returned                     payload: body.toBoc().toString("base64") // payload with jetton transfer and comment body                 }       ]     }   用@tonconnect/ui-react 转jetton usdt，代码是这样的，能成功拉起ton wallt，但提示 ton 不足 (reply to 82250)

liam: 有大佬知道是什么原因吗 (reply to 82251)

— 2025-03-10 —

Leo: 同样代码试试别的钱包能不能用？

muyi: 合约内要怎么读取payload的值呢，有大佬懂吗

Dennis |DigiFinex: 有个项目的代币需要得到TON官方的验证，发了邮件一直没有回复，还有其他办法吗？项目很着急@holds @Yuki_Web3_HK @tsivarev @andrew_cong

Andrew: TON 基金会官方没有代币验证服务。  你是说 Tonkeeper 这个第三方钱包吗？ (reply to 82326)

Dennis |DigiFinex: 是的，https://github.com/tonkeeper/ton-assets/pull/2820  那这种要怎样才能得到验证呢？ (reply to 82329)

Andrew: 具体向 tonkeeper 咨询，这个不影响代币功能。 (reply to 82331)

Dennis |DigiFinex: 好的，谢谢 (reply to 82333)

Green: Ton smart contract has event log like solidity?

— 2025-03-11 —

EntropyKey: twa唤起@wallet钱包支付有时候会被关闭twa窗口，这是怎么回事，有办法避免吗

wikig: IOS？我记得Android半年前已经修了这个问题了 (reply to 82385)

EntropyKey: pc桌面端是有这个问题的

wikig: PC似乎是的。 也是老问题了老生常谈一直没修 (reply to 82396)

EntropyKey: 好吧，感谢告知 (reply to 82397)

wikig: 但是我记得。pc的web端 /a 版本是修复了这个问题了 (reply to 82398)

EntropyKey: 用户使用哪个版本不可控呢

wikig: 那倒是

wikig: 但是考虑到好多开源客户端

wikig: 目前TG确实没办法考虑多端全覆盖适配问题

wikig: 将就着用吧

EntropyKey: 👍

Kenny Chan: 大家知道是怎样领取TON Nest lv1 lv2 NFT吗？  我找了半天，都没发现怎样mint / airdrop TON Nest lv1 lv2 NFT...

Katiya｜TON: 為 DeDust 構建數據儀表板，贏取高達 $3000 獎金！  歡迎參加我們的首場 數據競賽，我們將獎勵那些幫助提升 TON 數據透明度 的開發者。  挑戰： 在 Dune 上為 DeDust 構建數據儀表板，並贏取獎金： 🥇 第一名：$3000 🥈 第二名：$2000 🥉 第三名：$1000  📅 截止日期：3 月 24 日  📖 詳細規則與指南 👉 [https://docs.google.com/document/d/1gg0njFvDzFoudrq8Kh1Om_J-BsQHGasXeHIa4_5oTcY/edit?tab=t.0#heading=h.ps32yz45ycxe] 👈 （內含 Onchain 調查員 的額外獎勵任務）  有問題？歡迎在社群提問 👉 @tondatachat

Katiya｜TON: 欢迎大家参加比赛～～～🫡

WhatsApp协议云控: 我想找官方客服

— 2025-03-12 —

Andrew: 可以私我或者直接群里咨询 (reply to 82431)

xin: 想问下java大佬们，jetton主合约地址已存在情况下，初始化JettonWallet后获取钱包余额是失败的 是啥原因 demo里面是初始化部署 而现在是要初始化已有的jetton合约钱包

Andrew: 在浏览器输入地址再调用 get wallet data 确认过了吗 (reply to 82453)

xin: 这样吗 这个代币地址是没问题的

Key - NEVER DM FIRST: 老师们，现在 miniapp 不能开发其他链的去中心应用了么？

Yuki | TON: 对的，只能开发TON链的，不然会被ban哟 (reply to 82458)

Key - NEVER DM FIRST: 去中心化钱包也不行吧？

Key - NEVER DM FIRST: 我之前貌似就看到过一个被 ban 的

Yuki | TON: 接ton connect就行 (reply to 82460)

Yuki | TON: 新闻出来陆续很多被ban，还会有更多🥲 (reply to 82461)

Key - NEVER DM FIRST: 如果在 TG 做个去中心化钱包呢

wikig: 做哪条链的 (reply to 82464)

ieurjcbei345whs: Hello 有大佬吗

ieurjcbei345whs: 这个规则 对现在已经上线的mini app有影响吗

ieurjcbei345whs: 不需要用到钱包的 只是用到telegram登录的 没啥影响吧 然后数据也不需要上链的

Andrew: 具体细则看这个   https://core.telegram.org/bots/blockchain-guidelines (reply to 82469)

Dennis: 为什么会出现这种suspicious 情况？ (reply to 82476)

Andrew: 因为 Tonkeeper 觉得这些交易没什么价值，所以怀疑是 Scams，这是 Tonkeeper 的主观决策。  https://tonkeeper.helpscoutdocs.com/article/123-how-to-recognize-and-avoid-scams (reply to 82477)

Katiya｜TON: 💎《TON 生态开发公开课 & 编程挑戰赛 2025》 第一課正式開課🚀  🚀 Telegram 月活超過 10 億， $TON 作為其官方支持的區塊鏈，正在迅速崛起！  但 TG Bot & Mini App 開發門檻高， $TON 的獨特架構讓人難以上手？ 別擔心！我們 Dev Rel Lead Andrew 為開發者準備了一系列 深入淺出 的直播課程，手把手帶你掌握 Telegram & TON 生態開發技能！  📅 課程時間：3 月 17 日 20:00 (UTC+8) 📡 直播平台：請關注 X 帳號 @tonsocietyhk 📲 直播連結 將在生成後更新，請在下方點擊報名！ 🎖 所有報名用戶將獲得 Build SBT，課程結束後還有 Coding Challenge編程挑戰賽，贏取一整年 Telegram Premium 會員！ 🔗 立即報名: https://t.me/theontonbot/event?startapp=0b2c15f1-ec2e-4702-bd11-4acc7a220797  💡 課程內容： 📌 TG Bot 開發指南 – 快速搭建 Telegram 機器人 📌 TG Mini App 開發 – 掌握 Telegram 小程序生態 📌 TON 基礎 & 智能合約 – 消息模式、API & SDK、Bag of Cells 📌 Jetton & NFT –  真實 USDT 案例，全流程應用集成  🪐感謝社區夥伴： BeWater, HackQuest, OpenBuild (forwarded from TON Society Hong Kong Announcements)

Katiya｜TON: 下週一晚上的開發者公開課，歡迎大家報名參加！第一課主題《TG Bot開發指南》🚀

Dennis: 那应该如何消除这种情况？ (reply to 82479)

GO: 是官方的不？ (reply to 82482)

Katiya｜TON: 是的哦！！是我们dev rel lead @andrew_cong 亲自手把手教课 (reply to 82489)

— 2025-03-13 —

Randolph: 这样事报名成功了吗

— 2025-03-14 —

s: 请问小程序里面接入Ton钱包，用户和小程序应该怎么收付款呢

Andrew: 收付款的本质，就是用户完成一次 转账(transfer) (reply to 82597)

ZombHunt: Fragment的身份认证是不是国内信息没法正常认证？我用国内身份证和其他国内信息进行验证后就把我ban了，也不让我进行二次验证，发送邮件也不曾回复

Z: 您好，我自己用tact写了一个售卖合约，一些信息用emit打印出来，我计划是用Go来检索这些emit存到数据库中，请问这样合理吗？

Z: 就比如用户要通过Token在合约上购买一个东西，实际上是用户主动发起一笔转账，目的地是合约，然后合约通过 TokenNotification 来处理购买后合约上需要执行的逻辑，对吗？ (reply to 82601)

Andrew: Fragment KYC 的流程目前正在优化。这个群里不解决 Fragment 相关问题。 (reply to 82606)

Andrew: 不推荐用 emit 来处理业务逻辑。 你根据 msg 对应的 transaction 结果来处理业务逻辑。 (reply to 82607)

Z: 你的意思是我需要检索的是每个message对应的transaction，然后把检索信息放到后端数据库。 这样的话 1、不推荐的理由是什么能说明下吗？不可靠？还是耗费gas不值得？ 2、只有交易的to地址是固定的（就是我的合约地址），那应该不能用wss订阅，需要扫取所有的块对吧 3、如果只根据交易结果来处理，每一笔交易在合约内部生成的一些数据就只能通过读合约的方式获取。比如每个购买者给一个编号这种，这样会不会不太合理？ (reply to 82611)

Andrew: 你的支付是用 TON 还是 Jetton (USDT 或其他自定义 Tonken ）?    根据交易来获取唯一的 id 可以看这个  https://github.com/ton-builders/open-backend/blob/main/src/index.ts (reply to 82612)

Z: 使用USDT，不用TON (reply to 82614)

Andrew: USDT 符合标准的 Jetton 协议格式，每次转账的消息结构都是一样的，根据这个固定结构对应的交易树判断就好 (reply to 82615)

Z: 嗯。。我就是不太确定这种方式对吗？我再叙述下问题，麻烦解答下： 1、用户购买时直接转账到合约，合约会在 TokenNotification 里做一些判断，通过后会在购买合约上做一些购买后的逻辑处理 2、使用emit在链上留下一些想要留下的信息，使用GO来检索。如果不推荐emit，原因是什么？仅仅解析一笔交易中的数据不够还需要合约上自己存储的数据怎么办？

Andrew: 如果你只是判断一个 USDT 转账是否成功，直接根据第一个外部消息的msg_hash 来查询整个消息链条，然后判断是否处理成功就好。 TokenNotification 这个是可以忽略的消息，异常也没关系。 (reply to 82617)

ZombHunt: 那目前应该去哪里咨询fragment相关问题呢？没有查到对应的群组 (reply to 82610)

Andrew: 如图，只要判断 Jetton 转账中前 3 个消息的交易是成功就好。 后面 2 个可以忽略。 (reply to 82617)

Z: A- B- C的msg成功与否只能外部来判断吧？因为转账成功后需要在合约上记录一些东西，所以我采用了 TokenNotification 这个方法来处理转账成功后的购买逻辑。如果采用您说的方法，那么就没有办法在确定合约收到Token后立即处理购买逻辑了，你有推荐的相似的tact项目我可以参考吗？

— 2025-03-16 —

Z: 我用blueprint部署合约到测试网时，出现了一个错误： AxiosError: Request failed with status code 422  请问这个可能的原因是什么？

Andrew: HTTP 错误码 4 开头的，一般是客户端问题，5 开头的是服务器异常。  422 是参数或者 head 之类的错误 (reply to 82765)

Poseidon海王: 有前端的技术员吗

Z: client, err := tonapi.New(tonapi.WithToken("")) //API Token  if err != nil {   log.Fatalf("Failed to create client: %v", err)  }  我在用tonapi-go时，发现默认连接的是主网，请问可以切换到测试网吗？

— 2025-03-17 —

Andrew: 是用的 tonlib-go 吗，代码中不是有tonlib.config.json.example 吗 (reply to 82809)

Evan: 发公司招聘链接了

Z: 不，用的tonapi-go (reply to 82820)

Z: 我想通过交易hash获取交易详情，然后从交易里解析出message，选择了tonapi-go

Katiya｜TON: 💎《TON 生态开发公开课 & 编程挑戰赛 2025》 🚀第一課今晚開課！今晚不见不散，记得准时来收听！  📅 課程時間：3 月 17 日 20:00 (UTC+8)  🎙️直播平台：請關注 X 帳號 @tonsocietyhk 🏆 所有報名用戶將獲得 Build SBT，課程結束後還有 Coding Challenge編程挑戰賽，贏取一整年 Telegram Premium 會員！   🔗立即報名: https://t.me/theontonbot/event?startapp=0b2c15f1-ec2e-4702-bd11-4acc7a220797  💡 課程內容： 📌 TG Bot 开发指南 – 快速搭建 Telegram 机器人 📌 TG Mini App 开发 – 掌握 Telegram 小程序生态 📌 TON 基础 & 智能合约 – 消息模式、API & SDK、Bag of Cell 📌 Jetton & NFT – 真实 USDT 案例，全流程应用集成 (forwarded from TON Society Hong Kong Announcements)

Katiya｜TON: 欢迎大家今晚八点来收听哦，第一节课的内容是TG Bot开发指南！

Traffic Builder: 1大家一般如何查询类似catizen之类的jetton的合约资料？我想实现catizen的充值和提现，但是没有找到相关的文档

Randolph: 小板凳和笔记本已经准备好😀

Randolph: 二维码要扫吗

Katiya｜TON: 💎《TON 生态开发公开课 & 编程挑戰赛 2025》 第一課正式開課🚀  🎖 所有報名用戶將獲得 Build SBT，課程結束後還有 Coding Challenge編程挑戰賽，贏取一整年 Telegram Premium 會員！  💡 第一课課程內容： 📌 TG Bot 開發指南 – 快速搭建 Telegram 機器人  🔗点击加入直播链接：https://x.com/i/broadcasts/1OwxWXmldwWKQ

Katiya｜TON: 可以扫，之后会有sbt空投 (reply to 82845)

atsolutionyoung: 請問andrew的那個文檔有連結嗎

Katiya｜TON: https://ton-org.notion.site/I-TG-Bot-1b25274bd2cf80bfac10ecac014d34f5 在这里～～课后作业也在里面～ (reply to 82852)

Tom: 二维码看不了了

Tom: 请问电脑版的TG的miniapp进入小程序之后能不能锁定分辨率的？默认进去的视窗大小跟我开发分辨率不太一样

Andrew: 最好还是自适应布局吧 (reply to 82857)

atsolutionyoung: 太好了！ ton to the moon 🌛

atsolutionyoung: 有youtube鏈接嗎

atsolutionyoung: 你們的頻道在哪

Andrew: 等主持人后续上传

Tom: 自适应布局有做，但是有时候不同人的手机分辨率高度不同，看到的效果不一样，就跟在电脑tg上可以拖动窗口大小来适应，但是真的要拉太长了又是看上去ui不对了。所以才想知道有没有可以固定分辨率的办法。 (reply to 82858)

yin: java 如何通过助记词获取地址 我日他妈 就是不对 谁知道我哪里写错了 String mnemonic = " "; List<String> mnemonicList = Arrays.asList(mnemonic.split(" "));   // Convert seed to key pair Pair keyPair = Mnemonic.toKeyPair(mnemonicList);  // Print public and secret keys System.out.println("Public Key: " + bytesToHex(keyPair.getPublicKey())); System.out.println("Secret Key: " + bytesToHex(keyPair.getSecretKey()));  // Derive TON address from public key String tonAddress = Address.of(keyPair.getPublicKey()).toString(true); System.out.println("TON Address: " + tonAddress);

yin: 有谁知道 宝宝救命 还在加班

yin: java 如何通过助记词获取ton地址 用官方tronlib 谁知道 救命 还在加班

yin: 哭死

Howard: TS 代碼能幫助到你嗎?  import { TonClient4, WalletContractV4} from "@ton/ton";      let keyPair = await mnemonicToPrivateKey(mnemonics.split(" "));     let secretKey = keyPair.secretKey;     let workchain = 0;     let deployer_wallet = WalletContractV4.create({ workchain, publicKey: keyPair.publicKey });     let wallet_contract = client4.open(deployer_wallet); (reply to 82875)

wiwi: ton address 有很多版本你要先確定你要那一版以及 bounceable, testnet 前後都會不同 你要去看轉出來的 hex 才是最準確的  https://ton.org/address/ 可以從這邊看 (reply to 82875)

yin: legal winner thank year wave sausage worth useful legal winner thank yellow 这是bitget 生成出来是 UQBrw0MOZyO5dPbuh-iY3uGvZ63R9xc_0a7ddgwKUByq_UWB 你们验证下 看看是不是这个

yin: HEX: 0:6bc3430e6723b974f6ee87e898dee1af67add1f7173fd1aedd760c0a501caafd 这个我java怎么做

yin: 使用tronlib java 生成出来一都是EF开头 完全不懂 救命

Kenny Chan: 谢谢katiya，我再重温一下！ (reply to 82854)

— 2025-03-18 —

Andrew: TON 生态的钱包基本都是 24 个助记词（对应 256 位随机数），你这个 bitget 是用 12 个单词的（随机数 128 位）助记词吗？ (reply to 82885)

Andrew: TON 里面是没有 EOA 的概念的，所有地址都是合约账户地址。   你的 Java 代码中，想通过 PublicKey 来生成地址肯定是无效的，TON 的钱包地址只能从钱包合约上获取。 (reply to 82875)

Andrew: 关于 TG BOT API，可以通过如下 Postman Telegram Bot API 集合来体验各个 API 的参数和功能： https://www.postman.com/aviation-physicist-17508953/ton-master/request/q2s55d6/

GO: 什么时候上传完，昨晚有事，错过了 (reply to 82862)

Andrew: 你也可以在 Twitter 上看回放的  https://x.com/tonsocietyhk/status/1901604017282961589 (reply to 82917)

Katiya｜TON: $TON 编程挑战 & 课后作业💎🔥  相信在聽完昨天的開發直播課程，大家對於如何開發一個TG Bot有了清晰的答案💎Andrew 為大家準備了課後作業巩固昨晚学习到的知识，也是一次编程挑战赛。  🏆我们会挑選出30名獲勝者贏取Telegram會員： 🥇1-3名：1年TG會員 🥈4-10名：半年TG會員 🥉11-30名：1個月TG會員  🔗比賽題目（直接fork參與）：https://github.com/ton-builders/ton-coding-challenge-25-round-1/blob/main/README.md 🔗昨晚直播課程文檔：https://ton-org.notion.site/I-TG-Bot-1b25274bd2cf80bfac10ecac014d34f5 🔗昨晚直播連結會放：https://x.com/i/broadcasts/1OwxWXmldwWKQ (forwarded from TON Society Hong Kong Announcements)

Katiya｜TON: 來參加編程比賽&課後作業了喔！

yin: TON 396' Ed25519 智能合约代码哈希 + 公钥   我问了deepseek 还得有合约代码 官方又没有demo 或者有 但是我不知到在哪里找到

yin: 有那个大神知道怎么做

Green: Hi guys, anybody knows this means on tonviewer explorer?

wikig: 是不是链ID的问题？ (reply to 82888)

p: ton 的USDT流通量怎么样？用的人多吗？

Ben🚴🏻: @Katiya74 请问下一次直播什么时候?

Katiya｜TON: 暂定3.31日～留两周时间做课后作业参加编程比赛～ (reply to 82954)

Ben🚴🏻: 好的,谢谢,我主要关注的Ton相关的内容 (reply to 82955)

Howard: Comment MEssage? (reply to 82935)

树: 大家晚上呀！

树: 学ton的开发要不要专门去学俄语啊？

树: 还是说英语就够了？

— 2025-03-19 —

s: 小伙伴们，请教一下在代码里添加助记词时，这个apikey是可以不用填写的吗

熊猫头: 对 不填有速率限制

s: 这个apikey在哪里获取呢

熊猫头: https://docs.ton.org/v3/guidelines/dapps/apis-sdks/api-keys (reply to 83022)

s: 好的我去看看，谢谢啦

6666feile: tonconnectui有加tp钱包加成功的吗？怎么加？

Yuki | TON: 赶超tron ing (reply to 82951)

Andrew: 首先需要 TP 钱包自己接入 TON Connect，然后小程序上使用TON Connect 才可见 TP 钱包 (reply to 83028)

6666feile: 他们说支持ton钱包了，还没有接入ton connect吗？

u7: 大家好 想请问我应该如何计算从A地址转出一笔jetton后实际花费的矿工费数量呢

Andrew: 实际费用没有办法精确计算，都是给一个大一点的 gas fee，然后多退少错 (reply to 83041)

u7: 那請問有辦法在交易完成之後從toncenter api獲取相關的信息後在計算嗎 (reply to 83049)

Andrew: 比如通过 /api/v3/traces 得到交易执行细节，肯定可以算，但是非常复杂 (reply to 83050)

— 2025-03-20 —

Andrew: 🎁  一文了解最近很火的 Telegram Gifts   https://ton-org.notion.site/Telegram-Stickers-Gifts-NFT-1bb5274bd2cf803f8463fab6224fff49

Andrew: 问一下大家 怎么才能在java上面生成一个ton的钱包？ 谢谢

Andrew: 你这问题不好回答，一般上是你尝试开发遇到问题，大家可能帮你看看异常。 (reply to 83128)

猎庄壹号: tg 怎么投放广告

猎庄壹号: 有知道的朋友吗

猎庄壹号: 转化怎么样

Traffic Builder: 1我这边有量，需要DM

猎庄壹号: 1

Andrew: 我就是想用java生成一个ton钱包 然后我找了好多库都不行 (reply to 83130)

Andrew: ton4j不太可行

Andrew: 是说，使用 Java SDK 部署一个 TON 钱包合约吗？ (reply to 83137)

Andrew: 还是说，使用 Java SDK 根据 TON 钱包合约的代码，生成对应的钱包合约地址？

Andrew: 生成对应的钱包合约地址 tonlib的初始化一直不对 (reply to 83140)

Andrew: error creating tonlib instance: Invalid library name

Andrew: 如 readme， JNA 允许 Java 调用本地的函数和库，比如 Windows 的 DLL 或 Linux 的 .so 文件，你需要自己下载 ton 的文件放到对应的地方

— 2025-03-21 —

ZombHunt: 我这边新项目也上线了，我也需要广告投放相关服务，麻烦回下DM (reply to 83135)

Lucy: 有没有兴趣一起搞个小游戏的大佬

Lucy: 策划美工都有

TeIegarm: 这么多需求吗

— 2025-03-22 —

Martin Suger | Work: 开发人员和设计师呢？ 我们需要你们！ 详情请发送电子邮件至 🙏🏻 (C++/JS/TS)

Katiya｜TON: Timeless pitching session已经go live!  🔗可以来这里看直播，欢迎加入: https://x.com/i/broadcasts/1ynKOleDpnWGR (forwarded from TON Society Hong Kong Announcements)

Kenny Chan: Amazing pitching night!👍👍👍

Marcello: Hi guys, did anyone experienced errors 500,502,503 with toncenter api/ton console?  Can you help me to find the causes of those issues?

— 2025-03-24 —

Terry: Hi (reply to 83411)

Andrew: 参加代码测验，赢取 TG 会员，共 30 个名额（12个月，6个月，1 个月），本周就要开奖了，抓紧时间。  Fork 下面的仓库，回答问题填写相关信息，发起 Pull Request 等待发放会员  https://github.com/ton-builders/ton-coding-challenge-25-round-1

c: 有没有大佬知道 这是怎么实现的

Andrew: 具体一点，你是指什么？ (reply to 83463)

atsolutionyoung: 請問有第二課嗎

Vage: 祝各位天朝的朋友节日快乐！ 我的名字是Vahe，我和我的合作伙伴在TON生态系统中创建了我们的第一个产品。 经过5个月的工作，我们取得了优异的成绩。 我们已经滚动了Dex，并通过我们的游戏将项目的100％代币分发给我们的社区。 我们已经分发了65％的sap，令牌率在上市日的价格之内。 我邀请我们的中国兄弟姐妹合作。

Andrew: 下周一第二课，关于 Mini App 开发 (reply to 83483)

— 2025-03-25 —

EntropyKey: 有谁有验证webapp initData的hash代码吗，加密结果总是比对不上

Andrew: 使用这个  https://docs.telegram-mini-apps.com/packages/telegram-apps-init-data-node (reply to 83532)

EntropyKey: 嗯嗯，感谢回复，我研究下

c: 就是我怎么发起交易能够实现这个界面的效果 给jetton 钱包转ton 嘛 怎么能接收到您的地址 这个是怎么出来的 (reply to 83470)

Andrew: 文档的第二章节的第8 小节 8、DApp 集成  http://tondevdoc.xyz/ (reply to 83542)

c: ok 多谢 (reply to 83543)

X RAY 🦴️️️️: 有没有招前端开发的 可以联系 🙏

Andrew: 🔨 TON Connect SDK Update  We're excited to announce a new release of the TON Connect SDK with significant enhancements for dApp developers.  We kindly request all dapp developers to update to the latest version to ensure optimal performance and user experience.  👥 @tonconnect/{sdk,ui,ui-react}   • New wallet feature requirements API   • Extra currencies in transactions   • React 19 compatibility  📁 New package versions   • @tonconnect/protocol 2.2.7   • @tonconnect/sdk 3.1.0   • @tonconnect/ui 2.1.0   • @tonconnect/ui-react 2.1.0  ⬇️ To update, run npm install @tonconnect/ui-react@latest or npm install @tonconnect/ui@latest  💡 To learn more, visit the GitHub page at https://github.com/ton-connect/sdk.  💬 Encountered issues? Please report them on GitHub at https://github.com/ton-connect/sdk/issues.  ⭐️ Special thanks to the Tonkeeper team for their contribution to this release!  🎁 Your feedback and usage examples are crucial. Share your experiences to help us evolve the SDK! (forwarded from TonTech)

Alex: 群里有人用过 ton-http-api吗？

— 2025-03-26 —

NeiroDoge: 请问这个body怎么解码啊  base64解码后还是乱码

NeiroDoge: 有大哥搞过这个吗  我用的java (reply to 83604)

Andrew: 你首先要理解，什么是 BoC https://docs.ton.org/v3/documentation/data-formats/tlb/cell-boc  然后看这个 demo  https://github.com/ton-builders/open-backend/blob/main/src/cell-decode.ts   https://github.com/ton-builders/open-backend/blob/main/src/cell-encode.ts (reply to 83604)

NeiroDoge: 好的  我看看

Traffic Builder: 1频道里的Ton提现容易吗？

Cryptosiz: Yes (reply to 83618)

Andrew: TON Studio 正在招聘 Senior Backend Developer，详见下面JD，欢迎投递简历！   https://jobs.ton.org/companies/ton-studio/jobs/47721710-senior-backend-developer

Katiya｜TON: 🚨 TON x elizaOS AI 懸賞計劃 – 第二階段正式開啟！  🔥 第一階段：TON AI 插件 – 已完成 ✅ 🔥 第二階段：漏洞懸賞 – 現已開放 TON 的 AI 插件現已能與 DeFi 互動並執行交易。你的任務？測試它、發現漏洞並獲得獎勵！  💰 最優秀的漏洞回報者將贏得特別獎勵！  ⏰ 截止日期：2025 年 3 月 30 日  🔗 詳情查看：https://github.com/elizaos-plugins/plugin-ton/blob/main/BUG-BOUNTY.md (forwarded from TON Society Hong Kong Announcements)

Katiya｜TON: 第二期悬赏计划来啦，欢迎参加～ (reply to 83637)

s: 友友们，请问TG上的钱包默认就是Ton钱包吗

s: 小程序里接了Ton钱包后，能用USDT支付吗

Andrew: 能，你直接尝试，有具体问题再问 (reply to 83646)

s: 有具体一点的支付流程吗

s: 现在对接之后感觉都是默认用ton，没有USDT的选择

Cyber: 可以的

Cyber: 用ton比较方便

— 2025-03-27 —

GO: Mini app 我看了，都是竖屏的。 谁有横屏的，推荐给我，我想试玩一下

Andrew: 最新的 SDK 是加入了lockOrientation 方法，然后判断横屏是用这个 @media (orientation: landscape)  吧？  https://stackoverflow.com/questions/79414059/how-to-run-telegram-mini-app-in-full-screen-landscape-mode (reply to 83700)

Cyber: nextjs,golang,ton/eth需要吗🥸 (reply to 83704)

GO: 谢谢，下来我试试 (reply to 83701)

— 2025-03-28 —

NeiroDoge: 请问java中怎么判断这笔交易是USDT还是TON呢？我测试了两笔第一笔是1USDT，第二笔是1.34863TON，这个消息里我看并没有token类型相关的字段，我解析的时候怎么知道是USDT还是TON呢

NeiroDoge: 从结果来看ton需要formatNanoValue一下，USDT看起来是不需要的，但是我怎么知道这笔交易是USDT还是TON呢

NeiroDoge: @andrew_cong 感谢大佬送的礼物     上次那个body解析的问题经过你的提点已经解决了，能帮忙看下这个token类型的问题吗

Andrew: 今天会发放 TON Coding Challenge 第一轮的奖品 Telegram Premium，同时也会给活跃群友送上 3 个月会员，希望大家多多参与技术讨论和答疑！🙋‍♂️

Andrew: 你先试着在 tonviewer 上看消息结构有什么不同，找出规律。 如果还有问题，我稍后回来帮你看。 (reply to 83798)

Leo: 感谢Andrew，刚看到还以为是骗子🤣

Randolph: 大佬，第二课什么开始呀

EntropyKey: 感谢榜一大哥送来的高级会员👍

Aloys: 感谢榜一大哥送来的高级会员👍

Leo: 好像说是下周一 (reply to 83804)

NeiroDoge: 好的 谢谢  我看看 (reply to 83802)

Cyber: cool,amazing ,thank you andrew

Cyber: will you guys go to hongkong at april 11?

Cyber: telegram games on ton meetup

6666feile: 感谢 感谢榜一大哥送来的高级会员👍 (reply to 83801)

Jack: tonlib-rs 大佬帮看下问题 转账ton失败

Katiya｜TON: 💎《TON 生态开发公开课 & 编程挑戰赛 2025》 🚀第2課下周一開課！  📅 課程時間：3 月 31 日 20:00 (UTC+8) 🎙️直播平台：請關注 X 帳號@ tonsocietyhk  🏆 所有参加用戶將獲得 SBT，密码会在直播间公布；課程結束後還有 Coding Challenge編程挑戰賽，贏取一整年 Telegram Premium 會員！ 🔗SBT链接: https://t.me/theontonbot/event?startapp=02c69d2f-812f-460a-8e69-a4fb2d84045a  💡 課程內容： 📌 TG Mini App 开发 – 掌握 Telegram 小程序生态 📌 TON 基础 & 智能合约 – 消息模式、API & SDK、Bag of Cell 📌 Jetton & NFT – 真实 USDT 案例，全流程应用集成 ✨感謝社區夥伴：BeWaterOfficial, HackQuest, OpenBuild (forwarded from TON Society Hong Kong Announcements)

Katiya｜TON: 来啦第二期！ (reply to 83804)

Lucy: 感谢榜一大哥送来的高级会员👍

Lucy: 大哥牛逼

Lucy: 玩了这么久tg，第一次有人给我送会员

Lucy: 太感动了😭

— 2025-03-29 —

Lucy: 大佬们，有没有为爱发电的，有几个想法😂

Cyber: 怎么发

Lucy: 用爱发😂 (reply to 83924)

Cyber: 今天才看到，第一期的作业没有提交，但是第一期的作业今天也做完了，这样影响最终的挑战赛吗 (reply to 83854)

Cyber: 以前参加过一次黑客松，也是用爱发，最后同组的尼日利亚小哥和波兰小哥都跑路了 (reply to 83925)

Cyber: 爱起来！

Lucy: 加个好友😘 (reply to 83928)

Andrew: 第一期奖品已经发完了，等第二期吧 (reply to 83926)

Jack: 2025-03-29T06:29:54.457Z WARN  [tonlib_client::client::callback] [ton-conn-3] Invocation error: request_id: 3, method: RawSendMessageReturnHash, elapsed: 557.177333ms: Tonlib error (Method: RawSendMessageReturnHash, code: 500, message: LITE_SERVER_UNKNOWN: cannot apply external message to current state : External message was not accepted Cannot run message on account: inbound external message rejected by transaction D1AEC6F54204E9E651574F58D395ADAF58BBB94AF70A47FD215B07CECC4DDBF5: exitcode=133, steps=49, gas_used=0 VM Log (truncated): ...SIGNU execute PUSHCONT x28945F0ADB31E1F2C087 execute IFNOT execute XCHG s2 execute NOT execute XCHG2 s0,s7 execute AND execute THROWIF 132 execute XCPU s2,s5 execute EQUAL execute THROWIFNOT 133 default exception handler, terminating vm with exit code 133 testnet这是啥问题

6666feile: 133就是seqno重复了

6666feile: @jackbbhu

Jack: 需要将取到的seqno+1是吗 我试试

6666feile: tonlib版本0.7-0.8，tonlib要每次实例化才行

6666feile: 0.9我没去测试了

Jack: 感觉这个坑挺多的

Jack: 你用了这么多哦

6666feile: 我发个issue给你看下

Jack: 👍🏻大佬

Jack: 2025-03-29T07:56:53.849Z TRACE [tonlib_client::tl] [ton-conn-2] receive: {"@type":"error","code":500,"message":"LITE_SERVER_UNKNOWN: cannot apply external message to current state : External message was not accepted\nCannot run message on account: inbound external message rejected by transaction D1AEC6F54204E9E651574F58D395ADAF58BBB94AF70A47FD215B07CECC4DDBF5:\nexitcode=133, steps=49, gas_used=0\nVM Log (truncated):\n...SIGNU\nexecute PUSHCONT x28945F0ADB31E1F2C087\nexecute IFNOT\nexecute XCHG s2\nexecute NOT\nexecute XCHG2 s0,s7\nexecute AND\nexecute THROWIF 132\nexecute XCPU s2,s5\nexecute EQUAL\nexecute THROWIFNOT 133\ndefault exception handler, terminating vm with exit code 133\n","@extra":"2"} 2025-03-29T07:56:53.850Z WARN  [tonlib_client::client::callback] [ton-conn-2] Invocation error: request_id: 2, method: RawSendMessageReturnHash, elapsed: 837.730084ms: Tonlib error (Method: RawSendMessageReturnHash, code: 500, message: LITE_SERVER_UNKNOWN: cannot apply external message to current state : External message was not accepted Cannot run message on account: inbound external message rejected by transaction D1AEC6F54204E9E651574F58D395ADAF58BBB94AF70A47FD215B07CECC4DDBF5: exitcode=133, steps=49, gas_used=0 VM Log (truncated): ...SIGNU execute PUSHCONT x28945F0ADB31E1F2C087 execute IFNOT execute XCHG s2 execute NOT execute XCHG2 s0,s7 execute AND execute THROWIF 132 execute XCPU s2,s5 execute EQUAL execute THROWIFNOT 133 default exception handler, terminating vm with exit code 133 ) 2025-03-29T07:56:53.857Z TRACE [tonlib_client::tl] [ton-conn-4] send: {"@extra":"2","@type":"raw.sendMessageReturnHash","body":"te6cckECGQEAA3oAA+eIAaNdjeqECdPMoq6esacrW16xd3KV7hSP+kK2D52Ym7fqEY5tLO3P///iLPz0+8AAAHExXv9NOF/puZigKQkKZ6Ia4d9EBtOXtpRzQqZNxaFLoi3OmWhgvj6ENlE00s//iGP5hTCiIgGdS7KyxXcKEk7oNAECAwEU/wD0pBP0vPLICwQAUYAAAAA///+ItbZ7VyUZYCe/bboFRvBvba2AFnobhoVqmkut6Sxi+qIgAgoOw8htAwUGAgEgBwgAAACPoAHbHhsTzQEeCXoY0WLToFZDxAm3QM6Il7aH1LTJEBOwXAD+SuoCHsCL2pIZfE8IAKsjc0aDpDUQAoo+ALHl2mje00ATEtACAgFICQoBAvILAtzQINdJwSCRW49jINcLHyCCEGV4dG69IYIQc2ludL2wkl8D4IIQZXh0brqOtIAg1yEB0HTXIfpAMPpE+Cj6RDBYvZFb4O1E0IEBQdch9AWDB/QOb6ExkTDhgEDXIXB/2zzgMSDXSYECgLmRMOBw4hUMAgEgDQ4BHiDXCx+CEHNpZ2668uCKfwwB5o7w7aLt+yGDCNciAoMI1yMggCDXIdMf0x/TH+1E0NIA0x8g0x/T/9cKAAr5AUDM+RCaKJRfCtsx4fLAh98Cs1AHsPLQhFEluvLghVA2uvLghvgju/LQiCKS+ADeAaR/yMoAyx8BzxbJ7VQgkvgP3nDbPNgVAgEgDxAAGb5fD2omhAgKDrkPoCwCAW4REgIBSBMUABmtznaiaEAg65Drhf/AABmvHfaiaEAQ65DrhY/AABezJftRNBx1yHXCx+AAEbJi+1E0NcKAIAP27aLt+wL0BCFukmwhjkwCIdc5MHCUIccAs44tAdcoIHYeQ2wg10nACPLgkyDXSsAC8uCTINcdBscSwgBSMLDy0InXTNc5MAGk6GwShAe78uCT10rAAPLgk+1V4tIAAcAAkVvg69csCBQgkXCWAdcsCBwS4lIQseMPINdKFhcYAJYB+kAB+kT4KPpEMFi68uCR7UTQgQFB1xj0BQSdf8jKAEAEgwf0U/Lgi44UA4MH9Fvy4Iwi1woAIW4Bs7Dy0JDiyFADzxYS9ADJ7VQAcjDXLAgkji0h8uCS0gDtRNDSAFETuvLQj1RQMJExnAGBAUDXIdcKAPLgjuLIygBYzxbJ7VST8sCN4gAQk1vbMeHXTNBqHnXu"} [proxychains] Strict chain  ...  127.0.0.1:49249  ...  127.0.0.1:49250  ...  69.67.151.218:35939  ...  OK [proxychains] Strict chain  ...  127.0.0.1:49249  ...  127.0.0.1:49250  ...  207.188.7.51:20700  ...  OK [proxychains] Strict chain  ...  127.0.0.1:49249  ...  127.0.0.1:49250  ...  94.237.45.107:13833  ...  OK 2025-03-29T07:57:03.860Z TRACE [tonlib_client::tl] [ton-conn-4] receive: {"@type":"error","code":500,"message":"LITE_SERVER_NETWORKtimeout for adnl query query","@extra":"2"} 2025-03-29T07:57:03.860Z WARN  [tonlib_client::client::callback] [ton-conn-4] Invocation error: request_id: 2, method: RawSendMessageReturnHash, elapsed: 10.0038055s: Tonlib error (Method: RawSendMessageReturnHash, code: 500, message: LITE_SERVER_NETWORKtimeout for adnl query query)“总感觉是testnet的节点有问题 500错误

6666feile: https://github.com/neodix42/ton4j/issues/103

6666feile: 没用，你不重新实例化tonlib，即使+1也不行，重新实例化又会触发重新同步

Jack: 那mainnet不会这样吧

6666feile: 我后面把他做成单例，触发133就重新初始化一次

6666feile: 就是生产的坑

Jack: 重新运行的不是实例化吗

Jack: 要怎么才能实例化呢

6666feile: Tonlib.builder()…

6666feile: 这样处理就可以

Jack: 我这样运行这个方法还不行呀

Jack: 调用这个方法是重新运行的吗

Jack: 3天卡在这了

6666feile: 嗯

6666feile: getlastseqno不是tonlib也自带了吗？你怎么实现的？三方接口？

Jack: https://testnet.tonviewer.com/transaction/e8acd9496bac40ea35c24ba10427c45bd817b91f5e7c5c74d06bc247b0f51325 你有遇到这个问题吗 大佬 官方的sample不转ton

Jack: 使用的 tonapi (reply to 83960)

Jack: tonkeeper出的https://tonapi.io/

6666feile: 发消息用tonlib，seqno你用三方，不就必然会存在可能同步进度不一致的问题吗？

Jack: 应该不会有问题吧 我手动去赋值试试

6666feile: 你把tonlib维护好，保证唯一，出错误就重新初始化，初始化过程同步锁就可以解决你这个问题了

Jack: 好的 tonlib可以取seqno吗

6666feile: 嗯，demo里有

Jack: 感谢大佬指点

Jack: 大佬 这种遇到过没

Jack: 上链了就是没有转ton

Cyber: 看看详细报错有吗

Jack: 没有报错

Jack: https://testnet.tonviewer.com/transaction/86ce87afdc439d5f95a914aeeb8e747f6da75f1cb64aba8440b2f05440dfd668 一直是这样的 使用的是tonlib

Cyber: 你在自己发给自己么？

Cyber: 我看你成功的都是发给别的地址的

Cyber: 😢

Jack: 我是发给别人的不行 我就试试发给自己

Jack: 的确这里的地址竟然是一样的

Jack: https://testnet.tonscan.org/tx/942804b28af19730d7e439cff512da4443e137edcdadb5022f978b35f6542288#details 转账成功的也是这样的 我这个通过代码转账的没有out只有in (reply to 83986)

Jack: 我怀疑是不是ton给的太低 我给1ton也没有执行转账成功

Jack: 缺少了ou't

— 2025-03-30 —

6666feile: @andrew_cong 钱包签名，能否像evm一样，连了钱包也能触发啊

Andrew: 看不懂，具体一点是？ (reply to 84103)

6666feile: tonProof

6666feile: 只有connect时才能传，才是有效的

6666feile: 用户已经连上之后，我想让他签名，这个不会触发

6666feile: @andrew_cong

Ali: Compiling using func v0.4.6 FunC compilation error: main.fc:44:10: error: identifier expected instead of asm     return asm(data) "PUSHREF 4 PUSHINT SWAP BN256_PAIRING"; need help

Goldchau: Mini app cross task @timonfunbot dm

— 2025-03-31 —

Lucy: ton要起飞了

DELONE🉐 诺尔丁 卡奥尼亚: what do u man (reply to 84174)

Andrew: 结合这个 demo 代码一起看就懂了   https://github.com/ton-connect/demo-dapp-with-react-ui/tree/master?tab=readme-ov-file  如果需要 proof 是和 connect wallet 一起签名的，后续服务端下发一个 access token（可以放到 cookie里面），在过期时间之类，都不需要重复 proof，当然你也可以强制过期，重新连接钱包验证 (reply to 84112)

Demon: 想问问，用unity 制作telegram  mini app  用websoket 一直报错怎么解决嘞

Andrew: 有很多 Mini App 是用 Unity 做的，这条路经没有问题。  具体遇到什么错误就解决什么错误。 (reply to 84193)

Demon: 我们用 unity 到的websoket 经常在弱网环境下爆 js 栈溢出，然后整个卡死

Demon: 又看不到什么卡死

Katiya｜TON: 🔥今晚8點！TON開發課第二彈來啦！🔥  家人們衝啊！⏰香港時間晚8點，開發者公開課繼續開講！🚀  地點：TON Society HK推特直播  上次沒跟上的，這次別錯過！📚 手把手帶你玩轉TON生態，財富密碼就在代碼裡！💻💰  👉 準時開課，不見不散！ 👈  ✨感謝社區夥伴： BeWater, HackQuest, OpenBuildxyz (forwarded from TON Society Hong Kong Announcements)

Katiya｜TON: 直播链接八点在TON Society HK的推特放出来哦！https://x.com/tonsocietyhk

Katiya｜TON: 直播开始啦，课程待会正式开始！：https://x.com/i/broadcasts/1OdKrDQgryVJX (reply to 84227)

Katiya｜TON: 🚀 為 EVAA Protocol 構建 Dune Dashboard —————————————> 贏取高達 $3000！  Ton Data Hub 正式啟動第二屆數據挑戰賽！🎉  這次，我們聚焦 借貸協議， 只需為 EVAA 構建 Dune Dashboard， 即可競爭豐厚獎勵：  🥇 冠軍：$3000 🥈 亞軍：$2000 🥉 季軍：$1000  📅 截止日期：4 月 13 日，UTC 23:59  📐 查看規則 📏：https://docs.google.com/document/d/1endw_vIB0qQtLe5qXZPdQI4cCQ0F1afItFR-ACQGi4I/edit?tab=t.0#heading=h.ps32yz45ycxe  有問題？歡迎加入討論群：@tondatachat 🚀

— 2025-04-01 —

mike: 各位大佬，TON 上有没有现成的批量主币或者代币的合约，类似evm的。 自己搞了个合约，部署一直有问题。

Lucy: 有没有喜欢做ton游戏的大佬

Andrew: https://minter.ton.org/  https://github.com/ton-blockchain/token-contract/blob/main/ft/jetton-discovery.fc (reply to 84299)

x: 大佬們好，我现在在使用ton测试币进行托管合约的开发转账测试，但是转账时遇到需要超高手续费用的情况要怎么解决

谋士: 没法解决 (reply to 84324)

x: 😭

x: 有相关情况的，想请教一下

Andrew: 你发一个具体交易 id，大家可以看下，否则没法分析 (reply to 84327)

Katiya｜TON: $TON 编程挑战 & 课后作业02💎🔥  第二次編程比賽 & 課後作業來啦💎 Andrew為大家準備了課後作業巩固昨晚学习到的知识！  🏆我们会挑選出30名獲勝者贏取Telegram會員（1年、半年、1個月），同時，積極在社群和推特互動轉發，也有機會獲得大會員！  🔗比賽題目（直接fork參與）：https://github.com/ton-builders/ton-coding-challenge-25-round-2 🔗昨晚直播課程文檔：https://ton-org.notion.site/II-Mini-App-1ba5274bd2cf80118693e830a8992957 🔗昨晚直播連結回放：https://x.com/i/broadcasts/1OdKrDQgryVJX (forwarded from TON Society Hong Kong Announcements)

Katiya｜TON: 第二次作業來了喔！

Katiya｜TON: 快來參加！

Arti: Build a Dune Dashboard for EVAA - Win up to $3,000 💰  Join Today's Workshop with EVAA CTO! DM for more info 👀

Benny: 想確認✅一下🤔 全屏模式是 requestFullscreen 而不是舊的 expand 嗎？

Benny: 驗證 initData hash 自己 implement function 或者🤔調用別人寫好的 library 📚 都可以嗎？

Andrew: 是的。 (reply to 84370)

Andrew: 可以，目标是以考代学 (reply to 84371)

Benny: 謝謝😊

— 2025-04-02 —

Randolph: telegram-mini-apps的sdk是tg官方出的吗？

Randolph: 这个还有ui，功能太全面了

Andrew: 这个项目由 [Vladislav Kibenko](https://www.linkedin.com/in/qbnk/?originalSubdomain=ru) 发起，他是一个比较资深的全栈开发专家，早期曾在 VK 和 Yandex 工作，目前已加入 [TON Studio](https://tonstudio.io/) 专门做小程序相关组件的研发工作。  https://ton-org.notion.site/II-Mini-App-1ba5274bd2cf80118693e830a8992957 (reply to 84382)

swz: 请问通过/app的链接打开miniapp的时候，如何加上这个发消息的权限

Cryptosiz: I can create any kind of telegram bots.  Interested? We can chat in dm

Benny: 用戶第一次打開時，不是一定會出現的嗎🙈 (reply to 84395)

美杜莎: 群里面有没有高手呀

美杜莎: 写合约

美杜莎: #P4M黑洞协议 以下机制，旨在提高系统的公平性、稳定性和可持续性： 一、代币分配  总量2亿  1. 黑洞地址：50%作为通缩机制核心 2. P4M铸币协议：调整为35%，分阶段释放 3. LP底池：5%， 4. 社区建设：4%，但分季度释放 5. **用于生态1%RepoSwap分配 6.天使投资人5% 二、动态铸币触发机制升级  1. 多级价格触发：    - 2倍涨幅：解锁铸币池5%    - 4倍涨幅：解锁铸币池10%    - 8倍涨幅：解锁铸币池15%     2. 稳定性监测增强：    - 引入"三重确认"机制：价格需在1小时内保持在触发价的±5%范围内  三、空投机制优化  1. 分级空投资格：    - 基础资格：持仓24小时    - 银级资格：持仓7天+交易1次，获得1.2倍系数    - 金级资格：持仓30天+提供流动性，获得1.5倍系数  2. 释放机制：    - 每日释放比为1/30释放周期 四、风险控制新增  1. 熔断机制：单日下跌超过15%时暂停空投24小时 2. 反鲸鱼措施：单个地址最多获得空投池的1% 3. 流动性保护：买卖税的0.4%自动转入lp资金池 4.0.1%的买卖税自动回购销毁  ## 五、AI智能合约升级  1. 引入机器学习算法动态调整触发阈值 2. 实时监控链上数据，自动优化释放节奏 3. 添加预测功能，提前预警市场异常  这个优化方案在保持原协议核心思想的基础上，增强了系统的稳定性和抗风险能力，同时提供了更公平的参与机制和更可持续的生态发展路径。

美杜莎: 按照这个机制来写

swz: 我搞个新号试试看 (reply to 84404)

swz: 验证了一下 确实是首次打开时就会一定出现的 (reply to 84404)

Benny: 😆

— 2025-04-03 —

Lucy: 有没有tg游戏开发爱好者☺️

Traffic Builder: 1有人出售Facebook已经过审核的Meta应用吗？用来处理Mssenger的

Cyber: 哥們別騙了 (reply to 84495)

Cyber: 都全網發佈了還假招聘盜錢包呢

Lee: 上次差点被骗

Lee: 垃圾人

Katiya｜TON: 易经踢了哈 (reply to 84499)

Valoryn: 什么套路，他会叫你发私钥？我一直以为这些假招聘是打算把人骗去缅北做猪仔 (reply to 84500)

Cyber: 聊天聊到最後說要下載一個AI輔助翻譯的來面試，其實是遠控程序 (reply to 84509)

Valoryn: 6

Aloys: 有没有大佬帮忙解答一下，在tg打开链接 后面带有?start=sjfdksjafkls 的参数，为什么手机app拿不到这个参数，而pc端可以获取到

Traffic Builder: 1我都能拿到诶

Aloys: 你怎么获取，miniapp里面去获取的window.Telegram.WebApp里面 没有这个start_param

Traffic Builder: 1啊？你是Miniapp拿还是机器人拿？

Aloys: mini

Traffic Builder: 1那很奇怪诶，你参数应该用startapp的

Traffic Builder: 1start是bot用的

Aloys: 谢谢大佬，获取到了😘

EntropyKey: 唯一正解

Traffic Builder: 1有趣，如果你了解facebook可以回答我一些关于facebook的问题让社区更加开放

Traffic Builder: Telegram是个对程序员很友好的平台，facebook则不然，它让我很苦恼，因为技术之外的很多事

Aloys: 不好意思，对于facebook 设计的内容没有太多的见解，很难与兄解答相应的疑惑之举

Traffic Builder: 1好吧，很遗憾

— 2025-04-05 —

Randolph: 作业终于写完啦😃 telegram-mini-apps的sdk好像不能自动全屏，viewport.mount的状态一直是isMounting。最后用官方原生sdk完成了😂

TORUN: Sali🦴

Andrew: 肯定是可以的，你用什么前端框架？react，vue？ 要自己在页面加载后调用一下全屏方法 (reply to 84634)

@mohoai: 谁做技术，找小伙伴做事情

— 2025-04-06 —

kevin: 私信你了 (reply to 84653)

Lucy: tg游戏独立开发者有吗

Cryptosiz: Let's talk about it (reply to 84697)

Traffic Builder: 1有兄弟使用过telegram WebApp.shareMessage这个功能吗？

Traffic Builder: 1我在调用这个savePreparedInlineMessage接口的时候遇到了报错，Bad Request: invalid user_id specified

Traffic Builder: "user_id" : 7106108573,这是我填写的user_id，难道这个填写的不是用户id吗？

Benny: How about pass the user id as string 🧐

Traffic Builder: Oh,Thanks bro.

Traffic Builder: I'm so stupid to forget set the json header...

Traffic Builder: The feature is very nice to use.

Poseidon海王: 小团队算吗 (reply to 84697)

— 2025-04-07 —

ShhhToshi: Hello

ShhhToshi: Hi everyone

Randolph: 早上好，大佬们 编程挑战第三课是啥时候上课呀😄

Cyber: 太忙了這個月

Cyber: 課程都落下了

ZombHunt: 我们应该就算独立开发者了吧，基本都是埋头开发😂 (reply to 84697)

Andrew: 原计划是两周一次，因为这周都在 HK Festival, 下周一或者下下周一吧 (reply to 84784)

Kenny Chan: 明天你会在会展吗？到时拜访一下Andrew大佬！ (reply to 84789)

Andrew: 在的，欢迎 (reply to 84792)

Mason: TG用小星星收款，收到的小星星可以提现吗

Traffic Builder: 1抽成好高

Traffic Builder: 1可以去换成Ton

Mason: Get

Mason: 咨询下，机器人可以向频道（channel）推送消息吗

Andrew: 需要将 bot 添加到频道作为管理员 (reply to 84812)

mikey: Sure (reply to 84812)

mikey: 您找到候选人了吗？ (reply to 84408)

mikey: 如果没有的话，我可以给你发私信吗？ (reply to 84856)

美杜莎: 👌 (reply to 84857)

— 2025-04-08 —

Andrew: 🇭🇰TON Day at Web3 Fest HK is live now!   👉 Tune in on YouTube: link (forwarded from TON Community)

Goldchau: We are open for cross task  @timonfunbot feel free to dm me

mikey: I sent dm. please check it (reply to 84886)

Goldchau: Checked (reply to 84887)

品誉: 朋友们，TON一笔swap结束之后如何获取余额变化信息？

Andrew: 你先在浏览器上看，然后再找对应的 API 接口参考 (reply to 84891)

Mason: 家人们，怎么接收USDT，这边没有看到接收USDT的案例

atsolutionyoung: 第三课真没时候上

Andrew: 谢谢关注，会提前群里通知。 课件还没时间写完 (reply to 84907)

树: 好耶，欢迎新人

&: USDT 是 jetton. (reply to 84902)

sniper07: not interesting! (reply to 84935)

— 2025-04-09 —

Mason: 谢谢 (reply to 84924)

s: 请问有小伙伴用过这个Ton API的吗，这个API定价是什么意思呀

s: 用来追踪用户的付款的

&: check tonconsole api (reply to 84891)

— 2025-04-10 —

Nevan: 各位大佬请教一个问题：我现在使用TonConnnectUI，流程已经调通，但是针对用户 主动取消转账，具体支付失败原因TonConnnectUI似乎没有办法精确知道原因，也会出现钱包已经转账成功了，但是前端还在等待状态，用户一旦关闭也会抛出TonConnnectUIError异常，这个对业务流程影响很大，不知道如何精准知道失败原因

Nevan: 另外，我有必要购买toncenter的apikey么

EntropyKey: 最好买一个,免费的调用频繁会被流控

Nevan: 多谢建议

6666feile: 同步的就try catch一下不就行了吗？ 异步他本来支持.catch方法啊，他是Promise (reply to 85046)

yan: 请教一下，TON现在支持多签了吗

Andrew: 如果你需要知道原理看这个 https://docs.ton.org/v3/guidelines/smart-contracts/howto/multisig  如果你需要多签商业化产品可以看这2 个或者更多其他钱包方案 https://tonkey.app/  https://tonkeeper.helpscoutdocs.com/article/125-multisig-wallets-in-tonkeeper-pro (reply to 85070)

yan: 谢谢

Allen: 推薦用 https://v3.tonkey.app/  如果想了解更多原理，或許可以看一下這個 https://medium.com/tonx-lab/how-multisig-works-on-ton-a-technical-breakdown-of-multisig-v2-smart-contracts-8cac6477ee9b (reply to 85070)

— 2025-04-11 —

Andrew: 📝 使用 TON Connect 签名任意数据  TON Connect 的最新更新引入了一项强大的新功能：能够对任意数据进行签名——从纯文本和二进制 blob 到 BOC（单元）格式。  这解锁了 TON 生态系统中的新用例：安全的链下流程、可验证的签名以及先进的链上逻辑——所有这些都通过我们熟悉的 TON Connect 界面实现。  现已支持 iOS 和 Android 版 Tonkeeper 的最新版本。  浏览指南并开始构建 →

Allen: 哇 終於⋯但除了Tonkeeper以外的錢包，其他錢包也會支持signdata 了嗎？ tonconnect終於支持offchain簽名了🥹 (reply to 85194)

— 2025-04-13 —

6666feile: 真棒 (reply to 85194)

Hu: 请问一下，提交一个交易之后，如何来得到此交易是否交易成功？

— 2025-04-14 —

EntropyKey: 提交之后会有交易hash返回,用它个去查交易状态

Lee: 请教一下，用tonutils-go解析出来的hash和浏览器展示的哈希不一致，但是都是指向同一笔交易。tonutils-go怎么拿到浏览器那个哈希值呢？

Andrew: 你可以根据外部消息 hash，通过 API 拿到所有相关的内部消息树，然后判断所有必要消息的处理交易都成功就好。  （⚠️注意：某些消息是可以忽略的，比如 Notify 和 Excess 这些，判断时可以忽略这些消息。） (reply to 85398)

Andrew: 给出具体的值看下，然后分别在浏览器查询一下看看 (reply to 85418)

Hu: 如何根据hash拿到内部消息树？ (reply to 85419)

Hu: 我没看有对应的api啊

Hu: 交易的那个字段是标识成功？

Lee: 588d027fe9ac1c1baa976a3341a4d79ac22677087d4d23d9332f591458901795 (reply to 85418)

Andrew: 这边有  https://github.com/ton-builders/open-backend/blob/main/src/index.ts (reply to 85430)

Hu: 收到，谢谢，我先研究一下

Hu: @andrew_cong 那个字段表示交易成功与否？

Andrew: 你发的这一串是这个Internal message 对应的 TX Hash (reply to 85433)

Andrew: 不同的 API 服务商，字段会有差别，比如 toncenter 和 ton api 会有不一样，看你选择哪个 API 服务，然后自己先测试一下吧 (reply to 85436)

Lee: 235e11cb96c6909f5a684f6710c9be84f9465b21cefead5069171ccc2fd31f49  和1e5ba94cd335ba5e8b4d96c75f0a790a06b48981a26f01a429ee278b829a3b1b  是同一笔交易的tx  hash，为什么会出现2个hash? (reply to 85418)

Andrew: TON 是消息驱动的，一个外部消息，引发 1-N 个内部消息，每个消息都对应一个交易（交易和消息一一对应）。 你看的是一个消息链条上的 2 个消息。 (reply to 85452)

— 2025-04-15 —

u7: 想請問一下今天我在測試網發出去的交易但用V3都查不到是怎麼了 我是用這個api查的  curl -X 'GET' \   'https://testnet.toncenter.com/api/v3/transactions?hash=479ad496eeed09a334d657d5a465ad52b926527b6143fd7eb308496121dcb719&limit=10&offset=0&sort=desc' \   -H 'accept: application/json'

6666feile: 这个钱包顺序能不能支持调整？

Lee: ios设备不支持绑定银行卡购买star吗？

Andrew: 技术上当然可以调整，但是实际上会根据生态热度做一个排序 (reply to 85528)

Andrew: 推荐在 fragment 用 TON 购买，少交苹果税 (reply to 85535)

swz: mini app 的全屏模式在pc端可以实现窗口化全屏吗

Andrew: 可以

Andrew: 🧠 Tact 合约编程挑战赛 🤜  加入由Tact驱动、TON Studio与Codeforces联合举办的终极智能合约挑战赛  🏅 奖池 — 20,000美元Toncoin！  🎯 挑战任务： 1. 简单投票 — 基础投票系统。 2. 连续投票 — 通过主合约支持多个提案。 3. 可扩展投票 — 支持高达40亿选民。 4. 带退款的投票 — 向选民退款。 5. gas 优化的投票 — 完全优化的合约。  🏆 奖励： - 前128名参与者分享奖池并获得独家灵魂绑定代币（SBT）。 - 所有提交有效解决方案的参与者也将获得参与者SBT。 - SBT内嵌链上开发者声誉。  ⭐️ 额外福利： - 顶尖参与者将被邀请参加TON Studio的工作面试。  ⏰ 持续时间：7天  🗓️ 开始日期：4月21日，12:00（UTC+3） 🛑 截止日期：4月28日，12:00（UTC+3）  注册： 👉 挑战链接（Codeforces）  注册指南： 👉 Notion链接  社区与支持： 👉 Telegram挑战聊天室  祝好运，愿你的合约高效且无漏洞！🚀🔥

Randolph: 哇，这个活动真棒👍

Katiya｜TON: 💎《TON 生态开发公开课 & 编程挑戰赛 2025》 🚀第3課本週五開課！  📅 課程時間：4 月 18 日 20:00 (UTC+8) 🎙️直播平台：請關注 X 帳號 @ tonsocietyhk  🏆 所有参加用戶將獲得 SBT，密码会在直播间公布；課程結束後還有 Coding Challenge編程挑戰賽，贏取一整年 Telegram Premium 會員！ 🔗SBT链接: https://t.me/theontonbot/event?startapp=6c4b5194-acf5-4c5d-86e4-61b141e6cb1c  💡 課程內容： 📌 TON 基础 & 智能合约 – 消息模式、API & SDK、Bag of Cell 📌 Jetton & NFT – 真实 USDT 案例，全流程应用集成 ✨感謝社區夥伴： BeWater, HackQuest,OpenBuild (forwarded from TON Society Hong Kong Announcements)

Katiya｜TON: 第三次课程 本周五进行～～～

Katiya｜TON: 家人们记得参加！

Randolph: 好的👌，已经订好闹钟⏰

qalon: 有人对 TON 的备忘录感兴趣吗？我知道一个非常有前途的项目，我可以与大家分享。

— 2025-04-16 —

Andrew: 那就参加争取拿个奖 🤜 (reply to 85550)

Cyber: 这还不踢哈哈哈

Andrew: TON吐槽大会：聊聊那些踩过的坑与绕过的路  ⏰4月17日 20:00  🔗 预约：https://x.com/i/spaces/1djGXVXDoMNxZ  TON很热，机会很多，但项目真正落地时，你是不是也踩过坑、绕过弯路？  本期 TON 吐槽大会，我们邀请生态中的项目方、开发者、社区伙伴，一起来聊聊那些在TON里“不好说，但必须说”的问题： 🔘 哪些坑你踩过？ 🔘 哪些环节总觉得卡手？ 🔘 最希望 TON 官方在哪些方面给点力？  TON 基金会亚太团队也会来到现场倾听与回应，让吐槽不只是发泄，更是推动改进的第一步。  欢迎正在 TON 上构建、运营、摸索方向的你，一起来说说真话、交交朋友、点亮下一步的思路。  https://x.com/0x99DaDa/status/1912349026172776575 (forwarded from DaDa)

— 2025-04-17 —

linyi test p: 我们这边可以开发，你们这边是投资开发项目吗？ (reply to 84697)

linyi test p: 有没有投资链游开发的?

Eeee: 大家早上好啊🌞

Cyber: 没有投资了，自强吧

linyi test p: ton 游戏外包开发我们也接呀，十年游戏研发经验，5年休闲游戏开发经验，1年 tg 游戏研发运营经验。

linyi test p: 有需求的话可以联系我们呀。接受定制，联合开发，联合运营。

TON: 有商城嗎？

Jeff: 請問如果只是要確認是否成功收款，抓取value跟判斷opcode是否等於0 這樣夠嗎?

EntropyKey: 那是in_msg 不能用作判断交易状态吧

EntropyKey: opcode=0x00000000是ton交易

EntropyKey: value是金额

Jeff: 對齁，那這樣我是不是抓action phase是不是success才準？ (reply to 85703)

EntropyKey: 我是判断success=true就成功的

Jeff: 感謝

— 2025-04-18 —

Jolly: hello， 我们准备将产品推广到TG 小程序上，我们的app内部存在付费，然后我们准备介入TON 支付，然后我看文档是说要先准备一个wallet来接受用户付款，想问下大家，这个wallet是否可以以公司的名义开户，转入wallet的钱如何最终提到公司的银行账户里呢

Andrew: 区块链上是不需要人工审核开户的，你在这里面找一个钱包，然后按照提示就可以创建一个钱包  https://ton.app/wallets (reply to 85798)

Cyber: 自己开个钱包就可以了，我们两款游戏都是自己的钱包呀

Cyber: 然后提现到银行账户这个，你要找C2C

Cyber: 或者USDT的兑换商

Jolly: 好的谢谢大家

Cyber: Solidity 的汇编指令叫 YUL，开发者也很难上手，但有很多更高级的语言来包装它，比如 Vyper。Solana 的 Native 方式也比较恶心（因为BPF hooks），但有社区给他做 Anchor 框架让事情变得简单。  FunC 不是也有一个更上层的 Tact 语言嘛，他们如果对社区和开发者好一点，给他们贡献个 Python、Rust、Golang 甚至 Solidity 语言包装也不是不可行。

Andrew: 是的，只是还需要时间。 比如 Tact 语言本身还在升级中，所以目前对外的集成和合作就不太好展开。 (reply to 85808)

swz: 在ton链上发币后，这边为什么会提示是诈骗？

Randolph: Andrew大佬，ton后续是不是就以tolk为准，func不再继续更新了？

Randolph: 感觉学一门就够了，再难花时间也能慢慢入门。语言太多，看不同语法写的合约，有点顶不住哇🥹

Andrew: tonviewer 或者 Tonkeeper 作为第三方产品，他们为了降低用户被骗风险，会将新的代币或者没有上 DEX，或者流动性低的代币，标志为 scam(疑似诈骗)，忽略就好，区块链是抗审查的。 (reply to 85819)

Randolph: 新出的tolk还行哇，写法和平时开发差不多了

swz: 好的 (reply to 85823)

Andrew: 目前自学的话可以用 Tact 或者 Tolk，如果是不急着发上线的话。 (reply to 85820)

Randolph: 好的👌

Randolph: 期待今晚课程

Katiya｜TON: 💎《TON 生态开发公开课 & 编程挑戰赛 2025》 🚀第3課開課！  📅 課程時間：4 月 18 日 20:00 (UTC+8)  🏆 所有参加用戶將獲得 SBT，密码会在直播间公布；課程結束後還有 Coding Challenge編程挑戰賽，贏取一整年 Telegram Premium 會員！ 🔗SBT链接: https://t.me/theontonbot/event?startapp=6c4b5194-acf5-4c5d-86e4-61b141e6cb1c  💡 課程內容： 📌 TON 基础 & 智能合约 – 消息模式、API & SDK、Bag of Cell  🔗直播已经开始，点击开始收听： https://x.com/i/broadcasts/1RDGlzkvnplxL (forwarded from TON Society Hong Kong Announcements)

Katiya｜TON: 直播开始咯

Top: 我想问一下 https://eco.ton.org/ 一直无法注册项目是咋回事啊

Gjgg: 大家遇到过，bot转入给新账号之后，bot收不到广告收益的问题吗？

Gjgg: 直接没有了ton选项，正常是有个星星的收益，一个ton的收益，ton收益直接没了。

Pouya: Tonkeeper doesn't want to back my mini app after signing external message, i use iphone, it's okay?

Roman Never Die |: resume

— 2025-04-19 —

Randolph: 这里这个文档有点坑，默认隐藏了Cell 、Address

Randolph: 这些基础的类，我还以为没有

Randolph: 其实提供的工具还是挺丰富的。。

Ton: 我想问一下，这个功能在哪里

Ton: 没找到啊

Andrew: 可能文档过期了吧，这个有什么用？ (reply to 85933)

Ton: 红包啊 (reply to 85950)

Andrew: 当年微信红包🧧一下把支付宝打懵了，那 Telegram 钱包是否支持红包呢？  如下图所示，Telegram Wallet 当前是以 支票(Cheque) 的形式提供红包类似的功能 (forwarded from TON xFans News)

Andrew: 看起来是下线了，这是 23 年的文章 (reply to 85951)

Ton: 那现在有没有一个功能， 就是一个链接，用户扫到了就能够拿到红包 (reply to 85953)

Andrew: 这个试下 @GetTonGifts_Bot (reply to 85954)

— 2025-04-20 —

Vlad | WhiteCore: Interested in advertising in miniapps, if anyone has a miniapp, send the price list in private messages!💪🏻✅💵

富豪: 🍔

sniper07: Can I send you DM? (reply to 86060)

Vlad | WhiteCore: + (reply to 86089)

sniper07: I sent already (reply to 86095)

sniper07: please check it as i think its not permitted to send you dm (reply to 86095)

— 2025-04-21 —

Katiya｜TON: GTC2025 全球流量大會（深圳）即將開幕！🎉TON将会设置booth等你来玩！ 聚焦遊戲、AI、短劇、電商、支付等熱門跨境出海賽道，超過 200 家展商蓄勢待發！還有超多精美小禮品等你來領！🎁  📅时间：4.24～4.25号 📌 報名連結：http://gtcglobal.baijing.cn/buyt?code=SGYWOQ84 (forwarded from Katiya｜TON)

— 2025-04-22 —

Andrew: 🧠 Tact 合约编程挑战赛 🤜  加入由Tact驱动、TON Studio与Codeforces联合举办的终极智能合约挑战赛  🏅 奖池 — 20,000美元Toncoin！  🎯 挑战任务： 1. 简单投票 — 基础投票系统。 2. 连续投票 — 通过主合约支持多个提案。 3. 可扩展投票 — 支持高达40亿选民。 4. 带退款的投票 — 向选民退款。 5. gas 优化的投票 — 完全优化的合约。  🏆 奖励： - 前128名参与者分享奖池并获得独家灵魂绑定代币（SBT）。 - 所有提交有效解决方案的参与者也将获得参与者SBT。 - SBT内嵌链上开发者声誉。  ⭐️ 额外福利： - 顶尖参与者将被邀请参加TON Studio的工作面试。  ⏰ 持续时间：7天  🗓️ 开始日期：4月21日，12:00（UTC+3） 🛑 截止日期：4月28日，12:00（UTC+3）  注册： 👉 挑战链接（Codeforces）  注册指南： 👉 Notion链接  社区与支持： 👉 Telegram挑战聊天室  祝好运，愿你的合约高效且无漏洞！🚀🔥 (forwarded from Andrew)

Andrew: 🧠 Tact 合约编程挑战赛 🤜  🛑 截止日期：4月28日，12:00（UTC+3）

Howard: 活動開始了 (reply to 86324)

— 2025-04-23 —

Howard: 估計是 Folder 加群引流來的新用戶

Cyber: 😅

Jolly: 哈喽，想问下大家接入ton支付后，如果用户钱包内账户余额不足，是否可以在我们自己的小程序内引导用户去TG钱包充值，TG 钱包或者Ton space是否提供接口可以从小程序跳转到钱包？

Andrew: 用户也不一定用的 TG 内置钱包，大多数用的是 Tonkeeper (reply to 86509)

Andrew: 招聘：TON合约开发工程师  公司背景： TON头部流量生态项目方，正在为Fully On Chain新项目招聘合约工程师 团队base迪拜，可远程  岗位职责：  1. 设计、开发和部署 TON、Fift/FunC/Tact 智能合约；  2. 编写高质量、可维护代码，并进行单元测试和集成测试；  3. 进行合约安全审计，识别并修复安全漏洞；  4. 监控合约性能，优化 gas 消耗和执行效率。  岗位要求：  1. 计算机科学或相关领域学士学位，或具备等同经验；  2. 3年以上区块链开发经验，熟悉TON生态系统；  3. 精通 Fift/FunC/Tact 其中一门语言，有智能合约开发经验；  4. 熟悉区块链技术原理和工作机制；  加分项：  1. 有开源项目经验，或GitHub贡献；  2. 熟悉 DeFi、NFT 等区块链应用；  3. 深入理解 TON 公链技术和相关生态（如 Stonfi） (forwarded from Orca J)

Andrew: 转发一个 TON 合约开发职位，有感兴趣的可以联系 @ariesleeJ

Jolly: 那有可以跳转这些钱包的方式吗 (reply to 86511)

Andrew: 你可以看看 TON Connect 的源码，里面应该有跳转到钱包的 URL 格式 (reply to 86514)

Jolly: 好的 谢谢，我看下 (reply to 86515)

Cyber: 大概是什么薪资范围呢 (reply to 86512)

Ethan: 请问出现这个是因为什么问题或者操作呢

w: 请教一下。eks集群中，pod中使用grammy库并开启webhook用于监听支付消息，能生成invoice，但是在tg客户端支付后无法接收到来自webhook的事件，有大佬碰到过类似的问题么

w: eks的service配置也正确，并绑定到了https域名，loadbalancer能select到对应的pod，端口也正确

6666feile: ton Exit code: -256 啥原因呢

6666feile: https://docs.ton.org/v3/documentation/tvm/tvm-exit-codes 列表没列全

Mr.Lightcode: Hi

— 2025-04-24 —

Andrew: Scam（可疑交易）是生态内第三方浏览器自己打的标签，是提醒用户而已，可忽略。 (reply to 86570)

Andrew: 你是所有的 webhook 消息都收不到吗？ 可以参考这个文档仔细排查一下  https://core.telegram.org/bots/webhooks (reply to 86574)

Andrew: 如果列表里面没有这个错误码，说明是某个合约自定义的错误码，需要看合约源码才知道。 开发者自定义的。 (reply to 86592)

H: TON地址的Masterchain (workchain_id=-1)和basic workchain (workchain_id=0)的区别是啥

Andrew: https://docs.ton.org/mandarin/v3/concepts/dive-into-ton/ton-blockchain/blockchain-of-blockchains (reply to 86657)

ydzr: 大佬们，我想问下，php有没有库可以通过助记词发起交易的，像go这样 github.com/xssnick/tonutils-go w, err := wallet.FromSeed(api, words, wallet.V3R2) w.Transfer(ctx, recipientAddr, amount, comment, true)

Andrew: PHP 作为世界上最好的语言，怎么能没有  https://github.com/olifanton/ton (reply to 86727)

— 2025-04-25 —

Ben🚴🏻: C++ 才是最好的语言~但是现在不用了~ (reply to 86742)

Cyber: 你们总是赢，那到底谁在输😅

Lee: hihi (reply to 86885)

Evan: 👍

Randolph: Andrew大佬，第四课什么时候开始上呀

Andrew: 原计划应该是 5月 5 日周一晚上，但是因为节假日，可能延后几天

Randolph: 课后奖励收到啦，感谢大佬😄

Cyber: 🪙👍

— 2025-04-27 —

wang: 请问有支持ton的python库吗

Andrew: https://docs.ton.org/mandarin/v3/guidelines/dapps/apis-sdks/sdk (reply to 87054)

wang: 谢谢大佬 (reply to 87059)

wikig: @andrew_cong  想问一下，现在有官方建议的跨链桥吗？ 以及接下来的TON的payfi体系会建立在KYC之上吗~

c: 我也想知道这个 (reply to 87063)

Andrew: 我个人建议的跨链桥是 CEX 😅 (reply to 87063)

Andrew: KYC 是分层的，区块链及其基础设施是肯定不会 KYC 的，但是上层产品就看各个项目方自己决策了 (reply to 87063)

wikig: 之前我印象是说有whormhole还是layer0的bridge？ (reply to 87067)

wikig: 那么也就是说，目前没有很多的非KYC准入TON的方案是吗 (reply to 87067)

wikig: 好的，那么涉及到wallet payment 等收单、支付等环节，会做kyc限制吗。因为之前@wallet的问题，影响还是蛮大的。 (reply to 87069)

Andrew: 上层产品就看各个项目方自己决策了，@wallet 也可以看成上层产品的一个形态，用户可以自主选择不同形态的产品 (reply to 87072)

— 2025-04-28 —

Bob: 有Telegram Stars的接入文档吗

Andrew: https://ton-org.notion.site/Telegram-Star-1b95274bd2cf81a381f7da81c96d4baf (reply to 87147)

Cyber: star收益惨淡😅😢🪙

Bob: 无法访问

Andrew: https://ton-org.notion.site/Telegram-Star-1b95274bd2cf81a381f7da81c96d4baf (reply to 87152)

Bob: 好了  可以访问了

Bob: 想问一下，关于Stars，用户只能消耗掉，商户可以转赠给用户吗？

Andrew: 不存在你说的“商户”概念，开发者收到的 stars 是在 bot 或者 channel 里面，bot 和 channel 里面的 stars 只能由 owner 通过 fragment 去 withdraw 成 TON，否则 stars 就和 TON 没关系了。 (reply to 87162)

Traffic Builder: 请问一下，我选择Bounce的后果是什么呀？

Traffic Builder: 1我的项目在使用ton给用户提现

Traffic Builder: @andrew_cong 我在这里选择了bounce后，经常有交易会返回金额给我

Traffic Builder: 1请问这个参数会提高交易失败几率吗？

Leo: 这个参数只是失败时会退钱

Kenny Chan: Tact比赛，明明本地success run test case，但submit后0分？ (reply to 87179)

AGT: Tonkeeper的令牌验证怎么提交啊，有详细的教程吗，官方那个看不懂😅

Andrew: 比赛在这个群里咨询  https://t.me/tact_smart_battle (reply to 87180)

6666feile: tonkeeper为啥不做扫码打开链接？

Traffic Builder: 1哦哦，我明白了，是因为这个钱包没有初始化

Traffic Builder: 1往没有初始化的钱包里发款，设置了这个参数就会回退

Andrew: tonkeeper 作为一个商业化产品，你需要去他们群里咨询  https://t.me/tonkeeperdev (reply to 87188)

Kenny Chan: 比赛差一点点才有score😢

Kenny Chan: 终于搞好一题了！98.47 points!

Cyber: 👍

Kenny Chan: 我在第433顺位😂

Andrew: 还是很卷的

Kenny Chan: 对，很卷，我见其他选手开发功力都很强，甚至有CFT选手在hack漏洞拿分😂 (reply to 87204)

Traffic Builder: CTF

— 2025-04-29 —

Crypto: 我也参与了，我看他们貌似测试出了答案，然后用时间戳的顺序，来通过测试样例 (reply to 87205)

Andrew: 前 10 名中有 5 个来自中国。  https://codeforces.com/contestRegistrants/2105?order=BY_RATING_DESC

Crypto: 大佬这个是报名的coderforces分数吧

Crypto: 前几名的Question C score好离谱

Katiya｜TON: 可能这就是上学时和学霸的差别😂 question c真的断崖式的差别啊 (reply to 87289)

Crypto: 呜呜呜

Crypto: 看了300分的points 确实找到了一点灵感

Crypto: 但是一千多分的..... 真的不理解，强的可怕ヽ(*。>Д<)o゜

Howard: 高手在民間🤣 (reply to 87286)

Leo: 这个rating是cf总排名，不是这次比赛的 (reply to 87286)

Leo: 中国前几名基本都是中学的oier

Andrew: 我瞧瞧，这是什么奇怪排序逻辑 (reply to 87296)

Crypto: 🤨 大伙，五一准备去哪儿玩？

Howard: 话说这种菁英最后都在国家队进行秘密培养了对吧？ (reply to 87297)

wikig: 晚点打算折腾个TON 的 bridge 聚合器，不知道在现在TON 往payfi方向转的大背景下这种倒流资金进入的协议有无用户群

Leo: 也没啥秘密培养吧😂 就是进集训队可以保送清北，国际金牌的话一些去了姚班一些出国 (reply to 87319)

Kenny Chan: Tradfi/Payfi是相似的概念吗？我感觉有70%是重置的，有点搞不清两者的区别。 (reply to 87322)

Kenny Chan: 如果我知道，就直接做Question C，抢一个高分排位😂 (reply to 87291)

wikig: 我是觉得Payfi可能更加的是倾向于支付落地概念。比如我们最早在TON生态做的产品也是支付。 https://tonspay.top/  以及之前很多会场看到的TON的共享充电宝，之类的。 更多的是偏向应用层 (reply to 87329)

Kenny Chan: 对，更偏向场景应用，有点像John所说web2.5 (reply to 87331)

wikig: 我们准备做做基于TON的payment做NFC类型的TMA，但是还不知道现在TMA的Deeplink规则以及TG的NFC规范。（这点跟国内的wechat/alipay小程序生态还是差几个档，毕竟底部浏览器场景没做封装） 比如做做NFC碰一碰支付之类的东西。配合线下场景。 (reply to 87329)

Kenny Chan: 👍👍👍

— 2025-04-30 —

Crypto: How I achieved 2k in C  The first step is to hack compiler and use asm (fift) instead of Tact. This also works for other tasks as well. The next idea is to analyze tests and see: 1) There is no more than 10 votes in each test 2) Only the second vote can be duplicated Therefore, the solution doesn't need a child contract or even a map  Now comes the most interesting part :) Lets dive into scoring logic: 1) All points come from two tests - deploy and exactly one yes vote. Moreover, each of this test gives the same amout of points. Lets name them "deploy" and "vote1". The other tests only verify correctness and don’t affect the score 2) Min gas usage for both "deploy" and "vote1" is 100, checker do smth like gas=max(gas,100). That means there's no benefit to optimizing below 100 gas, and there's a limit on how many points you can earn 3) The scoring formula is score=200+370726/gas where gas is max(gas_deploy,100)+max(gas_vote1,100). This means that min score is 200, max score is 2054.2 - and my solution hits the limit 4) I make this graph so you can convert gas into score and vice versa: https://desmos.com/calculator/r5lwnbaxtc (it also on the screen) So the idea of solution is to use setcode via c5 POP to separate "deploy", "vote1" and other cases. Keep "deploy" and "vote1" under 100, but don't over-optimize one part in favor of the other

Crypto: 第一名发言了

Cyber: 😢强啊

Howard: 原本地址在哪 (reply to 87445)

w: 请教一下，miniapp前端更新后，telegram的缓存如何清理，从而下次登录miniapp拿到最新的前端？这边业务侧在代码里做了reload，但有时候也无法生效，必须退出tg重新登录再进入miniapp才能生效（目前看，主要是更新前端的时候如果用户正在miniapp中切页签请求网页，那此时重新登录app也是缓存模式，没有从web端拉取前端最新代码）

Howard: 什麼樣的緩存: 靜態頁面 or .js, .css, etc? (reply to 87464)

Howard: 關於 mini-app 問題可以到: @devs_zh

w: 嗯，就是前端静态页面

w: 好的

Traffic Builder: 1android手机你可以直接插到电脑上

Traffic Builder: 1用chrome://inspect/#device在电脑上调试

Traffic Builder: 1把cache关了就清空了

Traffic Builder: Ton链的官网上还有怎么开发TMA的教程，感觉写的挺有用的https://docs.ton.org/mandarin/v3/guidelines/dapps/tma/guidelines/testing-apps

— 2025-05-01 —

猫猫租赁: 请问我的号码 已经绑定了一个tg acc，且session在线，但是在fragment平台上没有 terminate session 按钮，这是为什么呢？

one: 机器人的联盟计划关了，还是被人投了广告是个什么情况有人知道吗

one: 有没有大佬知道哈 (reply to 87594)

— 2025-05-02 —

sniper07: Its me (reply to 87597)

Combot: shishani1 has been banned! Reason: CAS ban.

Combot: 『🔪𝕯𝖆𝖗𝖎𝖘𝖍𝖐𝖆𝖗𝖚𝖚🔪] has been banned! Reason: CAS ban.

Philip Lam: ⬆️點擊上方即可加入報單群組⬆️  CRV/USDT  📉空  📍Entry：0.7358  ✔️Target：0.684  ❌Stop Loss：0.750 (forwarded from Yo！這裡是最後的幣風港)

Combot: Катя 💋💋 has been banned! Reason: CAS ban.

Rose: TON Dev Chat (中文) 歡迎你的到來，請多加利用下方按鈕的資訊，並遵守群組規則。
