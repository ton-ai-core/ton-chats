🐼 Sild: [ton_lib/src/tlb/block_tlb/account.rs:151:9] account = Some(     Account {         addr: Std(             MsgAddressIntStd {                 anycast: None,                 workchain: -1,                 address: TonHash[7294428F130C71B08E164EADBC699145B14EB4301DFD9F92EA6CA73EA0D7A27D],             },         ),         storage_stat: StorageInfo {             used: StorageUsed {                 cells: VarLen {                     data: 1,                     len: 1,                 },                 bits: VarLen {                     data: 327,                     len: 2,                 },                 public_cells: VarLen {                     data: 0,                     len: 0,                 },             },             last_paid: 1732885264,             due_payment: Some(                 Grams(                     VarLen {                         data: 2884428202,                         len: 4,                     },                 ),             ),         },         storage: AccountStorage {             last_trans_lt: 51370168000003,             balance: CurrencyCollection {                 grams: Grams(                     VarLen {                         data: 0,                         len: 0,                     },                 ),                 other: None,             },             state: Frozen(                 AccountStateFrozen {                     state_hash: TonHash[C45475A239A93AF84137D1C775B8A62257103853188448594322F4ADB591A162],                 },             ),         },     }, )

кишуля: привет, кто бы мог помочь с библиотекой tonweb js?

Alexander: Задавайте конкретный вопрос - кто нибудь да поможет (reply to 302200)

кишуля: Инициализация библиотеки const TonWeb = require('tonweb');   const client = new TonWeb(new TonWeb.HttpProvider('ссылка на toncenter (v2/jsonRPC)'), {     apiKey: 'key'   });  создается перевод человеку с нашего кошелька const transfer = await wallet.methods.transfer({                 secretKey: keyPair.secretKey,                 toAddress: toAddressStr,                 amount: amountNanotons,                 seqno: String(seqno),                 sendMode: '3',               });  потом идет проверка на успешность перевода, чтобы убрать из бд баланс, который он вывел                const transactions = await client.provider.getTransactions(wallet.address, 1);               console.log('Recent transactions:', JSON.stringify(transactions, null, 2));               if (transactions.length > 0) {                 const latestTx = transactions[0];                 if (latestTx.out_msgs && latestTx.out_msgs.length > 0) {                   const outMsg = latestTx.out_msgs[0];                   if (                     outMsg.dest === toAddressStr &&                     outMsg.value === amountNanotons                   ) {                     transactionConfirmed = true;                     console.log('Transaction confirmed on blockchain');                     txHash = latestTx.transaction_id?.hash || txHash;                     break;                   }  но после этого идет постоянно ratelimit exceed (reply to 302201)

Alexander: Заплатите денег провайдеру чтобы вам повысили рейтлимит или поднимите провайдера у себя на сервере ) Ошибка прямо вам и говорит о том что происходит, бесплатный сыр нигде (reply to 302203)

Anton: оказывается, нужно писать реже  типа объединять поток сознания  в одно сообщение  а не разбивать  на несколько (reply to 302189)

youtya: Всем привет 👋  Есть вопрос по pytonlib, да, знаю, может быть не лучшая библиотека, однако что есть то есть.  Во время работы кода, насколько я понял, выскакивает ошибка валидации. Кто-нибудь сталкивался с подобным ранее?  Traceback (most recent call last):   File "C:\Users\***\PycharmProjects\***\minter.py", line 79, in <module>     asyncio.get_event_loop().run_until_complete(deploy_collection())   File "C:\Users\***\AppData\Local\Programs\Python\Python310\lib\asyncio\base_events.py", line 649, in run_until_complete     return future.result()   File "C:\Users\***\PycharmProjects\***\minter.py", line 42, in deploy_collection     seqno = await get_seqno(client, wallet_address)   File "C:\Users\***\PycharmProjects\***\minter.py", line 31, in get_seqno     data = await client.raw_run_method(method='seqno', stack_data=[], address=address)   File "C:\Users\***\PycharmProjects\***\.venv\lib\site-packages\pytonlib\client.py", line 290, in raw_run_method     contract_id = await self._load_contract(address, seqno)   File "C:\Users\***\PycharmProjects\***\.venv\lib\site-packages\pytonlib\client.py", line 258, in _load_contract     result = await self.tonlib_wrapper.execute(request, timeout=self.tonlib_timeout) pytonlib.tonlibjson.TonlibError: VALIDATE_BLOCK_PROOFlink #1 in BlockProofChain is invalid: [Error : 0 : virtualization error while checking BlockProofLink from (-1,8000000000000000,19392923):DEB5F35471DF5106B23E5BA22F1D809D993A2F900DE9E35210A393E7EBB15129:DC8DDB009C9990647BFF1C2097310C1D0048DE7794C5947169CB40896EA8D828 to (-1,8000000000000000,19395226):F93325583DA76EC5E8AA380E3E06A3B6E27F96A48AFBBD465463790B684B18F4:8C2CB47890C8883EB9A1D10E776E7C50E9CA875558A15E8BE0A1FC35B352A008 : prunned branch](during last block synchronization)  Process finished with exit code 1

&rey: В теории, такое должно быть, если лайтсервер врёт. (reply to 302209)

youtya: Проблема в том, что я перепробовал ls_index от 1 до 10, либо эта ошибка, либо таймауты (reply to 302210)

Evan: Всем привет!

Evan: Могу ли я кому нибудь из вас скинуть бота на оценку?

Molodoy Abuzer 3: Садись, 5 (reply to 302213)

Evan: М? (reply to 302214)

/B4ckSl4sh\: Даже 5 с плюсом (reply to 302214)

youtya: Небольшое уточнение: дело происходит в тестнете (reply to 302209)

youtya: Разобрался с проблемой. В https://ton.org/testnet-global.config.json неработающие лайтсерверы, на мейннете пара работающих при этом есть, обидно.  В таком случае - может кто подсказать где можно для тестнета норм лайтсервера найти? (reply to 302219)

Molodoy Abuzer 3: @KNPNVV у него проси (reply to 302220)

— 2025-04-25 —

Alex: Ребят, а что автосистем для верификации новых Jetton еще нету? Есть кто занимается этим?

Max: нет такого понятия на уровне TONа, как "верификация новых Jetton" (reply to 302223)

Alex: А какое есть? Путь верификации через гит понятен, просто не вижу предложений это автоматизировать хоть чуть.   Чтоб wallet, tonkeeper и остальные признал я имею ввиду (reply to 302224)

Max: ну вероятнее всего вы говорите про частную инициативу от tonapi. Оно вполне себе автоматизировано по популярности и ликвидности токена (reply to 302225)

Alex: Хорошо по другому, что в wallet ушла плашка неизвестный токен и позволила обмен и API транзакции. Написано это верификация (reply to 302226)

Max: Всё так. tonapi вас "верифицирует" автоматически, как только токен превратится из пустышки в что-то реальное и ликвидное   Для этого никакие PR в идеальном мире делать не надо (reply to 302227)

Alex: А запрос не нужно? Или просто можно. (reply to 302229)

Max: просто можно. Это альтернативный вариант (reply to 302230)

Alex: Понял принял благодарю, доброй ночи! (reply to 302231)

Max: взаимно! (reply to 302232)

Алексей: А как рассчитывается сколько газа потратится на инструкции с dict?

Andrey: Столько сколько ячеек в процессе загрузится (reply to 302240)

Алексей: А сколько стоит загрузка одной ячейки? (reply to 302242)

Andrey: https://docs.ton.org/v3/documentation/smart-contracts/transaction-fees/fees-low-level#tvm-instructions-cost (reply to 302243)

🎐*<@Maxim: У меня вопрос по поводу mintless jetton'ов и поля mintless_merkle_dump_uri в их метаданных.  На официальной странице описания написано:  Добавьте поля mintless_merkle_dump_uri и custom_payload_api_uri в метаданные токена согласно стандарту. Скачайте дерево airdrop'ов по mintless_merkle_dump_uri из метаданных jetton'а...  Но на практике — у популярных токенов, таких как Mintless Points или Hamster Kombat, это поле отсутствует, если кликнуть на metadata. Вот пример метаданных Hamster Kombat:  {   "name": "Hamster Kombat",   "symbol": "HMSTR",   "decimals": "9",   "image": "...",   "description": "...",   "custom_payload_api_uri": "https://proof.hamsterkombatgame.io/jettons/EQAJ8uWd7EBqsmpSWaRdf_I-8R8-XHwh3gsNKhy-UrdrPcUo/" } Как видно, поля mintless_merkle_dump_uri тут нет.  ❓ Вопрос: Почему это поле не указано ни у одного из этих jetton'ов, если по стандарту оно вроде бы обязательно?

Denis: Ну вообще оно есть но пустое. https://api.hamsterkombat.io/public/token/metadata.json Это хомяк беспокоился чтоб раньше срока не начали минтить. Надо пнуть чтоб выложили (reply to 302245)

Denis: А у минтлес поинтс есть https://gist.githubusercontent.com/EmelyanenkoK/271c0ada1de42b97c455ac935c972f42/raw/b7b30c3e970e077e11d085cc6713be3157c7ca08/metadata.json  Просто тонвьювер для жетонов произвольные поля в мете не пропускает. Там белый список. Надо добавить

Виктор: Здравствуйте

Виктор: Добрый день! Хочу узнать у вас, возможно ли подписывать транзакции автоматически? Ситуация: Я через покупаю звёзды. Мне каждый раз в TON Keeper надо открывать транзакцию и подтверждать отправку. Могу ли я как-то это автоматизировать? Никак не могу найти информацию. Прошу помочь мне!

🎐*<@Maxim: Cпасибо! но я не совсем понимаю , что значит "чтобы раньше срока не начали минтить" - разве mintles_merkle_dump_uri это не хэш в который закладывается   storeDict('address': {сумма, start_from, expire_at})   разве start_from не предотвращает проблему "раньше срока не начали минтить" - можете пожалуйста ответить? (reply to 302246)

Denis: Не. Там прям ссылка на boc где лежит все дерево балансов целиком (reply to 302255)

Denis: Зная это дерево можно посчитать пруф даже если апишка для пруфов лежит

🎐*<@Maxim: я как раз его скачиваю - оно просто огромное - это так ужасно (reply to 302265)

kocmo12: А если захочется докинуть адресов — все дерево пересобирать? (reply to 302266)

Denis: Нельзя докинуть (reply to 302268)

kocmo12: Понял, спасибо 🙏 (reply to 302269)

Denis: Его можно не качать целиком. Все данные есть в апи (reply to 302267)

Виктор: Добрый день! Хочу узнать у вас, возможно ли подписывать транзакции автоматически? Ситуация: Я через покупаю звёзды. Мне каждый раз в TON Keeper надо открывать транзакцию и подтверждать отправку. Могу ли я как-то это автоматизировать? Никак не могу найти информацию. Прошу помочь мне!

🎐*<@Maxim: я сделал csv-файл 0:ff..5b,6000000000,1640995200,1767244800 0:d2..71,9000000000,1640995200,1767244800  я сделал генератор boc-файл const dict = Dictionary.empty(Dictionary.Keys.Address(), airDropValue); dict.set(Address.parse(address), { amount, start_from, expire_at })  const airdropCell = beginCell().storeDictDirect(dict).endCell(); fs.writeFileSync('airdrop.boc', airdropCell.toBoc());  я сделал обратное получение csv-файла const boc = fs.readFileSync('airdrop.boc') const cell = Cell.fromBoc(boc)[0] const dict = cell.beginParse().loadDictDirect(Dictionary.Keys.Address(), airDropValue)  тут почему то мой код удаляется в чате если дальше продложить  Мои файлы равны  НО файл команды Mintless Points падает на const cell = Cell.fromBoc(boc)[0] с ошибкой: "Error: Invalid CRC32C" почему так? (reply to 302265)

ALEX: Кто-то знает уже есть какие-то конструкторі для ТМА?

Alex: Gpt4o 😁 html+js замечательно выглядит (reply to 302302)

youtya: Всем привет. У кого-нибудь есть опыт в деплое несеквенционных коллекций?

pgppchel: Здравствуйте, подскажите пожалуйста, что означает is_right: false и is_right: true?

pgppchel: Извиняюсь, но я не понял. Полагаю это не критично если у меня при минте жетонов будет отображаться is_right: true (reply to 302308)

X1ag: Ну ты когда собираешь транзакцию на трансфер, то пишешь store_bit(0) или store_bit(1) и от того что у тебя за бит зависит есть ли forward_payload или нет. Тонвивер это отображает (reply to 302309)

SweetJesus: ну either не совсем про это, а про то, что продолжается ли твой форвард пейлоад в текущей ячейке или лежит в рефе (reply to 302310)

🐼 Sild: а что за хрень тут происходит, сообщеньки удаляются...

X1ag: Не знал, спасибо  @sildtm это база (reply to 302314)

X1ag: https://t.me/tondev/302205 (reply to 302315)

🐼 Sild: да я читал вчера. но думал там прям спамить надо, а оказалось он просто как-то на шару удаляет вполне вменяемые сообщения (reply to 302322)

pgppchel: Спасибо, разобрался

Toffee: Добрый день коллеги, запутался очень сильно, вот этот индекс next_item_index это индекс коллекций или нфт? if (op == 1) { ;; deploy new nft       int item_index = in_msg_body~load_uint(64);       throw_unless(402, item_index <= next_item_index);       var is_last = item_index == next_item_index;       deploy_nft_item(item_index, nft_item_code, in_msg_body~load_coins(), in_msg_body~load_ref());       if (is_last) {         next_item_index += 1;         save_data(owner_address, next_item_index, content, nft_item_code, royalty_params);       }       return ();     }

Виктор: Добрый день! Хочу узнать у вас, возможно ли подписывать транзакции автоматически? Ситуация: Я через покупаю звёзды. Мне каждый раз в TON Keeper надо открывать транзакцию и подтверждать отправку. Могу ли я как-то это автоматизировать? Никак не могу найти информацию. Прошу помочь мне!

Toffee: С одной стороны вроде коллекций, но тогда почему тут идет сравнения с nft index?

&rey: Тонкипер такое не поддерживает... я вообще ни об одном приложении кошелька таком не слышал, ибо такое доверие к dApp почти никому не нужно. (reply to 302328)

&rey: Плюс к этому, если приложение кошелька закрыто, то ордер на перевод подписывать просто нечему.

SweetJesus: т.к. коллекция это деплоер нфт, то она должна хранить в себе индекс следующей нфт, чтоб соблюдался порядок. Так что этот индекс идет в нфт. (reply to 302329)

Kirill: LiteServer error: Liteserver crashed with 5556 code. Message: rate limit exceeded Reconnect failed: Liteserver crashed with 5556 code. Message: rate limit exceeded  я так понимаю проблема в том что много запросов к lt?

youtya: Это индекс следующего айтема в коллекции. Если при деплое айтема дать индекс не равный next_item_index в коллекции - смарт-контракт выдаст ошибку (reply to 302327)

youtya: По факту при деплое нужно указать текущее количество айтемов в коллекции, так как индексы исчисляются с нуля, то соответственно следующий индекс айтема всегда будет равен общему количеству айтемов в коллекции (reply to 302336)

Игорь: добрый день. Который день бьюсь, не могу понять в чем дело. Контракт обращается к адресам мастер жетона, чтоб выяснить адреса jetton wallet, но не срабатывает, и не понимаю в чем может быть дело.  contract ThreeTokenWallet with Deployable {      contractAddress: Address;     Counter: Int as uint16;      USDTMasterAddress: Address;     USDTJettonAddress: Address;     USDTbalance: Int as uint256;          AgaricMasterAddress: Address;     AgaricAddress: Address;     AgaricBalance: Int as uint256;      init() {         self.Counter = 0;         self.contractAddress = myAddress();         self.USDTJettonAddress = myAddress();         self.USDTMasterAddress = address("kQD0GKBM8ZbryVk2aESmzfU6b9b_8era_IkvBSELujFZPsyy"); //TEST  usdt master address         self.USDTbalance = 0;         self.AgaricMasterAddress = address("EQDxLTC1RLtis6UK9JiAYr0bVmVTlfi8-MSdlUq1_bbRboNX"); //  TEST Инициализируем пустым адресом         self.AgaricAddress = myAddress();// Инициализируем пустым адресом         self.AgaricBalance = 0;     }      receive() {}     receive(str: String) {}       receive("find_usdt_address") {         self.contractAddress = myAddress();         // Отправляем запрос на мастер контракт жетона         send(SendParameters{             to: self.USDTMasterAddress, // Адрес мастер контракта             value: ton("0.2"), // Достаточная сумма для оплаты газа             mode: SendRemainingValue + SendIgnoreErrors,             body: beginCell()                 .storeUint(0x2c76b973, 32) // op для get_wallet_address                 .storeAddress(self.contractAddress) // Адрес текущего контракта                 .endCell()         });     }        receive("find_agaric_address") {         self.contractAddress = myAddress();         // Отправляем запрос на мастер контракт жетона         send(SendParameters{             to: self.AgaricMasterAddress, // Адрес мастер контракта             value: ton("0.2"), // Достаточная сумма для оплаты газа             mode: SendRemainingValue + SendIgnoreErrors,             body: beginCell()                 .storeUint(0x2c76b973, 32) // op для get_wallet_address                 .storeAddress(self.contractAddress) // Адрес текущего контракта                 .endCell()         });     }      receive("counter") {         self.Counter += 1;     }    receive(slice: Slice) {     let op = slice.loadUint(32);     if (op == 0x2c76b973) {         let receivedAddress = slice.loadAddress();          let sender = slice.loadAddress();              // Проверяем, от какого мастер-контракта пришел ответ             if (sender == self.USDTMasterAddress) {                 self.USDTJettonAddress = receivedAddress;             } else if (sender == self.AgaricMasterAddress) {                 self.AgaricAddress = receivedAddress;             }      } else {         throw(102);     } }

Игорь: запрос делаю на функцию get_wallet_address, стандартную для жеттонов

Игорь: на usdt в том числе

Андрей: Первый раз вижу что бы у LS был рейт лимит, что за LS такой навороченный? (reply to 302335)

Kirill: Я просто до конца не понимаю

Kirill: это из за того что сервер много запросов ссыпет на ls

Kirill: Я просто подумал что ls не справляется

Tim: Дтон например (reply to 302341)

Игорь: Подскажите, кто давно на tact/func пишет, есть какие то способы дебага сообщений между котрактами, что в ячейках которые между контрактами курсируют, как это все разбирать , чтоб не методом перебора.

Игорь: иногда искренне не понятно, что происходит и где ошибки, наверняка есть какие то инструменты.

rends_east: https://github.com/ton-org/sandbox (reply to 302347)

Anton: https://docs.tact-lang.org/book/debug/ (reply to 302347)

Pavel: Ребят подскажите если сформировал internal message, где bounce=true, верно понимаю, что на аккаунт, где status = nonexist, его отправить не получится?

rends_east: все получится, просто вернется (reply to 302353)

Pavel: Ну то есть, адекватно отправлять нативный ton человеку, у которого пустой аккаунт, с флагом bounce=false? какие вообще common practice (reply to 302354)

youtya: Да, это норма. Если юзер что-то не понимает или потерял доступ к кошельку - это его проблемы (reply to 302356)

&rey: Если он подключен к вам по TC2, то достаньте walletStateInit и задеплойте ему кошелёк. (reply to 302356)

X1ag: hi, подскажите пожалуйста, почему этот гет метод отдает invalid address? slice get_owner_address() method_id {   load_data();    return owner_address; }  Invalid address: 0        75 |     async getOwnerAddress(provider: ContractProvider) {       76 |         const res = await provider.get('get_owner_address', []);     > 77 |         return res.stack.readAddress();          |                          ^       78 |     }       79 | }       80 | owner address это глобальная переменная: global slice owner_address;  в load_data инициализирую owner_address: owner_address = ds~load_msg_addr();  в save_data сохраняю так: .store_slice(owner_address)

X1ag: в стеке гет метода кстати лежит вот это: console.log     TupleReader { items: [ { type: 'slice', cell: x{2_} } ] } (reply to 302369)

/B4ckSl4sh\: о, ну это addr_none (reply to 302371)

X1ag: интересно, благодарю. Хз в чем ошибка конкретно) 2-й час сижу пялюсь блин (reply to 302372)

/B4ckSl4sh\: https://github.com/ton-blockchain/ton/blob/master/crypto/block/block.tlb#L100  это тоже адрес (reply to 302373)

X1ag: да, я понимаю) вопрос в том почему это addr_none если я четко в state_init объявляю его: liqPool = blockchain.openContract(             LiqPool.createFromConfig(                 {                     jetton_master_lp_address: jettonMinterLP.address,                     jetton_master_usdt_address: jettonMinterUsdt.address,                     jetton_master_code_usdt: jetton_master_code_usdt,                     jetton_master_code_lp: jetton_master_code_lp,                     jetton_master_data_lp: jetton_master_data_lp,                     jetton_master_data_usdt: jetton_master_data_usdt,                     owner_address: deployer.address,                     master_address: deployer.address,                     generalWalletAddress: generalWallet.address                 },                 code,             ),         );  и деплоер объявлен заранее:  deployer = await blockchain.treasury('deployer');  бтв, проблема не в деплоере (reply to 302375)

