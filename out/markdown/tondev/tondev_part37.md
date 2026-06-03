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
