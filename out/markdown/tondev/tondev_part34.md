F: тяжко когда комбот не работает

Just1k $BC: В ТонФане еще нельзя пулы данных получать я так понял?

Muhammad: ? (reply to 312629)

Muhammad: Подскажите ребята где и как подать заявку грант вручную?

User: Включите VPN и попробуйте снова зайти на https://grants.ton.org (reply to 312663)

🎐*<@Maxim: builders .ton.org (reply to 312663)

Just1k $BC: Есть специалисты по тонфан или можно кому исходник показать на аудит и получить ошибки и пожелания ? (reply to 312664)

Muhammad: А ты сколько строчек можешь в бесплатном можно столько 🤨 (reply to 312669)

Just1k $BC: Народ, ну что реально нет кто в тон фан разбирается?  У меня идея Торгового Бота в Тг на базе ТонФан свапов со своим Лайт сервером.  Ну помогите пожалуйста кто-нибудь)

Irina: Привет! Планируем это исправить в ближайших релизах :) (reply to 312588)

L30n1d: возможно, из-за того что он не существует (reply to 312629)

🏆: Jetton"ы лучше всего создавать через minter dot ton или как-то иначе? там есть графа описание и аватар, я так понимаю это потом не изменить?

rends_east: Если создаёшь серьезный жеттон, не пользуйся минтером, лучше разберись, как деплоить нормальный жеттон  Там очень плохие деплоятся (reply to 312697)

Michael: Мне тоже интересно стало. Можешь рассказать в чём отличие? (reply to 312698)

rends_east: Жеттоны с минтера плохо эксцесс менеджат, больше газа тратят По крайней мере месяц назад проверял, и всё ещё было так Возьмите контракт ноткоина, например, и задеплойте, он лучше (reply to 312699)

Michael: А, понятно.  Здорово. Спасибо. (reply to 312700)

🏆: ⚠️ The contract does not check the code and data on upgrade message, so it is possible to brick the contract if you send invalid data or code. Therefore you should always check the upgrade in the testnet.  Ноткоиновский upgradable.

🏆: Может лучше тактовский шаблон взять, вдруг они его обновляют?)  Кстати, там ещё ноткоин как-то делал что адрес заканчивается на _NOT и так далее, интересно ещё как такое сделать.

/B4ckSl4sh\: Обновляем (reply to 312704)

/B4ckSl4sh\: https://github.com/ton-community/vanity-contract (reply to 312704)

максим: а это что то с тоном случилось? у меня была копия минтера и уже 2 года работало без проблем, сейчас не подключает кошелек, функции контракта не выводит и тд.  хотя я ничего не трогал, библиотеки обновлял постоянно. минтер вижу тоже не работает, но кошелек подключает хоть там

Tim: Был серьезный апдейт на выходных, возможно с ним связано. Напишите детально сайт, действия, ошибку, может его админы разберутся (reply to 312708)

максим: const endpoint = await getHttpEndpoint({ network: 'mainnet' });         const tonClient = new TonClient({ endpoint }); Я уже нашёл проблему она в endpoint Пробовал три разных, но ни один не работает: ни баланс, ни данные с контракта и т.д. не отображаются.  Хочется просто понять: искать ли другое решение или это исправят? Многие сайты перестали работать из-за этого. Тот же Minter не работает уже третий день, и ещё много других (reply to 312710)

maksim: конкретно у orbs-network уже пару недель проблемы с доступностью, это не связано с самой сетью (reply to 312711)

максим: а какой будет точно работать? (reply to 312712)

максим: на всех endpoint возможных показало ошибку и не выводит

максим: const res = await testClient.callGetMethod(contractAddress, 'getContractOwner', []);     const ownerAddr = res.stack.readAddress().toString();     const raw = Address.parse(ownerAddr).toRawString();   взял код с официального тон сайта протестить, нигде не вывелось  раньше все работало отлично

максим: хотя бы написал тон бы, что знаем про ошибки и делаем че то, а то пол сайтов отвалилось а никто даже ничего не делает

pharaon: кто верифицирует фрагмент?

Андрей: Зачем кому то верифицировать фрагмент? (reply to 312723)

pharaon: мне юз надо купить (reply to 312724)

fruitful-l: Подскажите, как я понимаю у Tolk нет документации? Есть ли у него тематический тг чат?

pharaon: и мне 17

Китикет: ну не положено значит жди 18 (reply to 312731)

Lapis ⁴² ¹⁷: Привет, у меня есть несколько советов как можно улучшить твой код: - Заменить использование requests на aiohttp, она лучше работает с asyncio. - В будущем по мере расширения проекта возможно библиотека aiogram 3 версии будет удобнее чем telegram. - Вынести API ключи и настройки в отдельный конфиг - .env (python-dotenv) или config.toml (toml), так ты не сможешь случайно закоммитить их в открытый доступ. - Ещё я не нашёл где именно в коде у тебя используется SQLite, но по мере масштабирования возможно лучше перейти например на PostgreSQL. - У тебя одновременно используется два API - TonAPI и Toncenter. Выбери какой-то один. - Добавь больше проверок на подозрительность кошелька, которые будут выполняться на стороне бота. Для этого можно использовать tonutils и/или pytoniq. Иначе все функции твоего бота может заменить просто Tonviewer. - Я не нашёл код веб-страницы Mini App в репозитории, это может вызвать недоверие со стороны пользователей. - nest_asyncio в вашем проекте только мешает, его можно убрать. - Если тебе удобно, уведомления о транзакциях китов вынеси в отдельный микросервис. - Добавь больше настраиваимости, добавь мультиязычность.  Я не уверен, но думаю ты использовал во многих местах ChatGPT или подобные инструменты, из-за этого и произошли ошибки. Советую самостоятельно изучать тему, чтобы в будущем такого было меньше. Не думаю, что TON Foundation или другая организация захочет платить грант проекту который не сможет масштабироваться. Если нужна будет помощь с чем-то - можешь написать мне, я помогу как только смогу. Удачи в развитии! (reply to 312629)

Андрей: Так для этого не фрагмент надо верифицировать, а вас фрагменту 😁 А вообще есть split tg (reply to 312725)

F: 1. https://docs.ton.org/v3/documentation/smart-contracts/tolk/language-guide 2. https://github.com/ton-blockchain/tolk-bench 3. https://t.me/tolk_lang/23 (reply to 312727)

fruitful-l: Спасибо! (reply to 312750)

Андрей: Tolk в func компилирует как такт или сразу в фифт ??

Petr: Сразу в фифт

Roj: Привет. всем. А вы знаете контакты тех, кто работает в Whales Corp.?

Vladimir: https://github.com/orgs/tonwhales/people (reply to 312761)

Roj: А это просто их GitHub. Мне надо сообщить «Dan Volkov» лично. (reply to 312762)

Vladimir: Можно найти в Telegram. (reply to 312763)

User: dvlkv — вот его юзернейм (reply to 312763)

Roj: Спасибо тебе, я же такой тупой хах. (reply to 312765)

Roj: @dvlkv здравствуйте, а вы можете просмотреть этот PR?

XT: Через что можно сделать или где арендовать подписку на адрес? Хочу чтобы вызывался вебхук с данными транзакции, когда на мой адрес поступает транзакция в блокчейне  Где выгодней купить/арендовать? Через лайтсервер я такое могу сделать?

User: https://docs.tonconsole.com/tonapi/webhooks-api (reply to 312769)

fruitful-l: Подскажите, как в typescript описать dictionary? Так это выглядит в коде struct Storage {     id: uint32     dih: dict } Следовательно в тс мне надо указать какой-то тип, cell? export type AreaConfig = {     id: number;     dict: ?; };

Nick: type dict = cell?; следовательно это dict?: Cell;

Nick: Но, полагаю, дальше вам нужно будет парсить словарь.

Nick: Для этого есть тип Dictionary<k, v>

fruitful-l: Это видел, спасибо, мне нужен только для конфига (reply to 312774)

fruitful-l: Просто пишу сейчас на tolk и немного запутался из-за отдельного типа dict, вместо cell (reply to 312772)

♠️: Кто-нибудь может подсказать или отметить где было ранее это написано как хостить сайт но домене .ton ?

GD.⸙ꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋ: Домен на фрагменте покупается, там все довольно просто и интуитивно (reply to 312777)

GD.⸙ꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋ: Чем больше букв в домене тем дешевле

♠️: домен то я купил у вопрос про хостинг сайта на нем

GD.⸙ꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋ: С этим не подскажу, только то, что сайт на нем хостить нельзя, домен это с днс и т.д., сайт хостится на хостинге, а для домена регистрируешь днс свои ip и порты и т.д., но я не уверен если тоновский работает так же, не настраивал

♠️: ладно все равно спасибо, мне уже вроде как помогли

— 2025-07-08 —

ISMA&COIN: Всем привет , как можно записаться на ама сессию ?

Егор: Приветствую, можете подсказать где можно получить тестовые usdt в testnet?

User: Тестовых USDT скорее всего нет, да и не очень понятно зачем они вам, если вы тестируете контракт то вам подойдёт любой жетон  p.s. @testgiver_ton_usdt_bot — оказывается есть (reply to 312859)

X1ag: просто создайте свой жеттон и представьте что это usdt. Потом когда на мейннет перейдете поменяете на реальный usdt (reply to 312859)

rends_east: Был вроде гивер тестовых usdt, но по существу User прав (reply to 312860)

Potato: Ответ неверный, подойдет любой жетон с decimal === 6 (reply to 312860)

X1ag: верно подмечено, сир (reply to 312863)

Potato: Если чел задается таким вопросом - это явно новичок в бч и не понимает разницу между обычным токеном и usdt, а лучше свой usdt запилить стащив код контракта обычного

Giovanni: ебать ты душный, это тоже токен (reply to 312865)

Potato: Ну да, я очень душный. Приходил в подобный проект где тестировали на "такой же токен". При валидации входящих транзакций в бд учитывали суммы с кф 0.001 и не могли понять почему (reply to 312866)

X1ag: в данном случае "душность" не минус (reply to 312866)

Александр: @testgiver_ton_usdt_bot он (reply to 312862)

fruitful-l: Только у меня кстати обычный тестгивер сейчас тупит?

Potato: Душность никогда не минус

Denis: Привет 👋  Подскажите, пж, как бороться с рефандами в звездах. Школьники надоели грабить :(

User: Интегрируйте оплату в TONCOIN'ах и ставьте локи на 21 день (reply to 312880)

Alex: Есть бот гивер для тестовых USDT-like жетонов: @testgiver_ton_usdt_bot (reply to 312860)

Daniil: Всем привет Подскажите, есть ли где-то пример на Python, как стринговый boc от tonconnect-ui sendTransaction (вида te6ccgECDwEAAwwAAUWIANAYo3nLTc8bEz8KKF6cXi4Pi9SyQ1Z7p1KDyfGjH2X+D....) преобразовать в tx_hash, который можно использовать в эксплорерах?

🐼 Sild: там "приключение на 20 минут", это делается через честное чтение boc в дерево ячеек и затем подсчета хеша рутовой ячейки  ну т.е. в такой постановке там 300-400 строк кода "в ответе" (reply to 312884)

Daniil: ну может есть какое-то решение от одной из библиотек ТОНа на Python? (reply to 312886)

&rey: pytoniq.begin_parse, и только корневую ячейку надо немножко переписать. В десять строк должно влезть. (reply to 312886)

🐼 Sild: а tonlibjson случае не шарит свое состояние между процессами?

Dmitry: а у него есть состояние? он как будто и между двумя последовательными запросами не особо что-то шарит, сначала обращается за свежими блоками (reply to 312889)

Teers k 🐾: А можно сделать прямой какой-то контракт для обмена nft к ton без посредника?

Teers k 🐾: Существует ли такое?

🐼 Sild: ну у него точно есть общий кеш (если использовать диск, наверно если in-memory - то тоже)  send отправляется на какой-то шедулер https://github.com/ton-blockchain/ton/blob/2054eb165ea5a3e574910fd5f461371916728464/tonlib/tonlib/Client.cpp#L73  а вот как там этот шедулер живет я уже недокопал (reply to 312890)

Andrey: а стандартный контракт nft offer-а не подходит? (reply to 312891)

Teers k 🐾: Не нужен посредник как getgems и оно не берёт комиссию? (reply to 312895)

Dmitry: В кэше там лежат «проверенные» блок/хэш/пруф (последний), при каждом запросе «что-то сделать» либа сначала с этого места и «позднее» проверяет свежие блоки, а потом уже делает запрос. Так что хранить в памяти - это после рестарта несколько минут ждать пока она заново с нуля все проверит, я так после одного раза больше не делаю. Общий дисковая папка - не пробовал сценарий с одновременным доступом с разных процессов, хз. Внутренний шедулер - не курил код, но по поведению выглядит что все запросы ставятся в общую очередь и если неаккуратно запросить результат из разных потоков то можно получить ответ «на запрос соседа» (reply to 312894)

🐼 Sild: там еще либы лежат. ну т.е. много всякой мутной фигни в теории может быть =)  по поводу "общей очереди" - вот не понятно на сколько она общая. Есть ощущение что если из разных процессов дернуть tonlib_client_json_create, и потом на них подергать всякие send, то можно получить с них всех один общий ассерт 0 <= thread_id && static_cast<size_t>(thread_id) (reply to 312898)

Dmitry: На линуксе несколько разных процессов одновременно работали и не жужжали.   Да и зачем бы внутри либы делать какую-то межпроцессную синхронизацию? Во-первых лайтсервера скорее всего разные «попадутся», во вторых ну открыл к нему разные коннекты - нет вроде причин как-то разные процессы «упорядочивать»… (reply to 312899)

Andrey: если вы делаете офер на гетгемсе, то гетгемс, с помощью кнопок на UI-e просто помогает вам задеплоить nft-offer-v1r3 контракт (и когда это происходит гетгемс сам вписывает туда свою стандартную комиссию). Но если вы с друзьями, допустим, решили обменяться нфтишками за тон, то можно самим в теории задеплоить тот же контракт (используя стандартные тоновские библиотеки) и убрать оттуда комиссию. Возможно на гетгемсе такая сделка не будет отображаться (на UI-e), но вы все равно сможете её осуществить между вами и вашим другом (просто посредством блокчейна). Это на сколько я знаю.   Код контракта: https://github.com/getgems-io/nft-contracts/blob/main/packages%2Fcontracts%2Fsources%2Fnft-offer-v1r3.fc (reply to 312896)

Dmitry: А еще один человек мне рассказывал как организовал пул подключений (к разным Лайт серверам) и дергал их одновременно чтобы получить ответ побыстрее. Косяков с либой не было. (reply to 312900)

BIN: Приветствую, не поделитесь быстрой ссылкой на открытие транзакции перевода в тонкипере (и майтонваллет при наличии), а то моя кажись косячная и он не хочет обрабатывать «не могу посчитать комсу».

Alex Strong: Всем привет, друзья!  Подскажите пожалуйста, как правильно создать NFT из анимированного векторного файла в формате TGS (или JSON)? Спасибо.

#: fun onInternalMessage(in: InMessage) {     val msg = lazy AllowedMessageToNftCollection.fromSlice(in.body);      match (msg) {         TransferNotificationForRecipient => {             val innerSlice = msg.forwardPayload;             val innerMsg = lazy AllowedInnerMessage.fromSlice(innerSlice);              match (innerMsg) {                 DeployNft => {                     var storage = lazy NftCollectionStorage.load();                     // assert (in.senderAddress == storage.adminAddress) throw ERROR_NOT_FROM_ADMIN;                      deployNftItem(innerMsg.itemIndex, storage.nftItemCode, innerMsg.attachTonAmount, innerMsg.initParams);                     val message = createMessage({                         bounce: true,                         dest: in.senderAddress,                         value: ton("0.001"),                     });                     message.send(SEND_MODE_REGULAR);                 }                  BatchDeployNfts => {                     return;                 }                  else => { throw 333; },             }         },  здравствуйте, скажите пожалуйста почему после отправки жетона с forwardPayload где содержиться сообщение с оп кодом 1 для минта нфт выводит exit code 65535 почему он не видит его?  https://testnet.tonviewer.com/transaction/7e5ebf9fddf703cba6ded6dfccf841455cca0c1ac404e761218a8a9ff53d2c65

#: я на tolk пишу (reply to 312916)

#: https://testnet.tonviewer.com/transaction/5c9ff70e957bf6570b192436fd3dd24e46fc6d6a65c76c0bea6485e781a1b989  кто -то может сказать пожалуйста почему контракт не видит оп код 0x1

Oleg: Код контракта в студию (reply to 312921)

#: fun onInternalMessage(in: InMessage) {     val msg = lazy AllowedMessageToNftCollection.fromSlice(in.body);      match (msg) {         TransferNotificationForRecipient => {             val queryId = msg.queryId;             val jettonsAmount = msg.jettonAmount;             val jettonSender = msg.transferInitiator;             val forwardPayload = msg.forwardPayload;             val innerMsg = lazy AllowedInnerMessage.fromSlice(forwardPayload);              match (innerMsg) {                 DeployNft => {                     var storage = lazy NftCollectionStorage.load();                     // assert (in.senderAddress == storage.adminAddress) throw ERROR_NOT_FROM_ADMIN;                      deployNftItem(innerMsg.itemIndex, storage.nftItemCode, innerMsg.attachTonAmount, innerMsg.initParams);                     val message = createMessage({                         bounce: true,                         dest: jettonSender,                         value: ton("0.001"),                     });                     message.send(SEND_MODE_REGULAR);                 }                  BatchDeployNfts => {                     return;                 }                  else => { throw 333; },             }         }, (reply to 312922)

Oleg: Из этого куска не видно, где он возвращает -1 и чему равен опкод

#: struct (0x00000001) DeployNft {     queryId: uint64     itemIndex: uint64     attachTonAmount: coins     initParams: Cell<NftItemInitAtDeployment> }  async sendDeployItemViaJetton(provider: ContractProvider, via: Sender,         opts: {             value: bigint;             toAddress: Address;             queryId: number;             fwdAmount: bigint;             jettonAmount: bigint;             payload: {                 to: Address;                 queryId?: number;                 index: number;                 value: bigint;                 itemValue?: bigint;                 content?: Cell;             }         }     ) {         await provider.internal(via, {             value: opts.value,             sendMode: SendMode.PAY_GAS_SEPARATELY,             body: beginCell()                 .storeUint(0x0f8a7ea5, 32)                 .storeUint(opts.queryId, 64)                 .storeCoins(opts.jettonAmount)                 .storeAddress(opts.toAddress)                 .storeAddress(via.address)                 .storeUint(0, 1)                 .storeCoins(opts.fwdAmount)                 .storeBit(1)                 .storeRef(                     beginCell()                         .storeUint(NFTCollection.OPCODES.DEPLOY_NFT, 32)                         .storeUint(opts.queryId ?? 0, 64)                         .storeUint(opts.payload.index, 64)                         .storeCoins(opts.payload.itemValue ?? toNano('0.02'))                         .storeRef(                             beginCell()                                 .storeAddress(opts.payload.to)                                 .storeRef(opts.payload.content ?? Cell.EMPTY),                         )                     .endCell(),                 )             .endCell(),         });     } (reply to 312924)

Oleg: Все еще не видно, где в контракте нфт коллекции возвращается 65535

#: сейчас скину (reply to 312926)

#: type AllowedMessageToNftCollection =     | RequestRoyaltyParams     | ChangeCollectionAdmin     | TransferNotificationForRecipient  type AllowedInnerMessage =      | DeployNft     | BatchDeployNfts  fun onInternalMessage(in: InMessage) {     val msg = lazy AllowedMessageToNftCollection.fromSlice(in.body);      match (msg) {         TransferNotificationForRecipient => {             val queryId = msg.queryId;             val jettonsAmount = msg.jettonAmount;             val jettonSender = msg.transferInitiator;             val forwardPayload = msg.forwardPayload;             val innerMsg = lazy AllowedInnerMessage.fromSlice(forwardPayload);              match (innerMsg) {                 DeployNft => {                     var storage = lazy NftCollectionStorage.load();                     // assert (in.senderAddress == storage.adminAddress) throw ERROR_NOT_FROM_ADMIN;                      deployNftItem(innerMsg.itemIndex, storage.nftItemCode, innerMsg.attachTonAmount, innerMsg.initParams);                     val message = createMessage({                         bounce: true,                         dest: jettonSender,                         value: ton("0.001"),                     });                     message.send(SEND_MODE_REGULAR);                 }                  BatchDeployNfts => {                     return;                 }                  else => { throw 333; },             }         },          RequestRoyaltyParams => { ....         }          ChangeCollectionAdmin => { ....         }          else => {             // ignore empty messages, "wrong opcode" for others             assert (in.body.isEmpty()) throw 0xFFFF         }     } } (reply to 312926)

#: но у меня выходит 333 код (reply to 312926)

Nick: Покажи описание forward payload в структуре и то как ты его упаковывешь. (reply to 312930)

#: await nftCollectionContract.sendDeployItemViaJetton(provider.sender(),          {             value: toNano("0.055"),             toAddress: collectionAddress,             queryId: Math.floor(Date.now() / 1000),             fwdAmount: toNano("0.01"),             jettonAmount: toNano("10"),             payload: {                 to: provider.sender().address as Address,                  queryId: Math.floor(Date.now() / 1000),                 index: rand,                 value: toNano("0.05"),                 itemValue: toNano("0.045"),                 content: encodeMetadataNft(NFTMetadata.nftMetadata[0])             }         }     );      async sendDeployItemViaJetton(provider: ContractProvider, via: Sender,         opts: {             value: bigint;             toAddress: Address;             queryId: number;             fwdAmount: bigint;             jettonAmount: bigint;             payload: {                 to: Address;                 queryId?: number;                 index: number;                 value: bigint;                 itemValue?: bigint;                 content?: Cell;             }         }     ) {         await provider.internal(via, {             value: opts.value,             sendMode: SendMode.PAY_GAS_SEPARATELY,             body: beginCell()                 .storeUint(0x0f8a7ea5, 32)                 .storeUint(opts.queryId, 64)                 .storeCoins(opts.jettonAmount)                 .storeAddress(opts.toAddress)                 .storeAddress(via.address)                 .storeUint(0, 1)                 .storeCoins(opts.fwdAmount)                 .storeBit(1)                 .storeRef(                     beginCell()                         .storeUint(NFTCollection.OPCODES.DEPLOY_NFT, 32)                         .storeUint(opts.queryId ?? 0, 64)                         .storeUint(opts.payload.index, 64)                         .storeCoins(opts.payload.itemValue ?? toNano('0.02'))                         .storeRef(                             beginCell()                                 .storeAddress(opts.payload.to)                                 .storeRef(opts.payload.content ?? Cell.EMPTY),                         )                     .endCell(),                 )             .endCell(),         });     } (reply to 312931)

Combot: Combot выдал(а) предупреждение TOP MONEY (1/3) Reason: 1 reports (reply to 312938)

Nick: Структуры толковской не хватает (reply to 312932)

#: что нужно скинуть? (reply to 312941)

Nick: TransferNotificationForRecipient

#: type ForwardPayloadRemainder = RemainingBitsAndRefs;  struct (0x0f8a7ea5) AskToTransfer {     queryId: uint64     jettonAmount: coins     transferRecipient: address     sendExcessesTo: address     customPayload: cell?     forwardTonAmount: coins     forwardPayload: ForwardPayloadRemainder }  struct (0x7362d09c) TransferNotificationForRecipient {     queryId: uint64     jettonAmount: coins     transferInitiator: address     forwardPayload: ForwardPayloadRemainder } (reply to 312943)

Nick: У тебя там лишний бит от Either

Nick: можно например так вычитать его:  var forwardPayload = msg.forwardPayload.loadBit()   ? msg.forwardPayload.loadRef().beginParse()   : msg.forwardPayload;

Nick: либо изменить описание forwardPayload на forwardPayload: RemainingBitsAndRefs | cell; а при чтении уже делать так:  val innerMsg = match (msg.forwardPayload) {   cell => Inner.fromCell(msg.forwardPayload),   slice => Inner.fromSlice(msg.forwardPayload), };

#: сейчас попробую

#: val innerMsg = lazy AllowedInnerMessage.fromCell(forwardPayload); struct (0x7362d09c) TransferNotificationForRecipient {     queryId: uint64     jettonAmount: coins     transferInitiator: address     forwardPayload: cell } (reply to 312947)

#: указал явно cell и метод fromCell и все сработало. loadBit, loadBits пишет что такого нет. а с match не получается тоже ошибку выдает при билде

Nick: loadBool

#: Спасибо (reply to 312951)

sd: а это официальное? (reply to 312951)

sd: в доке нет ссылки на экстеншен

fruitful-l: Вроде да, по крайней мере на него ссылка в рп толка (reply to 312954)

sd: да в канале на него тоже ссылка, прост в 3 местах по разному называется, а где-то вообще битые ссылки (reply to 312956)

фужерик: подскажите пожалуйста как заливать свой lottie / анимацию на svg из json  >"!PAYLOAD!" echo {^             "requestId": "!REQID!",^             "ownerAddress": "%OWNER%",^             "name": "Heart Locket #%%I",^             "description": "An exclusive Heart Locket with the appearance !MODEL! on a !BACKDROP! background with !SYMBOL! icons.",^             "image": "!IMG_URL!",^             "lottie": "!ANIM_URL!",^             "attributes": [^                 { "trait_type": "Model",   "value": "!MODEL!" },^                 { "trait_type": "Backdrop","value": "!BACKDROP!" },^                 { "trait_type": "Symbol",  "value": "!SYMBOL!" }^             ]^         }  API не принимает поле lottie в JSON-пейлоаде. Ошибка говорит: "must NOT have additional properties" для поля /body/lottie.

фужерик: нашел всего 5 сообщений на эту тему, но ответа не нашёл

фужерик: в тех поддержк предоставили вот такой весёлый скриншот, но он ровным счётом ничего не улучшил

Vladimir: Какое API? (reply to 312959)

фужерик: которое выдаётся при создании коллекции (я не знаю что ответить) (reply to 312962)

Vladimir: Ну ладно, ждите телепатов тогда. (reply to 312963)

фужерик: API GetGems для минтинга NFT Базовый URL: https://api.getgems.io/public-api/minting/ (reply to 312964)

— 2025-07-09 —

Оскар: предполагаю что гетгемс не даёт загрузить в метадату что-либо помимо базового набора (название, описание, картинка, атрибуты), поэтому нужно минтить самому и самому искать где хостить оффчейн метадату (reply to 312965)

фужерик: у меня метадата уже захощена, но я не имею представления как правильно подключить (reply to 312967)

Оскар: программно или визуально (reply to 312968)

Ivan: Всем привет! Подскажите, пожалуйста, в чем ошибка      "transaction": {         "validUntil": 1752030587,         "from": "0⋮..",         "messages": [             {                 "address": "...",                 "amount": 1000000000,                 "payload": "te6ccsEBAgEAVgBUAgGhD4p+pQAAAABobdn3HUgB4sx0T9MKEvTNwetpow3ClCDWnMm8lbZip4PiGDp9CvEALjvT3ehfleFvTG6TaUKvZGFLyuP6+6XrW7hbZQfk5GYCAQAAjwWDzA=="             }         ]     }   def gen_payload(         jetton_master_address: str,         to_address: str,         amount: int,         query_id: int = None,         forward_amount: int = 0,         comment: str = "", ):     query_id = query_id or int(time.time())      body = Cell()     body.bits.write_uint(0xf8a7ea5, 32)     body.bits.write_uint(query_id, 64)     body.bits.write_coins(amount)     body.bits.write_address(Address(to_address))     body.bits.write_address(Address(jetton_master_address))     body.bits.write_coins(forward_amount)      if comment:         comment_cell = Cell()         comment_cell.bits.write_uint(0, 32)         comment_cell.bits.write_bytes(comment.encode("utf-8"))         body.refs.append(comment_cell)     else:         body.refs.append(Cell())      return base64.b64encode(body.to_boc()).decode()  однако, почему-то создается транзакция с TON, а не токеном (в моем случае GRAM)

User: Вы должны слать это на специальный адрес контракта: Jetton-Wallet, сейчас судя по всему у вас там что-то захаржкодено  С учетом того что вы пишите на python, советую посмотреть в сторону библиотеки tonutils, там уже есть все готовые методы и примеры, вам остается их только вызвать   https://github.com/nessshon/tonutils (reply to 312971)

User: Попробуйте поискать токен SCALE в чатах. Я нашел изначальное распределение токенов: https://t.me/dedust_en/46 (reply to 312974)

fruitful-l: Поискал, к сожалению не нашел технической части, но большое спасибо (reply to 312977)

Gl: Правильно ли я понимаю, что минтить NFT может только владелец коллекции, следовательно он всегда должен платить комиссию и никак нельзя сделать так, что бы комиссию платил пользователь?

sd: Не правильно, можно деплоить контракт с любой логикой, хоть селфминт любым юзером (reply to 312995)

web-assist 🧀: Можно переложить на пользователя, есть даже лаунчпад @whale_launchpad_bot Если нужна помощь, можешь написать в лс

Druce: Прошу помощи с трансфером USDT. Кажется я запутался в адресах, что куда отправлять. Результат всегда один - транзакция уходит, но в блокчейне failed. Мануалы противоречивые.  Способ №1  const jettonAmount = BigInt(amount) * 10_000n;  const forwardPayload = beginCell()   .storeUint(0, 32) // 0 — это комментарий   .storeStringTail(ref)   .endCell();  const transferPayload = beginCell()   .storeUint(0xf8a7ea5, 32) // JETTON_TRANSFER_OP_CODE (operation identifier)   .storeUint(0, 64) // Query ID (0 for new transactions)   .storeCoins(jettonAmount) // Amount to transfer (jetton-единицы)   .storeAddress(Address.parse(userAddress)) // Recipient address   .storeAddress(processingWallet.address) // Address to receive excess funds (usually address of sender)   .storeBit(0) // No custom payload   .storeCoins(toNano('0.01')) // Forward fee in nanoTON (for send notify to wallet)   .storeBit(1) // есть forwardPayload   .storeRef(forwardPayload)   .endCell();  const seqno: number = await processingWallet.getSeqno();  const internalMessage = internal({   to: await this.getJettonWalletAddress(processingWallet.address.toString()),   value: toNano('0.05').toString(),   bounce: true,   body: transferPayload, });  const externalMessage = external({   to: processingWallet.address,   init: processingWallet.init,   body: wallet.createTransfer({     seqno: seqno,     secretKey: key.secretKey,     messages: [internalMessage],     sendMode: SendMode.PAY_GAS_SEPARATELY   }), });  const externalMessageCell = beginCell().store(storeMessage(externalMessage)).endCell(); const signedTransaction = externalMessageCell.toBoc(); const hash = externalMessageCell.hash().toString('hex'); console.log('hash:', hash); await this.tonClient.sendFile(signedTransaction);  Способ №2  const jettonAmount = BigInt(amount) * 10_000n;  const forwardPayload = beginCell()   .storeUint(0, 32) // 0 — это комментарий   .storeStringTail(ref)   .endCell();  const transferPayload = beginCell()   .storeUint(0xf8a7ea5, 32) // JETTON_TRANSFER_OP_CODE (operation identifier)   .storeUint(0, 64) // Query ID (0 for new transactions)   .storeCoins(jettonAmount) // Amount to transfer (jetton-единицы)   .storeAddress(Address.parse(userAddress)) // Recipient address   .storeAddress(processingWallet.address) // Address to receive excess funds (usually address of sender)   .storeBit(0) // No custom payload   .storeCoins(toNano('0.01')) // Forward fee in nanoTON (for send notify to wallet)   .storeBit(1) // есть forwardPayload   .storeRef(forwardPayload)   .endCell();  const seqno: number = await processingWallet.getSeqno();  const transfer = processingWallet.createTransfer({   secretKey: key.secretKey,   seqno: seqno,   messages: [     internal({       to: await this.getJettonWalletAddress(userAddress),       value: toNano(0.05).toString(), // комиссия в TON        body: transferPayload,       bounce: true,     })   ],   sendMode: SendMode.PAY_GAS_SEPARATELY });  await processingWallet.send(transfer);

&rey: Больше всего вопросов к jettonAmount. Стоило бы везде считать в неделимых единицах, и только при показе на фронтенде делить на миллион. (reply to 312998)

&rey: Миллион, если что, 1_000_000n. У USDT decimals=6.

Druce: amount - это неделимые центы в проекте. (reply to 312999)

Oleg: Слово "центы" по определению подразумевает делитель 100 (reply to 313001)

Druce: По существу проблемы есть что сказать? (reply to 313002)

Oleg: Уже сказано выше

&rey: Есть хеш транзакции? Есть экзит код? (reply to 313003)

Druce: Проблема в jettonAmount? Вот, пример, в метод приходит 200 центов = 2 USDT. На мой взгляд все корректно уходит в транзакцию. (reply to 313004)

web-assist 🧀: Если нужно помочь - прикрепляй ссылку на fail транзакции или скидывай ее хэш, по скринам выхлоп будет не лучше гадания на кофейной гуще (reply to 313006)

Druce: { "from": "0QCRoV_QZ27LOLhMUNX8zkPKmlkPccA524qcQtgHrp0qagiJ", "to": "0QBMyvdF-P6jLERYMowYNWHKV0g_Ku-ZXnwnyqdRDMbdtPWK", "action": { "type": "jetton:transfer", "amount": "2000000", "sender": "0QCRoV_QZ27LOLhMUNX8zkPKmlkPccA524qcQtgHrp0qagiJ", "destination": "0QBMyvdF-P6jLERYMowYNWHKV0g_Ku-ZXnwnyqdRDMbdtPWK" }, "event": "sent_jetton", "meta": { "symbol": "USDT", "jetton_address": "kQD0GKBM8ZbryVk2aESmzfU6b9b_8era_IkvBSELujFZPsyy", "decimals": 6 }, "source_alias": null, "destination_alias": null, "message": "321", "is_external": false, "is_success": false, "is_swapped": false, "is_aggregated": false, "is_bounced": false, "is_service": false } (reply to 313007)

web-assist 🧀: Ты отправляешь транзакцию от кошелька к кошельку, надо от кошелька к jetton_wallet

&rey: Что-то идёт не так с value интернала. Попробуйте передать value: '0.05'. (reply to 312998)

Druce: Я так и указал в сообщении, что запутался. Подскажи, пожалуйста, каким из 2 способов нужно отправлять? (reply to 313009)

Druce: Подскажи, пожалуйста, каким из 2 способов нужно отправлять? (reply to 313010)

&rey: Первым, но пока проблема не в этом. (reply to 313012)

Druce: Спасибо, сработало! (reply to 313013)

&rey: Теперь к вашему процессингу вопросы. 1. Если сообщение не отправится – .send() просто ничего в блокчейне не сделает – как вы об этом узнаете? (reply to 313014)

&rey: 2. Если 255 пользователей попросят выводы примерно одновременно, сколько вы будете их обрабатывать? 3. Насколько сломается система, когда понадобятся счета с субцентовой точностью?

Druce: 1. Не очень понял вопрос. Если send вызовет ошибку, то мы ее поймаем, если ошибки нет, то в БЧ транзакция ушла, верно? 2. В БД складываем реквесты на вывод, по тику каждые 10 секунд берем необработанные, исполняем по очереди, помечаем что транзакции отправлены. Процессинг слушает наш кошелек и при исходящей транзакции, если она успешна, помечает реквест как полностью исполненный (через uuid в payload) и записывает хеш. По крайней мере год все работает стабильно на TON, сейчас переходим на USDT и пробуем реализовать аналогичное решение. 3. Не понадобятся.  Буду рад критике/советам. (reply to 313015)

&rey: Да надейтесь. Из мемпула транзакция может просто потеряться. (reply to 313017)

&rey: 2. Есть специализированные кошельки, которые по 255 выводов за раз могут сделать. (А если надо больше, то просто берите несколько таких). preprocessed-v2 от pyAndr3w. (reply to 313017)

&rey: И они дешевле по своим комиссиям, что самое главное.

Druce: Они сложнее, как мне показалось. Т.к. нет гарантии, что весь батч целиком исполнится. На BSC когда сидели, все проще было, TON какой-то сложный и в целом не понимаю, о каком масс адопшене вещает TON Foundation, если документации нормальной нет. Все нужно додумывать/допиливать самому. Неужели нельзя выпустить полноценные решения для базовых фичей с их БЧ. (reply to 313019)

&rey: Только если у вас закончились тоны или, собственно, те самые жетоны. (reply to 313021)

&rey: Если всё это отправилось с кошелька процессинга, то по блокчейну гарантированно доставится.

Druce: Когда я искал решение своей проблемы в этом чате, там, в том числе, обсуждалась проблема батчей, что гарантий нет и нужно потом валидировать как-то что успешно, а что нет. (reply to 313022)

Druce: Вот (reply to 300924)

&rey: Разве? Даже если форвард нулевой, а жетонов всегда достаточно? (reply to 300924)

&rey: А, тот пользователь уже не здесь... не, могут быть случаи вроде "в середине переводов шард упал на пару тысяч лет, и накопился такой storage fee, что жетон-кошелёк замёрз", но это аварийные варианты.

Po: Привет , подскажите в чем разница будет если я создам кош с местерчейн (-1) или, если создам бейзчейн ? У них по разному поступление в блоки идет , или скорость разная может ? (reply to 313026)

&rey: В тысячу* раз больше комиссии будут. (reply to 313029)

zyin: Всем привет, с кем можно проконсультироваться по dapps (хочу пэт сделать не понимаю с чего начать)

User: docs.ton.org открываете и смотрите какие действия вы можете произвести в блокчейне, после на основе этих данных придумаете как это соединить с условным UI и дело в шляпе, идея есть, дальше остается только реализация (reply to 313034)

zyin: Это не конкретно по тону

zyin: Хочу к примеру по эфиру солане

User: Не тот чат, тут только TON (reply to 313038)

Henry: Всем привет. Что делать если увели баланс с TON?

Oleg: ПЭТ делается из этиленгликоля и терефталевой кислоты методом конденсации (reply to 313034)

User: Ничего, к сожалению транзакции не обратимы. Но на вашем месте я бы создал новый кошелёк на новом устройстве, чтоб снизить вероятность повторной кражи (reply to 313044)

