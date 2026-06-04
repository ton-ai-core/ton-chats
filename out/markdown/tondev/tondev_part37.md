TON Dev News: 🪙 Переименование Toncoin — голосование сообщества  За последние месяцы TON сильно изменился. Telegram всё активнее участвует в работе сети и становится её крупнейшим валидатором. Сеть стала в 10 раз быстрее, а комиссии упали в 6 раз. Имя Gram дали токену сами основатели TON ещё в первом White Paper — и оно с тех пор так и осталось в кодовой базе.  Поэтому Telegram предлагает вернуть токену его исходное имя и переименовать Toncoin в Gram. Сейчас для этого самый подходящий момент.  Сам блокчейн остаётся прежним — TON / The Open Network. Меняются только название токена и тикер. Балансы, адреса, контракты, NFT, стейкинг, DeFi — всё на месте. Ничего обменивать, переносить или «клеймить» не нужно — от вас не требуется никаких действий.  ⚠️ Если какой-то сайт, бот или ссылка предлагают «получить GRAM» или «мигрировать TON» — это мошенники.  Как пройдёт голосование Голосование продлится неделю на TON Vote. ▪️ Вес голоса зависит от баланса TON на момент снятия снепшота.   👉 Проголосовать (forwarded from Toncoin RUS)

Victor: а у вас тоже ton.vote не секьюр?

Oleg: Это проделки РКН, небось (reply to 351422)

Victor: обновил, стало норм, открыл в другом браузере, not secure - обновил страницу, secure, хз может и ркн (reply to 351423)

iSafe077: Если вес голоса зависит от баланса, то значит Паша с корешами всё уже решил ))) (reply to 351416)

𝗖𝗔𝗟𝗠: Но вы не подумайте, на самом деле в TON истинная децентрализация (reply to 351430)

D: Сейчас тот кто сделает крутой амл продукт на тоне будет царь

D: Только нету их)))

ликован: GRAM Dev Chat (РУ)

𝗠𝗿. 𝗠𝗮𝗿𝗸: TON Как блокчейн - The Open Network не меняется. Меняется исключительно TONcoin. (reply to 351434)

Илья: Вы наверное не знали раньше про систему и принцип голосования? (reply to 351430)

— 2026-06-02 —

Dr. Awesome Doge: XDDDDDD (reply to 351434)

Roman | 𝟟𝟙𝟚𝟟.𝕥𝕠𝕟: Привет! Пытаюсь сделать swap TON → USDT через DeDust из обычного W5R1 кошелька (не контракт-роутер). Vault native всегда делает bounce. Pool активный, возвращает реалистичные цифры. Что я делаю не так?  Tx моего кошелька → Vault: compute OK, action OK, 1 outgoing (0.7 TON, body=DedustSwap). Tx Vault'а: Call Contract Failed, bounce 0.699 TON обратно мне. Газ потери ~0.001 TON. Pool вообще не получает сообщение.

TON Support: The contract likely rejected the transfer and returned the unused funds because an ownership check failed. A transaction can also fail during execution with a non-zero exit code if there isn't enough gas to complete the transfer. In your case, the Call Contract Failed on the Vault's transaction suggests an issue during its execution, preventing the message from reaching the Pool.  Source: Using Tonviewer — TON Docs (reply to 351550)

Petr: Без транзакции сложно сказать наверняка (reply to 351550)

Roman | 𝟟𝟙𝟚𝟟.𝕥𝕠𝕟: https://tonviewer.com/transaction/f772b95720720f30f0e2996eb263791ae8028548cd47eab66cb0ff3a92a59f03 https://tonviewer.com/transaction/51605097ffa92cc97a724b736f4a184179cf9934621ca84432cfff0bf94c72b6 https://tonviewer.com/transaction/3db81227941009b9881a994f7c42e51f1cb1d8b337361425de65fd14ba5517bf   попробовал: Ручная сериализация payload (точно по VaultNative.sendSwap исходнику) — refund. Отправка напрямую через vault.sendSwap(sender, ...) из SDK — тоже refund. deadline = 0 → deadline = now+60 — без эффекта. recipient_addr = null → recipient_addr = мой wallet — без эффекта) (reply to 351552)