X1ag: кстати, все данные нулевые) Это возможно из-за того что переменные обозначены как глобальные? global int total_fees; global int counter_fees; global int version; global int supply; global int usdt_vault_balance;  вот что вывело(на скрине) по этим гет методам: slice get_owner_address() method_id {   load_data();    return owner_address; }  (int,int) get_lp_price() method_id {  load_data();     return (usdt_vault_balance, supply); }  slice get_master_address() method_id {   load_data();    return master_address; } (reply to 302378)

X1ag: бтв, так и не понял в чем проблема. Но после того как owner_address и master_address закинул в ячейку оно начало работать (reply to 302386)

Denis: А никто не хочет пойти пилить tonapi на го?  Обещаю что не будет этих ваших куберов, жиры, энтерпрайзных роадмапов. А будет хаос, лучший руководитель на свете, этичное отношение ко всему что только можно. Ах да! И инновации, пока все остальные занимаются копированием. А еще можно наконец поправить все баги тонапи которые вам мешают.

RocketMan: а сколько доплачивать надо за такую работу? (reply to 302391)

/B4ckSl4sh\: Работа мечты зашла в чат

/B4ckSl4sh\: Думаешь сменить работу?) (reply to 302393)

Tim: Зависит от ваших возможностей (reply to 302393)

Tim: Вот на это не ведитесь, вас заставят написать новые баги. (reply to 302391)

Maks: Звучит реально как работа мечты)) (reply to 302397)

Denis: тебя не берем. у нас уже есть один CEO (reply to 302393)

RocketMan: у тф тоже был (reply to 302399)

Denis: тф бы CTO

Denis: мне тут подсказывают что про кубер тоже пиздеж. у нас есть (reply to 302397)

Tim: если верить что его нет, то его нет (reply to 302403)

Denis: ну он перманентно в полуразвленом состоянии поэтому там всякое неважное

Denis: наброшу в пятничный вечер

/B4ckSl4sh\: В контесте уже достаточно давно на фулл асме сдают, да (reply to 302407)

Tim: Наивные молодые пользователи тона, там весь топ10 или топ20 выпилил весь такт еще пару дней назад (reply to 302407)

/B4ckSl4sh\: В целом на фанси смарт челленджах было то же самое :) (reply to 302409)

Denis: ну автор сообщений в тоне вероятно столько же сколько и ты. (reply to 302410)

Dmytro: @AntonTrunov как там со скоростью обстоят дела (reply to 302407)

Denis: тяжелая артиллерия к срачу подъехала. главное не спрашивать чей крым. (reply to 302413)

Андрей: Ты же сам и начинаешь этот срач) Да и мат используешь в своем лексиконе, осуждаю (reply to 302414)

Combot: Combot выдал(а) предупреждение Denis Subbotin (3/3) Reason: 1 reports (reply to 302403)

Combot: Combot кикнул(а) Denis Subbotin

/B4ckSl4sh\: АПХАХПХА ЧТО (reply to 302419)

Tim: бунд