Henry: ((( очень печально .. а как можно наказать или к кому-то обратится? (reply to 313046)

Дмитрий: Если кому-то нужно сделать простое телеграм-приложение за символическую плату — сейчас у меня есть свободное время и я готов взяться за работу. Оплата — только после выполнения проекта. Свободен ближайшие два дня. Также рассматриваю более сложные задачи, но смогу приступить к ним только через неделю.

Егор: Приветствую товарищи, подскажите пожалуйста, есть ли какие то готовые решения смарт контрактов для продажи своего жетона за usdt и что бы полученные usdt перечислялись на другой кошелек?

User: https://t.me/tondev/311571  Вот тут есть вся информация. Деплоите контракт, прикручиваете UI и свапалка работает (reply to 313050)

Daniil: Всем привет Подскажите, есть ли способ конвертации Telegram Stars в TON? Какие-то API для этого и документация?

Vladimir: Если из бота или канала: только официальный способ, через фрагмент. (reply to 313056)

Daniil: Хорошо  У них есть апи для этого? (reply to 313058)

Vladimir: Нет. (reply to 313059)

Андрей: Можно обратиться к разработчикам split tg, они прекрасно разбираются в этом  Если есть на что то реальный спрос, то они это сделают (reply to 313059)

— 2025-07-10 —

фужерик: вопрос по тг бизне конектам, можно ли сделать скрипт, чтобы при подключении бот рассылал всем чатам определённое сообщение и удалял его у себя если есть уже подобный код буду не против посмотреть

Vladimir: Чат русскоязычного сообщества разработчиков на TON. (reply to 313063)

фужерик: ок (reply to 313067)

Potato: Ребята пытаюсь в смарт-контракте поймать jetton notify и дальше отработать по сценарию Зачастую для notify отправляется 1 нанотон. Из-за этого мой контракт просто не отрабатывает, даже если у него на балансе есть деньги. Как мне заставить его работать?

sd: Предлагать юзеру сообщение в котором прикреплять больше 1 нанотон (reply to 313072)

Potato: Это я понимаю, есть ли способ сделать это с 1 нанотон? Предполагается что пользователь должен взаимодействовать с контрактом только по адресу (открыл кошелек и отправил трансфер токенов) (reply to 313073)

Оскар: нет, кошельки не дают возможности изменить forward amount (по-крайней мере те, что для широкой аудитории) поэтому нужно делать свою морду (reply to 313074)

Максим: Всем привет! Подскажите плз, где почитать о том, как создавать токен на Ton?

Vladimir: https://minter.ton.org/ https://docs.ton.org/ru/v3/guidelines/dapps/tutorials/mint-your-first-token (reply to 313078)

фужерик: гайс, у кого есть готовый скрипт или смарт контракты на создание коллекции и минта нфт в ней, можете дать посмотреть я чото уже зациклился на ошибках тайпскрипта

Максим: Кто в курсе, сколько щас комиссия за деплой токена ?

Максим: Разве нет ещё актуальны? (reply to 313081)

Denis: Центов 10? (reply to 313082)

фужерик: ? (reply to 313084)

Victor: Привет! Можете подсказать, какие сервисы существуют для массовой рассылки токенов в TON? Также буду признателен за ссылки на соответствующие репозитории.

Eugene: Длинный текст о массовой рассылке токенов, где в конце есть ссылки на проекты: blog.ton.org/history-of-mass-minting-on-ton  (правда, текст ещё декабрьский, что-то могло измениться) (reply to 313089)

Victor: спасибо (reply to 313094)

fruitful-l: Добрый день, подскажите, пожалуйста из-за чего может не видеть match, выплевывает 0xFFFF async sendVoult(         provider: ContractProvider,          via: Sender,          opts: {             value: bigint,               queryId: number,              workchain: number})              {         await provider.internal(via, {             value: opts.value,             sendMode: SendMode.PAY_GAS_SEPARATELY,             body: beginCell().storeUint(0x012, 32).storeUint(opts.queryId, 32).storeRef(beginCell().storeUint(0xABCD, 32).storeUint(0, 8).endCell()).endCell(),         })     } Вот match в коде контракта match(msg) {         DeployVault => {             var storage = lazy FactoryStorage.load();             assert(storage.owner == in.senderAddress) throw ERR_NOT_FROM_ADMIN;                          val deployVault = createMessage({                 bounce: true,                 dest: calcVaultAddress(contract.getAddress(), msg.asset , storage.vaultCode),                 value: ton("0.05"),                 body: beginCell().endCell(),             });             deployVault.send(SEND_MODE_PAY_FEES_SEPARATELY);          }          else => {             assert(in.body.isEmpty()) throw 0xFFFF;         }     }

Yury: 🚀 Собираю команду в проект — это Web3-платформа краудфандинга внутри Telegram с автоматическими выплатами и защитой от фрода. Ищу тех, кто шарит в: Смарт-контрактах TON (Tact / Blueprint) Backend (NestJS, PostgreSQL) Frontend (Next.js) Если интересно — пишите в личку👇

Potato: slice_empty? Вернет 1 если пусто?

User: В func, true -1, false 0  Вернет -1, минус один (reply to 313103)

Potato: Точняк, благодарю (reply to 313104)

fruitful-l: В любом случае тело сообщения в обертке не пустое body: beginCell().storeUint(0x012, 32).storeUint(opts.queryId, 32).storeRef(beginCell().storeUint(0, 8).endCell()).endCell() (reply to 313103)

fruitful-l: Я не понимаю почему оно не попадает под DeployVault struct(0x7a312) DeployVault {     queryId: uint32     asset: Asset }

Potato: Мне нужно проверить есть ли  forward_payload jetton_transfer

Potato: А чем custom_payload Отличается от forward_payload

maksim: forward отправляется в нотификейшене жеттона потом, custom - часть стандарта для изменения семантики трансферов и апдейта протокола (reply to 313110)

Potato: т.е. forward без изменений прокидывается в нотификацию? а он там будет просто как msg_body?

maksim: не, с доп данными про перевод, amount, от кого кому и тд, можно в стандарте посмотреть

Potato: Да, я задал вопрос и потом только понял что там же еще есть amount и адрес

fruitful-l: Может кто-то подсказать почему может не мэтчить оп-код сообщения? (reply to 313108)

Potato: if (op == op::transfer_notification()) {         int amount = in_msg_body~load_coins();         slice sender = in_msg_body~load_msg_addr();         int has_ref = in_msg_body~slice_bits();          if (has_ref >= 1) {             // ...         }  Могу ли так обработать?

Potato: Если опкод отличается или упаковывается не там, где должен быть (reply to 313115)

fruitful-l: Но по коду вроде видно что он совпадает (reply to 313118)

Potato: обычно query_id 64

Potato: Контракт 32 ждет?

fruitful-l: Да (reply to 313108)

User: Можно узнать откуда вы взяли вот эту схемку? (reply to 313108)

Potato: Нижнее сообщение не видел, но что-то тут не совпадает вроде)

fruitful-l: Не совсем понял, что именно? (reply to 313125)

fruitful-l: struct Native {     worckchain: int8 }  struct Jetton {     worckchain: int8     address: uint256 }  type Asset = Jetton | Native   struct(0x7a312) DeployVault {     queryId: uint32     asset: Asset }

fruitful-l: Сейчас менял только, думал, что в 0x012 проблема (reply to 313126)

fruitful-l: Вообще опкоды одинаковые

&rey: Точно не 0x0007a312? (reply to 313108)

fruitful-l: Опкод сообщения struct(0x7a312) DeployVault {     queryId: uint32     asset: Asset } Обертка await provider.internal(via, {             value: opts.value,             sendMode: SendMode.PAY_GAS_SEPARATELY,             body: beginCell().storeUint(0x7a312, 32).storeUint(opts.queryId, 32).storeRef(beginCell().storeUint(0, 8).endCell()).endCell(),         }) (reply to 313131)

&rey: Значит, действительно 0x0007a312. Вы задали 20-битный опкод. (reply to 313132)

&rey: Нули значащие, да. Значащие, чтобы можно было сделать селектор хоть 4 бита, хоть 8, хоть 32.

fruitful-l: Спасибо! Теперь ясно почему  не  принимало (reply to 313134)

&rey: Кстати, а бывает struct(0b01)? У меня толка под рукой нет, проверить не могу.

maksim: бинарный префикс можно да (reply to 313136)

fruitful-l: А я пошел проверять :( (reply to 313137)

/B4ckSl4sh\: @subden Были ли реализованы sse в тонапи с гарантией доставки? сейчас зашёл на tonconsole и что-то не вижу упоминаний

.: Здравствуйте, подскажите пожалуйста как получить все транзакции всего блокчейна?

Андрей: Сегодня Смотря в каком формате 😁 (reply to 313148)

Denis: да. для транзакций уже работает (reply to 313146)

.: В смысле сегодня? (reply to 313149)

/B4ckSl4sh\: https://docs.tonconsole.com/tonapi/streaming-api#real-time-notifications-about-finalized-transactions  Вот этот, да? (reply to 313150)

Denis: не. это старое без гарантий. https://rt.tonapi.io/sse/transactions?account= - вот с гарантией (и чарджам за доставку) (reply to 313152)

🐼 Sild: https://t.me/tondev/312037 (reply to 313151)

Tim: А какое у этого юзкейс вообще крупный? Мне всегда если надо было слушать адреса, то надо было слушать очень много. Через такие штуки много не послушать (reply to 313153)

Tim: Вот что было бы удобно это какой то аналог логов эфира Там можно указать диапазон блоков до 5000 штук вроде И ивент который хочешь получить В ответ получаешь список с пагинацией, в котором все нужные тебе вещи.

Denis: На самом деле самый очевидный - слушать один-два депозитных адреса

Tim: Ну если я могу сделать депозитный адрес, зачем мне тонапи… (reply to 313159)

Denis: Это мы делаем в вебхуках (reply to 313158)

Denis: Причём без ограничение на количество адресов. Можно например слушать все интернал жетон трансферы

— 2025-07-11 —

#: import { Address, beginCell, Cell, toNano } from '@ton/core'; import { TelemintCollectionContract, RoyaltyParameters, NewNftItem, SignatureParams, NftCollectionConfig } from '../wrappers/TelemintCollectionContract'; import { compile, NetworkProvider } from '@ton/blueprint'; import { NFTMetadata } from '../utils/constants';  export async function run(provider: NetworkProvider) {     const encodeRoyaltyParams = (params: { royaltyFactor: number, royaltyBase: number, royaltyAddress: Address}): Cell => {         return beginCell()             .storeUint(params.royaltyFactor, 16)             .storeUint(params.royaltyBase, 16)             .storeAddress(params.royaltyAddress)         .endCell()     }     const royaltyParams = {         royaltyFactor: 3,          royaltyBase: 100,         royaltyAddress: Address.parse("0QCsMm47egxSofgw5Y-l34ZeMw6vPYUUyTIjYT3HTafpmH9O")         // royaltyAddress: provider.sender().address as Address     }      const royaltyParamsCell = encodeRoyaltyParams(royaltyParams);      const commonContent2 = beginCell()         .storeStringTail("")     .endCell()      const commonContent1 = beginCell()         .storeUint(1, 8)         .storeStringTail(NFTMetadata.collectionMetadata)     .endCell()      const collectionContent = beginCell()         .storeUint(1, 8)         .storeRef(commonContent1)         .storeRef(commonContent2)     .endCell()      const publicKeyHex = '7beaee0e19ece16cba685f46679f6f85418c82eeada5ef52b54673a165c84067';     const publicKeyBuffer = Buffer.from(publicKeyHex.padStart(64, '0'), 'hex');      const config: NftCollectionConfig = {         public_key: publicKeyBuffer,         subwallet_id: 1,          content: collectionContent,         full_domain: 'telegram.org',         item_code: await compile('TelemintItemContract'),         royalty: royaltyParamsCell,     };      const telemintCollectionContract = provider.open(         TelemintCollectionContract.createFromConfig(config, await compile('TelemintCollectionContract'), 0)     );      try {         await telemintCollectionContract.sendDeploy(provider.sender(), toNano('0.05'));         console.log('Deploy transaction sent');     } catch (error) {         console.error('Failed to send deploy transaction:', error);         return;     }      try {         await provider.waitForDeploy(telemintCollectionContract.address);         console.log('Telemint Collection deployed at:', telemintCollectionContract.address.toString());     } catch (error) {         console.error('Deployment failed:', error);         return;     }      try {         const collectionData = await telemintCollectionContract.getCollectionData();         console.log('Collection Data:', {             nextItemIndex: collectionData.nextItemIndex,             collectionContent: collectionData.collectionContent.toString(),             owner: collectionData.owner?.toString() || 'None',         });     } catch (error) {         console.error('Failed to fetch collection data:', error);     } }  здравствуйте, хочу задеплоить telelmint коллекцию и при запуске выдает ошибку LITE_SERVER_UNKNOWN: cannot apply external message to current state : Failed to unpack account state  пытаюсь написать скрипт по этому wrapper https://github.com/ton-blockchain/tolk-bench/blob/master/wrappers/07_telemint/NftCollection.ts  в чем может быть ошибка?

fruitful-l: В этом же репо и сам скрипт есть (reply to 313191)

fruitful-l: Ошибся, нет ( (reply to 313193)

#: кто то может сказать пожалуйста, почему у нфт не отображается метаданные как и у коллекции? https://testnet.tonviewer.com/kQCwB2v3w9irW6fg30cVlb_okxL_mInfZK2OecMxtZrwCtqU?section=method

Potato: Криво упакованы значит (reply to 313214)

Potato: Попробуй достать individual content у коллекции и гем метод у item дернуть

Potato: распарсишь и поймешь что не так

EnCryptoknight ⚔️: I'm In the wrong chat group bye have fun

Denis: да. 100% криво упакована мета. но что именно не так не скажу (reply to 313214)

#: я там поменял кое что и контент коллекции отображается а нфт метадата нет. https://testnet.tonviewer.com/kQChd9qdGZo4jl82JWMY2qKDZt9B06TnPLbyhm7NmnhjqoHY (reply to 313221)

#: и почему то там в названии нфт пишется название коллекции

fruitful-l: У тебя он чейн метадата? (reply to 313222)

#: нет (reply to 313224)

#: я расшифровал эти ячейки b5ee.. и получил правильные ссылки на метадату

#: но они не работают

fruitful-l: Упакована все равно не так может быть, гет метод ее нормально возвращает?

#: init: true index: "87822417617108981264452845638519152079785823239225807973305406477026735862554" collection_address: "0:52a69b11757501b32db2a18992ff6e49eba95be75a253f85521622a31847f7ac" owner_address: "0:ac326e3b7a0c52a1f830e58fa5df865e330eaf3d8514c93223613dc74da7e998" individual_content: "b5ee9c720101040100710002014001020102010300180a746573742d6e66742d320000b068747470733a2f2f736f6674776172656d61657374726f31362e6769746875622e696f2f6e66745f636f6c6c656374696f6e2f666f6c6465725f666f725f6d696e746f72792f6e66745f65785f6d6574615f312e6a736f6e" (reply to 313228)

⛰️ Roman ⛰️: У тебя же ссылка на JSON в метадате? (reply to 313230)

#: да (reply to 313231)

⛰️ Roman ⛰️: Ты её собрал по TEP? Первая часть - у коллекции, вторая - у NFT item

#: да. я для обычной коллекции это применял и работает. с teleitem не работает (reply to 313233)

⛰️ Roman ⛰️: Тогда соглашусь с пользователями сверху, что то не так упаковано

fruitful-l: Там разве не должно быть еще одного бита в начале? (reply to 313234)

Relog: Hi! I’d like to verify our Jetton “AWEWE Token” that already has metadata and revoked admin. What’s the current process for TonAPI / Tonkeeper verification?

fruitful-l: А может и наоборот там что-то лишнее (reply to 313236)

fruitful-l: https://github.com/ton-blockchain/TIPs/issues/62 Здесь все в общем есть

#: if(content.type == 'offchain') {         return beginCell()             .storeUint(1, 8)             .storeStringRefTail(content.uri)         .endCell()     }  у меня сюда проходит метадата нфт коллекции и нфт. нфт коллекция отображает контент а нфт нет (reply to 313236)

Черметчик: Добрый вечер

fruitful-l: Так у тебя же не в одной ячейке метадата? (reply to 313244)

#: if (content.type === 'offchain') {         if (content.kind === 'nft') {             return beginCell()                  .storeStringRefTail(content.uri)             .endCell();         } else { // collection metadata             return beginCell()                 .storeUint(1, 8 )                 .storeStringRefTail(content.uri)              .endCell();         }     }   почему метадата коллекции загружается, а нфт нет? (reply to 313247)

fruitful-l: Это та же коллекция, которую ты скидывал до этого? Если да, то и там вроде коллекция не загружается (reply to 313251)

#: https://app.tonkeeper.com/dapp/https%3A%2F%2Ftestnet%2Etonviewer%2Ecom%2FkQDGTt40MYEzxaqZs6xGMk5%2DvokBgbFGgkd16kQXtFA1%5FZMn (reply to 313254)

#: Коллекция загружается

#: Нфт не загружается

fruitful-l: Какие get методы у коллекции? (reply to 313255)

#: get_collection_data (reply to 313260)

Андрей: Мне кажется, если кинуть код гет методов контракта, то гораздо быстрее помогут а так перебор всех возможных вариантов

fruitful-l: Сайты просто смотрят на то, что возвращает get метод, это и есть метадата которую они используют (reply to 313261)

fruitful-l: Нужно добавить get_nft_content - он отвечает за отдельные элементы

fruitful-l: А collection_data как раз за коллекцию, только он у тебя есть, следовательно только коллекция нормально и отображается

#: get_nft_content  get_nft_address_by_index (reply to 313262)

Андрей: Это названия функций а не их код (reply to 313266)

#: Он есть щас посмотрю (reply to 313264)

#: get fun get_collection_data(): CollectionDataReply {     val storage = lazy CollectionStorage.load();      return {         nextItemIndex: -1,         collectionMetadata: storage.content,         ownerAddress: createAddressNone(),     } }  get fun get_nft_address_by_index(index: int): address {     val storage = lazy CollectionStorage.load();     val teleitemDeployed = calcDeployedTeleItem(index, contract.getAddress(), storage.nftItemCode);     return address.fromValidBuilder(teleitemDeployed.buildAddress()); }  get fun get_nft_content(index: int, individualNftContent: cell): cell {     return individualNftContent; } (reply to 313262)

Андрей: Вот, в get_nft_content надо также общую ссылку (reply to 313269)

#: не понял (reply to 313270)

Андрей: Ну тут только одна часть, как ранее говорили в чате (reply to 313233)

#: import { Dictionary, toNano } from 'ton-core'; import { WalletId, WalletV5 } from '../wrappers/wallet-v5'; import { compile, NetworkProvider } from '@ton/blueprint'; import { LibraryDeployer } from '../wrappers/library-deployer'; import { getSecureRandomBytes, keyPairFromSeed } from 'ton-crypto';  /*     DOESN'T WORK WITH TONKEEPER. CHOOSE DEPLOY WITH MNEMONIC  */ export async function run(provider: NetworkProvider) {     const keypair = keyPairFromSeed(await getSecureRandomBytes(32));     console.log('KEYPAIR PUBKEY', keypair.publicKey.toString('hex'));     console.log('KEYPAIR PRIVATE_KEY', keypair.secretKey.toString('hex'));      const walletV5 = provider.open(         WalletV5.createFromConfig(             {                 signatureAllowed: true,                 seqno: 0,                 walletId: new WalletId({ networkGlobalId: -3 }).serialized, // testnet                 publicKey: keypair.publicKey,                 extensions: Dictionary.empty() as any             },             LibraryDeployer.exportLibCode(await compile('wallet_v5'))         )     );      await walletV5.sendDeploy(provider.sender(), toNano('0.1'));      await provider.waitForDeploy(walletV5.address);      console.log('WALLET ADDRESS', walletV5.address); } хочу задеплоить w5 кошелек. можно ли получить сид фразу?   подскажите пожалуйста что значит https://testnet.tonviewer.com/transaction/5a2f936d48c72246f77c807e14245fb73a012f8f26b760cc574be1572dedc4fd когда я пытался деплоить w5 контракт кошелька

X1ag: недостаточно ячеек. Cell underflow. Контракт хочет прочитать больше, чем ему дали (reply to 313283)

&rey: из ключей нельзя, потому что секретный ключ, по сути, хеш (reply to 313283)

&rey: каноничные библиотеки — @ton/core и @ton/crypto (reply to 313283)

#: скажите а как нужно добавить в контракт кошелька чтобы он регировал на оп код какой-то в internal message ? и можно ли такое? (reply to 313287)

#: () recv_internal(cell in_msg_full, slice in_msg_body) impure inline {   if (in_msg_body.slice_bits() < size::message_operation_prefix) {     return (); ;; just receive Toncoins   }    slice cs = in_msg_full.begin_parse();   int flags = cs~load_uint(4);   slice sender_address = cs~load_msg_addr();    int op = in_msg_body.preload_uint(size::message_operation_prefix);   if ((op != prefix::extension_action) & (op != prefix::signed_internal)) {     return (); ;; just receive Toncoins   }     ;; bounced messages has 0xffffffff prefix and skipped by op check    if (op == prefix::extension_action) {     in_msg_body~skip_bits(size::message_operation_prefix);      slice in_msg_full_slice = in_msg_full.begin_parse();     in_msg_full_slice~skip_bits(size::message_flags);     ;; Authenticate extension by its address.     (int sender_address_wc, int sender_address_hash) = parse_std_addr(in_msg_full_slice~load_msg_addr());     (int my_address_wc, _) = parse_std_addr(my_address());      if (my_address_wc != sender_address_wc) {       return ();     }      cell extensions = get_data().begin_parse()       .skip_bits(size::bool + size::seqno + size::wallet_id + size::public_key)       .preload_dict();      ;; Note that some random contract may have deposited funds with this prefix,     ;; so we accept the funds silently instead of throwing an error (wallet v4 does the same).     (_, int extension_found) = extensions.udict_get?(size::address_hash_size, sender_address_hash);     ifnot (extension_found) {       return ();     }      in_msg_body~skip_bits(size::query_id); ;; skip query_id      process_actions(in_msg_body, false, true);     return ();     }    ;; Before signature checking we handle errors silently (return), after signature checking we throw exceptions.    ;; Check to make sure that there are enough bits for reading before signature check   if (in_msg_body.slice_bits() < size::message_operation_prefix + size::wallet_id + size::valid_until + size::seqno + size::signature) {     return ();   }   process_signed_request(in_msg_body, false); }  где тут можно прописать логику чтобы он реагировал на оп код? (reply to 313289)

fruitful-l: Подскажите, раньше хранил метадату он-чейн в виде словаря, сейчас хочу попробовать задеплоить с офф-чейн датой, но запутался в префиксах. Где ошибка в таком сборе контента? export function contentToCell(content: string): Cell {     return beginCell().storeUint(0x01, 8).storeStringRefTail(content).endCell(); } content - ссылка на json

#: попробуйте storeStringTail или уберите storeUint(0x01, 8) (reply to 313291)

fruitful-l: Просто еще одно условие? if (op == something) (reply to 313290)

#: пробовал оно не реагирует (reply to 313293)

fruitful-l: Тогда что-то не так было, другого способа нормально читать опкод вроде нет (reply to 313294)

&rey: вот это тоже надо обновить, если что (reply to 313290)

&rey: Только есть же кошелёк, который поддерживает плагины внутри, зачем велосипед писать?

#: не разбираюсь в контракте кошелька, поэтому интересуюсь что да как (reply to 313297)

fruitful-l: Нет, так даже интерфейс nft_collection не распознает (reply to 313292)

&rey: (0x00, 8) же (reply to 313291)

#: const commonContent2 = beginCell()         .storeStringTail("")     .endCell()      const commonContent1 = beginCell()         .storeUint(1, 8)         .storeStringTail(NFTMetadata.collectionMetadata)     .endCell()      const collectionContent = beginCell()         .storeUint(1, 8)         .storeRef(commonContent1)         .storeRef(commonContent2)     .endCell() это для коллекции (reply to 313299)

fruitful-l: Разве это не для on-chain? https://github.com/ton-blockchain/TEPs/blob/master/text/0064-token-data-standard.md#content-representation (reply to 313300)

#: export function contentToCell(content: string): Cell {     return beginCell().storeStringTail(content).endCell(); } для нфт

#: для обычной коллекций у меня все загружается

&rey: А, может быть. Ну а геттер что возвращает, если посмотреть в тонвьювере? (reply to 313302)

#: а вы не знаете есть ли репозиторий где есть кошелек с плагином и скрипты написанные? (reply to 313297)

fruitful-l: Прямо hex кинуть? (reply to 313305)

&rey: Собственно, я и писал такой кошелёк. https://github.com/ProgramCrafter/wallet-contract/blob/main/func/wallet.fc  То было во времена v4, и надо было плагинам дать доступ к жетонам... (reply to 313306)

fruitful-l: "b5ee9c720101010100570000aa68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f667275697466756c316c2f6d657461646174612f726566732f68656164732f6d61696e2f636f6c6c656374696f6e2e6a736f6e" (reply to 313307)

&rey: Правда, там v5 от тонкипера пришёл, и в итоге плагина лимитных ордеров прямо на кошельке нет. (reply to 313308)

&rey: Ну, ваш геттер благополучно не вернул никакого тега 0x01, сразу ссылку. (reply to 313309)

fruitful-l: Учитывая, что в скрипте я просто передаю этот Cell, круг поиска сужается до того, как его обрабатывает сам контракт? (reply to 313311)

fruitful-l: Изменил структуру, теперь возвращает вроде с 1, но метадаты нет "b5ee9c7201010201005b000102010100aa68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f667275697466756c316c2f6d657461646174612f726566732f68656164732f6d61696e2f636f6c6c656374696f6e2e6a736f6e" (reply to 313311)

&rey: э... а почему ссылка оказалась по ссылке?  <Slice 8[01] -> 1 refs> . . <Cell 680[68747470733A2F...] -> 0 refs> (reply to 313313)

fruitful-l: я всё еще экспериментирую с тем, как tolk превращает cell в структуры..(  сейчас попробую исправить (reply to 313314)

fruitful-l: Оно должно выглядеть так?  "b5ee9c720101010100580000ac0168747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f667275697466756c316c2f6d657461646174612f726566732f68656164732f6d61696e2f636f6c6c656374696f6e2e6a736f6e" (reply to 313314)

fruitful-l: вроде без лишних ссылок

fruitful-l: жаль, что метадаты все равно нет

Яков: Здравствуйте!   Хотел бы предложить усовершенствовать функционал передачи NFT и подарков в Ton Space/Wallet. Сейчас при попытке отправить NFT или подарок самому себе (на свой Telegram-аккаунт, к которому привязан кошелек), операция невозможна ― система блокирует отправку или не активирует кнопку. В результате пользователь не может оформить подарок самому себе так, чтобы он появился в разделе "Подарки" Telegram Wallet.   Предлагаю:   Добавить функцию, позволяющую отправлять NFT и подарки со своего кошелька Ton Space на свой же Telegram-профиль так, чтобы такие подарки корректно отображались в разделе "Подарки". Это актуально, например, чтобы пользователь мог красиво оформить личный дроп, перевести по реферальной NFT или просто сделать себе подарок "официально" внутри экосистемы Wallet.   Это улучшит user experience, добавит гибкости для пользователей и расширит сценарии использования подарков и NFT в рамках одной учетной записи.   Спасибо за внимание к обратной связи!   ---     Hello!   I would like to suggest an improvement for the NFT and gift transfer functionality in Ton Space / Wallet. Currently, it is not possible to send an NFT or gift to yourself (your own Telegram account linked to the wallet) ― the system blocks this action or the confirm button stays inactive. As a result, a user cannot “gift” himself an item in such a way that it appears in the "Gifts" section of the Telegram Wallet.   My proposal:   Please consider adding a feature that allows users to transfer NFTs and gifts from their Ton Space wallet to their own Telegram profile so that these gifts show up correctly in the "Gifts" section. This would be useful for users who want to create a personal drop, transfer a referral NFT, or simply make an “official” gift to themselves within the Wallet ecosystem.   Such an enhancement would improve the user experience, add more flexibility, and broaden the use cases for both gifts and NFTs within a single account.   Thank you for your attention to this suggestion!

Just1k $BC: Пришли документацию полную по подаркам как с ними в коде работать

User: Если на python — telethon, если на js/ts берите библиотеку gram.js и компилируйте под новый layer, который можно получить в репозитории tdesktop, десктоп клиента телеграмма (reply to 313324)

User: https://t.me/wallet_news_chat  Вам лучше прислать эту идею напрямую в чат wallet (reply to 313323)

— 2025-07-12 —

Combot: Combot выдал(а) предупреждение depressed (1/3) Reason: 1 reports (reply to 313327)

⛰️ Roman ⛰️: Это немного не так. Что бы хранить оффчейн сам контракт должен возвращать сначала возвращать тег store_uint(1, 8), далее первую часть ссылки, а потом вторую. Части ссылок - это только Ref с текстом, в самих Ref никаких тегов не нужно (reply to 313291)

&rey: А это не проблема индексера, кстати? Я вот не помню, чтобы надо было полностью забивать ячейку текстом, или даже чтобы хоть один символ был до ссылки. (reply to 313332)

⛰️ Roman ⛰️: это мой контракт, который я взял с гитхаба getgems. Там самому старому контракту NFT уже 3 года, он точно так же отправляет (reply to 313333)

fruitful-l: Не совсем понимаю смысл, ибо у меня не отображалась именно коллекция, данные для которой берутся из get_collection_data. (reply to 313332)

&rey: Ну, это же не к этому чату вопрос, а к каждому конкретному индексеру? (reply to 313338)

fruitful-l: Я починил кстати в итоге, очень странно починил, поменял местами некоторые поля в самой метадате и она начала отображаться (🤷‍♂️) (reply to 313341)

fruitful-l: Так же не совсем понимаю зачем для хранения самой nft_data тут тег 1, вроде и без него работает нормально (reply to 313332)

fruitful-l: так по итогу упаковываю контент, безобразие из ссылок, потому что так стандарт в tolk читает хранилище, не уверен, что в funC так же, вроде content и commonContent там разные поля  const content = "https://raw.githubusercontent.com/fruitful1l/metadata/refs/heads/main/collection.json" const commonCont = "https://raw.githubusercontent.com/fruitful1l/metadata/refs/heads/main/"  export function contentToCell(content: string): Cell {     return beginCell().storeRef(beginCell().storeUint(0x01, 8).storeStringTail(content).endCell())     .storeRef(beginCell().storeStringTail(commonCont).endCell())     .endCell(); }

🎐*<@Maxim: привет! а как узнать кол-во элементов коллекции если index=-1 https://tonviewer.com/EQCHPjHlYzEFSaEyJBOkcUEfc7Wo3jSw4EnbpNaFUQ8LeZWe - просто хочу узнат сколько всего нфт в коллекции?

Denis: Думаю можно запросить через dton graphql (reply to 313365)

#: if (op == op::change_dns_record) { ;; change dns record         throw_unless(411, equal_slices_bits(sender_address, owner_address));         int key = in_msg_body~load_uint(256);         int has_value = in_msg_body.slice_refs() > 0;          slice cs = content.begin_parse();         throw_unless(412, cs~load_uint(8) == 0); ;; data onchain tag         cell keyvalue_map = cs~load_dict();          if (has_value) {             cell value = in_msg_body~load_ref();              keyvalue_map~udict_set_ref(256, key, value);         } else {             keyvalue_map~udict_delete?(256, key);         }          content = begin_cell().store_uint(0, 8).store_dict(keyvalue_map).end_cell();          store_data(index, collection_address, owner_address, content, domain, auction, now());         return ();     }    здравствуйте, разбираюсь с доменами. скажите что за key uint256 и has_value откуда это брать?

&rey: А что вы хотите сделать? (reply to 313368)

#: после аукциона change dns record и он требует ключ и has value

&rey: У "поменять DNS-запись" немного другое значение, так что же именно вы хотите сделать? Какой результат должен появиться в блокчейне. (reply to 313370)

Denis: 256 бит это хэш от строки с ключем (reply to 313368)

Denis: В стандарте написано

Denis: https://github.com/tonkeeper/tongo/blob/71a2543fd1261e354dfb2fa2907308c96f94a860/tep64/metadata.go#L85

#: я отправил комментарий и подождал минуту пока закончится аукцион. и дальше хочу вызвать change dns record я по идее должен стать владельцем и добавить картинку для домена (reply to 313371)

&rey: А разве бывает "добавить картинку"? Я не слышал о таком ещё. (reply to 313375)

#: ну там же как-то метадата должна установится (reply to 313376)

#: ончейн

#: или для чего это нужно? (reply to 313368)

&rey: Для установки DNS-записей. Привязанный кошелёк, привязанный ADNL-адрес... а дальше — прочитайте просто документацию. (reply to 313380)

Denis: Технически можно (reply to 313376)

Denis: Там в одной хэшмапе лежат и теги типа image и днс записи

&rey: И оно будет работать?

Denis: Че бы нет

Tim: Работать понятие относительное (reply to 313384)

Denis: Ну картинку гетгемс и тонапи переопределят

Tim: А если там ркн (reply to 313387)

fruitful-l: Когда 11 подкаст? (reply to 313387)

#: async sendChangeDnsRecord(provider: ContractProvider, via: Sender, value: bigint) {         const key = BigInt('0x' + Buffer.from(await sha256(Buffer.from('uri'))).toString('hex'));           const url = "https://nft.fragment.com/gift/plushpepe-688.json";         const valueCell = makeSnakeCell(Buffer.from(url, 'utf8'));              await provider.internal(via, {             value,             sendMode: SendMode.PAY_GAS_SEPARATELY,             body: beginCell()                 .storeUint(0x4eb1f0f9, 32) // op::change_dns_record                 .storeUint(0, 64) // query_id                 .storeUint(key, 256) // ключ (sha256("uri"))                 .storeRef(valueCell)             .endCell()         });     }  function makeSnakeCell(data: Buffer) {     let root = beginCell();     let cur = root;     let i = 0;     while (i < data.length) {         let chunk = data.subarray(i, i + 127);         cur.storeBuffer(chunk);         i += chunk.length;         if (i < data.length) {             let next = beginCell();             cur.storeRef(next);             cur = next;         }     }     return root.endCell(); }     можете помочь пожалуйста чтобы корректно отобразилась ончейн метадата и чтобы d_n_s_smc_address: address "" был адрес владельца  https://testnet.tonviewer.com/transaction/df7aeedb28fb2f310fe9214d391c31e2ba2fe4f7f0647ecb81b904e665475bca

#: if (op == op::change_dns_record) { ;; change dns record         throw_unless(411, equal_slices_bits(sender_address, owner_address));         int key = in_msg_body~load_uint(256);         int has_value = in_msg_body.slice_refs() > 0;          slice cs = content.begin_parse();         throw_unless(412, cs~load_uint(8) == 0); ;; data onchain tag         cell keyvalue_map = cs~load_dict();          if (has_value) {             cell value = in_msg_body~load_ref();              keyvalue_map~udict_set_ref(256, key, value);         } else {             keyvalue_map~udict_delete?(256, key);         }          content = begin_cell().store_uint(0, 8).store_dict(keyvalue_map).end_cell();          store_data(index, collection_address, owner_address, content, domain, auction, now());         return ();     } (reply to 313401)

&rey: У индексеров коллекция TON DNS может быть прописана специально, они возмутятся. (reply to 313401)

#: вообще не понимаю что происходит что за словарь и где что указывать (reply to 313405)

&rey: Так это же оффчейн метадата. Вы её не запишете. (reply to 313401)

#: а каким образом это сделать? просто не работал с ончейн.  key: 70e5d7b6a29b392f85076fe15ca2f2053c56c2338728c4e33c9e8ddb1ee827cc value:   sum_type: NotStandard   d_n_s_text: ""   d_n_s_next_resolver: ""   d_n_s_adnl_address:     address:       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0       - 0     proto_list: null   d_n_s_smc_address:     address: ""     smc_capability:       name: null       interfaces: null   d_n_s_storage_address: "0000000000000000000000000000000000000000000000000000000000000000"   not_standard:   как добавить адрес в   d_n_s_smc_address:     address: "" и как сделать чтобы в   sum_type: был DNSSmcAddress  и в целом как указать ончейн метадату?

#: просто сравниваю как в mainnet у доменов был change dns record и что там приходило

fruitful-l: А откуда этот код вообще? (reply to 313368)

#: с гитхаба dns контракт (reply to 313411)

#: key: e8d44050873dba865aa7c170ab4cce64d90839a34dcfd6cf71d14e0205443b1b  это хэш от чего?  https://tonviewer.com/transaction/d06d9144a2c4ba506b90099c2d2fbc9a8e8b2273572b73afa7700772037234d1 (reply to 313402)

&rey: Смотрите список записей здесь: https://github.com/ton-blockchain/TEPs/blob/master/text/0081-dns-standard.md#dns-records (reply to 313414)

Denis: в индексере не прописано. в апишке прописаны специальные правила (reply to 313405)

#: async sendChangeDnsRecord(provider: ContractProvider, via: Sender, value: bigint) {         const metadata = {             name: "test",             description: "122",             image: "https://testimg.com/image.png"         }         const key = BigInt('0x' + Buffer.from(await sha256(Buffer.from('wallet'))).toString('hex'));                  const metadataDict = Dictionary.empty(Dictionary.Keys.BigUint(256), Dictionary.Values.Cell());         const nameKey = BigInt('0x' + (await sha256('name')).toString('hex'));         const descriptionKey = BigInt('0x' + (await sha256('description')).toString('hex'));         const imageKey = BigInt('0x' + (await sha256('image')).toString('hex'));          metadataDict.set(nameKey, beginCell().storeStringTail(metadata.name).endCell());         metadataDict.set(descriptionKey, beginCell().storeStringTail(metadata.description).endCell());         metadataDict.set(imageKey, beginCell().storeStringTail(metadata.image).endCell());          const valueCell = beginCell()             .storeUint(0, 8)             .storeDict(metadataDict)             .endCell();         await provider.internal(via, {             value,             sendMode: SendMode.PAY_GAS_SEPARATELY,             body: beginCell()                 .storeUint(0x4eb1f0f9, 32) // op::change_dns_record                 .storeUint(0, 64) // query_id                 .storeUint(key, 256)                  .storeRef(valueCell)             .endCell()         });     } что у меня не так?

Semyon: У меня одного при поиске по адресу в тонвивере ничего не работает? p.s. пытаюсь делать поиск по адресу  Хм, когда в адресную строку вбил нужный урл "насильно" заработало... Странно, может впн что-то режет

#: async sendChangeDnsRecord(provider: ContractProvider, via: Sender, value: bigint) {         const key = BigInt('0x' + Buffer.from(await sha256(Buffer.from('wallet'))).toString('hex'));                  const valueCell = beginCell()             .storeUint(0xBA, 8)             .storeAddress(via.address)             .storeUint(0, 1)         .endCell();           console.log(valueCell.toBoc().toString('hex'));         await provider.internal(via, {             value,             sendMode: SendMode.PAY_GAS_SEPARATELY,             body: beginCell()                 .storeUint(0x4eb1f0f9, 32) // op::change_dns_record                 .storeUint(0, 64) // query_id                 .storeUint(key, 256)                  .storeRef(valueCell)             .endCell()         });     }   скажите пожалуйста, почему у меня sum_type: NotStandard вместо DNSSmcAddress? https://testnet.tonviewer.com/transaction/487dd7b7c0814a885ad3a71ef8f51f45afff1be75680e045b057e02cf1e17e9a

&rey: Ощущение, будто мы разную документацию читаем. Проверьте, чтобы ллмка вам ничего не портила. Вроде нужен dns_smc_address с cap_is_wallet.  beginCell().storeUint(0x9fd3, 16).storeAddress(via.address).storeUint(1, 2).storeUint(0x2177, 16).storeUint(0, 1) (reply to 313420)

#: у меня вот так:   proto_list: null   d_n_s_smc_address:     address: ""     smc_capability:       name: null       interfaces: null   d_n_s_storage_address: "0000000000000000000000000000000000000000000000000000000000000000"   not_standard: b5ee9c720101010100250000459f8015864dc76f418a543f061cb1f4bbf0cbc661d5e7b0a29926446c27b8e9b4fd3308 (reply to 313421)

#: я просто смотрю на домены официальные там заполнено это (reply to 313422)

#: const valueCell = beginCell()             .storeUint(0x9fd3, 16)             .storeAddress(via.address)             .storeUint(1, 2)             .storeUint(0x2177, 16)             .storeUint(0, 1)         .endCell() я сделал так и у меня теперь вообще не видно ничего по поводу sum_type   d_n_s_smc_address:     address: "" (reply to 313421)

#: сработало. а как сюда метадату ончейн добавить?

That: Всем привет нужна помощь

That: Разрабатываю  свой мессенджер на юнити тут ошибка вылазит

Lev - ZooZ: Всем привет, к счастью, я уже несколько месяцев учу русский, иначе я бы запаниковал, когда приехал сюда.

Lev - ZooZ: I’m a Blockchain entrepreneur and working on a democratic project (digital ID and secure voting). Actually on BSC, I’m looking for the TON opportunities to collaborate on the blockchain part, but also on the telegram features.

User: docs.ton.org — для начала ознакомьтесь с документацией, она достаточна обширна, чтоб успешно вкатиться в базовые постулаты разработки экосистемы TON  Если вы уже пользовались BSC, то разобраться в TON для вас будет не шибко сложно. Так-же если вам сложно общаться на русском, то есть специализированный чат для англоговорящих пользователей: https://t.me/tondev_eng или используйте встроенный в телеграмм переводчик. Добро пожаловать. (reply to 313434)

— 2025-07-13 —

AL Pamblus: Здравствуй чат.  Кто-нибудь делал автопокупку NFT на GetGems?  Можете пожалуйста поделиться ссылками

ADM 👍: Здравствуйте, можно ли сменить логотип после минта?

Vladimir: А как минтили? (reply to 313459)

#: d_n_s_smc_address:     address: 0:5aa395dc679ac86390389fb16e212237aa4f669c2692c1c1eced6a393a88f696  при change dns record когда указываешь адрес , то что происходит после этого? для чего нужен d_n_s_smc_address?

&rey: Наверно, сначала стоило понять, чего вы хотите от домена, а потом делать?)  Запись wallet типа dns_smc_address указывает "если в приложении кошелька вбили ваш домен, куда всё отправлять". Запись dns_next_resolver типа dns_smc_address указывает "если вбили что-то.ваш.домен.тон, то какой контракт пояснит, что пользователь имел в виду". (reply to 313463)

#: спасибо (reply to 313465)

ADM 👍: Спасибо, уже решили вопрос (reply to 313462)

Grigorii: Всем привет, а где можно посмотреть все текущие блоки в тоне?

Андрей: Слишком абстрактный вопрос Если кратко - то в архивной ноде  Если посмотреть в браузере, то тут: https://explorer.toncoin.org/last https://explorer.toncoin.org/search?workchain=-1&shard=8000000000000000&seqno=1 (reply to 313474)

Андрей: tonscan.org - Сломался счетчик Address count

Tim: Привет, ищу разработчика мини игры по телеграмм-подаркам в виде Telegram Mini App!  Отпишите пж в ЛС, скам сразу мимо

XT: Написал (reply to 313482)

X1ag: перед тем как будете работать с ним: (reply to 313482)

Lapis ⁴² ¹⁷: Что будет аналогом condition1 or condition2 в FunC в условии для if?

Михаил | Земляные работы: Печально( (reply to 313491)

⛰️ Roman ⛰️: if (condition1 | condition 2) (reply to 313492)

Tim: За игнор извиняюсь, но ты не начинал работать, поэтому я тебе ничего не должен (reply to 313491)

Tim: Когда я начинаю работать - я открыто об этом говорю. Мне не понравилось твое резюме, слишком слабое

X1ag: я понимаю, что ты ничего не должен) но сам факт что ты сказал что отправишь предоплату и я начинаю - в итоге игнор😁 (reply to 313495)

Tim: Я сказал, что могу предложить такой вариант. Я ничего не обещал, не вижу проблемы (reply to 313497)

&rey: Стоп. Даже если скама нет, вам, кажется, лучше друг с другом не работать – недопоймёте.

Just1k $BC: Добрый день. Подскажите.  const router = client.open(   DEX.v2_1.Router.CPI.create(     "kQALh-JBBIKK7gr0o4AVf9JZnEsFndqO0qTCyT-D-yBsWk0v" // CPI Router v2.1.0   ) );  const proxyTon = pTON.v2_1.create(   "kQACS30DNoUQ7NfApPvzh7eBmSZ9L4ygJ-lkNWtba8TQT-Px" // pTON v2.1.0 );  Где взять адреса для майннет ?

User: Свапните нужную вам пару один раз и посмотрите какой роутер используется. Если-же вам нужно динамическое решение без хардкода, то милости прошу в документацию stonfi и их swagger api:  https://docs.ston.fi/developer-section/sdk/dex-v2/swap https://api.ston.fi/swagger-ui/#/ (reply to 313500)

Just1k $BC: Спасибо (reply to 313505)

#: (cell, cell) load_data() inline {     var ds = get_data().begin_parse();     return (             ds~load_ref(), ;; content             ds~load_ref() ;; nft_item_code     ); }  () save_data(cell content, cell nft_item_code) impure inline {     set_data(begin_cell()             .store_ref(content)             .store_ref(nft_item_code)             .end_cell()); }  import { beginCell, toNano } from '@ton/core'; import { DnsCollection } from '../wrappers/DnsCollection'; import { compile, NetworkProvider } from '@ton/blueprint';  export async function run(provider: NetworkProvider) {     function encodeMetadata(content: string) {         return beginCell()             .storeUint(1, 8)             .storeStringTail(content)          .endCell();     }     const dnsCollection = provider.open(DnsCollection.createFromConfig({         content: encodeMetadata("url"),         nftItemCode: await compile("DnsItem")     }, await compile('DnsCollection')));      await dnsCollection.sendDeploy(provider.sender(), toNano('0.05'));      await provider.waitForDeploy(dnsCollection.address);      // run methods on `dnsCollection` }  почему когда указываю ссылку на метадату коллекции, то в обозревателе не показывает контент, а на гетгемс показывает? https://testnet.tonviewer.com/kQDHIes2RgFk6m70skn5ysjmAT6LCgfTfeAeScbJ3VR1dF0h

Evgeniy: Подскажите, использую "Testgiver TON Bot", создал 2 новых кошелька в тестовой сети TON, для отладки транзакций. Запросил у бота 2 TON на один из тестовых кошельков. Хочу погонять транзакции. Все вроде бы прошло успешно. Ждал, ждал, так ничего не пришло. Запросил еще раз, пишет что операция в очереди, ожидайте. Прошли сутки, запросил еще раз, опять ничего. Никакого изменения баланса на соответствующем кошельке. В качестве приложения кошелька использую wallet.ton.org, в режиме testnet=true. Никаких ошибок бот не выдает, просто молчит. Вроде как все идет правильно. У кого есть какие идеи.  Подскажите, чего я не учел в работе "Testgiver TON Bot" или что делаю не так? Кто-то этот инструмент уже прежде использовал? Может есть другие, работающие аналоги?

Lapis ⁴² ¹⁷: скопируйте адрес из сообщения бота и отправьте в чат, пожалуйста (reply to 313510)

Evgeniy: Address: UQD4HJ3HTLbnsh5wPnI_xUN5Rd_mjfCZSfK0qPmDVvbA3C3c (reply to 313511)

Lapis ⁴² ¹⁷: вот же, 6 TON на балансе (reply to 313512)

Lapis ⁴² ¹⁷: может быть опечатка в адресе кошелька или что-то подобное

&rey: Чексумма бы сломалась. Там, скорее, интерфейс не может забрать новые данные. (reply to 313514)

Evgeniy: Нет, опечатки нет. По какой ссылке вы смотрите. Ни мой кошелек, ни tonscan.org ничего не отображают. Как переключить tonscan.org на отображение данных из тестовой сети?

&rey: Зайти на testnet.tonscan.org (reply to 313516)

Evgeniy: Знаю что вопрос был нубский, благодарю! (reply to 313519)

&rey: А вы кошелёк-то, собственно, переключили на другую сеть? (reply to 313516)

Evgeniy: Думаю да, или этого недостаточно. В Desktop клиенте, я так соответствующей опции в настройках и не нашел. Все перерыл, ничего похожего на сеть нет. (reply to 313521)

Lapis ⁴² ¹⁷: у вас кошелёк в Mainnet режиме в настройках нажмите на TON Wallet [версия] несколько раз, там выберите Testnet в поле Network (reply to 313516)

Lapis ⁴² ¹⁷: нажимаете несколько раз, откроется меню с настройками для разработчиков (reply to 313527)

Evgeniy: Я понял, все работает, но в мыслях много мата. В Desktop клиенте это переключается также. (reply to 313527)

Max: у MTW один код на все платформы (reply to 313529)

Max: ожидаемо что везде поведение одно и то же будет

Иван: привет ребята, есть такой вопрос, буду благодарен за ответ. У меня приложение на next js, столкнулся с проблемой что транзакция сама по себе создается, но кошелек хоть стреляй не открывается в браузере, может ктонибудь сталкивался с подобной проблемой ? Копировал с буквально с мануала

&rey: restoreConnection вызвали на странице? (reply to 313533)

Иван: не пробовал ) (reply to 313534)

Иван: правильно понимаю что это с сдк береться ? у меня сейчас в проекте @tonconnect/ui-react только стоит

∆Максим: Всём привет, когда то давно по совету друга минтил эти сбт, какой в них смысл?

Андрей: Выглядит что никакого, но это лично для меня, так же как разные медали (reply to 313538)

XT: Для красоты, как медалька просто, что прошел задание про смартконтракты и сделал хелло ворлд

— 2025-07-14 —

славик: сколько стоит бот автопокупки подарков?

славик: и где брать

славик: подскажите пжэ

User: https://github.com/coector/TGgifts-buyer  Все доступно в open source. Ставите на сервер и пользуйтесь

Potato: Ребята, а есть ли вариант когда jetton_notify приходит в размере 1 нанотон, а газ за последующую логику, выполняемую контрактом, оплачивается за счет баланса самого контракта?

Dmitry: Нет. (reply to 313558)

User: https://docs.ton.org/v3/documentation/tvm/tvm-overview#when-the-compute-phase-is-skipped — после Августа 2024 года, если перевод < чем ~0.00004 TON, то выйдет ошибка cskip_no_gas$10, так что реализовать вашу логику можно, но обработать 1 nanoton на контракте никак нет  По ссылке вы можете почитать ветку сообщений, где как раз таки обсуждается логика, когда контракт сам платит комиссии: https://t.me/tondev/282005 (reply to 313558)

qwertycamedy: Также, подскажите мне пожалуйста, в чем проблема  При обмене мелких жетонов возникает данная ошибка  Если вы посмотрите на quote для создания транзакции, все в порядке, а цифры верны

𝐓𝐘𝐒𝐎𝐍: Всем привет, видел кто-то в опен сорсе готовый код пополнялки через тон?

Max: Велосипед (reply to 313583)

Combot: Combot выдал(а) предупреждение Davlatov Sherzodjon (1/3) Reason: 1 reports (reply to 313589)

Андрей: Всем привет, никто не знает как я могу сделать свой кошелёк c TonConnect? В основном легко, но я никак не могу разобраться с TonConnect-ом со стороны кошелька. Есть где документация/туториал о том как можно внедрить TonConnect в свой кошелёк?

&rey: Нет. Но есть опен-сорс кошельки (не тонкипер, тот только source available, а что-то вроде мтв). (reply to 313601)

X1ag: ты его не внедряешь в свой кошелек. Тон коннект это штука которая подключает кошелек в приложению(dapp) и взаимодействует с ним и не более (reply to 313601)

Андрей: Я сурсы копал и тонкипера и MyTonWallet-а и форка MyTonWallet-а, не получилось повторить (reply to 313602)

&rey: А TonDevWallet? (reply to 313604)

Андрей: Не видел, сейчас посмотрю (reply to 313605)

&rey: slippage жёсткий, наверно? (reply to 313574)

Андрей: Тут всё лежит почти на поверхности, спасибо (reply to 313605)

qwertycamedy: И при 10% проскальзывания такая тема (reply to 313607)

Den: Всем привет вопрос. По тон апи.  Как можно получать мета данные токенов пачкой а не по одному

User: https://toncenter.com/api/v3/index.html#/jettons/api_v3_get_jetton_masters  У toncenter есть метод в который можно вставить до 1024 jetton адресов и получить информацию по ним (reply to 313614)

#: (cell, cell) load_data() inline {     var ds = get_data().begin_parse();     return (             ds~load_ref(), ;; content             ds~load_ref() ;; nft_item_code     ); }  () save_data(cell content, cell nft_item_code) impure inline {     set_data(begin_cell()             .store_ref(content)             .store_ref(nft_item_code)             .end_cell()); }  import { beginCell, toNano } from '@ton/core'; import { DnsCollection } from '../wrappers/DnsCollection'; import { compile, NetworkProvider } from '@ton/blueprint';  export async function run(provider: NetworkProvider) {     function encodeMetadata(content: string) {         return beginCell()             .storeUint(1, 8)             .storeStringTail(content)          .endCell();     }     const dnsCollection = provider.open(DnsCollection.createFromConfig({         content: encodeMetadata("url"),         nftItemCode: await compile("DnsItem")     }, await compile('DnsCollection')));      await dnsCollection.sendDeploy(provider.sender(), toNano('0.05'));      await provider.waitForDeploy(dnsCollection.address);      // run methods on `dnsCollection` }  скажите пожалуйста, почему когда указываю ссылку на метадату коллекции, то в обозревателе не показывает контент, а на гетгемс показывает? https://testnet.tonviewer.com/kQDHIes2RgFk6m70skn5ysjmAT6LCgfTfeAeScbJ3VR1dF0h

L30n1d: а по ссылке была доступна метадата в момент деплоя?  и почему там отображается, что -1 элементов в коллекции? (reply to 313622)

#: на гетгемс есть метадата по ссылке json открывается а в tonviewer нет. -1 так вовзращает гет метод как я помню (reply to 313623)

L30n1d: Просто если в момент деплоя не была доступна метадата, то могло кеширования не произойти, например А на гетгемс можно руками дёрнуть и подгрузить метадату, а на тонвивере, по опыту, он это делает один раз и больше не пытается (reply to 313624)

#: ну если я использую метадату dns ton для коллекции она сразу работает. и то фото коллекции в обозревателе одно , а на гетгемс другое что за бред. и как сделать чтобы сразу отобразилось? (reply to 313625)

L30n1d: кеширование такое (reply to 313626)

L30n1d: метадата по ссылке должна быть доступна до деплоя коллекции, чтобы после деплоя вивер успешно за ней сходил (reply to 313626)

#: так я сюда ссылку свою указываю, могу ее открыть и там json будет (reply to 313622)

L30n1d: причём если поменяешь данные по ссылке, то они уже не поменяются в вивере)) Даже если задеплоить новую коллекцию, но в ней использовать те еж ссылки на картинки/метадату, то всё равно будет старые, закешированные данные

#: 😱

L30n1d: ну мб в момент деплоя она не открывалась, хз (reply to 313629)

#: что творится

#: в общем попробовать поменять ссылку?

L30n1d: Да, попробуй (reply to 313634)

#: https://testnet.tonviewer.com/kQDzyiigUBWuT7ilMUFtSkkPVdxlYjDWmISMfO9GOlmz2mYG  изменил ссылку и не поменялось (reply to 313635)

fruitful-l: Как будто если бы проблема была с кэшем - метадата была бы указана, просто была бы устаревшей. Здесь ее вообще нет, может проблема с самим форматом метадаты? (reply to 313636)

#: json сам поменял и сработало. не пойму порядок что ли важен был или как (reply to 313637)

#: порядок того что за чем находится

L30n1d: Порядок чего? (reply to 313639)

#: имя фото описание

#: вроде не влияет же

L30n1d: нет (reply to 313644)

L30n1d: ну если в момент кеширования ссылка на метадату ничего не вернула, то, вероятно, как раз такое ничего и закешится но это не точно, чисто эмпирический опыт (reply to 313637)

fruitful-l: У меня такой же случай был (reply to 313342)

#: а может быть из-за того что у меня в json отступ 4 пробела а не 2? (reply to 313645)

#: потому что разницы в данных нет, все в кавычках и запятая

fruitful-l: Скорее всего действительно порядок, у меня не работало, когда image был перед name. Когда поменял, заработало

Lapis ⁴² ¹⁷: при попытке сминтить токены через minterController в репозитории jetton-contract в тестнете выдаёт ошибку 500 если кто-то знает, подскажите как это можно исправить пробовал использовать minter-ton-org, но там всё под старый контракт со старыми op-кодами

#: const onChainContent: NftContent = {         type: 'onchain',         data: {             name: 'domain.net',             description: "A .net blockchain domain at TON",             render_type: 'dns',             attributes: JSON.stringify([                 { trait_type: 'length', value: '6' },             ])         }     }  type OnChainContentData = 'uri' | 'attributes' | 'trait_type' | 'value' | 'name' | 'description' | 'image' | 'image_data' | 'symbol' | 'decimals' | 'amount_style' | 'render_type' | 'currency' | 'game';  type NftContentOnchain = {     type: 'onchain',     data: Partial<Record<OnChainContentData, string>> }    скажите как ончейн добавить атрибуты, а то они не показываются

&rey: Как бы, никак. (reply to 313658)

#: 😭 (reply to 313660)

#: if (op == op::change_dns_record) { ;; change dns record         throw_unless(411, equal_slices_bits(sender_address, owner_address));              int key = in_msg_body~load_uint(256);         int has_value = in_msg_body.slice_refs() > 0;              slice cs = content.begin_parse();         int tag = cs~load_uint(8);         throw_unless(412, tag == 0);               cell dict_cell = cs~load_dict();              if (has_value) {             cell value = in_msg_body~load_ref();             dict_cell~udict_set_ref(256, key, value);         } else {             dict_cell~udict_delete?(256, key);         }              content = begin_cell()             .store_uint(0, 8)             .store_dict(dict_cell)             .end_cell();              store_data(index, collection_address, owner_address, content, domain, auction, now());         return ();     }   у меня проблема такая, что после вызова этого оп кода, моя ончейн метадата пропадает. я пытался исправить и не получилось. скажите пожалуйста что можно сделать? (reply to 313660)

#: if (op == op::change_dns_record) { ;; change dns record         throw_unless(411, equal_slices_bits(sender_address, owner_address));         int key = in_msg_body~load_uint(256);         int has_value = in_msg_body.slice_refs() > 0;          slice cs = content.begin_parse();         throw_unless(412, cs~load_uint(8) == 0); ;; data onchain tag         cell keyvalue_map = cs~load_dict();          if (has_value) {             cell value = in_msg_body~load_ref();             keyvalue_map~udict_set_ref(256, key, value);         } else {             keyvalue_map~udict_delete?(256, key);         }         content = begin_cell().store_uint(0, 8).store_dict(keyvalue_map).end_cell();          store_data(index, collection_address, owner_address, content, domain, auction, now());         return ();     }          const valueCell = beginCell()             .storeUint(0, 8)             .storeRef(metadataCell)                .storeUint(0x9fd3, 16)                       .storeAddress(via.address)                .storeUint(1, 8)                          .storeBit(1)                                  .storeUint(0x2177, 16)                 .storeBit(0)                              .storeBit(1)                            .endCell();       скажите почему у меня value:   sum_type: NotStandard  d_n_s_smc_address:     address: ""  https://testnet.tonviewer.com/transaction/6dd9ef282428668bcad4f7fbca44a757345bb6dcd96db6aebc185044302cbce7

&rey:         const message = beginCell()             .storeUint(op_change_dns_record, 32)             .storeUint(query_id, 64)             .storeUint(sha256string_wallet, 256)             .storeRef(                 beginCell().storeUint(0x9fd3, 16).storeAddress(via.address).storeUint(1, 2).storeUint(0x2177, 16).storeUint(0, 1).endCell()             .endCell(); (reply to 313664)

#: скажите пожалуйста а что с метадатой делать. она после этого сообщения пропадает (reply to 313665)

&rey: Кстати, как написано — это скам. Чистое мошенничество. (reply to 313658)

#: я для себя (reply to 313668)

#: так не работает (reply to 313665)

#: обозреватель не помечает это ChangeDnsRecord а просто оп код пишет и там нельзя посмотреть инфррмацю sum_type: NotStandard  d_n_s_smc_address:     address: "" (reply to 313665)

#: с этим работает. но у меня пропадает метадата нфт и не понимаю как это исправить (reply to 313664)

&rey: У вас какой-то очень странный код домена, так что предположу, что там и контракт сломался.

&rey: (хеш кода нормального домена 8b5ffc9ebfd39064d8d5f56e4659c826bb7593923f5ca48728be4d60af6f51f9, у вас 0e0af186d41303caf88ef4d84614f7e833c53d31f952e2f5b65dec4ddab0f88f)

#: у меня стандартный код (reply to 313673)

#: просто я при деплое передаю ончейн метадату

&rey: И как вы его получаете? Если что, "скомпилировать из исходников" немного не то даёт, что на самом деле на чейне — версия-то компилятора поменялась. (reply to 313675)

#: if (~ init?) {         throw_unless(405, equal_slices_bits(collection_address, sender_address));         slice from_address = in_msg_body~load_msg_addr();         cell domain = in_msg_body~load_ref();          cell onchainMetadata = in_msg_body~load_ref();         ;; content = begin_cell().store_uint(0, 8).store_dict(empty_dict()).end_cell();         content = onchainMetadata; (reply to 313677)

#: по умолчанию он без картинки создается

#: теперь при деплое домен с метадатой. когда вызываю change dns record то метадата пропадает

#: и как исправить исчезновение метадаты

&rey:             .storeRef(                 beginCell().storeUint(0x9fd3, 16).storeAddress(via.address).storeUint(1, 8).storeUint(1, 1).storeUint(0x2177, 16).storeUint(0, 1).endCell()

&rey: Везде (включая гетгемс) или только в эксплорерах? (reply to 313682)

#: на гетгемс вроде не пропадает а в обозревателе да (reply to 313684)

&rey: Ну так обозреватели парсят контракт вновь, видят, что это домен, и перезаписывают на правильные метаданные. (reply to 313685)

&rey: Возможно.

#: а в итоге как поступить чтобы метадата не пропадала? может в контракте поменять что?

#: .storeUint(0, 8)         .storeRef(metadataCell)             .storeUint(0x9fd3, 16)                       .storeAddress(via.address)                .storeUint(1, 8)                         .storeUint(1, 1)                                  .storeUint(0x2177, 16)                 .storeUint(0, 1)          .endCell();  если я так сделаю то метадата вернется но будет  sum_type: NotStandar d d_n_s_smc_address:     address: "" https://testnet.tonviewer.com/transaction/66e36e673af9e55c26fae6854485bbad1d8a01772b871c0424073160b28a6e1e

&rey: Да куда вы там эту ячейку с метаданными передаёте, этот ресивер её же не принимает... (reply to 313689)

#: 😩

&rey: Если так, то, вероятно, у вас контракт как-то криво работает. Попробуйте сразу op::edit_content, там всё проще — передать ячейку с 0x00 и словарём со всеми этими данными.

#: хорошо спасибо

— 2025-07-15 —

Waho: Ребята, кто сделал бота для автоматической покупки днс доменов, готов купить или заказать разработку. Прошу писать в личку

Denis: На самом деле пытается. Но не слишком часто. Но ручной реиндекс в апи тоже есть (reply to 313625)

L30n1d: Ну по крайней мере со старой картинкой у меня одна коллекция весит уже несколько месяцев😅 (reply to 313708)

L30n1d: То есть это не индекс тонвивера, а индекс тонапи? (reply to 313708)

Denis: А. Картинки да - кэшируются пожизненно. Но скоро кстати ситуация улучшится

Denis: Тонвьювер это проект тонапи (reply to 313710)

L30n1d: Я понимаю, вопрос просто в том, где кеш (reply to 313713)

L30n1d: Но метадату можно переиндексить? (reply to 313712)

L30n1d: А что улучшится? 🥹 (reply to 313712)

Denis: Ситуация с картинками (reply to 313716)

L30n1d: Они будут переодически перекэшироваться? Как часто? (reply to 313717)

Denis: Раз в неделю

Vladimir: 🛡Hack THE TON — the first wargame platform built on TON!  Ethereum has legendary wargames like Ethernaut and Damn Vulnerable DeFi — tools that have onboarded thousands of developers into smart contract security. TON had nothing like this. So the community built it.  🎮 How does it work? Hack THE TON is a series of challenge levels, each represented by a smart contract written in Tact or Tolk. Your goal is to hack the contract by triggering its hidden condition. Use your knowledge of the TVM, analyze the logic, exploit vulnerabilities, and win!  🔧 Along the way, you'll learn to:  *️⃣Deepen your understanding of the TVM and TON architecture *️⃣Read and understand Tact/Tolk contracts *️⃣Analyze smart contract vulnerabilities in TON *️⃣Write attack contracts and exploits  🏆 Completing levels contributes to your profile and reputation in the ecosystem.  👾 The first wave of levels is already live. Join the core of TON’s hacker community — and prove what you're capable of.  👉 Start now: https://www.hacktheton.com/ 💬 Join the chat: https://t.me/hacktheton  🚧 New challenges are coming soon. (forwarded from TON Dev News)

Artem: Коллеги, привет. Нужно написать небольшой смарт контракт. Кто-то готов это сделать попроектно?

KTO: const comment = beginCell()     .storeUint(0,32)     .storeStringTail('Hello World!')     .endCell();   const body = beginCell()     .storeUint(0xf8a7ea5, 32)     .storeUint(0, 64)     .storeCoins(1000000000n)     .storeAddress(Address.parse('адрес получателя'))     .storeAddress(Address.parse('адрес отправителя'))     .storeBit(0)     .storeCoins(1n)     .storeBit(1)     .storeRef(comment)     .endCell();  const jettonWalletAddress = Address.parse('адрес кошелька токена');  message = await tonData.contract.createTransfer({     seqno: seqno,     secretKey: tonData.keyPair.secretKey,     sendMode: SendMode.PAY_GAS_SEPARATELY + SendMode.IGNORE_ERRORS,     messages: [internal(         {             to: jettonWalletAddress,             value: toNano('0.037'),             body: body,         }     )] });   Почему происходит ошибка во время отправки транзакции? (Unable to complete the operation)

Daniel: Написал в лс (reply to 313738)

&rey: Может, decimals не учли? У юсдт шесть. (reply to 313739)

KTO: Decimals учёл. Баланса хватает (reply to 313741)

&rey: Вроде как должно работать. Какой кошелёк ошибку выдаёт?

KTO: Вот id транзакции 68a5abc24d13976d90cf345fb05edb16c278370e0f83a1e69426b0e74a245a92

KTO: Не понимаю в чём может быть проблема (reply to 313743)

Max: мало приложили тонов к трансферу (reply to 313744)

&rey: Хочет не меньше 0.052 тон (reply to 313744)

KTO: Я пробовал 0.5 прикладывать (reply to 313746)

KTO: Та же ошибка

&rey: Так форвард-то не надо увеличивать до 1 тон! (reply to 313748)

KTO: Работает, спасибо! Т.е я просто мало прикладывал TON для комиссии?

Dimer: Как получить данные о актуальных наградах стейкинг пула? Парсинг обычный не подходит, так как парсит данные с последней транзакции (неактуальные данные). Как получить данные о наградах в реальном времени? Сталкивался кто-то с такой задачей?

Malik: Добрый, не могу в лс написать почему-то актуально еще? (reply to 313738)

Artem: сейчас напишу (reply to 313753)

User: Попробуйте DTON API, скорее всего с помощью него вы сможете сделать то что хотите (reply to 313752)

Dimer: Спасибо,  пойду смотреть! (reply to 313755)

#: как можно проверить, что change_dns_record применился?

&rey: Резолвнуть домен – вбив, например, его в эксплорер. (reply to 313791)

#: а если он не .ton а мой придуманный, то сработает? (reply to 313792)

&rey: Нет. (reply to 313793)

#: понял спасибо (reply to 313794)

s: подскажите, где можно найти корректные параметры (например адрес маркетплейса и комисию), что контракт  nft_offer_getgems_v1 корректно отображался в ui getgems ?

⛰️ Roman ⛰️: Метадата? (reply to 313813)

⛰️ Roman ⛰️: Заходишь на tonwiever и пишешь адрес контракта, там можно будет посмотреть метадату контракта

s: нет, речь о эти параметрах (reply to 313814)

⛰️ Roman ⛰️: Ты хочешь узнать эти параметры какого то контракта или тебе нужен пример параметров для создания своего контракта?

⛰️ Roman ⛰️: Если второе - то можешь просто через Blockchain.treasury("name").address брать адреса. Все остальное - это просто числа.

Combot: Combot выдал(а) предупреждение Тимофей Федоров (2/3) Reason: 1 reports (reply to 313819)

s: я создаю оффер на покупку я использую их boc, параметры мне нужны для initData мне надо делать такой же офер, который дет гетгемс, через свой ui (reply to 313817)

s: если перефразировать вопрос более нормально,   какие initData использует getgems для создания офера

⛰️ Roman ⛰️: Если честно, я еще офферы не делал и не знаю что у них в c4. Если фото, которое ты скинул действительно показывает все что нужно, то тебе необходимо: 1. созданный NFT item и его адрес, 2. желательно иметь созданный контракт маркетплейса.  Если контракта маркетплейса нет, то можно выкрутиться написав свой личный адрес кошелька. Все остальные значения делаешь сам, timestamp с помощью библиотек, цены пишешь сам; если NFT твоя, то в адрес роялти ставишь свой и любую цену роялти. Надеюсь все понятно (reply to 313824)

⛰️ Roman ⛰️: И ещё мне кажется что любой оффер, созданный не на гетгемс не будет отображаться, как и любой контракт продажи NFT. Отображаются только те, что созданы на самом гетгемс

Nick: Кто нибудь знает, как подключиться к тестнету TAC, он уже запущен?

s: спойлер, будет отображаться (reply to 313826)

— 2025-07-16 —

Combot: Combot выдал(а) предупреждение N (1/3) Reason: 1 reports (reply to 313857)

Viacheslav: привет. у меня контракт(банк) выдает токены по интернал транзакции от orderid контракта(аналооия жетонмастер и walletы).  как можно запретить одному адресу выводить токены чаще чем раз в сутки? если у нас нет централизованного хранения данных(мапинга) как в  evm?

SweetJesus: Если я правильно понял, то первое в голову приходит - пусть админ дергает сообщением метод который и делает эти ограничения. (reply to 313862)

Viacheslav: а если админ насоздавал скажем кучу order контрактов. это как бы для подстраховки бэка (reply to 313863)

/B4ckSl4sh\: Запоминать в отдельном контракте время последнего клейма для каждого юзера (reply to 313862)

Viacheslav: памяти не хватит же.. если юзеров много (reply to 313866)

/B4ckSl4sh\: Так в отдельном контракте для каждого юзера (reply to 313868)

/B4ckSl4sh\: Ровно так же, как в жетонах хранится например баланс для каждого юзера (reply to 313869)

Viacheslav: ааа (reply to 313869)

Viacheslav: юзер кстати сам свой ордер контракт деплоит(за свой счет) и кладет в него подпись с бэка и она проверяется уже в центральном контракте.  получается юзер деплоит ордер контракт, идет запрос в контракт с lasttime и оттуда в главный уже..

web-assist 🧀: При работе с данными заказчиками берите предоплату и не отдавайте исходники до полной оплаты. Денег потом за свой труд вы не увидите @igorm1212 @samvelinz

&rey: А в Толке lazy с адресами предполагает, что они всегда 267 бит, или нет?

maksim: что значит предполагает? (reply to 313875)

fruitful-l: А разве есть разница? Он же любые структуры любого размера сам достает (reply to 313875)

maksim: +, до момента матча/доступа к полю он ничего не предполагает, а там уже смотрит по факту что есть (reply to 313877)

fruitful-l: Кстати матч возможно настроить не под опкод? Чтобы он условно под любой тип данных работал, не обязательно uint (reply to 313878)

L30n1d: можно (reply to 313879)

maksim: матч работает не по опкоду а в целом по любом префиксу, если такого нет он сам строит префикс дерево, так что да, можно (reply to 313879)

fruitful-l: Спасибо

&rey: Ну, при uint64 uint32 uint64 он может сам пропустить 160 бит, так вот чтобы с адресом было то же. (reply to 313876)

maksim: в случае с адресом загрузит и не будет использовать (reply to 313884)

maksim: ну и с другими типами мутабельной длинны тоже самое

maksim: нельзя делать assumptions без загрузки ведь может сломаться

&rey: Запрашиваю, значит, simple_address) Который всегда 267 бит. (reply to 313885)

maksim: ахах да так прокатит если прям очень экономить хочется (reply to 313889)

Petr: Пишешь slice а потом делаешь когда нужно msg.slice as address, вроде так можно (reply to 313889)

Petr: А ой, bits257, у слайса же нет длины

s: подскажите, почему выдает ошибку 9  при это в некоторых случаях есть ошибка, в некоторых нет       const feesCell = beginCell()         .storeAddress(Address.parse(marketplaceFeeAddress))         .storeUint(marketplaceFactor, 32)         .storeUint(marketplaceBase, 32)         .storeAddress(Address.parse(royaltyAddress))         .storeUint(royaltyFactor, 32)         .storeUint(royaltyBase, 32)         .endCell();      return beginCell()         .storeBit(isComplete ? 1 : 0)         .storeUint(createdAt, 32)         .storeUint(finishAt, 32)         .storeAddress(Address.parse(marketplaceAddress))         .storeAddress(Address.parse(nftAddress))         .storeAddress(Address.parse(offerOwnerAddress))         .storeCoins(fullPrice)         .storeRef(feesCell)         .storeBit(1) // can_deploy = true         .endCell();

⛰️ Roman ⛰️: значит из ячейки ты пытаешься прочитать то, чего нет, либо пытаешься прочитать не тот тип (reply to 313899)

⛰️ Roman ⛰️: было бы хорошо, если бы фоткой скинул код деплоя и код контракта (reply to 313899)

User: Проверьте через дебаггер или console.log все-ли данные передаются адекватно, потому-что в плане составления ячейки все ок и логика не может изменяться и условно не деплоиться, как это произошло с вами, что указывает на проблему именно во входящих данных.  Для лучшего понимая, сравните ячейку которую вы отправили и она подтвердилась, с ячейкой которая выкинула cell underflow (reply to 313899)

⛰️ Roman ⛰️: я посмотрел через тонвьювер, тот контракт что задеплоился удачно, был задеплоен им 18ч назад и почему то обозреватель не отмечает его как nft_offer_contract. За это время он мог что то изменить в коде (reply to 313903)

s: контракт гетгемс я только иннит дату передаю (reply to 313902)

&rey: А опкод и query ID где-то в другом месте? (reply to 313899)

⛰️ Roman ⛰️: я чекнул контракт, при деплое в его случае не обязательно добавлять op и query id (reply to 313906)

User: return (     ds~load_uint(1), ;; is_complete 1     ds~load_uint(32), ;; created_at 32     ds~load_uint(32), ;; finish_at 32     ds~load_uint(32), ;; finish_at 32     ds~load_msg_addr(), ;; marketplace_address  267     ds~load_msg_addr(), ;; nft_address 267     ds~load_msg_addr(), ;; offer_owner_address 267     ds~load_coins(), ;; full_price 127     ds~load_ref(), ;; fees_cell     ds~load_uint(1)     ;; can_deploy   );  Попробуйте еще store_uint(finish_at, 32) выставить. В исходниках почему-то их два (reply to 313899)

⛰️ Roman ⛰️: после не хватает swap_at (reply to 313899)

s: https://testnet.tonviewer.com/transaction/dc579abacb0982018c7999abe52c1a0f8db9c6de861075a6fc37fb0e237e4de9  ты лучший спасибо ! ❤️ (reply to 313907)

s: видимо в комментарии просто ошиблись с именем (reply to 313908)

s: у них в гитхабе неверная структура

⛰️ Roman ⛰️: можешь в issues отправить сообщение (reply to 313914)

⛰️ Roman ⛰️: обновили расширение для IDE https://t.me/toncore/69

s: а для вебшторма?( (reply to 313916)

Petr: Есть плагин для JB IDE: https://plugins.jetbrains.com/plugin/23382-ton (reply to 313917)

RootTon: Всем привет, делал ли кто то бота который грамотно управляет ликвидностью токена ? Чтобы пропорционально докидывались X и Y (по амм) и при этом цена Y стабилизировалась и не падала ? Если да то скиньте плиз мат формулы кому не жалко

fruitful-l: Если нужен стейблкоин у дедаста есть формула, а так все стандартную используют без хитростей (reply to 313922)

RootTon: Принял, а как тогда защищаются от арбитража и прочих криптофриков ? (reply to 313925)

fruitful-l: Ну арбитражить же будут в разных дексах? Мне кажется на это никак не повлиять (reply to 313926)

RootTon: А можно ссыль? (reply to 313925)

Оскар: если ты про стейлбсвоп, то не нужно путать его со стейблкоинами, стейблсвоп нужен для монет, которые имеют около-одинаковую ценность (USDT-USDC, TON-stTON, etc) (reply to 313925)

#: https://retracer.ton.org/?tx=4a8401c811051d06561356c9bcdb2adf0ad2cd5b4db5640b3370993277987785&testnet=true  можете пожалуйста сказать почему 7 ошибка? что он пытается сделать?

fruitful-l: Да, перепутал (reply to 313929)

Alexey: ого, а на чём контракт написан? это похоже на баг компилятора, если он такое выдал (reply to 313931)

#: func (reply to 313933)

Alexey: ну если вы используете асмблерные вставки, то ошибка в наверняка в них, если не используете то вы что-то очень необычное делаете (reply to 313934)

rends_east: скорее всего вы забыли лоаднуть storage (reply to 313931)

#: я просто хочу сделать домен, но добавил туда больше данных (reply to 313935)

rends_east: Бага компилятора нет, рантайм ошибка Вы пытаетесь достать глобальную переменную, она не выставлена, получаете null, пытаетесь сделать STSLICE, выходит ошибка 7

rends_east: продебажьте ~strdump и ~dump, увидьте, где ошибка  она на строчке, где вы используете глобальную переменную (reply to 313937)

rends_east: а, ну вы в тестнете тестите тогда, конечно, земля пухом

#: ` ;; Storage global variables global int storage::index; global slice storage::collection_address; global slice storage::owner_address; global cell storage::content; global cell storage::domain; global cell storage::auction; global int storage::last_fill_up_time; global int storage::dns_price_other; global int storage::dns_price_minimum; global int storage::percent; global int storage::min_dns_len; global int storage::max_dns_len; global int storage::auction_end_duration; global int storage::auction_prolongation;  (slice, int, int) unpack_auction(cell auction) {     if (cell_null?(auction)) {         return (null(), 0, 0);     } else {         slice ds = auction.begin_parse();         return (ds~load_msg_addr(), ds~load_coins(), ds~load_uint(64));     } }  cell pack_auction(slice max_bid_address, int max_bid_amount, int auction_end_time) {     return begin_cell()             .store_slice(max_bid_address)             .store_coins(max_bid_amount)             .store_uint(auction_end_time, 64)             .end_cell(); }  () load_data() impure inline {     slice ds = get_data().begin_parse();     storage::index = ds~load_uint(256);     storage::collection_address = ds~load_msg_addr();     if (ds.slice_bits() > 0) {         storage::owner_address = ds~load_msg_addr();         storage::content = ds~load_ref();         storage::domain = ds~load_ref();         storage::auction = ds~load_dict();         storage::last_fill_up_time = ds~load_uint(64);         storage::dns_price_other = ds~load_coins();         storage::dns_price_minimum = ds~load_coins();         storage::percent = ds~load_uint(8);         storage::auction_end_duration = ds~load_uint(16);         storage::auction_prolongation = ds~load_uint(16);         storage::min_dns_len = ds~load_uint(8);         storage::max_dns_len = ds~load_uint(8);     } else {         storage::owner_address = null();         storage::content = null();         storage::domain = null();         storage::auction = null();         storage::last_fill_up_time = 0;         storage::dns_price_other = 0;         storage::dns_price_minimum = 0;         storage::percent = 0;         storage::auction_end_duration = 0;         storage::auction_prolongation = 0;         storage::min_dns_len = 0;         storage::max_dns_len = 0;     }     ds.end_parse(); }  () save_data() impure inline {     set_data(         begin_cell()             .store_uint(storage::index, 256)             .store_slice(storage::collection_address)             .store_slice(storage::owner_address)             .store_ref(storage::content)             .store_ref(storage::domain)             .store_dict(storage::auction)             .store_uint(storage::last_fill_up_time, 64)             .store_coins(storage::dns_price_other)             .store_coins(storage::dns_price_minimum)             .store_uint(storage::percent, 8)             .store_uint(storage::auction_end_duration, 16)             .store_uint(storage::auction_prolongation, 16)             .store_uint(storage::min_dns_len, 8)             .store_uint(storage::max_dns_len, 8)         .end_cell()     ); }

#: () recv_internal(int msg_value, cell in_msg_full, slice in_msg_body) impure {     int my_balance = pair_first(get_balance());     slice cs = in_msg_full.begin_parse();     int flags = cs~load_uint(4);     if (flags & 1) { ;; ignore all bounced messages         return ();     }     slice sender_address = cs~load_msg_addr();     cs~load_msg_addr(); ;; skip dst     cs~load_coins(); ;; skip value     cs~skip_bits(1); ;; skip extracurrency collection     cs~load_coins(); ;; skip ihr_fee     int fwd_fee = cs~load_coins(); ;; we use message fwd_fee for estimation of forward_payload costs     load_data();     if (cell_null?(storage::content)) { ;; initialization         throw_unless(405, equal_slices_bits(storage::collection_address, sender_address));         slice from_address = in_msg_body~load_msg_addr();         storage::domain = in_msg_body~load_ref();         cell onchain_content = in_msg_body~load_dict();         storage::content = begin_cell().store_uint(0, 8).store_dict(onchain_content).end_cell();         storage::dns_price_other = in_msg_body~load_coins();         storage::dns_price_minimum = in_msg_body~load_coins();         storage::percent = in_msg_body~load_uint(8);         storage::auction_end_duration = in_msg_body~load_uint(16);         storage::auction_prolongation = in_msg_body~load_uint(16);         storage::min_dns_len = in_msg_body~load_uint(8);         storage::max_dns_len = in_msg_body~load_uint(8);          int seconds = now() - auction_start_time;         int months = seconds / one_month;         if (months > 12) {             months = 12;         }         int duration = auction_start_duration - (auction_start_duration - storage::auction_end_duration) * months / 12;         int auction_end_time = now() + duration;         storage::auction = pack_auction(from_address, msg_value, auction_end_time);         storage::last_fill_up_time = now();         save_data();         return ();     }     if (equal_slices_bits(storage::collection_address, sender_address)) {         slice from_address = in_msg_body~load_msg_addr();         send_msg(from_address, 0, 0, cur_lt(), null(), 64); ;; carry all the remaining value of the inbound message         return ();     }

rends_east: вот на этой строчке падает (reply to 313941)

rends_east: потому что вы выставляете в null (reply to 313941)

rends_east: Дарю, пользуйтесь Больше не выставляйте адреса в null slice null_addr() asm "b{00} PUSHSLICE"; (reply to 313945)

#: спасибо (reply to 313946)

#: можете сказать почему в контракте dns-item  при change_dns_record , если обрабатывается случай :  else {             keyvalue_map~udict_delete?(256, key);         }  то обновляется last_fill_up_time? то есть происходит продление

&rey: Потому что продление при любом подтверждении, что владелец всё ещё там и ему этот домен нужен. (reply to 313951)

#: то есть при продлении теряется dns smc address: и прочее что кладется в value после key?

#: или оно останется

#: я в тестнете вызвал продление домена и у меня last fill up time не поменялся. может стоит явно переопределить его значение через now() в блоке else (reply to 313952)

Artem: Как писать в этот чат?

Artem: Если сообщение просто удаляется

Никита: а ты всякую бяку не пиши (reply to 313960)

Artem: Да я и не писал, я спросить хотел  Есть ли готовые решения для быстрого создания частного дао или мультисиг кошелька? Чтоб пару кнопок нажал и у тебя "свой" фонд (reply to 313962)

Artem: В виде вебаппы, например (reply to 313963)

&rey: Ну, можно изучить https://multisig.ton.org/ (reply to 313963)

— 2025-07-17 —

fruitful-l: Подскажите, если я хочу узнать initial State контракта, на какие данные в сообщении мне нужно смотреть? Raw body самого сообщения деплоя?

rends_east: State init в этом сообщении (reply to 313978)

rends_east: От отдельным полем указывается

fruitful-l: Странно, когда парсил, там не хватало бит даже на адрес, хотя контракт деплоится и с ним, и еще с юинтами. Поскребу еще, спасибо! (reply to 313981)

Potato: Есть ли пулы дедаста в тестнете?

maksim: в чате дедаста вроде есть закреп с ссылками (reply to 313990)

Potato: Спасибо (reply to 313991)

AlexTAPX: Уважаемые умельцы кодов,  У меня вопрос,  Имеется нфт на кошельке, произошло обновление приложения, данное нфт новое приложение не видит, в чем может быть проблема ????

User: Проверьте ее наличие через tonscan или tonviewer. Может быть она посчиталась как спам и чтоб ее вернуть придется поковыряться в настройках кошелька (reply to 314002)

AlexTAPX: Спасибо огромное, так и есть (reply to 314003)

#: Кто создал FunC?

Petr: Николай Дуров

rends_east: Сколько боли... (reply to 314006)

Petr: I use Tolk btw (reply to 314008)

#: Fift тоже его работа ? (reply to 314008)

Petr: ага (reply to 314010)

Oleg: Так ли это? Разве не fiftом он ограничился? (reply to 314007)

Petr: Насколько я знаю нет, FunC тоже его детище (reply to 314012)

#: А там курс по фифту не планируют ?

Petr: Deep fifting изучается только на практике... (reply to 314014)

Refactor: Всем привет. У меня у одного проблема с liteserver? Сейчас пишу апи с ton4j, так подключиться не может ни к одному из серверов. Посмотрел стату - все норм. Это я неправильный, или список поменять надо?

#: Как в новом расширении получить опкод по названию ? (reply to 314016)

#: Раньше было “…”c

Petr: Хм, что-то я такой фичи не запомнил, сейчас гляну

#: У меня удаляют сообщения и не могу написать нормально (reply to 314023)

#: “withdraw”c например

#: Получал цифры и буквы и добавлял 0х

fruitful-l: Что-то знакомое, точно в tolk есть, про func не уверен (reply to 314025)

#: Просто как делать опкоды на толк и func , чтобы не придумывать самому их

Petr: Типа такого?

Petr: Спасибо что заметили! Действительно не перенес эту функциональность в новый плагин Не уверен что тут файлы можно прикреплять, могу отправить в личку сборку с фичей 🙂

#: Да (reply to 314029)

&rey: Ну, 0x00000001, 0x00000010, и так далее. По степеням двойки или шестнадцати))) (reply to 314028)

#: Скажите, а как можно определить уровень в разработке на func, tolk . Например junior, middle и тд . Как можно понять где ты сейчас находишься и куда двигаться ?

Petr: Я вот последние 5 лет пишу на Толке, думаю где-то джун+

Petr: С меньшим опытом сейчас не пробиться

#: Да согласен (reply to 314035)

#: Есть roadmap по senior Fift developer ?

&rey: Если ты сразу понимаешь контракт, то миддл+ Если ты можешь хотя бы как-то понять контракт без подсказок других (ретрейсер можно), то джун+ (reply to 314033)

&rey: Стоп-стоп. На сеньора надо знать отличие между TVM assembly и Fift. (reply to 314037)

fruitful-l: А без ретрейсера понять в смысле просто на хэш посмотреть?) (reply to 314038)

Petr: Это сеньор (reply to 314040)

Petr: Плюс понимать что у нас биткод, а не байткод (reply to 314039)

#: А не планируется контест для толка? Как было с тактом (reply to 314042)

Oleg: Сеньор в ассембли это как сферический конь в вакууме, вещь в себе, никому не нужен

Petr: Было бы круто, но вроде пока планов нет (reply to 314043)

fruitful-l: А вы не подскажете, подобное значит, что кошелек эмулировал транзакцию и она не успешная? Не совсем понимаю что это может значить

⛰️ Roman ⛰️: Посмотрев на сам код или на скомпилированную ячейку? (reply to 314038)

&rey: На код. Если что, скомпилированная ячейка — тоже код и может вдруг встретиться. (reply to 314047)

User: https://t.me/wallet_news_chat  Отпишите лучше сюда по поводу вашей проблемы (reply to 314046)

fruitful-l: Спасибо (reply to 314050)

Sasha: Приветствую всех, у меня есть порядка 300к кошельков и лайт сервер на 400рпс в секунду, мне нужно пропарсить их балансы, может у кого-то есть готовые скрипты и кто-то с таким работал?

— 2025-07-18 —

Aziz: Почему разные ответы блин)

Aziz: А тут так

&rey: Это два разных чейна вообще-то. (reply to 314068)

Aziz: Случайно не твоих рук дело? (reply to 314069)

&rey: Там всё начинали два разных набора валидаторов, вот и получился разный хеш начального блока. (reply to 314068)

Aziz: ну сейчас уже поздно менять, но блин в коде приходится условие писать откуда брать @extra : data[‘@extra’] или data.result[‘@extra’]

Aziz: просто переключиться на тестнет не могу, надо костылить

fruitful-l: Подскажите, какой оптимальный способ декодировать сообщения? Есть код контракта и хочу узнать какую Data он принял в момент деплоя. Заходить в эту транзакцию на трейсере и читать стек? Или можно проще?

maksim: если tlb сообщения нет то да, только реверсить через трейсер (reply to 314075)

Виктор: Кажется вы про разные вещи говорите (reply to 314072)

Виктор: Реально выглядит странно, будто у них просто ошибка в том как они отдают ответ (reply to 314068)

fruitful-l: Звучит грустно, но спасибо (reply to 314076)

Stanislav: Добрый день! Поднимаю архивную ноду. Архивы кое-как скачались (один архив долго не скачивался - 1.5 дня, видно никого не было на раздаче). Но теперь следующая проблема: скачанные блоки из /import импортируются ну очень медленно - ~3.2секунды на один архив (это сейчас где-то 30 блоков в секунду). При этом комп бодрый - CPU и SSD почти не заняты, памяти свободной куча. Может кто-то знает как ускорить? (Год назад, насколько я помню, архивная нода поднималась за 3-4 дня (время скачивание дампа). А сейчас по расчётам хорошо, если за месяц поднимется)  [ 2][t56][2025-07-18 10:04:50.468039124][import-db-slice-local.cpp:630][!archiveimport] Imported archive in 3.372804s : mc_seqno=1475028 shard_seqno=1475028 [ 2][t56][2025-07-18 10:07:07.278198452][import-db-slice-local.cpp:630][!archiveimport] Imported archive in 1.803361s : mc_seqno=1479311 shard_seqno=1479311 [ 2][t56][2025-07-18 10:14:28.481810498][import-db-slice-local.cpp:630][!archiveimport] Imported archive in 3.177046s : mc_seqno=1493099 shard_seqno=1493099 [ 2][t56][2025-07-18 10:14:48.289789577][import-db-slice-local.cpp:630][!archiveimport] Imported archive in 3.291380s : mc_seqno=1493699 shard_seqno=1493699 [ 2][t56][2025-07-18 10:18:46.290823427][import-db-slice-local.cpp:630][!archiveimport] Imported archive in 3.174280s : mc_seqno=1501099 shard_seqno=1501099 (reply to 311285)

Viktoriya: Всем привет!  Подскажите пожалуйста, есть ли какая-то возможность получить boc из tonConnectUI.sendTransaction() в веб-версии Телеграма? В мобильной и десктопной версии все работает ок, но в веб-версии столкнулись с такой проблемой, что при открытии кошелька происходит выход из бота, соответственно дождаться завершения транзакции и что-то сделать после невозможно.

User: С учетом специфики проблемы, скорее всего дело именно в веб клиенте. Попробуйте протестировать другую веб версию; чтоб на нее переключится нажмите три полоски слева наверху и выберите switch to K(A) и проверьте там (reply to 314087)

User: Я правильно понял что вы хотите чтоб в клиенте телеги у вас работали только текстовые сообщения и звонки?  Если так, то попробуйте заблокировать именно cdn сервер, который раздает картинки, может именно это и есть решение вашей проблемы. Ссылки можно подергать из веб версии  https://t.me/devs — и лучше вам задать этот вопрос там. Текущий чат, тематический по TON (reply to 314084)

Anton: Блокировка только CDN не решает проблему, пробовали много вариантов уже.  Спасибо, я там тоже написал конечно. (reply to 314091)

User: Можете уточнить какие характеристики у вашей ноды. В течении года произошло большое количество изменений и может ваше железо физически устарело (reply to 314086)

Андрей: Звучит как что то не оптимизированное в ноде, возможно что то работает в один поток (reply to 314086)

Viktoriya: Хм, да, переключение на версию K помогло, спасибо! Можно тогда просто проверять версию, думаю это решит проблему) (reply to 314089)

Stanislav: Характеристик должно хватать: AMD EPYC 7502, 3x SSD U.2 NVMe 3,84 TB Datacenter (собраны в один zfs пул), RAM 128 GB (4x 32768 MB DDR4 ECC), NIC 1 Gbit Intel I350 (reply to 314096)

Stanislav: Я тоже так подумал, возможно так и есть: import-db-slice-local.cpp void ArchiveImporterLocal::start_up() {   LOG(WARNING) << "Importing archive for masterchain seqno #" << shard_client_seqno_ + 1 << " from disk";   for (const std::string &path : to_import_files_) {     LOG(INFO) << "Importing file from disk " << path;     td::Status S = process_package(path);     if (S.is_error()) {       LOG(WARNING) << "Error processing package " << path << ": " << S;     }   }    process_masterchain_blocks(); } (reply to 314097)

Vor: Здравствуйте. Я создаю NFT-бота на базе TON и мне нужно отправлять/получать транзакции TON, включая автоматические платежи и доставку NFT. Пожалуйста, предоставьте мне ключ API. (reply to 314096)

Vor: Я не робот

Vor: Апи 🥲

&rey: 1. Которого апи? 2. Он вам точно нужен? (reply to 314110)

fruitful-l: Робот бы сказал так же (reply to 314111)

User: https://toncenter.com/ — вы можете получить апи ключ для взаимодействия с ton тут  Или тут — https://tonapi.io/  Выберите более подходящее апи исходя из вашего понимания работы с TON и NFT. Более user-friendly — tonapi, но и стоит он дороже. Toncenter некоторыми моментами более raw, но по ощущениям работает шустрее и выйдет дешевле в использовании (reply to 314110)

Ma><im: всем привет, у меня у одного проблемы с tonconnect?  кошелёк подключается, а окно с подтверждением транзакции не всплывает, пробовал библиотеки и на go, и на python и разные кошельки: tonkeeper и tonhub

&rey: Стандартные-то сайты по типу getgems работают? Другое подключение к интернету пробовали? (reply to 314118)

Combot: Combot выдал(а) предупреждение Вероника Князева (1/3) Reason: 1 reports (reply to 314120)

Олег: Момент, который перевернул всё (reply to 25048)

Denis: домен в манифесте какой? (reply to 314118)

Denis: никто не хочет случайно в тестнет форкбомбу кинуть?

Alexey: всегда хотим (reply to 314139)

Denis: не в службу а в дружбу? хочу посмотреть как более распределеная конструкция работает

NDA: а вы локально проверяете или на домене? @subden на localhost tonconnect еще работает? (reply to 314118)

Denis: вроде хотели сделать исключение но я не знаю выпилили ли.

NDA: чекнул, localhost не работает, по чужому manifest тоже (где-то с месяц назад еще работало))) (reply to 314144)

