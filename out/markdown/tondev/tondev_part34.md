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

Алексей: всем привет! такой вопрос, есть ли какие-то опенсорс контракты продажи на Tact?  или какие-то другие готовые решения? или кто-то вообще сможет помочь...🙏

.: Здравствуйте, подскажите пожалуйста как получить список всей коллекции?

⛰️ Roman ⛰️: Все нфт у коллекции? По api (reply to 316916)

.: Да (reply to 316917)

⛰️ Roman ⛰️: Используйте какой нибудь tonapi или toncenter (reply to 316918)

.: А метод не подскажете какой (reply to 316919)

⛰️ Roman ⛰️: https://tonapi.io/api-v2#operations-NFT-getItemsFromCollection (reply to 316920)

author: Подскажите : документация по tolk кроме самого репозитория имеется какая то?, типо уроков, скиньте плиз с чего начать удобно будет,асинхрон проходил в тондевстади, так что с чего стоит начать помимо самого репозитория?

Оскар: прям уроков нет, но в закромах моносайта тон доков есть документация самого языка, там же по соседству другая информация  https://docs.ton.org/v3/documentation/smart-contracts/tolk/language-guide (reply to 316926)

⛰️ Roman ⛰️: А разве не было ограничения на минимальную сумму для отправки ТОН? У меня получилось отправить 1 нанотон

Дмитрий: Ограничения где конкретно? (reply to 316932)

Дмитрий: Есть разные виды уплаты газа - раздельно или из суммы транзакции например  В первом случае можно отправить 1 нанотон и комиссия за трансфер будет списана отдельно от этого нанотона. Во втором варианте транзакция упадёт - 1 нанотон не хватит на уплату комиссий

Леша: Разве есть первый случай? Никогда не слышал (reply to 316935)

Дмитрий: Есть

Леша: Это же только в экстернл сообщениях? (reply to 316937)

Sasha: Добрый вечер, как я понимаю, только нфт контракт знает о том, кто владеет нфт, т.е. единственный варинт – это индексиовать всех владельцев той или иной нфт коллекци. Возможно, я что-то не верно понял и все же есть какой-то метод, чтобы получить по адресу кошелька данные об нфт на нем?

Леша: Только нфт, да (reply to 316939)

Дмитрий: Например в доке такта:  https://docs.tact-lang.org/book/message-mode/  Раздел необязательных флагов (reply to 316936)

Леша: И тогда ты полностью оплачиваешь комиссию за логику контракта? (reply to 316941)

Dmitry: Из блокчейна напрямую - нет. Из АПИ поверх блокчейна (тонконсоль,…) можно. Откройте адрес в tonviewer и справа внизу серый зонтик-восьмигранник (reply to 316939)

Sasha: да, как раз такой метод я видел (reply to 316943)

Sasha: т.е. по сути у меня есть два варианта, либо использовать апи, либо индексировать определенную коллекцию самому

Dmitry: Да, либо индексируете сами, либо платите тому кто проиндексировал. (reply to 316945)

Sasha: такой вопрос, допустим я получил список нфт на кошельке, а как мне идентифицировать, что это определенный нфт контракт? (reply to 316946)

Дмитрий: Ну комиссию в любом случае нужно оплачивать полностью (reply to 316942)

Dmitry: Даблинботдосталудалять!

Леша: 1, хранить адресса контрактов 2. вызывать гет метод и обязательно сверять адрес коллекции (reply to 316947)

Dmitry: Кароч у нфт есть нет метод отдающий адре с коллекции. Не забывайте у коллекции перевычислять адрес этой нфт для проверки

Леша: насколько я понимаю вы делаете маркетплейс подарков?

Леша: да а то потом нальют ширпа (reply to 316953)

Dmitry: 3.  У коллекции запрашивать вычисление адреса айтема (вдруг он не из этой коллекции и просто наврал) (reply to 316952)

Леша: я имел ввиду брать адресс коллекции из тонапи (reply to 316956)

Леша: или они не вычисляют адрес?

&rey: Ноль тоже можно. (reply to 316932)

.: А питоник v5 поддерживает?

.: При вызове V5R1 пишет нет метода (reply to 316961)

fruitful-l: В tolk есть легкий способ высчитать адрес из StateInit контракта, который изначальный контракт будет деплоить? Если нет, то что-то такое будет работать? fun generate_internal_address (workchain_id: int, state_init: cell): address {      return beginCell()         .storeUint(2, 2)          .storeUint(0, 1)          .storeInt(workchain_id, 8)          .storeUint(state_init.hash(), 256)     .endCell().beginParse().loadAddress(); }

X1ag: газ контракта на который пришли тон не оплачивается. Оплачивается лишь комиссия сети и сеть тебе гарантирует что кол-во нанотон в сообщении не изменится (reply to 316942)

Petr: Посмотри в сторону AutoDeployAddress Там есть метод buildAddress (reply to 316967)

fruitful-l: Как раз хотел написать, что нашел там метод как раз для этого, спасибо! (reply to 316969)

X1ag: эх, надо бы на толк переходить уже. Есть сурсы с которых начать можно нормально разобраться в языке?

Petr: Дока в доке тона + оттуда репозитории и погнали

X1ag: благодарю (reply to 316972)

Petr: Куда дели сообщение.... Ну ладно, так или иначе awesome-tolk напрашивается

Vladislav: А в сети ton, впринципе есть возможность предрасчета комиссии за транзакцию или из вариантов только рассчитывать по sandbox тестам газ?

— 2025-08-06 —

fruitful-l: Только на sandbox лучше не полагаться (reply to 316978)

Vladislav: есть варианты по надежнее? (reply to 316982)

fruitful-l: Ну он-чейн только (reply to 316986)

Vladislav: какой запас оставляет делают при таком формате отправки? (reply to 316987)

Alex: Ищу: – Фронтенд-разработчика – Python-разработчика

[P]rivanbi: Напишите пожалуйста нам в лс, спам блок. (reply to 317005)

Lucius: Кто нибудь может подсказать есть ли возможность через апи смотреть какие у пользователя стикеры есть? По аналогии с подарками

Василий: Это еще почему? (reply to 316982)

fruitful-l: Он разве расход газа нормально посчитает? В любом случае я имел в виду, что помимо sandbox, лучше дополнительно тестить он чейн, а не то, что нужно отказываться от sandbox в принципе (reply to 317015)

Оскар: да, абсолютно нормально посчитает, больше волнует откуда такие утверждения что он "ненормально" считает газ (reply to 317016)

Tim: С точностью до нанотона посчитать нельзя. На реальной сети будет другое время исполнения и за сторедж спишется другая сумма например. Но в целом чтобы просчитать цифры сендбокс подходит

Tim: Ну и могут быть контракты которые обманывают эмуляцию

fruitful-l: Обманула память наверно, мне казалось, что разница более значительная (reply to 317017)

Оскар: газ за компьют фазу сендбокс посчитает идентично реальному чейну, а за сторадж в целом понятно, его ты и в тестнете не посчитаешь, так как он зависит от времени нежели чем окружения, для этого можно смотреть динамически через DUEPAYMENT и GETSTORAGEFEE  а если тестить, то сендбокс позволяет симулировать течение времени, и плата за сторадж тоже будет считаться (reply to 317020)

fruitful-l: Учту, спасибо, что поправил (reply to 317022)

Viacheslav: привет. почему в tonkeeper может не отображаться изображение нфт? на тонвьюэр с этого же телефона картинка видна

Vladimir: Лучше дать сразу адрес. (reply to 317027)

Viacheslav: разобрался сам) в урл image было hhttps а на тонвьэр отображалось cover image (reply to 317028)

Victor: вот так в TOLK можно делать (additionalData) ? или нужно создавать отдельную структуру ?  struct (0x37c096df) ProvideLp {     otherRouterJettonWallet: address;     refundAddress: address;     excessesAddress: address;     deadline: uint64;     additionalData: cell<{         min_lp_out: coins;     }> }

maksim: нельзя (reply to 317033)

Victor: спасибо (reply to 317034)

B: Всем доброго дня! Скажите, пожалуйста, как можно получить список транзакций начиная с какой-то определенной? С помощью TON center APIv2 используя и lt, и hash+lt, получал одни и те же результаты что и без них.

Wakuku: ты получал за последние 2 дня? (reply to 317043)

Dmitry: взял https://toncenter.com/api/v2/getTransactions?address=UQCMOXxD-f8LSWWbXQowKxqTr3zMY-X1wMTyWp3B-LR6syif&limit=10  взял третью транзу, ее айдишники вписал и дернул https://toncenter.com/api/v2/getTransactions?address=UQCMOXxD-f8LSWWbXQowKxqTr3zMY-X1wMTyWp3B-LR6syif&limit=10&lt=59909044000003&hash=f9TPenkw2L2qNDFT5UhGNyuh0PhHmiloGjeIDAbnCLU%3D - первых двух нет, сразу с третьей вернул (reply to 317043)

B: Все работает. Спасибо!

?: Добрый день. А есть какой-то процесс разбана?

?: Сегодня со своего основного аккаунта был залочен без права даже на чтение. Отправил ссылку на тестнет эксплорер с вопросом, а бот залочил т.к. Это было первое сообщение.

Алексей: привет, можно ли как-то удалить лишний кошелек?

&rey: Отправьте с него на другой, нужный, сообщение с суммой 0 нанотон в режиме 162 (весь баланс, удалить при нулевом итоговом балансе, игнорировать ошибки отправки).  Не забудьте перед этим перекинуть жетоны, нфт, контроль над контрактами и т.п. (reply to 317066)

Bohdan: Подскажите кто знает как обновить mytonwallet на хроме без переустановки?

Oleg: А разве экстеншены не автообновляются? (reply to 317068)

Bohdan: Я когда нажимаю на кнопку обновить, меня перебрасывает в хром стор и там только удалить можно, а кнопки обновить нет (reply to 317069)

Vladislav: Ты его с официального стора устанавливал? (reply to 317070)

Bohdan: Ну да (reply to 317071)

Bohdan: Я короче переустановил заново

Oleg: Вот эта кнопка Update? (reply to 317070)

Bohdan: О. А как туда попасть? (reply to 317074)

Oleg: Manage extensions

Bohdan: Нашёл. Спасибо (reply to 317076)

Viacheslav: Привет. Можно ли в func преобразовать uint в slice?

rends_east: вроде бы никак кроме сбора и разбора ячейки это не сделать подумайте, а так ли вам нужен slice, мб builder тоже подойдет, он функционален немногие знают, но его можно сторить (reply to 317083)

Viacheslav: nft содержит content (cell) и мне нужно чтобы nft collection подставлял туда nftid..

⛰️ Roman ⛰️: begin_cell().store_uint(val, 32).end_cell().begin_parse() (reply to 317083)

Оскар: slice это "читалка" ячейки, поэтому просто взять и превратить в слайс никак, нужно как выше сказали - собирать ячейку и парсить (reply to 317083)

Viacheslav: cell nft_content = begin_cell()                               .store_slice(sender_address)                               .store_ref(begin_cell().X.end_cell())                               .store_slice(owner_address)                             .end_cell();  X = begin_cell().store_uint(val, 32).end_cell().begin_parse() ? бред какойто( (reply to 317087)

Оскар: как раз таки тут можно билдер использовать, вместо того чтобы собирать целую ячейку (reply to 317088)

⛰️ Roman ⛰️: Зачем вам тогда нужен slice?  Просто засовываете  в cell store_uint(val, 32) (reply to 317088)

Оскар: я правильно понимаю что между sender_address и owner_address нужно впиндюрить некое value в виде строки? (reply to 317088)

Viacheslav: да (reply to 317091)

Оскар: тут нужно больше делать чем просто число вставить, ибо тот же инт 59 в utf-8 это символ, а не строка "59"

⛰️ Roman ⛰️: cell nft_content = begin_cell()                               .store_slice(sender_address)                               .store_ref(begin_cell().store_uint(val, 32).end_cell())                               .store_slice(owner_address)                             .end_cell(); (reply to 317088)

Viacheslav: сейчас попробую (reply to 317094)

Оскар: ему нужно это число в строку перевести, вставив просто инт он не получит желаемого результата, а просто подставит символ, код которого соответствует значению инта (reply to 317094)

⛰️ Roman ⛰️: Он изначально хотел uint64, а не строку (reply to 317093)

Оскар: он следующим сообщением написал что хочет чтобы этот инт превратился в строку и вставился между двумя других строк (reply to 317097)

⛰️ Roman ⛰️: В таком случае я бы на стороне TS создавал ячейку с StoreStringTail и нужным числом (reply to 317096)

Оскар: да, если есть возможность в контракт занести сразу строку - то лучше так, иначе нужно искать/писать код преобразования числа в utf строку (reply to 317099)

الأسطورة: бля, я закупился тоном на пике

Ssi: точённом? (reply to 317106)

الأسطورة: хаха

الأسطورة: ну он уже чутка вырос

Олег: Всем привет, запустил я сайт на ton домене. На http отвечает, но по дефолту в тг tonsite. Про тон сайт не нашел инфы, что это?

cattus: это просто https так отображается, там https-обёртка (reply to 317116)

cattus: если упростить, что-то из серии onion-сайтов + блокчейн в лице нфт-доменов (reply to 317116)

Олег: То есть получается, я могу просто через ton прокси кинуть запрос на https и это будет всеравно что tonsite

cattus: если с тон прокси (тонутилс), то к http  либо даже без прокси, если добавить .sc к домену (reply to 317119)

Олег: Окей, а если я хочу как-то захостится через tonsite каким образом это сделать

Олег: Ладно, кароч есть проблема, я захостил сайт, он вроде отвечает нормально, но некоторые стили и прочие файлы не прокидываются. Почему то в конце url появляется .ton.sc

cattus: Не понял (reply to 317122)

Олег: Забей, чекни вот это (reply to 317123)

cattus: это вы с добавлением .sc открываете? (reply to 317123)

Олег: Да, на обычном чекнуть не могу, девтулзов во встроенном браузере тг нет

Олег: Или я не нашел

cattus: ну если через ск открываете, то это логично (reply to 317123)

cattus: скиньте мне ссылку на сайт в лс, посмотрю

Олег: Можешь мне что-нибудь написать

— 2025-08-07 —

Hamada: : "Hi, I’m stuck with USDT in Tonkeeper but have no TON for fees. Can someone send me 0.3 TON just for gas? 🙏 Here’s my address: UQBPkgApNcfZNCadQDs2p0p2LIS7BxPSR2VfJ8xBXrfk41ci "

Combot: Combot выдал(а) предупреждение Hamada Prince (1/3) Reason: 1 reports (reply to 317136)

sellerbxx: Доброе утро! А как можно получить верификацию на токен в testnet версии?

ytiruces: Добрый день. Почему дублируются адреса, но в них одинаковые транзакции? Я проверил их на isBounceable, но результат не однозначный:  Кошелек: EQCEYXYZEqk3MROTR4adieUhWmw-E9ebrFqGkmOSAahSL0Vz isBounceable: true kQCEYXYZEqk3MROTR4adieUhWmw-E9ebrFqGkmOSAahSL_75 isBounceable: true  Контракт: 0QDw0JhSAOgI-80eK69Dj6StDz_kTHTvuadCR1FdeBlfj8oG isBounceable: false kQDw0JhSAOgI-80eK69Dj6StDz_kTHTvuadCR1FdeBlfj5fD isBounceable: true  И почему контракт inactiveи баланс его 0, если я на него множество раз отправлял ton? isContractDeployed возвращает false

Vladimir: Зачем? (reply to 317143)

Андрей: ton.org/address (reply to 317145)

ytiruces: Спасибо, это проясняет почему адреса кошельков isBounceable: true. Но все еще не ясно как активировать контракт (reply to 317148)

Dmitry: Для активации кошелька проще всего с него исходящую транзу сделать. (reply to 317149)

ytiruces: Не активирован адрес контракта. Я на него отправлял множество транзакций с кошелька (reply to 317150)

Dmitry: Тогда его надо «задеплоить». У вас же есть код того контракта который там должен быть? Кто его вам написал? Обычно «в комплекте» идет скрипт деплоя (reply to 317152)

ytiruces: Это тестовый проект счетчика. Я его задеплоил первой транзакцией с помощью blueprint (reply to 317153)

Dmitry: Ну либо не задеплоили, либо это не он (reply to 317155)

sellerbxx: тестирую (reply to 317146)

ytiruces: Меня тут не забанят снова за скриншот? ) (reply to 317156)

Dmitry: Как повезет :) пути бота неисповедимы (

Dmitry: Проверьте на тонвьюере. Может это подтупливает сеть или тонскан.

Combot: Combot выдал(а) предупреждение Регина Фадеева (1/3) Reason: 1 reports (reply to 317165)

adb: всем привет, может кто-нибудь посоветовать по нфтшкам, если минтить с гиф или webp анимацией, то как сделать так чтобы она играла в валете или на тонвьювере? на гетгемсе норм играет, а вот в сканерах и валетах - нет

Oleg: На месте разработчиков кошельков я бы банил такие нфт (reply to 317182)

adb: поч? (reply to 317183)

Oleg: Потому что это кошелек, а не новогодняя елка. А потом вам захочется чтоб звук играл)

Оскар: своими силами никак, это решение разработчиков определённого интерфейса (reply to 317182)

ytiruces: А ведь действительно тонскан врет. На тонвьюере контракт активен и баланс не нулевой. А в коде я затупил и опрашивал мэйннет, вместо тестнета. (reply to 317162)

.: Здравствуйте, верно ли я понимаю то что payload лучше заменить на body tx_hash = await wallet.transfer(                                 destination=auction['contractAddress'],                                 amount=required_amount / 1e9,                                 payload=payload_cell                             )

X1ag: если в wallet.transfer просят body то лучше заменить на body, да (reply to 317200)

.: Не просит, а просто шлет, но не вызывает контракт. Использую тонутилс (reply to 317202)

X1ag: замените на body  body=payload_cell (reply to 317203)

.: Спасибо (reply to 317204)

D.K: Ребят, вопрос к разработчикам. А как добавить в тг бота , возможность делать донаты в звёздах? Гптшка говорит, что нужён платёжный токен для бота, а вот где его взять?))

Vladimir: Чат русскоязычного сообщества разработчиков на TON. (reply to 317211)

Bоris: Звёздочки не криптовалюта к сожалению, хотя такие идеи были

D.K: Мне админ из TON Hub сказал тут спросить))

.: Есть же документация (reply to 317211)

Bоris: Там разве не Telegram Payment или что-то такое? (reply to 317216)

ytiruces: Допустим есть контракт, на который присылают toncoin'ы с разных кошельков. По наступлению какого-то события (например изменение переменной в данных контракта), нужно отправить часть или весь баланс обратно всем кошелькам в том же объеме, что они и присылали. Подскажите, пожалуйста, может быть есть где-то похожий функционал подглядеть в на гитхабе.

D.K: Есть контракт , который использовался при разлоках тон. Может подойдёт) (reply to 317218)

Bоris: Дороговато будет делать столько транзакций, а ещё и хранить адреса кошельков (reply to 317218)

.: Не помню, в бот апи посмотрите (reply to 317217)

Михаил: Для оплаты звёздами токен никакой не нужен, нужно в поле валюты указать XTR при создании инвойса

ytiruces: Понимаю. Но какие есть варианты? (reply to 317220)

ytiruces: А есть ссылка? (reply to 317219)

Bоris: Думать надо, например, все кто вложили сумму, могут получать токен, а потом обменивать его на тонкоины, тогда не нужно хранить адреса, в whitepaper uniswap v1 можно про это почитать, так пулы ликвидности работают (reply to 317224)

ytiruces: Эту мысль надо подумать

Bоris: Я новичок, но может кто-то даст тебе более интересный ответ

&rey: А что-то похожее на жетоны в любом случае и выйдет. Хотя для малого рынка предсказаний, если пользователей на каждой стороне меньше 255, это совсем не нужно. (reply to 317218)

Alexey: Очень похожий функционал у locker контракта (он же TON Believer fund), можете посмотреть его код он открытый (reply to 317218)

Максим: здравствуйте пытаюсь загрузить с тонцентер и ошибка [!] API ERROR 500: {"ok":false,"error":"LITE_SERVER_UNKNOWN: cannot locate transaction in block with specified logical time","code":500}, попытка 2 получается этих кусков просто нет?

Grigorii: всем привет, а возможно на tolk сделать что то подобное в структуре?  struct Data {     admin: maybe[address] }

Petr: address?

Grigorii: Если структура будет data контракта, а в init-data не положу это значение, то все ок будет? Сделал вот так:  struct Data {     admin: address? = null }

Petr: При деплое null все равно нужно передать явно, если я правильно понял вопрос

Petr: Это дефолтное значение работает на уровне создания инстанса в коде на Толке, когда можно опустить инициализацию и будет использоваться дефолтное значение

Оскар: кстати тут вопрос, я правильно понимаю что для address дефолтное значение это не "отсутствие" адреса, а addr_none (первые два бита 0)? (reply to 317252)

Petr: Насколько я знаю дефолтного значения у адреса нет

Petr: Но отсутствие значение будет addr_none да, не null

Оскар: вот это меня с толку (no pun intended) сбило когда я переписывал свой один контракт на толк, у меня там адрес мог быть none, поэтому я думал - аннотировать тип как nullable или нет, в итоге пришел к выводу что не надо и просто проверял его с помощью address.isNone() ибо слайс (адрес) который null, это не слайс в котором два первых бита 0 (reply to 317255)

K: Однако (reply to 317256)

Anna: Всем привет! Может кто-нибудь помочь мне понять, как работают аукционы, или просто ткнуть носом в посты/статьи, расписывающие, как работаeт контракт и как тратятся/возвращаются монеты?

&rey: Хранят в данных контракта адрес и самую большую сумму... ну, как код написан, так и работают. (reply to 317260)

[P]rivanbi: Напишите (reply to 317260)

𝓢𝓴𝓾𝓹𝓴𝓪 𝓴𝓻𝓲𝓹𝓽𝓸: Без проблем помогу разобраться (reply to 317260)

iAbdurahmon: Здравствуйте  Где можно создать кошелек v3r2?

Jzuss ┌( ಠ_ಠ)┘: Всем привет. Смотрю код Jetton 2.0. Правильно понимаю, что на месте shard_prefix может стоять любое число? Значит ли это, что здесь множество адресов мапятся в один? То есть я могу контролировать в каком шарде этот код будет исполняться?

Kiba: Да, но есть ограничение на уровне конфига сети, которое не позволит выставить значение больше допустимого (reply to 317271)

Krapka: Всем привет! Подскажите пожалуйста, где можно поделиться своим инструментов для TON разработчиков? Здесь я так понимаю нельзя, так как это реклама того что мне выгодно

User: Если вы разработали какую-то библиотеку, которая поможет разработчикам в TON, то можете смело ее публиковать. Если-же это какой-то свой продукт, то это засчитается как реклама и будет удалено (reply to 317273)

Krapka: Да, продукт. А если имеет и платный и бесплатный тариф, то тоже нельзя, так как платный есть, верно? А если бы платного не было, это всё равно считается продуктом? (reply to 317274)

User: Скиньте мне его в личку и я скажу вам более точно, но с учетом всего скорее всего нет (reply to 317276)

Krapka: Спасибо большое! Чуть позже думаю смогу скинуть. (reply to 317277)

Dmitry: Давно бы себе в bio профиля написали и желающие бы нашли ) (reply to 317278)

— 2025-08-08 —

Zainab: Jumma Mubarak

Иван: ...

Андрей: @type

Иван: Тут есть тот, кто пользовался github toncenter pytonlib?  assert TonlibError({'type': 'error', 'code': 500, 'message': 'LITE_SERVER_NETWORKtimeout for adnl query query', 'extra': '1754642986.4506466:3:0.6393721770137296'}) is None  Проблема в том, что она не проходит свои же тесты, пробовал обновить tonlibjson, не помогло, знает кто решение?

Dmitry: LITE_SERVER_NETWORK timeout - вы уверены что если библиотека коннектится к внешнему серверу и сервер не отвечает - это проблема библиотеки? вы какой сервер указали?

Иван: Я пробовал все 18 с этой ссылки https://ton-blockchain.github.io/global.config.json

Виктор 👺: Попробуйте несколько раз позапускать тесты, просто к публичным нодам нестабильное соединение (reply to 317309)

Виктор 👺: Поэтому почти всегда у вас будет timeout, если будете пользовать публичными нодами

Иван: Спасибо

Виктор 👺: Еще можете timeout увеличить и количество retry (reply to 317314)

John: Добрый день! Может быть, кто-то знает, где найти сообщество, которое занимается созданием мостов между TON и XRP?

Alex: Ребят. Пишу на tolk. Пытаюсь считать dict из гет метода. Выдает такое. Чот не догоняю что делаю не так. Может подскажете куда копать?

Андрей: Создавать мосты между блокчейнами - очень сложное занятие. И я не слышал что бы кто то этим занимался между указанными блокчейнами (reply to 317324)

Alex: Кажись понял в чем проблема. Всем спасибо, все свободны) (reply to 317325)

Petr: Расскажите, будет полезно всем читающим (reply to 317327)

Alex: В общем у меня указано было Dictonary.Values.Cell(). Эта штука ищет ссылку на клетки, а так как у меня в значениях словаря были слайсы, то компилятор и ругался No more references. Чтобы это решить нужно передать параметр значений словаря для слайсов. Но есть нюанс. В стандартной библиотеке его нет. Нужно писать самому. К счастью я уже это делал. Вот код           const sliceDictValue: DictionaryValue<Slice> = {             serialize(src, builder) {                 return builder.storeSlice(src)             },             parse(src) {                 return src             }         }  А использую я это так          console.log(Dictionary.loadDirect(Dictionary.Keys.Uint(32), sliceDictValue, dict)) (reply to 317328)

nhlaka: поцы, кто-нибудь работал с blum jetton ами. Можете сказать что не так в сообщении?const body = beginCell()         .storeUint(0x742b36d8, 32)          .storeUint(0, 64)          .storeCoins(amount*(10**9))         .storeAddress(Address.parse(JETTON_MASTER))          .storeAddress(wallet.address)         .storeBit(false) // no custom payload         .storeCoins(toNano(0.05)) // forward_ton_amount         .storeBit(false) // no forward_payload         .endCell();                   const seqno = await contract.getSeqno();         await contract.sendTransfer({             seqno,             secretKey: key.secretKey,             sendMode: SendMode.PAY_GAS_SEPARATELY,             messages: [internal({                 to: jettonWallet,                 value: toNano('0.1'),                 body: body             })]         });

X1ag: почему когда отправляю сообщение с модом 162, то в тестах вылетает ошибка Index 380 > 380 is out of bounds? Есть метод фикса или что делать, чтобы тесты прошли?   При этом если отправлять с модом 0, то все проходит отлично

Vladislav: У вас точно порядок построения ячейки верный? (reply to 317335)

nhlaka: ну, видимо нет) раз не работает. гле-то ошибся в сообщении, но сам не знаю, (reply to 317337)

Василий: Судя по схеме, вы хотите выполнить трансфер но. 1) Отправлять нужно не на минтер, а на адрес кошелька 2) У вас неправильный опкод (или у blum есть какой-то кастом?)  https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md#1-transfer (reply to 317335)

nhlaka: я хочу сделать swap, поэтому использую адрес контракта, иначе вооьще получается как на скрине. Да, это оп код блума на продажу (reply to 317339)

nhlaka: разобрался, спасибо. просто убрал эти storeAddressconst body = beginCell()         .storeUint(0x742b36d8, 32)          .storeUint(0, 64)          .storeCoins(amount*(10**9))         .storeBit(false) // no custom payload         .storeCoins(toNano(0.05)) // forward_ton_amount         .storeBit(false) // no forward_payload         .endCell();                   const seqno = await contract.getSeqno();         await contract.sendTransfer({             seqno,             secretKey: key.secretKey,             sendMode: SendMode.PAY_GAS_SEPARATELY,             messages: [internal({                 to: jettonWallet,                 value: toNano('0.1'),                 body: body             })]         });

Potato: swap реализуется через transfer (reply to 317340)

Алексей: всем привет! в testnet я заметил ответы на запросы долговатые, хотелось бы побыстрее в mainnet есть такая проблема или там все быстрее?

Виктор 👺: На какие именно запросы, от вас к нодам, или сами транзакции долго обрабатываются (reply to 317348)

Denzel': Всем привет подскажите пожалуйста можно ли как-то задеплоить контракт с помощью jetton transfer?

web-assist 🧀: Вроде нет (reply to 317351)

web-assist 🧀: Я искал такую возможность, ничего не накопал. Может плохо искал

Dmitry: Какой контракт? :) Жетон трансфер 100% умеет деплоить жетон-кошелек получаетеля

fruitful-l: Задеплоить контракт владельца жетона? Именно владельца, не жетон волет (reply to 317351)

Denzel': любой контракт кроме jetton wallet (reply to 317355)

fruitful-l: Возможно это?

fruitful-l: . (reply to 316266)

Denzel': ну, я и спрашиваю (reply to 317358)

fruitful-l: Forward сообщения удалился (reply to 317361)

Victor: Подскажите как в TOLK передать пустой адрес, null не работает

Dmitry: Forward payload это только «данные», без state init. Но если делать перевод на существующий контракт, который примет этот forward как сигнал к действию то он может дальше отправить уже в том числе сообщение со stateinit и что-то задеплоить

Petr: Если addr_none, то address.createNone() (reply to 317363)

Victor: Спасибо (reply to 317365)

Petr: А, хотя минуту, кажется это называется createAddressNone в stdlib

Denzel': не-а   https://github.com/tact-lang/jetton/blob/main/docs/feature-rich.md#sendstateinitwithjettonnotification  A huge limitation to the practical use of this callback is that the notification-receiving contract should already be deployed. To execute logic after a successful Jetton transfer on-chain, send two messages: one for the callback contract deployment and a second for the transfer itself. (reply to 317358)

Denzel': предлагаете что-то типа прокладки сделать? (reply to 317364)

web-assist 🧀: Думаю только для кастомных жетонов, со стандартными такое не прокатит (reply to 317357)

Dmitry: Я не знаю бизнес-задачу. Вопрос был «хоть какой нибудь» ) (reply to 317369)

Victor: вот это сработало (reply to 317367)

&rey: Оно и есть, 0x4 режим. (reply to 317361)

Denzel': но контракт уже задеплоен должен быть. А мне хотелось одной транзакцией и задеплоить и стейт инит пробросить (reply to 317374)

&rey: The feature-rich version introduces Jetton send modes... SendStateInitWithJettonNotification, 0x4  Вообще-то "деплой" и "прислать на контракт сообщение со StateInit" одно и то же. (reply to 317375)

Denzel': notification-receiving contract should already be deployed (reply to 317376)

Оскар: этот параграф вроде как раз таки описывает эту проблему со стандартным воллетом, а не предложенный feature-rich вариант (reply to 317377)

A: Можно ли на тг wallet нфт хранить?

web-assist 🧀: хранить можно, достать потом будет проблемно (reply to 317381)

Алексей: как понять, сколько точно нужно ton, для выполнения транзакции?

Oleg: Никак, надо брать с запасом (reply to 317383)

Sasha: никак, брать с запасом/делать несколько асинхронных проверок с ретраями (второй вариант надежней) (reply to 317383)

Алексей: deploy(DeployParameters {         value: amount,         body: initNFTBody,         init: StateInit { code: commonCode, data },         mode: SendPayFwdFeesSeparately,     });  может дело в SendPayFwdFeesSeparately? потому что я отправляю 1 Ton даже, не минтится

Vladislav: Какой контракт? Есть в открытом доступе? (reply to 317386)

Алексей: kQBjLic-dlW7nXpxyX5WRg19h4DdfatYStkqqdNFYaakFMdQ, да есть, по стандарту сделан (reply to 317387)

Vladislav: Пришлите название репо контракта,тут ссылки нельзя оставлять (reply to 317388)

Алексей: репо: tact-lang,  tact-lang/tact/tree/main/src/benchmarks/nft/tact (reply to 317389)

Vladislav: Судя по тестам, там намного меньше денег нужно, вы их запускать пробовали в песочнице? Они у вас проходят? (reply to 317390)

Ярослав: Всем привет! Скажите, пожалуйста, почему и с ключом не работает? (ключ точно правильный, с ложным была ошибка 401, теперь ошибка 405):  // Адрес, который вы хотите мониторить const TARGET_ADDRESS_STRING = "UQBBg_qscWelZBhs6n5muE9iOvvAuNLwrwb4vmPnqfNE4Bf5";  const POLLING_INTERVAL_MS = 5000; const TON_RPC_ENDPOINT = "https://toncenter.com/api/v4/jsonRPC"; const TON_RPC_API_KEY = "secret";  // Создаём URL для клиента, добавляя API-ключ в качестве параметра запроса const endpointWithKey = `${TON_RPC_ENDPOINT}?api_key=${TON_RPC_API_KEY}`; // Создаём клиент TonClient, который будет использовать наш API-ключ для всех запросов const client = new TonClient({ endpoint: endpointWithKey }); const targetAddress = Address.parse(TARGET_ADDRESS_STRING);  let lastKnownLt = null; // Переменная для хранения последнего известного LT  /**  * Главная функция для мониторинга входящих TON-транзакций.  * Этот подход использует один RPC-эндпоинт и должен быть более стабильным.  */ async function monitorTonTransactions() {     console.log(`Начинаем мониторинг TON-транзакций для адреса: ${TARGET_ADDRESS_STRING}`);      try {         // Получаем информацию о последнем блоке с помощью клиента, который уже настроен с API-ключом.         const latestBlock = await client.getMasterchainInfo();                  // Проверяем, что объект ответа содержит необходимую информацию.         if (!latestBlock || !latestBlock.last || !latestBlock.last.lt) {             throw new Error('Не удалось получить информацию о последнем блоке. Возможно, API-ключ недействителен или RPC-эндпоинт недоступен.');         }          lastKnownLt = latestBlock.last.lt;         console.log(`Начальный LT: ${lastKnownLt}`);          // Запускаем интервал для периодического опроса         setInterval(async () => {             try {                 // Получаем последние транзакции, начиная с последнего известного LT                 const accountTransactions = await client.getTransactions(targetAddress, 50, lastKnownLt, undefined, true);                  if (accountTransactions.length > 0) {                     console.log(`Обнаружено ${accountTransactions.length} новых транзакций.`);                 }                  for (const tx of accountTransactions) {                     // Пропускаем уже обработанные транзакции                     if (tx.lt <= lastKnownLt) {                         continue;                     }                      lastKnownLt = tx.lt; // Обновляем последний известный LT                      // Проверяем, является ли это входящей транзакцией и есть ли у нее входное сообщение                     if (tx.inMessage && tx.inMessage.info.type === 'internal') {                         const inMsg = tx.inMessage;                         const srcAddress = inMsg.info.src;                         const valueNano = inMsg.info.value.coins; // Количество TON в наноTON                                                  // Инициализируем переменные для комментария                         let comment = null;                          // Пытаемся получить комментарий из body, если он есть                         if (inMsg.body && inMsg.body.bits.length > 0) {                             try {                                 const slice = inMsg.body.beginParse();                                 const opCode = slice.loadUint(32);                                 // OpCode 0 означает простой текстовый комментарий                                 if (opCode === 0) {                                     comment = slice.loadStringRef();                                 }                             } catch (parseError) {                                 // Просто игнорируем ошибку парсинга, если это не простой комментарий                             }                         }                          console.log("-----------------------------------------");                         console.log(`Обнаружена входящая TON транзакция!`); [...] code: 'ERR_BAD_REQUEST' Валится на первой же строчке const latestBlock = await client.getMasterchainInfo();. Страшно представить, что дальше будет 😁 (reply to 316176)

&rey: Но ведь апи-ключ добавляется не так. (reply to 317393)

&rey: Так, стоп. TonClient вроде бы со ссылкой на v3 работает, не на v4.

Ярослав: Понял, буду сам разбираться. Получится - выложу решение

Ярослав: https://  toncenter   . com/api/v4/jsonRPC

&rey: Так ведь там TonClient4 нужен, наверно. (reply to 317398)

Denzel': Да, перепутал, все верно (reply to 317378)

— 2025-08-09 —

Максим: Как можно по нику узнать его адрес нфт? Например trial.t.me кроме tonscan/tonviewer

Denis: Повторить код из контракта коллекции. Хэшируешь имя - получаешь номер нфт в коллекции. Дальше или гетнфтадресс в коллекции вызвать или ручками посчитать (reply to 317403)

Dmitry: Запросить у контракта коллекции адрес айтема по индексу. Имя метода и логика вычисления индекса из текстового имени будут видны в исходном коде контракта. Где-то на гитхабе был, telemint вроде звался (reply to 317403)

ytiruces: Доброе утро. Подскажите, пожалуйста, чтобы контракт в тестнете отправил внутреннее сообщение на кошелек в тестнете, адрес кошелька должен быть bounceable и testonly? Или это не принципиально? Вроде делаю все по доке, а все равно контракт не отправляет сообщение.

&rey: У вас есть возможность запросить dnsresolve на trial.t.me.resolve-contract.ton? (reply to 317403)

ytiruces: Хм, сейчас работает. Магия какая-то... (reply to 317409)

