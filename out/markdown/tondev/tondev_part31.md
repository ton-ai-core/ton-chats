GGGleb🔺: не понятно как проверить что пользователь уже создал стейк чтоб не хранить ету инфу в  мастер контракте

Namon: дочерние контракты = один контракт на юзера или один контракт на токен? (reply to 285016)

GGGleb🔺: 1 контракт на юзера

X1ag: ну вот на юзера и создавайте, в чем проблема то?

Namon: ну значит в этом контракте и сделать проверку в нём же должна содержаться инфа о том, сколько юзер внёс

GGGleb🔺: а тоесть проверку делать не в мастере а в дочернем  .

GGGleb🔺: это же очевидно ! спасибо !🙈

Oken: Хотя теоретически это возможно? (reply to 285020)

X1ag: атаку 51% нет, но если 2/3, то, думаю, может (reply to 285029)

Oken: Его арестуют деньги отберут. Будем оставаться на том что это невозможно (reply to 285030)

Oken: Тон построят снова с резервов

Oken: Ещё один вопрос, чтобы писать на FunC надо знать язык ассемблера (основы)?

Daniel: Не обязательно. Но если хотите писать asm функции, то можете выучить) (reply to 285035)

Oken: С чего начать? С курса в stepik о основ TON? Попробовал но ничего не понятно, там про какие-то сообщения которые я не нашел в tonviewer (reply to 285036)

Daniel: Я изучал лично по документации  Еще полезно почитать whitepaper от Николая Дурова (reply to 285037)

X1ag: ну это уже тяжело) думаю со stepik хорошо будет начать, чат читать, потом документацию начать читать + whitepapper (reply to 285038)

Daniel: Не знаю, честно. Тяжело сказать. Говорю с точки зрения разработчика, который заинтересовался TON. Если с нуля вообще начинать, то 🤷‍♂️ (reply to 285039)

⁣⁣ᅠ: Всем привет подскажите пожалуйста как можно ts от модалки кнопки tanconnectui заставить отображаться в дочернем элементе что и кнопка а не рендерится в body

Namon: можно сделать свои кнопки (reply to 285045)

⁣⁣ᅠ: Как вариант, а еще способы есть ? (reply to 285050)

Namon: ну можно заняться мазохизмом с js & css, но легче просто сделать свои кнопки плюс этот дизайн легко повторить, если нужен прям такой же (reply to 285051)

⁣⁣ᅠ: Понял принял спасибо ща будет заниматься копипастом >

⁣⁣ᅠ: Ахахахахаха оно и модалку рендерит ниже уровнем Dom (reply to 285054)

Namon: ну модалка на то и модалка, что она отдельно в body, иначе тяжко (reply to 285056)

⁣⁣ᅠ: А есть какие нибудь способы чтобы ее засунуть уровнем выше ? Потому что бэк сайд меню это тоже своего рода модалка (reply to 285058)

⁣⁣ᅠ: И получается что бэк сайд как модалка норм, а вот модалка от tanconnectui не норм

User<7062442470>: Мне нужно как можно быстрее проверять пришли ли монеты на много адресов(1000+). Как это сделать эффективно?

User: toncenter и минимальный апи ключ (reply to 285061)

User<7062442470>: Можно ссылку на метод? (reply to 285065)

User<7062442470>: По одному? Серьезно? (reply to 285070)

User<7062442470>: В реальном

User<7062442470>: Спасибо

贾拉丁·鲁米: Привет! Я создал токен, как мне его зарегистрировать? Пожалуйста, помогите

Lmao: Зарегистрировать - в плане убрать надпись непроверенный токен? Если вы его создали и заминтили, он и так уже зарегистрирован в блокчейне и имеет свой адрес контракта (reply to 285088)

Дарий: Добрый вечер. Есть тз на реализацию swap, кто может помочь с контрактом и Т.д пишите в лс. Спасибо!

贾拉丁·鲁米: Когда это слово исчезнет, не знаете ли вы? И будет ли цена Unug автоматически расти с 0 или нужно будет дать какой-то толчок?

Oleg: Само по себе слово никогда не исчезнет и цена тоже с какого перепугу должна расти? (reply to 285091)

Чупа: Дружище, я смотрю ты шаришь. Тоже надо транзы проверять. Я вижу 2 варианта. 1. пользователь пополняет на сайте счет>на бэк идет запрос и там чекаю транзы от него. 2. автоматом на бэке периодически проверка идет и пополняю счета всем. Как лучше сделать? (reply to 285072)

Vladimir: У tonapi есть вебхуки. (reply to 285101)

— 2025-01-18 —

🏆: wv5 отличается от wv4 только кодом контракта?

🏆: может данными какими-то, там ведь отдельно код, отдельно данные (reply to 285106)

🧢 Denys: Такая проблема блокировал на время жетоны на сайте платформы PadTON , сайт не доступен теперь ,как мне допустим взаимодействовать со смарт контрактом , чтобы когда прийдет время вывести жетоны на свой кошелек , подскажите пожалуйста 🙏

⁣⁣ᅠ: В тма дев ответил (reply to 285108)

Anastasia: Круто (reply to 279052)

Timur: а чем это лучше?  если можно просто, как описали выше вебхук на аккаунт повесить и получать транзакции (reply to 285103)

&rey: отличается, да (reply to 285107)

Daniil: В документации STONfi есть метод (off/on-chain) get_pool_data - https://docs.ston.fi/docs/developer-section/api-reference-v2/pool#get_pool_data а как я могу с ним провзаимодействовать? через что?

🧢 Denys: Спасибо большое (reply to 285110)

sd: https://tonviewer.com/EQDhE2JxSAopiydYN5LKU1ZKs8MJwbfC3tCmuhNAlrmgvcby?section=method  your favorite api -> rungetmethod (reply to 285126)

Daniil: спасибо (reply to 285130)

Andrey: Кстати, если интересно, то мы экспоузим результаты этих геттеров через наш ABI в Graphql.  https://tinyurl.com/5a6etv7y  Можно и просто посмотреть по аккаунтам, можно по транзакциям, а можно всякие группировки и тд поделать (reply to 285126)

Kirill: Всем привет. Подскажите пожалуйста. Такой вопрос:  Сейчас пишем tma, в котором хотим реализовать переключение между кошельками, то есть по сути мы сохраняем все конекты. Делаем наверно сурпер просто, всё что есть в localStorage связанное с tonconnect упаковываем в словарь и сохраняем в массив таких словарей Потом когда нужен кошелек достаем этот словарь и "распаковываем" и делаем localStorage.setItem для каждого ключа. Все в целом переключается, но есть одно но потом когда мы хотим выполнить какую то транзакцию, то только для последнего подключенного появляется окошко для ее подписания, и только на айфон работает для всех кошельков. Хотел спросить в чем может быть пробоема, может есть идеи как исправить. Как это выглядит везде кроме айфона, мы отправляем транзакцию и у нас всплавает окошко "confirm transaction ..."и допустим на компе открывается tonkeeper и в браузере страница, но окошка для подписания транзы нет. Заранее спасибо за ответ!

RootTon: Значит где то вы не сохраняете что то или отдаете для тонкипера не верно, насколько помню там на 1 подключения только 4-5 записи в локалстор, и как эти записи отдаются тонкиперу вам нужно в логах посмотреть и покрутить поудалять ключи от подключения и посмотреть с после удаления какого все встанет раком (reply to 285138)

RootTon: И в таком случае соответственно вам нужно будет хранить в БД токо то что отдается тонкиперу а не все значения что будут у вас в лк сторе после коннекта

RootTon: И админы за шо бан дали мне !!!! Я тут самый пассивный участник

Kirill: Спасибо, просто странно что на айфоне все ок работает а на других устройствах нет

&rey: Не забудьте restoreConnection вызвать, чтобы к мосту подключиться. (reply to 285138)

Kirill: Оо, спасибо (reply to 285143)

Kirill: Звучит как хороший совет

RootTon: Да кст рил НА АЙФОНЕ И НОРМ РАБОТАЕТ прям шутка дня ) (reply to 285142)

Kirill: Согласен

daanicccch: а что с тестнет? Почему последние транзы 16 часов назад

daanicccch: новые к слову не отображаются

RootTon: Gg ) (reply to 285149)

Svαtoωλ‎: а как фиксить такое

Андрей: Что именно фиксить? Что нода работает всего минуту? Для этого нужно подождать что бы работала дольше) (reply to 285156)

Svαtoωλ‎: не, она несколько часов работает, я ее перезапустил просто (reply to 285167)

B.: Здорово всем! Можно узнать пожалуйста. Короче я собираюсь сделать типо онлайн курсы на Блокчейне.  И у меня есть контракт который отправляет сообщения о том сколько правильных ответов было дано типо "8/10".  Хотел узнать, если вдруг у какого нибудь контракт закончяться тоны и контракт будет полностью удалён после 6 месяцев. Можно ли будет как нибудь посмотреть транзакций которые были совершены (любые способы, допустим снова задеплоить такой же контракт)?

Vlad: Всем привет! У кого-то есть репозиторий с контрактом nft коллекции и nft item желательно на tact?

Artem: Всем привет! вопрос, обязательно ли сообщение о нотификации в jetton стандарте при трансфере монет? почему я спрашиваю, потому что в документации об этом сказано на серьезных щах: https://docs.ton.org/develop/dapps/asset-processing/jettons  но при этом стандрт говорит  https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md -> If forward_amount is equal to zero, notification message should not be sent.

Оскар: стандарт описывает что должен реализовывать контракт, в нём и говорится что если forward_amount 0, то никакая нотификация не отправляется (reply to 285183)

Brave: Please go in EN chat) (reply to 285185)

Игорь: салют всем!  заметил только что, что процентов 75 транзакций на мой кошелек стали bounced  кто может подсказать, почему такое происходит?

Игорь: та же самая транзакция на один кошелек bounced, а на другой нет

Victor: скиньте транзу в вьювере, пожалуйста (reply to 285192)

Игорь: https://tonviewer.com/transaction/2ebb4607e764be5e1696db0479f5c24721183bbc4c7779822905b097fdb9245f

Ivan: кошелек неактивен чтобы на такой кошелек пришли тоны, надо их отправить без баунс флага  ну или сделать любую исходящую транзакцию с кошелька (reply to 285195)

Игорь: а почему на него ранее приходили тоны, а потом перестали?

Victor: либо отправить на Non-bounceable адрес: UQDhHFUJkrTc0Jvxnmjqa-Kgg2DZs4HQ4X5ctaeSnQ-XwnH0 (reply to 285197)

Игорь: как узнать, какой non-bounceable? (reply to 285199)

Victor: у успешных транзакций флаг bounce = false

Victor: вот тут можете посмотреть https://ton.org/address/ (reply to 285201)

Victor: инфа из доки  https://docs.ton.org/v3/documentation/smart-contracts/addresses#bounceable-vs-non-bounceable-addresses (reply to 285203)

Ivan: потому что тот, кто отправлял, что-то поменял в своем коде, либо стал использовать EQ адрес вместо UQ  вот транзакция без баунс флага  https://tonviewer.com/transaction/cabd7f7fb462b6385913b41f50710ef6396d8ef2795e8cedaeaabb1918099583  а вот с того-же кошелька пришли с баунс флагом, и тоны вернулись потому что контракт неактивен  https://tonviewer.com/transaction/e88d932e1757305e8aefc54a45749ac1940c9659a66b4760a4475a9bb485424c (reply to 285198)

Игорь: понял, благодарю

Viacheslav: Привет.  Мне нужно связаться с разработчиками multisig.ton.org - потому что в тестнете мультисиг не работает совсем. Ошибка на фронте при парсинге. Это легко можно увидеть, если создать новый мультисиг в тестнете и подождать когда он создаться - тут же будет ошибкаю  А также хотелось бы связаться с verifier.ton.org разработчиками тк они не могут передать информацию в тонскан, что контракт верифицирован и тонскан говорит что проблема на их стороне и фиксить ее они не хотят.. Контракт получается верифицирован а на тонскане отображается что нет..  @HackerIvan   @alefman

наз: всем ку, подскажите в чем проблема   if (op == op::send_withdraw) {         throw_unless(err::not_admin, equal_slices_bits(sender_address, admin));          int withdraw_amount = in_msg_body~load_coins();         slice destination = in_msg_body~load_msg_addr();         in_msg_body.end_parse();          slice usdt_jetton_wallet = get_jetton_wallet_governed_address(my_address(), usdt_minter, jetton_wallet_governed_code);          send_jettons(             withdraw_amount,             destination,             query_id,             usdt_jetton_wallet,             begin_cell().end_cell(),             1,             50000000, ;; 0.05 ton             my_address()         );         available_usdt -= withdraw_amount;         save_data();          return ();     }   async sendWithdraw(provider: ContractProvider, via: Sender, value: bigint, opts: {         queryId: bigint,         withdrawAmount: bigint,         destination: Address,     }) {         await provider.internal(via, {             value,             sendMode: SendMode.PAY_GAS_SEPARATELY,             body: beginCell()                 .storeUint(opCodes.withdraw, 32)                 .storeUint(opts.queryId, 64)                 .storeCoins(opts.withdrawAmount)                 .storeAddress(opts.destination)                 .endCell(),         });  ловлю 5 экзит код, в withdrawAmount передаю BigInt(1 * 1e6), при любом другом точно также

Vladimir: Issue не пробовали создать? https://github.com/ton-blockchain/multisig (reply to 285210)

Viacheslav: нет,спасибо, попробую! (reply to 285216)

Vladimir: https://github.com/ton-blockchain/verifier И verifier. (reply to 285217)

Denzel': как отправлять non-bouncable транзакцию через смарт-контракт(сообщением)?

Denzel': чтобы сделать контракт активным

SweetJesus: флаг 0x10 у сообщения (reply to 285219)

Denzel': подскажите пожалуйста, почему не инитит контракт. Раньше баунсило, отправил non-bouncable, теперь не отвечает и aborted

Ivan: Чтобы заинитило надо стейт инит прислать (reply to 285224)

Denzel': стейт инит чего? Контракта С КОТОРОГО отправляю или стейт контракта КУДА отправляю?

Ivan: Куда (reply to 285227)

Denzel': () mint_tokens(slice to_address, cell jetton_wallet_code, int amount, cell master_msg) impure {     cell state_init = calculate_jetton_wallet_state_init(to_address, my_address(), jetton_wallet_code);     slice to_wallet_address = calc_address(state_init);     var msg = begin_cell()             .store_msg_flag(msg_flag::bounceable)             .store_slice(to_wallet_address)             .store_coins(amount)             .store_msgbody_prefix_stateinit(state_init, master_msg);     send_raw_message(msg.end_cell(), PAY_FEES_SEPARATELY); ;; pay transfer fees separately, revert on errors }  вот присылаю стейт инит жетон валета (reply to 285228)

Андрей: Тогда нужно смотреть когда нода поработала 6 часов - весь статус мтк по нагрузке ноды и логи самой ноды (reply to 285170)

— 2025-01-19 —

Vadims: Ребят, а как это чинить? [TON_CONNECT_SDK] Gateway is already opened, closing previous gateway

Oken: А че будет если сделать деплой системного контракта, вед он же опен соурс

&rey: Ну, будет на другом адресе тот же код ничего не делать. (reply to 285243)

Алексей: А только мне жутко не хватает, чтоб числа в фанси можно было записывать в бинарном виде? Имхо странно, что такую очевидную фичу не добавили. Даже в толке вроде этого нет

⋆H4RD⋆ ᵈᵉᵛ: Я например, не могу придумать для чего в принципе это может пригодиться. (reply to 285245)

Devon: Здравствуйте, подскажите пожалуйста. Как вместо конфет валет вставить свою иконку

Work3: Всем привет! Ищем php разрабочика, с ком.опытом от 3 лет

RootTon: коннект валет? вставить иконку куда ? в кнопку за место лого тона? (reply to 285261)

Devon: Да вместо лого тона (reply to 285263)

RootTon: создать свою кнопку подключения, хуки либо (useTonAddreess + useTonConnectModal) или useTonConnectUI (reply to 285264)

Devon: 404 (reply to 285266)

RootTon: https://docs.ton.org/develop/dapps/ton-connect/react#usetonconnectui

Art: Друзья, я пока еще только разбираюсь. Подскажите где брать  ключ доступа к тон апи?

Namon: tonconsole.com скорее всего (reply to 285270)

наз: всем ку, а как в фанси подставить в строку число, типо вот такого:  .store_slice('Number is' + number + 'good')

наз: только так конвертировать и потом полученное конкатенировать?  https://docs.ton.org/v3/documentation/smart-contracts/func/cookbook#how-to-convert-int-to-string (reply to 285272)

rends_east: по идее, засторить подряд как slice (reply to 285273)

rends_east: посмотрите в исходники ston fi v1, они там точно таким занимались (reply to 285273)

&rey: Вроде того, только сохраняйте сразу в один билдер. (reply to 285273)

Daniil: Всем привет! Что значит ошибка: aiohttp.client_exceptions.ClientResponseError: 404, message='entity not found'  когда пытаешься получить баланс жеттона на кошельке? Жеттон никогда до этого на кошелек не зачислялся. Код:      client = TonapiClient(api_key=TON_API_KEY, is_testnet=False)     jetton_wallet_address = await JettonMaster.get_wallet_address(         client=client,         owner_address=MY_TON_WALLET_ADDRESS,         jetton_master_address=coin_address)     jetton_wallet_data = await JettonWallet.get_wallet_data(         client=client,         jetton_wallet_address=jetton_wallet_address)

Dmitry | backend4you.ton: Проверьте Jetton-wallet-address в эксплорере (reply to 285287)

Yaroslav: Подскажите как в найти разработчика для проекта? Я пишу сообщение оно удаляется тут.

Yaroslav: Ищу фронт енд, разработчика. Перспективный проект, уже много сделано. Нужен человек с творческим подходом, опытом работы на ТОН. Лучше фулстак, кто любит телеграмм и тон блокчейн и хочет билдить крутой продукт вместе с командой.

Daniil: С ним порядок, вот он https://tonviewer.com/EQCLU6KIPjZJbhyYlRfENc3nQck2DWulsUq2gJPyWEK9wfDd (reply to 285288)

Dmitry | backend4you.ton: Это жетон мастер. А я про юзеровский жетон валлет (reply to 285293)

Daniil: а что должно быть? я сейчас поменял адрес токена ARIX на USDT и мне вернуло баланс с моего кошелька на ARIX ошибка (reply to 285294)

Dmitry | backend4you.ton: Откройте в эксплорере адрес зетон валлета который вы пытались открыть и была ошибка 404 (reply to 285295)

Daniil: ого, да тогда можете объяснить какие-то принципы кошельков на ТОНе, что тут происходит? я думал так: у меня есть адрес моего кошелька, на который я могу присылать как ТОН, так и совершенно любой токен сети ТОН, и когда я сделаю fetch баланса какого-то токена, которого нет на балансе, по нему просто 0 вернется теперь я вижу, когда взглянул на jetton_wallet_address, что под каждый токен на кошельке создает как бы отдельный кошелек? и балансы с него начнут показываться, когда на него придет первая транзакция? (reply to 285296)

Dmitry | backend4you.ton: Ага. В доках было описание архитектуры жетонов, почитайте. Ссылку сходу найти не могу - с телефона, сорри (reply to 285298)

Daniil: хорошо но в общем я прав? когда первую транзакцию с трансфером этого токена осуществлю, все балансы появятся? (reply to 285299)

Dmitry | backend4you.ton: Не совсем. Баланс будет когда адрес задеплоен. Он 100% задеплоен когда была хоть одна исходящая транзакция, но иногда и раньше (reply to 285300)

Daniil: ок, спасибо

Dmitry | backend4you.ton: Порядок работы жетонов все равно найдите - следующий вопрос все равно про transfer notification будет ) (reply to 285302)

odnokasanie: Коллеги, в тестах не могу получить баланс тона, кроме баланса кошелька деплоера.   const deployerJettonBalance = (await deployerJettonWalletContract.getGetWalletData()).balance;   Баланс жетонов на контракте и в получаю.  Попробовал гуглить тесты на гитхаб - не нашел ничего интересного.

lerok: Привет !  В чем проблема может быть? При тыкании не переходит в определённый раздел.  Нажимаю на connect telegram, но ничего не происходит

haha: привет всем почему .ton домены не доступны в рф?

lerok: Кто шарит? Подскажите, пожалуйста (reply to 285313)

Anthony: Они не доступны нигде кроме телеграма

haha: тогда вопрос чо такое тма

X1ag: В тех поддержку пишите (reply to 285313)

haha: ну так я про это и спрашиваю) у меня не загружает страницу через тг (reply to 285317)

X1ag: Telegram mini app (reply to 285320)

X1ag: Они нигде не работают кроме кошельков и всяких костылей (reply to 285318)

haha: иногда такое выбивает

haha: в основном такое в общем-то

haha: подрубаю впн - всё окей

X1ag: Там разве .ton домен? (reply to 285328)

haha: с впном

haha: отрубаю впн - всё ломается (reply to 285331)

User<8187053692>: Здесь есть разработчики telegram mini app?

haha: ну иногда оно прогружает) (reply to 285336)

haha: да, я (reply to 285337)

X1ag: Вы 20 минут назад спрашивали что такое tma (reply to 285341)

haha: ну сокращений я таких не знаю, обычно у нас это вебаппом называется (reply to 285342)

RootTon: Telegram mini app  Чаще еще бывает tmapp или tma (reply to 285343)

haha: ну мне уже объяснили, да (reply to 285344)

odnokasanie: ояебу, документация и примеры страдают в Тон. Как получить разные балансы в тестах не написано в read.me '@ton/sandbox', его примерах, описания языка такт. Если я просмотрел - ткните пжлст, буду благодарен.  Только на надцадтой странице поиска в гитхабе по слову balance нашлось искомое:  1. Получить баланс тона у деплоера (или любого TreasuryContract): .getBlance()  2. Получить баланс токенах (не тона) у wallet-кошелька любого контракта:   deployerJettonWalletContract = await jettonMasterContract.getGetWalletAddress(deployer.address);  const balance = (await deployerJettonWalletContract.getGetWalletData()).balance;   3. Получить баланс тона(!) у любого контракта:   const balance = (await blockchain.getContract(contractAddress)).balance;   Может быть кому-то потребуется, кто пользуется поиском в группе.  (Как дурак сидишь целый день и выискиваешь банальные вещи) (reply to 285305)

Anonicz: я отписал (reply to 285337)

ᅠ: Группы как способ передачи информации отстой, одно и тоже спрашивают, неужели форума какого нет? (reply to 285346)

ᅠ: Неиндексируемые знания

Svαtoωλ‎: пофиксилось само собой  берите на заметку (reply to 285156)

acato: на самом деле я всё ему исправил (reply to 285351)

Max: FYI (reply to 285358)

Timur: при обновлении страницы, оно автоматом не происходит?  const TonProvider: FC<PropsWithChildren> = ({children}) => {     return (         <TonConnectUIProvider             manifestUrl="https://*********/tonconnect-manifest.json"             restoreConnection={true}         >             {children}         </TonConnectUIProvider>     ); }; вот такой провайдер (reply to 285143)

Timur: там в целом два ключа информативных остальные так пыль в глаза, коннект и без них работает  пробовал без одного ключа(насколько понимаю этот ключ что-то типо timestamp'а последнего подключения) и он создавался заново автоматом библиотекой  но транзакции не отправляются, только с последнего подключенного кошелька.. (reply to 285139)

Андрей: Поиск по чату много чего знает (reply to 285363)

&rey: Elector: https://docs.ton.org/v3/documentation/smart-contracts/contracts-specs/governance#elector. (reply to 285363)

Ramedon: Добрый день, не знаю возможно не туда обращаюсь, но все же. Кто нибудь знает как сделать транзакцию свапа токенов на питоне? Ну тоесть пользователь отправляет условно говоря NOT, а взамен получает TON. Буду очень благодарен за помощь, может отблагодарю монеткой

Alek: I know (reply to 285371)

Ramedon: DM (reply to 285372)

Ramedon: Если еще кто то знает, отпишите (reply to 285371)

Mirka: @pythonnton https://github.com/nessshon/tonutils/tree/main/examples/jetton/dex (reply to 285371)

Mirka: Можно и через pytoniq, но тело транзакции надо будет собирать самому по документации декса (reply to 285376)

Ramedon: ТЫ САМЫЙ ЛУЧШИЙ БРО ❤️❤️❤️❤️ (reply to 285376)

Vladyslav: В MyTonWallet можно создать тестнет кошелек? или хотя бы импортировать?

Mr.Ashurov: Всем привет. Я не очень хорошо знаю русский язык, поэтому пишу с помощью переводчика. Я получил аккаунт от человека по имени ton space.Ундам попросил комиссию о передаче активов. Я бросил. И брошенный aktiv автоматически ушел на другой адрес. Я не понимал, почему это произошло. И я намерен докопаться до сути. Пожалуйста, порекомендуйте. Что я должен делать

Mirka: Настройки, в самом низу кликаешь несколько раз на версию и в dev меню меняешь сеть (reply to 285381)

Mirka: Если тебе написал аккаунт с именем ton space и попросил отправить какие-либо средства, то это мошенник. Все, что ты можешь сделать — не повторять ошибку в будущем и не отправлять средства по просьбе незнакомцев. (reply to 285382)

elton: привет, мне нужно задеплоить контракт программно, то есть не хочется спавнить процесс блюпринта и через CLI идти. Контракт на такте, есть врапер соотвественно, код примерно такой должен быть:    async deployContract(input) {     const c = tonClient.open(await MyContract.fromInit(input));            const deployResult = await c.send(       deployer.getSender(),       {         value: toNano('0.06'),       },       {         $$type: 'Deploy',         queryId: 0n,       }     );      return c.address;   }    я как бы насколько же понял, когда я открываю контракт, провайдер подставляется сам, но вот сендер (ну или via, если на код @ton/ton ориентироваться) мне откуда взять?)

elton: я по сути код с тестов взял, где я в сендбоксе контракт деплою, и там сендер это treasury, тут вроде бы tonClient и должен быть сендером, но я насколько помню у сендера как интерфейса должен быть метод send, которого нет у тон клиента

Namon: https://ton-community.github.io/ton/classes/WalletContractV4.html#sender (reply to 285386)

elton: а можно пример использования, я просто хз что в secretKey ожидается) (reply to 285387)

Namon: https://t.me/tondev/274772 (reply to 285388)

elton: мощно, спасибо (reply to 285389)

Namon: Мне было легче найти, чем написать (без ноута) Но это, кстати, подтверждает, что в этом чате по поиску можно много чего найти :) (reply to 285390)

Alexey: Всем привет! Вопрос по гет-методам в TEP-64 (метадата NFT и жетонов). Из документации понятно, как делать on-chain метадату с текстовыми значениями (кодировать текст в snake и все). А как быть с булями и числами, в т ч с плавающей точкой? Только как строку кодировать? Или есть хоть что-то похожее на стандарт, который будут понимать в том числе эксплореры и кошельки?

Viacheslav: Привет. Что это за адрес? https://tonviewer.com/EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c

Namon: Куда большинство отправляет жетоны, нфт и тоны типа для сжигания (хотя это не оч корректно) (reply to 285397)

Viacheslav: хм.. наш клиент отправил токены зачем то свои туда.. (reply to 285400)

Viacheslav: https://tonviewer.com/transaction/8bb123041574ffc1ed71779e42e7ef3fc729bb229582d4a8cd64f6f4766a40b6

Viacheslav: объясните,что тут произошло?

Oleg: Нормальная свалка для ненужного хлама (reply to 285401)

Viacheslav: а как токены поменялись сами через стонфи и зачем..

Namon: Ну сами они вряд ли поменялись... (reply to 285405)

Viacheslav: по схеме видно что он их отправил на какой-то wallet. а там сработал своп

sd: По схеме видно, что он совершил своп (reply to 285407)

Viacheslav: хм. и взамен он получил ukwn токены какието.. адрес которых - свалка?

Namon: Отправил экстернал на свой кошелёк  Кошелёк отправил интернал на жеттон воллет с forward_payload для свопа на стонфи Что не так то? (reply to 285407)

Оскар: да, воллет роутера, всё верно (reply to 285407)

Namon: Это pTON (Proxy TON) (обернутый тон для стонфи) (reply to 285409)

Оскар: pton v2 под капотом у стона сидит якобы под 0:0 адресом, поэтому так и показывается просто у тонкоина нет адреса, это нативный токен, поэтому они решили так отображать (reply to 285409)

Viacheslav: вообщем он получил от обмена тон получается?

Оскар: да (reply to 285414)

— 2025-01-20 —

Алексей: На гейтвее говорили о каких-то unified tests для тон библиотек (https://www.youtube.com/live/P8BQm5JtHzw?t=6772). Их где-то можно найти?

🏆: highload контракт даёт какие-то преимущества?

X1ag: https://docs.ton.org/v3/guidelines/smart-contracts/howto/wallet#-high-load-wallet-v3 (reply to 285420)

B.: Здорово всем!  Можете подсказать, как можно стимулировать что контракт уже год без транзакций.  Короче я хочу проверить как себя поведёт контракт когда баланс смартконтракта будет меньше storageReserve.  Я использую blueprint чтобы писать тесты.

RootTon: Стимулировать ? Если на вашем ск закончатся мани ваш ск прокиснет и все, после будет удалён из сети (reply to 285422)

Андрей: Возможно вы имели ввиду симулировать (reply to 285422)

rends_east: У blockchain есть параметр now, его можно переписывать (reply to 285422)

Чупа: А для чего этот параметр? А то я искал как хеш вытащить, там куча всего, но они более менее понятны, этот я не понял. (reply to 285428)

rends_east: Например, для того, чтобы симулировать, что год на контракт нет транзакций (reply to 285429)

Ma><im: почему FunC компилируется с редифинишоном?

Ma><im: более того, вот простой пример. просто обход словаря, вылезает фантомная ошибка

Ma><im: но если мы делаем переопределение переменной var - ошибка исчезает

Ma><im: без переопределения - ошибка, а с переопределением всё компилируется😁 (reply to 285435)

Oken: А почему комиссия такая дорогая

X1ag: Расскажите пожалуйста что такое payload. Для чего он нужен и как используется. Может статья есть про это?

Ma><im: полезная нагрузка. то есть та часть сообщения, которая не относится к неким системным данным (reply to 285439)

Ma><im: ты очень общий вопрос задал, на него невозможно точно ответить, может уточнишь? )

X1ag: Тяжело) только глупые вопросы в голову лезут по типу: «а как парсить его, как прокидывать» (reply to 285441)

Daniil: Скажите, когда мы делаем симуляцию свапа на STONfi через REST-запрос, под капотом сервера, делающего это обращение/отдающего данные, идёт запрос непосредственно к смарт-контракту? И на выходе мы получаем текущие данные исходя из текущих резервов монет? def simulate_deal(token_in_normal_balance, token_in_address, token_out_address):      base_url = "https://api.ston.fi/v1/swap/simulate"     params = {         "offer_address": token_in_address,         "ask_address": token_out_address,         "units": str(int(token_in_normal_balance)),         "slippage_tolerance": "0.001"     }     response = requests.post(base_url, params=params).json()     out_amount = int(response["ask_units"])     return out_amount

X1ag: Я просто думал , что в body прикидываются все не системные данные. В моменте появился payload.   Можно, условно, в payload прокидывать данные, которые нужно записать контракту в сторадж? (reply to 285441)

Joker: Подскажите, пожалуйста, по поводу nft. Для деплоя нужны урлы картинок и json metadata. Обычно в разных SDK прописывают базовый урл к которому надо только добавить имя файла. Если я размещу файлы на своем урле - этот урл будет фигурировать где-то или файлы просто скопируются на сервера getgems и останутся там?   Пробую залить файлы через pinata, но там нет урла папки, там для каждого файла - отдельный урл, а это не совместимо с sdk для деплоя nft...

Joker: То есть, если я размещу на своем урле и задеплою коллекцию и удалю со своего урла - они останутся на getgems и все будет работать? То есть урл до файлов при деплое нужен только для деплоя или он где-то сохраняется? (reply to 285445)

Joker: Не понятно спросил? (reply to 285448)

Lmao: Доброе утро всем! Мы - команда Fantasy Builders Ищем программистов в проект - Surfers, необходимо доработать фронтенд и связку с блокчейном (Ton connect, Смарт-контракт для заданий (Make a ton transaction и т.п), сделать оплату некоторых предметов в Telegram stars. Это поверхностное ТЗ, кому интересно, напишите в лс, скину более подробное ТЗ, также информацию о проекте и о нашей команде в целом. Спасибо!

Joker: Вот так в sdk формируется урл для каждой nft  SUFFIX_URI = f"{COMMON_PREFIX}/{NFT_INDEX}.json" но проблема в том, что у pinata (ipfs) нет префикса для файлов, там для каждого файла свой урл, ничем не похожий на другие (reply to 285448)

Чупа: Это комментарий, который можно указать при отправке транзы (reply to 285444)

Oken: Как получить емеил ton org

Ma><im: в body не системные, да (reply to 285444)

Ma><im: ты просто в терминах путаешься, забей на них😊

author: Все прокси типо .sc .run .website для тонсайтов накрылись. Не осталось ни одной зоны,чтоб открывать тонсайты. Хром-расширение тоже не работает.

B.: NFT всегда берет больше на комиссию, чтобы хватило, потом возвращает то что не использовано (reply to 285438)

Joker: Все, я разобрался, можно закачать папку с файлами на pinata  и будет общий префикс (reply to 285452)

Василий: Если речь про custom_payload в стандарте жетонов, то это поле для передачи произволных данных при кастомной реализации контракта кошелька. Один из примеров использующих custom_payload, - mintless жетон  Другими словами, это поле используется на усмотрение разработчика контракта кошелька жетона для реализации дополнительной логики.  Все вышеописанное справедливо и для NFT стандарта. (reply to 285439)

Seva: Ищу работу тимлидом/техлидом или блокчейн-разработчиком.

X1ag: Спасибо, получается payload это тоже самое что я прокидываю в body? (reply to 285456)

X1ag: Понятно, спасибо 🫶 (reply to 285464)

Hetso: Как пофиксить такие Warning-и (количество 60)?  WARNING in ./node_modules/@tonconnect/sdk/lib/esm/index.mjs Module Warning (from ./node_modules/source-map-loader/dist/cjs.js): Failed to parse source map from '/home/hetso/WORK/white_school_front/node_modules/@tonconnect/sdk/src/utils/address.ts' file: Error: ENOENT: no such file or directory, open '/home/hetso/WORK/white_school_front/node_modules/@tonconnect/sdk/src/utils/address.ts'  WARNING in ./node_modules/@tonconnect/sdk/lib/esm/index.mjs Module Warning (from ./node_modules/source-map-loader/dist/cjs.js): Failed to parse source map from '/home/hetso/WORK/white_school_front/node_modules/@tonconnect/sdk/src/utils/call-for-success.ts' file: Error: ENOENT: no such file or directory, open '/home/hetso/WORK/white_school_front/node_modules/@tonconnect/sdk/src/utils/call-for-success.ts'  WARNING in ./node_modules/@tonconnect/sdk/lib/esm/index.mjs Module Warning (from ./node_modules/source-map-loader/dist/cjs.js): Failed to parse source map from '/home/hetso/WORK/white_school_front/node_modules/@tonconnect/sdk/src/utils/create-abort-controller.ts' file: Error: ENOENT: no such file or directory, open '/home/hetso/WORK/white_school_front/node_modules/@tonconnect/sdk/src/utils/create-abort-controller.ts'  WARNING in ./node_modules/@tonconnect/sdk/lib/esm/index.mjs Module Warning (from ./node_modules/source-map-loader/dist/cjs.js): Failed to parse source map from '/home/hetso/WORK/white_school_front/node_modules/@tonconnect/sdk/src/utils/delay.ts' file: Error: ENOENT: no such file or directory, open '/home/hetso/WORK/white_school_front/node_modules/@tonconnect/sdk/src/utils/delay.ts'

Василий: Я бы снёс node_modules и выполнил npm install заново (reply to 285472)

German: Всем привет. Сорри если не по теме, подскажите где можно посмотреть ру вакансии на разраба в крипте. Есть ли спрос и выше ли зарплаты? Может чатики по этой тематики знаете. Буду очень благодарен

Hetso: я использую create react app у него есть react-scripts проблема похоже в нем. И в форумах предлагается просто сделать игнорирование warning, но это решение не устраивает, похоже решу когда мы перейдем на vite) (reply to 285473)

Василий: А вы его не в отладчик загружаете? Не очень понятно зачем оно вообще за source map'ами лезет (reply to 285476)

Hetso: Да (reply to 285478)

Hetso: devtools true скорее всего стоит в конфиге Webpack

Roma: Всем привет, подскажите нашел в доке такой способ отправки жетонов с помошью ton connect (точнее тут не он но в целом не важно)  async function main() {     const jettonWalletAddress = Address.parse('put your jetton wallet address');     const destinationAddress = Address.parse('put destination wallet address');      const forwardPayload = beginCell()         .storeUint(0, 32) // 0 opcode means we have a comment         .storeStringTail('Hello, TON!')         .endCell();      const messageBody = beginCell()         .storeUint(0x0f8a7ea5, 32) // opcode for jetton transfer         .storeUint(0, 64) // query id         .storeCoins(toNano(5)) // jetton amount, amount * 10^9         .storeAddress(destinationAddress)         .storeAddress(destinationAddress) // response destination         .storeBit(0) // no custom payload         .storeCoins(toNano('0.02')) // forward amount - if >0, will send notification message         .storeBit(1) // we store forwardPayload as a reference         .storeRef(forwardPayload)         .endCell();      const internalMessage = internal({         to: jettonWalletAddress,         value: toNano('0.1'),         bounce: true,         body: messageBody     });     const internalMessageCell = beginCell()         .store(storeMessageRelaxed(internalMessage))         .endCell(); }        возникает вопрос, жетоны к примеру usdt можно отправлять только с адреса жетона на адрес жетона? т/е не получиться именно на адрес кошелька?

&rey: Баланс жетонов никогда не хранится вне системы этих жетон-кошельков; соответственно, для его изменения вы должны отправить сообщение вашему жетон-кошельку; уведомление получателю придёт, соответственно, от его ЖК. А destinationAddress — основной контракт. (reply to 285482)

Roma: Немного не понял, получается я своему child жетону отправляю сообщение что хочу отправит 1 usdt, и адрес куда хочу(адрес уже кошелька ?, или другого child жетона) в примере что скинул непонятно там два раза идёт store address(destinationAddress) не совсем пойму зачем так. (reply to 285483)

User<7929375059>: Привет

User<7929375059>: Кто знает как при получение транзакции определить что за монета

&rey: Адрес, куда хотите, основной. Второй адрес — куда придёт сдача с перевода. Обычно всё-таки забирают себе (ставят адрес отправителя).  И есть ещё .storeCoins(toNano('0.02')) — forward amount. Много кто переплачивает, потому что уведомления о переводе нужны достаточно редко. (А авторы индексеров могут идти писать индексеры как положено, а не просить всех переводить минимум по одному нанотону.) (reply to 285484)

User<7929375059>: async def check_payment():     result = await client.blockchain.get_account_transactions(     account_id='UQD0V_1ihYS_sdCwRNdIhvWntj0PzjZxp05MHsYrq2q1zmOU', limit=3)     for transaction in result.transactions:         print(transaction)

User<7929375059>: hash='4ac285a942954230d2dfff1e8baf807506bf6103fee1aee43a779654cc30d3e8' lt=53109162000001 account=AccountAddress(address=Address(root='0:f457fd628584bfb1d0b044d74886f5a7b63d0fce3671a74e4c1ec62bab6ab5ce'), name=None, is_scam=False, icon=None, is_wallet=True) success=False utime=1737371039 orig_status=<AccountStatus.active: 'active'> end_status=<AccountStatus.active: 'active'> total_fees=4 transaction_type=<TransactionType.TransOrd: 'TransOrd'> state_update_old='b7abb3f60fe6df840ae970591e1eb044b23a02ffffbd99648ea2bda0a1e0c84a' state_update_new='cf90bad9c8a5fde7dfbdc3855ef47975a5b85889279042dadcf73d84fdc18665' in_msg=Message(created_lt=53109159000002, ihr_disabled=True, bounce=False, bounced=False, value=1, fwd_fee=397870, ihr_fee=0, destination=AccountAddress(address=Address(root='0:f457fd628584bfb1d0b044d74886f5a7b63d0fce3671a74e4c1ec62bab6ab5ce'), name=None, is_scam=False, icon=None, is_wallet=True), source=AccountAddress(address=Address(root='0:0920a7f41c1c0e5282d2c95bb4a06b643210d489c288f3b8f017c82a5953cb72'), name=None, is_scam=False, icon=None, is_wallet=False), import_fee=0, created_at=1737371031, op_code='0x7362d09c', init=None, decoded_op_name='jetton_notify', decoded_body={'query_id': 6083770387171325013, 'amount': '10000000', 'sender': '0:66541d9cace1285de5d9a6e9e1bd4a19079a2582ee3f230d538482731e31fafc', 'forward_payload': {'is_right': False, 'value': {}}}, raw_body='b5ee9c720101010100330000627362d09c546de4ef166334553989680800cca83b3959c250bbcbb34dd3c37a94320f344b05dc7e461aa70904e63c63f5f8') out_msgs=[] block='(0,e000000000000000,48885288)' prev_trans_hash='5b9901c5a57135e3340863155b86cafd968a61b22e74c7d8354a1089d5c3733d' prev_trans_lt=53109156000001 compute_phase=ComputePhase(skipped=True, skip_reason=<ComputeSkipReason.cskip_no_gas: 'cskip_no_gas'>, success=None, gas_fees=None, gas_used=None, vm_steps=None, exit_code=None) storage_phase=StoragePhase(fees_collected=4, fees_due=None, status_change=<AccStatusChange.acst_unchanged: 'acst_unchanged'>) credit_phase=CreditPhase(fees_collected=0, credit=1) action_phase=None bounce_phase=None aborted=True destroyed=False три разные монеты, но первые 2 транзы почти ничем не отличаются как понять где какая

Alex: Ребят, не подскажете есть ли какие гайды для стейкинга на дедасте? Нужны tlb схемы чтобы из кода это делать. В чат разрабов дедаста писал - меня проигнорили. Думаю здесь попытать счастья

Roma: я еще не увидел такую картинку) хорошо описывает что происходит. (reply to 285490)

Василий: Тогда у вас в webpack'е релизная сборка, поэтому у вас нет сорсмап. (reply to 285480)

User<7929375059>: @tsivarev @IAmAnEmpire @alefman (reply to 285492)

Daniil: Подскажите, как расшифровать транзакцию и понять причину, почему она провалилась? https://tonviewer.com/transaction/7306b06de3110eba04fcbc21501299a0deaaf2568dffc337aee7076fc6aab318

Oken: Вопрос как работает тестнет, там тоже есть валидаторы? Если да, вед они получать ничего за валидатерсво

Паша: Добрый день, у меня есть код на го, который собирает транзакцию для тон коннекта, мне нужно сериализовать стейт инит в base64 строку, для этого я юзаю base64.StdEncoding.EncodeToString(stateInit.toBOC()) (использую tonutils-go) Проблема в том, что когда я отправляю транзакцию через блюпринт, то там сериализованный стейтинит другой, не сериализованый такой же (адреса из стейт инита получаются одинаковые). Я как-то не так сериализую стейт инит?

Андрей: Большая часть нод поддерживается командой ton core, остальные просто хотят попробовать запустить валидатор и тоже поднимают в тестнете. Валидаторы за работу в тестнете так же получают монеты своей сети - тестовые монеты. (reply to 285506)

User<7929375059>: @tester @tsivarev @slavafomin @combot @alefman @f_closer @ndatg @andreypfau @SwiftAdviser @IAmAnEmpire (reply to 285492)

Андрей: Почаще тегай админов, и тогда возможно они обратят на тебя внимание и забанят (reply to 285502)

shapovalov: Так ты помог ему лучше чем это писать) (reply to 285510)

Андрей: Ты помоги, чем это писать (reply to 285512)

shapovalov: Так я сам хз (reply to 285513)

Андрей: Вот и ответ (reply to 285514)

Max: Ну давайте каждый из 10k участников начнёт тегать всех админов для решения своей "единственной и неповторимой" проблемы  И почему Андрей вообще обязан по-вашему помогать? (reply to 285512)

shapovalov: Я говорил что обязан?) (reply to 285516)

shapovalov: Я сказал что мог бы и помочь если знает, а не угрожать баном

GGGleb🔺: Коллеги   Как из этого теста понять в какой строке ошибка ? есть какие то более информативные комментарии где то ?

rends_east: Привет всем Подскажите, как сгенерить рандомные байты и запихнуть их в Buffer? Это можно сделать встроенными методами ton/crypto?

Алексей: Если не ошибаюсь, то у бока есть разные флаги как его можно сериализовать, там он может всякую мета инфу хранить вроде чексумм и подобного.  Короче бок может быть разный, но ячейки которая закодированы будут одинаковые, мб в этом причина (reply to 285507)

potato: getRandomBytes есть в @ton/crypto Его в буффер можно засунуть Buffer.from(myBytes) (reply to 285522)

rends_east: getSecureRandomBytes ? (reply to 285524)

Паша: Оке, попробую, спс (reply to 285523)

potato: Да, извиняюсь (reply to 285525)

potato: Он вроде сразу buffer отдает (reply to 285525)

Max: Привет всем. Есть бот в тг, пользователь указывает свой TON кошелёк, как самым простым способом проверить что он ему принадлежит?

User<6908616126>: использовать ton connect? 🤔 (reply to 285530)

Max: Там нужно регистрироваться? (reply to 285532)

potato: Указывает или подключает? (reply to 285530)

potato: Если подключает - используйте TonProof Если указывает - нужно придумывать свои механики, например микротранзакция в 0.001 тон с определенным комментарием и тд. Но проще TonProof конечно

Max: Мне просто нужно удостовериться что пользователь привязывет кошелёк к которому у него есть доступ.

Max: Сама привязка даже не нужна, я просто храню адрес в виде значения в базе

Max: А потом ищу что нужно в истории транзакций

Max: Просто указать файл с манифестом и все? Т.е. даже транзакция не нужна получается? (reply to 285539)

Max: Спасибо, буду смотреть что такое tonproof

Daniil: Подскажите, а почему свапы на ТОНе такие долгие? Я как-то год-полтора назад читал документацию ТОНа, и там везде писалось, что ТОН круче любого блокчейна по скорости, что его скорости в разы уменьшают проблему проскальзываний на других сетях и т.д. Но вот я попробовал свапнуть CATI на TON на STONfi и свап длился 50 секунд - https://tonviewer.com/transaction/f9aefeba8a6e6288122f83eada87a557a782dce1f6e6d1c4c7c7d551a589b5cd это как вообще и почему так?

Daniil: разве он не должен быть около мгновенным? секунд 5 максимум (reply to 285547)

Daniil: очень давно свапал на Солане, года полтора назад, уже не помню, как там но по-моему точно не минуту ждешь свои средства (reply to 285549)

Daniil: мда ок, буду знать я думал, здесь будет 5-10 сек максимум (reply to 285551)

&rey: Про проскальзывание кто-то писал, не подумав, очевидно.  А тон круче по количеству транзакций в секунду (throughput), не по скорости конкретной цепочки (latency). (reply to 285545)

potato: Там довольная цепочка internal'ов идет, так что увы (reply to 285552)

potato: Интересно даже, есть ли у кого то trace длиннее

Daniil: Ребят, а почему так? Если вбить в STONfi продажу 85 CATI на TON, он выдаст адекватные актуальные значения но если попробовать через метод симуляции через swagger, то он вернет какие-то безумные 17к (https://api.ston.fi/swagger-ui/#/Dex/dex_simulate_swap)

Max: потому что вы забыли про decimals (reply to 285558)

Daniil: нет, их не просит этот рест-запрос, он в обычных значениях принимает (reply to 285560)

集电极: Вы перепутали местами адреса контрактов и он пишет что даёт 17к cati за 85 тон (reply to 285559)

Daniil: смотрите на картинку внимательнее что offer_address, а что ask_address всё в порядке (reply to 285562)

Max: вы заблуждаетесь (reply to 285561)

集电极: А вы попробуйте наоборот и увидите (reply to 285563)

Daniil: к слову если вбить наоборот, то порядок если вновь CATI на TON - безумие

Daniil: даже если про них вспомнить (но про них не надо вспоминать, оно и без них работает), то в каком месте 85 CATI из 17412 недецимальных TONов превращаются в 4.5? ни в каком что-то у пацанов со сваггером случилось попробовал сейчас STON на TON - тот же бред с десятками тысяч на выходе (reply to 285560)

zero_tolerance91: Наконец то сделал с.контракт голосования для своего тг канала!))

internet: спасибо тебе (reply to 208022)

internet: если бы не ты я бы снова пошёл лежать в кровати прохлождаться какая же тупая ошибка боже мой

Max: 1) потому что вы забыли, что у cati тоже есть decimals 2) Держите   curl -X 'POST' \   'https://api.ston.fi/v1/swap/simulate?offer_address=EQD-cvR0Nz6XAyRBvbhz-abTrRC6sI5tvHvvpeQraV9UAAD7&ask_address=UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKZ&units=85000000000&slippage_tolerance=0.001&dex_v2=false' \   -H 'accept: application/json' \   -d '' (reply to 285570)

Daniil: Да, видимо, вы правы, извините, зря быканул это уже очень похоже на правду но почему тогда мы цифру ask_units переводим в нормальное число по decimals'ам CATI (9), а не decimals'ам TON (6)? (reply to 285575)

Max: с каких пор у TON decimals = 6? 😁 (reply to 285578)

Max: Новость для меня. Недавно видимо поменяли?

Max: А если серьезно, то у TON decimals = 9

Daniil: понял ошибся я, спасибо вам большое (reply to 285581)

Daniil: а, это я перепутал с токеном USDT на TON'e, у него 6 (reply to 285581)

Daniil: а к слову есть способ как-то ускорить это? на условном EVM-блокчейне бОльшая цена за газ может такое позволить (reply to 285546)

Daniil: знаю, это как пример есть способы ускорения? (reply to 285585)

Daniil: ага ну то есть с моей стороны, того, кто пользуется смарт-контрактом других (биржи) я на скорость никак повлиять не могу? (reply to 285587)

Vlad: Нет, на тоне так не работает. Ты можешь ускорить транзакцию только если у тебя есть своя нода. (reply to 285584)

Оскар: у тона нет приоритета для того чтобы твою транзу пропустили раньше  транзу можно ускорить если контракты находятся в одном шарде, но это больше танцы с бубном и не стоят того, особенно если ты не контролируешь контракты во всей цепочке (reply to 285584)

Anonicz: Есть ли разрапботчики мини апп? нужно пофиксить одну проблему, за оплату

Anonicz: купи с карты (reply to 285595)

internet: заскамили

internet: лавочка прикрыта

odnokasanie: Коллеги, надо с нуля начать пилить свой jetton, хотел оттоклуться от бест практис или оригинальных примеров, посмотрел и вошел в ступор, что брать за основу.  в реализации jetton разные в деталях:  1. https://github.com/tact-lang/jetton  2. https://github.com/howardpen9/jetton-implementation-in-tact  первый официальный, второй уважаемый.  В частности,  1. Почему в официальном не используется @interface("org.ton.jetton.master") и wallet?  2. Jetton Wallet ownable у howardpen9, а у тактовского примера - нет, но есть говорка:  //Actually this contract has OwnableTransferable functionality //but this logic is implemented without OwnableTransferable trait //to match refference implementation in terms of exit codes.  Но тем не менее, @interface - пережиток?  Наверняка еще есть изменения, но мне уже непонятно что брать в основу?

potato: За основу брать tep-0074-jetton-standart, в остальном делаете что хотите Да и те стандарты по tep можно вертеть и так и сяк (reply to 285607)

odnokasanie: брать стандарт - это одной стороны очевидно и йожику понятно, с другой стороны тупо, т.к. 21 век, должны быть реализованные примеры контрактов на tact.  оба приведенных кной репозитория пишут, что они в стандартах. Но уж больно там разные реализации на tact, т.е. в официальном какое-то новое видение, но оно то же вызывает вопросы почему, а второй - так изначально делали, даже на официальном tact.  Да, на официально интересная заметка, WORK IN PROGRES DO NOT USE IN PRODUCTION YES - за"№ись, а что использовать сами создатели такт не дают. (reply to 285608)

potato: А почему создатели языка должны что-то давать?) Реализованный пример можно использовать на сайте minter, можно стащить на сайте verifier Если хотите допилить контракт жетона и расширить его своим функционалом - совет выше: Опираясь на стандарт пишете все, что в голову взбредет  Лично мое мнение тупо - это говорить что тупо использовать стандарт на который опирается весь блокчейн) Мой совет - разберитесь что вы хотите получить, а потом решайте задачу а не опирайтесь на чужие реализации

odnokasanie: моё "тупо" в контексте, что нужны примеры от создателей на основе стандартов, а не тупо использовать стандарты как вы восприняли.  я уж не говорю, что не всё стандартизировано, чтобы на стандарты опираться. Мои изначальные вопросы были скорее по реализации контрактов на такт и они не касались стандартов.  должны, т.к. это увеличивает вовлеченность, фокусировку, эффективность в разработке контрактов, как бэ очевидно.  Вы дали хороший совет, взять с minter или с verifier контракт текущего кошелька у всех так скажем пользователей. Но там FunC. (reply to 285610)

&rey: Почему же? Для большинства очень даже стоят. Надо только знать, какими жетонами чаще будешь пользоваться. (reply to 285591)

potato: Так ведь сами прислали ссылки на gh с примерами от создателей tact на основе стандартов =\ Чуваки взяли и тупо используя стандарты тона написали свои примеры.  Вопрос стоял "что брать в основу?" Ответ - стандарты тона, а именно tep74  Не должны, но делают некоторые, а некоторые не делают Эффективность в разработке увеличивает хорошо написанная документация, которую нужно уметь читать а не только чужой код  Там не только FunC, верифицируются еще и tact контракты. Даже у меня есть парочка верифицированных-модифицированных контрактов жетона и нфт Вопрос в тут скорее в желании разбираться и искать

odnokasanie: их примеры jetton во-первых work in progress, во-вторых расходятся в реализации с теми, которые верифицированы и доступны tact-кодом, в третьих gh аккаунт howardpen9 известный в коммьюнити чувак, на него ссылаются официальный такт в своих репозитариях.  а у меня как у просто смертного разрыв шаблона, что выбрать из готовых примеров, которые априори сделаны согласно стандартов (reply to 285616)

potato: Так вам надо с "нуля начать пилить свой jetton" или допилить функционал на основе чужого шаблона? Я же говорю, определитесь со своей задачей и решите что вам нужно в итоге (reply to 285617)

odnokasanie: Допиливать с чужого шаблона, который максимально соответствует стандартам, современной версии такт, протестированный. (reply to 285618)

ᅠ: а активация адреса всегда будет с sendMode=128?

potato: Вы какую-то чушь написали сейчас Что значит максимально соответствует?) Он либо соответствует либо нет Что такое стандарт современной версии такт? У такта нет стандартов контрактов  Стандарты описаны тут, почитайте https://github.com/ton-blockchain/TEPs/tree/master/text (reply to 285619)

odnokasanie: Хорошо, чушь. Какой пример исходного кода на такт вы мне посоветуете использовать? И почему этот пример не из офиц репозитория такт? (reply to 285621)

potato: Ничего нового не скажу Посоветую писать свой код, опираться на стандарт  Непонятные моменты - по типу расчета газа и тд можно подсмотреть где угодно (неважно где) (reply to 285622)

daanicccch: /api/v3/jetton/transfers  api/v3/transactionsByMessage  Подскажите почему эти запросы могут возвращать у одной и той же транзы разные transaction_now?  toncenter

X1ag: Ребят, подскажите пожалуйста, почему транзу баунсит? Контракт задеплоен, опкод верный. Возможно проблема в сообщении? На что обратить внимание? https://testnet.tonviewer.com/transaction/49869c4692f492942f4c4157ad686173ac88598df7530086817a76609f8dea35   if (op == 1){ ;; mint     var msg_body = begin_cell()                 .store_uint(0x1674b0a0, 32) ;; op::mint                 .store_uint(query_id, 64)                 .store_slice(my_address()) ;; to_address                 .store_coins(5000) ;; jetton amount                 .store_coins(50000000) ;; forward ton amount                 .store_coins(100000000) ;; total ton amount               .end_cell();     var msg = begin_cell()               .store_uint(0x18,6)               .store_slice(calc_jetton_minter_wallet(jmc,data)) ;; jettonMinter address               .store_coins(200000000) ;; amount of ton(in nanoton)               .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1 + 1)                .store_only_body_ref(msg_body);     send_raw_message(msg.end_cell(), 1); } Хочу чтобы контракт сам минтил жетоны с jetton-minter

liminal: где можно подробно почитать про Holding период в ТОН?

Seva: https://docs.ton.org/v3/documentation/network/configs/blockchain-configs#param-15 (reply to 285631)

Daniel: У вас опкод нулевой приходит на контракт минтера и он баунсит с exit кодом 65535, что означает - “не знаю что делать с этим входящим сообщением 0_O” (reply to 285626)

X1ag: это да), но в контракте явно указано же, что с ним делать

X1ag:  if (op == op::mint) {         slice to_address = in_msg_body~load_msg_addr();         int jetton_amount = in_msg_body~load_coins();         int forward_ton_amount = in_msg_body~load_coins();         int total_ton_amount = in_msg_body~load_coins();         throw_unless(error::discovery_fee_not_matched, total_ton_amount > forward_ton_amount);         cell mint_request = begin_cell()                 .store_op(op::internal_transfer)                 .store_query_id(query_id)                 .store_coins(jetton_amount) ;; max 124 bit                 .store_uint(0, 2) ;; from_address, addr_none$00                 .store_slice(my_address()) ;; response_address, 3 + 8 + 256 = 267 bit                 .store_coins(forward_ton_amount) ;; forward_amount, 4 bit if zero                 .store_uint(0, 1) ;; no forward_payload, 1 bit                 .end_cell();         mint_tokens(to_address, jetton_wallet_code, total_ton_amount, mint_request);         save_data(total_supply + jetton_amount, admin_address, content, jetton_wallet_code);         return ();     }  Вот приходит с op::mint   опкоды одинаковы (op::mint = 0x1674b0a0)

B.: receive(msg: SendQuiz) {         require(!self.locked, "re-entrancy detected");         self.locked = true;          require(context().sender == self.owner, "only the owner can send a quiz");         require(self.is_initialized, "contract not initialized");          send(SendParameters{             to: msg.quizAddress,             value: 0,             bounce: false,             mode: SendRemainingValue,             body: msg.answers,         });          self.locked = false;         emit("Quiz sent to \(msg.quizAddress) by \(context().sender)".asComment());     } Есть смысл использовать попе locked в этом receive или нету. Просто AI говорит типо может быть проведена атака и это работает как mutex. Но код который он генерит(я его сюда не вставлял) совсем другой случай на мой взгляд.  Можете мне помочь?

Daniel: Вы неправильно отправляете сообщение из своего контракта к минтеру (reply to 285635)

X1ag: а вы не знаете, что конкретно не так? Я это сообщение собирал, пересобирал, все равно ошибки(но другие)) (reply to 285638)

Molodoy Abuzer 3: Подскажите пожалуйста если я отправляю батч с хайлоада, могут ли отдельные outActions свалиться с ошибкой? Ну то есть хайлоад же себе интернал трансфером переводит outActions чтобы гарантировать отсутствие ошибок во время фазы действия, что позволит ему отправить все. Но может ли быть такое что отельные экшны сваляться? Если да, то как чекать их статус?

Artem ⚡️: Здравствуйте   Не до конца понял по документации   TON Connect можно подключить в бота, а не в мини апп?  Так как вижу манифест и требование url

D.K.: Знаю что можно, но не знаю как😁 (reply to 285645)

Artem ⚡️: Ну уже хоть что-то)  Осталось подождать ответа как работать с манифестом если подключать к боту (reply to 285646)

potato: Можно (reply to 285645)

Artem ⚡️: Есть опыт? Могу несколько вопросов задать? (reply to 285648)

Oken: Ноткоин заканчивается с _NOT. Надо майнит vanity address чтобы создать такой токен?

Mr: Всем привет! Подскажите, у меня вот есть адрес мой, как трекать поступления на него нейтива и жеттонов? хотябы понимание куда копать или может у тонцентра есть специальные методы для этого?

Oken: И да каждый wallet v3~v5 имеет свои дочерние адреса (jetton_wallet) для хранения других видов токена? (reply to 285650)

Mr: Вот я поймал jetton notify транзу, как мне понять от кого она сделана и какой токен переслали? (reply to 285654)

Mr: То есть я поймал нотификашку, дальше по месседжам спускаюсь от кого прислали? Даже если и так, я ведь только найду jetton_wallet юзера, как мне понять, что это токен, найти адрес самого токена? (reply to 285659)

Mr: а, на жеттон воллет моего адреса, точняк то есть флоу такой: 1) мне заранее надо знать жеттон воллет моего адреса 2) по этому адресу я чекаю транзакции 3) ловлю нотификашку 4) иду вниз по месседжам и изначальный адрес того, кто послал ExtIn транзу? (reply to 285661)

Mr: в общем из D надо перейти к А, верно? (reply to 285665)

Oken: Кто знает (reply to 285652)

Mr: А разве в нотификашке не пишется sender? (reply to 285667)

Mr: вот тут есть amount и sender поля

Mr: жесть конечно, после эфира неудобно)) (reply to 285671)

Vadims: Привет! Mode в body в actions по типу "mode": 2 - это тот же самый mode, который в доке описан или другой?  https://docs.ton.org/v3/documentation/smart-contracts/message-management/sending-messages

max: Всем привет. помогите с формированием body для выставленния нфт на продажу в getgems через ton connect. возможно ли на tonweb сделать?

— 2025-01-21 —

&rey: и не забыть то, что C может пытаться подделаться под ваш жетон-кошелёк, и надо уточнить у мастера, всё ли окей (reply to 285671)

&rey: Ну, можно так сказать, только "дочерние" они скорее по отношению к жетон-мастеру. А так — да, для всякой пары (жетон-мастер, владелец) будет отдельный адрес и контракт жетон-кошелька. (reply to 285652)

Sol: Ищу постоянное место работы на позицию разработчика смарт-контрактов

Oken: Не будет разницы если я отправлю например notcoin жетон валлет (ноткоина) и сам валлет_в4 позволятеля, вед позволятел все равно получить ноткоин? (reply to 285692)

final: Как можно сделать прокси контракт для перевода жетонов? То есть на контракт приходит жетон и сразу же отправляется на определенный адрес в полном объеме с теми же данными и payload’ом. Вопрос в том, как определять jetton_wallet по обычному переводу?

Oken: И да чтобы создать точно такую же криптавалюту по функционалу и всего как у ноткоин, надо сначала майнит vanity address и потом сделать деплой стандартного jetton_master? Или у ноткоин некоторые модификации контракта jetton_master? (reply to 285692)

Oken: Хочу создать игру в тг

Daniil: Подскажите, как можно через запрос к TON API понять, что свап транзакция провалилась? У меня есть пример неудавшегося свапа - https://tonviewer.com/transaction/7306b06de3110eba04fcbc21501299a0deaaf2568dffc337aee7076fc6aab318 Когда запрашиваю информацию по нему - https://tonapi.io/v2/blockchain/transactions/7306b06de3110eba04fcbc21501299a0deaaf2568dffc337aee7076fc6aab318 - то не вижу каких-то особенных полей, говорящих о его провале, наоборот, много success но как понимаю, это в целом относится к транзакции, что она состоялась есть идея, что можно проверять так: если транзакция успешна (завершена), но при этом мой баланс token1 не стал больше, а token0 не стал меньше, то свап не состоялся но все же, в самом теле информации по транзакции из TONAPI такое нельзя выяснить?

Mark: Gm everyone,   I am currently in the process of building a bot that sends notifications to my telegram group whenever specific activities are tracked on the NFTs on my collection  Thus far, we have successfully implemented notifications for NFT transfers, listings, unlistings, and purchases. However, we are encountering challenges in the following areas:  Handling notifications when the listing currency is not TON.  Tracking offers made for an NFT.  We have exhausted the available resources and would greatly appreciate your assistance or guidance in resolving these issues.  Please who can assist me?

D.K.: It is Russia speaking chat. @tondev_eng (reply to 285706)

Алексей: есть текст классный по этой теме, мб поможет https://gist.github.com/mr-tron/a4b3e8eff3a982e3426f6397eb9a2450 (reply to 285705)

X1ag: Всем добрый день, подскажите пожалуйста, можно ли как-то убрать итог транзакции(т.е. чтобы было видно только то что я отправлю куда-то тоны)?  () mint_tokens(slice to_address, cell jmc, int amount, cell data, int query_id) impure inline {     var msg_body = begin_cell()                 .store_uint(0x1674b0a0, 32) ;; op::mint                 .store_uint(query_id, 64)                 .store_slice(to_address) ;; to_address                 .store_coins(amount) ;; jetton amount                 .store_coins(1000000) ;; forward ton amount                 .store_coins(10000000) ;; total ton amount               .end_cell();     var msg = begin_cell()               .store_uint(0x18,6)               .store_slice(calc_jetton_minter_wallet(jmc,data)) ;; jettonMinter address               .store_coins(200000000) ;; amount of ton(in nanoton)               .store_only_body_ref(msg_body);     send_raw_message(msg.end_cell(), 1); }

Mark: О да, это правда, извини. (reply to 285707)

Mark: Gm всем,  В настоящее время я занимаюсь созданием бота, который отправляет уведомления в мою группу Telegram всякий раз, когда отслеживаются определенные действия в NFT в моей коллекции  На данный момент мы успешно внедрили уведомления для переводов NFT, листингов, анлистингов и покупок. Однако мы сталкиваемся с проблемами в следующих областях:  Обработка уведомлений, когда валюта листинга не TON.  Отслеживание предложений, сделанных для NFT.  Мы исчерпали доступные ресурсы и будем очень признательны за вашу помощь или руководство в решении этих проблем.  Пожалуйста, кто может мне помочь?

Artem: Всем привет, я пишу jetton сканер,  подскажите как быть уверенным что на мой адрес пришли jetton? правильно я понимаю что если Jetton Internal Transfer · 0x178d4519 - success то это не гарантия того что jetton пришли? какую транзакцию тогда смотреть?

Artem: так он может не приходить (reply to 285714)

Creator: Так а почему это не гарантия? Ведь ваш жетон кошелек успешно обработал внутренний перевод и подвердил что это пришли нужные жетоны (reply to 285713)

Artem: потому что UDP протокол используется, который не гарантирует доставку, потому что в TON существуют bouncable флаг, потому что сам по сути TON не гарантирует что если transaction success то все ок (reply to 285716)

Creator: Может вы имеете ввиду обработку трансфера с вашего кошелька на внешний?

Artem: нет, я как раз имею в виду internal transfer transaction, возможно я не прав по поводу bouncable, но остальные факторы меня смущают (reply to 285718)

rends_east: при чем здесь udp, если ваша транзакция записалась в блокчейн, то она там есть, никуда не денется (reply to 285717)

RootTon: Пойдем от обратного, вы пробовали сделать что либо чтобы трансфер не прошел и ваша транза после success статуса получила негативный :)? (reply to 285713)

&rey: Документация много чего хочет, скажем так. (reply to 285183)

Mr: Всем привет! Можно ли как то ончейн узнать, задеплоен ли контракт?

&rey: Чтобы проверить приход конкретного жетона, слушать надо жетон-кошелёк. Если он примет входящее (exitCode = 0) и поменяет хранимое кол-во жетонов, то пришло.

&rey: Ну, любое взаимодействие с контрактом у нас требует сообщения... кинуть сообщение с какой-то такой мелкой суммой, что баунс при отсутствии контракта пройдёт, а при наличии уже газа не хватит. (reply to 285725)

Mr: то есть надо кинуть сообщение, если оно сбаунсится, то значит контракт не задеплоен? (reply to 285728)

наз: всем ку, подскажите почему кидает 5 екзит код, в c4 храню переменную как .store_coins(value), в одном из оп кодов принимаю значение тоже coins, но когда пытаюсь сделать    current_value -= received_value; save_data();   то 5 экзит код

наз: а забейте я просто отнимал больше чем есть (reply to 285730)

/B4ckSl4sh\: Подскажите, пожалуйста, от чего может возникать такая ошибка при компиляции контракта? Что-то супер странное происходит. Собираю в блюпринте   ⏳ Compiling...[ 1][t 0][2025-01-21 08:34:09.025000][Fift.cpp:66]        top: <continuation 0x62a870> level 1: <continuation 0x62a8f0> level 2: <text interpreter continuation>  Error: main.fif:147:    B:-?  error Command failed with exit code 1.

Denis | White Core: Всех приветствую и желаю хорошей и продуктивной недели

Oleg: Всем привет. Может кто сталкивался, подскажите, пожалуйста, Парсю транзакции смарт контракта, ищу ввод USDT. Использую javaScript SDK @ton/ton TonClient (https://toncenter.com/api/v2/jsonRPC) Нахожу транзакцию с нужным op_code (transfer_notification), пытаюсь достать query_id через body.loadUint(64), критует, потому что число не влазит в safe Integer. Окей, достаю query_id через body.loadUintBig(64), получаю число 6083770389918563526n. Иду в tonviewer.com, смотрю транзакцию там. Там пишет, что query_id = 6083770389918563000. 6083770389918563526n 6083770389918563000 Сам вопрос - почему три последние цифры отличаются?

Oleg: 000 это фокусы js (reply to 285738)

Oleg: именно из-за того, что 8 байт не влезает в number

Oleg: не, 000 - это tonviewer.com а js - это 526 (reply to 285739)

Oleg: я не в number, а в bigInt извлекаю (reply to 285740)

Oleg: tonviewer наверняка печатает как number

Oleg: 526n это правильно, короче

Oleg: Понял, забить на tonviewer Спасибо)) (reply to 285744)

Alex: Всем привет! Коллеги, подскажите, а где посмотреть ui-ки готовые (говорят есть), которые можно взять для разработки TMA. Нативные тип

Mark: кто-нибудь здесь знаком со смарт-контрактами GetGems?

Mark: Мне нужна помощь (reply to 285750)

X1ag: forward ton amount и total ton amount поставить минимальными? (reply to 285709)

Daniil: Подскажите, что за свап я сделал, если мой TON ушел, а MAJOR за свап я не получил? взял код из примера библиотеки tonutils tx_hash = await wallet.stonfi_swap_ton_to_jetton(         jetton_master_address="EQCuPm01HldiduQ55xaBF_1kaW_WAUy5DHey8suqzU_MAJOR",         ton_amount=1,         version=1,     )      print("Successfully swapped TON to Jetton!")     print(f"Transaction hash: {tx_hash}")     return tx_hash Транзакция выполнилась, но по ней у меня только списали TON, а MAJOR не прислали - https://tonviewer.com/transaction/07a27bda4e2cfc763216280a56edb2449eb508dfa1efd7f9ac252586da3cdd7b  Что я на самом деле сделал?

/B4ckSl4sh\: Возможно пул не существует? (reply to 285758)

Daniil: похоже, в поиске на stonfi есть только v2 пулы по мажору (reply to 285759)

Mr: Можно ли без запроса в ноду узнать адрес жеттон воллета юзера, если я знаю адрес жеттона и кошелька юзера?

/B4ckSl4sh\: в общем случае нет (reply to 285763)

Mr: а почему, ведь код контракта заранне известен (reply to 285764)

/B4ckSl4sh\: Если вам еще известен стейтинит жетон воллета, то можно (reply to 285765)

Mr: так он всегда одинаковый должен быть же (reply to 285766)

Oleg: Для конкретного жетона можно. (reply to 285767)

Mr: т. е.? (reply to 285768)

Oleg: У жетонов могут быть разные реализации, разные tl-b схемы, отсюда и разный алгоритм офчейн вычисления адреса

Namon: Как я понимаю, некоторые жетоны (модифицированные) могут изменять (дополнять) структуру data, которая нужна для state init Если Вы знаете, как конкретный жетон формирует state init, то можете узнать адрес без get методов (reply to 285769)

Mr: ппц, понял) (reply to 285771)

Namon: Поэтому лучше обращаться к get методу jetton master

Mr: капец (reply to 285773)

Daniil: Блин, ну кто ж так делает-то?  В официальном сваггере STONfi у запроса GET /v1/pools для параметра dex_v2 в документации написано: If true V2 pools will be present in the response. Default: false в итоге когда делаешь GET-запрос без передачи в params - {'dex_v2':'false'}, тебе возвращается пул_лист с 22к пулами если делаешь указание, то с 18 то есть в доках ошибка. По дефолту стоит true и возвращаются и v1 и v2 Я из-за этого сделал простой фетч всех пулов, увидел, что в них MAJOR, подумал, ну ок, v1 пул, в доке же написано, что по дефолту false, значит, возвращаются только v1 пулы, и свапнул его через v1, просто послав вникуда свои ТОНы (всего 1, не жалко, но все равно)

internet: телеграм уже во второй раз скамит

Alex: TON Studio is a team of experienced engineers working with the fast growing TON Ecosystem.  We are seeking an experienced and motivated Tech Support to join our team and contribute to the growing TON Ecosystem.   Your primary responsibility will be to provide technical support to partners and users, as well as to ensure smooth interactions with first-level projects.  👉Read More

internet: не подскажете? (reply to 285777)

internet: наверное какую то задержку на проверку статуса транзакции надо добавить

final: можно ли как то обрабатывать переводы жетонов из тонкипера? насколько мне ивестно, jetton_notify такого перевода не доходит из за малого кол-ва нанотонов (1) отправленных для notify

XD: На реальные деньги проверяешь что ли? (reply to 285777)

internet: а можно не на реальные..? (reply to 285784)

XD: Тестнет? (reply to 285788)

internet: да

internet: я и так

Mr: Кто-то пользовался JSON-API решениями? хочу сделать runGetMethod, вот что просят посылать в stack  Array of stack elements: [['num',3], ['cell', cell_object], ['slice', slice_object]]  шарит кто нибудь, что такое slice_object? Boc не подходит

User<6313497839>: Недавно решил обновить знания, изучил учебное пособие по микросервисной архитектуре (задевает разделы про сервисы, API Gateway, gRPC). Также есть материал по высоконагруженным системам (High Load). Если интересно кому-то начать изучение в этой отрасли или подтянуть свои знания могу поделиться.

Runo: Всем привет. Подскажите пожалуйста, какие данные можно достать из boc транзакции?  В идеале хотелось бы получать отправителя, конечного получателя (не промежуточный jetton governed!), количество, адрес жетона в трансфере  Реально ли это достать из boc?  До этого в tonapi ходили, но щас плашка появилась "не использовать для вычислений"

Oleg: https://t.me/tondev/203160 (reply to 285792)

alexxx: здравствуйте! Есть кто-нибудь, кто может помочь написать код (за оплату конечно же)? Я хочу создать токен, но так чтобы было ограничение на количество токенов, продаваемых за одну транзакцию (например, в процентах от общего количества суплпая), выполнимо ли это? Я хочу добиться лучшего распределения токенов, чтобы киты не могли доминировать)

Vadims: Привет, а может ли PayLoad изменится при выполнении транзакции на блокчейне ТОНа?

/B4ckSl4sh\: Нет, какой отправили такой и будет (reply to 285801)

Alexander: Всем привет. Возник такой вопрос - я как-то могу в onBounce получить значения переданных во внешний контракт параметров? Суть в чем - в моей логике мне нужно проверить существует ли внешний контракт, если он существует - логика останавливается, ничего делать не нужно, а вот если его нет (т.е. как раз вызывается onBounce), тогда логика должна продолжиться. Только вот onBounce принимает 256 бит, из которых первые 32 - это название вызываемой на внешнем контракте функции, а остальное - параметры. Проблема в том, что у меня один параметр весит 256 бит (uint256) и соответственно я ну могу его получить для продолжения логики.  Мне кажется, получение параметров в onBounce - это достаточно частый кейс, поэтому не понятно как это должно обрабатываться по-красоте. Возможно, есть как-то альтернативныый подход к решения такого рода задач. В общем. буду благодарен за ответ

/B4ckSl4sh\: В стейте по queryId например можно запоминать отправленные данные (reply to 285809)

Alexander: Тогда стейт же может раздуться, если что-то пойдет не так (reply to 285810)

Alexander: например, не хватит газа на удаление

/B4ckSl4sh\: Тут уже от логики зависит. Потом можно чистить (reply to 285811)

Alexander: Т.е. ты имеешь ввиду юзать какой-то uint128, например, как ключ стейта и его передавать во внешний контракт. Ну а в onBounce его получать и уже из стейта тянуть данные, я правильно понимаю? (reply to 285810)

&rey: *по cur_lt(), ибо это значение гарантированно уникальное. (reply to 285810)

Alexander: Ок, принял, тогда будем извращаться со стейтом. Спасибо) (reply to 285816)

Vadims: Ну я сравниваю с explorer, у меня почему-то одна буква заменена в начале te6ccgEBBAE vs te6cckEBBAE + окончание новое добавлено в base64, всё остальное тоже самое  Вот так кодирую ожидаемое сообщение const body = Cell.fromBase64(message.payload);  Вот так читаю обратно: transaction.inMessage.body.toBoc().toString('base64') (reply to 285802)

&rey: Разные кодировки бока. Сравнивайте хеши ячеек. (reply to 285821)

Vadims: Я неправильно сформулировал вопрос:  То, что я читаю вот так: transaction.inMessage.body.toBoc().toString('base64’)  И то, что я вижу в explorer (tonscan.org).  Не сопвпадает с тем, что я записывал: const body = Cell.fromBase64(message.payload); (reply to 285822)

&rey: А я правильно сформулировал ответ. У одного и того же набора ячеек есть несколько способов его сериализовать в байтовую строку. Если вы хотите сравнить их на равенство, надо разобрать их обратно до ячеек и взять [representation] hash. (reply to 285823)

Artem ⚡️: Всем привет!  Есть вопрос. У кого есть опыт работы с жетонами (jetton) на python?   Есть один момент который хочу уточнить, буду очень благодарен

odnokasanie: это примерно как зайти во вкусно и точка и спросить бургеры есть? (мне в личку писать не нужно) (reply to 285826)

Artem ⚡️: Хахах😅😅 (reply to 285829)

Simon: Ребята, всем привет! А кто-то уже разбирался в новых гайдлайнах в связи с анонсом эксклюзивного партнерства тг и тона?  Как в итоге, мини-приложения кошельков смогут существовать или нет?

Artem ⚡️: Ответьте пожалуйста, если не трудно, а то огромное количество времени убил уже🙏🏻  async def check_payment():     result = await client.blockchain.get_account_transactions(         account_id='UQD0V_1ihYS_sdCwRNdIhvWntj0PzjZxp05MHsYrq2q1zmOU', limit=12)      for transaction in result.transactions:         print("Transaction:", transaction)  Есть такой код. Как из вывода определить, что за жетон был отправлен, тон легко там определить, а жетоны понять не могу.

Simon: Условный Hot wallet

Artem ⚡️: Я так понимаю что если я знаю что будет отправлен определенный жетон, то я могу посмотреть его адрес и по нему отслеживать?    Не произойдет ли ошибки что пользователь отправит другой жетон, а система его засчитает? (reply to 285832)

odnokasanie: что такое другой жетон? у вас в коде нет проверки на тот самый жетон. какая система? (reply to 285835)

Artem ⚡️: Второй вопрос теоретический   Для начала вопрос как вообще это определять (reply to 285836)

odnokasanie: гуглите token processing, если не ошибаюсь, там примеры, если не ошибаюсь запрашиваете транзакции по кошельку/контракту, что у вас там и проверяйте каждую транзакцию на соответствие вашим требованиям. (reply to 285837)

Artem ⚡️: Принял, все проверю  Если что, могу ли уточнить потом в ЛС? (reply to 285838)

odnokasanie: мне в лс не надо писать, я вообще мимо проходил и питон не знаю (reply to 285839)

odnokasanie: Коллеги, строится цепочка сообщений:  кошелек -> контракт —Burn-> jetton_wallet —BurnNotification-> контракт  на контракте в обработчике BurnNotification будет делаться отправка других сообщений, но нужны данные, которые возникли при обработке на контракте Burn.  я могу передавать вместе с Burn, BurnNotification данные, которые не хотелось бы выносить ончейн. Защита от того кто/что вызывает будет.  или городить огород типа стека отправленных Burn какой-нибудь map<Int, Cell>, где будет хранится информация а в сообщениях будет отправляться index map’а. В обработчике BurnNotification буду удалять обработанные map’ы. Так вообще делают или есть решения проще?

Vadims: Ещё есть вопрос:  Я в in message запросил перевести  "grams": "162988000" столько грамов. А отправилось столько: Value 0.1617992 TON  Это я уже смотрю в ton explorer

odnokasanie: вопросы на которые ты сам себе должен ответить, чтобы разобрать ситуацию: где ты запросил? как ты запросил? куда отрпавилось? комиссию учёл? (reply to 285842)

Оскар: транзакцию (reply to 285842)

Vadims: Спасибо, я похоже понял.  Если ты делаешь транзакцию без флага +1 у тебя ком-са из Value вычитается (reply to 285846)

/B4ckSl4sh\: а какой mode? Если 0 то мог вычесть из валью (reply to 285842)

rends_east: Скорее всего, съело forward fee Для того, чтобы отправить ровно столько, то надо флаг 1  Блин уже ответили, не буду удалять (reply to 285842)

Vadims: А +2 делать - best practice?

/B4ckSl4sh\: если сообщение одно, то ни на что не повлияет этот флаг (reply to 285850)

potato: Подтверждаю, не советую с ним работать. Выдать доступы к коду или частям кодовой базы (где предположительно локализована проблема) не может. Придется работать руками заказчика по скринам. Обсирает предыдущих исполнителей, хотя работа выполнена нормально (даже хорошо) Когда дело доходит до оплаты начинаются сказки "щас если работает обменник, я тебе закину", объясняя тем что типы на бирже спят. На вопросы как может спать биржа отвечает в таком формате "п2п на бирже, че тупишь" Через сутки уже почему-то биржа сломалась, теперь ждем вывод из стейкинга более 2 часов  Лучше берите предоплату, а еще лучше скипайте  таких заказчиков (reply to 240816)

Molodoy Abuzer 3: Людиииии. Помогите молю. Может ли отельные outActions упасть в батче при выводе с хайлоада? Например 10 транз в одном батче было, могут ли 9 например пройти и одна упасть?

&rey: Отправятся все либо никакие, а обрабатываться дальше будут по отдельности. (reply to 285856)

Molodoy Abuzer 3: Спасибо, но не совсем тут понял (reply to 285857)

Molodoy Abuzer 3: Меня просто в документации смущает этот момент. Перевод себе специальный с опкодом делают чтобы гарантировать отсутствие ошибок во время фазы действия даже если среди outActions буду ошибки

Molodoy Abuzer 3: Но в таком случае получается нельзя гарантировать успешность всего батча

&rey: В тоне каждая транзакция исполняется только на одном контракте, и в результате получается такое понятие, как "дерево транзакций" — например, перевод жетонов состоит из трёх транзакций минимум. (reply to 285858)

GGGleb🔺: сделал перевод USDT на контракт  (создался контракт USDT) и он прислал на мой контракт сообщение  как узнать кто перевел USDT

GGGleb🔺: вот как выглядит запрос     await deployerJettonWallet.send(                 deployer.getSender(),                 { value: toNano('0.1') },                 {                     $$type: 'JettonTransfer',                     queryId: 0n,                     amount: AMOUNT ,                     destination: StakingMasterContract.address,                     responseDestination: deployer.address,                     customPayload: null,                     forwardTonAmount: toNano('0.05'),                     forwardPayload: beginCell()                         .storeUint(900, 32)                         .endCell()                         .beginParse(),                 }             );

Molodoy Abuzer 3: То есть если хоть в одной транзакции из батча будет ошибка (например не хватит газа), то вершина этого дерева (интернал перевод себе) тоже выйдет с ошибкой и exit code ≠ 0, верно? (reply to 285861)

&rey: Нет. Вверх ошибки не могут распространиться по той простой причине, что предыдущая транзакция (родительская вершина) к этому моменту уже закончилась и записана в блокчейн.  В чём же была проблема хайлоада — если какой-то адрес для перевода записан неверно, то action phase сваливалась, обновление данных почему-то не срабатывало, и вновь и вновь повторялся тот же экстернал. Вроде так. (reply to 285866)

Molodoy Abuzer 3: Да, точно. Но касаемо статуса батча, выходит что нужно проверять не батч, а каждую транзакцию в нем? (reply to 285867)

GGGleb🔺: Нашел (reply to 285863)

&rey: Э... ну, просто отправляете правильные сообщения, тогда они падать не будут. В тоне даже комиссии динамически не меняются, ну кроме storage. (reply to 285860)

Molodoy Abuzer 3: Правильно! Чтобы не было ошибок, их не надо допускать! (reply to 285870)

Molodoy Abuzer 3: Хорошо, а как в таком случае узнать что батч не отправился целиком, а был с ошибками? (reply to 285870)

Ye: Привет всем ! Подскажите пажалуйста что мой контракт не отрпавляет 50% полученых токенов назад ?   int get_half(int nano_amount) method_id {     throw_if(300, nano_amount < 100000000);      return nano_amount / 2; ;; Retourne la moitié de la somme }  () recv_internal(int msg_value, cell in_msg_full, slice in_msg_body) {     ;; Récupération de l'adresse de l'expéditeur     slice cs = in_msg_full.begin_parse();     int flags = cs~load_uint(4);     int income_coins = cs~load_coins();     slice sender_address = cs~load_msg_addr();           int return_amount = get_half(msg_value);       cell msg = begin_cell()         .store_uint(0x18, 6)         .store_slice(sender_address)          .store_coins(return_amount)         .store_uint(0, 1)     ;; Flag pour indiquer l'absence d'état initial         .store_uint(0, 4)     ;; Type de message (non défini dans cet exemple)         .store_uint(0, 4)     ;; Bits réservés         .store_uint(0, 64)    ;; Frais de transfert         .store_uint(0, 32)    ;; Identifiant logique (Created Lt)         .store_uint(0, 1)     ;; Bounceable Flag         .store_uint(0, 1)     ;; Bounced Flag         .end_cell();      send_raw_message(msg, 0); ;; mode 1 - ignorer les erreurs }

наз: а в фанси есть аналог % как в python?

X1ag: по сути да, если соответствуешь всем требованиям (reply to 285877)

X1ag: 300к ton застейкать как минимум (reply to 285879)

X1ag: https://ton.org/validators

наз: а если мне нужно конкатенировать две строки, чтобы потом их передать как комент в сообщение, мне обязательно делить их на рефы, или есть какой то другой способ?

Александр: ребятки, кто знает как сделать монетку на ТОНе?

Nikolaidr: для чего? вон сколько этих щит коинов выбирай любой, все уже создано=) (reply to 285896)

Александр: хочу побрить хомячков

Nikolaidr: надеюсь тебе не скажут как это сделать=) (reply to 285898)

Viacheslav: Почему-то чат @tonapitech  про тонапи никто не модерирует.. там полно спама нечищенного.. админы живы там?) Мб в курсе

SweetJesus: так там и спрашивай, зачем сюда то пишешь (reply to 285901)

Vladimir: https://minter.ton.org/ вот бритва. (reply to 285898)

X1ag: подскажите пожалуйста, почему get метод выдает exit code 9 cell_underflow, числа, которые вывожу являются int64   async getCounters(provider: ContractProvider) {         let { stack } = await provider.get("get_counters", []);         return [stack.readBigNumber(), stack.readBigNumber()]     }   (int, int) get_counters() method_id {   var (code, data, counter, global_counter) = load_data();   return (counter, global_counter); }

Александр: аххахах connect your wallet уже звучит подозрительно )) (reply to 285904)

Vladimir: https://github.com/ton-blockchain/minter поднимай локально (reply to 285906)

rends_east: Там все равно надо коннектить кошелек (reply to 285908)

Александр: владимир так просто не разведешь

Андрей: хочешь кого то побрить - будь готов быть сбритым (reply to 285906)

Олег😊: А че видео тут нельзя?

Vladimir: https://telegra.ph/Pravila-TON-Dev-Chat-RU-04-29 (reply to 285916)

Олег😊: Эх, жаль, хотел показать апку свою :( (reply to 285917)

Олег😊: Идея интерактивного квеста с пулом для игроков, вход стоит 5 тон, идея квеста в шифрах, загадках по всему телеграму, а приложение это отправная точка, и после доната будет выдан первый шифр, который будет вести уже за пределы приложения, некая цикада 3301 для тон сообщества (reply to 285918)

Олег😊: Первые игроки пришедшие к финишу забирают весь пул, условно 100 человек в игре, 5-10 человек пришло и забираешь 50-100 тон на лапу +- (reply to 285920)

Олег😊: Плюс думаю о вводе бонусов для тех кто учавствует, типо каких-то лимиток или ништяков

Fastik: Всем привет, вопрос такой возникает - а что произойдет например с @send там же есть и другие сеты кроме тон. Или например StormTrade.

User: Там есть пункт специальный для таких сервисов (reply to 285924)

Fastik: Цитату можно?

Denzel': попробуйте каждую переменную типизировать (reply to 285905)

/|\: exit code 9 это что? (reply to 285905)

X1ag: cell underflow (reply to 285928)

/|\: я понял, просто показалось (reply to 285929)

X1ag: попробовал, все равно exit code 9 (reply to 285927)

Brave: подскажите пж, можно как то реализовать ежемесячную подписку в тон?

Brave: просто увидел подобное, хз можно ли ваще такое сделать... (reply to 285932)

User: Если централизованно - то тут все как-бы логично, если децентрализованно, то расширение для кошелька можно сделать (reply to 285932)

Brave: могу в лс уточнить у тя? (reply to 285935)

Brave: сильно грузить не буду, сам web3 дев в тоне чутка

Brave: а всё нашел доки!   https://docs.ton.org/v3/documentation/dapps/defi/subscriptions (reply to 285935)

odnokasanie: Коллеги, как в контракте узнать адрес его кошелька к определенному жетону?  На контракте, в его кошельке есть жетон, например, USDT.  Надо совершить из кошелька контракта перевод жетонов (USDT) на другой кошелек.  Не соображу как определить адрес кошелька жетона у контракта?  Получить через contractAddress(initOf Contract()) - у меня нет класса USDT контракта.

Daniel: Вам нужен адрес минтера (USDT), jetton wallet code, и адрес кошелька пользователя.   calculate_user_jetton_wallet_address(owner_address, USDT_MINTER_ADDR, usdt_jetton_wallet_code) (reply to 285942)

ｈａｒａｊｕｋａ: Привет всем. Где сейчас нормально работает api fragment для покупки звезд?

Оскар: у фрагмента нет публичного апи (reply to 285950)

ｈａｒａｊｕｋａ: да, я про неоффициальный (reply to 285951)

Евгений: Кто в курсе почему при пополнении кошелька транзакция сначала проходит и видно что подтверждена а потом её обратно возвращает

X1ag: это называется bounce, причин этому может быть множество (reply to 285954)

Евгений: Какие самые распространеные ? (reply to 285956)

X1ag: контракт незадеплоен

Евгений: Понял, благодарю (reply to 285958)

Vito: а еще варианты? т.к. с телеграм кошелька такого (bounce) не происходит (reply to 285958)

X1ag: смотря на какой адрес отправлять, возможно с тг валета вы отправляете на non-bouncable адрес (reply to 285961)

Александр: Так можно будет делать после обновы или нет?

X1ag: по сути правила никакие не нарушает (reply to 285964)

Александр: а как же Только кошельки на ТОНЕ бла бла бла, там вообще ведет на сайт (reply to 285965)

Namon: Бред. От клиента, который вы используете, поведение блокчейна меняться не будет (reply to 285961)

Vito: опишу ситуацию... кошелек создан непосредственно в tonkeeper. начинается на U... (соответственно bouncable = false). так вот отправляя на него транзакцию через miniapp приложение. с подключеного телеграм кошелька проблем нет, с tonkepeer уже отскок (reply to 285962)

X1ag: ну на сайт же, а не на миниапп. Запретили только в миниапп другие бч использовать (reply to 285966)

Александр: да там так написано что черт ногу сломит

Namon: Я начал думать, что ловлю шизу, поэтому решил протестить сам Отправил в Tonkeeper на uninit кошелёк (UQ...) и ничего не отскочило (reply to 285968)

Vito: забыл упомянуть, что данный эффект проявляется при отправке с мобилы, при отправке с браузерного расширения тоже все ок вы как отправляли? (reply to 285972)

— 2025-01-22 —

X1ag: ребят, скажите пожалуйста, как возвращать пользователю то, что он скинул с вычетом комиссий и небольшого процента?

X1ag: Думаю, что можно из msg_value вычитать всё необходимое и собрать сообщение и отправить пользователю, но как высчитать комиссии(fee + gas)?

Alex: есть ли какие-то ограничения на испльзование собственного бэка в TMA? хочется на беке индексировать свои смарт контракты и ходить к себе в бек за информацией по ним

Оскар: нет, тма это просто вебвью с самым обычным вебсайтом (reply to 285980)

Alex: Тут скорее вопрос безопасности и может ли AppCenter накладывать ограничения какие-то. Мне кажется, я где-то это встречал, но сейчас не могу найти (reply to 285981)

🏆: В тоне подписанная транзакция имеет нонсе как в эфире?

&rey: В тоне подписанный экстернал в адрес контракта кошелька имеет seqno, проверяемый собственно этим контрактом. (reply to 285984)

🏆: А если получатель не инициализирован? (reply to 285985)

&rey: Получатель — в смысле кошелёк или тот, кому переводится? Кому переводится, вообще значения не имеет; к моменту, как эти контракты будут задеты, транзакция на кошельке уже давно завершится. (reply to 285986)

Артем: Всем привет. Нужен разработчик смартов вероятно на FunC  Нужно слегка видоизменить контратк жетона   и добавить лимиты на трансфер(отключаемые) Все оплачивается, жду в лс

Daniel: Напишите в лс (reply to 285998)

odnokasanie: мне понятно, что нужен адрес JM, код контракта, чтобы посчитать адрес кошелька владельца для соответствующего jetton.  Адрес EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs - это адрес USDT TON в mainnet.  Я на гитхабе поискал - нет ни одного контракта на такт/фс где бы этот адрес был в коде. Как искать примеры реализации и использования, не пойму? В контрактах используют другой адрес?  Вопрос еще как/где получить код контракта USDT TON, я понимаю, что он отображается на любом эксплорере, но как из того кода его сделать кодом для initOf…  Еще вопрос есть хранить это (код и адрес) в константах контракта, то наверняка это скажется на стоимости хранения контракта. Можно ли реализовать, что адрес минтера и его код передаются сообщением при деплой или отдельно и контракт сохраняет адрес кошелька владельца для USDT? Не отказался бы от примеров, но не могу найти.  А еще до кучи, если я фиксирую код в константе контракта, то как мне тестировать? @ton/sandbox создаст в тестовом окружении все необходимое и тесты пройдут? Или какие-то есть нюансы, чтобы тестировать нормаль и без переделок после тестов контракт так же будет отрабатывать в mainnet? (reply to 285944)

X1ag: в контрактах не используют напрямую этот адрес, его собирают из стейт инита и воркчейна (reply to 286008)

X1ag: при деплое сразу прокидываешь в стейт инит нужные тебе данные. Вот пример (reply to 286008)

X1ag: это делается во враппере, если используешь blueprint

X1ag: Может быть тяжелый пример. Вот попроще. Тут для каунтера сразу в стейт инит кладу число, чтобы counter изначально будет 0 (reply to 286010)

odnokasanie: (спасибо за ответы)  поизучал ваш код, я понимаю, что я могу код, адрес, всё необходимое для получения в контракте StateInit получить при деплое.  Попробовал поискать примеры с использованием blueprint, в которых бы я увидел вот у них код контракта, вот они его передают, а в котракте формируется адрес кошелька к этому жетону. Не нашел. Везде либо используется compile() имеющегося в проекте контракта и далее используется код из него.  Нигде не нашел, что код в HEX конвертируется в ячеку и далее передается в init() контракту. (reply to 286010)

X1ag: Он и не должен конвертироваться, вы собираете сами. Data, code = state init. (State init + workchain).serialize().hash= address

X1ag: вот например, мой файл деплоя (deploy{Name}.ts) import { address, toNano } from '@ton/core'; import { myContract } from '../wrappers/myContract'; import { jettonContentToCell, jettonMinterConfigToCell } from '../wrappers/JettonMinter'; import { compile, NetworkProvider } from '@ton/blueprint';  export async function run(provider: NetworkProvider) {     const jmc = await compile('JettonMinter');     const jwc = await compile('JettonWallet')     const content = jettonContentToCell({type:1, uri:"https://raw.githubusercontent.com/..."})     const data = jettonMinterConfigToCell({         admin: address(("here address")),          content: content,         wallet_code: jwc     });     const myContract = provider.open(myContract.createFromConfig({jetton_minter_code:jmc, data: data}, await compile('myContract')));      await myContract.sendDeploy(provider.sender(), toNano('0.05'));      await provider.waitForDeploy(myContract.address); }

X1ag: Это не эталонное решение) Я прокидываю все эти данные и уже в контракте собираю из этих данных адрес. Почитайте стандарт tep74 и как работают jetton minter и jetton wallet (а именно, как jetton minter узнает адрес jetton wallet)

&rey: Вообще как-то так: https://gist.github.com/ProgramCrafter/53fc3a4846397ee5f3f3b25ca3356ab5. (reply to 285942)

odnokasanie: (спасибо) мне кажется то, что надо:   init(jetton_master: Address, master_code: Cell, master_data: Cell, nanoton_per_jetton: Int) {         self.jetton_wallet = calcMyJettonWallet(jetton_master, master_code, master_data);         self.nanoton_per_jetton = nanoton_per_jetton;     }   т.е. передаём адрес мастера, его код и данные, а функция calcMyJettonWallet() возвращает адрес кошелька к контракту для указанного жетона. Правильно же я понимаю?  Теперь вопрос, master_code как мне собирать из закладки Code  эксплорера? ByteCode, RawData? HEX, Cells, Base64? и желательно пример, а то мне сходу не понятно.  и master_data - это метаданные жетона? то же бы как их правильно формировать (reply to 286018)

&rey: Адрес — address("EQB...") Код — cell("te6cck... со вкладки code->base64") Данные — cell("te6cck... со вкладки data->base64") (reply to 286020)

odnokasanie: мне кажется мы не понимали друг друга. В вашем примере вы компилируете ваши же смартконтракты и берете их код и создаете объект контракта из этих данных. Всё равно спасибо. @pcrafter прекрасно объяснил, буду сейчас пробовать (reply to 286016)

Namon: С андроида (reply to 285974)

N: Всем привет  Нужен разраб для миниэпа с нфт и смартами За оплату В лс за подробностями

Amyot: привет! можно потом копию куплю у вас или скинемся на два одинаковых с разным дизайном? ) (reply to 286039)

ᅠ: у highload_v3 кошелька обычного send нет, только sendBatch?

Molodoy Abuzer 3: Во врапере нет, а так можешь по одному отправлять если хочешь (reply to 286043)

ᅠ: все так, я так и делаю, просто не мог понять я не нахожу сенда или его и нет по итогу) (reply to 286044)

Molodoy Abuzer 3: Ну в батч просто клади по одному экшны и все (reply to 286045)

Molodoy Abuzer 3: Объясните пожалуйста, я хочу задеплоить кошелек. Я правильно понимаю, что мне нужно отправить internal сообщение с прикрепленным stateInit на адрес, который хочу задеплоить? Просто в документации совсем разные примеры

Daniel: Обращайтесь в лс (reply to 286039)

/B4ckSl4sh\: https://github.com/nessshon/tonutils (reply to 286050)

Андрей: Лайтсервер вообще не апи, и у него есть свои ключи Поднимается при помощи mytonctrl, при установке выбраться liteserver (reply to 286054)

Андрей: Не уверен что цена сервера лайтсервера меньше стоимости ключа тонапи/тонцентра Но да, подняв лайтсервер можно получать данные из блокчейна, но методы получения разные (при и лайтсервер это разные сущности) (reply to 286058)

Андрей: Не пробовал, напишите как попробуете) (reply to 286060)

Molodoy Abuzer 3: Подскажите где ошибку искать. External формирую верно

Max: в сорцах контракта (reply to 286063)

zishkaz: Подскажите пожалуйста:  Поставил архивную ноду на сервер, успешно смог синхронизировать локальную копию. После перезапуска служб валидатор стал крашиться каждые несколько секунд с крайне понятной ошибкой:  [pid 582400] [time 1737553142] Signal: 6 ------- Stack Backtrace ------- /usr/bin/ton/validator-engine/validator-engine(+0x2c3b29)[0x563274690b29] /usr/bin/ton/validator-engine/validator-engine(+0x2c1d76)[0x56327468ed76] /lib/x86_64-linux-gnu/libc.so.6(+0x42520)[0x7f80d7093520] /lib/x86_64-linux-gnu/libc.so.6(pthread_kill+0x12c)[0x7f80d70e79fc] /lib/x86_64-linux-gnu/libc.so.6(raise+0x16)[0x7f80d7093476] /lib/x86_64-linux-gnu/libc.so.6(abort+0xd3)[0x7f80d70797f3] /usr/bin/ton/validator-engine/validator-engine(+0x2d04b7)[0x56327469d4b7] /usr/bin/ton/validator-engine/validator-engine(+0x2d0b72)[0x56327469db72] /usr/bin/ton/validator-engine/validator-engine(+0x2cfd13)[0x56327469cd13] /usr/bin/ton/validator-engine/validator-engine(+0x25cae6)[0x563274629ae6] /usr/bin/ton/validator-engine/validator-engine(+0x2d99d6)[0x5632746a69d6] /usr/bin/ton/validator-engine/validator-engine(+0x2d77fb)[0x5632746a47fb] /usr/bin/ton/validator-engine/validator-engine(+0x205b56)[0x5632745d2b56] /lib/x86_64-linux-gnu/libc.so.6(+0x29d90)[0x7f80d707ad90] /lib/x86_64-linux-gnu/libc.so.6(__libc_start_main+0x80)[0x7f80d707ae40] /usr/bin/ton/validator-engine/validator-engine(+0x1c9f65)[0x563274596f65]  Из-за регулярных крашей нода не может снова синхронизироваться. Перезапуск служб был связан с установкой ton indexer, но я лишних команд не вбивал и не верю что мог именно в процессе установки сломать стоявшую ноду. На всякий достал конфиг валидатора из бекапа, он тоже не поменял положение, также крашится

potato: Не подойдет, на произвольном конфиге у меня 270$/m выходило (reply to 286060)

Андрей: Посмотрите на потребление памяти при перезапуске ноды (reply to 286073)

🏆: Payment Network Layer 2 release  Там так же будет применяться func или речь о solidity?

Molodoy Abuzer 3: Не пойму как работает эта функция. Не совсем очевидно куда здесь пихается state_init для деплоя. Под капотом в internal сообщение от отправителя добавляется ещё и state_init?

Arseny: всех приветствую мне нужно написать контракт, который на каждую входящую транзу будет отправлять 50% на кошелек А, и оставшиеся 50% на кошелек Б буду очень благодарен если поделитесь аналогичными решениями если они есть, или ссылками на инфу которую мне будет полезно прочесть

&rey: recv_internal, load_uint, load_msg_addr, send_raw_message, /, 0, 64 (reply to 286093)

&rey: В принципе, этим почти и ограничится.

ᅠ: в итоге хайлоад умеет в просто трансфер, в случае отправки пачкой ты кладешь в экстернал меседж интернал месседж, в котором еще интернал месседжи, а получатель - HL кошелек, детали хз, но там юзается storeOutList, который их и хранит. Тем самым самому себе сообщение, которое исполняется.   чтоб просто трансфер осуществить стандартный достаточно было удалить тело со списком, а в интернале указать адресата, не себя (reply to 286047)

/B4ckSl4sh\: У кого-нибудь есть пример как руками сбилдить func?  Делаю  $ func *file* > output.fif $ fift output.fif  получаю [ 1][t 0][2025-01-22 15:24:35.855467][fift-main.cpp:192] Error interpreting file master.fif: master.fif:2: DECLPROC:-?

Daniel: Такое подойдет?   npx func-js ./stdlib.fc ./wallet.fc --boc ./output.boc  https://github.com/ton-community/func-js (reply to 286099)

/B4ckSl4sh\: Сейчас попрбую, спасибо) (reply to 286101)

/B4ckSl4sh\: Хм, ошибка та же

Алексей: func -SPA file.fc > output.fif (reply to 286099)

/B4ckSl4sh\: [ 1][t 0][2025-01-22 15:36:47.960658][Fift.cpp:66] top: <continuation 0x6000000f45d0> level 1: <continuation 0x6000000f4660> level 2: <text interpreter continuation> [ 1][t 0][2025-01-22 15:36:47.960688][fift-main.cpp:192] Error interpreting file output.fif: output.fif:169: B:-?   Ну походу опять какие-то баги фанси) Но спасибо, я так хоть фифт посмотрю (reply to 286104)

Алексей: а во нашёл правильный вариант) https://t.me/tondev/210572 (reply to 286106)

Daniil: Подскажите по свапам.   1. Почему я всегда получаю меньше, чем simulate_swap обещает, но при этом значение из simulate_swap есть в реальной транзакции? Я сделал 3 свапа: Свап 1: CLAY - TON V2 (фото 1) Получил 5.847, обещано было 5.94 При этом в value flow транзакции есть бОльшее значения (5.9), но до меня доходит только 5.847 Свап 2: GODL - TON V2 (фото 2) Получил 5.75, а simulate обещал 5.81, при этом в транзакции оба числа есть  Свап 3: HIF - TON V1 (фото 3) Получил 5.8 вместо 5.85  Подскажите, почему так? Что обещает simulate_swap, почему его значения всегда есть, но до меня полностью не доходят.

Eugene: Я снова с глупым общим вопросом:  В вайтпейпере описаны TON Payments (Payment Channels),   недавно стало известно про fastnet,   а теперь TON Core в роадмапе на 2025 пишут про «Payment Network» и про «сайдчейны с меньшим количеством валидаторов»  Вопрос: правильно ли понимаю, что Payment Network — это переименованные TON Payments, а fastnet — это сайдчейн?

Islam: Мб слипадж (reply to 286109)

Eugene: И второй вопрос вдогонку: правильно ли понимаю, что идея Payment Network совпадает с Lightning Network из биткоина? (reply to 286114)

GGGleb🔺: привет , подскажите пожалуйста как получить текущее время блокчейна в тестах  ?   describe('Blockchain Time Test', () => {     let blockchain: Blockchain;      beforeEach(async () => {         blockchain = await Blockchain.create();         const currentTime = blockchain.now;  // ВОЗВРАЩАЕТ  undefined

Ye: Добрый вечер! Подскажите пожалуйста обычным языком что за модификатор impure inline

Ye: Ой извините impure (reply to 286123)

SweetJesus: impure если у тебя в функции совершается какой-нибудь экшн, например отправляется сообщение или ты резервируешь баланс (reply to 286123)

/B4ckSl4sh\: Смысл похож но не совсем. impure нужно помечать функции, имеющие сайд эффекты или кидающие исключения (reply to 286125)

Tim: Или вообще что-то делающие, но не имеющие ретурна...

SweetJesus: в приведенных мною примерах я не соврал) но да, исключения, модификация стораджа и остальное) (reply to 286126)

Оскар: impure - подсказка компилятору не вырезать вызов этой функции если она ничего не возвращает/результат вызова не используется, нужно как раз таки в случаях выше  inline - вместо дорогого вызова функции, впиндюривает этот код прямо на место вызова - обычно помечаются маленькие функции и/или которые вызываются один раз (иначе размер кода увеличится, что может выйти дороже чем вызов функции) (reply to 286123)

GGGleb🔺: я отправляю тразнакцию ( перевод USDT ) > она создает для моего контракта кошелек USDT > он отправляет на мой контракт нотификашку > мой контракт создает еше 1 контракт > и  в нем срабатывает require()  при этом в тестах я получаю что транзакция прошла успешно и никаких ошибок   Обясните пожалуйста почему не падают ошибки , и как вернуть USDT назад отправителю , нужно вручную писать возврат или оно как то само вернется ?   Потому что в solidity сразу идет возврат средств

Max: само не вернётся (reply to 286130)

&rey: Вручную возврат. Отправитель запросил перевод к вам, соответствующие транзакции уже прошли и завершились к тому моменту, как ваш контракт узнал о входящих жетонах. Никакой автоматической отмены не полагается (как минимум, в баунс-сообщении не будет целого адреса, куда возвращать). (reply to 286130)

GGGleb🔺: получается мне не require() нужно выбрасывать а IF {} ELSE  делать и если не подходит то писать возврат ? (reply to 286132)

&rey: Да. (Мастера фифта могут перехватывать ошибки require, поставив свой обработчик исключений.) (reply to 286135)

&rey: Эм, это вам юридическая помощь, насколько я вижу, нужна, не с разработкой... (reply to 286139)

🏆: Payment Network Layer 2 release  Там так же будет применяться func или речь о solidity?

Daniil: А у ДеДаста есть способ симулировать сделку через API? Передать, сколько монет какого токена на что хочу поменять, и чтоб API мне отдал что-то вроде askUnits?

Max: https://api.dedust.io/v2/routing/plan (reply to 286153)

Alexander: А кто-то может подсказать - с мейннетом всё в порядке. Это только у меня безумно медленно транзакции идут? (перевод 6+ минут)

Vladimir: https://tonscan.org/blocks https://tonstat.us/ (reply to 286159)

Andrey: PX листнулся на дексах) (reply to 286159)

Alexander: спасибо но я там латентности и условного размера очереди не вижу. видимо что-то новое происходит всё-таки (reply to 286161)

Andrey: dton.io 146 TPS :) (reply to 286159)

Sam: привет, мб подскажет кто шлю транзу через го сдк тонконнекта, но не получаю окна подтверждения на ios в тонкипере ведро + деск макос работают без проблем  куда копать? нужно что-то дополнительно делать для иос?

Molodoy Abuzer 3: Да кстати, не думал об этом (reply to 286097)

M: Господа, если есть MVP с “очередной” тапалкой (с особенностями), к какому акселератору стоит идти? У кого то был опыт продвижения проекта будучи единственным разработчиком?

Bohdan: Обычно к ним идут когда уже есть аудитория (reply to 286169)

M: аудитория до 10 тыс (reply to 286170)

Bohdan: Я когда-то пробовал, правда это была не тапалка, а моб приложение, но у всех были требования иметь команду хотя бы с 5 человек, бизнес план и взнос от $10к плюс процент владения проектом. И тогда с тобой могли начинать беседу. (reply to 286171)

Bohdan: Если нет денег и команды, тогда тебе нужен не акселератор, а инкубатор, но там надо конкурс проходить, если прошёл, тебе дают финансирования и команду, но и процент владения ты им больше отдаёшь

M: благодарю за ответ (reply to 286173)

rxcat: я так понял минтлесс выкинули в мусорку? вроде бы он решал как раз такую проблему  https://tonviewer.com/EQBnAX_K81t3KblW5d-P_vq4N1fobi_akymxfobOoBeTMXA2

potato: Что то свое написали (reply to 286177)

Александр: сами можете на изи это все продвигать так то (reply to 286169)

Александр: ВП делайте с такими же и потихоньку конечно но наберете и 100 и 200к а дальше уже буду тприходить)

Jimmy: Может кто-то помочь декодировать ответ который получаешь с метода в контракте?   Делов на 5 минут для знающего человека

M: а фаундеры где сидят?) (reply to 286182)

Александр: по чатикам также) добавишь апку в "списочники" будут сами писать ) (reply to 286185)

Александр: вот я ж тут сижу и еще сотни сидят) (reply to 286185)

Thea: у меня есть опыт как в такте, так и в Fun C, отправлю вам личное сообщение (reply to 285998)

Nikolai: Посоветуйте хороший бот для эирдропа, может у кого то есть готовое решение. Заплатим

Anton: ребят, подскажите плиз. Я верно понимаю, что cNFT - это способ переложить затраты на минт нфт на юзера?  То есть мы минтим кучу нфт, но они не отображаются в блокчейне и всяких гетгемсах И юзеру нужно будет его "активировать", заплатив обычную цену за минт Верно?

Daniel: Да, все так (reply to 286194)

Anton: а есть готовый скрипт как такое заминтить? В репозитории нашел скрипт минта, но там только 1 нфт минтят почему то. Не очень понимаю как мне скажем на 1000 кошельков сминтить

Thea: Я могу предоставить сценарий, но у меня только развертывание 777, но вы можете обновить его в соответствии с потребностями евро. (reply to 286196)

Roachmitchel: какой sendMode при трансфере тон надо выставить, чтобы отправлялся весь баланс

SweetJesus: 128 (reply to 286206)

Namon: Посмотрите сначала требования по железу для лайтсервера, а не бездумно запускайте его на каком-нибудь 1 GPU 1 GB RAM (утрирую, но всё же) (reply to 286060)

Namon: Это вообще откуда инфа? А так, как я понимаю, это ton payments (payment network) из whitepaper (reply to 286088)

🏆: да, из апдейта родмап agglayer ещё писали (reply to 286211)

Namon: Проекты open builders не заморачиваются с ончейн технологиями и не заботятся, что будет происходить с блокчейном Плюс выгоднее сделать контракт для клейма, где можно брать вкусную комиссию за каждое действие Но это уже больше разговоры о морали, чем о технологиях (reply to 286177)

Namon: Ну это работает не так Перед деплоем коллекции нужно составить merkle tree и в контракт коллекции передать merkle root, а каждый юзер в свою очередь будет предоставлять свой merkle proof Деплой такой коллекции сильно отличается от обычной  Пример работы с merkle tree есть в контракте https://github.com/Gusarich/airdrop (reply to 286197)

Namon: Всё равно не оч понял, но ладно (reply to 286212)

Namon: Один из шагов к TON Payment Network - Payment Channels https://github.com/ton-blockchain/payment-channels (reply to 286212)

🏆: https://t.me/tolya/57 — Payment Network Layer 2 release (reply to 286217)

Namon: Значит речь об этом  https://t.me/tondev/286217 (+ инфа из whitepaper) Хотя Анатолий в подкасте говорил про ещё один способ с сайдчейнами и воркчейнами, поэтому не совсем понятно что он имеет ввиду. Но если судить чисто по этой строчке, мне кажется, что первый варик (reply to 286218)

— 2025-01-23 —

Max: Стоит вправить руки создателям тех сервисов, которые не принимают адрес в любом из форматов (reply to 286236)

Namon: Bounceable & non-bounceable (reply to 286243)

&rey: Эт да, особенно когда не поддерживают TON DNS (или его поддомены, которые вообще-то по стандарту обязаны работать так же хорошо). (reply to 286241)

&rey: Напомню, что какой-нибудь sedov.t.me для любого оффчейн приложения — тоже адрес в тоне. (reply to 286243)

&rey: Ну, хранится raw адрес, а как его интерпретировать — вроде какая-то дополнительная запись может быть в этом отношении / ИЛИ сервис может сам понять, можно ли выплаченные тоны ему обратно отразить. (reply to 286247)

Max: Чаще всего речь будет идти о двух формах:  EQ... - bounceable  UQ... - non-bounceable  Это если не вникать в testOnly и воркчейн (reply to 286247)

Mr. Friedrich: Приветствую

Namon: Говорят про разные сервисы, в том числе dexscreener Причём здесь конкретно tonviewer? (reply to 286260)

Artem: Всем привет) снова нужна помощь, создал свою монету используя этот контракт https://github.com/ton-community/tact-jetton чтобы эмулировать работу с USDT, сделал mint но пересылки с одного адреса на другой транзакции не проходят, подскажите куда копать? https://testnet.tonscan.org/jetton/kQAbGgXybuuTXvN42SynYxLsjHmP-gGoHnBk2bEpwJX6XCEb#transactions  https://testnet.tonscan.org/address/0QBoj5A1Wx0oy8Db2VA3Njyqx6mzP224U4Ts8Om8KDZ5zeyU

GGGleb🔺: Привет - пытаюсь верифицировать контракт   загружаю файлы которые из tact сбилделись в funC  получаю ощибку   1. Можете что то посоветовать по верификайии в чем у меня проблема ?  1. Где настройить конфиг чтобы  файлы билдились в funC версии 0.4.6 (сейчас  0.4.4)

/B4ckSl4sh\: Загружаете только .pkg файл (reply to 286274)

GGGleb🔺: Вроде ок - спасибо (reply to 286275)

GGGleb🔺: после верификации где удобнее смотреть код и использовать функции ? на https://testnet.tonscan.org/ или https://testnet.tonviewer.com/  или может еще где то ?  и как быстро появится код на странице контракта ? потому что пока нет (

GGGleb🔺: по прежнему вижу   это нужно подождать или что то не так ?

GGGleb🔺: Мастер (reply to 286283)

GGGleb🔺: Хотя, там только 1 файл . Pkg, там мастер и воллет вместе

Molodoy Abuzer 3: Подскажите, я формирую boc для отправки external сообщения. Есть ли возможность после его отправки получить ответ в виде аля айдишника транзакции чтобы отслеживать ее статус? Или просто остаётся периодически запрашивать транзакции аккаунта с определенным лимитом?

&rey: Берите хеш этого экстернала. Много какие API понимают сразу и могут отследить. (reply to 286294)

GGGleb🔺: валятся переводы жетона   https://testnet.tonviewer.com/transaction/9038b3abc909bfaafa77942b3e60bd1cab5aa2873a619a1fdb842425667a589d  с ошибкой 40  можете подсказать как чекнуть что именно не работает ? и почему ?

GGGleb🔺: Почему когда хочу перевести токен , такая большая комиссия ? Есть способ уменьшить ? Потому что сама транзакция на много меньше требует

internet: ну что ребят мне кто нибудь может помочь с объяснением как использовать ненастоящие деньги с testnet...

internet: у меня уже тонов не осталось на кошеле.

internet: что за очередная проблема 🙁

Molodoy Abuzer 3: faucet.ton (reply to 286301)

X1ag: вы наверное в мейннет подключены сейчас (reply to 286300)

internet: да нет, все таки в тестнет

X1ag: Preferences -> Dev Menu и нажимаете select network  у вас включится тестнет и уже на этот адрес берете токены из @testgiver_ton_bot (и этот кошелек, собственно, подключаете куда нужно)

internet: сейчас попробую

internet: хахахах я получается тоны с мейнета кидал в тестнет

User<7062442470>: Всем привет. Есть примеры клейма нфт(только что созданного). То есть будет создана новая нфт и пользователь заберёт за x TON + комиссия. Использую библиотеку tonutils (python)

Aziz: Привет! Подскажите пожалуйста в NodeJS как получить Мастер Адрес Жетона который в транзакции? Мне нужно сопоставить что прислали именно USDT     if (op === 0x7362d09c) { //…   body.skip(64); // Пропускаем query_id  const jettonAmount = body.loadCoins();  const jettonSender = body.loadAddressAny();  const originalForwardPayload = body.loadBit() ? body.loadRef().beginParse() : body;  const forwardPayload = originalForwardPayload.clone();   // Верификация источника сообщения  const runStack = (await client.runMethod(blockSeqno, jettonSender as Address, "get_wallet_data")).reader;  console.log("runStack", runStack);  // runStack.skip(2); <- Вот тут ошибка, runStack = TupleReader { items: [ { type: 'int', value: 97026n } ] }  const jettonMaster = runStack.readAddress();  const jettonWallet = (    await client.runMethod(blockSeqno, jettonMaster as Address, "get_wallet_address", [{ type: "slice", cell: beginCell().storeAddress(txAddress).endCell() }])  ).reader.readAddress();

internet: пасибо (reply to 286307)

Roma: Или у жетона есть метод для получения. Или tonApi (reply to 286314)

&rey: Вычисляется или локально, или добровольно лайтсервером. (reply to 286322)

odnokasanie: (привет, подскажите пжлст)  не могу разобраться почему не сходятся адреса:  1. посчитанный внутри контракта используя fc-функцию, как в примере.  2. посчитанный адрес внутри теста:   jettonMasterUSDTContract = blockchain.openContract(await SampleJetton.fromInit(deployer.address));  const jmUsdtCode = jettonMasterUSDTContract.init?.code!!; const jmUsdtData = jettonMasterUSDTContract.init?.data!!;  factoryOutlet = blockchain.openContract(await FactoryOutlet.fromInit(1n, jettonMasterUSDTContract.address, jmUsdtCode, jmUsdtData));  factoryOutletUSDTWalletAddress = await jettonMasterUSDTContract.getGetWalletAddress(factoryOutlet.address);    сравниваю выводом emit() из контракта и в консоль в тесте (factoryOutletUSDTWalletAddress). (reply to 286018)

🏆: можно ли добавить комментарий при пересылке nft? я так понимаю он попадёт на адрес смартконтракта конкретного кошелька?

potato: Можно, он попадет на тот адрес куда будет направлен transfer_notification (reply to 286332)

🏆: наперёд его толком не узнать я так понимаю через апи, если он не инициализировать допустим (адрес sc  жетона/нфт). (reply to 286333)

potato: А зачем на пустой адрес пересылать nft? (reply to 286334)

potato: И как вы его укажете если заранее не знаете его?

Ye: Добрый вечер всем ! А как в FunC сделать приватный метод что бы до него никто не смог достучатся только сам контракт ? Просто не добавлять к нему method_id ?

User: Не добавляйте method_id, чтоб он не стал get методом, и логически его ограничьте, условно не делайте к нему op-cod'ов, вот и все (reply to 286337)

🏆: ну я так понимаю для каждой коллекции свой адрес? основной адрес поидее тоже получает какое-то сообщение (reply to 286336)

Victor: Это можно реализовать с помощью смарт контрактов (reply to 286312)

🏆: nft gifts, это у каждого типа подарка свой контракт или общий? какая обычно практика лучше?

🏆: Может ли контракт слать encrypted message адресу? Очевидно, что может, но чтобы оно обозначалось в tonviewer как encrypted message

— 2025-01-24 —

🏆: что здесь не так? рандомное мемо bip39

Andrey: потому что рандомное не подходит. Нужно чтобы оно удовлетворяло условиям:  https://github.com/ton-blockchain/ton/blob/1b7c46f4961422d99ededd576484dfe235220af8/tonlib/tonlib/keys/Mnemonic.cpp#L68 (reply to 286454)

🏆: а что оно такое isBasicSeed в 2-х словах? Я так понимаю какая-то энтропия. (reply to 286455)

Andrey: Достаточно посмотреть в реализацию (reply to 286460)

Dmitry | backend4you.ton: https://docs.ton.org/v3/documentation/smart-contracts/message-management/internal-messages#messages-with-encrypted-comments (reply to 286440)

ByteNode: Последнее слово должно быть выбрано на основе контрольной суммы всех остальных (reply to 286454)

Алексей: только вряд ли оно получится зашифрованным, если контракт будет генерировать его, то любой сможет его прочитать при желании (reply to 286440)

Max: Кстати, MyTonWallet и Tonkeeper умеют в bip39 (reply to 286454)

D.K.: Здравствуйте. Можно вопрос, а что, разве Ton Connect только для веб приложений?)

Tim: не только (reply to 286473)

D.K.: Спасибо! (reply to 286474)

♾: Ищу разработчика для интеграции токена TON в Telegram-бота. Подробности в ЛС.

Nikolai: Исключите кидалу @yasirton из группы

Андрей: А смысл, у таких всегда есть второй аккаунт (reply to 286479)

🏆: Нужно попробовать, но мне кажется так небезопасно. Я так понял связано с простыми числами/энтропией. Хотел сделать самостоятельно генерацию на другом языке. Видимо, надо попробовать что-то готовое. (reply to 286470)

Nikolai: Давай ты не будешь пиздеть, скинул мне бесплатного спам бота, а мы договаривались о другом (reply to 286485)

Nikolai: Тебя, клоуна, просто нужно отсюда кикнуть и будет всё в порядке (reply to 286487)

Namon: Имхо, клоуном только Вы себя выставляете здесь (reply to 286488)

D.K.: Не разводите Флуд (reply to 286488)

Namon: Все свои срачи выносите в ЛС, а не сюда

Daniil: Всем привет. А у OMNISTON есть API-запросы/Python SDK, чтобы запрашивать Quote по той или иной паре? Я нашел вот эту страницу в документации - https://docs.ston.fi/docs/developer-section/omniston/omniston-swap но не понимаю, а в методах, как и куда что отправляется?

Иван: кто хорошо миниаппы пишет?

Антон: Мой вам совет, используйте фриланс биржи. По чатам меня уже 3 раза кинули скамеры. Зашел на кворк, за 20к сделали все за неделю. (reply to 286495)

Иван: эхх

GGGleb🔺: Привет  почему когда делаю транзакцию через tonkeeper  Отправляю жетоні своего контракта на другой кошелек  так в транзакции комиссия больше 1 ton    как ее уменьшить ?

Victor: Скинь ссылку (reply to 286505)

GGGleb🔺: https://testnet.tonviewer.com/kQB6gn4O7DE7scFmQUycwP9u-l_cwFoDK212wj3UHi-_ixcd/jetton/kQDhgSFQR5V2DwOdy9QhQMsduqqGmy8xcVtuQ24mO7mZaz1- (reply to 286507)

Victor: Ты использовал стандартный код смарт контракта Jetton_wallet ? Точно отправляешь через tonkeeper или с помощью кода формируешь и подписываешь в tonkeeper ? (reply to 286508)

Victor: на первый вопрос тоже ответь (reply to 286511)

GGGleb🔺: а стандартный это какой , .я брал тут https://github.com/ton-core/tact/tree/main/stdlib/libs/jetton (reply to 286514)

Max: По какой-то причине не вернулись эксцессы обратно, а осели на жеттон воллете получателя (reply to 286515)

GGGleb🔺: 1 осели там  2 почему вообще он передает 1 тон туда не понятно (reply to 286516)

Victor: ага и это странно (reply to 286516)

GGGleb🔺: может есть какойто более стандартный код жетона ? я б заюзал

Oleg: Более стандартный, нежели USDT? Куда уж более (reply to 286519)

GGGleb🔺: ну это я сам придумал USDT написать : код не копия USDT я думаю (reply to 286520)

Victor: https://github.com/howardpen9/jetton-implementation-in-tact/blob/main/sources/jetton.tact   это оф доке, должно подойти (reply to 286519)

GGGleb🔺: ок попробую єтот после обеда  а почему в одних случаях Jetton а в одних Token ?? (reply to 286522)

&rey: Каноничное название в тоне – жетон, aka jetton, aka fungible token (взаимозаменяемый токен). (reply to 286524)

Blotho: Всем привет! Есть идея создать токен на TON и провести пресейл. Как обезопасить проект и минимизировать риски? Может, есть лучшие практики или советы?

GGGleb🔺: Я про єто (reply to 286525)

GGGleb🔺: У чата gpt спрашивали ? Єто теоретический вопрос (reply to 286526)

Victor: Все вопросы касающиеся такта лучше задавать в этом чате https://t.me/tactlang. Мне кажется тебе там помогут. (reply to 286527)

GGGleb🔺: Тут funC ? (reply to 286529)

Victor: Не совсем (reply to 286530)

GGGleb🔺: Fift ?

GGGleb🔺: Assembler ?

Max: Лучше спросить у авторов имплементации (reply to 286527)

&rey: Здесь солянка из всего.   Что касается того вопроса – ну, исторические причины, думаю. (reply to 286530)

Blotho: Да ) но нужен практический опыт и конкретные советы 😬 планирую выпустить токен для музыкального проекта , хочу понять какие инструменты лучше использовать в TON ? , есть ли проверенные разработчики или готовые решения для проведения пресейла , буду очень благодарен 🤝 (reply to 286528)

Mr: Всем, привет! Как можно понять по in_msg, что прошел перевод тона Может какой нибудь опкод? Или может быть только опкод 0x00000 и без опкода?

Victor: интернал сообщение всегда несет какое-то количество ton, чтобы покрыть комиссию. опкод в нашем случае лежит в message_body. оно может быть пустым или заполненным. (reply to 286542)

Victor: тут найдешь развернутый ответ https://docs.ton.org/v3/documentation/smart-contracts/message-management/sending-messages (reply to 286542)

Mr: ну для перевода жеттона опкод понятен, точнее для нотификашки а вот как мне понять, что на мой кош пришел тон, типо был чистый трансфер (reply to 286548)

Mr: ну это я понимаю, но я хочу отделить обычный трасфер, от чего-то еще (reply to 286546)

Mr: будет типо opcode null или opcode 0x00000000

Max: И то и то верно может быть признаком трансфера тон  0x00000000 — это текстовый комментарий (reply to 286552)

Mr: то есть если опкод null или 0x000000, то это трансфер или еще какие признаки? (reply to 286554)

Max: Ещё может быть зашифрованный коментарий, у него свой опкод  Имхо, неправильный подход к решению задачи (reply to 286555)

Mr: а какой правильный? (reply to 286556)

Victor: его боди будет пустым. если будет комментарий, то опкод будет 0x00000000.  вот пример как ты можешь обработать сообщение:   if (in_msg_body.slice_empty?()) {         return ();     } else {         op = in_msg_body~load_op();         if (op == 0) {            return ();          }     }    чисто пример (reply to 286550)

Mr: если боди пустой или опкод 0x000000, то это траснфер? (reply to 286558)

Victor: что вы имеете ввиду под "траснфер" (reply to 286559)

Mr: ну я вот со своего кошелька перевожу вам токен (reply to 286560)

Victor: TON или jetton ? (reply to 286561)

Mr: именно тон, по жеттону понятно) (reply to 286562)

Victor: да (reply to 286559)

Max: Обрабатываете в приоритете жеттон, всё остальные считать тон трансфером (reply to 286563)

Max: И никаких костылей

Molodoy Abuzer 3: Подскажите пожалуйста по следующему: у меня есть хеш экстернала, по которому я могу посмотреть статус транзакции, однако я смотрю статус транзакции, отправленной с хайлоада, а там контракт так спроектирован, чтобы не было ошибок при action phase, поэтому эта транза всегда будет с exit code 0, потому мне надо чекать статус интернал перевода себе же. Подскажите могу ли я узнать хеш этого интернала или мне придется делать запрос с хешом экстернала чтобы в outMsgs уже получить хеш интернала?

Mr: ага, транзакций то полно, мне потом надо по базе получателя так что чем больше отфильтрую, тем лучше) (reply to 286567)

Victor: https://gist.github.com/mr-tron/a4b3e8eff3a982e3426f6397eb9a2450 (reply to 286568)

Molodoy Abuzer 3: Просто я пробовал получить хеш интернала, но это не прокатило, тонапи говорит что транзакция не найдена, подозреваю потому что её хеш зависит от предыдущей транзакции (экстернала) (reply to 286568)

&rey: Допустим, я вам посылаю 1 микроUSDT с форвардом 150 тон. Вы хотите этот форвард проигнорировать? (reply to 286550)

Mr: да (reply to 286572)

&rey: Скорее всего, придётся. А почему вам важен exit code – случается, что переводы проваливаются? (reply to 286568)

GGGleb🔺: попробовал етот код -  комиссия в норме но падает транзакция https://testnet.tonviewer.com/transaction/be814acc947670b1cfe889c36fead3485b9135f2ad59fee3ce62e1f454d8b16c (reply to 286522)

GGGleb🔺: нет наверное потому что именно после деплоя сразу сделал а он не успел подгрузится - ща попробовал - работает (reply to 286581)

Victor: ошибка 130 = Invalid incoming message — there’s no receiver for the opcode of the received message. (reply to 286581)

Victor: супер (reply to 286582)

GGGleb🔺: если в контракте  наследнике не выполнилось условие  и нужно вернуть USDT которые остались на мастер контракте   как лучше отправить запрос на возврат с наследника -> мастеру?   send(SendParameters{  }); или self.reply(beginCell().storeUint(ERR_ALREADY_INITIALIZED, 8).endCell());

X1ag: подскажите плз как рассчитывать комсу за действие? Самому или есть какие то функции, константы и пр?

X1ag: почему в коде некоторые(возможно все) обозначают op коды, ошибки и прочее через :: ? Почему так? Ведь можно условно через _ (нижнее подчеркивание) называть переменные

X1ag: или вот функции например

Oleg: Это пошло из плюсов, namespace и прочие иерархии выделять. (reply to 286596)

X1ag: а, понял, чисто нейминг такой, никак на работу не влияет? (reply to 286597)

rends_east: Никак (reply to 286598)

Oleg: абсолютно никак (reply to 286598)

X1ag: благодарю)

Egor: Привет, как можно в мини-апе зафиксировать футер и хедер чтобы они не ходили когда свайпаешь вверх/вниз?

&rey: Верю, что в @devs_cis это описано. (reply to 286611)

GGGleb🔺: На сколько дишевле транзакции если жетон написан на tact и на funC ?

Victor: Func (reply to 286616)

GGGleb🔺: На сколько дешевле ? Вот тот жетон который ты днем советовал, стоит 0.042 за транзакцию (reply to 286621)

Victor: С какой целью спрашиваешь ? И какая перед тобой задача стоит ? (reply to 286622)

GGGleb🔺: Готовлюсь писать проект типа лаунчпад, изучаю что лучше взять для написания.  Задача чтобы и по комиссиям не фул прайс , и по сложности не очень (reply to 286623)

GGGleb🔺: Вот токен развернул,теперь задача реализовать много мелких транзакций с этим токеном (каждый пользователь например 30 транзакций в день по 0.042 комиссии это 1.26 тон) ,  на сколько выгоднее на funC будет это сделать ? (reply to 286623)

nikita: Всем привет!  Подключаю tonConnect, и возникает такая ошибка  версии библиотек совпадают   import './App.css'; import React from 'react'; import Transaction from './components/transaction/transaction'; import { TonConnectButton } from '@tonconnect/ui-react';  function App() {   return (     <div className='App'>        <div class="container">           <TonConnectButton />           <div class="wallet-id">UQB6K2w...xd4-Rda</div>           <div class="balance">+400.23$</div>           <div class="balance-text">all time</div>           <Transaction/>        </div>     </div>   ); }  export default App;

Victor: Тут нужно ловить баланс:   Есть такт простой и понятный, но есть свои нюансы. К примеру комиссия, но разница не значительная.  Есть func прекрасный язык, но чтобы в нем разобраться нужно повозится. Также можно допустить много ошибок. (reply to 286624)

Victor: Комса зависит от многих факторов. (reply to 286625)

M: Там вроде должен быть TonconnectProvider в корневом уровне (reply to 286628)

nikita: С этим тоже вылезает( (reply to 286631)

Victor: Если ты правильно все настроишь, не будешь отправлять нотификацию и будешь получать возврат тонов с транзы, то комиссия будет около 0.004 ton (reply to 286625)

Victor: https://tonviewer.com/transaction/578c44f52b77ce0fcb6a4741df97f3a9e57e96112f020d45892b10b087adb6e4?section=trace (reply to 286635)

GGGleb🔺: В 10 раз меньше получается 🤠 (reply to 286636)

Victor: Не-а, у тебя неправильно отправлялось сообщение, где ты использовал ск на tact. Почему ? Мне лень разбираться, но где-то там ошибка (reply to 286637)

GGGleb🔺: Ну в коде который ты дал, сейчас на тестнете 1 транза стоит 0.042 ты говоришь на funC можно сделать 0.004, получается в 10 раз дешевле . Нет ? (reply to 286638)

odnokasanie: Коллеги, для тестов своего контракта под blueprint добавил в проект usdt-minter и usdt-wallet взяв fc-код из usdt mainnet.  Добавил в contracts - всё компилируется, но почему-то во wrappers/ ts-файлы классы содержат только sendDeploy(), createFromConfig() и createFromAddress() и в папке build по этим minter и wallet только json-файлы.  Не пойму как сделать, чтобы создавались полноценные ts-классы и т.п.

Victor: Нет, если ты более пробно изучишь цепочку транзакции. То увидишь, что у тебя нету сообщения excess, которое возвращает остатки от комиссии. Тон так устроен, что не возможно просчитать точно комиссию, поэтому отправляется больше, а остатки возвращают. В твоем случае этого не произошло, возможно ошибка в контракте.   Я не пишу на tact, поэтому лучше про контракт спроси в том чате.  Также у тебя очень базовые вопросы и я тебе совету подробно прочитать ton docs перед тем как начать создавать приложение, которое взаимодействует с блокчейном (reply to 286639)

GGGleb🔺: Все у меня возвращается ) вроде бы ) (reply to 286641)

Vlad: Всем привет! На какой сервис залить meta.json item.json для получения ссылки?   const OFFCHAIN_CONTENT_PREFIX = 0x01;     const string_first = "https://s.getgems.io/nft-staging/c/628f6ab8077060a7a8d52d63/"; // Change to the content URL you prepared     let newContent = beginCell().storeInt(OFFCHAIN_CONTENT_PREFIX, 8).storeStringRefTail(string_first).endCell(); https://github.com/getgems-community-tact/nft-template-in-tact/blob/278a196d9d903a45a2aca5d5f48b405bb48d60d1/scripts/deployNftCollection.ts

Victor: Крч, проведи пару экспериментов и выбери, что тебе подходит (reply to 286648)

Victor: Куда угодно. Самый простой способ на GitHub (reply to 286649)

Оскар: врапперы на func надо писать самому (reply to 286640)

X1ag: подскажите пожалуйста, в чем может быть проблема? Хочу задеплоить контракт в тестнете с помощью тонконнект, подключаюсь через ссылку, которую пишут в терминале. Использую блюпринт

— 2025-01-25 —

Aziz: Кто знает как получить publickKey из privateKey?

Aziz: не хочется тащить в базе и то и другое

User<5556796111>: dm (reply to 286672)

Оскар: использовать либу с реализацией используемого алгоритма (предполагаю что Ed25519), если используете либу для работы с тоном, вероятней всего в ней уже есть нужные функции (reply to 286672)

Aziz: прихожу к выводу что легче mnemonic тащить в базу всем спасибо за помощь

Оскар: не совсем понимаю почему легче, из мнемоники получаем приватный ключ и теперь мы на том же месте (reply to 286676)

Aziz: import { mnemonicToPrivateKey } from "ton-crypto";      const keyPair = await mnemonicToPrivateKey(newmnemonic);     const publicKey = keyPair.publicKey;     const secretKey = keyPair.secretKey;

Aziz: + если несколько блокчейнов поддерживаются то один мнемноник для разных сетей

Оскар: import { keyPairFromSecretKey } from "ton-crypto"; на вход уходит приватный ключ - получаем тот же объект что выше (reply to 286680)

Oleg: Это ужасная идея (reply to 286681)

Aziz: почему? (reply to 286683)

Oleg: Потеряете один кошелек - потеряете вообще все (reply to 286684)

Aziz: так они в одном месте хранятся все ровно

Oleg: Мнемоник может утечь не только из базы

Aziz: и конечно они в зашифрованыом виде хранятся

Aziz: Главное правило для безопасности таких кошельков - не хранить на них средства, только перегонять на другие счета, которые в проекте не хранятся

author: Пробую запарсить нфт подарков по тонапи, - в объекте ссылки на preview выдают одну и ту же звезду вместо подарков. Тем временем в миниаппах реализовано уже. Может кто объяснить почему img невалидные?   Я посмотрел на гг, что метаданные централизованы, предположил что те кто в миниаппах уже сделал юзают апи из тг.   Ужасный поход к переводу подарков в нфт..метаданные пустые, картинки не валидны, вместо типов подарков в метадате выделили в отдельные коллекции.

Namon: @devs_cis @twa_dev @tmabuild (reply to 286694)

author: Спасибо, однако сервис я делаю на тондомене и использую тонапи, до миниапок в тг мне ровно (reply to 286695)

Namon: Ваш вопрос о "валидности img" Это вопросы по Telegram (reply to 286696)

author: О валидности в нфт на тон, а не в тг)

Namon: Получайте инфу о гифтах не как по нфт, а как по обычному адресу Хз что ещё сказать Если все сервисы видят все данные, а тонапи и Вы нет, значит проблема либо в Вас, либо в тонапи. Дальше ищите проблему сами (reply to 286698)

author: Гетгемс,маркетапп работают уже с нфт подарков, в них валидный img. Вопрос об этом, тонапи отдаёт объект , ссылки выводят на звезду..

Namon: Значит не используйте в данный момент тонапи (reply to 286700)

Namon: Есть toncenter

author: Гениально. Помогли. (reply to 286702)

Vladimir: Только вчера запустили, дайте настояться. (reply to 286692)

author: В тонцентре на v3 отдаёт валидный content: json, в котором можно взять url на img

Namon: "Отзывы разрешений" не могут происходить в блокчейне, так как они в принципе не присутствуют в блокчейне (reply to 286706)

Namon: Просто после удаления из списка это приложение не сможет просить подписать транзакции (не будет автоматически открываться в кошельке транзакция / просьба подписать)

Namon: Про метамаск я не знаю, но на 90% уверен, что не нужно И мы вроде про тон говорим (reply to 286708)

X1ag: У меня у одного такая проблема? (reply to 286660)

Namon: Можно чуть побольше traceback? (reply to 286711)

Vladimir: А точно testnet? (reply to 286711)

Оскар: я как понимаю ты говоришь про апрувы контрактов токенов и нфт - в тоне такого нет, никакие апрувы не нужны перед трансфером, свопом и тд (reply to 286706)

X1ag: Да (reply to 286714)

X1ag: Это как?) (reply to 286713)

Оскар: у тебя где-то в коде Address.parse("here address"); на самом деле рекомендую научиться читать стек трейс и бежать на строчку которую он показывает, иначе в этот чат на каждую ошибку рантайма придётся бежать (reply to 286711)

Namon: Полное сообщение об ошибке (reply to 286718)

X1ag: сорян, затупил (reply to 286720)

X1ag: вы определенно правы, но я подумал это что то с пакетами, а не моим кодом. Спасибо за помощь (reply to 286719)

Namon: Ну да, видимо что-то такое https://t.me/tondev/286719 (reply to 286721)

Namon: Короч говоря, в тон никакие разрешения при работе с ton connect в бч не сохраняются => ничего и удалять из бч не нужно (reply to 286722)

Dmitry | backend4you.ton: Смотрю перевод USDT жетона - отправлено 0.063 тон газа, возвращен остаток 0.053 - получается  перевод стоил 0.01 (reply to 286625)

Андрей: Кстати откуда пошла практика каждый раз возвращать сдачу с отправки жетона Почему не сделать накопление сдачи и возврат раз в N отправлений? Так бы можно было делать меньше транзакций, тем самым экономя на комиссиях возврата (reply to 286727)

&rey: Ну, не все же трейдят жетоны — если раз в месяц приходят, то та самая сдача будет что, через полгода?) (reply to 286729)

&rey: Плюс неясно, кому именно вернуть собранную сдачу — учитывая то, что обычно возвращает её жетон-кошелёк получателя по какому-то указанному отправителем адресу.

Dmitry | backend4you.ton: Вам перевели 10 человек жетоны. Почему сдачу первых 9 должен получить 10й? (reply to 286729)

Thea: как мы конвертируем наши тонны кошельков, получателя и «от» кошелька в кошелек Jetton?

Dmitry | backend4you.ton: Адреса - надо дергать гет метод жетон-мастера. (reply to 286738)

Daniil: Как понимать причины провала транзакций на ТОНе? Есть вот транзакция - https://tonviewer.com/transaction/41c1cfb58479476aeb76de175d1debb0486081676f85c9010b5ab1400312ff02 У нее провал, exit_code = 47 а что это значит? В TVM exit codes такого нет, у STON.fi тоже

Victor: это кастомная ошибка jetton_wallet (reply to 286740)

Daniil: balance_error? что это может значить? запросил свап на число монет бОльшее, чем имею? (reply to 286741)

Victor: можно и так сказать. вы пытаетесь отправить jetton больше чем у вас есть (reply to 286742)

Daniil: ок, спасибо (reply to 286743)

Viacheslav: какой у функции возвращаемый тип данных? и почему написано _ вместо () ?  _ get_proxy() method_id {     load_base_data();     return ctx_proxy; }

Molodoy Abuzer 3: Гарантируется ли последовательность выполнения сообщений в рамках контракта? Ну например я послал 10 экстерналов на хайлоад с батчами переводов. Породят ли эти экстерналы 10 последовательных транзакций?

Dmitry | backend4you.ton: У вас ключевое слово «хайлоад». Вам надо смотреть внутрь кода контракта. Во-первых хайлоадов несколько есть. И как минимум некоторые из них НЕ гарантируют. (reply to 286750)

NBRT: Всем привет. Подскажите, как сделать так, что бы мини апп открывался на весь экран.

Victor: @devs (reply to 286753)

D.K.: Это Вам в чат ТМА Build (reply to 286753)

NBRT: Спасибо (reply to 286754)

Victor: Также советую воспользоваться поиском в чате и сразу найдете ответ, так как этот вопрос очень часто задают (reply to 286756)

𝐁 𝐄 𝐍 𝐓 𝐘 𝐂 𝐈 𝐀 𝐆 𝐄 ᵀᴼᴺ: Господа, а здесь есть кто-нибудь из тон кор, кому можно отправить возможные критические баги на проверку?

Victor: критические баги чего ? (reply to 286766)

𝐁 𝐄 𝐍 𝐓 𝐘 𝐂 𝐈 𝐀 𝐆 𝐄 ᵀᴼᴺ: Работы пулов (reply to 286767)

Oleg: Впервые слышу, что команда ton core отвечает за какие-то пулы (reply to 286768)

rends_east: Каких пулов? (reply to 286768)

D 3 B X 1: I need a sample code to check how many Notcoin a wallet has

final: 🫰 (reply to 286773)

𝐁 𝐄 𝐍 𝐓 𝐘 𝐂 𝐈 𝐀 𝐆 𝐄 ᵀᴼᴺ: Стейбл/тон (reply to 286771)

𝐁 𝐄 𝐍 𝐓 𝐘 𝐂 𝐈 𝐀 𝐆 𝐄 ᵀᴼᴺ: Почему  нельзя ответить  без лупы сарказма, откуда такая надменность Ладно, буду ждать у моря погоды (reply to 286770)

rends_east: Какой dex? Вы не даёте конкретики (reply to 286775)

Оскар: тут и нет никакого сарказма - тон кор не имеет никакого отношения к пулам на дексе, это вам нужно обращаться к тому дексу, через который деплоили данный пул, а так как вы не сообщаете что за декс - увы, помочь не можем (reply to 286776)

ST-⭕️52-🅰️S: у mytonwallet бридж лежит или это неверная статистика?

Viacheslav: Какие есть ораклы в тоне? Могет ли они например предоставлять данные погоды итд в контракт?

Vlad: Всем привет! Метаданные nft item на гетгемс не прогружаются. Как решить проблему? Заранее спасибо)  https://github.com/getgems-community-tact/nft-template-in-tact/

Vlad: import { beginCell, contractAddress, toNano, Cell, Address } from "ton"; import { NetworkProvider } from '@ton-community/blueprint'; import { NftCollection } from "../wrappers/NftCollection";  export async function run(provider: NetworkProvider) {     const OFFCHAIN_CONTENT_PREFIX = 0x01;     const string_first = "https://green-real-raccoon-214.mypinata.cloud/ipfs/bafybeiduhdakilkzxtr6ppdogdusrk6qstdanczzhjwqvknfl4lvk5ixqe/";      let newContent = beginCell().storeInt(OFFCHAIN_CONTENT_PREFIX, 8).storeStringRefTail(string_first).endCell();      let owner = provider.sender().address!;     let collection = provider.open(await NftCollection.fromInit(owner, newContent, {         $$type: "RoyaltyParams",         numerator: 350n, // 350n = 35%         denominator: 1000n,         destination: owner,     }));     await collection.send(provider.sender(), {value: toNano("0.1")}, "Mint");     await provider.waitForDeploy(collection.address); }

final: Есть у кого код как деплоить 1 контракт на разные адреса через tonweb?

&rey: А откуда берётся адрес контракта в тоне? (reply to 286793)

User<7062442470>: Как с помощью вебхуков TonApi получить цену жетонов?(примерно 100)

User<7062442470>: Цель: максимально быстро отследить изменение цены токена

Ivan: сделай вебсокет (reply to 286796)

X1ag: Только если специальный id прокидывать в стейт инит контракта (reply to 286793)

User<7062442470>: Почему wallet.dedust_swap_ton_to_jetton берет тоны но не возвращает жетоны? address=EQATymaCyg3ZKy3T6VNRSfNMA4CJuNpKDaCl5WJPiVn5zqxV amount=0.01  Tx hash: 65ea344cdd5e6fcfc197d464955d3250bb5e89ccbfd08060a99a7cfc095640ad

&rey: Своп такого размера никто и не обработает, кажется. (reply to 286804)

User<7062442470>: Я пробовал и 0.1 (reply to 286805)

&rey: А, так... У вас в транзакции просто пула или чего там не существует.

User<7062442470>: Как не существует? Вот адрес выше, должен быть (reply to 286807)

odnokasanie: Взял контракты из https://github.com/ton-blockchain/stablecoin-contract в свой проект на blueprint  Контракты успешно компилируются, деплоятся в тесте, а вот минт не могу от них добиться.  Скопировал код из тестов исходного репозитория: https://github.com/ton-blockchain/stablecoin-contract/blob/62f661d79012a259c0110dce611dafc31359be78/sandbox_tests/JettonWallet.spec.ts#L433C9-L434C1    const mintResult = await jettonMinter.sendMint(deployer.getSender(), deployer.address, initialJettonBalance, null, null, null, toNano('0.05'), toNano('2'));   на втором сообщении mint ошибка actionCode:37, в логах:   not enough grams to transfer with the message : remaining balance is 1045396400ng, need 2000851200 (including forwarding fees)   Изменение total_ton_amount с 2 на любое другое число не исправляет ошибки, а меняет цифры в ошибке, т.е. всегда не хватает тонов.  Что не так?

Denis: Они забанили весь хецнер на своём бридже. А виртуалка с мониторингом там болтается. (reply to 286779)

Denis: Как следствие, если у вас впн в хецнер, то mtw не работает

sd: По схеме видно, что он совершил своп (reply to 285407)

— 2025-01-26 —

Freez: Кто-то знает как можно получить комментарий из входящей транзакции? Смог получить комментарий из исходящей транзакции и в целом проблем нет.. При этом в обозревателе комментарий есть в payload в обоих случаях  / Пишу на Python

User: Скиньте код или api через которое работаете (reply to 286826)

Freez: Вот api: AEEUUOSUF4SIUMYAAAAISIDNFRBAI2RPTV2P2BKTG363NCMMUAUIZ4W6C4IKMG2RTLCUOYA (reply to 286827)

User: Ну теперь перегенерируйте ключ, и скажите вы работаете через tonapi или toncenter?  p.s. в общем шибко это и не важно, судя по ключу - это tonapi, почитайте документацию, там есть метод (reply to 286829)

AL Pamblus: Здравствуй чат.  в TON есть 256 битные ключи?  чтобы был приватный ключ.  например  0000000000000000000000000000000000000000000000000000000000000001 или 000000000000000000000000000000000000000006d4b5f157f475e32998340c

Оскар: ну да? (reply to 286836)

AL Pamblus: дай пожалуйста источник :) где можно посмотреть это, чтобы реализовать. (reply to 286837)

Оскар: источник чего? я не совсем понимаю вопроса "наличия" 256 битных ключей, те же стандартные кошельки используют алгоритм Ed25519 и проверка подписи вшита в твм, о поддержке опкодов других алгоритмов "из коробки" можно узнать тут через поиск https://docs.ton.org/v3/documentation/tvm/instructions (reply to 286838)

Art: А что делать если NFT застрял на адресе EQAIFunALREOeQ99syMbO6sSzM_Fa1RsPD5TBoS0qVeKQ-AR ?

Beautiful: Это контракт getgems (reply to 286842)

Art: Я понял. Через него выставлял на продажу NFT, а он там застрял. Получается что НФТ сейчас принадлежит этому адресу (reply to 286843)

Beautiful: Так сними с продажи, должен вернуться (reply to 286844)

Art: не могу снять, он принадлежит этому адресу (reply to 286842)

Beautiful: Дай адрес нфт (reply to 286846)

Farel: когда выставляешь нфт на продажу, то пересылаешь ее другому, пока ее не купят или не отменишь продажу (reply to 286844)

Dmitry | backend4you.ton: Вы учитываете что «начальные данные» уже другие? Вы например взяли успешный перевод 100тон и пытаетесь повторить - но ведь на кошельке может не быть ещё 100 тон (reply to 286782)

Victor: Видимо вы допустили ошибку в коде, если nft там застряла. Отвечая на ваш вопрос: нет (reply to 286846)

Daniil: Подскажите, можно ли при помощи библиотеки для Python ton-utils выполнить свап с указанием допустимого slippage? рабочий метод из примера библиотеки не содержит slippage как параметра. slippage упоминается только, когда мы запрашиваем роутер адрес, но какой толк от него, мы же просто получим адрес роутера и все  я пользуюсь этим кодом tx_hash = await wallet.stonfi_swap_jetton_to_ton(         jetton_master_address=coin_address,         jetton_amount=token_in_balance,         jetton_decimals=coin_decimals,         version=stonfi_version,         router_address=router_address_for_swap     ) но в примерах библиотеки я так же увидел интересную вещь:  router_address = await get_router_address()     stonfi_router = StonfiRouterV2(client, router_address=Address(router_address))      to, value, body = await stonfi_router.get_swap_jetton_to_jetton_tx_params(         user_wallet_address=wallet.address,         receiver_address=wallet.address,         refund_address=wallet.address,         offer_jetton_address=Address(FROM_JETTON_MASTER_ADDRESS),         ask_jetton_address=Address(TO_JETTON_MASTER_ADDRESS),         offer_amount=to_nano(JETTON_AMOUNT, JETTON_DECIMALS),         min_ask_amount=0,     )      tx_hash = await wallet.transfer(         destination=to,         amount=to_amount(value),         body=body,     )  насколько я понимаю, min_ask_amount и может стать моим указанием slippage? транзакция не выполнится, если окажется, что мы получаем меньше минимума, так?

Konstantin: Подскажите file_hash блока это что за хэш?

&rey: Хэш собственно бока, закодированного с конкретными флагами, вроде бы. (reply to 286853)

&rey: Точнее, цепочка транзакций переведёт вам изначальный ассет обратно. (reply to 286851)

Daniil: ну да ок, хорошо спасибо (reply to 286855)

Konstantin: Спасибо. Не совсем ясно только зачем он нужен помимо основного хэша блока. (reply to 286854)

&rey: Чтобы не пытаться десериализовать бред, пришедший от коллатора, если там (последовательный) хеш данных не сошёлся. (reply to 286857)

Andrey: Потому что хеш ячейки это полный хеш всего DAG дерева, а в боке могут быть меркиль пруф ячейки с обрезанными данными. Логично что хеш с ними будет такой же, однако при серелизации хеш самого файла будет другой (reply to 286857)

&rey: Но ведь хеш бока — не то же, что representation hash представленной им ячейки? (reply to 286862)

Andrey: бок хранит в себе множество ячеек, representation hash ячейки это только хеш данных и ссылок дочерних ячеек (reply to 286863)

elias: привет всем, а существует ли сервис, который предоставляет данные о мошенических кошельках в сети TON?

&rey: Эм... 1. вы кому-то доверяете составлять этот список? 2. новый кошелёк создаётся элементарно... (reply to 286868)

elias: возможно есть сервис, который и накапливает такие кошельки. типа того же тонкипера здесь вопрос не о том, что его можно создать, а о том, какие характерные паттерны есть у этих кошельков. для аналитики нужно

elias: да, и задача их проанализировать :) (reply to 286872)

Lmao: Добрый день всем! Мы - команда Fantasy Builders Ищем программистов в проект - Surfers - платформа на которой можно играть в мини игры и смотреть ютуб видео и получать за это поинты, которые впоследствии будут конвертироваться в токены (в проекте используется YouTube API, то есть видео просматриваются прямо в самом WebApp непосредственно), необходимо доработать фронтенд и связку с блокчейном (Ton connect, Смарт-контракт для заданий (Make a ton transaction и т.п), сделать оплату некоторых предметов в Telegram stars, и внедрить adsgram между роликами (если пользователь смотрит SHORTS). Это поверхностное ТЗ, кому интересно, напишите в лс, скину более подробное ТЗ, также информацию о проекте и о нашей команде в целом. Спасибо!

Sol: Ответите? (reply to 286876)

User<7062442470>: В tonutils(python) метод wallet.dedust_swap_ton_to_jetton возвращает хеш транзакции. Как получить количество жетонов которые я получу?

Daniil: Можете подсказать, в каком месте у транзакции можно найти, что она не выполнилась, т.к. не получилось покрыть min_ask_amount для свапа? https://tonviewer.com/transaction/172ee049bb1cb37481e6dc7f26161a3086fb995043630328def8efde14260b1a

Андрей: Swap out token amount is less than provided minimum value (reply to 286879)

Daniil: где это найти? я делаю fetch своих транзакций transactions = requests.get(f"https://tonapi.io/v2/blockchain/accounts/{TON_WALLET_ADDRESS}/transactions").json() получаю список транзакций и нужную мне но дальше, внутри этой транзакции, я не вижу ничего, с "Swap out token amount is less than provided minimum vaue" (reply to 286880)

Oleg: Кто в курсе, есть ли где-то хоть какая-то документация по проекту бриджа https://github.com/orgs/RSquad/repositories?type=all&q=bridge Хотелось бы понять полную архитектуру

Андрей: посмотри на opcode который выдает stonfi pool  и в доках stonfi есть название и объяснение этого опкода (reply to 286881)

Daniil: и что можно сказать по этим опкодам? я взял всю транзакцию, в ней нашлось 3 опкода, 1 из которых не в hex-формате если его в него перевести, то это окажется 0x6664de2a - swap на stonfiv2 но два других вообще ни к чему не ведут. по ним 0 на странице стонфая а других оп_кодов у транзакции нет куда смотреть?  https://docs.ston.fi/docs/developer-section/api-reference-v2/ops (reply to 286884)

Андрей: по этой ссылке нажимай на контракт D ( после E ) получишь сообщение которое E отправил D, там будет exit_code ( неверно выразился ) переводишь decimals -> hex и смотришь в доках стонфи (reply to 286879)

Daniil: спасибо большое, нашел (reply to 286886)

Belarusian: Всем привет, парни есть у кого нибудь пример кода отправки транзакции при помощи tonClient на solidJs ?  У меня проблема, что я нашел пример создания провайдера на реке и немого это интропритировать для solidjs.  Не могу написать такой же хук для solid. И провайдер не подтягивает данные для транзакции, только после предзагрузки. Если у кого нибудь есть хоть какая-то информация, как написать транзакции(ton,usdt,not,stars) на solid или хоть какая нибудь информация или направление в котором думать, дайте пожалуйста, буду очень признателен

Daniil: блин мы нашли нужный exit_code на сайте, всё ок а что делать, если в транзакции, взятой через  transactions = requests.get(f"https://tonapi.io/v2/blockchain/accounts/{TON_WALLET_ADDRESS}/transactions").json()['transactions']   его нет? я сейчас вбил по всей транзакции в поиск этот код - пустота, да и в целом на всю транзакцию всего два exit_code (reply to 286886)

&rey: Эм, попробуйте другой метод, который вернёт всю цепочку транзакций? (reply to 286890)

Андрей: транзакция - изменение состояния контракта ( то есть лишь изменение твоего кошелька  ) , а то что тебе надо это цепочка транзакций (reply to 286890)

Daniil: так кончились методы я сейчас попробовал   requests.get(f"https://tonapi.io/v2/events/{transactions[0]['hash']}").json() requests.get(f"https://tonapi.io/v2/traces/{transactions[0]['hash']}").json()  больше TONAPI по конкретной транзакции ничего не предлагает и ни там, ни там опять нет нужного нам exit_code (reply to 286891)

Андрей: тут есть (reply to 286893)

Vadi: Всем привет  Ищу разработчиков мини-апп тапаллок и лотерей   Если пингуете в лс , дайте знать в чате - все новые сообщение попадают в архив

rxcat: а как эмулировать сообщение на незадеплоенном кошельке? указываю в external  стейтинит кошелька - не помогает  ловлю такую ошибку  {   "error": "iteration: 0, exitCode: 0, Text: Emulate transaction failed: [Error : -701 : cannot run message on account inbound external message rejected by account 6E8E1459A1E7B2329291C3FE744168DFBA47557844EBAA8916FCDF9BB277C413 before smart-contract execution], " }

&rey: Вероятно, на нём денег нет, и это предотвращает эмуляцию. (reply to 286898)

rxcat: верно, он в статусе nonexist  но вроде как внутри эмуляции не проверяется баланс контракта (reply to 286899)

&rey: Проверяется, конечно. (reply to 286902)

Андрей: у тебя в любой транзакции storagefee берется изначально, поэтому эмуляция и падает ( а у тебя 0 баланс как я понял ) (reply to 286902)

rxcat: получается нужно руками в эмуляторе поставить ему нужный стейт и потом на этом стейте эмулировать?

Андрей: ты можешь закинуть stateinit вместе с messagebody одной транзакцией (reply to 286905)

rxcat: я так и делаю (ext потом отправляется в эмулятор) (reply to 286906)

Daniil: пожалуйста, покажите где вот txhash - 64496104485f9c9928432347f28be1d47a47ad41da2f9436ba5a6eb96d5bd34b вот Python-код:  trace = requests.get(f"https://tonapi.io/v2/traces/64496104485f9c9928432347f28be1d47a47ad41da2f9436ba5a6eb96d5bd34b").json()  Там нет искомого exit_code: 962605456 для шага D, который стоит после Е - https://tonviewer.com/transaction/64496104485f9c9928432347f28be1d47a47ad41da2f9436ba5a6eb96d5bd34b (reply to 286895)

Соус: Кто знает, по какой причине при деплое контракта транзация может фейлится с кодом 9?

Андрей: "exit_code": 962605456 (reply to 286908)

Андрей: пытаешься считать то, чего нет (reply to 286909)

Соус: При деплое. Считать то, чего нет. Так, с этого момента поподробнее (reply to 286911)

Daniil: нет там такого от слова совсем где? (reply to 286910)

Соус: Тем более странно, что blueprint такое сделал. (reply to 286913)

Андрей: https://docs.ton.org/v3/documentation/tvm/tvm-exit-codes (reply to 286917)

Андрей: 641 строка json (reply to 286915)

Соус: Тогда другой вопрос. Он пытается в этот момент выполнить код контракта? (reply to 286918)

/B4ckSl4sh\: Конечно (reply to 286921)

/B4ckSl4sh\: Контракт сначала инитается и потом выполняется сразу же

Соус: Спасибо за ответ.

Соус: Кто-то пытался деплоить ton-blockchain/dns-contract? Не могу подобрать исходные значения хранилища, подскажите пж

Daniil: спасибо (reply to 286920)

Andy: подскажите как сделать минт нфт на пайтоне

He's die..: Can someone help me with sending Jettons from one wallet to another through code?

Dmitry | backend4you.ton: @tondev_eng and https://docs.ton.org/develop/dapps/cookbook#tep-74-jettons-standard (reply to 286936)

rxcat: https://tonviewer.com/transaction/98187d72aad155a250706686ccaafea024820fba333fa36fcde8a4caf8d95c1b  а почему транзакция легла?

RootTon: Всем привет, можно ли через tonconnectui узнать баланс ton to usd или ток с тонапи? д и тон апи не факт что даст мне цену тона в usd

Max: Добрый день, подскажите, как узнать Jetton Address для монеты на Toin, это адресс пула или создателя?

Андрей: not enough grams to transfer with the message : remaining balance is 54132640ng, need 60787200 (including forwarding fees) (reply to 286939)

Андрей: кароче тебе нужно для перевода 0.061 тон у тебя было 0.054 после вычета газа (reply to 286944)

Ruslan: уже увидел спасибо (reply to 286945)

DeFi Maestro: Я могу помочь вам. у меня есть полный скрипт в React (reply to 286936)

DeFi Maestro: что вы делаете или пытаетесь сделать с этим контрактом или транзакцией (reply to 286939)

&rey: TC2 — это write-only механизм (не считая подключения кошелька), так что нельзя. (reply to 286941)

ByteNode: Приветствую, ищу способ брутфорсить UQ адреса которые оканчиваются на определенные 5 символов

ByteNode: типо такого

ByteNode: Это правда контракт, но есть и стандартные кошели

User<5556796111>: просто генерируешь кошельки и чекаешь на суффикс (reply to 286953)

Yaroslav: Просто запусти генерацию кошельков и проверяй их адреса (reply to 286953)

集电极: Vanity (reply to 286953)

ByteNode: Это понятно, но я думаю, есть ли какие то готовые скрипты

Yaroslav: https://github.com/Aero25x/ton-wallet-generation

ByteNode: Спасибо (reply to 286960)

&rey: А как планируете использовать – в скриптах или в приложении кошелька? (reply to 286959)

ByteNode: Для личных потех (reply to 286962)

&rey: А вопрос-то в том, что есть оптимизированные скрипты, но они не сойдутся с тонкипером (вроде).

&rey: https://github.com/ton-community/vanity-contract а вот пользоваться... ну, думаю, TonDevWallet умеет, пусть @TrueCarry поправит.

Tim: не умеет

ByteNode: Не, мне локально запускать, без интеграций (reply to 286964)

Михаил: Еще такой есть https://github.com/ton-offline-storage/address-generator (reply to 286967)

DEVERSEE: Есть кто на питоне пишет? На комп софтина нужна

DEVERSEE: Баксов 50-70 дам

Oleg: Техзадание уровня "бог" (reply to 286972)

potato: Я так понимаю подробности будут в лс (reply to 286974)

Oleg: Какое может быть лс за 70 баксов?)) (reply to 286975)

potato: Задачи разные бывают, иногда и за пару часов можно выполнить Чем тебе помешают 70 баксов за пару часов? (reply to 286976)

ｈａｒａｊｕｋａ: Такой вопрос, видел сервисы для просмотра отмененных транзакций. Как я понимаю работа идет с мемпулом через вебхуки, правильно?   В каком вообще направлении искать информацию чтобы сделать примерно тоже самое?

Oleg: Задачи такого уровня хорошо делает ИИ (reply to 286977)

Dmitry | backend4you.ton: "отменённых" это каких? транзакции в тоне нельзя отменить - блокчейн и всё такое (reply to 286978)

ｈａｒａｊｕｋａ: отмененные - это те которые не попали в одобренные по различным причинам (reply to 286980)

potato: и что? Я не против если мне хотят заплатить за задачу, которую легко выполняет ИИ (reply to 286979)

Dmitry | backend4you.ton: Транзакция - это процесс обработки контрактом входящего сообщения, при котором меняются данные самого контракта и генерируется Х выходных сообщений (другим контрактам). Чтобы "не одобрить" транзакцию - нода-валидатор должна быть совсем "дураком" и включить в блок абсолютную чушь, чтобы другие валидаторы этот блок при проверке отбросили как некачественный. Во-первых это достаточно редкое явление, во вторых я увы не слышал чтобы кто-то собирал "битые" блоки. мемпул ту не при чем, в мемпуле лежат еще необработанные входящие сообщения, которые ждут своей транзакции (reply to 286981)

ｈａｒａｊｕｋａ: Скорее всего ты меня не понял. Не редкость, когда отправляется транзакция с низким слипейджем, если операция выходит за рамки допустимого слипейджа - транзакция отменяется. Примерно такой же момент когда прайс импакт очень большой - тогда транзакция тоже отправится в обработку, но вернет ошибку (reply to 286987)

🏆: когда жетон добавляют на декс, в мастер контракте это как-то отображается? как понять, что его добавили на дедаст/стонфи?

&rey: Это не "транзакция отменяется", а "цепочка транзакций возвращает исходный ассет отправителю". Эта разница очень существенна, когда вы спрашиваете, где всё это найти.  Вам как-то бы фильтровать переводы жетонов с конкретным forward payload... кажется, dton.io/graphql это умеет. (reply to 286990)

ｈａｒａｊｕｋａ: Спасибо)

Igor: не подскажите, на смарт контрактах возможно написать лотерею ?

Igor: В разработке на тон ничего не понимаю, так что не кидайте палками, если глупый вопрос )

.: Конечно можно.

Igor: Начинать с офф доков или есть что получше, чтоб быстрее вкатиться? (reply to 286999)

.: Ну в офф доков практически все расписано, какие-то моменты можно у deepseek к примеру уточнать, но она иногда врет.

&rey: Подумайте над тем, кто вам там будет генерировать случайные числа — учтите, что валидаторы собственноручно могут выбрать сид блока. (reply to 286997)

Igor: Из внешнего источника или хеш не подойдут? (reply to 287002)

SweetJesus: Писал как-то давно простенькую лотерею, могу скинуть ссылку, если надо) (reply to 286997)

Igor: Буду благодарен :) (reply to 287006)

Егорка: Привет всем. Есть ли какая-то возможность узнавать ликвидность токена, не через запросы к разным апи, а через подписки на события? Сам в этой теме новичок, пытаюсь разобраться

— 2025-01-27 —

Aziz: Привет! Подскажите пожалуйста в tonviewer показывает что транзакция успешна, а по API вижу aborted  кому верить?   tx [   {     address: 13278419249212081391643320777515164075141195432104455407544462112627174193046n,     lt: 30672776000001n,     prevTransactionHash: 39959157517770807661892006746834990272400165236299749860289889835006223215120n,     prevTransactionLt: 30672648000001n,     now: 1737936465,     outMessagesCount: 0,     oldStatus: 'uninitialized',     endStatus: 'uninitialized',     inMessage: {       info: [Object],       init: null,       body: x{7362D09C546DE4EF0C475F973989680800AA173D46A071817FA54B10C09884EC663493A71332B0EC66830FF26E8AADC4EB}        x{00000000546573742062}     },     outMessages: Dictionary { _key: [Object], _value: [Object], _map: Map(0) {} },     totalFees: { coins: 3n },     stateUpdate: {       oldHash: <Buffer 9d 4a 84 af 02 89 86 a0 03 a5 2a d0 8f 51 af 60 fb 7a 44 fe f9 b9 40 c0 13 77 0e 91 31 44 c7 64>,       newHash: <Buffer 13 de 9b 48 5e 19 28 a5 7d c1 a9 0c e7 a8 f8 8f 7f af 97 fc 7e 92 60 cb b3 8b 7f ec f2 e9 08 9b>     },     description: {       type: 'generic',       creditFirst: true,       storagePhase: [Object],       creditPhase: [Object],       computePhase: [Object],       actionPhase: undefined,       bouncePhase: undefined,       aborted: true,       destroyed: false     },     raw: x{71D5B51A7817E8955571CF1A59B3BC71D3FF6AF6A8EE10A349E0B4EA678D0B79600001BE58FEAF201585814E8697ACB37F2B97A625E2BCBC8AB44D2E0D288F6EFD2A51E891D086A1000001BE58849D2016796CE5100000206}      x{A_}       x{48015DCD7059C50C2EF1914ED5D7C29932D2B0DF0257061DA764A59E701072FD66D5000756D469E05FA25555C73C6966CEF1C74FFDABDAA3B8428D2782D3A99E342DE58404060D9B5E000037CB1F98DB08CF2D9C92C_}        x{7362D09C546DE4EF0C475F973989680800AA173D46A071817FA54B10C09884EC663493A71332B0EC66830FF26E8AADC4EB}         x{00000000546573742062}      x{729D4A84AF028986A003A52AD08F51AF60FB7A44FEF9B940C013770E913144C76413DE9B485E1928A57DC1A90CE7A8F88F7FAF97FC7E9260CBB38B7FECF2E9089B}      x{0C40C840492_},     hash: [Function: hash]   } ]   https://testnet.tonviewer.com/transaction/585814e8697acb37f2b97a625e2bcbc8ab44d2e0d288f6efd2a51e891d086a10

Max: tonviewer точно также говорит, что жеттон нотифай aborted (reply to 287011)

Aziz: Спасибо. Был невнимательным.  А почему так может происходить? Я просто нашел какой-то jetton для testnet который сожно заюзать в транзакциях. Может контракт неисправный… есть ли вариант faucet jetton? Хочу аналог usdt в testnet (reply to 287012)

Aziz: И вообще как такое возможно. Статус aborted, но на балансе токены дошли

Max: Нет, с контрактом всё хорошо. Сам по себе жеттон трансфер успешен, но зафейлилось уведомление о переводе контракту-получателю  Это вполне нормальная ситуация, когда вы переводите жеттон через интерфейсы кошельков

Aziz: Блин, а какие параметры чекать в транзе чтобы случайно не accept-ить фейл транзу?

Aziz: Если не Destroyed и не aborted

Max: Смотреть на свой jetton wallet

Aziz: В смысле, Баланс чекать? (reply to 287018)

Max: Нет. Транзакции на ваши жеттон воллеты  Нет никаких гарантий, что вы получите jetton notify, это опциональная штука и отправитель сам решает, слать вам её или не слать

Aziz: Спасибо. Попробую после getTranactions еще проверить по адресу жетона

Aziz: https://tonviewer.com/transaction/98187d72aad155a250706686ccaafea024820fba333fa36fcde8a4caf8d95c1b Вот например транза сфейленная. Мне интересно на основе каких данных вердикт о неуспешности?

Оскар: насколько я знаю, если экстернал порождает интерналы и хоть бы один из них фейлится/скипается, то тонкиппер на всё дерево повесит зафейлилось, что тут и произошло - экстернал хотел отправить интернал, но они скипнулся, вероятней всего по причине что к сообщению приложили тонов больше, чем есть на контракте (reply to 287022)

Оскар: но не понимаю зачем на это обращать внимание, если вам нужно проверять поступления жетонов, то проверяйте на жетон воллете куда приходят жетоны, не нужно по всему дереву бегать, если юзер не смог отправить месседж на перевод жетонов - этого перевода и не будет видно на жетон воллете-получателе (reply to 287022)

🐼 Sild: предположу что без достроенного дерева не понятно сколько ждать (reply to 287025)

Оскар: ждать чего? как только транзакция попала в чейн (нам пришли жетоны на наш жетон воллет) - она становится необратимой, а опциональной нотификации дожидаться не нужно, логика от неё не зависит (reply to 287026)

User: Error: FunC compilation error: fatal: unknown assembler operation  И вот такую  RuntimeError: null function or function signature mismatch  Вот такую историю ловлю, место нашел, что можно с этим сделать?  p.s. Почитал чат, был один случай у человека уже, действительно помогает - это рефакторинг контракта(возьмите кусок кода и в функцию его вынесите и все заработает). Все слишком тонко и если расскажите как посмотреть на компиляцию глубже, я вам выдам баг репорт, потому-что происходило это в одном и том-же месте, но когда я пытался воспроизвести тоже самое на другом контракте(копипастил код) оно работало, видимо ошибка выдается уникально в моем случае при какой-то последовательности ASM команд

Dmitry | backend4you.ton: А, ты конкретно про операции обмена на дексах… тогда смотри признак успешности/fail на цепочке транзакций. Смарт кидает ошибку, и в блокчейне это видно. Сервиса, который за тебя будет слушать все транзакции, отлавливать только fail и только обмена на дексах, и потом добавлять инфы для человекочитаемости - таких не видел (reply to 286990)

Ext.getCmp('Keken');: Привет! Хочу поделиться своей фуллстак монорепой с поддержкой TON и всем, что нужно для быстрого старта:  (все самое свежее) - React 19 - Next.js 15 - tRPC 11 - Bun 1.2 - Drizzle ORM + PostgreSQL - KeyDB - TON Connect  Код здесь: https://github.com/DKeken/turborepo-ton-trpc

Aziz: Проверять что? Транзакцию или баланс? Если баланс то я не пойму от кого сколько было пополнено. А если транзакцию - то я не понял как. Я сейчас и так получаю все последние транзы на кошельке и паршу их. Как еще? (reply to 287025)

Pump Detected: Спасибо;) (reply to 287059)

Ext.getCmp('Keken');: Звездочка в гх - лучшее спасибо, хех  Буду дополнять и улучшать (reply to 287073)

Pump Detected: Скоро будет ) (reply to 287074)

Dmitry | backend4you.ton: https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md  если вы хотите понять что пришло на ваш жетон-валлет, при том что отправители могли "забыть" включить forward - считывайте и разбирайте internal_transfer на своем жетон-кошельке.  если вы сами управляете отправкой (собираете транзакцию юзеру на подпись) - включайте forward_ton-amount 1 нанотон и слушайле и разбирайте transfer_notification на основном кошельке (reply to 287068)

Pump Detected: Тут есть у кого проекты готовые, чтобы можно было попользоваться ?

Molodoy Abuzer 3: Моя теория работает. Каждый день умирает около 4 тон разработчиков

Dan: Привет. Подскажите, плиз, корректно ли получаю состояния адреса в Sandbox? Логаются в консоль они верно (uninit, потом active). Но интересно, верный/оптимальный ли это подход для получения ContractProvider в этом случае. Конкретно интересует const provider = blockchain.provider(address);   it('should return correct states', async () => {     const address = addressTester.address;     const provider = blockchain.provider(address);     let state = await provider.getState();     console.log(`Contract State: ${ state.state.type }`);      await addressTester.sendDeploy(deployer.getSender(), toNano('0.05'));     state = await provider.getState();     console.log(`Contract State: ${ state.state.type }`); });

Aziz: Всем привет

Aziz: sol

Aziz: почему когда ввожу ЙеТэХа - удаляет мое сообщение?)

&rey: А почему спам должен оставаться? Здесь же разработка на тоне.  (Ну, разве что вы хотите евм на тоне сделать, но не очень верится.) (reply to 287097)

Aziz: Ну блин… тут как-бы блокчейн развиваем. А мы даже написать три буквы другого блокчейна не можем. Стремно очень…  Админы вы не правы. А потом удивляемся почему так мало разработчиков и вообще сообщений в этом чате

rends_east: а как вы разовьете блокчейн упоминанием других блокчейнов в беседе? (reply to 287100)

Aziz: например в моем случаи я хотел просто сравнительный анализ проивести. (reply to 287101)

Aziz: да и потом, в кошельке поддерживается ТЕ_РЕ_ИКС. А писать эти три буквы нельзя)))

Aziz: сменшно

Aziz: в ToNKeeper и в телеговском

rends_east: зачем? мы тут разработкой занимаемся, не сравниваем блокчейны) (reply to 287102)

Aziz: это вопрос к администрации чата, а не к блокчейну

Aziz: Очень разочарован и мне жаль

sax: Добрый день, не подскажите при подключение кошелька через Ton-Connect можно получить public key ?

&rey: Можно получить StateInit, а на нём вызвать гет-метод get_public_key. .account.walletStateInit. (reply to 287124)

Pump Detected: Как так ?! Из-за чего ? (reply to 287086)

Farel: как можно получить список всех нфт на адресе? подскажите пж

SweetJesus: tonapi (reply to 287127)

He's die..: Может ли кто-то помочь мне с передачей жетонов с использованием tonconnect?

Namon: https://docs.ton.org/develop/dapps/asset-processing/jettons (reply to 287135)

He's die..: Я не смог использовать это (reply to 287135)

Namon: Пора написать гайд по работе с жетонами для самых маленьких

Aziz: https://testnet.tonviewer.com/transaction/47244f5a68df8e1187ae141cd8eb57b93f59ef27d806106939f787f6f18ca467     const tx = await client2.getTransaction(Address.parse(to), lt, hash);    стоит указать hash - транзакция 503 фейл.  что это может быть?

X1ag: Факты (reply to 287139)

R: Кто подскажет что можно сделать  Отправлен токен FPIBANK сеть TON Из WEB3 в Bybit  Оказалось что этого токена нет в бите (итог застрявший токен)

kwinkich: ничего, забудь про токены (reply to 287157)

albert: I want to create a smart contract for me. Can someone send me a message?

Андрей: @tondev_eng (reply to 287160)

Namon: может кто знает примеры подобных статей "для самых маленьких" на docs.ton.org? и можно ли вообще туда публиковать подобные статьи в полусвободном (не сильно техническом) формате? (reply to 287139)

X1ag: мне кажется нельзя и будет лучше сделать что-то типа статьи(на telegraph или в гитхабе)   like this https://gist.github.com/mr-tron/a4b3e8eff3a982e3426f6397eb9a2450 (reply to 287165)

Namon: Просто как будто это именно то, что нужно для начинающих, и было бы супер видеть подобное на docs.ton.org, потому что так легче всего будет найти такую статью (reply to 287168)

Андрей: https://docs.ton.org/develop/dapps/asset-processing/jettons#send-jettons-with-comment (reply to 287169)

Андрей: Тем кому интересно что под капотом - читать выше (reply to 287170)

Андрей: А так есть там картинки с тем что происходит, куда проще - не знаю (reply to 287171)

X1ag: а чтобы посчитать всю комиссию цепочки транзакций, нужно просто складывать total fee каждой транзы?

Denis: да

Denis: ну точнее нет

Denis: точнее а что вы хотите в результате получить?

Denis: вот допустим вася отправляет пете 1 USDT и у пети нет жетон-кошелька usdt общая комиссия например равна 0.0063 но при этом у васи стало на 0.007 тон меньше потому что часть денег осталось на жетон-воллете пети

X1ag: в результате хочу чтобы токены 100% дошли до кошелька пети и чтобы васе вернулась сумма, которую он отправил - (минус) комиссии и прочие расходы (reply to 287176)

X1ag: грубо говоря, чтобы он отправил на контракт 0.3ton(чтобы хватило на все операции) и ему отправился остаток

Namon: ну последний контракт должен отправить столько, сколько ему пришло - свои расходы, не? (reply to 287180)

X1ag: судя по транзакциям - нет (reply to 287181)

Jason $ETN 🆙 UXUY: Hello I'm wondering if someone can help me with ton connect SDK for react I know that this is not the English chat but it seems to have disappeared I can't find it so I'm sorry first of all for speaking in English and the Russian chat I've tried over and over again to fix this but it doesn't seem to want to work for me and I'm missing something if anyone could spare 10 minutes to help me out really appreciate it

— 2025-01-28 —

X1ag: подскажите плз, а msg_value приходит в нанотонах?

M: господа, когда мы инициируем транзакцию через   tonConnectUI.sendTransaction  соответственно, открываем какой либо Wallet, как можно сделать автоматический редирект назад при подтверждении/отклонении транзакции?  Какая то шляпа получается, если пользователь вручную сам не откроет Dapp, то у него транзакция так и будет висеть без какого либо ответа. Как правильно организовать returnStrategy? “back” или ссылка не дают результата

&rey: Из-за режима 64. Наверно, вы имели в виду режим 0. (reply to 287191)

X1ag: благодарю) стоит все таки изучить все коды

Vitaliy: всем доброго утра. Я делаю деплой токенов на js коде, попробовал взять код https://github.com/ton-blockchain/minter. Дошел до вот этого места, и теперь не понимаю как заменить отправку с tonConnectUI на какую-нибудь библиотеку которая позволит мне подписать транзакцию приватным ключом и отправить. Я так понимаю нужна библиотека с sendRawTransaction методом   const tx = {     validUntil: Date.now() + 5 * 60 * 1000,     messages: [         {             address: _contractAddress.toString(),             amount: params.value.toString(),             stateInit: cell.toBoc().toString("base64"),             payload: params.message?.toBoc().toString("base64"),         },     ], };  await tonConnection.sendTransaction(tx);

Oleg: @ton/blueprint и @ton/core     async sendMint(provider: ContractProvider,                    via: Sender,                    to: Address,                    jetton_amount: bigint,                    from?: Address | null,                    response_addr?: Address | null,                    customPayload?: Cell | null,                    forward_ton_amount: bigint = toNano('0.05'), total_ton_amount: bigint = toNano('0.1')) {         await provider.internal(via, {             sendMode: SendMode.PAY_GAS_SEPARATELY,             body: JettonMinter.mintMessage(to, jetton_amount, from, response_addr, customPayload, forward_ton_amount, total_ton_amount),             value: total_ton_amount,         });     } (reply to 287207)

Daniil: Какой тип кошелька нужен чтобы отправить jetton сразу на несколько сотен адресов, но при этом не платя за газ для каждого перевода по отдельности (batch transfer)? High load? Или v5 тоже подходит

Vitaliy: спасибо, похоже на то что нужно! А есть более подробный пример? А то что-то плохо гуглится, и непонятно как это с приватным ключом использовать, и куда вставлять данные токена, типа logoUrl и decimals (reply to 287216)

Oleg: Это взято с какого-то официального репозитория, счас найду как подписывается (reply to 287219)

Oleg: https://github.com/ton-blockchain/token-contract/blob/21e7844fa6dbed34e0f4c70eb5f0824409640a30/scripts/minterController.ts#L67 Вот репозиторий

Alex: Хороший вопрос. Тут основная сложность что E2E запаковать в компактный гайд пока не удавалось. Есть несколько старых уроков (и да, когда они устаревают может что-то перестать работать), и мы будем создавать новые и стараться их упрощать.  В данный момент, для совсем начинающих, но желающих постичь отправку Jetton с TON Connect, предлагается стягивать проект и разбирать готовый код и эксперементировать: https://github.com/ton-community/tma-usdt-payments-demo?tab=readme-ov-file#tma-usdt-payments-demo  Параллельно посматривать в документацию, гайды и изучая примеры, это сейчас самый лучший вариант. (reply to 287169)

Dmitry | backend4you.ton: V5 вроде умеет «до 255 за раз, потом ждать» (обновления секно). Но обычно это «до 255» везде раньше было «лучше до 200». Если вам надо более интенсивно - хайлоад. (reply to 287218)

Daniil: 255 адресов в одной транзакции, верно? (reply to 287225)

Dmitry | backend4you.ton: 255 переводов. два перевода одному адресу - это два перевода (reply to 287226)

Daniil: Мне важно отправить жетоны многим адресам, но при этом чтобы это не были отдельные транзакции за каждую из которых я плачу gas (reply to 287227)

Dmitry | backend4you.ton: увы будете. перевод жетона - четыре сообщения: external, internal transfer, internal excess, internal notification. "забатчить" можно только первый, остальные три так и будут "для каждого". internal notification технически необязательный, но это "правило хорошего тона" (reply to 287228)

Dmitry | backend4you.ton: ой соврал сорри, пять - там еще internal internal_transfer https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md вот стандарт (reply to 287229)

Daniil: Правильно я понимаю что это 5 сообщений? Т.е если максимум 255 сообщений в транзакции, то я смогу сделать 255/5 переводов в одной?

Dmitry | backend4you.ton: нет, вы можете сделать 255 (с поправкой "лучше поменьше") переводов, это будут 255 первых internal каждый из которых породит свою независимую цепочку, но вы по-прежнему всем им обеспечиваете газ

Daniil: Будет ли это дешевле чем по транзакции на перевод?

Daniil: Или тоже самое

Dmitry | backend4you.ton: чуток меньше - за счет всего 1 (а не 255) первой external

Dmitry | backend4you.ton: еще есть https://docs.ton.org/v3/guidelines/dapps/asset-processing/mintless-jettons , когда вы подготавливаете и "публикуете" список получателей, а они сами когда хотят клеймят свои жетоны и оплачивают за это газ, но там надо заранее подготовить список, поменять его уже будет нельзя (reply to 287236)

Daniil: Не подходит такой вариант к сожалению. У меня постоянно появляются новые получатели (reply to 287241)

Dmitry | backend4you.ton: если надо раздавать ежемесячно, то возможно они смогут подождать до начала следующего месяца, например 01 числа новый "раздающий" контракт, и юзеры пошли клеймить. к сожалению тут они не смогут "накопить" - им придется каждый месяц клеймить отдельно.  ну или вам нужен бэк, который накапливает "то что отдать" в реляционке оффчейн, а когда юзер готов - юзер шлёт сообщение на служебный кошель с тонами на газ, бэк его ловит и в ответ шлёт  жетоны   P.S. тоны - два сообщения, не пять (один external и потом один internal). экстернал так же можно в батч сложить (reply to 287243)

F: @tondev_eng (reply to 287185)

Daniil: Буду думать, спасибо (reply to 287248)

DJ МЕХАНИЧЕСКИЙ КОТ: рекординг ин блокчейн уже больше часа длится это норма?

Oleg: Бывали такие случаи, но скорее всего, в вашем случае уже все завершено, просто UI не показывает правильный статус (reply to 287258)

DJ МЕХАНИЧЕСКИЙ КОТ: а на фрагменте же транзакции проходят через блокчейн тона? я просто не особо разбираюсь, извините (reply to 287259)

User<5556796111>: да (reply to 287260)

Daniil: Интересно, а как тогда происходят большие аирдропы? Неужели разработчики платят за газ сами? (reply to 287248)

Daniil: Там выходит ~40 usd на 1000 пользователей, если жетон кидать

Dmitry | backend4you.ton: https://docs.ton.org/v3/guidelines/dapps/asset-processing/mintless-jettons хомяк сделал так (reply to 287265)

Василий: https://docs.ton.org/v3/guidelines/dapps/asset-processing/mass-mint-tools (reply to 287265)

&rey: Ну, есть же элементарная архитектура на этот случай... (reply to 287243)

Daniil: Подскажите по теме swap coffee, комиссий и реально получаемых за свапы количеств tokenB Я заметил, что на ТОНе комиссия за газ как бы вшита и происходит внутри транзакции свапа и не списывается с основного счета ТОНа ну то есть: у меня на кошельке лежит 3.7 ТОНа, я запускаю какой-нибудь свап, делаю его, вижу, что в нем была стандартная (допустим, для СТОНфая) комиссия в 0.2 ТОНа, но при этом на моем балансе как лежали, так и продолжают лежать 3.7 ТОНа, уменьшившись на 0.003 или что-то вроде того. когда я делаю coffee/v1/route и получаю output_amount и recommended_gas, аутпут - это именно то, сколько +- я получу? а recommended_gas - это что внутри транзакции будет происходить? и в целом, как и в случае СТОНфая с его 0.2, тут эти (допустим 0.6 в recommended_gas) будут где-то там внутри транзакции меня не касаться, и смотреть для оценки итога сделки мне нужно именно на output_amount?

author: Были ли у кого нибудь проблемы с импортом Buffer на vite js при использовании tonweb / ton/core? Пока апп работал на cra react - получилось обойти с помощью глобальной области видимости, щас уже пару часов с нейронкой бьемся…

Daniil: ок но в случае с симуляции от swap coffee, значение в output_amount это уже +- сколько и получу? (reply to 287281)

kwinkich: лс глянь (reply to 287283)

Roki: Делали эксперименты с mevton в тестнете, теперь пытаемся восстанавливать валидатор из бекапа.  Устанвливали ноду разными способами, последний раз вот так:  bash install.sh -m validator -n testnet -c https://ton.org/testnet-global.config.json  Нода засинхронизировалась в тестнете. При попытке любых комманд, например вывод из пула выпадает с такой ошибкой    Failed to send boc to toncenter: b'{"ok":false,"error":"LITE_SERVER_UNKNOWN: cannot apply external message to current state : External message was not accepted\\nCannot run message on account: inbound external message rejected by transaction A341FC78D22ABCDE24B2C9643C753F0A753449B77EA245FF668CD3165041BB80:\\nexitcode=9, steps=20, gas_used=0\\nVM Log (truncated):\\n...x71B0ED44D0D31FD31F31D70BFFE304\\nexecute IFJMP\\nexecute INC\\nexecute THROWIF 32\\nexecute PUSHPOW2 9\\nexecute LDSLICEX\\nexecute DUP\\nexecute LDU 32\\nexecute LDU 32\\nhandling exception code 9: cell underflow\\ndefault exception handler, terminating vm with exit code 9\\n","code":500}'

Roki: В прошлый раз спрашивал про ошибку 6, оказалось что файлы кошелька не все залились.  В этот раз файлы кошелька нетронутые и с бекапами проверенные. Патч mevton только исправлял код валидатора, не трогал файлы mytocntrl

Daniil: Подскажите, а что делать с транзакциями, которые получаешь от swap.coffee? Я пользуюсь библиотекой python-utils, куда эти данные вставлять и как?

Иван: товарисчи, посоветуйте сервис для мультисенда

Иван: с минимальной комиссией и большим количеством строк чем в дефолтном тонкиперовском

Markin: Добрый день, всем разработчикам! Возник вопрос, ответ на который, не смог найти в интернете, по поводу сайтов на тон.  Вопрос: можно ли создать сайт с возможностью приема оплаты через традиционные платежные системы типа VISA с переводом в TON на кошелек?  Всем спасибо за ответы 🙏

PR: Возможно, но ты должен куда-то принимать переводы и потом менять их на крипту (reply to 287295)

PR: То есть должна быть контора которая тебе даст процессинг для визы, мастеркарда и тд. и потом ты деньги которые тебе перекинут через процессинг меняешь на крипту

Андрей: Поищите причины exit code 9 (reply to 287288)

Roki: Так я об этом и спрашиваю в чате. (reply to 287298)

Faceless_Team: Приветствую. А не подскажите как найти разработчика, который шарит в API блокчейнов и других сайтов с подтвержденным портфолио? Или где искать?

Victor: Какая перед вами стоит задача ? можете описать ? (reply to 287300)

zero_tolerance91: Привет всем, подскажите плиз, стоит ли заморачиваться разрабоикой токена иои можно просто заминтить? В дальнейшем планируется автрматмческая раздача этих токенов как вознаграждения и возможно другие функции

Aziz: Спросить может в чате) (reply to 287300)

Aziz: Если есть возможность то лучше свой код. Честно говоря я не знаю сервисов которые бы минтили безопасно (reply to 287304)

rends_east: разберитесь, какие функции будут, а потом принимайте решение, нужна ли разработка (reply to 287304)

rends_east: minter.ton.org (reply to 287307)

Aziz: это простой токен. без автоматических раздач и тп (reply to 287309)

zero_tolerance91: То есть потом нельщя будет автоматизировать через сервисы? (reply to 287308)

rends_east: можно, просто это будет не в коде контракта токена (reply to 287311)

zero_tolerance91: А это принципиально? (reply to 287312)

rends_east: вы сами разберитесь, принципиально ли вам) (reply to 287313)

Aziz: Подскажите, почему фейлится отправка жетонов?  https://testnet.tonviewer.com/transaction/4cfc7bfaf7587987facf105028d112b6b733c9269265accbedf37d0a034e3b9c

zero_tolerance91: Да мне главное чтобы можно было автрматизировать всякие процессы с токеном (reply to 287314)

rends_east: тона недостаточно на балансе контракта воллета (reply to 287315)

Aziz: подскажи плз где вычитал такое? (reply to 287317)

Aziz: а.. ТОН. спасибо

Aziz: а подскажи пожалуйста, это я указываю сколько комиссии плачу за трансфер? (0.1 TON)  а если указать 0.000001? (reply to 287319)

rends_east: то будет ошибка 40  это не то, сколько ты платишь, а сколько ты посылаешь тонов (reply to 287321)

Aziz: estimate надо делать?

Aziz: я хочу только жетоны (без тонов)

&rey: форвард 0, респонс адрес отправителю, тогда всё лишнее вернётся (reply to 287325)

Aziz: Поджскажите пожалуйста как получить hash транзакции ?    const contract = client.open(wallet);     const seqno: number = await contract.getSeqno();     await contract.sendTransfer({ // <- void       seqno,       secretKey: Buffer.from(keyPair.secretKey),       messages: [         internal({           value,           to,           body,         }),       ],     });

X1ag: Всем добрый вечер, подскажите пожалуйста, как сделать так чтобы пользователь отправлял тон и не видел сколько ему отправляется обратно? Можно ли как-то отдельно транзакцию прикреплять?   else {       throw_if(error::low_balance, msg_value < fees::mint + fees::service);       var msg = begin_cell()                   .store_uint(0x18,6)                   .store_slice(to_address) ;; sender address                   .store_coins(msg_value - fees::service) ;; amount of ton(in nanoton)                   .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1 + 1)                   .store_uint(0, 32) ;; op-code                   .store_slice("back")                 .end_cell();       send_raw_message(msg,0);       return ();      }

Victor: используйте стандарт, для рассылке пойдет. minter.ton.org (reply to 287316)

Иван: если кто знает, подскажите 🫡 (reply to 287294)

&rey: Ну, это вы хотите убрать ончейн-гарантию, что пользователю что-то придёт. Зачем? (reply to 287331)

X1ag: Чтобы выглядело, как он отправляет тоны, но не знает сколько вернется (reply to 287335)

ᅠ: И не знает сколько отправляет 😀 (reply to 287336)

Андрей: Казино пытаешься сделать?) (reply to 287336)

X1ag: нет. Он знает сколько отправляет, мне просто из этой суммы нужно вычесть комиссию минта и сервиса, но она разная. И чтобы пользователь слишком много денег не тратил, эта комиссия должна быть оптимальная. Я хочу чтобы он не знал, сколько он получает обратно, когда отправляет тоны(чтобы не знал какую логику исполнил смарт контракт на момент отправки транзакции) (reply to 287342)

Ivan: внутри смарт контракта этого не сделать тонкипер эмулирует транзакцию  если вы в контракте отправляете что-то это будет видно и в эмуляции  можно с бекенда рассылать тоны когда увидите входящий платеж (reply to 287343)

X1ag: понял, благодарю

Aziz: А правда что если отправить средства с кошелька W5 на V4R2 например - они пропали?

ᅠ: Нет (reply to 287354)

Dmitry | backend4you.ton: если на чужой кошелек, от которого у вас нет сидфразы - да, для вас пропали (reply to 287354)

Aziz: а сорри, я с тестнета на майнет отправлял)

Ivan: К сожалению так не дойдут ( (reply to 287357)

Aziz: ну да понятно.

Dmitry | backend4you.ton: настоятельно НЕ рекомендуется иметь одинаковые адреса (одинаковые сидфразы) для кошельков в тестнете и майннете. в редких случаях может "отзеркалиться" транзакция (по закону мерфи - в самый неподходящий момент)

Dmitry | backend4you.ton: транзакция - нет, сообщение (которое порождает транзацию) - да. они ж публичны, и любой может "скопипастить" (reply to 287361)

Dmitry | backend4you.ton: ну кому-то и пары секунд хватит чтобы скопировать (reply to 287363)

Dmitry | backend4you.ton: плюс учитывайте, что ваш ТТЛ в сообщении может и НЕ присутствовать. разные версии кошельков имеют разные структуры входящихсообщений

GGGleb🔺: привет Информатики 😄  пытаюсь заюзать код минтинга жетонов (контракт уже развернул) из стандатного репозитори Жетона на funC. https://github.com/ton-blockchain/token-contract/blob/main/scripts/minterController.ts и получаю вот такую чепуху Есть идеи ?

&rey: Уже десятки пользователей на себе это проверили. Вообще, стандартный ТТЛ пять минут, а время в обоих чейнах синхронизировано как положено.  seqno... ну, если разный, то хорошо. Вот здесь и работает закон подлости: в самый неожиданный момент они совпадут. (reply to 287370)

Василий: Там код для TonClient, а дефолтный api провайдера сейчас TonClient4. Для того чтобы это работало в таком виде, нужно использовать api toncenter:https://github.com/ton-org/blueprint?tab=readme-ov-file#custom-network (reply to 287368)

Dmitry | backend4you.ton: если не будет - то конечно. а если вдруг будет? :) я ж говорю - "в редких случаях". можно конечно рискнуть и считать что секно всегда будут сильно разные, а можно просто не играть с огнем (reply to 287370)

Aziz: 0QC3QyCAFLWcmMqgj3CgiQ96zhlZ7UuarH2TjO_gjj3Dy34J  Народ подкиньте тестовых ТОН пожалуйста, быстро закончились и ждать снова сутки(

Aziz: Спасибо!!! Мистер миллионер (reply to 287387)

Aziz: теперь можно по-разрабатывать) ура

Mr.Duck: Гайз, есть запрос от менеджеров, что вот эти модалки ( успешный успех и ошибка ) должны закрываться автоматом через пару секунд. Но готового метода я что-то в tonconnect ui не нашёл. Может кто видел/слышал?

Ivan: Просто не делайте так, а менеджерам скажите что они не шарят  Прогнуться под менеджера это зашквар высшей степени в IT мире (reply to 287392)

ᅠ: Так залезь через дом напрямую и кликни по таймеру (reply to 287392)

ᅠ: Оверлей то там есть, если кликнуть вне окна, по нему кликай

Dmitry | backend4you.ton: Нельзя посылать менеджеров :) про 9 перпендикулярных линий же помним :) Надо сказать что это нестандартный функционал, сторонняя компонента и нужно дополнительное финансирование чтобы реализовать их запрос. А когда выделят - тогда уже залезть ручками в дом и послать клик )

&rey: И сказать про то, что это изменяет функционал TC2-пакета и требуется согласование с всеми заинтересованными и платформами) (reply to 287401)

Dmitry | backend4you.ton: Конечно. А потом позвать UX специалистов, чтобы они подтвердили что нестандартность поведения в отдельно взятом приложении вызывает отторжение, и теперь необходимо поменять поведение во всех остальных (сторонних!) приложениях тоже, и попросить на это бюджет еще. (reply to 287403)

User<7062442470>: Смарт контракты придумали чтобы все видели логику исполнения) (reply to 287343)

Ivan: Это не те которые 7 красных линий? (reply to 287401)

Aziz: А есть минтер токенов для testnet кто знает?

SweetJesus: https://minter.ton.org/?testnet=true (reply to 287412)

Aziz: читерство) спасибо

Molodoy Abuzer 3: Да есть там все. Просто такой фундаментальной теме выделен кусочек документации, который составил снг тип с одним примером:) Не слишком показательно, вот и вся проблема (reply to 287171)

Aziz: У кого-нибудь получилось оффлайн получать адрес кошелька жетона? как в примере  https://docs.ton.org/v3/guidelines/dapps/cookbook#how-to-calculate-users-jetton-wallet-address-offline ???  У меня этот пример выдает недействительные адреса(

Oleg: Поиск по чату на глубину где-то до апреля 2024 даст вам ответы (reply to 287419)

— 2025-01-29 —

Namon: Ещё нужно учитывать, что если контракт жетона кастомный, то он может требовать дополнительные данные в data для jetton wallet. Какие именно доп.данные, можно посмотреть в самом контракте жетона. Но если стандартный жетон, то я делал так: export class JettonMaster implements Contract {   constructor(readonly address: Address, readonly init?: { code: Cell; data: Cell }) {}    static createFromAddress(address: Address) {     return new JettonMaster(address);   }    // ...    async getJettonData(provider: ContractProvider) {     const result = (await provider.get('get_jetton_data', [])).stack;     return {       totalSupply: result.readNumber(),       tradingEnabled: result.readBoolean(),       admin: result.readAddress(),       content: result.readCell(),       walletCode: result.readCell(),     };   }    async getJettonWalletCode(provider: ContractProvider) {     const result = await this.getJettonData(provider);     return result.walletCode;   }    async getJettonWalletAddress(     provider: ContractProvider,     ownerAddress: Address,     jettonWalletCode?: Cell   ) {     if (!jettonWalletCode) jettonWalletCode = await this.getJettonWalletCode(provider);     const jettonWalletData = beginCell()       .storeUint(0, 4)       .storeCoins(0)       .storeAddress(ownerAddress)       .storeAddress(this.address)       .endCell();     const stateInit = beginCell()       .storeUint(0, 2)       .storeMaybeRef(jettonWalletCode)       .storeMaybeRef(jettonWalletData)       .storeUint(0, 1)       .endCell();     return new Address(this.address.workChain, stateInit.hash());   } } И чтобы не делать каждый раз запрос к get методу (а, следовательно, и API), можно локально сохранять jettonWalletCode и каждый раз подставлять его в getJettonWalletAddress (reply to 287419)

Егорка: Привет всем. А есть какой-то вариант по подпискам на события в тон? Хочу отслеживать залитие ликвидности в определенный токен

User: Отслеживай все пулы ликвидности, или можно по op кодам транзакции фильтровать (reply to 287422)

Егорка: Немного не понял про отслеживание всех пулов ликвидности. Мне каждую секунду лайт ноде новый запрос на проверку давать, или как лучше сделать? (reply to 287423)

Namon: Посмотрите в сторону вебхуков https://docs.tonconsole.com/tonapi/webhooks-api (reply to 287424)

odnokasanie: Коллеги, поделитесь пжлст функцией на typescript  расчета адреса кошелька из адреса контракта и адреса jetton minter?   Запросом через @ton/ui я могу, но это запрос хотел бы исключить.

Namon: https://t.me/tondev/287421 (reply to 287433)

Namon: Если не хотите никакие запросы к API отправлять, то достаньте jettonWalletCode заранее (reply to 287434)

odnokasanie: спасибо, а как правильно доставать jettonWalletCode? мне надо вычислять адреса кошельков для двух типов жетоно: мой (исходный код у меня) и USDT (reply to 287435)

Namon: В коде есть метод getJettonWalletCode, можете использовать его и сохранять локально, чтобы не вызывать его каждый раз (reply to 287436)

odnokasanie: provider - это от blueprint?  и правильно я понимаю, что jettonWalletCode USDT я могу 1 раз получить и далее вычислять по нему адреса его кошельков у необходимых контрактов? (reply to 287437)

Namon: const client = new TonClient({ ... }) const jettonMasterContract = JettonMaster.createFromAddress(jettonMasterAddress) const jettonMaster = client.open(jettonMasterContract) (reply to 287438)

Namon: Без разницы какой жетон, код jetton wallet не меняется (reply to 287438)

Namon: Последний метод можно переписать немного, изменив название и убрать провайдер, чтобы не приходилось использовать client

Denis: Привет, у нас есть EVM-контракты и web3 аппка, нужно переписать их под телеграм, сделать web app с поддержкой TON. Платим хорошо, с предложениями в личку :)

GGGleb🔺: Ton випустил анонc о Tolk 1.0 Tolk vs FunC что думаете ?

.: FunC до последнего вздоха

Dan: Уже 1.0? Только 0.7 же вышел. Там один разработчик всё пилит, как я понимаю. Нехилый темп. Учитывая, что компилируется что Tolk, что FunC в одни и те же инструкции, я — за Tolk. Современный синтаксис, impure by default, bool... (reply to 287453)

GGGleb🔺: а тем кто 4 года писал на Solidity и только пощупал FunC и Tact на уровне деплоя жетона найденного в интернете  какой будет совет ? (reply to 287454)

Dan: Я как раз пилю туториалы по разработке для TON на Tolk. Можете посмотреть, как выглядит синтаксис. Не знаю, можно ли здесь ссылки на GH давать.

Dan: Попробую, если что — бот выпилит: https://github.com/dankorotin/ton-tutorials

Daniil: Я правильно понимаю, что тестнет - это зеркальная копия мэиннета? ну то есть, у меня есть кошелек в основной сети и в тестовой он так же будет моим? с той же сид-фразой? но если так, почему я тогда ловлю ошибку entity not found при безобидном фетче баланса? client = TonapiClient(api_key=TON_API_KEY, is_testnet=True) wallet, public_key, private_key, mnemonic = WalletV5R1.from_mnemonic(client, TON_WALLET_MNEMONIC) balance_total = await wallet.balance()

X1ag: тестнет - не зеркальная копия мейннета. В тестовой и в основной сети сидка будет одинакова (reply to 287459)

Daniil: спасибо, разобрался (reply to 287460)

Keep: Подскажите англ группу с разработчиками на тон пж.

rends_east: @tondev_eng (reply to 287463)

Aziz: в каком формате лучше показывать пользователю кошелек? UQ….. норм если ?

Torkusz: UQ (reply to 287465)

Aziz: почему именно UQ лучше? (reply to 287466)

Aziz: viewer все ровно конвертит в другой формат

Torkusz: Более юзер Френдли (reply to 287467)

Aziz: чем же?

Lmao: Привет всем, друзья, вопрос немного не в тему: Можете, пожалуйста, скинуть ссылочку на английский чат TON Dev

Vladimir: 8 сообщений выше. (reply to 287479)

Lmao: Благодарю (reply to 287480)

Aziz: public async sendTON(mnemonic: string, toAddressAndMemo: string, amount: number): Promise<CPTx> {      const client = await this.getClient<TonClient4>("v4");     const { publicKey, secretKey } = await mnemonicToWalletKey(mnemonic.split(" "));     const [to, body] = toAddressAndMemo.split(":");     const wallet = client.open(WalletContractV4.create({ publicKey, workchain: 0 }));     const value = `${amount}`; //(amount * 1e9).toString();     const seqno = await wallet.getSeqno();      console.log({       from: wallet.address.toString({ bounceable: true }),       to,       amount: amount,     });     const tx = wallet.createTransfer({       secretKey,       seqno,       messages: [         internal({           to,           value,           body,         }),       ],     });      const hash = tx.hash().toString("hex");      try {       await client.sendMessage(tx.toBoc());      return hash;     } catch (err: any) {       console.error("- - - - - - -");       console.error("- fron", wallet.address.toString({ bounceable: true }));       console.error("- to", to);       console.error("- amount", amount);       console.error("- - - - - - - Ошибка при отправке TON", err?.message);       return;     }    }    подскажите пожалуйста в чем ошибка? При отправке TON возвращается status code 500

Namon: Нужно смотреть описание ошибки, но обычно это из-за того, что экстернал неправильно сформирован (и не может обработаться), либо кошелёк не задеплоен (и экстернал не может обработаться) В описании ошибки будет довольно подробный traceback (reply to 287482)

Aziz: data: '500 Internal Error' (reply to 287483)

Namon: Попробуйте использовать TonClient вместо TonClient4 (reply to 287484)

Blotho: Добрый день , подскажите пожалуйста : ton-testnet  делаю запрос на токен , вставил api , адрес с тонкипера в сети тест , пишет что не инициализирован, это проблемы с сетью и стоит подождать?

Aziz: Может у вас найдется готовый пример отправки TON с получением хеша отправленной транзакции? (reply to 287485)

Aziz: const tx = wallet.createTransfer({         seqno,         secretKey,         messages: [           internal({             value,             to,             body,           }),         ],       });       wallet.send(tx);       hash = tx.hash().toString("hex");   Отправка заработала, но hash неверный почему-то(

&rey: А почему бы он был верный, можно уточнить? (reply to 287496)

Aziz: да хз. ни одного примера как получить хеш до/после отправки. Разве что ждать и чекать список транз кошелька и сопоставлять сумму, что бред (reply to 287497)

ᅠ: Потому что тут не кефир) надо плясать от адреса кошелька и чекать новые тх по фильтрам (reply to 287499)

&rey: Сколько уже раз объяснялось... до отправки вы можете получить только хеш экстернала. Это не хеш транзакции, но некоторые апи его жрут нормально. (reply to 287499)

ᅠ: Через раз, в какой то момент моя реализация подобная отвалилась, буквально перед нг (reply to 287501)

&rey: А получить хеш транзакции – да, надо блокчейн опрашивать. Разными способами можно, если посмотреть методы тонцентра.

Aziz: значит единственный вариант предоставить клиенту хеш отправленной им транзакции это чекать историю? и то спустя какой-то таймаунт?(

&rey: а вы не забываете, что транзакция может и задержаться на пару блоков? (reply to 287502)

Aziz: реально, ряженка (reply to 287500)

ᅠ: Не-а, я переделал на кошельки и забыл об этом, чекаю кошельки с lt > lt последней тх (reply to 287505)

Artem: Всем привет, нужна еще ваша помощь, смотрите при переводе TON на единый кошелек (hotwallet) средств это делается с модом 128+32 чтобы не платить за хранение, и кошелек становится не активным со статусом nonexist, затем пользователь снова переводит на этот кошелек TON и статус получается uninit - при этом дальнейшие переводы на hotwallet становятся недоступны - как решить эту проблему? в доке написано что его нужно заново инициализировать, но я не понимаю, разве эта инициализация не должна была произойти как только на него была отправлена not bounce транзакция? вот как пример https://tonviewer.com/UQDaFXXKUMZ1Vz-O_y68MnhAYb7hnV49FoVOSx5LNNFR0XYG

Aziz: const forwardPayload = beginCell()           .storeUint(0, 32) // 0 opcode means we have a comment           .storeStringTail(memo)           .endCell();  beginCell()           .storeUint(0xf8a7ea5, 32) // opcode for jetton transfer           .storeUint(0, 64) // query id           .storeCoins(amount * 10 ** token.decimals) // jetton amount, amount * 10^Decimals           .storeAddress(Address.parse(to)) // jetton recipient           .storeAddress(Address.parse(wal.walletAddress)) // response destination           .storeBit(0) // no custom payload           .storeCoins(0) // forward amount - if > 0, will send notification message           .storeBit(0) // we store forwardPayload as a reference, set 1 and uncomment next line for have a comment           .storeRef(forwardPayload)           .endCell()   подскажите пожалуйста правильно ли я указываю MEMO при отправке? почему-то затирается после отправки

Aziz: Много вопросов задаю сори, только взялся за тон… Кстати станно что здесь так мало народу после объявления о запреде другой крипты в тг

SweetJesus: нужен единичный бит, когда форвард в ссылке. И форвард тон укажи, если уж пейлоад отправляешь. (reply to 287525)

Aziz: Спасибо. Почитаю док, поищу что бы это значило) (reply to 287528)

Farid: Привет!  Прилетела входящая транзакция, затем моментально исходящая (с суммой чуть меньше). Лично я не делал не первую, ни вторую транзакцию.  Это произошло через 33 сек после пополнения кошелька. Использую Wallet в tg (если конкретно, TON Space).  Вопрос — как технически может быть устроено такое поведение, что исходящая транзакция сама произошла без моих действий? У меня лишь одна догадка — Wallet делает спам рассылку таким образом (соотвественно, имея приватный ключ, совершает и исходящую транзакцию)  Если интересно, вот кошелек: UQArqBqYADT_y4J95AXk_j8xpoxbTK3zHT2DGPYYnj3JJ74Y Вторая и третья транзакции — о которых я спрашиваю

Max: баунс флаг (reply to 287536)

Max: и wallet тут ни при чём

Namon: Чтобы инициализировать, нужно прикрепить в том числе state init (reply to 287520)

Farid: А почему входящая транзакция "отскочила"? (и из-за этого отправилась обратно вся сумма, за вычетом комиссии)  Входящий перевод выглядит как обычный перевод, а кошелек будто не смог его отработать (reply to 287537)

Max: потому что кошелёк на момент спама не был у вас инициализирован (reply to 287540)

Namon: Ну как бы, чтобы отправить кому-нибудь TON, не нужно иметь приватный ключ кошелька получателя (reply to 287536)

Vasyl: Ребят, работал кто с payment invoice от tonconsole? Не могу понять где регестрировать вебхук

Montana: Accepted 😎🥳

Danilych: Всем привет, у вас работает rpc тонцентра? Мне начало сегодня кидать 500 без каких либо дополнительных ошибок.

Влад: Ребята Кто знает, как можно jetton купить с помощью любой апишки? Желательно на python

— 2025-01-30 —

User<6671649170>: Апи?) (reply to 287561)

Н: Ребята, кто подскажет как сделать холодный кошелёк на тон(для чайников)?

Н: Ребята, кто подскажет как сделать оффлайн генерацию кошелька на тон(для чайников)?

&rey: Именно "сделать", а не "выбрать из существующих"? Возьмите компьютер, скачайте на него... что там... допустим, @ton/ton, отключите от сети и сгенерируйте ключи. На устройство надо будет переносить каким-то образом seqno, адреса назначения, payload и stateInit, а обратно подписанное сообщение. (reply to 287572)

&rey: Ну, она вообще-то всегда оффлайн.  const m = await mnemonicNew(); const keyPair = await mnemonicToKeyPair(m); const wallet = WalletContractV3R2.create({workchain: 0, publicKey: keyPair.publicKey}); console.log(wallet.address.toString({bounceable: false})); (reply to 287578)

Н: Я не являюсь специалистом, и мне "собака тонтон" ни о чем не говорит. Существует ли где пошаговая инструкция?  Смысл в том что я хочу делать это оффлайн. У биткоина все кошельки уже созданы, генерация в этом случае это выбор из уже созданных. (reply to 287580)

&rey: Любое приложение кошелька генерирует их оффлайн, поэтому я не понимаю, а что же именно вам нужно.  (И да, на тоне принято использовать один кошелёк, а не "адреса сдачи". Как минимум, удобнее с жетонами и SBT.) (reply to 287582)

Н: Спасибо, это кажется отвечает на мой вопрос. Надо потэстить. Правильно я понимаю что речь о майтонволет например? (reply to 287583)

Н: Я понимаю что это может быть паранойя, но могу ли я как-то быть уверен в действительности случайной генерации закрытого ключа(если тон работает по такому же принципу как и биток) приложениями типа МайТонВолет?  Или быть может я могу каким-то скрипом сам создавать/генерировать его(или мнемоническую фразу)? (reply to 287583)

&rey: 1. Вы можете посмотреть исходный код кошелька и, если надо, собрать приложение локально. 2. Вы можете установить (до уровня "как установить какой-то модуль Python" я опускаться не буду, не тот чат) pytoniq и сделать pytoniq.keys.mnemonic_new(). Исходный код библиотеки на гитхабе есть. (reply to 287585)

Н: Я слышал что некоторые сервисы по генерации кошельков генерировали случайные кошельки, но из определённого пула кошельков, подконтрольных этому сервису, чтобы потом ограбить пользователей.

Н: Поэтому я и говорю про оффлайн, но если генерация кошельков происходит из ограниченного диапащона номеров, даже отключение от сети не поможет. (reply to 287586)

&rey: Сгенерируйте секретный ключ сами (secrets.random_bytes(32)) и импортируйте в TonDevWallet, значит. (reply to 287592)

Н: Спасибо, это очень хороший ответ 💪👍 (reply to 287587)

Н: Для выполнения этого нужен только pytoniq? (reply to 287593)

&rey: Даже он не нужен, secrets – встроенная библиотека Python. (reply to 287597)

Daniil: Скажите, у ТОНовцев есть АПИ, позволяющее четко увидеть, что транзакция ещё не выполнилась до конца, и она pending?  Мне просто это надо для того, чтобы понимать, прошел свап или нет. всё, что я нашел, это то, что можно получать traces транзакции и пытаться её расшифровывать, не возникли ли там какие-то ошибки со стороны бирж transaction_traces = requests.get(f"https://tonapi.io/v2/traces/{tx_hash}").text                         if STONFI_ROUTER_V2_SWAP_CODE_ERROR in transaction_traces or STONFI_ROUTER_V1_SWAP_CODE_ERROR in transaction_traces:                             return 0 а нет ли чего-то такого, что позволяет увидеть, текущая транзакция pending или завершена уже? это тоже было бы круто (тогда можно не играть в детектива с кодами операций, а просто увидеть, что транзакция уже не pending, а завершена, и если баланс не изменился, то свап и не случился)

&rey: *не транзакция, а дерево транзакций. Там же в traces было поле, нет? (reply to 287606)

Daniil: а какое именно? тут очень много чего есть (reply to 287607)

&rey: in_progress где-то выше списка транзакций. (reply to 287608)

Daniil: да, вы правы, есть "in_progress": false только оно не в traces, а в events (reply to 287609)

Denis: Привет, ищу разработчика на FunC/Tolk/Tact для рефакторинга Solidity-контрактов, msg me.

GGGleb🔺: существует жетон на Tolk в открытом доступе ? дайте репозиторий пожалуйста

⁣⁣ᅠ: Всем привет, подскажите пожалуйста, если пользователь захочет сделать свап жетонов на другие жетоны, к примеру usdt на reba, и будет обменивать больше чем у него есть на балансе, usdt на reba, то на каком уровне выполнения транзакции он получит ошибку ? На уровне кошелька или твм ?

⁣⁣ᅠ: То есть если с тоннами все просто там кошель выкидывает сообщение мол "нету денег " то с жетонами я не знаю как это будет 😅

&rey: На уровне жетон-кошелька, когда код того кинет ошибку "недостаточно средств". (reply to 287622)

⁣⁣ᅠ: Принял спасибо большое (reply to 287624)

GGGleb🔺: в жетоне есть проверка (reply to 287622)

⁣⁣ᅠ: Благодарю (reply to 287626)

GGGleb🔺: 😒 (reply to 287621)

⁣⁣ᅠ: А можете технически еще дать теории, этот весь процесс "распознание моего баланса" как происходит могу ли я где то про это в подробностях прочитать ? (reply to 287624)

GGGleb🔺: https://docs.ton.org/v3/guidelines/dapps/asset-processing/jettons (reply to 287629)

&rey: Ну, там надо сопоставить несколько документов (смотря до какого уровня вы копаете).  Наверняка пригодится знание того, что для отправки жетонов пользователь посылает сообщение на его же жетон-кошелёк, и знание того, что после этого вызывается TVM на жетон-кошельке. (reply to 287629)

⁣⁣ᅠ: Вот 1ую часть знал. А 2уб ток щас ) (reply to 287632)

Viacheslav: посоветуйте сервис или опенсорсное чтото для массовой рассылки жетонов? нужно на 150 адресов отправить

Daniel: ton mass sender  @tonmassend_bot (reply to 287634)

Михаил: Для этого есть специальный раздельный клиент https://github.com/ton-offline-storage Если вы не довереяете генерации мнемоники, опять же проверьте исходный код, или сгенерируйте сами (reply to 287572)

Oleg: Это как, разрыв шаблона какой-то) (reply to 287618)

Denis: У нас есть solidity-контракты и рабочий веб3 апп, нам надо его портировать в телегу, TMA. Логика останется та же, язык - изменится. Скорее всего это будет Tact, но тут уже от разработчика экспертное мнение хотелось бы получить. (reply to 287638)

Oleg: Я бы назвал это миграцией, но не рефакторингом (reply to 287639)

Joker: Всем привет! Кто-нибудь знает как отсчитывать количество суток прошедших с какого-то события в смарт контракте? К чему временем привязываться? Может есть какие-то внутренние часы у TON?

SweetJesus: фиксируешь таймстемп просто ( now() ), с прибавкой необходимого количества времени и пишешь в сторадж, дальше достаешь и сравниваешь с текущим. (reply to 287645)

Sharif: Прошу прошения за оффтоп. Разбаньте плз

Kirill: Всем привет. Подскажите пожалуйста, как можно понять что транзакции полностью завершилась по данным из самой транзакции

Kirill: Ну вот условно в tonviewer

&rey: *дерево транзакций.  out_msgs каждой транзакции в дереве должны быть все обработаны следующими транзакциями (проверять по in_msg). (reply to 287694)

GGGleb🔺: Посоветуйте пожалст.  Есть файл жетона  workchain() - есть в import "params.tolk" а jetton-utils.tolk - ругается что его не видит   как сбилдить контракт в .tolk ?

Kirill: Спасибо большое за наводку (reply to 287696)

GGGleb🔺: правильное ли решение делать import "params.tolk"  и в jetton-utils.tolk и в jetton-master.tolk где есть import "jetton-utils.tolk" (reply to 287697)

лёньчик??: вопрос. как подтвердить свой токен?

лёньчик??: у меня пишет что токен непроверенный и при переводе пишет что спам

G..: Приветствую , у меня вопрос по токену ,мне надо знать для будущего запуска токена , если у контракта есть пул ликвидности , контракт деплоил я , в который я не закидывал токены , а в нем на адресе имеется некоторое количество токенов (на контракте) , я могу эти токены взять и вывести на свой кошелек?

german: Всем привет, проблема с beginCell, всё react приложение падает при его импорте, а в консоли ошибка Buffer is not defined. Кто сталкивался?

X1ag: только если такая функция реализована в коде этого контракта (reply to 287713)

kwinkich: какой сборщик? (reply to 287714)

german: vite

kwinkich: сейчас в лс скину решение (reply to 287717)

G..: А как это узнать? (reply to 287715)

X1ag: посмотреть код контракта. Если там есть что то типа if (op == op::withdraw_all){...}, то думаю, что есть, иначе нет (reply to 287719)

лёньчик??: ??? (reply to 287705)

Denis | White Core: Коллеги, всем здравствуйте, понимаю, что я не по теме, но кто нибудь хочет купить полностью готовый мини апп?

Zaur: кто хорошо тг апи знает? нужно скрипт написать на питоне. Заплачу. Подробности в лс

🏆: можно ли в тон передать ownership над текущим кошельком кому-то другому, чтобы только он смог подписывать транзакции?

User<7062442470>: Пробовал AMOUNT больше, например 0.5? (reply to 287727)

Егорка: не, а есть разница? (reply to 287730)

Torkusz: Да (reply to 287731)

Егорка: на обменнике через кошелек и 0.05 проходит, если вручную

Егорка: ща попробую

Torkusz: Кошелек считает комиссию ещё   Код сам ничего не считает) (reply to 287733)

Shon: Посмотри обновленный пример: https://github.com/nessshon/tonutils/blob/main/examples/jetton/dex/stonfi/v2/swap_ton_to_jetton.py (reply to 287727)

Егорка: да вот читаю уже

Егорка: там как раз и слиппедж есть

Егорка: всем спасибо ребятки❤️

Егорка: данные доступные для передачи в транзакцию

Namon: min_ask_amount (reply to 287751)

Егорка: 1-100% 0-0% (reply to 287752)

Namon: Я думаю, нужно указывать минимальное кол-во jetton, которое Вы планируете получить Но лучше посмотреть в реализации / примерах (reply to 287753)

Егорка: Ага

Егорка: Мало что есть там (reply to 287754)

Егорка: Ща буду пробовать

Thea: да, я могу создать много приложений tg (reply to 287725)

Thea: если это не сработало, я недавно написал сценарий передачи Jetton (reply to 287750)

муха: Подскажите что делать, упал лайт, и не видит конфиги никакие, файлы свои перестал видеть

— 2025-01-31 —

Ruslan: что возвращает validator-console -c getstats? (reply to 287765)

муха: Решил не ждать и снёс все, по новой ставлю. Второй раз, потому что поставил не full а liteserver mode при установке (reply to 287766)

User: #DEBUG#: s0 = CS{Cell{00438007aef808e597bfe22712b54ef80a1b8831557c51516df80abd7b7218060e40b750} bits: 0..267; refs: 0..0}     #DEBUG#: s0 = CS{Cell{00438005baa7e1ca34d9938f90c9a101fc3cf42a7f5bbac919768f33fdab020ba69c1410} bits: 0..267; refs: 0..0}     #DEBUG#: s0 = CS{Cell{01b14800146a113a2d634020d65cc2af2f8336697fe0adb455559113d4d7f63d80beb2f500296ea290aee4da14683939e46624c8b18239fef5ce511aa0dfb76507081ee65bd0a6e49c00060c565c00000000044aa202cf3874bcc0} bits: 4..271; refs: 0..0}   Я получаю 2 адреса просчитывая их через func, а третий это sender_address. Почему sender_address по битам занимает одно и тоже, но во первых не совпадает, а во вторых - это совсем другой адрес, он в два раза длинней. Можете подсказать в чем может быть проблема

&rey: Потому что отладчик вам slice отображает поверх исходной ячейки. Если вы возьмёте биты 4..271, то как раз тот же адрес и будет. (reply to 287770)

User: Спасибо (reply to 287771)

Nikita Shulgin: привет, товарищи по цеху  подскажите умоляю Вас - я всю доку перерыл и не нашел никакой инфы   как написать скрипт на питоне для обращения к сети? какая либа официальная?

Igor: Не оно?https://docs.ton.org/develop/dapps/apis/sdk (reply to 287777)

муха: full не увидело, хотя раньше такой параметр был. Переключил в liteserver. Хочу получить конфиг ->  MyTonCtrl> installer                                                  /home/lite/.pyenv/versions/3.10.11/bin/python3: No module named mytoninstaller                                                                                                                                    MyTonCtrl>  Не видит mytoninstaller (reply to 287767)

Vladimir: Всем привет! А кто-нибудь делал эксплорер или что-нибудь подобное, что требует знать сообщение с окончанием транзакции? Сообщения могут находиться в разных блоках и мне получается надо понимать когда транзакция выполнилась полностью 😬

&rey: С этим вопросом много проблем, включая терминологию... 1 сообщение = 1 транзакция. Вы имеете в виду дерево транзакций. А у дерева может быть больше одной "последней" транзакции — листа, если говорить по-нормальному. (reply to 287791)

Vladimir: Согласен, с терминологией проблема. Но суть в том, что мне нужно понять когда дерево транзакций полностью завершилось и когда можно ретроспективно посмотреть на то что в итоге произошло, в этом вопрос ) (reply to 287795)

&rey: Можно через tonapi запросить, можно по определению (для любого интерфейса, позволяющего транзакции запрашивать). (reply to 287802)

Vladimir: А это как? То есть как-то проэмулировать результат и потом его ждать, собирая из разных транзакций? (reply to 287804)

&rey: Собираем множество транзакций. Если у каждой транзакции каждый out_msg уже обработан другой транзакцией (in_msg), то всё завершилось. (reply to 287806)

Wrangler: Нужно доделать 3 контракта ico площадки, готовность 70%, контакт с кодером есть, пишите в л.с., в дальнейшем возможна оплата постоянной поддержки проекта и изменений.

⁣⁣ᅠ: Всем привет, подскажите пожалуйста, делаю запрос на геттер смарта и получаю данные в виде cell hex, как из этого можно получить данные   Запрос

🐼 Sild: а это и есть данные в бинарном виде. Чтобы прочитать оттуда что-то осмысленное нужно либо знать что именно там лежит и в каком порядке (парсить дерево ячеек), либо передать это эмулятору и вызывать run_get_method (reply to 287812)

Oleg: Кроме вас никто не знает, что это за смарт и какая у него схема данных. Надо парсить согласно схеме (reply to 287812)

⁣⁣ᅠ: О каком эмуляторе идёт речь? (reply to 287813)

🐼 Sild: либо какой-нибудь такой вызов (на ноду) https://github.com/ton-blockchain/ton/blob/master/tl/generate/scheme/tonlib_api.tl#L317  либо что-нибудь что оборачивает эти функции (локально) https://github.com/ton-blockchain/ton/blob/master/emulator/emulator-extern.h

Nikita Shulgin: умоляю, комрады - посдкажите пожалуйста   пишу скрипт для покупки за MAJOR NFT с GetGems на питоне, но не понимаю какой либой лучше это сделать. .   задача то блин простая - транзу отправить. .

Mirka: github.com/nessshon/tonutils (reply to 287817)

Nikita Shulgin: не смог по TonTools сориентироваться как транзу отправить с указанием валюты откупа НЕ ton (reply to 287822)

Nikita Shulgin: в том и проблема что инфы почти нет. .

Nikita Shulgin: Подскажите пожалуйста   https://github.com/nessshon/tonutils/blob/main/examples/nft/mint_onchain_nft.py  Здесь логика минта NFT   Если мне надо откупить токен на вторичном рынке на GetGems == минт? Или это транзакция на смартконтракт конкретный?

Mirka: Покупка nft на gg это не минт, это транзакция на нужный тебе контракт обмена с последующей передачей картинки тебе на кошелек (reply to 287827)

Nikita Shulgin: https://github.com/nessshon/tonutils/blob/main/examples/tonconnect/sending_transaction/transactions.py  тут тоже как понимаю не та логика. .  с этим тоном совсем себя тупым ощущаю

Nikita Shulgin: откупать NFT с GG надо со смартк-контракта Маркет Плейса или через отправку транзакции на смарт контракт конкретного NFT?   https://github.com/nessshon/tonutils/blob/main/examples/jetton/transfer_jetton.py  тут вроде уже ближе к истине. .

Molodoy Abuzer 3: Это пример транзакции, порожденной external сообщением на highloadV3. 1) Что на этом скрине значит fwd fees? Чем оно отличается от forward fees? 2) Почему total fees не соответствует сумме всех комиссий ниже? Если сложить gas fee + fwd. fee + storage fee + action fee, то не получится total fees. 3) начальный баланс аккаунта 0.081377095 TON. Как после вычета всех комиссий end balance получился 0.006608699?

⁣⁣ᅠ: Ну я распарсил написав вот такой код  import { Cell, Dictionary } from '@ton/core';  import { createHash } from 'crypto';    export type jettonMinterContent = {    name: string;    description: string;    symbol: string;    decimals: string;    image: string;  };    export function parseJettonMinterContentCell(cell: Cell): jettonMinterContent {    const slice = cell.beginParse();    slice.loadUint(8);      const itemContentDict = slice.loadDict(Dictionary.Keys.BigUint(256), Dictionary.Values.Cell());      return {      name: decodeString(itemContentDict.get(toSha256('name'))?.beginParse().loadStringTail() ?? ''),      description: decodeString(itemContentDict.get(toSha256('description'))?.beginParse().loadStringTail() ?? ''),      symbol: decodeString(itemContentDict.get(toSha256('symbol'))?.beginParse().loadStringTail() ?? ''),      decimals: decodeString(itemContentDict.get(toSha256('decimals'))?.beginParse().loadStringTail() ?? ''),      image: decodeString(itemContentDict.get(toSha256('image'))?.beginParse().loadStringTail() ?? ''),    };  }    function toSha256(str: string): bigint {    const hash = createHash('sha256').update(str).digest('hex');    return BigInt('0x' + hash);  }    function decodeString(encoded: string): string {    return encoded.replace(/\u0000/g, '');  }    const cell = Cell.fromHex(    'b5ee9c7201020d0100014100010300c00102012002030143bff082eb663b57a00192f4a6ac467288df2dfeddb9da1bee28f6521c8bebd21f1ec004020120050600d00068747470733a2f2f617661746172732e6d64732e79616e6465782e6e65742f693f69643d653964636562633538336530313665653834373838303937373533663632393936323335346534322d393138333034302d696d616765732d7468756d6273266e3d31330201200708020120090a0141bf4546a6ffe1b79cfdd86bad3db874313dcde2fb05e6a74aa7f3552d9617c79d130b0141bf6ed4f942a7848ce2cb066b77a1128c6a1ff8c43f438a2dce24612ba9ffab8b030b0141bf5208def46f5a1d4f9dce66ab309f4a851305f166f91ef79d923ef58e34f9a2090b0141bf5d01fa5e3c06901c45046c6b2ddcea5af764fea0eed72a10d404f2312ceb247d0c000600313200040039',  );  const content = parseJettonMinterContentCell(cell);  console.log(content); И он работает, и тогда вопрос насколько правильно я его написал 🤔 (reply to 287814)

⁣⁣ᅠ: Мне нужно просто ответ из разряда "ты наговнокодил вот тут можно вот так" или "у тебя все ок" )

Molodoy Abuzer 3: Если работает, лучше не трогать. (reply to 287832)

⁣⁣ᅠ: Так то да, а так то если говнокод то нужно переделать ) 😅 (reply to 287835)

elton: привет, а в тон нельзя одновременно задеплоить несколько контрктов из tonclient?

⁣⁣ᅠ: Все еще раз привет, может подсказать кто нибудь что за странная ошибка ?  export function parseJettonContent(cell: Cell): jettonMinterContent {    const cs = cell.beginParse();    const prefix = cs.loadUint(8);    if (prefix !== 0) throw new Error('Invalid content prefix');      const dict = cs.loadDict(Dictionary.Keys.BigUint(256), Dictionary.Values.Cell());      const getField = (field: string): string => {      const hash = BigInt('0x' + createHash('sha256').update(field).digest('hex'));      const cell = dict.get(hash);      if (!cell) throw new Error(`Missing ${field} field`);      return parseTextCell(cell);    };      return {      name: getField('name'),      description: getField('description'),      symbol: getField('symbol'),      decimals: getField('decimals'),      image: getField('image'),    };  }    function parseTextCell(cell: Cell): string {    const cs = cell.beginParse();    if (cs.loadUint(8) !== 0) throw new Error('Invalid text cell format');    return cs.loadStringTail();  }

⁣⁣ᅠ: Такая ошибка именно на веб вью (reply to 287838)

elton: сделал Promise.all зашел в кошелек там только одна транза (reply to 287837)

Victor: В одном сообщении можно положить только один state init. Можно сделать, чтобы пользователь подписывал несколько сообщений. Любо поиграться со смартом (reply to 287837)

Ivan [on Vipassana till 27.04]: ребят а может рандом кофе бота запустим тут? поможет перезнакомиться с теми кто открыт к диалогу @randomcoffee_official_bot @tsivarev @alefman

Denis: Fwd. fee. в транзакции это общая стоимость пересылки исходящих сообщений (их может быть несколько). Forward fee сообщения это та сумма, которая дополнительно прикрепляется к сообщению чтобы по дороге шарды могли чарджиться за его пересылку.  тотал фи для сообщений порожденных экстерналами не явно включает в себя плату за иморт этого экстернала. при этом cуществует довольно много правил о том как и что там считается помимо этого. (reply to 287831)

Denis: если упростить код на го то мы считаем как-то так var balanceChange int // we don't add inMsg.Value to balanceChange // because inMsg.Value is included in creditPhase.CreditGrams. for _, m := range tx.Msgs.OutMsgs {   balanceChange -= m.Value } aggregatedFee := int64(tx.TotalFees.Grams) if actionPhase != nil {   aggregatedFee += int64(actionPhase.TotalFwdFees)    if actionPhase.MsgsCreated > 0 {     aggregatedFee -= int64(actionPhase.TotalActionFees)   } } if storagePhase != nil {   storageFee = int64(storagePhase.StorageFeesCollected) } balanceChange -= aggregatedFee if creditPhase != nil {   balanceChange += int64(creditPhase.CreditGrams) } if bouncePhase != nil {   balanceChange -= int64(bouncePhase.FwdFees) }

Molodoy Abuzer 3: Подскажите плиз если трейс ещё не завершился, он будет возвращаться? Имею ввиду что я запрашиваю с tonapi трейсы, может ли быть такое что вернётся трейс, который включает в себя не все транзакции, а только те, что успели процеснуться?

Denis: да (reply to 287846)

Denis: точнее как

Denis: стоит понять что такое транзакции

Denis: транзакции появляются когда на аккаунт приходит сообщения. это реакция на сообщение которая может в свою очередь породить сообщения. причем транзакция случаются не заранее а потом финализируются, а именно что вот прям приходит сообщение и случается транзакция. тоесть если сообщение отправлено но не дошло то дочерней транзакции не существует. метод трейсов тонапи возвращает только финализированные данные. тоесть вполне себе могут транзакции где есть исходящие сообщения которые не породили транзакций

Molodoy Abuzer 3: Хм, спасибо (reply to 287850)

Molodoy Abuzer 3: Я правильно понял, возможно такое что: В трейсе есть транзакция, у нее есть exit code, соответственно action phase уже завершилась и она успела отправить другие сообщения, но чилдренов она может не иметь так как сообщения ещё не долетели до контрактов? (reply to 287850)

Denis: Да (reply to 287854)

Denis: Там будет out_msgs. Когда сообщение порождает транзакцию мы пересовываем её как входящее сообщение ребёнку

Denis: Только надо помнить что экстернал_аут сообщения транзакций не порождают

GGGleb🔺: может кто с мод может подсказать ? и ошибкой 37  что не хватает денег (

Nikita Shulgin: контракт продажи нфт на GG отдает 48 статус (ошибка в логике смарта)  тело запроса:    client = TonapiClient(api_key=API_KEY, is_testnet=IS_TESTNET) wallet, _, _, _ = WalletV4R2.from_mnemonic(client, WALLET_MNEMONIC)  body = JettonWallet.build_transfer_body(   recipient_address=Address(sale_contract),   response_address=wallet.address,   jetton_amount=int(price_major * (10 ** 9)),   forward_payload=begin_cell().store_uint(0, 32).store_snake_string("Buying NFT").end_cell(),   forward_amount=500000000, )  tx_hash = await wallet.transfer(   destination=Address(jetton_wallet_address),   amount=0.04,   body=body, )   подскажите пожалуйста, в чем может быть ошибка? в тест-нете еще блин не оттестить его -_-

odnokasanie: Коллеги, на уровне react-приложения и использования @ton/ui-connect можно определить, что транзакция уходящая на подтверждения изначально failed, как это видит пользователь при подтверждении?  По причинам недостаточности баланса, например.  Понятно, что можно проверять балансы до передачи на подтверждение. Мой вопрос про возможности компоненты это видеть.

&rey: jetton_wallet – это не продажа нфт. Вроде. (reply to 287863)

Nikita Shulgin: jetton_wallet_address - это адрес кошелька с MAJOR'ом

Bogdan: Привет! Выше где-нибудь было обсуждение про новые ограничения на ТМА? Можете реплайнуть пожалуйста

&rey: Это по теме @devs_cis скорее. (reply to 287869)

Bogdan: Благодарю (reply to 287870)

Nikita Shulgin: ура! новая ошибка!  теперь транза доходит до смарт контракта, но он отдает OUT of gas, status -14  Сталкивался кто либо? Помогите пожалуйста, я баксов 100 сжег уже -_-

Nikita Shulgin: тогда почему дерево дальше не строится и NFT мне не приходит  дерево вот так должно быть построено  а в моем текущем кейсе до jetton_notify доходит и дальше не идет(

Nikita Shulgin: помогите умоляю, я уже всем богам с кровью и слезами помолился

Farel: Ты пишешь контракт для покупки нфт за какой-то собственный токен? (reply to 287875)

Nikita Shulgin: за токен MAJOR (reply to 287878)

Denis: Форвард тон эмаунт маленький слишком (reply to 287879)

Farel: А контракт продажи гетгемсовский? (reply to 287879)

Nikita Shulgin: так точно (reply to 287881)

User: builder create_jetton_transfer_body(int query_id, int fwd_amount, int jetton_amount, slice to, cell forward_payload) inline {     return begin_cell()         .store_uint(0xf8a7ea5, 32)         .store_uint(query_id, 64)         .store_coins(jetton_amount)         .store_slice(to) ;; to_owner_address         .store_slice(to)         .store_maybe_ref(null()) ;; todo: check if it used in contract         .store_coins(fwd_amount) ;; forward_ton_amount         .store_maybe_ref(forward_payload); }   Можете подсказать, почему до меня не доходит в func forward_payload? Может я сообщение не правильно формирую

Nikita Shulgin: сдвинулись дальше (добавил 0 в forward_amount)  сейчас значение forward_amount=10_000_000 и в транзе отображается MAJOR   но стоит добавить еще 0 и в транзе отобаржается TON (reply to 287880)

Dmitry | backend4you.ton: Вы сравните все же «успешное» дерево и свое. Там прям на скринах же видно (reply to 287887)

Nikita Shulgin: на первом скрине построенное до конца дерево  на втором amount = 0.04  на третьем amount = 0.55  первое и третье на вход одну сумму получили   но третье не дошло до конца а первое дошло -_-  я суицыднусь сейчас от эой сети   первое дерево - этол "успешная" транза при покупке через браузер на GetGems

Nikita Shulgin: Я СМОГ!!!!!!!!! !ЧУВАКИ ВЫ ЛУЧШИЕ

Назим: не за что (reply to 287893)

User: cell state_init = calculate_jetton_wallet_state_init(to_owner_address, jetton_master_address, jetton_wallet_code);   slice to_wallet_address = calculate_jetton_wallet_address(state_init);   slice response_address = in_msg_body~load_msg_addr();   cell custom_payload = in_msg_body~load_dict();   int forward_ton_amount = in_msg_body~load_coins();   throw_unless(708, slice_bits(in_msg_body) >= 1);   slice either_forward_payload = in_msg_body;   ~dump(either_forward_payload);  #DEBUG#: s0 = CS{Cell{01b40f8a7ea50000000000000000601d1a94a2000800e0fdf8e3e0e7e7ede7303993c6093036806e3179433b6b1f59cd2b602ab02fdf001c1fbf1c7c1cfcfdbce6073278c12606d00dc62f28676d63eb39a56c055605fbc83b9aca01} bits: 719..720; refs: 0..1}  Я правильно понял что мой either_forward_payload почему-то 1 бит?

Vadim: async function deployScript() {     const codeCell = Cell.fromBoc(Buffer.from(hex, "hex"))[0];     const dataCell = new Cell;      const StateInit: StateInit = {         code: codeCell,         data: dataCell     };      const stateInitBuilder = beginCell();     storeStateInit(StateInit)(stateInitBuilder);     const stateInitCell = stateInitBuilder.endCell();     const address = contractAddress(0, {         code: codeCell,         data: dataCell     })          console.log("[ADDRESS]: " + address.toString({testOnly: true}))     let link =      'https://app.tonkeeper.com/transfer/' +      address.toString({        testOnly: true,      }) +      "?" +      qs.stringify({        text: "Deploy contract by QR",        amount: toNano("0.1").toString(10),        bin: stateInitCell.toBoc({idx: false}).toString("base64"),      });          console.log("[URL]: " + link)     qrcode.generate(link, {small : true}, (code) => {         console.log(code)     });  }  при попытке деплоя контракта в тестовую сеть не хочет воспринимать bin при задаче параметров link  как это можно поправить?

&rey: base64url кодировать. (reply to 287900)

Blotho: Добрый вечер

Blotho: Есть кто проконсультирует по смарт контракту?

Blotho: Толковый а не с чатом gpt )

&rey: Так спрашивайте. Кстати, поиск телеграма [в этой группе] тоже много знает) (reply to 287905)

Blotho: Нужно в лс ) (reply to 287907)

(●̮̮̃●̃): подскажите а как можно через rpc чекнуть балансы токенов на кошельке? сами тоны спокойно чекаю, а как токены не могу найти

(●̮̮̃●̃): я так понимаю метода нет, надо как-то иначе чекать

Doni: Добрый вечер, подскажите, как из этого te6ccgEBAgEANgABTgAAAABUZWxlZ3JhbSBQcmVtaXVtIGZvciA2IG1vbnRocyAKClJlZgEAFCMwc0pIeUVESzQ превратить в нормальный стринг без лишних байтов и символов?

Oleg: Это base64 encoded (reply to 287912)

Doni: я понимаю, но при декодировки много лишних байтов и символов (reply to 287913)

Oleg: Лишние выбросить, нужные оставить, все просто)

Doni: мне кажется это не правильный подход

&rey: s = Cell.fromBase64("te6cck...").beginParse() s.loadUint(32) s.loadStringTail() (reply to 287912)

&rey: Проблема в том, что они не совсем на кошельке... посмотрите методы из группы v3. (reply to 287909)

(●̮̮̃●̃): то есть никак? О_о (reply to 287918)

Mirka: Баланс каждого жетона для каждого кошелька хранится на своем смарт контракте. Чтобы узнать баланс жетона нужно узнать адрес жетон валлета и опросить его (reply to 287919)

Vadim:     let link =      'https://app.tonkeeper.com/transfer/' +      address.toString({        testOnly: true,      }) +      "?" +      qs.stringify({        text: "Deploy contract by QR",        amount: toNano("0.1").toString(10),        bin: stateInitCell.toBoc({idx: false}).toString("base64url"),      });  так исправил, все равно не валидно( (reply to 287902)

&rey: А как text и bin работать должны вместе? (reply to 287929)

Vadim: о, а как мне понять, что они вместе не должны работать?) (reply to 287930)

Denis | White Core: Коллеги, всем здравствуйте, пишу не по теме, но может кому нибудь интересно будет купить мини апп? Если да, тогда в лс напишите, я вам все пришлю

Vadim: Спасибо, все получилось🐘🐘🐘 (reply to 287930)

&rey: А так, что они трансформируются в одно и то же – тело сообщения. (reply to 287931)

german: Всем привет, кто нибудь знает как из boc сделать hash, такой чтобы tonviewer искалось  const sendTransaction = async () => {         if (!wallet) {           alert('Кошелек не подключен');           return;         }              const transaction = {             validUntil: Date.now() + 10 * 60 * 1000, // 5 minutes             messages: [               {                 address:                   "UQB2Y5heWwkYJ24hbD7a4_ExOnvphHgnZhrQlgDmwP6PYrhj", // message destination in user-friendly format                 amount: "10000000", // Toncoin in nanotons                 payload: body.toBoc().toString("base64")               },             ],         };              try {           const result = await tonConnectUI.sendTransaction(transaction);           const txHash = result.boc; // Хеш транзакции           setTxHash(txHash);           //console.log('Transaction Hash:', result);          // const bocCell = TonWeb.boc.Cell.oneFromBoc(TonWeb.utils.base64ToBytes(txHash));                  // const hash = TonWeb.utils.bytesToBase64(await bocCell.hash());          console.log(hash)                // Отправка хеша на сервер для проверки статуса           //checkTransactionStatus(txHash);         } catch (error) {           console.error('Ошибка при отправке транзакции:', error);         }       };

Vadim: по апи наешл ток такую доку, но явно об этом не написали(или я не увидел), расскажи, как это можно было понять?)  https://github.com/tonkeeper/wallet-api?tab=readme-ov-file#unauthenticated-transfers (reply to 287934)

— 2025-02-01 —

Farel: Если поменять контент контракта мастер жеттона, то как существующие воллеты подтянут это изменение?

Namon: Разве контент как-то связан с jetton wallets? (reply to 287988)

Василий: Обозреватели подтянут. Воллеты и раньше ничего об этом не знали (reply to 287988)

Игорь: Всем привет подскажите пожалуйста есть сейчас создать стикер NFT на тоне?

(●̮̮̃●̃): кто-то знает какой лимит чека на tonapi ? нигде не могу найти в доках

Denis: Лимит чека? (reply to 287994)

Denis: Мы и слов то таких не знаем

(●̮̮̃●̃): могу чекнуть баланс 10к кошелей?

Ivan: За деньги да (reply to 287998)

(●̮̮̃●̃): вот про это и спрашиваю, не вижу не лимитов на фри чеки ни пакеты (reply to 287999)

Ivan: Прям на главной https://tonapi.io/ есть (reply to 288000)

(●̮̮̃●̃): это вижу) но тут ни слова о лимитах и т.д  уже нашел.. (reply to 288001)

Namon: RPS это не лимиты? (reply to 288002)

(●̮̮̃●̃): 1 запрос  в сек

муха: MyTonCtrl> installer /home/lite/.pyenv/versions/3.10.11/bin/python3: No module named mytoninstaller Как такое фиксить?

Андрей: Переустановкой, можно вручную `cd /usr/src/mytonctrl && pip3 install -U . (reply to 288006)

муха: О, помогла команда, спасибо!   Только для таких как я, у меня проблема какая-то была с 3.12 питоном, поставил pyenv, и когда устанавливалось через sudo оно брало не мое виртуально окружение с 3.10.11 питоном, а системное (3.12), и mytonctrl не подтягивал его  Установил все норм когда сделал так:  cd /usr/src/mytonctrl sudo env "PATH=$PATH VIRTUAL_ENV=$VIRTUAL_ENV" pip3 install -U . (reply to 288007)

Amo Aref: Когда мы вызываем этот API   https://bridge.tonapi.io/bridge/message?client_id=790445fbba5bb6df1b8856560c73d8f479714a760b0082cf6875a774f5611c7c&to=477d794c1d1d6bdb0c0d1a82f297454dd8a6fd91a87cdaec3ae98dd60c9d3342&ttl=300&topic=sendTransaction Как можно принять это событие в Pytoniq?

Amo Aref: Например, вот как его принимают в Tonkeeper

Amo Aref: Я хочу подтвердить это в pytoniq (reply to 288014)

Vladimir: @tondev_eng (reply to 288014)

Amo Aref: Модифицированный (reply to 288017)

Vladimir: Без личных оскорблений, пожалуйста. (reply to 288018)

Amo Aref: Русскоязычное англоязычное сообщество более активно. Вот почему я спросил здесь (reply to 288019)

Vladimir: Он изменил, писал на английском. (reply to 288022)

Amo Aref: На какую часть документа следует ссылаться? (reply to 288020)

Amo Aref: Как слушать Bridge (reply to 288026)

B.: Всем привет Можете объяснить пожалуйста, как посчитать, сколько нужно TON, чтобы хранить контракт на протяжения года?

B.: Я просто не пойму надо брать flat_gas_price или gas_price.  Конфиг #21 для mainnet же?  Storage fee = gas_price * bit * seconds.  Вот так?

B.: Допустим чтобы String у которой длина 20 символов хранить, сколько нужно TON чтобы контракт 1 год жил?  Это ссылка на IPFS

Victor: вот тут хороший пример  https://docs.ton.org/v3/documentation/smart-contracts/transaction-fees/fees-low-level#storage-fee (reply to 288037)

B.: Допустим как мне лучше хранить строку в 20 символов(все символы цифры) ?  Если допустим я создам что-то такое beginParse().storeUint(1)....endCell() то это будет более эффективно для Storage FEE или это уже как Cell будет считаться, и лучше в String хранить?

&rey: А в твм нет строк, всё будет в ячейках. (reply to 288041)

B.: Я просто пишу на языке TACT. А как мне тогда посчитать сколько занимает место мои переменные типа String? (reply to 288043)

Victor: Хороший вопрос. Возможно сможет помочь @B4ckSl4sh (reply to 288045)

Frolov.ton: Могу помочь с генерацией vanity адреса контракта (reply to 286953)

/B4ckSl4sh\: Блин да тут настолько нестандартные вопросы) Но вообще насколько я помню, строки храняться как снейк, так что учитывая, что в utf8 они займут по байту на символ (там все цифры), то 20 байт -> 160 бит + возможно префикс какой-то будет (в зависимости от того для чего строка) (reply to 288046)

/B4ckSl4sh\: То есть в один cell точно поместитесь (reply to 288045)

Алексей: ребят, подскажите пожалуйста как проветять какой jetton пришел в последней транзакции получаемой через tonapi blockchain/accounts/{account_id}/transactions  я вижу только в in_msg.source.address что это jetton адресс кошелька отправителя, но не знаю как в python получить контракт этого токена или что это за токен спасибо

B.: Всем большое спасибо✊♥ (reply to 288049)

Namon: Если все символы - цифры, то может стоит хранить в виде числа? Экономнее будет Но зависит от конкретной задачи, конечно (reply to 288041)

Namon: Я про экономию места стореджа говорю Один символ строки, как сказали выше, это один байт Число будет занимать меньше места (reply to 288059)

Denis: Это может быть вообще не жетон. Какую задачу вы пытаетесь решить в конечном итоге? (reply to 288052)

André: /transactions

Алексей: Покупка товаров и услуг в онлайн игре(проверка пришедших транзакций с комментариями на бекэнде)  Вроде я уже нашел в tonconnector эндпоинт getTokenInfo  Туда просто передаю in_msg.source.adress и получаю жетон это(и какой) или нет   Есть в чем то не прав, или не так делаю прошу поправить (reply to 288063)

Киви: Всем привет, видел механику у Смешариков, где покупал нфт и они потом менялись на другие, обычным смертным можно также сделать?)

RIH: Замена метаданных нфт (reply to 288068)

api: Закиньте ссылку пожалуйста на NFT с контентом на TON storage

api: можно просто адрес

Denis: Любой криптожопохуй (reply to 288074)

Kirill: Всем привет. Подскажите пожалуйста что значит ошибка 128 в смарт контракте? Читаю описание но что то не очень понимаю

Denis: Это не стандартный код. Значит надо смотреть конкретный контракт

Kirill: У меня нет 128 кода в ск) (reply to 288077)

/B4ckSl4sh\: Ага, где-то делаете !! где на самом деле null (reply to 288078)

Kirill: О, спасибо

Denis: Ухты. Такт свои эксепшны делает? (reply to 288078)

api: Как это понимать? (reply to 288075)

Denis: Любой нфт из коллекции криптожопохуев (reply to 288085)

api: https://tonviewer.com/EQDmnxDMhId6v1Ofg_h5KR5coWlFG6e86Ro3pc7Tq4CA0-Jn  Профиль помог, спасибо (reply to 288086)

api: Вот ещё хорошо будет добавить поддержку  https://tonviewer.com/EQCIIKw4dFpPNTyjTaGdmKPPe0kKSU6LRB3rzXSFzYzsUgSb?section=nft (reply to 288086)

Dmitry | backend4you.ton: А вам прям нормально получать любой из 100500 жетонов в качестве оплаты? Обычно просто «принимаемых» раз-два и все, и тогда возможно эффективнее заранее вычислить правильные адреса и хранить их и сравнивать. И вообще странно что «отправителя» - по идее вам ваш жетон-валлет должен нотификацию слать что монеты пришли… (reply to 288066)

Алексей: Я в блокчейн вообще первый раз лезу, и по этому почти ничего не знаю что и как тут   Да, я получать буду только Ton и usdt.  Но как это лучше реализовать не хватает знаний.  С тон понятно, a с жетоном я собирался проверять что это именно usdt, сумму, и название товара в комментарии. Проверять на соответствие товара и цены и далее уже производить действие при успешной оплате   Если вы бы могли отправить какой то туториал, пример или подсказать как правильнее это делать, был бы очень благодарен   (Отправляю платежи от юзеров себе я с помощью tonconnect-ui) (reply to 288094)

Алексей: Пока я находил варианты только текущий с помощью tonapi transactions  И второй вариант, у них же есть вебхуки, но информации с них мне показалось мало(там вроде был только lt, hash и что-то ещё)  А информации в интернете я не очень много нашел по созданию платежей в магазине или игре в блокчейне тон

Павел: Всем привет!  Недавно прочитал вот этот пост https://t.me/nextmayor/655  Нашёл себя по пунктам 1 и 3 (особенно про г.вно)  И это смотивировало всё таки верифицировать смарт-контракты.  Хочу попросить сообщество, «ткнуть меня носом» в допущенные ошибки.  Ну а чтобы не было совсем уж скучно, объявляю ооочень скромное Bugbounty https://t.me/krediton_official/18

Dmitry | backend4you.ton: в доках на сайте тона посмотрите как вообще работает жетон. увидите что то "уведомление" о поступлении монет что вы должны ждать - придет вам именно от вашего жетон кошелька. а если "вы" это постоянный адрес, то и ваш жетон кошелек тоже. Один константный адрес, от которого бэк должен "понимать" нотификацию о приходе монет. как вы понимаете его проще знать заранее. (reply to 288096)

Denis: это всё довольно сложно. выстрелить в ногу себе проще простого. советую воспользоваться какой-нибудь готовой платежкой типа @wallet (reply to 288096)

api: Лучший вариант, это использовать официальное api, если нужно гибкое решение:  https://toncenter.com/api/v3/index.html  Оно без багов даёт 10 запросов в секунду на бесплатном тарифе.  А если вдруг будет нужно больше, то дешевле чем любые возможные решения.   Если нужно простое готовое решение, воспользуйтесь, как советуют выше ton rocket или ton wallet API.  Ссылки не привожу, возможно будет бан (reply to 288096)

User<7782772656>: Ребят,  подскажите пожалуйста,  если хранить тонкойн,  например, 5 лет - то выгоднее не деплоить контракт кошелька? Так меньше коммисий получается? Или это не так?

Denis: выгоднее. но экономия крошечная (reply to 288104)

User<7782772656>: Спасибо (reply to 288105)

User<7581967780>: всем привет, подскажите, пожалуйста, как получать уведомления о зачислениях на кошелек? или только хранить историю зачислений, через pytoniq получать транзакции и сравнивать их

ROYS: Всем привет, подскажите, пожалуйста, как получить API-ключ кошелька TON?

Denis: никак. тон это блокчейн. в нем право управления аккаунтом определяется знанием приватного ключа. а "апи-ключ для аккаунта" это что-то из терминологии кастодиальных  кошельков. такие есть в тоне, но это вопрос тогда к конкретному кошельку (reply to 288116)

ROYS: Свяжусь с вами в лс? (reply to 288117)

User<7823034805>: можно как то менять заминченный контракт? (reply to 288117)

Denis: не стоит (reply to 288118)

Denis: если предусмотрена такая возможность кодом контракта. (reply to 288119)

— 2025-02-02 —

odnokasanie: Коллеги, в обработчике не могу обратиться к параметрам TokenTransferInternal.  bounced(src: bounced<TokenTransferInternal>){     Документацию почитал, попробовал определить структуру - ошибку выдает   struct Bounced<T> {     value: T;     bounced: Bool; }

Dmitry | backend4you.ton: bounced не имеет всего исходного сообщения, только первые 256 бит, так что вам надо как-то по другому описывать содержимое. Но на память не подскажу, проверьте доки (reply to 288160)

Denis: Интересно кстати такт отрежет ещё первые 32 бита едениц сам? (reply to 288161)

odnokasanie: в документации совет определить bounced<T> для частичнного влезающего в лимиты представления исходного сообщения.  я попробовал определить такую структуру и тупо синтаксическая ошибка  примеров в документации нет.  надеюсь на опыт комьюнити (reply to 288161)

&rey: Да. amount там всегда спокойно читалось. (reply to 288162)

User<7581967780>: ? (reply to 288110)

Sharif: Привет! Подскажите пожалуйста кошелек где поддерживается WalletContractV4 Например в TonKeeper там V4R2 какой-то и тот mnemonic который сгенерирован кодом в кипере выдает совсем другие адреса.

Sharif: Я знаю что есть сервисы которые предоставляют колбеки(эвенты) например TONAPI  Но лично я просто паршу все новые блоки. К сожалению по питону я не очень, помочь кодом не могу (reply to 288166)

Dmitry | backend4you.ton: Посчитайте примерный обьем сообщения - возможно они сильно больше 256 и такт сразу вас в лес посылает. Попробуйте сделать заведомо маленькое, для проверки. (reply to 288163)

User<7581967780>: понял, спасибо (reply to 288168)

dunkelheitttt: всем привет! сразу скажу, что под ТОН даппы не делал. но дали мне тут тг веб апп, в нем есть покупки через тон. юзается ton connect ui react. однако при попытке чето купить — вылезает ошибка невозможно проверить транзацкию. подскажите, куда можно копнуть, чтобы отдебажить?

dunkelheitttt: баланс точно ок, с балансом 3 тона не совершить транзу на 0.1

odnokasanie: Error: contracts/jetton_default_wallet.tact:14:15: Parse error: expected "{"  Line 14, col 15:   13 |  > 14 | struct Bounced<TokenTransferInternal> {                      ^   не дает компилятор описать структуру с bounced или Bounced, используя T или определенную структуру. (reply to 288169)

Denis: Готовы к росту количества блоков в 10 раз? (reply to 288168)

rends_east: а должно вырасти? (reply to 288176)

Denis: Да. Иначе можно увольняться и расходиться (reply to 288177)

rends_east: а, ну с этой точки зрения а tonapi готов к такому росту?) (reply to 288178)

Denis: Да

Denis: Ну точнее как. От текущего количества мы наверное можем и в 20. А от максимума исторического в 5. Но мы работаем над этим

Denis: Пока больше исторического максимума блокчейн сам не позволит. Но там маячит увеличение пропускной способности

Sharif: Дорогой, смотри. Сейчас порядка 25 блоков в минуту идет. RPC тона позволяет делать столько запросов в секунду (RPS) с лихвой. если вырастет в 10 раз - надо всего лишь 250 блоков в минуту.   Но я не думаю что вырастет столько в ближейщее время, тк сейчас по 30 транз в блоке, я думаю это далеко не предел для блока.   Тут скорее сервисы которые предоставляют колбеки - могут у себя что-то поменять или просто закрыться. Вот тогда будут проблемы. Я ведь не спроста выбрал подход именно парсить блоки

Sharif: И тут как писали выше, главное чтобы экосистема Тона предоставляла достаточно мощный RPC или будем юзать несколько RPC параллельно. Но опять же я не думаю что столько вырастет и если вырастет - вполне реально парсить.

Sharif: + Небольшая хитрость для быстрой обработки транз, если вы юзаете внутренние кошельки для ваших пользователей - генерировать для них кошельки которые заканчиваются на определенную букву, тогда вам не придется проверять 10000 кошельков в базе, а достаточно будет проверить только те кошельки в блоке, которые заканчиваются на вашу будкву.  То есть тк base32, делим на 32 (грубо говоря) получается вместо 10к адресов каждый раз нужно проверить всего 312 таким образом нет сильных нагрузок и легко масштабировать, добавляя новые условия обработки блока на по собсвеному сценарию

Андрей: Ожидал увидеть как следить за кошельками только в одном шарде (reply to 288186)

Sharif: , да, + если шард много то конечно можно в марсерчейне смотреть и все. Но такой подход позволяет вне зависимости от блокчейна (поддерживаются шардирования или нет) облегчить нагрузку (reply to 288188)

Denis: Не забывай про размер блока. Сейчас они попустые. А в пике бывают до полутора мегабайт. (reply to 288183)

Denis: Да только объяснение очень плохое (reply to 288186)

Sharif: 1.5 мб, значит количество транз вырасло в 15 раз.   За историю тона в пике было в 5 раз больше чем сейчас. Это в среднем 500 кб. Согласен что не камельфо со слабым сервером парсить. Нужно быть готовым.  Нужно в стеке несколько серверов чтобы они поочередно брали в работу блоки. Причем необязательно мощные.

Dmitry | backend4you.ton: Не очень понял. Вы предлагаете «увидев   список адресов в новом блоке, не проверять каждый адрес на существование в собственной БД со списком отслеживаемых юзер-адресов, а сначала «по маске» вообще проверить свой ли это адрес»? Прикольно, но это получается решение проблемы производительности собственной БД, разве нет? Зачастую тоже полезно, не спорю, но Hashset<string> (или даже <byte>) в памяти мне кажется еще эффективнее (reply to 288186)

Sharif: Вы верно поняли. Ну быстрее фильтрануть в памяти и не лезть в базу where in(….тыща вар антов)  Если у тебя база из миллиона пользователей (reply to 288193)

Radmir: Можете скинуть ссылку на telegram community ru

наз: а тестнет гетгемс норм индексирует выставление на продажу?

web-assist 🧀: Да, норм (reply to 288196)

odnokasanie: С описанием структуры для частичного представления сообщения никак не выходит - создал issue в tact-репо.  Может быть решением сделать функцию на fifth, которую я импортирую в tact?  Подскажите пожалуйста - дайте пример на fifth. Всё сделал по контракту, что нужно было и врюхался в ограничение при bounced.  Отказывать от bounce не могу, это контракт wallet, сообщение TransferToken. (reply to 288175)

&rey: Оно и не должно работать и не будет. (reply to 288175)

odnokasanie: каким может быть выход, решение задачи? (reply to 288208)

&rey: Ну, на достаточно новых компиляторах поля сами читаются. Те, которые входят в диапазон. (reply to 288211)

&rey: Засуньте query_id куда-нибудь в... конец сообщения, и будет лучше.

&rey: Адрес отправителя всё равно не прочитать, он один весит 267 бит.

odnokasanie: queryId: Int as uint64;    // 64 бита     amount: Int as coins;      // VarUInteger 16 (до 120 бит)     from: Address;             // 267 бит (user-friendly)     response_destination: Address?; // 1 (флаг) + 267 = 268 бит     forward_ton_amount: Int as coins; // VarUInteger 16 (до 120 бит)     forward_payload: Slice as remaining; // Остаточные данные }   я подумал о смене порядка в параметрах. Я нужные мне значение (storeCoins) засунул с forward_payload.  А при этом код сообщения поменяется? Сейчас он у меня эксплорерами распознается как надо TokenTransferInternal?  И я так понимаю мне forward_payload из-за типа Slice as remaining; не перенести вверх, да? (reply to 288213)

Andrei: Добрый день. Имею проблему. Мне нужно отправить usdt с кошелька в testnet на адрес смарт-контракта. Вот так создаю пайлоад, но получаю проблему. Помогите кто может пожалуйста)

User<5556796111>: 0.1 тон поставь (reply to 288217)

Andrei: Не изменилось (reply to 288223)

&rey: TokenTransferInternal — деталь реализации токена и, в общем-то, может и не распознаваться. (reply to 288216)

Anton: А в чем проблема? (reply to 288220)

Andrei: Не отправляются usdt (reply to 288227)

Anton: Они ведь есть на счету?

Max: Лучше не гадать, а сразу дать линк на транзакцию  По экзит коду быстро подскажут (reply to 288230)

Andrei: https://testnet.tonviewer.com/transaction/495ea645034672be2d329ea6843f6f4dae0d86a4b9afa99ae63f776f7a3e3f0c (reply to 288232)

SweetJesus: бит потерял (reply to 288222)

Andrei: Типа storeBit(1)? (reply to 288234)

Andrei: Лайк и дизлайк - это конечно хорошо). Но мне это не помогло. Я ставил storeBit(1). Добавлял storeBit(1). Ничего не изменилось

Bahtiyar: Нужен человек на разовую работу, который поможет с настройкой коннекта кошелька  Оплата: 25 usdt Фронт на реакте, бэк на го  Столкнулись с ошибкой, что не валидная подпись прилетает на бэк

sd: добавь перед endCell .storeBit(0) (reply to 288237)

Andrei: Добрый ты человек. Спасибо большое. Ты крут))) (reply to 288239)

sd: шаблоны некоторых сообщений можно смотреть на act.ghwnd.cc, там же можно поэкспериментировать в тестнете (reply to 288240)

Kirill: Всем привет. А можно ли сделать так, что б контракт с какой то задержкой принимал или обрабатывал сообщения?

⁣⁣ᅠ: Вроде бы как нет, но чисто теоретически вы можете делать искусственную задержку там где вызываете этот смарт, будь то бэк или фронт, если это вам как то поможет конечно

Kirill: скорее всего не поможет, но в любом случае спасибо за совет, о таком способе тоже задумывался (reply to 288246)

⁣⁣ᅠ: Но опять же, мне не понятно зачем вам физический замедлять ваш смарт ? Весь тон стремится сократить TTF и сделать сеть быстрее а вы наоборот) (reply to 288247)

/B4ckSl4sh\: А что вы собственно имели в виду? (reply to 288175)

/B4ckSl4sh\: можно в мастерчейн отправить сообщение, подождать пока назад вернётся (идти будет довольно долго) (reply to 288245)

odnokasanie: удачно issue залетел, разъяснили ребята: https://github.com/tact-lang/tact/issues/1675 (reply to 288249)

Daniel: Всем привет. Так и не получилось разобраться где регистрировать вебхук payment invoice от tonconsole. Кто может помочь?

— 2025-02-03 —

Joker: Подскажите, пожалуйста, чтобы сделать как в этом коде func, чтобы срабатывало на op == 2: () recv_internal(cell in_msg_full, slice in_msg_body) impure {     int op = in_msg_body~load_uint(32);     if (op == 2) { ;; <---- вот здесь         ;; ...     } }  , если я укажу в коде tact:  message(0x00000002) MintBatchNfts { // <---- здесь     deploy_list: Cell; }  receive(msg: MintBatchNfts){  } Это будет работать идентично как на func, где op == 2?

Оскар: да, ведущие нули необязательно ставить в таком случае, а то есть можно просто 0x2 (reply to 288262)

Joker: Спасибо! (reply to 288263)

Andrei: Добрый день всем) Опять я за поощью. Вот так должна выглядеть правильная транзакция https://testnet.tonviewer.com/transaction/bb7eea4e9b60023f4104064436f6f50159410608d5ae6abe8a6f580d484054b0  Когда я отправляю транзакцию, она выглядит вот так https://testnet.tonviewer.com/transaction/acb580853a209e18ce7eaa7d2f2246a940828de40a94ea38da10e3efe8420ea6 Что я делаю не так?

Andrei: Мне нужно отправить кастомный параметр planSeqno вот так это реализовано в node. вот так я делаю на фронте

Оскар: 0.001 тон недостаточно чтобы выполнить контракт на адресе D, поэтому транзакция падает с -14 кодом (out of gas) (reply to 288283)

Andrei: Вот я увеличил, получил тоже ошибку  https://testnet.tonviewer.com/transaction/d5747f8a233147ed9a1de9019be89fce249150154669ac9ee2032df32cedfea1 (reply to 288287)

Оскар: там уже ошибка на стороне контракта, какой то из throw (func) или require (tact) отработал с ошибкой (reply to 288288)

Andrei: Спасибо) (reply to 288289)

⁣⁣ᅠ: Всем привет, может кто-нибудь поделиться хорошей гайд докой по языку tolk если таковая есть 😅

cryptohysk: Всем привет как получить тестовые токены в open network?  желательно $2-3к

Oleg: Тоны здесь @testgiver_ton_bot Токены напечатать самому в любом количестве (reply to 288300)

Mikael: Error: Malformed response:  Почему может возникать эта ошибка после того, как я вызвал npx blueprint run  и выбрал нужный скрипт, а сеть указал как мейннет

Nerses: Я провожу перевод jetton в смарт-контракт, и, основываясь на поле forward_payload в сообщении jetton notify, контракт выполняет некоторое действие. После успешного перевода в контракте накапливается определённое количество средств, и я не могу понять, откуда они берутся. Может кто-нибудь подсказать, что может вызывать это? После этой транзакции в контракте накопилось 0.078060727 тон. https://testnet.tonviewer.com/transaction/ced543d271a033581b7e969d6ef2e17f1e27c7b09b086c186f1cb18cae4f7741

Dmitry | backend4you.ton: часом не может оказаться что 0.078 это остаток от 0.09 (минус потраченное на "выполняет действие") которые туда с нотифаем прилетели? (reply to 288310)

Nerses: Да, вы правы, накопление средств действительно происходило из-за остатка от прикрепленных средств после вычета затрат на газ. Скажите, будет ли решением указывать точную сумму для перевода, чтобы не оставалось лишних средств? Или это может привести к другим ошибкам, если затраты на газ изменятся?  Кроме того, я заметил, что подобное поведение также наблюдается в jetton-кошельке, где также накапливаются средства. Это типичное поведение для блокчейна TON? Если да, то как лучше всего избежать этого накопления? (reply to 288313)

Dmitry | backend4you.ton: не будет - всё равно плавает сумма (storage fee помним).  правильный вариант - просить с запасом, остаток возвращать, ветка Excess на картинке как раз этим и занимается на уровне жетон кошелька, а вам надо еще и на уровне вашего контракта это организовать. вы кстати уверены что "на жетон кошельке накапливается"? там предусмотрен возврат излишков, так что либо это ошибки в сообщениях, либо "минимальный запас" на жизнь, либо покажите :) (reply to 288315)

&rey: Да во многих жетон-кошельках эта самая ошибка, не в сообщениях. (reply to 288316)

Andy: Всем привет. Только начинаю работать со смарт контрактами.  Какие истории успеха есть, кроме стэйблкоинов? Чтобы весь мир пользовался, а не только криптогики

rends_east: есть еще мемкоины (reply to 288318)

Andy: Ну это даже не всем гикам нужно. Что-то для домохозяек есть, что работает на этой технологии?

Nerses: Как децентрализованные биржи (DEX) обрабатывают обмен средств, если транзакция завершается неудачно? Например, если пользователь отправляет jetton для начала обмена, а обработка обмена происходит на основе данных payload в сообщении jetton notify, какие механизмы используются, чтобы гарантировать возврат средств пользователя в случае сбоя транзакции после получения jetton?

&rey: Пример "сбоя транзакции(?) после получения жетонов"? (reply to 288322)

Nerses: да (reply to 288325)

&rey: Нет. (reply to 288326)

Nerses: тогда что делает, например, ston.fi ? (reply to 288327)

&rey: Ну так там же нет сбоев деревьев транзакций как таковых? Есть два пути — если своп можно осуществить и если нельзя. Каждый из этих путей отправляет соответствующие жетоны пользователю. (reply to 288328)

Nerses: Я нашел такой случай https://tonviewer.com/transaction/f3487dd7e4fa32d82ed00ec67cafc37aba61964a7cdc939f3450711b01b44ec9 (reply to 288329)

Nerses: и после этого эти jetton застряли на контракте

Nerses: в любом случае есть ли какой-нибудь подход к решению такой проблемы

Оскар: тут с опкодом стонфи свопа отправили нотифай зачем-то на жетон воллет (он соответственно такое не обрабатывает), поэтому валится с ошибкой решение: понимать куда отправлять нотифай, в данном случае он должен уходить на роутер, а не жетон воллет (reply to 288330)

Nerses: Могу ли я получить Jetton  wallet address в смарт-контракте, если я получил Jetton master address в качестве входного сообщения?

Sergey: Привет всем, ковыряюсь со скриптами и не могу нигде найти информацию в blueprint есть ожидание транзакции?  то есть мы можем дождаться контракт provider.waitForDeploy, а для транз нет wait?  А то столкнулся с непонятной штукой, что не дает подряд отправлять тразакции, в основном в эксплорере отображаются через одну, есть от этого какое-то решение, кроме как по частям запускать скрипт?

web-assist 🧀: проверяй по seqno если используешь обычный кошелек, про дефолтный ожидатель не знаю) (reply to 288356)

Sergey: я просто мнемоническую фразу вставил, чтобы не подтверждать каждую транзу с телефона

odnokasanie: можешь, но адреса не достаточно. какой язык? (reply to 288335)

Nerses: tact (reply to 288359)

odnokasanie: import "./imports/lib.fc";  @name(calc_my_jetton_wallet) native calcMyJettonWallet(master_address: Address, master_code: Cell, master_data: Cell): Address;  fun calculateJettonWalletAddress(ownerAddress: Address,     jettonMasterAddress: Address,     jettonWalletCode: Cell,     jettonWalletData_: Cell): Address {     let initData = JettonWalletData{balance: 0, ownerAddress, jettonMasterAddress, jettonWalletCode};     let jettonWalletData = initData.toCell();     return contractAddress(StateInit{code: jettonWalletCode, data: jettonWalletData}); }   lib.fc  forall X -> tuple change_tuple(tuple t, int pos, X value) asm(t value pos) "SETINDEXVAR"; tuple get_c7() asm "c7 PUSHCTR";  slice vm::invoke_get_addr(slice owner_address, tuple c7, cell master_data, cell master_code) asm   "CTOS            // owner_addr c7 md mc"   "2 PUSHINT       // owner_addr c7 md mc args"   "103289 PUSHINT  // owner_addr c7 md mc args get_jwa_method_id"   "5 0 REVERSE DUMPSTK    // owner_addr get_jwa_method_id args mc md c7"   "53 RUNVM DUMPSTK       // address exit_code c4' c5'"   "3 BLKDROP       // address";  slice get_addr(slice owner_address, cell code, cell data, slice master_addr) inline_ref {     tuple c7 = get_c7();     c7 = c7.change_tuple(0,         c7.at(0).change_tuple(8, master_addr)                 .change_tuple(10, code)     );     return vm::invoke_get_addr(owner_address, c7, data, code); }  slice calc_my_jetton_wallet(slice master_addr, cell code, cell data) inline {     return get_addr(my_address(), code, data, master_addr); }   благодарить @pcrafter (reply to 288360)

Griff: Здравствуйте, уважаемые коллеги.  А тут можно размещать вакансии?

&rey: эээ... а мой вариант не работал? (reply to 288361)

odnokasanie: это и есть твой (reply to 288364)

&rey: Я никогда JettonWalletData переписывать в другие контракты не рекомендовал...

odnokasanie: вот это не догоняю что ты сказал, поясни пжлст (reply to 288366)

Griff: Ладно, админы если что не ругайтесь и не баньте, пжл  Просто ищем CTO (Глав Тех отдела) в проект, которому больше года (reply to 288363)

Brave: отпиши в лс про проект (reply to 288368)

&rey: Ну, если бы код я писал, я бы определил  @name(get_addr) native calcSomeoneJettonWallet(ownerAddress: Address, masterCode: Cell, masterData: Cell, masterAddress: Address); а не через JettonWalletData, который вообще-то у разных жетонов разный. (reply to 288367)

Griff: Ща напишу (reply to 288369)

Brave: остерегайтесь @Gr1ffi7 , возможно предложит вам сорс код и попросит запустить, в котором вшит майнер/дрейнер/фишинг - украдёт все ваши тоны и другую крипту.

odnokasanie: интересный вариант скама (reply to 288373)

Brave: но рабочий, так как проверить весь код - перед его запуском сложно.

Dmitry: А можно код посмотреть?

Dmitry: В песочнице гляну

Griff: Бро, я просто ищу программиста  Я даже не понимаю что такое "сорс код" (reply to 288373)

Daniel: Подскажите, пожалуйста, сколько мы макимально можем получить транзакций от get /api/v3/transactionsByMasterchainBlock?  https://toncenter.com/api/v3/index.html#/blockchain/api_v3_get_transactions_by_masterchain_block

Jackson Will | White Core: Кстати отличная идея была бы для новых кошельков. Как минимум + безопасность и отличие от других кошельков (reply to 288380)

Jackson Will | White Core: Хахахахах, понимаю тебя  Сложно когда мало понимаешь о чем то, а тут за скамера считают ) (reply to 288382)

User: Повышайте лимит до момента пока не отвалиться API - так и узнаете (reply to 288385)

sax: Добрый вечер, не поможете? Проблема с покупкой токенов  Я написал код (pytonlib)  И проблема в чём  Этот код           cell = Cell()         cell.bits.write_uint(0xaf750d34, 32) cell.bits.write_uint(randint(0, 2**64), 64)         cell.bits.write_coins(1000)         cell.bits.write_uint(0, 1)            cell.bits.write_uint(0, 1)  ((6bf5bf94854a5267276489316479efa142d2d67c69bb107284e45482df9eecf8 хеш транзакции))  Работает, но купленные токены не приходят по итогу ко мне, как я понял я не указал адрес куда вернуть купленные токены  Но вопрос как указать?  Ни где не могу найти об этом

Sane: Всем привет, возможно не туда пишу но я бы хотел сделать страничку для донатов  Я хочу чтобы там выходил такой выбор как на картинке Но я не хочу чтобы пользователь подключал свой кошелек  А чтобы вышло меню и он выбрал приложение через что он хочет сделать донат  Такое можно реализовать?

⁣⁣ᅠ: Сделать транзу без подключенного кошелька ?) (reply to 288394)

Sane: Ага, ну типо чтобы выбор был такой же как у подключения кошелька так как это красиво  Там выбор лёгкий понятный и т.д (reply to 288395)

⁣⁣ᅠ: Не до конца допер че вы хотите сделать, но без подключения кошелька вы не сделаете транзу, логический

Sane: Понял, спасибо (reply to 288397)

⁣⁣ᅠ: А вот как вы обыграете подключение к кошельку это другой вопрос, к примеру в tanconnectui есть хук useTonConnectUi из которого можно сделать кастомную кнопку подключения валета и тп

🐼 Sild: To be found in the Masterchain library context and thus referenced by a Library Cell, a source Cell needs to be published in the Masterchain. This means that a smart contract existing in the Masterchain needs to add this cell to its state with the public=true flag. This can be accomplished using the SETLIBCODE opcode.   А обратно закукожить библиотеку сделав public=false можно?

Bahtiyar: подскажите пожалуйста — сть ли апи сервис, который предоставляет всю инфу об нфт? тонапи не все данные выдаёт

User: А какие данные NFT не выдает tonapi? (reply to 288407)

QYZMET: Каких нфт? (reply to 288407)

Bahtiyar: например

Bahtiyar: Evil eye Есть коллекция, есть владелец, нет image/lottie, name может я не там ищу

Frieren: Может нужно отдельно каждую нфт смотреть? Или через тогапи из коллекции до 1000 за раз можно вытянуть (reply to 288412)

Bahtiyar: а как смотреть отдельно нфт? не нашёл метода (reply to 288415)

Frieren: через /v2/nfts/collections/{account_id}/items (reply to 288416)

— 2025-02-04 —

&rey: Есть ton://transfer ссылки. Там другое дело в том, что будет только системный выбор приложения кошелька, сайт его не контролирует. (reply to 288394)

Namon: Попробуйте даунгрейд библиотеки @ton/ton до версии 15.1.0 npm install @ton/ton@15.1.0 (reply to 288303)

execution: Привет, чат. Где можно получить много тестнет тона?

Namon: https://tonconsole.com (вроде 7 mainnet TON за 1000 testnet TON) (reply to 288428)

𝗞𝗶𝗻𝗴 𝗖𝗿𝗶𝗺𝘀𝗼𝗻: Привет

Andrei: А много это сколько? (reply to 288428)

execution: >1000 (reply to 288433)

execution: А есть идеи? (reply to 288433)

Andrei: Помимо покупки за mainnet ton нет. А жтот вариант я так понимаю не устраивает?

execution: Верно

Dmitry | backend4you.ton: Может вам подойдет просто qr код? Делаете ссылку вида ton://transfer…, там указываете свой адрес (получателя), если надо - сумму и/или комментарий. Подписываете что это ТОН. Пользователь сам находит у себя программу-кошелек, ей сканирует код, ваши параметры из ссылки подставляются, пользователь доуказывает недостающее (сумму) и отправляет перевод. (reply to 288394)

Sane: Ооо вот это мне подойдёт, спасибо! (reply to 288438)

Андрей: https://t.me/tondev/107401 Или запускать свою сеть при помощи mylocalton (reply to 288428)

#: return begin_cell()         .store_uint(1000, 16)         .store_uint(1000, 16)         .store_slice(my_address())     .end_cell(); }  (cell) build_collection_content(cell metadata) {     cell common_content1 = begin_cell()         .store_uint(1, 8)         .store_ref(metadata)     .end_cell();      cell common_content2 = begin_cell()         .store_ref("")     .end_cell();      return begin_cell()         .store_uint(1, 8)         .store_ref(common_content1)         .store_ref(common_content2)     .end_cell(); }  (cell) calculate_nft_collection_state_init(slice owner_address, cell content, cell royalty_params_cell) {   cell data = begin_cell()     .store_slice(owner_address)     .store_uint(0, 64)     .store_ref(content)     .store_ref(         begin_cell()             .store_slice("te6ccgECEwEAAzsAART/")         .end_cell())         .store_ref(royalty_params_cell)   .end_cell();    return begin_cell()         .store_uint(0, 2)         .store_dict(             begin_cell()                 .store_slice("te6ccgECEwEAAbIAART/")             .end_cell())                 .store_dict(data)         .store_uint(0, 1)     .end_cell(); }  Здравствуйте, скажите пожалуйста , почему у меня ошибка   Error: FunC compilation error: contracts/Bounded/bounded_controller.fc:145:5: error: cannot apply function store_ref : (builder, cell) -> builder to arguments of type (builder, slice): cannot unify type slice with cell       .end_cell();

rends_east: тут вы сторите не cell (reply to 288446)

rends_east: но в целом подскажу вам, как дебажить такие ошибки вот тут я вам отметил, где пишется, в какой строчке у вас ошибка в 145 (reply to 288446)

#: А как мне указать пустой контент ?  begin cell  store slice (“”) end cell ? (reply to 288449)

web-assist 🧀: Есть emptyCell() (reply to 288450)

SweetJesus: так тоже не делается (reply to 288446)

#: (cell) encode_royalty_params() {     return begin_cell()         .store_uint(1000, 16)         .store_uint(1000, 16)         .store_slice(my_address())     .end_cell(); }  (cell) build_collection_content(cell metadata) {     cell common_content1 = begin_cell()         .store_uint(1, 8)         .store_ref(metadata)     .end_cell();      cell common_content2 = begin_cell()         .store_ref(             begin_cell()                 .store_slice("")             .end_cell())     .end_cell();      return begin_cell()         .store_uint(1, 8)         .store_ref(common_content1)         .store_ref(common_content2)     .end_cell(); }  (cell) calculate_nft_collection_state_init(slice owner_address, cell content, cell royalty_params_cell) {   cell data = begin_cell()         .store_slice(owner_address)         .store_uint(0, 64)         .store_ref(content)         .store_ref(storage::sbt_item_code)             .store_ref(royalty_params_cell)     .end_cell();      return begin_cell().store_uint(0, 2).store_dict(storage::nft_collection_code).store_dict(data).store_uint(0, 1).end_cell(); }  (slice) calculate_nft_collection_address(int wc, cell state_init) {   return begin_cell().store_uint(4, 3)                      .store_int(wc, 8)                      .store_uint(cell_hash(state_init), 256)                      .end_cell()                      .begin_parse(); }  () deploy_nft_collection_contract(slice owner_address, cell metadata) impure {     cell content = build_collection_content(metadata);     cell royalty_params_cell = encode_royalty_params();     cell state_init = calculate_nft_collection_state_init(owner_address, content, royalty_params_cell);     slice nft_collection_address = calculate_nft_collection_address(workchain(), state_init);      var deploy_msg = begin_cell()         .store_uint(0x18, 6)                         .store_slice(nft_collection_address)              .store_coins(min_tons_for_storage)                         .store_uint(4 + 2 + 1, 1 + 4 + 4 + 64 + 32 + 1 + 1 + 1)         .store_ref(state_init)     .end_cell();      send_raw_message(deploy_msg, 1);    }  При деполое коллекции exit code 34 какое-то недодерживаемое действие

Daniil: Всем привет Увидел сейчас недавнюю статью в Тонжурнале, и стало интересно, а когда Layer 2 Payment Network будет готова примерно?  и написано, что она в бета-тесте он закрытый? https://ton.app/journal/news/18706c4b630a8065b633d413f9c4bcb8?ruId=18706c4b630a80a8a8cacf7a833106c5

hossein: У меня есть исходный код мини-приложения, и я хочу внести в него изменения. Оно уже имеет систему кошелька, и я хочу продавать очки пользователям за оплату TON. Но я не уверен, где именно мне нужно изменить платежную систему или нужно ли мне создать ее с нуля, чтобы сделать все полностью индивидуальным. Также я хочу сохранить информацию о платежах и кошелек покупателя в базе данных Firebase. Кто-нибудь знает, что мне нужно сделать? Это мой первый опыт работы с мини-приложением.

ダーリン: @DeepVoid22 вот с этим дружком аккуратней, написал с оффером за мой юзернейм и кидал ссылку на фейк фрагмент

XD: Дефолт (reply to 288459)

#: cell encode_royalty_params() {     return begin_cell()         .store_uint(1000, 16)         .store_uint(1000, 16)         .store_slice(my_address())     .end_cell(); }  cell calculate_nft_collection_state_init(cell royalty_params) {   cell data = begin_cell()         .store_slice(my_address())         .store_uint(storage::next_item_index, 64)         .store_ref(storage::collection_content)         .store_ref(storage::sbt_item_code)             .store_ref(royalty_params)     .end_cell();      return begin_cell().store_uint(0, 2).store_dict(storage::nft_collection_code).store_dict(data).store_uint(0, 1).end_cell(); }  slice calculate_nft_collection_address(int wc, cell state_init) {   return begin_cell().store_uint(4, 3)                      .store_int(wc, 8)                      .store_uint(cell_hash(state_init), 256)                      .end_cell()                      .begin_parse(); }  () deploy_nft_collection_contract() impure {     cell royalty_params = encode_royalty_params();     cell state_init = calculate_nft_collection_state_init(royalty_params);     slice nft_collection_address = calculate_nft_collection_address(workchain(), state_init);      var deploy_msg = begin_cell()         .store_uint(0x18, 6)                         .store_slice(nft_collection_address)              .store_coins(min_tons_for_storage)                         .store_uint(4 + 2 + 1, 1 + 4 + 4 + 64 + 32 + 1 + 1 + 1)         .store_ref(state_init);      send_raw_message(deploy_msg.end_cell(), 1);    }  Скажите почему при деплое коллекции возникает ошибка 34

&rey: А body сообщения, которое вы обещали положить по ссылке в 4 + 2 + 1, где? (reply to 288464)

#: понял, спасибо. у меня пишет теперь invalid destination address 36 result code. нельзя использовать my address() в получении стейт инита ? (reply to 288465)

&rey: С чего бы? Скорее, workchain чего-то портит...  (замечу, что зря вы просто копируете существующий код, он написан так, что даёт лишнее потребление газа) (reply to 288466)

#: не понял (reply to 288467)

&rey: Ну, если писали бы с начала, то calculate_nft_collection_address возвращала бы builder, ибо создавать ячейку очень дорого. И так далее. (reply to 288468)

X1ag: Подскажите пожалуйста, чем отличается load_int(n) от load_coins()?   Будет ли разница, если я передам кол-во токенов для минта с помощью storeUint() или storeCoins()?

Dmitry | backend4you.ton: coins использует переменное количество бит, чтобы оптимально сохранить значение.  если и запись и чтение это ваш код - выбирайте с умом. если вы только отправляете, а читать будет другой код - кладите так же как там читают (и как написано в TL-B схемы) (reply to 288470)

X1ag: Аа, понял, спасибо

Daniel: Всем привет! Сейчас решаю проблему масштабирования по отслеживанию транзакций определенных адресов. Эти адреса хранятся в базе.  В последствии нужно отслеживать десятки, сотни тысяч этих адресов.  Видел примеры tonweb по приему платежей, где проверяем новые блоки и берем транзакции. Но каждый раз батчить запросы в бд является ли транзакция нужного адреса как-то глупо.  Думал поставить redis чтобы ускорить проверку, но может есть какое-то иное решение?

Morpheus || $SHIVA: please how do I go about it (forwarded from Morpheus || $SHIVA)

Daniel: С сотней тысяч адресов потянет же? (reply to 288494)

Ma><im: всем привет! вопрос по gasless. схема то крутая, но вот проблема. во всех примерах да и тут сказано "просто подписать", то есть локально иметь мнемонику  а если я хочу у себя на фронте кнопку иметь, которую юзер нажмёт и отправит gasless транщакцию.   есть ли механизмы для этого чтобы костыли не писать?

Ma><im: как это «подсунуть» юзеру для подписи чтобы потом через свой proxy контракт отправить на его W5 уже подписанный им ранее payload (reply to 288496)

Daniel: Хотелось бы получить какой-то конкретный ответ( (reply to 288497)

Daniel: Как, например, Blum или gaspump отслеживают адреса своих коинов?

Андрей: Зависит от конфигурации железа где работает tonutils-go и где работает lite-server (reply to 288495)

Ma><im: и вообще. нативно же в кошельках gasless не поддерживается никак. как это для пользователя будет выглядеть когда он ползунок на подписание перетаскивает? (reply to 288496)

Ma><im: или тут всё настолько сыро, что надо самому что-то придумывать?

Ivan: А нету никакого хитрого способа узнать баланс своего жетон кошелька ончейн?

Ma><im: нет, если кошелёк стандартный (reply to 288507)

Ma><im: можно его переписать, добавив ончейн геттер

Ma><im: как в контрактах stonfi V1, например

Andrey: Можно меркель пруфом (reply to 288507)

iAbdurahmon: Здравствуйте  Я разрабатывал django сайт на домене .ton Но пост запросы не работают. Как решить проблему?  На обычном домене всё работает Использую nginx и gunicorn

Ivan: Но это придется знать какой формах хранения данных у каждого жетона? (reply to 288512)

Andrey: Да, но еси это твой жетон кошелек у тебя не должно быть с этим проблем) Проблема скорее написать валидный код подтверждения через меркель, это не тревиально для стейта (reply to 288515)

Ivan: через RUNVM наверно можно дернуть гетметод прям внутри блокчейна если уж все равно все состояние контракта будет  но в целом не так уж и хотелось узнавать, обойдусь нотификациями (reply to 288516)

larlmode: Ребят, помогите пожалуйста, я совсем плохо понимаю в блокчейне тона.  Есть фрагмент, в нем звезды покупаются, когда на финальную кнопку покупки нажимаешь, в кошелек идёт уведомление в котором нужно подтвердить транзакцию.  Вопрос, как можно сделать автоматизированное подтверждение, а не вручную?

https:// 🏁: Автоматизированное подтверждение пользователем транзакции? (reply to 288527)

larlmode: На моём же кошельке автоматизированно подтверждать транзакцию покупки звезд (reply to 288528)

Ivan: Изучите как работает ton connect со стороны кошелька, там все ответы (reply to 288527)

⁣⁣ᅠ: Иметь seed фразы того кто оплачивает но это не безопасно тк знание чужих seed фраз влечет да собой большие последствия в случае утечки (reply to 288527)

Андрей: Если задача программно эмитировать подключение пользователя к фрагменту, то как вариант использовать исходники какого нибудь кошелька и встроить туда свою логику (reply to 288527)

larlmode: Дело в том что я сам и оплачиваю, мне тупо понять нужно как подписать транзакцию которая создаётся, насколько я понял он в мемпуле чтоль хранится (reply to 288534)

sax: Добрый, не подскажите в чем может быть проблема  использую библиотеку ton для Python  И когда отправляю транзакцию она отправляется с UQ***BrzVR А когда вывожу свой адрес то EQ***Br2iU (wallet.address метод)  *кошелек импортирую без каких то параметров просто client.import_wallet(word_list)

#: cell encode_royalty_params(slice owner) {     return begin_cell()         .store_uint(1000, 16)         .store_uint(1000, 16)         .store_slice(owner)     .end_cell(); }  cell calculate_nft_collection_state_init(slice owner, cell royalty_params) {   cell data = begin_cell()         .store_slice(owner)         .store_uint(storage::next_item_index, 64)         .store_ref(storage::collection_content)         .store_ref(storage::sbt_item_code)             .store_ref(royalty_params)     .end_cell();      return begin_cell().store_uint(0, 2).store_dict(storage::nft_collection_code).store_dict(data).store_uint(0, 1).end_cell(); }  slice calculate_nft_collection_address(int wc, cell state_init) {     return begin_cell().store_uint(4, 3)                      .store_int(wc, 8)                      .store_uint(cell_hash(state_init), 256)                      .end_cell()                      .begin_parse(); }  () deploy_nft_collection_contract(slice owner) impure {     cell royalty_params = encode_royalty_params(owner);     cell state_init = calculate_nft_collection_state_init(owner, royalty_params);     slice nft_collection_address = calculate_nft_collection_address(workchain(), state_init);      var deploy_msg = begin_cell()         .store_uint(0x18, 6)                         .store_slice(nft_collection_address)              .store_coins(min_tons_for_storage)                         .store_uint(4 + 2, 1 + 4 + 4 + 64 + 32 + 1 + 1 + 1)         .store_ref(state_init);      send_raw_message(deploy_msg.end_cell(), 1);    }  Подскажите пожалуйста, почему при деплое коллекции выходит ошибка 36 invalid destination address ?

&rey: Ещё того хуже. Не в мемпуле, а на мосту выбранного кошелька. (reply to 288539)

larlmode: И что ж делать с такой радостью (reply to 288542)

&rey: Притворяться одним из кошельков или поднять себе мост. Дока на гитхабе где-то была, в большом сокращении. (reply to 288544)

larlmode: Звучит ужасающе учитывая что я абсолютно не знаком с этим всем (reply to 288545)

Tim: Ужасающе звучит, что вы хотите это сделать и ни с чем не познакомиться.

Tim: Читайте доки, читайте открытый код кошельков, пробуйте. Когда дойдете до проблем, тогда уже есть смысл тут спрашивать. Но просто не будет

&rey: Либо другой send raw message виноват, либо у вас воркчейн неверный. (reply to 288541)

#: я воркчейн не трогал. я по такому же принципу деплою прочие дочерние контракты. (reply to 288551)

#: можете пояснить? (reply to 288551)

&rey: Проще в retracer посмотреть.

#: он не открыватеся пишет invalid address: 3 (reply to 288555)

X1ag: state init проверьте, правильно ли собираете? (reply to 288541)

#: как? (reply to 288557)

X1ag: а это вы где код взяли? (reply to 288541)

#: сам писал (reply to 288559)

X1ag: ну вот вы тут state_init передаете, как вы его собираете? (reply to 288541)

#: cell data = begin_cell()         .store_slice(owner)         .store_uint(storage::next_item_index, 64)         .store_ref(storage::collection_content)         .store_ref(storage::sbt_item_code)             .store_ref(royalty_params)     .end_cell();      return begin_cell().store_uint(0, 2).store_dict(storage::nft_collection_code).store_dict(data).store_uint(0, 1).end_cell(); (reply to 288562)

X1ag: что-то не так с адресом назначения, мне кажется

#: какой вариант есть вывести куда-то этот адрес

&rey: nft_collection_address~dump();  проверьте, что этот слайс длиной 267 бит (reply to 288565)

#: а где посмотреть вывод? (reply to 288569)

&rey: Если контракт что-то ещё пытается отправить, ошибка может быть и там. А ещё может быть так, что FunC неправильно скомпилировал. (reply to 288564)

#: как сделать? (reply to 288569)

X1ag: вполне вероятно (reply to 288571)

&rey: Это уже на серьёзный баг-репорт тянет... есть хеш транзакции, например? (reply to 288556)

&rey: В sandbox точно можно, где-то там параметр debugLogs есть. (reply to 288570)

#: if (~ storage::init?) { ;; one-time initialization         throw_unless(455, equal_slices_bits(storage::core_address, sender_address));         storage::owner_address = in_msg_body~load_msg_addr();         save_data();          deploy_nft_collection_contract(my_address());         msg::send_ton_comment(storage::owner_address, 1000000, "Deployed. ");          return ();       }  У меня создается дочерний контракт, который сразу после деплоя должен создать коллекцию (reply to 288571)

#: 30b2757f7b02e4a2ba2f2092e1934cccc33f41311a9c12d6f51d925e3b9ac992 (reply to 288574)

&rey: Поздравляю, у вас msg::send_ton_comment(...) неправильно работает. (reply to 288577)

#: как вы поняли и почему? (reply to 288578)

无心🀄️: /stat@combot

&rey: [...][transaction.cpp:2237]  destination address contains unknown workchain_id -199711421 [...][transaction.cpp:2421]  invalid destination address in a proposed outbound message [...][transaction.cpp:1917]  invalid action 1 in action list: error code 36  то есть, второе сообщение в очереди неверное (reply to 288579)

#: это вы где посмотрели? (reply to 288582)

#: и какой вообще вариант, чтобы задеплоить коллекцию и отправить сообщение с комментом? (reply to 288576)

&rey: В браузерной консоли на retracer — после того, как он выдал ошибку. (reply to 288583)

#: понял, спасибо. подскажите, что делать, чтобы одновременно отправить сообщение с комментарием? (reply to 288585)

&rey: Ну, нам сейчас надо посмотреть, что там в msg::send_ton_comment, а то я не испытываю желания дизассемблировать этот код. (reply to 288586)

#: () msg::send_ton_comment(slice sender_address, int amount, slice comment) impure inline {     var msg = begin_cell()         .store_uint(0x10, 6)         .store_slice(sender_address)          .store_coins(amount)         .store_uint(0, 107 + 32)         .store_slice(comment)     .end_cell();     send_raw_message(msg, 1); }  Без деплоя коллекции это сообщения отправлялось (reply to 288587)

&rey: Значит, вот этот storage::owner_address = in_msg_body~load_msg_addr() грузит адрес из входящего сообщения, когда там не адрес; получается какой-то бред, куда отправить ничего невозможно. (reply to 288588)

#: убрал сообщение с коментом и коллекция задеплоилась

&rey: Проверьте сериализацию входящего сообщения, короче.

X1ag: () msg::send_ton_comment(slice sender_address, int amount, slice comment) impure inline {     var msg = begin_cell()         .store_uint(0x10, 6)         .store_slice(sender_address)          .store_coins(amount)         .store_uint(0, 107 + 32)         .store_uint(0,32)         .store_slice(comment)     .end_cell();     send_raw_message(msg, 1); }  вот так по идее должно быть (reply to 288590)

#: всегда без этого работало, но щас попробую (reply to 288594)

#: просто это разрешает писать комментарий (reply to 288594)

X1ag: просто у меня вот так именно работало   () send_message_commission(slice to_address, int value, int mode) impure inline {     var msg = begin_cell()         .store_uint(0x18,6)         .store_slice(to_address) ;; sender address         .store_coins(value) ;; amount of ton(in nanoton)         .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1 + 1)             .store_uint(0, 32) ;; op-code             .store_slice("comment")       .end_cell();   send_raw_message(msg, mode); } (reply to 288594)

#: вы тут же не добавили 32 бита (reply to 288597)

#: не сработало (reply to 288594)

X1ag: cell msg = begin_cell()     .store_uint(0x18, 6)     .store_slice(addr)     .store_coins(amount)     .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1 + 1)     .store_slice(message_body)   .end_cell();  на docs.ton.org так. Никакие дополнительные 32 бита не нужны (reply to 288598)

#: это если без комментария (reply to 288601)

#: я попробовал заменить на сендера, он отправил родительскому контракту (reply to 288576)

X1ag: вот с комментарием   ;; We use literal `a` to get valid address inside slice from string containing address  slice addr = "EQArzP5prfRJtDM5WrMNWyr9yUTAi0c9o6PfR4hkWy9UQXHx"a; int amount = 1000000000; int op = 0; slice message_body = "❤️";   cell msg = begin_cell()     .store_uint(0x18, 6)     .store_slice(addr)     .store_coins(amount)     .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1 + 1) ;; default message headers (see sending messages page)     .store_uint(op, 32)     .store_slice(message_body) .end_cell();  send_raw_message(msg, 3); ;; mode 3 - pay fees separately and ignore errors (reply to 288602)

X1ag: то же самое, только мод другой (reply to 288597)

#: я этим пользуюсь и работает (reply to 288588)

#: почему-то

X1ag: @pcrafter, почему я не прав? (сори что тегнул) (reply to 288594)

&rey: Потому что .store_uint(0, 107 + 32) == .store_uint(0, 107).store_uint(0x00000000, 32) по эффекту, и # просто первое написал вместо второго. (Ну, единственный видимый эффект — уменьшенное потребления газа, если мы запись одну делаем, потому что опкодов меньше.) (reply to 288610)

X1ag: понял, вы правы, спасибо (reply to 288612)

&rey: Значит, вам во входящем сообщении бред приходит. (reply to 288603)

#: у меня овнер адрес не тот загружается в load data кажется (reply to 288614)

X1ag: Не могу понять почему ругается, когда ввожу npx blueprint build.   Выводит следующее: error: previous function return type (cell, cell, int, int, slice) cannot be unified with return statement expression type (cell, cell, (slice, int), (slice, int), (slice, slice)): cannot unify type (slice, int) with int         );  (cell, cell, int, int, slice) load_data() {   slice ds = get_data().begin_parse();   slice ds_jetton_minter_data = ds~load_ref().begin_parse();   return (     ds_jetton_minter_data~load_ref(), ;; jetton_minter_code       ds_jetton_minter_data~load_ref(), ;; jetton_content     ds.load_uint(64), ;; lp supply     ds.load_uint(64), ;; USDT balance      ds.load_msg_addr() ;; owner address   ); <-- ругается тут }

Volodya: Привет, можешь вот такой сервис попробовать https://github.com/OpenBuilders/transaction-lookup  Через редис ставишь адреса которые слушаешь и потом в стриме ловишь эвенты если на них случаться транзакции (reply to 288485)

&rey: Потому что ds~load. (reply to 288616)

X1ag: жесть, пора спать. Благодарю (reply to 288618)

— 2025-02-05 —

ABCDE: Всем привет! Использую Tact.  Мне нужно хранить группу чисел, она может быть очень большой. Добавление числа происходит через сообщение от другого контракта. Далее в определенный момент мне нужно в цикле пересчитать эти числа.  Как лучше всего хранить это? Сейчас я использую map, однако при кол-ве чисел более 300-400 я упираюсь в лимит газа. Может быть как-то сериализовать их? Или вручную собирать в ячейки? Как сделать это максимально дешево по газу?

Jzuss ┌( ಠ_ಠ)┘: А битность какая? (reply to 288639)

X1ag: Доброе утро  Подскажите, правильно ли я мыслю. Мне нужно переводить USDT по нажатию кнопки. Для того чтобы это сделать, мне нужно: 1) в своем смартконтракте собирать стейт инит jetton-wallet  2) собирать адрес jetton-wallet 3) отправить на адрес jetton-wallet'a op-code::transfer(где в качестве to_owner_address передавать адрес получателя)  и все?

Рома: Немного не вижу взаимосвять между кнопкой и смартконтрактом.. в целом перевод выглядит так:  ты на свой jetton-child токена посылаешь сообщение шо хочу тому-то перевести столько то жетонов и он это уже делает. А делать это через веб интерфейс или через контракт без разницы, но для этого смарт контракт писать не нужно)) (reply to 288644)

X1ag: понял, логика ясна. Спасибо   Контракт нужен, потому что пишу пул ликвидности. Это одна из его функций :) (reply to 288646)

Alacrity: как узнать хэш сообщения по транзакции?

🐼 Sild: распаковать сообщение из транзакции и взять его хешhttps://github.com/ton-blockchain/ton/blob/050a984163a53df16fb03f66cc445c34bfed48ed/crypto/block/block.tlb#L295 (reply to 288649)

.palm: привет всем, подскажите, возможно ли как то свапнуть монеты в блюме по контракту, до миграции на пул stonfi? не пойму, как нормально транзакцию отправить (делаю не через блюм), python, tonutils

sd: нужно собрать примерно такое сообщение https://github.com/ton-fun-tech/ton-bcl-sdk/blob/main/src/wrappers/BclJetton.ts#L267C11-L267C18 (reply to 288663)

.palm: спасибо большое

Viacheslav: https://github.com/ton-blockchain/multisig/issues/5 кто нибудь из тона собирается это чинить или нет интересно..

Василий: В firefox 134 открывается океешно. В chromium 132 тоже.  В репорте нет никаких данных, опираясь на которые это можно было бы воспроизвести.  Для воспроизведения достаточно ссылку открыть или нужны дополнительные действия? (reply to 288667)

Viacheslav: о у меня тепреь тоже (reply to 288670)

Andy: Ну ты полноценно ишью заполни. А в таком репорте никто не будет разбираться

Viacheslav: уже не нужно, все заработало, но на будущее запомню (reply to 288673)

Frieren: Подскажите по фулл ноде mytonctrl Когда провайдер меняет мне айпи, у меня слетает конфиг я так понимаю? Я могу пересобрать это быстренько?

Андрей: нужно поменять ip ноды в конфиге /var/ton-work/db/config.json (reply to 288686)

X1ag: ребят, а можно как-то с помощью одного сообщения отправить транзакции на несколько контрактов?  Т.е. не поэтапно, а сразу чтобы в тонкипере было видно результат перед отправкой?  Если да, то как?

X1ag: условно если кто-то свапает токен внутри платформы, давать вместе с этим токеном еще один(как бы ревард). Это же на два jetton-child контракта обращаться нужно (reply to 288697)

/B4ckSl4sh\: несколько мессаджей можно, да. Через тонконнект нужно? (reply to 288697)

X1ag: нет. в самом смарт контракте

SweetJesus: подряд просто пишешь send_raw_message (reply to 288703)

X1ag: понял. Спасибо

rxcat: в либе ton/sandbox можно jest матчерами ловить ext-out меседжи?

good: Привет!  Кто-нибудь может подсказать, куда копать? Суть проблемы - нужно реализовать выводы средств из приложения. Реализую на питоне. Отправляю транзакцию пачками по 4 штуки, некоторые пачки проходят, а некоторые сперва отображаются, как "в процессе", а затем пропадают  Как вообще реализовать сценарий, где есть большое количество выплат с одного кошелька?

&rey: А, ну да, экстерналы имеют обыкновение теряться. Можно их отправлять через tonapi, тогда будет получше.  (И лучше использовать preprocessed-v2, тогда пачки выводов будут по 255. Если надо несколько... просто создайте несколько кошельков для вывода.) (reply to 288717)

Ivan: https://docs.ton.org/v3/documentation/smart-contracts/contracts-specs/highload-wallet  Или хайлоад кошелек

good: Блин, после евма в тоне одно страдание🤣 (reply to 288718)

good: Понял, спасибо, копну туда

&rey: А разве там гарантируется, что предложенная евм-транзакция действительно случится, не будет случайно пропущена кем-там-генерирует-блоки? (reply to 288720)

good: Я с таким не сталкивался ни разу при обычном трансфере нативной валюты (reply to 288722)

&rey: Ну, в тоне такую гарантию сделать можно, но сначала всё же переработают механизм генерации блоков (сейчас вот это кодится).

#: () msg::mint_item(slice collection, slice owner, cell content) impure inline {     var msg = begin_cell()             .store_uint(0x18, 6)             .store_slice(collection)              .store_coins(min_fee)             .store_uint(0, 107)             .store_uint(1, 32)             .store_uint(cur_lt(), 64)             .store_coins(min_fee)             .store_ref(                 begin_cell()                     .store_slice(owner)                     .store_ref(content)                     .store_slice(owner)                 .end_cell())         .end_cell();     send_raw_message(msg, 1); }  Подскажите пожалуйста, у меня при минте SBT пишет 9 cell under flow. Чего не хватает ?

&rey: Да коллекция его знает. Есть адрес или хеш транзакции? (reply to 288726)

#: 245fb2c20c719fbbc5646ac4899012a0a121c2d3177d62480a5268d287538188 (reply to 288727)

#: Индекс нужно указывать ? (reply to 288726)

Дмитрий: Так тебе нужно не искать адрес по иниту кошелька, а просто запросить адрес у мастера. Не помню какой там опкод (reply to 288648)

Дмитрий: На мастер отправляешь транзакцию с одним из параметров - адрес контракта и тебе обратно прилетит сообщение с его жетон кошельком

good: В итоге с ними получилось, вроде как часы работает  Спасибо! (reply to 288719)

#: function createCollectionContent(url: string): Cell {     const commonContent2 = beginCell()         .storeStringTail("")          .endCell();      const commonContent1 = beginCell()         .storeUint(1, 8)          .storeStringTail(url)           .endCell();      return beginCell()         .storeUint(1, 8)         .storeRef(commonContent1)         .storeRef(commonContent2)         .endCell(); }  Подскажите пожалуйста, что делать если после минта нфт в метадате перед ссылкой появляется пустой символ, который мешает отобразить контент

Ivan: storeStringTail → storeStringRefTail

Ivan: function createCollectionContent(url: string): Cell {     const commonContent2 = beginCell().endCell();      const commonContent1 = beginCell()         .storeUint(1, 8)         .storeStringRefTail(url)         .endCell();      return beginCell()         .storeUint(1, 8)         .storeRef(commonContent1)         .storeRef(commonContent2)         .endCell(); }

Ivan: Отпиши если помогло (reply to 288737)

#: Нет (reply to 288741)

Ivan: function createCollectionContent(url: string): Cell {     const commonContent1 = beginCell()         .storeUint(1, 8)         .storeStringRefTail(url)         .endCell();      const commonContent2 = beginCell().endCell();      return beginCell()         .storeUint(1, 8)         .storeRef(commonContent1)         .storeRef(commonContent2)         .endCell(); }

Ivan: А так?

#: Нет (reply to 288747)

SweetJesus: байт лишний.  У тебя полгода назад была ровно такая же проблема, я тебе объяснял что не так)  полистай чат со мной, поймешь где косяк у тебя. (reply to 288737)

— 2025-02-06 —

Фёдор: а где фулл доку можно найти по tonconect sdk go?

Adil’: Всем привет! Есть заказ ТМА лоторея-розыгрыш токенов usdt/ton. Вносите крипту, участвуете в розыгрыше. Свяжитесь, кто может полностью реализовать

X1ag: Так это целое дело (reply to 288735)

ABCDE: 64. Не известно, какого размера будет число (reply to 288643)

Дмитрий: ? (reply to 288763)

Дмитрий: Это 2 транзакции

Дмитрий: Проще уже не может быть

X1ag: Это затратнее, чем собрать адрес самому

Дмитрий: Ну попробуй собрать адрес сам. Только учти, что у разных жетонов может быть разный код кошелька и тут уже ты ничего не сможешь сделать (reply to 288771)

Дмитрий: А отправить-получить займёт примерно 0.01-0.02 тон. Так все дексы делают

Дмитрий: И в целом контракты, которые что-то делают с жетонами

&rey: Вообще, достаточно взять код, данные и адрес жетон-мастера и проэмулировать с помощью RUNVM. Тогда никакой лишней асинхронности не будет.

Дмитрий: Только Даниил хочет сделать это через смартконтракт. Если без него- то можно просто метод у мастера вызвать без всяких эмуляций (reply to 288775)

Дмитрий: get_wallet_address вроде

Дмитрий: Да, сейчас проверил- можно просто на тонвивер зайти и эмулировать ничего не надо

Дмитрий: Но человек пишет пул ликвидности и эмуляция или запрос через тонвивер здесь работать не будут. Поэтому единственным вариантом является отправка транзакции

&rey: Что? Сам писал пул ликвидности, нормально там RUNVM работало.

Дмитрий: Лишняя морока. Делайте как хотите короче. А дедаст видимо дураки пишут, которые не додумались до такого «элегантного» решения

&rey: есть один маленький факт: вот эта ончейн-эмуляция появилась существенно позже дедаста, так что мимо (reply to 288782)

Дмитрий: Ты представляешь, насколько это неудобное решение?   Для начала тебе нужно запросить у мастера код кошелька, потому что ты не можешь быть уверен в том, что он стандартный  Потом ты должен тратить силы контракта(на которые тоже расходуется газ) на эмуляцию и только потом ты получаешь адрес своего жетон кошелька (reply to 288783)

Денис Дмитрович: Нужно написать Телеграм бота WEB APP (Mini App) строго на моем железе у меня или у Вас, или по договоренности в кафешки можем встретиться. Большой проект, готов к поэтапной разработке, так как денег сразу нет на весь проект. Оплата по договоренности - почасовка, построчно (100 строк, к примеру). Вкратце о боте: 1. Mini Apps + Админка, 2. Одноуровневая партнерка, 3. Регистрация через подтверждение почты, 4. Установка пароля на входе, 5. Мультиязычность, 6. Продажа Тарифов в криптовалюте Toncoin и за звезды телеграме, 7. Розыгрыши тарифов, 8. Кроссплатформенность (работа на всех устройствах), 9. Рассылка пользователям сообщений, 10. Другие опции....!

Гурий: Лям (reply to 288788)

Nikita Shulgin: товарищи!   помогите пожалуйста  https://tonviewer.com/EQBLomakRl0Il1zSp4G2AQudWvqEzZfunzpbFqR7TkExUXGg  как понимаю - это контракт продажи NFT v4  у него в коде есть скрипт nft-fixprice-sale-v4r1  подскажите пожалуйста - мне надо собрать логику, которая будет получать по какой стоимости и за какой токен выставлен на продажу данный NFT   как ее можно реализовать? не вижу в коде явного указания стоимости   надо запрос на смарт писать? направьте пожалуйста

DealUnloker: Пытаюсь задеплоить контракт, на тестнете все нормально проходит, а с мейнетом такая ошибка, кто-то знает в чем может быть проблема?

Nikita Shulgin: Функция которая ожидает аргумент с ценой и токеном платежа  Выходит он ожидает конкретные значения   Пытаюсь понять как ончейн посмотреть сумму к платежу  этот контракт принимает выставленные в продажу NFT  https://tonviewer.com/EQBIjGl4Nu2ErrCYko_5EBTB4SuOdJCy_H7yBQXXxgangcjf  но до меня не доходит где цена назначается ончейн (reply to 288801)

Nikita Shulgin: спасибо тебе большое  но мне надо ончейн парсить цену по которой выставляется в продажу токен  или ты имеешь в виду - можно написать логику обращения на эту функцию и она отдаст цену?   просто как понимаю она принимает аргументы, а не отдает их (reply to 288807)

web-assist 🧀: А разве есть возможность вызвать get-функцию контракта другим контрактом? (reply to 288808)

web-assist 🧀: Я могу ошибаться конечно, но выглядит так, будто она не принимает аргументы 😁 (reply to 288808)

Оскар: гет методы предназначены только для оффчейна, ончейн не получится получить прайс с контракта (reply to 288808)

Nikita Shulgin: мужики, спасибо!  искренне благодарен  в ЛС дропните кошельки пожалуйста - как капитал, подниму рахмет закину

Nikita Shulgin: где в доке лежит описание взаимодействия офф чейн с контрактами?   какая же сетка хардовая

Nikita Shulgin: https://tonviewer.com/EQBLomakRl0Il1zSp4G2AQudWvqEzZfunzpbFqR7TkExUXGg?section=code  контракт  под него написал оффчейн функцию    async def get_raw_data(contract_address: str):     client = TonapiClient(api_key=API_KEY, is_testnet=IS_TESTNET)     result = await client.run_get_method(contract_address, "get_data", [])     return result  if __name__ == "__main__":     raw_data = asyncio.run(get_raw_data(contract_address))     print("Raw get_data:", raw_data)   отдает  Raw get_data: {'success': False, 'exit_code': 11, 'stack': [{'type': 'num', 'num': '0x13489'}]}    уважаемые комрады - направьте умоляю

odnokasanie: Коллеги, не соображу, почему Tonviewer отображает Mint моего жетона со стрелочкой на непонятный адрес https://testnet.tonviewer.com/0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkT  Хотя по факту сминченное количество этого жетона попадает на нужный кошелёк.  Ну и 0 количество, хотя по факту нужное количество в коошельке.

X1ag: подскажите пожалуйста, как работает RUNVM (есть ли примеры использования?)  просто тут мало что понятно: https://docs.ton.org/v3/documentation/tvm/specification/runvm (reply to 288781)

X1ag: это адрес сжигания, нужно посмотреть что за метод вы вызываете конкретно (reply to 288820)

odnokasanie: отправляю заполненное сообщение Mint на jetton master моего жетона, вроде как обычно.  у меня сообщение Mint моей структурой, но я ему opcode задал стандартно-распознаваемого минта:   message(0x642b7d07) Mint {     amount: Int;     receiver: Address;     amount_usdt: Int as coins; }   что может быть не так? (reply to 288822)

&rey: Приблизительно так: https://gist.github.com/ProgramCrafter/53fc3a4846397ee5f3f3b25ca3356ab5. (reply to 288821)

&rey: А как тонвьювер должен распознать, где какое поле сообщения читать? Эти тактовые структуры же вообще в блокчейн не попадают. (reply to 288823)

odnokasanie: я прочитал, что opcode можно задавать "любым" и не обязательно посчитанным от message.   для наглядности операции указал opcode = распознаваемому Mint, но эксплореры плохо это видят? (reply to 288825)

&rey: Эксплореры так-то пытаются декодировать сообщение согласно опкоду, а у вас всё равно что положили в упаковку для брикета мороженого эскимо. Сервер пытается нарезать это на поля, и получается совсем не то. (reply to 288826)

odnokasanie: (спсб за разъяснения)  пробежался по TEP-0074, не увидел там стандартизацию сообщения Mint. Какую структуру сообщения Mint использовать, чтобы эксплореры правильно понимали? Я подстроюсь (reply to 288829)

Vladimir: Какое такое сообщение Mint? Это же просто Jetton Internal Transfer от мастера (reply to 288831)

odnokasanie: Jetton Internal Transfer делает master. А для того, чтобы он сделал это он получает сообщение Mint, не так ли? (reply to 288833)

Vladimir: Нет, это можно инициировать вообще в любом месте (reply to 288835)

&rey: Ну, эксплореры и не обязаны там ничего распознавать, но можете продублировать структуру того сообщения, где опкод взяли. (reply to 288831)

odnokasanie: не в этом (где инициировать internal transfer) же вопрос. вы спросили "что такое сообщение Mint" - я ответил ну и дополню, Mint - это не просто Internal Jetton Transfer как вы пишите. (reply to 288836)

Vladimir: Давай на примере, я как раз недавно эту задачу делал: 1) Сделан Internal Transfer по сообщению с текстом F tonviewer.com/transaction/c2705ca2dce3668aa5c1b1ac91f6c27d0a6a1ea8ed75bd62902a4897dfd9bf9a 2) Сделан Internal Transfer по сообщению Mine {receiver: Address} tonviewer.com/transaction/01a41f49c6522377262fc7b7662936f26a9a3d0dc34fe77ac77568c0ac335e00  TonViewer их одинаково распознал как Mint token. (reply to 288839)

odnokasanie: вижу. значит эксплорер распознает Mint для отображение как Action не по Mint- или любому другому сообщению, а по jetton internal transfer (0x178d4519), он у меня по содержанию "другой", не классический, поэтому меня Mint в эксплорере не отображается.  я поменял порядок в jetton internal transfer (0x178d4519), чтобы отрабатывался bounced (который режет сообщение) этого сообщения с нужными мне данными.  так, что жы делать?  Всё работает как надо, я лишь для наглядности хотел мимикрировать под текущий паттерн распознования. (reply to 288840)

Vladimir: ну таким образом идёшь вразрез с TEP-ом жетонов, поэтому не стоит рассчитывать что эксплореры будут правильно распознавать кастомные сообщения (reply to 288841)

odnokasanie: Коллеги, я всё почитал про query_id в сообщениях, но посмотрел какие получилось репозитории с примерами приложений с использованием смартконтрактов Тон, но нигде не видел, чтобы кто-то уникализировал query_id.  кто делает публичные приложения, вы уникализируете? Как? от времени + хэш от параметров? Если есть пример для подражания - скиньте пжлст.

&rey: Стараемся его выкинуть вовсе. (reply to 288846)

odnokasanie: класс, а как же TEP’ы, гайды и то, что в них пугают задвоением, атаками? (reply to 288847)

&rey: А можете показать, которые гайды настолько с ума сошли? Интерналы дублироваться не могут сами собой, там бы количество тонов самопроизвольно росло. (reply to 288848)

Александр: Из доки: Query ID has no value in terms of message processing. The NFT contract doesn't validate it; it only reads it. This value can be useful when a service wants to assign a specific query ID to each of its messages for identification purposes.   По факту с большего легаси как будто, всегда в 0 сетается в проектах (reply to 288848)

odnokasanie: https://docs.ton.org/v3/guidelines/dapps/asset-processing/jettons#message-0  ну и много где встречал про unique.  я понимаю про internal’ы, на то они и internal’ы. я про query_id из офчайн с которых начинается транзакция (reply to 288849)

Jonny: GM GM

Vladimir: я автоинкрементом сделал (reply to 288846)

&rey: Контракту, например, одинаково просто использовать cur_lt() и 0, но первое будет уникально.

odnokasanie: хранить на сервере, отдельный endpoint для этого, ну не знаю, если загнаться об уникальности, то лучше хэш от время + payload (reply to 288858)

Vladimir: я про сообщение из самого контракта говорю. Если про клиент говорить, то отдельный эндпоинт конечно же не решит проблему дублирования с использованием автоинкрементного значения, если только не инкрементить его при каждом запросе (reply to 288860)

odnokasanie: да, но пока удивляет, что всё приложения, что я вижу на гитхабе, каких-то популярных сервисов или просто с большими кол-во звезд, в них query_id=0   ну и высказывание уважаемого @pcrafter выпиливать его… (reply to 288859)

&rey: Потому что любую цепочку транзакций можно обогнать и использовать тот же query ID, поэтому очень проблематично обеспечивать с его помощью ончейн безопасность. (reply to 288862)

odnokasanie: не совсем понимаю, что значит "обогнать"? увидеть pending транзакцию и начать свою с тем же query_id?  и какие потенциальные проблемы в безопасности могут быть? (reply to 288867)

Dima: Привет ребята , как на ton можно реализовать механизм stealth кошельков , кто знает можете помочь пожалуйста, заранее спасибо

&rey: А можно вместо термина пояснение, что именно вы имеете в виду, насколько скрыть? Так-то можно на каждое входящее сообщение создать по кошельку и не деплоить его; до вывода никто не узнает, чей контракт и вообще кошелёк ли это. (reply to 288874)

Dima: имею ввиду что например нужно с кошелька закинуть токен в смарт-контракт , и со стороны никто не должен узнать его адрес  , думал есть ли stealth-кошельки чтоли

User: Можете подсказать, в sandbox используются те же комиссии, как и в mainnet?

Василий: В свежих версиях - да. В старых версиях - как в старой конфигурации мейннета (reply to 288883)

GGGleb🔺: как верифицировать tolk.  контракт ?  подскажите пожалуйста  https://verifier.ton.org/EQDA6-40KmOSy__ovUKTmyBquqhdDHS_6DVf-r_z2rwtbHRr?testnet=  тут принимают только .fc .pkg

Nikita Shulgin: мужики я сутки уже потратил на то, чтобы получить гет от смарта  https://tonviewer.com/EQBLomakRl0Il1zSp4G2AQudWvqEzZfunzpbFqR7TkExUXGg?section=code   _ get_fix_price_data_v4() method_id {     var (         is_complete,         marketplace_address,         nft_owner_address,         full_price,         sold_at,         sold_query_id,         static_data_cell,         jetton_price_dict,         _     ) = load_data();     var (         fee_address,         royalty_address,         fee_percent,         royalty_percent,         nft_address,         created_at     ) = load_static_data(static_data_cell);     return (         is_complete == 1,         created_at,         marketplace_address,         nft_address,         nft_owner_address,         full_price,         fee_address,         fee_percent,         royalty_address,         royalty_percent,         sold_at,         sold_query_id,         jetton_price_dict     ); }   мой текущий код:   BASE_URL = "https://toncenter.com/api/v2" async def get_nft_sale_data(contract_address):     url = f"{BASE_URL}/runGetMethod"     params = {         "address": contract_address,         "method": "get_fix_price_data_v4",         "apikey": API_KEY     }      async with aiohttp.ClientSession() as session:         async with session.get(url, params=params) as response:             data = await response.json()             print(data)   что не так((((((((((  как обратиться к нему? ни на гите ни в доке нихрена толком не описано

Andy: Я бы начал с удаления анимированного аватара

User<5556796111>: какими критериями должна обладать монета что бы ее цена показывалась в tonapi

Igor: я конечно про тон пока ничего не знаю и ничего не знаю про питон, но судя по апи параметры метода это обязательное поле (reply to 288888)

Igor: и если у тебя их нет, то наверное надо передавать пустой массив

Igor: ну или что такое stack, может поправят меня всемогущие разрабы тут )

#: if (op == 2) { ;; batch deploy of new nfts       int counter = 0;       cell deploy_list = in_msg_body~load_ref();   Можете объяснить пожалуйста, почему когда собираешь сообщение с оп кодом 2, то пишешь storeDict , а коллекция получает как ячейку через load_ref ? Почему не load_dict?

#: () msg::mint_batch_items(slice collection, int count, cell dict) impure inline {     var msg = begin_cell()             .store_uint(0x18, 6)             .store_slice(collection)              .store_coins((min_fee - 10000000) * count)             .store_uint(0, 107)             .store_uint(2, 32)             .store_uint(cur_lt(), 64)             .store_ref(begin_cell().store_dict(dict).end_cell())         .end_cell();     send_raw_message(msg, 1); }   Подскажите почему при вызове оп 2 exit code 9 cell under flow

GGGleb🔺: 🥹 ? (reply to 288886)

User: begin_cell()         .store_uint(payout::burn, 32)         .store_uint(query_id, 64)         .store_coins(amount)         .store_slice(to)  Stonfi не принял вот такой вот cell для сжигания LP. В документации у них есть параметр store_maybe_ref(), его тоже нужно обязательно указать?

Ruslan: Да (reply to 288913)

User: Можете еще подсказать, почему по итогу мне выбило на jetton-master, stonfi-pool-v2 - ошибку 86 (reply to 288914)

— 2025-02-07 —

Konstantin: Словарь это по-сути ячейка, отдельного типа нет. Отличие load_ref от load_dict только в том что результат load_dict может быть равен null (который можно проверить) в зависимости от следующего бита в слайсе. Т. е. если есть уверенность что словарь есть, можно просто просто загружать его по ссылке. (reply to 288910)

B.: Добрый день! Я на данный момент хочу сделать Frontend который будет на GitHub page. Хотел узнать, есть кто может закинуть прикольные проекты в гихабе, который дают возможность диплоить смарт контракты?

Mr.travellerr: Я могу тебе помочь (reply to 288932)

Nikita Shulgin: подскажите пожалуйста какой либой декодировать    ['cell',                        {'bytes': 'te6cckEBAQEASwAAkaAbI4Dpvivw12clbWSFI8cqHAQ0fxvWKPGlNSuqOIbNZsoCVAvkAQArj5tNR5XYnbkOecWgRf9ZGlv1gFMuQx3svLLqs1PzACAoXPe4',                         'object': {'data': {'b64': 'oBsjgOm+K/DXZyVtZIUjxyocBDR/G9Yo8aU1K6o4hs1mygJUC+QBACuPm01HldiduQ55xaBF/1kaW/WAUy5DHey8suqzU/MAAA==',                                             'len': 578},                                    'refs': [],                                    'special': False}}]   в доке нет информации на данную тему

RootTon: Парасить ячейки (reply to 288937)

RootTon: Как укладывали в них информацию, кто либо из вашей компании, так вы от туда инфу и достать должны будете

Volodya: Это необходимо для удобной работы с транзакциями. Один из вариантов как использовать, если вам нужно отправить большое количество токенов пользователям.  Внутри сервиса для всех транзакций используется уникальное значение (обычный инкремент — норм).  Позже, при проверке статуса транзакций, сервис сможет идентифицировать их по query_id.  Уникальность значений не проверяется на уровне блокчейна. Если вам это не нужно, можно просто устанавливать 0.  Сам query_id — это стандарт в каждом сообщении, насколько помню (reply to 288846)

&rey: query_id стандарт только в тех TEP, которые так написаны — то есть, у жетонов и у нфт. (reply to 288959)

&rey: А ничего, как бы, что злоумышленник может с тем же query_id отправить провальную транзакцию? Если сервис заметит именно её и вернёт что-то на счёт пользователю, то вот проект деньги и потеряет. (reply to 288959)

Volodya: Да, я про эти сообщения как раз и говорю (reply to 288960)

Svαtoωλ‎: а как получать decimals у токена ончейн ? я так пон надо вызывать runGetMethod с get_jetton_data, а что дальше... остается под вопросом

наз: если метадата офчейн то в ней лежит, если не лежит значит 9, если метадата ончейн то её парсить и из неё доставать (reply to 288963)

Volodya: В примере, что я написал, можно проверять, что транзакции отправлена с  кошелка сервиса. query_id это скорее, как удобный способ понять, что за транзакции произошла и найти ее в цепочке между адрес - Jetton-wallet - jetton-wallet2 - address2 (reply to 288961)

Svαtoωλ‎: вот, мне последнее нужно, где есть... пример парсинга..? (reply to 288964)

&rey: Можно спросить, а что у вас за случай, в котором блокчейну вообще важны децималсы? (reply to 288963)

наз: смотря как запаковывали, вообще в get_jetton_data берешь content, там первые 8 бит префикс, если ончейн то парсишь как хешмап, в питон чате кидали пример, поищи (reply to 288966)

&rey: Да вот для всех транзакций, кроме первой, проверять отправителя уже не элементарно; и в любом случае мы можем от транзакции перейти к следующим в дереве (через хеш исходящего сообщения), так что query_id нам там ничем не помогает.  Апишки вот могут индекс построить по query_id (учитывая, однако, что не все жетоны его уважают), это да; больше ничего. (reply to 288965)

User: В func составляю отрицательное условие вот так:  ((a | b) != -1)  Достаточно адекватная реализация, или можно лучше?

Svαtoωλ‎: мне для корректного свапа в дексах в целом нужно (reply to 288967)

&rey: А если децималс меняется (ну, админ жетона так захочет), то меняется результат свапа? (reply to 288973)

&rey: Мне кажется, или вы хотели что-то вроде ifnot (a | b) ? (reply to 288972)

Svαtoωλ‎: ну походу да, а что еще делать остается... (reply to 288977)

Svαtoωλ‎: Я на самом деле хз как с этим работать) если поменяют (reply to 288979)

&rey: Ну, у обычных дексов ничего не поменяется, если что. (reply to 288979)

Svαtoωλ‎: Эээ, в плане? (reply to 288982)

rends_east: decimals никак не влияют на смарт контракты это просто удобная эвристика для отображения значений в кошельках и приложениях в смартах нет дробных чисел (reply to 288983)

&rey: Как выдавалось 4800000 неделимых единиц чего-нить, так и будет, только будут обозначать там 48 жетонов вместо 4.8. (reply to 288983)

Svαtoωλ‎: Ну, я так понимаю, все равно же для корректного свапа надо получать текущие decimals

rends_east: нет, вообще не нужно, decimals никак в смартах не фигурируют (reply to 288986)

rends_east: если вы просто формируете запрос в декс, а не пишете свой собственный, то вам в сообщении нужно умножить количество токена на 10^decimals возможно, вам это нужно (reply to 288986)

Svαtoωλ‎: Но у меня не смарт, я просто свап хочу сделать с одного жеттона на другой питон кодом  https://github.com/nessshon/tonutils/blob/main/examples/jetton/dex/dedust/swap_jetton_to_jetton.py  Следовательно мне всегда нужно получать актуальное значение decimals для токенов (reply to 288987)

rends_east: а откуда вы получаете количество токенов? (reply to 288990)

Svαtoωλ‎: Просто ввёл руками float число, и позже умножаю это число на 10 ** decimals (reply to 288992)

rends_east: а откуда вы узнаете, сколько токенов вы хотите обменять? или это только руками делается? (reply to 288994)

Svαtoωλ‎: Пока руками, предполагаю будет еще вариант с получением кол-ва всех токенов на кошельке. Но суть ведь остается та же - получать актуальные decimal'ы (reply to 288995)

rends_east: если вы будете получать количество токенов на кошельке, то в это количество уже будут встроены decimals например, у usdt decimals — 6. Если вы вызовете у своего кошелька с 1 usdt метод get_wallet_data, то получите, что баланс у него — 1 000 000 аналогично у любых жеттонов только помните, что у тона decimals 9 (reply to 288996)

&rey: Вот пока руками, децималсы тоже руками делайте (при этом не отдельным запросом, а тем же, что и жетон смотрите). (reply to 288996)

ᅠ: есть вариант проще - поддерживать определенные токены и с ними мапу разместить с контрактом и децималами, тем самым избежав запросов, мапу хоть в бд, хоть в редис, хоть куда. Рабочий вариант если хочется сидеть на бесплатных нодах (reply to 288996)

ᅠ: децималы ж не каждый день меняются

максим: а что случилось что то с тонкипером? вызываю транзакцию через blueprint а оно не работает, хотя вчера еще было все норм, кто то знает?

Volodya: Скорее всего, с тонкипером ок   Попробуй удалить tmp папку у blueprint-е и заново подключить кошелек. Ловил такую проблему иногда и помогало (reply to 289004)

максим: да в этом и проблема что скорее всего с тонкипером, я это все делал, а он даже подключать уже не хочет

Volodya: Сделал подключение у себя локально, у меня все отработало ок (reply to 289006)

Ivan: всем привет! кто нибудь использует @ton-api/ton-adapter ?  столкнулся с проблемой использования контракта где нужно передавать bigint числа: Not a cell: int  мб кто нибудь встречал

rends_east: вы уверены, что не пихаете в storeRef число вместо cell? (reply to 289008)

Ivan: уверен, используя клиент tonclient4 всё впорядке, проблема возникает когда использую адаптер. да и метод кроме бигинта ничего не принимает (reply to 289016)

matthew: Ребят, есть у кого пример как отправить минт транзакцию в nft коллекцию с сервера?

Robin: Тут есть кто то из tonkeeper?

Robin: https://github.com/tonkeeper/ton-assets  Вопрос по поводу пул реквеста на вериф колекции, кто сталкивался?

Daniel: Напишите в лс, смогу помочь (reply to 289023)

sd: в контракте можно прописать всё что угодно, что касается мемпадов с тонфана - это сделано чтобы никто не мог манипулировать ликвидностью на дексах раньше выхода монеты на них (reply to 289030)

Daniel: В контракте прописано, что отправлять нельзя когда идет активная фаза торгов на мемпаде. После выхода на декс можно.  Этот lockup механизм нужен для предотвращения листинга токена на дексах в момент сбора ликвидности на мемпаде (reply to 289030)

sd: вероятно потому что команда дексскринера не трекает пулы тонфана

sd: есть, все транзакции покупки идут на адрес жетон мастера, продажи - на адрес жетон валета конкретного юзера (reply to 289035)

rxcat: что с этой транзакцией не так?  https://tonviewer.com/transaction/6d02c124783b160278764317fdd841274630efa7ff5679beb56abf7e8cd10af1

Arseny: она failed (reply to 289040)

Igor: Ребят, а стоит с tact начать или есть смысл сразу в FunC нырять. Я просто к тому, есть ли место таким ситуациям, когда что-то не реализовано в tact, и в конечном итоге всё равно придётся изучать как всё работает в FunC. Я так понимаю tact это абстракция над FunC для более лёгкого написания смартов?

web-assist 🧀: Лучше сразу func изучать (reply to 289043)

Алексей: Кажется, пытается отправить больше тонов, чем есть на кошельке (reply to 289040)

rends_east: значит, что все изменения, которые вносило сообщение, отменены (кроме изменений баланса) (reply to 289045)

наз: да (reply to 289049)

X1ag: добрый вечер, подскажите пожалуйста, как отправлять jetton через blueprint? Где можно почитать про это?

odnokasanie: алефмана уроки, для начала (reply to 289056)

Volodya: Или даже Tolk (reply to 289043)

odnokasanie: tact более понятный, читаемый, ближе к языкам высокого уровня, например, к js. Соответственно скорость онбординга и результатов. Func можно использовать в tact через импорт, если прям надо (reply to 289043)

/B4ckSl4sh\: Из того, что сейчас совсем не реализовано в такт это exotic cell, и апгрейды контракта (но совсем скоро и это будет). Учитывая нашу прекрасную доку заонбордится в такт совсем не сложно (reply to 289043)

&rey: Шаг транзакции, где выполняется код контракта — определяется, как он поменяет хранимые данные и кому отправит какие сообщения. В вайтпеперах. (reply to 289061)

sd: https://docs.ton.org/v3/documentation/tvm/tvm-overview (reply to 289061)

Igor: Да, я понимаю, что разница в уровне абстракции. Я сам джавист и смотрю через призму в которой варюсь, мне допустим не нужно знать байткод, так как я не пишу компиляторы или какие то слишком низкоуровневые вещи (в общем оно того не стоит для меня, чтоб тратить время). Поэтому и возник вопрос, стоит ли тратить тут, или сразу tact, ведь в этой сфере я полный ноль :D Но на свой вопрос ответ услышал, видимо стоит :) (reply to 289060)

Volodya: Вот это должно помочь   https://docs.ton.org/v3/documentation/smart-contracts/transaction-fees/accept-message-effects (reply to 289067)

X1ag: посмотрел, не увидел там. Пишу на FunC (reply to 289057)

SweetJesus: напиши обертку просто, в чем проблема? (reply to 289056)

X1ag: используя jetton transfer? (reply to 289070)

X1ag: просто не понимаю как мне одновременно прокинуть и jetton transfer и опкод для работы смарт-контракта. Если есть примеры я был бы рад на них взглянуть

potato: Я начинал изучать с tact, но мне все равно пришлось потом разбираться в funс, чтобы все в голове укладывалось и не было магии под капотом Так что мой совет: выбирайте funс (reply to 289064)

potato: Передаешь опкод своего контракта, в котором есть ячейка для jt (reply to 289072)

Frieren: мне тож это было какое-то время интересно, но инфу еще не искал) (reply to 289075)

Василий: Подкину вам дровишек. Есть ещё tolk:https://docs.ton.org/v3/documentation/smart-contracts/tolk/tolk-vs-func/in-short  Он несколько проще для восприятия чем FunC и так же без "магии" под капотом. На данный момент рекомендовал бы его для начала изучения (reply to 289073)

potato: Не интересовался даже им, посмотрю потом Спасибо (reply to 289079)

User: GN. Может ли кто-нибудь объяснить, что я могу передать в burn custom_payloads stonfi v2 pool?   async createBurnBody(params) {     return beginCell().storeUint(DEX_OP_CODES.BURN, 32).storeUint(params?.queryId ?? 0, 64).storeCoins(BigInt(params.amount)).storeAddress(null).storeMaybeRef(params.dexCustomPayload).endCell();   }  В stonfi sdk response_destination вырезан (он постоянно null), но можно передать dexCustomPayload. Что можно передать в виде dexCustomPayload?

Василий: Эмулятор доступен прямо в монорепо:https://github.com/ton-blockchain/ton/tree/master/emulator  Все или почти все решения, использующие эмуляцию, строятся на его основе (reply to 289075)

&rey: *записать в builder после заголовка сообщения и опкода 0x00000000? Рекурсивную функцию можно написать; она сначала вызовет себя же для записи старших разрядов, потом преобразует младший разряд в ASCII-код и положит в билдер. (reply to 289085)

Василий: Это логическое время:https://docs.ton.org/v3/documentation/smart-contracts/message-management/messages-and-transactions#what-is-a-logical-time (reply to 289088)

odnokasanie: а можете дать пример, что не укладывалось при использовании tact, но уложилось при func? и про какую магию (конкретно) вы пишите? Ищу себе обоснования перейти на func (reply to 289073)

Alexander: Добрый день. Хочу на базе истории транзакций между двумя адресами посчитать баланс по TON/JETTON (кто кому сколько должен остался, условно говоря).  Подскажите, как такое лучше провернуть? Пытался запрос в tonconsole запульнуть, но понимания устройства структур в которых данные хранятся не хватает.

Nikita Shulgin: доброго дня   как питоном преобразовать TON-хэш   0:65d7c02add2d5395aad9ceef1ea674e3c64d0a9414457e40e48c6717814e1ca3    в Base64-адрес?   EQBl18Aq3S1TlarZzu8epnTjxk0KlBRFfkDkjGcXgU4coyp7

Алексей: Address('0:65d7c02add2d5395aad9ceef1ea674e3c64d0a9414457e40e48c6717814e1ca3').to_str(is_user_friendly=True) (reply to 289099)

Danya: Здравствуйте,такой вопрос,как или с помощью чего проверять валидность транзакции и доставать ее хэш??Заранее спасибо)

&rey: Достаётся из c7, если я верно помню, а туда логическое время кладёт валидатор. (reply to 289101)

&rey: Ну, данные транзакции запросить и достать поле lt. Заранее неизвестен. (reply to 289105)

&rey: Да. Растёт на каждом аккаунтчейне. Растёт в течение каждого блока. Растёт вдоль цепочки транзакций. (reply to 289111)

Kirill: Если я все правильно понимаю, то надо посмотреть сколько газа уходит на сообщение к этой сумме прибавить определенное кол-во тон которое было ранее отправлено и данную сумму вычесть с полученной изночально (reply to 289115)

Kirill: Нет, там будет полностью отправляться сумма без учета первой отправленной суммы

— 2025-02-08 —

RootTon: Если бы все было так просто :) (reply to 289126)

albert: Dm me (reply to 289126)

&rey: Ну, все эти значения слегка не лезут в одну ячейку. Да ещё и вы флаги в двух местах перепутали. (reply to 289138)

&rey: ;; после amount .store_uint(1, 107) .store_ref(begin_cell()   .store_uint(0x0F8A7EA5, 32)   ...   .store_coins(1)  ;; forward   .store_uint(0, 1)  ;; forward not in ref   .end_cell()) .end_cell() (reply to 289141)

&rey: Я вот поправил. (reply to 289143)

Nikita Shulgin: Всем добрый день! Подскажите пожалуйста, быть может кто-то сталкивался с такой проблемой?  client = TonapiClient(api_key=API_KEY, is_testnet=IS_TESTNET) wallet, _, _, _ = WalletV4R2.from_mnemonic(client, WALLET_MNEMONIC)  body = JettonWallet.build_transfer_body(  recipient_address=Address(sale_contract),  response_address=wallet.address,  jetton_amount=int(price_major * (10 ** 9)),  forward_payload=begin_cell().store_uint(0, 32).store_snake_string(   "Buying NFT").end_cell(),  forward_amount=500000000, )  tx_hash = await wallet.transfer(  destination=Address(jetton_wallet_address),  amount=0.55,  body=body, )  вчера функция работала, а сейчас отдает:    401, message='illegal base32 data at input byte 1'  входящие адреса корректные

&rey: Токен авторизации, судя по номеру ошибки, испортился. (reply to 289154)

Nikita Shulgin: освежил еще раз - тот же traceback  на вход    price в формате float  sale_contract='EQCAcAD7Fo30C6DBaMIZYvgma248SFdvIWNaprAwwiYx6Bzc'  в троссировке так же указана ссылка   url='https://tonapi.io/v2/blockchain/message'  при переходе на нее - белую страницу отображает  такая троссировка при попытке отправить транзу в любой из контрактов (reply to 289155)

&rey: Вы переизобретаете контракт кошелька. (reply to 289159)

Oleg: подписать:         let toSign = beginCell()             .storeSomethingImportant(xxx)             .endCell();         let signature = sign(toSign.hash(), privKey);  проверить:         var signature = in_msg_body~load_bits(512);         slice ms = in_msg_body; ;; the rest of message without signature         throw_unless(1234, check_signature(slice_hash(ms), signature, public_key)); (reply to 289159)

Spartan.by: Здравствуйте. Подскажите пожалуйста как купить домен .ton который просрочился?  написано что уже давно просрочился а опции оплаты нет.

X1ag: Передайте его самому себе (reply to 289163)

X1ag: А, или он у вас уже пропал?

Spartan.by: Он чужой был и просрочился но не понятно как купить

X1ag: Добрый вечер, подскажите пожалуйста, почему транзакция выдает exit code 9 (cell underflow)? Вот какие данные лежат в сторадже:  (cell, cell, cell) load_data() impure {   slice ds = get_data().begin_parse();   return (     ds~load_ref(), ;; code jetton_wallet     ds~load_ref(), ;; code jetton_minter      ds~load_ref() ;; content   ); Вот как паршу входящее сообщение:   int op = in_msg_body~load_uint(32);   int query_id = in_msg_body~load_uint(64);   var (JETTON_WALLET_CODE, JETTON_MINTER_CODE, JETTON_MINTER_DATA) = load_data();   if (op == 0) { ;; recieve      int op = in_msg_body~load_uint(32);     int query_id_old = in_msg_body~load_uint(64);     int amount = in_msg_body~load_coins();     slice to = in_msg_body~load_msg_addr();     slice from = in_msg_body~load_msg_addr();     cell custom_payload = in_msg_body~load_ref();     int forward_ton_amount = in_msg_body~load_coins();     cell forward_payload = in_msg_body~load_ref();     send_recieve(query_id, amount, to, from, JETTON_MINTER_CODE, JETTON_MINTER_DATA);    } А вот как отправляю(с помощью blueprint):  async sendJettons(provider: ContractProvider, via: Sender, query_id: bigint, value: bigint, to: Address, from: Address, amount: bigint) {         await provider.internal(via, {             value: value,             sendMode: SendMode.PAY_GAS_SEPARATELY,             body: beginCell()                     .storeUint(0,32)                     .storeUint(query_id,64)                     .storeRef(JettonWallet.transferMessage(amount, // jetton amount                                                             to,                                                              from, // response address                                                             beginCell().endCell(), // custom payload                                                             toNano('0.05'), // forward ton amount                                                             beginCell().endCell())) // forward payload                 .endCell(),         });     }

Konstantin: Так ты 2 раза читаешь op и query_id (reply to 289172)

SweetJesus: ну и так не нужно писать, всё-таки не константы тут у тебя) (reply to 289172)

X1ag: вы лучше скажите пожалуйста, правильно ли я обретку написал? (reply to 289172)

X1ag: кстати, я нашел ошибку. Дело в том, что в обертке я присылаю ref, а в контракте этот реф не паршу никак (reply to 289172)

X1ag: теперь другая ошибка: нет ошибки😁😁  оно просто не работает. Но и жетон не отправляется почему-то

X1ag: Подскажите пожалуйста, правильно ли я отправляю сообщение на жетон валлет? код выглядит вот так:    int op = in_msg_body~load_uint(32);   int query_id = in_msg_body~load_uint(64);   var (jwc, jmc, jmd) = load_data();   if (op == 0) { ;; recieve      slice ds = in_msg_body~load_ref().begin_parse();     int op_tranfer = ds~load_uint(32);     int query_id_old = ds~load_uint(64);     int amount = ds~load_coins();     slice to = ds~load_msg_addr();     slice from = ds~load_msg_addr();     cell custom_payload = ds~load_ref();     int forward_ton_amount = ds~load_coins();     cell forward_payload = ds~load_ref();     send_recieve(query_id, amount, to, from, jwc, jmd);    }  А функция send_recieve вот так:   () send_recieve(int query_id, int amount, slice to, slice from, cell code, cell data) impure {   var msg_body = begin_cell()                   .store_uint(op::internal_transfer, 32)                   .store_uint(query_id,64)                   .store_coins(amount)                   .store_slice(to)                   .store_slice(from)                   .store_uint(0, 1)                   .store_coins(((ONE_TON * 2) / 100))                   .store_uint(1, 1)                 .end_cell();    var msg = begin_cell()             .store_uint(0x10, 6)             .store_slice(calc_my_jetton_wallet(JETTON_MINTER_ADDR, code, data, to))             .store_coins(((ONE_TON * 5) / 100))             .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1 + 1)               .store_ref(msg_body)   .end_cell(); } (reply to 289179)

Oleg: https://t.me/tondev/289175 (reply to 289182)

X1ag: да, я два раза его читаю, потому что первый раз это опкод и query_id моего контракта, а второй раз это опкод и query_id, который суёт jetton_transfer:   static transferMessage(jetton_amount: bigint, to: Address,                            responseAddress:Address,                            customPayload: Cell,                            forward_ton_amount: bigint,                            forwardPayload: Cell) {         return beginCell().storeUint(0xf8a7ea5, 32).storeUint(0, 64) // op, queryId                           .storeCoins(jetton_amount).storeAddress(to)                           .storeAddress(responseAddress)                           .storeMaybeRef(customPayload)                           .storeCoins(forward_ton_amount)                           .storeMaybeRef(forwardPayload)                .endCell();     } (reply to 289183)

SweetJesus: ты какую-то хрень делаешь. у тебя задача какая? Просто токены отправить? Так шли трансфер сразу на жетон волет, зачем тебе для этого какой-то прокси контракт нужен? (reply to 289184)

X1ag: Потому что я хочу, чтобы он умел хранить эти токены у себя и в определенных случаях отправлять пользователю (reply to 289185)

X1ag: Контракту же нужно как-то отправить эти жетоны, чтобы он мог их использовать

SweetJesus: у тебя боди лежит в ссылке, а бит нулевой. (reply to 289182)

SweetJesus: шли здесь просто трансфер, на жетон волет своего контракта, он сам интернал трансфер пошлет куда надо и в конце бит нулевой поставь, потому что у тебя никакого форварда, а уж тем более в ссылке нету. (reply to 289182)

SweetJesus: И ради всего святого, не сокращай так переменные.  Не нужно привыкать к такому кодстайлу. (reply to 289182)

X1ag: Благодарю за рекомендации. У меня получилась такая функция: () send_recieve(int query_id, int amount, slice to, slice from, cell code, cell data) impure {   var msg_body = begin_cell()                   .store_uint(op::transfer, 32)                   .store_uint(query_id,64)                   .store_coins(amount)                   .store_slice(to)                   .store_slice(my_address())                   .store_uint(0, 1)                   .store_coins(((ONE_TON * 2) / 100))                   .store_uint(0, 1)                 .end_cell();    var msg = begin_cell()             .store_uint(0x10, 6)             .store_slice(calc_my_jetton_wallet(JETTON_MINTER_ADDR, code, data, my_address()))             .store_coins(((ONE_TON * 5) / 100))             .store_uint(1, 1 + 4 + 4 + 64 + 32 + 1 + 1)               .store_ref(msg_body)   .end_cell(); }  Верно ли я составил сообщение? (reply to 289190)

SweetJesus: ну уже лучше, только я не вижу где ты сообщение своё шлешь. (reply to 289192)

X1ag: чувствую себя нереально тупым. Я правда не вызывал send_raw_message 😁😁 (reply to 289193)

&rey: Ну ради славы, настройте уже IDE так, чтобы она давала в виде подсказки полное имя... ну, как минимум, при вызове функции. (reply to 289191)

X1ag: Спасибо большое за помощь, сообщение отправляет, но теперь он требует state_init. Я пытаюсь его передать вот так: cell state_init = build_stateinit(jetton_wallet_code);       deploy_with_stateinit(state_init); () deploy_with_stateinit(cell state_init) impure {   var msg = begin_cell()     .store_slice(begin_parse(begin_cell().end_cell()))     .store_uint(2 + 1, 2) ;; init:(Maybe (Either StateInit ^StateInit))     .store_uint(0, 1) ;; body:(Either X ^X)     .store_ref(state_init)     .end_cell();    ;; mode 64 - carry the remaining value in the new message   send_raw_message(msg, 64);  } (cell) build_stateinit(cell init_code) {   var state_init = begin_cell()     .store_uint(0, 1) ;; split_depth:(Maybe (## 5))     .store_uint(0, 1) ;; special:(Maybe TickTock)     .store_uint(1, 1) ;; (Maybe ^Cell)     .store_uint(1, 1) ;; (Maybe ^Cell)     .store_uint(0, 1) ;; (HashmapE 256 SimpleLib)     .store_ref(init_code)     .store_ref(begin_cell().end_cell())     .end_cell();   return state_init; } Мне кажется, что это не самое верное решение. Можете подсказать пожалуйста?  PS. Взял это решение из документации (reply to 289194)

TeleDev: Всем привет, подскажите, пожалуйста, какие данные хранить в базе? TON Connect for JS. Суть в том, что необходимо привязать к ЛК кошелек и не отвязывать его, пока юзер этого не захочет.

&rey: Кто требует state_init? Если жетон-кошелёк не задеплоен, то и жетонов у вас соответствующих нет (либо это инновационные mintless). (reply to 289197)

X1ag: Баунсит с такой причиной:  Compute Phase Skipped: true Skip Reason: cskip_no_state (reply to 289199)

#: скажите , что это значит?

X1ag: возможно битность нужно выше поставить (reply to 289201)

Tim: Только адрес юзера. Но сначала надо проверить что пруф правильный (reply to 289198)

#: int count = in_msg_body~load_uint(128); int to_return = (min_fee - 3000000) * count; (reply to 289202)

TeleDev: а как потом коннектить автоматически? (reply to 289203)

Tim: Можно еще ключ и адрес бриджа хранить чтобы ивенты с бека слать но лучше не стоит (reply to 289198)

Tim: Лучше никак (reply to 289206)

Tim: В кошельке может слететь  эта сессия и будете слать не пойми куда сообщения, а юзеры будут жаловаться

TeleDev: лучше чтобы каждый раз человек подключал кошелек? (reply to 289208)

Tim: Да. Ну не совсем каждый, обычно все таки в браузере есть кеш подключения (reply to 289210)

TeleDev: понял, спасибо! (reply to 289211)

X1ag: Подскажите пожалуйста, почему выдает ошибку. Когда отправляю сообщение на unboucable адрес jetton-wallet (uninit) он завершает цепочку транзакций с ошибкой cskip_no_state.  send_recieve(query_id, amount, to, from, jetton_minter_code, jetton_content);  () send_recieve(int query_id, int amount, slice to, slice from, cell code, cell data) impure {   var msg_body = begin_cell()                   .store_uint(op::transfer, 32)                   .store_uint(query_id,64)                   .store_coins(amount)                   .store_slice(to)                   .store_slice(my_address())                   .store_uint(0, 1)                   .store_coins(((ONE_TON * 2) / 100))                   .store_uint(0, 1)                 .end_cell();    var msg = begin_cell()             .store_uint(0x10, 6)             .store_slice(calc_my_jetton_wallet(JETTON_MINTER_ADDR, code, data))             .store_coins(((ONE_TON * 5) / 100))             .store_uint(1, 1 + 4 + 4 + 64 + 32 + 1 + 1)               .store_ref(msg_body)   .end_cell();    send_raw_message(msg, 0); }  В calc_my_jetton_wallet следующее: slice get_addr(slice owner_address, cell code, cell data, slice master_addr) inline_ref {     tuple c7 = get_c7();     c7 = c7.change_tuple(0,         c7.at(0).change_tuple(8, master_addr)                 .change_tuple(10, code)     );     return vm::invoke_get_addr(owner_address, c7, data, code); }  slice calc_my_jetton_wallet(slice master_addr, cell code, cell data) inline {     return get_addr(my_address(), code, data, master_addr); }  В чем может быть ошибка? https://testnet.tonviewer.com/transaction/76ecc4ea3749c8d4bcc0748defc7ee9fbeed8cdfcc2f7e044dc8e4ee3bdb1075

odnokasanie: Коллеги, можно ли относительно легко получить на фронтенде список жетонов в кошельке подключенного пользователя с обязательным условием, что владелец jetton master (admin_address) определенный адрес?  жетонов всяких в кошельке пользователя неограниченное количество.  жетонов подходящих под выборку тоже неограниченное количество.  выборку обязательно выполнять исходя из кошелька пользователя, т.е. вариант пройтись по всем jetton_master проекта - не вариант.  Список всех жетонов в кошельке /api/v3/jetton/wallets с фильтром по owner_address я получу. Но из них как лучше выбрать те, у которых владелец jetton_master определенный адрес? делать запрос /api/v3/jetton/masters с фильтром address и admin_access по каждому жетону? А если в кошельке 100+ жетонов, то данные будут собираться достаточно долго на фронтенде.  либо никак легко не получить, тогда на бэкэнде хранить?

Оскар: через graphQL дтона можно запросить это https://dton.io/graphql/#query=%7B%0A%20%20raw_account_states(parsed_jetton_admin_address_address__friendly%3A%20%220%3A4f56e5ade57c8cc8a173cbf9e85e9dc2fe5d714e309c866db9fb0ce6f76e6367%22)%7B%0A%20%20%20%20parsed_jetton_content_symbol_value%0A%20%20%20%20parsed_jetton_total_supply%0A%20%20%20%20%23%20and%20another%20%22parsed_jetton_%22%20fields%0A%20%20%7D%0A%7D (reply to 289214)

Victor: тестирую контракт в sandbox. отправляю external сообщение и оно должно упасть с exitCode 503, но почему-то expect его не ловит. Может кто-то сталкивался с такой проблемой ?

rends_east: оно должно упасть до accept_message или после? (reply to 289218)

Victor: до (reply to 289219)

rends_east: Такие ошибки не ловятся, если не хитрить, как вот в тестах воллета  https://github.com/ton-blockchain/wallet-contract-v5/blob/main/tests/wallet-v5-external.spec.ts#L593 (reply to 289220)

rends_east: (я просто скопипастил функцию disableConsoleError, работает)

Victor: Понял, спасибо большое (reply to 289221)

#: подскажите пожалуйста в чем проблема. не могу разобраться транзакция 57ff8027d2979437e8a55421cf3cd57a387fd40c40b9d1d5c2a74187983ea367

&rey: await tonConnectSdk.restoreConnection(); (reply to 289206)

IndexCorp: Посоветуйте хорошего провайдера

Victor: Там транзакция падает с ошибкой 5, что значит «Integer is out of expected range.» (reply to 289224)

#: cell dict_copy = deploy_list;             do {                 var (_, _, f?) = dict_copy~udict::delete_get_min(64);                 if (f?) {                     counter += 1;                     if (counter >= 250) { ;; Limit due to limits of action list size                         throw(399);                     }                 }             } until (~ f?);                           msg::return_funds(storage::controller_address, 45000000, op::error, counter, storage::owner_address);  () msg::return_funds(slice sender_address, int amount, int op, int count, slice receiver) impure inline {     var msg = begin_cell()         .store_uint(0x10, 6)         .store_slice(sender_address)          .store_coins(amount)         .store_uint(0, 107)         .store_uint(op, 32)         .store_coins(count)         .store_slice(receiver)     .end_cell();     send_raw_message(msg, 1); }  Скажите в чем проблема ? (reply to 289228)

Victor: Я в коде копаться не буду. Вообщем это значит, что какое-то число, которое ты кладешь в body больше чем должно быть. (reply to 289229)

Victor: Внимательно просмотри, что ты отправляешь и скорей всего найдешь ошибку

web-assist 🧀: Почему именно 107? (reply to 289229)

#: А как должно быть? (reply to 289234)

web-assist 🧀: просто интересно почему именно такое значение

SweetJesus: .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1 + 1) (reply to 289234)

#: Сумма битов (reply to 289236)

Dmitriy: https://docs.ton.org/v3/documentation/smart-contracts/message-management/sending-messages  вот тут можно посмотреть (reply to 289236)

Dmitriy: а вообще лучше использовать store_prefix_only_body из новой stdlib.fc  там много новых хелперов которые помогают не писать магических констант

web-assist 🧀: Аааа, понял первый раз просто вижу такую запись, через плюсики привычнее чтоли (reply to 289239)

&rey: Зря, не стоит менять словари — формирование новых ячеек очень дорогое. (reply to 289229)

#: Скажите по какой причине у меня 5 ошибка ? (reply to 289244)

&rey: У вас сработал throw(0xFFFFF);. (reply to 289245)

&rey: Но 0xFFFFF не поддерживается, и из-за этого неверного аргумента опкод THROWANY кинул ошибку с кодом 5.  Короче, либо не на тот контракт послали сообщение, либо собрали его неправильно.

#: Понял спасибо (reply to 289247)

— 2025-02-09 —

X1ag: Всем доброе утро, подскажите пожалуйста, почему вылетает ошибка cskip_no_state. Шлю вот такое сообщение () send_recieve(int query_id, int amount, slice to, slice from, cell code, cell data) impure {   var msg_body = begin_cell()                   .store_uint(op::transfer, 32)                   .store_uint(query_id,64)                   .store_coins(amount)                   .store_slice(to)                   .store_slice(my_address())                   .store_uint(0, 1)                   .store_coins(((ONE_TON * 2) / 100))                   .store_uint(0, 1)                 .end_cell();    var msg = begin_cell()             .store_uint(0x10, 6)             .store_slice(calc_user_wallet(my_address(), JETTON_MINTER_ADDR, code))             .store_coins(((ONE_TON * 5) / 100))             .store_uint(1, 1 + 4 + 4 + 64 + 32 + 1 + 1)               .store_ref(msg_body)   .end_cell();    send_raw_message(msg, 0); }  Заранее спасибо

X1ag: Разобрался. Нужно передавать такое сообщение:  var msg = begin_cell()             .store_uint(0x10, 6)             .store_slice(calc_user_wallet(my_address(), JETTON_MINTER_ADDR, code))             .store_coins(((ONE_TON * 5) / 100))             .store_statinit_ref_and_body_ref(calculate_jetton_wallet_state_init(my_address(), JETTON_MINTER_ADDR, code), msg_body)   .end_cell(); (reply to 289283)

Паша: Добрый день, а есть какой-нить пример как сгенерировать сигнатуру на фронте, для тон пруфа?

X1ag: кстати, кажись это неправильно, потому что, когда ты шлешь просто транфер он не ту логику делает и вызывает ошибку 706. На балансе жетон кошелька нет столько жетонов, сколько нужно для перевода  () send_tokens (slice in_msg_body, slice sender_address, int msg_value, int fwd_fee) impure {   int query_id = in_msg_body~load_uint(64);   int jetton_amount = in_msg_body~load_coins();   slice to_owner_address = in_msg_body~load_msg_addr();   force_chain(to_owner_address);   (int balance, slice owner_address, slice jetton_master_address, cell jetton_wallet_code) = load_data();   balance -= jetton_amount;    throw_unless(705, equal_slices(owner_address, sender_address));   throw_unless(706, balance >= 0); (reply to 289190)

&rey: А какая тогда логика должна быть? (reply to 289292)

X1ag: кидать internal_transfer  internal_transfer  query_id:uint64 amount:(VarUInteger 16) from:MsgAddress                      response_address:MsgAddress                      forward_ton_amount:(VarUInteger 16)                      forward_payload:(Either Cell ^Cell)                       = InternalMsgBody; (reply to 289293)

&rey: А вы сейчас, что ли, жетон-мастер пишете? internal_transfer так-то привилегированная операция "зачислить жетоны, которые уже были отправлены или заминчены". (reply to 289295)

X1ag: нет, я пишу контракт, который может принимать и отправлять определенные жетоны  но сначала нужно написать, чтобы он умел их принимать (reply to 289297)

&rey: А принимаются они сами, даже без согласия получателя. Вы только можете transfer notification обработать. (reply to 289298)

X1ag: я совсем запутался. Получается, что эта функция абсолютно бесполезна, потому что ей я как раз хочу принимать токен? () send_recieve(int query_id, int amount, slice to, slice from, cell code, cell data) impure {   var msg_body = begin_cell()                   .store_uint(op::transfer, 32)                   .store_uint(query_id,64)                   .store_coins(amount)                   .store_slice(my_address())                   .store_slice(to)                   .store_uint(0, 1)                   .store_coins(((ONE_TON * 2) / 100))                   .store_uint(0, 1)                 .end_cell();    var msg = begin_cell()             .store_uint(0x10, 6)             .store_slice(calc_user_wallet(my_address(), JETTON_MINTER_ADDR, code))             .store_coins(((ONE_TON * 5) / 100))             .store_statinit_ref_and_body_ref(calculate_jetton_wallet_state_init(my_address(), JETTON_MINTER_ADDR,code),msg_body)   .end_cell();    send_raw_message(msg, 0); } (reply to 289299)

X1ag: Получается, что входящую транзакцию мне вообще проверять не надо? Когда пользователь хочет занести токен (reply to 289300)

sd: Тогда контракт не будет знать сколько у него хранится и каких токенов, можно обрабатывать transfer notification или переносить управление балансами офчейн (всмысле на фронт или бэк) если это функционал админа или логика взаимодействия с юзером позволяет (reply to 289302)

sd: Но дефолтные переводы в кошельках (не все) (или все) не посылают или прикладывают недостаточно тон чтобы отправлялся transfer notification и этого хватило на выполнение хоть какой-то логики, так что посылать жетоны в контракт получится скорее всего ток со своего интерфейса с нужным количеством тон и другими настройками

X1ag: жесть какая-то, а что вы подразумеваете под "обработать transfer notification"? (reply to 289303)

X1ag: извините, возможно глупый вопрос, но я правда запутался в том, как мне это реализовать (reply to 289305)

&rey: Смотрите, как работает в тоне: цепочки сообщений идут от отправителя какого-то ордера/ассета через управляющие этим всем контракты, потом к получателю, и дальше тот может действовать.  В случае с получением жетона, вы получаете уведомление от вашего жетон-кошелька. Или не получаете. (reply to 289302)

sd: когда жетон волет уведомляет кошелек владельца (в данном случае - твой кастомный контракт) что он теперь управляет +таким-то количеством жетонов и может выполниться какая-то логика в контракте (если приложено достаточно тон и обработка этого уведомления прописана в контракте), но нужно проверять что уведомление пришло от конкретного адреса жетон волета, а не от рандома (кто угодно может составить и отправить сообщение transfer notification от своего имени) (reply to 289305)

sd: после Otherwise should do во втором пункте описано тело и поля уведомления которое жетон волет отправит получателю жетонов https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md#1-transfer (reply to 289305)

X1ag: спасибо за информацию, постараюсь разобраться

User<7823034805>: без подтверждения не верифнет (reply to 289314)

sd: а вериф подъедет только после ликвидности

Иван: лс отпишите (reply to 289314)

Matvei: Всем привет

Matvei: подскажите пожалуйста кто разбирается, начинаю делать мини апп при установке зависимотей вылезает 8 ошибок. Начинаю фиксить через аудит и на тебе сразу 166 и 3 критических. Делаю фикс еще раз и возвращается к 8 ошибкам. что это может быть, как исправить.

sd: Чат по миниаппам - @devs @devs_cis (мне кажется пора в био группы добавить), но в такой формулировке лучше сразу к чатгпт xd (reply to 289324)

Оскар: во первых это чат по тону во вторых вам вряд ли ктото поможет с вопросом "у меня какая-то ошибка что делать?" (reply to 289324)

Matvei: спасибо (reply to 289326)

Matvei: спасибо) А в чате по тону что обычно обсуждают ? (reply to 289327)

Дмитрий: подскажите, сколько бит в Int по стандарту в тон? 256 вроде?

X1ag: Получается, что мне нужно отправлять такую транзакцию на смартконтракт:   ======= (1) ========= beginCell().storeUint(0xf8a7ea5, 32).storeUint(123n, 64) // op, queryId                           .storeCoins(jetton_amount).storeAddress(to)                           .storeAddress(responseAddress)                           .storeMaybeRef(customPayload)                           .storeCoins(forward_ton_amount)                           .storeMaybeRef(forwardPayload)                .endCell();  Как я понимаю, то я должен отправить эту конструкцию на jetton wallet своего контракта. А потом проверять такой опкод?   ======== (2) ========   if (op == op::transfer_notification) {     int amount = in_msg_body~load_coins();     save_data(balance + amount, jetton_wallet_code, jetton_minter_code, jetton_content);   }  Но я столкнулся с тем, что не знаю как отправить (1) на адрес jetton wallet контракта. Подскажите пожалуйста, как это можно сделать с помощью blueprint? (reply to 289305)

Oleg: все инты внутри TVM знаковые 257 битные (reply to 289330)

#: if (~ storage::init?) { ;; one-time initialization         throw_unless(455, equal_slices_bits(storage::controller_address, sender_address));         int op = in_msg_body~load_uint(32);         cell deploy_list = in_msg_body~load_dict();         storage::owner_address = in_msg_body~load_msg_addr();                  save_data();          if (op == op::check_limit_tracker_sbt_batch_items) {             int counter = 0;             cell dict_copy = deploy_list;             do {                 var (_, _, f?) = dict_copy~udict::delete_get_min(64);                 if (f?) {                     counter += 1;                     if (counter >= 250) { ;; Limit due to limits of action list size                         throw(399);                     }                 }             } until (~ f?);              if (storage::current_nft_count + counter <= storage::max_limit_nft) {                 storage::current_nft_count += counter;                 save_data();                  msg::send_accept_mint_batch_sbt(storage::controller_address, 45000000, deploy_list, op::accept_mint_sbt_batch_items, counter);                 return ();             }             save_data();             msg::return_funds(storage::controller_address, 44000000, op::error, storage::owner_address, counter);              return ();         }                  return ();       }  Скажите пожалуйста, почему в msg::return_funds он не находит controller_address и выдает 5 ошибку ?

Saak: Привет всем,есть кто развернул свое мини приложение? у меня есть один короткий вопрос

Saak: сколько у тебя рпс, на данный момент?

Saak: запросов в секунду к серверу

Dawut: Привет, всем. Я хочу найти транзакцию делаю поиск по lt и hash. Но не понимаю какой хеш  мне нужен тут?   getTransaction(address: Address, lt: string, hash: string): Promise<null | {     address: bigint;     description: TransactionDescription;     endStatus: AccountStatus;     inMessage: undefined | Message;     lt: bigint;     now: number;     oldStatus: AccountStatus;     outMessages: Dictionary<number, Message>;     outMessagesCount: number;     prevTransactionHash: bigint;     prevTransactionLt: bigint;     stateUpdate: HashUpdate;     totalFees: CurrencyCollection; }>   HashUpdate.newHash или HashUpdate.oldHash?

🐍Yaroo🐍 ("⁧(": Всем привет, я сейчас на курсе степика Введение в TON блокчейн На 3.5 блоке, там в тестнете развертывание и насколько я понял для теста смартконтракта используют скан qr кода для совершения транзакции, я пробовал уже и тонкипер, и тонхаб, и сэндбокс пробовал с гитхаба нашел апк, не подскажете есть ли что то что будет работать? Просто не сканит qr

Dawut: Я вроде нашел что newHash надо но как с Buffer на стринг правильно менять ? (reply to 289360)

Тимур: Всем привет, как отправить транзакцию на этот контракт, такого типа:  {'validUntil': 1739115917, 'message': {'address': 'пример_адреса', 'amount': 196900000, 'payload': 'te6ccgEBAQEAJwAASgAAAAA1MCBUZWxlZ3JhbSBTdGFycyAKClJlZiNxeGRNam5XeDM'}} Я в курсе, что это для передачи это в TonConnect, но можно как-то без него через python библиотеки?

Frieren: Tonutils в примерах даже есть (reply to 289369)

Тимур: Да, я вот хочу его использовать, но не могу найти пример. Подскажите пожалуйста. (reply to 289370)

Frieren: Мне тут за ссылку харакири сделают (reply to 289371)

Frieren: А вроде можно  https://github.com/nessshon/tonutils/blob/main/examples/wallet/common/transfer_ton.py

Супер-Лёша: Ребята, всем здравствуйте! Я пытаюсь по документации TON запустить TON прокси, чтобы использовать TON сайты, а выдаёт какую-то ошибку. Подскажите пожалуйста, что не так?

X1ag: Через ссылку попробуйте (reply to 289363)

Андрей: Рекомендую посмотреть на tonutils-proxy (реализацию на go) (reply to 289379)

Супер-Лёша: вот это? (reply to 289381)

Андрей: Это клиентская часть, есть ещё revers-proxy для сайта (reply to 289382)

Супер-Лёша: ага, а если мне нужно подключиться к TON сайту (создавать своего мне не нужно, только наладить доступ к уже существующим)? (reply to 289383)

Супер-Лёша: при использовании GUI tonutils-proxy у меня не открываются сайты (reply to 289382)

Dmitry | backend4you.ton: Тогда реверс не надо (reply to 289384)

Супер-Лёша: да (reply to 289389)

Супер-Лёша: а что тогда делать?)

Супер-Лёша: ???

🐍Yaroo🐍 ("⁧(": Running getter method failed 11  при вызове метода client4.runMethod  полный код https://pastebin.com/KSgVqE9Y  отрывок  setInterval(async () => {         const latestBlock = await client4.getLastBlock();         const { exitCode, result } = await client4.runMethod(             latestBlock.last.seqno,             address,             "get_the_latest_sender"         );          if (exitCode !==0) {             console.log("Running getter method failed");             console.log(exitCode);             return;         }         if (result[0].type !== "slice") {             console.log("Uknown result type");             return;         }          let most_recent_sender = result[0].cell.beginParse().loadAddress();          if (             most_recent_sender &&             most_recent_sender.toString() !== recent_sender_archive?.toString()         ) {             console.log(                 "New recent sender found: " +                 most_recent_sender.toString({ testOnly: true })             );             recent_sender_archive = most_recent_sender;         }     }, 2000);

kalloc: А чего сейчас используют для получения цепочки внутренних сообщений? TonAPI через трейс достает все сообщения за один запрос, тонцентер не умеет?

kalloc: А для https://toncenter.com/api/v3/ SDK есть?

B.: Всем привет, можете пожалуйста подсказать, emit() логи через сколько удаляются?

odnokasanie: Коллеги,  помогите получить локально из репозитория с контрактами с помощью blueprint или других библиотек данные, которые выдаются о jetton master toncenter API /api/v3/jetton/masters:   { "jetton_wallet_code_hash": "1NWlashGOJqFASXgwJOkSnw5s/MuI2zS53Q2mmMLiBk=", "code_hash": "F6Yv8bFrQ2Ms28xwB514JINeJ9PEng7qB5maQFO4VWY=", }   пробую:    const f = provider.open(await F.fromInit());  console.log('F:', {   x: f.init?.code!!.hash().toString(),   y: f.init?.code!!.hash() });   toncenter выдаёт не HEX, не пойму, чтобы не блуждать в потомках - подскажите пжлст

🐼 Sild: Тонцентр очевидно отдает base64 (reply to 289415)

kalloc: А в Tolk что-то типа emit из Tact есть?

kalloc: почему они должны удаляться? (reply to 289408)

&rey: Хранение истории транзакций тона не гарантируется. (reply to 289422)

— 2025-02-10 —

Супер-Лёша: ? (reply to 289391)

X1ag: Всем добрый день(или утро), помогите пожалуйста, столкнулся с exit code 9, когда транзакция отправляется на jetton-wallet моего контракта. Скажите пожалуйста, правильно ли я отправляю сообщение? () send_transfer(int query_id, int amount, slice to, cell code, cell data) impure {   var msg_body = begin_cell()                   .store_uint(op::transfer, 32)                   .store_uint(query_id,64)                   .store_coins(amount)                   .store_slice(to)                   .store_slice(my_address())                   .store_ref(begin_cell().end_cell()) ;; мне кажется ошибка тут                   .store_coins(((ONE_TON * 2) / 100))                    .store_ref(begin_cell().end_cell()) ;; или тут                 .end_cell();    var msg = begin_cell()             .store_uint(0x10, 6)             .store_slice(calc_user_wallet(my_address(), JETTON_MINTER_ADDR, code))             .store_coins(((ONE_TON * 5) / 100))             .store_statinit_ref_and_body_ref(calculate_jetton_wallet_state_init(my_address(), JETTON_MINTER_ADDR,code),msg_body)   .end_cell();    send_raw_message(msg, 0); }  Вот TLB-схема трансфера:    transfer query_id:uint64 amount:(VarUInteger 16) destination:MsgAddress            response_destination:MsgAddress custom_payload:(Maybe ^Cell)            forward_ton_amount:(VarUInteger 16) forward_payload:(Either Cell ^Cell)            = InternalMsgBody;  Заранее спасибо

&rey: Maybe подразумевает бит, есть ли ячейка или нет. И да, пустая ячейка совершенно не эквивалентна её отсутствию. (reply to 289436)

X1ag: Спасибо, а как поставить пустую ячейку? (reply to 289437)

rends_east: .storeMaybeRef(null) (reply to 289438)

X1ag: Благодарю

rends_east: можно еще .storeUint(0, 1)  еще .storeBit(0) (reply to 289438)

X1ag: А вот сюда как прокинуть? Пустую ячейку? (reply to 289436)

X1ag: Собираю так, но все равно exit code 9 var msg_body = begin_cell()                   .store_uint(op::transfer, 32)                   .store_uint(query_id,64)                   .store_coins(amount)                   .store_slice(to)                   .store_slice(my_address())                   .store_uint(0, 1)                   .store_coins(((ONE_TON * 2) / 100))                   .store_ref(begin_cell().end_cell())                 .end_cell();    transfer query_id:uint64 amount:(VarUInteger 16) destination:MsgAddress            response_destination:MsgAddress custom_payload:(Maybe ^Cell)            forward_ton_amount:(VarUInteger 16) forward_payload:(Either Cell ^Cell)            = InternalMsgBody;  Что я делаю не так?

Василий: Either флага нет (reply to 289446)

X1ag: Вот так? var msg_body = begin_cell()                   .store_uint(op::transfer, 32)                   .store_uint(query_id,64)                   .store_coins(amount)                   .store_slice(to)                   .store_slice(my_address())                   .store_uint(0, 1)                   .store_coins(((ONE_TON * 2) / 100))                   .store_uint(1, 1)                   .store_ref(begin_cell().end_cell())                 .end_cell(); (reply to 289447)

Василий: Да. Только смысл посылать пустую клетку в ref'е не ясен. Если вам так надо, то ок, но можно с тем же успехом использовать Either: 0 и без последнего ref'а посылать. (reply to 289448)

X1ag: потому jetton wallet должен парсить это  throw_unless(error::malformed_forward_payload, slice_bits(in_msg_body) >= 1);   slice either_forward_payload = in_msg_body; (reply to 289449)

Василий: Ну так он как раз проверяет что есть Either бит. А далее слайс может быть и пустым (reply to 289450)

X1ag: var msg_body = begin_cell()                   .store_uint(op::transfer, 32)                   .store_uint(query_id,64)                   .store_coins(amount)                   .store_slice(to)                   .store_slice(my_address())                   .store_uint(0, 1)                   .store_coins(((ONE_TON * 2) / 100))                   .store_uint(0, 1)                 .end_cell(); вроде исправил, должно быть вот так? (reply to 289451)

&rey: лишнее (reply to 289452)

Василий: Последний реф вообще не нужен в этом случае. Флаг Either:0 означает что в payload пойдёт остаток слайса сообщения после него (reply to 289452)

X1ag: понял, спасибо!

Дмитрий: Всем привет. Немного не понимаю как дать интерфейс контракту. например контракту продажи

Дмитрий: Может кто-то помочь? Использую tact

Андрей: Нужно больше информации почему не открывается (какая ошибка, какое поведение) (reply to 289385)

Геннадий: Всем привет! Есть кошелек, который я разрабатываю. Задача в том, что нужно реализовать подключение кошелька к dApp-ам через считывание qr-кода. Похожим образом работает wallet connect. Проблема в том, что я не нашел нужного api. Ton предоставляет @tonconnect/sdk, но я там не нашел методов для работы с кошельком, только для dApp. Вопрос, с помощью чего можно подключиться к dApp со стороны кошелька?

&rey: Надо заглянуть на гитхаб tonconnect и реализовать методы для работы с мостом. Для упрощения можно скопировать код имеющегося кошелька. Для усложнения можно поднять свой мост. (reply to 289465)

X1ag: Все равно exit code 9, вот как принимаю транзакцию:  if (op == 0x2ff2) { ;; send     int amount = in_msg_body~load_coins();     throw_if(error::not_enough_jettons, balance < amount);     slice to_address = in_msg_body~load_msg_addr();     save_data(balance - amount,jetton_wallet_code,jetton_minter_code,jetton_content);     send_transfer(query_id,amount,to_address,jetton_minter_code,jetton_content);     }   Вот так отправляю сообщение на jetton wallet контракта:  () send_transfer(int query_id, int amount, slice to, cell code, cell data) impure {   var msg_body = begin_cell()                   .store_uint(op::transfer, 32)                   .store_uint(query_id,64)                   .store_coins(amount)                   .store_slice(to)                   .store_slice(my_address())                   .store_uint(0, 1)                   .store_coins(((ONE_TON * 2) / 100))                   .store_uint(0, 1)                 .end_cell();    var msg = begin_cell()             .store_uint(0x10, 6)             .store_slice(calc_user_wallet(my_address(), JETTON_MINTER_ADDR, code))             .store_coins(((ONE_TON * 5) / 100))             .store_statinit_ref_and_body_ref(calculate_jetton_wallet_state_init(my_address(), JETTON_MINTER_ADDR,code),msg_body)   .end_cell();    send_raw_message(msg, 0); }  А вот как через враппер отправляю транзакцию:  async sendJettonsToUser(provider: ContractProvider, via: Sender, value: bigint, to: Address, amount: bigint) {        await provider.internal(via, {            value: value,            sendMode: SendMode.PAY_GAS_SEPARATELY,            body: beginCell().storeUint(0x2ff2, 32).storeUint(123, 64).storeCoins(amount).storeAddress(to).endCell()     }) }  Скажите пожалуйста, что я делаю не так? (reply to 289454)

Victor: Не понятен вопрос. Что значит дать интерфейс контракту ? (reply to 289457)

Дмитрий: Ну изначально tonviewer не знает что это за контракт. Как ему подсказать это? Чтобы он понял как его отображать правильно (reply to 289471)

Max: Законтрибьютить в tonkeeper/tongo (reply to 289473)

Victor: А какой именно падает контракт ? Кинь ссылку на трейс (reply to 289467)

Дмитрий: Я уверен, что это по другому работает. Я хочу контракт создать и выдать ему уже существующий интерфейс  Например тот же контракт продажи на такте написать. Как мне выдать ему интерфейс nft_sale_getgems_v3? (reply to 289475)

X1ag: Держите, https://testnet.tonviewer.com/transaction/3256b5a8b405271e15b2e81e9dd6ada5d93bfbce20e10394baa7eca344fb2599  И retracer, https://retracer.ton.org/?tx=3256b5a8b405271e15b2e81e9dd6ada5d93bfbce20e10394baa7eca344fb2599 (reply to 289476)

&rey: Не писать свой контракт продажи, а применить гетгемовский. (reply to 289477)

Дмитрий: Ну есть потребность на такте его написать. Как выдать ему интерфейс?

SweetJesus: да не выдашь ты ему интерфейс. Есть контракты, интерфейсы которых проверяются по боку, есть также стандарты, которые проверяются исключительно по набору гет методов. Контракт продажи гетгемс это первый случай. (reply to 289480)

Дмитрий: Спасибо

Victor: Ща гляну (reply to 289478)

Victor: через 30 мин напишу (reply to 289467)

X1ag: Хорошо, спасибо (reply to 289484)

Victor: у тебя не хватает ячейки

X1ag: Получается, после этого, нужно добавить ячейку, верно? (reply to 289467)

Oleg: А почему вы девелопите методом гадания? (reply to 289487)

Геннадий: спасибо за ответ! А если у меня приложение на электрон + реакт и подключать мне нужно dApp, которые находятся в WebView (встроенный браузер, который предоставляет электрон) Нужно ли мне этим заниматься, создавать бэк для бриджа и добавлять свой кошелек в общий список? (reply to 289466)

X1ag: Потому что до этого, мне объяснили, что после store_uint(0,1) ничего не должно быть (reply to 289488)

X1ag: И я не гадаю, у меня есть тлб схема, но некоторых вещей, видимо не понимаю (reply to 289446)

Oleg: В вашей схеме могут быть флаги maybe и either, их надо правильно установить, в зависимости от надобностей вашей логики (reply to 289492)

X1ag: Я их установил как равные нулю, но видимо что то не так, от этого и приходится гадать 🫠 (reply to 289495)

Victor: Ты используешь стандартный Jetton_wallet ? (reply to 289496)

Victor: вот тут какая-то муть  store_statinit_ref_and_body_ref(calculate_jetton_wallet_state_init(my_address(), JETTON_MINTER_ADDR,code),msg_body)   .end_cell();

Victor: вместо этого просто сделай   .store_uint(1, 1 + 4 + 4 + 64 + 32 + 1 + 1)     .store_ref(message_body)

X1ag: Modern Jetton (reply to 289497)

X1ag: Передаю стейт инит, чтобы он не кидал cskip_no_state.   Хорошо, попробую, спасибо! (reply to 289498)

Svαtoωλ‎: а какую либу использовать для жс, что бы перевести тоны с одного коша на другой 👀 прост разнообразие библиотек +- такое же как и в питоне

Оскар: @ton/ton (reply to 289508)

Timur: .storeUint(123,64) это queryId как я понял  а где ты читаешь его в контракте?  if (op == 0x2ff2) { ;; send     int amount = in_msg_body~load_coins();     throw_if(error::not_enough_jettons, balance < amount);     slice to_address = in_msg_body~load_msg_addr();     save_data(balance - amount,jetton_wallet_code,jetton_minter_code,jetton_content);     send_transfer(query_id,amount,to_address,jetton_minter_code,jetton_content);     }  откуда тут query_id взял?  по логике ты должен до строчки  int amount = in_msg_body~load_coins() сделать  int query_id = in_msg_body~load_uint(64) (reply to 289467)

X1ag: Там выше есть, я читаю там опкод и квери (reply to 289513)

X1ag: Я не отправлял просто, потому что лишняя информация (reply to 289515)

Timur: Убери .storeUint(123,64) (reply to 289467)

Timur: я так понял query_id у тебя переменная в контракте и ты ее там берешь, тогда убери во враппере и поэтому ошибка вылетает

X1ag: Ну я же транзакцию отправляю с квери айди и принимаю квери айди тоже

Timur: можешь показать, где принимаешь, не вижу =) я просто вижу ты query_id кидаешь как аргумент в функцию send_transfer() (reply to 289519)

Jamal: Есть в данном чате RUST разработчики? Только с коммерческим опытом.

X1ag: () recv_internal(int my_balance, int msg_value, cell in_msg_full, slice in_msg_body) impure {  if (in_msg_body.slice_empty?()) { ;; ignore empty messages         return ();   }  slice cs = in_msg_full.begin_parse();  int flags = cs~load_uint(4);  if (flags & 1){   return ();  }  slice to_address = cs~load_msg_addr();  force_chain(to_address);   int op = in_msg_body~load_uint(32);  int query_id = in_msg_body~load_uint(64);  var (balance, jetton_wallet_code, jetton_minter_code, jetton_content) = load_data();  if (op == op::transfer_notification) {   int amount = in_msg_body~load_coins();   save_data(balance + amount, jetton_wallet_code, jetton_minter_code, jetton_content);  }   if (op == 0x2ff2) { ;; send   int amount = in_msg_body~load_coins();   throw_if(error::not_enough_jettons, balance < amount);   slice to_address = in_msg_body~load_msg_addr();   save_data(balance - amount,jetton_wallet_code,jetton_minter_code,jetton_content);   send_transfer(query_id,amount,to_address,jetton_minter_code,jetton_content);    }  } (reply to 289520)

Konstantin: Пишу несколько лет на Rust. Основной язык. (reply to 289522)

SweetJesus: а где ретурны, уважаемый? (reply to 289525)

M: Господа, есть ли какой то рабочий способ передачи query params в ТМАшку, чтобы они появлялись в финальном URL приложения в исходном состоянии, а не через tgWebAppStartParam ?   Например для UTM params мне приходится вручную вытаскивать параметры и передавать в аналитику, хотя это должно работать просто по ссылке

web-assist 🧀: вам в @devs_cis (reply to 289528)

Oleg: где ретурны, Лебовски?) (reply to 289527)

Victor: крч, я чет накосячил. @imx1ag воспользуйся готовым кодом и все будет тип топ  https://github.com/getgems-io/nft-contracts/blob/main/packages/contracts/sources/nft-fixprice-sale-v4r1.fc#L63 (reply to 289501)

Дмитрий: а разве вот это не выдача интерфейса? (reply to 289481)

Roma: Всем привет! Есть документация, либо репо с реализованным Geolocation Manager?

X1ag: странно, что они отправляют сообщение на адрес без calculate_jetton_wallet()  var msg = begin_cell()         .store_uint(0x10, 6) ;; nobounce         .store_slice(jetton_wallet)         .store_coins(should_carry_gas ? 0 : (40000000 + fwd_amount)) ;; 0.04 TON or zero         .store_uint(1, 1 + 4 + 4 + 64 + 32 + 1 + 1)         .store_ref(msg_payload)         .end_cell();  где жетон валлет это обычный адрес сендера   slice sender_address = cs~load_msg_addr(); ... send_jettons(sender_address, query_id, nft_owner_address, user_amount, buyer_address, 1); (reply to 289532)

SweetJesus: что значит выдача интерфейса. Здесь просто деплой контракта, а деплой это отправка кода и данных, вот если этот самый код не будет совпадать с эталонным, то никакого nft_sale_getgems ты не увидишь. (reply to 289534)

Дмитрий: ну это же не тонвивер сам проверяет что за контракт перед ним. Например вот котракт, который вообще не является жетоном, но я приписал ему этот интерфейс (reply to 289542)

SweetJesus: нфт и жетоны не проверяются на эталон кода, а проверяются по набору гет методов.  Контракты кошельков, хайлоадов всяких, контракты продаж - они проверяются на эталон скомпилированного кода. (reply to 289544)

SweetJesus: а почему это так - подумай  ответ вполне логичный. (reply to 289545)

X1ag: Использовал, но это чуть не то, они адрес сразу принимают как адрес jetton wallet'а, потому что transfer_notification обрабатывают. У меня чуть другая логика. Я должен отправить то кол-во жетонов, которое требует пользователь. Теперь отправляется, но жалуется cskip_no_state: https://retracer.ton.org/?tx=31dedf63f21aec9d1dcf812986ca69459db2301f7787c7da99eaf3dfd2ef732b  Отправляю такое сообщение:  () send_transfer(int query_id, int amount, slice to, cell code, cell data) impure {   var msg_body = begin_cell()                   .store_uint(op::transfer, 32)                   .store_uint(query_id,64)                   .store_coins(amount) ;; jetton amount                   .store_slice(to) ;; destination                   .store_slice(my_address()) ;; response destination                   .store_uint(0, 1) ;; custom_payload                   .store_coins(((ONE_TON * 2) / 100)) ;; forward ton amount                   .store_uint(0, 1) ;; forward payload                 .end_cell();    var msg = begin_cell()             .store_uint(0x10, 6)             .store_slice(calc_user_wallet(my_address(), JETTON_MINTER_ADDR, code))             .store_coins(((ONE_TON * 5) / 100))             .store_uint(1, 1 + 4 + 4 + 64 + 32 + 1 + 1)             .store_ref(msg_body)   .end_cell();    send_raw_message(msg, 0); } (reply to 289532)

Victor: в транзе нету ошибки. у тебя jetton_wallet не задеплоин (reply to 289547)

X1ag: а как его задеплоить? Отдельную транзу кидать со стейт инитом? Я думал он будет деплоится когда я это сообщение отправлю (reply to 289548)

SweetJesus: он сам деплоится как только ты кидаешь токены. посмотри как устроен жетон воллет, конкретно функция трансфера (reply to 289549)

Timur: .store_uint(1, 1 + 4 + 4 + 64 + 32 + 1 + 1 + 1) .store_ref(msg_body) .store_ref(state_init)  в state_init (жетон-кошелек) собираешь, как делал до этого на основе кода и данных (reply to 289549)

X1ag: я могу закинуть токены. Они принимаются контрактом https://testnet.tonviewer.com/transaction/bf9c812180960e06a12660038109019de3bd76af6856d235079ba7716038d2f9 (reply to 289550)

Victor: https://github.com/romanovichim/TonFunClessons_ru/blob/main/lessons/smartcontract/9lesson/ninthlesson.md (reply to 289552)

Beybut: Заметил недавно такую проблему: если указать опкод не явно "deposit"c, вместо 0x95db9d39 - константа будет хранить что-то другое (пока что не изучил что именно там хранится), но никак не 0x95db9d39  Кто сталкивался с такой проблемой и как вы это решали?

Оскар: буквально только что проверил - верное значение (reply to 289556)

Оскар: если что 2514197817 это тоже самое что и 0x95DB9D39

Beybut: А у меня почему-то нет :\ (reply to 289557)

Beybut: У меня if statement возвращает false (reply to 289558)

Beybut: Но если явно обозначить опкод - то все работает

Sergey: Привет, разбираюсь с задачкой 2022 года  хочу запустить ее локально  https://github.com/ton-blockchain/hack-challenge-1/blob/master/2.%20bank/bank.func  но не получается, при udict_delete_get и udict_set_builder выдает ошибку с недополнением (9)  я инициализировал initData при деплое как пустую ячейку, но подозреваю, что так нельзя, нужен пустой словарь, но я не понимаю, какие типы подбирать для этого словаря  если кратко в хранилище только словарь   cell accounts = get_data(); ключ bigint 256 бит, правильно?  (int wc, int sender) = parse_std_addr(sender_address); (_, slice old_balance_slice, int found?) = accounts.udict_delete_get?(256, sender); а какое value делать?  accounts~udict_set_builder(256, sender, begin_cell().store_coins(balance));  делал так, тоже не работает  const emptyDict = Dictionary.empty<bigint, Slice>(); пробовал так const userBalances = Dictionary.empty<bigint, bigint>(Dictionary.Keys.BigUint(256), value);      const value = {         serialize: (src: bigint, buidler: Builder) => {             buidler.storeCoins(src);         },         parse: (src: Slice) => {             return src.loadCoins();         },     };  есть идеи как еще можно завести?

Оскар: ну тогда надо изучить что там хранится, для этого есть функция ~dump() ~dump(op::deposit); в тестах выплюнет что хранит (reply to 289559)

Beybut: А вы используете extension для JetBrains? У меня есть подозрение, что подсказка неправильно конвертит опкод (reply to 289557)

Оскар: нет, я просто прогнал тест с дампом значения (reply to 289564)

Beybut: Изучу, спасибо. Кажись у extension'а есть багуля. С тестами у меня тоже все ок (reply to 289565)

Максим: Всем привет!  crypto.fif и stdlib.fif  подскажите пожалуйста где можно найти эти файлы по тону (На гите смотрел)  Не могу создать тестовые ключи, чтоб выпустить токен

kalloc: С этой точки зрения да (reply to 289423)

Victor: https://toncenter.com/ (reply to 289586)

. .: Всем привет! Помогите плс с хуком, в чем проблема не могу уже 2 дня понять                                                                                                                                                                                                       import { checkTransactionStatus, convertHexToBase64url } from "../utils/ton.js";  export default async function handler(req, res) {   console.log("Входящий запрос:", req.method);    if (req.method !== "POST") {     console.warn("ОШИБКА: Метод не POST");     return res.status(405).json({ error: "Method not allowed" });   }    try {     console.log("Вебхук получен, тело запроса:", JSON.stringify(req.body));      if (!req.body  Object.keys(req.body).length === 0) {       console.error("Ошибка: пустое тело запроса!");       return res.status(400).json({ error: "Empty request body" });     }      const { tx_hash, account_id } = req.body;      if (!tx_hash  !account_id) {       console.error("Ошибка: Неверный вебхук payload", JSON.stringify(req.body));       return res.status(400).json({         error: "Invalid request body: missing tx_hash or account_id",       });     }      // Конвертируем account_id из HEX в Base64url один раз     const accountBase64 = convertHexToBase64url(account_id);      console.log("Проверяем транзакцию в TON API:", { tx_hash, accountBase64 });      const authHeader = req.headers.authorization  `Bearer ${process.env.TON_API_KEY}`;     if (!authHeader  !authHeader.startsWith("Bearer ")) {       console.error("Ошибка: Отсутствует API-ключ TON API!");       return res.status(401).json({ error: "Missing TON API key" });     }      let status;     try {       status = await checkTransactionStatus(tx_hash, accountBase64, authHeader);     } catch (apiError) {       console.error("Ошибка проверки транзакции:", apiError);       return res.status(500).json({ error: "TON API error", details: apiError.message });     }      console.log("Транзакция проверена:", { status, tx_hash });      return res.status(200).json({       status,       transaction: tx_hash,       account: account_id,     });   } catch (error) {     console.error("Ошибка сервера:", {       message: error.message,       stack: error.stack,       body: JSON.stringify(req.body),     });      return res.status(500).json({       error: "Internal server error",       details: error.message,     });   } }

Danil: Какая ошибка выходит ? (reply to 289599)

Danil: И что по логам

. .: вот что происходит   🚀 Входящий запрос: POST 🔔 Вебхук получен, тело запроса: {"event_type":"account_tx","account_id":"0:add4bfa3b10899fe5a53f8f5585705156feac70ee25df9b08de867596cbd7fab","lt":53812960000003,"tx_hash":"6ddd3abd23caacc8186c075a9e69a942a206caaf532f90f6e0cca5b52029609d"} ✅ Конвертирован account_id: add4bfa3b10899fe5a53f8f5585705156feac70ee25df9b08de867596cbd7fab → rdS_o7EImf5aU_j1WFcFFW_qxw7iXfmwjehnWWy9f6s 🔍 Проверяем транзакцию в TON API: {   tx_hash: '6ddd3abd23caacc8186c075a9e69a942a206caaf532f90f6e0cca5b52029609d',   accountBase64: 'rdS_o7EImf5aU_j1WFcFFW_qxw7iXfmwjehnWWy9f6s' } 🔍 Отправляем запрос в TON API: {   txHash: '6ddd3abd23caacc8186c075a9e69a942a206caaf532f90f6e0cca5b52029609d',   accountBase64: 'rdS_o7EImf5aU_j1WFcFFW_qxw7iXfmwjehnWWy9f6s' } ❌ Ошибка TON API: 401 - {"message":"illegal base32 data at input byte 2","status_code":401} ❌ Ошибка запроса к TON API: TON API error: 401 - {"message":"illegal base32 data at input byte 2","status_code":401} ❌ Ошибка проверки транзакции: Error: TON API error: 401 - {"message":"illegal base32 data at input byte 2","status_code":401}     at checkTransactionStatus (file:///var/task/utils/ton.js:48:13)     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)     at async handler (file:///var/task/api/webhook.js:41:16)     at async Server.<anonymous> (/opt/rust/nodejs.js:2:11025)     at async Server.<anonymous> (/opt/rust/nodejs.js:16:5674) (reply to 289601)

Danil: вы отправляете base64 а ожидается base32

. .: щас попробую

. .: спасибо

Farel: при свапе получаю такое с чем может быть связано?

Farel: тона не хватает?

rends_east: А какая ошибка? (reply to 289606)

Denis: Да (reply to 289608)

Denis: Посмотрите сколько пытались прикрепить и сколько end balance

. .: ребят есть готовые решения вебхуков для тонапи в гите?

Alexey Toropov: Добрый вечер! В TON Society’s CIS планируем проведение контеста по написанию образовательных материалов направленных на разработчиков.  Можно попросить вас ответить реплаем на данное сообщение темы для образовательных материалов, которые были бы для вас актуальны, так скажем «наболевшее»?  Заранее благодарю

Denis: Мета вопросы не очень полезны. В https://t.me/tonapitech можно спросить конкретнее вопросы по хукам. (reply to 289617)

Bohdan: помогите пожалуйста, перестало деплоить контракт на тестнет, выдает ошибку:  [TON_CONNECT_SDK] Wallet message received: {   error: { code: 0, message: 'java.lang.NullPointerException' },   id: 10 } UnknownError: [TON_CONNECT_SDK_ERROR] UnknownError java.lang.NullPointerException     at SendTransactionParser.parseAndThrowError (/Users/ttt/test-contract/node_modules/@tonconnect/sdk/src/parsers/send-transaction-parser.ts:38:15)     at TonConnect.<anonymous> (/Users/ttt/test-contract/node_modules/@tonconnect/sdk/src/ton-connect.ts:254:42)     at Generator.next (<anonymous>)     at fulfilled (/Users/ttt/test-contract/node_modules/node_modules/tslib/tslib.es6.js:71:58)

Bohdan: раньше все проходило

— 2025-02-11 —

X1ag: что с testnet tonviewer? 9-й час уже так, транзакции не грузит

Bohdan: У меня даже задеплоить контракт не получается (reply to 289638)

X1ag: через что деплоишь?

Bohdan: Blueprint

X1ag: странно, у меня задеплоилось все только что

Andrey: смотрите через test-explorer.toncoin.org tonviewer в тестнете похоже прилег отдохнуть

Bohdan: Надо буде ещё раз перепроверить

X1ag: походу и блупринт из-за этого тоже   Error: Contract was not deployed. Check your wallet's transactions     at NetworkProviderImpl.waitForDeploy (/home/x1ag/Projects/FuncLearning/jettontester/JettonTester/node_modules/@ton/blueprint/dist/network/createNetworkProvider.js:158:15)     at async Object.run (/home/x1ag/Projects/FuncLearning/jettontester/JettonTester/scripts/deployJettonTester.ts:20:5)     at async run (/home/x1ag/Projects/FuncLearning/jettontester/JettonTester/node_modules/@ton/blueprint/dist/cli/run.js:25:5)     at async main (/home/x1ag/Projects/FuncLearning/jettontester/JettonTester/node_modules/@ton/blueprint/dist/cli/cli.js:91:5) (reply to 289643)

Bohdan: Походу сам тестнет висит. Тогда все равно какой експлорер

Andrey: тестнет работает нормально, https://test-explorer.toncoin.org работает (reply to 289646)

Jzuss ┌( ಠ_ಠ)┘: Сомневаюсь. Финализация видимо никак не проходит. Транзакции проходят, а состояние не обновляется (reply to 289647)

PR: Привет, дайте ссылку на официальный сайт, где говорится что за хранение NFT в блокчейне нужно платить постоянно иначе их удалят из блокчейна

&rey: В тоне "транзакции проходят, а состояние не обновляется" не имеет смысла, ведь и то, и другое происходит с выпуском нового мастерчейн-блока. А они выпускаются, вот в **:45:57 был с номером 28025448. (reply to 289649)

Andrey: блокчейн работает стабильно, транзакции проходят.  Если бы "финализация не проходила" то новые мастерчейн блоки бы не генерировались (reply to 289649)

Andrey: если некоторые экплореры не работают это не значит что блокчейн умер, смотрите в https://test-explorer.toncoin.org там все отображается

&rey: Эту? https://docs.ton.org/v3/documentation/faq#can-smart-contract-be-deleted. (reply to 289650)

PR: Наверное это (reply to 289656)

X1ag: а есть что-то попроще?) Тут транзакции тяжело искать (reply to 289647)

Andrey: попроще tonviewer который не работает сейчас в тестнете (reply to 289658)

Artem: у меня нормально отображается в testnet tonscan org

GUBER: Привет! На тоне есть инструменты типа bubblemaps.io?  На других сетях используют для аналитики саплая монеты и нахождения связанных кошельков перед покупкой монеты

X1ag: у меня нет, не отображает новые транзакции (reply to 289662)

Denis: почининили тестнет тонвьювер (reply to 289668)

X1ag: Вижу, спасибо, подскажите, а в чем была ошибка? Интересно (reply to 289669)

Denis: Я ещё кофе не выпил чтоб самому понять  UPD: ошибка в конфигурации постгреса (reply to 289670)

Daniil: Всем привет. Подскажите, когда у ДеДаста мы запрашиваем quote  pool = await Factory.get_pool(pool_type=PoolType.VOLATILE, assets=[TOKEN_IN, TOKEN_OUT], provider=provider)  token_out_amount_with_decimals = await pool.get_estimated_swap_out(asset_in=TOKEN_IN,                                                                        amount_in=token_in_amount_with_decimals,                                                                        provider=provider) token_out_amount_in_normal_balance = token_out_amount_with_decimals['amount_out'] / 10 ** token_out_decimals  он считает по пути прямого обмена двух токенов, без переходных посередине?

Оскар: да (reply to 289675)

Паша: Добрый день, подскажите, wallet state init и state init это же разное? и если да, то как мне сгенерировать wallet state init?

Алексей: Это нормально, что ретрейсер не хочет показывать настоящую транакцию и падает с ошибкой? https://retracer.ton.org/?tx=7240900bfb8617a58f8de0f09a4ee3ca89506e3adb8e3848bd1a03c2b256c135&testnet=true

Denis: https://t.me/tondev_news/185 интересно. а это нормально три разных синтаксически способа инкрементить переменную?

Denis: кстати довольно странная ошибка. я передал тому кто делает ретрейсер (reply to 289697)

&rey: Почему нет?  *v += 1; v.add_assign(1); AddAssign::add_assign(v, 1);

Denis: не одобряю раст как раз за это (reply to 289701)

Denis: ну и еще ряд других причин

&rey: *v += 1; v->operator+=(1); operator+=(*v, 1); и что, переходить на Go? (reply to 289705)

Dmitry | backend4you.ton: нет конечно, каждый мышке свой кактус )

Denis: Там тоже три способа наберется. Не одобряю я это (reply to 289707)

Oleg: Лишь чистый С пророк, остальные - лжепророки) (reply to 289711)

Denis: Скинул бы мемчик но админ ругается когда я таким занимаюсь (reply to 289715)

Denis: Заказ на разработку дрейнера. Как же это прекрасно (reply to 289723)

Buyseller: Гайс, кто нибудь знает какой нибудь маркет готовых миниаппов?

Serdar: А такой вообще есть? (reply to 289729)

Buyseller: Ну мало ли (reply to 289730)

Nikita: привет что делает команда AllOnes в fift? не могу ничего найти про нее в документации, но она мелькает в gen-zerostate.fif

Serdar: Если найдешь кинь пожалуйста сюда интересно будет чекнуть (reply to 289731)

Buyseller: Кто нибудь делает свою миниапп игру? Пвп или пве? Отпишитесь в лс

Oleg: судя по коду, это константа, инт со всеми битами установленными в 1 (reply to 289732)

🏆: как получить авторизационные данные после авторизации через tonconnect на сервере? или так делать не надо? допустим какой-то раздел для авторизованных только, либо только для определённой группы, как понять, что это данный пользователь?

Mirka: https://docs.ton.org/v3/guidelines/ton-connect/guidelines/verifying-signed-in-users (reply to 289755)

Zhenya: Я что-то не понимаю, или testnet местами не работает? Неудачный update?

Victor: С тестнетом все норм. Тут проблема у команды tonkeeper (reply to 289757)

Zhenya: Эх... 😔

Denis: Утром пофиксили. Сейчас вроде ок (reply to 289758)

Kirill: Всем привет. Хотел спросить, а как получать все транзакции, при большом их количестве? Например, такая ситуация, за раз я могу получить 100 транзакций, параметром до какого lt я хочу их получить. Но вот что делать если в одно lt успело пройти их пару штук (или их за этот промежуток было больше чем 100 ), то тогда какая то транзакция потеряется. Возможно есть вариант еще как то по хешу, но чет я не понимаю как, у меня  есть только параметр from_hash. Поделитесь, пожалуйста, опытом, как лучше все это провернуть

Zhenya: Tonkeeper не реагирует на запросы blueprint... (reply to 289761)

Kirill: Попробуйте выключить vpn или наоборот включить

Kirill: Ну и как вариант, папку connections или tonconnect (точно не помню как нызывается) удалить и после этого заново подключить

🏆: sendtransaction как отправить jetton на указанный адрес? например usdt  такое нашел:  const NETWORK = "testnet"; const api = await createApi(NETWORK); const provider = new TonConnectUI(); // OR you can use tonConnectUI as a provider from @tonconnect/ui-react  // https://github.com/ton-community/assets-sdk/blob/main/examples/use-tonconnect.ts const sender = new TonConnectSender(provider);  const storage: PinataStorageParams = {   pinataApiKey: process.env.PINATA_API_KEY!,   pinataSecretKey: process.env.PINATA_SECRET!, };  const sdk = AssetsSDK.create({   api,   storage,   sender, });  const jetton = sdk.openJettonWallet(Address.parse("JETTON_ADDRESS"));  const forwardPayload = beginCell()         .storeUint(0, 32) // 0 opcode means we have a comment         .storeStringTail('Hello, TON!')         .endCell();  jetton.send(sender, RECEIVER_ADDRESS, toNano(10), { notify: { payload: forwardPayload } });

Vladimir: https://docs.ton.org/v3/guidelines/ton-connect/guidelines/preparing-messages#jetton-transfer (reply to 289766)

Dmitry | backend4you.ton: вы уверены что так может быть? (reply to 289762)

Kirill: Не уверен

🏆: tonconnect transaction, если переводить на кошелек, на котором есть домен, он будет отображаться или только сам адрес? понимаю, что зависит от кошелька, но в среднем по больнице

Zhenya: ton4j не работает? lite server timeout... почему?

Anton: всем ку ребят, кто юзает pytoniq/tonpy: не сталкивались с тем, что бок не парсит ? например этот  te6ccgEBAgEAZwABoV_MPRQqksX87tS45YACsCbEc1tiu6s78hjIPz36Yln9cMyeQx6YfL-dOyvNgPADljQaFrI6QoFw0vvn6GDdbt-oJC3g0GXBhos-vS2qg5AgOAEAIgAAAABSZWYjMjVmeTVhN2Zs  @ton/core с этим справляется

web-assist 🧀: Маловато информации чтобы понять причину ошибки (reply to 289778)

Anton: ну есть boc Cell.one_from_boc(boc) падает BocError: Not enough bytes for cells data (reply to 289779)

web-assist 🧀: Я бы для начала вывел в консольку boc и убедился что он там есть и вместо one_from_boc использовал from_boc (reply to 289780)

Anton: там это где ?) boc = ‘te6ccgEBAgEAZwABoV_MPRQqksX87tS45YACsCbEc1tiu6s78hjIPz36Yln9cMyeQx6YfL-dOyvNgPADljQaFrI6QoFw0vvn6GDdbt-oJC3g0GXBhos-vS2qg5AgOAEAIgAAAABSZWYjMjVmeTVhN2Zs’ Cell.one_from_boc(boc) (reply to 289781)

Anton: это тоже самое в данном случае (reply to 289781)

web-assist 🧀: Вот тут то я не вижу откуда этот boc берется, поэтому советую убедиться если бы это было то же самое, оно бы так и называлось (reply to 289780)

web-assist 🧀: А что конкретно лежит в ячейке вы знаете?

Anton: да и @ton/core парсит а boc равен ‘te6ccgEBAgEAZwABoV_MPRQqksX87tS45YACsCbEc1tiu6s78hjIPz36Yln9cMyeQx6YfL-dOyvNgPADljQaFrI6QoFw0vvn6GDdbt-oJC3g0GXBhos-vS2qg5AgOAEAIgAAAABSZWYjMjVmeTVhN2Zs’ (reply to 289785)

Алексей: законвертил этот бейс64 в хекс и распарсилось, подозреваю, что проблема в алфавите бейс64 (reply to 289778)

Anton: pytoniq ? (reply to 289787)

Anton: хм

Anton: Cell.one_from_boc(base64.urlsafe_b64decode(some_boc))  вот так (и .hex() тоже)  сработало. спс (reply to 289787)

— 2025-02-12 —

Астроном: Доброй ночи, кто может написать скрипт по парсу адресов по некоторым критериям и внедрить в софт?

Dafk: Цена вопроса сделаю! (reply to 289795)

Sol: Здравствуйте. Готов взяться (reply to 289795)

Spartan.by: Друзья, подскажите пожалуйста кто знает, а кроме @ton_help_bot есть вообще какая то техническая поддержка где реально хотя бы за какой то период времени, например месяц, получить ответ?

3ton: кто нить делал DAO смарт контракты голосований ?

Семен: Я сейчас делаю на такте голосование жетонами supadupadao/skipper репа на гитхабе. боюсь что забанят за ссылку) (reply to 289805)

Danya: Dm (reply to 289810)

Dmitry | backend4you.ton: кто тут глубоко знаком с tvm.pdf ?  в 3.1.4 Standard cell representation сказано что хэш ячейки это 2+b/8+32r байт (два байта дескрипторов, дата-биты, хэши реф-ячеек).  однако во всех SDK-либах перед 32r сначала кладется 2r - значения depth всех реф-ячеек. А это почему? Где это описано в pdf-ках?

GUBER: Привет (reply to 289810)

Андрей: @toncore_support (reply to 289804)

Oleg: Всем привет, кто-нибудь деплоил стейбл коин отсюда https://github.com/ton-blockchain/stablecoin-contract ? У вас получилось? Пытаюсь задеплоить в тестнет и кошелек не хочет подписывать транзакцию, просто не отображает её. В чем может быть проблема? Или может подскажете где взять в тестнете жетоны с кодом кошельков как у Tether USDT?

Volodya: А нужен именно usdt? Там нет возможности менять админа насколько помню (reply to 289827)

Oleg: Нужен код кошелька как у USDT, там есть отличия от обычных жетонов (reply to 289828)

Volodya: https://github.com/OpenBuilders/notcoin-contract (reply to 289829)

Volodya: Тогда вот этот подойдет, скрипты должны работать норм (reply to 289830)

Konstantin: Не помню как в pdf, но вот здесь правильно описано вычисление хэша, я проверял https://docs.ton.org/v3/documentation/data-formats/tlb/cell-boc#cell-hash (reply to 289820)

&rey: Знаком, документ outdated самую малость. (reply to 289820)

Oleg: спасибо, сейчас отсмотрю (reply to 289831)

Dmitriy: Всем привет. Второй день читаю документацию, общаюсь с ChatGPT и кошкой.   Прошу помочь и развеять сомнения (и/или направить в нужную сторону)  Итак, есть TMA, в рамках TMA необходимо сделать дроп токенов, но не по стандартной схеме: сразу все, а делать это по частям  То есть условно сначала распределяется 5% саплая определенным адресам, потом при определенных внешних условиях еще 10%, затем какое-то конкретное количество третьим адресам и так далее и тому подобное  Важно - обязательно жетоны должны появится в TON кошельках без лишних движений (или с минимальными со стороны пользователей)  1) Если брать схему с mintable Jetton то распределение токенов будет очень затратным. Условно (все цифры примерные) если мы хотим распределить первую партию по 3000 адресам это 0.08*3000 = 240 ton. Понятно что оценка грубая, но при росте количества адресов до 1 млн затраты становятся просто колоссальными  2) Если брать схему с mintless jetton, то как я понимаю, невозможно делать эмиссию частями, то есть необходимо сразу весь супплай распределить  3) Вариант с пакетными транзакциями вроде как решает вопрос, но тут сложная реализация с точки зрения смарт контракта и пока я не могу посчитать насколько он выгоднее (видимо, не хватает знаний)  Из рабочих вариантов еще использование merkle tree, но как не читал - непонятно как кошельки сторонние это поддерживают, нужно ли к ним обращаться за поддержкой жетона  Не могли бы вы подсказать куда бежать и как лучше делать такое распределение жетонов без того, чтобы тратить тысячи и десятки тысяч $$$ на комиссии?

&rey: Платёжные каналы. Односторонние, незакрываемые.  Я в англ. чате вроде рассказывал в деталях, как это делается, но слов выше должно хватить. (reply to 289838)

Dmitriy: А можете на английском написать? Payment channels? Я поищу в том канале (reply to 289839)

Dmitriy: В общих чертах понятно +/-, но остается вопрос... а как это все поддерживается кошельками? Нужна ли какая-то экстра поддержка? (reply to 289840)

&rey: Жетон-кошелёк нужен специальный, или контракт-раздатчик, это да. А интерфейсом к этим виртуальным жетонам будет ваш dApp. (reply to 289852)

rends_east: можно, если в меркл дереве записать время, когда минт может быть совершен это даже можно оставить неизвестным для пользователя, но заранее должно быть известно вам (reply to 289838)

Dmitriy: Хорошо, но вот суть задачи в том чтобы созданный жетон появился в том же условном тонкипере без лишних телодвижений. Тогда такой вариант не подходит...   И вот тут я бы бы благодарен за ответы, если кто знает: 1) при использовании mintless jetton processing нужно ли распределять весь supply сразу или можно по частям? 2) Можно ли при использовании Merkle Tree делать несколько итераций? 3) Для пунктов 1 и 2 будут ли кошельки поддерживать такие жетоны "из коробки" (reply to 289853)

Dmitriy: То есть условно крайний срок минта? (reply to 289854)

rends_east: также можно сделать jetton wallet, к которому можно обратиться по вашей подписи (он будет хранить публичный ключ) и сминтить себе жеттоны  это будет хорошим компромиссом между децентрализацией и централизованностью минта токенов, которая вам нужна (reply to 289838)

rends_east: наоборот, "до этого времени нельзя минтить" хотя можно и крайний срок как угодно можно (reply to 289856)

Dmitriy: Тут у нас в чем проблема. Есть роадмап с целями.   Например - продали NFT на 100к - 10% сапплая распределено В коммьюнити стало 1.5 млн - еще % сапплая  То есть если я правильно вас понял, то мы как бы обновляем контракт при достижении цели и говорим - дорогие господа - гоу минтить? (reply to 289858)

rends_east: нет, не обновляете, вы изначально в merkle дерево кладете будущие минты (reply to 289859)

Dmitriy: Мы не знаем сейчас все адреса на которые может быть распределение токенов, их прибавляется (reply to 289860)

rends_east: значит вот этот вариант для вас и тона оптимальный (reply to 289857)

Dmitriy: А вот это интересная мысль - если я правильно понял, некий смарт контракт который при обращении пользователя выдает нужное количество токенов? (reply to 289857)

rends_east: не некий, а жеттон воллет пользователя как в минтлесс жеттоне (reply to 289863)

Dmitriy: Простите, не очень пока с терминологией

&rey: Э... а ничего, что я почти это и предлагал? Ну и да, в тонкипере видеть это никто не будет, потому что тонкипер не обязан вам проверять — обеспечиваете вы минт жетона, нет, ...

rends_east: сори, не читал твоих сообщений выше) (reply to 289866)

&rey: За такие фокусы вместо "откроем новые функции проекта" я, пожалуй, откланяюсь. Думайте сами. (reply to 289859)

Dmitriy: А где здесь фокусы? Общий supply не меняется, роадмап зафиксирован... (reply to 289868)

Dmitriy: Просто мотивация коммьюнити на участие

Dmitriy: Если здесь есть какой-то косяк в логике - прошу указать, может и не надо так делать и идея мертворожденная

Dmitriy: А можете еще пояснить с точки зрения пользователя как выглядит минт? (reply to 289864)

Оскар: если неизвестно заранее кому и сколько упадет, то выше сказали вариант с платежным каналами, либо, как хороший вариант, смарт-контракт для клейма, где каждый юзер оплатит сам комиссию за трансфер, работает через пруф меркла, для каждого этапа распределения свой контракт, есть уже готовый https://github.com/Gusarich/airdrop  остается только написать простейший дапп, через который юзеры будут клеймить и в целом все

rends_east: ты советуешь центральный контракт какой то для клейма, я бы вообще проектам такое не советовал (reply to 289876)

Оскар: так а в чем проблема (reply to 289877)

rends_east: мы в тоне вроде как уже все решили, что центральных контрактов для клейма лучше избегать (reply to 289878)

Оскар: ? (reply to 289879)

Оскар: я сомневаюсь что будет какая то проблема для одноразового контракта клейма

Оскар: это не стонфи роутер-одиночка через который вся и все по несколько раз проходит

Оскар: не ну если конечно сильно нужно, то ничего не мешает шардировать дерево и соответственно контракт

rends_east: ну вот у пикселей вроде возникли проблемы (reply to 289881)

Joker: а что за проблемы? можно пруфы? (reply to 289884)

Charles: g

LowGas: Гм, кто сталкивался с подобной проблемой:  Я очистил все куки файлы, теперь тон коннект не подключается, а точнее не запоминает подключение, что делать? Я уже переподключил тон коннект, проблема осталась, я использую модуль tonconnectUI на vue.js

Иван: Привет. Кто-то мог бы проконсультировать по юр вопросу при запуске проекта?

Иван: Мы разрабатываем некоторый ТОН игровой проект. По задумке это монета с смартконтрактами, для реализации смартконтрактов для стекинга, бетинга и коллективных игр - скинулись, кто-то один после получил выйгрышь, с долей платформе. Что именно и как требуется легализовывать, верна ли стратегия регистрации в ОАЭ и нужна ли она и взяться за эту часть если найдем общий язык.

&rey: А не получится хостить в неустановленной локации и давать доступ через .ton домен (ADNL-соединение)? (reply to 289894)

Иван: Получится, но проект имеет громкого основателя, если игра взлетит, к нему могут возникнуть вопросы по "экономическим приступлениям" с разных сторон. Вопрос о гипотетической легализации. (написал несколько фактов в личку) (reply to 289895)

Паша: Добры день, а можно получить walletStateInit кошелька без приватного ключа?

&rey: Можно из публичного, да. В любом случае надо и версию знать. (reply to 289904)

Osiris ᕫ: Здравствуйте, если вы не против, я спрошу, когда мы закончим викторину по блокчейну, когда мы ожидаем получить sbt? Спасибо!

Gervs: кто шарит, транзакция в тонах прошла, деньги ушли с кошелька, а на тонскане по адресу кошелька они есть, не уходят и транзакции нету, это лаг или че?

Паша: Спасибо (reply to 289905)

&rey: А на том же тонскане на кошелёк назначения она пришла? (reply to 289908)

Gervs: да

Gervs: ну баланс пополнился на конечном кошельке

&rey: Лаг, стало быть.

.: помогите пожалуйста, проблема с подключением tonkeeper через tonconnect-ui

⁣⁣ᅠ: А поподробней?? (reply to 289919)

.: пойдём в личные? объясню (reply to 289920)

⁣⁣ᅠ: Пишите ✍️ (reply to 289921)

.: написал (reply to 289922)

rxcat: Local validator out of sync: 24625 s Local validator last state serialization: 6780 blocks ago Local validator database size: 115.31 Gb, 12.9% Version mytonctrl: ee82cb6 (master) Version validator: 2a68c86 (master)   MyTonCtrl> installer clcf [debug]   12.02.2025, 17:14:46.230 (UTC)  <MainThread>  Thread self_test started [debug]   12.02.2025, 17:14:46.230 (UTC)  <MainThread>  Thread write_log started [info]    12.02.2025, 17:14:46.230 (UTC)  <MainThread>  Start program `/usr/local/lib/python3.11/dist-packages/mytoninstaller/mytoninstaller.py` [debug]   12.02.2025, 17:14:46.236 (UTC)  <MainThread>  start GetValidatorStatus function Enter root password Password:  [debug]   12.02.2025, 17:14:56.760 (UTC)  <MainThread>  Thread self_test started [debug]   12.02.2025, 17:14:56.760 (UTC)  <MainThread>  Thread write_log started [info]    12.02.2025, 17:14:56.760 (UTC)  <MainThread>  Start program `/usr/local/lib/python3.11/dist-packages/mytoninstaller/mytoninstaller.py` Traceback (most recent call last):   File "<frozen runpy>", line 198, in _run_module_as_main   File "<frozen runpy>", line 88, in _run_code   File "/usr/local/lib/python3.11/dist-packages/mytoninstaller/__main__.py", line 5, in <module>     mytoninstaller()   File "/usr/local/lib/python3.11/dist-packages/mytoninstaller/mytoninstaller.py", line 314, in mytoninstaller     General(local, console)   File "/usr/local/lib/python3.11/dist-packages/mytoninstaller/mytoninstaller.py", line 267, in General     Event(local, name)   File "/usr/local/lib/python3.11/dist-packages/mytoninstaller/mytoninstaller.py", line 236, in Event     CreateLocalConfig(local, initBlock)   File "/usr/local/lib/python3.11/dist-packages/mytoninstaller/config.py", line 95, in CreateLocalConfig     data["validator"]["init_block"]["root_hash"] = hex2base64(initBlock["rootHash"])                                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   File "/usr/local/lib/python3.11/dist-packages/mytoncore/utils.py", line 63, in hex2base64     b = bytes.fromhex(h)         ^^^^^^^^^^^^^^^^ TypeError: fromhex() argument must be str, not None    я же правильно понимаю - лайт сервер будет работать даже если нода не засинкана? не получается создать конфиг  переустаналивал ноду - без толку

RoLuxy: где лучше всего js учить

Андрей: Нет, LS будет работать только когда засинкана нода, иначе будет отдавать ошибку что нода не в синке (reply to 289927)

Ivan: У меня контракт на func, который не компилируется.  https://github.com/stels-cs/func-not-fun/blob/main/contracts/fail_contract.fc Сам контракт ничего не делает, это кусок другого контракта, где я убрал все лишнее.  Казалось бы, че такого, компилятор же говорит в чем ошибка. Но компилятор не говорит в какой строке ошибка, просто   RuntimeError: null function or function signature mismatch  Дальше интересней, если я закомментрию почти любую строку, то компилятору все понравится.  Например если закоментить только 35 строку со скрина, то все ок и если 39 строку то тоже все ок.  Тоесть по сути ничего не меняется, но ошибка пропадает  Может кто-то понимает в чем именно проблема?

SweetJesus: У меня такое было. Дичь. Помог откат на старые зависимости с другого проекта. (reply to 289935)

&rey: UB в компиляторе могло найтись, например. (reply to 289935)

Алексей: а у меня скомпилировалось как-то (reply to 289935)

Ivan: Значит дело в версии компилятора похоже, я последнюю из блюпртнта взял (reply to 289938)

Алексей: да у меня v0.4.4, вроде это не последняя (reply to 289940)

Dmitry | backend4you.ton: господа, а кто-нибудь видел исходники жетонов, которые блюм делает? в эксплорере не верифицированы, код не отображается. но там какая-то кастомная логика (помимо tep 74) и кастомные доп. коды ошибок - вот где бы их посмотреть....

sd: Там по идее контракты тонфана или близкие к ним, сами контракты хз но методы можно чекнуть на гитхабе тонфана (reply to 289942)

sd: Тут https://tonfun-1.gitbook.io/tonfun/basics/architecture И где-то здесь https://github.com/ton-fun-tech/ton-bcl-sdk/blob/main/src/wrappers/BclJetton.ts#L267C11-L267C18 (reply to 289942)

Dmitry | backend4you.ton: спасибо, но не помогло. про коды ошибок не нашёл, операцию burn которая кидает неизвестные ошибки - тоже (reply to 289944)

.: <script src="https://unpkg.com/@tonconnect/ui@latest/dist/tonconnect-ui.min.js"></script> <script>     const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({         manifestUrl: 'https://МОЙ-САЙТ/tonconnect-manifest.json',         buttonRootId: 'ton-connect'     });     tonConnectUI.uiOptions = {         twaReturnUrl: 'https://t.me/БОТ'     };     async function connectToWallet() {         const connectedWallet = await tonConnectUI.connectWallet();         // Do something with connectedWallet if needed         console.log(connectedWallet);     }      // Call the function     connectToWallet().catch(error => {         console.error("Error connecting to wallet:", error);     }); </script> tonconnect-manifest.json {      "url": "https://сайт/",      "name": "название",      "iconUrl": "https://сайт/main.png",      "termsOfUseUrl": "https://www.intellim.co.jp/en/site/",     "privacyPolicyUrl": "https://www.gazeta.uz/ru/privacy/"  } (ссылки везде убрал специально) почему не выходит подключить TonKeeper? показывает страницу с предложением скачать его или войти с TonKeeper hub

Kirill: Всем привет. Подскажите пожалуйста, что именно возвращает gasConsumed в tact?

. .: ребят кто поможет сделать вебхук от тонапи за вознаграждение?

&rey: Можно тонапи поможет?) @subden (reply to 289952)

&rey: Единицы потраченного газа со старта твм в данной транзакции. (reply to 289951)

Kirill: Спасибо. А вот если я получу через тесты количество затраченного газа на эту транзакцию, то уже никогда это значение не изменится? (reply to 289954)

fourlen: нет таких гарантий (reply to 289955)

Kirill: Ну я именно про gasUsed, сколько там в ton это уже можно вычислить

/B4ckSl4sh\: И всё ещё газ на инструкцию теоретически могут поменять. Но без особой на то необходимости так делать не будут, так что в целом на это можно расчитывать (reply to 289957)

Kirill: Спасибо большое

&rey: У некоторых опкодов (те же словари) потребление газа зависит от данных. (reply to 289955)

Kirill: Например от наличия опциональных значений? (reply to 289961)

/B4ckSl4sh\: Но я думаю тут всё таки одинаковый вход имелся в виду (reply to 289961)

Kirill: или допустим число 1 и 1_000_000? (reply to 289962)

&rey: Одинаково стоит, всё ведь int257 обыкновенный. (reply to 289964)

Kirill: Ну тогда куда еще не шло)

Kirill: Как compute fee посчитать выяснили😁. А можно как то понять сколько будет затрачено action_fee?

&rey: action_fee — примерно storage, только берётся не за хранение данных (перемещение во времени), а за их отправку (перемещение между контрактами). В доке написано, как посчитать. (reply to 289967)

/B4ckSl4sh\: А вообще точный подсчёт всех fee это конечно очень весело, но, если есть возможность, просто составьте самый ужасный и самый жрущий тест и посмотрите столько он всего газа потребил.   Потом на входе контракта (или системы контрактов, что чаще) ставим чек на то, что передали достаточно hardcoded_gas*gasPrice тонов, и спокойно процессим мессадж. В конце неиспользованные тоны отправляем назад.  Самый беспроблемный и удобный подход к газу (reply to 289967)

Kirill: Ну в целом да, просто допустим у меня контракт (на котором 0.1 TON) получает 1 ton, после чего он должен отправить сообщение с 0.3 TON (считаем что газ оплатится с этих же ton). И вот остаток надо отправить другим сообщением и как отправить этот остаток что б на контракте осталось 0.1 (ну точность может быть не идеальна)

Kirill: Если про эти рассчеты, то за какое время надо считать? (reply to 289968)

Kirill: Согласен😂 (reply to 289969)

&rey: nativeRawReserve(ton("0.1"), 0); send({value: ton("0.3"), mode: 0}); send({value: 0, mode: SendRemainingBalance}); (reply to 289970)

Kirill: nativeRawReserve(ton("0.1"), 0);  а что это такое?

Kirill: Это ж есть в tact?

/B4ckSl4sh\: Конечно)  https://docs.tact-lang.org/book/send/#outbound-message-processing (reply to 289975)

Kirill: Спасибо большое!

Kirill: Это конечно отвечает на все мои вопросы

— 2025-02-13 —

jack.: дарова мужики, кто знает как намеренно вызвать bounce транзакции, то есть отправка и возврат средств, хотелось бы написать такой скрипт

Nick: Отправь bounceable сообщение на несуществующий адрес (reply to 289981)

🏆: Роялти в нфт платитс за любую транзакцию перемещение? Как понять от какой цены?

Namon: Роялти в NFT указаны как, условно, рекомендации маркетплейсам. Это необязательное требование. (reply to 289986)

Kotov: подскажите, когда пытаюсь отправить одновременно две транзакции на один смарт-контракт, вторая транза зависает и не принимается, с это чем связанно? может из-за тестнета?

Kotov: если отправлять по очереди никаких проблем

Оскар: на стандартных воллетах используется seqno для защиты от повтора, нужно дожидаться изменение этого seqno после отправки последней транзакции и только потом отправлять следующую (reply to 289989)

Kotov: отправка идет с разных устройств и как-то синхронизировать нету возможности. может нам стоит использовать highload-wallet?

Оскар: да (reply to 289992)

Alexander: привет, как в итоге решили ошибку?) (reply to 256309)

rends_east: убрали случайно попавший raw_reserve(0, 4) :) (reply to 290005)

F: В мейннете приняли version=9. (c) SpyCheese Это означает, что теперь в компиляторе можно соптимизировать компиляцию try/catch. Вместо c1 PUSH c3 PUSH c4 PUSH c5 PUSH c7 PUSH <{ ... }>CONT c7 SETCONT c5 SETCONT c4 SETCONT c3 SETCONT c1 SETCONT Можно писать <{ ... }>CONT 0b10111010 SETCONTMANY

Emil: привет коллегам. я разрабатываю приложение взаимодействия с тонк блокчейном   но я не нахожу примеры как создать неподписанную транзакцию !!!. может ктото подсказать мне

Emil: это нужно для того чтоб подписка выполнялось во фронтенде

Oleg: Нет такого понятия. Транзакция - это результат обработки блокчейном неких сообщений. Вероятно, вам нужно создание сообщения? (reply to 290014)

Emil: да, но без приватного ключа  спасибо что откликнулись ! (reply to 290017)

Emil: ожидаемая последовательность такая,  создать неподписанное сообщение, отправить фронтенду для подписки, и выполнить транзакцию при помощи подписанного объекта (reply to 290017)

Emil: если конечно есть такие возможности (reply to 290019)

&rey: Сформируйте payload и доставьте на фронтенд. Отправьте через TC2 с фронтенда. (reply to 290019)

Emil: благодарю за ответ (reply to 290021)

Emil: правдо если бы предоставели документацию какую то, было бы круто (reply to 290022)

.: ? (reply to 289947)

Denis: напишите кто щас работает над каким либо проектом могу помочь своими силами/

kalloc: Привет, а какие контракты с большим стейтом есть в тоне? Кто осознанно на это шел?

Grigoriy: Всем привет, похоже я запутался.. В доке тона написано что highwallet v3 может отправлять 254 транзакции за 1 external effectively making it possible to send up to 254 messages per 1 external message (possibly more if another message is sent to Highload wallet again among these 254). Захожу в контракт кошелька и вижу в конце recv_external вызов send_raw_message, но как достигается отправка 254 сообщений за раз, если send_raw_message отправляет одно сообщение  Я думал что это будет работать как то так, делаем сообщение с большим количеством вложенных ref и туда пихаем адреса для отправки, читаем сообщение в контракте пока не кончаться ref и рассылаем всем  В какую сторону мне копать что бы выяснить как отправляется 254 транзакции за 1 external?

Александр: Самому себе отправляется internal_message где потом через set_actions идёт отправка сообщений https://github.com/ton-blockchain/highload-wallet-contract-v3/blob/5938d689c54e2c13a93de71b05995f96548c7d74/contracts/highload-wallet-v3.func#L54C9-L54C30 (reply to 290030)

Александр: https://github.com/ton-blockchain/highload-wallet-contract-v3/blob/5938d689c54e2c13a93de71b05995f96548c7d74/wrappers/HighloadWalletV3.ts#L109 https://github.com/ton-blockchain/highload-wallet-contract-v3/blob/5938d689c54e2c13a93de71b05995f96548c7d74/wrappers/HighloadWalletV3.ts#L167  Вот ссылки для понимания как снаружи идёт взаимодействие

Shkiper: Приветствую коллеги подскажите что я тут делаю не так          const forwardPayload = beginCell()          .storeUint(0, 32) // 0 opcode = комментарий         .storeStringTail(comment) // Добавляем комментарий         .endCell();          // Формируем payload для транзакции Jetton         const payload = beginCell()             .storeUint(0xf8a7ea5, 32) // OP-код transfer             .storeUint(queryId, 64) // Случайный Query ID             .storeCoins(price) // Количество Jetton             .storeAddress(Address.parse(marketadress)) // Получатель             .storeAddress(Address.parse(userAddress)) // Куда вернуть остаток             .storeBit(0) // Нет custom_payload             .storeCoins(1) // 1 нанотон для forward_ton_amount (чтобы forward_payload сработал)             .storeRef(forwardPayload) // Вставляем forward_payload с комментарием             .endCell();             res.json({                 success: true,                 transaction : {                     validUntil: Math.floor(Date.now() / 1000) + 360, // Время действия транзакции                     messages: [                         {                             address: jettonWallet,                             amount: "5000000", // Сумма комиссии в нанотокенах                             payload: payload.toBoc().toString('base64'),                         },                     ],                 },                              });

Shkiper: Транзакция приходит на подпись с ошибкой (reply to 290036)

&rey: .storeMaybeRef(forwardPayload) (reply to 290036)

Shkiper: Сейчас попробую (reply to 290038)

sd: Игнорируете спойлеры в телеграме          const forwardPayload = beginCell()          .storeUint(0, 32) // 0 opcode = комментарий         .storeStringTail(comment) // Добавляем комментарий         .endCell();          // Формируем payload для транзакции Jetton         const payload = beginCell()             .storeUint(0xf8a7ea5, 32) // OP-код transfer             .storeUint(queryId, 64) // Случайный Query ID             .storeCoins(price) // Количество Jetton             .storeAddress(Address.parse(marketadress)) // Получатель             .storeAddress(Address.parse(userAddress)) // Куда вернуть остаток             .storeBit(0) // Нет custom_payload             .storeCoins(1) // 1 нанотон для forward_ton_amount (чтобы forward_payload сработал)             .storeRef(forwardPayload) // Вставляем forward_payload с комментарием             .endCell();             res.json({                 success: true,                 transaction : {                     validUntil: Math.floor(Date.now() / 1000) + 360, // Время действия транзакции                     messages: [                         {                             address: jettonWallet,                             amount: "5000000", // Сумма комиссии в нанотокенах                             payload: payload.toBoc().toString('base64'),                         },                     ],                 },                              }); (reply to 290036)

Shkiper: Большое вам спасибо 👍, я весь извелся со вчерашнего дня (reply to 290038)

Shkiper: Извините а что вы имеете ввиду? Просто не понял (reply to 290040)

Паша: Добрый день, а вобще возможно подключить смарт контракт через тон коннект? Кошелек же по сути тоже смарт контракт

/B4ckSl4sh\: нет, только кошелек (reply to 290048)

Паша: А это чтоли как то проверяется? (reply to 290051)

/B4ckSl4sh\: приложение кошелька не подключит вам "какой-то контракт" (reply to 290052)

Паша: А если делать без приложения кошелька? Ну там самому сгенерировать тон пруф сообщение и скинуть приложению (reply to 290053)

&rey: Конечно, можно даже отсутствие контракта подключить. Проблемы могут возникнуть при бэкенд-валидации. (reply to 290048)

/B4ckSl4sh\: А как? Это код какого-то из приложений-кошельков патчить? (reply to 290059)

Паша: А вобще есть разница между walletStateInit и stateInit? А то в тон пруфе обычно walletStateInit (reply to 290059)

&rey: Это, как бы, одно и то же. (reply to 290062)

Паша: А почему тогда у них названия разные? (reply to 290063)

&rey: Потому что 1) такое бывает 2) TC2 поясняет, чей там stateInit даётся; вдруг это был бы инит некого контракта, который надо непременно задеплоить для чего-нибудь там, а не кошелька (reply to 290064)

Паша: Пон (reply to 290065)

Паша: Но я пытался получить stateInit в tonutils-go, как из обычного смарта, и он отличался от stateInit, как из кошелька. Код был одинаковый, а дата разная (reply to 290066)

&rey: subwallet ID (reply to 290067)

Паша: Аа, теперь понял, спс (reply to 290069)

Anton: Ребят, а как через анализ транзакций кошелька можно вычислить, что были транзакции через стонфай?  Там разные контракты как я понял для разных свапов используются, нету единого контракта, который делает все свапы?

Oleg: Единый контракт - это не ton way (reply to 290074)

fourlen: роутер наверн можно чекать https://tonviewer.com/EQCS4UEa5UaJLzOyyKieqQOQ2P9M-7kXpkO5HnP3Bv250cN3 (reply to 290074)

Georg Leon: Тон есть на кошельке который привязан? (reply to 288805)

Mirage on Kimberly: @send

5aava: ку

5aava: есть кто разбирается, можно ли 1 НФТ на 2 маркета сразу выставить на продажу?

web-assist 🧀: Если используют разные контракты продажи - нет, если второй маркет может подтянуть инфу о продаже - да (reply to 290090)

5aava: технически я проверял, овнер, владелец всё таки становится адрес продажи (контракт продажи) но в нем вроде как указывается владелец настоящий.. апрува как в эфировских сетях нет.. но тогда вопрос с комиссиями, как маркетплэйс может брать коммисию с контракта продажи.. и что делать второму маркетплэйсу, откуда брать коммиссию, если подтянуть контракт продажи..

&rey: Любой может занулить роялти и эти не-чейновые комиссии, работать будет не хуже, большинство маркетов покажет возможность покупки. (reply to 290092)

5aava: тоесть рабоать будет следующим образом. Один маркет выставил на продажу НФТ.. создал контракт продажи, а рядом положил контракт своей комиссии? И если другой маркет подтянул контракт продажи, то может так же рядом положить контракт своей комиссии и так же продавать? А по факту покупатель может без маркетов вызвать контракт продажи напрямую и получить НФТ без комиссий маркетов ? (reply to 290097)

&rey: Вроде в данные контракта продажи пишется маркетплейс. (reply to 290099)

5aava: так если пишется комиссия маркетплейса и данные в контракт продажи, тогда как продавать ту же НФТ на другом маркете? получается покупатель такую НФТ оплатит и + к ней две комисии ??

5aava: по факту пытаюсь понять как технически реализован setAprove на ТОН

&rey: Нфт принадлежит конкретному контракту, всегда одному. (reply to 290102)

5aava: этот факт известен.. (reply to 290103)

&rey: Маркеты не только свои контракты продажи показывают. Обычно.

5aava: однако, на опенси и на рербл можно выложить 1 нфт и там и там..

5aava: что в этом удивительного?

&rey: Ну, в тоне не бывает двух контрактов продажи для одной нфт, если это не скам.

5aava: это и так понятно.. вопрос в другом, как реализовать продажу 1 НФТ на нескольких маркетов? и это не для скама.. на эфировских сетях такой механизм работает без проблем.. вопрос к знающим (reply to 290108)

&rey: Один контракт продажи; его можно вообще не привязывать к маркетам. Большинство сайтов покажет. (reply to 290113)

5aava: спасибо за ответы.. (reply to 290114)

5aava: кто знает, подскажите пожалуйста, кроме гетгемс какие есть еще маркеты, работающие с тестовой сетью ?

Gulnaz: Подскажите, пожалуйста,Когда синхронизируешь через кошелек тонкипер во фрагменте, приходит подтверждение выставления на аукцион через бот fragment.alert,И адрес входа постоянно разный, то Амстердам, то Нидерланды. Кошелек в тонкипере не совпадает с ботом. Подскажите, пожалуйста, не хотелось бы ,чтобы улетела транзакция

&rey: Все адреса, которые вы обвели, указывают на один аккаунт. (reply to 290120)

Gulnaz: Благодарю🙏 (reply to 290121)

Gulnaz: UQD3VclOTGjrIlRhjApew2SH_qwedXSfupNoaWJcVpzeZsLa Это кошелек в тонкипере  А это  EQD3VclOTGjrIlRhjApew2SH_qwedXSfupNoaWJcVpzeZp8f В fragment.alert (reply to 290121)

ㅤㅤㅤㅤKurimuzonAkuma: Это один кошелек (reply to 290123)

Gulnaz: Спасибо большое, не пойму как это смотреть 🫶 (reply to 290124)

Vladimir: https://ton.org/address/ (reply to 290125)

Gulnaz: Благодарю! (reply to 290126)

Emil: Send signed transaction error: 406, message='cannot apply external message to current state', url='https://testnet.tonapi.io/v2/blockchain/message'  ???

Emil: привет ребят, кто может подсказать (reply to 290141)

Максим: привет, ребята, есть пару вопросов по nftшкам.  с помощью mintyton залил nftшки в testnet на гетгемс и тут у меня пару вопрос: 1. как можно сделать их закрытыми и только при покупке пользователь увидит, что ему попалось 2. как их все разом залистить, а то что сейчас на юайке вижу, это идти одна за одной и выставлять цену.  спасибо!

Leineelvi: Всем привет! Разработал рабочую анти-мев защиту(у TonTradingBot не работает), кому могу написать и предложить решение? Дексы и аггрегаторы

Namon: https://docs.ton.org/v3/guidelines/ton-connect/guidelines/how-ton-connect-works (reply to 290023)

Namon: Видимо неверно сформировано external message (не та подпись / не те данные, из-за чего контракт не принимает external) (reply to 290142)

Namon: Написать свой контракт на основе контракта NFT, добавить туда какой-нибудь op code для изменения данных (текста и изображения) (reply to 290145)

Namon: Через интерфейс вряд ли можно, через скрипты можно пройтись по каждой NFT и выставить её на продажу (=создать контракт продажи и перенести туда NFT) (reply to 290145)

delthisgem: как правильно вывести все тоны с кошелька, чтобы был потом красивый ноль, тонкиппер умеет так делать, как это повторить через тонутилс например?

SweetJesus: мод 128 (reply to 290158)

delthisgem: понял куда копать, спс (reply to 290159)

Nikita: привет есть ли способ трейсить fift скрипт? написал простой скрипт, хочу посмотреть как он выполняется и что лежит на стеке в тот или иной момент с аргументом -v не срабатывает

𝖍𝖊𝖗𝖊 𝖆𝖓𝖉 𝖓𝖔𝖜: Привет ребят, кто в смарт контрактах шарит? нужен разраб под проект

.: помогите пожалуйста (reply to 289947)

Vladimir: Так этого мало. Что не выходит? Что вообще происходит поэтапно? (reply to 289947)

User<7877990954>: Напиши в лс по подробнее (reply to 290166)

.: давайте в личные, объясню (reply to 290169)

Vladimir: Нет, или сюда пишите для всех, или сами разбирайтесь. (reply to 290171)

.: Нажимаю на кнопку подключить кошелёк, вылазит меню с кошельками, выбираю TonKeeper, у меня показывается следующая страница: (reply to 290169)

.: секунду

.: должно перекидывать в TonKeeper

Юрий: Попробуй зажать ярлык приложения пальцем, перейти в настройки системные и посмотреть стоит ли это (reply to 290176)

.: у меня такого даже нет, при этом в каких-то других играх тва работает всё, перекидывает в кошелёк (reply to 290180)

Юрий: У тебя Андроид? Если да, должно быть (reply to 290181)

Юрий: Возможно открывается по другому, но должно быть

Anton: а тонкипер установлен вообще? (reply to 290181)

.: да (reply to 290184)

Vladimir: А дай ссылку на бот, проверим подключение кошелька. (reply to 290181)

Anton: судя по скринам тяжело представить что у тебя установлен тонкипер (reply to 290175)

rxcat: у тона существуют пустые шард блоки?  может ли быть такое, что при парсинге самого свежего мастер блока некоторые шардблоки имеют пустой список транзакций, который потом появляется через время?   есть варианты как такое можно отслеживать вообще? парсить с задержкой?

.: сюда кидать? (reply to 290187)

— 2025-02-14 —

Artem: Error: Invalid address     at openContract (/usr/local/lib/node_modules/ton-core/dist/contract/openContract.js:18:15)     at NetworkProviderImpl.open (/usr/local/lib/node_modules/@ton-community/blueprint/dist/network/createNetworkProvider.js:166:44)     at Object.run (/Users/Shared/stablecoin-contract/scripts/deployJettonMinter.ts:24:29)     at async run (/usr/local/lib/node_modules/@ton-community/blueprint/dist/cli/run.js:16:5)     at async main (/usr/local/lib/node_modules/@ton-community/blueprint/dist/cli/cli.js:62: кто может помочь с данной ошибкой при деплое контракта

Tim: Адрес не валидный

Danya: Драйнер кинешь?)) (reply to 290187)

Danya: Прикольно,но не понятно за что) (reply to 290201)

Lucas [Lux]: Скиньте пожалуйста гайд для создания сайта с доменом ton dns

User<7956486132>: Over time, wealth grows naturally

Daniil: Что означают fee_units в симуляции свапа на STON.fi? это в каких единицах? допустим, когда пытаюсь поменять HIF на TON, мне возвращает 191 в fee_units когда SOON на TON - 49 когда TON на USDT - 11344 что эти числа значат в каждом случае? как их обернуть в комиссию в виде ТОНа?

Viacheslav: а может кто подсказать регулярку для проверки TON адреса? типо там 48 символов, какие знаки и т.д.

Oleg: 2 варианта base64, если френдли формат (reply to 290221)

Viacheslav: Да, френдли, они ж все 48 символов в длину? (reply to 290223)

Oleg: Запрос в гугл "регулярка для base64" (reply to 290225)

Василий: Не применяйте регулярки к том что не является текстом. Декодируйте base64 и дальше по стандарту.  Либо смотрите реализацию в поулярных библиотеках (reply to 290221)

Viacheslav: это чисто чтоб на входе отфильтровывать что вообще не похоже на адрес.. чтоб не начинать распаковку адреса лишний раз (reply to 290228)

&rey: Не забудьте, что resolve-contract.ton.resolve-contract.ton тоже корректный адрес. (reply to 290230)

Viacheslav: ну пока без них)))) (reply to 290231)

Artem: Подскажите , пожалуйста  , есть ли гдето пример контракта токена с функцией обновления ?

Дмитрий: Обновления чего? (reply to 290236)

Viacheslav: привет. а из контракта func можно как то определить, есть ли контракт по таклму то адресу? мб codesize как то чекнуть..

Andrey: Напрямую - нет (reply to 290238)

Artem: С функцией обновления самого контракта , тоесть чтоб его можно было обновлять без изменения адресса и держатилей (reply to 290237)

Viacheslav: вот такая же норм?  ^[A-Z0-9]{2}[A-Za-z0-9+/_-]{46}$ (reply to 290230)

Дмитрий: Звучит как контракт хонейпота) (reply to 290242)

Andrey: Просто длину проверяйте строки, это быстрее будет работать чем регулярка (reply to 290230)

Artem: Ну тоесть чтоб можно было добавлять новый функционал в контракт без прокси , читал что в тоне это реально (reply to 290244)

&rey: Реально. Теоретически работает как     ds~load_ref().set_code();     ds~load_ref().begin_parse().bless()();  ;; any required updates     return (); Примеров не предвидится. (reply to 290236)

&rey: "Прикреплен" не означает ничего, "расти" вы гарантировать не можете — только спрос и предложение этим управляют, в лице конкретных свопов. (reply to 290257)

Lucas [Lux]: Можете подсказать, у fragment.com есть API?

crisper: привет, подскажите а что означает запись типо _            Magic        tlb:"$0001" как данный tlb опкод парсится?

Dmitry: Всем привет Как это сделать? Settings под гамбургером. Быстро не получится :)

Wayne: ustd это жетон, работает также как с другими (reply to 290284)

Dmitry: он спросил про межсеть (reply to 290287)

Dmitry: есть разные механизмы  есть https://en.bitcoin.it/wiki/Hash_Time_Locked_Contracts есть мосты мосты тоже есть разные (reply to 290289)

&rey: Можно атомарным обменом, можно через trustless мост, можно через мост с оракулами. (reply to 290289)

Viacheslav: привет. а что мешает юзеру задеплоить jetton-wallet со стейтом, в котором у него большой баланс? код же будет как в wallet_code из jetton_minter.. так что мб он пройдет проверку на адрес?  чет забыл вот этот момент..

User: Тогда при переводе проверка на адрес на стороне мастера не пройдет. При изменении баланса, адрес меняется тоже (reply to 290303)

&rey: Не пройдёт, любой жетон-кошелёк же собирает для проверки и начальную дату с нулевым балансом. (reply to 290303)

SweetJesus: изначально стейт жетон волета считается с балансом 0, зафигачишь туда большой баланс - стейт будет другой (reply to 290303)

Daniil: Как пользоваться методами emulate в TON API? Допустим, я получил body от STON.fi по свапу (на скрине) что дальше из секции "Emulation" нужно вызывать (и что из body передавать, и как), чтобы оценить газ за эти транзакции?  https://tonapi.io/api-v2#operations-Emulation-emulateMessageToAccountEvent

Nikita: Привет подскажите, пожалуйста как работают библиотеки в тоне?  я так понимаю что у адреса может быть только одна библиотека, но как достать ее хеш?   Вижу что есть метод smc.getLibraries который по хешу выдает библиотеки, но как мне понять какой контракт какую библиотеку использует?

Оскар: взять ячейку кода контракта, если это экзотик и первые 8 бит равны 2 - значит код хранится в либе, следующие 256 бит и есть хэщ, если же ячейка обычная - значит код хранится напрямую на аккаунте (reply to 290309)

Оскар: https://docs.ton.org/v3/documentation/data-formats/tlb/exotic-cells#library-reference (reply to 290309)

X1ag: Всем привет, пишу тесты для смарт-контракта на jest с помощью blueprint. Подскажите, как исправить эту ошибку?   Trying to run get method on non-active contract

SweetJesus: так тебе прямым текстом написано. (reply to 290312)

X1ag: хорошо, как активировать контракт? (reply to 290313)

rends_east: задеплоить его (reply to 290314)

X1ag: благодарю (reply to 290315)

&rey: это неправда (reply to 290309)

Nikita: тогда не понятен смысл  если либа нужна что бы вызвать код, то зачем мне две части кода? Почему нельзя скомпоновать код в одну ячейку? (reply to 290317)

&rey: Либа может быть нужна, чтобы сохранить большие таблицы констант. А может вообще быть от другого автора – если вы получаете жетон-кошелёк USDT, например. (reply to 290318)

Nikita: я правильно понимаю что получив хеш либы я не найду ее адрес просто по ее хешу?  let cs = code.beginParse(true) cs.loadUint(8); let hash = cs.loadBuffer(32).toString("hex")   потому что по адресу -1:hash ничего не найдено

&rey: Любой мастерчейн-контракт может публиковать любые либы.

Nikita: перефразирую свой запрос так:  хочу поднять тон ноду в докере, со своим стейтом что бы тестировать взаимодействие со стонфи в2 без постоянного запроса тестовых тонов и у комьюнити был нормальный инструмент для интеграционных тестов   собрал уже скрипт готовый, но не могу понять как добавить либы к нему т.к. стонфи и pTon используют либы (reply to 290322)

&rey: Первый пункт https://github.com/ton-org/sandbox#sandbox-pitfalls. (reply to 290325)

&rey: А, если своя нода, то можно просто один мц-контракт написать, и пусть тот публикует библиотеки; адрес того контракта не важен.

Nikita: да, это похоже на то что нужно а как найти исходный код библиотеки?  пробую разные хеши, но ничего не возвращется https://dton.io/graphql#query=%7B%0A%20%20get_lib(%0A%20%20%20%20lib_hash%3A%20%22742610640d2b2cd87d86b3834533a6922d3b71c9b639fe38837ec466dcc0bcbb%22%0A%20%20)%0A%7D  варианты которые перепробовал:  let lib_prep = beginCell().storeUint(2, 8).storeBuffer(wallet_code_raw.hash()).endCell(); const wallet_code = new Cell({exotic: true, bits: lib_prep.bits, refs: lib_prep.refs}); console.log(wallet_code.hash().toString("hex")); console.log(lib_prep.hash().toString("hex")); console.log(wallet_code.hash().toString("base64")); console.log(lib_prep.hash().toString("base64")); console.log(wallet_code_raw.hash().toString("hex")) console.log(wallet_code_raw.hash().toString("base64")) (reply to 290327)

&rey: А откуда wallet_code_raw; что будет, если его напечатать в консоль? (reply to 290328)

Nikita: const wallet_code_raw = await compile('JettonWallet');   выводит соотвественно исходный код jettonWallet (reply to 290329)

&rey: Вам бы взять настоящий pTON или USDT, а не компилировать демоверсию.

Оскар: когда делал чекер ханипотов, тоже с таким столкнулся, не поверишь, но дтон по какой-то причине только хавает uppercase хекс  https://dton.io/graphql#query=%7B%0A%20%20get_lib(%0A%20%20%20%20lib_hash%3A%20%22742610640D2B2CD87D86B3834533A6922D3B71C9B639FE38837EC466DCC0BCBB%22%0A%20%20)%0A%7D (reply to 290328)

Nikita: да! наконец-то🌚  спасибо большое!   // EQDiolbUI-wbmncBen7bYEG1pK_F27RKlqoRWCzSSA8mpqfe let cell = Cell.fromBase64("te6ccgEBAQEAIwAIQgLNiObzwqnPAbsAOig37A2SwZaF7R2//9lKVF3P3woU2Q=="); let cs = cell.beginParse(true); console.log(cs.loadUint(8)); let hash = cs.loadBuffer(32); console.log(hash.toString("hex")); console.log(hash.toString("hex").toUpperCase());   dton начал возвращать нормальные значения

Status🆓: Написал продавец , захотел купить мой юзернейм . Создал транзакцию в фрагменте . 1 раз не прошла транзакция из за неправильного формата кошелька с моей стороны .  Поддержка сказала внести сумму на кошелек равный сумме заморозки комиссии   2 раз внеся равную сумму и поставив тот формат кошелька , транзакция снова не провелась и выскочило уведомление от поддержки что есть подозрение на мошенничество .  Заблокировали и мои и деньги покупателя и требуют для проверки AML внести одинаковые суммы заморозки мне ≈(денюжка) ему≈ (денюжка)    У нас нет таких денег , что делать , подскажите   В моем кошельке NFT покупателя есть как спам разными коинами(он видимо разделил платеж)

sd: 1. у фрагмента нет поддержки 2. на фрагменте нет ордеров 3. вас заскамили 4. и продолжают разводить дальше (reply to 290336)

Status🆓: Спасибо за горькую правду

Status🆓: А почему сайт официальный

&rey: А точно не с русской буквой в адресе? (reply to 290339)

sd: сайт не официальный, скорее всего скамер просто сделал гиперссылку. они пишут t me fragmentbot или fragment com / order, а сверху вешают ссылку на свой вебапп - и при открытии юзер видит только "открыть вебапп", и не понимает что это скам. (reply to 290339)

Status🆓: Вот такая ссылка была

Status🆓: https://frаgmеnt.соm/tеlеgrаm-usеrnаmе/broyrespectme

&rey: Буквы а,е русские. (reply to 290344)

Ruslan: там русские символы

Ruslan: хитро

集电极: Punycode (reply to 290344)

Андрей: А встроенный браузер телеги вроде бы отсеивает такие ссылки (reply to 290344)

Андрей: Да и на компе оно не открывает, как вы умудрились такое открыть? (reply to 290349)

Status🆓: Увы, не отсеивает

sd: Скорее всего он страничку уже выключил. Встроенный телеги в мобильном как раз "норм" все открывает, это видно по адресной строке (reply to 290349)

Status🆓: А вариантов вернуть через что-то деньги,нет?

Status🆓: И попробовать его заскамить,кто шарит,помогите пожалуйста

OMG: не, без вариантов, много потерял?

Status🆓: 100 к (reply to 290359)

Status🆓: Я вот думаю,дальше продолжить переписку и вывести с него немного денег

Status🆓: Кто-нибудь знает,а в fragment можно авторизоваться через паспорт, если тебе 16?

wlaDICK: А какую юзерку угнали ? (reply to 290362)

Status🆓: Не угнал он,он сделал транзакцию через фальш ссылку,и так кинул (reply to 290365)

Status🆓: Тут получается он скинул,но это фальш монеты

Гурий: Бро, не переживай, рано или поздно все они сядут на бутылку и с каждой палкой в жопу они будут вспоминать всех кого они кинули и жалеть об этом) (reply to 290368)

Status🆓: Надеюсь на это (reply to 290369)

🏆: Как одеть домен тон на смартконтракт?

🏆: Есть ли примеры контрактов для продажи жеттонов за юсд по фиксированной или стакану? На сколько я понимаю архитектура тон не предполагает стаканов вовся, хотелось бы понять как декс работает если непонятно где бид/аск, как он проводит сделки

писянбз: Господа, всем привет, я не сильно опытный в сети TON, но появилась следующая задача на python Нужно создать Highload wallet v3 кошелек, инициализировать его и успешно отправлять транзакции Я решил воспользоваться tonsdk, в который добавили поддержку hv3, но после написания кода возникла проблема с инициализацией кошелька, с которой я не могу справиться Исходный код:  from tonsdk.contract.wallet import HighloadWalletV3Contract  signing_key = nacl.signing.SigningKey.generate() private_key = signing_key.encode() public_key = signing_key.verify_key.encode() wallet = HighloadWalletV3Contract(public_key=public_key, private_key=private_key)  print("Адрес кошелька:", wallet.address.to_string(True, True, True)) # в этом моменте перевод монет на сам кошелёк (отправил более 1 TON)  query_id = HighloadQueryId() amount = 100_000_000 created_at = int(time.time()) transfer_message = wallet.create_transfer_message(     address=wallet.address,     amount=amount,     query_id=query_id,     create_at=created_at,     need_deploy=True,     payload="Test 123" )  # попытка перевести себе валюту с need_deploy, чтобы инициализировать кош client.send_boc(transfer_message["message"].to_boc(False))  # client - TonCenterTonClient   И после этого скрипт выдаёт ошибку, что TonCenter вернул код 500, а если быть точнее, то TonCenter отправил следующий ответ  {'ok': False, 'error': 'LITE_SERVER_UNKNOWN: cannot apply external message to current state : External message was not accepted\nCannot run message on account: inbound external message rejected by transaction 856315DE2AE930153A5D2D32AEA39F46244F60FD8FAAD731ECE5C20C1540F321:\nexitcode=33, steps=45, gas_used=0\nVM Log (truncated):\n...HCONT x6D32\nexecute IF\nexecute PUSHNULL\nexecute POP s2\nexecute implicit RET\nexecute ROT\nexecute NOW\nexecute SWAP\nexecute implicit RET\nexecute XC2PU s6,s7,s5\nexecute CHKSIGNU\nexecute THROWIFNOT 33\ndefault exception handler, terminating vm with exit code 33\n', 'code': 500}  Из того, что перепробовал и не помогло Поменял адрес при переводе средств на другой кошелёк Менял сумму отправки Скидывал дополнительно тоны на кош Пытался делать манипуляции с query_id и created_at Убирал/добавлял/изменял payload при создании сообщения Пытался отправить boc самостоятельно через TonCenter  Если кто-то сможет предложить хотя бы идею как это можно решить или сделать иначе - я буду рад Но если кто-то укажет на ошибку, которую я совершаю - постараюсь отблагодарить в пределах разумного  Но если кто-то укажет на ошибку, которая мешала работе и которую я действительно совершил или упустил - постараюсь отблагодарить в рамках разумного, конечно

писянбз: Если поможет для решения ситуации https://tonviewer.com/UQCEYxXeKukwFBpdLTKvo59GJE9g_Y-q1zHs5cIMFUDzEoBc 0:846315de2ae930141a5d2d32afa39f46244f60fd8faad731ece5c20c1540f312 UQCEYxXeKukwFBpdLTKvo59GJE9g_Y-q1zHs5cIMFUDzEoBc (reply to 290376)

&rey: Какой-то приватник не такой, подпись неверную генерирует. Попробуйте private_key = signing_key.encode() + signing_key.verify_key.encode(). И вообще, пары ключей надо уж через tonsdk генерировать (предполагая, что вы хотите остаться на tonsdk, что не очень хорошо) (reply to 290376)

писянбз: Что именно плохого в tonsdk? Сейчас использую обычный v4 кошелёк, подключенный через него, проблем не заметил (reply to 290380)

&rey: Там проблемы с сериализацией больших боков; в большой такой теории, рано или поздно у вас даже может отправиться не то, что вы ожидаете. (reply to 290381)

писянбз: Что можно использовать вместо tonsdk для питона, где есть поддержка hv3? Нужен hv3, поскольку в нынешней ситуации транзакции отправляются дольше необходимого

Namon: Можно ведь использовать Address.parse, если для ts, и другие либы для других языков (reply to 290230)

— 2025-02-15 —

Mirka: https://github.com/nessshon/tonutils (reply to 290387)

Паша: доброе утро, а стейт инит же никогда не меняется?

iAbdurahmon: Здравствуйте Создал простой сайт на django и запустил на домене .ton  Но почему то login не работает - бесконечно грузит после отправки запроса. А если зайти через приложение тг не только login но и поиск не выводит результатов Хотя на обычном домене сайт полностью функцианирует.  <form action="" method="POST" class="submit-button">         {% csrf_token %}          <div class="form-group-username">             <label for="exampleInputEmail1">Username</label>             <input type="text" class="form-control" name="username" aria-describedby="emailHelp" placeholder="Enter username">         </div>          <div class="form-group-password">             <label for="exampleInputPassword1">Password</label>             <input type="password" class="form-control" name="password" placeholder="Password">         </div>          <br>         <input type="submit" value="Submit" class="btn btn-secondary">     </form> это форма логина  как можно решить проблему?

SweetJesus: и код и дата контракта после деплоя изменяемы. для возможности изменения первого нужно заранее об этом позаботиться, в то время как второе обычно меняется от транзакции к транзакции в зависимости от логики. единственное что изменение обоих не изменяет адрес контракта. (reply to 290398)

Daniil: Подскажите, как на Питоне создать external message? У меня есть свап-транзакция, которую я хочу оценить на газ. Я получаю от STON.fi body (Cell), которое перевожу в hex и отправляю в ТОН АПИ emulate. Мне возвращает 500 b'{"error":"destination account is null"}' Думаю, проблема в том, что я посылаю только body от свапа, не создавая external_message. Снизу пример, как это делают в JS: const tr = wallet.createTransfer({         seqno,         secretKey: dummyKey,         sendMode: SendMode.PAY_GAS_SEPARATELY + SendMode.IGNORE_ERRORS,         messages: [             internal({                 value: toNano('0.5'),                 to: Address.parse('EQDvK4AbmarjScYfcfF95XLX5y1ges3zPWgOZavXo0SMmqH9'),                 body: body             })         ]     });       // Create external message for emulation     const bocExternalMessage = beginCell()         .store(             storeMessage(                 external({                     to: senderAddress,                     init: undefined,                     body: tr                 })             )         )         .endCell(); Мой вопрос: как я могу, используя body от СТОНфай роутера создать external_message на Python? Любая библиотека как я сейчас получаю body (cell) от STON.fi:  async def get_swap_data(coin_address,router_address_for_swap):     stonfi_router = StonfiRouterV2(client, router_address=Address(router_address_for_swap))     to, value, body = await stonfi_router.get_swap_jetton_to_ton_tx_params(         offer_jetton_address=Address(coin_address),         receiver_address=wallet.address,         user_wallet_address=wallet.address,         offer_amount=to_nano(5, 6),         min_ask_amount=1000000000,         refund_address=wallet.address,     )     return body

Михаил: Доброго дня.  Подскажите, каким методом возможно пополнение пула из смартконтракта?

Daniil: Как правильно перевести external message в Cell на Python? не знаю, такой способ ок или нет (должен же быть в какой-то TON библиотеке на Питоне готовый метод для конвертации, а не такой, вручную?) external_message = Contract.create_external_msg(     src=TON_WALLET_ADDRESS,     dest=recipient_address,     body=body) builder = begin_cell()  builder.store_uint(0b10, 2) builder.store_address(external_message.info.src) builder.store_address(external_message.info.dest) builder.store_coins(external_message.info.import_fee) builder.store_maybe_ref(external_message.body)  external_message_cell = builder.end_cell()

Алексей: https://gist.github.com/Gosunov/fcf7b54f138cc38d4d6b5e495b3ec751  есть ещё чат посвященный тон разработке на питоне @pythonnton, мб там лучше спрашивать (reply to 290415)

hany: No

Daniil: спасибо, сработало а что может означать такая ошибка? b'{"error":"iteration: 0, exitCode: 0, Text: Emulate transaction failed: [Error : -701 : cannot run message on account inbound external message rejected by account E1E681CFB..... before smart-contract execution], "}' (reply to 290422)

Алексей: экстернал сообщение реджектнулось смартконтрактом, либо там денег нет, либо секно неверный, либо подпись не та (reply to 290427)

Daniil: хм, а можете подсказать, что я тогда делаю не так? я пытаюсь эмулировать транзакцию через TON API emulate в их примере на сайте они через JS библиотеку делают следующее: const body = beginCell()         .storeUint(0x5fcc3d14, 32) // Operation code for NFT transfer         .storeUint(0, 64) // Query ID         .storeAddress(recipientAddress) // Recipient address         .storeAddress(senderAddress) // Sender address         .storeUint(0, 1)         .storeCoins(toNano('0.0000001')) // Small transfer fee         .storeBit(0) // No custom payload         .endCell();       // Create transfer for emulation     const tr = wallet.createTransfer({         seqno,         secretKey: dummyKey,         sendMode: SendMode.PAY_GAS_SEPARATELY + SendMode.IGNORE_ERRORS,         messages: [             internal({                 value: toNano('0.5'),                 to: Address.parse('EQDvK4AbmarjScYfcfF95XLX5y1ges3zPWgOZavXo0SMmqH9'),                 body: body             })         ]     });       // Create external message for emulation     const bocExternalMessage = beginCell()         .store(             storeMessage(                 external({                     to: senderAddress,                     init: undefined,                     body: tr                 })             )         )         .endCell();       // Emulate transaction     const emulateTrace = await ta.emulation.emulateMessageToTrace(         { boc: bocExternalMessage },         { ignore_signature_check: true } // Ignore signature for execute message from other account     ); если коротко: у них есть body, дальше они создают трансфер, засовывают его boc externalMessage и всё работает у меня есть готовый рабочий body, но вот дальше, я думаю, я делаю какую-то ошибку, но не понимаю где body = asyncio.run(get_swap_data("EQCwe0g3cEFhsz4VK5nrtOZBkFeSISxhCVUqvON7Im__SOON",router_address))     external_message = Contract.create_external_msg(         src=TON_WALLET_ADDRESS,         dest=recipient_address,         body=body)     boc_message = external_message.serialize().to_boc() может, что сразу создаю externalMessage без создания transfer транзакции? но как её создать? (reply to 290428)

Алексей: ну я же скинул ссылку на гист выше (reply to 290429)

Daniil: да, я оттуда взял код создания externalMessage в boc формате (reply to 290430)

Алексей: тут бред написан, посмотрите как я создаю экстернал, его можно хоть в тонапи отправит и проэмулировать, хоть в блокчейн отправить (reply to 290429)

Михаил: Приветствую!  Нужна консультация:  Есть смарт-контракт; Смарт-контракту принадлежит кошелёк с Jetton; Смарт-контракт получает средства ТОН  Из этих средств Смарт-контракт должен пополнить пул ликвидности TON/jetton  Каким методом это правильно сделать?    На настоящий момент у нас получилось следующее - монеты доходят до router, а он их возвращает обратно

rends_east: если вы про роутер стонфи, то проверьте в первую очередь второй jetton wallet, который вы шлете вместе с жеттонами (reply to 290436)

Daniil: спасибо большое, сделал по вашему примеру, всё сработало (reply to 290432)

Михаил: Да, роутер стонфи  С жетонами шлём тон.

Михаил: Уточните пожалуйста что имели в виду?   Адрес кошелька передаваемый с жетонами? (reply to 290437)

Viacheslav: привет. а как указать в js пустой response_address?   чтобы не отправлялся excess, а только transfer_notification

&rey: Поставить null. (reply to 290442)

Максимка: С помощью какого API можно вытащить из токена его холдеров в виде адрес-колво токена?

X1ag: tonapi (reply to 290445)

Максимка: а метод, не подскажешь? (reply to 290446)

X1ag: https://tonapi.io/v2/jettons/{address}/holders (reply to 290447)

Максимка: Спасибки, сейчас буду пробовать ❤️ (reply to 290448)

Daniil: не знаю, куда, кому написать, поэтому скину здесь, передайте пацанам из библиотеки tonutils чтобы поправили одну вещь в библиотеке есть возможность взять STON.fi router и получить данные для свапа ✅JETTON -> TON работает: to, value, body = await stonfi_router.get_swap_jetton_to_ton_tx_params(             offer_jetton_address=Address(token_in_address),             receiver_address=wallet.address,             user_wallet_address=wallet.address,             offer_amount=to_nano(coin_amount, token_in_decimals),             min_ask_amount=min_ask_amount,             refund_address=wallet.address,         ) ✅JETTON -> JETTON работает: to, value, body = await stonfi_router.get_swap_jetton_to_jetton_tx_params(             offer_jetton_address=Address(token_in_address),             ask_jetton_address=Address(token_out_address),             receiver_address=wallet.address,             user_wallet_address=wallet.address,             offer_amount=to_nano(coin_amount, token_in_decimals),             min_ask_amount=min_ask_amount,             refund_address=wallet.address,         ) ❌TON -> JETTON не работает: to, value, body = await stonfi_router.get_swap_ton_to_jetton_tx_params(             offer_jetton_address=Address(token_in_address),             receiver_address=wallet.address,             user_wallet_address=wallet.address,             offer_amount=to_nano(coin_amount, token_in_decimals),             min_ask_amount=min_ask_amount,             refund_address=wallet.address,         ) если в offer_jetton_address (мы же ТОН как оффер используем) использовать EQAAAA.. адрес ТОНа, то ошибка no entity. Если сюда вставить адрес монеты, то всё ок. Думаю, надо название offer_jetton_address поменять на ask_jetton_address

Namon: https://github.com/nessshon/tonutils/issues (reply to 290450)

Emil: wallet = WalletV5R1.from_private_key(client=self.client, private_key=bytes.fromhex(private_key)) message = wallet.create_wallet_internal_message(destination=Address(txn['to_address']), value=int(10**9 * float(txn['amount'])), body=f"{txn['amount']}") signed = wallet.create_signed_internal_msg(messages=[message], seqno=txn['seqno']) return signed.to_boc().hex()

Emil: 401, message='illegal base32 data at input byte 1', ur

Emil: tx_id = asyncio.run(self.client.send_message(signed_tx_hex))

Emil: как мнне публиковать свои код ?

Андрей: Ребята, всем привет

Андрей: Задам возможно глупый вопрос, не обессудьте, стоит задача разработать на ТОН в игру подвязку NFT, только неделю пытаюсь разобраться в чтиве, нужен пример-шаблон на Tact. До этого разрабатывал смарты на Solidity (Etherium) и C++ (EOS/WAX)/ Посоветуйте линки, FunC времени нет разбирать. Извините если не по адресу

Zaidu: Hello everyone does anyone have a solution to a problem like the one in the photo.  Anyone willing to collaborate with me on solving this issue.

X1ag: Its a RU tondev chat. Pls send your message in @tondev_eng (reply to 290476)

Namon: Оно точно возвращает bigint, а не Promise<bigint>?

Namon: Видимо ошибка исправлена...

X1ag: да, исправил, спасибо) (reply to 290480)

User: Да (reply to 290482)

Konstantin: добрый вечер

Konstantin: TypeError: ReactSharedInternals is undefined     requireReactJsxRuntime_development http://localhost:5173/node_modules/.vite/deps/@tonconnect_ui-react.js?v=2f7651f1:18623     requireReactJsxRuntime_development http://localhost:5173/node_modules/.vite/deps/@tonconnect_ui-react.js?v=2f7651f1:19256     <anonymous> вылетает такая ошибка при попытке подключить виджет подключения кошелька

Konstantin: кто то сталкивался с подобным?

Konstantin: использовал код

Дмитрий: tact-lang.org (reply to 290472)

Андрей: спасибо (reply to 290491)

Viacheslav: привет. Как в тестах в blueprint сдвинут время на определенный timestamp?

/B4ckSl4sh\: blockchain.now = x (reply to 290504)

rends_east: Но советую лучше выравнивать таймстемпы относительно уже совершенных транзакций То есть условно  blockchain.now = result.transactions[1].now (reply to 290504)

Viacheslav: я тестирую стейкинг. Вернее unstake. так что приходится двигать время вперед..

— 2025-02-16 —

TeleDev: всем привет! подскажите, пожалуйста, как fragment, возможно, хэширует данные получателя?  ?recipient=2b1JUoV8uBEtrOrHVSRlgUGB2jORl7jRD1vtZcq8R1E

наз: всем ку, подскажите правильно ли тут запаковываются и распаковываются значения? именно послдение два   const forwardPayload = beginCell().storeUint(315, 10).endCell()   ;; jetton_minter.fc int either_forward_payload = in_msg_body~load_bool();         slice forward_payload = either_forward_payload ? in_msg_body~load_ref().begin_parse() : in_msg_body;          cell master_msg = begin_cell()             .store_uint(op::internal_transfer, 32)             .store_uint(query_id, 64)             .store_coins(jetton_amount)             .store_slice(owner)             .store_slice(owner)             .store_coins(3000000)             .store_slice(forward_payload)             .end_cell();   ;; jetton_wallet.fc () receive_tokens(slice in_msg_body, slice sender_address, int my_ton_balance, int fwd_fee, int msg_value) impure {     load_data();      int query_id = in_msg_body~load_uint(64);     int jetton_amount = in_msg_body~load_coins();      balance += jetton_amount;      slice from_address = in_msg_body~load_msg_addr();     slice response_address = in_msg_body~load_msg_addr();     throw_unless(707, equal_slices_bits(jetton_minter, sender_address) | equal_slices_bits(calculate_user_jetton_wallet_address(from_address, jetton_minter, jetton_wallet_code), sender_address));          int forward_ton_amount = in_msg_body~load_coins();      if (equal_slices_bits(sender_address, jetton_minter)) {         var = in_msg_body~load_uint(10);         ts = now();     }

User<7225482762>: Здравствуйте. Хотелось бы увидеть полный список правил группы, а именно размещения студии по разработке(если это возможно)

User<7225482762>: Также набираем разработчиков TMA заказы есть всегда, объёма работы хватит любому, закупаем постоянно рекламу

Vladimir: https://telegra.ph/Pravila-TON-Dev-Chat-RU-04-29 (reply to 290533)

Montana: Привет, разрабатываю API, хотел бы знать может ли на практике circulating_supply какой либо из криптовалют не являться числом с плавающей запятой а быть, к примеру, null?

Denis: Циркулейшен суплай вообще не является числом с плавающей запятой

Darkwing: Здравствуйте! Кто-нибудь может подсказать, где взять можно взять "эталонные" jetton контракты, которые написаны на языке Tact? Нигде не могу найти

&rey: Эталонные вообще брать не стоит, они обычно по газу так себе. (reply to 290542)

Darkwing: А как лучше поступить? Учусь деплоить один контракт из другого на языке Tact Хотел сделать контракт, который деплоит jetton, подскажите куда лучше копать? Может быть можно как-то взять контракт на языке FunC и через Tact его задеплоить? Буду очень благодарен (reply to 290543)

&rey: Можно примерно что угодно, если у вас ячейка с кодом есть. А так, посмотрите https://tact-by-example.org/all. (reply to 290544)

Darkwing: Да, примеры видел, с самим деплоем разобрался, просто хотел сделать это с каким-то более сложным контрактом, решил начать с jetton, но примеры которые находил почему-то не работают нормально В любом случае спасибо! (reply to 290545)

наз: а тут получается ордер это реф с мапой, где каждый ключ длинной 8 бит, а каждое значение это еще один реф, в котором первые 8 бит мод, а следующее еще один реф с сообщение которое должен будет исполнить мультисиг после op::approve?  https://github.com/ton-blockchain/multisig-contract-v2/blob/9a4b13df6345c9c4068ca725e434b40f9ea5ca28/contracts/multisig.tlb#L56

Grigoriy: привет, а lt транзакции всегда уникальна и увеличивается после каждой транзакции?

Sergey: Всем привет! Скажите, плз, может кто-то интегрировал в Next.js либу “@tonconnect/ui-react” ?

Oleg: Интегрировал это в смысле использовал? (reply to 290576)

Sergey: Да) (reply to 290579)

Oleg: 99% присутствующих пользовались, я думаю

Sergey: Ловлю ошибку: index.mjs:599 Uncaught (in promise) TonConnectError: [TON_CONNECT_SDK_ERROR] TonConnectError Operation aborted В tonconnect-manifest в урл пробовал прописавать и localhost:3000, и через ngrok создавал. Из-за этого ли ловлю ошибку? Или же лучше залить на условный гитхаб пэйджэс, чтобы пофиксить эту ошибку?

Oleg: Я всегда манифест хостил, не пробовал на локалхосте. Но тут ошибка слишком абстрактная, хз связано ли с манифестом (reply to 290582)

Sergey: Да, понимаю, что абстрактная ) Вроде, все по документации сделал. Пока идей больше нет , почему не хочет работать… Попробую захостить ща (reply to 290583)

Montana: integer? (reply to 290540)

Игорь: Привет всем, нужен человек с опытом nodejs и работавший с nft на ton

Дмитрий: Да. В тон сапплай - это int и decimals. Чтобы получить сапплай - просто раздели int на 10^decimals. В тон сапплай может быть 0 или больше. Если жетон по стандартам выполнен (reply to 290585)

Montana: Благодарю (reply to 290590)

🏆: есть ли какие-то хорошие практики построение публикация блокчейн пруфов? например, внутри dapp есть некоторые транзакции, которые добавляются в блоки и нужно криптографические пруфы публиковать раз определённый момент времени.  кустарным образом, наверное, нужно брать хеш, от этих блоков и публиковать его в виде сообщения смарт-контракта самому себе. но сомневаюсь, что это хорошая практика и явно есть что-то универсальней.  в идеале, конечно найти какой-то инструмент, чтобы свой чейн публиковать, но желательно, чтобы не было overkill.

— 2025-02-17 —

Dimer: Решили, что  выбрать? Похожая ситуация (reply to 251233)

(⁠✷⁠‿⁠✷⁠): Подскажет кто-нибудь, пожалуйста.  Tonconnect UI результатом отправки транзакции возвращает boc. Как с помощью этого boc найти транзакцию в сети?  Что нужно с ним сделать или что достать из него.

Tim: В тонапи вызвать метод гет трейс (reply to 290602)

Daniil: Да. Первый вариант лучше, т.к. используя враппер мы стандартизируем общение со смартконтрактом и все необходимые функции для этого храняться в одном месте.  Делать запрос напрямую чере TonConnect можно, но по опыту, если стаеовиться слишком много транзакций, в разных частях приложения, то их сложнее менеджить и в случае необходимости изменять (reply to 290595)

Александр: Добрый день! Баунсятся свопы на транзакциях жеттон -> тон, никак не могу разобраться в чем дело...  хэш транзы: ab3885f5a038b7262eafb3919c2d0e39f3a2fe5f4680475e8666d625a6e930aa

Оскар: месседж уходит на аккаунт без стейта, так же не понимаю почему при свопе тон в жетон отправляете жетон трансфер (reply to 290608)

Александр: опечатался, жеттон в тон хочу) Спасибо! (reply to 290609)

Оскар: тогда первый вариант - месседж уходит на жетон воллет, который не задеплоен, а соответственно баланс 0 (reply to 290610)

Александр: почему-то в интерфейсе Sender был undefined адрес, спасибо за помощь! (reply to 290611)

Mr: Всем привет! Вопрос такой, если я ставлю при переводе жеттона PAY_GAS_SEPARATELY, то мне надо прикладывать какой либо amount?

Mr: так же вопрос еще такой:  если я хочу ограничить комиссию при трансфере жетна, например в 0.04 тона и остаток возвращался мне обратно?

TeleDev: ? (reply to 290519)

Оскар: у фрагмента и надо спрашивать, но сомневаюсь что вам кто-то ответит - это не публичная информация (reply to 290630)

TeleDev: просто интересно, как это делает split.tg и другие подобные сайты (reply to 290631)

Оскар: могу дать подсказку - никто ничего сам не хэширует (reply to 290632)

Status🆓: Ребзи,кто нибудь может пробить @SolidityPhreak

Viacheslav: есть ли какой нибудь адрес из одинаковых букв, который не использутся? ну как в эфире нулевой адрес или 0xEeeeeeee

Дмитрий: EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c (reply to 290644)

Дмитрий: Нулевой адрес в тон

Status🆓: За что? (reply to 290649)

&rey: Не относится к разработке (теме чата) и в большинстве интерпретаций нарушает закон. Не то чтобы кидать было допустимо, но разыскивать человека за этим от этого лучше не становится. Да и пруфов-то тоже пока нет. (reply to 290650)

(⁠✷⁠‿⁠✷⁠): Есть, кто может разбанить аккаунт? Человек не увидел сообщение о проверки на бота и начал листать вверх, а потом через минуту ему бан прилетел

Андрей: https://t.me/tondev/241992 (reply to 290664)

(⁠✷⁠‿⁠✷⁠): Спасибо (reply to 290665)

(⁠✷⁠‿⁠✷⁠): А как получить hash из BOC (reply to 290604)

Tim: Cell.fromBase64(boc).hash().toString('hex') (reply to 290668)

(⁠✷⁠‿⁠✷⁠): Работает, спасибо! (reply to 290669)

kalloc: А за что мой вопрос про обработку баунсов удалили???

Оскар: это бот делает, у него там прилично всяких триггер-слов, поэтому напиши еще раз, подумав что может затриггерить его (reply to 290684)

kalloc: Повторяю вопрос: как делают upsert на создание дочерних аккаунтов-состояний.  Например: Wallet1 вызывает А А хранит состояние для Wallet1 в B1 A запрашивает состояние по Wallet1 у B1. Если B1 нет, то получает баунс и тут могло быть  место для деплоя b1, но из баунса достать оригинальное сообщение нельзя.

kalloc: Попытка номер два

Dmitriy: Нужно отправлять state_init в сообщении контракту B, в таком случае он задеплоится, если не существовал, и сразу же обработает полученное сообщение В качестве референса можно посмотреть как это в jetton wallet контракте сделано (reply to 290688)

Alexander: Ох, ты вообще ничего не прочел из того что я писал тебе? (reply to 290690)

Не в сети: Прочел (reply to 290692)

kalloc: Да, можно. О, про это забыл, Спасибо 🙏🏼 (reply to 290691)

kalloc: Я инициализацию делаю так, но можно и как вызов использовать

kalloc: Единственное наверное такой вызов дороже будет

kalloc: Но все же, как всякие ролбэки делают? Если баунс только 256 бит. Конкретно мой случай решается деплой сообщением всегда.

Tim: Без баунсов (reply to 290697)

Tim: Вот мы и дожили… (reply to 290700)

Не в сети: Угу (reply to 290701)

kalloc: В случае успеха, по аналогии с promise.resolve (получение колбэка) запись данных, а не откат при баунсе. Так? (reply to 290699)

Tim: Не так. Надо откатить - отправляешь запись об откате.

toolyaan: Подскажите когда сбт за курс на степике придет?

Nerses: Я работаю над DeFi-проектом для свопов, в котором пользователь должен оплачивать все комиссии, включая комиссию за хранение. Однако возникает проблема, когда пользователь хочет обменять Toncoin: как определить точную сумму, которую он должен отправить, и как обработать излишек, чтобы контракт сохранял только необходимую сумму.  Я пытался изучить StonFi и Dedust, но не нашел ничего полезного. Возможно, у кого-то есть опыт в этом вопросе или подходящее решение?

Ivan: Документацию всю прочитали? https://docs.ton.org/v3/documentation/smart-contracts/transaction-fees/forward-fees (reply to 290710)

Дмитрий: Можно отправлять немного больше, чем требуется и в сообщении записывать сколько нужно обменять  Условно пользователь отправил 11 TON с параметром «to_swap: 10”. Остаток в итоге возвращать пользователю (reply to 290710)

Nerses: Я использовал этот подход, но небольшая сумма также вычитается из значения. Можете ли вы порекомендовать какой-нибудь проект, который также решает такую ситуацию? (reply to 290713)

Дмитрий: getgems.io. Там конечно немного другие процессы идут, но в целом примерно так же всё работает. Пользователь отправляет больше, чем требуется для покрытия комиссий (reply to 290716)

Дмитрий: Ну я думаю, что dedust и STONfi так же работают, но сейчас не хочу в эксплорер лезть

Nerses: Спасибо! (reply to 290717)

ALena Govaleva: Ребята, мы работаем над проектом в экосистеме TON 💎 Сейчас нам нужно как можно больше тестовых монет. Кто знает, как их можно получить в большом количестве?

Max: tonconsole.com (reply to 290727)

🐍Yaroo🐍 ("⁧(": import { compile } from "@ton/blueprint"; раньше можно было так и библиотека эта ставилась, сейчас ошибки которые даже не прочитать   а в @blueprintjs/core нынешнем нету такой функции

Namon: @blueprintjs/core никак не относится к TON, актуальная библиотека — @ton/blueprint (reply to 290730)

Viacheslav: как мне в func контракте сравнить адрес и slice? а то у меня получается строка и адрес.. slice jetton_wallet = orderData~load_msg_addr(); slice tonAddress = "EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c";             ifnot(equal_slices_bits(jetton_wallet,tonAddress)) {

Viacheslav: и у меня всегда они не равны, даже если я передаю в контракт именно EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c

🐍Yaroo🐍 ("⁧(": npm add @ton/blueprint (reply to 290731)

SweetJesus: адрес это не просто строка (reply to 290732)

Oleg: Этот формат для кожаных мешков придуман, контракт такого не понимает. Данный адрес представляет из себя все нули (плюс флаги и контрольная сумма) (reply to 290732)

/B4ckSl4sh\: "адрес контракта"a (reply to 290732)

/B4ckSl4sh\: Получите слайс равный такому адресу (reply to 290740)

sorry 4 That: Привет, может быть ктото работал здесь с HD кошельками. Я пытаюсь написать реализацию  import { ethers } from 'ethers'; import { generateMnemonic, mnemonicToSeedSync } from 'bip39'; import { Keypair } from '@solana/web3.js'; import { HDNode } from '@ethersproject/hdnode'; import * as ed25519 from 'ed25519-hd-key'; import { WalletContractV5R1 } from '@ton/ton'; import { mnemonicToWalletKey } from '@ton/crypto';  // Function to derive TON Keeper-compatible keys async function deriveTonKeysV2(mnemonic: string) {   // Derive the key pair from the mnemonic using @ton/crypto   const keyPair = await mnemonicToWalletKey(mnemonic.split(' '));    // Create a v5 wallet using the derived public key   const wallet = WalletContractV5R1.create({     workchain: 0,     publicKey: keyPair.publicKey,   });    return {     privateKey: Buffer.from(keyPair.secretKey).toString('hex'),     publicKey: Buffer.from(keyPair.publicKey).toString('hex'),     address: wallet.address.toString(),   }; }  // Function to generate wallets from a mnemonic async function generateWallets(mnemonic?: string) {   if (!mnemonic) {     mnemonic = generateMnemonic(256); // 24 words   }    console.log('\n🔑 Seed Phrase:', mnemonic);    // Convert mnemonic to seed   const seed = mnemonicToSeedSync(mnemonic);    // 🔹 EVM (Ethereum) Wallet   const evmNode = HDNode.fromSeed(seed).derivePath("m/44'/60'/0'/0/0");   const evmWallet = new ethers.Wallet(evmNode.privateKey);   console.log('\n⚡ Ethereum (EVM) Wallet:');   console.log('Private Key:', evmWallet.privateKey);   console.log('Address:', evmWallet.address);    // 🔹 Solana Wallet (Phantom-Compatible)   const derivedSeed = ed25519.derivePath("m/44'/501'/0'/0'", seed.toString('hex'));   const solanaKeypair = Keypair.fromSeed(derivedSeed.key);   console.log('\n⚡ Solana Wallet:');   console.log('Private Key:', Buffer.from(solanaKeypair.secretKey).toString('hex'));   console.log('Address:', solanaKeypair.publicKey.toBase58());    // 🔹 TON Wallet (TON Keeper-Compatible)   const tonWallet = await deriveTonKeysV2(mnemonic);   console.log('\n⚡ TON Wallet:');   console.log('Private Key:', tonWallet.privateKey);   console.log('Public Key:', tonWallet.publicKey);   console.log('Address:', tonWallet.address);    return {     mnemonic,     evm: {       privateKey: evmWallet.privateKey,       address: evmWallet.address,     },     solana: {       privateKey: Buffer.from(solanaKeypair.secretKey).toString('hex'),       address: solanaKeypair.publicKey.toBase58(),     },     ton: {       privateKey: tonWallet.privateKey,       publicKey: tonWallet.publicKey,       address: tonWallet.address,     },   }; }  export default generateWallets;   Создаю мнемонику и 3 кошелька, евм, солана и тон. Проверяя через траст волет и фантом, евм и солана нормально работают, создаются правильные кошельки. А тон создаётся непонятно какой. Беру мнемонику и проверяю через траст волет, тонкипер, mytonwallet, кошельки вообще не совпадают, хотя поидее правильно создаю в5. Может кто подсказать где здесь ошибка?

Dmitry | backend4you.ton: в3 и в5 не совпадут, на то и разные версии. у тона чуть другой метод генерации кошелька из мнемоники, так что траст "не попадает" - "это норма". wallet.ton.org делает в3 - сравните свой код  с ним. (reply to 290743)

sorry 4 That: Так я в5 создаю же. И я проверил что у траста и тонкипера по одной мнемонике один и тот же кошелёк(в трасте только в4, но это не важно). А так я проверил, создаю мнемонику и конверчу её, такая же идея (reply to 290744)

Dmitry | backend4you.ton: а, у вас везде в5... сорри.

муха: А как проверить, что адресс именно кошелек какой нибудь, а не токен, нфт, или нфт коллекция, или прост контракт какой нибудь

User: По коду контракта (reply to 290753)

муха: хм, а есть где то список всех кодов контрактов - от 1в1р до 5в1р? (reply to 290754)

User: В tonviewer можете посмотреть, просто вставьте адрес нужного контракта (reply to 290755)

муха: А вот еще вопрос, в бд что лучше хранить - юзерфрендли адресс, или HEX?  Учитывая что я работаю только с мейннетом

Oleg: И то, и другое предназначено для чтения человеком, а для оптимального хранения в базе лучше всего подходит бинарный формат (reply to 290757)

Гурий: Всем привет, такой вопрос кто то сталкивался с таким на fragment, в общем транзакция в блокчейне успешна и до адреса fragment все дошло, но telegram stars не пришли

— 2025-02-18 —

Владислав: Было, но пришли через 2 часа. Какие-то баги были у фрагмента (reply to 290759)

Гурий: Давно было? (reply to 290761)

Владислав: Месяца 2 назад +- (reply to 290762)

Гурий: Ну прошло 6 часов, ничего нет

Гурий: Куда писать хз

Victor: На оф сайте покупал ? Также возможно неправильно ввел свой username (я так один раз ошибся) (reply to 290764)

kwinkich: всем привет! Подскажите пожалуйста, как при отправке транзакции через tonconnect указать комментарий к платежу? (исходя из TransactionMessage, мне кажется что так сделать нельзя) либо подскажите другие варианты, как можно на фронте упаковать и отправить транзакцию с комментарием

Victor: В tonconnect можно засунуть body и в него используя boc положи комментарий.  https://docs.ton.org/v3/guidelines/ton-connect/guidelines/preparing-messages#transfer-with-a-comment (reply to 290774)

kwinkich: точно, спасибо большое, совсем забыл про это (reply to 290776)

Denis: Это да. Но если выбирать между хекс и бейз64 то это без вариантов хекс в нижнем регистре(не забываем всегда нормализовать через toLower() (reply to 290758)

Гурий: Да, ошибки нет, да и в целом такого перевода нет в истории отправки звёзд на Fragment (reply to 290773)

W.E.I.J.: Добрый вечер Подскажите, мемпул tonconsole по-прежнему слушает только транзы тонкипера?

Michael 🐍: Всем привет! Нужен человек, который поможет имплементировать оплату в юсдт в контракт.  Логика контракта написана на tact с учетом оплаты в тоне, нужно будет просто переписать   По условиям пишите в личные сообщения

Lesha: Всем привет, я подготовил 1000 NFT и 1000 json файлов с атрибутами, все NFT уже загружены в ipfs, встал вопрос о том как ее массово выложить на GetGems, найдись человек пожалуйста!

Victor: Пачками минть nft и также пачками выставляй на продажу. Готовься, что много денег на комиссии уйдет (reply to 290816)

Igor: насколько я понимаю, через смарконтракт нужно выкладывать (reply to 290816)

Igor: но возможно можно создать коллекцию на гетгеймс, получить контракт и дальше скриптом через тонапи создать остальные элементы, но я таким не занимался, может поправят тут знающие меня (reply to 290828)

(⁠✷⁠‿⁠✷⁠): Можно в нужном количестве отправить сообщение на минт (reply to 290829)

Molodoy Abuzer 3: Подскажите плиз, в доке про highload v3 говориться что queryId желательно монотонно увеличивать, ибо потребуется меньше ячеек для их хранения потому и комса меньше будет. Однако я проверил, отправив с queryId=0 и queryId=8192*1023, комиссия получилась одинаковая. Может я что-то не так понял из документации?

&rey: Подсказка: если вы только один queryId используете, вам хайлоад сам не нужен в принципе. (reply to 290836)

Molodoy Abuzer 3: Не совсем понял. Что значит только один queryId? (reply to 290837)

&rey: Ну, за один-два блока один запрос на вывод, в смысле. (reply to 290838)

Molodoy Abuzer 3: Понял, но как это связано с queryId? Если послать 10 экстерналов одновременно, газ будет больше? (reply to 290840)

Molodoy Abuzer 3: Не вижу логики

Dmitry | backend4you.ton: Это надо внутри кода смотреть, и для случая когда вы много транз отправляете, и много пачек с много транз

(✿◡‿◡): заказ на спектейт транзакций, отпишите

Molodoy Abuzer 3: Вопрос больше стоит в том насколько действительно рационально придерживаться монотонного возрастания queryId. Хотелось бы как-то протестировать как бы это работало в реальном мире. В тестнете отправил 5 батчей по 5 транзакций - газ точно такой же как когда отправлял один батч. Не совсем понимаю как связано количество экстерналов на ск, если в рамках каждой транзы комиссия увеличивается только потому что на проверку словарей queries и old_queries требуется держать больше ячеек (reply to 290844)

Dmitry | backend4you.ton: А вы 200 по 250 отправьте. А то ваши пять - это хайлоад даже не нагрелся )

(✿◡‿◡): дам заказ на отслеживание транзакций в блокчейне и отправку ответа о успешных, плачу гуд, тз в лс

Molodoy Abuzer 3: Ну такой нагрузки даже на цексах нет. Для параллельной обработки можно и разные ск уже использовать раз на то пошло (reply to 290847)

Андрей: одного сообщения было достаточно, не нужно спамить (reply to 290848)

Василий: А сколько таймаут? Возможно у вас словарь уже очистился.  Дело в том, что чем больше элементов в словаре, тем больше потребляется газа при обращении к нему. Потому что словарь на самом деле prefix trie, а не  Hashmap.  На старом хайлоаде, где каждый статус отправки хранился в отдельном элементе словаря, потребление газа доходило до абсурдных значений.  Если сомневаетесь, добавьте в стейт тестового контракта словарь на 100К элементов, а затем обратитесь к нему, например в get методе. (reply to 290836)

Андрей: Можно посмотреть на кошелек wallet и вспомнить почему они в какой то момент не смогли отправлять транзакции (а потом наконец то смогли) (reply to 290850)

Vlad: Доброго всем вечера) Можете подсказать по фрагменту? При отмене прямого предложения овнеру юзернейма, ton возвращается обратно на кошелёк?

Gusein: Привет всем!  Есть тут разработчики TMA сильные в DeFi? Отпишитесь в лс 🙏🏻

муха: а как через лайт получить привязанный адресс к домену? к примеру blabla.ton , и он вернул мне адресс нужный  (и наоборот)

sd: ты не отправляешь оффер, ты отправляешь уведомление о намерении. овнеру просто приходит смска в телеграме, что ты предлагаешь ему выставить юзернейм на аукцион. уплаченный за эту смску 1 тон не возвращается (reply to 290855)

наз: всем ку, я ведь правильно понимаю что функции load_*, возвращают остаток от слайса и то что было выгружено, а preload_* возвращают то что было выгружено, но срез остается неизменным?

муха: а через тонцентр можно получить адресс по домену?

Vladimir: Уже можно. (reply to 290862)

Dmitry | backend4you.ton: не знаю есть ли там встроенный resolve, был в tonlib если нет, то порядок действий: * адрес коллекции можно внести в параметры приложения * у него дергаете гет-метод, отдавая blabla и в ответ получите адрес nft домена * идете к этому адресу и дергаете его dns записи, вас интересует запись типа wallet  имейте в виду, что владелец nft домена не обязан свопадать с адресом в wallet записи (reply to 290858)

наз: а get_precompiled_gas_consumption() это плата за газ которая взимается во время компьют фазы независимо от того что в ней происходит?

&rey: Не адрес коллекции, а адрес Config, корневой DNS-резолвер там. В противном случае нельзя будет обработать поддомены (которые .dol****.t.me или ****.ton.resolve-contract.ton). (reply to 290864)

муха: хм, что то чисто домен .ton не принимает  {   "error": "failed to decode: schema: error converting value for index 0 of \"address\"" } (reply to 290863)

муха: А какой адрес Config? (reply to 290866)

&rey: -1:5555555555555555555555555555555555555555555555555555555555555555 (хотя и лайт, и тонцентр умеют отдавать конкретный параметр, а здесь важен https://tonviewer.com/config#4). (reply to 290869)

X1ag: подскажите, правильно ли я понимаю логику работы минта?  У меня есть контракт, через который можно минтить токены, получается что транзакции будут выглядеть следующим образом:  Кошелек юзера -> контракт -> минтер -> жеттон валлет юзера?

&rey: этот называют "жетон мастером" (reply to 290871)

RootTon: есть еще   юзер -> минтер -> жетон валет (без фабрики) (reply to 290871)

X1ag: благодарю

(⁠✷⁠‿⁠✷⁠): Как проверить, что NFT принадлежит нужной коллекции на уровне смарт контракта? Если ReportStaticData можно подделать.  На смарт-контракте коллекции нет возможности получить адрес NFT по индексу с помощью сообщения

&rey: Список коллекций заранее известен? (reply to 290875)

(⁠✷⁠‿⁠✷⁠): Адрес коллекции заранее известен

(⁠✷⁠‿⁠✷⁠): Можно только через get функцию проверить, но ведь это уже не на уровне смарт-контракта

Андрей: Ты можешь вместо ~ поставить точку и результат будет такой же (reply to 290860)

&rey: Значит, заранее известны код и данные(на любой момент) коллекции. Запишите их в контракт; перевод нфт будет обязан указать индекс, после чего RUNVM сделаете. (reply to 290877)

наз: типа если я сделаю .preload_*, то он также мне вернет остаток от слайса и то что я вытащил? (reply to 290879)

Андрей: .load_ не изменит (reply to 290881)

(⁠✷⁠‿⁠✷⁠): Типо сделать init.code и init.data сразу? Просто это лишний код  А токен можно проверить без этого

наз: вопрос не в этом был (reply to 290882)

Андрей: Не я понимаю но можно и так, но в целом правильно (reply to 290884)

(⁠✷⁠‿⁠✷⁠): Хотя у них тот же принцип, мастер контракт и контракт кошелька (reply to 290883)

&rey: Разница в том, что адрес контракту бесполезен, а вот ячейки кода и данных, положенные внутрь, позволяют вызвать любой метод. (reply to 290883)

X1ag: Тогда я не понимаю, почему тест падает с ошибкой.  expect(mintResult.transactions).toHaveTransaction({             from: liqPool.address,             to: jettonMinter.address,             success: true         });  То же самое проверял в тестнете - все ок(только excess не исполняется, но это норм)  Вот лог ошибки:  {         lt: 5000000n,         now: 1739905154,         outMessagesCount: 0,         oldStatus: 'uninitialized',         endStatus: 'uninitialized',         totalFees: 0n,         from: EQA76Muph9myvWX2yoNVkl5gINFQd7WSJ3UWhyflUHUTZmi6,         to: EQCwZCt-EnJk7jPoKSay92KrSvkmBPnmmuMRG3BVKC6KS-ru,         on: EQCwZCt-EnJk7jPoKSay92KrSvkmBPnmmuMRG3BVKC6KS-ru,         value: 147126088n,         ec: [],         body: x{1674B0A0000000000000007B8008D0D4580CD8F09522BE7C0390A7A632BDA4A99291C435B767C95367EBE78E9AE20208106B3FF1_},         inMessageBounced: false,         inMessageBounceable: false,         op: 376746144,         initData: undefined,         initCode: undefined,         deploy: false,         aborted: true,         destroyed: false,         exitCode: undefined,         actionResultCode: undefined,         success: false       }     ] to contain a transaction that matches pattern {       from: EQA76Muph9myvWX2yoNVkl5gINFQd7WSJ3UWhyflUHUTZmi6,       to: EQCwZCt-EnJk7jPoKSay92KrSvkmBPnmmuMRG3BVKC6KS-ru,       success: true     }  Вот на это сообщение должен был быть reply https://t.me/tondev/290871

&rey: Вы забыли себе jettonMinter завести в локальную эмуляцию. (reply to 290889)

X1ag: Если ничего не путаю, то это он jettonMinter = blockchain.openContract(             await JettonMinter.createFromConfig(                 {                     admin: deployer.address,                     content: content,                     wallet_code: jetton_wallet_code,                 },                 minter_code,             ),         );  Вот так деплою его const deployResultMinter = await jettonMinter.sendDeploy(deployer.getSender(), toNano('0.05'));         expect(deployResultMinter.transactions).toHaveTransaction({             from: deployer.address,             to: jettonMinter.address,             deploy: true,         }) (reply to 290891)

(⁠✷⁠‿⁠✷⁠): Не подскажешь, пожалуйста, как code и data запихнуть в initOf на tact?  У меня они изначально в виде строк (reply to 290887)

&rey: Какой initOf? COLLECTION_CODE = cell("te6cck...") COLLECTION_DATA = cell("te6cck...") COLLECTION_ADDR = address("Ef1...")  ну и дальше интринсик написать для вызова RUNVM, примерно как в https://gist.github.com/ProgramCrafter/53fc3a4846397ee5f3f3b25ca3356ab5. (reply to 290894)

X1ag: все, я понял о чем вы говорили. Нужно в каждом отдельном тесте деплоить контракты. Спасибо (reply to 290891)

Ольга: Здравствуйте, как получить монеты TON? На тестнет

Mirka: @testgiver_ton_bot (reply to 290914)

Ольга: Больше надо (reply to 290917)

Vladimir: Можно купить тут https://tonconsole.com/ (reply to 290918)

Vladimir: Сейчас доступно 323 TON. (reply to 290918)

— 2025-02-19 —

KTO: Привет! Как получить init code и init data существующего смарт-контракта, чтобы при contractAddress получался адрес этого смарт-контракта?  Если брать их из вкладки code на tonviewer, то получается другой адрес, т.к data каждый раз обновляется при изменениях смарт-контракта

Andrey: Возможно контракт через vanity был задеплоен, а потом изменен код (reply to 290929)

Grigoriy: Вроде можно найти самое первое сообщение и распарсить его вытащив init  и data (reply to 290929)

KTO: В самом первом сообщении нет init code и init data (reply to 290932)

KTO: Я пробовал создать смарт контракт пустышку и взять его code, data через tonviewer во вкладке code, это тоже не работает (reply to 290931)

Andrey: Такого не может быть, контракт деплоится через входящее сообщение с initState (reply to 290933)

Andrey: Скиньте адрес контракта

Grigoriy: Так вытащить нужно из самого первого сообщение, в нем была отправка init в которой хранится code и data (reply to 290934)

KTO: Я понял, но я же говорю в первом сообщении этого нет (reply to 290937)

Grigoriy: Можете сбросить адрес?

KTO: Адрес транзакции: 62cddedfdff2abd71b43502ef057600faa2d53823933af0e8161d60340d560aa

KTO: Testnet

KTO: Я его пробовал, адрес получается другой

KTO: Ну может я не так делал, но здесь же вроде init. Как я отсюда извлеку code и data? (reply to 290942)

Grigoriy: _ split_depth:(Maybe (## 5)) special:(Maybe TickTock)   code:(Maybe ^Cell) data:(Maybe ^Cell)   library:(Maybe ^Cell) = StateInit;

KTO: Это на FunC?

Grigoriy: Это tlb схема

Denis S: Hi, friends   We are looking one dev to complete our team for TON hackathon.  Please DM me if you interested.

AL Pamblus: address Ton. testnet. toncenter api v2 транзакции.  раньше получал транзакции. сейчас:  { "ok": false, "error": "LITE_SERVER_UNKNOWN: cannot compute block with specified transaction: cannot find block (0,24f26a48f08e0b00) lt=31359145000001: lt not in db", "code": 500 } почему же так?  Изменено:  починил добавив  &to_lt=0&archival=true к api

­😇: Всем ку. А есть сервис для проверки жетона на ханипот в тон?

Sol: Готов принять несколько задач по разработке смарт контрактов

Оскар: https://ludwintor.github.io/honeypot-ton-checker (reply to 290971)

Svαtoωλ‎: а для чего каждую секунду тик ток на конфиг адрессе происходит...

&rey: Чтобы пропозалы валидаторам обновлять. (reply to 290991)

Николай: Ребят, кто может помочь по братски, делаю опенсорсную миниапку, надо через тонапи сделать свап тонов в усдт, есть несолько вопросов по этому поводу. Апи непонятное, ответ искал примеры, все тщетно

Андрей: Имхо довольно странное решение делать тик-токи для системных контрактов, лучше бы изначально сделали на подобии cron (reply to 290992)

X1ag: Всем добрый вечер, подскажите пожалуйста, как можно проверить какой жетон тебе пришел?  Я так понимаю, что transfer_notification срабатывает каждый раз когда приходит ЛЮБОЙ жетон. Как сделать так, чтобы условно только USDT мог приходить - все остальные баунсятся(или вообще не обрабатываются) или нельзя?

Namon: Если с переводом жетона укажут state init, то контракт jetton wallet задеплоится и Вы с этим ничего не сделаете (reply to 291036)

sd: Проверять адрес отправителя уведомления - это должен быть jetton wallet конкретного жетона (reply to 291036)

X1ag: понял, а возможно ли как то проверять пришел ли на контракт USDT или нет?  Например, учет саплая вести в контракте

Namon: Конкретно USDT или все жетоны на кошельке? (reply to 291039)

X1ag: я если я предварительно не знаю адрес отправителя?  UPD: сори, затупил, там же нужен мой жетон валет (reply to 291038)

наз: можно, хранишь код и минтера юсдт у себя, при нотифе расчитываешь адрес своего юсдт жетон валета и смотришь он ли тебе прислал нотиф (reply to 291039)

Namon: Если только USDT, то чекать входящие интерналы на контракт жетон волета usdt и проверять баланс после обработки

X1ag: вот это же самый нормальный вариант, разве нет? (reply to 291042)

Namon: Но на нотификейшены не стоит полагаться, если нужно отслеживать каждую транзакцию, так как он необязателен

наз: есть нюансы, могу слать без нотифа вовсе, или слишком мало к нему прикладывать, тогда не сработает (reply to 291044)

Dmitry | backend4you.ton: transfer-notification это _уведомление_ что вам (уже) пришли какие-то жетоны. вы не можете "запретить" всем подряд присылать вам любое **вно :) вы можете просто все ненужное игнорировать.  пришел правильный жетон (по sender-у нотифтикации) в правильном количестве - что-то делаете. иначе - ничего не делаете. (reply to 291036)

X1ag: "проверять баланс после обработки" - вы имеете ввиду как-то дергать гет метод жетон валлет контракта? (reply to 291043)

Namon: Либо смотреть state, либо через гет метод Но суть одна (reply to 291048)

X1ag: а как я возьму сендера, если transfer_notification приходит мне от jetton валлет моего контракта? (reply to 291047)

Dmitry | backend4you.ton: плюс выше верно сказали - нотификации может и не быть или быть с очень малым газом, что ваш контракт даже не запустит обработку.  вы хотите из контракта обрабатывать приход или оффчейн (из приложения / бэкофиса)?

наз: вместе с ним идет тело, в котором и сендер и жетон эмаунт (reply to 291050)

X1ag: вот да, только полез смотреть tlb) (reply to 291052)

Dmitry | backend4you.ton: вот вы (заранее) знаете адрес своего usdt жетон валлета, и с этим значением сверяете sender-а нотификации. а то любой дурак может вам на контракт присласть сообщение нотифаикации :)  и если сендер сообщения правильный - то в теле этого сообщения поле сендер это реальный отправитель этих жетонов (reply to 291050)

X1ag: ну я делаю что-то типа пула, в аппке юзер нажимает provide и мне нужно принять от него жетоны. Но на этом моменте можно обмануть контракт, закинув другой жетон (reply to 291051)

X1ag: все. Понял, спасибо всем большое! (reply to 291054)

sd: У меня же не дежавю (reply to 289308)

X1ag: )) я просто тлб не посмотрел, думал там другие данные (reply to 291057)

KTO: А ещё есть прикол, когда отправляют Токены через кошелёк на смарт-контракт, то TokenNotification не срабатывает из-за недостатка средств

наз: вот в своей аппке контролируй чтобы хватало на нотиф фвд тон эмаунт и все норм будет (reply to 291055)

sd: Справедливости ради, кошелёк может не знать, сколько нужно приложить тон, чтобы сработал какой-то там контракт. (reply to 291059)

Dmitry | backend4you.ton: или вообще не закинув. или закинув, но спустя большое время Х (ну мало ли. вы уже не ждете, а транзакция пришла) (reply to 291055)

KTO: Я знаю, я просто сказал (reply to 291061)

KTO: Обычно он отправляет 0.000000001 что-то там TON на notify

Namon: 1е-9 (reply to 291064)

Namon: Имхо, если заранее известен жетон и транзакция формируется через свою аппку, то можно не делать нотификейшены, а просто отслеживать транзакции на жетон волете (+ можно юзать query id) Нотификейшен это лишняя трата TON для юзера, и используются они в основном для индексации (что скорее всего не нужно в данном случае)

KTO: Некоторые хотят чисто на смартах вывозить (reply to 291066)

Алексей: ну мы ж ончейн хотим, а не эти оффчейн сервисы (reply to 291066)

Namon: Я видимо пропустил инфу про то, что это ончейн  Тогда да, согласен (reply to 291068)

Серёжа •: Где учиться на разработчика в тон?) в интернете не нашел обучающих программ. Подскажите как начать развиваться в этом направлении?:)

Vladimir: Stepik, пройдите там бесплатные курсы. (reply to 291073)

KTO: Можно как-то вызывать функции из другого смарт-контракта, для которого знаешь init.code init.data в смарт-контракте?  Допустим в первом смарт-контракте есть функция, которая возвращает число Я могу из другого смарт-контракта получить число, вызвав функцию первого смарт-контракта?

&rey: Да. Правда, вернётся значение, соответствующее именно той ячейке с данными, которая у вас есть. см. 53 RUNVM (reply to 291076)

KTO: Т.е можно без таких костылей обойтись? Где нужно заранее написать receive (reply to 291077)

&rey: Да вроде всё то же самое и получится, всё же нормально.  message TonArrived { from: Address } message CustomAction { actions: Cell } asm fun performActions(a: Cell) {     c5 POPCTR }  contract Intermediate {     admin: Address;     receive(msg: CustomAction) {         if (sender() == self.admin) {             performActions(msg.actions);         }     }     receive() {         self.forward(self.admin, TonArrived{from: sender()}.toCell(), false, null);     } } (reply to 291078)

KTO: Я могу написать такой смарт-контракт для любого смарт-контракта, что уже существует, чтобы вызвать его get функции?

KTO: Т.е первый смарт-контракт изначально должен быть сделан так, чтобы у него можно было просматривать get функции?

KTO: Тогда я не понял, каким образом этот код должен иметь возможность получить допустим число из другого смарт-контракта, где есть функция getNumber (reply to 291079)

KTO: Сейчас он выполняет свои функции

&rey: Главная проблема — получить ячейку данных другого контракта. Блокчейн такого интерфейса не даёт. (reply to 291082)

web-assist 🧀: Для любого нет, для своих можно оставить методы для взаимодействия Это будет стоить немного денег, но появится возможность читать данные (reply to 291080)

KTO: Методы для взаимодействия, это такие? (https://t.me/tondev/291078) (reply to 291085)

web-assist 🧀: Да, что то подобное (reply to 291086)

Дмитрий: Так можно просто к мастеру обратиться с запросом кошелька своего. Не обязательно хранить лишние данные в контракте (reply to 291042)

наз: из одного контракта нельзя вызвать гет методы другого контракта (reply to 291088)

Дмитрий: Так это не гет методы, а сообщения

Дмитрий: message(0x2c76b973) ProvideWalletAddress {     query_id: Int as uint64;     owner_address: Address;     include_address: Bool; }  message(0xd1735400) TakeWalletAddress {     query_id: Int as uint64;     wallet_address: Address;     owner_address: Cell?; }

X1ag: разве это не дороже будет?

Дмитрий: Примерно так должны выглядеть по стандарту. Это если что на такте (reply to 291091)

KTO: У мастера ТОКЕНОВ есть такие Ресиверы https://t.me/tondev/291078  Только они называются TakeWalletAddress, ProvideWalletAddress (reply to 291089)

Дмитрий: Почему дороже? 0.01-0.02 тон потратил при деплое, зато место в блокчейне не занимаешь. Имею ввиду не хранишь лишние данные (reply to 291092)

X1ag: а вот на func  if (op == op::provide_wallet_address) {         throw_unless(error::discovery_fee_not_matched, msg_value > fwd_fee + provide_address_gas_consumption);          slice owner_address = in_msg_body~load_msg_addr();         int include_address? = in_msg_body~load_uint(1);          cell included_address = include_address?                 ? begin_cell().store_slice(owner_address).end_cell()                 : null();          var msg = begin_cell()                 .store_msg_flag(msg_flag::bounceable)                 .store_slice(sender_address)                 .store_coins(0)                 .store_msgbody_prefix_slice()                 .store_op(op::take_wallet_address)                 .store_query_id(query_id);          if (is_resolvable?(owner_address)) {             msg = msg.store_slice(calc_user_wallet(owner_address, my_address(), jetton_wallet_code));         } else {             msg = msg.store_uint(0, 2); ;; addr_none         }         send_raw_message(msg.store_maybe_ref(included_address).end_cell(), CARRY_REMAINING_GAS);         return (); (reply to 291093)

наз: я вижу ток у стэйблкоина такую возможность, может если все текущие жетоны будут это поддерживать то да (reply to 291094)

Дмитрий: Все жетоны как раз и поддерживают (reply to 291097)

KTO: Почти у всех токенов в опкодах есть это сообщение (reply to 291097)

X1ag: хм, попробую и такой метод (reply to 291088)

наз: и те что сминченны? (reply to 291098)

Дмитрий: Тот же дедаст работает только через эти сообщения

Алексей: нет же (reply to 291102)

KTO: Дай название любого токена (reply to 291101)

Дмитрий: Ну почему нет, если да? (reply to 291103)

KTO: Даже у НОТ койна есть (reply to 291101)

наз: в любом случае не все существующие это поддерживают, т.к. далеко не все кастомят стандартизированные контракты и даже если поддерживают это все равно дороже чем расчитывать или хранить (reply to 291106)

Дмитрий: minter.ton.org деплоит жетоны с поддержкой стандарта. И все жетоны, которые торгуются на дедасте, это поддерживают (reply to 291108)

KTO: Да уже давно обновляют стандарты (reply to 291108)

KTO: Если уж у НОТ коина это есть

Дмитрий: Это не дороже) Что проще?  -1 раз отправить и получить транзакцию с адресом  -каждый раз проводить вычисления кошелька + хранить лишние данные (reply to 291108)

KTO: У грама даже есть, что тут говорить (reply to 291108)

наз: вы же понимаете что самая дорогая часть транзакции это отправка сообщения? (reply to 291112)

Алексей: Если нужен конкретные примеры жеттонов которые не поддерживают жеттон дискавери, то это DUST и BOLT (reply to 291113)

наз: ну если сидеть и руками считать то возможно, а если написать код который это делает то как сказать (reply to 291112)

Дмитрий: Тогда потратить единовременно ≈0.005 тон- не слишком много) (reply to 291114)

Алексей: Единственный протокол, который использует сейчас жеттон дискавери, который я видел это TONCO

Дмитрий: https://link. excalidraw .com/readonly/GhJ7YhqtFD7A8zcs3oRV

наз: а в чем отличие от того чтобы при деплое потратить столько же но единожды? (reply to 291117)

&rey: Э... а как "1 раз" превратилось в "каждый раз"? Оба метода же кэшируются одинаково. (reply to 291112)

Дмитрий: Мой прокол. Ну в любом случае зачем усложнять, если можно просто отправить транзакцию? Всякие эмуляции проводить и высчитывать адрес

Оскар: как раз таки дороже, отправлять месседжи не самое дешевое удовольствие, а мы уже делаем это два раза (запрос на провайд воллета и выполнение этого запроса с ответом)  так же не понимаю почему мы в первом случае один раз запрашиваем, а во втором начинаем постоянно вычислять, они по итогу выдают один и тот же результат, в чем проблема второго, что нам нужно каждый раз заново вычислять? (reply to 291112)

&rey: Эмуляция строго дешевле выйдет, поддерживает не-TEP-89 жетоны (потому что все учитывают TEP-74, а вот 89 стандарт могут и выкинуть) и синхронно работает. (reply to 291125)

Дмитрий: Всё равно не вижу смысла в этих движениях. Как по мне- проще отправить транзакцию и получить ответ от мастера

KTO: А что вы предложили взамен сообщения? Типо внедрить init мастера токена в смарт-контракт?

наз: это не мы предложили, это стандарт (reply to 291130)

Дмитрий: Это ко мне вопрос?

KTO: Нет (reply to 291132)

KTO: Это нужно для каждого токена искать init, вместо того, чтобы один раз сообщение на получение адреса отправить (reply to 291131)

Дмитрий: Я нигде не видел использования метода, что вы предложили (reply to 291131)

Дмитрий: Посмотрите на работу дедаста. Стон фи вроде так же ищет адрес кошелька (reply to 291121)

Дмитрий: Пробелы убрать надо

наз: да как же, а в жетон минтере? (reply to 291135)

наз: да, так расчитываются абсолютно все адреса в тоне (reply to 291134)

X1ag: Подскажите пожалуйста, что-то типа такого должно быть?   send_provide_wallet_address(query_id, minter_code, jetton_data);   if (op == op::minter::take_wallet) {     slice my_jetton_wallet_addr_from_minter = in_msg_body~load_msg_addr();     save_data(supply,usdt_vault_balance,minter_code,jetton_wallet_code,jetton_data,owner_addr, my_jetton_wallet_from_minter);   } (reply to 291088)

Алексей: Нигде дедаст не использует provide_wallet_address, собственно в вашей диаграмме это и видно (reply to 291136)

Алексей: provide_wallet_address вообще очень специфичный механизм, который лично мне не очень понятно вообще как использовать

Sergey: Может, кому полезно будет: конфликт оказался с библиотекой next-themes, без нее все работает. Что именно в ней блокирует, пока не разобрался, в процессе ) (reply to 290583)

X1ag: если быть честным, то я тоже не очень догоняю (reply to 291143)

X1ag: типа это самому надо кидать транзу, чтобы в сторадж записать адрес

Дмитрий: Там как раз есть поддержка этих сообщений (reply to 291139)

наз: хорошо, а как по вашему жетон минтер расчитвает адрес, который возвращает по op::provide_wallet_address? (reply to 291147)

Дмитрий: Да ладно?? (reply to 291142)

KTO: У вас есть смарт-контракт, вы хотите получать USDT. Вам нужно на MASTER USDT отправить сообщение ProvideWalletAddress от имени смарт-контракта.  Ответом вы получите адрес вашего кошелька, который сохраняете в памяти (TakeWalletAddress).  А дальше принимаете TokenNotification только с вашего адреса (reply to 291146)

Дмитрий: Очень просто. У жетон мастера есть код кошелька. По нему и считает (reply to 291150)

Оскар: а можно узнать кто это рисовал? я буквально только что достал трейсы создания воулта, создание пула и залива ликвидности - нигде жетон-мастер не опрашивается (reply to 291151)

Дмитрий: Я не знаю кто это рисовал, мне скидывали это полгода назад в чате разрабов дедаста. Можете там спросить (reply to 291154)

наз: и у жетон валлета есть свой код, согласно tep-74, так что проще, потратить тоны на два сообщения и две транзакции, или потратить тоны в результате одной транзакции? (reply to 291153)

Оскар: ну могу сказать что вас вполне обманули, если только это не очередная оффчейн магия дедаста, чем они грешат со своим стейкингом и распределением бустов (reply to 291156)

Дмитрий: Подождите, я скоро вернусь со скринами

KTO: А если я хочу менять монеты в дальнейшем (reply to 291157)

Дмитрий: Я просто не понимаю с чем вы спорите. Я сам смотрел как это работает и лазил в эксплорерах

наз: а вы думаете что он один раз расчитывается и больше не расчитывается? (reply to 291160)

Дмитрий: А если жетон изменён? Дедаст всё равно может его залистить если у него есть нужные сообщения (reply to 291157)

Оскар: я могу скинуть 3 трейса деплой воулта деплой пула залив ликвидности  очень хочу чтобы ткнули меня пальцем где идёт запрос жетон воллета с мастера (reply to 291162)

Дмитрий: Давайте, чтоб я не искал

KTO: На DeDust не такого (reply to 291167)

наз: я вас не понимаю, вы мне сказали что все поддерживают provide_wallet_address, оказалось не все, теперь вы говорите что проще отправить сообщение и получить адрес (что конечно же не проще), в чем теперь состоит вопрос (reply to 291166)

KTO: Ну те, кто не поддерживает сами виноваты, что не следят за трендами (reply to 291170)

Дмитрий: ?? Я не понимаю откуда вы это взяли (reply to 291170)

наз: https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md (reply to 291172)

Оскар: деплой воулта - https://tonviewer.com/transaction/fda8bc68f827c0e5a94ba1b029c1b67eaba8bb17983c7f941042d0596a94bb51  деплой пула - https://tonviewer.com/transaction/de4bde95e5bf6c755a595d81cf2e91bac3edd45a8c1bd965d78756632eb076de  залив ликвидности - https://tonviewer.com/transaction/7426b081a6930747d9a6e2be4123b14aa5046ff504d6c1bf1919d873f845f810 (reply to 291168)

Namon: https://t.me/tondev/291115 (reply to 291172)

KTO: Не у всех уже существующих смарт-контрактах есть (ProvideWalletAddress, TakeWalletAddress) (reply to 291172)

Дмитрий: message(0x2c76b973) ProvideWalletAddress {     query_id: Int as uint64;     owner_address: Address;     include_address: Bool; }  message(0xd1735400) TakeWalletAddress {     query_id: Int as uint64;     wallet_address: Address;     owner_address: Cell?; }

Дмитрий: Теперь сравниваем опкоды (reply to 291176)

Дмитрий: Первая ссылка (reply to 291174)

Дмитрий: 6AV - волт. nZ1 - мастер (reply to 291176)

Оскар: да всё увидел, но на самом деле у ОП был банальный вопрос - как ему понять что жетоны идут с USDT и ответ прост - заранее вычислить жетон воллет и передать как инициализацию контракту !!не в дате!!, такой метод больше нужен когда ты не знаешь с каким жетоном работаешь от слова совсем (reply to 291176)

KTO: Ну а как вы хотите работать с жетоном, который не знаете? (reply to 291183)

Оскар: дексы так и работают (reply to 291184)

Дмитрий: Эти сообщения- грубо говоря «костыль» тон блокчейна с его изоляцией контрактов. Грубо говоря это гет-метод, только при помощи транзакций (reply to 291179)

Дмитрий: Я человеку предложил в целом простой способ. Мне в ответ сказали, что я ничего не понимаю и вообще не прав. Я решил показать, что этот способ довольно популярный. Зачем идти по необычному пути ради экономии пары центов? (reply to 291183)

Дмитрий: Возможно раньше это было стандартом, но сейчас уже другое время

Оскар: да на самом деле оба плохой способ предложили для его случая, я сейчас пересматриваю и не понимаю зачем было вообще предлагать вычислять/спрашивать то, что уже известно изначально, буквально до деплоя самого контракта (reply to 291187)

X1ag: так какой лучше метод использовать?😂

Дмитрий: Каким образом можно узнать адрес жетон волета для не задеплоенного контракта? (reply to 291189)

X1ag: хешировать его стейт и воркчейн (reply to 291191)

наз: расчитать стейт инит контракта, тем самым получив его адрес и вызвать гет метод офчейн у жетон минтера, далее передать адрес при деплое  https://t.me/tondev/291122 (reply to 291191)

Creator: собрать контракт жетон волета с инит данными (reply to 291191)

Оскар: я выше написал, такую схему проворачивают в нфт айтеме - его дата не зависит от овнера и контента, но всё равно по итогу сохраняется в дате (reply to 291191)

X1ag: буду такой метод использовать, идеально подходит мне, потому что принимаю только 1 жеттон (USDT) (reply to 291193)

Оскар: я как раз таки написал что ни в коем случае нельзя в стейт изначально класть адрес жетон воллета, от этого адрес контракта поменяется и адрес жетон воллета уже будет не актуальным (reply to 291194)

Дмитрий: Это так не сработает. Адрес контракта зависит от кода и входных данных. То есть адрес контракта в таком случае будет зависеть от адреса жетон волета, но при этом адрес жетон вольта зависит от данных контракта (reply to 291193)

Дмитрий: Бесконечный цикл зависимостей грубо говоря

Дмитрий: Ну или как это назвать правильно

наз: в начальный стейт не обязательно сразу класть жетон валлет, у тех же жетон валлетов по умолчанию баланс ноль к примеру (reply to 291199)

Оскар:     (int init?, int index, slice collection_address, slice owner_address, cell content) = load_data();     if (~ init?) {       throw_unless(405, equal_slices(collection_address, sender_address));       store_data(index, collection_address, in_msg_body~load_msg_addr(), in_msg_body~load_ref());       return ();     } вот этот кусок из нфт айтема - его инит дата составляется с addr_none для овнера и пустым контентом, но как раз таки первый месседж (вместе с инит стейтом) запихает тут же в дату овнера и контентэ

Creator: да правильно. Нужно собрать стейт контракта. В него же не кладется адрес контракта. Адрес контракта это хеш. Ты прав (reply to 291197)

Оскар: по итогу адрес нфт айтема никак не зависит от изначального овнера и контента - только от индекса и адреса коллекции

Дмитрий: Ну так к ним никто не вкладывает стартовый баланс (reply to 291202)

наз: это верно, к чему это? (reply to 291206)

Дмитрий: Реализуйте это тогда (reply to 291193)

KTO: Ладно, а есть возможность проверить, что NFT принадлежит нужной коллекции? На токене можно проверить адрес кошелька с помощью мастера.  А как проверить адрес NFT?

Дмитрий: Если вы уверены, что это сработает- я готов заплатить

наз: https://t.me/tondev/291203 (reply to 291211)

Дмитрий: Это костыль) Так же как и мой вариант

Дмитрий: Либо это не сработает

наз: https://t.me/tondev/291205 не похоже что это подразумевалось как костыль (reply to 291213)

KTO: Помогите (reply to 291210)

Оскар: не стоит называть каждое решение костылём, это не какая-то временная заглушка, которая может принести проблемы, а вполне нормальное решение для инициализации контракта, не затрагивая генерацию адреса (reply to 291213)

Дмитрий: Очень сомнительный вариант в итоге тоже получается. По сути тоже самое, что я предложил, только на одну транзакцию меньше. Там сразу идёт транзакция с нужным адресом, а я предложил почти такой же вариант, только адрес запрашивает сам контракт

X1ag: а, кстати да, лучше внутри калькулировать уже внутри самого контракта. Перед деплоем ты не сможешь закинуть верный адрес жетон валет контракта  (slice) calc_user_wallet (slice owner, slice jetton_master, cell code) inline {     return calc_address(calculate_jetton_wallet_state_init(owner, jetton_master, code)); } (reply to 291193)

Оскар: ну так раз мы ищем вариант "проще", то вот это проще, даже не просто проще - так ещё и дешевле (reply to 291219)

Дмитрий: init(master: Address, owner: Address) {         self.owner = owner;         self.master = master;         self.jetton_wallet = newAddress(0, 0);         self.active = true;              send(SendParameters{             to: self.master,             value: 0,             mode: SendRemainingValue,             body: ProvideWalletAddress{                 query_id: now(),                 owner_address: myAddress(),                  include_address: true             }.toCell()         });     } (reply to 291219)

Дмитрий: Вот такой вариант я имел ввиду

KTO: У меня также (reply to 291226)

&rey: создавая потенциальный race condition с сообщениями от деплоеров-скамеров, которые могут предложить другой жетон-кошелёк. (reply to 291193)

Дмитрий: А ваш вариант- почти тоже самое, что и выше (reply to 291217)

Дмитрий: Тогда почему дедаст не пошел по простому и дешевому пути?) (reply to 291223)

Оскар: так такт предоставляет синтаксический сахар в виде этого магического инита, по сути он работает так же как и на фанси (reply to 291226)

наз: кстати не подумал об этом, ну я в общем то так и не делаю (reply to 291230)

Оскар: потому что дедаст работает с неизвестными ему жетонами (reply to 291232)

Дмитрий: Ну так можно же через эксплорер посмотреть хеш кода (reply to 291235)

Дмитрий: Через апи взять его и засунуть в скрипт для вычисления

Дмитрий: И так же деплоить волты по вашей схеме

KTO: Как NFT проверить

Дмитрий: И 2 цента сэкономит каждый, кто будет волт деплоить

Дмитрий: И там потом ресивер ещё отдельно от инита (reply to 291226)

Оскар: без понятия, значит им это надо так (reply to 291236)

Дмитрий: Ну просто зачем придумывать то, что уже хорошо работает

Оскар: к сожалению у дедаста контракты не опен сорс

Дмитрий: Примерно так (reply to 291244)

Оскар: так и это хорошо работает и уже давно, при чем даже и не нужен лишний "ресивер" (reply to 291243)

Дмитрий: Можно кстати вместо этого сделать просто require(sender() == self…… (reply to 291244)

Дмитрий: Без ctx: Context строчки

KTO: Да

Дмитрий: Настолько хорошо, что это не используется (reply to 291249)

Оскар: используется (reply to 291254)

Дмитрий: Где?

KTO: NFT то можно как-то проверить? (reply to 291254)

Дмитрий: В контракте?

KTO: У NFT  Мастера нет такой фишки

KTO: Да, проверить, что NFT принадлежит нужной коллекции (reply to 291256)

Дмитрий: Это плохо) Тогда только доверять ответу от nft (reply to 291260)

KTO: Если проверить Токен можно, т.к они додумались сделать  message(0x2c76b973) ProvideWalletAddress message(0xd1735400) TakeWalletAddress   ТО что делать с NFT

Дмитрий: Только менять стандарты

KTO: Короче, только если добавить свои костыли в смарт NFT?

Дмитрий: Ну в целом да, но тогда возможно гетгемс не будет показывать коллекцию

KTO: Типо в NFT Мастер есть функции для получения адреса NFT по её индексу, но это просто get функция

KTO: Которую нельзя получить также, как сделали с токеном

Оскар: а зачем нфт мастеру такую "фишку", я бы даже сказал жетоны и нфт работают по разному, жетон воллеты это, так скажем, отдельные кошельки одного аккаунта, когда нфт айтемы это контракты, не зависящие от овнера, если контракт работает с конкретной коллекцией, то он знает что это за коллекция, ему просто сохраняется адрес коллекции и код нфт, в форварде передаём индекс этой нфт (при этом даже если нам прислали непонятный индекс - всё равно всё проверится), вычисляем адрес и сверяем с отправителем - делаем выводы буллщит или не очень, при чем в этом случае тебе надо вычислять это каждый раз, ибо я даже не знаю что за контракт должен быть такой, что работает не с конкретной нфт коллекцией, а с конкретным нфт айтемом (reply to 291260)

&rey: !summarize 157 up Для жетонов три основных пути: 1. Считает контракт. Надо: две ячейки (код и данные жетон-мастера) плюс его адрес. Отработает синхронно. 2. Считает жетон-мастер. Надо: адрес жетон-мастера, поддержка TEP-89, пара сообщений туда-сюда. Надо учесть, что некоторое время контракт не будет знать свой жетон-кошелёк. 3. Считает деплоер. Надо: место под один адрес в сообщении деплоя. Надо учесть, что нельзя давать кому угодно указать этот адрес, иначе будет race condition со скамерами.  Я: хочу, чтобы не пихали всем поддержку TEP-89.

Дмитрий: Так все жетоны сейчас поддерживают эти сообщения. Почему бы ими не воспользоваться? (reply to 291270)

Дмитрий: Иначе этих жетонов не было бы на дексах(если бы не было поддержки этих сообщений)

&rey: Я вроде уже написал, почему именно. Сейчас давайте с нфт разберёмся.

Оскар: ну да, в этом разве что проблема этого варианта, как решение - можно ещё в дату пропихать initor_address, ну а если контракт может как-то администрироваться, то там уже изначально будет admin_address от которого можно отплясать (reply to 291270)

KTO: Что это значит "race condition со скамерами."

&rey: Как наш контракт может проверить, что ему пришла нфт конкретной коллекции (условный там юзернейм)? 1. Считает контракт. Надо: две ячейки (код и данные коллекции) плюс её адрес. Отработает синхронно. Можно даже без RUNVM, скопировав все нужные функции из самой коллекции, но без исходников будет неудобно. 2. Сделать условный TEP-77 "NFT discovery". 3. Админ посчитает и скажет "да, пришла правильная нфт" или "не, неправильная, выкидывай обратно".

Оскар: как простой пример - у нас есть тот самый "мемпул" у тонапи, за тобой следят те самые скамеры, подлавливают когда ты хочешь задеплоить свой контракт и делают это тоже самое - в итоге они могут туда положить что угодно если победят в этой гонке (reply to 291277)

Дмитрий: @HackToLuck  А адрес нфт известен заранее?

KTO: NFT адрес нужно проверить как раз, когда он приходит на смарт (reply to 291283)

KTO: Если он от нужной коллекции, то значит выполняет что-то, если нет, то просто игнорит

Оскар: конечно, он никак не зависит от овнера, проблема выше с жетонами заключается в том, что от нашего смарт контракта зависит и адрес жетон воллета, но он только один (у нашего смарта), а нфт несколько, поэтому у нас другая проблема - понять что нфт пришла от нужной коллекции (reply to 291283)

Оскар: ну конечно если мы знаем что нфт коллекция больше не минтит нфт, то в теории можем в наш смарт положить в словарь все нфт , но это такое себе (я бы даже сказал плохо), особенно если коллекция большая - по итогу можем закончить что спрос с этого словарика будет дороже, чем вычисление адреса (вместе со стораджем)

KTO: Да, вот я и думаю, можно просто свой receive добавить в смарт-контракт NFT, чтобы получать адрес NFT по индексу и сверять. (reply to 291287)

Дмитрий: Я в плане знает ли контракт адрес нфт, которую должен получить (reply to 291286)

KTO: Он знает адрес коллекции. А адрес NFT как раз должен проверить.  Это тоже самое, что есть Адрес коллекции (Jetton Master) Адрес NFT (jetton wallet)  Только wallet мы проверить можем, т.к это реализовали, а вот NFT не можем, т.к это не реализовали (reply to 291290)

KTO: Только, если самому дописать такие же функции как и у жетонов

Дмитрий: Ты хочешь контракт нфт изменить под свои нужны? (reply to 291288)

KTO: Ну я вообще не хотел как раз, но видимо придётся (reply to 291293)

Дмитрий: Ты будешь получать нфт, которые уже задеплоены или свою коллекцию сделаешь? (reply to 291294)

KTO: Которые уже существуют

KTO: Но у них не реализована функция проверки NFT

Дмитрий: Тогда ты не сможешь изменить их контракты

Дмитрий: Они ведь уже существуют

KTO: Я знаю (reply to 291298)

Дмитрий: Ну как вариант. В теории. Очень странный  Сделать контракт-обёртку нфт (reply to 291301)

Дмитрий: Ну это такой себе вариант и я не совсем понимаю что он изменит

Дмитрий: Мысли вслух

KTO: Ну я вообще спрашивал как проверить NFT, вы уже сказали что никак

KTO: Главное для кошелька жетонов проверку сделали, а для NFT не подумали

Дмитрий: Вообще действительно странно. Сильная дыра в безопасности

Дмитрий: Для авторов, которые верят сообщениям без проверки (reply to 291308)

Дмитрий: Зато у нас самый быстрый блокчейн в мире

Оскар: как проверить нфт - выше сказали  так же этот провайд воллет не ультимативно для проверки сделан, а для того чтобы вычислять адрес жетон воллета ончейн, не таская за собой те данные, которые тащит сам мастер (reply to 291307)

Оскар: https://t.me/tondev/291270  3 способа, плюсы и минусы есть у каждого - выбирай какой подходит/хочешь

KTO: Смарт-контракт коллекции запрашивает адрес NFT по init NFT Item (адрес коллекции, индекс NFT).  А где я возьму init NFT Item смарт-контракта, который можно создать внутри смарт-контракта с нужными параметрами (reply to 291278)

&rey: Это же лишь синтаксический сахар, который всё равно до уровня опкодов будет скомпилирован. RUNVM коллекцию и всё. (reply to 291314)

KTO: Допустим у меня есть init code, init data коллекции Я могу получить её адрес с помощью contractAddress  Но каким образом я обращусь к смарт-контракту NftItem из Коллекции, которая получает Адрес NFT так как на фотке (reply to 291315)

KTO: Это получается, я должен собрать новый init с адресом коллекции и индексом Но из чего его собрать я должен. Если у меня есть код и дата Коллекции

&rey: поменяйте тактовую частоту Тактом и initOf дело не ограничивается же. Интринсик надо написать, как в https://gist.github.com/ProgramCrafter/53fc3a4846397ee5f3f3b25ca3356ab5. (reply to 291316)

Оскар: тут очепятка, нужен код и данные нфт айтема, не коллекции (из данных это адрес коллекции и индекс нфт) (reply to 291278)

KTO: Данные NFT item у каждого NFT разные (reply to 291320)

Дмитрий: А можешь подсказать по поводу?  @interface("ton.experimental.pcrafter.jettonseller") (Строчка 18 в main.tact)  Я не совсем понимаю откуда берут ссылки для @interface (reply to 291319)

Оскар: но если через RUNVM пропускаем - то да, код коллекции нужен (reply to 291320)

Оскар: инит данные не особо - если к нам приходит "правильная" нфт, то адрес коллекции будет один и тот же, а индекс нам приходит форвардом (reply to 291321)

KTO: Я же заранее не буду все известные init от NFTitem добавлять (reply to 291323)

KTO: Адрес коллекции не проверить при получении NFT (reply to 291324)

Оскар: зачем нам проверять адрес коллекции? (reply to 291326)

Дмитрий: Ты же можешь хранить его просто и не проверять (reply to 291326)

Оскар: мы имеем код нфт айтема, которые минтит коллекция, мы знаем адрес нфт коллекции, нфт которой ждём - нам этого хватает с головой

KTO: Да я итак его храню, это вы начали писать про адрес коллекции

KTO: У каждого NFT разный init (reply to 291329)

Оскар: а я где говорю что мы храним стейт инит нфт айтема? (reply to 291332)

KTO: Это уже не на Tact реализовывать? (reply to 291329)

Оскар: вот вам въелось походу этот initOf от такта и не видите дальше, он делает тоже самое, только инлайнит код другого контракта прямо в сам контракт, то что говорили выше и на такт реализовывается (reply to 291335)

Оскар: я кажется понимаю почему вам проще отправлять транзакцию, вероятно вы просто не знаете как собирается "нативно" стейт инит ячейка и как из неё достаётся адрес

KTO: Да (reply to 291337)

Дмитрий: Ну ведь это реально проще) (reply to 291337)

Оскар: просто ответственность перекладывается на другого и в целом всё (reply to 291339)

&rey: Ну, формально, стоило бы использовать @interface("ton.ratelance.***") — при записи наоборот это попало бы на какой-то поддомен моего, значит, я могу туда примерно что угодно записать. (reply to 291322)

Дмитрий: А что делает этот самый интерфейс? Я знаю, что org.ton.jetton.master (может немного отличается) даёт мастеру «интерфейс» жетона в тонвивере. Есть ещё какие-нибудь интересные варианты как использовать эту строку? (reply to 291341)

Дмитрий: Какие-нибудь другие интерфейсы или возможно свои

Оскар: я бы это решение сравнил от части как такое:  вот в тоне у нас адрес может быть в пяти форматах, кто-то локально гоняет байтами и получает адрес в другом формате, а кто-то отправляет запрос на апи, который сделает абсолютно те же действия, но у себя и отдаст результат (reply to 291339)

&rey: Неправда. Гет-методы для этого необходимы и достаточны. А так — для красоты. (reply to 291342)

Дмитрий: Но ведь при загрузке кастомного жетона тонвивер не может знать что это за контракт (reply to 291345)

Дмитрий: Так а в чём минус варианта с мастером? Только комиссии? Апи это понятно- оно может лечь. А контракт мастера лечь не может. Он в любом случае обработает запрос(если только блокчейн не ляжет) (reply to 291344)

User: Tonviewer определяет тип контракта по гет методам (reply to 291346)

Дмитрий: И контракт мастера сам хранит код своих кошельков (reply to 291348)

&rey: Ну, у нас полминуты контракт не будет знать, какой у него жетон-кошелёк, а это уже требует логику додумывать. (reply to 291348)

Дмитрий: Хорошо. А можно свои буковки написать? Чтобы тонвивер например отображал «interfaces: test_abcdef_contract”? (reply to 291349)

uchebnick: Всем привет. Почему создание ячейки — это дорогая операция? Потому что нужно перестраивать дерево меркла или потому что просто хранение данных — это дорого?

User: У них есть репозиторий куда вы можете загрузить трейсы своего контракта с оп-кодами и названиями действий и соответственно и имя интерфейса контракта (reply to 291352)

Дмитрий: Там нужно будет ждать одобрения, да? Или любой может загрузить что угодно? (reply to 291354)

User: Да, нужно одобрение (reply to 291355)

Дмитрий: Просто зачем тогда нужны эти @interface?  https:// tact-by-example .org/07-jetton-standard

User: https://docs.tact-lang.org/book/contracts/#interfaces (reply to 291359)

User<7629717606>: Извиняюсь за 2х-летний реплай 😃  Но значит ли это то, что если пользователь Telegram (обладающий никнеймом, который был преобразован в NFT) был забанен, то никнейм более не доступен к применению в мессенджере, но при этом его NFT остаётся (т.е становится фантиком)?  Или у NFT-никнеймов иммунитет к банам и их можно будет в Telegram легко перенести на новый аккаунт даже если прошлый заблокирован? (reply to 146640)

Дмитрий: Ну я бы не спрашивал здесь, если бы не читал документацию) Этот раздел мне не дал особого понятия зачем нужны в итоге эти строчки (reply to 291361)

Оскар: буквально же написано что просто добавляет геттер supported_interfaces с такими то значениями, только я не уверен что тот же тонвьюер этот гет метод респектит (reply to 291364)

User: Tact contracts can report the list of supported interfaces as a return value of a special supported_interfaces getter.  Такт выводит интерфейсы в гет метод supported_interfaces, чтоб можно было понять, какие методы есть у контракта (reply to 291364)

Denis: Да (reply to 291362)

Дмитрий: То есть в итоге это нужная тема или нет? Просто зачем нужен этот геттер, если (цитата) Tonviewer определяет тип контракта по гет методам (reply to 291366)

Оскар: ну как я понял это пропозал такта, типо они хотят так сделать чтобы можно было понимать по этому набору строк что за контракт перед тобой, а не по набору гет методов (reply to 291368)

Оскар: отвечая на вопрос - казалось бы да, но не особо кто-то это поддерживает, да и на функционал не влияет, это просто мета информация о контракте

max: Привет всем! Может быть кто-то знает как через телеграмм апи, или другое апи, подгружать подарки телеграмм юзера. буду благодарен.

— 2025-02-20 —

артур: подскажите пожалуйста, если пользователь одобрит транзакцию отправленную через tonConnectUI после того как закроет страницу, то обработчик событий на веб-странице не сработает же? какие есть варианты отловить тогда эту транзакцию?

KTO: Можешь сохранить её в БД перед отправкой и проверить при следующем посещении (reply to 291380)

артур: а что именно сохранять

KTO: tx_id транзакции

Sol: Готов принять несколько задач по разработке смарт контрактов

RootTon: Легко: БД и ивенты записи в БД Сложно: xstate и событийное программирование (reply to 291380)

Vladimir: 📝 TON devs — we need your feedback!  Building on TON? Tell us what works (and what doesn’t) in a quick survey on:  • Developing on TON, tooling, programming languages (FunC, Tact, Tolk), TMAs, guides  Fill it out, drop your wallet & claim an exclusive reputation SBT!  Make your voice count.  (forwarded from Society Builders)

ex1tpush: дизайн плакал (reply to 291402)

Dmitry: Всем привет! Возможно ли в FunC кастануть функцию в слайс чтобы положить в ячейку и отправить в теле сообщения?

/B4ckSl4sh\: Хм, не знаю насчёт именно синтаксической конструкции, но технически можно. Нужно из дикта функций получить cell с нужной функцией и отправлять её как cell, который потом нужно будет cell.begin_parse().bless() и можно юзать (reply to 291410)

web-assist 🧀: Это для чего такое может быть нужно? (reply to 291410)

Dmitry: Эзотерические практики) (reply to 291414)

web-assist 🧀: Ааааа, больше похоже на попытки инъекций (reply to 291415)

/B4ckSl4sh\: Инлайн очевидно нет, а если функция inline_ref то её по-другому нужно будет гетать. (Логически можно пушрефом её гетнуть, но синтаксис не подскажу) (reply to 291410)

Андрей: Как минимум в TVM есть методы для этого, дальше нужно изучать как это использовать (reply to 291410)

Kampf: Здарова парни. Юзаю xssnick/tonutils-go, но чёт выдаёт ошибку, на сваггере норм работает, но с этой библиотекой никак не могу получить данные.    blockInfo := &ton.BlockIDExt{     Workchain: -1,     Shard:     -9223372036854775808,     SeqNo:     28336626,   }    b, err := n.api.GetBlockData(n.params.Context, blockInfo)   fmt.Println(b, err)  Вывод: lite server error, code -400: invalid block id requested  Подскажите, что не так?

Andrey: root_hash и file_hash не указан (reply to 291420)

Kampf: Спасибо! (reply to 291421)

Dmitry: Дикт функций это C3? (reply to 291413)

Dmitry: О, с inline_ref классная идея, только непонятно как до этого рефа добраться (reply to 291418)

/B4ckSl4sh\: Это хороший вопрос, но фифт от пушрефа хочет аргумент, которого тут получается быть не должно. (reply to 291429)

/B4ckSl4sh\: @pcrafter не подскажешь, пожалуйста? (reply to 291430)

&rey: Надо опкод один заменить будет... или нет...

&rey: Кину следующий вопрос: а ничего, что у функции будет контекст вызывающего контракта, а не откуда её достали?

/B4ckSl4sh\: А можно сделать что-то типо  x{88} @Defop MYPUSHREF?  В теории должно работать (Только inline_ref функцию вызвать нужно там сразу, иначе она не добавится куда надо) (reply to 291432)

/B4ckSl4sh\: А какой у неё контекст? (reply to 291433)

Dmitry: Попробую, спасибо! (reply to 291434)

&rey: data, code, my_address (!) (reply to 291435)

Dmitry: А разве это проблема? (reply to 291433)

Stepan: Всем привет. Блокчейн нормально работает? Вроде как какая-то проблема со ston.fi

Андрей: В их канале сообщили о тех работах (reply to 291458)

Дмитрий: Вроде работает всё (reply to 291458)

Stepan: Да. А у ФПИ-банка в чате крипто-бедолаги на панике))

&rey: Как-то серьёзно не хватает флагов сообщения. (reply to 291462)

Jenya: Error: No engines are available  Использую лайтсервер из глобал конфига, было все нормально, а щас такая ошибка что делать?

Grigoriy: Всем привет, сделал себе кошелек V5 через tonkeeper и сразу закинул туда 1 ТОН. Почему он отображается uninit в эксплоерах, не работают гетметоды wallet V5 и не отображается, что это контракт walletV5?

Vladimir: W5. И лучше сразу указывать адрес кошелька. (reply to 291466)

&rey: Для получения деплой не нужен — вот тонкипер ваш кошелёк и не стал деплоить. Блокчейн, получается, не знает ничего о содержимом контракта. (reply to 291466)

Саня: Всем привет нужен мев бот для стон фи  с предлжениями и ценами в лс, заранее спасибо

Jenya: уже час сыпет ошибку и ничего не меняется (reply to 291465)

؜؜؜؜؜: тож (reply to 291465)

Саня: За что? (reply to 291475)

Дмитрий: Потому что кошелёк не задеплоен) Поэтому и uninit. Деплой произойдёт вместе с первой транзакцией (reply to 291466)

Grigoriy: Так понятно почему он uninit когда с ним еще не было никаких действий, а почему когда я тоны отправил, вместе с ними не отправился init  Только при отправку с uninit кошелька тон обратно сработало, а как он тогда задеплоился? (reply to 291477)

&rey: Внешний отправитель не знает StateInit вашего... контракта... — знает только хеш (ака адрес), значит, и задеплоить не может.  А вот тонкипер знает, поэтому экстернал (ордер на перевод тонов) посылает с StateInit. (reply to 291478)

Denis: Не хватает кстати перехода из эктив в нон экзист (reply to 291480)

Николай: ребят, подскажите есть какие нибудь кошельки с апи для управленим им? свап тонов в jusdt интересует и переводы

BS: Я хочу переслать USDT на контракт X (nonexist) и сразу передать ему state_init Возможно ли это сделать?  Думал передать через forwardPayload, но что-то не понимаю возможно ли это

Oleg: Это же обычный трансфер жетона. Он описан в доках вдоль и поперек (reply to 291489)

BS: не могу найти в документации как отправить state_init, поэтому и спрашиваю (reply to 291490)

Йорик: Всем привет! Стоит ли вообще создавать мемкоин на тоне и заниматься его продвижением?

— 2025-02-21 —

9778: кто то шарит за такое ? (reply to 291496)

9778: цена в тон спейсе как у и usdc,но обменять нельзя,при попытке перевести на другой кошелек,вроде отправляется ,но не отображается и не имеет стоимости

🏆: Как сделать ERC-1155 на тон?

Jenya: а есть какой-нибудь lite balancer на JS?

User: Это СКАМ токен (reply to 291498)

Daniil: Всем привет. Где-то месяц назад была новость, что ТОН стал эксклюзивным блокчейном для Телеграм Мини-Приложений. Скажите, это значит, что любой другой блокчейн вообще не может появиться внутри мини приложения? Или нужно только то, чтобы ТОН точно был. И если он есть, то можно в приложение добавлять и другие?

User: https://core.telegram.org/bots/blockchain-guidelines (reply to 291523)

Дмитрий: Тон должен быть обязательно. Можно либо только тон, либо мультиблокчейн(но тон тоже) (reply to 291523)

Daniil: а ну то есть если, условно, я сделаю TONxBSC это ок? приложение, в котором подключение к TON через TON Connect, а к BSC через сторонние сервисы, ну и свапы внутри просто в документации, которую сверху скинули, там про сторонние блокчейны только слова запретов. Даже на уровне постов о них в ТГ-канале приложения (reply to 291528)

sd: Тебе же скинули ссылку на подробный гайдлайн, в котором расписаны все условия, ограничения и юзкейсы. Все это не умещается в два предложения. (reply to 291530)

Daniil: а стоило бы этому умещаться я ничего такого сверхъестественного не спросил - "можно ли сделать приложение, где будут свапы на нескольких блокчейнах, включая ТОН?" - "да/нет" а вот "подробный гайд" сверху на это ответа и не дает хоть простого, хоть сложного там все, что "other blockchain" в Not permitted (reply to 291531)

sd: Ну что тут скажешь, добро пожаловать в клуб

&rey: Я вам больше скажу: это всё не регулирует, ибо физически не может регулировать, содержимое .ton доменов. (reply to 291533)

&rey: Поэтому спокойно хостите своё мультичейн-приложение на .ton домене.  Смысл гайда, вероятно, вот в чём: "перетягивайте пользователей из других блокчейнов в тон, не наоборот".

Daniil: хорошо, спасибо (reply to 291536)

Дмитрий: Ну например мосты, насколько я понимаю, не запрещены. Возможно свапалки тоже разрешены (reply to 291533)

User<7397059835>: О, осторожно, мы тут имеем настоящего эксперта по мостам и свапалкам! Неужели ты разбираешься в свап (reply to 291541)

Тём: Всем привет, я вообще малютка и не разбираюсь! Что такое смарт-контракт и как он работает с TON?

Kashib: Так же как на эфире, солане итп-ых блокчейнов) (reply to 291549)

Dmitry: А можешь подсказать по синтаксису, так должно быть?   cell getCode() inline_ref asm "x{88} @Defop MYPUSHREF MYPUSHREF"; (reply to 291434)

/B4ckSl4sh\: А я был неправ, сейчас покажу решение (reply to 291552)

/B4ckSl4sh\: () f() inline_ref {      }  cell declfn(() value) asm     "// Replace CALLREF with PUSHREF"     "b> <s              // prev_code"     "dup sbits 8 / 2 -  // prev_code keep_bytes"     "B@+                // prev_code must_callref"     """16 u@ 56124 - abort"CALLREF expected, got unknown opcode"    // prev_code"""     "<b swap B,         // next_code"     "x{88} @addop";  () main() {     cell f_code = declfn(f()); }

/B4ckSl4sh\: это от pcrafter если что решение, переслать с авторством не получилось (reply to 291559)

Тём: А само процесс сложный? Легко обосраться если этим не занимался? (reply to 291551)

Дмитрий: Не совсем так же. В тон контракты как минимум изолированы. Ну и всякие отличия есть (reply to 291551)

Dmitry: Спасибо! Пробую (reply to 291559)

Dmitry: Хм, падает с exit code 6 (reply to 291559)

BS: подскажите, это реально передать state_init (например через forward_payload) при отправке жетона? это state_init для destination контракта

Dmitry: Вот мой код   @inline_ref fun guesser(): int {     return 666; }  fun getCode(value: int): cell asm     "// Replace CALLREF with PUSHREF"     "b> <s              // prev_code"     "dup sbits 8 / 2 -  // prev_code keep_bytes"     "B@+                // prev_code must_callref"     """16 u@ 56124 - abort"CALLREF expected, got unknown opcode"    // prev_code"""     "<b swap B,         // next_code"     "x{88} @addop";  // onInternalMessage is the main function of the contract and is called when it receives a message from other contracts fun onInternalMessage(myBalance: int, msgValue: int, inMsgFull: cell, inMsgBody: slice) {     if (inMsgBody.isEndOfSlice()) { // ignore all empty messages         return;     }      var cs: slice = inMsgFull.beginParse();     val flags: int = cs.loadUint(4);     if (flags & 1) { // ignore all bounced messages         return;     }      val target: slice = inMsgBody.loadAddress();     val msgBody: cell = beginCell()         .storeUint(0, 32)         .storeRef(getCode(guesser()))     .endCell();     val msg: cell = beginCell()         .storeUint(0x18, 6)         .storeSlice(target)         .storeCoins(0)         .storeUint(1, 1 + 4 + 4 + 64 + 32 + 1 + 1)         .storeRef(msgBody)     .endCell();                      // send all the remaining value     sendRawMessage(msg, 64); }

/B4ckSl4sh\: не во всех жетонах. В дефолтном нет (reply to 291581)

BS: печаль. а в каких есть? это новый стандарт или просто кастомные решения? (reply to 291584)

/B4ckSl4sh\: стандарту такая функциональность не противоречит, но вот именно репы, где её добавили я так не вспомню (reply to 291586)

BS: понял, спасибо (reply to 291587)

/B4ckSl4sh\: tolk detected (reply to 291583)

Dmitry: Вот тут странная строчка   "<b swap B,         // next_code"   Не должно закрываться с b>?

Dmitry: Йеп) (reply to 291589)

Kashib: Ну смотря что делать. Если самому писать, то можно и обсраться😁 (reply to 291565)

&rey: Если я верно помню, то изначально у нас код в билдере, и должен остаться в билдере. (reply to 291590)

W.E.I.J.: Добрый день, есть такой код разборки boc использую @ton/core  function loadRemaining(slice) {     let builder = beginCell();     builder.storeBits(slice.loadBits(slice.remainingBits));     while (slice.remainingRefs > 0) {         builder.storeRef(slice.loadRef());     }     return builder.endCell(); }  async function test(boc) {     try {         let amount2 = null;          const cells = Cell.fromBoc(Buffer.from(boc, "base64"));         const cell = cells[0];         const slice = cell.refs[0].beginParse();         const prefix = slice.loadBit();         console.log("PREFIX: ", prefix);         const ihr_disabled = slice.loadBit();         console.log("ihr_disabled: ", ihr_disabled);         const bounceFlag = slice.loadBit();         console.log("bounceFlag: ", bounceFlag);         const bouncedFlag = slice.loadBit();         console.log("bouncedFlag: ", bouncedFlag);         const src = slice.loadMaybeAddress();         console.log("SRC ADDRESS: ", src);         const dst = slice.loadAddress();         const currency_grams = slice.loadCoins();         slice.skip(1);         const ihr_fee = slice.loadCoins();         const fwd_fee = slice.loadCoins();         const created_lt = slice.loadUintBig(64);         const created_at = slice.loadUint(32);         const mb_si = slice.loadBit();         if (mb_si) {             const isCell = slice.loadBit();              if (isCell) slice.loadRef();         }         const isBodyRef = slice.loadBit();           let body;         if (isBodyRef) {             console.log('✅✅✅');             body = slice.loadRef().beginParse();          }         else {             console.log('⛔️⛔️⛔️');             body = loadRemaining(slice).beginParse();          }         const op = body.loadUint(32);         const query = body.loadUintBig(64);         amount2 = body.loadCoins();         const destination2 = body.loadMaybeAddress();         const response_destination = body.loadMaybeAddress();          const message = {             amount: currency_grams,             body,              to: dst,             amount2         };              console.log("Parsed Message:", message);     } catch(err) {         console.log('Ошибка при распаршивании boc', err);     } }   Рассматриваю две разные транзакции 1) https://tonviewer.com/transaction/38adcd01ced64386b6a10c37d94df9797f88211773adf8ef37aff4263eca85a6  2) https://tonviewer.com/transaction/ab71f47137d15c2f1c27d28b4d4ced50dd70fb4c789adcc4a32b0543b4106d18  Вот результат вывода для первой: PREFIX:  false ihr_disabled:  true bounceFlag:  true bouncedFlag:  false SRC ADDRESS:  null ⛔️⛔️⛔️ Parsed Message: {   amount: 100185000000n,   body: x{2058370206_}    x{2593856180060D9E33410C1605D9680F2285E698B34C05B57F79BDC245D46322E2A46297962E0D8A78AE1C990D003CAF5B5E40A77C5D66A5698506DB52D2427FB54030DB4A4E864F184B07E007BCF002C22459ADF51294C334773F879B8296D48A9A173D4FC31837FADD23403B77EAA2_},   to: EQARULUYsmJq1RiZ-YiH-IJLcAZUVkVff-KBPwEmmaQGH6aC,   amount2: 100000000000n }  Вот результат вывода для второй: PREFIX:  true ihr_disabled:  true bounceFlag:  false bouncedFlag:  false SRC ADDRESS:  null ✅✅✅ Ошибка при распаршивании boc Error: Invalid address  почему у второй транзакции ошибка тут:  const destination2 = body.loadMaybeAddress();  в обеих транзакциях wallet_v4r2 и схожие свопы

Dmitry: @pcrafter если падает с exit code 6 значит что-то не так с этим куском   fun getCode(value: int): cell asm     "// Replace CALLREF with PUSHREF"     "b> <s              // prev_code"     "dup sbits 8 / 2 -  // prev_code keep_bytes"     "B@+                // prev_code must_callref"     """16 u@ 56124 - abort"CALLREF expected, got unknown opcode"    // prev_code"""     "<b swap B,         // next_code"     "x{88} @addop";    верно?

Dmitry: Блин, почти получилось)

&rey: Стоит кинуть в disasm. (reply to 291596)

Dmitry: В каком смысле? (reply to 291600)

&rey: Посмотреть, что там за контракт скомпилировался, а потом https://github.com/ProgramCrafter/wallet-contract/blob/c4e9271abae8abe554a82e7d34f8c87b073acd8e/build.ts#L6-L10. (reply to 291605)

/B4ckSl4sh\: Пользуясь случаем порекомендую  https://github.com/tact-lang/ton-opcode/commits/main/  Там недавно классную обнову залили, теперь отлично работает (reply to 291607)

Dmitry: SETCP0 (:methods       recv_internal:          2 2 BLKDROP2         DUP         SEMPTY         <{           2DROP         }> PUSHCONT         IFJMP         SWAP         CTOS         4 LDU         s0 POP         1 PUSHINT         AND         <{           s0 POP         }> PUSHCONT         IFJMP         LDMSGADDR         s0 POP         PUSHREF         0 PUSHINT         NEWC         32 STU         STREF         ENDC         1 PUSHINT         24 PUSHINT         NEWC         6 STU         s0 s3 XCHG2         STSLICER         0 PUSHINT         STGRAMS         s1 s2 XCHG         107 STU         STREF         ENDC         64 PUSHINT         SENDRAWMSG     ) 19 DICTPUSHCONST     DICTIGETJMPZ     11 THROWARG (reply to 291607)

&rey: А выглядит нормально. (reply to 291627)

&rey: Есть vmLogs или retracer?

Dmitry: Неа

Dmitry: Я в сэндбоксе гоняю

Василий: Значит есть vmLogs. Это поле транзакции (reply to 291631)

Dmitry: А, вот это?   [       {         lt: 34000000n,         now: 1740147678,         outMessagesCount: 1,         oldStatus: 'active',         endStatus: 'active',         totalFees: 1667731n,         from: undefined,         to: EQARPgq8YQ-4IgSbrSiGS5P4EQIpRNClAGUne3a3QhObGtEZ,         on: EQARPgq8YQ-4IgSbrSiGS5P4EQIpRNClAGUne3a3QhObGtEZ,         value: undefined,         ec: undefined,         body: x{CE1BDA8D27D81E916D594CB919A2C5FB0A868BFBEC524F90E853BFA19BE6A1C7C_}          x{D001}           x{620001A445F35154FEF306EE39AC1C447BD922B4320AAFB192BF01E700AEB56D99322017D7840000000000000000000000000000801BC6C265DB60934A0AA60A8CE380288151DE399A0C68EA832E0DD89C80B823B91_},         inMessageBounced: undefined,         inMessageBounceable: undefined,         op: 3457931917,         initData: undefined,         initCode: undefined,         deploy: false,         aborted: false,         destroyed: false,         exitCode: 0,         actionResultCode: 0,         success: true       },       {         lt: 35000000n,         now: 1740147678,         outMessagesCount: 1,         oldStatus: 'active',         endStatus: 'active',         totalFees: 395731n,         from: EQARPgq8YQ-4IgSbrSiGS5P4EQIpRNClAGUne3a3QhObGtEZ,         to: EQADSIvmoqn95g3cc1g4iPeyRWhkFV9jJX4DzgFdatsyZGps,         on: EQADSIvmoqn95g3cc1g4iPeyRWhkFV9jJX4DzgFdatsyZGps,         value: 50000000n,         ec: [],         body: x{801BC6C265DB60934A0AA60A8CE380288151DE399A0C68EA832E0DD89C80B823B91_},         inMessageBounced: false,         inMessageBounceable: true,         op: 2149304002,         initData: undefined,         initCode: undefined,         deploy: false,         aborted: true,         destroyed: false,         exitCode: 6,         actionResultCode: undefined,         success: false       },       {         lt: 36000000n,         now: 1740147678,         outMessagesCount: 0,         oldStatus: 'active',         endStatus: 'active',         totalFees: 123600n,         from: EQADSIvmoqn95g3cc1g4iPeyRWhkFV9jJX4DzgFdatsyZGps,         to: EQARPgq8YQ-4IgSbrSiGS5P4EQIpRNClAGUne3a3QhObGtEZ,         on: EQARPgq8YQ-4IgSbrSiGS5P4EQIpRNClAGUne3a3QhObGtEZ,         value: 49337600n,         ec: [],         body: x{FFFFFFFF801BC6C265DB60934A0AA60A8CE380288151DE399A0C68EA832E0DD89C80B823},         inMessageBounced: true,         inMessageBounceable: false,         op: 4294967295,         initData: undefined,         initCode: undefined,         deploy: false,         aborted: false,         destroyed: false,         exitCode: 0,         actionResultCode: 0,         success: true       }     ]

&rey: Нет. blockchain.setLogLevel({vmLogs: true}); (reply to 291633)

Василий: transactions[1].vmLogs или так (reply to 291633)

Dmitry: execute SETCP 0     execute DICTPUSHCONST 19 (xC_,1)     execute DICTIGETJMPZ     execute BLKDROP2 2,2     execute DUP     execute SEMPTY     execute PUSHCONT x5B     execute IFJMP     execute SWAP     execute CTOS     execute LDU 4     execute DROP     execute PUSHINT 1     execute AND     execute PUSHCONT x30     execute IFJMP     execute LDMSGADDR     execute DROP     handling exception code 6: no references left for a PUSHREF instruction     default exception handler, terminating vm with exit code 6

&rey: А что будет, если сделать просто fun skipCode(value: int): cell asm     "NOP"; (интересно, какой код тогда получится)

zaza: Привет ребят, очень интересует история с бандлерами на тоне

zaza: Шарит кто нибудь? Готов много заплатить за хорошие советы

Василий: Получается, вот тут падает? В а чем идея? Там на стеке кажется континьюэйшен должен лежать. Зачем PUSHREF подменяем? (reply to 291627)

Dmitry: execute SETCP 0     execute DICTPUSHCONST 19 (xC_,1)     execute DICTIGETJMPZ     execute BLKDROP2 2,2     execute DUP     execute SEMPTY     execute PUSHCONT x5B     execute IFJMP     execute SWAP     execute CTOS     execute LDU 4     execute DROP     execute PUSHINT 1     execute AND     execute PUSHCONT x30     execute IFJMP     execute LDMSGADDR     execute DROP     execute CALLREF (899DC9B30319D76CC0A14B88EE7199DD9F54B75F363F51293B2D185549520053)     execute PUSHINT 666     execute implicit RET     execute PUSHINT 0     execute NEWC     execute STU 32     execute STREF     handling exception code 7: not a cell     default exception handler, terminating vm with exit code 7 (reply to 291640)

Василий: Ещё раз, а смысл в чём? PUSHREF это для обычных рефов. CALLREF это PUSHREFCONT JMPX  CALLREF на PUSHREF заменять смысла нет. Возможно, вам нужен PUSHREFCONT (reply to 291644)

Dmitry: это @pcrafter может пояснить) (reply to 291645)

&rey: А, всё понял, куда там делась ссылка. Я просто её забыл скопировать (ну вот почему не поддерживается загрузка из конца слайса?..) (reply to 291644)

&rey: fun getCode(value: int): cell asm     "// Replace CALLREF with PUSHREF"     "b> <s              // old_code"     "dup sbits 8 / 2 -  // old_code keep_bytes"     "B@+                // prev_code_bytes must_callref_refs"     """16 u@+ 56124 - abort"CALLREF expected, got unknown opcode"    // prev_code_bytes refs"""     "<b swap            // prev_code_bytes new_code refs"     "s, swap B,         // new_code"     "x{88} @addop";

&rey: Хотя если выражаться по-C++, то функция эта должна называться declfn.  declfn(someInlineRef()) возвращает код someInlineRef как ячейку. (reply to 291645)

KTO: Как создать onchain метаданные для жетона без Dictionary?

&rey: Э... никак? (reply to 291651)

Dmitry: Теперь не компилится...  [ 1][t 0][2025-02-21 15:28:01.838000][Fift.cpp:67]      top: <continuation 0x9cd050> level 1: <text interpreter continuation>  Error: main.fif:32:     -:not an integer (reply to 291649)

&rey: Значит, между u@+ 56124 поставить swap.

Dmitry: """16 u@+ swap 56124 - abort"CALLREF expected, got unknown opcode"    // prev_code_bytes refs"""  Так? (reply to 291656)

Dmitry: @pccrafter Работает! Спасибо!

&rey: Держите ссылку, чтобы хвастаться: https://github.com/ProgramCrafter/tvm-quirks/blob/master/quirk-declfn.tolk. (reply to 291659)

Lesha: Ребята, в нашем чате мошенник, мне так обидно, обещал сминтить NFT, перевел ему оплату 49 TON и он меня заблокировал, вот его ник: @Scalien

Lesha: Если кто то может помочь с минтов NFT напишите пожалуйста, я все равно это хочу сделать сегодня

Lesha: поменял ник, вот его ID: 7225482762 (reply to 291662)

ex1tpush: откликнулся в лс (reply to 291663)

Andrew: о, я в телевизоре)   (а правда, зачем так усложнять код этим излишним фифтингом?) (reply to 291660)

Александр: Всем привет 👋 Есть такой интересный вопрос, на сколько сложно сделать бота на python, который будет при нажатии на кнопку проверять поступление токена? Логика простая - есть адрес кошелька и он просто просматривает транзакции.

&rey: Самым сложным элементом будет кнопка. (reply to 291689)

Александр: Не ну если честно, мне gpt chat говорит мол очень трудно будет понять что это токен, а потом и комментарий прочитать, говорил комментарии кодировать надо, я не очень хочу вникать. (reply to 291690)

&rey: А можно будет потом увидеть, куда это пошло? (reply to 291659)

Dmitry: @hacktheton (reply to 291692)

&rey: TonAPI Traces за вас всё это решает, в принципе. (reply to 291691)

KTO: А что делает этот скрипт? (reply to 291660)

&rey: Достаёт функцию и отправляет её как просто ячейку кода. (reply to 291695)

KTO: А для чего это нужно?

Александр: Да, с ton api будет проще, спасибо (reply to 291694)

LowGas: Гм, кто работал с Blum? Не подскажите, как свопнуть токен используя @ton/core, нужно просто отправить тоны на адрес Jetton master или там нужен payload со смарт контрактом?

LowGas: Абсолютно нигде нет информации, даже на официальных источниках (reply to 291702)

sd: Отправить тоны на адрес недостаточно, нужно сформировать сообщение. (reply to 291702)

LowGas: Есть ли какие нибудь темплейты или примеры, того как это выглядит, недавно в тон, и все время ломаю голову по этому вопросу, может кто знает? Буду очень благодарен, могу скинуть тоны за помощь, ну и меня их немного :( Что ж взять со студента (reply to 291704)

sd: Изначально они вышли на контрактах тонфана, можешь чекнуть в разделе шаблонов buy on bigpump на act.ghwnd.cc, если они не меняли его в контрактах, тогда должно работать (reply to 291705)

LowGas: Спасибо за объяснение, надеюсь это сработает (reply to 291706)

Eduard: Всем привет! Подскажите как убрать надпись "у сообщества нет информации по данному жетону". Нашел что надо оставитьзаявку, только не пойму как это сделать.

Vladimir: https://github.com/tonkeeper/ton-assets (reply to 291710)

— 2025-02-22 —

Eduard: Благодарю. Где там заявку оставить, чет не соображу (reply to 291711)

Victor: Это делается с помощью GitHub. Почитай как сделать pull request (reply to 291715)

Eduard: Благодарю (reply to 291718)

🏆: Как минтить множество разных жетонов на одном контракте? (reply to 291507)

Victor: Я не знаю в чем суть такого стандарта, но ton такого нету. Использовать один контракт для минта разных токенов скорей всего не получится реализовать. (reply to 291721)

Oleg: Это невозможно. Жетон определяется адресом мастер контракта (минтера). Вероятно, можно совместить мастер жетона с коллекцией нфт, но это уже извращение, в тон так не делают (reply to 291721)

Artem: Подскажите пожалуйста , у меня есть контракт для стейкинга , но при выводе бьет ошибку трансфера токенов , что контракт не являеться владельцем ,   throw_unless(error::unauthorized_transfer, equal_slice_bits(owner_address, sender_address)); как это можна решить или обойти чтоб можно было выводить депозит с контракта ?

&rey: Только контракт имеет право отправить свои токены. (reply to 291730)

Artem: Так а как это можна решить ?

Potok: Привет, подскажите есть ли исходник бота с авторизацией через транзакцию ?

Дмитрий: Никак. Если контракт не владелец- то он не сможет ничего сделать (reply to 291730)

Artem: А как можна назначить контракт владельцом ?

Дмитрий: Ты хочешь жетоны переводить?

&rey: Контракт должен принимать какой-то запрос и сам уже командовать жетон-кошельку "переведи тому-то сколько-то". (reply to 291733)

Artem: Да (reply to 291738)

Artem: Ну при деплое контракта мы же не можем его указать владельцем самого себя , или можем ?

Дмитрий: А зачем контракту быть владельцем самого себя?

Дмитрий: Ему нужно быть владельцем жетон кошелька, на котором лежат токены

Artem: Но при депозите токенов на контракт , он же автоматически стает его владелцем , правильно ?

Artem: Я иммею ввиду мы отправляет на контракт жетоны и у него создаеться жетон валет , владельцем которого есть контракт

Artem: Спасибо , чуть позже попробую (reply to 291739)

Дмитрий: Да (reply to 291746)

Artem: Если даст ошибку вернусь к вам )

Vadi: Подскажите, может кто-то делал. Как узнать по кошельку есть ли locked токены на нем?

🏆: Bounce возможен для одной транзакции? Для 2х подряд нет?  Каким образом сделать 2 транзакции, чтобы они выполнились обе как бы пакетом, как на фрагменте.

User: В смарт контракте все просто:  send_raw_message() send_raw_message()  В TS/JS - это просто два internal msg  И также про bounce — он может случится для каждой транзакции отдельно (reply to 291757)

User: Если вы про замороженные на смарт-контракте, то можно или через API какое-нибудь или дергав контракт заморозки через гет методы(зависит от сервиса, где происходил лок) (reply to 291756)

Vadi: Да, я имею ввиду допустим на ton raffles токены были заморожены. Мне нужно проверить действительно ли человек заморозил токены или нет.

User: EQCUljbt2PeLxxZO_u1UKQAJuar5cvlZ_gVsUULktOOnAsN8  Вот условный контракт, дергайте гет метод "get_contract_data" и парсите информацию:  sale: et.readAddress(), user: et.readAddress(), purchaseLimit: et.readBigNumber(), purchaseLimitMin: et.readBigNumber(), purchased: et.readBigNumber(), end: et.readNumber(), unlockTime: et.readNumber(), referralsPurchased: et.readBigNumber(), myReferrer: et.readAddressOpt(), myReferrerInit: et.readCellOpt(), claimed: et.readBoolean(), claimedAffilate: et.readBoolean(), helperCode: et.readCell()  Адрес просчитать не получиться, потому-что при его формировании имеется время лока, но можно пробежаться по транзакциям и найти op-code пополнения подобного контракта пользователем, с помощью гет метода получить информацию и обязательно не забыть сравнить код контракта с официальным от ton raffles (reply to 291761)

Vadi: Спасибо большое! Попробую

User: p.s. У них есть внутренняя апи, но сами понимаете по rate limit и другим тонкостям официальной информации нет: https://api.tonraffles.app/api/v2/lock (reply to 291764)

Vadi: А по их апи подскажите может нашли где можно про это почитать? Описание методов (reply to 291765)

User: У них нет никакой документации (reply to 291766)

Vadi: Хм..в целом почти то, что нужно🤔 единственное, что объем замороженных средств не отображает по аккаунту. (reply to 291767)

Laskis: Всем привет , кто может подсказать или же уже ведёт разработки по интеграции 3D моделей нфт с просмоторщиком

Laskis: Просто есть желание создать в таком стиле нфт коллекцию

Laskis: Getgems не предоставляет такую возможность

Laskis: Может быть кто то знает как решить эту задачу , буду признателен если что пишите в ЛС

Андрей: В принципе нет ничего сложно если у вас будет надежный js просмоторщик 3D моделей Остается дело за малым - внести на голосование новый стандарт нфт для 3D моделей и убедить гетгемс поддержать этот стандарт. Если реализация будет хорошей, то все ее добавят со временем  Единственное но - для большинства хватает и gif (reply to 291772)

Laskis: Дело в том что я считаю что это новый опыт для пользователей и взаимодействие с нфт , можно приблизить покрутить , а так же возможность интегрировать в метавселенные и так далее

KTO: Подскажите, пожалуйста. Есть два смарт-контракта на Tact Лежат в одном файле.  Как мне изменить переменную первого смарт-контракта из второго смарт-контракта?

&rey: Никак. (reply to 291779)

KTO: Хорошо, спасибо (reply to 291780)

Oleg: Стандарту нфт должно быть абсолютно пофиг, что там за медиа. Если это не так, это плохой стандарт. (reply to 291777)

X1ag: Добрый вечер! Подскажите пожалуйста, почему тесты падают с ошибкой? Вижу, что to: undefined, но почему, если я его инициализирую? to contain a transaction that matches pattern {       from: EQBpXEk_vEngOK1kPpcnkeJniA54TYE4-7My2EqO9joacBSP,       to: undefined,       success: true     }  Вот код:   it('should mint with 0 supply', async () => {         // MINT USDT TO DEPLOYER -> SEND IT TO CONTRACT -> CHECK SUPPLY          const userWalletUsdtDeployer = userWalletUsdt(deployer.address);         const mintUsdtNotDeployer = await jettonMinterUsdt.sendMint(             deployer.getSender(),             deployer.address,             1000000000n,             toNano('0.01'),             toNano('1'),         );          expect(mintUsdtNotDeployer.transactions).toHaveTransaction({ <--- падает тут             from: jettonMinterUsdt.address,             to: userWalletUsdtDeployer.address,              success: true,         });          const usdtTransferToContract = await userWalletUsdtDeployer.sendTransfer(             deployer.getSender(),             toNano('1'),             1000000000n,             liqPool.address,             deployer.address,             Cell.EMPTY,             10000n,             Cell.EMPTY,         );          expect(usdtTransferToContract.transactions).toHaveTransaction({             from: userWalletUsdtDeployer.address,             to: liqPool.address,             success: true,         });     });  Подскажите, в какую сторону копать, чтобы пофиксить  UPD: решено. Не вызывал await у userWalletUsdt

Namon: Смотрите что отдаёт userWalletUsdt() (reply to 291786)

X1ag: Отдает jetton wallet  userWalletUsdt = async (address: Address) =>             blockchain.openContract(                 JettonWalletUsdt.createFromAddress(await jettonMinterUsdt.getWalletAddress(address)),             ); (reply to 291788)

Pavel: Ребят, приветствую всех, подскажите пожалуйста, при формировании internal message для трансфера jetton нужно указать amount (в доке минимальный стоит 0.05), есть ли возможность его заранее расчитывать перед формированием мессаджа? Либо если нет, то какое константное значение лучше выставить + как настроить internal message так, чтоб лишнее возвращало к source addr (отправителю)

X1ag: Честно, не понимаю что сделал не так, но в тестах работаю с двумя жетонами впервые (reply to 291789)

pluszak: Привет всем, ребят, а у тона есть публичные сервера как у того же xrp ledger для девелопмента?

SweetJesus: ну отдебажь. Посмотри что вот это чудо напишет в консоль тебе. (reply to 291789)

Laskis: Так что уважаемые разработчики прошу вас помочь с реализацией такого формата нфт на блокчейн тон

Namon: На блокчейне ничего не мешает реализовать такие NFT Если Вы хотите поддержку такого типа NFT у маркетплейсов, кошельков и обозревателей, то связывайтесь с ними отдельно (reply to 291801)

Laskis: Может есть маркет плейс с таким форматом?

Namon: Сомневаюсь (reply to 291803)

Laskis: Жаль а так хочется чтобы такой нфт появился и был (reply to 291804)

X1ag: подскажите, а сторадж контракта вмещает в себя только 4 cell?

rends_east: нет, эти cell-ы же тоже могут еще cell-ы хранить (reply to 291807)

X1ag: а, понял, спасибо

Andrew: стейт контракта (код, сторадж и прочие данные) может быть размером до 65535 ячеек (~8 мб данных)  однако максимальный размер external сообщения 64кб (если ничего не поменялось) (reply to 291807)

rends_east: но лучше этот фронтир не исследовать (reply to 291811)

Andrew: твои слова, да пользователям хайлоад-в2 в уши) (reply to 291812)

X1ag: благодарю за подробную инфу (reply to 291811)

Namon: Если жетон (usdt) не меняется, то почему бы не указывать state init глобал переменной, а не хранить его в сторедже? (reply to 291814)

X1ag: хм, это разумно, не подумал. Спасибо (reply to 291816)

Vlad: Всем привет! Как к контракту присвоить имя и аву?

X1ag: аву невозможно, но имя через ton dns (reply to 291818)

Danya: всем привет,как к транзакции добавить свой комментарий

Danya: const transaction = {     validUntil: Math.floor(Date.now() / 1000) + 360,     messages: [       {         address: '',         amount: '90000',       },       {         address: '',         amount: '90000',       }     ]   };

Namon: import { beginCell } from "@ton/core";  const comment = "my comment"; const payload = beginCell().storeUint(0, 32).storeStringTail(comment).endCell();  const transaction = {   validUntil: Math.floor(Date.now() / 1000) + 360,   messages: [     {       address: '',       amount: '90000',       payload: payload.toBoc().toString("base64")     },     {       address: '',       amount: '90000',,       payload: payload.toBoc().toString("base64")     }   ] }; (reply to 291824)

Danya: без буфера никак?) (reply to 291826)

Namon: можете попробовать просто комментарий указать вместо payload, но не уверен сработает ли (reply to 291827)

Danya: пробовал,всё мимо😭 (reply to 291828)

Namon: загуглите "buffer is not defined" и укажите сборщик (vite/...) (reply to 291829)

Namon: вообще, если комментарий не меняется, можно заранее сформировать payload и указывать его (reply to 291827)

Danya: уже всё сделал,пасиб большой)) (reply to 291831)

Danya: он не статичный (reply to 291831)

Laskis: В гет гемс позволено добавлять HTML код в описание?

Laskis: Просто есть решение интегрировать через inframe

Дмитрий: В тонкипере отображается аватарка при получении переводов от кошельков с привязанными t.me доменами (reply to 291819)

Дмитрий: Берётся из телеги

Дмитрий: А, команда «пофиксила» это и вырезала такую фичу. Класс

Дмитрий: Раньше тут отображалась бы моя аватарка вместо символа транзакции  Было очень даже прикольно

— 2025-02-23 —

Дмитрий: Команда тонкипера в последнее время стала слишком часто вырезать удобные фичи и добавлять неудобства в приложение

Svαtoωλ‎: почему тонапи возвращает   "last_activity": 1720860269 а тонцентр 54050291000002  кому верить, и как из одного переводить в другое, и наоборот

Паша: Первое это unix time, а второе logical time (reply to 291844)

&rey: Сделайте, будет концепт. (reply to 291803)

Mr: Всем привет! Вопрос такой, я пересылаю тон через кошелек, но получаю Aborted: true https://tonscan.org/tx/2638d2b8af42dfea44e88051d1b76b07b66a64d3545ecd455df2eb21a8e4ac0a  Но при этом тоны таки осели на кошельке, на который пересылаю, это норма?

User<8087601461>: Всем привет!   Я перевел тоны на кошелёк, а тоны не поступили, и по транзакциям дали такую метку скам, из-за чего это может быть?

User<8087601461>: Кто разбирается, помогите! (reply to 291858)

Andrey: Потому что это скам (reply to 291859)

Andy: у меня так отмечались транзакции со слишком маленькой суммой

User<8087601461>: Но никакого скама не было, я вывел свои тоны с тоннеля и перевел деньги на основной кошелёк (reply to 291860)

User<8087601461>: До этого секунд 40 назад перевел друзьям, что у них все нормально, а именно со мной вот такие вот дела

User<8087601461>: Если у кого-то есть контакты человека, который может помочь решить проблему, буду благодарен за информацию

User<8087601461>: Я понял, извините за беспокойство, я перевёл на другой кошелёк  UQAhk3aBOe5WnkyfBWQVV7LK5dMhs8zIPL1s0rJKgFEzMDri — кошелёк, на который переводить средства  UQAhrSROa7sCoIiYzo03Js_P8e_GmlSSSXP_9BGe1GPXMDri — это мой кошелек.   Одним словом, моя ошибка

Andrey: Я же сказал вы на скам перевели, а еще спорите… (reply to 291865)

User<8087601461>: Эх, немного затупил, ну бывает. Нужно смириться, не такая уж и великая сумма. (reply to 291866)

настасия: помогите пожалуйста, как переключить тонкипер в тестнет?

Mirka: Добавить кошелек и там есть вариант "аккаунт в testnet" (reply to 291869)

Oleg: Не знаю, для чего тонкипер так сильно пытается защитить юзеров от тестнета, максимально неудобно сделано

настасия: спасибо большое, и вводить сидку уже существующего коша? (reply to 291870)

Andrey: Чтобы не было таких инцидентов как ввыше, но как видите все равно происходит (reply to 291872)

Kampf: testnet.tonscan не работает что-ли? Выходной?  Последняя транзакция много часов назад была

sd: https://testnet.tonviewer.com/transactions (reply to 291877)

Kampf: testnet.toncenter — Тоже умер

Mr: это норма в тоне) (reply to 291877)

Дмитрий: Тонкипер пытается защитить юзеров от комфорта. Чтобы не расслаблялись в крипте (reply to 291872)

Oleg: Просто не вижу, чем Тон такой особенный,- в метамаске, фантоме, еще много где - просто свитч сети и готово (reply to 291883)

Mr: раньше так и было, хз, зачем сейчас так сделали (reply to 291884)

Mr: видимо, чтоб Олег не расслаблялся

Mr: скорее даже свитч rpc (reply to 291884)

X1ag: Добрый день, подскажите пожалуйста как правильно сравнивать адреса в тестах? Выдает вот это. Expected: {"hash": {"data": [168, 150, 81, 21, 236, 48, 54, 47, 90, 177, …], "type": "Buffer"}, "toRaw": [Function anonymous], "toRawString": [Function anonymous], "toString": [Function anonymous], "toStringBuffer": [Function anonymous], "workChain": 0, Symbol(nodejs.util.inspect.custom): [Function anonymous]}     Received: serializes to the same string        322 |     it("jetton wallet in sc right?", async ()=> {       323 |         const userWalletUsdtLiqPool = await userWalletUsdt(liqPool.address);     > 324 |         expect(await liqPool.getWalletAddress()).toEqual(userWalletUsdtLiqPool.address);           |                                                  ^       325 |     })       326 | });

SweetJesus: toEqualAddress (reply to 291892)

Svαtoωλ‎: как логическое время в тоне перевести в юникс тайм.....

Svαtoωλ‎: 1 скрин - тонапи я так понимаю отдает юникс тайм 2 скрин - тонцентр отдает (?) внутренее время тона  я чет окончательно запутался в этом

X1ag: Подскажите пожалуйста, что делаю не так, сижу голову ломаю не понимаю.   У меня есть проверка transfer_notification:  if (op == op::transfer_notification) {     slice my_jetton_wallet_addr = calc_user_wallet(my_address(), jetton_minter_usdt_address, jetton_wallet_code_usdt);       int jetton_amount = in_msg_body~load_coins();     slice address_to_mint = in_msg_body~load_msg_addr();     throw_unless(error::lp::not_a_usdt, equal_slices_bits(my_jetton_wallet_addr, sender_addr)); ;;exit_code: 102                                                .... Но вылетает ошибка 102. Странно, потому что в тестах я отправляю транзакцию и никакой ошибки нет, все проходит  const usdtTransferToContract = await userWalletUsdtDeployer.sendTransfer(             deployer.getSender(), // via sender             toNano('1'), // value             toNano('1'), // jetton_amount             liqPool.address, // to             deployer.address, // response address             Cell.EMPTY, // custom payload             toNano('0.01'), // forward ton amount             Cell.EMPTY, // forward payload         );  Если отречься от тестов и перейти в настоящий бч, то отправляю жетоны(usdt) с помощью скрипта, где собираю такую транзакцию transfer_cell = (begin_cell()                     .store_uint(0xf8a7ea5, 32)          # Jetton Transfer op-code                     .store_uint(123, 64)                  # query_id                     .store_coins(1 * 10**9)             # Jetton amount to transfer in nanojetton                     .store_address(DESTINATION_ADDRESS) # Destination address                     .store_address(USER_ADDRESS)        # Response address                     .store_bit(0)                       # Custom payload is None                     .store_coins(50000000)                     # Ton forward amount in nanoton                     .store_bit(0)                       # Store forward_payload as a reference                     .end_cell())      await wallet.transfer(destination=USER_JETTON_WALLET, amount=int(0.1 * 1e9), body=transfer_cell)  Подскажите пожалуйста, в чем может быть ошибка?

X1ag: При этом адрес считает правильно, потому что через тесты проверял. Мне кажется дело в скрипте, как-то я не так отправляю, но не знаю в чем именно 🤔 slice my_jetton_wallet_addr = calc_user_wallet(my_address(), jetton_minter_usdt_address, jetton_wallet_code_usdt); (reply to 291897)

&rey: 2. адрес+хеш+лт позволяют запросить транзакцию, у неё будет время (reply to 291896)

&rey: Хотя тонцентр делает бред, конечно, потому что в битах самого аккаунта хранится последняя оплата storage fee – обычное unix время

Андрей: Можно создать ишью в тонцентр что бы добавили (reply to 291901)

Alex: Нужно в приложение подключить Ton кабинет . Напишите в лс

Andrey: Никак (reply to 291894)

Andrey: Вопрос из разряда «как seqno в unixtime перевести»  LT это считай порядковый номер в какой последовательности транзакции исполнялись логически, а не фактическое время исполнения

Mr: блин, а почему тут -14? https://tonscan.org/tx/b15a771f05ba3eb668fa5ed9a64320d5a7329986ee78667e75db095df92a4a1a пересылаю 0.0001 ТОНа в separate режиме, баланса точно хватает на трансфер

&rey: Но не хватает кошельку назначения, чтобы проверить, плагин ли вы и просите ли денег. (reply to 291906)

Mr: Это как? (reply to 291907)

Mr: Даже если он что-то делает, то почему он не берет комсу с отправителя?

&rey: https://docs.ton.org/v3/documentation/smart-contracts/contracts-specs/wallet-contracts#receiving-internal-messages. А комиссия НИКОГДА не берётся с других контрактов, только с того, где происходит транзакция. Логически — или с баланса контракта, или из денег входящего сообщения. (reply to 291908)

Mr: Так а почему транзакция то фейлится? (reply to 291910)

Mr: все средства приложены же

&rey: а кошельку в4р2 этого не хватает (именно поэтому лучше v3r2 по умолчанию) (reply to 291912)

Mr: так forward fee 0.0026 вообще, что больше compute fees (reply to 291913)

&rey: Ну, эту-то комиссию SEND_PAY_GAS_SEPARATELY оплатил, а compute контракта назначения заранее неизвестен. (reply to 291914)

Mr: тогда я чет не понял, я поставил SEND_PAY_GAS_SEPARATELY, я так понял, что за все должен будет оплатить отправитель и так же указано forward fee, или это вообще другое? Почему комса берется из value, а не из forward fee? я чет вообще запутался в этих комиссиях (reply to 291916)

&rey: forward_fee только за то, что блокчейн ваше сообщение заберёт и доставит. Почтовые марки, по сути. (reply to 291917)

Mr: и спысывается оно с отправителя отдельно от value? а если не ставить SEND_PAY_GAS_SEPARATELY, то спиштеся с value? (reply to 291918)

Mr: Тогда еще 1 вопрос, я сейчас прислал сообщение с 0.0001 на compute стадию value не хватило, но с баланса получателя допом списалось то, что не хватило, это норм? Ведь тогда получается, что я могу таким образом осушить чей нибудь кошелек

Mikael: всем привет. Кто нибудь имел опыт запуска кампаний в Telegram Ads? И может быть кто-то знает, можно ли оттуда вывести баланс, если его не потратил?

&rey: Не-а, только storage fee. (reply to 291920)

Mr: А, с баланса допом списалось только storage fee? (reply to 291922)

final: в чем разница между load_uint и preload_uint? я так понимаю, что load вытаскивает из body, а preload оставляет его нетронутым?

Victor: да, все верно (reply to 291929)

Tim: Там ещё в стеке разница. preload дропает слайс

Роберт: Привет а как в crypto bot testnet получить тестовые монеты?

X1ag: у кого нибудь есть код как jetton minter address собрать чтобы на него опкод с минтом слать? Поделитесь пожалуйста  Или только прокидывать при деплое?

&rey: Ну, обычный адрес жетона. Именно он является уникальным идентификатором, не тикер (название). (reply to 291940)

X1ag: а если в смартконтракте нужно зашить логику, чтобы он сам собирал адрес минтера и отправлял туда op::mint (reply to 291941)

X1ag: у меня просто такая проблема образовалась, что я не знаю как моему СК прокинуть адрес минтера, и минтеру указать в качестве админа мой СК.   Чтобы минтить мог только мой контракт

&rey: а нельзя ваш контракт собственно жетон-мастером сделать?

Oleg: address = hash(stateInit), т.е. либо хардкодить себе адрес, либо иметь у себя копию stateInit (reply to 291942)

&rey: Обычно переводят админство жетон-мастера после того, как создадут контракт. (reply to 291943)

X1ag: понимаю, но в state init же находится и data, а в data собственно должен быть адрес, а как я его получу если контракт не задеплоен (reply to 291945)

X1ag: воо, да и правда. Забыл. Спасибо, попробую) (reply to 291946)

ㅤ: есть библиотека питона для покупки звезд и премиума на фрагменте на верифицированном аккаунте? или можно как то отправить транзакцию с данными?

OMG: Если владеешь питоном, то самому написать не составит труда) (reply to 291954)

odnokasanie: Коллеги, если на самописном контракте есть ton’ы, на него отправляется сообщение пользователем, в обработчике сообщения минтится жетон.  Как сделать, чтобы для пользователя сообщение было без оплаты, затраты шли бы с баланса ton контракта? Без оплаты - это возвращать столько же тон, сколько он отправил? Дайте наводку, или идеально - пример

Oleg: mode 65, в исходящем шли 0 (reply to 291960)

Denis: Это кстати неправда (reply to 291819)

Denis: Мы вроде не вырезали. Возможно телеграм порезал отдачу картинок (reply to 291843)

Denis: Потому что это довольно популярный способ скама и народ исхитряется прорваться даже через такие неудобства чтоб заскамиться 🤷‍♂ (reply to 291872)

Oleg: Так сделайте выпуск спецом для девелоперов) (reply to 291968)

&rey: Так можно же выбрать спец приложение кошелька? Например, тот, который назван "для разработчиков" ака TonDevWallet))) (reply to 291969)

KTO: Раньше можно было удобно переключить, а сейчас нужно специально кошелёк добавлять (reply to 291968)

Oleg: Он довольно отстойный по функциональности, крайний раз по крайней мере таким был, когда я проверял) (reply to 291970)

Denis: Нельзя по правилам всяких пидоров из апсторов и гуглоплеев (reply to 291969)

KTO: Туда этих гуглов и эпхонов

Denis: Это вы ещё не пробовали тестнет в телеге включить (reply to 291971)

Denis: Я бы с удовольствием, но вроде мы тут грезим масадопшеном. (reply to 291974)

KTO: Вы про это? (reply to 291975)

Дмитрий: А можете вернуть свайп вправо для возвращения на предыдущую страницу и свайп вниз для обновления страницы? Было удобно раньше, сейчас неудобно (reply to 291967)

Дмитрий: Фиг с этими аватарками, но внутренний браузер даже открывать не хочется

Дмитрий: Из-за отсутствия жестов

Denis: Нет. В телеграмме есть тестовая среда (reply to 291978)

Denis: @maydan (reply to 291979)

Denis: Аватарки кстати должны работать. Вот у пескаря работает https://tonapi.io/v2/accounts/shibdev.t.me (reply to 291980)

Дмитрий: У меня не работают почему-то. В тонкипере не отображаются

KTO: Вы разработчик тонпикпера? (reply to 291984)

Дмитрий: Ещё было прикольно когда FT и NFT были на одной странице  Как здесь например  Сейчас для нфт отдельная вкладка в таббаре(или как называется нижнее меню?)

Дмитрий: Старые скрины вчера понаходил

Denis: Это не соответствует долговременным планам на развитие экосистемы (reply to 291987)

Denis: Если сильно упрощено, то можно сказать да (reply to 291986)

Алексей: А кстати, можно как-то запросить, чтоб картинку на аккаунте переиндексировали? Не то я аву в тг поменял, но тонапи старое из кеша выдает (reply to 291984)

Дмитрий: А почему не соответствует? Что то - токены, что это. Просто немного разные варианты (reply to 291990)

Denis: Мы в какой-то момент доделаем рефреш (reply to 291992)

— 2025-02-24 —

9778: а для чего это? (reply to 291869)

Den: 👋,подскажите, есть какая-то библиотека или сервис OSS, который позволяет генерировать кошельки для принятие платежей? Мне надо что-то, что позволит принимать обплату за подписку на Телеграм бот, на разных цепочках, включая TON

&rey: gobicycle bicycle, допустим. (reply to 292031)

𝑹𝑶𝑴𝑨𝑵: Привет, может кто подсказать по tonconnectUi? После вызова sendTransaction, я подписываю в кошельке транзу но потом меня не перекидывает обратно в приложение, я явно указал стратегию возврата back, но чет меня обратно не перекидывает

Andrei: Добрый день. При вызове функции tonconnectUI.sendTransaction() Выводится модалка для подписи транзакции и отправки ее для исполнения. Возможно ли реализовать такую логику: 1.Подписать с помощью tonconnectUI сообщение 2.Получить публичный ключ подписанного сообщения 3.Отправить этот ключ с сообщением через чат 4.Получатель зная адрес кошелька отправителя и публичный ключ подписанного сообщения проверяет с помощью tonconnectUI, что это сообщение именно от того пользователя, кто его подписал  Т е меня интересует, как подписать с помощью tonconnectUI любую строку

Семен: Насколько я знаю такое невозможно Но tonConnect при подключении по QR коду генерирует proof, уникальный для вебсайта и для адреса кошелька пользователя И этот proof можно использовать для авторизации на бекенде например.   https://docs.ton.org/v3/guidelines/ton-connect/guidelines/verifying-signed-in-users (reply to 292077)

Andrei: Спасибо. Я эту инфу нашел. У меня нет бека, мне нужно провернуть это именно на фронте. Поэтому интересует как подписать пересылаемое сообщение (reply to 292078)

Denis: Такая возможность в разработке (reply to 292077)

Andrei: Спасибо (reply to 292081)

&rey: Никто же не может, кроме отправителя, послать сообщение с кошелька отправителя. (reply to 292080)

Andrei: Мне нужно отправить сообщение через внутренний чат, чтобы получатель был уверен, что это отправил именно тот, с кем он переписывается. (reply to 292083)

Никита: Здравствуйте!  Я пытаюсь интегрировать обмен TON в актив FPIBANK с использованием SDK STON fi (версии v2_1). Я попробовал использовать адреса с документации, но используя их транзакции завершаются с ошибкой.  Подскажите, пожалуйста: 1. Каковы актуальные адреса для pTON и Router для основной сети (mainnet)? 2. Есть ли рекомендации по самостоятельному поиску этих адресов?  Заранее спасибо за помощь!

sd: Там куча отдельных роутеров для разных токенов, для прямого свопа нужно найти конкретный, про сдк хз (reply to 292086)

&rey: Ну, для внутреннего чата стоило бы использовать ещё и временные ключи, которые разные для разных фронтендов. (reply to 292084)

sd: >40 роутеров уже  https://tonviewer.com/EQBnGWMCf3-FZZq1W4IWcWiGAc3PHuZ0_H-7sad2oY00o83S?section=holders (reply to 292086)

Alex: Ищу разработчика для доработки приложения!  Задачи:  • Подключить Ton кабинет  • Подкорректировать цены  пишите в ЛС!

PR: Как используя toncenter API понять, что весь баланс на адресе подтвержденный?

&rey: 100% указанного подтверждено. (reply to 292103)

&rey: В тоне все блоки (подписанные 2/3 валидаторов и указанные в мастерчейне) финальные, а тонцентр берёт данные из блоков.

PR: То есть, если он показывает баланс, значит этот баланс уже подтвержденный? (reply to 292104)

🐼 Sild: используйте что-то типа https://api.ston.fi/swagger-ui/#/Dex/dex_simulate_swap для получения правильных адресов по вашим токенам  ончейн-оракула пока не завозили насколько я знаю (reply to 292086)

Denis: Да (reply to 292106)

Bohdan: подскажите что означаэт эта ошибка?  data: {       ok: false,       error: 'VALIDATE_CONFIGGot a vm virtualization exception: prunned branch',       code: 500     }

Sema: Здравствуйте.  Подскажите пожалуйста, как запустить контракт на аукцион днски , если она просрочилась?   Я знаю, что нужно на контракт днски заслать сумму аукциона, но что писать в комменте, чтоб сработал контракт на запуск аука?   В тонвивере пишет DnsBalanceRelease , но у меня распознаёт просто как текстовый коммент и возвращает деньгу.   Раньше работала ссылка вида  https://app.tonkeeper.com/transfer/0:4693e2f22109f8c6c2d0ed63c3b9e9cf8560bd0d49a472f75d0ec85e6c0d771e?amount=1000000000&bin=te6cckEBAQEADgAAGE7RS2UAAAAAAAAADacdAXI=  Но сейчас тонкипер пишет не верная. Хотя по идее она верная. Как мне запустить контракт te6... который?   Спасибо =\  #dns #истёк #днс

Max: Десктопный тонкипер? (reply to 292121)

Sema: Нет, мобильный. (reply to 292122)

Sema: Обновил видать зря.

Max: Подскажите пожалуйста ОС и версию клиента

Sema: Xiaomi hyper os 2.0.6.0   Тонкипер 5.0.21 (965) (reply to 292125)

Max: благодарю, передам разработчикам андроида

Sema: Версия с сайта которая. Не из плеймаркета (reply to 292127)

Max: Версии с сайта и с плеймаркета практически идентичны, за исключением фичи автообновлений

sd: в коменте нельзя, нужно именно сбилдить пикрил сообщение  пока оф интерфейс не обновляют и ссылки в кипере не работают можно вбить нужный днс в акт  https://v2.act.ghwnd.cc/shared/dns (но проверяйте всё, это тест тулза) (reply to 292121)

Anton: будет фикс скоро (reply to 292121)

Sema: Спасибо большое. Посмотрю. А то я поиском прошёл и всем именно через ссылку советуют. (reply to 292132)

Sema: Отлично, смотрю по тон виверу, всё сработало. Ещё раз спасибо. (reply to 292132)

sd: после того как первая ставка сделана уже можно смотреть через обычный dns.ton.org (reply to 292136)

Sema: Да, это я понимаю. (reply to 292137)

execution: А с какими чейнами в тестнете есть мосты?

Bohdan: что то опять висит то ли тестнет, то ли tonviewer

— 2025-02-25 —

rends_east: Привет всем Записываю адрес в cell на такте, в func считываю. Не считывается, slice занимает всего 44 бита Как записать так, чтобы в func считалось? Или как считывать, чтобы все было норм?)  UPD: проблема актуальна

/B4ckSl4sh\: а в какой момент 44 бита появляются? Таких адресов не бывает и такт должен кинуть ошибку при записи (а если всё же попало то фанси кинет ошибку при чтении) (reply to 292151)

rends_east: считываю через load_msg_addr, потом дамплю slice_bits от получившигося значения, дампится число 44 (reply to 292158)

rends_east: адрес не нулевой, я задампил его в такте, там норм адрес

/B4ckSl4sh\: Надо полагать что ошибка тогда где-то в другом месте, если на стороне такта записался норм адрес а на стороне получателя читается уже какая-то фигня (reply to 292161)

rends_east: Решение было найдено, спасибо @B4ckSl4sh Такт на нынешней версии перезаписывает данные контракта всегда в конце исполнения, из-за этого у меня стейт перезаписывался и возникала коллизия В новых версиях обещают таким не заниматься

Grigoriy: Привет, в контракте надо запоминать сколько юзер получил монет, при скольки юзерах возникнут проблемы с hashmap? Как рассчитать примерный газ при 5000,10000 юзеров? Ключ будет address, а значение uint64

User: В идеале конечно, если уж нужно под каждого пользователя содержать какие-то данные, то нужно минтить дочерние контракты под каждого пользователя отдельно, пример можно посмотреть в реализации жетонов (reply to 292166)

Grigoriy: Ага, но мне нужен контракт единоразово для пользователя, поэтому не вижу смысла в минте под каждого. Как рассчитать газ? Я буду его деплоить с уже заполненным hashmap (reply to 292168)

/B4ckSl4sh\: если деплоить с заполненным то 10к пока ещё норм должно быть (reply to 292169)

кивель: Всем привет! Какую python библиотеку стоит использовать для создания транзакций/парса токенов с кошелька и оценки их стоимости/создания кошелька?  А то я запутался окончательно во всех питоновских либах

кивель: pytoniq? (reply to 292173)

Eleniya: Всем привет. Можеь кто-то знает надёжного гаранта? Желательно, чтоб принимал по крипте

Mirka: Или tonutils  Чат для python ton разрабов: @pythonnton (reply to 292174)

кивель: О, не знал (reply to 292186)

User<7256400804>: Всем привет,  а есть ли какой-то вариант в тонкипере отключить слайдер для подтверждения транзакции? Хотя бы для определённых App? Например,  для Stormtrade скорость очень важна,  а слайдер сильно тормозит юзабилити

Victor: Нет, не возможно. Если вы хотите добиться большой скорости, то советую написать свой код и взаимодействовать с кошельком напрямую. (reply to 292189)

Denis: Сдвинуть слайдер это меньше секунды. На фоне задержки на включения сообщения в блок и т.п. это копейки (reply to 292189)

User<7256400804>: Приведу пример,  пользователь открыл транзакцию на Stormtrade, у него +340$. Пользователь пытается их зафиксировать, а у тонкипера выскакивает слайдер (подтверждения транзакции) в итоге время уходит и фиксируется минус. Пользователь ругается и понимает,  что этим пользоваться невозможно.  Может можно сделать в настройках опционально отключения подтверждения для определённых App? (reply to 292191)

User<7256400804>: Пользователи Stormtrade будут очень благодарны:)

Андрей: Нет (reply to 292192)

User<7256400804>: Ну и очень зря, сейчас этим пользоваться невозможно (reply to 292195)

Андрей: Читайте предыдущее сообщение: https://t.me/tondev/292190 (reply to 292197)

User<7256400804>: И что? Вы только подтверждаете,  что связка тонкипера и stormtrade не работает (reply to 292198)

User<7256400804>: Столько лет делаете и всё ещё невозможно пользоваться,  тьфу блин:)

User<7256400804>: Ребята из Stormtrade,  а вы можете сделать свой кошелёк внутри Stormtrade? Без слайдера? Сами подумайте,  насколько это важно для пользователей

User<7256400804>: StormWallet

User<7256400804>: Это бы решило проблему

User<7256400804>: Возможно такое решение даже более грамотное будет,  так как латенси ещё быстрее будет

User<7256400804>: Подумайте пожалуйста

User<7256400804>: И где взять этот MPC кошелёк?

User<7256400804>: Короче,  очень всё мудрено

User<7256400804>: Надо для массового пользователя,  чтобы работало всё из коробки - не вижу сложностей сделать нормально

sd: Ну, нигде, пока его не сделали. Вы же не разработчик, общайтесь в тематических чатах проектов - они есть и у шторма, и у тонкипера. Этот чат - про код.

User<7256400804>: Я разработчик, C++, я помогаю же, обьясняю что пользоваться нельзя.  В тот раз жаловался на скорость и посмотрите, как круто сделали нативный тонкипер. (reply to 292217)

User<7256400804>: Может и в этот раз, кто-то услышит и сделает:)

Denis: Забавно что какие-то юзеры ругаются на кнопку которую так легко случайно нажать и хотят слайдер (reply to 292204)

sd: Первое сообщение в чате - час назад 😆 (reply to 292218)

Victor: У вас задача очень узкая, поэтому ее лучше решать с помощью своего кода, так как ради вас что-то добавлять в приложение не будут.  Этот слайд сделан для безопасности, чтобы сначала ознакомиться с тем что вы подписываете и затем уже подписать. Но скорости это вам не добавит, поверьте. (reply to 292219)

Дмитрий: Есть ещё время доставки транзакции в блокчейн. Примерно 5 секунд если не ошибаюсь. В итоге разница между 5 и 6 секундами не сильно изменит вашу жизнь  Если вам просто неудобно позиции закрывать - то попробуйте использовать лимитные ордера) (reply to 292192)

Denis: это если он еще целую секунду движок двигал. для меня разница между нажать кнопку и сдвинуть слайдер меньше раза в 2 (reply to 292231)

Дмитрий: Ну там ещё пока окно транзакции появится. С запасом 1 секунда (reply to 292232)

X1ag: Всем добрый день, подскажите пожалуйста, чтобы вместе с отправкой жетона отправить какие-то данные их нужно кидать в custom payload или forward payload? const usdtTransferToContract = await userWalletUsdtDeployer.sendTransfer(             deployer.getSender(), // via sender             toNano('1'), // value             toNano('1'), // jetton_amount             liqPool.address, // to             deployer.address, // response address             null, // custom payload             toNano('0.05'), // forward ton amount             beginCell().storeUint(0x0001,32).endCell(),         );  И парсить примерно так? if (op == op::transfer_notification) {     int jetton_amount = in_msg_body~load_coins();     slice address_to_send = in_msg_body~load_msg_addr();     int load_ref = in_msg_body~load_int(1);     if (load_ref) {       in_msg_body = in_msg_body.preload_ref().begin_parse();     } else {       throw(error::wrong_payload);     }     int jetton_op_code = in_msg_body~load_uint(32);

Victor: import { beginCell, toNano, Address } from '@ton/ton'     // transfer#0f8a7ea5 query_id:uint64 amount:(VarUInteger 16) destination:MsgAddress     // response_destination:MsgAddress custom_payload:(Maybe ^Cell)     // forward_ton_amount:(VarUInteger 16) forward_payload:(Either Cell ^Cell)     // = InternalMsgBody;      const destinationAddress = Address.parse('put destination wallet address');      const forwardPayload = beginCell()         .storeUint(0, 32) // 0 opcode means we have a comment         .storeStringTail('Hello, TON!')         .endCell();      const body = beginCell()         .storeUint(0xf8a7ea5, 32) // opcode for jetton transfer         .storeUint(0, 64) // query id         .storeCoins(toNano("5")) // Jetton amount for transfer (decimals = 6 - USDT, 9 - default). Function toNano use decimals = 9 (remember it)         .storeAddress(destinationAddress) // TON wallet destination address         .storeAddress(destinationAddress) // response excess destination         .storeBit(0) // no custom payload         .storeCoins(toNano("0.02")) // forward amount (if >0, will send notification message)         .storeBit(1) // we store forwardPayload as a reference         .storeRef(forwardPayload)         .endCell(); (reply to 292234)

Андрей: Да там явно скамер не в восторге что его скам транзакцию надо подтверждать, а хочется что бы монеты списывались без подтверждения (reply to 292222)

X1ag: благодарю (reply to 292235)

KTO: Привет, есть где-нибудь информация о метаданных Jetton, где указывается, сколько максимум должно быть символов в названии, описании, в ссылке на icon?

delthisgem: такое?  https://github.com/ton-blockchain/TEPs/blob/master/text/0064-token-data-standard.md#:~:text=Data%20that%20does%20not%20fit%20in%20one%20cell%20can%20be%20stored%20in%20two%20ways%3A (reply to 292253)

KTO: Тут просто стандарт, но не указано, сколько максимум символов должно быть в названии, описании, ссылке (reply to 292254)

Denis: Это вроде никто не стандартизовал. (reply to 292255)

KTO: Можно любое количество?

Denis: У всех свои ограничения

Denis: В теории да. На практике например у тонапи.ио (а значит и в тонкипере) есть свои ограничения (reply to 292257)

KTO: Плюс минус какие? (reply to 292259)

Denis: Разумные

KTO: Название - 120 символов Описание - 380 символов Ссылка - 260 символов

Denis: На название всем пофиг. Волнует symbol. И там меньше

KTO: А в символ сколько максимум примерно? (reply to 292263)

Denis: 🤷‍♂

delthisgem: сейчас придумаем стандарты) давай до 16 😁 (reply to 292264)

KTO: ХЫхы

𝖘𝖔𝖜𝖑𝖈: коллеги, подкиньте бота который тестнеты раздавал

Max: @testgiver_ton_bot (reply to 292270)

𝖘𝖔𝖜𝖑𝖈: благодарю (reply to 292271)

X1ag: подскажите пожалуйста, правильно ли я проверяю транзакции в тестах? Я должен отправить USDT на контракт, чтобы он сминтил мне другие токены. Посмотрел транзакции на tonviewer, вроде должно быть так, но почему то кидает ошибку   const usdtTransferToContract = await userWalletUsdtDeployer.sendTransfer(             deployer.getSender(), // via sender             toNano('1'), // value             toNano('1'), // jetton_amount             liqPool.address, // to             deployer.address, // response address             beginCell().storeBit(0).endCell(), // custom payload             toNano('0.05'), // forward ton amount             beginCell().storeBit(1).storeUint(0x0001,32).endCell(),         );         expect(usdtTransferToContract.transactions).toHaveTransaction({             from: userWalletUsdtDeployer.address,             to: userWalletUsdtLiqPool.address,             success: true,         });          expect(usdtTransferToContract.transactions).toHaveTransaction({ <--- here error             from: jettonMinterLP.address,             to: userWalletLPDeployer.address,             value: toNano('0.05'),             success: true,         })          expect(usdtTransferToContract.transactions).toHaveTransaction({             from: userWalletLPDeployer.address,             to: deployer.address,             success: true,         })

Timur: Tonkeeper не хочет возвращаться к моему мини-приложению после подписания external сообщения, я использую iPhone, это нормально? Я просто помню, что несколько месяцев назад это работало хорошо! Могу ли я как-то это исправить?  Ton Space от @wallet работает хорошо  Я использую tonconnect/ui и свою конфигурацию вот так:  new TonConnectUI({ actionsConfiguration: {     twaReturnUrl: 'https://t.me/my_bot',     returnStrategy: 'back',    }, })   спросил в начале в английском чате по тону, ответили что не по теме, потом написал в группу Чат Тонкипера, ответили что сюда лучше спросить, ох уже эти качели)   P.S если не по теме дико извиняюсь

Mr: Други привет, подскажите, sendBocReturnHash, два message.  если денег недостаточно, он сжирает весь баланс повторными отправками.   как это лечить??

&rey: Режим 2 включить на сообщениях (обоих). (reply to 292287)

Mr: благодарю!) (reply to 292288)

X1ag: Подскажите пожалуйста, почему выдает exit code: 5 (integer out of expected range), когда пытаюсь отправить больше 1 токена?   Транзакция где отправляю > 1 usdt Транзакция где отправляю 1 usdt  На контракте обрабатываю transfer_notification следующим образом:  if (op == op::transfer_notification) {     int query_id = in_msg_body~load_uint(64);     int jetton_amount = in_msg_body~load_coins();     slice address_to_send = in_msg_body~load_msg_addr();     int load_ref = in_msg_body~load_int(1);     if (load_ref) {       in_msg_body = in_msg_body.preload_ref().begin_parse();     } else {       throw(error::wrong_payload);     }     int jetton_op_code = in_msg_body~load_uint(32);

KTO: Как можно узнать decimals токена, который был получен в receive? Или как в самом jetton мастере получить этот decimals?

rends_east: Что значит "получить"? Ончейн? (reply to 292293)

KTO: При создании смарт-контракта передается content: Cell  Как можно изъять отсюда decimals?

KTO: Мне нужно определить сколько монет мне отправили. Допустим 1 монета при  decimals 9 = 1 000 000 000 Другая монета при  decimals 6 = 1 000 000  Но, чтобы правильно разделить, нужно знать decimals монеты

Оскар: наглядный пример XY проблемы, скажите что хотите сделать, decimals никогда не должны использоваться ончейн, это просто число для того чтобы оффчейн сервисы могли вместо кучи нулей показывать красивые числа и наоборот - из красивых чисел получать кучи нулей и уже их передавать смартам (reply to 292296)

sd: decimals это запятая на фронтенде, твой контракт получает столько монет, сколько получает, как бы это не звучало (reply to 292296)

KTO: Когда человек отправляет монеты они приходят в сообщение со значением Amount И у каждой монеты этот Amount разный в зависимости от decimals (reply to 292297)

X1ag: decimals всегда = 9  а вот amount это как раз таки число умноженное на 10**9 (reply to 292299)

KTO: Я знаю, но если у монеты decimals=6, то amount будет 10**6  Каким образом я должен определить decimals (reply to 292300)

Оскар: этот человек должен заранее их переделать, достав decimals из контента, а на смарт уже отдать целочисленный баланс  такой вопрос на засыпку, как вам в смарт приходит тот же amount = 420.69? не уж ли строкой (reply to 292299)

KTO: Если бы у меня не было такой проблемы, то я бы не задавал этот вопрос.  С монетой decimals = 6 мне приходит число 10**6 decimals = 9 => 10**9  Я хочу определить какой decimals у монеты (reply to 292302)

sd: Зачем

KTO: Ну нужно мне

Andrey: Нет, amount это ровно то число которое пришло, decimals только для красивого отображения нужен, не более (reply to 292299)

Andrey: Никак, с стороны смартконтракта decimals не судествует (reply to 292301)

Оскар: еще раз повторяю - decimals НИКОГДА не должен как либо участвовать в ончейн логике, может вам смогут помочь если вы подробнее расскажете зачем вам так это нужно (reply to 292305)

KTO: Т.е при получении 1 TON Я получу  1.000.000.000 И при 1 USDT Тоже 1.000.000.000 в amount? (reply to 292307)

Oleg: 1_000_000 (reply to 292309)

KTO: Ну т.е числа всё-таки разные (reply to 292311)

Andrey: С стороны контракта это не имеет значения (reply to 292312)

Oleg: Контракт ваш, это означает, что вы принимаете заранее известный токен, с децималями будете разбираться уже на фронте (reply to 292312)

Andrey: Вы одно число делите на другое - получаете курс (соотношение одних токенов к другим)

KTO: А если я получаю заранее не известный токен, то я не смогу получить его decimals, чтобы определить количество полученных токенов (reply to 292314)

Oleg: неизвестные токены надо игнорировать и все дела (reply to 292316)

KTO: Ну т.е решения нет

Andrey: У вас количество токенов это вот это большое число, вам decimals ончейн не нужен (reply to 292316)

KTO: Пример:  Если мне отправят 1 монету с decimals 9 Я получу: 1 000 000 000 Или 1000 монет с decimals 6 Я получу: 1 000 000 000  Как я пойму, получил я 1 или 100.

Oleg: А что вы хотите сделать в конечном итоге, когда поймете? (reply to 292321)

Andrey: Для чего вам понимать что 1 целый токен а что 100 это целый токен? Для каких операций? Почему нельзя эти операции делать с нанотокенами? (reply to 292321)

KTO: Ну мне просто интересно. Я хотел определять точное количество монет. В соответствии с тем примером, что я написал.  Чисто из-за интереса (reply to 292323)

Andrey: Точное количество монет это и есть нанотокены, этот amount (reply to 292324)

Andrey: Decimals только для отображения в UX нужен. В контрактах ЕГО НЕ ДОЛЖНО БЫТЬ

KTO: Ну ладно, спасибо

Алексей: ваще вроде в стейбл пулах дедаста используется decimals в контрактах) только они при создании туда их помещают

Oleg: Потому что при свопе используют операцию muldiv и там нужен конкретный множитель или делитель, чтобы размерность сохранялась (reply to 292328)

X1ag: Подскажите тут, пожалуйста (reply to 292292)

&rey: Обратно в 32 бита это значение не запихать, оно может быть все 120 бит в длину. (reply to 292292)

KTO: query_id: 0 amount: "4000000000" sender: 0:0000000000000000000000000000000000000000000000000000000000000000 forward_payload:   is_right: false   value: {}  Как понять, мне пришло 4 монеты при decimals 9 Или 4000 монет при decimals 6

— 2025-02-26 —

Oleg: Пришло 4000000000 монет, если речь о сферических монетах в вакууме (reply to 292333)

Andrey: тут вам пришло 4000000000 (reply to 292333)

odnokasanie: Коллеги, разрабатываю смарт контракты на основе blueprint, а деплоить нужно будет на сайте с подтверждением подключенным польователем кошельком.  сделаю endpoint на сервере, который формирует данные транзакции, а на клиенте после получения инициирую транзакцию с интерактивным подтверждением.  так вот, на сервере не хочу держать blueprint, исходный код контрактов.  как на сервере хранить скомпилированный контракт под blueprint и из него формировать транзакцию?  Вообще может быть есть конфиг для какого-нть CI/CD, который формирует артефакт - бинарный код контракта, который я подхвачу при деплое серверной функции по формированию данных транзакции для клиента.  не хотелось бы изобретать велосипед, а взять пример и его уже адаптировать под свои нужды.  подойдет и код, который сохраняет бинарный код скомпилированного контракта из blueprint и далее с его помощью формируется на клиенте транзакцая на деплой.

Konstantin: Blueprint при компиляциии контракта сохраняет его бинарный код в json (не помню точно название) файле, можешь оттуда его взять. Ну а потом cell.fromHex. (reply to 292358)

odnokasanie: спасибо, поищу файл, а нет ли примера кода как с cell.fromHex() дойти до полного формирования транзакции на клиенте имея бинарный код контракта? (reply to 292361)

Konstantin: Посмотри в том же blueprint транзакцию деплоя, должна быть (reply to 292362)

odnokasanie: да, но там деплой через блюпринт, а мне надо через ton-client типа (reply to 292363)

SweetJesus: не поверишь, но блюпринт тоже использует под капотом клиент. орбс (reply to 292364)

Konstantin: Да, там можно посмотреть саму транзакцию. Через ton-client можешь глянуть в доке был пример полного цикла от контракта до Web-app,там есть. (reply to 292364)

X1ag: Спасибо (reply to 292331)

Yan: Коллеги подскажите)   Как с использованием мнемоники из своего тон спейса я могу получить тот же кошелек в tonWeb?   const keyPair = await mnemonicToWalletKey(       mnemonic, // string[]       "pass??"  // видимо тут причина?       );

&rey: Версию кошелька правильную поставить, пароль не требуется вроде. (reply to 292376)

Yan: вот тут версия прописывается?  tonWeb.wallet.create (reply to 292387)

Alexey Toropov: всем привет! могу поделиться ивентом для девов и фаундеров в Москве (2 марта)? быть может кому-то будет интересно

Yan: если комуто будет полезно то напрямую через create нельзя создать другую версию кошелька.   Вот рабочий код:   const WalletClass = TonWeb.Wallets.all["v4R2"];     const wallet = new WalletClass(this.tonWeb.provider, {       publicKey: keyPair.publicKey,       wc: 0,     }); (reply to 292388)

X1ag: Всем добрый день. Подскажите пожалуйста, как можно сделать так чтобы get method не округлял значения, когда я делю int64 на int64. Потому что сталкиваюсь с такой проблемой, может кто-то знает ее решение?

X1ag: Или что-то делить в контракте и отдавать это через get method является bad practice? (reply to 292392)

Оскар: смарты работают только с целыми числами, отдают соответственно тоже (reply to 292392)

X1ag: Видимо, я вас не понимаю expect(await liqPool.getBalance()).toBe(21000000000n); expect(await liqPool.getSupply()).toBe(11000000000n); const initialSupply = await liqPool.getSupply(); const initialUsdtBalance = await liqPool.getBalance(); expect(await liqPool.getPrice()).toBe(Number(initialUsdtBalance) / Number(initialSupply));  Совсем разные числа отдает. В recieved оно округляет, а то как я написал по отдельности не округляет и возвращает верный результат. Потому что 21 / 11 = 1.9...  int get_lp_price() method_id {   (   int supply, ;; DLP supply   int usdt_vault_balance, ;; usdt vault balance   cell jetton_wallet_code_usdt, ;; jetton content (data)   slice jetton_minter_lp_address, ;; master address lp   slice jetton_minter_usdt_address, ;; usdt master address    slice owner_addr ;; owner address (usually me)   ) = load_data();      return usdt_vault_balance / supply; }  Делю в тупую) (reply to 292395)

&rey: int — ЦЕЛЫЕ числа. По определению. (reply to 292396)

Оскар: вы в js коде делите число с плавающей запятой на число с плавающей запятой - получаете число с плавающей запятой  в контракте вы делите целочисленное число на целочисленное число, получаете целочисленное число, отбрасывая остаток (reply to 292396)

X1ag: А, прошу прощения, затуп. А можно ли как-то числа с плавающей точкой использовать? Или как мне исправить положение? (reply to 292397)

&rey: TVM не поддерживает float в принципе. Возвращайте пару чисел. (reply to 292399)

X1ag: понятно, спасибо (reply to 292400)

Оскар: нельзя, но можно сделать аппроксимацию - умножайте числитель на некий PRECISION_FACTOR, для примера PRECISION_FACTOR = 1000 (3 знака после запятой) usdt_vault_balance = 190909090 supply =                          100000000 usdt_vault_balance * PRECISION_FACTOR / supply = 1909 в итоге контракт отдаёт 1909, мы уже у себя кастуем в плавающую и делим на этот же PRECISION_FACTOR, получаем 1.909  но всё же лучше как посоветовали выше - отдать пару чисел (reply to 292399)

X1ag: ого, понятно. Спасибо :) (reply to 292402)

X1ag: А такая реализация как вам? Увидел в контрактах jvault   ;; taken from Openlib (https://github.com/continuation-team/openlib.func/blob/main/openlib.func) builder store_number10(builder b, int x) asm """   ZERO                                                        // b x i=0   SWAP                                                        // b i=0 x   UNTIL:<{                                                    // b i x     10 PUSHINT DIVMOD                                         // b i x r     48 ADDCONST                                               // b i x r     s3 s1 s3 XCHG3                                            // r b x i     INC                                                       // r b x i     s1 s0 XCPU                                                // r b i x x     ISZERO   }>   DROP   REPEAT:<{ 8 STU }>                                          // ..rrr.. b i """;   builder store_str_float(builder b, int number, int ten_pow_decimals) {     (int int_part, int dec_part) = divmod(number, ten_pow_decimals);     b = b.store_number10(int_part);     if (dec_part == 0) {         return b;     }      ;; displayed decimals = max(min(jetton_decimals, 4 - log10(int_part)), 0)     int max_dec_part = (int_part) ? (10000 / int_part) : 10000;     int zeros = 0;     int tmp = ten_pow_decimals / (dec_part + 1);     while (tmp >= 10) {         tmp /= 10;         max_dec_part /= 10;         zeros += 1;     }     if (max_dec_part == 0) {         return b;     }     while (dec_part > max_dec_part) {         dec_part /= 10;     }     if (dec_part) {         while (dec_part % 10 == 0) {             dec_part /= 10;         }          b = b.store_uint(46, 8);  ;; store "." (dot)         repeat(zeros) { b = b.store_uint(48, 8); };         return b.store_number10(dec_part);     }     return b; }

Oleg: Придумывать float, когда есть замечательный fixed point - извращение (reply to 292404)

X1ag: Вы про muldiv? (reply to 292405)

Oleg: muldiv это общепринятый вариант работы, когда требуется перемножить или поделить 2 числа  с фиксированной точкой Как в примере выше вам показали с ценой и масштабным коэффициентом (reply to 292406)

X1ag: Просто мне нужно как-то поделить 2 числа, при том чтобы остались значения после запятой, как тут - https://t.me/tondev/292396  Посмотрю в сторону muldiv, пока не знаю как он работает. Спасибо за ответ

Oleg: Блин, бот съел мое подробное объяснение(

Tim: бекапьте ответы

Oleg: Например, у вас есть 2 тона и вы хотите узнать, сколько усдт получите при цене 3.52 2000000000 * 3520000 / 1000000000 = 7040000 На фронте печатаете 7.04

X1ag: Спасибо (reply to 292414)

🏆: есть ли способ как сделать роялти обязательным если изменить сам стантарт, чтобы трансфер проводился только после уплаты royalty

Оскар: пока что не придумали, этот вариант приведет к тому, что любой трансфер будет приводить к оплате роялти, а трансфер не всегда продажа (reply to 292430)

&rey: Единственный вариант, который я признаю — https://github.com/hitaspdotnet/nft-enforced-royalty: трансферы без оплаты роялти позволяют и старому адресу тоже переводить нфт. (reply to 292430)

Kirill: Всем привет. Подскажите, пожалуйста, есть вариант что б смарт контракт обменивал тоны на какой то другой токен, например отправлял сообщение на контракт ston.fi, просто не могу найти никакой доки или примеров, если есть у кого то опыт, поделитесь пожалуйста 🙏🏻

Azim: Всем привет, кто сталкивался может? в Telegram Desktop и Telegram Web мини аппка ходит на бэк и получает оттуда данные, с мобильного устройства не получается

.: https://docs.ston.fi/docs/developer-section/sdk/dex-v2/swap что-то такое? (reply to 292437)

Kirill: Ну не совсем то, мне ж это надо в смарт контракт вставить (reply to 292439)

Mirka: Ты можешь генерировать сообщение для обмена оффчейн, отправлять его в твой смарт-контракт, чтобы тот отправил это сообщение на СФ. Правда время обработки в таком сценарии увеличится, так что лучше slippage больше ставить (reply to 292440)

User: Или прям на контракте ячейка собирать можно (reply to 292441)

Kirill: А вот есть где то описание, как это ячейка должна выглядеть (reply to 292442)

User: https://docs.ston.fi/docs/developer-section/api-reference-v2/ - вот тут все tlb схемы (reply to 292443)

Kirill: Спасибо большое, сейчас буду изучать

Anton: В последнем апдейте заработало (reply to 292121)

hamzeh: /stat@combot

sd: Никак (reply to 292451)

Max: Уже никак, увы (reply to 292451)

X1ag: объясните синтаксис muldivmod пожалуйста, не могу найти

Max: А при чём тут тон? (reply to 292455)

X1ag: сетуйте на блокчейн тогда уж (reply to 292455)

SweetJesus: https://docs.ton.org/v3/documentation/tvm/instructions#:~:text=A98C-,MULDIVMOD,-x%20y%20z (reply to 292457)

Nononono: никто не встречал готовый парсер на Go метода past_elections для Elector Contract ? так влом писать)

— 2025-02-27 —

KTO: Как в самом смарт-контракте получить seqno, subwallet, publicKey?

Паша: Они в дате контракта кошелька хранятся. Можешь посмотреть, как они в гет методах достаются https://github.com/ton-blockchain/wallet-contract/blob/main/func/wallet-v4-code.fc (reply to 292550)

KTO: В самом смарт-контракте их достать можно?

Паша: Если они у тебя там хранятся, то да (reply to 292553)

Devon: Здравствуйте, нужен дизайнер для тма. Подробнее в лс

готский: Добрый день, откройте лс для всех пользователей ) (reply to 292560)

Grigoriy: Всем привет. Мне нужно хранить строчку из бит в контракте. Могу ли я ее хранить в глобально переменной и изменять? Или только в data контракта?

&rey: В data. Глобальные переменные хранятся только на время обработки контрактом входящего сообщения (ака "транзакция"). (reply to 292563)

Grigoriy: А если я читаю из слайса loadUint(64) и loadUint(1) это равно будет по газу в компьют фазе?

Dmitry | backend4you.ton: да. оба раза будет опцерация LDUX с ценой 26: https://docs.ton.org/v3/documentation/tvm/instructions (reply to 292566)

/B4ckSl4sh\: Скорее вcего будет всё же LDU, а LDUX потребует перед собой 1/64 PUSHINT (reply to 292570)

- Макс: Error: contracts\nft_item\nft_item.tact:58:17: Incompatible types "Address" and "<null>" for binary operator "!=" Line 58, col 17:   57 |             msgValue = msgValue - ctx.readForwardFee(); > 58 |             if (msg.response_destination != null) {                        ^~~~~~~~   59 |                 send(SendParameters{   what is problem?

фф: Как получить privatKey и publicKey уже существующего тонкипер кошеля? и при отправке транзы приваткей и сикрет это один и тот же? nodejs. Кошелек Wallet v5 r1

Dmitry | backend4you.ton: something like Address.Empty instead of null. Please use @tondev_eng for English (reply to 292585)

Victor: https://www.npmjs.com/package/@ton/crypto тут все просто (reply to 292586)

Константин: Добрый день! Подскажите пожалуйста, можно ли в TMA принимать платежи тоном и токенами путем получения на кошелек с указанием id в комментах, вывод тоже с указанием адреса получателя? Телега не блочит за такое?  Если не в тот чат спрашиваю, можете направить меня

Dmitry: Привет! Кто-нибудь может подсказать, почему нфт так выглядит в тонкипере

Dmitry: На гетгемс все ок https://testnet.getgems.io/collection/kQBWXLvvP2kIMzqho2fZnViiG2g56NXOg_8BgcOv8W9CDw5p/kQBvRWHLgDYq2GB6TRr5s8_nIOtMnc_f-TYbdpSBe8pfhfvB

Bahtiyar: недавно сминтился меньше 5 дней (reply to 292592)

Dmitry: Ага, то-есть оно само починится?)

Bahtiyar: да

sd: Не надо указывать id юзеров в коментах. (reply to 292589)

Dmitry: Спасибо) (reply to 292597)

Николай: почему (reply to 292598)

Константин: Ну это условный id, скорее что-то сгенерированное, чтобы в БД привязать к нему баланс. Вопрос скорее в том, рабочая ли это схема или зря трачу время (reply to 292598)

Dmitry: А тонкипер умеет в ipfs метадату?

sd: Так делать никто не запрещает. Строго говоря, никто не запрещает и айди и фио в комментарии к транзакции печатать, но наверное должно быть понятно, почему это не очень практика (reply to 292601)

Nadine Jin: всем привет : ) Можете подсказать, пожалуйста, мы поддерживаем TON для обменов на 5,000+ других монет и более, чем на 300 блокчейнов. Один из наших партнеров-кошельков написали нам, что последние изменения в политике Телеграм при работе с другими блокчейнами не позволят предоставлять обмен с TON на другие блокчейны / монеты. Можете подсказать, пожалуйста, это так или? Или это касается только тех проектов, которые ранее в мини приложениях не поддерживали TON?

User: https://core.telegram.org/bots/blockchain-guidelines  Вот тут все расписано (reply to 292609)

&rey: @devs_cis вроде; но так – вы неправы, да и ваш партнёр-кошелёк свистит. (reply to 292609)

X1ag: Подскажите пожалуйста, как правильно считать цену токена в контракте? int current_price = usdt_vault_balance / supply; int amount = jetton_amount / current_price;  Где usdt_vault_balance это int64(bigint), он почему-то неправильно высчитывает цену, видимо округляет. Как можно это исправить? Может вместе с запросом прокидывать цену?

Ivan: Всем привет, нужен разработчик, который сможет создать монетку в сети ТОН.  Нужно создать монету количеством 100 млрд. Она должна быть подвязана к курсу тон. Ее можно будет купить продать за тон на нашей собственной площадке.

&rey: Эти два пункта не вполне совместимы. (reply to 292619)

Mirka: pTON что-ли? (reply to 292619)

X1ag: stton что ли? (reply to 292619)

Ivan: Количество условное, можно конечно меньше, я в этом не слишком разбираюсь, сориентировать бы

Mr: Пацаны, тестнет опять лежит?

X1ag: видимо да, фиг знает как транзы проходят (reply to 292633)

Mr: у меня уже минут 10 не может транза пройти (reply to 292634)

X1ag: не проходят) (reply to 292634)

Mirka: Не сильно разбираюсь в proxyTON, но кажется он вам подходит (reply to 292626)

christopher moltisanti: Доброго времени суток, подскажите какой язык актуальный сейчас для смарт контрактов? Про фифт мало написано, может кто источники подскажет

Andrey: tolk (reply to 292655)

⁣⁣ᅠ: Доку бы по нему еще и ваще шик будет (reply to 292656)

Dmitry: Tact https://docs.tact-lang.org/ (reply to 292655)

Dmitry: Только через FunC сейчас можно в Tolk попасть (reply to 292658)

&rey: Только через FunC можно сейчас отладить, если что-то в Tact работает неожиданно. (reply to 292660)

christopher moltisanti: Как-то мутно все, друзья, только начинаю погружаться, зеленый еще. Может на эфире по легче со смарт контрактами?

Tim: Легче (reply to 292664)

Konstantin: Может быть сделают какой-нибудь contest по tolk как с tact и func когда-то, а то как будто нет особо смысла на него переходить, когда func хватает. Я когда-то tact доку открыл только в первый день contest по tact. И tact освоил и удовольствие получил и место хорошее занял. Правда на tact все равно не перешел)

Oleg: Раз эдак в 20 полегче) (reply to 292664)

⁣⁣ᅠ: А может мне кто из спецов объяснить, какой смысл делать новый языки программирования по типу func tolk и тп когда можно взять адекватный язык по типу rust иди go ( к синтаксису которого стремиться сам tolk ) и писать смарты на этих языках ? Порог входа заметно станет меньше

Philip: Можешь немного подробнее рассказать? (reply to 292663)

Philip: У TVM весьма своеобразный рантайм, для которого "адекватные" языки не имеют поддержки (и не могут иметь) (reply to 292669)

⁣⁣ᅠ: А в чем смысл его было изначально таким делать? Ну и опять же func должен же иметь прородителя к примеру в лице того же Си (reply to 292671)

Philip: На этот вопрос тебе бы смог авторитетно ответить только Дуров, к сожалению (reply to 292672)

fourlen: почему не могут? (reply to 292671)

/B4ckSl4sh\: Многое от концепции селлов идёт - но это не авторитетный ответ, авторитетный см. выше (reply to 292672)

Philip: Потому что TVM построен на двух взаимно рекурсивных семействах типов: стековых и TL-B, и если первые ещё как-то покрываются ресерчем для стековых машин (WASM/EVM), вторые есть только в TVM (reply to 292674)

Philip: Ресерч оптимизации под стековые машины, кстати, тоже довольно сырой относительно регистровых

(⁠✷⁠‿⁠✷⁠): Есть рабочий гайд по NftFixPriceSaleV3?  А то сколько не пробовал, нот ворк

Philip: Ещё "Си" в названии больше маркетинговый ход, чем то, как оно есть на самом деле. Намного больше там инфлюенса от чисто функциональных языков программирования (reply to 292672)

&rey: Кажется, этот трансфер (экстернал) ещё и отправить надо. (reply to 292676)

&rey: Модель памяти здесь отсутствует, а функции можно модно комбинировать в savelists,c0,c1,jmp... (reply to 292674)

Petr: В этом плане Такт гораздо проще для новичков, имхо, не говоря о том что он просто более высокоуровневый (reply to 292681)

&rey: Да вот фокус в том, что скрыть за его синтаксисом отправку запроса к другому контракту и получение ответа не получится, как ни старайся. (reply to 292686)

Daniil: а это не так страшно (reply to 292688)

Philip: Подробностей! И можно даже сразу в чат Tact'а :) (reply to 292688)

Petr: Да, но когда не надо руками собирать Cell это уже сильно удобнее для новичков и пока что такое есть только у Такта (reply to 292688)

Petr: Я кстати не вижу большой проблемы в этом В случае FunC если что-то работает неожиданно то приходится идти в Fift asm, а это сильно менее приятное занятие чем в случае Такта посмотреть на FunC код который был сгенерирован (reply to 292663)

&rey: См. историю удалённых. (reply to 292691)

Philip: вроде починили (reply to 292695)

Philip: Но лучше не форвардить сообщения. 99.9% форвардов это боты

Grigoriy: Всем привет, я ведь правильно понимаю, что в func нельзя получить значение из tuple по index?

&rey: .at(i) (reply to 292705)

фф: какая задержка у toncenter api? а то мне 429 кидает

Namon: 1 rps (reply to 292707)

DREZT×ON: Без авторизации 1 rps (reply to 292707)

Artem: Привет! Подскажите мне зелёному и неопытному, мб кто-то подкинет идею  Вот сделал я тг бота,в целом годного и полезного (доска объявлений для поиска покупателя/продавца крипты), чтобы оффлайн крипту в нужной стране наменять  Как такое сервисы продавать/искать инвестора/развивать?

uchebnick: всем привет! а может кто-нибудь подсказать чатик по разработке блокчейнов (архитектуры)?

&rey: Я что-то уверен, что нет чатика с Дуровым, Накамото и Бутериным.  А чтобы создать блокчейн, надо понимать цель и надо иметь фундаментальные знания университетского уровня, что именно там должно происходить и почему всё это корректно обрабатывает деньги. (reply to 292712)

uchebnick: спасибо, я понимаю, но возможно есть чат по проектировке децентрализованных технологий (reply to 292713)

&rey: Такие спецы чаще уже внутри компаний... вряд ли будет открытый чат. (reply to 292714)

uchebnick: ну вдруг кто-то знает (reply to 292716)

Philip: если конкретно о децентрализованных технологиях, был чат у IPFS (не в тг, конечно) (reply to 292714)

фф:  const seqno = await contract.getSeqno();     const transfer = contract.createTransfer({         seqno,         secretKey: keypair.secretKey,         validUntil: transaction.validUntil,         messages: transaction.messages.map(msg => internal({           value: msg.amount,           to: msg.address,           body: resultString,         }))       });     console.log(`Transaction created successfully: ${seqno}`);     await delay(1000)     return client.sendExternalMessage(wallet, transfer);  как boc транзы получить?

Kirill: Всем привет. Подскажите пожалуйста сайт, вроде как то сюда сбрасывали, где можно сделать ячейку, типо конструктор ячейки

sd: act.ghwnd.cc (reply to 292720)

Kirill: Спасибо большое

Victor: В ton docs рабочий код (reply to 292680)

(⁠✷⁠‿⁠✷⁠): Этот? (reply to 292723)

Victor: Да, вроде я его писал (reply to 292724)

(⁠✷⁠‿⁠✷⁠): Я просто его собирал, у меня нот воркал

(⁠✷⁠‿⁠✷⁠): Делал прям точь в точь

Victor: Что именно не работало ? Возможно getgems выпустил обнову и нужно переписать (reply to 292726)

(⁠✷⁠‿⁠✷⁠): Каждый раз ловлю bounce (reply to 292728)

Victor: Скинь ссылку на трейс (reply to 292729)

(⁠✷⁠‿⁠✷⁠): https://testnet.tonviewer.com/transaction/79a0de6fac6870989f22d8146881195ea2a7b573a9e34300165cf920f90288a5 https://testnet.tonviewer.com/transaction/898b561d97b8a19c44bbda66c2f6aeb9c74d4d9743d29d61061066f137345a39  Ну может я что-то не так сделал, но я вроде как пытался сделать точь в точь (reply to 292730)

(⁠✷⁠‿⁠✷⁠): Потом отправлял transferNftBody на NFT (reply to 292730)

(⁠✷⁠‿⁠✷⁠): Где у меня ошибка, не подскажешь? (reply to 292730)

Victor: Ща гляну (reply to 292734)

Victor: У тебя ячейка saleData не корректно собрана (reply to 292732)

(⁠✷⁠‿⁠✷⁠): До этого она также включала .storeUint(0, 32) // sold_at .storeUint(0, 64) // query_id  Я просто меняю код, чтобы найти проблему  И это я случайно из коммента вытащил на скрине, а так его не было .storeUint(0, 2) (reply to 292737)

Victor: const saleData = beginCell()         .storeBit(0) // is_complete         .storeUint(Math.round(Date.now() / 1000), 32) // created_at         .storeAddress(marketplaceAddress) // marketplace_address         .storeAddress(nftAddress) // nft_address         .storeAddress(walletAddress) // previous_owner_address         .storeCoins(price) // full price in nanotons         .storeRef(feesData) // fees_cell         .storeUint(0, 32) // sold_at         .storeUint(0, 64) // query_id         .endCell();

Victor: скинь хэш смарт контракта, который ты используешь и также как его в cell переводишь (reply to 292732)

Victor: скорей всего тут ошибка

(⁠✷⁠‿⁠✷⁠): В каком плане смарт-контракта, который я использую?

(⁠✷⁠‿⁠✷⁠): Который получается из NftFixPriceSaleV3R3Code data ?

Victor: да, но я как понял ты его скопировал из ton docs (reply to 292744)

(⁠✷⁠‿⁠✷⁠): Да, взял из ton docs

Victor: Ты где-то у себя накосячил не значительно. Я только что скопировал код из ton docs и он рабочий.  Тебе должно помочь:  https://gist.github.com/vityooook/9e93244b007d5c43ffa76eff1c44df11 (reply to 292746)

(⁠✷⁠‿⁠✷⁠): Этот код можно сделать другим образом?   const stateInitCell = beginCell()       .store(storeStateInit(stateInit))       .endCell();  Вот таким?  const stateInitCell = beginCell()             .storeRef(stateInit.code)             .storeRef(stateInit.data)             .endCell(); Просто у меня нет storeStateInit, но я почитал, она внутри выполняет эту функцию (reply to 292747)

SweetJesus: флаги потерял (reply to 292748)

(⁠✷⁠‿⁠✷⁠): А как будет правильно? (reply to 292749)

SweetJesus: .storeUint(6,5) вначале допиши (reply to 292750)

(⁠✷⁠‿⁠✷⁠): Действительно

(⁠✷⁠‿⁠✷⁠): Спасибо всем большое за помощь! @vityooook, @dimebag_darrell

Victor: Чет не заметил эту ошибку 😑 спать надо идти (reply to 292749)

X1ag: Скажите пожалуйста, почему может возвращать cskip_no_state, когда пытаюсь сделать jetton burn?  Собираю транзакцию так: () send_burn(slice to_address, int query_id, int amount, slice jetton_minter_lp_address, cell jetton_wallet_code_lp) impure inline {   var msg_body = begin_cell()                   .store_uint(op::minter::burn, 32)                   .store_uint(query_id, 64)                   .store_coins(amount) ;; jetton amount                   .store_slice(to_address);; destination                   .store_uint(0, 1) ;; custom_payload                 .end_cell();     var msg = begin_cell()             .store_uint(0x10, 6)             .store_slice(calc_user_wallet(to_address, jetton_minter_lp_address, jetton_wallet_code_lp))             .store_coins(((ONE_TON) / 10))             .store_only_body_ref(msg_body)       .end_cell();     send_raw_message(msg, 0); }  Ссылка на транзакцию - https://testnet.tonviewer.com/transaction/02a28801635f196845fc486296bba9df99e533a33f9cdb9779062d0701c543bb

&rey: Ну, вы не на тот контракт послали, получается. (reply to 292759)

Dmitry: Всем привет!  Подскажите, пожалуйста, как правильно импортировать тон кошелек пользователя по его 12/24 фразе в свое приложение? Определить существуют ли вообще кошельки и если да, то в какой сети, какие адреса? Мб кто-то делал такое с tonutils, например, или в целом как такое делается?

— 2025-02-28 —

KTO: Привет, как сформировать StateInit NFT, зная его init.code?  Я пытаюсь сделать так, но не получается. Передаю адрес коллекции и индекс NFT

&rey: Да вот коллекция его знает, как. Опять же, вы можете завезти данные и код КОЛЛЕКЦИИ к себе в контракт и вызывать через RUNVM гет-методы сколько хотите. (reply to 292767)

KTO: Да я просто не знаю как это делать. Думал можно просто зная INIT CODE NFT Сформировать DATA и получить её адрес (reply to 292768)

iAbdurahmon: Здравствуйте есть ли способ отправлять тон автоматически? Есть ли примеры для api?

Namon: import { TonClient, WalletContractV4, internal } from "@ton/ton"; import { mnemonicNew, mnemonicToPrivateKey } from "@ton/crypto";  // Create Client const client = new TonClient({   endpoint: 'https://toncenter.com/api/v2/jsonRPC', });  // Generate new key let mnemonics = await mnemonicNew(); let keyPair = await mnemonicToPrivateKey(mnemonics);  // Create wallet contract let workchain = 0; // Usually you need a workchain 0 let wallet = WalletContractV4.create({ workchain, publicKey: keyPair.publicKey }); let contract = client.open(wallet);  let seqno: number = await contract.getSeqno(); let transfer = await contract.sendTransfer({   seqno,   secretKey: keyPair.secretKey,   messages: [internal({     value: '1.5',     to: 'EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N',     body: 'Hello world',   })] }); https://www.npmjs.com/package/@ton/ton (reply to 292772)

Illia: Как подключить @tonconnect/ui-react на Next.js 15? Постоянно получаю ошибку   Error: Cannot read properties of undefined (reading 'ReactCurrentDispatcher')  src/app/TonConnectWrapper.tsx (12:5) @ TonConnectWrapper  10 | export function TonConnectWrapper({ children }: { children: React.ReactNode }) { 11 |   return (  12 |     <TonConnectUIProviderDynamic |     ^ 13 |       manifestUrl="http://localhost:3000/manifest.json" 14 |     > 15 |       {children}

Illia: Получилось решить вопрос? (reply to 290584)

Namon: https://t.me/tondev/291144 (reply to 292776)

Illia: Благодарю за ответ, к сожалению, не использую next-themes. Видимо, проблема в чём-то другом. Пока-что ищу (reply to 292778)

RootTon: Попробуйте залить на гит пейдж, предполагаю что tanconnectui не дружит с http и хочет https, возможно это (reply to 290582)

X1ag: Пример реализации RUNVM от @pcrafter https://gist.github.com/ProgramCrafter/53fc3a4846397ee5f3f3b25ca3356ab5 (reply to 292769)

matthew: Гайз, не знаете, где blueprint хранит кеш? Пытаюсь деплоить контракт с нового кошелька, а он откудато берет старый.

Оскар: ищи папку temp в рабочей директории. удаляй tonconnect.json файл в ней (reply to 292794)

matthew: Дай бог тебе здоровья, добрый человек. Мы ушатали час на поиск этого кеша)) (reply to 292795)

/B4ckSl4sh\: папка temp (reply to 292794)

matthew: Да, да. Разобрались уже (reply to 292805)

Dmitry: https://github.com/ton-connect/sdk/issues/216 (reply to 292775)

Nick: Всем привет, а подскажите, сколько по времени в среднем рассматривается ПР?

Illia: От души! (reply to 292814)

nonstop #2: Всем привет, делаем азартный проект в телеге хотим сделать честный проект а не скам, подскажите есть тут такие кто разбираются за алгоритмы ?

Dmitry: Подскажите, как проще всего по сид фразе получить юзер-френдли UQ.. адрес пользователя

Sergey: На 14 Нэксте да, но где-то мне писали, что это либа еще не поддерживает Нэкст 15+Реакт 19 (reply to 292776)

Sergey: Можно еще локально без gitpage, открыть https . Я использовал ngrok, все с ним работает ) (reply to 292780)

&rey: Правда, там их несколько будет... let key = mnemonicToKeyPair('... ...'.split(' ')); let addrV3R2 = await WalletContractV3R2.create({workchain: 0, publicKey: key.publicKey})     .address.toString({bounceable: false}); ... (reply to 292825)

Dmitry: это что за либа? (reply to 292830)

Namon: @ton/ton & @ton/core (reply to 292831)

Dmitry: а она через toncenter работает? (reply to 292833)

&rey: В данном случае вообще никаких вызовов не делает, но так да. (reply to 292834)

Dmitry: А как по мнемоник фразе, понять версию кошелька? (reply to 292830)

web-assist 🧀: По мнемонике никак (reply to 292838)

X1ag: мнемоника никак не влияет на версию кошелька. У одной мнемоники есть все кошельки от V1 до V5, вопрос лишь в том задеплоены ли они и использует ли их пользователь (reply to 292838)

&rey: Рекомендую v4 проверять первым, но не использовать автоматически никогда. (Для любого применения либо v3r2, либо v5 лучше.)

Dmitry: А как это проверить? (reply to 292840)

&rey: Спросить у тонапи (bulk) или тонцентра.

Dmitry: По статусу вроде кошелек может существовать, но быть просто неактивированным

&rey: Если несколько с балансом, спросить пользователя. (reply to 292844)

Dmitry: А на что смотреть? Просто баланс может быть нулевым, а статус может быть неактивен, если кошелек еще только создали без транзакций

Dmitry: Через какой метод тонцентра лучше сделать такую проверку и на что смотреть, если задача получить список кошельков юзера по сид фразе?

Dmitry: Или я чет здесь неправильно понимаю

X1ag: ребят, кто как вычисляет адрес jetton_wallet в контракте?

Namon: Я думаю, если Вы знаете мнемонику, то Вы и определяете используемую версию кошелька И кошелёк не создаётся тогда, когда вводится мнемоника. Кошелёк деплоится при первой транзакции (reply to 292847)

Namon: Гарантированный способ - считать по state init (reply to 292853)

X1ag: Вот так, верно?   slice calc_address(cell state_init) inline {     return begin_cell().store_uint(4, 3) ;; 0x100 : $10 + anycast (Maybe = 0)             .store_int(workchain, 8)             .store_uint(                     cell_hash(state_init), 256)             .end_cell()             .begin_parse(); } (reply to 292859)

Dmitry: Задача по мнемонике получить кошельки пользователя, как в тонкипере, например. Он там умеет по мнемонике определять, какие кошельки у юзера есть (reply to 292854)

Namon: Значит пробегайтесь по всем версиям Если нужно узнать баланс, то по каждому получайте state (reply to 292861)

Dmitry: Ну да, я пока к подобному пришел, у тонцентра метод walletStates вроде норм, по нерабочим для адреса нетворкас прост пустые модели возвращает (reply to 292862)

Dmitry: Думал прост мб есть какие-то другие более верные подходы, чем перебор

&rey: Прошлый вариант сломался? (reply to 292853)

X1ag: а прошлый это какой? (reply to 292865)

Namon: Да, если верно считается state init (reply to 292860)

&rey: Который предлагает RUNVM использовать. (reply to 292866)

X1ag: помню пытался в прошлом проекте, но что-то не пошло. Если не ошибаюсь стейт не тот собирал (reply to 292868)

&rey: Какой "стейт не тот"?!! Там достаточно достать ячейки кода и данных жетон-мастера, ну и его адрес. Всё само делается и кастомизации не требует. (reply to 292869)

X1ag: прошу прощения, ошибся. Не стейт, а data, которую требует функция.   В итоге решил не использовать этот метод, тк подумал что он не рабочий, хотя просто не ту data прокидывал) (reply to 292870)

&rey: Кажется, пора уже оставить этот код напрямую в чате, а то по ссылке никто не смотрит.  forall X -> tuple change_tuple(tuple t, int pos, X value) asm(t value pos) "SETINDEXVAR"; tuple get_c7() asm "c7 PUSHCTR";  slice vm::invoke_get_addr(slice owner_address, tuple c7, cell master_data, cell master_code) asm   "CTOS            // owner_addr c7 md mc"   "2 PUSHINT       // owner_addr c7 md mc args"   "103289 PUSHINT  // owner_addr c7 md mc args get_jwa_method_id"   "5 0 REVERSE    // owner_addr get_jwa_method_id args mc md c7"   "53 RUNVM       // address exit_code c4' c5'"   "3 BLKDROP       // address";  slice get_addr(slice owner_address, cell code, cell data, slice master_addr) inline_ref {     tuple c7 = get_c7();     c7 = c7.change_tuple(0,         c7.at(0).change_tuple(8, master_addr)                 .change_tuple(10, code)     );     return vm::invoke_get_addr(owner_address, c7, data, code); }  slice calc_my_jetton_wallet(slice master_addr, cell code, cell data) inline {     return get_addr(my_address(), code, data, master_addr); }

&rey: Даже если какой-то сказочный ...автор заявит "мой жетон не шардируется, а обычную хешмапу хранит": если он нормально сделает slice get_jetton_wallet_address(...) {return my_address();}, то код выше будет работать.

KTO: Есть такой же для NFT? (reply to 292872)

&rey: Надо вспомнить, какой там method ID, а функция будет такая же примерно, да:  slice vm::invoke_get_nft_addr(int i, tuple c7, cell master_data, cell master_code) asm   "CTOS            // index c7 md mc"   "2 PUSHINT       // index c7 md mc args"   "...... PUSHINT  // index c7 md mc args get_nft_method_id"   "5 0 REVERSE     // index get_nft_method_id args mc md c7"   "53 RUNVM        // address exit_code c4' c5'"   "3 BLKDROP       // address";  slice get_addr(int i, cell code, cell data, slice master_addr) inline_ref {     tuple c7 = get_c7();     c7 = c7.change_tuple(0,         c7.at(0).change_tuple(8, master_addr)                 .change_tuple(10, code)     );     return vm::invoke_get_nft_addr(i, c7, data, code); } (reply to 292878)

KTO: Это? 92067 DECLMETHOD %get_nft_address_by_index (reply to 292879)

KTO: Или это  81078 DECLMETHOD %getNftItemInit

KTO: Проверил, работает! (reply to 292879)

KTO: Спасибо 🙏

&rey: Положил себе в репу) https://github.com/ProgramCrafter/tvm-quirks/blob/master/ok-nft-addr-onchain.fc (reply to 292882)

X1ag: все работает кстати и правда, спасибо (reply to 292871)

Михаил: Поиск разработчика, фулстек/бэкенд на Джаве На фултайм.

X1ag: Полазил в документации, не нашел функции, которая бы просто делила число на число(без округлений) подскажите пожалуйста, как реализовать такой метод или где посмотреть? И почему при делении tvm всегда округляет? https://docs.ton.org/v3/documentation/tvm/instructions

Ivan: в tvm все числа только целые, нет чисел с плавающей точкой (reply to 292891)

X1ag: ну можно же в nanoton отображать просто если плавающая точка (reply to 292892)

(⁠✷⁠‿⁠✷⁠): А если домножить числа допустим на 100000000, поделить, а потом обратно? (reply to 292893)

Ivan: можно  а что именно вы хотите сделать? (reply to 292893)

X1ag: Больше всего интересуют как действующие проекты отправляют какой нибудь токен за определенную сумму? (reply to 292891)

X1ag: Я хочу реализовать пул ликвидности. Отдавать человеку LP токены по определенной цене, которая считается внутри контракта по формуле где int64 делится на int64. Но проблема в том, что оно округляет и невозможно правдивую цену считать.   Вот формула:  int current_price = usdt_vault_balance / supply; int amount = jetton_amount / current_price;  Единственным выходом вижу только вместе с транзакцией прокидывать цену в пейлоад или реализовать оракул (reply to 292895)

Ivan: muldiv должен помочь  int input_nano_ton = 100; int price_per_one_jetton = 25; int amount_of_jetton = muldiv(input_nano_ton, 1, price_per_one_jetton) (reply to 292897)

Ivan: это сработает из-за того что у вас контстанты будут в "копейках" 1 тон это 1000000000 копеек поэтому такое перемножение округляет чуть чуть копеек с конца, это не сильно страшно

X1ag: я могу же price_per_one_jetton считать по такому же принципу как у amount_of_jetton? (reply to 292899)

Ivan: да (reply to 292901)

X1ag: спасибо большое, попробую (reply to 292900)

Molodoy Abuzer 3: Подскажите пожалуйста, чтобы считать jetton перевод успешным, достаточно ли проверить успешность отправки сообщения со своего jetton wallet? Или может где-то потеряться и по хорошему чекать статус и транзакции на jetton wallet получателя?

X1ag: В идеале excess должен прийти на Jetton wallet (reply to 292906)

X1ag: Но он часто ломается. Я привык проверять по transfer_notification, но обычно зависит от цели

Оскар: если вы отправляете сами и просто нужно подтвердить что он отправится (а соответственно дойдет, если всё верно отправили), то да, максимум что может произойти - юзер не сразу увидит поступление excess и transfer_notification это опциональные месседжи и они могут не приходить - это нормально (reply to 292906)

Oleg: Чтобы спамить их шиткоинами? (reply to 292910)

(⁠✷⁠‿⁠✷⁠): Ахахахаха (reply to 292912)

X1ag: Вы его рассекретили и он удалил сообщения 😁 (reply to 292912)

Oleg: Бывает)

User<8084745947>: Нет, просто нашли решение (reply to 292915)

User<8084745947>: И нам как-то без разницы какие задачи выполнять заказчикам

RootTon: Всем привет, есть ли тут разработчики tonconnectui ? У меня вопрос планируется ли версия которая будет работать с react 19 ?

Артём: PR? (reply to 292929)

— 2025-03-01 —

Petr: Если вы ждали повода попробовать и перейти на Tact, то сейчас самое лучшее время, так как вышел Tact 1.6! https://t.me/tondev_news/191

Bohdan: А это типа сам блокчейн обновили? (reply to 292938)

Andrey: С чего такие выводы? (reply to 292939)

Bohdan: Ну типа как достигли уменьшение газа? Или это в коде библиотеки что то поменяли что теперь меньше платить надо?  Я просто больше по солидити и эфиру и там чтоб уменьшить газ то обновляли сам блокчейн (reply to 292941)

Petr: Теперь компилятор Такта и стандартная библиотека гораздо более оптимизированы (reply to 292942)

Andrey: Очевидно что код более оптимизированный компилируется, причем тут блокчейн? (reply to 292942)

Bohdan: Понял. Спасибо

Dmitry: Если хотите бросить вызов своим знаниям - рекомендую ознакомиться  https://t.me/hacktheton/138

Oleg: Судя по картинке, код получается еще более оптимизированный, чем в FunC (reply to 292944)

Kampf: Ребят подскажите, почему в tonscan testnet пишет, что Неудачная транзакция, хотя по всем статусам она успешная. Это баг у них такой?  Hash: YqIYlOngjXmYZWj9VxK8RJpyRdqcZNUUXP+nUd6uvf0=

X1ag: у вас на газ не хватило(хотя пишет что транза успешная))) https://testnet.tonviewer.com/transaction/86de2e58baab73e4aa742002446186e8a9099598437dda9c0806f8f63b43bd12 (reply to 292949)

Kampf: На балансе там целых 2 тона было. Получается надо отправлять столько монет, чтобы они перекрывали газ?  Вроде как на баланс монеты зачислились всё равно) (reply to 292954)

Оскар: да, за выполнение контракта списывает сумму с сообщения, если у сообщения не хватает тон для покрытия газа - транзакция падает/скипается, вне зависимости от баланса контракта (reply to 292955)

Andrey: А как так? Типа вот вы же собираете такт в фанси. И сравниваете вы с фанси. И получается что ваш фанси быстрее не вашего 😅  Получается вы нашли неоптимальности оригинальных смартов?   Или вы в фифт собираете?   Или оптимизировали конкретно для этих реализаций? (reply to 292938)

&rey: Это несложно. (reply to 292962)

Оскар: я глазами пробежался - там имеет место быть просто оптимизация логики, вероятней всего если залезть в func код жетона и поделать микрооптимизаций - получим тот же вариант, но в конце концов как минимум такт 1.6 победил прошлого себя (reply to 292962)

(⁠✷⁠‿⁠✷⁠): Привет, как возвращать хоть какой-то ответ во время отправки транзакции с помощью TonClient?

&rey: Прошу прощения, ответ от чего? К моменту возврата этой функции даже нет гарантии, что какое-то дерево транзакций появится. (reply to 292966)

X1ag: кому возвращать ответ? (reply to 292966)

Alex: Я к вам с ламерским вопросом )   От чего не отображается в эксплорерах и кошельках  метадата(картинки) nft ?  Вот такие данные у меня  Collection contract: https://tonviewer.com/EQAPam54H92aifXivEKHQ7BdgyeSj_4yodon7pym7Y9aF5uf  NFT_0: https://tonviewer.com/EQC4VZP-lQPPeDWlAO29_1amMJcHrS11y1xAMcDCYwMFjJD_  Metadata urls: Collection collection_content: https://ipfs.io/ipfs/bafybeieaeae3tomw73mta7asadremsuukttseeh57ct3hfuecvqpvkje3m/collection/metadata.json  NFT individual_content: https://ipfs.io/ipfs/bafybeieaeae3tomw73mta7asadremsuukttseeh57ct3hfuecvqpvkje3m/nft1/metadata.json

Petr: Благодаря выскоуровневости, у компилятора есть больше контекста для оптимизаций (например, не делать лишних сохранений стейта если не было изменений) и поэтому Такт может компилироваться в более оптимизированный Fift + наши реализации стандартной библиотеки более оптимизированные (reply to 292962)

sd: пробабли сервер не смог достучаться до ипфс (reply to 292971)

Оскар: а в ячейку для контента нфт 0x1 байт не забыли пропихнуть? в самом начале (reply to 292971)

Alex: я из nodejs минтил вот такой контент  const contentCell = beginCell()         .storeRef(             beginCell()                 .storeBuffer(Buffer.from(content))                 .endCell()         )         .endCell();  а видимо если я вас правильно понял нужно вот так: const okContentCell = beginCell()         .storeInt(0x01, 8)         .storeStringRefTail(content)     .endCell(); верно ? (reply to 292974)

Оскар: да, необязательно строку в реф пихать, достаточно и storeStringTail (reply to 292977)

(⁠✷⁠‿⁠✷⁠): Я в том плане, что на Tonconnect возвращается Boc после отправки транзакции.  На tonclient такое можно реализовать? (reply to 292968)

&rey: .createTransfer вернёт тело экстернала, в принципе, это оно и есть. (reply to 292979)

Alex: Спасибо большое! Это решило проблему! Теперь эксплореры видят метадату! (reply to 292974)

X1ag: подскажите пожалуйста, почему выдает exit_error: 5. Думаю что проблема в этой формуле.  int currrent_price = muldiv(usdt_vault_balance, 1, supply) * ONE_TOKEN; ;; usdt_vault_balance / supply; int amount = muldiv(jetton_amount, 1,  currrent_price) * ONE_TOKEN; Переменная ONE_TOKEN нужен для того чтобы amount у меня получился что-то типа 1 * 10**9 или 50 * 10**9 usdt_vault_balance = 31000000000n supply = 21000000000n jetton_amount = 40000000000 (4 * 10**10 (40 tokens)) ONE_TOKEN = 100000000  У меня получается слишком больше число?

Oleg: Это абсолютно неправильное использование muldiv (reply to 292983)

X1ag: а как правильно?? (reply to 292985)

Oleg: Почитайте все же в Вики про арифметику с фиксированной точкой

Denis: А кстати офигенская идея. А кто автор? Стоит оформить как расширение стандарта nft (reply to 292433)

&rey: Автор @hitasp, поддержка @pcrafter. (reply to 292988)

X1ag: подскажите пожалуйста, muldiv округляет число вверх, верно?  Мне кажется, что правильнее будет сделать вот так  int current_price = muldiv(usdt_vault_balance, ONE_TOKEN, supply); ;; usdt_vault_balance / supply; int amount = muldiv(jetton_amount, ONE_TOKEN,  current_price); (reply to 292987)

Ma><im: всем привет, кто то значет что с https://verifier.ton.org ?

Oleg: Идея muldiv в том, что он умеет хранить временный промежуточный результат длиной 257+257 бит (после умножения), а после деления получается снова 257 бит. Это позволяет не терять точность (reply to 292990)

Оскар: подход к решению проблемы интересный, но мне если честно не особо нравится к чему это приводит, по итогу это больше не "форсируем роялти", а "форсируем платить как минимум некую компенсацию за любой «официальный» трансфер"  так же не особо понимаю как трeйдить этим, я получается должен на контракт продажи сделать granted трансфер, заплатив "роялти", а потом ещё юзер когда покупает он тоже должен роялти заплатить? какое-то двойное налогообложение получается, я даже не говорю про тот факт если нфт никто не купил и ты снять с сейла хочешь, только если сумму этой компенсации делать очень низкой, иначе так и разориться можно на роялти, когда ты ничего даже не продаешь  ну и я уже особо не говорю если ты нфт хочешь кому-то подарить или гоняешь по своим аккаунтам (мало ли для каких целей), то будь добр плати компенсацию за перевод, а во втором случае можно использовать те самые "неофициальные" трансфера, но тогда кошелькам придется добавлять две кнопки для трансфера нфт и попробуй объясни юзерам что делает левая, а что правая  в общем тут мне кажется надо ещё репу почесать можно ли этот вариант как-то улучшить, ибо он как решает проблему - так и создаёт новые (reply to 292988)

&rey: Уже можно обойтись без контракта продажи, используя extension на тонкиперской версии кошелька v5. (reply to 292993)

Оскар: ну это надо теперь ещё дожить когда в тонконнект завезут подключение экстеншенов, ну или вшивать продажу на уровне приложения кошелька (reply to 292994)

Denis: Не завезут (reply to 292995)

Wrangler: У кого модуль подключения кошелька для unity есть рабочий?

Оскар: а что так? такой простор открывается на самом деле, правда как и для прикольный идей, так и для скама (reply to 292996)

Denis: Скам да

Оскар: https://github.com/continuation-team/unity-ton-connect надеюсь работает (reply to 292997)

Wrangler: Спасибо, посмотрим (reply to 293000)

Иван: Подскажите, есть что-нибудь похожее, но для разбора ячеек? (reply to 292721)

/B4ckSl4sh\: каких именно ячеек? На explorer.toncoin.org можно подробно смотреть на ячейки мессаджей (reply to 293002)

Иван: Парсер для обычных ячеек, чтобы можно было типы данных выбрать и построить граф с данными. В моём случае, мне нужно распарсить данные tact контракта. (reply to 293003)

Grigoriy: Привет, а как мне симитировать в func хеш от конкатенации двух хешей?

&rey: Проверьте инструкции HASHEXT_***, пожалуйста. (reply to 293006)

Grigoriy: У меня хранится в ячейке 2 хеша по 256 бит. Я их загружаю с помощью load_bits(256) и делаю HASHEXT_SHA256, по сути у меня должны сложится строчки из 1 и 0. Верно? Просто у меня не сходится когда я делаю это руками и в контракте   От чего вообще берет HASH tvm из слайса?

(⁠✷⁠‿⁠✷⁠): Я попробовал, это не то (reply to 292980)

Oleg: Тут есть неоднозначность, на которую дока явно забивает болт. Можно каждый слайс добивать до целого числа байт, потом конкатенировать, а можно конкатенировать биты, а потом уже выравнивать и брать хеш. Надо эксперимент проводить (reply to 293010)

&rey: Выравнивания точно нет, там ошибка 9 при нарушении кратности. (reply to 293012)

Игорь: всем привет!  не могу понять, в чем проблема, одна и та же транзакция проходит с одного кошелька и не проходит с другого  разница только в том, что где транзакция проходит, tonviewer пишет  body:           is_right: true  а где фейлится — пишет  body:           is_right: false  сама транзакция — трансфер токенов  подскажите, в чем может быть проблема?

Grigoriy: Разве ошибка? В доке написано что дополняется байтами в зависимости от кратности.  If l is not divisible by eight, a single binary one and a suitable number of binary zeroes (up to six) are appended to the data bits, and the completion tag (the least significant bit of the descriptor byte d2) is set. (reply to 293013)

X1ag: если я вас правильно понял, то нужно сделать так:  int current_price = muldiv(usdt_vault_balance, ONE_TOKEN, supply); ;; usdt_vault_balance / supply; int amount = muldiv(jetton_amount, ONE_TOKEN,  current_price);  Верно ли? (reply to 292992)

Max: В этом бите и ошибка (reply to 293014)

Игорь: но ведь транзакция сформирована была одинаково один и тот же код просто с разных кошельков подпись (reply to 293017)

Oleg: В целом верно, но моя идея идет дальше) Вероятно, можно обойтись всего одним  amount = muldiv(jetton_amount, supply, usdt_vault_balance) Но это при условии, что расмерности правильные. Если б вы дали пример реальных цифр и в каких они единицах, было бы проще (reply to 293016)

&rey: ;; int current_price = usdt_vault_balance / supply; ;; int amount = jetton_amount / current_price;  int amount = muldiv(jetton_amount, supply, usdt_vault_balance); (reply to 292618)

X1ag: Спасибо, конечно, вот размерности.  usdt_vault_balance = 31000000000 (int64) supply = 21000000000 (int64) jetton_amount = 40000000000 (4 * 10**10 (40 tokens)) ONE_TOKEN = 100000000 (reply to 293019)

Игорь:  const coinAddress = getCoinAddress(coin);             const decimals = getDecimals(coin);              const recipientAddress = Address.parse(wallet);             const gasFee = toNano('0.05');              const builder = beginCell()                 .storeUint(0xf8a7ea5, 32)                 .storeUint(0, 64)                 .storeCoins(BigInt(Math.round(amount * (10 ** decimals))))                 .storeAddress(recipientAddress)                 .storeAddress(null)                 .storeUint(0, 1)                 .storeCoins(1n);              const commentPayload = beginCell()                 .storeUint(0, 32)                 .storeStringTail(paymentId)                 .endCell();              builder.storeBit(1);             builder.storeRef(commentPayload);              const payload = builder.endCell();              messages.push({                 address: coinAddress.toString(),                 amount: gasFee.toString(),                 payload: payload.toBoc({                     idx: false,                 }).toString('base64'),             });   вот так я сформировал транзакцию (reply to 293017)

Oleg: Это саплай каких токенов? (reply to 293021)

X1ag: USDT (reply to 293023)

Игорь: https://tonviewer.com/transaction/545fc7a8fa3239b79e8e46f62b5da81b59b638f117594dae57721e12c23639e7  вот транзакция прошла успешно  https://tonviewer.com/transaction/6482270e73bda05f50034208c25673423c3e0c08add567d2b6599f40b3c05f67?utm_source=tonkeeper  вот транзакция упала, пейлоад одинаковый

Oleg: Тогда все верно, одной muldiv все делается и никакой дополнительный коэффициент не нужен (reply to 293024)

X1ag: у вас падает из-за ошибки 705 (error::unauthorized_transfer)  throw_unless(error::unauthorized_transfer, equal_slice_bits(owner_address, sender_address)); (reply to 293025)

Игорь: сори, я не очень знаком с тоном, это проблема на стороне смарт контракта или же это проблема на стороне клиентского кода? (reply to 293027)

X1ag: думаю, что на стороне клиентского кода. Эта ошибка означает буквально: несанкционированный перевод. Скорее всего вы не тот адрес прокидываете, потому что owner_address(создатель jetton кошелька) != sender_address (т.е. человеку, который кинул транзакцию на этот jetton кошелек) (reply to 293028)

Pavel: Коллеги, подскажите пожалуйста при отправке internal message на контракт джеттона, что и где нужно указать, чтоб мне контракт вернул остатки комиссии Либо есть может какой-то метод, который позволит узнать сколько отправлять надо пока что код вот так выглядит  body, err := tlb.ToCell(jetton.TransferPayload{  QueryID:             rnd,  Amount:              jettonAmount,  Destination:         dstAddress,  ResponseDestination: dstAddress,  CustomPayload:       nil,  ForwardTONAmount:    tlb.ZeroCoins,  ForwardPayload:      nil, }) if err != nil {  return nil, errors.Wrap(err, "failed to create body payload") }  messageData := &wallet.Message{  Mode: wallet.PayGasSeparately + wallet.IgnoreErrors,  InternalMessage: &tlb.InternalMessage{   IHRDisabled: true,   Bounce:      false,   DstAddr:     jettonAddress,   Amount:      tlb.MustFromTON("0.085"),   Body:        body,  }, }  т.е. у меня внутрь пейлоада зашивается jetton amount (кол-во джеттонов, которые контракт перешлет получателю) с моего аккича, а внутрь internal message документация говорит закладывать минимум 0.05, но как узнать сколько точно - непонятно (если узнать нельзя, то как остатки вернуть?)

Игорь: а кто является создателем jetton кошелька?  я этот токен могу сам с одного кошелька на другой переводить и обратно но если пытаюсь через тонконнект эту транзакцию провести, то с одного кошелька дает, а с другого не дает я не могу понять, в чем причина, этот токен мне переслал заказчик на кошелек (reply to 293029)

X1ag: а почему здесь null? (reply to 293022)

Игорь: а что должно быть? (reply to 293034)

X1ag: я на контракте вот так собираю:  store_uint(op::transfer, 32) .store_uint(query_id,64) .store_coins(amount) ;; jetton amount .store_slice(to_address);; destination .store_slice(my_address()) ;; response destination .store_uint(0, 1) ;; custom_payload .store_coins(((ONE_TON * 2) / 100)) ;; forward ton amount .store_uint(0, 1) ;; forward payload (reply to 293035)

Игорь: то есть туда нужно вставить адрес отправителя? (reply to 293036)

&rey: кому лишние тоны уйдут (reply to 293037)

Игорь: но вопрос остается, почему с одного кошелька уходит, а с другого не уходит транзакция? (reply to 293038)

X1ag: потому что вы отправляете как бы не с кошелька владельца токенов. Вы переподключаете tonconnect когда со второго кошелька хотите отправить транзакцию? (reply to 293039)

Игорь: я подключаю кошелек и с него же отправляю транзакцию

Игорь: и это работает только с одного кошелька

X1ag: Вы кидаете запрос на jetton кошелек, у которого owner_address = EQBYSdSgFqXdYxlwLE3tTkD7GxoF3RtFPCoN0ElSBnQ88tvD (reply to 293042)

X1ag: что в этой функции находится?  Скорее всего вы неправильно высчитываете jetton wallet с которого хотите отправить токены (reply to 293022)

Игорь: export const getCoinAddress = (coin: string) => {     switch (coin) {         case 'USDT':             return Address.parse("EQBNNJBoVxa__5RTjTH49gzevixIQVZN-a6Ke2rGWM9T10UO");         case 'GPTON':             return Address.parse("EQDt1Nl0BIjC54VaNXjKH_rg5vJu7PCSWmdGn75sjJSAk1DP");         default:             throw new Error('Unsupported coin');     } }; (reply to 293044)

Pavel: пока читаю ваш диалог понимаю

Pavel: чтоб мне лишнее прилетело

Pavel: нужно в response destination свой адрес положить

X1ag: Это чуть не так работает. У каждого кошелька уникальный jetton wallet под каждый токен. Вам нужно на jetton minter слать гет метод и внутри пробрасывать адрес пользователя (reply to 293045)

Игорь: все, я понял, это не адрес токена, это адрес моего кошелька на для токена (reply to 293045)

Игорь: я думал это как внутри эфира, делаешь запрос на контракт, а здесь делаешь запрос на аккаунт под токен (reply to 293051)

Игорь: спасибо огромное

SweetJesus: забудь про эфир (reply to 293053)

X1ag: это jetton_wallet_governed, а не jetton wallet (возможно они похожи, не помню что там под капотом у jetton_wallet_governed) (reply to 293052)

&rey: "просто думать" здесь опасно и в перспективе приводит к пустому кошельку; надо смотреть, что как сделано (reply to 293053)

X1ag: https://docs.ton.org/v3/guidelines/dapps/asset-processing/jettons#message-layouts (reply to 293053)

Dmitry: Подскажите, пжл, чтобы создать кошелек, его нужно сперва создать, потом задеплоить?

&rey: В принципе, он и без деплоя кошелёк для большинства нормальных сервисов. (reply to 293060)

Dmitry: а почему тоцентр выдает по адресу такого кошелька uninitialized, как с ним дальше вообще работать, например, узнать адрес в формате UQ...? (reply to 293061)

&rey: 1. потому что оно так и есть, наверно? 2. addr.toString({bounceable:false}) (reply to 293062)

Dmitry: Спасибо, можно еще два вопроса, а что означает bouncable? И в чем разница между адресами Eq и UQ? Все апихи выдают EQ по дефолту, а приложения пользователям показывают UQ, никак не пойму, что для чего

X1ag: спасибо, оно работает. Но не так считает. У меня получается что я кидаю условно 20 юсдт в пул и получаю 20 DLP, потом имитирую зачисление ревардов и соотвественно цена должна увеличиться. Но когда я вывожу эти 20 DLP, то получаю всего 13 usdt из 20. Кажется ошибка в формуле вывода. Подскажите пожалуйста, как мне сделать, чтобы amount был равен jetton_amount * current price без округлений? (reply to 293026)

X1ag: UQ это non bouncable, то есть если кинуть на этот адрес токены, то они останутся на нем даже если тот не задеплоен. А EQ это bouncable, т.е. будут возвращаться деньги если контракт незадеплоен или в случае ошибок (reply to 293065)

Dmitry: То есть это по сути два связанных кошелька, которые создаются в пределах одного аккаунта? (reply to 293067)

X1ag: это два адреса, которые используют один кошелек если рассуждать по такой логике (reply to 293069)

X1ag: https://ton.org/address/ (reply to 293069)

Dmitry: Понял, а баланс кошелька, например, это собственно, один единственный баланс кошелька, к которому уже ведут эти адреса?

Oleg: amount = muldiv(jetton_amount , current_price, scale) тогда нужен масштабный коэффициент 10^9, видимо (reply to 293066)

X1ag: Да.   Для любого смарт-контракта существует две сети: тестнет и мейннет. У каждой сети есть по 2 адреса, как раз таки bouncable и non-boucable. Каждый из этих двух адресов "подвязан" к одному и тому же смарт-контракту (reply to 293072)

&rey: Это два разных указателя на один аккаунт. Бывают и ещё — условный ratelance.ton тоже адрес! (reply to 293069)

Dmitry: Спасибо большое, наконец понял эту тему (reply to 293074)

Dmitry: а это что за указатель, их можно вообще где-то посмотреть? (reply to 293076)

Dmitry: А я правильно понимаю, судя по истории в чате, что деплой кошелька "платный", и если стоит задача создания кошелька, то лучше его просто создать и все, дальше он задеплоится с первой транзакцией сам?

&rey: Ну, данные аккаунта без его адреса получить нереально, так что он у вас в любом случае будет.  Деплой платный, конечно. Обычно откладывается до первого исходящего. (reply to 293078)

Dmitry: А деплой сами разрабы делают или он автоматически происходит при исходящей транзакции? То есть без деплоя не получится никаких операций от себя сделать?  Принять транзакцию незадеплоенный кошелек все равно сможет и в зависимости от типа адреса (баунс или нет), коины либо вернутся отправителю, либо останутся "ждать" деплоя, все так? (reply to 293080)

X1ag: все работает, спасибо большое! (reply to 293073)

Andrey: Всем привет. У меня есть контракт, который отправляет жетоны со своего кошелька на произвольный кошелёк. Если жетонов на кошельке контракта недостаточно, то сообщение отскочит на кошелёк контракта и его баланс восстановится, но сам контракт не будет знать была ли отправка успешной. Есть ли способы узнать заранее будет ли отправка успешной? Или как-то задетектить неуспешность отправки на контракте-отправителе?

Denis: Да. Пожалуй ты прав. Слишком много когнитивной сложности возникает для юзеров (reply to 292993)

Andrey: Есть идея перед отправкой деплоить микроконтракт, в котором будет success/unsuccess переменная и например какой-то ид и при трансфере вкладывать форвард пайлоад, получив который контракт-отправитель пометит поле в микроконтракте, но кажется это плохое решение. (reply to 293083)

&rey: Как не будет? bounce же ему придёт. (reply to 293083)

Dmitry: можешь по пальцу вверх уточнить, все-таки деплой нужно делать самим, верно?) (reply to 293081)

Andrey: Bounce же придёт на контракт валета, а не на сам контракт, который отправил трансфер на свой валет. Или я ошибаюсь? (reply to 293086)

Иван: Читаю главу Bag of Cells. Подскажите, почему первый cell в BoC имеет размер в 1 бит, но содержит 0x8_, (которое должно быть 0b100)?

&rey: Буквами обозначьте: A, B, wA, wB, ... (reply to 293088)

&rey: Автоматически. Библиотека видит seqno=0. (reply to 293087)

Dmitry: понял, спасибо! (reply to 293091)

Andrey: А - контракт отправитель В - контракт получатель Aw - валет контракт отправителя Bw - валет контракт получателя A отправляет transfer на Aw Aw отправляет internal_transfer на Bw Жетонов недостаточно - internal_transfer отскакивает от Bw на Aw. Трансфера не произошло, а А не знает об этом (reply to 293090)

Andrey: Всё, понял. Отскочит трансфер на контракт - А) (reply to 293093)

(⁠✷⁠‿⁠✷⁠): Можно как-то получить Boc сообщения при отправки через tonClient?

Andrey: Потому что _ указывает что последняя еденичка - это маркер конца строки. То есть: 1100_ значит что там хранится «1» так как он смотрит по последней единичке, 0100_ - то что там «0», а если 1000_ значит сразу же конец строки и там лежит пустая строка (reply to 293089)

Andrey: Если нужна строка «100», то запись будет «1001_» (reply to 293089)

Иван: Хорошо, тогда зачем там 1 бит нужен, если 0x8  это 0b100_ или пустая строка в итоге? И зачем к примеру нужно 100_ писать если можно сразу же 1_ ? Запутался, что в итоге хранится там вообще в cell в одном бите. (reply to 293097)

Andrey: Это способ серелизации, как мы запишем его в массив байтов сколько там бит? Только отметив специальным маркером до куда считать биты полезной нагрузкой.  По поводу 100_ - это вам нужно 3 бита хранить или это запись? (reply to 293099)

Andrey: Если нужно 3 бита «100» то надо пометить последней единичкой где конец - получается «1001_»

Andrey: Если вы напишите «1_» это тоже самое что «0001_», то есть это прочитается как «000» 3 бита и конец строки

Иван: Нет, я просто перевел 0x8_ в binary формат 0b100_. В целом просто пока пытаюсь понять, как 0x8_ в cell связан с единственным битом и для чего это нужно вообще было в примере BoC. (reply to 293100)

Andrey: 0х8 это 0b1000, а не 0b0100 (reply to 293103)

Иван: Да, точно, нолик забыл

Andrey: Ну это большая разница

Иван: Другой смысл какой-то получается?

Andrey: 0b0100 - это 1 бит в строке, равный «0» 0b1100 - 1 бит в строке «1»

Andrey: 0b1110 - строка «11»

Andrey: Строка читается до тех пор пока не упрется в самую последнюю единичку справа

Иван: я понял смысл подчеркивания (reply to 293109)

Иван: 0x8_ это 0b1000_, а 0b1000_ это пустая строка или нет?

Andrey: Да, пустая строка (reply to 293112)

Иван: Тогда для каких целей 1 бит в cell нужен?

Andrey: В плане 1 бит в целл?

Иван: In this example we have a 1-bit size root cell that has 2 links: the first to a 24-bit cell and the second to a 7-bit cell which possesses 1 link to a 24-bit cell. (reply to 293115)

Andrey: А, я понял. Ошибка в документации

Andrey: Там пустая строка битовая действительно

Иван: Понял, спасибо, вроде разобрался.

Иван: может корневой cell не может быть меньше одного бита?

Andrey: Нет (reply to 293120)

Andrey: Ошибка в документации, уже передал чтобы поправили

Dmitry: Подскажите, можно ли как-то по адресу понять, что это именно неинициализированный кошелек, а не что-то другое?

X1ag: нельзя, только плашечку uninit смотреть в tonviewer (reply to 293125)

Dmitry: Понял, спс (reply to 293126)

— 2025-03-02 —

KTO: В общем, кому интересно, Boc транзакции в tonClient можно получить с помощью  const getBoc = async() => {     //     // Resolve init     //     let neededInit = null;     if (init && !await client.isContractDeployed(address)) {         neededInit = init;     }     //     // Send package     //     const ext = (0, ton_core_1.external)({         to: address,         init: neededInit ? { code: neededInit.code, data: neededInit.data } : null,         body: message     });     let boc = (0, ton_core_1.beginCell)()         .store((0, ton_core_1.storeMessage)(ext))         .endCell()         .toBoc();      return boc;  };

Shkiper: Это декодирование бок ? (reply to 293128)

KTO: Это из сообщения в tonClient сделать Boc

KTO: Вот из такого получить BOC, а потом по нему MSG HASH для отслеживания транзакции (reply to 293095)

Shkiper: Понял, у меня при подписании транзакции выходит Boc (reply to 293130)

KTO: в tonClient? (reply to 293132)

Shkiper: Не, я для подписания использую тонконнет UI (reply to 293133)

KTO: А ну, мне нужно было без браузерной версии

KTO: Чисто на ton библиотеке

RootTon: Всем привет, подскажите плиз с тонапи можно вытянуть историю баланса пользователя? или как либо составить ее. Мне нужно сделать график как менялся баланс юзера и я чет в тупике слегка

Pavel: 😁 спросил бы у меня. (reply to 293147)

User<8084745947>: 5 мин (reply to 293147)

User<8084745947>: @rootton_dev в ЛС скинул, сюда видео не отправляется

Sss.: Всем, привет. А какой лучший способ в ton мониторить состояние блокчейна. То есть получать себе свежие блоки с транзакциями

RootTon: Tonapi stream  Или стучаться раз в N времени в блокчейн и сосать данные с него (reply to 293153)

Mr: Есть форк решения из доки тона, для юнити: https://github.com/MrVeit/Veittech-UnitonConnect  Надеюсь, что он скоро тоже появится в доке (пуллреквест висит какое-то время уже в ton-docs) (reply to 292997)

Wrangler: Ищу с жетонами (reply to 293159)

Mr: Там как раз в ласт апдейте было добавлено взаимодействие с жетонами, нфт (отправка транзакций, чтение баланса)  Всё в мейннете, а для работы этих модулей бек нужно развернуть на NodeJs (инструкция по деплою прилагается в доке) (reply to 293160)

Wrangler: Спасибо (reply to 293161)

Wrangler: Зависает транзакция при отправке говорят (reply to 293161)

Mr: В плане?  При запросе отправки жетонов и нфт обращение на бек идёт и загружается пейлоад) Тут лучше экран загрузки добавить в этот момент, а тон транзакции моментально открываются в кошельке) (reply to 293167)

Wrangler: А вы на заказ помогаете людям? Мы проекты создаём, нам нужны профессионалы. Можно подробно в л.с. (reply to 293168)

Mr: К сожалению, сейчас нагружен проектами, так что увы)  В случае, если будут вопросы/проблемы при интеграции сдк - велком в мой тг форум (ссылка в доке) (reply to 293169)

Wrangler: Спасибо (reply to 293170)

Wrangler: Олег посмотрит завтра, возможно на его стороне что-то не так (reply to 293168)

Майкл: Всем привет! Кто-нибудь пытался рассчитать комиссию TON за перевод токенов (jettons) c кошелька на кошелек?  Скоро у тапалки эирдроп, хочу с бот-вермы залутать свежие токены, для этого, как я понял, нужно на балансе кошельков иметь достаточно TON для погашения транзакций за перевод токенов. Так чтобы не переводить фиксированную сумму TON на каждый кошелек хочу рассчитывать комиссии, чтобы минимизировать их.

Namon: Вроде 0.04 TON Но даже если больше поставить, то можно указать адрес для отправки излишка (reply to 293174)

Майкл: т.е. предлагаешь кидать на баланс c запасом, а потом излишки выводить вместе с токенами? (reply to 293175)

Майкл: этот варик только на крайняк буду юзать, есть у кого идеи как рассчитать комиссию?

Майкл: те же клиенты (tonkeeper) это делают через http метод emulate, но там здоровый payload, который я не знаю как составлять

User<8084745947>: 0.05 (reply to 293174)

X1ag: Что лучше, минимизировать затраты и иметь риск, что токены не отправятся или оптимизировать затраты, при этом имея шанс потерять чуть-чуть ton? (reply to 293174)

Майкл: понял, скупой платит дважды (reply to 293181)

Denis: Да.  https://tonapi.io/v2/blockchain/accounts/subbotin.ton/transactions Там есть end_balance (reply to 293147)

sna1l1: Привет всем! Я разработчик LazyCoin и мне нужна помощь с кодом смарт-контракта и клиентской частью (контракт написан на Func, а клиентская часть – на React). Хочу развернуть и взаимодействовать со смарт-контрактом на клиентской стороне. Если вы можете помочь за определённую оплату – напишите в личку.

Лиля: Здравствуйте, подскажите пожалуйста. Есть ли метод в апи позволяющий получить список холдеров?

X1ag: https://tonapi.io/v2/jettons/{address}/holders (reply to 293194)

Лиля: Спасибо (reply to 293195)

Лиля: А контактировать в адрес с UQ возможно?

sd: Формулируйте вопросы подробно (reply to 293199)

Лиля: Здравствуйте. Я получаю RAW адрес, а как его преобразовать 🤔 (reply to 293200)

sd: https://docs.ton.org/v3/guidelines/dapps/cookbook#working-with-contracts-addresses (reply to 293201)

Denis: На всякий случай напоминаю что везде под капотом стоит использовать raw форму, а в human readable преобразовывать в момент представления юзеру (reply to 293199)

Dmitry: А зачем, если все апихи с тем же  успехом читают человеческие адреса? (reply to 293203)

Denis: Это одно из правил проектирования апи. На входе ты согласен принимать данные в любых форматах даже самых не структурированных (но исключающих неоднозначное трактование). А на выходе максимально очищенные и стандартизированые данные (reply to 293205)

Denis: Тонапи например DNS имена даже поддерживает

Dmitry: Спасибо за ответ (reply to 293207)

фф: Как получить хэш транзакции если я отправил ее через npm @ton/ton?

Danya: через тон апи бок передаешь транзы,он тебе хэш даст (reply to 293214)

ɐdɯǝ̤w: Всем добрый вечер. Хотел запустить прокси ton на сайт через tonutils. Подключил ton dns и не работает, долго загружает потом ошибка time out. Порты все открыл, проброс портов сделал. Уже виню на то, что из Крыма и могут быть территориальные ограничения по айпишнику. Подскажите, как решить проблему?  Стоит nginx на ubuntu server и по внешнему ip через 80 порт на сайт заходит и по локальному тоже. В конфиге tonutils указал сначала htt p: /  / 127.  0.0  .1: 8  0, потом внешний, потом вообще свой домен .ru. Во всех случаях time out.

Sergey: может, из-за https ? (reply to 293225)

Nononono: один хер, пока не понимаю в чем проблема... через либу xssnick - работает 😐 (reply to 293225)

&rey: Через что загружаете-то? magic и ton-run работают криво-косо. (reply to 293225)

ɐdɯǝ̤w: https://ton-docs-mu.vercel.app/develop/dapps/tutorials/how-to-run-ton-site  по этому гайду делал (reply to 293228)

ɐdɯǝ̤w: вообще его убрал, оставил в конфиге nginx только http, аналогично (reply to 293226)

ɐdɯǝ̤w: через неё и делал получается (reply to 293227)

ɐdɯǝ̤w: вот такой конфиг на  tonutils reverse proxy {         "proxy_pass": "http://127.0.0.1:80/",         "private_key": "ключ",         "external_ip": "внешний ip",         "listen_ip": "0.0.0.0",         "network_config_url": "https://ton.org/global.config.json",         "port": 11558 }  и на nginxе  server {     listen 80;     listen [::]:80;      root /var/www/Site;     index index.html index.htm index.nginx-debian.html;      server_name домен.ru;      location / {         try_files $uri $uri/ =404;     } }

Алексей: Други родные, помогите непросвещенному🙏🏻. Есть мысль прикрутить живой товар к крипте. Как это сделать? И основная идея это, чтоб могли сжигать монету или nft (не понимаю пока технически) по конкретной цене.  Пример. Выпускаю 100 монет по цене 1$ . Но чтоб получить товар нужно (монету или nft) сжечь по цене 1$ или выше. Как это сделать, так чтоб сжигалось тока при определенной цене или выше, но не работало при меньшей?

ɐdɯǝ̤w: Товарищи, всё заработало! Надо было по UPD пробросить порт из конфига в маршрутизаторе (reply to 293232)

Oleg: Что такое "выпустить монету по цене" и "сжечь монету по цене"? Звучит как нечто инопланетное (reply to 293233)

Алексей: Стартовая цена и цена сжигания одинаковая. (reply to 293237)

Cryptosiz: Hello guys, I’m also a Ton developer. Very good to be here

Алексей: Если цена по рынку меньше, то сжечь невозможно. Ну или добавить денег чтоб сжечь. (reply to 293238)

Shkiper: Чтобы так сделать ты должен знать за сколько ты их продал, понимаешь ты должен хранить где то эту информацию и так для всех пользователей, если хранить эту информацию в контракте это будет дорого, каждая операция будет влетать в копеечку, вообще я не знаком с организацией сжигания монет, но для твоей цели наверное лучше подумать о средней цене сжигания единой для всех и которая будет меняться (reply to 293233)

— 2025-03-03 —

Uładzisłaŭ: всем привет, может кто-то подскажет, как правильно хендлить успешность отправленной транзы с фронта (react)?

Иван: https://www.cursor.com/pricing

B.: Всем привет Можете пожалуйста помочь? .... data: {       ok: false,       error: 'LITE_SERVER_UNKNOWN: cannot apply external message to current state : External message was not accepted\n' +         'Cannot run message on account: inbound external message rejected by account B884093A5E1B38518DDD3D9DE8D146D1E5D9D5E0478EFBA234769D777D872C8C before smart-contract execution',       code: 500     }   },  вот такая ошибка выходит когда хочу в тестнет задеплоить NFT Collection

B.: const toncenterBaseEndpoint: string = testnet         ? "https://testnet.toncenter.com"         : "https://toncenter.com";      const client = new TonClient({         endpoint: `${toncenterBaseEndpoint}/api/v2/jsonRPC`,         apiKey: process.env.TONCENTER_API_KEY,     });   мой клиент