/B4ckSl4sh\: На его статье на гисте держался весь онбординг

rends_east: Команда такта шутить не собирается, бьёт по центрам принятия решений

sd: уже продолжительное время перенесена на тонконсоль (reply to 302422)

sd: ^ последняя методичка @B4ckSl4sh (reply to 300180)

&rey: А по-русски её на тонконсоли не открыть, так что не то чтобы перенесена. (reply to 302424)

Sol: Как это понимать? (reply to 302407)

Алексей: на гисте она как-то душевнее написана) (reply to 302425)

Anton: если про олимпиадки, то так же, как с фанси, то есть как-то так: https://t.me/tondev/302411  а для продакшена — с каждым релизом улучшаем газ, а с Такт 2.0 в конце полугодия точно будем лучше фанси :) (reply to 302413)

Dmytro: так уже самые-самые лучшие же (reply to 302432)

Anton: ещё не везде, плюс часть вещей, которые мы на пользователя перекладываем вот здесь https://docs.tact-lang.org/book/gas-best-practices/, нужно поддержать в оптимизаторе (reply to 302433)

Dmytro: а объясните мне тогда в чем смысл олимпиад? (reply to 302432)

Dmytro: назвали бы "олимпиада по фифту" сразу

Alexander: 2.0 это уберут FunC как этап промежуточный? (reply to 302432)

Dmytro: а то создаете ложное ощущение что на такте можно писать быстро (reply to 302438)

Андрей: Всем привет 👋   Я web-дизайнер с навыками разработки. В IT более 5 лет. Если вам в помощь нужны дополнительные руки, или вам нужен дизайн для сайта/приложения, обращайтесь! Я буду рад продуктивному сотрудничеству 🤝

— 2025-04-26 —

Anton: а ты и твой специфичный юмор мне уже даже нравиться начинаете (reply to 302441)

Fraser: would someone mind sending me some testnet ton. dont want to wait for faucet ) Thanks UQA2tWCkYl4lRjqMDaVil5rsCt2xfvYWCVEQdEnSAPv4u4tL

Fraser: ?

🏆: каким образом получить данные/стейт контакта в читабельном виде? tonviewer показывает код, но не показывает данные.

Dmytro: что значит "читабельном"? (reply to 302480)

🏆: посмотреть эти данные, например, какая переменная что значит. (reply to 302481)

youtya: @testgiver_ton_bot (reply to 302475)

potato: Вопрос касательно func Получаю cell, там лежит строка мне нужно ее достать сконкатенировать свою строку и положить обратно

&rey: А ончейн этой информации вообще-то нет. Даже разделения storage на поля. (reply to 302484)

&rey: Это дорогая операция, +600 газа за каждые 127 байт левого слагаемого... (reply to 302486)

Oleg: Проще наверно логику переделать на змеиную строку

potato: Да, оно у меня с фронта идет как раз через makeSnakeCell() (reply to 302489)

🏆: а где она хранится в таком случае? на нодах поидее? потому-что при использовании публичного метода все эти данные возвращаются. ну и логичный вопрос риска потери стейта, либо его подмены. (reply to 302487)

&rey: Ноды хранят только склеенную ячейку. (reply to 302491)

&rey: Если контракт вам даёт гет-метод, возвращающий информацию о нём, то его и вызывайте. Это и локально можно сделать.

&rey: я имею в виду "ончейн нет ни названий полей, ни даже их границ или количества" (reply to 302487)

potato: Как my_address() в tolk реализован? myAddress() не работает)

Alexey: Привет! Какой максимальный размер сообщения в TON? Если я разом деплою сложную структуру контрактов, влезет ли код их всех в init-сообщение (чтобы не пришлось потом руками отдельными вызовами к отдельным контрактам говорить по какому адресу кто живет)?

Alexey: видел в доках про максимум в 65536 ячеек на стораж смарт контракта, про размер сообщения не нашел

potato: а в FunC есть преобразование типов? У меня контракт при деплое должен приобретать название согласно своего внутреннего номера Например главный контракт создает дочерний и присваивает ему id 123123 и он относится к когорте контрактов users get_contract_data должен возвращать cell c "user_123123"

𝐯𝐬𝐤⁴² 𝐝𝐢𝐞𝐝.: приветствую не с того ни с сего появилось у меня в коллекциях в приложении тонкипр. Что это такое? Как мне от этого избавится и представляет ли оно опасность?  ибо в истории транзакций нет даже информации о этой штуке (reply to 302517)

Vasilii: это обычное спам NFT, просто не обращай внимание, либо скрой, если есть такая функция в интерфейсе кипера  --  я сам кипером не пользуюсь, в тоне есть и получше кошелек (reply to 302519)

𝐯𝐬𝐤⁴² 𝐝𝐢𝐞𝐝.: я скрыл, только все равно не дает покоя, мало ли опасность представляет, так как из ни откуда появилось (reply to 302520)

Vasilii: опасности нет  любой пользователь любому пользователю может отправить любой nft, который может сделать кто угодно (reply to 302522)

🐼 Sild: идея для стартапа - кошелек который баунсит не-заапрувленные ассеты =) (reply to 302523)

🐼 Sild: хотя чего это я, это ж приложением разруливается. Ну, тогда вайт-лист обычный(

rends_east: Так можно сделать, советую заглянуть в контракты stonfi v1 в get методы пула, там они преобразуют адрес в строчку (reply to 302515)

Molodoy Abuzer 3: Соглашайся без раздумий, по рынку такой запрос как минимум в два раза дороже будет (reply to 302530)

Рома: Да тут работы на 10 минут и 10$ небось ?)) (reply to 302532)

Molodoy Abuzer 3: Вы правы. Считаю что это вообще не вы ему должны платить а он вам (reply to 302532)

𝐯𝐬𝐤⁴² 𝐝𝐢𝐞𝐝.: что это такое? (reply to 302525)

Рома: тебе ответили что по рынку в два раза ДОРОЖЕ и что отличная цена. На что ты говоришь что нет это не так. Зачем спрашивать если ты все знаешь? (reply to 302536)

potato: Ребята, а я правильно понимаю что в один Cell можно записать 32 символа или 31 + ref?

&rey: 1023 бита (127 байт) и от 0 до 4 ссылок; одно на другое не влияет. (reply to 302540)

potato: А длинные строки хранятся как ячейка + ссылка на следующую и там продолжение? (reply to 302541)

potato: Значит вот такая схема - ок  beginCell() .storeRef(ref1) .storeRef(ref2) .storeRef(ref3) .storeRef(ref4) .endCell()  А такая приведет к cell underflow ?   beginCell() .storeRef(ref1) .storeRef(ref2) .storeRef(ref3) .storeRef(ref4) .storeRef(ref5) .endCell()

&rey: Первая не сохраняет длинную строку, если что. (reply to 302543)

potato: Ну да, я просто уточняю чтоб закрепить у себя в голове (reply to 302544)

potato: А длинная строка так примерно будет выглядеть?  beginCell().storeRef(beginCell().storeRef(...)) (reply to 302544)

potato: а если в первом Cell лежит строка а в следующем int

&rey: beginCell().storeUint(..., 8)....storeRef(beginCell()....endCell()).endCell() (reply to 302546)

&rey: В. Любой. Ячейке. Есть только последовательность бит и последовательность ссылок. (reply to 302547)

𝐯𝐬𝐤⁴² 𝐝𝐢𝐞𝐝.: почему не получается сжечь?

potato: Ааа точно, там же через uint потом строку закладывать нужно

Oleg: В тоне есть только cell и больше ничего. Все остальное это происки врагов (reply to 302551)

potato: А как в самом func я могу проделать что то типа beginCell().storeUint(0,16).storeStringTail('Здесь может быть ваша реклама').endCell() непонятно как именно строку положить

&rey: Короткую — через .store_slice("здесь и будет"). С длинной будет больно, применяйте фронтенд или такт. (reply to 302553)

potato: cell new_cell = old_cell  это скопирует ячейку или будет ссылаться?

&rey: А хоть так, хоть этак — ячейка-то уже неизменяемая. (reply to 302555)

potato: у меня там максимум до двух уровней вложенности вроде планируется + 1к газа (reply to 302554)

&rey: Ну, собирайте, начиная с самой правой (вложенной) ячейки. (reply to 302557)

𝐑𝐢𝐜𝐡𝐢𝐞: Как с этой фальшивой транзой бороться ?

𝐯𝐬𝐤⁴² 𝐝𝐢𝐞𝐝.: достаточно заново авторизоваться   ps. мне прост так помогло (reply to 302559)

𝐯𝐬𝐤⁴² 𝐝𝐢𝐞𝐝.: не перезайти в кошель, а именно на фраге с ним зайти например

𝐑𝐢𝐜𝐡𝐢𝐞: ненене, мне так депозитят

𝐑𝐢𝐜𝐡𝐢𝐞: фальшивкой как то

𝐑𝐢𝐜𝐡𝐢𝐞: Видео не отправляется сюда(

𝐯𝐬𝐤⁴² 𝐝𝐢𝐞𝐝.: а это что (reply to 302566)

𝐑𝐢𝐜𝐡𝐢𝐞: а

— 2025-04-27 —

RootTon: Всем привет, подскажите пожалуйста, есть ли какая то песочница, или как можно запустить обычный код на func, без специфики для смарт контрактов? к примеру в доке написана функция, могу ли я как то запустить ее не деплоя смарт контракт и вообще не делая ничего что связано со смартом?

Alexander: Скомпилить и запустить из фифта через runvm (reply to 302571)

RootTon: принял спасибо (reply to 302572)

Alex: Здравствуйте!  Подскажите, пожалуйста, могу ли я как-то прослушивать входящие транзакции usdt на свой кошелек?  Мне нужно, чтобы срабатывала определенная логика на все транзакции переводов usdt на мой кошелек, также нужно иметь возможность парсить из транзакций amount и tag/memo. Спасибо!

Vladimir: Toncenter/tonapi. (reply to 302574)

Alex: А можно ли через websockets подписаться на actions? (reply to 302575)

Vladimir: У tonapi есть вебхуки. (reply to 302576)

Alex: Не могли бы Вы, пожалуйста, дать ссылку на ресурс, где можно об этом почитать и настроить вебхук? (reply to 302577)

Vladimir: https://track24.ru/google/?q=webhook%20tonapi (reply to 302578)

Alex: Спасибо! (reply to 302579)

Alex: https://tonapi.io (reply to 302580)

Alex: Вы же разработчик , странный вопрос... (reply to 302584)

Complex: Если вы хотите принимать депозиты, то вам подойдёт сервис github.com/gobicycle/bicycle Если вы хотите принимать оплату инвойсов, то хочу предложить попробовать вот этот сервис - github.com/txsociety/spice-harvester/ (reply to 302574)

Alex: Ребят ктото может написать скрипт на js для перевода не верифицированных токенов? payload надо собрать. или это незя так?

kocmo12: Обычный Jetton transfer  Нет разницы верифицированный или нет (reply to 302591)

Alex: он меня задолбал уже невозможно проверить транзакцию, но видимо руки кривые чтоль) (reply to 302592)

kocmo12: Проверить трансфер или затрансферить не можешь?  То есть в бч уходит? (reply to 302593)

Alex: если переводится TON никаких проблем, если пытаюсь свой токен то запрос на транзакцию открывается а там невозможно проверить транзакцию. (reply to 302594)

kocmo12: Чекни тут  https://docs.ton.org/v3/guidelines/ton-connect/guidelines/preparing-messages#jetton-transfer (reply to 302595)

potato: Как понять сколько storeUint() указывать перед storeRef()

SweetJesus: у тебя в ячейку лезет до 1023 бит и до 4 ссылок, отталкивайся от этого. (reply to 302597)

potato: Допустим у меня в storeRef() кладется ячейка на 200 бит Мне указывать storeUint(0, 200)?

potato: Не очень понимаю как это работает

Алексей: если у тебя кладется ячейка, достаточно просто положить ячейку storeRef ом, ничего больше дедать не нужно (reply to 302599)

potato: Я же правильно понимаю, что storeUint как бы освобождает место определенного размера для ячейки?

potato: просто storeRef?