Bоris: а в чём проблема то? (reply to 317424)

rub1kub 💻: Коллеги, а как быстро подтягиваются данные из метадаты? https://testnet.tonviewer.com/kQDMtzkQqGprPyx3TBiu4uhJx7zo1pLqiz5dcpqgWaRZOKL5  https://raw.githubusercontent.com/rub1kub/TON-Jetton/refs/heads/main/metadata.json

Potato: А разве в метаданных жетона должен быть адрес? (reply to 317427)

Potato: У тебя какая то кривая ссылка наверное на метаданные указана не? (reply to 317427)

rub1kub 💻: я разобрался, спасибо сразу подтянулось после деплоя

— 2025-08-10 —

Ярослав: К слову, где сейчас можно api ключ к нему достать и нужен ли он? Спасибо за ответ (reply to 310541)

Tung tung sahur: Привет всем

Tung tung sahur: У меня вопрос по tonweb

Tung tung sahur: У меня кошель создаётся только v3

Tung tung sahur: Хотя я указываю что мне надо v4r2

Tung tung sahur: Я вообще за js не особо шарю помоги пж кому не сложно

Vladimir: А в одно сообщение не получилось бы уложиться? (reply to 317477)

Vladimir: И лучше код показывать. (reply to 317480)

Tung tung sahur: const tonweb = new TonWeb();   const WalletClass = tonweb.wallet.all["v4R2"];   const wallet = new WalletClass(tonweb.wallet.all["v4R2"], { publicKey: key.publicKey });

Tung tung sahur: В официальном типо гайде вообще тут написано undefined! , но оно так вообще не работает (reply to 317484)

Tung tung sahur: Бляя, все сука я тупой, извините

Daniel: Рекомендовано использовать ton библиотеку, tonweb уже давно не обновляют (reply to 317484)

Eric: почему сообщение удалилось ?

Eric: я формулировал вопрос минут 30, как мне его сюда отправить?

User: приветствую, хочу написать простенький смарт контракт - копилку для себя, который принимает все входящие переводы, а забрать их можно только владельцу по секретному слову. установил python 3.10 скачал func.exe с гитхаб установил через cmd toncli  установил vsc через него создал папку с проектом (в нем создал файл .fc с кодом)  гпт пишет что в этом файле нужно прописать кош того кто может забрать баланс в формате slice для конвертации адреса необходимо прописать в cmd "toncli genaddr АДРЕС" прописываю и получаю в ответ это сообщение:   (INFO: First time run - i'll create config folder 4you and save some stuff there INFO: Check all executables are installed... WARNING: Can't find executable for func, please specify it, e.g.: /usr/bin/func Path:)  гпт подсказывает что toncli запускается, но ругается, что не может найти func.exe и просит указать путь более детально прописываю в cmd "toncli genaddr АДРЕС --func-path путь к func.exe" ответ получаю ту же ошибку   подскажите пожалуйста это полный бред ? прошу сильно не смеяться, никогда раньше не писал смарты но хочу научиться.  Еще вопрос подскажите пожалуйста, что необходимо еще установить/скачать что бы писать подобные смартконтракты возможно документацию изучить какую то или еще что то   Всю ночь сражался вместе с гпт со всем этим безобразием и пока ничего не добился но отступать не планирую) (reply to 317496)

X1ag: Антиспам система жесткая работает (reply to 317496)

User: Вы использовали кастомное эмодзи в вашем сообщении, из-за чего бот и удалил его. В этом чате старайтесь не использовать эмодзи совсем, они чаще всего излишни и конечно удаляются (reply to 317496)

X1ag: Бро, потыкай blueprint там и деплоить контракты можно и врапперы для них писать (reply to 317494)

X1ag: https://github.com/ton-org/blueprint (reply to 317500)

Eric: спасибо (reply to 317501)

ytiruces: Добрый день. Подскажите, пожалуйста, может быть есть где-то внятный разбор как работать со словарями в tolk с примерами, кроме документации?

maksim: думаю что пока нет (reply to 317506)

ytiruces: Я правильно понимаю, что и стандартных реализаций Jettons и NFT на tolk тоже все еще нету?

web-assist 🧀: Есть стандарты TEP, по ним и пишешь (reply to 317508)

maksim: не прям отдельные стандарты аудированные, но примеры тепов от автора языка  https://github.com/ton-blockchain/tolk-bench/tree/master/contracts_Tolk (reply to 317508)

ytiruces: Вот куда запрятали) то, что нужно, спасибо! (reply to 317510)

Metasy: Привет всем ребят, можете пожалуйста поделится своим опытом с настройкой tonconnect-manifest.json для MyTonWallet, постоянно получаю ошибку Manifest content error, хотя настроил его по документации, а так же не нашел в сети решений подобной проблемы. Помогите пожалуйста

Mark: Покажите манифест и ссылку на приложение (reply to 317514)

fr^^: Привет, ребята кто подключал ton connect к мини приложению, какие трудности возникли и вообще как прошел процесс?

User: Если идти по официальной инструкции сверху вниз, то проблем не возникнет никаких (reply to 317519)

🕵️: Приветствую. Кто может помочь. Почему минт токена может не отображаться в тонкипере и тонвьювере при этом токен минтится

Denis: Потому что все экшены что отображаются в тонвьювере и кипере это к сожалению эвристические гадания на тему "что хотел сказать автор смартконтракта".  На вскидку предположу что нет жетон нотифая (reply to 317524)

Никита: Господа, в ton возможно минтить огромные NFT коллекции?

web-assist 🧀: Возможно (reply to 317527)

Никита: Насколько геморно заминтить например 100 000 nftшек? (reply to 317528)

web-assist 🧀: Каждая NFT является отельным контрактом, так что при желании можно триллионы триллионы нфт сминтить

web-assist 🧀: смотря как ты собираешься это делать (reply to 317529)

Никита: Вот и мне интересно как лучше сделать. Потому что у нас в проекте так то хотят оперировать огромными объемами NFT и надо придумать способ их массового выпуска (reply to 317531)

web-assist 🧀: Напиши в лс, обсудим

Павел: всем привет ,хотел задать вопрос .Делаю проект на Джанго ,реализоваю обменник типо dedust , со всеми монетами в сети тон .Решил делать методом пуллов .Стал вопрос о написании контракта для пулла .Нашел инфу по работе с нодой(песочница ,для деплоя и теста контрактов) .Хотел спросить кто шарит ,вообще можно эту песочницу реализовать на пайтоне ?

Алексей: всем привет, кто-то может вкратце рассказать про обмен валют в блокчейне Тон? к примеру, у меня стоит задача оплачивать нфт тонами или usdt

Алексей: или точнее, у меня просто должна проходить покупка либо в Ton, либо в USDT есть ли такой функционал выбора валюты в TonConnectUI?

X1ag: Нет, ты сам делаешь визуал и отправляешь транзакцию (reply to 317540)

Mirka: Tonconnect просто должен сказать кошельку, какую транзакцию подписывать, саму транзакцию ты формируешь сам, в доках должны быть примеры и для тон и для жетонов (reply to 317540)

Алексей: вопрос именно в функционале  там есть функция sendTranfer, можно ли через нее отправлять другую валюту? (reply to 317541)

Mirka: Да, под капотом пересылка нфт и жетонов — это пересылка тонов (reply to 317544)

Mirka: Опять же, в документации 100% должны быть примеры (reply to 317544)

Алексей: спасибо большое

Eugene: Слушайте, впервые пробую Tolk, и чот уже на хелловорлдном туториале из документации ошибки лезут  То ли дока устарела, то ли я не очень умный, поясните  Там пример смарт-контракта, попробовал для начала его скопипастить и скомпилировать, получил две ошибки:  1. Ошибка «expected fun, got `currentCounter`»

Eugene: Код из доки выглядит так:  get currentCounter(): int {     var (ctxID, ctxCounter, ctxCounterExt) = loadData();     return ctxCounter; }  get initialId(): int {     var (ctxID, ctxCounter, ctxCounterExt) = loadData();     return ctxID; }  get get_counters(): (int, int) {     var (_, ctxCounter, ctxCounterExt) = loadData();     return (ctxCounter, ctxCounterExt); }

Eugene: Вопрос: правильно ли понимаю, что в начале каждого из этих методов должно быть не просто get, а get fun?

X1ag: Да, get fun

Eugene: Спасибо, а то уж я боялся, что это я как-то страшно туплю (reply to 317555)

Eugene: 2. Ошибка undefined symbol `getContractData`

Petr: А вот тут надо contract.getData()

Petr: Посмотрите на вариант HelloWorld из Blueprint, там все корректно

Eugene: Угу, уже глянул как раз, что на другой странице доки используется getData()  Это тогда устаревший вариант какой-то? Спасибо, просигнализирую, чтобы обновили на корректный (reply to 317558)

Petr: Да, судя по всему дока устарела, так было в более старых версиях Толка (reply to 317560)

Eugene: Исправил эти ошибки, вылезла следующая: undefined symbol `isMessageBounced`  Но ладно, раз в целом понял «текст устарел», дальше могу с ошибками сам разбираться с помощью актуальных материалов, всем спасибо (заодно список фиксов для документации составлю)  Мне как человеку, у которого из-за Kotlin юзернейм expectfun, было забавно наткнуться на ошибку «expected fun, got currentCounter», спасибо тому, кто решил в Tolk функции так назвать!

RootTon: Народ, как такое может быть, не подтверждал транзы и сиды не палил но при этом сперли бабки ? https://tonviewer.com/transaction/d820483604ea98822c72d621c5ae7476dbbff849e771d8e804a1ecb54d48a32a

Mirka: Если 100% никто не мог иметь доступа к кошельку/ключу, то практически никак. Подобрать ключ теоретически можно, но практически — нет.   Проверьте устройства, приложения кошельков, программы, в которые вводили сид. Возможно зловред на устройстве(кейлогер и тп). Может на старом телефоне оставили приложение кошелька (reply to 317570)

RootTon: Принял, пошел удивляться тому какой я еблан (reply to 317571)

— 2025-08-11 —

Zainab: Hello

Василий: А не могло быть такого, что  в тестнете и mainnet'е деплоили кошелёк с одной мнемоникой и subwalletId? (reply to 317570)

RootTon: Д вот скорее всего так и получилось, ибо у меня есть публичная репа с сидами (reply to 317592)

RootTon: Я в итоге создал кошелек в другом приложении и туда буду тупо начислять деньги конектить его никуда не буду, а тонкипер для разработки

Vladislav: Вполне разумно, Я обычно во втором пространстве( иногда есть песочницы в ос) держу отдельно прилу с кошельком, чтобы о ней даже другие приложения не знали (reply to 317595)

Василий: Вообще в w5 есть walletId зависимый от сети в которую деплоится. И на вид walletId у вас корректный для мейннета. Скорее всего что-то другое.  Публичная репа с сидами уже само по себе возможная причина. Зачем так? (reply to 317594)

RootTon: Неуглядел (reply to 317598)

Дмитрий: Привет, подскажите пожалуйста почему после createTransfer, я получаю txHash, когда я делаю transactionsByMessage через время для проверки транзакции он появляется, но в 10% случае transactionsByMessage никогда не отдаст успех, будто транзакция вообще не отправилась я хз  Нужно через какое-то время отправлять заново или что?

Алексей: всем привет! комиссии в testnet отличаются от mainnet?

Nikita: Всем привет!  Подскажите, пожалуйста, в тестнете есть usdt? Как их получить?

web-assist 🧀: Привет, могу отправить (reply to 317607)

Oleg: Изготовить самому, это законно (reply to 317607)

Dmitry: если вы собираетесь зашить в контракт константные значения "чтобы хватило на газ" то не надо - стандартной практикой является "просить больше чем надо, заведомо с запасом" и потом возвращать остатки (excess) обратно отправителю (reply to 317604)

Алексей: еще будет комиссия (reply to 317611)

&rey: Ну, есть же обещание тон кора с тех времён, когда комиссии в 2.5 раза уменьшили, что "больше, чем было, мы комиссии не поставим". (reply to 317611)

Dmitry: ну, разные "трудные времена" бывают, мало ли :) я лишь попытался из вопроса угадать худший сценарий применения ответа )

&rey: Да, насчёт трудных времён правда — "формального" обещания aka контракта, из которого можно было бы забрать тоны при любом другом варианте, я не видел) (reply to 317616)

&rey: Хотя контракт вроде звучит несложно:  get_config_param немного парсинга send_raw_message(..., 128)

🐼 Sild: а как принято разбираться с префиксом в снейк-формате? https://docs.ton.org/v3/guidelines/dapps/asset-processing/nft-processing/metadata-parsing#snake-data-encoding   The Snake encoding format must be prefixed using the 0x00 byte    The 0x00 byte prefix is not always required in the root cell when using the Snake format, such as with off-chain NFT content   ???

&rey: Ну, сначала вызов гет-метода на коллекции склеит две ячейки метаданных в полную ссылку (или каким-то другим способом создаст, опять же, полную ссылку), потом там будет только один 0x00 байт в начале. (reply to 317623)

🐼 Sild: меня это больше для офф-чейн парсинга интересует. Вот пришла мне какая-то снейк-дата, как узнать является ли ведущий 0х00 частью данных - или префиксом?

&rey: А там надо посмотреть на определение формата, в котором вам пришло) Обычно же UTF-8 текст, там нулевых байт вроде не должно быть. (reply to 317625)

🐼 Sild: в целом имеет смысл. но глобально - там же произвольные байты...мало ли что туда хотел напихать автор =(

AL Pamblus: Здравствуйте. Мне нужно для проекта TON Puzzle код написать.  Меню, выбор диапазона ключей (из JSON файла),  поиск ключа в диапазоне - сравнение полученных адресов с целевым адресом,  вывод средств с кошелька.  Изменено: не хочу платить за это, это для всех. адреса пополнял на 26 тон. вывели 12 осталось 14 и будет пополняться.

BugDevs: На толчке 1.0) как текстовые комменты парсить? В доках есть отправитель =  in.senderAddress, msg_value = in.valueCoins, а как тексткоммент = in.contentText?)))

&rey: Ну, текстовый коммент по соглашению между эксплорерами — это когда слайс сообщения начинается на 32 нулевых бита, а после этого UTF-8 текст. (reply to 317656)

BugDevs: Ну те на толке нет одной командой. Руками надо? (reply to 317657)

Vladislav: Такс, мой vanity search подбирает ~500к в сек, 29 бит забрал( на самом деле сжёг почти все), мб у кого-то лучше результат выйдет (reply to 317633)

&rey: Ну, можно сделать struct(0x00000000) TextComment (???) и потом load кастовать. (reply to 317658)

Павел: Привет, а как в номере смарт контракта добавить своё названия токена?

Oleg: В каком номере? (reply to 317662)

Павел: Адресс контракта токена. Вот к примеру хочу что бы мое название токена, был написано в адрессе моего токена.

Oleg: Гугли vanity address (reply to 317664)

Павел: Спасибо👍

Павел: Да это то что нужно!) (reply to 317665)

Vladislav: скажу честно, скорее всего выше 39 бит пока через брутфорс идти не имеет смысла, При реализации на CUDA  39 бит можно будет забрать до получаса на 3080-3090 возможно быстрее, остальное без каких оибо алгоритмов не имеет смысла (reply to 317633)

web-assist 🧀: А метаданные коллекции могут ончейн храниться? или только для нфт?

User: Да, метадата коллекции может храниться ончейн (reply to 317670)

web-assist 🧀: import { beginCell, Cell, Dictionary } from '@ton/core'; import { sha256_sync } from '@ton/crypto'; import { makeSnakeCell } from './encodeOffchainContent';  function toSha256(s: string) {     return BigInt('0x' + sha256_sync(s).toString('hex')); }  function toTextCellSnake(s: string | Buffer): Cell {     let data = Buffer.from(s);     data = Buffer.concat([Buffer.from([0x00]), data]);     return makeSnakeCell(data); }  export default async function encodeOnChainContent() {     const DictKeys = Dictionary.Keys.BigUint(256);     const DictValues = Dictionary.Values.Cell();     const Dict = Dictionary.empty<bigint, Cell>(DictKeys, DictValues);      const keys = ['image', 'image_data', 'name', 'description'];       for (let key of keys) {         Dict.set(toSha256(key), toTextCellSnake('test1'));     }      return beginCell().storeUint(0, 8).storeDict(Dict).endCell(); } А можете подсказать в чем может быть проблема? Метаданные не отображаются ни на гг, ни на tonviewer Кажется, я что-то делаю не так

Freez: Привет всем, а как сделать проверку через бота что кошелек имеет ту или иную нфт из коллекции

— 2025-08-12 —

H: У deep seek спроси (reply to 317685)

sd: подскажите плиз как решить этот баг в тонцентре, запрос стандартный из свагера  https://toncenter.com/api/v2/getTransactions?address=EQDSddTGAqpLVegKw_itc2punEiGQfn1I4jM99LvnWs310EE&limit=10&to_lt=0&archival=false

Дмитрий: Мне кажется дело может быть в to_lt=0  {"ok":false,"error":"LITE_SERVER_UNKNOWN: cannot locate transaction in block with specified logical time","code":500} (reply to 317698)

ytiruces: Добрый день, отправляю контракту NFT, в контракте написал обработчик операции 0x05138d91. NFT контракту присваивается в любом случае хоть с обработкой этой операции, хоть без. В чем может быть дело?

Дмитрий: «Присвоение» nft контракту не зависит от контракта. Если токен был отправлен - то он придёт в не зависимости от действий контракта (reply to 317707)

ytiruces: Получается никак нельзя совершить ответные действия на эту операцию? (reply to 317708)

Дмитрий: Можно, но нужно поставить параметр forward_amount выше чтобы нотифай дошел до контракта (reply to 317709)

Дмитрий: Отправить транзакцию через tonconnect например. Там просто выставить нужные значения

sd: Если убрать ничего не меняется. Помогло другое - archival=true, при чем в прошлый раз помогло archival=false, лол. Просто в какой-то момент без причины отваливается с конкретным одним адресом (reply to 317706)

ytiruces: А автоматически никак? Учитывая, что nft создан на getgems. (reply to 317711)

Дмитрий: Никак (reply to 317713)

Dmitry: гарантированно совершить, на любую отправку - нет. Нфт "знает" своего владельца, и передача нфт  новому владельцу - это команда для нфт чтобы она изменила владельца. "Согласие" нового владельца на то не требуется. Передача нотификации новому влдельцу - это рекомендуемая практика, но  добровольно-необязательная. Плюс приложенное к нотификации кол-во тон (обычно 0.000....1)  недостаточно для выполнения логики.  Так что вы можете только в своем приложении, когда пользователь посылает нфт, дать ему на подпись транзакцию в которой выставлены правильные forward-реквизиты, которые подходят для вашей логики "на стороне приема". И тогда, если отправитель заинтересован чтобы у вас "все получилось" - ее подпишет. (reply to 317709)

Павел: всем привет ,хотел задать вопрос .Делаю проект на Джанго ,реализоваю обменник типо dedust , со всеми монетами в сети тон .Решил делать методом пуллов .Стал вопрос о написании контракта для пулла .Нашел инфу по работе с нодой(песочница ,для деплоя и теста контрактов) .Хотел спросить кто шарит ,вообще можно эту песочницу реализовать на пайтоне ?

&rey: Ну, всего-то несколько тысяч строк надо будет переписать из @ton/sandbox на питон, а так, конечно, можно. Дальше песочницы у вас не пойдёт, потому что ликвидности не будет. (reply to 317717)

xarrax: здравствуйте, где взять больше двух тестнет тон за раз? и при отправке тон на кошелёк нфт их можно ли оттуда достать?

Vladimir: Купить на tonconsole.com (reply to 317719)

ytiruces: Спасибо (reply to 317715)

Vladislav: Всем доброго времени суток, на сколько актуальна тема с играми в крипто сообществе сейчас?  думаю мб запилить что-то типо весёлой фермы со своими монетками и свободным рынком

fruitful-l: Стандарт такого не предусматривает, если не ошибаюсь (reply to 317719)

Viacheslav: Привет. Можно ли как то в tonviewer перезапросить json нфт,а то на момент минта мой бэк не отдавал json и теперь нфт без метадаты

web-assist 🧀: Скорее всего там есть свой TTL и он перезапросит данные автоматически (reply to 317728)

Viacheslav: на getgems просто кнопка Обновить была, нажал и нфт появилась..

web-assist 🧀: Да, на гг есть такое (reply to 317731)

Оскар: тонвьюер использует тонапи, можешь запросить реиндекс по ручке /v2/accounts/{account_id}/reindex отсюда https://tonapi.io/api-v2 (reply to 317728)

Denis: оно прокачается со временем само (reply to 317728)

Denis: в течении 48 часов

Viacheslav: https://testnet.tonviewer.com/transaction/bba809c0c47611c48e6d1c7354366d9c76e5d35087bb66b04e20c1c8f9d3141a а как тут query id увидеть? или его тут не видно

Denis: query_id это какая-то часть пейлоада, которую в схеме пейлоада так обозвали разработчики смартконтракта. большинство "стандартных" смартконтрактов в теле стандартных сообщений имеют query_id. некоторые "кастомные" смартконтракты тоже. но не для всех кастомных смартконтрактов тонвьювер имеет схемы сообщений чтобы понять а что тут квери айди

Viacheslav: аа о как

Denis: тонвьювер исходит из того что первые 32 бита тела сообщения это op_code. но на самом деле это даже может быть не так

Andre: Привет, решили проблему с крашем эмуляции тонкипера? (reply to 316542)

Vladislav: Да, проблема была очевидной для моего контракта, но плохо изучил доку (reply to 317751)

Pavel: Кто-то знает что там с https://toncenter.com/api/v3? почему-то перестали появляться новые транзакции

pheno: добрый вечер! кто-то знает можно ли достать тоны из своего жетон волета (jetton_wallet_v1). иногда бывает, что свапы обрабатываются неудачно, и тоны на комиссию остаются там.

Оскар: увы, никак (reply to 317758)

Denis: https://tonstat.us/ (reply to 317755)

Luniks: Всем привет, может кто-то помочь с тем как с помощью тонапи понять какой токен был отправлен в транзакции, в документации ничего не нашёл, на практике куча всего перепробовал, тоже никак не смог получить информацию о токене который передаётся, и вопрос назревает, возможно ли вообще эту инфу получить?

Luniks: Как пример транзакция с передачей токена: https://tonviewer.com/transaction/72e704e0a50a849308a5cf49c3da5187be5ffb979c260c77b28fa21a9956afbc (reply to 317762)

🐼 Sild: могу предложить вызвать get_wallet_data на destination и попарсить jetton

Denis: Ну тут как всегда XY-problem

наз: пора бы уже доку наполнить бэст практисами как будто (reply to 317765)

Denis: Опять я? (reply to 317766)

Vladimir: https://docs.ton.org/v3/guidelines/dapps/asset-processing/jettons#best-practices-on-jettons-processing (reply to 317766)

наз: старовата уже, с тонвебом (reply to 317768)

Denis: При всем моём уважении к Анатолию эта дока не сильно улучшает качество онбординга. Её давно надо переписать. (reply to 317768)

Denis: Так что? Опишите конечную задачу? Поиск в чате по xy-problem поможет правильно это сделать (reply to 317762)

Luniks: Мне просто нужно узнать какой  токен отправляется в транзакции, и всё. Чтобы дальше с этим работать (reply to 317771)

Denis: Зачем?

Luniks: В скрипте использовать данную информацию, для пополнения баланса пользователям

Denis: Ооооооо

Denis: Классика. Я же говорил

Luniks: Что это значит 😅 (reply to 317776)

Luniks: Если это классика, то значит решение есть?)

Vladimir: Смотрите actions, ищете jetton transfer, проверяете адрес. (reply to 317779)

Denis: Да. Не надо изобретать велосипед

Denis: А этого не слушайте - он остера перечитал (reply to 317780)

Max: Да продолжат делать в том же духе

Max: Даже без вредных советов

Denis: Да. Пофиг. Я документацию написал, в чате ответил. А дальше каждый должен иметь право выстрелить себе в ногу

Андрей: Каждый хочет попробовать написать свой велосипед (reply to 317786)

Emir: есть метод у бота апи для просмотра подарков у пользователя?

Luniks: Не в тот чат пишите (reply to 317789)

Vladimir: Чат русскоязычного сообщества разработчиков на TON. (reply to 317789)

Luniks: t.me/devs (reply to 317789)

Emir: Прошу прощения, спасибо за точное направление

fruitful-l: Является ли в tolk match приоритетной операцией (при сохранении газа) перед if else при работе с union types? Или нет смысла использовать его в каждом подобном случае?

Petr: В случае с lazy лучше всегда использовать match (reply to 317795)

Petr: А если это просто юнион тип, не сообщение которое загружено через lazy, то насколько я знаю match просто преобразуется в if-else, так что по газу будет тоже самое

fruitful-l: Спасибо

Luniks: Большое спасибо, нашёл в actions зацеп) (reply to 317780)

Luniks: Спасибо) (reply to 317764)

Denis: Я как автор этих самых экшенов говорю вы делаете ошибку, но свобода выстрелить себе в ногу это неотъемлемое право человека (reply to 317802)

Luniks: Какую ошибку?) (reply to 317819)

Luniks: Что в тонапи полез?)

Max: ) (reply to 317802)

Max: Откройте документацию TON API, страницу про actions и у вас отпадут вопросы (наверное) (reply to 317820)

Denis: Что вы на экшенах рядом с которыми в документации написано не использовать их для автоматического процессинга депозитов пытаетесь построить депозиты вместо того чтобы взять специализированное решение под вашу задачу

Max: https://docs.tonconsole.com/tonapi/rest-api/events  держите

Luniks: Ну блин, а как по другому тогда делать?

Luniks: Просто структура может измениться пишет, ничего страшного

Max: Вам же Денис вечером всё написал

User<8210612033>: 五个人排队内射 太猛了 (reply to 33)

Max: Даже указал решение

Luniks: Тот проект где пополнения реализованы?

Denis: https://t.me/tondev/315674

&rey: Так-с, к доке. Например, если я хочу посчитать оборот конкретного жетона по кошельку пользователя (отдельно сумму всех входящих и сумму всех исходящих переводов), мне хватит просто /v2/jettons/{jetton_id}/accounts/{account_id}/history? (reply to 317770)

Luniks: Там всё довольно таки сложно выглядит, честно, учитывая маленькие масштабы проекта, у меня нет желания разбираться в том что там есть и как это использовать (reply to 317836)

Luniks: Спасибо конечно что тыкнули носом меня в этот вариант, но я скорее всего откажусь от него

Denis: в принципе да. это метод по сути похож на то что под капотом делает велосипед. (reply to 317837)

Denis: ну на экшенах трудозатрат будет на порядок больше чем docker compose run сделать. да и вообще любой другой вариант если не хочется облажаться но я уже устал пытаться что-то донести (reply to 317838)

Luniks: Здесь больше наверное суть в том сколько времени займёт разбираться во всём этом, я не готов столько времени потратить на изучение этого сейчас (reply to 317842)

Max: Хочется посмотреть на то, у каких сервисов в тоне отвалится процессинг, если Денис завтра возмёт и поменяет структуру экшенов

Denis: кстати ровно завтра часть трансферов жетонов перестанет быть трансферами жетонов

Alexey: что за часть любопытно? (reply to 317845)

Denis: мне больше всего нравится история биржи которая сделала процессинг депозитов на экшенах с возможностью дважды засчитать одну и ту же сумму. (reply to 317844)

Luniks: Ахаахахах, что за биржа? (reply to 317847)

Denis: https://www.youtube.com/watch?v=15dlEgULK9k в прочем до прода уязвимость не доехала.

— 2025-08-13 —

ytiruces: import { Address, Cell, beginCell, toNano } from '@ton/core'; import { NFTItem } from '../wrappers/NFTItem'; import { compile, NetworkProvider } from '@ton/blueprint';  function nftContentToCell(content: any): Cell {   const contentString = JSON.stringify(content);   return beginCell()         .storeRef(             beginCell()                 .storeUint(0x01, 8) // Content type (off-chain)                 .storeStringTail(contentString)                 .endCell()         )         .endCell(); }      const content = {    "name": "W",    "description": "W",    "image": "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg", };  const contentCell = nftContentToCell(content); export async function run(provider: NetworkProvider) {      const createnft = provider.open(         NFTItem.createFromConfig({         index: 100,         collectionAddress: Address.parse('kQAbCslPPFGOuWP3xnUbKE44s4g0dyVJFe54SzghkYMyjTIv'),         ownerAddress: Address.parse('0QCEYXYZEqk3MROTR4adieUhWmw-E9ebrFqGkmOSAahSL6M8'),         individualContent: contentCell || null         //ownerAddress: null,         //content: null     }, await compile('NFTItem')));      await createnft.sendDeploy(provider.sender(), toNano('0.05'));      await provider.waitForDeploy(createnft.address);      // run methods on `createnft`     console.log('ID', await createnft.getNftData()); } (reply to 317851)

ytiruces: Contract deployed at address kQD7klJB1XgprMxPUr-nG3r4-tYHIPhJwm_hEKEzIIajJoPu You can view it at https://testnet.tonscan.org/address/kQD7klJB1XgprMxPUr-nG3r4-tYHIPhJwm_hEKEzIIajJoPu ID {   isInitialized: -1,   index: 100n,   collectionAddress: EQAbCslPPFGOuWP3xnUbKE44s4g0dyVJFe54SzghkYMyjYml,   ownerAddress: EQCEYXYZEqk3MROTR4adieUhWmw-E9ebrFqGkmOSAahSL0Vz,   individualContent: x{}    x{017B226E616D65223A2257222C226465736372697074696F6E223A2257222C22696D616765223A2268747470733A2F2F696D672E6672656570696B2E636F6D2F667265652D766563746F722F68616E642D647261776E2D6E66742D7374796C652D6170652D696C6C757374726174696F6E5F32332D32313439363232303231}     x{2E6A7067227D} }

Алексей: wallet лег?

sd: на твоем скриншоте ведь именно это и написано (reply to 317884)

Alexey: Метадата должна быть ссылкой на json файлик, если это оффчейн (reply to 317875)

ytiruces: function nftContentToCell(content: any): Cell {   return beginCell()             .storeUint(0x01, 8) // Content type (off-chain)             .storeStringTail(content)         .endCell() }  const contentUrl = 'https://s.getgems.io/nft/b/c/62fba50217c3fe3cbaad9e7f/1/meta.json' const contentCell = nftContentToCell(contentUrl);  export async function run(provider: NetworkProvider) {      const createnft = provider.open(         NFTItem.createFromConfig({         index: 100,         collectionAddress: Address.parse('kQAbCslPPFGOuWP3xnUbKE44s4g0dyVJFe54SzghkYMyjTIv'),         ownerAddress: Address.parse('0QCEYXYZEqk3MROTR4adieUhWmw-E9ebrFqGkmOSAahSL6M8'),         individualContent: contentCell     }, await compile('NFTItem'))); (reply to 317887)

ytiruces: Такой вариант тоже не работает у меня

&rey: Ни в каком индексере? Даже в ton.cx? (reply to 317891)

Denis: Там вроде нфт давно сломаны (reply to 317892)

ytiruces: https://explorer.tonnft.tools/address/EQAtbEBYPPPRZh2a4eCp3eOBiAwULNb2zEs4Gf_KEAOBqk0W тут тоже (reply to 317892)

Alexey: А там, кажется, прикол с тем как принято метадату у нфт получать… Индексаторы вызовут гет метод get_nft_content (не помню точно) у коллекции (reply to 317889)

web-assist 🧀: 1) почитай про snake format 2) Если ты не ковырялся в контракте коллекции, то он хранит в себе ref на ячейку с контентом ячейка с контентом представляет из себя еще две ссылки  2.1 - ячейка с полным контентом коллекции 2.2 - ячейка с commonContent  Например https://domain.com/collection.json https://domain.com/nft-metadata/  Сам контракт НФТ-предмета должен хранить в себе остаток от commonContent Например https://domain.com/nft-matadata/ + first-nft.json  Когда идет запрос на получение метаданных конкретной нфт - она запрашивается у контракта коллекции через геттер get_nft_content (reply to 317889)

web-assist 🧀: Это кратко поверхностно, если надо подробно - пиши в лс) за шекели все подробно расскажу и объясню Но вообще вся инфа в открытом доступе + может по чату произвести поиск по ключевым словам. Найдешь даже примеры кода

web-assist 🧀: Также есть вот этот замечательный гайд где все подробно расписано в формате "делай вот так все и заработает"

𝐙𝐄𝐑𝐎: Привет, я хотел бы узнать, с момента приобретения моего имени пользователя в Telegram, сколько времени мне нужно, чтобы выставить его на аукцион на платформе Fragment.

Vladislav: Никому случаем помощь с контрактами не нужна, сижу маюсь без дела🙃, если что - стучите в лс

⛰️ Roman ⛰️: Сколько бит занимает storeCoins(50000000)?

fruitful-l: 36 бит я думаю, если правильно количество нулей посчитал (reply to 317913)

⛰️ Roman ⛰️: Я думал store coins какое то фиксированное количество бит ставит (reply to 317914)

fruitful-l: А в чем был бы его смысл тогда. 4 бита на длину плюс в этом случае 4 байта на value (reply to 317915)

Oleg: Можно и фиксированное (полный инт), но это расходование ячеек впустую в 99% случаев (reply to 317915)

ytiruces: Гайд действительно замечательный, вот только testnet.toncenter.com похоже 500 ответ отдает при деплое коллекции: statusCode: 500,         statusMessage: 'Internal Server Error', (reply to 317898)

Павел: Привет всем

web-assist 🧀: Вряд ли ошибка в гайде) (reply to 317920)

Павел: Подскажите, пытаюсь сделать простой скрипт, для автовывода с тонкепера тоны, через Сид фразу. На другой кошелек. Чет ошибка при отправлении именно происходит, уже всю голову сломал, ии уже достал хД но по итогу нифига. Смысл какой мне на кошелек приходят тоны, я хочу аатомотизировать процесс, что бы через Сид фразу отправлял автоматический, и чекал к примеру раз в минуту на баланс. И как появилось отправлял на указаный мною кошелек. Может есть у кого готовое решение, или могу скинуть скрипт что вышло у меня.

ytiruces: Двояко звучит) искать ошибку в гайде? или вряд ли она там есть? (reply to 317923)

web-assist 🧀: там ее нет (reply to 317925)

ytiruces: И все же она есть. Тут вот issue на github, у многих такая же проблема, мне помог вот этот ответ. Но все же дальше появились новые вопросы. Вроде как все задеплоилось, судя по логам, но ничего ни к кошельку ни к коллекции не прикрепилось: Start deploy of nft collection... deploy...EQC18i70eL70tMtuOY0MFco6_YsbaKZQO67smoKM32TiOdmy seqno...14 Collection deployed: EQBbwTH7SHjFxkfmxpLz2Smz3suyDdJgzziRv0-mQ6tJBaKD Balance top-upped Start deploy of 1 NFT Successfully deployed 1 NFT Start deploy of new marketplace   Successfully deployed new marketplace Done in 59.28s. (reply to 317926)

ytiruces: Точнее метадата опять пустая. Но хотябы UNVERIFIED ушел

ytiruces: Хотя вроде как не сразу метаданные могут обновляться пишут. Ладно, подожду.

web-assist 🧀: Этот issue никак не относится ни к гайду, ни к контракту Вся инфа есть, куда и как копать я указал, разбирайся чел На гг в 99% случаев метаданные сразу отображаются (reply to 317927)

Vladislav: Делал не так давно подобное, но для vanity search, можете в ЛС постучать (reply to 317924)

Павел: Ну у меня ошибка при о правке и все, стукнул (reply to 317933)

Дмитрий: Ребят подскажите пожалуйста как деплоить highload кошелек? tonutils(py) не правильно подставляет timeout. Какие ещё методы есть?

Grigorii: Всем привет, а почему жетоны, задеплоенные мной помечаются как скам?

Vladislav: Стоит задуматься) (reply to 317940)

Grigorii: О чем? (reply to 317941)

Vladislav: А если без шуток, то их нужно верифицировать как указано в дефолтном гайде.

Vladislav: Типо жетоны каждый может выпустить ведь, все не верифицированные скрываются в кошельках при безопасном режиме

Grigorii: Ага, но не верефицированные и скам это разное. У меня они всегда были не верефицированные, но скам никогда не было, а щас начали сыпаться

Grigorii: И это чисто прикол tonviewer, на tonscan такого нет (reply to 317948)

Denis: а можно пример? (reply to 317948)

Max: блэклисты у всех разные потому что (reply to 317949)

Grigorii: Понял, спасибо (reply to 317952)

Vladislav: Как вариант кстати, могли задеплоить монету со схожим названием из подтвержденных, тогда логично было бы посетить как скам

Max: Ну из похожего по symbol только такое есть  https://github.com/tonkeeper/ton-assets/blob/main/jettons/STICK.yaml  Вроде раньше мы только при полном совпадении скам навешивали, но хз, как сейчас. Денис подскажет

fruitful-l: Я правильно понимаю, что если я использую специальный тип type ForwardPayloadRemainder = RemainingBitsAndRefs То мне не нужно вручную проверять правильность формата наполнения слайса этого payload?

