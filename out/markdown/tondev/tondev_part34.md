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