SweetJesus: хз, тебе бы в доки заглянуть еще раз, конкретно на сигнатуру .store_uint и что оно делает, думаю понятно будет) (reply to 302602)

potato: Сделано, теперь понял в чем была проблема

Daniil: Всем привет А почему библиотека tonconnect для Vue сделана для Vue 2, а не Vue 3? не будет конфликтов, если через силу её поставить и использовать во Vue 3? или лучше обычный @tonconnect/ui + @tonconnect/sdk поставить?

sd: с тонконект юи ок работает (reply to 302611)

Alex: https://github.com/d0rich/vueton (reply to 302611)

Daniil: Спасибо (reply to 302613)

RootTon: Народ подскажите плиз, как преобразовать string в cell в ts ? у меня есть код жетон минтера скопированного из тонвивера в формате base64 я хочу передать этот код минтера в свой смарт чтобы в своем смарте независимо от реального jetton minter рассчитывать адрес жетон волета (для того чтобы сделать проверку при транзакции в жетонах, что переводятся именно те жетоны что мне надо а не какой то шлак).   ps: нужно преобразовать строку в cell чтобы положить ее в storeRef

&rey: Cell.fromBase64 (reply to 302618)

potato: Как получить amount входящего сообщения Например если отправили 1 тон для деплоя

Shkiper: А разве после формирования транзакции в определенной монете и отправке на подписание, пользователь может изменить Jetton  ? (reply to 302618)

&rey: А разве пользователи отправляют транзакции только через dApp? (reply to 302622)

Shkiper: Может я не совсем понимаю контекст, но они наверное используют кошельки и как то подтверждают оплату разве нет? Я говорю о том сценарии где мы формируем транзакцию и отправляем её на подтверждение пользователю (reply to 302623)

SweetJesus: msg_value (reply to 302621)

&rey: А речь идёт и о злоумышленниках, которые с радостью отправят на контракт EVIL вместо нужного жетона. (reply to 302624)

&rey: Нет. Вызвать getAddressInformation. (reply to 302626)

&rey: Не забудьте, что вам нужен и код, и данные, и адрес жетон-мастера.

Shkiper: То есть вы говорите о компрометации оригинальной транзакции и замене Jetton ??? Но при таком сценарии они не поступят на реальный  jetton_wallet ведь так ? (reply to 302627)

&rey: 1. Оригинальной транзакции может и вовсе не быть, кстати.  2. Конечно. Получателю придёт transfer notification от другого адреса. Вопрос был в том, как определить, какой адрес правильный. (reply to 302631)

web-assist 🧀: его не надо ниоткуда через ~load доставать? просто обращаюсь сразу как msg_value? (reply to 302625)

&rey: Это один из аргументов recv_internal, третий справа. (reply to 302633)

web-assist 🧀: ааа, в tact через context() достается (reply to 302634)

potato: () recv_internal(cell in_msg_full, slice in_msg_body, int msg_value)  Вот так? (reply to 302634)

&rey: Только msg_value будет слева. Говорю же: "третий, считая с правой стороны налево". (reply to 302637)

potato: Понял! спасибо большое

potato: А это влияет на газ или нет?

Shkiper: Чтобы определить какой адрес правильный мы должны знать что мы должны получить (reply to 302632)

Shkiper: Тут видимо речь идёт об обменнике, просто у меня нет таких потребностей, я отталкиваюсь от позиции пользователю доверять нельзя и обрабатываю транзакции по факту получения средств на кошелёк

Shkiper: Кого не затруднит дайте пожалуйста ссылку на библиотеку для создания jetton_wallet w5 на сервере JS

&rey: Что такое "жетон-кошелёк кошелька версии 5"? (reply to 302644)

Shkiper: Для контракта кошелька w5 (reply to 302645)

RootTon: Народ хелпми плиз, я взял эти 2 значения, и положил их в смарт в надежде что у меня получится рассчитать адрес жетон валета. все основные функции я под чистую перетырил из экземпла  но в геттере у меня почему то не совпадает адрес с реальным жетон минтером, можете ткнуть носом где я мог обосраться ? вот если надо жетон мастер  ps: я хочу рассчитывать у себя адрес жетон валета для проверки на то что мне перевели нужные мне в смарте жетоны а не какой то шлак

Shkiper: WalletClass = tonweb.wallet.all['v4R2']; а мне нужна w5, в данной библиотеке нет поддержки w5 и вообще она мне не особо нравится

Shkiper: Не может быть так что там вид адреса в другом формате ? Вы вставляете user-friendly формат а там может используется raw ? Просто версия (reply to 302648)

RootTon: тогда бы была ошибка потому что raw это hex, а тот адресс минтера что я передаю в base64 вродь но явно отличается от hex (reply to 302650)

RootTon: поэтому я и не понимаю в чем может быть прикол

RootTon: @ton/ton  const addre = WalletContractV5R1.create() (reply to 302649)

Shkiper: Благодарю за ответ (reply to 302653)

&rey: А зачем вам вообще jetton_wallet_code? В https://github.com/ProgramCrafter/tvm-quirks/blob/master/ok-jetton-wallet-onchain.fc он не используется. (reply to 302648)

RootTon: ну я сопутствовался логикой из жетон минтера, ведь там есть геттер get_wallet_address который рассчитает адрес жетон валета исходя из адреса (обычного, тон валета если так можно говорить)  суть в том чтобы при транзакции когда мне на смарт переводят жетоны рассчитать адрес для отправителя и сравнить его с адресом отправителя типо sender == gen_addr и таким образом узнать а соответствует ли жетон нужному мне и не перевели ли мне какой нибудь мем коин а я потом за это буду начисления другие делать (reply to 302655)

&rey: А в другом мастере другой код геттера, и что вы делать будете? Поэтому RUNVM и нужно. (reply to 302656)

🕵️: Кто знает есть ли тестовые USDT?

sd: Поиск по чату работает (reply to 302658)

X1ag: Используйте лучше метод, который предложил prafter(через runvm). Он принимает в себя master address, master code и master data  Лично я в своих проектах именно это и использую (reply to 302656)

X1ag: Нету. Создавайте свой тестовый usdt и используйте его (reply to 302658)

RootTon: а вот где это взять? (reply to 302660)

&rey: На вкладке Code тонвьювера. (reply to 302662)

RootTon: а это оно понял спасибо

RootTon: а в чем плюсы? и почему нельзя взять кусок кода (а именно геттер реального жетон минтера по стандарту и все прикладные функции) и рассчитать адрес ? (reply to 302660)

X1ag: 1. Так проще  2. https://t.me/tondev/302657

RootTon: аргумент (reply to 302666)

🕵️: Еще один вопрос. Не могу по поиску найти, как изменить время в тестовом блокчейне. Чтобы проверить работу блокировок. Чтобы контракт по now() выдавал время, которое я установлю (в тестовой среде)

SweetJesus: blockchain.now = ... (reply to 302668)

RootTon: ну оно заработало, спасибо!

🎐*<@Maxim: привет! мне нуежно узнать как этот код на ts          let receiverProof = airdropData.generateMerkleProof(owner);   переписать на python? возможно?

Андрей: Залезь в исходники и перепиши на питон, сейчас кажется не реализовано ни в одной питон библиотеке (reply to 302676)

🎐*<@Maxim: где они     generateMerkleProof(key: K): Cell; вот я перешел на определение и все больше ничего нет (reply to 302677)

Nick: https://github.com/ton-org/ton-core/blob/main/src/dict/generateMerkleProof.ts (reply to 302678)

🎐*<@Maxim: можете пожалуйста, обясниить global int merkle_root; в jetton-wallet.fc для минтлесс контракта это ведь не тот же самый global int merkle_root; из jetton-minter.fc? (reply to 302683)

Andrei: привет, подскажите кто по публичным liteservers https://ton-blockchain.github.io/global.config.json сильно по блокам отстают, или уже не работают?

BlockRunner: Уважаемые TON Core, есть пожелание чтобы снэпы были как у всех в стандартных архивах, а не в zfs потоке Ну или хотя бы дополнительно заливать .tar.zst, что обеспечит совместимость с более широким спектром систем.

🐼 Sild: _ cell:^Cell st_bits:(## 10) end_bits:(## 10) { st_bits <= end_bits }   st_ref:(#<= 4) end_ref:(#<= 4) { st_ref <= end_ref } = VmCellSlice;   а эти start/end - это итераторы в терминах плюсов? т.е. если st_ref=0, end_ref == 4 - это значит [st_ref; end_ref) ?

F: Скоро будет пачками bagid в ton storage Ну и что бы все это разворачивалось через интерактивный установщик мтк и пользователю вообще не нужно было думать про скачивание архивов (reply to 302701)

Shkiper: Вот чудеса, забыл и отправил токены прямо на jetton_wallet теперь у него есть свой jetton_wallet🤦‍♂

Alexander: Светлая память (reply to 302712)

Denis: На tonstat.us можно посмотреть. Но помните что под нагрузкой ситуация сильно поменяется (reply to 302700)

Vladimir: С возвращением. (reply to 302714)

Andrei: спасибо (reply to 302714)

potato: смарт контракт может как то за один recv_internal отправить больше 255 сообщений? Например если я получаю сообщение-активатор, а разослать мне надо за один подход 1000 сообщений?

Alexander: Нет, можно самого себя пнуть и дальше продолжить (reply to 302725)

Randall: Извиняюсь за нубский вопрос, но не могу понять. Вот когда я экстернал посылаю через лайтсервер, лайтсервер через оверлей это сообщение шлёт своим соседям-пирам, пока оно не дойдёт до шарда, в котором находится аккаунт получателя. А что происходит дальше? Как сообщение находит ту ноду, на которой хранится аккаунт получателя и на чьей TVM исполняется вызванный ей код?

Randall: В вайтпэйпере не могу найти таких нюансов. Т.е. как узнать, на какой ноде физически хранится контракт получателя. Или если он хранится на всех, то на какой тогда исполняется, когда получает экстернал?

&rey: Контракт хранится везде — на всех валидаторах, ответственных за шард, и на всех слушающих его фулл-нодах. На практике это означает "строго на всех нодах". (reply to 302728)

&rey: То, будет ли экстернал в конкретном блоке соответствующего шарда, определяет только валидатор, создающий сам этот блок.

Randall: Т.е. код контракта исполняется на ноде валидатора, который получил экстернал и который создал блок? (reply to 302730)

&rey: Да. (Потом все остальные валидаторы, проверяя блок, исполнят контракт ещё раз.) (reply to 302731)

Randall: А валидаторы создают блоки по методу "кто быстрее"? Ведь они почти одновременно могут получить один и тот же экстернал

&rey: Нет. Вот этот уже алгоритм можно найти в catchain.pdf. (reply to 302733)

Randall: Он в репе блокчейна тон? (reply to 302734)

&rey: Э... Вот: https://docs.ton.org/catchain.pdf (reply to 302735)

Randall: А, ок. Спасибо за информацию (reply to 302736)

Randall: Просто слежу за одним mev-ботом. И у него почти 99% выигрышных транз, против конкурентов. Вот и думаю, теоретически, будучи валидатором, можно ли влиять на это или нет?

rends_east: нет, скорее всего нет для этого нужен сговор валидаторов (reply to 302738)

&rey: Есть две вещи, которые там можно сделать, и нет, не особо поможет. (reply to 302738)

Randall: Значит он знает какой-то секрет, который не знают другие) (reply to 302739)

rends_east: он знает какой то секрет, который знает много кто, но который впадлу реализовывать) (reply to 302741)

Randall: Ну вот я пока не знаю) (reply to 302742)

Randall: То что, контракт его бота в одном шарде с контрактом валлета роутера стонфи это понятно

Randall: Но вот почему его интернал на валлет всегда первый, пока не понятно

/B4ckSl4sh\: А можно адрес ?))) (reply to 302738)

Randall: EQBCHGUYlFQ4rWvC_SdA16TRIHonoxe0Zf3OMA4q5Q67mdTh (reply to 302748)

Randall: Бывает даже так, что его эктернал в блоке ниже экстернала конкурентов. Но интернал его всегда первый 🤷🏼‍♂️ Вот в этом и весь секрет.

Randall: блок (0,6000000000000000,52361569)