— 2025-07-19 —

Tim: Только что проверил, тонкипер подключился, транзакцию показал. Домен чужой. Что-то другое не работает? (reply to 314145)

fruitful-l: Подскажите, в чем может быть проблема подключения кошелька через мнемоник?  Указываю в .env WALLET_MNEMONIC, WALLET_VERSION, все перепроверил вручную, но когда запускаю npx blueprint run *script*, пишет, что подключено к кошельку по определенному адресу, не моему, да и вообще этот адрес не существует

User: Попробуйте папку temp удалить. И также, если вы на windows, то значение нужно устанавливать через окно переменных окружения, по крайней мере у меня env значения сами не подтягивались (reply to 314163)

fruitful-l: У меня папка temp вообще не создается, странно просто, что если я из .env файла удалю что-то, или поменяю версию, блюпринт ругается , то есть вроде видит ее (reply to 314164)

User: У меня было тоже самое, попробуйте в окне переменных окружения windows выставить сид фразу и версию кошелька (reply to 314165)

Егор: Всем привет, есть возможно глупый вопрос: а не существует репозитория с примерами смарт контрактов на tolk? никто не конвертировал или переписывал func примеры контрактов?

fruitful-l: Есть, в репо сравнения tolk и func - https://github.com/ton-blockchain/tolk-bench (reply to 314167)