Petr: Там будет просто слайс с какими-то данными, проверять или нет, вопрос того что нужно сделать с ними (reply to 317960)

fruitful-l: То есть RemainingBitsAndRefs это просто так обозванный слайс? (reply to 317963)

Petr: ага (reply to 317964)

adb: гайз вопрос, если тон асинхронный, то вызовы контрактов могут вычисляться параллельно, т.е. если у меня в контракте счетчик i забит, то при последовательном receive с разных адресов, я могу столкнуться с тем что параллельно ранятся эти транзакции? я понимаю, что они могут раниться не подряд, это ок, интересует, нужно ли мне оборачивать в лок счетчик как в классическом асинхронном программировании? или у контракта все равно есть меседж кью который обрабатывает последовательно?  псевдокод что я имею ввиду   contract {  i: int = 10  receive(){  i--;  respond ("hello"+i)  }  }   может ли здесь одновременно при двух вызовах быть такое, что конкурирует изменение i?

Оскар: да, у контрактов своя очередь и все приходящие месседжи на этом контракте будут обрабатываться последовательно (reply to 317980)

adb: благодарю, иначе жесть была бы) (reply to 317981)

Combot: Combot выдал(а) предупреждение Вика Иванова (3/3) Reason: 1 reports (reply to 317983)

Combot: Combot кикнул(а) Вика Иванова

— 2025-08-14 —

X1ag: /report (reply to 317831)

Mik: Здравствуйте! Я пытаюсь настроить wallet connect для кошелька внутри телеграмм и сталкиваюсь с такой проблемой, можете помочь?

Vladislav: С телефона попробуйте (reply to 318005)

adb: всем привет, а можете порекомендовать, может есть репка в открытом доступе, которая врапает методы контракта (на такте) в тонапи чтобы можно былов ЮИ протестировать контракт и его методы?

adb: и еще вопрос, если контракт протупил и у него мало баланса для стореджа, можно ли с овнера на него выслать ТОН или он будет уже мертвый?

Mirka: Storage fee списывается при исходящей транзакции, так что можно пополнить. Вдобавок баланс контракта должен уйти в минус(долг вроде должен быть 0.1), чтобы откинуться, так что время на пополнение есть (reply to 318011)

Mirka: https://docs.ton.org/v3/documentation/smart-contracts/transaction-fees/fees-low-level#storage-fee (reply to 318011)

fruitful-l: может кто-то сталкивался, или сможет сходу догадаться, почему в feature-rich жетоне проверка checkEitherForwardPayload идет только при отправке без custom payload? https://github.com/tact-lang/jetton/blob/a15f508cc78e8d946d7707db3c29a47c38f7175b/src/contracts/feature-rich/jetton-wallet.tact#L31

Viacheslav: запросил reindex но на тонвьюэр не обновились метаданные.. мы поправили json на бэке и хотелось бы чтобы на тонвьюэр изменения были видны (reply to 317736)

Ярик: Привет! Как получить транзакцию которая отправляется от фрагмента в wallet/tonkiper и др кошельки(на подтверждение). Она не отображается в сети так как ещё не отправлена. Но отображается в кошельках, так что где-то есть, либо эти хуебесы обмениваются напрямую

Ярик: Реально недогений

Ярик: Вопрос в силе (reply to 318041)

Max: Её нигде не существует в природе. Есть только эмуляция (reply to 318041)

Ярик: Ну как-то же эти данные передаются туда (reply to 318054)

Max: А что за жеттон такой с вайтлистом, лол (reply to 318050)

Kr1Lbo: Привет Кто-то знает что это за ошибка и из-за чего она возникает? Помогите советом HTTP 406 Error for https://tonapi.io/v2/blockchain/message: {'error': 'error code: 0 message: cannot apply external message to current state : External message was not accepte d\nCannot run message on account: inbound external message rejected by transaction 70F81BFCF9218EC11F61229B466D1DC0C263311E7A7E108B3A6E60D1EB4DD300:\nexitcode=33, steps=23, gas_used=0\nVM Log (truncated):\n...te NOW\nexecute LEQ\ne xecute THROWIF 36\nexecute PUSH c4\nexecute CTOS\nexecute LDU 32\nexecute LDU 32\nexecute LDU 256\nexecute LDDICT\nexecute ENDS\nexecute XCPU s4,s3\nexecute EQUAL\nexecute THROWIFNOT 33\ndefault exception handler, terminating vm with exit code 33\n'}

Max: Блокчейн ничего не знает о вашем намерении что-либо подписать  Знает только тонапи (reply to 318056)

Denis: это штатное поведение системы. (reply to 318057)

Denis: я б ему ответил но он хамит (reply to 318062)

Ivan: косячная подпись, может seqno не передаете (reply to 318061)

Ярик: я статус человека отправил просто) (reply to 318064)

Kr1Lbo: Ну вот я тоже на seqno думал, но как я понял библа tonutils на python сама отправляет seqno. Такая ошибка возникает 1 раз из 10 транз где-то и после неё всё дальше нормально работает. Лучше вручную seqno пробрасывать? (reply to 318065)

Оскар: переданный секно не равен секно который у кошелька в данный момент (reply to 318061)

Denis: хуебесом меня назвал (reply to 318066)

Max: так а что вы междусобойчиком меняетесь напрямую (reply to 318069)

Оскар: я предполагаю что пытаешься отправить месседж в цикле или подобное? нужно дожидаться изменение секно после отправки месседжа перед тем как отправить следующий (reply to 318067)

Kr1Lbo: fragment оплата звёзд, получаю все данные, отправляю транзу, дожидаюсь подтверждения транзы через seqno, сон пару секунд и по кругу (reply to 318071)

Max: Если вам интересно то, что прилетает на подпись от даппа (не результат, что рисуется в интерфейсе кошелька) – копайте в сторону стандарта тонконнекта (reply to 318041)

Ярик: Я ж любя Прост фрагмент апи закрыл и нигде ниче нет Нейронка видимо тож вахуе и не даёт норм ответа Говорит ловить пуши, но там данных нет и ещё тонну нерабочих вариантов (reply to 318069)

Оскар: так или иначе код говорит о проблеме с отправленным секно, нужно копать в эту сторону (reply to 318072)

Kr1Lbo: понял, спасибо! (reply to 318075)

Ярик: Ограничения API TON TON Center API v2/v3, Chainstack, Tatum:  Предоставляют методы getTransactions и transactionsByMessage , но работают только с подтверждёнными данными.  Параметр archival=true запрашивает архивные ноды, но не влияет на статус транзакций  Jetton-транзакции:  Методы вроде /jetton/transfers (Tatum) также возвращают исторические данные.  Итог Данные о "отправлениях на подтверждение" недоступны через блокчейн или публичные API. Для автоматизации: (reply to 318041)

Max: Так я вам дал ответ уже, чтож вы LLM сюда тащите  Если нужен пейлоад, который летит со стороны фрагмента – смотрите в сторону TON Connect  Если вам интересно, откуда в интерфейсе кошелька транзакция и комиссия нарисованы – это эмуляция TON API (reply to 318077)

pluшak: кто-то может дать рабочий пейлоад для отправки usdt?

Max: Могу на свой адрес собрать (reply to 318081)

pluшak: я чатом ошибся?

Max: Вообще, похоже на правду (reply to 318083)

Max: Какой экзит код?

Denis: это норма. а не норма что у вас верстка поехала. что за браузер?

Max: Это нотифай о трансфере  Это нормальная ситуация, если вам не надо ончейн обрабатывать этот нотифай (reply to 318089)

Denis: ну другого и не будет при .storeCoins(BigInt(1)) в форвард пейлоад (reply to 318094)

pluшak: спасибо, проблема решена

Max: А браузер всё-таки какой? (reply to 318098)

pluшak: chrome (reply to 318099)

adb: гайз, а  такт умеет десериализацию boc в Cell? мне нужно как-то проверить является ли нфт в коллекции или нет, и я так понимаю единственный способ это считать код нфт итема + адрес коллекции + индекс хеш, так вот не понятно как код закинуть, если у меня есть бос

adb: вот так делает тонвеб например   Cell.oneFromBoc('B5EE9C724102140100021F000114FF00F4A413F4BCF2C80B0102016202030202CD04050201200E0F04E7D10638048ADF000E8698180B8D848ADF07D201800E98FE99FF6A2687D20699FEA6A6A18....')

web-assist 🧀: У коллекции есть метод который может тебе посчитать адрес нфт предмета по его индексу. Он так и называется  get_nft_address_by_index(int index) (reply to 318102)

adb: да, но там вроде я из одного контракта не могу другой вызывать? (reply to 318104)

web-assist 🧀: А, тебе ончейн надо?

adb: да

web-assist 🧀: А коллекция своя или будут разные?

adb: коллекция своя одна фиксированная

𝐙𝐄𝐑𝐎: Я здесь один, кто не понял, о чём вы говорите? Плюс, я знаю, что вы работаете над проектами в сети TON.

&rey: cell("te6cck...") (или передайте из тайпскрипта). (reply to 318102)

adb: т.е. можно с base64 тоже? так подходит вроде спасибо (reply to 318111)

fruitful-l: Подскажите, что именно проверяет checkEitherForwardPayload в контракте Jetton? Что у пэйлоуда правильный формат из бита either и ячейки/ссылки на ячейку? () check_either_forward_payload(slice s) impure inline {     if (s.preload_uint(1)) {         ;; forward_payload in ref         (int remain_bits, int remain_refs) = slice_bits_refs(s);         throw_unless(error::invalid_message, (remain_refs == 1) & (remain_bits == 1)); ;; we check that there is no excess in the slice     }     ;; else forward_payload in slice - arbitrary bits and refs }

Оскар: если either 1, то форвард лежит в ячейке, в этом случае проверяет что никаких больше данных помимо either бита и одного рефа (самого форварда) не осталось в слайсе если either 0, то форвард весь оставшийся слайс (reply to 318120)

fruitful-l: Странно просто тогда, что в feature-rich жетоне эта проверка идет только при отсутствии custom payload, хотя они никак не связаны. Или я чего-то не понимаю? https://github.com/tact-lang/jetton/blob/a15f508cc78e8d946d7707db3c29a47c38f7175b/src/contracts/feature-rich/jetton-wallet.tact#L31 (reply to 318121)

/B4ckSl4sh\: Судя по всему набагали немного, спасибо большое что заметили, исправим (reply to 318122)

Alex: А redoubt умер окончательно? А то было удобный вариант сделать запросы по всему блокчейну

Eugene: В смысле продукта re:doubt Tonalytica? С тех пор, как в Dune добавили данные по TON, вроде бы там можно делать всё то же (reply to 318128)

adb: уже часа три долбаюсь с этим, пыталюсь в такте посчитать нфт айтем адрес, чтобы совпадало с тем, что выдает тонвеб. везде выходят разные хеши, может, ошибка где? стандартный вариант из доки contractAddress(StateInit { code: nftCode, data: initData.toCell() }); к успеху не привел, и я решил попробовать перенести код подсчета с контрака в такт, но все равно не совпадают адреса. уже не знаю что делать 😅  нфт код взял с base64 строки, как советовали выше, и адрес коллекции собственно корректный. тонвеб адрес совпадает с тем, что вижу на сканере, а вот то, что получаю из своего такт кода - нет

— 2025-08-15 —

Kr1Lbo: Привет, кто работал с fragment покупкой звёзд не сталкивался с тем, что маленькие сайзы работают нормально, а как сайз по-больше, так звёзды не пришли? То есть по мелочевке 50-150 звёзд всё приходило, а первый раз отправил транзу с сайзом выше и звёзды не дошли. При этом транза оплаты выглядит полностью нормально, никаких ошибок.

Andrey: let stateInit = StateInit {        code,        data,  };  return contractAddress(stateInit); (reply to 318131)

&rey: Так data же совершенно не то. (reply to 318131)

adb: спасибо, попробую (reply to 318161)

RuHunt: Всем привет, может кто даст link на MCP/Full Docs для разработки на TON: недавно была новость о едином решении по документации, но потерял в ленте: official TON Core или Dev Channel - не могу вспомнить. Кому не сложно - дайте инфу. Спасибо.

RuHunt: Сорри, нашел - расширение с данными по технологиям для IDE: https://t.me/toncore/69 (reply to 318164)

Алексей: всем привет! взял контракт продажи у GetGems v3r3. деплою, все работает, выставляю на продажу, отмена корректно работает, покупку еще не проверял проблема: при попытке получить данные о продаже через get_sale_data или get_fix_price_data exit code всегда 9 что может быть не так? если нужно, вот контракт продажи: kQDJ3c-j5R2JyTgEsQp3EA2JG6PLnJQ0iFjpBWSASaKefKUa

наз: деплоишь неправильно скорее всего (reply to 318176)

⛰️ Roman ⛰️: Где то пытаешься достать из ячейки то, чего нету или достаешь неправильный тип (reply to 318176)

Виталий Зуев: Всем привет, написал человек предложил крутить тон в связке с xrp, говорит что 3-4% в одного круга, подскажите это скам?

fruitful-l: Если вам пишет незнакомый человек и предлагает что-то крутить, скорее всего это скам (reply to 318182)

web-assist 🧀: Если вам вообще пишет незнакомый человек и что-то предлагает - скорее всего это скам (reply to 318183)

adb: ребят, а врапперы блупринт сам создает или нужно самому писать?

Andrey: только такт автогенерирует враперы (reply to 318186)

adb: да, с тактом пишу в блупринт, но автоматом билд не дает враперов, нужно чето еще доставить? в папке билд есть тс файлы, но они не похожи на адекват враппер, там походу кусок только релевантный (reply to 318187)

Andrey: Возможно не настроен конфиг,  https://docs.tact-lang.org/book/config/  конкретнее возможно мод стоит без враперов https://docs.tact-lang.org/book/config/#projects-mode (reply to 318188)

adb: вот странно, стоит фулл и все равно не выдает враперов (reply to 318189)

adb: даже по гайду создал тестовый проект и там нет папки враперс и билд так же не выдает их 😅

adb: а, я понял, по сути враперы дают экспорт из билд/контракт/мойконтрак.тс, по сути я могу их сам тянуть из билд папки

Andrey: так обычно и тянут из билд папки чтобы враперы были синхронизированы с контрактами (reply to 318192)

fruitful-l: А что мешает реализовать авто генерацию оберток на других яп? Просто это никому не нужно, или реализуемо только с тактом? Я просто не знаю как она у них работает

&rey: Канонически делают экосистему на Typescript, поэтому врапперов на питоне автоматически и не генерируют, наверно. (reply to 318194)

fruitful-l: Нет, в смысле генерацию ts врапперов у func, tolk (reply to 318195)

&rey: К FunC вряд ли что-то кроме фиксов приделают. Tolk... разве он не генерирует (не помню)? (reply to 318196)

fruitful-l: Если генерирует, мне будет очень обидно, но вроде нет

Petr: Пока что нет :(( (reply to 318198)

fruitful-l: Я больше рад чем расстроен (reply to 318199)

adb: на платной основе нужен девелопер, который поможет сформировать правильно транзу в тонвеб на уже написанные контракы, в лс

Denis: Тонвеб не надо использовать

Andrey: Здравствуйте. Буду очень благодарен вам, если подскажете как купить просроченный домен в  домене ton Спасибо 🙏

sd: Как вариант юзать поиск по чату

Дмитрий: Как вариант - dns.ton.org (reply to 318212)

Dima: Здравствуйте, разрабатываю крипто обменник и нужно 500 TON тестових где их можно взять ?

Max: платно - на tonconsole.com  *цензура* - написать f_closer в личку

Max: а сколько ещё слово *цензура* будет в блэклисте? это же маразм

Denis: Пиши безплатно как те кто боится бесов (есть такая шиза)

⛰️ Roman ⛰️: Можно зкупить, но это ззззплатно (reply to 318220)

sd: Покажи как там это сделать (там это сделать нельзя :)) (reply to 318218)

— 2025-08-16 —

Zing: 🚀 Hiring TON Dev – Telegram Mini-App PVP Game  Looking for an experienced TON blockchain + Telegram WebApp dev to build a PVP betting game (spin-the-wheel style) where win % = amount contributed.  Must-have features:  • Full source code (no obfuscation)  • TON deposits & payouts (testnet → mainnet)  • 1 gift fee from each round → my wallet (auto)  • Admin panel (no hidden rigging)  • Hosted on my server  • Transparent game logic  💰 Budget: Flexible for the right dev ⏳ Deadline: Negotiable ⚡ Payment via milestones or trusted escrow

Zing: Message me (reply to 318243)

ytiruces: Всем доброе утро. В рамках этого гайда я решил попробовать собрать и заминтить свой nft-контракт с незначительными изменениями. В этом гайде ссылки на исходники используемого nft-контракта нет, он передается закодированной base64 строкой: const NftItemCodeCell = Cell.fromBase64(   "te6cckECDQEAAdAAART/APSkE/S88..." ); dataCell.storeRef(NftItemCodeCell);  Я собрал вот этот nft-контракт и по аналогии передал его в коде, только не через fromBase64(), а через fromHex(), так как пока не разобрался как BOC собрать, а потом его в base64 закодировать:      const NftItemCodeCell = Cell.fromHex(         "b5ee9c7241020e010001e4000114ff00f4a41..."     );     dataCell.storeRef(NftItemCodeCell);  При запуске процесса минта вроде все прошло без ошибок, но в tonviewer видно, что при операции минта 0x8016be45 возникает Exit code 7 · Type check error.  У меня в связи с этим 2 вопроса:  Какой код контракта NFT использовался в гайде(На коллекцию, маркетплейс ссылки в гайде есть, а на nftitem нету)?  Как отдебажить Type check error?

⛰️ Roman ⛰️: Я проверил по количеству строк кода, это контракт гетгемс которому уже 3 года, там возможно есть баги которые нужно убрать, либо настроить его под себя. Ещё скорее всего за эти 3 года что то изменилось. Можете попробовать этот контракт, он более актуальный и у меня работает (reply to 318250)

ytiruces: Спасибо, проверю. (reply to 318268)

⛰️ Roman ⛰️: Вы пользуетесь blueprint? В нём есть функция compile, которая компилирует контракт и возвращает код уже в cell (reply to 318250)

ytiruces: Да пользуюсь. Только это надо еще разобраться как этот cell потом забрать и что-то с ним делать. Пока точно знаю, что можно после компиляции взять hex из NFTItem.compiled.json (reply to 318274)

⛰️ Roman ⛰️: Если вы минтите с помощью контракта коллекции, то при деплое коллекции закидываете туда этот код cell в качестве кода для NFT item. Так же если вдруг понадобится, то можно превратить этот cell в hex (reply to 318275)

ytiruces: При сборке ошибка, не может найти функцию equal_slices(collection_address, sender_address) (reply to 318277)

⛰️ Roman ⛰️: О да, замените на equal_slice_bits (reply to 318278)

ytiruces: Собрался с таким hex: b5ee9c7241020e01000229000114ff00f4a413f4bcf2c80b01020162020d0202cb030803b9d0c8871c02497c0f83434c0c05c6c2497c0f83e903e900c7e800c5c75c87e800c7e800c1cea6d003c05c12cf8c081b4c7f4cfe08417f30f45148c2ea3a24c840dd78c9004f6cf380c0d0d0d4d60840bf2c9a884aeb8c097c12103fcbc204050700ca306c22345232c705f2e19501fa40d45423405235f01821c701c0008e4401fa00218e3a821005138d9170c85006cf1658cf161034413073708010c8cb055007cf165005fa0215cb6a12cb1fcb3f226eb39458cf17019132e201c901fb00925f04e2925f03e201f65135c705f2e191fa4021f016fa40d20031fa00820afaf0801ba121945315a0a1de22d70b01c300209206a19136e220c2fff2e192218e3e821005138d91c85009cf16500bcf16712449145446a0708010c8cb055007cf165005fa0215cb6a12cb1fcb3f226eb39458cf17019132e201c901fb00104794102a375be2060082028e3526f0168210d53276db103744006d71708010c8cb055007cf165005fa0215cb6a12cb1fcb3f226eb39458cf17019132e201c901fb0093303234e25502f01800727082108b77173505c8cbff5004cf1610248040708010c8cb055007cf165005fa0215cb6a12cb1fcb3f226eb39458cf17019132e201c901fb00020120090c0201f40a0b00113e910c1c2ebcb85360003b3b513434cffe900835d27080269fc07e90350c04090408f80c1c165b5b60001dd81e4659fac678b00e78b6664f6aa40009a11f9fe02f1392515e  А при деплое коллекции и минте ошибка: error: 'LITE_SERVER_UNKNOWN: cannot apply external message to current state : External message was not accepted\n' +            'Cannot run message on account: inbound external message rejected by account B5F22EF478BEF4B4CB6E398D0C15CA3AFD8B1B68A6503BAEEC9A828CDF64E239 before smart-contract execution' (reply to 318279)

⛰️ Roman ⛰️: Вы пытаетесь задеплоить с помощью экстернал сообщения? (reply to 318282)

ytiruces: Судя по коду это internal (reply to 318283)

⛰️ Roman ⛰️: Судя по всему, я могу ошибаться, но вы отправляете сначала экстернал на кошелек, а потом с кошелька интернал на контракт. В blueprint есть консоль команда npm blueprint run с помощью неё вы можете по QR привязать свой кошелек и отправлять деплой сразу интернал сообщением с помощью ContractProvider из @ton/core. Прим.:  export class NftCollection implements Contract {     constructor(         readonly address: Address,         readonly init?: { code: Cell; data: Cell },     ) {}      async sendDeploy(provider: ContractProvider, via: Sender, value: bigint) {         await provider.internal(via, {             value,             sendMode: SendMode.PAY_GAS_SEPARATELY,             body: beginCell().endCell(),         });     } } (reply to 318284)

⛰️ Roman ⛰️: Если вам все же нужно автоматизировать деплой с помощью экстернал сообщения и кошелька, то никак помочь не могу, я на TS ещё это никогда не делал (reply to 318284)

ytiruces: Спасибо, поразбираюсь

Иван: Слушайте, пытаюсь отправить с помощью highload wallet v3 1000 транзакций, буквально 3 дня назад все работало, а теперь мне выкидывается  LITE_SERVER_UNKNOWN: cannot apply external message to current state : failed to parse external message: external message too large, rejecting  Не подскажите, что делать? МБ проблема в toncenter API? Есть какие-то альтернативы?

Denis: Транзакции поменялись

Иван: и что делать? 400 одновременно он пережевывает, а вот 500 уже не хочет (reply to 318312)

Иван: есть ли какие-то API, которые переваривают большие external messages? Или это ограничение TON уже?

Denis: Разбивайте на два экстернала

Denis: Ограничение блокчейна

наз: триггер кошелька всегда сопровождается экстерналом (reply to 318286)

Artem: How long does it take to get a project approved in tonconsole?   сколько нужно ждать чтобы одобрили проект в tonconsole?

spoof1x: Приветик ребятки. Столкнулся с такой проблемой. Работаю с TonapiClient ( конкретно WalletV4R2 ). Используя from_mnemonic передаю туда сид фразы и постоянно он генерирует несуществующие адреса, но мой адрес не может получить. Что делать? Использовал и из Tonkeeper и из тг кошелька. И даже разные функции. Тут явно я что-то делаю не так

Vladislav: Если действительно нужна помощь, то советую к вопросу прикреплять пример кода, тут гадалок нет, предсказывать что именно не так сделали (reply to 318328)

spoof1x: да что прикреплять то xd "MNEMONIC": "owner essence..." - и так 24 слова  client = TonapiClient(api_key=self.api_key, is_testnet=self.is_testnet)             wallet, public_key, private_key, mnemonic = WalletV4R2.from_mnemonic(client, MNEMONIC)             balance_nano = await wallet.balance()             balance_ton = balance_nano / 1_000_000_000             return balance_ton ошибка: Ошибка получения баланса: HTTP 404 Error for https://tonapi.io/v2/blockchain/accounts/EQDM5rABBYlffM-fm1ler8YBtsvLAhCMJ-8vYVgwaaH2HPm7: {'error': 'entity not found'} Баланс: None TON (reply to 318330)

spoof1x: Тут почти вся база. Мне кажется, что я просто получаю не те сид фразы

Denis: А что за пакет такой?

spoof1x: tonutils (reply to 318333)

Vladislav: Какие ещё аргументы принимает данный метод опциональные? Это вроде python Либа судя по тому что в сети нашел (reply to 318331)

spoof1x: wallet_id (reply to 318335)

Vladislav: Вы в testnete проверяете или mainnet? (reply to 318336)

spoof1x: И там, и там пробовал (( (reply to 318337)

spoof1x: Короче понятно стало ) Тип конктракта - Contract type wallet_v5r1 . Я использовал старый видимо (reply to 318331)

ytiruces: 🤦‍♂️ на кошельке просто деньги закончились )) Все задеплоилось и заминтилось как надо, можно дорабатывать контракт (reply to 318287)

Данила: Привет! А кто-нибудь знает, можно ли мини аппы поинтить напрямую на .ton/.onion/.eth ресурсы?

ytiruces: Большое спасибо за подсказку, дело продвинулось! (reply to 318268)

fruitful-l: Что произойдет, если coins попытаться уронить в минус? 5 exit code?

Petr: Похоже на то (reply to 318351)

fruitful-l: Спасибо, не успел сам дописать проверку, ибо пошел контракт полноценный писать) (reply to 318352)

Combot: Combot выдал(а) предупреждение Ajeet Kumar (1/3) Reason: 1 reports (reply to 318355)

Sergey: Привет всем, есть тут любители zk?   Искал способы добавить zk в TON. Столкнулся с тем, что руководство в доках сильно устарело и не очень удобное, поэтому сделал свою утилиту и библиотеку для интеграции zk-языков в TON  Сейчас можно генерировать контракты-верификаторы groth16 на всех трёх языках (Tact, Tolk, FunC). Для Tolk и FunC ещё доступен импорт врапера В репозитории примеров уже есть Circom и Noname, сейчас работаю над интеграцией с gnark   Буду рад любой обратной связи, сейчас жду, когда моё руководство добавят в доку TON  npm пакет для генерации верификаторов: https://github.com/mysteryon88/export-ton-verifier Репа с примерами:   https://github.com/zkTokenTip/zk-ton-examples

Oleg: groth verify бы вообще сделать инструкцией TVM, будь моя воля)

&rey: polyeval бы вообще сделать инструкцией TVM, будь моя воля)  для зк-старков (reply to 318361)

— 2025-08-17 —

5b 44 43 54 5d: TON DNS не работает, да?

Andrey: Работает (reply to 318382)

Tim: А дока ТОН в курсе, что вы ждете? (reply to 318360)

5b 44 43 54 5d: Странно, у меня ни на одном устройстве не открывается даже foundation.ton , не говоря уже про моё приложение Нужные порты открыты, сервис с tonutils-reverse-proxy стартует и ошибок нет Пробовал с Linux (Arch, Debian), с Android и с Windows, нигде не открылось.  Мб я что-то делаю не так? :D (reply to 318383)

5b 44 43 54 5d: Под VPN ничего, без ERR_CONNECRION_RESET 🧐 (reply to 318386)

Sergey: Да, PR отправил (reply to 318384)

Tim: Нецензурно хочется выразиться про удаление сообщений с меншинами…

Tim: Надо у iftryalexg спросить, актуальны ли такие обновления доки

V: Аналогичные проблемы. Ни через телеграм, ни через тон прокси с мака, ни через тон ран, ни через mytonwallet не открывается. (reply to 318385)

5b 44 43 54 5d: Победил, в принципе 😁 Через .adhl по прокси запускается по http, но не могу додуматься теперь как отдавать валидно https (reply to 318385)

Andrey: никак, только через http, либо самому кодить что-то типо самоподписанного рут сертификата, ставить его в систему и через него открывать SSL (зачем?) (reply to 318396)

5b 44 43 54 5d: Ну по идее ssl должен на уровне adhl сервера обрабатываться, то есть мне это не нужно трогать совсем (reply to 318397)

Andrey: не должен, ADNL сам по себе шифрует трафик (reply to 318399)

5b 44 43 54 5d: да, в этом есть смысл (reply to 318401)

V: А foundation-то открылся? (reply to 318396)

5b 44 43 54 5d: Не, это какая-то телеграмовская проблема. Может их gateway сдох или что-то в этом плане, не хочу разбираться  Меня больше в общем доступность за adnl беспокоила (reply to 318404)

whoami: Всем привет 👋 подскажите, сколько применено может стоить разработка Telegram Mini App с внедрением смарт контрактов (звезды, TON). Больше никаких механик, кроме транзакций почти нет.

Potato: Большинство берут цены с потолка. Иногда даже не зная, что нужно делать. С такими работать не советую. Прежде всего стоит подготовить либо тз, либо какое-то понимание конечного продукта. Тогда уже сам разработчик может помочь тз составить, чтобы работу можно было и принять и сдать нормально. Пока запрос выглядит "у меня с машиной что-то не так, как думаете сколько будет стоить ремонт?" (reply to 318415)

whoami: Я просто сам разработчик, и в этой сфере раньше не работал. Хочется понимать ценовую политику, хоть чуть-чуть

Vladislav: Бери по часовой ставке, для начала кажется проще так (reply to 318420)

&rey: Зачем? Да чтобы secure context был, как минимум.   Да, я вот думаю, что приложение прокси должно выпускать локально корневой сертификат... а, стоп, ещё же список выпущенных для certificate transparency... (reply to 318397)

Pavel: могу пояснить как работает большинство (reply to 318420)

Flyheck: Подскажите, пожалуйста, где может быть ошибка в этом манифесте? https://gist.githubusercontent.com/Volaheck/80beb593810346bf9b19b9d9759fa85e/raw/c24f97ac69f55c9f43c5dc2f07b9bd28a5a54d8d/tonconnect-manifest.json

Flyheck: без запятой в конце тоже пробовал, не принимает (reply to 318444)

Denis: ну с запятой это точно не валидный json

Flyheck: запятая - это последняя попытка пофиксить ошибку:D

Flyheck: без запятой все так же:

Михаил: Там есть запятая ещё (reply to 318449)

Flyheck: https://gist.githubusercontent.com/Volaheck/80beb593810346bf9b19b9d9759fa85e/raw/9d4810c574491500bfde3d69ff59fa5142aa86af/tonconnect-manifest.json (reply to 318452)

Flyheck: там после каждого редактирования линка меняется

Михаил: Ты точно ту ссылку передаешь в тонконнект? (reply to 318454)

Flyheck: 100%  <TonConnectUIProvider manifestUrl="https://gist.githubusercontent.com/Volaheck/80beb593810346bf9b19b9d9759fa85e/raw/9d4810c574491500bfde3d69ff59fa5142aa86af/tonconnect-manifest.json">

Max: это все рассуждения не в то русло (reply to 318455)

Max: Достаточно посмотреть на хэдеры респонса (подсказка: смотреть на Content-Type), чтобы понять, что не так

Max: Время идёт, но обжигаться на этом с гитхабом не перестанут никогда

Denis: а почему контент тайп влияет? (reply to 318458)

Max: Надо сорсы сдк смотреть. Просто помню, что раз в пару месяцев кто-то да напарывается с этим (reply to 318461)

Flyheck: а что именно с гитхабом не так? уже ведь пару лет стабильно на нем работает (reply to 318460)

Kiba: Это @wallet возвращает ошибку? (reply to 318449)

Kiba: SDK не смотрит контент (reply to 318462)

Max: SLA не супер хороший временами (reply to 318463)

Flyheck: mytonwallet (reply to 318464)

Flyheck: с кипером норм отрабатывает (reply to 318467)

Artem: можете подсказать норм библиотеку для типов ts ответа сервера тон, для транзакций и тд

&rey: Сервера какого-какого, прошу прощения? (reply to 318471)

Artem: TON HTTP API https://toncenter.com/ (reply to 318472)

&rey: Ну, обычно используют TonClient из @ton/ton (https://github.com/ton-org/ton/blob/master/src/client/TonClient.ts). (reply to 318473)

Роман: привет всем! а было ли и может ли быть (понимаю что крайне в теории наверное) что мастерчейн разделился на 2 и больше шардов? или всегда был только один шард 80000... на мастере?

Denis: Не может

fruitful-l: В стандарте жетона проверка на отрицательный баланс жетонов после трансфера там просто «на всякий случай»? Он же никак не может быть отрицательным

Оскар: смотря как смотреть, эта проверка нужна чтобы удостоверится что отправили столько жетонов, сколько возможно и если нет - то упасть с указывающим на это экзит кодом без этой проверки конечно контракт и так упадёт во время сохранения стейта, так как coins (varuint16) не может быть отрицательным, но экзит код будет непонятным для этой ситуации (reply to 318482)

fruitful-l: Но упадет он разве не до этой проверки? (reply to 318484)

Оскар: почему же? (reply to 318485)

fruitful-l: Он упадает не на моменте выхода интеджера из рэнжа? (reply to 318486)

Оскар: если что, в твме только один тип инта - int257 то что мы пишем (и читаем) из ячейки - просто кол-во бит которое должно записаться с соответствующими проверками (ака если пишем uint, то он проверит что мы ему дали положительное число) (reply to 318488)

Denis: Интересно кстати сделать жетон с отрицательными балансами

fruitful-l: На моменте вычитания из баланса (который является coins) он не проверит, что он должен быть положительным? (reply to 318489)

/B4ckSl4sh\: Есть даже такой, где можно отправлять отрицательные суммы, @pcrafter делал (reply to 318490)

Оскар: баланс является coins пока находится в ячейки даты, чтобы ты мог провести арифметику с ним - тебе надо его из этой ячейки вычитать, а то есть он уже будет int257 (reply to 318491)

fruitful-l: понятно, спасибо (reply to 318493)

Denis: Стандарту отправка не удовлетворяет (reply to 318492)

Oleg: Чего уж там, с комплексными даешь!) (reply to 318490)

&rey: Ожидаю либу для работы с float257 (257-битными плавающими), включая логарифмы и тому подобное! (reply to 318499)

Oleg: Так float же не дает детерминизма, наверно, этому не место в блокчейне

&rey: Так эмуляцию на существующих опкодах можно построить детерминированную. (reply to 318501)

Vladislav: Кстати как то тестил с жетонами отрицательную отправку, типо если если у вас uint то по логике сишной при вычитании 0 - 1 вы получите переполнение и должно стать максимальное значение, но по факту при передачи отрицательных  значений падает операция, вполне возможно что проверка в самой tvm идёт на подобные ошибки (reply to 318484)

Оскар: я выше сказал что в твме только один тип инта - int257, и я отмечу тот факт что не uint257, а int257 (reply to 318504)

— 2025-08-18 —

Combot: Combot выдал(а) предупреждение Ксения Долматенко (1/3) Reason: 1 reports (reply to 318513)

ytiruces: Доброе утро.  const wallet = await openWallet(process.env.MNEMONIC!.split(" "), true); wallet.contract.getBalance();  // Возвращает текущий баланс wallet.contract.getSeqno(); // Падает с ошибкой [Error : 0 : Unexpected string end] Почему getSeqno() тут падает с ошибкой?

ytiruces: error: '[Error : 0 : Unexpected string end]',       code: 503,

ytiruces: C MNEMONIC другого кошелька аналогично. Вчера вечером еще работало. Это что-то на стороне testnet.toncenter.com?

ytiruces: Попытался отретрейсить транзакцию на retracer.ton.org. Видимо все-таки с toncenter что-то

ytiruces: Что-то прям грустно, неужели только у меня такое?

Victor: у меня та же самая ошибка в testnet возникла когда запрашивал runGetMethod (reply to 318517)

Victor: видимо какие-то траблы с toncenter

Pavel: Ищем разработчика для создания Telegram Mini App с raffle-механикой, TON-платежами и NFT-логикой.  📌 Стек: React / Node.js / TypeScript / TonConnect / Telegram Mini App API   🎯 Задачи: - Разработка Mini App-интерфейса (лента лотов, билеты, профили) - Подключение TON-кошельков (Tonkeeper, Wallet) - Создание бэкенда: база данных пользователей, raffle-логика, платежная маршрутизация - Интеграция с RandomizeBot и внутренней логикой escrow-сигналов  💡 Плюс: опыт в крипто-проектах, знание TON SDK, понимание NFT-рынков  Формат: part-time / фикс на MVP   Оплата: USDT/Ton

Vladyslav: здравствуйте, отпишите в лс (reply to 318541)

Metabyte: +, если не трудно пожалуйста. (reply to 318542)

fruitful-l: Почему после этой операции в стэк добавляется еще одна величина с первой позиции? Внизу показывает, что это negate, который должен менять знак числа. Еще не успел прочитать fiftbase.pdf, поэтому не совсем понимаю

Petr: Кажется ошибка отображения, инструкция OVER как раз берет элемент под верхним и кладет его на вершину

/B4ckSl4sh\: Он кстати мало помогает в твм асме (reply to 318550)

fruitful-l: Спасибо, а где можно посмотреть такие подробные описания инструкций? В доке вроде не так расписано (reply to 318551)

Petr: Сейчас последнюю информацию о инструкциях можно найти тут https://txtracer.ton.org/spec/

