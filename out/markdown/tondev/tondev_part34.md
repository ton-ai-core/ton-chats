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