Егор: спасибо большое (reply to 314168)

User: https://docs.ton.org/v3/documentation/smart-contracts/tolk/tolk-vs-func/in-short  Также есть пара разделов в официальной документации (reply to 314169)

Егор: понял, еще раз спасибо

fruitful-l: Так же просто две переменные, мнемоник и версия? Если да, то blueprint не видит (reply to 314166)

User: На винде оно их не видит, на linux подобных системах все ок.   В окне переменных засуньте их в Path, как python и тогда все должно зафурычить

fruitful-l: Оказывается надо было просто vs code перезапустить, чтобы он подхватил переменные, но он почему-то все равно подключается к не существующему адресу, хотя мнемоник правильный (reply to 314174)

User: Версию кошелька проверьте, правильно-ли вы ее указали (reply to 314176)

fruitful-l: Вот тут скорее всего проблема, W5 кошелек это не v5r1, да? (reply to 314177)

Denis: Нет. W5 это v5r1 (reply to 314179)

fruitful-l: Странно, тогда адрес должен нормальным быть (reply to 314180)

Denis: Я тред выше не читал но есть такая штука как subwallet_id и она зависит для v5 от тестнет/мейннет

Denis: Не все библиотеки это правильно поддерживают. Вот бы в тф был не только CEO, cmo, президент и т.п. а ещё CTO, который ходил бы и пиздил авторов библиотек. А ещё наняли по разработчику под каждый язык, посадили их в одну комнату чтобы они сидели пилили либы корректные под основные языки и обменивались лучшими практиками

fruitful-l: Мне получается просто молиться? Если да, то кому (reply to 314183)

User: Мне кажется дело в неправильно указанной версии кошелька или опечатке в сидке  export type WalletVersion =     | 'v1r1'     | 'v1r2'     | 'v1r3'     | 'v2r1'     | 'v2r2'     | 'v3r1'     | 'v3r2'     | 'v4'     | 'v4r1'     | 'v4r2'     | 'v5r1';  Вот все возможные, проверьте правильно-ли вы все указали  Или можете подождать, я вечером посмотрю что там именно происходит и выдам вам точный ответ и ссылку на форк с исправлениями (reply to 314184)

fruitful-l: Да, я отдельным логом вывожу мнемоник и версию на всякий и они совпадают с реальными, просто подключается не к тому адресу, версия v5r1,кошелек - W5, вроде все должно быть правильно (reply to 314185)

User: Можете скинуть адрес вашего кошелька сюда или в личку? (reply to 314186)

liminal: #OPENTOWORK Я блокчейн-разработчик (в основном TON) с опытом 3 года. Сейчас в поиске парт-тайм занятости/проектов. Что могу?                                                                                                          • Спроектировать протокол, смарт-контракты любой сложности  • Разработать web3/web2 бекенд на python                                                                                                                         • Проконсультировать на любую тему, касающуюся блокчейна TON и DeFi                                                                                                                                                          В ЛС поделюсь подробным опытом работы и CV

Илья: @holder_job_devs посмотри тут оферы (reply to 314189)

🏆: import { beginCell, toNano } from '@ton/core';  const transferPayload = beginCell()   .storeUint(0x5fcc3d14, 32)          // TEP-62 transfer opcode   .storeUint(0, 64)                   // query_id   .storeAddress(recipientAddress)    // new owner   .storeAddress(senderAddress)       // response destination (usually same)   .storeBit(0)                        // no custom payload   .storeCoins(toNano('0.01'))        // forward amount to recipient   .storeBit(0)                        // no forward payload   .endCell();  const transferPayloadBase64 = transferPayload.toBoc().toString('base64'); хочу отправить nft, это верный подход?   recipientAddress здесь обычный адрес кошелька

🏆: Еще такой вопрос, как мне тестировать работу с нфт в тестнете?  Я так понимаю, самому коллекцию создавать и тд

Daniel: Если в тестнете, то да. Еще можно через sandbox (reply to 314200)

Tim: Не надо так делать, вашу сидку украдут (reply to 314166)

Kiba: А где так написано? Это где-то из документации? Можете ссылку прислать? (reply to 314196)

Dmitry: https://github.com/ton-blockchain/TEPs/blob/master/text/0062-nft-standard.md  Upd: хотя где написано “usually same” - хз. По ссылке описание что там должно быть по смыслу (reply to 314203)

&rey: А лучше в keyring положить или в файлик в проекте? (reply to 314202)

🏆: я так понял это для подтверждения передачи, интересно, если его не передать, то что будет

Tim: Из keyring sandbox не достанет наверное. Поэтому остаются только файлы проекта, но их желательно тоже чистить (reply to 314206)

Dmitry: «Не передать» - напиминает «сотрите это» в фотошопе - а вместо непереданного что будет? :) (reply to 314207)

🏆: просто не добавлять этот параметр при вызове nft sc, этот параметр вроде как необязателен (reply to 314209)

⛰️ Roman ⛰️: если не передавать этот адрес, то на контракте остаются излишки TON (reply to 314207)

🏆: понял, что-то типа excess получается (reply to 314212)

⛰️ Roman ⛰️: А так все лишние ton передаются кому то

⛰️ Roman ⛰️: Так это он и есть (reply to 314213)

Dmitry: Он не maybe. Можете конечно попытаться положить нулевой адрес, но что будет если send message будет на нулевой адрес? :) (reply to 314210)

Dmitry: А если вы просто пропустите соотв storeAddress, то будет несоответствие схеме (reply to 314216)

⛰️ Roman ⛰️: В контрактах гетгемс продумано отсутствие response destination, если будет нулевой адрес, то лишние тон останутся на контракте (reply to 314216)

Kiba: Хочу найти где написано "usually same” и поменять на “usually sender” (reply to 314205)

🏆: у меня ещё вопрос вот такой появился, если нужна авторизация по NFT.  каким образом это сделать максимально минималистично. на счёт если это приложение, там достаточно просто, проверяем через api владеет ли человек nft определённой коллекции. я так понимаю, это максимум, что мы можем сделать (и этого достаточно), например авторизация через tonproof, nft лежит на кошельке значит всё ок или можно какое-то сообщение подписать о том, что мы владеем этим nft (и нужно ли это)?   второй случай, если ситуация такова, что физически находятся 2 устройства рядом, интернета нет, но есть доступ к кошельку на котором есть определённый nft.  может ли как-то проверяющий верифицировать у проверяемого наличие nft?  я так понимаю, что это невозможно.  если невозможно без интернета, так как нужно смотреть есть ли nft на кошельке через api, тогда я так понимаю нужно вызывать signData и сканировать например tonkeeper и таким образом подтверждается владение кошельком и уже по api смотреть есть ли там nft.  то есть интернет у верификатора обязателен, у проверяемого не обязательно, так как может подписать и оффлайн.  возможно я что-то намудрил в этом вопросе и получилось сумбурно.

Kiba: Этого достаточно, главное правильно тон пруф проверьте и делайте это на бекенде (reply to 314220)

Tim: Можно раз в Х минут скачивать дамп всех владельцев нфт на проверяющий оффлайн компьютер Потом тот кто хочет показать владение должен как-то доказать что у него есть доступ к адресу. Дефолтные тулзы не работают без интернета, тут только писать что-то свое (reply to 314220)

⛰️ Roman ⛰️: Через ton api можно получить NFT конкретного кошелька, а потом у этих NFT узнать метадату?

&rey: это вроде нормально  можно намудрить, чтобы проверяющий скачал ещё и доказательство блока, в котором нфт принадлежит ему; тогда верификатору интернета не надо (reply to 314220)

&rey: Из английского чата предупреждают.  Если вы ставите TC2 SDK для Go, проверьте, что это правильная версия, а не вирус! Несколько пакетов подделываются под cameo-engineering.

&rey: Интересно, как секция https://github.com/ton-community/ton-docs/blob/fd23c96e73274231d3485648d2c3f450d7594203/docs/v3/guidelines/ton-connect/guidelines/developers.mdx#ton-connect-go исчезла, конечно.

🏆: Это да, но тогда вдруг его отправили кому-то другому за это время, будет outdated информация. (reply to 314228)

🏆: Я ещё думал может в самом nft сделать какое-то поле, где подпись владельца как конечного, например.  И по QR коду как-то её получать, но мне кажется это может быть невозможно. На сколько я знаю, апи максимум разрашает пейлод подписать, я не думаю, что там можно какие-то поля, с каких-то кешированных nft в собственности доставать. Это уже такой узконаправленный костыль, под который апи не подстроено явным образом.

Sasha: Добрый вечер, занимаюсь сейчас миграцией балансов, столкнулся вот с какой штукой  msg := wallet.Message{  Mode: wallet.CarryAllRemainingBalance,  InternalMessage: &tlb.InternalMessage{   Bounce:  true,   DstAddr: outputAddressStr,  }, }  Использую Mode: 128 для того чтобы вывести с баланса все средства, но получаю 137 ошибку, т.е. нехватка средств для отправки сообщения, не сталкивался кто-то с таким?

Оскар: предполагаю что это в5, значит что тебе в mode надо добавить ignore errors,  137 как раз таки об этом и говорит (reply to 314242)

Sasha: Как не странно, это помогло. А можете пояснить почему так? Как я понял, у меня была ошибка из-за нехватки комисси, но как её игнорирвание дало возможность перевести деньги? (reply to 314243)

Оскар: это требует в5 воллет, тут комиссия никак не замешана, я не совсем понимаю откуда информация что "137 код это нехватка средств для отправки сообщения", когда у в5 это кастомый код который означает что нужно добавить ignore errors разве что какая нибудь ии сгаллюцинировала (reply to 314244)

fruitful-l: Подскажите, как в tolk поменять версию?

Petr: Как вариант поставить другую версию пакета tolk-js (reply to 314246)

Petr: Если это глобальная установка то поставить еще и нужную версию рядом (там один бинарник)

fruitful-l: Понял, спасибо (reply to 314248)

🏆: реально как-то по BOC понять какой контракт, какой метод и с какими параметрами вызывается?   вот, например, для продления доменов ссылка, чтобы ставку сделать: https://app.tonkeeper.com/transfer/0:d611b5066a798fa3def40b276211365b61f53a5182a35c0c50a963dc165ffc08?amount=1010000000&bin=te6cckEBAQEADgAAGE7RS2UAAAAAAAAADacdAXI=  bin это я так понимаю BOC: te6cckEBAQEADgAAGE7RS2UAAAAAAAAADacdAXI=  если раздекодить будет: 43fca2b5462da1ab6fce6d9fbd8d284b91784a6e9aa86890e19a0bca91b0daad x{4ED14B65000000000000000D}  Здесь, как минимум должно быть название домена, но если перевести этот hex в ascii/unicode там нет ничего подобного или там особенная какая-то кодировка?  const slice = Cell.fromBoc(boc)[0].beginParse();  const opcode = slice.loadUint(32); const queryId = slice.loadUint(64);  // Дальше идут аргументы: const newOwner = slice.loadAddress(); const responseDestination = slice.loadAddress();  const hasCustomPayload = slice.loadBit(); const customPayload = hasCustomPayload ? slice.loadRef() : null;  const forwardAmount = slice.loadCoins();  const hasForwardPayload = slice.loadBit(); const forwardPayload = hasForwardPayload ? slice.loadRef() : slice.loadRemainingBytes(); Это чисто для понимания и с целью дебага в будущем.

Alexey: Если контракт какой-то известный (как в этом случае), можно попробывать https://ton-cell-abi-viewer.vercel.app он раздекодит, в общем случае нельзя  ну и ещё логично, что в месседже о продлении домена, названия домена не будет (reply to 314251)

Denis: а где вы такую ссылку для продления взяли? она не правильная (reply to 314251)

🏆: тут скорее чтобы бид сделать на expired домены, чат есть такой тонднс называется и они там мелькают. (reply to 314253)

🏆: а, просто nft адрес его будет? что-то не подумал об этом  если бы вдруг там был действительно текст, я так понимаю он бы легко раздекодился в таком случае (reply to 314252)

Denis: это не чтобы бид сделать. а чтоб для протухшего домена перезапустить аукцион (reply to 314254)

Denis: и шлёшь ты эту команду уже на конкретный домен так что адрес его не нужен

Denis: https://tonviewer.com/EQA7h-jYk9RRcwSOjZnvAUcPe0VXhbSeSusMuwxzbxCacCZG?section=code

🏆: именно так, это я что-то перепутал.   для renew домена я так понимаю нужно вот эту операцию сделать (reply to 314257)

Denis: для ренью надо сделать любую операцию. но к сожалению нормально 100% работающее продление доменов безопасное при этом это удаление нулевой записи

Denis: https://tonviewer.com/transaction/251855353d66d845442a04142b3eb2d21547019067a6cee20d8b7907dc7c9624

🏆: и, я так понимаю, это должен делать только owner.  если сделать небезопасное, то можно попасть в ситуацию когда везде показывается (например на dns.ton.org), что домен продлён, а он, на самом деле, потом ресетнится? не знал о таком (reply to 314260)

Denis: да (reply to 314262)

Denis: ну там по сути только три метода успешно отработает и в случае если аукцион окончен и в случае если нет: трансфер, установка записи, удаление записи. транфер можно сделать самому себе, но это костыль какой-то устанаваливать запись не надо - может сломаться парсер какой-нить. удаление несуществующей - не на что не влияет а домен продляет (reply to 314262)

no name: Всем привет. Заметил что в толке есть такая штука: import "@stdlib/tvm-dicts"; В связи с этим вопрос. Подскажите, пожалуйста, можно ли в tolk создавать свои модули, чтобы их удобно импортировать через @, а не прописывать полный путь до файлов?

— 2025-07-20 —

Non Certain: Доброе утро всем!

Sasha: {"url":"","status":422,"headers":{"access-control-allow-origin":"*","access-control-expose-headers":"access-control-allow-origin","alt-svc":"h3=\":443\"; ma=86400","cf-cache-status":"DYNAMIC","cf-ray":"961416b24b75e86a-ARN","date":"Fri, 18 Jul 2025 18:37:09 GMT","server":"cloudflare","x-request-url":""},"response":""}  Добрый день, настроили ton-connect манифест, сталкиваемся вот с такой проблемой при подключении wallet in telegram, в чем может быть дело?

yo boy izu: Do you need tester? (reply to 314275)

Maximum: Всем привет! Нужен человек написать простой смарт контракт маркетплейса Подробности в личку

Combot: Combot выдал(а) предупреждение yo boy izu (1/3) Reason: 1 reports (reply to 314272)

X1ag: hi, подскажите пожалуйста почему падает последняя транзакция? https://testnet.tonviewer.com/transaction/2cb31139d1157a5cf2354fcc15970f8b13771f88a931b3f26722917abb277a1c  Отправляю нфт, но почему-то excess не проходит. exit code 7912. Походил по исходникам контрактов поискал ошибку - не нашел

sd: Так это разве не твой контракт генерит ошибку? kQAFI_s0UKj9BurlWDhM9F9iO8CtmTONR18vt1I8ZJlQyWQ3 (reply to 314284)

X1ag: а, да, мой, спасибо, затупил (reply to 314285)

Wow: возможно прокинуть конекшн к тон кошельку (через тон коннект) на разные устройства?   условно я на одном устройстве открыл мини апку, подключил кошелек, а на другом устройстве захожу - а она уже подключена

I: Всем салют!  Хочу вкатиться в блокчейн-разработку. После беглого сравнения характеристик крупных сетей, заинтересовал TON.   Реквестирую roadmap или любые советы в свободной форме по теме - с чего начинать, чем продолжать.  Бэкграунд: последние лет 7 занимаюсь в основном бэкендом в финтехе на высокоуровневых языках, так же есть опыт с железками и ассемблерами.

Punk: Привет! Roadmap по Tact - https://docs.tact-lang.org/book/learn-tact-in-y-minutes/. Высокоуровневый ЯП для смарт-контрактов. Он TS-подобный, поэтому может стать неплохим первым ЯП в смарт-контрактах. Дальше лучше учить TOLK, т.к. это FunC 2.0., по крайней мере, так его разрекламировали. (reply to 314292)

Oleg: Интересно, по каким характеристикам заинтересовал именно TON (reply to 314292)

fruitful-l: А есть разве L1 блокчейны со стоимостью транзакций ниже чем в тон? (reply to 314295)

Oleg: 0.005 доллара есть, но оценивать только по стоимости транз то такое

Denis: у него нормальная архитектура. внезапно (reply to 314295)

fruitful-l: Я в эфире случайно хэш сохранил в контракте, стоимость деплоя в тестнет составила 6 352$ 😓 (reply to 314297)

Oleg: Немаловажно. Но впервые вкатываясь в блокчейн надо оценивать не в последнюю очередь востребованность разработчиков на рынке, например (reply to 314298)

I: Насколько смог судить из своих пока околонулевых знаний: интересная реализация PoS, TPS выше конкурентов, очень комплексная и сложная архитектура (догадываюсь что у вас это скорее вызывает боль, чем интерес, но я пока очарован) (reply to 314295)

I: Это я нагуглил, спасибо. Больше по технологиям, паттернам интересно. (reply to 314294)

&rey: Tact by Example о простых паттернах. (reply to 314302)

fruitful-l: А у тона не такая же обыкновенная реализация PoS как у нового эфира? (reply to 314301)

Oleg: TPS да, но это в среднем по блокчейну. Для вашего конкретного dApp скорость может разочаровать) Самая необычная вещь - это неатомарные транзакции, которые могут порождать длинные цепочки сообщений и в результате исполняться долго (reply to 314301)

&rey: Ну если мы говорим по-тоновски, то неатомарные деревья транзакций)) (reply to 314305)

I: Неатомарные транзакции - звучит не очень хорошо )

Petr: Привет Нет, но в будущем появятся полноценные модули с возможностью импортировать/экспортировать только конкретные функции/структуры/тд, возможно будут и какие-то возможности по алиасу путей модулей (reply to 314266)

Petr: Но в целом, с IDE которые автоматически импортируют файлы, даже сейчас кажется это небольшая проблема

I: Я про PoW внутри PoS для решения проблемы с кучей монет, сосредоточенных в руках создателей сети. Возможно я ошибаюсь, поправьте если это не так (reply to 314304)

&rey: Этот самый PoW, во-первых, уже закончился (если не считать того, что часть майнеров с совсем неактивными кошельками заморозили), во-вторых, он не является частью протокола консенсуса — всё на смарт-контрактах было. (reply to 314310)

I: Можете поподробней? Неатомарные в каком смысле? В смысле исполнения вм? (быстро не гуглится) (reply to 314306)

&rey: Каждая отдельная транзакция исполняется атомарно на ОДНОМ контракте. То есть, жетон-кошельку пришёл ордер "переведи то-то", он всё проверит и поменяет баланс атомарно, но вот зачисление получателю будет уже в другой транзакции. (reply to 314312)

I: А если нужно провести 2 правки баланса, они тоже могут оказаться в разных транзакциях?

&rey: Всё зависит от того, как именно написан контракт!  Если мы говорим о толке, то вызов onInternalMessage / onExternalMessage атомарен, но только после завершения твм что-то там будет отправляться. (reply to 314314)

&rey: Может, есть какой-то пример, на котором разобрать?

fruitful-l: Есть задачка на эту тему в hacktheton, https://www.hacktheton.com/en/level/partial (reply to 314316)

⛰️ Roman ⛰️: Почему такой хайп на Толк, кроме синтаксиса? У него комиссии меньше чем в FunC?

Pavel: По газу более оптимизированный, да (reply to 314319)

Alexey: Да он просто более выразительный, структуры и их автоматическая распаковка/упаковка решают (reply to 314319)

⛰️ Roman ⛰️: А на нём уже есть примеры всех актуальных контрактов GetGems? (reply to 314321)

Alexey: При чём тут гетгемс? Примеры контрактов есть тут https://github.com/ton-blockchain/tolk-bench/tree/master/contracts_Tolk (reply to 314322)

🏆: какой из них аналог гетгемс?  актуальный jetton контракт очень полезен, ещё бы пример highload wallet (reply to 314323)

Daniel: Можно же v5 использовать, либо ручками написать highload (reply to 314330)

🏆: преимущества невелики? (reply to 314338)

Daniel: Я бы даже сказал, удобнее с v5 работать. Highload был более оптимизированным по газу на FunC (reply to 314340)

🏆: var valid: bool = true; var result: bool = (x > 0);  if (valid) { // accepts bool     // code }  // Cast to int if needed var intValue = valid as int; // -1 for true, 0 for false почему в talk вот так? на сколько я помню, в TS иначе, плюс если конвертировать в unsigned int там ещё веселее всё будет)

⛰️ Roman ⛰️: В TVM -1 значит true, 0 false (reply to 314342)

Denis: Наоборот. С хайлоадом легко работать, но в5 дешевле (reply to 314341)

— 2025-07-21 —

Creator: Всем привет Подскажите, кто то встречал такую штуку? Проблема возникает как то "через раз".  При бродкасте транзакции ошибка:  'LITE_SERVER_UNKNOWN: cannot send external message : duplicate message'  Но транзакция появляется в блокчейне и успешна.  Использую api/v2

&rey: Хорошо же. Значит, в мемпуле уже есть этот экстернал. (reply to 314375)

maksim: Или еще вариант - такой же экстернал был не принят сколько-то раз контрактами и был добавлен валиками в банлист от спама на 15 минут (reply to 314376)

æ: Ребят, кто может бота телеграмм синхронизировать с приложением, что бы в этом боте возможно было сдавать в аренду анон.номера телеграмм за usdt  Есть бот мажор, но там оплата в токенах мажор а не юсдт….  Хорошо заплачу за ваши труды, если вы в силах это реализовать

Nikolaй: не тот чат, извиняюсь)

Егор: Друзья всем привет

Егор: Подскажите пожалуйста , это скам?

Vladimir: Скам. (reply to 314395)

Егор: Спасибо !

🏆: Что почитать о tolk? Официальную документацию почитал, найти бы примеры маркетплейса или примеры каких-то методов из 'stdlib', как для такта только для толка)

Леша: Никто бы такую цену не предложил за такой юзер (reply to 314395)

Petr: Поробуйте открыть stdlib в IDE, по сути там будет то же самое что и почитать Reference в документации Такта (reply to 314401)

Petr: Хотя не уверен что там много примеров...

Petr: Из доступных контрактов что можно почитать вроде есть только https://github.com/ton-blockchain/tolk-bench и https://github.com/Trinketer22/payment-channel-contract

Vlad: Я правильно понимаю, что если в номинатор пуле X тонов, где X > 900k, то [йилд номинатора] = 900K/X * [йилд при условии, что в пуле меньше 900K] ?

— 2025-07-22 —

Konstantin: Можно подробнее? (reply to 314383)

User<7324063964>: Гениально конечно было написать это в чат и выставить платные смс ) (reply to 314383)

XT: Я могу (reply to 314383)