fruitful-l: Что поможет лучше всего? Я сейчас кстати начал читать tvm.pdf, он актуальный, или тоже есть источники получше и новее? (reply to 318552)

&rey: Asm.fif разве что. tvm.pdf не обновлялся вроде никогда. (reply to 318556)

/B4ckSl4sh\: В твм пдф есть несоответсвия текущей действительности, но общее понимание он даёт неплохо (reply to 318556)

Petr: Asm.fif это для очень смелых духом :)) Там в целом ничего не понять так как это просто реализация ассемблера (reply to 318557)

Metabyte: Этот человек нейросеть! он живёт в блокчейне тон. (reply to 318552)

Petr: Для изучения асма, имхо, проще всего поэкспериментировать в playground (https://txtracer.ton.org/play/), там же можно и посмотреть как FunC код маппится на ассемблер Ну и описание вот тут https://txtracer.ton.org/spec/, как я уже скидывал (reply to 318556)

/B4ckSl4sh\: Кто нейросеть? (reply to 318560)

Metabyte: Вы (reply to 318562)

/B4ckSl4sh\: Каюсь, я нейросеть (reply to 318563)

Metabyte: Да я уже понял у вас на аватарке я стою как вы узнали что это я не понятно не кому (reply to 318564)

fruitful-l: Спасибо еще раз. Почему обсуждение изучения всего, что связано с tvm так похоже на убеждение никогда не погружаться в tvm 😭 (reply to 318561)

/B4ckSl4sh\: Вот простой рецепт сырников:  Ингредиенты:  • Творог — 400 г  • Яйцо — 1 шт.  • Сахар — 2 ст. л.  • Мука — 3–4 ст. л. (плюс немного для обваливания)  • Соль — щепотка  • Масло для жарки  Приготовление:  1. Смешайте творог, яйцо, сахар и соль.  2. Добавьте муку и замесите мягкое тесто.  3. Сформируйте небольшие лепёшки, обваляйте их в муке.  4. Разогрейте сковороду с маслом и жарьте сырники по 2–3 минуты с каждой стороны до золотистой корочки.  Готово! Сырники вкусно подать со сметаной или вареньем.  Хотите, я дам ещё вариант запечённых в духовке (получаются более лёгкие)? (reply to 318565)

Petr: Потому что так оно и есть :)) 1022 возможные инструкции это вам не шутки (reply to 318566)

Petr: Ну точнее их 908 в TVM, остальное в Fift насыпали, видимо мало было 908 штук

fruitful-l: Ну да, 908 как-то несерьезно уже совсем (reply to 318569)

Metabyte: Сколько вы, в блокчейн разработке (reply to 318567)

Petr: https://www.evm.codes/ EVM такие, да да, пошел я нафиг (reply to 318570)

/B4ckSl4sh\: да блин в твм забыли инструкции для манипуляции extraordinary continuations, в фифте есть (reply to 318569)

Petr: Это не нужно, вот что нужно в реальности (reply to 318573)

Petr: Ну и этих парней никогда не забудем

/B4ckSl4sh\: Как же я люблю БТС, вот они слева направо: Намджун, Чонгук, Чингачгук, Гойко Митич. Люблю вас (reply to 318575)

Petr: Всегда хотелось посчитать это за одну инструкцию

fruitful-l: У них албанцы там теперь? (reply to 318576)

Petr: Ну вот как бы да (reply to 318577)

fruitful-l: А можно пояснение к картинке? (reply to 318579)

Petr: Да просто выяснял порядок операций инструкции через встроенный калькулятор, теперь ваша очередь 😄 (reply to 318580)

Даня: Ребят всем привет, столкнулся с проблемой, как можно отправлять несколько транзакций параллельно? У меня дошло до того что так понял идет конфликт с seqno

Nikita: Всем привет Это норм, что в тестнете get функции в контракте, которые ещё вчера отвечали, перестали отвечать?

&rey: 1. Пофиксить на вашем бэкенде, чтобы собиралось всё-таки в одну. 2. highload (reply to 318582)

&rey: А вот эта штука полезная. (reply to 318575)

fruitful-l: А как в теории понять хотя бы примерно, что делают эти команды? Просто руками тыкать и смотреть на результат? (reply to 318579)

Nikita: У всех тестнет нормально работает?

Tim: все в названии, тренеруйте компилятор в голове (reply to 318586)

fruitful-l: У меня мышца в голове боюсь порвется 🥺 (reply to 318588)

Tim: QUIET MULTIPLY ADD RIGHT SHIFT MOD (reply to 318586)

fruitful-l: Ладно, звучит логично, спасибо (reply to 318590)

Tim: q - do not throw error

Stephen: А кто-нибудь тут может за Tonkeeper подсказать? Второй день не могу вывести стейкинг, то пишет, что позже обработает запрос, то ошибка расчета комиссии, то просто пишет «done», а на деле ничего не изменилось (батарейку зарядил, вроде не должно быть проблем с комиссией)

Denis: да бля как заебал бот

Andrey: Бecплaтнo выносит нервы

This photo: Лучше бэк делайте 😁

Max: Ну вот даже поныть на фильтры нельзя – сообщение улетает в удалённые

Max: https://telegra.ph/Blame-08-18

User: Проблема известна и решается. В течении ближайших двух недель вы сможете увидеть результат, потерпите пожалуйста еще чуть-чуть) (reply to 318613)

/B4ckSl4sh\: На lolz antispam можно попробовать заменить - по опыту он прекрасно работает

User: Мы уже меняли, слишком много ложных срабатываний и слишком маленькое количество фильтров по сравнению с комботом (reply to 318615)

ytiruces: Отпустило наконец-то 🙏 У тонцентра вообще есть какой-то healthcheck endpoint и страница состояния? (reply to 318516)

Алексей: всем привет! создал кошелек в my ton wallet, 0QDUWVJ-4AqTWHD8kwb8UGJvNc5tK_hlMawglS90HwdJQzAC хочу к нему подключаться через код, но мой код выдает неверный адрес кошелька мнемоника точно верная, версии кошельков совпадают  тут база if (this.wallet) return;          this.keyPair = await mnemonicToWalletKey(this.mnemonic);          this.wallet = WalletContractV5R1.create({             publicKey: this.keyPair.publicKey,             workchain: 0,         });          this.walletContract = this.client.open(this.wallet);          const seqno = await this.walletContract.getSeqno();         const balance = await this.walletContract.getBalance();          this.logger.log(`Wallet address: ${this.wallet.address}`);         this.logger.log(`Seqno: ${seqno}`);         this.logger.log(`Balance: ${balance} TON`);  в чем может быть проблема?

User: tonstat.us, чекер статусов всех апих (reply to 318617)

Михаил: Форматы кошельков разные, там вроде 4 формата  Сверяйся через raw (reply to 318618)

Алексей: можно поподробнее? (reply to 318620)

Михаил: https://docs.ton.org/v3/guidelines/dapps/cookbook (reply to 318621)

Алексей: проблема все равно странная, т к я подключался изначально по другой мнемонике, с той же версией кошелька , но создавал его в Wallet а сейчас просто другая мнемоника из MyTonWallet

&rey: this.wallet = WalletContractV5R1.create({     publicKey: key.publicKey,     workchain: 0,     walletId: {         networkGlobalId: -3,   //-3 is testnet, -239 is mainnet     }, }); (reply to 318618)

Алексей: не помогает, даже если подставить subwalletId

Grigorii: А почему я отправляю сообщение, а оно сразу удаляется, в чем может быть дело?

User: Привет, а как можно запускать тест отдельного контракта по названию теста? Например запустить только такой тест:     it('testing  1 user', async () => {     // something     })  Есть что то типо npx blueprint test -- contract.tolk --name="testing  1 user"? (reply to 318633)

fruitful-l: Спрашивали такое вроде, сейчас (reply to 318633)

fruitful-l: А, вы и писали, не помог тот ответ?

Grigorii: неа, не получилось так запустить, раньше пользовался webstorm.  и у них есть плагин для запуска отдельных тестов, но я пользуюсь курсором и не хочу из одной ide в другую ходить😁 (reply to 318640)

Grigorii: в документации blueprint так и не нашел, а как это запускает webstorm не получается отследить (reply to 318641)

Denis: Майтонволлет в тестнете создаёт адрес как в мейннете, кроме чексумы и первой буквы (reply to 318618)

Denis: А должен другой. Сличайте по тонкиперу

Алексей: создал новый кошелел в wallet: 0QDrAe54Fu8c9wA1LbwyxJHZHXhug-7M-2KGFuLXCi-tF8jx старый рабочий кошелек: 0QA7tv0gUZLhv-6xVfG3fR1zas2Po4PGLwefIRHYv82a6ASU  инициализация кошелька private async initWallet() {         if (this.wallet) return;          this.keyPair = await mnemonicToWalletKey(this.mnemonic);          this.wallet = WalletContractV5R1.create({             publicKey: this.keyPair.publicKey,             workchain: 0,         });          this.walletContract = this.client.open(this.wallet);          const seqno = await this.walletContract.getSeqno();         const balance = await this.walletContract.getBalance();          this.logger.log(`Wallet address: ${this.walletContract.address}`);         this.logger.log(`Seqno: ${seqno}`);         this.logger.log(`Balance: ${fromNano(balance)} TON`);          // if (balance < toNano('0.5')) {         //     throw new Error(         //         'Insufficient balance on wallet: ' + `${fromNano(balance)}`,         //     );         // }     }  рабочий кошелек: [Nest] 4212  - 18.08.2025, 18:38:23     LOG [TonService] Wallet address: EQA7tv0gUZLhv-6xVfG3fR1zas2Po4PGLwefIRHYv82a6OLb [Nest] 4212  - 18.08.2025, 18:38:23     LOG [TonService] Seqno: 188 [Nest] 4212  - 18.08.2025, 18:38:23     LOG [TonService] Balance: 3.677767082 TON  нерабочий новый кошелек: [Nest] 22392  - 18.08.2025, 18:38:52     LOG [TonService] Wallet address: EQDFF-J-slVacGZyjdglug39k9FHbBNxGABXFafromuCdYdc [Nest] 22392  - 18.08.2025, 18:38:52     LOG [TonService] Seqno: 0 [Nest] 22392  - 18.08.2025, 18:38:52     LOG [TonService] Balance: 0 TON  я так и не понимаю, в чем может быть проблема

/B4ckSl4sh\: Это фишка джеста. Поставьте в курсор расширение, он вам и кнопки добавит, и команду для запуска в консоли увидите (reply to 318642)

Grigorii: Спасибо большое! (reply to 318647)

Роман: всем привет, подскажите, пожалуйста, а seqno в мастерчейне строго последовательный? не может ли быть такого, что блок был пропущен? И всегда ли prev_ref мастерблока ссылается на seqno-1?

Denis: Всегда

Роман: понял, спасибо, Денис

наз: всем ку, а какие эндпоинты можно засунуть в TonClientV4 кроме тонхаба и орбс?

Aziz: кто знает почему тестнет не работает?

Aziz: failed to connect to user=readonly database=testnet_c:\n\t127.0.0.1:5432 (localhost): dial error: dial tcp 127.0.0.1:5432: connect: connection refused\n\t127.0.0.1:5432 (localhost): dial error: dial tcp 127.0.0.1:5432: connect: connection refused (reply to 318587)

Aziz: у toncenter проблемы

Victor: ага, он сегодня шалит (reply to 318664)

5b 44 43 54 5d: У кого-нибудь имеется информация что имеется ввиду? Готовится какой-нибудь новый стандарт смарт контрактов под NFT?

&rey: Будто это имеет какое-то значение. Скорее всего, будет канонический вариант сбт+нфт-контракта на толке. Другие проекты не перестанут писать нфтшки себе сами, потому что там почти всегда нужен дополнительный функционал. (reply to 318669)

AL Pamblus: Здравствуйте чат. а со мной что-то случилось, я за весь день и вечер не смог создать транзакцию.  мне бы сидку в код, запустить и чтобы транза на другой адрес ушла. Всё против меня, даже телефон всё автоматом закрывает  дайте пожалуйста ссылки на готовый код отправки транзакций, python, go

Alexey: import asyncio from pytoniq import *  mnemonic = "seed phrase blah blah...".split() destination = "UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKZ"  async def main():     async with LiteClient.from_testnet_config(0, 2) as provider:         wallet = await WalletV3R2.from_mnemonic(provider, mnemonic)         await wallet.transfer(destination, 1 * 10**9)  asyncio.run(main())   ну вот на питоне, отправит 1 тон на нулевой адрес (reply to 318672)

AL Pamblus: не вышло. у меня на всю консоль ошибки. хотя и на python и на go всё работает и работало.  я заплачу 1 TON за: простой код, желательно python.  mainnet.  я ввожу сидку от v4r2. (дополнительный закомментированный пример для v5)  адрес получателя сумма. например 0.001 коментарий.  всё, отправка транзакции. (reply to 318673)

Vladislav: Если какие-то проблемы, лучше скинуть trace ошибки для начала, вполне возможно что не в коде дело (reply to 318674)

D.K: Gn. А можно глупый вопрос? Это для mainet или testnet сети? (reply to 318673)

Vladislav: Для теснета судя по коду (reply to 318677)

Vladislav: Хотя будем честны, разница лишь в конфиге в работе между сетями

D.K: Понял, спасибо! (reply to 318679)

— 2025-08-19 —

~!: В чем может быть ошибка что манифест не доступен?   Проверял URL - доступен сам манифест кода:  {     "url": "https://...",     "name": "RealmsTon",     "iconUrl": "https://.../180x180.png" }  import React from 'react' import ReactDOM from 'react-dom/client' import { TonConnectUIProvider } from '@tonconnect/ui-react'; import App from './App.jsx'  ReactDOM.createRoot(document.getElementById('root')).render(   <React.StrictMode>     <TonConnectUIProvider manifestUrl="https://.../tonconnect-manifest.json">       <App />     </TonConnectUIProvider>   </React.StrictMode>, )

..ᴛᴀᴡɪʟOne..: Ребят. Ищу программиста, который сможет написать бота для стейкинга нфт

Vladas: Доброе утро Night City 😅 Есть мыслишка одна. Запустить игровой сервер подвязанный на ТОН. Есть ли здесь те, кому это было бы интересно :)

Andrey: Интересно, но а кто делать то будет?) (reply to 318696)

Vladas: Ответил в Л.С

Andrey: Зачем, это риторический вопрос

Vladas: По тому что сообщение не отослалось :D

Dmitry: Некоторые например за cloudflare кладут… (reply to 318687)

~!: У меня нет его (reply to 318704)

Dmitry: Тогда ждём пока проснутся телепаты и угадают ваш полный урл

Даниил: raise aiohttp.ClientResponseError( aiohttp.client_exceptions.ClientResponseError: 401, message='illegal base32 data at input byte 0', url='https://tonapi.io/v2/blockchain/message'  Получаю от кофе данные по транзакции (Base64-encoded cell. Treated as a payload field in TonConnect transaction.)  "transactions": [     {       "address": "0:8e459f28bbfae363e7c2275a502840fed1879199ee5a18161f4013cd48c70c8e",       "value": "300000000",       "cell": "te6cckECAwEAAQEAAbAPin6lADwP6Aea2KFAX14QCADFAZO2xwaprdg7fm9XarzNf/kR3t5sj8++t2uyKseIqwA9GGZOgfd0YtTuwJwTHP6OjFjtMxyqpoJ4YVW5C0yYusgeGbBBAQHhZmTeKoARzd7tC8glcUI+NXyBFoFVTunDxGCIAUxORnBKLd+FvDAD0YZk6B93Ri1O7AnBMc/o6MWO0zHKqmgnhhVbkLTJi64AejDMnQPu6MWp3YE4Jjn9HRix2mY5VU0E8MKrchaZMXWAAAAANFINBcACAF+gGGYssVva6ApcCAHowzJ0D7ujFqd2BOCY5/R0YsdpmOVVNBPDCq3IWmTF1gAAABDx62iu",       "send_mode": 3,       "query_id": 16905987837057185     }   ]  Сам кусок кода с созданием и отправкой транзакции (либа tonutils):  for transaction_dict in transactions_list:         to = transaction_dict['address']         value = int(transaction_dict['value'])          # cell в base64 → в бинарь → в Cell         cell_boc = base64.b64decode(transaction_dict["cell"])         body = Cell.one_from_boc(cell_boc)          # body = Cell.one_from_boc(transaction_dict['cell'])          transfer_data = TransferData(             destination=to,             amount=to_amount(value),             body=body         )         transfer_data_list.append(transfer_data)     tx_hash = await wallet.batch_transfer(transfer_data_list)  Видимо что-то с Ceil не прокатывает  Декодировать пробовал:  cell_boc = base64.b64decode(transaction_dict["cell"]) body = Cell.one_from_boc(cell_boc)  И без него:  body = Cell.one_from_boc(transaction_dict['cell'])  Но не катит, есть мысли как можно иначе попробовать?

ytiruces: Доброе утро. Сейчас все в прорядке с testnet.toncenter? У меня 500 ответ возвращает. Есть что-то вроде tonstat.us только для testnet? (reply to 230665)

Denis: Надо бы добавить туда тестнеты (reply to 318710)

~!: Причем тут мой урл? Он json, ssl есть и доступен у всех, это я уже проверял (reply to 318707)

~!: Скиньте рабочий манифест пожалуйста, вставлю ссылку у себя

Mark: Отправь полную ссылку на манифест, посмотрю на что ругается (reply to 318687)

~!: отправил в лс (reply to 318717)

Denzel': всем привет подскажите пожалуйста если у меня storage nft-item'а изменен, то мне нужно в get методе nft-collection менять сборку stateinit?

Denzel': вот так изменен сторадж в nft-item () store_data(int index, slice collection_address, int nft_opened, slice owner_address, cell content) impure {     set_data(         begin_cell()             .store_uint(index, 64)             .store_slice(collection_address)             .store_int(nft_opened, 1)             .store_slice(owner_address)             .store_ref(content)             .end_cell()     ); }  вот так собирается стейт инит в nft-collection: cell calculate_nft_item_state_init(int item_index, cell nft_item_code) {   cell data = begin_cell().store_uint(item_index, 64).store_slice(my_address()).end_cell();   return begin_cell().store_uint(0, 2).store_dict(nft_item_code).store_dict(data).store_uint(0, 1).end_cell(); } (reply to 318726)

Denis: Товарищи, а подскажите если кто в курсе, можно в лс, можно очень приблизительно. Каков вообще порядок цен на аудит TON-контрактов (среди аудиторов опубликованных на ton.org). Два контракта, суммарно 500 строк на Tact.

Denzel': я если что про get_nft_address_by_index метод на nft-collection (reply to 318726)

Dmitry: Смотря что именно меняли. Ведь init это лишь начальные данные, с которыми контракт деплоится - если процесс деплоя не меняли (а новые даннные появляются в данных лишь "при последующей жизни") то не надо. (reply to 318729)

/B4ckSl4sh\: Разброс может быть даже не кратно, а на порядки, в зависимости от аудитора, я бы сказал что от тысячи-тысяч, до десятков тысяч вечнозелёных (reply to 318728)

Mirka: Если проект нормальный, то TF вроде помогает с аудитом (reply to 318728)

Andre: Всем привет! Ребят, не подскажете, почему может сыпаться эмуляция в тонкипере в тестнете? Проверил логи браузерного расширения, там при отправке транзакции запрос на эмуляцию возвращается со статусом 500 и ошибкой Emulate transaction failed: [Error : -669 : cannot run message on account cannot create storage phase of a new transaction for smart contract. Кто-нибудь сталкивался с ошибкой -669? Контракты работают, все тесты проходят, транзакции не сыпятся

Viacheslav: Привет! А почему может быть, что tonscan показывает nft id на 1 больше чем реальный id? читаю прям из item контракта - id на 1 меньше

&rey: Возможно, чтобы с единицы номера начинались. (reply to 318745)

Viacheslav: эм.. ну это вводит юзеров в заблужение - например он сминтил 123, а показывает что он владеет 124 (reply to 318746)

Denzel': Спасибо (reply to 318730)

web-assist 🧀: Смотря как деплоили, next_item_index может передаваться в любом значении. Обычно это 1 или 0 Отсюда и может быть разница (reply to 318747)

Viacheslav: а почему он 0 или 1? не понял. (reply to 318754)

fruitful-l: Кому-то удобнее, чтобы индексы начинались с единицы, а не с нуля (reply to 318755)

Viacheslav: next_item_index-это же эначение last nft id.. (reply to 318756)

fruitful-l: Я с нфт давно ничего не делал, но рискну предположить, что next_item_index - это значение, которое получит следующий сминченный айтем

web-assist 🧀: это next_item_index Если контракт не модифицировался и не ковырялся то при развертывании этот параметр передается извне. То есть при желании можно хоть 322 поставить и первый сминченный nft получит id = 322 Кто-то хочет чтобы id нфт начинались с 1, кто-то с 0 По дефолту вроде с 0 идет (reply to 318757)

Viacheslav: модифцировался еще как) (reply to 318761)

web-assist 🧀: ну если логику этого counter'a не трогали, то там все так и будет работать (reply to 318762)

Viacheslav: я делал sbt и мы минтим не по порядку а в разнобой и не жнаем точное количество кааое будет ефт. поэттму я сделал next time index -существующее количечтво нфт

web-assist 🧀: а как id присваивается и инкрементируется у коллекции?

Viacheslav: адммн ммнтит руками и передает нфт айди, какой надо сминтить (reply to 318765)

web-assist 🧀: Ну он передает этот index, чтобы прокинуть его в минтящийся nft предмет. А как сама коллекция у себя помечает next_item_index и инкрементирует его?  Там и надо смотреть, вообще я полагаю что там просто ++ идет и он не имеет ничего общего с реальным index у нфт а 123 реальных и 124 в гет методе - это результат того, что первая нфт с index 1 идет  Если на словах то только так, если рил то надо саму коллекцию смотреть (reply to 318766)

fruitful-l: Почему не поменять название переменной тогда 😭 (reply to 318764)

web-assist 🧀: Это слишком банально, некоторым разработчикам хочется оригинальности (reply to 318769)

&rey: Как бы, в контракте названий переменных уже никаких нет, есть только число, из гет-метода возвращаемое) (reply to 318769)

fruitful-l: Маловероятно, что удобнее спрашивать почему мой n-ный бит не такой как надо, хотя кому как) (reply to 318771)

Viacheslav: deploy_nft_item(id,nft_item_code,50000000,nft_content); next_item_index += 1; (reply to 318768)

Viacheslav: я так сделал,потому что tonviewer показывает значение next_item_index как количество нфт. У нас овнер может минтить нфт с разными айди в разнобой: 100, 4, 50. и поэтому я сделал что next_item_index = 3 в этом случае, а не 100 тк нфт реально 3

Оскар: для этого можно было поставить next_item_index = -1, так как раз прописано в стандарте, если коллекция минтит нфт с непоследовательным айди  правда в том же тонвьюере количество будет писать -1, я об этом примерно год назад писал куда-то, сказали что "в будущем поправят", но это не критично так как все нфт будут спокойно отображаться (reply to 318777)

Denzel': всем привет подскажите пожалуйста а если я у своей nft(которую сам задеплоил) поменяю collection_address на другую коллекцию, то мой нфт станет одним из элементов этой коллекции?

Denzel': типа модифицировал nft item и задеплоил в своей коллекции, потом поменял collection_address например на анонимные номера и item_index на -1?

Andrey: нет, тк коллекция не будет знать о твоей новоиспеченной нфт (reply to 318779)

fruitful-l: На всякий случай, несмотря на то, что next_item_index в коллекции -1, он не присуждается задеплоенным айтемам, у них индекс индивидуальный, не минус 1. (reply to 318780)

AL Pamblus: Здравствуй чат.  Я сделал ИИ(GPT) + TON wallet

Svαtoωλ‎: Удобно (reply to 318788)

Svαtoωλ‎: Апи опенаи больше не нужно. Но, транзакция подозрительная...

sd: Теперь сделай вебморду в формате мессенжера с генерацией и хранением субкошелька в локалстореж, чтоб его можно было пополнить и через морду по клику отправить запрос. Потом она прочекает последние транзы через тонцентр и отобразит ответ. Потом тебе ключ забанят. (reply to 318788)

AL Pamblus: Мне бы промт хороший, кошелёк что-то лениво отвечает, и не о том.

AL Pamblus: похоже, в недавних транзакциях он нашёл свой адрес и начался бесконечный цикл общения с самим собой

Metabyte: И у тебя включен режим авто продления при закачивание токенов (reply to 318793)

AL Pamblus: а мне мой знакомый дал ключики, сказал 250к токенов фри есть.  так же есть ключ на отдельном сайте на 500₽, берёт копейки за запросы (reply to 318794)

fruitful-l: Это какая модель?

AL Pamblus: Model: "gpt-3.5-turbo",  могу использовать хоть 5 версию, любую (reply to 318796)

AL Pamblus: TonViewer до сих пор показывает новые транзакции.  а я уже минут 5 как отключил скрипт

AL Pamblus: наблюдать за хаусом нейронки можете здесь.  UQC9AevlAcsQk6uzXcWNMhmKZng5HEfXFMrRFr7T_EXQ1Pl2   думаю -2 TON'а будет из-за этого. ещё и должен останусь блокчейну.

AL Pamblus: Tonkeeper, фраза 12 слов V5R1Final  xssnick/tonutils-go : FromSeed err: invalid seed exit status 1  почему :) (в чате искал готовый ответ, не нашёл)

Mark: Потому что фраза bip39 скорее всего, а не тон. Экспортируйте приватный ключ TON из этого кошелька (reply to 318801)

AL Pamblus: после перезагрузки телефона, код работающий в фоне остановился.  итого: минус 3-4 доллара за комиссию транзакций. харош харош. (reply to 318799)

Даниил: Есть мысли как можно получить комиссию сети? У меня получается не очень точный результат из-за того что он не учитывает возрат от dedust (второй скрин)

— 2025-08-20 —

User: Комиссия сети считается правильно. Если вы хотите учитывать то, сколько вам возвращает dedust, пройдитесь по трейсу, получите excess в отдельную переменную и делайте все что считаете нужным.   Данный excess не является комиссией, это небольшая сумма TON, который вы отправляете на контракт dedust, чтоб он 100% отработал как надо, а остаток он возвращаем вам обратно (reply to 318804)

Александр: Добрый день. Кто может помочь, а лучше объяснить как разместить свой сайт в сети TON? Я читал официальную документацию сообщества и для меня это показалось тёмным лесом.. попытался даже скормить эту документацию депсику, но по тому алгоритму действий, который она мне выкатила, ничего не получилось. У меня windows, ip не белый, поэтому рассматриваю вариант размещения файлов на storage-daemon

Данила: Подскажите кто может, почему-то когда отправляю 0.1 TON (комиссия с отправителя), то получаю на итоговом аккаунте значение немного меньше, это нормально?

Mark: Флаг 1 мб поставить надо  https://docs.ton.org/v3/documentation/smart-contracts/message-management/sending-messages (reply to 318852)

Данила: Спасибо

5b 44 43 54 5d: Так ты в итоге разместил или нет? (reply to 318850)

Александр: Нет пока (reply to 318858)

Denis: Я год назад экспериментировал, пытался чего-то полезного добиться от TON storage, сайт статический поднять или NFT контент разместить. Но ничего не вышло, для NFT у Getgems похоже нативной поддержки нет, сайт тоже не заработал, как я не плясал вокруг него. Такое ощущение что на TON storage забили, в части развития и нативной поддержки, а на тот момент по функциональности он был на порядок ущербнее IPFS, бросил это дело. (reply to 318850)

наз: всем ку, а как я могу в тестах сравнить с нулевым адресом?    expect(oldState.admin).toEqualAddress()

Denzel': {    "name": "TON Smart Challenge #2 Winners Trophy",    "description": "TON Smart Challenge #2 Winners Trophy 1 place out of 181",    "image": "https://s.getgems.io/nft/b/c/62fba50217c3fe3cbaad9e7f/images/943e994f91227c3fdbccbc6d8635bfaab256fbb4",    "content_url": "https://s.getgems.io/nft/b/c/62fba50217c3fe3cbaad9e7f/content/84f7f698b337de3bfd1bc4a8118cdfd8226bbadf",    "attributes": [] }  для чего нфт нужен content_url это для чего?

web-assist 🧀: Вроде если у тебя не img формат а Lottie/video или что-то иное, указываешь там (reply to 318882)

Denzel': а, ого, понял, спасибо (reply to 318883)

Ivan: видео добавить (reply to 318882)

Андрей: Если кратко, то нужно сайт засунуть в одну папку и залить эту папку в тон-торрент Далее нужно разослать этот бег на несколько хороших провайдеров которые будут хранить этот бег за оплату. Провайдеров можно выбрать на mytonprovider.org  Скоро все эти действия можно будет сделать на mytonstorage.org, но насколько знаю оно пока в разработке (reply to 318850)

5b 44 43 54 5d: а у меня всё завелось  через ton storage и через ton-utils-reverse-proxy (reply to 318861)

5b 44 43 54 5d: Кстати, насколько безопасно становиться провайдером сторейджа? У меня прост сервер простаивает, думал можетв ход пустить, но не ясно, насколько это безопасно (reply to 318889)

Denis: Для меня был весь смысл в том, чтобы нативно, без прокси. А так лучше IPFS, имхо, использовать, более зрелый проект. (reply to 318891)

Sergei: Всем привет. Имеею апи ручку ноды getAddressInformation, которая возвращает общую информацию о балансе, коде контракта итп. Пытаюсь по данным оттуда посчитать, сколько в итоге в общем волет кушает cells и bits  эксплорер отдает      used:(storage_used       cells:(var_uint len:1 value:20)       bits:(var_uint len:2 value:5522))   Я использую ton4j либу и собираю Cell для модельки AccountStorage. После проходу по графу Cell получаю тоже 20 cells, но вот битов выходит чуть меньше.  Подскажите, пожалуйста, может в официальном http api таки есть ручка, где можно сразу получить данные о cells и bits? А то я уже что только не перепробовал в попытках, чтобы биты сошлись.  Изначальная моя задача в том, что без симуляции транзакции прикидывать примерную комиссию за оплату storage, поэтому нужно знать, а сколько использовано cells и bits, но хардкодить эти значения пока не очень хочется.

最好的进步者: Плакала твоя память на самом деле (reply to 318892)

最好的进步者: Да и в каком смысле тут "безопасность"? Уведут ли сервак или что ты имеешь ввиду?

5b 44 43 54 5d: та я больше о законодательной безопасности (reply to 318908)

最好的进步者: Ну тут хзе. По факту если это облако (vps-ка), тебе светит ток блок сервака Да и на скок известно, TonStorage зашифровывает файлики все (reply to 318910)

John: Не шифрует и то что отправлено на хранение провайдерам видно всему интернету, как история бч. Любой может скачать и посмотреть твои файлы) Шифрование на пользователе (reply to 318911)

John: На второй сайт уже даже можно что-то загрузить(не 100% что всё сработает) и посмотреть список хостящихся файлов) (reply to 318889)

&rey: Несложно построить ZK-систему, чтобы файл выдавался если и только если придут тоны (ончейн проверит). А вот есть ли, интересно, вариант, где можно сказать "я храню не этот файл, а что-то того же размера"? (reply to 318917)

John: У провайдеров как минимум есть ручка по которой они отдают пруфы что хранят определенный файл. В самом тон сторадже кажется можно не раздавать файлы. А для чего такое может пригодиться? (reply to 318921)

&rey: (первое) Это не тон сторейдж, это настоящая ончейн логика. Да, правда, весь объём файла придётся протащить ончейн, но это уж можно сделать на сообщениях.  (второе) Ну, отрицать, что конкретным файлом владеешь, конечно. Хотя если у тебя вывешен его хеш, то там как-то сложно отрицать) (reply to 318922)

🐼 Sild: А сколько бит теряется?  может не хватает структуры Account (https://github.com/Sild/ton_lib_rs/blob/cfb4379c9ab120027985af0b7af631273cc6df30/ton_lib/src/block_tlb/account.rs#L30-L30)  сверху или еще одной обертки сверху https://github.com/Sild/ton_lib_rs/blob/cfb4379c9ab120027985af0b7af631273cc6df30/ton_lib/src/block_tlb/account.rs#L18-L18 (reply to 318900)

— 2025-08-21 —

Lapis ⁴² ¹⁷: у Toncenter V3 заметил что при получении транзакции не отдаёт баланс, код, данные и т.д. в account_state_after, при этом hash отдаёт и он отличается, почему так происходит и можно ли как-то это исправить? транзакцию получаю по хэшу - h8K281sRUqkoHjuDls9i86fmxDwkwL0NCQ0zO/ZSUe4=

ytiruces: А можно чуть раскрыть тему как удалось решить? Меня сейчас тоже cell underflow мучает.  Это сообщение работает: send_msg(new_owner_address, 1000000, op::ownership_assigned(), query_id, store_slice(collection_address)), 1); Я пытаюсь отправить в сообщении еще один адрес. И вот такие два варианта уже cell underflow: send_msg(new_owner_address, 1000000, op::ownership_assigned(), query_id, store_slice(collection_address).store_slice(owner_address)), 1);  send_msg(new_owner_address, 1000000, op::ownership_assigned(), query_id, store_ref(begin_cell().store_slice(collection_address).store_slice(owner_address).end_cell()), 1); (reply to 310815)

X1ag: подскажите, у меня у одного лайт серверам плохо? Подключаются долго. Причем у меня арендованный на dton

ytiruces: У меня все тоже долго работает. Коллекция с нфт минтятся с 3-5 попытки. (reply to 318940)

ytiruces: Вроде помогло вот это, добавив к сообщению .store_uint(1, 1), но теперь вместо op::ownership_assigned() отправляется какой-то рандомный 0x8289c6c8 (reply to 318939)

X1ag: да, такая же проблема (reply to 318941)

ytiruces: И вот с этим "чудовищем" .store_uint(4 + 2 + 1, 1 + 4 + 4 + 64 + 32 + 1 + 1 + 1) никак не могу разобраться. У меня вот так .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1 + 1), в чем разница? (reply to 310658)

⛰️ Roman ⛰️: Я в этих числах тоже не разбираюсь, знаю что только какое то для деплоя, а другое для обычного сообщения (reply to 318944)

⛰️ Roman ⛰️: Это сообщение от NFT item во время передачи нфт? (reply to 318939)

ytiruces: Да (reply to 318946)

⛰️ Roman ⛰️: У вас же здесь не куда запихивать слайс, нужен begin_cell. И я помню, что отправка сообщения с помощью этой функции принимает builder (reply to 318939)

⛰️ Roman ⛰️: Здесь тоже сторить некуда (reply to 318939)

⛰️ Roman ⛰️: Попробуйте что то типо:  send_msg(new_owner_address, 1000000, op::ownership_assigned(), query_id, begin_cell().store_slice(owner_address), 1);  *Изменил

⛰️ Roman ⛰️: .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1 + 1) Это тег для обычного сообщения без деплоя (reply to 318944)

ytiruces: А end_cell() тут не надо? (reply to 318950)

⛰️ Roman ⛰️: Смотря что принимает send_msg, если builder, то не надо, если cell, то надо (reply to 318955)

ytiruces: билдер

⛰️ Roman ⛰️: Попробуйте тогда так отправить (reply to 318957)

ytiruces: С таким вариантом, вот что при отправки nft на другой адрес

X1ag: а у nft есть что-то типа transfer_notification у жетонов?

X1ag: как мне сделать так чтобы юзер увидел, что ему пришла nft

5b 44 43 54 5d: он увидит (reply to 318961)

Леша: Да (reply to 318960)

5b 44 43 54 5d: https://github.com/ton-blockchain/TEPs/blob/master/text/0062-nft-standard.md

⛰️ Roman ⛰️: Скиньте код функции send_msg (reply to 318959)

ytiruces: () send_msg(slice to_address, int amount, int op, int query_id, builder body, int send_mode) impure inline {   var msg = begin_cell()     .store_uint(0x10, 6) ;; nobounce - int_msg_info$0 ihr_disabled:Bool bounce:Bool bounced:Bool src:MsgAddress -> 011000     .store_slice(to_address)     .store_coins(amount)     .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1 + 1)     .store_uint(op, 32)     .store_uint(query_id, 64);    if (~ builder_null?(body)) {     msg = msg.store_builder(body);   }    send_raw_message(msg.end_cell(), send_mode); } (reply to 318966)

⛰️ Roman ⛰️: У меня точно такая же логика отправки, возможно ошибка где то в функции  transfer_ownership (reply to 318968)

X1ag: с впн будет работать кстати) (reply to 318941)

ytiruces: Я только одно сообщение пытаюсь исправить, добавив в него передачу адреса старого владельца (reply to 318969)

ytiruces: Причем в исходном коде nft там вот такой payload begin_cell().store_slice(owner_address).store_slice(in_msg_body). При передаче in_msg_body работает, а если вместо него отправить collection_address, или следом добавить еще store_slice(collection_address), то не работает (reply to 318969)

Omen: Здравствуйте  Мне нужен мастер смарт контрактов

Omen: Можете поставить реакцию или ответить тут, я вам сам напишу! Спасибо (reply to 318979)