rends_east: если lt одинаковый, порядок в блоке не важен (reply to 302750)

Randall: Получается, что его экстернал обрабатывается всегда раньше (reply to 302753)

255: Есть пример как эмулировать транзакцию через tonapi и можно ли получить примерную комиссию?

— 2025-04-28 —

Lacc_si: На tact'е можно как-то лимитировать колво входящих с 1 адреса за n время? Как я понимаю map не лучший вариант Если кто реализовывал подобное, поделитесь опытом

🎐*<@Maxim: ;; Trick for gas saving originally created by @NickNekilov - вы указаны в jettons-utils.fc можете пожалуйста сказать зачем при вычислении адреса кошелька calculate_user_jetton_wallet_address() появилась salt ? ведь все работало в стандартной версии и без соли, верно? (reply to 302683)

Gianni: Как sbt получить на память?

Nick: Можно ссылку? (reply to 302775)

🎐*<@Maxim: https://github.com/ton-community/mintless-jetton/blob/main/contracts/jetton-utils.fc 23 строка (reply to 302780)

Nick: А, понял, о чем речь. Там делается 32 итерации с разной солью чтобы кошелек попал в тот же шард в котором и владелец кошелька с большой вероятностью. Нет межшардовых взаимодействий -> работает быстрее. (reply to 302775)

🎐*<@Maxim: в вашем предложении по стандарту для mintless 0000-jetton-offchain-payloads.md вы указали в api /state MUST return a JSON total_wallets и master_address - но чуть ниже в примере у вас "total_wallets" и "address" - понимаю что возможно стандарт еще не закончен, но можете сориентировать, пожалуйста, какую лучше версию взять "master_address" или "address"? (reply to 302714)

X1ag: hi, вылетает exit_code 5 (range check error).  в коде используют такие вычисления: int need_to_send = muldiv(jetton_amount, 65000, 1000);  мне нужно отсылать 65% от jetton_amount(decimals: 9) на другой ск  почему число вылетает за ренж и можно ли это как то исправить?

User: Можно-же разделить на 100 и умножить на 65 (reply to 302789)

X1ag: Округление должно быть минимальным

User: С начала умножая вы всегда рискуете получить range error, если условное количество токена уже приближено к пороговому значению  p.s. Не знал что muldiv проверяет итоговое число (reply to 302792)

X1ag: muldiv разве не итоговое число на range проверяет?

/B4ckSl4sh\: итоговое (reply to 302798)

potato: Всем доброе утро! Как я могу int прочитать в виде slice?

Oleg: В любом случае muldiv(x, 65, 100) должно быть (reply to 302798)

potato: Как мне можно в builder положить slice int slice так, чтобы потом прочитать это все как один целый slice

potato: Так много вопросов и так мало ответов

potato: Как в Tact работает метод toString() в билдере?

SweetJesus: load_bits юзай (reply to 302810)

potato: Так он из слайса достает биты, мне надо из int получить слайс (reply to 302813)

SweetJesus: ты понимаешь что такое слайс? (reply to 302817)

potato: Мне нужно, взять строку которая приходит в сообщении в ячейке как snakeCell Далее мне нужно взять число которое хранится в контракте как uint64 Далее мне нужно сконкатенировать строку + число + строку И отдать это так, чтобы можно было прочитать в гет методе Например "user123123order"  Если бы я все понимал или хотя бы была нормальная документация как на Tact я бы не задавал вопросов и либо писал (т.к. все понимаю и знаю) либо прочитал документацию и писал по ней

Oleg: Что мешает отдавать в геттере эти 3 значения отдельно, не конкатенируя на контракте? (reply to 302819)

potato: Читается сторонним сервисом, не нашим (reply to 302821)

Anton: а почему не написать на такте? (reply to 302819)

potato: Я бы с огромной радостью и удовольствием написал на нем, но к сожалению так и не смог убедить заказчика перевести код на tact Хотят строго FunC (reply to 302826)

Anton: мы (TON Studio) можем помочь :) (reply to 302828)

Alexey: Это же гет-метод? (reply to 302819)

Alexey: Если гет-метод, можно просто сконкатить

Alexey: число перевести через itoa, сейчас скину код свой

Alexey: builder itoa(int value, int radix) {     builder result = begin_cell();     if (value < 0) {         result = result.store_slice("-");         value = abs(value);     }      int divisor = 1;     while (value / divisor >= radix) { divisor *= radix; }      do {         (int digit, value) = divmod(value, divisor);         divisor /= radix;         int char = 0;         if (digit < 10) { char = 48 + digit; } else { char = 87 + digit; }         ;;         '0' char code ^^       'a' char code - 10 ^^         result = result.store_uint(char, 8);     } until (divisor == 0);      return result; }  cell append_to_text(cell head, cell tail) {     slice ds = head.begin_parse();     if (ds.slice_refs_empty?()) {         return begin_cell()             .store_slice(ds)             .store_ref(tail)             .end_cell();     }      cell next_head = ds~load_ref();     return begin_cell()         .store_slice(ds)         .store_ref(append_to_text(next_head, tail))         .end_cell(); }

Oleg: Только этот перевод будет стоить, как подержанный бронепоезд (reply to 302837)

Alexey: это с чего бы? именно itoa достаточно оптимизирован (хотя числа в текст переводить все равно дорого, да). Вот append дорогой, но и фиг с ним, он все равно только для get предназначен (reply to 302839)

Alexey: Можно еще if заменить на ?: кстати, надо бы сделать, забыл что он в func есть (хз правда, будет ли тут выигрыш)

Alexey: И итоговый код такой получится примерно (только надо помнить что append дорогой):  cell my_get_method() method_id {     (         cell string_start,         int my_id,         cell string_end     ) = load_state();       cell id_as_string = itoa(my_id, 10).end_cell();      ;; и не забыть про префикс snake в начале - нужно либо     ;; его зашить в string_start изначально, либо добавить тут     cell result = string_start         .append_to_text(id_as_string)         .append_to_text(string_end)      return result; }

Xram_Gift: ку

RootTon: Всем привет, подскажите плиз, есть ли что то по типу console.log в func ? нашел в доке некий dump и strdump но кидает ошибку   error: previous type of function ~strdump : Forall (_Z) _Z -> (_Z, ()) cannot be unified with new type slice -> (): cannot unify type (slice, ()) with ()           () ~strdump(slice str) impure asm "STRDUMP";

rends_east: strdump выводит строчку ~strdump("непристойное выражение")  А ~dump выводит переменную (reply to 302867)

RootTon: error: previous type of function ~dump : Forall (_Z) _Z -> (_Z, ()) cannot be unified with new type Forall (A) A -> (): cannot unify type (??86, ()) with ()        forall X -> () ~dump(X value) impure asm "s0 DUMP";  мне нужно что то что выведет слайс (reply to 302870)

❤️🐾 🏰 Tower: Здравствуйте, подскажите пожалуйста. Почему иногда при создании транзакции, тонкипер ее не видит бывает?

SweetJesus: точку с запятой мы за тебя должны после ~dump() поставить?) (reply to 302874)

Василий: to_address~dump() (reply to 302874)

RootTon: а ) упс (reply to 302877)

RootTon: не не в ней прикол был (reply to 302877)

RootTon: и так тоже не робит (reply to 302878)

RootTon: и так тоже собственно

Василий: Возможно, где-то есть переопределение ~dump. grep'ните по проекту (reply to 302881)

SweetJesus: хз, глянь мб переопределяется ~dump где-то, потому что это builtin (reply to 302882)

❤️🐾 🏰 Tower: Ребят подскажите пожалуйста (reply to 302876)

RootTon: да так оно и было, а где теперь можно этот дамп посмотреть? ps: тесты я не пишу, я тещу все скриптами и варперами (reply to 302883)

Василий: Get-ChildItem -Recurse | Select-String "dump" -List Вот так должно работать в ps (reply to 302886)

Kirill: Всем привет. Подскажите пожалуйста, как верфицировать контракт? Что в это поле надо забросить?

RootTon: Исходный код (reply to 302889)

Иван: Друзья, может кто сталкивался с такой ошибкой:  Validation error: 1 validation error for Request\n' +         'body\n' +         '  value is not a valid dict (type=type_error.dict)',       code: 422  Происходит при попытке задеплоить контракт через blueprint run через tonconnect.  Уже попробовал и tonhub и tonkeeper, и версию blueprint поменять - везде одно и то же....

Иван: Что теперь, через ссылку ton:// деплоить что ли?)   (в tonkeeper и она не работает - только в tonhub)

Василий: Лучше используйте blueprint.  blueprint verify, далее по диалогу (reply to 302889)

Kirill: О, супер, не знал о таком способе (reply to 302894)

/B4ckSl4sh\: если такт - то .pkg, если фанси то сурсы (reply to 302889)

Kirill: а что сюда писать?

/B4ckSl4sh\: ничего (reply to 302902)

🎐*<@Maxim: можете пожалуйста, ответить по минтлес токену: в файле jetton-wallet.fc есть merkle_root, и в jetton-minter.fc тоже есть merkle_root - я не понимаю они равны должны быть? просто скажите да или нет?

Kirill: {"stack":"Error: Timed out\n at Timeout._onTimeout (/app/src/utils.ts:62:14)\n at listOnTimeout (node:internal/timers:588:17)\n at processTimers (node:internal/timers:523:7)","message":"Timed out"} (reply to 302904)

/B4ckSl4sh\: Возможно орбсу чуть плоховато (reply to 302908)

Kirill: : )

RootTon: Всем ку, я начал недавно изучать func и сразу на прод задачах, большое спасибо всем кто помогал и подсказывал мне. В благодарность я решил запилить учебник с гайдами о том как писать на func и постарался максимально разжевать практику, теорию кто хочет тот найдет. Оцените пж + буду благодарен фидбэку

RootTon: ps: я вроде ничего не нарушил из правил чата

Иван: Мой совет книгу кто-нибудь возьмитесь написать с примерами и всё такое, намного больше пользы будет. ИМХО (reply to 302911)

RootTon: Этим и занимаюсь, только до книги полноценной мне далеко, а вот гайд учебник вполне себе могу (reply to 302913)

Иван: Надо исходить из цели: "Вовлечь/Заинтересовать, как можно больше новых участников". Значит, нужен не гайд. А нужны примеры, покрывающие самые желанные варианты кода. Вроде, код элементарного интернет магазина, код элементарного пула ликвидности, код элементарного бота ответов и тд. То ради чего народ приходит. Посмотрев книгу и разобравшись с примером они свой вариант смогут сделать. А от ваших гуидов, разбросанных по всему интернету толку 0, хотя может и не 0, чат GPT обучается на ваших ошибках (reply to 302914)

RootTon: Нет вы не правы. Все начинается с этого и заканчивается там где людям лень читать все что больше 0 слов. Поэтому даже хорошая книга может затеряться банально потому что людям нужно решение их проблемы а не умение решать проблемы (reply to 302916)

Axror: я хотел связаться с разработчиками тон как можно связаться

Иван: Тут полный чат разработчиков ton:)

Иван: Пишите прямо сюда:)

George: Мне кажется, речь об этих. (reply to 302925)

Ivan: Друзья, подскажите в чем может быть проблема. Генерирую ссылку для транзакции такой функцией. В тестнете. Проблема в body, в которое я хочу передать opcode.  Если отправлять через приложение "Sandbox", то отправляется транзакция, но БЕЗ body. Если отправлять через TonKeeper, то при сканировании QR получаю ошибку "unknown parameter body".  В чем может быть проблема, помогите пожалуйста

&rey: base64url кодирование пробовали? (reply to 302928)

Axror: Как я могу связаться с разроботчиками тон

Ivan: попробовал, результат тот же (reply to 302930)

Axror: Я хотел создать свой токен

&rey: А, кстати, этот параметр называется bin. (reply to 302932)

Ivan: аа, да действительно. Нужно передавать не body, а bin!  Спасибо Вам большое! (reply to 302935)

— 2025-04-29 —