User<7324063964>: Гит есть? (reply to 314443)

XT: Нет, есть миниапп готовая, но там про подарки. Могу показать, если хочешь (reply to 314444)

Alex M: Заняло чуть больше времени, чем хотелось бы, но мы вас услышали. (reply to 312498)

Combot: Combot выдал(а) предупреждение Дмитрий (1/3) Reason: 1 reports (reply to 314455)

Viacheslav: привет. а есть пример валидации меркл пруфов в func? хочу минт нфт сделать по пруфам. дерево на сайте сгенерить

rends_east: Посмотри реализацию mintless жеттона, там есть (reply to 314458)

koper: Это скам? Я не уверен,что мой юз стоит и 5$

Vladimir: Скам. (reply to 314463)

MouseViil: Всем привет! Перевожу USDT и не могу найти notify

MouseViil: ae5e80e57 42018b115dfc32e5e5874a78e122173690d7 a1a3f8fba9b1de1cf5c

MouseViil: Как такое вообще возможно, что контракт не шлет нотификашку?

&rey: Отправитель попросил форвардить ноль. Стандарт TEP-74 такое явно поддерживает. (reply to 314479)

MouseViil: То есть? Я немного не понимаю (reply to 314487)

MouseViil: Разве сам контракт USDT не кидает нотификашку?

&rey: Отправитель задаёт, какой текст/ячейку переслать получателю (forward_payload) и сколько нанотонов (forward_ton_amount). Там можно задать ноль. (reply to 314488)

MouseViil: то есть forward_ton_amount если 0, то нотификашка не отправляется?

MouseViil: а есть тогда более верный способ отследить трансфер жеттона?

&rey: Конечно. Следите за транзакциями на своём жетон-кошельке.

MouseViil: а на сколько это вообще гуд? (reply to 314493)

MouseViil: как будто бы jetton notify это стандарт же

&rey: Следить за уведомлениями — совсем не гуд. (reply to 314494)

MouseViil: вот даже в офф спеке написано, что надо чекать это

&rey: Отсутствие его при нуле — тоже стандарт. (reply to 314495)

MouseViil: а не знаете, отправляют ли кошельки пользователей нотификашки?  имеется ввиду, если порльзователь подпишет транзу через тот же тонкипер

&rey: Вероятно, кому-то очень лень писать индексеры (сервисы, которые мониторят все транзакции и распознают их значение).  Отправляют. По 1 нанотону. Разработчики ончейн-сервисов бесятся. (reply to 314497)

MouseViil: Это действительно лень) (reply to 314500)

MouseViil: надо протестировать, отправляют ли CEX это или нет

MouseViil: а второй вариант это чекать опкод 0x0f8a7ea5 на жеттон воллете?

&rey: Это третий вариант. Потому что этот опкод на отправителе будет только. (reply to 314503)

MouseViil: а какой самый верный тогда? (reply to 314504)

MouseViil: и чтобы не могли наскамать

&rey: Я могу порекомендовать tonapi или toncenter v3? (reply to 314505)

MouseViil: да, я им и пользуюсь, паршу tranascationByMasterchain (reply to 314507)

MouseViil: там и искал опкод нотификашки

Max: жеттон нотифай с 1 нанотоном скорее про отображение транзакций в истории твоего кошелька (reply to 314497)

Max: и ничего больше

MouseViil: ну в доке, как стандарт, поэтому я и использовал его, в общем мне лучше чекать 0x0f8a7ea5 у жеттон воллета? (reply to 314511)

Viacheslav: а как можно декодировать body запроса если я знаю типы данных ? deocde(rawData) ->  uint a= 5, uint b = 10 типа так чтобы было

&rey: "знаете типы данных" — в теории, или у вас там на такте/толке структура?  Желательно полную TL-B схему, либо достать тот враппер, который такт сгенерировал при компиляции. (reply to 314515)

Viacheslav: контракт на func и у меня есть его код(я его писал) (reply to 314516)

Viacheslav: хочу понять какие параметры юзер передал

&rey: Ну, s = Cell.one_from_boc('te6cck...').begin_parse(); s.load_uint(...) (reply to 314517)

Никита: Привет! Подскажите, как использовать @ton/crypto в React Native?   Я установил полифил Buffer и у меня ошибка:  TypeError: global.base64FromArrayBuffer is not a function (it is undefined)  Подскажите, пожалуйста, как это исправить?

Никита: В официальной документации для РН просят установить только expo-crypto, но это никак не помогло

/B4ckSl4sh\: А можно для девов сделать возможность импорта любого адреса?  Указываешь мнемонику/приватник, адрес, выбираешь интерфейс (w5, v4r2, хайлоад и т.д), и всё работает с кастомным воллетом  Грустно что этого ещё никто не сделал, вы можете быть первыми и единственными :) (reply to 314450)

&rey: Думаю, Tim это быстрее сделает в TonDevWallet) (reply to 314525)

/B4ckSl4sh\: Тон дев воллет топ, но я думаю до мобильных устройств там очень далеко, если они вообще есть в планах (reply to 314526)

Alex M: У нас есть view mode по адресу для любого кошелька (включая highload-ы) и теперь есть импорт любой версии через мнемонику или приватный ключ. А чего именно не хватает сейчас? (reply to 314525)

/B4ckSl4sh\: Возможности добавить кастомный кошелёк по мнемонике + адресу (reply to 314528)

Alex M: Для чего? (reply to 314529)

/B4ckSl4sh\: Чтобы была возможность свои самописные кошельки юзать из удобного графического интерфейса а не из самописных скриптов (reply to 314530)

/B4ckSl4sh\: Или например vanity-деплоенные кошельки :) (reply to 314531)

Alexey: если у тебя кошелёк кастомный, как разработчики узнают какой у твоего кастомного кошелька интерфейс?) (reply to 314529)

Alex M: Вам это нужно в режиме просмотра или в полноценном, с отправкой? (reply to 314531)

/B4ckSl4sh\: Так там выше я предлагаю ещё и интерфейс выбирать (reply to 314533)

/B4ckSl4sh\: В полноценном конечно (reply to 314534)

Alex M: Выше вы предлагаете выбор из существующих вариантов (w5, v4r2, хайлоад). Сейчас это и так возможно для всех основных версий, кроме хайлода. Как это сделать для самописных контрактов, я не очень понимаю. Выходит, задача сводится к поддержке управления хайлоадом из интерфейса? (reply to 314537)

/B4ckSl4sh\: Нет, я предлагаю выбор именно интерфейса из существующих вариантов (reply to 314538)

Alex M: Ещё раз — сейчас в MyTonWallet вы можете управлять любой версией, кроме хайлоада.  Если нужно что-то ещё, кроме хайлоада, напишите, что именно. (reply to 314539)

maksim: ну один из стандартов которые есть я так понял, включая все vX/разные хайлоады (reply to 314533)

/B4ckSl4sh\: Представьте ситуацию, при которой я хочу импортировать обычный walletV4R2 но задеплоенный через vanity (reply to 314540)

/B4ckSl4sh\: Я этого сейчас не могу сделать ни в одном из кошельков (reply to 314542)

/B4ckSl4sh\: Эта проблема решается добавлением возможности явного указания адреса импортируемого кошелька

fruitful-l: А subwallet_id каждый кошелек сам ставит как попало?

арсен: Здравствуйте, есть ли возможность выставлять подарок на перепродажу через апишку?

Vladimir: Да. Но Вам в чат, где работают с tdlib. (reply to 314551)

арсен: Спасибо

Vladimir: https://docs.ton.org/v3/guidelines/smart-contracts/howto/wallet#subwallet-ids (reply to 314545)

Vladуslav: Всем привет! Проблема: Есть приложение на React с @tonconnect/ui-react Обернул в TonConnectUIProvider и закинул манифест на прод сервак Манифест доступен по ссылке - проверял Тестировал на деве через ngrok, а сейчас при транзакции через tg кош в шапке показывается старое название от ngrok, хотя ссылка в коде стоит на продакшн манифест  Не могу понять с чем связано

Egor: @kyouma а почему не вынести всякие хелперы типа такого https://github.com/ton-connect/sdk/blob/main/packages/ui/src/app/utils/url-strategy-helpers.ts  в отдельный пакет, как делать кастомный редирект, условно я отключил modals в tonconnect?

Kiba: А какой юзкейс для такого пакета? (reply to 314558)

Egor: как без modals тригерить редирект, чтобы это работало и в браузере(будь то хром лиса итд) и в mini app? (reply to 314559)

Kiba: Кейс понял. Если бы у TON Connect UI был метод который при вызове редиректнет пользователя куда нужно — помогло бы? (reply to 314560)

Egor: ну думаю да, как правило это линк на кошелек (reply to 314561)

Egor: больше года назад уже сталкивался с этим и по крупицам приходилось выдирать, щас чет не очень хочется уже, признаться честно думал захендлили кейс))

Egor: по идее это вообще должен быть метод с опциональным параметром куда редирект делать, а внутри себя он использует уже сгенеренный линк будь то подключение кошелька или подписание транзакции, тк у них же там свои форматы что у deeplink что у universal link (reply to 314561)

Kiba: В реальности, даже ссылки надо по разному вызывать в зависимости от ее типа, платформы, и целевого приложения. Поэтому просто иметь ссылку будет не достаточно.   Но запрос понятен, добавим (reply to 314565)

Egor: таки да, потому что я такой а ну ка например гетгемс, так там кнопка это тупо ссылка ну и урл вида app.tonkeeper/tonconnect я подумал не уж так упростили а посмотрел код там тонна его (reply to 314566)

Egor: мб есть какой-то safety workaround пока что? (reply to 314566)

Kiba: У меня где-то была спека в виде матрицы, которая описывает все переходы, но не уверен что она в актуальном состоянии сейчас. Копирование файла к себе — пока что единственный вариант, который приходит в голову. (reply to 314568)

Egor: а как скоро эта фича может быть добавлена? (reply to 314569)

Kiba: В эту или следующую пятницу, подниму приоритет повыше (reply to 314570)

Egor: я бы тебе в лс написал от какого проекта запрос, но у тебя в лс только премы (reply to 314571)

— 2025-07-23 —

Ігор: Всем привет) Может кто то знает уже, как работает метод как в toncenter api/v2/getTransactions ?  Почему он возвращает столько транзакций, даже если я отправляю хеш, (и даже если lt) по которому нужно искать?

User: lt — Logical time of transaction to start with, must be sent with hash.  hash — Hash of transaction to start with, in base64 or hex encoding , must be sent with lt.  start with — "начиная с"! (reply to 314669)

Viacheslav: Привет. Хочу сделать mintless токенов, если юзеров скажем..100k, значит пруф будет большой-> сильно ли это повлияет на цену транзакции и есть ли ограничение на размер аргументов в контракт?вдруг пруф не влезет..

Daniel: Влезет (reply to 314675)

Viacheslav: пробую тестами, пока прошло 600 сек но merkle root еще не создался.. сколько ждать интересно)

Daniel: У вас информация о том, кому и сколько хранится на сервере, а в контракте условный хеш который проверяет достоверность информации на клейм (reply to 314675)

Viacheslav: да, но размер пруфа же растет с количеством листьев (reply to 314678)

Kiba: https://github.com/ton-connect/sdk/pull/403  в пятницу постараемся выпустить в beta версии (reply to 314570)

Combot: Combot выдал(а) предупреждение Мария Мальцева (1/3) Reason: 1 reports (reply to 314681)

Denis: зацените нововведение

/B4ckSl4sh\: А вы на ts собираете? (reply to 314677)

/B4ckSl4sh\: На go были методы которые за нормальное время работают

/B4ckSl4sh\: Не повляет. Цена на проверку пруфа одна, только форвард вырастет, но несущественно (reply to 314675)

Viacheslav: да, вообщем 100к уложилось в 900сек. но упал тест апдейта merkle tree почемуто хз. если начинат число записей превышать 10к в дереве, падают неосновные тесты, но клейм работает. например падае should reject merkle update      Error while executing transaction: Emulate transaction failed: [Error : -701 : cannot run message on account inbound external message rejected by account 4BD36CB9358167D6FBF6644E09FD4BBA5B4C1FA99FA2A73AB72B92454F8D2561 before smart-contract execution]

User: С учетом того что оно падает с условием, что дерево уходит за условные 10к, то можно предположить что не хватает TON внутри тестов, так что попробуйте повысить количество ton в sandbox и попробуйте обкатить все тесты снова (reply to 314691)

Andrey: А можно еще вот сюда добавить копирование адреса при наведении? (reply to 314686)

Denis: Давненько кстати не проводили сбора отзывов что вам не хватает в тонвьювере

Vladimir: И подкаст забросили. (reply to 314706)

🐼 Sild: boc-ов транзакций, месседжей, блоков и всего остального что так красиво распаршено и разложено по структуркам - но себе это забрать никак низяя... (reply to 314706)

🐼 Sild: еще не хватает перехода на "в какой mc_block включена транзакция/шард_блок"  Учитывая что переход с транзы в шард есть, достаточно перехода из шарда в mc_block в который попал этот шард (reply to 314710)

🐼 Sild: а еще в дереве транзакций было бы прикольно видеть стрелочки ext_out_msgs

Tim: Через тон кор большие пруфы создавать не стоит. Есть специальные решения для этого, но ссылку не помню. Или попробуйте на го (reply to 314677)

Viacheslav: могут быть баги? (reply to 314716)

Tim: Нет, просто очень медленно (reply to 314717)

Tim: А такая ошибка из-за неправильного вызова. До кода даже не дошло. Возможно вы посылаете экстернал >64кб (reply to 314691)

Denis: Типа кнопка копировать? Изи. (reply to 314710)

🐼 Sild: как для "copy raw body",  только транзу/сообщение целиком (reply to 314721)

Viacheslav: да, там два раза посылается пруф большой. тоесть теоретически если пруф будет оч большой то не будет работать (reply to 314719)

Tim: Я вроде проверял пруф на 1 миллион записей

Hamburger: Добрый вечер! Можете помочь как в testnet версии добавить пул?

User: Если вы хотите в тестовой сети добавить в пул вашу монету на условном дедасте, то к сожалению никаких решений с интерфейсом нет, так что придётся делать свое основываясь на dedust sdk. У stonfi насколько я помню, ситуация похожая (reply to 314732)

Hamburger: А на пайтоне можно? (reply to 314733)

User: Да, вбейте в Гугл, вам должна выйти Dedust sdk на пайтон от Пескаря (reply to 314734)

Hamburger: Я написал дипсику думаю он мне что-то напишет

Hamburger: А у кого есть адрес фабрики ( я не разбираюсь в этом но он начинается на 0: )

fruitful-l: Обратись лучше в девчат самого дедаста, https://t.me/dedust_dev_chat (reply to 314740)

Alexey: я мб единственный, кто использует tonviewer.com/emulate, но сделайте пж так чтоб там упавший экстернал тоже показывался в эмуляции, а не была ошибка 404 как тут https://tonviewer.com/emulate/b5ee9c720101020100aa0001df8801031560fdcf9d5524542336551f04fee5bfe32ad2e64bfcc07a6038dbb0257ff8036c84b0d446619691429dc364c794332b8aa482449f8c56fec38477ca641ba45dd8a9e699e3f31d8d918071e62ac4de11479343238fdf95af9c531dcf67b200514d4d18bb4409528800001ce01c01006a420040c5583f73e755491508cd9547c13fb96ff8cab4b992ff301e980e36ec095ffe2812a05f200000000000000000000000000000 (reply to 314706)

SB: Всем привет! Подскажите пожалуйста как продлить домен через Тонкипер?

XT: Возьми адрес домена в блокчейне и закинь на него TON (reply to 314743)

Denis: не единственный. как минимум это штатная функция tonkeeper signer. но тут есть проблемки конечно с показом если падает экстернал. нет экстернала - нет транзакции. а оно всё ориентировано на транзакции (reply to 314742)

SB: А где взять этот адрес?🤔 (reply to 314745)

XT: В блокчейне посмотреть (reply to 314747)

Denis: ну вообще в кипере на айос вроде кнопка продлить была. на андроиде будет в следующем релизе. а так на dns.ton.org вроде была кнопка (reply to 314743)

Denis: и ничего не случится. не надо слушать плохие советы (reply to 314745)

XT: Cмотрите. Я думал вот этот баланс, который на адресе домена находится, с него снимаются TON'ы за домен. Не правильно думал? (reply to 314750)

sd: Не правильно

XT: Когда баланс станет нулевым, домен пропадет или что-то с ним случится

XT: А этот баланс за что отвечает тогда? (reply to 314753)

XT: Как правильно тогда? (reply to 314753)

Not: существую daps и tma так в чём различие?  daps доступно из любой точки мира!?

sd: https://dns.ton.org/about.html (reply to 314757)

XT: Ни слова про вопрос не написано там, ответа нет (reply to 314759)

sd: там написано

XT: Ну, можете показать где именно написано

XT: Что написано? (reply to 314761)

XT: Это не адрес смартконракта домена?

sd: это адрес смартконтракта домена

XT: Если я туда отправляю TON'ы, пока баланс не станет 0, домен будет работать?

sd: ты написал, что с этого баланса чет там будет списываться, это в корне неверно, ключевой посыл цитаты выше в том, что овнер должен каждый год совершать действие с доменом и не может просто пополнить баланс чтобы что-то там оттуда списывалось

sd: можно раз в год отправлять 0.01 тон с адреса овнера на адрес контракта, нельзя пополнить на 1 тон и на 100 лет забыть про домен, через год он будет выставлен на аукцион

XT: Теперь понял

XT: Этот баланс не списывается?

sd: ну за хранение чет там будет списываться как у любого другого контракта, за сам домен платишь 1 раз там и так оверпрайс

XT: Почему тогда ничего не случится? (reply to 314750)

sd: Ну если с левого адреса отправишь не случится, надо именно с адреса овнера чёт сделать, в том числе можно кинуть немного тона

XT: А номера как работают, тоже каждый год закидывать надо или один раз закинул и все? (reply to 314775)

sd: телеграмовские коллекции вроде могут спокойно лежать мертвым грузом

SB: Если просто снять с продажи с Гетгемса то тоже автоматически продлевается домен на 365 дней. А если просто поменять цену на Гетгемсе - то не продлевается (reply to 314775)

sd: Так когда снимаешь с продажи у нфт меняется владелец и поэтому срок обновляется, а когда меняешь цену в контракте гетгемса - нфт этого просто не видит, ты трогаешь только контракт гетгемса (reply to 314779)

SB: Получается чтобы продлить домены, выставленные на продаже - надо сначала снять их с продажи, а потом заново выставить. Или есть способ легче?) (reply to 314780)

🏆: легче, видимо, только если бы продажный контракт гг умел продлять домены (reply to 314781)

ㅤㅤㅤ: Прикол: Создавал бота, Попросил GitHub Copilot помочь с одной проблемой, Он мне бота сломал...

Artem Dyakovich: Вот это прикол, очень странно, как такое возможно вообще, чтобы gpt мог что-то сломать

— 2025-07-24 —

Леша: Какой-то спам уже выходит с аккаунта жертвы (reply to 313063)

Hamburger: А кто знает обменники на testnet?

[P]rivanbi: Их нет, можете поднять свой только. Вам вчера ответили на данный вопрос (reply to 314796)

sd: Их есть https://t.me/tondev/281800 (reply to 314797)

&rey: Ну, вроде есть CryptoTestnetBot или что-то такое. (reply to 314796)

[P]rivanbi: Интерфейса нет.  Так думаю будет точнее. (reply to 314798)

Hamburger: Там ждать долго надо (reply to 314799)

Bоris: можно локально поднять блокчейн через mylocalton

Bоris: там можно выдавать себе монетки

Hamburger: А можно ссылку?

ADM 👍: [WARNING] Replacing pre-existing project main-artifact file: /home/test/MyLocalTon/target/MyLocalTon-1.0.jar with assembly file: /home/test/MyLocalTon/target/MyLocalTon.jar [INFO] [INFO] --- maven-assembly-plugin:3.6.0:single (default-cli) @ MyLocalTon --- [INFO] ------------------------------------------------------------------------ [INFO] BUILD FAILURE [INFO] ------------------------------------------------------------------------ [INFO] Total time:  01:06 min [INFO] Finished at: 2025-07-24T07:41:26Z [INFO] ------------------------------------------------------------------------ [ERROR] Failed to execute goal org.apache.maven.plugins:maven-assembly-plugin:3.6.0:single (default-cli) on project MyLocalTon: Error reading assemblies: No assembly descriptors found. -> [Help 1] [ERROR] [ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch. [ERROR] Re-run Maven using the -X switch to enable full debug logging. [ERROR] [ERROR] For more information about the errors and possible solutions, please read the following articles: [ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoExecutionException Здравствуйте, подскажите пожалуйста как исправить?

Alex: какой командой собираете? Попробуйте: mvn clean compile package -DskipTests (reply to 314816)

ADM 👍: Спасибо помогло, а не подскажете как потом запустить  08:33:12.677 [main] INFO  org.ton.mylocalton.main.Main - myLocalTon config file location: /home/test/MyLocalTon/myLocalTon/settings.json 08:33:12.682 [main] INFO  org.ton.mylocalton.main.Main - You are using headless version of Java. GUI will not be available. 08:33:12.684 [MyLocalTon - main] INFO  org.ton.mylocalton.main.Main - Starting application at path /home/test/MyLocalTon/target/MyLocalTon.jar 08:33:12.694 [ForkJoinPool.commonPool-worker-2] INFO  org.ton.mylocalton.utils.Extractor - Working Directory = /home/test/MyLocalTon 08:33:12.695 [ForkJoinPool.commonPool-worker-2] INFO  org.ton.mylocalton.utils.Extractor - Detected OS: Linux 08:33:12.761 [ForkJoinPool.commonPool-worker-2] INFO  org.ton.mylocalton.utils.Extractor - extracting ton-linux-x86_64 on linux 08:33:13.976 [ForkJoinPool.commonPool-worker-2] INFO  org.ton.mylocalton.utils.Extractor - Working Directory = /home/test/MyLocalTon 08:33:13.977 [ForkJoinPool.commonPool-worker-2] INFO  org.ton.mylocalton.utils.Extractor - Binaries already extracted. 08:33:13.978 [ForkJoinPool.commonPool-worker-2] INFO  o.t.m.executors.dhtserver.DhtServer - Initializing DHT server on node genesis 08:33:14.001 [DHT server on genesis] INFO  o.t.m.e.dhtserver.DhtServerExecutor - dht-server-genesis stopped 08:33:14.105 [ForkJoinPool.commonPool-worker-2] ERROR o.t.m.executors.dhtserver.DhtServer - Initialization of DHT server failed. File /home/test/MyLocalTon/myLocalTon/genesis/db/dht-server/config.json was not created. 08:33:14.106 [Thread-0] INFO  org.ton.mylocalton.db.DbPool - Closing database... 08:33:14.107 [Thread-0] INFO  o.t.mylocalton.utils.MyLocalTonUtils - Destroying external processes... (reply to 314819)

Alex: cd /home/test/MyLocalTon/target/ rm -rf ./myLocalTon java -jar MyLocalTon.jar (reply to 314823)

ㅤㅤㅤ: Я так долго с этим мучился, пока не понял как открывать  файлы 😭 (reply to 314827)

ADM 👍: Спасибо 🙏 (reply to 314827)

Viacheslav: вопрос по sbt токенам: в описании одного гитхаб проектан про sbt нашел такую фразу: Issuing (minting) Before mint, authority (collection owner) should verify wallet code offchain, and make sure that some tradeable contract is not used.  не пойму ее смысл - что тут надо проверять?

User: Потому-что при минте некоторых SBT судя по всему, код контракта передает сам пользователь, из-за чего если это не проверить, то в теории человек может задеплоить nft которую можно будет передавать, а это в свою очередь ломает весь концепт SBT  Скиньте ссылку на этот проект, я объясню почему именно такая система минта используется (reply to 314832)

Viacheslav: https://github.com/getgems-io/nft-contracts/blob/main/sbt.md зарание, спасибо (reply to 314834)

Алексей: все привет! у меня есть проблема, хочу задеплоить свой контракт коллекции, чтобы его было видно на GetGems, но метадату он не видит, можете сказать почему такое может быть?

Алексей: вот metadata https://brown-main-tick-967.mypinata.cloud/ipfs/bafkreiev3a7tuippwlqohqpd24yh54zu474o3gp36ijcxtrdr3vj5uq4h4 контракт: kQDSe9Vz7tsYI50coqXGFhZkFUjjZi6yBiyhdKrhemmErUGB

Алексей: также TonScanner не видит метадату, как и методов (reply to 314838)

Алексей: можно ли вообще как-то сделать свой смарт-контракт, чтобы его было видно на GetGems?

Алексей: но при этом всем я написал скрипт по получению данных из задеплоенного контракта, там выдает нужные результат

Viacheslav: Правильно ли я понимаю, что чтобы сделать sbt коллеацию, можно просто взять обычный контракт от нфт и просто item передавать sbt контракт для деплоя? тоесть nft-collection одинаковый и для нфт обычный и для сбт?  и второй вопрос: чем отличаются эти контракты: https://github.com/getgems-io/nft-contracts/blob/main/packages/contracts/sources/sbt-item.fc https://github.com/getgems-io/nft-contracts/blob/main/packages/contracts/sources/sbt-single.fc   ?

fruitful-l: Предполагаю, что у single.fc нет коллекции? (reply to 314844)

Viacheslav: хм.. мб - странный какойто тогда он - типа sbt в единственном числе

fruitful-l: Почему странный? (reply to 314846)

Viacheslav: не видел до этого чтобы коллекция была из одной нфт всего (reply to 314851)

Viacheslav: https://ton.access.orbs.network/55013c0ff5Bd3F8B62C092Ab4D238bEE463E5501/1/testnet/ton-api-v4/block/33563935/EQCAAmsKX0qzUyIyHtgk_8AStd2dAGaOc1AhFaSCvbQt2UId  почему может 500 отдавать? это в blueprint я пытаюсь деплоить контракт.  даже await provider.isContractDeployed(collection.address) вызывает ошибку 500

Viacheslav: а в другом blueprint другой контракт норм деплоится.. значит дело не в том что orbs прилег..

Anthony: 🚀 Tolk 1.0 – The New Standard for Smart Contracts on TON Blockchain!  Are you wondering which language to use for building on TON? 🤔 Tolk is TON Foundation’s recommended choice, and it’s here to elevate your smart contract game!  🔹 What’s New? Tolk 1.0 combines modern syntax and a streamlined experience with the performance and control that TON developers demand. It builds on FunC’s foundations, making smart contract development cleaner, more expressive, and more efficient.  🔹 Why Tolk? • Primary language for TON smart contracts • Modern syntax + cleaner structure • 40% less gas compared to FunC – cheaper deployments! • 🛠 Full tooling, IDE support, and migration from FunC  Tolk brings you better performance, easier coding, and lower costs while keeping the control you need. Whether you’re new to TON or scaling a complex app, Tolk is the go-to choice for TON development.  Start coding with Tolk today and build the future of TON! 🧑‍💻 (forwarded from TON Dev News)

Семен: А почему Primary language? Кто это так решил? А с тактом что? (reply to 314860)

Viacheslav: а с func что?

Viacheslav: хорошо что не начал учить такт, вышел толк😀

&rey: Ну, кстати, я переписываю контракты с фанси на толк, и оптимизации с загрузкой кусочка ячейки теперь делаются сами.

Viacheslav: пока все пепепишут на такт, время пройдет какоето.. я вот sbt ноом только на такте нашел, как тула меркл пруф встроить с func - не ясно🤣

&rey: А с тактом — это как для бэкенда выбирать между Rust, Go, TS и тому подобным — несколько вариантов будет.

/B4ckSl4sh\: а в чём проблема? типо begin parse exotic, проверяем тип экзотика, читаем хэш (reply to 314868)

maksim: https://github.com/tact-lang/dex/blob/main/sources/contracts/vaults/proofs/block-proof.tact  вот тут пруфы стейта и мерклы на такте, скоро к сорскоду выйдет статья от @B4ckSl4sh с подробностями логики (reply to 314868)

/B4ckSl4sh\: кстати если очень нужно сейчас, то пока есть драфт, его можно глянуть (он пока возможно сыроват, но тем не менее)  https://github.com/ton-community/ton-docs/pull/1334 (reply to 314871)

Семен: мне вот интересно. такт разрабатывается уже очень давно. а первый коммит толка в ноябре 24 года. и уже добавлен в монорепу тона! уже о нем все пишут! он уже primary language) а почему бы просто эти силы и средства не потратить на контрибьюшн в такт? был бы один язык современный для контрактов на тон. а не 100500 разных. сделать утилиты для конвертации кода с фанси на такт условно.  еще и код на си++ на котором пишет ну куда меньше народа чем на тайпскрипте на котором такт. да и си++ в 2025 году в блокчейне серьезно? когда раст де факто стандарт уже выглядит так как будто такт кому-то не угодил) и захотелось сделать что-то своё. хотя я думал такт и так делает связанная с тон фаундейшн организация TOP. (reply to 314868)

/B4ckSl4sh\: Нет. Такт разрабатывается TON Studio https://tonstudio.io/ (reply to 314874)

&rey: Возможно — подчеркну, что это не точно — что такт маленько зашёл в тупик. (reply to 314874)

Vladimir: Опять сейчас начнётся... (reply to 314877)

/B4ckSl4sh\: не (reply to 314878)

Семен: извиняюсь. перепутал. просто какой-то зоопарк как будто, не? такт вроде пришел когда фанси был заброшенным и не развивающимся проектом. то есть он решал конкретную задачу. а толк пришел когда есть уже целое комьюнити которое разрабатывает такт, зачем делить комьюнити на две группы (reply to 314875)

Petr: Практически нереально, в отличие от FunC->Tolk который как раз уже есть (reply to 314874)

/B4ckSl4sh\: Просто поверьте, что ситуация с языками очень сложная (гораздо сложнеее чем суждение о том, что какой-то из языков зашёл в тупик) и у любой позиции есть заинтересованные стороны

Petr: Он изначально начал разрабатываться там как форк FunC (reply to 314874)

Григорий: Ребята , всем привет !  Наверное, не по теме. Скажите пожалуйста , кто-нибудь работал с fragment ?  Сталкивались с покупкой/продажей username за TON?  Нуждаюсь в консультации) Спасибо всем😉

fruitful-l: У такта вроде команда значительно больше чем у tolk, разве нет? Мне кажется, что проблема явно не в неправильном распределении сил (reply to 314874)

Petr: Тем не менее ТОН написан на С++ и переписывать что-то на Раст сейчас имеет мало смысла (reply to 314874)

Семен: судя по коммитам в монорепе тона толк это язык разрабатываемый одним человеком (одним аккаунтом на гитхабе) в директории tolk/ там только от него коммиты с ноября (reply to 314885)

fruitful-l: Так по этой логике предложение заключается в том, чтобы этот человек тактом занимался?) (reply to 314874)

Андрей: Я даже знаю команду которая переписывала ноду тона с плюсов на раст, но далеко они не уехали (reply to 314886)

Семен: ну его код с нулевого дня в монорепе тона. прям в официальной. это не любительский проект с инициативой одного разработчика. особенно на фоне "Primary language" заявлений. наверняка есть финансирование и тд и тп. а почему бы просто Такт не дополнить?) зачем вместо решения одной проблемы создавать две (reply to 314888)

fruitful-l: Дополнить в смысле заново переписать? А если еще более оптимизированное решение будет - опять по новой? (reply to 314890)

Petr: Tolk это официальный проект TON Core, команды которая поддерживает ноды и TVM (reply to 314890)

Семен: А изначально Tact не они начали разрабатывать разве? У них в организации репа такта заархивированная. там какая-то древняя версия (reply to 314892)

Petr: Честно говоря про первые версии не помню, текущая точно разрабатывается ТОН Студией

Petr: У Толка другое видение решения проблем, оно не совпадает с видением Такта, поэтому нельзя просто взять и прийти в другой язык и сделать там так же (reply to 314890)

🐼 Sild: к расту есть вопросики. К с++ тоже есть вопросики, но к этим вопросикам все уже привыкли и знают что с ними делать. А больших систем на расте пока особо не написано, и это требует не меньшей квалификации чем на с++ (всякие авторы баз данных себе это позволить могут. Да и ребята из тона, судя по тому как они бодро обернули std в свое добро, тоже могут, но смысла в этом особо нет)  экосистема раста (которая мне очень нравится) пока куда менее качественна (в плане существующих библиотек), чем для с++  не kphp и на том спасибо (reply to 314874)

Anthony: Это рекомендация от TON Foundation.  Tolk и Tact внесли значительный вклад в развитие Developer Experience на TON. Благодаря упорной работе команд удалось достичь заметных результатов и значительно упростить процесс создания смарт-контрактов.  Особенно стоит отметить Tact, он реализовал то, о чём мы только мечтали пару лет назад, когда начинали разработку. Это показательный проект с точки зрения документации, тулинга, примеров и сообщества. Он задал для нас новый стандарт подхода к разработке.  Сегодня Tolk вобрал в себя лучшие идеи из разных языков программирования. При этом вариативность всё чаще мешает концентрации усилий технических команд и эффективной совместной работе, создавая энтропию в восприятии у разработчиков.  Именно поэтому мы хотим сконцентрироваться на одном решении, чтобы ещё быстрее продвигаться в развитии экосистемы. (reply to 314862)

Oleg: Не понимаю, чем так плюсы не угодили? Нода должна быть эффективной, и с этим плюсы отлично справляются

🐼 Sild: в основном, уб😐  еще немного cmake (reply to 314913)

/B4ckSl4sh\: А ещё, если мне не изменяет память, то в компиляторе фанси память течёт :)  Я не помню кто конкретно, но кто-то это выяснял, возможно Петя как раз (reply to 314914)

🐼 Sild: Для компилятора это не так то и страшно. Нефиг писать сложные контракты :D

Petr: Вроде была какая-то проблема да (reply to 314915)

Viacheslav: https://github.com/getgems-io/nft-contracts/tree/main  как тут запустить ts скрипты из packages? репозиторий без blueprint, тогда.. ts-node?

Viacheslav: а можите скинуть адрес задеплоенного sbt токена?  хочу посмотреть как он отображается - есть ли какая то разница на tonviwer между нфтшкой

Vladimir: Коллекция  EQArE6_3GESQqKwECcgQw-17cuF2_ObtDKqn3-sABG1uuezv (reply to 314920)

Viacheslav: tonviewer не понимает что это sbt, ну ок (reply to 314921)

fruitful-l: Подскажите, как на TS собрать и отправить кастомный Cell в сообщении?  Пытаюсь как-то так, но не то. (msg принимает Cell) provider.sender(),         {             value: toNano("0.15")         },         {             $$type: "EmergencyExecute",             msg: {                 $$type: "Grant",                 params...             }         }

fruitful-l: Grant структура из контракта на tact (reply to 314924)

fruitful-l: Или придется всё равно руками собирать?

User: @ton/core библиотека и дальше по tlb схеме beginCell()... по итогу вас должно получится что-то такое  В TS, формируете, отправляете beginCell().storeUint(0, 32)  В контракте, парсите, принимаете msg_body.loadUint(32) (reply to 314924)

fruitful-l: То есть нет возможности просто структуру отправить клеткой? Только считать op? (reply to 314927)

Андрей: beginCell().storeGrant(…).endCell(), пока что нет простого .toCell() для структур на TS (reply to 314924)

fruitful-l: Спасибо

Андрей: Под каждую структуру есть .storeX во врапперах (reply to 314929)

Алексей: ребята, может кто подсказать? (reply to 314838)

User: Вы изменили название гет методов, из-за чего невозможно определить что именно ваш контракт делает, и соответственно отображение метадаты тоже ломается  Чтоб все работало адекватно вы должны в своем контракте использовать теже гет методы, что и в обычной коллекции  Вот тут пример стандартного контракта коллекции: https://github.com/ton-blockchain/token-contract/blob/main/nft/nft-collection.fc (reply to 314932)

Алексей: хорошо, спасибо но есть проблемка, они у меня на Tact, есть такие примеры? (reply to 314933)

User: https://github.com/tact-lang/tact/blob/793ea9b6/src/benchmarks/contracts/nft-collection.tact  Вот (reply to 314934)

Алексей: дело именно в названиях get функциях именно? (reply to 314936)

User: Да, и в выдаче. Я не знаю что именно ваши гет функции возвращают, но должны возвращать для корректного отображения тоже самое, что и в стандартной функции (reply to 314937)

Андрей: И тоже самое принимать (reply to 314938)

Hamburger: Кто может помочь? Я хочу создать пул в testnet

User: SendStarGift что то такое было. Если вы имеете ввиду вывод в onchain, то посмотрите tlb схему и проверьте версию telethon (reply to 314942)

[P]rivanbi: Могу UI поднять за 200$ (reply to 314946)

[P]rivanbi: Пулы и так работают

Арсений: Всем привет

XT: Где спарсить курс звезд к TON и $?

Bоris: Для смарт контракта или для API?

XT: API (reply to 314955)

Виктор: Stonfi usdt/ton? (reply to 314956)

XT: А звезды? (reply to 314957)

Виктор: А, я не увидел

Gl: а как можно сформировать ссылку ton:// на перевод nft? в tonutils вроде только можно так сделать авторизовавшись в кошелек через мнемонику

Bоris: Где лучше всего посмотреть как работает стейкинг на уровне математики и смарт контрактов?

XT: Ну не все кошельки поддерживают ccылки эти ton:// (reply to 314960)

Denis: Тонкипер, тонхаб и майтонволлет поддерживают. У тонспейса другой формат но тоже есть (reply to 314962)

Denis: Остальные не поддерживают. Сейфпал лучше б не поддерживал вообще

Леша: На фрагменте страницу распарсить (reply to 314958)

XT: Да, но там нужно с авторизацией тогда, думал может проще есть варианты (reply to 314965)

Леша: Можешь платные апи поискать

Леша: Хм, а можно ли сделать жетон который привязан к курсу stars и насколько это вообще практично. С возможностью перебрасывать его в реальные звезды и обратно

Denis: Але. Курс звёзд прибит к доллару.

Denis: Возьмите курс тона к доллару и домножьте на коэффициент

Леша: Кто гарантирует, что курс звезд не будет изменяться? (reply to 314970)

Denis: 🍎 (reply to 314972)

Леша: Хм, ну да, обьективно

XT: Было два яблока

Denis: Одно из них было б5сплатн0е и бот его удалил

Леша: Чего

Леша: Б5сплатн0е в блоке?)

Леша: Какие-то жесткие правила

Denis: Это тон. Тут даже каждый бит платный. Причём дважды. Сперва за ячейку в которой он, а потом и за сам бит

Леша: Весело

Леша: Практично ли писать контракты на чистом асме?

Denis: Удачи (reply to 314988)

Леша: В контестах же пишут

Denis: Там легко за деревьями не увидеть леса

Леша: Логично

XT: Так и сделал, спасибо (reply to 314971)

Леша: А цена телеграмм премиума также к доллару прибита? (reply to 314991)

Оскар: да (reply to 314995)

inverness: подскажите пожалуйста, я скоро выпущу грубо говоря типо ноткоина, но намного улучшенную версию и вот вопрос - команда тона/тг как то помогает продвигать это, есть ли куда заявку кинуть и как помогают, если помогают вообще?

RootTon: Да тон фоундейшн, тон сасаети (reply to 315007)

Alexander: Коллеги, вот какой вопрос Sandbox контролирует очередь сообщений на исполнение и дает по ним итерировать (sendMessageIter), но никак иначе вмешаться в нее же нельзя?      Очень хочется писать тесты на "гонки", есть ли там разумный слой абстракций ниже Blockchain чтобы можно было управлять очередью. Или предполагается напротив что там нужно отнаследоваться  и просто рулить очередью?