Alexey: так вы посылаете не на тон волт дедаста, а на волт шторма зачем-то) (reply to 351553)

Roman | 𝟟𝟙𝟚𝟟.𝕥𝕠𝕟: А, понял. А можно ли посмотреть где то волт дедаст? (reply to 351554)

Alexey: https://tonviewer.com/UQDa4VOnTYlLvDJ0gZjNYm5PXfSmmtL6Vs6A_CZEtXCNIHd6  вот это волт дедаста (классик пулы) (reply to 351555)

Roman | 𝟟𝟙𝟚𝟟.𝕥𝕠𝕟: Спасибо! (reply to 351556)

Abyss: Эй

— 2026-06-03 —

ㅤ: каким образом добиться эффекта такого же как у токена sTon, то есть алгоритмический курс, который привязан к курсу + определённый % годовых? у них это на уровне своего контракта или у них свой маркетмейкер на DEX? может и то и другое? если мне нужен какой-то алгоритмический по сути токен, чтобы цена была пегнута к чему-то, какой-то формуле.

ㅤ: вижу, что при покупке идёт минт жетона. при продаже сжигание? но как прописывается курс и т.д. не совсем понятно.

D: Контракт посмотри

ㅤ: Смотрел, там на func всё, загонять всё в ллм муторно) Понятно что сжигается и минтится.  На стонфи скорее всего они просто ботом покупают продают.  Непонятно как курс ставят. И как отправляют валидатору. Именно этот кошелек валидатор может. (reply to 351640)

🐼 Sild: давно не было вопроса по порядку исполнения транз  есть цепочка   a (tx1)  -> b (tx2) -> d(tx4)              -> c (tx3) -> d(tx5)   нет никаких гарантий что tx4 произойдет раньше tx5?

Tim: Нет

ㅤ: а как тогда происходит создание контракта и запуск метода сразу же? если вдруг метод запустится на контракте, который не создан?

Mirka: Это все одна транзакция (reply to 351711)

TON Support: Проблемы с TON Center V3 API в настоящее время наблюдаются. Есть ошибки, связанные с получением информации о мастерчейне и ожидающимися транзакциями. Возможно, это влияет на работу вашего кошелька и отправку транзакций.  Source: [ton_service_status](None)

Zzz...: какие кошельки работают? (reply to 351716)

Zzz...: Mytonwallet лежит

TON Support: Судя по информации о статусе сервиса TONkeeper, есть ошибки, связанные с получением данных о курсах обмена (rates/chart) для различных токенов, а также проблемы с Tonkeeper Battery Tron и Balance. Это может влиять на работу MyTonWallet.  Source: [ton_service_status](None) (reply to 351718)

Slava: Если контракт ещё не создан, то вызвать его не получится. Однако вызов можно совместить с деплойментом (передать код и данные контракта вместе с вызовом). (reply to 351711)

ㅤ: ещё вопрос если можно, общий: какой лучший способ попрактиковать с tolk? возможно есть уроки/примеры, доку проглядывал, но там как-то только общие какие-то вещи. некоторые говорят есть skill для клода под tolk, насколько это практичная вещь или лучше с этим не играться писать от руки?)

User: https://ton-blockchain.github.io/acton/  Недавно вышла тулза для того чтоб удобно работать с контрактами через ИИ. Можете подключить удобный вам ИИ и попросить его объяснить вам базовые вещи, НО не забудьте периодически просить у него ссылки на информацию и смотреть источник, чтоб не наткнуться на нейросетевые придумки)  Штука очень полезная. С ней можно написать MVP любой сложности (reply to 351721)

𝗠𝗿. 𝗠𝗮𝗿𝗸: Все, вроде бы все. (reply to 351716)

Zzz...: нет, у меня кош не работает до сих пор (reply to 351723)

Zzz...: напишите как решат проблему (reply to 351719)

𝗠𝗿. 𝗠𝗮𝗿𝗸: Попробуйте перезайти. ТОНцентр восстановил свою работу. (reply to 351724)

Zzz...: не, не ворк Mytonwallet (reply to 351726)