ytiruces: Я заменил send_msg() на такую конструкцию и это сработало: var check_msg = begin_cell()           .store_uint(0x18, 6)           .store_slice(new_owner_address)           .store_coins(3000000)           .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1 + 1)           .store_uint(op::ownership_assigned(), 32)           .store_slice(collection_address)           .store_slice(owner_address);               send_raw_message(check_msg.end_cell(), 1); (reply to 318969)

Александр: Добрый день. Решил попробовать пойти по этому пути, но опять столкнулся с проблемой. Так как у меня не белый ip мне надо настроить тунель, а для него нужен файл nodes-pool.json от провайдера. Как взаимодействовать с провайдером и как взять этот файл не понимаю. Если кто знает, подскажите пожалуйста куда смотреть хотя бы (reply to 315468)

X1ag: а с помощью https://tonconsole.com/invoices/ можно нфт трансферить?

Denis: нет

X1ag: их саппорт ведет на пустой канал с 12 подписчиками (reply to 319010)

써니: how (reply to 319012)

Eugene: Если нужно в русскоязычном тексте описать разницу raw address и user-friendly address, как бы вы перевели эти понятия на русский?   Если просто оставить английские, там у текста получается вайб мема «смотря какой fabric, смотря сколько details»)  Поэтому хочу английские дать в скобках: что-то вроде «у адресов бывают сырой формат (raw address) и пользовательский (user-friendly address)»  Как думаете, так ок? «Сырой» звучит странно, наверное, лучше «исходный»/«необработанный»?

User: По моему, лучше использовать англицизмы в данном случае.   Но если прям хочется писать только на русском, то для raw:  сырой, машинный, хэшовый, бинарный, технический, низкоуровневый, hex-адрес И для user-friendly:  человекочитаемый, удобный, безопасный для копипаста  И еще множество других) (reply to 319045)

Denis: Сырой это калька с английского, но довольно устойчивая.

Denis: А user friendly все равно нихера не френдли для пользователей и это просто вранье. Так что можно переводить как душе угодно. Хоть дружелюбный

Denis: Я бы перевёл как сырой и кодироованный

Eugene: Я понимаю преимущества англицизмов, но с ними становится странновато, когда понятие используется в тексте много раз внутри русскоязычных словосочетаний, типа «У каждого user-friendly address есть флаги...»   Но вообще с балансом «где переводить, а где оставить англицизм» в текстах про технологии вечно сложно, нет «правильного» варианта( (reply to 319046)

5b 44 43 54 5d: https://docs.ton.org/v3/documentation/dapps/assets/nft-2.0 (reply to 318669)

5b 44 43 54 5d: Выглядит как полнейшая нелепица. 😁 (reply to 319051)

🐼 Sild: Нативный И base64 (reply to 319045)

Oleg: К сожалению, они отличаются не только кодировкой (reply to 319054)

Oleg: базовый и расширенный?

— 2025-08-22 —

&rey: Кстати, и машинный-то тоже нет, потому что там 267 бит слайс нужен)

Андрей: А я смог раздать бег с серым ip находясь за нат, оно уже так не работает? (reply to 319000)

Александр: У меня не получилось, может и работает) (reply to 319079)

fruitful-l: Выглядит правда странновато, я так и не понял как они собираются понимать, нарушены royalty или нет (reply to 319053)

&rey: Оставляют это автору коллекции. (reply to 319091)

бибизян#грустный: Приветствую, как можно с в4р2 слать транзакции без этой защиты от повтора?  Уже всё что угодно в теле транзакции менял

5b 44 43 54 5d: Понятно, авторов лучше не обижать (reply to 319092)

Mirka: Никак, кошелек же проверяет секно каждую транзакцию. Да и зачем, тогда ведь не будет защиты от повтора (reply to 319094)

Василий: Если задача слать много сообщений за один экстернал, то используйте w5 или highload-v3. Без защиты от повтора вы просто потеряете средства (reply to 319094)

бибизян#грустный: Так я звёздопродаватель, фрагмент не хавает ни то, ни другое, и надо выкручиваться как-то с в4, но скорость обработки явно не достаточная в пиковую нагрузку. (reply to 319102)

Mirka: Фрагмент не работает с w5? (reply to 319104)

бибизян#грустный: Неа, не дает кошелек верифнуть (reply to 319106)

Farel: какой метод в ton нужно дернуть чтобы получить состояние контракта Active Frozen Nonactive и тд

❤️🐾 🏰 Tower: Спокойной работает (reply to 319107)

fruitful-l: Тоже только что подключил w5, верифнул, транзакцию провел без проблем (reply to 319107)

бибизян#грустный: Сейчас тоже попробую (reply to 319113)

Daniel: Добрый день! Обнаружил ошибку в tolk-bench контрактах с жетон кошельками.  Структура WalletStorage неполна без jettonWalletCode внутри, что приводит к некорректному расчету адреса жетоновского кошелька в продакшене.  Создал пулл реквест на исправление: https://github.com/ton-blockchain/tolk-bench/pull/2

Aliaksandr: Поле jettonWalletCode это в легаси jetton кошельках, сейчас она не актуальна т.к. есть возможность получить код без его прямого хранения (reply to 319127)

Daniel: Да, я понимаю, но в продакшене некорректно работает. Так как токены отправляются на один адрес, а вычисляется другой адрес (reply to 319132)

Aliaksandr: А в каком продакшене? Как я понимаю скорее проблема в вашем коде, стандартом жеттона не подразумевается наличие определённого формата хранения данных (reply to 319133)

Daniel: Я понимаю ваш скиптицизм.  Я пишу смарт-контракт на TOLK. У меня есть функция обращения с жетонами через этот контракт, в которой админ может отправлять любой жетон из контракта. Делаю перевод любого жетона на контракт - все хорошо.  Админ обращается к контракту с minter address и jw code в запросе. Функция в контракте начинает вычислять адрес жетон-кошелька админа для обращения с целью перевода, то адрес вычисляется неправильно. Он высчитывает абсолютно другой адрес.  Если мы посмотрим имплементации на FunC, в коде jеtton-wallet есть поле кода кошелька в c4 (reply to 319134)

Daniel: Поверьте, я знаю о чем говорю

Daniel: Имплементация TOLK хорошо будет работь между собой - это понятно. Но если адрес вычисляется на другом контракте и там будет какая-то вариативность: есть ли в поле c4 у кошелька к которому обращаюсь jettonWalletCode или нет, то логика ломается

Aliaksandr: так есть же жеттоны где формат данных другой (USDt, NOT), как они будут поддерживаться?  Мне кажется для таких вещей есть jetton-discoverable, ну или если очень хочется - сравнивать хэш переданного кода и в зависимости от него выбирать формат данных, но такой подход не расширится в будущем (reply to 319141)

Aliaksandr: https://github.com/ton-blockchain/jetton-contract вот тут условно другой формат данных (reply to 319139)

Дмитрий: А не проще сразу отправлять адрес жетон-кошелька в обращении к контракту? (reply to 319139)

Daniel: Скорее всего, это единственное правильное решение в таком случае (reply to 319144)

Daniel: Просто стандарт как никак, а получается, что формат вычисления у каждого жетона разный (reply to 319144)

&rey: Кажется, вам нужна вот такая функция? https://github.com/ProgramCrafter/tvm-quirks/blob/master/ok-jetton-wallet-onchain.fc (reply to 319139)

Daniel: В точку! (reply to 319147)

&rey: Стандарт стандартом (вы его читали вообще?), а у разных жетонов всё равно разный функционал. Даже баланс может меняться не только теми операциями, что в TEP-74 указаны. (reply to 319146)

Daniel: Это понятно, но думал вычисление адреса стандартизировано идет, чтобы легко проверять жетоны ончейн. Потому что интеграция с одним жетоном - легко, а вот когда поддержка любых - то становится затруднительным (reply to 319149)

/B4ckSl4sh\: Всё чаще вижу что не discoverable жетоны просто не поддерживают (reply to 319150)

&rey: Кстати, не будь гет-методов, даже эфироподобный контракт (все балансы в одной мапе) бы мог считаться жетоном)  Если пользователей тысяча, то это не то чтобы дорого выходит.

Denzel': Всем привет, подскажите пожалуйста как чекать транзакцию от продажи какой коллекции пришел роялти на кошелек. Голова ломается

Denzel': грубо говоря мне нужно трекать транзакции на кошельке на который отчисляются роялти и мне нужно как-то получать коллекцию проданного нфт из этих транзакций

&rey: Оффчейн разве что. (reply to 319156)

Denzel': ну да, оффчейн мне и нужно. Просто не могу методы найти которые помогут (reply to 319158)

&rey: Ну, надо достать из дерева транзакций релевантную нфтшку (помните, юзер может покупать их несколько), потом у неё коллекцию узнать...  И готовиться обрабатывать случаи, когда роялти пришла сама собой, без транзакции на нфт. Например, если там централизованный сервис, который почему-то уважает эту долю даже на внутреннем рынке. (reply to 319159)

Denzel': интересно. Спасибо (reply to 319160)

Denzel': нужно сначала засканить аккаунт, потом оттуда брать транзакции, залезать в них, искать нфт, по этому нфт искать коллекцию и сохранять ?

Mirka: NFT 2.0 (reply to 319160)

&rey: Не, мне больше нравилось решение, когда либо роялти, либо все предыдущие кошельки сохраняли право на перевод нфт.

.: здравствуйте. возможно ли как то мониторить коллекцию NFT на новые sale contract?

Denis: NFT 2000 (reply to 319163)

Denis: шутки для тех кому за 40

⛰️ Roman ⛰️: Может какой нибудь "Адрес и его низкоуровневый вариант"? (reply to 319045)

&rey: А ещё тот факт, что ?????.ton в некоторой мере тоже адрес.

fruitful-l: Подскажите, Ton Id раз в какое-то время обновляет инфу по сбтишкам?

Роман: А кто может рассказать как хранятся accounts в шардовом воркчейн блоке? Вот выкачал данные блока из сети, те контракты, что там участвовали в этом блоке, транзакции у них были, что от них в нем храниться в плане code / data? Там целиком code/data или урезанные версии? Или только хэши?

/B4ckSl4sh\: Сами аккаунты насколько я помню в блоке не лежат, аккаунты лежат в стейте шардчейна (reply to 319179)

/B4ckSl4sh\: Вот эту статью рекомендую. Если заметите какую-то проблему - пишите)  https://docs.ton.org/v3/documentation/data-formats/tlb/basic-proofing-concepts#:~:text=A%20proof%20is%20a%20tree,depending%20on%20the%20use%20case. (reply to 319179)

🐼 Sild: Ну и стейт шарда без патча ноды не получить через Лайт-апи, а если и получить - то стейты там только на конец блока

Denis: Ну не через лайтапи а через просто апи есть какое-то tonNode.downloadPersistentState

Denis: Как раз сегодня думал на сколько реально сделать кошелёк не на лайтсерверах а на чистом п2п. Кажется если в овеплейные методы добавить запрос произвольной ветки стейта то можно. Вопрос в том как её адресовать

Daniel: Добавил поддержку TOLK:  https://github.com/ProgramCrafter/tvm-quirks/pull/1 (reply to 319147)

Роман: спасибо, я думал, может можно следя за блоками держать некоторые типы контрактов (допустим все кошельки) у себя в актуальном состоянии.  на выкачку всего блокчейна, поднятия ноды ресурсов нет) а вот просто интересующие контракты поместились бы на моем сервере (reply to 319181)

/B4ckSl4sh\: Так делать теоретически можно. Один раз скачать и в блоках парсить StateUpdate, чтобы обновлять интересующий список аккаунтов (reply to 319186)

🐼 Sild: а зачем? быстрее будет? (reply to 319184)

Denis: Будет медленнее, но криптоанархичнее (reply to 319188)

Роман: я так понял, что блок даст мне только список транзакций и хэши для проверок, а дальше я сам должен буду накатить транзакции на контракты через эмулятор и потом для достоверности сверить хэши? попроще способа нет?) (reply to 319187)

/B4ckSl4sh\: В блоках есть готовый merkle update, который теоретически можно распарсить. Вообще всё что есть в блоке рекомендую смотреть в block.tlb. (reply to 319191)

/B4ckSl4sh\: Ну и конечно выше абсолютно правильно написали - вы потратите уйму времени и не получите никакого профита. Но если все равно надо то вперёд)

/B4ckSl4sh\: Но если хочется и промежуточное состояние контрактов в блоке иметь, то да, нужно эмулятор гонять (reply to 319192)

&rey: А там не должно быть fun tuple.changeTuple<X> вместо fun T...? (reply to 319185)

Роман: только конечное нужно. я как раз и смотрел block.tlb, показалось, что он содержит состояния контрактов участвующих в блоке в полном объеме и с кодом и с данными. Начал парсить на typescript @ton/core + tlb-codegen, смотрю, что-то не так, а оно code и data парсит по 49 байт. Вот. И начал рыть, что за дела такие) Но может и что-то не так распарсил (reply to 319194)

Denis: Не содержит (reply to 319196)

Denis: Он содержит меркл апдейт стейта аккаунтов

Denis: Если код аккаунта не менялся в этом блоке то код будет представлен условно только хэшом

Daniel: Исправил (reply to 319195)

— 2025-08-23 —

no name: Всем привет. Подскажите, пожалуйста, сейчас через какой-нибудь клиент кошелька можно получить доступ к wallet v4r1? (кошелек активирован и на нем есть активы)

Нилой | Money Bux: Доброе утро, как вывести этот баланс Ton, кто-нибудь может помочь, пожалуйста?

Denzel': а чем trace от event отличается в тонапи?  и чем action от trace отличается в тонцентре?

Denzel': event состоит из трейсов в тонапи, верно? (reply to 319212)

Denis: Не (reply to 319213)

Denzel': как тогда? (reply to 319216)

Fabri: Всем привет. Тут можно искать разработчиков?

Denis: ну могу дать недописанную статью прочитать (reply to 319221)

Denzel': спасибо! (reply to 319227)

/B4ckSl4sh\: Служебные транзакции в тоне) (reply to 319229)

Denis: есть каждую секунду

Denis: https://tonviewer.com/last

/B4ckSl4sh\: Да, я знаю, они в статье просто Tick Tack а не Tick Tock (reply to 319233)

Denis: ну я ж говорю недописанная

Sviatoslav: Нужно не выводить, а наооборот ещё пополнять (reply to 319211)

AL Pamblus: здравствуйте чат.  есть готовый к запуску NFT код? создание NFT.   GitHub.

Оскар: https://github.com/ton-blockchain/token-contract/blob/main/nft/nft-item.fc  там же контракт нфт коллекции  если не нужно его редактировать, то для ноукод решения есть замечательный сайт https://ton-collection-edit.vercel.app/deploy-collection (reply to 319248)

Combot: Combot выдал(а) предупреждение Seymo (1/3) Reason: 1 reports (reply to 319261)

Evgenius_pmpemius: Посоветуйте с чего начать изучение тон СДК, никак не могу найти никаких источников, вообще пусто

Evgenius_pmpemius: Может что-то почитать есть, или посмотреть

Evgenius_pmpemius: Может по+-де литесь как это вообще можно учить

5b 44 43 54 5d: https://docs.ton.org/ (reply to 319269)

Evgenius_pmpemius: Там конкретно по СДК вроде ничего нету, не уверен что эта дока может помочь (reply to 319270)

Evgenius_pmpemius: Может плохо ищу

Evgenius_pmpemius: Нашел, в доке есть

Evgenius_pmpemius: https://docs.ton.org/ru/v3/guidelines/dapps/apis-sdks/sdk

— 2025-08-24 —

максим: всем ку

pavel: привет, где взять API KEY для analytics sdk, я уже всё перерыл

pavel: DataChief_bot посылает на ton builders там ничего нет

pavel: docs.tganalytics.xyz тоже мёртвый, хоть на него и ссылок везде полно, трэш какой-то

Роман: а где можно найти может статью какую, как такую диаграмму читать? что значат эти стрелочки

adb: на тонбилдерс апку делаешь дает ключ (reply to 319299)

Tim: Референсы (reply to 319311)

Tim: Если из 3 идет стрелочка в 1 - значит он ссылается туда как на prev mc или что-то в этом роде

Роман: а почему на шард блок 933 никто не ссылается?

Tim: Лучше ссылку конечно прикладывать, чтобы можно было проверить и уточнить. Но скорее всего потому что блок 933 не был указано в мастер блоке, потому что за это время был уже 934 выпущен (reply to 319315)

Роман: интересно. спасибо, пойду почитаю как это работает, я думал у них больше связи, чем просто 933 потерялся будто) думал если следить за шардами из мастерчейна, то нельзя будет пропустить шард блок, а оказывается можно   https://tonviewer.com/block/(0:8000000000000000:56352933)

Tim: https://github.com/ton-core/ton-lite-client/pull/12/files (reply to 319317)

Tim: Много кто думал, так сказать

Роман: ))

Tim: Если в блоке -1:100 ссылка на 0:1000, а в -1:101 ссылка на 0:1002, то 0:1001 тоже надо запарсить, но там могут быть интересные кейсы с сплитами и мержами воркчейнов, поэтому просто взять блок -1:100 и -1:200 и просто посмотреть разницу индексов нельзя

Роман: Tim, а на каждый сплит/мерж обязательно будет же мастерчейн блок? Не может же быть такого, что шарды втихаря решат между двумя мастерчейн блоками там поделиться несколько раз и слиться. Каждое деление и слияние - мастерчейн блок? (reply to 319321)

Tim: Это вроде верно. Последний и первый блоки воркчейнов всегда должны быть в мастерах.  Если кто-то может подтвердить или опровергнуть было бы еще лучше. (reply to 319322)

Denis: Да (reply to 319322)

Denis: Там в блоках есть признаки before_split и before_merge. Вот они должны быть зареганы в мастерчейне чтобы произошёл сплит/мерж

Denis: При этом первый(-ые) блок(-и) после сплита/мержа могут не попасть в мастерчейн

— 2025-08-25 —

Gregory: Доброго дня Кто-нибудь при использовании утилиты toncli получал такую проблему?  (.venv) every@DESKTOP:~/ton/count/external_data$ /usr/bin/fift -I /home/every/.config/toncli/fift-libs -s /tmp/tmpih99oxan.boc [ 1][t 0][2025-08-25 09:59:21.190181351][Fift.cpp:66]   top: include level 1: <text interpreter continuation> [ 1][t 0][2025-08-25 09:59:21.190748051][fift-main.cpp:192]     Error interpreting file `/tmp/tmpih99oxan.boc`: tmpih99oxan.boc:1:      include:cannot locate file `/home/every/ton/count/external_data`

Gregory: /home/every/ton/count/external_data это путь до директории проекта

Gregory: /usr/bin/fift -I /home/every/.config/toncli/fift-libs -s /tmp/tmpih99oxan.boc эту команду toncli пытается выполнить в рамках деплоя example проекта

Gregory: Неуспешно, соответственно  File "/usr/lib/python3.11/subprocess.py", line 571, in run     raise CalledProcessError(retcode, process.args, subprocess.CalledProcessError: Command '['/usr/bin/fift', '-I', '/home/every/.config/toncli/fift-libs', '-s', '/tmp/tmpih99oxan.boc', '']' returned non-zero exit status 2.

Gregory: Окружение Debian WSL2, установка чистая, просто toncli с pip-a и тестовый проект

Gregory: Бинарники отсюда https://github.com/ton-blockchain/ton/releases/

Vladislav: Всем доброго времени суток, на сколько я помню, когда мы деплоим либу для своего контракта(тот же stablecoin-contract репо), то при хранении в чейне у нас должна взиматься плата, однако в тестнете не увидел явно, чтобы баланс уменьшался на адресе либы, мб что не так понимаю.

Gregory: Проблема решена прописыванием в project.yaml пути до файла contract.fif напрямую. Раньше он пытался скормить fif диру проекта

&rey: Так он уменьшится в эксплорере только после очередной транзакции. (reply to 319348)

Vladislav: Звучит разумно, сейчас протестирую, как раз больше недели прошло (reply to 319353)

Vladislav: Хотел валидировать код своей библиотеки, которую залил на тестнет, однако при попытке сборки и валидации verifier.ton.org получаю совсем другой хэш, с чем это может быть связано?

pavel: спасибо, апи получил но бесполезно потому что скрипт в приложении для подключения аналитики надо тянуть с tganalytics.xyz (на гите в примере) а он мертвый (reply to 319312)

pavel: возможно если использовать библиотеку sdk и реакт, то будет работать, но я не использую реакт, мне нужен cdn скрипт (reply to 319364)

adb: тут не могу помочь (reply to 319364)

RootTon: Всем привет, подскажите пожалуйста, как можно подписать forward payload в tanconnectui ?

Бладзи: Всем привет! Никто не подскажет, как можно определять ханипот токен или нет? У них обычно код контракта зашифрован в тонвивере

User: Через эмуляцию или так как таких контрактов не так уж и много минтиться, можно кешировать хеш кода контракта и сверять по нему, но в таком случае вам нужно будет пополнять эту таблицу хешей (reply to 319379)

adb: https://github.com/getgems-io/nft-contracts/blob/main/packages/contracts/sources/deployer/deployer.fc  кто-нибудь знает почему ГГ пишет не использовать их нфт деплоер, а писать свой?

&rey: Ну, во-первых, их право по закону: не лицензировать использование никому другому. Во-вторых, не очень корректно парсят StateInit. В-третьих, опкод 555, дающий владельцу отправить любое сообщение от имени этого контракта. В-четвёртых, сейл может развернуться до того, как нфт на него придёт, а может после. (reply to 319381)

adb: т.е. по факту можно написать свой деплоер проще, там же задача не слишком сложная как я понимаю (reply to 319383)

Combot: Combot выдал(а) предупреждение Нина Голубева (2/3) Reason: 1 reports (reply to 319391)

AL Pamblus: здравствуйте чат.   тон вьювер мой кошелёк помечает как спам.  куда можно обраться, чтобы исправить это?

Пескарь™: к Великому Денису Субботину (reply to 319398)

Denis: прям кошелек или исходящие сообщения? (reply to 319398)

AL Pamblus: кошелёк (reply to 319400)

Denis: а покажите?

sd: И такое теперь есть

AL Pamblus: У меня как-то такое произошло, что код я вырубил, а он в фоне начал работать и слать кучу транзакций на свой же адрес, сгорело 3-4$ на комиссию.  возможно из-за этого.. Не шарю.

Denis: https://tonviewer.com/EQC9AevlAcsQk6uzXcWNMhmKZng5HEfXFMrRFr7T_EXQ1KSz переписка топ. а по делу: завтра посмотрю на что там робот сагрился (reply to 319403)

AL Pamblus: да, я наверное час назад наконец-то смог добавить AI в кошелёк.  добавил DeepSeek и промты для забавы.  Спасибо (reply to 319408)

— 2025-08-26 —

.: Какие варианты есть кроме своей ноды получать быстро данные по транзакциям кошелька? Toncenter медленный (

Denis: Быстрее не будет (reply to 319412)

Denis: ну точнее будет но это типа надо что-то сильно кастомное и своё пилить. (reply to 319415)

Mark: Смотря каким образом получаете. Можно парсить блоки или подключить streaming api (по sse/ws), должно быть почти моментально (reply to 319412)

Viacheslav: Привет. А где почитать про нововведение что подарки можно в нфт конвертировать и деплоить?

.: Другие апи нет смысла пробовать? (reply to 319419)

.: А каким сервисом лучше пользоваться по streaming api? Сейчас я получаю через toncenter  v2 чекаю транзакции кошелька, но там данные через секунд 5-7 появляются (reply to 319420)

.: Я пробовал по listen server от tonconsole но чёт рабочее сделать не смог. Вебхук тоже с задержкой

Denis: все эти апи расчитаны на передачу надежных финализированных данных

Denis: время финализации как раз 5-7 секунд

Дмитрий: А мемпул тонапи так же работает?

Дмитрий: Вроде им мев боты пользуются, им как раз нужны очень данные сразу как только они появляются

.: Но toncenter же сырые данные по v2 но тоже с задержкой..(

.: Спасибо, изучу (reply to 319444)

Mark: https://t.me/toncenter_news/51  Есть ещё от ton console, но про него не могу сказать (reply to 319440)

Mark: Здесь есть пендинги тоже если нужно. Только не стоит на них полагаться, чтобы засчитывать оплату в сервисе (reply to 319448)

1337: гайз,как узнать id гифта

.: а где вы нашли такое? (reply to 319444)

Evgenius_pmpemius: Добрый вечер, не подскажите ли где или у кого можно арендовать приватные ноды?

1337: очень прошу помочь тех кто шарит (reply to 319451)

1337: в идеале просто сказать мне его)

Evgenius_pmpemius: Так не улучшен, что ты от него хочешь? (reply to 319479)

1337: верно,мне нужен его i’d для кода который автоматически улучшает его (reply to 319480)

Evgenius_pmpemius: Ага, понятно (reply to 319482)

Evgenius_pmpemius: Попробуй перебор устроить. По идее если обращаться к айди каждого подарка то можно что-то получить, например название или текст какой нибудь (reply to 319482)

Evgenius_pmpemius: Хз, не работал с тг

1337: вероятно там рандомные цифры которых много, так не переберёшь

Evgenius_pmpemius: Но если это обычное апи с параметрами (айди) то должна же быть какая нибудь информация выводиться при вводе айди

Evgenius_pmpemius: А не ф@кт (reply to 319486)

Evgenius_pmpemius: Хотя хз

Андрей: Не в том чате спрашивает, (reply to 319451)

.: не оно https://docs.tonconsole.com/tonapi/liteservers ? (reply to 319472)

F: Кому интересно следить за TON Storage - вышел в бету mytonstorage.org С помощью него можно загружать свои файлы провайдерам в TON Storage Так же через него можно смотреть содержание бегов: https://mytonstorage.org/api/v1/gateway/<bag_id> Например: https://mytonstorage.org/api/v1/gateway/20A1E61CB22D3BE753C9D7BF8DAE996EECE168A2DC2CB50B758E2BD3E79A296E

1337: направил тип сюда) (reply to 319495)

Константин: Всем ✋👋 привет

Evgenius_pmpemius: Это лайт сервер, у меня свой. Мне нужны именно ноды. Мой лпйтсервер может обрабатывать хоть 10к запросов в секунду но публичные ноды дают не больше 20 запросов, лайт сервер подаёт запрос на нод сервер (reply to 319498)

🐼 Sild: Нода и сервер одно и то же ведь (reply to 319502)

𝖘𝖔𝖜𝖑𝖈: привет, сайт загрузил туда и лаунч джсон не работает, сможешь помочь? (reply to 319499)

𝖘𝖔𝖜𝖑𝖈: sendfile: file /var/ton-storage/db/site/***/launch.json not found

𝖘𝖔𝖜𝖑𝖈: может быть из-за того что файл сайта основной не index.html ?

𝖘𝖔𝖜𝖑𝖈: назвал иначе

🐼 Sild: нет, лайт-сервер "лайт" потому что не хранит исторические данные, в отличии от полной ноды никакую нагруку никто никуда не дает (reply to 319502)

𝖘𝖔𝖜𝖑𝖈: помогите пожалуйста (reply to 319512)

Evgenius_pmpemius: Есть СДК пайтонлиб либо тонуитилс (библиотека короче Пайтон либо гоу) она обращается к лайтсерверу который в свою очередь обрабатывает эти запросы и на низком уровне обращается к ноде которая хранит нудные данные и умеет записывать в блокчейн то что надо  Sdk(pythonlib,tonutils)->liteserver->node (reply to 319517)

Evgenius_pmpemius: ? (reply to 319472)

Evgenius_pmpemius: Добрый вечер, не подскажите ли где или у кого можно арендовать приватные ноды?

5b 44 43 54 5d: Архивные или полные? (reply to 319523)

🐼 Sild: нет, это все еще какая-то каша.  Еще раз, liteserver == node.  сдк (не использовал, но уверен) работают через сторонние индексаторы (тонапи, тонцентр, вот это все)   up  ну да   +adnl. Вот adnl это как-раз для работы с нодой (лайт, архивной - пофигу, какую поднимите такая и будет)

🐼 Sild: да мне кажется там рейт-лимита в тонапи какое-нибудь не хватает на самом деле =/ (reply to 319524)

Evgenius_pmpemius: Полные (reply to 319524)

Evgenius_pmpemius: Лпйтсервер это клиент который берет на себя задачу формирование низкоуровневых запросов для работы с нодой,а для работы с лайтсервером используется СДК обычные библиотеки пайтонлиб либо тонутилс (reply to 319525)

🐼 Sild: лайтсервер это лайтсервер https://docs.ton.org/v3/guidelines/nodes/running-nodes/liteserver-node у него как минимум 2 апи (возможно есть третье): lite (adnl): https://github.com/ton-blockchain/ton/blob/master/tl/generate/scheme/lite_api.tl tonlib (грустное): https://github.com/ton-blockchain/ton/blob/master/tl/generate/scheme/tonlib_api.tl  эти ноды никуда не ходят чтобы обрабатывать запросы. Они достают из хранилища данные и отдают. Если данных нет - не отдают

🐼 Sild: ну коммон (reply to 319528)

🐼 Sild: то что ты называешь клиентом и формированием низкоуровневых запросов - это сторонние индексаторы (те самые тонапи и тонцентр) но они (тут зуб не дам) не формируют низкоуровневый запрос в ноду, а просто работают на своих предобработанных данных целиком

Evgenius_pmpemius: Кхм кхм. У меня по какой-то причине сформировалась картинка что как раз таки лайтс формирует низкоуровневые запросы ноде  Слушай, я думаю это связано с мизерным количеством источников, можешь что-то посоветовать почитать?

Evgenius_pmpemius: Я уже и сам запутался

Andrey: Лайтсервер и нода - это одно приложение, лайтклиент низкокровневый клиент который конектится к лайтсерверу(ноде) и достает от туда данные (reply to 319532)

Andrey: Все индексаторы (tonapi, toncenter, etc) работают поверх лайтсервера, достают от туда данные, индексируют и предоставляют уже REST API для агрегированных данных

🐼 Sild: только то что вот прямо сейчас нагуглил по ходу разговора =( https://docs.ton.org/v3/documentation/infra/nodes/node-types https://docs.ton.org/v3/guidelines/dapps/apis-sdks/sdk/#python  ну т.е. питоник действительно adnl-апи оборачивает и может только напрямую в ноду ходить (если верить доке) тонутилс еще пару индексаторов в себя завернул дополнительно  pythonlib это обертка над tonlib походу (т.е. тоже только в ноду) (reply to 319532)

Evgenius_pmpemius: https://github.com/ton-blockchain/ton/tree/master/lite-client-docs  Тоесть я правильно понимаю что если у меня есть лпйтсервер то нода мне нах не сдалась?Вот допустим я арендовал у тонапи лпйтсервер и через сдк-пайтон работаю с ней, лайт сервер этот никуда не бегает в поисках ноды а у себя же все берет и этот репозиторий в себе уже и так несёт все необходимое для ПРЯМОЙ работы с ьлокчейном без всяких дополнительных нод? (reply to 319534)

Andrey: Лайтсервер и есть нода (reply to 319537)

Evgenius_pmpemius: Я 3 дня дипсик мурыжил (не знаю куда ещё бегать) мне говорил что лпйтсервер это клиент....  Не очень вышло, спасибо большое что поправили (reply to 319538)

Evgenius_pmpemius: Лайт сервер имеет какие-то ограничения перед нодой? (reply to 319538)

Evgenius_pmpemius: Ну вот для меня тот что работает с СДК они будут видны?

Andrey: Лайтсервер это нода. (reply to 319541)

𝖘𝖔𝖜𝖑𝖈: вы сможете помочь с тон сторедж? (reply to 319534)

Andrey: Вас не смутило что сервер и клиент сами по себе разные понятия? Всем генераторам текста не надо верить, нужно искать исключительно  документацию. В крайнем случае весь текст доки скармливать, перед тем как что то спрашивать (reply to 319540)

Andrey: А то сейчас это читается как:  Автомобиль это корабль, какие ограничения имеет корабль перед судном?

Evgenius_pmpemius: Как же меня дипсик ввел в заблуждение ухахаххахаххаа (reply to 319546)

🐼 Sild: так он не обманул =/

🐼 Sild: для синхронизации лайт-ноды нужна ну либо другая лайт-нода либо полная нода, я там точно не знаю

🐼 Sild: хотя вот это не правда

Evgenius_pmpemius: Так стоп стоп стоп е, вы же только что мне говорили что лайт сервер и есть нода

Evgenius_pmpemius: А фух (reply to 319550)

🐼 Sild: он заб о т л и в о переписывает все книги себе

Evgenius_pmpemius: Так стопе, давайте ещё раз. Лайт сервер это и есть нода. Для ее работы не нужны сторонние ноды, да?

🐼 Sild: ей нужно как-то контактировать с другими нодами чтобы получать обновления

🐼 Sild: и отсылать обновления*

Evgenius_pmpemius: Тоесть публичные ноды ей нужны не для того чтобы отправлять транзакции (reply to 319556)

Evgenius_pmpemius: С джсона можно взять публичные ноды, где-то список помню

🐼 Sild: блокчейн это децентрализованная хрень с консенсусом и прочьей фигней на валидаторах когда что-то случается на какой-то ноде, в конечном счете оно должно попасть к валидаторам, чтобы они узнали об этом событии, сохранили его себе, и рассказали всем друзьям что это событие финализировано

Andrey: У лайтсервера есть данные это и есть нода, полную бредятину пишет (reply to 319547)

🐼 Sild: по крайней мере я примерно на таком уровне в этом разбираюсь🦉 (reply to 319560)

Evgenius_pmpemius: Так окей. Я вот типикал юзер СДК. Хочу работать с ьлокчейном. Я ставлю лайт сервер  по документации  https://github.com/ton-blockchain/ton/tree/master/lite-client-docs  И другие ноды мне нужны лишь чтобы освежить знания но транзакции могу отправлять от имени самого лайт сервера ибо это и есть уже нода, да?

Andrey: Вам не важны детали реализации откуда какие данные берутся, там р2р под капотом никакие ноды вручную указывать не надо (reply to 319549)

🐼 Sild: 😐давай на какой-нибудь терминологии сойдемся уже (reply to 319564)

Andrey: Это не документация (reply to 319564)

Evgenius_pmpemius: Хахахаххаах (reply to 319566)

Andrey: Документация в docs.ton.org

Evgenius_pmpemius: Чувствую себя в цирке в котором я в роли клоуна. Ну ладно, учиться же надо как-то (reply to 319566)

Evgenius_pmpemius: Ну там про лайт сервер ничего не было, ну про установку точно (reply to 319569)

Andrey: Есть (reply to 319571)

Evgenius_pmpemius: Если я все правильно понял то там описывается установка лайт сервера (reply to 319566)

Andrey: https://docs.ton.org/v3/documentation/infra/nodes/node-types (reply to 319573)

Evgenius_pmpemius: Оно? (reply to 319536)

Andrey: Установка full node с включенным режимом лайт сервера (reply to 319574)

Evgenius_pmpemius: Огромнейшее спасибо (reply to 319574)

🐼 Sild: даже одну, чтобы они потом по p2p могли находиться? там где-то централизованный сервер который их раздает? (reply to 319565)

Andrey: В глобал конфиге указаны dht ноды через который происходит поиск других пиров (reply to 319578)

🐼 Sild: неправильно ну с чего бы вообще (reply to 319573)

Evgenius_pmpemius: https://docs.ton.org/ru/v3/guidelines/nodes/running-nodes/liteserver-node Нашел это, тут просто все ответы на все мои вопросы. Короче я должен пройтись по всей доке чтобы больше не задавать тупых вопросов

Evgenius_pmpemius: Спасибо большое что выдержали меня))

— 2025-08-27 —

Evgenius_pmpemius: Там даже видео инструкция есть... Бляха.Оно приватное (reply to 319581)

web-assist 🧀: Еще есть вариант искать в этом чате по ключевым словам. Здесь очень много информации, главное поискать (reply to 319581)

X1ag: https://testnet.tonviewer.com/0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkT?section=nfts  тестнету плохо(

Denis: Нфтшкам плохо (reply to 319595)

Denis: Тонапи тестнет переезжает на новый индекс. Сегодня ночью даунтайм ещё будет

X1ag: ну, тонвиверу плохо скорее (reply to 319596)

Denis: Только нфт и старые блоки (reply to 319598)

X1ag: насколько старые? (reply to 319599)

Denis: А тебе на сколько старые нужны? (reply to 319600)

X1ag: час-два назад хотя бы (reply to 319601)

Denis: Тогда все хорошо (reply to 319602)

Palwan: Привет ребят. Что случилось с названием токенов в сети тестнета, и когда это исправят ?

X1ag: это тестнет? (reply to 319610)

Palwan: Да (reply to 319611)

X1ag: https://t.me/tondev/319597 (reply to 319612)

⛰️ Roman ⛰️: С нфт пока все нормально

Palwan: Можешь поделится откуда инфа ? (reply to 319597)

Виктор 👺: Он разработчик (reply to 319623)

Palwan: Хорошо спасибо (reply to 319624)