&rey: Вроде это на тайпскрипте написано, так что можно... а инварианты порядка вы сами будете проверять? (reply to 315010)

inverness: и нормальный приход или не знаешь? (reply to 315009)

&rey: Суть том, что в сэндбоксе нет полной ноды, которая управляла бы всем этим порядком доставки сообщений. А некоторые инварианты всё-таки тон гарантирует. (reply to 315011)

&rey: Кстати, для любителей технических знаний: транзакции в тоне не до конца атомарные.  Два эффекта (а именно публикация либ и изменение Config) уезжают на границу мастерчейн-блоков. Состояние каждого отдельного контракта, конечно, атомарное.

— 2025-07-25 —

Egor: привет! ожидать сегодня? (reply to 314680)

maksim: Хочется разный порядок для экстерналов эмулировать или типо для out internal? (reply to 315010)

Denis: @toncishub тут сейчас идёт хороший стрим и потом вероятно будет запись о том как использовать вебхуки тонапи

Alexander: Интернелов которые порождаются промежуточными контрактами от двух и более экстерналов, желательно в составе большой системы контрактов (к одному-то можно в целом слать по одному и давать только одно сообщение исполнить).   Это на самом деле в том числе для всякого фаззинга итп. (reply to 315033)

Viacheslav: Привет. При деплое контракта через blueprint отправляю транзакцию и жду деплоя  await nftCollection.sendDeploy(provider.sender(), toNano('0.05')); await provider.waitForDeploy(nftCollection.address);  Sent transaction Awaiting contract deployment... [Attempt 8/10] AxiosError: Request failed with status code 500  хотя контракт задеплоился - почему такое может быть?

maksim: Есть тул, TSA https://tonan.tech/modes/checking-mode.html, который позволяет внедряться в исполнение твм и через хуки жизненного цикла что-то менять, возможно поможет  А вообще в идеале система контрактов не должна зависеть от порядка доставки асинк сообщений, там никаких гарантий на уровне сети нет (ну почти), даже если например сейчас в синглшарде они есть  И вообще с трудом по дизайну смартов могу придумать ситуацию где ордеринг может влиять на логику так, чтобы его нужно было тестить, если правильно понял вопрос (reply to 315041)

&rey: Гарантия есть, на практике по сути одна: Цепочки транзакций одной формы (то есть те, в которых одни и те же контракты на каждой позиции) сохраняют порядок — как они начались, в таком же порядке и закончатся.  Пусть меня поправят, если гарантий должно быть больше. (reply to 315043)

Denis: Ну ещё вроде если контракт А отправляют контракту Б два сообщения то они не могут доставиться в обратном порядке (reply to 315044)

Alexey: Кстати, а есть ли такая гарантия, что если контракт А отправляет два сообщению контракту Б, то контракт Б гарантированно получит сначала первое сообщение и потом тут же второе? То есть может ли контракт Б получить ещё одно сообщение между этими двумя от другого контракта?

/B4ckSl4sh\: Может (reply to 315051)

&rey: Может, конечно. Например, экстернал. (reply to 315051)

Alexey: Эх жаль

Max: вы опоздали на год, сейчас подарки в моде (reply to 315007)

/B4ckSl4sh\: Интернал тоже может кажется (reply to 315053)

Alexey: Нигде атомарности не получить

&rey: Ну как это? Записать флаг в контракте, лишние сообщения выкинуть/отбаунсить. (reply to 315057)

&rey: А вот как сделать lockfree/waitfree алгоритм, уже надо думать.

Alexey: Хочется сломать инвариант чужого контракта и тут же сломом этого инварианта воспользоваться) (reply to 315058)

/B4ckSl4sh\: Тут я кстати не уверен, экстерналы в блоке же после интерналов идут (reply to 315053)

&rey: Ну а два интернала могут в разных блоках прийти, вот и всё. (reply to 315061)

/B4ckSl4sh\: да, блин, это правда (reply to 315062)

[P]rivanbi: Одна приятность работать после фанси. (reply to 314860)

[P]rivanbi: Может кому-то необходимо сделать контракт или в команду нужны сотрудники ?

Gl:  const message: Transfer = {         $$type: 'Transfer',         query_id: 0n,         new_owner: address("EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c"),         response_destination: address("0QBq4ABgIx1uyZIbmACnXfB6P1moQBx9V8d9op_s1x4SHFRw"),         custom_payload: null,         forward_amount: 0n,         forward_payload: beginCell().endCell().asSlice()     }      await nftItem.send(         provider.sender(),         {             value: toNano('0.05'),         },         message     );  Почему когда я таким образом пытаюсь сформировать транзакцию на перевод она завершается неуспешно с exit_code=5?

Mikle: Чекай оп коды (reply to 315076)

Андрей: Range check error — an integer is out of its expected range.  https://docs.tact-lang.org/book/exit-codes/ (reply to 315076)

Андрей: Где-то в логике контракта ошибка с переполнением

Евгений: Привет, вот в этом релизе 2.3.0-beta.0 вышло Нужно обновить для тестов @tonconnect/ui-react или @tonconnect/ui, в зависимости от того, что используете  // if you don't use default modals and what to create an own, you can get a redirect callback which will redirects the user on call it const transaction = await tonConnectUi.sendTransaction(tx, {   onRequestSent: (redirectToWallet: () => void) => {          // call that function when user's make a click on the custom button     redirectToWallet();   } }); (reply to 315032)

Gl: Но когда я через tonkeeper меняю владельца то тела транзакций почти идентичные  Успешная: query_id: "6083770388665315016" new_owner: 0:274594d5504ab9443218750ab6a99268006315f8bae8073b84765bfe3b00df8d response_destination: 0:6ae00060231d6ec9921b9800a75df07a3f59a8401c7d57c77da29fecd71e121c custom_payload: null forward_amount: "1" forward_payload:   is_right: false   value: {}  неуспешная: query_id: 0 new_owner: 0:274594d5504ab9443218750ab6a99268006315f8bae8073b84765bfe3b00df8d response_destination: "" custom_payload: null forward_amount: "1" forward_payload:   is_right: false   value: {} (reply to 315080)

Андрей: от кошелька не зависит посылаемая транзакция, возможно на другой контракт отправляешь (reply to 315088)

Gl: идентичные контракты (reply to 315089)

Андрей: кинь хэши транзакций (reply to 315090)

Gl: 5d26be9774d988f8c98787351872d1471b0da3c3644e480ae9314f85146f56f8 f70458fe1d0350043d4c533d657580642eebebbab99204f2578b335b80269e42 (reply to 315091)

Андрей: Ты посылаешь маленькое количество ТОН во 2 транзакции, по логике контракта вычитается fwdFee от сообщения, а т.к ты послал маленькое кол-во тон < fwdFee получается отрицательное число (reply to 315092)

Андрей: точнее с учетом остальной логики*

Gl: я пробовал 2 тона указать, все равно неуспешно (reply to 315093)

Андрей: по транзакциям конретно этого айтема не было, когда ты отправил 0.15 уже было Cell underflow ( ты не положил 2 адрес )

Андрей: вообще что гораздо облегчит процесс дебага - код в чат

Андрей: а так есть пример НФТ https://github.com/tact-lang/tact/tree/main/src/benchmarks/nft/tact тут

大卫-Dawei: Hi I'm new here

Combot: Combot выдал(а) предупреждение T (1/3) Reason: 1 reports (reply to 315110)

KTO: Есть способ получить адрес Address.parse('адрес') Если он имеет формат address.ton?

Vladimir: Через API. (reply to 315115)

KTO: Спасибо, it's work (reply to 315116)

Роман: если отправить транзакцию не на одну ноду, а сразу паком на несколько (в надежде, что она попадет в как можно ближайший блок). Это хорошая тактика или сеть может накладывать наоборот штрафные санкции и понижать скорость, как в этом плане тон работает?

Viacheslav: Привет! А можно ли как то считать данные из стораджа контракта, если у него например нет method_id функции, которая отдает это значение?

Alexey: надо получить стейтинит контракта, оттуда вытащить дату и распарсить её. текущий стейтинит контракта может отдавать лайтсервер, ну и например через метод тонапи тоже можно /v2/blockchain/accounts/{account_id} (reply to 315120)

Viacheslav: спасибо. А почему вы пишите стейтинит, а не просто стейт? стейт init - это данные, которые были в сторадже при деплое именно.. через апи вроде да, можно получить и текущее значение стораджа (reply to 315122)

Alexey: да, наверное, понятнее было бы стейт сказать, но в тоне почему-то принятно стейтинитом также называть актуальный стейт (reply to 315123)

— 2025-07-26 —

Viacheslav: Привет. Объясните плз,  почему мы в нфт content не используем в state_init а прикрепляем его следом..и он как-то оказывается в сторадже..?  () deploy_nft_item(int item_index, cell nft_item_code, int amount, cell nft_content) impure {   cell state_init = calculate_nft_item_state_init(item_index, nft_item_code);   slice nft_address = calculate_nft_item_address(workchain(), state_init);   var msg = begin_cell()             .store_uint(0x18, 6)             .store_slice(nft_address)             .store_coins(amount)             .store_uint(4 + 2 + 1, 1 + 4 + 4 + 64 + 32 + 1 + 1 + 1)             .store_ref(state_init)  <------- только индекс и код             .store_ref(nft_content);  <---- индивидуальный контент

Pavel: В стейт инит его нету, потому что тогда не получится получить адрес нфт по индексу, надо будет еще и контент передавать, а в сторадж он записывается простт через load_ref (reply to 315149)

Viacheslav: а почему nft_content в отдельной cell звписывавется, хотя в самой nft все идет на уровне одной ячейки?  () store_data() impure {     set_data(             begin_cell()                     .store_uint(storage::index, 64)                     .store_slice(storage::collection_address)                     .store_slice(storage::owner_address)                     .store_ref(storage::content)                     .store_slice(storage::authority_address)                     .store_uint(storage::revoked_at, 64)                     .end_cell()     ); } (reply to 315150)

Oleg: Например, потому, что контент может быть большим? (reply to 315151)

Василий: Контент предполагает длинную строку в snake формате, либо словарь. Поэтому он кладется в отдельную клетку. (reply to 315151)

Viacheslav: но ведь. в сторадже нфт ячейка после collection_address не заканчивается, а идет тажа. а при деплое 2 ячейки (в коллекции) (reply to 315153)

fruitful-l: Она и не должна заканчиваться, хранит ссылку на ячейку с контентом (reply to 315151)

Viacheslav: при деплое: стейтинит и контент-в разных ячецках скажем..в одной плоскасти.  а в самой нфт: контент ячейка внутри основной ячейки (reply to 315155)

fruitful-l: Вообще не понимаю, что это может значить (reply to 315156)

Viacheslav: тогда вечером спрошу. сейчас не у компа уже) (reply to 315158)

Андрей: Это для того, чтобы можно было без контента считать адрес НФТ (reply to 315156)

Василий: Вам выше уже пытались объяснить, что StateInit определяет адрес контракта (в данном случае айтема), поэтому в нем только индекс и адрес коллекции. Это позволяет найти айтем коллекции по индексу. Второстепенные данные, которые не должны влиять на расчет адреса, добавляются в стейт из тела init сообщения, а не StateInit (reply to 315156)

Viacheslav: в nftItem после  collectionAddress должно быть endcell м начинаться новая тогда

Viacheslav: данные из дрвгих ячеек не влияют на адрес получается, если они в жругой ячейке (reply to 315161)

Василий: Дело не в другой ячейке, а в том, что на адрес влияет ТОЛЬКО StateInit. Все что происходит в фазе исполнения, происходит уже после расчета адреса (reply to 315163)

Viacheslav: я думал ари деплое нфт нет фазы исполнения.. никакой опкод же не вызывается хмм

Василий: https://github.com/ton-blockchain/nft-contract/blob/main/nft/nft-item.fc#L118  Вот что происходит (reply to 315165)

Viacheslav: аа. спс! (reply to 315166)

..ᴛᴀᴡɪʟOne..: Всем привет.  Я бы хотел узнать,с чего начать, чтобы участвовать в Hack a Ton? Если я не знаю ничего про код и разработку

L30n1d: узнать про код и разработку (reply to 315178)

User: Чтоб участвовать в хакатоне вам необходимо хотя-бы минимально понимать логику и программирование. Начинайте изучение программирования с помощью ютуба и где-то после 3-6 месяцев усердной работы вкатываетесь в разработку именно в TON с помощью документации docs.ton.org  Если вы ваши знания в математике достаточно хороши(желательно также охватывающие чуть-чуть выш мат), то особо сложных моментов, вы в программировании не увидите (reply to 315178)

..ᴛᴀᴡɪʟOne..: А какой язык желательно изучать? (reply to 315183)

fruitful-l: Именно для TON? (reply to 315184)

..ᴛᴀᴡɪʟOne..: Да

User: Если вы математик, то вкатывайтесь уже адекватно в строго типизированные языки. Если совсем 0 опыта, то python  Тут я вам долго могу расписывать всякое, но лучше откройте chat gpt или подобного бота и проконсультируйтесь с ним, он вас сможет направить достаточно точно, или просто прогуглите, роликов на ютубе хватает.   С нуля в TON, в условный func/tolk на моей памяти никто не вкатывался, так что про блокчейн разработку можно на ближайшее время забыть (reply to 315184)

Viacheslav: все 3🤣🤣🤣

..ᴛᴀᴡɪʟOne..: Хорошо. Спасибо большое! (reply to 315187)

&rey: Tolk/Tact, TS (большинство интерфейсов на нём написано, пригодится), FunC в качестве истории. (reply to 315184)

fruitful-l: А как будто разобравшись в FunC, намного проще становится понимать, что происходит в языках с большей абстракцией (reply to 315190)

&rey: Заменяется, думаю, парой Tolk + TVM assembly. (reply to 315191)

fruitful-l: А его не тяжеловато будет с нуля учить? (reply to 315192)

🐼 Sild: Керниган и Ритчи были бы вами недовольны.

&rey: Ну, тот факт, что книги по тону пока ещё нет, исправим. Исправляется, я бы даже сказал. (reply to 315194)

Denis: Тебе вайтпейперы переверстать под книжный формат и распечатать? (reply to 315195)

&rey: Вайтпеперы не объясняют, КАК контракты и системы контрактов делать.  Но если есть вайтпепер тонапи, я его с удовольствием почитаю. (reply to 315197)

AL Pamblus: Здравствуйте чат.  Мне нужен код, где я могу  ввести приватный ключ,  и лучше любое значение(без BIP39) по которому создастся кошелёк V1 всех версий.  дам 1 TON за помощь

User: https://github.com/nessshon/tonutils/blob/main/examples/wallet/create_wallet.py  Посмотрите пример с помощью tonutils. По большому счету вам нужно просто переделать часть с созданием кошелька(Заменить create на from_private_key) и ваша задача решена (reply to 315199)

Oleg: Формальное описание С занимает чуть больше одной страницы. Вообще несопоставимо с тоновскими языками (reply to 315194)

AL Pamblus: а там V1 нет? (reply to 315200)

User: Пардон, не увидел  библиотека — https://github.com/ton-org/ton/tree/master  документация — https://ton-community.github.io/ton/  Вот тут точно есть v1 кошелек. Система взаимодействия схожа. Думаю с GPT разобраться сможете. Язык TypeScript  Пример создания кошелька лежит прям в README (reply to 315202)

AL Pamblus: Я использовал xssnick/tonutils-go  но не смог разобраться как писать версии кошельков..

.: Друзья,помогите пожалуйста,какой стек у мини аппов, что к чему и что на чем сделано, какие фреймворки/библиотеки итд?

User: Это чат разработки для TON. Спросите это в чате https://t.me/devs и вам ответят (reply to 315208)

Potato: nometa.xyz (reply to 315208)

Viacheslav: Зачем в nft item проверка на init?, если такая транза может придти всего 1 раз и можно только проверять что она от collection_address? И разьме может быть nft item быть не инициализированным но задеплонным?  это же во время деплоя все происходит      (int init?, int index, slice collection_address, slice owner_address, cell content) = load_data();     if (~ init?) {       throw_unless(405, equal_slices(collection_address, sender_address));       store_data(index, collection_address, in_msg_body~load_msg_addr(), in_msg_body~load_ref());       return ();     }

Viacheslav: в каких случаях может такое быть - никак не пойму..

Denis: При инициализации ему проставляется индивидуал контент и владелец. А деплоится айтем это просто кто-то прислал валидный базовый стейт и немного тон, но не обязательно коллекция (reply to 315212)

Viacheslav: мб достаточно было бы проверять запрос от коллекции или нет..  тоесть не может быть случая, когда item инициализирован и идет запрос от коллекции..

&rey: А почему не может? (reply to 315218)

Viacheslav: а какой может быть запрос к nft item от коллекции кроме деплоя? никакого.. (reply to 315219)

&rey: А что мешает второму деплою? (reply to 315221)

Viacheslav: int item_index = in_msg_body~load_uint(64);       throw_unless(402, item_index <= next_item_index); (reply to 315222)

&rey: ну, item_index=0 первый раз, item_index=0 второй раз (reply to 315223)

Viacheslav: идет инкремент же в коллекции next_item_index += 1; и не получиться 2 раза вызвать деплой одного и тогоже index.. (reply to 315224)

Combot: Combot выдал(а) предупреждение st1mul (1/3) Reason: 1 reports (reply to 315228)

Viacheslav: тоесть это ошибка админа скажем так.. (reply to 315224)

— 2025-07-27 —

fruitful-l: У меня галлюцинации, или где-то всё-таки была русская версия этого канала? Хочу про фифт посмотреть у них, но ролик с переводом на английский не очень качественный

fruitful-l: Поиск не находит, ссылка в доках на ру версию ролика про фифт - никуда не ведет (reply to 315237)

[P]rivanbi: Здравствуйте чат,  дайте ссылки на каналы,чаты с вакансии по тма и тон пожалуйста.

User: https://t.me/tonhunt (reply to 315244)

[P]rivanbi: Более простые от частников возможно есть (reply to 315245)

Mirka: Был канал, но пропал куда-то некоторое время назад (reply to 315237)

Asher: я закрыл проект. (reply to 315238)

Anthony: А видео на русском удалили? (reply to 315251)

fruitful-l: Учитывая, что канала теперь в принципе нет - видимо да (reply to 315252)

Серёга: Здарова всем, а какая +- комиссия в сети тон? Там пару центов или как?

Daniel: Зависит от количества операций в смарт-контракте. В основном, всегда маленькая, несколько центов (reply to 315257)

Mirka: От пары центов (reply to 315257)

Muslim: Privet Pamblus (reply to 315205)

Андрей: По давнему стандарту на фанси такая ситуация может быть (reply to 315226)

— 2025-07-28 —

Никита: Всем привет, можно как то из транзакции получить исходники смарта ?

Никита: в целом, какие есть варианты получить смарт контракт/его исходники ?

Oleg: Исходники на асме в общем случае, и нормальные исходники в случае, если контракт верифицирован (reply to 315289)

Никита: кто такой асме.... (reply to 315291)

fruitful-l: Ассемблер tvm (reply to 315292)

Oleg: В кодах TVM иными словами (reply to 315292)

Andrey: Удалять видео было не обязательно… (reply to 315251)

Никита: Всем привет! Подскажи, пожалуйста, как исправить ошибку в @ton/crypto. При генерации мнемоники появляется ошибка  TypeError: Cannot read property 'derive' of null react-native-fast-pbkdf2 установлена, полифил Buffer стоит

&rey: Контекст страницы secure или нет? (reply to 315304)

Никита: ?

Никита: я просто в useEffect вызываю await mnemonicNew()

&rey: Страница пришла по HTTPS, HTTP или с localhost?

Никита: expo react native, localhost (reply to 315309)

Никита: ну в expo go запускаю

Никита: полифилы

&rey: Какой-то куцый полифилл Crypto, там много какие функции нужны.   Если в консоли браузера на вашем сайте ввести console.log(crypto.subtle), то что выведется? (reply to 315314)

Никита: undefined

Никита: для соланы было достаточно 😅 (reply to 315315)

&rey: Уберите полифилл Crypto в принципе, и оно будет работать лучше. (reply to 315316)

Никита: не-а, ошибка осталась (reply to 315318)

Никита: Все лишнее убрал. Оставил только Buffer. Ошибка осталась.  Решил попробовать создать новый проект RN, там же, mnemonicNew() ничего не возвращал (reply to 315314)

Asher: Все видео уроки доступны слушателям всех трех потоков. Для общего доступа канал закрыт. (reply to 315295)

Egor: а это тестировали? (reply to 315087)

Евгений: да (reply to 315335)

Egor: у меня в консоли показывает редирект якобы но не редиректит но не редеректит (reply to 315336)

Egor: а редирект зависит от такого какой origin у tonconnect manifest?

author: Там аук на tondev.ton адекватный , мало ли кто на кош/сайт привязать хотел.

.: Здравствуйте, подскажите пожалуйста как получить время аукциона для dns доменов? Может есть апи?

⛰️ Roman ⛰️: сильно ли повысится цена за хранение, если хранить метадату нфт ончейн?

User: Несущественно (reply to 315357)

Gl: Из-за чего может возникать ошибка расчета комиссии в тонкипере? Или может есть какие-то способы отладить это? Просто тонкипер ничего кроме "ошибка расчета комиссии" не выводит

web-assist 🧀: Storage Fee: 6.009773406000001 TON (1.00 MB for 365 days) в документации так написано (reply to 315357)

web-assist 🧀: https://docs.ton.org/v3/documentation/smart-contracts/transaction-fees/fees-low-level#calculator-example

)): привет! может кто в тестовой сети отправить нфтишку? чет не хочется деплоить,  вдруг у кого валяется 0QCUy-51mSsdXa64dPwvIId-udSH1SdEre2vJ6aVa5gLLlZo

Denis: Это интересно. Обычно это ошибка в эмуляции (reply to 315359)

Gl: ну она как бы наверное и происходит в эмуляции, но дело в том, что он не позволяет отправить транзакцию даже, кнопка отправить неактивна (reply to 315366)

Gl: я заметил это происходит, когда я пытаюсь отправить nft на адрес коллекции, с кошелька, который является овнером коллекции

Denis: Ну звучит приемлемо. А есть пример как воспроизвести? (reply to 315369)

.: Здравствуйте, подскажите - гифты(нфт) в телеграмме можно отправлять на тон кошелек вне телеграмма ?

User: Да, вы можете вывести подарки на любой некастодиальный ton кошелек через fragment. Самые популярные и проверенные кошельки это — tonkeeper, mytonwallet и tonhub (reply to 315372)

.: ❓ (reply to 315350)

Daniel: Если про телеграмовские домены, то там есть внутри контракта get метод, можно распарсить данные (reply to 315350)

.: А не подскажите пожалуйста какой именно? (reply to 315376)

Daniel: Вот два метода: get_telemint_auction_config и get_telemint_auction_state (reply to 315377)

.: Спасибо большое (reply to 315379)

ALEX: Кто-то знает аналоги ОФ на тоне?

&rey: Не знаю, которую расшифровку вы имеете в виду, но много какие приложения лежат на ton.app. (reply to 315381)

大卫-Dawei: Why a show unverified token in tonkeeper?

— 2025-07-29 —

ALEX: Онлифанс (reply to 315384)

Denis: ton.place (reply to 315400)

Denis: Я сперва подумал что речь о федеральных облигациях

[P]rivanbi: Вспоминал домен сидел

ALEX: Есть такое) (reply to 315403)

Val: мужики, скиньте группу tma разрабов плиз

User: @devs (reply to 315410)

Val: помнится еще русскоязычная группа была (reply to 315411)

⛰️ Roman ⛰️: https://t.me/devs_cis (reply to 315412)

Smager: Привет парни может кто подскажет по провайдерам в тон storage ,и как через них работать со смартконтрактами что бы выгрузить данные в storage

Anthony: ✈️ TON Connect v2.2.0 — Sign Data Support  We're excited to announce that Sign Data is now officially supported in TON Connect v2.2.0! This feature allows dApps to request signatures on arbitrary data — ideal for authentication, message signing, and more.  We kindly encourage all developers to explore and integrate this powerful capability into their dApps.  🛡 New method: signData • Supports text, binary, and cell data types • Enables secure off-chain data signing  📁 New package versions   • @tonconnect/protocol 2.3.0   • @tonconnect/sdk 3.3.0   • @tonconnect/ui 2.2.0   • @tonconnect/ui-react 2.2.0  🖌 Example usage  const result = await tonConnectUI.signData({   type: "text",   text: "Confirm new 2fa number: +1 234 567 8901" });  console.log('Signed:', result);  ⬇ To update, run npm install @tonconnect/ui-react@latest or npm install @tonconnect/ui@latest  💡 Further reading • SignData request/response specification • SignData documentation  💬 Encountered issues? Please report them on GitHub at https://github.com/ton-connect/sdk/issues.  🎁 Your feedback and usage examples are crucial. Share your experiences to help us evolve the SDK! Special thanks for Tonkeeper Team to helping with this update. (forwarded from TonTech)

&rey: Ну, осталось только плагинов дождаться, чтобы Ratelance третий раз не переписывать) (reply to 315420)

/B4ckSl4sh\: Небезопасно же, поэтому и нет поддержки установки плагинов (reply to 315423)

Not: Привет всем. поделитесь пожалуйста актуальным ton connect для python?\ дайте сыллку пожалуйста

наз: в tonutils наверное самый актуальный (reply to 315427)

Smager: Я только начал разбираться ,ну в итоге с тон storage все понятно ,теперь такой вопрос встал мне нужно поднять домен .ton для этого разместить сайт в тон storage ,постоянно я хостить не могу с пк + нужен белый ip ,для этого хочу провайдера найти ну я как бы нашел сайт ,но дальше начинается проблема так как не могу понять как реализовать смартконтракт с провайдером что бы он размещал мой сайт я за это с кошеля ему платил ,как бы это все делается через storage daemon ,но я хз вообще как даже не представляю

Smager: Подскажите пожалуйста

Egor: я взял чистый скафолд vite подключил кошелек отправил фейк транзу и редиректа не произошло так помимо этого мне после вызова redirectToWallet 2 раза залогировался этот редирект, то есть он теперь без модалок по умолчанию работает?  @kyouma (reply to 315087)

User: https://docs.ton.org/v3/guidelines/web3/ton-proxy-sites/how-to-run-ton-site  Вам нужно снять любой сервер на линексе и разместить все там, туториал есть в официальной документации (reply to 315431)

Smager: Бро как это относится к моему вопросу (reply to 315434)

Smager: Я просто мб не понимаю в web3, но я хочу в тон storage выгрузить сайт ,и получить его на домене .ton ,нужно работать с ton storage те в блокчеин причем тут эта статья

User: Вы судя по вашему сообщению хотите развернуть сайт в сети ton используя одноименный домен.  Вы столкнулись с проблемой в виде того, что вы не можете держать ваш ПК включенным круглые сутки и у вас нет выделенного апи.   Я предложил вам арендовать linux сервер, который будет работать круглые сутки и запустить все что вам нужно там. В этом вам поможет официальная документация. Если у вас появятся еще вопросы во время разветывания — пишите, поможем (reply to 315435)

Smager: Я вот не хочу через сервера

Smager: На прямую в тон через провайдера ,ну я арендую хостинг в тон storage ,мой вопрос как это технически реализовать через storage daemon ,мне тех часть нужна не теория

Smager: Я знаю что это возможно реализовать через см контракт я плачу nTon и он за это хостит сайт дает  BagId

User: Понял вас, вот ссылки на документацию и ниже на статью на хабре  https://docs.ton.org/v3/guidelines/web3/ton-storage/storage-faq#how-to-assign-a-ton-domain-to-a-ton-storage-bag  https://habr.com/ru/companies/itsumma/news/487760/  p.s. то что вам нужно лежит в официальной документации (reply to 315438)

Smager: Блин это база (reply to 315441)

Smager: Не судьба походу разобраться в web3(

User: Никаких магических действий чтоб захостить веб сайт в сети TON не требуется. Все что вам нужно это вот эти два оглавления (reply to 315442)

Smager: Бро ты чего ,я как бы не 1iq я   хостить умею ,вопрос то в другом (reply to 315444)

Smager: Ты понимаешь что такое см контракт ?

Smager: Как он работает и в чем мой вопрос ?

Smager: Выглядит так как будто нет

Smager: В любо случае спасибо 🙏

Smager: Если действительно есть знающие сильные в web3 напишите в лс пожалуйста помогите разобраться в смартах на тон

Андрей: Тебе на поставленный вопрос верно ответили, контракты в сети тебе сначала надо написать потом задеплоить

&rey: Вам никаких контрактов писать не надо. Если есть провайдер, который готов что-то там хостить, у него есть и собственный мастер-контракт, который задеплоит отдельный контроллер для вашего мешка с файлами. (reply to 315440)

Smager: Да (reply to 315454)

Smager: Подробнее плз распиши

&rey: См. процесс

Smager: Да оно

&rey: Все опкоды и ссылки на контракт в статье https://docs.ton.org/v3/guidelines/web3/ton-storage/storage-provider.

Smager: Бро ты меня спас ,спасибо большое ,можно если вопросы будут отписать тебе в лс ? (reply to 315461)

Андрей: Для обычных пользователей флоу такой: 1. Готовим статичный сайт в одну папку 2. Пакуем папку в BAG используя ton-torrent 3. Выбираем провайдеров с mytonprovider.org 4. Заключаем с ними контракты на хранение вашего BAG в том же ton-torrent  Если нужно все то же самое делать руками, то можно смотреть в сторону tonutils-storage и его исходников (reply to 315419)

Smager: Я все через storage daemon гоню я изобретаю велосипед? (reply to 315468)

Андрей: Если это тот который плюсовый, то у меня он не особо работал (reply to 315469)

Smager: Просто не люблю пользоваться не офф софтом ,это же база вроде ,код проверять зач нужно если офф софтина лежит на гитхаб (reply to 315468)

Smager: А как может не работать сломался что ли 🤣 (reply to 315470)

Алексей: всем привет, кто пользовался GetGemsApi? мне нужна помощь запрос вот такой: curl --location 'https://api.testnet.getgems.io/nft/collection/items/EQCOVhxjwjXKVLcnMpskUJiOnztAFA0v9KuUDgyj5Ha_DSIp' \ --header 'authorization: 1753791186518-testnet-1090-a-zpnnHTvdCe3cWvVzv3kCHQGWaiTewxgYxaQMQputjQJ524n5' а мне все время 404 возвращается в postman, а через swagger их: {   "name": "Logic Error",   "status": 400,   "errors": [     {       "message": "Invalid collectionAddress"     }   ] }

Алексей: в чем может быть проблема? помогите пожалуйста😭

🐼 Sild: invalid collection address🤷 (reply to 315483)

наз: tam testnet (reply to 315484)

X1ag: он в тестнете курлит (reply to 315484)

🐼 Sild: а, это тестнет еще...

Алексей: https://testnet.getgems.io/collection/kQCOVhxjwjXKVLcnMpskUJiOnztAFA0v9KuUDgyj5Ha_DZmj вот коллекция (reply to 315484)

наз: а в каком формате ожидает адрес коллекции? (reply to 315488)

X1ag: так а ты мейннет адрес вставляешь, разве ворк будет? (reply to 315488)

Алексей: kQCOVhxjwjXKVLcnMpskUJiOnztAFA0v9KuUDgyj5Ha_DZmj такой адрес он тоже не видит (reply to 315490)

Алексей: я уже часа 2 сижу  и не могу понять че не так(

наз: напиши им в чат, похоже на баг (reply to 315492)

🐼 Sild: я про нфт не знаю ничего, но Items -1 случаем не означает что там нет айтемов?  курл с тестнетовым адресом возращает ничего, что в общем-то...нуу..приемлемо было бы в таком случае

Алексей: ну я получал баланс так и все равно нет

X1ag: мне кажется это не на твоей стороне ошибка. Там вообще любая коллекция не курлится через их ui

наз: логично было бы вернуть метадату коллекции и пустой список айтемов наверн (reply to 315495)

наз: а, ну в случае с items прост пустой список (reply to 315498)

.: Здравствуйте, если у dns домена первая ставка для запуска аукциона, то как-то можно узнать начальную сумму ставки?

&rey: Посмотреть незанятый домен такой же длины, или посчитать по формулам внутри контракта. (reply to 315503)

Никита: уже нельзя к нфт в метадате кнопку прикрепить?

Алексей: у них даже в скрипте своем не работает https://gist.github.com/a-victorovich/d401d38cdbb29a0a5dc41348a9f25b22#file-api-example-ts (reply to 315497)

Алексей: ладно, может кто-то умеет контракты писать четкие? а то я коллекцию с горем делал, но чет сделал но нфт не минтится банально😕

Андрей: Можешь взять опенсурс исходники (reply to 315508)

Алексей: какие именно? (reply to 315511)

Андрей: Вплане не переписывать ничего, а лишь со скриптами задеплоить ( возможно тебе придется писать скрипты под деплой )

наз: https://github.com/ton-blockchain/token-contract/tree/main/nft (reply to 315512)

Андрей: тут кажется нет скриптов для деплоя нфт (reply to 315514)

Андрей: вот тут старый скрипт есть по деплою НФТ, я так пару коллекций в тетснете выпускал   https://github.com/skywardboundd/TACT-NFT/blob/main/sources/contract.nft_deploy.ts

Алексей: скрипт под деплой есть (reply to 315513)

Андрей: значит можешь взять контракты, собрать в блюпринте и подогнать скрипт под этот деплой (reply to 315517)

Алексей: а есть на tact? (reply to 315514)

наз: в доке по такту наверняка есть (reply to 315519)

Андрей: пока только тут   https://github.com/tact-lang/tact/tree/main/src/benchmarks/nft/tact

Алексей: у меня блюпринт чет тупил до этого, у меня без него проект, чисто на такте (reply to 315518)

Алексей: то есть это сразу рабочий, что можно деплоить? (reply to 315521)

Андрей: да (reply to 315524)

This photo: https://github.com/gradoally/fastton (reply to 315541)

наз: там .env лежит ес че (reply to 315543)

🐼 Sild: злые вы, больше проектов пушистых и разных. Может наконец-то не тапалка получится.

𝕿𝖇𝖍𝖐𝖆𝖗: Я ищу смарт-контракт в блокчейне TON, который:  Позволяет выпускать (mint) токены,  Поддерживает сжигание (burn) токенов,  Соответствует стандарту Jetton,  И позволяет администратору приостанавливать или возобновлять работу контракта в любое время.   В режиме паузы никто, кроме администратора, не должен иметь возможность выполнять транзакции — нельзя отправлять, получать, выпускать или сжигать токены. Администратор должен иметь полный контроль.  Сейчас я ищу репозиторий, исходный код или даже небольшой фрагмент кода, который уже реализует эту функциональность.

𝕿𝖇𝖍𝖐𝖆𝖗: Большая часть проблемы заключается в секторе управления транзакциями (reply to 315581)

SweetJesus: https://github.com/ton-blockchain/stablecoin-contract (reply to 315581)

𝕿𝖇𝖍𝖐𝖆𝖗: Здравствуйте за проблему с Mint Token, я проверил это (reply to 315584)

𝕿𝖇𝖍𝖐𝖆𝖗: Не могли бы вы протестировать производительность. Может я ошибаюсь. (reply to 315584)

[P]rivanbi: Где там возможность не дать переводить? (reply to 315584)

SweetJesus: Гоу ту инглиш чат, мэн (reply to 315586)

Vladislav: Всем доброго дня, я не очень много работал с ton и чёт ужасно туплю, возможно кто-то сможет подсказать что не так в лог при вызове получаю: wallet is not deployed [] Адрес выводимый через wallet.address: EQBlhBYbNe1giZbtNMPDgu872mi2-6VhtVQhTh911L9VwphR Адрес того же admin аккаунта, подключённый через tonkeeper: 0QCE6EyIryq18TBAkfHA2QfFqOIx1A9-jtyLNkDKB_Tn_M3b  На сколько я понял, либо использую не ту версию кошелька, либо криво вставил сид фразу, подскажите кто знает😔 Версия в контракте wallet_v5

&rey: walletId: { networkGlobalId: -3  } плюс к параметрам контракта. (reply to 315592)

Vladislav: это чтобы в testnet он был? с чем связано добавление id? (reply to 315593)

&rey: Связано с тем, что до этого мейннет и тестнет имел один адрес, и транзакции спокойно отправлялись с обоих сразу. (reply to 315594)

Vladislav: теперь дошло, проверил в логе, действительно работает (reply to 315595)

Vladislav: там вроде зависимости стоит обновить, ресерчил его, нода ругается на уязвимости (reply to 315584)

&rey: Если технические детали будут, то мне (лично) было бы интересно послушать (reply to 315598)

𝕿𝖇𝖍𝖐𝖆𝖗: Пожалуйста, протестируй это для меня и скажи, как запустить, я тебя задоню (reply to 315588)

Vladislav: Звучит как угроза) (reply to 315600)

Vladislav: Вообще сейчас тоже с ним вожусь паралельно, но пока знаний не хватает полноценно для деплоя (reply to 315584)

𝕿𝖇𝖍𝖐𝖆𝖗: Not a request

𝕿𝖇𝖍𝖐𝖆𝖗: I am Iranian

SweetJesus: Да там несложно, разберешься. В любом случае вопросы сюда пулять можешь смело) (reply to 315602)

Vladislav: Благодарю) самому что-то пока тяжко, если будут вопросы по golang  или Flutter(dart) можете обращаться, опыта достаточно + все что связано с симметричым и асимметричным шифрованем на платформах. (reply to 315605)

Vladislav: Имею ввиду как обмен опытом, не коммерция, чтобы другого не подумали

SweetJesus: Да норм, всем в той или иной степени тяжело было Как чему-то учиться еще) (reply to 315606)

𝕿𝖇𝖍𝖐𝖆𝖗: Можешь помочь с минтом? Я деплою, но токены на кошелёк админа не приходят. (reply to 315605)

SweetJesus: Ну скинь транзашку (reply to 315609)

Vladislav: Такой вопрос к бывалым, как вообще решаются проблемы связанные с уявзимостями в контактах если нет механики обновления?

User: Выводят средства и редеплоят контракт. В идеале нужно сразу планировать все так, чтоб если была найдена уязвимость, вы могли адекватно мигрировать (reply to 315611)

Vladislav: То есть с механизмом апдейта выпускать? (reply to 315612)

User: Можно делать механику апдейта, можно просто выводить средства и редеплоить новый код. Все зависит от самого контракта.   Если условно ваш контракт является родительским, например jetton-master, то тут 100% нужно апдейтить его. Если ваш контракт это просто логическая операция, например организация ICO, то достаточно выделить пару оп кодов, для вывода средств (reply to 315613)