Daniil: Всем привет Какие есть аггрегаторы на ТОНе, кроме Dedust Router V2, coffee, rainbow и Omniston (и у него есть REST API? Я нашел только NodeJS SDK) И есть ли между ними разница? Я, конечно, понимаю, что на ТОНе всего 3 DEXa (stonfi, dedust и tonco), но просто удивило, что вычисления Dedust Router и Coffee настолько похожи, что даже на специально большие суммы они выдают 1 в 1 одинаковые результаты вбил для примера свапы USDT -> TON на 1 000 000 USDT, кофе вернул 297589.5065381642, Dedust 297589.506923665

sd: xdelta.fi ещё (reply to 302955)

🎐*<@Maxim: Не понимаю, почему нельзя докинуть в бок -файл адресов для минтлесс ? я же могу спокойно докинуть и изменить merkle_root через op::upgrade, верно? (reply to 302270)

Denis: Потому что поменяются адреса жетон-воллетов (reply to 302962)

🎐*<@Maxim: Денис, здравствуйте! в стандарте вы писали, что хранится single hash for all items (not per item) Значит я делаю вывод: merkle_root одинаков как для master, так и для тысяч wallet’ов. Но тогда автоматически возникает вопрос: если первый аирдроп прошёл и я хочу провести 2 или 3 аирдропы.., мне явно нужно менять BOC-файл, верно? У пользователя уже есть токен после первого аирдропа, и я меняю merkle_root (вы говорите, что Jetton-wallet при этом меняется, я согласен — ведь merkle_root для всех один). И куда тогда придут жетоны после второго аирдропа? Пользователь откроет кошелёк и увидит две строки с одним и тем же жетоном, или Tonkeeper автоматически суммирует их? Я не понимаю. (reply to 302963)

Denis: там не предусмотрена такая возможность. это только для первичного распределения

Denis: но через кастомпэйлоад вы можете выдавать одноразовые подписанные вашим сервером сообщения которые будут минтить произвольные суммы на кошельках юзеров

Denis: надо конечно продумать защиту от реплая и т.п.

🎐*<@Maxim: 👾 Правильно ли я понимаю логику так: Tonkeeper будет периодически обращаться к нашему GET /wallet и получать каждый раз новый custom_payload, а чтобы смарт-контракт кошелька вновь позволял mint’ить, мы просто сбрасываем в нём флаг is_claimed обратно в 0, верно? (reply to 302983)

Denis: Не периодически а в момент отправки

rends_east: Если у вас определены 2 и 3 аирдропы, просто их нужно провести не сразу, а потом, то это тоже можно включить в merkle дерево

Denis: Ну для этого адреса знать надо на момент минта (reply to 302987)

🎐*<@Maxim: вы имеете в виду можно добавит в структуру address {amount, start_from, expired_at} - дополнительне поле - порядковый номер текущего эйрдропа? (reply to 302987)

Denis: ну я бы скорее добавлял номер дропа не в значение а в ключ

Denis: а внутри даты кошелька вместо одного булеана битовую маску под каждое поколение дропа

Alex: Шукаємо фул-стек розробника для miniapp у Telegram  Задачі: 1️⃣Підключити TON Connect. 2️⃣Реалізувати перевірку підписки на канал. 3️⃣Налаштувати систему виконання завдань із нарахуванням балів.  Що важливо:  • Досвід роботи з Telegram MiniApps.  • Розуміння Web3 та інтеграції блокчейнів.  • Адекватність у комунікації (без бюрократії і «ще треба тиждень подумати»).  Готові швидко домовлятись та працювати. Пишіть у DM та кидайте свої кейси.

🎐*<@Maxim: но как вы сказали ранее, merkle_root по сути рассчитываем 1 раз (к сожалению), получается мы должны заранее знать кол-во будущих эйрдропов, а я хочу бесконечное количество эйрдропов, а тут получается конечное, верно? (reply to 302991)

Denis: Да. (reply to 302996)

Denis: Но вы можете использовать кастомпейлоад без меркл пруфа если уж вы в любом случае хотите как-то произвольно после запуска рассылать награды

Denis: Зашиваете вместо меркл рута ваш пабкей и им там генерируете из воздуха сколько надо

Ma><im: всем привет! посоветуйте пожалуйста API для парсинга информации о очень больших коллекциях NFT, например номис, где под миллион айтемов.  столкнулся с проблемой, что dton graphql например не отдаёт все айтемы в коллекции. да и вообще graphql при всём своём удобстве или очень дорогой, или плохо работает  у кого-то был опыт с такими задачами с REST API TONAPI или TONCENTER?

Tim: На тоне нет апи с которого можно быстро миллион чего то спарсить

Tim: Медленно - тонапи, тон центр, дтон

Denis: Да ладно. На стандартном тарифе тонапи миллион айтемов парсится за 10 секунд (reply to 303009)

/B4ckSl4sh\: А какой способ брать инфу о созданных блоках будет самым быстрым? Какая задержка на индексацию у тонцентра, тонапи, дтон? Может замерял кто-то

Tim: Лайт сервер… (reply to 303011)

/B4ckSl4sh\: Ну логично что лс побыстрее будет, да. Но насколько?

Denis: Причём желательно валидатор (reply to 303012)

Tim: Почему кстати нет до сих пор валидаторов которые апи продают

Denis: Почему нет. Обращайся (reply to 303016)

/B4ckSl4sh\: Типо 1 секунда? Больше? (reply to 303013)

Tim: Публично, прозрачно имею ввиду (reply to 303017)

Denis: Потому что такого не будет (reply to 303019)

Seitaro: После оптимизаций распространения блоков с августа 2024 эти данные несколько устарели. Выигрыш времени синхронизации ЛС по сравнению с валидатором <0.4 секунд. 2. Среднее время discovery (от посылки сообщенния до обнаружение через апи) - 8-10 секунд в среднем у тонапи, тонцентра в3 (т.е. индексатор) и тонцентр в2(т.е. напрямую к ЛСам). Тонапи в среднем на полсекунды быстрее. в3 и в2 не отличаются. 3. Важно отметить, что из эти 8-10 секунд ~4 секунды это время коммита, т.е. время от посылки сообщения до таймстемпа (т.е. начала генерации) мастерчейнблока в котором шардблок с этой транзакцией появлился. Учитывая 1.5-2 секунды время достижения консенсуса по мастерчейну, имеем реальное время коммита ~6 секунд. И соответственно оверхед на то, чтобы ЛСы или индексы могли выдавать данные - еще 2-4 секунды.

Seitaro: вообще, возможно это не совсем корректно, <0.4 это различие ЛСов которые соединены с валиком приватным оверлеем и которые просто в публичном сидят. Непосредственно данных по сравнению с валидатором у меня наверное нет свежих (reply to 303021)

Ma><im: хм, спасибо, тогда попробую TONAPI, там же можно филировать айтемы коллекции по времени. чтобы получать только те, что были сминчены в определённый период времени (reply to 303010)

Denis: нет

rub1kub 💻: йоп

rub1kub 💻: где получить тестовые тоны?

Pasha: @testgiver_ton_bot

rub1kub 💻: эта штука уже сутки не сыпет тоны (reply to 303033)

Pasha: через tonapi дашборд можно купить еще за тон ахах (reply to 303038)

Pasha: других способов не знаю

rub1kub 💻: сок (reply to 303039)

Denis: только tonconsole.com оно скорее (reply to 303039)

Андрей: Сыпет каждую минуту: https://testnet.tonscan.org/address/kQCSES0TZYqcVkgoguhIb8iMEo4cvaEwmIrU5qbQgnN8ftBF (reply to 303038)

rub1kub 💻: мне. (reply to 303038)

rub1kub 💻: а

rub1kub 💻: увидел - они были отправлены

rub1kub 💻: только на своем коше не наблюдаю, ладно. Спасибо

Алексей: А почему на System адресе задеплоен какой-то кошелёк, с вполне обычным публичным ключом? Кто интересно им владеет и ведёт ли это к каким-то необычным последствиям?   https://tonviewer.com/Ef8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAU

Андрей: А можно пруфы что это кошелек и что у него есть публичный ключ? (reply to 303056)

Алексей: Нуу я посмотрел на ассембли код и это кажется кошелёк, там chksignu есть и гет метод seqno (reply to 303059)

Seitaro: Это действительно кошелек. Запуск сети обычно начинается с того, что все монеты сети кладутся на какой-то адрес, а поскольку в момент создания можно положить любой код на любой адрес, по традиции его кладут на -1:00...000. Особыми свойствами этот кошелек не обладает. (то что комиссионная часть награды "приходит" с этого адреса, просто способ отображения переноса этих денег, а не что-то глубинное).  Соответственно этим ключом когда-то владели те, кто запускал сеть. Вероятно он потерялся во время всех событий 2020-2021 года, но если и нет, это не слишком важно: на нем не так много денег и никаких спец.привелегий (помимо красивого адреса) у него нет. (reply to 303059)

X1ag: hi, подскажите пожалуйста почему не отправляет сообщение? Тонов на контракте хватает. Никаких ошибок не отображает. Котнракт должно отправить usdt и 0.07 тон из которых 0.05 уйдет на forward_payload. () send_money(slice text, int query_id, int amount, slice senderAddress, slice usdt_master_address, cell usdt_master_code, cell usdt_master_data) {   var comment = begin_cell()               .store_uint(0,32)               .store_slice(text)             .end_cell();    var msg_body = begin_cell()       .store_uint(op::transfer, 32)         .store_uint(query_id, 64)       .store_coins(amount)       .store_slice(senderAddress)       .store_slice(my_address())       .store_uint(0,1)       .store_coins((ONE_TON * 5) / 100)       .store_maybe_ref(comment)   .end_cell();    var msg = begin_cell()             .store_uint(0x10,6)               .store_slice(calc_jetton_wallet(my_address(), usdt_master_address, usdt_master_code, usdt_master_data))             .store_coins((ONE_TON * 7) / 100)             .store_only_body_ref(msg_body)           .end_cell();    send_raw_message(msg, 0); }  вот так принимаю транзакцию(op::liquidation = 0x0007)  if (jetton_op_code == op::hello){       int need_to_send = muldiv(jetton_amount, 65 * ONE_TOKEN, 100 * ONE_TOKEN);        send_money("hello", query_id, need_to_send, sender_address, usdt_master_address, usdt_master_code, usdt_master_data);        usdt_vault_balance += (jetton_amount - need_to_send);        save_data();        return ();     }  Вот ссылка на транзакцию https://testnet.tonviewer.com/transaction/bcce08929ad561e3daebbaa3db6b42b294981aa105dc6a62389b8bf59c6c78d1

SweetJesus: impure забыл (reply to 303065)

X1ag: Спасибо (reply to 303066)

Denis: а никто на питоне не делал нормализацию хэша экстернала?

наз: https://github.com/nessshon/tonutils/blob/d422f2ba68eb6ba61957a0858806767fbc4b98cd/tonutils/utils.py#L14 (reply to 303068)

🐼 Sild: anycast не занулили😕 (reply to 303069)

Denis: их запретили. тоесть сообщение с эникастом не будет принято (reply to 303082)

Denis: правда в теории по пути его можно перепаковать и хэш изменится и будет принятов

🐼 Sild: протокол есть протокол🤷 потом блин окажется что мы единственные у кого все через жопку потому что все по протоколу =(

Denis: но это довольно вырожденый случай непонятно кому важный

Seitaro: я не понял что тут написано? (reply to 303084)

Seitaro: кто-то сгенерит с эникастом, кто-то другой перепакует и первый не найдет что отправил, но что-то другое примется?

Denis: ну вот кто-то посчитал хэш сообщения с эникастом в дестинейшене и не выкинул этот эникаст. потом отправил дальше в сеть. а кто-то в сети/мемпуле нашёл, отрезал эникаст и отправил в блокчейн (reply to 303087)

Denis: условно кошелек подписал и отправил в сеть без эникаста а даппу отдал с эникастом

Denis: но я не вижу где это может появиться в каких-то реальных случаях

🐼 Sild: ну может это...реализоввывать как договорись, а что там разрешили/запретили - это уже не наше дело...

&rey: Речь о том, что скоро протокол в этом месте поменяется. (reply to 303092)

🐼 Sild: в ExtInMsgInfo из MsgAddress исчезнет anycast? (reply to 303093)

/B4ckSl4sh\: скорее в MsgAddressInt в Maybe Anycast будет Maybe бит равный 0

&rey: Здесь Seitaro скорее коммент должен давать (ну или пока рано). Мне помнится, что там вместо Maybe Anycast будет Maybe что-то другое. (reply to 303095)

🐼 Sild: все-равно еще историю индексировать =) (reply to 303096)