𝗠𝗿. 𝗠𝗮𝗿𝗸: Обратитесь в поддержку MyTonWallet. Либо ожидайте исправления. Только что делал запрос - все отлично работает. (reply to 351727)

𝗠𝗿. 𝗠𝗮𝗿𝗸: У них же свои сервера, проксируют все через свой бэк. Ожидайте.

𝗖𝗔𝗟𝗠: Он падал? (reply to 351726)

𝗠𝗿. 𝗠𝗮𝗿𝗸: Да, буквально на 5 минут. (reply to 351730)

Zzz...: запросы через toncenter у меня тоже работают, а видно поправить последствия нужно самой команде MyTonWallet (reply to 351728)

𝗠𝗿. 𝗠𝗮𝗿𝗸:   "title": "Error 504: Gateway time-out",   "status": 504,   "detail": "The origin web server did not respond to Cloudflare within the allowed time. This typically means the origin is overloaded or a backend process is taking too long.",   "instance": "....",   "error_code": 504,   "error_name": "origin_gateway_timeout",   "error_category": "origin",   "ray_id": ""....",   "timestamp": ""....",   "zone": "toncenter.com",   "cloudflare_error": true,   "retryable": true,   "retry_after": 120,   "owner_action_required": true,   "what_you_should_do": "**Wait and retry.** Back off for at least 120 seconds. If the error persists, the website operator should investigate long-running processes on the origin server.",   "footer": "This error was generated by Cloudflare on behalf of the website owner." (reply to 351730)

𝗠𝗿. 𝗠𝗮𝗿𝗸: Я прямо щас сделал тест запрос мтв - все отлично работает (reply to 351732)

Zzz...: у меня toncenter летает тоже

TON Support: Судя по статусу, toncenter_v3 испытывает проблемы. Есть ошибки 404 ("emulated traces not found") при запросах к /api/v3/pendingTransactions, а также ошибка "414 Request-URI Too Large" и проблемы с получением masterchainInfo.  Это может объяснять, почему у вас toncenter "летает".  Source: [ton_service_status](None) (reply to 351735)

𝗠𝗿. 𝗠𝗮𝗿𝗸: Сейчас все отлично, пофиксили (reply to 351736)

Mega: Привет. Можно нубский вопрос? Как получить тестовые USDT? :)

Alex: Заминтить в тестнете свой жетон с  decimals 6 (reply to 351744)

Mega: А, ну мб и так. Ща разберусь, как это сделать. (reply to 351745)

Mega: Заминтил. Но что забавно, создал смарт контракт отдельный, высылаю на него 1,000 USDT (10000000), в транзакции написано 1к, а на балансе почему-то 1к в тонкене https://testnet.tonscan.org/address/kQBSLsH7akcXaNGR16oIIdkXKyaplG70a7jtcphi9Q_fIj-E (reply to 351745)

rends_east: Скорее всего метадата не подтянулась Возможно, из-за неверного формирования, возможно из-за тестнета (reply to 351751)

Mega: У меня такая версия тоже) (reply to 351752)

Alex: https://testnet.tonviewer.com/kQBSLsH7akcXaNGR16oIIdkXKyaplG70a7jtcphi9Q_fIj-E На тонвьювере нормально показывает (reply to 351753)

Mark: У нас на клиенте закешировалась HTML страница, которую Toncenter временно отдавал вместо JSON респонса во время инцидента. Если вы на Android, вам должен помочь сброс кеша в настройках "О приложении". Для других платформ потребуется релиз с исправлением, работаем над этим. (reply to 351724)

Zzz...: Да, вот я тоже так понял, надеюсь у обычных юзеров со временем обновится кэш сам. То же самое сказал Anne Support: в Chrome браузере в окне расширения кошелька нажал комбинацию Ctrl + Shift + R - принудительная перезагрузки страницы без использования сохраненного кэша и все заработало! (reply to 351756)

Mark: К сожалению, нет, в тех ошибочных HTML респонсах не было явного срока истекания кеша, и по оценке, исходя из эвристики TTL браузеров, кеш перестанет работать сам по себе через 52 дня. Поэтому пока советуем сбрасывать кеш и готовим релиз с принудительным сбросом кеша. Спасибо за содействие :) (reply to 351757)