Vladislav: Кстати тестировал разные штуки связанные с переполнением буфера на uint, как оказалось такие фокусы не проходят в данном чейне :( думал уже стану богачем

𝕿𝖇𝖍𝖐𝖆𝖗: Я щас не дома, как приеду, скину тебе (reply to 315610)

Vladislav: Кстат касаемо данного репо, после обновления зависимостей тесты проходят во всех местах, где нее используется ручной расчет коммиссий, частично переписал руками, где-то пытался использовать готовые методы, но пока безуспешно. Мне не понятное только то, как обновления того же ton crypto или core ломает сами расчеты, которые по формулам не изменялись, со старыми пакетами все работает как и раньше (reply to 315584)

Алексей: всем привет, почему эксплорер не видит метадату у nft?  коллекция: kQD3Jb8uyZYdiswdJ3xlWPg8BP6G3YxsJ1hdazfeyUSzchj9 айтем: kQAvDKlEmqORV-WorZo_g8Q6S1p_bvT1SeU3WMn8Jkc4Dnhe

Алексей: https://testnet.tonviewer.com/kQAvDKlEmqORV-WorZo_g8Q6S1p_bvT1SeU3WMn8Jkc4Dnhe (reply to 315624)

наз: а как метадату запаковывал? (reply to 315625)

Алексей: // 4.1. Определяем префикс и URL контента     const OFFCHAIN_CONTENT_PREFIX = 0x01;     const individualPart = `https://brown-main-tick-967.mypinata.cloud/ipfs/bafkreicw6sfhy7b7mrwc5w4p7yrbzbiwlysajxy55v45xr3sgja66lxyia`;     console.log(`URL метаданных: ${individualPart}`);      // 4.2. Создаем ячейку с ПРЕФИКСОМ и URL     const individualContent = beginCell()         .storeUint(OFFCHAIN_CONTENT_PREFIX, 8)         .storeStringTail(individualPart)         .endCell();      // 4.3. Создаем initNFTBody, как и раньше     const initNFTBodyCell = beginCell()         .storeAddress(walletAddress)         .storeRef(individualContent) // Ссылка на ячейку с URL         .endCell();      // 4.4. Собираем полное сообщение DeployNFT     const deployNftMessage: DeployNFT = {         $$type: 'DeployNFT',         queryId: 0n,         itemIndex: nextItemIndex,         amount: toNano('0.05'),         initNFTBody: initNFTBodyCell,     };

fruitful-l: Стрингтейл случайно не реф должен быть чтобы читало нормально? (reply to 315627)

наз: по идее в individual part ты передаешь ток 0.json, 1.json (reply to 315627)

наз: а при деплое коллекции указываешь ссылку на метадату коллекции и базовую ссылку к которой будет подставляться 0.json, 1.json (reply to 315631)

Алексей: я правда не знаю, я не силен в Ton (reply to 315630)

Evgeny: Да там идет не полный URL 100% (reply to 315631)

Алексей: а это как? я работаю с Pinata (reply to 315632)

наз: вот когда файлы в пината смотрешь там есть ссылка которая откроет их список и если в конце ссылки передать 0.json то откроется конкретная метадата, ты как деплоил коллекцию? (reply to 315635)

Evgeny: вот тут есть код https://github.com/coalus/MintyTON/blob/main/src/app.ts а вот здесь полный разбор https://docs.ton.org/v3/guidelines/dapps/tutorials/nft-minting-guide  там как раз с Pinata пример (reply to 315635)

fruitful-l: Можно и полный, почему нет? Геттер настроить чтобы отдавал только контент айтема (reply to 315634)

Evgeny: ну тож можно да, но стандартно там прост конец от common_content_url которой в самой коллекции прописан (reply to 315638)

&rey: Ну а коммон пустым поставить, и всё. (reply to 315640)

Алексей: коллекцию деплоил через скрипт (reply to 315636)

Evgeny: ну ладно, уговорили не 100%)) всегда есть несколько подходов;))

Алексей: вот новую сделал: https://testnet.tonviewer.com/kQAb0A9IRyIfdSFfQtLwOOfKTJZ99DWQLba2Ov5vhmlMm1NP?section=overview вот нфт в ней: https://testnet.tonviewer.com/kQA-vfItuYH-KDdktd4ZTzYmYMAW5LFv-fRIvS_hpWb9fT24

Алексей: так мы же тут храним данные на бекенде прям, а мне нужно, чтобы на пинату загружалось в папку одну и добавлялось каждый раз так нельзя сделать? (reply to 315637)