Seitaro: https://github.com/ton-blockchain/ton/blob/master/doc/GlobalVersions.md#anycast-addresses-and-address-rewrite (reply to 303097)

/B4ckSl4sh\: у нас теперь есть целый свободный опкод в виде REWRITEVARADDR (и его Q версия) :) (reply to 303099)

🐼 Sild: а можно для тупеньких что вообще этот anycast позволял? я по названию и конвертации в человеческий адрес догадываюсь что это какая-то маска, но какой физический смысл?

X1ag: для того чтобы рассылать сообщение по нескольким шардам

Seitaro: не по нескольким, а в ближайший (reply to 303102)

Дмитрий: Всем привет!   В поисках Frontend-разработчика  Если вы им являетесь, напишите мне в личные сообщения

🐼 Sild: кажется чтобы такое сообщение попало в нужный контракт в итоге, у контрактов в разных шардах должы отличаться только ведущие биты хеша а это же хрен подберешь (reply to 303103)

🐼 Sild: а не, можно наоборот - чтобы отличался только хвост, а anycast делать на глубину а-ля 248

🐼 Sild: но там только 5 бит на префикс, не получается.

Seitaro: эникасты были частью большей системы "больших контрактов", которые собственно позволяли деплоить копию контракта в каждый шард с правилами что делать на сплите/мерже. Система эта достаточно сложная, не очень хорошо себя ведет на сплитах/мержах и в целом не слишком полезна. Поэтому пока ее отложили, эникасты выкинули и оставили только кусочек который может быть использован для шард-оптимизаций (reply to 303105)

Дмитрий: 457a08dbe4f8f75530604a320426c10576b735f789e49ed24385c83364dcd91e  9f0551b15d1c9045b36f245e7699ef847ab93bfc072c0de989d99c6e1716e3be  приветствую колеги, очередной раз сталкиваюсь с необъяснимыми аномалиями как я вижу мой кошелек получил 2 абсолютно одинаковые, успешные транзакции но их хеши отличаются более того на самом деле из них деньги я получил только по 1 но так как успешны обе мой код зачислил пользователю обе на баланс  так вот вопрос как от такого защитится и что это вообще такое

&rey: Э... вы же знаете, что перевод тонов состоит из двух транзакций? (reply to 303138)

&rey: Одна на контракте-отправителе (наверняка примет экстернал и уменьшит баланс, и отправит сообщение), вторая на получателе.

&rey: Вообще, я постоянно предлагаю такую двухфазную схему: 1. Клиент (ака dApp) следит, когда появится транзакция с его кошелька; кидает её уникальный идентификатор (адрес,lt,хеш) на сервер. 2. Сервер смотрит за такими идентификаторами и проверяет каждое out_msgs, не направлено ли оно ему; записывает created_lt. Кроме того, он следит за СВОИМ кошельком...

Denis: там кстати второй хэш это вообще хэш экстернала (reply to 303140)

&rey: и во входящих сообщениях смотрит на created_lt. Вот они будут уникальны и не будут повторяться. ("сообщение" в тоне = "перевод тонов, потенциально с какими-то прикреплёнными данными") (reply to 303142)

سینا: /start@boosteambot

crybaby_too 💠: Всем привет, что делать, если мой друг зайдя сюда попал в блок? Куда нужно нажать, чтоб авторизоваться?

ST-⭕️52-🅰️S: привет, можете подсказать по тонконнекту  мы подключаем кошелек и хотим проверить тонпруф, чтобы проверить тонпруф, нужен публичный ключ кошелька  публичный ключ можно получить: через гет метод, либо через стейт инит. гет метода нет в незадеплоеных кошельках и в старых кошельках. но стейт инит там есть всегда, как и в задеплоеных кошельках  вопрос: почему всегда не вычислять публичный ключ из стейт инита?   в документации написано вот так: First, try to obtain public key via get_public_key get-method on smart contract deployed at Address. If the smart contract is not deployed yet, or the get-method is missing, then: Parse TonAddressItemReply.walletStateInit and get public key from stateInit

Denis: Задумка была сделать достаточно гибкий стандарт. Например может существовать какой-то мультисиг где этот пабкей меняется. Или кто-то хочет залогиниться кошельком с адресом подобранным через vanity контракт (reply to 303153)

— 2025-04-30 —

𝑭: is there a way to filter transactions of a TON wallet address by memo/comment ?

Scrait: Здравствуйте, подскажите, возможно ли реализовать на такте фабрику смарт-контракт и соотвественно фабричные смарт-контракты

Scrait: Чтобы кидать сообщение на контракт фабрики и она деплоила фабричные

X1ag: Да, возможно

X1ag: В тоне фабричные контракты называют master contract, а те контракты, которые деплоятся user contact

Scrait: Есть примеры где-нибудь? (reply to 303175)

Namon: nft collection (minter) & nft items (reply to 303179)

X1ag: https://github.com/EmelyanenkoK/modern_jetton (reply to 303179)

Namon: jetton master не деплоит jetton wallets (reply to 303182)

X1ag: Разве? Он же кидает стейт инит на адрес и тем самым деплоит его (reply to 303183)

Namon: при минте токенов да (виноват), но я думаю, это не особо подходящий случай жетон волеты работают обособленно от мастера  обычно в таких случаях, описанных выше, нужен один мастер, который сам напрямую работает с дочерними и дочерние друг с другом не взаимодействуют  но в целом да, минт может подойти как пример (reply to 303184)

X1ag: Ну в целом вы правы, nft контакты больше подходят (reply to 303186)

X1ag: а можно ли LT внутри контракта изменить самому?  например когда вызывает getLogicalTime() и оно отдает константу какую нибудь

RootTon: Всем привет, подскажите пожалуйста есть ли какие то дексы которые дают простому народу свои смарты чтобы на их основе делались работы. В частности меня интересуют 2 вещи: 1) может ли смарт контракт фабрика самостоятельно по каким-то то триггерам создавать/пополнять пул ликвидности 2) какие дексы есть с публичными смартами чтобы на их базе создавать свои пулы

Иван: Можно взять любую DEX, которая нравится и на fift разложить код по-полочкам, не совсем понятно, что значит "дают народу". По-пункту 1, речь о мастер контракте? По-пункту 2, всё смарт-контракты публичны или тут имеется ввиду верифай на языке более высокого уровня?

maksim: Из опен сорс дексов, есть стонфи v2 на фанси, tact-dex (еще не законченный, work in progress, однако может быть полезно будет посмотреть и сейчас) и порт стонфи в1 на такт (не знаю закончен ли проект или еще в разработке)  По вопросам  1. Создавать - да, безусловно, для этого фабрика и нужна, удобно не заставлять пользователей знать+хранить дату и код. Пополнять - вот это уже врядли, зачем лишний форвардинг + хопы, наверное проще сразу пойти в пул и пополнить его напрямую  2. up (reply to 303202)

RootTon: А пополнение технический возможно? Потому что насколько знаю смарты в тоне не могут быть самоисполняемыми и триггер для пополнения в любом случае по идее должен будет приходить из вне смарту, к примеру триггер по опкоду (reply to 303206)

/B4ckSl4sh\: Да, всё так (reply to 303208)

RootTon: Или мат модель которая будет этот триггер рассчитывать самостоятельно но опять же нужно влияние из вне

RootTon: А как оно обычно принято в тоне ? Ручками сходил и через красивый ui пополнил определённый пул ? (reply to 303206)

RootTon: А если пула нету то он будет автоматически создан ? По идее должно быть да (reply to 303211)

Алексей: Жесть, вы реально runvm для жеттон волта решили использовать.. (reply to 303206)

/B4ckSl4sh\: так прекрасная тема :)  Там помимо этого ещё 3 других способа пруфа жетон-воллета будут, на один из них (TEP-89) висит PR (reply to 303227)

RootTon: А что тут такого? Можете объяснить если не сложно (reply to 303227)

Алексей: Ну достаточно экзотическое решение запускать твм внутри твма (reply to 303229)

RootTon: Но однако выше я задавал вопрос про ончейн рассчет адреса жетон кошелька в своем смарте, и мне посоветовали именно этот вариант https://t.me/tondev/302657

Fasad: как сделаешь реально рабочий инструмент для работы stonfi v2 pools то делись, а то я в шоках от отсутствия документации (reply to 303210)

RootTon: Базар, а че про доки дак это веб3 лол тут нету ничего 😂 (reply to 303232)

RootTon: Только комьюнити и тон докса и все

Fasad: >:( (reply to 303233)

Fasad: говорили сделают доку по ним за 2 недели

RootTon: Ну раз в месяц дикпик еще умные мысли глаголет и все 😅 (reply to 303234)

Fasad: прошел месяяяц (reply to 303236)

Оскар: в плане? а это что? https://docs.ston.fi/developer-section/api-reference-v2 (reply to 303232)

Fasad: тут материться нельзя (reply to 303242)

Оскар: вполне хорошая документация, так же у них свой сдк для тс есть, так что даже не особо то и нужно в референс смотреть (reply to 303243)

Fasad: ну ты работал с этим? оно по примерам кода по кд выводит ошибки и т.п, единственное что у них круто, так это работа с свапом, всё на тс, а вот пулы -

Fasad: не просто же так они пишут, что работают над реально рабочей докой по пулам

Оскар: да. я писал аналог honeypot.is для тона (reply to 303246)

Fasad: ну, машина

delthisgem: еще не разобрался в технологии оверлея, хочу узнать, не лучше ли будет читать экстерналы со своей ноды, если такая возможность имеется?

Seitaro: Имейте в виду, что это не будет работать на всяких _NOT, _DOGS и прочих жетонах которые себе намайнили красивые адреса, но в результате хэш инитстейта жетона не совпадет с адресом. (reply to 303228)

RootTon: Так все же а в чем проблемы вызывать твм если есть runvm и почему это не всегда лучшее решение? (reply to 303230)

/B4ckSl4sh\: Знаю, для этого можно выбрать TEP-89 пруф, либо пруфануть стейт к блоку, на котором уже потом мы запустим гетметод (reply to 303257)

/B4ckSl4sh\: На UI конечно же всего этого многообразия не будет, там будет либо вот StateInit либо пруф стейта к блоку, чтобы лишние транзакции не платить. Остальные пруфы будут только в доке, для удобного ончейн залива ликвидности (reply to 303260)

Алексей: Я не говорил вообще, что это какая-то проблема, но вон выше например одну проблему указали (reply to 303259)

Alex: Коллеги, не подскажите, в какой заголовок пробрасывать API Key для Toncenter и как правильно? "Aauthorization": Bearer < API Key> или как-то иначе ожидается сервисом?

&rey: Никто и не предлагает использовать StateInit. Там на то и сделан отдельный аргумент для адреса жетон-мастера) (reply to 303257)

&rey: Да, если надо, чтобы пользователь сам кинул код и данные, то нужен один из способов пруфа.

/B4ckSl4sh\: А какой есть способ кроме пруфа к блоку? Как вот тут https://github.com/fivestarsfi/StateCheck-v2/tree/main (reply to 303265)

RootTon: X-Api-Key (reply to 303263)

&rey: Ну, собственно, потребовать стейт ~ адресу жетона, а обработчик ноткоинов задеплоить отдельно. (reply to 303266)

Alex: Скорее всего, что это не верно, посмотрел исходники tonutils, там передается в  "Aauthorization": Bearer <api_key> (reply to 303267)

/B4ckSl4sh\: вот с этим проблемы к сожалению, если бы эта проблема легко решалась, то у нас был бы уже отдельный контракт дискавери который можно было бы считать ончейн (reply to 303268)

RootTon: Спорим ? (reply to 303269)

Alex: Я не спорить хочу, а узнать, как правильно) (reply to 303271)

/B4ckSl4sh\: По-моему класс ясно называется Tonapi (reply to 303269)

sd: https://toncenter.com/ (reply to 303269)

/B4ckSl4sh\: А тут спрашивали про Toncenter (reply to 303263)

