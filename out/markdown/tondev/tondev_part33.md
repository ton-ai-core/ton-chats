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

сегодня не отвечу))) || 𝐯𝐬𝐤⁴² 𝐝𝐢𝐞𝐝.: приветствую не с того ни с сего появилось у меня в коллекциях в приложении тонкипр. Что это такое? Как мне от этого избавится и представляет ли оно опасность?  ибо в истории транзакций нет даже информации о этой штуке (reply to 302517)

Vasilii: это обычное спам NFT, просто не обращай внимание, либо скрой, если есть такая функция в интерфейсе кипера  --  я сам кипером не пользуюсь, в тоне есть и получше кошелек (reply to 302519)

сегодня не отвечу))) || 𝐯𝐬𝐤⁴² 𝐝𝐢𝐞𝐝.: я скрыл, только все равно не дает покоя, мало ли опасность представляет, так как из ни откуда появилось (reply to 302520)

Vasilii: опасности нет  любой пользователь любому пользователю может отправить любой nft, который может сделать кто угодно (reply to 302522)

🐼 Sild: идея для стартапа - кошелек который баунсит не-заапрувленные ассеты =) (reply to 302523)

🐼 Sild: хотя чего это я, это ж приложением разруливается. Ну, тогда вайт-лист обычный(

rends_east: Так можно сделать, советую заглянуть в контракты stonfi v1 в get методы пула, там они преобразуют адрес в строчку (reply to 302515)

Molodoy Abuzer 3: Соглашайся без раздумий, по рынку такой запрос как минимум в два раза дороже будет (reply to 302530)

Рома: Да тут работы на 10 минут и 10$ небось ?)) (reply to 302532)

Molodoy Abuzer 3: Вы правы. Считаю что это вообще не вы ему должны платить а он вам (reply to 302532)

сегодня не отвечу))) || 𝐯𝐬𝐤⁴² 𝐝𝐢𝐞𝐝.: что это такое? (reply to 302525)

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

сегодня не отвечу))) || 𝐯𝐬𝐤⁴² 𝐝𝐢𝐞𝐝.: почему не получается сжечь?

potato: Ааа точно, там же через uint потом строку закладывать нужно

Oleg: В тоне есть только cell и больше ничего. Все остальное это происки врагов (reply to 302551)

potato: А как в самом func я могу проделать что то типа beginCell().storeUint(0,16).storeStringTail('Здесь может быть ваша реклама').endCell() непонятно как именно строку положить

&rey: Короткую — через .store_slice("здесь и будет"). С длинной будет больно, применяйте фронтенд или такт. (reply to 302553)

potato: cell new_cell = old_cell  это скопирует ячейку или будет ссылаться?

&rey: А хоть так, хоть этак — ячейка-то уже неизменяемая. (reply to 302555)

potato: у меня там максимум до двух уровней вложенности вроде планируется + 1к газа (reply to 302554)

&rey: Ну, собирайте, начиная с самой правой (вложенной) ячейки. (reply to 302557)

𝐑𝐢𝐜𝐡𝐢𝐞: Как с этой фальшивой транзой бороться ?

сегодня не отвечу))) || 𝐯𝐬𝐤⁴² 𝐝𝐢𝐞𝐝.: достаточно заново авторизоваться   ps. мне прост так помогло (reply to 302559)

сегодня не отвечу))) || 𝐯𝐬𝐤⁴² 𝐝𝐢𝐞𝐝.: не перезайти в кошель, а именно на фраге с ним зайти например

𝐑𝐢𝐜𝐡𝐢𝐞: ненене, мне так депозитят

𝐑𝐢𝐜𝐡𝐢𝐞: фальшивкой как то

𝐑𝐢𝐜𝐡𝐢𝐞: Видео не отправляется сюда(

сегодня не отвечу))) || 𝐯𝐬𝐤⁴² 𝐝𝐢𝐞𝐝.: а это что (reply to 302566)

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

гриба: Есть пример как эмулировать транзакцию через tonapi и можно ли получить примерную комиссию?

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

гриба: Все спокойно работает (reply to 303515)

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

гриба: Есть тестовый сайт с tonconnect, где я могу ввести транзакцию и отправить в кошелек?

Nick: Если память не изменяет, у них в документации есть ссылки на демо-версии приложений. (reply to 304186)

гриба: Да, но там очень неудобно менять тело, ладно напишу сам (reply to 304187)

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

гриба: А есть вариант через tonapi узнать тип контракта или хотябы методы, которые в нём есть?

web-assist 🧀: во сколько примерно может обойтись хранение 12к чисел в виде кортежей

Evgeny: Так прям по getAccount выдает интерфейсы, методы и т.д.  https://tonapi.io/v2/accounts/EQD8QXyjSoDRl4Q7-WOGYARQ2Dcv9Md8Gz-z5ZbndYWtKDDC  Ответ {   "address": "0:fc417ca34a80d197843bf96386600450d8372ff4c77c1b3fb3e596e77585ad28",   "balance": 19364400,   "last_activity": 1746725897,   "status": "active",   "interfaces": [     "nft_sale_getgems_v3"   ],   "get_methods": [     "get_sale_data"   ],   "is_wallet": false } (reply to 304393)

гриба: О, спасибо! (reply to 304395)

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

гриба: А сколько уходит на хранение тг номера (нфт) в год?

User: 0 (reply to 304418)

гриба: с контракта же снимаются деньги за хранение (reply to 304419)

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

Andy: А зачем тон работает с несколькими форматами адресов? Raw, raw downcase и обычным.

&rey: Ну, raw проще формировать в коде, base64 компактнее для QR-кода (+ содержит чексумму + сверять на глаз легче), битовая запись адреса — для контрактов. Про последние два не понял. (reply to 304630)

Оскар: на самом деле тон работает только с raw адресом - 1 байтовый воркчейн и 32 байта хэша  так называемые user-friendly это тоже самое, только закодированные в base64 формат с чек-суммой, чтобы случайно не промахнутся символом, и с дополнительными флагами bounce и testnet, например их используют приложения кошельков для того чтобы понимать в мейннет или тестнет отправляют транзакцию и нужно ли крепить флаг баунса при отправке сообщения  не совсем понимаю при чем тут raw downcase, ибо hex запись не чувствительна к регистру, что не скажешь про base64 (reply to 304630)

Andy: В dton когда получаешь адрес в raw виде отдельно показывает его в downcase

Andrey: Есть *_address__friendly который дает баунсбл или не баунсебл по стандарту (reply to 304633)

Mihail: Привет! Есть дизайнеры стикеров?

Toffee: Привет, коллеги я делаю транзакцию, сама транзакция пишет что ошибки нету но сама фукции ничего не происходит throw_unless(401, equal_slices(sender_address, owner_address)); int withdraw_amount = my_balance - min_tons_for_storage();       throw_unless(402, withdraw_amount > 0);       send_msg(owner_address, withdraw_amount, 0, query_id, null(), 3);       return ();

Toffee: Кто может подсказать в чем ошибка?

Vasilii: наверное нужно   tvm_accept();  добавить (reply to 304637)

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

Combot: Combot выдал(а) предупреждение Vasilii Burykin (1/3) Reason: 1 reports (reply to 304639)

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

Оскар: вся суть в том, что твои вычисления никак не включали газ, затраченный на компьют фазу, отсюда +1 флаг скипал месседж raw_reserve и 128 флаг при отправке как раз таки эту проблему решает (reply to 304676)

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