Алексей: и еще я каждый раз всю папку разом загружаю? а если там будут 1000 json`ов? или я чет не понимаю)

fruitful-l: Можно батчами минтить (reply to 315646)

Алексей: нее, я имею виду каждый раз все файлы с бекенда в пинату? это жесть нагрузка будет, нет? (reply to 315647)

наз: раздавай файлы с бэкенда прост (reply to 315648)

pluшak: ребят, помогите пожалуйста, я не совсем понимаю как отслеживать транзакции Jetton на определённый кошелёк, мне нужно узнать сумму транзакции и что за jetton, и так-же tx hash(получаеться только TON транзакции проверять при помощи toncenter)

&rey: Ещё раз, хеш которой из транзакций? (reply to 315658)

pluшak: jetton (reply to 315659)

&rey: Которой транзакции из четырёх, которые входят в перевод жетона? (reply to 315660)

pluшak: а там их 4? (reply to 315661)

pluшak: я хз, я новый в этом всём деле, где об этом почитать? (reply to 315661)

&rey: Ну, TON Cookbook (если при обновлении текста эти описания не испортились), можно в тонвьювере посмотреть — каждый кружочек есть отдельная транзакция со своим хешем. (reply to 315664)

pluшak: вот это?

pluшak: по идее D, там где конечный кошелёк куда пришли jetton

&rey: Её присутствие не гарантируется стандартом. (reply to 315667)

&rey: Вам нужны либо только B (отправка жетонов к вам — после этого они когда-то точно дойдут), либо только C (получение — после него вы уже можете жетонами распоряжаться).

pluшak: Ого

&rey: Ещё бы я помнил, как их можно достать из тонцентра или тонапи. Но я не помню.

Complex: Добрый вечер.  Вы бы хотели принимать пополнение аккаунтов пользователей, отслеживать оплату инвойсов или какая-то третья потребность?  Для первого мы бы порекомендовали использовать сервис https://github.com/gobicycle/bicycle. Для второго - https://github.com/txsociety/spice-harvester/ (reply to 315658)

— 2025-07-30 —

RootTon: Народ а есть кто с битком работал ? Есть ли какие то комьюнити чаты

[P]rivanbi: Напишите , поможем. (reply to 315962)

𝕿𝖇𝖍𝖐𝖆𝖗: hi bro (reply to 315610)

𝕿𝖇𝖍𝖐𝖆𝖗: https://github.com/ton-blockchain/stablecoin-contract/issues/82

User: С какой именно проблемой вы столкнулись? (reply to 315983)

𝕿𝖇𝖍𝖐𝖆𝖗: After deploying the contract, I can't mint the token. Now on another device, I can't deploy the contract at all, and it has various bugs. (reply to 315991)

Андрей: t.me/tondev_eng (reply to 315994)

𝕿𝖇𝖍𝖐𝖆𝖗: Can you answer me here please (reply to 315996)

Combot: Combot выдал(а) предупреждение 𝕿𝖇𝖍𝖐𝖆𝖗 (1/3) Reason: 1 reports (reply to 315997)

Nick: Issue with TON Payments Integration (Frontend-Side Problem Suspected) Hi! We're integrating TON payments into our Telegram app and have been stuck on a frustrating issue for about two weeks. Sometimes in-app purchases via TON Keeper complete successfully, but sometimes they don’t get confirmed in the app, even though the TON tokens are always deducted from the user and correctly received on our wallet.  We’ve surrounded everything with logs, but the root cause is still unclear. We're now suspecting the problem is on the frontend side. We’d really appreciate if you could connect us with an experienced developer familiar with TON integrations for a consultation.  🧩 Payment System Evolution & Current Flow 🧱 Initial Architecture: Frontend sends a request to backend.  Backend loops through user transactions via toncenter and compares tx hashes.  If the expected transaction is found → success is returned to frontend.  🛑 Problems:  Fully synchronous status check.  Inefficient search logic.  No normalized payloads, no transaction history.  Often the retry would fire before the tx appeared in toncenter, so the transaction was missed, and the purchase status was never updated.  🔁 Then We Rebuilt the Flow: Switched from toncenter to tonapi.  Normalized payloads on frontend.  Introduced async processing using WebSockets.  Built out transaction history with statuses.  📦 New Flow:  Frontend sends normalized payload to backend.  Backend fetches user transaction using tonapi.  Then fetches events from that transaction.  Verifies tx details (amount, sender, recipient).  Updates purchase status.  Sends result to frontend.  🛑 New Issue:  tonapi was slow in parsing transaction events.  Retry would hit timeout before events were parsed, so again, processing was aborted.  📍 Current Setup (as of now): Dropped the event-parsing step.  Flow is now:  Frontend sends normalized payload to backend.  Backend fetches user transaction using tonapi.  Verifies basic tx data (amount, sender, recipient).  Updates purchase status.  Sends confirmation to frontend.  Despite this simplification, we're still occasionally seeing purchases not processed, even though the TON is received. We're looking for someone who deeply understands the TON ecosystem, especially TON Keeper flows, tonapi, and tx indexing delays, to help us audit and fix this integration.  Let me know if you're available or can recommend someone.

Алексей: ребята, нужна помощь у меня почему-то не видно метадату у нфт, а у коллекции видно я с этой проблемой уже двое суток не могу разобраться  nft: kQBRmJVk6iIAAQK3ObhdOYP6X6HJHa7XYif1vfRNi4FtLttj коллекция: kQCreg2lYOBNQSPJq2ht735bWHVx1WMYqJTb4hELTC6AMmo8  помогите, пожалуйста, я на месте уже топчусь очень долго...

Denis: Ipfs?

Алексей: да, я пробовал и Pinata и через свой сервер раздавать, все равно не видно (reply to 316020)

[P]rivanbi: Тестнет? (reply to 316022)

Оскар: у тебя ячейка с контентом неверно собрана, у тебя там только урл на мету коллекции, но нет common_content для нфт, даже если ты в каждую нфт пропихнул полный урл, нужно чтобы была хоть бы пустая ячейка, иначе индексеры похоже на этом и валятся (reply to 316019)

Алексей: то есть мне нужно добавить в контракт коллекции поле common_content типа string и сделать его просто пустым? (reply to 316025)

Оскар: скинь код как ты собираешь дату для коллекции (reply to 316026)

Vladislav: Всем доброго времени суток, не могу инициализировать кошелёк руками, код приложил, вот сама ошибка при транзакциях: admin wallet deployed zaglot wallet is not deployed wait for transaction wait for transaction wait for transaction wait for transaction zaglot seq: 0 AxiosError: Req LITE_SERVER_UNKNOWN: cannot apply external message to current state : Failed to unpack account state',

Andrey: В ton storage загружайте) (reply to 316022)

Избранное🤍🔵🤍: Всем здравствуйте, пишу скрипт на python который должен покупать мне звезды через split. tg От api сплита мне приходят  tr.addres=EQBxBqmJdR0v9Wv5NMrKrtuJcmQZaxoQqmCFNswrKp8M6dEp tr.amount=237346000  tr.payload=te6ccgECBwEAAdkAA1MAAAABgBCkiH8LM/zUu0afyGCTWJwX1mDjdlf2rMa9UoQlD4UHSBqbhgEBAgQASgAAAAA1MCBUZWxlZ3JhbSBTdGFycyAKClJlZiNtN05lOWRZcXQBiFqJrNkv+8o3KzgBrpihDDWvtYIPEieSQZep9UC/iwTcePnnHZml8iphTzpDnTZL/xZCOWC0W0tUHkiGDhyjSAxoihDDAwBjATEtADuaygCACirC8eo/eV0UI980KAsAPbL94S6s3d1q9BE5NDi9kVrAAAAAB3NZQAQB/kp79unGyOW8mqyLztlKcXpBxQRR1U0TS5CGC55CwHUMBSf0VkIZHOHVKGzd7VW2WufIHj6JD2Vzoo9mIUjSxene4KucJDp9UrHbKs+rhocFBVBwWbmaY44LKt9Pi8XhOQp64bzjqRdHjQgjn77z/QAerkjDi45cPixL3bQJSagFAf5rx/7Hku1EWxisHTx3S0T7L1NOwauW99Tx7Vdokik64xEkwW1PjCbOZywq8bHCpNTmZF2oYP/4B5DMp2XxmR2zQVidoJ7nzSHkjewbpyaBUUqLrYSfb4U75ViGNFmOE9FV1hW33MJlFpDw33N2KtlKIrE2IrcKrZ83Qq6q6E2UBgAEoy0=  Уже пытался сделать много чего, но ничего не работает

User: Я не копался в апишке split, но судя по всему нужно перевести 237346000 NANOTON на адресс {addres}, с payload, который вам предоставили  На python вам поможет pytoniq На TS/JS @ton/ton (reply to 316040)

Избранное🤍🔵🤍: я перевел с nanoton. Chat GPT сказал что длинная  строка это зашифрованый смарт контракт, если декодировать ее в base64 то в ней будет текст 50 Telegram Stars Ref...  Думаю ее надо как-то декодировать или использовать как смарт контракт

User: https://github.com/split-tg/split-bot/tree/main  Посмотрите пример реализации тут, это официальный бот сплита для покупки tg stars (reply to 316053)

Избранное🤍🔵🤍: спасибо (reply to 316055)

Алексей: receive(msg: GetStaticData) {         throwUnless(NotInit, self.owner != null);          sendMsg(             sender(),             0,             ReportStaticData {                 collection: self.collectionAddress,                 index: self.itemIndex,                 queryId: msg.queryId,             }.toCell(),             msg.queryId,             beginCell()                 .storeUint(self.itemIndex, 256)                 .storeAddress(self.collectionAddress),             SendRemainingValue,         ); // implementation detail     }  message(0x8b771735) ReportStaticData {     queryId: Int as uint64;     index: Int as uint256;     collection: Address; }  Cannot pass an expression of type "Cell" to the parameter "op" of type "Int"tact-compiler(tact-compiler-errors)  ребята, что не так?

Алексей: я просто скопировал код с гитхаба ReportStaticData собирал сам, так как там его не было в should do

X1ag: отправь транзакцию и скинь сюда ссылку на нее (reply to 316067)

pluшak: всё уже пофиксил, спасибо (reply to 316075)

pluшak: проблема была что я скидывал джеттон не тот, нужно было получить адресс юсдт токена у пользователя в кошельке через тонцентер, и его в транзакцию вставить

pluшak: ну и наигрался я с этим😅

Flyheck: Все привет. Подскажите, пожалуйста. При деплое выкидывает такую ошибку. В чем может быть проблема?

Vladislav: В кошельке что пишет когда сканишь? Invalid metadata? (reply to 316081)

Flyheck: Кошелек успешно подключился, это при попытке отправить транзу (не доходит до кошелька) (reply to 316082)

Flyheck: до этого впервые такое возникло аж после успешной отправки транзы

Vladislav: TonClient4 судя по стейкиейсу, мб обычный юзать? TonClient?

Vladislav: Тут могу ошибаться если что, сам не так давно начал разбираться с этим всем

DDD: Подскажите пожалуйста... Отправил nft на свой адрес обычного кошелька в телеге 3 версии. Там он не отображается. Как отправить обратно на правильный адрес 4 версии инфу не нашел. В тонкипере и в майтоне переключение на v3 нет. Что можно сделать?🙏🙏🙏

Dmitry: В смысле «обычного в телеге»? Ton space? А если посмотрите на адрес через tonviewer.com или tonscan.org - там будет видно нфт? А то может она и не отправилась. (reply to 316087)

— 2025-07-31 —

🏆: как понять для чего используется платёжный шлюз l2 в тон?

Андрей ⁴² 🦴 🐾: подскажите пожалуйста какой то вебхук или типо того чтоб чекать новые пополнения тон кошелька в тонах и джеттонах , чтоб на большие объемы и быстро было. например в ттб или в кб там буквально через 10сек после пополнения приходит меседж о пополнении, что можете посоветовать чтоб такое повторить

Vladimir: https://docs.tonconsole.com/tonapi/webhooks-api (reply to 316095)

Vladimir: https://docs.ton.org/v3/documentation/faq#is-there-a-need-for-l2-on-the-ton (reply to 316093)

Андрей ⁴² 🦴 🐾: суть первой ссылки понял а второй нет (reply to 316097)

User: Это на другой вопрос ответили (reply to 316098)

Vladimir: Так вторая не Вам. (reply to 316098)

Андрей ⁴² 🦴 🐾: ой извините

Андрей ⁴² 🦴 🐾: спасибо

🏆: а как понять как его использовать? вот например для каких-то своих задач где это необходимо, на github в основном описание его работы.  я так понимаю надо поднимать ноду и у неё есть api, в общем как-то сложно всё) (reply to 316097)

User: Посмотрите в сторону обычного цикла проверяющего депозит, думаю его должно вам хватить.   В tonapi дергайте метод, который возвращает последние транзакции и заносите их в базу прибавляя баланс, не забывая пропускать дубликаты по хешу.   Если кошельков нужно много, то я-бы порекомендовал ставить bicycle: https://github.com/gobicycle/bicycle, тем более в последних обновлениях его можно разворачивать на арендованных liteserver'ах dton ограничивая RPS, так что содержать его выходит не так дорого, как раньше.   p.s. В bicycle можно после установить веб хуки если надо (reply to 316107)

DDD: В телеге один и тот же кошелек в двух версиях. Один 3й версии  контракта, и второй Тонспейс он 4й версии. Соответственно этот один кошелек имеет разные адреса двух разных версий.  В tonviewer с помощью send messages пробовал отправить НФТ, транза подписывается, но НФТ не отправляется, выдает ошибку транзы. (reply to 316089)

Drug Kosmonavta: Ребят привет Сейчас внедряю размещение getgems сейла V3R3 подскажите, пожалуйста, что пихать в messages при отправке транзы (nft transfer) через tonconnect грубый набросок того, что есть dataCell который кладу в forwardPayload   const feesCell = beginCell()     .storeAddress(data.marketplaceAddress)     .storeCoins(toNano("0.03"))     .storeAddress(data.royaltyAddress)     .storeCoins(toNano("0.04"))     .endCell();    const createdAt = Math.round(Date.now() / 1000);    const dataCell = beginCell()     .storeUint(0, 1)     .storeUint(createdAt, 32)     .storeAddress(data.marketplaceAddress)     .storeAddress(data.nftAddress)     .storeAddress(data.nftOwnerAddress)     .storeCoins(toNano("1"))     .storeRef(feesCell)     .storeUint(0, 32)     .storeUint(0, 64)     .endCell();    return dataCell;  а вот сам message в ton connect  {             address: nftAddressString,             amount: toNano("0.26").toString(),             payload: beginCell()               .storeUint(0x5fcc3d14, 32)               .storeUint(0, 64)               .storeAddress(                 Address.parse(                   "EQBhUTAXUHxilVWu6GEPFFS4iMEVMaR1L4vONazlkIhUX1mW"                 )               )               .storeAddress(Address.parse(userAddress))               .storeBit(false)               .storeCoins(toNano(0.2))               .storeMaybeRef(dataCell)               .endCell()               .toBoc()               .toString("base64"),           },  В тонвивере exit code 9, выходит проблема именно в dataCell  Есть идеи?

X1ag: https://github.com/getgems-io/nft-contracts/blob/d6f077fe298a3738699b0f84f597d4b5abf62558/packages/contracts/nft-fixprice-sale-v3/NftFixpriceSaleV3.spec.ts#L7  посмотри тут, какие данные они прокидывают в тестах у себя (reply to 316119)

Drug Kosmonavta: Там колбэк должен отрабатывать на nft transfer судя по их тестам, но не отрабатывает. Да и тестам 3 года уже (reply to 316123)

⛰️ Roman ⛰️: почему в контракте продажи указано, что он изначально инициализирован? В поле owner address должен стоять нулевой адрес а после нужно отправить nft на этот контракт продажи. И зачем ты кладешь dataCell в forward payload? (reply to 316119)

Dmitry: так кому сейчас принадлежит нфт? а то впервом сообщении "отправил", а теперь "пробовал отправиь" (reply to 316087)

DDD: Дык мой нфт. Пытался отправить с v3 на v4 адрес. (reply to 316128)

Dmitry: какому кошельку сейчас приналдежит? (reply to 316131)

DDD: v3 (reply to 316132)

Dmitry: и в нём отображается? или нет?   в чем конкретно тогда проблема - что не можешь отправить или что "не видишь"? (reply to 316133)

&rey: Могу сразу TonDevWallet предложить, он и самые старые версии поддерживает.  Нфт из широко известных коллекций или какая-то рандомная, у которой трансфер метод может требовать, условно, фазу луны? (reply to 316131)

DDD: Так он и не должен отображаться в v3, но он там есть. Как его с v3 отправить куда нибудь в v4 кошель? (reply to 316135)

Dmitry: почему не должен? (reply to 316137)

Dmitry: в tonviewer.com или tonscan.org по адресу кошелька на вкладке NFT отображается?

Dmitry: или v3 это "тот который сделал кошелек встроенный в телегу" который на самом деле не ваш а их, "перевалочный", от которого  у вас мнемоники нету?

DDD: Так там отображается. Нет интерфейса из v3 его отправить. (reply to 316139)

Dmitry: от этого адреса у вас мнемоника (сидка) есть?

DDD: Там сидка такая же что и v3 и v4 и v5 (reply to 316140)

Dmitry: а где тогда "нет интерфейса"? возьмите нормальное приложение0кошелек, закиньте сидку, и поьлзуйтесь

DDD: НФТ домен.😊 (reply to 316136)

DDD: нет для v3 интерфейса, нету, нет (reply to 316144)

Dmitry: ГДЕ? (reply to 316146)

DDD: ни в одном кошельке нет (reply to 316147)

Dmitry: Открыл тонкипер, кошель v3r2, перешел к "коллекции", ткнул первую попавшуюся - есть кнопка "Отправить"..

DDD: имеется в виду интерфейса для нфт нет для v3 (reply to 316147)

Dmitry: нажал эту кнопку "Отправить", тонкипер показал поля Адрес и Комментарий.  или у вас не v3r2 а какой-то другой v3? (reply to 316151)

DDD: где там v3 в тонкипере? (reply to 316150)

Dmitry: эксплореры какую точную версию показывают?

DDD: Показывает нфт на v3r2 адресе (reply to 316154)

Dmitry: то есть у вас есть условно тонкипер, есть мнемоника которая вы знаете подходит к v3r2, но не можете закинуть этот адрес в приложение?  я сейчас откопал старый v3r2, в тонкипере (iOS, последний) сказал что хоч добавить кошель существующий по 24 словам, ввел слова - он мне показал "выберите коельки" с двумя чекбоксами - адрес w5 (нулевый) и адрес v3R2 с содержимым

DDD: У меня для восстановления кошелька дает на выбор только v4 и v5. 😡 (reply to 316157)

Dmitry: а точно эта сидка подходит к v3? если на wallet.ton.org ее ввести - он даст корректный v3 адрес ? (раньше этот валлет поддерживал только v3, возможно сейчас тоже еще "не обновлен) (reply to 316158)

Alex: Там теперь mytonwallet просто (reply to 316159)

Vladislav: получилось разобраться? стуканите в лс, если актуально (reply to 316087)

[P]rivanbi: Могу написать простой скрипт на python и без проблем сделаете перевод (reply to 316087)

User: Только ни в коем случае никому не передавайте сид фразу, иначе все ваши средства могут быть украдены! (reply to 316087)

[P]rivanbi: Ну в данном случае могут и обманом взять. Например я написал скрипт который мне ее отправит и все. (reply to 316168)

Alex M: В MyTonWallet должно быть переключение. Убедитесь, что у вас v4.0 и проверьте ещё раз.  Если не будет в обычных Настройках, посмотрите в настройках для разработчиков. (reply to 316087)

#: const client = new TonClient({     endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',     apiKey: process.env.TON_API_KEY,   }); скажите пожалуйста откуда можно взять апи ключ, у меня не работает просто

X1ag: [@]tonapibot (reply to 316174)

#: spasibo (reply to 316176)

#: кто то может сказать что тут не так ? https://retracer.ton.org/?tx=b80ffc8f84af25bf573d910a517f4b20567bd7989921cc684f1ff7392ea6fb7f&testnet=true

fruitful-l: Cell underflow, не достает ему чего-то (reply to 316183)

fruitful-l: Я не уверен, правильно ли я понимаю, но он пытается вроде словарь какой-то загрузить

fruitful-l: А, это нфт коллекция вообще

#: а почему метадата отображается на гетгемс и при этом не отображается в tonviewer (nft)

fruitful-l: Если метадата менялась после деплоя, то тонвьювер это не отобразит, вроде он не обновляет ее, а гетгемс обновляет (reply to 316190)

Алексей: всем привет почему на tonviewer видно картинку, а на GetGems нет? https://testnet.getgems.io/collection/EQBjLic-dlW7nXpxyX5WRg19h4DdfatYStkqqdNFYaakFHza/EQBpYRcEUyp9EJC--PjacJoSd_Om7qrzkOARYNsQKaQ3MTlj https://testnet.tonviewer.com/kQBpYRcEUyp9EJC--PjacJoSd_Om7qrzkOARYNsQKaQ3MYLp

⛰️ Roman ⛰️: Попробуй сминтить нфт с id 1 (reply to 316192)

Алексей: сделал, но еще более странная вещь случилась https://testnet.explorer.tonnft.tools/nft/kQD8TErbqVTYuR73sD_Mma7nqLiCcRR1pvJQiG46nCSEE7ub тут видно  а не GG вообще так: https://testnet.getgems.io/collection/EQBjLic-dlW7nXpxyX5WRg19h4DdfatYStkqqdNFYaakFHza/EQD8TErbqVTYuR73sD_Mma7nqLiCcRR1pvJQiG46nCSEEwAR (reply to 316193)

⛰️ Roman ⛰️: На гетгемс все ок, в тонвьювере не отображается, хотя если отправить запрос метода, то метадата есть, это скорее баг тонвьювера (reply to 316195)

Denis: https://t.me/ghwnd/1353 Ама про планы на дефай в тоне с лидами дефай ТФ

Tim: Что говорят? (reply to 316197)

Denis: а вот если бы всех юзеров телеги пересадить в дефи то какой бы дефи получился бы. (reply to 316201)

Tim: Пересядь с иглы телеграмм на дефи!

User: Все постепенно. Сейчас по чуть-чуть мы к этому идем, через подарки, звезды и TON в телеге  Просто вкатываться людям, которые иногда не знают как приложение банка скачать, в defi — нельзя, они обожгутся и убегут :)  имхо (reply to 316203)

Denis: а зачем им дефай?

— 2025-08-01 —

#: Здравствуйте, я отправляю транзакцию с фронтенда через TonConnect и получаю хэш транзакции. Мне нужно на сервере: 1. Проверить, что эта транзакция действительно прошла 2. Убедиться, что деньги реально были отправлены и получены 3. Защититься от ситуации, при которой злоумышленник подставит фейковый хэш или повторно использует чужой хэш, чтобы получить доступ к какому-либо действию на сервере.  Как правильно и безопасно реализовать такую проверку на бэкенде, чтобы нельзя было подделать хэш или результат транзакции?

Vladyslav: у тебя на фронте делается авторизация через кошелек , проверяй что хеш пришел именно от того кошелька с которого тебе идет запрос через авторизацию   проверка транзакции - парсить статус транзакции по хешу, если транзакция подтвердилась то транзакция успешна   так же проверять нужно сумму пополнения транзакции и её записывать в бд а не с фронтенда тянуть

Оскар: не нужно надеяться на то, что клиент пришлёт правильный хэш  тут хорошо описано как можно решить данную проблему https://docs.tonconsole.com/academy/transaction-tracking (reply to 316228)

🐼 Sild: насколько я знаю это хеш экстернала, а не транзакции (reply to 316228)

&rey: 4. Обработать ситуацию, когда пользователь отправит деньги не только вам (например, умное приложение кошелька сгруппирует транзакции в один экстернал, чтобы было быстрее и меньше комиссий). 5. Обработать ситуацию, когда пользователь в одном экстернале отошлёт вам несколько, до 255, переводов. 6. А если пользователь отправил вам денег без фронтенда, или закрыл ваш сайт при отправке? (reply to 316228)

Леша: Лучше тогда уже создавать отдельный кошелек для оплаты (reply to 316228)

&rey: Вопрос "что именно делать на бэкенде, какую последовательность проверок и API-вызовов" остаётся. (reply to 316237)

Леша: 1. Смотреть все блоки 2. Смотреть баланс на кошельке определенном (reply to 316238)

Vladislav: Есть предположения, почему на tonviewer контракт видно нормально и он активный, а не tonscan.org он invactive?

⛰️ Roman ⛰️: С тонсканом такое бывает (reply to 316240)

Vladislav: А на долго это? (reply to 316242)

⛰️ Roman ⛰️: Не знаю, когда такое начало происходить я просто начал использовать тонвьювер

Vladislav: и если я получаю через testnet.toncenter.com/api/v3/ инфу, и она аналогично показывает что контракт не активен, могут ли быть проблемы именно с контрактом?

⛰️ Roman ⛰️: А в тонвьювере он активен? (reply to 316245)

⛰️ Roman ⛰️: Скинь адрес

Vladislav: kQACBY328CXfBeyxDTjkywwdc3FtsNI1imDBLbEzziFHoE4U (reply to 316249)

Vladislav: это через swagger api на сколько я понимаю (reply to 316251)

Vladislav: testnet.toncenter.com/api/v3/index.html

Vladislav: testnet.tonscan.org/address/kQACBY328CXfBeyxDTjkywwdc3FtsNI1imDBLbEzziFHoE4U — почему он тут тогда неактивен? (reply to 316251)

⛰️ Roman ⛰️: Просто используйте тонвьювер (reply to 316256)

Vladislav: А у него случаем апи нормального нет? (reply to 316257)

/B4ckSl4sh\: Есть, tonapi.io называется (reply to 316258)

Anthony: Introducing the Jetton 2.0 Smart Contract  Transfers and operations with Jetton 2.0 are up to 3 times faster under heavy network load compared to jettons of the previous version.  This improvement was achieved thanks to new shardchain optimizations—the jetton-wallet holding a user’s token balance is now always deployed in the same shardchain as the owner’s wallet. This became possible after the TON node introduced functionality to deploy smart contracts into a specific shardchain (StateInit.fixed_prefix_length).  The smart contract is a direct successor of Jetton 1.2—used for popular tokens like $NOT—written by the TON Core team and covered by unit tests.  We would like to thank Andrew G Kiba, a community developer who made a contribution to the contract’s design.  A Tolk-language version of the smart contract will be released later.  https://github.com/ton-blockchain/jetton-contract/tree/jetton-2.0 (forwarded from TON Core)

&rey: Форвардну и сюда комментарий.  И всё равно закинутые на жетон-кошелёк тоны оттуда не достать, все жетоны (сколько бы их ни было) одной транзакцией не отправить и так далее. (reply to 316261)

maksim: я вот такой пропоузал делал про фича рич версию с использованием кастом пейлоадов и сенд модами для жеттонов  https://github.com/tact-lang/jetton/blob/main/docs/feature-rich.md#jetton-send-modes (reply to 316264)

&rey: О! Осталось отправку отрицательного количества добавить, и мой тестовый жетон BAJO никому будет не нужен))) (reply to 316266)

Lesha: Всем привет!  Есть прогеры Python (FastApi)?  Telegram API, TON API, Tg Gifts API

Дмитрий: yep (reply to 316277)

Андрей ⁴²: подскажите пожалуйста апи метод чтоб получить инфу о транзакции по хешу. тестнет

.: tonapi.io

Андрей ⁴²: метод? (reply to 316284)

.: https://testnet.tonapi.io/v2/blockchain/transactions/ (reply to 316285)

Denis: https://testnet.tonapi.io/v2/blockchain/transactions/{hash}

.none: всем привет! подскажите пожалуйста, есть ли какой-то удобный способ распарсить ячейку, в которой неизвестно как уложены данные и какие их типы?

Леша: Нет (reply to 316289)

Леша: В ячейке нету никакой информации о типах

.none: дам, в этом и проблема (reply to 316291)

Леша: А в чем проблема схему ячейки узнать? (reply to 316292)

.none: у меня есть init data в формате boc, и код ск эти данные чужие  мне надо понять что там в init data  контракт слишком большой и трудности возникают с пониманием какие данные нужны для инициализации

.none: если конкретнее то код смарт контракта протокола layerzero (reply to 316294)

Леша: Мне приходит на ум только разбирать код контракта

.none: есть лишь догадки и прийдётся методом тык вытаскивать данные  думал может можно облегчить этот процесс (reply to 316293)

Alexey: оо, это ж знаменитый фанси++ (reply to 316295)

.none: да)))

.none: они в тест нет не завезли это всё дело (reply to 316299)

.none: приходится самому  иначе очень большие затраты денежные на разработку

Alexey: ну с ним удачи разбираться, там вполне возможно сами разработчики контрактов уже не знают в каком формате там дата лежит

.none: уже разобрался (reply to 316304)

.none: да там пародия на ооп сплошная но в целом интересно (reply to 316304)

.none: мне надо owner поменять на свой адрес и тогда в целом можно уже и в тестнете работать (reply to 316303)

Леша: Так на абум потыкай и поищи адресс (reply to 316307)

Леша: Скипни 1 бит,2,3,4,5,6 загрузи адресс

Vladislav: Сделай перебором подбор смещения на адрес)

— 2025-08-02 —

Леша: Мне нужно найти все поступления ton на mexc 1 с определнным комментарием есть ли идеи как я могу это все реализовать? Распарсить все блоки? Или же просто проиндексировать все транзакции

Dmytro: Всем привет! Мне нужна помощь с идеями по смарт-контракту на TON. В проекте собирается бюджет (например, 100 TON), и нужно выплатить деньги многим участникам иногда до 10 тысяч человек  пропорционально их вкладам. Проблема в том, что при массовых  batch payment, (и при ограничении вызова максимум 255 человек) очень большие затраты на комиссию: например, на 1000 человек может уйти 15–50 TON только на комиссии, что сильно режет бюджет.  Вопрос: как можно снизить эти комиссии? Есть ли рабочие подходы, чтобы делать такие batch payment эффективнее? Кто сталкивался с таким и может поделиться опытом или советами? Спасибо!

Леша: Сделать так, чтобы пользователи сами платили за комиссию (reply to 316327)

Denis: Господи. А теперь то на какое слово ваш антиспам среагировал Можно опубликовать список экстремистских материалов? Я только про безплатно знаю.

X1ag: Создай кнопку минт где нибудь, и пусть нажимают те кому надо вывести. Комиссию сам можешь настроить, когда сообщение собираешь. (reply to 316327)

Dmitry: Да блин антиспам! Мое тоже потер. Есть у кого свой чат по тон, с блекджеком и т.д.?

X1ag: FUNC GANG (reply to 316333)

Denis: Tonapi Tech (reply to 316333)

Dmitry: Мне кажется для гарантии доставки скоро придется скриншотом отвечать

Dmitry: Сделать чтобы пользователи сами платили за вывод - это лишь способ «обмaнуть» тех кто вложил мало, оставив их без «дох0да». Потому что если пользователю положено например 0.1, то что вы сами отправите и по дороге комиссия съест 0.04, что вы попросите самого пользователя отправить 0.04 - результат один: пользователь получит 0.06.

Denis: Зато если пользователь платит то можно с него ещё и постричь денег :)

3ton: нужен софт отослать токены с тонкипер  на адресс +мемо  дешего надо -денег нет

3ton: 250 адресов +-

3ton: руками такое себе долго че то получается(

Виктор 👺: Нейронкой написать, на тестнете протестить?

Denis: так вроде в тонкипере про штатная фича? правда не уверен поддерживается ли мемо (reply to 316346)

3ton: во спс да попробую про

3ton: не юзал его ранее про

LORES: шалом, умеет ли апишка отправлять токены?

[P]rivanbi: Напрямую нет. Оно может сообщения отправлять в сеть, а что там будет ей без разницы (reply to 316355)

кзс: Пасаны

кзс: Дайте код контракта жеттона с налогами на покупку

кзс: Чтобы на кошелëк создателя отсылались налоги

Андрей: ура еще один ханик

кзс: Не

кзс: Я видел уже лаунчпад с налогами

Bоris: что такое ханик?

кзс: Нельзя продать

Алексей: коллеги, кто-то разрабатывал может sale-контракты, чтобы еще им можно было пользоваться через GetGems? то есть мне нужен собственноручный (возможно) контракт для продажи, чтобы оформлять продажи/покупки нфт в приложении своем и возможно ли этот контракт связать с GetGems так, чтобы через GetGems можно было продавать/покупать и статусы синхронизировались?  надеюсь я понятно объяснил😭

Андрей: ну под определение еще попадают высокие комиссии (reply to 316370)

Bоris: если у них есть смарт-контракты, то да (reply to 316371)

Алексей: https://github.com/getgems-io/nft-contracts/blob/main/packages/contracts/nft-fixprice-sale-v3/description-ru.md я вроде нашел, но настолько новичок, что даже не знаю как посмотреть его код контракты же должны быть опенсорс? (reply to 316373)

Bоris: не обязательно

Bоris: Тебе нужен найти сам смарт-контракт в сети TON

Bоris: Ты можешь в testnet поиграться

Алексей: kQBDqwZFfgEqQIO8AjpVB9INjYDvyKSMjBmgliPR3OfDHbgq вот пример, как тут посмотреть код контракта?

Алексей: это к вопросу про опенсорс? (reply to 316376)

Андрей: тут опенсурс интерфейсы и BOC контракта ( это и есть код, что-то типа asm в web2 ), с помощью их скриптов ты можешь деплоить контракты не зная их func/tact код

кзс: Пасаны дайте код контракта жеттона с налогами на покупку

кзс: Чтобы на кош дева отсылались налоги

Алексей: это как? я до этого момента контракты копировал просто и писал скрипты для их деплоя уже а как можно использовать контракты не зная их кода? или как минимум билда (reply to 316382)

Андрей: под капотом все деплой скрипты используют boc, у тебя func/tact в boc преобразуется и в сеть отсылается (reply to 316391)

кзс: https://github.com/getgems-io/nft-contracts (reply to 316379)

кзс: Можно как-то используя boc узнать код контракта? (reply to 316392)

fruitful-l: В плане func, tact и прочее? Нет (reply to 316395)

Андрей: в теории так то можно в некоторых случаях но на практике пока таких тулзов нет (reply to 316395)

Алексей: я сейчас нашел код контракта на https://verifier.ton.org/, но там он не всегда есть, как я понял (reply to 316395)

Алексей: я могу получается просто копипастить себе в проект и использовать? вот у меня именно эта версия вроде: https://github.com/getgems-io/nft-contracts/tree/main/packages/contracts/nft-fixprice-sale-v3 (reply to 316394)

[P]rivanbi: Да (reply to 316399)

Алексей: там код нерабочий будто, к примеру функции writeAddress, writeCoins, writeUint Property 'writeAddress' does not exist on type 'BitString'.ts(2339)  где-то аргументов мало StateInit вообще не существует.. (reply to 316400)

⛰️ Roman ⛰️: Есть такое, просто замените на store_[что то]. store_uint(32) в контракте и storeUint(32) в TS (reply to 316403)

Алексей: тут нет таких

⛰️ Roman ⛰️: Я писал вручную деплой для контракта (reply to 316407)

Алексей: а у меня нет кода контракта, или его билда TS тут этого нет: https://github.com/getgems-io/nft-contracts/tree/main/packages/contracts/nft-fixprice-sale-v3 (reply to 316406)

⛰️ Roman ⛰️: https://github.com/rom6n/nft_contracts можете мой взять, там есть код, тесты, обёртки (reply to 316410)

Алексей: а никаких проблем не будет, если остальные мои контракты на Tact? (reply to 316411)

⛰️ Roman ⛰️: Нет, просто используйте blueprint

кзс: Да (reply to 316399)

кзс: Пасаны дайте код контракта жеттона с налогами на покупку

кзс: Чтобы на кош дева отсылались налоги

⛰️ Roman ⛰️: Кстати, кто уже научился писать на tolk, это проще?

Pavel: Да, самому собирать и разбирать ячейки не надо (reply to 316425)

Алексей: Error: Unknown wallet version v5r1 при blueprint run  WALLET_VERSION="v5r1" https://github.com/ton-org/blueprint?tab=readme-ov-file#core-features The wallet contract version to use. Supported versions: v1r1, v1r2, v1r3, v2r1, v2r2, v3r1, v3r2, v4r1, v4r2 (or v4), v5r1.  указаны версия, почему не работает? (reply to 316414)

Алексей: установлена последняя версия, в доке указано: Supported versions: v1r1, v1r2, v1r3, v2r1, v2r2, v3r1, v3r2, v4r1, v4r2 (or v4), v5r1. в коде: const wallets = {     v1r1: ton_1.WalletContractV1R1,     v1r2: ton_1.WalletContractV1R2,     v1r3: ton_1.WalletContractV1R3,     v2r1: ton_1.WalletContractV2R1,     v2r2: ton_1.WalletContractV2R2,     v3r1: ton_1.WalletContractV3R1,     v3r2: ton_1.WalletContractV3R2,     v4: ton_1.WalletContractV4, }; прикольно

⛰️ Roman ⛰️: Это зачем? Просто запускаете blueprint run и по QR коду привязываете кошелек (reply to 316434)

Алексей: я авторизовывался через мнемонику (reply to 316436)

Алексей: я уже разобрался, задеплоил ваш контракт как посмотреть ваши методы? пока не пойму

⛰️ Roman ⛰️: Тогда не могу помочь, я обычно просто использую тонкипер

Алексей: говорю же, с этим я разобрался как методы протестировать? а то я тупенький для этого (reply to 316439)

⛰️ Roman ⛰️: Зайдите в обёртки либо в контракте по коду посмотрите (reply to 316440)

⛰️ Roman ⛰️: И да, не обращайте внимание на функцию sendNft, она была создана для имитации отправки нфт. Что бы отправить нфт на контракт продажи вы должны отправить сообщение с трансфером на сам контракт нфт

User: Попробуйте blueprint обновить (reply to 316440)

fruitful-l: Подскажите, как под капотом работает forceBasechain в tact/ Какой аналог в FunC?

Андрей: force_chain (reply to 316448)

fruitful-l: Спасибо, странно что ни одного упоминания в доке не нашел (reply to 316449)

rends_east: Потому что это не стандартная функция (reply to 316450)

⛰️ Roman ⛰️: В фанси под капотом она парсит адрес и возвращает чейн, который потом сравнивается с нужным тебе (reply to 316448)

fruitful-l: Это понятно) я не мог найти в доке как именно это реализовывается, нашел уже что parse_std и чейн возвращает (reply to 316452)

Андрей: Дак можно через ctrl найти как реализовано, а что именно оно делает написано в доках  asm fun forceBasechain(address: Address) { REWRITESTDADDR DROP 138 THROWIF } (reply to 316453)

fruitful-l: Где в доках об этом написано? Может я не на тех страницах ищу? (reply to 316454)

Андрей: https://docs.tact-lang.org/ref/core-addresses/#forcebasechain   ctrl в коде (reply to 316456)

fruitful-l: Извини, неправильно понял, думал ты про фансишную доку (reply to 316457)

/B4ckSl4sh\: Всем привет, подсакжите, пожалуйста, существует ли более подробное описание архиткектуры стонфи (в идеале с тлб схемами), чем вот тут? https://docs.ston.fi/developer-section/architecture  Я совершенно не понял момент с роутером, на v2 же много роутеров, каждый в своём шарде.  При этом вот тут совершенно не написано как определить правильный роутер, просто хардкод адреса  https://docs.ston.fi/developer-section/sdk/dex-v2/swap#swap-ton-to-jetton

User: Чтоб определить валидный роутер в stonfi дергайте их апи https://api.ston.fi/swagger-ui/. Оно работает без rate limit'ов   Если вы хотите самостоятельно собирать эту информацию, то можете парсить сообщения и сторить роутеры где-то у себя локально (reply to 316461)

/B4ckSl4sh\: Спасибо) Это конечно класно и круто но хотелось бы всё равно где-нибудь прочитать логику о том, сколько задеплоено роутеров и как всё считать локально (reply to 316462)

sd: Список роутеров можно найти по холдерам втона или птона как там его

/B4ckSl4sh\: А то архитектура тут непростая, а полноценного понятного описания нет. Я помню что они выкладывали контракты в опенсорс, но надеюсь что есть способ разобраться побыстрее)

/B4ckSl4sh\: странная тема, не все тут роутеры наверное (reply to 316464)

sd: Почему не все?

/B4ckSl4sh\: Не все из представленных - роутеры, я об этом

sd: Да вроде все

/B4ckSl4sh\: Тогда у меня только больше вопросов возникло к их распределению :)

sd: Ну как я понял это не контрактами регулируется а на уровне интерфейса и бэка  Решили что будет норм на роутере 30 токенов идём заполнять следующий

/B4ckSl4sh\: Потыкал, не у всех есть интерфейс роутера. И вообще плохо понятно, кого тонвьюэр считает "холдером" птона (reply to 316466)

sd: Блин ну короче спец ча т есть у них какой-то закр ытый

sd: А у каких например нету, ради интереса (reply to 316474)

/B4ckSl4sh\: https://tonviewer.com/EQCH_oWMWQ5WDWumIcHT1-1FkDWeEWlX4995rNKIgGoniaZ0 (reply to 316476)

/B4ckSl4sh\: тут вообще транза через какие-то нфт айтемы идёт, мб контракты tonco? (reply to 316477)

sd: Там нфт титан декса (reply to 316478)

/B4ckSl4sh\: Давно я про него не слышал, забавно) (reply to 316479)

User: У них-же на апишке можете дернуть список роутеров, только насколько я помню там то ли не прям все, то ли они обновляются не прям мгновенно (reply to 316463)

🐼 Sild: Обновляются +- мгновенно (без инцидентов задержки в секунды) Из кода контрактов роутеры не достанешь. Из пула вроде можно вытащить router_address гет-методом (ну или дату попарсить если скучно)

🐼 Sild: Лонг стори шорт - на сколько я знаю на текущий момент такого нет (reply to 316463)

🐼 Sild: Это довольно статичная инфа чтобы кешировать ее на час, например

/B4ckSl4sh\: Окей, так видимо и сделаю, спасибо) (reply to 316486)

Roj: Как отправить TON в адрес у которого нет контракта?  В смысле у него статус Nonexist и Contract deploy wallet_v5r1 никогда с ним не был.

Nick: bounce: false (reply to 316492)

Roj: Спасибо большое. (reply to 316494)

Роман: всем привет, подскажите, пожалуйста. А gen utime у блока, это время начала же его? Я к тому спрашиваю, если условно gen utime 45 секунд, а я отправил транзакцию в 46-47 секунд, то я ещё имею шансы в него попасть или уже следующего блока транзакция будет дожидаться?  Не берем в расчет lt, публичные / приватные ноды и тп

🐼 Sild: Мб ребята еще поправят меня, но - Нет, gen_utime это когда блок был финализирован (reply to 316500)

🐼 Sild: И транзакция не гарантировано попадет в след блок

Роман: да, судя по всему, всё так. спасибо (reply to 316503)

Combot: Combot выдал(а) предупреждение admeden3ik (1/3) Reason: 1 reports (reply to 316505)

Combot: admeden3ik has been temporarily muted for 86400 seconds

&rey: Скажем так: что ноды назовут правильным utime, то вроде оно и значит.  utime блока записывается во все его транзакции наравне с сидом рандома блока, то есть его берут до выполнения контрактов. (reply to 316500)

— 2025-08-03 —

Hodlinhio: Кто-нибудь здесь работал с подобными библиотеками? Это контракты ликвидного стейкинга  https://github.com/HipoFinance/contract/tree/main?tab=readme-ov-file#readme https://github.com/ton-blockchain/liquid-staking-contract

User: Я работал с последним контрактом, делал на его основе другой контракт. Но я не очень понимаю, в чем заключается ваш вопрос по поводу библиотек? (reply to 316525)

Asher: Восстановил. Enjoy! (reply to 315295)

OMG: Зачем? (reply to 316532)

Vladislav: Всем привет, после любых изменений в рамках контракта  jetton-wallet, при попытке вызова транзакции получаю ошибка расчёта комиссии, с чем может быть связано?

Леша: с тем как вы меняте контракт

Леша: на пк тонкипере ошибку? (reply to 316542)

Леша: если да, то у вас эмуляция крашится

Никита: Всем привет!  Мне нужен источник для получения сырых транзакций в блокчейне TON, отсортированных в порядке, который никогда не будет нарушаться (в т.ч. если появляются новые транзакции, то они обязательно вставляются только в начало последовательности, а не куда-то между транзакциями, которые уже были получены). Что можно для этого придумать?  P.S. Я уже протестировал все методы TonCenter Indexer V3. При запросе новых транзакций, действий или трассировок иногда появляются новые записи там, где мы уже обработали данные с тем же lt и временем. Из-за этого некоторые записи мы не можем обработать, так как наш индексатор уже убежал вперед по lt.  Также необходимо обрабатывать данные, начиная с 2024 года. Самое главное - получить массив actions как в TonCenter V3, но парся транзакции сами. Проект на TypeScript.  Буду благодарен за советы или идеи!

Pavel: потерпи. скоро все будет. уже почти сделали норм апи. не toncenter. (reply to 316547)

User: Попробуйте dton. У них все отрабатывает четко в плане пагинации (reply to 316547)

Pavel: Actions прям сейчас собираются не с 24-го года а с самого начала.

Никита: Окей, жду 🙂 А можно хотя бы примерные сроки? Наш проект сейчас заморожен именно из-за отсутствия надежного API для транзакций, поэтому это критично для нас( (reply to 316548)

Никита: Попробуем, спасибо (reply to 316549)

Denis: а как именно вы пагинируетесь по транзакциям? (reply to 316547)

Denis: ну вообще в тонапи если использовать  https://tonapi.io/v2/blockchain/accounts/saint.ton/transactions?before_lt=60018166000003 и брать последний лт из https://tonapi.io/v2/blockchain/accounts/saint.ton то никаких пропусков и потом непонятных вставок не будет

Никита: Нам нужны транзакции всего блокчейна) (reply to 316554)

Pavel: там терабайт данных (reply to 316555)

Никита: с 24 года (reply to 316557)

Pavel: ща гляну

Denis: ну вот с 24 как раз и будет терабайт +-

Pavel: с 1-го января 24-го? (reply to 316558)

Pavel: меньше. (reply to 316560)

Никита: Да, а также получение новых данных в реалтайме (reply to 316561)

Denis: рекомендую поднять локальную копию тонцентра v3 и доработать её под себя

Pavel: не дешево. дешевле платить за инфу. (reply to 316564)

Denis: ну если прокачивать себе и постоянно доиндексировать то это уже полный индекс. а зачем его строить поверх другого индекса если можно брать сразу данные из блокчейна?

Denis: я правда подозреваю что человеку нахрен не нужен индекс а решает он какую-то прикладную задачу и у нас тут типичная XY-problem.

Никита: Нам нужно получить actions, а также список транзакций, из которых эти actions были получены) Это можно решить через получение трассировок, но возникает та же проблема, что и с actions: новые трассировки могут вставляться в середину уже обработанных данных, и мы не успеваем их обработать. (reply to 316567)

Denis: это всё еще xy-problem

Denis: зачем вам трейсы и экшены? красиво в реалтайме на обоях на обойной фабрики принтить?

Denis: я просто по вашим вопросам уже вижу что вы что-то пытаетесь делать не так. потом набьете шишек и хорошо если шишки будут не вида "мы позволили юзеру засчитать один и тот же депозит 100 раз", а "в момент пиковой нагрузки на блокчейн когда всем надо у нас просто всё сломалось". и будут жалобы на то что тон плохой кривой блокчейн.

Denis: @ tonapi_tech - место где нет бешенных ботов, удаляющих сообщения

Никита: Не совсем) Мы анализируем все действия всех кошельков в блокчейне - это основа для аналитики, мониторинга активности и прикладных кейсов.  Нам нужны трейсы и экшены чтобы восстанавливать полную картину происходящего: от вызовов смарт-контрактов до переводов токенов, со всеми промежуточными шагами.  Мы считаем комиссии, учитываем все данные по каждой транзакции, анализируем поведение кошельков и на основе этого строим отчеты, например, определяем, какие кошельки реально з@работали и какие стратегии приносят прiбыль. Все это требует точных и непрерывных данных, без пропусков и хаоса в порядке транзакций. (reply to 316570)

Denis: ну тогда вам определенно надо поднять свой инстанс тонцентра в3 и допиливать его под свои нужды. всё остальное будет боль и унижение

Никита: Да, все к этому и идет. Спасибо) (reply to 316576)

Pavel: 661 гиг с 1-го января 24 (reply to 316563)

Pavel: это только транзакции. без messages

Denis: это сырые транзакции в виде боков? чё-то как-то мало (reply to 316578)

Pavel: опять мы запутались в терминологии. 😂 (reply to 316580)

Pavel: -1:0021B13A5AE3498315C5B86A80835D402B31D3100464EB04849844AF71F715C1  lD1RAVlxkpeyO4FseeaTTkstkK+G8e1B7i9YpJJhgu4=  49250479000001  -1  -9223372036854775808  40452595  40452595  Up7J6Wk6WyLW0tSXNWLb2dlbT/0pgs7hth6l0WCBtoo=  yqyHrwC24X6qZgc1LhQ8Q84LrBqKVEQe7cDhJtpq9GM=  49250473000003  1726600099  active  active  90074661  C5RCyT2uEcynaZFmL9NkyKmFdTnF0JVZ68nH2NBDsZY=  WpvC8ht/jFk3DNgX/alGTuRttROyvRXigo5D7uyUMJM=    3TzpjbSHx1hYA5M7/7p6V+tOZjCZBZ0IuD2wtM4GB5M=    702119070935217  ord  false  false  false      14661    unchanged    699999990000000  false    true  false  false  90060000  9006  1000000    0  0    217  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=  true  true  false  unchanged      0    0  0  0  0  lqKW0iTyhcZ77pPDD4owkVfw2qNdxbh+QQt4YwoJz8c=  0  0

Pavel: 2,1 лярд строк таких

Pavel: messages 4,3 ярда

Pavel: тон маленький блокчейн. 😂

Pavel: а зачем вам промежуточные шаги для анализа? (reply to 316575)

Pavel: нужны тупо экшоны.

fruitful-l: Для анализа промежуточных шагов, конечно же (reply to 316587)

Pavel: для их задачи этого не требуется. нужно тип экшона (свап, трансфер), актив с которым происходит экшон, amount, value flow и комиссия. комиссию тоже можно из value сразу вычесть. ну и от кого куда. остальные данные не важны. (reply to 316589)

Pavel: что там анализировать? комиссию бота или dedust-а? зачем?

fruitful-l: Я шучу если что, надеюсь это не ко мне вопросы (reply to 316589)

Pavel: идея сама по себе утопичная. вычислить профит лосс очень сложно. так как зачастую покупка на один адрес, редистрибуция и продажа с других. или что делать с отц, или с аирдропом, или с вестингом или пресейлом?

Pavel: чел купил по отц за долляр, продал по рынку за 0.0001 долляр. и одна эта сделка принесла убыток больше чем весь его профит. а покупал он вообще с другого адреса или переводом рублей вообще.

Vladislav: Звучит вполне разумно, просто тесты проходят, а вот в тетснете уже не отрабатывает. (reply to 316546)

Omen: Здравствуйте, извините где могу с правилами чата ознакомиться?

Пескарь™: https://telegra.ph/Pravila-TON-Dev-Chat-RU-04-29 (reply to 316596)

Omen: Спасибо, поиски программиста не нарушают правила? (reply to 316597)

User: Да, можете искать, распишите задачу и ждите пока кто-то отпишет. Только будьте осторожны, вы встретите много мошенников (reply to 316598)

Hodlinhio: Например юзер TON_New_Main Он же not_under_ton Осторожней) (reply to 316599)

Hodlinhio: Тегать не получается (reply to 316601)

Omen: Да уже опыт есть с мошенниками, спасибо (reply to 316599)

[P]rivanbi: Можете открыть личку и убрать платные сообщения,  отправим вам офер для ознакомления в случае если это связано с тма и блокчейном тон. (reply to 316603)

Vladislav: есть явные причины для краша?  я меняю пару строк в коде, но после этого tonkeeper при попытке вызова этой логики пишет - ошибка подсчёта комиссий. Изменения абсолютно не меняют логику. пример добавленного кода       if(forward_ton_amount > 5) {             int boba = 8;         } (reply to 316546)

Omen: Сейчас открою для вас (reply to 316604)

Denis: А можно поммотреть где-то? (reply to 316606)

&rey: А там везде комиссий продолжает хватать, или где-то уже транзакция падает с недостатком газа (или тонов на отправку)? (reply to 316606)

Vladislav: код? это стандратный контракт jetton github.com/ton-blockchain/stablecoin-contract/blob/main/contracts/jetton-wallet.fc просто добавил в 108 строку один if, но он ни на что не влияет, просто обычное условие (reply to 316608)

Vladislav: вопрос на счёт тестов или запуска в testnet? Для вызова mint с хорошим запасом делаю, поэтому наврядли в этом проблема. (reply to 316609)

Vladislav: Да и кошелёк не даёт операцию запустить впринципе

Denis: Не код, а дапп (reply to 316610)

Denis: Напишу в личку

⛰️ Roman ⛰️: Апи по типу toncenter и tonapi читают все транзакции блокчейна, а потом создают базу данных с кошельками и их жеттонами, и нфт? Я просто не нашёл метод в tonutils-go как получать из лайт сервера кошельки с их жеттонами и нфт

Denis: Именно так. (reply to 316615)

Волна: ребята

Волна: можете скинуть HEX коды минтера и валлета для жеттона 2.0?

Волна: вот код жеттона 2.0 https://github.com/ton-blockchain/jetton-contract/tree/jetton-2.0  я хз как скомпилировать в HEX

User: https://github.com/ton-blockchain/jetton-contract/tree/jetton-2.0/build  В json файлах лежат скомпиленные версии (reply to 316624)

Волна: если я в tonutils поменяю hex коды на новые, то будет минтиться 2.0?  вот тут код: https://github.com/nessshon/tonutils/tree/main/tonutils/jetton/contract/standard (reply to 316625)

Волна: https://tonviewer.com/EQBSMRBbIbghbs41BEUrZ0sFwVKXwuzlGCCmIpzUrbAttXjH  что то странное сминтилось

maksim: там init data отличается, поэтому ошибка 9 cell underflow, нужно дату в питон коде тоже по новому собирать

Волна: тут есть такие умельцы?)

Волна: я ваще не шарю за ячейки эти

maksim: https://docs.ton.org/v3/documentation/data-formats/tlb/cell-boc

Волна: то есть вот тут надо поменять что то? (reply to 316634)

maksim: да, в create_data и дальше по кол-чейну

Волна: только в коде жетон минтера tonutils менять?

Волна: или в wallet тоже?

Daniel: Если интересует разработка в TON, тоже можете обратиться ко мне (reply to 316607)

User: В обоих случаях (reply to 316640)

Волна: ☠  Лан это не для меня (reply to 316642)

— 2025-08-04 —

Zainab: Hello

Wrzesienlokiz: Подкскажиет тонкипер про

Wrzesienlokiz: токен верифнут в тонкипере

Wrzesienlokiz: первая колокнка это я так понял адрес кому отправляем а теротья колонка это тикер (reply to 316654)

[P]rivanbi: Адрес мастера токена, а не тикер (reply to 316655)

Wrzesienlokiz: токен верифнут в тонкипер не думаю что проблема в этом но попробую (reply to 316654)

❤️🐾 🏰 Tower: 3 колонка. 1 кому, 2 сумма, 3 что. Если тикер в 3 не принимает, то укажите адрес смарт контракта токена и готова (reply to 316655)

Max: Не работает оно так. Указывайте жеттон мастер всегда (reply to 316657)

Combot: Combot выдал(а) предупреждение Игорь 🇷🇺💪 (1/3) Reason: 1 reports (reply to 316669)

[P]rivanbi: Напишите нам (reply to 316669)

🐼 Sild: а ни у кого случаем не статистики, на сколько в среднем мастер-блоков сейчас растягивается выполнение одного дерева транзакций? =)

maksim: в сингл-шард енвайронменте - в среднем на 1, многие трейсы в 1 блок помещаются (reply to 316678)

maksim: +вроде* был только один сплит с сингл шард апдейта

Vladislav: добавляю несколько строк кода в контракт(никак не влияют на флоу контракта), после этого он перестаёт работать, чувствую себя идиотом😂

Василий: Перестаёт работать в каком плане? Если это современный код жетона, то при изменении кода нужно править и газовые константы в gas.fc. Без этого тесты будут падать (reply to 316685)

Леша: Эмуляция крашится (reply to 316688)

Василий: Эмуляция где? (reply to 316689)

Леша: В тонкипере пкшном, насколько я помню (reply to 316690)

Vladislav: В том числе, если через мнемонику авторизоваться и закинуть контракт то cell underflow ловлю (exit 9) (reply to 316691)

Vladislav: на базе github.com/ton-blockchain/stablecoin-contract делал (reply to 316688)

Василий: А мнепоника какое к этому имеет отношение? Если импорт через мнемонику что-то меняет в поведении, то явно дело не в контракте а в кошельке. walletId/subwalletId что-то из этой области.  Попробуйте сгенерировать кошелек непосредственно кипером без импорта (reply to 316693)

Vladislav: Мнемоника ничего не меняет (reply to 316695)

Vladislav: Контракт ложиться с 9 статусом, а в Валлетте даже проэмулировать не может

Василий: Я кажется понял. Кошелёк stablecoin работает на общей библиотеке кода кошелька, если вы код меняете, то библиотека перестаёт загружаться т.к меняется хеш контракта (reply to 316694)

Vladislav: Хороший аргумент, звучит разумно, хотя немного странно, он использует jetton-wallet вроде из contracts (reply to 316699)

Vladislav: Мб Я ошибаюсь

Василий: Всё так, но он расчитывает на то что библиотека с таким хешем доступна в сети. Это делалось для удешевления хранения и деплоя кошелька.  В этом можно убедиться в коде тестов:https://github.com/ton-blockchain/stablecoin-contract/blob/main/sandbox_tests/JettonWallet.spec.ts#L100-L105  Про библиотеки в тоне можно тут прочитать:https://docs.ton.org/v3/documentation/data-formats/tlb/library-cells (reply to 316700)

Vladislav: Спасибо большое, сейчас ознакомлюсь

Vladislav: Мне видимо необходимо сделать deployLiblary, теперь все логичнее гораздо

Василий: Есть два выхода из этой ситуации. 1) Задеплоить библиотеку самому, но это стоит денег и актуально только если вы расчитываете что жетоном будет пользоваться очень большая аудитория. И делается это финальным этапом, когда код уже полность протестирован и больше не будет модифицироваться 2) Переделать контракт на работу без библиотеки. Для этого нужно в тестах поменять передаваемый при деплое в минтер код кошелька и заново измерить газовые константы. (reply to 316704)

Vladislav: А при каком объеме аудитории имеет смысл смотреть на деплой либы? (reply to 316705)

Василий: Тут решать вам, но хранение библиотеки на 100 лет стоит порядка 1200 TON(в случае кода USDT) и зависит от размера хранимого кода. Можно хранить меньший срок, но пополнять периодически. И нужно понимать что если срок хранения истечёт, то кошельки престанут работать.  Т.е это имеет смысл когда вы хотите удешевить трансферы для юзеров, но за свой счёт. (reply to 316706)

Василий: Как раз со вчерашнего дня висит PR проясняющий моменты с библиотекой в stablecoin и другими связанными с этим моментами. Возможно он не финальный, но ознакомиться вполне можно.  То же актуально и для основного жетона, только текст будет чуть иной (reply to 316703)

Wrzesienlokiz: вот таблица что не так ?

Wrzesienlokiz: аджресс кошелька - сумма-адрес контракта -мемо

Max: а пришлите пожалуйста сам csv-файл. Вы уверены, что корректный CSV загружаете? (reply to 316714)

Wrzesienlokiz: с утра уже и так и так адресс вводил че то не хочет (

Wrzesienlokiz: адрес биржи

Пескарь™: интересно кому там зп в примере отправляется (reply to 316714)

Max: с разделителем в виде запятой попробуйте (reply to 316718)

Max: держите  только перепроверьте 10 раз, чё я вам там наисправлял, мог и на пиво себе добавить. (reply to 316718)

Wrzesienlokiz: скину на пиво если зайдет ))) (reply to 316723)

[P]rivanbi: Не верный разделитель у вас просто

Wrzesienlokiz: СПАСИБО всем !!!да дело было в разедлителе

Max: вроде абстрактное что-то (reply to 316721)

Vladislav: Изучил внимательно, по, чекнул скриптом библиотеку, которую выложил, все норм, однако ошибка никуда моя не ушла. Пока что дальше ресерчу (reply to 316709)

Василий: Скорее всего либа не выложилась (reply to 316729)

Vladislav: Секунду, сейчас кину ссылку на либу (reply to 316730)

Vladislav: адрес минтера EQDBjIsclbVhNiWsBjkKvjcbgmvNHEJdSg58y2uLU5Bhx7FL https://testnet.tonviewer.com/transaction/037bbedb72d7bb9b6508dd0872c2378555783a09e62f7c0d39c8553757fe696e?section=trace - пример упавшей транзакции. При вызове checkWalletLib - из того МР получаю "Minter wallet code is library and matches the current source либу выкладывал через deploLiblary (reply to 316730)

Василий: А где транзакция деплоя либы? Скрипт проверяет просто стейт минтера. Клетка библиотеки в нём или нет, и совпадают ли хеши. А то есть ли такая либа в сети не проверяет (reply to 316732)

Василий: Проверить можно вот так:https://docs.ton.org/v3/documentation/data-formats/tlb/library-cells#retrieving-library-cell-with-dton  Вероятно добавлю в скрипт этот вызов (reply to 316733)

Vladislav: kf-mK_v8Urics3Ma8kDbMT1CQ1R7jfr-bx_soo9uZ9xVbTBS - адрес либы на сколько понял, я немного скрипт дописал на вывод других данных при деплое (reply to 316734)

Василий: https://tonviewer.com/Uf-mK_v8Urics3Ma8kDbMT1CQ1R7jfr-bx_soo9uZ9xVbdYd  У либы есть хеш, но нет адреса т.к это не контракт. Это мог бы быть адрес librarian контракта, который деплоит либу, но на нём нет никаких транзакций (reply to 316735)

Vladislav: Это mainnet, Я в тестнете (reply to 316736)

Василий: Понял, у вас стоит большой срок хранения контракта и одного тона недостаточно для его покрытия, и он просто возвращает вам сдачу.  https://github.com/ton-blockchain/stablecoin-contract/blob/main/contracts/helpers/librarian.func#L5  Срок меняется здесь. Если деплой либы успешен, то librarian выставляет код и дату в null  https://github.com/ton-blockchain/stablecoin-contract/blob/main/contracts/helpers/librarian.func#L36-L39 (reply to 316738)

Vladislav: Боже, 10 минут назад сам чекал это, там на 5 лет вроде. Сейчас поправим, а то чекал транзакции и думал почём у возвращает почти все (reply to 316739)

Василий: https://testnet.tonviewer.com/kf-mK_v8Urics3Ma8kDbMT1CQ1R7jfr-bx_soo9uZ9xVbTBS  Год стоит 12 тон примерно для размера кода стейбла (reply to 316740)

[P]rivanbi: Жду чек (reply to 316727)

Vladislav: у меня есть ещё несколько вопросов, лучше сюда написать или могу в лс постучаться? (reply to 316741)

Василий: Лучше сюда (reply to 316744)

Vladislav: После обновления зависимостей внутри проекта, около 20 тестов стабильно заваливается, сам рассчет комиссии в библиотеках как-то менялся? Просто до обновы все тесты спокойно проходили, но допустим тот же blueprint уже имеет там старое API, которое не поддерживает tonkepeer (reply to 316746)

Vladislav: И вообще на сколько критично это в плане зависимостей?

Василий: Со старым кодом контракта или с модифицированным?  Со старым кодом дело в том, что контракт stablecoin это precompiled контракт. Что означает что контракт добавляется в специальный параметр конфига, и его исполнение стоит фиксированное кол-во газа.  https://github.com/ton-blockchain/stablecoin-contract/blob/main/contracts/gas.fc#L70-L72  Новый блюпринт, помимо всего прочего, обновляет конфиг с которым исполняются тесты  В тестах зашиты константы, которые актуальны для исполнения ДО прекомпайла (до естсвенно было дороже, так что это не проблема), т.к это ввели не сразу. Если код именить, изменится хеш, контракт перестанет исполняться как прекомпайл.  Есть такой патч (reply to 316747)

Василий: В целом этот патч вам не особо актуален, т.к вы планируете менять код и он не будет исполняться в precompiled режиме (reply to 316749)

Vladislav: export async function run(provider: NetworkProvider) {     const ui = provider.ui();     ui.write("This jetton contract uses the jetton-wallet code from library. This reduces network fees when operating with the jetton.");     ui.write("Librarian is the contract that stores the library.");     ui.write("If someone is already storing this jetton-wallet library on the blockchain - you don't need to deploy librarian.");     const jettonWalletCodeRaw = await compile('JettonWallet');     const librarianCode = await compile('Librarian');       const libraryHash = jettonWalletCodeRaw.hash();     const libraryAddress = libraryHash.toString('hex');      ui.write(Library hash (address): ${libraryAddress});      const tonAmount = await promptToncoin("Enter Toncoin amount to deploy librarian. Some of Toncoins will reserved on the contract to pay storage fees. Excess will be returned.", ui);     const librarian = provider.open(Librarian.createFromConfig({ code: jettonWalletCodeRaw }, librarianCode));     await librarian.sendDeploy(provider.sender(), tonAmount);       await provider.waitForDeploy(librarian.address);      ui.write(Librarian deployed at: ${librarian.address});      ui.write("\n=== Library usage ===");     ui.write(To use this library in your jetton contracts, use this hash: ${libraryAddress});     ui.write(In FunC code: set_lib_code(0x${libraryAddress}, begin_cell().end_cell()););  } можно в мр код закинуть, мб кому-то проще с ним будет (reply to 316734)

Vladislav: поменял константы, но судя по состоянию не задеплоился код https://testnet.tonviewer.com/kf8NFUi288UTbs8jiYVdztu-iPiVVaWf8BYmGW8nUIVTlVCg?section=code (reply to 316739)

Viacheslav: Где юзер сможет видеть content (в данном случае mp4), имея этот sbt? в своем кошельке? а будет ли на телефоне запускаться видео?

Василий: Есть ещё момент связанный с тем, что раньше вызов(именно загрузка кода) из либы стоил газа, а сейчас он бесплатен, поэтому придётся корректировать константы (reply to 316750)

Оскар: в любом интерфейсе, который поддерживает данный формат  например getgems точно, с остальными надо смотреть как минимум тонвьюер не рендерит видео (reply to 316755)

Василий: Он вам сдачу вернул, а сколько там срок стоял?   https://github.com/ton-blockchain/stablecoin-contract/blob/main/contracts/helpers/librarian.func#L38-L39  То что он стейт занулил, это ок.  Если это либа без модификаций, то она скорее всего уже была задеплоена, поэтому так (reply to 316754)

Viacheslav: в tonKeeper отображается только image. А если нажать Подробнее, то ведет на tonviewer, там тоже самое и только если там уже нажать getgemes, то видно видео (reply to 316759)

Василий: Контракт принял на баланс 0.019 и занулил код. Видимо там просто маленький срок стоял? А так всё выглядит ок (reply to 316760)

Vladislav: Перевыпустил, сделал срок жизни одинаковый в обоих местах по коду, сработало на удивление. Сейчас тестирую код func дописанный (reply to 316764)

Василий: В обоих это каких? Оно вроде одно (reply to 316765)

Vladislav: librarfian и gas.fc (reply to 316766)

Василий: https://github.com/ton-blockchain/stablecoin-contract/blob/main/contracts/gas.fc#L5  Вот это? Это про то какой резерв оставлять на кошельке на хранение контракта, а не про либу (reply to 316767)

Vladislav: Большое спасибо за инфу, смог либу перевыпустить и задеплоить контракт, всё работает, самое забавное что func логика поднялась без проблем, опыт на C даёт о себе знать) (reply to 316768)

⚜️: Всем привет, есть фронты тма? Как вы справляетесь с баунс еффектом на текстовых инпутах, что бы не прыгало, при открытии клавиатуры на айфоне?

⛰️ Roman ⛰️: https://t.me/devs_cis (reply to 316772)

Андрей ⁴²: подскажите пожалуйста. через тон апи вебхук получаю хеш транзакции. хеш через тонцентр чекаю если там отправлялся тон то данные коректны. но если отправлялся джеттон то данные вообще не те и пишет что транзакция отклонена. хотя через тон апи транзакция успешна и везде она успешна. я делаю на тестнет поэтому думаю что может в нем дело. пробовал получать инфу по хешу через тон апи но он не выдает мастер адрес джеттона. и в итоге не знаю как лучше сделать. какой апи использовать.

Denis: Я ничего не понял (reply to 316775)

Max: ты просто мало выпил ещё (reply to 316776)

Svαtoωλ‎: Выпил. Ничего не понял (reply to 316775)

Denis: Через 20 минут значит посмотрю (reply to 316777)

Svαtoωλ‎: Лайт сервер (reply to 316775)

Андрей ⁴²: не вариант (reply to 316780)

Wrzesienlokiz: раунд 105  ставлю адреса руками -делаю дроп все ок   делаю экспорт -создаю новый дроп -делаю импорт этого же файла  ХУЙ!!!!  какие предложения:? (reply to 316714)

Denis: я тоже. понятнее не стало (reply to 316778)

fruitful-l: Из-за чего tolk может не видеть стандартные функции? Использую getMyOriginalBalanceWithExtraCurrencies(); - Пишет, что не знает такого и вообще о такой функции не слышал, хотя вроде как она есть и доступна без импортов

Petr: А IDE находит функцию? (reply to 316793)

fruitful-l: Нет (reply to 316794)

Petr: Тогда скорее всего устаревшая документация

Petr: Теперь это статический метод структуры contract https://github.com/ton-blockchain/ton/blob/cac968f77dfa5a14e63db40190bda549f0eaf746/crypto/smartcont/tolk-stdlib/common.tolk#L157

fruitful-l: Понятно, спасибо, поищу в примерах тогда. На самом деле такое происходит с очень многими функциями из этой документации, просто в этот раз не хочется ее писать через asm в отдельный файл (reply to 316796)

Petr: Тут проще всего открывать файл common.tolk в IDE и просто поиском искать по ключевым словам (я так и сделал сейчас)

fruitful-l: Значит придется привыкать, спасибо еще раз

Игорек: Добрый вечер Подскажите плиз, метод getAccountTransactionsParsed от tonClient4 отдает 500, но его аналог  getAccountTransactions отдает данные. В чем может быть проблема? Работает ли вообще этот метод?

devouring darkness: А с него норм начинать? (reply to 311894)

devouring darkness: Если с полного нуля

fruitful-l: А на степике есть что-то связанное с тактом? Уже посоветовали ведь документацию, документацию самого такта, там есть и раздел для изучения (reply to 316806)

Denis: такт всё. пишите на толке

Denis: это даже не наброс. я серьезно. писать смартконтракты на такте нет смысла

fruitful-l: А команда такта разве не придумывает свое киллер решение для своего странноватого компилятора? Команда большая, сделают что-то наверно (reply to 316811)

devouring darkness: Сразу с толка пытаться начать? (reply to 316811)

fruitful-l: Тяжелее такта явно по материалам, но явно больше профита будет скорее всего правда (reply to 316813)

Denis: павел валерьевич как-то сказал что если у вас есть два программиста и они плоховато перформят, то увольте того который перформит хуже и оставшийся будет лучше. так вот саша кирсанов (автор толка) уже работает в одиночку и как машина. (reply to 316812)

fruitful-l: А разве в одиночку до сих пор? (reply to 316815)

Vladislav: А почему Func не рассматриваете? (reply to 316813)

Denis: зачем если есть tolk который гораздо приятнее читается и производительнее (reply to 316817)

Petr: Были планы на новый компилятор который бы сильно лучше стал по газу, но вряд ли лучше чем есть уже у Толка (reply to 316812)

Petr: Если в плане компилятора, да, все еще один, но команда Толка уже 2 человека (reply to 316816)

Denis: получается производительность упала в двое? (reply to 316820)

Petr: В FunC сейчас мало смысла, код один в один можно писать и на Толке, постепенно изучая крутые фичи Толка типа структур или юнион типов и используя их (reply to 316817)

fruitful-l: Ну нерфить же как-то надо, а то сильно tolk хорош получается (reply to 316822)

Petr: Тут как с параллельностью вычислений, если вычисления не зависят друг от друга, то получается в 2 раза быстрее чем если в одном потоке 😄 (reply to 316822)

devouring darkness: Разве не устарел? (reply to 316817)

Petr: Это вы еще роадмап на следующий год-полтора не видели 😄 (reply to 316824)

devouring darkness: Хз может ошибаюсь второй день в этом ковыряюсь

🐼 Sild: а никого не беспокоит особо что над "самым классным языком для тона" работает 1 человек?  надеюсь его не забыли приковать к батарее?

Petr: Команда Толка несомненно будет расти в будущем, языку меньше месяца еще 🙂 (reply to 316829)

Denis: больше года

Oleg: Меня больше беспокоят случаи, когда над проектом работают 20 человек. Это уже звоночек, что пилят бюджет (reply to 316829)

Petr: То был прототип! 😄 (reply to 316831)

Petr: На одного пилить выгодней! (reply to 316832)

🐼 Sild: ну, depends on.  Соотношение польза/деньги конечно у 20 человек ниже чем у 1, но там еще бывают граничные случае с 3-5 человек, когда можно одного спокойно сбить автобусом (reply to 316832)

devouring darkness: Как будет лучше всего начать тогда (reply to 316828)

Дмитрий: С docs.ton.org (reply to 316836)

Дмитрий: В документации правда всё расписано и не нужно идти на сторонние платформы

Дмитрий: Она ещё и на русский вроде как переведена теперь

Petr: Один из минусов маленькой команды (reply to 316837)

devouring darkness: Да (reply to 316839)

Дмитрий: Ну тогда не вижу смысла искать что-то другое

devouring darkness: А ну там тоже ссылки на степик значит не зря там частично прошел

fruitful-l: Да ладно, там прохождение этого степика занимает часа полтора. Я правда в основном гневные комментарии под уроками читал (reply to 316843)

Oleg: Там одних видео много часов, чтоб пройти за полтора, надо все скипать (reply to 316845)

devouring darkness: Разве не больше? (reply to 316845)

devouring darkness: У меня несколько часов ушло на половину

fruitful-l: Я видео и не смотрел, больно много правок потом в конспекте, который после видео (reply to 316846)

Teers k 🐾: Хз, это тема очень сложная требует базовых знаний о программировании, памяти, блокчейне, процессоров, виртуальной машины тон и т.д (reply to 316806)

fruitful-l: Отговариваешь как будто (reply to 316850)

Teers k 🐾: Я сказал правду чтобы не писать дырявый контракт нужно знать что он за собой представляет, а то ноунейм хацкер запущет свой скрипт и вызовит функцию вывода снова и снова как в DAO 2016 (reply to 316851)

— 2025-08-05 —

devouring darkness: Не выйдет (reply to 316851)

devouring darkness: Да и кто меня прям сейчас подпустит

Андрей ⁴²: проблема была в тестнете, в маине все быстро обрабатывается. спасибо (reply to 316775)