Alex: Спасибо) (reply to 303275)

RootTon: Ну ты проспорил

RootTon: У тон апи authorization (reply to 303269)

Jzuss ┌( ಠ_ಠ)┘: Всем привет! Отправил bouncable сообщение с флагом SEND_MODE_BOUNCE_ON_ACTION_FAIL. Транзакция упала с кодом -14 из-за недостатка сводобного газа для обработки. Почему сообщение не отскочило? Можно ли это исправить?

RootTon: Оно отскочило просто все потрачено было на газ (reply to 303286)

Jzuss ┌( ಠ_ಠ)┘: Если оно отскочило бы, то я бы  увидел входящее сообщение с флагом bounced (reply to 303289)

&rey: Валидаторы за просто так считать транзакцию не будут. (reply to 303286)

RootTon: Ну пожалуйста 🥺 (reply to 303291)

Jzuss ┌( ಠ_ಠ)┘: Выходит проверку msg_value все равно придется делать. В чем тогда смысл данного флага? (reply to 303291)

&rey: Газа не хватило либо в compute фазе, либо при подсчёте исходящих ячеек. (reply to 303294)

🎐*<@Maxim: Добрый день, в офицальном описании сказано:  Display Unclaimed Jettons: .. to based on the Merkle tree data.  подскажите, пожалуйста, как заставить tonkeeper отображать mintless токен, который предназначен для клейма?

Pavel: Привет! Помогите с send mode!  Логика такая: 1) Мне сообщением на контракт приходит 1 ton 2) Полезная нагрузка 3) Оставшийся баланс сообщения передать сообщением не трогая при этом баланс контракта  Сейчас используется send mode 1

&rey: Известно, какой должен быть баланс контракта в теории? (reply to 303311)

Василий: mode 64? Если никакой другой логики нет. Входящее с нагрузкой, исходящее со сдачей. (reply to 303311)

rxcat: в тон конекте нельзя отправить транзакцию на несуществующий адрес? просто либо сам протокол, либо кошелек меняет non-bouncable адрес на bouncable

RootTon: Обновить vsc (reply to 303315)

&rey: Скорее кошелёк дурит. Может, вы можете дать пользователю и stateInit контракта? (reply to 303314)

Sol: Без этого никак? (reply to 303316)

RootTon: Ну как будто бы нет, ибо плашка с текстом явно намекает на то что vscode староват для этого расширения (reply to 303318)

RootTon: А что вас так напугало в обновлении ? (reply to 303318)

Sol: Не хочет (reply to 303321)

/B4ckSl4sh\: Кого тегнуть чтобы на ласт версии тонкипера для андроида исправили баг, что при отправке на любую форму адреса в тестнете всё равно летит bounceable сообщение?

&rey: Кажется, @subden может передать. (reply to 303323)

Denis: передал. но там кажется чё-то фиксили недавно про адреса в тестнете. так что может уже в ближайшем релизе и будет

Игорь: Добрый вечер. Не подскажете где посмотреть код обращения и получения данных (tact, func) от методов get _wallet_address get_wallet_data жетона,  usdt  например. давно не могу разобраться, что то видимо не так понимаю.

&rey: Если я верно расшифровал смысл, то вот: https://docs.ton.org/v3/guidelines/dapps/cookbook#how-to-calculate-the-users-jetton-wallet-address-offchain (reply to 303328)

Игорь: есть там op-code ли нет, один адрес возвращает get_wallet_address  или несколько

&rey: Вызвать гет-метод на другом контракте невозможно. Точнее, надо занести его код, данные и адрес себе, и тогда в рамках одного своего контракта можно будет запросить RUNVM: https://github.com/ProgramCrafter/tvm-quirks/blob/master/ok-jetton-wallet-onchain.fc (reply to 303330)

Игорь: благодарю, вроде как можно обратиться к jetton master чтоб получить данные, адрес жетона контракта например, как по этой ссылке, плюс баланс в любом случае запрашивать через get_wallet_data, но мне не удается ответ нормально получить (reply to 303331)

&rey: А что будет значить вот это число "баланс" для другого контракта? Как он поймёт, убраны ли уже оттуда отправленные им исходящие переводы жетонов? (reply to 303333)

Игорь: ну мы же как то деньги переводим, ориентируясь на баланс

Игорь: хочется где то подсмотреть пример запроса и кода получения ответа на get_wallet_data и get_wallet_address

&rey: Повторюсь: вызвать гет-метод на другом контракте невозможно. (reply to 303336)

Игорь: серьезно? (reply to 303337)

Игорь: контракт не может вызвать гет метод  другого контракта? где про это можно прочитать?

Игорь: пропустил текст, пошел по ссылке сразу (reply to 303331)

&rey: Пункт 2.4.1 в https://docs.ton.org/ton.pdf  > <...> each account resides in its separate "account-chain", and the only way it can affect the state of some other account is by sending a message. (reply to 303339)

&rey: И к этому есть только один контракт-исключение. Знатоки, думаю, смогут назвать.

Игорь: чет аж не верится

&rey: Ну, можете прочитать список опкодов TVM и тыкнуть пальцем в тот, который имеет хоть какое-то отношение к другому контракту.

/B4ckSl4sh\: Повод для опроса на func-wall :) (reply to 303342)

Игорь: получается и адрес я тоже не могу узнать у jetton master, только самому посчитать?

Игорь: ну ок, тон кипер же как то показывает мне сколько у меня usdt и других жетонов лежит

&rey: Так он же не ончейн это узнаёт) (reply to 303347)

Игорь: блин, точно

Игорь: я щас подафигел от такого поворота если честно

/B4ckSl4sh\: А это он кстати знает только благодя полному индексу бч (reply to 303347)

Игорь: спасибо за ответ, я бы еще долго колупался

Игорь: и пытался понять почему ответа нет

&rey: Между контрактами полная(*)(**) изоляция, да. Только отправка сообщений. Как раз заставляет подумать о том, на какой момент возвращённые данные будут релевантны (см. многопоточность, атомарные переменные, happens-before, race condition). (reply to 303350)

Игорь: какой то смысл тут скрыт? (reply to 303354)

&rey: Два исключения, которые, однако, для вашей задачи "узнавать баланс кого-то в жетонах на непонятно какой момент" совершенно бесполезны. (reply to 303355)

RootTon: А как часто ваще 1 смарту приходится общаться со 2ым ? (reply to 303354)

RootTon: Я в том плане что мы же можем вызвать runvm и обращаться к другим смартам внутри нашего (reply to 303358)

Игорь: про момент конечно точно подмечено (reply to 303357)

&rey: Ну, изменения-то на эти следующие контракты не запишутся, а там обычно и есть самое интересное. (reply to 303359)

RootTon: Мне в целом интересно это, как часто 1 смарту приходится общаться с другими (reply to 303361)

&rey: Да примерно всегда. Думаю, самые общительные у дексов, потом кошельки) Можно посмотреть, сколько транзакций в сети, и вычесть процент сообщений "от контракта самому себе". (reply to 303362)

RootTon: Принял, спасибо за ответ (reply to 303364)

Denzel': а что за исключения можете рассказать подробней пожалуйста? (reply to 303357)

&rey: 1. Системный контракт The Config. Он хранит настройки сети (и может их обновлять), и эти настройки доступны каждому контракту (берутся на момент начала конкретного мастерчейн-блока, если верно помню). 2. В мастерчейне можно публиковать библиотеки. Их наличие влияет опять же на то, кинет ли загрузка библиотеки по хешу ошибку или завершится успешно. (reply to 303366)

kwinkich: Всем привет, подкиньте пожалуйста ссылку на доку, где описано как с фронта проверять статус транзакции в реал-тайме

> as | ✨🎁 выгодно: настроил nginx + tonutils reverse proxy и поднял сайт, вроде как все работает и html страницу грузит, но когда добавляю css и js сайт перестает открываться и не грузит css и js, может кто-то сталкивался с данной проблемой? можете помочь?

Combot: Combot выдал(а) предупреждение Ais (1/3) Reason: 1 reports (reply to 303391)

— 2025-05-01 —

Sol: Ищу сотрудничевство с теми кому нужен знаток смарт контрактов .Буду очень рад если вы мне напишите

Scalien: Поделитесь пожалуйста адресами всех коллекции подарков или как проще их собрать

X1ag: ищите на fragment.com / getgems.io (reply to 303421)

Alex: Знаток - это из Что?Где?Когда?)) (reply to 303397)

Scalien: Где посмотреть я понимаю, в ручную все собирать ? (reply to 303422)

X1ag: да (reply to 303424)

Scalien: Возможно у кого-то есть

Vitaly⚜️: Есть адекватные специалисты по фронтенду ? В л.с

Kiki: пр

potato: Это когда сдал экзамены на знатка, ты не сдавал чтоли? (reply to 303423)

Grigoriy: Всем привет, а отправка ext out message из контракта облагается газом?

Denis: Да, но сильно дешевле чем интернал (reply to 303437)

Grigoriy: А где можно в документации про это почитать? Не нашел странички с инфой о газе для ext message (reply to 303440)

Sol: Верно подметил!  Если коротко — это программист, который пишет код, что живёт в блокчейне и работает даже тогда, когда его самого уже нет в живых . (reply to 303423)

Alex: Sarcasm..) (reply to 303443)

— 2025-05-02 —

Devon: Здравствуйте, подскажите в чём ошибка может быть?  https://testnet.tonviewer.com/transaction/44ccd07b0ff364d131fc31cc9a37aedaa740c29d8dcea3db50a3c73600d65b82

Alberto: Вероятные причины: Недостаточно газа для выполнения операции Ошибка в логике смарт-контракта Несоответствие входных параметров ожидаемым контрактом Проблема с правами доступа или ключами подписи Рекомендую проверить код контракта и параметры вызова, особенно в части передачи TON между аккаунтами, поскольку видно, что операция включает перевод 0.298772 TON. (reply to 303465)

Alex: Неизвестный opcode (reply to 303465)

Михаил: А какую библиотеку можно использовать для простых операций с тон? создать кошелек, проверить баланс отправить токены, интересует конкретно под андроид но и просто для джавы пойдет

Alex: https://github.com/h6x0r/tonapi4j (reply to 303472)

Denis: Там только апишка для получения данных (ну и отправка подписанных). Сборка и подпись в https://github.com/ton-community/ton-kotlin (reply to 303473)

Михаил: эта штука платная, если больше 1 запроса в сек, в остальном вроде подходит (reply to 303473)

Alex: в репе и написано в ридми : For creating wallets, transferring TON, Jetton, NFTs, and other operations, recommend using ton4j in combination with the library. For more information, refer to the library documentation. (reply to 303477)

Denis: Тон котлин точно топ (reply to 303478)

Ask: А есть кто помочь с ошибкой при верификации смарт контракта

Enisey: Привет, напиши в лс пожалуйста (reply to 303397)

Sol: Откройте лс или уберите платные сообщения . Или пишите сами! (reply to 303494)

Sol: Ребят поддержка тонапи или тонкипера вы в курсе что случилось щас?

Max: А что случилось? (reply to 303515)

255: Все спокойно работает (reply to 303515)

Denis: цены скакнули на некоторые токены из-за отъебнувшего decimals

Denis: славься решение сложить децималс в мету

Enisey: Открыл личное, можете написать есть вопрос по разработке, сам написать могу только взаимным до середины мая (reply to 303512)

User: Кто это придумал вообще? Почему-бы в контракте через гет метод это как-нибудь не сделать, со стороны эксплорера это жесть-же парсить json‘ы не понятные (reply to 303519)

Denis: я бы особо не наезжал на придумавшего. он оунер в этом чате. (reply to 303525)

Denis: там еще бывают пожественные приколы когда в ончейн мете decimals: "9" [строкой] а в офчейн мете decimals: 6 [интом].

Denis: жду пока кто-нибудудь сделает decimals: 9.75

Denis: еще undefined и ; drop database (ну а зачем децималс экранировать оно ж инт)

Sol: Добавлю вас щас в контакты (reply to 303522)

User: Вот я с этим недавно столкнулся, из-за этого и высказался(решением проблемы было вынести все в ончейн).   На всякий случай — простите, может я чего-то непониманию :) (reply to 303527)
