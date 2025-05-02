ADM_CashWorld: тоесть? у меня поднят сервак под ton-http-api. Все через него работает, но как выяснилось сейчас, получение адреса по домену не пашет: await tonweb.dns.getWalletAddress('foundation.ton');  меняю свой ton-http-api v2 на toncenter.com/api/v2 все работает.  Не в репо не на форумах ничего не могу найти по данной проблеме) (reply to 170627)

NIKITA M.: Благодарю! (reply to 170629)

&rey: А в консоли браузера нет деталей, какой запрос упал и с какой ошибкой? (reply to 170630)

ADM_CashWorld: Ха, короче трабла идет когда я со своего ton-http-api пытаюсь получить config. Получаю ошибку что сокет разорвал соединение, но если я просто делаю гет запрос все ок конфиг передается. по моему либа пытается конфиг получить по другому пути типа /jsonRPC/getConfigParam а не /getConfigParam  Щас поправлю либу, потестю.. (reply to 170632)

Арк💠🐍🐾: Привет а сколько стоит смарт контракт ? Надо такой чтоб владельцы нфт дроптполучали

Lapis⁴² 💎: Как передать Cell в forward_payload? Это если что tonsdk.contract.token.ft.jetton_wallet

andy: Привет.  Кто-то сталкивался с такой проблемой, что аккаунты, разрушенные переводом с флагом DESTROY_ACCOUNT_IF_ZERO (128), ведут себя странно после пересоздания? Заметил такое странное поведение:  1. Переводим с кошелька А на новый, неиницилизированный кошелек Б. 2. Потом с кошелька Б переводим все деньги обратно на A с флагом разрушения аккаунта (код будет ниже). 3. После этой процедуры кошелек Б становится неюзабельным: если снова переслать деньги с А на Б, то они без твоего вмешательства вернутся обратно на А.  Пример кода из пункта 2. Пункты 1 и 3 можно делать прямо из любого кошелька, это неважно. Эффект продлится на протяжении 2-4 последующих транзакций (от чего зависит, не знаю):  const toAddressObject = to.address;     const isUserFriendly = true;      const isUrlSafe = false;     const isBounceable = false;      const isTestOnly = false;      const toAddress = toAddressObject.toString(isUserFriendly, isUrlSafe, isBounceable, isTestOnly);     const wallet = from.wallet;     const seqno = (await wallet.methods.seqno().call()) || 0;     const secretKey = from.privateKeyRaw;      const transferParams = {         secretKey,         toAddress,         amount: 0,         seqno,         sendMode: SendMode.CARRY_ALL_REMAINING_BALANCE | SendMode.IGNORE_ERRORS | SendMode.DESTROY_ACCOUNT_IF_ZERO,     };      await wallet.methods.transfer(transferParams).send();  Не имею понятия, баг ли это, или я что-то упускаю...   Вот пример кошелька (А), с которого делаю переводы: https://tonviewer.com/EQAPqRlewultl8xHCKGsrenb4PZaQ0QDfPYoK1fwVUODdcmY  Все входящие сообщения с одинаковым текстом (e.g. 16a90454-46dc-43fa-95df-90ef52620eb0) - это результат этого "бага". Я их не высылал.

ADM_CashWorld: На Б кошель если он ещё не создан, тоесть контракт разрушен, надо отправлять что бы адрес начинался с U а не Е,  Конвертирует адрес. Tostring true true false Сори с телефона пишу (reply to 170647)

Василий: Про bounceable адреса вам уже отвечали же.  https://t.me/tondev/169929 (reply to 170647)

ADM_CashWorld: Именно. Спс (reply to 170649)

andy: bounceable false указано, я явно указал в примере (reply to 170649)

Lapis⁴² 💎: Так там же const isBounceable = false; (reply to 170648)

andy: чтобы не было недопонимания

andy: могу запись с экрана сделать поведения, или сами запустить можете хз, это очень странно

ADM_CashWorld: Конвертирует адрес и отправь на него как я сказал и все. (reply to 170651)

ADM_CashWorld: Все все вижу, сори код не посмотрел) (reply to 170655)

andy: ты имеешь в виду объект передать?

andy: ну да

andy: разницы же не должно быть

Василий: Это код с Б на А?  99% что на каком-то этапе флаг забыт. Сообщение может баунсить только если адрес bounceable (reply to 170651)

andy: это код с Б на А с А на Б я шлю специально через tonkeeper, чтобы избежать ошибок с моей стороны (reply to 170660)

Василий: Так видимо кипер и шлёт его как bounceable. Когда вы повторно с A на Б отправляете (reply to 170661)

andy: так как баунсит кипер, если сообщение приходит с текстом (reply to 170662)

andy: текст из скрипта идет

andy: а там unbounceable

ADM_CashWorld: Впиши адрес напрямую который на UQ и все (reply to 170661)

andy: давай я напишу полный main, чтобы просто запустить со своей мнемоникой

andy: если есть вариант проверить

andy: ок, сейчас попробую захардкодить (reply to 170666)

ADM_CashWorld: Всегда сначала надо хардкодить, потом рефакторинг) (reply to 170669)

Василий: Баунсить может только контракт получатель. Если с А на Б отправляется через кипер, то смотрите формат адреса. Или вообще исключите кипер из уравнения и тестируйте весь кейс скриптами (reply to 170663)

andy: cкриптами точно такая же ситуация, я изначально тестил скриптами) (reply to 170671)

Alik: Здравствуйте, я отправил монеты TON на Bybit, вместо  внешнего кошелька я выбрал внутренний и поставил адрес (bybitwallet.ton) как мне вывести монеты обратно на кошелек?

andy: Вот код перевода с Б на А. Нужно только свою мнемонику кошелька Б и адрес кошелька А вставить.   import TonWeb from 'tonweb'; import tonwebMnemonic from 'tonweb-mnemonic';   const apiKey = "" || undefined; // WALLET B const mnemonic = "..."; const walletVersion = "v4R2"; // WALLET A const toAddress = "...";   const SendMode = {     CARRY_ALL_REMAINING_BALANCE: 128,     CARRY_ALL_REMAINING_INCOMING_VALUE: 64,     DESTROY_ACCOUNT_IF_ZERO: 32,     PAY_GAS_SEPARATELY: 1,     IGNORE_ERRORS: 2,     NONE: 0 }  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));   (async () => {     const provider = new TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC', {apiKey});      const WalletClass = TonWeb.Wallets.all[walletVersion];     const mnemonicArray = mnemonic.split(" ");          let { publicKey, secretKey } = await tonwebMnemonic.mnemonicToKeyPair(mnemonicArray);     publicKey = Buffer.from(publicKey);     secretKey = Buffer.from(secretKey);      console.log(`PUBLIC KEY: ${publicKey.toString('hex')}`);      const wallet = new WalletClass(provider, { publicKey });      const seqno = await wallet.methods.seqno().call() || 0;     console.log(`SEQNO: ${seqno}`);     await sleep(2000);          const transferParams = {         secretKey,         toAddress,         amount: 0,         seqno,         sendMode: SendMode.CARRY_ALL_REMAINING_BALANCE | SendMode.IGNORE_ERRORS | SendMode.DESTROY_ACCOUNT_IF_ZERO,     };      console.log(JSON.stringify({...transferParams, secretKey: transferParams.secretKey.toString('hex')}, null, 2));      const response = await wallet.methods.transfer(transferParams).send();          console.log(`transfer sent to blockchain: ${JSON.stringify(response, null, 2)}`); })();  Вот пример кошелька А: https://tonscan.org/address/UQAySjlsHUY2EEedO5GTenzFvAnR5E-4ptwfeox6OZYnNqxA  Все out транзакции, кроме самой первой, которая создалась из скрипта, — автоматические, т. е. происходят без постороннего вмешательства сразу после поступления денег на счет. Причем кол-во необязательно должно быть таким же: в последнем случае я попробовал перевести 0.3 TON и получил такое же поведение. (reply to 170671)

Mirka: Ща наколдую тебе возврат средств(в поддержку байбита иди) (reply to 170676)

Alik: Я отправил монеты из Телеграм кошелёк на Байбит но они не зачислилис (reply to 170679)

Mirka: Ты МЕМО указал? (reply to 170680)

Андрей: Подскажите взял пример из доки по отправки жетонов через @tonconnect/ui-react https://docs.ton.org/develop/dapps/ton-connect/message-builders#jetton-transfer при отправки открывается тонкипер с сообщение "Ошибка подсчета комиссии" в чем может быть проблема использую код из примера @thekiba

Kiba: Попробуйте вот это https://github.com/ton-community/assets-sdk  Оно имеет поддержку TON Connect, в examples есть пример (reply to 170682)

Андрей: мне с подлеченного кошелька нужно отправить жетоны, разве assets-sdk подойдет ? (reply to 170683)

Kiba: Да (reply to 170685)

Андрей: спасибо, попробую (reply to 170686)

andy: Мужики, вот описал проблему подробнее: https://stackoverflow.com/questions/78094237/ton-transfer-bug-when-using-32-destroy-account-if-zero-flag Есть тут знающие люди, в чем может заключаться причина такого поведения?

Kosrk: если время жизни сообщения (TTL) которе отпраялется на кошелек довольно большое, то оно второй раз может быть взято из мемпула, повтороно применено и повторно совершен вывод. т.е. когда контракт B уничтожается, то уничтожается его storage где хранится seqno. следовательно не работает защита от повторного вывода (reply to 170689)

andy: это очень интересное объяснение то есть есть мемпул входящих сообщений с ttl, и единственное, что защищает от таких "бесконечных" транзакций - это seqno? получается, ноды сами не знают, какие сообщения они уже обработали в предыдущих блоках? (reply to 170693)

Kosrk: в первую очередь их защищает ttl. если его сделать поменьше, то можно свести вероятность такого к минимуму. зачем сделано так, что нода может применить уже использованное сообщение несколько раз я не знаю, но с таким поведением я уже сталкивался. (reply to 170698)

Kosrk: ну и сообщение в мемпуле хранится не бесконечно (reply to 170698)

Spite: Как понять, что оно уже использовано с точки зрения консенсуса? Да и зачем это? Экстернал несколько раз броадкастят, пока все не убедятся, что он дошел, либо не дошел (reply to 170699)

Kosrk: ну вот видимо и объяснение) (reply to 170701)

andy: спасибо, офигенно объяснил, я просто как столкнулся, так всю голову поломал, слишком неожиданное поведение оказалось (reply to 170699)

andy: спасибо, это действительно кажется очень вероятным объяснением. вопрос такой ещё, уже скорее для закрепления: а не в тягость ли нодам каждый раз из пула сообщения обрабатывать, даже уже обработанные до этого? ведь всё-таки ттл может быть долгий, да и разработчики хвалятся, что условный throughput блокчейна – до миллиона транзакций в секунду? (reply to 170701)

Spite: Тут важно не путать internal и external сообщения. Экстернал рассылается, пока не дойдет до валидаторов и не обработается. Суть в том, что нет гарантии доставки, и оно просто шлется, пока не протухнет.  После обработки не все ноды могут одновременно узнать об этом и некоторые ещё могут продолжать слать тот же экстернал и процесс будет повторяться.  Это обычное поведение. Есть ещё сценарий, когда кто-то может специально поймать этот экстернал и слать его (допустим, как раз таки для двойной и более траты), но от этого и защищает сегно, который сбрасывается при уничтожении кошелька (reply to 170705)

andy: Почти понял, нужно больше информации освоить, я сохраню наш тред, чтобы потом перечитать на свежую голову. можешь посоветовать источники, где узнать про вот именно эти особенности блокчейна? (reply to 170707)

Spite: https://docs.ton.org/develop/smart-contracts/guidelines/external-messages (reply to 170708)

andy: то есть дока очень хорошая? в теории я мог узнать ответ на свой вопрос, если бы целиком прочёл? (reply to 170709)

Spite: +- да, зависит от темы. В данном вопросе почти все описано. Только здесь ещё добавляется, что при уничтожении кошелька сегно сбрасывается, делая прошлый экстернал опять валидным (reply to 170710)

andy: понял, спасибо за ликбез) (reply to 170711)

— 2024-03-03 —

Оскар: что означает -13 exit code? вызываю гет метод тут данного кода нет https://docs.ton.org/learn/tvm-instructions/tvm-exit-codes (не просто 13, а -13)

Оскар: спасибо в прошлое (reply to 163908)

Alik: Да показал (reply to 170681)

ᗩᒪᗴ᙭: Доброе всем утро! Подскажите в какую документацию смотреть , чтобы сделать токен минтящимся по смарт контракту с определеным условием, любым пользователем ? Буду рад любой помощи. Бегло просмотрел FunC , Blueprint , pythonlib , tonsdk, но чтобы конкретный пример, нигде не нашел. Может был не внимателен.

ᗩᒪᗴ᙭: Это с вашего личного примера? Мне бы ссылочку на doc изучить или видео. Просто охота разобраться, а не просто слизать. (reply to 170732)

ᗩᒪᗴ᙭: Но и на этом огромное спасибо! Попробую вникнуть

ᗩᒪᗴ᙭: Спасибо (reply to 170735)

Максим: Всем привет. Как правильно составить транзакцию чтобы приобрести НФТ? Пишу на го

Denzel': Добрый день! Кто может объяснить как tonviewer или tonscan получает транзакции всего блокчейна ton. У них стоит своя нода?

Андрей: Да, у них своя архивная нода + индексатор поверх нее (reply to 170744)

Denzel': А свою ставить очень затратно, да? (reply to 170745)

🎐*<@Maxim: 🫶🏽 Привет! а почему в уроке написано:  удаление из словаря через ~ (тильду): dic~udict_delete?(256, key); а получение по ключу через .(точку): dic.udict_get?(256, key);  как не запутаться по жизни, где ~, а где . и конкретно тут тоже не понятно, почему так?

Denzel': Там 64гб+ оперативы надо если не ошибаюсь (reply to 170746)

cemorum: Господа, добрый день. Есть ли примеры смарт контрактов лутбоксов на тон?

Андрей: https://archival-dump.ton.org/ (reply to 170748)

Denzel': жесть... (reply to 170750)

Denzel': А кто-то знает как получать все последующие транзакции через апи какую-нибудь? Был опыт у кого-нибудь?

Denzel': спасибо (reply to 170750)

Олександр: Добрый день, подскажите куда обратиться 2часа назад украли монети ТОН с кошелька ТОН

User: Вернуть их уже не получиться, но вы можете рассказать с какого кошелька вывели и что вы перед эти делали, если ничего - то скорее всего у вас украли сид фразу (reply to 170757)

Wolf: Общался с кем нибудь перед кражей в телеге? (reply to 170757)

Олександр: нет не общался и ничего не делал заходил переодически на кошелек и все

Wolf: На сайте ни где не вбивал свои сид фразы?

Олександр: нет только в кошельке

Wolf: По истории посмотри когда и на какой кошелёк были отправлены твои монеты

Wolf: В истории транзакций эта информация должна быть

Wolf: А лучше смени кошелек

Wolf: Сделай новый

&rey: var y = x~fn() означает на самом деле (x, var y) = ~fn(x); — изменяющая функция. (reply to 170747)

🎐*<@Maxim: я для себя понял что dic~udict_set() и dic~udict_delete?() - двигают биты, а dic.udict_get_next?() и dic.udict_get?() - не двигают биты, поэтому они через точку, верно? (reply to 170768)

&rey: Какие биты ещё? Функции через тильду изменяют первый аргумент, через точку — нет. Вот и всё. (reply to 170769)

Андрей: Подскажите как на js распарсить этот ответ, по идее контракт возвращает map<Address, Int>

Андрей: где можно найти пример как распарсить map из гет метода ?

IndexCorp: не нашел параметры управления цветом json, но нашел callback_data, правильно?  "buttons": [     {         "label": "text button",         "url": "https://t.me/group",         "callback_data": "blue"     } ]

Андрей: вообщем посмотрел как через блюпринт генерирует структуру в тс, повторил, получилось) (reply to 170774)

IndexCorp: или написать color?

­😇: Как может возникать ошибка exit -13; если на контракте хватает тон для газа . Куда смотреть подскажите?  RunResult(stack=[TvmStackEntryNumber(type=tvm.stackEntryNumber, number=5006692414100464793292357939715822669409403686033241376577228914403471563), TvmStackEntryNumber(type=tvm.stackEntryNumber, number=107318)], gas_used=0, exit_code=-13)

ㅤㅤㅤㅤㅤ: Does anyone know how to use golang to load the mnemonic and then authorize the login fragment?

Alacrity: Есть ли способ получить код смарт-контракта по его адресу на Python?

Vladimir: Откуда получить?) (reply to 170790)

Alacrity: Из блокчейна. На tonviewer можно посмотреть код смарт-контракта. Можно ли также сделать с помощью Python (reply to 170791)

Vladimir: в смысле байткод смотреть из блокчейна? (reply to 170792)

Alacrity: Вот так посмотреть

Andrey: не путайте байткод и исходный код

Andrey: байткод в сыром виде можно достать из StateInit структуры, а вот исходный код через сервис verifier.ton.org (если он предварительно загружен туда)

Andrey: собственно tonviewer из verifier.ton.org и берет исходный код

!O_s_tap!: День добрый. Тут могут помочь с этой проблемой? 27 февраля сделал все задания из квеста Junior Pilot L1 quest, заплатил за минт комиссию, но нфт так и не появилась в моем кошельке

&rey: Не-а, это чат разработчиков, не фармеров наград по квестам... (reply to 170800)

!O_s_tap!: Понял. Спасибо. Просто бот поддержки именно на эту группу указал (reply to 170801)

IndexCorp: Подскажите пожалуйста, в метаданных нфт, не нашел параметры управления цветом json, но нашел callback_data, правильно? или просто color?  "buttons": [     {         "label": "text button",         "url": "https://t.me/group",         "callback_data": "blue"     } ]

Vlad: Вообще никак не могу заминтить ни nft, ни sbt через assets-cli deploy-nft-collection. Хелп. Ошибка: Attempt 1 failed: upload content: [object Object] Attempt 2 failed: upload content: [object Object] Attempt 3 failed: upload content: [object Object] Error: Exceeded number of retries     at retry (C:\Users\User\AppData\Roaming\npm\node_modules\@ton-community\assets-sdk\dist\cli\common.js:176:11)     at async AssetsSDK.internalOffchainContentToCell (C:\Users\User\AppData\Roaming\npm\node_modules\@ton-community\assets-sdk\dist\sdk.js:162:28)     at async AssetsSDK.contentToCell (C:\Users\User\AppData\Roaming\npm\node_modules\@ton-community\assets-sdk\dist\sdk.js:169:80)     at async AssetsSDK.deployNftCollection (C:\Users\User\AppData\Roaming\npm\node_modules\@ton-community\assets-sdk\dist\sdk.js:81:27)     at async Object.main (C:\Users\User\AppData\Roaming\npm\node_modules\@ton-community\assets-sdk\dist\cli\deploy-nft-collection.js:120:29)

Alacrity: а есть у них API как можно обратиться или SDK для Python? (reply to 170796)

User<6908616126>: Ребят, такой вопрос. Подключая кошелек к приложению через ton connect нужно ли подтверждать транзакции через кошелек? Или мы (разработчики) получаем полный доступ к кошельку?

Mirka: Надо подтверждать (reply to 170814)

User<6908616126>: Огонь, спасибо🤝 (reply to 170815)

🎐*<@Maxim: 🎃 Привет, почему tutorials длинный код для scripts/.ts? я же правильно понимаю, что он устарел и достаточно НИЧЕГО не нужно менять в стандартном для деплоя:  export async function run(provider: NetworkProvider) {     const counter = provider.open(Counter.createFromConfig({}, await compile('Counter')));     await counter.sendDeploy(provider.sender(), toNano('0.05'));     await provider.waitForDeploy(counter.address);     // run methods on `counter` } и просто выполнить npx blueprint run? где взять самые актуальные уроки?

Asher: https://www.youtube.com/@WikiMar (reply to 170819)

Человек: Привет всем,  по этому шаблону пытаюсь собрать ссылку на отправку жетона:  ton://transfer/<destination-address>?     [jetton=<jetton-master-address>&]     [amount=<elementary units>&]     [fee-amount=<nanocoins>&]     [forward-amount=<nanocoins>]   Как бы я ни менял fee-amount=n или forward-amount=n  tonkeeper показывает комиссию за транзакцию около 1,016584398 TON что разумеется немыслимо. При ручном заполнении такой же транзакции комиссия выглядит получше: 0,057550518 TON  что бы я ни ставил, ни 0, ни 1, ни какое другое число не спасает.  Что я делаю не так?

Человек: Например вот:  ton://transfer/UQBuLGD3h8wYQS-VwEm9JAByW-w879AukG0iHL8yMepwcNxk?jetton=EQC47093oX5Xhb0xuk2lCr2RhS8rj-vul61u4W2UH5ORmG_O&amount=100000000000&fee-amount=0&forward-amount=0  За эту транзакцию мне показывают комиссию больше 1 TON

&rey: Большая часть из 1 TON должна вернуться. (reply to 170822)

&rey: Возвращается?

Человек: Не пробовал. И это не решение. Я не хочу людей пугать комиссией больше тона

Человек: Именно в Tonkeeper. В Tonhub например комиссия показывается 0,05.....

Человек: Если у кого есть тонкипер+GRAM на счету, попробуйте отсканировать qr  какую комиссию показывает?

Человек: Вопрос в том, что при ручном заполнении такой транзакции всё считается правильно. Т.е. скорее всего там что то напутано с      [fee-amount=<nanocoins>&]     [forward-amount=<nanocoins>]

Denis: только в эмуляции или после отправки тоже? (reply to 170823)

Denis: возможны проблемы в эмуляции если жетонов на счету не достаточно

Человек: Дохожу до этапа "подтвердить и отправить" но кнопку не нажимаю.

Человек: Это имеется ввиду под "эмуляцией"?

Человек: Любопытно, почему сумма 1 TON если должно быть 100 GRAM (reply to 170834)

Asher: это я сам руками ввел, по умолчанию ничего нет (reply to 170837)

Человек: Это просто транза на отправку жетона

Человек: А не ТОН

Человек: Что то тут явно поломано

Asher: очень сомнительно, скорее всего какая-то путаница.  например, вы сказали "отсканировать qr..." я это сделал вот с таким результатом (reply to 170841)

Человек: Если отсканировать qr не Тонкипером, а простым сканером, который даст посмотреть на ссылку, то будет видно глазами, что ссылка такая же как я написал в посте выше. Там мой адрес кошелька, указан адрес жетона GRAM, количетво жетонов и два последних параметра связанных с комиссиями. Они равны нулям.

Человек: Это не может быть ни пустым полем, ни тонкоином.  Если я в чем то ошибаюсь, прошу меня поправить

Asher: мой тонкипер в этом случае выдает что адрес неверный (reply to 170843)

Человек: GRAM есть на балансе?

Человек: Если нет GRAM на балансе, то да, Tonkeeper говорит что "адрес получателя неверный"

Asher: ёёёё, нет, конечно. сорри

Человек: Это кстати тоже контринтуитивно и надо бы поправить. Но это не сюда разговор

Человек: Дай свой адрес, я скину токенов. Или скажи какие есть в наличии. Маржа или что там еще бывает

Mirka: А почему ты вообще пользуешься этой ссылкой, можно же через тон коннект?

Человек: Ну, можно, говорят, но там в тонконнект есть встроенные функции только для отправки TON. Отправку жетонов надо как то более хардкорно настраивать.

🎐*<@Maxim: 🫥 Hello! Почему когда запускаешь npx blueprint run  я сканирую своим кошельком (адрес: kQC...zSU) qr и подтверждаю деплой контракта (адрес: kQD...O5W), то в консоле высвечивается (Connected to wallet at address: EQC...48e) и Contract deployed at address (https://testnet.tonscan.org/address/EQD...FXc) - успешный деплой!  Но мой кошелек kQC...zSU != EQC...48e, а мой контракт kQD...O5W != EQD...FXc. Я выяснил что их raw-адреса одни и те же, но я не понимаю почему blueprint показывает разные адреса? Разве это так трудно вывести мой же адрес кошелька чтобы я не путался? В чем смысл? И если он есть, то тогда где мне увидеть полный список всех адресов, относящихся к raw-адресу?

Человек: Да и + хочется иметь возможность принять платёж без необходимости авторизации. (reply to 170852)

&rey: Где-то теряется testnet-флаг. (reply to 170854)

Человек: Два года вот тычусь то в одну то в другую степь и везде всё поломано и никто ничего не знает.  Это жаль прям.

Человек: У нас за столько времени нет ни одного на 100% работающего кошелька.

random_tnt: нужно подтверждать, иначе это бы было very insecure. (reply to 170814)

User<6908616126>: Да вот же😁 (reply to 170860)

User<6908616126>: Поэтому и возник вопрос😁 (reply to 170861)

Andrey: Здравствуйте, помогите понять: я уже смирился с тем что seqno не обновляется само сразу после отправки и то что апи принимает сообщение с неверным seqno но никак не могу понять почему вот этого хеша XdNL83tChCOFoIqUr45LTzEfgkJQolQB+e5ghqD/IVU= нет в тонскане  а через апи ЧТОТО выдает: https://toncenter.com/api/v2/getTransactions?address=UQCDGXzPirPQKLZPKO28cF6MV3jx-2YDBtPClyWGYXklng1q&limit=1&hash=XdNL83tChCOFoIqUr45LTzEfgkJQolQB%2Be5ghqD%2FIVU%3D&to_lt=0&archival=true  ну как такто??

Denis: апи в реальности не использует этот хэш. оно выдает все транзакции до переданого лт. а поскольку вы передаете 0 то возвращает просто последюю транзакцию (reply to 170864)

Andrey: а как мне проверить есть ли именно эта транзакция? (reply to 170865)

User: Цикл и проверка. Я лично отправляю комментарий и жду пока транзакция дойдет в течении 120 секунд периодически проверяя. (reply to 170866)

Степан: Привет, ребят. Tonapi не обновляет seqno кошелька мгновенно и ждет подтверждения блока. Я хочу отправлять несколько транзакций подряд и для этого получаю seqno, а далее инкрементирую его вручную. Tonapi на первом "искусственном" seqno выдает: pytonapi.exceptions.TONAPIInternalServerError: error code: 0 message: cannot apply external message to current state : External message was not accepted Cannot run message on account: inbound external message rejected by transaction <........> Во-первых, не до конца пойму, почему internal error. Во-вторых, не могу найти на тонвьювере эту транзу. Помогите)) Верен ли подход с инкрементацией? P.S. как будто бы предыдущий вопрос похожий.

Andrey: я всего лишь хотел таким образом проверить "реально ЛИ" сообщение принято сетью (reply to 170864)

Andrey: да да я про то же мне умные люди сказали что нельзя самому +1 делить к seqno (reply to 170868)

Denis: там есть метод для приема батча (reply to 170868)

Andrey: тоже очень хочу, но ждать по 6 сек перед каждой следующей отправкой - это бред (reply to 170868)

Степан: Не пойму, почему это порождает ошибку сервера тонапи. Почему, даже если к примеру транзакции путаются и в итоге падают, почему тонапи то падает? Он не должен отправить транзу и не заботиться об исходе? (reply to 170870)

Степан: Видимо надо копать в сторону отправки батча (reply to 170872)

Степан: И что все таки за транза в логах? Если её скан не показывает?)

Andrey: то есть вы предлагаете отправить 10 сообщений подряд (делая seqno+1) и потом искать среди транзакций этот batch ? или как? простите я не понял( (reply to 170876)

Denis: еще вариант использовать кошелек highload_v2

Andrey: там комиссии больше, но спасибо (reply to 170878)

Степан: Вроде предлагают именно массив боков в запрос вставлять, нет? (reply to 170877)

Andrey: да понятно что можно сразу 10 в одно сообщение но в обычном валлете лимит на колво в одной транзакции и все равно когда-то упрешься в то, что нужно 2 (или больше) подряд послать. как тогда быть? (reply to 170881)

Степан: А зачем в одной транзакции? Я так понял, ты делаешь батч и это 10 транзакции одновременно. Важно же что ты таймаут не делаешь, а не то, что одна транзакция. Не так? (reply to 170882)

Andrey: а как быть с seqno? смотрю на тонцентр нет такого (reply to 170884)

Степан: Ну, если я сделаю секно+0, +1, +2 и тд и отправлю это батчем. Разве не сработает на обычном кошельке?

Andrey: понятия не имею у меня иногда seqno+1 уже пропадает из блокчейна (reply to 170886)

Степан: Я просто не понял, что ты тут имел в виду под поиском батча среди транзакций. (reply to 170877)

Andrey: я думал внутри транзакции есть такое поле и типа надо искать сверять чтобы понять оно или нет (reply to 170888)

Степан: Это вроде поле запроса к апи (reply to 170889)

Andrey: да простите просмотрел. тогда я вообще ничего не понял (reply to 170890)

Степан: Только проблема с секно остается. И видимо заполнять этот батч секношками нужно именно циклом +1, +2... (reply to 170890)

­😇: С тонкипер прикол какой-то, было 20+ тестовых тон, писало что сервер лежит, теперь зашло а тон нет😂😂 Даже тестовые мутят

­😇: Так реально, зачем такое делать. Теперь в гивер запросы делать

MSA: Впервые такое слышу 😱 (reply to 170894)

MSA: Сапорт что говорит?

­😇: Да не буду за тестовые в саппорт писать, а транзы тотна другом кошельке остались, что на тонкипер были отправлены (reply to 170896)

User<6908616126>: Попробуй через https://wallet.ton.org/?testnet=true проверить. У меня такое было, в тонкипере 0 баланс, на wallet.ton правильный баланс. После подключения кошелька к либе js в тонкипере пришел увед что на одной мнемонической фразе 2 кошелька, предложил все мигрировать на один. После того как я согласился все стало отлично, и на валеттон и в тонкипер и через апи тонцентра все правильно и одинаково (reply to 170894)

User<6908616126>: С чем это было связано, хз даже, надеюсь в mainnet такого не будет)

­😇: Я уже в гивере себе заказал и пришли. Сам факт не приятен. (reply to 170899)

User<6908616126>: И в тонкипере показало новый баланс? (reply to 170902)

User<6908616126>: Хммм (reply to 170903)

User<6908616126>: Прикол в том что у меня тоже обнулились

­😇: Я sandbox теперь пользуюсь, в тонкипере до сих пор по нолям. Пусть забирают себе 20 тестовых тон😂😂 (reply to 170903)

User<6908616126>: А было 100+ тон😭

­😇: Ну у него в нике написано хочет наших денег😂😂 Прекращаем офтоп (reply to 170908)

User<6908616126>: У меня сейчас нет доступа к мнемонической фразе, завтра с утра проверю в валеттон

User<6908616126>: Фух. Они на тонкипере обнулились, а на валеттон все на месте

User<6908616126>: И через апи я свои 108 тон увидел, че с тонкипером, непонятно

Nick: ⁧ Plexus: Я всё понял

Nick: ⁧ Plexus: Спасибо за информацию

Nick: ⁧ Plexus: Ещё свяжемся короче

— 2024-03-04 —

cemorum: ребят, подскажите пожалуйста. Есть ли смарт контракт лутбоксов на тон или что то похожее? Заранее спасибо

cemorum: чтобы брать рандомную нфт из коллекции гетгемс например?

cemorum: у кого есть смарт контракт roolz gods and mortals

cemorum: отпишите

dg: Ребята, кто поможет разместить НФТ таким образом, чтобы минтили по запросу? Готов отблагодарить.

Jzuss ┌( ಠ_ಠ)┘: Кто-нибудь знает, как устроена функция random? В локальном тестировании она дает всегда одну и ту же серию. У rand та же проблема.

Jzuss ┌( ಠ_ಠ)┘: Имею ввиду, что при каждом запуске у меня эти значения

Andrey: в документации написано же, посмотрите в stdlib.fc (reply to 170945)

Daniil: потому-что сид не изменяете предварительно. рандом везде так работает - для одного и того же сида будет одна и та же последовательность 🙂  сделайте, например, randomize_lt() перед вызовом random() (reply to 170945)

Mark: Парни привет,  Кто знает как считаешь хеш транзакции (на основании каких данных и в какой момент) https://tonscan.org/tx/AEJUACvmh7aQntCWvWISCRINcDrBlvl13Jx2C4r9tmY= ?  (я понимаю как считается hash at in_msg но как вот этот общий не могу найти)

Denis: Это хэш ячейки в которой лежит транзакция (reply to 170951)

Mark: спасибо - правильно ли я понимаю что на момент отсылки тразакции я не могу получить этот Cell и следовательно его hash?  Уточняю - я при отсыслке транзакции получаю его boc в респонсе. Через этот boc я могу получить Cell и следовательно ее hash, но этот хэщ соответствует хешу в in_msg а не тот который в урле в тонсканере используется (reply to 170952)

Maksim: так и есть, хеш транзакции до ее появления в блоке точно узнать нельзя, можно лишь с какой-то вероятностью угадать (reply to 170953)

Denis: нельзя. я пробовал угадать (reply to 170955)

Denis: слишком не предсказуемо

Denis: можно через https://tonapi.io/v2/blockchain/messages/{msg_hash}/transaction  поискать.  там правда есть ньюанс что теоретически хэш тоже может поменяться. но очень мало вероятно (reply to 170953)

Maksim: вроде же только lt и now нельзя точно узнать до. тогда в момент небольшой нагрузки не так много вариантов (reply to 170957)

Mark: огонь спасибо огромное. Мне в целом этого достаточно. Задача была в том чтобы получать трекер трназакции с UI чтобы потом трекать на бекенде именно одну транзакцию а не весь адрес лисенить (reply to 170958)

Denis: тонвьювер кстати по этому хэшу умеет сразу транзакцию показывать

Mark: а как маска урла выглядит? (reply to 170962)

Denis: https://tonviewer.com/transaction/{msg_hash|tx_hash}

Mark: это вообще идельно. Спасибо еще раз оперативный ответ и помощь! (reply to 170964)

😡: Всем привет! Кто искал транзакцию по boc после оплаты через tonconnect? Скиньте пример кода, а то совсем что-то не получается найти. Вроде нормально перевожу, но testnet toncenter v3 indexer не находит 🤷‍♂️

Tim: Держи (reply to 170971)

😡: Дааа блин, я же не проверил и не посмотрел что ничего не находит, спасибо за бесполезный ответ (reply to 170972)

Ruslan: Привет. Можно вот так: 1) Отправить boc через /api/v2/sendBocReturnHash. 2) Этот хэш передать в /api/v3/transactionsByMessage (direction тоже нужен). (reply to 170971)

😡: В /api/v2/sendBocReturnHash отвечает 1) inMsg boc от MyTonWallet (desktop) LITE_SERVER_UNKNOWN: cannot apply external message to current state : failed to parse external message external message must begin with ext_in_msg_info$10 2) boc от MyTonWallet (ios) string argument should contain only ASCII characters. 3) boc от tonkeeper LITE_SERVER_UNKNOWN: cannot apply external message to current state : External message was not accepted\nCannot run message on account: inbound external message rejected by transaction (reply to 170975)

Denis: очевидно вы какой-то мусор посылаете

😡: Тот самый мусор, который отдаёт tonconnect после оплаты (reply to 170977)

Ruslan: Нужно больше деталей. Желательно конкретный пример и код, которым отправка происходит

Denis: ну от MTW скорее всего они передают например  в hex когда все ждут base64 или еще что-то не так возвращают в ответе тон коннекта

Denis: а кипер кажется вы пытаетесь отправить уже после того как сам кипер отправил и оно уже прошло и естественно сервер не принимает

Denis: хэш можно посчитать локально.

Denis: вот эта схема рабочая. я так делал и всё ок (reply to 170972)

😡: boc от mytonwallet №1: te6cckEBAgEAhwABnDpGOcrK6j/AZ/EvSK5uL6vpkEOvmwvsjN…dSZONq2mS4f+T4RdXwawg7msoAAAAAAAAAAAAAAAAAACMcLbI  boc от mytonwallet №2: te6cckEBAgEAhwABnEyisE+ehnm4c36Sif9999ODEZ0sbT7xAGLFBGbxnA0hxuevNoesbriTer4hkaXCmNjY53WYGGuYuxUxcNnRFAIpqaMXZeOj8QAAAAEAAwEAaGIAGDfxXdwkYDEYqQfN8eI94D5dSZONq2mS4f+T4RdXwawh3NZQAAAAAAAAAAAAAAAAAAClmHpA  boc от tonkeeper: te6cckECFwEAA6wAA+OIAK9lK2rg161OewmhOzENpVYE/Caw6HdQI/TRPI4lAOi8EYOa1MGhdJ7Foh0oKSRzUlq8TGirsHsGD0o2U8Kv2m5j7iymc2sp6D7BCZjesze6E00AxW4oUx6cOMGMZBzVJwFFNTRi/////+AAAAAAAHADAgEAaGIAGDfxXdwkYDEYqQfN8eI94D5dSZONq2mS4f+T4RdXwawh3NZQAAAAAAAAAAAAAAAAAAAAUQAAAAApqaMXW+Z8ldf8Wby+r3pSNX2FZc0OCE4fFnD8isrQ43Vu9NxAART/APSkE/S88sgLBAIBIAoFBPjygwjXGCDTH9Mf0x8C+CO78mTtRNDTH9Mf0//0BNFRQ7ryoVFRuvKiBfkBVBBk+RDyo/gAJKTIyx9SQMsfUjDL/1IQ9ADJ7VT4DwHTByHAAJ9sUZMg10qW0wfUAvsA6DDgIcAB4wAhwALjAAHAA5Ew4w0DpMjLHxLLH8v/CQgHBgAK9ADJ7VQAbIEBCNcY+gDTPzBSJIEBCPRZ8qeCEGRzdHJwdIAYyMsFywJQBc8WUAP6AhPLassfEss/yXP7AABwgQEI1xj6ANM/yFQgR4EBCPRR8qeCEG5vdGVwdIAYyMsFywJQBs8WUAT6AhTLahLLH8s/yXP7AAIAbtIH+gDU1CL5AAXIygcVy//J0Hd0gBjIywXLAiLPFlAF+gIUy2sSzMzJc/sAyEAUgQEI9FHypwICAUgUCwIBIA0MAFm9JCtvaiaECAoGuQ+gIYRw1AgIR6STfSmRDOaQPp/5g3gSgBt4EBSJhxWfMYQCASAPDgARuMl+1E0NcLH4AgFYExACASASEQAZrx32omhAEGuQ64WPwAAZrc52omhAIGuQ64X/wAA9sp37UTQgQFA1yH0BDACyMoHy//J0AGBAQj0Cm+hMYALm0AHQ0wMhcbCSXwTgItdJwSCSXwTgAtMfIYIQcGx1Z70ighBkc3RyvbCSXwXgA/pAMCD6RAHIygfL/8nQ7UTQgQFA1yH0BDBcgQEI9ApvoTGzkl8H4AXTP8glghBwbHVnupI4MOMNA4IQZHN0crqSXwbjDRYVAIpQBIEBCPRZMO1E0IEBQNcgyAHPFvQAye1UAXKwjiOCEGRzdHKDHrFwgBhQBcsFUAPPFiP6AhPLassfyz/JgED7AJJfA+IAeAH6APQEMPgnbyIwUAqhIb7y4FCCEHBsdWeDHrFwgBhQBMsFJs8WWPoCGfQAy2kXyx9SYMs/IMmAQPsABsQvMOk= (reply to 170979)

😡: Каким образом на разных кошельках разные ошибки, неужели в tonconnect нельзя было всё привести в один стандарт чтобы искать транзакцию?

EugenIO: Можно как-то найти адрес sale контракта NFT? https://getgems.io/collection/EQAOQdwdw8kGftJCSFgOErM1mBjYPe4DBPq8-AhF6vr9si5N/EQBRhDHHBbVDv2Thtyv-Q26yAnioRAyuIDIZ_5DDoESKLnSk  Ищу возможность взаимодействовать с контрактом напрямую, минуя интерфейс ГГ, но не знаю как получить значение адреса. Вижу только адрес самого NFT.

Denis: стандарт можно. но можно ли заставить всех его правильно поддержать это вопрос. обратитесь в MTW (reply to 170985)

😡: Тут скорее нужно обращаться в tonconnect (reply to 170987)

😡: Либо по всем кошелькам отдельно проходить

Denis: ну тонкипер вроде нормально возвращает

Denis: говорят тонхаб тоже

Denis: то что MTW возвращает что явно слишком короткое и не похожее на экстернал ну это вопрос к ним

Denis: они молодой динамически развивающийся кошелек.

Tim: Тут написать, что за бок, было бы не лишним

Denis: сделай пулреквест (reply to 170994)

Tim: А я не знаю...

Denis: external очевидно

Aleksei: Всем привет, а кто-нибудь может подсказать что-такое библиотеки и как с ними работать? А то из описания не очень понятно, а примеров нигде нет.  >using libraries in smart contracts https://docs.ton.org/develop/data-formats/exotic-cells#library-reference

Оскар: привет, появилась проблема что с баланса контракта уходят тоны контракт для стейкинга, тоны уходят только при анстейке, вот код Tact     receive(msg: OwnershipProof) {         let ctx: Context = context();         let sbt: Address = self.get_nft_address_by_index(msg.item_index);         require(ctx.sender == sbt, "SBT from another collection");         require(msg.revoked_at == 0, "SBT revoked");         require(msg.content != null, "No content provided");         let content: Slice = (msg.content!!).beginParse();         content.loadUint(64); // skip lock_time         let unlock_time: Int = content.loadUint(64); // unlock_time         require(now() >= unlock_time, "Lockup period is not over");         content.loadCoins(); // skip body         let redeem: Int = content.loadCoins(); // redeem         send(SendParameters{             to: sbt,             value: self.REVOKE_GAS,             mode: SendPayGasSeparately,             body: Revoke {                 query_id: msg.query_id             }.toCell()         });         let msg_value: Int = ctx.value - self.REVOKE_GAS - ctx.readForwardFee();         self.send_jettons(msg.query_id, redeem, msg.owner, self.jetton_wallet!!, msg_value, 0, "Unstake".asComment());         self.balance = self.balance - redeem;     }  send_jettons() просто функция которая отправляет токены, в предпоследнем аргументе 0 - mode отправки  вот транза https://testnet.tonviewer.com/transaction/08ff220eebfdf6a619083497abd784b8ac56ce2da0331deab2b278c7cfba4a03 месседж отправлялся с 0.16 тон, вроде если посмотреть, то всё нормально, но на контракте было изначально 0.094 тон, а стало 0.071 я может не понимаю как нужно отправлять два+ сообщения последовательно и из-за чего-то теряю тоны из контракта

Алексей: а что с офф докой на https://docs.ton.tg/?

MaxFee: https://docs.ton.org/ (reply to 171024)

Алексей: спс. Бляха, что с проспекта урлы ведут в никуда никого не смущает? )

Daria: С проспекта? (reply to 171026)

Алексей: На https://ton.tg/en куча разделов ведет на https://docs.ton.tg. Например с шапки в разделе TON Concept или раздел Documentation в футере

Vladimir: А не смущает, что есть официальный домен ton.org? (reply to 171028)

Алексей: совершенно нет, можно сколько угодно плодить доменов, но если на главных разделах будут битые ссылки это будет как минимум вызывать недоумение.

Андрей: Пользуйтесь официальной и не недоумевайте (reply to 171030)

Denis: Я давеча купил ton.gay так там все ссылки битые. Сколько можно это терпеть? Енот, наведи порядок! Паша, верни стену!

Mark: Топ (reply to 171032)

— 2024-03-05 —

User<6804834813>: 👋 Привет, сообщество! Мы — новая команда энтузиастов блокчейн-технологий, и сегодня мы рады представить вам наши услуги в области разработки инструментов для экосистемы TON!  🎯 Наши услуги включают в себя: - Разработка смарт-контрактов, которые станут надежным фундаментом для ваших блокчейн-проектов. - Создание масштабируемых и безопасных web-приложений, предназначенных для взаимодействия с блокчейн-сетью TON. - Проектирование современных сайтов, которые станут визитной карточкой вашего бизнеса в интернете. - Разработка мобильных приложений, позволяющих пользователям оставаться на связи с вашим сервисом где угодно и когда угодно.  🌟 Мы только начинаем свой путь в этой увлекательной и перспективной индустрии, поэтому мы ищем первых клиентов и готовы предложить вам не просто конкурентоспособные цены, но и 💥грандиозные скидки💥 в обмен на ваш отзыв, который станет частью нашего портфолио!  ✏️ Хотите узнать больше о наших услугах или оформить заказ? Напишите нам прямо сейчас, и мы обсудим, как мы можем помочь вашему проекту выйти на новый уровень!

Jzuss ┌( ಠ_ಠ)┘: Какие в тоне остаются возможности генерации нормальных (некомпроментируемых) случайных чисел? Отправлять по рандомному биту на себя, собирая число? Тогда вроде нельзя гарантировать в какой блок попадет сообщение, и дальше одного бита будет практически невозможно угадать?  Может есть верифицируемые сторонние сервисы?

MGO: Привет. Для TON Devs, я грамм-майнер, получающий много отказов, и заметил кое-что странное в том, что один из грамм-пулов делает... Они подают много решений на недействительные идентификаторы блоков в одно и то же время... большинство из них исчезают, в то время как все мои заявки отклоняются... Они делают что-то теневое в сети Тон, или, если нет, кто-нибудь может объяснить, что здесь происходит? Как механики работают в тонной сети, чтобы сделать то же самое. У меня есть несколько фотографий с этой проблемы из эксплорера. ID блока :(0,0,0) и 3 решения вилки.

Vladimir: Ребят, подскажите пожалуйста, я iOS-разработчик, заинтересовался TON'ом. Может знаете какие-то вакансии по нативной разработке или команды в которых пишут на Swift? Посмотрел опенсорсные кошельки — сплошь кроссплатформа на реакт нейтиве

Vladimir: Ваши "😁" означают что тут нативной разработки нет или что-то иное? Можете поподробнее раскрыть если не сложно?)) (reply to 171072)

User<6890151979>: Не работать. После выполнения  90% части проекта отказался платить (reply to 171067)

User<6890151979>: В общем, люди все поняли, заказчик очередной халявы захотел.

User<6890151979>: Так у тебя и запрос на 20 мин 😂😂😂 (reply to 171082)

User<6890151979>: Когда есть готовое решение в чем проблема? (reply to 171083)

User<6890151979>: Все, что тут строчить, пиши в ЛС если хоч что-то.

User<6890151979>: . (reply to 171086)

User<6890151979>: /report (reply to 171087)

Chris: я переучился из натива в жс, потому что в крипте почти нет нативной разработки (reply to 171074)

User<6890151979>: Прошел я проверку, где оплата то 😂😂😂 (reply to 171091)

Vladimir: Спасибо, стало понятнее ) (reply to 171098)

Chris: ну конкретно в тоне есть нативный кошелек, который ещё от команды телеграма, репа тонкипера для работы с тоном на свифте и SwiftyTON ещё был с оберткой на свифте вокруг жса для работы с тоном (reply to 171108)

Dmitry: Кому криптограф в проект. Это я. Пишите.

Dmitry: Протоколы там всякие. Зк, кольцевые подписи, транзакции приватные...

Vladimir: SwiftyTON даже заархивирован тонкипер тоже уже смотрел, интерфейс там на реакт нейтиве, но никакой работы со внешними разработчиками там нет, все таски в какой-то своей внутренней системе, как к ним примкнуть и надо ли им это — не понятно. (reply to 171110)

Alacrity: Есть ли у getgems.io какое-нибудь API, или можно ли узнать ссылку на коллекцию на getgems.io через TonAPI?

User<6564971509>: из NFT вытащи адрес коллекции и ссылкой https://getgems.io/collection/{COLLECTION_ADDRESS} (reply to 171118)

User<6564971509>: ну если нфт есть

Roma: Всем привет. Подскажите, что это за транзакция? Непойми входящая или исходящая )) ошибок нет, даже не помню, что я такое делал месяц назад https://tonviewer.com/transaction/f268a6824c960947c58042863fd86db3ceb1e4945143cfb441cd5b19f270bc3d

VIKTOR: Тонвьювер потерял индексацию. Тоже самое сейчас происходит в тестовой сети. (reply to 171121)

random_tnt: бывает (reply to 171122)

VIKTOR: Смотри в других эксплоэрах (reply to 171121)

Roma: Она с in_msg, где source пустой, destination ведет на самого себя, а out_msgs отсутствуют. toncenter так отдает из api, не все же они поломались (reply to 171121)

random_tnt: или просто у чела недостаточно денег для gas fee (reply to 171122)

Roma: А почему она вообще не отклонилась и почему в ней нет инфы о том, сколько тонов хотели перевести? (reply to 171126)

random_tnt: та же транзакция вроде

Андрей: Выглядит что обычная external транзакция, которая ничего не вызвала  https://tonscan.org/tx/8mimgkyWCUfFgEKGP9hts86x5JRRQ8-0Qc1bGfJwvD0= (reply to 171121)

Андрей: На ton.cx есть описание транзакции External data submitted: https://ton.cx/tx/44180101000001:8mimgkyWCUfFgEKGP9hts86x5JRRQ8+0Qc1bGfJwvD0=:EQA-6spaS7r8uz-S8Yr41aRUXGFB2EcEPhnp8sTy-ZzLTE5v (reply to 171121)

User<6908616126>: Ребят, я чето либо туплю, либо это реально проблема. Как получить все нфт, которые в собственности у человека(тоесть мне нужен NFTItem со значением ownerAddress='адрес кошелька')? Получается что мне надо реализовать функционал как на тонскане, который выдает все нфт кошелька. Как то завис я со вчерашнего дня😁. Посмотрев исходники tonscan, я пришел к выводу что он берет эти данные с гетоемс, однако там нет эндпоинта по которому запрос идет, поэтому я вообще хз как это реализовать

User<6908616126>: Вот как то так должно получиться

User<6908616126>: Я решил эту проблему. (reply to 171134)

User<2123712526>: Всем привет! На ТОНе есть кошельки где можно сразу несколько адресов создавать?

User<6908616126>: Тебя интересует клиент на котором можно держать несколько кошельков?

Vladimir: Смотрел исходники, в тонкипере 4.0 появится такая возможность. Только тсс 🤫 (reply to 171147)

Isaac: Но можно не ждать и скачать https://mytonwallet.io (reply to 171147)

Daniil: Кто в курсе, есть ли аналог Chainlink VRF на TON?

Ural: в Tonkeeper X уже есть) (reply to 171152)

User<1339662527>: Всем привет. Подскажите, кто разбирается. Хочу сделать игру на telegram app, какой стэк технологий обычно применяют? Если будут гайды или что то типа того, то отправьте тоже, заранее спасибо😁

User<6908616126>: Тг миниапп это по факту сайт. Обычно юзают реактивные либы js(angular, vue, react). Саму логику бота и бэкэнд для сайта на чем удобно. Как вариант: бот aiogram на питоне и telegraph на js. Бэкэнд flask/Django на пайтоне и express/nest на js. Джанго для огромных приложений, и если не хочется все с нуля делать. Nest не юзал, но говорят что он похож на джангу принципами, express и flask очень похожи между собой, и позволяют реализлвывать приложения любой сложности с 0

User<6908616126>: Как то так) (reply to 171159)

User<1339662527>: Спасибо! А то сколько смотрел никто нормально и не объяснил… кто то про питон говорил, кто то про фреймворки JS, кто то вообще php вспомнил (reply to 171159)

User<6908616126>: Php... это больно😁 для такого проекта то (reply to 171161)

User<1339662527>: Да… (reply to 171163)

Сергей: Подскажиет пожалуйста.  Есть бот, канал - есть домен тон ДНС. Могу же я привязать домен к чему-то одному или только к нику тг?    К примеру есть ДНС домен zapchastitraktor.ton    могу ли бота @zapchastirustrak  повесить на ДНС? Чтобы его в поиске находили имено по домену.  Так же можно ли несколько ботов повесть на 1 домен. Для примера будет для Казахстана, Белоруссии, РФ    Заранее спасибо 🙏

User<6908616126>: Этот адрес только для кошелька. К тг он не имеет отношения (reply to 171165)

User<6908616126>: Для тг покупаются username на площадке fragment

Сергей: Если правильно понял.  Покупаю ник @traktorrus  и его могу при взять к бота или только к группе? (reply to 171167)

User<1339662527>: По поводу юзеров на нескольких ботов - так не получится. Можно повесить до 10 доменов на одного бота ( и то первый домен будет xxxBot), а затем NFT уже прикрепляются к боту (reply to 171165)

User<6908616126>: К боту нельзя вроде. Группа, канал и личный акк можно

abc <: К боту можете, если заплатите дополнительно телеге 12к долларов  * По нынешнему курсу 13.5к * Не нашёл где это в FAQ Fragment'а, но можно найти в tdlib: https://t.me/tdlibchat/70714 (reply to 171168)

User<1339662527>: К боту можно, @betting к примеру (reply to 171170)

User<1339662527>: Только за 12к?!? (reply to 171171)

User<6908616126>: Юзернейм* Домен нельзя, он не относится к тг никак. Домен это только кошелек (reply to 171169)

Сергей: О как странно (reply to 171171)

User<1339662527>: Не знал про это

User<1339662527>: Точно, перепутал слова (reply to 171174)

User<6908616126>: Прикольно, не знал (reply to 171172)

Сергей: Вот да. Хороший пример. Где мне купить ник, домен чтобы так же сделать)    Извините может быть глупые вопросы) пока изучаю учусь) (reply to 171172)

User<1339662527>: Fragment (reply to 171179)

User<1339662527>: Но там цена от 100 тон

User<1339662527>: Даже если захотите конвертировать в НФТ, то нужно будет заплатить 5 процентов от этой суммы площадке(при условии что покупаете у себя)

User<1339662527>: Если вас перебьют, то вам 95 процентов от цены упадет на кошелек)

Сергей: Понял.  Просто в ботфантер  ест но вот всУие приписки типа бот, ботс не оч нравятся из за этого появилась идея красиво сделатт

Сергей: Спасибо. За торги знаю) (reply to 171183)

Сергей: Всём спасибо🙏 Пойду пробовать и учится настраивать)))

abc <: Ты точно прочитал что выше я написал?) 👀 (reply to 171184)

Vladimir: /report (reply to 171189)

Сергей: Да)  Брать на фрагменте. Если надо будет нфт то конвертировать то за бабки) (reply to 171188)

Эд: Всем привет! Подскажите, что я мог пропустить, подключаю тон коннект на сайте, опубликовал манифест, а оно ругается, что манифест недоступен

User<6908616126>: Перейди по урлу манифеста, если открывается, значит все ок. Если нет, значит задеплоил неправильно (reply to 171194)

Эд: Открывается, но при попытки авторизоваться - все равно ошибка (reply to 171195)

User<6908616126>: Хммм... Покажи код инициализации кнопочки

Эд: const tonConnect = new TonConnectUI({   manifestUrl: 'http://<мой домен>/tonconnect-manifest.json' })  async function connectWallet() {   const connectedWallet = await tonConnect.openModal() } (reply to 171197)

User<6908616126>: Хмм (reply to 171199)

Эд: Пока грешу, что днс не везде обновился (домен завел вчера вечером) может в этом проблема быть? (reply to 171197)

User<6908616126>: https://raw.githubusercontent.com/ndatg/tonconnect-manifest-example/main/tonconnect-manifest.json  Замени ра этот манифест. Если ошибка уйдет, значит ошибка у тебя (reply to 171201)

User<6908616126>: Если он уже открывается значит все обновилось (reply to 171201)

Эд: Завелось, буду копать тогда Спасибо  Такой момент еще, урл играет роль в манифесте? Пока приложение не опубликовано, и урл туда прям локальный забил (reply to 171202)

User<6908616126>: Локальный не работает, нм то он и локальный. Нужен глобальный (reply to 171205)

Эд: В вашем манифесте тоже локалхост указан, значит проблема не в этом все ж Будем разбираться (reply to 171207)

User<6908616126>: Там не важно, это просто имя. Главное что бы урл до маниыеста был в зоне доступа из любой точки интернета (reply to 171208)

User<6908616126>: Если хочешь, в лс кинь урл до манифеста, мб что подскажу

Удалённый аккаунт: Парни, а что вы тут разрабатываете?

Удалённый аккаунт: Я пока понял, что можно создать свой жетон на блокчейне тон. А можно ли этот жетон вывести через ido в пользование?

random_tnt: можно (reply to 171213)

Камиль: Ребят нужна помощь с разработкой мини апс

Камиль: Кто может помочь напишите в личку

Камиль: Подскажите такой момент Хочу собрать апку по типу ноткоина, но без лишнего функционала, просто для промоакции, внутри своего коллектива, поиграть за внутрекорпоративный приз Как мне лучше действовать подскажите) Сроки просто очень короткие, не более 2-х недель

#: Где можно посмотреть видео по созданию веб-приложений?

User<6908616126>: Если имеется в виду изучение фреймворков для создания SPA(single page application), так же известными как реактивные, то ютуб с запросом урока конкретно по нужной бтблиотеке. К слову, у каждой либы(а их, к слову, три: React, Vue и Angular) довольно неплохая документация и комьюнити с ответами на все вопросы, которые возникают в процессе обучения(с комьюнити меньше всего повезло vue, ведь фреймворк очень молодой и люди просто еще не создали такое огромное комьюнити как ангуляр и реакт). Если вам сложно, бери Vue, очень простой и крутой фреймворк. К тому же самый молодой, производительный и легкий(в плане веса страниц и требуемых ресурсов для хостинга и разработки). Если брать дедовский вариант, то это ангуляр и реакт. Лично мне из всей тройки зашли ангуляр и вью, реакт не понравился изза большого кол-ва кода, все перемешанно и непонятно, таких проблем у других двух нет. Для себя остановился на ангуляре как на проверенном временем (reply to 171222)

Vladimir: Почему в англоязычных чат спрашиваешь про TonConnect,  тут про веб-приложения По TonConnect вот тут можешь глянуть https://www.youtube.com/playlist?list=PLyDBPwv9EPsCJ226xS5_dKmXXxWx1CKz_ (reply to 171222)

User<6908616126>: По тон коннект есть отличнейшая официальная документация, рекомендую прочитать ее, и все вопросы отпадут сами собой (reply to 171224)

User<6908616126>: Там ничего знать не надо, все описано (reply to 171225)

Vladimir: это конечно да, но человек про видео спрашивает ) (reply to 171226)

User<6908616126>: Ну тем не менее важно направлять на путь истинный)) а истинный путь эта документация на официальном сайте) (reply to 171228)

#: у меня есть код на js с тонконнект, кошелек подключается, а как получать его, чтобы использовать для вывода на сайте?

User<6908616126>: toUserFriendlyAddress(TonConnectUI.account.address)

User<6908616126>: выведет  отформатированый адрес (reply to 171240)

#: спасибо, сейчас попробую (reply to 171241)

User<6908616126>: опять же, прототипы функций, классов и методов тебе в помощь(все в офиц доке есть)

#: можно каким-то образом через js получать автоматически данные пользователя из телеграм, например имя? (reply to 171244)

#: при запуске веб приложения

User<6908616126>: да, https://core.telegram.org/bots/webapps  если быть точнее, то тебе надо сделать  <script src="https://telegram.org/js/telegram-web-app.js"></script> в html и воспользовавшись методами, которые представлены тут достать данные, которые тебя интересуют. дока довольно подробная, на ютубе 100500 видосов на эту тему (reply to 171245)

#: спасибо (reply to 171247)

Удалённый аккаунт: А есть какая-то разница где жетон создавать?  На minter.ton ? На d-gen?

User<7103587547>: Есть у кого-то пример как через сид фразу и враппер контракта вызывать методы этого контракта?

Даша: Добрый вечер! Подскажите, а как к токенам прописывать функции? Например, чтобы при переводе токенов была комиссия в этих же токенах?

Даша: Или например, вознаграждения для держателей токена (reply to 171256)

&rey: Вы же в курсе, что при этом перевод станет вдвое дороже по комиссии вычислений, в тонах? (reply to 171256)

Даша: Да, это не страшно) (reply to 171258)

&rey: Разберите код и в функции вроде send_tokens сделайте, чтобы часть токенов сжигалась.

&rey: То есть, посылалось уведомление о сжигании на мастер-контракт.

Даша: Спасибо за ответ, но вопросов стало только больше) где это можно прописать? (reply to 171260)

Даша: Я так понимаю не на minter ton org) (reply to 171262)

#: можно ли минтить sbt nft на python ?

Mirka: Если через питон вызовешь метод минта, то да (reply to 171266)

User: https://github.com/tonfactory/tonsdk/blob/master/examples/wallets/wallet.py - дерните wallet переменную, в ней и будет адрес (reply to 171268)

#: у меня есть только минт обычной нфт, а про sbt нигде ничего не написано (reply to 171267)

Mirka: Минт соулбаунда не должен отличаться от минта нфт (reply to 171270)

Дмитрий: У меня вопрос возможно не совсем по теме но надеюсь на ответ  Можно ли дарить имена/анонимные номера с фрагмента?

Mirka: Это нфт, да (reply to 171273)

Дмитрий: Спасибо а как найти его смарт контракт? (reply to 171274)

Mirka: Смарт контракт нфт? На гг например посмотри (reply to 171275)

Дмитрий: Не получается найти (reply to 171277)

Mirka: Внизу (reply to 171278)

Vladimir: А кто-нибудь TonClient использовал для мониторинга входящих "депозитов"? Можно где-то пример посмотреть?

Vladimir: Почему он на вход обязательно hash ждёт вместе с lt?

Дмитрий: Я же правильно понимаю чтобы он заминтился надо сделать первоначальную ставку? (reply to 171279)

Tim: Ну вот так работает лс. Используйте тонцентр в3 или Тонапи, они не требуют (reply to 171281)

Mirka: Ты собираешься минтить уже существующее нфт? (reply to 171282)

Дмитрий: Если он выставлен на аукцион но нет первоначальной ставки (reply to 171284)

Vladimir: я задолбался, хочется уже доделать. Подскажи пожалуйста если знаешь, он хеш в виде буффера отдаёт, а сам его на вход в виде строки хочет. Как с этим поступать?) (reply to 171283)

Дмитрий: Я разобрался со своей проблемой спасибо большое (reply to 171284)

Tim: toString (base64) наверное (reply to 171286)

Vladimir: пробовал, там какая-то фигня абсолютная выходит (reply to 171289)

User<6908616126>: С хэшем даже я не разобрался, как разберешься, маякни пж) (reply to 171290)

Minter: Здравствуйте, подскажите пожалуйста как в toNano() ставить если децимал токена равен 3

Tim: Никак. Ищите formatUnits (reply to 171292)

User<6898588101>: Does anyone knows why my ton wallet is not supported in trust wallet, i mean i cant import it in trust wallet using mnemonic or private key and i get invalid key error  from tonsdk.contract.wallet import WalletVersionEnum, Wallets  while True:     mnemonic, publickey, privatekey, wallet = Wallets.create(WalletVersionEnum.v4r2, 0)     address = wallet.address.to_string(True, True, False)     #     if "-" in address or "_" in address:         continue     else:         break  print(f"Mnemonic: {' '.join(mnemonic)}") print(f"Address: {address}")

Даша: Доброй ночи, подскажите, а можно ли создать токен на TON с первоначальной эмиссией, но чтобы потом была возможность чеканить больше?

Daniil: minter.ton.org (reply to 171299)

$PXL: доброй ночи, скажите пожалуйста мб есть где уроки именно по тоновской разработке в ютубе?

$PXL: прям шоб качественные и понятные были

— 2024-03-06 —

Dmitry: Официальны канал-то не устраивает? (reply to 171302)

Dmitry: https://www.youtube.com/@WikiMar

Ihor: Добрый день, видел обсуждения по IHR и что его не используют но наткнулся недавно на ненулевой. При подсчёте общего fee отправителя, IHR просто добавить к сумме всех остальных fee?

Василий: Возможно это ошибка индексации? Скиньте ссылку на транзакцию (reply to 171314)

Ihor: https://tonscan.org/tx/T00_V5QhdfvreazPtjcnEFO-aw8RCLVaH3Kq1Uk7YYw= (reply to 171318)

Василий: Похоже что кто-то криво сформировал клетку сообщения просто, и value попало в ihr_fee. Возможно я что-то упускаю (reply to 171319)

cemorum: @DEVS_GRAM ответь в лс я жду уже 6ой час

Ihor: Спасибо за ответ, согласен, похоже на value не под тем ключом, а в теории к нему нужно относиться как к обычному фии и вычитать из баланса отправителя? (reply to 171321)

Andrey: Ихр входящий суммируется с value и будет учтен, когда читаете со стека в смарте (reply to 171323)

Ihor: значит ihr_fee идёт получателю или я не так понял (reply to 171325)

Andrey: Да (reply to 171326)

Ihor: понял, спасибо, может есть где-то в доке описание кому идёт этот фии? (reply to 171327)

Andrey: Не понял. Вас смущает фии в названии? Это абстракция. Так как ихр не работает ихр фи просто суммируется к отправляемым тонам (reply to 171328)

Ihor: да, именно название и смущало, спасибо (reply to 171330)

Ihor: И ещё один вопрос, был ли penetration testing для TON? Если да, то может где-то можно найти доказательство проведения

­: Сорян что не по теме (если нарушил  - удалите) Тон надо продвигать в массы, чтобы больше заработать сделать жизнь людей более децентрализованной, создаются биржи, сервисы для хранения, переводов и тд  Создаются игровые проекты чтобы заманивать народ из тг.  А что касается лотерей? Хороший продукт на Тон во многом превосходит гос аналоги своей независимостью, открытым кодом, отсутствием налогов, скоростью выплат.  Так почему никто не рассматривает такой способ продвижения Тона?  Много источников, кому я написал либо отказали либо не ответили, хотя и сами в плюсе окажутся, популяризируют Тон и все вытекающие. Или я не тем занимаюсь? 🙃

Владимир: this (reply to 171335)

Ruslan: Всем привет, прохожу первый гайд по FunC, при компиляции базового counter.fc почему то такая то ошибка вылезает   failed to asynchronously prepare wasm: CompileError: WebAssembly.instantiate(): Compiling function #364 failed: Invalid opcode 0xfe (enable with --experimental-wasm-threads) @+103115  говорит что опкод неверный, хотя таких опкодов нет в смарте  Как ресерч показал проблема в среде компиляции что то не так с vs code, с node js все в порядке

User<6908616126>: просто перевод говорит это, попробуйте компилировать с этим флагом. я не специялист в этом языке, так что строго не судить))) и еще, vsCode это текстовый редактор а не среда разработки, так что компилировать надо только командами в терминале, иначе начинаются ошибки(так показал опыт работы с разными ЯП на протяжении уже больше чем года) (reply to 171339)

Ruslan: Так да в терминале vs code команду пишу и вот это выкидывать

Ruslan: А как флаг на web assembly подключить

User<6908616126>: скорее всего ошибка в несоответствии синхронности-асинхронности, флаг(судя по названию) включает эксперементальную функцию компиляции с помощью многопоточности (reply to 171340)

User<6908616126>: просто в команду прописывай

User<6908616126>: тогда vsCode не причем (reply to 171341)

Ruslan: В команде написать что то вроде  ‘’’ npx func-js contracts/counter.fc --boc build/counter.cell —флаг  ‘’’

User<6908616126>: Да

Ruslan: вот мой код  #include "imports/stdlib.fc"; ;;inline = public  ;; if a function modifies a state or throws an exception it should be impure   ;;storage section read and write methods  (int) load_data() inline {                 ;; read function declaration - returns int as result     var ds = get_data().begin_parse();       ;; load the storage cell and start parsing as a slice     return (ds~load_uint(64));               ;; read a 64 bit unsigned int from the slice and return it }  () save_data(int counter) impure inline {  ;; write function declaration - takes an int as arg     set_data(begin_cell()                    ;; store the storage cell and create it with a builder     .store_uint(counter, 64)               ;; write a 64 bit unsigned int to the builder     .end_cell());                          ;; convert the builder to a cell } ;; message handling section  () recv_internal(int msg_value, cell in_msg, slice in_msg_body) impure {  ;; well known function signature     if (in_msg_body.slice_empty?()) {         ;; check if incoming message is empty (with no body)         return ();                              ;; return successfully and accept an empty message ???     }     int op = in_msg_body~load_uint(32);       ;; parse the operation type encoded in the beginning of msg body     var (counter) = load_data();              ;; call our read utility function to load values from storage     if (op == 1) {                            ;; handle op #1 = increment         save_data(counter + 1);                 ;; call our write utility function to persist values to storage     } } ;;getter section  int counter() method_id {        ;; getter declaration - returns int as result     var (counter) = load_data();   ;; call our read utility function to load value     return counter; }

User<6908616126>: Тут не помогу, я язык еще не знаю

Ruslan: Каких то ошибок тут не должно быть

Ruslan: Это из docs😅

User<6908616126>: Вот команда, попробуй ее (reply to 171349)

User<6908616126>: Я ее изменил, пробуй сейчас (reply to 171354)

User<6908616126>: npx func-js contracts/counter.fc --boc build/counter.cell --experimental-wasm-threads

Ruslan: Попробую, спасибо

#: а что изменить нужно ? (reply to 171272)

Timofey: Здравствуйте, можете подсказать как сжечь лп токены тегро чтоб забрать токены и тоны из ликвидности

Mirka: Зачем что-то менять, просто вызови метод минта (reply to 171360)

&rey: Есть опыт работы с @ton/ton или чем-то вроде того? (reply to 171361)

Timofey: Знаете про дех биржу тегро ? (reply to 171363)

Timofey: Вот они заскамились ещё давно

Timofey: А в их пуле лежат мои токены

&rey: Так речь про то, насколько подробно объяснять, как сжечь лп.

Timofey: Секунду. (reply to 171368)

Tim: А там осталось что жечь то? Если да, ищите тех кто уже жег, это самый простой способ

Timofey: https://tonviewer.com/transaction/8481eec155af801216fc8de13dea26fc691efe52e6c5170a4d20bec7b76d6a4c (reply to 171368)

Афоня: Привет ребят, у меня такая ситуация, был у меня менеджер, он же кодер, я ему полностью доверял(взрослый человек, жена, дети, он учитель начальных классов), начал крысить, рекламу продать от канала и людей в блок кидать, в этот момент он мне код делал на токен, смарт контракт писал, вот когда все это пошло, начал он говорить за деньги, но мне ничего не объяснил, что делал и как, отдал админ права в организации на GitHub и всё, а где что как не могу пока разобраться

Timofey: Вот, транзакция где сжигаются лп токены и возвращается токены из пула.

Timofey: Они сжигали когда интерфейс тегро работал. (reply to 171370)

Афоня: Доступ до смарт контракта как посмотреть?

&rey: Ну, доступ у всех одинаковый — посылать на него сообщения. Больше ничего в тоне не придумали.  Контракт в сети может давать какие-то привилегии конкретному списку адресов, и это надо смотреть в его данных. (reply to 171376)

Mirka: А контракт вообще развернут или просто на гитхабе лежит? (reply to 171376)

Афоня: https://tonscan.org/ru/jetton/EQAR-7KTkPZ-TJhYRT5zkG-zsj_T68ThbEh83KLN5vc2TeXZ#holders

Mirka: Смотри, овнером является адрес сжигания, так что как минимум тут все хорошо. Можно ещё посмотреть код, может он чего-то там написал плохого (reply to 171379)

VIKTOR: Судя по верификации кода и данным контракта админа там нет.  Так же есть несколько владельцев этого токена (reply to 171379)

VIKTOR: https://tonviewer.com/EQAR-7KTkPZ-TJhYRT5zkG-zsj_T68ThbEh83KLN5vc2TeXZ?section=code Код верифицирован как стандартный контракт Jettons discoverable smart contract С первого взгляда там ничего плохого нет. (reply to 171380)

Афоня: Вот он мне сказал что на год заплатил 52 тона за смарт контракт, где мне его дальше оплачивать через год? Как доступ к этому получить?

Mirka: Насколько я знаю, 52 тона должно хватить лет на 30 (reply to 171383)

&rey: По идее, никакого оплачивания через год там не должно быть. (reply to 171383)

Афоня: То есть получается он меня заскамил на 52тона ?)

VIKTOR: там нет никаких 52 ТОN. Контракт и так будет работать если им будут пользоваться (reply to 171383)

VIKTOR: мы этого не знаем (reply to 171386)

Афоня: Его слова: для того что бы мы смогли запустить свой смарт контракт, его нужно оплатить, на год это примерно 50 тон, нам дадут доступ до серверов тон, куда можно залить код чтобы он работал

Mirka: А сколько он работал над этим? (reply to 171389)

Афоня: 2 недели

Афоня: И за это взял ещё 150 тон

Афоня: За токен

Афоня: И 80 за Стейкинг нфт

Алекс: Очень дешево как по мне, на солане так уж точно не сделаешь

Алекс: Круто

VIKTOR: может тоны в NFT

Афоня: Ну это ж не солана

Афоня: Мы якобы заплатили 50 тон чтобы нам тон открыл сервера чтоб залить туда наш токен и он работал (reply to 171397)

Афоня: Админку он сделал на нулевой Кош говорит и всё

Tim: https://minter.ton.org/ Ну раз уже заплатили, вот, держите доступ (reply to 171399)

Афоня: Он помимо этого у меня ещё ставку получал Н$ в сутки (reply to 171395)

cemorum: @DEVS_GRAM опять пропал на 7 часов? ответь!

cemorum: наишите ему чтоб он уведомления включил!

abc <: Какой-то сталкинг (reply to 171406)

cemorum: да ладно тебе, просто мне на нервы давит что он не отвечает (reply to 171408)

abc <: А зачем это в чате по Тону? 👀

Vladimir: + (reply to 171408)

Ihor: Есть способ использовать tryLocateSourceTrx на workchain? По дефолту через toncenter оно идёт на masterchain и следовательно выдаёт 503.

Ruslan: Ошибка была в том что node.js было 2 версии использовалась старая (reply to 171351)

Баходир Зунунханов | Дастурчи: I am a fragment site user. I just paid today to buy an NFT username, but the auction didn't start and my money was withdrawn!  When will this issue be resolved?  Will the auction begin? Or will my money be refunded?

Баходир Зунунханов | Дастурчи: @sheriksiz This is the username on the sale I want to buy from

#: А по какому принципу оно должно минтить тогда sbt ? (reply to 171362)

Vladimir: Тут РУ чат, вот на русском и пиши. (reply to 171423)

Афоня: А что за ключи?

Афоня: Обычно, владелец тот, у кого есть приватные ключи от контракта. Без приватных ключей сменить владельца нельзя, в том числе и мы не можем этого сделать. К сожалению, это все чем мы можем помочь. (forwarded from TON Help)

&rey: У кошелька такие есть. У большинства других контрактов нет. (reply to 171429)

Афоня: Понял

&rey: Отключить кошель от сети ещё можно, чтобы остановить временно спам) (reply to 171436)

&rey: Ну, так там же и жетоны снимаются, наверно? (reply to 171438)

&rey: Я по приколу пытался подключить кошелёк TON Foundation. Не получилось узнать, куда же они хотят всё отправить.

cemorum: @DEVS_GRAM скамер. Внес ему предоплату 10 тон на создание смарт контракта. По итогу игнорит

cemorum: будет менять имена, сообщу новые никнеймы

cemorum: а так мне нужен разработчик смарт контрактов, остальное в лс

cemorum: что такое пермалинк

cemorum: и как его сделать

User<6908616126>: А видеои его все кто был здесь (reply to 171448)

User<6908616126>: То что скинули в сообщении выше, это оно и есть (reply to 171450)

cemorum: тоны жалко, но ему все аукнется

cemorum: причем мог бы доделать смарт контракт и получить остальные деньги

cemorum: не понимаю зачем так делать

User<6908616126>: Блин, точно... (reply to 171453)

cemorum: нужен разработчик смарт контрактов для нфт. Пишите в лс

Ruslan: Все привет, а кто то знает почему nft в кошельке отображается звездочкой а не самой nft-шкой ?

Ilya: 🔍 Разыскивается человек в команду:  🟢 Требуется: * знание принципов и устройства блокчейна ton * опыт написания смарт контрактов под стейкинг и пулы ликвидности * понимание принципов и желательно опыт проектирования defi систем в связке с web технологиями  Писать сюда: @donlusofon  Платить готовы хорошо. К зп добавим жирные опционы 🚬  Не для новичков. Сорри, не в этот раз)

User<6908616126>: это тестнет? (reply to 171463)

Ruslan: Да (reply to 171466)

User<6908616126>: мирись) хз с чем связано, но в разных минтах одной и той же колекции вот есть такая штука

User<6908616126>: мб прогрузится в течении суток, но мб и нет

User<6908616126>: из 30 нфт 6 без превью

Ruslan: Ipfs барахлит 😁

User<6908616126>: все может быть, не разбирался (reply to 171471)

Ruslan: Работает, видимо время нужно как ты и говорил (reply to 171472)

User<6908616126>: у меня уже неделю не обновляются) (reply to 171473)

Ruslan: Может с Инетом проблема (reply to 171474)

Ruslan: Или там nft сложная много весит

Ruslan: Ребят а кто то может простым языком объяснить что такое хуки в реакте, я сколько доки не читал не доходит что то, хотя в коде пишу 😅

&rey: Попробуйте другие движки посмотреть, с другими концептами. Svelte, например, предлагает реактивность — при обновлении одного значения может обновиться другое и так далее. (reply to 171479)

Ruslan: Вроде связанных значений/ действий (reply to 171481)

Ruslan: Модифицирую одно меняется другое, или выполняется функция какая то

Ruslan: Так, условно 😅

Ruslan: Спасибо 😉 (reply to 171481)

Timofey: Так никто помочь и не сможет ? Транзакцию сгенерировать ? (reply to 171371)

Дмитрий: Добрый вечер. А в эксплорерах если методы возвращают «-01» (тип в контракте указан булевый)- это true или false?

Дмитрий: Окей. Спасибо

#: как сминтить sbt через tonsdk на python ?

Alexey: как сжечь NFT / token ?

Афоня: Квартиру😁

Ilya: Отправить на адрес сжигания (reply to 171506)

Alexey: 😁 (reply to 171507)

Alexey: какой он? какой адрес? (reply to 171508)

Афоня: Наш смарт контракт: жми

Афоня: Нажимаешь на владельца и там нулевой Кош

Alexey: да не нужно это тебе. левые скамерские токены/нфт  куда их отправить, чтобы сжечь? какой адрес? (reply to 171512)

Афоня: . (reply to 171513)

Афоня: Это адрес сжигания

Афоня: Посмотри транзакции на него, нфт и всякий мусор отправляют туда

Alexey: UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKZ ?

Alexey: спс!

Alexey: еще вопросик:  а то, что они висят на кошельке, они какой-то импакт оказывают? на что-то вляют?

Mirka: Нет, но если это жетоны это увеличивает число холдеров, это может быть нужно например для попадания в ВЛ на дексах (reply to 171521)

User<6898588101>: Everyone is russian Can we go somewhere and see less russian in it

Mirka: https://t.me/tondev_eng (reply to 171525)

acoustic: Hello

Roma: Ребят, а сколько будет стоить примерно допустим хранить в данных контракта 5000 адресов?

Roma: Каждая перезапись будет ведь стоить денег + хранение?

mr.: Походу, очередной Скам какой-то пилишь, раз "не в этот раз". (reply to 171465)

Roma: Ну иногда никак, точнее в ущерб другим функциям и простоте (reply to 171536)

Roma: И гибкости

Ilya: Нет) у нас нет скамных проектов. С прошлой разработкой прошли в финал хакатона в Сингапуре и есть действующий GameFi, куда на старте мы брали новичков с нуля (reply to 171537)

Mirka: Там за изменение списка цена будет расти, лучше придумать, как по-хитрому хранить (reply to 171533)

Roma: Список будет уменьшаться, не увиличиваться. Ну допустим 1000 адресов, есть у кого-нибудь оценка? И в принципе в этот список я могу периодически добавлять , допустим по 100 записей, по мере их траты :) (reply to 171541)

Mirka: Можешь в тестнете попробовать заспамить контракт записями (reply to 171542)

Evgeny: Как распарсить body транзакции? Пример кода на гитхабе https://github.com/ton-org/ton/issues/32

— 2024-03-07 —

Juni: привет, хочу написать тест на транзакцию, которая "не прошла"—смотрю в out_msgs, если есть чето, то "не прошла", правильно же понимаю? если да, чтобы два раза не вставать, подскажите плиз, как такую транзакцию наверняка сделать?

Владислав: Всем привет, мне нужно выставить свой мини приложение в телеграмм, надо чтобы была возможность использовать ton connect. Я сделал мини приложение открывающиеся по ссылке, но мне понравилось, что остаётся блок для написания сообщений, начал делать web app. В чём разница между tg mini app и web app, учитывая, что я буду подключать ton

User<6908616126>: Вот тут я довольно подробно ответил на твой вопрос (reply to 171223)

User<6908616126>: И это тоже посмотри (reply to 171247)

User<6908616126>: Думаю тебе это поможет решить твой вопрос

Ihor: Есть возможность натравить tryLocateSourceTrx на workchain?

Seitaro: Лучше пользоваться методами индексатора https://toncenter.com/api/v3/  tryLocate метод эвристический и работает не всегда (reply to 171568)

Ivan Ed.: Всем привет ! Как связаться с app центром для публикации приложения  Через бота модерации не получается получить ответы на вопросы

Ivan Ed.: И вообще не понятно почему не проходит модерацию, может кто-то сталкивался с таким

🎐*<@Maxim: почему npm install ton-compiler - успешно, а вызов ton-compiler -  zsh: command not found: ton-compiler?

🎐*<@Maxim: почему команда /Users/user/TON/build/crypto/func main.fc  для main.fc-файла () main() {     ~strdump("hello");  }  выдает  main PROC:<{   x{68656c6c6f} PUSHSLICE   STRDUMP   DROP }>  я же поставил ~strdump() почему выдается  x{68656c6c6f} а не строка?

&rey: npx ton-compiler, кажется. (reply to 171575)

🎐*<@Maxim: а почему команда "npx ton-compiler ..." не выводит в консоль ~strdump("hello"), а только компилирует файлы? (reply to 171577)

&rey: Потому что компилятор, наверно? Посмотрите опции в --help. (reply to 171579)

🎐*<@Maxim: да компилятор, а как тогда скомпилировать, чтобы увидеть ~strdump("hello") - строку "hello" или значение переменной? (reply to 171580)

🎐*<@Maxim: а использование var вместо других типов данных не газозатратно?

Tim: нет (reply to 171585)

Andrey: Если  вы используете dton, пожалуйста, обратите внимание на миграцию методов.   Изменения запланированы в начале следующего месяца, до этого момента просим мигрировать запросы к transactions / account_states на raw_transactions / raw_account_states.  https://t.me/dtonforum/1/6001

Cpperg: как исправить эту ошибку, поскольку я только что загрузил mytonctrl на сервер

&rey: А вы пытались в lite-режиме поставить? (reply to 171594)

Cpperg: нет, но я хочу получить полную информацию для достижения оптимального результата

Cpperg: даст ли он те же результаты?

Cpperg: А

Cpperg: Ета лит

Cpperg: да, именно поэтому я сделал с и без

Cpperg: Да

Cpperg: )

Cpperg: Я включаю облегченную версию, потому что полная версия выдает ошибки разрешения.

Cpperg: https://docs.ton.org/participate/run-nodes/full-node#enable-liteserver-mode

Cpperg: Это

User<6908616126>: ребят, ну решение же прям там.... просто запустите без sudo

User<6908616126>: только что проверил, при запуске sudo mytonctrl ошибка валидатора, без судо все окей

cemorum: Скиньте пожалуйста документацию хуилити бота

cemorum: Не могу найти

Alacrity: Был ли у кого опыт разработки GraphQL-клиента на Python? Если да, то какими библиотеками пользовались, и какие считаете лучше?

Vokhma: Я новенький в TON и пока многого не понимаю. Сейчас прошёл обучалку по простому контракту-счётчику. Как я понял, для всех изменений в блокчейне типа того же увеличения счётчика надо платить тонкоинами, так? Это оплата другим людям в сети за услуги блокчейна?

Vokhma: А можно сделать так чтоб часть коинов шла на услуги сети а часть на конкретный кошелёк?

Five: Это происходит в любом случае, когда ты отправляешь транзакцию (reply to 171653)

Vokhma: Я немного не так описал. Я делаю сайт с которого будут загружаться NFT. Не подумайте, что это простой загрузчик картинок, там логика будет сложнее. Так вот, за загрузку NFT надо платить. Можно сделать чтоб часть коинов шла за работу сети а часть на мой кошелёк, и всё в одном запросе?

Vokhma: Вопрос в сторону, можно ли реализовать временное хранилище файлов в тон контракте? Я хочу чтоб пользователь мог загрузить файл, другой пользователь мог провести с ним манипуляции, а потом результат сохранить в NFT. Ну а если до стадии NFT не дойдёт, файл должен через время удалиться.

Mirka: Ton Storage глянь (reply to 171656)

😡: Нет (reply to 171660)

Assi: Где тут работу ищут прогеры? Оффтоп

Neoadapter: Кто то знает как сделать прием платежей на один адрес в сети Ton с бирж? там ведь идет транзакция с их единого аккаунта и отследить отправителя - не вариант

Mirka: Комментарий(не уверен, что на всех биржах он есть) с uid (reply to 171665)

Timofey: Здравствуйте, у нас проблема, не отображается название в клнекте. Кто знает в чем проблема ?  Имя появляется в кладках.

User<6908616126>: Покажи манифест (reply to 171667)

User<6908616126>: У вас в манифесте ссылка на бота, вот он и показывает его домен (reply to 171667)

User<6908616126>: Да, скорее всего так и есть, сейчас тоже сообразил (reply to 171669)

Timofey: Так а как ссылку то оставить и название сделать красивое. (reply to 171670)

User<6908616126>: Насколько помню, туда ссылка не обязательна. Можно просто имя, которое хочешь видеть при подключении

User<6908616126>: Хз, мб это не очень правильно, но работает (reply to 171675)

User<6908616126>: Даже в офф доке сказано что туда просто имя, так что вбивай свое и не парься

User<6908616126>: Да, кстати есть такое (reply to 171677)

Evgeny: Помогите пожалуйста, как распарсить транзакцию которая только создана, но ещё не отправлена в сеть?  boc для примера с двумя трансферами  const boc = 'te6cckEBAwEA4gAC44gAtaxtSjPhYVtWW8wQfng/KbOOhDwbTH5bQKHff8Xf33IF4cWfO/pc45YHTR5QxkkWhgQZFs3GW92GaTsy2FGAX5JFxY8NzGUOOl5dUg3zZyO//s1bB2fDneEE+xje43/gOU1NGLsvRzMwAAAAEAAYHAECAGhiADH5SGHPomBdEz+IRxPSuraaSmpW6BajTFb0ofFlo5OtIdzWUAAAAAAAAAAAAAAAAAAAAGhCAFV+clRrgIA3CyKW/YEuMRbTEEjqBsOGxjA6ZD2NA22FIELYqSAAAAAAAAAAAAAAAAAAuTK1MA=='  const cells = Cell.fromBoc(Buffer.from(boc, 'base64'));  const msg = loadMessage(cells[0].beginParse()); console.log(msg);  {   info: {     type: 'external-in',     src: null,     dest: EQBa1jalGfCwrast5gg_PB-U2cdCHg2mPy2gUO-_4u_vuefL,     importFee: 0n   },   init: null,   body: x{BC38B3E77F4B9C72C0E9A3CA18C922D0C08322D9B8CB7BB0CD27665B0A300BF248B8B1E1B98CA1C74BCBAA41BE6CE477FFD9AB60ECF873BC209F631BDC6FFC0729A9A31765E8E66600000002000303}    x{620031F94861CFA2605D133F884713D2BAB69A4A6A56E816A34C56F4A1F165A393AD21DCD6500000000000000000000000000000}    x{4200557E72546B8080370B2296FD812E3116D31048EA06C386C6303A643D8D036D852042D8A92000000000000000000000000000} }  Получается что loadMessage парсит только экстернал сообщения, не разбирая сами трансферы.  Пример кода использует js либу @ton/ton, но это не принципиально, если что скопирую парсинг с другой либы или языка.

Evgeny: Хотелось бы разобрать просто байты перед отправкой (reply to 171685)

Андрей: подскажите как на js преобразовать первый вариант адреса (имею только его), что бы получить второй вариант который отображается в кошельках

Denis: пишите на го. мы там вот так умеем разбирать: https://gist.github.com/mr-tron/e008483c85b0929a18615061334a4ec3 (reply to 171690)

Mirka: Не уверен, что тебе подойдет, но вот https://ton-org.github.io/ton-core/classes/Address.html (reply to 171691)

Denis: попробуйте на тестнет адрес отправить в мейннет кипере :) (reply to 171695)

Denis: вообще не работало. но может сломали с переходом на ton-core

Андрей: Мне для отображения пользователю, нужно отобразить тот же адрес который он у себя в кошельке видет (reply to 171693)

Denis: для тестнета в якобычеловекочитаемую форму добавляется флаг тестнета и он меняет первые буквы и чексуму в конце

Андрей: Использовал toString, он мне первый вариант возвращает.. (reply to 171694)

Denis: плохо (reply to 171700)

Mirka: А ты параметры добавлял? (reply to 171703)

Андрей: Нет, чё то и не увидел что там параметр можно передать, спасибо попробую поиграться с ними (reply to 171707)

Evgeny: а ткните какой метод разбирает, это то что нужно (reply to 171692)

Denis: package main  import (   "encoding/json"   "os"    "github.com/tonkeeper/tongo/abi"   "github.com/tonkeeper/tongo/boc"   "github.com/tonkeeper/tongo/tlb" )  func main() {   c, _ := boc.DeserializeSinglRootBase64("te6cckEBAwEA4gAC44gAtaxtSjPhYVtWW8wQfng/KbOOhDwbTH5bQKHff8Xf33IF4cWfO/pc45YHTR5QxkkWhgQZFs3GW92GaTsy2FGAX5JFxY8NzGUOOl5dUg3zZyO//s1bB2fDneEE+xje43/gOU1NGLsvRzMwAAAAEAAYHAECAGhiADH5SGHPomBdEz+IRxPSuraaSmpW6BajTFb0ofFlo5OtIdzWUAAAAAAAAAAAAAAAAAAAAGhCAFV+clRrgIA3CyKW/YEuMRbTEEjqBsOGxjA6ZD2NA22FIELYqSAAAAAAAAAAAAAAAAAAuTK1MA==")   var m tlb.Message   tlb.Unmarshal(c, &m)   body := boc.Cell(m.Body.Value)   _, _, v, _ := abi.ExtInMessageDecoder(&body, []abi.ContractInterface{abi.WalletV4R2})   json.NewEncoder(os.Stdout).Encode(v) } (reply to 171716)

Denis: но на счёт переписать быстренько на жс я сильно сомневаюсь

— 2024-03-08 —

Dmitry: сплитование платежей (клиент ->  продавец + % платформе) как удобнее запрограть? В смарт контракт или просто на серваке скрипт написать?

Dmitry: но это возможно чуть дороже по комиссиям будет, верно? потому что две отдельные транзакции. Плюс придется сначала на счет платформы перевести всю сумму, а потом уже продавцу. Получается если платформа на УНС и налог с оборота, то .. (reply to 171732)

Dmitry: хотя я не знаю как вообще и кто сейчас отслеживает движение средств по крипто кошелькам с точки зрения налогов ..

Dmitry: хм спасибо (reply to 171736)

&rey: На работу TON деньги и так будут забираться, можете не волноваться по этому поводу. (И кстати, эти "другие люди в сети" называются "валидаторы" — не другим пользователям идёт оплата) (reply to 171655)

&rey: По 64 КБ за один запрос (экстернал) можно загрузить, а так вроде до 4 МБ данных можно запихать в контракт. (reply to 171656)

Vokhma: 4 МБ вообще или за одну запись? (reply to 171741)

&rey: Вообще. (reply to 171742)

Vokhma: Как-то слишком мало

&rey: Как-то контракт вообще не предназначен для обработки такого количества данных.

Vokhma: Эх

&rey: Хранить-то сможет, а изменять — нет или очень дорого.

&rey: И да, с текстовыми файлами: пусть у вас есть ABCDABCDABCD...; на ячейки это разобьётся примерно как [ABC][DAB][CDA]...; если вы в начало добавляете символ, то обновить придётся примерно все ячейки. Стоимость этого примерно понятна?

Vokhma: То есть долгоиграющими могут быть только всякие контракты-счетчики? Которые вечно перезаписывают данные?

Vokhma: А как же ton storage?

&rey: А это вне блокчейна. Основано на доверии, что ноде вообще нужны ваши тоны. (reply to 171750)

Vokhma: А Nft - это часть контракта?

&rey: Контракты, удовлетворяющие интерфейсу из TEP-62. https://github.com/ton-blockchain/TEPs/blob/master/text/0062-nft-standard.md. (reply to 171752)

&rey: Картинку в них можно грузить как в блокчейн, так и в TON Storage, IPFS или вообще на обычный сайт.

&rey: https://getgems.io/collection/EQAYHQhKwLtu0zzM7xAjA_Pfypz1tt2VR9goSyTRSvYb9Zm3/EQBTvMbzfxBnSc1Ua_ueEB42jhjfmtiqG6I0MhnyRRo4Etrg (reply to 171756)

&rey: Если немного посжимать, да, влезает.

&rey: Косвенно. Цена хранения поднимается (хотя и не сильно существенно, помнится, раз этак в 20-30, не больше). (reply to 171758)

Vokhma: В коде туториала при отправке запроса туда включается 0.05 коинов. Это все 0.05 за газ, или газ меньше а остаток идёт на счёт контракта? (reply to 171740)

&rey: За газ + особо дорогую вещь под названием forward fee (плата за пересылку сообщений между контрактами). (reply to 171762)

Vokhma: Но почему отправитель решает какую цену платить?

Vokhma: Если я укажу 0.000001, оно сработает?

&rey: Никаких действий не выполнится просто. (reply to 171765)

&rey: Потому что тон не подбирает её за отправителя и не предполагает, какой именно результат он хочет получить. Невозможно это как минимум потому, что любая транзакция проходит ровно на одном контракте. (reply to 171764)

Vokhma: А где-то можно узнать расценки? Мне ж не выгодно указывать сумму больше минимума

&rey: Если у вас обычные NFT/жетоны, ставите response_destination = ваш адрес, и вам всё лишнее вернётся. (reply to 171768)

Vokhma: А, то есть я указываю максимальную сумму что готов заплатить?

Vokhma: Платит то в итоге клиент моего сайта. А если я укажу в response_destination мой кошелёк, то остаток пойдёт мне?

&rey: Именно так! (reply to 171772)

Vokhma: Ну хоть с монетизацией понятно, спасибо

Denis: кто угадает что это такое?

&rey: Размеры блоков, может? (reply to 171776)

Denis: блин. быстро

Denis: вот от момента сотворения до текущего дня (провал это пауза в работе индексера)

Ruslan: Всем привет, а кто нибудь может подсказать нужно ли знать  плюсом к func & TS 'go' при разработке dapps, или достаточно func и скриптов на ts ?

Ruslan: Просто елси достаточно знаний ts и func, зачем нужен GO, для тех кто привык на нем работать ?

User<6908616126>: Да, для тех кому на нем удобнее писать, возможностей node js предостаточно (reply to 171788)

Ruslan: Понял, просто в гайдах к тону почему то на Go скрипты 🤷

Ruslan: Спасибо 😉 (reply to 171789)

User<6908616126>: Почему то его сильно любят) (reply to 171790)

User<6908616126>: Я по пайтону больше, сейчас пришлось на js/ts пересесть

User<6908616126>: Мне он очень не понравился, но это больше индивидуальное (reply to 171794)

User<6908616126>: pytonapi является официальной для toncenter (reply to 171798)

User<6908616126>: Возможно. С++ рулит😁 (reply to 171799)

User<6908616126>: Посмотрел, pytoniq тоже в списке (reply to 171800)

User<6908616126>: Это заслуга языка или ide? (reply to 171802)

User<6908616126>: Погуглил, пасиб за ответ

User<6908616126>: Я юзаю ide от jetbrains, реально крутые

User<6908616126>: И там уже форматирование есть, и автодополнение крутое

User<6908616126>: Ну не в 30. 3гб вебшторм, 3гб пайчарм

User<6908616126>: Ну это на линуксе. На винде хз. Да и в наше время это не то что бы огромный вес)

Ssi: тяжело вам на старом железе, должно быть) (reply to 171809)

Michael: а что за ide? (reply to 171807)

User<6908616126>: У меня в озу 10 раз влезет вебшторм😁 (reply to 171812)

User<6908616126>: На сайт jetbrains.com зайди, и там будет список и пояснения для каких языков та или иная ide (reply to 171815)

User<6908616126>: Ну комфорт тоже не маловажно (reply to 171819)

Ssi: есть, вроде бы, обменники) (reply to 171816)

User<6908616126>: Никогда не жопился на место для ide, это твое рабочее место, все должно быть красиво и удобно)

User<6908616126>: Какая сумма? (reply to 171816)

User<6908616126>: Можешь в лс. Мб помогу советом

Ruslan: А если раньше на нем не писал, учится язык  как ? (reply to 171794)

Ruslan: Учитывая что язык далеко не первый 😅

Ruslan: Тулчейн? (reply to 171829)

User<6908616126>: Не, мака нет (reply to 171828)

Ruslan: Понял спасибо, а тулчейн это че ? (reply to 171834)

Ssi: набор утилит(компилятор и вот это вот всё), необходимых для работы (reply to 171837)

Ruslan: Просто вопрос точнее вот какой есть ли смысл на нем писать бэк для смартов (reply to 171840)

Ruslan: Ведь фронт и тесты все равно ts

Ruslan: Или скрипты пишутся проще и быстрее, поэтому go ?

Ruslan: Скрипты для deploy и тд

Ruslan: Скрипты- условный бэк

User<6908616126>: Это на чем удобнее и быстрее, можно хоть раст и с# (reply to 171846)

User<6908616126>: На все это есть библиотеки, выбирай язык который знаешь и все (reply to 171848)

Ssi: попробуйте реализовать простое решение на том и на другом, посмотрите, что удобнее для вас 🙂 (reply to 171842)

User<6908616126>: Они там все +- с одинаковыми возможностями, если брать тройку js/go/python (reply to 171851)

Ruslan: На расте писать бэк для FunC 😂

Ruslan: Понял, кому как удобнее называется, попробуй обе и реши на чей стороне ты 😂🤣 (reply to 171853)

Ruslan: Все спасибо, что помогли разобраться, пойду дальше  кодить 👨‍💻

User<6908616126>: Именно (reply to 171855)

Vlad: На тоне же нет приватных ключей?

Vlad: У кошелей и контрактов (reply to 171862)

Vlad: Или можно как-то получить/увидеть?

&rey: У кошельков? Есть. (reply to 171863)

&rey: Как получить? Ну, приватный ключ получить можете только вы. Из мнемоники, или просто сгенерировать случайные 256 бит.

Vlad: А у обычных контрактов? (reply to 171865)

&rey: У обычных контрактов такого нет. (reply to 171867)

Vlad: Просто кошельки же тоже контракты

&rey: Ну, там у них в коде вся работа с публичным ключом прописана, и этот самый ключ есть в storage контракта. (reply to 171869)

Vlad: Получается как на Evm, разделение на EOA (известен привратник) и контракты (неизвестен)

&rey: Получается, что блокчейну совершенно без разницы, есть там у контракта ключи или нет. (reply to 171871)

Vlad: Я имею ввиду для пользователя/разраба (reply to 171872)

&rey: А. Ну так то же самое. В TS обёртка для контракта создаётся с какими-то параметрами. Там может быть публичный ключ, может не быть — разницы особо от этого не появляется, разве что добавляется отсылка экстерналов. (reply to 171873)

Vlad: Да, в эфире разница что EOA не имеют кода совсем, в отличие от контракта (reply to 171874)

Ihor: Правильно ли я понимаю, что для средствами самой ноды TON(self-hosted) протрассировать транзакцию нельзя, а чтобы её реализовать на вменяемой скорости то нужно запарсить все данные с последующей обработкой?

Ihor: если не использовать tonapi.io

DVA: А где такого нет? (reply to 171802)

Dmitry: Привет. Не подскажете, как посмотреть тотал саплай тона и количество его холдеров через тонапи или через тон клиент? Эта ручка не принимает строку 'ton' как другие https://tonapi.io/v2/jettons/0%3A9a8da514d575d20234c3fb1395ee9138f5f1ad838abc905dc42c2389b46bd015

Dmitry: ну да, просто ручка /rates например вместо адреса токена принимает строку "ton", а тут так уже не работает (reply to 171882)

Dmitry: нет никакого способа через TonClient может быть? (reply to 171883)

&rey: Тотал саплай: https://explorer.toncoin.org/last мастерчейн: view block — block — value_flow — to_next_blk — grams (1'884'954'*** TON) бейсчейн: нажать на seqno ниже — view block — block — value_flow — to_next_blk — grams (3'218'960'*** TON) (reply to 171881)

&rey: А холдеров блокчейн не считает.

Dmitry: Спасибо! (reply to 171887)

&rey: Но много кто из тотал саплая будет вычитать псевдосожжённые тоны (на адресах, откуда достать их более невозможно, но блокчейн всё равно их считает), замороженные или те, которые лежат в локере. (reply to 171889)

&rey: Кстати, прикольно, что в мастерчейне меньшая часть тонов. Если вычесть локер с миллиардом, получится 46%:54%.

Dmitry: Ну а эта ручка отдаст все без вычета замороженных? (reply to 171887)

Dmitry: Спасибо

&rey: А. Вот как можно посчитать "приблизительно кошельки": https://dton.io/graphql/#query=query%20%7B%0A%20%20account_states_count(%0A%20%20%20%20account_state_state_init_code_has_get_public_key%3A%201%0A%20%20)%0A%7D. (reply to 171881)

Dmitry: Спасибо! (reply to 171895)

Dmitry: Попробую

Vladimir: Очень "приблизительно". Выводит 874к. (reply to 171895)

&rey: А сколько кошельков должно быть? (reply to 171899)

&rey: Там считаются все контракты, у которых есть get_public_key. Примерно они и есть кошельки.

Dmitry: Вроде TF как-то отчитывались о количестве кошельков. И там цифры какие-то большие были

Vladimir: Уже около 6 млн. аккаунтов. Согласно статистике. (reply to 171900)

Vladimir: У TonKeeper больше 1 млн. установок на андроиде. (reply to 171903)

Dmitry: только как их посчитать по-настоящему... (reply to 171903)

Vladimir: А зачем? Если только не для спама по адресам. (reply to 171905)

Dmitry: ну надо наверно мб считать количество контрактов с интерфейсами валлета

Dmitry: для статистики (reply to 171906)

Dmitry: ну и только активированные кошельки (reply to 171907)

Vladimir: Интересная статистика. (reply to 171909)

Dmitry: А, да, я не прав. Неактивированные тоже ведь могут холдить, только fee ни разу не платили (reply to 171910)

DVA: Как минимум, в c# (reply to 171879)

DVA: Даже не пытайся, это уже пройденный этап (reply to 171921)

Дмитрий: Getgems действительно недоступен?

Дмитрий: Мне кажется, что сообщество Notcoin может перегрузить любую платформу своей активностью 😆   Getgems.io лег  Предлагаю отнестись с пониманием и, еще раз, проявить терпение.

Никита: tonscan.org больше 7 часов лежит

Isaac: нормально работает

User<6908616126>: И гетгемс и тонскан весь день работают стабильно

User<6908616126>: Я сегодня весь день на этих сайтах, ни одного падения

NDA: все в порядке с ним (reply to 171929)

Никита: Транзу проведи и посмотри (reply to 171933)

NDA: свежие транзы по линку могу посмотреть, в списке транзакций на кошельке отображает последние 9 часов назад (reply to 171934)

NDA: индексатор немного приуныл

&rey: Есть предложение: добавить в документацию вот такие схемы сообщений + по нажатию на текст в квадратных скобках примеры кода.

&rey: Появилось, соответственно, три футстепа: на описание таких графов, на перевод их в картинку и на перевод их в код на *любой поддерживаемой SDK*. https://github.com/ton-society/grants-and-bounties/issues/466 https://github.com/ton-society/grants-and-bounties/issues/467 https://github.com/ton-society/grants-and-bounties/issues/468

&rey: Если у кого-то есть дополнения — пожалуйста, пишите.

Человек: Привет! Есть специалисты про JS и TON ? Есть оплачиваемая работа.  Тонконнект + тонпруф + работа с жетонами

Howard: Приветствую всех! Есть геймдев разработчики?

Kaspars: У кого-нибудь есть идеи, как примерно оценить комиссию за транзакцию кошелька High-Load v2 с несколькими получателями?  Попробовал использовать estimateFee api с init_code и init_data, он показывает неполную комиссию, скорее всего, потому, что он также возвращает gas_fee=0, но gas_fee меняется в зависимости от количества получателей, поэтому не знаю, как рассчитать. Спасибо  Пример tx: https://tonviewer.com/transaction/3bfdbb066d852b0811320baf19df0af385ee7c90cc5d1fb46a95bd5c5796b78f  Для этой передачи estimateFee: {   "@type": "query.fees",   "source_fees": {     "@type": "fees",     "in_fwd_fee": 7749000,     "storage_fee": 33,     "gas_fee": 0,     "fwd_fee": 0   },   "destination_fees": [], }

Timofey: Привет, кто может прямо сейчас взять сайт с архивом, взять данные от хостинга и залить туда сайт + привязать домен ?  Всё готово, нужно только это связать и залить. Я просто не умею.

Vladimir: Что за сайт? (reply to 171947)

IndexCorp: у блокчейна есть хостинг файлов нфт?

Five: Брат, это Тон

Five: Тебе в другую беседу

Никита Рязанов: Как можно чекать когда у аккаунта появляются доступные get методы?

— 2024-03-09 —

User<6963363767>: Доброго времени суток! С недавних пор, конвертация собственного юзернейма в NFT через fragment не всегда заканчивается корректно. Навскидку, за последние 24 часа, в эксплорерах (истории продаж) вижу минимум четыре случая: NFT приходит в кошелек, но собственная ставка (за вычетом всех fees) людям НЕ возвращается. Более того, conversion fee не перечисляется fragment-у. Сумма, подлежащая распределению между владельцем юзернейма и фрагментом, зависает на промежуточном(?) смарт-контракте, и остается там без движения. Примеры: EQB7m-6wJHM1cNla8hYmRYBIfgANyH1PTTHMXBdJggZ_65FF , EQA5W4cJqZo5s6sGDY4XEORHfWmxgB228BP0aj_h9xxca0rc , EQApjasZOHytB_QtDrrglT3JqQ30Jb3CO-SnIznfc0K1OGq2 , EQAbj6dqY70R5gwTaKcwbjai98pjKbPJren5OuB4YRrJL4ed . По этим адресам видны тоны, которые не вернулись четырем пользователям после "выигрыша" собственных юзерок за 10 тон (ну и неполученные fragment-ом conversion fees). Живой человек в ton help bot советует ждать несколько часов, что похоже бесполезно, и обращаться в телеграм. Но с мессенджером-то проблем нет - collectible юзернейм работает. Куда копать или куда это реально можно зарепортить?

Tim: Никуда. Фрагмент в курсе, ждем фиксов (reply to 171962)

User<6864646959>: А когда будут? (reply to 171963)

Tim: А кто знает…

W.A.: Подскажите, deep link из mini app не работают?

Anthony: Работают (reply to 171966)

W.A.: Подскажите, у меня веб приложение, через mini app открывается просто по url, там есть wallect connect который никак не хочет окрывать кошелек, вот такая ошибка как на скрине. Просто через мобильные браузеры работает, через mini app нет. Можно вообще что то сделать? (reply to 171968)

наз: есть у кого пример ссылки на кипер, при переходе на которую юзер может получить определенное кол-во жетонов себе на кош?

&rey: Поищите "чек для жетонов". Где-то было, но я потерял, только вот для тонов вижу (https://github.com/AndreyBurnosov/cheque/blob/master/wrappers/OneTimeCheque.ts). (reply to 171971)

Denis: ну в принципе можно минт wrapped ton какой-нить сделать

Denis: почитал кстати твои футстепсы на описание контактов. мне не понравилось (reply to 171972)

&rey: Да я заметил. В общем или конкретное предложение, как оформить систему в TOML? (reply to 171974)

наз: у меня прост есть пример такой ссылки: ton://transfer/{WALLET_ADDRESS}?amount={10000000}&text={COMMENT}  и я думал может есть что то подобное, ток нужно не тоны, а какой то конкретный токен

Denis: https://github.com/tonkeeper/wallet-api правда там народ иногда ходит жалуется что что-то сломано (reply to 171976)

наз: ton://transfer/<destination-address>?     [jetton=<jetton-master-address>&]     [amount=<elementary units>&]     [fee-amount=<nanocoins>&]     [forward-amount=<nanocoins>]   по этому примеру fee-amount и forward-amount самому получается считать?

Denis: квадратным скобкам традиционно оформляются опциональные аргументы (reply to 171978)

Denis: 1. я не уверен что томл это круто для этой задачи хоть мне и нравится томл. 2. во-вторых я вообще не очень понял конечную цель. рисовать диаграмы для документации? описывать аби для кодогенерации? всё вместе? 3. исходя из ответов на 2-й пункт могу дальше покритиковать  Для интересующихся, речь об этом: https://github.com/ton-society/grants-and-bounties/issues/466 https://github.com/ton-society/grants-and-bounties/issues/467 https://github.com/ton-society/grants-and-bounties/issues/468 (reply to 171975)

наз: если я их не укажу, то комсу за сам трансфер будет платить получатель? (reply to 171979)

Denis: нет. просто кошелек подставит значения по-умолчанию

&rey: Всё вместе, потому что код этот будет показываться по клику на кнопку в диаграмме. (reply to 171980)

наз: а я вообще могу регулировать этот процесс, если мне например нужно что-бы получатель платил комсу? (reply to 171982)

Denis: тогда вам нужен другой блокчейн и я таких не знаю. как вы себе это представляете? я вам шлю жетон и вы платите комиссию за это? я бесплатно тогда могу сжечь ваш баланс (reply to 171984)

наз: понял, премного благодарю (reply to 171985)

Stranger in: 👀 (reply to 155495)

Denis: выглядит что тогда ты пытаешься смешать мух и котлет. описанный формат выглядит заточеным как раз под генерацию диаграм.  разумнее делать это так:  1. ты описываешь сообщения с делением на три категории: экстернал ин, экстернал аут, интернал. даёшь им какое-то имя и определяешь способ указания этого имени с учетом неймспейсов (например чтобы иметь возможность адресовать локальные свои какие-то сообщения между двумя чисто своими контрактами и при этом иметь возможность сослаться например на стандартизированные сообщения типа жетон нотифая).  2. ты описываешь аби контракта. это гет методы, схема стораджа, экзит коды. опционально хэш.  3. ты прикрепляешь к этим контактам входящие и исходящие сообщения ссылаясь на них.  4. ты отдельное описываешь диаграму давая просто ссылки на это аписание аби и уже намазывая деталей отображения. (reply to 171983)

Denis: https://github.com/tonkeeper/tongo/blob/master/abi/schemas/dedust.xml вот нечто подобное (ну с учетом того что там конечно ориентировано на индексатор, а не разработчика контракта). но модульный подход как из кирпичиков на разных уровнях перпендикулярен.

наз: ссылка 1:ton://transfer/{WALLET_ADDRESS}?amount={10000000}&text={COMMENT} ссылка 2:ton://transfer/{destination}?jetton={JETTON_MASTER_ADDRESS}&amount={amount}&fee-amount=50000000&forward-amount=10000000  результаты ссылок на фото, нужно чтобы у второй ссылки был результат, схожий с результатом первой, если это вообще возможно

наз: по сути, мне нужно чтобы юзер просто подтверждал трансфер на свой адрес, но щас я понимаю что это не логично вероятнее всего (reply to 171995)

наз: . (reply to 171998)

Denis: Ещё кстати сразу есть смысл продумать реакцию и отправку  пейлоада жетона и нфт. (reply to 171990)

Denis: Короче я бы настоятельно рекомендовал почитать наши xml

🎐*<@Maxim: а правда что в методе с method_id не будет срабатывать set_data()?

Андрей: get_method_id выполняется локально, следовательно вы сможете изменить данные только локально на той машине где вызывается гет метод (будь то ваш компьютер или LS) (reply to 172007)

dg: Привет. Для проекта в сфере НФТ требуется специалист по работе со смартконтрактами на TON. Разрабатывать ничего не надо. Важно понимать кухню, где и какие брать смартконтракты. Работа в связки с бэк/фронт разработчиками и дизайнером. По всем вопросам в личку. Работа сдельная. По оплате либо TON, либо доля проекта. Благодарю за внимание ❤️

DVA: Проверь, что он доступен (reply to 172027)

Vladimir: /report (reply to 172036)

Dmitry: Всем привет. А кто-нибудь на @ton/blueprint + @ton/sandbox пробовал тестировать контракты в которых используется TVM инструкция PREVBLOCKSINFOTUPLE ?  как я понимаю на эмуляторе (@ton/sandbox) это пока не реализовано, так как возвращается пустой tuple?

User<6908616126>: Тонконнект? По реакту хз, а вообще это обычная кнопка, на которую вешается openModal() при клике (reply to 172041)

User<6908616126>: https://ton-connect.github.io/sdk/modules/_tonconnect_ui.html (reply to 172042)

User<6908616126>: https://www.npmjs.com/package/@tonconnect/ui-react#usetonconnectmodal (reply to 172041)

User<6908616126>: Вот, смотри тут (reply to 172044)

Cpperg: также первый шаг не требуется для создания другого пользователя (reply to 171626)

Cpperg: это вызывает ошибки

User<6908616126>: Не, он нужен, просто тогда все от него запускать надо (reply to 172046)

User<6908616126>: Когда у тебя на сервере только рут, тебе обязательно надо создать нового пользователя

Cpperg: Ах спасибо (reply to 172049)

Cpperg: также я работал над mytonctrl и обнаружил множество проблем, включая iw, где при вставке должна быть кодировка base64, а не только 24 ключа

Cpperg: если вы можете упомянуть об этом и в шагах, потому что меня даже просили и я помог некоторым

&rey: @tonconnect/sdk подключайте. (reply to 172041)

User<6908616126>: Не, у react-ui  можно решить (reply to 172054)

User<6908616126>: Вообще, sdk это голые функции, а tonconnect/ui и react-ui это красивая обертка для сдк, при этом все функции сдк копируются

Tim: вот же (reply to 172060)

User<6908616126>: TonConnectUi.account.address в hex выводит, а если его передать в toUserFriendly() то выведет человеческий (reply to 172060)

User<6908616126>: На реакте прям дрочиться надо что бы это сделать? Хз, на чистом tonconnect-ui я получил адрес и кастомизировал кнопочку за 5 мин

User<6908616126>: Как бы не считаю что это сложно, просто документацию надо хорошо прочитать, там все есть

Никита Рязанов: Как я могу получить этот comment из транзакции?

Denis: там нет коммента. это ошибка отображения в эксплорере. (reply to 172070)

Denis: кстати у тонвьювера внизу справа есть иконка. тыкнув по ней можно узнать откуда он берет данные для отображения

Andrew: Я тебе не отдам свои деньги Денис (reply to 172075)

𝘈𝘭𝘦𝘹𝘦𝘺: Привет всем. Кто нибудь знает хороший сервис для создания NFT? Мне нужно создать коллекцию на 50к+ элементов. И как их самому создавать?

Оскар: хз, не знаю таких, может даже и  нет, делай сам - генерь картинки, заливай на ipfs/сервер и потом уже каждую минти с данными, надеюсь понятно что через скрипт (reply to 172081)

Stranger in: здравствуйте, что кроме оф документации можете посоветовать для ознакомления с сабжем?

Vladimir: Ютубчик посмотреть можно. (reply to 172111)

Stranger in: хотелось бы конечно чтиво, я как то по видео не могу, ладно будем по доке (reply to 172112)

noname: Здравствуйте, ищу человека, который шарит за nft на ton сети, конкретнее — за отслеживание транзакции, когда человек только выгружает nft на getgems на продажу и транзакция еще находится в обработке, есть кто может помочь с этим? Есть предложение, если получится реализовать. Или куда мне лучше обратиться, подскажите пожалуйста. Спасибо за внимание)

Vavok: Как на python сгенерировать кошелек не через tonsdk?

&rey: Другие SDK (вроде pytoniq) подойдут ведь? (reply to 172117)

Vavok: Ща попробую (reply to 172118)

Vavok: Чё то не вижу ни одного примера как генерировать кошельки на pytoniq (reply to 172119)

&rey: import asyncio import logging  from pytoniq import LiteBalancer, LiteClient, BaseWallet from pytoniq_core import Address, Builder import time  async def main():     logging.basicConfig(level=logging.INFO)     client = LiteBalancer.from_mainnet_config(trust_level=1)     await client.start_up()          source = await BaseWallet.from_mnemonic(provider=client,         mnemonics=<your mnemonic>, version=<your wallet version>)          transfer = {{         'amount': 10**9 * <TON>,         'destination': Address(<destination>),         'state_init': None,         'body': Builder()             .store_uint(0, 32)             .end_cell()     }}          await source.transfer(**transfer)     await client.close_all()  if __name__ == '__main__':     asyncio.run(main()) (reply to 172120)

User<6491979498>: Всем добрый вечер.   Подскажите, пожалуйста, какая средняя стоимость разработки смарт контракта на ton? В часах или в целом за контракт. Можно на примере простого, который занял бы 1 час.   Спасибо

#: как отправлять токены или тон через tonsdk с комментарием

Denis: за 1 час в тоне хз какой смартконтракт пишется. у меня тут разработчик код для криптожопохуев неделю писал. а это по сути просто нфт коллекция с парой дополнительных свистелок (reply to 172126)

User<6491979498>: Это условный пример. Можно в неделях стоимость назвать, мне просто нужно понять порядок цен)

­😇: Нужен программист разбирающийся в java и func.  Фронт работы:  java - поправить код в боте. сделать, чтоб если юзер есть в бд то повторно ему партнёрский код не даётся. Партнёрский код далее передаётся в смарт-контракт. Кнопка "изменить адрес" , не меняет адрес кошелька для показа статистики с смарта, а просто зависает после ввода кошелька.  Func - В смарте помочь запустить функцию от лица ownera, которая там прописана. Возможно через скрипт прийдётся.  Если есть вопросы уточню в личке.

Даша: А в чем была сложность, если не секрет? (reply to 172129)

Denis: в funС низкая способность к композиции и каждый контракт уникален как снежинка. и много возможностей расстрелять себе обе ноги из пулемета так что всё надо покрывать тестами (reply to 172133)

Denis: алсо у меня есть интереснее вопрос:  а существует нулевой блок мастерчейна? если нет то как выбран его хэш? а если да то как его получить? лайтсервер не отдаёт

Daniil: если контракт в 50 строчек, то пишется (reply to 172129)

Daniil: стоимость разработки сильно варьируется в зависимости от сложности самого проекта. цена формируется не только из времени которое нужно будет потратить на нажимание клавиш, но и из необходимого уровня знаний разработчика для корректной реализации.  лучше просто обратиться к нескольким разработчикам/командам за оценкой и сравнить уже по факту для вашего реального кейса. (reply to 172126)

User<6491979498>: Согласен с вами. А как их найти? Просто кинуть тут клич в чате? (reply to 172137)

Denis: я tonapi.io пишу. хочется всю полноту данных (reply to 172138)

Denis: если не существует тот как выбран хэш?

Denis: https://explorer.toncoin.org/viewblock?workchain=-1&shard=8000000000000000&seqno=1&roothash=F0662186B8A077C0B0646AD14F9F62BA52C372089362EBCE033149C6E81CD13B&filehash=57E5F3CA4130BA7E3278F6610043D993BED16CC7CC3A04BF4B81A226448A63AB а это кажется еще одна пасхалка от николая валерьевича

Denis: какой-то год. но с лицеем не связан вроде

Denis: ваш юмор тут врядли кому-то зайдёт (reply to 172150)

Alexander: Можно чтобы монеты из другого воркчейна были экстракуренси в тот что они перешли (reply to 172157)

Alexander: Но вообще было бы не интересно, неоправданная нагрузка на валидаторов (reply to 172156)

Daniil: да, можете здесь к разработчикам обратиться. только нужно быть аккуратным, много мошенников есть. всегда надо убеждаться в компетентности человека (reply to 172139)

— 2024-03-10 —

Brain: Доброго времени суток! На гетгемс есть раздел History, в котором можно применять разные фильтры для операций с элементами коллекции.  Мне необходимо вытащить историю всех покупок для определенной коллекции. А конкретно получить те же 5 полей что и в табличке на gg:  название NFT|цена|продавец|покупатель|дата покупки  Каким образом это лучше сделать?  Через tonapi? И какие потребуются методы?  пробовал через  /v2/nfts/colections/{account_id}/items но там, я так понял, просто отображаются коллекции на листинге.

ᗩᒪᗴ᙭: доброй ночи. https://github.com/romanovichim/TONQuest3?tab=readme-ov-file  делаю по Романовичу, jetton-minter-ICO. Как вывести TON коины после перевода на кошелек смартконтрата?

Brain: Как я понял, каждая нфт это отдельный аккаунт и внутри аккаунта уже истории покупок.  Т.е надо будет вытащить все эллементы коллекции и залезть еще в каждый из элементов, проанализировав историю транзакций?  А каким образом быстро отловить, что в каком-то из эллементов коллекции произошли изменения?  (выполнилась новая транзакция) (reply to 172164)

VIKTOR: Посмотрите страницу GG браузерным дебагером. Увидите, что там используются запросы graphQL так же будут видны сами запросы и endpoint. (reply to 172164)

ᗩᒪᗴ᙭: Кто может ответить на пару вопросов по ск жетона? немножко не понимаю как реализацию сделать

Sol: А для чего он вам? (reply to 172168)

Dmitry | backend4you.ton: Это вам нужен чат разработчиков, https://nometa.xyz (reply to 172168)

Dan: Всем привет.   А почему нет USDT, USDC, DAI на Тоне?   Есть тех проблемы с их входом в сеть?

Andrey: Это вопрос больше к эмитентам (reply to 172171)

Brain: Да, видел. Но не будет ли гг накладывать определенные ограничения? Т.к их апи не публичный, то они могут ограничивать частоту запросов и тд. Плюс на самом гг не отображаются otc сделки. (reply to 172167)

Brain: Т.е как я понял, мне нужно вытащить список аккаунтов всех нфт коллекции и по каждому из них уже проходиться каким-то доп запросом, который будет вытаскивать историю сделок на этих аккаунтах

Denis: Типа того

Denis: Но учитывая что пол блокчейна это нфт и сделки с ними то может проще парсить целиком

Denis: Ну ок. Четверть согласно статистике

VIKTOR: Всегда ценю индексатор ))

Brain: Целиком - это как?) (reply to 172176)

&rey: Весь блокчейн индексировать. (reply to 172179)

Brain: Спасибо, а как это сделать? Не через апи уже, получается? (reply to 172180)

Brain: И какой там объем данных?)  что-то теперь я ещё больше запутался

&rey: Вроде сеть нужна 100 мегабит/с минимум. Вот считайте, что четверть этого трафика может быть связана с NFT — то есть, в любом случае надо столько грузить. (reply to 172184)

Denis: Меньше. Реально блоки блокчейна весят в виде отдельных боков полтора терабайта. Со сжатием 800 гигов (reply to 172185)

Denis: Это за всё время

𝘈𝘭𝘦𝘹𝘦𝘺: Привет всем. Кто нибудь знает, как при помощи программы сминтить 50к нфт?

Denis: Тоесть через 100 мегабит оно просачивается за пару суток

𝘈𝘭𝘦𝘹𝘦𝘺: И какие библиотеки использовать? (reply to 172188)

&rey: А какой язык программирования предпочитаете? (reply to 172190)

Brain: Так, ну мне же нужно только для 1 коллекции данные вытащить. Насколько целесообразно тащить весь блокчейн? В целом, можно увеличить время переиндексации данных с мгновенно, до нескольких минут/десятков минут.

𝘈𝘭𝘦𝘹𝘦𝘺: Любой, желательно python или c# (reply to 172191)

Denis: а. было похоже что вам для всех (reply to 172192)

&rey: Вам нужно: 1. pytoniq; 2. обёртку к highload wallet (идёт в комплекте); 3. формировать сообщение для мультиминта (см. структуру в https://github.com/ton-blockchain/token-contract/blob/21e7844fa6dbed34e0f4c70eb5f0824409640a30/nft/nft-collection.fc); 4. много-много денег (500 TON минимум, а лучше 5000). (reply to 172193)

&rey: dton.io/graphql публичный, если что. (reply to 172173)

Brain: Нет, только для одной коллекции. В таком случае лучше апи использовать? (reply to 172194)

Denis: а коллекция какая? случаем не телеграм?

𝘈𝘭𝘦𝘹𝘦𝘺: Спасибо! Щас гляну (reply to 172196)

Brain: Не, бонды ноткоина. Проблема ещё в том, что там минт не закончен и будут новые элементы появляться (reply to 172199)

Denis: если телеграм то лучше идите в dton.io и graphql если все остальные то tonapi.io

Brain: Спасибо. Попробую) (reply to 172203)

Maksim: в тоне дженезис блок это zero-state, его айди с хешами получить можно например из конифга (["validator"]["zero_state"]) или у лайтсервера в MasterchainInfo->init , а создается он кажется фифитовым скриптом с монорепы (reply to 172135)

Andrey: Так зеростейт отдельный запрос в лс, он есть у  каждого вц (reply to 172135)

Denis: ну вот что в зеро стейте глобал конфига. по сути это блок айди. и на него ссылается блок номер 1 как на предыдущий

Andrey: Да, и эти хэши генерируются gen-zerostate.fif (reply to 172208)

Andrey: Там прям ручками описывается конфиг, и аккаунты. Сколько у кого денег где какой смарт

Denis: ну то есть по структуре это не блок а отдельный типчик

Denis: а где описан?

Denis: и кстати что такое file_hash?

Maksim: хэш бока (reply to 172213)

Denis: А. Лол

Andrey: Он отличается только тем, что это state у которого нет блока (reply to 172211)

Andrey: Но там в плюсах умора, потому что везде стоят ифчики, что если берем стейт 0 секно, то везде берем его из другого метода 🙈

Denis: тоесть это типа этот https://github.com/ton-blockchain/ton/blob/master/crypto/block/block.tlb#L419 (reply to 172216)

Andrey: Да (reply to 172218)

Denis: а есть идеи чем примечателей 1956-й год?

Andrey: СССР протестировала первую ядерную ракету?) (reply to 172220)

Denis: даже в тон замаскирована русская ядерня угроза

ᗩᒪᗴ᙭: https://t.me/tondev/172165 (reply to 172170)

Brain: гениально, спасибо тому, кто это придумал)

Denis: передал

User<5062827846>: всем привет, где взять ссылку на метадату NFT коллекции?

Denis: есть. но вообще не рекомендую ей пользоваться. она не публичная, они её официально не предоставляют и могут забанить в любой момент (reply to 172226)

Denis: >NFT коллекции >jetton_master

Brain: есть какой-то дев-чат для новичков  в тоне, а то у меня много глупых  вопросов по типу: как преобразовать адрес такого формата  0:c0a4171e2a634b83a7e532305d6d3ef8b9dfbd8b74ec1b018e8f0a8d1e978ff0 в публичный v4, например.  и почему в value столько нулей, если это 40 тон?  "amount": { "value": "40000000000", "token_name": "TON" }, как преобразовываются эти значения в десятеричную с плавающей запятой?

Dmitry | backend4you.ton: https://docs.ton.org/learn/overviews/addresses   Это нанотоны, 9 правых цифр - дробная часть (reply to 172233)

Brain: спасибо, а адрес можно через ту же апишку конвертнуть, разобрался, спасибо (reply to 172234)

Brain: взял на вооружение, спасибо) (reply to 172237)

Brain: пока не на каком, изучаю апишку, продумываю последовательность действий, скорее всего питон возьму да (reply to 172241)

Brain: да задача максимально простая - вытащить полную историю покупок для всех нфт выбранной коллекции (reply to 172246)

Brain: да, думаю, не буду усложнять, пока нету запроса на обновление данных рилтайм (reply to 172249)

Brain: вообще, конечно, не быстро получается. 5567 итемов в коллекции, если lite plan тонапи использовать, то это 5567/10/60 = 9 min займет проиндексировать историю всех покупок

Brain: нее, я не столь умён)) за рычаги ток дергаю апишные (reply to 172254)

Brain: имеешь в виду лай-план есть? (reply to 172255)

Brain: если для каждой из нфт мне надо вытащить историю транзакций, то разве это можно сделать одним запросом сразу для несольких?

Denis: нельзя

Brain: ну, получается придется кидать 5.5к запросов все-таки

Brain: не знаю, может есть какой-то более быстрый способ) пока это единственное что пришло на ум

Denis: возможно через grapql на dton io

Denis: но это не точно

Brain: спасибо, посмотрю (reply to 172264)

W.A.: Подскажите, mini app открывает сайт по url, на сайте реализовано подключение кошелька в bsc сети по wallet connect, так вот через mini app кошелек не открывается, ошибка как на скрине, причем не важно какой кошелек выбирать, но просто если зайти на сайт через мобильные браузеры - все работает и редиректиит в выбранный кошелек. Вообще есть способ чтобы через mini app работало?

Brain: у тебя ошибка в имени домена (reply to 172268)

W.A.: Как ошибка, если через мобильный браузер все работает, а через mini app нет? (reply to 172272)

Brain: этот протокол точно должен открываться в миниапс? через бразуер работает, потому что он умеет этот протокол обрабатывать (reply to 172277)

W.A.: Вот я этого не знаю и пытаюсь выяснить.. это протокол кошелька trust wallet (reply to 172278)

Brain: да, и он открывает траствалет. когда запускаете tg:// открывается телеграм и тд. (reply to 172279)

W.A.: Почему тогда у меня не открывает?)) (reply to 172280)

Петр: Всем привет! Новенький в системе тона   Подскажите если публиковать бота. На heroku , где лучше держать private keys кошельков пользователей, где почитать про кибер безопасность ?

&rey: Может, у самих пользователей? (reply to 172284)

Cpperg: Мой валидатор перестал синхронизироваться, как мне его повторно синхронизировать?

Cpperg: число только увеличивается

Петр: А как ты это видишь? У меня без миниэпсов, все на апи телеграфа , в сессии хранить ключи это совсем до свидания безопасность (reply to 172285)

Illya: Всем добрый день.   Пожет кто-нибудь помочь с пониманием транзакций в ТОН?  Конкретно есть нюанс, что одна и та жа транзакция появляется в сети с двух вариантах, в одном статус aborted: true, во второй false... В итоге на баланс вроде деньги зачислены, но в експлорерах есть статус fail...   Не понимаю как оно так работает.   разница этих транзакций только в Created lt на 1..

&rey: 1. Про две транзакции: вы же в курсе, что каждая транзакция работает ровно на одном контракте? Одна на вашем кошельке, вторая на кошельке назначения. (reply to 172291)

&rey: 2. Про fail: контракт назначения не инициализирован — блокчейн не знает, правильно ли, что деньги там остаются. TVM запустить не удаётся, поэтому и fail.

Illya: Вооо, теперь понял, спасибо большое за разъяснение... Так и получается, что Computed фаза и не исполняется на получателе...   Теперь понял и осознал. Спасиьбо большое! (reply to 172293)

Yonathan: Добрый день, новенький в теме криптовалют, и разработки под телеграм.  Сейчас задам возможно глупые вопросы, но что-бы понимать в том ли направлении я смотрю:  1. Возможно ли взаимодействовать с TON за пределами телеграмма и miniapps, к примеру в игровом движке 2. Сможет ли приложение в котором предусмотрено взаимодействие с ton, к примеру покупка различных внутриигровых товаров, попасть в Apple Store/Google play, или забанят?  Спасибо заранее

Illya: А можно тогда вопрос, по каким критериям тогда можно достоверно убедиться, что перевод исполнен? А то я по aborted отсекал, но получается это не правильно ) (reply to 172293)

&rey: Ну... Лучше всего будет отсутствие сообщений обратно в транзакции получения. (reply to 172297)

&rey: На ум сразу приходят варианты "у получателя прибавилось денег" и "нет транзакции с bounce=true", но баунс мог бы оказаться в следующем блоке. (reply to 172299)

&rey: Конечно. (reply to 172296)

&rey: Вопрос скорее к этим маркетплейсам и зависит от того, будете ли вы им выплачивать долю от полученных тонов. (reply to 172296)

Illya: Но это тоже не очень вариант. У человека может быть сразу 2-3-10 входящих транзакций и например 1 транза не удалась, а 2 удалась и в итоге баланс увеличен. А скрипт отпрабатывает только раз в 5 минут... (reply to 172301)

&rey: dton.io/graphql и фильтруем: аккаунт —кошелёк назначения, in_msg с нашего кошелька (можно lt создания проверить ещё), смотрим, чтобы out_msgs было пусто. (reply to 172304)

Illya: маркеты точно не дадут продажу внутреннего контента в обход их сервиса...  Был же какой-то такой скандал, в итоге с удалением какой-то игрухи их АррСтора.. Не помню уже точно что это была за игруха.. (reply to 172296)

Illya: Спасибо! (reply to 172305)

Illya: success я так понимаю нельзя использовать, потому как это получается статус взаимодействия с контрактом...  Получается взаимодействие есть, а вот исполнение не факт.. (reply to 172298)

Denis: Там этих сацесов 3 три штуки (reply to 172309)

Yonathan: А если использовать ton вместо внутренней валюты, т.е. люди смогут использовать ton для обмена предметами между собой, но любые покупки у разработчика, а не у другого человека будут стоить реальных денег которые пройдут через маркетплэйс (reply to 172303)

Александр: поэтому в телеграм нельзя купить премиум за тон напрямую в приложении? (reply to 172313)

🎐*<@Maxim: 🫥 ребят привет! прохожу отправку длинных комментариев (тут) , отправляю .store_slice(" тут 123 единички") , потом .store_slice(" тут 127 двоек") и наконец .store_slice(" тут 127 троек") , а это код recv_internal  #вопрос почему я не могу отправить 127 единичек ( как в случае со 127 двойками/тройками), а только максимум 123 символа -  Tonkeeper пишет: "Вызов контракта ... Неуспешно" (и возврат денег)

Denis: Потому что чтобы мы знали что этот боди это текст (или любая другая операция) есть соглашение что первые 4 байта боди это опкод который говорит как трактовать дальнейшее (reply to 172315)

Denis: Для текста это 4 нуля

Andrey: 4 бита (reply to 172318)

Denis: Байта

Andrey: Пон

ᗩᒪᗴ᙭: Добрый день! Извините за глупый вопрос в чате :)  Я просто выше написал, а мне никто не ответил. Можете подсказать, я верно мыслю, что если мне нужен кастомный жетон контракт, то это только смотреть в сторону Blueprint (func, ts, tact) ? На Python или Js чистом написать его нельзя?   ПО теме:  Мне нужно сделать так чтобы жетон можно было минтить до 1 миллиона токенов , чтобы его мог минтить любой желающий за тонкоины и чтобы тонкоины можно было вывести потом со смарт контракта.

Denis: Да. funC и tact. На ts тоже не написать. (reply to 172323)

ᗩᒪᗴ᙭: Хорошо. А можете подсказать подобный функционал как правильно реализовать? Я не прошу сделать за меня, просто подскажите откуда черпать знания по вашему мнению. Пробовал статьи из docs официальных, но что-то кроме стандартов особо ничего не понял. (reply to 172325)

Asher: https://www.youtube.com/@WikiMar (reply to 172326)

ᗩᒪᗴ᙭: смотрел этот канал весь. тут показаны базовые реализации контракта, а как расширить функционал ни одного примера не нашел. или я не верно воспринял информацию :( (reply to 172327)

ᗩᒪᗴ᙭: Видимо нужно тогда смотреть в сторону Tact и пытаться понять логику. Владимира Алифмана тоже смотрел, но Tact побоялся использовать, т.к. он "молодой язык" .  Ладно, спасибо за помощь всем.

Vlad: Подскажите, кто работал с #нфт, в метадату можно видео положить  "content_url": ... "content_type":"video/mp4" Можно как то аудио положить?

VIKTOR: Можно видео, аудио не знаю (reply to 172342)

Daria: Положить можно что душе угодно, тут вопрос в том, чтобы кто-то из продуктов это поддерживал (reply to 172342)

Wow: Здравствуйте, есть какая-то статья/видео как сделать контракт с временем? Например как лок ликвидности?

&rey: Что-то такое? https://github.com/ton-blockchain/vesting-contract (reply to 172346)

Wow: Угу, спасибо большое (reply to 172347)

Alex: ребята есть у кого нибудь материалы по ton connect с использованием func ?

Daniil: ton connect и func никак друг с другом не связаны (reply to 172352)

Nik: Всем привет. Есть кто можэт разработать жэтон на TON (смарт контракт) для проведения ico

Nik: Нужна безапасность, ограниченая эмиссия, сжигание. Сам токен будет использоваться в комплексе проектов как внутрений токен. (reply to 172367)

User<6908616126>: Предоплату брал? (reply to 172381)

Daria: произошел скам, всегда надо заранее убеждаться в компетентности человека и его бекграунде (reply to 172383)

User<6908616126>: Тоже так думаю (reply to 172384)

⁠⁠: У тебя эта база открыта? (reply to 172386)

­😇: Нет)) то личная и никому не раздаётся (reply to 172388)

Michael: Ребят, ткните пожалуйста зеленого носом, каким образом я зная кошелек юзера (например через тонконнект, могу посмотреть какую-то нфт коллекцию на его кошельке, и  вытащить оттуда нфт и его айди) вытащить в плане посмотреть данные естественно, какую библиотеку нужно использовать?

Michael: благодарю (reply to 172393)

Michael: Спасибо, посмотрю (reply to 172395)

Никита Рязанов: Фреймворк blueprint, тесты. Как мне можно создать моковый wallet с которого я смогу перевести на контракт и на который в дальнейшем должен быть передан NFT?

Макар: Ты имеешь в виду создать кошелек в тестнете? (reply to 172400)

Никита Рязанов: Вроде бы нет, в тестах blueprint же какой-то свой blockchain создается (или я что-то не так понимаю) (reply to 172411)

Макар: Ты когда запускаешь тесты blueprint то он вроде бы как может задеплоить и в тестнет (reply to 172412)

Макар: Щас скину видео, которые могут помочь

Макар: Тут о том как создать кошелек в тестнете, получить на него тоны и как его активировать. Это где-то первая половина видео https://www.youtube.com/watch?v=q_xtTga6--c&list=PLOIvUFGfwP93tZI_WnaLyJsZlskU4ao92&index=2  А тут пример того, как задеплоили контракт в тестнет и на него отправляли тоны с помощью кошелька в тестнете https://www.youtube.com/watch?v=vZnR-pCiGNQ&list=PLOIvUFGfwP93tZI_WnaLyJsZlskU4ao92&index=3 (reply to 172412)

Daniil: myWallet = await blockchain.treasury('myWallet') (reply to 172400)

Никита Рязанов: Вместо "myWallet" в аргументе можно указывать любую строку? (reply to 172416)

Wow: Помогите пожалуйста, как я могу импортировать параметры: Maybe, createWalletTransferV3 для контракта?

Svαtoωλ‎: ERROR:pytonconnect:Received event id (=6) must be greater than stored last wallet event id (=44) кто знает, как пофиксить)?

— 2024-03-11 —

Juni: привет 👋 как я могу на месте сгенерить logical_time? хочу например запросить из апи транзакции от 1 минуты назад, нужно сгенерить logical_time и отнять от него минуту

Dmitry | backend4you.ton: никак, оно Logical и к реальному времени отношение иметь не обязано. берешь транзакции начиая с последней и пропускаешь ненужные (reply to 172433)

Juni: спасибо (reply to 172434)

reserved: здравствуйте, люди

reserved: нужен кодер что сможет написать игру для токена

Андрей: Подскажите, есть возможность из контракта написанного на func получить код в формате для tact ?

Denis: нет

Daniil: зачем? (reply to 172445)

Андрей: ну func я не совсем понимаю, а с tact уже знаком (reply to 172447)

Andrey: если переобразовать код из FunC в Tact это не поможет с пониманием (reply to 172448)

Andrey: потому что синтаксис то практически одинаковый, си-подобный

Daniil: у такта и фанси синтаксис сильно различается (reply to 172450)

Andrey: вообще нет, просто добавили структуры и трейты, остальной синтаксис один в один (reply to 172451)

User<6329807391>: Где можно скачать доп. зависимость Openssl, ибо ссылка ведет в никуда

User<6908616126>: https://slproweb.com/products/Win32OpenSSL.html (reply to 172453)

Egor: ребят привет, а что с методами по транзакциям у тон клиента?  в доке есть такой метод как getTransaction, по факту в пакете нет есть другие, такие как - getAccountTransactionsParsed или getAccountTransactions но они не работают или я что то не так делаю?  пример вызова - const trans = await tonClient.getAccountTransactionsParsed(Address.parseRaw(rowData.params.account_id), rowData.params.lt, Buffer.from(rowData.params.tx_hash), 1)  все возвращаются с ошибкой 500

dg: Приветствую,  Мы ищем специалиста в области смарт-контрактов для участия в нашем арт-проекте на базе TON ❤️  Вам предстоит занять позицию главного специалиста по TON и консультировать на “пальцах” остальных участников команды. Также мы ожидаем от вас разработку смарт-контрактов, интеграцию NFT и работу в связке с нашими фронтенд и бэкенд разработчиками.  От вас ожидается энтузиазм и профессионализм. Мы предлагаем работу на условиях доли в проекте. График свободный. Ежедневные совещания в 12:00 🫡  Пожалуйста, оцените свое время и возможности адекватно. Если вы беретесь за дело, то делайте его на совесть.

Vadim: Привет, есть вопрос. У меня есть линк на мини апп такого формата https://t.me/bot_name/open  Можно ли как-то доработать чтобы при открытии миниаппа у юзера всегда открывался чат с ботом? При открытии такой ссылки из внешного источника чат всегда открывается, но если использовать ссылку внутри тг то чат ботом не открывается.

Andrew: Здравствуйте, есть статья где рассказывается об отличии FunC и Tact?

Brain: доброго времени суток. подскажите, чем отличаются Purchase транзакции с bounce и без него. почему-то те которые с bounce в getgems не отображаются в истории транзакций.

Denis: по идее там должна быть и покупка помечена как неудачная

Denis: можете дать адрес?

Asher: Payment Channels - лучший симбиоз ончейн и оффчейн. Автор - @onedavidlivesey. https://www.youtube.com/watch?v=grOkzfrjVqg  "Сначала я рассказал о TON Payments в общем, о том что благодаря этой технологии можно транзакции строить вне блокчейна и без коммисий, потом рассказал о принципе работы платёжных каналов, что сейчас есть возможность обмена валютой между 2 участниками, а потом можно будет любое количество. Ну и показал, как работать с платёжными каналами на основе библеотеки tonweb"

Brain: сейчас (reply to 172467)

Brain: https://tonviewer.com/EQBcOLyeDvBnsqg5AQhLOmFqB0bP1DntQqYn0bL2rbbWCWXt (reply to 172467)

Brain: у них в ответе от api bounce:false или true должно быть? ) (reply to 172466)

Denis: а. это скамеры. (reply to 172470)

Brain: в каком смысле? (reply to 172474)

Denis: ну там фейковый контракт продажи. я сейчас поправлю - покупка тоже будет неудачная

Brain: спасибо) это как такое применяется? присылают историю такой фейковой покупки в качестве подтверждения? (reply to 172476)

Vlad: Использую @ton/core, при запуске скрипта выдает: Uncaught TypeError: (0 , paddedBits_1.bitsToPaddedBuffer)(...).copy is not a function

Vlad: import { Address, toNano } from '@ton/core';

User<6908616126>: Можно скрин кода пожалуйста (reply to 172480)

User<6908616126>: Ну либо текстом

User<6908616126>: И скрин ошибки

Vlad: import { StblStaking } from '../wrappers/StblStaking'; import { StblEscrow} from '../wrappers/StblEscrow'; import { JettonWallet } from '../wrappers/jetton/JettonWallet'; import { JettonMaster } from '@ton/ton'; import { Address, Cell, toNano, beginCell } from '@ton/core'; import { TonClient } from '@ton/ton';  const Master_Address = Address.parse("EQD5ty5IxV3HECEY1bbbdd7rNNY-ZcA-pAIGQXyyRZRED9v3");  // mainnet   export async function transferJettons(  // deposit     client: TonClient,  ...

User<6908616126>: Что это? (reply to 172485)

User<6908616126>: Это все что в файле, или есть еще что то?

Vlad: code

Vlad: Там дальше идёт код, большой файл (reply to 172487)

Vlad: Оно жалуется на Address.parse

Vlad: Причём локально у меня работает, а когда подключают к фронту начинает жаловаться на toncore

User<6908616126>: Скрин ошибки покажи пожалуйста полностью, с указаниями на строку/символ с ошибкой

User<6908616126>: Хммм (reply to 172491)

Никита Рязанов: Возможно ли как-то узнать более больше подробностей об такой ошибке?

&rey: У вас тон клиент какой-то кривой. Точно не TonClient4? (reply to 172460)

Egor: 4й использую я его выше определил, а потом как переменную использую (reply to 172498)

Dmitry: Кто может объяснить странное поведение жеттона? Переводили 90 GRAM с одного кошелька на другой.  Транзакция успешная. У отправителя видны потраченные 90 GRAM, а у получателя не видны пришедшие. В подробностях транзакции видно, что баланс получателя не изменился совсем. В чём загвоздка?

User<6908616126>: Ребят, такой вопрос, предусмотренали мультиподпись кошелька, и где об этом почитать?

IndexCorp: Всем привет! Вопрос про NFT если хочу использовать ipfs, то json файлы должны храниться там где графические файлы?  Я json файлы загрузил в гитхабе а файлы в cloud, итог не показывает изображение.

Dmitry: JSON может лежать в любом доступном месте. Графические файлы - тоже. Только их ссылка должна быть корректно прописана в JSON (reply to 172502)

User<6908616126>: В тестнете? Не факт что это ошибка метаданных, скорее это лаги чего-то(возможно ipfs) что картинка не отдается. Из 50нфт с одной и той же ссылкой в металанных изображения нет в 6 (reply to 172502)

IndexCorp: нет, в основном (reply to 172504)

User<6908616126>: 🤔 в маиннете я не пробовал деплоить, не подскажу. А вообще, в json надо проверить правильность ссылки, что бы она точно вела куда надо (reply to 172505)

User<6908616126>: https://docs.ton.org/develop/smart-contracts/tutorials/multisig-js  Сам нашел (reply to 172501)

IndexCorp: ipfs://QmQbTAojVQz77sqKYH5fTcK2xJ4DpZHNzCEreSS8qfsp64/1.mp4  типо такие ссылки получается не обрабатывает?

User<6908616126>: Нет

User<6908616126>: Это должен быть https насколько знаю

Owl-Hacker [$FPIBANK #Memhash🦉▪️🦒Σ 🐍]: Используй CF IPFS API (reply to 172508)

Juni: может быть ктото асембли читать умеет?)))  'LITE_SERVER_UNKNOWN: cannot apply external message to current state : External message was not accepted\n' +     'Cannot run message on account: inbound external message rejected by transaction F40CE4CCB9FE563424C2A162BD32F00DE122E3507B246965B65DB8FF1CBB3529:\n' +     'exitcode=33, steps=33, gas_used=0\n' +     'VM Log (truncated):\n' +     '...OW\n' +     'execute XCHG s1,s3\n' +     'execute LEQ\n' +     'execute THROWIF 35\n' +     'execute PUSH c4\n' +     'execute CTOS\n' +     'execute LDU 32\n' +     'execute LDU 32\n' +     'execute LDU 256\n' +     'execute ENDS\n' +     'execute XCPU s3,s2\n' +     'execute EQUAL\n' +     'execute THROWIFNOT 33\n' +     'default exception handler, terminating vm with exit code 33\n',   отправляю транзакцию в nextjs бекенде через тонвеб и тонцентр вот так:    sendMode: 3,   amount: <BN: 49410d40>,   seqno: 1,   toAddress: 'EQC0vxIRBtdrW4SA_nK36DqczD1EZWXhNHzDRjr8OlO9vzMS',   payload: 'some_test_code'   адрес с которого отправляю https://testnet.tonscan.org/address/EQD0DOTMuf5WNCTCoWK9MvAN4SLjUHskaWW2Xbj_HLs1KWtu

Maksim: неверный секно (reply to 172514)

Juni: вот сам уже вижу)) только задать вопрос стоит

Juni: откуда я такой взял..

Ruslan: Потому что деньги списали но нфт не была передана (reply to 172465)

Ruslan: Он выставлял на продажу не через гетгемс

Denis: возможно не моментально проиндексировались балансы? сейчас я вижу 90 грам у получателя (reply to 172500)

Ruslan: https://tonviewer.com/transaction/193dfd5b3ba67451a822acbdf94a8a97da01ee8342817be71f8f441ab83da106 вот одна из таких транзакций, нфт не передана но деньги он получил за нее

Ruslan: и по факту он продал одну и ту же нфт раз 5 вроде

Влад: Всем привет! В кошельке Wallet на виндоус при попытке входа пишет: Lite Server Not Ready: Cannot load proof for link... Кто-то сталкивался с этим? Есть идеи как пофиксить?

Juni: спасибо, но это возвращает тонвеб, может быть увидите где я туплю:  import { mnemonicToSeed } from "tonweb-mnemonic"; import TonWeb from "tonweb";  export const getTonWebWallet = async (tonweb: TonWeb, words: string[]) => {   const seed = await mnemonicToSeed(words);    const keyPair = TonWeb.utils.nacl.sign.keyPair.fromSeed(seed);    const WalletClass = tonweb.wallet.all.v3R2;    const wallet = new WalletClass(tonweb.provider, {     publicKey: keyPair.publicKey,     wc: 0,   });    const address = await wallet.getAddress();    return { wallet, address: address.toString(true, true, true), keyPair }; };    const hot = await getTonWebWallet(     tonweb,     (isTestnet       ? process.env.DEV_TON_TESTNET_HOT_WALLET_SECRET_WORDS       : process.env.DEV_TON_MAINNET_HOT_WALLET_SECRET_WORDS)!.split(" ")   );    const seqno = await hot.wallet.methods.seqno().call();    console.log("LOGGING_SEQNO", {     seqno,     address: hot.wallet.address?.toString(true, true, true),   }); ]]]   лог:  LOGGING_SEQNO {   seqno: 1,   address: 'EQD0DOTMuf5WNCTCoWK9MvAN4SLjUHskaWW2Xbj_HLs1KWtu' } (reply to 172515)

Juni: какой должен быть? так и не научился понимать? исходящих транзакций 6, всего транз 10, попробовал все от 0 до 10 руками уже, ошибка такая же, а возвращает секно 1, как и возвращал  апдейт: подошел секно 7, но возвращает метод seqno.call() все равно 1, пошел менять кошелек (reply to 172515)

#: можете пожалуйста подсказать как выводить на сайт подключенный адрес кошелька через tonconnect ui на чистом js ?

Никита Рязанов: Как лучше всего в Tact привести тип String к типу Address?

Timofey: @DEVS_GRAM скамер.

Timofey: @USER_DEVS

Timofey: Меняет юзеры (reply to 172534)

Tim: после того как ты написал, он обязательно перестанет их менять (reply to 172535)

­😇: Id запомни (reply to 172535)

Owl-Hacker [$FPIBANK #Memhash🦉▪️🦒Σ 🐍]: 👤 ⁣6890151979 ⁣👦🏻 USER ⁣🌐 @USER_DEVS

#: async function connectToWallet() {             const connectedWallet = await tonConnectUI.connectWallet();             if (connectedWallet) {                 // Save the connected wallet address to LocalStorage                 localStorage.setItem('connectedWallet', connectedWallet.address);                 // Display connected wallet address                 document.getElementById('connected-wallet-info').innerText = `Connected Wallet Address: ${connectedWallet.address}`;             }         }          // Call the function         connectToWallet().catch(error => {             console.error("Error connecting to wallet:", error);         });          // Retrieve and display connected wallet address after page reload         window.addEventListener('load', () => {             const connectedWalletAddress = localStorage.getItem('connectedWallet');             if (connectedWalletAddress) {                 document.getElementById('connected-wallet-info').innerText = `Connected Wallet Address: ${connectedWalletAddress}`;             }  почему подключенный кошелек не выводится?

User<6908616126>: toUserFriendly(TonConnectUI.account.address) (reply to 172531)

User<6908616126>: Написание может быть ошибочным, но суть эта. Там по ходу дела разберешься думаю (reply to 172541)

#: попробую (reply to 172542)

User<6908616126>: Если нет, через 10 минут кину код точный

User<6908616126>: toUserFriendlyAddress(TonConnectUI.account.address) (reply to 172543)

User<6908616126>: вот так

Dmitry: А где вы смотрите? Ни в тонскан, ни в тонвьюер не вижу входящих 90 gram на кошелёк UQBEMNbILdm1Sm1EHUaizEvrAEKdHv7w_QC-8Idx7zQCqh_P (reply to 172520)

Tim: А входящих и не будет, вы 0 указали в forward fee. Просто смотрите баланс (reply to 172547)

User<6329807391>: Кто знает как сделать так чтобы токен нельзя было еще печатать, нигде нет инфы

&rey: Перевести админские права на нулевой адрес. (reply to 172549)

Ihor: Привет! Подскажите плиз, почему на inactive адрес можно перевести средства но получить транзакции этого адреса через АПИ нет (пока он неактивный)?

&rey: Потому что toncenter. При этом у Orbs и Toncenter результат ещё и отличается. (reply to 172553)

&rey: Попробуйте другой индексер.

Daniil: это про miniapps? спроси в @devs (reply to 172559)

User<6470522929>: Прошу прощения, спасибо (reply to 172560)

Никита Рязанов: Необходимо ли добавлять поле query_id в каждом из Messge в Tact? Пытаюсь ловить кастомный Message, но выдает код ошибки 130, кажется, что receive на этот message не отрабатывает.

&rey: Чисто опционально и пока вроде даже бессмысленно. (reply to 172563)

Sasha🕊️: Добрый вечер. Перевели токен из эфира через мост, в итоге получили jtoken. Как этому токену можно добавить логотип?

Zaphod: Каждый ресурс рисует те логотипы, которые считает нужным (reply to 172566)

Sasha🕊️: У нас есть логотип, как его добавить для токена? Где это делается? (reply to 172567)

Zaphod: Где вы хотите его видеть? В кошельке? Тогда к разработчику этого кошелька. На бирже? В команду биржи запрос (reply to 172568)

Sasha🕊️: При создании токена лого можно добавить и оно потом автоматом везде появляется. При перегоне через мост такого механизма нет и надо всем писать? (Кошельки, сканнеры, дексы, аналитические порталы). Было бы неплохо, если это технически возможно вообще, при первом перегоне через официальный мост давать сделать логотип. (reply to 172569)

Otter: Ищу TON разработчика. Нужно реализовать арт-проект с NFT. Поднять NFT-маркетплейс. Перекиньте плиз знакомым, кто хочет пэт проект с оплатой) долгосрочное сотрудничество

Zaphod: Ну, например, у них будет тематический маркетплейс со своим лунапарком и блекджеком. Что в этом плохого, чтобы отгородиться от общей свалки? (reply to 172578)

Denis: а сегодня пескарь купил расширеный пакет тонапи. ну разве может быть реклама лучше? (reply to 168741)

Denis: ждём презентацию "причины почему тонапи крутота и как нам всем перейти во власть субботина"

User<6491979498>: Доброй ночи господа:)  Если есть разработчики смарт контрактов на TON которые сейчас свободны/ищут проект — подмигните мне в личку, пожалуйста. Очень в таких нуждаюсь 🙂

Salmon 🐾: Привет, ищу разработчика для создания игрового бота.  Напишите пожалуйста в личку. Если тут нет таких, но знаете, где искать, скиньте ссылку. Спасибо.

Dmitry: какого такого бота (reply to 172589)

Яша: игрового (reply to 172590)

Salmon 🐾: Пишу в личку ;) (reply to 172590)

— 2024-03-12 —

𝘈𝘭𝘦𝘹𝘦𝘺: Всем привет. Можно ли на питоне автоматизировать процесс создания нфт? А то вручную их делать долго

Vladimir: https://docs.ton.org/develop/dapps/tutorials/collection-minting  Вот с этого стоит начать. (reply to 172602)

𝘈𝘭𝘦𝘹𝘦𝘺: С этими доками можно себе мозг сломать. Я так ничего и не понял из них (reply to 172603)

User<6491979498>: Всем привет  По моему запросу ответил  "USER"—  будьте внимательны, вероятно скам, тк отправлял ссылку на чужой гитхаб и пытался получить предоплату как можно скорее. Потом почистил чат. Скрины есть, если что)  Пользователь @Mix_Users USER id: 6890151979 (reply to 172586)

User<6908616126>: "Создание нфт" вы имеете в виду автоматизация минтинга? Или прям создание, от генерации арта до деплоя картинок в облако, написания метаданных и минтинга? Уточните пожалуйста) (reply to 172602)

𝘈𝘭𝘦𝘹𝘦𝘺: Автоматизация минтинга. Генератор картинок я уже написал, и из-за его медленной работы (одна картинка в 1 секунду) придётся его переписывать (reply to 172606)

User<6908616126>: Такс. Ну тут только официальная документация. Но насколька я знаю, для питона документация очень не очень, смотрите для go, там все лучше написанно. А так, конечно можно, но нужно немного подумать

User<6908616126>: Кошельки? (reply to 172608)

𝘈𝘭𝘦𝘹𝘦𝘺: Окей. Я ещё когда то скачивал программу для авто-минтинга, но она не работала. Ну и пофиг (reply to 172609)

𝘈𝘭𝘦𝘹𝘦𝘺: Свою нужно попробовать сделать (reply to 172612)

𝘈𝘭𝘦𝘹𝘦𝘺: Прокси кошелёк? (reply to 172613)

❤️🐾 🏰 Tower: Так используйте документацию (reply to 172613)

❤️🐾 🏰 Tower: Значит плохо искали (reply to 172617)

𝘈𝘭𝘦𝘹𝘦𝘺: Документация там тёмный лес. Я тоже ничего дельного не нашел (reply to 172619)

❤️🐾 🏰 Tower: https://docs.ton.org/develop/dapps/cookbook (reply to 172620)

User<6908616126>: Мдэ...  from pytoniq import LiteBalancer, WalletV4R2 import asyncio  mnemonics = ["your", "mnemonics", "here"]  async def main():     provider = LiteBalancer.from_mainnet_config(1)     await provider.start_up()      wallet = await WalletV4R2.from_mnemonic(provider=provider, mnemonics=mnemonics)     DESTINATION_ADDRESS = "DESTINATION ADDRESS HERE"       await wallet.transfer(destination=DESTINATION_ADDRESS, amount=int(0.05*1e9), body="Example transfer body")     await client.close_all()  asyncio.run(main()) (reply to 172623)

User<6908616126>: Причем если на этой мнемонической фразе кошелек не висит, он создаст новый. И используя этот мнемоник ты везде сможешь с ним конектится

User<6908616126>: 100 за раз это только циклом (reply to 172625)

❤️🐾 🏰 Tower: А зачем 100? Ты ими сразу будешь пользоваться? (reply to 172625)

User<6908616126>: А вообще, документация не плохая, этот код именно оттуда. Да, там не указано, что бы создать кошелек надо сделать ......., но есть примеры кода, в которых есть ответ на 90% вопросов. Документация построена таким образом, что бы не каждый дядя вася из второго подъезда мог сделать какую то хрень и выложить ее в сеть

𝘈𝘭𝘦𝘹𝘦𝘺: Можно и функцией сделать. И 100 раз написать вызов функции. А ещё лучше, сделать 3 функции, которые будут делать это по 10 раз. А самый лучший способ - рекурсия (reply to 172628)

User<6908616126>: Так же не забываем про гитхаб библиотек, там кода еще больше, и комментарии избыточны. Ну и исходники библиотеки, там вообще все хорошо описанно, какая функция что принимает и что отдает (reply to 172632)

𝘈𝘭𝘦𝘹𝘦𝘺: Нужно нейронку на документации от тон обучить :) (reply to 172632)

User<6908616126>: Что..... (reply to 172634)

User<6491979498>: есть такая даже в магазине ChatGPT (reply to 172637)

❤️🐾 🏰 Tower: 🤔 (reply to 172635)

𝘈𝘭𝘦𝘹𝘦𝘺: Вроде бы это GPT builder (reply to 172639)

Tim: Возьми go bicycle лучше (reply to 172641)

User<6491979498>: может не совсем то, но понимает запросы связанные с TON лучше чем остальные

Tim: https://github.com/gobicycle/bicycle

User<6908616126>: Сейчас хрень написал на самом деле, к реальным проектам это не имеет отношения. Да и пусть уже человек решает, каким образом он 100 раз запустит этот код. Пусть хоть вручную запускает. Насчет ста вызовов функции, вручную прописывать 100 строк? Нет, ты сделаешь цикл, о чем я и написал. Зачем 10 вызовов функции, которая делает 10 кошельков? Возьми и вызови 100 раз ту, которая делает одну, это правильнее. Рекурсия, тут вообще молчу, в какой момент она остановиться должна, и как ты проследишь глубину рекурсии? А вообще, библиотека асинхронная, поэтому используйте прелести асинхронности. Ну кнш если вас апи блочить не будет🙂

User<6908616126>: Это я сюда (reply to 172634)

𝘈𝘭𝘦𝘹𝘦𝘺: Да, согласен, что я хрень написал (reply to 172648)

Vlad: https://github.com/ton-org/ton-core/blob/main/src/boc/cell/descriptor.ts  function getRepr   #35 bitsToPaddedBuffer(bits).copy(repr, reprCursor); (reply to 172492)

Sol: это где вы нашли? (reply to 172644)

­😇: Не скамер, был в АФК пару дней, появился и всё сделал. 🔥💪💪

Vlad: Для всех кому интересны нфт, сделал гайд по нфт с ончейн метадатой (на английском)   https://medium.com/nexton-node/nfts-with-on-chain-metadata-on-ton-tutorial-55ac0cbb17d5

dg: Ребята, привет. Могу я попросить скинуть мне пример технического задания на разработку смартконтракта? Заранее благодарю.

­: Может кто в курсе, как сейчас меняется комиссия за обычный перевод с учетом курса TON?  Комиссия всегда 0.01% от TON?  Или меняется чтобы была примерно 0.01$? (Сейчас не заметно чтобы менялось)

P.I 🦈: Здравствуйте, ищу разработчика который может сделать игру в Tg для мобильной версии.  Или кто может сделать игру наподобие бота Arraken

Андрей: Комиссия считается в ton, с $ никак не связана Валидаторы голосованием могут изменить конфиг где прописаны комиссии (reply to 172686)

­: То есть, они делают это не динамично? А где можно мониторить их «решение»? (reply to 172692)

sd: В кошельке при совершении перевода можно мониторить i think 🤓 (reply to 172693)

­: Так не интересно 😅 (reply to 172694)

Daniil: Было у кого-нибудь такое в toncenter? (В пэйлоаде экзотик ячейки - merkle proofs и updates) INVALID_BAG_OF_CELLS: bodyinvalid bag-of-cells failed to deserialize cell #78 [Error : 0 : level mask mismatch]  При этом через pytoniq отправляется без проблем. Ещё странно то, что в других кейсах мне удавалось отправлять экзотики. Может трабл в том, что сейчас в пэйлоаде есть ещё и merkle updates (раньше отправлял только proofs), а может просто какой-то странный баг.  Могу boc пэйлоада скинуть.

Alex: Такое уже тоже делается - @tonsupport_aibot (reply to 172637)

Stas: Привет, есть api для покупки NFT username ? подскажите в какую сторону копать ничего не нашел пока, хочу сделать расширение или что-то в таком духе чтоб покупать не сканируя телефоном

Daniil: пытаюсь понять в каком именно месте проблема, и кажется что она где-то в жсовском @ton/core, потому что с ним даже через ton-lite-client получаю такую же ошибку, а через pytoniq нормально отправляется. то есть проблема не в тонцентре. (reply to 172696)

Stas: tonkeeper://v1/txrequest-url/fragment.com/tonkeeper/rawRequest?id=sdfsdfjsdjkfnidweufwiefhweuf (reply to 172705)

Stas: Ну ничего не понятно, был бы там адрес

Stas: fragment.com/tonkeeper/rawRequest?id=NxZjN_6G-PpBrhcUmHUqDGhV

Stas: Вот валидный

Stas: Что с этим манифестом делать, где почитать ?

Kon: в ton-core 0.53 нормально отправлялись экзотики, что-то может поломалось до версии 0.56 в @ton/core (reply to 172708)

Daniil: экзотики в целом и сейчас отправляются. там возможно баг конкретно с мёркль апдейтами, потому что и мёркль пруфы, и library reference я уже юзал с @ton/core (reply to 172722)

Vlad: У меня 0.56 во время билда фронтенда такое выдает (reply to 172650)

Stas: {"version":"0","body":{"type":"sign-raw-payload","params":{"valid_until":1710241104,"messages":[{"address":"EQDBOKFK2kc8RdcSSNHVVbx47BTEmpHw7ZxpG1QHr3if_yXu","amount":5000000000}]},"response_options":{"callback_url":"https:\/\/fragment.com\/tonkeeper\/rawResponse?id=8q3Hd6UjHvUmg_o07AfMhfsa&qr=1","return_url":"https:\/\/fragment.com\/tonkeeper\/rawResponse?id=8q3Hd6UjHvUmg_o07AfMhfsa","broadcast":true},"expires_sec":1710241104}} (reply to 172726)

Stas: Ну я вижу кошелек, вижу amount, как с этим быть пока не пойму

Stas: Думаешь только это ? (reply to 172733)

Egor: гайз салют, а где можно тотал саплай и маркет кап тона вытащить?

Stas: Мб какие-то еще заголовки (reply to 172738)

Egor: а апи какой нибудь нет, или из тон клиента там тащить (reply to 172740)

Stas: Звучит логично

Stas: Пока думаю как попробовать с минимальными потерями в случае чего

Stas: https://tonviewer.com/EQAYGTiJKWVxWi25va1VduQ6bvOJO0MGsbLXpTekFHGxDRq5

Stas: Типа идея в том что каждое NFT получает как бы адрес похожий на кошелек

sd: Не надо раздавать вредные советы, ещё на зачатке нфт в сети не один человек потерял так монетки. Не говоря уже о том, что если отправить монетки на юзернейм после завершения аукциона, они там и останутся. (reply to 172745)

Stas: В JSON как раз кошелек NFT

User<6908616126>: Это апи официальное, но непубличное, это ответ официальной поддержки (reply to 172707)

Андрей: Пожалуйста пишите одним сообщением, вы своим дроблением во первых спамите, во вторых что бы прочитать ваши мысли приходится тратить больше времени (reply to 172748)

Kamran: Привет 👋🏻  Извини если не по адресу, ищу людей кто может собрать простую игру в WEB app. Может знакомые есть кто может помочь, буду признателен за помощь.

dg: Запрос на участие в арт проекте "The Wall of .TON"  Приветствую, Меня зовут Марат, проект менеджер арт проекта "The Wall of .TON"  "The Wall of .TON – это инновационный арт проект, объединяющий искусство и экосистему TON. Проект представляет собой стену из 10000 ячеек, каждая из которых размером 100x100 пикселей. Участники сообщества TON могут загружать свои изображения в эти ячейки, создавая уникальное произведение искусства, отражающее дух сообщества. Быть частью The Wall of .TON означает быть частью команды, работать вместе для достижения общей цели и оставить свой след в истории блокчейн-искусства."  Наша команда предлагает уникальную возможность принять участие в проекте. Будем рады любому вашему ответу.  По всем вопросам в личку 👋 Заранее благодарю.

Mohammad: Я пытаюсь написать тесты для контрактов Telemint (https://github.com/TelegramMessenger/telemint/tree/main), но не могу отправить это внешнее сообщение, чтобы коснуться контракта после развертывания.  Я получаю сообщение «Ошибка при выполнении транзакции: внешнее сообщение не принято смарт-контрактом». Я уверен, что контракт активен (путем отправки внутреннего сообщения с комментарием #topup) и у него достаточно баланса для принятия сообщения из внешних источников.  Я делаю что-то неправильно?

Max: Господа бизнесмены, такой вопрос. Кто-нибудь занимается исследованиями безопасности блокчейна в принципе?

🔑: Многие сняли свои позиции после скандала с луной. Аудиторские конторы избегают рисков связанных с репутационными потерями (reply to 172773)

Max: А можно поподробнее с ситуацией? Или может будет ссылка на статью какую-нибудь?

Vladimir: "Terra LUNA, Lunc" в поисковой запрос. (reply to 172775)

🔑: Все так громко произошло что это первые строки выдачи даже по луне просто (reply to 172775)

🔑: Выходит это первый случай атаки оттоком ликвидности. Потом фтх и дальше все стали защищаться уже

🔑: Ну и просто скам, потому как все это делалось чуть ли не с домашнего компьютера вручную, имею в виду управление и сбор обеспечения

🔑: Я предлагаю использовать для этих целей рыночные движки дефи апок. Нарример из ааве можно было бы сделать фонд, который бы кушал залогом саму луну.

🔑: Все было бы прозрачно и нерушимо

🔑: В самой аве предусмотрена ликвтдация с выносом залога на аукцион

🔑: Использовать команду менеджеров, офис и настольный пк для операций таких объемов было чревато и в принципе никак не связано с разработкой блокчейн приложения

🔑: Скорее это был просто хайп и пирамида

Kamran: Ссори если не по адресу, ищу людей кто может создать простую игру в WEB app. Может знакомые есть кто может помочь, буду признателен за помощь.

🔑: Это на кворк (reply to 172788)

🔑: Поищи просто подрядчика среди аутсорсеров или фрилансера найди

Max: @remote_acces ну это ситуация имеет отношение к фроду, а меня скорее интересует безопасность с точки зрения уязвимостей самой технологии, начиная от написания смарт контрактов, заканчивая выдвижение на площадках различных NFT, монет и т.д.

Max: Просто исследований на эту тему не шибко много

🔑: Есть постоянные проблемы, например как проблема доверия вавилонских генералов. Они указывают на критическую уязвимость всего, что не хранится и записывается децентрализованно в текущей переферии. Многие банки, компании, боятся использования удаленных активов и сред обработки в виде блокчейна из за киберрисков, которые опасны в уаловиях точки сборки этих компаний и институтов даже, где они решили свои проблемы в пример проблем хранения и передачи инфы своими палеалитическими решениями, которые становятся настолько громоздкими и неуправляемыми в развитии что препятствуют переходу к децентрализованным решениям для размещения своих разработок и сервисов. Чем хорош тон, что он готовит это окружение. Ни одна сеть больше не приложила столько усилий чтобы закрыть этот момент (reply to 172792)

🔑: А сам код делится на сертифицированный и нет, ты можешь почитать подробнее про принципы solid например. Это поможет составить запрос для анализа сетей

🔑: Точнее их алгоритмов и методов защиты записей и репликации

Max: @remote_acces спасибо за наводку, так теперь понятно куда в какую сторону смотреть

🔑: Ты задал вопрос на котором 3трлн держится (reply to 172799)

🔑: Чтобы ответить на него нужно итак много знать

🔑: Надо уточнять вопрос

🔑: Ты делаешь что то и рассматриваешь исрользование блокчейна?

Stas: Нет просто так не нужно, тем более с флажком bounce: false иначе даже не вернутся (reply to 172745)

Stas: https://tonscan.org/address/UQB71TyGuP_CCzPXdBPRudcO4OWJYHl3J4Vl4J394nChLjTW#transactions

Maksim: мне кажется проблема не в меркль апдейтах, а уровнях. в этой строчке тон-кор кладет в реф дескриптор level ячейки, вместо маски level'a (вот сорс). В результате на ячейках с уровнем больше 1 реф дескриптор собирается неправильно (например для ячейки с уровнем 2 маска должна быть 0b11, то есть 3, а тон-кор кладет туда 2). Попробуй в той строчке заменить cell.level() на cell.mask.value и проблема поидеи пройдет (reply to 172723)

Stas: 9 минут назад была отправлена с флагом: bounce: false — не удивительно что не вернулась

Daniil: там ещё в тон коре маска уровня для prunedbranch странно считается (если с pytoniq сравнивать). но мб одно и то же в результате получается, я не уверен  а эту штуку которую ты предложил сейчас проверю (reply to 172810)

Stas: Тут есть нюанс, отправил зачем то ключ text: "" (reply to 172809)

Stas: А это с bounce: true не вернулось 😭😭😭 https://tonviewer.com/transaction/bab63e8c8f6cac314d4944ff27a7dfd2a96052f1a54282170a838ab039d4954b

Марк: Всем привет 🤝

Марк: Начинаем билдить сейчас свой проект и появились вопросы 1. Можно ли в вестинге установить разблокировку разом по окончанию периода, а не постепенно 2. Можно ли прописать смарт контракт таким образом, чтоб цена за токен всегда была фиксированной в течение пресейла (необходимо для концепции игры)  Заранее спасибо за ответ 🤝

&rey: 1. Да. 2. Да. (reply to 172818)

Марк: Спасибо

Марк: Я правильно понимаю, что цена будет всегда фикс пока мы не залистим токен где-либо? (reply to 172819)

&rey: Цена токена, по сути, не определена. (reply to 172821)

&rey: Вы можете создать контракт, который вам даст обменять одни токены на другие (либо на нфт/тоны). Если он один, то можно назвать его цену рыночной.

&rey: Если контрактов несколько и цены в них разные, то будет арбитраж, пока цены не сравняются или в одном из обменников не закончится резерв (liquidity pool).

Марк: То бишь прописать в контракте, что токен будет обмениваться по курсу (к примеру) 1 ton/ 1 наш жетон

&rey: Да, так вполне можно. (reply to 172825)

Марк: Спасибо, а я возможно не увидел, а может и нет готовых пресетов на сайте ton foundation? (reply to 172826)

&rey: Вроде так и не появилось. (reply to 172827)

Марк: На гитхабе тоже нет библиотеки?)

Марк: Или для того, чтоб просто установить курс обмена достаточно одной строчки кода в стандартный контракт инициированный при минте жеттона, через тонминтерс?

고은: Всем привет! я отправляю тоны как-то так:             const account = await getAccount();             const keyPair = await mnemonicToPrivateKey(account.seed.split(' '));             const WalletClass = tonweb.wallet.all.v4R2;             const wallet = new WalletClass(tonweb.provider, {                 publicKey: keyPair.publicKey             });             const transfer = await wallet.methods.transfer({                 secretKey: keyPair.secretKey,                 toAddress: toAddress,                 amount: finamm,                 seqno: seqno,             });             console.log(await transfer.estimateFee());  и мне нужно получать четкую комиссию, но я получаю комиссию в консоль логе складывая все, меньше чем должно быть, тоесть на выходе по функции estimateFee выходит 5808030, а по факту получилось 5808036

Ivan: storage fee не учитывается видимо  Но его и не посчитать точно (reply to 172834)

Tim: Estimate на то и estimate. Чтобы понять порядок комиссии, а не пытаться в 0 отправить. Излишки надо возвращать юзеру просто

Daniil: там видимо ещё аналогичная проблема в другом месте:  - https://github.com/ton-org/ton-core/blob/c88c2c079ce83bd1cf59f58fe0ac834ca8420056/src/boc/cell/wonderCalculator.ts#L132 (reply to 172810)

­😇: () recv_internal (int balance, int msg_value, cell in_msg_full, slice in_msg_body) impure {     var cs = in_msg_full.begin_parse();     var flags = cs~load_uint(4);     if (flags & 1) {         ;; ignore all other bounced messages         return ();     }     initialize_globals();     slice sender_address = cs~load_msg_addr();     (int src_wc, int src_addr) = parse_std_addr(sender_address);     cs~load_msg_addr(); ;; skip dst     int value = cs~load_coins(); ;; value     cs~skip_bits(1); ;; skip extracurrency collection     cs~load_coins(); ;; skip ihr_fee     int fwd_fee = cs~load_coins();      throw_if(403, value < 50000000);      int ref_code = 0;     int op = -1;     ifnot (in_msg_body.slice_bits() < 32) {         op = in_msg_body~load_uint(32);     }      int withdraw = -1;      if (op == 0) {         ifnot (in_msg_body.slice_bits() < 48) {             int inner_op = in_msg_body~load_uint(48);             if (inner_op == 131294808269938) {                 withdraw = 1;             }              ifnot (inner_op == 131294808269938) {                 ref_code = inner_op;             }         }     }      if(op == -1) {         ref_code = -1;     }      if(withdraw == 1) {         try_withdrawal(value, src_wc, src_addr);         return();     }      if (op == 1) {         throw_if(403, src_addr != owner_addr);         int man_addr = in_msg_body~load_uint(256);         int ref_code = in_msg_body~load_uint(48);         ref_codes = ref_codes.udict_set(48, ref_code, begin_cell().store_uint(man_addr, 256).end_cell().begin_parse());         store_data();         return ();     }      if (op == 0) {          throw_if(403, src_addr != owner_addr);         send_money(src_wc, destroy_addr, 0, null(), 128 + 32);         return ();     }  вроде научился разрушать контракты, но теперь другая проблема в этой части кода, не принимает рефкод так как у destroy тоже ор = 0 . Помогите реализовать функционал, буду очень благодарен!

Maksim: а если эти 2 места пофиксить ошибка с отправкой исчезает? (reply to 172838)

Daniil: второе которое я скинул я что-то не смог сам исправить пока что  но если первое поправить как ты выше советовал - boc генерируется нормальный, а вот подпись для отправки с кошелька неправильно считается. как я понял это из-за уровней хеш ячейки не сходится. думаю если второй момент поправить то будет работать. (reply to 172840)

Denis: а она тоже не чёткая

Minter: Наверно проставлена фиксированная комиссия (reply to 172850)

Андрей: Вы похоже еще не знаете про режимы отправки 64 и 128 https://t.me/tondev/78352 (reply to 172848)

User<6908616126>: это он тебе говорит что много запросов отправил (reply to 172863)

Василий: Это ограничение частоты запросов. Либо отправлять не больше одного в секунду, либо получить api ключ (reply to 172863)

User<6908616126>: 429 http код говорит to many requests, что значит ты уперся в лимиты апи акка своего, покупай план выше для получения большего кол-ва запросов в секунду

Ruslan: 10/сек стандартный лимит с ключом. Без ключа 1. Ключ вот тут в мини-аппе: @tonapibot (reply to 172863)

Joshua: Привет. А есть ли какая то возможность разослать жетоны с помощью highload кошелька какой то либой на питоне? Может пример у кого то есть как выглядит, буду признателен

Дмитрий: Очень интересно читать ваши сообщения 👍 (reply to 172795)

Mikhail: Всем привет ! Подскажите пожалуйста, в какой переменной выводится адрес кошелька после подключения ? (Использую нативную js библиотеку)

User<6908616126>: toUserFriendlyAddress(TonConnectUI.account.address)

User<6908616126>: речь же про тонконнект?

Mikhail: Да) (reply to 172874)

User<6908616126>: Тогда вот (reply to 172873)

Mikhail: TonConnectUi

Mikhail: Ой спасибо большое !

Mikhail: А то документацию листаю , слеповат))

User<6908616126>: Да, он самый. Но я по секрету(не секрет это кнш) что и tonconnectui и tonconnectsdk и tonconnect-react одинаковые и все функции у них дублируются (reply to 172877)

User<6908616126>: Да, юзерфрендли адрес там спрятан, это правда (reply to 172879)

Mikhail: Да вот пока листал - заметил ))

User<6908616126>: Блин, вот сейчас вожусь.... Ребят, как поставить лайтсервер без фуллноды? Пытаюсь запустить opentonapi(исходники tonapi.io), глобальный конфиг не работает, он ловит ошибку с блоками. А свой сервер я чет туплю как поставить

Андрей: Никак, это одна и та же сущность (reply to 172883)

Alacrity: Какой storage лучше выбрать для tonconnect для бота, в котором будет много пользователей?

Brain: лайтсервер - это один из режимов работы фула https://docs.ton.org/participate/run-nodes/full-node#enable-liteserver-mode фулсервер будет работать в режиме лайт, если принудительно этот режим включить (reply to 172883)

User<6908616126>: Мдэээ, этого я и боялся..... Ладно, спасибо вам, прйду компилить фулл.....

Spite: Нет. Лайт сервер работает поверх ноды и никаких режимов других у него нет.   Он просто предоставляет доступ к информации, которую можно достать из ноды и позволяет отправлять экстерналы (reply to 172886)

Brain: я не говорил, что у лайтсервера есть режимы. я сказал, что это режим работы фулноды. наверное не так выразился (reply to 172917)

Brain: все так (reply to 172917)

Spite: имею в виду это не какой-то отдельный режим работы ноды самой (reply to 172922)

Brain: ну в доке это называется "Liteserver mode", по сути, получается все тоже самое только сервер открывает ендпоинты наружу для клиентов, если я правильно понял (reply to 172924)

Brain: интересно, а почему тогда разные системные требования для лайт и фул

Spite: это где? (reply to 172926)

Brain: фул https://docs.ton.org/participate/run-nodes/full-node#hardware-requirements лайт https://docs.ton.org/participate/run-nodes/full-node#hardware-requirements-1 (reply to 172929)

Spite: This requirements are for a full node with a validator.   Там валидатор и без валидатора (reply to 172933)

Brain: а, точно, теперь понятно (reply to 172934)

Harvest: Ребят, а если я буду допустим на расте разрабатывать, я бы мог создавать что то в блокчейне тона, или мне нужно сначала такт или фанси какой нибудь ?

Zaphod: Взаимодействие с блокчейном можно делать на любом языке, а собственно смарт контракты - на фанси, такт (reply to 172944)

Harvest: А что проще освоить ? (reply to 172949)

Zaphod: Зависит от твоего бекграунда, мне как джависту ближе funC, а как ассемблерщику fift (reply to 172950)

Harvest: Господи)

Harvest: Хардкорный ты

Harvest: А как начинающему

Brain: а начинающему учить асм)) (reply to 172954)

Brain: какой самый быстрый способ из истории транзакций у NFT выбрать те, которые являются исполненными заявками смарт-контракта аукциона? А то в истории транзакций это выглядит просто как отправка. Возможно ли не погружаясь в каждое из событий найти то, которое относится именно к аукциону?

Brain: https://www.youtube.com/watch?v=mQxU5fc3d3c (reply to 172954)

— 2024-03-13 —

fatality: В ton реализован механизм автоматического изменения fee? За последнюю неделю, стоимость ton выросла в несколько раз, а fees остались на прежнем уровне. Планируется ли уменьшение fees? Это ситуация мне не очень нравится.

IndexCorp: Всем привет, пожалуйста подскажите Как использовать метод no-cache в nft, куда его прописать?

Dmitry | backend4you.ton: А что это за метод? (reply to 172971)

IndexCorp: тонвювер метаданные не обновляет, в техподдержке написали использовать этот метод. Что за метод я так и не понял  В других эксплорерах обновлены и отображают корректно. (reply to 172973)

Denis: No-cache это http заголовок для картинки если вы обновили картинку без изменения урла

Denis: Гуглить http header no-cache

고은: import { Address } from "@ton/core"; import { mnemonicNew, mnemonicToPrivateKey } from "@ton/crypto"; const BN = TonWeb.utils.BN; export default async function send_ton(amount, to, contract, decimals = 18, gas) {     if(contract == 'ton') {         try {             let toAddress = to;             const tonweb = new TonWeb(new TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC', {apiKey: 'apikey'}));              const account = await getAccount();             const keyPair = await mnemonicToPrivateKey(account.seed.split(' '));             const WalletClass = tonweb.wallet.all.v4R2;             const wallet = new WalletClass(tonweb.provider, {                 publicKey: keyPair.publicKey             });             let seqno = await wallet.methods.seqno().call()             console.log(seqno)             if(seqno == null || seqno == 'null') {                 seqno = 0;             } else{                 console.log(seqno)             }             const balance = new BN(await tonweb.provider.getBalance((await wallet.getAddress()).toString(true, true, true)));             if (TonWeb.utils.toNano(amount.toString()).gte(balance)) {                 console.log('there is not enough balance to process the withdrawal');                 throw('balance');             }             const info = await tonweb.provider.getAddressInfo(to);             if (info.state !== 'active') {                 toAddress = new TonWeb.utils.Address(toAddress).toString(true, true, false);             }             const ammo = parseFloat(amount) * 1e9             const finamm = ammo;             console.log(seqno)             const transfer = await wallet.methods.transfer({                 secretKey: keyPair.secretKey,                 toAddress: toAddress,                 amount: finamm,                 seqno: seqno,             });             await transfer.send()             return transfer;         } catch(e) {             throw(e);         }     } else {         return     }    }  Здравствуйте еще раз, как возможно при таком коде транзакции рассчитать предстоящую сумму комиссии точно?

Denis: https://t.me/tondev/172836 вам же уже ответили (reply to 172979)

Denis: мало того. эстимейт в тонцентре возвращает комиссию только самой первой транзакции в цепочке

IndexCorp: но мне ведь нужно чтоб обновились метаданные а не картинка (reply to 172977)

Denis: Ну тогда вам в поддержке не то ответили

Denis: Метаданные должны обновиться сами, но задержка до суток

Denis: Если без смены урла

IndexCorp: смена урла картинки долго обновляется?

고은: так я задала точный вопрос возможно ли рассчитать комиссию так допустим чтобы отправить весь баланс и на балансе осталось ровно 0 ton (reply to 172980)

Brain: Приветствую. Есть ли способ отловить из истории транзакций  нфт, те транзакции которые относятся к покупкам на аукционе, а то я что-то не нашел способа, кроме как вытаскивать из каждого трансфера кошелек получателя/отправителя и там уже смотреть на интерфейс смарт-контракта.. Если брать просто историю событий конкретного нфт, то трансферы от аукционов как будто бы не отличимы по данным которые возвращает api, либо я не разобрался.. (reply to 172956)

고은: и также чтобы пользователь понимал сколько у него останется после вычитания комиссии. (reply to 172988)

고은: и также чтобы пользователь понимал сколько у него останется ton точно после вычитания комиссии (reply to 172988)

고은: даже если не этим методом, просто спросила какие возможные методы для этого есть если этот не подходит.

Андрей: Абсолютно точно рассчитать комиссию нельзя (reply to 172988)

Andry: Всем привет, подскажите - что-бы активировать кошелёк достаточно входящей транзакции на него, или необходима и исходящая?

Denis: а зачем вам его активировать? но нужная исходящая, если совсем упрощать.

Andry: Я просто в тонскане смотрю, вхд транзакция есть, а состояние - Неактивный Теперь понятно. Спасибо. (reply to 172997)

고은: как тогда отправлять весь баланс другому пользователю? (reply to 172994)

Denis: там есть специальный флаг у сообщения 32

Daniil: 128 (reply to 173002)

Denis: да. перепутал

Denis: обычно используют вместе

Andry: И другой вопрос, как можно подтянуть свою сид фразу, например из холодного кошелька? 🤔

고은: хорошо, я укажу sendMode 128 а как пользователю отобразить какой баланс он отправит после вычета комиссий? (reply to 173002)

Denis: обратитесь к программисту дизайнеру

고은: facepalm?

Denis: нет. в плане серьёзный совет

고은: мне нужно: 1. Отправка тон ( которая уже работает, код выше) 2. Расчет комиссии

고은: 3. Отправка всего баланса после вычета комисии с флагом 128

Denis: ну вот такая реальность. когда отправляешь всё не знаешь сколько именно отправится (например пока подписываешь может тебе вообще еще миллион прилететь и он тоже отправится).

Denis: как эту реальность показать юзеру это вопрос к дизайнеру

고은: причем тут дизайнер? я хочу вывести текущую комиссию для этой транзакции в console.log

Denis: ну отправьте, длождитесь и выведите реальную комиссию

Denis: если вам надо с точностью до нанотон

고은: хорошо, как тонкипер расчитывает комиссию ДО транзакции?

Denis: ну тонкипер там вообще звездолёт. начать с того что это вообще не совсем комиссия

Denis: например если в результате расчётов получится число с другим знаком то слово комиссия заменится на refund

Denis: во-вторых там нарисован значок ~ если присмотритесь

Denis: это приблизительная комиссия

Spite: Это как (reply to 173022)

Denis: ну например ты трансферишь нфт а у тебя на этой нфт лежали деньги и они тебе прилетят внутри сдачи.

Denis: поскольку мы скрываем от юзера всю эту дичь про исходящие месаджи и входящие сдачи нам где-то надо показать подобные случаи

Denis: по этому комиссия в кипере это на самом деле разница между твоим состоянием до эмуляции и после эмуляции за вычетом тех операций где мы видим явное перемещение тонов (например трансферы тонов или свапы)

Andry: Нет такого варианта, или никто не знает? (reply to 173006)

IndexCorp: Тут любой может предложить свою идеи или только разработчики?  https://github.com/ton-society/grants-and-bounties

Tim: Любой, но если опыта нет попросите кого нибудь сделать ревью перед публикацией (reply to 173032)

IndexCorp: я опубликовал свою проблему, пока обсуждений мало

Семён: Такая же проблема. Кто нибудь нашёл решение? (reply to 136111)

🔑: О чем именно? (reply to 172871)

Svαtoωλ‎: Кто что скажет за это?) (reply to 173036)

Svαtoωλ‎: У меня ориг тонкипер в плей маркете не показывается прост

otlejal: разверни локально ноду (reply to 173040)

Андрей: Скачай apk с сайта (reply to 173045)

Svαtoωλ‎: а тонкипер х? вроде норм по скринам) (reply to 173050)

Андрей: Скачайте, импортируйте свою сид-фразу, и потом сами расскажите уведут ли ваш кошелек и через сколько) (reply to 173051)

Ural: так он в репе тона лежит, я его сам из исходников собирал (reply to 173052)

Андрей: В репе тона нету исходников tonkeeper (reply to 173055)

Ural: точно, попутал, у кипера своя репа https://github.com/tonkeeper (reply to 173056)

Timofey: Кто поможет сжечь лп токен и забрать токены из ликвидности? https://tonviewer.com/EQB7yVrrEqbrEg22AGexxWCJ1UuCLWt6dkhZ6fFqJzt8H6Xa

Никита Рязанов: Есть ли преимущества в использовании IPFS вместо обычного S3 для хранения метадаты NFT?

Vladimir: ну в S3 можно поменять, в IPFS насколько я понимаю нельзя уже будет поменять. Это и плюс и минус (reply to 173062)

Daniil: в IPFS один файл может хранить много узлов, тем самым снижая задержку сети (reply to 173062)

Andrey: лучше уж тон сторадж, чтоб по канону было

Vladimir: Почему так дорого стоит забирать нфт с аукциона?

Denis: ну тут вопрос что считать дорого. вы отправляете 1 тон и вам вернется 0.98

Denis: 0.02 тона впрочем на нынешние деньги это 10 рублей или около того

Vladimir: Ну раньше вроде меньше было надо отправлять

Алекс: Очень дорого, и правда (reply to 173070)

Алекс: Это еще в эфире не покупали нфтишки

Афоня: Так же вроде комиссия обратно приходит

Афоня: Кешбек

Алекс: Там за транзакцию нужно отдать сейчас баксов 60-80

Афоня: Подорожал тон потому что (reply to 173073)

Rus: Доброго времени! Возможно ли реализовать перевод тон в тг бот только с верифицированных кошельков?

rends_east: что значит "только с верифицированных"? (reply to 173080)

Rus: Запрет на транзакции для тех, кто не прошел верификацию (reply to 173081)

rends_east: Сделайте возврат средств для всех, кто в контракте не указан Можно просто не учитывать эти транзакции (reply to 173082)

Andrey: 0.02 тон это очень дорого? (reply to 173074)

Никита Рязанов: Я так понимаю мне самому необходимо поднять storage daemon ноду и уже работать с помощью клиента с ней? Не совсем понимаю, как другие юзеры могут обратиться к файлу после его загрузки, он же загрузится на локальную ноду (reply to 173065)

Andrey: Точно так же как люди собрались загружать с IPFS или S3 🙂 (reply to 173087)

Andrey: можно воспользоваться https://github.com/xssnick/tonutils-storage (CLI клиент)  или  https://github.com/xssnick/TON-Torrent (GUI клиент) (reply to 173087)

Никита Рязанов: Получается ноду необходимо держать запущенной постоянно для постоянного доступа?

Andrey: Точно так же как и для IPFS/S3 (reply to 173091)

Andrey: просто в случае с S3 как правило это делают провайдеры-хостеры

Dmitry | backend4you.ton: Которые за это хотят денюжку. Tonbyte.com вам в помощь (reply to 173093)

Алекс: Сарказм) (reply to 173085)

racoonqq 🧑🏽‍💻: Кто знает Node JS и может быть использовал MITMProxy библиотеку очень нужна помощь Извиняюсь что не по теме

고은: вот отправила я транзакцию с модом 128              const transfer = await wallet.methods.transfer({                 secretKey: keyPair.secretKey,                 toAddress: toAddress,                 amount: finamm,                 seqno: seqno,                 sendMode: 128             });             await transfer.send() отправилось у меня 0.186388994   хотя amount был 0.1 теперь вопрос, как рассчитывается вот это 0.186388994 и возможно ли получить эту сумму до отправки чтобы вывести на экран пользователю (reply to 173002)

Denis: в чате не хватает стикеров

Denzel': Всем добрый вечер!  У кого-то есть гайд или методичка как подключить Ton Connect на сайт?  Слышал там нужен ton dns иметь.   Буду рад любой информации. Спасибо!

Tim: Не нужно. Только https домен (reply to 173113)

Dmitry | backend4you.ton: https://docs.ton.org/develop/smart-contracts/messages#message-modes  128 "Carry all the remaining balance of the current smart contract instead of the value originally indicated in the message" (reply to 173111)

Denzel': А как его получить, не покупая сервер? (reply to 173114)

Tim: Ну на гитхаб можно положить

Denzel': Спасибо! (reply to 173117)

Dmitry | backend4you.ton: Настйроки , скролл в самый вниз, потыкать в лого подряд 5-7 раз (reply to 173122)

Dmitry | backend4you.ton: так стоп, а куда оттуда дели тестнет...

Dmitry | backend4you.ton: если теперь "добавить кошелек" то появился четвертый пункт "аккаунт в тестнет" (reply to 173126)

Dmitry | backend4you.ton: jobs.ton.org (reply to 173131)

DEVERSEE: Может кто нибудь написать? Страницу для бота в которой будет кнопка коннекта и кнопка клейм с отправкой транзакции на контракт

DEVERSEE: Не за бесплатно

DEVERSEE: Есть тут кто занимается react js

Никита Рязанов: Как с помощью https://github.com/xssnick/tonutils-go/tree/master можно взаимодействовать с ton-storage?

Oleg: https://github.com/xssnick/tonutils-storage (reply to 173149)

User<6908616126>: И рубрика тупые вопросы, ответы на которые есть в документации(наверное), но мне надо убедиться на вашем опыте. Все еще пытаюсь запустить лайтсервер, и такая проблемка возникла, ip белый обязательно иметь, или можно спрятать ноду за локальную сеть? Мне надо только тянуть данные, для апи. И еще вопрос, если установка ноды с флагом -m lite устанавливает без валидатора, почему при запуске консоли вылетает ошибка валидатора....

Bulat: Добрый вечер, подскажите пожалйста как можно саязаться с поддержкой кошелька TON, в боте не отвечают уже 2 недели

User<6908616126>: Помогите пожалуйста🙏 (reply to 173154)

Андрей: если нода в локальной сети за роутером, то нужно пробросить порты, при условии что у роутера белый ip. при установке мтк устанавливать нужно только с -m full (reply to 173154)

User<6908616126>: Эх, белый ip все таки обязателен.... Спасибо...

Человек: Так реакт или тгбот? (reply to 173138)

Alacrity: Какой storage выбрать для tonconnect. Пишу бота на aiogram

— 2024-03-14 —

User<6908616126>: Он имел в виду что нужен миниапп. А миниапп это сайт, так что реакт вполне подходит (reply to 173170)

X1ag: Web app как я понял , но он удалил диалог для двоих😂 (reply to 173170)

IndexCorp: Доброе утро! NFT Коллекцию можно передать другому?  https://truecarry.github.io/ton-collection-edit/ Тут пробовал, но не меняет овнера

Tim: Меняет 🗿 (reply to 173200)

IndexCorp: не могу прописать другой адрес (reply to 173202)

Tim: Вставлять надо (reply to 173203)

IndexCorp: спасибо))) (reply to 173204)

Aziz: Слушайте а вот есть же Ston fi, хотел узнать а он получается сам себя рулит? Или это все происходит на блокчейне DEX?   Не могу просто понять откуда доставать эти пуллы чтоб статус токенов в реальном времени смотрнеть

Satoshi: Ребят кто знает ботов по типу маэстро но на тоне?

Влад: Добрый день. Отправил с тон спейса ТОН на основной кошелек, сумма с тон спейса списалась а на основной кошелек ТОН не добавилась. Это как так ?

Влад: А не, на трындел ( просто 20 мин ждал панику поднял ) извиняюсь. Пришли

Семён: Всем привет, есть какой-то гайд, как задеплоить смарт-контракт с кошелька пользователя через tonconnect?

Семён: Желательно на Go

Семён: Это да. Пытаемся сделать так, но вылезает Exit code 9 (reply to 173215)

Семён: Не, это оверфлоу инта (reply to 173218)

Семён: Просто на ту транзакцию, которой деплоишь, он отвечает exit code 9 и возвращает деньги обратно

Семён: При этом через blueprint всё легко деплоится. Не получается именно через tonconnect

Семён: https://testnet.tonscan.org/address/EQAdW0Mz9lLad7v4aUjYqg8bp1AIZ_e4LlGXtPkjzSxtnmxB#transactions (reply to 173222)

Семён: Вот https://testnet.tonscan.org/address/EQBwOnYkGrjc_h2se6kYUclWq-7Wr5BV4UPKRRHlw6x90G4- Здесь немножко другие данные могут быть (id точно) (reply to 173229)

Василий: 9 это cell underflow. Что означает, что контракт пытается читать из клетки больше данных, чем там есть. Чаще всего признак неверного формата сообщения.  https://docs.ton.org/learn/tvm-instructions/tvm-exit-codes#standard-exit-codes (reply to 173218)

Василий: Видимо (reply to 173232)

­😇: Нужна помощь, для написания скрипта на отправку с кошелька по сид фразе, сообщения с заложенным в него нужного мне ор код на адрес контракта.  Не бесплатно

Paul: hi ton team. If we build a dapp on your chain, will we still have support?

Svαtoωλ‎: возможно ли как-то открывать ссылку на стонфай через адрес жетона? как в дедасте, где незнакомый токен предлагают импортнуть

Dan: Всем привет.  В доках Тона указывается, что даже при повышении цены ТОН, транзакции меньше 0.01$ будут.  Сейчас за отправку 1 ТОН, в тонкипер, например, идет цена в 0.04$.   В итоге схема с удержанием цены за транзацкцию <0.01$ не сработала?   Можете обьяснить, пожалуйста?

Dan: ну упор всегда был на то, что цена транзакции меньше цента.  Что и указано в офф документации.  Сейчас уже поменялся посыл на другой? (reply to 173245)

Denis: комиссии в тон не зависят от нагрузки (reply to 173245)

Ihor: Есть способ получить текущую версию ноды ТОН? Пробовал через validator-engine-console getstats но версии там нет

Seitaro: Менять цену очень часто нельзя (протоколам типо дексов сложно к этому адаптироваться, особенно к повышению комисии), поэтому всегда будет определенный лаг между тем что соотношение ТОН/$ выросло и возвращении комиссии в $ к низким значениями. Тем не менее если станет ясно, что новое значение ТОН/$ долговременное - валидаторы проголосуют и снизят комиссии. Базовый план, что транзакции на ТОН дешевые - сохраняется. (reply to 173243)

Seitaro: validator-engine-console -V (reply to 173248)

Denis: во-вторых кажется кипер сейчас завышает комиссию от реальной. это баг. я посмотрю. реально отправка одного тона стоит где-то 2.7 цента (reply to 173246)

Ihor: Да, но этот коммит не совпадает с коммитами на github/releases и версию получить нельзя. Как-то вытащить tag_name хотелось (reply to 173250)

Ihor: Был неправ, нашёл как получить таг нейм, спасибо (reply to 173250)

slavagm: Всем привет Можете объяснить момент: я могу как-то отправить транзакцию со своего кошелька без дополнительных подтверждений? Как получить через TON Connect понял, как отправить назад найти не могу, может подскажете в каком направлении копать...

Никита Рязанов: Есть предположения из-за чего может не выполняться команда create в ton-storage-daemon-cli?

Никита Рязанов: И так на любую директорию/файл

&rey: По секретному ключу можно, с кошелька пользователя — нет (ему же не надо, чтобы все деньги ушли сами). (reply to 173258)

&rey: https://docs.ton.org/develop/dapps/cookbook#how-to-send-standard-ton-transfer-message

User<6908616126>: Ребят, такой вопрос, стоит ли использовать язык tact, или лучше обойтись связкой func+fift. Где то тут в чате писали что на такте не самое лучшее решение писать смартконтракты

rends_east: ну такт просто вроде еще сырой если это не смущает, то можете на нем (reply to 173266)

slavagm: Чёт пример на Питоне ни в какую работать не хочет, но спасибо, направление +- понятно (reply to 173265)

&rey: Ой. Можно узнать, а что за ошибка? (reply to 173269)

&rey: Tact тратит побольше газа. (reply to 173266)

Андрей: как мне кажется порог входа в такт меньше (reply to 173266)

slavagm: pytoniq.liteclient.client.RunGetMethodError: Get method "seqno" for account Address<EQAxdVdsRstA8G5DLHm5bxpCCbaol-biQ5_tV9snFNl9YUYH> returned exit code -256 Причём откуда берется адрес я до конца не понимаю)) (reply to 173271)

slavagm: Мнемоника на другой ссылается, к тому же все адреса фигурирующие в коде - в тестнете, поэтому почему начинается с EQ мне не до конца понятно

VIKTOR: В тестовой сети сейчас какие-то проблемы?

User<6908616126>: Спасибо за ответ всем🤝 (reply to 173272)

Olgа Naumova: #TON #FunC  Ищем партнера для нашей команды, опытного разработчика смарт-контрактов в сети TON, на языке FunC  Что мы предлагаем:   • сдельную оплату, обсуждается индивидуально   • участие в образовательном проекте, нацеленном на обучение нескольких тысяч будущих разработчиков в сети TON   • адекватную, гибкую команду без формализма и диктатуры   • гибкий график работы удалённо   @hrdforit

&rey: Для тестнета надо WalletV4R2.from_mnemonic(wallet_id=4085333890, ...) (reply to 173274)

slavagm: Хз, тут либо я дурак, либо лыжи не едут)) provider = LiteBalancer.from_testnet_config(1)     await provider.start_up()      wallet = await WalletV4R2.from_mnemonic(wallet_id=4085333890, provider=provider, mnemonics=mnemonics)     print(wallet.address)     print(await wallet.get_balance()) > Address<EQCceOC9AEtGZRjXfgbzdVyT9n9YLxdjAimxMKkUaqvt_It_> > 0 И снова выкидывает ту же ошибку (reply to 173282)

Maksim: а какой адрес должен быть? (reply to 173285)

slavagm: 0QAxdVdsRstA8G5DLHm5bxpCCbaol-biQ5_tV9snFNl9YaBI (reply to 173286)

slavagm: И лично у меня вопросы начинаются ещё с "EQ", это ведь насколько я понимаю обозначает адрес из мэйннета..

Maksim: а как вы получили этот адрес? (reply to 173288)

VIKTOR: вы можете конвертировать адрес Address(wallet.address).toString() в toString указать необходимые параметры для отображение в формате тестовой сети. (reply to 173288)

Maksim: это просто репрезентация адреса, поэтому взято дефолтное представление. Если хочется смотреть на адрес в тестнет форме wallet.address.to_str(is_test_only=True) (reply to 173288)

User<6908616126>: Нет, это не mainnet, в тестнете тоже самое будет (reply to 173288)

slavagm: Блин, чувствую если дело доходит до разговоров с автором библиотеки, сейчас быстро выяснится что это я где-то не прав :D  В тонкипере перешёл на тестнет и скопировал, что-то неправильно? (reply to 173289)

User<6908616126>: Вот различие адресов EQ и UQ (reply to 173295)

slavagm: Понял, думал адреса мейннета начинаются на EQ/UQ, а в тесте 0Q, видимо ошибался (reply to 173292)

Maksim: попробуйте в кипере с него совершить транзакцию какую-нибудь, тогда он задеплоится. пока он незадеплоенный трудно со стороны сказать что именно не так делаете (reply to 173293)

slavagm: Понял, отправил с 0QAxdVdsRstA8G5DLHm5bxpCCbaol-biQ5_tV9snFNl9YaBI на 0QA5WaqVfMkq-P9i7kgqIJYGIAVhV9QR-v4ac_Seb_kRVE-3 собственно это и пытаюсь повторить, но уже из скрипта (reply to 173298)

Maksim: а так он тут правильный адрес показывал. уберите аргумент wallet_id из WalletV4R2.from_mnemonic и отправка зарабоатет (reply to 173274)

Maksim: в самом начале не работало потому что кошелек сначала нужно задеплоить, например поплнив его и вызвав await wallet.deploy_via_external()

VIKTOR: + (reply to 173301)

slavagm: Ага, и правда заработало, спасибо большое! (reply to 173300)

slavagm: Т.е. аналогично надо будет в мэйннете, перед тем как пытаться отправить что-то с кошелька - совершить транзакцию вручную? (reply to 173301)

Maksim: Нет, просто перед первой отправкой его нужно пополнить и вызвать await wallet.deploy_via_external() либо можно без предварительного пополнения с другого кошелька сразу задеплоить текущий, приложив state_init (reply to 173306)

Bear: приветствую! поделитесь пожалуйста онлайн конвертилкой адресов.

&rey: ton.org/address (reply to 173310)

&rey: Лучше библиотеку пофиксить, кажется. (reply to 173301)

&rey: Хм, так тонкипер решил тоже игнорировать другой wallet_id для тестнета? Тогда предупреждаю: не используйте один сид на тестнете и меиннете, сообщения с одной сети можно будет повторить на другую. (reply to 173300)

Denis: так было с самого  начала. а потом без мультиволетов уже ломать нельзя было (reply to 173313)

Dina: 🛠️

Максим: Tonlib #001 crashed: Traceback (most recent call last):   File "c:\Users\Administrator\AppData\Local\Programs\Python\Python311\Lib\asyncio\runners.py", line 190, in run     return runner.run(main)            ^^^^^^^^^^^^^^^^   File "c:\Users\Administrator\AppData\Local\Programs\Python\Python311\Lib\asyncio\runners.py", line 118, in run     return self._loop.run_until_complete(task)            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   File "c:\Users\Administrator\AppData\Local\Programs\Python\Python311\Lib\asyncio\base_events.py", line 653, in run_until_complete     return future.result()            ^^^^^^^^^^^^^^^   File "C:\Users\Administrator\Desktop\autobyu\main.py", line 14, in main     stack = (await client.raw_run_method(address="EQDLQLyBNFF-7yCt2lziWAuWUBpL5KZY17QbXeFlYb12SHM3",              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   File "c:\Users\Administrator\AppData\Local\Programs\Python\Python311\Lib\site-packages\pytonlib\client.py", line 253, in raw_run_method     r['stack'] = serialize_tvm_stack(r['stack'])                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   File "c:\Users\Administrator\AppData\Local\Programs\Python\Python311\Lib\site-packages\tvm_valuetypes\stack_utils.py", line 90, in serialize_tvm_stack     stack.append(serialize_tvm_element(t))                   ^^^^^^^^^^^^^^^^^^^^^^^^     File "c:\Users\Administrator\AppData\Local\Programs\Python\Python311\Lib\site-packages\tvm_valuetypes\stack_utils.py", line 68, in serialize_tvm_element     data = codecs.encode(t["cell"]["bytes"], 'utf8')                          ~^^^^^^^^ KeyError: 'cell'  During handling of the above exception, another exception occurred:  Traceback (most recent call last):   File "c:\Users\Administrator\AppData\Local\Programs\Python\Python311\Lib\site-packages\pytonlib\tonlibjson.py", line 207, in read_results     result = await asyncio.wait_for(self.loop.run_in_executor(None, receive_func), timeout=timeout + delta)              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   File "c:\Users\Administrator\AppData\Locaio\tasks.py", line 476, in wait_for     await waiter asyncio.exceptions.CancelledError  Никто не знает что за ошибка?

Ruslan: Должно быть больше логов, но ошибка вероятно в неустановленной openssl (reply to 173321)

Ruslan: https://github.com/toncenter/pytonlib/tree/main?tab=readme-ov-file#from-pypi

ᗩᒪᗴ᙭: Rift не доступен больше как SDK ?

User<6908616126>: Тонкипер не то что бы упал, но да, чето он тормозит долго (reply to 173325)

User<6908616126>: Транзакцию 5 мин отправлял

Max: https://tonstat.us/  TON API лежит (reply to 173325)

Happy: Давно? (reply to 173330)

Max: А вы открывали tonstat.us?)   Там же есть время, когда сервис перестал быть доступен  с 14:50 UTC (reply to 173332)

Happy: Открывали, спасибо (reply to 173333)

Никита Рязанов: Поднял ton-storage-daemon на машине со статическим IP. С помощью ton-storage-daemon-cli загрузил (create) файл, получил его BagID. Могу ли я теперь на других устройствах, в других сетях как-то увидеть этот загруженный файл по BagID? Если да, то как?

Андрей: Пока нет, так как нету готовых инструментов для этого (но скоро обещают подогнать) Ну и все это будет за оплату в тон (reply to 173338)

Никита Рязанов: Тобишь я не могу сейчас юзать это для тех же NFT поскольку метадату не будет видно? (reply to 173339)

Андрей: пока включена ваша машина с этим bag_id - все будет работать (reply to 173340)

Андрей: Прошу прощения, я вас не так понял Да, другие машины могут скачать этот файл зная bag_id  Например через тот же ton-storage-daemon или tonbyte api https://tonbyte.com/docs (reply to 173340)

Никита Рязанов: А как следует оформлять ссылку на json для той же NFT? Это должен быть какой-то gateway или что-то типо того? (reply to 173342)

alkhanov: 👋здравствуйте столкнулся с проблемой что tonsdk перестал принимать mnemonics, хотя до этого всё было нормально версия hv2 raise InvalidMnemonicsError() tonsdk.crypto.exceptions.InvalidMnemonicsError: Invalid mnemonics error. не знаете в чем дело?

Stronger: Всем привет, кто знает, как на клиенте можно поймать отказ выполнять send с кошелька? (кошелек TonKeeper)

Aziz: А у кого нибудь есть SDK под Ston fi на питоне, свапалка крипты. Просто там с TypeScript(а) на питон очень муторно API перегонять

alkhanov: Может знает кто-то? (reply to 173349)

Андрей: скажите а какой стек у ноткоина это же webgl типа юнити приложухи ?

Vłād: Тот же вопрос (reply to 173377)

— 2024-03-15 —

ALEKSANDR: Python очень криво сделан , лучше делай Через JS . (reply to 173365)

Aziz: Спасибо большое, просто заметил что все проекты тут на TS поэтому)р (reply to 173398)

ALEKSANDR: Ну да, поэтому лучше используй его, так как с питоном много гемора , сам лично ковырял (reply to 173400)

Aziz: Спасибо  еще раз)р

ALEKSANDR: Черкани в лс (reply to 173403)

Aziz: сообщение отметить? (reply to 173404)

ALEKSANDR: Ну (reply to 173405)

Stas: Какой-то баг с кошельком, сумма на балансе просто сжирается непонятно чем UQBVdpFpmiqEwMX0xpkTPqyX29ZqbevIubHKz01nnU6l5x0k (forwarded from Stas)

Stas: Лол, в вопросе разберитесь прежде чем глупости писать (forwarded from Stas)

Stas: Спас кое-как 2.8 тона, изначально пришло 5.1 тон (forwarded from Stas)

Stas: Баг происходит когда из api пытаешься отправить всю сумму на кошельке то есть 1:1 без учета комиссии, если это не прикол и не фича прошу возместить P.S. (дэ дело не в кошельке получается, но хз куда писать, раз написал сюда значит пусть будет тут) (forwarded from Stas)

Stas: 🫡

Dmitry | backend4you.ton: А вот кто может объяснить _почему_? Там compute фаза успешна, упало на action.  Но валлет в4р2, он сначала проверяет секно, потом accept-message, потом увеличивает seqno и делает commit , и потом только перекладывает сообщение в отправку.  То есть по идее следующая попытка обработки того же ext-in msg должна отвалиться на шаге проверки seqno. Почему этого не происходило? (reply to 173408)

User<6908616126>: Будет, но нужна статика ip (reply to 173416)

Vladimir: Ребят, подскажите пожалуйста, кто-нибудь проверяет (и можно ли?) кошелек на возможность принимать NFT? Только что отправил NFT на @wallet (не space) и он без проблем отправился, я боюсь что мои пользователи так же будут вводить адрес кастодиального кошелька и мои NFT будут уходить в никуда :(

IndexCorp: https://github.com/ton-society/grants-and-bounties/issues/461  Ребята поддержите пожалуйста эту идею. Данная идея поможет многим проектам в блокчейне тон, так же повысить привлекательность NFT

&rey: Кажется, оказалось, что коммиты не так работают. (reply to 173415)

&rey: Так а разве нет этого? (reply to 173419)

Dmitry | backend4you.ton: "принять" может любой кошелек. НФТ (и жетоны) так сделаны что их не надо "принимать" - они знают адрес своего владельца и им пофиг что это за адрес. можете "попросить" нфт считать владельцем нулевой/burn адрес - и она будет так считать.  проблема в том что НФТ принимает команды только от адреса-владельца, и команды - это сообщения специальной структуры, подписанные прив.ключом владельца, а в случае с кастодиальными кошельками держателем прив.ключа является не пользвоатель а сервис. Соответвтенно распоряжаться НФТ дальше может не пользователь, а сервис.  Единственное что вы можете сделать - перед "отдачей" нфт каким-то образом просиь пользователя "доказать" что он владеет прив.ключом (подписать что-нибудь), но дальше пользователь всё равно сможет "пеерслать" НФТ куда ему вздумается (reply to 173418)

Vladimir: Спасибо! Я хотел упростить авторизацию кошелька для MVP заменив её на просто прием публичного адреса, но похоже лучше сразу сделать :) (reply to 173424)

Dmitry | backend4you.ton: получается коммиты "внутри" транзакции как бы вложены в саму/родительскую транзакцию...  т.е. гипотетически если злоумышленник попросит пользователя подписать ext-msg  с двумя вложенными in-msg, первое из которых отправляет "пожертвование" в 1 тон на кошелек злоумышленника с модом +2, а второе пытается делать "полезное" дело (ради которого пользователь и будет это всё подписывать) но по каким-то причинам это сообщение не отправится (любой из action exit codes), то в процессе ретраев весь баланс кошелька юзера "отжертвуется" злоумышленнику... (reply to 173422)

User<6864646959>: Есть и API для этого (reply to 172010)

Дмитрий: Всем привет. Подскажите, пожалуйста, дилетанту в программировании, какой ИИ может помочь создать игру для Телеграм?

Dmitry: Привет. Почитай, книгу КОД. (reply to 173431)

&rey: Так там вся action фаза упадёт. (reply to 173428)

dg: Я использовал chatgpt 3.5 кажись, когда писал бота для дискорда. Я человек с улицы, лишь для общего развития изучал программирование. Чатгпт существенно помог с выявлением оишбок в синтаксисе. (reply to 173431)

🔑: гигачат понимает по русски, имеет в контексте данные по api телеграм и пишет нормальный пайтон код для серверов бота тг (reply to 173431)

🔑: с этим проблем нет

Dmitry | backend4you.ton: но если там "на выходе" два сообщения, и первое "нормальное" - оно разве не уйдет? (reply to 173433)

&rey: Нет. Наверно. (reply to 173437)

­😇: Это тонкипер виснет либо сеть лежит?

&rey: Скорее уж Tonapi лежит. (reply to 173439)

&rey: Хотя сейчас вроде все нормально. См. tonstat.us.

Denis: На самом деле тонапи лежит гораздо реже чем кошелёк не может достучаться из-за сетевой связности (reply to 173443)

Denis: 2024-й год он такой

Tim: Как то странно работает тонстатус. Там все зеленое а юзеры жалуются (reply to 173444)

Denis: Ну тогда надо искать в чем разница. Мониторинг опенсорс (reply to 173447)

л: Здраствуйте можно как то прогамно через питон или другой язык создать кошелек тон и чем нужно руководствоваться

dg: Расскажи о своем проекте) (reply to 173431)

slavagm: Мне кажется пользователи которые не понимают сути кастодиальных кошельков не смогут так легко найти адрес Валлета, нет? (reply to 173418)

Vladimir: ещё не проверил, просто пока гипотеза ) (reply to 173457)

slavagm: Ну просто я даже теоретически не знаю где его можно найти, если не попытаться вывести на внешний кошелек, посмотреть откуда пришло и вбивать этот адрес, но будто бы в моменте человек должен догадаться что что-то делается не так))) (reply to 173458)

slavagm: Ещё я честно говоря не знаю как у Валлета организована эта работа, но если за ними закреплён всего один адрес, то можно его банально игнорировать и отдавать пользователю сообщение с предупреждением

Vladimir: Wallet -> Add Crypto -> External Wallet -> Ton Coin  вроде простой и даже кажется что логичный путь, хоть там и есть в конце предупреждение чтоб отправлял только TON туда ) (reply to 173459)

Vladimir: У каждого свой адрес (reply to 173460)

slavagm: Думаешь? Мне кажется контракт то у них один (reply to 173462)

Vladimir: Только что проверил, НФТшку заслал на свой кастодиальный адрес https://tonviewer.com/EQCAkh_9IduKSRqcxaDBszcWcXSbPseklc-6Kmqgy_A867d9 (reply to 173463)

Tim: А ты хитрый

Dmitry | backend4you.ton: Они каждому юзеру дают выделенный адрес для депозитов, и оттуда "забирают" монеты на свой главный кошелек. (reply to 173463)

slavagm: А, вот оно как (reply to 173466)

slavagm: А как насчёт TON Connect? Ты по факту ведь вроде не сможешь получить тот кошелек, к которому юзер не имеет прямого доступа (reply to 173464)

Vladimir: Так ТОН коннект же сначала активировать в настройках надо и провести некоторую инициализацию с кодом из письма, мало у кого оно есть, мне кажется (reply to 173468)

Dmitry | backend4you.ton: лол, а мне кажется или валлету плохо https://tonviewer.com/EQCkoRp4OE-SFUoMEnYfL3vF43T3AzNfW8jyTC4yzk8cJqMS

slavagm: Не, я про протокол этот, который позволяет подключиться к кошельку из приложения (reply to 173469)

Dmitry | backend4you.ton: unknown транзакции бесконечно, и баланс потихоньку тает (reply to 173471)

Vladimir: А, ну это да, но его реализовать ещё надо, время… (reply to 173472)

Evgeny: друзья, помогите разобраться, еще ничего не писал для блокчейна тон. пишу на си шарпе. как мне выбрать все элементы нфт коллекции? куда копать, какие библиотеки использовать?

slavagm: Там за час вдумчивого чтения примеров можно вкатиться, возможно стоит в этом направлении посмотреть, если хочется прям совсем защиту от дурачков реализовать (reply to 173474)

Dmitry | backend4you.ton: обычно в коллекции есть количество, и можно у коллекции дернуть гет-метод с индексом и узнать адрес соотв. айтема дергать надо в цикле и как ты понимашь это небыстро  или можно обратиться к сервисам-индексаторам - у них обычно это можно одним-двумя http get сделать (reply to 173475)

Evgeny: ну это я понимаю) а как вообще запросы делать к блокчейну, где пример запроса посмотреть который выдает объект коллекции? (reply to 173478)

Dmitry | backend4you.ton: https://github.com/justdmitry/TonLib.NET , раз НФТ то это TEP-62 (TonRecipes / NFTs) (reply to 173479)

Evgeny: Спасибо, Дима! (reply to 173481)

Дмитрий: В идеале: пошаговая рпг с продвинутой экономикой. (reply to 173451)

Evgeny: Я посмотрел код, нужно вызвать конструктор этот. как мне создать и передать в него tonClient? какой то ключ доступа к АПИ может нужен?:   https://cliptoall.s3.us-west-2.amazonaws.com/evgeny/20240315/d8973952451b480fa4229996c058c49d.jpg

&rey: Опять недостаточно газа?! (reply to 173471)

Dmitry | backend4you.ton: кажется да, опять превышает 1тон (reply to 173486)

&rey: Ну хоть таймаут работает.

&rey: Как-то не удавалось раньше спросить: "продвинутая экономика" — это сленг геймдева или абстрактное понятие? (reply to 173484)

Dmitry | backend4you.ton: эта библиотека не использует апи и ей не нужны ключи, она обращается сразу к публичным нодам блокчейна (ну или к вашей личной если поднимите).  для создания объекта можно посмотреть в readme или в тот класс что вызывает тот что вы заскринили. рассчитано на стандартный механизм DependencyInjection от .net (reply to 173485)

Махмудов: У меня есть вопрос

Andrey: А у нас есть ответ: https://nometa.xyz (reply to 173495)

Махмудов: Я отправил ваунчер свой тон как я ему вернуть

David Prince: hi any admin here

Dmitry | backend4you.ton: тут разработчики. пользователи в https://t.me/toncoin_rus_chat (reply to 173498)

Michael: Подскажите пожалуйста, какая функция в тонконнект отвечает за вызов окошка с дисконнектом встроенным? Не могу найти, нужно прикрутить к кастомной кнопке

David Prince: I have a pending transaction, how do I resolve it? (reply to 173500)

Dmitry | backend4you.ton: 1) this is RU chat, for EN chat use https://t.me/tondev_eng 2) Ссылка на транзакцию очень поможет (reply to 173503)

David Prince: tks (reply to 173504)

Dmitry | backend4you.ton: какого токена? Если самого ТОНа - валидаторы получают награду за каждый блок, сапплай увеличивается; Если жетонов - зависит от конкретного жетона, если его админ не "сброшен" в ноль - админ может добавить монет.

User<6908616126>: wallet.disconnect() вроде (reply to 173502)

Michael: это просто отключит кошелек сразу (reply to 173512)

User<6908616126>: А что надо? (reply to 173513)

User<6908616126>: А. Я понял

User<6908616126>: Так вроде же нет никакого окошка с дисконектом, есть кнопка дисконект и сразу все отключается

User<6908616126>: Можно скрин, что вы пытаетксь реализовать пожалуйста

Michael: Просто в готовой кнопке оно сходу идет, а я не понимаю как мне в кастомной его вызвать

User<6908616126>: А, так это с помощью css делается, это обычное дропменю, к библиотеке тона не имеет никакого отношения

dg: Бюджет понимаешь?) (reply to 173484)

Michael: Ну оно же к их кнопке прикручено, значит его можно как-то кастомно вызвать из библиотеки? (reply to 173521)

Myawka ^_^ 🥇: вроде просто по нажатию на кнопку тонконнектора после подключения кошелька вылазит же? (reply to 173525)

Myawka ^_^ 🥇: менюшка такая

Michael: ну да, а мне нужно ее вызывать по нажатию на кастомную кнопку (reply to 173527)

Myawka ^_^ 🥇: а ну тогда только вручную такую менюху сделать

Olgа Naumova: Ищу контактного сеньора-мидла по TON. Нужен специалист который с нами помозгоштурмил) и помог нам сформировать программу обучения, что то дельное посоветовал)

User<6908616126>: Именно (reply to 173531)

User<6908616126>: Вызвать его невозможно (reply to 173533)

Mika: Всем привет! 👋 Ищу амбициозных разработчиков желающих поучаствовать в разработке MVP в формате спринта   Блокчейн стартап в сфере недвижимости  Рынок ОАЭ 🇦🇪  Приглашаю к участию :  Blockchain developer Full stack developer Backend developer  За подробностями обращайтесь в личку🤝  Всем прекрасного настроения, все будет TON

Дмитрий: В душе не понимаю)) (reply to 173524)

🔑: Если ключи у тебя, все ок (reply to 173418)

User<6491979498>: Всем привет.  Предостерегаю от мошенника мимикрирующего под разработчика (сидит в этом чате, откликается на запросы с разных аккаунтов и периодически меняет ники, поэтому чекайте ID).   @GuiUser | ID: 6890151979 @TonBytes | ID: 6804834813  Кошельки UQDmgohve0UUb4kswjArsQzxQzbgZz3HM_ELqI9eHkhgj-GZ UQBcPqg2Wuzv_0_ILkbgKvV0GB3mFsygl670wC6_NE33RFzk UQDPKxSDkeRXmSNbpjQLTNyP3BlNRK0l4YZgv7YauFsBXXH_   Есть еще несколько ников и id, но я до конца не уверен в аффилированности, поэтому если кому то нужен будет чек — можем обсудить в личке, чтобы никого не порочить зря.  Есть все скрины, но к сожалению больше нет 90 TON предоплаты )))

Alacrity: есть ли какой-нибудь пример использования tonconnect на Python?

krau5: Вот тут вродь есть пример работы с pytonconnect  https://docs.ton.org/develop/dapps/ton-connect/tg-bot-integration-py (reply to 173551)

Alacrity: а что такое manifest_url? (reply to 173552)

Человек: Привет! Кто ни будь делал бэк тонконнекта на php? Я имею ввиду пару серверных скриптов: generatePayload и checkProof

User<5804222196>: Всем привет. Произошло очень много ошибок в транзакциях с жетонами, проблему нашел. Но, обнаружил что 200 тон улетели в jetton wallet. Как их можно достать от туда?

Seitaro: Из стандартного жетона - никак. (reply to 173562)

User<5804222196>: из jetton wallet (reply to 173563)

Seitaro: С глобальной точки зрения весь жетон (все жетон-валлеты и жетон-рут) это одна большая система, просто размазанная по разным контрактам для параллелизации (возможности шардироваться). То что мы можем посмотреть на отдельные кусочки этой системы - фича, но не должно становиться багом. Для конечного юзера никакие внутренности показываться не должны. Иначе говоря, конечный пользователь нигде не должен видеть адрес жетон-воллета, для него это просто баланс жетонов на его кошельке. Соответственно, если этот адрес не показывается, то и ошибок связанных с отправкой денег/жетоновв на него быть не должно.  Что касается разработчиков, то они должны понимать что делают, тут, увы, запасных функций не напасешься: на жетон-воллет можно и жетоны кинуть, и нфт, и админку жетон-рута итп.

Denis: Да. Но можно было бы на экцесс повесить флаг 128 или как там "отправь все кроме зарезервированого". Потому что разработчики тоже люди и ошибаются

Denis: Да и жетоны могли бы баунсить всё кроме своих операций

slavagm: Ссылка на манифест с информацией твоего приложения (reply to 173560)

slavagm: На вдс прокинь просто папку на улицу и там манифест напиши

Myawka ^_^ 🥇: какая задача то? (reply to 173580)

alkhanov: import asyncio  import bitarray  from tonsdk.utils import to_nano,bytes_to_b64str from tonsdk.contract.wallet import Wallets, WalletVersionEnum  mnemonics = [   '....', '...',  '....',   '...',  '...',  '...' ]   mnemonics, pub_k, priv_k, hv_wallet = Wallets.from_mnemonics(mnemonics=mnemonics, version=WalletVersionEnum.hv2, workchain=0) print(hv_wallet.address.to_string())  tonsdk.crypto.exceptions.InvalidMnemonicsError: Invalid mnemonics error.  здравствуйте, не знаете в чем проблема? mnemonics точно верные, пару месяцев назад всё работало, а сейчас нет

IndexCorp: Общедоступного нет (reply to 173423)

&rey: А обычный кошелёк с той же мнемоникой создаётся? (reply to 173585)

alkhanov: v4r2? (reply to 173587)

&rey: Да, или любой другой. (reply to 173588)

Maxym: Да. Пиши в лс (reply to 173561)

ms: Привет! У кого есть интересные проекты на TON? Готовы собрать команду и финансировать крутые проекты.

alkhanov: насчёт создаётся или нет на самом деле не знаю если ты про создание, а вот если в этом же коде поменять версию на v4r2, то та же ошибка (reply to 173589)

&rey: Значит, мнемоника неправильная. Слова все верные? (reply to 173594)

alkhanov: да, по крайней мере до этого работали (reply to 173595)

Artur: здрасвуйте, я бы хотел узнать Derivation Path тонкоина

&rey: Не используется. (reply to 173603)

Sound: привет ребят, вот у тонкипера есть апи для создания транзакций, а у @wallet есть что-то похожее? чтобы человек по ссылке переходил и сразу смог подтвердить транзакцию

User: ton space + ton connect - без KYC (reply to 173605)

slavagm: и работает она только в ботах по-моему (reply to 173607)

slavagm: и требования не самые простые для одобрения заявки

Sound: c тон коннектом да, можно, но если например сервер перезагрузить и коннект спадёт то больше слать транзакции нельзя будет (reply to 173608)

slavagm: давно работал с их апи, деталей уже не помню, но вроде ключ выдается на конкретного бота и запросы должны идти через него (reply to 173612)

slavagm: честно без понятия, но абсолютно точно помню, что когда я вставил апи-ключ от другого бота и попытался сделать транзакцию через своего тестового, Wallet мне прямо ответил, что этот ключ не для моего бота (reply to 173615)

Evgeny: Помогите разобраться с TON API который на toncenter. Как получить id исходящей транзакции по входящей?  1. Если запросить транзакции по адресу EQCFpxxOXcc_4kH1bvfHzcDKpk1HCMBry3uCMJkkLjj2ISZv то в списке транзакций есть входящая с id K2cAw5THmgdHTditk5TwjikCRtGCREnbHTI3ob31uSk=  2. В исходящих транзакциях с адреса UQARFlgfJwwwL2q_3sTkZ4PuhiKdsw8YqhIgvyJIR3VSIgBl исходяшая имеет id 7Wi5stOUDSzAJ0OJSiHwETqk55zZOfNtXVAOTTYltTI=  Собственно вопрос: можно ли через API получить id исходящей по id входящей K2cAw5THmgdHTditk5TwjikCRtGCREnbHTI3ob31uSk=?

slavagm: ща поищу, ключ мб остался (reply to 173617)

Ruslan: Можно это сделать через toncenter.com/api/v3/ (reply to 173618)

Evgeny: спасибо, сейчас попробую (reply to 173620)

Ruslan: Для этого надо взять извесную транзакцию, взять сообщение из out_msgs и воспользоваться методом /api/v3/transactionsByMessage с msg_hash + direction=in

Evgeny: Не сработало, у транзакции K2cAw5THmgdHTditk5TwjikCRtGCREnbHTI3ob31uSk= id которой мне заранее известен нет out_msgs  То есть я знаю только этот id и по нему нужно найти id "полной" исходящей транзакции (reply to 173623)

Ruslan: А, если надо найти транзакцию-родителя для указанной, то direction=out (reply to 173626)

Ruslan: direction показывает где искать сообщение: in = in_msg, out = out_msgs

Ruslan: У меня нашлась с msg_hash = po4/F9OgHrJGTUCtobScZrW/gOwVPj7s3f40HV32EII= и direction = out

Evgeny: Ага, есть.  Я правильно понимаю, что в моём случае нужно два запроса к API, если изветен только id K2cAw5THmgdHTditk5TwjikCRtGCREnbHTI3ob31uSk=  1. По нему вытянуть транзакцию через api/v3/transactions 2. Взять hash in_msg и уже по нему вытянуть полную тразакцию через api/v3/transactionsByMessage (reply to 173630)

Ruslan: Да, все верно

Ruslan: Если первая транзакция тоже была отправлена тобой, то можно делать так: отправлять BOC через /api/v2/sendBocReturnHash, потом по полученному hash искать транзакцию, где это сообщение в in_msg и затем повторять этот процесс для всех out_msgs пока они не закончатся. (reply to 173632)

alexander: есть ли такой инструмент - вход в группу или в канал за ТОНКОИН?

alexander: Спасибо поищу что это не знаю (reply to 173638)

alexander: Прикольно. То есть монеты приходят на хрокет? (reply to 173642)

alexander: От определенной суммы ? Или любую? (reply to 173647)

Ded: при поднятие ноды через mytonctrl ошибка  no login name в скрипте установки не нашёл флага с  логином . Есть подсказки как выполнить этот квест ? )

Андрей: Если только гуглить, но явно что то не так с системой (reply to 173651)

Dmitry: Привет. А что с курсом jUSDT знает кто?

Ded: logname: no login name крч если будет у вас трабла  у меня решилось  так  sudo su - export LOGNAME=$(whoami)

Ssi: нестабильный стэйбл))) (reply to 173655)

Dmitry: А почему так произошло? И почему тонапи показывает, что он всё ещё бакс стоит?

Denis: а что с ним?

Denis: отклонение меньше чем на процент

Андрей: 1jUSDT = 1USDT (reply to 173655)

Five: Всем привет, нахожусь в поисках хорошего ботодела на питоне!  Необходимо доработать уже существующего бота, внести в него реферальную систему. Оплата договорная. Если умеете это осуществлять, то велком в лс: @TONCats_BOSS

F: Чат не про рынок и цены (reply to 173667)

Dmitry: Соре

Denis: ну в данном случае техничесйи вопрос скорее

Denis: коинмаркет кап или что это было тащит откуда-то цены кривые

Dmitry: Ну видимо да

Dmitry: По факту ведь в свапах за 1 usdt считает

— 2024-03-16 —

A: Привет завершился аукцион , но кнопка для принятия самого большого предложение не появилась, застряло ?   getgems .io/nft/EQAPrE21jalztoJxl3d20m_YNna3HZdACZ6ePdyz9bFkV5ey

A: Возможно ли по другому принять предложение, отправив на контракт ?

A: Жду со вчера... Ответ (reply to 173691)

A: Может есть способ ручной, отправить на контракт

SALAM: Всем привет, меня зовут Али. Я mobile  developer, Рад вступить в эту группу и если у кого-то будут вопросы по Android/ios, с радостью отвечу🙏

Asidert: Раньше коннект с кошельков к боту проходил нормально, но на днях почему-то остался работать только @wallet, tonkeeper при скане qr бесконечно грузит, при нажатии на ссылку линка линка не происходит, но тонконнект ловит обновление строки "connect" состоящее только из одного элемента - last_event_id и этим вводит в софтлок, после попытки коннекта тонкипера нельзя подключить ни один другой (Received event must be greater than)

Asidert: Я тоже форкнул, чтобы можно было ловить доп данные)  connector.on_status_change([self.on_connector_status_change, user_id]) (reply to 173699)

Asidert: Можно подробнее, какая строчка? (reply to 173699)

Asidert: Последний? (reply to 173703)

Asidert: Да, увидел 👍 (reply to 173705)

Asidert: Логи до дебага понизил, почему-то тонкипер не видит манифест...  {'event': 'connect_error', 'payload': {'code': 2, 'message': "Can't get http://80.242.57.247/ton/manifest.json"}, 'id': 237} (reply to 173699)

Asidert: Ошибка тупо в этом...

Asidert: Там ссылка другая (reply to 173710)

slavagm: Так у тебя реально нет манифеста.. (reply to 173708)

Asidert: Я через браузер вижу

Asidert: http://80.242.57.247/ton/taxi/manifest.json

Asidert: Указан при подключении этот, валлет видит, остальные кошельки что-то нет

Asidert: Тоже об этом подумал... (reply to 173718)

Tim: Https надо (reply to 173715)

slavagm: Задумка проекта интересная кста (reply to 173715)

Asidert: Походу сертбота придётся ставить... (reply to 173720)

Asidert: 😢 (reply to 173721)

Asidert: Решение бесплатное) (reply to 173726)

slavagm: Там же буквально snap install certbot, certbot --nginx 🤨 (reply to 173728)

Svαtoωλ‎: Ну вот, человека без денег оставил ... (reply to 173729)

ъуъ: Добрый день! Подскажите, пожалуйста, почему так медленно выполняются запросы в ноду?  сетап такой   from ton import TonlibClient client = TonlibClient(     config=config.ton_lib.TON_NODE_CONFIG_URL,     ls_index=config.ton_lib.TON_LS_INDEX, ) await client.init_tonlib(cdll_path=config.ton_lib.TON_CDLL_PATH)    А потом каждый запрос выполняется +- за 0.32 секунды   account = await self.adapter.tonlib_client.find_account(account_address=current_address)  # 0.32 секунды  transactions_raw = await account.get_transactions(to_transaction_lt=int(lt), limit=100) # 0.32 секунды   Это проблема в либе, ноде или это нормальное время для запросов?

Андрей: время до сервера, обработка запроса нодой, время обратно - получается не быстро, 320мс это еще нормально (reply to 173734)

ъуъ: Хреново( а есть какой-то эффективный поход для отслеживания большого количества кошельков? > 1 млн (reply to 173735)

ъуъ: Чтобы при появлении транзакции на одном из них срабатывал триггер

Андрей: Поднять свою ноду) мне кажется для ваших задач подойдет готовое решение: https://github.com/gobicycle/bicycle (reply to 173736)

ъуъ: О, у меня есть своя нода, я как раз к ней подключаюсь и отправляю запросы. Там есть возможность отправлять уведомления о новых транзах?  Байсикл смотрел, не совсем подходит под мои задачи( (reply to 173738)

Navajjoo: Приветствую. Подскажите ресурс, где можно прочитать или посмотреть обзор о создании приложения на Телеграм web apps? Можно и на английском. Спасибо! P.S. Прочитал "Создание telegram web apps и взаимодействие с ними в телеграм ботах" на Хабр, но хотелось бьI найти что то более подробное, для начинающих.

Ruslan: Можно запустить свой инстанс индексатора: github.com/toncenter/ton-indexer И из postgresql потом тянуть нужные данные (reply to 173739)

User<6908616126>: Какой стэк хотите использовать? (reply to 173740)

ъуъ: Ооо, обалдеть, спасибо большое) звучит как то, что нужно (reply to 173741)

Андрей: Тогда запускайте скрипт на той же машине где стоит нода, что бы снизить задержку ответа А так вам похоже нужен индексатор, вон чуть выше уже дали ссылку на нее (reply to 173739)

ъуъ: Спасибо! (reply to 173745)

Navajjoo: Не совсем понял вопрос. Хочу создать веб приложение с нуля, под нфт проект - это один из вариантов. И не связанные с нфт темы тоже интересуют. (reply to 173742)

User<6908616126>: Ну смотри, по факту миниприлодение тг это сайт. Для того что бы создать миниапп ты должен сначала написать сайт, который будет отображаться. Для этого я советую использовать js spa фреймворки, такие как angular, react, vue. Для начинающих vue очень хорош (reply to 173748)

User<6908616126>: https://youtu.be/hf2FID-mH3s?si=VZU17FU6UDC8YBzU  Это видео про создание miniapp на ангуляре, но я уверен что и по другим фреймворкам вы найдете информацию без особых проблем (reply to 173749)

Ruslan: Если будут вопросы, пиши в личку (reply to 173743)

Navajjoo: Спасибо! (reply to 173750)

nøt hum𝘼n: Добрый день! Подскажите пожалуйста как добавить флаг bounce = True в транзакцию. Библиотека pytonlib. В инете не смог найти      tranfer_query = wallet.create_transfer_message('UQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqEBI',to_nano(9,'ton'), seqno=1, payload='Darova bandit')     transfer_message = tranfer_query['message'].to_boc(False)     await client.raw_send_message(transfer_message)

EmirNonstop: Друзья, всем привет  Подскажите, почему метод client.get_jetton_data(JETTON_MASTER) не работает для некоторых Токенов. Что следует исользовать в качестве альтернативы?

EmirNonstop: Для токена SCALE, jUSDC  и тд (reply to 173760)

Michael: Это файл в котором хранится ссылка на сам манифест, название и ссылка на картинку которая отобразится в коннекте (reply to 173560)

User<6908616126>: *ссылка на файл манифеста, в котором хранятся данные для конекта. Какие данные, ща скрин пришлю (reply to 173762)

Michael: Да, так правильнее (reply to 173763)

Michael: Чет я запутался с просонья

Michael: Все наоборот😅

User<6908616126>: https://docs.ton.org/develop/dapps/ton-connect/manifest (reply to 173763)

.: Выставил за маленькую сумму

Mikhail: Всем снова привет !) простой вопрос, а есть ли эта библиотека в виде cdnjs для использования в нативном js?)  https://ton-community.github.io/ton/

Navajjoo: Подскажите пожалуйста, как отрегулировать размер KeyboardButton? На всех устройствах на пол экрана.

Vladimir: Ton Keyboard Button? (reply to 173781)

Navajjoo: по мануалу с нуля бота тестирую, пока все работаетр но Keyboard Button на всех устройствах пол экрана. Не нашел как ее отрегулировать (reply to 173782)

StasOff: Подскажите, комиссия при переводе от пользователя пользователю фиксированная? Или есть какие то условия, например перевод тона и токена будут одинаково стоить?

Sunmoon: Подскажите пожалуйста,, Хотел пополнить кошелек на 25 TON монета не пришла,адрес указал правельный все норм и не получил

&rey: Зависит от количества сообщений и сложности вычислений. Токены дороже раза в четыре выходят. (reply to 173788)

Navajjoo: Да. Спасибо. Действительно, не там спросил. Пардон. (reply to 173793)

P.I 🦈: Всем привет.  Ищу разработчика смарт контракта на Ton.  Задача: Сделать свой гарант сервис.  Пищите в лс

User<6908616126>: Кошелек только созданный? Если да, то жди, скоро прийдет (reply to 173790)

User<6908616126>: Ноды еще твой кошелек не знают, и им надо время проиндексировать его (reply to 173800)

&rey: Ratelance видели? (reply to 173799)

Sunmoon: Там два вида кошелька,я пополнил нижний с биржи ,,не пришло,верхний пополнил за минуту прилетело (reply to 173800)

User<6908616126>: Какой нижний и верхний?.... (reply to 173805)

Sunmoon: Хотел скрин скинуть не дает (reply to 173806)

Sunmoon: TON Space Бета это верхний сюда за минуту прилетело (reply to 173806)

Sunmoon: Toncoin это нижний (reply to 173806)

P.I 🦈: Нам надо с гетгемс гарант сервис (reply to 173802)

&rey: Эм, а что такое сложное, что с этим смарт-контракты не справляются? (reply to 173810)

User<6908616126>: А, @wallet, хз, я с ним не работал

Sunmoon: А где тут поддержка,,шляпа какая то (reply to 173812)

Андрей: Вас обманули, это не чат техподдержки (reply to 173813)

P.I 🦈: Да нам и не нужно сложное Мы просто ищем того кто нам за деньги это сделает (reply to 173811)

EmirNonstop: привет! какие есть RPC ноды для парсинга свапов на Dedust?

P.I 🦈: Ищем кто может написать смартконтракт для сервиса по безопасным сделкам nft (продажи и обмен), типа https://ton.diamonds/ru/deals,   только для любых nft c гетгемс или из тонваллета, кипера.  чтобы не на доверии, а через смарт-контракт напрямую сделки совершать  Комиссия за сделки будет присутствовать.

Daria: Контракт уже написан, если что: https://github.com/getgems-io/nft-contracts/tree/main/packages/contracts/nft-swap  вашему разработчику необходимо только любой клиент для него написать   + остерегайтесь скамеров (reply to 173818)

P.I 🦈: Спасибо, нам бы еще под свой токен допилить. Не только тон использовать (reply to 173820)

Эд: Всем привет, подскажите по коннекту плиз кейс авторизоваться на фронте и запросы на бек слать: Читаю доку, пока понимаю, что инициализация процесса происходит на беке, то есть когда мы авторизируемся кошельком на фронте - на беке уже должен быть некий ожидающий процесс?  А есть ли сценарий, когда мы изначально авторизуемся на фронте, а дальше просто на бек шлем ключ, и там уже его проверяем через тон коннект, чтобы установить кошелек (пользователя)

Tim: Вот второй сценарий и есть. Что за первый непонятно (reply to 173823)

Эд: Вот отсюда решил про "первый" что мы должны с бека что-то получить сначала, перед авторизацией (reply to 173825)

&rey: Желательно сделать так, чтобы нельзя было стырить сессию другого пользователя. (reply to 173826)

Эд: Я правильно понимаю, что это просто некая соль или подпись, по которой на беке определяется, что доверенный фронт пытается авторизоваться? (reply to 173827)

Эд: Понял, вроде, благодарю за ответы

big: Добрый вечер кто нибудь может подсказать есть вот это  https://tonapi.io/v2/accounts/EQAIFunALREOeQ99syMbO6sSzM_Fa1RsPD5TBoS0qVeKQ-AR/events?limit=10 тут транзакции отображаюся почти в реал тайме даже в статусе pending (но как то через раз видимо какой то кэш api  и выдает новое не прям в реал тайме )  https://tonapi.io/v2/blockchain/accounts/0:920d7cbef8bc91ba78ded18a54de114c1bbbee9cf0d3eaa85427ee86b09c3139/methods/get_sale_data  а вот это срабатывает только после того как транзакция complited  можно ли как то смотреть до того как она перейдет в стадию complited

User<5062827846>: как сделать публичную ссылку на json файл?

Harvest: Что бы скачать ? (reply to 173832)

User<5062827846>: нет, ton raffles для nft лаунчпада просят ссылку на каждый json файл, я так понял что нужна просто публичная ссылка на файл через какойто сервис, но не смог ничего найти (reply to 173833)

Harvest: Фак

slavagm: арендуй VDS, прокинь какую-нибудь папку через nginx и кайфуй (reply to 173834)

N. T.: Дайте пожалуйста бота который монеты дает тестовые

Vladimir: @testgiver_ton_bot (reply to 173843)

No: Всем привет! Может кто нибудь подсказать как переключиться на тестнет в тонкипере? Старым методом не удалось найти нужную кнопку в Dev Menu

No: Большое спасибо! (reply to 173847)

Zaphod: Там в зависимости от кошелька надо 5-7 раз кликнуть (reply to 173846)

Minter: 5 достаточно по значку кипера (reply to 173851)

nøt hum𝘼n: на гитхаб можешь загрузить (reply to 173832)

GUBER: Привет всем. Может кто-нибудь помочь с минтингом коллекции NFT?

User: Какие у вас вопросы? (reply to 173855)

GUBER: Я читаю документацию и пытаюсь сминтить коллекцию в тестовой сети. Но что-то не получается  У меня не получается это сделать самостоятельно. Поэтому мне нужна помощь (reply to 173856)

User: В чем конкретно вам помочь? Какая ошибка выходит? (reply to 173857)

GUBER: C пошаговым руководством по минтингу коллекции. Мы можем перейти в ЛС? Либо сюда скину скрины ошибок (reply to 173858)

GUBER: В документации непонятные моменты есть. Например в какие файлы писать какие части кода. Завтра буду смотреть шаблон на гитхабе. Но уже неуверен что у меня получится самому всё сделать)

GUBER: https://docs.ton.org/develop/dapps/tutorials/collection-minting  Читаю эту документацию (reply to 173860)

User<6908616126>: Ребят, есть ton full node в виде докер контейнера?

Ilon $CHYTKO: бро, подскажи площадку для размещения задач по ТОНу?

Ilon $CHYTKO: привет

Ruslan: к wss://tonapi.io/v2/websocket нельзя подключиться из браузера?

User: Читайте доку внимательней, там чуть выше все импорты: https://docs.ton.org/develop/dapps/tutorials/collection-minting#write-helper-functions (reply to 173860)

User<6908616126>: Ну это протокол вебсокеты, основан на http, из браузера можно, но особым способом (reply to 173869)

slavagm: а чё за прикол вообще: апи на вебсокетах?

&rey: Можно из JS. (reply to 173869)

&rey: Не переоткрывать соединение для нескольких запросов. (reply to 173872)

Ruslan: я так и делаю, из JS, но ничего не получается (reply to 173871)

Zaphod: получаешь интересующие события, один раз подписавшись на них. Аналог технологии push (reply to 173872)

User<6908616126>: Попробуй взять рандомную wss ссылку, и запустить, что бы понять ошибка в коде или это реально сокет не доступен (reply to 173879)

Ruslan: В сокете, юзал рандомный урл работающего сокета (reply to 173881)

User<6908616126>: все нормально подключилось, проблема в коде (reply to 173881)

User<6908616126>: Хмм (reply to 173882)

Ruslan: Из браузера скриптом моим попробуйте (reply to 173883)

User<6908616126>: Ну insomnia (аналог postman на линукс) норм подключилась (reply to 173884)

User<6908616126>: Ща (reply to 173885)

User<6908616126>: отправьте мне в лс код пожалуйста

Rifat: Подскажите, пожалуйста, как можно через код на golang при помощи библиотеки tonutils купить NFT на getgems?

Vladimir: tonutils нужен будет только для отправки транзакции. А так, как будто бы вопрос предполагает дать готовое решение. (reply to 173889)

Rifat: Хотя бы направление на решение. Смотри условно функцию BuyNft или что-то в этом роде) Или ссылочка на какой-нибудь проект, где это делается.

Vladimir: Нет, так не получится. (reply to 173891)

Rifat: Как тогда получится? (reply to 173892)

Rifat: Как вообще происходит покупка NTF. Вызывается какая-то функция у смарт-контракта NTF? Или просто отправляется какая-то сумма на адрес с каким-то сообщением?

Vladimir: Каждый аукцион это отдельный контракт. Вот можешь глянуть пример такого контракта (reply to 173894)

Rifat: Это понятно, что аукцион это смарт контракт. Покупатель что отправляет на этот смарт контракт чтобы купить, только тоны отправляются и дальше смарт-контракт сам все делает. Или же надо какое-то сообщение отправить на смарт контракт вместе с тонами? (reply to 173897)

Vladimir: Ты приходишь в магазин, даешь деньги на кассе и тебе сами собирают корзину продуктов? (reply to 173898)

Mirka: Код на такте выдает exit code 9, когда я вообще ничего не читаю из полученного сообщения Вот пример транзакции и код: import "@stdlib/deploy"; import "@stdlib/ownable";  message(0x2c76b973) ProvideWalletAddress {     query_id: Int as uint64;     owner_address: Address;     include_address: Bool; } message(0xd1735400) TakeWalletAddress {     query_id: Int as uint64;     wallet_address: Address;     owner_address: Address?; }  contract Main with Deployable, Ownable {     owner: Address;     jetton_master: Address;     jetton_wallet: Address?;      init(owner: Address, jetton_master: Address) {         self.owner = owner;         self.jetton_master = jetton_master;          send(SendParameters{             to: self.jetton_master,             value: 0,             mode: SendRemainingValue,             body: ProvideWalletAddress{query_id: now(), owner_address: myAddress(), include_address: false}.toCell()         });     }      receive(msg: TakeWalletAddress) { } } И что я здесь делаю неправильно?

Hqx5: @ndatg, мне в @tontracker_bot периодически приходит инфа о транзакциях к которым я не имею отношения.  Вот пример.  А ещё тонскан ничего не показывает, также, периодически.

Alexey: коТОНы :-) , может кто-нибудь объяснить мне расхождение данных на coinmarketcap (https://coinmarketcap.com/currencies/toncoin/ "Toncoin analytics", которые берутся с intotheblock)  и tonstat.com "On-chain activated wallets"  разница на пару порядков 🤯  как понять сколько активных кошельков реальных людей ? где посмотреть? заранее спасибо!

Vladimir: Кто как хочет, так и считает. https://tonscan.org/stats вот тут красиво и понятно. (reply to 173905)

Alexey: да красиво то красиво ) а где правильно ? 😁 (reply to 173906)

Alexey: "On-chain wallet activations per day" - уже третий день по 60k+  это реально вообще? что происходит? раньше не более 20k в день прибавлялось

Denis: рекомендую sse. работают лучше и популярнее. возможно вебсокеты вообще прикроем. (reply to 173869)

A: Там конкурсы с раздачей на новые кошели, вот и клепают

Ruslan: уже юзаю, у вас корсы не стоят на вызов из браузера? (reply to 173909)

Denis: всё там стоит.

Denis: как надо.

Denis: коинмаркеткап считает тоны забриджованные в эфир скорее всего (reply to 173905)

Alexey: дк я не про cap (с cap там вроде бы все ок) а количество кошельков выглядит странно (мягко говоря) (coinmarketcap берет это с https://app.intotheblock.com/coin/TON) (reply to 173914)

Denis: еще раз: есть тоны забриджованные в эфир. для них в эфире есть сматконтракт с токенами erc-20. они считают холдеров этого erc20 (reply to 173916)

Alexey: ааа  понимаю спасибо но зачем же они так - негодяи (reply to 173917)

Denis: curl -s https://tonconsole.com/stats/results/cf35985c-a53c-457b-b75f-73bfc06cf5e9.csv | tail -7 2024-03-10 00:00:00 +0000 UTC,44959 2024-03-11 00:00:00 +0000 UTC,46475 2024-03-12 00:00:00 +0000 UTC,57794 2024-03-13 00:00:00 +0000 UTC,95255 2024-03-14 00:00:00 +0000 UTC,154183 2024-03-15 00:00:00 +0000 UTC,181261 2024-03-16 00:00:00 +0000 UTC,116678  вот вам daily active users

Alexey: спасибо! буду разбираться! (reply to 173920)

VIKTOR: Потому что учитываются 3 сети ETH BnB smart chain TON Chain (reply to 173916)

Denis: Как раз наоборот. Они одну учитывают

VIKTOR: Да, ты прав. Используют информацию с eth. (reply to 173924)

Komron: Ребят привет. Использую tonconnect-ui, делаю транзакцию   return await tonConnectUI.sendTransaction({   validUntil: Math.floor(Date.now() / 1000) + 60,   messages: [     {       address: recepient1,       amount: toNanoTON(0.97),     },     {       address: recepient2,       amount: toNanoTON(0.3),     },   ], });   Если у человека нету 1 ТОН, но есть как минимум 0.3, то показывает транзакцию для 0.3, то есть минимально возможную. Мне нужно что-бы отображалось "Недостаточно Средств" в таком случае, ибо я хочу чтобы обе транзакции прошли. Заранее спасибо за ответы.

Kmm5: Здравствуйте у меня проблема я там в трейдах понажимал и 10миллионов пропали

Kmm5: Можно как то решить?

Vladimir: /report (reply to 173936)

Kmm5: А что стало ? (reply to 173939)

Vladimir: 1. Получать адрес. 2. Проверять баланс. 3. Платить. (reply to 173934)

Komron: вот, у меня была такая мысль,спасибо. А как проверить баланс, нигде не высвечивается ? tonconnect-ui нету методов документации, и при этом нужно как то высчитать transaction_fee (reply to 173943)

Kmm5: . Может скажете когда придут что делать ? (reply to 173936)

Vladimir: Да, там нет. Но можно через API запросить. (reply to 173944)

Komron: Можете выслать ссылку на какой нибудь пример (reply to 173947)

Vladimir: https://toncenter.com/api/v2/getAddressInformation?address=UQDYzZmfsrGzhObKJUw4gzdeIxEai3jAFbiGKGwxvxHinf4K (reply to 173948)

Torkusz: https://tonapi.io/v2/accounts/UQB2KVoJySTZZArB6tSXUeK-IQMKRR6ayHez11UCeiWb17C1 (reply to 173948)

Komron: благодарю. Можете еще подсказать как высчитать transaction_fee. Ибо буду проверять еще и isBalanceEnoughFor(overall + transaction_fee)

nik: Всем привет, следую по инструкции https://docs.dedust.io/docs/swaps，пытаюсь сделать скрипт на dedust sdk для обмена jetton -> ton (ton -> jetton работает отлично)  https://tonscan.org/address/UQBMKJSVEWFCOoFPmcX-Tv25FKxypJYEr7cgcbGSVDDpcBKF  тут пример транзакций, для покупи работает нормально... но для jetton->ton просто возвращает тоны на кошелек и токены не трогает  const tonClient = new TonClient4(); const mnemonic = "amateur theater ...".split(" "); const keys = await mnemonicToPrivateKey(mnemonic); const wallet = await tonClient.open(await WalletContractV3R2.create({ workchain: 0, publicKey: keys.publicKey })); const sender = await wallet.sender(keys.secretKey);  const factory = await tonClient.open(await Factory.createFromAddress(MAINNET_FACTORY_ADDR)); const tonVault = await tonClient.open(await factory.getNativeVault()); const targetAsset = await Asset.jetton(await Address.parse(tokenAddress));  const pool = tonClient.open(await factory.getPool(PoolType.VOLATILE, [targetAsset, Asset.native()]));              const tokenVault = tonClient.open(await factory.getJettonVault(Address.parse(tokenAddress))); const tokenRoot = tonClient.open(await JettonRoot.createFromAddress(Address.parse(tokenAddress))); const tokenWallet = tonClient.open(await tokenRoot.getWallet(sender.address));  await tokenWallet.sendTransfer(    sender,    toNano("0.3"), // 0.3 TON    {        amount: toNano("0.3"),        destination: tokenVault.address,        responseAddress: sender.address,        forwardAmount: toNano("0.25"),        forwardPayload: VaultJetton.createSwapPayload({        poolAddress: pool.address,      }),  }, );

nik: Прошу помочь, уже несколько часов пытаюсь это сделать (reply to 173952)

— 2024-03-17 —

nik: и вопрос, tokenWallet == sender.address? tokenWallet https://tonviewer.com/EQCGvn3Ao52y_FgqAsmpwW4FZH1LyM2xRYTEYzrQJPbGmALI, tonviewer пустой (reply to 173952)

nik: WalletContractV3R2  как-то связанно с версией кошелька (reply to 173952)

Komron: а тут баланс в нанотонах, правильно ? (reply to 173950)

Vladimir: Да. (reply to 173961)

Torkusz: Да (reply to 173961)

medhoney: Добрый день вам! Нужен бот, который будет с помощью смарткотракта в блокчейн тонкойне купить мне NFT ниже за указанную цену. Это вообще реально сделать?

Mirka: Может тебе в англоязычный чат обратиться? (reply to 173981)

nøt hum𝘼n: Если вы хотите купить ваучер 10м, хочу вас огорчить, эти ваучеры падают на кошелек мистера гали ещё до минта самого ваучера... (reply to 173981)

medhoney: не до минта, как только выставляется, он выкупается! (reply to 173984)

medhoney: много аккаунтов, которые пытаются выкупить, потом скидывается на основной акк, это и есть галя

medhoney: много аккаунтов, много ботов, поэтому вероятности больше!

nøt hum𝘼n: Это можно делать и с одного аккаунта, он покупает ваучер ещё до того когда по нем инфы нету, либо он где-то ее берет раньше инфы сайта ( с самого смартконтракта? 🤔) (reply to 173986)

Mirka: В tact сообщение для получения jetton_wallet выглядит так? message(0xd1735400) TakeWalletAddress {     query_id: Int as uint64;     wallet_address: Address;     owner_address: Address?; }

medhoney: я так понимаю, появляется инфа раньше, чем на сайте, пока сайт обработает (добавление нфт на продажу) страничку и тд, в смартконтракте и тд уже инфа (reply to 173988)

nøt hum𝘼n: Ну я ее не нашел там, пока что Все что угодно кроме цены (reply to 173991)

medhoney: я думаю, там не цену надо искать! (reply to 173992)

Artem: Добрый день! Можно ли через терминал мак отправить транзакцию в блокчейн тон? Мне нужно по приватному ключу перевести нфт номер с одного кошелька на другой

EmirNonstop: Подскажите, почему при входе со свежесгенерированной мнемоник фразой в кошелек ton, публичный адрес отличается от того что выдат wallet.address

&rey: А какой адрес другой? И версия совпадает? (reply to 174001)

EmirNonstop: версии совпадают   похоже что в тестовой сетке выдает результат адреса (reply to 174002)

EmirNonstop: client = TonCenterClient(orbs_access=True) (reply to 174002)

EmirNonstop: подскажи, client = TonCenterClient(orbs_access=True) это провайдер для тестовой/локальной сетки? (reply to 174002)

&rey: Для mainnet. (reply to 174005)

EmirNonstop: тогда не понимаю  client = TonCenterClient(orbs_access=True) my_wallet_mnemonics = mnemonic_new() my_wallet = Wallet(provider=client, mnemonics=my_wallet_mnemonics, version='v4r2')  print(my_wallet.address, my_wallet.mnemonics) (reply to 174006)

&rey: Ну а какой адрес другой? С чем не совпадает EQBEle...?

EmirNonstop: фрагмент кода выдает на экран адрес и мнемоник   после чего, я захожу в тон кошелек с данной фразой и у этого кошелька адрес "UQBEleDKlvIU_tBPOtNA-khgjyRK-epjKIGCkT2X4Uk8g0Lk"  вывел на экран EQBEleDKlvIU_tBPOtNA-khgjyRK-epjKIGCkT2X4Uk8gx8h (reply to 174007)

EmirNonstop: UQBEle

EmirNonstop: а все

EmirNonstop: разобрался

EmirNonstop: Спасибо

Alex: Привет! При переводе TON с кошелька телеграмма на baybit транзакция зависла. С кошелька списались, а на baybit  не зачислились. Может кто то помочь? ) спасибо

User: Там выдаётся хеш транзакции, можете его скинуть (reply to 174015)

Alex: 7927bedfbd61e1a79a2acc90c543b36ef61a2ad5b73d133497850d03b2cf4958 (reply to 174016)

User: Транзакция ушла, вам нужно проверить правильность MEMO(если на bybit он есть, не пользуюсь, не знаю). Если у bybit каждый кошелек генерируется отдельно, то надо проверить кошелек, правильно ли вы его ввели (reply to 174018)

Alex: Адрес кошелька на baybit мой. MEMO не вводил (reply to 174023)

User: Можете в личку прислать скриншот пополнения на bybit, toncoin'а, я вас сориентирую (reply to 174024)

User: Там где кошелек для пополнения показывается и кр код (reply to 174025)

ъуъ: Добрый день! Подскажите, пожалуйста, как айпи из конфига для подключения к ноде тона преобразовать из этого числа в нормальный формат с точками?

Андрей: преобразовать int32 в ip, сделать это на разных языках по разному можно (reply to 174031)

ъуъ: получилось, спасибо)

Dmitry: Коллеги, всем добрый день! Будет ли в этом году хакатон? И когда? Вроде в конца марта что-то планировалось?

Dmitry: Просто у нас есть музыкальный проект, нам надо его сейчас полностью совместить с экосистемой Ton, помимо всего прочего, интегрировать Ton, Ton Connect, ipfs, third-web, lava Network (reply to 174036)

Dmitry: Если есть желающие стать частью команды, за жетон или же послед опцион, долю , было бы здорово, поскольку рук катастрофически не хватает. Собственно за тем и хотим пойти на хакатон.

Dmitry: Плюс своя рекомендательная система ИИ для музыкальной индустрии на платформе

nik: Привет, подскажите какой код для jetton deploy?  https://github.com/tonkeeper/tongo/blob/master/abi/messages.md

&rey: Сообщение со StateInit, где код — какой-либо контракт жетона. (reply to 174042)

nik: спасибо, а где указывать StateInit (reply to 174043)

nik: API method GET https://tonapi.io/v2/sse/accounts/transactions?accounts=<list-of-accounts>&operations=<list-of-operations> takes in a list of account IDs and an optional list of operations.   я хочу через tonconsole подписаться на деплои новых токенов (reply to 174043)

User<6685616690>: Друзья,подскажите ton.vote документация есть у кого? Реализовали они уже функции для экосистемы(работа с жетонами,нфт и тд)?

SoftlayerX: Не знаю по адресу ли, вопрос по Тонкипер. Не могу переключиться на тестнет. В режиме разработчика отсутствует такая опция. Подскажите, как можно это сделать?

User<6908616126>: Меню создания кошелька тестнет перенесли с новым обновлением

SoftlayerX: Гуглил, там по другому это было реализовано. Видимо после обновления поменяли. Благодарю! (reply to 174054)

User<6908616126>: Да. С новой обновой такое (reply to 174055)

ъуъ: Подскажите, пожалуйста, а нода тона умеет присылать вебхуки о новых транзакциях на выбранных кошельках?

ъуъ: или это индексер так работает?

nik: API method GET https://tonapi.io/v2/sse/accounts/transactions?accounts=<list-of-accounts>&operations=<list-of-operations> takes in a list of account IDs and an optional list of operations.   я хочу через tonconsole подписаться на деплои новых токенов  какой ID операции?

Myawka ^_^ 🥇: https://github.com/tonkeeper/tongo/blob/master/abi/messages.md (reply to 174059)

Myawka ^_^ 🥇: вот список удобный, глянь

nik: спасибо, да, я уже смотрел, но там нет кода для jetton deploy (reply to 174060)

Cp Price: Как получить все нфт на аккаунте через библиотеку tonweb?

slavagm: Мдаа, не ожидал, Снайпер))

Denis: к сожаению на деплои токенов подписаться не получится (reply to 174059)

Denis: вообще мы планируем большой рефакторинг всех подписок в ближайшее время и хотелось бы услышать список пожеланий

Denis: можно в приват или https://t.me/tonapitech

nik: Спасибо за ответ! (reply to 174076)

Bruce Long: Can someone tell me where to deploy contract presale

nik: https://github.com/tonkeeper/tongo/blob/master/abi/messages.md  насколько актуален этот список?  по dedust ничего не работает, для stonfi более/менее

Vladimir: Нашли место для разборок.

Артем: почему бы просто не искать фрилансеров на специально созданных для этого платформах аля freelancehunt, upwork и далее по списку

kwceo: смешно, смешно 👥 (reply to 174074)

Cp Price: не можешь и мне помочь с этим? (reply to 171146)

User<6908616126>: hello everyone! tell me if there is an API for getgems.io which does not block requests by the CORS policy. I found it api.getgems.io but when I try to make a request using axios, I get a 400 code and a CORS error (forwarded from User<6908616126>)

User<6908616126>: I also have this problem (reply to 174119) (forwarded from Nxrix)

User<6908616126>: I need to get NFT items with the owner field equal to the wallet address for which I want to get all the nft. if not getgems, how can I get this data? (forwarded from User<6908616126>)

User<6908616126>: https://tonapi.io/v2/accounts/<wallet address>/nfts?limit=1000&offset=0&indirect_ownership=false   here is the solution to the problem  https://docs.tonconsole.com/tonapi/api-v2 (reply to 174120) (forwarded from User<6908616126>)

User<6908616126>: Читай (reply to 174118)

Артем: кто тебе такое сказал? чем специалист по TON отличается? искать специалистов в тг, особенно сфере крипты — это регулярно отправлять крипту и терять исполнителя (reply to 174123)

Cp Price: спасибо (reply to 174124)

Andrey: сейчас всем кто репорты друг на друга рассмотрим в пользу бана

Andrey: прекращайте

Влад: Думаю тут уже спрашивали может поможет кто История с НФТ ваучер  Поставил вывод нфт 10кк Перекинуло на тон спейс видимо для оплаты комиссии ( но страница тон спейса не загрузилось ) Вышел оттуда  Зашел в бота ноткоин 10кк списалось В итоге ни ноткоина ни нфт  Сталкивался кто ?

User<6908616126>: Не сюда (reply to 174142)

Vladimir: Так тут не чат ноткоина. (reply to 174142)

Влад: А да? А никто не даст ссылку куда обратится?

Vladimir: Нет. ОбратитЬся. (reply to 174145)

User<6908616126>: Честно, хз где это обсуждают) https://t.me/toncoin_rus_chat думаю тут вас направят куда надо

NMI: https://t.me/not_support_chat (reply to 174145)

Влад: Помогли спасибо (reply to 174148)

Michael: Ребят, подскажите пожалуйста, вылетает вот такая ошибка в консоли, что это за Buffer и как его установить?

kemen: ребят, посоветуйте, как удобнее всего свапы парсить определенной монеты?

Michael: Подскажите пожалуйста, как решить эту проблему в браузере, не могу работать с 64-х битными числами как я понял (reply to 174151)

User<6908616126>: npm install buffer  window.Buffer = window.Buffer || require('buffer').Buffer;  Но насколько знаю, инициализацию можно заменить на require('buffer'), пробуйте (reply to 174154)

Sound: привет ребят, а кто нибудь работал с хайлоад В2 кошельками? Можно ли их к какому-нибудь приложению подключить чтобы проще было мониторить? Если просто взять сидку от В2 и вставить в тон кипер то там новый в4 кошелёк показывается

Michael: подскажите, куда вторую строку кода нужно прописать? (reply to 174156)

User<6908616126>: В начало app.ts(app.js) (reply to 174159)

Michael: Не помогает (reply to 174160)

Michael: У меня vite typescript проект если что (reply to 174160)

User<6908616126>: Не помогла ни первая строка, ни вторая?

ᅠ ᅠ: У vite вроде буфер в отдельном файле настраивается, вместе с другими плагинами (reply to 174162)

Michael: Нет, возможно я не туда прописываю?

ᅠ ᅠ: vite.config или что то в этом роде, ещё у них свой пакет есть, специально для буфера

User<6908616126>: Возможно, честно говоря я с буфером не работал (reply to 174164)

Michael: а не подскажите как установить? (reply to 174166)

ᅠ ᅠ: Мин через 5 гляну (reply to 174168)

Michael: Благодарю (reply to 174169)

ᅠ ᅠ: ищешь файл vite.config.ts

Michael: Я нашел решение которое помогло

ᅠ ᅠ: ну и вот пример моего файла import { defineConfig } from "vite"; import react from "@vitejs/plugin-react"; import { nodePolyfills } from "vite-plugin-node-polyfills"; import tsconfigPaths from "vite-tsconfig-paths"; import svgr from "@svgr/rollup"; // https://vitejs.dev/config/ export default defineConfig({   plugins: [react(), nodePolyfills(), tsconfigPaths(), svgr()],   base: "/",   server: {     port: 3008,   },   build: {     sourcemap: false,   }, });

Michael: Только что, спасибо

ᅠ ᅠ: не за что

Michael: Может еще знаете тогда из-за чего может такая ошибка в tonConnect выпадать?

ᅠ ᅠ: Без понятия

Michael: Все равно спасибо, очень помогли

ъуъ: А как можно понять из транзакции с опкодом 0x7362D09C какой жетон перевели? Хотя бы адрес контракта этого жетона, а в идеале ещё и код  В схеме не нашёл( https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md

Vokhma: Я почему-то не нахожу кнопку перехода в testnet в приложухе tonkeeper на андроиде. Раньше кнопка была. Кто-нибудь знает куда она делась?

User<6908616126>: Сеголня уже отвечал, ща (reply to 174182)

User<6908616126>: Вот (reply to 174053)

Vokhma: Спасибо

&rey: Она выполняется на кошельке жетонов, так что можете взять мастер-контракт из его данных. (reply to 174180)

&rey: Вы же в курсе, что в тоне для каждого пользователя кошелёк жетонов отдельный + есть мастер-контракт?

Aziz: Хоетл узнать а какую библиотеку/фреймворк для UI используют в основном в проектах telegram?   Для web3app

User<6908616126>: Tg webapp это сайт, так что js фреймворки, такие как реакт, ангуляр и vue (reply to 174188)

User<6908616126>: Tonapi для связи с блокчейном (reply to 174189)

Michael: на локальном проблема ушла, а на тестовом сервере все равно вот такую ошибку дропает (reply to 174177)

ᅠ ᅠ: Хм, странно, с такой проблемой не сталкивался, не могу помочь (reply to 174191)

ъуъ: Помогло, спасибо) (reply to 174186)

Aziz: Тогда буду искать через них, спасибо (reply to 174189)

Vokhma: Я тут читаю про NFT и всё не могу понять один момент. Вот допустим у меня есть NFT картинка. То есть в блокчейне есть запись о том, что я ей владею. А сама картинка где хранится? Тоже в блокчейне или где-то в другом месте?

&rey: Когда как. Можно в TON Storage, можно ончейн (маленькую), можно по ссылке где-то в интернете. (reply to 174200)

Vokhma: А в блокчейн тогда что записывается? Ссылка или хэш картинки? Или можно оба? (reply to 174213)

&rey: Только ссылка. (reply to 174216)

Vokhma: А если тот сторонний сервис потерял файл?

Vokhma: Или изменил формат ссылок?

Vokhma: Хотя TON Storage наверно так не сможет

User<6908616126>: Тон сторэйдж ты разворачиваешь у себя на сервере, так что не изменится. А если ссылка на сторонний ресурс то картинка теряется и превью больше нет🤷‍♂️ (reply to 174220)

ъуъ: А можно ещё поинтересоваться? У меня блок сканируется за 3 секунды. Есть вероятность того, что в какой-то момент блоки в тоне начнут появляться быстрее, чем у меня происходит сканирование, и я всегда буду жить нарастрающим с отставанием?

Denis: ну если вы это делаете последовательно то такой момент не за горами

Denis: собственно уже сейчас бывают такие периоды

Denis: но я вас уверяю что при должном старании есть куда оптимизировать

Vokhma: Здесь есть ребята что пишут документацию? У меня есть претензия, в документации часто упоминаются термины без описания что это такое. Вот например на странице "Signing and Verification" упоминается некий "ton_proof", и я не могу нагуглить что это такое.

Vokhma: Есть ли в TON возможность нескольким пользователям подписать файл? Например, когда несколько человек заключают договор, и подписывают его своим кошельком.

Alexander: Тут TON для этого даже не нужен, можно потом подписи положить в бч и хеш файла если хочется это закрептить в каком-то леджере, то есть например в блокчейне (reply to 174234)

Vladimir: Претензия может быть только к услуге, за которую Вы платите. В документации есть такая картинка. Вам она ничего не говорит? (reply to 174233)

Vokhma: Да, картинка показывает процесс верификации пользователя. Она всё равно не объясняет что за ton_proof и какая у него структура.

Vladimir: Прямо под этой картинкой. Дословно "структура ton_proof". (reply to 174237)

Vokhma: А ещё слово Signing в названии путает. Слово переводится как "Подпись", а по статье выглядит что имеется ввиду "Sign In". Что вообще имеет другой смысл. Я ищу инфу по подписям, а попадаю на статью об авторизации.

Vladimir: Можете переписать документацию, там такая возможность есть. (reply to 174239)

Vokhma: В нормальной документации сперва объясняются термины, а потом их применения (reply to 174238)

Vladimir: Здорово. Можете переписать одну страницу, потом все будут её брать за эталон. (reply to 174241)

Vokhma: Без проблем, только мне нужно сперва самому разобраться. Я могу задавать вам вопросы? (reply to 174242)

Jumbo 🍜: Всем привет! Можно ли как-то из тон ноды вытащить транзакции не из одного блока, а сразу из 10? Например, списком перечислить в запросе их seqno

Axcent: Пишу скрипты для evm блокчейнов и там для каждой транзакции есть data(не date) по которой можно вызывать с контракта какую либо функцию не имея исходного кода контракта. Как можно отправить транзакцию на контракт с вызовом функции через data, только в тоне, используя tonsdk на питоне?

Axcent: В эфире можно через аби, но если будет прокси контракт или какая то другая ситуация, где Аби будет не возможно/не удобно использовать, то проще самому генерировать data уже с нужными параметрами в ней на основе других транзакций с этим контрактом (reply to 174248)

Axcent: Вот контракт например EQDPNq_v_rCljQzrueWeIxACBVgWlJr0qtXwaZSipMRIj7pQ, в нем нет исходного кода, а взаимодействовать с ним надо как-то (reply to 174248)

Vokhma: Держите. https://github.com/ton-community/ton-docs/pull/496 Переписал как сам понял. Надо бы ещё картинку поменять, но я никогда с svg не работал. Ещё хотелось бы видеть нормальные названия переменных и комментарии с описанием шагов в примере кода на TS. Если самому доведётся делать проверку пользователя, пришлю свой пример. (reply to 174242)

Myawka ^_^ 🥇: Приветствую, подскажите кто знает, на какие события подписываться для получения действий с нфтшками?  https://github.com/tonkeeper/tongo/blob/master/abi/messages.md  Пока нашел только начало аукциона и передачу NFT, какое событие например говорит об отмене аукциона?

Myawka ^_^ 🥇: Сравниваю получаемые мною события с уведомлениями в боте NFT TONificator, в нем уже несколько отмен, у меня пусто

nøt hum𝘼n: Тоже интересно, если кто-то знает как подписаться на обновления по выставленным на продажу нфт в смартконтракте, с радостью бы почитал

Myawka ^_^ 🥇: смотрю вот по tonviewer, похоже что транзакции с комментарием Something happened but we don't understand what это отмены аукционов, но я не уверен чет)

— 2024-03-18 —

Boris: это похоже на сообщения от гг они в кошелке тоже появляются (reply to 174256)

Anya: Это у тонкипера (reply to 174256)

Vokhma: Что происходит с файлами которые я загружаю в TON Storage? Они автоматически рассылаются другим людям в сети, или им нужно скачать по Bag ID?

Vladimir: Что значит автоматически? Зачем мне, например, Ваши файлы скачивать? (reply to 174260)

Vladimir: https://habr.com/ru/amp/publications/767214/  Старая, но вполне понятная статья. (reply to 174260)

Vokhma: Ну вы же подключены к блокчейну чтоб хранить инфу о транзакциях друг друга. Вот я думал что и в TON Storage люди жертвуют своими дисками для поддержки децентрализованного хранилища. Ан нет. (reply to 174261)

Vladimir: Было бы странно, хранить все файлы на нескольких, хоть и крупных, серверах. (reply to 174263)

Vokhma: Я не имел ввиду хранить все файлы везде. Можно распределять их в разные места. Я просто хотел узнать, выгружается ли файл к другим автоматически, как транзакции в блокчейне, или цель в том чтоб я сам поднимал ноды и раздавал им свои файлы, а TON Storage здесь просто как программа для этого дела.

Daniil: TON Storage с блокчейном напрямую не связан. Это аналог IPFS и торрентов. (reply to 174263)

Vokhma: Я это понял. Просто думал что хранилище тоже распределяется между людьми в сети.

Daniil: Если твой файл себе загрузит несколько человек, то это повысит его доступность, как в IPFS и торрентах. Но так как никто обычно не хочет просто так жертвовать своим дисковым пространством, нужно платить кому-то за хранение твоего файла. (reply to 174267)

Vokhma: Либо поднимать несколько нод самостоятельно, так?

Vokhma: Как мне сообщить другим нодам о том что им надо скачать некий файл? Надо это реализовать самому или в TON Storage есть функция для такого?

Daniil: Дать им bagid. (reply to 174270)

Vokhma: Да это понятно что файл качается по bagid. Я о том, что я сам должен реализовать рассылку bagid? Или в TON Storage есть функция мониторинга некой папки, и при добавлении файлов он автоматически сообщает другим нодам о нём?

Daniil: А зачем другим нодам твой файл? (reply to 174272)

Vokhma: А зачем TON Storage существует?

Vokhma: Мне нужно хранить файлы в нескольких местах для надёжности. В описании TON Storage написано что он это умеет. Вот я и спрашиваю детали.

Vladimir: Это аналог торрента. Он ничего не скачает, пока ему не дать Bag ID, как например .torrent или magnet. (reply to 174272)

Vladimir: Он сейчас в зародыше. Прикол будет тогда, когда можно будет хранить данные за TON. (reply to 174275)

Daniil: Почитайте в интернете про то что такое IPFS и тогда подобные вопросы про TON Storage отпадут (reply to 174276)

Vokhma: Да блин, я достаточно знаю про IPFS. Меня конкретно TON Storage интересовал, потому что по названию можно подумать что он похож на блокчейн, но для хранения файлов. А оказывается нет, это просто ещё один IPFS, который когда-нибудь может быть наверное возможно станет привязанным к крипте.

Myawka ^_^ 🥇: Подскажите пожалуйста, планирую написать скрипт который будет отслеживать все действия с NFT, аукционы, передачи, продажи итд  Уже начал разработку, слушал https://tonapi.io/v2/sse/accounts/transactions и выбирал что мне нужно, но как оказалось не все методы подходят, не все транзакции "подписаны"  Как лучше реализовать скрипт, слушать https://tonapi.io/v2/sse/mempool, расшифрововать boc, искать инфу а нем?

Myawka ^_^ 🥇: раньше получал инфу по tx_id, из нее тип транзакции in_msg > decoded_op_name, например teleitem_start_auction, это значит что начался аукцион, но как я понимаю лучше слушать мемпул, расшифрововать вручную? Извините, особо не разбираюсь (reply to 174283)

Alexey: Всем привет, может кто-то разрабатывал казино на блокчейне TON? Хотелось бы пообщаться, по этому поводу, буду рад любому ответу.

­: а толку, такие проекты игнорируются верхушкой, даже если привлекут новых пользователей с деньгами в блокчейн Гэмблинг зло а что хотел? (reply to 174297)

Alexey: Отписал тебе (reply to 174299)

Artem: Добрый день! Подскажите, я создал кошелек тон в safepal, теперь не могу перевести нфт оттуда так как в мобильном кошельке не получается подписать транзакцию в getgems и линкануть этот кошелек никуда не получается, потому что есть только приватный ключ от него. Что подскажите делать?

⁣: Добрый день. Реализую пополнение через TON, подскажите пожалуйста, для ts/js какие библиотеки сейчас самые ходовые?

&rey: Напишите на JS команду, которая сформирует сообщение для перевода и отправит его по приватному ключу. Tonweb можно достать, например, на wallet.ton.org. (reply to 174302)

Artem: А где написать? (reply to 174315)

&rey: В консоли браузера. (reply to 174319)

🎐*<@Maxim: 🙈 привет ! а почему @WikiMar не закрывает ячейку с помощью .endCell(), причем дважды! и это все в Nft-обертке и все работает

nonam3e: потому что внутри internal преобразуется как надо, вот и работает (reply to 174322)

🎐*<@Maxim: Зачем тогда вообще изобрели endCell()? (reply to 174324)

&rey: Когда хеш нужен) (reply to 174325)

&rey: Ну или ончейн.

Oleg: 🔥tonutils-go v1.9.0 Released!  Changelog:     Cell Dictionary reimplemented to read and update data in cell tree directly (same with ton node)     Cell proof creation rethought, added ProofSkeleton type for friendly and easy proofs creation     Precalculated cell hashes instead of lazy calculation (for parallel reads safety)     Serialization/Deserialization of registered tlb interface types     Added TL structures for the rest liteserver types     Liteclient connection pool better balancing     BoC serialization with cache flag support     Added cell builder direct ToSlice method     ADNL TCP Server implementation     ADNL TCP optimizations     RLDP optimizations     Address to json serialization     DHT Buckets implementation     Ext and Var address string serialization     tlb Stack tuple serialization support     tlb.Coins copy in Nano() return     Fixed 2nd and 3rd level proofs creation     Fixed BoC root index deserialization order     Other minor fixes     Test coverage increased

sd: как реклама курса не очень

Andrey: учитывая что тебя нет ни в одной из групп tondevstudy выглядит подозрительно (reply to 174350)

Dmitry | backend4you.ton: На Байбите это Tag. Его указывали? (reply to 174024)

🎐*<@Maxim: 🤷🏼 Что то не так после обновления Tonkeeper ! Я нажал 5 раз на иконку и теперь тут больше нет переключателя на Testnet, как мне включить теперь тестнэт? Теперь как-то по другому он включается ?

𝐒𝐭𝐚𝐧𝐢𝐬𝐥𝐚𝐯 KLnk: В мультикошах (reply to 174361)

Dmitry | backend4you.ton: включи dev mode и потом на главном экране добавь ещё один кошель -будет опция добавления в тестнете (reply to 174361)

Savanswaty: TypeError: ton_1.Builder is not a constructor    - как исправить ?

#: кто-то знает как получить держателей токена и количество токенов на их адресе?

Афоня: В контракте токена (reply to 174371)

#: мне нужен парсинг (reply to 174374)

Mihail: всем привет. нужен простой скрипт на js: 1) Принимает rest post запрос на отправку jettona, с аргументами:  - адрес кошелька для токенов - кол-во токенов  Так же идет проверка по токену авторизации, просто в Headers передаем ключ, скрипт его сравнивает с константой (хардкод).   После надо просто отправить нужные токены на нужный кошелек и вернуть 200 код если все ок, 500 если все пошло не по плану, 400 если ошибка ввода.  Ответ реста в json  Кто готов сделать, пишите в личку сколько нужно времени и сумму.

Denis: простой скрипт на жс который отслеживает отправку жетонов. норм

Denis: возьмие gobicycle

MaxFee: stack = await client.run_get_method(address=address, method="get_nft_data", stack=[]) index = stack[1] collection = stack[2].load_address().to_str(1, 1, 1) item_address = \ (await client.run_get_method(address=collection, method="get_nft_address_by_index", stack=[index]))[0].load_address().to_str(1, 1, 1)  Ребята подскажите пожалуйста как можно отсюда вытащить метадату НФТ, и можно ли вообще?

Никита Рязанов: Что не так делаю? Пытаюсь упаковать метадату для NFT из офчейна, в итоге нфт создается, но в метадате ничего нет ({})

Konstantin: Всем привет! Подскажите плз, bridge.tonapi.io - а где почитать про то, что из себя должно представлять body? В доке просто описано, что это  base64_encoded_message, а структуры нигде не нашел...

Кирилл: Всем привет! Кто может помочь с страничкой presale отпишите в личку обсудим цену

#: как через pytonapi посмотреть баланс в жетонах?

User<6186959158>: Куплю скрипт автоматического выкупа nft или закажу разработку

F: Это все на этапе тестирования, но попробуйте ton-torrent и в нем вкладку Providers вкупе с этим списком провайдеров (reply to 174281)

#: как через pytonapi посмотреть баланс в жетонах?

Nxrix: const hex2friendly = (workchain, hex, bounceable, testnet) => {     let bytes = [testnet ? 0x91 : bounceable ? 0x11 : 0x51, workchain ? 0xFF : 0x00];     for (let i = 0; i < 32; i++) bytes.push(+('0x' + hex[i*2] + hex[i*2+1]));     return btoa(String.fromCodePoint(...bytes)); }; Помогите, я получил этот js-код от кого-то, но окончание адреса неправильное, и я не знаю, как это исправить.

User<6908616126>: Покажите что вы ожидаете получить, и то что получаете

Daniil: почему не хотите использовать готовое решение из библиотек? (reply to 174414)

Denzel': Добрый вечер!  Подскажите пожалуйста, как получить https url для сайта на ton?  Нужен для manifest ton-connect

Nxrix: Я ненавижу использовать в своем коде большие запутанные библиотеки. (reply to 174416)

Nxrix: Input: hex2friendly(0,"ee5bd18b432c40715ea9701627d2fec7ba383c8a6fd10d03438cf242352a3da5",1,0); Output:  EQDuW9GLQyxAcV6pcBYn0v7Hujg8im/RDQNDjPJCNSo9pQ== Real address:  EQDuW9GLQyxAcV6pcBYn0v7Hujg8im/RDQNDjPJCNSo9pRW5 (reply to 174415)

Daniil: а обнаруживать как что-то ломается в проекте из-за того что ты неправильно реализовал какую-то функцию? (reply to 174422)

User<6908616126>: Ssl накатить на сервер для домена (reply to 174418)

Denzel': А ssl бесплатный? (reply to 174429)

User<6908616126>: Я полностью согласен с @Gusarich, используйте функции из библиотеки, репонятно где у вас произошла ошибка. Возможно один из флагов передан неправильно (reply to 174423)

User<6908616126>: Да. Выпускаешь самоподписанный сертификат и кайфуешь (reply to 174430)

Denzel': Спасибо! (reply to 174432)

Dmitry | backend4you.ton: Let’s encrypt выпускает бесплатные и им нормально доверяют все браузеры. А certbot позволяет сделать это автоматически (reply to 174418)

Denzel': благодарю. Попробую (reply to 174435)

Nxrix: да, я тоже сначала немного испугался, но мой проект не особо важен, и если я его исправлю и сделаю точным, то бояться нечего) (reply to 174428)

Alacrity: Нашел в документации способ перевода jetton'ов с помощью tonconnect  transaction = {     'valid_until': int(time.time() + 3600),     'messages': [         get_jetton_transfer_message(         jetton_wallet_address='EQCXsVvdxTVmSIvYv4tTQoQ-0Yq9mERGTKfbsIhedbN5vTVV',         recipient_address='0:0000000000000000000000000000000000000000000000000000000000000000',         transfer_fee=int(0.07 * 10**9),         jettons_amount=int(0.01 * 10**9),  # replace 9 for jetton decimal. For example for jUSDT it should be (amount * 10**6)         response_address=wallet_address         ),     ] }   Вопрос такой: jetton_wallet_address - это адрес жеттона, который привязан к кошельку? Если да, то зачем нужен recipient_address? И как отправить jetton, которого на пользовательском кошельке еще нет?

Grigory: Здравствуйте, можете, пожалуйста, подсказать?  при выполнении команды npx func-js ft/jetton-wallet.fc --boc build/jetton-wallet.cell в репозитории https://github.com/ton-blockchain/token-contract/  возникает такая проблема: ft/jetton-wallet.fc:40:12: error: undefined function pack_jetton_wallet_data, defining a global function of unknown type     set_data(pack_jetton_wallet_data(balance, owner_address, jetton_master_address, jetton_wallet_code));  stdlib.fc импортировали, не помогло. В самом репозитории писали, что компиляция контрактов происходила с версией func 0.3.0, у нас стоит 0.4.4, может ли это быть причиной?

slavagm: А в тонкипере как-то можно кошелек убрать?

slavagm: Ещё найти не могу где теперь создать кошелек в тестнете, только добавить по мнемонике предлагает..

Андрей: Привет, подскажите насчет ton-connect-ui  как метод нужно использовать, что бы после отправки транзакции прослушать что она отправилась успешно ?

Slava: sendTransaction(...).then(onSent) (reply to 174451)

User<6744533690>: Здравствуйте. У меня проблема. Есть TON на кошельке Atomic Wallet. Но они не дают сделать перевод. Вот такое сообшение:  TON sending operations might not work correcly in Atomic if your address is inactive on blockchain. Rest assured your funds are safely stored on your address on the blockchain. Our team is working on the issue.   Писал в саппорт, шаблонный ответ что решают проблему. Но проблеме уже 3 месяца.  Кто то решал эту проблему? Проверил, на тонскане есть мой кошелек. State Inactive. В разделе контракта: Uninitialized address This address doesn't contain any data in blockchain — it was either never used or the contract was deleted. Now it just aimlessly floats in the digital void.

User: Импортируйте в другой кошелек и выводите (reply to 174456)

User<6744533690>: Здорово! Но как это сделать?:) (reply to 174457)

User: А после их взлома, я-бы вообще там ничего не хранил

User: У вас там есть сид фраза из 12 или 24 слов, ее вставьте в другой кошелек - например tonkeeper или tonhub (reply to 174458)

User<6744533690>: Скачал tonkeeper, но там запрашивают 24 слова для восстановления (reply to 174460)

User<6744533690>: В AtomicWallet 12 слов

­😇: Trust wallet попробуй (reply to 174462)

User: тогда попробуйте dewallet в телеграмме или trust wallet

User<6744533690>: Спасибо! Уже завтра попробую! (reply to 174464)

nik: https://docs.ston.fi/docs/developer-section/dev-guide/swap  Привет, пытаюсь сделать скрипт для свопа JETTON -> TON через ston.fi   (для ton -> jetton работает)  Но постоянно выдает эту ошибку  An error occurred while swapping custom tokens: Error: Invalid argument  await tokenWallet.sendTransfer(sender, toNano("0.3"),   {      amount: tonToJettonTxParams.gasAmount,      amount: toNano("0.25"),      destination: Address.parse(toAddress.toString()),      responseAddress: Address.parse(senderAddress.toString()),      forwardAmount: toNano("0.25"),      forwardPayload: payload    }, );  const payload = await tonToJettonTxParams.payload  Подозреваю, что связано с payload...

nik: const swapTxParams = ...  // to execute the transaction you need to send transaction to the blockchain   // (replace with your wallet implementation, logging is used for demonstration purposes)   console.log({     to: tonToJettonTxParams.to,     amount: tonToJettonTxParams.gasAmount,     payload: tonToJettonTxParams.payload,   });    // reverse transaction is just a regular swap transaction where askJettonAddress is a ProxyTon address.   // see swap example for more details

nik: как потом эту транзакцию выполнить? (reply to 174468)

Andrei: Норм тут движ

Andrei: Ну что покодим)

Andrei: [A+L]=AL

Mirka: /report (reply to 174476)

— 2024-03-19 —

Andry: Доброго, а можно поподробнее, что за команда? Я так понимаю SafePal использует сид фразу с солью, на блокчейне ТОН. Т.к. она не импортируется в другие кошельки 🤔 (reply to 174315)

Zaphod: Да и вообще, сид не обязан подчиняться единому стандарту между разными кошельками, в отличие от приватника

Andry: Не обязан, например на соседнем ныне тоже популярном блокчейне сид из 12 слов, так вот 24 слова SafePal с лёгкостью импортируются в кошелёк (reply to 174493)

User<6744533690>: Восстановил кошеле по сид фразе в TrustWallet - на балансе показывается только DogeCoin. А у меня более 10 разной криптовалюты и USDT. Есть еще варианты? (reply to 174464)

User<6744533690>: Я повторю свою проблему, возможно днем кто-то сможет помочь или подсказать решение.

User<6744533690>: Здравствуйте. У меня проблема. Есть TON на кошельке Atomic Wallet. Но они не дают сделать перевод. Вот такое сообшение:  TON sending operations might not work correcly in Atomic if your address is inactive on blockchain. Rest assured your funds are safely stored on your address on the blockchain. Our team is working on the issue.   Писал в саппорт, шаблонный ответ что решают проблему. Но проблеме уже 3 месяца.  Кто то решал эту проблему? Проверил, на тонскане есть мой кошелек. State Inactive. В разделе контракта: Uninitialized address This address doesn't contain any data in blockchain — it was either never used or the contract was deleted. Now it just aimlessly floats in the digital void.

­­🇹 🇴 🇳 🇨 🇴 🇮 🇳: Ребят  будьте пожалуйста аккуратны и предупредите всех знакомых 🙏 эти скамеры аферисты и мошенники снова запускают свой Тонломбард , в августе месяце они кинули нас т.е холдеров на 9 анонимных номеров и до сих пор не вернули ни тоны ни номера , флор на номера на тот момент был больше 350 тон , лучше учится на наших ошибках чем на своих .... (forwarded from ­­🇹 🇴 🇳 🇨 🇴 🇮 🇳)

­­🇹 🇴 🇳 🇨 🇴 🇮 🇳: Может стыдно станет хоть

slavagm: Тут как с бэкапами (reply to 174505)

Denis: простите но минтить активы в виде нфт на блокчейне чтобы потом работать с ними через гаранта это какая-то педерастия (reply to 174505)

slavagm: Есть два типа людей: который делают бэкапы и которые пока не делают бэкапы

Denis: по этому вместо гарантов у нас тут смартконтракты

Артем: Как будто бы рядовой пользователь может оценить скамность этого контракта (reply to 174511)

Denis: а для этого есть репутация платформы

­­🇹 🇴 🇳 🇨 🇴 🇮 🇳: Говорят скомпрометировали , мы их продать планировали тогда кар раз флор был 350+ (reply to 174505)

Maksim: 1) это адрес жетон-кошелька юзера-отправителя. получить его адрес можно с помощью гет метода в жетон минтере get_wallet_address 2) recipient address - адрес кошелька получателя. Нужен он чтобы на него пришло уведомление о том что ему пришли жетоны 3) как вы хотите отправить жетоны если у юзера их нет? (reply to 174442)

abc <: Прикрепи к сообщению название их, чтобы люди могли найти это, если искали информацию о них. Фотография просто затеряется (reply to 174502)

Афоня: Напиши мне, выложим на канал кидал

­­🇹 🇴 🇳 🇨 🇴 🇮 🇳: Вся инфа в коментах есть , они решили по 2 кругу повторить ,,успех,, по скаму новичков , но при этом  не  исполнив свои обязательства перед тем кому должны номера , одному парню Олегу 7 шт должны ,    https://t.me/tondyor/3920 (reply to 174521)

abc <: Я к тому, что я вдруг увидел их рекламу и захотел узнать информацию о них, но в истории сообщений не будет сообщения твоего (reply to 174527)

Андрей: Всем привет! Есть тут разработчики vpn-ботов? Напишите в личку плиз, хочу пообщаться - есть пару вопросов

­­🇹 🇴 🇳 🇨 🇴 🇮 🇳: Забанили они нас (reply to 174528)

abc <: Что значит VPN-бот? (reply to 174530)

.: Может ли кто-нибудь объяснить, как получить результат транзакции после ее отправки? Метод транзакции отправки TonSDK возвращает .boc. Кроме того, как я могу получить статус такого ответа?  Когда я проверяю TON API и Toncenter, они принимают только транзакции хешей для запроса информации о транзакциях.

­­🇹 🇴 🇳 🇨 🇴 🇮 🇳: Что там на скрине в самом низу видишь ? Вот после этого поста мы и пошли в тонломбард будь он проклят , а могли за 380 номера продать (reply to 174528)

.: как эту хрень реализовать

Tim: Блокчейн целый нельзя, только проэмулировать транзакции (reply to 174538)

Tim: Если вам нужен прям блокчейн - поднимайте mylocalton, или полноценный ownner

Владислав: Всем доброго дня, я пытаюсь разобраться в TON для рабочего проекта. Сколько не читаю, всё равно плохо понимаю. Подскажите какие статьи нормально помогают разобраться в следующем. Фронтенд использует ton connect ui для react, у него получаем завести транзакцию, и по факту, он должен мне передать инфу о транзакции на бэкенд и я её подписываю и отправляю на кошелё(например ton keeper) Скажите пожалуйста где я не прав в своём описании процесса и где я могу почитать, чтобы стало понятно. Немного возникло ощущуение, что и сам tonconnect ui может делать транзакцию полного цикла

&rey: TON Connect вам даёт только возможность отправлять транзакции. Даже не читать блокчейн. (reply to 174543)

&rey: Вы даёте ячейку и данные для отправки, приложение кошелька после подтверждения подписывает перевод и отправляет.

&rey: На этом всё и ограничивается.

Владислав: Спасибо большое, ясности стало больше! (reply to 174545)

🦖DINO TON💎: Добрый день. Как можно повлиять на «приоритетность» транзакции? Чтобы транзакция с бОльшей вероятностью оказалась первой в блоке

&rey: Завести своего валидатора, на его блоках расставлять экстерналы как хотите. (reply to 174550)

Андрей: И это будет работать только иногда, когда пришла очередь до твоего валидатора создавать блок (reply to 174551)

🦖DINO TON💎: А есть вариант больше газа отдавать или что-то вроде этого? (reply to 174551)

&rey: Нет. (reply to 174553)

Oleksandr: Всем привет, вопрос по поводу ловушки honeypot в смарт-контракте. Кто сталкивался с таким смарт-контрактом на eth блокчейне или знает об этом, подскажите пожалуйста, есть ли способ написать смарт-контракт поверх, чтобы обойти ловушку?

&rey: Сначала встретьте на тоне, здесь не про эфир чат)) (reply to 174556)

Keino: 请问管理员 我被今天官方推特上的筹款欺骗了 是否可以得到处理

&rey: Подсказка, почему: ну его поощрять игры с отрицательным итогом. (reply to 174554)

F: @ton_help_bot (reply to 174558)

Егор: Внимательно присмотреться (reply to 174567)

Shatll: Всем привет! Подскажите, пожалуйста, что не так у меня со словарем. Когда передаю пустой словарь и запрашиваю его с контракта, получаю ошибку Not a cell: null. Когда передаю заполненный словарь, получаю ошибку EOF.  В контракте: Записываю словарь так: () store_data(slice owner_address, cell prize_dict) impure inline {     set_data(         begin_cell()             .store_slice(owner_address)             .store_dict(prize_dict)         .end_cell()     ); } ...     if (op == "set_prize_dict"c) {         cell new_prize_dict = in_msg_body~load_dict();          force_chain(owner_address);         store_data(owner_address, new_prize_dict);         return ();     }  Отдаю так (slice, cell) load_data() inline_ref {     slice ds = get_data().begin_parse();     return (         ds~load_msg_addr(),         ds~load_dict()     ); }  cell get_prize_dict() method_id {     (_, cell prize_dict) = load_data();     ~strdump("I`m in get_prize_dict");     ~dump(prize_dict);     return prize_dict; }  Запрашиваю так: export type PrizeContent = {     content: string; };  export const DictValue: DictionaryValue<PrizeContent> = {     serialize(src, builder) {         const cellContent = beginCell();         cellContent.storeBuffer(Buffer.from(src.content));         const cellMessage = beginCell();         cellMessage.storeRef(cellContent);         builder.storeRef(cellMessage);     },      parse() {         return {             content: ''         }     } };      async getPrizeDict(provider: ContractProvider): Promise<Maybe<Dictionary<number, PrizeContent>>> {         const res = await provider.get('get_prize_dict', []);         return res.stack.readCell().asSlice().loadDict(Dictionary.Keys.Uint(64), DictValue);     }  Деплой в тесте:         const dictionary = Dictionary.empty(Dictionary.Keys.Uint(64), Dictionary.Values.Cell());          for (let i = 0; i < 2; i++) {             dictionary.set(i, beginCell().storeStringTail('text' + i).endCell());         }          lesson3 = blockchain.openContract(Lesson3.createFromConfig({             ownerAddress: owner.address,             prizeDictionary: dictionary         }, code));  Вроде вставил все куски кода, связанные со словарем. Извините за длинный пост, я только учусь)

User<6908616126>: Наоборот, это вам спасибо что пост один длинный, а не 100500 коротких))) (reply to 174576)

Egor: Кто сталкивался с проблемой, открываю тма, подписываю транзу через тонспейс, перед тем как подписать разумеется закрываться основная тма и открывается wallet, тарнзу подписал, а как теперь взять хеш транзы или затрекать отмену подписания?

Alex: Всем привет, вышла новая версия MyLocalTon!  Теперь можно запускать MyLocalTon на сервере с урезанной джавой (headless), которая не поддерживает GUI.  Так же, можно специально указать, чтобы не было GUI: java -jar MyLocalton.jar nogui  Еще добавилась возможность привязать валидатор к публичному айпи: java -jar MyLocalton.jar <external-ip>  Запланированные фишки: * консоль управления для non-GUI режима; * REST интерфейс, так же для управления MyLocalTon без GUI;

Йцукен: уважаемые, вот на этот вопрос есть ответ с примером на answers.ton, но ведь v1 уже отключен, в v2 такое уже невозможно? (reply to 113208)

Никита Рязанов: Использую tonutils-go, пытаюсь получить master chain с помощью ton.API.CurrentMasterchainInfo, паникует panic: cannot get master chain info: get masterchain info error (*ton.retryClient): no active connection из-за чего может быть?

Тони: Здравствуйте, я явялюсь сильным android-разработчиком, продактом, маркетологом в сфере мобильным приложений, есть желание что-то запилить связанное с TON, возможно что-то опенсорсное, может есть у кого идеи, где могу быть полезен?)

Егор: Может под подушкой, надо внимательнее смотреть (reply to 174572)

Zxc: Всем привет! Можно ли создать смартконтракт при помощи смартконтракта?

Mirka: Если ты про деплой, то да, так и делают (reply to 174600)

Zxc: С использованием переменных, например как в функциях  function (a, b) { a + b = b+a } ？

&rey: Нет, с использованием сообщений. (reply to 174602)

Zxc: Но результат подобный?

⁣: подскажите какую либу использовать чтобы сделать ввод/вывод с webapp telegram для взаимодействия с ton ts/js  На офф.сайте нашел эти:  RPC: ton tonweb  ADNL: tonutils tonkite/adnl  В 2 словах, если не сложно, расскажите, что юзали, что гуд, что бэд

Vokhma: В TON есть функция для подписи некоего хэша приватным ключом кошелька?

Zaphod: В экосистеме есть, в самой виртуальной машине такого быть не должно в принципе, ибо это сразу раскрыло бы приватник (reply to 174606)

Vokhma: А есть метод который отдаст хэш кошельку на подпись? Как при транзакциях, когда надо подтвердить в тонкипере

Dmitry | backend4you.ton: из кода контракта? нет конечно. как вы себе это представляете - пришло на контракт сообщение, нода/валидатор исполняет код смартконтракта чтобы сделать новый блок, и тут фигак - она должна достучаться до телефона пользователя, чтобы он срочно подписал что-то. а если пользователь спит (или с телефона стёр приложение для переустановки) - то нода такая "да ну нафиг, блокчейн стоп, ждём пока пользователь подпишет" (reply to 174608)

Grigory: Добрый вечер, такой вопрос: Как можно получить значение баланса jetton-wallet в долларах децентрализованно, redstone – это единственный вариант?

Vokhma: Транзакции по монетам же ждут подтверждения пользователя. У меня в проекте сам пользователь должен инициировать подпись, поэтому пользователь спать в это время не будет. (reply to 174613)

Vokhma: Да и не хочу я морозить блокчейн, я подпись буду хранить у себя. Просто ищу способ как конкретный пользователь может подписать хэш, и чтоб другие могли это проверить.

Dmitry | backend4you.ton: так порядок то другой: * вы/приложение собрали сообщение на подпись (js например) * вы дернули tonconnect, который дернул кошелек который к вам залогинился, со словами "вот те, подпиши" * кошелек у пользователя на телефоне отобразил идалог * пользователь нажал * кошелек подписал и отпавил в блокчейн результат * нода получила _подписанную_ транзакцию и проверив подпись, закинула в след блок (reply to 174617)

Vokhma: Обязательно в блок закидывать? Можно получить готовую подпись назад в js? (reply to 174620)

Dmitry | backend4you.ton: если вам надо это же, но без последних двух пнктов (отправить подписанное в блокчейн), то кажется нет этого, и даже где-то помню пробегало обоснование "почему", но не помню

Vokhma: Вот я и интересуюсь

Vokhma: Заказчик говорит, что видел POC этого дела

Alacrity: Как можно получить все nft по адресу кошелька?

Max | TonMap: Здаров ребят. Как можно в выпадающее меню Ton Connectа заппихнуть свои пункты меню? Есть варианты? Спасибо

Aziz: А кто знает как работать с кастомными темами которые как у телеграмм пользователя как в том же wallet например, просто не нашел ничего по поводу тех же css-variables ( var ), или нужно доставать это все с WebApp.currentTheme? (bg_color, accent_color, etc...)

Vladimir: Google -> CSS Variables. (reply to 174631)

Aziz: Тоесть bg_color это будет?  color: var(--bg-color); (reply to 174632)

Vladimir: Только если переписать Ton Connect UI. (reply to 174628)

Vladimir: Ну или background (background-color). (reply to 174633)

Aziz: Ааа понял, спасибо счас попробую (reply to 174636)

User<6908616126>: https://t.me/tondev/174119   Вот 4 сообщения с ответом. Изучай (reply to 174626)

User<6908616126>: Не факт что это возможно. Документацию штурмовал? (reply to 174628)

Max | TonMap: Смотрел и не нашел (reply to 174640)

Max | TonMap: Много места ценного занимает кнопка эта и в нее бы впихнуть меню ..

User<6908616126>: Тоже не нашел, думаю это невозможно (reply to 174641)

Mirka: Да, нужно писать собственную кнопку (reply to 174643)

Cp Price: а у не активированного аккаунта посмотреть нфт как-нибудь можно? (reply to 174122)

User<6908616126>: Что значит у неактивированого?... (reply to 174646)

Cp Price: вам виднее думаю, у того который не проводил исходящих транзакций (reply to 174648)

Валерий: Всем привет.ру разработчики) оказывается есть ру чат. А то меня только что забанили в каком-то другом чате 😅 За русский и могучий язык. В шоке)

User<6908616126>: А, ну раз он не проводил транзакций, значит там ничего быть не может. И еще, что важно, новый кошнлек(без транзакций) в апи отображаться не будет, потому что ноды его еще не индексировали, но при этом у этих кошельков есть такой же адрес, по нему и смотрите (reply to 174649)

Cp Price: по нему смотреть где? (reply to 174651)

Cp Price: в tonscan я вижу что есть нфт на аккаунте, но там я так понимаю используются апи getgems (reply to 174652)

Валерий: Wow

Vlad: Добрый вечер, товарищи. У меня стоит крайне нетривиальная задача по интеграции TonConnect2 в проект, который на 99% состоит из Kotlin.   Клиент - мультиплатформенная мобилка на KMP, а на сервере Ktor (соответственно, тоже Kotlin).  И как же мне во всё это великолепие вкрячить такой алгоритм: - открытие приложения - подключение кошелька, подпись пейлоада - отправка подписанного пейлоада на сервер - чек на сервере, отправка токена - мы счастливы  Конкретнее — я не понимаю, как проверять подпись TonProof не на TS, а в коде Kotlin через ton-kotlin, поскольку вроде как всё правильно, но всё равно подпись не валидна.   И ещё вопрос: есть ли менее извращённый способ реализации входа через TonConnect2 чем веб форма?  Прочитал вдоль и поперёк всю возможную документацию, но вдруг, существует репозиторий с 1 звездой, который уже реализовал мою задумку, но я о нём просто не знаю

Vlad: Мой алгоритм проверки, который не работает: @Serializable data class ParsedMessage(     val workchain: Int,     val address: ByteArray,     val timestamp: Long,     val domain: Domain,     val signature: ByteArray,     val payload: String,     val stateInit: String )  @Serializable data class Domain(val lengthBytes: Int, val value: String)  fun createMessage(parsedMessage: ParsedMessage): ByteArray {     val tonProofPrefix = "ton-proof-item-v2/".toByteArray()     val tonConnectPrefix = "ton-connect".toByteArray()      val message = tonProofPrefix +             ByteBuffer.allocate(4).putInt(parsedMessage.workchain).array() +             parsedMessage.address +             ByteBuffer.allocate(4).putInt(parsedMessage.domain.lengthBytes).array() +             parsedMessage.domain.value.toByteArray() +             ByteBuffer.allocate(8).putLong(parsedMessage.timestamp).array() +             parsedMessage.payload.toByteArray()      val messageHash = MessageDigest.getInstance("SHA-256").digest(message)     val fullMessage = byteArrayOf(0xff.toByte(), 0xff.toByte()) + tonConnectPrefix + messageHash     return MessageDigest.getInstance("SHA-256").digest(fullMessage) }  @Serializable data class DataRequest(val data: String)  fun verify(signature: ByteArray, message: ByteArray, pubKey: ByteArray): Boolean {     return Ed25519.verify(signature, message, pubKey) }  fun convertAndVerify(parsedMessage: ParsedMessage, pubKey: ByteArray): Boolean {     val message = createMessage(parsedMessage)     return verify(parsedMessage.signature, message, pubKey) }  fun Application.configureBlockchain() {     val clientTonApi =         HttpClient(OkHttp) {             engine {                 config {                     followRedirects(true)                 }             }             install(ContentNegotiation) {                 json()             }             defaultRequest {                 header("Content-Type", "application/json")                 url("https://tonapi.io/")             }         }     routing {         route("/ton") {             get("/sign") {                 call.respond(DataRequest("Hello, world!"))             }             post("/auth") {                 val parsedMessage = call.receive<ParsedMessage>()                 @Serializable                 data class PublicKeyResponse (val public_key: String)                  val pubKey = clientTonApi.get {                     url("v2/accounts/${parsedMessage.address}/publickey")                 }.body<PublicKeyResponse>().public_key                 val result = convertAndVerify(parsedMessage, pubKey.toByteArray())                 @Serializable                 data class DataResponse(val token: String)                 call.respond(DataResponse(result.toString()))             }         }     } }

User<6908616126>: Я уже написал даже эндпоинт апи и дал ссылку на документацию, читайте лучше пожалуйста (reply to 174652)

Cp Price: здесь есть: https://tonscan.org/address/UQBvbJu_ACZ_N0rZ8fVkeHVUHqvCpLMPUAlV2E5m0XcMUsvS#nfts а через tonapi нет: https://tonapi.io/v2/accounts/UQBvbJu_ACZ_N0rZ8fVkeHVUHqvCpLMPUAlV2E5m0XcMUsvS/nfts?limit=1000&offset=0&indirect_ownership=false (reply to 174657)

Cp Price: речь об этом (reply to 174658)

Cp Price: но я так понимаю это ещё несозданная нфт (reply to 174659)

User<6908616126>: Скорее всего, она и не будет отображаться скорее всего (reply to 174660)

Cp Price: если аккаунт активировать то будет, вот такой пример: https://tonscan.org/address/UQD29HaugJatdG9d6svgf94tlEm5F_rd7qnczfUto4w3Ecor#nfts https://tonapi.io/v2/accounts/UQD29HaugJatdG9d6svgf94tlEm5F_rd7qnczfUto4w3Ecor/nfts?limit=1000&offset=0&indirect_ownership=false (reply to 174661)

slavagm: Главное на ссылку перенаправить, а как - вопрос уже в ваших руках, можно qr приделать например (reply to 174655)

slavagm: Ton Connect SDK для котлина не нашел конечно, но если не лень, то можно посмотреть какую-нибудь из этих и сделать аналог на котлине

Onix: Всем привет , кто знает как сейчас в тонкипере менять адреса ?

Vlad: Окей, это хороший вариант. Тогда перетяжелять приложение webview не придётся (reply to 174663)

Vlad: Это не сильно важно на самом деле. Самое главное - мой неработающий алгоритм проверки пруфа, который я написал выше. Он почти точно повторяет пример на ts, но всегда выдаёт что false в ответе: kotlin call.respond(DataResponse(result.toString())) (reply to 174664)

Vlad: Я вот два дня сижу и не понимаю что я делаю не так

User<6908616126>: На тонвьювере тоже пусто (reply to 174658)

User<6908616126>: А в тонскан какое апи используется я не знаю (reply to 174673)

User<6908616126>: У этой нфт так же нет транзакций даже на тонскане, ведь она даже не заминчина (reply to 174674)

Mika: Привет, я новичок в TON. в блокчейне Ethereum мы можем подписываться на события блокчейна по смарт-контракту. Таким образом, мы можем узнать, когда смартконтракт генерирует событие, и проанализировать его. Какова это тонна в эквиваленте? Я хотел бы следить за своим контрактом, развернутым в TON, прослушивая происходящие на нем события и обновляя свое Dapp. Любая помощь или ресурсы приветствуются

Mika: Спасибо (reply to 174681)

Mika: Любой опытный разработчик TON, который может помочь мне разработать простой скрипт и ответить на другие мои вопросы за 250 долларов, должен отправить мне личное сообщение. Спасибо.

Канстанцін: DO NOT DM ME | Report + Block. I don't reply here.  ;) (reply to 174687)

Mika: 😁😁🤣 (reply to 174689)

Mika: лол я поменял это

🏰: Как залочить ликвидность?

Vokhma: Кто-нибудь знает ответ на этот вопрос? (reply to 174608)

— 2024-03-20 —

&rey: Пока что нет, кроме одного раза при входе по TON Connect. (reply to 174608)

&rey: И то там не произвольный хеш.

nik: Правильно ли я понимаю, коммиссия за своп в dedust - 0,25 ton? (с SDK dedust, если плата меньше, возникает ошибка)

Asher: Стандарт TON DNS. Как сделать поддомен для TON DNS? Автор - @onedavidlivesey. https://www.youtube.com/watch?v=IuH2Db4WO9o  В данном видеоуроке я расскажу про стандарт TON DNS, какие методы являются обязательными, что такое resolve, а так же сделаю простой вариант доменов 3 уровня и выше."  Материалы для изучения https://github.com/ton-blockchain/TEPs/blob/master/text/0081-dns-standard.md https://docs.ton.org/participate/web3/dns https://github.com/Gusarich/simple-subdomain

Vladimir: Никак. (reply to 174721)

Denis: Вангую что это compressed nft. Их реально нет в блокчейне. Существуют только в голове у гетгемс. Тонскан их видит потому что сидит на апи гетгемс (reply to 174662)

Vladimir: Возможно, тогда и вопрос нужно иначе сформулировать. (reply to 174725)

Denis: А кто будет решать что имено покупать? Тоже кошелёк? (reply to 174727)

Vladimir: Может Вам просто отправлять транзакции скриптом? (reply to 174727)

Denis: Или вы хотите кликать в браузере и чтоб кошелёк автоматом подписывал не трогая телефон?

Denis: Если второе то просто поставьте расширение для браузера

Denis: Сохраните его в браузер (reply to 174733)

Denis: Это все не очень безопасно правда

Vladimir: Да, в интернете полно. (reply to 174735)

Denis: Https://tonkeeper.com - там ссылки

User: Добрый день. Кто знает как максимально быстро транзакцию отправить. Пробовал через тон центр и тонапи, но там примерно через 10-20 секунд в блокчейн доходит

Denis: Через тонапи самое быстрое. Пацаны меряли, но не знаю доступны ли результаты публично (reply to 174742)

Vladimir: Начать лучше с https://docs.ton.org/. (reply to 174747)

Владислав: Здравствуйте, я так понял, для реализации этого мне надо локально поднять цепочку, написать смарт контракт. А нельзя как-то это делать, через апи кошелька? (reply to 174544)

Владислав: Как в этом чате можно пожаловаться на пользователя? Он обманом украл мои деньги

Minter: Кто (reply to 174752)

Владислав: https://t.me/GjuUser

User: А через свой лайтсервер, если напрямую boc посылать, выйдет быстрей или также как и tonapi? (reply to 174743)

User: У меня через gobicycle вышло +- также, но может надо напрямую слать

Denis: медленннее

Denis: накладные расходы на работу промежуточного прокси тонапи/тонцентр/велосипед (хотя велосипед вроде таки агрегирует выводы и засылает батчи и задержка может быть несколько секунд за счёт этого) не значительны. основное влияние это как быстро транзакция распространится из лайтсервера по сети и попадёт к валидатору. и тут важнее всего на сколько широко ты разослал по сути. тонапи очень широко рассылает в том числе напрямую на несколько валидаторов

Denis: со своим лайтсервером так быстро не будет точно.

Denis: да. в велосипеде задержка на агрегацию.

IndexCorp: https://github.com/ton-society/grants-and-bounties Пустая трата времени эти предложения.  Предложил сделать общедоступного бота, чтобы им пользовался любой человек без знания программирования, его отклонили https://github.com/ton-society/grants-and-bounties/issues/461  И написали что такой проект уже существует https://github.com/ton-society/grants-and-bounties/issues/215 А бота то нет. Указали в гитхабе репозиторий прошлогодний и то работает на устаревшем aiogram 2x  Просто в шоке от тупости и не далекости тех кто проверяет эти идеи. Они там думают что люди все прогеры и умеют поднять сервера чтобы запустить этот код. Охренеть просто.

Vladimir: Если действительно нужно, то можно нанять фрилансера, который сделает. (reply to 174761)

IndexCorp: А почему оно не должно быть доступных для всех, это ради продвижения отдельной ветки (NFT)

IndexCorp: Пусть в боте сделают подписку и все будет гуд.

IndexCorp: Фрилансы $5К просили, нажрались (reply to 174763)

sd: Отклонили потому что такой бот есть, и далеко не один (reply to 174761)

IndexCorp: где? (reply to 174767)

IndexCorp: link?

sd: @PunkMasterBot

Seitaro: Зачем делать бесплатным дотационным сервисом то, что должно быть бизнесом? Для админов нфт/жетонов этот функционал прибылен, а оператор со своей стороны должен быть заинтересован в высокой доступности и предоставлении новых фич.  А то получим ситуацию, где сервис не работает 80% времени, новые фичи не добавляется, а ответственных за починку нет.  Сама разработка при этом не настолько велика и сложна, чтобы требовалась поддержка в виде грантов

Slava: Бот существующий и рабочий. Проект написан в open-source и каждый желающий может поднять его у себя на сервере под свои задачи.   Если инициатива заключается в обновлении бота под новый aiogram 3.0, давайте обсуждать полезности, которые под собой будет иметь данное обновление, если вообще в этом есть необходимость. (reply to 174761)

IndexCorp: необходимость есть (reply to 174772)

Vladimir: Выглядит так, что Вас что-то не устраивает из коробки и Вы хотите это получить бесплатно. NFT Вы же не бесплатно раздаете, Вы преследуете какую-то цель. (reply to 174766)

Slava: В чём заключается эта необходимость? (reply to 174773)

Slava: Мы сделали community tool с открытым кодом, чтобы каждый смог воспользоваться инструментом бесплатно. (reply to 174766)

IndexCorp: Бот доступный с подпиской, думаю создатель не останется в нуле (reply to 174774)

Slava: В баунти #215 работа уже сделана, оплачена и может быть использована в дальнейшем бесплатно. (reply to 174774)

IndexCorp: Допустим я нулевой, т.е. без знания в программировании. Могу создать нфт, а такой бот нужен.  Как думаете сможет ли он поднять такого бота который в гитхабе. Думаю даже не знают как оттуда скачать. Увас разрабов должно быть понятие доступность, если будет доступность будут и клиенты.

slavagm: А вы ревью этих проектов проводите как я понял? (reply to 174778)

Slava: Я руковожу всей программой. Ревью баунти зачастую проводится при поддержке ton.tech в том числе. (reply to 174780)

Slava: Для таких задач мы создали тондев чаты, в одном из которых сейчас находитесь. (reply to 174779)

IndexCorp: бот который там лежит, не работает с модулями по умолчанию. Т.е. начиная с aiogram 3. Проверьте. (reply to 174778)

slavagm: В команде обычно есть человек, который за техническую часть отвечает Да и ридми в 215 крайне объемный, там буквально описано всё, от создания канала до запуска бота (reply to 174779)

IndexCorp: Вы никогда не видели чела который работает в соло?

slavagm: Программистов видел, проджект-менеджеров (хотя не уверен конечно, что тут применим такой термин) нет (reply to 174785)

User: Так перепишите под v3 и пользуйтесь. И если я не ошибаюсь, то v2 до сих пор поддерживается, так что можно и через нее комфортно работать. (reply to 174783)

Slava: Бот написан под aiogram второй версии. На ней всё работает.  Если требуется обновление под новые модули, отпишите, пожалуйста, в комментариях к issue, рассмотрим 🙌 (reply to 174783)

slavagm: Новые слои апи не добавляются уже в в2 вроде (reply to 174787)

IndexCorp: перепиши пожалуйста, я в этом не понимаю ничего. Хотя пытался с конца января (reply to 174787)

User: это будет стоить денег, можем обсудить в личке (reply to 174790)

IndexCorp: $2-5К? (reply to 174791)

User: Не, вы что?) (reply to 174792)

User: ну если вы хотите за 2к$, то я не против))

IndexCorp: меня уже нае..ли на $2,5 так что не верю ни кому тут в чате

slavagm: Вообще там бы всю репу переписать на самом деле, single-file это как-то совсем некрасиво

User: Отписал вам в личку (reply to 174795)

Vladimir: Че там? Договорились? (reply to 174797)

abc <: v2 не поддерживается уже больше года, наверное (reply to 174787)

User: Значит я немного потерялся во времени) (reply to 174801)

User: Да, списались. (reply to 174800)

&rey: А в теории реально сделать такую систему, что услуги TON Storage будут оплачены ровно если файл действительно раздаётся?

Dmitry | backend4you.ton: Что значит «реально»? Точнее, в каких случаях не раздается? (reply to 174823)

&rey: В контрактах хранения нет никаких гарантий, что нода будет раздавать файл — только что она его хранит. Остаётся только периодически проверять и отменять контракт, если там злоумышленник. (reply to 174824)

Dmitry | backend4you.ton: А млин, с тонбайт попутал сорри. Тон сторадж там же все в контракте

Dmitry | backend4you.ton: Ну так как смартуонтракт не может проверять «раздаваемость», то получается нужен внешний сервис который регулярно пытается скачать. Получается в текущей логике - нельзя

Андрей: Этим должен заниматься некий маркетплейс провайдеров - вести список провайдеров, их доступность, рейтинг и что ещё там (reply to 174827)

Dmitry | backend4you.ton: тогда и оплата через маркетплейс, в итоге сторадж-контракты и не нужны (reply to 174834)

Андрей: Ну если маркетплейс будет с гарантией на контрактах, то норм (reply to 174835)

Dmitry | backend4you.ton: что будет гарантировать контракт? ведь "решение" (раздается / нет) принимается вне блокчейна, и потом генерируется ext-in-msg на первод денег с какого-то "депозитного" кошелька (куда заказчик перевёл задаток). если маркетплейс захочет соскамиться - депозитные кошельки он с собой заберёт (reply to 174836)

Vladimir: Модно сейчас на все контракты писать. (reply to 174837)

&rey: Странное ощущение, что можно payment channels привязать. (reply to 174837)

&rey: Только скачивание файлов придётся через вебсокеты делать, а это сломает стандартный кэш.

Андрей: А средства за хранения файла не должны лежать на депозитном кошельке маркетплейса Это примерно то же самое, что если бы средства за хранения файла тон-сторадж лежали бы на кошельке провайдера, а не на контракте хранения (reply to 174837)

Dmitry | backend4you.ton: а где? маркетплейс, периодически проверяя что файлы раздаются, "начисляет" хостеру денюжку, со счета хозяина файлов. значит маркетплейсу эти денюжки должны быть доступны "на перевод". (reply to 174841)

Андрей: На отдельном контракте хранения, как это сделано в тон-сторадж Провайдер может снимать награду за хранение, но при этом не может снять все деньги  UPD: не буду спорить, просто изучите как работает контракт за хранение в тон-сторадж И да, согласен, можно что угодно написать в контракт (reply to 174842)

Dmitry | backend4you.ton: "отдельность" контрактов нужна только для удобства подсчетов. важнее кто контролирует эти контракты.  хозяин файлов должен "куда-то депонировать" деньги за будущее хранение, и не иметь возмжности их "забрать" если передумал за сеукнду до конца цикла хранения. хостер должен "получать" деньги по частям по факту хранения, и не иметь возможности взять "всё и сразу". получается маркетплей - это как раз гарант, который держит деньги, и проверяя что "хостер правильно хостит" ему понемногу отдает. (пофиг пока - мелкими транзакциями ончейн или накопленным раз в Х дней/часов).  при этом маркетплейс следит за "праивльностью" раздачи файлов оффчейн, значит когда он "решил" что все вроде хранится - он отправил "начисление". а если он решил соскамиться - он убежит со всеё суммой депозитов невыплаченных(пофиг 1 это общий кошель или 100500 под каждый файл).

Dmitry | backend4you.ton: это как кастодиальный кошель - какие вы контракты не изобретайте - вы не можете исключить теоретическую вероятность что wallet вдруг закроется и исчезнет со всем балансом всех юзеров (включая "временные" адреса депозитов)

Александра: Здравствуйте, скажите пожалуйста,будут ли работать виджеты от геткурс на сайте с вашим доменом тон?

Max | TonMap: Здаров народ. В контракте выполняю минт sb токенов. Более 200+- за раз сминтить нельзя.    Как найти выход из ситуации? Циклом на фронте? Но как тогда с юзера списывать средства? Подтверждение за каждую пачку из 200? Идеи?  Спасиб 🤝

&rey: Пересылать сообщение с контракта самому себе. (reply to 174860)

&rey: Но вообще, подтверждение каждые 200 — неплохая идея, позволяет проверить, всё ли хорошо идёт.

Bear: Всем привет! Подскажите пожалуйста, как после подтверждения транзакции перенаправить пользователя обратно в вебапп?

Vladimir: https://www.npmjs.com/package/@tonconnect/ui#use-inside-tma-telegram-mini-apps (reply to 174864)

Max | TonMap: Спасибо. Можно пример? Как это выглядит? Что имеется ввиду? (reply to 174861)

&rey: https://github.com/Gusarich/ton-mass-sender (reply to 174874)

kocmo12: не пойдет, там нельзя на один и тот же адрес отправлять (reply to 174876)

kocmo12: то есть можно на 200 разных 1 транзой  но не 200 транз на 1 кошелек

&rey: В смысле, что мешает? (reply to 174877)

&rey: Ну и так, это вообще-то просто пример.

OCB: Привет всем, а как можно с модераторами связаться?

Vladimir: Нажать сверху на заголовок чата, там список — выбирай понравившегося. (reply to 174883)

OCB: Админы из списка посылают к модераторам :) (reply to 174884)

Max | TonMap: ух,  спасибо. Может кто такое мне помочь в контракт мой внедрить?   Сам Даниил занят, нужна помощь кого-то еще . ) (reply to 174876)

User<5187299699>: Всем привет, хотел спросит никто не следил за выходом токенов на блок чейне тон?

User<5187299699>: Или где смотреть токены которые там будут выходить?

Mirka: Ну можешь на диор ио в разделе новое, можешь еще где-то (reply to 174900)

User<5187299699>: Не скинешь ссылку?😁 (reply to 174901)

Mirka: Не уверен, что тут можно, чиркани в лс (reply to 174902)

Bear: У меня еще вопрос: как восстанавливать соединение если пользователь ранее подключал кошелек в tonconnect ui? просто там нету restoreConnection как в tonconect sdk... (reply to 174870)

Bear: Может кто-то еще сможет ответить?

S: Всем доброго времени суток

S: Есть крутая идея для создания небольшого проекта в тоне, можно с кем то обсудить идею ?

User<6908616126>: он автоматически его восстанавливает при создании объекта класса TonConnectUI (reply to 174905)

User<6908616126>: .connectionRestored вернет true если соединение было восстановлено из локалсторадж, и соответственно false если восстановление не прошло

🏰: Как полностью удалить токен и могут ли быть токены с одинаковыми тикерами?

Dzmitry🐾: Привет, парни и девушки! Может-то нибудь помочь с Getqems?

Сергей: Может, важен адрес мастер контракта жетона, иконку, название и тд можно скопировать. (reply to 174913)

User<6908616126>: Что именно помочь? Задавайте вопрос сразу, так вероятность ответа на ваш вопрос будет максимальной (reply to 174920)

slavagm: обычно это называется nometa.xyz)) (reply to 174924)

User<6908616126>: Ага) (reply to 174926)

Валерий: Всем привет, я новичек в программировании и в TON подскажите пожалуйста, какая сейчас актуальная библиотека для работы с TON ?  меня интересует пока работа только с кошельком, создание, подключение, получение баланса, отправка тонов, отправка жетонов.  пытался работать с TonTools, но мозги все сделал себе. Если я правильно понял, то тип разрабатывал высокоуровневую либу универсальную и завязывался на сторонние апи, а апи изменились и поэтому сейчас ничего не работает.  Что актуально на данный момент использовать?

Mirka: Зависит от языка, если речь идет про питон, то попробуй https://github.com/yungwine/pytoniq (reply to 174928)

Валерий: да python (reply to 174929)

Валерий: Глянул на гитхабе, посмотрел примеры, установил в проект, посмотрел поля и методы client.   Вообще не нашел как даже получить адрес кошелька и т.д. самые базовые вещи, что-то не понимаю.  Попытался конечно client засунуть в его вторую библиотеку TonTools в качестве провайдера, но безуспешно) (reply to 174929)

Аким: Не подскажешь, для C++ есть? (reply to 174929)

Mirka: Есть Полный список сдк можете посмотреть тут (reply to 174935)

first_name: может ли highload v2 бесконечное кол-во транз одновременно обрабатывать?  например, если будет 100 одновременных транз (где каждая ещё содержит по 250 внутренних транз), то ничего не сломается?

Denis: Не может. Будет как у @wallet (reply to 174938)

first_name: сяп! (reply to 174939)

Denis: Сожжете гору газа и потом пойдёте просить валидаторов разблокировать остатки

Denis: В инструкции highloadv2 было описано как им безопасно пользоваться. Прочтите внимательно

User<6908616126>: Вредоносный скрипт для кражи криптовалюты (reply to 174945)

User<6908616126>: Есть исходники? (reply to 174948)

User<6908616126>: Тогда иследовать код сложнее😅

Denis: фига. $10к за дрейнер для тон?

Denis: пойду дрейнеры писать

Denis: кому продавать?

User<6908616126>: Как напишешь, алгорит расскажи пж, что бы честные люди не попались) (reply to 174954)

Denis: ну так это. предлагаешь пользователю и он подписывает

Denis: а как иначе?

User<6908616126>: Ну да, у меня тоже такое пришло в голову первым делом

User<6908616126>: Ну это вообще через тонконнект делается в 5 строк кода (reply to 174959)

User<6908616126>: Я вот думаю что дрейнер подразумевает так же кражу приватника. Хотя наверное технически это если и не невозможно, то оооооочень сложно

Denis: это требует уязвимости в браузере. такое стоит гораздо дороже 10к

slavagm: Приватку ты из него никак не получишь (reply to 174966)

User<6908616126>: Ну подписание идет в самом кошельке, и это видно

slavagm: Если мы сейчас про Connect говорим, то чёт я там не припомню транзакцию (reply to 174969)

User<6908616126>: Есть там, sendTransaction (reply to 174973)

slavagm: Понял, видимо не прав (reply to 174974)

slavagm: Но все равно не один из аппрувнутых кошельков не даст подменить это на списание всего баланса imo...

🏰: как долго geckoterminal обновляет информацию?

User<6908616126>: Ну то что я видел, сайт спамит 10+- транзакций по 0.05 тон, а потом кидает одну на фулл баланс, в итоге человек на автомате все проклацывает подтвердить и деньги уходят

🏰: как убрать плашку Scam

User<6908616126>: ребят, подключил по приколу кошелек к дрейнеру, а он все время пытается транзакции кидать, можно ли как-то отменить привязку, чтобы он больше не мог вызывать меню транзакций?  UPD: все, нашел. умные однако дрейнеры пошли (forwarded from blitzbyte)

User<6908616126>: Вот такое вот тут в чате висело

User<6908616126>: Вот об этом я, спам транзакциями на минимальные суммы, и в одной на фулл баланс, невнимательный ее подтвердит

slavagm: Ну это чёт прям совсем на дурачка (reply to 174983)

User<6908616126>: Тем не менее (reply to 174990)

F: а я вас занес в черный список, удачи (reply to 174987)

🏰: а почему плашка скам на тех проектах которые не нарушают ничего

🏰: убрать как то можно?

🏰: на разных проектах (reply to 174998)

🏰: На geckoterminal (reply to 175000)

Denis: скорее всего копирует именна других более успешных проектов (reply to 174995)

🏰: а если изменить тогда пропадет плашка? (reply to 175003)

Denis: да (reply to 175004)

🏰: а как? (reply to 175005)

nik: https://api.ston.fi/swagger-ui/#/Dex/dex_swap_status  как получить инфу по свопу через stonfi sdk?   /v1/get/swap/status?  но что означает?  router_address * owner_address * query_id *  Router address - EQB3ncyBUTjZUA5EnFKR5_EnOMI9V1tTEAAPaiU71gc4TiUt? А другие поля?

nik: Error fetching the swap status: AxiosError: Request failed with status code 500  постоянно выдает эту ошибку

Andrei: Доброй ночи, всем! Нужна помощь в разработке проекта на TON. Буду рад сотрудничеству🤝

✨ Uni: а можно быстрый вопрос — деплой токена на тоне стоит только ж комсу на транзу?

— 2024-03-21 —

X1ag: Уже больше недели) (reply to 175021)

Dmitry: Всем привет! Кто может подсказать по проблеме с API toncenter?  Отправляю один запрос через https://toncenter.com/api/v2/runGetMethod, использую API ключ, полученный в их боте. Больше нигде этот ключ не использую. В ответ получаю ошибку:  {'ok': False, 'result': 'Ratelimit per User exceed: 10 per second', 'code': 429}  Какой может быть лимит 10/сек, если я один запрос раз в 5 минут шлю?

User<6908616126>: Уверены что точно 1 запоос раз в 5 минут? Точно ли ни где нет цикла к примеру? (reply to 175025)

Dmitry: Да, всё было кошерно) Уже разобрался, сбой на стороне toncenter была, быстро решили. (reply to 175029)

NMI: Попробуй toncenter v3 ))) (reply to 175025)

Vladimir: https://ton.org/address/ (reply to 175036)

Vladimir: TON Tact Challenge #2   TON Foundation is launching the TON Tact Challenge #2, a contest open to all developers, from eager beginners to seasoned experts. This is your chance to contribute to the creation of a decentralized social network.  What's in store? The challenge unfolds in five stages, covering everything from setting up user profiles to implementing decentralized management. Dive deep into the world of TON Blockchain and explore the limits of what's possible.  Prize pool & important dates ▪️ $20,000 in Toncoin (TON). ▪️ Registration is now open.  ▪️ Challenge starts on March 25, 2024. ▪️ Deadline: April 3, 2024.  How to participate? Register through @smartchallengebot. You'll receive all the essential details, including start times, submission guidelines, and insights into the challenge stages.  For more information, visit this page.  Showcase your skills, learn from real-world applications, and connect with the vibrant TON Community. Join now.

Dapster: Привет. Подскажите плис как вернуть застрявшие деньги после неудачной покупки нфт?

Dapster: Ссылку на транзакцию очевидно бот удаляет как спам

Vladimir: Это не относится к теме данного чата. (reply to 175047)

Andrei: Здесь есть кто может поднять сайт в mini web app?, сделать интеграцию с NFT

Andrei: Маркетплейс кто-то делал на TON?

Bear: Приветствую! Объект класса TonConnectUI создается. Но соединение не восстанавливается. По какой причине это может происходить? (reply to 174910)

User<6908616126>: Покажите код пожалуйста (reply to 175059)

Icy: Медиумы сегодня в отпуске. Код в студию (reply to 175059)

Max | TonMap: Хэй, может кто-то за монеты помочь с этим https://t.me/tondev/174861 ?)

Bear: <script src="https://unpkg.com/@tonconnect/ui@latest/dist/tonconnect-ui.min.js"></script>     <script>                  const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({             manifestUrl: ''         });          tonConnectUI.uiOptions = {             language: 'ru'         };          async function sendTx() {             const transaction = {                 validUntil: Math.floor(Date.now() / 1000) + 60,                 messages: [                     {                         address: "EQBBJBB3HagsujBqVfqeDUPJ0kXjgTPLWPFFffuNXNiJL0aA",                         amount: (50000000 * Number(document.querySelector("input[name='quantity']").value)).toString()                     }                 ]             }              try {                 const result = await tonConnectUI.sendTransaction(transaction, {                     modals: ['before', 'success', 'error'],                     notifications: ['before', 'success', 'error']                 });                 const someTxData = await myAppExplorerService.getTransaction(result.boc);                 alert('Transaction was sent successfully', someTxData);             } catch (e) {                 console.error(e);             }         } </script>

Bear: Ребят, благодарю за поддержку!

User<6908616126>: Такс, а вы уверены что у вас есть ключ в локалсторэйдж! для теста попробуйте задать кнопку для коннекта и поперезагружайте страницу, думаю у вас просто нет соединения. (reply to 175065)

Bear: Пробую (reply to 175067)

Bear: Прошу прощения, а что за ключ? (reply to 175067)

User<6908616126>: При конекте к тонконнект в local storage записываются все данные для подключения. Их я и назвал ключами (reply to 175070)

Bear: Почему-то там пусто 😞 (reply to 175071)

User<6908616126>: А как подключаете кошелек?

Bear: <script src="https://unpkg.com/@tonconnect/ui@latest/dist/tonconnect-ui.min.js"></script>     <script>          const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({             manifestUrl: ''         });          tonConnectUI.uiOptions = {             language: 'ru'         };          const connect = document.querySelector("#connect")          connect.addEventListener("click", async function(){             await tonConnectUI.openModal();         })          function getNFTItems(address) {             var xhr = new XMLHttpRequest();             var url = `https://testnet.tonapi.io/v2/accounts/${address}/nfts?collection=EQC6Ru_nF4l0WJTeIKdB7qQTb2WaEMqos8tQFnl3btfqO4aO&limit=1000&offset=0&indirect_ownership=false`;              xhr.open('GET', url);              xhr.responseType= 'json';              xhr.onreadystatechange = function () {                 if (xhr.status == 200) {                     if (xhr.response["nft_items"].length == 0) {                         window.location.pathname = "/mint/"                     }                     else {                         window.location.pathname = "/tickets/"                                              }                 }             };              xhr.send();         }            const unsubscribe = tonConnectUI.onStatusChange(             walletAndwalletInfo => {                 getNFTItems(walletAndwalletInfo.account.address)             }          );                 </script> (reply to 175073)

Bear: Это имеется в виду?

User<6908616126>: Хмм... (reply to 175074)

Bear: Что я делаю не так? (reply to 175076)

User<6908616126>: Модальное окно открывается, вы кошелек подключить можете?

User<6908616126>: Скиньте файл в лс, я посмотрю что не так (reply to 175074)

Cp Price: Снова прошу помочь разобраться. Каким образом можно повторить эту транзакцию через tonweb либо без него но на js. Недопонимание у меня вызывает то, что я не понимаю как расшифровать данные транзакции. Если на EOS abi у контрактов публичные и эксплореры всё налету декодируют, то в ton я так понимаю abi не публикуются в самом блокчейне? Тогда где их искать? Должен же быть простой способ это сделать, неужели всё настолько сложно. (reply to 175079)

Ivan: Это транзакция клейма cNFT https://github.com/ton-blockchain/TEPs/pull/126  Я думаю вам нафиг не надо ее пытаться повторить (reply to 175089)

Cp Price: почему нет то? Я хочу понимать как это работает (reply to 175093)

&rey: Там сервер нужен, который отдаст пруф нфт, но вроде проблем на js быть не должно? (reply to 175093)

Ivan: Ага, если пруф получить то просто  но чтобы пруф получить, надо сначала из коллекции достать адрес апишки а потом туда сходить (reply to 175095)

Vlad: Высылаю сообщение на marketplace контракт getgems, получаю такое:  exit code 35 https://tonviewer.com/transaction/39cdbc367d8bdbf42e1f296e962a17eae32d6aef9191e53e956fc8c534457050

Vlad: throw_unless(35, check_signature(slice_hash(in_msg_body), signature, public_key)); (reply to 175099)

Vlad: Вот здесь возникает (reply to 175100)

Vlad: Мб у кого-нибудь был опыт взаимодействия с контрактами getgems

Tim: А потому что не надо на него сообщения высылать)

Vlad: Хочу со своего бека деплоить аукционы и чтоб на getgems отображались 🥹

Tim: Ну деплой, просто указывай в аукционе адрес маркета гг и комиссию отправляй им. Через их контракты для этого деплоить не нужно

Vlad: Спасибо, а то голову уже сломал с их ключами и подписями (reply to 175106)

Alexey Toropov: Привет, подскажите, пожалуйста, как сделать ссылку на отправку нужного кошелька, с определенной суммой и комментарием 🥺

Vladimir: ton://transfer/<address>?     amount=<nanocoins>&     text=<url-encoded-utf8-text> (reply to 175117)

Albert: Ребята всем добрый день, если кто хорошо знает ларавел может помочь в проекте задачу решить не бесплатно , подробнее @vyacheslav_devSPB

Monster: Добрый день. Подскажите пожалуйста. В чём может быть проблема?  Есть контракт, на jetton wallet которого лежат токены. Овнер может отправить сообщение Withdraw на этот контракт, чтобы он перевёл токены овнеру.  То есть контракт должен отправить сообщение на свой jetton wallet, для того чтобы перевести токены овнеру.  Подскажите пожалуйста, что может быть не так в этом коде?  receive(msg: Withdraw){         self.requireOwner();         let transferBody: Cell = TokenTransfer{             queryId: 0,             amount: msg.amount,             destination: self.owner,             responseDestination: myAddress(),             customPayload: emptyCell(),             forwardTonAmount: 0,             forwardPayload: emptySlice()         }.toCell();         send(SendParameters{                 to: msg.jettonWalletAddress,                 body: transferBody,                 value: 0,                 mode: (SendIgnoreErrors + SendRemainingValue)             }         );     }

Monster: Вот ошибочная транзакция.  https://testnet.tonviewer.com/transaction/758b887475bb818055fff68a1336984679a98f0f7748a7bf41db5cfc7f1692d2

Daniil: проблема с тем как у тебя TokenTransfer сериализуется в ячейку. в частности forwardPayload (reply to 175126)

Monster: А что не так? (reply to 175130)

Monster: Что туда передать нужно?

Daniil: контракт жетон-кошелька ожидает там бит Either которого у тебя нет  throw_unless(708, slice_bits(in_msg_body) >= 1);  Посмотри схему сообщения которая описана в стандарте жетонов: https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md#1-transfer (reply to 175131)

Daniil: forward_payload:(Either Cell ^Cell)

Йцукен: народ вы чо, какие дрейнеры, совсем не следите за пространством, щас в топе нфт, ноткоин, вы осознаете, что по сути только один человек в мире, сидит на софте и скупает, кодеры вы где?😏, да в конце концов фиг с ним с выкупом по низу рынка, тут все таки уже будет конкуренуция, железо какое никакое нужно, но банальный бот в телеге с кнопками купить\продать, работающий с контрактами, и берущий 3-5% за сделку, в отличии от 25% у гейгемса, при минимальном пиаре, даст минимум 100к актива за пару дней, а если придумать чтоб оплачивать комиссию продавцу, вы представляете какое количество школьников набежит, за неделю две сотни тысяч будет, я еслиб умел кодить под блокчейн, ужеб накропал какого уродца, но вы то люди с опытом, знанием, чего спите, бабло тупо на дороге лежит и никто не берет, обсуждаете чернуху🙈

Иван Гречка: Если вы придумали гениальную инвест стратегию, которую никто не использует, значит: 1. Вашу инвест стратегию юзали и она не стрельнула 2. Ваша инвест стратегия хуйня (reply to 175138)

Denis: Есть маркеты без комиссии в тон. И че дальше? (reply to 175138)

Kinzey: Does mytonwallet wallet address require memo tag?  I want to withdraw ton from kucoin.

User<6908616126>: Этот чат на русском языке, вам сюда: https://t.me/tondev_eng (reply to 175145)

Denis: no (reply to 175145)

Йцукен: а может просто кодеры посчитали, да ну какаято ерунда эти ваши нфт, достаточно просто посмотреть что происходит, и сколько прямо сейчас зарабатывает галя на софте, и какой спрос у людей кто скупает вручную, спать некогда, не ну я же не настаиваю😏, просто удивляюсь, что кодеры пропускают мимо такую ситуацию (reply to 175141)

&rey: А прям надо? (reply to 175152)

&rey: dton.io/graphql, фильтруйте по аккаунту и изменению состояния на active.

Alexey: Ребята, всем привет, пришел с вопросом: как сейчас обстают дела с работой у блокчейн разработчиков? Как легко перейти? Сколько надо учится, что бы на что-то выйти?  Сам бекенд разработчик на Java, недавно на проекте соприкоснулся с вашим миром немного. Стало очень интересно.

Tim: На Яве много чего делать можно (reply to 175160)

Andrey: Подскажите, можно ли вычислить адрес кошелька пользователя по его ИД в Телеграме или это не связанные вещи? Хочу сделать белый список адресов только для подписчиков ТГ группы.

Slava: Можно вычислить адрес кошелька только по привязанному к нему NFT юзернейму. В ином случае никак. (reply to 175168)

Vladimir: Нет, они не связаны. (reply to 175168)

Andrey: Спасибо. Так и думал, но решил уточнить. (reply to 175169)

Vokhma: Попробую спросить ещё раз, может кто ещё увидит и подскажет (reply to 174608)

User<6908616126>: В tonconnect есть sendTransaction. Или вас интересует другой яп и библиотека? (reply to 175178)

Vokhma: Через это можно подписать хэш? (reply to 175179)

User<6908616126>: Хммм, чет не обратил внимание на слово "хэш". Тут не подскажу

Snowman☃️⛄️: Всем привет,хотел бы узнать ,какая средняя стоимость разработки игры и сроки?( спрашиваю потому что поступило 2 предложения которые кардинально отличаются друг от друга)

Daniil: ну вот GTA 6 например делали 10 лет и потратили 2 миллиарда. а как это связано с TON? (reply to 175186)

Snowman☃️⛄️: Тем что я пишу в чат разрабротчиков игр на блокчейне тон (ну должны быть вроде разработчики) и значит мне нужна игра на блокчейне тон а не гта 6 7 8 9 10 (reply to 175188)

Icy: А где тут указано что это чат разработчиков игр на блокчейне тон? (reply to 175189)

Snowman☃️⛄️: К сожалению,в интернете а именно на яндекс дзен (reply to 175190)

Daniil: даже если вы говорите про web3-игры, суммы и сроки могут варьироваться от 0$ и до бесконечности вверх в зависимости от самой игры. (reply to 175189)

Snowman☃️⛄️: а еще на Ton Dev висит ссылка на главной странице этого чата

Navajjoo: Приветствую) Можно ли в Тон тестнете проверить коллекцию визуально? Как на OpenSea Testnet. Спасибо

User<6908616126>: На гетгемсе она отображается, там и пиоверяйте (reply to 175194)

first_name: как лучше всего детектить поступления средств на кошелёк через pytoniq (лайтсервера)?

Star Ton: Всем привет! А подскажите, что почитать   Хочу в смарте контрактеFunC, реализовать сжигание токенов

User<6908616126>: Сжигание реалтзуется отправаой токена нулевой адрес насколько я знаю (reply to 175200)

— 2024-03-22 —

VIKTOR: Вы можете сделать клуб по наличию жетона или NFT  на кошельке (reply to 175171)

StasOff: Подскажите, может ли смарт контракт на func, получив нфт транзакцией проверить ее дату минта?

Roma: Всем привет! У нас есть маркетплейс NFT, где можно токенами оплачивать?

Beka: GetGems и TON Diamonds вроде бы (reply to 175239)

Roma: Не вижу, чтобы там можно было выставить за токен (на getgems) (reply to 175240)

Beka: Может быть я не совсем понял, что вы имеете ввиду под «токен», но насколько я знаю на getgems все NFT за TON-ы покупаются и продаются 🤔😅 (reply to 175241)

User<6908616126>: Он имеет в виду оплату нфт в жетонах. На гетгемс такого нет, там все за тоны. А вот есть ли площадка для оплаты нфт жетонами, я хз (reply to 175242)

Beka: У меня другой вопрос для участков этой группы: Я хотел бы начать изучать и разработать проекты на блокчейне TON и ТГ ботов. Следовательно хотел спросить у вас какие-нибудь полезные советы, роадмапы, откуда и как начинать и тд тп.  Сам являюсь бэк-энд разработчиком на C#, могу сказать, что некий опыт программирования есть

Narek: https://github.com/romanovichim/TonFunClessons_ru/blob/main/lessons/smartcontract/1lesson/firstlesson.md  а по ботам, там нечего учить, обычное Rest Api, можешь на своем C# и писать (reply to 175244)

User<6908616126>: Тг боты: пайтон, библиотека aiogram. Mini web app являются обычными сайтами, соответственно тут веб-разработка нужна(советую spa фреймворки js, такие как react, vue, angular. Если опыта вообще нет, vue твой друг, реакт мне лично не оч зашел)  По тону канал https://www.youtube.com/@WikiMar ну и официальная документация   P.S. если для ботов питон не устраивает, ищите библиотеки на свой язык, они точно есть. В крайнем случае, как и сказал @narekme это обычное REST  api, можно и свою реализацию написать (reply to 175244)

Beka: Понял, спасибо вам 🤝🏻

JB: Hi guys, can someone help me how can i burn token supply on ton chain?

JB: Which one is the dead address

Vadim: Добрый день. Кто может помочь?   я делаю https://toncenter.com/api/v3/blocks?workchain=0&shard=8000000000000000&limit=1&offset=0&sort=desc вот такой запрос что бы получить последний блок, но время от времени блоки не обновляются, 2-3 часа подряд,   https://toncenter.com/api/v3/#/default/get_blocks_api_v3_blocks_get тут таже история  все делатеся с подпиской за 59 тонов как бы решить эту проблему?

Minter: Какая подписка? (reply to 175254)

Vadim: advanced (reply to 175255)

Minter: Так подписка увеличивает количество запросов только, но ни как обновление блоков (reply to 175256)

Tim: Баги беты. (reply to 175254)

Vadim: просто уточнил, я просто не понимаю почему https://tonscan.org/ с такими же запросами не залипают) а у меня да, единственное обьясние что апи работает со сбоями) (reply to 175264)

Minter: Используйте tonapi.io (reply to 175266)

Данил: Ребята, возможно уже задавали миллион раз вопрос здесь уже, есть регулярка под адрес тона?)

nonam3e: у кого-нибудь есть регулярка для проверки валидности юзер френдли адреса (только мейннет)? (forwarded from Sergey)

nonam3e: address.Parse() или чё там в вашей либе (forwarded from Denis)

Roman: Регуляркой чексумму не проверить (reply to 175270)

F: Напишите пожалуйста ему в личку для выяснения подробностей, он вам поможет: @ruslixag (reply to 175254)

Tim: Это вызов? (reply to 175273)

Denis: я думаю он в курсе. в tonstat.us там видны провалы часовых правда давно не было. обычно до пары минут (reply to 175274)

ALEX: Тут есть разрабы кликеров, таких как ноткоин?

Ruslan: Дело в том, что этот запрос мониторит конкретный шард в workchain = 0 и исправно работает, если шардов всего один. Когда их становится два и более, то номера шардов меняются и запрос выдает не то, что от него хотелось. (reply to 175254)

Roma: А подскажите ещё плиз

Roma: Где взять такой график? Не помню, откуда скрин

Tim: это mylocalton вроде (reply to 175280)

Roma: Спасибо, попробую поставить (reply to 175284)

Roma: Да не, там вроде попроще график (reply to 175284)

F: Возможно tonadmin.org (reply to 175280)

Roma: А что это за сайт? Какой-то API URL просит (reply to 175291)

Aleks: Добрый день, подскажите, что это за ошибка? Возникает при проверке транзакций:    Event checker LITE_SERVER_UNKNOWN: cannot locate transaction in block with specified logical time

DL: Добрый день, зарегистрировался в ton open league, хотел вступить в сквад, выполнил все условия, холд 10+ тон на ТоnSpace и отправил 0.00001 ton на кошелек, но при этом когда хотел посмотреть участвую или нет - показывает что не участвуют   В чем проблема?

Minter: Купите подписку к апи который используете (reply to 175295)

&rey: Помнится, если лайтсервер не синхронизировался. (reply to 175295)

Андрей: Если перевести дословно, то транзакция в указанном блоке с указанным lt не найдена (reply to 175295)

Андрей: Ошиблись чатом, вам нужен чат вашего проекта, вероятность что там вам помогут кратно выше (reply to 175306)

&rey: Эм, проблема в том куске кода, который вы скинули? (reply to 175312)

­😇: Да я уже понял где проблема, не тем ключом подписываю код который на смарт приходит (reply to 175314)

Vladimir: Ты уже вчера писал. Жди оффер. (reply to 175321)

Fastik: Кто то знает как получить эти данные?  tonWalletSecretKey, tonApiKey  Для tonweb и tonweb-mnemonic

Ruslan: @tonapibot для tonApiKey (reply to 175330)

Fastik: Так а как пополнять? (reply to 175332)

Fastik: Так а как пополнять? (reply to 175333)

Vladimir: Там тарифы есть. (reply to 175343)

Vokhma: Попробую в четвёртый раз, потому что у меня проект горит. Сервис ethsign пишет что они просят кошелёк подписать сообщение, причём они работают с разными криптами, включая TON. (reply to 174608)

&rey: Может, какие-то кривокошельки вроде Trust Wallet (у которых, например, мнемоники по всем стандартам, и в тоне поэтому бесполезные)?

&rey: Обычные такую возможность не дают.

Sergey: Если это нужно для авторизации на бэке, то используйте TonConnect request параметр ton_proof (reply to 174608)

Vokhma: Нет, это для подписи файла (reply to 175358)

Max | TonMap: Всем снова привет, нужна помощь , за оплату, Не могу более 200 токенов минтить за раз, нужно решение.  Пишите в лс. Спасибо.

Ruslan: вечер добрый, вопрос по расчету цены в $ токенов при свапе на дедасте (DFC -> TON -> SCALE) сообразил такую формулу  step[0].amountOut = 77.329702189 TON step[1].amountOut = 69.028542177 SCALE step[1].reserveIn = 758960.709768183 step[1].reserveOut = 686295.62094653  priceUsdIn = tonPriceUsd * step[0].amountOut priceUsdOut = tonPriceUsd * step[1].amountOut * step[1].reserveIn / step[1].reserveOut  расчет около-неверный, входящие данные на 100% верные, что я мог упустить?  тест кейс: 111 DFC -> 69.028542177 SCALE дедаст показывает: 111 DFC = $333.82, 69.028542177  SCALE = $329.01  моя формула: 111 DFC = $334.79, 69.028542177  SCALE = $331.41

Maksim: Всем привет, подскажите, если подвязал кошелек TON к левому сайту, могут деньги увести потом?

Dmitry | backend4you.ton: Только если вы «не глядя» подпишете их транзакцию. Плюс обычно кошельке можно отвязать принудительно же (reply to 175364)

Maksim: То есть привязка ничего не дает, нужно обязательно самому подписать транзакцию? (reply to 175365)

User<6908616126>: Да (reply to 175366)

Maksim: Спасибо, добрые люди!

errLXSTᵃᵏᵃ ᵇᵃˡᵃⁿᵃʳ: Всем привет, Я только только начал изучать работу блокчейна, например если я хочу создать свой кошелек на Ton, чтобы просмотреть баланс, получить или перевести средства, нужно писать смарт контракты?

Vladimir: Нет, скачайте просто кошелек, там всё это уже будет сделано :) (reply to 175370)

errLXSTᵃᵏᵃ ᵇᵃˡᵃⁿᵃʳ: Я делаю школьный проект, выбирал тему, вот и задумался (reply to 175373)

nonam3e: Нет, контракты писать не нужно, они стандартные и в большинстве библиотек их создание и работа с ними реализована (reply to 175374)

.: Что означает exit code 33

.: Есть кто шарит

User<6908616126>: Смотря где... Думаю что на стиральной машинке и при запуске контракта этот 33 код будет разное означать)

Denis: ошибка совпадения seqno (reply to 175376)

Denis: у отправляемых сообщений он должен последовательно возрастать

User<6908616126>: Ребят, для того что бы расчитывать на помощь, пожалуйста предоставляйте все данные, так вероятность того что вам поможут выше, а гадание что вы имели в виду тратит и наше и ваше время. Спасибо

X1ag: Всем привет Есть тут разрабы тонкипера?   Не могу подключить еще один кошелек по сидке. По нажатию прост закрывает окно и все. Android  У кого-то может тоже была такая проблема?

User: у меня такое было когда я захотел подключить 5 кошелек (reply to 175384)

User: видимо больше 4 нельзя

X1ag: Я даже второй подключить не могу) (reply to 175385)

X1ag: Создать могу, а импортировать не дает

Denis: вроде нет такого ограничения (reply to 175386)

Aimin: Граждане разработчики, подскажите пожалуйста, возможно ли с кошелька TrustWallet вывести жеттоны? Возможно ли как-то сидфразу траствалета в тоновский кош перенести?

— 2024-03-23 —

Nick: У TON'а "особенные" сид-фразы, так что их никто не примет кроме, вероятно, Lumos'а (только iOS). (reply to 175399)

Ural: У меня 7 кошельков в тонкипере (reply to 175386)

User: Значит какой-то прикол с андроидом

User: У меня подключился новый, только когда я удалил прошлый

User<6908616126>: Мне перезагрузка телефона помогла (reply to 175384)

Oleg: Если используя Trust Wallet, в котором mnemonic 12 слов я отправил на адрес тона жетоны, как я их могу достать?

Spite: Если траст (не знаю точно) не поддерживает жетоны, то только вручную доставать приватный ключ и с помощью кода отправлять эти жетоны обратно.  Или если вдруг можно через какое-то приложение подключить кошелек (например, у сейфпала есть такая история, туда можешь импортировать 12 слов), то подключить и подписать транзакцию с переводом

Spite: Ну может импортировать в сейфпал и достать приватный по крайней мере сразу, а далее с его помощью подписать трансфер

Aimin: Уже все хорошо (reply to 175420)

Step 💠: 1) получить приватник 2) перевести через удобный sdk (reply to 175410)

Denis: Да. На некоторых андроидах баг. Пофиксят (reply to 175405)

Oleg: А UI для такого нет? (reply to 175425)

Step 💠: Могу за тон 20 накидать тебе скрипт (reply to 175427)

Oleg: Давай  input seed 12 words  output transfer jetton to destination addr (reply to 175428)

Step 💠: UQAXDpxgyUOahkFE1Rgi6-YOn08lhrKClm24nOmhjakSy5bh (reply to 175429)

Oleg: Установишь username в Telegram? (reply to 175430)

Step 💠: + (reply to 175431)

Oleg: Чек на 20 TON ($99.03) для @Stepkl.  💬 Пароль после скрипта. (reply to 175430)

Ruslan: Всем привет а кто то знает что делать если вот такая ошибка вылазеет при вызове get методов, вот codebase https://answers.ton.org/question/1682084993414729728/error-unable-to-execute-get-method-got-exit-code-13

Max | TonMap: Может кто объяснить. Создал тестовый кошелек. на  https://wallet.ton.org/?testnet=true   Там один адрес. При импортировании по словам в тонкипер - адрес другой. На одном есть ТОНы, на другом нету.   В чем прикол? По одной сид-фразе два разных кошелька.

Dmitry | backend4you.ton: https://docs.ton.org/learn/tvm-instructions/tvm-exit-codes нехватка газа. Слишком сложный гет-метод (reply to 175435)

Dmitry | backend4you.ton: Можно и больше - обратите внимание на wallet version: v3r2, v4r1 и т.д.  Помимо фразы надо еще одну и ту же версию выбирать (reply to 175439)

Mr. Coder: Привет! КТо-то знает, как повлиять на чистку кеша TON API?  Он не вытягивает метаданные из NFT некоторых уже часов 12.  Другие эксплореры видят метаданные а tonviewer  нет.

Tim: Не обновляйте данные нфт... (reply to 175442)

Dmitry | backend4you.ton: Надо в доках написать что «эксплореры загружают оффчейн только один раз» и приделать на страницы кнопки платного обновления 😆

Admin-чик: Привет всем! Есть идея для проекта, если есть свободные программисты сейчас - прошу в лс

User<6908616126>: Ston fi лежит что ли?

Mr. Coder: НФТ добавлено через интерфейс GETGEMS, обновлений дополнительных не было. (reply to 175445)

Tim: Тогда очень странно (reply to 175450)

Mr. Coder: На GetGems и в TonScan все отлично подтянулось и отображается корректно (reply to 175451)

Mr. Coder: В TonViewer и ранее я с таким сталкивался, когда со старта не подтягивало, но спустя время все становилось ок. А в этот раз очень много времени прошло и нифига не поменялось.

Dmitry: Подскажите такой момент. Пытаюсь развенуть ноду лайт клиента Ubuntu 22.04 На степе запуска получаю ворнинг: [warning] 23.03.2024, 09:56:57.424 (UTC)  <MainThread>  The config file is broken local.db: {'config': {'logLevel': 'info', 'isLimitLogFile': True, 'isDeleteOldLogFile': False, 'isIgnorLogWarning': False, 'isStartOnlyOneProcess': True, 'memoryUsinglimit': 50, 'isLocaldbSaving': False, 'isWritingLogFile': True}} [debug]   23.03.2024, 09:56:57.425 (UTC)  <MainThread>  Thread self_test started [debug]   23.03.2024, 09:56:57.425 (UTC)  <MainThread>  Thread write_log started [info]    23.03.2024, 09:56:57.425 (UTC)  <MainThread>  Start program `/usr/src/mytonctrl/mytonctrl.py` может конечно это нормально так как только стартую Но вот след степ пишет команда status но я получаю Command 'status' not found, did you mean:   command 'statfs' from deb gocryptfs (1.8.0-1build1)   command 'states' from deb enscript (1.6.5.90-3)   command 'qstatus' from deb gridengine-client (8.1.9+dfsg-10build1)  подскажите точно ли актуальна инфа на тон орг?

User<6908616126>: Да (reply to 175455)

User<6908616126>: Можно скрин, судя по логам консоль не открывается и вы пишите комарду статус в терминал убунты именно, а она естественно этой команды не знает

Dmitry: да вы правы, я даже не запустил, там исключение падает (reply to 175457)

User<6908616126>: Тут вроде варнинг, он обычно не выбрасывает (reply to 175455)

User<6908616126>: Да, запустите без sudo и все заработает (reply to 175458)

Dmitry: я запускаю без sudo. все как написано от юзера которого создал на первом степе

User<6908616126>: Так, устанавливали с флагом full или lite?

Dmitry: wget https://raw.githubusercontent.com/ton-blockchain/mytonctrl/master/scripts/install.sh sudo bash install.sh -m full -d (reply to 175462)

User<6908616126>: Интересненько.... А если консоль с судо запустить?

IndexCorp: могу ли отправить с тонкипера jusdt в криптобот, если да то в какую сеть?

Dmitry: лол) запустил с судо и заработало (reply to 175465)

User<6908616126>: Бывает и такое) (reply to 175470)

Dmitry: спасибо) (reply to 175471)

User<6908616126>: Не за что) (reply to 175472)

❤️🐾 🏰 Tower: /report (reply to 175478)

Bear: /report (reply to 175478)

Андрей: Попробуйте запустить гет метод локально, если позволяет ваша библиотека Локальный запуск позволяет потратить в 10 раз больше газа (если не в 100) (reply to 175435)

Андрей: Нужно больше подробностей, как ставили, под какого пользователя, еще можно писать в @ton_help_bot, там помогут (reply to 175455)

Dmitry: а уже решили проблему) (reply to 175486)

&rey: Зависит не от домена, а от того, как вы этот сайт размещаете. (reply to 175492)

&rey: Стоп-стоп, там было бы -14. Может, контракт не задеплоен? (reply to 175440)

Vladimir: А кто-нибудь может сказать что это за адрес? Зачем-то он мне тонов прислал 😅

Vladimir: А сколько прислал? (reply to 175498)

Alex Op: Ребят! Есть идея сделать кошелёк, у кого есть возможность в лс!

Максим Новиков: Оригинальная а главное свежая идея)) (reply to 175501)

Alex Op: Очень свежаешь (reply to 175504)

&rey: Это как вы собрались сайт в блокчейне размещать?) (reply to 175509)

&rey: Хотя жаль, что это не поддерживается. Большинство файлов ведь достаточно маленькие, а TonWeb так вообще можно было бы либой сделать.

&rey: Что же касается способов размещения: 1. сервер обыкновенный; 2. TON Storage — там размеры зависят от того, сколько сторейдж провайдер вам даст разместить. (reply to 175509)

User<6908616126>: Причем .onion сайты прекрасно работают и популярны в тех кругах, где они нужны, на блокчейне такое же можно было бы зайигачить, и было бы прям круто (reply to 175511)

Maksim: Ребят, всем привет, как в новом кипере на тестнет свихнуться ?

User<6908616126>: Вот так (reply to 174051)

User<6908616126>: Возможно прийдется перейти в настройки, 5 раз на лого тонкипера внизу тыкнуть и включить dev mode

Svαtoωλ‎: а кто то работал с мемпулом от тонапи)? я так понимаю что это в рилтайме отсылают все происходящие действия с подписанными адресами, или что-то в этом роде

User<1345164608>: О (reply to 175522)

User<1345164608>: Как сделать контракт для получения TON и выдачи какого то токена в каком то количестве?

Denis: Очевидно кто-то работал.  В мемпуле отсылаются external messages которые кошелёк отправляет в блокчейн (reply to 175522)

Denis: Написать на funC (reply to 175526)

User<1345164608>: Логично (reply to 175528)

&rey: Пересылать сообщения умеете? Считать адрес жетон-кошелька для своего контракта умеете? (reply to 175526)

User<1345164608>: нет (reply to 175530)

Monster: А откуда брать интерфейс JettonWallet в коде такт в своём контракте? (reply to 175530)

EmirNonstop: Добрый вечер!Подскажите, я правильно понимаю, что в логике смарт-контракта Jetton нет понятия approve и allowance?

&rey: https://docs.ton.org/develop/func/cookbook#how-to-send-a-simple-message (reply to 175531)

User<6908616126>: Репорт кинуть?) (reply to 175554)

slavagm: Своих денег ты видимо решил прям совсем не тратить (reply to 175556)

.: Что значит compute phase -14

Denis: docs.ton.org - и поиск. (reply to 175561)

.: Нехватка газа (reply to 175562)

.: Но я без понятия как это решить

User<6908616126>: На кошелек положить тонов (reply to 175564)

.: Тонов там дофига (reply to 175565)

Denis: тоны потребляются из входящего сообщения

Denis: слишком мало прикладываете к сообщению

Denis: хотя без описния что вы делаете подробно это гадания на кофейной гуще

Егор: Друзья, вот мне нужно проверить, является ли человек владельцем нфт. Он привязывается через тон коннект(github.com/cameo-engineering/tonconnect), я получаю его адрес в формате 0:16cc429c767ca4bd77d4368baa752eb6b6fae9df66c2c6e292e9e42b4ba21281. А tonutils-go работает с другим форматом адреса. Как быть?

User<6908616126>: Но так же там 1000% есть функция/метод который из hex делает юзерфрендли адрес (reply to 175573)

User<6908616126>: А, прикольно, но только вопрос зачем такие сложности, почему нет дефолтной реализации такой функции🤔 (reply to 175576)

User<6908616126>: Ну тоже верно (reply to 175578)

Егор: вот именно, почему бы просто в библиотеку эту функцию не вынести (reply to 175577)

User<1117017010>: пон (reply to 175590)

Sergey: Всем привет, помогите плз. Хочу перейти с toncenter на tonapi  const client = new TonClient(????);  Подскажите, могу ли подконнектить tonapi ? Если да скажите плз url

Sergey: Как дальше используете client? (reply to 175604)

Sergey: runMethod

Sergey: const { stack } = await client.runMethod(address, name, args);

Sergey: https://www.npmjs.com/package/tonapi-sdk-js тут не нашел аналога

Sergey: Есть решение или сидим на toncenter ?

Sergey: Можете посмотреть это, может подойдет   https://www.npmjs.com/package/@ton-api/ton-adapter (reply to 175611)

— 2024-03-24 —

Merman: Добрый день, подскажите как реализовать открытие миниаппа сразу в развёрнутом виде

Max: expand() (reply to 175616)

Shatll: Всем привет! Нужно написать небольшой контракт платно, если есть желающие, лс

User<6685616690>: Коллеги,подскажите,какие оракулы существуют в тон,где посмотреть? У тонапи?

&rey: Оракул рандома есть, по стандарту ECVRF. (reply to 175631)

User<6685616690>: Благодарю,поищем🤝 (reply to 175633)

&rey: https://ratingers.pythonanywhere.com/ecvrf-about.html — вот README. Я слышал про ещё оракулы вроде redstone finance, только не помню, работают или нет. (reply to 175634)

Roman: Выпущена новая версия PHP SDK 1.3.0 🤔  Из последних обновлений:   - поддержка Tonconnect - доработка взаимодействия с Highload wallet v2 - хелперы для работы с трейтами NFT (NftAttributesCollection, NftTrait и тд) - багфиксы.  https://github.com/olifanton/ton

User<6685616690>: Намасте,братец🤝🙏 (reply to 175635)

Оскар: ку, кто нибудь знает когда у тонапи обновляется кэш на метаданные и картинки нфт?

User<6230231504>: Да, вчера не мог закрыть приложение))) (reply to 175658)

User<6230231504>: Нет, ошибся, свернуть можно, вот других способов выхода нет. (reply to 175668)

Anabol Tv: Всем Привет на блокчейне Тон могу создать свой токен????

Vladimir: Да. (reply to 175672)

Anabol Tv: Ссылку можно

Anabol Tv: Ссылку можно??? (reply to 175674)

Vladimir: Да. На сайте ton.org можно все найти. (reply to 175676)

Anabol Tv: Спасибо

Dmitriy: Всем привет! В боте @tolsquadsbot не корректно начисляются очки за баланс на кошельке. Ждать пока починят или может куда-то написать стоить? Только не знаю куда.

Ruslan: Ты находишься в директории с бинарями, тебе надо оттуда уйти. Еще было бы неплохо ссылочку на репозиторий с кодом (reply to 175685)

Ruslan: Или хотя бы скрипт generate_adnl

Ruslan: Так, понял. Конкретно в этом случае проблема в том, что директория keyring уже существует. У меня так было, когда я запускался в build-директории.

Ruslan: А вообще, для прокси посоветую вот это: 1) удобный клиент для доступа в сеть: https://github.com/xssnick/Tonutils-Proxy 2) reverse-прокси, чтобы поднять свой сайт: https://github.com/tonutils/reverse-proxy

Ruslan: Вот это очень просто) (reply to 175694)

Ruslan: 1) это чтобы тебе на ton-сайты заходить с ноута 2) это для того, чтобы сайт захостить (reply to 175698)

var7en: Дайте ссылку где понятно рассказано как убрать надпись непровереный токен.

User<6908616126>: Давайте уважать друг друга, и хотя бы соблюдать простейшие правила этикета... Есть волшебное слово, которое многие почему то забывают употреблять...

Nikita: Чем сейчас быстрее отправлять сообщения к блокчейну, напрямую к своему лайтсерверу, тонапи, тон центер?

User<6230231504>: TonAPI (reply to 175711)

Nikita: это доказано? )) (reply to 175712)

User<6230231504>: Пару дней назад в чате обсуждали , посмотри, точно когда, не помню. (reply to 175713)

Denis: я писал. но я несколько афилирован с тонапи. но метрики меряли другие люди, а я только перепеваю. (reply to 175714)

Nikita: хорошо, спасибо )

EmirNonstop: Hi, Guys! Could you explain the usage of deadine? what if i set deadline too short ?   swap_params = SwapParams(deadline=int(time.time() + 60 * 5),                             recipient_address=wallet.address)

Cp Price: Ребят, как на комиссиях экономить простому пользователю? Меняется ли цена газа со временем?

Дмитрий: Здесь поищите, @phasolka0 (reply to 170411)

GUBER: Кто может помочь с деплоем NFT коллекции на гетгемс? Напишите в лс пожалуйста  Нужно доминтить 375 NFT в существующую коллекцию

User: Добрый вечер, а в тонапи есть какой-нибудь способ догрузить картинку? Потому-что сейчас Nft просто пустые, хотя metadata и картинка валидные (reply to 175715)

Denis: вообще должна сама грузиться

User: Примерно с каким промежутком происходит догруз (reply to 175735)

Tim: Обычно сразу. Когда необычно - никто не знает (reply to 175737)

User: Просто появляются ошибки непредвиденные, когда нфт пришла, а метадаты нет(работаем также через tonapi)

Denis: в 90% случаев я иду разбираться и там оказывается что ipfs тупит, мета с ошибками, висит на каком-нибудь s3  с рейтлимитами на запрос или за клаудфарой с включеной капчей

Denis: ну и вообще у меня про это есть нфт https://getgems.io/nft/EQBW2Z45K_Tls5egO9OCM-AvHfPCUke5Hux4hTHiNrThZMUO

NDA: мб там один из адресов на которые рассылка идет в этом примере твой, что указан в боте? (reply to 173903)

NDA: можешь подробнее скинуть в лс? (reply to 173903)

Hqx5: Нормально.

Zxc: Фастом рекламка (reply to 175742)

first_name: как средства pytoniq можно ловить транзы кошелька? без просмотра транзакций в каждом новом блоке

Denis: просмотром всех последних транзакций на аккаунте с каким-то интервалом

first_name: а, точно, проспал этот момент (reply to 175753)

Dmitry: Подскажите как установить UI для ноды. Выполняю enable JR но получаю ошибку [3/4] Add to startup Traceback (most recent call last):   File "<string>", line 1, in <module> NameError: name 'Add2Systemd' is not defined. Did you mean: 'add2systemd'? EnableJsonRpc - Error

Alex: Если на смарт контракт покупки просто напрямую кинуть средства, nft  автоматически автоматически твой?)

Alex: Тупой наверное вопрос)

Сергій: Привет. Подскажите если я ошибочно отправил монети TON на биржу , биржа сделала отмену транзакции , монети вернуться, если да то в какой срок. Благодарен

Dmitry | backend4you.ton: Открываете этот контракт в эксплорере, с вероятность 99% там будет и исходный код доступен (потому что все серьезные контракты прокидывают свои исходники через валидатор). Смотрите по коду что ждет контракт - читать же проще чем писать, там обычно почти все понятно. (reply to 175759)

Dmitry | backend4you.ton: Биржа не может сделать отмену транзакции. Она может сделать новую транзакцию в обратном направлении. Как только она это сделает - к вам на кошель прилетит секунд за 15 (reply to 175761)

Dmitry | backend4you.ton: Если конечно вы не использовали кастодиальный кошель типа @wallet - тогда наверное никогда не прилетит (reply to 175764)

Сергій: Етот кошелёк и использовал (reply to 175765)

Dmitry | backend4you.ton: Не ton space? (reply to 175766)

Сергій: С него делал перевод

Сергій: Нет (reply to 175767)

Dmitry | backend4you.ton: Печально. А на какой адрес вы думаете биржа отправит деньги обратно?

Alex: Спасибо

Сергій: Я надеюсь что на тот адрес с которого я переводил)

Олег ­ ­ ­: https://tonapi.io/v2/dns/auctions 😱

Олег ­ ­ ­: тон апи вкурсе бага? (reply to 175774)

Denis: теперь да.

Alex: Что за баг, прошу подробнее..)

Олег ­ ­ ­: Домены gram начали минтится и всё пошло по одному месту. (reply to 175780)

Олег ­ ­ ­: куча сервисов, даже вот такие крупные, показывают дичь)

✨ Uni: а как зарегистрировать собственную зону для доменов?

Daria: что? (reply to 175783)

✨ Uni: ну как .gram, только свое (reply to 175784)

Олег ­ ­ ­: Если кто то знает доменные зоны кроме .ton и t.me сообщите плиз

Denis: ну как грам не сложно. просто деплоите контракт и говорите что это меня такая зона. (reply to 175785)

Denis: только в корневую зону тон оно не добавлено и не резолвится конечено vasya.gram

✨ Uni: тоесть отправить монеты допустим для vasya.gram не получится (reply to 175788)

Denis: нет

✨ Uni: а в чем прикол таких доменов тогда

✨ Uni: это ж простая нфтишка получается в таком случае

Олег ­ ­ ­: это надо спросить у их создателя (reply to 175792)

Denis: ну может они попробуют пропихнуть их на голосование валидаторов. но я сильно сомневаюсь что пройдёт

Олег ­ ­ ­: всё бывает в первый раз :) (reply to 175795)

𝕊𝕖𝕘𝕒 𝔾𝕣𝕒𝕗𝕖𝕟 ✶: карманный блокчейн нам не нужон (с) (reply to 175796)

Олег ­ ­ ­: а вот к этому не имеет отношение? не в курсе? получается vasya.gram.ton? (reply to 175788)

𝕊𝕖𝕘𝕒 𝔾𝕣𝕒𝕗𝕖𝕟 ✶: получается (reply to 175798)

.: Столкнулся с кодом -14 при батч деплое

.: У кого нибудь было такое

Denis: вероятно да (reply to 175798)

Denis: домены третьего уровня есть и не одни

Denis: например vasya.getgems.ton, vasya.dolboeb.t.me

.: Как вообще это решается (reply to 175801)

.: Подскажите

("ᴜɴᴅᴇғɪɴᴇᴅ");: Ребят, какую библиотеку для работы с тон апи лучше использовать на питоне, или проще сделать это запросами?

User<6791067717>: ребят, хочу сделать кошелек ТОН в телеграмм боте.   я не знаю как сделать систему пополнения, чтобы пользователь пополнял баланс ТОН на мой кошелек и мой бот магическим образом это проверил и пополнил баланс пользователю.   заранее спасибо

("ᴜɴᴅᴇғɪɴᴇᴅ");: Ну выставляешь счет челику генерирая комментарий любые цифры к примеру, дальше челик отправляет обязательно с комментарием, и жмет кнопку проверить оплату и по этой кнопке проверяется транзакции твоего кошелька, если находится сверяется сумма с комментарием и все зачисляется средства на баланс бота (reply to 175846)

slavagm: Не, не похоже (reply to 175875)

User<5062827846>: дайте берн адрес пж

I: Здравствуйте, ищу человека, который шарит за nft на ton сети, конкретнее — за отслеживание транзакции, когда человек только выгружает nft на getgems на продажу и транзакция еще находится в обработке, есть кто может помочь с этим? Есть предложение, если получится реализовать. Или куда мне лучше обратиться, подскажите пожалуйста. Спасибо за внимание)

Denis: Никто не создавал два адреса для сжигания. Адреса "для сжигания" придумали говноеды не осилившие прочесть block.tlb (reply to 175924)

Denis: Вы можете взять адрес 0:sha256sum(govnoedy) и его сжигательная способность будет не хуже чем у 0:000....000

Denis: https://t.me/thedailytonrus/554?comment=10272 (reply to 175926)

Кумир молодежи: Привет. Напомните плиз инструмент для мэс дистрибьюшн

— 2024-03-25 —

Bumer: Привет. А есть кто приложения клепает. Ищу разрабов

Alex: можно по подробнее, mini apps (reply to 175953)

Alex: https://t.me/devs

Monster: Разве сжигание это не уменьшение саплая токена? В jetton standart прописано так, что просто уменьшение общего саплая. А отправка на нулевой разве уменьшает саплай? (reply to 175924)

Aleks: @fiscalforever лс

Олександр: Здравствуйте как ловить нужные типы транзакции напрямую с блокчейна.  Используя сервис tonapi.io обновления данных приходят только через секунд 10 после самого события

Andrey: Кст нфт нельзя дропнуть по описанному тобой методу. Его можно будет заминтить начальному владельцу же, нет? (reply to 175928)

Denis: ну так быстрее не будет (reply to 175988)

Denis: +- тоже самое

Denis: https://tonstat.us/

F: А ты бы не мог по публичным LS сделать для каждого LS отдельный график/строку? Что бы понимать какой LS плохой. Можно отдельной вкладкой/страницей. Было бы очень полезно, если сможешь скину на пиво чай 25 монеток) (reply to 175992)

abc <: Как удобно эта палитра цветов отображает разницу (reply to 175992)

Denis: нельзя. там оба метода к сожалению не рабочие (reply to 175989)

Denis: так лучше? (reply to 175994)

Denis: наоборот (reply to 175998)

Denis: оно опенсорс. можете сами поправить. вопрос отображения в дашборды и то что придётся больше нагрузки на сервера создавать просто так (reply to 175993)

Андрей: А почему именно синий/белый? Почему не зеленый/красный? Хотя на вкус и цвет Можно добавить вкладку переключения цвета (как языка) (reply to 175999)

Vladimir: Синий более-менее у всех людей нормально настроен. (reply to 176003)

abc <: В случае маленького диапазона видна хотя бы разница, а не одного оттенка, так что да (reply to 175999)

Bear: Всем привет! Необходима помощь в сетапе батч минта НФТ. Кто готов оказать посильную небезвозмездную помощь — жду в DM.

Олександр: А как же тогда некоторые ребята чекают за секунду что пришла транзакция? Вот допустим когда делают скрипты для выкупа НФТ? (reply to 175991)

Denis: в тонапи есть подписка на мемпул. (reply to 176010)

Denis: это сообщения которые посылает кошелек но они еще не вызвали транзакции в блокчейне

Max | TonMap: @MixUsers так код будет?  Или верни мои деньги. Взял деньги и игнорит. Сроки прошли.

Vladimir: Чат с личкой перепутал? (reply to 176015)

Alex: Ту возможно человека обманывают...

Max | TonMap: Не, чтобы заметил. И ответил. Он ответил. Пока все ок. (reply to 176016)

User<6230231504>: Только если тебя за рекламу ) (reply to 176017)

Alex: ну ответь ему не вынуждай человека тут писать

Oleg: Что будем делать с тобой, Степан? (reply to 175428)

Oleg: Деньги нужно отправлять вот так: t.me/tondev/175434 (reply to 176015)

Олександр: Где в чреде транзакций по созданию sale контракта, указывается цена по которой нужно отдать NFT

Bear: Актуально (reply to 176008)

Олександр: ? (reply to 176024)

Zaphod: Я думал, это стихи, а оказывается, вопрос) Без подробностей вам никто не ответит (reply to 176034)

ALEX: Друзья, кто делает свой кликер или планирует делать. Отпишите в лс.

Игорь: Всем привет. Вопрос по мини аппам.  Где-то видел код, не могу найти.   1. Как при открытии аппа сразу открывать на всю высоту. 2. Как окно закреплять, чтобы при свайпе оно не закрывалось внезапно.  3. Как задать цвет для нижней и верхней части аппа.  Благодарю

Vladimir: 1. expand() ... Все есть в документации. (reply to 176042)

Vladimir: Зачем? (reply to 176043)

Карло: Всем привет! Ищу разработчика смарт-контрактов на тон, нужно разработать токен с комиссиями покупки/продажи и с функцией вайт-листа на покупку в первые несколько часов после деплоя.

Pavel Popov: У меня заготовка есть с фронтом на vuejs и бэком на directus. Вполне рабочая, но требуются доработки. Для чего нужно? (reply to 176039)

Олександр: Как распарсить BOC

Олександр: Уже какой сервис не пробую, все мимо

Андрей: По какой схеме? (reply to 176049)

EmirNonstop: Привет, возник вопрос: чтобы провести трансфер или свап необходимо знать seqno в текущий момент времени! Что если я хочу провести несколько свапов, недожидаясь предыдущей?

Олександр: te6ccgEBBAEAtwABRYgBvVXMoxQj+kmDtTinWnFdumvpTNo33p48YQKOWyTtUkAMAQGcMZ6id5dkoDZImQ4UC5SqZSN04h/xNpKaEsESJQivKW01aMcWW4qeUUjKm/iZ2nszwBj3uFVcsIr9xFomQvY3DCmpoxdkQjldAAAAcAADAgFkQgAoPvU+sDeRbPQrPGn3bxzd8JnUNGlQcfA/qoFluFxSiRE4gAAAAAAAAAAAAAAAAAEDABIAAAAAaGVsbG8= (reply to 176051)

Олександр: Мне пришел такой event просто

Dmitry | backend4you.ton: тебе надо знать структуру данных чтобы считать данные. там может быть две строки, может быть пять числе и одна строка (reply to 176053)

EmirNonstop: Пусть текущий seqno = x, я отправляю команду на перервод токенов transfer, и не дожидаясь подтверждения данной транзы отпраляю еще один transfer но с seqno = x + 1 (reply to 176052)

Олександр: То есть если мне надо будет расшифровать boc, но я не буду знать тип данного boc'а мне нужно расшифровать под тот тип который я ожидаю, и обернуть это все в try/catch если тип не подходит то pass (reply to 176057)

Dmitry | backend4you.ton: не совсем. возможно try/catch не поможет. представь что ты ждёшь адрес + кол-во монет, и пытаешься их считать именно в таком порядке. а там на самом деле строка-комментарий, "удачно совпавшей длины". ты первые байты комментария посчитаешь адресом, следом количество - они как-бы считаются, но будет полная фигня же (reply to 176059)

Dmitry | backend4you.ton: поэтому в большинстве сообщений первый идёт 32 бит opcode. считал первые 32, срвнил с тем что ожидаешь и решил читать ли дальше

Олександр: спасибо за наводку (reply to 176061)

Алексей: Доброго времени. Ребят, подскажите где искать разработчиков mini apps?

Vladimir: На фриланс сайтах. (reply to 176065)

&rey: Вам нужен другой вид кошелька. Или для малого кол-ва свопов лучше собирать переводы по 4 штуки на транзакцию. (reply to 176052)

EmirNonstop: WalletV4R2 подойдет ? (reply to 176067)

Андрей: Нет, обычные кошельки для пользователей не рассчитаны на такое Вам нужен "промышленный" кошелек (reply to 176069)

&rey: Собирать по 4 умеет. (reply to 176069)

Peter: Привет  Подскажите, можно ли сделать интеграцию qr кода через ton connect чтобы event сработал после оплаты?

Алексей: я профан  в этих моментах. Кого именно искать на том же фрилансе? (reply to 176066)

Алексей: подскажите, пожалуйста

Vladimir: Там описываешь задачу, а разработчики сами тебя найдут. (reply to 176074)

Макар: Помогите найти задание для TON Tact Challenge #2. Я зарегистрировался неделю назад через бота, он мне прислал токены и все прочее. Время начало соревнования прошло и задания уже где-то должны появитсья. Где их смотреть?

Vladimir: https://t.me/tactlang там же свой чат. (reply to 176081)

Макар: Спасибо (reply to 176082)

Peter: Привет  Подскажите, можно ли сделать интеграцию qr кода через ton connect чтобы event сработал после оплаты?

Peter: Тоже самое что и с кнопкой оплаты  Только через qr code

Peter: Что нибудь есть подобное в ton connect?

Олександр: На стороне клиента сделай при формировании чека, коментарий с уникальным айди (reply to 176092)

Олександр: а на стороне сервера проверяй прошла ли эта транзакция на кошелек

Peter: Ну это получается sse нужно держать активное к tonapi? (reply to 176099)

Олександр: ну или так, или while true(get transaction), но лучше websocket (reply to 176101)

Peter: через websocket полностью транзакция приходит? (reply to 176102)

Peter: Типо не только ее hash (reply to 176102)

Олександр: как и через sse,  приходит только хеш (reply to 176103)

Peter: А почему тогда лучше websocket? (reply to 176105)

Олександр: Где то вычитывал, что соединения по websocket более ефективное, но не буду прям утверждать что это действительно так, поэтому как удобно (reply to 176106)

Peter: Мне просто не хочется брать подписку, на кол/запросов к tonapi. Может есть альтернативный способ сотворить такой мув? (reply to 176107)

Олександр: Там ограничения на 1 запрос в секунду, я не думаю что в твоем случае это создаст какие то задержки.  сделай очередь на проверку транзакций (reply to 176108)

Denis: не лучше (reply to 176106)

Egor: Гайз привет, почему не могу парс транзу получить по лт и хешу с кошельком?

Egor: https://ton.cx/tx/45481162000001:0qt4YoNUgw+42l/jCuZU7CtP4TCSQffQ40tSHVCcshU=:EQAfWpSWfIBJcfYNnjSOPqK3iroZvs9Knvon4UIvyRYIntxW (forwarded from WPWW)

Egor: 45481162000001:0qt4YoNUgw+42l/jCuZU7CtP4TCSQffQ40tSHVCcshU=:EQAfWpSWfIBJcfYNnjSOPqK3iroZvs9Knvon4UIvyRYIntxW  https://mainnet-v4.tonhubapi.com/account/EQAfWpSWfIBJcfYNnjSOPqK3iroZvs9Knvon4UIvyRYIntxW/tx/parsed/45481162000001/0qt4YoNUgw+42l/jCuZU7CtP4TCSQffQ40tSHVCcshU=?count=1 (forwarded from Egor)

Alexey: Всем привет! Ребята , есть такой  моментик, на несколько вопросов  касательно api https://toncenter.com/api/v2/,  есть  маршрут в разделе blocks, /getBlockTransactions  и такой же есть маршрут в разделе transactions, /getBlockTransactions  смотрю на них и как по мне это два одинаковых эндпоинта,  при обращении к первому у меня периодически в ответ приходит json c  500 , и соответственно рейзит error  и приложение не отрабатывает по функционалу...  вот к примеру тестовые данные https://toncenter.com/api/v2/getBlockTransactions?workchain=0&shard=-2305843009213693952&seqno=42656094&count=10000  сейчас мне возвращает 500 .  но  проходит определенное время ( минут 20+-)  обновляеш запрос   и уже  приходит  200, с полным ответом,  кто может подсказать   с чем это  связано ?  блок появился , но транзакциии не набрали нужное количество подтверждений?     и нет ли тут дублирования маршрутов   в api?

&rey: Всё в тоне финальное после одного подтверждения. Там скорее вам так повезло, что запросы попадали на тормозящий по синхронизации сервер. (reply to 176115)

Alexey: вот сейчас наблюдаю  такую же картину с параметрами https://toncenter.com/api/v2/getBlockTransactions?workchain=0&shard=-2305843009213693952&seqno=42656651&count=10000  можете от себя попробовать проверить? (reply to 176118)

&rey: `"LITE_SERVER_NOTREADY: cannot find block (0,e000000000000000) seqno=42656651: ltdb: block not found (possibly out of sync: shard_client_seqno=36928068 ls_seqno=36928068)"` (reply to 176119)

Alexey: да у меня такая же,  но в блокчейне смотрю блок 42656651 уже есть. (reply to 176120)

&rey: Так вот каким-то образом Toncenter направил ваш запрос на лайтсервер, который уже давно не скачивал блоки из чейна. (reply to 176122)

Alexey: но время пройдет  минут 20 -30 , и я так понимаю начнет напрявлять на нужный сервер))), потому как потом все ок приходит...  в самом https://toncenter.com/api/v2 ,   никаких там редиректов не корректных не видно?, может из за того что два эндпоитна одинаковых, и оно не корректно обрабатывает? c api ключем это не может быть связано который в header  передается? (reply to 176123)

Ruslan: Привет! Это один и тот же эндпоинт, просто у него два тэга и он в две секции попал. Да, похоже некоторые запросы попадают на тормозящие. Это довольно странно, потому что я не вижу в аналитике тормозящих ЛС (reply to 176115)

Ruslan: В любом случае, такие ЛС вскоре помечаются как временно неработающие

Komron: Привет, а в тонконнект ui можно юзать USDT ?

Vladimir: Нет. (reply to 176131)

Mohammad: Привет, ребята Как я могу сохранить строку содержимого nft внутри моего контракта FunC?  То же, что и фрагмент машинописного текста ниже:  let itemContent = beginCell().storeBuffer(Buffer.from("x.json")).endCell();  Я попробовал это, но результаты не совпадают:  slice  nftItemMeta = "x.json"; begin_cell().store_slice(nftItemMeta).end_cell()  Я получаю код выхода: 9 (недополнение ячейки), используя приведенный выше код FunC!

&rey: beginCell().storeStringTail("x.json").endCell(); (reply to 176134)

Mohammad: Спасибо Что является эквивалентом этого в FunC? (reply to 176135)

&rey: Тот код, который у вас на FunC, и соответствует. (reply to 176136)

xandrew: Каким образом я могу достать price jetton? Перекопал куча апи, не нашел подходящее

Mohammad: Но я получаю разные результаты от этих двух! (reply to 176138)

Mohammad: begin_cell().store_slice("x.json").end_cell() != beginCell().storeStringTail("x.json").endCell();

&rey: В смысле? А как проверяете? (reply to 176141)

Mohammad: Я использовал (~dump) для печати результата.  строка: "item.json"       #DEBUG#: s0 = C{16BC2DB85B1CA0B1961C46CCD8EE7932F1436033925F7A4DBB82691AC768B381}       #DEBUG#: s0 = C{17222A748A356C219AA61790A490E06D137728E19B513499B073E038C4C94CA5} (reply to 176142)

&rey: Выведите ~dump(c.begin_parse()); (reply to 176143)

&rey: Но кажется, что вы не эти две ячейки сравниваете, а в какой-то момент оборачиваете ячейку из TS ещё во что-то.

Mohammad:     #DEBUG#: s0 = CS{Cell{01438008751cd89939e14c1d70e115368f5e09b4e9093ebaf574f8f2443b0b064643c630} bits: 0..267; refs: 0..1}       #DEBUG#: s0 = CS{Cell{00126974656d2e6a736f6e} bits: 0..72; refs: 0..0} (reply to 176144)

&rey: Эм, ну верхняя ячейка совершенно не та: в ней лежит адрес, а в ссылке ещё что-то. (reply to 176141)

&rey: И да, вторая ячейка тоже как метаданные NFT не подойдёт.

Mohammad: Я использую эту переменную и отправляю ее в контракт:  let itemContent = beginCell().storeStringTail("item.json").endCell();  Внутри контракта я сбрасываю входные данные и строку FunC:          cell content = in_msg_body~load_ref();         ~dump(content.begin_parse());         ~dump(100001); ~dump(begin_cell().store_slice(nftItemName).end_cell().begin_parse());

Mohammad: Огромное спасибо <3 ты очень помог (reply to 176147)

Мемный: Привет всем! Вроде, в тоне отзывчивое сообщество, но никто не может ответить по поводу бага в Комьюнити боте на минт SBT от ОКХ.  Кнопка Mint не появилась, кошелек переподключить нельзя, говорит что уже все сминтилось. Может, есть какая-то магия, чтобы заработало таки? Спасибо!

slavagm: Кошелек - Добавить кошелек (reply to 176165)

Flyheck: там нет вариации "добавить testnet кошелек" (reply to 176166)

Flyheck: можно либо импортировать существующий testnet, либо импортировать/создать обычный

Flyheck: тоже с этим вопросом столкнулся, поэтому сюда зашел)

EmirNonstop: Какие rpc лучше?

slavagm: Просто вводишь мнемонику от обычного кошелька и всё (reply to 176188)

Flyheck: Спасибо (reply to 176191)

EmirNonstop: Подскажите, почему для некоторых жетонов мы можем выполнить след код, для некоторых --- нет (например SCALE)   jetton_master = Jetton("EQBl3gg6AAdjgjO2ZoNU5Q5EzUIl8XMNZrix8Z5dJmkHUfxI", self.client) await jetton_master.update()

EmirNonstop: Странно, я брал адреса контрактов с дедаста(у SCALE --- EQBlqsm144Dq6SjbPI4jjZvA1hqTIP3CvHovbIfW_t-SCALE) (reply to 176211)

User<6365803117>: Привет всем, есть команды которые игры разрабатывают? напишите в лс пж

Ded: Что делать если Рассинхронизация локального валидатора большая 300к секунд и увеличивается ?

Flyheck: Кто-то шарит, как поднять свой DNS в ton? Для этого нужно быть валидатором?

User<6365803117>: для утки делать будешь?) (reply to 176223)

Flyheck: Хотелось бы:D (reply to 176224)

User<6365803117>: так сделай ;) (reply to 176225)

Flyheck: Для начала нужно узнать как)

EmirNonstop: доброй ночи! как я могу активировать только что созданный кошелек ?  На кошельке есть 1 ТОН. Я хочу свапнуть тон на Scale, но так как кошелек еще не активирован => возникает ошибка:   В коде :  await self.wallet.transfer(destination="EQDa4VOnTYlLvDJ0gZjNYm5PXfSmmtL6Vs6A_CZEtXCNICq_", # native vault                                 amount=int(swap_amount),                                 body=swap)   Ошибка:  ERROR:root:Get method "seqno" for account Address<EQBRdHKCBUV3Q6rjpE9PcuW0Q-zalBje9fD6LPXhJQNaMe5n> returned exit code -256

Guwfa: Вроде один способ, отослать на другой адрес транзакцию в тон (reply to 176230)

— 2024-03-26 —

EmirNonstop: Себе отправить

EmirNonstop: async def activate(self):           query = self.wallet.create_transfer_message(to_addr=self.sender_address,                                                 amount=tonsdk.utils.to_nano(amount, 'ton'),                                                 seqno=0, payload="", send_mode=3)         boc = bytes_to_b64str(query["message"].to_boc(False))         response = await self.provider.send_boc(boc)         print(response) (reply to 176232)

Оскар: никто не знает почему тонапи так херово достаёт метаданные у нфт? данные хранятся на ipfs, но доступ к ним через публичный гейт, а соотвественно https по итогу на гетгемсе загружаются все и быстро на explorer.tonnft.tools тоже всё загружается а вот в тонвьюере (данные которому с тонапи приходят) половину коллекции просто не грузит я понимаю можно сослаться на кэш, но там дофига нфт, которые не подгружаются спустя неделю, если не больше  https://tonviewer.com/EQCcTH0lnajG34GHoCQ3QFjs-jbngg0_GhuexyAWus6UCMRC сама коллекция  в поддержку тонвьюера писал - игнорят

Кумир молодежи: Ребята, подскажите ориентир по стоимости работ по проведению эйрдропа. Нужно спарсить адреса держателей токена Х, сформировать БД и сделать дроп. Ну или как там… Плиз)

Кумир молодежи: И почему сегодня весь день плохо работают графики цен на тон?

nik: Всем привет, как отправлять много транзакций с одного адресса? Чтобы учитывать seqno... ?  если предыдущая еще не потверждена, то будет несколько с одним и тем же seqno? и получается fail?

EmirNonstop: как я могу достать баланс JETTON в питоне?

Dmitry | backend4you.ton: https://github.com/ton-community/vanity-contract (reply to 176216)

nik: Привет ещё раз! Допустим, отправляю 5 транзакций в секунду.  Seqno ещё не поменялся, но я буду указывать seqno + pending transactions? Такое возможно сделать? Если да, то как? У меня все равно только первая транзакция проходит (reply to 176243)

Андрей: невозможно (reply to 176264)

nik: Блин, а как тогда делать если нужно отправить несколько транзакций за одну секунду? С обычным кошельком (reply to 176265)

Dmitry | backend4you.ton: 1) менять кошелек 2) менять бизнес-требования 3) менять блокчейн :) 4) использовать несколько кошельков (reply to 176267)

Владислав: Всем привет. Делаю транзакцию через апи кошельков   data = {           validUntil: Math.round((Date.now() + 60000 * 7) / 1000),           messages: [             {               address: address,               amount:  toNano(0.01)//Toncoin in nanotons             }           ]         }          store.app.tg.connector.sendTransaction(data).then(result => {           console.log('SEND RESULT', result);           this._buySuccess(); Мне надо на стороне бэка специально идентифицировать транзакции, я хотел использовать для этого поле payload но чтобы я туда не положил, там всегда ошибка, можете посоветовать что-то по этому поводу?

nik: А как tonkeeper и другие это делают? (reply to 176268)

Dmitry | backend4you.ton: (4) (reply to 176271)

nik: Нет, ну в плане у меня есть кошелек tonkeeper. Я ведь могу сделать несколько транзакций, не дожидаясь подтверждения предыдущих (reply to 176272)

nik: И там обычный кошелек V3 или v4

Dmitry | backend4you.ton: млин, хочется сказать большое спасибо людям которые периодически релизят новые версии ton-blockchain/ton, и при этом периодически меняют туда-сюда - на _ в именах файлов 🤬

Dmitry | backend4you.ton: как "можете сделать"? там же после отправки висит скрин а-ля "жду подтверждения" (reply to 176274)

Roman: Кладите ячейку с текстом. https://docs.ton.org/develop/dapps/ton-connect/transactions#transfer-with-comment (reply to 176270)

Владислав: Это для ноды, мне нужно для фронта, ошибка что не видит буфер (reply to 176278)

EmirNonstop: Привет! Как утроен механизм Парсинга баланса JETTON?

Denis: https://getgems.io/nft/EQBW2Z45K_Tls5egO9OCM-AvHfPCUke5Hux4hTHiNrThZMUO (reply to 176237)

&rey: Какую часть вы уже знаете? Адрес пользователя? (reply to 176283)

Андрей: Поиском по этому чату (reply to 176267)

EmirNonstop: Допустим я еще никак не взаимодействовал с JETTON на кошельке, (только swap на dedust)——> хочу узнать баланс Jetton (после свапа) ——>   jetton_wallet = await Jetton(jetton_address, client).get_jetton_wallet(owner_address=wallet.address.to_str(True, True, False))         await jetton_wallet.update()  Возникает ошибка (reply to 176285)

EmirNonstop: Я хочу узнать баланс определенного JETTON на кошельке (reply to 176285)

Ruslan: Что-то странное в stack лежит

aleksej: у тонапи еще вот такой есть метод: /v2/accounts/{account_id}/jettons вернет балансы всех жетонов для определенного аккаунта (reply to 176289)

&rey: Пустой стек пробовали? (reply to 176299)

&rey: https://t.me/tondev/167140 (reply to 176289)

𝄄꯭𝄁꯭꯭🇧🇮꯭𝄁𝄄꯭𝐀꯭𝆭𝅝꯭𝐁𝆭𝅝꯭𝐔𝄄𝄁꯭🧸꯭: Привет

EmirNonstop: Для кошелька 4 версии, как необходимо изменить код для transfer'a  await self.wallet.transfer_jetton(             destination_address=self.sender_address,              jetton_master_address=self.base_address,             jettons_amount=1         )  'WalletV4R2' object has no attribute 'transfer_jetton' (reply to 176301)

Александр: Снижение газа будет?

Ozma: Привет всем хочу сделать проект нужны разрабы с чего мне начать?

Александр: С финансовых вложений (reply to 176325)

Beka: бизнес план, модель, анализ рынка, стратегии развития, роадмап, найм HR и тд тп (reply to 176325)

Александр: L2 4 цента (reply to 176328)

Виктор Аннасхе 2: Привет, правильно понимаю, что чтобы понять, что ton я перебросил на другой кошелек, что средств хватило, надо чекать транзакции? Как вы это делаете?

Виктор Аннасхе 2: У транзакции нет статуса насколько я смотрел, какой признак, что она прошла? (reply to 176333)

Олександр: В tonapi.io  В streaming api в mempool попадает лишь заголовок транзакции? internal message достать можно?

Олександр: А разве оно стукнется если оно в мемпуле, а в блокчейне еще не закпреленно (reply to 176339)

aleksej: как заголовок? в мемпуле сообщения приходят.   Дальше можете например методы эмуляции дернуть в тонапи (reply to 176337)

Владислав: Может кто-нибудь подсказать пожалуйста. Я отправил вот такой payload  te6ccsEBAQEAHQAAADYAAAAAVE9OIENvbm5lY3QgMiB0dXRvcmlhbCFdy+mw  Там зашифровано вот такое  TON Connect 2 tutorial!  В сообщении при транзакции в tonkeeper всё показывается правильно Потом я через ton center смотрю транзакцию, там в сообщении такое Kzq/yk3/tIKOUWea+QF5LSSZV73cFXRFTM7Kr9X1DI2p8vzhwRrUfzdrXxtsS8LeeasxTSQl2pX7 zS1AVP6fDCmpoxf/////AAAAAAAD Каким образом я могу это расшифровать

Олександр: там приходит опкод транзакции, еще какая то инфа  А IntMessage вроде в другом Bugs of Cell находиться (reply to 176344)

aleksej: в мемпуле сообщения приходят https://docs.tonconsole.com/tonapi/streaming-api#subscribe_mempool-method (reply to 176347)

Denis: а причем тут мемпул? (reply to 176348)

Олександр: Батя, ответь пж, internal message достать можно отсюда? (reply to 176349)

Denis: да

Владислав: Кто-нибудь может подсказать по этому? (reply to 176345)

Олександр: Это все BOC, вечная проблема (reply to 176352)

&rey: Тоны не отправились обратно в out_msgs [за счёт баунса, например, или ещё чего]. (reply to 176334)

Владислав: ? (reply to 176353)

&rey: Очень рекомендую docs.ton.org. (reply to 176356)

&rey: Точно неизвестно, поэтому вам к рынкам предсказаний, а не к разрабам. Даже скажу: оценивают в 47%. (reply to 176320)

Владислав: Да, я вкурсе, всегда проще сказать иди читай доку по которой ничего не понятно (reply to 176357)

&rey: А сможете выписать, какие пункты непонятны, а какие понятны? Это позволит там всё улучшить... (reply to 176359)

Олександр: Поверь на словах еще хуже будет сказано))) (reply to 176359)

&rey: Там и видеогайды есть где-то. WikiMar, если память не изменяет.

Владислав: Ну и я не дурачок, читаю каждый день пытаюсь видосы смотреть, на протяжении недели, дока говно, инфы как сделать что-то максимально мало, только тыком всё находится (reply to 176362)

Asher: https://www.youtube.com/@WikiMar (reply to 176363)

Кирилл: как можно словить транзу свапа дедаста с жетона через тон клиент?

Egor: гайз привет, как cell конвертнуть в объект js?

𝕄𝕒𝕣𝕤ℕ𝕖𝕒𝕣𝕓𝕪: Ребята, привет. Уверен что данный вопрос уже поднимался, ткните где можно почитать. На данный момент мы имеем 60-70 TPS. Видел когда-то давно видео в сети, где сеть в тесте выдавала сотни тысяч. Почему это не работает в реальной жизни? Это же мрак, у меня транзакции висят по 40 минут.

Tim: Не висят они по 40 минут (reply to 176375)

Андрей: Какая нагрузка такая и tps У меня транзакции выполняются за 15 секунд (reply to 176375)

&rey: Транзакции в блокчейне у вас не висят, проблемы сервисов, которые вы используете. (reply to 176375)

&rey: Ну, зависит от SDK: Cell.fromBase64(...) / TonWeb.boc.Cell.oneFromBoc(TonWeb.utils.base64ToBytes(,,,)) (reply to 176374)

Egor: я так пробовал, он отдает байтовую структуру по идее, ее дальше нужно как то парсить (reply to 176381)

&rey: Ну, да. И парсинг зависит от того, откуда вы достали эту ячейку. (reply to 176382)

&rey: И у ячеек по умолчанию нет дефолтного представления как JS-объектов.

&rey: Для этого есть, например, https://github.com/ton-blockchain/ton/blob/master/crypto/block/block.tlb. (reply to 176383)

Egor: то есть нужно опираясь на доку придумать себе алгос по разбору их (reply to 176384)

Egor: понял принял

&rey: Ну, не совсем придумать — они там вполне однозначно задаются. Кроме того, что поля можно читать с конца (если надо считать одно, это может выйти быстрее). (reply to 176386)

𝕄𝕒𝕣𝕤ℕ𝕖𝕒𝕣𝕓𝕪: Ну как сказать, не совсем мои. Вот биржа Gate я купил там тоны, нужны были очень срочно. Я поставил на вывод еще в 13.59 до сих пор жду. Понятно, что может это биржа тормозит. Но раньше переводы были в течении нескольких минут, сейчас это десятки минут -факт. (reply to 176379)

Андрей: Это проблемы у биржи Биржи ещё не до конца освоились с асинхронный блокчейн (reply to 176389)

Maksim: скорее всего вы не туда смотрите. Вам нужно в out_msgs[0]["msg_data"]["text"], там будет base64 закодированный комментарий. Либо сразу в out_msgs[0]["message"] (reply to 176345)

𝕄𝕒𝕣𝕤ℕ𝕖𝕒𝕣𝕓𝕪: Вообще я хотел узнать. Есть ли где-нибудь документация, как сесть динамически подстраивается под нагрузку или типа того. (reply to 176390)

Maksim: https://docs.ton.org/learn/overviews/ton-blockchain#many-accountchains-shards (reply to 176392)

Игорь: Всем привет. Вопрос по мини-аппам. не могу найти в доках, как зафиксировать окно мини-аппа. Не могу делать прокрутку в приложении нормально, окно мини-аппа начинает двигаться тоже. Спасибо

Кирилл: как из транзакции получить этот комент?

Denis: Надо фронтам сказать чтоб убрали слово коммент потому что это не комментарий (reply to 176405)

Denis: В тонвьювере внизу справа есть иконка. Тыкаешь на неё и она показывает все ручки тонапи которые дернула для этой страницы (reply to 176405)

Кирилл: кто-то продает бота с уведами о свапе на дедасте?

Олександр: Блин может у кого то есть пример десериализации boc на typescript

Vladimir: Зачем это тут? У них есть чат, там можно и задать вопрос. (reply to 176416)

&rey: Десериализации во что, самое главное? (reply to 176415)

Mirka: Если руки откуда надо растут, то можно много на чем комфортно делать (reply to 176416)

Олександр: ? (reply to 176419)

Олександр: Хотя бы оп код достать (reply to 176419)

Ivan: Так как делаю фронт, для своего приложения, и технологии может не те используем или руки не те)) (reply to 176418)

&rey: У вас экстернал, я правильно помню? (reply to 176422)

Олександр: https://docs.tonconsole.com/tonapi/streaming-api#subscribe_mempool-method  вот эти (reply to 176424)

&rey: Сможете по TL-B написать парсинг? (reply to 176425)

Aimin: Граждане разработчики, подскажите, кто знает кошельки, в которые можно экспортировать приватник, а не сидфразу

Mr. Kirill: Не до конца понял суть вопроса, но может быть это то что нужно?  https://github.com/tonkeeper/wallet-api  Останется только на бэкенде слушать транзакции на определенном кошельке и искать нужный коммент для валидации (reply to 175352)

Mr. Kirill: Диплинк ton:// вроде бы во всех кошельках поддерживается (reply to 176430)

Zaphod: Думаю, это заговор разработчиков кошельков (reply to 176428)

ъуъ: Добрый день! Не подскажете, почему так? Отправляю сообщение в ноду о переводе тонов с одного кошелька на другой, она отвечает "ок", но на самом деле сообщение не было отправлено, его вообще ни в каких блокчейн эксплорерах не найдёшь  Сообщение составлено правильно, потому что если попытаться его переотправить, всё отправляется нормально. И случается так не с каждым сообщением, которое отправляется в ноду, а только примерно с каждым 20-30-ым  В ноду хожу только я один, больше никто ей не пользуется

Tomooney: Может теряют при нагрузке? Сейчас рынок падает

ъуъ: в смысле? (reply to 176434)

Tomooney: Ну это ж обычное дело, когда нагрузка подрастает, начинаются баги (reply to 176435)

ъуъ: Блин, а как с этим бороться?( Чекать блоки и смотреть, нашлось ли сообщение с каким-то квери айди? (reply to 176436)

&rey: Нода может не до всего оверлея доставать, и какой-нибудь из валидаторов успевает создать блок без вашего экстернала. (reply to 176433)

&rey: Лучше уж искать экстернал с вашей подписью, она хотя бы уникальна. (reply to 176437)

ъуъ: Понял, а есть ещё какие-то способы убедиться, что сообщение было доставлено? (reply to 176439)

&rey: tonapi.io, помнится, какие-то особые методы применяет. (reply to 176440)

Vokhma: Не, по ссылке ничего похожего нету. Вкратце хотелось бы так: 1. Я вызываю функцию в TON и передаю в ней хэш файла. 2. В ответ получаю хэш, зашифрованный приватным ключом кошелька. 3. Также я могу где-нибудь найти публичный ключ кошелька, с помощью которого можно расшифровать хэш и убедиться что он был подписан именно тем кошельком. (reply to 176430)

ъуъ: Спасибо, буду тогда дальше копать) в принципе в блок сканнере чекать сообщения тоже не так сложно (reply to 176441)

Mr. Kirill: У кого вы хотите вызывать подпись? - Напрямую у сети тон - У web3 коннектора frontend части - у крипто кошелька через deep link (reply to 176442)

&rey: Ни один обычный кошелёк в тоне такого вроде ещё не поддерживает. Полагаю, ethsign работает не с ними или как-то по другому делает подпись для TON. (reply to 176442)

Vokhma: Где угодно. Лишь бы была возможность подписать файл кошельком в соответствии с законами РФ по ЭЦП. (reply to 176445)

&rey: Интересно, если я открою футстеп на ончейн-проверку подписей шифра Кузнечика, мне его одобрят или нет...

Mr. Kirill: https://habr.com/ru/amp/publications/709014/  Ну тогда делайте dapp, юзеры с помощью своих кошельков будут подключаться и вызывайте после этого подпись сколько угодно) (reply to 176447)

Vokhma: Предлагаете просто записывать хэш файла в блокчейн?

Mr. Kirill: Чтобы создать dApp, который подключается к TON кошельку и вызывает подпись сообщения, вам нужно выполнить несколько шагов. Это общий подход, и детали могут отличаться в зависимости от используемых библиотек и инструментов разработки. Вот базовые шаги:  ### 1. Выбор фреймворка и настройка среды  Первым шагом является выбор подходящего фреймворка для разработки вашего dApp. Популярными вариантами являются React, Vue.js или Angular для фронтенда. Вам также потребуется настроить среду для разработки smart-контрактов TON, если ваш dApp будет взаимодействовать с ними.  ### 2. Интеграция с кошельком TON  Для взаимодействия с кошельками пользователей TON, вашему dApp потребуется интегрироваться с TON Wallet API или использовать готовые библиотеки, такие как tonweb или ton-client-js. Эти инструменты позволяют запросить подключение к кошельку, получить адрес кошелька пользователя и вызвать подпись сообщения.  ### 3. Запрос на подпись сообщения  После того как пользователь подключил свой кошелек к вашему dApp, вы можете запросить подпись сообщения. Это делается путем отправки специально сформированного запроса через API кошелька. Вам потребуется указать сообщение, которое пользователь должен подписать, и, возможно, другие параметры, в зависимости от API кошелька.  ### 4. Обработка подписанного сообщения  После того как пользователь подписал сообщение, вы получите его подписанную версию. Эту подпись можно использовать для подтверждения действий пользователя в вашем dApp, например, для выполнения транзакции или изменения данных в smart-контракте.  ### Пример кода  Вот примерный код на JavaScript для запроса подписи сообщения с использованием библиотеки ton-client-js: const { TonClient } = require("@tonclient/core"); const { libNode } = require("@tonclient/lib-node");  TonClient.useBinaryLibrary(libNode);  async function signMessage(message, walletAddress) {     const client = new TonClient({ network: { endpoints: ["https://net.ton.dev"] } });     try {         // Предполагается, что вы уже подключились к кошельку пользователя и получили его ключи         const { keys } = await client.crypto.generate_random_sign_keys();                  const signedMessage = await client.crypto.sign({             unsigned: message,             keys: keys,         });                  console.log("Подписанное сообщение:", signedMessage);     } catch (error) {         console.error(error);     } finally {         client.close();     } }  // Пример использования const message = "Hello, TON!"; const walletAddress = "ВАШ_АДРЕС_КОШЕЛЬКА_ЗДЕСЬ"; signMessage(message, walletAddress);  Этот пример иллюстрирует базовый процесс подписи сообщений, но детали реализации могут отличаться в зависимости от вашего конкретного случая использования и инструментов. Важно тщательно изучить документацию к используемым библиотекам и API TON, чтобы правильно настроить взаимодействие с кошельком и обработку подписанных сообщений. (reply to 176450)

Tomooney: Есть гайды такие? Хотя бы на индише, я не нагуглил. (reply to 176452)

Vokhma: Спасибо! (reply to 176452)

Egor: Всем привет!  Подскажите, пожалуйста, есть ли у Telegram Wallet дока по API ?

Vladimir: А у них есть API? (reply to 176457)

Vladimir: https://docs.wallet.tg/pay/#section/Changelog про это? (reply to 176457)

Egor: ну вот это судя по всему не официальная, также как и это: https://github.com/no-name-user-name/pyTelegramWalletApi (reply to 176459)

Артем: Это офф дока (reply to 176459)

Артем: Если нужно их закрытое API, то поищи openapi схемы, они где-то валяются у них

Minter: Там нужно пройти проверку и дадут доступ (reply to 176463)

Артем: Я проверки не проходил) Главное получить токен с вебаппа, а дальше пробоем нет (reply to 176464)

Minter: Хз. Я проходил (reply to 176465)

Артем: Ты про эквайринг что ли? (reply to 176466)

Minter: Ага (reply to 176467)

Egor: а куда идти за проверкой ? (reply to 176464)

Egor: Спасибо большое (reply to 176463)

Minter: В их поддержку, они все скажут (reply to 176469)

Minter: https://pay.wallet.tg/ (reply to 176469)

Svαtoωλ‎: А это для ноды, работающей в режиме лайтсервера, реально такие требования нужны? к примеру если диск меньше на половину, или ядер в 2 раза меньше на сервере

Андрей: Если просто нода, то ядер может быть меньше, пока нагрузка маленькая Диск можно хоть 128гб, главное следить что бы нода не забила весь диск, при повышении нагрузки диск будет заполняться быстрее (reply to 176474)

Iván: А для архивной ноды какие требования? Можно не целиком синкать, а с глубиной в год, допустим? (reply to 176476)

Svαtoωλ‎: Нода работающая в режиме лайтсервера. Не подойдет всё равно?  И каким образом можно следить что бы не забила)? (reply to 176476)

Danil: Систему алертов подключить какую-нибудь

Svαtoωλ‎: Intel Xeon E5-2430L v2 на сервере стоит такой проц. 6 ядер 12 потоков. На 10 меньше, боюсь не подойдет(

Svαtoωλ‎: Так что делать если место будет заполняться 👀 Тип не просто ж вырубить?) (reply to 176479)

Андрей: Не попробуешь не узнаешь (reply to 176480)

Seitaro: IOPS к диску и оперативка очень важны, иначе в моменты как сейчас будете безбожно отставать. 16 ядер - чуть менее важно, хотя ниже 12 ядер уже может быть критично (опять же в моменты нагрузки). Не уверен что на 128гб заработает даже если очень пристально следить за заполнением дисков, но с 256-512 уже жить можно (reply to 176474)

Svαtoωλ‎: оперативки хватает, диск пол тб., ядер вообще ух, мало...  Но тут ещё вопрос в том, что использовать его будут несколько человек, тоесть не публичный. Или так нельзя? (reply to 176483)

Андрей: Задать нужное время хранения блоков, пример для архивной ноды, хранить 10 лет: --state-ttl 315360000 --archive-ttl 315360000 --block-ttl 315360000 (reply to 176481)

Андрей: Можно, будет приватный LS, так и делают (reply to 176484)

Svαtoωλ‎: Архивная нода сильно прожорливая по месту на диске? (reply to 176485)

Андрей: https://archival-dump.ton.org/ 8ТБ без сжатия (reply to 176487)

Svαtoωλ‎: Не) не нужна архивная.  Я правильно понимаю что могу задать условно на полгода-год? Тип, оно будет докачивать нужные данные если они выходят за годовой предел, или как?

Андрей: Если запрашиваются данные которых нету, то будет отвечать что блок не найден В будущем думаю будет разные ЛС для разных шардов и разные архивные ноды для разных шардов и разных промежутков времени (reply to 176490)

Svαtoωλ‎: Ууу, плохо( Может можно выкачивать как то данные для определенного тон-адреса, или это бред)? (reply to 176491)

Андрей: Держать свое всегда сложнее чем пользоваться готовым, поэтому может быть стоит взглянуть на готовые сервисы индексаторов? Вроде они все достойные: dton, tonapi, toncenter (reply to 176492)

Svαtoωλ‎: готовыми сервисами уже не год пользуюсь, но хотелось бы чего-то своего) Ладно, понял что проблематично это всё, будем пробовать (reply to 176494)

Svαtoωλ‎: Кто держит свою ноду и годичную запись бч, кто может сказать по весу, сколько оно?

Андрей: Размер бд не константа, в зависимости от tps в это время размер может отличаться в десятки раз Не уверен что кто то держит ноду с архивом в год, но вы можете попробовать запустить такой сами Думаю в будущем это можно будет сделать намного легче чем сейчас, возможно даже автоматически (reply to 176496)

Svαtoωλ‎: нууу держать ноду без архива вроде не камильфо? Или ошибаюсь. К примеру если я захочу получить последние 100 транзакций своего/чьего-то кошелька (reply to 176497)

&rey: Рост TPS может всё съесть) (reply to 176497)

Jonny: Привет, подскажите можно ли заклеймить токен CATS в смарт-контракте? EQBadq9p12uC1KfSiPCAaoEvhpXPHj7hBWq-mqGntuwE2C1C Как это сделать?

Oleg: Кто хорошо разбирается в JS, чтобы улучшить @TONNotifyBot github.com/tonbase/ton-notify-bot?  Напишите @tonboss, обсудим.

Egor: В поддержке сказали, что у них нет другого API((( (reply to 176464)

IKke: привет, есть примеры как с контракта вызвать перевод жеттонов у юзера?

relder1: Ребята подскажите хостинг где есть виртуальная машина, не очень дорогой

Vladimir: Yandex Cloud (reply to 176510)

Vitaliy: Наверное не в тот чат, но все же. Года 3 назад зашел в тонкипере на тестовый сервер, посмотреть нфт. Вылетело с кошелька. Ввожу сид - пишет не корректная фраза. (Может быть никак не связанные между собой вещи). В корректности фразы уверен. Еще есть подозрение, что мог последовательность нарушить. Могу ли как-то подобрать кроме, как ручным перебором?

Denis: тонкипер который запущен 2.5 года назад и нфт которым 2 года: 👀

Torkusz: Чет дата большая А вообще попробуй версию кошелька может, но думаю ты не для поиска своего кошелька спрашиваешь 😁 (reply to 176512)

Vitaliy: Ну 2,5 , я же не сказал, что ровно три года назад. К чему ты это написал? (reply to 176513)

U.S. Grant: Всем привет. Подскажите, почему тонкипер не загружает метадату нфт? Тот же кошелек в тон спейс в телеграмме подгружает моментально

Vitaliy: Я писал здесь в прошлом году, проблема не решилась. но с датой да, перегнул по тон скану 27.07.2022) (reply to 176514)

Denis: потому что тонспейс использует другое апи для нфт.  там есть какие-то проблемы с индексацией нфт у которых мета и картинка лежат в ipfs.  но с разбегу не чинится а сейчас есть более приоритетные проблемы чем нфт на ipfs

relder1: Нет, не подходит, я с не в рф, мне нужно включать ВПН (reply to 176511)

GUBER: Какие проблемы в приоритете? (reply to 176518)

Vladimir: Сид — 24 слова, слов 2048. (reply to 176512)

Guwfa: ну подбор именно этой сидки ему вряд ли светит, но какие то кошельки да подберет (reply to 176521)

Vladimir: Тогда еще проще: digitalocean или amazon. (reply to 176519)

Vladimir: Я так... Чтобы вероятность посчитал. (reply to 176524)

Nikita: Всем привет! Кто-нибудь юзал STON.fi SDK для свопа? пытаюсь свопнуть TON в jUSDT но транза фейлится. Вот пример кода  const swapTxParams = await router.buildSwapJettonTxParams({         userWalletAddress: WALLET,         offerJettonAddress: "EQCM3B12QK1e4yZSf8GtBRT0aLMNyEsBc_DhVfRRtOEffLez",         offerAmount: new TonWeb.utils.BN('5000000000'), // 5 TON         askJettonAddress: "EQBynBO23ywHy_CgarY9NK9FTz0yDsG82PtcbSTQgGoXwiuA",         minAskAmount: new TonWeb.utils.BN(1000000),     });      await wallet.methods.transfer({         secretKey: keyPair.secretKey,         toAddress: ROUTER_REVISION_ADDRESS.V1,         amount: new TonWeb.utils.BN('5000000000'),         seqno: Number(await wallet.methods.seqno().call()),         payload: swapTxParams.payload,     }).send();  а вот зафейленная транза  https://tonviewer.com/transaction/1f76764ab1d4c935a6bb9898d04868dd133d3c43b0f8d8fa6c19e29a66a3b3bd  был бы очень благодарен за помощь или инфу

Denis: например отказоустойчивость апи и индексатор которы позволит адекватно показывать прогресс транзакций в условиях когда они проходят по минуте (reply to 176520)

Nikita: Если кто знает, либо знает того кто знает, за помощь готов закинуть пару тончиков, всем спасибо заранее 🙏 (reply to 176527)

first_name: как работает ton connect с кипером? отправляются http запросы?

no name: Подскажите, пожалуйста, как пользоваться этими методами и чем они отличаются?

Max | TonMap: ⚠️Кароче народ. Я заказал код у @MaxGurof, он его обещал сдать в пятницу прошлую. Не сдал. Кормит завтраками и игнорит.  Не возвращает предоплату. Уже который день жду.    Мошенник, берет предоплату и концы в воду. Будьте бдительны! 🤬

Denis: Ответами. Там разные типы возвращаются (reply to 176531)

Monster: У меня есть boc после транзакции в формате te...=  Подскажите пожалуйста, как мне получить информацию о транзакции по этому boc?

Кумир молодежи: Какую задачу ставил, если не секрет? (reply to 176532)

Max | TonMap: А какая разница. Написать решение как минтить более 200 нфт одной транзой.

Svαtoωλ‎: Ого как, а он мне писал седня по поводу платной настройки лайтсервера 😁 (reply to 176532)

— 2024-03-27 —

Long: Hi guys, can I ask some question by English here or there is another group?

Long: thanks

Владислав: Максимум что-то такое появляется "out_msgs" => [    0 => [     "msg_data" => [           "@type" => "msg.dataRaw"           "body" => "te6cckEBAQEAAgAAAEysuc0="           "init_state" => ""         ]    ] ] Но это не base 64 кодировка (reply to 176391)

Olya Nemo: Привет! Скажите, плиз, есть мультисиг- кошельки на TON?

RocketMan: https://tonkey.app/ (reply to 176561)

Olya Nemo: А можно чуть подробнее, хотя бы несколько фраз, как это работает, команда и  т.д.? (reply to 176562)

RocketMan: https://github.com/tonkey-app  Там Ридми с описанием  Дальше тыкаться уже только и пробовать) более-менее обычный мультисиг (reply to 176563)

Grigory: Всем привет, когда я запускаю const jettonMinter = new TonWeb.token.jetton.JettonMinter(tonweb.provider, {address: "<JETTON_MASTER_ADDRESS>"}); с docs, то он требует не адрес, JettonMinterOptions. Какая версия tonweb используется в официальной документации?

Maksim: а дайте адрес, посмотрю (reply to 176559)

Владислав: Адрес кошелька отправителя или получателя? (reply to 176569)

Maksim: отправителя (reply to 176570)

Владислав: UQAHBCQ0ICU4EvA1ZLSBc3RvPehk4MLv_RpdMBH6uDZyT8i2 (reply to 176571)

Maksim: вот же оно: https://toncenter.com/api/v2/getTransactions?address=UQAHBCQ0ICU4EvA1ZLSBc3RvPehk4MLv_RpdMBH6uDZyT8i2&limit=1&to_lt=0&archival=false

Владислав: Спасибо большое! (reply to 176573)

Игорь: Ребят. Вопрос по мини апп. Как в приложении вызвать выезжающее снизу окно?

Dmitry | backend4you.ton: https://t.me/twa_dev (reply to 176578)

wikig: Hello guys ! is there any way to use @ton/ton via html/js in front-ent ? Or is there any other js/class that can do beginCell() ?

wikig: I try using tonconnect to send transaction with payload . But it seems like i have to do body.toBoc().toString("base64")  , i notice the official docs import { beginCell } from '@ton/ton' . but i am using raw-html/js . how can i do the same thing to encode the text ? Thanks ! (reply to 176584)

EmirNonstop: Доброе утро!  Как верифицировать JETTON контракт?

Koka: Доброе утро, подскажите пожалуйста, какие сейчас существуют библиотеки для взаимодействия с TON и его жетонами на Python. Интересует именно подключение кошелька, проверка NFT лежащих на нем.

Сергей: Привет, подскажите пожалуйста, есть ли готовое решение в TON для одновременной отправки нескольких транзакций с одного кошелька по аналогии с ETH? Или только старая добрая очередь?

Семён: Привет, подскажите, можно ли в Tact (или Func) получить расширенные данные об отправителе? Например, сколько транзакций было отправлено с его кошелька, или last_transaction_id

Семён: Или prev_trans_hash/lt, как здесь (reply to 176599)

&rey: Вы имеете в виду больше 4? (reply to 176597)

&rey: Там особые кошельки нужны.

Сергей: Да, больше, если возможно, не могли бы вы дать ссылку на ресурс где можно было бы узнать подробнее по этой теме? (reply to 176602)

&rey: https://docs.ton.org/develop/smart-contracts/tutorials/multisig-js (reply to 176605)

Сергей: Благодарю 🙏 (reply to 176606)

Nikita: Всем привет, уже писал с похожей проблемой, разобрался как свопнуть ТОН в джеттон с помощью STON.fi SDK и tonweb, сейчас не получается сделать обратное) Очень нужна помощь, готов отблагодарить парой тончиков   const swapTxParams = await router.buildSwapJettonTxParams({         userWalletAddress: WALLET,         offerJettonAddress: "EQBynBO23ywHy_CgarY9NK9FTz0yDsG82PtcbSTQgGoXwiuA",         offerAmount: data.balance,         askJettonAddress: "EQCM3B12QK1e4yZSf8GtBRT0aLMNyEsBc_DhVfRRtOEffLez",         minAskAmount: new TonWeb.utils.BN(5000000000),     });      await wallet.methods.transfer({         secretKey: keyPair.secretKey,         toAddress: swapTxParams.to,         amount: swapTxParams.gasAmount,         seqno: Number(await wallet.methods.seqno().call()),         payload: swapTxParams.payload,     }).send();   here is failed tx:  https://tonviewer.com/transaction/757e8c16039b3cf7dc1508ad5f5e1610680f4d58f1c87c4f63f76beef42bf191

Mikhail: Всем привет, падает exit code 9 Cell underflow на таком действии:   let bet_id: Int = sha256(beginCell().storeAddress(msg.caller).storeInt(msg.event_id, 64).asSlice());

𒆜ě𝒔ₜ𝕖ß𝙖𝓝𒆜: Добрый день! 😉 Может кто в курсе? На распространенных EVM сетях можно было сделать клейм, апрув токенов и т.д. через взаимодействие со смарт контрактом. Грубо говоря через бсцскан или полигонскан. В тоне есть такая возможность? На тонскан что-то не нашел.

&rey: Нет, здесь такой уязвимости нет. (reply to 176627)

𒆜ě𝒔ₜ𝕖ß𝙖𝓝𒆜: Понял, спасибо! А почему уязвимость?🤔 Просто вчера многие не могли на площадке рафф заклеймить свои токены. Вот я и подумал что может можно напрямую клейм сделать! (reply to 176629)

&rey: В эфире есть проблемы, что когда взаимодействуете с одним контрактом, это может нетривиально влиять на другие (вызываете эирдроп от мошенников, а он устанавливает себе approve на токены). (reply to 176630)

&rey: Клейм токенов вы можете повторить и без сайта (если этим занимается контракт, а не бэкенд), но надо знать TL-B сообщения.

Max | TonMap: Народ, можете тыкнуть в документацию, как в моем реакт апп вызывать методы контракта? Как вообще это делается. Куда контракт закинуть и тп. Спасибо

𒆜ě𝒔ₜ𝕖ß𝙖𝓝𒆜: Спасибо за информацию!!!👍🤝 (reply to 176633)

&rey: https://docs.ton.org/develop/get-started-with-ton#-connect-to-ton (reply to 176634)

𒆜ě𝒔ₜ𝕖ß𝙖𝓝𒆜: Получается в тоне я могу спокойно подключать свой кошелек к любому сервису? И не беспокоиться что мои средства могут увести??? (reply to 176633)

&rey: Да. Он максимум может заспамить вам приложение кошелька. (reply to 176638)

&rey: Осторожнее надо быть с плагинами, но сейчас поддерживающих их приложений просто не найти.

&rey: *плюс при подключении подписывается единожды хеш, к чему вы подключаетесь плюс что это TON Connect. Переводов таким образом не подпишется, но надо проверять, что ссылка показывается какая надо — иначе можете подписать сервису-злоумышленнику вход на бэкенд другого сервиса. (reply to 176639)

𒆜ě𝒔ₜ𝕖ß𝙖𝓝𒆜: Благодарю за разъяснение!!! Новое для себя узнал! )) (reply to 176641)

Олександр: Как считать string payload?

Koka: ? (reply to 176592)

🎐*<@Maxim: привет, когда я загружаю файл через  ipfs https://api.pinata.cloud/pinning/pinFileToIPFS то получаю {'IpfsHash': 'QmQwF2s7KYZk18TtfyrbVgKjini9p9yWWTmri9SZRiPCqY', 'PinSize': 287201, 'Timestamp': '2024-03-27T13:19:16.257Z', 'isDuplicate': True}, то есть только хэш, а везде в примерах про NFT после хэша идет имя файла , например, /0.png. Как мне загружать файла с расширением на конце?

EmirNonstop: Что я могу использовать вместо LiteBalancer.from_mainnet_config(1)?

&rey: /report (reply to 176660)

Павел: Здравствуйте!  Пытаюсь найти транзакцию, как в указанном примере ☝️, но по полученному hash ничего не находит. (reply to 161468)

Павел: Должна быть) (reply to 176670)

Иван Гречка: Добрый вечер, подскажите пожалуйста, существует ли софт для генерации красивых комбинаций цифр и букв кошелей на тоне? Знаю есть для эфира такая штука, но на тоне не видел

Иван Гречка: Спасибо большое! Я уже думал не найду!) (reply to 176674)

Иван Гречка: Благодарю! (reply to 176677)

Павел: Ну я же её нахожу через тонвьювер, если просматриваю исходящие транзакции из своего кошелька.  А тот boc/hash который возвращает Tonconnect - не находит. (reply to 176673)

Dmitry: Привет. А знает кто, почему Get Gems не кладёт ничего в метадату нфт? И не даёт этого сделать при создании. Я хочу создать нфт, но она создаётся на гетгемсе с пустой метадатой. И поэтому нигде в кошельках или эксплорерах не отображается картинка, название и дескрипшн

:): Стоп (reply to 176685)

Dmitry: Вручную что ли только минтить, чтобы норм метадата была

&rey: *если чат подчиняется тем же правилам, что и русский TON Community (https://t.me/toncoin_rus_chat/184926), то нельзя — присылать в чат чеки на TON с суммой ниже 0,1 TON на 1 человека. (reply to 176687)

Flyheck: я верно понимаю, что если я хочу добавить свой домен первого уровня, то нужно чтобы PR одобрили именно эти 13 человек?

&rey: Нет. (reply to 176712)

&rey: Если вы хотите добавить свой домен первого уровня, вам нужно одобрение 2/3 из этих людей. https://tonscan.org/validators

&rey: Тогда они смогут обновить в конфигурации TON контракт, который занимается как раз доменами.

Flyheck: а как закинуть им это на голосование? Оно же должно попасть в код, как .t.me (reply to 176714)

&rey: Ну, резолвер вы можете задеплоить и сами, и протестировать. (reply to 176716)

&rey: Единственное что — он не будет корневым в сети до прохождения голосования.

Flyheck: Допустим, я задеплоил резолвер. Как стартовать голосование, чтобы он стал корневым, в случае его одобрения?

Flyheck: или это может сделать только один из валидаторов?

&rey: Вроде кто угодно, но пока вы с валидаторами не свяжетесь, там вряд ли даже рассматривать будут.

&rey: А когда свяжетесь, проще уж им подготовить и отправить голосование.

Flyheck: Т.е.  у них прям что-то типа конфы должно быть, где они занимаются этим?:D

NMI: https://t.me/tonstatus (reply to 176723)

Flyheck: Спасибо)

Flyheck: но по итогу, это же должно добавиться в репу тона. Ибо они должны спуливать изменения с нее периодически

NMI: делайте что-то типа *.dolboeb.t.me )))

Flyheck: та ну костыль) Если власть в руках народа, то народ может и доменов первого уровня понакидать (reply to 176728)

NMI: народ с 600к ТОН+ ))) (reply to 176729)

Flyheck: Ага) (reply to 176731)

Flyheck: Спасибо большое, в целом, теперь еще лучше понимаю, как это все работает (reply to 176722)

Олександр: . (reply to 176647)

🎐*<@Maxim: 🎃 Привет, ребят! Я же правильно понял, что запустив:  TON HTTP API (в нем по ум. параметр TON_API_TONLIB_PARALLEL_REQUESTS_PER_LITESERVER=50), я смог увеличить  количество запросов в 5 раз по сравнению с полученным ключом от   @tonapibot (в котором написано: You are limited to 10 requests per second and 1 API key per network)?  ?

Павел: Друзья!  Может быть всё таки у кого-то есть рабочий пример (на любом яп), того как из полученного boc от tonConnect.sendTransaction найти транзакцию (тонапи или тонцентр)?  У меня все идеи уже закончились) (reply to 176669)

Maria: Добрый день. Blueprint запомнил мой кошелек, и не позволяет ввести новый. (Шаг с выбором кошелька пропускает). Подскажите, пожалуйста, Как его сменить?)  PS C:\Users\User\Desktop\develop TON\2 TON Smart Contracts. First contract\FirstLesson> npx blueprint run Using file: deployFirstContract ? Which network do you want to use? testnet ? Which wallet are you using? TON Connect compatible mobile wallet (example: Tonkeeper) Connected to wallet at address: EQBvyhyDnMdnBxvIMNoFwJGS0AeyBCnIOKbaKBUm-2i-IFfo Sending transaction. Approve in your wallet...[TON_CONNECT_SDK] Send http-bridge request: {   method: 'sendTransaction',

Павел: Стереть папку temp (reply to 176746)

Marat: Ключ из @tonapibot применим к публичному инстансу - toncenter.com. На своем инстансе нет ограничений по rps.  TON_API_TONLIB_PARALLEL_REQUESTS_PER_LITESERVER это внутренний параметр,  он нужен, чтобы вы случайно не заддосили свой лайтсервер. (reply to 176743)

Maria: Спасибо (reply to 176747)

Shon: """pip install pytonapi pytoniq_core""" import asyncio import pprint  from pytonapi import AsyncTonapi from pytoniq_core import Builder  def get_hash(data: any) -> str:     builder = Builder.from_boc(data)     return [b.hash.hex() for b in builder][0]  async def main():     tonapi = AsyncTonapi("apy key")     event = await tonapi.events.get_event(get_hash("boc string"))     pprint(event.dict())   if __name__ == "__main__":     asyncio.run(main()) (reply to 176745)

Denis: да. но есть ньюанс :) (reply to 176743)

🎐*<@Maxim: Какой? (reply to 176754)

GUBER: Какой код заказывали? Его надо забанить тут. Нас тоже обманул… @MaxGurof (reply to 176532)

GUBER: Кто модератор чата?

Tim: Обязательно забанят, а завтра он вас с нового никнейма обманет

Tim: посчитайте, сколько он телеграм аккаунтов может купить на деньги, которые вы ему перевели

Олександр: . (reply to 176647)

Max | TonMap: Да вот тоже так думаю :( (reply to 176758)

Max | TonMap: Функция для обхода ограничения в 200 токенов минт. (reply to 176756)

Андрей: Вопрос не полный, соответственно никто не сможет ответить Вы должны понимать по какой схеме вы хотите читать ячейку (reply to 176647)

Олександр: T-lb scheme Я пытаюсь уловить boc nft transfer И хочу прочитать там new owner (reply to 176763)

Андрей: Что по схеме - это понятно По какой именно схеме (reply to 176764)

Mark: #вакансия Tech Lead  tl;dr - Tech Lead, 5+ лет опыта, en, ru, удаленно, свободный график, 2000$ + Token Allocation   Gemz Trade - #1 Trading App на TON в поиске Лид Разработчика   Кого мы ищем: 🔸 Опыт 5+ лет в Программировании. 1+ год в FunC 🔸 Full Stack(TS, Go, Python, FunC) 🔸 Хорошие коммуникативные навыки 🔸 Уровень английского - B1+ 🔸 Способность работать как самостоятельно, так и в команде  Что вы получаете: ❤️2000$ + токен аллокация(детали в лс) ❤️Гибкий график ❤️Удаленная работа ❤️Крутая команда и огромные возможности для роста  Пишите в лс @marktraid c прикрепленным CV и кратким описанием своего опыта

Павел: Спасибо, но тоже не находит.  Если я конечно правильно сопоставил Builder.from_boc -> Cell.fromBase64 (reply to 176751)

Monster: Всем привет, подскажите пожалуйста, как мне получить данные о транзакции, после того как я получил её boc?

Flyheck: в каком формате в .env указывать версию кошелька для blueprint?  (при работе через сид)

Павел: Попробуйте так https://t.me/tondev/176669  Но у меня не получается. Если получится- расскажите потом) (reply to 176772)

Merman: Добрый вечер, получилось у кого закрепить миниаппсы?

Vladimir: 1. Тут чат про TON. 2. Вы про expand()? (reply to 176781)

Merman: Нет, чтобы он не изменял своё состояние при скроллинге вниз

Merman: Извиняюсь

Merman: Ошибся

Merman: Столько чатов

Vladimir: Бесконечный скролл + position fixed. 🫥 (reply to 176783)

Merman: Оу сенкс

Btonize BiO: Кто разбирается, с технической точки зрения что надо сделать кор команде тона чтобы повысить производительность сети? ну нереально сейчас пользоваться просто. А это только малая часть юзеров пришла в тон. Дальнейшее развитие туманно с такой стабильностью работы

Vladimir: А что не так? (reply to 176789)

Btonize BiO: свапы по полчаса идут, на любой более менее хайповый эвент сеть просто ложится отдыхать, с жетоннами вообще непонятно, биржи кое как их интегрируют себе, что затрудняет листинги. Про ноткоин который просто убьет тон на тге вообще молчу (reply to 176790)

Vladimir: А у Вас есть статистика или что-то, что можно объективно оценить и сравнить? (reply to 176792)

Flyheck: та я думаю все где-то покупали/продавали Nft. Или свапали токены. Финальные интерфейсы действительно тормознутые, и все должны понимать, о чем речь

DVA: Посмотрел проекты студии - сразу диз (reply to 176791)

Btonize BiO: а вы не видите разве что с сетью было к примеру 3 месяца назад и что с ней сейчас? колосальная разница даже на глаз. И где миллиарды tps обещанные не пойму (reply to 176793)

Flyheck: так мб пролаг не из-за скорости блокчейна, а из-за api? или мб со стороны клиента бутылочное горлышко (reply to 176796)

Vladimir: @subden что скажите? (reply to 176796)

Dmitry | backend4you.ton: в смысле "где миллиарды"? а вы сколько tps генерите? (reply to 176796)

Denis: то что свапы идут больше минуты (а они реально так идут - https://tonviewer.com/transaction/f7073efbe8cae2fb89e9f4ee502d7029f8468a562e8e605c34938cb078100002 вот рандомный свап на стонфи. между первой транзакций и последней в цепочке вызово 99 секунд+накладные расходы на отправку первичного сообщения и индексацию) это не проблема апи. это текущая реальность блокчейна.  давайте поясню подробнее. плата за бесконечное масштабирование то что операция это взаимодействие множества шардированых контрактов. тоесть в любом случае транзакции в тоне будут занимать какое-то время. моментальных свапов ввиде ончейн транзакций не будет.  дальше можно эту ситуацию улучшать разными способами: 1. уровень UI. надо показывать пользователю прогресс его транзакции. а не как сейчас как отправил и потом спустя минуту внезапно прошло. мы над этим работаем. 2. это оптимизации блокчейна чтобы блоки быстрее обменивались сообщениями. там требуется довольно тонкий тюнинг порядка генерации блоков, который завязан сперва на оптимизацию скорости генерации для предсказуемости этой самой генерации. коре тим работает над этим и прогресс очень хороший, хоть пока и не виден юзерам.  3. это создание платёжных каналов и разгрузки части операций туда и вот там как раз возможно моментальное прохождение транзакций. работы над этим тоже ведутся.

User<5062827846>: tsm bot не воркает чтоли?

Denis: обещали не миллиарды tps. миллиарды tps и не нужны. обещали 100к тпс и это вообще более чем достаточно для огромной финансовой системы уровня процесинга целой страны. (reply to 176796)

Denis: тоесть я думаю к лету мы придем к тому что свап типа как я показал сократится по времени до пары десятков секунд. простая отправка между юзерами из разных шардов до 4-8 секунд.  это при нагруженной сети. при этом в гуе будет более понятный и приятный прогрессбарчик и понятно что вот оно выполнилось на 10%, 50%, 100%. (reply to 176803)

Tim: А тонапи кстати прямо сейчас уже не позволяет такой юи сделать? Он же отдает вроде частично выполненные цепочки? (reply to 176806)

Denis: там есть проблемки. но да. мы довольно близки к этому

Merman: Крутые

Dmitry: ". Лишь немногие дошли до конца, были кидалова, кто-то сдавался, кто-то хотел использовать наши мозги и наработки."  расскажите плз подробнее про ето

Dmitry: вы зазываете или что?)

Dmitry: или просто классные?)

Vladimir: Должно завершаться чем-то, вроде: "А что ты сделал для TON хип-хопа в свои годы?". (reply to 176813)

Flyheck: Супер простой контракт. Но тесты отрабатывают, а задеплоенная версия почему-то нет. Из-за чего такое может быть?)

Flyheck: https://testnet.tonscan.org/address/EQCk7gaFT0j9huuRprAd00vf7j_7a3mG8GZCcMFzYpublxzH#transactions

Flyheck: возможно, задержки какие-то. Сейчас counter Обновился до 5. Но вызов был на оба receive. На первый с сообщением "increment", на второй со значением 5. Засчитался только второй

Oleg Rumyantsev: Добрый вечер, подскажите пожалуйста где можно найти доку по смарт контрактам в TON. Хочу сделать свой токен на TON. Можете пожалуйста подсказать доку может быть с примерами, спасибо

Flyheck: Эту тразу  засчитало

Flyheck: А эту не засчитало

Flyheck: отличие только в сумме ведь. Т.е. на саму операцию инкремента не хватило газа? (reply to 176824)

Denis: https://testnet.tonviewer.com/transaction/2d0bfb24714bb1d3b0122add1976c67284d030aa405af4ad799f253c1e2b8198 (reply to 176829)

Flyheck: Спасибо! (reply to 176831)

J: сколько живет соединение через ton connect?

— 2024-03-28 —

Tim: Всегда (reply to 176835)

Alex: вот курс от степика по Ton с переводом на Русский язык https://t.me/TONBlockchainCourse (reply to 176827)

Владислав: Всем привет, наше приложение написано на php и нормальных sdk у нас нет, я смотрел и пробовал, но нам для целей надо генерить пэйлоад с инфой, есть какой-то способ кроме как ставит ноду и на ней писать, код то там написан уже, просто не хочется этот вариант использоваться, вариант написать генерацию самому не нужен, слишком долго писать, проще готовое что-то если есть ткнуть

Roman: https://github.com/olifanton/ton (reply to 176851)

Владислав: Честно, если бы мне не ответил контрибутор библиотеки, я бы не стал залазить в примеры, спасибо что заставили посмотреть примеры (reply to 176852)

Антон: Всем привет! У всех нормально тестнет сегодня работает?

Антон: чет транзакции не проходят(

Антон: или проходят с огромной зарежкой

Bit Hamster: Друзья, вем привет.  Помогите пожалуйста советом, а то я что-то совсем непонимаю происходящего.   Отправляю транзакцию используя Tonweb SDK (JS)  Вроде все сделано по инструкции, но почему-то раз в несколько запусков формируется пустая транзакция.   Вот пример две последние транзы на этом адресе:  https://tonscan.org/address/UQCloxSACHhv7QYQnKBrA6f2XDNiL5qfwbIAI-3cw2WwLUrE  Хотя отправлены транзы абсолютно одинаково, просто с интервалом в пару минут.

Kerosene Inc: Всем привет, парни помогите, хочу создать свой жетон, не когда раньше этим не занимался, мож гайд есть какой. Заранее благодарен.

Dmitry | backend4you.ton: https://minter.ton.org/ (reply to 176868)

Андрей: Были какие то стресс тесты (reply to 176861)

User<5062827846>: почему не работает?

Олександр: T-lb scheme Я пытаюсь уловить boc nft transfer И хочу прочитать там new owner (reply to 176647)

Dmitry | backend4you.ton: https://github.com/ton-blockchain/TEPs/blob/master/text/0062-nft-standard.md#internal-message-handlers либо вам надо ловить "команду" на перевод (transfer#5fcc3d14), либо уведомление о совершенном переводе (ownership_assigned#05138d91). Обе схемы там описаны, так что можно прочитать ВОС (reply to 176878)

Олександр: transfer#5fcc3d14 query_id:uint64 new_owner:MsgAddress response_destination:MsgAddress custom_payload:(Maybe ^Cell) forward_amount:(VarUInteger 16) forward_payload:(Either Cell ^Cell) = InternalMsgBody;  Опкод - 32 байта, квери 64? Не подскажешь как понять сколько нужно считывать байтов. Или самому нужно высчитать (reply to 176882)

Dmitry | backend4you.ton: https://docs.ton.org/develop/data-formats/tl-b-language (reply to 176883)

Assi: Ку всем.  А можно создать токен который невозможно отправлять никому кроме владельца или же несколько кошельков? звучит как спам токен но очень интересно есть ли такой функционал у токенов

sd: звучит как ханипот

Melonges: Ну уж очень интересно, друг спрашивал

Flyheck: Как можно применить такой функционал? Тип вайтлиста? (reply to 176892)

Flyheck: А возможно ли создать смарт-контракт для nft, который бы позволил принять сообщение этой nft-шкой, и чтобы nft после этого сообщения она перекинулась на другой кошелек? Пример использования: -у меня есть Nft которая является ключем доступа к какому-то сервису. -я хочу дать погонять на неопределенный срок, безвозмездно, этот сервис другу -отправляю nft ему -он его юзает -спустя время отправляю транзу на nft, чтобы вернуть эту самую nft -nft возвращается владельцу

Dmitry: Здравствуйте, может кто то подсказать что такое brilliant api и где взять url для него?

Кумир молодежи: Ребята привет. Кто может запарсить блокчейн и сделать эйрдроп? Сколько это дело стоит, бюджетно))

Кумир молодежи: Друг, обдумывал подобную идею. (reply to 176897)

Кумир молодежи: Нужен смартконтракт, в котором будет функция отправки NFT на адрес деплоера смартконтракта по истечению определенного срока.

Кумир молодежи: Возможно глупость пишу... я человек с улицы, ваще не шарю))

Flyheck: Я ж тебе  в личку писал) (reply to 176912)

Кумир молодежи: Соответственно определнная сумма на комсу залочена в смартконтракте.

Flyheck: Та можно даже не лочить. Прост, если на смарт-контракте ничего нет, то nft Будет оставаться неподвижной, до тех пор, пока на смарт-контракт что-то не закинут (reply to 176917)

G E N N A D Y: Не подскажите, тут на Unity кто то делал что-то?

G E N N A D Y: Поиск по теме ничего не дал толком

Flyheck: Тут ведь вопросы по TON, а что на фронте - уже не имеет значения. Можно связать Unity фронт с беком, который будет уже дергать ton api, если не получится напрямую с фронта (reply to 176924)

&rey: Да, может такой скам быть. (reply to 176923)

Vladimir: Интересная задумка. (reply to 176923)

Max | TonMap: Хай народ!  Подскажите, как мне с нуля встроить покупку (вызов метода контракта покупки)  в React приложении?  У меня такой код, но он работает только в приложении с контрактом, блюпринтом, и врапперами.  А у меня в другом приложении только тонконнект. Как можно только с ним вызвать метод покупки, подписать, и собственно совершить действо?  import { Seller } from '../wrappers/Seller';  export async function run(provider: NetworkProvider) {     const sellerAddress = '';     const seller = provider.open(Seller.createFromAddress(Address.parse(sellerAddress)));     const items = [1,2,3];     const itemCountBigInt = BigInt(items.length);     const totalPrice = toNano('0.04') * itemCountBigInt + toNano('0.05');     await seller.sendPurchase(provider.sender(), totalPrice, {         items,      }); }

TO-TO-23: import { Seller } from '../wrappers/Seller';  export async function run(provider: NetworkProvider) {     const sellerAddress = '';     const seller = provider.open(Seller.createFromAddress(Address.parse(sellerAddress)));     const items = [1,2,3];     const itemCountBigInt = BigInt(items.length);     const totalPrice = toNano('0.04') * itemCountBigInt + toNano('0.05');     await seller.sendPurchase(provider.sender(), totalPrice, {         items,      }); }

User<6329807391>: Всем привет, я ищу разработчика который сделает бота, где человек подключает кошелек с помощью TonConnect, после кошелек проверяется на наличие определенного nft, дальше если есть nft то человеку выдается линк в группу на одно использования, на этом его функционал заканчивается.   Если вы можете реальзовать это отпишите в лс, или если вы знаете как это сделать без TonConnect напишите.

&rey: https://github.com/AndreyBurnosov/Access_control_bot (reply to 176957)

Flyheck: шо там, по челленджу нет инфы?

N. T.: Hey, Im writing smartcontract staking on Ton, user deposit Ton to my contratct and receipt my token. I want to save a stake infomation of user (amount, time,…). So how can I implement this and How can i save stake infomation of user. Please, help me.

Alex: ребят случайно связал блюпринт с основным а не тестовым кошельком , забыл как повторно выбить qr ибо теперь он автоматически подключается к мейн кошельку

Flyheck: удалить папку temp (reply to 176975)

Alex: ооо от души

first_name: подскажите, а на что влияет trust_level в LiteBalancer-е pytoniq?

Alex: подскажи еще пожалуйста чем заменить ton-core и ton-community/blueprint  в коде: import { toNano } from 'ton-core';  import { Main } from '../wrappers/Main';  import { compile, NetworkProvider } from '@ton-community/blueprint'; (reply to 176976)

Alex: я так понимаю оно устарело просто

Alex: оно выдает "Cannot find module 'ton-core' or its corresponding type declarations."

Alex: надо было заменить на @ton/core и @ton/blueprint

Minter: Ошибка говорит что нет данного модуля (reply to 176981)

Alex: эт то понятно

Alex: я пытался найтич ем заменить

Alex: ибо во всех гайдах пишут именно это

Alex: vscode помог (reply to 176982)

Vitaliy: А можно ли как-то перебрать последовательность сидфразы тон автоматизированно? Есть подозрение что перепутал последовательность какого-то слова. Скорее всего одного, но не знаю какого.

Vladimir: Вручную. (reply to 176988)

🎐*<@Maxim: 🌙 привет, я же правильно понимаю, что нельзя под одной .store_ref() писать другую ячейку .store_ref() ? если убрать .store_ref(body2) - то все работает:          var body1 = begin_cell()             .store_uint(0, 32)             .store_slice("1")             .end_cell();         var body2 = begin_cell()             .store_uint(0, 32)             .store_slice("2")             .end_cell();          var msg = begin_cell()             .store_uint(0x10, 6)             .store_slice(sender_address)             .store_grams(0)             .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1)             .store_uint(1, 1)             .store_ref(body1)             .store_ref(body2)             .end_cell();          send_raw_message(msg, 64);   Или можно ?

LCN: Ага, так и поверили 😁 (reply to 176988)

Andrew: в целом можно, но в контексте сообщения может быть только одно body (reply to 176990)

­😇: Да (reply to 176988)

User: Можно скрипт сделать, он будет проверять сид по балансу (reply to 176988)

­😇: Уже тут вылаживали на go. Главное чтоб 23 слова верных были (reply to 176994)

Svαtoωλ‎: А где можно купить доступ к платным лайтсерверам)?

Svαtoωλ‎: Нуу есть приватные платные лайты (reply to 177002)

Svαtoωλ‎: Они стабильнее , так как нагрузка на порядок меньше у них

Svαtoωλ‎: Стабильность 👀

Vlad: Возможно, тупой вопрос, но я спрошу. Это про Ton Connect и Kotlin.  Задача: авторизоваться по кошельку и получить от моего сервера токен.   Проверка пруфа на сервере есть. Генерация пейлоада есть. Все доки прочитал по теме, но там всё через js SDK, в основном, а как именно ручками это сделать?  Я так понял, что моя задача сейчас это сгенерировать ссылку-запрос на подпись к кошельку.  Как мне её создать, какая у неё схема?

Vlad: А TonConsole? (reply to 177001)

Vlad: Так там есть методы lite server, у тонкипера он свой же

Vlad: Я по этому поводу уже весь мозг сломал, но нигде внятного объяснения/туториала не нашёл. Переписывать весь js SDK на Kotlin желания нет вообще (reply to 177008)

Denis: Вот это поворот. Мы даже некоторые методы которые помнчены как лайтсервера делаем не через них. (reply to 177010)

Denis: Есть @liteserver_bot Это приватные платные лайтсервера. Они стабильнее публичных. (reply to 177000)

Svαtoωλ‎: А, ого 😅 (reply to 177017)

Denis: https://tonstat.us

Svαtoωλ‎: Емае) (reply to 177020)

Svαtoωλ‎: Публичные лайтсервер все красные 😅

— 2024-03-29 —

VIKTOR: Он задерживается, если ты про tact. (reply to 176964)

VIKTOR: https://t.me/pythonnton Спроси тут (reply to 176978)

STXI: Доброе утро, товарищи. Уже около года хожу вокруг тона и облизываюсь, сейчас же наступил тот момент, когда уже ощущаю, что созрел. Подскажите, пожалуйста, из своего личного опыта, возможно есть какие-то ресурсы по тону, которые вы бы выделили на фоне других и настоятельно порекомендовали с них начать(понимаю, что лучше документации ничего нет) Также на будущее подскажите как с трудоустройством, есть ли спрос и достаточно ли вакансий(также интересует количество времени потраченное вами до трудоустройства) И в каком положении по вашему мнению сейчас рынок, увеличился ли спрос на тон девов с новым "хайпом" крипты?

❤️🐾 🏰 Tower: https://docs.ton.org/ (reply to 177060)

Zaphod: Как по мне, рынок перенасыщен блокчейн-девами, из вакансий по тону разве что стартапы какие-то (reply to 177060)

Vlad: Только не в ton)) (reply to 177062)

Владимир: Как в анекдоте, что "на рынке два дурака, один продаёт, другой покупает". Применительно к разработке, то каждый и Заказчик и Исполнитель стараются наколоть друг друга - такое вот актуальное состояние. (reply to 177060)

STXI: В целом какой спрос на тон девов? (reply to 177077)

Владимир: Околонулевой (reply to 177078)

Vladimir: кажется околоотсутствующий, нужно свои проекты пилить или искать/собирать команду самостоятельно (reply to 177078)

STXI: Есть опыт с евм и солидити и осталось впечатление что раз в 3 года мы собираемся на праздник жизни и перекладываем деньги из одних рук в другие, позабыв, что такое же было несколько лет назад, в тоне же вижу перспективу ввиду наличия собственной платформы и большого количества юзеров, ну и из мессенджеров более телеграмма ничем не пользуюсь

Zaphod: Важный момент - большое количество малограмотных юзеров, отсюда и ажиотаж вокруг NFT, который на других чейнах прошел пару лет назад (reply to 177082)

Max | TonMap: Народ. Как проще всего сейчас создать тестнет кошелек и зайти в него?   Вбивать слова вручную в тонкипере - такое себе.  Спасибо.

Андрей: wallet.ton.org/?testnet=true (reply to 177092)

Flyheck: Народ, можете каких-то доков накидать по работе с nft и жетонами с tact?

❤️🐾 🏰 Tower: https://github.com/tact-lang/tact-template (reply to 177095)

Flyheck: Возможно линка не та? Там ведь нет, ни nft, ни жетонов (reply to 177096)

❤️🐾 🏰 Tower: Сорян (reply to 177097)

Lex: Приветствую! Есть живые исполнители? Нужен совет возможно/невозможно сделать, где найти исполнителя по NFT. Прошу в личку

Ihor: Привет! Как можно расшифровать префикс публичного ключа и понять что в нём?

Ди🦴: С чего начать мужики 😂😂

Beka: с программирования? 🤔😁 (reply to 177117)

Ди🦴: (); (reply to 177118)

Zxc: Как понять программирование?

𝐊𝐫𝐢𝐩𝐬𝐚ᴷʳᶦᵖˢ: В Ton? (reply to 177117)

K: Всех приветствую. Пытаюсь разобраться с тем, как залить тысячи нфт на гетгемс. Есть несколько тысяч картинок с метаданными в json для каждой, но в доках есть только инструкция как поштучно руками заливать и ссылка на гитхаб с примерами конктрактов, где без ста грамм не разберешься. Добрые люди, дайте совет, где как что смотреть и как все таки заминтить кучу нфт. Спасибо!

Владимир: Так же как и математику (reply to 177120)

Zxc: То есть сильно задумываться не нужно, а просто оперировать? (reply to 177123)

Ди🦴: Ну вообще как разобраться во всем этом (reply to 177121)

Владимир: В математике в основе лежит логика, как из базовых понятий выводить всё что угодно. В программировании аналогично. (reply to 177124)

Zxc: Ну гуманирию все это возможно понять? (reply to 177126)

𝐊𝐫𝐢𝐩𝐬𝐚ᴷʳᶦᵖˢ: Смотри. Краткий экскурс. Для начала изучи что это такое. Тон, сам по себе, может забываться блокчейном но им не является. Поэтому посмотри разные интервью и разборы. Дальше тебе лучше поучиться кодить, и желательно на JavaScript. На Ютубе есть целые курсы посвященные TonConnect, TonCore и TonSDK Дальше все от твоего воображения. Впринципе в тоне разберёшься, и не забывай читать документацию на официальном сайте. (reply to 177125)

𝐊𝐫𝐢𝐩𝐬𝐚ᴷʳᶦᵖˢ: Впринципе всё

Beka: если этот гуманирий умеет логически мыслить, то без проблем должно быть 🤔😁🤷🏻‍♂️ (reply to 177127)

Zxc: Ребят, читать чужой код всегда сложно?

Beka: зависит от того как код написан (reply to 177131)

Zxc: Ну массивный, с функциями и пр (reply to 177132)

Beka: код это как инструкция, если инструкция хорошо написана, то легко читается и понимается, если же всё в разброс, обрывисто и тд тп, то результат соответственный

Владимир: Читать просто. Понимать сложно. (reply to 177131)

Zxc: С ума сойти можно))) (reply to 177135)

Zaphod: Пару лет потратишь на javascript, потом и к тону можно приступать)

Zxc: Без js реально? (reply to 177137)

Beka: Welcome to the club buddy 😏😆 (reply to 177136)

Владимир: У вас вопросы настолько абстрактные, что кроме как похохмить над ними, по другому ответить не получится. (reply to 177136)

Beka: ну смотрите:  дом из дерева тоже можно построить имея только топор, но результатов долго будете добиваться,  но если  у вас есть полноценный набор инструментов, которыми вы имеете хорошо пользоваться, то прогресс намного быстрее пойдёт, не так ли? (reply to 177138)

&rey: Конечно! Программирование — про обработку информации. Плюс откуда она поступает и куда уходит. (и т.д., что не очень подходит по теме для чата для помощи разработчикам) (reply to 177127)

Asher: Для понимания TON можно смотреть сюда - https://www.youtube.com/@WikiMar ну или записывайтесь в онлайн школу ))) tondevstudy.io тем более, что там скидки для жителей Грузии (reply to 177123)

Zxc: Спасибо за наглядное сравнение (reply to 177142)

Zxc: Надо врубиться) (reply to 177143)

F: В чате разработчиков расцениваю как троллинг и оффтоп (reply to 177120)

Vlad: Help, товарищи (reply to 177008)

Andrey: Запушил некоторые наработки по ton-connect, но оно еще не готово, возможно будет полезно:  https://github.com/ton-community/ton-kotlin/tree/ton-connect (reply to 177008)

Monster: Привет, кто знает, как можно сразу получить большое кол-во тон в тестнете? Чтобы не через бота по 5 тон, а сразу больше 1000. Такое возможно?

Denis: tonconsole.com (reply to 177163)

Monster: Но только что-то не могу найти где это можно сделать? (reply to 177164)

Monster: Спасибо

Tim: Вам может и не нужен тестнет, если вы столько тон прокрутить хотите, начните с mylocalton (reply to 177167)

Monster: Что за mylocalton? (reply to 177169)

Tim: ну гугл же есть (reply to 177170)

Vsevolod: https://jsonformatter.org/json-pretty-print (reply to 177173)

Dung: Could anyone help me how can I interact with mint function of smart contract via client using python or typescript?

Dung: Anyone could help? (reply to 177176)

User<6365803117>: Привет всем, есть команды которые игры разрабатывают? напишите в лс пж

Max | TonMap: Товарищи, сталкивался кто с ошибкой  Uncaught TypeError: Failed to resolve module specifier "ton-crypto". Relative references must start with either "/", "./", or "../".  ? Я в реакт приложении фронта делаю импорт  import { Address, beginCell, SendMode, toNano } from '@ton/core'; и вылетает такая трабла в проде.

Ihor: Есть стандарт формирования префикса для публичного ключа?

&rey: Какого ещё префикса? (reply to 177197)

&rey: Проапрейдите все модули и попробуйте снова. (reply to 177196)

Ihor: Человек прислал свой паблик ключ но он длиннее чем из get_public_key() метода, при этом явно совпадает почти весь хеш (reply to 177199)

&rey: 128 символов вместо 64? (reply to 177202)

&rey: Если да, то он и приватный прислал тоже.

Ihor: 64 + 16 префикс

Denis: а префикс  начинаетеся на b5ee9?

Ihor: На MC (reply to 177206)

Andrey: Очевидно что у вас он в base64 (reply to 177209)

Ihor: Да, в hex начинается на 302а

Ihor: Я пытаюсь его расдекодить как-то чтобы такое же сделать

Vokhma: У меня есть фронтэнд на NodeJS, TS и Vite. Когда я пытаюсь подключить eversdk (tonclient) получаю ошибку. Как это исправить?  X [ERROR] No loader is configured for ".node" files: node_modules/@eversdk/lib-node/eversdk.node      node_modules/@eversdk/lib-node/index.js:29:23:       29 │         return require("./eversdk.node");

Tim: Никак это для бека только. И тут не эверскейл (reply to 177217)

Max | TonMap: Спасибо. Переустановил и помогло! (reply to 177200)

R: ребята, прошу помочь

R: что делать, если покупатель подтвердил платеж, но деньги не пришли, я отправил аппеляцию, но поддержка не отвечает

R: а сам покупатель отправил только одно сообщение, что якобы все отправил

Tim: Ждать (reply to 177226)

R: уже 15 минут прошло

Tamik: Всем привет! Кто юзал tonkeeper-messages помогите плиз.  Не могу понять как передавать несколько кошельков в "address" Вроде как формат json, но на "address": ["1й кошелек","2й кошелек"]  ругается(

Vlad: :) (reply to 177154)

angel: у кого-то есть тестовый сайт с Ton Connect и подписанием транзакции?

angel: хочу код посмотреть

angel: и чекер баланса кошелька

&rey: А это у Go надо спрашивать, не у тона)

Denis: fmt.Sprintf("0x08%x", op) (reply to 177241)

Ibrahim: Hi devs, is it possible to use ston.fi to swap tokens from a third party smart contract?

Dmitry | backend4you.ton: По идее там только биты ключа  что вы оттуда хотите расшифровать? (reply to 177114)

N95: Здравствуйте! Я отправил тон на биржу байбит с не  правильным мемо,я подал запрос на возврат,они сделали возврат мне на этот мой кошелек,но мне средства не пришли,поддержка байбита сказала что средства они  отправили и не могут ничем больше помочь,попросили написать вам.помогите!

Dmitry | backend4you.ton: ща угадаю... вы отправляли с wallet, причём НЕ с ton space? а байбит возвращал "отправителю", а не тому кошельку который вы  взяли из валлета из "пополнить"? тогда в принципе можете попрощаться с ними (деньгами). есть у валлета поддержка (там внутри есть сссылка), но перед этим сначала почитайте теорию чтобы понять зачем нужно memo/tag (reply to 177255)

N95: Да я отправлял из тон валлета, я знаю что такое мемо, но при отправке было написано комментарий а не мемо,вот я и не предал значения, то есть если я отправлю из тон валлета, всеравно не я отправляю эти монеты? (reply to 177257)

Dmitry | backend4you.ton: валлет (штатный, не тон спейс) это кастодиальный кошель - один адрес, все монеты всех юзеров там лежат "вперемешку", а "сколько там чьих" - валлет знает "из другого места". соответсвтенно на байбит отправка произошла с этого кошелька. и когда байбит вернул на этот кошелек - угадайте почему валлет не знает чьи это деньги (reply to 177258)

N95: А поддержка не может помочь? (reply to 177259)

Dmitry | backend4you.ton: ну если вы уверены что сможете им доказать что "просто так прилетевшие деньги" это ваши....  Они точно могли бы вернуть их обратно на байбит, но смысла в этом нет. (reply to 177260)

N95: Откуда простому юзеру знать эти тонкости, это просто воровство (reply to 177259)

Vladimir: Если Вы вставите в розетку 2 пальца, то кто должен сесть за убийство? (reply to 177262)

Dmitry | backend4you.ton: Вы взяли и всей квартирой/домом договорились держать деньги в общей банке на 1 этаже. Чтобы не запутаться - рядом лежит тетрадка где написано сколько чьих.  Приходил курьер, приносил продукты. Вас не былодома. оплату он не взял. Вы веечром, как честный человек, вызвали другого курьера из магазина, дали ему 100 тугриков из банки "отнести в магазин", к деньгам приложили записку "за заказ123".   Завтра позвонил мазагин, сказал что вы не оплачивали заказ 124. Вы сказали что ошиблись вчера, надо вместо 123 считать 124, но магазин не может вам так просто поверить, потому что у него таких бумажек - пурд пруди. Он сказал тому курьеру отнести 100 тугриков "откуда принёс". Курьер пришел к вам, вас дома нет, он сунул 100 тугриков в банку.  Вечером вы всем домом пересчитали тугрики в банке и выяснили что 100 лишних (не совпадает с тетрадкой). Как вы докажете что это ваши, если курьера никто кроме вас не видел? (reply to 177262)

N95: А зачем писать ерунду, если человек теряет денег (reply to 177267)

N95: Ну я же живу в этой квартире и имею доступ к одной из комнат, так же как и видно откуда отправляли средства, и попытались мне их вернуть но они не дошли. (reply to 177268)

Dmitry | backend4you.ton: проверьте по эксплореру, увидите что адреса мягко говоря "не ваши" (reply to 177271)

N95: А не видео что я отправлял на биржу? Вообще не бывает моего адреса там? (reply to 177273)

Dmitry | backend4you.ton: чтобы вернуть "вам" - валлет дает вам специальный адрес (в "пополнить"). а если вернуть просто "в банку" то эта банка то общая. (reply to 177271)

N95: Меня бесит что средства вводил я, отправлял я , а вернули их в общую казну

Dmitry | backend4you.ton: кастодиальный кошель - это значит общая банка. из этой банки куча исходящих операций, в которых нет привязки к вам как юзеру телеграма/...  байбит видит только этот общий адрес-источник и (неправильный) тег. он может отправить обратно на тот общий адрес. но он общий, не ваш. валлет не знает что это деньги "для вас" (reply to 177274)

N95: Ну а зачем это общий если средства на моем адреса были (reply to 177277)

Dmitry | backend4you.ton: "кастодиальный"(!) кошель.

N95: Да я понял все уже (reply to 177281)

Dmitry | backend4you.ton: ну точнее технически это не совсем верно, кастодиальный не на 100% эквавалентно "общий", но для данной проблемы не будем усложнять

N95: Да я бы заплатил комсу, а так все тоны потерял (reply to 177288)

N95: 28 (reply to 177290)

Dmitry | backend4you.ton: кароче саппорт валлета видит входящую транзакцию. но хз как вы докажете что она "ваша".  саппорт может увидеть какую исходящую транзакцию вы отправляли на байбит (которая с неверным мемо), но "возвратная" вряд ли содержит какие-то идентификаторы "исходной". или содержит? посмотрите в эксплорере.  саппорту надо будет связть вашу исходящую с "неизвестной входящей". представьте что кроме вас еще несколько человек говорят что "это их" - вот вам надо как-то доказать что все же ваши

N95: Единственное могу скрины из биржи приложить hash и так далее, написал им посмотрим что ответят (reply to 177292)

N95: Благодарю за ответы

N95: Ну каждый не сможет претендовать на эту транзакцию доказать не смогут (reply to 177292)

Dmitry | backend4you.ton: Скрины из браузера легко подделать (reply to 177296)

&rey: Создал новый контракт-кошелёк (в бета версии): inplug-v2! Часть функций осталась от существующих, часть новая: — может отправлять деньги, как и любой с самой первой версии — даёт отправить по 255 сообщений за раз, как preprocessed — содержит систему плагинов, как v4r2 (но не совсем такую) — плагины делятся на доверенные и недоверенные, которым режется частота запуска, отправляемые тоны и опкоды (например, минус переводы НФТ) — и, наконец, кошелёк даёт запускать код ончейн.  Зачем запускать ончейн что-то? Например, фронтраннинг: если отправлять сообщение наружу с некоторой вероятностью, уменьшающейся при отдалении от начала блока, то в среднем сообщение будет попадать в начало.  Ссылка на файл с тестами в репозитории: https://github.com/ProgramCrafter/wallet-contract/blob/main/test-wallet-inplug-v2.ts Жду замечаний, расширений тестов, дискуссии... И как вы предсказываете: есть ли там где-то баги, как был в inplug-v1, или нет?

ᅠ ᅠ: народ ,может кто сталкивался , тон апи эдпоинт за эвентами в ответ получаю {"error":"illegal base32 data at input byte 0"}  со статусом 401 Unauthorized  , может кто-то знает в чем причина ?

Flyheck: Подскажите, пожалуйста. Как научить контракт деплоить новый контракт?

Flyheck: К примеру, если приходит на контракт транза, то этот контракт деплоит новый контракт, функционал которого зависит от этой транзы (reply to 177301)

Flyheck: boc? (reply to 177303)

ᅠ ᅠ: Хм, но другой чел туже дапп запустил и у него без ошибок (reply to 177302)

Flyheck: а как заставить его задеплоить его? (reply to 177307)

Flyheck: Хочется же что-то новое сделать) (reply to 177309)

Flyheck: Спасибо (reply to 177311)

Flyheck: Почему большинство продолжает писать контракты на FunC, когда есть tact? Что именно tact не покрывает?

alien: Privet vsem.. izvinite ne mogu pisat' kirillitse.. ya ishshu kakiye to prostiye sposobi dlya prinyatiya oplati avtomatichesko v moem telegram bote.. on pisan na python no ne pomnyu kak ispolzovat' sam python biblioteki v blockchain.. eto chto ya nashol ton://transfer/{WALLET}?amount=1000000000&text={air_type}  znayete yeshyo linki takie katoriye otkrivayut ofitsialny wallet v sam telegram? yesho kak ya mogu uznat' tranzaksiyu uspeshno li net i s kem prishol.. mojet pishu telegram id kak text="chat_id" ?

&rey: Да, по сути. (reply to 177299)

&rey: Ограниченные нельзя вызывать экстерналами.

Bogdan: Всем хай а при деплое nft в тест нет нормально что сразу мета данные не видны и превьюшка nft, а только спустя пару часов прогружается и в tonviewer все видно становится

Bogdan: например: https://testnet.tonviewer.com/kQBwDFtmk35coK9M9wWyahkHgNHxFeYGaDVAUeSM620wQ0WT?section=nft) только через какое то время мета данные грузятся и превью nft

Bogdan: в тонкипере такая же фигня

Bogdan: И еще вопрос: обязательно ли при деплое nft, грузить картинки nft в формате ipfs?

Rodion: есть где-нибудь калькулятор, если закину n количество TON и n GRAM, то сколько я получу LP токенов?

Ihor: Я хочу иметь возможность сгенерировать такой же хеш чтобы валидировать публичный ключ вместе с префиксом, но это невозможно пока я не могу повторить префикс (reply to 177253)

Mort: Я только что пытался получить тестовые токены на кошелёк и… я не понимаю что вообще здесь происходит. Почему каждый раз когда вводишь мнемоник получается какой-то другой адрес? Почему я указываю один адрес, а токены улетают на другой? Почему я не вижу полученных с фасета токенов в кошельке, если совершенно точно указал адрес кошелька?

Mort: Какого чёрта здесь происходит?

Bogdan: а под мнемоником вы подразумеваете 24 секретных слова? (reply to 177332)

Mort: Именно

alien: Spasibo. Kak nayti eto api ? Ya ves dokumentatsiyu iskal v tonapi.io (reply to 177330)

Bogdan: код в студию))) по факту вам надо keypair.secretkey получить

Bogdan: из мнемоников

Bogdan: это то что позволяет трансфер жетонов совершать

Bogdan: Если конечно для этого вам мнемоники нужны

Dmitry | backend4you.ton: эээ можно на примере? (reply to 177331)

Mort: Это через что делается? (reply to 177337)

Bogdan: в pastebin код положите, не понятно каким образом вы открываете кошелек используя мнемоники https://pastebin.com (reply to 177342)

Mort: Что положить? 24 слова? (reply to 177343)

Bogdan: Вы разработчик или обычный пользователь?

Mort: Разраб. И я нихрена не понимаю, что происходит

Bogdan: 24 слова ни в коем случае не ложите) иначе вы свой кошелек отдадите

Bogdan: это дефакто пароль но в формате слов

Mort: Это ясно, про какой тогда код речь?

Ihor: К сожалению нет, есть 16 символов префикса в дополнение к 64 публичного ключа, хотел узнать если есть возможность сгенерить префикс или попробовать чтобы в итоге мог проверить подлинность. Или единственный вариант спросить человека как он сгенерил ключ вместе с префиксом?

Ihor: ^ (reply to 177341)

Bogdan: Советую с этим ознакомиться если надо открыть кошелек и поработать с ним https://github.com/toncenter/tonweb/blob/master/src/test-jetton.js (reply to 177350)

Bogdan: и если речь идет о жетонах в вашем проекте

Mort: Я разработчик с эфириума перешёл в компанию, где под тон делают сервисы (reply to 177348)

Bogdan: понятно, советую покурить tonweb если на node.js пишите (reply to 177355)

Mort: Мне пока это не надо. Я курс прохожу

Mort: Деплой типа контракта.

Mort: Я с кошельком хочу разобраться

Dmitry | backend4you.ton: чёт я запутался. а откуда эти числа? я думал что в тоне ключи по 256 бит (reply to 177351)

Mort: Создал кошелёк, скачал приложение десктопное. В блупринте отправляю в деплой. Тот спрашивает через какой кошель. Подключаю десктопный. Блупринт кидает транзакцию. Кошелёк ее открывает, но я не могу её подтвердить, вероятно потому, что нет на балансе токенов. А может потому что кошелёк в мейннете. И его нельзя переключить в тестнет (где возможно лежат токены)

Mort: Просто максимально непрозрачно происходит всё

Bogdan: Поработайте через toncenter, получить ключи как тестовые так и с mainnet можно здесь https://t.me/tonapibot

Vladimir: или тут https://tonconsole.com/dashboard (reply to 177363)

Bogdan: Вот чтобы наверняка быть уверенным что вы получили тоны в тестнете, то советую использовать этот giver https://t.me/testgiver_ton_bot (reply to 177361)

Mort: Именно через него и получал (reply to 177365)

Bogdan: https://testnet.tonviewer.com тогда здесь смотрите, количество тонов на балансе (reply to 177366)

Mort: Tonkeeper и TON Wallet не отображают тестовые коины

Bogdan: Отображают, 5 раз кликаете на логотип тонкипера, и врубаете dev mode, далее подключаете тестовый  существующий кошелек в окошке (reply to 177368)

Бахтияр: Ребята подскажите что за ошибка выходит при деплое смарта?  Ошибка при вызове контракта: AxiosError: Request failed with status code 503     at settle (D:\Работа\Projects\raFFFles\node_modules\axios\lib\core\settle.js:19:12)     at IncomingMessage.handleStreamEnd (D:\Работа\Projects\raFFFles\node_modules\axios\lib\adapters\http.js:589:11)     at IncomingMessage.emit (node:events:525:35)     at IncomingMessage.emit (node:domain:489:12)     at endReadableNT (node:internal/streams/readable:1359:12)     at processTicksAndRejections (node:internal/process/task_queues:82:21)     at Axios.request (D:\Работа\Projects\raFFFles\node_modules\axios\lib\core\Axios.js:45:41)     at processTicksAndRejections (node:internal/process/task_queues:95:5)     at async HttpApi.doCall (D:\Работа\Projects\raFFFles\node_modules\@ton\ton\dist\client\api\HttpApi.js:263:19)     at async HttpApi.sendBoc (D:\Работа\Projects\raFFFles\node_modules\@ton\ton\dist\client\api\HttpApi.js:238:9)     at async TonClient.sendFile (D:\Работа\Projects\raFFFles\node_modules\@ton\ton\dist\client\TonClient.js:188:9)     at async Object.external (D:\Работа\Projects\raFFFles\node_modules\@ton\ton\dist\client\TonClient.js:385:13)     at async WalletContractV4.send (D:\Работа\Projects\raFFFles\node_modules\@ton\ton\dist\wallets\WalletContractV4.js:62:9)     at async Object.send (D:\Работа\Projects\raFFFles\node_modules\@ton\ton\dist\wallets\WalletContractV4.js:107:17)     at async Object.internal (D:\Работа\Projects\raFFFles\node_modules\@ton\ton\dist\client\TonClient.js:415:13)     at async NFTItem.sendTransfer (D:\Работа\Projects\raFFFles\wrappers\NFTItem.ts:26:9) {  data: { ok: false, error: "name 'tonlib' is not defined", code: 503 }

Vladimir: Request failed with status code 503 (reply to 177372)

Бахтияр: Я имею ввиду в чем здесь проблема

Vladimir: Исходный код угадать должны? (reply to 177374)

Бахтияр: не в api дело случаем?

Бахтияр: error: "name 'tonlib' is not defined

Ihor: Это в base64 (reply to 177360)

Vladimir: Сейчас попробую расклад на картах сделать. (reply to 177377)

Егор: Всем привет. Если есть у кого-то книги по funC, отправьте пожалуйста.

Vladimir: https://docs.ton.org/develop/func/overview (reply to 177381)

Dmitry | backend4you.ton: Вы «ключ» и «адрес» не путаете? https://docs.ton.org/learn/overviews/addresses#raw-and-user-friendly-addresses (reply to 177379)

Mort: Получилось. Зачем было так прятать эти настройки - загадка. Ну ладно, транзакции теперь проходят, баланс есть. Теперь я ужасаюсь логам ошибок (reply to 177369)

Danya: Ребят не подскажите, щас переводил ton на биржу (bybit) обычно приходило в течении 3-4 минут, а щас уже 20 минут нет ничего. Memo и адрес указаны правильно. Переводил с кошелька в тг

Vladimir: Тут чат не про это. (reply to 177386)

larlmode: Ребят подскажите пожалуйста, как можно посмотреть статус и вообще в целом хеш совершенной транзакции в tontools? или в toncenter's pytonlib

Vladimir: Написать в TonKeeper. (reply to 177396)

Vladimir: Чтобы он начал стоить что-то, они, естественно, не помогут, но объяснят процесс снятия статуса. (reply to 177398)

Vladimir: Вот именно. (reply to 177400)

Vladimir: Увы. (reply to 177402)

Vladimir: Естественно. (reply to 177404)

Vladimir: Там и свой GRAM можно вкинуть? (reply to 177409)

Zaphod: Чтобы токен что-то стоил, за ним должен стоять полезный проект (reply to 177402)

Vladimir: Вот именно. Пойдёт ликвидность и его и так заметят. (reply to 177415)

Амир: Всем привет. Подскажите пж, есть ли роадмап для тон разработчиков?

— 2024-03-30 —

Alex: ребят , выдает ошибку в createFromConfig({ //здесь} , контракт возвращает адреса сендера и ресивера , а так же запоминает адресс овнера и не выводит его если нашел его в транзакции . Код, а так же ошибка прилагаются :                                                                                     import { toNano } from '@ton/core';  import { Proxy } from '../wrappers/Proxy';  import { compile, NetworkProvider } from '@ton/blueprint';    export async function run(provider: NetworkProvider) {      const proxy = provider.open(Proxy.createFromConfig({}, await compile('Proxy')));        await proxy.sendDeploy(provider.sender(), toNano('0.05'));        await provider.waitForDeploy(proxy.address);        // run methods on proxy  }

Alex: попробовал расшифровать ошибку но скудных знаний фанси и тс не хватило

Alex: а да, если что это скрипт

slavagm: Здесь что-то не то передаешь (reply to 177432)

slavagm: Надо смотреть что ожидается в функции и разбираться

Alex: https://tonresear.ch/t/func-3/457 я по этому гайду делал но на второй домашке уже встрял( (reply to 177436)

slavagm: Ну так ты сюда owner не вписал (reply to 177432)

Alex: я пытался понять в каком виде его вписать надо но так и не допер , чисто в фигурные скобки его закинуть?

slavagm: Да, должна быть пара ключ-значение с ключём owner (reply to 177439)

&rey: Цена токена может быть ничего, а может быть не определена. Второй вариант — условно, токены DAY и NIGHT, которые можно конвертировать друг в друга, но никто не предлагает менять их на TON или что-то другое. И многие жетоны не предназначены для того, чтобы их просто продавали и покупали. (reply to 177398)

Vladimir: А подскажите пожалуйста вот я купил свой собственный телеграм логин как нфт Как-то я могу его использовать дополнительно?  Думал может можно хоть адрес babin.t.me делегировать в другое место, но что-то не могу найти такого :)

Andrey: Есть у кого исходник запроса, используемый для подсчета balance tier в скваде открытой лиги? Такое ощущение, что там ошибка.

User<6365803117>: Привет всем, есть команды которые игры разрабатывают? напишите в лс пж

larlmode: Ребят подскажите пожалуйста, как можно посмотреть статус и вообще в целом хеш совершенной транзакции в tontools?

&rey: "нужную" – ? (reply to 177472)

&rey: А схема этого параметра есть? (reply to 177476)

&rey: Гет-методы не REST – не описывают, что они отдали, как и большинство существующих API.

Denis: MsgAddrInt из block.tlb

Denis: Но во всех либах под адрес есть готовый тип и метод его парсинга из ячейки

larlmode: import asyncio  from TonTools import TonCenterClient, Wallet  mnemonics = ['mix', 'pyramid', 'copper', 'chronic', 'humor', 'control', 'obscure', 'afford', 'fox', 'announce', 'cook', 'dog', 'step', 'wave', 'crack', 'wrong', 'motor', 'author', 'afraid', 'age', 'awake', 'absorb', 'announce', 'seminar'] async def main():     provider = TonCenterClient(base_url='https://testnet.toncenter.com/api/v2/')     wallet = Wallet(mnemonics=mnemonics, version='v3r2', provider=provider)      await wallet.transfer_ton(destination_address='UQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqEBI', amount=0.01, message='a')  if name == 'main':     asyncio.get_event_loop().run_until_complete(main())  Ошибка:    File "/usr/local/lib/python3.10/dist-packages/TonTools/Providers/TonCenterClient.py", line 98, in run_get_method     raise GetMethodError( TonTools.Providers.TonCenterClient.GetMethodError: get method seqno for address EQCeNdjtpsf9J7wdZjM3R-9IbxUwYNyIubE12LnwH1a8s-cW exit code is -13  В чем может быть проблема, подскажите пожалуйста

Ruslan: https://t.me/tondev/163906 (reply to 177489)

larlmode: спасибо! (reply to 177490)

.: Что означает 404 exit code

Party: Зависит от контракта (reply to 177494)

.: highload, collection (reply to 177495)

.: Там такого кода нет

.: Я весь код прошарил (reply to 177496)

Andrey: ну скажите спасибо разработчикам TonConnect за супер интуитивный нейминг (reply to 177231)

Randall: Кто-нибудь в курсе, в чем дело - метод events/emulate в tonapi v2 постоянно сыпет ошибкой "unknown error" последние несколько дней. До этого всё работало без этих ошибок.

Павел: Ещё одно поле - mode, вероятно (reply to 177498)

Павел: Нет, вот тут описание: https://docs.ton.org/develop/smart-contracts/messages#message-modes и вот здесь пример: https://docs.ton.org/develop/smart-contracts/messages#message-layout (reply to 177505)

Павел: 2 варианта: 1. Либо ещё одно поле mode добавить 2. Либо при отправке указать вторым параметром  Т.е. я не знаю, какой из этих вариантов правильный. Зависит от реализации в либе, что ты используешь (reply to 177505)

Павел: Там есть пример, где видно, что mode - это второй параметр (после ячейки с сообщением) при отправке (reply to 177509)

Павел: Как добавить ликвидность jetton-у?

Павел: Это единственный способ, или есть и другие? (reply to 177514)

Павел: Не понимаю, как это сделать… (reply to 177516)

larlmode: print(await client.raw_run_method(method='seqno', stack_data =[], address=wallet_address))  Я вот так пытаюсь seqno получить, но на всех ls_index в тестнете выбивает tonlibjson did not respond, нужно просто многократно пытаться или что то не так я делаю?

Pavel Popov: Заметил сомнительный момент с покупкой NFT Пример: https://tonviewer.com/EQBp1x4YY19pINsizvouW4JRwz1ZwMDpfMyNkBSEwFDaIrT5 Аккаут несколько раз подряд продает ваучер notcoin, у покупателя списываются ton, успешно отправляются продавцу, но до покупателя нфт не доходит - Transfer NFT Failed Как это вообще происходит и что с этим делать?

Xela: Добрый день. Возможно выставить ограничение по памяти для ноды тон без валидатора????

Ma><im: добрый день!   подскажите пожалуйста, у кого-нибудь есть пример кода или ресурс, где описано как через typescript отправлять мультитранзакцию на контакт?   например, за одну транзакцию отправить Jetton сразу на 4 кошелька

Dmitry | backend4you.ton: Скажите плиз, в FunC store_slice сохраняет только биты, или биты и рефы?

Andrey: И биты и рефы (reply to 177534)

Andrey: Их остаток точнее, если условно изначально ячейка имела 3 рефа, в слайсе прочитали 2, то потом в store_slice он запишет последний реф

Dmitry | backend4you.ton: да, это понятно, остатки битов и остатки рефов. просто про рефы я был не уверен

Ma><im: https://docs.ton.org/develop/dapps/ton-connect/transactions (reply to 177532)

Ma><im: есть ли способ это не через браузер делать?

EmirNonstop: Всем привет!  Возник вопрос, возможно ли приоритезировать транзакции, существуют ли какие нибудь способы?

Stormark: можно ли поменять коллекцию нфт, т.е. нфт переносить в другую коллекцию

Ma><im: в контракте NFT Item же есть collection_address в памяти, просто его поменять, по идее (reply to 177542)

Stormark: а как взаимодействовать с контрактом? (reply to 177544)

Ma><im: в стандартном контакте айтема, насколько я помню, нет метода для смены адреса его коллекции   нужно переписывать код на FunC

Ma><im: точнее дописывать

Ma><im: добавить нужный вам функционал

Aziz: Подскажите адрес контракта USDT на тоне подалуйста

Stormark: Ясно, я просто пользовался этим https://truecarry.github.io/ton-collection-edit/

Stormark: Кстати, еще не придумали способ сжигания нфт?

F: https://tonscan.org/jetton/EQBynBO23ywHy_CgarY9NK9FTz0yDsG82PtcbSTQgGoXwiuA#transactions (reply to 177549)

&rey: У вас в любом сдк в sendTransfer есть список сообщений, которые вы отправляете. Запишите туда четыре сообщения. (reply to 177532)

&rey: Там плохо будет всё с индексированием и поиском нфт по номеру, поэтому нет. (reply to 177542)

&rey: Сбт можно, нфт обычно отправляют на один из "ну почти точно" неиспользуемых адресов. (reply to 177552)

Xela: Добрый день. Возможно выставить ограничение на сервере по памяти  для ноды тон без валидатора????

Ma><im: import { Address, toNano } from '@ton/core'; import { JettonWallet } from '../wrappers/JettonWallet'; import { NetworkProvider } from '@ton/blueprint';  export async function run(provider: NetworkProvider, args: string[]) {     const ui = provider.ui();      const address = Address.parse(args.length > 0 ? args[0] : await ui.input('JettonWallet address'));     const jettonWallet = provider.open(JettonWallet.createFromAddress(address));      await jettonWallet.sendTransfer(provider.sender(), {         value: toNano('0.20'),         queryId: Date.now(),         jettonAmount: toNano('213'),          toAddress: Address.parse('0QCcZwYHTcqhqbh4LXx5imjiKCbXEh39zPzRN69iA_pvx_Pe'),         forwardTonAmount: toNano('0')     });      ui.write('Transfered successfully!'); }  а если я использую ton/blueprint?  я же тут сам формирую это сообщение и отсылаю его. извиняюсь за глупые вопросы, но всё же (reply to 177554)

Ma><im: как мне тут сформировать транзакцию с несколькими сообщениями

Ma><im: sdk - это же уже про разработку Dapp, а я хочу просто с контрактом таким образом взаимодействовать, или я что-то не понимаю? (reply to 177554)

larlmode: transfer_query = wallet.create_transfer_message(to_addr='UQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqEBI', amount=to_nano(0.01, 'ton'), seqno=seqno, payload='transaction') transfer_message = transfer_query['message'].to_boc(False)  await client.raw_send_message(transfer_message )  подскажите пожалуйста, как можно статус транзакции получить которую совершаешь, ну и в целом ее хеш? именно не транзакции последние в кошельке смотреть, а та которая совершилась с помощью кода этого

Eduard: Подскажите пожалуйста возможно ли найти пользователя или как то связать его по его адрессу TON кошелька? Если да то возможно ли это сделать с TON space или просто с обычным кошельком в ТГ?

Vladimir: Только если у него куплен адрес через фрагмент (nft). (reply to 177568)

Stormark: @TrueCarry извини что дернул.  Нужен твой совет, подскажи пожалуйста  https://truecarry.github.io/ton-collection-edit/  В каком формате должен быть написан лист рассылки? # - номер json файла? Nft - адрес nft new owner - адрес получателя?  Какой фармат файла вложить? txt, csv?

Eduard: То есть обычные адресса кошелька и Tonspace не чекнуть? (reply to 177569)

Tim: Csv,  2 колонки без заголовка . Но с обычного кошелька вы больше 4 нфт за раз не отправите (reply to 177570)

Stormark: понял спасибо (reply to 177572)

Vladimir: Нет, Ton Space просто кошелёк, как кипер или тонхаб. (reply to 177571)

Eduard: Понял, а адресс кошелька который в ТГ встроенный? (reply to 177575)

Vladimir: Это тоже просто кошелек. (reply to 177576)

Bogdan: кто сталкивался с данной ошибкой? приходится обновлять страницу но картинки nft не показывает(((

Bogdan: в testnet tonviewer

Ma><im: попробуйте в getgems посмотреть (reply to 177580)

Bogdan: в getgems все нормально

larlmode: а что подразумевается под body? (reply to 163948)

Tim: Tx.inMsg (reply to 177588)

larlmode: а что это? я новичок, не очень понимаю если честно, это payload который можно указывать типо? (reply to 177589)

Bogdan: еще вот такая хрень была замечена в testnet тона, при деплое 10 nft в среднем 1 макс 2 отображается остальные якобы мета данные неподгружены

Bogdan: хотя транзы проходят и подтверждаются

Re-L: Привет всем, подскажите пожалуйста какое мне апи нужно использовать чтобы делать запросы поиска в блокчейне тона как в sql. Например, найти все кошельки где кол-во тона больше 1000 или найти все кошельки которые делали переводы в определенный период времени. В документации описаны какие то простейшие http методы из разряда getAccount, getTransactionsByAccount итп.

Bogdan: Поднять свою ноду и там искать по блокам

Re-L: я не в прямом смысле на языке sql имел ввиду запросы писать. А просто чтобы подобная возможность была (reply to 177603)

&rey: Ай. Ну, надо provider.sender() как-то убрать рефактором. (reply to 177559)

Alex: const main = provider.open(Main.createFromConfig({} ребят что можно в криейт фром конфиг вписать ? это скрипт

Alex: у меня просто ошибку выдает мол надо вписать овнера а каким образом не знаю

&rey: createFromConfig({owner: Address.parse('...')}) Вы знаете, что такое объекты в JS? (reply to 177611)

Alex: примерно понимаю

Alex: но если есть аналогия с плюсами буду благодарен)

nonam3e: Не совсем по теме чата. Скорее всего проще всего находить n~x^3+ax+b(mod p) и уже для n применять данный алгоритм (reply to 177622)

larlmode: Помогите, пожалуйста! (reply to 177562)

vs: При работе с TON используется криптография на основе ключевых пар состоящих из секретных и публичных ключей? На сколько мне известно, публичный ключ на эллиптичской кривой представляет собой координаты точки (x,y), где y можно выразить через x зная параметры эллиптической кривой. Вопрос, наверное, для фундаменталистов. Но возможно кто-нибудь сможет направить на лекции, статьи или примеры кода.

nonam3e: y нельзя однозначно вычислить из x, точка кривой всегда задаётся парой (reply to 177628)

vs: Созданная мной функции в 44 строки кода не заработала с первой попытки.

Denis: У нас в тонконсоли есть такое. Но к сожалению мы из закрытой беты все не можем перейти в открытую (reply to 177604)

Tim: У редабта есть sql запросы, на счет апи  не знаю

Denis: выглядит как-то так

vs: Вы имеете в виду то, что (y)^2=(-y)^2, или о том, что равно и тождественно равно это разные знаки? (reply to 177629)

nonam3e: Не только, это частный случай для R, а вы в конечном поле (reply to 177634)

Олександр: @subden Улучшите ваше graph api ибо это боль для других

Denis: это таска связанная с аналитической базой кстати

User<6365803117>: Привет всем, есть команды которые игры разрабатывают? напишите в лс пж

Svαtoωλ‎: пользуюсь pytonconnect, начало сыпать ошибку 429 (too many requests) я так понимаю что используется тонапи с ограничением в 1 запрос в секунду. Но не могу найти куда вставлять апи ключ с 10 запросами в секунду)

Denis: Да. Там оказалось достаточно много пользователей этой либы которые использую тонконнект не на фронте. Пишите имя бота в приват. Я выдам ключик. Обычный тонапишный не сработает. Пока не придумал что сделать фундаментально (reply to 177651)

Denis: Перевести на тонапи и платный тариф наверное не очень правильная идея потому что получается навязывание платной услуги.

Denis: Но и пускать без лимитов к сожалению тоже нельзя.

Vladislav: все доброго времени суток, друзья. подскажите пожалуйста, когда я ставлю позицию на фарм в Ston.fi моя пул позиция на провайдинг все еще работает, или они функционируют исключительно по отдельности?

Vladislav: буду очень благодарен совету🙏🏻

Vladislav: Есть тут те кто пользуется ston.fi ?)

Eduard: Здравствуйте подскажите пожалуйста, я тренеруюсь создавать Jetton и создал свой для теста смотрю на контракт через tonviewer и у меня почему-то написано Max. supply 2,560,001 а рядом SCAM, почему так? Возможно я не правильно понял значение SCAM? Я бы отправил файл (но мне пока что запрещено)

Svαtoωλ‎: Ууу, запущенная ситуация, ждём специалистов (reply to 177662)

Vladimir: Всё скам пока не доказано обратное. Белый список 😉 (reply to 177662)

Eduard: 😐

Eduard: Хорошо что хотя бы не в чатик по Unreal engine написал, там бы уже услышал пару ласковых

Mirka: Ну нн токены вроде помечаются скам, не уверен. А какой ты сапплай ставил? (reply to 177662)

Eduard: Похоже на стеб (reply to 177670)

Eduard: Ну я имею ввиду это вообще на что-то влияет? В плане оно так решило потому что все токены у меня и я один холдер или еще какие-то причины (reply to 177672)

Vladimir: Можно попробовать отозвать права и посмотреть что будет (reply to 177673)

Андрей: А можно воспользоваться поиском по чату и почитать прошлые ответы

Denis: А как токен то назвали? (reply to 177662)

Sybot: Достаточно интересный вопрос к разрабам, человек добавил в ликвидность деньги к примеру на stonfi ему дали nft в виде pTon если сайт закроется как эти нфт обменять обратно на средства? В случае с Бинанс сетью там есть bscscan и можно вызывать контракт, а в случае с тон как это сделать ?

Tim: Писать свой интерфейс

Sybot: Текущих нет ? (reply to 177682)

Denis: Вообще нет, но мы в тонвьювере думаю в обозримом будущем к этому придем (reply to 177683)

— 2024-03-31 —

Navajjoo: Приветствую всех. У меня вопрос/запрос о содействии. Пь|таюсь составить проект под NFT коллекцию на TON в тестнете, до этого на Cronos составлял через Visual Studio Code. С TON еще не получилось, что то запутался. В процессе прохождения курса по ТОН от Oleganza, но честно, пока сложно. Может кто-нибудь на волонтерских началах помочь в составлении простейшего кода? Буду благодарен. Можно в приват писать в любое время. Спасибо!

VIKTOR: dton.io graphql api, должно помочь (reply to 177606)

Merman: Насколько вообще актуален курс на степике по тону, когда есть такт?

Merman: Стоит проходить?

Merman: Или сразу доки такта читать

Zaphod: Качество преподавания так себе, но для совсем нулевого уровня сойдет (reply to 177708)

Dmitry | backend4you.ton: В контракте нфт есть адрес коллекции и индекс. А у коллекции есть гет-метод который по индексу вернет адрес конкретной нфт. Если вы переделаете контракт коллекции что она будет правильно возвращать адрес «перебежавшей» нфт то пожалуйста ) (reply to 177544)

Yahor: Привет всем 🤝

Gifter: Всем привет, требуется разработчик смарт контракта. Не знаю, приветствуются ли тут такие запросы, но в общем - пишите в личку)

User<782988454>: Привет 🚬  есть контакты Tonviewer ?

Denis: Контакты тонвьювера есть на каждой странице тонвьювера (reply to 177719)

User<782988454>: А ты гигант 😃 (reply to 177720)

User<5062827846>: аватарку токена нельзя же поменять никак, если ревок сделан?

Denis: Да (reply to 177731)

Denis: Нафига вы вообще ревок делаете?

Denis: Какой идиот это придумал?

ᅠ ᅠ: все привет ,делаю меседж на отправку jetton на другой адресс кошелька , но при подтверждении в тон кипере у меня оно фейлится если возможно,то подскажите в чем причина    const destinationAddress = Address.parse(receiverWallet);      const body = beginCell()       .storeUint(0xf8a7ea5, 32)       .storeUint(0, 64)       .storeCoins(toNano(amount))       .storeAddress(destinationAddress)       .storeAddress(destinationAddress)       .storeUint(0, 1)       .storeCoins(toNano(0.05))       .storeUint(0, 1)       .endCell();      const transactionJetton = {       validUntil: Math.floor(Date.now() / 1000) + 360,       messages: [         {           address: jettonWalletContract,           amount: toNano(0.05).toString(),           payload: body.toBoc().toString("base64"),         },       ],     };

Svαtoωλ‎: так ща все мем токены ревок делают, что бы типа создатель не наминтил себе еще монет)

Svαtoωλ‎: ну и лочат ликву

Denis: Для этого можно просто выпускать не минтабл токен (reply to 177736)

Svαtoωλ‎: неважно 👏 (reply to 177738)

Denis: Ну по большому счёту да

Denis: Блокчейн это место свободы. Каждый может творить любую дичь

User<6365803117>: Привет всем, есть команды которые игры разрабатывают? напишите в лс пж

Vladimir: Каждый день будешь писать? (reply to 177745)

Dmitry: Так ведь есть на канале мои (reply to 177628)

Dmitry: Ток там особо нечего говорить. Представьте просто х в Ур е кривой и все. Будет 2 подходящих игрек с точн. До знака

Дмитрий: Добрый день. А можно ли через смарт контракт отправлять жетоны? Если да- то есть пример?   Я имею ввиду отдельный от мастера контракт, в котором хранится адрес мастера жетона для отправления

Дмитрий: Желательно пример на такте если есть

Юрий: ребята, кто есть из молодых разрабов свободные, есть задачки по ботам и токенам, напиши плз в лс

Юрий: и вообще, кто рассматривает в команду, сейчас есть поиск у нескольких проектов

EmirNonstop: Привет! Может ли в wallet.transfer() передаваться несколько транзакций

EmirNonstop: например несколько свапов?

CR ALEX: Парни, всем привет. Нужен мультисенд скрипт, подскажите плиз есть ли готовые или может есть разрабы кто может помочь допилить его? С меня благодарность за помощь в TON, напишите в ЛС.

Сергей: Всем привет. Сколько может стоить разработка контракта токена, связанного с нфт коллекцией? (Можно в лс)

CR ALEX: Не работает вот эта часть:  Transfer failed: LITE_SERVER_UNKNOWN: cannot apply external message to current state : External message was not accepted Cannot run message on account: inbound external message rejected by transaction 805B34932511C8FCDE3BC7569DA27CE3CF9DE37AC7E5762F10F8E2BE5AF5938D: exitcode=0, steps=0, gas_used=0

CR ALEX: Есть сводные специалисты, кто в теме?

Daniil: @ton_mass_payments_bot (reply to 177765)

first_name: подскажите, где стату публичных лайт серверов глянуть?

Daria: https://tonstat.us/ (reply to 177771)

first_name: спасибо (reply to 177772)

SHINRA: Друзья, подскажите где почитать про создание токенов на тон, все тонкости и тп ? Спасибо

Ma><im: в TON Docs, там расписано очень хорошо (reply to 177775)

Ma><im: https://docs.ton.org/develop/dapps/asset-processing/jettons

User<782988454>: 😂😂😂😂😂😂 (reply to 177733)

Takhir: привет народ, есть кто mini app уже запускал, либо разберется в моменте asap. кто свободен? немного затупили на фронте, нидхелп

IKke: Привет ребят, у меня вчера ночью такое произошло  мейннет тестнет один и тот же кошелек, с блюпринта вызывал скрипты ( подключен был только в тестнете через тонкипер)  Транзакции дублируются из тестнета в мейннет 10 транз 14 часов назад и там и там с разным промежутком.  Вот одинаковые по порядку транзакции на деплой в тестовой и мейне с разницей в 1 секунду.  Собственно как такое могло произойти?) хотелось бы избежать подобного

Sasha: Приветствую всех! Есть те кто может сделать анимированную коллекцию NFT? готов платить  под ключ

John: Подскажите пожалуйста, где можно: а) почитать как разместить свой токен на stone.fi б) сориентируете пожалуйста по стоимости вложений данной операции (или пошлите меня туда, где я смогу задать эти вопросы, если это место не здесь)

IKke: а) https://guide.ston.fi/ru/kak-postavit-likvidnost-na-ston.fi б) ~5$ оставь на комиссию + на ликвидность (reply to 177787)

John: Еще вопрос отдельно, так как думаю что он соответствует месту: Какой вариант лучше для запуска своего токена, который в общем-то ничего не делжен делать, кроме как продаваться и пересылаться: 1. просто задеплоить его с помощью утилит ((вроде уже встречал в онлайне) 2. написать (взять готовый) смартконтракт и задеплоить собственными руками  преимущества второго метода я сам знаю, просто по вашему (!) опыту, как лучше?

John: за первое - большое спасибо. по второму - это не шутка и не сарказм? прям вот реально вот так? :) (reply to 177788)

IKke: да, с технической стороны понадобится только на создание пула и добавления ликвидности, потом можно будет торговать (reply to 177790)

Zaphod: Это какие? Мимо блокчейна?) (reply to 177798)

Zaphod: Звучит, как скам-схема

Denis: Могу показать как делать трансферы которые будут не видны в эксплорере (reply to 177798)

Denis: Лень разбираться как в питгновской либе низкоуровневые транзакции делать (reply to 177803)

Dmitry: lf (reply to 177800)

Dmitry: да, можно

Monster: Привет всем. Скажите пожалуйста, как обратится к forward_payload, который приходит в сообщении?  Просто вот так получится? forward_payload.amount и т.д

Dmitry: уточнение - не имеется в виду, что человек при этом не понимает что подписывает) просто имеется в виду что сеть валидирует транзакцию, но сумма скрыта и доступна только отправителю и получателю

Denis: Не помогайте человеку (reply to 177805)

Dmitry: а я и не могу)

🎐*<@Maxim: а куда вставлять ключ 34sfee01215329ee702e53b8c4ae650e747c027e56cd1ea26ffbb45 от https://t.me/tonapibot  когда я работаю с blueprint? там ведь нет поля ввода ключа когда я запускаю npx blueprint run ? в папках scripts/wrappers тоже не нашел

Ramz: Привет. А phaser работает в Telegrafjs кто знает?

Zaphod: Гусары, молчать!) (reply to 177814)

Sasha: Приветствую! Есть те кто может сделать анимированную коллекцию NFT? готов платить  под ключ, пишите в лс

Denis: Вообще скамеры конечно охуевшие пошли. Приходят ко мне в приват и спрашивают "помогите дрейнер написать так чтоб эмуляция тонкипера не детектила вывод".

Denis: Кстати напоминаю что у нас есть багбаунти программа и обманутая эмуляция это критичная секьюрити бага с соответствующим вознаграждением.

Dmitry | backend4you.ton: Если у вас один и тот же кошель (мнемлника) в тестнете и майннете, то транзакции из одной сети любой может «повторить» в другой сети и они исполнятся (reply to 177783)

Contra Idea: Всем привет! Подскажите, пожалуйста, что делать в случае, если при вводе средств на кошелек отправил сумму, отличную от то, что указал?

Contra Idea: Кошелек MyTonWallet. Нигде не могу найти их поддержку

Ma><im: очень странно, используйте лучше TonKeeper)

Ma><im: а вы в tonscan транзакцию смотрели?

Ma><im: должно сходиться

Contra Idea: Отправлял с байбит. Транзакция должна быть. Дело в том, что я указал, что хочу внести на кошелек 25 юсдт, а отправил 50 и автоматически не зачислились (reply to 177841)

Alex: ребят в чем трабл ? до этого все спокойно работало , инет на месте , впна нет

BIN: Приветствую, я здесь могу найти исполнителя или сугубо технические обсуждения?

BIN: Помню про номета.хуz  Вообщем, нужен человек, который отлично ориентируется в тон экосистеме, в тч в разработке под тон и будет классно, если близок к ИБ и имеет общение понимание устройства мира и www.  Цель – консультация, платная, не по части разработки, в дальнейшем возможно и работа над определенным проектом  Буду рад принять вас в ЛС ❤️

Alex: Error: no healthy nodes for v4-testnet ребята в чем трабл ? блюпринт ругается

larlmode: pytonlib.tonlibjson.LiteServerTimeout: LITE_SERVER_NETWORKadnl query timeout(during last block synchronization)  при попытке прочитать последние транзакции вот такая ошибка, это лайт сервера перегружены?

Max | TonMap: Ребят, можно ли как то сохранять  это окно после перезагрузки страницы от TonCOnnect?    Или есть выход какой. Если юзер ждет ждет, а оно зависло, он рефрешит страницу ,и оно естественно исчезает.

Saidolimkhon: А проект по Тиму мем токена Pepe сложно запустить?

Gifter: в локал сторедж можно закинуть, данные по транзе в теории (reply to 177853)

Max | TonMap: Да пробовал, но как их потом восстановить и опросить чейн через тон коннект .. (reply to 177855)

Zxc: Всем приятного вечера, начинаю изучать funC, вопрос следующий: каким образом можно работать со средой на смартфоне андроид?

Owl-Hacker [$FPIBANK #Memhash🦉▪️🦒Σ 🐍]: Сложно очень будет (reply to 177861)

Zxc: Практика очень нужна (reply to 177862)

Dmitry | backend4you.ton: либо сайт тон сломался, либо РКН химичит... кто внутри РФ - попробуйте плиз, у вас curl https://ton.org cработает?

misha_kiss: Работает (reply to 177865)

Dmitry | backend4you.ton: а у меня толко с впн. млин... спасибо

Иван Гречка: извините, не подскажите, есть ли софт для ловли нфт на гетгемс допустим? т.е когда нфт выставляют намного дешевле рынка, а софт автоматически ее выкупает..

Max: Опенсорсные вряд ли есть (reply to 177868)

Иван Гречка: Но создать такое можно? (reply to 177873)

Max: Да. Но момент, когда конкуренции практически не было, упущен (reply to 177874)

larlmode: Ребят, есть кто поможет за денежное вознаграждение.  Нужен готовый код для отправки TON и отслеживания транзакции.  На pytonlib и tontools вроде получилось, но лайт сервера очень лагают, а нужна бесперебойная работа.  Pytoniq совсем нет времени изучать к сожалению.

AL Pamblus: Здравствуйте.  Я искал искал информацию, тонкипер на гитхубе смотрел. но так и не разобрался в этом.  ton://transfer/адрес-контракта?amount=50000000&bin=te6cckEBAQEABgAACAAAAAcIZGXb  что значит bin? как получить bin? для чего он 👀  есть такая подсказка. ton://transfer/<address>?bin=<url-encoded-base64-boc>  но я пробовал уже все кодировать раскодировать,разными способами чтобы получить что-то похожее, не понял 🐈

___: Кто знает как конкатенировать число с строкой в func?

Zaphod: https://docs.ton.org/develop/func/cookbook#how-to-convert-int-to-string https://answers.ton.org/question/1540022815187537920/how-to-concatenate-strings-in-func (reply to 177882)

___: спасибо (reply to 177884)

Dmitriy: Подскажите, есть ли уже такой проект, который присылает уведомления о создании новых жетонов? А также о листинге жетонов на дексах

STXI: Приветствую. 1. Какой язык и библиотеки для взаимодействия с ton blockchain вы используете? 2. Какую IDE вы предпочитаете и какие плагины используете для разработки блокчейна?  3. FunC или Tact? Могу ли я начать с Tact и не столкнуться с нерешаемыми проблемами?

first_name: как TSовский storeBuffer будет в python (tonsdk/pytoniq)?

Victor: store_bytes() в pytoniq (reply to 177909)

Bogdan: 1. js(tonweb) 2.вопрос странный 3.не все кто развертывают смарт контракты их пишут, без понятия. (reply to 177908)

STXI: интересует такой момент, при разработке смарт-контрактов на solidity большинство хороших тулзов было на js, смарт-контракты тоже тестил на js, в тоне также js преобладает? (reply to 177915)

— 2024-04-01 —

Danil: Господа, может кто знает есть ли у гетгемса багбаунти?

Axon: надо написать в их поддержку. От личного опыта скажу сначала спросите и уточните правила баг баунти. Иногда бывает там не логичные правили. (reply to 177939)

Danil: В их гитхабе есть сноска конечно о критических багах, но она какая то странная, ведет в TON Contests bot (reply to 177940)

Investing: Подскажите пожалуйста, отправил жетон на основной кошелек, он не отображается ( не в Тон Спэйс )

VIKTOR: Основной кошелек @wallet не поддерживает жетоны, только Тон Спэйс. (reply to 177956)

Investing: Значит все? Пропали? (reply to 177957)

Maksym: Если через сид импортировать в тонкипер? (reply to 177957)

VIKTOR: Обратитесь в поддержку, запишетесь в очередь восстановления. Может когда-нибудь вернут. (reply to 177958)

VIKTOR: Он отправил не в Тон Спэйс (reply to 177959)

Investing: https://tonviewer.com/EQA0nYFj_Wm9D4YS7JvoRLwZd7Cj4rVC0qsLAXnBkbSmuLR3  Они вот застряли на временном коше ( я так понимаю). Тон доехал , а грамм там висит теперь

Maksym: Прикол, т.е. поддержка имеет доступ к сид-фразам?)

✨ Uni: ну они в любом случае знают кому этот запрос передать (reply to 177963)

Maksym: Будешь ходлить )) (reply to 177962)

Investing: 😅 да скорее всего не достать, так просто знакомлюсь еще с этой всей системой (reply to 177965)

VIKTOR: Поддержка запишет вас в очередь и может их разработчики добавят жетоны, но пока они записывают людей с фразой ожидайте (reply to 177963)

✨ Uni: меня оч устойчиво игнорят в тон комьюнити чате, может шарит кто, как ебаный гетгемс паспорт нфт залутать?

Investing: Спасибо за совет (reply to 177967)

Investing: Да прочитал в тех поддержке, что данные токены(жетоны) будут утеряны безвозвратно

✨ Uni: попытка не пытка, попробуй напиши

VIKTOR: Формулировка ожидайте, сменилась, "а нафига оно нам надо😅" (reply to 177971)

Investing: Там вот такая формулировка : Обратите внимание: Если вы отправите жетоны на адрес Wallet, они будут утеряны, поскольку кастодиальный сервис их не поддерживает. (reply to 177973)

Investing: Интересно как много людей в первые зашедшие в Тон криптоактивы , будут терять свои средства)

VIKTOR: Это нормально. Люди учатся на своих ошибках. (reply to 177975)

Investing: Согласен полностью, а тонкипер более удобен в обращение? Чем стандартные кошельки спэйс и стандарт тг (reply to 177976)

VIKTOR: На мой взгляд, да. (reply to 177977)

Dmitry | backend4you.ton: Не обязательно, у них могут быть инструменты. Но больше прикольно то  что вы то НЕ имеете :) (reply to 177963)

Denis: Друзья, ищем go разработчика, в дополнение к go надо шарить за тон, tlb, и лайт сервера/клиенты. Уровень middle+. Знание тендерминт - большой плюс. Строго фуллтайм. Заинтересовались - резюме в личку. У нас много вкусных задач по бирже, сиквенсерам, оракулам итд.

Gifter: Всем привет, требуется разработчик простенького смарт контракта. Детали в личку.

Alpha: Всем привет! Нужен собственный buybot под проект. Детали в ЛС.

Kio: Время суток доброе Из присутствующих здесь кто-то делал форк ton-blockchain/ton?

🎐*<@Maxim: какой самый бюджетный вариант для testnet lite-server? а то уже устаешь от ошибок Error: no healthy nodes for v4-testnet  ?

Ihor: Это явно публичный ключ, полученный через get_pubilc_key() и префикс. Насколько я понимаю, в ТОН адресах публичный ключ так не увидишь просто (reply to 177383)

Dmitry | backend4you.ton: т.е. вы взяли пабилик-ключ из кошелька, а "еще откуда-то" взяли префикс. И теперь (судя по исходному сообщению) хотите "расшифровать префикс публичного ключа". Но ведь пбличный ключ вы взяли из кошелька "без префикса" - что же вы хотите расшифровать то? (reply to 178006)

Dmitry | backend4you.ton: (просто префикс есть у "адреса" в user-friendly виде, тот ктоорый EQ/UQ/..., и у ещё адреса есть суффикс (контрольнная сумма), а вот у ключа я не припомню префиксов)

Ihor: Примерно так, человек прислал публичный ключ с таким префиксом и для того чтобы проверить что это тот-же публичный ключ в идеале надо понять что это за префикс и как его сгенерировать (reply to 178007)

Dmitry | backend4you.ton: а откуда человек "придумал" этот префикс? в ТОНе пубключ это биты ключа. (reply to 178012)

Dmitry | backend4you.ton: вы б хоть пример может какой показали...

Ihor: Я хотел узнать существует ли какой-то алгоритм его создания, но как понял такого нет и остается узнавать у того кто такое сгенерировал. Пример к сожалению не могу прислать, спасибо за ваши ответы (reply to 178013)

Dmitry | backend4you.ton: просто сейчас выглядит так что поьлзователь, у коотрого вы попросили пубключ, прислал вам пубключ плюс какую-то хню, и вы пытаетесь у нас узнать как расшифровать эту хню, которую придумал пользователь и которая к пубключу отношения не имеет с точки зрения ТОНа (reply to 178016)

Ihor: Так и есть😅 (reply to 178019)

🎐*<@Maxim: сколько минимально гигабайт нужно для лайт-сервера (для тестнета) чтобы не очень дорого вышло?

🎐*<@Maxim: привет, в инструкции написаны https://docs.ton.org/participate/run-nodes/full-node требования 1Тб , но для full-node, вы не подскажите сколько реально нужно для lite-node гб? чтобы не слишком дорого вышло при покупке сервера

ilmir: Привет,а что дает поднятие своей ноды ? (reply to 178022)

🎐*<@Maxim: Я так понимаю буду использовать не публичные сервера , а свой для blueprint (reply to 178029)

ilmir: для тестов получается ? (reply to 178030)

🎐*<@Maxim: Пока да (reply to 178031)

ilmir: а как еще ноду можно использовать ? (reply to 178032)

🎐*<@Maxim: Для запросов ton-http-api (reply to 178033)

slavagm: Долго ещё будешь так? (reply to 178036)

User<6365803117>: пока не найду достаточно предложений (reply to 178037)

EmirNonstop: Привет  Кто работал с high load кошельками?  Есть ли разница в использовании ?

Andrey: Их не рекомендуется использовать, они опасные (reply to 178049)

🎐*<@Maxim: Почему не нужно уведомлять collection при сжигании nft? (по аналогии с жетонами)

&rey: Потому что она не хранит список всех нфт. (reply to 178054)

User<6908616126>: Lite не будет работать, сейчас можно запустить только full (reply to 178026)

🎐*<@Maxim: зачем нужна send_royalty_params() которая возвращает тоже что и  get_royalty_params()?

🎐*<@Maxim: а сколько гб у тебя full заняла? (reply to 178057)

User<6908616126>: Не смотрел, на диске 100 было, работало все хорошо (reply to 178059)

🎐*<@Maxim: 2 ОЗУ и 2 ЦПУ? (reply to 178061)

🎐*<@Maxim: а если я просто себе локально поставлю, то ведь будет все работать, верно, без сервера? (reply to 178061)

User<6908616126>: Да (reply to 178063)

User<6908616126>: 16 цпу 32 озу😁 (reply to 178062)

Владислав: Всем привет, кто может помочь с четырьмя заданиями в TON Blockchain Сourse ?

&rey: Ончейн отправляет это в ответ на запрос. Должно, как минимум. (reply to 178058)

❤️🐾 🏰 Tower: Создать приложение для туризма с данной функцией (reply to 178070)

❤️🐾 🏰 Tower: Чем поделиться 🤔? (reply to 178072)

❤️🐾 🏰 Tower: Ага (reply to 178075)

❤️🐾 🏰 Tower: Так добавь кошель в бота и пусть переводят (reply to 178081)

❤️🐾 🏰 Tower: https://docs.ton.org/develop/dapps/cookbook (reply to 178085)

&rey: Это с каких пор в тоне небезопасно подключать кошелёк? (reply to 178084)

&rey: В EVM проблемы понятны, а в тоне что?

&rey: Какие проблемы, пока транзакции не начинаешь подтверждать? (reply to 178095)

&rey: Неправильной эмуляции вроде ещё не изобрели.

rends_east: а где нет подключения кошелька? (reply to 178084)

&rey: И да, в тоне для оплаты совершенно не обязательно требовать с клиента подключение кошелька, да и его адрес вообще. Можно же дать инвойс в виде ton://transfer/<MY_SALE>?...

❤️🐾 🏰 Tower: Верно (reply to 178105)

&rey: А у меня ещё вопрос, уже другой. Многие ли NFT коллекции позволяют минтить нфт, не указывая её номер (просто минтить следующую по порядку)?

nonam3e: новый контракт гемсов позволяет делать batch deploy без указания индекса (reply to 178114)

&rey: Надо минтить по запросу юзера, который даёт адрес. В принципе, деньги можно тратить и с кошелька хозяина коллекции.  Чисто теоретический сценарий, в котором я пытаюсь выписать точный трейс, что обязан сделать код. (reply to 178117)

nonam3e: не все кошельки полностью поддерживают, mytonwallet с bin не работает (reply to 178105)

Komron: Всем привет, в случае чего tonconnect выдает unable to verify transaction, и как это решить ?

redemption: привет! есть ли здесь те, кто разбираются в смарт-контрактах? нужна помощь!

­😇: Извиняюсь за офтоп конечно, а знает кто, у raffl поддержка вообще отвечает?

Оксана: Добрый день!   Организуем в Санкт-Петербурге инвестиционный форум, хотим осветить вопрос экосистемы Toncoin, в секции про криптовалюту  Можете порекомендовать кого-нибудь спикером на эту тему?

Максим Новиков: Всем привет, нужен разработчик в команду, стек - ton api, ton connect, python3.11

Dmitry: Меня можем (reply to 178135)

Оксана: Написала в личку (reply to 178137)

Dmitry: Подскажите, пожалуйста, как сейчас тестнет кошелек создать? В тонкипере в тестнет только добавить существующий можно?

slavagm: Мнемонику от кошелька в мейннете вводишь и все (reply to 178141)

Dmitry: Мне нужно создать тестнет кошелек (reply to 178142)

slavagm: Создай мейннет кошелёк и введи мнемонику от мейннет кошелька (reply to 178143)

Zaphod: Произвольный сид введи. Не рекомендую категорически использовать сиды от мейннета, где деньги лежат) (reply to 178143)

Dmitry: Получилось, благодарю) (reply to 178144)

Dmitry: благодарю) (reply to 178145)

slavagm: Прям что угодно писать можно? (reply to 178145)

Dmitry: Нет, только реальные сиды (reply to 178148)

Kamil': Если поднять архивную ноду, можно как-то вытаскивать стейт контракта на определенный блок? Условно: client.run_get_method("get_pool_data", block=500)

Mvo: подскажите какую минимальную комиссию можно выставить что бы транзакция с пересылкой жетона прошла ?

Vladislav: Всем доброго времени суток, добрые люди 👋🏻)   Меня зовут Владислав, и я своего рода «идейный представитель». Хороших идей у меня много и, что соответственно, много возможных проектов и все беспроигрышные.   Но я нуждаюсь в вашей помощи и сотрудничестве.   Я хочу собрать коллегию мощных, сильных, изощренных в своем деле мастодонтов программирования 🚀  Объединив наши усилия мы повлияем на ход, быстро развивающейся в наше время, истории ❗️  (P.S. Личные сообщения 🤝)

Denis: не накладывает (reply to 178177)

Denis: крупные проекты с миллионными TVL живут с такой пометкой и не парятся. парятся преимущественно скамеры всякие

Denis: нет.

Roma: Всем привет! КТо-нибудь знает адрес поддержки Fragment? Юзеры написывают по вопросам, не знаем что с ними делать.

Denis: неа. я предлагаю всех направлять в bugs.telegram.org

VIKTOR: ответ будет приблизительно никогда) (reply to 178190)

User<6638643141>: всем доброй ночи! у меня проблема, пишу тг бота по документации (TON Connect for Telegram Bots), чтобы подключать кошелек и отправлять транзакции. но в ходе разаработки (а я просто cmd + c и cmd + v куски кода) выходит очень много ошибок. думаю, что документация написана с ошибками. есть тут тот, кто сможет мне помочь? написать готовый и рабочий код?

Vladimir: Т.е. ты просто скопировал-вставил, но при этом решил, что в документации ошибка? (reply to 178202)

User<6638643141>: ну я все необходимые биболиотеки скачал, писал все как в документации

slavagm: что не работает? (reply to 178202)

Егор: Всем приятного вечера. Ребята, картинку кто-то отправлял с планами на набор юзеров TON. У кого есть - отправьте пожалуйста.

?: Доброй ночи. Помогите пожалуйста с 3.2 пунктом в TON Blockchain Сourse.

Kamil': Справедливости ради, документация действительно давно не обновлялась (reply to 178203)

Vladimir: Думаю там не документация TON, а какой-нибудь библиотеки сторонней. (reply to 178210)

User<6638643141>: https://docs.ton.org/develop/dapps/ton-connect/tg-bot-integration

slavagm: а, ну что там с js вообще черт его знает...

User<6638643141>: у меня просто в ходе разработки выделяются некоторые моменты красным, хотя пишу все по документации..

User<6638643141>: у меня там уже 23 ошибки..

slavagm: ты бы ошибки показал (reply to 178215)

slavagm: экстрасенсов тут вроде нету)

User<6638643141>: фотку не могу кинуть

slavagm: кинь текстом обернув в ```

User<6638643141>: [{  "resource": "/Users/mac/Desktop/ton-app/src/commands-handlers.ts",  "owner": "typescript",  "code": "2304",  "severity": 8,  "message": "Cannot find name 'pTimeout'.",  "source": "ts",  "startLineNumber": 53,  "startColumn": 5,  "endLineNumber": 53,  "endColumn": 13 },{  "resource": "/Users/mac/Desktop/ton-app/src/commands-handlers.ts",  "owner": "typescript",  "code": "7006",  "severity": 8,  "message": "Parameter 'e' implicitly has an 'any' type.",  "source": "ts",  "startLineNumber": 70,  "startColumn": 16,  "endLineNumber": 70,  "endColumn": 17 },{  "resource": "/Users/mac/Desktop/ton-app/src/commands-handlers.ts",  "owner": "typescript",  "code": "2304",  "severity": 8,  "message": "Cannot find name 'pTimeoutException'.",  "source": "ts",  "startLineNumber": 71,  "startColumn": 23,  "endLineNumber": 71,  "endColumn": 40 },{  "resource": "/Users/mac/Desktop/ton-app/src/commands-handlers.ts",  "owner": "typescript",  "code": "2304",  "severity": 8,  "message": "Cannot find name 'UserRejectsError'.",  "source": "ts",  "startLineNumber": 76,  "startColumn": 30,  "endLineNumber": 76,  "endColumn": 46 },{  "resource": "/Users/mac/Desktop/ton-app/src/commands-handlers.ts",  "owner": "typescript",  "code": "2552",  "severity": 8,  "message": "Cannot find name 'getWalletInfo'. Did you mean 'walletInfo'?",  "source": "ts",  "startLineNumber": 86,  "startColumn": 30,  "endLineNumber": 86,  "endColumn": 43,  "relatedInformation": [   {    "startLineNumber": 86,    "startColumn": 11,    "endLineNumber": 86,    "endColumn": 21,    "message": "'walletInfo' is declared here.",    "resource": "/Users/mac/Desktop/ton-app/src/commands-handlers.ts"   }  ] },{  "resource": "/Users/mac/Desktop/ton-app/src/commands-handlers.ts",  "owner": "typescript",  "code": "2552",  "severity": 8,  "message": "Cannot find name 'getWalletInfo'. Did you mean 'getWallets'?",  "source": "ts",  "startLineNumber": 137,  "startColumn": 16,  "endLineNumber": 137,  "endColumn": 29 },{  "resource": "/Users/mac/Desktop/ton-app/src/commands-handlers.ts",  "owner": "typescript",  "code": "2304",  "severity": 8,  "message": "Cannot find name 'toUserFriendlyAddress'.",  "source": "ts",  "startLineNumber": 143,  "startColumn": 59,  "endLineNumber": 143,  "endColumn": 80 },{  "resource": "/Users/mac/Desktop/ton-app/src/commands-handlers.ts",  "owner": "typescript",  "code": "2304",  "severity": 8,  "message": "Cannot find name 'CHAIN'.",  "source": "ts",  "startLineNumber": 145,  "startColumn": 49,  "endLineNumber": 145,  "endColumn": 54 }]

User<6638643141>: ой

User<6638643141>: "resource": "/Users/mac/Desktop/ton-app/src/connect-wallet-menu.ts",  "owner": "typescript",  "code": "2304",  "severity": 8,  "message": "Cannot find name 'callbacks'.",  "source": "ts",  "startLineNumber": 29,  "startColumn": 10,  "endLineNumber": 29,  "endColumn": 19 },{  "resource": "/Users/mac/Desktop/ton-app/src/connect-wallet-menu.ts",  "owner": "typescript",  "code": "2304",  "severity": 8,  "message": "Cannot find name 'callbacks'.",  "source": "ts",  "startLineNumber": 29,  "startColumn": 51,  "endLineNumber": 29,  "endColumn": 60 },{  "resource": "/Users/mac/Desktop/ton-app/src/connect-wallet-menu.ts",  "owner": "typescript",  "code": "2304",  "severity": 8,  "message": "Cannot find name 'callbacks'.",  "source": "ts",  "startLineNumber": 33,  "startColumn": 5,  "endLineNumber": 33,  "endColumn": 14 },{  "resource": "/Users/mac/Desktop/ton-app/src/connect-wallet-menu.ts",  "owner": "typescript",  "code": "2304",  "severity": 8,  "message": "Cannot find name 'callbacks'.",  "source": "ts",  "startLineNumber": 33,  "startColumn": 46,  "endLineNumber": 33,  "endColumn": 55 },{  "resource": "/Users/mac/Desktop/ton-app/src/connect-wallet-menu.ts",  "owner": "typescript",  "code": "2339",  "severity": 8,  "message": "Property 'bridgeUrl' does not exist on type 'WalletInfo'.\n  Property 'bridgeUrl' does not exist on type 'WalletInfoInjectable'.",  "source": "ts",  "startLineNumber": 120,  "startColumn": 35,  "endLineNumber": 120,  "endColumn": 44 },{  "resource": "/Users/mac/Desktop/ton-app/src/connect-wallet-menu.ts",  "owner": "typescript",  "code": "2339",  "severity": 8,  "message": "Property 'universalLink' does not exist on type 'WalletInfo'.\n  Property 'universalLink' does not exist on type 'WalletInfoInjectable'.",  "source": "ts",  "startLineNumber": 121,  "startColumn": 39,  "endLineNumber": 121,  "endColumn": 52 }]

User<6638643141>: вот еще

User<6638643141>: "resource": "/Users/mac/Desktop/ton-app/src/main.ts",  "owner": "typescript",  "code": "2395",  "severity": 8,  "message": "Individual declarations in merged declaration 'walletMenuCallbacks' must be all exported or all local.",  "source": "ts",  "startLineNumber": 9,  "startColumn": 10,  "endLineNumber": 9,  "endColumn": 29 },{  "resource": "/Users/mac/Desktop/ton-app/src/main.ts",  "owner": "typescript",  "code": "2440",  "severity": 8,  "message": "Import declaration conflicts with local declaration of 'walletMenuCallbacks'.",  "source": "ts",  "startLineNumber": 9,  "startColumn": 10,  "endLineNumber": 9,  "endColumn": 29 },{  "resource": "/Users/mac/Desktop/ton-app/src/main.ts",  "owner": "typescript",  "code": "2395",  "severity": 8,  "message": "Individual declarations in merged declaration 'walletMenuCallbacks' must be all exported or all local.",  "source": "ts",  "startLineNumber": 11,  "startColumn": 14,  "endLineNumber": 11,  "endColumn": 33 },{  "resource": "/Users/mac/Desktop/ton-app/src/main.ts",  "owner": "typescript",  "code": "2304",  "severity": 8,  "message": "Cannot find name 'onWalletClick'.",  "source": "ts",  "startLineNumber": 13,  "startColumn": 20,  "endLineNumber": 13,  "endColumn": 33 },{  "resource": "/Users/mac/Desktop/ton-app/src/main.ts",  "owner": "typescript",  "code": "2304",  "severity": 8,  "message": "Cannot find name 'onOpenUniversalQRClick'.",  "source": "ts",  "startLineNumber": 14,  "startColumn": 19,  "endLineNumber": 14,  "endColumn": 41 },{  "resource": "/Users/mac/Desktop/ton-app/src/main.ts",  "owner": "typescript",  "code": "2304",  "severity": 8,  "message": "Cannot find name 'CallbackQuery'.",  "source": "ts",  "startLineNumber": 17,  "startColumn": 43,  "endLineNumber": 17,  "endColumn": 56 },{  "resource": "/Users/mac/Desktop/ton-app/src/main.ts",  "owner": "typescript",  "code": "4078",  "severity": 8,  "message": "Parameter 'query' of exported function has or is using private name 'CallbackQuery'.",  "source": "ts",  "startLineNumber": 17,  "startColumn": 43,  "endLineNumber": 17,  "endColumn": 56 },{  "resource": "/Users/mac/Desktop/ton-app/src/main.ts",  "owner": "typescript",  "code": "2304",  "severity": 8,  "message": "Cannot find name 'handleSendTXCommand'.",  "source": "ts",  "startLineNumber": 44,  "startColumn": 25,  "endLineNumber": 44,  "endColumn": 44 },{  "resource": "/Users/mac/Desktop/ton-app/src/main.ts",  "owner": "typescript",  "code": "2304",  "severity": 8,  "message": "Cannot find name 'handleDisconnectCommand'.",  "source": "ts",  "startLineNumber": 45,  "startColumn": 28,  "endLineNumber": 45,  "endColumn": 51 },{  "resource": "/Users/mac/Desktop/ton-app/src/main.ts",  "owner": "typescript",  "code": "2304",  "severity": 8,  "message": "Cannot find name 'handleShowMyWalletCommand'.",  "source": "ts",  "startLineNumber": 46,  "startColumn": 27,  "endLineNumber": 46,  "endColumn": 52 },{  "resource": "/Users/mac/Desktop/ton-app/src/main.ts",  "owner": "typescript",  "code": "1005",  "severity": 8,  "message": "'}' expected.",  "source": "ts",  "startLineNumber": 46,  "startColumn": 54,  "endLineNumber": 46,  "endColumn": 54,  "relatedInformation": [   {    "startLineNumber": 17,    "startColumn": 84,    "endLineNumber": 17,    "endColumn": 85,    "message": "The parser expected to find a '}' to match the '{' token here.",    "resource": "/Users/mac/Desktop/ton-app/src/main.ts"   }  ] },{  "resource": "/Users/mac/Desktop/ton-app/src/main.ts",  "owner": "typescript",  "code": "6133",  "severity": 4,  "message": "'query' is declared but its value is never read.",  "source": "ts",  "startLineNumber": 17,  "startColumn": 36,  "endLineNumber": 17,  "endColumn": 41,  "tags": [   1  ] }]

User<6638643141>: последнее

Sasha: Ребят, есть те кто не сильно нагружен?  Нужно разработать WebApp бота со смарт-контрактами  Писать в лс

Kamil': Ну эти ошибки вряд ли с документацией связаны, похоже на то, что ты что-то неправильно установил (reply to 178226)

🌊 .·:*¨ᑌ𝕢ē𝗿пàϻē¨*:·. 🌊: 😢

?: При возможности - попрошу дать мне ответ (reply to 178209)

Vlad: Приветствую, кто нибудь в свинды в vs code тестил смарты на такте?

Daniil: Кто может объяснить в чем проблема блядского bybit, почему именно с него вывод ТОНа занимает 12 часов, а между некастодиальными кошельками транзакции минуту занимают?

— 2024-04-02 —

𝐊𝐫𝐢𝐩𝐬𝐚ᴷʳᶦᵖˢ: Экосистему тона знать надо) (reply to 178250)

𝐊𝐫𝐢𝐩𝐬𝐚ᴷʳᶦᵖˢ: Вообще структуру *блокчейна* тона

𝐊𝐫𝐢𝐩𝐬𝐚ᴷʳᶦᵖˢ: Условно, как я полагаю, проблема экосистемы и является проблемой долгих транзакций.

MyTonWallet · News: Уже работает. (reply to 178119)

Павел: Друзья, привет!  Создал новый жетон в качестве акций компании. В связи с этим вопрос:  Как сделать так, чтоб приложение «Кошелёк» перестало отображать надпись «У сообщества нет информации по данному жетону» и начало доверять жетону? А приложение “TonKeeper” перестало отображать надпись «Непроверенный токен»… Какие минимальные требования? Может, есть документация, где это описано?

Андрей: Говорит человек который его не знает 😁 (reply to 178254)

Павел: Интересна эта тема, можем обсудить подобный проект, если нет готового (reply to 178130)

Павел: Попробуйте обратиться к людям, у которых есть контакты на сайте сообщества (reply to 178135)

Павел: Любую фразу (24 слова) можно превратить в адрес кошелька и приватный ключ (reply to 178143)

Павел: Тоже интересует этот вопрос. Нашёл какое-то решение? (reply to 178176)

Павел: Не скажи. Вот я хочу выплачивать акции компании партнёрам в жетонах - присылаю акции с пометкой “Возможно SCAM” новому партнёру, какое у него впечатление будет о проекте, с которым он знакомится? (reply to 178179)

Павел: Почитать про import нужно просто (reply to 178226)

Павел: Есть ссылка на него? (reply to 178209)

Denis: Там такой пометки нет (reply to 178276)

Павел: В приложении «Кошелёк» написано наименование токена SCAM и текст «У сообщества нет информации по данному жетону». Да, создавал не я. Возможно имя просто можно сменить, но можно ли что-то сделать с надписью? (reply to 178279)

Denis: Там или SCAM или "не проверенный токен". "Вероятно SCAM" не бывает. (reply to 178281)

Denis: В первом случае рекомендую не копировать тикеры других популярных проектов в тон

Павел: Понял, «тикер» это картинка? Картинку просто сменить нужно? (reply to 178283)

User<1058556253>: BTC, ETH, TON - это тикеры (reply to 178284)

Павел: Понял, спасибо! Видимо такое название уже есть (reply to 178285)

Павел: Спасибо! (reply to 178283)

Павел: @goduni @pcrafter человек вообще впервые видит блокчейн Ton и создал жетон через minter.ton.org, в котором использовал тикер, который уже есть в блокчейне “X-token”. Получил пометку “SCAM”. Он просто не знал, что такой жетон уже есть… Как ему было узнать, что такой жетон уже есть? Система никак об этом не сообщает…

Dmitry | backend4you.ton: Если человек впервые видит и сразу создал - я был бы согласен с пометкой :)

Dmitry | backend4you.ton: Вообще имхо имеет смысл Тонкиперу рядом с надписью непроверенный/скам на экране инфы о жетоне дать ссылку «почему» и перестать по сто раз отвечать в чате )

Павел: И в кошельке “Ton Space” тоже (reply to 178292)

Аслан: Ребят всем привет у меня вопрос я вот вижу делают приложения с монетками в Телеграм как мне сделать монетку как мне сделать плагин для монетки на сайте чтобы одну монетку конвертировать в другую

Аслан: У меня есть проект авто серфинга занимаюсь проектом один уже ну где то годика 3 и сейчас вижу идет тенденция создание игр для сбора монет я подумал а почему бы и нет )

Torkusz: Всем привет! Как сделать OnChain коллекцию?

Аслан: Да тут вроде никто не поможет я вот уже пару минут жду кого ни будь

Аслан: Хочу создать свою монетку в тг или через тг я просто вообще ничего не знаю про это все просто идея игры тонкоин мне понравилась и я решил это применить в своем проекте

Nuncvc1v0: Просто не понятно как это связано с TON, на прямую. Либо я не верно понял задание. (reply to 178296)

&rey: У вас картинки в нфт одинаковые или нет? (reply to 178300)

Аслан: Я тоже пока не понимаю я только вот ищу инфу как что куда (reply to 178303)

&rey: https://github.com/ProgramCrafter/onchain-nft-collectioned (reply to 178300)

Torkusz: Нет Но можно и на примере одной (reply to 178304)

&rey: collectionless: https://gist.github.com/ProgramCrafter/704886244271f004319951a5e8eaa241#file-multinft-py-L51 (reply to 178307)

Nuncvc1v0: Напиши в лс что хочешь видеть и иметь, может помогу. Что б не засорять чатик (reply to 178305)

Аслан: ага Хорошо я отправил голосовое (reply to 178309)

Аслан: В общем мне ребята надо сделать вот такую вещь у меня на проекте есть заработок поинтов для того чтобы человек смог показывать сой сайт проект называется LION SURF  ну или Русскими Лион Серф / Лион Сурф / Леон Серф безразници сразу выдаст вам можете посмотреть что можно придумать. Сразу скажу бюджета нет проект не коммерческий доступен для всех ничего платить не надо. Хотел бы добавить еще и свою монетку которая предала проекту цену в плане чтобы люди смогли зарабатывать через продажу валюты или использовании ее внутри проект для тех кто не хочет смотреть сайты а хочет продвигать сайт хотя я пока не совсем понимаю как сделать так чтобы проект оставался не Коммерсом

Kamil': Ты не понимаешь, что для того, чтобы люди смогли продать эти токены, тебе сначала надо залить ликвидность на биржу, а без бюджета это не сделать (reply to 178312)

Vladimir: Может и с ликвидностью кто-то поможет. (reply to 178313)

Аслан: Слушайте ребят я просто не вкурсе всех этих тем так что не судите строго

Аслан: По этому я и тут если бы я понимал

Аслан: Ну раз нельзя значит нельзя пойду другим путем создам еще проект где можно будет покупать трафик  создам сою внутреннюю переводчику фантиков которые люди будут получать от стороннего проекта реальные деньги  при таком раскладе мой проект останется не коммерческим и доступным для всех и как приятный бонус можно будет не только раскручивать сайты но и получать какую ни будь копеечку 👍  Пройдем бочком ))

Аслан: Ладно спасибо ребята за подсказку

Аслан: Божьего Благословения всему чату  🕊

Nixuds: Ищу партнёра в проект на подобии ноткоин, сам бот уже готов на 70% (копия полная) нужны средства на дизайн уникальный и маркетинг. Готов предоставить пример готового бота в личные сообщения. Также готов рассмотреть продажу исходников или разработку под конкретный проект.

I: Добрый день. Знающие люди подскажите можно ли узнать цену nft если транзакция смарт контракта еще в статусе pending? Ато доказывают что можно как то высчитать по комиссия и газу

ALEX: Здравсвуйте, ищу прогграмистов на хакатон.

Павел: Поделишься информацией? (reply to 178336)

ALEX: Нужны JS, Front-end разрабы.

Vladislav: Всем доброго времени суток, добрые люди 👋🏻)   Меня зовут Владислав, и я своего рода «идейный представитель». Хороших идей у меня много и, что соответственно, много возможных проектов и все беспроигрышные.   Но я нуждаюсь в вашей помощи и сотрудничестве.   Я хочу собрать коллегию мощных, сильных, изощренных в своем деле мастодонтов программирования 🚀  Объединив наши усилия мы повлияем на ход, быстро развивающейся в наше время, истории ❗️  (P.S. Личные сообщения 🤝)

Vlad: Привествую, у кого есть контракт на минт нфтшек в коллекции на 100+ шт разом?

I: Помогите кто знает (reply to 178337)

Winnie Pooh: Привет, прошу прощения за свою неосведомленность.  Подскажите, если мне нужно регулярно (50-100) раз в месяц чеканить нфт и также их сжигать в такихже количествах.  Мне 1 смартконтракт нужен или для каждого нфт свой контракт?  И еще вопрос, если я хочу все нфт объединить в 1 коллекцию, тоже отдельный контракт же нужен? Или при чеканки указываю

Flyheck: Каждая nft является отдельным смарт-контрактом. Каждая nft чеканится общим смарт-контрактом (reply to 178352)

Mr.: Добрый день) Ищу поддержки в решении вопроса. Выставил свой username на аукцион через fragment. Прогнал по всем возможным мануалам, которые есть на просторах поисковых систем. В итоге при выставлении минимальной ставки и в тон кипер и в тон Спейс фиксируется транзакция, но средства возвращаются обратно на кошелёк с вычетом комиссии, а аукцион не запускается. Выдаёт на fragment такое сообщение: "Запрос отправлен. Ваша ставка появится в истории ставок, как только транзакция будет успешно записана в блокчейне.". После закрытия окна аукцион не запускается, предлагает снова сделать минимальную ставку, как и в начале. И этот круг сатаны каждый раз списывает часть тонов. Кто что знает про это и кто чем может помочь?)

.: при деплое сейл контракта нужно ли деплоить marketplace?

Илья: Здравствуйте, а кто-то знает, что может означать TVM код ошибки 130? Посылаю с контракта сообщение с модами SendRemainingBalance+SendIgnoreErrors, чтобы обнулить контракт. На тестах в блупринте не падает, в тестнете такая ошибка https://testnet.ton.cx/tx/20436314000005:pSf8nQWKB44lGzhczDaisPkLZx/QbgEp3GcOia66sI8=:kQBfc7Le3zjyREglC8A45vr6VMM5Yx0pTSo0Ol-c7kpci7kZ

.: кто как деплоит сейл контракт подскажите (reply to 178362)

Amir: Добрый день! Мы активно развиваемся в сфере цифровых технологий и ищем FullStack-разработчика для участия в одном из наших самых захватывающих проектов - запуске собственной криптовалюты компании.  Мы предлагаем уникальную возможность стать частью команды, которая будет создавать что-то действительно инновационное и перспективное. Наш проект не только позволит вам применить свои навыки и знания на практике, но и даст возможность внести свой вклад в развитие криптовалютного рынка.  Сам проект: https://nobby.game  Если вы заинтересованы в таком предложении, то я бы хотел пригласить вас на подробное обсуждение вакансии. Пожалуйста, перейдите по ссылке: https://hh.ru/vacancy/93306068?hhtmFrom=employer_vacancies Надеюсь увидеть вас в нашей команде мечты! С наилучшими пожеланиями, Амир

.: кто нибудь (reply to 178370)

Dmitry GX: привет

Dmitry GX: подскажите плз где получить апикей от https://toncenter.com/api/v2/#/

Isabella: Ребят привет.  Подскажите пожалуйста,  можно ли код Solidity деплоить в ТОN?

Zaphod: Это вряд ли. Виртуальные машины принципиально разные (reply to 178402)

Denis: Ор. Я сегодня аккурат перед анонсом DeWallet погасил наконец окончательно тонапи v1. По этому в делаб воллет не работает история. Потому что оно сидело на старой версии tonapi.io (reply to 1150)

Ruslan: @tonapibot (reply to 178400)

ᅠ ᅠ: народ,делаю транзу перевода токена и она не успешна,можно ж где-то посмотреть и узнать почему это так случилось?

NMC: Друзья хочу в команду!

web-assist 🧀: Привет всем, у меня есть облачный сервер, кто может помочь настроить его под .ton domain?

Roki: Подскажите какой сейчас минимум стейка для соло валидаторов? Все те же 300к?

Андрей: 350к (reply to 178423)

Кирилл: Дизинфа (reply to 178405)

Denis: я очень талантлив в фотошопе, но у меня линукс а гимпом я гораздо менее талантлив

ᅠ ᅠ: https://tonviewer.com/transaction/89d7fc97eb9a55518fe6e7551f5caf854f5f44f392bb45284b80395bd8f5a1d1 exit code 705 из контракта кошелька (reply to 178429)

web-assist 🧀: Так, пользователи не могут попасть сразу на .ton сайт? Им надо перед этим обратные прокси настраивать?

Dmitry | backend4you.ton: идёте в кошелек , переключаетесь на вкладку code https://tonviewer.com/EQAUqrVSskvVt9v1hQJ-WG8JaDY3i1aO3mBav-Z8OJM-ZdeK?section=code и ищете (Ctrl+F) значение 705 (reply to 178438)

Dmitry | backend4you.ton: находите строчку throw_unless(705, equal_slices(owner_address, sender_address));  что означает что жетон-кошелек не признал что вы (отправитель) его владелец. либо не с того кошелька послали, либо не на тот жетон-кошелек (reply to 178443)

ᅠ ᅠ: Хм, спасибо большое

Отец: Доброго времени суток, не подскажите, как быть если не успел обменять ноткоин на TON?

Dmitry | backend4you.ton: продолжаем. на кошельке переключаешься на methods, там уже вписано get_wallet_data так что просто жмешь execute видишь в ответе owner значение 0:a7ff67430c9164386128a2d8de2a809659c40818ff9bfdad7f3317a352cf6e80, копируешь его, идёшь на ton.org/address и вставляешь  получаешь адрес EQCn_2dDDJFkOGEootjeKoCWWcQIGP-b_a1_MxejUs9ugK_V - это тот кого этот жетонваллет считает владельцем.  а ты отправляешь с UQDVZN_YbJ9wqwJ0TguXnj1ZatLaeRrdsrGKEDVW0QjvU0Z_  так что вопрос - сфигали ты собираешься украсть чужие токены? :) (reply to 178445)

ᅠ ᅠ: Я просто пытаюсь сделать в моем dapp отправку этого жетона), проблема возникла именно с этим валетом тонкипера (reply to 178448)

slavagm: Просто прописываешь айпи машины в dns по идее и всё (reply to 178420)

slavagm: Ну конфиг для nginx написать там ещё  Хотя не уверен как вообще работает управление доменами на тон, может не прав..

slavagm: Да, похоже не прав https://docs.ton.org/develop/dapps/tutorials/how-to-run-ton-site

Winnie Pooh: Без прокси или впн на ваш домен тон все равно никто не попадет.  Уверены что вам это сейчас нужно? (reply to 178420)

under: Здравствуйте!  Переводил тоны из тон спейс в тон, внутри кошелька wallet - тоны не дошли, все адреса верные

Dmitry | backend4you.ton: там есть кнопка "Поддержка" в главном меню, попробуйте нажать (reply to 178460)

Lapis⁴² 💎: Здравствуйте, зачем нужно поле response_address в request_transfer при переводе жетонов? Для bounce?

Lapis⁴² 💎: Мне кажется что TON сайты это ONION сайты, а TON Storage это торренты. Пиратим с TON 😁 (reply to 178456)

Lapis⁴² 💎: Я имею ввиду что их никто не цензурирует (reply to 178469)

Andrey: ну в целом концепция похожая да, а еще тон сайты на тон сторедже хостить (reply to 178469)

Lapis⁴² 💎: Получается РКН и подобные службы могут заблокировать TON, используя это в качестве предлога? (reply to 178472)

vh1dz: Добрый день, создал щас токен на minter.ton.org. Как сделать чтобы токен имел хоть какую то цену. Не шарю за это.

Andrey: а как они заблокируют TON? (reply to 178473)

Кумир молодежи: Ребята, привет. Кто-нибудь имел дело с fairlaunch от raffles? ПЛИЗ

Andrey: максимум могут ton.org заблокировать, не более)

Lapis⁴² 💎: Ну не весь, но к публичным лайтсерверам могут доступ обрезать (reply to 178475)

Lapis⁴² 💎: Добавить ликвидность на DEX бирже, например dedust.io или ston.fi. Лучше погугли о том как работают DEX и ликвидность перед этим. (reply to 178474)

Winnie Pooh: Проблема в том, что ты сам себя уже заблокировал.  Никто из интернета не сможет посмотреть твой сайт, за исключением тех кто поставит прокси или впн сети тон.  Т. Е ты все сам сделал за ркн (reply to 178473)

Lapis⁴² 💎: А, реально ведь *neuron activation* (reply to 178480)

Lapis⁴² 💎: С другой стороны, TOR ведь тоже блокируют

Lapis⁴² 💎: *пытаются (reply to 178482)

Winnie Pooh: Выведи его на декс и начни покупать сам у себя.  За сколько купишь столько и начнется торг (reply to 178474)

Lapis⁴² 💎: Легче ведь просто ликвидность в нужном соотношении поставить (reply to 178484)

Winnie Pooh: Ну да, я про это и говорю, но все равно нужно будет купить сам у себя, чтобы запустить этот процесс (reply to 178485)

&rey: Для excess return. (reply to 178467)

John: можно глянуть место, где при создании токена можно указать логитп. на сайте минтера нет поля для логотипа :/ все поля токена есть, даже деск есть, но логотипа нет (reply to 172570)

John: И вообще, вопрос ко мвсем, как логотип добавить в жетоне тона? Кто знает хорошие пути, без обращения вовсе имеющиеся биржи и сервисы?

Gifter: В метадату положить (reply to 178501)

John: а можно ссылочку на инструкцию почитать? типа там формат, как делать, куда метадату эту пихать. на минтере никакой метадаты нет вроде. (reply to 178502)

Gifter: В минтере хз…

Gifter: Минтер вроде опенсорс, можешь законтрибьютить

John: да мне без минтера. понятно что минтер - это просто путь для простых людей. я готов читать, готов изучать. готов руками работать. нужна информация :) (reply to 178504)

Gifter: Ща (reply to 178506)

Gifter: https://github.com/ton-blockchain/minter-contract#jetton-metadata-field-best-practices (reply to 178507)

John: большое спасибо (reply to 178508)

Flyheck: Разместил манифест в реакт приложении в папку Public, но все еще получаю такую ошибку. Как можно пофиксить?

Winnie Pooh: Залей его в гисты куда-то, не обязательно в паблике держпть (reply to 178523)

Flyheck: Но можно ведь и в паблике? (reply to 178528)

Gifter: А по прямой ссылке он открывается хоть? (reply to 178523)

Flyheck: На локале по ссылке localhost:3000/tonconnect-manifest.json открывается. Т.к. по дефолту берется; ${window.location.origin}/tonconnect-manifest.json для манифеста (reply to 178531)

&rey: А приложение кошелька как должно манифест скачать с локалхоста вашего? (reply to 178532)

Flyheck: Понял. Спасибо (reply to 178534)

Winnie Pooh: Если локально ведешь разработку - то лучше гист. На проде в паблике (reply to 178529)

Flyheck: А какой именно гист? (reply to 178537)

Winnie Pooh: Загугли, гитхаб гист (reply to 178538)

slavagm: Либо единственный, либо один из адресов Wallet (reply to 178546)

Kamil': Скорее всего, это общий кошелек wallet. Зря ты эту транзу пульнул оттуда, надо было через TON Space (reply to 178546)

Dimanza: вот я уже опытным путём дошёл до этого, но изначально в интерфейсе это совсем неочевидно( (reply to 178551)

slavagm: перед тем как кидать куда-то деньги стоит почитать про (не)кастодиальные кошельки) (reply to 178552)

Mvo: откуда tonviewer цену тянет ? dedust или stonfi  ?

Max: всё вместе (reply to 178554)

Lapis⁴² 💎: Вобщем я не совсем понимаю как форматировать в tonsdk ячейку чтобы её нормально схавало, потому что там надо bytes а у меня Cell. Пробую Cell.bytes_repr - Exception: BitString Overflow.

Дмитрий: Добрый вечер. А сообщения ProvideWalletAddress могут принимать все жетоны? я хочу задеплоить контракт для работы с жетоном и нужно полчить адрес жетон-кошелька для этого контракта  Имею ввиду эти сообщения  message(0x2c76b973) ProvideWalletAddress {     query_id: Int as uint64;     owner_address: Address;     include_address: Bool; }

Maksim: Всем привет, в тоне есть общепризнанный wrapped ton задеплоенный и с верифицированным кодом? Есть потребность в создании пула  токен+ton. Вижу ston.fi использует proxyTon но не вижу исходников. Насколько безопасно использовать его? (reply to 104037)

A: всем привет, решил изучить тему разработки dApps по тону, но уже затупил на моменте установке тулзов, изучаю по статье https://dev.to/dvlkv/introduction-in-func-how-to-start-developing-in-ton-50hp  на моменте cmake .. и потом make func fift вываливаются ошибки   и дальше по инструкции уже идти не могу  возможно ктото может подсказать более детальные статьи на тему как установить всё и начать разработку?

Denis: Безопасно, но только для стон.фи. (reply to 178560)

Denis: Стоит брать решение конкретного декса.

Denis: У всех своё

Denis: Самое неудоьное у мегатона. Это как раз чистый обеспеченный 1:1 тоном жетон, где тоны хранятся на мастере. У стон.фи хак который частично имплементирует стандарт жетонов и преобразовывает тоны в жетоны на лету. Но собирать транзакции для таких жетонов надо специально ну и там мягко сказано костыльно. У дедаста красивая архитектура и там пулы оперируют абстрактными активами, а не конкретными жетонами, а специальные хранилища терминируют тоны, жетоны (и вообще любой актив счётный например экстракаренси если они будут) и преобразовывают в эти абстрактные активы

VIKTOR: хорошо объяснил👍 (reply to 178565)

Дмитрий: И может есть другой способ получить адрес жетон-кошелька? (reply to 178558)

Isabella: Как так то? В такое время живём и нет?  Это точно? Или не точно?) (reply to 178403)

Denis: можно в офчейне просто гет метод дёрнуть. или вам надо ончейн именно? (reply to 178568)

Maksim: Спасибо. У дедаста на гитхабе исходников контрактов не нашёл. Плохо искал? (reply to 178565)

Maksim: Равно как не нашёл исходника стон.фи прокситокена, он есть? (reply to 178565)

rxcat: после использования инструкции SETCODE в TVM, адрес контракта меняется?

Sergei: Кто на visual studio 2022 с python работает хелп

Пескарь™ | фронтент телефонов: нет (reply to 178585)

rxcat: почему?

Дмитрий: У меня деплоится смарт контракт. Вряд ли я смогу так сделать. Мне нужно чтоб контракт с жетоном взаимодействовал ончейн (reply to 178572)

Дмитрий: Просто сейчас попробовал затестить- произошла ошибка

Пескарь™ | фронтент телефонов: стейтинит это код, дата и другое да. но при изменении даты контракта у тебя же не меняется адрес (reply to 178590)

rxcat: а. код запихывается в дату (reply to 178593)

Дмитрий: На мастер жетона отправил транзакцию с сообщением ProvideWalletAddress, вернуло ошибку

Пескарь™ | фронтент телефонов: в дате контракта лежит код другого контракта? для деплоя там (reply to 178594)

rxcat: я без понятия, просто увидел это расчет адреса и подумал что при изменении кода меняется и адрес (reply to 178596)

Дмитрий: Причём странно что ошибка именно при получении. Возможно у меня в контракте что-то не так? Мастер вроде как ответил (reply to 178595)

Пескарь™ | фронтент телефонов: ну не меняется карочи (reply to 178597)

Пескарь™ | фронтент телефонов: мастер ответил баунсом проста. у мастера задеплоенного через тонсдк нету опкода для провайда жетон валета если что (reply to 178598)

Дмитрий: Но он вроде ответил же. Коды сообщений совпадают

Дмитрий: Либо я что-то путаю

Пескарь™ | фронтент телефонов: а (reply to 178601)

Дмитрий: Баунсом ответил мой контракт

Пескарь™ | фронтент телефонов: а у тебя контракт обрабатывает этот опкод? не мастер а твой контракт

Дмитрий: Да receive(msg: TakeWalletAddress) {         let ctx: Context = context();         require(ctx.sender == self.master, "Invalid sender");         self.jetton_wallet = msg.wallet_address;     } (reply to 178606)

Дмитрий: В коде мастера нашел такой кусочек. Может быть у меня неправильная структура сообщения и нужно по типу такого сделать?  var msg = begin_cell()                 .store_uint(0x18, 6)                 .store_slice(sender_address)                 .store_coins(0)                 .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1 + 1)                 .store_uint(op::take_wallet_address(), 32)                 .store_uint(query_id, 64);

?: Всем привет. Кто-то делал тг бота? Есть вопросик куда вписывать это: "<script src="https://telegram.org/js/telegram-web-app.js"></script>"

?: Володя, помоги)

Monster: Всем привет. Подскажите пожалуйста, у кого есть пример отправки сообщения на контракт просто текстом (по типу "Deploy") только через тонконнект

User<6908616126>: В html) (reply to 178611)

User<6908616126>: Это если ты делаешь миниапп (reply to 178616)

Дмитрий: Если кто-то может дать структуру для получения такого сообщения- дайте пожалуйста) Или помогите собрать  на такте контракт (reply to 178609)

User<6908616126>: Кнопка run в ide? В зависимости от библиотеки надо запустить полинг, и тогда все будет работаит (reply to 178618)

User<5588062773>: нужен кодер пишите

AL Pamblus: Помогите с Tonkeeper api   вопрос: (это вызов контракта) ton : // transfer /Адрес контракта? amount=570000000&bin=te6cckEBAQEABgAACAAAAAcIZGXb как получить значение bin для контракта?

Tim: cell.toBoc().toString('base64url')

AL Pamblus: ``https ://app .tonkeeper .com/transfer/<address>?bin=<url-encoded-base64-boc>`  Я не понимаю откуда взять и для чего это  url-encoded-base64-boc 😁 (reply to 178628)

Tim: ну читай доки что такое ячейки и как их собирать

Tim: потом читай свой контракт и смотрю какую ячейку он ждет

AL Pamblus: контракта нет 👀 Но если так, то я прочту про ячейки, спасибо Tim 👍

— 2024-04-03 —

Vanëk: попробуй 12 (reply to 174462)

Denis: Всем привет, подскажите с кем можно пообщаться со стороны маркетинга? Буду признателен

&rey: В tonsdk есть некоторые баги, и вообще, где вы эту библиотеку нашли? Вот как работать с ней: https://github.com/ProgramCrafter/onchain-nft-collectioned/blob/master/create-cell.py (reply to 178556)

&rey: Правда, если контракта нет, то зачем составлять особое сообщение в bin?)) (reply to 178632)

AL Pamblus: был какой-то дроп и был контракт, и была ссылка на контракт, amount и bin. со всеми понятно кроме bin, я в TON contact ввёл адрес, пересмотрел что похоже на bin значение, не нашёл, начал кодировать всё в base64 и наоборот 😁 чтобы найти как получилось значение bin. (reply to 178643)

AA: Привет как преобразовать 6091617850 в 6.09 TON

Alexander: / 1e9 (reply to 178653)

AA: ? (reply to 178654)

Torkusz: 6091617850 / 1e9 И получишь 6.09 (reply to 178655)

AA: код в js какой tnano

AA: извлек баланс с js отображает 6091617850 , нужно 6,09

Alexander: Этот код работает в js (reply to 178656)

AA: хорошо (reply to 178659)

Alexander: Можно еще .toFixed(2) (reply to 178658)

Alexander: Если нужно именно 2 знака после запятой

AA: Хорошо сейчас попробую

AA: благодарю! работает! (reply to 178661)

AA: благодарю! работает! (reply to 178656)

User<6908616126>: Насколько помню, в @ton js есть функция fromNano() (reply to 178656)

User<6908616126>: Она из нанотон в тоны преобразует

AA: чета такое было , ссылочку на ton.js можно (reply to 178666)

Minter: https://docs.ton.org/ (reply to 178668)

Gifter: ты чатиком ошибся (reply to 178679)

User<7004570412>: А сори понял

User: В контракте есть ограничение на внутренний storage, и сколько можно засунуть туда максимально информации?

Seitaro: 65536 ячеек, при попытке сохранить больше трназакция зафейлится и откатится. (reply to 178688)

User: есть пример и можно-ли больше? (reply to 178689)

Andrey: Если вам требуется больше тысячи ячеек это уже звоночек что вы что-то не так делаете) (reply to 178690)

User: Понял, спасибо) (reply to 178692)

User: И насчет ton storage, его можно может как юзать через контракт? Или это просто продвинутый торрент трекер?

Andrey: Вы имеете ввиду ончейн получать данные из стореджа? (reply to 178695)

User: Да (reply to 178696)

Andrey: Ончейн данные получать из стореджа нельзя как минимум потому что файлы это набор байт.  А контракты оперируют данными в ячейках.  А во вторых, а какие кейсы использования тон сторедж данных в контракте? (reply to 178697)

Дмитрий: может кто-то помочь? (reply to 178598)

Peace: Господа приветствую.. можете скинуть инструкцию по устнановке ноды через docker

⁣: Добрый день, подскажите пожалуйста, как создать маску (subWallet)  Использую tonweb

nonam3e: в take_wallet_address owner_address это Maybe ^InMsgAddress, а не InMsgAddress (reply to 178601)

Ranel: I created a 3rd wallet on my account.  Deposited ton on it. He throws me to the starting point of creating a wallet. Or restore by backup.   There is nothing left to create a new one to gain access to the previous ones.  I click create, enter a password, and so on. The wallet creates a new one. But it also shows access to the old ones.  But there is one thing. I can't do anything with old wallets because a pin-code is not accepted.  And the ambush is that the new wallet, which I wrote about at the very beginning, does not have the seed phrase. And I can't create them because it does not accept the PIN code.

Ranel: I got error (reply to 178713)

Илья: Уже спрашивал тут. Кто-то знает, что за код ошибки 130?   Вот здесь (тестнет) отправляю на дочерний контракт очень Многа деняк (0.4 тона), он отправляет в 2 раза меньше (0.2 тона) на родительский контракт, но эти сообщения падают либо по ошибке Not enough toncoins (37), либо по коду 130 (непонятно что)  На симуляции в блупринте отрабатывает

⁣: Может знает кто, где прочитать про это можно? (reply to 178711)

Vladimir: Это русский чат. (reply to 178713)

Peace: Кто может ссылку кинуть на инструкцию устновки lighting ноды через докер?

Vladimir: Писал же уже, несколькими сообщениями выше. (reply to 178718)

⁣: Можешь про маски тоже написать, пожалуйста. Я не могу найти эту инфу (как создать банально) (reply to 178719)

Ranel: Ребят привет. Словил серьезный баг на тонкипере.   На аккаунте у себя создал 3тий кошелек. Все по феншую.  Пошел закидывать на него тоны.   Возвращаюсь в приложение тонкипера. Он меня кидает на стартовую создания кошелька. Или восстановление по резервной копии.   Нечего не остается создаю новый что бы получить доступы к предыдущим.  Нажимаю создать ввожу пароль и тд. Кошелек создает новый. Но так же показывает доступы к старым.  Но есть одно но. Я не могу ничего делать со старыми кошельками так как не принимается короткий пароль.  И засада в том что новый кошелек о котором я писал в самом начале, на нем нет сил фраз. И я их не могу создать из-за не принятия пароля.   Стоит перезагрузить приложение и все по новому

Ivan: А сид фразу не записали? (reply to 178721)

Ranel: Не успел

Ranel: Вопрос в том можно ли с mnemonic identifier восстановить сидку.  Там формат похож на функцию pbkdf2 с пятью параметрами «…-…-…-…-…»

Ranel: Только не понятно как вытянуть отсюда приватник

Дмитрий: Не совсем понял что нужно изменить (reply to 178712)

Seitaro: Имеет смысл обратиться в поддержку тонкипера (reply to 178724)

Lapis⁴² 💎: Я уже нашёл способ, просто скопировать функцию, но forward_payload через store_maybe_ref записывать (reply to 178642)

Denis: Стоит ничего не трогать и написать в сапорт тонкипера (reply to 178721)

Denis: @tonkeeper_supportbot

Seitaro: (Это корректный адрес, но лучше конечно смотреть контакты всегда в приложении, чтобы не наткнуться на мошенников) (reply to 178730)

nonam3e: поменяй тип owner_address  Address? на Cell? и читай из этой клетки адрес сам (reply to 178726)

Дмитрий: Сейчас попробую, спасибо

Investor: А есть где-то контракт стейкинг токенов на ТОН, в open-source?

Investor: Если за, можете пожалуйста скинуть ссылочку (reply to 178734)

&rey: https://github.com/HipoFinance/contract/ (reply to 178734)

Дмитрий: Кажется сработало! Ошибки нет. Спасибо! (reply to 178732)

Дмитрий: Ещё хотел бы спросить как это превратить в адрес? Контракт имеет гет-фенкцию, которя возвращает данные типа Address. А на тонвивер почему-то Cell

&rey: Потому что типа Address в TVM нет, там только Slice. А в тонвьювере не Slice, там Cell. (reply to 178738)

Дмитрий: Но жетон мастера возвращают данные типа адрес (reply to 178739)

&rey: А, спецпарсинг вроде. (reply to 178740)

Denis: потому что он знает что конкретно в этом случае этот гет метод возвращает внутри этой ячейки адрес (reply to 178740)

Дмитрий: То есть я не могу с контракта возвращать адреса?

Denis: смотрите. контракт всегда возвращает ячейки. кастомный тоже. то что вы видите в тонвьювере это уже вопрос трактовки этих ячеек

Denis: для некоторых метдов (не контрактов) для удобства описано ручками как трактовать https://github.com/tonkeeper/tongo/blob/master/abi/schemas/jettons.xml#L24

Дмитрий: я просто в других обозревателях тоже смотрел(ton.cx, toncoin.org)- там тоже возвращает cell (reply to 178744)

Дмитрий: может есть вариант как cell "расшифровать"?

SHINRA: Товарищи, есть бот, который кошельки отслеживает тоновские?

Vladimir: https://t.me/TONNotifyBot (reply to 178748)

Valeriy: Добрый день. Может-быть кто-то сталкивался с проблемой отображения TMA на Android или IOS? При попытке зайти в TMA с андроида чистый белый экран, в консоли также ничего нет, и ресурсов в том числе, в то же время на Windows, даже Линукс (хоть и крошатся в нём TMA) работает и корректно открывает сайт (приложение). В гугл по этому вопросу информации практически нет.

Flyheck: Добрый день. Возможно ли на контракте установить временный интервал like setInterval,  с которым он будет регулярно отправлять транзакции?

&rey: Сам собой он не просыпается, надо присылать сообщения. (reply to 178751)

&rey: Контракт может сам себе посылать сообщения. Если через другой шард (гарантированно другой в мастерчейне), то это даёт задержку на блок или больше, как и надо.

Flyheck: Тут не совсем понятно. Сможешь переформулировать? (reply to 178753)

&rey: Чтобы контракт был гарантированно запущен через какое-то время, на него должно прийти сообщение. Логично? (reply to 178754)

Flyheck: Да

&rey: Это сообщение может отправить сам контракт в режиме bounce=true (на несуществующий адрес).

Flyheck: Так

Flyheck: но блокчейн так же не гарантирует конкретное время доставки сообщения

&rey: Да. Поэтому ~каждый блок наш контракт получает сообщение сам от себя и проверяет, не пора ли посылать по setInterval. (reply to 178759)

&rey: Так работает https://programcrafter.github.io/ton-stable-timer.

Flyheck: Спасибо)

Flyheck: но жесть так на комиссиях разориться можно:D (reply to 178760)

sd: на месяц сочно получается (reply to 178761)

Андрей: А за какую стоимость вы бы согласились что бы ваш контракт гарантированно вызывался условно раз в день в точное время? Потому что это можно реализовать на основе провайдеров данных, но их пока нет, так как нет спроса (reply to 178764)

Kamil': Поэтому такое на бэке надо делать (reply to 178763)

Daniil: в контракте принимать external сообщения и проверять время (reply to 178766)

𝑻𝑶𝑵𝒀: Нужен разработчик сделать софт на nodejs/python для обьемов токена (покупка/продажа)   Биржа ston fi  dm

Дмитрий: а как это исправить можно?  Транзакция не отправилась  Режим отправления монет SendPayGasSeparately

Daniil: Прикрепляй больше сумму на комиссию (reply to 178769)

Дмитрий: Ну у меня на контракте лежит 0.4 тон примерно. Отправляю 1 нанотон с оплатой газа отдельно (reply to 178770)

Daniil: Это не совсем корректный нейминг в такте. Этот режим означает что forward fee за отправку сообщения снимется отдельно от суммы сообщения. С gas никак не связано. (reply to 178769)

Дмитрий: А, понял (reply to 178772)

Assi: Можно отредактировать контракт жеттона который был создан/сгенерирован через Minter?

Дмитрий: сейчас сумма ton("0.1"), транзакция всё равно не прошла (reply to 178772)

Daniil: с какой ошибкой? (reply to 178775)

Дмитрий: cskip_no_gas

Daniil: Дай ссылку (reply to 178777)

Дмитрий: https://tonviewer.com/transaction/21f615dab62002893f98cfc460af9a7f25551b3ead316c03e8394c60db1dff1a

Daniil: Отправились жетоны успешно (reply to 178780)

Дмитрий: Но контракт при получении жетонов должен отправить ещё одну транзакцию (reply to 178781)

Daniil: Ошибка возникает в transfer notification сообщении потому что у тебя forward amount = 0.000000001 ton при отправке был (reply to 178782)

Дмитрий: Тогда почему мой контракт не отправил транзакцию если ошибка не в этом?

Дмитрий: receive(msg: TransferNotification) {         send(SendParameters{                 to: self.owner,                 value: ton("0.05"),                  mode: SendPayGasSeparately,                  bounce: true             });     }

Дмитрий: вот что он должен делать при получении жетонов

Дмитрий: или он не может получить уведомление о получении?

Дмитрий: из-за низкого forward amount

Daniil: до него доходит это сообщение но сумма слишком маленькая (0.000000001) (reply to 178787)

Daniil: и поэтому он не может его обработать

Дмитрий: получается он просто не видит его, верно?

Daniil: в данном случае да  но даже если бы там например было 0.0001 то TVM бы запустилась но на оплату газа не хватило бы (reply to 178791)

&rey: Ну, на фифте можно было бы впихать в газ, кажется) (reply to 178792)

&rey: Там было бы *** PUSHREF c5 POPCTR.

Daniil: 0 было бы на газ же (reply to 178793)

Daniil: или эти 0.0001 идут в газ?

&rey: Так нет, там же flat price даёт ненулевое кол-во газа. (reply to 178795)

Дмитрий: это грустно. при отправке с разных кошельков везде forward_ton_amount = 1. то есть я никак не смогу принимать уведомления о получении токенов при обычном трансфере токенов? (reply to 178792)

Дмитрий: нужно кастомные транзакции делать?

Daniil: к сожалению да

Дмитрий: Сейчас собрал ссылку для трансфера токенов, заполнил forward-amount=10000000, но в итоге в транзакции было forward_ton_amount: "1"

Дмитрий: Но остальное собралось верно

&rey: Да, тонкипер маленько не умеет эти параметры использовать. (reply to 178802)

&rey: Никакой другой кошелёк вроде не поддерживает ссылки для перевода жетонов вообще.

Дмитрий: Тогда я могу задеплоить жетон с кастомным кошельком, который будет отправлять нужную сумму

&rey: Не, вам просто надо создавать базовую ссылку ton://transfer. (reply to 178806)

Дмитрий: У меня ни разу не получалось использовать такие ссылки. Может быть я не то тыкал, но тонкипер не открывался с этими ссылками (reply to 178807)

&rey: Через QR вроде должно работать. (reply to 178808)

User<6908616126>: Да, в тонкипере через qr. Хотя у меня на телефоне настроено что все ссылки ton:// открываются именно в тонкипере (reply to 178809)

Дмитрий: получается нужно QR отсканировать в тонкипере? А qr получить как? через сторонний сервис? (reply to 178809)

&rey: В TS модуль qrcode. (reply to 178811)

Дмитрий: А есть ссылка на документацию по ton://? не могу найти

Ma><im: всем привет, вопрос к тем, кто пишет на FunC. как написано в документации, обработка ошибок try catch доступна только с версии 0.4.0  я указал  #pragma version>=0.4.0  но в Visual Code всё равно эти блоки подчёркиваются красным.  это просто проблема линтера, который не обновили? или это как-то по-другому решается?

Myawka ^_^ 🥇: привет всем, посдкажите как получить TxID отправленной транзакции? искал по чату, вроде проблеммы с этим, но все же есть решения?  const transfer = await wallet.methods.transfer({    secretKey: keyPair.secretKey,    toAddress: address,    amount: amountNano,    seqno: seqno,    sendMode: 3 });  const transferFee = await transfer.estimateFee(); const transferSended = await transfer.send(); const transferQuery = await transfer.getQuery(); > ??? отсюда?

Myawka ^_^ 🥇: по seqno искать или можно как-то расшифровать возвращаемые данные?

nonam3e: Проблема плагина, скомпилится норм (reply to 178814)

.: cell content_cell = begin_cell()                 .store_slice(sender_address)                 .store_ref(begin_cell()                     .store_slice(content)                     .end_cell()                 )                 .end_cell();              cell msg_body_cell = begin_cell()                 .store_uint(1, 32)                 .store_uint(0, 64)                 .store_uint(index, 64)                 .store_coins(20000000)                 .store_ref(content_cell)                 .end_cell();              var msg = begin_cell()                 .store_slice(collection_address)                 .store_coins(50000000)                 .store_ref(msg_body_cell)                 .end_cell();             send_raw_message(msg, 3);

.: помогите (reply to 178818)

.: хочу минтить nft с контракта

.: правильно ли я отправляю сообщение

.: Transaction error Unable to complete the operation

.: что это значит (reply to 178822)

R.: Всем привет  Ищем аналитиков данных.   Список задач:  - собрать всех, кто купил наши токены на Dedust и у кого на балансе кошелька лежали токены в определенный момент времени  - собрать всех у кого токены и тоны были в пуле на определенный момент для начисления токенов на новом контракте и ton  - проверить наш пресейл лист, проверить соответствие данных из блокчейна с данными из вручную собранной таблицы с людьми, которым мы не можем отправить токены, собрав их только из ончейна - для раздачи наград или санкций собрать данные о том, кто из 71 человека продал токены, кто холдил, кто вернул  - проверить, на какое количество TON закупились в конкретный период времени  - проверить, на какое количество TON было закуплено токенов на первой зеленой свече  Пишите в личку или на почту adsokolovsky@gmail.com

Gifter: Те, кто забывает ставить запятые не берут (reply to 178824)

User<6329807391>: Ахахаха (reply to 178825)

User<5901725413>: всем привет, подскажите, как можно дешево отправить токены на 1000 кошельков, для эйрдропа

User<5901725413>: или ты подскажи, лол дай контакт кодера (reply to 178824)

web3playton Airdrop TON: Всем привет! Являюсь Фаундером RUBLE, хотел бы узнать, если ли у кого Скрипт пасева? Или подскажите модули для написания

Mirka: Ну для тебя наверное наиболее выгодно будет сделать клейм, так на комиссии вообще не потратишься (reply to 178827)

User<5901725413>: есть где-нибудь готовый код? (reply to 178830)

Kamil': Я слышал, там так себе кодер (reply to 178828)

Дмитрий: А как можно это решить? может быть я не так транзакцию собрал?

Дмитрий: В данном случае контракт пытается отправить жетоны

Дмитрий: https://tonviewer.com/transaction/987bd90350061c0f20801be0ab1fd0ab1d84e21660bd9676e7908bb5a8d4bf25

User<5901725413>: https://docs.ton.org/develop/dapps/cookbook#how-to-construct-a-message-for-a-jetton-transfer-with-a-comment  а какая комиссия в тоне для трансфера токенов? 0.1 ton? (reply to 178830)

Kamil': Меньше (reply to 178836)

User<5901725413>: но как это рассчитать? (reply to 178837)

Дмитрий: Есть у вас примеры как отправлять жетоны через такт? (reply to 178834)

Дмитрий: Я вроде всё правильно собрал, но не работает

User<2123712526>: В ТонХаб такой пометки нет, например  Это чисто Тонкипер делает чтобы якобы «обезопасить пользователя» (reply to 178176)

Nixuds: Есть пример кошелька на python ? Не хочу логику отправки делать и править долгое время, хотелось бы посмотреть корректную.

Lapis⁴² 💎: Чем отличаются store_coins и store_grams?

Lapis⁴² 💎: Извиняюсь, глянул в исходники, это одно и тоже def write_coins(self, amount):     self.write_grams(amount) (reply to 178847)

Дмитрий: Можно как-то пофиксить данную ошибку? тправляю жетоны через смарт контракт  Exit code: 708  https://tonviewer.com/transaction/9bb2ee02ef3356608638240c65144efa585cfb67a17bb9af0b675fc0695625df

Дмитрий: Отправляю на жетон кошелёк сообщение с такой структурой  message(0x0f8a7ea5) Transfer {     query_id: Int as uint64;     amount: Int as coins;     destination: Address;     response_destination: Address;     custom_payload: Cell?;     forward_ton_amount: Int as coins;     forward_payload: Slice as remaining; }

Дмитрий: Опкод вроде верный, не понимаю что не так

Дмитрий: Баланс у кошелька тоже есть

Дмитрий: Что надо поправить в таком случае? (reply to 178853)

Arsen: Привет всем, есть ли готовые работающие проекты на Ton Storage?

Vladimir: Ton Torrent (reply to 178858)

Myawka ^_^ 🥇: привет всем, посдкажите как получить TxID отправленной транзакции? искал по чату, вроде проблеммы с этим, но все же есть решения?  const transfer = await wallet.methods.transfer({    secretKey: keyPair.secretKey,    toAddress: address,    amount: amountNano,    seqno: seqno,    sendMode: 3 });  const transferFee = await transfer.estimateFee(); const transferSended = await transfer.send(); const transferQuery = await transfer.getQuery(); > ??? отсюда?

Myawka ^_^ 🥇: по seqno искать или можно как-то расшифровать возвращаемые данные?

Дмитрий: Вот это? (reply to 178855)

Arsen: Спасибо. Если честно, я хотел бы что-то вроде решения типа OneDrive или Dropbox, а не классического торрент-сервиса. Если такое существует. (reply to 178859)

Vladimir: Нет, это только в Roadmap. (reply to 178864)

Arsen: Это значит, что невозможно создать что-то вроде Dropbox с использованием текущих библиотек, которые предоставляет TON? (reply to 178865)

ㅤ: подскажите где могу фечнуть пару  tonrub ?

ㅤ: нужен курс (reply to 178872)

𝑻𝑶𝑵𝒀: https://tonapi.io/v2/rates?tokens=ton&currencies=rub (reply to 178872)

— 2024-04-04 —

Assi: Друзья доброе утро. Дублирую  Можно отредактировать контракт жеттона который был создан/сгенерирован через Minter?

VIKTOR: Привет Жетон уже создан и в блокчейг, значит нельзя. О кастомной логике нужно заботится до выпуска вашего жетона. (reply to 178875)

✨ Uni: а обновления контрактов делают через прокси контракты?

VIKTOR: Функционал обновления кода должен быть заложен в контракт до его публикации в блокчейн. (reply to 178877)

✨ Uni: а как этот функционал вообще делают? интересно

VIKTOR: https://docs.ton.org/develop/smart-contracts/examples  Посмотри пример контракта ston.fi. В роутере в админских op есть code upgrade  https://github.com/ston-fi/dex-core/blob/main/contracts/router/admin-calls.func (reply to 178879)

✨ Uni: спасибо (reply to 178880)

AA: Привет , если ли пример кода как можно показать на веб странице  последние транзакции кошелька  например кошелек сообщение сумма EQAhmbN9yEm5A4mihjUvGoRqL9rNjwlHhisngC6RtUB6vqKU Donate                       +1TON EQAhmbN9yEm5A4mihjUvGoRqL9rNjwlHhisngC6RtUB6vqKU помощь проекту  +0.5TON EQAhmbN9yEm5A4mihjUvGoRqL9rNjwlHhisngC6RtUB6vqKU Удачи!                         +0.01TON

AA: пытаюсь через  github .com/orbs-network/ton-access

Nixuds: Tonapi например +, php. Вообще для элементарных вещей есть документация с примерами и сорсами (reply to 178882)

AA: можно ссылку , только только изучаю (reply to 178884)

AA: на js , мне бы ссылку на интсрукцию или пример кода (reply to 178886)

AA: попробовать сделать, но только отображать свой кошелек

AA: показать на странице тех кто помогает , донатом в кошелек

AA: Дай боженька таким людям здоровья и по больше денег им

web3playton Airdrop TON: Всем привет! Кто может подсказать информацию о рассылки жетонов ?  Что да как нужно использовать, не могу найти и информацию от чего опираться

Ma><im: cell contract_code() asm "<b 2 8 u, 0x6305a8061c567c2ccf05dcb0df5815c57975870567cab5f049e340bcf59251f3 256 u, b>spec PUSHREF"; всем привет! кто-то может объяснить как тут работает PUSHREF.  спрашиваю не про сам ассемблерный примитив, а про эти аргуемнты через запятую <b 2 8 u, hex 256, u, b>, что это за конструкция?

Ma><im: https://docs.ton.org/develop/dapps/asset-processing/jettons (reply to 178897)

Катант: Всех приветствую, ищу разработчика, который напишет смарт контракт. Контракт будет основан на дефолтном контракте под нфт коллекцию и нфт айтем с некоторыми дополнениями. За деталями в лс.

Василий: Это сборка клетки на fift'е. Более подробно можно посмотреть здесь и здесь (reply to 178898)

Эдик: https://youtu.be/bQqp8BFhEX4?si=-n831S2WMDo4CtNv  Посмотри этот ролик он там разбирает как создать токен, а чтоб их рассылать можешь вплоть в ручную они появляются у тебя в кошельке или опять же написать свой смартконтракт который будет их рассылать (reply to 178897)

Эдик: Если я сам правильно понимаю и понимаю твой вопрос

Эдик: https://www.youtube.com/live/pSXQUhnxnJA?si=QegV8otalTPHugbp Здесь вот тоже разбирают

Stargrapefruit: Здравствуйте. Как рассчитать комиссию операцию при переводе?  Вот что мне известно о транзакции: https://dpaste.org/6QCQu  Вижу только fwd_fee которые кое как связно с комиссией, но больше ничего нет. Например платы за аренду.

047: SEED=word1 word2 TONAPI_TOKEN=                                        тут нужно что менять?

P000RI: Hi is there someone to help me?

P000RI: I've sent my 10mil notcoin voucher to a contract address which is  EQB0rh9vFtP0siwaLEf1hSoI-HamnloH_j1V3eheS932H4E4  please help me to get it back  And this is my transaction ID  https://tonviewer.com/transaction/c5c3997b1f374110d6fc96e0510bf1e9003911a525161f28867c15e41c4c09e9  Please help me if there's anyway to get it back   And I own the single NFT which relates to that contract address

P000RI: There should be a way because the contract address is editable

P000RI: I would be grateful if you could give me a solution

web-assist 🧀: Ребята, можете подсказать как делать обычные http запросы на getgems api

Катант: у гетгемса есть апишка?)

web-assist 🧀: у них через аполло на графе (reply to 178915)

Катант: А в чем проблема тогда?) (reply to 178917)

web-assist 🧀: Меня почему то корс блочит, что с сервера, что с локалки (reply to 178918)

Катант: А ты свою веб морду делаешь?

web-assist 🧀: да

web-assist 🧀: на реакте собираю (reply to 178920)

Катант: Ну тогда только проксировать

web-assist 🧀: а через что? Я пытался с серверного приложения запрашивать данные. Все равно блочит почему то или откуда еще я могу получать инфу по коллекциям нфт (reply to 178923)

Катант: Ну какой-нибудь nginx поднять, который проксировать будет (reply to 178925)

Ivan: У гетгемса нет публичного АПИ, отсюда все ваши проблемы (reply to 178919)

web-assist 🧀: Получается единственный вариант это тянуть apollo на проект? (reply to 178927)

Ivan: нет, использовать tonapi или делать свой индексатор (reply to 178928)

web-assist 🧀: Понял (reply to 178929)

web-assist 🧀: хм, надо будет разобраться. Я помню что делал запросы и получал данные (reply to 178931)

EmirNonstop: Привет! Как реализовать свап на ston fi на низком уровне ?

Đường Tăng: Hi, does the library support python? (reply to 128039)

&rey: @tondev_eng for English. (reply to 178934)

🎐*<@Maxim: 🎃 ребят, привет! помогите понять пж, что не так с Error Loading image. Картинки из метадаты открываются исправно, я даже добавил content_url , но на tonscan ничего не отображает  { "name":"Item ", "description":"Nft", "attributes":[{"trait_type":"Level","value":"Legendary"}], "image":"https://coral-secure-cardinal-536.mypinata.cloud/ipfs/QmbjnMNQP5o8AmBbg4hgCBUfEbudx9UJRrKjUtBQpDwrGm/0.jpg" }

&rey: Открыл, вроде нормально. (reply to 178936)

🎐*<@Maxim: ничего не понимаю, видно что Error loading (reply to 178939)

&rey: Сбросьте кеш в браузере (Firefox — Ctrl+F5). (reply to 178940)

random_tnt: да seed - мнемонический ключ и еще нужен токен тонапи (reply to 178907)

ъуъ: а как это сконвертировать в число?

&rey: А точно надо?) >>> int('c0...', 16) (reply to 178945)

Gleb: Тоже присоединяюсь к вопросу @vadimka2009  Есть ли уже готовое решение? Или кто готов сделать за TON? (reply to 178830)

ъуъ: о, спасибо большое) либа просто инт просит (reply to 178946)

Vladimir: РУ чат. (reply to 178949)

ъуъ: ъеъ, число слишком большое( а как тогда конкретный блок через лайтноду получить? Decimal тоже не работает (reply to 178946)

Creator: Всем привет.  Может кто то подсказать, как можно посчитать storage_fees для волета?  Есть формула: storage_fee = (cells_count * cell_price + bits_count * bit_price)   / 2^16 * time_delta  Но где взять cells_count та bits_count?  Пишу на Питоне

ъуъ: а, туда можно было просто строку засунуть) сорян (reply to 178951)

047: что подразумевается под seed ? (reply to 178943)

047: и где его взять?

047: тамони 2 просят

❤️🐾 🏰 Tower: 24 нужно (reply to 178957)

047: а куда вписать адрес от кошеля?

🎐*<@Maxim: как из ячейки x{302E6A736F6E} получить строку "0.json"  getNftData [   -1n,   0n,   EQCErrC7WDhy_8RV29Uv2kqresJd7dqb2Hl6jeVq0ogLe6rj,   EQDIePxrqM9RRikDVLR6SMomjjz3apnp0rzWtdQMJDQNm2p5,   x{302E6A736F6E} ]  если сделать так: Buffer.from(result.stack.readCell().toBoc().toString('hex'), 'hex').toString('ascii'), то получаю 5nrA    0.jsondbHE, а не просто 0.json , как извлечь?

047: это линукс? адля винды?

&rey: .readCell().beginParse().loadStringTail() (reply to 178960)

Ranel: Всем привет! Есть тоновский проводник блоков с фильтром?

047: TONAPI_TOKEN=              что прописать?

Andrey: Токен TONAPI (reply to 178965)

Torkusz: https://ton.access.orbs.network/44A1c0ff5Bd3F8B62C092Ab4D238bEE463E644A1/1/mainnet/toncenter-api-v2/ Я так понимаю здесь свой api ключ нужно вставить, откуда его можно взять? (reply to 178306)

&rey: Ключа не требуется. (reply to 178967)

&rey: Мне просто лень было искать модуль Orbs под питон.

047: Выдал ошибку-                                                                                                                                          Error: invalid client     at C:\Users\user\Desktop\TON\ChipiCoinGpuMiner-main\ChipiCoinGpuMiner-main\send_multigpu.js:150:15     at Generator.throw (<anonymous>)     at rejected (C:\Users\user\Desktop\TON\ChipiCoinGpuMiner-main\ChipiCoinGpuMiner-main\send_multigpu.js:6:65) (reply to 178966)

Torkusz: {'ok': False, 'error': 'LITE_SERVER_UNKNOWN: cannot apply external message to current state : External message was not accepted\nCannot run message on account: inbound external message rejected by account 99504466BDEE4552CB87913E55633927FA70E7A75E74A76DE1BC9D7F0F6E498B before smart-contract execution', 'code': 500}  А что тогда он от меня хочет? (reply to 178968)

Ali: народ, я новенький в разработке, связанной с криптой, но имею некую базу по питону может подскажите, какие библиотеки стоит изучить?) и вообще, с чего лучше начать

Andrey: Сообщение не валидное (reply to 178971)

&rey: Вы же его с сайта tonconsole.com взяли, да? (reply to 178970)

Torkusz: А как исправить?) (reply to 178973)

Andrey: смотря куда отправляете (reply to 178975)

Torkusz: https://github.com/ProgramCrafter/onchain-nft-collectioned Пытаюсь OnChain коллекцию сделать (reply to 178976)

Тимур: Приветствую! Тут есть разработчики с опытом запуска ICO с вестингом и клифингом с использованием Jetton? Мне поручили закончить ICO до конца апреля, но у меня в нем опыта всего неделя и прочитанная документация)  Есть ли рабочие контракты или библиотеки в открытом доступе? Надеюсь на любую помощь, спасибо!

Kon: https://github.com/logvik/ton-ico-on-func можно отсюда начать (reply to 178978)

🎐*<@Maxim: 🎃 зачем в стандарте nft-collection.fc присутствует аргумент int index в сигнатуре get_nft_content-метода , если в этом методе этот index не используется?

&rey: Потому что в других нфт может использоваться. (reply to 178980)

🎐*<@Maxim: имеется  в виду резерв? просто в теле функции только individual_nft_content используется. Как именно можно использовать тогда index? (reply to 178981)

&rey: Картинку менять можно, например. (reply to 178982)

Тимур: Насколько я понимаю, в этом контракте мы можем установить только дату начала и окончания ICO, код кошелька не содержит проверки доступности монет.  Чтобы их внедрить надо модифицировать контракты. Как бы вы стали делать это? Какие шаги обычно вы проходите при проектировании, разработке логики смарт-контракта? (reply to 178979)

Nikita: Всем привет)   Подскажите пожалуйста, можно ли юзать tonapi как provider для tonweb-а?

Nikita: Как я понял, интерфейс с toncenter у них сильно отличается

Denis: для тонвеба нельзя. но тонвеб и не надо использовать

Denis: для ton есть провайдер на базе tonapi

Nikita: понял-понял, у ston.fi SDK просто завязан на tonweb

Nikita: выходит, либо обходиться без их СДК, либо юзать toncenter

User<5901725413>: Привет, я в итоге сделал) (reply to 178947)

Kon: Если делать клиф/вестинг логику, то скорее всего клиф надо вставлять в момент минтинга в рут контракте, чтобы в зависимости от даты минтить необходимое по формуле значение, а вестинг проверку в момент трансфера между кошельками... (reply to 178984)

Gleb: Ооо Топ   В открытом доступе? (reply to 178991)

Dima: Друзья приветствую, кто-то может подсказать как интегрировать в webapp TON платежную систему ?   А так же как и где можно интегрировать свои NFT (на TON маркетплейсе) внутрь WebApp.   Возможно есть какой-то гайд, или видео, спасибо.

User<6908616126>: Думаю вам ton connect поможет. Ну а для получения инфы по nft нужен апи, лучшим считаю tonapi (reply to 178999)

John: Скажите, а есть в TON-е тестнет. НЕ sandbox (про него читал), а именно полноценный тестнет, с тестовым тоном и тестовыми траназкциями, но бесплатно?

Torkusz: Да и нет (reply to 179001)

NDA: https://docs.ton.org/develop/smart-contracts/environment/testnet (reply to 179001)

NDA: @testgiver_ton_bot тут можно получить тестовые TON в тестнете

John: спасибо. то что доктор прописал :) (reply to 179003)

User<6908616126>: А вот как в тонкипер добавить тестнет кошель, пригодится при разработке (reply to 174051)

User<6908616126>: Вот единственное не помню, возможно надо в настройках внизу на лого тонкипера 5 раз тапнуть и включить dev mode

John: только хотел спросить :) спасибо (reply to 179007)

John: а вообще, для дева что лучше тонкипер или mytonwalet? (reply to 179007)

User<5272290199>: Всем привет! Есть ли здесь специалисты, которые имеют опыт в создании игр в Telegram с возможностью интеграции TON? Напишите пожалуйста, есть интересный проект и предложение. Заранее благодарю 🙏🏻

User<6908616126>: Я тонкипер юзаю, как по мне удобнее (reply to 179010)

User<6908616126>: Но вообще думаю разницы нет, что тебе удобней то и используй

NDA: открыть настройки, пролистать в самый низ, на логотип нажать раз 5-7, откроется выбор сети (reply to 179009)

User<6908616126>: Не, в новой же версии перенесли (reply to 179014)

NDA: у меня вроде свежая, точно? (reply to 179015)

User<6908616126>: Сейчас так (reply to 174051)

NDA: а, ну похоже поменяли

User<6908616126>: Ща проверю, но ее уже месяц назад перенесли (reply to 179016)

User<6908616126>: Вот это после 5 тапов по лого (reply to 179018)

User<6908616126>: Обновлял вот на днях

NDA: наверн это уже свежая версия

NDA: попробуй так (reply to 174051)

User<6908616126>: Вот так работает, это же мои скрины) (reply to 179023)

John: у меня ни так ни так не работает. мы о десктопной версии или ектеншне для бразуера? (reply to 179023)

Андрей: О приложении для телефона) (reply to 179025)

John: мне на компе надо. я смартконтракты на телефоне врядли писать буду :) (reply to 179026)

User<6908616126>: Ты будешь qr сканировать везде, и просто подключать кошелек через ton connect (reply to 179027)

User<6908616126>: Так что приложение на телефон самое то

John: ну это врядли будут удобно. особенно если я планирую автоматически скрипты писать. телефоном подписывать транзы в скриптах - такое себе... (reply to 179028)

User<6908616126>: Ну хз, мне удобно) (reply to 179030)

User<6908616126>: Наверное по другому и не получится

Zaphod: 7 раз тапни в экстеншене (reply to 179030)

John: ничего не произошло :( тапнл уже (reply to 179033)

John: в десктопной версии (на windows) нашелся dev_mode и там есть тестнет

Zaphod: Вся эта свистопляска именно ради dev mode (reply to 179035)

Sectonar (bio): Привет всем Подскажите, есть ли готовое решение для вычисления адреса контракта по boc и стейту?

John: ну я просто писал смарты на EVM, писал на иосе, всегда нужен был тестнет. разоришься на комиссиях в майнете тестить :) ну и кошель под рукой все же лучше иметь. понятно что можно и на скриптах к тестнету обратиться с все сделать, но иногда проще прямо в кошельке что-то сделать. например даже баланс чекнуть. (reply to 179036)

John: в тоне кстати комиссии не копеечные ни разу :(

Alan: Всем привет!  Может кто посдказать, как правильно jetton сжигать с использованием либы pytonconnect и pytoniq. Пробовал все по гайду с сайта тона делать, но вместо джеттона в транзации отправка-получение TON  Например: у юзера есть N-количество одного из Jetton, я пытаюсь создать транзакцию(которую юзер подтвердить должен) на сжигание N-количества

Dima: В этом чате я могу спрашивать за разработчиков ? типа фронт ендеров, бекендеров?

John: Скажите репо в джитхабе https://github.com/ton-defi-org/ это легитимный  тон?  просто екзе оттуда выглядит вот так на виртотале:

Vladimir: *Гитхаб. (reply to 179044)

John: Конкретно вот отсюда: https://github.com/ton-defi-org/ton-binaries и конкурентно вот это: Windows 64  fift  func  lite-client  Install OpenSSL 1.1.1

John: Причем нашел поиском в гугле такую вот страницу (которая очень похожа на предыдущую),  https://docs.ton.org/develop/smart-contracts/environment/installation и файл оттуда имеет два скана на виртотале исходя по неважности названий - это false positive. НО (!) размеры файлов разные. причем сильно. в два раза.  неужели кто-то смог заразить репозитоорий тона. это же катастрофа, если это так.

Vladimir: Там же указано в категории "вируса" почти везде Miner. Что это значит, есть догадки? (reply to 179047)

Артем: Но это не должно быть майнером (reply to 179048)

John: безусловно, майнер он и есть, так как наверное функции "майнинга" в том или ином виде в нем содержатся. только вот в бинарке, взятой с сайта с доменом ton.org (ну уж ему то наверное моно доверять) всего два срабатывания, а из репозитория - все красное. и размер другой (reply to 179048)

John: в принципе все что связано с криптой - вполне можно так или иначе майнером назвать. особенно в PoW-блокчейнах. Но ТОН вроде бы не PoW? Поправьте меня если я ошибваюсь. Там же валидаторы, значит это PoS и значт в клиенте не может быть функций майнера (reply to 179049)

John: Какой официальный твитер у тон-комьюнити?

John: а, на сайте же должен быть. пойду гляну

Zaphod: Поверх ТОНа вполне можно навернуть PoW (reply to 179051)

John: наверное да. но не до такой же степени что бы прям написать вирус :) я уже давно не удивляюсь софтам которые 2-3 срабатывания на виртотале дают. ну там сам виртотал то уже не совсем легитимный уже стал. но 2-3 - это еще куда ни шло, но не 17 же :) (reply to 179054)

Андрей: Официальный: github.com/ton-blockchain/ton (reply to 179044)

John: т.е. кто-то создал такой "красивый" дубликат? Он в гугле первый по запросу TON precompiled binaries :) (reply to 179056)

Андрей: Гугл не источник истины (reply to 179057)

John: ит из тру :) (reply to 179058)

John: но опасно оставлять это на самотек. неужчто нельзя в гитхаб пожаловаться чтобы закрыли его

Creator: Ребят всем привет  Знает кто то как получить size контракта(или волета)? Для расчета стоимости хранение.

John: вот кстати отсюда взял такой же файл и там все ок (ну два срабатывания - не в счет) но тот, первый, на который я случайно вышел, тоже так красиво выглядит, прям как настоящий :) (reply to 179056)

Daria: этот репозиторий создавали не мошенники (reply to 179060)

John: а кто тогда? и почему там вирус? (reply to 179064)

Андрей: И копию официальных страниц и приложений мошенники не создают, и в этом чате не сидят (очень даже сидят, и очень даже создают копии официальных) (reply to 179064)

Vadim: Может маме лучше пожаловаться? (reply to 179060)

Vadim: Шучу)

John: вы на стороне мошенников? :) (reply to 179067)

John: не, мошенникам тоже надо детей кормить и дденег зарабатывать. я не против. но не за мой счет, желательно :)

Vadim: Логично

Daria: эту репу делал еще тол-кол, ссылки на эту репу были в официальной доке (и возможно еще есть) (reply to 179066)

Андрей: Я не утверждаю что тот гитхаб принадлежит мошенникам, я его первый раз вижу. Но я вообще не знаю кто такой тол-кол (в принципе наверное и не должен, да и чат не про обсуждение личностей) (reply to 179072)

Flyheck: как эффективно получить список активных аукционов .ton или fragment с фронта (react)

web-assist 🧀: Ребята можете простыми словами объяснить что такое индексатор

Denis: Что такое индекс в базе данных представляете? (reply to 179083)

Denis: Или надо ещё проще?

Svαtoωλ‎: Штука удобная по которой можно все быстренько найти (reply to 179083)

web-assist 🧀: Давайте еще проще) я огурец (reply to 179085)

Svαtoωλ‎: Чайник уже не модно что-ли 😁

Svαtoωλ‎: А стоп (reply to 179086)

web-assist 🧀: Первое что пришло в голову (reply to 179088)

Svαtoωλ‎: Пора спать, спокойной ночи

Vladimir: У тебя в сумке 100 ключей. На ключ от квартиры ты вешаешь красную бирку, чтобы долго не искать среди всех ключей. Это индекс. (reply to 179087)

Denis: Нода блокчейна хранит данные  1. Не все, а только какую-то часть истории и в перспективе только часть текущего состоянии. 2. В формате ориентированном на быструю отдачу маленьких кусочков данных и валидацию новых блоков и транзакций.  Индекс обычно оббегает весь блокчейн и хранит данные в формате удобном для построения сложных выборок. (reply to 179087)

web-assist 🧀: То есть по сути, если я захочу я могу пройтись по всем существующим NFT в сети? (reply to 179093)

Пескарь™ | фронтент телефонов: из всего ты выбрал именно это? (reply to 179094)

Denis: Это один из примеров. Например у гетгемс есть индекс всей сети ориентированный на нфт. Я так понимаю не нфт данные они не хранят. Тонапи например индекс общего назначения и индексирует не только нфт. (reply to 179094)

web-assist 🧀: Мне нужно по адресу коллекции доставать данные о топах продаж

web-assist 🧀: В идеале делать простой rest запрос, а что еще можно более интересное замутить? (reply to 179095)

ℛ𝒾𝒸𝒽𝒶𝓇𝒹: Хотел узнать, есть ли какие то ограничения по количеству подключений тон кошельков за короткий промежуток времени, если буду использовать библиотеку pytonconnect?

Sectonar (bio): Привет всем Подскажите, есть ли готовое решение для вычисления адреса контракта по boc и стейту?

Vladimir: В чате уже выше поднималась информация: там ограничение tonapi бесплатного тарифа. (reply to 179101)

Torkusz: Да, но можешь попросить хорошо побольше запросов (reply to 179101)

ℛ𝒾𝒸𝒽𝒶𝓇𝒹: Если поднять свой tonapi то как я смогу перенаправить на него запросы используя данную библиотеку? (reply to 179103)

Vladimir: Рано или поздно этот горшок перестанет варить и надо будет платить. (reply to 179104)

Torkusz: 😁 Свой ты вряд-ли поднять сможешь, так что купить легче (reply to 179105)

Vladimir: Переписать библиотеку. 😐 (reply to 179105)

ℛ𝒾𝒸𝒽𝒶𝓇𝒹: У них на гитхабе лежит реп с opentonapi (reply to 179107)

ℛ𝒾𝒸𝒽𝒶𝓇𝒹: Странно что не предусмотрено в библиотеке такой вариант (reply to 179108)

Denis: Не связано никак с тарифами на тонапи. Я пока не придумал что делать с такими подключениями. Так что токены выдаются бесплатно. (reply to 179103)

Denis: Мост выбирает кошелек. Тоесть вам не тонапи надо поднять, а свой кошелёк сделать (reply to 179105)

Flyheck: и tonapi и tonhub api и toncenter api индексируют блокчейн, или только первое? (reply to 179096)

Denis: Toncenter v3 индексирует. Toncenter v2 - нет.  Тонхаб тоже нет.  Хотя кажется у них есть какой-то там свой закрытый индекс. (reply to 179113)

ℛ𝒾𝒸𝒽𝒶𝓇𝒹: Мост там используется tonapi (reply to 179112)

Denis: И? (reply to 179115)

ℛ𝒾𝒸𝒽𝒶𝓇𝒹: Если мы говорим про Ton Space и TonKeeper

Flyheck: использовали ли вы orbs ton access? есть ли минусы в сравнении с другими? какую лучше всего вообще апишку взять? Если рассматривать и среди платных и среди бесплатных вариантов (Под ts и React)

Denis: tonstat.us я бы начал с этого :) (reply to 179118)

ℛ𝒾𝒸𝒽𝒶𝓇𝒹: Соответственно если там есть ограничение по количеству запросов(подключений) в секунду то по идее нужен свой tonapi поднять или платить деньги за тариф (reply to 179116)

Denis: Только срок побольше возьмите. Сегодня все спокойно у всех (reply to 179119)

Flyheck: Просто лучший) спасибо. А если рассматривать по таким параметрам как тортлинг для анонимных пользователей, и пр ограничениям? (reply to 179119)

Игорек: Добрый вечер, сильно палками не бейте, человек без опыта в блокчейн разработке  Подскажите, есть идея проекта, но до этого работал только с фреймами пхп, вопрос состоит в том можно ли использовать данные технологии в разработке? Или переходить на другие?  Идея проекта наподобии ноткоина, фронт будет на vue.js скорее всего, а бекенд на laravel, на обработку взаимодействий смартконтракта думаю использовать отдельно python/go/nodejs отдельным сервисом (к примеру отдельный контейнер докера)  При взаимодействии со смартконтрактами буду стучать на отдельный сервис и после выполнения работы будут уходить ответы на laravel и фронт. А при взаимодействии логики приложения которые не касают смартконтрактов уходить запросы будут на бек ларавел  Есть ли в этом смысл? Или не нести ахинею и использовать другие инструменты ? (Если да, то какие)

Spite: вот тут важно отличить одну штуку:  Если упадёт орбс, можно переключиться на любую другую рпц.  Если падает тонапи, то это уже больно, а за последние месяцы это было довольно часто, учитывая, насколько сильно ты завязываешься на один сервис (reply to 179119)

Denis: Ещё раз. Кошелёк сам выбирает какой бридж использовать. Выбирает не по технологии а по адресу. Бридж тонапи использует референсный который публично доступен в репе тонконнекта. Ровно тот же бридж использует my ton wallet, но на собственном сервере. (reply to 179120)

Flyheck: Больно из-за отличий в интерфейсах которые нужно дополнительно обрабатывать? (reply to 179124)

Spite: ну тонапи это не рпц, а обычное апи, то есть свои интерфейсы и так далее. Нельзя взять и заменить на что-то другое, только если ты там сам свои интерфейсы не написал, где связал тонапи, дтон и так далее, но так, кажется, никто не делает

Flyheck: И еще, чувствую, очень глупый вопрос. В чем отличие от RPC? (reply to 179127)

Spite: рпц это прямое обращение к сети можно сказать, получаешь сырые данные, которые самому надо обрабатывать. Тонапи - это уже заранее обработанные данные.  Например, тонапи может тебе выдать список нфт юзера, а рпц нет (reply to 179128)

Denis: Или найти транзакцию по хэшу (reply to 179129)

Flyheck: Верно ли я понимаю, что в rpc нет индексации, в api, как правило, есть? (reply to 179129)

Denis: Ну это дурацкая не правильная терминология (reply to 179131)

Spite: преимущество второго неоспоримо в вопросах получения нфт, жетонов и в других сахарных вещах.  Но единственным минусом являются довольно частые падения (даже раз в два месяца это уже часто), учитывая, что тонапи это критикал штука, если ты на него завязываешься

Spite: рпц не знает, что такое индексация. Он тебе просто даёт данные, а ты уже сам можешь на его основе построить индексатор. Это две разные вещи.  конкретно тонапи имеют свой очень классный индексатор, которому Денис (и не только вроде) посвятил 2 года жизни, поэтому там много удобных эндпоинтов для получения самых разных данных, которые ты сам нормально не спарсишь без головной боли (в некоторых случаях просто не спарсишь, не хватит ресурсов одного человека в разумных пределах) (reply to 179131)

Flyheck: Я так полагаю, tonapi - лучший вариант для эффективных решений, среди платных вариантов Есть ли какие-то бесплатные варианты с индексацией? Или без индексации, но и без тортлинга (reply to 179134)

Denis: А можно список падений на графике tonstat.us (не одиночные запросы иногда, а хотя б 5 минут)? ну так чтоб не быть голословным (reply to 179133)

Spite: Ну типа того, да.  Есть toncenter v3 ещё, но его самому хостить дорого, можно вроде ключ взять (reply to 179135)

Denis: РПЦ это там где купола. Не надо учить человека не правильной терминологии (reply to 179134)

Flyheck: А если без рофлов, то что не так с терминологией RPC?) (reply to 179138)

Spite: Я не знаю, как tonstat проверяет работу тонапи, но по крайней мере повторялись случаи, когда запросы на получение транзакций падали в течение минуты-две. Потом само восстанавливалось.  Могу во все следующие разы отправлять сюда warning, чтобы фиксировать 🙂 (reply to 179136)

Denis: Там есть ссылка на гитхаб. (reply to 179140)

Spite: будет эффективнее, если ты в двух словах скажешь (reply to 179141)

Denis: Дёргает список последних транзакций на аккаунте электорара.

Denis: Можешь дописать своих проверок. В идеале во все апишки

Kamil': Да в целом, даже с Тонапи без головной боли не спарсишь :) Боюсь представить, что там без него (reply to 179134)

Flyheck: Так все же, есть ли какие-то хорошие бесплатные варианты api, с индексацией и частотой запросов чаще, чем раз в секунду?

Kamil': Поднять свой, как уже подсказали: https://github.com/toncenter/ton-http-api (reply to 179146)

Spite: посмотрел свои логи, там 13 марта было. Тут вот как раз те самые красные линии в 18 часов по моему времени (+04) видны, далее также видны ночью (reply to 179143)

Николай: на сети ton есть flash loan? кто чем пользуется?

Николай: друг спрашивает

Тимофей: Могу на ActionScript 3 сделать. Напиши в личку. (reply to 179123)

Flyheck: tonhub Точно не индексирует? ибо тот же gram используя его на аукционах получает довольно быстро списки (reply to 179114)

Flyheck: либо же аукционы .ton, они ведь так же довольно быстро дают ответ, но используют toncenter v2. Т.е. индексация по итогу не сильно влияет на скорость получения данных? Вопрос только в их структурированности?

Denis: Смотрите. Есть api. Application programing interface. По сути это способ общения программ между собой формализованным способом. Апи могут быть самые разные. Например ос предоставляет программам апи для общения с сетевой и графической подсистемой.  Есть разные варианты подхода к реализации этого апи. Например есть подход супер популярный по сути (но не единственный) это RPC акт удоленный вызов процедуры. Когда один сервис говорит другому вызови вот эту функцию вот с этими параметрами и дай мне результат. По сути очень многие форматы апи сводятся к этой парадигме.  В частности например у тона встроенный в ноду апи имеет  протокол работающий в этой парадигме.   Тонапи предоставляет rest api, которое семантически довольно сильно отличается от традиционного рпц стиля, но по сути это тоже рпц и тонапи в1 имел методы более рпц-стайл.   Ещё есть популярный формат предоставления апи это json-rpc over websocket. Этот формат популярен в эфире и был притащен в тонцентр v2. По сути это некоторая обвязка проксирующая сырые ответы лайтсервера в json частично их распарсив до более человеческого состояния. (reply to 179139)

Kamil': Ну при желании, ты можешь без индексации вытаскивать сразу данные смарт-контракта, конечно, только в ТОН с этим сложнее, чем в условных ЕВМ-сетях, насколько помню (но я не эксперт) (reply to 179153)

Denis: Там эти линии толщиной в минуту. У рекомендуемого тобой орбс ими все просто усыпано. Каждый раз переключаться на что-то? (reply to 179148)

Denis: Нет. Бай дизайн не возможны. И слава богу (reply to 179149)

Spite: Не, я орбс наоборот рекомендую не использовать. Скорее речь про то, чтобы использовать рпц максимально, насколько это возможно.  Я, кстати, тут не вижу ддоса (reply to 179156)

Николай: а почему кстати? кейворды можно прост) свопы же есть (reply to 179157)

Spite: Потому что в эфире все происходит синхронно, заранее известен результат так сказать.  А здесь асинхронно. Ты пока флеш лоан возьмёшь и вернёшь (не возьмёшь), пройдет несколько транзакций независимых друг от друга (reply to 179159)

Flyheck: В то же время при работе с RPC я буду вынужден чекать список входящих транзакций от смарт-контрактов и как-то определять, является ли смарт-контракт отправивший транзу жетон-кошельком, верно? (reply to 179129)

Spite: Опиши задачу, которую пытаешься выполнить коротко (reply to 179161)

Артем: Кто-нибудь знает как @wallet делает транзакции?  Если я делаю перевод внутри @wallet, то в блокчейне его не будет, верно?

Denis: Наоборот. Индексация это дополнительные временные затраты (reply to 179153)

Артем: Я слышал о каком-то смарт контракте у них, но не особо разобрался

Kamil': Да (reply to 179163)

Flyheck: Хочу получить список аукционов gram на фронте (reply to 179162)

Denis: А че у них за аукционы?

Spite: Ну тут вроде тонапи использовать, если он индексирует это (reply to 179167)

Spite: .gram (reply to 179168)

Flyheck: https://dns.gramcoin.org/ (reply to 179168)

Denis: Скорее всего у них какой-то свой минииндекс одной коллекции поверх лайтсервера. Я бы делал так

Flyheck: но обращения идут к tonhub api (reply to 179172)

Denis: Ну ок

Spite: Не обязательно это связано индексацией (reply to 179173)

Flyheck: да, согласен. Не противоречит (reply to 179175)

Denis: Скорее всего с тонхаба текущий стейт для актуальных данных дополнительно к индексу

Flyheck: Затраты на предподсчет ведь. Но ответы на запросы, когда данные уже имеются, должны быть быстрее, как я понимаю. Ибо уже не нужно по такой длинной цепочке проходить (reply to 179164)

Denis: Алсо готов поставить кжх против ментозавра, что TLD они не пробьют себе (reply to 179170)

Flyheck: TLD? (reply to 179179)

Spite: Ну у них парочка валидаторов есть вроде как) (reply to 179179)

Kamil': А кто-то в силе это сделать? :) (reply to 179179)

Flyheck: место среди DNS в корневом ресолвере? (reply to 179180)

Denis: Осталось ещё 150 (reply to 179181)

Flyheck: ну, они могут и по кривому пути пойти. Зарелизить свой кошель, локально в нем поддержать эти домены. Мб и другие кошельки подтянутся. А дальше, почему бы уже и не добавить к остальным DNS, раз все используют?

Николай: класс, но пока не понял как это связано) транзу внутри раскидать по кускам асинковым => ждать окончания сколько то, не? что рекомендуете на эту тему глянуть вообще для осознания?  пока только func несколько дней ковыряю, но интересно уже кое-что прикладное попробовтаь  и в принципе, если это не возможно, то и не плохо даже, тут согласен есть и другие направления в ресерче) (reply to 179160)

Denis: А оно связано. Попробуйте посидеть подумать еще (reply to 179186)

Flyheck: а что за flash loan? (reply to 179149)

Николай: ну это легко гуглится кратко - займ внутри одной транзы (reply to 179188)

Flyheck: Всем спасибо. Очень благодарен за уделенное время. Благодаря вам я смог на много лучше понять то, с чем взаимодействую. Еще раз, спасибо :)

Torkusz: Если с Ton Space, то будет, если с баланса аккаунта, на баланс аккаунта, то нет (reply to 179163)

— 2024-04-05 —

Vadim: Он свопает, а ты рядом с ним стоишь получается? Передай, что бесполезно, все объемы уже арбитражат крупные игроки ; ) (reply to 179150)

Vadim: У меня друг занял как-то, ему не вернули потом

Spite: Хочу получить хеш данных, используя HASHEXT, но проблема в том, что в сумме данные составляют 534 бит, что не делится на 8. И при сериализации в конец дописывается 02_, но как это повторить, если я передаю слайс в функцию? (forwarded from Spite)

15_Zeros: Админ, дорогой, не ругайся, это не спам. Вначале в общей группе написал, потом нашел эту, специализированную.  Мы составили с коллегами список Web3 грантов, то есть грантов от разных блокчейн-проектов. И я уверен, что среди вас достаточно много разработчиков, соответственно, данный список сможет точно кого-то заинтересовать. Моей выгоды в этом абсолютно никакой - хочу просто поделиться, вот - https://dspense.com/web3-grants

Nico: Ребят, привет! Я техлид команды MetaLamp. Хотим похакатонить для The Open League Hackathon. Ищем FunC разработчика, которому это интересно. Об условиях договоримся 😉  Проект интересный, идея оформлена. у нас есть вся команда, нужен только еще 1 человек на поддержку  Пишите в лс

&rey: Что значит по "boc и стейту"? Ну, если стейт начальный, то хеш-часть адреса и есть хеш ячейки стейта. (reply to 179102)

new balance: Ребята привет Кто знает, почему Тонкипер верифицировал $ANON, но пулл реквест не закрыт и изменения в main не вмержены?

Flyheck: Мб просто отдельным PR это сделали? (reply to 179198)

new balance: Не было других PR. (reply to 179199)

new balance: Есть коммит с таким изменением (регенерация json). Но он не по нашему ПР. Видимо разработчики напрямую сами сделали. (reply to 179200)

User<5901725413>: Добрый день, подскажите, как можно слушать свопы на dedust/stonfi? Есть удобное апи для этого?

Torkusz: Как долго проверяется токен, после пулл реквеста?

NPC: Всем привет! Как запустить свой майнинг пул, как GRAM?

Flyheck: или у них автоматически убирается эта плашка в зависимости от каких-то параметров. К примеру, если обороты этого токена достигли какого-то значения (reply to 179201)

Denis: блин. реально берегов не чуют. сейчас один который рассылает спам про Toncoin (safe transaction)  пришёл жаловаться что ему жертва не на тот адрес отправила нфт (reply to 177826)

Denis: вот бы в тон была служба безопасности которая таких находит и вставляет паяльник

Spite: у тебя все возможности для этого)) (reply to 179219)

🎐*<@Maxim: В чем смысл домена на .gram? Можно ведь поднять только для .ton ? (reply to 179171)

Flyheck: По факту скам выходит. Ибо преподносят как dns, а фактически им не является (reply to 179221)

Flyheck: при чем, хоть бы какую-то плашку повесили, что еще не прошли голосование, но планируют очень постараться

Max: Знающие люди, можете подсказать? Могу ли я засунуть в контракт цикл while который будет проверять условия до тех пор пока не пройдет n-времени, если да, то не сожжет ли оно весь баланс?

Zaphod: А надо сжечь? Можно и проще, без циклов) (reply to 179224)

Max: не, сжигать не надо Просто интересно возможно ли делать временные проверки внутри контракта или придется делать внешние через сервер (reply to 179225)

Zaphod: Проверки делать можно, но в цикле время меняться не будет. Проверил и вышел (reply to 179226)

Mr: Cv (reply to 179227)

Nico: мне тоже в ЛС кидай CV (reply to 179227)

Philip 菲力: there is a thing called "gas limit" which will not burnout all of your balance with only 1 message. ref: https://answers.ton.org/question/1541475803974340608/how-to-check-the-current-global-gas-limit (reply to 179224)

Max: понял, спасибо (reply to 179231)

Toia: Добрый день! Будьте добры,подскажите,как решить вопрос с логотипом?  Я трансфернул через мост токен своего проекта из erc20 в сеть тон. Получил на выходе jtoken. Как установить фирменный логотип проекта?

Nixuds: ? (reply to 178842)

Nixuds: Или подскажите через что и как правильно делать вывод юзерам в боте. Python

Flyheck: Рекомендую с таким опытом прикладывать портфолио с работами. Тогда увеличивается вероятность привлечь работодателей (reply to 179234)

&rey: В документации даже. Если не работает, скажите. https://docs.ton.org/develop/dapps/cookbook#how-to-transfer-ton-how-to-send-a-text-message-to-other-wallet (reply to 178842)

Nixuds: Без примера я могу отправлять, все это знаю. Но как я при объеме транзакции правильно буду делать это ? Ставить очередь транзакции? (reply to 179241)

&rey: В библиотеке рядом лежат врапперы к highload, посмотрите их. (reply to 179246)

Nixuds: Безопасно их использовать? Странное видел в чате и говорят что нет (reply to 179247)

&rey: Только группируйте транзакции минимум по 4, а то газа много лишнего потратите.

&rey: Там про "абсолютную безопасность" речь, что пользователь не может слишком активным использованием или неверными сообщениями их сломать. (reply to 179248)

Nixuds: Понял, спасибо за ответы. Пример пачки транзакции есть на python ?

Flyheck: Только первую видел. А откуда последняя тройка?) (reply to 179242)

Катант: Смотря на чем пишешь (reply to 179271)

User<6908616126>: Про ton connect почитай (reply to 179273)

Gifter: Да (reply to 179276)

Dima: Друзья привет. подскажите у TON есть какое-то DAO - где компания может выставить на продажу свой ТОКЕН DAO (100% токенов = 100% компании) с личными кабинетами и возможностью голосования для equity партнеров. Спасибо

ࣩࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨ#saveukraine: 😂

User<6908616126>: Да (reply to 179280)

User<6908616126>: Только не ui, а просто sdk (reply to 179280)

User<6908616126>: https://ton-connect.github.io/sdk/modules/_tonconnect_sdk.html (reply to 179282)

User<6908616126>: Еслиам нужна только ссылка, то ссылка вида ton:// ваш друг. Где про нее в документации почитать, не помню, ищите (reply to 179285)

User<6908616126>: Но tonconnect sdk используется везде, в том числе и в ботах

Ruslan: https://tonapi.io

User<6908616126>: Tonapi лучшее что придумали) 1 запрос в секунду бесплатный план (reply to 179290)

Nikita: Всем привет, кто-нибудь переводил jetton-ы с помощью tonweb?  const depositSellWallet = await wallet.methods.transfer({             secretKey: keyPair.secretKey,             toAddress: config.tokenWallet,             amount: TonWeb.utils.toNano('0.05'),             seqno: seqno,             payload: await jettonWallet.createTransferBody({                 tokenAmount: tokenAmount,                 toAddress: new TonWeb.Address(sellWallet.address),                 responseAddress: new TonWeb.Address(config.mainWallet),                 forwardAmount: TonWeb.utils.toNano('0.01'),             }),             sendMode: 3,         });  пытаюсь вот так, но почему-то переводится 0 токенов

Nikita: (tokenAmount точно не 0)

User<6908616126>: Адрес кошелька подойдет

Zxc: Краудфандинг на тоне?

𝑻𝑶𝑵𝒀: замени на jettonAmount (reply to 179295)

Zxc: Слышал что-то о тон раффлы, кто знаком, прошу ответить. (reply to 179299)

Dima: Друзья привет. подскажите у TON есть какое-то DAO - где компания может выставить на продажу свой ТОКЕН DAO (100% токенов = 100% компании) с личными кабинетами и возможностью голосования для equity партнеров. Спасибо   И еще подскажите кто здесь есть специализирующийся на ТОН НФТ маркетплейсах?

Flyheck: Если речь о стандарте, то такого  еще вродь нет. Реализация есть, сейчас тестируется (reply to 179302)

Asher: ВОт там была презентация, спроси - t.me/ton_breakfast (reply to 179302)

Asher: @wpwwDEV (reply to 179302)

Dmitry: Там у нас один из спикеров рассказывал о проекте токенизации электростанций, но там планируется вроде не на TON (reply to 179304)

&rey: Ещё год назад таких проектов было чуть ли не десять. Посмотрите Hack-a-TONx от DoraHacks. (reply to 179302)

Денис: Привет всем, такой вопрос, я пересылал тон на Bybit без мемо, сделал процедуру возврата, на байбите написано что вернули на изначальный счет с которого был оправлен тон, но мне в тг кошельке ничего не пришло, может кто-то подскажет что делать в такой ситуации

slavagm: Я понять не могу как такие люди появляются в чатах разрабов (reply to 179309)

slavagm: Отправлял наверное конечно просто с Валлета, а не с TON Space? (reply to 179309)

Денис: Да. (reply to 179311)

slavagm: Ну все, подарил деньги на развитие Валлет (reply to 179312)

Денис: Неужели нельзя написать в поддержу ? И решить этот вопрос ? (reply to 179313)

Сергей: Привет всем, кто-то использовал/знает врапперы для highload кошельков на js? едиственное что нашел @scaleton/highload-wallet но выглядит не очень, мб есть еще какие-то решения?

Max | TonMap: Здаров парни.   Кто может помочь с кодом контракта?   Есть метод минта. Но так как есть ограничения, минтит до 200 итемов за раз.  А нужно больше. Например 10000.  Подсказали добрые люди, что через рекурсию можно.   Может кто конкретно мой код отредактировать для этого, чтобы все было по фен Шую?

Евгений: Всем привет. Можно как то понять, что адрес является кошельком EQCRSZf2VC3IcbpCjLYIN9e6_Sl5PO9GK7sjcqlfOYLsjAx8 (testnet) без запроса к апи ?   https://testnet.toncenter.com/api/v2/getWalletInformation?address=EQCRSZf2VC3IcbpCjLYIN9e6_Sl5PO9GK7sjcqlfOYLsjAx8

Torkusz: Всем привет! Как долго проверяется токен, после пулл реквеста?  https://github.com/tonkeeper/ton-assets/pull/272

Zaphod: Адрес - это адрес в сети. Кошелек - это программа вне блокчейна, которая позволяет управлять средствами на адресе (reply to 179319)

&rey: (((0|-1):(\d{64}))|[0-9a-zA-Z_/+-]{48}), и не все из них верные.

Евгений: Спасибо (reply to 179321)

Василий: У нас тут есть ещё контракт кошелька. А кошелёк, который программа вне блокчейна - управляет средствами на контракте кошелька (reply to 179321)

Zaphod: Да, терминология слегка мислединг) (reply to 179331)

Bear: Приветствую, товарищи! Я все еще не могу решить казалось бы стандартную и тривиальную задачу по минту НФТ. У меня начинает складываться такое впечатление, что на ТОН это невозможно. Пожалуйста, переубедите меня в этом. Если вдруг кто-то понимает, что обладает знаниями по пакетному минту энэфтей, напишите мне.

Тимофей: Правильный заход. Я так в Грузии всем говорил, что хинкали не вкусные. Меня 2 недели все кормили, пытаясь доказать, что вкусные. Уехал довольный и сытый. (reply to 179333)

AyanKhan: Hello 👋

AyanKhan: Any expert TON developer here 👋

slavagm: @tondev_eng (reply to 179336)

User<6908616126>: Есть такая статья в документации, "step by step to mint nft")))) там весь рабочий код есть) (reply to 179333)

User<6908616126>: https://docs.ton.org/develop/dapps/tutorials/collection-minting (reply to 179338)

Bear: Думаешь, что мы не изучили все, прежде, чем писать такие просьбы? (reply to 179338)

User<6908616126>: Тогда хз че у вас не получается, ведь все предельно просто и код работает😎 (reply to 179340)

Bear: Хочешь помочь или пописать? (reply to 179341)

Bear: Давай созвон? (reply to 179341)

User<6908616126>: Неа, я ни с кем не сотрудничаю, у меня своя команда) (reply to 179342)

Bear: Ставлю 10 ТОН, что твоя команда не решит вопрос. И еще 10, если решит. 😁

User<6908616126>: Что именно не получается, можно подробнее? Вы не можете из доки скопировать код?) (да, он там разбит на неудобные блоки, но воссоздание готового решения в меня заняло 7 минут) (reply to 179343)

User<6908616126>: У вас не получился даже базовый минт коллекции уточек? (reply to 179345)

Lapis⁴² 💎: Подскажите пожалуйста, что здесь не так? https://tonviewer.com/transaction/9810637064a83a620685cc69448a2a183302b36bbe89e1074bca6d38c23b3cb5

Andrey: У него нет регулярного выражения, это закодированный в Base64 набор байтов (reply to 179324)

Andrey: 1 байт - флаги для адреса (битовая маска isBounceable, isTestnet) 1 байт - номер воркчейна 32 байта - ID контракта 2 байта - CRC16-CCITT чексумма прошлых байтов (reply to 179350)

Zaphod: С другой стороны, можно написать регекс для распознания base64 нужной длины (reply to 179350)

Bear: У нас есть компетенции по минту достаточно неплохие. Но недостаточно хорошие для решения текущей задачи, которая заключается в пакетном минте.  Если все же готов попытаться, то я готов на созвоне все рассказать. (reply to 179348)

Andrey: 36 байт длина (reply to 179353)

Andrey: это считается без регекса

Andrey: Base64 кодирует каждые 3 байта в 4 символа

User<6908616126>: Если бы не свой проект, мб и попытался бы, а так увы, лишь советами где почитать😁 (reply to 179354)

Bear: Отговорка. Потому что пытливому уму было бы интересно решить сложную задачу. (reply to 179358)

User<6908616126>: Если бы вы ее описали бы, хотя бы в лс, я бы на досуге подумал. А соглашаться сделать это сразу ответственность(а я, как человек честный, лишней ответственности не хочу) (reply to 179359)

User<6908616126>: Вот и все

User<6908616126>: Если я сейчас соглашусь, это значит что я ее вам должен помочь решить. Я не хочу никому ничего быть должен, потому что времени и так нет. Но если задачу опишите я ее на досуге попробую решить🍸

Lapis⁴² 💎: https://tonviewer.com/transaction/f2183ce15e2ef752abaf96b46d60a012a26192beee1eb6fa1530e7937ca46289  А что я не так сделал почему Bounce

Lapis⁴² 💎: Точнее почему жетоны не отправились (reply to 179363)

Василий: Ссылка битая (reply to 179363)

Lapis⁴² 💎: Ой, сейчас (reply to 179365)

Lapis⁴² 💎: https://tonviewer.com/transaction/d4cf1bc5f5abe59aac8e84bdf80d6b448c769facb600fbb0776788242786c77c

Василий: Остатка от msg_value - forward_ton_amount не хватило на трансфер. https://github.com/ton-blockchain/token-contract/blob/main/ft/jetton-wallet.fc#L86 (reply to 179367)

Lapis⁴² 💎: Спасибо (reply to 179368)

Lapis⁴² 💎: А ещё я понял что я тупой и не тот адрес получателя указал

Василий: Тогда хорошо что не хватило (reply to 179370)

Assi: Пацаны всем ку. При попытке сгенерировать новый адрес через Vanity Adress он генерит старый формат EQ, как сделать чтоб фармилось UQ формат?

Vladimir: Ей 2 года, никто не обновлял после смены адреса. (reply to 179372)

larlmode: Подскажите пожалуйста какой версии создаются кошельки в тонкипере? v4r2?

Vladimir: Уже нет. (reply to 179375)

Vladimir: Если просто — да. (reply to 179374)

Assi: И ничего теперь не поделать? (reply to 179373)

Vladimir: 1. Переписать с разрешения китов. 2. Попросить обновить китов. (reply to 179378)

Assi: А при чем тут киты? (reply to 179379)

Vladimir: Ты же про это https://github.com/ton-community/vanity-contract? (reply to 179380)

Assi: А не  https://github.com/xssnick/tonutils-go/tree/master/example/vanity (reply to 179381)

Vladimir: Выглядит проще. Надо просто проверять не старый адрес, а новый. Строка 73. (reply to 179382)

Dmitry GX: Всем привет, ребят подскажите плз, пытаюсь создать перевод в тоне, создал кошелек, пополнил 0.02 TON, подтвердил, списалась кома за отправку в сеть (оставалось примерно 0.015 TON). Далее создал трансфер на 0.01 TON и отправил его, газ списался, а транзы как не было так и нет)) Запрос на трансфер:          const delay = ms => new Promise(resolve => setTimeout(resolve, ms));         const tonweb = new TonWeb();          let wallet = tonweb.wallet.create({address: from});         console.log('wallet = ' + wallet);         console.log(wallet);         await delay(1000);          let seqno = await wallet.methods.seqno().call();         console.log('seqno = ' + seqno);         await delay(1000);          let transfer = wallet.methods.transfer({             secretKey: key,             toAddress: to,             amount: defaultFee,             payload: "TO HOT",             sendMode: 3,             seqno: seqno,         });         console.log('transfer = ' + transfer);         console.log(transfer);         await delay(1000);           let transferSended = await transfer.send();         console.log('transferSended = ' + transferSended);         console.log(transferSended);         await delay(1000);          let transferQuery = await transfer.getQuery();         console.log('transferQuery = ' + transferQuery);         console.log(transferQuery);   Логи:  wallet = [object Object] WalletV3ContractR1 {   provider: HttpProvider {     host: 'https://toncenter.com/api/v2/jsonRPC',     options: {}   },   options: {     address: '0:3e30298460bcd90e865b8118f3e1080b169c4adfd2229ce530405b8d496886ea',     code: Cell { bits: [BitString], refs: [], isExotic: 0 },     wc: 0,     walletId: 698983191   },   address: Address {     isUrlSafe: false,     isUserFriendly: false,     wc: 0,     hashPart: Uint8Array(32) [        62,  48,  41, 132,  96, 188, 217,  14,       134,  91, 129,  24, 243, 225,   8,  11,        22, 156,  74, 223, 210,  34, 156, 229,        48,  64,  91, 141,  73, 104, 134, 234     ],     isTestOnly: false,     isBounceable: false   },   methods: {     transfer: [Function: transfer],     transfers: [Function: transfers],     seqno: [Function: seqno]   },   deploy: [Function (anonymous)] } seqno = 2 transfer = [object Object] {   getBody: [AsyncFunction: getBody],   getQuery: [AsyncFunction: getQuery],   send: [AsyncFunction: send],   estimateFee: [AsyncFunction: estimateFee] } transferSended = [object Object] { '@type': 'ok', '@extra': '1712336365.121516:3:0.1151537228199273' } transferQuery = [object Object] Cell {   bits: BitString {     array: Uint8Array(128) [       136,   0, 124,  96,  83,   8, 193, 121, 178,  29,  12, 183,         2,  49, 231, 194,  16,  22,  45,  56, 149, 191, 164,  69,        57, 202,  96, 128, 183,  26, 146, 209,  13, 212,   1, 237,        55, 132, 112,   2,  78, 225, 171, 154,  53, 158, 137, 219,       175, 228, 158, 181,  82, 133, 254, 203, 173, 158, 118, 201,       189, 159,  45, 156,  59,  80,  92, 164, 240,  89, 208, 121,       165, 212, 245,  17, 106,  99, 102,  82, 137, 240,  92, 149,       109, 200,  29, 206, 194, 210,   4,   2, 184,  98, 242, 176,       159, 216,  73,  77,       ... 28 more items     ],     cursor: 893,     length: 1023   },   refs: [ Cell { bits: [BitString], refs: [], isExotic: false } ],   isExotic: false }

Dmitry GX: собственно кошелек с которого дважды пытался отправить и дважды списался только газ: https://tonscan.org/address/UQA-MCmEYLzZDoZbgRjz4QgLFpxK39IinOUwQFuNSWiG6uME (reply to 179384)

Zaphod: 36 байт / 3 * 4 (reply to 179386)

Lapis⁴² 💎: Спасибо, лучший, я благодаря тебе доделал библиотеку которую уже думал никогда не доделаю (reply to 179368)

Илья: Где почитать про exit code?

Илья: Спасибо

Zurlex: Здравствуйте

Zurlex: Возможно каким то макаром получить из TON адреса баланс каких либо токенов кроме TON?

Vladimir: Запросить имеющиеся жетоны. (reply to 179398)

Zurlex: Как это сделать на питоне?   Я облазил SDK документации не смог найти такого, а запрос баланса приводит в вывода в TON

Zurlex: Скинте документации которая мне поможет?

vof4ella: Так тут предлагается добавить уже существующий кошелек в тестовой сети, а если ранее я не использовал тестовую сеть, каким образом я могу начать использовать тестовую сеть? (reply to 174053)

Zurlex: Я пытаюсь получить информацию с телеграмм кошелька, но получаю только TON

User<6908616126>: Вставь рандомную мнемоническую фразу (не советую от реального кошелька 😁) и будет тебе счастье) (reply to 179402)

&rey: Баланс жетонов в кошельке не хранится. (reply to 179398)

vof4ella: Спасибо за совет. Но схема конечно ооочень странная. Замудрили так замудрили (reply to 179404)

&rey: Вам нужен индексер вроде dton.

&rey: От реального низя, иначе транзакции будут дублироваться. (reply to 179404)

Zurlex: И взять его API? (reply to 179407)

User<6908616126>: Есть немного. Но с технической точки зрения вроде и ничего сложного😁 (reply to 179406)

User<6908616126>: А как, это ж разные сети.... (reply to 179408)

Zurlex: Он поможет просканировать кошелёк на наличие определённых токенов? (reply to 179409)

Zurlex: Узнав их количество (reply to 179412)

&rey: Ключи одинаковые – при равном seqno подписи одинаковые. Вуаля. (reply to 179411)

User<6908616126>: В какой то момент все равно окажется что на одной мнемонике сидят и кошелек в маиннете и в тестнете(да, до этого долго идти, да вероятнасть маленькая, но все же) (reply to 179411)

User<6908616126>: Типа кошельком из тестнета можно подписать маиннет?) (reply to 179414)

User<6908616126>: Прикол🤣

&rey: Можно лучше мой кошелёк окажется с той же мнемоникой, что у валидатора? Тех хотя бы больше 200... (reply to 179415)

User<6908616126>: Можно, я разрешаю) (reply to 179418)

vof4ella: Ну если знать алгоритм то соглашусь. (reply to 179410)

vof4ella: Благодарю (reply to 179410)

Zurlex: Подскажите пожалуста, что именно мне нужно?

&rey: Что-то вроде AccountSearchByAddress, parsed...owner (reply to 179422)

Ma><im: добрый вечер, смотрю сейчас на новый контракт мульти подписного кошелька в TON и не понимаю зачем impure у функции load_data()? она же никак не меняет состояние хранилища c4 смарт-контракта?

Zurlex: Не бро.. Там я даже документацию не могу найти в документации (reply to 179423)

Zurlex: Там нет кода

Zurlex: Кроме 50 строк

&rey: Глобальные меняет. (reply to 179424)

User<6908616126>: ребят, появился интересный вопрос, как расчитать точную(+-) комиссию при отправки тонов

User<6908616126>: через @ton/ton либу js отправляю

Nixuds: Так и скажи что у вас есть эмуляция и пора идти на тонапи😊 (reply to 179431)

User<6908616126>: отлично! спасибо большое, а то я уже начал сомневаться в своих знаниях))) (reply to 179431)

Denis: она же точно не расчитает (reply to 179433)

User<6908616126>: да мне хоть как то, пойду методы посмотрю (reply to 179435)

Nixuds: Тогда как вы получаете комиссию? (reply to 179435)

Denis: приблизительно. и кстати это вообще не комиссия :) (reply to 179437)

Пескарь™ | фронтент телефонов: а че там? разница в балансе просто? (reply to 179438)

Nixuds: Все мы поняли о чем реч. (reply to 179438)

Denis: типа того разница в балансе минус явно распознаные перемещения тонов (reply to 179439)

Zurlex: Кто то поможет разобратся в документации  GraphQL я вижу только 50 строк кода, не более, и не понимаю как из них получить  баланс например токенов ZUR из кошелька телеграмм

web3playton Airdrop TON: Ребят, есть у кого скрипт для массового залива NFT на getgems?

­: Вопрос к тем, кто работал с ton dns. Есть ли возможность отключить доступ к сайту .ton по ip сервера? И как это реализовать

Vladimir: Т.е. чтобы определенный IP не мог посмотреть сайт? (reply to 179444)

­: Нет, чтобы при вводе ip сервера нельзя было попасть на страницу ton сайта

Torkusz: /report (reply to 179447)

Vladimir: А зачем тогда поднимать ton сайт? Почему просто порт не выбрать нестандартный? (reply to 179446)

Andrey: Так домены по аднл адресу добавляются (reply to 179444)

­: Я могу попасть на страницу через домен, аднл и ip сервера. Хочу ограничиться доступом по .ton и adnl (reply to 179451)

Andrey: Закройте порт веб сервера, rldp прокси оставьте открытым (reply to 179452)

User<6908616126>: Что бы не попасть на сайт по "белому" ip сервера, блочить запросы надо на уровне файервола (reply to 179446)

User<6908616126>: Да, надо просто закрыть порт (reply to 179453)

User<6908616126>: Насколько я понимаю, rldp запускать на том же сервере и указывать 127.0.0.1 ip сервера при запуске прокси, верно? (reply to 179453)

User<6908616126>: И тогда полностью закрывать все порты на сервере

Andrey: Да (reply to 179456)

User<6908616126>: Тогда совет для тех кто настраивает сервера, что бы сделать видимость выключеного сервера по белому ip закрывайте все порты и почитайте про отключение отклика на icmp пакеты(на команду ping) и тогда ваш сервер будет как будто мертвым) (reply to 179457)

­: Спасибо, помогло

Denis: На всякий случай: хостить дарк маркет в тоне плохая идея. Он не предоставляет луковичного роутинга как тор. Тоесть вычислить адрес вашего сервера не сложно. (reply to 179452)

Тимофей: Давай уж полный совет. Как по красоте сделать? (reply to 179462)

Denis: Довольно сложно. Там целая группа мер по анонимизации (reply to 179463)

User<6908616126>: При если закрыть сервер вайерволом в фулл +  включить icmp_echo_ignore то жаже с ip на руках ты серверу ничего плохого не сделаешь)))) (reply to 179462)

User<6908616126>: Ну разве что прийти и физически его уронить)

Denis: Когда хостишь даркмаркет именно это обычно и происходит (reply to 179466)

Denis: Ну или конкуренты ддос нальют

User<6908616126>: Ну в том то и дело чьо все закрвто и куда лить непонятно (reply to 179468)

User<6908616126>: У тебя вплоть до 3 уровня оси модели все закрыто

User<6908616126>: Остается 1 и 2

User<6908616126>: Но по факту это именно физически взять сервер в руки и уронить на пол)

Denis: Айпи есть - можно лить UDP или TCP syn-flood (reply to 179470)

User<6908616126>: Так все порты закрыты, куда лить?

User<6908616126>: Я ж сразу сказал что фаервол в фулл закрыт. Он просто игнорит этот трафик

User<6908616126>: Кроме этого, еще и icmp игнорится, значит мы и л3 атаку исключаем

User<6908616126>: Л7 закрыто(вебморды нет, http запросы сервер не принимает), л4 закрыт(все порты смотрящие в глобальную сеть закрыты), л3 закрыт. Остается л6(честно, ни разу не видел такую атаку, надо почитать)и л1-2. Л1 и л2 атака это молотком(условно) разбить сервер

User<6908616126>: Короче до сервера не достучишься

Святослав: И не говори (reply to 179462)

Andrey: порты то ADNL открыты (reply to 179474)

Denis: Чем закрыты? (reply to 179474)

User<6908616126>: Фаерволом (reply to 179481)

Denis: На самой тачке?

User<6908616126>: А это мннюе надо почитать, не пробовал настраивать прокся для тона (reply to 179480)

User<6908616126>: Да (reply to 179483)

Denis: Вам зальют 100 гигабит мусора. Ваш фаервол не поможет (reply to 179485)

User<6908616126>: Тор позволяет с закрытыми портами это делать

User<6908616126>: Такое тоже может быть кнш..... Ну это только на практике проверять... (reply to 179486)

Denis: Не спалить айпи при хостинге даркмаркета это важно. Фаервол на самой машине не спасёт

Denis: А брать какую-нибудь клаудфару нельзя

User<6908616126>: Хотя тут еще смотря как настроить это дело. Оно то мб и пробьется когда то, но училий потратить не мало надо (reply to 179488)

User<6908616126>: Не отрицаю) (reply to 179489)

Flyheck: А есть линки на живые такие проекты? В идеале, с ончейновым распределением прибыли через голосование (reply to 179308)

Azizbek: Здравствуйте всем  У меня одна проблемы возникла можно ли ее решить Я ошибочно перекинул Nft из Ton space на Toncoin  А в Toncoin не отображается Nft  Я потерял его или можно как то вернуть?

slavagm: В чат пора добавлять капчу в виде исправления ошибки в коде видимо

Tim: так люди сюда и заходят чтобы им помогли исправить ошибку в коде (reply to 179495)

Vladimir: Хотя бы вопрос: Какие есть кошельки. (reply to 179495)

Vladimir: Что за зверь этот Toncoin? (reply to 179494)

slavagm: Добавляешь на входе вопрос Что нужно убрать, чтоб код заработал? print("Hello, world")) Думаю вопросы с кошельками сократятся в пару раз (reply to 179496)

Azizbek: Не понял вопроса (reply to 179498)

Тимофей: Легко. Добавить <?php (reply to 179499)

Zaphod: Хорошо хоть не на brainfuck пример (reply to 179499)

Vladimir: Что за Toncoin, что ты NFT на него перекинул? Такого кошелька нет. (reply to 179494)

slavagm: Идея кстати неплохая (reply to 179502)

Vladimir: Давай упростим: ты перекинул в Wallet? (reply to 179494)

Azizbek: Да :( (reply to 179505)

Vladimir: Можно написать в техподдержку и желание на Новый год уже есть: чтобы они ответили. (reply to 179506)

Azizbek: Уже неделю не отвечают (reply to 179508)

Flyheck: Это вообще реально? (reply to 179508)

Flyheck: А как они траблы с p2p, кстати, обрабатывают, если они так морозят в тех. поддержку?

Vladimir: Нужно верить в чудо. (reply to 179510)

Vladimir: п2п важнее. (reply to 179511)

Azizbek: Ладно спасибо за информацию 👍

Flyheck: Имею ввиду, в случае возникновения спора в p2p над идти в тех. поддержку, а в тех. поддержке они морозят. Как тогда у них p2p до сих пор работает? (reply to 179513)

Vladimir: Искренне говоря, я бы тоже забил на то, кто и что куда ошибочно перевел. п2п приносит комиссию. (reply to 179515)

Flyheck: Возможно, ни один из них так и не завершили? (reply to 179493)

— 2024-04-06 —

0 CRPT/ID2000SOLGDOWN: доброе утро, друзья, подскажите пожалуйста, кто то сталкивался, как пофиксить? Уже 2000 сделок, все равно висит

0 CRPT/ID2000SOLGDOWN: Вам временно недоступно создание объявлений на покупку

Андрей: Вам в техподдержку надо Здесь не техподдержка (reply to 179519)

0 CRPT/ID2000SOLGDOWN: молчит уже неделю (reply to 179521)

0 CRPT/ID2000SOLGDOWN: в бота обращался уже на 99 языках мира

Zurlex: Привет еще раз. Мне нужно создавать транзакции и получать баланс пользователя по кошельку TON в определенных токенах это возможно?  Через TON SDK или DTon

Ma><im: тот же вопрос по той же серии контрактов, зачем то тут impure? эта функция просто считает количество записей в словаре. я слышал, что елси функция ничего не возвращает и она без impure, то компилятор может вырезать её, но тут то функция возвращает значение... (reply to 179424)

Svαtoωλ‎: Как так получается , что тонкипер отображает стоимость токена условно 10к$ но при попытке свапа на тоны выходит 0.0000001 тон?

Denis: попробуйте другой декс (reply to 179526)

наз: tonapi /v2/accounts/{account_id}/jettons (reply to 179524)

Svαtoωλ‎: Ну если я не ошибаюсь то это вынесли ликву или что-то подобное, но цена огроменная все равно каким-то образом отображается) (reply to 179527)

Andrey: бросание исключений (throw_unless) это impure функция (reply to 179525)

web3playton Airdrop TON: Добрый день ребята, у кого нибудь есть скрипт залива NFT на Getgems? Надо 5к залить)

slavagm: А как оно там выглядит вообще (reply to 179532)

web3playton Airdrop TON: async def deploy_batch_items():     body = create_batch_nft_mint()     collection = create_collection_mint1()      client = await get_client()     seqno = await get_seqno(client, wallet_address)     query = wallet.create_transfer_message(to_addr=collection.address.to_string(),                                    amount=to_nano(n, 'ton'), seqno=seqno, payload=body)     await client.raw_send_message(query['message'].to_boc(False)) (reply to 179533)

Ma><im: да, точно, не подумал, спасибо большое! (reply to 179530)

Evgeny: Про гивер знаю, но надо много на большой тест.

Ma><im: https://t.me/testgiver_ton_bot (reply to 179536)

Evgeny: Про гивер знаю, но надо много на большой тест. (reply to 179538)

Evgeny: Тысяч 10 нужно 🫣

Андрей: Тогда вам нужен mylocalton (reply to 179540)

Evgeny: Погуглю, спасибо! (reply to 179541)

&rey: Список вроде тот же. (reply to 179543)

Def: Привет, подскажите, пожалуйста, где есть информация о том, как сделать смартконтракт с гивером собственного жетона? Хочу сделать жетон с возможностью раздачи с помощью pow гивера

Nixuds: Исходный код тон посмотри и реализуй . (reply to 179546)

Nixuds: Там есть все контракты

Dmitry | backend4you.ton: Если вы возвращенное значение не используете - может тоже вырезать (reply to 179525)

Def: А подскажешь куда смотреть? Я нашел гивер, но это про другое: https://github.com/ton-blockchain/ton/blob/master/crypto/smartcont/pow-testgiver-code.fc (reply to 179547)

Konstantin: Всем привет, пытаюсь прочитать словарь, но получаю ошибки: no more reference или index is out of bounds // tact map: map<Address, Bool>;  // ton-core const dict = stack       .readCell()       .beginParse()       .loadDict(Dictionary.Keys.Address(), Dictionary.Values.Bool());

Alex: Хочу поделиться курсом по TON. Переведён с английского с помощью янекса. Думаю многим он будет полезен https://t.me/TONBlockchainCourse

Катант: так а что тебе еще надо (reply to 179550)

Timofey: Здравствуйте, нужна помощь, нам нужен кодер чтоб он помог нам на нашем сайте Stalinfoundation.ru добавить интеграцию со смарт контрактами в тоне.  Если кто может помочь, пишите 🚀

Konstantin: Разобрался, нужно было использовать метод 'loadDictDirect' (reply to 179551)

liminal: есть ли в опенсорсе относительно новые примеры получения цены доллара в контракт через redstone?

Nixuds: Не так прочитал. Листинг сделайте на дексе например. (reply to 179562)

Zaphod: Токен делается для проекта - и никак иначе. У вас есть полезный людям проект? (reply to 179562)

Amir: Привет всем,  Есть ли у кого-то проблемы с использованием библиотеки @tonconnect/ui-react в React, которая предоставляет кнопку для подключения к кошельку TON? Навожусь на qr код и он не грузит в Tonkeeper

Kos: Всем привет возможно кто-то знает ответ при подаче на гранты запрашивается ссылка на Github. обязательно ли ее указывать, или достаточно предоставить ссылку на веб приложение, где можно посмотреть весь флоу?

first_name: есть ли возможность детектить новые транзы ещё до попадания в блоки?  именно получение транз как можно быстро до того, как они попадут в блок  я вот видел на днях как тонвьювер это проворачивает как только я отправил транзу с любого лайтсервера, то на сайте пишет фулл стек (эмуляция) + pending

Denis: Очевидно есть, раз тонвьювер это делает (reply to 179569)

Andrey: Сообщения из приложения кошелька сначала попадают на лайт-сервер, а там уже бродкастятся в оверлей шарда. Слушая оверлей можно ловить чужие сообщения которые еще не попали в блок (reply to 179569)

Zurlex: import requests  API_KEY = "" ACCOUNT_ID = ""  # Адрес получателя recipient_address = "" # Сумма перевода в TON (например, 0.1 TON) amount = 0.01 * 10**9  url = 'http://tonapi.io/v2/blockchain/message'  payload = {     "source": {         "account": ACCOUNT_ID,         "signer": {"keys": [API_KEY]}     },     "destination": recipient_address,     "value": amount,     "bounce": True,     "payload": "" }  response = requests.post(url, json=payload, headers={"x-api-key": API_KEY}) data = response.json()  if 'id' in data:     print(f"Транзакция успешно отправлена! ID транзакции: {data['id']}") else:     print("Ошибка при отправке транзакции.")   не работает код

SWAT: Всем привет! Тут сидят одни разработчики ?  Может кто-то подсказать как начать в этом деле, возможно может нужна кому-то помощь?  Интересное для меня развитие и могу кое-чем помочь.

Denis: ну начнём с того что Authorization: "Bearer" + API_KEY (reply to 179574)

Denis: а во-вторых откуда вообще вы эту дичь взяли?

Denis: я правильно понимаю что вы мне сейчас сид фразу на сервер в запросе шлете?

Zurlex: чат гпт.. (reply to 179577)

Zurlex: не бейте

Zurlex: я просто не в этой сфере и мне нужно 2 запроса баланс и транкзакции отправлять

Zurlex: и все

Zurlex: баланс уже работает

Zurlex: import requests  API_KEY = "AEGPHYZ2V772JSQAAAACVRJ2JAHEGDXYUZJJYAAPJEGH2W57FKLSMLUI6USHDNBT75JLL3I" ACCOUNT_ID = "UQCMSofPKt0SWK3ISeuHFerHThFjP4mTiPZjHkBqQsgO-wSS"  url = f'http://tonapi.io/v2/accounts/{ACCOUNT_ID}/jettons' params = {'currencies': 'ton,usd,rub'}  response = requests.get(url, params=params) data = response.json()  for balance in data['balances']:     if balance['jetton']['symbol'] == "ZUR":         zur_balance = int(balance['balance']) / 10**9  # zur_balance переменная для баланса         break

Zurlex: люблю палить ключи..

&rey: А добавьте такой метод))) (reply to 179578)

Denis: а вы и в магазине вот так стену убрать можете? (reply to 179586)

Zurlex: а вы создатель? (reply to 179587)

Zurlex: где взять код.. на транкзакции

Denis: ну не я один но типа того

Zurlex: Можете тогда помочь..

Denis: я думаю с такой глубиной начальных знаний стоит начать с просмотра видео обучающих. там были примеры где-то на питоне типа как проверить баланс и как отправить транзакцию

Zurlex: скинте ссылку

Zurlex: мне нужно джет токен кидать в транзакции где найти на эту тему видео и вообще какую либу нужно использовать

Zurlex: зачем вы сюда залили ботов

Zurlex: /v2/blockchain/message c помощью этого делать?

Zurlex: какой метод нужен

Zurlex: я не прошу рыбы

Aziz: Есть гайды по testnet? (reply to 179592)

Zurlex: а только удочку

&rey: Дока на docs.ton.org. Там есть обновлённая страница SDK, кстати. (reply to 179594)

&rey: processing jettons очень пригодится.

Zurlex: всм ты о чем (reply to 179603)

Zurlex: ну я тут 2 день сижу уже (reply to 179602)

&rey: Читали https://docs.ton.org/develop/dapps/cookbook#tep-74-jettons-standard? (reply to 179604)

Zurlex: нет только начало картинку посмотрел 🤡 (reply to 179606)

Zurlex: пойду читать

Vladimir: В рыболовном магазине. (reply to 179601)

&rey: Ну и вам ещё стоит потренироваться с отправкой тон, прежде чем работать с контрактами жетонов. https://docs.ton.org/develop/dapps/cookbook#how-to-transfer-ton-how-to-send-a-text-message-to-other-wallet (reply to 179611)

Zurlex: from pytoniq import LiteBalancer, WalletV4R2, begin_cell import asyncio  mnemonics = ["your", "mnemonics", "here"]  async def main():     provider = LiteBalancer.from_mainnet_config(1)     await provider.start_up()      wallet = await WalletV4R2.from_mnemonic(provider=provider, mnemonics=mnemonics)     USER_ADDRESS = wallet.address     JETTON_MASTER_ADDRESS = "EQBlqsm144Dq6SjbPI4jjZvA1hqTIP3CvHovbIfW_t-SCALE"     DESTINATION_ADDRESS = "EQAsl59qOy9C2XL5452lGbHU9bI3l4lhRaopeNZ82NRK8nlA"      USER_JETTON_WALLET = (await provider.run_get_method(address=JETTON_MASTER_ADDRESS,                                                         method="get_wallet_address",                                                         stack=[begin_cell().store_address(USER_ADDRESS).end_cell().begin_parse()]))[0].load_address()     forward_payload = (begin_cell()                       .store_uint(0, 32) # TextComment op-code                       .store_snake_string("Comment")                       .end_cell())     transfer_cell = (begin_cell()                     .store_uint(0xf8a7ea5, 32)          # Jetton Transfer op-code                     .store_uint(0, 64)                  # query_id                     .store_coins(1 * 10**9)             # Jetton amount to transfer in nanojetton                     .store_address(DESTINATION_ADDRESS) # Destination address                     .store_address(USER_ADDRESS)        # Response address                     .store_bit(0)                       # Custom payload is None                     .store_coins(1)                     # Ton forward amount in nanoton                     .store_bit(1)                       # Store forward_payload as a reference                     .store_ref(forward_payload)         # Forward payload                     .end_cell())      await wallet.transfer(destination=USER_JETTON_WALLET, amount=int(0.05*1e9), body=transfer_cell)     await provider.close_all()  asyncio.run(main()) это то что я искал 2 дня?

&rey: Почти наверняка. (reply to 179614)

Zurlex: ну да там мимоника нужна (reply to 179615)

Sul: Всем привет  Кто знает что можно сделать?  Я сделал монету через минтор  Теперь не пойму, почему не могу завести ликвидность через dedust  И как сделать жетон проверенным?

Vladimir: Только время сделает твой жетон проверенным. (reply to 179620)

John: Скажите, контракт в БЧ TON изменяемый или нет? Т.е. однажды задеплоив его, есть возможность изменить код контракта без смены его адреса? Или один деплой - один адрес?

John: И еще вопрос, средства отправленные на адрес контракта, могут ли быть возвращены?

Vladimir: Можно заблокировать изменение кода контракта. (reply to 179625)

Roman: Код самого контракта изменить нельзя, но можно создать новый с новым кодом  Edit: действительно можно  Подтверждение - https://blog.ton.org/six-unique-aspects-of-ton-blockchain-that-will-surprise-solidity-developers  Адрес вычисляется из initial data+initial code. (reply to 179625)

Vladimir: Кем возвращены? Если контрактом, то у него должна быть такая логика. (reply to 179626)

John: Про блокировку уже читал. Собственно вопрос после этого и возник. После блокировки понятно что нет. А до блокировки? я могу полностью поменять код контракта? Что будет с данными, которые на тот моент в контракте могут уже существовать? (reply to 179627)

Andrey: В TVM есть опкод SETCODE который применяет ячейку с новым кодом к текущему контракту и следующие транзакции будут с этим контрактом на новом коде.  Так что ответ: Если в контракте изначально отсутствует SETCODE - он не изменяемый. Если есть возможность использовать SETCODE - значит изменяемый.  Но адрес не меняется после замены кода (reply to 179625)

slavagm: В TON можно менять код контракта (reply to 179628)

John: Вот-вот, я именно об этом. Без логики можно вернуть или нет? Если с логикой, это как в EVM solidity - только если будут написан метод выводы. Если метод не написан и кантракт задеплоен, то уже все, ничего никогда не сделать, средства будут потеряны навсегда. Тут так же? (reply to 179629)

John: адрес поменяется? будет новый? (reply to 179628)

Andrey: https://t.me/tondev/179631 (reply to 179634)

John: Спасибо большое. Т.е. в теории - это возможно. Надо просто правильным образом писать контракт. Про SETCODE не кинете в доку ссылку? (reply to 179631)

Vladimir: Гуглится же  https://answers.ton.org/question/1533945080165961728/is-it-possible-to-change-a-deployed-smart-contract-on-ton (reply to 179636)

John: По английски же шь :) Но всеравно сенкс, переведу. (reply to 179637)

Vladimir: Ну, к сожалению, еще нет TON  1С. (reply to 179638)

John: Ну хотя бы есть ру-говорящее комьюнити. И то хлеб. До этого писал смарты на EOS, там в чате девов только про курс иоса мечтали и все. Ничего про разработку. В анг-чате - норм, но очень тяжело прям в онлайне по английски. Но приходилось. Здесь вот прям очень бодро смотрю народ общается. (reply to 179639)

Roman: Наминусили )) (reply to 179628)

K⁧: Коллеги, а я могу в ТАКТе сравнить 2 опциональные переменные?  Вот так например  if msg.jetton_address != null && self.jetton_address != msg.jetton_address {

John: Еще вопрос по этому. В общем все понял. Забавно конечно сделано, но выглядит как возможность отрезать себе ногу :) Если я задеплою смарт контракт, в которому буде SETCODE, затем вызову эту операцию с новым телом кода контракта, но там забуду (!) написать SETCODE, то я обрублю же сук, на котором сижу, верно? (reply to 179637)

K⁧: или надо жестко делать?  if msg.jetton_address != null && self.jetton_address!! != msg.jetton_address!! {

Vladimir: Логично. (reply to 179643)

Vladimir: А как иначе закрыть возможность редактировать код? (reply to 179643)

John: И по поводу данных, либо не услышал ответа, либо не понял его. Что происходит с данными контракта, при деплое нового тела контракта? Скажем контракт изменился настолько что уже работает с данными по другому (размеры данных уже не те, интерпретация не та).  Там у контракта крыша не поедет? Вообще данные удаляемы в контракте? Есть такая функция "очистить память контракта"? Или надо писать свои методы для удаления всех данных?

John: Да, точно, не подумал. Это как раз именно то что и нужно чтобы закрыть и отвязаться от контракта. (reply to 179646)

Sul: Че тут делать, ребят?

&rey: Ну, к контракту исходный код был опубликован и проверен. (reply to 179649)

Roman: По идее при смене кода контракта нужно самостоятельно позаботится и о данных. Почистить - set_data(begin_cell().end_cell()); (reply to 179647)

John: занес в копилочку "умные мысли по ТОНу" :) (reply to 179651)

Sul: Блин, я никак не пойму, почему эта штука не пропадает 🥴 (reply to 179650)

Sul: А как попасть на диор, если хотят ссылку на токен внутри диор 🥴

Nick: Там автоматически вроде появляются токены при наличии свопов. (reply to 179692)

Sul: То есть сперва ликвид завести? (reply to 179693)

Vladimir: Логично. (reply to 179694)

Kos: @andreypfau можете плз сориентировать к кому обратиться по вопросу? (reply to 179568)

first_name: как можно прослушивать оверлей? (reply to 179573)

Vladimir: https://docs.ton.org/develop/network/overlay (reply to 179697)

first_name: не особо сказано про реализации (reply to 179698)

Vladimir: Вы и по ссылке на полную статью прогулялись? (reply to 179699)

first_name: да (reply to 179700)

John: Скажите, есть ли аналог https://minter.ton.org/ для тестнета?

Andrew: https://minter.ton.org/?testnet=true (reply to 179702)

John: Как все просто оказывается 🤣 (reply to 179703)

Denzel': Всем доброй ночи! Кто-то знает как можно отправлять транзакции без подтверждения пользователя? То есть, человек подключил кошелек через ton-connect и поставил лимитку на открытие позиции. Как сделать так чтобы лимитка открылась без участия человека?

Vladimir: Нельзя. (reply to 179705)

Denzel': Storm Trade же как-то это делает (reply to 179706)

sd: Шторм трейд делает не так, в "лимитку" юзер заранее отправляет монеты, а затем они в своём контракте их в нужный момент задействуют. (reply to 179707)

Denzel': Агась, то есть если пользователь скинет деньги на смарт контракт(который используется как хранилище), то уже можно будет это реализовать? Спасибо за идею (reply to 179709)

Denis: Да ладно. Хватит стебаться над человеком уже. https://docs.tonconsole.com/tonapi/streaming-api#real-time-notifications-about-pending-messages-mempool (reply to 179698)

Sul: А тестнет зачем нужен был? 🤔 (reply to 179703)

Andrew: тестнет для тестов)  можно использовать для репетиции перед выходом проекта (любого) в майннет (reply to 179716)

Stepan: Вообще так делают все подобные трейд боты на всех чейнах (reply to 179709)

Stepan: Как правило есть кошелек-контракт на который пользователь загружает депозит и через интерфейс трейдбота с него торгует

Николай: Где можно узнать больше про интеграцию ton с другими сетями?

— 2024-04-07 —

User<2028064858>: А есть какие то ограничения по времени или количеству отправляемых транзакций? У меня почему то программно не все транзы уходят 😭

Vladimir: Конечно. (reply to 179731)

User<2028064858>: А где посмотреть можно ? (reply to 179732)

Vladimir: Смотря, что используешь: на сайте TonCenter или TonAPI. (reply to 179733)

User<2028064858>: Тон апи вообще, поищу там, спасибо (reply to 179734)

Eldar: Привет 👋 Подскажите,  могу я использовать блокчейн тон как базу данных? Сохранять пользователей, свойства, связи.

Denis: У богатых свои причуды, но можете (reply to 179738)

random_tnt: ну если вы будете под каждой транзакцией оставлять комментарии, или писать это в метаданные токены, то да, но это вам дорого обойдется (reply to 179738)

Eldar: Тогда лучше сделать обычный сервер с бд и отдельный контракт для тон. (reply to 179740)

Vladimir: Отличная идея. (reply to 179741)

Max: При чём тут токены вообще? (reply to 179740)

random_tnt: у токенов есть метаданные  туда можно писать текст (reply to 179743)

Gleb: Всем привет! Возможно не по адресу, но саппорт тг не очень активный, а коммьюнити, может быть сможет сориентировать как решить проблему.  При выводе доп. наград с пула ликвидности валютной пары на DeDust, сталкиваюсь с таким сообщением, на скрине. (невозможно проверить транзакцию) сама транзакция так же не грузится. Хотя и тон спейс и просто wallet работают и всё нормально.   Тона на комиссии достаточно... Монетки всё ещё лежат в пуле (это вроде не должно мешать выводить доп.награды)  Извините за, возможно, ламерский вопрос, но я не знаю куда копать. Интернет и поиск тут ничего не дал.

IndexCorp: Status кошелька uninit что значит Если отправлю туда монеты и оставлю этим статусом ничего не грозит? Сид конечно записал

Dmitry | backend4you.ton: Наверняка есть. Но тут чат разработчиков на блокчейнн, мы тут биты в ячейки пакуем и сообщения с монетами отправляем, так что тоже не в курсе. (reply to 179752)

Dmitry | backend4you.ton: Значит что помимо сида не забудьте записать версию кошелька (v3r2, v4…) ибо из одной сидфразы они дадут разные адреса. Ну и не забывайте про флаг bounce при отправке (или non-bounceable вид адреса), чтобы монеты присланные остались, а не вернулись автоматом назад (reply to 179753)

IndexCorp: понял спасибо, лучше активирую))) (reply to 179755)

User<6811839433>: Есть кто  фронтенд ?

最も弱い: ManifestContentError: [TON_CONNECT_SDK_ERROR] TonSdk.Connect.TonConnect.OnWalletConnectError (Newtonsoft.Json.Linq.JObject payload) (at <ea35a25a06684d86acfe64c2d572e53b>:0) TonSdk.Connect.TonConnect.WalletEventsListener (Newtonsoft.Json.Linq.JObject eventData) (at <ea35a25a06684d86acfe64c2d572e53b>:0) TonSdk.Connect.BridgeProvider.ParseGatewayMessage (TonSdk.Connect.BridgeIncomingMessage message) (at <ea35a25a06684d86acfe64c2d572e53b>:0) TonSdk.Connect.BridgeProvider.GatewayMessageListener (System.String eventData) (at <ea35a25a06684d86acfe64c2d572e53b>:0) System.Runtime.CompilerServices.AsyncMethodBuilderCore+<>c.<ThrowAsync>b__7_0 (System.Object state) (at <b11ba2a8fbf24f219f7cc98532a11304>:0) UnityEngine.UnitySynchronizationContext+WorkRequest.Invoke () (at <c5ed782439084ef1bc2ad85eec89e9fe>:0) UnityEngine.UnitySynchronizationContext.Exec () (at <c5ed782439084ef1bc2ad85eec89e9fe>:0) UnityEngine.UnitySynchronizationContext.ExecuteTasks () (at <c5ed782439084ef1bc2ad85eec89e9fe>:0)

最も弱い: Всплывает такая ошибка при попытке коннекта кошелька через unitysdk

最も弱い: кто знает как решить?

Torkusz: Используй в будущем TonKeeper, потому что Ton Space не справляется со сложными транзами (reply to 179751)

Фарух: Добрый день  Я хочу начать делать приложения на платформе телеграмм, с чего посоветуете начать, какую литературу изучить и как в последствии интегрировать в свои приложения блокчейн? Есть базовые понятия программирования (функции ,методы , ооп и т.п) , особого опыта нет ,кроме сомнительных программ написанных на python

Sergey: https://core.telegram.org/bots/api (reply to 179773)

Sergey: Для начала сделай простого бота, с помощью апи, чтобы понять, что такое апи и как его узать) Там же ты найдешь, как юзать web_app https://core.telegram.org/bots/api Но без js/html/css ты наврятли напишешь интерфейс для сайта, по этому стоит базово хотя бы их изучить и делать  После того, как ты наберешься какого то опыта тут, стоит пойти на https://docs.ton.org/ паралельно смотря ролики на ютубе по тону, каналов пару есть, кто обучает https://www.youtube.com/@WikiMar https://www.youtube.com/@AlefmanVladimirEN-xb4pq  но рекомендую написать сюда, как приступишь к погружение в тон, тут дадут более точный ответ, во что конкретно надо погрузиться для твоих задач (reply to 179773)

Sergey: Но знай, пусть будет не легкий, если ты пока не бум бум в программирование 😁 (reply to 179773)

Фарух: Спасибо ) Я много чего понимаю , просто никогда конкретных задач не мог перед собой поставить ,для создания чего-то стоящего.Удачи ) (reply to 179776)

🩸m/m 🍌🥕🦴: Ребят добрый день ! Не подскажете как я могу GLINT токены вывести через контракт? Или тока через UI site можно запросить вывод монет

Dan: Всем привет.   А у TONCenter и TONApi разные методы выходит?   по типу getAddressInformation есть у Toncenter, но не могу найти в доках у tonApi.

Dan: @subden подскажи пожалуйста

Denis: Да. Методы разные абсолютно. Схожесть есть но не много (reply to 179780)

Dan: А прямого как у toncenter нету? усложняет переход на tonapi, переделывать же все выходит надо при переходе да? (reply to 179781)

Denis: Да. Надо было сразу брать tonapi 😁

🩸m/m 🍌🥕🦴: еше есть один вопрос есть ли кошелек котоырй работает через import привтаного ключа? или тока через семя?

Vladimir: Среди популярных нет. (reply to 179787)

🩸m/m 🍌🥕🦴: эх мне блин GLINT токены достать(( а доки нет в какой контракт стучать(

Spite: в каком приложении создан кошелёк?

🩸m/m 🍌🥕🦴: SafePal я смог достать приватник, а мне нада в Даймонд зайти (reply to 179790)

🩸m/m 🍌🥕🦴: А там подключение через популярные тока кошельки (

Spite: только руками подписать программно и вытащить токены

Spite: ну или вроде куда-то подключать можно было safepal

wikig: Привет ребята ! Есть ли в TON какие-либо услуги типа АЗС или АА?  Могу ли я каким-либо образом оплатить транзакции для другого счета?

🩸m/m 🍌🥕🦴: да не у меня есть приватник мне бы знать в какой контракт толкнуть транзу и все (reply to 179795)

User<6680539578>: как устранить ошибку dApp при авторизации ?

🩸m/m 🍌🥕🦴: пока нет ПР на расмотрение интеграции уже как 2 года)) SafePal не хотят ускорятся (reply to 179795)

Dmitry | backend4you.ton: А разве glint не обычные жетоны? Их нельзя «как любые другие» перевести?

🩸m/m 🍌🥕🦴: ну я смотрю на site DImond и там только через UI где нада указать количество и все ( мне бы увидет ьпример может ктото выводил чтоб понять (reply to 179800)

🩸m/m 🍌🥕🦴: вроде такойже Жетон

Dmitry | backend4you.ton: https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md вот так работают все «штатные» жетоны. Там структуры сообщений и люописание принципов (reply to 179801)

🩸m/m 🍌🥕🦴: ну видешь там через сайт делать запрос нада ну шас почитаю отдуши ! (reply to 179803)

Dmitry | backend4you.ton: Так что выбираете sdk под любимый язык программирования, там пример перевода жетонов.

Dmitry | backend4you.ton: Сайт конечно просит через сайт делать :) но «внутри» это обычно штатные сообщения согласно стандарту (reply to 179804)

User<6425646586>: ребят, может глупый вопрос будет, но как мне подключить майнер койна на тоне к своему лайтсерверу?

🩸m/m 🍌🥕🦴: ну вот да сейчас буду пробовать)). UI как говориться для смертны хспасибо за доку пойду ее курить (reply to 179806)

🩸m/m 🍌🥕🦴: видешь мне не перевод, DIAMOND на сайте показыват скока уменя GLINT и мне както нада запрсоить (reply to 179805)

Alex: Привет , кто шарит в интегрировании  Ton Connect  на сайт ? отпишите в лс есть работа

Danil: Подскажите пожалуйста как декодировать ячейку в читаемый вид ?

Leo 🌐: Привет всем. А есть функция в терминале, которая создаст токен? Или обязательно с нуля писать?

Dmitry | backend4you.ton: BeginParse и дальше читаешь отдельные значения. Тебе надо знать структуру (tl-b). Потому что 64 бита это может быть одно число, а может два по 32. (reply to 179813)

Danil: А где я могу взять tl-b структуру ? (reply to 179815)

slavagm: Там же либа прямо есть которая за тебя все сделает (reply to 179812)

Alex: Где (reply to 179817)

Leo 🌐: Токены это жетоны верно?

Sviatoslav: Да (reply to 179819)

ALEX: Всем привет, тут есть люди которые делают маркетпейс на тон или возможно кто-то хочет сделать.

Nick: nometa.xyz (reply to 179823)

Dmitry | backend4you.ton: В доках. К той штуке чье сообщение хотите прочитать (reply to 179816)

🩸m/m 🍌🥕🦴: Ребят есть мануал по взаимодействию с кошелеком через ПРиватный ключ? в гитхабе нашел ну там другая длина приватного ключа.   У меня длина ключа 64

Андрей: Значит публичный32+приватный32 (reply to 179826)

🩸m/m 🍌🥕🦴: safepal не дал его ( сидеть генерить на основе приватного получается? или подойдет просто мой адресс конвертнуть (reply to 179827)

🩸m/m 🍌🥕🦴: смотри на код tonweb utils.hexToBytes использует может мне просто он не нужен (reply to 179827)

Danil: forward_payload по такой же схеме распашривается ? (reply to 179825)

🩸m/m 🍌🥕🦴: не помогло (генерит другие адреса) видимо SafePal както по свойму генерил ажресса и отдал мне непонятный приватник (( (reply to 179827)

🩸m/m 🍌🥕🦴: Есть еше решение чтоб получить доступ к своему акаунту ?   hexToBytes(private32 + public32) не помог

John: нашли решение/ответ? тоже интересует. можно ли платить за транзакции других кошельков? (reply to 179796)

Ma><im: добрый день! есть ли разница между этими определениями? или второе намного больще газа использует, так как используем ассемблерный примитив PUSHINT?

nonam3e: Вроде как в одно и то же компилируется (reply to 179835)

Andrey: const int предпочтительнее (reply to 179835)

X1ag: Привет 👋 Подскажите, есть ли у кого нибудь сайт где есть темплейты контрактов на func? Чтоб самому велосипед не переписывать😁

John: в доке по тону есть набор стандартных (и не очень) смарт-контрактов. в частности контракт токена, контракт ICO и что-то там еще. (reply to 179838)

Vladimir: GitHub можно шерстить. (reply to 179838)

X1ag: Благодарю

User<6425646586>: что  такое shardaccount и masterchain в блокчейне?

Vladimir: https://docs.ton.org/learn/overviews/ton-blockchain (reply to 179842)

User<6895914497>: Всем привет, ищу разработчика под свой небольшой проект. По реализации - сделать небольшой обменник нфт-тон.   Более подробное тз - в лс.

.: привет , подскажите где найти tl-b схему forward_payload?

Polkovnik: Привет, ребята, такой вопрос, я нашел в документации такой вот метод  const signature = await provider.send("ton_rawSign", {     data: "48656c6c6f20776f726c64", });  После подписания, я получаю подпись. Но как мне её отправить в блокчейн? Вопрос немного глупый, но все же)

Aziz: Всем привет, а кто нибудь знает как можно свапать крипту через теже stonfi, dedust не использую их API или такая возможность есть только у них?

Ma><im: https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://medium.com/nexton-node/nfts-with-on-chain-metadata-on-ton-tutorial-55ac0cbb17d5&ved=2ahUKEwj0l-mSqLCFAxXIHhAIHY9yAvQQFnoECDgQAQ&usg=AOvVaw3GA1sw3K-C_znOPbPntJet

Ma><im: вот хороший пример с метаданными, которые хранятся в блокчейне

Ma><im: . (reply to 179848)

Roman: https://github.com/romanovichim/TONQuest1/blob/c870f53878509d1b75246dcb6e88b6c606763a8f/challenge-1/scripts/deployNFT.ts#L28  Вот пример.  p.s. tonspeedrun полезно будет пройти (reply to 179848)

Polkovnik: Возвращает, я так понял, подпись?  Returns a Promise that resolves with a string value, with is signatire for provided data. (reply to 179846)

Polkovnik: =(

slavagm: насколько я помню, деплой происходит при пополнении или наоборот при отправке и включается в комсу (reply to 179856)

slavagm: если в вьювере свой кошелек пролистаешь в самый низ, там где-то найдешь Contract deploy, который будет находиться очень близко к первой транзе и иметь какую-то комсу (reply to 179859)

Константин: Только начал изучать, простой вопрос:  В tact-by-example.org написано > Maps are designed to hold a limited number of items  То есть я не могу создать бесконечный маппинг balanceOf<Address, Int>, в котором можно хранить балансы бесконечного количества пользователей? Или могу? В чём проблема?

Константин: Ну то есть я понимаю, что надо будет для каждого элемента дополнительно оставлять газ для storage. Но это же будет дешевле, чем на каждого пользователя создавать контракт, как это реализовано в Jeton?

Vel: Hello, does TON Blockchain have launchpools? like Binance Launchpool.

slavagm: @tondev_eng (reply to 179863)

Константин: И ещё вопрос, я правильно понимаю, что если баланс TON в Wallet у Jeton токена становится равным нулю, то этот контракт фактически обнуляется и если там был записан какой-то баланс Jeton, то он тоже становится равным нулю?

John: как это реализовано в других дефи-протоколах (есть опыт в EOSIO) - это просто вызов метода transfer с определённой суммой (которую ты меняешь) на адрес смартконтракта со специальным образом сформированным полем memo. смарт-контракт парсит это поле, делает расчет рейта (по своим остаткам) и пуляет тебе обратно валюту со второго плеча минус своя комса и прочие расходы (все рассчитывает смартконтракт в одной транзакции, поэтому если что-то пойдет "не так", то оно либо выполнится полностью, либо не выполнится совсем).  думаю что здесь +- так же. вообще по опыту работы с EOSIO, просто делаешь транзу руками, потом лезешь в эксплорер и там все смотришь и анализируешь, потом просто повторяешь это в скриптах и все (reply to 179847)

John: вот чота совсем не уверен что это работает именно так :/ я конечно "не настоящий сварщик", но не думаю что там что-то обнуляется :) думаю просто контракт перестает работать. а при пополнении аккаунта просто снова начинает работать (reply to 179865)

John: это как машина. есть бензин - она едет, нет бензина - она стоит. но не сгорает же :)

Dmitry | backend4you.ton: Даже когда машина стоит - потихоньку накапливается долг (storage fee). Он снимется с ближайшей транзакции. Когда долг достигнет -1 тон - машину принудительно выкинут на свалку (контракт будет уничтожен) включая все вещи в салоне (данные смартконтракта будут утеряны)

slavagm: Так получается это уже не бензин, а налог (reply to 179869)

nonam3e: утеряны не будут, сохранится хэш стейтинита, по блокчейну последний стейтинит можно найти и с ним разморозить контракт (reply to 179869)

Dmitry | backend4you.ton: Бесконечный нельзя. Контракт может иметь 65тыс ячеек с данными. Запись в dict занимает больше одной ячейки в среднем, плюс у вас еще есть же данные. Плюс обработка этого списка будет стоит газ (т.е читать dict тоже чем больше тем дороже) (reply to 179861)

Dmitry | backend4you.ton: Стейтинит это ж не последние данные. (reply to 179871)

nonam3e: сохранится именно последний хэш даты и кода контракта (reply to 179873)

Dmitry | backend4you.ton: Хэш даты не равно самой дате, из хэша данные не восстановить  же

John: о как. это для меня новая информация. но звучит логично. иначе было бы слишком просто замораживать бесплатно смарт-контракты :) просто не платить денег (reply to 179869)

Dmitry | backend4you.ton: Да и плюс это ж небось нужна архивная нода, которую еще поискать надо?

John: кстати, хотел задать вопрос по поводу создания жетонов своих. вот скажем я создал жетон. заполнил метадату, задеплоил. в сети появился мой жетон. они виден и парсится по всяким эксплорерам, включая его имя, балансы и пр. сущуствует ли возможность: а) вычистить всю эту информацию из БЧ б) если а) возможно, то можно ли заново создать жетон с таким же именем и тем же адресом смартконтракта (!). естественно если я не делал revoke прав и заранее подготовился, создав setcode?

Dmitry | backend4you.ton: а) только если подождать несколько лет пока балансы уйдут в минус и вас удалят… но если вы его кому то пересылали то адресов уже много. А если кто-то не захочет удаления - может пополнять баланс без вашего участия ) Б) тот же адрес - да, после удаления прошлого, если будут те же исходные данные (стейтинит и код). То же имя (другой адрес) - можно всегда: может существовать несколько контрактов жетона с одними и теми же именами и тп (но с разными адресами)

Пескарь™ | фронтент телефонов: можно юзануть тонхаб апи (reply to 179877)

Пескарь™ | фронтент телефонов: при балансе -0.1 тон вроде замараживается контракт, при балансе в -1 тон он разрушается как при использовании флага +32 (reply to 179871)

Пескарь™ | фронтент телефонов: ну или нет (reply to 179883)

nonam3e: а какой минус на контракте? (reply to 179884)

Пескарь™ | фронтент телефонов: ну вот на скрине пишет вроде -12 тон (reply to 179885)

Vladimir: А адрес контракта можно? (reply to 179886)

Пескарь™ | фронтент телефонов: Ef8SYc83pm5JkGt0p3TQRkuiM58O9Cr3waUtR9OoFq716uj0 это контракт гивера, я туда 1 нанотон закинул шоб он заморозился (reply to 179887)

Vladimir: Спасибо. (reply to 179888)

Denis: При текущих ценах и константантах долга в 0 воркчейне очень сложно заморозиться, а замороженому потом сгореть

John: а вот кстати, вдогонку. вот прям рядом параллельно обсуждают дестрой контракта при отсутствии газа. если я обнулю контракт (ТОН на нем), то контракт уничтожится? включая все балансы, название токена и вся метадата от него? (reply to 179879)

Dmitry | backend4you.ton: Обнуление баланса не равно уничтожению, баланс в минус должен уйти. Но по обнулении вы можете указать сендмод (128+32 но пишу по памяти) и контракт будет уничтожен немедленно принудительно (reply to 179891)

John: ... и в этом случае вся метадата - пропадет? включая балансы? (reply to 179892)

Dmitry | backend4you.ton: «Пр обнулении» - при этом тоны уйдут куда отправите. (reply to 179893)

John: тоны то ладно. их судьба не сильно интересна. интересно что будет с самими жетонами (если мы говорим о контракте жетона), балансами жетона и метаданными жетона? (reply to 179894)

Denis: инога равно. если баланс нулевой а хэш стейта совпадает с адресом то контракт дестройнется сразу. для жетон-мастера контракта вроде если его не редактировать то хэш после деплоя совпадает (reply to 179892)

Denis: впрочем я не уверен

Denis: возможно только стадия заморозки пропустится

Dmitry | backend4you.ton: Жетоны - это лишь число в данных контракта. Фантики. Для блокчейна их не существует. У каждого пользователя своя копия контракта жетона (Jetton wallet) так что у всех пользователей разные сроки когда их контракты протухнут. Плюс у контракта жетона нет возможности инициировать отправку ТОН (ваще. Закинули по ошибке туда 100тон - потеряли сто тон). А метаданные жетона - это тоже лишь поля в его данных (reply to 179895)

Dmitry | backend4you.ton: Вкурите базовые понятия в ТОНе, и такого рода вопросы просто отпадут

John: вроде бы выше писали что если я напишу метод отправки, то сможет отправлять. (reply to 179899)

Пескарь™ | фронтент телефонов: если есть доступ к мастеру жетона - есть способ вывести деньги с жетон валета. там кароч когда минтишь жетоны через мастер, то в форвард тон эмаунт пишешь скок надо вывести и все  я так помогал вывести 50 тон с мастер контракта, перекидывая тоны на жетон валет (reply to 179899)

Dmitry | backend4you.ton: Если напишете то будет. Но в текущем «стандартном» контракте его нет, так что во всех текущих стандартных жетонах его тоже нет (reply to 179901)

John: это то как раз понятно. интересует что будет когда они пропадут (при уничтожении смартконтракта).  вот сейчас токен виден. его можно добавить в кошлек, отправить кому-то. если смартконтракт уничтожен, то как минимум отправить его точно не удастся (не будет кода, который это делает). но исчезнет ли информация о жетоне из БЧ? что произойдет с баланасми пользователей? что они будут видеть в кошельках, если метаданных контракта нет? (reply to 179899)

John: естественно речь шла о собственном контракте, написанном на базе стандартного. (reply to 179903)

Dmitry | backend4you.ton: Что покажет кошелек если метаданные не может загрузить - вероятность того что этот бизнес-сценарий был в бэклоге весьма низка, так что с большой вероятностью будет показывать какую-нибудь ошибку :) (reply to 179904)

Dmitry | backend4you.ton: «Что произойдет с балансами» - если жетон-контракт конкретного пользователя еще жив, то он помнит сколько было у пользователя жетончиков. А как это покажет эксплорер - см выше про бэклог ) (reply to 179904)

Spite: Минт же ничем не отличается от обычного трансфера для жетон кошелька. Зачем мастер? (reply to 179902)

Dmitry | backend4you.ton: Плюс если помните то разрядность жетона (количество знаков в которых он хранит кол-во) находится вообще не обязательно в смартконтракте, а может во внешнем json, путь к которому лежит в смартконтракте, а если его не достать, то непонятно что отображать даже )

Пескарь™ | фронтент телефонов: он шлет интернал сразу, при сенде токенов через жетон валет там проверяется чтоб тонов хватило на трансфер(причем берется не баланс, а msg_value) (reply to 179908)

K: Скажите пожалуйста,  а что такое msg_value (reply to 179910)

Пескарь™ | фронтент телефонов: message value, скок отправитель отправил тонов на контракт (reply to 179911)

Vel: Who can create mini app? or a chatbot

Vladimir: Only russia language. (reply to 179913)

slavagm: не угадал по памяти

Polkovnik: Господа, как правильно составить raw_sign? Например, туда можно же вставить транзакцию? Если да, то как? Как этот метод работает? После подписания мы получаем подписанное сообщение? А как его отправить в блокчейн?

Vladimir: Что комиссия? (reply to 179918)

John: если нажать в кеошельке "отправить", но не отправлять, то в диалоге отправки будет видно.  вообще комиссия в БЧ биткоина не постоянна и каждый раз надо смотреть (reply to 179922)

&rey: Это требует, чтобы все сообщения дошли в один шард. Выяснилось, что в тоне это непростая задача, так что зря расходует ресурсы валидаторов. Контракт — единица шардинга, внутри разделение состояния никак не настроить. (reply to 179862)

&rey: -0.1 TON заморозит контракт: превратит данные в хеши. (reply to 179865)

&rey: -1 TON (а этого почти не достигнуть) контракт удалит совсем.

John: Скажите как адрес kQAnWdjMgJHAERiAaZ6OEuAoEHSOqvsGhyiu695d_4dS0Vtg преобразуется в 0QAnWdjMgJHAERiAaZ6OEuAoEHSOqvsGhyiu695d_4dS0Qal  и зачем это происходит?

Vladimir: https://ton.org/address/ (reply to 179931)

Vladimir: И гугли, что такое Bounceable и non-Bounceable. (reply to 179928)

John: Просто логинюсь в https://minter.ton.org/?testnet=true адресом 0QAnWdjMgJHAERiAaZ6OEuAoEHSOqvsGhyiu695d_4dS0Qal но вверху вижу что залогинен адресом  kQAnWdjMgJHAERiAaZ6OEuAoEHSOqvsGhyiu695d_4dS0Vtg я понимаю что это разные интерпретации одного адреса. но я открываю контракт жетона, который был создан этим адресом и мне пишут что я не админ (нет админских опций), хотя там же на странице указано мой адрес, которым я залогинен (но вверху справа - НЕ ОН!).

John: с адресом стало понятно. я собственно так себе и представлял +- Но как теперь мне залогиниться в минтер чтобы управлять контрактом жетона? мне показывают его в режиме ридонли, как обычному пользователю, без логина (reply to 179932)

Andrey: Стоимость газа увеличивается в геометрической прогрессии в зависимости от количества записей. Если вам надо хранить больше количество записей то нужно создавать отдельные контракты для каждого адреса (reply to 179861)

Daniil: Не в геометрической (reply to 179936)

Даша: Добрый вечер! А может кто помочь с подключением бота к оплате в тон? Естественно не бесплатно)

Тимофей: Девушку хоть не кидай, имей совесть. (reply to 179940)

User<6908616126>: Парень честный, подтверждаю (reply to 179941)

Тимофей: Ну раз так, то добро. (reply to 179942)

User<6908616126>: Один раз с ним было недопонимание в чате, но там из-за невнятной договоренности, да и денег он вроде как не брал предоплату, так что все окей) (reply to 179944)

Sul: А что не так тут?

Nuncvc1v0: Вроде б баланс должен быть больше (reply to 179948)

­😇: Кто в курсе как на рафле свой лаунч запустить, поддержка не отвечает

Oleksandr Potuzhny: Всем привет! Я обычный пользователь Телеграма, не разработчик. Интересуюсь новыми штуками на блокчейне TON и ищу в нём новые возможности. Иногда мне в голову приходят какие-то гениальные идеи, которые могут реализовать только программисты. Подскажите, есть ли какое-то место, где я смогу опубликовать свои идеи, сохранив при этом своё авторство? Эти идеи касаются блокчейна TON.

Darkening Dawn: А что вам это даст?  Идеи обычно ничего не стоят, если за ними нет команды, которая их реализует. (reply to 179955)

Voski: Привет всем, подскажите а технически есть возможность собирать данные о взаимодействии каждого отдельного пользователя в конкретной группе тг?

User<6908616126>: Вы чатом ошиблись, мы тут о тоне говорим а не о тг) (reply to 179957)

User<6908616126>: https://t.me/devs вам сюда (reply to 179957)

Roman: Хорошие идеи бесценны. Особенно в наше время, когда столько всего уже реализовано. А команд хватает кто может сделать, если это не сверх задача какая-то. (reply to 179956)

Roman: Лучшая защита авторства идеи - это реализованный и запущенный проект.  В Вашем случае можно просто опубликовать текст описания где- нибудь (хоть на гитхабе) и по дате будет понятно что Вы первый были, но заработать на этом вряд ли получится. (reply to 179955)

Flyheck: Подскажите, пожалуйста. toncenter v2 - платное api? Или платить нужно только за v3?

Ruslan: Есть бесплатный ключ на 10 rps. Если нужно больше rps, то есть платные подписки (reply to 179962)

Ruslan: Это касается и /api/v2, и /api/v3

Flyheck: Какой api имеет максимальный rps на бесплатном плане? Имеет ли смысл использовать toncenter v2, когда есть toncenter v3? (reply to 179963)

Ruslan: Подписка, ключ и лимит общие на обе версии. 10/сек бесплатно, а платные тарифы можно посмотреть тут: @tonapibot

Ruslan: v2 имеет функционал отправки в блокчейн сообщений, а v3 быстрее и удобнее отдает данные)

Flyheck: Спасибо) (reply to 179967)

Flyheck: возможно, недавно появилось на v3 (reply to 179967)

— 2024-04-08 —

J: как можно напрямую из питона вызывать контракт дедаста\стонфи для свапа?

Tim: Никак, надо отправлять транзакцию трансфера жетона на их vault с правильным forward payload (reply to 179973)