Виктор 👺: А есть у кого нибудь адрес нфт, у которой есть коллекция и individual_content не в формате Tep64, ну чтобы надо было до коллекции достучаться, чтобы получить для нфт метудата?

Viacheslav: оффчейн метадата типа? (reply to 319628)

Виктор 👺: Не, семичейн, но чтобы еще изначальная метадата не парсилась в словарь (reply to 319629)

Виктор 👺: Ну это подошло, спасибо (reply to 319629)

MORTI: How do I get investors and financial support? Where should I send our application? We have a mini-app and a market on ton platform.

Виктор 👺: Maybe this will help https://t.me/tmabuild (reply to 319639)

MORTI: tanks bro (reply to 319640)

Кисель: Есть ли возможность получить промежуточные стейт ченджи внутри блока для аккаунта (если на аккаунте исполнилось несколько транзакций за блок)? А то с ShardStateUnsplit можно получить состояние до и после блока, а все что внутри покрыто мраком

user: Можно офтоп вопрос про телеграм аккаунт задать? А именно про баг при входе

🐼 Sild: только эмуляция, только хардкор (ну или tonlib-api которое тоже эмуляция, но ее сделают за тебя) (reply to 319646)

&rey: Не-а, про бан при входе — это оффтоп. (reply to 319647)

user: Рей, не про бан. Я в лс отпишу теье ситуацию (reply to 319652)

наз: всем ку, я правильно понимаю что тут на каждой итерации цикла мне возвращается ключ, ячейка - значение и флаг который будет равен -1 пока в словаре еще что то лежит?   if (op == op::proxy) {         throw_unless(err::not_admin, equal_slices_bits(sender_address, admin));          cell msgs = in_msg_body~load_ref();         do {             var (key, item, f?) = msgs~udict_delete_get_min(64);         } until ();          return ();     }

X1ag: там же еще тебе dict' должен вернуться: (cell, (int, slice, int)) ~udict::delete_get_min(cell dict, int key_len) asm(-> 0 2 1 3) "DICTUREMMIN" "NULLSWAPIFNOT2";

наз: хм, а почему тогда тут они так парсят?  https://github.com/ton-blockchain/token-contract/blob/1182ad99413242f09925d50e70ccb7e0e09f94d4/nft/nft-collection.fc#L110  или там какая то старая stdlib? (reply to 319657)

X1ag: 3 years ago. Думаю что старая там (reply to 319658)

наз: пон (reply to 319659)

X1ag: https://github.com/ton-blockchain/nft-contract  вот тут посмотри (reply to 319660)

X1ag: хотя там так же делают

наз: рискну предположить что из за ~ мы тот дикт что должен вернуться присваеваем переменной на которой вызываем операцию

X1ag: "~" изменяет объект (reply to 319663)

X1ag: Вот Андрей Пфау объяснял https://t.me/tondev/294140

наз: ну типа, если с точкой вызвать то мы получаем дикт, а если нет то изменяем текущий (reply to 319664)

X1ag: да

наз: тада пон

X1ag: тогда все гуд у тебя (reply to 319655)

⁣⁣ᅠ: всем привет, подскажите пожалуйста как из вот такого формата адреса 57919342870731519007488225142385905926488099455445991116026959614230016777191n  issue-card перевести в user friendly в ts ?

наз: а че ему не нравится?  exit code - 7   if (op == op::proxy) {         throw_unless(err::not_admin, equal_slices_bits(sender_address, admin));          cell msgs = in_msg_body~load_ref();         do {             var (key, value, f?) = msgs~udict::delete_get_min(64);             if (f?) {                 cell msg = begin_cell()                     .store_uint(0x10, 6)                     .store_slice(value~load_msg_addr())                     .store_coins(value~load_coins())                     .store_uint(1, 1 + 4 + 4 + 64 + 32 + 1 + 1)                     .store_ref(value~load_ref())                     .end_cell();                 send_raw_message(msg, SEND_MODE_REGULAR);             }         } until ( ~ f?);         return ();     }   hash_map = HashMap(key_size=64)  hash_map.set_int_key(     int_key=1,     value=begin_cell()     .store_address(wallet.address)     .store_coins(int(0.05 * 1e9))     .store_ref(         begin_cell()         .store_uint(0, 32)         .store_snake_string("Hello, I'm proxy")         .end_cell()     )     .end_cell(), )  await wallet.transfer(     destination='',     amount=int(0.1 * 1e9),     body=begin_cell().store_uint(op_code, 32).store_uint(0, 64).store_dict(hash_map.serialize()).end_cell() )

Denis: >>> a = 57919342870731519007488225142385905926488099455445991116026959614230016777191 >>> hex(a).replace('x', ':') '0:800d2fb432ebc41314ead09d877921e8f7842a13acf33399e11f8b6dfd375be7' (reply to 319670)

Denis: но хз правильный ли это адрес и где вы вообще число взяли

Denis: ну там начались короче работы. могут быть всякие артефакты. планируем за 2-3 часа уложиться (reply to 319597)

наз: определил перменные перед отправкой сообщения и поехало   if (op == op::proxy) {         throw_unless(err::not_admin, equal_slices_bits(sender_address, admin));          cell msgs = in_msg_body~load_ref();         do {             var (key, value, f?) = msgs~udict::delete_get_min(64);             if (f?) {                 slice destination = value~load_msg_addr();                 int mgs_value = value~load_coins();                 cell body = value~load_ref();                  cell msg = begin_cell()                     .store_uint(0x10, 6)                     .store_slice(destination)                     .store_coins(mgs_value)                     .store_uint(1, 1 + 4 + 4 + 64 + 32 + 1 + 1)                     .store_ref(body)                     .end_cell();                 send_raw_message(msg, SEND_MODE_REGULAR);             }         } until ( ~ f?);         return ();     } (reply to 319673)

Tim: Давно тебя не было в уличных гонках, что билдишь? (reply to 319677)

наз: на хакатоне осеннем сбилдил протокол, щас вот сижу переделываю по человечески (reply to 319678)

1ms hardcore: а кто-то знает можно ли через апи фрагмента пополнить тоны телеграм аккаунта?

Оскар: да, можно (reply to 319683)

user: А у них апи есть? Или я стеба не понял (reply to 319683)

1ms hardcore: закрытое (reply to 319687)

user: Понял (reply to 319688)

1ms hardcore: мало ли кто-то реверсил

.: Доброй ночи, возможно как то узнать NFT контракта с фрагмента, например https://fragment.com/gift/homemadecake-167575?collection=all&filter=sale без захода на сторонний сервис? я его знаю через getgems но чтобы узнать вот так..

5b 44 43 54 5d: Пройтись по все й коллекции и смотреть мету/дергать гет метод как вариант (reply to 319692)

.: спасибо за идею, эта хороший совет, попробую (reply to 319693)

— 2025-08-28 —

Виктор 👺: А что такое nft контракта? Index? (reply to 319692)

.: Его адрес, вот пример https://tonviewer.com/EQBUXuQI612W1e71Gk5atugejGqteQeDa8hA9tTwREcXWQiv (reply to 319701)

Виктор 👺: А что вы о нем знаете? Кроме адреса (reply to 319702)

Виктор 👺: Или типо у вас есть ссылка на гетгемс, а вам нужен адрес (reply to 319692)

.: Номер коллекции да и собственно всё (reply to 319703)

.: Ну и рабочий вариант это спарсить все адреса нфт коллекции или запросами (не вникал ещё) или парсером  и потом отдавать на нужный нфт , его адрес

Виктор 👺: Еще можно по индексу если есть. Вот в целом все методы https://github.com/ton-blockchain/TEPs/blob/master/text/0062-nft-standard.md#get-methods (reply to 319706)

ytiruces: Доброе утро. Тестнет не живой?

Denis: У них обед или точнее завтрак (reply to 319708)

Denis: Но это только тонапи. Тонцентр должен работать. Чиним

AL Pamblus: Спасибо большое за то что убрали "scam" с моего адреса. (reply to 319713)

Denis: алсо починили (reply to 319713)

AL Pamblus: мне бы идею подкинуть. хочу что-нибудь нестандартное, шизу идею какую-нибудь в блокчейне сделать.  как ии в кошельке.

Denis: сделать UTXO модель кошелька поверх аккаунтной модели тона

Vladislav: Поподробнее можно? (reply to 319734)

fruitful-l: Биток поверх тона? 😭

Tim: Какие новые возможности это открывает? (reply to 319734)

fruitful-l: Мне кажется тут не в возможностях дело (reply to 319733)

匿名科技-王也: Hello, can anyone help me solve the problem of transferring USDT in PHP, or give me an example?

cb: Уже есть 😁 (reply to 319733)

AL Pamblus: делитесь что именно есть? (reply to 319757)

Eugene: Так и попробуйте ИИ в кошельке  Моя интуиция говорит, что на пересечении «ИИ и крипта» сейчас будет возникать много разной шизы, но среди неё найдётся 1%, который в итоге действительно пригодится  Так что это даже полезная шиза (reply to 319733)

AL Pamblus: я уже сделал. он кроет матом тех кто продаёт токен.   UQC9AevlAcsQk6uzXcWNMhmKZng5HEfXFMrRFr7T_EXQ1Pl2 (reply to 319759)

fruitful-l: А как же тот, который сам с собой общался? (reply to 319761)

Dmitry: А шлет ТГ подарки тем кто купил монету? (reply to 319761)

AL Pamblus: это уже работа с тг, а такое я не трогаю. (reply to 319763)

Vladislav: Неплохая идея, аля анонимные подарки? (reply to 319763)

Gregory: Добрый день  Кто-нибудь может объяснить, в чем разница между Tuple и Tensor в FunC?  И там и там упорядоченная коллекция элементов с произвольными типами. Кортеж ограничен 255 элементами, но занимает 1 слот в стэке TVM, тензор не ограничен по размеру, занимает больше места? Это все?

Оскар: tuple это примитив твма, tensor это составной тип func который просто обозначает несколько примитивов твма в стеке (reply to 319768)

Gregory: Хм, окей Но для использования в коде если не задумываться о памяти/скорости (утрирую) функциональный смысл только в том что tuple ограничен по размеру получается? (reply to 319770)

.: цену контракта продажи можно узнать только через toncenter.com/api/v2/runGetMethod ? эти данные не моментальные и запаздывают, есть вариант получить более сырые данные?

5b 44 43 54 5d: как union в C? :D (reply to 319770)

Оскар: ну, если говорить грубо то практически да, единственное что для tuple есть соответствующие твм опкоды для взаимодействия с ним (reply to 319771)

Оскар: нет, tuple из трех интов это одно значение в стеке tensor из трех интов это просто три инта идущие подряд а стеке (reply to 319773)

Denzel': как in_msg_body перевести в cell а не оставлять его в slice чтобы перекинуть его дальше на другой контракт?

Farel: при отправки транзы получаю 500   error: 'LITE_SERVER_UNKNOWN: cannot apply external message to current state : failed to parse external message: external message must begin with ext_in_msg_info$10',  раньше все отправлялось

Farel: тонцентр лежит?

Dmitry: Записать в новый селл. Боди это часть селла (reply to 319779)

Denzel': просто begin_cell().store_slice(in_msg_body).end_cell() и потом уже на контракте сделать ~load_ref().begin_parse()? (reply to 319782)

&rey: Да и из тензора сложно достать значения посередине. Вообще, если на стеке больше 16 значений используется, всё дороже. (reply to 319771)

fruitful-l: Не совсем понимаю выбор скобок для этого объяснения в кукбуке func. Почему у tuple указаны скобки тензора? Lists can be represented as nested 2-element tuples. Empty list is conventionally represented as TVM null value (it can be obtained by calling null()). For example, the tuple (1, (2, (3, null)))represents the list [1, 2, 3]. Elements of a list can be of different types.

Anton: тут перегруженный термин tuple, можно читать как cons(1, cons(2, cons(3, null))) (reply to 319786)

fruitful-l: Спасибо (reply to 319787)

fruitful-l: Если рефом отправлять только, то нужно единичку перед ним в сообщении добавить, если не ошибаюсь (reply to 319783)

X1ag: а если я задеплоил нфт и указал в качестве метадаты файл на .json в гитхабе, а потом удалил этот файл, то у меня перестанет нфт показываться на сканерах или блокчейн сохраняет эти данные?

Виктор 👺: Ну external metadata она на то и внешняя, что ты сам обеспечиваешь доступность ее

Виктор 👺: Кажется, умнее чем просто достать из твоего нфт ссылку и сходить по ней нету. Если она не валидна, то твой нфт тоже

&rey: Блокчейн не сохраняет, а вот кэш сканера может. (reply to 319791)

X1ag: т.е. у блокчейне только ссылка сохраняется? (reply to 319794)

Виктор 👺: Да, в метадате только ссылка, но можно и сохранить мету on-chain

Виктор 👺: https://docs.ton.org/v3/guidelines/dapps/asset-processing/nft-processing/metadata-parsing#parsing-metadata (reply to 319795)

X1ag: а вот ончейн коллекция  {   "name": "Meridian #119",   "image": "https://c.tonapi.io/onchain/image/0:6ae73e0dfc6789c8176f361e2d3e33294a4034f29f2f5b28805fa2cd6ebdda2e/nft",   "description": "Meridian is the first fully on-chain collection on TON block-chain of random characters." }  image это же тоже ссылка, а если ссылка перестанет существовать, то и картинка перестанет существовать?

Denis: нет. там картинка в оригинале image: "data:img/csv....." но это крайне херово поддержано везде кроме браузеров и поэтому тонапи кладет картинку себе и отдает урл для унификации

X1ag: спасибо (reply to 319801)

Виктор 👺: А он скинул не оригинальную метадату, а ту которую вернул тонапи? Типо в оригинале она прям в блокчейне лежит? (reply to 319801)

Denis: оно еще кстати и не по стандарту лежит. работает только из-за большой моей любви к армянскому коньяку

fruitful-l: А что именно не по стандарту там? (reply to 319804)

Es Ist Das: Привет! Подскажите, пожалуйста, кто шарит, можно ли проверить transfer notification, без передачи в пэйлоаде jetton wallet code? Типа чтобы без sender==contract(me, master, code)

Dmitry: админ-операцию прислать с адресом правильного сендера, чтобы сохранить и потом сверять? (reply to 319810)

ytiruces: Скажите, пожалуйста, если я дополню стандартное хранилище NFT еще одной ячейкой с данными, я нарушу этим стандарт NFT и этот контракт не будет работать?  ;;  Storage ;; ;;  uint64 index ;;  MsgAddressInt collection_address ;;  MsgAddressInt owner_address ;;  cell content ;;

Виктор 👺: Метадата коллекции должна хранится в формате TEP64, individual_content отдельного нфт, если у него есть коллекция, может хранится в любом формате (reply to 319812)

Виктор 👺: Так что весь доп контент надо пихать в NFTitem.individual_content

ytiruces: Еще бы понять как это делать. В этом гайде individual_content ничего нет (reply to 319814)

ytiruces: Если под individual_content понимает тот json, который содержит имя, ссылку на картинку и атрибуты, то с этим понятно. А вот если мне надо отправить nft на другой контракт и обработать эти матаданные в этом контракте, то это уже не сработает. В cell content хранится просто имя json файла с этими метаданными

Dmitry: Стандарт не описывает внутренности контракта. Стандарт описывает сообщения и гет-методы (имя и вх/вых данные). До тех пор пока вы соблюдаете эти требования - вы соблюдаете стандарт. Эталонная имплементация стандарта - лишь пример, который удовлетворяет требованиям, но не единственный возможный (reply to 319812)

Combot: Combot выдал(а) предупреждение Number (1/3) Reason: 1 reports (reply to 319821)

— 2025-08-29 —

AL Pamblus: Здравствуйте чат. TON DNS  есть возможность продлить контракт на годы вперед?

Dmitry: Нет (reply to 319854)

Denis: Друзья, в Storm Trade открыта вакансия Senior Golang Developer.  Ищем сильного инженера, который готов работать над core off-chain частью топового perp DEX на TON. Стек: Golang, PostgreSQL, Redis, Kafka, Docker/K8s, TON. Будет много вызовов: высоконагруженные системы, блокчейн-интеграции, архитектурные задачи.  Подробности https://docs.google.com/document/d/1_yJCzwgS7Mwx0uOG7OU1myuZOc2-oPQxLvAAYdHGlxE/edit?tab=t.0 Вилка от $6k+

Bоris: Вы знаете, может быть вам не помешал бы стажёр? (reply to 319861)

web-assist 🧀: Стажер везде помешает, за ним еще следить блин надо (reply to 319866)

Oleg: Даже на мидла надо тратить много времени, а чтоб содержать стажера это считай выделить целого человека на 70% рабочего времени

ytiruces: Все сработало, спасибо. (reply to 319818)

Viacheslav: Привет. Для получения рандомного числа, в доках рекомендуется отправить echo запрос в masterchain и потом получить его обратно и вызывать rand(). Это нужно самому писать этот  контракт, который будет в masterchain? он просто примет запрос и снова отправит транзакцию да?

Mr: Бро, не тот чат 😁 (reply to 319876)

X1ag: а можно ли сделать re-entrancy атаку на тон?

&rey: Ну, если криво контракт написать (начинает обработку в одной транзакции, сохраняет какое-то промежуточное состояние, заканчивает обработку в другой). (reply to 319883)

fruitful-l: А если на несколько контрактов? Например, если один контракт отправляет сообщение второму, увеличивает какое-то значение, пока не придет баунс от второго, а я отправляю первому сообщение на вывод этого значения перед тем как пришел баунс. Это ведь тоже атака повторного входа? (reply to 319884)

&rey: Не думаю, что она так называется, но проблемы такие бывают.  Паттерн "value-carrying messages" спасает. (reply to 319887)

Окока: Здравствуйте, есть какой то способ подключить субдомены 3-его уровня, getgems разрешают делать такие домены за опред плату.   Есть какой нибудь способ подключить их к кошельку?

&rey: А всё зависит от того, к какому основному домену они подвешены.  К гетгемовскому — надо гетгемс спрашивать. Как написать свой резолвер поддоменов, есть статья в документации — она, в частности, рассказывает, как работает **.ton.resolve-contract.ton. (reply to 319897)

Окока: Я уже просто пару месяцев долблю их поддержку, они щас сказали у вас спросить (reply to 319898)

Denis: что значит "подключить"? (reply to 319897)

Denis: сделать так что бы при отправке на  okoka.pupoka.ton деньги приходили в ваш кошелек?

Окока: ну можно выразиться и так (reply to 319901)

Denis: так это. гетгемс продаёт домены но не позволяет им днс записи править? воспитывать их некому

Kirill: Всем привет! Подскажите пожалуйста, что не так с liteserver в тестнете, чет выдает 503 ошибку

Sasha: Рейтлимит? (reply to 319906)

Kirill: Да не, у них наверно что то упало https://testnet.toncenter.com/api/v2

Mirka: https://testnet.toncenter.com/api/v2/ (reply to 319909)

Kirill: О, сейчас заработало

Виктор 👺: А если возьму картинку с тонвьюра скачаю, возьму хеш, а потом возьму хеш от того что получид в метадате, они будут совпадать, или есть подводные (reply to 319804)

Denis: не понял вопрос. (reply to 319914)

Виктор 👺: Ну в метадате у нфт возьму скачаю картинку, она просто же там размещена по ссылке на сервер, а не чисто байты выдаются. Эту скачанную картинку сравню с самостоятельно выкачанной картинкой они будут идентичны? (reply to 319915)

Михаил: Подскажите, а что этот кошелек вообще делает? Зачем он нужен?  Ef8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM0vF

&rey: Контракт, который выбирает валидаторов сети для следующего раунда. Описание на https://docs.ton.org/v3/documentation/smart-contracts/contracts-specs/governance#elector, например. (reply to 319917)

M: Друзья, подскажите, как быстрее получить статистику юзеров в боте? Куда можно подать заявку, кому написать?

Not: А сколько юзеров в месяц у вас? Там по-моему показывает от 1000 юзеров в месяц (reply to 319924)

— 2025-08-30 —

Vladimir: Чат русскоязычного сообщества разработчиков на TON. (reply to 319924)

Combot: Combot выдал(а) предупреждение M (1/3) Reason: 1 reports (reply to 319924)

X1ag: а если я задеплоил нфт с оффчейн метадатой и после деплоя поменяю содержимое ссылки, то эти изменения отобразятся на тонвивере?

Denis: Да но не сразу (reply to 319941)

fruitful-l: Почему за легитимность жалобы на нарушение валидатора должны проголосовать именно 2/3, а не большинство?

Vladimir: 2/3 это не большинство? (reply to 319947)

fruitful-l: 6/11 тоже большинство, но если 6/11 проголосует - жалоба не легитимная, так как нужно именно 2/3 (reply to 319948)

fruitful-l: Вот и вопрос почему обычный voting требует любого большинства, а голосование за жалобу - минимум две трети

&rey: Может быть причина вроде "минимум 2/3 текущей сети должны знать, требуют ли какие-то блоки исправления из-за нечестного валидатора". (reply to 319947)

Es Ist Das: Вроде же классика, решение задачи византийских генералов (reply to 319950)

fruitful-l: Разве она относится к уже сформированным блокам, в которых требуется исправление? (reply to 319952)

Es Ist Das: В том числе, да Любой новый блок в шардчейне - инвариант, поэтому мы можем откатить историю до блока требующего исправления, и пересчитать заново последние N блоков после исправления (reply to 319954)

DPL: Подскажите пожалуйста как правильно получить in_msg.message_hash, если есть boc транзы Юзаю pytoniq-core

DPL: понял, похоже что столкнулся с проблемой нормализации хеша, подскажите pytoniq core умеет в это?

Combot: Combot выдал(а) предупреждение Connor (1/3) Reason: 1 reports (reply to 319978)

&rey: Конкретный алгоритм просто разбирает ячейку и собирает по-новой; pytoniq-core такое, конечно, умеет, но вроде не из коробки. (reply to 319975)

Ness: https://github.com/nessshon/pytonutils/blob/main/tonutils/utils.py#L18-L45  Оно? Передай boc как строку (reply to 319975)

— 2025-08-31 —

Not: здравствуйте. подскажите где скачать работающий тон сторадж? на виндовс

Андрей: Для винды лучше тон-торрент. тон-сторадж консольный и больше для linux (reply to 320001)

Not: Дайте пожалуйста сыллку, я смогу через тон торрент добавить в нфт метадату же? (reply to 320002)

Андрей: https://github.com/xssnick/TON-Torrent На счёт метадаты для нфт - не уверен (reply to 320003)

Not: Ну а для чего тогда еще сторадж? Файлы же хранить (reply to 320004)

Оскар: технически да, урл контента должен быть tonstorage://my_bag_id/ но вопрос хороший - резолвят ли эту схему всякие тонапи, гетгемсы и прочие, чтобы закэшировать у себя метаданные, которые можно будет достать по http? так как браузер не понимать кто этот ваш тон сторадж (reply to 320003)

Not: спасибо (reply to 320002)

🅿️🅾️Ⓜ️🅰️♓️🈴: (меня из другого сообщества с этим запросом сюда отправили))) Камрады, а при обилии нынешних веб-сервисов по созданию разных смартконтрактов, есть ли реальная необходимость в кастомной разработке на Tolk например? Насколько это вообще востребовано и на каком именно спектре задач? Дело в том, что я сейчас подумываю из Bitcoin-разработки перейти в разработку для TON (грубо говоря - контракты на Tolk писать и интерфейсы к ним), но не уверен, что это вообще кому-то нужно - есть ведь Getgems и другие сервисы, которые как будто покрывают значительную часть потребностей рынка. Что скажете? Особенно интересно мнение разработчиков и ПМов.

Not: пишите в личку обсудим, я и смарты пишу и опыт pm велик. (reply to 320010)

Gl:     count = 2     items = HashMap(257)      link = "/1.json"     for i in range(count):         value = begin_cell().store_snake_string(link).end_cell()         items.set_int_key(int_key=i, value=value)      boc = (          begin_cell()             .store_uint(2432039616, 32) # opcode             .store_uint(2, 64) # qury_id             .store_uint(2, 8) # count             .store_dict(items.serialize())             .end_cell()             .to_boc(hash_crc32=True)     )     bin = base64.b64encode(boc).decode("utf-8")     print(bin)  Пытаюсь сгенерировать транзакцию на батч минт nft когда формирую таким образом сообщение и пробую отправить транзакцию, транзакция завершается не успешно с кодом выхода 10(словарь неправильно сформирован), в чем проблема может быть?

Александр: Доброго времени суток. Как я могу настроить вайтлист для приватного минта в моей новой коллекции? В гетгемсе

&rey: Там же вроде только один адрес минтить может, владелец коллекции? Вам надо сделать или типа прокси-контракта (от вайтлиста на коллекцию), или прокси-плагин к v5 кошельку (что малость сложнее). (reply to 320015)

Александр: Получается, в таком случае, нужен будет прокси-контракт … (reply to 320018)

&rey: А какой у нас самый газово оптимальный хайлоад? Требуется: отправлять по одному сообщению на фиксированный адрес, с максимально возможной скоростью.

Ness: Рассмотрите вариант cNFT коллекции. (reply to 320015)

Александр: А в чем ее суть если в 2 словах (reply to 320024)

кзс: есть готовый код для развёртывания контракта, если известны salt и адрес?

&rey: Известно что, ещё раз? (reply to 320026)

кзс: salt и сгенерированный адрес

&rey: Ну, в общем и целом надо достать код vanity неясно какой версии, собрать ячейку данных и отправить там StateInit + 1 нанотон. (reply to 320028)

Александр: Просто мне кажется для коллекции из 100 нфт сНФТ развертывать как то не очень оправданно

Savanswaty: Error in chunk 1: 406, message='error code: 0 message: cannot apply external message to current state : External message was not accepted\nCannot run message on account: inbound external message rejected by transaction F7B6D39E0112958FC1DBFE2A64E3B3BE06026805D456A55DC5F8F0B583AB8217:\nexitcode=35, steps=71, gas_used=0\nVM Log (truncated):\n...xecute EQUAL\nexecute THROWIFNOT 38\nexecute NOW\nexecute PUSH s10\nexecute SUB\nexecute PUXC s5,s-1\nexecute GREATER\nexecute THROWIFNOT 35\nexecute XCHG s4\nexecute NOW\nexecute LEQ\nexecute THROWIFNOT 35\ndefault exception handler, terminating vm with exit code 35\n', url='https://tonapi.io/v2/blockchain/message'     Подскажите пожалуйста что изменилось в tonutils by nesshon ?  При отправке с highloadWalletV3 - такое сообщение , хотя  работало все раньше норм ????

&rey: Что-то со временем на вашем компе, или valid_until уехал. (reply to 320034)

🅿️🅾️Ⓜ️🅰️♓️🈴: Парни, и все-таки, если немного отвлечься от бытовухи в виде неправильно системного времени)) У меня в силу нулевого опыта в TON-разработке есть откровенное непонимание:  - Какие именно бизнес-задачи решают TON-разработчики в кастомной разработке?  Ну, то есть - с чем именно к вам приходит заказчик?  Например: я недавно делал майнинговый пул, еще несколько лет назад делал всякие микросервисы для эйрдропа и пр. Но все это для Биткоина. А в TON на какие задачи запрос?

&rey: Ну, например, одна задача – оптимизация ZK-STARK, чтобы влезал в одну транзакцию по газу. (reply to 320039)

🅿️🅾️Ⓜ️🅰️♓️🈴: То есть к вам пришли с уже готовым продуктом, чтобы вы это оптимизировали, потому что своими силами они не справились? Так? Любопытно )  А можно ли сказать, что такого рода задачи (оптимизация контрактов) - это мейнстрим в TON-разработке?   И если не секрет: каков порядок цифр в бюджете? У заказчиков в целом деньги имеются ли? Или они в основном по фрилансу ищут низшую цену и поэтому в проекте меняется 5-10 команд? )) Ну, просто для веб-разработки это обычная история, когда на нищенских бюджетах проект пишут все кому не лень, и смотреть на это потом откровенно страшно 😁 (reply to 320040)

fruitful-l: а это сильно подогреет интерес? вроде и tonnel со снарком еле справляется с выживанием, насколько я понимаю (reply to 320040)

&rey: А суть и не в интересе. Суть в том, чтобы были zero-trust технологии. (reply to 320046)

Sergey: я смотрел их код, там есть свои недочеты, но groth16 не так и дорого использовать, по крайней мере, чтобы достигнуть out of gas - нужно постараться)  тут есть ссылочка на репу с примерами: https://t.me/tondev/318360 (reply to 320046)

&rey: Но ведь в SNARK-ах токсичные значения могут быть, или надо следить внимательно за церемонией генерации. (reply to 320048)

Sergey: Безусловно, но можно все по красоте сделать (reply to 320049)

— 2025-09-01 —

наз: всем ку, а какой тип будет у булевой переменной в tl-b схеме?

&rey: Bool или (## 1) (reply to 320058)

Ilya: Добрый день, как можно получить хеш транзакции после отправки сообщения, есть ли способы сразу получить? не сканируя постоянно адрес

Леша: Он же получается от тела сообщения (reply to 320070)

Ilya: Получается, но после исполнения транзакции он другой, то что я получаю с тело сообщения не видят сканеры по типу тонскан

Denis: https://gist.github.com/mr-tron/a4b3e8eff3a982e3426f6397eb9a2450

Dmitry: никак. "сразу после отправки" транзакции еще нет. вы отправили только ext-in сообщение, оно еще не стало транзакцией включенной в блок, так что и хэш транзакции еще не существует. есть хэш вашего сообщения, и разные эксплореры/апи могут уметь/неуметь искать транзакцию по хэшу  сообщения, однако как вы понимаете в общем случае можно найти от 0 до N подходящих транзакций. (reply to 320070)

Ilya: можно ли через бок получить после исполнения транзакции? или вообще какие данные сохранить чтобы гарантированно поймать тот самый хеш?

Oleg: https://t.me/tondev/320074 (reply to 320077)

fruitful-l: Экзотик транзакции - это транзакции, которые связаны с экзотик ячейками? Возможно ли где-то прочитать подробнее о них (и транзах и ячейках), чем описано на ton docs? Очень мало инфы и не очень практично собирать кусочки из чата

Denis: не бывает экзотик транзакций. бывают тик-ток транзакции и несколько других видов, которые описаны в схеме но не встречаются. с экзотик ячейками никак не связаны

/B4ckSl4sh\: О транзах вот тут https://docs.ton.org/tblkch.pdf (reply to 320079)

fruitful-l: В маркдауне это просто оговорка тогда? Отрывок из этого файла -  Если не брать экзотические транзакции, которые не имеют особого интереса в рамках это документации (reply to 320074)

/B4ckSl4sh\: Экзотик ячейки по всем вайтпейперам раскиданы, они и немного в tvm.pdf и везде, но есть один прекрасный видос на ютубе, сейчас поищу

Denis: а. ну это фигура речи была а не какой-то определеный тип транзакций. имелись ввиду тиктоки и эмиссия (reply to 320082)

/B4ckSl4sh\: https://www.youtube.com/watch?v=bZDZTefHUeg&t=5427s&ab_channel=EverUniversity (reply to 320079)

/B4ckSl4sh\: Предупреждаю, олды могут увидеть участников воркшопа и прослезиться

fruitful-l: О, спасибо большое (reply to 320085)

X1ag: кстати оч крутой видик (reply to 320085)

Виталий Зуев: Здравствуйте, свапнул TON/USDT на Трасте, ТОН с кошелька пропали, а usdt не приходят цже как 2 часа, это нормальное время ожидание или уже нужно писать в поддержку и тд.?

Артём: Долговато, хотя может для траста норм) (не пользовался), пишите в поддержку, пусть просканируют. (reply to 320092)

Grigorii: Всем привет, ton wallet не дает совершить транзакцию с жетонам помеченными как скам, как верифицировать жетон?

Vladislav: Там заявку нужно подавать на верификацию через pr на сколько помню (reply to 320099)

Grigorii: Через pr?

fruitful-l: Разве если просто unverified, то нельзя скидывать?

Grigorii: tg wallet не дает совершить транзакцию со скам жетонами

Max: а что за жеттон-то? какой symbol у вас? (reply to 320099)

Grigorii: SANCN (reply to 320104)

Max: https://github.com/tonkeeper/ton-assets/pulls (reply to 320105)

🐼 Sild: а во всяких вот таких вот сигнатурах гет-методов  (slice nft_address) get_nft_address_by_index(int index)   int всегда обозначает BigInt? Или оно как-то под-капотом разберется и вытащит tinyint если его туда положить?  вообще как со стеком и чиселками правильно работать? Если влезает в i64 - пихать в tinyint, иначе в BigInt? tonviewer вон предоставляет тип Number для ручной эмуляции и как-то справляется

fruitful-l: Так в стеке в принципе только 257 битное число (reply to 320111)

🐼 Sild: ноу, согласно block.tlb еще есть TinyInt https://github.com/ton-blockchain/ton/blame/master/crypto/block/block.tlb#L865 (reply to 320112)

Aliaksandr: Вроде он не используется обычно (reply to 320113)

🐼 Sild: Забавно. Судя по нашим тестам гет-методы хорошо жуют как i64, так и i257  но мы тестили только на 2.5 контрактах - поэтому я тут с этим вопросом)

X1ag: а что это за документ? (reply to 320114)

Aliaksandr: https://docs.ton.org/tvm.pdf (reply to 320116)

🐼 Sild: мутноватенько. Вычитывал я из ответа твм tiny_int как-то для какого-то контракта  вообще не понятно что значит "не используется", если контракт может собрать любой стек

🐼 Sild: Там про какой-то codepage zero, это типа версионирования TVM что ли.  На практике TVM этот codepage zero еще не переросла?

Petr: Все еще cp0 да

Виктор 👺: Не, точно приходит от контрактов tiny-int (reply to 320114)

Виктор 👺: И очень часто

🐼 Sild: ты ж небось знаешь что там происходит на самом деле, расскажи🙄 (reply to 320120)

Aliaksandr: https://github.com/ton-blockchain/ton/blob/cac968f77dfa5a14e63db40190bda549f0eaf746/crypto/vm/stack.hpp#L563 https://github.com/ton-blockchain/ton/blob/cac968f77dfa5a14e63db40190bda549f0eaf746/crypto/vm/stack.cpp#L783 Ну вообще судя по тому что тут mode = 0 по умолчанию то мб, может я поспешил с выводами и нельзя доверять вайптпейперам (reply to 320121)

Petr: Ноль идей, я в таких ситуациях просто пробую все варианты и если работают, то значит можно :))) (reply to 320124)

Миша: Кто-то успел сегодня новую коллекцию подарков взять?

Max: Не для этого чата вопрос (reply to 320128)

Миша: Тут чисто разрабы сидят? (reply to 320130)

fruitful-l: Tvm pdf не обновлялся никогда, но странно что до этого нет особо сообщений про tiny int (reply to 320126)

/B4ckSl4sh\: Я так понимаю это больше нужно, чтобы в разных воркчейнах разные версии твм гонять (reply to 320119)

Eugene: Читаю в документации про W5  Правильно ли понимаю, что выделенный фрагмент означает следующее?  — вот есть флаг is_signature_allowed  — его можно переключить внешним сообщением (от владельца кошелька)  — но его нельзя переключить внутренним сообщением (от какой-то другой стороны, пусть даже с подписью владельца)  — а вот в остальном и внешние, и внутренние сообщения одинаково могут что угодно, если подпись есть

Denis: Его может переключить только экстеншен (reply to 320145)

Denis: Да (reply to 320145)

Eugene: Спасибо, про экстешены пока недопонимаю, но пойду вчитываться дальше понять (reply to 320147)

&rey: Стоит читать код, потому что документация написана по мотивам. (reply to 320150)

Eugene: У первых трёх версий кошелька код очень короткий и его читал, а вот про пятую подумал «тут уже больше, обойдусь документацией») Но похоже, что не обойдусь, да (reply to 320152)

Denzel': как может быть такая ошибка, учитывая что эта функция находится в том же файле где вызывается?  contracts/position/math/executionPrice.fc:8:13: error: undefined function `calc_k_oi`, defining a global function of unknown type         int k_oi = calc_k_oi(total, delta, k_base);

Denzel': вот сама функция (int, int) calc_delta_oi(int oi_long, int oi_short) impure inline {   int total_oi = oi_long + oi_short;   int delta_oi = oi_long - oi_short;    return (total_oi, delta_oi); }

Виктор 👺: Имя разное?

Denzel': ой, не ту функцию кинул  (int) calc_k_oi(int total_oi, int delta_oi, int k_base) impure inline {   if (total_oi == 0) {     return k_base;   }   int ratio = delta_oi / total_oi;   int abs_ratio = abs(ratio);    return (k_base * (abs_ratio / delta_oi)); }

Оскар: когда ты возвращаешь одно значение - не нужно его заворачивать в тензор, убери скобки где ты возвращаешь значение и в возвращаемом типе самой функции  так же не совсем понимаю почему эта функция impure (reply to 320165)

Denzel': на верочку пишу, чтобы не было проблем (reply to 320166)

Denzel': спасибо (reply to 320166)

