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

рис: Есть пример как эмулировать транзакцию через tonapi и можно ли получить примерную комиссию?

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

XramGift: ку

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

User<7374665072>: Мой совет книгу кто-нибудь возьмитесь написать с примерами и всё такое, намного больше пользы будет. ИМХО (reply to 302911)

RootTon: Этим и занимаюсь, только до книги полноценной мне далеко, а вот гайд учебник вполне себе могу (reply to 302913)

User<7374665072>: Надо исходить из цели: "Вовлечь/Заинтересовать, как можно больше новых участников". Значит, нужен не гайд. А нужны примеры, покрывающие самые желанные варианты кода. Вроде, код элементарного интернет магазина, код элементарного пула ликвидности, код элементарного бота ответов и тд. То ради чего народ приходит. Посмотрев книгу и разобравшись с примером они свой вариант смогут сделать. А от ваших гуидов, разбросанных по всему интернету толку 0, хотя может и не 0, чат GPT обучается на ваших ошибках (reply to 302914)

RootTon: Нет вы не правы. Все начинается с этого и заканчивается там где людям лень читать все что больше 0 слов. Поэтому даже хорошая книга может затеряться банально потому что людям нужно решение их проблемы а не умение решать проблемы (reply to 302916)

Axror: я хотел связаться с разработчиками тон как можно связаться

User<7374665072>: Тут полный чат разработчиков ton:)

User<7374665072>: Пишите прямо сюда:)

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

User<7374665072>: Можно взять любую DEX, которая нравится и на fift разложить код по-полочкам, не совсем понятно, что значит "дают народу". По-пункту 1, речь о мастер контракте? По-пункту 2, всё смарт-контракты публичны или тут имеется ввиду верифай на языке более высокого уровня?

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

рис: Все спокойно работает (reply to 303515)

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

Roma: Всем привет! Кто работал с shareStory?  Вопрос по реализации.

sd: @devs_cis (reply to 303545)

Рома: Всем привет! А что за проблема что если вот так компаную сообщение то комент не указывается это из-за storeCoins. Как тогда передать и комент и storeCoins?

Vladislav: Посоветуйте для nft API или либу чтобы можно удобно по nft данные получать на java/kotlin. Пробовал ton4j - не понравилось

SweetJesus: ну queryid в комменте не нужен как минимум, и после storeStringTail() ничего тоже класть не нужно. Оно в принципе прочитается, но коммент битый будет. (reply to 303550)

Рома: мне нужно сделать обычный вызов моего контракта + комент туда прилепить. Поэтому queryid не передавать не вариант. .storeStringTail я и в самом конце и в начале пробовал прикреплять но комента нет. (reply to 303552)

SweetJesus: https://docs.ton.org/v3/documentation/smart-contracts/message-management/internal-messages/#simple-message-with-a-comment (reply to 303553)

Рома: В общем как понимаю, отправить комент с другими данными | ячейками невозможно (reply to 303554)

MikeWeb3Mighty: Для func есть что то типа ton Web IDE?

🐼 Sild: https://docs.ton.org/v3/guidelines/dapps/asset-processing/jettons#retrieving-data-for-a-specific-jetton-wallet а на этом примере, что должно лежать наверху стека (и доставаться первым)? баланс или код?  up ну вроде баланс. Хрен разберешься с этими туда-сюда листами в tlb.

&rey: Есть же https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md#get-methods + тот факт, что правые значения располагаются ближе к верхушке стека. (reply to 303576)

&rey: Ну, ide.ton.org вполне совместима с FunC, спасибо разрабам (кстати, странно, что там ещё не завезли Tolk). (reply to 303573)

🐼 Sild: правые...т.е. wallet_code должен первым вылезать?) (reply to 303577)

🐼 Sild: спасибо

— 2025-05-03 —

X1ag: а можно ли как то задеплоить мультисиг валлет в тестнете? Есть только адрес и админка  вопрос в том, есть ли у https://multisig.ton.org/# тестнет версия?

Mirka: https://multisig.ton.org?testnet=true (reply to 303590)

bissentooo | 19 ⚔️: всем привет! есть кто получал грант от ТОНа? можете дать совет, как правильно сделать вайтлист и питч дек?

S: Всем привет,мы пишем  проект на тон,сможет кто нибудь оценить концепцию,и если несложно то подсказать как получить грант.

Vladimir: https://ton.org/grants  + https://eco.ton.org/ (reply to 303624)

S: Благодарю) (reply to 303627)

User<7374665072>: Всем привет. Можно ли сейчас использовать tonapi внутри сети ton dns, без необходимости пробрасывать запросы на собственный backend?

Игорь: всем привет, кто может помочь где-то есть нормальная документация для @ton/ton  или пример перевода jetton на nodejs?

Denis: https://docs.tonconsole.com/tonapi/cookbook#jetton-transfer Вот (reply to 303647)

Игорь: огромная благодарность (reply to 303649)

Игорь: кстати у меня этот код не работает (reply to 303649)

Игорь: хотя может у меня ссылка на тестнет неправильная  testnet.tonapo.io верно?

Denis: testnet.tonapi.io

— 2025-05-04 —

Alexey: Привет! Подскажите пожалуйста, правильно ли я понимаю, что если я отправлю любую транзакцию без стейтинита на несуществующий адрес из бейзчейна в мастерчейн с bounce = true, то транзакция будет скипнута из-за отсутствия стейта, но все равно будет включена в следующий блок и попадет обратно на мой контракт только после того как этот блок будет обработан валидаторами и включен в мастерчейн?  Правильно ли я понимаю, что таким образом можно скипнуть несколько (потенциально - сколько угодно) блоков мастерчейна в контракте, при этом дополнительных внешних сообщений не требуется, если мой контракт в бейзчейне будет сам гонять эти сообщения туда-сюда с bounce=true, и никакого контракта в мастерчейне для этого не нужно?

Denis: Можно даже просто в другом шарде. Будет дешевле

Alexander: Вопрос только в том что если вы хотите скипать блоки, то возможно вы что-то делаете не так изначально (reply to 303657)

Alexander: Шард может быть один единственный (reply to 303659)

Nick: Разработчик сендвичей детектед  Только учти что в bounced сообщении хранятся лишь первые 256 бит исходного сообщения. (reply to 303657)

Denis: https://tonviewer.com/config#12 думаешь понизят минсплит до 0? (reply to 303662)

Alexander: Раньше был один шард всего, в теории никто не мешает (reply to 303665)

Alexander: При небольшой нагрузке очень удобно, зачем весь этот оверхед на 50 транзакциях в минуту

Andrew: Ну сейчас далеко не 50 и вряд ли меньше станет... (reply to 303667)

Farel: как такое может быть, что сидку из мтв импортирую в кипер и он пишет Инкоррект

Grigory: Горизонтальное/вертикальное расположение слов 😊 (reply to 303683)

Farel: даже руками переписывал все ранво не ест, в мтв мультичейн кошелек мб из-за этого (reply to 303684)

Grigory: Разные воллеты используют разный порядок слов в сид-фразах (reply to 303688)

Farel: я мобилкой пользуюсь, там нормально с этим (reply to 303689)

Max: А подскажите пожалуйста версию тонкипера  Поддержку bip39 выкатили не в одно время с MTW (reply to 303685)

Роман: Добрый день, на фрагменте выставляются на аукцион nft, если после покупки случайно пополнил баланс nft (из-за встроенного механизма topup или как он там называется) Можно ли эти средства вывести на свой кошелек? Может при выставлении на аукцион снова? Или они там навсегда?

Vladimir: Нет. (reply to 303699)

Роман: плохо) спасибо.

Alexander: А кто-то проводил аналитику какой процент от текущего tps генерят реальные пользователи? И сколько реальных было бы если не все эти цепочки транзакций, считать своп за одно “action” и посчитать сколько actions per second (reply to 303676)

Алексей: https://tonviewer.com/stats вот тут вроде как, 100к жеттон трансферов в день как будто происходит (reply to 303702)

Артур: Всем привет! Кто-нибудь знает, есть ли способ проверить on-chain, что NFT принадлежит конкретной коллекции? Я не могу вызвать get_collection_data on-chain, потому что это get-метод. И я не могу полагаться на get_static_data / report_static_data, так как эти сообщения можно подделать.

Denzel': а за что отвечает bridge.tonapi.io? Вижу, что фрагмент кидает запрос туда когда заходишь в раздел gifts. Когда подарок будет выставлен на продажу, то этот бридж вернет инфу о нем или как?  https://bridge.tonapi.io/bridge/events?client_id=***&last_event_id=***

Max: Бридж нужен, чтобы послать транзакцию кошельку, а затем получить от кошелька либо boc, если пользователь подписал её и она улетела в сеть, либо ошибку (reply to 303714)

Denzel': понял, спасибо, только сейчас допер) (reply to 303715)

Alex: Если вы знаете код nft то можете посчитать его адрес из индекса и адреса коллекции, а затем сравнить с адресом с которого пришел report_static_data (reply to 303708)

Combot: Total messages: 303723

— 2025-05-05 —

Suchies: Пишу что-то без ссылки чтобы бот не забанил

Артур: Спасибо! (reply to 303719)

Emil: Всем привет!)   Куда отзывы на разрабов собираются? У меня тут пара строк просится наружу, дабы ни кто больше на мошенника не напарывался

User: Снова на те-же грабли?) (reply to 303758)

Emil: Да на этот раз прям на те же, доверился дважды п&зд@болу, теперь жалею( (reply to 303759)

Albert: Привет всем сотрудникам тон экосистемы.  Я свободен и готов волонтерить в разработке  (Python, FastApi, alembic, redis, aiogram) в любых проектах тон экосистемы (официальных или с 1000+ пользователей) с будущим трудоустройством (reply to 298987)

Asher: Дайте знать, пожалуйста, если хоть куда-то пристроитесь (reply to 303774)

🎐*<@Maxim: Подскажите, пожалуйста, в какой момент Tonkeeper обращается к эндпоинту /wallet (для минтлесс клейминга) - чтобы в кошельке появилась плашка о том, что для меня предназанчены жетоны (это ведь работает в тестовой сети)?   я создал тестовый жетон, но tonkeeper ни разу не обратился к моему /wallet эндпоинту и соответственно в кошельке я не вижу предназначенные для меня жетоны, в какой момент это должно произойти? (reply to 303715)

Max: это к @subden (reply to 303777)

Denis: без конкретного примера это гадания на кофейной гуще

🎐*<@Maxim: ☀️ Здравтсвуйте! В официальном описании сказано: Display Unclaimed Jettons: .. to based on the Merkle tree data, что кошельки показывают пользователям жетоны, которые они имеют право затребовать на основе данных дерева Меркла  Я использовал generateTestJetton.ts-файл (я создал 3 чистых кошелька (первый, второй, третий) W5R1 я закинул но них по 2 TON и сделал их активными совершив переводы друг другу)  Я подключил первый кошелек к blueprint, а также через mnemonic и совершил деплой мастера (в котом уже как бы 56 жетонов, но этих трех владельцев пока еще нет), далее по образцу в generateTestJetton.ts я совершил вызов sendTransfer на вычисленный кошелек с op::transfer, а внутри у него claimPayload, а внутри него ячейка с доказательством -  и все замечательно: смк распарсил custom_payload и зачислили 14 жетонов и теперь первый кошелек выдает [claimed: true]  Также сделан boc-файл со словарем из этих трех кошельков Address -> {amt, start, expired} - и я захостил его на mintles_merkle_dump_uri из uri - и все качается, также я настроил все 3 эндпоинта по стандарту /wallet, /wallets, /state для базового маршрута custom_payload_api_uri - если нажать на get-запрос для первого, то получим: {owner: 0:39..a265, jetton_wallet: 0:30..6f0d, custom_payload: te6..W2A, state_init: te6..nE=, compressed_info: {amount: 14000000000, start_from: 1640995200, expired_at: 1767244800 (до 2026 года)}}   Самое главное custom_payload - будет совпадать с тем claimPayload котороый подается в sendTransfer и выводится в консоли в ts-файле blueprint'а. Я идеально вычисляю wallet_code_only(), jetton_wallet_address() и generate_merkle_proof() - все совпадает на python-сервере и на blueprint  #вопрос: как мне увидеть жетоны для затребования (для 2 и 3 кошелька) - кошельки у меня в телефоне в tonkeeper и там ничего не приходит!  При этом tonkeeper может спокойно получить {} - структуру если обратится к get-запросу например для второго пользователя, как заставить tonkeeper отобразить возможность затребовать жетоны?

Denis: дорогие админы. я устал отвечать в чате где постоянно трут сообщения. отвечайте пожалуйста человеку сами

Алексей: а зачем этот абсолютно рандомный маркдаун?  это нейросеть такая странная? (reply to 303780)

Dmytro: а мне нравится наоборот. видно структуру. вот бы все вопросы были такие. (reply to 303784)

Denis: структура ок. но спойлеры реально случайно как-то раставлены (reply to 303785)

🎐*<@Maxim: Скажите, пожалуйста, вы писали по поводу частоты обращения tonkeeper к эндпоинту /wallet "Не периодически а в момент отправки" - я честно не совсем понял о какой отправке вы говорите. Я успешно запускаю официальный код https://github.com/ton-community/mintless-jetton/blob/main/scripts/generateTestJetton.ts и могу успешно упаковать доказательство с оп-кодом для клейма 0x0df602d6 и успешно подтвердить это действие в Tonkeeper'e (получив жетоны) - при этом я как бы это сам делаю и на эндпоинт /wallet никто не заходит, но я очень хочу увидеть своими глазами чтобы в tonkeeper появилась плашка - что для меня предназначен какой то жетон и не понятно как заставить tonkeeper обратиться к моему эндпоинту /wallet ? (reply to 302986)

Max: Эта опция только для уважаемых господ, полагаю   Для граждан попроще доступна опция клейма через свой дапп (reply to 303787)

Max: просто так в балансах ваш незаклеймленный юзером жеттон не появится

🎐*<@Maxim: это правда?

Denis: да. но более развернутый ответ пусть админы из удаленых достают (reply to 303790)

🎐*<@Maxim: спасибо! я сделал как вы сказали - через публичный ключ check_signature с данными и защитой с помощью timestamp (но через мастер смк) - но я все равно очень сильно расстроен одноразовостью mintless -технологии - по сути итак была тенденция - что проходит airdrp и активность снижается - было бы здорово чтобы пользователи были не ограничены количеством раздач (reply to 302983)

Оскар: как альтернатива есть https://github.com/Gusarich/airdrop работает абсолютно идентично, но раздача происходит через данный контракт, а не вшивается в минтер  всё что остается это написать простенький дапп с маленькой кнопкой тонконнекта и большой кнопкой клейма для взаимодействия с этим контрактом  как раз если несколько аллокаций происходит - каждый раз деплоим новый контракт с нужным нам мерклом (reply to 303796)

Denis: ну это абсолютно неправда (reply to 303800)

Оскар: да, тут соврал, я имел ввиду что с технической части использует тот же пруф меркла для определения "кому и сколько положено", но отображаться в самом кошельке это количество не будет и надо самому писать прослойку, а не надеяться что приложения кошельков что-то там покажут, если покажут. тоже самое и с клеймом (reply to 303801)

🐼 Sild: https://tonviewer.com/transaction/e2ed24d6f23684283cb084921dfaf2ff9608709d9c56d969014f539f0b8b3d0c https://retracer.ton.org/?tx=e2ed24d6f23684283cb084921dfaf2ff9608709d9c56d969014f539f0b8b3d0c а зачем ретрейсер сломали🙄

RootTon: Всем привет, кто работал с tonutils-go подскажите плиз, везде в семплах есть переменная с сид фразами кошелька, обязательно ли это делать? или можно к примеру как во фронте с помощью того же tonconnect-ui вызывать транзакции на кошельках без сид фраз?

RootTon: просто понять не могу, чтобы мне отправить транзакцию на перевод тонов с кошелька 1 на кошелек 2 мне нужно чтоли иметь сид фразы кошелька 1 а если я этого не хочу в целях безопасности ?

Denis: тоже не совсем. главное отличие что минтлес вообще не треует отдельного клейма. например в момент свапа сразу появятся на счету. и можно например сделать газлес трансфер (reply to 303803)

Оскар: разве не требует? вроде как когда был тест минтлесса с жетоном Point, он у многих "сгорел" по причине того, что не сделали минимально трансфер самому себе, а то есть был срок, за который ты должен был "токенизировать" циферку из пруфа (reply to 303811)

Denis: ну там просто был ограничен срок клейма узким диапазоном. это вполне работает и для любой другой реализации эирдропов

Оскар: присоединяюсь к ранту на бота который вечно удаляет ответы (reply to 303813)

Оскар: в общем я и хотел сказать что по сути контракты, который я кидал выше, вшили в жетон минтер и жетон воллет, что позволило без особых проблем приложениям кошельков индексировать данные минтлессы и отображать то, что еще фактически не заклеймили  это можно было бы провернуть и с этими контрактами, но там много "но" появляется (reply to 303813)

🕵️: Приветствую, а что tonconsole уже не ворк?

User<7374665072>: Привет всем! Очень хочу начать собственный проект, но пока у меня нет идей. Буду благодарен, если вы поделитесь своими предложениями, особенно если заметили, что чего-то не хватает в Ton. Хочу найти идею, которая меня вдохновит. Обещаю, что реализую понравившуюся концепцию, и в качестве благодарности включу для вас в проект приятный бонус, когда он будет завершён.

Denis: отвалились все публичные тестнет ЛС сервера. рестартанул (reply to 303822)

&rey: А я её ещё не объяснял в русском чате? (reply to 302984)

Asher: Здравствуй, Иван! (reply to 303823)

&rey: Схема называется "односторонний платёжный канал". Сейчас поясню: (reply to 303826)

&rey: Сервер хранит полное количество выданных каждому пользователю жетонов и пару ключей.

&rey: Когда надо дать ещё, тотал обновляется, и этот новый тотал + адрес назначения подписывается.

&rey: Жетон-кошелёк хранит, кроме баланса, общее количество востребованных с сервера жетонов.

&rey: За счёт этого никакой реплей-защиты не требуется – при втором приходе того же сообщения просто ничего не изменится, только пользователь зря потратит газ.

&rey: Заодно пользователь может не забирать сотни микро-прибавлений по одному – ему достаточно прислать последнее, с максимальным тоталом. Короче, довольно эффективно по тонам.

RootTon: Хочу физическую карту чтобы расплачиваться в пятёрочке за крипту ) (reply to 303823)

User<7374665072>: Это проект другого уровня, а я бедный одинокий программист, надо смотреть реально на вещи. (reply to 303836)

•: По запросу от nfc обычной бакнковскрй карты сделать автоматизацию обмена ton в рубли в нужном эквиваленте + расходы на газ, минуя медленных p2p, и этими же рублями оплатить покупку в пятерочке, при условии что тон довольно медленный блокчейн и финализация занимает секунд 10 + задержки на запросы и ответы в лучшем случае можно рассчитывать на 20-30 секунд времени оплаты. В кассе нормальную очередь позади себя наберешь, а онлайн через автоматизацию сбп вполне себе. Только пока это какие то сказки (reply to 303836)

RootTon: Тон медленный? Чет новенькое, а что вы знаете быстрее ? (reply to 303841)

rends_east: за ответ на этот вопрос в чате банят по ключевым словам (reply to 303842)

RootTon: Д ну камон я с эфиром работал 1 раз вот там медленно

RootTon: У меня просто нету с чем сравнивать на практике

rends_east: ну попробуй второй) попробуй с другим хайповым блокчейном сравнить (reply to 303844)

Dmytro: таких уже миллион (reply to 303836)

RootTon: А поделитесь ссылкой если не трудно? (reply to 303849)

Vladimir: Ну не миллион, и не в Пятерочке. (reply to 303849)

>_<: Разве байбит карта или бинанс это не то ? (reply to 303850)

RootTon: Visa ушла из рф (reply to 303852)

Stanislav: шо опять? (reply to 303853)

Asher: в рф ни одна не пашет, расходимся (reply to 303850)

RootTon: И везде где она доступна поддерживается крипта на законодательном уровне (могу ошибаться) а в рф с криптой все сомнительно (reply to 303852)

RootTon: Хз мир норм вроде (reply to 303855)

Dmytro: А ну в странах третьего мира конечно не работают. В нормальных странах карт полно. (reply to 303853)

RootTon: И бинанс сам по себе централизованный, а то че к примеру пытаются сделать mytoneallet будет привязано конкретно к кошельку а не к сторонней платформе

RootTon: Которую кстати недавно относительно хакнули на эфир

Dmytro: любая штука которая позволяет расплачиваться за крипту будет на удивление централизованно

bazzilic.eth | Synnax: Друзья, может кто знает что происходит – валится JSON RPC метод get_wallet_address на джеттоне USDT, причем валится на нодах разных провайдеров. До этого работало, другие методы работают нормально, этот же на тестнете работает нормально, но один этот на маиннете валится. Никто не знает, в чем дело?

Oleg: С чем бороться? Пользуйся на здоровье, если веришь в чудеса) (reply to 303866)

sd: Расслабься, это комент чтоб собрать клиентов с чата. (reply to 303869)

Ars: добрый!  где еще кроме основной документации можно узнать и разобраться в том как создать своё приложение? есть идеи но не могу начать, чуть двинусь и потом всё рушится, будто всё делаю не так

Илья: У меня есть USDt в TRON trc20, и я хочу его занести на TON кошелек (условный тонкипер или @wallet). Какая будет комиссия?   Внутри сети TON какая будет комиссия на перевод USDt? 0.01$? Как у жетонов?

Max: Дешевле среднестатистического жеттона  Цента 3 с текущим курсом (reply to 303879)

Илья: Спасибо; И все же, как внести напрямую USDt из Трона в TON? Нужно обменивать?

Max: Да (reply to 303881)

🐼 Sild: воллет вроде позволяет прямо перевести (reply to 303881)

Max: И попутно скан ануса запросит (reply to 303883)

Илья: Да, с байбита 2$ сейчас комиссия   Интересно какой тут механизм - wallet что, сам обменивает под капотом без своих комиссий?   USDt trc20 -> USDt TON  Интересно сколько сдерут Dex-ы (reply to 303883)

🐼 Sild: думаю там механизм "тащите ликвидность в тон, мы угощаем"  а может и отщипывают чутка. на стейблкоинах незаметно

Max: не отщипывают ничего  фиксированную комиссию в 1 USDT возьмут при выводе в ончейн просто (reply to 303887)

🕵️: Типа соль быстрее? Так я бы не сказал, вот если уже то что обычно не упоминает в .. ну вы поняли (reply to 303843)

Илья: На официальном сайте https://ton.org/borderless вот такой вариант нашел, рандомный, выдает 0.24$ за своп usdt на TON

Илья: Есть у кого примеры мини-аппов с usdt? Только рабочие, а не как @tma_jetton_processing_bot (у меня с мобайла подключается там кошелек, но не идёт оплата)

Max: интересно, с каких пор "анус" подпадает здесь под цензуру. но да ладно

Андрей: Так чат про разработку, а не про биологию (reply to 303899)

Combot: Владислав Ковалёв has been temporarily muted for 86400 seconds

MikeWeb3Mighty: Привет, есть ресурс который код ск на func преобразует в tact?

Oleg: Звучит как нечто невозможное (reply to 303909)

🐼 Sild: https://github.com/ton-blockchain/wallet-contract-v5/blob/main/types.tlb#L26  сдается мне там все же out_actions:(Maybe ^OutList)

— 2025-05-06 —

BAAL_RA: Уголовное законодательство готовят,с регулированием в этом плане, вопросе - РФ впереди планеты всей. (reply to 303856)

BAAL_RA: ТОН нормально работает в отличии от некоторых... (reply to 303842)

BAAL_RA: Я это обзываю-"криптоэквайринг" В июле цифровой рубль - посмотрим, как это работать будет и с чем его можно будет связать (reply to 303841)

BAAL_RA: Привет Иван  Хочу привязать к "памятным монетам"(ключевое слово - памятные)- из золота к крипте. (reply to 303823)

BAAL_RA: Потихоньку двигаюсь в этом направлении. (reply to 303919)

BAAL_RA: Мне такое нужно, никак время не найду - занятся, маленький Dapp - для клейма или самостоятельного получения аирдропа пользователем и встроить или вставить на один из магазинов - сайтов.,на этот счёт - разные варианты имеются...- попробовал "кнопка в кнопке" - через раз работает - стыдно людям показать 🙄😄, скажут - какой то делитант,а про пользователей - вообще молчу - попрут за аирдропом...- в общем - как есть, что скрывать (reply to 303800)

BAAL_RA: Я туда ещё и мост пробовал вставить - вообще долго ,а иной раз - перезаходить приходится (reply to 303921)

BAAL_RA: Да и кстати - как то вопросы задавал,по поводу QR кода на получение аирдропа - всё работает - лазерная гравировка.

BAAL_RA: Всем огромное спасибо 🖐️🤝- много полезной информации 🤝

BAAL_RA: В смысле QR код - лазерная гравировка - работает! (reply to 303923)

BAAL_RA: До 20 точек - можно

BAAL_RA: Пробовал клеше- чеканить QR код,под определенным углом,не всегда срабатывает,а лазерная гравировка - четко и сразу.

BAAL_RA: Это точно (reply to 303788)

MikeWeb3Mighty: Есть заказ на разработку, если кому интересно пишите в личку.

Nikita: Этот человек является мошенником. Достаточно задать ему один простой вопрос, где деньги, которые он переводил мне за работу. Пусть покажет транзакцию, банковскую или в крипте. Это первое. Второе, он обманывал тем, что будут продажи, но не смог ничего продать и решил как обычно путем манипуляций получить денег, так как занял. Третье, пытается в понятия, но по понятиям лжец стоит в низу иерархии. Категорически не рекомендую вообще иметь дела с ним (reply to 303758)

Nikita: Сегодня буду подавать на него иск

Emil: Вот пруфы (reply to 303937)

Emil: Где твои? (reply to 303937)

odnokasanie: где твои 16 лет? (reply to 303942)

Nikita: Я просил транзакцию, а не тогда ещё дружелюбную переписку, где я согласен был помочь тебе найти 45к

Emil: Я про пруфы, с моей стороны сохранены все переписки и переводы (reply to 303943)

Emil: Ахахахах, в переписке видно что я прошу ВЕРНУТЬ а не помочь, ты че хвостом виляешь мышонок? (reply to 303944)

Nikita: То есть тебе надо предоставить договор, факт оплаты, условия на которых делалась договорённость

Emil: В полиции все предоставишь, если хоть что то имеется (reply to 303947)

Nikita: Вот, опять, смотрите, факты, их же легко предоставить. Скидываешь их в чат, или предоставляешь полиции и все убеждаются, что я неправ. Но данные обманщик это не делает. Интересно, почему (reply to 303948)

Дмитрий: Мужики не останавливайтесь, я быстро за попкорном

Emil: Давай давай, петушись дальше)  Только твои переписки в полиции примут, а вот с твоей стороны нечег предоставить, потому что ты пиз &@ бол

Nikita: Зато есть факты того, что я прилетал к этому человеку. Работал с ним в одном помещении под обещания и в итоге не получил ничего. И сейчас у него совсем поехала крыша, и он решил, что если он не смог стартап развить, то можно съехать с обещаний

Nikita: Про петухов не фуфелу рассуждать =) (reply to 303953)

Nikita: Мне не интересно участвовать дальше в обсуждении

Emil: Ахахахах, ты напросился ко мне как побитая собака, а теперь оскал показать решил, но не переживай, таким как ты зубы в тюрьме быстро выбивают (reply to 303954)

odnokasanie: если нет земных данных и координат, то полиция не найдет и не будет искать, если ты не Лариса Долина (reply to 303953)

Emil: Все ок) ФИО, др, копии доков, все есть включая адрес текущего проживания (reply to 303959)

Alex: Я так понял чувака кинули на деньги и тот кто кинул публично пресует свою жертву. Видимо мне стоит относится к этому как к образовательному контенту, раз админы это не удаляют

Nick: Товарищи, ругающиеся. Если был бы сервис на тоне, где рейтинг работодателей основывается на платных лайках/дизлайках, готовы ли вы заплатить реальные тоны против своих оппонентов или за себя?

/B4ckSl4sh\: Не очень понятно как отличать твинки (reply to 303964)

/B4ckSl4sh\: Впрочем, это проблема всех подобных сервисов. Остаётся только выбирать с хорошим рейтингом и не выбирать где мало оценок

maksim: Вроде победители одного из хабов в 24 году делали нечто похожее (reply to 303964)

Nick: Можно использовать модель Trustpilot, но и с ним не все так гладко. Тем не менее, он борится с твинками лучше остальных (вроде как). (reply to 303965)

Nick: Чем закончилось? (reply to 303967)

maksim: Вроде забили после хака (reply to 303969)

RootTon: @subden Подскажите плиз есть у тонапи сдк под go?

RootTon: может какое то неофициальное

RootTon: а все нашел

Bane_Father: Which group is this

Ճϐ٥ษӈนҡ Ճ৮ᴥϐ٥ሉค: +1 буст от меня)❤️

Ճϐ٥ษӈนҡ Ճ৮ᴥϐ٥ሉค: Угу, English тут не работает)

.: Привет всем есть девушки каторый любит интимные отношения

Alex: Пора какой то identity вводить 😄

Brave: причина? (reply to 304002)

Oleg: "Сделай за меня работу, а то меня в гугле забанили" (reply to 304004)

Ճϐ٥ษӈนҡ Ճ৮ᴥϐ٥ሉค: А за голос нечего не дают, так ведь?..

Denis: он не сказал волшебного слова о том что эти девушки готовы на отношения без взяти за это денег. тогда бы его сообщение удалило (reply to 303999)

Alex: Совсем не понимает психологию отношений с незнакомыми девушками ) (reply to 304007)

RootTon: Народ как отправить транзу в go используя tonutils-go без seed фраз? просто вызвав кошелек как это делается на стороне фронтов к примеру

Паша: Для этого тонконнект надо (reply to 304011)

RootTon: https://github.com/cameo-engineering/tonconnect оно? (reply to 304012)

Mirka: Выбирай: https://docs.ton.org/ru/v3/guidelines/ton-connect/guidelines/developers (reply to 304016)

Combot: Cwy has been temporarily muted for 86400 seconds

RootTon: а есть какой то полноценный example ? а то у разраба есть лишь 1 пример и то не понятно какую сессию откуда он берет и поч он ее читает из локального файла (reply to 304023)

🐼 Sild: а как баланс может уходить в минус, если   account_storage$_ last_trans_lt:uint64     balance:CurrencyCollection state:AccountState    = AccountStorage;     currencies$_ grams:Grams other:ExtraCurrencyCollection             = CurrencyCollection;    nanograms$_ amount:(VarUInteger 16) = Grams;   ?

Оскар: в техническом плане не баланс уменьшается, а накапливается так называемый storage due (reply to 304029)

🐼 Sild: понял-принял, спасибо (reply to 304030)

Ճϐ٥ษӈนҡ Ճ৮ᴥϐ٥ሉค: Нужно сайтик тех.поддержки состряпать

Combot: Combot выдал(а) предупреждение Ճϐ٥ษӈนҡ Ճ৮ᴥϐ٥ሉค | ♔ KoverMant ❦ | (1/3) Reason: 1 reports (reply to 304034)

Namon: У кого-нибудь возникала проблема с TonConnect UI на iOS, что при отправке транзакции появляется модалка с кнопкой "Open wallet" и при нажатии на неё не перенаправляет в кошелёк, и TonConnect выдаёт ошибку?

Nick: Какая ошибка? Ошибка только на IOS, а в браузере ошибки нет? (reply to 304041)

Namon: Tonhub: Error: [TON_CONNECT_SDK_ERROR] _BadRequestError: Request to the wallet contains errors. Bad request Tonkeeper: Error: [TON_CONNECT_SDK_ERROR] _TonConnectUIError: Transaction was not sent  Воспроизводится только в TMA, в браузере всё ок. Только на iOS, на других ОС всё ок. В клиент кошелька сообщение для подписи отправляется, при этом на фронте всё падает ещё до перехода в кошелёк.  @tonconnect/ui-react: 2.1.0 react: 19.1.0 (reply to 304042)

Nick: Моя задача: помочь составить более четкий вопрос выполнена.  Коллеги, присоединяйтесь к поиску ответов.  Если ответ будет найден, прошу создать вопрос на tonanswers для помощи будущим поколениям. (reply to 304044)

Andy: Если по клику должен открыться кошелек, то это косяк браузера внутри телеги. Есть проблема с обработкой переходов из тма во вне именно на айос (reply to 304044)

Shkiper: Ещё вопрос по @tonconnect/ui-react как решить проблему с тем что после оплаты в кошельке и возврата пользователя обратно в приложение остаётся заставка open wallet и приложение не видит что оплата прошла и не получает .boc транзакции? Это происходит не всегда

web-assist 🧀: Никак, не реагировать на boc и апрувить транзакции отдельно (reply to 304051)

Shkiper: Да я уже над этим работаю, подумал, а вдруг есть решение (reply to 304053)

Shkiper: Капец как это всё не надёжно получается, теперь каждое нажатие надо обрабатывать и смотреть в блокчейн была оплата нет оплаты, а если включить сценарий перегруза сети .... (reply to 304053)

potato: Могу продать свои исходники, объяснить, помочь) (reply to 304055)

web-assist 🧀: Есть разные способы, я обычно пишу в redis и держу там с EXP по validUntil + N на прозапас (reply to 304055)

Shkiper: Благодарю не нужно, у меня всё есть, просто переделывать надо (reply to 304056)

Namon: а до этого вы верили ответу с фронта что ли? (reply to 304055)

Shkiper: Теперь мне тоже всё так же надо делать, а у меня работа вся после получения .boc была (reply to 304058)

Shkiper: Нет весь механизм строился на получение .boc, всё проверялось после, но не каждое нажатие на кнопку купить (reply to 304060)

Roki: Хороший дашборд для циклов валидации сломался некоторое время назад. Тут есть его владельцы?  https://tonscan.com/validation

Tim: Тут нет, но я отправил туда, где есть (reply to 304066)

Alexandr ZarGates: Всем привет ton cli где взять? на гитхабе 404  по ссылке

User<7374665072>: Привет. Обнаружил багу в Tonkeeper, связанная с дублирующимися названиями кошельков. Когда присваиваешь нескольким кошелькам одно и то же имя, например, "wallet", система автоматически добавляет к ним номера, такие как wallet1, wallet2 и так далее. Однако осталась область, где имена сохраняются напрямую без нумерации. В результате, если  открыть приложение, когда активен кошелек wallet5, и сохраняются его данные в cookies, а затем переключаемся на кошелек wallet2, то cookies wallet5 будут затерты данными wallet2. Это происходит потому, что Tonkeeper рассматривает оба кошелька как имеющие идентичное имя "wallet". (reply to 303863)

— 2025-05-07 —

User<7374665072>: Видео удаляется из чата. Могу в личку прислать.   Шаги для воспроизведения: 1. Создаём кошелек A 2. Создаём ещё один кошелёк с именем А 3. Выбираем первый кошелёк (Tonkeeper дал ему имя A1) заходим в любое app в браузере в тонкипере 4. Открываем второй кошелёк (А2), заходим в то же приложение 5. Нажимаем Refresh  Ожидание: Куки для второго кошелька те же, поэтому мы входим в app без логина  Результат: После Refresh page куки сбросились и нас просят заново залогиниться. И так на каждое обновление странички (reply to 304080)

User<7374665072>: Такая ситуация с любым приложением из браузера Tonkeeper.   Версия Tonkeeper: (reply to 304082)

Anton: это разве не адекватное поведение если ты изменяешь кошелек? (reply to 304082)

User<7374665072>: Нет конечно,  при переключение на кошелёк 1 - должно логиниться с помощью куки кошелька1, и так же для кошелька2. Т.е не должно вылетать/затираться или ещё что-то. Каждая вкладка свои куки, грубо говоря (reply to 304091)

&rey: А разве тонкипер будет держать на каждый кошелёк отдельное соединение с мостом TC2? (reply to 304092)

User<7374665072>: Зачем соединение? По кукам подключение. А так в идеальном случае,  в классическом браузере на каждую вкладку свой независимый поток даже (reply to 304093)

User<7374665072>: В Tonkeeper - это же тоже браузер, там в браузере открываются App (reply to 304093)

🕵️: Приветствую. Кто знает ответ на вопрос. Testgiver кошелек вообще пополняется? А то там все меньше и меньше тон становится

Shkiper: Если не секрет сколько у вас N ? (reply to 304058)

web-assist 🧀: 300с (reply to 304102)

Toffee: Привет, а как сделать сжигания нфт? Я как понял нужно баланс издержать нфт?

Roma: Всем привет. Столкнулся с проблемой, что снимок экрана через канвас не делается. Причина этому, как мне кажется, является 3d сцена. Есть другие варианты сделать скриншот всего приложения? На сервер отправляю в формате base64.

Vladimir: Чат русскоязычного сообщества разработчиков на TON. (reply to 304119)

....: hi

....: Hi! I just submitted a PR to verify the WBR token on Tonkeeper. Could someone please review it? https://github.com/ton-blockchain/token-contract/pull/87

Vladimir: Ждите. Проверят. Прошло только 23 минуты. (reply to 304125)

/B4ckSl4sh\: Мне нравится в какой реп сделан этот PR (reply to 304126)

0xCreator: Всем привет! Разбираюсь с задачей добавления адресов в белый список жетона после деплоя, кто то сталкивался с таким? Что то вроде добавления нового op-code и записью адреса в wallet.  Если кто знает про реализацию буду благодарен   P.s. видел подобное у stable-contract, но там чет намудрено с минтом жетонов после деплоя (ошибка can’t read parametrs )

Dmytro: с ханипотами пожалуйста в другой чат (reply to 304140)

0xCreator: Почему ханипод? Мне вл нужен на старте запуска проекта, не более того (reply to 304144)

Boris: Здравствуйте, вопрос от новичка, как узнать минимальную сумму для отправки Toncoin'ов через смарт контракт? Пишу на языке Tact.  То есть могу ли я отправить 1 нанотон и вместе с ним цену за газ?

&rey: Action можно оплатить отдельно, указав флаг 1. Тогда до получателя дойдёт тот самый один нанотон. (reply to 304149)

Alexey: Привет! Подскажите пожалуйста, что такое key block в регистре c7[13]? Ссылка на доку вот, tlb ниже в сообщении  [ wc:Integer shard:Integer seqno:Integer root_hash:Integer file_hash:Integer ] = BlockId; [ last_mc_blocks:[BlockId0, BlockId1, ..., BlockId15]   prev_key_block:BlockId ] : PrevBlocksInfo  Я не понимаю, что такое key block, откуда он берется. В вайтпейпере по Ctrl+F key block тоже ничего не нашел. Это блок, на котором произошел сплит или мерж? Это блок, на котором произошла какая-то синхронизация с мастерчейном? Где почитать подробности? Посмотрел откуда он берется в cpp коде, там тоже не особо понятно. Может кто-то подсказать?

Alexey: Мне нужны для моей задачи 16 блоков из мастерчейна, которые лежат выше в last_mc_blocks, но возможно prev_key_block тоже пригодится, да и не просто же так он тут есть, хочу понять что это и для чего (reply to 304155)

🐼 Sild: это мастер-блок в котором хрен знает что произошло но он указывается как ключевой в block_info каждого блока https://github.com/ton-blockchain/ton/blob/cee4c674ea999fecc072968677a34a7545ac9c4d/crypto/block/block.tlb#L452 (reply to 304155)

🐼 Sild: да угадаю задачу - tx_emulator оживить?) (reply to 304156)

&rey: Когда данные конфига менялись. (reply to 304155)

Alexey: к сожалению или к счастью - нет) (reply to 304159)

Alexey: последний блок, в котором менялся глобальный конфиг блокчейна? (reply to 304160)

&rey: а это включает и списoк вaлидаторов, кстати (reply to 304160)

Alexey: понял, спасибо всем!

Ed: Всем привет. Подскажите как сделать трансфер джетонов с помощью tonconnect. Есть ли примеры кода, желательно на go

Ed: У меня не проходят транзакции, типо не правильно создаю payload

X1ag: https://github.com/xssnick/tonutils-go/blob/master/example/jettons/main.go (reply to 304169)

Ed: Здесь можно орагиновать подключение через tonconnect? Я просто для этого использовал  https://github.com/cameo-engineering/tonconnect  Я пытался создать payload с помощью этой библиотеки, конвертировать в нужный формат и отправить транзакцию (reply to 304171)

s0apu?: ребят, как тест нет пополнить в тон спейс? на тон так 100)

:3: можно брать беслпатно каждый час 2 тона (reply to 304174)

Alexey: @testgiver_ton_bot (reply to 304174)

рис: Есть тестовый сайт с tonconnect, где я могу ввести транзакцию и отправить в кошелек?

Nick: Если память не изменяет, у них в документации есть ссылки на демо-версии приложений. (reply to 304186)

рис: Да, но там очень неудобно менять тело, ладно напишу сам (reply to 304187)

Артем: Есть кто работал с пермит2?

Combot: Hayk has been temporarily muted for 86400 seconds

Denis: FYI: на dev.tonapi.io и dev.tonviewer.com (это мейннет) должна заработотать индексация первых 10 жетон-кошельков в минтлес жетоне (reply to 303780)

Vladimir: *tonviewer.com (reply to 304210)

— 2025-05-08 —

potato: Всем доброе утро! а что делает тильда

Combot: Илья has been temporarily muted for 86400 seconds

Vasilii: какие есть варианты? (reply to 304241)

potato: Не знаю, вот и интересуюсь (reply to 304244)

наз: типа как not в питоне вроде (reply to 304241)

potato: Благодарю!

potato: Это ии писал? (reply to 304257)

Alex: Частично , фронт , я во фронте не силён

potato: Оно видно, потому что у тебя запросы стакаются и после каждого "назад" отправляется по +1 запросу) дорабатывай. Рано пока нелегальной рекламой с риском в бан заниматься (reply to 304259)

Alex: Ок, спасибо за замечание )

potato: Я пишу смарт-контракт с рандомной выдачей средств. Что-то вроде лутбоксов Суть простая человек отправляет N Тон и взамен получает определенную награду в зависимости от randomize_lt()  Проблема такая, сейчас при вызове транзакции я вижу свой выигрыш Какие есть варианты скрыть это?

final: Ты и будешь его видеть, но результат который ты получишь будет другим (reply to 304267)

potato: О спасибо, я тоже так думал но прогнали ~50 транзакций и все 1х1 совпадали с тем, что показывает тонкипер (reply to 304268)

Denis: ну так вы рандом не используете поди

Denis: на docs.ton.org была целая статья про то как делать рандом

potato: Я так пишу, как раз оттуда

potato: У меня лутбокс будет всегда отправлять ответное сообщение Я могу как то сделать так чтобы в ответном сообщении всегда был один и тот же комментарий?

potato: Или вообще не было видно псевдовыигрыша т.к. это может неправильно восприниматься

Denis: Там скоро будет детект что если был вызов рандома то дальнейшие результаты не будут показываться (reply to 304278)

potato: Понял, звучит хорошо

Марина: Всем привет! Не могу разобраться как создать usdt кошелек для задеплоенного смарт контракта. Получить адрес у минтера и отправить на адрес админа сообщение? Или зная код,адрес мастера и первоначальную дату деплоить через state init? или как это вообще делается? Можно даже не расписывать, просто скинуть ссылку на то, где это в документации почитать можно, а то я сама потерялась в ней и пробую варики на уровне предположений😄🤡

X1ag: jetton wallet деплоится сам, когда на него поступают операции типа принятия жетонов или минта.  Если вам нужно внутри ск получить адрес jetton wallet, то https://github.com/ProgramCrafter/tvm-quirks/blob/master/ok-jetton-wallet-onchain.fc (reply to 304287)

maksim: Тут есть примеры разной работы с usdt и в целом жеттонами ончейн и офчейн, https://github.com/tact-lang/defi-cookbook/tree/main/jettons (reply to 304287)

Марина: спасибо всем большое! То есть по факту чтоб все заработало сразу после того, как я с админского кошелька задеплоила контракт, беру его адрес, запрашиваю у минтера его usdt адрес и с админского usdt кошелька кидаю небольшую сумму на вычисленный usdt? все?👀

&rey: Для перевода вам не нужен адрес жетон-кошелька получателя. (reply to 304290)

🐼 Sild: можно просто перевести usdt на новый контракт. Кошелек создастся в процессе получения жетона (reply to 304290)

Марина: теперь точно поняла, благодарю

Паша: Всем привет, можете подсказать, как кастомизировать tonconnect/ui-react кнопку? Гуглил, но нашел только для tonconnect/ui и то там не все кастомится

🐼 Sild: надеюсь вы глубоко в тестнете, потому что иначе эти usdt так навсегда на "новом контракте" и останутся (reply to 304293)

0xCreator: В сети тона есть мев боты типо сендвича или фронтранера?

Alexander: Есть, но работает немного иначе чем в эфире например (reply to 304300)

0xCreator: А можете подсказать способы защиты от таких ботов? Есть ли например ограничения 1 транзакция в 1 блок? (reply to 304301)

/B4ckSl4sh\: Обычно чтобы защититься ломают эмуляцию - мев бот не может определить, что эта транзакция - покупка (reply to 304302)

Alexander: Но это временная мера, пока разработчики бота не решат (reply to 304303)

/B4ckSl4sh\: Но мало кто свою эмуляцию пишет, обычно либо тонапи либо libemulator из тон монорепы (reply to 304304)

Игорь: У меня явно глупый вопрос, в примере как вычислить адрес жетона нужно использовать ячейку с кодом контракта, которая я так понимаю загружается в контракт при деплое.  Это ячейка контракта владельца жетона? Откуда берется и в каком виде грузится этот код? где об этом можно почитать? (reply to 304289)

🐼 Sild: приходит в сообщении в stateInit https://github.com/ton-blockchain/ton/blob/cee4c674ea999fecc072968677a34a7545ac9c4d/crypto/block/block.tlb#L156  устанавливается отправителем по необходимости (скорее всего жетон-мастером, но тут я плаваю в вопросе) (reply to 304307)

Игорь: ```/// The only difference between receiving the Tact Jetton (basic) and the Governance Jetton (USDT) is the status field in Governance State Init, /// that changes how we calculate the address of the Governance Jetton Wallet. /// /// The rest of the code is the same as the Tact Jetton Receiver. contract JettonSenderGovernance(     minterAddress: Address,     jettonWalletCode: Cell,  //Вот ячейка с кодом, что в нее посылать? ) {     inline fun getTactJettonWalletStateInit(owner: Address): Cell {         return GovernanceJettonWalletStateInit {             owner,             minter: self.minterAddress,         }.toCell();     }      inline fun calculateJettonWalletAddress(owner: Address): Address {         let initData = self.getTactJettonWalletStateInit(owner);         return contractAddress(StateInit { code: self.jettonWalletCode, data: initData });     } ```

🐼 Sild: воллет-код вероятно. От точно где-то прикопан в жетон-мастере

Skuli: Всем привет Раз есть метод, который позволяет вызвать гет функцию Значит все эти функции тоже можно как-то подсосать из блокчейна?      runGetMethod(address: Address, method: number | string, stack?: TupleItem[], params?: GetMethodParams): Promise<import("./SmartContract").GetMethodResult>;

Игорь: тоже самое здесь, для вычисления адреса жетона, нужно использовать ячейку с кодом контракта, из самого контракта. Когда я делаю билд контракта я получаю байт код контракта, и его деплою. А как получить этот код изнутри контракта? Не понимаю  как все это работает. Явно где то должно быть описание. (reply to 304288)

Игорь:  forall X -> tuple change_tuple(tuple t, int pos, X value) asm(t value pos) "SETINDEXVAR"; tuple get_c7() asm "c7 PUSHCTR";  slice vm::invoke_get_addr(slice owner_address, tuple c7, cell master_data, cell master_code) asm   "CTOS            // owner_addr c7 md mc"   "2 PUSHINT       // owner_addr c7 md mc args"   "103289 PUSHINT  // owner_addr c7 md mc args get_jwa_method_id"   "5 0 REVERSE     // owner_addr get_jwa_method_id args mc md c7"   "53 RUNVM        // address exit_code c4' c5'"   "3 BLKDROP       // address";  slice get_addr(slice owner_address, cell code, cell data, slice master_addr) inline_ref {     tuple c7 = get_c7();     c7 = c7.change_tuple(0,         c7.at(0).change_tuple(8, master_addr)                 .change_tuple(10, code)     );     return vm::invoke_get_addr(owner_address, c7, data, code); }  slice calc_my_jetton_wallet(slice master_addr, cell code, cell data) inline {     return get_addr(my_address(), code, data, master_addr); } (reply to 304288)

Марина: только вчера в этом копалась) https://docs.ton.org/ru/v3/guidelines/smart-contracts/get-methods . Разработчики не дают возможности напрямую из смарт-контрактов вызывать гет методы (reply to 304311)

X1ag: когда пишешь npx blueprint build тебе выдает хэш кода. Этот хэш пробрасываешь в сторадж контракта при деплое и уже используешь его в самом контракте (reply to 304312)

Игорь: как то это сложно и не логично, хранить внутри контракта хеш самого контракта, напрашивается что должен быть способ получить его внутри контракта.  Именно тот, который hash? (reply to 304318)

Игорь: а то их там три выдает

X1ag: если вам нужно вычислить адрес jetton wallet, то используйте calc_my_jetton_wallet (который вы кидали выше) который принимает в себя адрес jetton master, код jetton master и data jetton master (reply to 304312)

Skuli: Я хочу получить список гет методов Так нельзя? (reply to 304317)

Игорь: Благодарю, попробую (reply to 304321)

X1ag: при деплое просто кладете jetton master address, jetton master code, jetton master data и вычисляете jetton_wallet_address (reply to 304321)

🐼 Sild: скорее нет чем да  то что показывает тонвьювер - они сами наиндексировали своими способами  просто готового списка - ну, практически нет. Из каждого конкретного кода можно достать сигнатуры при большом желании, но не более того (reply to 304323)

&rey: Это неразрешимая задача для произвольного контракта (та же проблема останова). (reply to 304323)

&rey: Здесь эти addr, code и data спокойно копируются из тонвьювера. (reply to 304313)

Марина: а я правильно понимаю, что если я хочу одним действием и перевести на wallet usdt и совершить какую-то полезную работу на адресе контракта, то мне кроме суммы перевода и стандартного op нужно в forward_payload закинуть данные с опкодом, которые дальше будут переданы в основной смарт-контракт?

Skuli: Ну я сигнатуры и хочу Название функции и возвращаемое значение (reply to 304326)

Alexander: Всем привет! Собрал libemulator в монорепе, при запуске вм падает на GETORIGINALFWDFEE с invalid opcode. Хотя используя fift и runvm из этой же версии монорепы все норм. В чем может быть прикол?

&rey: А если при разных аргументах разный тип вернётся? (reply to 304331)

🐼 Sild: в таком случае это можно "как-то" выковырять из корневой ячейки кода. Там где-то живет дикт с сигнатурами. Но у меня чисто теоретические знания, мне было интересно но нырять туда не стал (reply to 304331)

🐼 Sild: это что за сигнатуры такие интересные? (reply to 304333)

Denis: я тоже хочу но их нет :( возможно появятся в обозримом будущем но пока только эвристики (reply to 304331)

&rey: Условно, asm "ISTUPLE IF<{ ... }>ELSE<{ ... }>". (reply to 304336)

🐼 Sild: я догадываюсь что напихать такого в теории можно, asm есть asm, но пошло оно с такой сигнатурой...=( (reply to 304340)

&rey: А ещё интересно, как вы будете парсить такое (ниже полный код контракта): 3 1 BLKDROP // full_value selector REPEAT<{ INC }> (reply to 304341)

Alexey: а не будет ли TEP-89 дешевле? держать код мастера и кошелька и эмулировать их на блокчейне - такое (reply to 304321)

&rey: Всё те же инструкции выполнятся на мастере + все сложности пересылки по чейну. (reply to 304343)

&rey: Главная проблема TEP-89 – он асинхронный. Есть промежуток времени, когда контракт не знает свой жетон-кошелёк. При проверке разных свойств это очень плохо.

Skuli: Гет функции же не имеют аргументов (reply to 304333)

&rey: Точно-точно? (reply to 304349)

Skuli: Надо посмотреть) (reply to 304350)

Petr: Кто сказал? (reply to 304349)

/B4ckSl4sh\: Явно AI (reply to 304352)

X1ag: slice get_wallet_address(slice owner_address) method_id {     (int total_supply, slice admin_address, cell content, cell jetton_wallet_code) = load_data();     return calculate_user_jetton_wallet_address(owner_address, my_address(), jetton_wallet_code); }  Это в жетон минтере гет метод (reply to 304351)

Petr: Тогда не соврал (reply to 304353)

/B4ckSl4sh\: Может по дефолту оно старый global version в конфиг эмулятора кладёт? Либэмулятор не собирал сам, чисто пальцем в небо (reply to 304332)

/B4ckSl4sh\: Судя по коду конфиг на вход эмулятору прокидывается - так что наверное проблема не в этом (reply to 304356)

Alexander: Да, дело было именно в global version, я сначала захардкодил новый по дефолту потом уже дошел что оно с конфига берет - передал конфиг заработало (reply to 304356)

Alexander: Оно не ругается если не передавать конфиг

/B4ckSl4sh\: Жесть :) (reply to 304359)

Alexander: Там чтобы передать конфиг нужно вызвать set_c7 и там это один из параметров (reply to 304360)

Alexander: И set_c7 не позволяет задать c7, просто принимает некоторые аргументы и сам уже проставляет потом их в c7

Alexander: Но там еще больше веселье с тем что адрес отправителя в эмуляторе это всегда нулевой адрес с воркчейном 0b11111111 - почему так и почему из вне нельзя передать тоже загадка

/B4ckSl4sh\: Странно, а как ты эмулятор вызываешь? В тестах я такое вижу    void *emulator = transaction_emulator_create(config_boc, 3);  То есть конфиг явно отдаётся (reply to 304361)

Alexander: Сейчас посмотрю, я через pytvm с ним работаю так что это еще один уровень абстракции может быть там что-то передается дефолтное (reply to 304364)

Alexander: там есть transaction_emulator а есть tvm_emulator

Alexander: второе не принимает конфиг в tvm_emulator_create

/B4ckSl4sh\: В transaction эмуляторе тут просто мессадж на вход прилетает - src, соответственно, можно любой указать  Сейчас посмотрю, что же там за tvm_emulator (reply to 304363)

Alexander: Я не особо понял зачем их два, но второй легче юзать тк там есть функции вроде send_internal_message которые принимают body и amount (про адрес отправителя просто забыли) (reply to 304370)

Alexander: Забавно просто что воркчейн store_ones(8) 🙂

/B4ckSl4sh\: ага, вижу тут и set_c7, и tvm_emulator (reply to 304372)

/B4ckSl4sh\: На tvm_emulator тут только гетметоды в тестах гоняют кстати  (но тестов тут конечно кот наплакал) (reply to 304375)

Alexander: А зачем там тогда send_internal_message и send_external_message сделали 🙂 У меня есть предположение что tvm_emulator не запускает наверное фазы кроме компьют, хотя не уверен (reply to 304376)

/B4ckSl4sh\: Мне почему-то тоже так кажется, но по исходникам пока не понял (reply to 304377)

/B4ckSl4sh\: Кстати кажется все таки можно   bool tvm_emulator_set_config_object(void* tvm_emulator, void* config) {   auto emulator = static_cast<emulator::TvmEmulator *>(tvm_emulator);   auto global_config = std::shared_ptr<block::Config>(static_cast<block::Config *>(config), config_deleter);   emulator->set_config(global_config);   return true; } (reply to 304361)

Alexander: tvm_emulator_send_internal_message -> send_internal_message -> send_internal_message -> run_method -> run_smartcont -> ~vm.run()  вроде только компьют фаза, а точнее просто запуск вм вот таким вот образом (reply to 304378)

/B4ckSl4sh\: ага, да, то же самое нашёл, нет там ничего кроме компьют фазы (reply to 304381)

Alexander: именно transaction_emulator не очень удобно для тестов использовать в pytvm + pytoniq, но это вопрос к разработчикам этих питон библиотек

Alexander: Я добавил сборку шард аккаунта, но пока PR не приняли https://github.com/yungwine/pytoniq-core/pull/20/files

/B4ckSl4sh\: А ты что-то типа py-ton-sandbox пишешь? (reply to 304383)

Alexander: да нет, я просто pytvm + pytoniq + pytest запускаю для тестов контрактов ) я предполагал что этого уже достаточно без чего-то дополнительного, ну впринципе если только тесты с запуском вм то вполне достаточно +- (reply to 304385)

/B4ckSl4sh\: Эх, а я уж надеялся кто-то наконец-то напишет :) (reply to 304386)

Alexander: был кстати фреймворк для тестов на питоне полноценный, только его забросили, toncli (reply to 304387)

/B4ckSl4sh\: Там вроде только компьют фаза была, нет? (reply to 304388)

Alexander: Не помню уже, но наверное да. Тогда еще эмулятора не было такого чтобы его удобно затягивать можно было (reply to 304389)

Skuli: Я помню читал/слушал где-то Скорее всего я перепутл с тем что в гет методах не идёт работа с изменением данным в блок чейне (reply to 304352)

&rey: Ну, это адрес System. (reply to 304374)

рис: А есть вариант через tonapi узнать тип контракта или хотябы методы, которые в нём есть?

web-assist 🧀: во сколько примерно может обойтись хранение 12к чисел в виде кортежей

Evgeny: Так прям по getAccount выдает интерфейсы, методы и т.д.  https://tonapi.io/v2/accounts/EQD8QXyjSoDRl4Q7-WOGYARQ2Dcv9Md8Gz-z5ZbndYWtKDDC  Ответ {   "address": "0:fc417ca34a80d197843bf96386600450d8372ff4c77c1b3fb3e596e77585ad28",   "balance": 19364400,   "last_activity": 1746725897,   "status": "active",   "interfaces": [     "nft_sale_getgems_v3"   ],   "get_methods": [     "get_sale_data"   ],   "is_wallet": false } (reply to 304393)

рис: О, спасибо! (reply to 304395)

Denis: скорее полезнее это https://tonapi.io/v2/blockchain/accounts/saint.ton/inspect (reply to 304395)

#: здравствуйте, скажите пожалуйста, почему при отправке токенов на контракт, он не реагирует?   message(0x7362d09c) JettonTransferNotification {     queryId: Int as uint64;     amount: Int as coins;     sender: Address;     forwardPayload: Slice as remaining; }   receive(msg: JettonTransferNotification) {         let walletData = self.getJettonWalletData(context().sender);          if (walletData.jettonMasterAddress != self.jettonMasterAddress) {             send(SendParameters{             to: sender(),             value: ton("0.01"),             bounce: true,             mode: SendRemainingValue + SendIgnoreErrors,             body: "error".asComment()         });         }          self.myJettonBalance += msg.amount;          send(SendParameters{             to: sender(),             value: ton("0.01"),             bounce: true,             mode: SendRemainingValue + SendIgnoreErrors,             body: "accepted jettons".asComment()         });     } fun getJettonWalletData(walletAddress: Address): JettonWalletData {         return JettonWalletData {             balance: 0,             ownerAddress: walletAddress,             jettonMasterAddress: self.jettonMasterAddress,             jettonWalletCode: self.jettonWalletCode         }     }

Dmitry | backend4you.ton: Совсем не реагирует? Или падает с ошибкой? Ссылку на транзакцию можете показать? (reply to 304402)

#: у меня есть гет метод который показывает баланс контракта в жетонах и он по прежнему 0.   self.myJettonBalance += msg.amount; https://testnet.tonviewer.com/transaction/32bf5f672019051a04ba68a00dd5268256394d5505394ec8a2f3690cf8502cc3 (reply to 304405)

Dmitry | backend4you.ton: Тут «ваш» контракт это D? Ну, он не смог обработать Jetton transfer notification потому что к нему был приложен лишь 1 нанотон что недостаточно для запуска. При отправке о кладите больше в forward-amount (reply to 304406)

#: так я с кошелька отправляю (reply to 304407)

Dmitry | backend4you.ton: А кто, по вашему, оплатит работу контракта-подучателя? (reply to 304408)

Dmitry | backend4you.ton: Если у вас есть web app который юзер использует - он должен подготавливать (давать на подписать) транзу в которой заложено нужное количество в forward amount. Если у вас по бизнес-логике юзер сам посылает жетоны со своего кошелька - то вы не сможете гарантированно обработать их получение onchain , вам нужно какой-то backend строить

Dmitry | backend4you.ton: Если совсем честно - отправитель даже не обязан и 1 нанотон отправлять в forward, так что если юзер использует «необычный» кошелек то там вообще может transfer notification не быть.

#: скажите пожалуйста почему myJettonBalance не изменяется когда на контракт приходят токены   message(0x7362d09c) JettonTransferNotification {     queryId: Int as uint64;     amount: Int as coins;     sender: Address;     forwardPayload: Slice as remaining; }  struct JettonWalletData {     balance: Int as coins;     ownerAddress: Address;     jettonMasterAddress: Address;     jettonWalletCode: Cell; }  fun calculateJettonWalletAddress(     ownerAddress: Address,     jettonMasterAddress: Address,     jettonWalletCode: Cell, ): Address {     let initData = JettonWalletData {         balance: 0,         ownerAddress,         jettonMasterAddress,         jettonWalletCode,     };      return contractAddress(StateInit {         code: jettonWalletCode,         data: initData.toCell(),     }); }  const JettonTransferGas: Int = ton("0.0535");  contract JettonLottery with Deployable, OwnableTransferable, Stoppable, Resumable {     owner: Address;     stopped: Bool;     jettonMasterAddress: Address;     jettonWalletCode: Cell;     myJettonWallet: Address;     myJettonBalance: Int as coins = 0;      init(jettonMasterAddress: Address, jettonWalletCode: Cell) {         self.owner = sender();         self.stopped = false;         self.jettonMasterAddress = jettonMasterAddress;         self.jettonWalletCode = jettonWalletCode;         self.myJettonWallet = calculateJettonWalletAddress(myAddress(), jettonMasterAddress, jettonWalletCode);              }      receive() {      }      receive(msg: JettonTransferNotification) {          self.myJettonBalance += msg.amount;         self.forward(msg.sender, null, false, null);              }

Combot: Combot выдал(а) предупреждение # (2/3) Reason: 1 reports (reply to 304414)

рис: А сколько уходит на хранение тг номера (нфт) в год?

User: 0 (reply to 304418)

рис: с контракта же снимаются деньги за хранение (reply to 304419)

Denis: порядка 0.05 тон емнип

potato: Большая ли разница в стоимости хранения между uint(16) uint(64)

Denis: в 4 раза. всегда ваш капитан очевидность.  а если серьезно, то в абсолютных цифрах если у вас там не тысячи таких интов не принципиально. 0.000023 тон в год или около того

🐼 Sild: raw.fullAccountState balance:int64 extra_currencies:vector<extraCurrency> code:bytes data:bytes last_transaction_id:internal.transactionId block_id:ton.blockIdExt frozen_hash:bytes sync_utime:int53 = raw.FullAccountState;  а как 128-битный Coins засоввывается в тонлибовский int64? с божьей помощью?

Denis: тотал суплай тона меньше 64 бит.

Denis: но есть юзер контролабл поля в block.tlb (например import_fee на экстернале) в которых теоретически может быть больше чем 64 бита

Alexander: Там все с божьей помощью, иначе бы блокчейн вообще не работал. Представьте вы поднимаете локально бч, и там саплай больше 64 бит, у вас все ломается и вы не понимаете почему )) Меня это тоже прикольнуло, в чем проблема, бит жалко)) (reply to 304427)

🐼 Sild: а, ну вроде не страшно. Все что с тлб - оно все же с coins работает. Проблемы на стыках начинаются, где в tlb coins - а по факту из протоколов что-то странное торчит, типа i64 (reply to 304429)

Alexander: Просто в TL в плюсовой монорепе нет типа больше 64 бит числового насколько я помню (reply to 304431)

Alexander: Поэтому вот так наверное

🐼 Sild: децималы есть...

Alexander: В TL? (reply to 304434)

Denis: 128-битные инты нормально работают кажется только в расте. ну может еще в каких-нить современных модных языках типа зига (reply to 304432)

Alexander: Там в ноде все равно ref_int этот потом везде, не смотря на то что в TL 64 битные инты. Тут явно не в скорости дело, а просто лень было кому то) (reply to 304437)

🐼 Sild: я не очень понимаю что из себя tl представляет, его описание выглядит будто tlb кому-то резко стало слишком сложно... (reply to 304436)

Denis: наоборот. TL-b это когда кому-то стало не хватать TL :)

Alexander: tlb для описания структур ячеек, а tl просто для байтов (как такой протобаф без стеройдов который питался только энергией солнца) (reply to 304439)

Denis: не для байтов а для 32-битных интов :) (reply to 304441)

🐼 Sild: ну так казалось бы одна фигня, байты они и в ячейках байты) (reply to 304441)

🐼 Sild: (не подумайте что я за протобафы тут 😄 )

Alexander: ну ячейки немного другое, это такая некая абстракция над этими байтами и TL-B он на вот этом уровне выше (reply to 304443)

Denis: ячейка конечно абстракция над битами а не байтами

🐼 Sild: liteServer.getDispatchQueueInfo mode:# id:tonNode.blockIdExt after_addr:mode.1?int256 max_accounts:int want_proof:mode.0?true = liteServer.DispatchQueueInfo;   о int256 есть у них (reply to 304436)

🐼 Sild: int256 8*[ int ] = Int256; справедливо

Alexander: кринж на самом деле, я так понимаю он все равно built-in внутри, это описание ничего не значит (reply to 304448)

Alexander: там int128 по аналогии не объявить

🐼 Sild: int128 4*[ int ] = Int128; строкой выше объявлен 😄

Denis: вопрос можно ли объявить int1024. впрочем это свойство парсера tl которых предостаточно (reply to 304451)

Alexander: тогда для меня вообще загадка почему там те числа в 64 битах) (reply to 304452)

🐼 Sild: видимо потому что влезает...с миру по нитке на пивасик админу накопится

— 2025-05-09 —

Georg Leon: Интересный поиск разработчика с отбором по телеграм премиуму, а если пользователь является адекватной частью  пользователей телеграм и не видят смысла в подписке?) (reply to 304465)

Georg Leon: Увы очень скоро моё и ваше сообщение удалят , тут в плане этого строгие правила) напишите пожалуйста (reply to 304467)

ﾠ: Могу написать вам смарт-контракты, пишите в лс (reply to 304465)

#: здравсвтуйте, подскажите как правильно распарсить forwardPayload при трансфере жетона и получить оттуда оп код      receive(msg: JettonTransferNotification) {          if (!msg.forwardPayload.isEmpty()) {             let opcode = msg.forwardPayload.loadUint(32);               if (opcode == 0x54d5c342) {                 self.requireNotStopped();                 let seed: Int = getSeed();                  setSeed(seed);                                let prize: Int = random(self.minPrize, self.maxPrize);                   send(SendParameters{                     to: self.myJettonWallet,                     value: JettonTransferGas,                     body: JettonTransfer {                         queryId: 6,                         amount: prize,                         destination: sender(),                         responseDestination: myAddress(),                         customPayload: null,                         forwardTonAmount: ton("0.015"),                         forwardPayload: rawSlice("F")                     }.toCell()                 });             }         } else {             self.myJettonBalance += msg.amount;             self.forward(msg.sender, null, false, null);         }        }

RootTon: BeginParse и все по аналогии с упаковыванием (reply to 304485)

Sss.: Всем привет! Документация ton советует отслеживать входящие переводы токенов через Notification, почему? Можно же смотреть транзакции на Internal Transfer и тогда мы точно ничего не потеряем, ведь уведомление это опциональная транзакция, хотя и широко используется

Complex: Потому что Internal Transfer не является частью стандарта. Это применимо для некоторых известных жетонов, но не в общем случае. (reply to 304490)

Sss.: А как еще можно получить токены, кроме как через Internal Transfer (reply to 304491)

/B4ckSl4sh\: Теоретически можно сделать жетон как в эфире - через одну большую мапу в жетон мастере - это вполне будет соответствовать стандарту кажется (не помню, есть ли там явное указание сколько должно поддерживаться холдеров) (reply to 304492)

Complex: Мастер может прислать сообщение увеличивающее баланс получателя без уменьшение баланса какого-либо отправителя (минт токенов). (reply to 304492)

/B4ckSl4sh\: обычно в этих случаях интернал трансфер шлют всё таки, но дейтсвительно никто не запрещает сделать по-другому (reply to 304494)

&rey: Изобретательность разрабов не знает границ. Если в стандарте не написано "количество может увеличиваться только при входящем сообщении internal transfer", то этого ожидать не надо. (reply to 304492)

&rey: Вообще, у жетона баланс может и со временем увеличиваться.

Vlad: Верно ли, что для того, чтобы можно было кешаутнуть стейк из номинатор пула необходимо, чтобы на адресе соответствующего ему валидатора было 10+ тонкоинов? Ну и если их нет, то я просто посылаю туда десятку и потом могу кешаутить? (Сорри если немного оффтоп)

Toffee: Привет, коллеги, у меня смарт выдает ошибка  if (op == op::withdraw_proxy_fee()) {       throw_unless(401, equal_slices(sender_address, owner_address));       if (my_balance > min_tons_for_storage()) {         send_msg(owner_address, my_balance - min_tons_for_storage(), 0, 0, null(), 1);       }       return (); }? Я бы хотел спросить, но я не вижу здесь ошибку

X1ag: Что за ошибка? (reply to 304522)

Toffee: https://testnet.tonviewer.com/transaction/f7a0f84fd2fa1d28b64cf131a4e34340fd7d0ef873a2dbb37d36dc1545de96c8

RootTon: 37 статус код — мало тонов (reply to 304522)

Vlad: ИИ говорит "Deposit to Pool Contract: Send TON to the pool's smart contract address (not the validator’s or nominator’s personal address) with a specific comment top_up in the transaction. This triggers the pool’s deposit function.", но в коде контракта для номинатор пула никакого "top_up" я не вижу :( (reply to 304520)

Vlad: пул который не хочет отдавать стейк https://tonscan.org/pool/Ef8wqS4UJfAKLNtvNUpOskq-_2kD94ShUWvgwfV48mfBaw0B#events

Константин: Спасибо огромное (reply to 180082)

&rey: Я бы попробовал через sandbox с RemoteBlockchainStorage проверить. (Это on topic, кстати.) (reply to 304520)

Evan: Есть предложение поучаствовать в проекте. Разрабы, кто-нибудь свободен ?)

Denis: Предположу что дело в этом. В пуле денег меньше чем он должен тому кто запросил вывод (reply to 304528)

Denis: А в пуле для вывода должно остаться ещё 10 тон. Тоесть закиньте ещё 14 тон на адрес Uf8wqS4UJfAKLNtvNUpOskq-_2kD94ShUWvgwfV48mfBa1DE (это ваш пул только флаг другой, чтоб не сбаунсило). И потом сделайте вывод

Denis: Благодарность слать на subbotin.ton

Vlad: Спасибо, я так понял из контракта, что можно послать с опп кодом 1. Это оно и есть? (reply to 304553)

Vlad: Можно мне еще пожалуйста для этого товарища флаг вплести Ef_pD_JqXjRuYNE4-xJy-T0Wwace7ErvAfSPq2_GW9Q2QhXi ? Или лучше как это сделать?

&rey: Ну вот https://ton.org/address умеет, например. (reply to 304558)

Vlad: Спасибо! (reply to 304559)

— 2025-05-10 —

Windy: r

Alexey: Привет! Подскажите плз, а BALANCE возвращает текущий баланс с учетом затрат на compute или без учета? Я знаю что затраты на action не учитываются, но учитываются ли уже проведенные вычисления?

Rus: Привет! Ищу Telegram Web App интегратора или фуллстек-разработчика, который умеет подключать фронт (из no-code/low-code решений) к Telegram Web App SDK, Ton Connect и смарт-контрактам TON. Нужно собрать MVP, максимально используя AI-инструменты для ускорения разработки. Важен опыт Web3 интеграций, понимание, какие функции лучше отдать смарт-контрактам, а какие держать на фронте или простом бэке. Пишите в личку с кейсами

&rey: Без учёта. (reply to 304594)

Combot: Total messages: 304600

Eugene: всем привет! подскажите пожалуйста, публикую мини аппу в ton app стор, получил реджект, не нашел где глянуть причину или как связаться с модераторами, что узнать причину, возможно кто-то владеет инфой, как с таким поступать?

potato: Чтобы за раз отправить 2 сообщения я могу просто написать так?   send_raw_message(msg1, 1);   send_raw_message(msg2, 1);

Denis: Да пошлите невалидное сообщение без баунс флага. Например текст НЕ начинающийчя на d или w. Ну судя по коду опкод 1 тоже прокатит (reply to 304556)

🦜: подскажите чат по апи бота телеграм плз

Nick: Возможно, этот вам подойдёт.  @ twa_dev (reply to 304609)

Андрей: Добрый день, помогите с проблемкой. Мне необходимо сформировать сообщение для уже существующей в Гетгемс коллекции сообщение с сервера на NodeJs. Вроде смотрю на FunC код в коллекции парсинга IntMsg, так же пакую вроде но выдаёт Exit code: 9. Моя сборка body получилась такая: function createMintBody(params: mintParams): Cell {     const body = beginCell();     // op     body.storeUint(1, 32);     // query_id     body.storeUint(params.queryId || 0, 64);          // NFT Item Content     const nftItemContent = beginCell();          // owner_address     nftItemContent.storeAddress(params.itemOwnerAddress);     // next_item_index     nftItemContent.storeUint(params.itemIndex, 64);     // content     const uriContent = beginCell();     uriContent.storeBuffer(Buffer.from(params.commonContentUrl));     nftItemContent.storeRef(uriContent.endCell());     // nft_item_code     nftItemContent.storeRef(beginCell().endCell());     // royalty_params     nftItemContent.storeRef(beginCell().endCell());     body.storeRef(nftItemContent.endCell());     return body.endCell(); }

Andy: Всем привет. Хочу получить с помощью rest API информацию о мем коинах на балансе кошелька. Как это сделать? Я так понимаю, на прямую они не привязаны к нему, а надо искать какой внутренний айди для этого кошелька?

&rey: tonapi рекомендую. (reply to 304623)

Andy: Да я туда и смотрю. Есть кошелек, но напрямую почему-то информации о мемкоинах на нем не вижу

Denis: https://tonapi.io/v2/accounts/saint.ton/jettons (reply to 304625)

:3: парни у меня вопрос я сделал что бы мой бот создавал чек в тестнете он переходит в крипто бот тест нет а дальше чека нету. Так и должно быть? или все же чек должен создаться

Andy: спасибо! (reply to 304626)

Oleg: Что такое "чек", что такое "ваш бот", что такое "крипто бот" и где запятые? (reply to 304627)

&rey: Ну, raw проще формировать в коде, base64 компактнее для QR-кода (+ содержит чексумму + сверять на глаз легче), битовая запись адреса — для контрактов. Про последние два не понял. (reply to 304630)

Andy: В dton когда получаешь адрес в raw виде отдельно показывает его в downcase

Andrey: Есть *_address__friendly который дает баунсбл или не баунсебл по стандарту (reply to 304633)

Mihail: Привет! Есть дизайнеры стикеров?

Toffee: Привет, коллеги я делаю транзакцию, сама транзакция пишет что ошибки нету но сама фукции ничего не происходит throw_unless(401, equal_slices(sender_address, owner_address)); int withdraw_amount = my_balance - min_tons_for_storage();       throw_unless(402, withdraw_amount > 0);       send_msg(owner_address, withdraw_amount, 0, query_id, null(), 3);       return ();

Toffee: Кто может подсказать в чем ошибка?

Toffee: Можно пожалуйста поподробнее (reply to 304639)

Vasilii: tvm_accept() — даёт контракту право тратить баланс на внутренние операции (например, send_msg)  без него операция send_msg будет проигнорирована (reply to 304640)

Toffee: Спасибо, бегу тестировать

Toffee: ⏳ :96:7: error: undefined function `tvm_accept`, defining a global function of unknown type         tvm_accept();         ^ Error: FunC compilation error: cannot generate code for function `recv_internal`: nft/nft-copy.fc:96:19: error: variable does not have fixed width, cannot manipulate it         tvm_accept();

Vasilii: тогда не знаю) (reply to 304644)

Vasilii: по другому называется может

SweetJesus: ты выносил в отдельную функцию этот кусок? (reply to 304637)

Toffee: Нет, это функцию вызывается при op == op::withdraw

SweetJesus: и как оно у тебя сбилдилось вообще (reply to 304637)

X1ag: Int на int поменяй(с маленькой буквы) (reply to 304637)

Toffee: Это отпечатка, я случайно стер когда сюда текст писал

X1ag: транзакция в тестнете есть? Если да, то кинь сюда (reply to 304637)

Toffee: https://testnet.tonscan.org/tx/c4daca91f49c9e97729a9d53bd30b726d1a804f2b90eb38b6fd8614761861525#details

Toffee: До этого сработывало функции, в один день прекрасный день перестал работать

SweetJesus: скинь более полный кусок кода и как send_msg выглядит (reply to 304637)

Toffee: () send_msg(slice to_address, int amount, int op, int query_id, builder payload, int send_mode) impure inline {   var msg = begin_cell()     .store_uint(0x10, 6) ;; nobounce - int_msg_info$0 ihr_disabled:Bool bounce:Bool bounced:Bool src:MsgAddress -> 010000     .store_slice(to_address)     .store_coins(amount)     .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1 + 1)     .store_uint(op, 32)     .store_uint(query_id, 64);    if (~ builder_null?(payload)) {     msg = msg.store_builder(payload);   }    send_raw_message(msg.end_cell(), send_mode); }

X1ag: not enough grams to transfer with the message : remaining balance is 72038219ng, need 72541819 (including forwarding fees) (reply to 304658)

Toffee: Это где ты увидел?

X1ag: в ретрейсере посмотрел. Не хватает тон на отправку

Toffee: Я вроде делал трансфер с 0.01 или это должно быть на балансе контракта, хотя наврядли, у меня тот же контракт с еще более функционал работает нормально

Toffee: https://testnet.tonscan.org/tx/39089466e63a83f430b755bb9683cfec95265b8a9807d86f32da4ea5558168c3

Toffee: 0.01 тоже мало

Toffee: Это простая функция забрать баланс из одного контракта

Toffee: Я думаю может вместо owner_address поставить sender_address, проверка же прошла, значит sender_address точно

Toffee: https://testnet.tonscan.org/tx/ef1603525004e610a316a6df8485ff04e9e35fea4e1bff4708f55d58c2ad2dd0 0.05, я думаю даже 1 тон отправлю, все равно нето

X1ag: ты оплачиваешь комиссию поверх суммы которую отправляешь

&rey: Звучит, будто режим 128 с этим отлично справится. (reply to 304665)

Toffee: Я это понял,  я вот скинул тебе трансу где 0.05 отправил, я не понимаю что тут не понятно

Toffee: Это вроде отправка всего баланса, но мне нужен минимальный резевр сохранить (reply to 304669)

&rey: Во-первых, никак не пойму, зачем. 0.1 тон перед заморозкой в любом случае есть. Во-вторых, это же тоже решается, в этот раз с помощью raw_reserve. (reply to 304671)

Toffee: Мне не нравится, твой вариант, но я буду иметь его виду, если ничего не получится, есть другие варианты решения бизнес логики у меня, но мне нравится  чтобыл с withdraw методом

Toffee: Кстати, может быть я оставляю слишком мало?  int min_tons_for_storage() asm "1555600 PUSHINT"; ;; 0.0015556 TON

Toffee: @pcrafter, @imx1ag, @dimebag_darrell?

Toffee: Работает, я внатуре мало оставлял

Toffee: Спасибо парни, вы лучшие

Toffee: Я учту в этот раз

Toffee: Но я уже решил без 128 и raw_reserve

rends_east: Зря (reply to 304681)

Toffee: Почему? Хотя мне просто лень, хорошо если я это использует, то баланс останется на контракте для сохраненния

Toffee: Не будет, что контракт сжигается или станет не активный и перестанет данные хранить?

rends_east: Если вы резервируете, то там всегда окажется оставшийся баланс (reply to 304684)

Toffee: raw_reverse нужно получается указать, можно пример, как в кода это используете, я сейчас тоже поищу как надо

rends_east: Это не 128, это мод 3 И резерв забыли (reply to 304687)

Toffee: var msg = begin_cell()     .store_uint(0x10, 6) ;; nobounce - int_msg_info$0 ihr_disabled:Bool bounce:Bool bounced:Bool src:MsgAddress -> 010000     .store_slice(to_address)     .store_coins(amount)     .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1 + 1)     .store_uint(op, 32)     .store_uint(query_id, 64);    send_raw_message(msg.end_cell(), 128); а куда резевр указывать, в кокой порядок?

Toffee: raw_reserve(min_tons_for_storage, 0);

X1ag: Он не в сообщении указывается

X1ag: До отправки сообщения объяви где нибудь (reply to 304691)

Toffee: Спасибо

&rey: amount нулевой в данном случае. (reply to 304690)

X1ag: А разве есть разница? (reply to 304695)

rends_east: Покажите ему ещё дешёвый резерв)

булочки з паштетом/люфтваффельний свасторт: а где есть документация к этому ендпоинту? (reply to 236483)

— 2025-05-11 —

Сергей: Добрый день всем.  Подскажите, сталкивался ли кто с такой проблемой в TON Wallet?  После восстановления пишет ошибку:  Library Error LITE_SERVER_UNKNOWN: cannot compute block with specified transaction: cannot find block (0,377edbe1f554f03f) It=26127146000003: It not in db

Roman: Здравствуйте, а есть инструкция как пройти верификацию токена в кошельке?

Daniil: Всем привет как через библиотеку tonconnect-ui добавлять к сообщениям комментарии текстовые? Не могу найти в документации

&rey: Эксплореры и кошельки определяют, что текстовый комментарий — это ячейка, в которой первые 32 бита нулевые, а потом записаны UTF-8 байты текста (когда места не хватает, переход идёт по ссылке в следующую ячейку). (reply to 304744)

Nazar: Всем привет столкнулся с проблемой с либой pytonapi  from pytonapi import AsyncTonapi from pytonapi.schema.events import TransactionEventData  # Enter your API key API_KEY = ""  # noqa  # List of TON blockchain accounts to monitor ACCOUNTS = [     "EQBDanbCeUqI4_v-xrnAN0_I2wRvEIaLg1Qg2ZN5c6Zl1KOh",  # noqa     "UQCtiv7PrMJImWiF2L5oJCgPnzp-VML2CAt5cbn1VsKAxOVB",  # noqa ]   async def handler(event: TransactionEventData, tonapi: AsyncTonapi) -> None:     """     Handle SSEvent for transactions.      :param event: The SSEvent object containing transaction details.     :param tonapi: An instance of AsyncTonapi for interacting with TON API.     """     trace = await tonapi.traces.get_trace(event.tx_hash)      # If the transaction is successful, print the trace     if trace.transaction.success:         print(trace.model_dump())   async def main() -> None:     tonapi = AsyncTonapi(api_key=API_KEY)      # Subscribe to transaction events for the specified accounts     await tonapi.sse.subscribe_to_transactions(         handler, accounts=ACCOUNTS, args=(tonapi,)     )   if __name__ == "__main__":     import asyncio      asyncio.run(main())   использовал либу для того что бы проверять поступили ли деньги в кошелек т.е парсил содержимое trace и столкнулся с проблемой что 2 из 10 транзакций получают ошибку   pytonapi.exceptions.TONAPINotFoundError: entity not found  File "/app/.venv/lib/python3.11/site-packages/pytonapi/async_tonapi/methods/sse.py", line 41, in subscribe_to_transactions   await self._tonapi.sse.subscribe_to_transactions(handler, accounts=self.accounts, args=(self._tonapi,))  и при этом все транзации успешные  у меня 2 вопроса  1) Как я могу побороть эту ошибку и получить транзакцию 2) Возможно есть более надежный метод подтверждения платежа, если кто знает посоветуйте плз  Заранее благодарю

ᅠ: кошельки нужно инициализировать выводом тона (reply to 304746)

Nazar: спасибо обязательно попробую (reply to 304749)

ᅠ: еще как вариант .get_transactions сверяя комментарий (reply to 304750)

Maria: Сори, это было по работе

Vladimir: https://docs.ton.org/v3/guidelines/dapps/asset-processing/jettons#how-to-send-jetton-transfers-with-comments-and-notifications  https://docs.ton.org/v3/guidelines/dapps/asset-processing/jettons#send-jettons-with-comment (reply to 304756)

&rey: Комментарий же занимает место любого другого форварда или тела сообщения.

&rey: Я говорю, что вам надо выбирать между "посылаем текстовый комментарий в жетон-трансфере" и "посылаем некую таблицу в жетон-трансфере". (reply to 304761)

Denis: Классику читали? https://gist.github.com/mr-tron/a4b3e8eff3a982e3426f6397eb9a2450 (reply to 304766)

🐼 Sild: а был какой-то хитрый план в неуказании тега для BlockExtra? https://github.com/Sild/ton/blob/6f745c04daf8861bb1791cffce6edb1beec62204/crypto/block/block.tlb#L467

Алексей: это хитрый план, чтобы использовать все фишки тлб в одном файле! (reply to 304776)

🐼 Sild: аа, тег не указан - т.е. его предлагается посчитать самостоятельно по дескрипшену? (reply to 304777)

Denis: так его просто нету

🐼 Sild: было бы хорошо если так, но он там есть

Denis: а. действительно. 4a33f6fd

🐼 Sild: 0x4a33f6fd

Алексей: ну по идее так, но я от балды сказал (reply to 304778)

🐼 Sild: я почему интересуюсь планом: не хочется делать мр на правку тлб, чтобы потом автосгенеренный block.cpp разломало)

Denis: сделай реквест в апстрим :)

Alexey: Добрый вечер) Я правильно понимаю, что при деплое контракта через ide в тестнет, он вполне себе может просто висеть в тестнете как заглушка до тех пор, пока не задеплоишь нормально через tact cli или сразу в мейннет?

Oleg: Что? Контракт либо задеплоен в сеть, либо нет. Неважно, каким способом (reply to 304790)

Denis: обожаю оффчейн мету. топ доменов по количеству не скаченой меты.

Игорь: как хорошо, что я с соланой работаю, а не с тоном, иногда мне кажется, что тон придемали просто чтобы у девов горело

Tim: О новый топ! Надо занять в нем призовое! (reply to 304792)

Alexander: а как по мне наоборот, я смотрел как устроены, пишутся контракты и т д в солане - ощущение что сделано так чтобы у девов горело) так что это относительно все и везде свои приколы (reply to 304796)

Alexander: До завершения не получить, не ясно где транзакция в блоке будет (reply to 304799)

Tim: ну не всей, а только этой, её дети уже не повлияют на хеш (reply to 304799)

Игорь: после солидити у меня с раста горело знатно, но через месяц я понял, что от соланы больше кайфую чем от EVM   но вот когда приходится столкнуться с тоном, то я сразу ставлю x2 цену за проекты просто чтобы компенсировать моральный ущерб (reply to 304798)

— 2025-05-12 —

Oleg: Всем привет, кто-нибудь знает почему не работает запрос getTransactions у toncenter в testnet? И когда это починят? https://testnet.toncenter.com/api/v2/#/accounts/get_transactions_getTransactions_get Не работает, воде бы, только этот запрос, возвращает "LITE_SERVER_UNKNOWN: cannot compute block with specified transaction: cannot find block (0,ef8859417fb368ad) lt=30286858000001: lt not in db"

#: () msg::burn_nft(slice nft_address, int query_id) impure inline {     cell body = begin_cell()         .store_uint(op::NFT_TRANSFER, 32)      ;; Operation code for NFT transfer         .store_uint(query_id, 64)              ;; Unique query identifier         .store_slice(BURN_ADDRESS)             ;; new_owner_address         .store_slice(BURN_ADDRESS)             ;; response_address         .store_int(0, 2)                       ;; Empty custom_payload (Maybe ^Cell)         .store_coins(22000000)                 ;; Forward amount to new owner         .store_int(0, 1)                       ;; No forward_payload (Either Cell ^Cell)     .end_cell();      builder nft_msg = begin_cell()         .store_uint(0x18, 6)                   ;; Message header         .store_slice(nft_address)              ;; Destination NFT address         .store_coins(50000000)                 ;; Amount of TON to send         .store_uint(1, 1 + 4 + 4 + 64 + 32 + 1 + 1) ;; Default message headers         .store_ref(body);                      ;; Reference to the body      send_raw_message(nft_msg.end_cell(), 1); }    здравствуйте, скажите пожалуйста почему происходит эта ошибка при сжигании нфт?  https://testnet.tonviewer.com/transaction/98e2ab51a0715517f88d46c7aced4fabd6fc5aed7e7b415a408faee43c642611

Tim: кастомный в трежури, сорсы в блупринте вроде (reply to 304849)

Tim: так я про трежури а не про в5 отвечал... (reply to 304851)

Tim: run с w5 так просто не заведется

Tim: @alejandbel там не планируется w5?

Александр: Ты имеешь ввиду в тестах? Или для подписи сообщений в скриптах? (reply to 304847)

Александр: Поддержка walletv5 для подписи сообщений есть https://github.com/ton-org/blueprint/blob/c160d395e7493b0da18c9e2e66628f60ef22c973/README.md#using-mnemonic-provider-for-deployments (сейчас только нельзя указать wallet id, в пятницу фича выйдет), То что ты используешь это кастом нетворк, нужен для указания провайдера для отправки сообщений (типа тонцентра, тонапи или кастомного) (reply to 304855)

Alexander: Коллеги, день добрый, подскажите вариант как максимально быстро спарсить все входящие транзы с кошелька, нужно получение TON и жетонов?  На данный момент прохожусь через https://tonapi.io/v2/accounts/{raw_address}/events и before_lt, но чем дальше тем медленнее, за 1кк спаршенных транзакций вообще что то медленно идет, в секунду по сотке. Может есть варианты быстрее? Потому как это на один раз

Alexander: Подскажешь какой то пример или где доку почитать именно по транзам ? (reply to 304863)

Investor: Привет всем. Написал бота на Aiogram и реализовал функционал тон-коннекта. Все работает, но столкнулся с проблемой: когда я захожу во второй аккаунт, то в боте уже сразу показывает подключенный кошелек который я подключал на первом аккаунте, как можно  это исправить?

andrey: ну ты видимо локально внутри сессии хранишь данные и никак их не фильтруешь в зависимости от юзера (reply to 304874)

andrey: подключи бд

Роман: может немного не по теме чата, простите. но может кто знает через какой API или как узнать является ли nft telegram number - restricted? Откуда маркетплейсы об этом знают, как минимум в атрибутах этого не пишет

Sol: Что такое restricted? (reply to 304887)

User: Никаких апи для этого нет, парсите фрагмент напрямую и проверяйте (reply to 304887)

Роман: понял, спасибо (reply to 304891)

булочки з паштетом/люфтваффельний свасторт: привет, кто-то юзает на проде лайтсервера тона от ton foundation?  стабильные или не очень?  ладно глянул аптайм, 81%

— 2025-05-13 —

🐼 Sild: а есть библиотечка которая деплоится системными контрактами  точнее 2 библиотечки  какова вероятностью что системные контракты перестанут ее паблишить или начнуть паблишить что-нибудь еще?

🔳 ivan: всем привет. а есть ли какието АПИ которые дают возможность получить транзакции по определенному жетону?   и второе, есть ли возможность запросить аккаунты с заданным codehash ?

гриба: А как сделать разделение платежа на tact? Отправляю так, в итоге часть, которая должна была отправиться на to пртсто застрявает

Anton: похоже на вот этот кейс: https://docs.tact-lang.org/book/send/#outbound-message-processing (reply to 304964)

гриба: Спасибо (reply to 304965)

гриба: К сожалению тут написана только причина проблемы, но не способы её решения

/B4ckSl4sh\: Почему? Там ниже написан резерв + SendRemainingBalance (reply to 304967)

гриба: резерв баланса делать? (reply to 304968)

гриба: просто у меня контракт может хранить тоны

/B4ckSl4sh\: Да. Можно сделать nativeReserve(0, ReserveAddOriginalBalance)  1. send(mode = SendDefaultMode/SendPayGasSeparately)  2. send(mode = SendRemaininBalance) (reply to 304969)

гриба: резерв получается делать в начале сообщения или можно даже перед отправкой? (reply to 304971)

гриба: А если я сделаю два сообщение с SendPayFwdFeesSeparately одно с фиксированной суммой, другое с суммой комиссии

гриба: И есть ли вариант если мне пришёл токен, чтобы я платил комиссию уже с контракта

гриба: или сумма с комиссией должна лежать в интернл сообщении

Daniil: Всем привет Я хочу в реальном времени отслеживать pending транзакции на stonfi и dedust Со стонфаем проблем нет: внутри events транзакции у них есть тип JettonTransfer, внутри которого лежит информация о жеттоне свапа а вот у дедаста внутри event'ов только ContractExec, внутри которых в начале свапа нет данных о жеттоне этого свапа и еще подскажите: у стонфая мы смотрит роутер и его транзакции, а что у дедаста? vault? pool? или у дедаста тоже есть роутер (я не нашел его в документации, как можно получить его адрес, а библиотеки вроде dedust для Python при генерации to, value, body дают как to ссылку на vault

/B4ckSl4sh\: со своего? Да, это же бувально SendPayGasSeparately  (который кстати был переименован в SendPayFwdFeesSeparately, что больше на правду похоже) (reply to 304975)

гриба: Т.е я отправляю два сообщения с этим модом (первое сообщение с меньшей суммой нанотонов), второе сообщение с 0 этим флагом и флагом SendRemainingValue? (reply to 304978)

/B4ckSl4sh\: RemainingValue и PayFwdFessSeparately странновато посылать одновременно (я кажется даже не пробовал).  В любом случае рекомендую создать простой контракт и поэкспериментировать с сендмодами - наверное только так их можно самому прочувствовать и понять (reply to 304979)

гриба: Хорошо, спасибо (reply to 304980)

$ danbesy. 🦣 //: всем привет, не знаю у кого спросить, но думаю сюда тоже пойдет, комьюнити тона как никак) у меня есть несколько вопросов, хочу получить ответ  1. как сделать автоматическое подключение кошелька юзера к фрагменту по сид фразе 2. как получать address, chain, walletStateInit, publicKey привязанного кошелька автоматически  3. как подписывать транзакции через сид фразу, тоже фулл автомат  (шедевро питончик)

$ danbesy. 🦣 //: вопрос уже задавался ранее, но ответ не было (reply to 247484)

Tim: вряд-ли на такое кто-то ответит, потому что ответ будет на пару листов а4 в лучшем случае. Начинайте изучать материал и задавайте вопросы по мере возникновения проблем (reply to 304983)

Mirka: Шедевро питонисты сидят тут: @pythonnton Поищи по чату инфу (reply to 304983)

$ danbesy. 🦣 //: всем спасибо за ответ)

гриба: так ему для покупки через фрагмент, чтобы эмулировать какой-нибудь кошелек и коннектить свой кошелек автоматизированно (reply to 304988)

гриба: а, не прочитал (reply to 305016)

Привязаность: по секрету скажу, что на фрагменте эти параметры коннекта кошелька не чекаются (reply to 305015)

гриба: там пруф чекается (reply to 305019)

Привязаность: и апиха дает просто транзу которую нужно подписать и отправить с чего угодно

гриба: так а при чём тут апи, если мы говорим про коннект через тонконнект (reply to 305021)

Привязаность: ему просто на фрагме покупки делать? (reply to 305022)

гриба: ну скорее всего он не осилил разбирать вебасм и решил пойти более простым путём, через какой-нибудь селениум открывать браузер и коннектить кош (reply to 305023)

Привязаность: гемор (reply to 305024)

Привязаность: там все знааааааачимо проще, тоже думал что надо будет вконект эмулировать

гриба: там легко вебасм разобрать?

Привязаность: Для любых транзакций на фрагменте нет проверок параметров walletconnect, можно просто из девтулзов спереть один legit запрос и все, дальше апишка возвращает транзу, которую нужно подписать и отправить с чего угодно (reply to 305029)

гриба: понятно (reply to 305031)

Привязаность: там даже linked address не чекается вродь

Влад: Всем привет. В программировании полный ноль. Но смог освоить фронтенд за пару дней и создать игру в mini app. Теперь мне нужно добавить сервер и базу данных. Для базы данных мне нужна идентификация через акк телеграмм. Как я могу тестировать работу базы данных ? С фронтом было все просто, на локалке запускаешь и смотришь. А тут какой выход?

Max: а точно вопрос для TON Dev Chat? (reply to 305049)

Andy: Всем привет. Напомните пожалуйста канал мини-апп разработки

Vladimir: @devs_cis (reply to 305051)

Влад: Да, просто низкого уровня 😁. После сервера и базы данных будет подключение ton connect .  Спросил бы сразу, дойти не могу до вопроса этого. (reply to 305050)

Влад: Спасибо. Задам вопрос по адресу (reply to 305052)

𝕻𝖗𝖔𝖘𝖊𝖙𝖘𝖐𝖎𝖞: немного не туда обратился (reply to 305049)

Dynasty: ТРЕБУЕТСЯ ФРОНТЕНД РАЗРАБОТЧИК Next. JS  Нужно внести обновления в проект — работа включает элементы вёрстки, подключение новых API-запросов и исправление багов, обязательно иметь опыт работы TonConnect SDK!  Стек: Next.js + TypeScript + Tailwind CSS

гриба: А jetton_wallet можно задеплоить самому? До получения любой jetton транзакции.

гриба: А есть примеры кода? И что гарантирует тогда безопасность, чтьо я не задеплою себе бесконечный баланс (reply to 305072)

$ danbesy. 🦣 //: ой, это ужас какой-то разбираться в этом, особенно после создания тг ботов (горе вайбкодер) может кто-нибудь объяснять более лёгким языком как это все сделать? а дальше я сам думаю (reply to 305024)

гриба: лазаю по коду контракта, гарантии найти вообще не могу (reply to 305074)

Tim: Деплой какой хочешь, только адрес будет не тот (reply to 305076)

гриба: А, действтиельно (reply to 305077)

гриба: Всё, осознал ошибку) Спасибо

гриба: а есть тогда пример кода, где я могу просчитать этот stateInit?

гриба: это оно, верно? Т.е мне данные нужно так сделать и в бок преобразовать и в бейз64?

Максим: а есть ли какое либо ожидание между созданием транзакции на перевод?

&rey: Лайтсервера не дадут больше одного сообщения к seqno-основанным кошелькам в блок. (reply to 305085)

гриба: А нету примера кода на жсе? (reply to 305086)

гриба: А то если так в tonconnect передаю, то не работает

&rey: А хеш-часть адреса сходится с хешем ячейки state_init? (reply to 305088)

гриба: у меня в целом так записать не может в dict (reply to 305089)

&rey: Вообще, типизированный способ .storeMaybeRef, а канонический state_init = beginCell().storeUint(6, 5).storeRef(code).storeRef(data).endCell() (reply to 305090)

гриба: а как мне тогда просчитать адресс будущего jetton wallet

&rey: Воркчейн (какой хотите, но ожидается 0), хеш-часть — state_init.hash().hex() (reply to 305093)

гриба: сейчас попробую

гриба: адресс считает правильно и тогда данные это будут эта ячейка в бок и в бейз64?

гриба: Отлично, спасибо

&rey: Да. Вэлью один нанотон, чтобы твм лишний раз не запускать. (reply to 305097)

Devialle: Кто работал с тон консоль ?

Vladimir: Лучше сразу задавать прямой вопрос. (reply to 305103)

Devialle: Какой метод там есть что бы достать  тело транзакции при Парсинге (reply to 305103)

🐼 Sild: Но при этом никто не мешает в одном сообщении до 255 переводов отправить (reply to 305085)

Sol: Напишите в личку пожалуйста (reply to 305071)

— 2025-05-14 —

worknbuyconsumendie: а насколько вообще актуальна проблема дрейна в тоне?  если актуальна - есть какие-то способы с этим бороться со стороны юзеров? а-ля расширения или чет еще

Terry: на самом деле это совсем не так некоторые продвинутые сливатели не показывают контракт вызова, а просто показывают получение TON поэтому пользователи чувствуют себя взволнованными. но после подтверждения транзакции общий баланс исчезает. поэтому перед подтверждением, пожалуйста, проверьте комиссию сети еще раз.

Илья: А как понять что эта коммиссия именно такая? (reply to 305125)

Andrey: А есть ссылочки на такие дрейнеры? Посмотреть вот эти транзы (reply to 305125)

worknbuyconsumendie: та я именно текст читал, а не код с реализацией, интересно стало, может можно чет сделать и в опенсурс вкинуть в виде расширения или чего-то такого, что могло бы помогать (reply to 305133)

Андрей: Вот только на скрине нету никакого получения тонов, а есть лишь получение токенов TON. (с точкой) И кошелек правильно отображает комиссию сети - что бы отправить тоны и получить токены не нужна большая комиссия сети (reply to 305125)

Sol: Первый необходимый навык разработчика - уметь пользоваться поисковиком. Тут не будет таких ссылок! (reply to 305133)

Nick: Хитрый Творожков. Хотел всех нас вокруг пальца обвести 😏 (reply to 305136)

/B4ckSl4sh\: Всем сообществом ждём дрейнеры by Tvorozhkov (reply to 305137)

Andrey: Мне не для себя, мне для друга (reply to 305138)

🐼 Sild: Мы на хакатоне начали делать плагин который детектит тон-коннект на сайте, и по белым спискам рисует красную плашку "уходи отсюда"  Потом еще хотели блеклисты с дексов подгружать и прям в браузере добавлять эфемерный рейтинг токена  Конечно после хакатона мы все это забросили https://github.com/Sild/tondefender (reply to 305134)

Manas: Привет! Кто может помочь с верификацией токена на TON API?

Max: Тон ещё выдает гранты за проекты? Последний блог был год назад.

Nico: вот здесь пропоузалы/гранты можно трекать  https://questbook.app/dashboard/?grantId=65c7836df27e2e1702d2d279&chainId=10&role=builder&proposalId=6645f926f914ff1b54b0f9aa (reply to 305163)

Max: Так они буквально ни один грант не выдали от октября (reply to 305170)

Nico: есть такое)  но при этом шлют отказы. значит площадка не deprecated (reply to 305173)

Max: Шансов получить грант мне кажеться 0, какая вероятность что там все проекты были плохими (reply to 305174)

web-assist 🧀: Только только закончился TMA build contest, вот такое приложение топ-1 заняло :D (reply to 305163)

Max: А где смотреть за этими эвентами (reply to 305177)

web-assist 🧀: https://t.me/tonsocietycishub Как вариант (reply to 305178)

Nick: Сейчас и этот чат разорвет.) (reply to 305177)

odnokasanie: У тебя написано opensource твое приложение, которое на мой взгляд должно быть первым. Оно уже выложено? (reply to 305180)

Nick: Спасибо за высокую оценку.  Хочу выложить, когда приложение достигнет той стадии, когда любой сможет форнуть и развернуть с нуля. Избавимся от басфактора. (reply to 305181)

#: здравствуйте, можете помочь пожалуйста. надо сделать так если на контракт просто отправили тоны, то он вернул отправителю небольшую часть   fun onInternalMessage(myBalance: int, msgValue: int, msgFull: cell, msgBody: slice) {     var cs = msgFull.beginParse();     val flags = cs.loadMessageFlags();     if (isMessageBounced(flags)) {         return;     }      var senderAddress: slice = cs.loadAddress();      if (msgBody.isEnd()) {         if (msgValue >= minToBuy) {             transferTonComment(senderAddress, toNano(1) / 1000, "test");         }     }      loadData();      val op = msgBody.loadMessageOp();      throw 0xfffff; }    https://testnet.tonviewer.com/transaction/885ae4671ecfe09764f471f93945eb10ba5147688e253efe2e7a96501597f673

#: как правильно получить адрес сендера если пустое сообщение отправлено?  fun onInternalMessage(myBalance: int, msgValue: int, msgFull: cell, msgBody: slice) {     if (msgBody.isEnd()) {         var cs: slice = msgFull.beginParse();         var senderAddress: slice = cs.loadAddress();          transferTonComment(senderAddress, ton("0.001"), "test");         return;     }      var cs: slice = msgFull.beginParse();     val flags = cs.loadMessageFlags();     if (isMessageBounced(flags)) {          return;     }      loadData();

SweetJesus: чел, почитай доку по такту, она вполне норм написана

#: не пишу на такт

SweetJesus: бл, это толк чтоли

.: Привет всем, ищу разработчика мевбота для торговли с автоснайпингом и низкой задержкой, наверняка такие ребята тут есть Прошу напишите в лс, обсудим цену и все моменты.

Petr: Тебе надо пропустить данные до адреса и только затем его загрузить См. https://docs.ton.org/v3/documentation/data-formats/tlb/msg-tlb#commonmsginfo для Tl-B (reply to 305190)

Petr: var cs = in_msg_cell.begin_parse(); cs~skip_bits(2); var msg_bounceable = cs~load_int(1); var msg_bounced = cs~load_int(1); slice msg_sender_addr = cs~load_msg_addr();

#: ну я там попытался поменять местами и вроде получилось. (reply to 305197)

— 2025-05-15 —

Sol: Буду рад получить крутую идею или технические задания для реализации. портфолио скину в лс.  Разработка концепции бонусом!

Petr Pavel: Их есть у меня (reply to 305207)

Sol: Пишите в личку. Чего ожидаете? Пока другой проект займет ваше место? (reply to 305208)

Petr Pavel: Я думал вам идеи нужны А оказывается заказы 🤷🏻‍♂️😇 (reply to 305209)

Sol: Идеи  проекта которые помогут росту экосистемы тоже интересны . (reply to 305210)

Petr Pavel: Есть (reply to 305212)

Oleg: Это прямое нарушение законодательства (оплата криптой товаров) (reply to 305214)

$ danbesy. 🦣 //: видел кошель через который оплачивают криптой в рф, ложишь юсдт на кошелек, юсдт переводятся в рубли и оплачивают товар) (reply to 305215)

odnokasanie: Оплата криптой - это когда продавец получает крипту себе от покупателя.  Если оплата происходит в рублях, т е продавец получает рубли, а крипта используется чтобы компенсировать потраченные рубли, то это обменная операция, которая не нарушает законодательство.  Так это работает. (reply to 305217)

odnokasanie: Уже есть решения от одногрупника @kideroboy - участвовал в контесте миниапов с ним и арктик кошелек (reply to 305228)

Oleg: И такой ждешь на кассе подтверждения полтора часа, а сзади очередь старушек) (reply to 305227)

odnokasanie: Это нивелируется как у арктика своим кошельком, а так в ваших децентрализованных финансах нужно подтверждать и ждать завершения транзакции каждую оплату (reply to 305230)

Андрей: Если делать такой сервис по уму, то кассы должны поддерживать крипту и работать через платежные каналы (не нужно ждать подтверждения в блокчейне) Но мы не в том мире живём, и решение этих проблем за границами тематики данного чата (reply to 305230)

odnokasanie: Не, набегут оптимистичные мошенники (reply to 305233)

odnokasanie: Это нарушит законы некоторых стран (reply to 305234)

Nick: У меня получаюсь достигать скорости 15 секунд. (reply to 305230)

Nick: В тон завезут нечто что-то типо лайтнинга, так что можно будет еще сильнее ускорить, до пары секунд. (reply to 305234)

odnokasanie: Вроде было что-то типа предавторизации или разрешение на списывание без подтверждения в Тоне, ошибаюсь? (reply to 305240)

Nick: Но ещё есть над чем работать. Вчера пытался оплачитить товары во вкуссвилле, но что-то пошло не так.  Вероятно то, что на некоторых QR отсутсвует сумма, придётся парсить с камеры. (reply to 305240)

Nick: Да, пока только в теснете. (reply to 305243)

odnokasanie: Есть сбп qr без суммы, надо ее вводить. И парсить надо же ссылку которая в qr-коде (reply to 305244)

Nick: Распарсить qr со всеми нужными данными не проблема, но и там есть свои подводные камни. (reply to 305248)

odnokasanie: Типа? (reply to 305249)

Nick: Пока не хочу вдаваться в подробности. Могу сказать, что грамотно использовать сбп для оплаты криптой — та еще техническая задачка. Не удивительно, что почти никто за нее не берется. (reply to 305252)

Denis: Холдерс сделали ровно это. Но с ньюансом что пятерочке надо открыть отделение в стране где работает толи виза толи мастеркард (reply to 305227)

Denis: А можно подробностей? Что там в тестнете? (reply to 305245)

Denis: holders.io  Но оно пока не в проде. В плане все работает но клиентов не пускают. (reply to 305258)

odnokasanie: Жаль, что ты не раскрываешь подробностей как к СБП подключился, если у тебя договорные отношения с НСПК или банком, т е не костыль какой-нить типа через юмани или другую платежку используя приватный или p2p API, то я бы инвестировал в развитие этого приложения. (reply to 305256)

odnokasanie: Арктик кошелек работает в проде, сам пробовал оплачивать в магазине им (reply to 305258)

Nick: Не нахожу новостей. Похоже, приснилось. (reply to 305259)

Nick: Договариваться с нспкт — это сильно, но не достаточно, чтобы сделать универсальное решение для всего мира. Я бы не хотел создавать зависимость от каких-либо органов. (reply to 305262)

odnokasanie: НСПК - организатор СБП. Не договариваться (не иметь отношений с ними, пусть апосредованно через банки, платёжки и т.п. и не соответствовать их правилам) с ними по оплате их же кодов - это то же самое, что делать миниап с использованием блокчейна солана с желанием не зависить от органа, в частности телеграм.  Да, СБП - это Россия, несколько дружественных стран и врядли станет всемирным. (reply to 305267)

Nick: Когда создавался биткойн, Сатоши не спрашивал разрешения у гитхаба, можно ли биткойну существовать.  У меня есть идеи, как реализовать универсальное решение. Какая лучше приживется, та пойдет в опенсорс. (reply to 305268)

odnokasanie: Непонятный пример, Сатоши вроде не загружал исходники на гитхаб. Хотя гитхаб как раз для исходников.  Ладно, я предложение сделал, в любом случае желаю всяческих успехов хорошему начинанию! (reply to 305269)

X1ag: hi, поделитесь пожалуйста репозиторием где можно посмотреть реализацию индексатора

X1ag: грубо говоря, вопрос в том как реализовать свой индексатор (reply to 305272)

🐼 Sild: репозитория нет, но как...берешь архивную ноду, выкачиваешь все блоки и стейты, индексируешь

🐼 Sild: то что в ноде не хранится - эмулируешь

X1ag: а если мне нужны только актуальные данные (которые могут и будут обновляться) то можно же обойтись без архивной ноды?

🐼 Sild: ну такое, на тоненького. Смотря что индексируешь. Есть вещи которые без истории плохо просасываются, но скорее всего это такие мелочи которыми никто особо не заморачивается (например, на какой высоте были недоступны определенные библиотеки)

🐼 Sild: если тебе, например, по нормализованному хешу транзакцию искать - с этим проблем не будет

X1ag: Индексировать надо транзакции выставления нтф на продажу(и искать флор соответственно) независимо от маркетплейса (будь то фрагмент или гг) (reply to 305279)

🐼 Sild: я не очень знаю что там за специфика  nft, но звучит как что-то для чего история не особо нужна

X1ag: а я не особо понимаю чем обычный хеш отличается от нормализированного, можете просветить пожалуйста?) (reply to 305280)

🐼 Sild: вот тут (reply to 300180)

X1ag: благодарю) (reply to 305285)

X1ag: https://docs.tonconsole.com/tonapi/cookbook#transaction-tracking  А это нормально что тут в примере на го, показывают только код нормализации хеша(из https://docs.tonconsole.com/academy/transaction-tracking#how-external-in-normalization-works), когда на js показан весь трекинг?

Azamat: Друзья кто знает для Jettons планируются гибкие настройки, такие как например комиссия за переводы, как это сделали в Solana SPL?

Azamat: Thank you😁👍 (reply to 305297)

🏆: Как мне подготовить транзакцию отправки выбранных нфт на определенный адрес? Сами нфт известны и адрес куда отправлять. Какой пакет использовать и как это сделать, буду благодарен за пример.  Условно, пользователь выбрал какие отправлять, нажал кнопку и предлагает подписать транзакцию, через тонконнект например.

Илья: Какой самый простой вариант того, чтобы юзер оплатил в ТМА свои usdt?   Как понял, прямое пополнение usdt запрещено в тг ТМА, но а как тогда? Открыть какой-то внешний сайтик не очень хочется

Рома: Crypto bot (reply to 305306)

&rey: Тоновские usdt переводятся по обычному https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md. (reply to 305306)

Илья: А если с условного байбита?   Интересно кст почему в таких @wallet и криптоботах вполне себе пополнения с других блокчейнов) (reply to 305307)

&rey: А это не к разработке на тоне вопрос, а к юристу команды и к правилам телеграма. (reply to 305309)

Robert: Здравствуйте, помогите пожалуйста разобраться.   () admin_withdraw_jettons(slice admin, int amount) impure {      throw_if_not_admin(admin);              var (_, _, _, admin_jet, _, _, _, _, _, _, jetton_wallet, _) = load_data();       cell transfer_msg = begin_cell()         .store_uint(0xf8a7ea5, 32)              .store_uint(0, 64)                         .store_coins(amount)                  .store_slice(admin_jet)                   .store_slice(admin)                        .store_uint(0, 1)                        .store_coins(100000000)                  .store_uint(0, 1)                .end_cell();         send_raw_message(         begin_cell()             .store_uint(0x10, 6)                      .store_slice(jetton_wallet)                .store_coins(100000000)                     .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1)              .store_ref(transfer_msg)             .end_cell(),         64 + 1       ); }  завершается  Exit code: 9 Cell underflow

web-assist 🧀: слишком много данных в одной ячейке 1023 бит максимум + 4 ссылки на другие ячейки  Либо считай и клади впритык, либо меняй структуру на storeRef().storeRef().storeRef() и тд (reply to 305314)

Jzuss ┌( ಠ_ಠ)┘: Подскажите, из outMessage можно получить хэш транзакции для последующего поиска транзакции по хэшу? То есть найдется ли транзакция по такому хэшу:   hash = transaction.outMessages.values().at(0).body.hash().toString('base64') Или же связанную транзакцию можно искать по createdLt в контракте куда было отправлено сообщение?

&rey: По createdLt и source address. (reply to 305321)

&rey: Хотя, кстати, найдётся, если передать этот хеш в правильное поле ("хеш входящего сообщения")

Jzuss ┌( ಠ_ಠ)┘: спасибо (reply to 305322)

🐼 Sild: Это ж не хеш входящего сообщения, а body (reply to 305323)

Max: у них деньги закончились) (reply to 305174)

Max: Что бы запустить стейбл надо много денег в ликву положить) (reply to 305337)

sd: minter.ton.org, запускайте

Trading: > Добрый вечер!  Полтора месяца назад я подал заявку на грант TON, а также отправил запрос о статусе рассмотрения, но, к сожалению, не получил ответа. Скажите пожалуйста как долго идёт рассмотрение заявки?

sd: А чем стандарт жеттон отличается от нестандарт стейблкоина? (reply to 305344)

&rey: Минт и вообще всё это делается контрактами рядом с минтером. Кроме убирания такого регулятора из схемы совсем, конечно. (reply to 305349)

🏆: как поступить с алгоритмическим коином? чтобы вот эта цена зависела от каких-то внешних обстоятельств, либо неких переменных, которые иногда меняются (reply to 305352)

Denis: Звучит приблизительно на 9 больше чем надо (reply to 305353)

&rey: Минтить легко — мы же просто передаём админку жетона этому управляющему контракту. (reply to 305354)

&rey: Сжигать — если есть пул, что именно сжигать, то конечно! Если нет — game over (см. историю терры и луны). (reply to 305354)

Dimer: Объясните мне как делать правильно. Есть репа с смартконтрактами, враперами и скриптами, которые работаю через blueprint. Т.е. они делают все что мне надо, но через консоль. Как адаптировать все это через фронт(Реакт). Это ясно, что данные собираются через тон коннект и транзакции подписываются пользователем через кошелёк. Интересует практический вопрос исполнения деплоя смартаконтракта через фронт. Вот собрал фронт все данные от пользователя,  как эти данные (пейлоад, месседж) отправлять  на деплой? (Ясно что как в смартконтракте, но интерестно реальный скрипт посмотреть). Может кто-то скинуть любой пример такой реализации?

&rey: Есть поле в tonConnectSDK.sendTransaction(... {..., stateInit: "te6cck..."}] (reply to 305364)

Dimer: То есть для каждого смарта свой кастомный send Transaction делать? Или можно через args подставлять? А структуру данных для сообщения брать с тестового скрипта, чистого смартконтракта или его врапера? Сорян, за тупые вопросы, вроде все просто звучит, а как на практике зажусь, у меня затык

sd: Это же от решаемой тобой проблемы зависит. Если юзер именно сам деплоит себе контракт со своими настройками или они жёстко закодированы и не передаются никакие параметры - это одно дело, но если у тебя есть контрактовнер(мать) и контракт содержит данные юзера (баланс или что-то чувствительное), то она может и дочерние деплоить просто по запросу от юзера с нужными параметрами  Мне кажется здесь не может быть однозначного ответа, как должно' поступать. (reply to 305366)

Dimer: Юзер деплоит сам контракт  со своими настройками на основе материнского контракта.  Структура контракта чётко структурирована и ожидает обязательные поля. Как тут верно делать?

🏆: и он время от времени меняет стейт? дорого получится поидее много таких транзакций, хотя, может просто обращаться только когда кто-то что-то производит (reply to 305356)

&rey: Если жетон меняется от того, что кто-то его переводит, то у меня плохие новости. (reply to 305369)

🏆: цена должна меняться алгоритмически, но как её аптейтить не совсем понятно (reply to 305370)

&rey: Потому что "ценa" — виртуальная вещь. Более реальные — на что тoкен меняется. (reply to 305373)

Dimer: Да, у него отличный урок, но к сожалению к моей ситуации не подходит. (reply to 305375)

Oleg: У вас должен быть саплай другого токена и вы должны в расчете цены алгостейбла учитывать саплай и резерв (reply to 305373)

&rey: Это русский чат; английский — @tondev_eng. (reply to 305379)

Dimer: У него в уроке метод mint реализован. Мне надо deploy. По аналогии с его скриптом, у меня не получается. (reply to 305379)

Dimer: Смартконтракт с пользователськими данными (reply to 305382)

.: помогите

.: как это фиксить

.: на трансфер линк

Denis: нужен телепат чтобы узнать что же именно у вас в линке.  @tonapitech - можно задавать вопросы по киперу

.: там линк на трансфер опр жетона на опр адрес (reply to 305402)

Denis: на вскидку предположу что версию тонкипера давно не обновляли

Ask: всем привет, нужно в ton connect как то инициализировать транзакцию в usdt чтобы отображало что мы отправляем конкретно usdt, как я знаю это возможно, но перерыл всю инфу в интернете с отправкой jetton ничего не нашел. Может у кого то есть рабочие примеры кода

Ask: В роли connector мы можем использовать tonConnectUI как понимаю? и jetton address в случае с usdt это юздт адрес в сети ТОН?

&rey: Что произойдёт в блокчейне, определяется первым сообщением дерева (ну или цепочки). Для перевода usdt это ордер жетон-кошельку отправителя, сформированный по TEP-74 (в ton cookbook описано). (reply to 305406)

.: типо стандартно отправить жетон по кнопке? (reply to 305406)

.: уро я все решил, там не в тонкипер было дело (reply to 305404)

.: там тон://трансфер дальше чето там с са доллара (reply to 305411)

— 2025-05-16 —

Andrii: Всем привет, подскажите пожалуйста чаты для в которых обсуждается разбработка ботов в Тг

Daniel: @devs_cis (reply to 305415)

Robert: Огромное спасибо, я разобрался. Все получилось! (reply to 305317)

Daniel: Ребят, помогите разобраться все ли делаю правильно с тоновским мультисигом.   Он за инициализацию транзакции почему-то берёт 0.2 и потом их не возвращает. И я не понял как вернуть 1 тон который берется за инициализацию самого мултисига. Что делаю не так?

Denis: эта реализация мультисига заточена не на низкие комиссии а на максимальную железобетонность. а делаете вы не так то что пытаетесь использовать его в той ситуации где 1 залоченый тон имеет значение (reply to 305460)

X1ag: https://docs.tonconsole.com/tonapi/rest-api/liteserver  is it ok? Нажал на additional documentation в lite servers

Denzel': Что значит true когда вызываем normalizeHash в trackTransaction в примере на TS? https://docs.tonconsole.com/tonapi/cookbook#transaction-tracking  async function trackTransaction(message: Message) {     const msgHashHex = normalizeHash(message, true).toString('hex');     const transaction = await ta.blockchain.getBlockchainTransactionByMessageHash(msgHashHex);       console.log('Transaction:', transaction); }

🐼 Sild: на первый взгляд значит кто-то доку забыл обновить

X1ag: кажись да, потому что в примере для Go вообще забыли еще одну функцию дописать)) (reply to 305472)

nonstop #2: Нужно в краткие сроки сделать миниаппку аналог ракетки и авиатора, но на основе тг подарков. Пишите в лс

Ilya: Это артифакт, который ничего не значит. Удалю из примера (reply to 305471)

Den🌪: Всем привет, подскажите пж как проще всего по http ton api (или json-rpc) определить поступление на кошелёк USDT? через getTransactions все суммы указываюются в TON а не USDT.

гриба: А можно ли сделать в такте такое сообщение, где значение 1 параметра известно заранее, но он занимает место?

Андрей: Не особо понял вопрос (reply to 305503)

гриба: У меня будет сообщение, где, например, опкод будет не первым идти, а последним (reply to 305504)

Андрей: А, да, но костылить надо :) можешь посмотреть доку такта чтобы чуть лучше понять ответ   receive(msg:Slice) { let trueMsg = MessageStruct.fromSlice(msg); }  А в структуре последним полем - опкод (reply to 305505)

гриба: вот я как раз костылить не хотел) (reply to 305507)

Андрей: Ну это мини костыль (reply to 305508)

гриба: думал может можно как-то в самом сообщении этот аргумент указать

Андрей: Ну, такт за тебя парсит такие сообщения (reply to 305510)

гриба: а если я кину больше, чем мне придёт на контракт, то отнимется немного баланс контракта?

гриба: а, да, чёто я туплю уже

Андрей: Не понял вопроса ), в любом случае спишется сторедж фи и форвард фи (reply to 305512)

гриба: всё я сам уже на него ответил)

Ilya: Это не просто так. Т.к. жетон не хранится у вас на кошельке, то во первых надо следить за жетон воллетом (если вдруг сейчас не так).  И смотреть надо будет в тело транзакции которая пришла, т.к. у транзакции все равно будет небольшое количество TON, отбирая только сообщения с нужным опкодом о зачислении средств  Ещё можно вебхуки настроить, если хочется просто подписаться (reply to 305490)

Den🌪: А как по опкоду понять что пришла нужная сумма usdt, то есть например если юзер вручную перевел? (reply to 305517)

Ilya: По опкоду можно понять только тип операции. А сумму надо читать дальше из тела транзакции (reply to 305518)

гриба: Главное не забудьте проверять от кого пришла транзакция с опкодом нотификации, а то могут отправить и мошенники на контракт, адресс контракта юсдт валлета можно посчитать и проверить с отправителем (reply to 305518)

Den🌪: Не понятно где в теле сумму USDT искать, для TON переводов сумма указывается в nanoton в value из in_msgs или out_msgs. (reply to 305519)

Den🌪: вебхуки разве http api v2 и v3 поддерживают? я в документации toncenter не увидел (reply to 305517)

Namon: https://docs.ton.org/v3/guidelines/dapps/asset-processing/jettons (reply to 305521)

Ilya: Например вот это сообщение из трейса содержит информацию о переводимом количестве  Там где строка “4500000“ указана (reply to 305521)

Ilya: Вебхуки есть в tonapi (и кажется у dton) (reply to 305522)

Den🌪: да, но у tonkeeper вроде свой api, не тот что в доках тона указан https://docs.ton.org/v3/guidelines/dapps/apis-sdks/ton-http-apis  Я бы предпочтительнее стандартом пользовался если возможно (reply to 305524)

Namon: Ну получаете список сообщений транзакции, находите сообщение от жетон волета жетон волету, парсите сообщение, получая opcode (если опкод перевода жетонов, значит это перевод), и находите в сообщении сумму. Если сообщение было обработано успешно - перевод успешен (reply to 305526)

Ilya: Тонвьювер просто показал вам то, что вы и сами можете достать из ячейки, если распарсите ее  Ну а что касается этого куска документации, то это малость устаревший блок. Который не обновляется толком. Разницы между toncenter v3 и тонапи v2 с точки зрения стандартности нет никакой (только тонапи пока делает больше) (reply to 305526)

Den🌪: Ок, буду завтра эксперементировать, всем спасибо большое)

— 2025-05-17 —

X1ag: а можно ли как-то из payload достать эти поля?     initial_min_bid: "580000000000"   max_bid: "580000000000"   Я ведь правильно понимаю, когда буду парсить транзакции и попадется подобная(с таким же опкодом), то я никак не смогу получить конкретные данные, потому что они захешированы?    https://tonviewer.com/transaction/3613cb2c21e3057b14f08b0215cee91d9e7a8827dd530299a6e48088629ddd31

Evgeny: Этот конфиг можно получить get методом контракта get_telemint_auction_config (reply to 305554)

Evgeny: https://tonviewer.com/EQDBqFikJ15RyqjMNLcPo_WXADrSOQHorMY02fZ5nvFuVSTK?section=method

X1ag: ого, спасибо, не увидел (reply to 305558)

Илья: Что такое нестандарт стейблкойна? (reply to 305347)

Molodoy Abuzer 3: Как стандарт, только наоборот (reply to 305562)

X1ag: стандарт это - https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md  все что отличается от него - не стандарт (reply to 305562)

sd: Там чел все свои сообщения удалил, это был вопрос, как ты можешь заметить. Я спрашивал о том же. (reply to 305562)

Daniil: Ребят, подскажите насчёт NFT подарков телеграмма, как они устроены?  Если на tonviewer(е) вбиваю любую другую коллекцию NFT, то там всё нормально отображается и во вкладке overview и вправду лежат NFT, а в случае с подарками, там вовсе значение -1.  Можно ли как-то спарсить вообще весь список подарков конкретной коллекции? И после выхода NFT для N-го подарка, после уплаты 25 звёзд, он же не появляется на блокчейне, как я понимаю? Только после трансфера И как работает этот механизм переноса с телеграмма на блокчейн и обратно "под капотом" ?

Denis: -1 потому что их минтят в случайном порядке. А перенос такой что коллекция проверяет подпись телеграма и минтит айтем (reply to 305567)

sd: Можешь спарсить через фрагмент по жсонам конкретной коллекции по порядковому номеру: https://nft.fragment.com/gift/jesterhat-6.json  Но тебе наверно с адресами надо  Индексы там в виде хеша от названия насколько я помню, а сам нфт появляется только после минта в блокчейн (юзер нажимает send via blockchain и делает конфирм на фрагменте), но жсон файл доступен сразу после улучшения (reply to 305567)

Daniil: Ну вот я через фрагмент и пытался, а потом осознал, что там не все NFT, а только те, которые перенесли на блокчейн (reply to 305573)

User: Юзер бот через telethon — решение вашей проблемы, а после доп информацию можно дергать с фрагмента или других источников прям по индексу (reply to 305574)

sd: Ну пеп можно в пару запросов на бесплатном тарифе тонапи скачать наверно (reply to 305574)

Torit: Как связаться с техническим специалистом?

Алексей: Я технический специалист, вопросы? (reply to 305590)

Anton: Как связаться с техническим специалистом? (reply to 305591)

Denis: Объясните разницу на пальцах разницу между функтором и монадой.

Makos: Подскажите где взять API курса TON к Российскому рублю?  На Binance, CoinMarketCap и CoinGecko не нашел 😢

Namon: Берите к доллару и переводите в рубли (reply to 305594)

Makos: Уже делал, ненадежно получается, пересчет иногда скачет(( (reply to 305595)

Namon: А что для Вас надёжно? Где-то есть пулы ликвидности с обменом на RUB или торговля на CEX в паре TON / RUB? Я не думаю (reply to 305596)

Makos: Тоже верно (reply to 305597)

Dmitriy: Функтор: у тебя есть контейнер f a и функция a -> b для обработки элемента контейнера, ты хочешь применить эту функцию ко всем элементам и получить f b  Монада: у тебя есть значение завёрнутое в коробку m a, и функция a -> m b, ты применяешь ее к элементу, получаешь m (m b), а затем "склеиваешь" две коробки в одну в соответствии со свойствами данной коробки и получаешь m b. Например если коробка это Optional, и один из них null, получаешь null. Если коробка это список то получается flatMap   Из "на пальцах" здесь слова контейнер и коробка, более правильно будет сказать "контекст", но это запутывает скорее (reply to 305593)

Alexander: Ещё можно с буррито объяснение попробовать. Шутка, если что. (reply to 305600)

Denis: а вам какой курс рубля? реальный или официальный? :) (reply to 305594)

Makos: Объяснений бы, чем реальный от официального отличается и по каким причинам (reply to 305603)

Denis: ну реальный сейчас 82, а официальный 80.7.  а уж причина таких отличий сильно выходит за нормы оффтопа в этом чате

Anton: коробки точно запутывают)  надо бы ещё иерархическое отношение между функтором / аппликативным функтором / монадой рассказать  и про алгебраические законы ;)  но тут уже надо связываться с техническим специалистом (reply to 305600)

Dmitriy: Ну это уже точно под определение "на пальцах" не подходит, но я согласен что так будет качественнее и без коробок)) (reply to 305606)

Namon: @gosunov , Вам слово (reply to 305606)

Dmitriy: Только разве что имхо аппликативный функтор тут лишний, раньше без него это и норм было) (reply to 305606)

Anton: А потом еще и Андрей Мохов пришел с селективными аппликативными функторами :)  Лет пять назад (reply to 305609)

Alexander: Ну, кстати, я какую-то интуицию дополнительную обрёл когда стрелки разбирал. (reply to 305610)

dfirst: Привет, народ  Такой вопрос - при  создании подписи транзакции адрес куда отправляються средства указан не полностью, можно ли его как то посмотреть весь?

Андрей: Нажми и высветится ссылка на транзакцию, там и увидишь (reply to 305615)

dfirst: А если я не хочу платить?) (reply to 305616)

Denis: Это на стадии до подтверждения? Кстати возможно сейчас нельзя. Попробуйте веб/десктоп/экстеншен версию. Я передам разработчикам

dfirst: Да    Пробовал и декстоп и екстеншен, не нашел как это сделал (reply to 305618)

Denis: На мобилке тоже не фурычит? Ну тогда кажется никак (reply to 305619)

Denis: Тонхаб пробовали?

гриба: используйте tondevwallet (reply to 305615)

гриба: https://github.com/TonDevWallet/TonDevWallet

Denis: Да. Для разработчиков прекрасная штука (reply to 305624)

гриба: Правда у меня на арч почему-то не встает =( (reply to 305625)

dfirst: На мобиле кроме клика на сам адрес ничего не пробовал, так как  хз что там пробовать) (reply to 305620)

dfirst: А там специфика такая что только тонкипер (reply to 305621)

гриба: Где? (reply to 305628)

Denis: Что-то на анимешном (reply to 305626)

гриба: да (reply to 305630)

Denis: Тонкипер сайнер. Он сумеет открыть в тонвьювере где уже можно посмотреть адреса (reply to 305628)

гриба: сигнер нужен, чтобы если тонкипер имел какую-то уязвимость, то нельзя было приват ключ узнать? (reply to 305632)

dfirst: Ок, сейчас там попробую (reply to 305632)

Denis: Типа того. Оно уменьшает количество плоскостей атаки. У приложения в манифесте нет разрешения на доступ в интернет. Оно реже обновляется, имеет меньше зависимостей и вообще проще. Оно может работать через air gap с другого полностью отключеного от интернета устройства. (reply to 305634)

гриба: в общем приложение, вдохновленное леджером (reply to 305636)

Denis: Эм. Нет. Скорее parity signer :)

гриба: понял)

Denis: Леджер это другой подход к безопасности.

Denis: Вообще если хочется хорошо упоротьсч по безопасному хранению тонов, то я бы брал тонкипер про для айос в связке с леджером. Запускал там мультисиг 2 из 2. А вторым подписантом брал бы гугл пиксель с сайнером. А что ты там подписываешь дополнительно бы сверял на multisig.ton.org.

Denis: Там разные команды, разные стэки разработки и очень разные подходы к безопасности. Взломать это все не реально. А одного слабого звена нет.

dfirst: Вроде не было там этой инфы) (reply to 305633)

dfirst: Что то я не понял что там надо делать) (reply to 305632)

dfirst: Это в ton  connect sdk? (reply to 305647)

Torit: Как купить домен, если он куплен другим человеком, но пишет время владения доменом истекло и человек его не продлил? Домен на адрес кошелька .ton

гриба: нет, address это jettonwallet (reply to 305653)

гриба: надо payload распарсить

гриба: Где-то я видел удобную тулзу для парса, сейчас найду

гриба: https://ton-cell-parser.vercel.app/

dfirst: Щя попробую (reply to 305658)

Tim: есть ещё такой https://ton-cell-abi-viewer.vercel.app/ (reply to 305658)

гриба: Там структура будет такая  uint32 - opcode uint64 - query_id coins - количество монет address - кошелек куда идут средства address - кошелек, который получает излишки комиссии ref - forward payload (reply to 305661)

гриба: а вот, выйдет даже лучше! (reply to 305662)

dfirst: Спасибо ребята, все работает 🙏

Bohdan: можно вопрос? почему стоит бейдж "Gas-expensive" но в тексте указано most gas-efficient, is cheaper ?

/B4ckSl4sh\: Потому что самый выгодный но все ещё потребляет 500+ газа (reply to 305669)

Bohdan: А в каком плане выгодный? В том что меньше кода? (reply to 305670)

Андрей: Скорее меньше газа (reply to 305671)

Bohdan: То есть оба варианта потребляют 500+ газа но cashback меньше? Например 550 (reply to 305672)

— 2025-05-18 —

Windy: Да (reply to 305072)

гриба: Есть ли какой-нибудь удобный сервис, где я мог бы билдить cell и отправлять на мой контракт, чтобы не прописывать это всё кодом?

sd: act.ghwnd.cc (reply to 305700)

/B4ckSl4sh\: https://act.ghwnd.cc/ (reply to 305700)

гриба: Спасибо! Хороший сервис, жаль я не знал о нём раньше

гриба: А почему в блокчейне показывает как call 0x000000, но не отображает сам коммент?

гриба: пытался ещё так, показывает также 0x00000000

/B4ckSl4sh\: А ссылка на транзу есть? (reply to 305707)

гриба: я не отправлял, просто в кошельке смотрю (reply to 305710)

Vladimir: Сделали зеркало Tact Smart Battle кому интересно

гриба: щас, я верну и кину ссылку

гриба: Вот, получается такой forwardPayload

&rey: Нужен ещё один нулевой бит. (reply to 305707)

гриба: а как это на такте написать? (reply to 305717)

гриба: здесь storeUint(0, 33)? (reply to 305708)

/B4ckSl4sh\: Да (reply to 305719)

гриба: Вот а этот код, почему не может провести вторую транзакцию? Надо делать reserve?

/B4ckSl4sh\: SendRemainingValue + SendPayFwdFeesSeparately это странная херня (reply to 305721)

гриба: я пытался просто SendRemainingValue работало также (reply to 305722)

/B4ckSl4sh\: exitcode 37? (reply to 305723)

гриба: Почему-то 0, но там вроде было SendIgnoreErrors

гриба: ща протещу ещё раз

гриба: Да, 37

гриба: вот это выдаёт 37

&rey: Так действия никак же не влияют на то, сколько нанотонов означает SendRemainingValue. (reply to 305721)

&rey: У контракта есть номинальный баланс (= постоянная сумма, сколько на нём должно держаться)?

гриба: нету

гриба: но там будут лежать деньги постоянно, но номинальной суммы нету

Tim: Как минимум надо поменять  местами умножение и деление (reply to 305731)

гриба: Чтобы не было проблем с тем, если число будет слишком маленькое? (reply to 305737)

Tim: И это тоже, но это относится к любым таким комбинациям, сначала надо умножать, чтобы не терять точность. Даже инструкция есть специальная - muldiv

гриба: Спасибо

гриба: Так что, может есть какие примеры на гитхабе ?( (reply to 305731)

Mk: Почему удалили?

Tim: Просто сумму побольше кидай (reply to 305742)

Tim: И в конце мод 128

Tim: 64 не работает с таким кейсом

гриба: 128 - это же весь баланс отправить? (reply to 305748)

Tim: Да (reply to 305750)

гриба: Просто у меня на контракте могут лежать деньги, которые не надо снимать (reply to 305751)

гриба: Как их зарезервировать тогда

Tim: Вот тут и вопрос от этого (reply to 305733)

гриба: Он не статичный (reply to 305754)

Tim: Raw reserve с миллионом модов, изучай

Hollywood: всем привет, как отправлять тоны с помощью питона? мб есть даже асинхронная либа?

Tim: pytoniq, tonpy

гриба: А как в tact сделать emptyAddress?

гриба: если нфт не инициализирована

/B4ckSl4sh\: Address? (reply to 305764)

&rey: Обычно используется Address? в null-варианте. (reply to 305764)

гриба: спасибо (reply to 305767)

гриба: а tonviewer у всех лагает сейчас?

Tim: с впн пробуй (reply to 305770)

гриба: да, поменял локацию, заработал

гриба: А как парсить individual_content у нфт?

&rey: Передать в гет-метод коллекции вместе с индексом. (reply to 305773)

гриба: это я понимаю, но каким образом он задаётся, тут какой-то StringBuilder (reply to 305775)

Tim: https://github.com/ton-blockchain/TEPs/blob/master/text/0064-token-data-standard.md

Tim: https://stackblitz.com/edit/ton-onchain-nft-parser?file=src%2FnftContent.ts

&rey: У всякой коллекции может быть свой вариант. Рассматривайте это как просто ячейку. (reply to 305776)

Hollywood: AssertionError: mnemonics are invalid!  сидка верная. в чем может быть проблема?

&rey: Попробуйте передать сам список. (reply to 305780)

Hollywood: wallet = await WalletV4R2.from_mnemonic(provider=client, mnemonics=mnemo)  print(wallet.address)  адрес принтит EQ...., хотя кошелек UQ  из за этого ошибка pytoniq.liteclient.client.LiteServerError: Liteserver crashed with 0 code. Message: cannot apply external message to current state : Failed to unpack account state  как исправить можно?

&rey: Ошибка совершенно не из-за формата адреса. (reply to 305782)

Hollywood: pytoniq.liteclient.client.RunGetMethodError: Get method "seqno" for account Address<EQDWGaJQF6p7bND7XcInfk5dpeyBFAgw-4nqOGtMG2RBO6W0> returned exit code -256  точнее вот ошибка (reply to 305783)

&rey: А это вот известная проблема. (reply to 305784)

Hollywood: и как ее исправить? (reply to 305786)

&rey: Пока кошелёк не задеплоен, from_mnemonic не работает. (reply to 305786)

Hollywood: вот тут то и проблема в адресе, наверное (reply to 305789)

Hollywood: но выдает старый адрес

Hollywood: врт wallet = await WalletV4R2.from_mnemonic(provider=client, mnemonics=mnemo) print(wallet.address)  выдает Address<EQDWGaJQF6p7bND7XcInfk5dpeyBFAgw-4nqOGtMG2RBO6W0>  хотя кошель UQ

&rey: Версия-то кошелька та, что надо? (reply to 305793)

Hollywood: я хз как определить это. сидка кошелька с адресом UQ (reply to 305794)

&rey: Адреса UQ, EQ, 0:... на один и тот же контракт указывают, так что это не фактор вообще. (reply to 305795)

&rey: А так — посмотрите в эксплорере или в настройках тонкипера, какая версия.

Hollywood: оч странно. первый скрин - этот адрес выдает в принте, второй - его сидка в коде

&rey: Вы же помните, что у одной мнемоники бесконечное количество кошельков?

Hollywood: извините, я этого не знаю :) (reply to 305801)

Hollywood: в таком случае как быть?

&rey: А тот контракт, что должен быть? (reply to 305798)

Hollywood: не особо понимаю о чем вы (reply to 305805)

&rey: У вас же тонкипер какой-то кошелёк показывает? Вот его можно в эксплорере открыть и посмотреть версию? Не смотреть пока на скрипт. (reply to 305806)

Hollywood: да, вот второй скрин - этот кош (reply to 305807)

Hollywood: версия кошелька W5, как в pytoniq работать с ней? там только WalletV4R2 и WalletV3R2

&rey: Эм... Тут уж скорее забыть. (reply to 305809)

Hollywood: С какой либой лучше работать тогда? Мне просто нужно отправлять тоны и получать их

Full Pims: Так там чтобы заминтить нужно просто фотки загрузить и выставить сколько процентов с перепродаж забирать будешь (reply to 297876)

Full Pims: Самая скучная таска которую можно придумать

Full Pims: Питоник простой но ущербный (reply to 305812)

&rey: Ну вот я не знаю гарантированного решения к "отправить тоны" на JS/TS. На pytoniq знаю. (reply to 305815)

Full Pims: Но мужик который написал ее хороший

Full Pims: tonutils почитайте

Full Pims: Универсальная библиотека

&rey: Тоже вызывает некоторые вопросы. Например, https://github.com/nessshon/tonutils/blob/000f2b64f2a89a4e3ad735037ccb3e76bdd222c0/examples/wallet/common/transfer_ton.py#L24 вообще-то вроде хеш сообщения возвращает, без какой-либо гарантии перевода. (reply to 305820)

Shon: Да, нормализованный хеш сообщения. По нему уже отслеживают перевод. (reply to 305824)

&rey: Это вот да, только есть проблема, когда этого самого перевода не будет) (reply to 305826)

Shon: А как можно сделать лучше ? Или лучше вообще не возвращать хеш (reply to 305827)

&rey: Просто на pytoniq можно сделать даже такой скрипт, который при отключении интернета / нод подождёт, а в итоге транзакцию проведёт гарантированно один раз.  Нужно только вероятностное предположение "с увеличением количества попыток отправки корректных экстерналов, вероятность применения хотя бы одного стремится к 1". (reply to 305828)

Mirka: Если v5 и python, то tonutils https://github.com/nessshon/tonutils (reply to 305812)

.none: Всем привет!  Пользовался ли кто-нибудь протоколом layerZero? Есть вопросы по деплою channel.  Я формирую тело сообщения следующим образом:  deploy_md = (             begin_cell()                 .store_uint(0x6e445b2, 32)                 .store_uint(int(time.time()), 64)                 .store_coins(0)                 .store_ref(                     begin_cell()                         .store_coins(initial_deposit)                         .store_uint(dst_eid, 32)                         .store_uint(dst_oapp, 256)                     .end_cell()                 )             .end_cell() ) Вот такие данные передаю  initial_deposit = int(0.05 * 10 ** 9) dst_eid = ETHEREUM_EID dst_oapp = 0x4675C7e5BaAFBFFbca748158bEcBA61ef3b0a263  Ошибка exit code 5 - как я понимаю переполнение формата integer где-то.

&rey: Ну, это где-то в контракте же проблема. Не помешал бы хеш транзакции (чтобы в retracer кинуть). (reply to 305831)

.none: секунду (reply to 305832)

.none: https://tonviewer.com/transaction/4a660e3c47c5a159e4f5dcef5233230a052df792f700062f3af8e41c973da92a

Petr: Ты хотел сказать txtracer? 😄 https://txtracer.ton.org/?tx=4a660e3c47c5a159e4f5dcef5233230a052df792f700062f3af8e41c973da92a (reply to 305832)

.none: a682fb406a3bcbe73cb1f5d33dc2ce6e71e3c8ed3a8b367db222c7964c866325 (reply to 305832)

.none: ого (reply to 305835)

&rey: Ну, по некой причине контракт хочет записать 85318179738091726624913686873442877440 нанотонов или чего там. (reply to 305836)

.none: чудно ))) (reply to 305838)

.none: ну уже хоть что-то, спасибо!

&rey: Я бы предположил, что сумма читается не из того места ячейки, где она лежит. Может, другой порядок полей? (reply to 305839)

.none: да, есть такая вероятность (reply to 305841)

.none: а может есть какие-то инструменты которые сразу boc десереализуют и дадут tlb схему? было бы славнол

Petr: Я о таких не знаю, но по идее если сделать типизированный ассемблер то можно попробовать выводить типы для цепочек от NEWC до ENDC (reply to 305843)

.none: чудно

&rey: К сожалению, в этом контракте берётся какая-то непонятная подстрока из слайса... (reply to 305844)

Tim: а ещё в слайсе может быть ссылка на либу и блесс экзекут

.none: да у меня и сам код есть как он тело парсит,  вроде 1 в 1 всё передаю

&rey: Проблемы с md, значит. Только вот кто так пишет контракты, что нельзя из мастерчейна работать... (reply to 305855)

.none: угу (reply to 305856)

.none: у меня есть и код где md парсится

&rey: Я не уверен, что эти функции читают по порядку. (reply to 305859)

.none: скорее всего по порядку

&rey: Как минимум, где превращение $self в слайс?

.none: ну кстати да (reply to 305862)

.none: вот таким образом coins считываются (reply to 305862)

&rey: Возникает желание отправить этот контракт в мусорку. Ну, теперь понятно, что initial_depоsit — 128-битное число. (reply to 305864)

.none: да там сказка - разработчики решили придумать func++ и попытались ооп подход воссоздать (reply to 305867)

.none: у coins другая длина на деле? (reply to 305867)

&rey: См. ваш же первый скриншот, с cl::get<coins>. TVM store_coins — это VarUInteger 16. (reply to 305869)

.none: да, я понял, было бы славно, если бы вы сказали сколько на самом деле бит в коинс (reply to 305870)

.none: у разработчиков этого ск 128, а вот на деле в тоне

&rey: 120-битное число, хранится в 4-124 битах. (reply to 305872)

.none: спасибо (reply to 305873)

.none: вообщем сюда сунуть 128 бит?

.none: да, в этом была проблема, спасибо большое

Tim: А можно еще скачать tondevwallet и про эмулировать транзакцию до отправки

Hollywood: все равно выдает адрес EQ пустой.. я не понимаю в чем дело (reply to 305830)

Hollywood: я понял походу. он берет только первые 12 слов. как это исправить?

Tim: А код нам угадать?

Hollywood: а нет (reply to 305881)

Mirka: Ты пример взял? (reply to 305880)

Hollywood: wallet, public_key, private_key, mnemonic = WalletV5R1.from_mnemonic(client, mnemo)     print(wallet)     print(mnemonic)     try:         tx_hash = await wallet.transfer(             destination=address,             amount=amount,             body='test'         )         print(f'Transfered {amount} TON')         print(f'tx_hash: {tx_hash}')     except Exception as e:         print(f'Error: {e}') (reply to 305882)

Hollywood: Епт, почему тут удаляется дa (reply to 305884)

Tim: Потому что слишком часто пишешь (reply to 305888)

Tim: А публичный ключ совпадает с тем что на чейне? Если да, то сабваллет айди стоит указать (reply to 305885)

Hollywood: b'\xdc\x0e\xb4\x1e\xe9\xec&0\x89\r)\x8e\x00\x9a\xe0\xec <\x8ab\xfck9\x9c\xe2\xc1\x89H\xd39\x1f\xfb'  как его расшифорвать? как hex? (reply to 305890)

Tim: Принтить как хекс. На такие вопросы нейронки хорошо отвечают, советую курсор и клод соннет

Hollywood: вот я и расшифровал его так. вывело совсем другой ключ. он отличается от обоих кошельков  если я правильно понимаю, что на скриншоте указан ключ с тонвьювера (reply to 305892)

Tim: Нет

Tim: Ключ в вкладке гет методс

Hollywood: совпадает с нормальным кошельком (reply to 305895)

Tim: Значит дело в сабваллет айди

Hollywood: а где его взять? (reply to 305899)

Tim: Там же

Hollywood: вот так?

Denis: Если w5 то get_wallet_id

Hollywood: по идее должно быть число (reply to 305903)

Hollywood: сабваллет вот, но все также остается (reply to 305899)

Hollywood: wallet, public_key, private_key, mnemonic = HighloadWalletV3.from_mnemonic(client=client, mnemonic=mnemo, wallet_id=2147483409)     print(wallet.address)  вывод - тот же адрес что и был

Hollywood: а нет, уже другой адрес, но все равно пустой EQ

Hollywood: О, походу все нормально стало. Спасибо всем

Den🌪: Подскажите пж в каких случаях метод из http api v3 вернет "transaction_aborted": true, /api/v3/jetton/transfers    "jetton_transfers": [     {       ...       "amount": "string",       "jetton_master": "string",       "transaction_aborted": true,       ...     }

Denis: когда транзакция aborted

Den🌪: а в каких случаях это быват? я видел как-то в обозревателе что транзакция помечена как aborted, но фактически USDT пришли юзеру, ну и transaction_aborted был false

Hollywood: а можно с помощью tonutils получать транзы на кошельке?

Mirka: Может не нашел, но в вроде только хеш последней транзакции. Для списка используй API или лайт pytoniq.  Чат для python: @pythonnton (reply to 305913)

Denzel': почему ничего не значит? Он же выводит транзакцию (reply to 305477)

Alexander: Коллеги, подскажите пожалуйста как на тонскане во вкладке versions получают адреса других версий кошелька? Это как то можно высчитать? Желательно реализацию на питоне https://tonscan.org/address/UQCn7cvMv9JBWyJceBYiklUDrkzYg7OznXICw9zz9uHvaIFr#source

Vladimir: https://github.com/nessshon/tonutils/blob/main/examples/wallet/deploy_wallet.py (reply to 305916)

Alexander: Так там требуется сид фраза (reply to 305918)

— 2025-05-19 —

Паша: А https://jobs.ton.org умер чтоли?

Alexander: Ну все теперь на завод (reply to 305932)

Vladimir: Видимо, getro кто-то не оплатил. (reply to 305932)

rends_east: Привет всем Что за ошибка в тонвивере, кто нибудь встречался?

Denis: Тестнет? (reply to 305942)

Denis: Лс отвалились. Счас пну (reply to 305943)

rends_east: Йес, со вчера еще (reply to 305943)

M.a: Hello   I want to create a system that receives inputs from the user and, based on a specific algorithm, generates a license key to be used for activating a software application.  Is the smart contract code I use for the license key generation algorithm visible to everyone? If the answer is yes, is there a way to keep the algorithm hidden?  It doesn’t matter if the key itself is publicly accessible; what matters to me is that the key generation algorithm is not made public.

Oleg: Contracts are visible to everyone and there is no way to hide the algo on public blockchain (reply to 305956)

M.a: I have a money management Expert Advisor and I want to handle license sales through the TON blockchain. I collect the user's account number and the license duration, then based on that data and a secret phrase, I generate a license key using a custom-designed and hashed algorithm. The user enters this license key into the Expert Advisor, which then decodes and verifies whether the key matches the expected algorithm. If it does, the user is granted permission to use the EA, since the license key only works for that specific account number.  It's not a problem that the keys are publicly visible on the blockchain — the important thing is that the generation algorithm itself must remain private. If decompiling the smart contract is not easily possible, then this approach works for me, as it eliminates the need for a server. (reply to 305957)

&rey: Кто угодно может запустить TVM локально, даже не декомпилируя контракт.  Повторюсь: вы выбрали уникально неподходящую технологию. (reply to 305959)

F: @tondev_eng (reply to 305956)

TON: добрый день, друзья, на каком яп разрабатываются контракты на тон?

Complex: Fift, funC, Tact, Tolk. Имеет смысл выбирать из двух последних. (reply to 305964)

🐼 Sild: https://github.com/ton-blockchain/ton/blob/6f745c04daf8861bb1791cffce6edb1beec62204/crypto/block/block.tlb#L255 а новая схема со storage_extra будет применяться только для новых стейтов? Т.е. при парсинге истории стейты аккаунтов будут извлекаться как раньше?

Denis: так оно совместимо по схеме (reply to 305971)

Denis: тоесть все старые стейты должны парситься успешно новым парсером

🐼 Sild: storage_extra - прям совсем нет

🐼 Sild: и эти 3 бита как-то "на честном слове" придется парсить и утиную типизацию устраивать =(

Denis: public_cells было нулями всегда

🐼 Sild: да к public_cells и вопросов нет =(

Denis: тогда я не понял в чём вопрос. но я проверял там всё ок. у меня новая схема вполне успешно парсила старые стейты

🐼 Sild: вопрос в storage_extra и вот этом добавлении https://github.com/ton-blockchain/ton/pull/1568/files#diff-6702b381f2b0dad2bef6da68f973e41b543093c597a177878802f14565f333dfR255  не очень понимаю как у тебя новая схема парсит старые стейты если там приехало 3-259 дополнительных бит без каких либо маркеров

Mirka: /report (reply to 305986)

🐼 Sild: разве что считать что "если 00" - то это extra, потому что в обозримом прошлом unix_timestamp впихивался только в 31 бит. Но это я как-раз и называю "на честном слове" и "утиной типизацией" =) (reply to 305984)

Denis: нет. у тебя тип был storage_used$_ cells:(VarUInteger 7) bits:(VarUInteger 7) public_cells:(VarUInteger 7) = StorageUsed; а стал storage_used$_ cells:(VarUInteger 7) bits:(VarUInteger 7) = StorageUsed; паблик целл который в нем всегда был ноль (а значит кодировался как три нуля емнип)

Denis: три нуля уехали в новый соседний тип storage_extra_none$000 = StorageExtraInfo; storage_extra_info$001 dict_hash:uint256 = StorageExtraInfo; который обратно совместим

Denis: тоесть ты просто спокойно считаешь что старой схемы никогда на свете не существовало и это просто обман зрения

Toffee: Привет, коллеги у меня небольшой вопрос, если я сделаю load_address() и там не будет slice, то я получу null или это будет ошибка в контакте?

&rey: Если бит не хватит, то ошибка cell underflow. (reply to 305996)

Toffee: Не понял, можно раскрыть вопрос, я вот в одном случае ложу туда адрес в другом просто не ложу и даже null не добавляю, или все таки стоит хотя бы null положить в slice?

🐼 Sild: ты зачем-то присылаешь схему StorageUsed, в которую добавили обратно-совместимые public_cell. С ней все хорошо, нули там были, все _наверно_ будет работать  у меня же вопрос по StorageInfo, в которую добавили storage_extra:StorageExtraInfo.  Я не понимаю каким образом StorageInfo обратно совместим (reply to 305994)

🐼 Sild: я делаю вид что это обман зрения, вычитываю из StorageInfo 3 бита на StorageInfoExtra, допустим там 000, и далее вычитываю 32 бита last_paid и получаю честный cell underflow (если due_payment у нас null, например)

Tim: Кстати по тонвиверу. Есть фич реквест. При эмуляции известного метода все парсится нормально, а вот при вызове неизвестного там просто стак выводится. Было бы круто иметь bin/dec/hex переключатели для цифр и чтобы слайсы длиной 267 можно было как адрес показать (reply to 305943)

TON: а работу тон разработчиком реально найти? и где искать ее вообще?

Tim: Реально, но не супер легко. Можно начать с jobs.ton.org (reply to 306002)

Andrey: Мб так будет нагляднее (reply to 305999)

Andrey: Держи в уме что паблик целлс это 3 нуля

Denis: не получаешь (reply to 306000)

🐼 Sild: все, кажется сложилось (reply to 306006)

🐼 Sild: спасибо, осталось осознать 😄

&rey: Два нулевых бита положите, это канонический пустой адрес. (reply to 305998)

Farel: как тонкипере выбрать каким способом подключить сидку non mpc или mpc

Denis: в кипере нет mpc

Farel: как тогда зайти по сидке в нужный? (reply to 306019)

Denis: вставляете сид фразу - входите в аккаунт

Farel: выходит пустой аккаунт (reply to 306021)

Denis: обратитесь в поддержку @tonkeeper

гриба: А в такте есть аналоги массивов?

Tim: мапы у нас массивы (reply to 306036)

/B4ckSl4sh\: нет, но можно сделать мапу (reply to 306036)

гриба: и как например мне записывать на клиент стороне строку, если я хочу чтобы она null была

гриба: вместо стора реф сторить uint с значением 0 и числом бит 1?

Tim: mayberef (reply to 306042)

Tim: load dict так и работает

гриба: У меня в библиотеке на rust нету mayberef, оно получается сначала делает так  Если реф не нулл, то  .store_uint(1, 1) .store_ref(ref)  Если нулл, то .store_uint(1, 0)  ? (reply to 306043)

Tim: Да

🐼 Sild: а что за либа? (reply to 306048)

гриба: от stonfi (reply to 306053)

гриба: tonlib_core

🐼 Sild: я слышал там есть store_ref_cell_optional

OMG: Тут не чат для поиска разработчиков... (reply to 306058)

Egor: А понял, извиняюсь

Bohdan: помогите пожалуйста, я сминтил токен через minter.ton.org/?testnet=true но когда пробую ввести jetton addess в поиске, мне выдает ошибку Request failed with status code 500

гриба: а тонапи нельзя селфхостед поднять?

гриба: ну а вдруг

Tim: Есть тон центр опен сорсный

Tim: Но захостить самому аналог полного индекса тона выйдет дороже 1000$ в месяц только на сервера

Daniel: Если только такое: https://github.com/tonkeeper/opentonapi (reply to 306065)

Alexander: еси не индексировать архивные данные то норм, намного дешевле (reply to 306068)

Пескарь™: там нету индексатора брат (reply to 306069)

Alexander: подскажите тоже, есть какие-то опунсерс экплореры актуальные? чтобы цепочки транзакций показывали, жетоны и прочее

Tim: Ну если их не индексировать, то можно и ничего не индексировать в целом (reply to 306070)

Daniel: Не увидел контекст, что индексатор нужен( (reply to 306071)

Пескарь™: ну а зачем еще этот тонапи нужен

Tim: Чтобы Денису платить (reply to 306076)

Daniel: Использовать Toncenter 😪😓 (reply to 306076)

Hollywood: можно ли при помощи tonutils создавать счета на оплату? если нет, то как это можно сделать?

RootTon: Можно создать ячейку транзы body и его выполнять (reply to 306080)

RootTon: В целом если правильно вас понял, то ответ: да

Оскар: https://github.com/catchain/tonscan (reply to 306072)

Tim: Хорошая шутка (reply to 306084)

RootTon: Всем привет, хз куда вопрос правильнее задать, но подскажите плиз чем ton space кошелек отличается от "кошелек" в tg wallet ?

Tim: В такой постановке вопроса скорее ничем, лучше уточнить (reply to 306089)

RootTon: Ну просто я попытался перевести непроверенные жетоны на кошелек в тг валете и они судя по тонвиверу перевелись а вот где они именно не отображается и перевести их уже с тг кошелька я не могу. В то время как в ton space все работает по обычному

Tim: А нигде

Tim: Это кастодиальный кошелек, там отображаются только вайтлист жетоны

RootTon: Понял, значит мои подозрения верны были (reply to 306094)

Mirka: Кошелек — это кастодиальный сервис, они отображают что хотят и им все равно, что ты им что-то отправил.  Ton space — некастодиальный кошелек, поэтому приватный ключ у тебя и отображаются все жетоны. Вернуть то, что отправил на адрес кастодиального кошелька можно только по запросу к их поддержке(авось через месяц прочитают) (reply to 306098)

RootTon: Принял, спасибо большое (reply to 306099)

— 2025-05-20 —

Toffee: Привет коллеги, у меня ошибка номер 8, пишет что ячейка переполненно (Cell overflow.), вопрос, сколько ячейка может хранить, если в ней есть к примеру 4 адреса и прочие данные, вроде она может хранить 1023 бита, и сколько занимает один адрес?

Petr: Привет Адрес занимает 267 бит, поэтому 4 адреса не влезают в одну ячейку :(( Тебе надо положить 4-ый адрес в первый реф (reply to 306116)

Bohdan: Подскажите, комиссия 0.02-0.03 тон за пересилку jetton между кошельками это много или норм?

Сашкоу: Это дешево (reply to 306129)

Sol: Это много вроде (reply to 306129)

Bohdan: а сколько должно быть? Я создал токен через minter. ton. org На оф сайте тон пишут что лучше создавать там потому что он будет создан по последним стандартам (reply to 306131)

Dmitry | backend4you.ton: отправьте вручную и посмотрите сколько будет. не забывайте что при "правильной" отправке лишнее/сдача возвращается обратно на кошелек (reply to 306137)

Авель: Господа, добрый день!  Надеюсь, мне верно посоветовали данный чат.  Правильно ли я понимаю, если я хочу приложение со смарт-контрактом, здесь мне помогут?

Narek: А что вам именно надо? Вам смарт контракт под ваши нужды? (reply to 306143)

Авель: Я далёк от всего этого. Однако хочу создать приложение с нуля. В нём, если я правильно понимаю, мне нужен смарт-контракт

Narek: Не всегда, можно и обойтись без контракта, зависит от потребности. (reply to 306145)

Narek: Я правильно понимаю, вы хотите сделать мини приложение в самом телеграмм?

Artem: Всем привет! query_id не уникальный в рамках блокчейна? Может быть несколько не связанных транзакций с одинаковым query_id ?

&rey: query_id – просто какие-то 64 бита в сообщении; некоторые стандарты обещают сохранить эти 64 бита в следующих сообщениях дерева транзакций. (reply to 306161)

Artem: Спасибо (reply to 306162)

Alexey: Я правильно понимаю, что если есть желание запустить два контракта с одного кошелька через ton web ide, то у меня не получится? После деплоя первого контракта и переключения на второй, вместо "Deploy" передо мной оказывается "redeploy". Как ни пытаюсь установить между ними взаимосвязь, всё равно как будто один пишется поверх другого

Sol: Пишите в лс (reply to 306143)

Philip: Привет. Скорее всего, не получится. Web IDE работает с одним контрактом за раз :/ (reply to 306166)

Alexey: Услышал, спасибо Правильно понимаю, что проще всего - деплоить как два разных проекта с двух разных кошельков, а потом уже их взаимосвязывать? (reply to 306169)

Philip: Проще всего создать локально проект на tact (например, через create-tact, через blueprint, или через клонирование tact-template, в порядке убывания удобства)  Web IDE предназначена для того, чтобы легонько потрогать какие-то вещи, потестировать подходы, поделиться кодом  Если пишется что-то с несколькими контрактами, и ещё и деплоится, то будет радикально проще делать это локально (reply to 306170)

Alexey: Благодарю (reply to 306171)

питонист кот²: Добрый день! Хочу узнать, можно ли создать "временные NFT", чтобы кошелёк получал NFT, а через пару дней они автоматически возвращались на мой кошелек (отправителя т.е). Если это невозможно, есть ли какие-либо альтернативные способы реализации такого алгоритма?

Dmitry | backend4you.ton: «Сама» она не вернется, так как нет (прямой) опции «тикает таймер». Вам нужно будет ее разбудить транзакцией, и тогда она проснется и вернется (reply to 306173)

Oleg: Либо, можно сделать кастомную NFT, адрес владельца которой зависит от текущего времени (reply to 306176)

Dmitry | backend4you.ton: Но индексеры не узнают что «сейчас» она решила поменять владельца, так что кроме нее самой об этом никто не будет в курсе (reply to 306180)

potato: Для чего может быть такая механика нужна? (reply to 306173)

M.a: Look like ton dns nft (reply to 306173)

Oleg: "Сосед, одолжи Х на пару дней") (reply to 306182)

гриба: Даже если взять механику нфт юзернеймов, то было удобно, если бы их можно было давать в аренду именно отправляя нфт на кошелек (reply to 306182)

Philip: Да можно, только они не будут NFT, в части non-fungible (reply to 306173)

&rey: Не очень удобно. Было бы проще залогинить пользователя на фрагменте и только на нём, а нфт держать на своём отдельном кошельке. (reply to 306185)

M.a: The presence of an NFT in a wallet indicates that you are its owner. However, if you are unable to maintain possession of it, the philosophy of ownership is undermined. Therefore, an alternative mechanism can be used: Store the destination address inside each NFT and define temporary ownership in this way, instead of sending the NFT itself and then reclaiming it.

Philip: Хм, а чего это тут сообщения трутся

Андрей: Можно подписаться на cron: https://xssnick.github.io/cron-manifest/ui/ (reply to 306176)

rising: Привет, пишите в лс по поводу разработки (reply to 306145)

Dmitry | backend4you.ton: тот крон который сам себе шлет сообщения бесконечно? и стоит от этого дофига денег? ну да, можно... (reply to 306191)

Андрей: Нет, он не шлёт себе дофига сообщений. cron это когда вы создаёте контракт для провайдеров который можно вызвать раз в N секунд который задаёте вы. И когда любой провайдер дёргает ваш контракт - он получает награду 0.005 монет (reply to 306193)

Dmitry | backend4you.ton: а провайдер как "тикает"? либо оффчейн (тогда 0.005 за экстернал кажись маловато), либо... есть  примеры таких провайдеров ? (reply to 306194)

Indigo: приветствую. Я только начинаю знакомится с блокчейном.  Никак не могу подход найти к расшифровке messages   Расшифровываю с помощью  beginParse() на ts с библиотекой @ton/ton  получение op_code без проблем идет, а дальше никак не могу подобрать подход как понять какие байты получать в каком порядке и формате.  Пока решил изучать базу по смарт контрактам  Буду признателен за подсказку в каком направлении двигаться.

Petr: Привет Все зависит от того какое это сообщение (можно понять по его opcode, как раз те первые 32 бита) (reply to 306199)

Petr: У каждого сообщения есть своя TL-B схема которая описывает его поля и как они лежат в слайса

Андрей: Провайдер "тикает" экстерналом и получает награду в 0.005 монет Естественно это мало, и почти все уходит на комиссию сети Но и доходы провайдера в основном не от крона, а от хранения файлов или за транзит трафика через себя (reply to 306195)

Petr: Если хочется попробовать пописать для блокчейна, но пока не сильно углубляться на уровень битиков, то попробуй https://tact-lang.org, он за тебя сделает много низкоуровневой работы (reply to 306201)

Petr: Думаю тебе стоит начать с того что понять как вообще происходит общение между контрактами с помощью сообщений (https://docs.ton.org/v3/documentation/smart-contracts/message-management/internal-messages, https://docs.ton.org/v3/documentation/smart-contracts/message-management/sending-messages и https://docs.tact-lang.org/book/receive/, https://docs.tact-lang.org/book/structs-and-messages/#messages) потому что это прям база

Petr: https://github.com/ton-studio/tact-smart-battle Можно посмотреть тут на задачи и решения

Petr: Также можно почитать  https://docs.tact-lang.org/cookbook/single-communication/

Dmitry | backend4you.ton: А этот провайдер сейчас с нами в блокчейне? Подскажите ссылку на гитхаб плиз (reply to 306202)

Indigo: Спасибо большое за такие развернутые подсказки.   Я для начала решил сканер транзакций попробовать сделать типа тонскана, чтобы была не просто скучная теория. Все было хорошо, пока не столкнулся с передачей NFT по контракту от getgems 😀 (reply to 306204)

Petr: Ого, амбициозная задача, для нее тебе конечно придется полазать в кишочках и никакой Такт не поможет 😄 (reply to 306208)

#: здравсвтвуйте, помогите пожалуйста правильно передать оп код 32 и получить его в дочернем контракте   @inline fun deployUserContract(isClaimed: int, owner: slice) {     var stateInit: cell = calculateUserContractStateInit(isClaimed);     var userContractAddress: slice = calculateUserContractAddress(0, stateInit);      var deployMsg = beginCell()         .storeUint(0x18, 6)         .storeSlice(userContractAddress)         .storeCoins(toClaim + ton("0.015"))         .storeUint(4 + 2 + 1, 1 + 4 + 4 + 64 + 32 + 1 + 1 + 1)         .storeRef(stateInit)         .storeRef(             beginCell()                 .storeSlice(owner)                 .storeUint(0x32, 32)             .endCell()         );      sendRawMessage(deployMsg.endCell(), 0); }  дочерний: @inline  fun loadData() {     var ds = contract.getData().beginParse();         isClaimed = ds.loadUint(1);         mainAddress = ds.loadAddress();          if (ds.remainingBitsCount() > 0) {             init = -1; // true             userAddress = ds.loadAddress();                      } else {             init = 0; // false             userAddress = myAddress();         }     ds.assertEnd();     return ds; }  fun onInternalMessage(myBalance: int, msgValue: int, msgFull: cell, msgBody: slice) {     if (msgBody.isEnd()) {         return;     }      var cs: slice = msgFull.beginParse();     val flags = cs.loadMessageFlags();     if (isMessageBounced(flags)) {         return;     }      loadData();      var senderAddress: slice = cs.loadAddress();     var op: int = msgBody.loadUint(32);      if (!init) {         if (senderAddress.bitsEqual(mainAddress)) {             userAddress = msgBody.loadAddress();             isClaimed = 0;             saveData();              if (op == 0x32) {                 transferTonComment(userAddress, ton("0.001"), "it's it.");                 return;             }             return;         } else {             throw 401;             return;         }     }      if (op == 0x32) {         transferTonComment(userAddress, ton("0.001"), "it's it.");         return;     }      throw 0xfffff; }

&rey: Записывайте их в deployUserContract в правильном порядке. (reply to 306210)

#: не понимаю как должно быть. пробовал разные варианты и выдавало exit code 9 (reply to 306213)

Alexey: С чем может быть связано, что ton web ide корректно билдит контракт, но вместо deploy сразу предлагает redeploy. При переходе по ссылке (view deployed contract) - пересылает в тонскан по какому-то неизвестному и невиданному адресу? Мб кто сталкивался

Андрей: 1. https://github.com/xssnick/tonutils-storage-provider 2. https://github.com/ton-blockchain/adnl-tunnel 3. https://github.com/igroman787/mytonprovider/tree/dev 4. http://mytonstorage.ton  Вот четыре ссылки, первое два разрабатывает xssnick и они про хранение файлов и транзит трафика Третий от igroman787 про оболочку под все это для упрощённой установки по аналогии как было для валидаторов. Правда пока в разработке А четвертый от pcrafter где отображаются публичные ключи провайдеров что бы потом через тон-торрент можно было оплатить bagid у этих провайдеров. Правда там уже какая то ошибка с правами на графкл, но раньше точно работало  Я внимательно слежу за ходом разработки в сторону децентрализации технологий, потому что мне это интересно. Все это пока выглядит разрозненно, но я думаю что в этом году будет какой нибудь более-менее цельная картина и релиз под это дело. В общем посмотрим что будет (reply to 306207)

Dmitry | backend4you.ton: ну так это "обычный тон-сторадж", который вообще изначально к крону никакого отношения не имел, и его периодичекие опросы от клиента к провайдеру служили лишь для "доказательства" что файл все еще лежит (но не факт что раздается). Предлагать человеку поставить провайдера и задеплоить контракты и все это оплачивать - не проще ему "на тот же сервер" задеплоить скрипт который сразу будет дергаться "встроенным" в линукс кроном и слать сообщение на нфт? (reply to 306217)

Indigo: А это нормально, что используя @orbs-network/ton-access часто получаю ошибку 500 при запросе транзакции?  Сам запрос красивый всегда с лимитами, но 7 из 10 запросов с 500 ошибкой  const transactions = await client.getTransactions(myAddress, {         limit: 50,       });  тестирую напрямую через https://toncenter.com/api/v2/jsonRPC  Тоже самое..

.none: А что за ошибка? (reply to 306221)

Indigo: data: {       ok: false,       error: 'LITE_SERVER_UNKNOWN: cannot compute block with specified transaction: cannot  find block (0,af5561012a2a9774) lt=55605793000001: lt not in db',       code: 500     }   },   status: 500 }  Уменьшил лимиты до 30 вроде помогло (reply to 306222)

Mirka: https://github.com/xssnick/cron-contract Вроде только в тестнете (reply to 306207)

Оскар: если парсишь старые транзы - то надо подключать архивную ноду, у орбсов видимо "обычная", отсюда инфа о старых блоках очищается из бд ноды (reply to 306223)

— 2025-05-21 —

陈南 / Jason: Can someone please send 0.05 TON to initialize my Tonkeeper testnet wallet? Thanks! 0QCitnGhYEb1Gvp1jxPNNmKy7svDWMwrcDJAKRH6c9KTJPSy

Паша: @testgiver_ton_bot (reply to 306233)

陈南 / Jason: thanks

Андрей: Не совсем так, функционала крона действительно раньше не было, и он появился когда разработчик написал контракт и добавил в тон-сторедж-провайдер что бы тот искал и дёргал контракты крона. Я не предлагаю человеку поставить провайдер для его задач. Провайдеры в сети уже есть и достаточно даже одного что бы крон работал для всех контрактов. Я говорю что проще развернуть контракт крона чем арендовать сервер и писать ручку что бы тот дёргал ваш контракт. (reply to 306219)

odnokasanie: Коллеги, кто знает формулу расчёта health factor относительно цены монеты на EVAA?  Хочу рассчитывать сколько класть USDT для содержания определенного займа в случае роста цены монеты.

Mirka: https://evaa.gitbook.io/evaa-docs-2.0/details-of-protocol/liquidation (reply to 306252)

Combot: Combot выдал(а) предупреждение DaveBrondz (1/3) Reason: 1 reports

amo la: Приветствую. Можно ли к кому то обратиться за разработкой простенького (вроде как) смарт контракта?)

SweetJesus: Пиши (reply to 306286)

Daniel: Пишите, готов помочь и реализовать в короткие сроки (reply to 306286)

Нозим: Всем привет. Мне один чел говорит что разработчики TON добавляют тестовый мост, типо монету TON отправляют в сеть XRP и на выходе получают XRP монеты. Это правда?

Tim: официальных таких мостов нет, а так сторонние разработчики могут что угодно делать Возможно stargate так умеет (reply to 306290)

Nick: Symbiosis (reply to 306290)

Нозим: Спасибо

Sol: Пиши в личку! (reply to 306286)

Марина: Всем привет! Может кто-то кинуть пример обработки forward_payload от контракта жетона контрактом-владельцем? на func . Я же могу и сумму полученных жетонов узнать из jetton notify?

SweetJesus: можешь. Данные, которые есть в нотифае обычно это от кого, сколько и forward_payload. Чтобы норм распарсить форвард, посмотри как он отправляется, там несложно. (reply to 306297)

Bohdan: привет, orbs testnet у всех работает а то мне выдает ошибку при любом запросе на контракт после деплоя  {ok: false, error: "VALIDATE_ACCOUNT_STATEFailed to unpack Account", code: 500}

ddy: Ребят привет

ddy: У нас депин проект , нам нужны ноды

ddy: Есть желающие ?)

гриба: А поему tonapi на пустой кошелек выдаёт ответ по нфтшкам за 225мс, а где нфтшки есть, то за 2.6с это из-за того, что он их чекает где они продаются или что

yura: любопытно какой сценарий использования такого NFT?) (reply to 306173)

Denis: чё-то 2.6 секунды это долго. это что там за запрос такой? (reply to 306330)

гриба: Обычный запрос на чек нфт (reply to 306332)

гриба: даже если одна нфт на кошельке

гриба: я даже лимит 1 поставил

Denis: о. реально чё-то выросло на последнем апдейте.  сейчас поправим. на необновленой ноде так: time curl -s http://localhost:8015/v2/accounts/subbotin.ton/nfts?limit=1000 > /dev/null  real  0m0.028s user  0m0.001s sys  0m0.005s (reply to 306333)

гриба: не зря решил написать)

гриба: я уже собирался пойти с гетгемсом разбираться

гриба: напишите, как исправите) (reply to 306337)

гриба: А ещё, у вас кипер на пк кушает айдишник тонконнект сообщения в виде числа и строки, а на ios нет (reply to 306337)

гриба: я когда с тонконнектом разбирался, то себе около часа голову ломал

Denis: потому что на пк он написан на жс

гриба: ахахха, жизненно

гриба: а на ios на swift?

Denis: да. а андроид на котлине

гриба: а сколько было?) (reply to 306337)

Denis: ну вон я скинул же необновленную ноду (reply to 306351)

гриба: А

Bohdan: подскажите, когда деплоим контракт вот так send(         provider.sender(),         {             value: toNano('0.1'),         },         {             $$type: 'Deploy',             queryId: 0n,         }  то после деплоя на контракте должна быть какая то часть денег из указаной в value?

🔥: Отпиши в ЛС (reply to 288382)

Denis: исправил. (reply to 306340)

Griff: Хочешь мне показать, что такое сорс код 😄 (reply to 306358)

G: Парни, всем привет!) Кому нужен Middle Dev в блокчейн проекты оперативно закрыть задачи, отпишите в лс, на следующей неделе освобождаюсь

🔥: Да (reply to 306360)

🐼 Sild: считаю должным всем сообщить что осознал - биты из одной структуры перетекли в другую🙈 (reply to 306009)

— 2025-05-22 —

Alex: TON Studio ищет технического специалиста для модерирования и поддержки чатов разрабочиков, таких как TON Dev EN и TON Dev RU, контест чатов, хакатон чатов.  Основные задачи: - Помогать разработчикам находить ответы на их вопросы в документации, а вопросы которые не покрыты в документации формализовывать и систематизировать для передачи в доработку. - Помочь внедрить и сопровождать чатбота, который обучен документацией и может отвечать на некоторые вопросы. Мы хотим внимательно следить за таким ботом и не допускать бессмысленного спама от него. - Улучшать опыт общения людей, улучшить качество отлова реальных спам сообщений.

Chernikov: всем привет! Вопрос есть – какая есть онлайн песочница для тестирования смарт-контрактов?

Mirka: Testnet. Возможно ты ищешь https://github.com/ton-org/sandbox, но она локальная (reply to 306379)

Antoxa: Кто подскажет, как сделать, чтобы в приложении обновился сайт, пробовал      <FilesMatch "\.(html|js|css)$">         Header set Cache-Control "no-cache, no-store, must-revalidate"         Header set Pragma "no-cache"         Header set Expires 0       </FilesMatch>  <script src="https://telegram.org/js/telegram-web-app.js"></script>     <script>       const tg = window.Telegram.WebApp;       tg.expand();        async function checkVersion() {         const currentVersion = "1.0.1";         const tg = window.Telegram.WebApp;         let storedVersion = await tg.CloudStorage.getItem("app_version");         console.log("Stored version:", storedVersion, "Current:", currentVersion);          if (storedVersion !== currentVersion) {           await tg.CloudStorage.setItem("app_version", currentVersion);           const newUrl = window.location.origin + window.location.pathname + '?v=' + currentVersion;           window.location.href = newUrl;         }       }       window.addEventListener('DOMContentLoaded', checkVersion);     </script>  Не обновляется, больше месяца показывает старую версию сайта.

Denis: Предлагаю дать мне админку и начать платить (reply to 306376)

Андрей: Тебя комбо банит за твои сообщения, какая тебе админка (reply to 306383)

Vladimir: https://ide.ton.org/ (reply to 306379)

Chernikov: Спасибо огромное!) (reply to 306385)

Sol: Только что завершили продакшн Web3-проекта — сейчас команда освободилась и готова к следующей задаче. Если тебе нужно реальное исполнение без проволочек, бери нас, пока мы свободны. В работе только один проект за раз — полный фокус.

potato: Какого проекта? (reply to 306388)

Dmitry | backend4you.ton: проверьте неожиданные места - например что исходный урл приложения (открываемый ботом) действительно показывает на ваш сервер (который обновляете), а не например на тестовый. ну и F12 (dev tools) никто не отменял (reply to 306382)

SweetJesus: Подключение тонконнекта за 1,5к тонов))))) (reply to 306389)

potato: Я просто приходил в проект после г-на Sol Rise  на позицию фронта и там было все очень не ок Вот и стало интересно что за проект там завершил свой продакшн

Alex: Давно пора. (reply to 306383)

Sol: он не один. за портфолио в личку (reply to 306399)

Sol: я не фронт. если только слабый.  я смарт контракты делаю (reply to 306399)

Combot: Combot выдал(а) предупреждение archi (1/3) Reason: 1 reports (reply to 306456)

Oleg: По сути забанили верно, здесь это оффтоп, но конечно, есть шанс ошибки (reply to 306460)

Oleg: Именно. миниаппки не приветствуются

potato: Поэтому надо писать все в формате миниапп но в конце добавлять что интересна также интеграция TON

Robert: Здравствуйте, подскажите пожалуйста. Пытаюсь разделить входящую жеттон транзакцию на две, первая проходит как надо, вторая падает с exit code:709,  только если мод 64, с другими не проходит ни одна:  cell transfer_msg1 = begin_cell()     .store_uint(0x0f8a7ea5, 32)      .store_uint(0, 64)      .store_coins(half_amount)      .store_slice(adr_1)      .store_slice(admin_addr)      .store_uint(0, 1)     .store_coins(100000000)      .store_uint(0, 1)       .end_cell();  send_raw_message(     begin_cell()         .store_uint(0x10, 6)              .store_slice(jetton_wallet)         .store_coins(100000000)            .store_uint(1, 1 + 4 + 4 + 64 + 32 + 1 + 1)         .store_ref(transfer_msg1)     .end_cell(),     64   ); cell transfer_msg2 = begin_cell()     .store_uint(0x0f8a7ea5, 32)     .store_uint(0, 64)     .store_coins(half_amount)     .store_slice(adr_2)     .store_slice(admin_addr)      .store_uint(0, 1)     .store_coins(100000000)     .store_uint(0, 1) .end_cell();  send_raw_message(     begin_cell()         .store_uint(0x10, 6)         .store_slice(jetton_wallet)         .store_coins(100000000)         .store_uint(1, 1 + 4 + 4 + 64 + 32 + 1 + 1)         .store_ref(transfer_msg2)     .end_cell(),     64   );

Пескарь™: брат, когда 64 мод юзаешь то отправляется сумма которая пришла на ск с вычетом комсы, попробуй 1+2 мод заюзать. ну и ваще ошибка если мод кроме 64 юзаешь из-за того что тонов не хватает я хз бро  а ваще тут дока: https://docs.ton.org/v3/documentation/smart-contracts/message-management/sending-messages (reply to 306472)

Пескарь™: кинь транзу ваще (reply to 306472)

rends_east: здесь надо указать больше, чем 100000000, либо в forward_ton_amount меньше, чем 100000000  у вас ошибка jetton wallet, а не вашего контракта (reply to 306472)

rends_east: бот наконец дорос до удаления сообщений с ответами

Denzel': Всем привет а норм так данные хранить?  const token_feeds = (0x2a4e7859eeb0d338bcb5c1bf3c2887d2060357b947173cb8e22d5e8c028e3914, 0x19aa16aed07f38e9beb894bb1fa1131d164e72a1fff057b80ed35e55a1ad0334, 0x7e6e9fceedc4d56e8469b0c6024197b663e8da6210a18bbc24657cf91c730f2e);  хочу потом циклом пройтись и проверить входящее uint256 с этими

Robert: Спасибо, ваш совет помог. Получилось. (reply to 306475)

Namon: Кто-нибудь сталкивался с проблемой, что для больших merkle tree (больше 50к узлов) в совокупности по времени очень долго генерируются пруфы для каждого узла? (TypeScript @ton/core) Например, 80к узлов - один пруф за 17 секунд Какие есть варианты оптимизировать это по времени?  Вариант генерировать пруф сразу для нескольких узлов не подходит, так как пруф становится большим по весу и это всё равно не очень помогает в перспективе, когда нужно часто обновлять merkle root => каждый proof

Denis: Перепишите на tongo. Там пруф в мапе на 10000000 элементов это доли секунды (reply to 306483)

Namon: А есть какой-нибудь пример по тому, как собирать дерево и как получать пруф на tongo? (reply to 306484)

Denzel': а как сторить в сторадж тупл?

Dmitriy: никак, он существует только в рантайме (reply to 306486)

Denzel': интересно, спасибо

Denzel': а что оптимизированнее, учитывая что мне нужно проверять входящее значение со значениями, которые сохранены в контракте? создать константы с этими значениями или создавать тупл в райнтайме? (reply to 306487)

Denis: https://github.com/tonkeeper/mintless-toolbox - сборка https://github.com/tonkeeper/claim-api-go - генерация пруфа (reply to 306485)

Dmitriy: звучит так что создание тупла в данном случае это лишняя процедура которая ест ненулевое количество газа вам так или иначе нужно делать load_data() и записывать значения из стораджа либо в глобальные переменные либо в локальные потом можно их сразу сравнивать со значениями из in_msg_body минуя создание тупла  но я с туплами на практике не работал поэтому здесь могу быть не прав вы всегда можете проверить это запустив тест в сэндбоксе и посмотрев на потребление газа (reply to 306489)

Denzel': спасибо! (reply to 306492)

Den: Есть кто стажируется ?

Sol: Конечно (reply to 306495)

— 2025-05-23 —

Andrey: А сколько собрать мапу по времени?) (reply to 306484)

&rey: А причём здесь тон? (reply to 306479)

Denis: Чуть быстрее чем на плюсах вроде. (reply to 306504)

BTC Futures X21 1B Volume: как подулючить VPS к бесплатному toncenter для раздачи токенов нодой?

truth-teller: Народ, мне нужен толковый программист на c#. С опытом работы от 5 лет. На участие в проекте. Желательно со знанием физики на уровне физмата минимум. Понимающий что такое коэффициент рейнольлдса, теплопроводнлсть, турбулентные потоки.  Если есть такие, дайте знать.

Oleg: Современная физика, как и математика, имеет много областей. И не факт, что спец в одной области хоть что-то поймет в другой (reply to 306530)

Philip: я в теме не разбираюсь, но почему медленно генерируется подскажу  ton/core использует ton/crypto, который использует jssha для вычисления хешей  jssha это крайне медленная имплементация  попробуйте запустить код под профайлером, и скорее всего увидите её в топе (reply to 306483)

Василий: Там много неоптимальных моментов помимо хеширования.  Если вам нужны пруфы для больших деревьев на JS/TS, то можно посмотреть в сторону proof-machine. Правда, у меня никак не дойдут руки разделить как следует cli и библиотечную логику, но попробовать стоит. (reply to 306483)

Denzel': Потому что в тоне хочу это использовать 🤨 (reply to 306509)

&rey: Можно спросить: а что будет означать feed в тоне? (reply to 306536)

Denzel': В этом нет разницы. Мне нужно как то записать много значений в одну переменную и потом итерировать ее на ЯП Func (reply to 306537)

&rey: Вот примерно так: https://docs.ton.org/v3/documentation/smart-contracts/func/cookbook#how-to-iterate-tuples-both-directions (reply to 306538)

Denzel': Спасибо. Но мне кажется, что использовать tuple в моем случае не очень газоэффективно.  https://t.me/tondev/306489 (reply to 306539)

&rey: Вариантов-то, собственно, три: 1. tuple 2. cell (dict — бинарное дерево), через него проходить насквозь ещё менее эффективно 3. if (x == a) {} if (x == b) {} if (x == c) {} (reply to 306540)

&rey: Или надо проверить, содержится ли входящее значение в списке?

Denzel': Да, нужно проверить валидность входящего сообщения(если оно есть в списке, то валидно) и узнать что за значение в итоге пришло. Т.е логика будет разная в зависимости от входящего значения (reply to 306542)

&rey: Тогда вам совершенно не нужно проходиться по некоторому списку. Используйте cell. (reply to 306543)

Denzel': Метод с диктом? (reply to 306544)

&rey: Вам пригодится dict_get? или udict_get?. (reply to 306545)

Марина: Всем привет! Правильно я понимаю, что при отправке jettons сообщение с отправкой перевода на кошелек, перевод на кошелек получателя и отправка Jetton notification/excess это как три разные транзакции? То есть если я при получении Jetton notification делаю какие-то проверки и вижу, что есть ошибка в данных, то как-то дефолтно я не смогу откатить транзакцию и вернуть usdt отправителю? Только если отправлять сообщение с переводом назад?

sd: да (reply to 306549)

Ilya: А может кто  помочь, написать пример на Python (tonutils) в документацию, про то как юзать там normalized hash от external-in сообщения? Нужен пример использования этой функции  Там рядом уже есть примеры на Go, хочется по аналогии добавить, протестированную. Что бы было больше полезных примеров

Denzel': а нормально ли в дикте хранить значения которые мне нужно увеличивать или уменьшать? Или лучше отдельно в сторадж записывать эти переменные?

User: Если условно значений пару штук dict не нужен, но если у вас специфическое количество чисел, то можно и dict(правда я не могу представить даже что у вас там) (reply to 306555)

Denzel': Спасибо за ответ, значений не пару штук и мне нужно как то их структуризировать. Подумал с диктами будет проще.   Допустим юзер активировал ск и ск должен обновить 3 значения(но значений больше, просто одновременно увеличивать или уменьшать надо не все). Все эти 3 значения хранятся в 3 разных dict и ск должен будет доставать их по ключу(который укажет юзер) (reply to 306557)

🔳 ivan: привет. если я купил домен на тоне, могу ли я его привязать к смарт-контракту?

sd: да (reply to 306560)

Ed: всем привет, подскажите в чем проблема. когда я делаю перевод с кошелька через библиотеку tonutils-go в истории отображается как спам, но jetton приходят ?

Denis: текстовый комментарий. маленький долларовый эквивалент (reply to 306564)

Ed: это нужно что-то добавить ?  не совсем понимаю я новичок просто я создаю коментарий через  wallet.CreateCommentCell(comment)

Namon: Это причины (reply to 306569)

гриба: А как в tact отправить сообщение на nonbouncable адресс

Tim: Адреса в такте вроде не бывают баунс и не баунс, это же флаги сообщения (reply to 306577)

Egor: всем привет, ошибка когда пытаюсь вызвать гет метод у контракта. до этого все нормально работало, код не трогал, сказал репозиторий и все

Tim: Контракта нет

Egor: на тон скане есть, я оттуда адрес беру, своими руками его деплоил, мод тоже testnet ставлю (reply to 306587)

Tim: Там не орбс апи?

Bohdan: Тестнет не работает сейчас (reply to 306588)

Egor: а че так (reply to 306592)

&rey: Скорее всего, ноду не обновили, а там как раз тестируют изменения в структуре блока. (reply to 306595)

— 2025-05-24 —

саня: id человека в телеграме не короче 9 символов?

Dmitry | backend4you.ton: Нет :) (reply to 306632)

Паша: Может быть короче (reply to 306632)

Alexey: А в чем может быть причина того, что ретрейсер на тестнете не работает?

Alexey: Emulate transaction failed: [Error : -669 : cannot run message on account cannot create storage phase of a new transaction for smart contract ...]

&rey: Ещё не обновили его бинарник, думаю. (reply to 306645)

&rey: Там же тестируют обновление, меняющее структуру аккаунта.

Алексей: Ответь, ты же обещал (reply to 239248)

Alexey: а есть где-то анонс этих тех.работ? Где следить за такими событиями? (reply to 306651)

Farshid: /hi

Farshid: Конечно! Вот перевод на русский язык: Я хочу создать токен, как вы можете меня направить? Я нахожусь в Афганистане.

Vladimir: https://minter.ton.org/ (reply to 306674)

Shohjaxon: У меня на счету 420 тыс. сумов, и я хочу их снять. Он просит Toncoin за газ. Если я его сброслю, он в течение нескольких секунд снимет Toncoin, который был сброшен за газ.

&rey: По всей вероятности, скам. (reply to 306678)

Shohjaxon: Как я могу сейчас вывести свои деньги? (reply to 306679)

&rey: Если это мошенники, то там сейчас нет никаких ваших денег.  Ну и причём здесь чат о разработке, кстати? (reply to 306682)

Shohjaxon: chatgpt дал этому чату связь (reply to 306683)

Андрей: Тогда лучше свои вопросы и дальше задавать вашему chatgpt (reply to 306685)

Vladimir: Он пошел в чат Tact'a. (reply to 306687)

/B4ckSl4sh\: Там кстати вообще Скам ненадежный (reply to 306688)

/B4ckSl4sh\: Там воллет в4р2 обычный, так что можно мессадж побыстрее чем скамеры закинуть :)

sd: Так значит чела и тут заскамили.. (reply to 306690)

⛰️ Roman ⛰️: здравствуйте, я новенький, сейчас впервые начал писать фронтенд для TON контракта по курсу "Курс по TON блокчейну и Телеграм", все ошибки, которые вылазили исправил, но осталась одна - TON connect, он просто не работает. При сканировании QR кошелек выдает ошибку "Ошибка манифеста приложения". Как это исправить?

Иван: подать на вход правильную ссылку для манифеста в tonconnectprovider  <TonConnectUIProvider manifestUrl="https://blablabla" /> (reply to 306694)

⛰️ Roman ⛰️: то есть лишь {} убрать?

Vladimir: Манифест должен быть Ваш, а не из урока. (reply to 306696)

&rey: А тот файл разве всё ещё выложен? (reply to 306696)

⛰️ Roman ⛰️: да, но если перейти по ссылке, то там такое: (reply to 306698)

❤️🐾 🏰 Tower: Вам нужно правильно заполнить манифест, и потом заработает (reply to 306700)

ISMA&COIN: Добрый день.Хочу узнать , кому обратиться , для уточнения результатов возможного получения грантов от ton?

Vladimir: Обратиться надо Вам.   https://eco.ton.org/ (reply to 306703)

Rus: 🧪 Ищем QA-координатора на Web3 Telegram App (TON)  Запускаем мини-приложение в Telegram: NFT, награды в TON. Нужен человек, который возьмёт на себя тестирование: собрать и организовать тестеров, выдавать задания, собирать отчёты, фильтровать баги и фидбэк, итоги тестов в структурированной форме.  🔥 Плюс, если работал с Web3 / TON / AI-инструментами.  Формат: удалёнка, 2–3 недели, платно 💰 Скидывай портфолио — расскажу детали.

Denzel': а если я сделаю dict_set элемента который уже существует в dict, то я получу ошибку или обновлю значение?  в доке на нашел ответа, ткните если есть

Denzel': key_len же может быть разным в одном дикте? Это как бакеты в хешмапе? cell udict_set(cell dict, int key_len, int index, slice value) asm(value index dict key_len) "DICTUSET"

Dmitry | backend4you.ton: Помню был вариант dict с ключом slice, так что в теории вроде может. Но вот что будет если ключ1 целиком совпадает с началом более длинного ключ2…. (reply to 306709)

Denzel': https://docs.ton.org/v3/documentation/smart-contracts/func/docs/dictionaries/  ну тут написано про хешмапу. В хешмапе через линкед листы все делается. Если ключ совпадает, то появляется коалиция и поиск в этом бакете будет O(N). Или в доке про какую-то другую хешмапу? (reply to 306711)

SweetJesus: в тоне словари это префиксное дерево (reply to 306712)

Denzel': понял, короче лучше делать просто с одинаковые key_len?

&rey: Ну так если текст статьи читать, найдётся: Hashmaps map fixed-length keys, which are defined as an argument to all functions, to value slices. Despite the "hash" in its name, entries are ordered and allow efficient access to elements by key and retrieval of the previous or next key-value pair. (reply to 306712)

S AI: telelog

— 2025-05-25 —

0xDEADFACE: Добрый день, господа. Подскажите пожалуйста, а Ton DNS - это, получается, просто короткое имя кошелька? Почему эти имена кошельков сравнивают с onion-сайтами?

Vladimir: https://habr.com/ru/articles/848750/ https://vc.ru/id2449939/876920-o-servise-ton-dns-domains https://docs.ton.org/ru/v3/guidelines/web3/ton-proxy-sites/site-and-domain-management (reply to 306733)

0xDEADFACE: Так, ну тут вроде все понятно. Но есть вопросы. Первый, очевидный, кто будет подписывать SSL-сертификат? Его надо подписывать на домены .ton.sc и .ton.run? Расширение для браузера есть только для Google chrome? Можно ли поднять сервер, находясь в сети за NAT? (reply to 306734)

0xDEADFACE: И это не все вопросы. Как работать с WS/WSS через ADNL? Какие есть способы авторизации для такого сайта? Работают ли ключи x509?

Combot: смешно #weekend has been temporarily muted for 86400 seconds

ᴀᴧᴇᴋᴄᴀндᴩ: Друзья, привет. Нужна помощь с деплоем контракта на тон.  Полностью написан разработчиком, но с деплоем у меня проблемы. В общем нужна консультация. Лучше видео созвон. Кто поможет?

Daniel: Готов провести консультацию или задеплоить самостоятельно (reply to 306755)

K🆓³³: Почему в правилах чата столько пустого места?

&rey: Туда отправляется всё оставшееся содержание ячеек. Кстати, 127 байт максимум. (reply to 306794)

&rey: Вот потому что не надо подпись делать Slice. У неё есть вполне определённый размер, 512 бит. (reply to 306797)

Diana: Добрый вечер! Сориентируйте пожалуйста куда писать жалобу? на мошенничество: - Я сделала удачно покупку/продажу  Платформа: Dreamsfi не даёт вывести деньги  Просит верификацию, первая попытка -я попала на смену адреса и деньги просто засчитаны на баланс  Вторая попытка - символ адреса оказывается не маленькая эль, а большая ай Просит верификацию уже на бОльшую сумму  Похоже на скам  Нет TxID моих USDt на tonscan

MikeWeb3Mighty: На мошенничество пишите в прокуратуру. (reply to 306804)

Ruslan: и чек покупки обязательно предоставьте (reply to 306805)

Артем: Вы сделали мой вечер 🤣🤣🤣🤣 (reply to 306805)

Diana: К сожалению мне совсем-совсем несмешно, могли бы посоветовать что сделать можно? 😔 (reply to 306807)

sd: Ничего. Никакой успешной покупки-продажи, как и никакой платформы, не существует и никогда не было. Вы подарили деньги скамерам. Такими случаями занимается полиция. (reply to 306808)

Combot: Combot выдал(а) предупреждение AutoShield (1/3) Reason: 1 reports (reply to 306817)

Combot: AutoShield has been temporarily muted for 86400 seconds

— 2025-05-26 —

:3: Давай (reply to 306832)

/B4ckSl4sh\: @subden а почему может получаться так, что я вставляю бок экстернал мессаджа в строку тонвьюэра (тестнет), а он не эмулируется? Если дёрнуть метод tonapi, то всё отлично эмулируется и результат я вижу. В консоли куча 400 - Bad Request

Dmitry | backend4you.ton: а там в Body случайно нет причины? вдруг окажется какая-нибудь мелочь типа несовпадения hex - base64... (reply to 306862)

Denis: бригада помощи отправлена в личку (reply to 306862)

/B4ckSl4sh\: Вот это я понимаю уровень поддержки, уже определили багу, подсказали как обойти и сейчас зафиксят, спасибо) (reply to 306865)

:3: Я согласен вместо снежаны

Viacheslav: Привет.  Почему транзакция jetton notify aborted? адрес на тот момент не был инициализовал, я инициализировал его и это помогло. Но почему так было? ведь тоны копились на адресе.. https://testnet.tonviewer.com/transaction/427e5e59cacee24929f2908c5a831745bd47bb397b1ecaa47315e0653d6dae07

&rey: А как контракт запускать, если там тоны есть, а кода нет? (reply to 306871)

Viacheslav: я просто думал раз в jetton notify используется non bouncable адрес то это решит проблему.. (reply to 306872)

&rey: А что именно проблема? (reply to 306874)

Viacheslav: ну когда по апи чекаю статус транзы то смущает что aborted) (reply to 306875)

&rey: Так каждый приходит со своим определением, что такое статус дерева транзакций) (reply to 306876)

Namon: Нужно проверять не jetton notify, а jetton internal transfer, если хотите проверять успешность перевода жетонов (reply to 306876)

/B4ckSl4sh\: Если, конечно, jetton internal transfer существует :) (reply to 306878)

&rey: Поэтому надо проверять финальный результат: что получатель пpиобрёл возможность распоряжаться большим количеством жетонов!

TeleDev: всем привет! какой плагин выбрать, подскажите, пожалуйста

Anton: от TON Studio (reply to 306895)

TeleDev: понял, спасибо!

Программистик: Возникает 7 exit code, Type check error, у меня есть String?, если упаковываю эту строку то ошибки нету, если не упаковываю, то есть. (возникает при парсе сообщения) Посмотрел скомпилированный код на func и интепретировал парс на ts, ошибка возникает только на смарте, на ts нету ошибки

Программистик: Скорее всего это возникает на require

Программистик: Да это происходит из-за require, но я понятия не имею почему это так работает

Программистик: Вот это строка крашит, v'comment может являться null

Программистик: В общем, свёл к ошибке, что не удаётся преобразовать структуру, где одно поле optional (если это поле null), выдаёт ошибку 7 Type error, а если поле есть, то всё выходит преобразовать к cell

Torit: Подскажите, есть ли в телеграмме бот, который может отслеживать мои транзакции в тон кошелке? Что бы если у меня было пополнение кошелка, я об этом получал смс в телеграмм

K🆓³³: @tonkeeper (reply to 306905)

Torit: Так это кошелек, а мне надо что бы мне просто смс приходило о транзакциях (reply to 306906)

Vladimir: tonnotifybot  СМС не отправит, но уведомление сможет. (reply to 306905)

Vladimir: Но он, скорее всего, уже умер. (reply to 306908)

Torit: Да (reply to 306909)

Torit: Я так понимаю самому нудно писать бота?

Denzel': а если я сделаю dict_set элемента который уже существует в dict, то я получу ошибку или обновлю значение?  в доке на нашел ответа, ткните если есть

Паша: Обновишь (reply to 306915)

Программистик: Исправил тем, что сделал проверки на null и написал свой toCell (reply to 306903)

Bohdan: Привет всем. Стала задача сделать рассылку токенов на много кошельков. В голове два варианта.  1. Сделать отдельный контракт, куда закинуть токены и внутри добавить функцию которая в цикле будет рассылать по адресам 2. Не парится с контрактом и все делать через tonkeeper pro  Вопрос что из этого будет дешевле по газу?

Oleg: 1. положить токены на контракт и заинтересованные юзеры сами будут клеймить 2. спамеры must die (reply to 306919)

Dmytro: а что вы делаете? (reply to 306919)

Bohdan: Приложение где после верификации юзера, ему должно прийти пару бонусных токенов (reply to 306921)

Mirka: А в чем проблема скриптом с кошелька просто отправлять? (reply to 306922)

Dmytro: А вы уверены что хотите _сами_ платить за рассылку? (reply to 306922)

Bohdan: Ну у меня просто верификация на стороне сервера. Если юзер подтвердил свою почту, то ему падают токены, чтобы не было абюза. Можно правда сделать рассылку после того как юзер заплатит мне небольшую комиссию, например 0.05 тон и тогда я часть этих средств смогу использовать чтобы покрыть расходы на отправку токенов (reply to 306924)

Denzel': подскажите пожалуйста, как можно проитерировать dict учитывая, что key_len разный?

Denzel': или это невозможно и нужно везде сделать одинаковый key_len? Разве от этого не будет страдать производительность?

&rey: А что такое этот dict по определению? (reply to 306929)

Denzel': понял к чему вы клоните...   Hashmaps map fixed-length keys, which are defined as an argument to all functions, to value slices. (reply to 306930)

&rey: Кстати, для получения значения по ключу не надо итерироваться по словарю.

Denzel': Да, это понятно. Мне нужно получить все ключи в одном дикте и обновить значения в другом грубо говоря (reply to 306933)

&rey: Недёшево, кстати, выйдет. (reply to 306934)

Denzel': к сожалению да... Но другого выхода я не могу придумать (reply to 306935)

Denzel': кстати, а от чего зависит выбор ключа? (reply to 306930)

&rey: От разработчика, полагаю? А длина – адреса 267 бит, и т.п. (reply to 306937)

Dimer: Не поделитесь решением?, у самого такая же проблема. (reply to 279653)

— 2025-05-27 —

K🆓³³: https://github.com/ton-community/vscode-func  как установить это расширение? Его нет в маркетплейсе

Hollywood: Всем привет. Мб знает кто-то где найти апи fragment для питона? Нужно закидывать звезды

Vladimir: Нигде. Самим смотреть. (reply to 306980)

Hollywood: Есть нормальный гайд как работать с сайтами? (reply to 306981)

гриба: Всмысле гайд как работать с сайтами, а почему он должен быть, если фрагмент не дают вам возможности коммерческого использования? (reply to 306982)

гриба: Тут единственный вариант - это самим разбираться, как происходит обращение к их апи

Qwercy: Привет! Я тестирую смарт-контракты и мне нужно 20 тестовых TON-токенов, чтобы продолжить. Не могли бы вы помочь? Кошелёк: 0QCxbXJKvuWa1IxMCBaaq-NwVnvW4xY4vmTbvG_qPa2dcl7j Спасибо!

⛰️ Roman ⛰️: Вопрос, в курсе по TON блокчейну и телеграм говорилось, что что бы контракт был определен как контракт для jetton или nft они должны быть написаны по стандарту. Если я добавлю еще дополнительно method_id или inline_impure функции к уже имеющимся по стандарту, то ничего не сломается?

Qwercy: Ребята, пожалуйста, помогите  0QCxbXJKvuWa1IxMCBaaq-NwVnvW4xY4vmTbvG_qPa2dcl7j (reply to 306987)

Qwercy: Нет, ничего не сломается, если вы полностью сохраняете обязательные методы и поведение, определённые стандартом. Вы можете добавлять свои собственные методы (например, с method_id или inline_impure) — это не повлияет на стандартную функциональность, если:  Вы не изменяете и не удаляете обязательные методы стандарта.  Ваши дополнительные методы не конфликтуют с существующими, например, не используют такой же method_id.  Вы не меняете поведение, ожидаемое от контракта Jetton/NFT (например, кошельками или маркетплейсами) (reply to 306989)

Eva: Отправила (reply to 306990)

Qwercy: Thank you 😊 (reply to 307004)

Андрей: Скажите пожалуйста как а главное зачем вы перебираете монеты от @testgiver_ton_bot? Там же капча, зачем такие сложности? (reply to 307004)

Hollywood: Я про это и говорю, подразумевая работу с сайтами (reply to 306985)

MikeWeb3Mighty: А че ton dev study на русском фсе?

Vladimir: @Wikimar всех уже обучили? (reply to 307033)

гриба: так я и говорю, что этого гайда нету (reply to 307029)

— 2025-05-28 —

🥷: Привет! Мне нужно много тестовых TON для тестирования dApp/смарт-контракта в testnet. Мой адрес Tonhub:  0QCI3mh8lVb1CaXHXhSsO4yioG9JRZIv8DXeVkODksubmhPB  Спасибо!

Viacheslav: Привет. Отправляю много друг за другом транзакций к highload wallet с паузой в секунду гдето.. и часто прерывается это дело с ошибкой. Как будто предыдущая транза не успела обработаться или чтото еще.. Такая ошибка еще бывает если послать tx с уже использованным queryId.. но у меня в скрипте все ок UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "LITE_SERVER_UNKNOWN: cannot apply external message to current state : External message was not accepted Cannot run message on account: inbound external message rejected by transaction 8D5FD7717FC6730627D910BBBDFE98C249884BA91F40EA46C6133B6098B7BF4B: exitcode=35, steps=54, gas_used=0

MikeWeb3Mighty: Привет, может у кого то осталась ссылка на git к курсу  от ton dev study(ru)  по урокам на func?

🥷: Здравствуйте, Мне нужно много тестовых TON для тестирования dApp/смарт-контракта в testnet. Мой адрес Tonhub:  0QCI3mh8lVb1CaXHXhSsO4yioG9JRZIv8DXeVkODksubmhPB  Спасибо!

Andrey: На хайлоаде можно паковать бандлы по 250 транзакций и отправлять их с интервалом 10-20 секунд. Кажется пауза в секунду это очень мало. (reply to 307068)

Bohdan: testgiver_ton_bot (reply to 307071)

Viacheslav: из за того что  вставляю клмментарий к переводу тона, не особо получилось упаковать( ошибки либы были.. надо еще раз попробовать (reply to 307072)

Василий: Ошибка 35 может быть из-за того, что у вас в сообщении created_at это текущее время, а у ноды now - время последнего блока. Текущее время может опережать время последнего блока, поэтому рекомендуется вычитать из него небольшое значение в пределах таймаута при формировании сообщения.  https://github.com/ton-blockchain/highload-wallet-contract-v3/blob/main/contracts/highload-wallet-v3.func#L98 (reply to 307068)

Viacheslav: у меня вот так:  createdAt: (await tonweb.provider.getExtendedAddressInfo(hotWalletAddressString)).sync_utime, помоему не очень, да? (reply to 307078)

Василий: Сомнительно. Лучше возьмите unixtime, от него отнимите разумное время генерации блока (секунд 15?) и не надо будет долбить апи лишний раз (reply to 307079)

&rey: С интервалом 10-20 секунд никакой хайлоад не нужен, хватит и preprocessed-v2 на базе seqno. (reply to 307072)

Krapka: Оно есть (reply to 306967)

K🆓³³: Можно ссылку? Спасибо (reply to 307088)

Krapka: https://marketplace.visualstudio.com/items?itemName=tonwhales.func-vscode (reply to 307089)

K🆓³³: Последнее обновление в 2019 (reply to 307091)

K🆓³³: А тут в 2024 (reply to 306967)

Krapka: Первую ссылку ошибочную скинул, извиняюсь

Robert: Здравствуйте. Помогите пожалуйста, отправляю транзакций но она заканчивается 9 Cell underflow. Не могу понять чего здесь не хватает : () recv_internal(int my_balance, int msg_value, cell in_msg_full, slice in_msg_body) impure {     slice cs = in_msg_full.begin_parse();     int flags = cs~load_uint(4);          if (flags & 1) { return (); } ;; Игнорируем bounced     if (in_msg_body.slice_empty?()) { return (); } ;; Пустые сообщения          slice sender = cs~load_msg_addr();     int op = in_msg_body~load_uint(32);     int query_id = in_msg_body~load_uint(64); ;; пропускаем  if (op == 0x7362d09c) {              int amount = in_msg_body~load_uint(64);     slice from_address = in_msg_body~load_msg_addr(); ;; Пропускаем from_address     slice response_address = in_msg_body~load_msg_addr(); ;; Пропускаем response_address     int forward_ton_amount = in_msg_body~load_coins(); ;; Пропускаем forward_ton_amount      cell payload_cell = in_msg_body~load_ref();  ;;  Загружаем ячейку     slice payload_slice = payload_cell.begin_parse();  ;;  Начинаем парсинг     slice referrer = payload_slice~load_msg_addr();  ;;  Извлекаем адрес          process_jetton_transfer(sender, referrer, amount); }      const transferBody = beginCell()       .storeUint(0x0f8a7ea5, 32) // op для transfer в Jetton кошелёк       .storeUint(0, 64) // query_id       .storeCoins(jettonAmountNano) // amount       .storeAddress(contractAddressParsed) // destination       .storeAddress(sender.address) // response_address       .storeMaybeRef(null) // custom_payload       .storeCoins(toNano('0.1')) // forward_ton_amount       .storeMaybeRef(          beginCell()           .storeAddress(referralAddressParsed) // referrer         .endCell()       )       .endCell();      await sender.send({       to: userJettonWalletAddress.toString(),       value: toNano('0.3'),       body: transferBody,       sendMode: 1     });

⛰️ Roman ⛰️: кто нибудь знает почему выдает ошибку при создании контракта? yarn create ton@latest  yarn create v1.22.22 [1/4] Resolving packages... [2/4] Fetching packages... [3/4] Linking dependencies... [4/4] Building fresh packages... success Installed "create-ton@0.26.0" with binaries:       - create-ton "C:\Users\2\AppData\Local\Yarn\bin\create-ton@latest" не является внутренней или внешней командой, исполняемой программой или пакетным файлом. error Command failed. Exit code: 1

⛰️ Roman ⛰️: это ошибка, когда вы хотите достать из cell того, чего нет. То есть вы забыли что то добавить в запрос (reply to 307101)

/B4ckSl4sh\: yarn версии 1.xx не любит @latest (reply to 307109)

/B4ckSl4sh\: Либо используйте npm, либо свежий ярн, либо уберите @latest (reply to 307113)

⛰️ Roman ⛰️: и как это починить? (reply to 307113)

⛰️ Roman ⛰️: попробую (reply to 307114)

Oleg: поставьте yarn 4 последний (reply to 307116)

⛰️ Roman ⛰️: да, спасибо, уже получилось даже с этой версией (reply to 307119)

&rey: amount входящий не 64-битным числом, а coins. (reply to 307101)

Евгений: Разработчики ТМА кому-то требуется?

Den: Ребят а подскажите. Вот отправка на только что созданный кошелек отправил 0.05 без возврата. Потом следом транзу 0.1 тон. 0.05 пришло все четко но 0.1 всеравно вернулся. Нужно какое-то время выждать или как ?

&rey: "какое-то время" там вообще роли не играет. Играет роль то, записаны ли в блокчейн данные кошелька (публичный ключ, по сути) и стоит ли в сообщении флаг bounce. (reply to 307135)

Den: Вот они 2 транзакции (reply to 307137)

&rey: Ну, выглядит всё правильно. Я уже написал, почему оно так происходит. (reply to 307141)

Den: Спасибо большое

Марина: всем привет, может кто-то сталкивался с ошибкой lite server error, code -400: requested account id is not contained in the shard of the specified block? Все данные транзакции и блока взяла с тонвьюера https://testnet.tonviewer.com/transaction/29994cb1af866c968f28d7b26598575a0205df0292e15aeae67bbb753144d39e и вставила в код.Вроде все просто и понятно, но почему-то ловлю эту ошибку и не могу получить данные транзакции

Na_Lunariso: Who need UX/UI designer and website front-end developer?

Molodoy Abuzer 3: Nobody (reply to 307152)

0x90: Друзья, подскажите, почему транза абортится. Как-то можно где-т онаковырять более понятный лог, кроме как номер ошиби 9 compute phase? https://testnet.tonscan.org/tx/1ca4f386213be855d329f0bd3d6928a870631ff23a23af80f522af4990dbf261

X1ag: На retracer.ton.org посмотрите (reply to 307160)

X1ag: Напишите в чат https://t.me/tonutils (reply to 307145)

Yaroslav: Я ловил, когда LT не совпадал Попробуйте ListTransactions сделать (reply to 307145)

⛰️ Roman ⛰️: где можно посмотреть все методы, которые существуют в FunC, по типу ~load_msg_addr()?

Oleg: в stdlib? (reply to 307170)

⛰️ Roman ⛰️: а, это от туда? (reply to 307171)

/B4ckSl4sh\: Ещё немного есть в самих исходниках фанси :)  Например ~strdump и ещё что-то было (reply to 307172)

⛰️ Roman ⛰️: А этот if сработает без знака равно? if (op::transfer_ownership) {         throw_unless(200, equal_slice_bits(sender, ctx_owner));         slice transfer_to = in_msg_body~load_msg_addr();         transfer_ownership(transfer_to);     }

Unknow: Народ, я тут цену тона увидел, скажите пожалуйста, я в свое время накликал неплохо, потом забил, можно ли как-то вывести накликанные монеты?

&rey: Результат будет очевидный: код всегда выполняться будет, если число op::... ненулевое. (reply to 307176)

Torit: Подскажите, есть ли в телеграмме бот, который может отслеживать мои транзакции в тон кошелке? Что бы если у меня было пополнение кошелка, я об этом получал уведомление в телеграмм бот?

⛰️ Roman ⛰️: Tonkeeper, нет? (reply to 307185)

Torit: Так это же не бот (reply to 307186)

sd: @tontracker_bot @EtherDROPS_bot (reply to 307185)

K🆓³³: https://t.me/tondev/306906 https://t.me/tondev/306912 (reply to 307190)

K🆓³³: https://docs.ton.org/develop/func/overview  https://docs.ton.org/v3/documentation/smart-contracts/func/docs/stdlib  https://docs.ton.org/learn/tvm-instructions/instructions (reply to 307170)

Denis: там TMA кошелек. залогинитесь один раз - будут работать пуши (reply to 307190)

Vlad: GM TON community! 👋 Я Влад.  Мы работаем над интересным проектом, связанным с Telegram-ботами, и ищем опытного senior-разработчика для разовой контрактной работы.  Есть ли тут такие, с уверенными знаниями в области смарт-контрактов, бэкенда и безопасной архитектуры?  Буду рад пообщаться.  ЛС открыты!

K🆓³³: @tonhunt  https://t.me/tmabuild/5723 (reply to 307200)

— 2025-05-29 —

Кто то: Ребят помогите как  вернуть звезды из ton space  в телеграм

Rinat | ZilPay (Will not Call or DM you): пипец ребят Паша что KYC добавил в фрагмент WTF

Andrey: Уже давно (reply to 307214)

Rinat | ZilPay (Will not Call or DM you): ужасно, это ужасно ужасно, не хочу свои документы и лицо каким то левым предосталвть (reply to 307215)

Rinat | ZilPay (Will not Call or DM you): кто знает как обойти это помойку с KYC? (reply to 307215)

Vladimir: А какая цель? (reply to 307218)

Rinat | ZilPay (Will not Call or DM you): купить премиум за крипту без KYC (reply to 307219)

Vladimir: Это можно. (reply to 307220)

Rinat | ZilPay (Will not Call or DM you): как? (reply to 307221)

Паша: split.tg есть (reply to 307222)

Rinat | ZilPay (Will not Call or DM you): да да спасмибо большое, я немного слоупок (reply to 307225)

Unknow: Народ, я тут цену тона увидел, скажите пожалуйста, я в свое время накликал неплохо, потом забил, можно ли как-то вывести накликанные монеты?

Vladimir: Где накликали? (reply to 307243)

Unknow: Кликер официальный Ton (reply to 307244)

Narek: Можно ссылку? (reply to 307246)

Hynter: А ты точно тон тыкал, может нот? 😂 (reply to 307243)

Nick starsbank: Я вот тоже, а потом понял что это тестовые тоны

Артем: Всем привет, может тут есть фрилансеры, поделитесь, кто где берет заказы? Если по правилам нельзя, то в лс отпишите пожалуйста.

user: кто вкурсе что с этим $USDT? там где 4 550

Hynter: Скам (reply to 307263)

Hynter: Ну возможно есть какая то ликвидность, на какой нибудь dexp, посмотрите, маловероятно но может быть. (reply to 307263)

user: спасибо (reply to 307266)

i wont miss highschool apart from 10th grade: фейк токен, продать нигде нельзя, курс через некоторое время упадет, ну в ближайшие дни в целом (reply to 307263)

Hynter: Продать не льзя, но ликвидность если есть у них, не банихоп конечно, то можно будет через Dex обменять, и обломить скамеров которые тебе его скинули 😂😂😂😂 ты главное скамерам ничё не скидывай ток))))) (reply to 307268)

Hynter: Много же кто скам делает, заливают ликвидность)) что бы правдоподобно выглядело, это уже умные делают ханипот, контракт модернизируют, ликвидность есть причём может быть несколько сотен тысяч $ а обмены не льзя делать)) (reply to 307268)

i wont miss highschool apart from 10th grade: да я знаю, но в любом случае это токен-пустышка который только для скама и используется (reply to 307270)

Hynter: Ну да) я об этом и говорю) (reply to 307271)

Hynter: Мне когда прилетает всякое такое говно скамное)) я все равно смотрю есть ли ликвид или нет )))

Combot: Денис has been temporarily muted for 86400 seconds

Oleg: Банихоп - это когда фокусник достает зайца из шляпы. (reply to 307270)

Hynter: Ханипот, не правильно написал 😂🤷‍♂ (reply to 307285)

𝐈𝐥𝐲𝐚 | 𝐂𝐇 𝐦𝐞𝐝𝐢𝐚: Друзья, всем доброго вечернего!👋 Сегодня говорим за аутсорс разработку, TON и TMA. Залетайте все, кому интересно. Будем рады. Обещаю открытый микрофон

Ma><im: всем привет!  подскажите пожалуйста, как использовать ключ TONAPI с https://tonapi.io/v2/graphql?  в какой хэддер его класть?

булочки з паштетом/люфтваффельний свасторт: всем привет  есть какая-нить тулза для генерации vanity адресов с поддержкой preprocessed_wallet_v2? желательно на видеокарте

Daniel: Authorization: bearer TOKEN  https://docs.tonconsole.com/tonapi#authorization (reply to 307301)

Shon: Тебе нужен preprocessed_wallet_v2 с ванити адресом ? (reply to 307302)

булочки з паштетом/люфтваффельний свасторт: да (reply to 307304)

Василий: Через vanity контракт вы можете задеплоить абсолютно любой контракт:https://github.com/ton-community/vanity-contract (reply to 307302)

булочки з паштетом/люфтваффельний свасторт: а есть пример деплоя кошеля? у него ж owner_address нету вродь (reply to 307307)

Василий: owner_address в vanity относится только к контракту vanity. Вы можете отправить с адреса owner'а произвольный код и данные, и он заменит исходные на входящие. (reply to 307308)

булочки з паштетом/люфтваффельний свасторт: не понял немного (reply to 307309)

булочки з паштетом/люфтваффельний свасторт: а это, оно ж salt генерит, а мне нужен private_key

Василий: Оно генерит данные vanity. Далее вы отправляете сообщение на vanity адрес с state init с солью И данными/кодом вашего контакта в теле сообщения.  Пример там есть прямо в readme. (reply to 307311)

Robert: Помогите пожалуйста, не понимаю что не так.   Отправляю транзакцию, с адресом в Payload     const transferBody = beginCell() .storeUint(0x0f8a7ea5, 32)  .storeUint(0, 64)  .storeCoins(jettonAmountNano)  .storeAddress(contractAddressParsed) .storeAddress(sender.address)  .storeMaybeRef(null)  .storeCoins(toNano('0.1'))  .storeMaybeRef(       beginCell()           .storeAddress(AddressParsed)      .endCell()    )   .endCell();  Распаковываю в контракте:  int amount = in_msg_body~load_coins(); slice from_address = in_msg_body~load_msg_addr(); slice response_address = in_msg_body~load_msg_addr(); int forward_ton_amount = in_msg_body~load_coins();  дальше происходит ошибка 9 · Cell underflow  cell forward_payload = in_msg_body~load_ref(); slice payload = forward_payload.begin_parse(); slice address = payload~load_msg_addr();

&rey: Так вам же не приходить response_address и forward_ton_amount. (reply to 307313)

Shon: Могу для Python более развернутый пример скинуть. (reply to 307310)

булочки з паштетом/люфтваффельний свасторт: буду очень благодарен (reply to 307316)

Shon: Следуй инструкции, но вместо jetton_master создай contract так:  Если есть мнемоническая фраза: contract, _, _, _ = PreprocessedWalletV2.from_mnemonic(client, mnemonic) Если нет - создай новый: contract, _, _, mnemonic = PreprocessedWalletV2.create(client) print(mnemonic) ! Сохрани мнемоническую фразу.  Передай contract в build_deploy_body: tx_hash = await wallet.transfer(     destination=vanity.address,     amount=0.05,     body=vanity.build_deploy_body(contract),     state_init=vanity.state_init, )  После деплоя создай кастомный класс: class PreprocessedWalletV2Vanity(PreprocessedWalletV2):     @property     def state_init(self) -> StateInit:         vanity = Vanity(             owner_address=OWNER_ADDRESS,             salt=SALT,         )         return vanity.state_init  Теперь используй кошелёк как обычно: wallet = PreprocessedWalletV2Vanity.from_mnemonic(client, mnemonic)[0] (reply to 307317)

Robert: Что значит не приходить? (reply to 307314)

&rey: Я имею в виду, что получателю жетонов приходит сообщение в другом формате, где уже некоторых полей нет. (reply to 307319)

Robert: Получатель контракт, без этих полей тоже пробовал, ничего не меняется, amount читается без проблем, но начинаешь распаковывать адрес все падает. (reply to 307320)

&rey: А этот адрес из forward payload разве обязан прийти по ссылке? См. transfer_notification#7362d09c query_id:uint64 amount:(VarUInteger 16)                               sender:MsgAddress forward_payload:(Either Cell ^Cell)                               = InternalMsgBody; (reply to 307321)

гриба: там вайтлист стоит, чтобы на декс нельзя было их кидать (reply to 307269)

гриба: А, я думал вы стоите над тем, что продать их можно

Robert: То есть адрес как ссылка и поэтому не доходит? (reply to 307322)

&rey: Я говорю о том, что forward_payload может лежать в теле сообщения (сопровождаясь нулевым битом Either::Left) или в ссылке (единичка от Either::Right). (reply to 307326)

Hynter: На дех ты можешь кидать любую свою монету)))) главное то что, импортировать людям ручками нужно ее)) (reply to 307324)

Hynter: Не)) (reply to 307325)

PxAAMRSHLL: Hello world

⛰️ Roman ⛰️: Есть какое нибудь видео, которое наглядно показывает как работает смарт контракт NFT на FunC?

K🆓³³: https://stepik.org/course/201855/ (reply to 307339)

⛰️ Roman ⛰️: Я это уже смотрел

Sol: Пойдем я по видео связи покажу и объясню если хочешь (reply to 307339)

potato: Меня с собой возьмите (reply to 307342)

⛰️ Roman ⛰️: Не нужно, у меня на часах уже час ночи. Завтра если получится (reply to 307342)

Ivan: Привет! Подскажите пожалуйста. Отправляю сообщение на смарт-контракт через testnet.tonapi.io/v2/blockchain/message. Часть кода прикрепляю:  const openedWallet = client.open(wallet); const seqno = await openedWallet.getSeqno(); const transfer = openedWallet.createTransfer({   seqno: seqno,   secretKey: walletDetails.secretKey,   sendMode: sendMode,   messages: messages });  const boc = transfer.toBoc({ idx: false }).toString('base64');  const messagePayload = {   batch: [boc],    meta: {     wallet_address: walletDetails.address.toString(),     seqno: seqno.toString(),     send_mode: sendMode.toString()   } };  const response = await fetch(`${apiUrl}/v2/blockchain/message`, {   method: 'POST',   headers: {     'Authorization': `Bearer ${apiKey}`,     'Content-Type': 'application/json',     'Accept': 'application/json',   },   body: JSON.stringify(messagePayload), });  API возвращает 200 OK, но транзакция в сети не появляется. В чем может быть причина? Куда копать?

&rey: А как проверяете её отсутствие? (reply to 307347)

Ivan: Через tonviewer (тестнет версия) (reply to 307348)

Robert: Спасибо, понял где затупил (reply to 307327)

Марина: А есть ли что-то визуальное типо swagger но для смарт-контрактов на тоне? Чтобы можно было посмотреть на какой OP что можно передать и какие гет методы есть, какие в них параметры надо передать? Короче чтобы интеграция с фронтендом была удобнее?

&rey: Э... из байткода контракта в общем случае вычислить это невозможно... (reply to 307351)

Марина: Не, я для случая если у меня есть сам код контракта. Просто подумала, вдруг есть что-то по типу того, как мы описываем ручки бэкенда, когда ставим комментами инфу для генерации документации (reply to 307352)

Petr: Хм, но ведь это уже есть в коде и можно там глянуть 🤔 (reply to 307351)

Марина: Да,конечно, можно. Просто ситуация, что контракт пишет один человек, а другой, который разрабатывает фронтовую часть, должен просто отправить ему сообщение. Для него весь код контракта это просто темный лес и он в нем путается. Я сейчас просто присылаю примеры всех гет запросов и отправки сообщений из своего тестового кода на другом языке и он понимает что нужно сделать, но это блин как-то костыльно и неудобно 😬 (reply to 307354)

Нарек: Ребят всем привет, подскажите пожалуйста где можно найти похожие группы но с уклоном в sol dev?

Alex: Русскоязычных только одна ( остальные что есть мертвые ) (reply to 307357)

Нарек: а можешь подсказать как попасть туда? (reply to 307358)

Alex: Ссылку не напишу сюда )) (reply to 307359)

Нарек: в личку можешь кинуть

&rey: Ну вот такт экспортирует обёртку к контракту. (reply to 307356)

Сашкоу: Ребяр в рф можно оплачивать криптой?

Сашкоу: Видел видос парень в м@газе п0купал че то тетхером

Сашкоу: Antarctic Wallet

Bohdan: К чему это тут? (reply to 307372)

Сашкоу: Я просто у ребят спрашиваю мне интересно кто разбирается (reply to 307373)

Сашкоу: Я бар@н прошу зарание прощения

Bohdan: В чём? (reply to 307374)

Сашкоу: Оплата криптой в магазах (reply to 307377)

Сашкоу: Я слышал тут парень приложение писал не помню кто он

гриба: У них деньги в банке и они тебе их продают за крипту (reply to 307372)

гриба: Ты им qr сканируешь и по сбп оплата проходмт

Сашкоу: Спасибо

Сашкоу: Я кароче почитал ну это там куча тонкостей власти не хотят потомучто налогом не регулируется полноцено и еще надо кус обязательно

Сашкоу: Кароче пока сильного будущего и интерес у потребителей врятли будет наблюдатся

Сашкоу: Та же валюта только с большей ебатней была бы анонимоной это уже другой вопрос

гриба: Про анонимность это вообще странно, у тебя любое взаимодействие крипты с фиатом анонимность под вопрос ставит (reply to 307385)

Bohdan: Дропы надо, но это уже совсем другая тема (reply to 307386)

гриба: Да, мне кажется достаточно очистить крипту от своего адресса и уже потом на такие платформы заливать, если анонимность нужна (reply to 307387)

Combot: Combot выдал(а) предупреждение Сашкоу (1/3) Reason: 1 reports (reply to 307374)

K🆓³³: У этого сервиса нет KYC (reply to 307383)

Pasha: Ребят, извиняюсь, я может глупый, искал чаты по тон, наткнулся на этот. Лежат тоны без дела несколько лет. Мне интересно как работает стейкинг? В плане это безопасно? Не получится ли так, как напоимер в обменниках с бестчендж типа ооо у вас плохая крипта, мы ее забираем. Или что этот сайт/сервис по стейкингу сбежит с деньгами юзеров? Т.е. безопасно ли стейкинг например в tonkeeper использовать? Или все это лажа и лучше просто на холодном хранить и всё?

&rey: У каждого конкретного сервиса надо смотреть, какие контракты там обеспечивают стeйкинг (https://github.com/ton-blockchain/nominator-pool, допустим, или нет). Варианты с жетонами ("ликвидный стeйкинг") проверить сложнее. (reply to 307395)

Pasha: Спасибо. А есть ли какой то нормальный способ перегнать usdt tron в сеть ton? Минуя обменники которые блочат все подряд? На оф сайте тон нашел например layerswap, я так понял это децентрализованно и никаких kyc и блокировок там не может быть? Или на таких сервисах где надо сменить чейн тоже могут заморозить всё? Я уже боюсь где то менять, на бестчендже 2 недели морозили верификациями чтоб отдать мои 1500 долл купленные когда то давно на этом же бесте😂 (reply to 307396)

гриба: ff.io не лочит и быстро (reply to 307397)

— 2025-05-30 —

sna1l1: https://trocador.app/en/  Здесь можно посмотреть курсы и сравнить провайдеров на AML (reply to 307397)

кравлер kernel: Ребята,у кого есть тестнет +888?

User: Таких нет, но контракт можно сдеплоить в тестнете, если он нужен (reply to 307411)

Артур: привет, тестирую сервис по покупке нфт, подскажите, плиз, коллекции или нфт, которые можно через testnet купить?

гриба: Задеплойте свою коллекцию (reply to 307424)

Артур: не имею времени и возможности

Тимур: Зайдите в тестнет гетгемса и покупайте что хотите (reply to 307426)

гриба: Это делается меньше чем 30 минут (reply to 307426)

Артур: разобрался, спасибо!

⛰️ Roman ⛰️: а код аукциона nft, продажи nft должны быть написаны по какому то стандарту?

&rey: Ну, в общем и целом нет, а вот для популярных площадок надо пользоваться контрактами Getgems. (reply to 307443)

Kirill: Всем привет. Подскажите пожалуйста почему такое происходит при подключении кошелька в tonkeeper (и принципе любом приложении кроме самого тг), через комп не работает, через телефон работает

&rey: А страница с манифестом нормально грузится через браузер? (reply to 307476)

Kirill: Да, все открывается

Denis: Дайте ссылку (reply to 307476)

Kirill: Написал в лс (reply to 307481)

Denis: класика: HTTP/2 403  date: Fri, 30 May 2025 15:19:13 GMT content-type: text/html; charset=UTF-8 cf-ray: 947f35655bb4da89-CDG server: cloudflare

K🆓³³: Искал и не нашел популярные миксеры, почему они не пользуются популярностью?

гриба: кто-то неправильно настроил кф (reply to 307483)

гриба: и капчу на метадату поставил

Oleg: Потому что это незаконно? (reply to 307484)

K🆓³³: Миксеры?😁 (reply to 307487)

Denis: это неправда (reply to 307487)

гриба: миксеры законны (reply to 307487)

кравлер kernel: Как десплоитить? (reply to 307417)

User: Tonnel от фримана вроде один из самых популярных, можете потыкать его (reply to 307484)

кравлер kernel: ? (reply to 307493)

User: Скачайте контракт нфт с гитхаба(в tonviewer у нфт вы можете найти ссылку на репозиторий) и сдеплойте исходя из инструкции (reply to 307493)

кравлер kernel: Понял

Andy: парни, узнал тут о существовании мев ботов, которые в тон трейдинге помогают. Как про них узнать можно подробнее? Может чаты какие есть

&rey: Не думаю, что кто-то поможет вам разработать настoящий. (reply to 307499)

A n d Р е й: ребят подскажите я хочу пересесть на библиотеку pytoniq но в интернете только время 1.41 и там нет модуля кошелька, библиотека умерла?

&rey: Это, должно быть, скам: на гитхабе v0.1.40. Или что-то с релизами не так! (reply to 307505)

A n d Р е й: я решил через нейронку погуглить что да как она мне вообще врать начала про 1.6

&rey: А хотя нет, не умерла, вчера обновление. https://github.com/yungwine/pytoniq. (reply to 307505)

A n d Р е й: не могу понять с этой билиотекой вообще возможно создавать кошельки и работать с ними или только контракты в классическом понимании?

Vladimir: Вот с этого надо начинать. (reply to 307507)

&rey: На тоне кошельки вообще-то тоже контракты. Там всё и лежит, pytoniq.contract... (reply to 307509)

A n d Р е й: я это понимаю просто в подмодулях не вижу нужный мне

A n d Р е й: как буд то репозиторий съехал либо я не так что то делаю

&rey: А каких подмодулях? Там же всё экспортируется до уровня pytoniq.WalletV4. (reply to 307512)

A n d Р е й: значит не разобрался, есть документация с реальными кейсами или только гитбук?

&rey: Конечно, есть. В верхнем правом углу телеграма есть символ лупы, позволяющий открыть поиск. https://t.me/tondev/268448 (reply to 307515)

A n d Р е й: спасибо что помогаешь

Slava: Когда Вы пишите смарт, Вы к нему также пишете код-обертку на нужном языке и поставляете как библиотеку. В ряде случаев обертка может быть сгенерирована автоматически.  Фронтендер импортирует библиотеку и просто вызывает нужные методы. Самому конструировать сообщения ему не нужно (да и неправильно). (reply to 307356)

Марина: Спасибо за инфу👍👍 (reply to 307520)

Amos. #SweetPawTimmy: Hello, I would like to report a scammer on the TON blockchain. The wallet address UQAlJhVgBFbEDIxAQ4DQsXsm233TyiuuzTK4LQjxBHimS2uH is using a fake Jetton pretending to be USDT ($USD₮) to scam users into giving away NFT gifts.  I was personally scammed and lost two NFTs through this method. The token has no community verification and imitates the look of Tether USDT.  Please be aware and, if possible, blacklist this wallet and the fake Jetton.  Thank you.

гриба: It isnt big scam and you cant blacklist wallet of scammer. Just be careful in next time (reply to 307528)

гриба: And he dont use this wallet to sale your gifts (reply to 307528)

Amos. #SweetPawTimmy: can you help me with reporting him instead? i think he robs many nfts @malevikno (reply to 307530)

гриба: Support of telegram answers one time per month. Its unreal to get help from telegram support (reply to 307531)

гриба: You lost your nft =(

Amos. #SweetPawTimmy: yeah from my gf, that's why I'm kinda mad (reply to 307533)

гриба: But you tried sell it ahhaha

Amos. #SweetPawTimmy: she said it's ok with high price lol we two too greedy ig

— 2025-05-31 —

Combot: Combot выдал(а) предупреждение @ExtazzyPrime (1/3) Reason: 1 reports (reply to 307550)

Combot: @ExtazzyPrime has been temporarily muted for 86400 seconds

Bohdan: Ребята возник такой вопрос. Ми когда подключаем toncenter api или другой похожий сервис то вставляем апи ключ, но этот ключ хранится на клиенте, и кто-то очень умный может его достать и заабюзить. Что в таком случае делать, куда его спрятать? Есть какие-то идеи?

potato: Не хранить ключи или любые другие, так называемые, sensitive data на клиенте (reply to 307562)

Bohdan: А как тогда взаимодействовать пользователю с контрактом? Ему же чтобы вызвать функцию надо со своего кошелька отправить запрос, через бекенд так не получится потому что ему придётся передавать мне свой сид чтобы я дёрнул от его имени (reply to 307564)

&rey: Этот ключ там совсем не обязателен. (reply to 307562)

potato: Используй tonconnect, для этого не нужно передавать сид-фразу никому и токен там не требуется, только манифест приложения и подключенный кошелек пользователя (reply to 307565)

potato: Если делаешь запросы на toncenter/tonapi - с клиента делай запросы без api_key, у тебя будет лимит в 1rps (toncenter) и вроде 0.25 (tonapi) Если делаешь много запросов, нужно как-то продумывать и прокладывать стек запросов с таймаутами Чтобы в rps уложиться

Bohdan: А, точно. Убрал ключ и запросы все равно проходят. А для чего тогда тот ключ?

Denis: Если надо больше бесплатных лимитов (reply to 307569)

potato: Чтобы ты мог делать запросы чаще и твои запросы не блокировались (reply to 307569)

Bohdan: Я правильно понимаю что запросы от каждого отдельного пользователя не суммируются? Например если лимит 1rps то это для отдельного пользователя,  даже если пользователей тысяча (reply to 307571)

Denis: У тонапи это работает так: Есть лимит на проект в тонконсоли. Это то что написано на тарифе. Все токены вместе из одного проекта разделяют лимит.  Отдельно можно на токен дать ограничение что с 1 айпи не больше стольки-то что полезно для фронта. Тогда будет для каждого запроса проверяться два ограничения: на айпи и проект.  У тонцентра вроде +- также

Free D Man Vl.: Всем привет, меня сюда перенаправила поддержка, как купить домен который истек уже как 9 дней назад?

Free D Man Vl.: Здравствуйте! Чтобы начать аукцион для такого домена необходимо отправить специальное техническое сообщение. Подробная информация есть в чате разработчиков https://t.me/tondev

Free D Man Vl.: Дайте инструкцию пожалуйста что необходимо сделать для начала аукциона.

User: https://t.me/nftTONificatorBot можно вот в этом боте (reply to 307591)

Free D Man Vl.: Можно подробнее пожалуйста? Я никак не связан с программированием и не понимаю что нужно сделать. Этот бот ничего не делает. (reply to 307593)

sd: Можешь вставить домен в поле для ввода, нажать зелёную кнопку и подтвердить транзакцию act.ghwnd.cc/shared/dns (reply to 307594)

User: Или найти истекший домен на marketapp.ws, подключить кошелёк и нажать на кнопку продлить домен (reply to 307594)

Free D Man Vl.: Но это не мой домен, я хотел его перекупить, так как он истек у предыдущего владельца (reply to 307596)

User: Я не корректно выразился. Вы можете купить любой истекший домен, не только свой (reply to 307597)

Free D Man Vl.: Нажимаю и ничего не происходит, кошелек подключен (reply to 307595)

Free D Man Vl.: Здесь его нет (reply to 307596)

User: https://marketapp.ws/collection/EQC3dNlesgVD8YbAazcauIrXBPfiVhMMr5YYk2in0Mtsz0Bz/  Попробуйте ввести его вот здесь, внутри коллекции ton dns. Все домены вроде отображаются корректно (reply to 307600)

Free D Man Vl.: Благодарю 🙏 (reply to 307602)

sd: Нужно send нажать. (reply to 307599)

Андрей: Интерфейс прямо сильно перегруженный) (reply to 307599)

Free D Man Vl.: Согласен, для вас возможно это и смешно выглядит как для разбирающегося человека, хорошего дня. (reply to 307606)

Андрей: Я сам пользовался этим ответом (спасибо поиску по чату): https://t.me/tondev/134529  Адрес контракта брал с getgems. Примерную сумму брал с dns.ton.org на несуществующие домены с такой же длиной. Сумму указывал в нанотонах (умножал на 10 в 9 степени)  После отправки транзакции начинается аукцион на 7 дней (reply to 307592)

&rey: Ещё одна деталь: найти адрес можно, вбив в эксплорер <домен>.ton.resolve-contract.ton – как раз финальная часть этой магии. (reply to 307615)

sd: Ещё из неочевидного можно было бы обновить фронтенд тонднс. Там даже готовое решение лежит уже.

Slava: Я хочу поделиться важной информацией об использовании ключей TON HTTP API. Ниже приведены лучшие практики, которые мы обсудили с коллегами из toncenter.com:  1. Ограничения RPS: Каждый аккаунт toncenter имеет лимит на количество запросов. Более высокие тарифные планы позволяют выполнять больше запросов, что дает возможность большему числу пользователей одновременно использовать приложение.  2. Ограничение RPS по IP-адресу: Существует возможность ограничить RPS на основе IP-адресов. Если ваше Web3-приложение использует API-ключ на клиентской стороне, мы настоятельно рекомендуем включить эту настройку. Без неё ваш сервис уязвим для DOS-атак с одного IP-адреса.  3. Ограничения по доменным именам (CORS): Рекомендуется внедрить ограничения на основе доменных имен, особенно для Web3-приложений. Хотя эта мера не является абсолютно надёжной, она может помочь предотвратить несанкционированное использование вашего API-ключа в других веб-приложениях.  4. Использование обратного прокси: Поскольку вышеуказанные меры защиты могут быть обойдены, рекомендуется не раскрывать ключ API напрямую. Вместо этого рассмотрите возможность настройки обратного прокси. Это скроет ключ и позволит вам самостоятельно организовать защиту на своей стороне (если у вас есть для этого ресурсы).  5. Полноценный back-end: Наиболее надёжное и безопасное решение (хотя и непригодное для Web3), — это создание полноценной серверной инфраструктуры, включающей кэширование, ограничение запросов и аутентификацию.  Для полноценных Web3-приложений ситуация остаётся довольно сложной. Включение привязки к домену и ограничений RPS на основе IP-адресов может обеспечить работу сервиса в нормальных условиях. Однако в случае DDoS-атаки высока вероятность сбоя в работе сервиса, особенно для небольших проектов с низкими тарифными планами и ограниченным RPS. Это остаётся актуальным даже при наличии WAF для защиты от распространённых атак на стороне самого toncenter.  На данный момент единственным надёжным решением для Web3-приложений, которое я вижу, является предоставление пользователям возможности настраивать endpoint и API-ключ в приложении. Конечно, это негативно скажется на пользовательском опыте, однако откроет путь к настоящей децентрализации. У свободы есть своя цена.

potato: Хочешь чтобы мое приложение корректно работало? Иди в бота, получи ключ, напиши мне ключ, разберись в том, что такое endpoint Ответ пользователя: "пу-пу-пу...пойду-ка я отсюда..."  Если нет бекенда и приложение работает как полноценное web3 (front + bc), то есть лишь 2 варианта решения проблемы 1) Требуется логика, арифметика и немного времени 2) Деньги (reply to 307620)

potato: Начнем со второго, потому что он менее практичен и в целом нежелателен Ключ может быть разрешен для определенных доменов, например myapp.com  Покупаем тариф с запасом по rps или безлимитку  Далее просто оставляем на фронте и надеемся что пользователи его не сопрут и не будут забивать канал (его обязательно сопрут и будут использовать в хвост и в гриву)

potato: но если бабки не проблема - отличный вариант, потому что без напряга

Bohdan: С ethereum смарт контрактами все намного проще. Пользователь подключил metamask и все запросы идут через него. Жаль с тон так нельзя

&rey: Ну, просто приложение кошелька бывает выключено.. (reply to 307630)

potato: Теперь первый вариант (единственный верный для web3 на мой взгляд) Прежде чем писать запросы нужно хорошенько ознакомиться с доступными методами toncenter и tonapi и постараться найти такие, которые максимально покроют потребности и определить как частно нужно будет запрашивать эти данные.  - Запрашивать данные по мере необходимости, а не запихивать все в useFetchAllData(); (был такой хук на одном из проектов, который я чинил) - Кешировать данные с коротким exp_time. Ни в коем случае не засовывать их в голый useEffect() без проверки необходимости refetch'инга  В большинстве случаев одного запроса достаточно чтобы получить все необходимые данные на страницу  Для нескольких запросов можно предусмотреть запросы с setTimeout(fetch, 1000) и покрыть интерфейс скелетонами\плейсхолдерами  Для случаев когда надо сделать два запроса одновременно: 1 - запрос toncenter 2 - запрос tonapi

&rey: Ну, для мейннета есть ещё Orbs без такого лимита скорости.

Bohdan: А он вообще бесплатный? Цен я там не нашёл (reply to 307635)

potato: Много вижу про него но не юзал ни разу (reply to 307635)

potato: Очень мало проектов которые фулл web3

&rey: Помните и про dton, в котором можно делать умные запросы (GraphQL), и они даже иногда успевают завершиться вовремя.

Denis: Но надо быть готовым к тому что в самый ответственный момент когда все ломанутся в блокчейн оно ляжет (reply to 307636)

Tim: он ещё без лимита даунтайма (reply to 307635)

potato: Многие не умеют с ним работать и учиться не хотят, либо в падлу просто (reply to 307639)

Bohdan: Понятно. В этот момент отображать сообщение что сервис временно не работает или переключить на другого провайдера (reply to 307640)

potato: У всего есть цена) не хочешь rps и платить монеточкой - заплатишь иначе (reply to 307640)

Андрей: Для настоящего web3 не должно быть централизованных элементов чем являются api (reply to 307620)

Slava: К сожалению это не практично и фактически недостижимо для веб-приложений. (reply to 307650)

0x0: уверенное заявление. (reply to 307653)

🕵️: Привет всем. Есть ли варианты получать список жетон кошельков помимо Toncenter. Идеально если бы для этого можно было тонконнект использовать

Max: Тонконнект не для этого существует (reply to 307659)

🕵️: Это понятно. Но и тонцентр походу не для этого существует. Раз он умер в тестнете (reply to 307660)

🕵️: Какой самый оптимальный способ получать жетоны и нфт, помимо тонцентра?

/B4ckSl4sh\: тонапи пробовали? (reply to 307662)

Denis: https://testnet.tonapi.io/v2/accounts/kQCUqgn-Ix3kuzhPAkKKiqqXQazsJ98K3VSCi4QJ3ZTGC-5w/jettons

🕵️: О это он от анонима работает? 1rps?

Denis: буквально сегодня утром выше в чате обсуждали

🕵️: А как может быть 0.25 rps. Это вплане что запрос сделал и через 4 секунды только можно следующий? (reply to 307568)

🕵️: И еще вопрос. Tonapi также может отлететь? А то тонцентр больше часа не ворк

Denis: всё могут. чё уж скрывать. если мейннет у нас три индексера в трёх дц у двух хостеров, то тестнет на одной тачке ютится

🕵️: Я так понимаю гораздо надежнее свой ton-indexer поднимать. Конечно характеристики у него нехило жрут)

Denis: Попробуйте (reply to 307670)

Combot: Combot выдал(а) предупреждение Jack (1/3) Reason: 1 reports (reply to 307678)

potato: А есть ли в этом смысл? Содержать свой индексатор - недешевое удовольствие Особенно если тебе нужна гарантия надежности - ты ее не получишь. Твоя машина (будет честны), написанная не самым большим профессионалом в этой области будет уступать по надежности тем, кто специализируется на этом Обойдется такое удовольствие мб в 150-200$ в месяц (если брать сервера по заявленным в документации характеристикам) (reply to 307670)

User: Это уже в прошлом. Сейчас держать свой сервер, это минимум 500$(если хотите чтоб он хоть как-то стабильно отрабатывал)  p.s. hetzner имеет свойство вырубится и не отвечать по 3 дня :) (reply to 307688)

Denis: Ну вот всю малину испортил. Клиенты, которые сперва шишек набили, гораздо лояльнее (reply to 307688)

potato: Тем более тогда) По моему проще, быстрее и надежнее условные 10 тон заплатить и не париться вообще. Ну ок, отлетел у них тестнет. Загнал 10 ТОН на новый кошелек и гоняешь туда-сюда их в мейне. 100% выйдет дешевле и надежнее (reply to 307689)

User: Можно построить не сложный механизм, который при отсутствии доступа к апи, будет пытаться условно сброадкастить транзакцию через публичный лайтсервер(или делать любое другое действие через публичные лайтсервера и балансер) (reply to 307691)

potato: Все верно, поднимать свою ноду последнее дело (reply to 307692)

🕵️: 500, я думал там 1500-2000 будет. А так 500 это вообще копейки. Он в разы окупается (reply to 307689)

potato: А 2000 это 4 копейки получается) тоже очень дешево я считаю (reply to 307695)

🕵️: Сколько стоит тариф допустим на 10,000RPS (reply to 307698)

🕵️: Или в случае с tonapi unlimited тариф

🕵️: Я подозреваю где-то как раз в районе двух тысяч и стоит

🕵️: В итоге поднять свой индексер если это обходится в 500 баксов на месяц выгоднее

— 2025-06-01 —

Alexey: А в чем может быть причина 500 статуса по адресу https://sandbox-v4.tonhubapi.com/block/31697283/EQCVJZZqM8Ey7Pau3qzDTjRcHdM2nJ2TOjtH0cnyB1g-XboO? Туда ретрейсер ходит при эмуляции, и я не могу понять почему он падает. На тот же контракт буквально за пару секунд до того посылал excesses, открыл в ретрейсере - все работает, аналогичный эндпоинт https://sandbox-v4.tonhubapi.com/block/31697263/EQCAEpy6I-v_LZ5j0C-1DlUOj_snnTpCnBjgs91fOKTzbYNB открывается.

Alexey: Ещё раз спрошу, уже не 1 день это происходит, пробовал редеплоить контракт - не помогает. Посмотрел в ретрейсере еще прошлое сообщение в той же цепочке - он показывает exit code 9 как будто у контракта стейт пустой, хотя там есть данные и в tonviewer он отображается корректно. И баланс выглядит поломанным. Что с ретрейсером происходит? (reply to 307709)

Petr: Привет, а можешь попробовать прогнать ту же транзакцию на https://txtracer.ton.org? (reply to 307732)

Alexey: а как там на тестнет переключить? (reply to 307733)

Petr: А он автоматически это сделает

Alexey: пробовал через ссылку на testnet.tonviewer.com/..., и через хеш транзакции - оба раза ошибка, сейчас скрин пришлю

Petr: А можно еще хеш транзакции чтобы воспроизвести?

Alexey: да, сейчас, скину все (reply to 307738)

Alexey: Отмена, 2 а не 3, успешно трейсящихся вообще нет  - Подготовительная транзакция: e147cb6322918d3adf1199e571060366da07f391c776bbf07d74be4c9cee7bd7. Я корректность стейта после нее валидировал руками, там все ок, но ретрейсер ломается потому что считает что стейт пустой. - Собственно, транзакция с которой проблемы - 53454c6b785f94b404a1072979a87ba7f5945285fbf53a435776f381d7d93df7. Tonviewer говорит что она отработала успешно хотя после успеха должны быть еще сообщения, их нет. При попытке ретрейсить получаю 500 ошибку от https://sandbox-v4.tonhubapi.com/block/31754430/EQCVJZZqM8Ey7Pau3qzDTjRcHdM2nJ2TOjtH0cnyB1g-XboO

Alexey: Возможно, именно такие ошибки как-то связаны с тем что я удалял и редеплоил эти смарт контракты и они живут сейчас на тех же адресах. Но когда я первый раз их деплоил проблемы были те же. Сейчас попробую чуть поменять инит чтобы они отдеплоились на другие адреса, посмотрю что будет

Petr: Занятно, упала эмуляция у e147cb6322918d3adf1199e571060366da07f391c776bbf07d74be4c9cee7bd7

Alexey: очень странно, там вообще падать в эмуляции нечему, кода и логики минимум в подготовительной транзакции. И стейт корректный. Сейчас попробую редеплоить на другой адрес (reply to 307742)

Petr: Судя по всему shardAccount который в трейсере получается от clientV4.getAccount битый

Petr: 53454c6b785f94b404a1072979a87ba7f5945285fbf53a435776f381d7d93df7 а эта да, падает сразу на TonClient4.getAccount

Petr: Кажется что-то не так с TonClient4.getAccount

Alexey: я правильно понял, что это баг в https://sandbox-v4.tonhubapi.com/block/... (reply to 307747)

Petr: Сложно сказать...

Grigoriy: Йоу, есть какой то способ для расчета времени обработки цепочки транзакций?  А то транзакция обрабатывается уже 10 минут, апи не отдает, тонвьюер даже пендинг перестал показывать через 7 минут и полностью убрал из списка транзакций контракта

LowGas: Тон лег (reply to 307754)

⛰️ Roman ⛰️: за что отвечает msg_value "() recv_internal(int msg_value, cell in_msg_full, slice in_msg_body) impure {"? Это то, сколько тон отправили в контракт?

Grigoriy: Вчера в 20-23 по utc тоже долго обрабатывались транзакции, тоже тон отдыхал? (reply to 307755)

Andrey: Нет, такого как сейчас уже очень давно не случалось) (reply to 307757)

&rey: Ну, обработка экстернала никогда не гарантировалась. А интерналы по очереди дойдут. (reply to 307754)

Denis: то что чейнстак якобы имеет нулевую латенси это он просто не отвечает

Grigoriy: а можно ссылку в лс на стату? (reply to 307760)

Vladimir: https://tonstat.us/ (reply to 307761)

Grigoriy: спс

&rey: Ага. Нанотон. (reply to 307756)

Con: А кто-то знает как создать транзакцию с Bounce? (с возвратом)

Denis: Надо не ставить этот флаг. А как именно это не делать зависит от того как вы сейчас это делаете (reply to 307771)

&rey: Если даёте адрес пользователю – дайте тот, что на EQ. (reply to 307771)

Con: эм (reply to 307772)

A: Приветствую вас, подскажите пожалуйста какой кошелёк использовать для тон(тг кошелек,тонкипер, майтон)

K🆓³³: Для чего (reply to 307776)

&rey: А они почти взаимозаменяемы, просто мнемонику переложить в другое приложение... некастодиальные, конечно. (reply to 307776)

A: Ну допустим для покупок в тоннеле, фрагменте (reply to 307777)

A: Что касается комиссии? (reply to 307778)

K🆓³³: В тг кошельке переводы пользователям тг без комиссий (reply to 307780)

A: Какая комиссия при передаче из одного кошелька в другой?

&rey: Между некастодиальными – у себя переводить даже не надо, если мнемоника одна; другому меньше 0.01 тон. (reply to 307782)

K🆓³³: Смотря что передавать (reply to 307782)

A: Все те же тоны на другой кошелек (reply to 307784)

K🆓³³: Пару центов (reply to 307785)

A: У всех кошельков так?

K🆓³³: Сами кошельки обычно не берут себе комиссию (reply to 307787)

Андрей: Мне кажется вы немного ошиблись чатом - вопросы слишком базовые и легко самому посмотреть в кошельке С такими вопросами лучше в @toncoin_rus_chat (reply to 307782)

Ivan Ivanov: Привет! Что лучше: FunC, Tolk, Tact?

Petr: Привет Если вы только начинаете изучать TON, то Tact, он простой и понятный и у него лучшая документация из всех трех https://docs.tact-lang.org (reply to 307794)

Ivan Ivanov: Спасибо! Я просто делаю крутой проект и сам его пока тяну. Нужно будет сделать контракты для NFT (reply to 307796)

Petr: Пример реализации NFT можно глянуть тут https://github.com/tact-lang/tact/blob/main/src/benchmarks/nft/tact/collection.tact (reply to 307797)

Petr: Там же неподалеку есть реализация на FunC https://github.com/tact-lang/tact/blob/main/src/benchmarks/nft/func/nft-collection.fc

Ivan Ivanov: спасибо большое! (reply to 307798)

K🆓³³: Fift (reply to 307794)

Petr: Еще вот пару ссылок на документацию : https://docs.tact-lang.org/cookbook/nfts/ https://docs.ton.org/v3/guidelines/dapps/asset-processing/nft-processing/nfts

Ivan Ivanov: ну эт же прям низко (reply to 307801)

Petr: "Как же низко вы пали..."

Petr: Это из еще не смерженной ветки, но думаю этот код будет проще понять https://github.com/tact-lang/tact/blob/3298-use-structs-instead-of-buildingparsing-cells-in-benchmarks-nft/src/benchmarks/nft/tact/collection.tact (reply to 307798)

Andrey: Выглядит достаточно просто, особенно описанная структура DictGet 😅 (reply to 307805)

Petr: ехехе, да, пока break не добавим в foreach будет некрасивенько (reply to 307810)

Petr: особенно -> 1 0 2 вставляет

Denis: ну кстати было бы интересно почитать идентичные по функциям контракты написанные в нативном стиле на func, tolk и tact прям на одном экране (reply to 307810)

Petr: папка benchmarks/ в целом как раз об этом, были взяты официальные контракты на FunC и переписаны на идиоматичный Такт с сохранением логики и поведения https://github.com/tact-lang/tact/tree/main/src/benchmarks (reply to 307813)

Petr: На одном экране не поместится 😄 (reply to 307813)

Petr: Еле раскопал контракт на Толке https://github.com/xssnick/payment-channel-contract/blob/master/contracts/payment_channel.tolk

Petr: У кого есть желание переписать на Такте чтобы сравнить потребление газа? 😄

Denis: не знаю что там у вас за экран. (reply to 307815)

Petr: Так у FunC не влезла половина кода (reply to 307818)

Denis: для этого существует скрол.

Petr: О, а где можно найти версию на Толке?

Denis: https://github.com/ton-blockchain/convert-func-to-tolk/blob/master/tests/inout/jetton-minter.fc.tolk

Petr: О, спасибки

Denis: но это 0.12 и автоматическая конверсия. по сути просто замена синтаксиса. а там вышел 0.13 со структурами и надо уже руками переписывать

Petr: ага

Petr: FunC to Tact wen

K🆓³³: In Soontober (reply to 307826)

Denis: А в тоне же нет secp256r1? Только k1?

Denis: А если на твм примитивами писать то реально утрамбовать проверку подписи в один вызов?

Tim: А зачем в 1 если в любом случае дорого? (reply to 307835)

— 2025-06-02 —

Denis: Ну потому что разбивать на два это совсем дичь (reply to 307836)

Ruslan: всем привет.   никто не знает чем обосновано то, что в gobicycle на каждого юзера создается свой депозитный кошелек, вместо того, чтобы все платежи принимать на hot wallet сразу же? это же лишний газ

&rey: Тем, что могут переводить с другого кастодиала, а мемо забудут. (reply to 307888)

Ed: Всем привет. Я подключил в бота тон коннект. Использую библиотеку для go. Такой вопрос возможно ли получить ссылку на транзакцию, которая ждёт подтверждения, хочу внедрить её в кнопку?

Slava: Привет. Можно мониторить кошелек пользователя и когда в нем появится транзакция вывести её в приложении. (reply to 307945)

Ed: Там можно отследить транзакцию, которая ждёт подтверждения ? (reply to 307946)

Slava: А что там отслеживать, если транзакция ещё не выполнилась? В целом учитывая как быстро работает ТОН, то ничего страшного в том, что пользователь подождёт ссылку 3-5 секунд.

User: const result = tonconnect.sendTransaction() выдает вам, если я правильно помню  result.boc, через который вы можете отследить транзакцию(или вывести ее пользователя, то что она идет)  p.s. https://gist.github.com/mr-tron/a4b3e8eff3a982e3426f6397eb9a2450, скорее всего хеш совпадать не будет, но транзакция найтись должна (reply to 307947)

⛰️ Roman ⛰️: такой вопрос я пишу обертку для контракта и он выдает ошибку , что то типо "Argument of type 'Promise<SandboxContract<TreasuryContract>>' is not assignable to parameter of type 'ContractProvider'." . Я все перепроверил, оказывается что когда моя функция называется editMessage, то ничего не работает, но когда я переименовал ее в sendMessage то все заработало. Почему так?

Denis: https://docs.tonconsole.com/academy/transaction-tracking вот лучше мануал. больше кода меньше пространных рассуждений (reply to 307950)

SweetJesus: https://t.me/tondev/226677 (reply to 307961)

Киви: всем привет, кто может подсказать или дать пример, как сделать multihop транзакцию на stonfi через python?

⛰️ Roman ⛰️: метод ~load_slice существует? Мне при компиляции выдает FunC compilation error: ( function ~load_slice undefined )     cannot generate code for function ~load_slice:     contracts\my_contract.fc:26:27: error: ~load_slice           slice ctx_message = ds~load_slice();

Марина: Он в стандартной библиотеке,надо ее подключить тебе (reply to 307968)

&rey: А что он делал бы? (reply to 307968)

⛰️ Roman ⛰️: и так подключено (reply to 307969)

Марина: Перепутала с методом загрузки адреса, сорри) (reply to 307971)

⛰️ Roman ⛰️: slice доставал из запроса (reply to 307970)

SweetJesus: А что такое слайс у тебя? (reply to 307973)

&rey: slice — это просто подстрока бит и ссылок, которые лежали в ячейке. (reply to 307973)

K🆓³³: почему иногда объекты передаются как параметры в скобочках: (256, key, in_msg_body) иногда через точку: data.begin_parse() а иногда через тильду: dic~udict_set(...) в чем различия и где можно узнать про это

&rey: n = x~fn() — синтаксический сахар для (x, n) = ~fn(x) — либо, если первая не найдётся, (x, n) = fn(x). (reply to 307986)

&rey: n = x.fn() — сахар для n = fn(x).

⁣⁣ᅠ: Насколько я знаю в целом . от ~ отличается битовым смещением, ~ это до какого то бита, к примеру до битов queryid а . это смещение на 1бит вроде или типо того возможно чуть не правильно сформулировал (reply to 307986)

𝓐𝓵𝓮𝔁 𝓖𝓸𝓵𝓭: Подскажите это что такое? Фейк? Как выглядит настоящее предложение о покупке никнейм в телеграм?

Alexander: Всем привет. Я инитил блюпринт проект с func темплейтом, у меня почему то в jest.setup.ts buildAllTact. Это можно просто выпилить или заменить на buildAll? Похоже на ошибку в темпелйте

Андрей: Не тыкайте на кнопки которые вам отправляют левые контакты и будет вам счастье (reply to 307992)

/B4ckSl4sh\: Это знак свыше (reply to 307993)

Oleg: ~ это просто чтение с перемещением курсора Тут вопрос у человека был скорее об альтернативной записи функций, когда первый параметр это как self (reply to 307990)

Grigoriy: Всем привет, а что с блокчейном? Почему ext_out_msg не вылетают с контрактов

Grigoriy: Чуть разобрался, похоже апишки тупят, ton.cx видит, а все остальные нет (reply to 308002)

Seva: Здесь ещё можно почитать дополнительно про мутацию объектов: https://docs.ton.org/v3/documentation/smart-contracts/tolk/tolk-vs-func/stdlib#some-functions-became-mutating-not-returning-a-copy (reply to 307986)

𝐒𝐐𝐙 | 𝐍𝐄𝐒𝐒𝐘 #𝐾: .

𝐒𝐐𝐙 | 𝐍𝐄𝐒𝐒𝐘 #𝐾: У меня такой вопрос, если я при верификации аккаунта на фрагменте ввел неправильный юзернейм, что то будет?

⛰️ Roman ⛰️: я щас в каком то тупике, пытаюсь достать из in_msg_body опкод, но выдает ошибку cell underflow, я проверяю сколько битов в срезе, их 32, пытаюсь достать число, но все равно ошибка

Oleg: Глядя на ваш код, сразу видно, что в седьмой строке ошибка) (reply to 308013)

𝐒𝐐𝐙 | 𝐍𝐄𝐒𝐒𝐘 #𝐾: ? (reply to 308008)

⛰️ Roman ⛰️: я убрал почти все из кода, и ошибку выдает int op = in_msg_body~load_uint(32). Если заменить op = 4, то все работает и выдает ошибку о несуществующем опкоде, так как такого у меня нет (reply to 308014)

Oleg: А откуда уверенность, что не в load_data, например? (reply to 308017)

⛰️ Roman ⛰️: Ну когда я убираю load_uint(32), то ошибка происходит уже в конце функции, когда она не нашла нужного опкода. Разве не должны происходить ошибки, которые раньше? (reply to 308019)

🐼 Sild: А нет ни к кого под рукой примера газлесс транзакции?

Oleg: А если op = 10, как в ts вызове? (reply to 308018)

⛰️ Roman ⛰️: Ща, сек (reply to 308022)

⛰️ Roman ⛰️: тоже cell underflow (reply to 308022)

Oleg: Убери вызов load_data, чтоб убедиться (reply to 308025)

⛰️ Roman ⛰️: да, Вы были правы, ошибка в load_data. Я ее убрал и все заработало. Осталось понять почему ошибка там (reply to 308026)

⛰️ Roman ⛰️: спасибо большое

— 2025-06-03 —

(⁠✷⁠‿⁠✷⁠): Как обменять USDT на TON с помощью смарт-контракта STON FI?

Дмитрий: Скинул в личку (reply to 308037)

Андрей: А чего не в общий чат то, всем будет полезно посмотреть на код взаимодействия со смарт-контрктом (reply to 308040)

Дмитрий: Банят за ссылки (reply to 308042)

Андрей: Перечитайте правила, там только за ссылку в первом сообщении (reply to 308043)

Дмитрий: https://github.com/nessshon/tonutils/blob/main/examples/jetton/dex/dedust/swap_ton_to_jetton.py (reply to 308040)

AL Pamblus: Здравствуй чат.  Может кто-нибудь помочь?  у меня есть очень маленький диапазон ключей (например от 2-4). и адрес из этого диапазона.  нужно найти адрес, там лежит немного тон, их можно взять  (никакой не скам и т.д. я просто волнуюсь что в небольшом диапазоне ключей, адрес может быть другим..) что я всё верно сделал.

Dmitry | backend4you.ton: адрес (контракт) задеплоен?  могут быть разные версии контрактов кошелька (v3, v4, v5...) которые из одного и того же кюча дают разные адреса. Если ваш адрес в эксплорере отображается как задеплоенный - то там эксплорер показывает и версию вашего кошелька/контракта. Тогда вам нужно указывать соотв. версию в библиотеке с которой вы работаете.  Если не задеплоен - тогда вам придется перебирать все версии (но их немного в общем то) (reply to 308050)

author: Коллеги, пишу статью про действующие гейтвеи для тон сайтов, хочу для объективности найти овнеров прокси зон .run и .website которые уже перестали работать, может кто подсказать их контакты?

Ruslan: В gobicycle есть возможность депозитным кошельком сделать сам хот валлет? Потому что нельзя будет сгенерировать транзакцию в тон коннект на кошель, который незаиничен (флаг нон-баунс игнорируется в тон кипере)

Тимур: Так там форма адреса кошелька нужна правильная, а не флаг (reply to 308065)

Ruslan: Флаг включает себя в форму адреса же, если речь о френдли и тон кипер всегда превращает этот адрес в bouncable (reply to 308066)

Dmitry | backend4you.ton: мне казалось что так "плохо" он себя ведет только в тестнете, а в майннете формат адреса учитывается и флаг ставится правильно... (reply to 308067)

Krapka: Товарищи разработчики, а почему не получается сделать перевод USDT на W5 кошельке (на другой W5) без TON?

&rey: Потому что USDT – это просто особые состояния жетон-кошельков, а тон – нативный в чейне. (reply to 308080)

&rey: Без тона состояния контрактов не меняются.

X1ag: Разве такой метод существует? Многие используют ~load_msg_address(); (reply to 307968)

Krapka: Не совсем понял почему, ведь w5 как раз и сделан для оплаты газа с помощью USDT. Я предположил, что состояние контракта чтобы изменить нужна как раз оплата этого газа (reply to 308082)

&rey: Там ещё участвует магия под названием "батарейка" от какого-нибудь крупного сервиса. Она и даёт тоны. (reply to 308084)

Krapka: Так батарейка это вроде же другое 🤔 (reply to 308086)

&rey: Нет, как раз это; приложение подписывает интернал-ордер на перевод жетонов, дальше тонкипер его присылает с тонами со своего кошелька. (reply to 308087)

Krapka: Так батарейка доступна и на v4 кошельке (reply to 308088)

&rey: Вот там она на доверии+немного магии основана. Если я верно помню, то есть. Если неверно, @subden может напомнить. (reply to 308089)

Krapka: Спасибо большое) Я хотя отчасти понимаю, но до конца не представил ещё как работает (reply to 308090)

K🆓³³: Можно переводить $USDT и без батарейки https://t.me/tonkeeper_ru/290 (reply to 308088)

K🆓³³: Например, $jUSDT можно переводить без тонов, а батарейку ею не заправить

Denis: нет. батарейка и газлес это разные вещи хотя похожи (reply to 308088)

Krapka: Мне пишет что недостаточно средств (reply to 308094)

Denis: и там и там приходит релэер который оплачивает за вас газ. но батарейка списывает с кастодиального баланса и это закрытое решение для тонкипера и тонспейса (у mtw подобное свое было тоже). а газлес доступен каждому

Krapka: А мне? (reply to 308099)

Denis: и вам

Krapka: А чего пишет что недостаточно средств

K🆓³³: Это точно официальный токен USDT? (reply to 308102)

Krapka: Да, проверял через tonviewer (reply to 308103)

Indigo: Судя по истории чата, я уже понял что API у фрагмента нет, а как тогда работают сервисы для покупки звезд?   Вообще как можно автоматизировать покупку звезд кто- то знает? 🙃

Daniel: Через смарты, точнее взаимодействие с ними. Если нужна помощь, то могу вам сделать. Пишите в личку (reply to 308110)

K🆓³³: Может, у других сервисов есть? Например: http://api.split.tg/docs (reply to 308110)

K🆓³³: Также у них открыт исходный код @FishStarsBot — https://github.com/itanarchy/split-bot (reply to 308110)

Indigo: Вот как раз один из примеров, который как - то автоматизировал это (reply to 308112)

K🆓³³: Можно спросить в комментах @SplitTg (reply to 308114)

Indigo: А в чем интересно ценность этого API ? Почему разработчики не используют напрямую fragment? (reply to 308112)

Max: у фрагмента нет публичного API (reply to 308116)

Max: вот и ценность

Indigo: Типа междусобойчик друзьям только открыли доступ? (reply to 308117)

Vladimir: Прочитайте про реверс инженеринг. (reply to 308120)

Indigo: Но товарищ выше говорит что как- то реализует

Max: Ну так зареверс инженирили и упаковали в удобное API для всех (reply to 308122)

Max: Для этого пить вино на вилле у Паши Дурова не нужно  Да и рано Пескарю такое

Daniel: Смотрели по логам куда фрагмент отправляет запросы, с какими пейлоудами и прочее (reply to 308122)

#: здравствуйте, скажите почему при деплое get_collection_data() возвращает 7 exit code    global slice owner_address; global int next_item_index; global cell content; global cell nft_item_code; global cell royalty_params_v;  global cell nft_metadata_1; global cell nft_metadata_2; global cell nft_metadata_3; global cell nft_metadata_4; global cell nft_metadata_5;  global slice jetton_minter_address; global cell jetton_wallet_code;  () load_data() inline {     slice ds = get_data().begin_parse();         owner_address = ds~load_msg_addr();         next_item_index = ds~load_uint(64);         content = ds~load_ref();         nft_item_code = ds~load_ref();         royalty_params_v = ds~load_ref();     slice ds1 = ds~load_ref().begin_parse();         nft_metadata_1 = ds~load_ref();         nft_metadata_2 = ds~load_ref();         nft_metadata_3 = ds~load_ref();     ds1.end_parse();     slice ds2 = ds~load_ref().begin_parse();         nft_metadata_4 = ds~load_ref();         nft_metadata_5 = ds~load_ref();         jetton_minter_address = ds~load_msg_addr();         jetton_wallet_code = ds~load_ref();     ds2.end_parse();     ds.end_parse(); }  () save_data() impure inline {   set_data(     begin_cell()         .store_slice(owner_address)         .store_uint(next_item_index, 64)         .store_ref(content)         .store_ref(nft_item_code)         .store_ref(royalty_params_v)         .store_ref(             begin_cell()                 .store_ref(nft_metadata_1)                 .store_ref(nft_metadata_2)                 .store_ref(nft_metadata_3)                 .store_ref(                     begin_cell()                         .store_ref(nft_metadata_4)                         .store_ref(nft_metadata_5)                         .store_slice(jetton_minter_address)                         .store_ref(jetton_wallet_code)                     .end_cell()                 )             .end_cell()          )     .end_cell()); }    https://testnet.tonviewer.com/transaction/871852cedc066f22a72bd7b24af78e40ec87c929dbfb2c85aeb231f791abe6a1

(⁠✷⁠‿⁠✷⁠): А есть способ обмена USDT на TON через смарт-контракт STON FI на JS?

Seva: Сначала нужно распарсить верхнеуровневые ref из ds, потом вложенные из ds1 и ds2. Например, nft_metadata_1  уже из ds1. (reply to 308126)

#: я исправил у меня пишет undefined когда через гет метод получить владельца   () load_data() inline {     slice ds = get_data().begin_parse();         owner_address = ds~load_msg_addr();         next_item_index = ds~load_uint(64);         content = ds~load_ref();         nft_item_code = ds~load_ref();         royalty_params_v = ds~load_ref();     slice ds1 = ds~load_ref().begin_parse();         nft_metadata_1 = ds1~load_ref();         nft_metadata_2 = ds1~load_ref();         nft_metadata_3 = ds1~load_ref();     slice ds2 = ds1~load_ref().begin_parse();         nft_metadata_4 = ds2~load_ref();         nft_metadata_5 = ds2~load_ref();         jetton_minter_address = ds2~load_msg_addr();         jetton_wallet_code = ds2~load_ref();     ds2.end_parse();     ds1.end_parse();     ds.end_parse(); }  () save_data() impure inline {   set_data(     begin_cell()         .store_slice(owner_address)         .store_uint(next_item_index, 64)         .store_ref(content)         .store_ref(nft_item_code)         .store_ref(royalty_params_v)         .store_ref(             begin_cell()                 .store_ref(nft_metadata_1)                 .store_ref(nft_metadata_2)                 .store_ref(nft_metadata_3)                 .store_ref(                     begin_cell()                         .store_ref(nft_metadata_4)                         .store_ref(nft_metadata_5)                         .store_slice(jetton_minter_address)                         .store_ref(jetton_wallet_code)                     .end_cell()                 )             .end_cell()          )     .end_cell()); } (reply to 308131)

Roman: Ищу контакты в TON Foundation по поводу запуска токена с социальной миссией, интеграции в Telegram и создания DAO для благотворительного фонда.

K🆓³³: Для этого пить вино на вилле у Паши Дурова нужно (reply to 308136)

Seva: Попробуй impure для save_data и load_data, проверь гет-метод. Глянь в этом примере похожую реализацию.  https://github.com/gradoally/a-careers-smc/blob/main/contracts/master.fc (reply to 308132)

Seva: Попробуй TACT ещё, будет более дружелюбный синтаксис

#: спасибо (reply to 308139)

#: if (op == 1) { ;; deploy new nft          cell generated_metadata = nft_metadata_1;         deploy_nft_item(rand_range(to_nano(1), to_nano(11)), nft_item_code, in_msg_body~load_coins(), generated_metadata);          save_data();         return ();     }    async sendMint(provider: ContractProvider, via: Sender, value: bigint, owner: Address) {         await provider.internal(via, {             value,             sendMode: SendMode.PAY_GAS_SEPARATELY,             body: beginCell()                 .storeUint(1, 32)                 .storeUint(100, 64)                 .storeCoins(toNano("0.0485"))                 .storeRef(                     beginCell()                         .storeAddress(owner)                      .endCell()                 )             .endCell(),         });     }    можете подсказать почему nft не минтится? exit code 9  https://testnet.tonviewer.com/transaction/2f654c2f411b66ff40577eb4d178fef593f34021471909115040bf515f743064

#: nft_metadata_1 в сторадже

Seva: В load_data скорее всего ошибка, проставь dump’ы между строк в load_data и глянь где падает (reply to 308145)

#: я через retracer смотрел там видимо ошибка 9 из контракта nft-item (reply to 308147)

Seva: Значит там проставь dump’ы там, где парсишь

#: я в общем разобрался. у меня не работает nft_metadata_1 контент для нфт который я загрузил заранее в коллекцию, чтобы использовать (reply to 308149)

#: не понимаю почему он не может использоваться как метадата

&rey: А зачем умножать номер NFT на миллиард функцией to_nano? (reply to 308145)

#: индекс случайный задать (reply to 308152)

Seva: Может, составлено не правильно что-то на векторе сохранения-загрузки данных или в самом сообщении ошибка. (reply to 308151)

#: () load_data() impure {     slice ds = get_data().begin_parse();      owner_address = ds~load_msg_addr();     next_item_index = ds~load_uint(64);     content = ds~load_ref();      slice s1 = ds~load_ref().begin_parse();     nft_item_code = s1~load_ref();     royalty_params_v = s1~load_ref();      slice nested_1 = s1~load_ref().begin_parse();     nft_metadata_1 = nested_1~load_ref();     nft_metadata_2 = nested_1~load_ref();     nft_metadata_3 = nested_1~load_ref();      slice nested_2 = s1~load_ref().begin_parse();     nft_metadata_4 = nested_2~load_ref();     nft_metadata_5 = nested_2~load_ref();     jetton_minter_address = nested_2~load_msg_addr();     jetton_wallet_code = nested_2~load_ref(); }  () save_data() impure {     cell nested_1 = begin_cell()         .store_ref(nft_metadata_1)         .store_ref(nft_metadata_2)         .store_ref(nft_metadata_3)         .end_cell();      cell nested_2 = begin_cell()         .store_ref(nft_metadata_4)         .store_ref(nft_metadata_5)         .store_slice(jetton_minter_address)         .store_ref(jetton_wallet_code)         .end_cell();      cell s1 = begin_cell()         .store_ref(nft_item_code)         .store_ref(royalty_params_v)         .store_ref(nested_1)         .store_ref(nested_2)         .end_cell();      cell data = begin_cell()         .store_slice(owner_address)         .store_uint(next_item_index, 64)         .store_ref(content)         .store_ref(s1)         .end_cell();      set_data(data); }   () deploy_nft_item(int item_index, cell nft_item_code, int amount, cell nft_content) impure {   cell state_init = calculate_nft_item_state_init(item_index, nft_item_code);   slice nft_address = calculate_nft_item_address(workchain(), state_init);   var msg = begin_cell()             .store_uint(0x18, 6)             .store_slice(nft_address)             .store_coins(amount)             .store_uint(4 + 2 + 1, 1 + 4 + 4 + 64 + 32 + 1 + 1 + 1)             .store_ref(state_init)             .store_ref(nft_metadata_1); ;; content   send_raw_message(msg.end_cell(), 1); ;; pay transfer fees separately, revert on errors }     когда я ввожу контент для нфт из стораджа nft_metadata_1 то оно не работает и выдает exit code 9

&rey: Но вашей нфт надо опкод там и тому подобное, а не просто ячейку с метаданными? (reply to 308155)

#: async sendMint(provider: ContractProvider, via: Sender, value: bigint, owner: Address) {         await provider.internal(via, {             value,             sendMode: SendMode.PAY_GAS_SEPARATELY,             body: beginCell()                 .storeUint(1, 32)                 .storeUint(100, 64)                 .storeCoins(toNano("0.0485"))                 .storeRef(                     beginCell()                         .storeAddress(owner)                         .storeRef(beginCell().storeStringTail("").endCell())                     .endCell()                 )             .endCell(),         });     } (reply to 308156)

#: я поставил пустую метадату потому что хочу использовать из стораджа

Seva: Значит ты его не сохранил туда, проверь сообщение деплоя (reply to 308155)

#: я сделал гет метод чтобы он показал nft_metadata_1 (reply to 308159)

#: он показал его

&rey: А я про айтем, не коллекцию. (reply to 308157)

Seva: Тогда значит падает при парсинге в самом нфт, там надо на ините ошибку искать, либо в лоад дата перед инитом (reply to 308160)

&rey: Вопросы к deploy_nft_item. (reply to 308155)

#: если я буду это использовать тогда нфт сминтится, а если поставлю из стораджа тогда нет (reply to 308157)

#: https://testnet.tonviewer.com/transaction/2999ee4eac32d29483980bd63d5d627f8715b8f4dfd5cdbf2e22e00519c13987

&rey: Нуууу. А ваш айтем что ожидает во входящем сообщении? (reply to 308166)

#: я вообще взял стандартный код нфт айтема (reply to 308168)

#: не менял ничего кроме коллекции

&rey: Мой вопрос остаётся. Какие компоненты сообщения должны быть? (reply to 308169)

#: (int, int, slice, slice, cell) load_data() {     slice ds = get_data().begin_parse();     var (index, collection_address) = (ds~load_uint(64), ds~load_msg_addr());     if (ds.slice_bits() > 0) {       return (-1, index, collection_address, ds~load_msg_addr(), ds~load_ref());     } else {         return (0, index, collection_address, null(), null()); ;; nft not initialized yet     } } (reply to 308172)

Seva: Шальная идея. Попробуй не переназначать название nft_metadata_1 (reply to 308145)

Seva: Просто туда nft_metadata_1

#: а просто оставил in msg body load ref  а в deploy item заменил на nft_metadata_1 (reply to 308174)

#: не работает когда nft metadata 1

#: const encodeMetadataNft = (content: string): Cell => {         return beginCell()              .storeStringTail(content)         .endCell()     }

#: я по такому принципу в сторадж добавлял

&rey: А посмотрите, как делает "стандартная" коллекция. Вы запутались в большом количестве ячеек.

Seva: В функции deploy_nft_item ошибка, там надо store_ref(nft_content)

Seva: Либо её inline делать

— 2025-06-04 —

Combot: Combot выдал(а) предупреждение Андрей (1/3) Reason: 1 reports (reply to 308189)

Combot: Андрей has been temporarily muted for 86400 seconds

K🆓³³: Есть ли сервис для расчета доходности пула ликвидности для конкретного кошелька? То есть сколько было заработано на комиссиях, как повлияли непостояннын потери..

K🆓³³: И почему в интерфейсе дексов такого нет, там вроде простые формулы?

KTO: Чтобы на tonconnect ui сделать отправку USDT нужно обязательно знать адрес смарт-контракта кошелька пользователя?

&rey: Да, там обязательно знать JettonWalletUsdt(tonConnectSdk.account.address).address. (reply to 308201)

&rey: А вообще, можно же воспользоваться просто ton://transfer ссылкой, нет?

KTO: Да

Tim: Она очень ограниченно поддержана (reply to 308204)

Okixo: Доброе утро

David: привет всем , подскажите где взять тестовые TON?. я пишу бота с оплатой через крипто бота и для проверки работы системы я использую cryptotestnetbot . так вот где мне взять эту тестовую крипту

David: вот это открывается , а как мне этот адрес то пополнить ?

Nico: @testgiver_ton_bot (reply to 308215)

Scilef🦉: Всем привет  Кто делал нфт коллекции, помогите разобраться 🙏  В тестнете метаданные коллекции подгружаются ок, а метаданные айтема не грузятся При этом, тонскан видит метаданные корректно. Правда, больше никто их не видит, но почему-то он видит 😭

Denis: Предположу лишний нулевой байт в начале который тонскан игнорирует потому что так делает резолвер браузера, а все остальные не парсят мету на фронте (reply to 308218)

Scilef🦉: Проверю, спасибо за идею! (reply to 308219)

David: Спасибо , а там только 2 тона можно получить ? (reply to 308217)

GuruCod: А для тестов зачем больше? (reply to 308221)

Nico: 2 тона в сутки вроде (reply to 308221)

Denis: tonconsole.com или написать @f_closer в приват и объяснить зачем (reply to 308221)

David: спасибо всем )

K🆓³³: Раз в час (reply to 308223)

Nico: точно (reply to 308227)

David: у вас работат @CryptoTestnetBot. ?

Vladimir: Да. (reply to 308245)

AL Pamblus: интересно, почему сообщение удалилось

Vladimir: Стоп слова использовали. (reply to 308278)

AL Pamblus: Здравствуй чат. Я сделал TON Puzzle, как Biтcoin puzzle. с 1-21 адреса уже кто-то нашёл ключи. с 22-50 ещё нет.

AL Pamblus: Любой желающий может найти приватный ключ от кошелька, в котором лежит TON. Пока что там 3.4 тон раскиданы на адресах.  (У меня закончились TON)

maksim: привет, а можешь написать подробнее плиз? (reply to 308280)

AL Pamblus: я сделал web app/сайт на котором можно видеть диапазоны, адреса, баланс, активированные адреса и т.д.  Но отправлять сюда не буду, страшно, сначало разрешение надо.  Чтобы узнать о чем я гугли biтcoin puzzle это тоже самое но на TON (reply to 308282)

K🆓³³: https://t.me/tondev/308198 (reply to 308198)

Дмитрий: Могу реализовать за 20$ на python (Fast API) будет готовое апи у вас под данную задачу в течение сегодняшнего дня (reply to 308287)

Дмитрий: Написал вам

Tim: Ну за 20 баксов это очень ограниченно выйдет) Плюс будущего мы не знаем, а оно важно. Для дедаста был такой сервис который исторические доходности считает, если найду скину

sd: В дасетс считают что-то, обещают со временем считать лучше @dassets_bot

K🆓³³: Поч с твинка? (reply to 308290)

Дмитрий: Тут премиум нет, тебе только с премиум можно писать (reply to 308293)

K🆓³³: Тут почему с твинка

Дмитрий: Рабочий и основной аккаунт с клиентами. А не твинк (reply to 308295)

Tim: Я так слелал dedust.pools.cafe/

Indigo: Так можно только дырявый API юзать, нормальный закрытый API ты не сможешь так использовать, потому что доступ осуществляется по приватному ключу или вообще по IP (reply to 308121)

Оскар: надо понимать что под закрытым имеют ввиду что нет публичного референса где все расписали, а по настоящему "закрытым" его не сделать потому что я даже представить не могу как вы собираетесь прятать от клиентов приватный ключ и фильтровать по айпи (reply to 308301)

冬天: Мой usdt был переведен на адрес TON Huobi. Теперь Huobi не поддерживает пополнение usdt цепочки TON. Пожалуйста, помогите восстановить его.

冬天: Есть ли какой-нибудь чиновник, который может мне помочь?

&rey: Переводы в блокчейне неотзывны. Только сама биржа может сделать возврат. (reply to 308305)

冬天: Что это значит?

冬天: Могу ли я все еще вернуть средства в моей нынешней ситуации?

Кит среди рыб: всем привет как переделать я получаю от апи вот такой формат кошелтька 0:2e4f71df1e9eedac16e52c9924b2f4d51ac65aa286b51e0aac32a03b611f6c96  но мне нужно чтобы был UQAuT3HfHp7trBblLJkksvTVGsZaooa1HgqsMqA7YR9slvK-

&rey: Как-то так. Address.parse('0:2e4f...').toString({bounceable: false}) (reply to 308310)

Кит среди рыб: сп (reply to 308311)

nikita: всем привет, а нет готовой безопасной библиотеки на ноде чтобы парсить jetton transfer?

Андрей: Привет. Бота для отслеживания транзакций по токенам с отправкой сообщений по определенной логике есть желающие написать/запустить?

Daniel: Напишите в лс, готов взяться за разработку (reply to 308324)

Toffee: Коллеги добрый вечер, вот я положил в store_dict(new_dict) дальше я достаю от туда dict ~load_ref() и далаю list_nfts~udict_set(64, child_index, item); У меня ошибка тут возникает при компиляций, кто может подсказать в чем проблема?

Andy: Напомните пожалуйста ссылку на чат тма разрабов

Vladimir: https://t.me/tondev/305051  Все просто: ищите свои сообщения в чате, Вы часто задаете этот вопрос. (reply to 308332)

Andy: Да чёт я не справился, спасибо

Denis: 10 часов назад в чате спрашивали (reply to 308330)

K🆓³³: https://t.me/tondev/308224

K🆓³³: ну или так (reply to 308137)

Программистик: Они меня услышали наконец-то

sd: о, act добавили в tonviewer

Max: Это уже вроде полгода как есть там (reply to 308340)

Denis: Меньше недели. Это гет методы пару лет (reply to 308342)

Max: Так Макс конструктор ячеек этот полгода назад ещё мне показывал (reply to 308344)

Vladimir: Настаивался. (reply to 308345)

Scilef🦉: Лишний оффчейн тег был, спасибо за наводку! (reply to 308219)

— 2025-06-05 —

Алексей: bro @takeshi ответь пожалуйста в лс

Rossiee✨: Хаус, как мне заставить usdt использоваться в тестовой сети ton?

Sutako: А зачем, для тестовой сети свои токены, разницы нет, тебе же важно проверить код. Потом тестишь на мэйне, тестовая сеть не все показывает. Так то тесты на мэйне не очень то и дорогие, хотя зависит от того, что тестировать, я перекидывал между своими тестовыми кошельками, тратишь лишь комиссию. Используй тестовый кошелек, иначе можешь случайно слить сид фразу. (reply to 308368)

Oleg: Не знаю, кто такой Хаус, но тестовые токены можно сминтить самому в любом количестве. Назвать их USDT, например (reply to 308368)

GuruCod: Просто сделай минт и все (reply to 308368)

web-assist 🧀: Напиши адрес, отправлю тестовые usdt (reply to 308368)

⛰️ Roman ⛰️: тут такая проблемка, я задеплоил контракт в тестнет через blueprint, но в tonscan он неактив, страницу обновлял, но ничего не изменилось. С чем это может быть связано? https://testnet.tonscan.org/address/kQBmfyvtydi0NBEofnMQHnbPcQW23jsD4SS2EnpoPU4C9EBh#events

Андрей: Индексатор тестнета может отставать (reply to 308379)

X1ag: В тонвивер все ок, значит что то с индексаторами тестнета (reply to 308379)

⛰️ Roman ⛰️: Да, я заметил что мой у моего кошелька баланс старый отображается на тонскан, что то с тонсканом (reply to 308388)

F: Подскажите пожалуйста, как сделать так чтобы отображалось имя купленного домена в обозревателе и в истории транзакций

&rey: Задать на домене свой адрес привязанным кошельком. (reply to 308399)

F: Он привязан, но это ничего не меняет, имя не отображается и в истории транзакций вместо домена отображается адрес (reply to 308402)

&rey: Проверьте, что привязанный кошелёк владеет самой нфт. (reply to 308403)

F: Все так и сделал, купил и сразу же его привязал к этому же кошельку (reply to 308405)

/B4ckSl4sh\: что-то не пойму как в tonapi.liteserver указывать неполный id блока  block ID: (workchain,shard,seqno,root_hash,file_hash)  (-1,8000000000000000,4234234,-,-)  Что на место - ставить, чтобы просто найти нужный мастерчейн блок по seqno?

/B4ckSl4sh\: @subden можно подсказку, пожалуйста? (reply to 308409)

🐼 Sild: lookupBlock https://github.com/Sild/ton_lib_rs/blob/102df83e58e0c1cf94be312a663e164b3388a8fd/ton_lib/src/clients/lite_client/client.rs#L57-L57 (reply to 308409)

/B4ckSl4sh\: Всё еще не понял, честно говоря (reply to 308411)

🐼 Sild: ну там другой метод для такого

/B4ckSl4sh\: в тонапи такого нет) (reply to 308413)

🐼 Sild: упс, я думал liteserver значит liteserver =(

/B4ckSl4sh\: В обычном плюсовом ls я тоже что-то не помню, там кажется что угодно можно было указывать

/B4ckSl4sh\: а не, сори, реально lookup_block (reply to 308416)

/B4ckSl4sh\: Тут явно как-то это можно, потому что иначе это просто какой-то echo метод у тонапи ахпахахапхп (reply to 308409)

Denis: а там походу не прокинут просто метод лукап блок (reply to 308409)

Denis: https://github.com/ton-blockchain/ton/blob/master/tl/generate/scheme/lite_api.tl#L95

89: Какой способ сейчас наиболее рабочий в 2025, чтобы: выпустить Jetton с mint; подключить к backend (Node.js) для распределения по адресам?

Denzel': всем привет подскажите пожалуйста как лучше поступить. У меня есть ск, который принимает запрос от юзера, считывает данные из body и должен как-то получить еще данные из оракула(юзер не может заранее их предоставить). Всю основную логику реализовывать в другом опкоде(который принимает данные с оракула)? И получается те данные, которые приходили в бади, я должен вместе с транзакцией к оракулу прикреплять и чтобы оракул мне весь этот прошлый бади присылал обратно, но вместе с новыми данными?   Как лучше поступить? Если решения лучше?

Dmitry: В жетонах это сделано с помощью forwardPayload, он посылается на другой контракт как часть запроса, а другой контракт должен эти же данные неизменно приложить к своему ответу. Получается что полезные данные «сходили по кругу», но зато не надо «где-то хранить» (reply to 308424)

Denzel': понял, получается лучшим решением будет чтобы данные сходили по кругу, чем хранить, верно? (reply to 308425)

Dmitry: зависит от ситуации. если контракт "принадлежит" одному юзеру и не собирается получать несколько запросов одновременно - можно и в нём хранить (reply to 308426)

Denzel': нет, запрос идет на мастер контракт как раз таки. Спасибо за ответ) (reply to 308427)

Denzel': а когда я измению дикт из стораджа, мне нужно save_data применять чтобы изменения применились?

Dmitry: Дикт это просто «сложная переменная».  Хотите сохранить - дергайте сохранение (reply to 308431)

Denzel': понял, спасибо (reply to 308432)

— 2025-06-06 —

Дмитрий: Как проще отслеживать свапы пары ?

Дмитрий: Только смотреть все свапы и фильтровать нужные ? Если речь о TonApi например

User: Через query_id (reply to 308440)

Дмитрий: Так он разный у каждого обмена ведь, мне необходимо отслеживать все покупки нужного токена на дексах (reply to 308443)

Mirka: Отслеживай транзакции контракта нужного пула (reply to 308449)

89: Добрый день, пожалуйста подскажите, какой способ сейчас наиболее рабочий в 2025, чтобы: выпустить Jetton с mint; подключить к backend (Node.js) для распределения по адресам? Пробовал через func fift, не получилось..

Mirka: Просто выпустить жетон: minter.ton.org. Но для выпуска с начальным распределением лучше подходит mintless: https://github.com/ton-community/mintless-jetton (reply to 308452)

89: Спасибо🤝

Tand: @rulon привет, у проекта @mint есть доступ к новому стандарту NFT который вы щас хотите внедрить? и почему не опубликовано в TEPs?

Tand: Где изучить спецификацию вообще

кивель: Знает кто-нибудь почему архивные ноды публичные снова лежат?

Андрей: Стоит хотя бы уточнить их публичные ключи что бы иметь представление о каких публичных нодах вы говорите. Но обычно будет стандартный ответ - публичные ноды не гарантируют свой высокий аптайм, хоть и стремятся к этому. Если смотреть коммиты в ноду и появление этого файла, то можно сделать предположение что скоро будут улучшения в системе хранения и скачивания исторических блоков и тем самым стабильности архивных нод. (reply to 308467)

Andrey: @dtontech_bot => Archive liteserver :) (reply to 308467)

кивель: Ну платных решений достаточно на рынке, а я говорю конкретно про публичные архивные Лайт сервера (reply to 308485)

хард: парни, Добрый день, можете пожалуйста дать 2000 тестовых ТON?

хард: заплачу, если нужно.. (reply to 308498)

🐼 Sild: а есть сервисы которые умеют b64/hex boc читать в человечкочитаемую структуру, самостоятельно угадывая эту структуру?

хард: напишите в личку пожалуйста кто может поделиться (reply to 308498)

Namon: tonconsole.com (reply to 308503)

хард: за 2к тон, 40

Roki: Какие мысли про MEV на TON? Планирует ли кто заниматься поиском транзакций?

Andy: Недавно поднимал тему торговых ботов, сказали что ничего не расскажут😂 (reply to 308507)

Combot: Combot выдал(а) предупреждение хард (1/3) Reason: 1 reports (reply to 308505)

/B4ckSl4sh\: Tim делал, но название не вспомню. Ton-abi viewer или что-то такое (reply to 308502)

Vladimir: https://ton-cell-abi-viewer.vercel.app/ (reply to 308502)

🐼 Sild: пушка! (reply to 308515)

Petr: Было бы круто все такие инструменты поместить на единый сайт чтобы искать не надо было

Vladimir: Что-то вроде ton.app? (reply to 308518)

Vladimir: Там есть раздел Dev Tools, но им кто-то должен заниматься. (reply to 308518)

Petr: Я бы сказал полностью посвященный тулам

Petr: Вот сюда бы https://dev.ton.org/tools

Tim: На тонвьювере раздел тулзов появился кстати

Petr: Ага, недавно тоже заметил

Ali: Подскажите пожалуйста как начать аукцион на тон домен если у него закончилось уже время?

sd: Нужно воспользоваться поиском по чату. (reply to 308527)

Ali: Пытаюсь вот, сорян если глупый вопрос,  не могу найти пока инфу) (reply to 308528)

Denzel': всем привет а подскажите как сделать лучше. Когда юзер кидает транзу с опр. опкодом мне на мастер, я должен кинуть транзу на оракул и получить некоторые данные чтобы потом все эти данные перекинуть на юзер контракт(предварительно его задеплоив). Я вот думаю над тем чтобы заставить оракул отправлять транзу на юзер, вместо мастера, что думаете?

&rey: А если злоумышленник вместо мастера сам кинет оракулу запрос со своим forward? (reply to 308535)

Denzel': он не сможет, потому что будет стоять проверка на отправителя.  У меня сейчас схема выглядит так:  Кошелек юзера -> мастер контракт -> оракул -> мастер контракт -> юзер контракт  а я думаю над тем чтобы сделать:  Кошелек юзера -> мастер контракт -> оракул -> юзер контракт  разумно ли? и главное, безопасно ли?

Denzel': еще нужно учитывать что на оракул летят ~каждые 10сек транзакции для обновления данных (reply to 308537)

&rey: То есть, оракул уникален для вашей системы? (reply to 308537)

Denzel': на некоторое время да (reply to 308539)

&rey: В этой части архитектуры проблем вроде нет. Начнёте усложнять – могут появиться. (reply to 308537)

Denzel': хм. а какого рода проблемы могут быть? С перегрузкой? (reply to 308541)

&rey: Какой перегрузкой?  Появиться может такая проблема, что левый участник сможет своё сообщение отправить и непонятно какую часть схемы выполнить. (reply to 308542)

Denzel': понятно, спасибо (reply to 308543)

Denis: done (reply to 308524)

Программистик: Его давно пора сделать было

Vladimir: tonconsole.com (reply to 308553)

Vladimir: Testnet Assets (reply to 308555)

aaaaaa: Здравствуйте, уважаемые члены сообщества!  В настоящее время я работаю над тестированием, и мне нужно значительное количество токенов TON testnet (100+), чтобы продолжить выполнение моих задач.  Если бы какие-либо валидаторы или члены сообщества могли бы выделить большое количество токенов тестовой сети, ваш вклад очень помог бы мне в завершении моей работы. Я был бы очень благодарен за вашу поддержку!  Адрес моего кошелька testnet:  0QD15lVoaA6rJE-1uMBB3xQkf7euWURFtV8006AiaU9kpFj2  Большое спасибо за вашу щедрость и помощь!

Программистик: запросил тоны с двух аккаунтов (reply to 308557)

aaaaaa: благодарю (reply to 308558)

Molodoy Abuzer 3: На тон консоли можно КУПИТЬ за РЕАЛЬНЫЕ деньги ТЕСТОВЫЕ тоны (reply to 308557)

Alexander: Что за WALLET_ID и SUBWALLET_NUMBER? Там одно число, почему их тут два

Oleg: <v5r1 и >=v5r1, там же в скобках пояснение (reply to 308562)

Alexander: какое пояснение, то что он требуется это понятно, что такое WALLET_ID не понятно

Alexander: первый раз в жизни вижу такое - WALLET_ID

Oleg: Могу ткнуть пальцем в небо и предположить, что это число, с помощью которого от дефолтной мнемоники можно произвести кучу кошельков

Alexander: Для этого есть subwallet_id, который используется в стейт ините контрактов кошельков. Wallet id такого никогда не было, вот мне и показалось это очень странным (reply to 308568)

Alexander: При этом SUBWALLET_NUMBER там тоже есть

/B4ckSl4sh\: может просто описание кривое?  В в5 был только один обычный сабволлет, насколько я помню (reply to 308562)

Alexander: это или нейросеть или кто-то грибов объелся) (reply to 308571)

Alexander: да всегда был один обычный сабвалет и больше ничего не было (reply to 308571)

/B4ckSl4sh\: нейронка 100% (reply to 308572)

fgx: Как будто бы всё-таки кто-то грибов объелся

Gedeon: Привет. Я пытаюсь отправить немного TON с одного адреса на другой, используя этот код: https://pastebin.com/X1YVyB3p. Но он не работает (я взял этот код с https://docs.tonconsole.com/tonapi/cookbook). Транзакция создаётся (https://tonviewer.com/transaction/f88f04ac929eafc12b4ae493e2d6090b7202791b2ee88966f10e348129df2a34), но TON не переводится — почему?

Vladimir: 1. Ключи лучше затирать, если код показываете. 2. Попробуйте поиграться с value: toNano('0.05'), (reply to 308581)

Gedeon: Исправил на toNano, не помогло, все равно тон не приходит. (reply to 308582)

Gedeon: Транзакции есть, но эффекта нет.

&rey: Поле bounce: false попробуйте добавить в сообщение. (reply to 308581)

Gedeon: Сработало, спасибо огромное! (reply to 308585)

Gedeon: А что это за поле, почему не работало до этого? Это как-то связано с тем, что самая первая транзакция инициализирует кошелек?

— 2025-06-07 —

User: До того как вы инициализируете кошелек(отправите TON самому себе), кошелек считается неактивным, из-за чего без параметра "bounce: false" ваши TON будут боунсить обратно вам на кошелек, с которого вы отправляете TON.   После инициализации, вы можете слать на адрес средства с bounce: true (reply to 308587)

robi: Всем привет! Есть ли способ для получения всех последних транзакций в тоне? (для Jetton/Ton'ов).  Например в Tron'e, используя trongrid, можно получить с помощью /v1/blocks/latest/events. В Тоне все никак не могу найти подходящий способ.   Или может есть примеры кастодиального процессинга тонов/жетонов?

User: В TON имеются две основные апишки https://tonapi.io//api-v2 и https://toncenter.com/. Обе шустрые и работают адекватно, подберите ту что лучше подойдет под вашу задачу (reply to 308614)

Denis: Во всем блокчейне или по отдельным аккаунтам? (reply to 308614)

robi: В принципе по всему блокчейну, аккаунты уже проверяю локально. Вроде как нашел эндпоинт в toncenter "/api/v3/transactions", теперь только вопрос как понять когда транзакция это трансфер тонов/джетоннов, и как в принципе достать данные. (с какого кошелька на какой, количество, контракт) Может все же есть какие примеры такого парсинга? (reply to 308617)

Denis: А вы понимаете что тон горизонтально маштабируется и в бенчмарках показывал до гигабита блоков в секунду? Что будет с вашим софтом если количество транзакций скачком увелится в сто раз? В тысячу раз? (reply to 308618)

robi: Тогда как лучше будет поступить? Мне нужен обычный процессинг крипто-платежей на тоне (reply to 308619)

Denis: github.com/gobicycle/bicycle

Complex: Если вас интересуют именно платежи, а не депозиты, как в gobicycle, то можете посмотреть https://github.com/txsociety/spice-harvester. Это self-hosted сервис ориентированный на оплату инвойсов в тонах и жетонах. (reply to 308620)

Eugene: Рубрика «глупые вопросы»  Вижу, что проект Aqua Protocol объявил о закрытии и даёт месяц на вывод средств  Вопрос: правильно ли понимаю, что если какой-то TON-проект (не только этот) закрывается, то:  1. Позже у него отвалится сайт с кнопками, но контракты-то в блокчейне останутся...  2. ...и поэтому, вероятно, вывести средства можно будет и после месяца, но для этого надо будет знать, как правильно составить сообщение вручную?

X1ag: не факт. Учитывайте что код смарт контракта можно менять (reply to 308630)

rends_east: нет, т.к конкретно в случае с аква протоколом это означает, что они остановят оракулов, отвечающих за работу протокола А значит, и вывести средства фактически станет нельзя, поскольку оракулы не смогут указать цену aquausd по отношению к выводимым средствам (reply to 308630)

Eugene: А, не подумал об этом, спасибо  Ожидание: DeFi — децентрализованные финансы!  Реальность: без централизованного оракула из этого дефая даже свои деньги обратно не вытащишь (reply to 308635)

X1ag: есть протоколы которым не нужны оракулы, которые например все в самом ск считают (reply to 308636)

rends_east: не надо мешать DeFi в одну кучу Есть протоколы, которые не могут без оракулов, и аква протокол в их числе Конечно, если бы аква протокол взлетел, в дальнейшем было бы важно сделать оракулов более децентрализованным методом, однако на старте это в реальности никому не нужно, сложно, и так вообще вряд ли кто то на тоне делает (reply to 308636)

Zaur: Это как (reply to 308633)

rends_east: set_code и set_c3 в func (reply to 308639)

Eugene: Ну, я утрирую, есть разные ситуации, да  Просто когда крипту хвалят по принципу «тут вам не банк и ваши деньги просто так не отнимут», о подобных централизованных точках отказа зачастую как-то не говорят (reply to 308638)

Волчонок: Здравствуйте, нам для тестирования нужно 3,500 testnet  где можно их взять?

Волчонок: Можем обсудить покупку

Кит среди рыб: Подскажите как через тон конект отправить юсдт , тоны выходит а жетоны нет , есть какойто еще кошелек в тон блокчейне жетон кошелек но в кошельке только общий .

Toffee: Коллеги, добрый вечер Пытаюсь прочитать const dict = cs.loadDict(Dictionary.Keys.Uint(64), Dictionary.Values.Cell()); Создаю slice item = begin_cell()         .store_uint(half_share, 128)         .end_cell()         .begin_parse();        list~udict_set(64, child_index, item); Ошибка "No more references", Значения,  x{C_}  x{A000000000000000008000000000000000000000000000000A4_} Что я не так делаю?

Loasd: Здраствуйте, мне нужны тестовые тоны, можете мне их дать?

Vladimir: tonconsole.com (reply to 308644)

Oleg: @testgiver_ton_bot (reply to 308649)

Alexey: Может кто-нить помочь новичку? Я пытался скомпилировать пример из blueprint quickstart (https://github.com/ton-org/blueprint?tab=readme-ov-file). Не получается.  Может есть какая-то инструкция/пример получше?

X1ag: без конкретной ошибки трудно сказать в чем именно проблема (reply to 308661)

X1ag: а проект создан с помощью npm create ton@latest?

Alexey: да (reply to 308664)

X1ag: папка та?

Alexey: запускал в той, в которой выполнил blueprint create

X1ag: cd <project_name> сделайте и попробуйте npx blueprint build

Eugene: Можете попробовать из официальной документации тона, с этой страницы и далее: https://docs.ton.org/v3/guidelines/quick-start/developing-smart-contracts/setup-environment (reply to 308661)

Alexey: пробовал (reply to 308669)

Eugene: Ещё есть, например, https://github.com/romanovichim/TonFunClessons_ru  Но вообще подозреваю, что что-то не так с настройкой окружения, и тут без подробностей сложно сказать, что именно  Приведите все подробности (например, когда «не получается», вылезает ли какое-то сообщение?), может, кто-то поможет (reply to 308670)

X1ag: https://t.me/tondev/308668 ? (reply to 308670)

Alexey: момент

Alexey: TypeError: The "path" argument must be of type string. Received undefined (reply to 308668)

Alexey: TestTon/node_modules/@ton/blueprint/dist/utils/selection.utils.js:58:30

Alexey: попробовал запустить в папке contracts

Alexey: npx blueprint build ? Select contract to use (Use arrow keys) ? Select contract to use All Contracts

X1ag: по идее на уровень выше надо

Alexey: на уровень выше падает с ошибкой paths бла-бла-бла

Alexey: но ничего не скомпилировалось все равно (reply to 308677)

X1ag: ну это так и должно быть (reply to 308677)

X1ag: что-то типа такого должно быть

Alexey: а вот так нельзя? test_ton_c.fc

X1ag: сам контракт можно так назвать, но по идее все в camelcase должно быть. У вас там когда npm create ton@latest делаешь ошибку возвращает если проект не в camelCase назвать

X1ag: ваши действия вот должны быть:

Alexey: да, была ошибка, запускал еще раз  ох попробую еще раз в новой папке (reply to 308684)

Alexey: Your new project is ready, available commands:   >  cd testton  change directory to your new project   >  npx blueprint build  choose a smart contract and build it  ----  npx blueprint build TypeError: The "path" argument must be of type string. Received undefined     at Object.join (node:path:1261:7)     at /Users/~/proj/ton/testton/node_modules/@ton/blueprint/dist/utils/selection.utils.js:58:30     at Array.map (<anonymous>)     at findCompiles (/Users/~/proj/ton/testton/node_modules/@ton/blueprint/dist/utils/selection.utils.js:57:24)

Alexey: если запустить из contracts --- contracts % npx blueprint build ? Select contract to use (Use arrow keys) ? Select contract to use All Contracts --- и ничего не происходит

Василий: Попробуйте ноду обновить до хотя бы 20-й версии (reply to 308687)

Alexey: node -v v20.18.0

X1ag: если сделать cd testton и потом npx blueprint build то выдает ошибку "path" бла бла бла? (reply to 308687)

Alexey: да, ошибка (reply to 308691)

X1ag: а в пути есть русские символы, пробелы, точки?

Alexey: нет

Alexey: testton % npx blueprint build TypeError: The "path" argument must be of type string. Received undefined     at Object.join (node:path:1261:7)     at /Users/av/proj/ton/testton/node_modules/@ton/blueprint/dist/utils/selection.utils.js:58:30     at Array.map (<anonymous>)     at findCompiles (/Users/av/proj/ton/testton/node_modules/@ton/blueprint/dist/utils/selection.utils.js:57:24)     at async findContracts (/Users/av/proj/ton/testton/node_modules/@ton/blueprint/dist/utils/selection.utils.js:64:25)     at async selectContract (/Users/av/proj/ton/testton/node_modules/@ton/blueprint/dist/cli/build.js:14:23)     at async build (/Users/av/proj/ton/testton/node_modules/@ton/blueprint/dist/cli/build.js:47:26)     at async main (/Users/av/proj/ton/testton/node_modules/@ton/blueprint/dist/cli/cli.js:112:5) {   code: 'ERR_INVALID_ARG_TYPE' }

Alexey: "You need a compilation script in compilables/<CONTRACT>.compile.ts - example" Вот это надо обязательно?

89: Подскажите а как вы установили stdlib? У меня так и не получилось...

Alexey: не устанавливал. blueprint create его создал в папке contracts/imports (reply to 308698)

&rey: Да, у вас из-за его отсутствия и не определяется никакого контракта для компиляции, только "all contracts"... (reply to 308697)

Alexey: кажется я пропобовал с ним. 1. ожидаешь все-таки, что созданный тулзой пример готов к компиляции 2. все равно не работала (сейчас попробую еще) (reply to 308700)

Alexey: не помогает (reply to 308700)

Alexey: import { CompilerConfig } from '@ton/blueprint';  export const compile: CompilerConfig = {     lang: 'func',     targets: ['contracts/test_ton.fc'], };  так?

Alexey: имя должно с именем файла контракта совпадать?

Alexey: test_ton....? или TestTon.compile.ts ?

X1ag: TestTon.compile.ts

Alexey: тоже не работает (reply to 308707)

Alexey: я видел примеры, где stdlib.fc не в imports лежит, в contracts. меняли структуру, но в тулах забыли поменять?

X1ag: оно должно в импортах лежать (reply to 308709)

Alexey: в общем ни так ни так не работает TypeError: The "path" argument must be of type string. Received undefined

X1ag: вот так должно быть, где TestTon.compile.ts:  import { CompilerConfig } from '@ton/blueprint';  export const compile: CompilerConfig = {     lang: 'func',     targets: ['contracts/test_ton.fc'], }; (reply to 308711)

X1ag: все сбилдилось (reply to 308712)

Alexey: выбирали  A simple counter contract (FunC)  ? (reply to 308713)

Alexey: проделал еще раз все совпадает. все равно ошибка

Alexey: npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported  не может быть причиной? при создании примера вылетает

Alexey: npm warn Conflicting peer dependency: @ton/core@0.56.3

Alexey: npm warn node_modules/@ton/core npm warn   peer @ton/core@"^0.56.0" from ton-lite-client@3.1.0 npm warn   node_modules/ton-lite-client npm warn     ton-lite-client@"^3.1.0" from @ton/blueprint@0.35.0

Alexey: btw MacBook apple silicon. (reply to 308713)

Alexey: ну я уже не знаю где проблему искать 🥲 (reply to 308719)

89: У меня тоже была проблема с blueprint, я так и не решил ее

Василий: Попробуйте 22-ю версию. Сегодня человек сталкивался - решилось так.  Интересно то, что похоже проблема mac специфичная. На linux это не воспроизводится (reply to 308690)

89: У меня та же проблема на linux была (reply to 308688)

Василий: А версия ноды какая? (reply to 308723)

89: Я пробовал разные и 20 и 22

Василий: А после обновления локальные модули переустанавливали? (reply to 308725)

89: Да дело в том что у меня изначально была 22, я подумал может новая версия тупит и попробовал 20, но это ничего не дало

Alexey: обновил node до 24. создал все заново. не помогает  npx blueprint build TypeError: The "path" argument must be of type string. Received undefined     at Object.join (node:path:1261:7)     at /Users/alexey/proj/ton/TestTon/node_modules/@ton/blueprint/dist/utils/selection.utils.js:58:30

author: Попробуй 18,я на 18 смог свести все зависимости (reply to 308727)

Василий: Модули переставили после этого? Снесите node_modules А затем npm ci (reply to 308728)

Alexey: в новой папке проект создал после обновления. ничего (reply to 308730)

Василий: Буквально сегодня человек решил так: node 16->node 22 снёс модули npm ci  При этом у меня всё работало на 20-й ноде и не воспроизводилось (reply to 308730)

Василий: Именно через ci ставили? Чтобы никаких локальных кешей пакетов не использовалось (reply to 308731)

Alexey: попробовал не помогает (reply to 308732)

Alexey: npm cache clean --force   и так пробовал (reply to 308733)

Василий: А какой проект? npm create ton? А контракт на чём?  Сейчас попробовал FunC counter - не воспроизводится (reply to 308735)

Alexey: npm create ton@latest counter (FunC)

Василий: Загадочно (reply to 308737)

Василий: А вы точно в корне проекта находитесь, когда выполняете команду?  Воспроизвести не получается, но исходя из строчки где у вас падает пытаюсь что-то предположить (reply to 308728)

Alexey: да, в корне (reply to 308739)

Alexey: а без node.js как-то можно обойтись вообще?

Alexey: для компиляции контрактов

/B4ckSl4sh\: Можно, но это не особо удобно, не рекомендую (reply to 308741)

Василий: Переходим к отчаянным мерам В node_modules/@ton/blueprint/dist/utils/selection.utils.js  Воткните вот сюда const findCompiles = async (directory) => {     const dir = directory ?? (await (0, compile_1.getCompilablesDirectory)());     console.log(dir); (reply to 308740)

Василий: Ощущение что у вас там undefined, но я не вижу как

Alexey: как заставить это "npx blueprint build", чтобы оно печатало консоль в stdout?

Tim: А что в билде интересного может печататься?

Василий: npx blueprint build 2>&1 (reply to 308746)

Alexey: не печатает (reply to 308748)

ezji: всем привет, может кто знает как у дедаста считается кол-во LP токенов при provide liquidity?  допустим я заливаю 100 TKN + 1 TON => в итоге должен получить 100 LP  что будет в случае с 100 TKN1 + 200 TKN2?

Alexey: оно кэширует может? (reply to 308748)

maksim: sqrt(x*y), если они совместимы со спекой юнисвапа (reply to 308750)

Василий: В смысле не печатает? 2>&1 это редирект stderr в stdout.  Я думал вы ходите в лог оба потока сохранить.  А у вас что происходит? (reply to 308751)

Alexey: да (reply to 308753)

Alexey: но вылетает только ошибка

Alexey: console.log("TEST: ");     console.log("TEST: " + dir);  не срабатывает

Василий: npx blueprint build TestTon &> log.tx А так? (reply to 308754)

Alexey: или selection.utils.js:58:30 какой-то кэш надо сбросить после изменения файла/

Василий: Нет, такого точно не должно быть. А вылетает оно там же? (reply to 308760)

Alexey: TypeError: The "path" argument must be of type string. Received undefined     at Object.join (node:path:1261:7)     at /Users/alexey/proj/ton/TestTon/node_modules/@ton/blueprint/dist/utils/selection.utils.js:58:30     at Array.map (<anonymous>)     at findCompiles (/Users/alexey/proj/ton/TestTon/node_modules/@ton/blueprint/dist/utils/selection.utils.js:57:24)     at async findContracts (/Users/alexey/proj/ton/TestTon/node_modules/@ton/blueprint/dist/utils/selection.utils.js:64:25)     at async selectContract (/Users/alexey/proj/ton/TestTon/node_modules/@ton/blueprint/dist/cli/build.js:14:23)     at async build (/Users/alexey/proj/ton/TestTon/node_modules/@ton/blueprint/dist/cli/build.js:47:26)     at async main (/Users/alexey/proj/ton/TestTon/node_modules/@ton/blueprint/dist/cli/cli.js:112:5) {   code: 'ERR_INVALID_ARG_TYPE' }

Alexey: не печатает console.log (reply to 308762)

Alexey: я с node.js не дружу, если что

Alexey: onst findCompiles = async (directory) => {     const dir = directory ?? (await (0, compile_1.getCompilablesDirectory)());     console.log("TEST: ");     console.log("TEST: " + dir);     if (!(0, fs_1.existsSync)(dir)) {         return [];     }  вот так следал в файле TestTon/node_modules/@ton/blueprint/dist/utils/selection.utils.js

Alexey: должно же сработать при "npx blueprint build TestTon &> log.tx"

Василий: Может вы его внутрь if(!existSync ...) запихнули?  Это уже совсем мистика (reply to 308756)

Alexey: сonst findCompiles = async (directory) => {     const dir = directory ?? (await (0, compile_1.getCompilablesDirectory)());     console.log("TEST: ");     console.log("TEST: " + dir);     if (!(0, fs_1.existsSync)(dir)) {         return [];     } (reply to 308771)

&rey: А ошибка на которой строке? Если на const dir =, то поднимите логи, заменяя в них dir на directory. (reply to 308772)

Alexey: жесть оказывается в VCCode надо Save обязательно после изменения нажимать!  он сам не сохраняет!!! я из Java и JetBrains IDEA.  сорри, там все немного по-другому

Alexey: так вот  TEST:  TEST: /Users/alexey/proj/ton/TestTon/wrappers TypeError: The "path" argument must be of type string. Received undefined

Василий: Окей, тогда после compilables = ... ещё  const compilables = files.filter((file) => file.isFile() && file.name.endsWith(compile_1.COMPILE_END)); console.log("Compilables:", compilables); (reply to 308775)

&rey: Звучит так, будто у вас сам npm (стдлиба) повреждён. (reply to 308775)

89: Звучит так, будто у вас сам npm (стдлиба) повреждён. Вот у меня вообще с этой стдлиба была проблема..

Василий: По всем признакам падает вот здесь:https://github.com/ton-org/blueprint/blob/develop/src/utils/selection.utils.ts#L25  Т.е readdir вернул объект файла, с path либо name = undefined. Но по идее этого не должно быть никогда. Если ничего не найдено после фильтра, то должен быть пустой массив

Alexey: TEST:  TEST: /Users/alexeyvigerich/proj/ton/TestTon/wrappers FILES: TestTon.compile.ts TypeError: The "path" argument must be of type string. Received undefined (reply to 308776)

Василий: https://nodejs.org/docs/latest-v20.x/api/fs.html#direntpath  Задепрекейчено начиная с 20.12.  Но почему-то работает у некоторых

Alexey: path_1.default  с этим проблема?

Василий: Давайте попробуем так:  return compilables.map((file) => ({        path: path_1.default.join(file.parentPath, file.name),         name: file.name.slice(0, file.name.length - compile_1.COMPILE_END.length),    })); (reply to 308780)

Tim: А не лучше сначала попробовать в новом пустом энве повторить ошибку?

Alexey: Compiled successfully! Cell BOC result:  {   "hash": "7ffb1e9a5cdc30ffd475dcba1dab22c01e8c9b6c1b0398023dd04bbec8eeddc6",   "hashBase64": "f/semlzcMP/Uddy6HasiwB6Mm2wbA5gCPdBLvsju3cY=",   "hex": "b5ee9c7241010a010089000114ff00f4a413f4bcf2c80b0102016202070202cb03040067d1b088831c02456f8007434c0cc1c6c244c383c05b4c7f4cfcc4060841fa1d93beea6f4c7cc3e1080683e18bc05f80c2103fcbc20202730506001d3b513434c7c07e1874c7c07e18b46000193e10be107232c7f2c7f27b552002016e0809000db5473e02df0830000db63ffe02df0850db717aee" }

Василий: Уже всё делали. Непонятно почему не на всех билдах ноды оно задепрекейчено оказалось (reply to 308785)

/B4ckSl4sh\: проблема по итогу в каком-то экзотическом билде ноды у человека? (reply to 308788)

Василий: Ну официально это поле deprecated у всех билдов, начиная с 20.12 А в старых билдах его просто нет.  Но при этом у большинства это продолжает работать (reply to 308789)

89: Если резюмировать, что бы эту проблему обойти что нужно? Старая версия нода? (reply to 308791)

ezji: перепроверил через ui оказывается оно вычисляет LP по формуле: max(tokens_0, tokens_1) (reply to 308752)

Василий: Старая, но не сильно. 20.1 - 20.12 будет работать без патча (reply to 308792)

Василий: 18.17-18.20 тоже будет работать, если верить доке ноды (reply to 308792)

Tim: Я бы не сказал что 100%, но с высокой вероятностью это не так (reply to 308794)

Tim: Смотрите на больших пулах где много ликвидности и не ровный курс. Тот  же ton/usdt

ezji: интересует именно первичная поставка ликвидности (когда цены еще нет) (reply to 308802)

Gedeon: Мне нужно запросить из блокчейна историю транзакций по тону и по жетонам. Подскажите какую-библиотеку/сервис использовать?

Vladimir: tonapi/ton center. (reply to 308806)

🐼 Sild: а trans_ord это от слова Ordinary или от слова Ordinal?

d7: Как я понимаю мы внутри смарт контракта не можем узнать цену за jetton без использования оракула, есть пример использование оракула на Tact? Или придётся переходить на FunC?

/B4ckSl4sh\: Возможно вам поможет ончейн апи stonfi v2, но все зависит только от конкретного юзкейса (reply to 308810)

Gedeon: А какие конкретно методы мне нужно использовать что бы запросить историю транзакций по токенам/тону? (tonapi.io) (reply to 308807)

Mirka: Можешь ссылку скинуть, я найти не могу (reply to 308811)

Dmitriy: ordinary https://docs.ton.org/v3/documentation/data-formats/tlb/transaction-layout#ordinary (reply to 308808)

&rey: Можно. Прямым обменом на тоны, или что там у вас базой служит. (reply to 308810)

— 2025-06-08 —

𝓐𝓷𝓭𝓻𝓮𝔂🐈‍⬛: Доброе время суток, есть кто работал на fragment ?

Дмитрий: Исходя из моего опыта, я бы не рекомендовал работать с @kvgm10. Он постоянно меняет условия, добавляет правки, которые не были указаны в ТЗ, и при этом требует, чтобы всё это выполняли. Он не ценит время и хочет получить всю работу сразу, даже без предоплаты. В итоге оплату обещает только после того, как получает готовый проект с исходным кодом. Он меня не обманул, но после завершения работы я отказался с ним дальше сотрудничать.

Дмитрий: Проект залью на гитхаб в публичный доступ как вернусь домой

Кит среди рыб: чтобы тон конект создавал транзакцию в кошельке с usdt нужно же указать export const USDT_JETTON_ADDRESS = 'EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs'; адрес но мне падает ошбка как будто на этом адресе (скоторго я хочу отправить usdt ) нету кошелька жетона но он есть (и мне это говорит тон апи ) подскажите как пофиксить

L30n1d: Мне он сразу показался странным типом и он слился, когда ему сказали, что работаем с 50% предоплатой. Спасибо за информацию. (reply to 308840)

Дмитрий: Я ему по дну рынка делал при этом тк изначально все было очень просто) (reply to 308843)

potato: Не советую работать со @ScalienDev. С каждым заказчиком какие-то проблемы. То понос, то золотуха...  До этого ругался с @xramgift в чате tmabuild, как я понял оплату он полностью получил. Но почему то отказался передавать исходники, работу по итогу не сделал (кому интересно в ветке вакансии/резюме) Проблема однозначно в способности договориться с заказчиком и четко обозначит условия до начала работ имхо: по низу рынка работать такое себе (reply to 308840)

Дмитрий: Там вообще другая история совершенно и вы как третий лицо не зная деталей не пишите. Он вообще дал одну задачу, я сделал и оказалось что ему надо другой проект и просто возврат денег. (reply to 308848)

L30n1d: Да, есть такие заказчики, которые приходят с своим простым тз, по результатам понимают, что их тз не покрывает всех их мыслей, и начинают на ходу переделывать. Недавно челики несколько раз сильно меняли логику, в итоге остались недовольны. Спустя месяц скидывают контракт — типа смотри, вот так надо. А там уже другие команды/логика и не проходит их собственные тесты. Скинул вопросы об этом — не ответили.  В общем-то, их проблемы, нам они норм заплатили, и, видимо, пошли платить кому-то ещё, но остались должны 250usdt за последние правки. (reply to 308846)

Дмитрий: Аналогично с сообщением выше у меня был, но я хоть забрал всю оплату к счастью (reply to 308850)

potato: Да я в это лезть и не собираюсь, не первый раз вижу твой конфликт с заказчиком, отписал на всякий случай чтобы имели ввиду прежде чем начинать работу с конфликтным исполнителем - Верни лучше денежку. С такими личностями нет желания работать.  Одолжение мне делает скинет исходный код Я скидываю полностью готовую работа которую вы приняли и заплатили по факту выполненных работ. Вот вы тратите моё время, теперь ждите. - По факту я нечего не принял ты должен был позвонить и все показать. По итогу ты забухал. Через день 2 написал мне оскорбления в нормальном размере. Теперь дальше пишет что я что то принял. Ты о чём? Исходников тоже не увидите Всего наилучшего (reply to 308849)

L30n1d: Это похоже на нашумевший канал "прошмандовок русской эмиграции". Пора создать "прошмандовки тон сосаити"? 😅 (reply to 308852)

potato: не знаю таких каналов Вести какой-то рейтинг исполнителей было бы неплохо Приходится часто дорабатывать после местных "профи", которые потратили весь бюджет и время проекта (reply to 308853)

Дмитрий: Вы говорите лезть не хотите и выносите этот бред, не принимал он проект, тогда как я получил полную оплату ?! И почему меня не заблокировали если я обманул кого-то (reply to 308852)

L30n1d: Рейтинг заказчиков тоже пригодился бы (reply to 308854)

Дмитрий: Он тут по большей части и нужен, не понимаю что не сделали ещё такое. (reply to 308856)

Дмитрий: В общем всегда история совершенно одна , есть со всех сторон не довольные клиенты и исполнители.

Дмитрий: У меня такое происходит только когда проект какой-то мелкий и сами не знают что хотят. В крупных проектах таких проблем не возникало почему-то

Nick: Вы не в том чате воюете.  Это как придти на научную конференцию и доказывать всем окружающим, что земля плоская. (reply to 308854)

potato: Потому что это твои отношения с заказчиком а не проблема чата (reply to 308855)

potato: Не уверен, у меня недовольных клиентов нет. С ними договариваться нужно, желательно приватно. Тогда репутация разработчиков TON не будет страдать (reply to 308859)

Nick: Неудобных клиентов нет, есть маленькие чеки. Михаил Токовинин.

Satoshi: Есть те кто понимает как реализовывается комиссия в жетонах на покупку и продажу, как в скам токенах где такса 99%, очень надо для проекта(должна быть 15% такса и каждые 5% должны распределяться по трем разным кошам).Пожалуйста помогите или подскажите, есть задумка под очень классный проект(который на 85% уже реализован), выделены ресурсы на рекламу и тд а вот такая передряга происходит, если честно я уже сомневаюсь что стоит на тоне это все дело реализовывать, слишком все сложно тем более для такой тоновской ликвидности. Если кто может помочь или подсказать пожалуйста отпишите @taiakin

Mirka: Если жетон кошелек принадлежит дексу, отправлять меньше, чем списывать со счета. Только вас никто с таким контрактом не залистит (reply to 308879)

Satoshi: ? (reply to 308880)

Satoshi: Кош деплоя?Как он может принадлежать дексу?

L30n1d: А что значит покупка/продажа?  Или речь о том, что при трансфере токенов с жетон-кошелька, часть этих жетонов или доп. жетоны должны куда-то отправиться, помимо получателя? (reply to 308879)

Satoshi: Чувак берет свапает свои тоны на жетоны, 15% тонов должно перехватываться по идеи (вроде так работает) и распределяться по трем кошам, а человек должен получить на 15% меньше жетонов (reply to 308884)

L30n1d: Какой-то скам — чел покупает 100 жетонов, а получает 85? (reply to 308885)

Satoshi: Да (reply to 308886)

Satoshi: Но тут смотри какая задумка

Satoshi: У дева будут бабки на развитие проекта за счёт оборота и не надо продавать свою долю обваливая цену

Satoshi: блт мои смс удаляются :(

L30n1d: Я не уверен, но, наверное, соглашусь с предыдущим комментатором, что нормальные дексы такое не примут, но можно создать свой контракт для продажи жетонов и заложить туда такую логику. (reply to 308889)

Mirka: Про свой контракт продажи я и не подумал. А то с моей идеей будут проблемы с двойным списыванием комиссии при срабатывании слипейджа (reply to 308893)

Satoshi: Смотри, сам по себе я не тон разработчик, я просто +- понимаю поверхностно как что работает. Я могу не совсем понимать тебя.

Satoshi: Да ну тоесть не совсем понял в чем отличие того что вы сказали и я сказал. Чисто за счёт уровня подготовки. Есть смарт контракт и надо сделать так чтобы была комиссия на покупку и продажу, это же по идее и так и так реализовываеться смарт контрактом (reply to 308893)

L30n1d: В стандартном смарт-контракте жетона вообще нет логики покупки/продажи (reply to 308896)

Satoshi: Тоесть покупка продажа это вообще надстройка? (reply to 308897)

L30n1d: Да, это отдельный смарт-контракт, который реализует логику обмена тонов на жетоны, жетоны на другие жетоны или как-то ещё (reply to 308898)

Mirka: Либо вы делаете комиссию на уровне жетона и тогда он при каждой пересылке будет проверять, кто его отправляет/получает и, исходя из этого, будет списывать комиссию, либо вы делаете стандартный жетон, а комиссию закладываете в контракте, который занимается обменами этого жетона. Первый вариант применим для всех DEX, но его скорее всего не залистят(логика стандартного жетона нарушена). Второй вариант — это буквально создание собственного DEX и в этом случае обмены вашим жетоном на других DEX не будут облагаться комиссией(жетон на DEX может добавить кто угодно) (reply to 308896)

Дмитрий: Писать контракт кастомный (reply to 308898)

L30n1d: Всё верно (reply to 308900)

Satoshi: Короче надо будет жертвовать дексом (reply to 308900)

Satoshi: А ревардники вроде же выходят на декс

L30n1d: Я бы не назвал это прям DEX, ибо DEX это всё же платформа с кучей логики. А кастомный контракт для продажи жетонов — распространённая практика и это не сложно. (reply to 308900)

Scilef🦉: Сомневаюсь, что cex залистят такое (reply to 308903)

Mirka: Их не листят, пользователи должны импортировать их (reply to 308905)

Satoshi: Понял, ну честно я готов жертвовать этим

Mirka: То есть, они есть на DEX, ими можно торговать, но рядовой пользователь их не увидит (reply to 308905)

Satoshi: У меня маркетинг базируется на топовых инфлах и ТД. Без декс суриннера так без декс суриннера (reply to 308910)

L30n1d: Есть ещё сценарий, когда ребята создают свой контракт для продажи, что-то типа пресейла или самой первой выгодной продажи, набирают так пул, а потом уже идут на DEX со своим жетоном. (reply to 308907)

Satoshi: Интересный однако вариант, правда это не мой случай :) У меня случай ревардника но с другой економикой (reply to 308913)

Satoshi: Тоесть чтобы не было раздач холдерам но комса была

Satoshi: Когда много холдеров то эти дивиденды вообще рассеиваются

Satoshi: И комса в 30% больше бьёт чем даёт

&rey: А мне вот не совсем понятно, почему другие модели не применяют. Например, фиксированную стоимость разработки, а дальше команде ноль.

Satoshi: Типо разработчик получает за свою работу награду только 1 раз? (reply to 308919)

L30n1d: Такое тоже делают. По сути, это тоже самое, если тебе заплатят фикс за разработку сразу или предложат процент от доходов проекта, или комбинацию этих подходов. Связано с тем, что не у всех есть капитал для старта. (reply to 308919)

Alexey: Как получить баланс FunC 0.4.6 ? 🙂

&rey: Четвёртый с конца аргумент recv_internal/recv_external, или get_balance().first(). Будут нанотоны. (reply to 308924)

Alexey: Error: FunC compilation error: contracts/ton_salary.fc:75:44: error: cannot apply function first : Forall (A) tuple -> A to arguments of type [int, cell]: cannot unify type [int, cell] with tuple           int balance = get_balance().first(); (reply to 308925)

Alexey: [int, cell] get_balance() asm "BALANCE";

Alexey: вот так скомпилировалось [int balance, cell extra_currencies] = get_balance();

Alexey: это будет работать?

Alexey: ---

Alexey: Мне AI сгенерил такой код:              send_raw_message(                 begin_cell()                     .store_msg_flag(MSG_FLAG_REMAINING_GAS)                     .store_slice(recipient)                     .store_coins(amount_to_send)                     .store_msg_state_init(0)                     .store_msg_body(0)                 .end_cell(),                 SEND_MODE_PAY_GAS_SEPARATELY             ); но компилятор выдает такую ошибку: Using func version 0.4.6... ⏳ Compiling...contracts/ton_salary.fc:86:55: error: undefined function MSG_FLAG_REMAINING_GAS, defining a global function of unknown type                       .store_msg_flags_and_address_none(MSG_FLAG_REMAINING_GAS)  Устаревшее?

&rey: Нейросети, как бы, тон не знают. (reply to 308931)

Alexey: ну, частично... что-то генерят ) (reply to 308932)

&rey: Что лучше — если нейросеть скажет "я не знаю" или "я нашла сервис, просто переведите на EQCy... столько-то, и всё будет хорошо"? (reply to 308933)

Alexey: шаблон они могут сгенерить. (reply to 308934)

Alexey: надо же с чего-то начинать, когда совсем ноль в среде ) (reply to 308934)

&rey: Есть целый docs.ton.org.  Наверно, надо рекомендацию против LLM закрепить. (reply to 308936)

Alex: Когда совсем ноль - ai вообще лучше не юзать, я считаю что ai только для сеньоров, которые закрытыми глазами могут отрефакторить то в чем рутинно могут помочь ai ( именно рутина ). А вам изучать исходники разных проектов по ton на github и курить,курить доку (reply to 308936)

Alexey: ну я ноль в FunC а вообще в программировании не ноль ) (reply to 308938)

Alex: Так тем более тогда доку и вперед (reply to 308939)

X1ag: да, нейронки в func по дефолту не могут как в тот же питон условный. Максимум что они могут это в такт что-то написать и то коряво, поэтому дока - твоя llm :) (reply to 308940)

Scilef🦉: Ну не скажу, Клауд справляется худо-бедно Но с одним условием, если ты сам не полный ноль. Разобраться хотя бы на 40% придётся  Ну или закладывать х5-х10 ко срокам "разработки" 😂

fifteenth floor: ну есть вариант еще доку загрузить в нейронку в курсоре есть такая функция, но тогда разработчик становится промптинженером

Alexey: Хм, а кодревью через клауд можно делать? Или ты его только для кодогенерации использовал? (reply to 308944)

Scilef🦉: Как по мне, лучшая история это когда разработчик становится тех лидом и делает ревью, иногда руками допиливая в помощь "работнику") (reply to 308945)

Scilef🦉: Что ты имеешь ввиду? (reply to 308947)

Oleg: Не знаю нейронок общего назначения с контекстом таких размеров. Это надо с нуля натаскивать ллм на доке (reply to 308945)

Alexey: Я хочу скормить код смарт контракта который я написал и протестировал нейронке, чтобы она посмотрела и, возможно, нашла какие-то ошибки. Вот и думаю, стоит ли в целом затея свеч, и что нужно скармливать - только код проекта с пояснениями или ещё и доку тона нужно каким-то образом загрузить чтобы нейронка про него хоть что-то знала (reply to 308949)

Alexey: А всю доку загрузить контекст порвется

Alexey: вот так нормально справляется с TON.  включены Think и Search  он находит доки

fifteenth floor: не-а, в контекст курсора добавить подобную доку очень легко, там достаточно нажать пару кнопок и вставить ссылку а потом просто упомянуть доку в самом промпте (reply to 308950)

Scilef🦉: Не настолько, скорее, она может объяснить что-то, но 100% анализа ждать не стоит Я пробовал пару раз что-то из разряда "найди ошибки" или "проверь что всё ок", это не помогло избежать ошибок даже на этапе компиляции (reply to 308951)

Scilef🦉: Плюс, они часто галлюцинируют на stdlib и документацию И путают тон с соланой или евм

fifteenth floor: ну вот это правда (reply to 308956)

Scilef🦉: Так что это скорее useful инструмент для ревью, через него можно умеренно моделировать поведение в различных условиях, но перепроверять надо в любом случае

Scilef🦉: А всё остальное - наглая ложь?😂 (reply to 308957)

Alexey: Перепроверять само собой. Чтож, если useful для ревью - попробую, напишу сюда потом что получилось (reply to 308958)

fifteenth floor: афхыуахщзыу нет ну просто это самое больное в этой теме всей (reply to 308959)

Tsunamu: Можно кто тон дать на тесте плиз?)

Vladimir: @testgiver_ton_bot (reply to 308967)

Alexey: Подскажите как логировать внутри контракта? FunC / Blueprint jtest

X1ag: ~dump() ~dumpstr() (reply to 308973)

X1ag: это больше не про логирование, а про console.log какой нибудь

X1ag: https://docs.ton.org/v3/documentation/smart-contracts/func/docs/builtins#dumping-a-variable

Alexey: ~strdump он stdlib?

X1ag: () ~strdump(slice str) impure asm "STRDUMP"; (reply to 308978)

Alexey: хм у меня нет

Alexey: единственное, что есть  ;;; Dumps the stack (at most the top 255 values) and shows the total stack depth. () dump_stack() impure asm "DUMPSTK";

Alexey: 🔧 Using func version 0.4.6... Error: FunC compilation error: contracts/ton_salary.fc:173:31: error: cannot apply expression of type (slice, ()) to an expression of type () -> (): cannot unify type (() -> ()) -> ??279 with (slice, ())           process_monthly_payout();

Alexey: ~strdump("Иначе это команда");

/B4ckSl4sh\: Нет, это builtin как store_uint (reply to 308979)

X1ag: да, сори. В stdlib ее нет, оно внутри вшито как бы (reply to 308984)

— 2025-06-09 —

GuruCod: Где вы нашли этот контакт? (reply to 309013)

Daniil: Фейк (reply to 309013)

Андрей: Сами в личку написали 😁 Это из той же категории когда в ватсаппе звонит "роскомнадзор" и говорит установить приложение для защиты от мошенников 🌚 А то что любой пользователь может так называться людям в голову не приходит 🤷‍♂ (reply to 309015)

GuruCod: А ну если сами то это точно сотрудники безопасности банка) (reply to 309023)

potato: Как гифт превращается в нфт?

Егорка: Улучшением, или ты про что (reply to 309025)

Егорка: Потом минт через 21 день

Andrei: Всем привет! Подскажите, через что возможно вытащить флор прайсы коллекций на getgems/fragment? (интересуют именно цены на ТГ гифты, которые не в телеграме, а ончейн)

potato: toncenter.com (reply to 309034)

Andrei: Благодарю! (reply to 309036)

Георгий: tonconsole работает? авторизоваться не могу, по биртокену для вебхуков запрос 401 отдает

Denis: прилегла база. счас поднимется

icyvlady: всем привет. подскажите пожалуйста, есть ли у кого-то доступ к API метрик Tonnel/Portals/MRKT? до фаундеров довольно проблематично дописаться:( заранее спасибо за ответ

Alexey: подскажите как отлажтвать (FunC, blueprint) контракт должен отправлять              send_raw_message(                 begin_cell()                     .store_uint(0x18, 6)          ;; Флаги сообщения (0x18 = 0b011000)                     .store_slice(recipient)                     .store_coins(amount_to_send)                     .store_uint(1, 1)               ;; ihr_disabled = true                     .store_uint(1, 1)               ;; bounced = true                     .store_uint(0, 64)              ;; created_at = 0                     .store_uint(0, 1)               ;; Нет state init                     ;; .store_uint(0, 1)               ;; Нет тела сообщения                     .store_slice("monthly payment")                 .end_cell(),                 1 ;; SEND_MODE_PAY_GAS_SEPARATELY             );  в тестах распечатал log(sending1.transactions);  как достать "monthly payment" из распечатанных транзакций?

Alexey: в смысле проверить есть оно там или нет

Seva: А в чём проблема транзакцию тестами обложить подобным образом?  https://github.com/gradoally/a-dao/blob/de7eeab636032f7bd9e54aac03494ea60cb0dbd0/tests/ADaoMaster.spec.ts#L181  Можно и на консоль значения вывести. (reply to 309126)

Denis: починили (reply to 309108)

&rey: эти флаги слегка не на месте, они уже включены в 0x18 (reply to 309126)

Alexey: спасибо! учту (reply to 309132)

&rey: там должно быть .store_uint(0, 64) за created_lt, (0,32) за created_at, (0,4) за fwd_fee, (0,4) за ihr_fee, в каком-то не помню каком порядке — но раз там нули, разницы нет

Seva: Это вывод комиссий на консоль табличкой. А конкретные значения из сообщения можно через .transactions вытаскивать как здесь: https://github.com/gradoally/a-careers-smc/blob/c41c48b94d3917a364b7fdf83184502af8e1874e/tests/AlfaMaterCore.spec.ts#L146  Не обязательно expect делать, можешь и console.log

&rey: Я декодировал экстернал-ауты вот так: https://github.com/ProgramCrafter/wallet-contract/blob/c4e9271abae8abe554a82e7d34f8c87b073acd8e/test-wallet-inplug-v2.ts#L86. С интерналами работает так же. (reply to 309127)

Seva: У него без body походу (reply to 309139)

Seva: Вопрос. Зачем без body делаешь? Ты бы monthly payment в боди запихнул и во врапперах прописал. (reply to 309126)

Alexey: а ретрейсер на тестнете окончательно помер? Есть какой-нибудь стандартный способ отлаживать контракты step-by-step в локальной песочнице?

Alexey: фиг с ним с отлаживать, хотя бы просто воспроизвести (reply to 309145)

Alexey: так  с body же, вот:          log(sending1.transactions[0]); ------ <ref *1> {   address: 30603383869023867343557915493399069403622291885338548950804676036039174921777n,   now: 1752067649,   outMessagesCount: 1,   inMessage: {     body: x{3AC738003F41214181BDF76C3D133956A8B9411D2851E7656701E4538B069F09C_}      x{D001}       x{62006E2359D394634F64CAB1A70CB862F3C0F0052D25A5F9484284A70287E4D61846202FAF080000000000000000000000000000}   },   outMessages: Dictionary { (reply to 309144)

L30n1d: Его работа зависит от фазы луну или чего-то такого. То работает, то 500 ошибку кидает (reply to 309145)

Alexey: на моем контракте стабильно умер уже месяц как, может он слишком сложный для него, хз. (reply to 309149)

/B4ckSl4sh\: txtracer.ton.org тоже не работает? (reply to 309145)

Alexey: ага (reply to 309151)

L30n1d: тоже 500 возвращает (reply to 309151)

/B4ckSl4sh\: а можно ссылку на транзу и краткое описание того, что там может быть экстраординарное? (reply to 309152)

/B4ckSl4sh\: Если есть код для воспроизведения то совсем прекрасно будет, если поделиться готовы (reply to 309154)

L30n1d: не, это не так работает на одном и том же контракте у меня то работало, то нет (reply to 309154)

Alexey: вот конкретно в том сообщении на котором сейчас упал ничего экстраординарного, как ни странно (reply to 309154)

Seva: Ну вот, теперь body проверяй вот так вот  https://github.com/gradoally/a-dao/blob/de7eeab636032f7bd9e54aac03494ea60cb0dbd0/tests/ADaoMaster.spec.ts#L165 (reply to 309148)

/B4ckSl4sh\: то есть нестабильно падает? (reply to 309150)

Alexey: https://testnet.tonviewer.com/transaction/78f39238a592466b235dbfb187b7a790b518da8572ce637c5145c125562a8aa3

Seva: Ну вот, теперь body можно проверить вот так вот  https://github.com/gradoally/a-dao/blob/de7eeab636032f7bd9e54aac03494ea60cb0dbd0/tests/ADaoMaster.spec.ts#L165 (reply to 309148)

Alexey: падает стабильно, я имею в виду что в операции на которой он сейчас падает действий почти нет (reply to 309159)

Alexey: а до того падал на более сложных операциях. На этой скорее всего тоже падал, но я не проверял - она без отладки правильно работала

Alexey: log(sending1.transactions[0].inMessage!.body.beginParse().skip(32).loadStringTail());   Invalid string length: 225  как я надеюсь, там должна быть строка "monthly payment" Как декодировать Cell, в которой строка?  body: x{3AC738003F41214181BDF76C3D133956A8B9411D2851E7656701E4538B069F09C_}    x{D001}     x{6200696681D162BE935330B726DAC3AE8680E2152CB71B450DB640CE9A771960D128202FAF080000000000000000000000000000}

⛰️ Roman ⛰️: вопрос, никнейм в телеграм это тоже НФТ контракт, в теле которого указано для какого никнейма этот контракт? или как это работает?

Alexey: можешь пока подсказать какой-нибудь способ получить лог TVM локально, без ретрейсера? Есть какой-то варик кроме отладки через ~strdump()? (reply to 309159)

/B4ckSl4sh\: В сендбоксе логи включить (reply to 309172)

/B4ckSl4sh\: blockchain.verbosity.vmLogs = "verbose"  (Или любой другой режим в зависимости от потребностей)

Alexey: блин, я плохо сформулировал наверное. Там будет такая же последовательность выполненных инструкций, как в ретрейсере? (reply to 309173)

/B4ckSl4sh\: Их ещё можно в TonDevWallet отправлять и трейсы как в тонвьюэре смотреть (reply to 309173)

Petr: Более того, ретрейсер выполняет ваш код в sandbox с логами и на их основе строит трейс (reply to 309175)

/B4ckSl4sh\: import {SendDumpToDevWallet} from "@tondevwallet/traces"  await SendDumpToDevWallet({transactions: liqDepositDeployResultBadRatio.transactions as any}) (reply to 309176)

&rey: Что-то в body не хватает 32-битного опкода 0 ("текстовый комментарий"), и байт не целое количество. Будто ещё 35 бит где-то потерялись. (reply to 309170)

Mikhail: всем привет! подскажите, какие решения с оракулами на тоне являются наиболее популярными? Вижу Pyth и RedStone есть. В контрактах EVAA нет инфы, какой оракул они используют.

maksim: еще есть stork, https://docs.stork.network/ (reply to 309184)

maksim: Штормы используют взвешенное среднее между пифом и сторком, https://docs.storm.tg/protocol-mechanics/price_feeds  про еву не знаю

maksim: использований редстоуна в проде не видел

Mikhail: спасибо! а я правильно понимаю, что тот же шторм написал свой релеер, который получает данные от пиф и сторк и пушит их в свои контракты? (reply to 309185)

maksim: да, но релеер тут для надёжности и оптимальности работы, как я понимаю, можно и без него, ончейн логика секьюрная сама по себе (reply to 309188)

Mikhail: интересно, посмотрю тоже. Спасибо большое! (reply to 309189)

Alexey: и снова всем привет! Есть какая-нибудь апиха, позволяющая получить slice со структурой ShardAccount?  export type ShardAccount = {     account?: Maybe<Account>;     lastTransactionHash: bigint;     lastTransactionLt: bigint; };  Контекст: мне в локальных тестах нужен USDT мастер и сами токены, и я хочу через такую апиху получить слайс ShardAccount для USDT мастера и минтера с тестнета, загрузить их в песочницу через blockchain.setShardAccount() и вызывать в тестах как обычные контракты

/B4ckSl4sh\: Проверьте методы лайтсервера, кажется ровно эту структуру он возвращает в одном из методов (getAccountState или что-то такое)  P.s. можно через tonapi.liteservers, мне именно тонапи клиент под ts больше всего нравится (reply to 309194)

/B4ckSl4sh\: Хотя для конкретно такого можно и руками пойти один раз с экплорера код и дату скопипастить и просто в тесты вставить (reply to 309194)

Alexey: Вот в том и проблема, что нельзя просто скопипастить код и дату, их еще положить в sandbox надо. Единственный метод который я знаю для этого - это blockchain.setShardAccount(). И как я понимаю, туда нужно много всего положить помимо кода и даты (хотя для эмуляции мне нужны только они, да). Буду благодарен, если подкажете вариант лучше. Мб можно вообще фигню положить в значения, главное чтобы код и дата были правильные? (reply to 309196)

/B4ckSl4sh\: От юзкейса зависит, но кажется вам больше ничего и не нужно (reply to 309197)

/B4ckSl4sh\: Это правильный подход, так и надо (reply to 309197)

/B4ckSl4sh\: Тут вопроса совсем не понял, честно говоря (reply to 309197)

🐼 Sild: он Account возвращает, в ShardAccount надо будет ручками упаковвывать (и сериализовать) (reply to 309195)

🐼 Sild: поддержу что копировать из вьювера боки Tx, Msg, ShardAccount/Account было бы крайне удобно

Alexey: ну вот там например сидит в глубине такая структура:  export type StorageInfo = {     used: StorageUsed;     lastPaid: number;     duePayment?: Maybe<bigint>; }  Мой вопрос в следующем: Будут ли проблемы, если я для тестов создам объект контракта не копируя данные баланса и storageStats? Обращаю внимание, что в storageStats я забил нули а в баланс просто 100 TON.   const testUsdtMaster: ShardAccount = {     account: {         addr: Address.parse('0:f418a04cf196ebc959366844a6cdf53a6fd6fff1eadafc892f05210bba31593e'),         storageStats: {             used: { cells: 0n, bits: 0n, publicCells: 0n },             lastPaid: 0,         },         storage: {             lastTransLt: 35550063000003n,             balance: { coins: toNano('100') },             state: { type: 'active', state: { code, data } },         },     },     lastTransactionHash: 0xf1386750327f1de4efdb2a8a5d3c3d47108cc37f66840070c2bdff5a6ce1eb1en,     lastTransactionLt: 35550063000003n, } (reply to 309202)

ezji: всем привет, подскажите пожалуйста для чего нужен second_owner_address в nft-collection-editable-v2 ?  https://github.com/getgems-io/nft-contracts/blob/6a1932321ab3169b69dc083f80965247dfaa2878/packages/contracts/sources/nft-collection-editable-v2.fc#L201

User: ;; second owner address cant change "primary address"  Скорее всего, чтоб условный минтер посадить на этот second_owner, который если что, можно будет сменить с основного мультисига (reply to 309207)

Alexey: посмотрите, такое сообщение должно увеличить баланс получателя на amount_to_send. так?             send_raw_message(                 begin_cell()                     .store_uint(0x18, 6)          ;; Флаги сообщения (0x18 = 0b011000)                     .store_slice(recipient)                     .store_coins(amount_to_send)                     .store_uint(0, 64)              ;; created_at = 0                     .store_uint(0, 1)               ;; Нет state init                     .store_slice("monthly payment")                 .end_cell(),                 1 ;; SEND_MODE_PAY_GAS_SEPARATELY             );  вот так в тесте проверяю: const balanceAfter = await recipient.getBalance();  баланс не меняется

&rey: Да откуда вы берёте такой шаблон сообщения? (reply to 309212)

Alexey: deepseek 🤭

Alexey: научите как правильно (reply to 309213)

SweetJesus: чел, доку открой, там все есть) (reply to 309215)

Alexey: верно, но лучше учиться на примере. (reply to 309216)

&rey: Там и есть пример. https://docs.ton.org/v3/documentation/smart-contracts/message-management/sending-messages (reply to 309217)

SweetJesus: так там как раз и пример (reply to 309217)

⛰️ Roman ⛰️: что бы создать контракт-коллекции НФТ нужно сначала создать обычный контракт предмета НФТ без адреса коллекции в c4, так как она еще не создан, а потом получить код созданного контракта для предмета НФТ и положить его в c4 контракта-коллекции НФТ? так это работает?

&rey: Наоборот. Сначала коллекция с нулём предметов, потом она деплоит там сколько просят. (reply to 309221)

&rey: "Коллекция" — это не мешок, куда можно произвольные нфт кинуть.

⛰️ Roman ⛰️: так для того что бы создать коллекцию нужно знать код предмета коллекции (reply to 309222)

⛰️ Roman ⛰️: это я знаю (reply to 309223)

&rey: Стандарт не обязывает, кстати. Но вообще... ну да, мы знаем код, когда создаём коллекцию. Мы не знаем начальные данные, это другое дело. (reply to 309224)

⛰️ Roman ⛰️: вот пример из официального источника, для c4 контракта-коллекции нужен nft_item_code, как мне его получить?

User: Скомпилировать nft_item контракт (reply to 309227)

⛰️ Roman ⛰️: для контракта предмета нфт нужен адрес коллекции, что бы поместить его в c4 (reply to 309228)

⛰️ Roman ⛰️: или я что то не понимаю

User: Вы можете просто скомпилировать код, не вставляя туда никакие данные. Как раз таки этот код и лежит в коллекции (reply to 309229)

⛰️ Roman ⛰️: а, тогда понял, с этим blueprint поможет. спасибо

Combot: Я Хуисос has been temporarily muted for 86400 seconds

Oleg: Доброго времени суток, у кого есть wallet_v5r1.boc для mainnet и готов поделиться

Oleg: Что то скомпилировать никак не получается битый какой-то

Mirka: В hex пойдет? Из tonutils скопировал b5ee9c7241021401000281000114ff00f4a413f4bcf2c80b01020120020d020148030402dcd020d749c120915b8f6320d70b1f2082106578746ebd21821073696e74bdb0925f03e082106578746eba8eb48020d72101d074d721fa4030fa44f828fa443058bd915be0ed44d0810141d721f4058307f40e6fa1319130e18040d721707fdb3ce03120d749810280b99130e070e2100f020120050c020120060902016e07080019adce76a2684020eb90eb85ffc00019af1df6a2684010eb90eb858fc00201480a0b0017b325fb51341c75c875c2c7e00011b262fb513435c280200019be5f0f6a2684080a0eb90fa02c0102f20e011e20d70b1f82107369676ebaf2e08a7f0f01e68ef0eda2edfb218308d722028308d723208020d721d31fd31fd31fed44d0d200d31f20d31fd3ffd70a000af90140ccf9109a28945f0adb31e1f2c087df02b35007b0f2d0845125baf2e0855036baf2e086f823bbf2d0882292f800de01a47fc8ca00cb1f01cf16c9ed542092f80fde70db3cd81003f6eda2edfb02f404216e926c218e4c0221d73930709421c700b38e2d01d72820761e436c20d749c008f2e09320d74ac002f2e09320d71d06c712c2005230b0f2d089d74cd7393001a4e86c128407bbf2e093d74ac000f2e093ed55e2d20001c000915be0ebd72c08142091709601d72c081c12e25210b1e30f20d74a111213009601fa4001fa44f828fa443058baf2e091ed44d0810141d718f405049d7fc8ca0040048307f453f2e08b8e14038307f45bf2e08c22d70a00216e01b3b0f2d090e2c85003cf1612f400c9ed54007230d72c08248e2d21f2e092d200ed44d0d2005113baf2d08f54503091319c01810140d721d70a00f2e08ee2c8ca0058cf16c9ed5493f2c08de20010935bdb31e1d74cd0b4d6c35e (reply to 309242)

Oleg: В hex достаточно попробую (reply to 309244)

Oleg: Это весь ? (reply to 309244)

Mirka: Ну ты разверни цитату (reply to 309246)

Oleg: Спасибо 🤝завтра попробую уже устал сегодня , голова квадратная (reply to 309247)

Наталья: Здравствуйте, кто занимается сайтами и их созданием, напишите мне пожалуйста в личные сообщения🫂

Combot: Combot выдал(а) предупреждение Глеб Блинов (1/3) Reason: 1 reports (reply to 309255)

Combot: Глеб Блинов has been temporarily muted for 86400 seconds

— 2025-06-10 —

红石: hi

Alexey: Много раз видел при отладке вот такое в ретрейсере. Два SWAP подряд, без операций с cont между ними (что могло бы объяснить, почему они не оптимизированы). Вопрос: я что-то не понимаю, или же тут прямо просится оптимизация и удаление этой пары операций потому что они друг друга взаимно отменяют?

Denis: Да. Компилятор не идеален

Andrey: Это из за того что инлайнинг в func происходит после оптимизаций (в момент сборки через fift), а не в самом компиляторе func. В Tolk это исправлено (reply to 309278)

Petr: Насколько я знаю Tolk использует ровно такой же бекенд с оптимизациями (буквально форк FunC исходников) и fift для компиляции, так что очень сомнительно что там это справлено

Andrey: Вы не правы, инлайнинг в Tolk производится в самом компиляторе, перед фазой оптимизации, а не на уровне fift (reply to 309281)

Petr: Потестил на 0.13, INLINECALLDICT все еще на месте

Petr: Ну теперь у нас хотя бы есть пример swap swap чтобы проверять исправится ли с обновлениями

%time% (БИО)🐾: через какую либу можно управлять кошельками v1 и v2 версии?

/B4ckSl4sh\: Мне кажется проще самому обёртку написать для столь специфического случая (reply to 309290)

%time% (БИО)🐾: ну хз мб есть что-то готовое тон апи их поддерживает? (reply to 309291)

/B4ckSl4sh\: Что такое поддержка кошелька в тонапи? (reply to 309292)

%time% (БИО)🐾: ну протокола V1R1 (reply to 309294)

%time% (БИО)🐾: там вроде ещё V1R2 V2R1 V2R2

Mirka: tonutils-go (reply to 309290)

%time% (БИО)🐾: спс (reply to 309297)

⛰️ Roman ⛰️: как будет лучше, что бы в одном проекте был только один контракт и тесты для него или несколько контрактов и тесты для них?

Oleg: Проект - это все контракты, которые для него нужны. И тесты для них (reply to 309299)

L30n1d: Второй вариант лучше. Это хороший принцип из ООП — один класс выполняет одну цель. Тоже с контрактами — удобно потом работать, поддерживать проект со структурированным кодом. Плюс с командой проще работать, когда например одним занимается один модулем, другой другим и тд. (reply to 309299)

Mk: Нужен человек для реализации идеи клянусь мы разбогатеем новый век в телеге сделаем такого никогда не было

Mk: Напишите личку

909: Приветствую,может кто учился разработке на блокчейне тон с нуля и подсказать может пособия по обучению,проходил курс на степике,но на практической части туго все идет…

Mirka: А какой язык ты вообще учишь? Если tact, то у них достаточно простая и хорошая дока (reply to 309312)

909: Сейчас FunC (reply to 309313)

Ds: парни, есть вопрос. прошу отвечайте только если знаете.  у меня есть контракт на func, к-й принимает депозиты жеттонов. в случае если контракт работает с 1 жеттоном - проблем нет, я знаю адрес минтера и его код и могу без проблем проверять, что сообщение transfer_notification пришло от jetton_wallet, к-й принадлежит этому контракту. для этого я использую   calculate_user_jetton_wallet_address(    my_address(),     this::jetton_minter,     this::jetton_wallet_code )  мне нужно рассширить контракт, чтобы он умел принимать депозиты разных жеттонов. при этом я хочу так же фильтровать, что transfer_notification пришло от jetton_wallet, к-й принадлежит моему контракту, чтобы никто больше не мог подделать сообщение и выдать его за депозит.  в чем проблема: получается, я не могу хранить на контракте ни jetton_minter ни jetton_wallet_code, т.к. их может быть много.  какие есть еще способы получить хотя бы jetton_minter при обработке входящего transfer_notification?

maksim: TEP-89, проверять жеттон волет адрес через асинхронный запрос к минтеру (reply to 309319)

Ds: А не асинхронно есть варианты? Тк это сильно усложняет логику (reply to 309321)

X1ag: Нету (reply to 309322)

Ds: 🥲

L30n1d: А что тебе мешает? На сколько много их может быть? (reply to 309319)

Андрей: под каждый жетон сделать отдельный контракт (reply to 309322)

Ds: Произвольное количество (reply to 309326)

Ds: Тоже не вариант (reply to 309327)

Андрей: почему? (reply to 309330)

L30n1d: А в чём смысл такой проверки? Типа контракт может принимать произвольные токены (reply to 309328)

Ds: Такая стоит задача) (reply to 309334)

Ds: Хороший вопрос 😅 (reply to 309335)

User<7971885936>: я здесь новичок

L30n1d: Возможно с заказчиком надо обсудить) Типа кинут говножетон на контракт, ну проверишь ты, что действительно говножетон пришёл на говнокошелёк привязанный к этому контракту – а толку то (reply to 309337)

Ds: По идеи это можно решить вайтлистом (reply to 309340)

L30n1d: Именно (reply to 309342)

&rey: Тогда у вас появятся все эти коды и данные мастеров! (reply to 309342)

Ds: Да, но тогда получается, что я все равно не знаю адрес минтера из transfer_notification без асихнронного запроса и не смогу сматчить с вайтлистом. (reply to 309344)

&rey: А предпосчитать все свои жетон-кошельки? (reply to 309346)

Ds: Не очень понимаю мысль (reply to 309347)

L30n1d: Ты можешь заранее или на лету(лучше заранее, чтобы на расчёты не тратить газ), пройтись по этому white list, посчитать адрес кошельков для своего контракта по каждому из них и потом проверять откуда пришёл transfer_notification (reply to 309346)

Ds: Т.е. вне контракта высчитать именно жетон кошельки и сделать вайтлист по ним, а не по минтеру? (reply to 309349)

&rey: Внутри! Только после деплоя. (reply to 309350)

L30n1d: Можно и внутри контракта такое делать, если у вас динамический список монет будет (reply to 309350)

Ds: Понял, спасибо за идею

L30n1d: Так-то можно заранее посчитать и адрес контракта до деплоя и соответствующие кошельки (reply to 309351)

&rey: Только их потом положить нормально не получится, нужна какая-то авторизация. (reply to 309354)

L30n1d: Почему не получится? (reply to 309355)

&rey: Если в инит дату, то меняется адрес контракта. (reply to 309356)

L30n1d: Это да, но инит же с отправкой сообщения отправляется. Я делал так: в ините статичные заглушки, а в ресивере уже инициализация (reply to 309357)

&rey: Если первым сообщением, то аналог мев может его увидеть и положить любые свои адреса, обогнав ваше.

L30n1d: А разве такое возможно? Деплой же в ответ на сообщение происходит, нет?  ну и можно ограничить, что только от оунера принимаются в этом ресивере (reply to 309359)

Ds: Мне подойдет самый грубый вариант, в котором я заране высчитаю кошельки и потом админ-функцией смогу их добавлять в вайтлист. в теории же рабочий вариант? (reply to 309360)

&rey: 1. Да. Но злоумышленник может вместо вас любезно задеплоить. 2. Так я и говорю, нужна какая-то авторизация. (reply to 309360)

Alexey: не просто в теории а на практике рабочий, я так и делаю в своем проекте - при инициализации контракта считаю его жетон-воллет. (reply to 309361)

Ds: для меня как для soldity-разрабочика, func - полный ад 🤒

L30n1d: Попробуй tact, мне кажется, очень похож на solidity ) (reply to 309364)

maksim: также для такта есть такой кукбук с примерами работы с жеттонами, там так же есть пример ончейн реквеста и обработки tep-89, можно докрутить до нужного кейса  https://github.com/tact-lang/defi-cookbook/tree/main/jettons

potato: Кто тут баны раздает?

potato: @belkinnata Притворяется женщиной, которой нужен сайт Легенда такая что прошлый дядя-разработчик обещал-обещал и не выполнил заказ. Дизайна нет, но может прислать пример чего хочет Присылает архив с сомнительным содержимым id пользователя: 7242507901  Забаньте пожалуйста

Andy: На вирустотал грузи pe файл

мажорка: за что дизлайк то?) (reply to 309371)

Combot: Combot выдал(а) предупреждение мажорка филадельфия (1/3) Reason: 1 reports (reply to 309388)

Toffee: Привет коллеги, а есть возможность вытащить code внутри смарт контракт?

/B4ckSl4sh\: свой? Да, опкод MYCODE (reply to 309402)

Toffee: Да, свой

Toffee: Который ты указываешь при деплоя внутри адреса и state_init

Алиса: Всем привет. Я начинающий  разработчик, работаю над тестовым смарт-контрактом для изучения TON Blockchain. Нужны тестовые токены (TON и, если возможно, USDT) для тестирования транзакций и функционала. Мой testnet адрес: 0QCazqSbeVVr2nm07GdmBtqBhfC2P49FeXAa2OR-l1c9uTu-. Я пытаюсь интегрировать @ton/ton SDK и протестировать взаимодействие с тестовой сетью. Без токенов сложно проверить логику контракта. Буду благодарна за помощь, это ускорит мой прогресс в разработке

Daniel: @testgiver_ton_bot (reply to 309409)

Nurislam: https://faucet.tonxapi.com/ (reply to 309409)

K🆓³³: Нейронка писала? (reply to 309409)

Oleg: Нейронка бы знала ответ. Гугел вот знает) (reply to 309413)

Juster: привет кто сталкивался с ошибкой TypeError: Cannot read properties of undefined (reading 'slice') как ее можно победить? нет возможности задеплоить контракт...

Juster: все ок, были проблемы с node ...

— 2025-06-11 —

Rafael: Какой-то жесткий антиспам стоит, никак не получается отправить сообщение

Rafael: Ограничение чтоли на кол-во символов

Rafael: Картинкой тогда попробуем

Евгений: Всем привет! Кто знает как распарсить jetton_price_dict в контракте nft-fixprice-sale-v4r1 getgems? Не получается цену в жетоне вытащить из данных транзакции.

Sanjay: Hi! Can someone please send me some test TON? Here's my testnet wallet address: 0QBdueAIWyveeAB6kTeoYzGbGu1YaBsLMtunpA45pnTmkApQ Thanks!

Alexey: @testgiver_ton_bot (reply to 309442)

Esra: Всем привет! Ищем разработчиков, которые могут помочь с созданием простого смарт-контракта для блокировки токенов, который можно будет интегрировать с нашим Telegram mini-приложением (Blum — торговое приложение внутри Telegram). Нужен лёгкий механизм блокировки, который будет запускать начисление поинтов/наград на нашем бэкенде. Дайте знать, если у вас есть подобный опыт или можете помочь!

⛰️ Roman ⛰️: у меня пару вопросов, cell content в nft item и nft collection - это metadata? И еще, как инициализировать в nft item контент и владельца, если он принимает только сообщения от nft коллекции, а у коллекции нет функции отправки сообщений, мне нужно будет добавить ее? см. фото

web-assist 🧀: Да, нужно писать метод для минта Все данные на минт передаются от самой коллекции (reply to 309446)

⛰️ Roman ⛰️: минт и деплой это одно и тоже? (reply to 309447)

web-assist 🧀: В общем - да Минт это деплой нфт контракта деплой это развертывание любого контракта (reply to 309448)

⛰️ Roman ⛰️: то есть при минте контракта он сначала разворачивает контракт из init, а потом читает мое сообщение с данными владельца и content? или владельца и контент нужно отправить отдельным сообщением после минта?

web-assist 🧀: Все передается одним сообщением, но это не запрещает сперва развернуть контракт и потом "положить туда" владельца (reply to 309452)

⛰️ Roman ⛰️: ок, спасибо

Toffee: Привет, как можно достать из смарт контракта свой code, который обычно ложим в state_init при деплои?

⛰️ Roman ⛰️: Скомпилировать его (reply to 309472)

Toffee: И как его внутри смарт контракта сделать это, я спрашиваю если ли готовый метод там get_state_init чтобы получить code, или из адреса как то вытащить?

Toffee: Я посмотрел stdlib, и не нашел метода и мне кажется один из способ это просто сохранить код смарт контакт вместо со всеми данными, может я просто ошибаюсь, и что то не знаю

Alexey: my_code() (reply to 309480)

Alexey: Если внутри самого смарт-контракта

Alexey: если снаружи - то через тот апи которым пользуетесь для взаимодействия с блокчейном

Toffee: error: undefined function my_code, defining a global function of unknown type

Alexey: У вас stdlib подключен? (reply to 309485)

Toffee: Да, там нету такого метода

Alexey: А как вы проект создавали? Какая версия blueprint? (reply to 309487)

Toffee: 0.29.0

Alexey: Очень странно. Можете добавить его сами тогда, cell my_code() asm "MYCODE"; (reply to 309489)

Spartan.by: Здравствуйте, друзья. Подскажите пожалуйста, кто знает,  как купить домен .ton который просрочился?  написано что уже давно просрочился а опции оплаты нет. Какая процедура? Может есть инструкция по этому делу?

Spartan.by: Вот пример (reply to 309493)

Spartan.by: Здравствуйте) Пишет что надо в таком формате /dns {nft address|nft name} , а что сюда вписывается? (reply to 239824)

111: всем добрый день. нужно написать бота для одного сайта торговли NFT. кто может это сделать, напишите пожалуйста в личку скину тз

Aziz: Всем привет! Пождскажите пожалуйста, можно ли как-то сгенерировать кошелек в виде {privateKey,address} а не mnemonic? и второй вопрос, можно ли это сделать без Promise? синхронно

&rey: @ton/ton вроде синхронно считает, мне помнится? (reply to 309526)

rotas: Лвл

Иван: import { getSecureRandomBytes, keyPairFromSeed } from "@ton/crypto";  const bytes = await getSecureRandomBytes(32); const keyPair = keyPairFromSeed(bytes); (reply to 309526)

Aziz: Спасибо!  Парни, а какой лучше сейчас юзать? (reply to 309533)

&rey: Ну, если вам подешевле транзакции, то найти враппер к PreprocessedV2; если подешевле из стандартных, то V3R2 (но он умеет только 4 перевода в блок делать); если хотите в перспективе отправлять что-то без тонов на кошельке, то V5R1. (reply to 309535)

Aziz: V5R1 то что искал. Как раз для экваринга удобно, не нужно перегонять TON

&rey: Ну, мне кажется, проще выйдет свопать часть жетонов на тоны (с помощью релейера тонкипера, наверно), потом из тех уже платить комиссии на перевод. Иначе дороговато выйдет. (reply to 309537)

Aziz: То есть v2 именно явно дешевле остальных? (reply to 309538)

&rey: Тот, который preprocessed v2 https://github.com/pyAndr3w/ton-preprocessed-wallet-v2/blob/main/typescript/wrapper/wallet.ts — да, он существенно дешевле, ведь в нём нет доп.функций вроде плагинов, пересборки списка сообщений и безгазовой отправки. (reply to 309539)

Aziz: хм.. что через WalletContractV2R2, что через 5VR1 - создаются кошельки одинакового формата UQ…… значит в дальнейщем можно будет выбирать какой версией обрабатывать уже сгенерированные кошельки?

&rey: 1. V2R2 из репозитория — это что-то древнее, я даже не помню его особенности использования. Я не про него. (reply to 309541)

&rey: 2. Адреса похожи на UQ потому и только потому, что любой кошелёк на тоне — это смарт-контракт. Но обёртка одного к другому не подойдёт (и, собственно, не получится добиться одинакового адреса от разных версий даже при равном ключе).

Aziz: Ахилесова пята тона

&rey: А в каком смысле? "Кошелёк" бывает разный, совсем разный — это просто такая категория смарт-контрактов.  Кошелёк в общем — контракт, позволяющий пользователю отправить сообщение с конкретным содержимым и суммой на любой адрес, куда он укажет. (reply to 309544)

Aziz: в том смысле что пользователю выдали адрес созданный через V4, потом пытается открыть в tonKeeper - а там нет поддержки такого) и тп

Aziz: какой-то версии нет точно

Aziz: )

X1ag: https://docs.ton.org/v3/documentation/smart-contracts/contracts-specs/wallet-contracts#preparing-for-gasless-transactions (reply to 309549)

&rey: Ну, я вас поздравляю с открытием, что LLM про тон ещё не особо слышали)  Если технически описывать, то тоны кинет релеер тонкипера, в подписанном вами интернале-ордере, который всё что надо обработает. (reply to 309549)

909: Может кто может подсказать как подключить ton storage?

User: https://docs.ton.org/ru/guidelines/ton-storage   Вот тут все собрано (reply to 309554)

StasOff: @subden подскажи плиз, не могу с недавнего времени получить через свой сервер ответ на запросы к tonapi Error{   "code": "ESOCKETTIMEDOUT",   "connect": false }  Это может быть связано с недавней блокировкой РКН Cloudflare в РФ?

Denis: Возможно. Хотя лично у меня тонапи из России работает. Лучше уточните в @tonapitech с примерами (reply to 309558)

Alexey: подскажите как отлавливать exception в тестах: FunC     (int) exit_early_withdraw() asm "3 PUSHINT";      throw_unless(exit_early_withdraw(), now() >= lock_time);   LLM сгенерил такой код, но он не работает. rejection нет.   const sender = owner.getSender();     await expect(         tonSalary.sendWithdrawMessage(sender)     ).rejects.toThrow('Exit code: 3'); // Проверяем код ошибки

User: Вы если через sandbox тестируете, оно выводит exit_code в логи. Просто задебажте код и посмотрите переменную куда вы грузите все транзакции (reply to 309564)

Alexey: sandbox, да (reply to 309565)

User: https://docs.ton.org/v3/guidelines/smart-contracts/testing/writing-test-examples  Статья о тестах(про exit code там тоже есть) (reply to 309566)

Max: Салют всем, нужен тон разработчик + биржа (пару операций торговых и с выводом) подробнее в ЛС распишу, и ТЗ кину

Alexey: нашел. получилось.     expect(res.transactions).toHaveTransaction({         success: false,         exitCode: 1003,     });  спасибо (reply to 309565)

Alexey: а что за транзакция появляется следом за сбойной? с op '0xffffffff'  ? что это? зачем? в чем смысл? (reply to 309565)

SweetJesus: Это опкод bounced сообщения. Само сообщение содержит емнип 256 бит от оригинального, первые 32 из которых и есть 0xffffffff. Посмотри например как jetton wallet обрабатывает их и поймешь зачем нужно. (reply to 309573)

Alexey: Немного не по теме - константы в FunC добавили именно чтобы не требовалось писать асм для экзит-кодов и операций:  ;; Старый вариант: (int) exit_early_withdraw() asm "3 PUSHINT";  ;; Новый вариант: const exit_early_withdraw = 3;  ;; С псевдо-неймспейсом: const error::exit_early_withdraw = 3; (reply to 309564)

Alexey: ок. спасибо! (reply to 309577)

Alexander: Как то можно эту дичь в блюпринте пофиксить? Она просто напрягает глаза))

X1ag: жиза)) (reply to 309580)

Dmitry: Node js experience (reply to 309580)

— 2025-06-12 —

Василий: Подозреваю что jest навешивает event handler'ы. Попробуйте версию поменять (reply to 309580)

Dino: Привет  Я хочу создать сайт, на котором будет отображаться список всех  NFT с картинками и названиями. Подскажите, пожалуйста, как лучше всего это реализовать и какие инструменты использовать?  Заранее спасибо за помощь!

Denis: Прям списком все 20 миллионов нфт? (reply to 309602)

Vladimir: 22. (reply to 309603)

Denis: ну учитывая что я называл пальцем в небо то я прям точно попал

Max: просто Дуров своих подарков успел наклепать

🐼 Sild: это не то чтобы много. Небольшой парсер блокчейна, elasticsearch и мускуль вполне справятся🙄

L30n1d: А откуда эта стата? (reply to 309605)

Eugene: Рубрика «глупые вопросы»:   — сколько места в архивных нодах сейчас занимает весь блокчейн целиком? — с какой скоростью это число растёт?  (если это публично где-то написано, подскажите, где — я для общей статистики знаю только сайт TonStat, там нет)

Андрей: Посчитайте все беги и их размеры из этого json, и это будет полная история блокчейна: archival-dump.ton.org/index/mainnet.json (reply to 309617)

Denis: ну это кстати сомнительное утверждение. так то надо считать только размер последнего бега

X1ag: у всех так на retracer пишет?

Petr: У меня тоже

Petr: Хорошо что есть https://txtracer.ton.org 😄

X1ag: он тоже не фурычит, по крайней мере у меня (reply to 309623)

X1ag: но это скорее проблема не в txtracer, но забавно что не могу посмотреть транзакцию ни там ни тут) https://testnet.tonviewer.com/transaction/51735ee0d5a0f7c637794b4e5a00f43cff0efef8f46a27a8ea852b665d2de4f8 (reply to 309624)

Petr: Был такой класс транз где падало на получение shard account и все это конкретно в testnet, думаю это как раз это

Petr: Упала эмуляция в sandbox

X1ag: интересно конечно

🐼 Sild: новый сторейдж опять подъехал мб? обещали к середине июня как-раз

Victor: Это пока в тестнете апи в4 проблемка, баланс отдает 4958202326630787854526271305648312  https://sandbox-v4.tonhubapi.com/block/32127006/EQBvErT_5lG8GpccQ_HmQsDzjBS6jkauKFOWj2_0I3JPSk2q  скоро пофиксят (reply to 309625)

Дмитрий: Как сюда показать проект ?

Max: Ради чего? (reply to 309639)

&: do not use tonhubapi. Toncenter is better (reply to 309637)

Alexey: Всем привет. Возник вопрос по поводу разницы root_hash и file_hash. После поиска по чату и чтения вайтпейпера сложилось такое представление:  root_hash - это хеш блока в самой TVM. Условно, результат вызова cell_hash(block_cell);  `file_hash` это хеш от того же block_cell, но предварительно сериализованного для сохранения где-нибудь на диске  Я прав?

/B4ckSl4sh\: Всё так, я только немного уточнил бы, что редко вы встретите ситуацию при которой  cell_hash(block_cell); будет равен root_hash, потому что cell_hash = representation_hash, а у вас в block_cell почти всегда будут pruned ячейки какие-то. Поэтому обычно считают хэш нулевого уровня от block_cell и затем сравнивают его с root_hash. (а затем идут по этому дереву в нужные данные, обходя pruned) (reply to 309647)

Alexander: Если указать SUBWALLET_NUMBER=698983191 и WALLET_ID=0, то адрес не совпадает с адресом в кошельках с версией v3r2 (reply to 308575)

Alexander: А если наоборот WALLET_ID=698983191 и SUBWALLET_NUMBER=0, то совпадает. Шиза какая-то, WALLET_ID нужно назвать SUBWALLET_ID (как в контрактах кошельков, и как всегда называли), а SUBWALLET_NUMBER хз что такое - возможно кудат-то при генерации ключей идет но в тоне обычно так не делают

Alexander: И вообще там это дублирование в ридми. Кого пингануть? Кто блюпринтом занимается? Это очень путает, особенно если кто-то первый раз это видит я хз как в этом можно разобраться

Alexander: Кстати по хорошему чтобы все это настраивалось в blueprint.config.ts, а уже внутри blueprint.config.ts можно взять с env через process.env например. Тогда конфиг будет типизированный и понятно будет какие есть параметры и что можно настроить без документации даже. Сейчас почему-то половина в env половина в blueprint.config.ts (например провайдер)

Alexey: К счастью, для меня эта разница не критична - я хочу просто использовать root_hash прошлых блоков в качестве одного из источников рандома (reply to 309649)

Alexander: Странное желание (reply to 309654)

&rey: А у вас будет доказательство, что ваш рандом хороший? Не заявление "ну, в нём много хороших источников, значит..." — потому что бывают случаи, когда добавление плохого источника ухудшает результаты. (reply to 309654)

&rey: А так, если уж делать что-то помимо commit-reveal, надо понимать как минимум критерии, что надо от хорошего рандома)

Alexey: Конечная схема - сначала в контракте фиксируется (через хеш, без раскрытия) зерно от владельца. Затем через randomize_lt и скип блоков в мастерчейне выбирается один или несколько из предыдущих root_hash. Владелец на это повлиять не может, только если сговорится со всеми валидаторами которые своим сидом поучаствуют в выборе прошлых root_hash. Затем владелец раскрывает свое зерно, оно проверяется на соответствие хешу который был зафиксирован в начале, и затем мержится с root_hash. Итоговое число используется в качестве зерна для генератора через set_seed (reply to 309656)

Alexey: У меня commit-reveal как раз будет в итоге) (reply to 309658)

&rey: упс, неправда (reply to 309659)

Alexey: ? (reply to 309661)

&rey: Выбором верного сида+lt один валидатор может показать на тот root_hash, который хочет. (reply to 309662)

&rey: Поэтому остальному рассуждению доверия пока тоже нет.

Alexey: Подумал ещё раз и понял что вы правы, буду думать дальше (reply to 309663)

X1ag: насколько скоро?) (reply to 309637)

L30n1d: Присоединяюсь к вопросу (reply to 309666)

JinX: кто может закинуть на test net тоны?

Nurislam: @testgiver_ton_bot (reply to 309680)

&rey: Чат всё-таки тематический, по разработке на тоне.

Combot: Combot выдал(а) предупреждение Foridul Islam (1/3) Reason: 1 reports (reply to 309726)

Stepan: А не подскажете какие сейчас лимиты на public liteservers? Может кто-то замерял?

— 2025-06-13 —

Tim: Лимитов вроде нет особо, но проблема публичных серверов не в лимитах, а в отсутствии гарантий аптаймов (reply to 309735)

⛰️ Roman ⛰️: я правильно понимаю, что в cell content у контракта nft item должна храниться лишь небольшая часть ссылки на json, а контракт коллекции объединяет свою часть ссылки и часть ссылки nft item?

Андрей: да, но можно обойтись вообще без части ссылки nftItem и просто в гет методе прописать конвертацию индекса в конец ссылки, к примеру index:123 string: '123.json' (reply to 309767)

⛰️ Roman ⛰️: для удобства это удобно (reply to 309768)

⛰️ Roman ⛰️: а зачем тогда в content у коллекции хранится 2 cell? типо первый это ссылка на метаданные самой коллекции, а второе это недостающая часть ссылки для nft item?

L30n1d: Да (reply to 309770)

Андрей: для конвертации index -> link можно сделать вот так ( вряд-ли ссылка будет больше 126 символов, на крайняк можно и в реф положить )   return beginCell()             .storeUint(1, 8 ) // off-chain tag             .storeSlice(commonContent)             .storeSlice(index.toString().asSlice())             .storeSlice(".json".asSlice())             .endCell(); (reply to 309770)

L30n1d: Вот тут хорошо именованы переменные, как по мне: basePath + relative (reply to 309770)

⛰️ Roman ⛰️: сейчас чаще всего используют FunC или Tact?

Crystal: ку всем  шарит кто то за API для работы с подарками в тг? мб я херово искал, но не нашел, как через что то по типу pyrogram/telethon рулить подарками

Nurislam: Tdlib (reply to 309796)

Max: Потому что почти наверняка вам нужен tdlib, а не bot api (reply to 309796)

L30n1d: It depends от задач, но на практике лично я почти всегда tact (reply to 309790)

User: В большинстве своем все компании кто вкатываются в TON просят писать на func, как native language. И чисто исторически так сложилось, что больше контрактов на func (reply to 309790)

L30n1d: У меня наоборот все новые на tact (reply to 309810)

L30n1d: Потому что понятнее (reply to 309816)

X1ag: hi, а как понять что за ошибка кроется в Unknown emulation error?)   Unknown emulation error        102 |     }       103 |     async getCumulatives(provider: ContractProvider, tf: bigint ) {     > 104 |         const res = await provider.get('get_cumulatives', [           |                     ^       105 |         {        106 |             type: 'int',        107 |             value: tf

X1ag: возможно, это из-за того что меняю blockhain.now: const secondTime = result.transactions[0].timestamp + (60*60 + 1); blockchain.now = secondTime;

User: Попробуйте повырезать подобные подозрительные моменты и запускайте код. Как только он заработает, то вы сможете понять конкретный кусок кода, который забаговывается (reply to 309826)

X1ag: у меня только 1 этот "сомнительный" момент. Если этот кусок кода вырезать, то эта ошибка пропадает (reply to 309828)

X1ag: ошибка конкретно в том, что я пытаюсь прибавить что-то к result.transactions[0].timestamp (reply to 309826)

&rey: проверьте миллисекунды / секунды (reply to 309826)

X1ag: const secondTime = result.transactions[0].timestamp + (3601*1000); - миллисекунды const secondTime = result.transactions[0].timestamp + (60*60 + 1); - секунды   все равно падает

&rey: А какой изначально blockchain.now и какой result.transactions[0].timestamp? (reply to 309835)

X1ag: undefined и undefined почему-то   мне нужно перед всем тестом указать какое-то время, чтобы его изменять? (reply to 309836)

&rey: А на транзакции точно поле называется timestamp? (reply to 309837)

X1ag: агась, там вместо timestamp должно быть now тогда почему blockhain.now = undefined? (reply to 309838)

&rey: А вот это уже нормально — его можно задать, а если не задать, возьмётся текущее. (reply to 309839)

X1ag: понял, спасибо за помощь! (reply to 309840)

Alexander: День добрый. Я верно понимаю, что у w5 в тестнете другой адрес и если туда что то закинуть по адресу из мейннета, то можно забыть об этом? )

L30n1d: Да (reply to 309844)

Alexander: Спасибо 👌 (reply to 309846)

Kirill: Всем привет. Подскажите пожалуйста, как сделать что б get_transactions в pytoniq возвращал все доступные транзакции, котрые еще хранятся на liteserver. понимаю как получить транакции по последнему lt, но а если их было несколько.

Kirill: Думал можно отнять времени от последнего, но так это не работает и если я прошу его получить до не существующего lt по адресу, выдает ошибку

User: https://github.com/yungwine/pytoniq/blob/master/examples/transactions.py  Попробуйте count большой поставить (reply to 309849)

Kirill: Сделал через raw_get_transactions, там можно получить последние 16 транзакций, чего в целом мне хватает (reply to 309857)

Viacheslav: Привет. Что посоветуете накодить, чтобы положить в гитхаб(смарт контракты), как показатель что можешь быть разработчиком смарт контрактов ?)  Мб контракт, который работает с лендингом каким нибудь в тоне или еще чтото

Viacheslav: (cell,()) transfer_voting_power (cell votes, slice from, slice to, int amount) impure {   int from_votes = get_voting_power(votes, from);   int to_votes = get_voting_power(votes, to);  что означают круглые скобки в описании что возвращает функция? и в return?

Viacheslav: функция функцию пустую возвращает? оО

#: if (op == 0) {         val comment: slice = msgBody.loadSlice();         if (comment == "increment") {             data.counter += 1;             saveData(data);              return;         }          return;     }   здравствуйте, хочу сделать, чтобы контракт принимал текстовое сообщение. аналог в Tact receive("increment") {}  подскажите как правильно реализовать это на языке Tolk или FunC?

Nostalgia: Через string literals можно задавать и сравнивать распаршенные слайсы (reply to 309875)

#: не понимаю как это делать (reply to 309879)

Nostalgia: Например, вы парсите слайс, в котором "string" и присваиваете значение слайда константе n. Далее можно задать условие if (n == "string") { (reply to 309880)

#: .loadSlice надо что то в скобках указать? (reply to 309881)

Nostalgia: По идее, нет

&rey: ну, сравнить msgBody == "increment" (reply to 309875)

#: if (msgBody == "increment") {             data.counter += 1;             saveData(data);              return;         } (reply to 309884)

#: таким образом?

#: 🔧 Using tolk version 0.99.0... Error: Tolk compilation error: contracts/test.tolk:44:21: error: type slice can not be compared with == !=     // in function onInternalMessage   44 |         if (msgBody == "increment") {      |                     ^ (reply to 309884)

Nostalgia: Видимо трабл в том, что сравнивать можно только инты. Попробуйте задать string через int, например вот так: "NstK"u

#: я сделал проверку через bitsEqual и сработало (reply to 309888)

Oleg: Странно, что SDLEXCMP в tolk не затащили

⛰️ Roman ⛰️: А у контрактов продажи NFT ведь нет стандарта? Получается если у разных NFT будут разные контракты продажи, то автоматизировать покупку и получение Get данных будет нельзя?

vns.crypto: Ребят, пожалуйста, ткните меня носом, где @subden писал про хэши сообщений, что скоро будет определенный формат и пр., ибо сейчас хэши могут быть изменены при включении в блок и т.д. Помню было такое сообщение, найти не могу. По-моему даже ссылка была на какой-то сайт с документацией. P.S. почему в чате можно искать сообщения только от каких-то ноунеймов (видимо админов группы). Почему не сделать поиск сообщений от конкретных пользователей?

User: https://gist.github.com/mr-tron/a4b3e8eff3a982e3426f6397eb9a2450 (reply to 309892)

Daniel: Именно стандарта контракта продажи нет, вам тогда нужно смотреть каждый маркетплейс и смотреть что у них под капотом.  https://github.com/ton-blockchain/TEPs/tree/master (reply to 309891)

User: Искать сообщения определенного пользователя можно, если вы введет в поиск юзернейм того, кого хотите найти(в вашем случае subden).   Участники чата скрыты, чтоб люди их не парсили и не флудили в лс(или не делали еще каких-то пакостей) (reply to 309892)

vns.crypto: Открывается только этот список. Даже если ввожу определенный юзернейм, то не показывает сообщения 🤷🏼‍♂️ (reply to 309895)

User: Баг клиента telegram на IOS. На windows — все работает (reply to 309896)

Дмитрий: Пожалуйста

Дмитрий: , здравствуйте

L30n1d: У меня на андроид по запросу подгружает любой ник (reply to 309896)

M: Hello! My name is Mukhammed Akhilgov, I’m 14 years old, and I have an idea that could evolve Telegram's NFT gifts. Right now, NFT gifts are beautiful visuals, but they could be much more meaningful. My idea is to use them as digital keys to exclusive Telegram channels or clubs — owning one would grant special access. This would bring new utility to NFTs and add a powerful social layer to Telegram. I’d love if this message could be passed on to the Telegram or TON team. I’m truly inspired by what you’ve built and would be honored to contribute with fresh ideas. Best regards, Mukhammed Akhilgov Telegram: @TSITSKIEVSKI

K🆓³³: @tribute (reply to 309904)

M: Что это ? (reply to 309907)

M: Я уверен что это будет новая синсация в телеграмм (reply to 309906)

M: Доверьтесь , спасибо . До свидания

K🆓³³: +Это можно сделать onchain (reply to 309910)

— 2025-06-14 —

User: Круто, правда я такое уже писал Бота могу в личку скинуть если оно надо, но идея не нова в общем :) (reply to 309906)

Кайа: Добрый день, что делать если меня заскамили? Попросили купить мой никнейм и скинули ссылку, я оплатил 5% комиссию от цены которую мне предложили (reply to 309914)

Кайа: Сейчас же он говорит что деньги просто заморожены и нужно отправить ещё денег чтобы разморозить их

sd: А какие идеи приходят в голову? (reply to 309926)

Denis: Отправить остальные 95%? (reply to 309928)

Кайа: Не знаю даже, вообще в первый раз столкнулся с таким по этому пришел сюда за помощью (reply to 309928)

sd: Во второй раз нужно внимательно изучить, что делаешь, кому и что отправляешь, и с какой целью. Начать с вопросов лучше до перевода денег, а не как сейчас, после. (reply to 309930)

Кайа: Понятно, как я понял уже ничего не вернуть? (reply to 309931)

Кайа: Может кто-нибудь знаком с этим?

Denis: Это фейковый сайт фрагмента. Настоящий fragment.com Но вообще чат разработчиков, а не поддержки юзеров.

$SOL Dev: Всем привет, имеет ли в тоне смысл использовать сторонние ноды (по типу quick node, chain stack) для приоритизации транзакции в сети? Какими способами можно ускорить исполнение транзакции? Помогает ли увеличение fee в этом?   Вижу что есть https://ton-blockchain.github.io/global.config.json считается ли это хорошей практикой использовать его?

&rey: Я говорю только про первую транзакцию в дереве – т.е. импорт экстернала.  1. Ноды влияют, хотя и не сильно. Сторонние скорее уж для замедления, а быстрее будет через tonapi. (reply to 309943)

⛰️ Roman ⛰️: может кто то сказать, для чего при создании init cell для контракта коллекции NFT в data добавляют store_uint(0, 2) и store_uint(0, 1) в начало и конец?

&rey: 2. Комиссии не настраиваются, оттого вопрос лишается смысла. 3. Ну, эти лайтсервера иногда бывают оффлайн, хотя минимум один всегда есть. (reply to 309946)

&rey: Ну так это биты stateInit. Там ещё в store_dict единичные спрятаны, получается .store_uint(6, 5) – 0b00110. (reply to 309947)

⛰️ Roman ⛰️: то есть они обязательны? (reply to 309949)

&rey: Да, без них чейн не поймёт смысл ячейки. (reply to 309950)

&rey: Вдруг данных не было бы? Там лежал бы ещё один нулевой бит.

Ed: всем примет, такой вопрос. Я использую библиотеку tonutil-go  Я создал кошелек на tonkeeper и взял от туда seed фразу.  Я хочу подключиться к этому кошельку через слова, которые выдал мне tonkeeper, но по факту я получаю другой адрес кошелька.  Подскажите что не так. Использую из примера, который указан у них на github, версию поставил wallet.V4R2  w, err := wallet.FromSeed(api, words, wallet.V3) if err != nil {  panic(err) }

Denis: А в кипере v5r1

Ed: понял спасибо ))

Ed: V5R1Beta   Version = 51 // W5 Beta   V5R1Final  Version = 52 // W5 Final а какое из ? Final которая ?

Denis: Да

Denis: Нейминг надо бы поменять

&rey: А есть какая-то статистика, сколько подписанных транзакций TC2 теряется?

Ed: и еще такой вопрос, наверно глупый когда я указываю через wallet.V5R1Final, то получаю ошибку, типо используй ConfigV5R1Final wallet.ConfigV5R1Final{       NetworkGlobalID: ?,       Workchain:      ?,     } что тут надо указать ?

&rey: (вот среди сообщений через тонцентр, помнится, доходит где-то 5/6) (reply to 309974)

Denis: Воркчейн 0.  Глобал айди -239 для мейннета и -3 для тестнета (reply to 309975)

Ed: спасибо тебе добрый человек )))

Denis: Больше доходит. Потери вроде были меньше 10% Если не считать мусор когда шлют 100500 экстерналов на один аккаунт (reply to 309976)

Вова: Где можно запросить тестовые тон ?

Вова: Пробовал не приходят (reply to 309988)

Juster: Сегодня работали тестовые Тоны хм

GuruCod: Мне приходят (reply to 309989)

GuruCod: + (reply to 309991)

GuruCod: Проверьте точно ли вы запрашиваете в тестнет сети (reply to 309987)

User: К сожалению, уже ничего не сделать. Помните что официально приобрести юзернейм можно только на fragment.com, все остальное скам.   95% личных сообщений от незнакомцев — скам (reply to 309926)

Алексей Ковалёв: 😂 мне по 3-4 человека таких в день пишет , предлагают то 2000 то 5000 тон за мой юзер) (reply to 309926)

⛰️ Roman ⛰️: Я тут задался вопросом，forward fee расчитывается по muldiv(cs~load_coins, 3, 2) и имеет логику "сколько отправил ТОН, столько и можешь забрать, но с учётом комиссии". Я ведь правильно понял?

⛰️ Roman ⛰️: Почему он рассчитывается от количества ТОN входящего сообщения, а не отправляемого? Допустим есть контракт, баланс которого 1 тон, на него отправили ещё 10 тон с сообщение об выводе 0.5 тон. Получается fwd_fee = 15 тон, 11 - 15 - 0.5 = ошибка, хотя на контракте 11 тон и вывести 0.5 не проблема

&rey: Какие ещё 15 тон форварда? Такого не бывает, давайте более реальный пример. (reply to 310006)

Tim: Потому что отправляемое сообщение не может быть больше входящего. Или как минимум не может быть сильно больше него (reply to 310006)

&rey: forward fee — сумма, оплаченная блокчейну за доставку сообщения с тонами от контракта-отправителя к получателю. Она не зависит от переносимой суммы, а только от размера ячейки сообщения и воркчейна контрактов.

⛰️ Roman ⛰️: Я понял. Но почему это расчитывается именно от суммы, которая пришла? (reply to 310009)

Tim: Расчитываться от fee который был списан с входящего сообщения (reply to 310010)

&rey: Что значит "рассчитывается от суммы"?  Если отправитель кинул 10 тон с флагом 1, то с него (игнорируя compute,action,storage) будет списано 10.003 тон, получателю придёт 10.000 тон, указано в сообщении будет fwd_fee 0.002 тон. (reply to 310010)

⛰️ Roman ⛰️: Сейчас скину фотку, может я чего то не понимаю

⛰️ Roman ⛰️: Вот кусочек кода из примера смарт контракта предмета nft. То есть cs~load_coins() в конце это не количество отправленных монет, а значение комиссии блокчейна за пересылку сообщений в этот момент?

&rey: Да. Монеты загрузились во второй строке, которая skip value.

⛰️ Roman ⛰️: Спасибо большое тогда за прояснение, мне казалось что это тоже самое что и msg_value

#: скажите, а что такое 63 exit code? https://testnet.tonviewer.com/transaction/7348b4a55cbff88e3a09508607a395ff47e07b5b27f4ed416ab9f918bc52fe5a   import "updlib.tolk";  struct StoredInfo {     ownerAddress: address,     counter: int }  struct (0x123) CustomMessage {     queryId: uint64,     sender: address,     money: coins }  @inline fun loadData(): StoredInfo {     var cs = contract.getData().beginParse();     return {         ownerAddress: cs.loadAddress(),         counter: cs.loadUint(32)     } }  @inline fun saveData(data: StoredInfo) {     contract.setData(         beginCell()             .storeAddress(data.ownerAddress)             .storeUint(data.counter, 32)         .endCell()     ); }  fun onInternalMessage(myBalance: int, msgValue: int, msgFull: cell, msgBody: slice) {     if (msgBody.isEnd()) { // ignore all empty messages         return;     }      var cs: slice = msgFull.beginParse();     val flags = cs.loadMessageFlags();     if ((flags & 1) != 0) {         return;     }      var data = loadData();      var senderAddress: address = cs.loadAddress();     var op: int = msgBody.loadUint(32);           if (op == 0x123) {         val message: CustomMessage = msgBody.loadAny();         val query: uint64 = message.queryId;         val destination: address = message.sender;         val toSend: coins = message.money;         var reply = createMessage({             bounce: false,             value: toSend,             dest: destination,             body: addComment("query")         });         reply.send(SEND_MODE_REGULAR);         return;     }      throw 0xfffff; }  async sendTest(provider: ContractProvider, via: Sender, value: bigint, address: Address, coins: bigint) {         await provider.internal(via, {             value,             sendMode: SendMode.PAY_GAS_SEPARATELY,             body: beginCell()                 .storeUint(0x123, 32)                 .storeUint(64, 64)                 .storeAddress(address)                 .storeCoins(coins)             .endCell(),         });     }

&rey: А точно вы не читаете дважды опкод сообщения, второй раз в msgBody.loadAny()? (reply to 310017)

&rey: Ну и задавать сообщение всё же надо struct (0x00000123) CustomMessage, а то 12-битный опкод какой-то получается.

#: это как? (reply to 310019)

&rey: .loadAny() в большой теории может смотреть на опкоды предложенной структуры... Я не знаю, это уже надо толк изучать. (reply to 310021)

#: я просто не знаю что должно быть вместо loadany (reply to 310022)

#: у меня задача распарсить сообщение исходя из struct как в tact

⁣⁣ᅠ: loadUint вроде это будет опкод получен  loadSlice это будет ваш адрес (reply to 310024)

⁣⁣ᅠ: Tolk тот же func токо с приятным синтаксисом, вот вы как читаете сообщение на fc так же и на tolk

⁣⁣ᅠ: Токо за место ~ везде .

&rey: Вот это уже устарело, там совершенно новые вещи добавляют. (reply to 310026)

Franklin: Hola hice una transferencia de TON con el servicio de TON space a una red equivocada y quiero recuperar mis criptos, alguien me puede ayudar ?

— 2025-06-15 —

⁣⁣ᅠ: Дэ? Понял, почитаю (reply to 310030)

Markin: Здравствуйте! Нужна помощь с запуском сайта на домене .ton.  Что я сделал: Купил домен 1000000000000000000.ton через dns.ton.org  Собрал сайт — обычный index.html  Создал ZIP-архив (в котором один index.html)  Запустил storage-daemon и storage-daemon-cli, сгенерировал bag_id. Пример вывода:  Bag created BagID = 18ef6ceb915b6d2d87ff2a2b6e6645ce0932a3231dc96524c99955b361fd2c03 Прописал bag_id в TON DNS на dns.ton.org, в поле TON Storage (Hosting in TON Storage не включал).  Транзакция прошла успешно, проверил в блокчейне.  Прошло более 2 часов — сайт по адресу 1000000000000000000.ton не открывается ни через Telegram, ни через *.ton.run, ни через foundation.ton.sc.  Дополнительно: curl-запрос к tonapi.io/v2/blockchain/resolve/1000000000000000000.ton возвращает 404  Проверка bag_id и его контента через storage-daemon-cli показывает наличие index.html  На телефоне открываются другие .ton сайты (например, foundation.ton) — значит, с Telegram всё в порядке  Вопрос: Что я делаю не так? Нужно ли активировать “Hosting in TON Storage” галочкой? Или всё-таки должен быть ADNL и прокси, даже для TON Storage?  Буду признателен за любые подсказки🙏🙏🙏

🎐*<@Maxim: Слушай я использовал не storage для сайта, а https://github.com/ton-utils/reverse-proxy/releases/latest/download/tonutils-reverse-proxy-linux-amd64 (reply to 310089)

&rey: 1. Флажок надо включить. 2. А по bag_id получается загрузить? С того же компа сначала, потом попробовать из другой сети (например, с телефона). (reply to 310090)

⛰️ Roman ⛰️: Ton storage это что то по типу ipfs?

&rey: Это "какие-то ноды, которые автор сам должен выбрать, будут хостить файл и находиться через DHT". Торрент, по сути, только со встроенной опцией платить за раздачу своего файла. (reply to 310101)

c95ł: приветствую. как сделать деплой кошелька? wallet.deploy() выдает ошибку

Oleg: Звучит как набор случайных слов. Хоть какой-то контекст нужен (reply to 310107)

⛰️ Roman ⛰️: почему force chain выдает ошибку, ведь адрес имеет фиксированную длину? PS: вроде починил FunC compilation error: cannot generate code for function transfer_ownership:                                                                                                    contracts/nft_item.fc:72:35: error: variable does not have fixed width, cannot manipulate it                                                                                             force_chain(new_owner_address);

Алексей Ковалёв: plizz.wallet.deploy() пробовали?)) (reply to 310107)

Андрей: Туда сначала тоны надо закинуть (reply to 310107)

#: var msg = beginCell()             .storeUint(0x10, 6)             .storeAddress(address("0Q"))              .storeCoins(ton("0.01"))             .storeUint(0, 107)             .storeUint(0x2167da4b, 32)             .storeSlice("test")         .endCell();         sendRawMessage(msg, 1);    скажите а я правильно отправляю зашифрованный комментарий?

&rey: А, собственно, шифровать комментарий кто будет? (reply to 310113)

#: контракт (reply to 310114)

&rey: 1. в этом ноль смысла (reply to 310115)

&rey: 2. в твм нет AES-интринсиков, так что всё это дорого

&rey: ноль потому, что в ретрейсере можно будет увидеть комментарий перед шифрованием (reply to 310116)

#: а почему не могу посмотреть сообщение которое зашифрованно

Алексей Ковалёв: Потому что оно зашифровано (reply to 310119)

#: так оно мне пришло (reply to 310120)

#: кошелек не показывает

Алексей Ковалёв: Странно тогда (reply to 310122)

Алексей Ковалёв: Какой кошелёк используете?

#: тонкипер

Алексей Ковалёв: Как много вопросов и так мало ответов

&rey: Но, отвечая на вопрос: нет, этот код не отправляет шифрованный комментарий, и почти никакой другой код его тоже не отправляет. (reply to 310113)

#: как быть (reply to 310127)

&rey: Подумать. Как совмещается шифрование (с использованием некого ключа) и блокчейн, из которого можно всё считать, что там было. (reply to 310128)

&rey: А на случай, если вы хотели получить от контракта текстовый комментарий: это возможно. Поставьте опкод 0.

#: это у меня получалось. я хотел зашифрованный для теста (reply to 310130)

Denis: А какой кошелёк отправил? (reply to 310125)

⛰️ Roman ⛰️: как создать none_address, который будет начинаться на '00'?

Паша: .store_uint(0,2) (reply to 310134)

⛰️ Roman ⛰️: мне именно адрес нужен, а не нули, что бы код мог прочитать через load_msg_addr() (reply to 310135)

Oleg: А что говорит TL-B? Нулевой адрес это не два нулевых бита? (reply to 310136)

Паша: 00 - и есть пустой адрес https://github.com/ton-blockchain/ton/blob/72056a2261cbb11f7cf0f20b389bcbffe018b1a8/crypto/block/block.tlb#L100 (reply to 310136)

⛰️ Roman ⛰️: это addr_none$00 = MsgAddressExt ?

Паша: Ага (reply to 310139)

⛰️ Roman ⛰️: и как понять, что это имеется в виду store_uint(0,2)?

Oleg: Любым известным в природе способом поместить в ячейку 2 пустых бита. Например, store_uint(0,2) (reply to 310141)

Паша: Ну там $00 значит, что у него префикс в бинарном формате - 00, дальше сразу идет = MsgAddressExt, значит больше данных нет. Значит это прост 00 (reply to 310141)

Паша: А вобще, вот статья про тлб https://docs.ton.org/v3/documentation/data-formats/tlb/tl-b-language (reply to 310141)

⛰️ Roman ⛰️: TLB это что то по типу языка для описания логики работы?

Паша: Описывает не логику работу, а схему, типа как данные хранятся в ячейке (reply to 310145)

&rey: Запись префиксного кода. (reply to 310145)

Nikolay: Привет!  Подскажите, кто хочет написать ревью про свой проект mini app?

Ar: H

#: можно ли в Tolk slice конвертировать в address?

Александр: val addr = anySlice as address; https://docs.ton.org/v3/documentation/smart-contracts/tolk/tolk-vs-func/in-detail#:~:text=Casting%20slice%20to%20address%20and%20vice%20versa (reply to 310165)

#: спасибо (reply to 310166)

#: https://testnet.tonviewer.com/transaction/51bf45010ea2ea6602df4a52b98b0428e20d64030f1e00b2958d772881ff3d5e скажите пожалуйста почему так происходит при отправке жетона?

nnyyyty: Привет! Можете кинуть немного $TON (testnet) для тестов? Вот адрес: UQA3-HqKAgsu-mJVIOJIeTpfFAOTPRjuLnjfCkBfZ8K3uISJ  Спасибо! 🙏

Combot: Total messages: 310179

&rey: Опкод структуры должен быть восьмисимвольный – на 0x0F начинаться. (reply to 310171)

#: спасибо. не добавил 0 в начале

#: https://testnet.tonviewer.com/transaction/ccaa4244798b9e67d0b1219676b9f73e3b7b9fb0ddc6ad718521bc43eabaf183  подскажите почему exit code 9?   var reply = createMessage({             bounce: true,             value: ton("0.055"),             dest: contractJettonWallet,             body: JettonTransfer {                 queryId: 0,                 amount: ton("10"),                 destination: data.ownerAddress,                 responseDestination: data.ownerAddress,                 forwardTonAmount: ton("0.02")             }         });             reply.send(SEND_MODE_REGULAR); struct (0x0f8a7ea5) JettonTransfer {     queryId: uint64,     amount: coins,     destination: address,     responseDestination: address? = null,     customPayload: cell? = null,     forwardTonAmount: coins,     forwardPayload: cell? = null }

&rey: Да, так и догадывался) Может, стоит в толк добавить линт против 28-битных опкодов.

#: обычно автоматически добавлялись нули (reply to 310187)

&rey: Что-то адресу очень плохо. (reply to 310186)

#: 0.058 (reply to 310188)

&rey: Ну, в store_uint они и добавляются, но у структуры может быть тег хоть 4 бита.  А текущая проблема с data.ownerAddress. (reply to 310189)

#: это из struct Storage (reply to 310192)

#: struct StoredInfo {     ownerAddress: address,     counter: int,     jettonMinterAddress: address,     jettonWalletCode: cell }    @inline fun loadData(): StoredInfo {     var cs = contract.getData().beginParse();     return {         ownerAddress: cs.loadAddress(),         counter: cs.loadUint(32),         jettonMinterAddress: cs.loadAddress(),         jettonWalletCode: cs.loadRef()     } }

&rey: Значит, надо идти выше и искать, что там с адресом происходит. (reply to 310193)

#: гет метод возвращает адрес владельца

Александр: скорее всего надо не address? а просто address. и вызвать createAddressNone а не null (reply to 310186)

Александр: address? это Maybe<address>

⛰️ Roman ⛰️: Это tolk? (reply to 310186)

#: да

⛰️ Roman ⛰️: Туда уже все из func перенесли что ли? Или сыроват пока

#: следующее обновление релиз (reply to 310201)

#: щас 0.99 версия

#: кстати сработало. спасибо (reply to 310197)

#: cell? в custom forward payload можно так оставить nullable? (reply to 310197)

Александр: вообще правильнее вот это будет  https://docs.ton.org/v3/documentation/smart-contracts/tolk/tolk-vs-func/pack-to-from-cells#special-type-remainingbitsandrefs (reply to 310205)

#: поставить slice ? (reply to 310206)

Александр: RemainingBitsAndRefs (reply to 310207)

#: ну ему приравнивают тип slice (reply to 310208)

Александр: ну не, не совсем, это к тому что оно слайс вернёт если попытаться прочитать

#: в таком случае он будет обязательный или как?

Nikita: Привет, подскажите пж в чем проблема. Пытаюсь в сендбоксе запустить тест, который падает на этой строке        23 |         blockchain = await Blockchain.create();       24 |     > 25 |         const deployer : SandboxContract<TreasuryContract> = await blockchain.treasury('deployer');          |                                                                               ^       26 |       27 |         counter = blockchain.openContract(       28 |             Counter.createFromConfig( ошибка вот такая     TypeError: Cannot convert undefined to a BigInt         at BigInt (<anonymous>) Тест из шаблона, не понимаю почему код не работает. Вроде должно возвращать объект, но приходит undefined. Смотрел туторы, у всех вроде бы тоже самое  upd. надо было сделать npm install @ton/core@latest ☠️

Teers k 🐾: А можно ли постоянно следить за адресом кошелька с golang входные и выходные транзакции? Суде по информации который я нашел в интернете я должен отслеживать вес мастерчейн что крайне неудобно отслеживать вес блокчейн ради одного адреса

Denis: Не надо так делать. Прочитайте описание метода ссылку на который дали (reply to 310219)

Teers k 🐾: А есть варианты? (reply to 310220)

Namon: У тонапи есть вебхуки, как минимум (reply to 310221)

Denis: Ну или просто в том же тонапи транзакции по аккаунту запрашиваете (reply to 310221)

Denis: Но вот что точно не надо так это аккаунтЭвенты из тонапи использовать для автоматического трекинга

Denis: Потому что например на следующей неделе добавятся ряд новых экшенов. А у вас код не умеет с ними работать. Что делать будете? (reply to 310225)

Denis: Так они заменятся новыми. Был contract call, а станет purchase

Denis: https://tonapi.io/v2/blockchain/accounts/saint.ton/transactions (reply to 310229)

Teers k 🐾: А есть ограничения по количеству отслеживаемых адресов? (reply to 310222)

Denis: Больше 100 миллионов не проверяли (reply to 310231)

Teers k 🐾: До 100 миллионов работает нормально? В бесплатной версии какой лимит (reply to 310232)

Denis: Куда запрятали? Метод описан в той же доке куда вы ссылку дали (reply to 310233)

Denis: В бесплатной версии вебхуков нет. Но вебхуки чарджатся по транзакционно и отслеживание одного не нагруженного аккаунта почти ничего не стоит (reply to 310235)

— 2025-06-16 —

⛰️ Roman ⛰️: Вопрос, если я сначала вызову функцию сохранения в c4, а после этого случится throw, то данные сохранятся или будет откат изменений?

⛰️ Roman ⛰️: Значит у меня все работает правильно (reply to 310270)

Alex: Привет. Может кто помочь разобраться почему сообщение не отправляется? Вроде одно и то же посылаю, просто разными способами. В этом случае оно падает, а в другом - проходит нормально

L30n1d: Откуда этот мод? (reply to 310272)

Alex: Да с модом все окей. Это 1 + 2(ignore errors) (reply to 310274)

X1ag: not enough grams to transfer with the message : remaining balance is 8716805494ng, need 5083999995001770400 (including forwarding fees) (reply to 310272)

L30n1d: а что за монета? (reply to 310272)

X1ag: это в сообщении которое упало (reply to 310276)

L30n1d: и сумма большая (reply to 310272)

X1ag: с mode=0 попробуй и посмотри что за ошибка

Alex: Спасибо. Видимо накосячил с value для отправки

⛰️ Roman ⛰️: в этом случае builder будет работать как forward_payload? Просто я прочитал, что перед сообщением должно быть 32 битное число равное 0, оно нужно или builder его заменит?

⛰️ Roman ⛰️: или builder заменяет этот 1 бит перед самим forward payload? PS: уже нашел ответ

TonPuff: всем привет, кто знает где взять доступ к API - tonnel, Portals, MRKT?

TonPuff: не нашел? (reply to 309114)

𝐑𝐢𝐜𝐡𝐢𝐞: Mrkt и tonnel не дают. Только через код элемента делать (reply to 310294)

Roma: Всем привет, у меня сейчас произошла следующая ситуация:  я сбросил кошелек в тонкипере и потом зашел в него назад по сид фразе, оказался в пустом кошельке с адресом отличным от того, что был. После этого я снова сбросил и снова вошел по той же сид фразе и уже зашел в мой кошелек с нужным адресом на котором лежали тоны. Почему так произошло и где про этот механизм почитать?

Max: Ваш кошелёк v4r2, полагаю? (reply to 310298)

Roma: оба кошелька w5 были (reply to 310299)

Max: Интересно

Roma: на эфире есть такая вещь, что внутри одной сид фразы есть много разных кошельков, в тоне есть подобное?

Max: subwalletId  Но в тонкипере точно не в этом дело

⛰️ Roman ⛰️: у меня такое бывало, есть две версии: w5 и w5 beta (reply to 310300)

⛰️ Roman ⛰️: вы вроде можете подключить свой кошелек по ключу в TonHub и он покажет все доступные версии вашего кошелька

Roma: понял, спасибо, мне главное нужный не потерять) (reply to 310305)

kurt: всем привет выручите пожалуйста , кто знает) как работать с TDLib через python?  искал инфу, копаюсь уже двое суток, единственное годное что нашел - какой-то python-telegram, и то не работающий на виндусе

Nurislam: Скорми всю документацию tdlib ллмке, она мне так объяснила как работать с tdlib в го (reply to 310308)

L30n1d: Я с ней только на java работаю (reply to 310308)

Алексей Ковалёв: Telethon используй (reply to 310308)

Vitalii: Все привет, я работаю над проектом AITon на TON в тестовой сети и мне нужен тест TON, больше чем выдаёт стандартный faucet. Токены необходимы для тестирования смарт-контрактов и взаимодействия с TON (NFT / AI-сервисы / DeFi Адрес кошелька: 0QDsM-LpOAxoBAGbzWKu99l9DaTSZ2VsAjAQBYZAYCRkO4ZV Буду очень благодарен!!!

Denis: https://tonviewer.com/EQAXByU5SqVhNvvSfQzjHYqY4PiucqTSN5td3oPiEaLV-p0-  интересно а что это за смартконтракт? самый большой холдер usdt из смартконтрактов в тон

Алексей: Кажется, что мост леерзеро (reply to 310322)

Nico: А разве там должны лежать токены? Это же не стандартный мост с залоченой ликвидностью. По идее же происходит минт/Берн каждый раз? (reply to 310323)

Алексей: Не знаю, леерзеро слишком сложный для меня, чтоб разобраться в нём (хотя я пытался) (reply to 310326)

d7: Забудь, придётся разворачивать блокчейн локально, я уже смирился (reply to 310321)

Vladimir: Можно купить на tonconsole.com (reply to 310321)

&rey: А вы тестируйте контракты на тестовых настройках, где требуемые суммы ниже. Жетонам так много не надо – если много тонов ест, то пользователю такого тоже не надо. (reply to 310321)

X1ag: Чуть с вами не согласен, а если ошибка в контракте? Или например, нужно протестировать контракт если на нем лежит N токенов и пр. (reply to 310339)

L30n1d: Имеется ввиду, что на газ надо мало и можно пропорционально уменьшить константы, отвечающие за суммы отправляемые контрактом, например (reply to 310340)

L30n1d: Условно в реальном случае используешь 10 тон, а на тесте 0.1 (reply to 310340)

X1ag: Конечно еще зависит от самого протокола. Мне лично не хватало, потому что у тебя трансфер туда, трансфер туда и 0.5 ton которые кидал на транзу уходят. Также может быть ошибка в протоколе где нибудь на последней транзакции, а тоны ты никак не вытащишь(потому что это для бизнес логики не нужно)

Grigoriy: Создаю кошелек через этот скрипт Когда получаю mnemo и вхожу с ним через тонкипер, то кидает на другой контракт. Подозреваю что дело может быть в каких то либах, которые инициализируется при выполнении скрипта Но ведь адрес кошелька можно вычислить используя только mnemo(subwallet_id=0 везде стоял) Все делаю на стейдже Крч я уже запутался и не могу найти причины по которым у одинаковых мнемо разные адреса.  Вот скрипт чуть переделанный. Там key_pair генерится на основе mnemo  import { Dictionary, toNano } from '@ton/core'; import { WalletId, WalletV5 } from '../wrappers/wallet-v5'; import { compile, NetworkProvider } from '@ton/blueprint'; import { LibraryDeployer } from '../wrappers/library-deployer'; import { getMnemonicsMasterKeyFromSeed, getSecureRandomBytes, keyPairFromSeed, mnemonicNew, mnemonicToWalletKey } from '@ton/crypto';  /*     DOESN'T WORK WITH TONKEEPER. CHOOSE DEPLOY WITH MNEMONIC  */ export async function run(provider: NetworkProvider) {     const mnemonicArray = await mnemonicNew(24); // 24 is the number of words in a seed phrase     const keyPair = await mnemonicToWalletKey(mnemonicArray); // extract private and public keys from mnemonic     console.log('MNEMONIC', mnemonicArray);     console.log('KEYPAIR PUBKEY', keyPair.publicKey.toString('hex'));     console.log('KEYPAIR PRIVATE_KEY', keyPair.secretKey.toString('hex'));      const walletV5 = provider.open(         WalletV5.createFromConfig(             {                 signatureAllowed: true,                 seqno: 0,                 walletId: new WalletId({ networkGlobalId: -3 }).serialized, // testnet                 publicKey: keyPair.publicKey,                 extensions: Dictionary.empty() as any             },             await compile('wallet_v5')         )     );      await walletV5.sendDeploy(provider.sender(), toNano('0.1'));      await provider.waitForDeploy(walletV5.address);      console.log('WALLET ADDRESS', walletV5.address); }  Вот так потом создаю кошелек на python через mnemo  wallet, _, _, _ = WalletV5R1.from_mnemonic(client, wallet_info.mnemonic)   И отдает совсем другой адрес

&rey: subwallet_id по итогу ненулевой... (reply to 310373)

Grigoriy: Там было так, но я стал пробовать разные пакости  const walletV5 = provider.open(         WalletV5.createFromConfig(             {                 signatureAllowed: true,                 seqno: 0,                 walletId: new WalletId({ networkGlobalId: -3 }).serialized, // testnet                 publicKey: keyPair.publicKey,                 extensions: Dictionary.empty() as any             },             await compile('wallet_v5')         )     );   И значение по умолчанию subwalletNumber = 0        constructor(args?: {         networkGlobalId?: number;         workChain?: number;         subwalletNumber?: number;         walletVersion?: 'v5';     }) {         this.networkGlobalId = args?.networkGlobalId ?? -239;         this.workChain = args?.workChain ?? 0;         this.subwalletNumber = args?.subwalletNumber ?? 0;         this.walletVersion = args?.walletVersion ?? 'v5';          // const bitBuilder = new BitBuilder(32);         // bitBuilder.writeInt(this.networkGlobalId, 32);         // bitBuilder.writeInt(this.workChain, 8);         // bitBuilder.writeUint(WalletId.versionsSerialisation[this.walletVersion], 8);         // bitBuilder.writeUint(this.subwalletNumber, 32);          this.serialized = BigInt(this.subwalletNumber) // bufferToBigInt(bitBuilder.buffer());     }  upd:  перепроверил с жестким выставлением subwalletid = 0 все равно адрес не сходится (reply to 310374)

Старый 🐾: Здравствуйте всем какой апи у тестнета

User: Берите любой эндпоинт tonapi, toncenter и дописывайте testnet. в начало (reply to 310379)

Старый 🐾: спасибо

саера: кто знает с этими токенами можно что-то сделать?

Ammar: Hello,  I’ve created a Jetton token on the TON blockchain, but the token name, symbol, and logo are not showing up properly in the wallet / DEX interface.   Here are the token details:  - Token Name: ZogCoin   - Symbol: ZOG   - Decimals: 6   - Jetton Address: EQDPo62Pq1a_yem4hPzBgAK48AJjPvxNAYHmTkMINfRMwZJs   - Logo URL: [attach image or upload it to GitHub/IPFS and insert link here]    Please advise how I can register this token properly so it can display its metadata in the wallet or be used in liquidity pools.  Best regards,   Ammar

Vladimir: Ничего. (reply to 310386)

Vladimir: https://github.com/tonkeeper/ton-assets (reply to 310387)

саера: у них же есть вроде ликвид (reply to 310388)

Ammar: How (reply to 310387)

Ammar: I need help. I'm trying to learn, but I don't understand anything about GitHub.

Старый 🐾: ton-testnet.venom.foundation

— 2025-06-17 —

Старый 🐾: from tonclient.client import TonClient, ClientConfig from tonclient.types import NetworkConfig, ParamsOfMnemonicFromRandom, ParamsOfMnemonicDeriveSignKeys  def generate_wallet():     # Configure client with multiple endpoints for reliability     config = ClientConfig(         network=NetworkConfig(endpoints=[             "https://toncenter.com/api/v2/jsonRPC",             "https://net.ton.dev",             "https://ton-testnet.venom.foundation/rpc"         ])     )          # Initialize client     client = TonClient(config=config)          try:         # Step 1: Generate mnemonic phrase         mnemonic_params = ParamsOfMnemonicFromRandom(             dictionary=1,  # English wordlist             word_count=24  # 24-word phrase         )         mnemonic_result = client.crypto.mnemonic_from_random(mnemonic_params)          # Step 2: Derive keys from mnemonic         derive_params = ParamsOfMnemonicDeriveSignKeys(             phrase=mnemonic_result.phrase,             dictionary=1,  # Must match the dictionary used for generation             word_count=24  # Must match the word count used for generation         )         keys = client.crypto.mnemonic_derive_sign_keys(derive_params)          # Print results         print("\n=== TON Wallet Generated ===")         print("Seed phrase:", mnemonic_result.phrase)         print("Public key:", keys.public)         print("Secret key:", keys.secret)         print("============================")              finally:         # Proper cleanup         client.destroy()  # Execute the function generate_wallet() По чему то генерирует не тестнет

Старый 🐾: И если можете скажите эндпоинты тестнета на создание адрессов

&rey: Там не тон. Вы несколько его вариантов (форков, по сути) мешаете вместе. (reply to 310396)

&rey: А это всегда оффчейн делается, в блокчейне никаких релевантных данных нет. (reply to 310398)

Combot: Привет, Софья Соловьева! Прочти правила и нажми кнопку ниже.

Полина: Здравствуйте! Я выпустила свой Jetton и хотела бы сделать его проверенным. Он уже отображается в Tonviewer с логотипом, но в Tonkeeper помечен как «непроверенный». Подскажите, пожалуйста, куда обратиться для верификации?

Иван: https://t.me/tondev/284289 (reply to 310426)

Полина: Спасибо! То есть никуда писать и оставлять заявку не нужно? (reply to 310427)

⛰️ Roman ⛰️: когда на контракт приходит сообщение ТОНы зачисляются сразу или только после того, как контракт отправил return ()?

L30n1d: сразу (reply to 310434)

Tim: DA Там немного сложнее механизм на самом деле. Зачисляются то они сразу, но могут  и уйти обратно при баунсе. (reply to 310434)

Андрей: @ScalienDev куда пропал?

Nurislam: А что произошло? Кинул? (reply to 310438)

Андрей: Пока не ясно (reply to 310439)

Nurislam: Да он моего знакомого кидал :) (reply to 310440)

Андрей: Хоть сделанное пусть отдаст. За что заплачено. Если дальше не хочет работать (reply to 310442)

Max: Он же невнятный бред сюда пару раз писал. Как можно было взять его что-то делать?

Vladimir: И в @tmabuild "известный" персонаж.

User: Он помнится пытался продать мне AI утилиту какую-то, без AI и без утилитарности. Просто интерфейс в общем-то :) (reply to 310443)

Лёва: О чём говорит это сообщение? Я отправляю пачку message в одной транзакции через один кошелёк в testnet каждую секунду. Я думаю, что обновляю seqno корректно — += 1 после каждого вызова raw_transfer. Первая транзакция выполняется и видима в в эксплорере, потом я получаю еще около пяти tx_hash от пяти вызовов, а затем вот это сообщение заваливает весь вывод. Использую tonutils  HTTP 406 Error for https://testnet.tonapi.io/v2/blockchain/message: {'error': 'error code: 0 message: cannot apply external message to current state : External message was not accepted\nCannot run message on account: inbound external message rejected by transaction ABCDEF:\nexitcode=133, steps=49, gas_used=0\nVM Log (truncated):\n...SIGNU\nexecute PUSHCONT x28945F0ADB31E1F2C087\nexecute IFNOT\nexecute XCHG s2\nexecute NOT\nexecute XCHG2 s0,s7\nexecute AND\nexecute THROWIF 132\nexecute XCPU s2,s5\nexecute EQUAL\nexecute THROWIFNOT 133\ndefault exception handler, terminating vm with exit code 133\n'}

&rey: А почему бы оно работало каждую секунду? (reply to 310448)

Андрей: Ну мне то надо было простую в принципе вещь и он её сделал. (reply to 310447)

Лёва: Потому что я хочу, чтобы оно работало. Почему оно не делает, как я хочу?) (reply to 310449)

&rey: Потому что чейн делает так, как написан контракт, а больше одного экстернала за блок он не примет. (reply to 310451)

&rey: Хайлоад примет, но лучше группировать сообщения.

Лёва: Вот это мне и было нужно, спасибо

#: struct Asset {     // Specify 0 for native (TON) and omit all following fields     // Specify 1 for Jetton, then you must set non-null values for the following fields     type: Int as uint4;      workchain: Int as uint8 = 0; // Both these zeros will be removed during the .build() function. Only type will remain.     address: Int as uint256 = 0; }     let asset0 = Asset {         type: AssetTypeNative,     };     let asset1 = Asset {         type: AssetTypeJetton,         workchain: jettonMasterRaw.workchain,         address: jettonMasterRaw.address,     }; здравствуйте, скажите Asset это ячейка? dedust

Grumpy: Здравствуйте здесь можно поделиться гитхабом?

L30n1d: каким? зачем? (reply to 310461)

Grumpy: Выложил в публичный доступ арбитражный скрипт с исходным кодом , используются только официальные библиотеки может быть кому-то будет интересно (reply to 310464)

L30n1d: А как он с TON связан? (reply to 310467)

Grumpy: Полностью (reply to 310469)

L30n1d: Ну тогда присылай, показывайте (reply to 310470)

Grumpy: https://github.com/CringeSon/TonArbitrage (reply to 310471)

⛰️ Roman ⛰️: что бы в контракт отправить udict нужно в typescript создать обычный Map<key, value>() ?

Nerses: Для этого кода:  nativeReserve(self.storageReserve, ReserveExact | ReserveAddOriginalBalance | ReserveBounceIfActionFail); message(MessageParameters {     to: sender(),     value: 0,     bounce: false,     mode: SendRemainingBalance, }); message(MessageParameters {     to: receiver,     bounce: false,     value: amount,     mode: SendPayFwdFeesSeparately });  я получаю ошибку 40. А при другом порядке действий:  nativeReserve(self.storageReserve, ReserveExact | ReserveAddOriginalBalance | ReserveBounceIfActionFail); message(MessageParameters {     to: receiver,     bounce: false,     value: amount,     mode: SendPayFwdFeesSeparately }); message(MessageParameters {     to: sender(),     value: 0,     bounce: false,     mode: SendRemainingBalance, });  я получаю ошибку 37. Я думаю, что эта проблема связана с описанным здесь случаем, но так и не могу понять, как её решить. Кто-нибудь ещё сталкивался с подобной ситуацией?

TWO: Всем привет 🤝  Кто знает приватный апи от гг?

User: У них была graphQL апишка, правда вроде ее закрыли (reply to 310479)

TWO: Понял, буду искать дальше  Грац за быстрый ответ 🙏 (reply to 310480)

Старый 🐾: Кто поможет с проблемой тонкипера в лс

Max: @tonkeeper и поможет (reply to 310483)

Старый 🐾: у меня с десктоп версией

Max: Без разницы какая  Поддержка обучена помогать с любой

Иван: Подскажите, есть ли какие-то сервисы в TON, которые по набору известных адресов кошельков нарисуют ориентированный граф их взаимодействия, включая промежуточные кошельки?

X1ag: Dictionary.empty(Dictionary.Keys.Uint(32), Dictionary.Values.BigUint(256));  например (reply to 310473)

Артем: Гайс, хочу посмотреть что на тоне есть популярное из гемблы, по типу мины 5х5, можете покидать в лс референсы, если знаете что то толковое, буду признателен   Не реклама и тд просто собираю для себя базу таких штук, хочу делать аналог

&rey: А на ton.app уже всё устарело? (reply to 310494)

Juster: Всем привет а подскажите плиз мы хотим на проекте раздавать подарки за участия в эвентах. Подарки можно передавать offchain на прямую или  только через blockchain?

⛰️ Roman ⛰️: помогите пожалуйста, функция ~udict::delete_get_min в func постоянно выдает cell underflow, это точно она, так как я ее уже отключал и заменял. Может я как то не так создаю Dict?

sd: Офчейн в профиль телеграма, ончейн на адрес тон (reply to 310498)

Старый 🐾: я им часа 2 пишу

Combot: Combot выдал(а) предупреждение Старый 🐾 Кот (1/3) Reason: 1 reports (reply to 310504)

Petr: Похоже проблема что вы используете storeDict который записывает данные в реф, попробуйте storeDictDirect (reply to 310501)

Md Tarek: নননন

Petr: А хотя кажется это вообще не нужно, просто закройте dictBuilder и передайте полученный cell вместо dictCell (reply to 310510)

⛰️ Roman ⛰️: У dictBuilder нет метода endCell(). DictBulider это просто название переменной, он типа Dictionary<number, Cell> (reply to 310512)

Petr: упс, вы правы, первый вариант должен сработать

⛰️ Roman ⛰️: Да, теперь работает, но выходит ошибка, когда я хочу из item взять coins и ref. item~load_coins() и item~load_ref(), хотя я их помещаю в dict при создании (reply to 310514)

Petr: А какая ошибка?

⛰️ Roman ⛰️: Та же, cell underflow

Petr: Смутно припоминаю, не уверен, но попробуйте перед парсингом у полученного слайса из мапы взять первый реф и только затем парсить из него данные

⛰️ Roman ⛰️: Не помогло, даже если сначала загружать item~load_ref(), а потом остальное... Но как я понял ошибка cell underflow возникает когда я передаю данные которые достал в другую функцию, а не когда достаю их из слайса. Если заменить эти значения на похожие и передать в функцию, то все ОК

⛰️ Roman ⛰️: . (reply to 310518)

Petr: Хм, звучит так что как раз проблема не в функции, а в том как данные из слайса от дикта достаются (reply to 310519)

Petr: А покажите код как вы работаете со слайсом от дикта

⛰️ Roman ⛰️: это код всей функции. Как видите, если в функцию снизу засунуть не переменные из слайса, а 10000000 и begin_cell().end_cell(), то все работает (reply to 310522)

Petr: Хм, но вы загружаете load_ref но затем не используете загруженный cell для чтения данных, а просто читаете дальше из оригинального слайса

Petr: var item_ref = item~load_ref().begin_parse(); ... item_ref~load_coins()

⛰️ Roman ⛰️: Сейчас попробую.. (reply to 310525)

⛰️ Roman ⛰️: Да, сработало, спасибо. Сейчас ещё потестирую в разных условиях (reply to 310525)

/B4ckSl4sh\: с https://mainnet-v4.tonhubapi.com сейчас какие-то проблемы есть? Или всё хорошо и это на моей стороне проблема?

Denis: Все норм. Но там вроде какие-то скачки тпс (reply to 310541)

/B4ckSl4sh\: В общем хз, возможно конечно у меня руки кривые, но через тонапи нормально заработало (reply to 310542)

/B4ckSl4sh\: *возможно заработало потому что половину кода переписал (reply to 310543)

/B4ckSl4sh\: Не, я реально не понимаю в какой момент людям пришла идея делать библиотеки зависимыми от клиента/провайдера. В тысячу раз удобнее когда тебе либа просто экстернал для воллета возвращает, а отправляй уже как хочешь - такая функция у любого провайдера есть

ĥammyy: Ниче не понимаю вы о чем

L30n1d: что? (reply to 310546)

/B4ckSl4sh\: Ну вот обычно объект воллета создаёшь - тебе нужен какой-то провайдер параметром. Будь то лайтсервер для pytoniq, TonClient для @ton/ton и т.д

/B4ckSl4sh\: По итогу когда тебе нужны преимущества нескольких библиотек в одном проекте - имеешь блин кучу провайдеров вместо одного

/B4ckSl4sh\: Короче библиотеки с "офлайн" контрактами гораздо удобнее и мне жаль, что таких библиотек не очень много

Denis: В tongo для кошелька нужен стандартный интерфейс. И тонапи-го и лайтсервер ему удовлетворяют. Под тонцентр и тонхаб обёртку не писал, но типа строк 20 поди А жсные приколы ваши... (reply to 310550)

Denis: Кстати у тонапи жсной либы вроде тоже есть обёртка которая позволяет использовать его для @ton/ton вместо тонхаба

/B4ckSl4sh\: Но обычно от провайдера ещё какие-то другие методы кроме стандартных для кошелька (то есть вызов гетметода и отправка экстернала в сеть) (reply to 310552)

&rey: а как вы будете гарантировать, что оно точно отправилось? (reply to 310546)

/B4ckSl4sh\: Я не знаю как в го это выглядит, но в @ton/ton такая проблема есть (reply to 310554)

/B4ckSl4sh\: * провайдер как ендпоинт может и с тонцентром и с тонхабом работать, но интерфейс выходит обрезанный (reply to 310556)

/B4ckSl4sh\: Либо это гарантирует для меня провайдер, либо я уж сам гетметод секно буду вызывать пока не обновится (reply to 310555)

&rey: 300 секунд проходит, ничего не обновилось... (reply to 310558)

/B4ckSl4sh\: Значит скорее всего провайдер лежит (reply to 310559)

/B4ckSl4sh\: Как это хендлить это уже вопрос бизнес логики

/B4ckSl4sh\: В любом случае онлайн либы такую проблему не решают

&rey: Это не повод сервису терять обязательство, что трансфер надо сделать. (reply to 310560)

/B4ckSl4sh\: Так в случае офлайн либы я хотя бы без проблем на другого провайдера фолбекнусь (reply to 310563)

&rey: С одной стороны да.  С другой стороны, полному решению вроде бы как нужно лайтсоединение. Точнее, особые методы, которых в тонцентре нет. (reply to 310564)

— 2025-06-18 —

⛰️ Roman ⛰️: Как сделать клон или копию Cell? Получается так, что если я засуну одну и ту же cell в несколько операций, то вторая не сможет прочитать ref

L30n1d: Мне кажется сможешь, если я правильно понял о чём ты Ты же читаешь slice, это стабильная структура, это не InputStream какой-то (reply to 310583)

MellStroy | Темки: Ребят, привет всем, я не особо понимаю как все работает в блокчейне, но можете пожалуйста объяснить мне как у этого кошелька получился такой адрес?  UQABFuckIRGCTerroristsNOBITEX1111111111111111_jT  Возможно ли такое повторить и как это сделать? Буду очень благодарен если поможете понять этот момент

⛰️ Roman ⛰️: Вот код, который в цикле читает udict, если цикл проработает 1 раз, то cell nft_content = item~load_ref(), не выдаст ошибки, но если он проработает 2 раза, то выдаст ошибку cell underflow (reply to 310523)

⛰️ Roman ⛰️: . (reply to 310585)

&rey: А на этом адресе контракт завёлся? Сообщения-то можно отправить на произвольный валидный адрес. (reply to 310587)

&rey: cell another_cell = this_cell; (reply to 310588)

Max: Такой, как в примере выше, подбирать прийдется ой как долго, из поколения в поколение прийдется передавать процесс  Нобитекс взломали и сожгли деньги, вероятнее всего (reply to 310593)

⛰️ Roman ⛰️: И как это поможет? Он же читает dict в цикле, а в значение dict key/value в value я просто продублировал одну и ту же cell, из за этого после первого прочтения ref следующее выдает cell overflow? (reply to 310592)

MellStroy | Темки: Т.е получается такой адрес сгенерировать почти невозможно если пытаться создавать кошельки и ловить его? (reply to 310593)

Max: это да  но в примере выше и не стояло цели иметь приватный ключ (reply to 310596)

Max: Деньги сожжены

Matthew: /v2/nfts/collections/{account_id}  Подскажите пожалуйста, что за account_id я должен передавать?

Паша: Адрес (reply to 310602)

Matthew: Чей? У меня Коллекционные подарки в профиле телеги (reply to 310603)

Паша: адрес коллекции (reply to 310604)

Max: рад за вас. К ончейну это какое отношение имеет? (reply to 310604)

Matthew: Спасибо, помог) (reply to 310605)

web-assist 🧀: Меня вот так с др поздравили))) (reply to 310606)

web-assist 🧀: Как посмотреть у себя на кошельке :D

Matthew: А есть какой то метод получить user_id владельца NFT подарка?

Vladislav: Всем привет! А кто-то может подсказать, как свои подарки загрузить в тг ?

⁣⁣ᅠ: Никак (reply to 310611)

⁣⁣ᅠ: Это хлеб Павлика Дурова которым он не планирует делиться, хотите свои подарки в тг, делайте миниапсу )

Vladislav: И через миниапку продавать свои подарки? А в профиль они будут падать? Есть такая механика ? (reply to 310613)

Max: нет такой механики (reply to 310614)

Vladislav: пончик,спасибо

Max: в своей миниаппке продавайте и показывайте что угодно  в профиле тг показать не сможете

Denzel': а есть на фанси логические операторы типа || или &&?

rends_east: нет, только бинарные | и & (reply to 310619)

Denzel': спасибо (reply to 310620)

Bogdan: Всем хай! У всех такая байда в боте тон центра что нельзя выбрать сеть и в итоге создать бесплатный ключ?

Bogdan: Вот так это выглядит, и получается валидация не проходится и ключ не выдается))

X1ag: hi, подскажите пожалуйста почему ругается?  Отправляю вот такое сообщение с forward_payload:   UPD: Решено. var forward_payload = begin_cell()               .store_uint(op, 32)               .store_slice(user_addr)               .store_uint(token_feed,32)               .store_uint(position_id,32)               .store_ref(begin_cell()                           .store_uint(open_price, 256)                           .store_uint(close_price, 256)                 .end_cell())               .store_uint(long_or_short, 1)               .store_uint(leverage, 10)               .store_uint(entry_cumulative, 256)               .store_uint(timestamp, 32)             .end_cell();  вот как считываю данные с этого forward_payload:  slice sender = in_msg_body~load_msg_addr();       int token_feed = in_msg_body~load_uint(32);       int position_id = in_msg_body~load_uint(32);       slice prices = in_msg_body~load_ref().begin_parse();       int open_price = prices~load_uint(256);       int close_price = prices~load_uint(256);       ... но получаю:  FunC compilation error: ( function `~load_ref` undefined )     cannot generate code for function `~load_ref`:     contracts/position/master_position.fc:98:30: error: ~load_ref                         slice prices = in_msg_body~load_ref().begin_parse();

web-assist 🧀: Открой stdlib ctrl+f ищи load_ref (reply to 310635)

X1ag: уже смотрел, есть: ;;; Loads the first reference from the slice. (slice, cell) load_ref(slice s) asm(-> 1 0) "LDREF"; (reply to 310636)

web-assist 🧀: #include? (reply to 310637)

X1ag: именно)  #include "../imports/stdlib.fc"; (reply to 310638)

X1ag: если бы его не было оно бы ругалось и на другие операции выше load_ref

web-assist 🧀: Ну, я тоже так подумал Но когда тебе говорят что не могут найти функцию, мне другого в голову не приходит (reply to 310640)

X1ag: мне, честно говоря, тоже) поэтому и пишу сюда (reply to 310641)

web-assist 🧀: Помог в лс. Оказалось, что функция из stdlib переназначена в int load_ref

Andrew: Всем привет! Занимаюсь разработкой ботов и столкнулся с проблемой аналитики использования бота.   Поделитесь опытом, сталкивался ли кто-нибудь с подобной проблемой? Как вы её решаете? Мб есть какие-либо готовые сервисы?

Andrew: К примеру, для того, чтобы адекватно проанализировать Retention, MAU/DAU, источники притока пользователей (по рекламе) и их поведение в целом, нужно каждый раз реализовать собственноручно под это код. Не смог найти готовые решения для телеграм ботов.

L30n1d: https://builders.ton.org/opportunities/analytics (reply to 310648)

Andrew: О, благодарю! Но насколько я понимаю из документации, оно заточено под вебаппы, есть ли какие-то варианты для текстовых ботов, в которых взаимодействие построено вокруг чата телеграмма и командах? (reply to 310649)

L30n1d: А, такое было когда-то давно у яндекса, но они забросили проект. (reply to 310650)

Vladimir: Там нет просмотра аналитики. Пока. (reply to 310649)

L30n1d: Так что я сам всегда делал (reply to 310650)

Vladimir: Но лучше спрашивать в @devs_cis. (reply to 310648)

Andrew: Пользователей не было или почему? (reply to 310651)

Andrew: Хорошо, продублирую вопрос туда, спасибо! (reply to 310654)

⛰️ Roman ⛰️: почему когда я добавляю в сообщение, которое деплоит контракт предмета nft последнюю строку с ref, там где 'very important data', то выходит ошибка cell underflow? Подразумевается что в этом ref лежит in_msg_body для будущего контракта, который задеплоится

— 2025-06-19 —

Alexey: Ииии, он не сработал. Тест падает на старте:  Error: Error while executing transaction: Can't unpack shard account Blockchain logs: [ 4][t 0][2025-06-19 04:46:22.597000][transaction.cpp:443]  unpacking account CD503242D2242F268669D2697E62D78BD4DB535CAA61534DC24C8E6FE15B4184 [ 4][t 0][2025-06-19 04:46:22.597000][transaction.cpp:274]  last_paid=1749511847; cells=13 bits=4811 public_cells=0  И дальше стектрейс в котором мой код только в самом начале вызова отправляет сообщение (reply to 309199)

Alexey: Это стейты которые я выдернул из тон апи несколько дней назад, в один момент, и удостоверился что пока я их переносил в код никаких транзакций ни на usdt master, ни на usdt seller не было:  export const testUsdtSeller: ShardAccount = {     account: {         addr: usdtSellerAddress,         storageStats: {             used: { cells: 13n, bits: 4811n, publicCells: 0n },             lastPaid: 1749511847,             duePayment: 0n,         },         storage: {             lastTransLt: 35568177000001n,             balance: { coins: 2085904104863n },             state: { type: 'active', state: { code: sellerCode, data: sellerData } },         },     },     lastTransactionHash: 0x165f4523aa4215018b01136b49a0b4bee232538f1e4340ac8d87865ce530cd27n,     lastTransactionLt: 35568177000001n, }  export const testUsdtMaster: ShardAccount = {     account: {         addr: usdtMasterAddress,         storageStats: {             used: { cells: 43n, bits: 19524n, publicCells: 0n },             lastPaid: 1749511847,             duePayment: 0n,         },         storage: {             lastTransLt: 35568177000003n,             balance: { coins: 14233027867n },             state: { type: 'active', state: { code: masterCode, data: masterData } },         },     },     lastTransactionHash: 0x217b197f330759ec5e185a2b8cacd862566e04e94959ea9d7a6484325f2f4bban,     lastTransactionLt: 35568177000003n, }

Кирилл: здравствуйте! Что-то я не нашел работу с TON`овской либой на питоне в доках, не подскажете где она?

User: https://github.com/nessshon/tonutils/tree/main/examples  Если нужна более низкоуровневая история: https://github.com/yungwine/pytoniq/tree/master/examples (reply to 310672)

Кирилл: спасибо (reply to 310673)

Skuli: Нифига у вас конкурсы весёлые (reply to 310654)

Skuli: Надо в тон дев сделать: Реши несложную задачу из мира компьютерных наук. Докажи математически весь консенсус блокчейна TON. Если не спрашивается снова можно будет через минуту.

Василий: Чет сложно. Если вам нужен только код и дата, то можно вот так делать: https://github.com/ton-blockchain/liquid-staking-contract/blob/main/tests/Integrational.spec.ts#L232-L237 (reply to 310671)

73ddy: Есть ли возможность в кипере или другом популярном кошельке импортить кош с указанием кастомного wallet id?

Tim: Нет (reply to 310688)

73ddy: это печально, спасибо (reply to 310691)

Denis: возможно скоро в кипере будет прозрачно работать. как раз пишу доку для разрабов

73ddy: прозрачно в формате readonly или можно будет менять? (reply to 310693)

Denis: если задеплоен то подтянется

Denis: ну и в тонкипере про есть механизм кучи кошельков на одном сиде

Denis: но это надо создать новый тип кошелька

Tim: В тонапи появится какой то метод поиска кошелька по сидке? (reply to 310695)

Denis: я как-то в логах в авторизационных токенах нашёл сид чей-то с деньгами (reply to 310699)

Denis: а метод поиска по пабкею давно был. просто мы его причесали на днях

Tim: По публичному ключу имел ввиду, да) (reply to 310701)

Tim: Сейчас добавлю в девваллет. Он только well known айдишки проверяет пока (reply to 310701)

Denis: ну добавь. но оно пока не в проде. пока тоже возвращает только велл ноун

Tim: Реданданси никому не вредил (reply to 310704)

Tim: Не хватает немножечко полей в ответе, чтобы инициализировать кошелек без доп запросов. (reply to 310704)

Denis: сабволлета нет

Dmitry: Всем привет 👋  есть смарт контракт с рефералкой и переводами вознаграждений  при обновлении кода контракта и его деплоя, создается новый контракт, тк предыдущий immutable  кто как решает такого рода задачи?  видиться что тут нужен механизм миграции пользаков и вознаграждений из старого контракта в новый

Roma: В контракте прописать функционал обновления кода (reply to 310717)

Dmitry: спасибо, попробую так сделать 🙂 (reply to 310718)

Крестный Отец: Можно как то через аппи брать курс TON?:

⛰️ Roman ⛰️: GET https://tonapi.io/v2/rates?tokens=ton&currencies=usd (reply to 310726)

diesel: это где такие задания можно решать? дай ссылку на бота пж, кстати ответ 1D, легкая задачка (reply to 310679)

Denis: Вы наняты (reply to 310731)

Oleg: В одну из тех контор, где индусы решают капчи? (reply to 310735)

⛰️ Roman ⛰️: имитируют ИИ (reply to 310736)

Skuli: @devs_cis (reply to 310731)

DT: Здравствуйте! Не могли бы помочь с вопросом:  Раньше я создавал кошелёк в Tonkeeper с 12‑словной сид‑фразой( там был выбор 12 или 24) и всё работало отлично — я восстанавливал кошелёк именно по 12 словам. Однако теперь, при попытке восстановить кошелёк, кнопка  “Continue” не активна. Не знаете в чем дело?

Skuli: Я решил сразу) Хотя решил не правильно, но правильно выбрал ответ))

DT: В поддержке сказали, что всегда было только 24 фразы

Max: В тонкипере действительно генерируется только мнемоника из 24 слов  Импортировать уже да, можно и 12 и 24 слова (reply to 310747)

sambo: привет всем! Может кто поделиться примером инициализации перевода с одного кошелька на другой через usdt? Я реализовал через TON без использования jetton но мне нужно ещё и USDT переводы подключить

L30n1d: Там нужен ресивер JettonTransferNotification и там уже проверяете, что оно пришло от правильного кошелька и считаете зачисленными. (reply to 310756)

L30n1d: а, чуть не забыл ещё forward_ton_amount > 0 должен быть, иначе уведомление не отправится (reply to 310757)

sambo: так работает и с прочими токенами,как hkombat и notcoin?

Оскар: респонс используется для того чтобы отправителя уведомить об успешном переводе (и вернуть излишки тон), уведомление приходит на получателя автоматически если forward_amount больше нуля, вместе с переданным forward_payload (reply to 310757)

L30n1d: да, сори, ошибся (reply to 310761)

L30n1d: это стандарт для жетонов, но можно чекнуть контракты этих жетонов (reply to 310760)

sambo: понял,трансфер тона проще но и usdtшку подключить хочется🥲

L30n1d: на tact это примерно так выглядит:   receive(msg: JettonTransferNotification) {          require(sender() == self.tokenWalletAddress, "Invalid sender");          require(msg.amount > 0, "Wrong amount");          self.tokenBalance += msg.amount;  // ваша логика      } (reply to 310764)

Саша Кирейко: Куда я жмаал

Саша Кирейко: Возьми возраст всех тех кто использовал TON в своей жизни и вычисли энтропию шеннона (reply to 310682)

SBT: Добрый вечер, могу ли я связаться с кем нибудь из команды Tonkeeper, чтобы помогли мне разобраться в одной проблемой?

L30n1d: С какой проблемой? (reply to 310772)

SBT: Если вкратце, то кража средств с кошелька без подписания транзакций и подключения приложений на левый кошелек  Несколько человек включая меня попали в данную ситуацию, но у каждого она отличается  И все средства попадают на один неактивный кошелек  И данную проблему я не назвал бы дрейнером  Если есть человек, который мог бы как то пояснить всю ситуацию и узнать больше деталей, можете написать мне в личные сообщения. Я хотел бы с этим разобраться и понять в чем проблема (reply to 310773)

L30n1d: Оставь подробную информацию в каком-нибудь telegraph и оставь ссылку — кто-нибудь на досуге посмотрит или перешлёт кому надо (reply to 310774)

SBT: Хорошо (reply to 310775)

Oleg: С другой стороны, если это breach, такая публикация может помочь злоумышленникам

⛰️ Roman ⛰️: есть ли какой то смысл для индекса нфт ставить 64-битное число? допустим у 32 бит индекс может быть более 2 миллиардов, зачем больше? а если брать без знака, то и все 4 миллиарда

L30n1d: Не стоит этого делать - в стандарте используется uint64  https://github.com/ton-blockchain/TEPs/blob/master/text/0062-nft-standard.md?plain=1 (reply to 310778)

L30n1d: А, там вообще 256? С телефона не удобно (reply to 310779)

Виктор: аххахаха, примерно также думали сетевики когда ipv4 придумывали (reply to 310778)

⛰️ Roman ⛰️: да, тоже заметил, но в примерах используют 64 бита (reply to 310780)

L30n1d: Если честно, в tact просто ставлю тип int и не задумывался (reply to 310782)

⛰️ Roman ⛰️: ладно щас посмотрю код уже выложенных нфт контрактов

L30n1d: https://github.com/ton-blockchain/token-contract/blob/main/nft/nft-collection.fc#L25C1-L25C37  вот пример на func, там 64 🤔 (reply to 310784)

⛰️ Roman ⛰️: да, я про это и говорил (reply to 310785)

L30n1d: https://github.com/ton-blockchain/token-contract/blob/main/nft/nft-collection.fc#L33  и тут в state init тоже 64 (reply to 310786)

⛰️ Roman ⛰️: я проверил еще другие контракты, подарков телеграм и коллекций на getgems, везде 64 бита. ну лады (reply to 310788)

⛰️ Roman ⛰️: я просто когда хочу в словарь поместить 129 пунктов ключ/значение для множественного деплоя контрактов мне выдает ошибку, но когда помещаю 128 пунктов то все ОК. Вот я и думал уменьшить кол-во бит. Там вроде бы ограничение 249 деплоев за одно сообщение

— 2025-06-20 —

Alexey: Можешь в контракте ставить такую размерность какая тебе удобна, главное в методах отдавать в нужной (reply to 310778)

Grigoriy: А где можно почитать о keypair кошелька, как он получается из мнемо, как из privateKey собрать мнемо и тд. В общем где можно найти всю инфу про это? В доках копаюсь, но не нахожу

🐼 Sild: https://github.com/Sild/ton_lib_rs/blob/main/ton_lib/src/types/ton_wallet/mnemonic.rs#L38 можно например так (reply to 310803)

Grigoriy: Я уже писал сюда об этом, но напишу еще раз. Деплою walletv5 с официального враппера. Когда с помощью tonutilts на python открываю этот кошелек, то raw адрес не сходится. public_key, private_key, mnemo сходится, а адрес нет. subwallet_id указывал 0, networkid -239, все перепробывал, код walletv5 сходится во враппере и tonutils  В чем может быть еще ошибка?

🐼 Sild: pub const WALLET_V5R1_DEFAULT_ID: i32 = 0x7FFFFF11; pub const WALLET_V5R1_DEFAULT_ID_TESTNET: i32 = 0x7FFFFFFD;   попробуй эти айдишники  правда я не работал с тонутилс и точно не знаю что такое subwallet_id, но звучит похоже (reply to 310805)

73ddy: там дефолтный айдишник не 0 (reply to 310805)

Grigoriy: ... (reply to 310807)

Grigoriy: попробовал указать при деплое 0x7FFFFF11 и на питоне указал его же 0x7FFFFF11 Все равно адрес разный...  Когда ввожу мнемо в tonkeeper, то тоже открывается другой адрес

Grigoriy: а с walletV4R2 все ок, проверил только что

🐼 Sild: покажи как дату для v5 формируешь

🐼 Sild: ну и проверь что code_hash совпадает на всякий, мало ли

⛰️ Roman ⛰️: блестяще ✨. Мне все таки удалось пофиксить ту ошибку с dict, которая выдавала cell underflow

⛰️ Roman ⛰️: https://testnet.tonviewer.com/kQA_ySYQbmlwO6bq2jsrtTovhheMfRECql34f4HAq###### успех и прорыв (reply to 310815)

Groom: Всем привет! Заранее прошу прощения, если ошибся чатом, но, мало ли, кто-нибудь сможет навести.  Задача следующая: Поднять валидатор в тестнете  Проблема: Не понятно, как зафондировать валидатор. Да, тут есть testgiver, я завёл кошелёк, подал свой адрес 2 часа назад, но 2тона не получил. Прочие faucet, что я нашёл, дают так же 1-2 TON. Для возможности избраться, судя по конфигу, в тестнете нужно >10k TON.   Пожалуйста, направьте в нужном направлении

&rey: А чем вы докажете, что вы не вырубите валидатор в середине раунда? Тестнет так уже ложился.  А так, обратитесь к @f_closer. (reply to 310827)

/B4ckSl4sh\: Поднять собственную сеть через MyLocalTon не вариант? (reply to 310827)

Groom: Кажется, что любые доказательства, которые я могу здесь привести - это не более, чем слова, которые только на веру принять  Всё, что я могу сказать - так это то, что есть желание запустить тестнет (девнет) - как это делается в остальных сетях, чтобы иметь возможность получить эксплуатационный опыт + мониторинг, а затем запустить то же самое, только в мейннет. Важен именно опыт эксплуатации, соответственно, валидатор в тестнете так же должен поддерживаться в рабочем состоянии, особенно в моём случае  Что-то кроме этого сложно привести. Если есть какой-то процесс верификации или типа того, пожалуйста, сообщите, постараюсь заполнить/пройти (reply to 310829)

/B4ckSl4sh\: Можно ещё чтобы вы стейк в тон мейннете на контракт положили, и потом какую-нибудь трастлесс схему которая бы пруфала, что ваш валидатор активен. Если не активен то обнаруживший это забирает ваш стейк (reply to 310833)

/B4ckSl4sh\: Если что, я шучу, никто не будет это писать) Хотя кажется, что теоретически это вполне возможно

Groom: Интересная история, спасибо за шутку)))

maksim: https://docs.ton.org/v3/guidelines/nodes/running-nodes/full-node  там внизу есть саппорт для валидаторов и нод, можно туда написать (reply to 310833)

— 2025-06-21 —

SB: Всем привет! Почему приложение Tonkeeper так тормозит? Невозможно ничего сделать. Уже обновил - бесполезно

Tand: На MyTonWallet переходи там нет проблем (reply to 310852)

SB: Там также можно продлить домены ton? (reply to 310854)

Tand: Конечно (reply to 310855)

SB: А в тонкипере то в чем проблема? (reply to 310856)

Max: Проблема в неуважаемой организации под названием Роскомнадзор? (reply to 310858)

Akim: Всем привет! Пытаюсь получить баланс USDT по разным докам, написал с gpt'шками и доками tonutils-go такой код: addr := address.MustParseAddr("тут я ввел свой адресс из тонкипера") client := liteclient.NewConnectionPool()  if err := client.AddConnectionsFromConfigUrl(context.Background(), "https://ton-blockchain.github.io/global.config.json"); err != nil {   log.Fatalln("connection err: ", err.Error()) } api := ton.NewAPIClient(client, ton.ProofCheckPolicyFast).WithRetry()  ctx := client.StickyContext(context.Background()) master := jetton.NewJettonMasterClient(api, addr)  jettonWallet, err := master.GetJettonWallet(ctx, addr) if err != nil {   fmt.Println("GetJettonWallet")   log.Fatal(err) }  jettonBalance, err := jettonWallet.GetBalance(ctx) if err != nil {   fmt.Println("GetBalance")   log.Fatal(err) } log.Println("balance:", jettonBalance.String())  Но почему-то каждый запуск получаю ошибку: failed to run get_wallet_address method: contract exit code: 11  В чем может быть проблема? Адрес валидный, usdt на кошельке есть

Паша: Мне кажется сюда надо не адрес твоего кошелька вставлять, а адрес жеттон мастера usdt (reply to 310873)

Akim: А где его найти? (reply to 310875)

Паша: EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs вот он (reply to 310876)

Akim: Спасибо! (reply to 310877)

Grigoriy: А где можно купить тестнет тоны? Мне надо штук 200

Vladimir: tonconsole.com (reply to 310881)

Sergey: Кто знает ? Я вижу можно купить доменное имя .ton ? Не могу понять , .ton это Top Level Domain ? Имеется. В виду смогу ли я потом как то настроить DNS чтобы сайт открывался по адресу example.ton к примеру ?

Daniel: Вы можете к .ton домену привязать сайт или кошелек  Но стандартные браузеры, по типу chrome или safari не поддерживают .ton домены, поэтому нужен прокси или расширение (встроенный браузер в Telegram поддерживает). (reply to 310883)

&rey: Нет. Но тон-совместимые приложениям на это без разницы, они будут открывать условный foundation.ton всё равно. (reply to 310883)

Fxwrmych: Привет, а как вы скидаете так код ? (reply to 310873)

Akim: print("Hello World")

Akim: Скинул выше (reply to 310890)

— 2025-06-22 —

Jose: 0QAqEjBA4QmOnHbeEhV1TRIR1xhf_NK5RZMtbNm2KZPAGtYb

⛰️ Roman ⛰️: Как убрать надпись "Не проверенный NFT"? Можно ли как то у всех NFT одновременно убрать эту надпись?

Gorlomir: Кстати такой же вопрос (reply to 310912)

Vladimir: https://github.com/tonkeeper/ton-assets (reply to 310912)

Teers k 🐾: Это будет работать только у тонвиевер с тонкипер но не для гетгеймс и других? (reply to 310914)

Tand: TON Payment Network (Beta): added support for Jettons and Extra-currencies  The latest update to the TON Payment Network adds support for Jettons and Extra-currencies as well as other enhancements.  https://github.com/xssnick/ton-payment-network  https://github.com/xssnick/payment-channel-contract

Tand: в платежных каналах можно сплитовать платежи?

Evgeniy: Недавно пробовал использовать @TONSubdomainBot для создания под домена. Смарт контракт создался и подвязался к домену, имя под домена принимает, но на этапе установки ADHL адреса сервера вылетает ошибка как на изображении. Пробовал не единожды, с суффиксом и без, в разное время. Что-то делаю не так?  Под домен: auth Адрес: ur4pytcxx7ybw5vb5yg2o64hsnzm5urpzv62d6ojwd7hetyekzg37wl.adnl  Если можете поделиться ссылками на профильные чаты, буду благодарен.

Андрей: Это и есть самый профильный чат, но делать такое через бот я бы не стал Уж лучше одностраничник который позволяет сформировать нужное сообщение в сеть что бы создать и привязать субдомены (reply to 310940)

Evgeniy: Пару таких сайтов я уже находил в сети, этапы там все те же, тот же принцип работы, как и у бота. В их работе я заметил проблемы и не стал рисковать. Бот выглядел самым приличным из всех. Можешь поделиться примерами сайтов, генерирующих сообщения? Есть ссылки? (reply to 310942)

Evgeniy: Да, такой сервис может заложить в код созданного им контракта все что угодно, но становиться разработчиком смарт контрактов, настраивать среду разработки и отладки этих контрактов, изучать пару дополнительных языков программирования, ради рутинной задачи, на мой взгляд тоже не адекватно.  https://tonviewer.com/EQCag0I7jeQdF5OrcYETD46CBbQ-6ZSmw5h7JbiHyynSdJgt?section=code  К тому же код контракта является общедоступным, его можно просмотреть. Очевидных закладок я пока не вижу. У меня просто нет соответствующего опыта, я только начал разбираться в вопросе. На данном этапе сторонние инструменты необходимы. Все сразу не осилить. До написания своих контрактов мне пока далеко, на данный момент я пока что изучил лишь общие концепции сети TON. (reply to 310942)

&rey: А какая разница между ботом и средним одностраничником в отношении того, какое сообщение они собирают? (reply to 310942)

&rey: Страница тоже может привязать к домену кошелёк своего разработчика, и никто об этом до поры до времени не узнает.

&rey: Можно посмотреть под углом приватности, но тогда одностраничник должен быть не тмашкой.

&rey: И субдоменов в изначальном вопросе, кстати, не было. (reply to 310944)

Evgeniy: Разницы похоже нет. Нужен код обработки контракта. На сколько я понимаю, бот использовал контракт обработки под доменов по умолчанию (стандартный), а сообщение в сеть нужно для того, чтобы контракт получил переменные для работы, какой домен какому ADHL адресу соответствует. (reply to 310946)

Evgeniy: Были, вопрос именно про них. (reply to 310949)

— 2025-06-23 —

Dmytro: https://github.com/ton-org/ton/blob/master/src/jetton/JettonWallet.ts  а почему в @ton/ton для JettonMaster и JettonWallet нет никаких методов? Как принято тогда отправлять жетоны - ручками собирать сообщения что-ли?

Tim: Assets sdk (reply to 311002)

Tim: Ton community assets sdk

Dmytro: а с сендбоксом дружит? (reply to 311003)

Tim: А причем тут сендбокс…

Dmytro: ну я хочу жетоны в сендбоксе отправлять

Tim: Просто созидаешь пейлоад и отправляешь в сендбокс

Dmytro: а ну то есть реально ручками создавать. ок

Tim: Ну там методы все есть, что еще надо

L30n1d: JettonMaster/Wallet это в первую очередь интерфейс, а реализация может отличаться. В репозитории есть примеры контракта и обращения к нему.  Для отправки сообщений есть специальный метод и нужные структуры.  Так что все инструменты есть. (reply to 311002)

⛰️ Roman ⛰️: Запускать продажи, аукционы, обмены и тд. должен контракт маркетплейса?

L30n1d: Да (reply to 311012)

L30n1d: И в стандарте для NFT есть метод для получения информации о роялти — она ни к чему не обязывает, так как это просто геттер, но платформы могут её использовать. (reply to 311012)

Dmytro: В стандарте жетона прописан интерфейс transfer, он не зависит от реализации (reply to 311011)

L30n1d: Ну, да, интерфейс не зависит от реализации и не должен, так что я не понял, что ты хочешь сказать (reply to 311020)

L30n1d: Тут важнее факт того, что реализация может быть разной. Помимо стандартной передачи токена могут быть различные проверки, локи или комиссии — да что угодно. Интерфейс будет соблюдаться, но действия будут разные. (reply to 311020)

.: Здравствуйте! Использую tonconnect-ui js, как проверить что транзакция была оплачена? что возвращает sentTransaction(transaction)?, допустим success и т.д. как?

Китикет: Возвращает boc (сериализованное дерево cell), ты его можешь десериализовать в cell и посчитать его хэш, который будет msg_hash через который можно в каком-нибудь индексере типа toncenter получить транзакцию (reply to 311038)

Китикет: Либо положить в body сообщения какой-нибудь уникальный коммент (например id платежа) и посчитать его хеш, это будет body_hash по которому тоже можно найти сообщение/транзакцию в многих апи, и не надо будет никуда посылать msg_hash

.: А можно ли например в комментарий к транзакции генерировать случайный айди (якобы айди транзакции), а потом, через допустим TonViewer искать данную транзакцию с этим айди, и ,соответственно, подтверждать транзакцию?

&rey: Не забудьте проверить сумму и жетон. (reply to 311041)

.: А в целом? можно так делать?

.: Хорошо, спасибо! Я попробую .

⛰️ Roman ⛰️: как правильно добавлять текст для транзакции при отправки сообщения? я попробовал сделать store_uint(0, 32), как на фото, но в тонкипере ничего не отобразилось

Combot: Combot выдал(а) предупреждение Валерия Куликова (1/3) Reason: 1 reports (reply to 311046)

Оскар: крайне сомневаюсь что collection_address и in_msg_body являются строками, а не соответствующими тлб структурами, вероятно всего тонкиппер видит что биты комментария не делятся на 8 без остатка и отсюда игнорирует это как невалидную строку (reply to 311045)

Kid a kid: с помощью чего я могу просматривать последние покупки на порталсе и получать юзернеймы и ссылки на подарки "с помощью юзербота"? есть какие то методы или какие нибудь библиотеки?

hasvee: Я отправил $TON просто в TON с тон Спейса в обычный тг кошелек у меня с тон спейса $TON списались а на тг кошелек не пришли это получается я потерял $TON?

Max: Что за $TON ещё? Не уж-то просто жеттон?  Если да, то вы и не владели ничем стоящим, так что и терять нечего (reply to 311053)

Eugene: Думаю, обратиться стоит в поддержку тг-кошелька (reply to 311053)

Igroman787: Если у вас есть домашний сервер со свободными hdd, то от себя приглашаю протестировать MyTonProvider. Данная утилита позволяет стать провайдером хранения файлов: https://github.com/igroman787/mytonprovider  После установки и регистрации провайдера он появится в списке mytonprovider.org В будущем планируется что это будет одним из способов монетизации. В скором времени понадобятся дешевые провайдеры для хранения архива блокчейна. Для вас это будет возможность хранить историю блокчейна. Для сообщества скачивание и установка архивных дампов будет быстрым а хранение децентрализованным.

Евгений: Полчаса...

— 2025-06-24 —

Gorlomir: Полезная информация (reply to 311073)

⛰️ Roman ⛰️: как правильно собрать forward_payload, что бы у получателя отображалось текстовое сообщение? У кого нибудь есть пример кода?

SweetJesus: ну, в форвард кладешь 4 байта нуля + слайс с текстом. (reply to 311105)

&rey: и убрать query_id. (reply to 311107)

⛰️ Roman ⛰️: Попробую

⁣⁣ᅠ: Используйте ton space и живите счастливо (reply to 311111)

⁣⁣ᅠ: О как, а смарт точно корректно отрабатывает ? (reply to 311113)

⁣⁣ᅠ: Посмотрите в тонвивере если pending значит еще идет (reply to 311114)

Андрей: Мало данных Какая ошибка, какой адрес, какой ожидали, ссылку на транзакцию Без этих данных смысла нет в обсуждении (reply to 311111)

89: Добрый день, подскажите пожалуйста, как сейчас добавить jetton токен в whitelist? Что бы его можно было найти в  tonviewer по названию,  а не только по адресу контракта, спасибо

Не Алекс,, Доминанта,,💠: Подскжите пожалуйста. У меня пропали средства с кошелька и в дереве транзакции в графе интерфейс пишет прочерк на том кошеле куда украли средства. Что это значит?

User: Скиньте транзакцию или адрес кошелька (reply to 311126)

Не Алекс,, Доминанта,,💠: Ок (reply to 311127)

Не Алекс,, Доминанта,,💠: UQDOrfDuyuIcushDjIRKIUhAlHuOO0si9SmIJi3S5XHiqzNj

Не Алекс,, Доминанта,,💠: Транза 19 числа -169тон

Не Алекс,, Доминанта,,💠: Извиняюсь 18июня -159

User: Мошенники выводят средства на аккаунт, который еще не инициировали. Почему они так делают — узнать нельзя (reply to 311126)

Не Алекс,, Доминанта,,💠: Скажите , а вы можете инициировать улучшения безопасности блокчейна?  Мне на вас дали ссылку из тон рус. я там предлагал идею по безопасности. (reply to 311133)

User: Можете предложить, если действительно что-то дельное, то это возьмется в обработку (reply to 311134)

Egor: добрый день кто-то шарит как можно, зная данные о гифте, получить гифку типо как вот здесь показана. Я смог получить с помощью get запроса к tonapi только png формат. Подскажите, буду крайне признателен

Не Алекс,, Доминанта,,💠: Суть идеи в том , что если кто то с помощью украденной сид-фразы привязал кошелек - то автоматом приходит уведомление на все кошельки с тем же адресом с предупреждением о  том , что кошелек возможно взломанн и рекомендовать перевести средства.  В идеале -запрет на сутки провдить транзакции с новопривязанного кошелька.  Было бы не плохо видеть количество подключенных кошельков на один адрес.  Что скажете ?  И это возможно?

User: Можно руками ссылку формировать зная slug подарок. Через web инспектор откройте этот подарок на fragment и посмотрите как строится ссылка (reply to 311139)

Соня: /stat@combot

Combot: Total messages: 311148

.: я отправил ссылку короче с основного акка и меня забанило) я нашел только такое, но не смог получить файл по этой ссылке (reply to 311145)

.: я зашел в tgs viewer и там как будто пустой файл (reply to 311150)

Andrey: Добрый день ищу исполнителя работ  Тех задание скину в личку  + смарт контракт для распределение реферального вознаграждение в сети ТОN.( в данный момент рализованно в excel)

Не Алекс,, Доминанта,,💠: Админ. Что скажете? 👆 (reply to 311144)

&rey: чего-чего? Блокчейн не видит, от какого приложения кошелька пришло подписанное сообщение. (reply to 311144)

&rey: И блокчейн вам не единый сервер, который может считать "ага, вот подключился человек, плюс единица в счётчик", и ввод сид-фразы совершенно никак онлайн не отражается.

Не Алекс,, Доминанта,,💠: Если я правильно вас понял , то такие меры безопасности реализовать не возможно? (reply to 311158)

Oleg: Проверьте внимательно, где именно вы лоханулись и больше так не делайте. Вот все, что следует предпринять (reply to 311161)

Не Алекс,, Доминанта,,💠: Очень жаль🫤   От таких случаев как у меня сильно доверие к блокчейну падает.  Если сам ключей никому не передавал.

&rey: Сид-фраза и есть секретный ключ, если что. (reply to 311163)

Не Алекс,, Доминанта,,💠: Я связался с одним из жертв и мы так и не смогли найти что то общее. (reply to 311162)

Не Алекс,, Доминанта,,💠: Я в курсе. спасибо.  Ни я ни второй не передавали сид фраз.    Очень плохо , что нельзя внедрить систему оповещения привязки нового кошелька😕  Спасибо за подсказки. (reply to 311164)

Андрей: Вообще можно такую систему надстроить над тонапи будто бы, но если злоумышленники получили твою сид фразу, то скорее всего даже не успеешь среагировать (reply to 311158)

Андрей: ( если, конечно, злоумышленник тоже через тонапи :) ) (reply to 311168)

&rey: Ну, сейчас есть и более прикольный вариант, TOTP как второй фактор (через ZK-SNARK, к кошельку в5 можно подключить). (reply to 311168)

User: Если вы боитесь, что ваша сид фраза утечет или вы ее потеряете, то пользуйтесь CEX сервисами, которые берут эту ответственность на себя, но учитывайте, что и ваши деньги вы отдаете им под управление (reply to 311168)

&rey: я бы скорее ожидал найти уязвимость на телефоне (условно, приложение с доступом к галерее, а в галерее скриншот сидки) (reply to 311166)

Андрей: Майнкрафт моды (reply to 311173)

𝗛𝗲𝘅𝗼𝗯𝗼𝗮𝗺 </⁧<: Мульти подпись есть например, что типо нужно подпись с двух и более кошельков для перевода (reply to 311161)

Андрей: Ну это общие принципы хранения сидки, но дев решения которые хоть как-то могут предотвратить кражу средств звучат интересно

User: Все популярные и не очень дев решения уже имеются в TON. Дальше все упирается в децентрализацию системы (reply to 311176)

Не Алекс,, Доминанта,,💠: Согласен 100 процентов с вами.  Но если мы хотим , что бы тон блокчен стал действительно масодопшн , то нужна  защита от ,,дурака,,  Не от дебила , а от дурака🙂  А новеньким как , я достаточно один раз без явного тупизма потерять средства и все , доверие минус🫤 И таких будет много - к сожалению. (reply to 311173)

Oleg: Есть также аппаратные кошельки, которые поддерживают тон. Там сидку даже сам хозяин узнать не сможет, не то, что злоумышленник

Не Алекс,, Доминанта,,💠: Спасибо , теперь так и делаю , пока ,,Леджер,, не заведу. (reply to 311171)

Tand: Мы можем дать доступ к базе ко всем гифтам через апи, если это для приложения (reply to 311139)

Не Алекс,, Доминанта,,💠: Если через нфс , то я на счет них сомневаюсь , опять связь с приложением и доступом к инету.  Обжегшись на молоке - теперь дую и на воду. (reply to 311179)

Не Алекс,, Доминанта,,💠: Если не тяжело -можете на пальцах обьяснить , как новый кошь привязываеться через сидку к блокчену?  Не через телепатию ведь?

User: Я генерирую через bip39 на чистом компе без интернета сид фразу, которую после переношу на листок сохраняя только внешний адрес для пополнений  Для безопасности самое-то, и без ledger'а (reply to 311180)

&rey: Да вот только проблема в том, что тон не бип39. (reply to 311185)

User: Лучше нагуглите это и посмотрите на ютубе, тут излагаться техническим языком можно долго (reply to 311184)

User: Есть такая-же штука под TON (reply to 311186)

Oleg: Никак не привязывается. Кошелек (в смысле локального устройства или программы) - это черный ящик, вещь в себе, которая умеет подписывать данные вашим приватным ключом, который по сети никуда не уходит (reply to 311184)

&rey: Приложение кошелька: [пользователь] решает, что надо сделать перевод, подписывает его секретным ключом. Отправляет в блокчейн экстернал-сообщение — ордер на перевод и подпись.  Блокчейн: видит, что это экстернал. Достаёт из памяти контракт с нужным адресом.  Блокчейн, контракт кошелька: проверяет подпись, используя публичный ключ, потом исполняет ордер. (reply to 311184)

Не Алекс,, Доминанта,,💠: Спасибо за совет.  Вопрос в том , сколько простых бывших тапальщиков оставшихся в блокчене будут заводить чистый комп и выполнять все описанные действия?  Скорее повториться история как у меня и понесеться по ,.трубам,,  блокчейн тон .........    и прощай ретейл пользователи.  Для меня тон блокчен как первая любовь очень понравилось , но получает😁ся любовь несчастная вышла (reply to 311185)

&rey: Сто процентов тон тут ни при чём и то же самое случилось бы у вас с любым другим чейном. (reply to 311192)

Oleg: Если вас как-то успокоит, я в 2012-м купил, грубо говоря, пиццу за 260 битков, и ничего, жив-здоров) (reply to 311192)

Не Алекс,, Доминанта,,💠: Спасибо 🙂 за поддержку.  Я отнесся к призошедшему как к уроку.  Просто попытался уберечь других - по мере своих сил. (reply to 311194)

Не Алекс,, Доминанта,,💠: Я это понимаю , что дело не в Тоне .  Верю , что тон станет лучше и безопаснее других блокчейнов👍 (reply to 311193)

This photo: Отсутствие мер безопасности работает до первого происшествия (reply to 311192)

Nerses: Как я могу определить на блокчейне депозит Jetton в своём смарт-контракте, не фиксируя в контракте адрес кошелька Jetton или адрес Jetton Master?

&rey: Никак. (reply to 311200)

Alexander: Да вы сами на какой то дрейнер напоролись, а вините блокчейн, если вы не шарите, то вас везде обманут, в какой бы блокчейн вы не пришли. Скамеры есть везде (reply to 311163)

Alexander: Это явно не какой то массовый баг, а ваша ошибка. Был бы какой то глобальный баг, на кошельке скамера лежало бы гораздо больше денег, а не какие то 600 тон

Alexander: Сам накосячил, а винит блокчейн

Андрей: Ну его посыл довольно правильный - чем больше методов защиты кошелька, тем лучше. Для обычных пользователей стандартный метод защиты кошелька одной лишь сид-фразой недостаточен. Не зря же создали кошелек v5 который поддерживает плагины, в том числе 2fa и другие - жаль только работу не доделали, плагины эти никто с роду не видел (reply to 311205)

Alexander: Да я уверен что он в каком то левом боте подключил кошелек, ему потом транзу на вывод подкинули и он ее подтвердил не глядя, вот и все. Меньше надо куда то кошелек подключать и внимательно смотреть что подтверждаешь (reply to 311208)

Не Алекс,, Доминанта,,💠: Не подлючал. И транза прошла , когда я был офлайн.  Где я винил блокчейн?  А работать над безопастностью ни пользователям ни блокчейну не помешает.  Весь вопрос был в усилении мер безопастности по мере возможности.  А за баг или не баг про уход  средств на непонятные  кошелки тоже недано читал  в одном из чатов🤔 (reply to 311209)

Не Алекс,, Доминанта,,💠: Спасибо.😊 (reply to 311208)

Alexander: Фантастика какая то :D, ничего просто так само по себе не происходит. Не надо мне рассказывать невероятных историй, я тут не один год сижу) (reply to 311210)

Alexander: Обнесли бы много кого, а не какие то единицы кошельков

Alexander: Извините, но обязательно 1-2 человека раз в полгода появляются которые говорят что они ничего не делали, а деньги пропали

L30n1d: Откуда ты знаешь, сколько обнесли? (reply to 311213)

Alexander: Он скинул адрес кошелька, я вижу куда ушли средства. Нет никакой массовой информации что еще кого то вдруг ограбили. Дальше перечислять ? (reply to 311216)

L30n1d: О чем это тебе говорит? (reply to 311218)

Alexander: О том что ты на стороне его фантазий

L30n1d: Где? В этом чате? (reply to 311218)

Alexander: Я нахожусь в десятках публичных и приватных чатов. Если что то случается, информация просачивается тут же (reply to 311221)

L30n1d: Нет, просто ты снобски высмеиваешь новичка в неприятной ситуации, при том что у тебя ноль фактов. Просто токсишь и вставляешь себя мудаком. (reply to 311220)

Alexander: Разговор идет в никуда, вы верите в фантастику

L30n1d: Нет, не верю, а разговор ни о чём начал ты сам (reply to 311224)

Alexander: Ему говорят что он сам лоханулся, а он не верит

Alexander: И ты еще вылез откуда то

SBT: О ситуации, о которой он пишет, я про нее задавал сюда вопрос неделю назад и сам попал в такую ситуацию  И он не один, там как минимум 5-6 человек и с ними я списался по этому поводу (reply to 311222)

Alexander: Из нас двоих ты перешел на оскорбления и унижения. Подумай на досуге кто ты сам. Продолжай писать и удалять ) (reply to 311225)

Alexander: Жертвы дрейнеров (reply to 311228)

L30n1d: Не я удаляю) Чем тебя оскорбили и унизили? (reply to 311230)

Alexander: Следи за своими словами, быть может выйдет релиз v1 (reply to 311232)

Combot: Combot выдал(а) предупреждение Nation Legioner (1/3) Reason: 1 reports (reply to 311234)

Не Алекс,, Доминанта,,💠: Беда не по деревьям ходит. Есть такая поговорка..... (reply to 311231)

— 2025-06-25 —

Lucius: Всем привет Вопрос одиноким разрабам.  Как вы привлекаете первых пользователей в свое приложение?  Есть mvp, а что делать дальше?  Твитер дохлый, на редите сразу бан прилетает.  Что делают одинокие разрабы? Как выходят из сложившейся ситуации?  Покупать рекламу это понятно, но бюджет же не резиновый

GG: Если реклама не окупается то задайтесь вопросом (reply to 311245)

Lucius: Тут вопрос не про окупаемость.  Вопрос в построении сообщества (reply to 311246)

Андрей: Обычно если это что то полезное для сообщества, и не выглядит как "я напечатал жетоны/нфт залетайте покупайте" - то спокойно размещают в профильных чатах, например тут В этом чате довольно часто выкладывают ссылки на гитхаб своего проекта, который может принести пользу сообществу (reply to 311245)

Не Алекс,, Доминанта,,💠: Доброе утро.  Вспомнил про одну транзакцию непонятную во время  обмена пикселей на тон  через ,,Свап кофе,,.  Типа поступило 115000 догс , но их так на кошельке я не увидел и отправления обратно тоже не увидел.  Может вам это будет полезно ?  И как скинуть эту транзу сюда , что бы бот не забанил?

Андрей: Бот не забанит - согласно правилам бот банит за ссылку только в первом сообщении, а у вас уже не первое сообщение в чате (reply to 311257)

Не Алекс,, Доминанта,,💠: А как правильно это сделать? Скопировать транзу с кошелька или из обозревателя? И нужны все транзации с начала свапа или хватит той непонятной для меня с ,,догсами,,?  Спасибо. (reply to 311258)

&rey: хэшем. (reply to 311257)

Не Алекс,, Доминанта,,💠: Хэш с обозревателя прислать? (reply to 311260)

Кит среди рыб: Подскажите пожалуйста , мне нужно отправить транзакцию а у меня все время говорит что ключи не актуальны хотя я создал их только что , что я не так делаю

Не Алекс,, Доминанта,,💠: вот это нужно?af2bdadd5f8a7add43a71b2c51719d6340d401ac7229f1de42fb5ede8b10edd8

&rey: Отправьте без ключа, вот и всё. (reply to 311264)

Serhii: Всем привет! Есть ли у кого-то опыт в разработке маркетплейсов? Хотел бы получить консультацию

Дмитрий: Всем привет, подскажите пожалуйста почему через TonDevWallet и tonutils.wallet библиотеки в питоне, по одной и той же мнемонике абсолютно два разных адреса отдается Для одного и того же highload v3

Tim: Потому что там есть subwallet id и таймаут (reply to 311272)

Дмитрий: Какие в tonutils.wallet по умолчанию они идут можете подсказать? (reply to 311273)

Tim: Не знаю, но посмотреть в исходниках должно быть не сложно (reply to 311274)

Дмитрий: Да посмотрел, было 300 сек, спасибо тебе большое добрый человек Всё встало на свои места (reply to 311275)

⛰️ Roman ⛰️: а я ведь могу создать любой адрес, главное что бы он был 267 битовый?

&rey: Первые три бита — тег, b100. Другие — это нестандартные адреса. Дальше восемь бит воркчейна. b00000000 (0) — база, b11111111 (-1) — мастерчейн. (reply to 311280)

&rey: Дальше 256 бит... отправлять можно на любой адрес (желательно, правда, не из полностью одинаковых шестнадцатеричных цифр, туда ставят системные контракты).

Igroman787: Небольшие новости от своего имени: Мы отказались от комплексных дампов ZFS которые хранились на archival-dump.ton.org по причине увеличения сложности хранения и поддержания таких дампов и рабочей ноды. Теперь мы придерживаемся стратегии хранения дампов архивных блоков частями размером ~4 ГБ в ton-storage. В настоящее время при запуске установки MyTonCtrl она спрашивает какие блоки загружать перед включением узла, и загружает указанные архивные блоки из ton-storage под капотом.  Мы запустили скрипт для плавного распределения дампов архивных блоков между провайдерами. Теперь нам нужны провайдеры с большим количеством свободного пространства для децентрализованного хранения дампов архивных блоков: https://t.me/tondev/311066  Полезные ссылки: 1. Список архивных блоков: https://archival-dump.ton.org/index/mainnet.json 2. Утилита для распределения дампов по провайдерам: https://github.com/xssnick/archive-provider-storer 3. История транзакций утилиты: https://tonscan.org/address/EQANnr96uGtGRnStzqcsEyZcUZTkVPt0HdlaTQLlQ7LhwTRh 4. Как стать провайдером: https://github.com/igroman787/mytonprovider/blob/master/README.ru.md 5. Чат для провайдеров: @mytonprovider_chat (reply to 311066)

Igroman787: Кто имеет опыт и желание написать докер обертку для MyTonProvider по аналогии - напишите мне в личные сообщения (reply to 311285)

— 2025-06-26 —

Никита: всем привет! Я новичок в криптовалюте, погуглив и посмотрел пару видосов по теме, задался вопросом, есть ли что то в крипте, кроме скама и гэмблинга? 90% проектов которые я видел это  либо вещи созданные на основе желания подзаработать, либо какой то скам токен (который в целом тоже работает на этом желании). Есть проекты, которые решают какие либо проблемы в реальном секторе экономики? Можете ссылок накидать? Лс?

Lucius: Виртуал приват Нетворк сервисы (reply to 311312)

Maks Maksimov: Пишет англоязычный пользователь предлагает купить мой аккаунт телеграмм за тон, с помощью фрагмент смарт контракт?)  Скам?) Какая цель? Просто угнать акк?

Никита: 50%\50%, смотри на ссылки которые он кидает, будто внимателен и осторожен (reply to 311320)

Max: скам это, какие 50 на 50? (reply to 311324)

Eugene: Чаще всего скам, при этом ссылки «на фрагмент» зачастую подменяют так: t.me/thedailytonrus/1045 (reply to 311320)

Nikita: Привет! Подскажите, как спонсировать транзакции кошелька версии W5, пожалуйста. Я хочу реализовать свой вариант gasless, но из документации есть только готовое API-решение от tonapi, а как сделать это самостоятельно onchain, нигде информации нет

User: У tonapi есть описание того, как оно работает  https://tonkeeper.com/ru/article/how-tonkeeper-brings-gasless (reply to 311373)

Yan: Всем привет У меня проблема с отправкой Jetton (usdt) через ton wallet, использую либу @ton-community/assets-sdk. Обычные монеты TON отправляются без проблем, но при попытке отправить любой jetton возникает ошибка в ton wallet "невозможно проверить транзакцию", и перевод не проходит. Подскажите, есть ли какие-нибудь примеры трансфера jetton используя @ton-community/assets-sdk или при помощи любой другой библиотеки?  ( в demo-dapp-with-react-ui есть пример только создания jetton )

Андрей: Возможно проблема в decimals, в обычных жетонах это 9, для USDT это 6 (reply to 311378)

Yan: Да, я учел что у них разный decimals (reply to 311380)

Daniil: Всем привет Какой лучший способ отслеживания исполнения транзакции в реальном времени? Желательно через вебсокет

🕵️: Приветствую, не подскажите будет ли пополнение тестгивера, там 6к тон осталось только

User: 6к TON, каждому по 5. То есть еще 1200 человек. Вполне должно хватить на ближайшее время (reply to 311387)

🕵️: Их сегодня заберут, вчера было 14к (reply to 311388)

Андрей: Нужно переписать гивера что бы боты его не высасывали (reply to 311389)

User: Самым легким и удобным способом является: крепить к транзакции body часть(условно в виде комментария) и после парсить через условное tonapi отправки с кошелька.   Или, если условно вы точно знаете версию кошелька для отслеживания, вы можете получать signature(смотреть tlb схемы кошелька) и проверять дошла-ли транзакция через нее. (reply to 311386)

🕵️: Почему сообщения удаляются?

🕵️: Слово л ю д и запрещено?

Андрей: Именно, это у спамеров л ю д и А нас же пользователи и разработчики) (reply to 311395)

🕵️: Пользователи забирают его. Боты конечно тоже, но и пользователей много забирает

Daniil: Да, я через TONAPI обычно и отслеживаю Просто там я это делаю через обычные РЕСТ-запросы. И об итоге транзакции узнаю из смены ее статуса с пендинг на (честно - забыл, но то ли комплит, то ли ещё что). И дальше проверяю, ок она или фейлд. Просто думал, может есть где вебсокет, который к тому же бы позволил получать процент выполнения транзакции (на tonscan красиво сделали). У стонфая есть СДК по Омнистону с вебсокетом, хорошее, но оно показывает только конечные статусы транзакции, а не ее проценты в процессе (reply to 311392)

Daniil: Может у внутренних ивентов/трейсов транзакции есть статусы, завершён или нет, и так от количества общих посчитать процент выполнения всей транзакции. Ещё не проверял

Dmitry: Всем привет!

Dmitry: кто знает как отправить в стейкинг токены залоченные на вестинговом контракте?

Dmitry: сам вестинговый контракт в мультисиге

Eli: Всем привет, как получить список пополнений usdt по адресу?

Denis: https://tonapi.io/v2/jettons/bolt.ton/accounts/saint.ton/history?limit=100 но процессинг платежей на этом пожалуйста не стройте. для этого есть специализированные решения (reply to 311416)

Ernest: Всем привет, не уверен что это сюда, но все же спрошу:  Я делаю mini app, с покупкой и продажей NFT подарков телеграмм за TON и я хотел бы сделать визуал подарков как например в Tonnel боте, однако я не могу вообще найти никакой документации как это сделать, как визуализировать подарки в приложении или на сайте. Хотя во многих приложиях я встречал красивые интерфейсы с подарками. Может знает что то, кото то об этом?

User: Потыкайте фрагмент, вы можете спокойно дергать ссылки на картинки/lottie анимации подарков от туда подставляя slug в ссылку. Если нужны обычные модели коллекций, то их можно скачать юзер ботом с помощью условного telethon. (reply to 311419)

Combot: Combot выдал(а) предупреждение Grigoriev (1/3) Reason: 1 reports (reply to 311427)

Boyko: Здравствуйте, нашел единственный(Ваш) официальный чат, который как-то косвенно относится к администрации TG. Крупный TG-канал был взломан (не мой, близкого человека), но дописаться до поддержки TG нереально, есть ли возможность посодействовать в данном вопросе с Вашей стороны, передать администрации TG?  P.S. Извините, что не по адресу, надеюсь на понимание 🤝

Oleg: Всем привет, подскажите, правильно ли я понимаю что без индексации всего мастерчейна нельзя получить мастерчейн контракт в котором опубликована библиотека имея хэш либцела?

Denis: У метода получения либы есть пруф. В пруфе можно узнать аккаунт скорее всего (reply to 311437)

Denis: Но это будет один аккаунт. А так либа может быть в нескольких

&rey: Все будут, кстати.  shared_lib_descr$00 lib:^Cell publishers:(Hashmap 256 True) = LibDescr; (reply to 311440)

&rey: Иначе блокчейн бы не знал, когда удалить либу обратно из доступа.

Denis: А это где? (reply to 311441)

&rey: Вот: https://github.com/ton-blockchain/ton/blob/master/crypto/block/block.tlb#L435-L436. Где в блоке это найти... где-то. (reply to 311443)

Denis: Это шардстейт. Его нельзя получить из лайтсервера. Или ковырять сторадж ноды или накатывать дифы от блока к блоку (reply to 311444)

Denis: https://github.com/ton-blockchain/ton/blob/72056a2261cbb11f7cf0f20b389bcbffe018b1a8/tl/generate/scheme/lite_api.tl#L104 Вот с телефона не скажу какая там структура пруфа, но скорее всего в пруфе будет путь до аккаунта (reply to 311444)

Oleg: Спс!

— 2025-06-27 —

Denis: Не надо приходить ко мне в личку. Если есть уточняющие вопросы то спрашивайте здесь (reply to 311416)

Nononono: Использую либу: github.com/tonkeeper/tongo Задача получить 18 конфиг сети (param18) Вот код: type Param18 struct {   UtimeSince    uint32   BitPricePS    uint64   CellPricePS   uint64   MCBitPricePS  uint64   MCCellPricePS uint64 }    params := []uint32{18}   cfg, err := client.GetConfigParams(ctx, 1, params)   if err != nil {     log.Fatal(err)   }    s := Param18{}   err = tlb.Unmarshal(&cfg.Config.Values()[0].Value, &s) Получаю неверные данные, что я делаю не так? Данные сверяю тут

Anastasiia: Oбъявлен конкурс с призовым фондом 5000$ для разработчиков от команды Tonkeeper  Суть: снять обучающее видео (тутор, демо-проекта, лайвкодинг, сравнение - любое!) про tonapi.io -> 5 самых классных видео получат подарок (общий призовой фонд - 5000$)  Критерии оценки + правила - здесь  👉 Дедлайн - 18 июля 👈

Denis: забавно что данные там берутся из tongo :) (reply to 311460)

Denis: а так посмотрите opentonapi - там всё это должно быть

Denis: @shibdev ваша работа не принимается (reply to 311461)

Max: так а если он нормальную сделает (reply to 311465)

Nononono: не совсем понял, я же запрашиваю конфиг через liteServer с ноды, верно же? проблема, что мой response не матчится с "референсом" и я не могу понять причину (reply to 311463)

Denis: еще раз: тоньювер берет данные в тонапи. тонапи берет данные из лайтсервера. данные лайтсервера парсятся с помощью tongo. так что можете посмотреть в опентонапи что сделали не так (reply to 311470)

Nononono: спасибо, понял, чекну тонапи код... (reply to 311472)

⁣⁣ᅠ: всем привет, подскажите с чем может быть связана ошибка подключения к мосту?

⁣⁣ᅠ: может ли это как то быть связано с тем что я в рф? потому что я в душе не понимаю из за чего оно раком встало, с тестнетом все работало ок а с мейннетом нет

Nononono: решение, добавить: configP, err := ton.ConvertBlockchainConfigStrict(cfg) Denis Subbotin: Еще раз спасибо за помощь! (reply to 311460)

Петр: Приветствую, tongiver все?

⛰️ Roman ⛰️: Где для контракта маркетплейса брать public key и subwallet id? их нужно как то сгенерировать?

Марина: Всем привет, а у вас бывают в тестовой сети ошибки типа Transaction error Unable to complete the operation? И 0 инфы, когда просматриваешь транзакцию там только один актор - кошелек, с которого инициировалась отправка сообщений и больше никого. При этом result code = 0 и success = true. Может кто-то знает че с этим можно сделать? Или это норм для тестового контура и он не всегда стабильно работает?

Василий: Ссылка на транзакцию могла бы помочь (reply to 311486)

Марина: https://testnet.tonviewer.com/transaction/d4791a2b84544939b4e1f50175d072742a8e145273eeb7a22c31e7efd48b76f7 (reply to 311487)

&rey: Это вы поиграли с sendMode, там надо флаг 2 всегда оставлять. (reply to 311486)

Марина: спасибо, полезла в гошную библиотеку tonutils, а там Mode: PayGasSeparately + IgnoreErrors(3), вот в чем проблема оказывается была (reply to 311489)

Dmitry: Привет

Dmitry: а тут можно объявления размещать - поиск эксперта на проект?

User: Да, но будьте осторожны с предоплатами, мошенников море (reply to 311494)

Dmitry: 🛠 Нужен опытный TON-developer для сопровождения крупной OTC-сделки (мультисиг, вестинг, стейкинг-пул)  Задачи:  1. Создать и настроить мультисиг-кошелёк TON (консультация по выбору, тестирование кворума, инструкция для участников). 2. Проверить корректность и параметры вестингового смарт-контракта (деплоит продавец) — аудит whitelist, графика разблокировки, адресов. 3. Деплой и настройка single nominator staking pool под мультисиг (конфигурирование, выбор и подключение валидатора). 4. Консультации/инструкции для юристов и команды, помощь на каждом этапе (инструкции, ответы на вопросы, минимальный техсаппорт).  Требования:  1. Реальный опыт с TON: деплой мультисиг/вестинга/staking pool, работа с TON CLI и смарт-контрактами. 2. Ответственность, коммуникация, умение работать с корп-клиентами/юристами. 3. Желателен опыт в крупных сделках или сопровождении фондов.  Условия:  Задача — от запуска мультисига до полного контроля за вестингом и стейкингом.  Возможен повторный ангажемент.  Подача: Пишите в ЛС:  - Личный опыт (TON-проекты, ссылки на GitHub/tonscan, кейсы). - Краткое предложение по этапам работ и срокам. - Ваши ставки и возможности.

Denis: я бы настоятельно советовал обратиться к @kyouma который пошлёт куда надо  а то желающих скамеров сейчас выстроится очередь (reply to 311497)

Dmitry: спасибо, а кто это? (reply to 311498)

Denis: специалист ровно по этой задаче (reply to 311500)

Oleg: "посылатель куда надо"?) (reply to 311502)

Dmitry: неохота покупать премиум чтобы написать ему) (reply to 311498)

Dmitry: будьте добры, перекиньте ему запрос

⛰️ Roman ⛰️: как создать state init в typescript? Проблема в том, что когда я создаю его в FunC, то все работает, а тот же самый код на TS вызывает ошибку 34. Различие лишь в том, что когда state init создается на FunC, то код и данные помещаются с помощью store_dict, но на TS нельзя положить данные Cell в storeDict

&rey: beginCell().storeUint(6, 5).storeRef(code).storeRef(data).endCell() или beginCell().store(storeStateInit(si)).endCell() (reply to 311506)

⛰️ Roman ⛰️: первый вариант не работает, я его и пробовал (reply to 311507)

&rey: с чего бы он не работал? у вас же код и данные — ячейки? (reply to 311508)

⛰️ Roman ⛰️: да, конечно

&rey: Скопируйте мой код дословно. (reply to 311511)

&rey: Там storeUint(6, 5), и это не просто так — там есть тег-биты, которые .store_dict в FunC добавляет отдельно.

⛰️ Roman ⛰️: стоп, то есть при данных в Ref используют storeuint(6, 5)?

&rey: И всегда использовали. Не знаю, почему авторы кода жетона решили выражение на .store_dict делать. (reply to 311515)

⛰️ Roman ⛰️: а почему тогда в FunC добавляют store_uint(0,2) и store_uint(0,1)? Это из за самого FunC или из за данных в Dict

Оскар: у тс либы есть .storeMaybeRef() который делает тоже самое что и .store_dict в func (reply to 311515)

&rey: .store_dict(c) == .store_uint(1, 1).store_ref(c) .store_dict(null) == .store_uint(0, 1) (reply to 311517)

⛰️ Roman ⛰️: на заметку возьму (reply to 311519)

Alexandr \(^_^)/: можно узнать, когда бот будет раздавать TON? у него они вроде бы закончились? вот этот testgiver_ton_bot

&rey: @f_closer надо заправить бота) (reply to 311528)

F: Поехал заправлять) (reply to 311530)

— 2025-06-28 —

⁣⁣ᅠ: всем привет сталкивался ли кто то с тем что транзакции в тг валете отрабатывают но tonconnectui их не воспринимает? я сделал транзу в тг валете она подтвердилась а в tonconnect ui крутится модалка о том что транза ждет подтверждения, ps я пытался ждать не помогло, и так же вылезает ошибка о которой я говорил ранее. Помогите пожалуйста разобраться с этим.

Владислав: #работа   Добрый день. Ищу Ton разработчика для написания смарт контрактов на FunC и поддержки, развития TMA  С опытом работы, с портфолио. Оплата достойная по договоренности.  Пишите в ЛС Буду рад поработать, спасибо 🙏

X1ag: у всех в тестнете такое?

Michael: угу, тоже вчера запрашивал, не даёт (reply to 311528)

Alexey: Ретрейсер в тестнете сломан конкретно. Попробуйте другую транзакцию, с другим аккаунтом попроще - может сработать (reply to 311555)

Michael: обычно тестят через blueprint sandbox или testnet?

Michael: или поэтапно

F: там обновили тонхаб апи, а за ним надо обновить ts @ton/ton и ретрейсер, в процессе (reply to 311558)

User: Blueprint — через него происходит в общем создание и взаимодействие с контрактом, не тесты  Sandbox — как раз таки утилита для локальных тестов  Testnet — для тестов в тестовой сети  Mainnet — релиз  Я лично чекаю все в sandbox, а после перехожу сразу в mainnet. Если контракт комплексный, то лучше конечно прогонять его через testnet, если не хотите тратить много настоящих TON (reply to 311559)

Michael: Хорошо. Спасибо за совет. (reply to 311562)

Kenya-West (UTC+7): Всем привет! Вопрос является оффтопным и касается TON и разработки в нём лишь в отчасти.  У меня есть около 200 адресов крипто-кошёлок. В любой сети любой валюты. Я хочу мониторить баланс на них всех. Я выписал их адреса и QR-коды, но я хочу внимательно следить за их балансами.  Вопрос: Cuck? Cuck я могу это сделать?  P. S. OpenAI o3 в режиме глубокоректального исследования не смог ответить на данный вопрос.  P. P. S. Если вопрос действительно левый и такое сильно карается, я его удалю.

User: Вам нужно будет написать скрипт, думаю gpt o3 может с этим помочь и он будет мониторить все ваши кошельки.   Правда будет проблема в том, что для каждого блокчейна вам нужно будет использовать разные апи, но gpt o3 и немного логики помогут вам реализовать вашу идею самостоятельно, даже если вы далеки от мира программирования.   Если нужна будет помощь при интеграции TON, то на данный момент у TON есть два api: tonapi и toncenter. С помощью них вы сможете подключить отслеживание всех ваших кошельков в TON, без особых усилий (reply to 311566)

Michael: Насколько сложно создать смарт-контракт который будет продавать за TON созданные мной жетон токены?

Oleg: А чем существующие DEXы не устраивают? (reply to 311568)

Michael: идея в отправлении полученных TON на благотворительность (reply to 311569)

User: Он уже есть в open source https://github.com/BeyCoder/v2-contracts. Если вы хотите провести IDO/ICO  Или-же вы можете сделать это через лаунч пады (reply to 311568)

Oleg: Не вижу разницы

? NOT SANCHEZIO ?: В крипте это гиблое дело, только если ты не скамер (reply to 311570)

Michael: разве в dex тон не будет лежать в пуле? (reply to 311572)

Combot: Combot выдал(а) предупреждение Салют (1/3) Reason: 1 reports (reply to 311575)

Michael: можешь объяснить почему? (reply to 311573)

&rey: В тоне tonapi.io/v2/accounts/_bulk, и смотрите, у каких аккаунтов изменились данные о последней транзакции. (reply to 311566)

Michael: идея в сборе благотворительности, жетоны просто как благодарность. Пользователь отправляет в контракт TON и получает жетоны. А TON  выводится. (reply to 311571)

&rey: Да ничего особо сложного нет. Если делать совсем минимальный вариант, можно даже только один контракт писать, не два. (reply to 311568)

? NOT SANCHEZIO ?: Потому-что:  1) Это никому не нужно. - Хочешь помочь - отнеси денег в детский дом, приют, больницу фонд. Это проще, безопаснее и деньги не утекут на новую квартиру в дубаи (наверное).  2) Если не все то 99% благотворителей в крипте - скамеры. Ничем хорошим на моей памяти это никогда не заканчивалось, задонатили 10-20-30-50к$ - купили три мешка риса неграм и чек из ворда.  3) Третьего не будет, может я ошибаюсь и ты поменяешь мир ( или заскамишь сотни гоев ) (reply to 311580)

Michael: Аргументы хорошие) Но я хочу попробовать. (reply to 311584)

Mirka: Не сложно, если есть опыт программирования, то вечер с документацией tact и готово (reply to 311568)

Michael: Можно в двух слова куда копать? Я разраб, но в смарт-контрактах новичок. Мне GPT сказал что такое называется Token Sale контракт. Но примера я пока в гугле не нашёл. (reply to 311583)

&rey: Закрыть ИИ, открыть пример жетон-мастера и прямо в жетон-мастер и вписать новый код, который минт будет делать согласно пришедшему msg_value (context().value). (reply to 311587)

&rey: Не забыть вывод тонов. Можно по запросу от овнера, можно на каждый "дона"т.

User: https://github.com/BeyCoder/v2-contracts  Данный контракт полностью покрывает вашу идею позволяя завести токены на контракт, установить цену и при получении TON, контракт будет высчитывать N токенов, которое он должен будет вывести и отправлять их пользователю. Вывод с контракта происходит с помощью специального opcode (reply to 311587)

Michael: красатища! Спасибо большое. Буду изучать. (reply to 311590)

Michael: Хорошее у вас тут сообщество.

Just1k $BC: Товарищи, подскажите по lite server в ton console. Сейчас бета, но как работает? Для продакшена, если апи купить ?  Чтобы свою ноду не разворачивать.  Смысл в том, чтобы в телеграмм боте свапать быстро транзакции для с подключением ТонФан и Стон Фи для токенов , которые дошли до декса.

Just1k $BC: Или есть какой то стек оптимальный для решения задачи.

Denis: Там какие-то проблемки со временем ответа иногда бывают сейчас под нагрузкой. Мы работаем над этим. В принципе оно стабильно, и мы сами через этот же сервис работаеи. Но всё-таки это пока скорее бета. (reply to 311596)

Just1k $BC: Я же правильно понял, что для свапов токенов, которые уже иммигрировали использовать СТОН апи для формирования Свапа и отправлять через Лайф сервер в тон консоле, для отправки быстрой транзакции.  Правильно все понял ?  Только не понял, как получать данные токенов с Тон фан которые собирают 1500 тон, и как их свапать. Стек ТонФан + Лайф сервер ?

Just1k $BC: Хорошо, услышал.  Но я заинтересован попробовать, чтобы не тратить время на реализацию своей ноды. + думаю если прикупить апи за 200$ запросы будут обрабатываться) надеюсь) (reply to 311599)

Just1k $BC: В целом вопрос один.  Хочу торгового бота для торговли токенов с мемпадов. И те что не на декс и те что на декс.

Just1k $BC: Подскажите Стек быстрый для реализации и быстрый для Свапа и отправки транзы

Denis: Рекомендую омнистон (reply to 311600)

Just1k $BC: Первый раз слышу есть ссылка на документацию ??? Это универсальное решение ? (reply to 311604)

Denis: Это решение от стонфай. Супер быстрого арбитражника на нем не построишь, но порог входа низкий и покрывает много пулов (reply to 311605)

Just1k $BC: Хорошо. А он и формурикт свайп и отправляет транзакцию? И через какую ноду ? Стона?  И как в эту концепцию подключить еще ТонФан, чтобы можно было свапать токены с мемпадов ? (reply to 311606)

Andrey: Ещё есть @dtontech_bot для лайтверверов :) (reply to 311596)

Just1k $BC: Сохранил.  Можете по скидывать стеки для моего решения.  Очень буду благодарен!  Вместе мы делаем Тон лучше!)

III: Здравствуйте, у меня проблема, я использую tonconnect/ui-react:2.2.0 и tonconnect/sdk: 3.2.0, и периодически после подтверждения транзакции в кошельке telegram, судя по консоли, я не получаю результаты транзакции и boc, с чем это может быть связано?  Я использую последнюю версию telegram, также, если это важно, я из России.  За любой ответ Благодарю

Михаил: Здравствуйте. Как правильней сделать обработку входящих транзакций, чтобы начислить у себя в системе внесенную сумму?   в самом смартконтракте прописывать начисление или постоянно опрашивать на наличие новых транзакций кошлек?

Just1k $BC: Еще раз повторюсь, вдруг кто знает.  Хочу торгового бота для торговли токенов с мемпадов. И те что не на декс и те что на декс.  Накидайте варианты стеком тон.   Буду очень благодарен, нужны ответы))

User: https://github.com/toncenter/examples/blob/main/deposits-jettons.js — для жетонов  https://github.com/toncenter/examples/blob/main/deposits.js — для TON (reply to 311613)

&rey: В самом смартконтракте незачем, блокчейн уже хранит баланс. (reply to 311613)

User: https://docs.ton.org/v3/documentation/ton-documentation — почитайте на досуге документацию. Посмотрите и проверьте все возможные варианты. Выберите лучший для вашей задачи, и который вы сможете себе позволить. Конкретно в вашем случае я-бы рекомендовал снял приватный лайтсервер. Я пользовался серверами @dtontech_bot, проблем не наблюдал — все ок (reply to 311614)

User: Отправьте ошибку которую вы видите в консоли сюда, чтоб мы смогли разобрать вашу проблему более подробно. Желательно прикрепить еще кусок кода (reply to 311611)

Just1k $BC: Окей, это что касается отправки транзакций.  А что со свайпом Стон фи (СДК не получилось буду пробовать Апи или выше посоветовали способ).  И со свапом именно ТонФан. Просто я в документации не нашел про свапы. Скорее всего плохо искал. (reply to 311617)

User: https://t.me/tondev/289944 — все ссылки на документацию tonfun контрактов, и sdk для работы с ними (reply to 311619)

sd: В акте есть примеры свапов дедаста, стонфи, тонфана (bigpump), act.ghwnd.cc (reply to 311619)

Kid a kid: привет, возможно как то получить bearer токен апки тг?

III: Ошибки нет, транзакция не возвращает коллбэк, что она завершена и не возвращает boc транзакции (reply to 311618)

User: Вопрос не для tondev чата, советую обратится в telethon или gram.js чаты. (reply to 311622)

Kid a kid: оке спс (reply to 311624)

User: Попробуйте полностью пройтись дебагером по всему коду, включая библиотеку tonconnect, и посмотреть куда уводится условие, что хеш не возвращается. После, если проблема будет в библиотеке, сделаете форк, пушните фикс и все будет отрабатывать стабильно + если действительно проблема будет именно в библиотеке, внесете вклад в развитие TON connect. Вперед в путь дебажить!) (reply to 311623)

III: Это была крайняя мера, менять библиотеку, но видимо другого выхода нет (reply to 311626)

Just1k $BC: А получается если там свапы есть, значит для сектора мемпадов можно использовать чисто тон фан ? (reply to 311620)

&rey: Подключение к мосту тоже возвращает почти пустые ответы? На панели "сеть". (reply to 311623)

User: Насколько я в это погружен, то все мемпады на данный момент времени мало чем отличаются друг-от-друга, и по большому счету, даже технически являются калькой друг-друга/одного и того-же контракта с небольшими правками, но все таки у каждого мемпада чаще всего свои родительские контракты-деплоеры, которые нужно оборачивать отдельно. В общем универсального решения нет, хоть и все они это чуть вида измененные версии одного и того-же контракта (reply to 311629)

III: Если имеется ввиду https://walletbot.me/tonconnect-bridge/, то идёт бесконечный запрос к events, который не отвечает очень долго (reply to 311630)

Максим: Всем привет! А кроме этого бота @dtontech_bot есть еще варианты? Мы просто химичим с ребятами пэт проект, 128$ дороговато(молчу про то, чтобы свою ноду поднять). Публичные 8 из 10 запросов отваливаются по таймауту... Или может скинуться с кем-то можно?  А может что-то еще посоветуете. В тестнете все работало, а с мэйн проблемы начались.

User: Дешевле лайтсерверов нет, так что подумайте в сторону — а зачем вам вообще лайтсервер свой? Тем более архивный? (reply to 311637)

Максим: Я использую библиотеку pytoniq, там используется такой конфиг И он не работает почему-то. Вот тут  увидел что публичные liteservers лежат. Сделал вывод что публичные не подойдут, по крайней мере те, кторые в библиотеке, а других я не нашел.  Мне из запросов то нужно только инфу о контракте получить и отправить жетоны. (reply to 311638)

User: Воспользуйтесь централизированными решениями в виде tonapi или toncenter. С учетом pytoniq, вы скорее всего пишете на python, там есть библиотека tonutils с богатой документацией.   На крайний случай, если вы боитесь что все ляжет, то сделайте все на централизированных апишках, но если условно оно не ответило за 10 минут ни разу, то пусть оно или свапает апишку или вовсе переходит на публичные лайтсервера  Приватный лайтсервер вам для этого держать не нужно (reply to 311639)

Максим: Большое спасибо за ответ. А это единственные публичные сервера или где-то еще нужно искать? И они действительно не отвечают сейчас или проблема в библиотеке? (reply to 311640)

User: В конфиге указаны все публичные лайт сервера  Сейчас из-за нагрузки отвечают туго, но обычно с ними все ок. Но они всегда работают хуже чем апишки (reply to 311641)

Максим: Понял, спасибо большое, рассмотрим переход на апи или tonutils (reply to 311642)

&rey: Лайтбалансер отваливается, или каждый из серверов?  Как-то раз у меня работало всего два сервера из всех, остальные отклоняли соединения. Давно было, но с тех пор я прикрепляю конкретный индекс. (reply to 311637)

Максим: Да, я походу затупил... Вот спасибо! Я все через LiteClient делал.  Сделал сейчас через Лайтбалансер и пошло дело. (reply to 311644)

— 2025-06-29 —

Лена🍅: Здравствуйте, подскажите пожалуйста мне скинули nft на ton tgкошелек ( не спейс) транзакции не видно, как ее вытащить?

Dmitry: В общем случае никак. Можете написать в поддержку ТГ кошелька, но скорость её работы (по прошлым отзывам) бьет скорее антирекорды.... А транзакции не видно именно в кошельке? А в эксплорере-то она есть? А то может вас вообще заскамили. (reply to 311658)

Лена🍅: Спасибо, это не Скам это победа в конкурсе (reply to 311659)

Dmitry: тг-кошель кастодиальный, т.е. средства всех юзеров лежат в одном (с точки рения блокчейна) кошельке, и сид-фразой от него владеют только разработчики кошелька. так что ваша нфт прилетела им на кошелек. они по идее могут ее послать на другой адрес, но как вы им докажете что именно вы её выиграли? адрес то общий... если в транзакции не было ничего указывающего на вас (имя ТГ в комменте например) то думаю они ее просто вернут отправителю. (reply to 311660)

Denis: Не совсем так. У воллета индивидуальные депозитные адреса. Но это не просто ключики в одной базе, а сложная распреденная конструкция и просто так произвольные сообщения оно подписывать не будет. Возможно функцию трансфера нфт сделали штатной и тогда саппорт может помочь (reply to 311661)

⁣⁣ᅠ: Всем привет, подскажите плиз я тут чет не вдупляю. Есть смарт задача которого принять жетоны от 1 пользователя и передать другому/другим,  но почему то в тестнете все ок https://testnet.tonviewer.com/transaction/cf4c65157da5aafc5d00f58ef9cf878834a3f8ae0d65c08b383941e6d533a57b но тот же смарт токо в мейннете почему то не передает жетоны https://tonviewer.com/transaction/8fbdfeaadd962bdabb9b9df2822222b0ceded9f08ec337ddeb964d05ec67c40c  я возможно туплю, но помогите пожалуйста

⁣⁣ᅠ: судя по тонвиверу жетоны потерялись между D и C в мейннете, но почему и куда они могли уйти?

Denis: да вроде всё ок

⁣⁣ᅠ: на вид да, но конечный получатель это этот кошелек UQA_rGxGSOngCzBbPlQ69GH9Co0qYGeNWVixVi87cDgWj9CY а у него +0 токенов

⁣⁣ᅠ: и я не понимаю куда копать, с одной стороны смарт работает, а с другой нет

Denis: да. странненько. баланс получателя не вырос

⁣⁣ᅠ: а в тестнете вырос вот в чем рофлы

⁣⁣ᅠ: жетон создавался через ton minter все по обычному

Denis: а. ну стоп. ищите багу в логике D почему он шлёт нулевой эмаунт дальше

⁣⁣ᅠ: принял, странно очень (reply to 311677)

⁣⁣ᅠ: ну как я понял ошибка не в смарте у меня https://tonviewer.com/transaction/3e81264514145af01309d9c04af24af98c7a54d429da13bab2e64dea99756307 (reply to 311677)

⁣⁣ᅠ: ибо я вот эту транзу щас сделал ручками через блюпринт и все ок

Denis: очевидно в смарте. ну или в том чем вы собираете форвард пейлоад. потому что форвард пейлоады в ваших двух транзакциях разные

⁣⁣ᅠ: О как, спасибо большое вам, ошибка однозначно в бэке

⁣⁣ᅠ: Потому что я на бэке собираю ячейки и передаю их на фронт а там вызываю

Roma: всем привет. подключил тонконект к проекту почему при вызове await tonConnectUI.openModal(); открывается окно с бесконечно долго загрузкой. манифесты пробовал разные ставить результат одинаков.

⁣⁣ᅠ: код скинь (reply to 311685)

Roma: Подключение тонконекта   ReactDOM.createRoot(document.getElementById("root")!).render(   <React.StrictMode>     <Provider store={store}>       <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/Ton-Split/tonconnect-manifest/refs/heads/main/tonconnect-manifest.json">         <App />       </TonConnectUIProvider>     </Provider>   </React.StrictMode> );     Использование  export const ConnectWalletButton: FC<Props> = ({ onClick }) => {   const [tonConnectUI] = useTonConnectUI();    const handleClick = async () => {     console.log("ConnectWalletButton: Подключение кошелька");     try {       await tonConnectUI.openModal();       onClick();     } catch (err) {       console.error("ConnectWalletButton: Ошибка подключения:", err);       alert("Failed to connect wallet: " + (err as Error).message);     }   };    return <FormButton text="Connect Wallet" onClick={handleClick} />; }; (reply to 311686)

⁣⁣ᅠ: попробуй открыть в инкогнито, если не поможет то ща

⁣⁣ᅠ: и убери await  const handleConnectWallet = () => {     if (!address) {       tonConnectUI.openModal();     }     tonConnectUI.disconnect();   };   банальный пример (reply to 311687)

Roma: никак не помогло (reply to 311689)

Roma: пробовал в разных браузерах в инкогнито

⁣⁣ᅠ: с инетом все ок?

Ivan: Если вы в РФ то надо поработать с vpn (reply to 311691)

Roma: не я в Грузии. другие сайты банально другой фронт с тонконектом локально запушеный все работает оттуда же также взят манифест. (reply to 311693)

⁣⁣ᅠ: о как прикол (reply to 311694)

⁣⁣ᅠ: а открой локал стор во время открытой модалки, насколько помню тонконект сохраняет мету туда и валеты тоже

⁣⁣ᅠ: у меня 2 догадки либо инет твой, либо тоник не может куда то достучаться чтобы получить данные

Roma: вроде ниче нет (reply to 311696)

⁣⁣ᅠ: Вот чисто ради прикола попробуй порт сменить, я знаю что это маловероятно поможет но вдруг прокатит 😂? (reply to 311698)

Roma: не нифга поставил 5173 (reply to 311700)

⁣⁣ᅠ: Я бы угарнул если бы это помогло 😅 (reply to 311701)

⁣⁣ᅠ: А твоё приложение есть в публичном доступе?

Roma: оно то стоит на сервере и там рабоатет все. Но вот имено на локалхосте нет. (reply to 311703)

⁣⁣ᅠ: О как (reply to 311704)

Roma: у чет у меня предположения если я это поставлю на сервер то там тоже перестанет работать

&rey: Запрос до wallets-list.json проходит? на панели "сеть" (reply to 311704)

Roma: такого вообще нет. Даже запроса туда. от тонконекта есть только wallets-v2.json (reply to 311707)

Roma: в целом от тонкипера запросы были на картинки кошельков и он их получил все

Denis: интересно когда уже список кошельков переедет куда-то с гитхаба на ton.org. сейчас все дёргают гитхаб а гитхаб не очень любит работать бесплатным CDN если что (reply to 311708)

Михаил: После твоего сообщения сделают видимо :) (reply to 311715)

Denis: лол. если бы. я год назад еще обсуждал это с ответственными за пакет людьми. (reply to 311716)

PxAAMRSHLL: На благотворительное пиво админу:) (reply to 311570)

Michael: не веришь в альтруизм?) (reply to 311718)

Китикет: на cdn какой-нибудь бы, желательно который меньше всего под блокировки попадает (reply to 311715)

PxAAMRSHLL: А просто баланс или транзакции, это тоже играет роль, как писали выше, нужно под каждый блокчейн делать, если много блокчейнов, нужно много модулей для каждого, который запускается одним главным файлом, что позволи в последующих этапах масштабировать все И если много блокчейнов лучше использовать quick node (reply to 311566)

PxAAMRSHLL: Верю)))))) 🍻 (reply to 311719)

PxAAMRSHLL: Нашел решение:? (reply to 311719)

Kenya-West (UTC+7): Понял. Короче, всё как у фиатных сервисов. Нет возможности сделать:  curl 'https://smotret-balance-koshelki.crypto/koshelka/0xdshsjkdhdsjhsdbndfd' (reply to 311722)

Michael: В целом да. Дали ссылку на репозиторий. (reply to 311724)

PxAAMRSHLL: Если что пиши:) (reply to 311726)

Michael: Хорошо) (reply to 311729)

Just1k $BC: Подскажите, если брать платный Апи, там появляется секрет Мемпад. Там можно парсить данные токенов которые еще не интегрировали на декс ? Верно же ?

⁣⁣ᅠ: 1) не понял про какое апи речь  2) в тонапи и без того можно это делать ) jettons history там есть все жетоны даже тех которых нету в пулах дексов и цексов (reply to 311731)

Just1k $BC: Ton console API

⁣⁣ᅠ: Ps: в тонцентре тоже такое есть, если вы подумаете что там нету, но там сериализация стрем мне не нравки

Just1k $BC: Короче я понял. При деплой сразу в блокчейне и в принципе любой апи увидит

Just1k $BC: А к чему там про мемпул написано? Скрина нет, может видел кто)

Denis: мемпад а не мемпул. что-то на дегенском

Just1k $BC: Ну да, короче в чем смысл ?

Just1k $BC: Народ, начинающий)  Вопросы есть)

Just1k $BC: И еще небольшой вопросик)  Извините если надоел.   Реально сделать же такой график через Ton Console API ?  Ну плане не визуально, понять что там библиотека графиков Трейдингвьб и генерация карточки.  Но в целом при таком стеке реально ?

Just1k $BC: Сюда можно фотки кидать ?

Just1k $BC: Или из метаданных транзакций  надо будет высчитывать через логику ?

Denis: это свечной график. надо знать 4 цены чтобы его построить: минимальные и максимальные цены за период времени и цена на момент начала периода и момент окончания периода.  тонконсоль таких данных не дает

Just1k $BC: А из транзакций построить тоже нельзя ? А как быть? Может знает кто решение ?   И еще такой вопрос. Я тут подумал. лайф сервер если есть, можно же через него получать данные из блокчейна ? Чем у публичный тонконсоле апи эндипотов ?   Я просто могу не понимать, поэтому и интересуюсь.

&rey: А что вы подразумеваете под ценой жетона? Возможно, она как-то зависит от транзакций свопов? Или от данных контрактов дексов? (reply to 311749)

Just1k $BC: И тут я задумался)) Из пулы циркулирующего и вы купленного. (reply to 311751)

Just1k $BC: Объясните?!) пожалуйста

— 2025-06-30 —

Morphine: Добро пожаловать

Morphine: Есть ли здесь застройщик?

Denis: Better ask in @tondev_eng (reply to 311786)

Oleg: Алоизий Могарыч? (reply to 311786)

Alex: Здравствуйте, ищу фулстек разработчика:  Технологический стек  Backend: – Go: Fiber, pgx/v5, Docker, Redis, River queue – Database: PostgreSQL, Redis – Monitoring: Prometheus, Grafana, Jaeger – Blockchain: TON   Frontend: – Core: React, TypeScript, TanStack Query, Tailwind CSS, Vite – State: Zustand/Redux Toolkit – Testing: Vitest, Testing Library – Tools: ESLint, Prettier – Integration: Telegram Mini Apps SDK, TON Connect  DevOps – Containerization: Docker/Docker Compose – CI/CD: GitHub Actions – Monitoring: Prometheus, Grafana, Jaeger – Infrastructure: Kubernetes, облачные провайдеры (AWS/GCP/Yandex Cloud) – Web: nginx, SSL сертификаты – Backup: стратегии для PostgreSQL/Redis  Контакт @ceosasha

Kenya-West (UTC+7): Есть нечто подобное, OpenAI GPT 4.1 в режиме глубокоанального исследования на третий раз смог что-то выцепить. Будем пробовать (reply to 311725)

&rey: Вы только не отправляйте ничего по советам ллмок, они тон не знают. (reply to 311799)

Roman: Привет, объясните пожалуйста, почему здесь 8 cell overflow?  value: 300000000n,         ec: [],         body: x{05138D9100000000000000008008D0D4580CD8F09522BE7C0390A7A632BDA4A99291C435B767C95367EBE78E9AF_}          x{2C624232CDD221771294DFBB310ACA000A0DF6AC8B66B696D90EF06FDEFB64A300000000008008D0D4580CD8F09522BE7C0390A7A632BDA4A99291C435B767C95367EBE78E9AF_}           x{80126B9529461F6EDEC433E2E9883D7DCBE9C107DC96AA3DD70A66AD539514CA5F50011A1A8B019B1E12A457CF807214F4C657B49532523886B6ECF92A6CFD7CF1D35E_},         inMessageBounced: false,         inMessageBounceable: true,         op: 85167505,         initData: undefined,         initCode: undefined,         deploy: false,         aborted: true,         destroyed: false,         exitCode: 8,         actionResultCode: undefined,         success: false

&rey: Вопрос к контракту. (reply to 311805)

Roman: А, то есть переполнение внутри контракта происходит, спасибо (reply to 311806)

Vladimir: 📣 TON Developers — we need your feedback!  Help us shape the future of TON development. We’ve prepared a detailed survey to understand your experience with: 🧠 Smart contract languages (Tact, Func, Tolk) 📚 Documentation and education 🛠 SDKs, IDEs, and tools 🤖 Telegram Mini Apps 💬 Developer support and pain points  💎 As a thank you, we’ll issue an SBT (Soulbound Token) to your wallet as proof of contribution to the ecosystem.  👉 Take the survey here: https://docs.google.com/forms/d/e/1FAIpQLSfDm85Z7YxDw96nMeV9T-b2kmd2qAe8xt0_iag8ZqrgqKuCRw/viewform  🕐 Takes 5 minutes. Every voice matters. Let’s build a better TON together. (forwarded from TON Dev News)

fruitful-l: Некоторые вопросы имеют не совсем подходящие типы ответов (reply to 311809)

Vladimir: Спасибо! Поправил (reply to 311813)

Роман: У меня сообщение куда то пропадает?

F: TON Dev Chat (РУ) @tondev #c1436487881  👤 Роман @BarnaulRomanTV #u6944058124 Reason: Word выплата is not allowed  Text: Всем привет, первый раз пробую добыть TON используя Windows, AMD GPU и Telegram. В 2020 пытался научиться майнить через NiceHash... Сейчас вроде запустил терминал и строки пишет, а потом какие то символы появляются с эрором, подскажите как настроить добычу валюты через GPU AMD, кошелёк Telegram TON вроде бы указан, как узнать когда будет выплата на кошелек, в логах терминала?  #message_deleted (forwarded from Combot)

&rey: Ну и ответ, собственно, вот какой: майнинг тона закончился.

Роман: Посоветуйте что можно помайнить на AMD GPU и получить вы пла ту на Telegram wallet? Интересно потестить что это такое крипто-кошелек в Telegram) (reply to 311826)

&rey: Поднимите ллмку или тон сторейдж, хоть польза будет. (reply to 311827)

&rey: (Тон сторейджу нужен, естественно, диск, а не видеокарта.)

Оскар: майнинг на асиках туго идёт, и то только если ты нашел дешевую розетку, так на видеокарте всё совсем плохо (так ещё и одной) лучше действительно сделать то, что выше посоветовали (reply to 311827)

Роман: С майнингом немного знаком, умею скачать программу, указать кошелёк, а вот ллмка и тон сторейдж мне понятие совсем не знакомо. (reply to 311828)

HORNY☦️: сап

/-: Ребят, помощь нужна, не знаете чей адрес? UQALNg_rFGuNZRbrDpP2ZdqABigEEr3Vsj0e79GhhJnmeaMn

Андрей: Судя по коду контракта - это обычный highload-wallet-v2 Скорее всего принадлежит какой либо CEX Как узнаете - можете добавить в адресную книгу tonscan (я проверил, его там нет) (reply to 311840)

Andrey: Майнинг тона закончился несколько лет назад, если что (reply to 311827)

Andrey: Так что если хотите «майнить», то сейчас это делается через место на жестких дисках:  https://t.me/tondev/311066 (reply to 311827)

HORNY☦️: ого (reply to 311848)

XT: А как работает? Вот ты поставил у себя программу, она качает тебе блкочейн или часть блокчейна туда и что потом? Кто начисляет вознаграждение? (reply to 311848)

HORNY☦️: можно поподробнее? (reply to 311848)

Vladimir: В будущем планируется что это будет одним из способов монетизации. Там есть важный момент в тексте. (reply to 311851)

&rey: А ожидаются какие-то гарантии, что провайдер на самом деле будет хранить файл, будет его всем раздавать, и т.п.? (reply to 311848)

Combot: Combot выдал(а) предупреждение Windy Florans (1/3) Reason: 1 reports (reply to 311857)

vomexo: всем привет, очень заинтересован в разработке на тон можете подсказать какой стек сейчас лучше всего начать изучать и с чего лучше всего начать чтобы стать разработчиком на тон?

Vladimir: Курс на stepik, курсы на YouTube. (reply to 311860)

Andrey: У провайдеров есть рейтинг, если он не раздаёт - его рейтинг понижается и в следующий раз его не будут выбирать для хранения (reply to 311854)

HORNY☦️: Что такое разработчик тон, я в танке (reply to 311860)

Denis: Настаиваю на использовании термина "застройщик тон" (reply to 311864)

&rey: Ну, понятно: если какой-то мешок с файлами захотят ограничить, то провайдеры его удалят и ничего особо не случится, никаких последствий в тонах. А есть где-то вайтпепер того, как это вообще считается? (reply to 311863)

HORNY☦️: Так а что это (reply to 311866)

— 2025-07-01 —

Moddie: Привет, я новичок в Tact так что многих тонкостей могу не знать.  Я делаю проект, который состоит из 4 отдельных контрактов. Каждый из них деплоят друг друга по цепочке. По и тогу я все реализовал, тесты он проходит, но когда я деплою контракт, который запускает цепочку он не может задеплоить следующий из-за "ошибки 9" недостаточно газа. Как я понял в TVM есть ограничения по газу на одно сообщения, вроде оно составляет 0.1 TON. У меня вопрос как мне это обойти? На ум приходит только два варианта либо рассчитывать initData одним сообщением и хранить его в map в месте с адресом отправителя, а деплоить уже вторым сообщением либо заставить dapp самому деплоить то что нужно и сообщениями их связывать. Что делать, может я вообще не в том направлении копаю или где-то накосячил? Как то оптимизировать сильнее не вариант я и так сделал не все что нужно.  Еще вопрос сравнивая с бекендом контакты маленькие, это вообще нормально что мне не хватает газа? Понимаю что сравниваю мягкое с жидким, но все же

Оскар: так 9 ошибка это cell underflow (пытаемся прочитать из ячейки больше, чем в ней лежит) out of gas это 13/-14 (reply to 311873)

Morphine: Здравствуйте, могу ли я получить монету ton testnet ?

Moddie: Я идиот, у нейронки ошибки больше не спрашиваю, спасибо (reply to 311874)

Оскар: @testgiver_ton_bot (reply to 311875)

Morphine: О, спасибо. (reply to 311877)

MissMorphine: Здравствуйте, прошу прощения за неудобства. Где его можно получить jetton testnet?

MissMorphine: Any help? (reply to 311887)

Dmitry: https://minter.ton.org/?testnet=true или переформулируйте вопрос. For English use @tondev_eng (reply to 311887)

Teers k 🐾: Где начать tact

Teers k 🐾: stepik? Или другие варианты (reply to 311890)

X1ag: У них очень хорошая документация. Можно начать с нее (reply to 311890)

Teers k 🐾: С stepik? (reply to 311893)

Teers k 🐾: Я спрашиваю где лучше всего начать изучать tact

X1ag: Начните с документации TACT

rends_east: С документации такта, вам отвечают (reply to 311895)

Teers k 🐾: https://docs.tact-lang.org/  Этот?

rends_east: Попал (reply to 311898)

MissMorphine: Я не понял, как этим пользоваться + окей (reply to 311889)

X1ag: Этот сервис позволяет создать Jetton и минтить его себе на кошелек (reply to 311900)

Denis: Лучше начать с tolk (reply to 311895)

Вика: Привет всем, скиньте, пожалуйста, ресурсы, где можно почитать про разработку фронта под контракты ton, чтобы можно было вызывать контракты и делать норм dApp для ton. Может быть какие-то либы, как wagmi для evm контрактов есть?

X1ag: почитайте про ton-connect (reply to 311905)

Oleg: На степике в составе курса тон есть взаимодействие фронта с контрактом (reply to 311905)

🐼 Sild: а при получении стейта из лайт-сервера через liteServer.getAccountState, если меня интересует стейт на конец мастер-блока, нет разницы передавать туда мастер-блок или последний шард-блок?  ну т.е. в целом вопрос хранит ли мастер-блок все стейты своих шардов, или умеет ли лайт-сервер сам разобраться в какой шард-блок ему сходить если передали мастер

/B4ckSl4sh\: В мастерблоке записаны root_hash последних известных шард блоков, в которых будет уже хэш стейта шарда (reply to 311910)

/B4ckSl4sh\: Перепроверил. Да, умеет, использовал это недавно (reply to 311910)

/B4ckSl4sh\: Вот экзампл если нужно, у меня работает https://github.com/tact-lang/dex/blob/main/sources/tests/proofs.spec.ts#L561 (reply to 311910)

🐼 Sild: да я параллельно вопрос задал и сам тестировать пошел, через пару минут уже свой экзампл будет)

MR PROTON: Ребят, подскажите пожалуйста. Как можно генерировать и отправлять SBT в своём дизайне, после оплаты участником доступа в наш проект.   1) Человек оплатил - мы видим его кошелек 2) Мы создаем SBT и передаем его участнику 3) Человек по SBT получает доступ в приватку  Подскажите как автоматизировать процесс и как это сделать. Буду благодарен за помощь всем кто откликнулся!

User: 1) Сдетектили транзакцию  https://github.com/nessshon/tonutils/tree/main/examples — вот тут можно посмотреть как отслеживать транзакции на python   2) Создали метадату, разместили на сервере, и минтите SBT на кошелек пользователя   Вот тут пример на python: https://github.com/nessshon/tonutils/tree/main/examples/nft/soulbound  3) Через апи дергаете кошелек пользователя и проверяете есть ли у него нфт из вашей коллекции, если есть — пускайте, если нет, то нет (reply to 311915)

MR PROTON: Огромное спасибо! (reply to 311916)

Dmitry: Я сейчас глупость спрошу, но правда ли тут sbt вообще нужен? На п1 вы узнали кошель того кто оплатил. Потом вы на этот кошель повесили метку, которую владелец кошеля не может передать другому. И на п3 вы проверяете что на известном ваш кошеле все еще висит метка. Но куда она может деться то? Не проще просто кошель с п1 запомнить?

&rey: Если у сервера несколько инстансов, а общей БД нет, то лучше уж сбт. (reply to 311918)

Dmitry: А, то есть «негде» запомнить кошель между п1 и п3… да, тогда метка. Все еще в веб2 мыслю.  Спасибо! (reply to 311919)

&rey: Ну и, естественно, п1 и п2 лучше бы делать ончейн. Это как раз идеальная задача для контракта: получить тоны, сминтить сбт. Можно даже свопнуть автоматически в юсдт, чтобы оценить, сколько пришло.

Anastasiia: UP 🤏 (reply to 311461)

🐼 Sild: https://tonviewer.com/transaction/63b5e2dee9d4e4072a0fb2bea79cd848e419c3bf9e40bef10f4096efbafad779 на сколько это исключительная история, что in_msg есть а соответствуего ему out_msg не было?

&rey: В каждом переводе тонов или жетонов такое есть, и часто не по разу. (reply to 311923)

Denis: только эмиссия так работает (reply to 311923)

Denis: трейсы строить поди начал

Denis: func (m Message) Parentless() bool {   return m.Type == ExtInMsgType || (m.Source.Workchain == -1 && m.Source.IsZero() && m.Bounced == false && m.CreatedLt%1000000 == 0) } не благодари

🐼 Sild: строили мы их и раньше, теперь начали еще валидировать =) (reply to 311927)

Grigorii: Всем привет, есть ли какой то лимит по количеству букв в тикере жетона?

maksim: ончейн дата - лимит селла по байтам, оффчейн дата - если только в индексерах специально ограничение по джсону (reply to 311931)

Сергей: Всем привет!  Может ли кто нибудь подсказать, как правильно можно считать балансы адресов в тоне для нативной монеты и jetton? Я изначально думал просто прибавлять value "in" сообщений и вычитать value "out". Но что-то результат получается некорректный Понимаю что есть еще комиссия, но результат прям слишком отличается от реальности и дело не в комиссиях

🐼 Sild: если вам из прошлого, то лучше доставать стейт (там будет либо balance для ton, либо на нем потом можно get_wallet_data подергать)  если вам из будущего то бог помощь =( (reply to 311933)

&rey: Ну, жетоны – это просто состояния выделенных контрактов (жетон-кошельков), они в value-то не отражаются. (reply to 311933)

Сергей: У нас есть готовые дешифрованные структурно разложенные данные от команды ton-etl с отдельно сообщениями, jetton events, transactions. И вот возник вопрос, можем ли мы с помощью этих данных самостоятельно подсчитать балансы адресов? (reply to 311934)

Tim: Коротко - DA (reply to 311944)

Tim: Но там есть нюанс в том что вам нужна гарантия полноты данных

Сергей: насколько мне известно, данные полные поэтому если есть возможность раскрыть не коротко, то я был бы очень благодарен) (reply to 311946)

Tim: Просто смотрите тогда успешные ивенты Jetton transfer out и Jetton transfer in, их сумма и будет конечным балансом. Нужно только убедиться что вы суммируете только успешные ивенты

Tim: Последний раз когда я пытался так балансы по данным тонцентра посчитать выходили нестыковочки. Ребята писали что поправили, но в любом случае надо все 10 раз перепроверить

Сергей: Да, данные по успешному/зафейленному трансферу есть, проверю такой подход А если по нативной валюте? (reply to 311949)

Tim: По нативной никак скорее всего, потому что в ивентах нет информации по всем комиссиям. С другой стороны если все комиссии есть, то и посчитать не сложно.  Но не проще ли актуальные стейты просто скачать уже?

Tim: Несколько своих хороших серверов и все известные адреса можно проиндексировать за пару часов

Сергей: Да, они выгружены у нас, в том числе и исторические стейты, но мы бы хотели иметь возможность самостоятельный подсчет проводить, хотя бы примерный без учета всех всех комиссий (reply to 311952)

⛰️ Roman ⛰️: в идеале должен быть контракт, который распределяет одним платежом задачи для других контрактов, что бы пользователю не пришлось подтверждать несколько транзакций одновременно для разных контрактов?

&rey: Больше четырёх надо? (reply to 311955)

⛰️ Roman ⛰️: нет, допустим если даже 2 разных платежа которые делаются отдельно и можно их объединить в один платеж с помощью другого контракта? (reply to 311957)

&rey: Тогда пихайте несколько сообщений в sendTransaction, и всё сработает. (reply to 311958)

⛰️ Roman ⛰️: и это сработает как один платеж? (reply to 311959)

&rey: Конечно. Контракт кошелька — одно из самых универсальных средств для отправки сообщений.

⁣⁣ᅠ: всем привет, помогите плиз: использую ton api метод /traces/<id>  вот такой хэш получаю при оплате из валете от tonconnectui  d21aff73cb980b54ebd8b5f75b62e23573c8c182ec2a1eed0e8364716c7270db  делаю запрос на тонапи и оно находит транзакцию и все ок https://tonapi.io/v2/traces/d21aff73cb980b54ebd8b5f75b62e23573c8c182ec2a1eed0e8364716c7270db  но в самой трейсе этого хэша нету, вопрос тогда что это за хэш такой может быть?

⁣⁣ᅠ: ps: хэш получаю вот так const { boc } = await tonConnectUI.sendTransaction(message); const trHash = Cell.fromBase64(boc).hash().toString('hex');

Андрей: Хеш сообщения (reply to 311963)

⁣⁣ᅠ: а могу ли я как то достать какой нибудь хэш из этой трейсы ? если да то как ? (reply to 311964)

🐼 Sild: что значит "какой-нибудь хеш". Там в ответе полно "каких-нибудь" хешей

⁣⁣ᅠ: вот и я о том же, как то можно при отправке транзы получить любой из хэшей что есть в этой трейсе? (reply to 311966)

⁣⁣ᅠ: или это тот кейс когда хэш в конечном итоге изменяется ?

🐼 Sild: нет, можно получить только msg_hash (возможно он там уже нормализованный)

🐼 Sild: после отправки сообщения это единственные данные, которые есть у системы. транзакция еще не закоммитилась, все что можно сделать - это посчитать хеш от отправленных данных

🐼 Sild: несмотря на название SendTransaction, тонконнект на самом деле делает SendMsg =)  Кстати, а есть гарантии что если msg_hash вернулся - транзакция когда-нибудь появится? (reply to 311967)

⁣⁣ᅠ: кстати в тестнете этот хэш = 2ому хэшу в трейсе) (reply to 311971)

⁣⁣ᅠ: были бы мы в тестнете вот тот хэш получался бы как ожидалось мною)

Китикет: body_hash кстати удобнее юзать если там что-то уникальное лежит, в этом случае с клиента на сервер не надо передавать msg_hash или гарантировать определенный valid_until, можно просто в любой момент на сервере воссоздать такой же body и получить его хеш

🐼 Sild: там "ну такое себе".  При стечении обстоятельств ( in_msg == in_msg_normalized) он может совпадать https://docs.tonconsole.com/tonapi/cookbook/transaction-tracking (reply to 311974)

🐼 Sild: это частый сценарий, но не гарантия (reply to 311976)

🐼 Sild: хотя хз как может совпадать .storeUint(0, 4)    // import_fee = 0  может это как-раз плюшка тестнета

⁣⁣ᅠ: а по каким свойствам из этой трейсы можете порекомендовать валидить транзу? по мимо адреса (клиентский адрес === тот что в трейсе) и полной ее завершенности и статусам (reply to 311974)

🐼 Sild: тут не подскажу, я диванный программист и не знаю инструментария тонапи

Андрей: Я использовал чистые lite-server's и искал хеш сообщения по адресу кошелька, пока не дойду до искомого или сообщений которые были созданы позже времени создания нашего сообщения Но это для того что бы понять что сообщение было отправлено в блокчейн. А что конкретно вам нужно валидировать знаете уже только вы (reply to 311979)

⁣⁣ᅠ: успешность транзы (reply to 311982)

Андрей: Если она в блокчейне, то она уже успешная Но у всех свое понимание успешности (reply to 311983)

Denis: что-то на биткоиновском (reply to 123723)

Combot: Combot выдал(а) предупреждение в1оленсов l xgizm.t.me (1/3) Reason: 1 reports (reply to 311993)

Pavel: приветствую. вопрос в студию. со своей ноды вот так норм отдавать по апи транзы? достаточно ли данных? "trace_id":"ZK3t5cvi0q548CFwxTFMiev56jkeKErXJK7OVY3mejQ=": [     { "hash":.........        "now": 1747651170,        "status": "active", успех или нет       "total_fees": 2811683, в тоны учитывая decimals       "in_message": [         {           "sender": user friendly address,           "opcode": 1936287598,           "value": null         },                ],       "out_message": [         {           "receiver": "user friendly address",           "opcode": null,           "value": 1000000000 учитывать decimals          }       ]     }   ],

Pavel: а то тут спор вышел

🐼 Sild: Очевидно смотря для чего  Если данных достаточно то достаточно . Если не достаточно то не достаточно🤷‍♂️ (reply to 312000)

Pavel: ну список транз. по идее. тут все просто должно быть. хеш, время, статус, мессэдж in, out. op и value. применение, к примеру посчитать fees, или value, или с каким адресом частые взаимодействия. я просто не понимаю что еще юзеру может понадобиться в списке транз. (reply to 312002)

🐼 Sild: Prev_tx hash/lt на аккаунте, родительская tx, msgs body, block_id_ext, exit_code, account_state после транзакции...  Ну короче tlb-транзакции не зря придумано, какой только хрени пользователям не требуется

Pavel: decoded op еще может быть наверно. полезно

Pavel: это уже action (reply to 312006)

Alexey: из очень важного кмк не хватает bounced ли сообщение и собственно body сообщения (reply to 312000)

Pavel: да в том то и дело что хрень непонятно для какого применения. (reply to 312006)

🐼 Sild: А exit_сode ;( (reply to 312009)

Alexey: ну а так-то в общем случае конечно наверное лучше отдавать по тлб..

Pavel: хмм. тлб как гост

&rey: Ну, чтобы ни одно пополнение не пропустить, нужны именно prev_tx_hash&lt. Чтобы по трейсу идти (хотя бы назад), нужна родительская транзакция. Блок — если вдруг транзакцию хочется доказать (или загрузить стейт мастерчейна для эмуляции). (reply to 312010)

Pavel: принял. (reply to 312018)

Pavel: немного не понял, что значит "не пропустить"? где не пропустить? есть же другой способ через action получить все от и до. все дерево (reply to 312018)

&rey: Да я про все приходы тонов на один контракт. (reply to 312020)

Pavel: ну так все message in же орcode 0. по идее. (reply to 312022)

🐼 Sild: opcode это первые биты закопанные в in_msg.body  broadly speaking

&rey: В уведомлении жетон-трансфера может тоже сколько угодно тонов прийти. Склеенный перевод, так сказать. (reply to 312023)

Pavel: можешь на пальцах? оперируем терминами transaction внутри которого messages с value. как это будет выглядеть? (reply to 312025)

Pavel: action может состоять из нескольких transaction соответственно

Pavel: смотрим адрес где в транзакции он либо sender либо receiver всегда. т. е. список транз выдается не по хешу или trace id, а по адресу.

&rey: экстернал — (А - кошелёк) — ордер на трансфер, сто тонов форвард — (Б - жетон-кошелёк А) — интернал трансфер — (В - жетон-кошелёк Г) — уведомление и сто тонов — (Г - кошелёк получателя) (reply to 312028)

Pavel: это одна transaction или все таки это action и несколько transaction? (reply to 312030)

&rey: Это дерево транзакций, один action. Или вернее было бы сказать, что действий там два?) (reply to 312032)

Pavel: разговор был про транзакции где участвует адрес в request. (reply to 312033)

Pavel: кароч тут уже пошла путаница в терминах. 😂

Pavel: я понял что надо делать и для гиков и для условно "ноукодеров". чтоб одни ковырялись в блоках, а другие просто могли получить из json простые данные.

Pavel: если у кого-то есть особые пожелания, можно в личку. еще раз для понимания. блокчейн индексирован, нода поднята. вопрос. как хочется чтобы вам отдавали данные? можно отдавать "тушу", которую вам же потом "разделывать". а можно отдавать "полуфабрикаты", которые воткнул и готово.

Denis: Подкаст уже слушали? https://t.me/tonpizdev/24 Обсуждали как строить индексеры в тон (reply to 312037)

Pavel: спс. послушаю. но с 23-го многое поменялось. (reply to 312040)

Denis: Поверх тонскана в3? (reply to 312000)

Pavel: никакого поверх (reply to 312042)

Denis: О. Прям с нуля индексер свой?

Pavel: любопытной варваре.... (reply to 312044)

🐼 Sild: «проиндексирован» это значит выкачаны все транзы? (reply to 312037)

Denis: В тоне вроде полных индексеров с трейсами по пальцам одной руки пересчитать: Тонапи Дитон Тонскан.ком Тонцентр в3 И что-то своё у стонфай У Антона вроде нет трейсов  Если вы бы пилили свой с нуля то вы бы уже лучше понимали происходящее и задолбали бы чат вопросами.  Так что скорее всего взяли готовый. Опенсорс только тонцентр в3. Врядли вы воровали чужой код.

Denis: Тоесть скорее всего вы пытаетесь сделать апишку поверх индекса тонцентра в3.  Тогда вопрос зачем. Тонцентр в3 делали уже после тонапи и дитон. И они активно заимствовали лучшие идеи (не осуждаю) отсеивая плохие. Тоесть тонцентр в3 и так уже продуман людьми которые сделали перед этим в2 и посмотрели внимательно на конкурентов (а с некоторыми и побухали)

Pavel: не тонцентр, не воровали. (reply to 312047)

Vladimir: А для кого Вы делаете, если при этом не говорите ничего? (reply to 312050)

Denis: А зачем? Почему не взять тонцентр?

Vladimir: Если для себя только, тогда зачем спрашиваете как Вам результат выдавать? (reply to 312050)

🐼 Sild: Можно из желудей и веток собрать аналог и демпингануть)

🐼 Sild: Проблема в том что долбаный индексатор это не просто скаченные транзы, даже если их прошить в actions(

Pavel: вам важно как или важно чтобы было дешево, сердито и как вам бы понравилось? (reply to 312051)

Pavel: да (reply to 312055)

Denis: Дешевле тонцентра? :) он и так почти бес<сраный бот тригерится на это слово>платно раздаёт (reply to 312056)

Alexey: а что это помимо этого? (reply to 312055)

🐼 Sild: Стейты, жетоны (reply to 312060)

Denis: Самая боль это эмуляция промежуточных состояний (reply to 312060)

Pavel: много терабайт (reply to 312060)

🐼 Sild: Бекапы, sla))

Denis: Это минимальная из проблем (reply to 312063)

Denis: А если делать обощеный индексер для всех то сворачивание экшенов. Просто боль и унижение. Специализированный гораздо проще

🐼 Sild: А что это? (reply to 312066)

Denis: А ты когда-нибудь пробовал поддержать нормально весь ад с метаданными нфт? (reply to 312061)

Denis: Ну чтоб не стопицот вызовов смарт контрактов а аккуратный своп (reply to 312067)

🐼 Sild: Я боюсь это может быть в планнинге на следующий год :D (reply to 312068)

🐼 Sild: Надеюсь не придется( (reply to 312069)

🐼 Sild: Получилось в итоге? Мы просто сейчас (не в рамках индексатора) переписываем мета-парсер (reply to 312068)

Denis: А мне приходится. Одна каменистая компания выкатила протокол тут и свапы жетонов на дедасте отвалились. Не знаешь таких? :) (reply to 312071)

Denis: Вроде после 2 лет итераций стало почти заебись (reply to 312072)

🐼 Sild: Есть опенсорс часть?:D

Denis: Не. На самом деле там никакого мега кода. Просто надо сесть спланировать аккуратно весь флоу с учётом реиндексов оффчейн, трёх типов меты (ончейн/оффчейн/семичейн), хранения картинки внутри меты, то что мета есть у жетонов, нфт и коллекций, нфт бывают с коллекций и без коллекции. (reply to 312075)

🐼 Sild: Пока из того что я видел - это там на tep поклали и собирают как повезет(

Denis: А. Ну этих я по максимуму шлю нафиг (reply to 312077)

🐼 Sild: Не достаточно по максимуму))

Denis: Ещё и гетгемс пинаю чтоб они тоже строго по стандарту парсили

Vladislav: Тон будет рости ?

Denis: Дядь мы тут за интересное а ты про деньги (reply to 312081)

Denis: Давай кстати с тобой за интересное поговорим. Допустим метод запрашивающий историю по аккаунту. Возвращает список трейсов. Это же из него кусок? Я правильно понял? (reply to 312000)

🐼 Sild: кстати о "болт поклали на теп" https://github.com/tonkeeper/w5/pull/195 🙄

Denis: А это доехало и в прод версию? (reply to 312084)

🐼 Sild: я это из прода и брал изначально

Denis: Чето я не воткнул в чем суть. Получается экшен лист криво собран? (reply to 312084)

🐼 Sild: дока обманывает, разработчик грустит

Denis: Аааа. Чисто в доке проблема?

🐼 Sild: define "криво". Описание InnerRequest не соответствует реальному (reply to 312087)

fruitful-l: Можете параллельно интересным темам, пожалуйста, попытаться помочь? Есть функция, загружает сообщения () load_data() impure {     slice ds = get_data().begin_parse();      storage::created_time = ds~load_uint(32);     storage::author_address = ds~load_msg_addr();     storage::init? = false;      if(slice_bits(ds) > 0) {         storage::init? = true;         storage::goal = ds~load_coins();         storage::donate_amount = ds~load_coins();         storage::guarantee_amount = ds~load_coins();         storage::participants_count = ds~load_uint(16);         storage::donated_count = ds~load_uint(16);         storage::valid_until = ds~load_uint(32);         storage::donators = ds~load_dict();     } } Я пытаюсь сейчас не триггерить условие и задеплоить только со следующими параметрами, но у меня cell underflow. Чего еще не хватает? const cell = beginCell()     .storeUint(1234567, 32)     .storeAddress(authorAddress)     .endCell();

Denis: На вскидку: а целл андерфлоу точно при чтении даты а не боди например?

fruitful-l: Абсолютно не точно (reply to 312092)

🐼 Sild: если автогена из tlb нет делается - то да, чисто в доке (reply to 312089)

fruitful-l: Нашел, действительно слепой просто и в боди другие чуть параметры, спасибо за подсказку (reply to 312092)

fruitful-l: Нет, всё-таки ошибка при деплое и это стейтинит контракта, поэтому скорее всего что-то не так именно в дате (reply to 312092)

Denis: Ну тогда надо больше кода как деплоите (reply to 312096)

fruitful-l: Через веб ide) (reply to 312097)

Denis: Чето на жсном

fruitful-l: У этого контракта есть заранее написанный конфиг и вроде там только это  export function assurerConfigToCell(config: AssurerConfig): Cell {     return beginCell()         .storeUint(config.createdTime, 32)         .storeAddress(config.authorAddress)         .endCell(); } Поэтому не совсем понимаю что туда еще впихнуть нужно 🤷‍♂️

— 2025-07-02 —

Шейх: Лям застрял как вывести ?

Alexander: Где застрял, как застрял, почему застрял) Никакой информации. Как вы думаете, чем вам могут помочь после такого вопроса? ) (reply to 312104)

Diva: Подскажите пожалуйста я отправил подарки с аккаунта своей группы в официального бота маркета tunnel , они у меня не отображаются, как вернуть подарки или увидеть их? Спасибо заранее, абсолютно не знаю что делать(((