Denzel': не помогло. Ошибка та же  вот так изменил функцию:  int calc_k_oi(int total_oi, int delta_oi, int k_base) inline {   if (total_oi == 0) {     return k_base;   }   int ratio = delta_oi / total_oi;   int abs_ratio = abs(ratio);    return k_base * (abs_ratio / delta_oi); } (reply to 320166)

Оскар: а она находится до или после места где вызывается? (reply to 320169)

Denzel': ну функция где вызывается выше находится чем эта (reply to 320170)

Оскар: а теперь попробуй эту поставить выше (reply to 320171)

Denzel': да) спасибо) (reply to 320172)

fruitful-l: Так компилятор нормально к такому относится, разве нет? Или это больше с эстетической точки зрения замечание (reply to 320166)

X1ag: Нет. Компилятор ругается на такое (reply to 320174)

Petr: Это как в Си, можно решить еще вот так   () foo();  () bar() { foo() }  () foo() { ... }

fruitful-l: вроде скомпилировалось нормально. (excuse my chiikawa)

Petr: А вот использовал бы Толк...

fruitful-l: Я только его и использую, сейчас вот для эксперимента на фанси написал, честно-честно!! (reply to 320178)

&rey: Толк ловит функции даже на подземной парковке и в неимпортированном файле? (reply to 320178)

Petr: Толк ловит даже без интернета (reply to 320180)

fruitful-l: Почему словарь который пушится в стэк при принятии сообщения всегда с длиной именно 19?

Petr: Потому что такое значение вшито в фифте

Petr: https://github.com/ton-blockchain/ton/blob/558a28e282d6432187e35e9c4b37f5dcc650affb/crypto/fift/lib/Asm.fif#L1522

Petr: А вот почему именно 19 мне и самому интересно

fruitful-l: вот да, я хотел к этому подвести как раз (reply to 320185)

X1ag: а, вы про это) я про позицию функции говорил (reply to 320177)

Виктор 👺: А есть у кого нфтишка, у которого в метадате ipfs ссылка и не cloudflare

Grigorii: Всем привет, а что бы поддержать в своем контракте поддержать отправку кучи транзакций(до 255) Мне надо просто составлять out_actions и пихать их в c5 регистр?

&rey: Ну, если вы это можете сделать оффчейн, то так и стоит. А так, SENDRAWMSG собирает всё те же ячейки за чуть меньше газа (не тратит на все опкоды сборки actions). (reply to 320190)

Grigorii: я хочу сделать при internal сообщение  При internal лучше циклом проходится по ячейке и делать SENDRAWMSG на каждой итерации?

DPL: Подскажите как правильно доставать с транзакции, по boc транзы message hash IN сообщения, и outcome сообщений в лоб через pytoniq-core Transaction.deserialize(sl) и tx.in_msg.serialize().hash.hex(): у некоторых транзакций начинает не сходится с explorer'ом Почему может быть так? Не только у External-in (думал что из-за нормализации), но ещё у outcome сообщений Подозреваю что проблема в in_msg.serialize(), но как решить хз

🐼 Sild: у int сообщений часть полей проставляется хрен пойми как и хрен пойми где (в частности src_addr), если будете заботливо ручками задавать - думаю, сойдется (reply to 320194)

🐼 Sild: а хотя куда оно сойдется. там же еще lt всякие прилетают. Не сойдется ничего

DPL: int сообщение сходится, там есть адекватные правила нормализации. Вот нашел единственную транзу где у меня обычное out сообщение не сошлось, при то что в In nранзе сходится (reply to 320195)

🐼 Sild: int это не ext-in, это все внутренние сообщения между контрактами. Нормализация применяется только для ext-in емнип

DPL: так у меня полный body транзакции есть

🐼 Sild: а. т.е. она финализирована уже. ну тогда должно сходиться))

🐼 Sild: кинь транзу

DPL: в личку норм?

🐼 Sild: угу

— 2025-09-02 —

Combot: Людмила Фёдорова has been temporarily muted for 86400 seconds

⚝𝕲⛧𝕹𝕮𝕳𝕬⚝ $BEARGOY: Подскажите, числа после запятой хранятся в блокчейне в соответствии с установленными настройками или в соответствии с настройками они только отображаются юзерам, а хранятся до бесконечности? Ну например какого-то токена у меня 0.123456789, это его реально столько или там может быть 0.1234567890000001?

&rey: В блокчейне не хранится чисел после запятой вообще. (reply to 320214)

&rey: Чейн только с неделимыми единицами работает, а вот в метаданных токена есть decimals.

⚝𝕲⛧𝕹𝕮𝕳𝕬⚝ $BEARGOY: Т.е. 0.123456789=0.123456789, де? Больше быть никак не может, если сам создатель токена не установил больше знаков (reply to 320216)

Oleg: Хранится 123456789, а как вы это число интерпретируете, блокчейну наплевать (reply to 320217)

Alex: А можно как то кастомизировать blueprint pack? Я хочу в билд свои утилиты докидывать

Aliaksandr: на текущий момент нативно нет, из решений - внутри файла с каким нибудь враппером сделать экспорт этих утилит, но тогда будут импорты не оч удобные Если есть возможность - можно описать issue тут https://github.com/ton-org/blueprint/issues, как хотелось бы видеть такой функционал, поможет в реализации (reply to 320220)

DPL: tx = result[0]  print(tx.in_msg.serialize().hash.hex()) print(tx.out_msgs[0].serialize().hash.hex())   это верный метод выковыривания message hash в pytoniq-core? почему может не сходится с tonviewer?

Аладдин: Всем привет! Извините, если не в тот чат вопрос.  Подключаю TGAnalytics SDK в мини апп. Запрос на /events возвращает 400 ошибку: {"message": "Invalide app_name is specified"} Подскажите, пожалуйста, какой app_name нужно указывать? В документации написано, что нужно указать название приложения, которое вы указали при создании токена. Я правильно понимаю, что это username tg-бота, к которому привязана аппка?

Vladimir: нужно указать название приложения, которое вы указали при создании токена (reply to 320233)

最好的进步者: Ох. А где проверки на None? Такой код у тебя может вылетать с постоянными исключениями (reply to 320228)

DPL: тут не до проверок None, если pytoniq не верный хеш считает и в целом код useless выходит (reply to 320238)

最好的进步者: У тебя в списке result одна запись?

最好的进步者: И хешит не pytoniq а hashlib

DPL: pytoniq сереализирует msg, думаю там проблема, другие библиотеки на rust, typescript возвращают верные результаты

最好的进步者: А в третьих ты хешишь фулл сообщение целиком, а не получаешь хеш транзы

最好的进步者: Или я чёт не правильно понял

DPL: не правильно, я делаю то что мне необходимо. Получаю message hash in/out сообщений, для 90 процентов транзакций сходится. Для остальных 10 процентов нет. Если вынимать магией с refs эти сообщения и без сереализации от pytoniq получать хеш, то всё ок Значит есть идея что проблема на стороне либы, может кто-то сталкивался (reply to 320244)

🐼 Sild: почитай исходники сериализатора по моему опыту некоторые либы любят state_init_to_ref & body_to_ref продолбать при конвертации в ячейку и обратно  ну точнее не продолбать, а попортить. Чтобы в исходной ячейке дети были в ссылке, а в сериализованной - в самой ячейке (или наоборот) (reply to 320245)

Александр: А можно сделать так, что бы в боте за звезды на прямую покупали ?

Aliaksandr: https://github.com/ton-blockchain/TEPs/blob/8b3beda2d8611c90ec02a18bec946f5e33a80091/text/0467-normalized-message-hash.md Вам нужен нормализованный хэш, не работал с питоном, но скорее всего библиотека не всегда корректно считает его, лучше вручную собрать (или законтрибьютить) (reply to 320245)

🐼 Sild: не, это не о том. как ни странно тут просто человек берет хеш от out_msg - и получает не то, что должно быть. К нормализации и поиску по экстерналу это отношения не имеет (reply to 320255)

Aliaksandr: так тут как раз таки к тому что не сходится с тем что на tonviewer, как я понимаю они по этой схеме формируют hash (reply to 320264)

🐼 Sild: тонвьювер вообще хеш сообщения не отображает вроде как тонскан не знаю какой именно отображает, но отображать _только_ нормализованный было бы странно. int сообщения нормализовать вообще смысла не много, а не писать обычный (не-нормализованный) хеш финализированного сообщения - ну такая себе затея с точки зрения ui. Хотя кто знает

🐼 Sild: ну и на саммом деле мы вчера ночью проверили, растовая библиотека считает хеш также как тонскан (без нормализации) т.е. да, проблема в питонике, но не в нормализации

biomechanic: здравствуйте как максимально быстро верифнуть токен?  контракт: "0:5e62b3be2b13fd95bc9bed4afb00e498c728607883a6f173b0bb704d1b59cc1e пул: EQA70u7AZ5am0jDwwSDzWhlRC7XRg-AnmkR4irTFQCFx05_4

Vladimir: https://github.com/tonkeeper/ton-assets (reply to 320272)

Begin: Почему сначала он сам себе отправляет

Begin: Из примеров highload (reply to 320294)

X1ag: с highload wallet отправляете?

Begin: Да (reply to 320298)

X1ag: тогда это норм практика

Begin: Почему? Больше данных больше комиссия за газ не так ли? (reply to 320300)

Dmitry: Для выполнения условия «high load» других вариантов не нашлось. Если посмотрите в код и будут идеи как улучшить - велкам сделать v4 (reply to 320301)

Spice Lover | PWRL: а всё, дошли

— 2025-09-03 —

new balance: Здравствуйте! Пытаюсь конектить кош (v3 )в новой апке fuse - выдаёт вот такую ошибку. Я бы вам не писал - но у них нет ни где поддержки.

Александр: Всем привет, ребят, кто знает - как ваучер Notcoin сейчас преобразовать в саму монету Notcoin?  Раньше просто была во всех интерфейсах удобная кнопка, но сейчас её нет. Возможно надо вызвать определенный контракт? Но как и какой?

Василий: https://tonviewer.com/UQChKo5IK3iNqUHUGDB9gtzjCjMTPtmsFqekuCA2MdreVBFr  Такие свапалки есть для всех шардов. Нужно определить в каком шарде(первые 4 бита адреса) ваша nft , и послать на нужную свапалку c опкодом 0x5fec6642 в forward_payload'е.  Как ни странно, народ там до сих пор что-то свапает, значит где-то есть dapp для этого, лучше ищите его. (reply to 320343)

Lev: Привет!) Пытаюсь разобраться в механизме отскока на примере контракта Jettons.  Стало очень интересно.  send_jettons отправляет весь велью который был в сообщении      send_raw_message(msg, SEND_MODE_CARRY_ALL_REMAINING_MESSAGE_VALUE | SEND_MODE_BOUNCE_ON_ACTION_FAIL);  Но потом по каким-то причинам получаетль не смог получить токены, потратил весь газ и отбросил сообщение. Чисто в теории вроде можно представить Но на этот случай у нас есть on_bounce и мы вернем токены на счет отправителя. Но ведь запись токенов обратно на счет тоже требует газа? Но если в отброшенном сообщении его не хватит на запись, то что произойдет. Или TVM умнее и отобъёт сообщение раньше, чтобы хватило на запись, опять же окей когда это просто жетоны, но вдруг это сложнее цепочка с 5 контрактами в цепочке, то получается на on_bounce нужно ведь будет вернуть еще дальше сообщение?

Mark: Проверьте, вроде в MyTonWallet ещё осталась такая опция (reply to 320343)

Max: https://not-burn.tonkeeper.com (reply to 320343)

Александр: Спасибо

ʜᴜʀʀɪᴄᴀɴᴇ: Ребят, а как с этим быть? Покупал звезды за тоны, пришло только 2 зачисления, а списания было 3

Max: Пытаться достучаться до поддержки Fragment/Telegram, иного пути не дано (reply to 320365)

ʜᴜʀʀɪᴄᴀɴᴇ: Писал в поддержку Кошелька тг, говорят они не причем, писал на почту фрагмента когда первый раз такое произошло - тоже молчат, на самом деле 4 раза было двойное списание на протяжении 1 сентября (reply to 320381)

Max: Ну кошелёк и правда здесь ни при чем   Никто другой кроме команды Fragment не поможет вам (reply to 320382)

ʜᴜʀʀɪᴄᴀɴᴇ: Да уж, а у них из связи только почта.. От которой до сих пор не ответа, не привета (reply to 320383)

fruitful-l: Как может быть полностью пропущена compute фаза при принятии сообщения контрактом? При условии, что контракт живой

/B4ckSl4sh\: количество тонов во входящем сообщении меньше, чем flat_gas_price (см конфиг) (reply to 320385)

fruitful-l: А как-то можно вытащить причину отсутствия фазы? Или только догадываться (reply to 320386)

/B4ckSl4sh\: В транзе написано (reply to 320387)

fruitful-l: А, да, спасибо, не долистал достаточно вниз на тонвьювере 😢

Teers k 🐾: https://github.com/ton-community/vanity-contract  Я нашёл адрес и соль нужный не понял что дальше делать, ts визивает ошибку что code.cell не существует или что-то того

Teers k 🐾: Кто шарит по этой теме, доки не понятные (reply to 320391)

Eugene: Наивный вопрос: хмм, а автор коллекции как будет однозначно определять, нарушены ли его роялти?   Скажем, он видит, что дорогая NFT его авторства сменила владельца прямым трансфером, и предполагает, что при этом произошёл и денежный обмен, но новый владелец говорит «подарили, экономического интереса не было», и что тогда?  Идея в том, что даже если такие прямые продажи без роялти не пресечь, то хотя бы более систематизированные через сервисы можно? (reply to 319092)

&rey: Я участвовал в разработке другой версии, про эту вообще не знаю.  Идея может заключаться вот в чём: "ну, автор в любом случае метаданные на своём сервере поменять может, так давайте на это стандарт сделаем". (reply to 320393)

Ness: Попробуй по этому примеру https://tonutils.ness.su/ru/cookbook/vanity/#_2 (reply to 320392)

Teers k 🐾: А почему нужно ввести Сид фразу? Для оплаты и деплоя прямо с кода? (reply to 320395)

Ness: Да. Рекомендую сперва развернуть в тестовой сети. (reply to 320396)

Teers k 🐾: Без разницы с какого кошелька оплачиваю? Или нужен именно тот который был использован как owner в vanity (reply to 320397)

Ness: Только owner. Но это не  точно, уже не помню. (reply to 320398)

Eugene: Чот я почитал https://docs.ton.org/v3/documentation/dapps/assets/nft-2.0, и по-моему, это расходится с тезисом «статус проставляет автор коллекции»:  «Если маркетплейс не подчинится и будет продавать NFT с обходом роялти, то вообще все NFT на нём получат статус royalty_violated»  Есть ли тут те, кто разбирался с NFT 2.0 и может прояснить? (reply to 320394)

Denis: стоит разделять документацию и имплементацию :) это же тон (reply to 320401)

Denis: а что там в имплементации там вообще непонятно

Denis: забейте. никакого нфт 2.0 в долгосроке не будет. поиграются и забьют. благо ничего делать для этого не надо

Eugene: Ну, издание The Daily TON не может забить на резонансные новости, ему надо качественно их освещать, даже когда выводом оказывается «все зря всполошились») (reply to 320404)

— 2025-09-04 —

Nikita: gm. подскажите как решить UI проблему с fullscreen запуском миниапа: Если запускаю из списка чатов по кнопке «Открыть/Open», то все ок, а если из самого бота, то миниапп запускается в обычном expanded режиме и соответсвенно отступы, которые были сделаны для fullscreen «съезжают» вниз, те открывается миниапп по-разному… надеюсь понятно объяснил) 😅

Dmitry: @devs там. спасибо млин бот за вырезание ссылок (reply to 320419)

Denis: ммммм. какже это прекрасно

Teers k 🐾: Этот vanity работает только для адреса джетонна? Для адреса кошелька обязательно ли сгенерировать Сид? То есть нельзя ли сгенерировать адрес который работает как ссылка при переводе на него мой основной адрес получить средства? (reply to 320395)

Vladislav: Комиссия разрабу?) (reply to 320430)

Ness: Там есть инструкция для кошелька, чуть ниже пролистать. (reply to 320433)

Teers k 🐾: Да нашёл но обязательно ли сгенерировать Сид фразу? Можно ли сгенерировать адрес который будет в роли ссылки при отправке на этот адрес деньги придут на основной кошелёк (reply to 320435)

Ness: Как вариант написать свой прокси контракт. (reply to 320437)

Tim: Ну можно. Пишите контракт. Делайте.

Teers k 🐾: То есть не существует пока что готовой реализации? (reply to 320438)

DPL: По какой причине при переводе на кошель jetton, не создаётся Transfer Notification, если кошель не активирован? А иногда создаётся. Как тогда верифицировать транзакцию?

Denis: зависит от forward_amount. при нулевом не шлёт нотифай

DPL: а почему на не активированый кошель Trust может не слать forward_amount? и насколько это частый кейс? и как тогда процессить эти транзы?

Tim: Кто процессит?

DPL: самостоятельно (reply to 320447)

DPL: смотрю блоки и ориентировался на Transfer notification, с активированым кошелем и большинстом провайдеров всё было ок, с не активированным вот нашёл что могут не отправлять forward amount

fruitful-l: Так если на них приходит сообщение, они в любом случае активными становятся, нет?

Max: А надо смотреть на жеттон-воллет (reply to 320449)

Denis: а даже если на него смотреть. то как понять что депозит случился? (reply to 320451)

Max: Нотифай может и не прийти, это от отправителя зависит

Denis: рекомендую парсить исходящий трансфер нотификейшен в обобщеном случае а для отдельного завайтлисченого списка хэшей кодов жетонов проверять что есть входящий интернал трансфер и компьют с экшен фазой закончились успешно

DPL: типо парсить информацию по сумме и тд с 0x0f8a7ea5 – Jetton Transfer (исходящий) и потом если есть приход 0x178d4519 – Jetton Internal Transfer с нужного жеттона, компьют и action фаза успех то можно зачислять депозит? (reply to 320454)

DPL: насколько это вообще частый кейс что кошельки не проставляют forward amount? вижу что wallet делает это

fruitful-l: А можете подсказать, что я не так понял? В смысле, что сообщение без valid state init не поменяет состояние? Или вообще в другом вопрос? На будущее, чтобы я глупости не писал (reply to 320450)

Denis: а можно пример? давайте им скажем - они поправят (reply to 320459)

DPL: wallet все норм отправляет, у trust проблемы. И они почему то на активированный wallet когда шлют то все ок, на не активированный не добавляют forward amount

DPL: а как у 0x178d4519 – Jetton Internal Transfer достать сумму? (reply to 320454)

DPL: там как в notification данные не спарсить с body

Dmitry: Стандарт TEP-74 не энфорсит структуру internal transfer, но тем кто не настаивает на изобретении велосипеда предлагает класть сумму сразу после query_id (reply to 320463)

DPL: ну то есть тоже не стандартизировано и предлагается ожидать что всё ок по умолчанию  Оф дока предлагает кверить баланс на текущий блок и высчитывать разницу с прошлым блоком, но что если 2 транзы на адресс попадёт в блок один (reply to 320465)

Dmitry: а есть бизнес-требование что юзер ручками отправляет жетоны (копипастит в кошель/траст/тонкипер адрес и вводит сумму)? а то если есть app (который ему показывает адрес куда слать) - может этот апп и транзакцию сделает (с правильным forward) и попросит юзера ее лишь подписать.... (reply to 320466)

DPL: да есть, юзеру отдаётся адрес и он сам как угодно пополняет (reply to 320467)

DPL: вопрос почему есть еще кошельки которые не отправляют forward amount, когда дока предлагает это делать всегда и как много таких кейсов

Dmitry: потому что есть еще программисты :) (помню в трасте еще трабла с генерацией адреса из мнемоники была, хз починена ли) (reply to 320469)

Dmitry: а это где? дока по жетонам надеется на transfer-notif, а дальше искать - ночь раньше придёт (reply to 320466)

Tim: можно точно на десятки процентов рассчитывать (reply to 320459)

DPL: https://docs.ton.org/v3/guidelines/dapps/asset-processing/jettons#processing-transactions (reply to 320472)

DPL: беда (reply to 320473)

Tim: свапы на стонфи/дедаст могут без нотификации проходить, в целом много когда такое может быть

DPL: Ну это уже не совсем кейс стандартного депозита где юзер ручками тыкает вывод на определенный кошелек (reply to 320477)

Tim: Когда кто-то додумается так депозитнуть и потерять деньги, прямо это сообщение и отправляйте (reply to 320478)

Denis: А вот не надо при приёме депозитов такое ожидать (reply to 320478)

Denis: Деньги пришли - задепозить. А уж как их отправили какое твоё дело

Max: Звучит как какой-то магический костыль ради костыля (reply to 320462)

DPL: Возвращаясь к вопросу, нет ли в таком случае лучше способа узнать сумму и верифицировать её чем описывает документация (кверять баланс по блоку и считать разницу с прошлым блоком)  Хочу разделить логику если в out message internal Jetton transfer есть нотиф - то ждать и процессить его, если нотификашки нет, то уже как то процессить без этого

DPL: Кстати хз в чем причина такой реализации, может кто то объяснит 🙌 (reply to 320482)

Max: бессмыслица это (reply to 320484)

DPL: Типо так, но где сумму брать при таком кейсе лучше всего (reply to 320454)

Tim: В сообщении получения интернал трансфера прочесть (reply to 320486)

Tim: Можно еще проэмулировать транзакцию и посмотреть баланс до и после, но такое я вам не рекомендую

DPL: а всё понял, спасибо, tonscan не отображал там данные Вопрос какие дополнительные верификации нужны на такой кейс? TransferNotify'ю дока предлагает доверять Этот кейс никак не описывает, почему и что может пойти не так? (reply to 320487)

Tim: Если жетоны доверенные успешного интернал трансфера достаточно

DPL: успешность в данном кейсе определить через computephase/actionphase ? (reply to 320490)

Tim: Да

DPL: спасибо (reply to 320494)

Tim: Но лучше вообще все флаги вроде aborted проверить и skipped transactions в экшн фазе

Teers k 🐾: Вы создали tonutils для Пайтона? (reply to 320438)

Teers k 🐾: И ещё берёт ли прокси контракт комиссию блокчейна (reply to 320438)

Eugene: Напомните кто-нибудь, где документация по поводу создания реферальных инвайт сообщений в апку со встроенной картинкой?  Как то однажды апдейт такой выходил для ТМА прошлой осенью

Grigorii: Всем привет, а есть какая то инфа о том сколько мин ton надо на трансфер жетонов?  Или только ручками считать?

Tim: От жетона к жетону отличается (reply to 320519)

Mark: Эмуляцию можно делать если нужно близкое значение (reply to 320519)

SanjarSupport: Здраствуйте! Хочу попробовать сделать аналог send(крипто кошелек) для начала хотя бы функцию отправки и получения крипты и подключения магазинов. Я сам вообще еще новичек в программирование, хочу для портфолио сделать, знаю не легкий проект и то что он не будет готовым выйти на прод, но попытаться думаю стоит, для получения знаний и опыта  что могли бы посоветовать? ну чтобы для начала ton подключить

Mirka: docs.ton.org (reply to 320528)

Teers k 🐾: Рисковано но допустим (reply to 320528)

Teers k 🐾: В этом случае вы храните деньги всех пользователей, у вес есть юридические риски из-за отсутствия лицензии и также вы должны гарантировать что средство пользователей под защитой при случае взлома деньги потеряют пользователи и вы должны всё оплатить (reply to 320528)

SanjarSupport: вроде же можно сделать так чтобы деньги не у нас хранились, а раскидать (reply to 320531)

Teers k 🐾: Здравствуйте, вопрос. Можно ли создать multisign с кем угодно достаточно знать его публичный ключ и всё? То есть технически я могу создать с любим уже существующим адресом wallet v3-v4-v5 просто скопировав его публичный ключ? Не обязательно что он делал какие-то действия?

&rey: Мультисиг который именно? Я помню, что их было несколько, но ссылки потерял. (reply to 320534)

Denis: текущий multisig v2 который на multisig.ton.org и в тонкипере Про он вообще не на пабкеях а адресах

Denis: подписант отправлят сообщение со своего обычного кошелька для подписи

Teers k 🐾: Я не знаю какая именно версия и в чём их отличие, я хочу узнать возможно ли создать такой контракт с помощью адреса который никак не связан со мной просто взяв его публичный ключ? (reply to 320535)

Teers k 🐾: Хочу создать мултисиг с незнакомцем, например. Если он просто отправил мне свой адрес кошелька, могу ли я взять с него публичный ключ и задеплоит мултисиг с ним?

&rey: *взять с него адрес, как Денис пишет. Вроде как можно, иначе не задеплоить было бы вообще — кто-то же будет первым. (reply to 320539)

Teers k 🐾: То есть второй пользователь не должен выполнить какую-то транзакцию или подпись для первого init этого мултисиг? А подпись будет нужна только во время транзакции (reply to 320540)

Denis: нет. просто говорит что вот этот аккаунт (можно даже не задеплоенный) теперь коподписант этого мультисига

&rey: Вы волнуетесь примерно о таком сценарии: у кого-то девять адресов, он десятым поставит вас и будет скам делать, который потом припишут и вам? (reply to 320541)

Teers k 🐾: Нет. Если я с другом хочу вместе сделать мултисиг кошелёк, но друг не шарит по этой теме, он просто отправил мне свой адрес кошелька (например v5 address) то могу ли я сам задеплоит этот мултисиг кошелёк без лишних действий друга кроме как отправить адрес и всё? (reply to 320543)

&rey: А давайте, раз уж ко всем стандартам нынче приходят обновления, бесполезно сделаем и мультисиг 3.0.  Чтобы стандартным порогом было 2/3, но кто-то мог высказаться "я против" и требовалось больше голосов "за". (reply to 320536)

Teers k 🐾: Тогда теряется смысл самого multisig (reply to 320545)

&rey: Почему? "за" = +1, "против" = -1, промолчал = 0, требуемый порог — N*2/3. (reply to 320546)

Teers k 🐾: И multisign берёт больше комисси чем тот же самый v5?

Denis: это какое-то дао ты изобретаешь. (reply to 320545)

Denis: да. мультисиг развлечение для богатых (reply to 320548)

&rey: Ну хоть не банковскую систему в рамках одного TEP) (reply to 320549)

Teers k 🐾: Примерно на сколько больше, сколько стоит газ одного перевода тон? (reply to 320550)

Teers k 🐾: В сумме

Denis: на порядок наверное. может два

Teers k 🐾: Это типо возможность отмены голоса или двойной голос? (reply to 320547)

Teers k 🐾: Я не понял что вы имеете ввиду, но вы гении, мечтаю иметь мозг как у вас

Kiba: Это дает x2 к весу, консенсус не соберется (reply to 320547)

Kiba: А какой юзкейс? (reply to 320545)

Kiba: Пока не очень представляю, где такое потребовалось бы

&rey: Идея в том, чтобы можно было сказать "я не поддерживаю этот action и считаю, что он настолько плохой, что я говорю это вслух". Как репутация каким-нибудь жетон-проектам, допустим.

Teers k 🐾: То есть проголосовать против за "за" или "против" ? (reply to 320560)

Denis: тогда надо еще таймлок обязательный на то чтобы успеть сказать фу (reply to 320560)

Denis: короче дао изобрел

Teers k 🐾: Понял теперь (reply to 320563)

Teers k 🐾: А я раньше думал что мултисиг так и работает (reply to 320547)

Teers k 🐾: Мултисиг и wallet v4-v5 тоже может также? Обеденит несколько переводов в один?

Леша: v4 и v5 могут, в4 4 перевода, в5 до 255, мультисиг хз (reply to 320569)

— 2025-09-05 —

Combot: Combot выдал(а) предупреждение Илья Пережогин (1/3) Reason: 1 reports (reply to 320572)

Игорь: Ребят, всем привет! Есть сайт мошеннический, косит под The Open Network. Выуживают обманным путём СИД фразы от кошельков. Куда написать, чтобы этот сайт прикрыли и никто не попался на их уловки?

Not: Главное в чат не присылай мой телеграмм аккаунт уже забанили так однажды (reply to 320576)

Леша: Cloudflare abuse report (reply to 320576)

Combot: Combot выдал(а) предупреждение Albert (1/3) Reason: 1 reports (reply to 320580)

..ᴛᴀᴡɪʟOne..: А а чего можно начать изучать любой язык блокчейна? И какой?

Oleg: Начать надо с вопроса "а для чего оно вам" (reply to 320600)

..ᴛᴀᴡɪʟOne..: Ну хочу в будущем искать уязвимости в сайтах или смарт контрактах (reply to 320604)

Oleg: Тогда ответ простой - надо изучить все языки) (reply to 320605)

..ᴛᴀᴡɪʟOne..: А с какого проще всего начать? (reply to 320606)

Oleg: Если о TON сети речь, то сейчас рекомендуется tolk

Леша: Это ради аудита безопасности или для корыстных целей (reply to 320605)

&rey: Ради аудита, очевидно, Tolk – новые контракты на нём будут. Старые же, написанные чаще всего на FunC, никуда не денутся. (reply to 320623)

Леша: Надеюсь) (reply to 320625)

Larry: Здравствуйте, как можно реализовать подключение TON-кошельков (Tonkeeper, Wallet, MyTonWallet) для телеграм бота?

Mirka: Tonconnect (reply to 320634)

Larry: Благодарю (reply to 320636)

— 2025-09-06 —

Vladislav: Я могу залить исходники на golang, вопрос в том, зачем всем они? (reply to 320658)

Combot: AL Pamblus has been temporarily muted for 86400 seconds

ytiruces: Добрый день. Кто-то может объяснить почему NFT Purchase Failed  https://testnet.tonviewer.com/kQBAl7gdi6jpGG027hx1ah3HA3K_Fjc71lwinEuXK1m3FSLY ?

ytiruces: На getgems вроде как в истории написано, что nft выставлен на продажу, но по факту его купить не могу (reply to 320675)

Max: Как есть, так и писать (reply to 320688)

𝙗𝙖𝙧𝙢𝙖𝙡𝙚𝙮: Hello, my verification attempt on Fragment was cancelled because of low quality photo.  I have funds (Stars) on my account and cannot withdraw them without KYC.  Please reset my KYC status so I can verify again. I've been waiting for 3 months, and the fragment support is ignoring me.

Vladimir: Чат русскоязычного сообщества разработчиков на TON. (reply to 320695)

Андрей: Никто из этого чата не может сбросить ваш статус KYC, вам нужно писать в их техподдержку. Или ждать когда он сам сбросится, я ждал не долго - как то раз зашёл и увидел что можно ещё раз пройти KYC (reply to 320697)

Teers k 🐾: А как он отличается с jetton master контракта? Или никак?

Teers k 🐾: UQ вроде для mainnet а не тестнет? (reply to 320676)

Леша: это формат адреса, который отражает bouncable флаг (reply to 320701)

Teers k 🐾: То есть и тестнет и mainnet может иметь и UQ, 0Q адреса оба без разницы? (reply to 320702)

Vladimir: https://ton.org/address/ (reply to 320703)

Teers k 🐾: Суде по этому тестнет не может быть UQ (reply to 320704)

Леша: а да (reply to 320706)

Teers k 🐾: Я хочу узнать о переменной Name, оно находится в блокчейне или это всего лишь часть tonviewer (и других аналогов)

❤️🐾 🏰 Tower: Это DNS имя кошелька (reply to 320710)

Mark: Нет (reply to 320711)

Mark: Это часть tonviewer (reply to 320710)

❤️🐾 🏰 Tower: Почему нет. Я могу любой dns сделать именем кошелька (reply to 320712)

Teers k 🐾: Фактически оно не существует в блокчейне, то есть я могу также сделать свои кастомные адреса например name .block главное чтобы кошелёк поддерживал? (reply to 320714)

Vladimir: https://github.com/tonkeeper/ton-assets/blob/main/accounts/celebrities.yaml (reply to 320710)

Teers k 🐾: Вроде он не должен находится в блокчейне (reply to 320715)

Mark: Да, этого не существует в блокчейне. Tonscan и tonviewer имеют отдельные списки "названий" адресов, которые отображаются в этих эксплорерах. (reply to 320716)

Teers k 🐾: ton dns также не существует? (reply to 320719)

Mark: Да, похоже, что Tonviewer по дефолту ставит в имя один из доменов, как на скриншоте. Но на кошельке Павла (и многих других адресах) имя — это не домен. Если бы это был домен, там было бы в конце .ton/.t.me/.vip/.gram/... (reply to 320715)

Teers k 🐾: Если я сделаю форк tonkeeper я могу создать свой dns как .name но только в рамках моего форка? (reply to 320721)

❤️🐾 🏰 Tower: А да, перепутал (reply to 320721)

Mark: Чтобы сделать свою dns зону, надо задеплоить смарт-контракты для них, пример: https://github.com/TelegramMessenger/telemint  Но корневой резолвер блокчейна не будет ничего знать о вашей зоне, поэтому резолвинг в вашей зоне работать в большинстве сервисов не будет. Чтобы сделать резолвинг, надо поддержать резолвинг доменов в вашей персональной зоне в приложении кошелька (тогда можно сделать форк, да). (reply to 320722)

Teers k 🐾: Оно также не знает о .ton DNS? (reply to 320724)

Mark: О .ton знает (reply to 320725)

Teers k 🐾: То есть могу ли я создат свою зону да или нет? (reply to 320726)

Mark: Создать можете, вам никто не мешает 😁  Вопрос, как вы хотите ее использовать. Если это какой-то мини проект для друзей, можете впилить поддержку этой доменной зоны в приложение кошелька, но тогда ваши домены будут работать только в нем. Если хотите сделать dns зону в масштабах всего блокчейна, то это довольно сложная задача (reply to 320727)

Teers k 🐾: Можно ли сделать так чтобы оно знало о моей зоне (reply to 320724)

Teers k 🐾: То есть надо заплатить tonkeeper, tonhub, cryptobot, wallet и т.д другим сервисам чтобы они добавили мою зону? (reply to 320728)

Mark: Можно, но я не уверен, как именно. Насколько я понимаю, потребуется создать configuration proposal и чтобы валики за него проголосовали (reply to 320729)

Mark: Необязательно платить. Вы создайте сначала проект. Если будет видна массовость использования ваших доменов и значимость их поддержки для пользователей кошельков, я думаю, их и так добавят. (reply to 320730)

Teers k 🐾: Но для этого эти доменные зоны должны работать в рамках моего проекта и если этот проект будет очень популярным и связан с транзакциями (reply to 320732)

Teers k 🐾: Что довольно сложная задача

Mark: Можно, например, начать с того, чтобы сделать обычный поддомен со своим резолвером. Например, купите name.ton, и сможете выдавать поддомены *.name.ton. Они будут работать везде (reply to 320733)

Teers k 🐾: Чем короче домен, тем они дороже, так что возможно вряд-ли кто-то будет заинтересован на покупку например subdomain.aiii.ton (мин 4 символов) (reply to 320735)

Teers k 🐾: Но в идее есть потенциал если правильно реализовать

Mark: Можете вдохновиться .vip доменами, к примеру. Они поддерживаются во всех TON кошельках (в формате subdomain.vipx.ton), но к тому же ещё имеют сайт-визитку в Web2 (https://alice.ton.vip). Помимо этого, в MyTonWallet поддерживается резолвинг и без суффикса .ton (в формате alice.vip).  https://t.me/tonnames_rus (reply to 320737)

Teers k 🐾: Да идея хорошая, но не популярная, возможно рынку не интересна это тема или возможно у них есть недостатки которых нужно исправить и перестроить (reply to 320738)

Grigorii: Всем привет, а где посмотреть все коды jetton-wallet и jetton-minter? V1,V2,V3

Teers k 🐾: В гитхабе (reply to 320741)

Teers k 🐾: Но если вы не знаете где посмотреть, с высокой вероятностью вы не поймёте даже строку кода (reply to 320741)

Grigorii: 🧠🧠🧠  а в какой репе?) (reply to 320742)

Teers k 🐾: ton-blockchain аккаунт, там всё интересное (reply to 320744)

Grigorii: https://github.com/ton-blockchain/token-contract/tree/main/ft  это насколько я понимаю старая какая то версия

Teers k 🐾: https://github.com/ton-blockchain/

Teers k 🐾: Там есть все что нужное

&rey: Всё? Далеко не всё. Думаю, меньше 10% жетонов тупо деплоят код token-contract.  Больше придётся на minter-contract — это жетоны, которые без навыков программирования и без IDE можно сделать, просто на сайте. Но и то всё равно исчезающе мало. (reply to 320749)

&rey: Потому что мы помним, к примеру, что пулы ликвидности выпускают свои жетоны. Они удовлетворяют стандарту. Они НЕ копируют token-contract.

Teers k 🐾: minter.ton.org это да (reply to 320750)

Combot: Combot выдал(а) предупреждение PERFORMANCE (1/3) Reason: 1 reports (reply to 320755)

— 2025-09-07 —

Ilya: Здравствуйте, коллеги, как решить данную проблему: Я отправляю транзакции с одного кошелька через Olifanton SDK. При формировании транзакции я читаю seqno с lite-сервера и использую его в TransferOptions. После send первая транзакция уходит в сеть, но ещё не подтверждена/не попала в блок, поэтому seqno на lite-серверах остаётся тем же. Когда система пытается отправить следующую транзакцию (логическая следующая операция), она снова получает тот же seqno и получает ошибку duplicate message от Toncenter.  Проблема проявляется даже при одном потоке — то есть не гонка между воркерами, а поведение, связанное с тем, что транзакция ещё «в мемпуле» и seqno не увеличен.  Ошибка из логов Olifanton\Ton\Exceptions\TransportException: Sending error: LITE_SERVER_UNKNOWN: cannot send external message : duplicate message Caused by Olifanton\Ton\Transports\Toncenter\Exceptions\ClientException: LITE_SERVER_UNKNOWN: cannot send external message : duplicate message Кусок кода, где формируется сообщение: $seqno = $wallet->seqno($transport);  $transferMessage = $wallet     ->createTransferMessage(         [new Transfer($address, $tonAmount, $payload, SendMode::PAY_GAS_SEPARATELY)],         new TransferOptions($seqno)     );

User: Можно вручную прибавлять к seqno + 1, главное понимать, к каким последствиям это может привести если накосячить где-то (reply to 320762)

ytiruces: Тут вот тумбочки продают тоже с адресов UQ, думаю не в этом причина (reply to 320701)

Ilya: все равно то будет два seqno + 1 (reply to 320763)

User: Они просто выводят тестнет адреса без определенного флажка, из-за чего они и отображаются UQ (reply to 320764)

User: Держите у себя где-то seqno и инкрементируйте его вручную. А так, я-бы вам посоветовал тогда присмотреться к highload кошельку  https://docs.ton.org/v3/documentation/smart-contracts/contracts-specs/highload-wallet (reply to 320765)

ytiruces: Понимаю, но это не объясняет это (reply to 320766)

Denis: Надо или уговорить валидоров проголосовать или ходить ручками договариваться с каждым сервисом. Причём пока я отвечаю за tonapi.io никаких альтернативных TLD в обход решения валидаторов не будет в кипере и тонвьювере (reply to 320730)

Stugnov P.: Поимерно та же фигня, полторы две недели назад началось (reply to 320762)

Василий: Это нормально. Либо ждите блок, либо  используйте highload кошелек. Он решает именно эту проблему (reply to 320762)

Denis: Контракт продажи получил нфт только после попытки покупки (reply to 320675)

ytiruces: Странно почему тут вообще появляется попытка покупки, если я его пытаюсь только выставить на продажу по все тому же гайду. Пойду копать (reply to 320773)

&rey: В массив складывайте сначала по 4 трансфера. (reply to 320762)

Unction: Hello  I am unction I am looking for a technical partner for a yield app I want to build, with a lots of ideas that will impact the Defi space

Unction: Not only a yield app but an interactive one, that will add a whole lots of difference in the Defi space

User: https://t.me/tondev_eng (reply to 320779)

Stas: Как конвертировать такой адрес в такой например UQDTraqTWef-z1Qol4iijnb1DWzBNaTfS3aUBp09koEMZ7-P  https://toncenter.com/api/v3/transactions?address=UQDTraqTWef-z1Qol4iijnb1DWzBNaTfS3aUBp09koEMZ7-P&limit=100&offset=0

Ваш Фрилансер - Защита сайтов / Автоматизация в браузере: Base64 (reply to 320800)

sd: https://docs.ton.org/v3/guidelines/dapps/cookbook#how-to-convert-between-user-friendly-and-raw-addresses-assemble-and-extract-them-from-strings (reply to 320800)

Stas: respect (reply to 320803)

&rey: Вы проверяли этот ответ? Вы имеете в виду просто b64encode? (reply to 320802)

Ваш Фрилансер - Защита сайтов / Автоматизация в браузере: Что я не так сказал? Я декодировал подобные адреса кошельков через библиотеку ton (вроде так).  А сырой адрес это данные в base64 (reply to 320805)

&rey: Я бы сформулировал вместе с этим существенным куском.   Ну ведь сделать перевод в тоне, например, не "сделать ed25519 подпись ордера", есть ещё важные вещи. (reply to 320806)

&rey: ну и, кстати, не совсем так флаги-то надо добавить)) (reply to 320806)

Ваш Фрилансер - Защита сайтов / Автоматизация в браузере: Тогда простите за необдуманный ответ. Не опытный так скажем, у меня работает как то.

Ваш Фрилансер - Защита сайтов / Автоматизация в браузере: Но простой вариант просто вставить его в тонвивер и там будет сразу адрес нужный  https://tonviewer.com/0:852443F8599FE6A5DA34FE43049AC4E0BEB3071BB2BFB56635EA9421287C283A

Hidev: Создаю токен на tonminter, но он сразу попадает в спан в telegram wallet и других, что я делаю не так ?

Tim: Название уже используется (reply to 320814)

Tim: Надо залить много ликвы и пойти писать всем апи провайдером что вы не скам

Stas: Как получить такую ссылку на транзакцию https://tonviewer.com/transaction/18dba39ce1b4e4abbce73d97c719d4bba7063e3e4b2d08675add0c6c74fdd985 из чего этот хеш складывается?

&rey: Подождать, когда транзакция будет в блокчейне. Дальше – если вы её уже загрузили, то хеш в ответе апишек неминуемо был и к вам тоже загружен. (reply to 320818)

Stas: Как его получить из https://toncenter.com/api/v3/transactions (reply to 320820)

Combot: Combot выдал(а) предупреждение James (1/3) Reason: 1 reports (reply to 320822)

&rey: .transactions[i].hash  А именно: import base64  txs = requests.get('https://toncenter.com/api/v3/...').json()['transactions'] hash_b64 = txs[0]['hash'] hash_hex = base64.b64decode(hash_b64).hex() link = f'https://tonviewer.../{hash_hex}' (reply to 320821)

Stas: Подскажите как отправить коментарий с транзакцией на другой кош, все связанные с этими ключевыми словами ответы в чате не работают:   tonConnectUI.sendTransaction({               validUntil: Date.now() + 5 * 60 * 1000,               messages: [                 {                   address: "UQDfFfEGASoutjXnOmkXStp3SExrFvpLJv9HoBtJfsrt1CUj",                   amount: "100000000",                 },               ],             })

&rey: amount: "...", payload: beginCell().storeUint(0, 32).storeTailString("...").endCell().toBoc().toString("base64"), (reply to 320829)

Stas: storeTailString  is not a function (reply to 320830)

&rey: А storeStringTail? (reply to 320831)

Stas: RESPECT (reply to 320832)

— 2025-09-08 —

Киви: всем привет, как можно сделать 2 свапа (dedust aggregator) в одной транзакции? Знаю что для этого нужен multihop swap, но не могу нигде найти пример

aleksej: всем привет! Кто-нибудь уже собрал/собирал  аналог rebase токена на тоне?

&rey: Вроде тривиально? (reply to 320841)

Alexey: Я прочитал, что такое rebase токены, и что-то сходу не придумал, как в тоне такое сделать без транзакции к каждому жетон волету отдельной, есть способ какой-то? (reply to 320843)

Alexey: Ну логично на самом деле, что без транзакции отдельной не получится, стейту же надо поменяться..

fruitful-l: А дексы не взорвутся от изменений баланса постоянных, или это бонус за безумный трюк? (reply to 320843)

&rey: А на дексах такое листить нельзя, это да. (reply to 320849)

&rey: Да... А нет, я придумал другой метод! Секрет компании. (reply to 320848)

aleksej: давай, какой? (reply to 320852)

&rey: могу только сказать, что основывается на одном из двух тоновских "эффектов на расстоянии" надо подумать, как (с какими ограничениями) можно будет ребейс-множитель менять (reply to 320853)

aleksej: иногда обертки используют для работы с дексами, обернул токен, положил в пул, вышел - получил дельту при развертывании токена (reply to 320850)

fruitful-l: А что вообще за эффекты на расстоянии? Вообще ничего не нашел с такой формулировкой (reply to 320854)

Hidev: Кто-то создавал флеш токен на тоне ? Как успех, можете поделится

H: Тебя стейбл интересует ? (reply to 320862)

Hidev: Да (reply to 320865)

Combot: Combot выдал(а) предупреждение Hidev (1/3) Reason: 1 reports (reply to 320862)

3ton: Всем привет !Хотим расплачиваться с поставщиками рекламы токеном но с холдом  есть какой то готовый метод  коотрый мог ббы гарантировать выполнения оплаты всем участникам?

Eugene: Чтобы все видели, что средства точно будут получены, но с задержкой-вестингом? Ну теоретически вроде бы lockup wallet для подобных целей, но сам им никогда не пользовался https://docs.ton.org/v3/documentation/smart-contracts/contracts-specs/wallet-contracts#lockup-wallet (reply to 320899)

3ton: спасибо (reply to 320901)

Daniel: Добрый день! Можете написать в лс (reply to 320905)

Toffee: Коллеги, доброго вечер  У меня такое есть  boc= te6cckEBAwEA4AAC44gAXhnXRQTNVh8unG8cAiohFZLZX0xocf8LyMKL9boHJQwGE8kFdayfM9vKa+J9dV1oivg5trVsZrHcZMaQ1S7ExV+6oTi5ra2ABnAXY3ReNtV+8n1JrNWs6aRkKSvwDfVwcU1NGLtF+CpQAAAgGAAYHAIBAGZCAEWGR4ucleETmGZ4XpGVV5OehGybFh2ZToms7VQWHc84nMS0AAAAAAAAAAAAAAAAAAAAZkIARYZHi5yV4ROYZnhekZVXk56EbJsWHZlOiaztVBYdzzifJw4AAAAAAAAAAAAAAAAAAOIDRkw=  Я достал из него hash=11247701067987512f58a4852d053d43aa6fadf347e78ad7a73259d93dcd5908  И при проверки транзакций, я не могу найти (https://testnet.tonscan.org/tx/11247701067987512f58a4852d053d43aa6fadf347e78ad7a73259d93dcd5908)  В большинстве транзакций, я нахожу? Но иногда, я получаю такое

Toffee: Мой код при получения транзакций,    async tracesByTxHash(hash: string) {     const res = await axios.get(       `${this.url}/api/v3/traces?tx_hash=${hash}&include_actions=true`,       {         headers: {           "X-API-Key": this.apiKey,         },       }     );     return res.data;   }    async tracesByMsgHash(hash: string) {     const res = await axios.get(       `${this.url}/api/v3/traces?msg_hash=${hash}&include_actions=true`,       {         headers: {           "X-API-Key": this.apiKey,         },       }     );     return res.data;   }    async trancation(hash: string) {     const res = await axios.get(       `${this.url}/api/v3/transactions?hash=${hash}`,       {         headers: {           "X-API-Key": this.apiKey,         },       }     );     return res.data;   }    async getTransactions(hash: string) {     const res = await this.trancation(hash);     if (res.transactions.length > 0) {       return res.transactions;     }     const resTraceTx = await this.tracesByTxHash(hash);     if (resTraceTx.traces.length > 0) {       const transactions = [];       for (const trace of resTraceTx.traces) {         transactions.push(...Object.values(trace.transactions));       }       return transactions;     }     const resTraceMsg = await this.tracesByMsgHash(hash);     if (resTraceMsg.traces.length > 0) {       const transactions = [];       for (const trace of resTraceMsg.traces) {         transactions.push(...Object.values(trace.transactions));       }       return transactions;     }     const resByMsg = await this.transactionsByMessage(hash);     if (resByMsg.transactions.length > 0) {       return resByMsg.transactions;     }   }  Но даже при всех вариантов, все равно не находит

&rey: А вы хеш нормализовали? (reply to 320911)

Toffee: Не понял?  Вот мой код с работой boc в хэш  const cell = Cell.fromBoc(Buffer.from(boc, "base64")); hash = cell[0].hash().toString("hex"); (reply to 320913)

наз: всем ку, я же правильно понимаю что в такой ситуации:  на контракт пришло 0.5 тон - он их пересылает на другой с сенд модом 64  у контракта, на который пришло 0.5 тон баланс не изменится, т.к. все комисии вычтутся из полученной суммы, а остаток пойдет дальше?

⛰️ Roman ⛰️: Да (reply to 320916)

fruitful-l: Сторедж все равно ведь в таком случае контракт сам за себя платит?

Toffee: Как нормализировать хэш? Или у меня уже нормализованый хэш, кто ответит (reply to 320914)

&rey: См. https://docs.tonconsole.com/academy/transaction-tracking#how-external-in-normalization-works (и вообще всю статью). (reply to 320924)

🐼 Sild: может научим уже ноду отдавать нормализованное сообщение😕 ну или хеш, смотря что там за метод

Stas: Привет подскажите как получить tx hash на js

fruitful-l: А веселье как получить тогда (reply to 320926)

&rey: У подобных тонцентру апишек метод sendBoc или sendBocReturnHash. Первый, насколько я помню, чаще используется. (reply to 320926)

🐼 Sild: тонцентры шут с ними https://github.com/ton-blockchain/ton/blob/master/tl/generate/scheme/lite_api.tl#L87 https://github.com/ton-blockchain/ton/blob/master/tl/generate/scheme/tonlib_api.tl#L274 вот за этими креведками надо смотреть (reply to 320929)

🐼 Sild: raw.extMessageInfo hash:bytes hash_norm:bytes = raw.ExtMessageInfo;   а ну блин. tonlibjson уже умеет

Toffee: Нет, все равно транзакция не найдена, в чем то другом проблема, я пытался нормализовать (reply to 320912)

&rey: А вы же в курсе, что некоторые экстерналы никогда в блокчейне не появляются? Просто пропадают из мемпула. (reply to 320932)

Toffee: Нет, и как мне транзакцию тогда проверить, что успешное, вот оплатил через кошелек, с помощью tonConnect и что даже транзакцию не могу проверить? (reply to 320934)

&rey: Во-первых, основная проверка всегда должна относиться к вашему кошельку. Поступило что-то? Обработайте; без разницы, был ли там фронтенд, повтор платежа от пользователя, смарт-контракт, или что-то другое. (reply to 320935)

&rey: Ваш фронтенд может только подсказывать бэку "посмотри на эту транзакцию; похоже, из неё будет тебе зачисление".

Toffee: Я беру boc и из нее hash и потом проверяю зачисленно или нет, если зачисленно то дальше выполняю скрипт, какой геморой с этим тон

&rey: А скрипт-кидди подкидывает вам хеш от своей транзакции на другой сервис. Или от старой. Вот пока построите правильную систему, неуязвимую к этому, что-то похожее и получится. (reply to 320938)

&rey: Это, конечно, не относится к фронтенд-части. Там... ну, если экстернал появился, то цепочка транзакций началась, если не появился — не началась.

Toffee: кидди, я не понимаю если честно о чем ты? То есть тонконнект может вернуть не рабочий boc? Что за странности такие

Toffee: Я думаю boc возращается чтобы можно было у себя транзакций проверить, а если не рабочая транзакций то смысл возращать?

Toffee: Я сейчас говорю про тестнет, на проде может все нормально, но даже так. Если при оплате клиент, мне не возвращает рабочий boc, то это баг системы. Прикинь у тебя 1000 клиентов, которые делает 1000 оплаты и 10 процентов ты не сможешь проверить, а значит клиент не получит товар и будет недовольство. Из за этого бизнес процессы ломается. Я не думаю что у тона есть баг, возможно это я что то напортачил

Ivan: скрипт-кидди  дети, которые будут пытаться взломать ваш сервис (reply to 320941)

Toffee: Я уловил суть, спасибо

Ivan: Я не с начала тут был, вам уже советовали готовую штуку для приема платежей?  https://github.com/gobicycle/bicycle (reply to 320943)

Toffee: Нет, спасибо не интересно (reply to 320946)

Kiba: Он возвращается только для того, чтобы сделать красивый UX для пользователя: отобразить загрузку  Завязывать на нем платежный шлюз — нельзя (reply to 320941)

Toffee: Спасибо, я не знал такие тонкости, придется дорабатывать платежный шлюз и сделать дополнительные проверки

Max: может готовое решение лучше возьмёте?

K🆓³³: https://t.me/anatolii_makosov/91

🐼 Sild: Блокчейн TON в список не входит.  😏 (reply to 320951)

K🆓³³: разработчикам мультичейн-продуктов стоит проверить свой код  🙄 (reply to 320952)

Дмитрий: Всем привет!   В поисках fullstack-разработчика  Если вы им являетесь, напишите мне в личные сообщения

— 2025-09-09 —

ytiruces: Доброе утро. marketplce + sale у меня вроде как заработал, nft на продажу выставляется, я их могу купить, они приходят на адрес покупателя. Но эта продажа не отображается на getgems.   Я использую sale contract не той версии, которую отображает getgems или getgems отображает продажи, созданные только на самом getgems? (reply to 320773)

Ваш Фрилансер - Защита сайтов / Автоматизация в браузере: а почему она должна там быть? смотрите по контракту продажи (NFT) там есть информация куда ушло и кто купил (reply to 320970)

ytiruces: Я выставляю на продажу через код, а не через ui getgems. И мне нужно, чтобы на Getgems пользователи могли купить этот nft (reply to 320971)

ytiruces: Вот например эта nft сейчас на контракте продажи, но на getgems нет кнопки "Купить" и цены нет (reply to 320971)

Ivan: Похоже старую версию контракта взяли (reply to 320973)

ytiruces: V2. Они только v3 отображают? (reply to 320977)

Ivan: У них на гитхабе написано что поддерживают а что нет (reply to 320979)

ytiruces: Да, v2 deprecated (reply to 320998)

Ⓜ️ MEMES Friydone: اینم آدرس کیف پول تون کیپرم هست UQClxFPyiinD_e7867vaIoCNL2FNBAHLyruffYy0Dl2_YVZx (reply to 25048)

ytiruces: А где-то есть человеческое описание хранилища контракта marketplace v2 от getgems? Раньше в хранилище был только адрес владельца, теперь же 3 int переменных.   Если с seqno еще понятно, то subwallet int32 что это? И public_key это адрес кошелька? Почему он тогда int256?

Dmitry: Строка 2: > Extends wallet v3r2 & adds ability to deploy sales  Это "прокачанный" валлет. (reply to 321013)

Ivan: Нафига он вам нужен? можно использовать любой кошелек для деплоя контрактов (reply to 321013)

ytiruces: Мне надо задеплоить контракт маркетплейса, в нем хранилище с этими тремя переменными. Какое сообщения мне отправить для деплоя?

ytiruces: Если я использую первую версию ко5тракта маркет плейса, то при деплое сэйл контракта v3 или v4 контракт отправляет интер6ал сообщение, которое приводит к 9 cell underflow

Ivan: Не может быть такого, как-то не так сообщение формируете значит  гетгемс не выставляет на продажу нфт через свой контракт маркетплейса, значит и вам не надо  а еще у гг есть апи которое формирует транзакцию для выставления нфт на продажу  https://api.getgems.io/public-api/docs (reply to 321017)

ytiruces: Мне api не подходит, мне нужен свой код nft

ytiruces: А это тогда тут зачем? (reply to 321018)

Ivan: Этому апи все равно какой код у nft все нфт работают по одному стандарту (reply to 321019)

ytiruces: И в этом гайде зачем тогда описывается создание маркетплейса?

Ivan: устаревший наверно (reply to 321023)

ytiruces: А для тестнета есть? (reply to 321018)

Ivan: https://api.testnet.getgems.io/public-api/docs (reply to 321025)

ytiruces: судя по доке, api key можно создать только через ui в момент создания коллекции и он будет работать только с этой коллекцией? А если я Создаю коллекцию и минчу нфт не через getgems? (reply to 321021)

Ivan: судя по другой доке — нет  https://github.com/getgems-io/nft-contracts/blob/main/docs/read-api-ru.md#%D0%BA%D0%B0%D0%BA-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C-api-%D0%BA%D0%BB%D1%8E%D1%87 (reply to 321028)

ytiruces: Странно, отправил на продажу, респонз 200, а никаких транзакций не случилось

Ivan: вы должны эту транзакцию теперь отправить со своего кошелька  гетгемс только формирует для вас все данные для транзакции (reply to 321030)

Viacheslav: echo $WALLET_VERSON v4 % npx blueprint run         npm warn Unknown user config "auto-install-peers". This will stop working in the next major version of npm. ? Choose file to use  ? Choose file to use setPause ? Which network do you want to use? (Use arrow keys) ? Which network do you want to use? mainnet ? Which wallet are you using?  ? Which wallet are you using? Mnemonic Error: Mnemonic deployer was chosen, but env variables WALLET_MNEMONIC and WALLET_VERSION are not set

Viacheslav: почему так может быть?

ytiruces: А об этом где можно подробнее почитать? Не понятно что как отправить (reply to 321038)

Alexey: привет, как получить, обменять жетоны в тестнете? хотел получить USDT обменом на Ton, но: - в wallet`е не получается, кнопка неактивная в самом обемене, - DEX`ы не нашел для тестовой сети, STON и DeDust походу там не работают есть еще способы? или я не туда тыкаю?

Ivan: Надо отправить трнзакцию с кошелька, на указаный адрес с указаным телом и тонами (reply to 321042)

𝕬𝖑𝖊𝖐𝖘𝖆𝖓𝖉𝖗: Всем привет, меня в общем я так понимаю обманули 😰

𝕬𝖑𝖊𝖐𝖘𝖆𝖓𝖉𝖗: Это фейк

𝕬𝖑𝖊𝖐𝖘𝖆𝖓𝖉𝖗: Его не вывести 😰

Vladimir: Естественно. (reply to 321052)

𝕬𝖑𝖊𝖐𝖘𝖆𝖓𝖉𝖗: Капец, прошляпал нфт за 14,5 фальшивых

𝕬𝖑𝖊𝖐𝖘𝖆𝖓𝖉𝖗: Последнии всадил

I: Салют! Нужна консультация.  В моем golang-приложении требуется слинковать ton-кошелек (телеграмовский и ton keeper), посредством deeplink или qr для дальнейших транзакций. Я так понимаю есть общий протокол ton connect для этого? Дока там доврльно туманная. Может у кого то есть пример или манул?

Ivan: Это консольное приложение? (reply to 321067)

I: Нет, будет фронт

I: Упомянул golang, потому как вроде есть sdk гошный для ton connect

Ivan: есть либа для фронта https://www.npmjs.com/package/@tonconnect/ui удобней всего через нее работать  на бекенде можно валидировать ton_proof если это необходимо

I: Спасибо, изучу!

Anton Reva: Даров. Подскажите кто-то пробовал создавать флеш крипту (тон или юсдт) на блокчейне тона? Можете в личку написать мне, есть пару вопросов)

&rey: Что такое флеш что-то, и почему не обсудить это сразу здесь? (reply to 321075)

Alex: Разводить южных корейцев?😁 (reply to 321075)

Дмитрий: Всем привет. 1 чел хочет купить у меня 1 никнейм, говорит , что хочет это сделать через «смарт - контракт» на фрагементе. Это может быть каким то разводом?

Stugnov P.: Да стопроцентов (reply to 321079)

Дмитрий: А как именно? (reply to 321080)

Stugnov P.: Не хотели бы развести, кинули бы офер через фрагмент, а так очевидно что удочки закидывают и мозги пудрят (reply to 321081)

Spartan.by: Разводов много, мне постоянно пишут. Как оказалось вариантов много. Не хотят через фрагмент, 100% жулики

Андрей: Дать вам ссылку на фишинговый сайт очень похожий на фрагмент с помощью которого у вас заберут все ваши монеты (reply to 321081)

.: всем привет, какие есть варианты получать быстро информацию по контракту продажи (getgems) аукцион это или фикс цена? тонцентр v3 и v2 не так быстр, спасибо заранее

Andrey: mempool (reply to 321085)

Viacheslav: Привет. Как получить body cell in Base64 в blueprint,  вместо отправки транзакции в скрипте? вывести в console.log

Tim: Переписать скрипт чтобы он не дергал internal/external методы сендера, а возвращал cell (reply to 321088)

Viacheslav: а как потом в base64 cell завернуть? (reply to 321091)

Tim: ToBoc().toString(base64)

— 2025-09-10 —

device: Всем привет, данные из stack приходят в hex, не все корректно декодируются. Я вызываю метод смарт-контракта через TonAPI: GET https://testnet.tonapi.io/v2/blockchain/accounts/{address}/methods/{methodName} В ответе получаю stack, где часть данных приходит в формате cell с hex-строкой. Некоторые я успешно конвертирую в UTF-8 строки, но другие значения в hex не превращаются в читаемый текст есть ли готовые утилиты или best practice для правильного парсинга таких cell значений (например, адресов, dictionary, структур)?

🐼 Sild: некоторое на https://ton-cell-abi-viewer.vercel.app/ хорошо ложится (reply to 321098)

device: {             "type": "cell",             "cell": "b5ee9c72010101010016000028706c61636520612062657420616e642074657374"         }, как мне правильно декодировать где можно прочитать? (reply to 321107)

🐼 Sild: тут наверняка найдется пара человек которые умеют читать боки глазами, но вообще пока ты в протоколе не найдешь что именно и в какой позиции возвращается в стеке - хрен ты что декодируеоь

🐼 Sild: что з а контракт?

🐼 Sild: этот сервис умеет всякие баовые объекты красиво отрсоввывать и сам угадывать что там, но если не угадал - значит не угадал (reply to 321107)

🐼 Sild: data: "place a bet and test"   м, разгадалось

🐼 Sild: видимо решение - читать эти данные как SnakeFormat https://docs.ton.org/v3/guidelines/dapps/asset-processing/nft-processing/metadata-parsing#snake-data-encoding

Scilef🦉: Добрый день, уважаемые разработчики.   Подскажите, какие есть ограничения на отправку средств в рамках одной операции смартконтракта?  Сценарий: смартконтракт перебирает список из 500 (1000/5000/10000 etc) адресов и на каждый отправляет какое-то количество монет. Такая операция отработает, или упадёт по какой-то причине (не связанной с недостатком средств)?

Dmitry: За один раз (одну транзакцию) смарт не может отправить более 255 исходящих сообщений/переводов. Раньше было "лучше не больше 200". Решается отправкой 201-го сообщения самому себе "продолжи с точки Х" (reply to 321118)

Dmitry: Не забудьте предусмотреть что пока 201е будет ходить от вас к вам же по кругу - может успеть прилететь "внешнее" сообщение от юзера, и смарту не должно снести крышу от этого (reply to 321119)

Stugnov P.: А почему так? (reply to 321119)

Dmitry: что-то в мозгах ноды было не так, что-то куда-то не влезало... сильно никто (кроме программмистов ноды) этим не парился, так как резать по 200 или по 250 - один фиг. так что не знаю пофиксили ли. (reply to 321121)

Scilef🦉: То есть, всё ещё лучше не больше 200?)))0) (reply to 321122)

Scilef🦉: Печаль  А sandbox такой сценарий корректно обработает?

Dmitry: хз, протестите ближе к релизу. это ж всё равно константа будет в коде. (reply to 321123)

Scilef🦉: Насколько я наслышан, в тестнете поведение может отличаться от мейннета. Это так?  В плане, если я в тестнете прогоню тесты скриптами, насколько это будет релевантно? (reply to 321125)

&rey: 255 – максимальная глубина ячейки actions. (reply to 321121)

&rey: Больше 200 сложно уже по газу всё сериализовать. Помните, что SENDRAWMSG внутри же тоже ячейку собирает.

&rey: Стоимость и лимиты – да, а вот вклинивающиеся сообщения эмулировать сложнее. (reply to 321124)

Grigorii: Всем привет, а насколько частый кейс, что у одного и того же жетона есть разные jetton_wallet_code? Я понимаю что у конкретного jetton_wallet нельзя поменять код. Но бывают ли кейсы когда минтят жетоны на одной версии и раздают юзерам, а потом у jetton_minter меняют wallet_code и минтят еще?

&rey: Я как-то ноль таких жетонов встречал. Хотя тут tonapi сможет подробнее ответить, надеюсь. (reply to 321141)

Vladislav: А Пон, сообщение снесло когда ник вставил, короче trinketer22, Василий мне с кастомным кодом минтера много помогал

Daniel: Подскажите, пожалуйста, есть ли prediction market оракулы в TON?

Andrey: Все что нестандартное - не часто.   Но мы в дтоне такое индексируем.   Тут главное чтобы мастер  на все воллеты отдавал тот же адрес, на котором находится этот воллет. Что в теории возможно.   А на практике я такое видел в NFT, где коллекция состояла из двух видов смартов айтемов и отдавала валидное на 2 разных кодхеша нфт (reply to 321141)

Sergey: Ищем разработчика, пишущего на Func, чтобы дописать Papaya Protocol под TON (стриминговые платежи/подписки). Текущая база уже есть, нужны доработки и адаптация. Кому интересно пишите в личку.

Grigorii: Я хотел еще спросить насчет кейсов с 64 сендмодом  Я хочу отсылать 2 сообщения с 64 модом. Но это невозможно, Так как первое сообщение отправляет все входящие тоны - газ. Возможно какими то кастылями симитировать отправку двух сообщения по логике 64 сендмода? Есть ли такие кейсы в каких то проектах?

Andrey: 64 мод - отправка оставшихся средств, а как идейно их разделить на 2 сообщения? пополам или условно 10% и 90%? Не особо понятна суть (reply to 321159)

Grigorii: Да, пополам  Типо что то такого в каждом сообщении: (Входящие тоны - газ) / 2   я понимаю что можно посчитать газ руками. А можно ли как то более автоматизированно, поддерживает ли твм такое? (reply to 321160)

Andrey: Из вариантов примерно пополам - используешь rawReserve(0, 4), у первого мод 0, отправка msgValue / 2, у второго 128 мод

Denis: https://tonviewer.com/block/(-1,8000000000000000,3295679) зацените как раньше блокчейн сплитался. до 138 шардов. деды умели.

0xCreator: Привет! Напомните актуальные условия чтобы тонкипер подтягивал цену токена в кошельке?

❤️🐾 🏰 Tower: Пройти верификацию токена (reply to 321172)

0xCreator: Я вроде спросил о подтягивании стоимости, а не о верификации 🙄 (reply to 321173)

❤️🐾 🏰 Tower: Так если токен верифицирован то и цену показывает (reply to 321174)

Калыван: Привет, может вы видели этот проект по генерации кошельков с красивым окончанием. Создать то я создал, но вот как задеплоить по salt так и не смог... Подскажите пожалуйста. За помочь дам на кофе

Tim: https://ton-collection-edit.vercel.app/deploy-vanity-contract (reply to 321179)

Tim: Код и дату знаешь где взять?

Калыван: Ну у меня есть хекс ключи, может я не то знаю, что надо (reply to 321181)

Tim: ну переведи в base64, попробуй. Самый простой способ - задеплоить контракт нормально  и посмотреть какой был стейтинит Если чуть лучше разбираешься - можно ещё перед деплоим их посмотреть

Калыван: Эти ключи или что? ( (reply to 321184)

Tim: я же не знаю что у тебя за КЛЮЧИ

Калыван: Не, чего-то не выходит, даже в датой и кодом... (reply to 321186)

Tim: Ну что тут сказать. Адрес превью хоть совпадает? Если да, то дело только в дате и коде

Калыван: Не, не совпадает (reply to 321191)

Tim: Значит кошелек с которого было подключение к сайту не совпадает с тем, для которого соль подбиралась (reply to 321192)

Калыван: Понял, буду думать (reply to 321194)

Tim: что тут думать, там же аргументом -w адрес твоего кошелька. Подбери соль на 1 символ и сравнивай

— 2025-09-11 —

Aziz: А кто ни-будь знает почему GetGems не используют nft_sale_getgems_v4 при продажах NFT? За фикс цену в ТОН  А используют v3 Разве v4 не лучше с практической точки зрения

Alexey: хз, скорее всего v4 используют, когда выставляют NFT на продажу за другие токены, за стандартный Ton используют v3 так как функционал проще мне так кажется (reply to 321217)

Toffee: Привет коллеги, надавно я тут обсуждал процесс платежа, я короче сделал свое апи и свое решения, надеюсь не забанят, но хочу поделится  своей апи. По мимо обычного оплаты транзакций, то можно еще делать минт нфт, которая коллекций создается внутри платформы  doc.qr-mint.net а также можно создать апи ключи, коллекций для интеграций в приложения и webhook в qr mint net  Я сделал сразу интерфейс под ввывод транзакций, в будущем добавлю crm для кошельков.  Хотя понимаю разработчиков, большинство делает свое решения

Toffee: Если сообщения оффтоп, то удалите сообщения а не баньте, кому интересно напишите мне в ЛС dao0dev

&rey: Исходники тоже хотелось бы видеть) (reply to 321231)

Toffee: Исходники бэкенда закрыты, т.к. это часть коммерческого решения. Если интересно под капотом — можем пообщаться приватно, расскажу детали реализации (reply to 321234)

adb: Гайз привет, была необходимость трекать покупки и продажи внутри коллекции, и как я понял это не так уж и просто. dton gql странно работает, единственное что сработало для меня - подписался на вебхук тон апи (на все нфтшки) и теперь мне стримингом приходят трансферы. это ок. но как трекать сейлы, ведь там по сути сейл это трансфер нфт от сейл контракта новому овнеру.   получается, логика такая, что если я вижу трансфер и отправитель это сейл контракт, и овнер новый != овнер старый, то трекать это как сейл и прайс брать с контракта. я правильно понимаю, или можно как нибудь проще?   и еще может кто подскажет, мне по адресу брать из апи код строку бейс64 и сравнивать с кодом сейл контракта чтоб это понять?

&rey: Ну, в таком случае я вашему решению доверять не могу, особенно учитывая открытый Bicycle) (reply to 321235)

Димитрий: Всем привет

Димитрий: Может подсказать кто-нибудь, это официальный бот Фрагмента DirectBidRequestedBot?

Оскар: нет, вас пытаются обмануть (reply to 321252)

Димитрий: Спасибо (reply to 321253)

X1ag: а есть примеры nft контракта с функцией burn?

⛰️ Roman ⛰️: Просто добавить опкод с функцией для отправки сообщения, всего баланса и удаления контракта? (reply to 321269)

⛰️ Roman ⛰️: Можно самому сделать

X1ag: Ок, просто боялся что с next_item_index могут быть проблемы при переборе всех айтемов у нфт коллекции

⛰️ Roman ⛰️: По идее должно показать тогда незадеплоенный контракт

X1ag: Спасибо

rends_east: next_item_index не обязан же быть индексом следующего элемента (reply to 321272)

X1ag: да, но не хочется логику этой переменной менять (reply to 321275)

fruitful-l: У коллекций типа подарков в телеграмме индексы это просто рандомные, ну может и не совсем рандомные, числа, никак между собой не связанные, поэтому не то чтобы за эту логику названия переменной кто-то сильно держится (reply to 321276)

X1ag: это я понимаю, но не хочу чтобы это было так) (reply to 321277)

X1ag: но я так понял никаких проблем не должно возникнуть. Просто нфт будет как незадеплоенный контракт показываться

fruitful-l: Сразу как будто становится понятна основная задумка.. (reply to 321280)

⛰️ Roman ⛰️: Это вроде сам тонкипер по умолчанию делает, нужно писать в поддержку (reply to 321280)

Denis: Прикиньте некоторые скамеры ко мне даже в личку приходят с вопросами (reply to 321281)

Es Ist Das: Привет! Подскажите, а если несколько контрактов работают в связке, можно ли им как-то ончейн подобрать адрес, чтобы их роутило на один шард?

Denis: Да. Теперь есть штатная фича блокчйейна с эникастом в адресе. Даже без брутфорса (reply to 321285)

Es Ist Das: Нашёл, спасибо большое (reply to 321286)

Max: Есть вариант найти честную работу (reply to 321283)

Vladimir: Предлагали свой USDT на несколько часов одобрить? (reply to 321284)

Denis: Жаловались что тонконнект не работает (reply to 321289)

Павел: Здравствуйте, как можно вывести эти TON ? Там даже кнопок нету, тупо показывает баланс

⛰️ Roman ⛰️: Может быть t.me/wallet ? (reply to 321296)

Павел: Нету( (reply to 321298)

⛰️ Roman ⛰️: Тогда попробуйте в интернете поискать либо дождитесь кого нибудь знающего (reply to 321299)

Павел: В интернете искал, 0 информации, похоже штука новая, вот жду кто поможет (reply to 321300)

Константин: Это где такое? (reply to 321296)

Павел: Ну я продал подарок по незнанию за тон ( в самом тг) и через 3 дня они на счету у меня, и закинул себе в тг канал (reply to 321302)

Константин: Я видел у себя в канале звезды, но их там так мало, что пока даже не вникал (reply to 321303)

Павел: Я думал они в тг кошелёк будут

Павел: 1000 надо (reply to 321306)

Константин: Может быть) пускай копятся (reply to 321308)

Not: Привет . Если выпускать андеграунд  музыкальный альбом в нфт коллекцию , кто может дать наводку как это лучше оформить и упаковать? Просто коллекцию нфт где в метаданные вшит мп3?

Oleg: Ну да, плюс обложка альбома как картинка коллекции (reply to 321312)
