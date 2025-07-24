+888: As demonstrated by the lastest Ton hack chalenge. It’s not only possible to have but to trigger parallel execution of a same smart contract using wallet v2/v3. And in a way that each line of code is executed at the same time (for example having line #313 being processed at the same time in 2 message) (reply to 148684)

&rey: That was not the case. (reply to 148685)

+888: Why can’t I post a link to the challange ? Or post any hyperlink in general ? (reply to 148686)

+888: As a way to implement mutexes. Please see questions/79625124/how-to-safely-decrease-a-variable-on-a-system-without-any-concurrency-control on StackOverflow. (reply to 148681)

&rey: OP of that thread is saying literally false things. (reply to 148690)

&rey: The chain acts as-if in each shard there is at most one transaction executed simultaneously.

&rey: Circled are the transactions (atomic units).

+888: So what about this webpage coming from the Ton validator’s developpers themselves ? (reply to 148691)

&rey: Well does it say anything about *single* transaction? (reply to 148696)

+888: Yes send two close requests for withdrawal: the easiest way is to send two messages in one transaction via wallet-v2/v3 (it supports sending up to 4 messages in one tx, however some manual scripting is required) (reply to 148698)

&rey: It must be disappointing but the whole tree had 63 transactions, not one. (reply to 148699)

&rey: It was a mess of terminology, which is nowadays more accurately said "to send two messages with one order to wallet-v3/v4".

&rey: This is a part of actual tree. And those circles were indeed executed in order, from top to down.

+888: What matters to me is the statement from the official developpers who design validator nodes that’s it’s possible to have the same line of code being run at the same time. I do care little in how it’s done (just that it’s possible to trigger it). (reply to 148700)

&rey: It is not possible to have the same line of code run multithreaded. Actually. Name two transactions (hashes, or lt+address) which interfered with storage or each other's variables.  You're welcome to hash of "better bank"'s final tree: 2c415141ea7042907dc44e0aefe806483bbf05a833657f8371582cf7970aa831. (reply to 148703)

+888: Of course since according to them it was exploited differently without using race condition. There’s no examples as a result on the blockchain. But I do notice the challenge was within a single smart contract /ton-blockchain/hack-challenge-1/tree/master/7.%20better_bank (reply to 148704)

&rey: A single smart contract — yes. A single transaction — no. Storage or variables interference — no.  It's just that a bunch of transactions left contract in "unintended" state. (reply to 148705)

+888: How are race conditions within a smart contract address supposed to happen without storage interference ? (reply to 148706)

&rey: Running this code in parallel threads in C++ is also race condition: {    lock.acquire(); *p = 1; lock.release();    } {    lock.acquire(); *p = 2; lock.release();    } since you cannot determine if p will point to 1 or 2. (reply to 148708)

+888: But this code doesn’t check balances and send funds. To me only failure to not check balances concurently allows to withdraw money as a race condition (at least within the same smart contract address) (reply to 148709)

&rey: What in fact happened, simplified:  Contract had (balance=5000.10, total_held=5000, A=0, B=5000). A deposited. (balance=5010.04, total_held=5010, A=10, B=5000). A withdrew. (balance=0, total_held=5000, A=0, B=5000), msg1(to=oneself, value=4999.96), msg2(to=A, value=10). msg1 arrived. (balance=4999.95, total_held=5000, A=0, B=5000). A deposited. (balance=5009.89, total_held=5010, A=10, B=5000). A withdrew. (balance=0, total_held=5000, A=0, B=5000), msg1 failed silently due to flags, msg2(to=A, value=5009.83). (reply to 148708)

&rey: @mojulie56 it is in fact important to explain correctly. If a person cannot tell data race from race condition, their claims need to be disproved.

+888: Do you mean for the hashmap. BEcause the race condition never hapenned/exploited ? And the writeup indeed talks about 2 withdrawals (so without a deposit between) (reply to 148712)

Mojisola🍅 🍅: there is supposed to be one after the other computing right?  check, subtract balance before transfer. the next check again right? just like we have in ethereum (reply to 148710)

Mojisola🍅 🍅: I see (reply to 148713)

&rey: Do you know if your solution is correct? If it is, why? If it is not, why? How would you tell?  That's why you were muted the first time by the way. (reply to 148715)

+888: The ᴏꜱ will ensure p will be updated not concurrently (serialization happens at processor 0 at least on Linux). What happens after might be a problem (reply to 148715)

&rey: I took explanation of what happened from actual blockchain tree and "aftermath" section. Would you like an explanation for first option, expected by task authors? (reply to 148714)

+888: The race condition is explained before the Aftermath section. I’m interested in the race condition not the hashmap bug (which acutally how the contract was exploited instead of triggering the race condition). (reply to 148719)

+888: The blockchain data is no indication about the race condition besides storing the vulnerable code. (reply to 148719)

&rey: Contract had (balance=5000, total_held=5000, A=0, B=5000). A deposited. (balance=5010, total_held=5010, A=10, B=5000). A half-withdrew. (balance=0, total_held=5005, A=5, B=5000), msg1(to=oneself, value=5000), msg2(to=A, value=5). msg1 did not arrive yet. A half-withdrew. (balance=0, no storage), msg3(to=A, value=5). msg1 arrived. (balance=5000, no storage). Contract deployed in initial state. (balance=5000, total_held=0). A deposited. (balance=5010, total_held=10, A=10). A withdrew. (balance=0, total_held=0, A=0), msg4(to=oneself, value=0), msg5(to=A, value=5010). (reply to 148720)

Mojisola🍅 🍅: this post should be explained. may be it clarify the scenario (reply to 148696)

+888: Which doesn’t match executing 2 message at the same time per the bug description (but match explorer data). A part of it should be : * withdrawal send. * message arrive * other withdrawal sent * message arrive while the previous one is still running. (reply to 148723)

&rey: Your message doesn't match statement "So if withdraw request will reach bank while all money is on the fly, bank will be insolvent during request processing", while my expansion does. (reply to 148725)

+888: Yep with a time diagram /ton-blockchain/hack-challenge-1/issues/2 (on GitHub) (reply to 148724)

&rey: For the record, do you think my explanation is correct? (reply to 148728)

+888: Not exactly.  But you did give me doubt. I understand the withdrawal requests. But the bug description definitely implies executing withdrawal requests concurently. (reply to 148729)

+888: Which isn’t what you’re talking about.

Dmitry | backend4you.ton: Sorry for breaking in into your thread, but it seems you are talking about different race condition levels.  TON blockchain transaction is a “converting” by contract one incoming message into 0..N outgoing messages and modifications of contract storage data. It is atomic. Ton blockchains guarantees that two incoming messages for one contract will never be processed in parallel. No race condition is possible. That’s pcrafer says.   Problem with bank appears to exist because bank “business” transaction includes several blockchain transactions. So blockchain can’t guarantee atomicity of them all together. Contract design/logic should deal with it.

+888: No problem. But the race condition is described to happen within a single transaction… (reply to 148732)

+888: The race condition is in how withdrawal request work. The other request are required but unrelated to the bug. (reply to 148732)

Mojisola🍅 🍅: if we all agree with your post, then the question of poster is effectively solved. if two different message is sent to a contract, it get processed one after the other and never parallel. (reply to 148732)

Mojisola🍅 🍅: this is what I normally expected.   why will two different message be even processed in parallel in the first place

Torit: How do I contact a technician?

Daniel: Wdym? (reply to 148742)

NPA120: What can I help you? (reply to 148742)

+888: One way I think of is requesting the contract execution from a different shard : message would be run on the next block. (reply to 148737)

+888: I don’t known what Wallet v2/V3 is. (reply to 148737)

Mojisola🍅 🍅: you should be satisfied by now that message get processed one after the other. okay?  v2, v3 or v4 v5 etc are ton wallet versions... (reply to 148752)

Torit: There is a domain that I want to buy to my address, but it is already bought, but it has expired, the owner of it for a very long time does not prodolevayut, but I still can not buy it, support @ton_help_bot said to write to a technician that he would help to buy this domain to my address (reply to 148747)

NPA120: can you let me know that domain? (reply to 148757)

Torit: Can I write in private messages? (reply to 148758)

NPA120: sure, NP

— 2025-05-18 —

Adios Le Pobre: Hi, i’m having an issue with V2 getTransactions API on Toncenter. When there was only a single transaction, the result with the single transaction was returned. But when I sent another transaction to the address, the API returned empty result.

IntegrityFarm: Why my token still has " непро веренный токен " I've created it in October 2024

•: Need sent to Tonkeeper with text:  “Dear Tonkeeper, вы че там уху ели? С октября токен лежит и не проверен. Проверьте мой токен, Cheers, IntegrityFarm” (reply to 148785)

— 2025-05-19 —

&rey: Maybe it's time to check what message you are trying to send? (reply to 148813)

Michaelzy: Hello guys i want to know if its possible to create a proxy contract using tact that uses a seperate contract for logic execution

Lirâ: GM from Turkey :)

&rey: It is quite complex. Why? TON has SETCODE for changing logic in-place. (reply to 148821)

Michaelzy: how does setcode work? can't find it in the docs  the reason i want to use proxy is because my logic may change in the future after an audit or changes in design (reply to 148826)

&rey: 1. Replaces contract's code cell with provided one; upon any subsequent transaction, new one will be used. 2. https://docs.ton.org/v3/documentation/smart-contracts/func/docs/stdlib/#set_code 3. Please don't expose users to unverified logic which you expect to change. (reply to 148828)

Michaelzy: it seems its not available in tact? (reply to 148829)

&rey: Well you should consider what happens to contract's data. (reply to 148830)

Michaelzy: true i'll make sure to audit first (reply to 148829)

Michaelzy: contract data doesn't change only logic will (reply to 148831)

&rey: Different compilations might expect data to be laid out in different order. (reply to 148833)

Michaelzy: okay but does this mean i cant change logic in tact directly? (reply to 148834)

Michaelzy: so i have to go ahead with proxy

&rey: Proxy doesn't seem to help in the slightest. How would it inherit data of previous contract? (reply to 148836)

Michaelzy: data and logic contracts would be seperate. when i make changes (upgrade) the logic contract, i would pass the address of the new logic contract into the data contract and then the data contract calls the methods of the new logic contract during execution (reply to 148837)

&rey: > the data contract calls the methods of the new logic contract during execution  You do remember that each cross-contract interaction is mediated by a message, changing transaction context too? (reply to 148838)

&rey: It is possible to create pseudo-proxy using dy libraries, but it would make for very unidiomatic Tact — such that any audit would reject it.

Michaelzy: don't get what you mean by changing transaction context (reply to 148839)

Michaelzy: that shouldnt affect the logic execution

&rey: Well your data contract got a message, and that started a transaction. It sends outgoing message to logic contract, and then its transaction ends.  It might be important in some cases. (reply to 148842)

Michaelzy: for an nft collection proxy, i'd simply create a logic contract that handles minting of the new nft-items

Michaelzy: ok i understand  but as long as i'm passing the require fields from the incoming message to the outgoing message it should be good? (reply to 148844)

&rey: And then how would items know to trust your logic contract? Presumably they don't know its address in advance. (reply to 148845)

&rey: Also, you cannot delegate get-methods (since there is no ability to wait for a message), which means your contract system will not be an NFT collection. Bingo.

Michaelzy: in the nft-item contract, i would have an address-type variable that stores address of the logic contract. and have a message receiver to update the address of this variable then when fucntions in the item contract are called, i'd simply run a check to make sure sender is logic contract (reply to 148847)

Michaelzy: the get methods return data from the data contract so i wouldn't need to delegate such (reply to 148848)

&rey: And any update to logic contract address would run through how many, potentially hundreds of thousands of NFTs? (reply to 148850)

Michaelzy: for instance the variables in this get function are all stored in the data contract and don't depend on the logic contract get fun get_collection_data(): CollectionData {         return CollectionData{             next_item_index: self.next_item_index,             collection_content: self.collection_content,             owner_address: self.owner         };     } (reply to 148851)

Michaelzy: ok this seems like a good concern (reply to 148852)

Michaelzy: having to send messages to each nft item to upgrade the logic contract

Michaelzy: but consider the fact that upgrades won't happen as often and most times upgrades aren't ever done

&rey: And will NFT item address be independent of logic contract? If so, what logic is there to change? (reply to 148853)

Michaelzy: it's primarily just a safe measure in case there's a bug that wasn't detected earlier (reply to 148856)

Michaelzy: yes it will be independent (reply to 148857)

TON Bounty Bridge: 📊 Update Digest!  🔍 Active bounties: 16 ✅ Approved bounties: 0 🔄 Bounties seeking suggestions: 54  📣 We value your feedback! Join the community discussion and participate in shaping the future. Click the 'Create Your Own Bounty' button to get started.  Happy contributing!

Ali: Hello guys. I need some help with HighloadWalletV3, for batch jetton transfers. Can anybody help?

Y.E🐾 🌱SEED: Hello, how is my money stolen from my account? How do I stop it? Please tell me.

&rey: If your mnemonic (or private key) became available to someone else, you should generate a new, safer, account and move whatever remained into it.  Make sure that wallet app you use is in fact secure: https://ton.org/wallets  Mind the topic of this chat, though. (reply to 148891)

— 2025-05-20 —

TON Bounty Bridge: ​Herramientas y guía educativa para evitar pérdida de recompensas y fraudes en integración de wallets TON/Telegram/Donkeyper  Created by loboardiente1975

ISMA&COIN: Hello, who can I talk to about receiving grants for the development of the TON ecosystem?

Alireza: Hi I have a question: with one MNEMONIC we could have multiple wallets on Tonkeeper for example,  then, How can I say programmatically which one to choose for some operations?  which part of the following should be changed? should we assign walletid for it? if so then how can I find my wallets' Id?  const mnemonicWords = config.MNEMONICS.split(' ');   const keyPair = await mnemonicToPrivateKey(mnemonicWords);   const wallet = WalletContractV4.create({     workchain: config.WORKCHAIN,     publicKey: keyPair.publicKey,   });

mohsen: Hello devs, can anyone please introduce me the best Ton faucet available?

Combot: Total messages: 148925

&rey: Changing this will return different wallets which Tonkeeper supports. (reply to 148922)

Alireza: How to get existing wallets? (reply to 148927)

&rey: Check their onchain state, presumably. (reply to 148928)

&rey: If you have a clear explanation how these testnet TON will be used, please contact @f_closer. (reply to 148923)

&rey: If you don't (e.g. very secret project) but still need a large amount, then tonconsole.com offers to... ahem... Ρurchase some.

&rey: And the traditional faucet is @testgiver_ton_bot.

mohsen: thank you (reply to 148930)

Michaelzy: good morning guys Tact dev here i currently have this transaction payload in my script that sends message to my contract and it executes successfully.  const message = beginCell()     .storeUint(2016634319, 32)     .storeUint(0, 64)     .storeStringRefTail(trackData.tun3zTitle)     .storeStringRefTail(trackData.coverImage)     .endCell();  this is the message in my contract message Mint{     query_id: Int as uint64;        name: String;     image: String; }  But i want to make the name and string values optional in my contract like this  message Mint{     query_id: Int as uint64;        name: String?;     image: String?; }  how can i modify my payload to match this new message struct because old one wont work

ISMA&COIN: Hello, we applied for grants, we would like to clarify whether it is possible to receive feedback?

Andy: https://docs.tact-lang.org/book/func/#convert-serialization  > All optional types are serialized as Maybe in TL-B, except for Address.  https://docs.ton.org/v3/documentation/data-formats/tlb/tl-b-types#maybe  To read more about what TL-B is, check this page: https://docs.ton.org/v3/documentation/data-formats/tlb/tl-b-language It's a little overwhelming at first, but once you begin grasping TL-B - you'll significantly level up as a TON developer, no matter the language (Func, Tact, Tolk, maybe even Fift), since it just defines how things are serialized to cells.  Specifically for your example, it's as simple as adding .storeUint(1, 1) before every .storeStringRefTail and simply .storeUint(0, 1) when there isn't a string.  You could also change to something like storeMaybeStringRefTail that'd work like `storeMaybeRef` (reply to 148935)

Zaid: This Chat is for developers , Visit ton . Org For grants information. (reply to 148921)

Daniel: why my message was deleted ??

&rey: Because stars are not relevant to this chat in any way. (reply to 148947)

Daniel: Where can I ask this question then ? (reply to 148949)

&rey: Probably @twa_dev. Make sure to look at chat history – it might be faster than waiting for a new answer (reply to 148950)

Daniel: thanks

Combot: Combot has warned 籍望慕 (1/3) Reason: 1 reports (reply to 148954)

— 2025-05-21 —

AGT: Sir,How do I transfer money to someone using my address and my custom avatar is displayed here?

Devon: hi guys, we just launched an open source community project tonmcp.xyz for interacting with Ton blockchain using natural language, pin me if you have questions install it or want to collaborate on PRs 😆

No: I call api to get information on smartcontract but got this error: 500 Internal Server Error: "{"ok":false,"error":"VALIDATE_ACCOUNT_STATEFailed to unpack Account","code":500}". Can anyone help me?

Dmitry | backend4you.ton: yesterday I saw this in some private API which used outdated tonlibjson library. updated to last one and problem disappeared (reply to 148993)

Andrew: Hi, my RPC Endpoint mainnet-v4.tonhubapi.com is not working, it cannot send boc on chain.So I need try some paid endpoint.However quicknode is not work. So do you have any to recommend. I just want to replace the url

Andrew: I used tonclientV4

No: You mean to update the toblibs, for example on windows it is tonlibjson.dll, linux it is tonlibjson-linux-x86_64.so, .. (reply to 148994)

&: Try toncenter. (reply to 148996)

Andy: What does message mode flag +32 actually do?  As far as I understand, destroying the account sets it to uninit state, so it can be redeployed and of course such a contract stops acquiring storage fee debt.  But why would a contract that'll never be used again destroy itself? Is it just a best practice? Does it reduce blockchain storage size or something else that makes it beneficial in the long run?  Are there any use cases for redeploying a destroyed contract (except the TON Hack "use case", that is more of a vulnerability really)? Does redeploying the same account use less storage or cause any similar beneficial metrics?  Do libraries of a destroyed contract get removed?

&rey: Well if a routine (withdrawal from a complicated staking perhaps?) is complete, the contract managing it has no reason to be up. (reply to 149013)

&rey: That way, contract existence indicates that routine is still running and should not be invoked again.

Leo: And if not destroyed explicitly, the contract will owe storage fees and get destroyed sometime in the future, after which it can also be redeployed. So it's not about security.

Hobbs: Gmgm

Danik: Hi  I’m a full-stack developer with strong experience in building Telegram Mini Apps (TMA).  Stack: TS, React, NextJS/Tanstack Start, tRPC, Hono/Express, TON integration, payments, Grammy and more.  I can handle projects of any complexity — from MVPs to full-scale production apps.

Michaelzy: gm guys i am calling a get method from my script to my contract using clien.runMethod (toncenter endpoint0 but i keep getting this error: node:internal/process/promises:394     triggerUncaughtException(err, true /* fromPromise */);     ^ AxiosError: Request failed with status code 503 . . . data: { ok: false, error: '', code: 503 }   },   status: 503  crazy thing is i am calling other get methods from my contract and they all work fine but when i call this paryticular one  const resultt = await client.runMethod(contractAddress, "get_jetton_address_by_params", [         {type: 'int', value: index},         {type: 'int', value: fractionCount},         {type: 'slice', cell: nameCell},         {type: 'builder', cell: addressCell},     ]) any help will be appreciated (reply to 148944)

Bohdan: also have this error from yesterday (reply to 148993)

Sent Σ: I want  you  to work on ton smart contract  that helps  users to send ton and ton Jetton  tokens to  our wallet after making  purchases  on our mini app

TON Bounty Bridge: ​Number1  🏷 Developer Tool  Summary:#1043  Created by Akbarsohbatloo1

Sent Σ: Anyone? (reply to 149045)

&rey: This doesn't call for any smart contract beyond your wallet. You're most probably looking for https://github.com/gobicycle/bicycle? (reply to 149045)

Sent Σ: Isn't this in it's  test phase (reply to 149048)

Sent Σ: Isn't  this too much risk

&rey: Not a single failure was recorded in half a year, to my knowledge. (reply to 149049)

— 2025-05-22 —

Albert: Ping me (reply to 149045)

Alex: TON Studio is looking for a technical specialist to moderate and support developer chats, such as TON Dev EN and TON Dev RU, chat contest, chat hackathon.  Main tasks: - Help developers find answers to their questions in the documentation, and formalize and systematize questions that are not covered in the documentation for further development. - Help integrate and support a public chatbot helper that is trained in documentation and can answer some questions. We want to closely monitor such a bot and prevent meaningless spam from it. - Improve the experience of people communicating, improve the quality of catching real spam messages, keep safe regular users from unfair bans.

Willy: I have been banned in RU chat:( Totally unfair, done nothing wrong (reply to 149064)

Alexander | Hubz: Sent you a DM (reply to 149064)

Lasha: Hi, this is a TON transfer's in_msg msg_data. I want to parse the message body. Do you have any suggestions on how I can parse it? The type is dataRaw.    'msg_data': {'@type': 'msg.dataRaw', 'body': 'te6cckEBAQEAAgAAAEysuc0=', 'init_state': ''}}

Mahdi: Hello friends. Anyone can help with this?

Mahdi: Hi  I've put my NFT on sale with tonutils library. you can see that the sale address is for getgems sales https://tonapi.io/v2/nfts/EQC4dwQ9pj613YHd37r1JMo0yO4Z8hz2CG3tJFajRU4MbmmS   but Getgems UI does not show my NFT as on sale. it shows it "Not for sale"  Why?

Stark: hey i am looking to deploy bridge on ton for smooth transactions with evm chain, any idea which repo i should fork and any previous deployments available?

Justice: I can help (reply to 149092)

Marous: Hello guys, I'm new to TON network. i'm trying to udnerstand how gas fees are sent/paid when sending  a transaction.             await wallet.methods.transfer({                 secretKey: keyPair.secretKey,                 toAddress: JETTON_WALLET_ADDRESS,                 amount: TonWeb.utils.toNano('0.05'),                 seqno: seqno,                 payload: await jettonWallet.createTransferBody({                     jettonAmount: TonWeb.utils.toNano('500'),                     toAddress: new TonWeb.utils.Address(WALLET2_ADDRESS),                     forwardAmount: TonWeb.utils.toNano('0.01'),                     forwardPayload: comment,                     responseAddress: walletAddress                 }),                 sendMode: 3,             }).send()         );     }  amount: TonWeb.utils.toNano('0.05'). Is this the gas fees paid ? Or the amount sent to JETTON_WALLET_ADDRESS or both ? And is there a refund ? How would that work

Slava: Gas fees are deducted from the contract's balance after it's execution, based on the amount of gas units actually used (but no more than the amount of the incoming message by default).  However, besides the gas fees there are other types of fees.  Actually, fee management is one of the most nastiest problems in TON. You should study the docs very careful and try everything for yourself. (reply to 149108)

&rey: Both, and part of that amount is forwarded to destination contract too.  Jetton wallet, in its kindness, refunds some TON to responseAddress. (reply to 149108)

Marous: If it is deducted from the contracts balance I can just put amount: 0 then ? (reply to 149110)

Slava: You are missing this part. (reply to 149110)

Slava: See this.

Marous: Got it. It won't work, I have to atleast specify the exact amount of gas fees in the amount section minimum or else the tx will revert (reply to 149114)

Slava: You should provide enough extra coins to cover all the fees for the execution of the entire transaction chain to be more precise.

&rey: "will revert" – why do you think so? (reply to 149116)

Marous: because gas fees is deducted from amount and it is 0 so th tx wont work so it will revert (reply to 149118)

&rey: The last step is faulty. (reply to 149119)

&rey: That transaction will end abruptly with out-of-gas error, no actions will be applied, and handling stops at that.

&rey: No reverting changes of prior transactions of the tree.

&rey: If other tree branches had sent some messages, those will be handled as usual – this tx has no influence on them.

Evgenii: Hello there! I am using @ton/ton library to call my contract's GET method. It used to work fine until couple of days ago. Since then I'm getting errors "failed to unpack account state".  bluepring client works just fine. tonClient4 also doesn't lead to any errors. It's only tonClient + apiKey.   All of the above is relevant for the testnet only.  Does anybody have any idea why?

— 2025-05-23 —

Tom | OrevaApp: Hello there!   Senior TON dev needed for equity in my project with worthy compensation (UI ready, over 5K community). If interested, DM!

Bohdan: I have this error too. It's the third day of this error. I asked this question in all chats, even in orbs support but no answer yet. Will hope they fix it soon (reply to 149128)

Evgenii: In my case tonclient replacement with its 4th version saved the day. (reply to 149151)

Bohdan: Unfortunately didn't help. It's more like server side issue on orbs side. (reply to 149152)

Bohdan: The funny thing is that if I deploy some simple contract like e.g. counter and call function from this contract, it works. Weird)

XI: Hi everyone! Could you please recommend the best and up-to-date materials to learn how to write smart contracts for TON? I’m looking for practical guides, GitHub repositories, or video tutorials — anything that helped you personally to get started or go deeper. Thanks in advance!

Anton: hey, please check out  https://docs.tact-lang.org — Tact documentation  https://github.com/tact-lang/defi-cookbook — practical DeFi recipes (just Jettons for the moment, will be updated with more materials)  https://github.com/tact-lang/awesome-tact — you can find the tools and video courses there (reply to 149162)

TON Bounty Bridge: ​Feature] Add wallet connection history to TON ID mini app  🏷 Developer Tool  Summary:Add a feature to display a connection history of previously used TON wallets in the TON ID mini app.  Rewards: • 150 – 250 USD • (Depends on implementation complexity and UX quality.)  Created by stennnly

Evgenii: old client also stopped worked for others methods. 😠 (reply to 149159)

&rey: Testnet interfaces can be quite unstable.

Bohdan: Yeah. But at least they could notify that today we have a problem, so we don't waste our time on unnecessary debugging (reply to 149168)

Bohdan: what alternatives are there except orbs?

&rey: The main Toncenter perhaps? testnet.toncenter.com

Bohdan: thank you very much. I connected toncenter to TonClient and it works. (reply to 149173)

Evgenii: I also switched to https://testnet.toncenter.com/api/v2/jsonRPC - works fine

Eugene: https://chainstack.com/build-better-with-ton/ (reply to 149172)

Combot: Combot has warned Draco (1/3) Reason: Word **** is not allowed

Stark: Hi can anyone share resources on connecting smart contract with oracle to trigger functions on contracts for Ton blockchain?

Andrei: Hi! Can someone please point to the example where smart contract is deployed from the wallet with pre-defined mnemonics. JS example would be perfect  To give a little more details.  I want to convert this (smart contract deployment from connected wallet) await tonConnectUI.sendTransaction({                     validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes                     network: tonConnectUI.account?.chain,                     messages: [                         {                             address: address.toRawString(),                             amount: toNano('0.02').toString(),                             stateInit: stateInit.toBoc().toString('base64'),                             payload: body.toBoc().toString('base64'),                         },                     ],                 } Into the deployment from mnemonics?

Slava: https://github.com/ton-org/ton?tab=readme-ov-file#usage (reply to 149216)

Andrei: Thanks. What method from client should I use though? client.sendMessage()? (reply to 149218)

Slava: Just put your deploy message inside the messages array.

— 2025-05-24 —

橘柚香: 才抢8.88u 手气有点差 (reply to 6)

橘柚香: 才抢8.88u 手气有点差 (reply to 6)

它是: Hey guys. The NFT transfer on Telegram to Fragments takes about 14 days for the mint process, is it maintained on the contract of the NFTs or it is off-chain process?

Combot: Combot has warned Umar Aminu (1/3) Reason: 1 reports (reply to 149256)

— 2025-05-25 —

Specter MM ⚝: Hello everyone. Does anyone have a working example of processing a transaction after receiving it from the toncenter? I need to make payment acceptance in ton, but I don't really understand how to process transactions to exclude fake transfers, etc.

Slava: Just read the docs, it has a dedicated section for this. (reply to 149322)

Nxrix: How I must create transaction for renewing a ton dns with ton connect in my web app

Nxrix: Also how can I find out the time left until the dns access will be lost

&rey: IIRC any message with sufficient TON to complete compute phase suffices. (reply to 149394)

&rey: Use get-method. (reply to 149395)

Nxrix: how much? (reply to 149396)

&rey: 0.01 or less. (reply to 149398)

Denis: https://tonviewer.com/EQAKzoH3bMazEpZbXxUQ_xE-7jvcTt-rUE6eV8WzPF7OIx62?section=method (reply to 149397)

Nxrix: Is it possible to make bulk transactions for ton connect?

Nxrix: must be from owner address or any (reply to 149396)

&rey: From owner, yes. (reply to 149403)

&rey: No one in this chat has control over Fragment. Actually there are three options: a) Fragment glitch, b) scam, c) you misunderstood the terms. (reply to 149410)

— 2025-05-26 —

Mike: Yeah its all good. Ive only made rarible nfts and it was my mistake.

TON Bounty Bridge: ​I do not consider specific details.  🏷 Developer Tool  Summary:B  Created by Hesami0084

小小怪同学: 好吃不如饺子 好玩还是得是嫂子 (reply to 29)

Random️: Hey guys, is testnet having any issues now? Seems pending for quite a long time for several of my transactions

Mojisola🍅 🍅: possible ur transaction is having issue (reply to 149430)

TON Bounty Bridge: 📊 Update Digest!  🔍 Active bounties: 16 ✅ Approved bounties: 0 🔄 Bounties seeking suggestions: 60  📣 We value your feedback! Join the community discussion and participate in shaping the future. Click the 'Create Your Own Bounty' button to get started.  Happy contributing!

Ricardo: are there TON API and TON CENTER mocking utilities for testing purposes?

&rey: I don't think so. In particular, different mocks may require different capabilities, up to having a backing testnet chain. (reply to 149439)

Nxrix: what was url for ton domains in testnet?

TON Bounty Bridge: ​Viva  🏷 Developer Tool  Created by beneraindustries

Agustin: Hey guys, do you have any working example on how to create and send wallet v5r1 ton transactions using js? My flow is Transaction creation -> get the signature hash -> sign it -> create the external message with the signatures -> broadcast

Nerses: Why is there such caution around the checkSignature and checkDataSignature functions? What technical limitation necessitates it?

&rey: Ed25519 is not known for being a cheap computational operation. (reply to 149457)

Nerses: Actually I was wondering what changes after 11th call,that it consumes more gas (reply to 149459)

&rey: TVM internal counter does. (reply to 149460)

TON Bounty Bridge: ​Begin Start NFT  🏷 Developer Tool  Summary:I’m interested to NFTs.  Created by calvin-bitcoin

@WK: Hello everyone, the cryptocurrency I created on the T O N blockchain has never successfully passed the approval to remove the verification token.

Selcuk: Hey guys, we're building a chat-based UI for our AI discovery module as a Telegram Mini App, but facing an iOS issue that breaks our input field’s UX. It works fine in Safari and Android, but not in the iOS Mini App. We think this is a common problem for chat-style Mini Apps on iOS. Who would be the right person for this issue? I can provide more details. Thx.

&rey: @devs chat would be right, not this one. I believe they might have answered that one btw – please check chat history. (reply to 149472)

Selcuk: thx! will do. (reply to 149483)

Mehmet Ankara: Question to the TON Dev Community: Hi everyone 👋  I'm analyzing the wallet contract structure for Wallet V5, particularly the part where the wallet state is initialized using the following structure:  ts Kopyala Düzenle beginCell()   .storeBit(config.signatureAllowed)   .storeUint(config.seqno, 32)   .storeUint(config.walletId, 32)   .storeBuffer(config.publicKey, 32)   .storeDict(config.extensions, Dictionary.Keys.BigUint(256), Dictionary.Values.BigInt(1))   .endCell(); I have a question regarding the config.walletId value.  🧠 What exactly is walletId (also referred to as subwallet_id) supposed to represent in this context?  And more specifically:  👉 What value does the official Telegram Wallet (W5) use for walletId when deploying user wallets?  Is it always the same hardcoded value for all users, or is it dynamically derived per user or key?  Any clarification or pointers to where this is defined (FunC or deployment logic) would be much appreciated 🙏  Thanks in advance!

Slava: Having unpredictable walletId will make your wallet (seed phrase) incompatible with other wallet software. (reply to 149486)

Slava: What's that? (reply to 149486)

Mehmet Ankara: So how can I import a wallet with the same address as the memoric list? (reply to 149487)

Slava: You can call the get_subwallet_id on the deployed wallet contract to determine the ID used.

Mehmet Ankara: thank you i will try (reply to 149491)

IMe: Is there a way to check pnl of ton wallets ?

— 2025-05-27 —

它是: Any replies? (reply to 149250)

HeKnow: hello good morning guys please need help   Firstly I am the individual_content (from TEP64 standard in my init like this init(         owner: Address,         collection_address: Address,         item_index: Int,         individual_content: Cell?,         metadata: Metadata?     ) {         self.owner = owner;         self.collection_address = collection_address;         self.item_index = item_index;         self.is_initialized = false;         self.metadata = metadata;         let dict: map<Int as uint256, Cell> = emptyMap();         let attribute  = "[{ }]";         dict.set(sha256("name"), beginTailString().concat("Michaelzy #1").toCell());         dict.set(sha256("description"), beginTailString().concat("Michaelzy test nft").toCell());         dict.set(sha256("image"), beginTailString().concat("image link here").toCell());         dict.set(sha256("content_url"), beginTailString().concat("empty url").toCell());         dict.set(sha256("attributes"), beginTailString().concat(attribute).toCell());                   self.individual_content = beginCell()             .storeUint(0, 8)             .storeMaybeRef(dict.asCell()!!)             .endCell();     }  then i implemented the getter as so: get fun get_nft_data(): GetNftData {         return GetNftData{             is_initialized: self.is_initialized,             index: self.item_index,             collection_address: self.collection_address,             owner_address: self.owner,             individual_content: self.individual_content!!,         };     }  the tonviewer link shows the owner address and collection address but the content metadata is empty. I'd appreciate your help pls

HeKnow: Posted this in tact dev group but was banned for some reeason

/B4ckSl4sh\: I guess this link may help you  https://docs.tact-lang.org/cookbook/nfts/#on-chain-metadata-creation (reply to 149566)

Keshav: Hi Team I'm getting this Error   While deploying through command   npx blueprint run  TypeError: Cannot read properties of undefined (reading 'slice')     at /home/lenovo/Desktop/Work/POC/Lottry/node_modules/@ton/blueprint/dist/utils/selection.utils.js:77:47     at Array.map (<anonymous>)     at findScripts (/home/lenovo/Desktop/Work/POC/Lottry/node_modules/@ton/blueprint/dist/utils/selection.utils.js:76:10)     at async run (/home/lenovo/Desktop/Work/POC/Lottry/node_modules/@ton/blueprint/dist/cli/run.js:18:59)     at async main (/home/lenovo/Desktop/Work/POC/Lottry/node_modules/@ton/blueprint/dist/cli/cli.js:112:5)    I was just following the documentation  and made a tact boilerplate through this command   npm create ton@latest

Fardin: Hello my friends

Fardin: We are working on a dapp on ton which has a login with wallet address  Is the response of ton connect ( wallet address) secure enough for using as a fast login method?

&rey: If the login is for frontend only, it is. If it is for server, ask for tonProof too. (reply to 149606)

Fardin: It's for the backend and could make critical security issues (reply to 149607)

Fardin: Is tonProof something like the sign data in evm network?

&rey: Then tonProof proves that the connected user really owns the wallet they name. Yes, it signs a specific wallet-and-dApp-generated blob of data. (reply to 149608)

Fardin: Great, thanks buddy (reply to 149610)

— 2025-05-28 —

Evgenii: Btw regarding ton connect - is there a way to identify whether a connected wallet belongs to testnet or mainnet in case a wallet is not initialized yet?

Mojisola🍅 🍅: it is ur front-end, you can enforce what you want.  you can set testnet or mainnet (reply to 149622)

Evgenii: It won't help - I check the resulting ton proof in the backend. (reply to 149625)

Mojisola🍅 🍅: maybe you are not doing it correctly.

&rey: What do you mean though? If a proof succeeds, then the person owns wallet with that address in either network. (reply to 149622)

&rey: The network currently chosen in wallet app is .account.chain, where -239 stands for mainnet and -3 for testnet.

Mehmet Ankara: Hello again I am interested in importing wallet I am using ton_dart library via flutter and https://github.com/mrtnetwork/ton_dart/blob/8ba497819a04aeac7a67cdbba727d043d88dbfb7/lib/src/contracts/wallet_contracts/types/models/v5_client_id.dart#L43 what should I write to this number while importing subwalletNumber so that I can import my wallet or other wallet in telegram

Torit: Can you tell me if there is a telegram bot that can track my transactions in my TON wallet? So that when I replenish my wallet, I get a notification about it in the telegram bot?

Mojisola🍅 🍅: what is subwallet. thought it isnt needed when importing wallet (reply to 149667)

Mehmet Ankara: My problem is that I import with a memoric key, for example WalletV5, but it gives a different wallet address. (reply to 149670)

Mojisola🍅 🍅: this is exactly my experience too. different wallet address.  somebody should provide answer to this.

Slava: When instantiating a wallet contract's wrapper you need to provide exactly the same init data (considering the same code is used) that was used for deploying the existing wallet's smart contract. Otherwise you will get a different address.

Mojisola🍅 🍅: v5 for example gives different address in script (reply to 149681)

Mojisola🍅 🍅: and different address in tonkeeper even though I used same phrase

Slava: Seed phrase is only a part of the init data. You need to provide all the other details exactly the same as well.

Slava: By the way, why don't you use the createFromAddress method for instantiating the wallet? Considering the wallet is already deployed…

.kodgen: Your wallets were not accidentally created in 2019?

Mojisola🍅 🍅: I am surprised at this response.  If I use js to create wallet, it gives different address and when I import into tonkeeper, it gives different address (reply to 149685)

Mojisola🍅 🍅: I thought this issue is popular

Nxrix: what is the fastest api for getting ton price usd for my web app

Philipp: Good day,  I'm trying to understand the algorythm of the bidding on getgems. When I big a contract is being deployed and the amout is being send to the new contract. When I want to find the nft adress in this contract I use the method "get_offer_data"  Then I get some random output, I could convert the hex to decimal and then from unix to utc time or the the amout of the transaction. But I cant convert the "cell" to the apropriate adress.  Can someone please explain to me how to do this?    Thanks in advance!!

Slava: Hello. Why are you trying to reverse-engineer it when the contracts seems to be officially published on GitHub? (reply to 149703)

Slava: By the way, the NFT address is parameter No. 6.

Philipp: Just for my interest I would like to get the adres from this string

Philipp: is the an option to decode it?

Slava: See the link above.

— 2025-05-29 —

TON Bounty Bridge: ​Release 0.4.0  Created by MazepaDeni

零纪年〃微蓝一抹淡笑: 才抢了8.8u，手气真差 (reply to 15)

零纪年〃微蓝一抹淡笑: 才抢了8.8u，手气真差 (reply to 15)

楠笙几梦: 才抢了8.8u，手气真差 (reply to 15)

喊我女王万万岁: 才抢了8.8u，手气真差 (reply to 15)

零纪年〃微蓝一抹淡笑: 才抢了8.8u，手气真差 (reply to 15)

Makis: Hello everyone! Does anyone know the tradeoffs between using v2 vs v3 api? From what I understand v3 is indexed? Also less providers support it presumably?

Tharun Tej: Is there any api which gives metadata of telegram Collectibles?

&: const cellData = Cell.fromBoc(          Buffer.from(              'b5ee9c72010101010024000043800d8d14f7e5aad1d5630a7c7f5cb1af485023e32a71135f9534c5a163fe74720b70',             'hex'         )      ); console.log(cellData[0]?.beginParse().loadAddress().toString()); (reply to 149703)

🎩: Hello, We are developing TON based gaming project that's going to be accessible in telegram and our app. We want and advice how to move forward with the project. Our company is registered in Dubai, is there any possibility to meet someone from TON for possible cooperation

&: What's your problem? (reply to 149752)

🎩: Lack of experience in this field, we have experience in developing apps and operate them, but since we want to make our app and gaming hub as utility for our future token, we want to know how to move forward. 0 experience in launching projects in telegram (reply to 149753)

&: DM me (reply to 149754)

&rey: I somewhat doubt TON Foundation can help everyone so I'd suggest not to waste time.  Experience can be gained at looking at existing applications and deconstructing them, going through tutorials (docs.ton.org for TON, somewhere else for TMA), trying, reading chat history and communicating on new issues. (reply to 149754)

&rey: Also, warning in advance that place to discuss Telegram miniapps is not here. It is @devs instead.

🎩: Thank you very much

S: hey, I have bunch of experience in this tg field, ton smart contract dev and tg miniapp and tg bot devlopment. just dm me or send msg here (reply to 149754)

Zerox: Hi I have exp developing some ton mini apps on TG, if you need developers, let's connect. (reply to 149752)

Slava: Cell.fromHex('b5ee…') (reply to 149751)

Tharun Tej: ? (reply to 149743)

Vetch: Hi everyone

Vetch: Could someone please tell why my USDT transfer is failed? What should I do to make a successful transfer? This is my failed transaction  hash 6eee5ee0c0f2303c0a6b576a75341f05d3ce482438090cca8db0c4fe10a6c09e

&rey: nothing, it is complete. (reply to 149781)

Combot: Combot has warned Zohirbek (1/3) Reason: Word **** is not allowed

🇵🇸: retracer.ton.org and verifier.ton.org are showing different opcodes for same contract which one could be closest to real one? i have unknown contract that i want to understand how it works. could someone help me?

Petr: You can also try this one: https://txtracer.ton.org (reply to 149801)

Andrei: Hey! Is there a chance someone can help me crafting contract deploy transaction?              // Prepare TON smart contract transaction             const __system = Cell.fromBase64(CONTRACT_STATE_INIT_DATA);             const data = beginCell().storeRef(__system)                 .storeUint(0, 1)                 .storeInt(id, 257)                 .storeInt(toNano(parseFloat(amount)), 257)                 .endCell();              const body = beginCell()                 .storeUint(0, 32)                 .storeStringTail(`Create contract: ${text} with ${amount} TONs`)                 .endCell();              const init = {                 code: Cell.fromBase64(CONTRACT_CODE),                 data: data,             } satisfies StateInit;              const stateInit = beginCell()                 .store(storeStateInit(init))                 .endCell();              const address = contractAddress(0, init);             const address_string = address.toString();              try {                 // Perform TON wallet transaction                 const transaction = await tonConnectUI.sendTransaction({                     validUntil: Date.now() + 5 * 60 * 1000,                     messages: [                         {                             address: address.toRawString(),                             amount: toNano('0.02').toString(),                             stateInit: stateInit.toBoc().toString('base64'),                             payload: body.toBoc().toString('base64'),                         },                     ],                 });  Init parameters are quite simple on a contract level.  message Init {     id: Int as uint32;     amount: Int as coins; }  When I'm trying to deploy the contract, I'm having an error. Exit code 130 (invalid incoming message)  What am I doing wrong?

🇵🇸: can you please summarize what this contract does: https://txtracer.ton.org/?tx=52b7ef34c7c43cbc9bea88a481c46e80219bf89b54ed8bb249c87c0e6038c36b (reply to 149802)

&: you have input contract code but not intial state cell (reply to 149803)

— 2025-05-30 —

Vetch: But why the final notification is failed? I couldn't figure it out (reply to 149782)

кравлер kernel: Hi guys! Help me please, where can I get a testnet +888 number?

Mojisola🍅 🍅: have you checked fragment platform? (reply to 149815)

кравлер kernel: Yea (reply to 149816)

кравлер kernel: but i need testnet number +888

кравлер kernel: where can i get it?

Mojisola🍅 🍅: sorry, why not use mainnet

Mojisola🍅 🍅: own. I think the target is mainnet not testnet

&rey: Why do you think they exist? What would they even mean, in context of Telegram? (reply to 149820)

кравлер kernel: So +888 testnet doesn't exist?

Nxrix: nope (reply to 149829)

Denis S: Hey! Friends. Please help me. How to get jetton deply date and time from TON API. I tried so many options and still can't get it properly. Thanks

Denis S: I have found solution.

Combot: Combot has warned l1ttps (2/3) Reason: Word **** is not allowed

Zerox: Hello everyone, Anyone have plan to build perp swap platform like GMX in TON? If yes, would love to contribute as a developer.

MikeWeb3Mighty: Hello everyone! Tell me examples of smart contracts with a referral system on USDT(Ton).

Andrei: Hey! Can someone help with crafting deploy transaction?  ```             // Prepare TON smart contract transaction             const __system = Cell.fromBase64(CONTRACT_STATE_INIT_DATA);             const data = beginCell().storeRef(__system)                 .storeUint(0, 1)                 .storeInt(id, 257)                 .storeInt(toNano(parseFloat(amount)), 257)                 .endCell();              const body = beginCell()                 .storeUint(0, 32)                 .storeStringTail(`Create contract: ${text} with ${amount} TONs`)                 .endCell();              const init = {                 code: Cell.fromBase64(CONTRACT_CODE),                 data: data,             } satisfies StateInit;              const stateInit = beginCell()                 .store(storeStateInit(init))                 .endCell();              const address = contractAddress(0, init);             const address_string = address.toString();              try {                 // Perform TON wallet transaction                 const transaction = await tonConnectUI.sendTransaction({                     validUntil: Date.now() + 5 * 60 * 1000,                     messages: [                         {                             address: address.toRawString(),                             amount: toNano('0.02').toString(),                             stateInit: stateInit.toBoc().toString('base64'),                             payload: body.toBoc().toString('base64'),                         },                     ],                 });  Contract with Deployable {     id: Int;     amount: Int as coins;     ———      init(id: Int, amount: Int) {         self.id = id;         self.amount = amount;     ———     } ```  I'm having an error upon deployment. 130 invalid incoming message

AutoShield: Hello 👋 I have an idea for an advanced AI-powered Web3 wallet that can integrate with TON and Telegram (via Mini Apps). Is there someone from the core team I could share a quick update or pitch with? I’d appreciate any direction. Thank you

Zerox: Hey, I am looking for new projects now, if you need more developers in your team, would love to discuss with you. (reply to 149887)

Zerox: Do you plan to develop project with the idea? If yes, would love to discuss further. One thing I wanna say first,  I am not a TON core team member (reply to 149889)

AutoShield: Thank you for the idea, it is strong to subscribe but contact the team

TON Bounty Bridge: ​money  Created by Polyanov

angel: Hi there,  Thanks for sharing your vision — it sounds like an exciting project! I have hands-on experience developing games and apps on the TON blockchain, including Telegram-integrated games, smart contract logic, and onboarding user flows. I can definitely help guide you on how to move forward — from setting up your TON wallet & token infrastructure, to game logic integration, Mini App deployment, and even launch strategies inside Telegram.  I’d be happy to:   - Set up Telegram Mini App or bot integration  - Handle smart contract development and in-app transactions (e.g., NFT rewards, game economy)  Is there any opportunity I can work with you? (reply to 149752)

— 2025-05-31 —

番茄你个白薯: 发了18888u (reply to 15)

此籹子不需要谁来怜惜: 发了18888u (reply to 15)

此籹子不需要谁来怜惜: 发了18888u (reply to 15)

灬夏恋海边: 发了18888u (reply to 15)

此籹子不需要谁来怜惜: 发了18888u (reply to 15)

灬夏恋海边: 发了18888u (reply to 15)

Zerox: Hey Andrei. That 130 invalid incoming message error usually means your contract isn’t handling the incoming init message correctly. Make sure you’ve implemented recv_internal() and try increasing the sent amount (e.g., 0.05 TON) to cover deploy costs.  Could also help to simulate the tx in TON Sandbox for better debugging. (reply to 149887)

Alireza⁪⁬⁮⁮⁮⁮⁪⁬⁮⁮⁮⁮ ⁪⁬⁮⁮: Here anyone knows how can I get in touch with the official TON network support?

Андрей: @ton_help_bot (reply to 149947)

Alireza⁪⁬⁮⁮⁮⁮⁪⁬⁮⁮⁮⁮ ⁪⁬⁮⁮: No one answers. (reply to 149951)

Андрей: then you didn't wait long enough for an answer (reply to 149954)

Alireza⁪⁬⁮⁮⁮⁮⁪⁬⁮⁮⁮⁮ ⁪⁬⁮⁮: No, it's been a while since I sent a message to this bot asking for help. (reply to 149955)

&rey: What was the class of issue? Did it involve any service beyond TON Blockchain? (reply to 149954)

Slava: I want to share some important information about using TON HTTP API keys. Below are the best practices discussed with my friends at toncenter.com:  1. RPS (Requests Per Second) Limits: Each toncenter account has a limit on the number of requests. Higher tariff plans allow for more requests, enabling more users to access the application simultaneously.  2. Limiting RPS by IP Address: There is an option to limit RPS based on IP addresses. If your Web3 application exposes the API key on the client side, we strongly recommend enabling this setting. Without it, your service is vulnerable to denial-of-service (DOS) attacks from a single IP address.  3. Domain Name Restrictions (CORS): Implementing restrictions based on domain names is advisable, particularly for Web3 apps. While this measure is not foolproof, it can help prevent unauthorized use of your API key in other web applications.  4. Utilizing a Reverse Proxy: Because the above protective measures can potentially be bypassed, it's recommended not to expose your API key directly. Instead, consider setting up a reverse proxy. This will hide the key and provide you with additional ways to defend against attacks if you have the necessary resources.  5. Full Backend Solution: The most reliable solution, though not ideal for Web3 applications, is to have a complete backend setup that includes caching, request limitation, and authentication.  6. Current Challenges for Web3 Applications: For a full-fledged Web3 applications, the situation is still quite challenging. By enabling domain binding and IP-based RPS restrictions, you can potentially maintain service under normal conditions. However, in the event of a DDoS attack, there is a high likelihood of service disruption, particularly for small projects on lower tariff plans with limited RPS. This remains true even with the presence of a Web Application Firewall (WAF) to protect against common attacks.  At this point, the only reliable solution I see for decentralized finance (DeFi) is to allow users to input their own endpoints and API keys within your Web3 application. Although this may negatively impact the user experience, it promotes decentralization, which comes with its own costs.

Combot: Combot has warned Bohdan (1/3) Reason: Word **** is not allowed (reply to 149963)

Alireza⁪⁬⁮⁮⁮⁮⁪⁬⁮⁮⁮⁮ ⁪⁬⁮⁮: yes, username transfer on TON Blockchain - fragment frozen commissions fee and TON assets during this process (reply to 149962)

&rey: So it did involve non-blockchain service, namely Fragment. Please refer to them. (reply to 149966)

Alireza⁪⁬⁮⁮⁮⁮⁪⁬⁮⁮⁮⁮ ⁪⁬⁮⁮: and fragment support are exhibiting suspicious behavior (reply to 149967)

Alireza⁪⁬⁮⁮⁮⁮⁪⁬⁮⁮⁮⁮ ⁪⁬⁮⁮: I can't find their official support. (reply to 149967)

&rey: TON Community Chat's moderators say it is help@fragment.com .  As for any service you learn about — if you do see something suspicious, you should not use it or learn more. It's one of the basic rules for protecting from scam as well. Anyways, TON is The Open Network, many things can be run here. (reply to 149969)

Alireza⁪⁬⁮⁮⁮⁮⁪⁬⁮⁮⁮⁮ ⁪⁬⁮⁮: Can you please look into a transaction related to the commission that I was asked to make and tell me the details? (reply to 149970)

&rey: No one in this chat, including me, has influence over what private services do. (reply to 149971)

Alireza⁪⁬⁮⁮⁮⁮⁪⁬⁮⁮⁮⁮ ⁪⁬⁮⁮: No, help me explain the sections in the tonviewer transaction link please. (reply to 149972)

AGT: Gentlemen, is there any way to destroy the tokens transferred to the black hole address?

Jimmy: Unfortunately, tokens that end up in a "black hole" address (i.e. an address that cannot be controlled or from which funds can be extracted) cannot be destroyed or returned. A black hole in the blockchain is simply an address that does not belong to anyone, and funds sent there are lost forever. (reply to 149980)

&rey: That's quite imprecise; the TON black hole -1:ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff also disposes of any native currency sent to it (IIRC half those TON are distributed by validators and half are destroyed reducing the total stat). (reply to 149982)

AGT: But the total circulation on the chain includes this part of the tokens, right? (reply to 149982)

&rey: That's the point; it does NOT. Just like half of transaction fees are destroyed, meaning that those TON are no more. You can see that the black hole address (whose alternative spelling is Uf___________________________________________-ll) contains zero TON despite being sent some. (reply to 149987)

Jimmy: No (reply to 149987)

AGT: UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKZ This is the address I transferred to. (reply to 149988)

&rey: No. The tоkens are owned by this address, but no one will ever deploy a contract there, so no one will be able to do anything with tоkens. (reply to 149992)

AGT: Is this address a black hole address? (reply to 149993)

Jimmy: Stop deleting my information to that dude pls. (reply to 149993)

&rey: No. It is just unusable (unless SHA-256 preimage is found for all-zeros, which is harder than mining). (reply to 149994)

AGT: My tokens were issued 190,000,000 before, I transferred 1010,000,000 here, but tonscan shows that there are still 190,000,000 tokens in circulation

AGT: It seems that I was wrong, this is an irreversible mistake (reply to 149996)

&rey: Please note that black hole does not do anything to non-native tokens either (and TEP-74 jettons are fungible tokens).  TEP-74 has a special facility, burn message, which allows to permanently remove some jettons you own.

AGT: 👌🏿

Dmitry | backend4you.ton: Yes. The fact that you don’t know seed (private key) from some contract that owns your jettons doesn’t mean that these jettons do not exist. The fact that nobody knows (and has no chance to know) means the same. To “destroy” some jettons you need to send them back to jettons master with “burn” command. Jetton master will decrease total amount (reply to 149997)

AGT: OK, I understand.

shealtielanz: Hello, How can i submit a bug in a very used standard and get rewarded for it?

shealtielanz: ? (reply to 150005)

&rey: A bug, or improvement opportunity? Please submit latter to https://github.com/ton-society/grants-and-bounties/. (reply to 150005)

shealtielanz: this isn't what I'm looking for, i'll do my own research (reply to 150008)

ming: is this true ?

&rey: No. Please do not use any links/buttons from that message. You can open Fragment on your own to check what is real. (reply to 150011)

ming: Someone asked me to follow the instructions in the video. The video seemed very realistic and I almost fell for it.

&rey: Then, just ignore them. The video itself does not belong in this chat. (reply to 150014)

&rey: Please see chat name for its primary topic though! Any questions on how to develop on TON are welcome.

— 2025-06-01 —

Combot: Combot has warned 巴黎铁塔上盛开的繁华* (1/3) Reason: 1 reports (reply to 150060)

Александр 🫶: anyone else has trouble with transactions that were proceed when blockchain was down? lost tether

&rey: Do you have the hash of transaction which has been executed and its followup in the tx tree has not? (reply to 150114)

&rey: If not, then jettons simply lie in sender's wallet, untouched.

Александр 🫶: msg deleted

&rey: Contact their support.

Александр 🫶: their wallet is not deployed, have hashes on my jetton address but no info about the wallet to i have sent

Александр 🫶: jetton addr only show my addr

Александр 🫶: may be that is why cannot see money on their wallet (reply to 150122)

&rey: Well, that is common for custodial services. If their processing went down with block generation, it might handle everything upon next transaction (1 microUSDT). (reply to 150122)

Александр 🫶: thx

— 2025-06-02 —

CHINA: It's real?

CHINA: True info?

isik: Hello 👋, does anyone used okx web3 API before it shut down. I was using okx web3 API a few months ago and it worked perfect, but when I try to make API calls now it takes almost 1 minute to get the quotes response from the API. Do I need to create a new API key or something else. Any help appreciated

🇵🇸: can anybody help me to parse this dict?  x{C_}    x{2_}     x{7BA_}      x{AD9A741281DCD6539DC_}      x{2_}       x{2_}        x{A852184A07735943F9_}        x{A83A604A0773594241_}       x{AA11542503B9ACA1DD}     x{2_}      x{2_}       x{2_}        x{4}         x{AD9A741281DCD650B24_}         x{2_}          x{2_}           x{A852184A077359487D_}           x{A83A604A07735940BD_}          x{AA11542503B9ACA116}        x{4}         x{AD9A741281DCD68D28C_}         x{2_}          x{2_}           x{A852184A07735941F3_}           x{A83A604A0773594195_}          x{AA11542503B9ACA78E}       x{2_}        x{4}         x{AD9A741281DCD652CEC_}         x{2_}          x{2_}           x{A852184A07735940BF_}           x{A83A604A077359413D_}          x{AA11542503B9ACA36C}        x{4}         x{AD9A741281DCD6510BC_}         x{2_}          x{2_}           x{A852184A0773594811_}           x{A83A604A0773594839_}          x{AA11542503B9ACBC31}      x{70}       x{AD9A741281DCD650B2C_}       x{2_}        x{2_}         x{A852184A07735940C1_}         x{A83A604A0773594FAB_}        x{AA11542503B9ACA351}

Dmitry | backend4you.ton: What you expect by “parse”? Do you know what are key length and value type? (reply to 150145)

🇵🇸: i dont know keys and values  😢 probably some integers. may be this can provide some hint https://txtracer.ton.org/?tx=57bc2c5e3b66bab77cc43fcf384a139dfb0575ffd2cbc3e4f2b3d18131da5990 (reply to 150146)

&rey: 64-bit keys, empty values. (reply to 150146)

🇵🇸: loadDict(Dictionary.Keys.Uint(64),Dictionary.Values.Cell()) producing no more reference error

&rey: Because the contained value is not a cell, it is empty. (reply to 150151)

🇵🇸: how to set empty value in loadDict() ?

Dmitry | backend4you.ton: Slice? (Didn’t tried, just guess) (reply to 150153)

🇵🇸: my code is like this.   {         u: ref_s.loadUintBig(256),         uu: ref_s.loadUint(34),         uuu: ref_s.loadUint(8),         uuuu: ref_s.loadDict(Dictionary.Keys.BigUint(64),Dictionary.Values.Cell()),     }

🇵🇸: just loadDict has problem

Combot: Combot has warned 海上花 (1/3) Reason: 1 reports (reply to 150161)

TON Bounty Bridge: 📊 Update Digest!  🔍 Active bounties: 16 ✅ Approved bounties: 0 🔄 Bounties seeking suggestions: 65  📣 We value your feedback! Join the community discussion and participate in shaping the future. Click the 'Create Your Own Bounty' button to get started.  Happy contributing!

🇵🇸: only the dict stored in state data seems to be having this structure. (reply to 150150)

🇵🇸: i need to parse dict that is sent in external message

&rey: Just checking: you already tried Dictionary.Values.BitString(0)? (reply to 150170)

🇵🇸: yes but it is able to parse only dict stored in state data ,  i want the dict sent in this transaction https://txtracer.ton.org/?tx=57bc2c5e3b66bab77cc43fcf384a139dfb0575ffd2cbc3e4f2b3d18131da5990 (reply to 150173)

🇵🇸: this contract loads state data( line #54)  may be you mistaken it as what i want.

🇵🇸: i want this dict in line number 106

&rey: It might have key len 28. (reply to 150176)

Happyful: Gm every one.  Is it possible to connect with the TON team/DevRel or anyone from TON?  We’ve a product that lets users to shop retail/e-commerce (think Amazon) using crypto.  And we would love to bring this to TON and Telegram.   Would appreciate a lead.

&rey: If you want to connect to TON Foundation, that's partnership@ton.org (reply to 150178)

&rey: Depends on what you mean by "succeed" in fact. (reply to 150192)

kidogb: I mean how can I check the status of a transfer. I can see in the traces, there are 3 transactions.

kidogb: And one was failed. I tried to get the trace but too many fields, make me confusing

kidogb: How can I check the status same as the tonviewer

&rey: See its bottom right menu. (reply to 150198)

kidogb: thanks, any chance to check it from the toncenter api v3?

&rey: I don't think anything shares Tonviewer's definition precisely. (reply to 150200)

Aleksander: Hello everyone!  Guys, please tell me if there is an API in the Tonnel market? I have a cool idea, I want to try to implement it!   thanks

Tom: 706 is a “common” error for not enough jetton. (reply to 150196)

— 2025-06-03 —

Soon Guan: Hi! what's the TON Balance in the Elector Contract supposed to represent? :O  1. Is it the total stake of TON on the network?  2. Are the rewards that it receives from the system = to universe of staking rewards distributed

TON Bounty Bridge: ​TON Ecosystem  🏷 Developer Tool  Summary:Ton  Created by calvin-bitcoin

Combot: Combot has warned Devameer•ton 💙 (1/3) Reason: 1 reports (reply to 150237)

TON Bounty Bridge: ​Ton  Created by Red03Red03547

Soon Guan: Can nominator pool submit 2 different stake elector contract o_o?  https://tonviewer.com/Ef9SgTB0x_36riLHzxje_7Sz5e803iBsuU20QnP6EyTLKLBG

🇵🇸: can anybody explain this code like how dictionary key is constructed ?  PUSHCONT {                         NOW                         LTIME                         PUSH s4                         ADD                         XCHG_0 s4                         INC                         SWAP                         PUSHINT_8 15                         AND                         LSHIFT_1 24                         XCHG_0 s4                         PUSHPOW2DEC 24                         AND                         XCHG_3 s1 s4                         ADD                         PUSH s2                         PUSHINT_8 28                         DICTUGET                         NULLSWAPIFNOT                         PUSHCONT_SHORT {                             LDGRAMS                             SWAP                             SETGLOB 1                             ENDS                         }                         PUSHCONT_SHORT {                             DROP                         }                         IFELSE                     }

Zerox: I think Tonnel doesnt support external API but if you want, I can get all the data using Dune-Tonnel TG Gift Marketplace or other ways, so what's your cool idea? (reply to 150207)

🇵🇸: i have dict like this key is 28 bits value is coins. can anybody tell me on what logic the contract picks a specific item from the dict?    'n:130261058' => 5000000093n,       'n:131261058' => 5000001577n,       'n:132261058' => 5000001659n,       'n:147038274' => 5000000866n,       'n:148038274' => 5000002036n,       'n:149038274' => 5000000074n,       'n:150038274' => 5000000846n,       'n:163815490' => 5000000849n,       'n:164815490' => 5000000845n,       'n:165815490' => 5000000160n,       'n:166815490' => 5000000256n,       'n:180592706' => 5000018709n,       'n:181592706' => 5000000040n,       'n:182592706' => 5000000054n,       'n:183592706' => 5000000299n,       'n:197369922' => 5000000299n,       'n:198369922' => 5000000231n,       'n:199369922' => 5000000269n,       'n:200369922' => 5000000204n,       'n:214147138' => 5000000769n,       'n:215147138' => 5000002971n,       'n:216147138' => 5000001212n,       'n:217147138' => 5000000181n (reply to 150253)

TON Bounty Bridge: ​TON Security Enhancement via Google OSS-Fuzz Integration  🏷 Developer Tool  Summary:Integrate TON blockchain components into Google OSS-Fuzz for continuous automated security testing t...  Created by vah13

🇵🇸: ?🥹 (reply to 150267)

pL: Hi, I have a question, can I retrieve tx with it’s hash and LT, are there any ways to do this?

&rey: (address,LT,hash) is the native tuple for retrieving; indexers can do so from (hash) alone. (reply to 150277)

🇵🇸: how to compute dict key like 131261058 from this code? (reply to 150253)

pL: Thank you! (reply to 150278)

Aleksander: I aim create a collective purchase system for expensive gifts 🎁 and something else (reply to 150255)

— 2025-06-04 —

Alula: Hello TON Dev community — I’m with Covalent, and we’re exploring partnership and indexing opportunities on TON. Could someone point me to the right person or team to speak with?

Soon Guan: Hi all! I'm interested in understanding staking rewards per ton account  Is it possible to do the following with transactions and messages data?   1. Fetch stake/unstake movement of TON from nominators and validators  2. Identify rewards accrued for each staker (nomin/validator) after each election   3. Identify rewards of all validators in each election cycle?   Basically I want to input address X and find how much staking rewards it has received for accounting purpose

Alula: That’s a real challenge — I found some block explorers and APIs that sort of let you pull this info, but it’s patchy at best.  That’s actually why I think a TON x Covalent partnership could be powerful.  I can get 100+ EVM wallet balances instantly with Covalent — why not TON? Structured access to staking data, validator rewards, and onchain movements would open up a ton of use cases for devs, auditors, and infra teams. (reply to 150308)

Andrei: I think I sorted it out Thanks though (reply to 150314)

&rey: You could start with the Elector contract / reading network parameter which holds current stakes. (reply to 150308)

&rey: In Tonapi, there is /v2/accounts/_bulk already, so you're just mistaken on this. (reply to 150309)

🇵🇸: help me friends whoever helps to solve this puzzle i will surprise with gifts. (reply to 150280)

&rey: Stack had: ... c b a Key is: ((now()%16) << 24) + (lt+c)%(1<<24) (reply to 150253)

Soon Guan: Interesting! is th historical stake and election data also found in the elector contract as wlel? (reply to 150327)

🇵🇸: this is 16 or 15 i don't see 16 in the code ? (reply to 150333)

🇵🇸: is https://txtracer.ton.org/?tx=57bc2c5e3b66bab77cc43fcf384a139dfb0575ffd2cbc3e4f2b3d18131da5990 reliable to analyse a transaction? i see some block of code showing as "not executed" but i don't think so.

&rey: &15 or %16 is the same – taking four smallest bits. (reply to 150338)

.: Hello, can someone help me integrate the system to buy project tokens with tons in the mini app or transfer existing tokens to the project or withdraw project tokens in the mini app to crypto wallets?

&rey: It is called a DEX; if you use popular AMM-based ones (that is, ston.fi or dedust.io), you can look at their SDKs. (reply to 150345)

&rey: If I understand right, github.com/gobicycle/bicycle is suitable. (reply to 150345)

.: I understand, I looked at ston.fi, but I'm new to blockchain software and programming, so I don't know much. Are there any resources that give examples of how to do it step by step? I'll learn, and thank you very much for your help. (reply to 150348)

.: Thank you (reply to 150349)

&rey: You're looking for https://docs.ston.fi/developer-section/quickstart/swap (reply to 150350)

.: Thank you (reply to 150352)

Justice: I can (reply to 150345)

.: Can I write to you privately? (reply to 150352)

mikail: After buying telegram stars on fragment.com i need to confirm transaction in my wallet (e.g. Tonkeeper). So I want to automate this process and make a script doing that(transaction confirming). So could you please tell me how can i do it because i didn't find any point in documentation about transaction confirming.

&rey: Tonkeeper does not have functionality for automatically confirming transactions as it would be harmful to common users. You need a specific TC2-compatible wallet, perhaps writing your own. (reply to 150359)

mikail: what python library can i use to do this? (reply to 150360)

&rey: That's kind of complex. You will need something like tonutils/pytoniq, requests and some more. Implementing your own wallet's side for TON Connect 2 is not documented well in fact. (reply to 150361)

mikail: Okay, thank you (reply to 150362)

🇵🇸: how can we compute LT from unix timestamp? like we see here  https://explorer.toncoin.org/last is there any formula?

Denis: there is not any direct connection between lt and unixtimestamp (reply to 150364)

Alex: Hi everyone

Alex: How can I validate my issued token? So that when I transfer it, the wallet does not display the message "This token is not verified. Buy only tokens that you trust" ?

Daniel: you should make a pull request to tonkeeper’s repository on github (reply to 150370)

Alex: Thnx Daniel (reply to 150371)

Daniel: https://github.com/tonkeeper/ton-assets (reply to 150372)

🇵🇸: so where these values are coming from?  lt  57930295000000 .. 57930295000004 (reply to 150366)

Denis: https://en.wikipedia.org/wiki/Lamport_timestamp (reply to 150376)

🇵🇸: hard to understand.   i see i can get these values using your api https://tonapi.io/v2/blockchain/masterchain-head does it change every second or every block? (reply to 150378)

Denis: every block

🇵🇸: How do I compute an internal message hash? What are the required parameters?

&rey: You should format it as block.tlb does, and hash the resulting cell. (reply to 150387)

🇵🇸: you mean this?  https://github.com/ton-blockchain/ton/blob/master/crypto/block/block.tlb#L126 (reply to 150388)

&rey: Yes, followed by possibly StateInit, followed by payload. (reply to 150389)

Juster: Hello, which TON indexers you use for real-time data. It is not always convenient to send data via API, do you write your own scanners?

Juster: Hello. if some one from this asset list will be scammed in future, he will be removed from this list? (reply to 150373)

pL: Hello, is there any way to unmarshall smart-contract response from message body?

&rey: It is defined by TL-B which often comes within contract's source code, or in standard (TEP-62 for NFTs, TEP-74 for jettons). (reply to 150408)

pL: Thank you (reply to 150409)

— 2025-06-05 —

MAGIC | Blockchain🙏: Has anyone tried developing multi-contract defi on ton. Jettons token transfer fee is almost 30 times higher than on Binance chain. I can't afford if an order of 30 USDT but it costs almost $3 in transaction fee with 15 contracts launched

MAGIC | Blockchain🙏: It's too expensive to build defi on TON. I wonder if there's a better way? Hope to hear from you.

🇵🇸: const cell = beginCell() .storeBit(0) .storeBit(1) .storeBit(1) .storeBit(0) .storeAddress(Address.parse(src)) .storeAddress(Address.parse(dest)) .storeCoins(value) .storeDict(null) // Extra currencies (null if none) .storeCoins(0n) .storeCoins(fwd_fee) .storeUint(created_lt, 64) .storeUint(created_at, 32) .storeBit(false) .storeBit(true) .storeRef(payload) .endCell(); is this correct approach? this is working if there is no payload, or the payload contains no ref.  if the payload contains ref then the cell giving wrong hash.  any idea how to fix? (reply to 150390)

🇵🇸: exact code here https://pastebin.com/raw/RyJNELAP (reply to 150428)

&rey: Though what do you use internal message hash for? Also, doesn't your API return the whole message cell?

🇵🇸: i need to precompute hash to compete in a race.  can you check pastebin link please? (reply to 150431)

&rey: Then how an internal message helps you? Presumably you'd meant to optimize hash of external one? (reply to 150432)

Nxrix: how many bits is the storage of a contract

🇵🇸: i think its internal only. i saw some guys influencing internal message orders to take some advantage (reply to 150433)

&rey: Well up to 67043328, see at https://docs.ton.org/ru/v3/documentation/smart-contracts/limits#message-and-transaction-limits (reply to 150434)

🇵🇸: ? (reply to 150430)

🇵🇸: can anybody check this code and tell me why the hash is not same? (reply to 150430)

pL: Hi, i have a question about msg parsing: while transforming msg payload to slice a receive next struct:   556[...] -> {   267[...],   56[...] }  Doing slice.LoadRef() I receive only 267[] and losing 56[] is there a way to get 56[]?

&rey: So you do LoadRef once more. (reply to 150447)

Slava: Are you saying that you have 25 jetton transfers in your transactions chain? Are you sure your architecture is optimal? (reply to 150425)

pL: It says there is no any refs and after first LoadRef it shows only 267[] part (reply to 150448)

&rey: On which of the slices do you call second LoadRef? (reply to 150451)

О.К: Hi, I need help with a smart contract. Is there a recommended way to issue a custom asset in TON in 2025?

pL: I solved it, the problem was in not referring from raw message body, thanks (reply to 150454)

Always Polite: Hi Ton token contract is written in solidity?

Always Polite: We want to launch our token on TON Mainet  Where i can get other things? Examples , testnet tokens etc.

Daniel: Smart contracts are written in FunC, TACT or TOLK (reply to 150463)

Daniel: You can read about token standard (Jetton) here: https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md (reply to 150463)

&rey: No, that would be impossible since EVM languages do not work on TON. (reply to 150462)

Nikhil: Is there any way i can compile and execute smart contracts locally using python?

&rey: Compile – not particularly.  Execute – yes; see pytvm. (reply to 150468)

Dh dh: Is this scam?

&rey: That is. Please don't engage with it. (reply to 150475)

&: Why not use Ts? (reply to 150468)

Алина: I get this annyoing bug - when i send money to my highload wallet, wait for the transaction to finalize and then create a transfer from that wallet, the order of transactions gets somehow mixed up and the transfer fails because there were no money at the moment.  Could that be related to the createdAt parameter in the highload ext in msg?

&rey: Did you wait for the arrival transaction to happen, or just for the sending one? (reply to 150480)

Алина: I did wait until the money comes sort of speak (reply to 150481)

&rey: Well I should remind that TON transfer consists of two transactions, not one; and if you wait for the second one, then highload transfers do succeed.

Алина: Oh, that could be the culprit! Thanks (reply to 150483)

— 2025-06-06 —

TON Bounty Bridge: ​Wallet  Created by delaram7

TON Bounty Bridge: ​Wallet et 😁 pour la fin  Created by delaram7

TON Bounty Bridge: ​Vaule  Created by delaram7

О.К: I need help with a smart contract. Is there a recommended way to issue a custom asset in TON in 2025?

Daisy: GM Frens, Is there anyone who can help me listing my application on TON App?

Khashayar: Is there anyway to talk to Telegram Devs?

Khashayar: About Limitations for game making on it

MAGIC | Blockchain🙏: I'm not talking about architecture, I'm just saying that the cost of a jettons transaction is too high (reply to 150450)

Hakiem: Hi can someone help me find where my tokens ended up? transaction failed but tokens are lost  https://tonviewer.com/transaction/9d21cde0ace0046a8af6f036561ac717a614cb37720dff2595c0190badf992f7

Andrew: Hey, I have a problem: the USDT transaction is present in tonviewer. It definetelly exists. It is definitelly send to my wallet. But when I parse transactions from https://toncenter.com/api/v2/getTransactions , several such transactions are missed. I cannot understand why p.s. I checked, “Jetton Notify” is sent

&rey: This is an unsound jetton; normal implementations are tested to never fail receiving the internal transfer. I don't think the jettons are anywhere accessible now. (reply to 150503)

&rey: If you just want a jetton, one can be made at minter.ton.org/ (reply to 150494)

Slava: Really? Have you seen fees in the TRON network for example? (reply to 150502)

Andrii: Alright. That's so higher than TON network. (reply to 150534)

aedqdes: hello guys

aedqdes: Hey! I'm doing a quick UX survey for a TON-related project about identity and scoring in TON. Would really appreciate it if any dApp users or devs could help out — it’s just 2 minutes 🙏 https://forms.gle/9DK1xMTuFR37do5NA

jack ma: jettonminter Contract minted whats next  tried mint.ts but stucked here  ton-blockchain/stablecoin-contract?tab=readme-ov-file  its stablecoin contract

Ali: Hi guys, please help me, how to start an auction for a domain that has already run out of time?

Mojisola🍅 🍅: ton network fee is really low. hope you know how to refund excess and not using it to consider that ton is high (reply to 150502)

aaaaaa: Hello, dear community members!  I'm currently working on testing and need a significant amount of TON testnet tokens (100+) to proceed with my tasks.  If any validators or community members could spare a large quantity of testnet tokens, your contribution would greatly help me in completing my work. I'd be immensely grateful for your support!  My testnet wallet address:  0QD15lVoaA6rJE-1uMBB3xQkf7euWURFtV8006AiaU9kpFj2   Thank you so much for your generosity and assistance!

&rey: @f_closer can help you with this. (reply to 150570)

— 2025-06-07 —

Vetch: Hi everyone, could you tell me why this TON transfer end up with -14 out of gas error? Both sending and receiving address have enough TON, I dn't understand how could this happen. The transaction hash is: 3f3479fc00a3d077fa45f320d976328a8f9d04bc4508f59123756aebb8ed17b5

Mojisola🍅 🍅: check the mode you are using to send. use sendpaygasseparately. seem the receiving address doesn't have enough ton (reply to 150609)

Vetch: I'll check that, thanks. Why the 1 Ton is not enough for the receiving address? What's the suggested Ton balance to hold for a wallet? (reply to 150619)

Mojisola🍅 🍅: the amount you sent is kind of small

Mojisola🍅 🍅: and receiving address probably don't have enough or so.  U shud av like 0.05

sangmin: u will send 0.05 ton

Mojisola🍅 🍅: even 0.01 should work or so

Vetch: So it's because the sending amount was too small, I don't see any info about the min amount limit in a transfer, could you tell where to find it?

Mojisola🍅 🍅: you can test things for yourself. (reply to 150630)

ᅠ: Who can send a testnet ton in large quantities, I will be grateful

&rey: @f_closer can help you with this. (reply to 150663)

&rey: It is alright by the way. (reply to 150609)

&rey: I do recall I answered you. Do not spam further. (reply to 150570)

Combot: Combot has warned 悔恨当初 (1/3) Reason: 1 reports (reply to 150685)

Penny: Hi, could someone send me a small amount of Testnet TON for testing?

Penny: My address:0QDhspsUjJD3SS5iUmfytUdfX-jFrUuvtqtzAlgJiuOVqEsR

&rey: @testgiver_ton_bot does that. (reply to 150696)

TON Bounty Bridge: ​Fixing TON Connect Gaps in Python  🏷 Developer Tool  Summary:Despite the existence of a Python SDK for TON Connect, its current implementation and documentation ...  Rewards: • SBT Bounty Reward • TON Docs Localization Pioneer SBT  Created by nessshon

— 2025-06-09 —

MAGIC | Blockchain🙏: That is reason Defi on TRON can not scale user :))) (reply to 150534)

MAGIC | Blockchain🙏: We are a team that has been developing Blockchain software for 8 years. I really like TON but I need to speak out so that the Defi ecosystem on TON can develop further.

Matt: Pls what is it all about

&rey: This group? It's about how to develop your smart contracts on TON and interfaces to them. (reply to 150769)

fgx: Searching for job or tasks in TON / Telegram, DM. Skilled developer + team.

TON Bounty Bridge: 📊 Update Digest!  🔍 Active bounties: 16 ✅ Approved bounties: 0 🔄 Bounties seeking suggestions: 74  📣 We value your feedback! Join the community discussion and participate in shaping the future. Click the 'Create Your Own Bounty' button to get started.  Happy contributing!

Jimmy: @pcrafter that ad, i think (reply to 150775)

Dalen: Hello everyone! I'm looking for a solution for on-chain randomness on the TON blockchain. I found the Tact documentation here: https://docs.tact-lang.org/ref/core-random/#randomint Is it truly secure enough for use in a production environment? Are there any other solutions available?

&rey: First, you need a specification: who commits to invoking your contract and who commits to a random number at which moment, plus to set stakes level. That will allow to make an informed choice. (reply to 150781)

Dalen: In the case of the current application I'm building, anyone can call the contract at any time, and staking is not possible. Are there any other solutions available? I found this article on Medium — is this method truly secure for use in a production environment? https://medium.com/miki-dev/true-randomness-on-ton-blockchain-60670f455027 (reply to 150782)

&rey: This should be solved at theoretical level, subject to these two constraints: 1. User shouldn't have ability to know the number before they commit to sending message to your contact. 2. Whoever provides the last bits of entropy (when using LT, that's a validator; ECVRF doesn't provide entropy itself, just generates an unpredictable number) shouldn't be able to calculate the result after user commits to send a message, but before they commit to that entropy. (reply to 150784)

&rey: "user commits to send a message..." is, essentially, "the external message is accepted by user's wallet contract".

Алексей Ковалёв: What is your project? (reply to 150796)

Zaidu: My project is about Ziver, a pioneering Multi-chain project meant to revolutionize and give a new meaning to cryptocurrencies.  I don't know if I am allowed but here's our whitepaper:  https://docs.google.com/document/d/16f3_po7M2OxfAUM8gaz4mbMHe12GW1ii/edit?usp=drivesdk&ouid=100918683306786672033&rtpof=true&sd=true  ---------    You can get all the information about this project there, and you get our progress through our telegram channel:  https://t.me/zivcoins (reply to 150797)

Dalen: does we have any example? (reply to 150786)

Dalen: I plan to implement a commit-reveal scheme for my app. However, I couldn’t find any examples of it—only examples of randomize_lt and block skipping.   https://docs.ton.org/v3/guidelines/smart-contracts/security/random-number-generation (reply to 150786)

&rey: Well all primitives (that is, probably, cell_hash) are in place. (reply to 150804)

Azim: Hi everyone,  We’re building a product on the TON network and need a VRF (Verifiable Random Function) service for one of its components. I’ve explored several options, and recently found a VRF solution developed by a group called Hexolabs—but the only resource I could locate is their GitHub repository:  @github/hexolabs-web3  If you have any knowledge of the team or the company behind this project, or if you’ve used their VRF service yourself, I’d be grateful for your insights. I’m especially interested in whether the project is officially recognized, whether it has undergone any audits, and any other relevant details you can share.  Thanks in advance!

&rey: I could not find the actual verified randomness function inside it. (reply to 150818)

Azim: do you have access to their contracts' code ? marked “confidential implementation” in their docs (reply to 150819)

&rey: Apparently it is inside EQAlanxuEMsnWh0EhV2rwfelemQZpJM8uyvN0tM62IWPzQ0L but they didn't publish that code! Though you most certainly don't want to pay that much.

&rey: I had written ECVRF impl once, at https://github.com/ProgramCrafter/ecvrf-coordinator-contract/blob/master/src/ecvrf.fc, but I missed an important part of it so it needs patching.

Azim: Oh, you’re ProgramCrafter, by the way?   I’ve read your work and put a lot of effort into using it.

&rey: One and the same. (reply to 150824)

Azim: What you’ve accomplished is really impressive, but as you’ve mentioned, some key parts are still unfinished. Do you plan to complete them? I imagine many in the community urgently need a production-ready VRF implementation on the network. @pcrafter

&rey: The oracle somewhat worked but had only one use besides me, unfortunately. Though I can complete it. (reply to 150827)

&rey: By the way I cannot attest to their knowledge of idiomatic Rust either, because they chose to change environment variables instead of configuring the logging library inside code. (reply to 150818)

Azim: So I hope we can become one of its biggest, most frequent users once you complete it. I’m not sure if this is the right place to ask, but could we have a more detailed conversation about it? (reply to 150828)

&rey: It is open source software. Will be done soon. (reply to 150830)

Azim: So you really are finishing it—that’s great to hear! From our earlier chat I had the impression you might have abandoned the project. I hope I can start using it very soon. Thanks for taking the time to answer my questions so patiently.

— 2025-06-10 —

ㅤ: Hey guys does anyone know how i can integrate TON with telegram bot ..... any example github repo ??

Odd: Anyone here looking for dev?

Orang Ganteng Coin: Hi, can I get some testnet TON for development?

Dmitry: @testgiver_ton_bot (reply to 150850)

Orang Ganteng Coin: thanks brother🫡 (reply to 150851)

Nerses: How do DEDUST or STON.fi handle storage fees on their contracts? Who actually pays these fees? Do they deposit funds into the contracts specifically to cover storage fees, or are the stuck/unclaimed swap funds used for this purpose? Or maybe I’m misunderstanding how it works and there’s a better approach? Would appreciate any clarification!

Investor: I'm building NemexCoin – a pioneering TON-based Task-to-Earn (T2E) and wallet project focused on enabling easy Web3 access for non-crypto users. We're integrating a unique anti-rug pull mechanism to foster trust and security. Our backend is already progressing, and we're actively seeking a talented Frontend Developer to join us in a collaborative capacity to integrate key wallet components for our Telegram Mini-App:  * Wallet interface (Create/import)  * Token display (balance + USD value)  * Send/receive UI (TON + jetton) Experience with TON Connect, Web3, and mobile-first design is preferred. This is an early-stage opportunity where compensation will be token-based, with vesting tied to mutually agreed-upon project milestones. This ensures early contributors gain a significant stake in NemexCoin's shared success. If you're passionate about building for mass adoption on TON and are open to a collaborative, token-based model, please contact me directly on Telegram: @InvestorSirri"

Justice: I am well experienced and I am currently available (reply to 150859)

Tony: Hello, can I integrate stars payments on a website outside telegram?  And people can register with their telegram handle, then pay with stars?

Ruslan: Via bot only. But yes, basically the similar way as with OAuth (reply to 150862)

Ярослав: What exactly do you want to test? If that’s something like connecting wallet or sending a transaction, you can do it on main-net, if you get your wallet app opening with prompting you to make transaction you’re good, you don’t have to send a transaction to make sure that tonconnect works, but if you want to test tonconnect integration in whole flow that’s another question (reply to 150873)

Ярослав: Well in most cases you don’t need to use testnet with tonconnect unless you want to test actual transactions sending or calling some contract and don’t want to spend some funds paying fees (reply to 150875)

&rey: Choose testnet in the wallet app and do connection as usual. You will see -3 chain ID in tonConnectSDK.account, while -239 stands for mainnet. (reply to 150873)

&rey: Any console output, too? (reply to 150885)

&rey: Well it shouldn't be the reason because Tonkeeper uses another bridge. Have you tried connecting another wallet then? (reply to 150889)

Jason 🆙 UXUY $ETN: Hi guys how's everyone had a quick question if anybody can point me in the right direction to documentation if there's a possibility of capturing all transactions of a specific Jetton Master, meaning transactions that happened of that Jetton between various Jetton wallets without specifying the Jetton wallets via any API obviously it's easy to capture swaps from a dex but I meant all transactions that that coin has so whenever it's sent between users

&rey: Tonviewer does this IIRC, and you can see its data sources in the bottom right corner. (reply to 150897)

Ricardo: So im trying to dynamically get the blochain configuration parameter number 21, using strictly the ton core libraries, has anyone done this in JS?

Justice: I have done similar (reply to 150912)

Andersen: Hoping to ask questions related to the validator operation here, from what I understand ~2M ton is the maximum effective stake per validator currently.. Does this mean if I had say 100M TON I would need to run 50 separate validators? Do people run multiple isolated validators on one hardware deployment? as 50 separate deployments is just too much cost.

Ricardo: Do you have code example? (reply to 150920)

Justice: Not at the moment (reply to 150926)

&rey: We must hope that you do not do that; such centralization could bring down a shard if 1/3 of its validators failed. (reply to 150924)

Ricardo: In its defect, i need a dynamic way to load all of the blockchain's configuration parameters using ton/ton library

Andersen: man 2m ton per validator deployment is so low.. especially given the high specifications to run one..The ton earnings must be really high. (reply to 150928)

&rey: The underlying API call is https://toncenter.com/api/v2/#/get%20config/get_config_all_getConfigAll_get; I'm not sure if there is a ready wrapper function. (reply to 150929)

Ricardo: there doesn't seem to be a wrapper (reply to 150931)

— 2025-06-11 —

Hong Kyun: Fragment doesn't seem to work?

Hong Kyun: I tried different browsers, and cannot connect

Hong Kyun: Yeah, tried Dedust and it works fine, seems like there's a problem with Fragment

Folakemi: Hello, I am trying to connect ton wallet but it dosent work  Is there anything wrong with ton, I even tried ton telegram but I got an error of 500 How can I successfully integrate ton wallet connection at the front end?

&rey: Is the app manifest downloadable from Internet? (reply to 150975)

Folakemi: I think it is  But the extension Dosent work (reply to 150976)

&rey: And does it work if you connect the same wallet to an existing service (dns.ton.org, for instance)? (reply to 150977)

Folakemi: It didn’t work at all (reply to 150978)

Roj: Why can’t I send videos here? :(

Andersen: Hi everyone,  I’m currently working on a TON profitability calculator and would really appreciate a peer review from the community. While I’ve gone through a lot of the documentation, I’m still relatively new to the ecosystem, so any feedback or pull requests would be incredibly helpful.  My top priority is ensuring that the calculations are accurate and based on reliable data sources and protocol-level parameters.  You can find the project here: https://github.com/blueprint-infrastructure/TON  Thanks in advance!

Roj: Does anyone know why this is not working?

James: The issue I kept running into has to do with the "url" value in the tonconnect-manifest.json. I coud never get it to resolve by setting the value to my local machine. Not much help, but I would start looking there. (reply to 150997)

Roj: It’s unfortunately already a publicly accessible URL. (reply to 150998)

Roj: No, that didn’t work either.

James: I was able to get it to work using Vercel. Uploaded the project, then changed that value to the URL for the vercel app. (reply to 151001)

James: Might be something to do with connecting to Testnet instead of mainnet as well. After fighting with it for a while, I just started using mainnet to see if I could get it to work, and it did. (reply to 151001)

Zerox: Looks pretty interesting. Do you have any roadmap to extend the project? Or just plan to complete current script? (reply to 150996)

— 2025-06-12 —

L30n1d: Powerful calculator with clean, well-structured code — and everything is clearly commented. Great job! (reply to 150996)

Combot: Combot has warned ⸸ | ᴍᴏʀᴇɴ (1/3) Reason: Word ******* is not allowed

⸸ | ᴍᴏʀᴇɴ: I'm working on launching a token through a token generator platform, and I’m looking to build a reward distribution system that activates only after a small on-chain transaction is made.  Specifically, I'm looking to:  1. Enable users to receive tokens after sending a predefined transaction (acting like an access gate).   2. Configure the transaction amount and direct it to a custom destination address.   3. Decide whether to implement this entirely on-chain (via contract logic), or partially through frontend interaction.    I’d really appreciate code samples, advice, or shared experience from anyone who's done something similar.  Thanks a lot!

Andersen: Thanks for checking, Immediate goal is to confirm the accuracy and approach, as I feel the profitability is a bit optimistic, but at the same time I think I followed all the documentation. - Hoping to get some experienced eyes on it to expose anything I did wrong.  Next step on the roadmap is to research the leading validators and compare their earnings on chain to the estimations, then deploy some validators and monitor the results comparing them with the calculator, but id like to have more confidence before capital deployment. (reply to 151026)

Andersen: Thanks for taking a look, my hope is that its accurate (reply to 151029)

.: Hi ! Can anyone help me?)  Can smart contract use method of other smart contract ?  For example:  I want to use method "get_wallet_address" / "get_jetton_data" of jetton_minter in my smart contract on FunC  Is it really ?

&rey: Retrieving them from another contract is not possible due to strong tx isolation (transaction only touches one contract). (reply to 151052)

&rey: If you have master's code+data+address as cells, on the other hand, you can do RUNVM.

&rey: e.g. https://github.com/ProgramCrafter/tvm-quirks/blob/master/ok-jetton-wallet-onchain.fc

.: Oh, I saw this code, and it’s only available method to get Jetton Wallet Address ?  I want to get Jetton Wallet Address, but this system is so hard for me)) (reply to 151055)

&rey: are you familiar with concept of code modularity? (reply to 151057)

&rey: It abstracts complexity out, leaving you to call calc_my_jetton_wallet(master_addr, master_code, master_data).

&: Smart contract cannot run getty functions of other contract. (reply to 151052)

.: I know, I saw https://gist.github.com/ProgramCrafter/53fc3a4846397ee5f3f3b25ca3356ab5 but need I to get master_code and master_data, yes?  And in which format I need to use master_code and master_data? (reply to 151059)

&rey: yes, from Tonviewer or like. (reply to 151063)

&rey: cells, just like when you put them in StateInit. It is simpler if you handle them with TS and put into contract's data. (reply to 151063)

Nerses: what is the best approach to get number of Cells and bits of contract ? also is it possible to do on chain ?

&rey: This: https://docs.ton.org/v3/documentation/smart-contracts/func/docs/stdlib/#compute_data_size. It is easier to do onchain than offchain, but more expensive. (Offchain calculation obviously costs zero.) (reply to 151068)

Nerses: In case this info will be used for storage fee calculation isnt it optimal to do that on chain, as it will be calculated just once, or that data is dynamically changing in case of storing more and more data ? (reply to 151069)

&rey: Well IF (and only if) you store more and more data, then more data will be stored. Blockchain does not force contracts to pay for transaction history; in exchange, it does not guarantee that transaction history is preserved. (reply to 151070)

Nerses: I meant in storage fee calculation is used the size of code (the logic) or the whole data that currently in contract is stored ? (reply to 151071)

&rey: Whole data. Including balance and other metadata, that is. (reply to 151072)

Nerses: thanks for clarification. So what you think of using hardcoded storage fees like in some Jetton implementations.Are there any known issues on it ? (reply to 151073)

.: Sorry, I can't understand, how to convert hex of cell to cell ?  How to convert b5ee9c7201010c0100c400010300c0010201580203020120040502...... to cell for using .storeRef() ? (reply to 151065)

&rey: Cell.fromHex('b5ee...') (reply to 151076)

.: Thanks Do you know why this happened? calc_my_jetton_wallet in FunC return 0x19379...  It's code return 0x19379:  var get_jetton_wallet() method_id {     load_data();     return (calc_my_jetton_wallet(ctx_master_addr, ctx_master_code, ctx_master_data)); }  *The problem is not with the master code/cell (reply to 151077)

&rey: Do you have the contract deployed, so that it could be tested? (reply to 151079)

&rey: Is your load_data marked impure so it is not omitted?

.: Yes, testnet kQBXIrf9dLJsqiybkpdI8yGXJijrP7CW7dZJ77cko-oxqlyM (reply to 151080)

.: My methods: get_jetton_wallet, get_master_code, get_master_data   I used Impure for load_data (reply to 151082)

Дмитрий: Hello everyone! Please tell me if it is possible to somehow solve the problem that when opening the telegram wallet to confirm a transaction from my mini apps - the mini apps are minimized? returnStrategy does not work specifically on the TG desktop.   try {                    const result = await tonConnectUI.sendTransaction(transaction, {                        returnStrategy: 'https://t.me/.../....'                    });

&rey: I think @devs know more about TMAs. (reply to 151098)

Дмитрий: thx

JinX: Hi everyone, I would like to ask you for tones for the test, there is no telegram wallet, who is not difficult, please send it UQB526ofOMG_dklXqm_66bIJHRo1smF_m4AHqbbHc1Gkyh15

&rey: @testgiver_ton_bot does that. (reply to 151102)

JinX: They just give very little, I need more (reply to 151103)

&rey: So you have already tested in sandbox? (reply to 151104)

&rey: You can message @f_closer describing nature of your project. Alternatively, testnet TON are sold(sic) at tonconsole.com/.

Artem: Hi all! Does ton have a standardized way of introducing new changes to the chain like Ethereum does with EIPs? I've seen the TEPs repo, but it seems kind of incomplete with only some proposals being written. Also, it doesn't seem like the original infra left by the Telegram team long ago is documented properly either, for example I couldn't find specs for the Elector contract in any whitepaper PDFs or the proposals. How does the community and the TON Foundation manage to work on the project without an actualized spec of the network? 😅

&rey: I have heard TON Studio has internal documentation and test harness. Something may also be in audit reports for those fundamental smart contracts. (reply to 151108)

Artem: True, Certik's report and article do have some info about the elector contract, but I mentioned it just as an example. Would I be right to assume then that the chain development is mostly discussed within the TON Foundation itself, as well as github issues and tonresear.ch? Meaning there isn't a properly formalized mechanism being used for publishing upgrade specs etc (reply to 151109)

BizX: Hey, are you looking for dev? (reply to 149045)

Ricardo: Hey guys, im getting:  Error: grams overflow  when calling emulateMessageToWallet using '@ton-api/client' dependency, what does that mean?

&rey: It means that the API you're connecting to went crazy. It will be fixed shortly.  Will I be right to assume that you query testnet? (reply to 151114)

Ricardo: problem solved, thank you (reply to 151116)

Ricardo: On another note, How likely is it that TON blockchain will change its configuration parameter number 21? what would it take to make such a change?

Ricardo: I have been trying to dynamically fetch the configuration parameter number 21 that dictates computation costs, i know i can do it with @ton-api/client, but i cant use that client, i can only use TonClient from @ton/ton npm package. Also how is this parameter stored in the blockchain? is it like a contract address?

&rey: Probably yet another order of magnitude of adopters, or TON going much up. So it is likely to happen at some moment but not in near future. (reply to 151119)

&rey: in The Config fundamental smart contract. (reply to 151120)

— 2025-06-13 —

Nerses: Is supposed to get same return result for functions getStorageFee  and myStorageDue ? I have tested in sandbox with this simple code     get fun calcStorageFees(): Int{         let data: DataSize = myCode().computeDataSize(self.MAX_INT);         return getStorageFee(data.cells,data.bits,now() - self.LAST_TX,self.IS_MASTERCHAIN);     }      get fun calcStorageFees2(): Int {         return myStorageDue();     } but they give different results, for some cases myStorageDue returns 0. Is that ok, or I am missing smth ?

M$L: Hi,who will promote my telegram channel?

Алексей Ковалёв: For money only) (reply to 151157)

.: Hi ! Do anyone know, Which is format of address here (for testnet)?  I use ide-ton-org

&rey: This is raw address. It does not distinguish between testnet and mainnet. (reply to 151159)

.: Need I use raw address or standard format ?   I created simple smart contract on Tact for Jetton Transfer and code created wrong Jetton wallet address, I think that problem in my master address (reply to 151161)

L30n1d: For what? (reply to 151162)

.: The web IDE asked me for the address for StateInit, In what format should I send it? I used to use ts for StateInit, but now the site does not allow me to deploy unless I specify something in the field. (reply to 151163)

Ro: Is it possible to retrieve current API request usage statistics for tokens from TONCenter and TONConsole.com? Are there any unofficial APIs or alternative methods available for this? I'm looking for programmatic access to this usage data.

Waterso: Hi, do anyone know about how protocols like STON.fi, DeDust.io, or other service handle transaction syncing.  - Use public APIs like getTransactions from toncenter or TONAPI? - Run their own indexer synced from public liteservers? - Run their own liteserver?  What’s generally recommended for syncing transactions in production environments.

&rey: You mean the DEX part? It is inside the chain itself, binding validators to run the protocols. (reply to 151177)

Waterso: I mean the off-chain infrastructure used by them.  To improve user experience, I assume they don’t rely only on calling get method. For example, they provide APIs (some even GraphQL) and offer stats and analytics features.  I’m curious how they sync all this data from the chain in production environments. (reply to 151179)

&rey: Probably their own liteservers. (reply to 151182)

Waterso: That makes sense. 👍 Thank u. (reply to 151183)

atlge: Hello! I'm developing a Telegram Mini App + web app for TON called AXUS Protocol — it's a pawn system that accepts any TON-based tokens as collateral.  We’re already listed on TON App and use TonConnect + Jettons.   I'm building solo and looking for the correct way to apply for Champion Grants (or similar ecosystem-level support).    Could someone from the TON team point me in the right direction?  Thanks!

JOSS¥D££••: That's awesome (reply to 151187)

Artem: Is it possible to get a PDF of the Phase 1 audit by Certik mentioned in the governance contracts repo here? https://github.com/ton-blockchain/governance-contract  As far as I understood the Phase 2 issues are from the formal verification report, a PDF of which is available here https://docs.ton.org/v3/concepts/dive-into-ton/ton-blockchain/security-measures, but the Phase 1 report is missing

Artem: The config and elector contracts are mentioned in the TON bug bounty but it'd be pretty hard to work on them considering that there are two different versions of each. From what I gathered the new versions were written based on the comments from the Phase 1 audit, which doesn't seem to be published anywhere. Trying to report anything related to these contracts would probably be closed as N/A since it has already been reported in Certik's audit :P  https://github.com/ton-blockchain/bug-bounty

— 2025-06-14 —

Adam: Hi, if anyone need a contract developer in ton contact me

Valeriaaa: Sorry for asking is this NOT COIN reality

&rey: Notcoin, uniquely identified as EQAvlWFDxGF2lXm67y4yzC17wYKD9A0guwPkMs1gOsM__NOT jetton and its project, exists indeed. This chat is not about it though. (reply to 151213)

&rey: This chat is about development on TON.

Combot: Combot has warned Alexander Blagovestnov (2/3) Reason: Word **** is not allowed

Alexander: 🚀 Exciting Announcement: TGUI Angular Library for Telegram Web Apps  Hello TON developers! I'm excited to share that I've created TGUI Angular - a comprehensive UI component library specifically designed for building Telegram Web Apps with Angular.

Alexander: 🔍 You can explore it through: - NPM: https://www.npmjs.com/package/tgui-angular - Documentation: https://ablagovestnov.github.io/tgui-angular - Demo Project: https://ablagovestnov.github.io/tgui-demo - Demo Web App: https://t.me/tgui_demo_bot/tgui_demo - Library Repository: https://github.com/ablagovestnov/tgui-angular

Alexander: 📦 The library is in an advanced stage of development and is currently undergoing testing. It's being developed as part of the TON Society bounty program (https://github.com/ton-society/grants-and-bounties/issues/606)

Alexander: I'm committed to making this a valuable tool for the TON ecosystem and would be honored to contribute to the TON Society's Hall of Fame through this project.  Contact me: - Telegram: @ablagovestnov - Email: a.blagovestnov@gmail.com - GitHub: @ablagovestnov

AGT: What's wrong with being unable to enter in tonutils-reverse-proxy-windows-x64.exe?

&rey: What's the error, then? (reply to 151251)

— 2025-06-15 —

AGT: I seem to need this when trying to bind my website to a TON domain, but I find that I cannot type in the Tonutils reverse proxy to complete the command. (reply to 151256)

&rey: So have you downloaded or compiled it? (reply to 151267)

AGT: I just downloaded this file tonutils-reverse-proxy-windows-x64.exe (reply to 151268)

&rey: Have you put it in PATH or navigated to the directory where this file is located? (reply to 151269)

AGT: no

AGT: Does this document mean that I can use a TON domain name in a traditional website?

&rey: Then, so that your system recognizes the executable file you are launching, you should do either of those options. (reply to 151271)

&rey: A very careful wording is needed here.  You can launch an application, the "reverse proxy" to be precise, which will serve your existing website under TON domain, and then anyone with "forward" TON proxy will be able to access it. (reply to 151272)

Teers k 🐾: Why do hell i sent him a ton even if he has no access to my seed phrase

&rey: Are you familiar with "bounce" phenomenon? (reply to 151315)

Ion: Hi guys, I have a Ethereum (ETH) in TON chain network and I want to withdraw it. Bybit support says that this token is high-risk token that is why it does not allow me to successfully swap it. Does anyone of you have any idea how can I get to finally swap it?

&rey: Most probably you have a scam token and not ETH? (reply to 151319)

Teers k 🐾: To send a transaction, is it enough to generate a signed BOC and send it via RPC?

Ion: It may be, but still want to know if there is a solution to this. Binance shows "no liquidity available" (reply to 151320)

&rey: Yes. You should watch that it is not accidentally ignored tho. (reply to 151321)

&rey: If so, that jetton might be worth zero indeed. (reply to 151322)

Teers k 🐾: It works i guess (reply to 151323)

Teers k 🐾: Not as i excepted. That same 24 phrase shows different addresses in tongo and in tonkeeper (reply to 151330)

&rey: So do you have same wallet version and same subwallet ID? (reply to 151331)

Teers k 🐾: Different wallet versions have different addresses even with same mnemonic phrases? (reply to 151335)

&rey: Yes! (reply to 151336)

— 2025-06-16 —

Teers k 🐾: Tact is new language better than funC?

Eren: Hi guys, I have something to ask.  Do u know If I build a miniapp and use both EVM and TON integrations into it be okay?  I remember I read something that telegram restricted another blockchains in its ecosystem something. Is it real?

L30n1d: Enhanced readability and structured (reply to 151357)

Azim: I have the same question if anyone could help (reply to 151358)

TON Bounty Bridge: 📊 Update Digest!  🔍 Active bounties: 16 ✅ Approved bounties: 0 🔄 Bounties seeking suggestions: 75  📣 We value your feedback! Join the community discussion and participate in shaping the future. Click the 'Create Your Own Bounty' button to get started.  Happy contributing!

&rey: Apparently it will not be OK. (reply to 151358)

Лёва: I'm trying to send transactions programmatically. Do I have to wait until a transaction completes to be able to send the next one? I get this message: cannot apply external message to current state : External message was not accepted\nCannot run message on account: inbound external message rejected by account ABCDEF before smart-contract execution

Teers k 🐾: Is there any official roadmap which i can follow to learn ton, sdk, building contracts and wallet connection and etc?

.: Hi ! Can anyone help me?)  Why isn't coding working ?  Jetton wallet returned me "Cell underflow"           cell body = begin_cell()             .store_uint(0x0f8a7ea5, 32)             .store_uint(0, 64)             .store_coins(coins_to_buy)             .store_slice(sender_address)             .store_slice(sender_address)             .store_uint(0, 0)             .store_coins(0)             .store_uint(0, 0)             .end_cell();         cell msg = begin_cell()             .store_uint(0x18, 6) ;; flags             .store_slice(ctx_wallet_jetton)              .store_coins(100000000)             .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1 + 1)             .store_ref(body)         .end_cell();         send_raw_message(msg,3);

.: I tried to send jettons with func smart contract Transaction: https://tonviewer.com/transaction/531d4326ce97561f8874170209e383bb4dcd5cd73079e7d8b72cfe8330fd092e (reply to 151389)

&rey: ...     .store_slice(sender_address)     .store_uint(0, 1).store_coins(0).store_uint(0, 1)     ;; or fold the above constants into (0,6)     .end_cell(); ...     .store_uint(1, 107)     .store_ref(body) (reply to 151389)

— 2025-06-17 —

This photo: Tryna explore quick start on ton org (reply to 151377)

Ammar: Hello my friends, I have created a token on TON using a token generator website, but the image and name are not showing up in the wallet. Can anyone help me? I have no experience in programming or GitHub.

User: Can you share your token address? (reply to 151426)

Ammar: Of course (reply to 151427)

Ammar: EQDPo62Pq1a_yem4hPzBgAK48AJjPvxNAYHmTkMINfRMwZJs (reply to 151427)

User: Can you send me please tool, where you have created this token

Teers k 🐾: use minter.ton.org (reply to 151426)

Teers k 🐾: It's official jetton minter you can start here and later deploy with code (reply to 151439)

Teers k 🐾: Are they stupid or something else? Technical support for what, learning Blockchain?

Виконт vangaard: The scammers are getting desperate (reply to 151455)

S: hey, folks. I have some problem with jetton content. Confirm jetton name, description, image is working properly with json format like this. {   "name": "AAA",   "description": "AAA",   "symbol": "AAA",   "decimals": 9,   "image": "https://", } but tried to add social links and websites etc, but wasn't working well. what is the json format for adding social links and the others. tried with this but didn't work. {   "name": "AAA",   "description": "AAA ",   "symbol": "AAACT",   "decimals": 9,   "image": "https://",   "social": [     "https://",     "https://",     "https://t.me/"   ],   "websites": ["https://b.xyz"] }

S: hey, first your msg got ref so you need to update it with .store_uint(1, 107) and why body got unnecessary double store_uint(0, 0)? i think they are not useless in your msg_body. don't you? and is there any send message mode 3? there is only 0,1,2,32,64,128. need to change it. (reply to 151389)

— 2025-06-18 —

&rey: I would recommend not to give out advice sloppily, especially on a question already answered.  As for send mode 3, it is 1|2 (SendPayFwdFeesSeparately | SendIgnoreErrors). (reply to 151469)

Kiki | Security Researcher: Is there an effective way to clone contracts that have been deployed? On EVM there is forge clone which allows me to pull down all contract code of a gien address.

S: oops. I didn't see the answer. (reply to 151471)

S: is there any body who can help me? (reply to 151467)

Adam: With? (reply to 151484)

S: this one pls. (reply to 151467)

Adam: Social with s (reply to 151467)

S: yeah, how can I add social links to jetton master content

Adam: {   "address": "0:aaaabbbbccccddddeeeeffff0000111122223333444455556666777788889999",   "name": "Example Token",   "symbol": "EXM",   "decimals": "9",   "image": "https://example.com/logo.png",   "description": "cccaaa - This is a placeholder token used for demonstration purposes. It follows the Jetton metadata standard on TON.",   "social": [     "https://t.me/examplechannel",     "https://twitter.com/exampletoken"   ],   "websites": [     "https://www.exampletoken.com"   ] }

Adam: Like this format (reply to 151490)

Jason 🆙 UXUY $ETN: Yeah I've seen that but what if I want specifically only jettons and a specific jetton master (reply to 150903)

S: thx, bro. but as you know we can't add address manually to the jetton minter content itself. well, this is what a jetton contract shows on tonviewer or tonscanner etc. what I want to know is how to create a jetton contract with content which has social links and the other infos. (reply to 151491)

0xAnthony: Did you upload jetton content to on-chain or off-chain? (reply to 151493)

S: offchain (reply to 151494)

Adam: just dont add address (reply to 151493)

Adam: {   "name": "Example Token",   "symbol": "EXM",   "decimals": "9",   "image": "https://example.com/logo.png",   "description": "cccaaa - This is a placeholder token used for demonstration purposes. It follows the Jetton metadata standard on TON.",   "social": [     "https://t.me/examplechannel",     "https://twitter.com/exampletoken"   ],   "websites": [     "https://www.exampletoken.com"   ] }

S: thx, but as you can see, i have tried with you way but it didn't work

0xAnthony: what I have experienced, when save offchain, can't see metadata anytime. you can try onchain (reply to 151495)

Adam: what's the issue

S: I have tried but it didn't work. i will share my jetton contract address. https://tonviewer.com/EQBuv0xsmtzTbPZevlEjpfzJjiti_Sq7C-y0j1JJOZ_hASut this is what i have deployed with the json format you quoted above. but the social and websites are not appeared to jetton metadata (reply to 151497)

Adam: you can show me where you uploaded the json?

S: sure

&rey: Call getAddressInformation or similar API on them. All contract's code will be contained there, due to strong tx isolation (a single tx uses data of one contract only). (reply to 151480)

S: hey, bro, can you help me? (reply to 151506)

0xAnthony: He is not bro, He is admin, pls respect him (reply to 151507)

S: oops, sorry. (reply to 151508)

&rey: Isn't that "social_links": [...]? (reply to 151467)

S: thx, but tried with social_links but still don't appear as social links. i will share json file and jetton contract. {   "name": "AAA",   "symbol": "CCC",   "image": "___.jpg",   "description": "BBBlaskdjlkjaslkjl asjldkjasfjlsakdf",   "social_links": {     "telegram": "t.me/yourtelegram",     "twitter": "twitter.com/yourtwitter",     "websites": "lasdfjlksdfj.com"   } } address: EQANJr8pPBDQJgYiCHBTdCMM0czcYlamKDUX_MZO0C1VyGcH (reply to 151512)

Leo: the social_links attribute is for NFTs, not jettons

0xAnthony: I don't think so. {   "address": "0:59fdc69f3f20ebe4a513b3468dc61d194c3864a4464e3662c903648d1a52e6e0",   "name": "Resistance Dog",   "symbol": "REDO",   "decimals": "9",   "image": "https://raw.githubusercontent.com/Resistance-Dog/resistance-dog/main/resistance-dog.webp",   "description": "Pavel Durov Founder Of The Digital Resitance Dog - $REDO is a meme coin on the TON Blockchain. https://t.me/RedoTON",   "social": [     "https://t.me/redoton",     "https://twitter.com/redoonton"   ],   "websites": [     "https://www.redoton.com/"   ] } (reply to 151522)

Leo: be aware that it's social in your example (reply to 151524)

0xAnthony: yeah true I misunderstood your words :) (reply to 151525)

S: same here. (reply to 151525)

S: but as you can see on tonscan on tonviewer, we can add social links to a jetton contract.

S: but how?

0xAnthony: I said try onchain, not offchain (reply to 151530)

S: but there is no metadata attribute like social onchain.

S: i think we need to set social links on offchain.

Leo: verify on https://github.com/tonkeeper/ton-assets (reply to 151530)

S: let's check related to Kirby token. address is EQBfXRfeutTL-mcVJD4tQfRWC1AHRj9QRJCliZE_62n_8WJj well, on tonscan we can confirm that it's metadata is saved on onchain. but we can't see the social links there. but on tonviewer we can see it has social links as it's metadata. what this tells us? I will share you those links. https://tonscan.org/jetton/EQBfXRfeutTL-mcVJD4tQfRWC1AHRj9QRJCliZE_62n_8WJj https://tonviewer.com/EQBfXRfeutTL-mcVJD4tQfRWC1AHRj9QRJCliZE_62n_8WJj

Nerses: Has anyone recently succeeded to verify contract ? I am getting the error in image.Informed in ton verifier chat but there wasnt any response

Red: Does the JS sdk have methods to get all nft collections and nft transactions?

— 2025-06-19 —

&rey: That social links on jettons are not standard and therefore supported by some explorers only. (reply to 151535)

Olimpio⚡⋈: Did they ever respond to this? (reply to 102592)

Eren: Do u guys know how to make multisend TON in the cheapest way ?

Jimmy: Another china lol (reply to 151581)

Jimmy: Use coinfactory (reply to 151594)

Jimmy: This better thing that i found

Eren: I’ll check it out, thanks Jimmy (reply to 151598)

Jimmy: Np (reply to 151599)

&rey: Please check out https://github.com/pyAndr3w/ton-preprocessed-wallet-v2/tree/main. It's very much cheaper than alternatives, moving most validation off chain – only signature+seqno validation remains. (reply to 151594)

Eren: Thanks (reply to 151601)

jack ma: how to access v5 wallet ?  TonWeb.Wallets.all.v4R2; ?

Combot: Combot has warned Novikov Kirill (2/3) Reason: Word **** is not allowed

Matthew: Any Africa based TON smart contract DEV here?   If so pls DM me I have a few projects that may need based on skill level etc

&rey: It is not supported. TonWeb, I mean. (reply to 151605)

Ammar: I have created a token on TON for the first time, but the name and image do not appear, and I can't even add liquidity to the token. Is there a tutorial video explaining how to add these things on GitHub? This is my first time using GitHub. I would be very grateful if someone could do it for me.

Albert: Ping me I will help (reply to 151622)

Albert: Connect with me. (reply to 151617)

Matthew: @AlbertDeve

Albert: Yes (reply to 151632)

Matthew: Is TON Dev working on a jetton protocol for issuance of securities and central bank issued bonds?    Similar to ERC 7092 or Hedera above

Ammar: I sent it to you. (reply to 151628)

&: Dm me (reply to 151617)

Teers k 🐾: Do i get in jail if i develop something in ton where is crypto are illegal?

Willy: You tell us  How do we know what the law is in your country;) (reply to 151647)

— 2025-06-20 —

professor x: Ask chatgpt about that...also specify your country (reply to 151647)

Combot: Combot has warned 六句迷人诗 (1/3) Reason: 1 reports (reply to 151666)

Teers k 🐾: It says you go to jail if you don't pay two and half million dollars for licence (reply to 151665)

Michael: Hi all, getting following timeout frequently, is it ok?  : "500, message='lookup tc-node-01.toncenter.local: i/o timeout', url='https://toncenter.com/api/v3/runGetMethod'"

Willy: Pretty obvious then, huh? (reply to 151673)

L30n1d: Hi! I was blocked in the TON Tact Language Chat after sharing a code example — most likely due to a bot error. Could you please help me get unbanned?

Jimmy: Nope. Hahaha (reply to 151690)

L30n1d: Already whitelisted, thanks (reply to 151692)

Jimmy: Why i cant tag rey?

&rey: Hi that's Combot's moderation style. (reply to 151695)

Jimmy: Strange bot. Btw thanks for answer (bad eng) (reply to 151696)

Hamid: Hi can some one tell me ton payment integration

&rey: Starts here. https://docs.ton.org/v3/guidelines/ton-connect/guidelines/how-ton-connect-works (reply to 151708)

Hamid: i can set up ton payments but the rpc endpoint is not setting up can without it it is secure or anyone can hack it

Hamid: please any one answer

&rey: Well you should query liteservers, even if public ones. (reply to 151711)

&rey: They provide proofs that data they send corresponds to the actual chain state.

Hamid: I am not understanding this one

&rey: So what do you use for server's side?

Emirhan: Hey guys! I'm having this error once try to connect my TON wallet with ui-react package.

Emirhan: but my manifest file looks valid

&rey: and is it loading from website successfully? (reply to 151720)

Emirhan: yeah, this one worked. privacy and terms must be a .txt file i guess

Hamid: The file has to be in right place

Emirhan: it's in public folder for sure (reply to 151723)

Hamid: Is PNG accessable from PNG link

Hamid: It has to be a real PNG image and accessable

Emirhan: it was

Emirhan: everything

Emirhan: my message are getting deleted, why

Hamid: Is it a JSON file

Emirhan: for sure man

Hamid: Remove terms of use and privacy policy url for now

&rey: Do not hit rate limit and it will be better. (reply to 151735)

Eren: Have you checked all the URLs one by one? If they all work, try to deploy again. Your manifest file looks alright (reply to 151722)

Ammar: "After creating a token using the TON Minter tool, can I add liquidity directly or not? I had previously created a token using another tool (I don’t remember its name), but until now I haven’t been able to add liquidity, even though I added the token data to Jetton. That was my first time."

— 2025-06-21 —

&rey: Do you know what "adding liquidity" means on a lower level? (reply to 151753)

Ammar: Yes (reply to 151755)

&rey: So you know which ~two projects on TON handle "adding liquidity". (reply to 151756)

Ammar: It seems that I used an unofficial tool. I will use an official one and try again. (reply to 151755)

Ammar: Stone fi  And de dust (reply to 151757)

&rey: https://minter.ton.org is official for creating jettons of a standard template — that is, with no features or builtin utility. (reply to 151758)

Ammar: Can I add liquidity after creation? I don’t need to do anything on GitHub, right? Because I’m honestly tired of it, haha. (reply to 151760)

&rey: 1. Obviously yes. I'd even say that you cannot create any liquidity pools nor add anything before creation (if you're not using something something presale which handles all of that automatically). (reply to 151761)

&rey: 2. To my knowledge, creating liquidity pool is trustless, can just be done on ston.fi / dedust.io. Does that fail for you?

Ammar: Thank you so much, my brother. You really helped me a lot — I've been searching for a solution for days.

Zin Gyi: 可以有实力 (reply to 37)

Zin Gyi: 抢了这么多？ (reply to 37)

Zin Gyi: 抢了这么多？ (reply to 37)

shunz: 你好 👋

Zin Gyi: 可以有实力 (reply to 37)

Zin Gyi: 抢了这么多？ (reply to 37)

Zin Gyi: 可以有实力 (reply to 37)

Zin Gyi: 抢了这么多？ (reply to 37)

Zin Gyi: 抢了这么多？ (reply to 37)

Zin Gyi: 可以有实力 (reply to 37)

Zin Gyi: 抢了这么多？ (reply to 37)

WATS: 1 test tone is needed  UQC_hYu2RoYu3MCgcPQtGTuba70Y5hva9PFDy279co7r89OC

Андрей: @testgiver_ton_bot (reply to 151789)

Teers k 🐾: It's not testnet address (reply to 151789)

WATS: 0QCuO4ND5iUssJYFnFHRgFgSY2lzj2MboOKJ6g5QIySPKkHp (reply to 151791)

Teers k 🐾: https://t.me/tondev_eng/151790 (reply to 151792)

Ammar: Hello TON team,  I recently created a token on TON using the official TON Minter tool. Everything works fine and the token is visible on-chain, but I couldn’t find any option to add my project's Telegram link or social media information.  Is there a way to add a Telegram link or update metadata for my token after creation?  Here is the token address: EQBXTMbijDs-ycbzdn2AS2EHGUor_a4ioTI9vknroTFHkwfo  I’d really appreciate your guidance on how to do this officially.  Thank you!

Leo: verify the token on github/tonkeeper/ton-assets

Ammar: Alright, I’ll give it a try. This is my first experience, so I’ll keep bothering you until I learn. (reply to 151803)

Ammar: What’s the next step? 😅 (reply to 151803)

Leo: I mean.. github.com/tonkeeper/ton-assets

Leo: follow the instructions to make a pr

Teers k 🐾: One more question, technically i can create a lot of hundred or thousands wallets with one 24 phrase or nah? (reply to 151337)

Teers k 🐾: If i deploy custom wallet contracts which changes address

&rey: subwallet IDs. You will have a bad time trying to import such into wallet apps, but scripts will work fine. (reply to 151808)

&rey: A contract does not ever move to another address. (reply to 151809)

&rey: how would it help with changing metadata? (reply to 151803)

Leo: adding social links to it makes tonviewer to show them (reply to 151813)

Ammar: I've been trying since yesterday, guys, but I can't add the social media links to my token. I just want to add the Telegram at least. Is there any admin who can do it for me? I would be very grateful.

&rey: No one except you has authority over jetton you have created. (reply to 151820)

Ammar: I don't know how to add a Telegram link to the token. Can you explain it to me? I'm not a programmer. (reply to 151827)

Hamid: Add it in token metadata or project description

Ammar: I’m working from my phone, that’s the problem. (reply to 151829)

CrazyIsland: hi guys, i try to get address state via tonlib-cli ( test network ) but get the following error all the time : getstate EQD1uarAfXKFUZ21JYbTl08lJyJmUH62cONDNsMaxDSJ1Nu_ ←[1;32m[ 3][t 3][2025-06-21 21:35:16.4439501][ext-client.cpp:175][!ExtClient]   Connecting to liteserver #7 (69.67.151.218:35939) for query [ getBlockProof (-1,8000000000000000) ] ←[0mQuery {getstate EQD1uarAfXKFUZ21JYbTl08lJyJmUH62cONDNsMaxDSJ1Nu_} FAILED:         [Error : 500 : LITE_SERVER_NETWORKtimeout for adnl query query(during last block synchronization)] ←[1;32m[ 3][t 3][2025-06-21 21:35:26.4478330][ext-client.cpp:81][!ExtClient]    Force resetting all liteservers ←[0m is anybody know how to fix it? Thanks

Hamid: set testnet=true

— 2025-06-22 —

Combot: Combot has warned 你最倾城* (1/3) Reason: 1 reports (reply to 151860)

— 2025-06-23 —

Combot: Hello Dawin! Click on the button below so that we understand that you are not a bot who came to tell us about how Durov is giving away bitcoins as a gift.

Олег: Hey guys, has anyone here worked with merkle trees on TON? I need to understand the difference from EVM ones.

0xAnthony: it's on opensource. pls check ton community public repo (reply to 151936)

TON Bounty Bridge: 📊 Update Digest!  🔍 Active bounties: 16 ✅ Approved bounties: 0 🔄 Bounties seeking suggestions: 74  📣 We value your feedback! Join the community discussion and participate in shaping the future. Click the 'Create Your Own Bounty' button to get started.  Happy contributing!

&rey: Please move to @devs, this chat is not related to your problem in any way. (reply to 151952)

🤔: Hello guys! I faced such a problem with ton dns. Website says domen is taken and also says it was expired at the same time. So how can i purchase it?

NPA120: You can purchase it from auction site (reply to 151975)

&rey: As an aside. That's, in fact, true; owner can still remember about it and renew for a year (reply to 151975)

🤔: So I cant buy it now? Then, what’s real period of rent? More than 365 days?

&rey: You can, like in https://t.me/tondev_eng/71518 — substitute your parameters instead. (reply to 151979)

🤔: Tysm (reply to 151980)

— 2025-06-24 —

praxis: Hi team, I face this problem during the whole time of working with the indexer, regularly once a day/two days, the worker just hangs on one value and in this state it will stay exactly until I do not restart it, whether it is a week/month.

Lase: hello guys. just starting out here 😊.  When I created a Telegram wallet on Tonkeeper... i get a W5 account. Documentation even advised working with WalletVersion5. But using verson4 gives me the correct and matching address whilst version 5 doesn't.     const mnemonic =     "...";   const key = await mnemonicToWalletKey(mnemonic.split(" "));   const wallet = WalletContractV4.create({ publicKey: key.publicKey, workchain: 0 });   const wallet2 = WalletContractV5R1.create({ publicKey: key.publicKey, workchain: 0 });     // print wallet address    console.log(wallet.address.toString({ testOnly: true, bounceable: false }));  //found on tonscan   console.log(wallet2.address.toString({ testOnly: true, bounceable: false })); //not found on tonscan and doesn't match my current tonkeeper address

Aman Aman: Any experience token developers here?

NPA120: on Ton? (reply to 152005)

Aman Aman: Should’ve clarified, pump-fun token developers

NPA120: Dm  me (reply to 152008)

Freezy: Dm (reply to 152008)

Ice: GM everyone.

Ice: How do I get ton faucets? The ones I've tried so far hasn't yield any results.

&rey: Use @testgiver_ton_bot, it is kinda the faucet. (reply to 152020)

Ice: Alright thanks. (reply to 152022)

Nerses: Building a cross-chain Jetton swap on TON that parses TokenNotification for intent—how can I ensure notifications only come with real Jetton transfers and block spam? Is there a more reliable deposit pattern?

Rudro: Subject: Request Refund for Rejected Ad (20 TON)  Hello Telegram Ads Team,  I deposited 20 TON and submitted an ad. However, after review, the ad was rejected, and no TON has been used for impressions.  As the funds were not spent, I kindly request a refund or re-credit of the 20 TON to my Telegram Ads account.  Payment: Ref#j57EGXVbF  Recipient address:UQBeab7D38RIwypegbN7YZgQzwDbb8QfMMwY8ouJc3qPl4CJ  Account id : ACC125101 Ton Wallet address:UQCxLSmujUZbQhiMg_BhVpQTI7-Kr0NW1yCXs2ScRcJNQ2FI  Thank you for your support.

L30n1d: You need to make a white list of jetton wallet addresses for your contract (reply to 152038)

Nerses: Isn't there better approach ? (reply to 152055)

ARCH | Basti: hey guys, can you help me, I got an api key from the toncenter bot, however when I try to deploy from the jetton-contract repo I get 401, api key does not exists

Teers k 🐾: I guess it's not telegram ads team chat and there is low chance there is any of tg ad agent is there (reply to 152054)

Teers k 🐾: Make sure that you writed api key perfectly and request is going fully. Or just do request manually without programming like curl (reply to 152058)

Igor: Those agents don’t even exist to begin with ) (reply to 152060)

&rey: Does not have anything to do with this chat. (reply to 152054)

ARCH | Basti: I'm just using blueprint instructions:  npx blueprint run --custom <rpc_endpoint> --custom-version v2 --custom-type testnet --custom-key <API_KEY>

ARCH | Basti: the api key I generated is for testnet..

ARCH | Basti: I also pasted the api key in the existing openapi docs for json rpc v2 and got the same error

pictro: I'm looking for a partner to work with. (🥇Please don't have any Ukraine connections, and please connect me with a lot of people who know a bit about code.) What I'm offering is a partnership where I handle all my work and client communication through an Upwork account that I open in your name. You don't have to manage or hire anyone. Just provide me with a verified account and I'll handle the rest.  In return, you get a percentage of the revenue without having to directly participate in the project itself. It's kind of like passive income.  I totally understand if you don't want to do this, but I wanted to make this clear in case things change. Please DM me in any way you can. Thanks so much for your time!  Thank you.

— 2025-06-25 —

DeFi: Why can't you have your own UpWork account? This just sounds like you want to use someone else's identity to scam people (reply to 152075)

Roj: You are talking to a frozen account. (reply to 152076)

我不上你的当: 死胖子真猛 (reply to 10)

草长莺飞: 这个小姨子好美 (reply to 9)

Combot: Combot has warned 草长莺飞 (1/3) Reason: 1 reports (reply to 152081)

Andrii: @admin

pictro: what is it??? (reply to 152080)

pictro: It looks so smooth, why did you upload something like this? (reply to 152080)

我不上你的当: 这个视频太畜生了 (reply to 7)

草长莺飞: 同学会太乱了 (reply to 8)

我不上你的当: 同学会太乱了 (reply to 8)

草长莺飞: 死胖子真猛 (reply to 10)

草长莺飞: 这个小姨子好美 (reply to 9)

草长莺飞: 死胖子真猛 (reply to 10)

我不上你的当: 同学会太乱了 (reply to 8)

我不上你的当: 这个视频太畜生了 (reply to 7)

草长莺飞: 死胖子真猛 (reply to 10)

pictro: I never thought of that... My account got blocked... Some bad guy said something he shouldn't have said in the conversation and got blocked.. But I have to work... So I have no choice but to use someone else's account and pay every month. (reply to 152076)

DeFi: Ok well anyone who accepts your offer is stupid for doing so. They will have all the liability and zero benefit. They will have to pay taxes on your earnings. (reply to 152099)

我不上你的当: 死胖子真猛 (reply to 10)

pictro: Of course I know this is hard work.. but I have to do it. And I don't do crooks... (reply to 152100)

DeFi: You're completely missing my points (reply to 152102)

pictro: I just need to submit the account usage fee... If you guarantee the conditions well and are friendly, I can pay more.. I don't want to work with a difficult person like you.. (reply to 152103)

草长莺飞: 这个小姨子好美 (reply to 9)

DeFi: Still completely missing the point. What about taxes? What about liability? (reply to 152104)

pictro: That's not for me to worry about... that's up to the person lending me their account... (reply to 152106)

DeFi: Exactly, so then what percentage are you offering someone to take on the tax liability, criminal liability if you scam people, etc.? (reply to 152107)

pictro: First of all, you have to follow the rules... Secondly, it's not for me to think about. (reply to 152108)

DeFi: You are the one required to follow the rules. If you scam someone, that falls on the account owner, not you.  So let's say I give you an account to work under... if my tax rate is 45% with state and federal income taxes, and then I'm also going to be liable if you scam people or don't finish jobs, how much of the revenue percentage are you going to give me? (reply to 152109)

pictro: If you can provide me with a good working environment and be friendly and approach me as a friend, I will be happy to help you... (reply to 152110)

DeFi: Why aren't you answering the question? It's very specific.

我不上你的当: 死胖子真猛 (reply to 10)

草长莺飞: 这个小姨子好美 (reply to 9)

pictro: It depends on your actions... Of course I can compensate you for it... Depending on your attitude... (reply to 152112)

DeFi: Answer the question. What percentage are you willing to give the account holder who loans you their account?!?!? (reply to 152115)

pictro: oh,mmm 25% (reply to 152116)

DeFi: lol that doesn't even cover taxes dude (reply to 152117)

Lase: help is needed (reply to 151999)

S: const key = await mnemonicToWalletKey(mnemonic); const wallet5 = WalletContractV5R1.create({     publicKey: key.publicKey,     workchain: 0,   }); const walletContract = client.open(wallet5);  await walletContract.sendTransfer({}); hey, not sure. this is my code using wallet contract v5. maybe you can check your wallet version is V5. (reply to 152154)

Lase: Thanks (reply to 152174)

S: yw. (reply to 152175)

&rey: There is no such thing as "Telegram Wallet on Tonkeeper". (reply to 151999)

Lase: Sorry, ton wallet account (reply to 152178)

&rey: Then, you should check version + settings. Also, if there were funds on v4, TK detects that and uses it first. (reply to 152180)

Lase: Everything works for v5 perfectly (reply to 152181)

Lase: But they said beginners should start from v5, which is what i am doing

Lase: I used different mnemonic . But would get a different address for w5 compared wot whats on tonkeeper

Lase: I would try out all the advices and give a report. Thank you all😍👋

Carlos: Hi, why am i getting this on toncenter api, my api really exists  {   "ok": false,   "error": "API key does not exist",   "code": 401 }

Carlos: if api_key param is removed, it would return 429 (rate limit) instead of 401. Toncenter by default allows request if not limited, if rate limit is present then it checks for api key param/header (which is the case) so it keeps returning 401 for me (reply to 152191)

Joseph: Help me understand the difference between Ton space wallet V4R2 and V5?

&rey: v3r2: base wallet which can send up to 4 messages in a single transfer order v5: advanced wallet with up to 255 messages an order, support from providing gas outside ("gasless transactions"), support for plugins  v4r2: as of now, kinda base wallet, similar to v3r2 but more expensive in fees (though supports plugins too) (reply to 152202)

Joseph: Thanks for your explanation (reply to 152208)

TON Bounty Bridge: ​ی عنوان جدید دیگه  Created by Hesami0084

Ice: GM boss, I tried this out but I'm yet to receive the faucet. 😕 (reply to 152022)

— 2025-06-26 —

Mojisola🍅 🍅: I have always had same issue. different address in code and in tonkeeper but same mnemonics. So I simply use it like that. the issue must have come from the tonkeeper implementation (reply to 152185)

Никита: Hi all, I understand correctly that telegram Mini App doesn't support .ton domains yet?

Кирилл: Yes (reply to 152267)

Никита: Are there any plans to implement support or is it easier for me to add support myself in clients and submit a pull request?

ARCH | Basti: hey guys, how can I test wallet connection in development if I have to specify a production url in the manifest? lol

ARCH | Basti: are there any docs regarding this

&rey: Host your development app too. At least, manifest HAS to be accessible from wallet app. (reply to 152304)

&rey: Have you already tried using tonsite:// scheme? I do not think anyone here can speak for what Telegram decides to do. (reply to 152267)

Taras: How do they do it?  EQDJakAgQijtjkq3XIYmqmFNlPnYdI-gxztMOIf-88q_BLUM

Taras: 716$B. mcap

&rey: Price gets lower the instant anyone sells some token to DEX. (reply to 152310)

&rey: Because of DEX mechanics, of course. Basically, this is achievable with extremely low liquidity.

Taras: how make address with token ticer ?? (reply to 152313)

&rey: Some bruteforce on dummy part of data, so that hash would match. (reply to 152314)

&rey: It's not an evidence to token being good vs scam.

Taras: maybe have more info? (reply to 152316)

Taras: all top ton token have token ticer  not, dogs, cats... (reply to 152317)

&rey: USDT does not. I advise to reconsider your heuristic. (reply to 152319)

&rey: Address is base-64 encoded (tag byte + workchain byte + hash part + checksum). End characters you'd highlighted are something of hash part and then checksum. Hash part is cell representation hash of StateInit. (reply to 152318)

Taras: ok usdt not  if i need with "_magic"   how do it? (reply to 152320)

&rey: "vanity-contract". I don't remember where to find it, though chat history might help. (reply to 152322)

Teers k 🐾: You mine specific address like you mine bitcoin (reply to 152322)

Никита: I tested using window.location.href = 'tonsite://{url}', but it's not loading. I've already made changes in my fork of the Telegram-iOS repository to support .ton sites (reply to 152308)

Combot: Combot has warned Teers k 🐾 (1/3) Reason: Word ******** is not allowed (reply to 152310)

Taras: 🥲 (reply to 152329)

Broki: I'm a dev from solana bridging to TON, what's cooking

&rey: Depends on what you want to be bringing, of course. (reply to 152336)

Ricardo: Hey guys, i am receiving this error from @ton/sandbox when attempting to send a transaction: Error while executing transaction: Emulate transaction failed: [Error : -701 : cannot run message on account inbound external message rejected by account 2F4D96632F06F5AA79EE3F5B336C82F2432653DB3A52457FC1C3E7E1E0EF50A2 before smart-contract execution]    Blockchain logs:     [ 4][t 0][2025-06-26 19:54:16.249000][transaction.cpp:4006] block random seed set to 0000000000000000000000000000000000000000000000000000000000000000    [ 4][t 0][2025-06-26 19:54:16.249000][transaction.cpp:807]  storage paid for a message: 24 cells, 5441 bits     [ 4][t 0][2025-06-26 19:54:16.249000][transaction.cpp:821]  computed fwd fees = 3536400 + 0    [ 4][t 0][2025-06-26 19:54:16.249000][transaction.cpp:829]  cannot pay for importing this external message  its kinda cryptic, i don't know what it means

&rey: see last seven words: "cannot pay for importing this external message" (reply to 152338)

Broki: Whatever is useful for the community mate, we see potential here (reply to 152337)

Ricardo: what does this mean?, the address from which i am sending the funds has funds

&rey: In sandbox too? Have you set up RemoteBlockchainStorage right? (reply to 152341)

&rey: Infrastructure (offchain interfaces) would be useful thanks. (reply to 152340)

Ricardo: this is all sandbox, in mainnet it works fine (reply to 152342)

Ricardo: i am funding the address like this: await treasury.send({ to: ACCOUNT.address, value: 500_000_000 }) (reply to 152342)

Ricardo: do i need RemoteBlockchainStorage if simply want to simulate sending TON from A to B? (reply to 152342)

&rey: Either something is wrong with init / beforeAll / beforeEach, or sandbox got broken. (reply to 152345)

Ricardo: this is my before each:   beforeEach(async () => {     blockchain = await Blockchain.create()     treasury = await blockchain.treasury('treasury');      tonClient = new TonClientStub(blockchain)     deployer = await blockchain.treasury('deployer');     jettonMinter = blockchain.openContract(JettonMinter.createFromConfig({       admin: deployer.address,       content: beginCell().storeStringTail('USDT').endCell()     }));      const deployResult = await jettonMinter.sendDeploy(deployer.getSender(), toNano(0.05));     expect(deployResult.transactions).toHaveTransaction({       from: deployer.address,       on: jettonMinter.address,       deploy: true,       success: true,     })      account = new WalletAccountTon(SEED_PHRASE, "0'/0/0", {       tonClient     })   })

Ricardo: I finally fixed, the state of my contract was not initialized and i had no clue how to do it (reply to 152347)

— 2025-06-27 —

Bill: Is there any way for me to allow the customer to pay with Creditcard and apple/google pay directly from my app. I mean to buy TON token as this is what I want to accept but I want to set it up so the user pays with creditcard for the TON and then the ton token will be sent to my walet address directly. Trying to find the easiest way possible for the users to pay. Want to attract also non crypto users so it would be grat if they can just click pay from my app and then choose payment method and then I receive the TON token. Preferably a system where the user does not haver to sign up to moonpay or something similar?

Anastasiia: Tonkeeper is hosting a $5,000 developer contest!  Objective: Create an educational video (tutorial, project demo, live coding, comparison—any format!) about tonapi.io. The five coolest videos will each receive a reward (total prize pool: $5,000).  Evaluation criteria & rules: here  👉 Deadline: July 18 👈

&rey: This is kinda out of scope for this chat... (reply to 152376)

Dmitry: From TON Help: - Hello! In order to start an auction for an expired domain, you need to send a special technical message. Detailed information on how to send this message is in the developer chat. Use the chat search or ask a question.  Which "special technical message" i need to send to start an auction for an expired TON DNS domain? How can i do this?

Always Polite: Its different contract address not official (reply to 152310)

&rey: To obtain an expired TON DNS domain (actually, start a week-long auction on it), you must:  Obtain NFT address — e.g. by entering <domain>.ton.resolve-contract.ton in an explorer. Obtain required amount in nanoTON, perhaps checking current price for a same-length domain. Send message ton://transfer/<domain-nft-address>?bin=te6ccsEBAQEADgAAABhO0UtlAAAAAAAAAACvkFQ4&amount=<amount-nanoton>. Binary payload is always same.

Tony: Hi everyone, do anyone have an idea about this?

Tony: There is an ongoing work on a new language to develop on TON. It that an upgrade to TACT or another language altogether?

&rey: Tolk? Another one. (reply to 152429)

Tony: yes Tolk I think, not tact

Combot: Combot has warned Hehe Bella (1/3) Reason: Word ******* is not allowed

Mzharfan: Can I find out when the bot will start distributing TON again? It seems to have run out of them? This one — testgiver_ton_bot.

Corgi: Hello is it allow to post job here ?

&rey: Could you run it by me please? (reply to 152445)

shalor1k: Hi, I have a problem, I am using tonconnect/ui-react:2.2.0 and tonconnect/sdk: 3.2.0, and intermittently after confirming a transaction in telegram wallet, judging from the console, I don't get the transaction results and boc, what could this be related to?

Emirhan: Hey guys! Does TonKeeper tonconnect ui sdk support sign data method for ledgers?

— 2025-06-28 —

Combot: Combot has warned M$L (1/3) Reason: Word ******* is not allowed

— 2025-06-29 —

Luiz Henrique: Hi everyone 👋  I'm launching a Brazilian stablecoin called “Real Brasileiro”, pegged 1:1 to BRL (Brazilian Real).  ✅ The smart contract (TIP-3) is already written with mint/burn/transfer functions and owner-only permissions.   ✅ I have the symbol/logo designed.   ✅ Ticker: REAL   ✅ Decimals: 9   ✅ Minting will be manual, based on PIX deposits in Brazil.  I just need help compiling and deploying the contract on TON.   I can provide the .fc file and a simple deployment guide.   I have no budget for now, but if anyone can help out of goodwill or as a community partner, I’ll be very grateful 🙏  Thanks in advance!

Farhan | SatoshiPump.fun: hey, is there a way I can listen to account address changes in js? Websocket fashion, not pooling.

&rey: And how TIP-3 is related to TON? Here, jetton standard is TEP-74. (reply to 152560)

Combot: Combot has warned -𝗘𝘀𝗶 (1/3) Reason: 1 reports (reply to 152619)

— 2025-06-30 —

Lase: If anyone is facing issues with the balance/address not matching. Try using a totally different wallet  Tonkeeper doesn't work well for w5 yet, but MyTonWallet does it well ✅.  You are welcome. (reply to 151999)

Combot: Combot has warned Dan Mark (2/3) Reason: Word **** is not allowed

Denis: No. Mytonwallet creates security problem for you and I hope they are going to fix it. Tonkeeper works correctly. (reply to 152667)

Denis: You SHOULD have different subwallet_id in testnet and mainnet for avoid transactions replaying from testnet to mainnet

Lase: How? (reply to 152698)

Denis: Trust me - I invented wallet v5 :)

Lase: Oh really? (reply to 152696)

Lase: Damn🔥 (reply to 152701)

FUN-Gu: Hello I am working on a project on Ton  Any one interested in working with me    Ps I already created the token and it visible already on chain

Denis: https://github.com/ton-blockchain/wallet-contract-v5?tab=readme-ov-file#known-security-issues (reply to 152702)

几把哥: I want to know how to promote a real-name wallet.

几把哥: 1 (reply to 152705)

FUN-Gu: I want to know how to create a mini app

TON Bounty Bridge: 📊 Update Digest!  🔍 Active bounties: 16 ✅ Approved bounties: 0 🔄 Bounties seeking suggestions: 36  📣 We value your feedback! Join the community discussion and participate in shaping the future. Click the 'Create Your Own Bounty' button to get started.  Happy contributing!

&rey: Docs at https://docs.ton.org/v3/guidelines/dapps/tma/overview. Not this chat though, join https://t.me/devs instead. (reply to 152721)

Vladimir: 📣 TON Developers — we need your feedback!  Help us shape the future of TON development. We’ve prepared a detailed survey to understand your experience with: 🧠 Smart contract languages (Tact, Func, Tolk) 📚 Documentation and education 🛠 SDKs, IDEs, and tools 🤖 Telegram Mini Apps 💬 Developer support and pain points  💎 As a thank you, we’ll issue an SBT (Soulbound Token) to your wallet as proof of contribution to the ecosystem.  👉 Take the survey here: https://docs.google.com/forms/d/e/1FAIpQLSfDm85Z7YxDw96nMeV9T-b2kmd2qAe8xt0_iag8ZqrgqKuCRw/viewform  🕐 Takes 5 minutes. Every voice matters. Let’s build a better TON together. (forwarded from TON Dev News)

Lase: i went back to tonkeeper and i have been on it for hours. (reply to 152705)

Lase: Could you give me a code example, please? Thank you

Denis: code example for what?

Lase: they way you use tonkeeper mnemonic and it works well with WalletContractV5R1. Since i am not to use MyTonWallet (reply to 151999)

Denis: better ask someone who can write js code (reply to 152741)

Lase: see the main issue here.  I generated the mnemonic on Tonkeeper. Used it in the code.  But Tonkeeper doesn't match whilst the MyTonWallet does. (reply to 152740)

Lase: Thank you so much 😊 (reply to 152742)

&rey: const walletV5 = provider.open(         WalletV5.createFromConfig(             {                 signatureAllowed: true,                 seqno: 0,                 walletId: new WalletId({ networkGlobalId: -3 }).serialized, // testnet                 publicKey: keyPair.publicKey,                 extensions: Dictionary.empty() as any             },             Cell.fromBase64('te6cck...code...')         )     ); (reply to 152741)

Lase: thanks (reply to 152748)

ARCH | Basti: Hey guys, found a bug in the @ton/ton library, the client.getTransactions method doesn't work properly because it attempts to make a post to the rpc route handling that, but this endpoint only accepts get method so its crashing

Riccardo: GM, I have a question. It was announced that TON was going to be integrated with telegram and on Telegram is now possible to use Stickers NFT. I was curious to understand how this work but I cannot find any information on how an NFT / sticker is owned on TON and how it is validated on Telegram. Do you have any suggest on who I should ask?

Ricardo: Hey guys, do you know if its possible to call this endpoint on toncenter v3, using the TonClient from @ton/ton library or do i have to do something like an axios, fetch, regular http call? https://toncenter.com/api/v3/index.html#/blockchain/api_v3_get_transactions_by_message

Spyder: I have ton in Solana chain. How to exchnage them to USDT ?

Spyder: Please help

Michaelzy: what library is WalletV5 from? the @ton/ton library is WalletContractV5R1 (reply to 152748)

&rey: That might be better. (reply to 152784)

Michaelzy: i believe the WalletContractV5R1 equivalent of the code Rey dropped would be    const wallet = WalletContractV5R1.create({         publicKey: key.publicKey,           walletId: {            networkGlobalId: -3,   //-3 is testnet, -239 is mainnet             context: {                 workchain: workchain,                 walletVersion: 'v5r1',                 subwalletNumber: 0,             }         }     }) (reply to 152749)

&rey: So which version worked? (reply to 152749)

— 2025-07-01 —

Zhing Richard: If anyone needs to develop telegram mini-apps, trading bots for TON blockchain and various other products! dm me.

Devsyn: Guys... Is it possible to integrate Ton Wallet or other Ton ecosystem wallet to a mobile app so? 🤔

&rey: They already are compatible with mobile. (reply to 152794)

Anastasiia: UP 🤏 (reply to 152401)

Devsyn: Does TonConnect turn this possible? 🤔 (reply to 152801)

Devsyn: I mean, I would like to give the user the ability to create or import a wallet inside the app, so the user can aprove transactions and interact with the blockchain.

&rey: So you want to create a wallet app. (reply to 152812)

Devsyn: Not necessary 😂, but if I don't find a way I think I'll need to handle the situation this way. (reply to 152813)

&rey: Your requirements sound exactly like a wallet application. What is the difference, then? (reply to 152814)

Devsyn: Because I wouldn't like to create all the logic for a wallet software. I don't want to recreate the wheel. I noticed if I use TonConnect, the user would be redirected to confirm a transaction on the wallet he connected. I would like to let he do confirmations etc inside my app.

Devsyn: But I don't know if there is something that turns this possible on TON

Devsyn: Otherwise I'll need to create a logic like a wallet

&rey: Perhaps you want that user confirms requests of your app inside that app itself? (reply to 152816)

Devsyn: Yes, exactly hahaha (reply to 152820)

&rey: Then you would be best removing TC2 and creating your own module, @ton/ton-based, providing sendTransaction method.  DO NOT import existing mnemonics for users, in name of security. Generate a new wallet, store its keypair on frontend (preferably with some recovery option but I'm not sure which) and make user deposit a bit there; then, your app will be able to spend with JS. (reply to 152821)

&rey: Or perhaps you want a payment channel? It is very similar in nature.

Devsyn: Ok (reply to 152822)

Devsyn: Maybe, I'm still exploring TON ecosystem (reply to 152823)

Devsyn: I don't know how payment channels works yet

Devsyn: But the thing is: I want the user to confirm transactions without the need to leave the app, otherwise it would break all the UX

Devsyn: I think the only way to turn this possible is letting the user import/create a wallet. But I am not sure yet 🥲 (reply to 152827)

&rey: Please DO NOT import. Generate a new keypair using @ton/crypto. (reply to 152828)

Devsyn: Yes, I think I'm going to use this method. (reply to 152830)

Devsyn: Thanks for your help! 🫶

M: Hey ! I'm trying to understand bounced messages and when does a message produces a bounce. If it can do it in every phase (compute phase , action phase )??  Let's suppose I'm sending jettons from jeton-wallet A to jetton-wallet B. If the message fails in the first compute phase, ie in wallet A execution of the code there will be a bounce message to the originating sender address  if the internal message was marked as bounceable??  If the message fails in action phase in wallet A (when sending raw message to wallet B ) there will be a bounce message to the originating sender address if the message was marked as bounceable? or to wallet A?   Once the message arrives to jetton- wallet B and the transaction fails in compute phase that message will bounce if the original message was marked as bounceable?  thanks in advance

M: my understanding is that bounces only happen in compute phase but there's a special case where they can happen in action phase when using  SEND_MODE_BOUNCE_ON_ACTION_FAIL  as mode is that correct?

— 2025-07-02 —

Mary: Hello I made a nft collection that uses the 0062-nft-standard on ton testnet network(for now) What i want to make is a smart contract using tact language (using blueprint (npm create ton@latest)) That will take a fee from the user + mint a nft on that collection with the data i need and send the nft to the user (and send the remaining amount to my wallet) But i cant figure out how to mint nft on the collection It seems like the smart contract should be the owner of the nft collection which i can do But even after that, i cant mint a working nft_item on the collection using tact language and the smart contract I have done some stuff on the testnet and i can provide the transaction links to you in your direct if you want to check them Can you guide me? Or at least tell me where can i find a good source to help me accomplish my goal Thanks a lot for your time (reply to 152830)

Devsyn: I tried this and got a bunch of problems with react native. Any examples I can follow along? (reply to 152830)

gag: Hi  I build dapp with tonconnect in web and mini app.  The mini app can connect to the telegram build in wallet, but when execute a transaction the wallet could not popup. It works fine in web browser.   The dev console has no error and warnings.  Anyone has similar problem? How to fix this?  Thanks.

meomeocoj | Mike: Hi admin could i share our journey in bulding the AMM in TON here ? It is simply X Post

meomeocoj | Mike: https:// x.com/orbiton_fi/status/1940338208056955376?s=46&t=a9paN49UqE_RUR7cL1phOw  We could not continue to implement a CLMM in TON. But if you interesting we have openSource all the code from contract, indexer, smartrouter and TMA in the github link.

meomeocoj | Mike: If any question please DM me, we will answer question about the source.

Devsyn: Does anyone has ever worked with react native while implementing TON dapps? I'm trying and lot of errors are showing up when installing @ton/core @ton/crypto @ton/ton

Mary: Anyone familiar with smart contracts and tact language And familiar with nft collection and nft item minting using 0062-nft-standard? I need help

Spyder: What is wrapped Ton

&rey: The name for any TEP-74 jetton which can be interconverted with TON 1:1 modulo fees. Used to unify asset handling in complex systems, and so that actual value cannot be burned for computation.  If you received a jetton, even calling itself "wrapped TON", unprompted, then it might be scam. (reply to 152927)

EnCryptoknight ⚔️: review the documents you might be installing wrong packages https://docs.telegram-mini-apps.com/packages  verify packages   https://www.npmjs.com/package/@ton/core (reply to 152915)

— 2025-07-03 —

TON Bounty Bridge: ​Ayuda  🏷 Developer Tool  Summary:Aaaa  Created by axell2180

pursue: /stat@combot

Combot: Total messages: 152943

You may: https://receive-sms.com?share=free_credit

Axror: Does anyone know in which library and version the following functions are available?  import_wallet, get_jetton_transactions, transfer_jetton  If you know, please let me know. Thanks in advance.

&rey: tonutils perhaps? (reply to 152954)

Антон: maybeee

Vetch: Hi, does anyone know why the toncenter API doesn't return data of the two USDT deposit that happened before the first TON deposit of this address?  curl -X 'GET' \   'https://toncenter.com/api/v2/getTransactions?address=UQBcUOVngVSHr4dmf2hFa4u4pFm7b4wji5ZBTE1A8C0hi5iQ&limit=100&to_lt=0&archival=true' \   -H 'accept: application/json'

&rey: With this API, you are viewing transactions as they happened on blockchain; you must be seeing transfer notifications originating from USDT transfers. (reply to 152968)

Nerses: Can someone give a hint how i can get public key of wallet in tests where the wallet is just instance of SandboxContract<TreasuryContract> ?

&rey: How would you use it if it existed? (reply to 152972)

Nerses: In my smart contract I am doing signature check (using checkSignature) and thus validate the action. (reply to 152975)

&rey: That key does not have to match wallet key IMO. (reply to 152976)

Nerses: Then how should be done tests for checkSignature  ? (reply to 152977)

&rey: import { keyPairFromSeed, getSecureRandomBytes } from "@ton/crypto"; (reply to 152978)

Gene: Hi, Is there any deployment document for ton-indexer? The deployment failed with v1.1.8, which seemed to be a database initialization failure, but it was successfully deployed with v1.0.2

Prashant: How to withdraw

Emirhan: Every wallet works, but Tonkeeper stucks like that after connecting to my website

&rey: What do you mean? Please don't enter/send secrets anywhere except your wallet app. (reply to 152982)

Vetch: Yes, is there a way to obtain these USDT transfer notification in toncenter API? It seems they only return those that happens after the first TON transfer (reply to 152970)

&rey: Idk about to_lt=0, have you tried removing that parameter? (reply to 152988)

Vetch: Tried without the to_lt, didn't affect the result (reply to 152989)

&rey: > tonConnectUI.sendTransaction takes a very long time to respond or does not send boc at all Probably depends on specific wallet app users are in.

&rey: (your message got deleted because of a mention)

Никита: they use tg wallet and there were no problems with the answer before

Никита: It's like there's something wrong with the servers

&rey: Bridges are prone to collapse, and I don't think anyone except Telegram can fix theirs. (reply to 153003)

Khosro: Greetings to all. I'm looking for a list of current "library cells" on the Ton network  Can someone point me in the right direction?

— 2025-07-04 —

&rey: Perhaps https://dton.io/graphql can help you. (reply to 153016)

Combot: Hello CiaoAI William1! Click on the button below so that we understand that you are not a bot who came to tell us about how Durov is giving away bitcoins as a gift.

kevin: https://github.com/cmingxu/dedust  Hey, I decide to opensource my MEV bot for dedust project which took me 5 months and almost 1000 TON , if it can provide any form of help to you,  I would be happy.

Princewill Tor-Anyiin: Good morning   I dropped a message here about a project I'm building on TON for Africans.  Unfortunately seems the admin deleted it.  I'm sorry if I violated certain rules here by talking about a regional centered project.  I'll like to know the rules, so as not to violate them 🙏  I was actually told I'll meet all the support I need here.  Thanks.

FUN-Gu: Good morning can you message me ? (reply to 153047)

FUN-Gu: Not concerning this (reply to 153047)

&rey: That 'call' was pretty much full of buzzwords. It would be better if you explained what you actually needed of the devs (how many smcs), what kind of compensation is there, and so on. (reply to 153047)

Litinski: Hi everyone! Guys, please tell me if anyone has encountered a similar problem the essence is that when focusing on input the whole page is re-rendered and it happens only on IOS  I bet that this is somehow related to the fact that I use "reactive" libs like rxjs and at the moment when the keyboard should appear the viewport is triggered which causes the re-rendering of components that are the pipelines for streams which in turn triggers the re-rendering of everything else, but why is this happening? keyboard should appear, the viewport is triggered which causes the re-rendering of the components that are bundling for streams which in turn triggers the re-rendering of everything else but why this works for androids I don't understand  any ideas would be appreciated.

&rey: Unfortunately I don't think this chat is related unless you get the redraw from TON UI libs; https://t.me/devs may know. (reply to 153051)

Princewill Tor-Anyiin: Alright chief (reply to 153050)

Princewill Tor-Anyiin: CALL FOR TON DEV TEAM: AFRO-NODE MVP & Grant Momentum  Hey TON Devs 👋 My project, AFRO-NODE, a Pan-African Web3 dual ecosystem on TON, has just been shortlisted for the second stage of a Grant! Now, I need skilled FunC and Tact smart contract developers to build out our MVP. My foundational contracts are ready (via prompt engineering), but I need expert hands to enhance security and build the full Jetton Master Contract and core DApp logic. This is a bootstrapped project, and I'll be offering Pre-TGE $ANODE utility tokens of AFRO-NODE as payment for early contributors. If you're passionate about African tech and want to join a project with real momentum, let's connect! DM me.

Nerses: While testing smart contract transfers in Blueprint tests, I observe that the transferred amount is lower than the expected fixed value. However, on testnet, it works as expected. Has anyone encountered this issue before, or is this a known difference between the Blueprint sandbox and testnet environments?

Khosro: Do you know how to find a deployed jetton wallet's lib hash on blockchain? (reply to 153033)

Andrey: dton.io => go to jetton wallet => disassembler => hash will be on top (reply to 153064)

Khosro: Thank you very much !!! (reply to 153066)

Veto: i have a question about telegram web widget which  provide us to show telegram post in other webssite

&rey: It is not for this chat. (reply to 153074)

Zaidu: Hello everyone, please can anyone guide me in setting the environment for building smart contracts on GitHub using Func?.

Zaidu: I have tried multiple approach, downloading manually, creating a dev container...but whenever I try to initialize the toncli it always gives the error of not having a path for the executables.

mikail: what library on python can i use to automate stars buying on fragment?

&rey: Well you should put the downloaded executables on PATH. If Windows, don't forget OpenSSL 1.1.1. (reply to 153101)

ᅠ: hey guys, new here, have a wild idea of doing some nfts tonight, some advices or a contract sample please?

︎ ︎: Not unfolding?

︎ ︎: ton

ᅠ: have experience in other blockchains, think it would be nice to try, some specifics, and why github sdk dont work?

High/or: hello !  dton-magic.org seems down do you have other mirrors for .ton?  Foundation.ton dont works on telegram browser and i mean telegram browser use dton-magic.org

High/or: 😢

Vesting: down access (reply to 153114)

High/or: Do you know another bridge for .ton sites than dton-magic.org and ton.run which are both currently out of service (reply to 153116)

Vesting: I dont know (reply to 153117)

Vesting: maybe this https://rubic.exchange/bridge/ton (reply to 153117)

fruitful-l: Hi! Does anyone by any chance know the reference of setting on-chain metadata for NFT and Jettons?

High/or: It’s a bridge for crypto.  I’m looking for a bridge to visit .ton sites (reply to 153119)

Vesting: I dk (reply to 153122)

High/or: I mean a gateaway / resolver http (reply to 153123)

High/or: how can I create a .ton public gateway on my own domain ?   example to make all .ton sites with a .highor.com suffix accessible.  e.g foundation.ton would be accessible on foundation.ton-highor.com for example (reply to 153114)

— 2025-07-05 —

Roj: https://en.wikipedia.org/wiki/Proxy_server (reply to 153125)

High/or: Thanks I created my own .ton gateaway  But foundation.ton still dont works (all my .ton sites works) (reply to 153127)

GG: What's up with TON?  Can't bridge from other networks, and withdrawals from exchanges are blocked.

Kirill: Hello everyone, what could have happened to liteserver that it's now giving -256 responses?

Алина: I started experiencing a problem with my lite client, it won't run getAccountState on some accounts failing with Error: No more references

&rey: Update the binaries to the newest version. (reply to 153180)

Алина: What binaries? (reply to 153181)

&rey: Liteserver apparently also has to update the binaries to the newest version. (reply to 153167)

Kirill: How I can update?

&rey: Liteclient's ones. If you use pytoniq, you will instead have to update some TL-B schemes (of Account structs) but I haven't looked how exactly. (reply to 153182)

&rey: I don't think you can, if you do not manage that exact liteserver. (reply to 153184)

Kirill: Why were there no announcements anywhere?

Kirill: I have access to the server (reply to 153186)

&rey: Here you are: https://t.me/tonstatus/169 (reply to 153187)

Kirill: Thanks

&rey: REPEAT ANNOUNCEMENT if you host a node, a custodial service (exchange / deposits / like)  The blockchain structures have been updated and are now incompatible with past versions of software verifying all the proofs (whether those are liteservers, cpp liteclients or pytoniq liteclients). Please do the upgrade as outlined in https://t.me/tonstatus/169.

Алина: I have little clue :( I use https://github.com/ton-core/ton-lite-client/blob/master/src/schema.tl, did these get updated? (reply to 153185)

Алина: Thanks to Tim! If you use ton-lite-client you have to now update @ton/core package

— 2025-07-06 —

Axror: Hello. I'm using a macbook. I'm getting errors when installing the pytonlib library in python. Does anyone know how to install it correctly? Does pythonlib have this function (import_wallet,get_jetton_transactions,transfer_jetton)?

User: Currently, the library works for Windows, Mac and Linux only on Intel CPUs (reply to 153244)

Bohdan: did you solve this issue? because I have the same one, tonkeeper stucks in connecting (reply to 152984)

Emirhan: Yes, I deployed the program and it's fixed. Tonkeeper blocks localhost requests i guess (reply to 153275)

Bohdan: Do you mean deploy to the server? (reply to 153289)

Emirhan: Yes (reply to 153290)

Emirhan: I use Vercel, published it there. But a server should fix it too.

Bohdan: I also noticed that it works on the server but not on the localhost. So, you're right

Emirhan: Yeah, it's stupid but it is what it is (reply to 153294)

&rey: By the way it would not work with mobile Tonkeeper either (since localhost would mean a different device) so that might be deliberate. (reply to 153289)

Sofija Moris: No you can try it

Ivan: Hello everyone! Tell me, please, does anyone have a TON Proof checker on Python?

EnCryptoknight ⚔️: it's not stupid, it's called policy (reply to 153295)

EnCryptoknight ⚔️: Did anyone noticed telegram is getting very low MAUs lately?

Mr. Ants: Yes. Looks like fewer bots are using it. (reply to 153318)

EnCryptoknight ⚔️: until you have project or building project on telegram (reply to 153320)

ANDY: Any Ton Developer here ?

ANDY: Someone who understands the Programming language of Ton.

Codora: I'm ton dev. Let's contact. I can help you. (reply to 153325)

EnCryptoknight ⚔️: you mean Tact, Tolk or FunC? (reply to 153325)

User: Be aware of prepayments, there is a lot of scammers, who will just take money and block you (reply to 153325)

NPA120: can we discuss further? (reply to 153325)

— 2025-07-07 —

Root: https://tonviewer.com/transaction/b7f6c68e4b44d0a21e6ddba3a5b547e28e8d7072f03bb50a9bafc5c50a909e25 Why this tx bounced.

Mojisola🍅 🍅: localhost is only understood by the PC not external.  so this is normal (reply to 153294)

maple: hello, I created an order using a multi-signature wallet in a multi-signature dapp, but it failed, as shown above. I don’t know which step went wrong. Can anyone help me?

Kasra: how can i do this : .storeStringTail('string') inside a cell using tact language? it doesnt support the storeStringTail method i know i have to make the string using      let string: StringBuilder = beginTailString(); and then append the string i want to it but how do i store it in a cell so that it acts the same way is storeStringTail does in .ts files

Denis: Compute Phase Skipped: true Skip Reason: cskip_no_state (reply to 153347)

Denis: You should send messages without bounce to uninited contracts or add valid state_init

Denis: Give us a link (reply to 153351)

maple: https://tonscan.org/tx/c69fe87f1f2aa69576aaf5d555692aab250ef6e50ef8947b45ea512d29773a39 (reply to 153356)

Denis: Interesting. Message was parsed according to scheme but contract says "cell underflow"

Root: https://testnet.tonviewer.com/transaction/0344b8ca2e9f5d56e35c4d9cdb71d73ec9d8c049897d1c03a079632437abcaf5  I tried sending a bounceable=true transaction to an uninitialized address, but found that it did not actually bounce. (reply to 153355)

Leo: Obviously there's not enough fund to bounce

Root: I just sent a larger amount, but it still didn’t bounce. I saw that other transactions sent to the same recipient address were bounced.

CRYPTO BANGAA: Hello everyone

Root: You are right.I’ve changed transaction params to bounce=false.Thanks a lot (reply to 153361)

Denis: You don't have library in masterchain for your own compiled contract (reply to 153357)

Nerses: Is here anyone from Blueprint team ? Wanna discuss some unexpected behaviors using tests

Mojisola🍅 🍅: I hope you are doing bounce correctly? (reply to 153362)

TON Bounty Bridge: 📊 Update Digest!  🔍 Active bounties: 11 ✅ Approved bounties: 0 🔄 Bounties seeking suggestions: 35  📣 We value your feedback! Join the community discussion and participate in shaping the future. Click the 'Create Your Own Bounty' button to get started.  Happy contributing!

Leona: Hello any API to help download TON Waller transactions.

&rey: A few terabytes of them, you surely mean? (reply to 153379)

maple: What do I need to do (reply to 153373)

MoFR: I'm new here. What's up? I want a learning roadmap to become a TON developer (reply to 153382)

Doggetti: Start with docs and TOLK lang

Robb: hey

&rey: This chat is about how to develop on TON. (reply to 153393)

Robb: Okey thanks (reply to 153394)

Robb: Is there maybe chat for TON where we can talk about bringing TON to real world asset? (reply to 153394)

&rey: Do you have a technical solution? (reply to 153396)

Nerses: I have tried to use that approach,but there were some bottlenecks.When I create wallet using keyPairFromSeed I should also specify provider for doing txs,so what is the provider for blueprint sandbox and also the workchain ? (reply to 152979)

Robb: wait can i send u message in DM? (reply to 153397)

&rey: Workchain? Zero probably, if you want to use basechain. I don't remember how to wrap sandbox to get a provider. (reply to 153399)

Антон: Not norm

М: Hi guys! Do you know the api from where to get .tgs animation files for telegram gifts?

— 2025-07-08 —

orlimors: telegram tonsite proxy broken?

orlimors: all ton websites dont open on telegram anymore and give error 502

Zom: Hi, please give me a link to the api for this pool EQDPLWHkkQtlb28MX4WUnNNFkCEU9pcJaofKQsCmNg8nM5JS . It is through your service

Mojisola🍅 🍅: hey. what's that. (reply to 153448)

Fardin: Hello 👋

Fardin: Some attackers find a way to get stars which are paid by users out of the bot  But i don't understand how ?

&rey: This is not relevant to TON and thus to this chat;  please see "Refund" label. Whoever originally provides fiat currency to get the stars, requests the refund and claws the stars back. (reply to 153456)

&rey: You mean https://docs.ston.fi/. Point of order: it is not "our service", it is maintained by a separate org. (reply to 153452)

Combot: Combot has warned Zom (1/3) Reason: 1 reports (reply to 153454)

Fardin: Gotcha, let me check this out (reply to 153457)

Princewill Tor-Anyiin: Hi

Mojisola🍅 🍅: ??? (reply to 153464)

Nerses: Is it secure to use OwnableTransferable of stdlib in production code ?

Nerses: Why does the JettonWallet instance’s send method in Blueprint’s sandbox not include a forwardPayload argument for Jetton transfers? Is it possible to achieve sending a forwardPayload with the current implementation, or is this functionality not yet supported?

— 2025-07-09 —

High/or: .magic gateaway isnt working Getting-started.ton  But u can use .sc :  Getting-started.ton.sc (reply to 153449)

High/or: u can also create ur own  You need to set up your ton proxy and then redirect it to your web2 domain  https://github.com/xssnick/Tonutils-Proxy (reply to 153450)

Noname: Hi everyone! I’m new to Tact and blockchain. Can anyone guide me on how to create a crypto coin using Tact that is also tradable on TON using Jetton? I’ve searched but couldn’t find a proper tutorial. Any help or links would be really appreciated. Thanks!

Mojisola🍅 🍅: hi, can you chat (reply to 153511)

0xtitn: pls dm me (reply to 153511)

Alice: Hi everyone, I’m running into an issue when querying data from a contract on TON. This error started appearing recently — previously, the same request worked fine.  The request returns code: 500 error:"VALIDATE ACCOUNT STATEFailed to unpack Account" ok: false  Could someone help me understand why this is happening now, and how to resolve it? Is it possible the contract was deleted, redeployed, or its balance drained? Any suggestions on how to check this or handle it gracefully would be appreciated.

&rey: Those nodes neglected to update and are now incompatible with blockchain. (reply to 153532)

Alice: Could you please recommend which nodes to use, or point me to where I can find the most up-to-date ones? (reply to 153533)

&rey: Toncenter, or take your pick from https://tonstat.us (reply to 153534)

Alice: Thank you so much! Let me try if that works! (reply to 153536)

Amir 🧡: Hi,  we want to launch a project called BABY DOGS and we need skilled developers to develop mini apps like DOGS.

DeFi: What is your budget for development? (reply to 153551)

Amir 🧡: 120,000$

0xtitn: He’s covering the dev costs with his token (reply to 153553)

Yar: A lot! For this you can make a really great app and buy a bunch of ads and infs (reply to 153553)

Amir 🧡: Yes

Tech🧑‍💻🐾: Yes I can make something like this  Mind if you hit me up for some demo and for further discussions on how to execute this project successfully (reply to 153551)

Ehsan: Pv check (reply to 153557)

DeFi: Seems he wants someone to build him his project for him then wait a month to get paid lol (reply to 153555)

Ehsan: Scammer (reply to 153557)

Ehsan: Be careful.

Amir 🧡: Ok

Ehsan: Scammer

Amir 🧡: I blocked you and now you're jealous. (reply to 153565)

Ehsan: No, I'm not jealous I'm asking what you suggest to build trust? You say you'll pay after the 12th of next month. (reply to 153567)

Ehsan: You remain silent when it comes to prepayment

Ehsan: Does a scam get any more obvious than this?😂😂

DeFi: Half upfront, half upon approval. The golden rule in development.

Ehsan: Thats right 👍🏽 (reply to 153571)

Ehsan: But he says he will pay after the 12th of next month (reply to 153571)

DeFi: That means either 1) He doesn't have the money upfront and thinks his app will generate $120k in a month; or 2) He's planning to rug after 3 weeks and disappear. (reply to 153573)

DeFi: And if #1 is his intention, he will do #2 when it fails.

Ehsan: 👍🏽 (reply to 153574)

Samuel: Anyone should recommend a ton blockchain launchpad for Ido please

— 2025-07-10 —

Combot: Combot has warned IMAN (2/3) Reason: Word **** is not allowed

M.K: Any customer support

DeFi: What exactly are you launching? (reply to 153577)

M.K: For TON foundation as I got a complaint (reply to 153593)

&rey: You could send an email to some box at ton.org, but in most probability you are not a customer for TON Foundation? (reply to 153595)

M.K: What do u mean by not a customer for TON foundation? (reply to 153614)

&rey: First, what project or event would you complain about? Second, are you aware that TON stands for The Open Network? (reply to 153615)

Magomed: Hi guys where can I get ton testnet coins

Oleg: here  its username testgiver_ton_bot (reply to 153656)

Robb: Anyone here who handles irl collabs? Just need 5 mins with the right person(maybe call). Thanks!

Samuel: Presale (reply to 153594)

Samuel: Also anyone know how to mint V2 jetton using dapp?

— 2025-07-11 —

Nerses: While doing Jetton transfer in Blueprint sandbox can forwardPayload be specified ?

&rey: You should construct the message yourself. Please refer to TEP-74 over existing examples since they have fragile behavior over forwardPayload's tag bit.  ... forward_ton_amount:(VarUInteger 16) forward_payload:(Either Cell ^Cell) = ...  means that, after specifying the amount, you must store either 0 (and then forward payload inline, if any), or 1 and a reference. (reply to 153751)

MoFR: Hi guys  I want to learn how to develop smart contracts and mini apps on TON.

— 2025-07-12 —

TON Bounty Bridge: ​Ayzu  🏷 Developer Tool  Summary:Nice convresponsible  Created by ayzu47

&rey: Hi. https://docs.ton.org will help. (reply to 153785)

Albert: I can train you (reply to 153785)

MoFR: Did you start by learning JavaScript or TypeScript? (reply to 153800)

Albert: Learning JavaScript first (reply to 153804)

MoFR: First JavaScript, then TypeScript, then Tact — is that correct? How many years of experience do you have in the field?

Always Polite: Not necessary (reply to 153808)

Always Polite: Typescript can be wrote by mern stack (reply to 153808)

MoFR: Do you have a learning roadmap? (reply to 153809)

Always Polite: You can learn from books or there are plenty of resources online (reply to 153812)

&rey: Well TON programming has element of fundamental system thinking but I don't think any nice book has been published yet. (reply to 153813)

Алина: Fundamental "system thinking" or "fundamental system" thinking? (reply to 153814)

Алина: Do you mean you have to be familiar with C-like meticulous memory management and alignment? 🙂

MoFR: What should I learn first? (reply to 153816)

&rey: The former. Not as in "operating system" though: pointer arithmetic is useless here, but ability to see the system you build on different levels (down to the bits and message queues) is nice to have. (reply to 153815)

Ironic: Hey guys, is google oauth not supported inside telegram mini apps? getting weird errors

Ironic: i was using some of the google api for some services

Ackermann: Hello

Ackermann: I need help with a part of my contract      receive(msg: TestSendMinedTokens){         require(msg.amount <= self.rewardTokenBalance, "Insufficient reward token balance");          require(self.rewardTokenWallet != newAddress(0,0), "Reward token Jetton wallet not set");                      let amount: Int = msg.amount;         let recipient: Address = msg.recipient;          let body: Cell = JettonTransfer {             queryId: 0,             amount: msg.amount,             destination: msg.recipient,             responseDestination: myAddress(),             customPayload: emptyCell(),             forwardTonAmount: ton("0.05"),             forwardPayload: beginCell().endCell().beginParse()         }.toCell();          send(SendParameters {                     to: self.rewardTokenWallet,             value: ton("0.15"),             mode: SendRemainingValue + SendIgnoreErrors,             bounce: true, // ✅ Must be true for Jetton Wallet             body: body     });

Ackermann: can anybody help, the contract isn't sending any message to the jetton wallet to send the jetton to the recipient

&rey: I recommend that you do not use whatever suggested you the current SendParameters, and I'll now send a better option.  I assume you do not need a comment in forward payload? (reply to 153840)

Ackermann: No I do not (reply to 153842)

&rey:         let body: Cell = JettonTransfer {             queryId: 0,             amount: msg.amount,             destination: msg.recipient,             responseDestination: myAddress(),             customPayload: null,             forwardTonAmount: ton("0.05"),             forwardPayload: beginCell().storeUint(0, 1).endCell().beginParse()         }.toCell();          send(SendParameters {                     to: self.rewardTokenWallet,             value: 0,             mode: SendRemainingValue,             body: body         }); (reply to 153840)

Ackermann: Thank you (reply to 153844)

Ackermann: Let me implement and get back to you

Trevor: Hey guys, we are building an RWA protocol and would like to integrate TON Chain ... who do i talk to

&rey: It is The Open Network; if you want it, you do it. Documentation is at https://docs.ton.org, something in chat history. Do you have any further questions on how to develop a project? (reply to 153849)

Ackermann: Thanks, it worked (reply to 153850)

Kasra: Hey I have a tact contract i wrote If i send it to you in dm can you check it for any security problems? Or you dont have the time (reply to 153850)

— 2025-07-13 —

Syv: Greetings everybody

Ackermann: Please I need help, does anyone know how to convert a pubkey to a uint256 pub key. I want to integrate payload for my contract abd that's needed

&rey: You could probably just storeBuffer? (reply to 153954)

Ackermann: I do not understand (reply to 153955)

&rey: Which language, what's the type of public key you have, which type do you want to get? (reply to 153956)

Ackermann: tact (reply to 153958)

&rey: (TypeScript, Buffer, Builder) –> builder.storeBuffer(k) (reply to 153958)

&rey: (Tact, ?, ?) (reply to 153959)

Ackermann: i have a ED25519 Public-Key   trying to convert to uint256

&rey: But Tact does not have "ED25519PublicKey" type. What's the type which you have, in a variable that is?  If you haven't decided, you can store publicKey: Int as uint256 and then it won't be problem on Tact side. (reply to 153963)

Ackermann: I know tact doesn't

Ackermann: It's off chain, i neeed it to sign payload and send to the contract in order to use the check_signature() method

Ackermann: This is how i want to store it, now how do i generate a uint256 pub key (reply to 153964)

Dolce: Hi there, I’m looking for a group or a contact at The Open Platform for a partnership with TON.   Thanks for your advice 🙏

&rey: Do you have two TypeScript Buffers, for secret and for public key? (reply to 153969)

Ackermann: No (reply to 153973)

&rey: mnemonicToKeyPair from @ton/crypto. (reply to 153974)

Ackermann: Okay (reply to 153975)

Ackermann: Or I could just generate a new keypair

Syv: Hi, does ton currently have a social thats fully blockchain based like zora yet?

&rey: I don't know of such, if https://ton.app/social does not contain one. (reply to 153983)

Syv: they are fake, they all use central servers. maybe ton for auth and thats it (reply to 153984)

&rey: Well TON whitepaper contained a whole section saying that implementing a social app inside blockchain is too costly therefore all the other infrastructure parts are justified too. (reply to 153985)

Syv: i think that being costly is part of being immune to bots (reply to 153986)

&rey: More costly than that. After all, you would replicate all the social network mechanisms — either on client, which has ultimately limited vision into blockchain (because of network bandwith), or on four hundred validators. The load is increasing hundredfold over what networks do. (reply to 153987)

Syv: Yeah your absolutely right on that one, scalability is a big issue here

K: Who can parse the complete content of boc? If you can do it, please contact me, I am willing to pay

ili: Please share some group chats for job searching, Web3, and Web2 topics.

&rey: https://t.me/tonhunt; TON Society (region-based); no (this isn't place to answer that). (reply to 153996)

Syv: so im thinking, what Dapp should i build on ton?

∆Максим: What will happen to this?

Dmitry: They have “contact us” button on top of their website index page (reply to 153972)

Combot: Combot has warned Leo (1/3) Reason: Word **** is not allowed (reply to 153993)

Leo: You can parse a boc only if you know what it's used for. I can help you with simple cases, forfree (reply to 153993)

— 2025-07-14 —

Nerses: Yeah I know that so i did same for testnet and it works fine,problem arises in sandbox where I cant mimic same. I have looked for such cases in jetton tests, but mainly they use sendTransfer https://github.com/ton-blockchain/token-contract/blob/main/sandbox_tests/JettonWallet.spec.ts#L275   which I guess is deprecated as I cant  find the same method in sanbox jetton wallet instance (reply to 153781)

TON Bounty Bridge: 📊 Update Digest!  🔍 Active bounties: 11 ✅ Approved bounties: 0 🔄 Bounties seeking suggestions: 34  📣 We value your feedback! Join the community discussion and participate in shaping the future. Click the 'Create Your Own Bounty' button to get started.  Happy contributing!

MoFR: Guys, I’m a beginner. I’ll start with TypeScript and then move on to Tact. Is that a good approach ؟

Syv: yes, its a great approach. (reply to 154029)

&rey: They are different languages for different purposes, you'll be unable to move offchain to onchain. (reply to 154029)

MoFR: I believe in TON what do you recommend I start with? (reply to 154031)

Syv: let me know if you guys are interested in me sharing a github repo containing a basic startup on ton with simple wallet connect (frontend only - react vite typescript / ton connect)

&rey: With exploring what it really means – what happens as transactions vs offchain. (reply to 154032)

MoFR: What do you recommend I should do? (reply to 154034)

Noname: Hello everyone, i created a coin from Ton Minter website on testnet. Can anyone help me to write mint/burn functions in nodejs/nextjs. ChatGPT not helping! Any repo or tutorial would be hepful. Thanks

Mojisola🍅 🍅: is already part of the code (reply to 154036)

Noname: I need to make APIs for minting/burning

Mojisola🍅 🍅: you just write code that does minting or burning. what is the api for?

Mojisola🍅 🍅: will it be frontend based on terminal based

&rey: Only owner of a bunch of jettons can burn them. Only owner of jetton master, normally, can mint them. They are different people. (reply to 154038)

Noname: i just created coin from https://minter.ton.org/?testnet=true, now i want to make a webpage where users can mint the token which is just created from ton minter website. Also, users can also burn the tokens from my website

Alex: Why did you delete my message? No advert, only question in it

&rey: That question is off topic. (reply to 154048)

Alex: Ok, sorry, maybe anyone know where i ask? (reply to 154049)

&rey: TON Society runs various sessions on this I heard. (reply to 154050)

Alex: Thnx, i appreciate it (reply to 154051)

Alex: Maybe have a link to group? (reply to 154051)

&rey: TON Hubs at https://ton.org/en/community. (reply to 154053)

Alex: Thx a lot) (reply to 154054)

Andrey: Hey guys, Some time ago I participated in tact competition, where I needed to dive deep into TVM assembly, and I didn't find a good tooling to experiment with. To address that I created an app where you can compile Fift, and see how instructions are executed step by step. It may be useful if you wish to learn how things are working on the low level. The feedback is always appreciated

ANDY: Hello guys

&rey: (first few hours do not allow to post links) (reply to 154064)

Andrey: Yeah, I noticed that

Andrey: I guess I'll post it tomorrow then 🙂

— 2025-07-15 —

Noname: import {     TonClient,     WalletContractV4,     internal,     Address,     toNano,     beginCell,     SendMode, } from 'ton'; import {mnemonicToPrivateKey} from '@ton/crypto'; import 'dotenv/config';  const ENDPOINT =     process.env.TON_RPC || 'https://testnet.toncenter.com/api/v2/jsonRPC';  export async function mint(toAddrStr, jettonAmount) {     const client = new TonClient({endpoint: ENDPOINT});      // keys & wallet     const keyPair = await mnemonicToPrivateKey(         process.env.MNEMONIC.trim().split(' ')     );     const wallet = WalletContractV4.create({         publicKey: keyPair.publicKey,         workchain: 0,     });     const sender = client.open(wallet);      // build payload     const body = beginCell()         .storeUint(0x77a676b, 32) // opcode – adjust to your contract         .storeUint(jettonAmount, 64)         .storeAddress(Address.parse(toAddrStr))         .endCell();      // get current seqno     const seqno = await sender.getSeqno();      // send transfer ­‑‑ note `messages: [ … ]`     await sender.sendTransfer({         secretKey: keyPair.secretKey,         seqno,         sendMode: SendMode.PAY_GAS_SEPARATELY, // or 3         messages: [             internal({                 to: Address.parse(process.env.CONTRACT_ADDRESS),                 value: toNano('0.05'),                 bounce: true,                 body,             }),         ],     });      console.log('mint tx sent'); }  mint('0QARq2E6Vl9dZIcxKBcXgmXVMfUhw-wnq4Bqm6v_ozp66H9j', 10n);

Noname: I have this mint file in nodejs, i wanted to mint coin which i created from ton minter website, but it's always giving me "429 Rate limited Error". Can anyone help me in this

Noname: This is token  https://testnet.tonscan.org/jetton/kQAktPK_EWqvO2bLxYbYtudynAIGPjaTClaW3EZwptaCx3G0

&rey: 1.1s delay between getSeqno  and sendTransfer, or an API key. (reply to 154087)

Vladimir: 🛡Hack THE TON — the first wargame platform built on TON!  Ethereum has legendary wargames like Ethernaut and Damn Vulnerable DeFi — tools that have onboarded thousands of developers into smart contract security. TON had nothing like this. So the community built it.  🎮 How does it work? Hack THE TON is a series of challenge levels, each represented by a smart contract written in Tact or Tolk. Your goal is to hack the contract by triggering its hidden condition. Use your knowledge of the TVM, analyze the logic, exploit vulnerabilities, and win!  🔧 Along the way, you'll learn to:  *️⃣Deepen your understanding of the TVM and TON architecture *️⃣Read and understand Tact/Tolk contracts *️⃣Analyze smart contract vulnerabilities in TON *️⃣Write attack contracts and exploits  🏆 Completing levels contributes to your profile and reputation in the ecosystem.  👾 The first wave of levels is already live. Join the core of TON’s hacker community — and prove what you're capable of.  👉 Start now: https://www.hacktheton.com/ 💬 Join the chat: https://t.me/hacktheton  🚧 New challenges are coming soon. (forwarded from TON Dev News)

&rey: Fails to sign in for me. More precisely, the wallet doesn't show TC2 sign in confirmation, and frontend logs { event: "connect_error", id: ..., payload: { code: 0, message: "timeout" } }. (reply to 154097)

Robb: Morning everyone

Dmitry: Which wallet? (reply to 154099)

&rey: TK mobile. (reply to 154101)

Tim: V P N (reply to 154102)

Dmitry: Hm, works fine for me (reply to 154102)

Andrey: Link to the app: https://tvm-explorer.netlify.app/ (reply to 154064)

nhlaka: Good afternoon. Toncenter api/v3/pendingTransactions/ how long after sending a transaction for processing can I see the transaction via the api? Does anyone know?

Ackermann: Hello  Please, I don't understand why I'm getting this error : contracts/hubb.tact:39:16: Static function "inMsg" does not exist Line 39, col 16:   38 |    receive() { > 39 |     let body = inMsg();                       ^~~~~~~   40 |     let intent = body.loadUint(32);      receive() {     let body = inMsg();     let intent = body.loadUint(32); }

&rey: receive(body: Slice), and it's finally time to toss that LLM into garbage can. (reply to 154113)

Ackermann: I checked tact docs and they had this there    receive() {         let body = inMsg();         body.bits(); // 0     } (reply to 154115)

Ackermann: same error :contracts/hubb.tact:39:16: Static function "inMsg" does not exist Line 39, col 16:   38 |    receive(body: Slice) { > 39 |     let body = inMsg();                       ^~~~~~~   40 |     let intent = body.loadUint(32);

&rey: Oh, interesting. Available since Tact 1.6.7 (reply to 154116)

&rey: this line becomes unnecessary as you might have noticed (reply to 154117)

Ackermann: done, so I can't use inMsg() again in the new tact update?? (reply to 154119)

crypvolk: AYO, hi everyone!

crypvolk: I need some help with a very specific issue regarding my TON balance in the Telegram app.

crypvolk: In My Settings > My TON, I see a balance with a transaction ID like stx1****

crypvolk: I'm trying to figure out how to actually use this TON balance

Mojisola🍅 🍅: as in? (reply to 154146)

crypvolk: withdraw it, transfer it, or spend it on something else, given that it's not appearing on the advertising platform? (reply to 154158)

Mojisola🍅 🍅: may be move it to tonkeeper

crypvolk: So, how can it be used, then? Is it even possible to move it in any way? Please tell me, how? (reply to 154160)

crypvolk: this is TON in my Telegram settings (My TON), and not in the wallet app, just to clarify

&rey: There is no one in this chat who can help you with custodial services like Telegram Wallet. Please mind that people who would DM you are most often scam. (reply to 154161)

crypvolk: didn't refer to you as custodial support, nor is it necessary? (reply to 154165)

&rey: If there is some amount of TON and they are not in blockchain on your wallet contract, then they are held by a custodian. Telegram, apparently. And then we go to step one, which is, only Telegram can say what to do with those. (reply to 154163)

crypvolk: Telegram support hasn't replied to me for 15 days, so I highly doubt they'd suddenly initiate a DM. This is nonsense

— 2025-07-16 —

0x: As a developer, I am very interested in the Ton Network.

Kasra: Hello Im using checkSignature in tact and giving it a hash, a signature,  and a public key to check But its returning true for any signature,  even those i signed with a different key

&rey: Code example? (reply to 154198)

Kasra: when i change the privateKey in my backend, but use the old public key in tact, it still says "sig good"

Kasra: i can provide the full code if you want, i removed most of the code for sending it here

Leo: Just provide full code

Leo: And are you testing with sandbox or on-chain?

Kasra: on testnet (reply to 154206)

Kasra: its too much can i send you im dm? (reply to 154205)

Leo: you can first send the tx id on testnet so we can check (reply to 154208)

Kasra: ok wait (reply to 154209)

Kasra: it got fixed, no worries bro thanks for trying to help there was a bug in tonkeeper it was showing sig good in the preview  when i sent the transaction on tonviewer its correct (reply to 154209)

&rey: It is not a bug. It allows to emulate what you will send to the chain without actually signing that potentially-malicious transaction. (reply to 154211)

Kasra: ooh thats good to know thanks bro and sorry for taking your time (reply to 154212)

Nazrawi: Hey there guys, I'm Nazrawi. Can I share what I'm building?

Maaz: is the repo correct and official ?

&rey: https://github.com/ton-blockchain/ton is, indeed. You are welcome to check files on VirusTotal. Windows might complain because of absence of MS-offered certificate. (reply to 154258)

Maaz: ah sad I need to turn off the settings .thanks btw! (reply to 154260)

Artem: Hi! Are there any simple ways to quickly set up a DAO or multisig in Telegram using TON? Like a web app where you gather people in a couple of clicks and manage a shared wallet together. How realistic is this technically — and what do you think of the idea in general?

— 2025-07-17 —

TON Bounty Bridge: ​Educational material: Understanding nativeReserve with TACT examples and tests  🏷 Education  Summary:Create simple and clear educational material that explains hownativeReserveworks on the TON blockcha...  Created by nerses-asaturyan

Энд'и: Can someone tell me where in fragment you can see that someone wants to buy my nickname?

ᅠ ︎ ︎ ᅠ ︎ ︎ ︎ ︎ ᅠ ︎ ︎ ᅠ: I need 20 urgently TON Test coins

ᅠ ︎ ︎ ᅠ ︎ ︎ ︎ ︎ ᅠ ︎ ︎ ᅠ: Help

ᅠ ︎ ︎ ᅠ ︎ ︎ ︎ ︎ ᅠ ︎ ︎ ᅠ: Where to get 20

Anonymous: For what

&rey: They are offered in tonconsole.com if it's that urgent. (reply to 154352)

— 2025-07-18 —

Zin.TON: How can I get some grants for my Community?

Kasra: I didnt find any option to get testnet ton on this website (reply to 154360)

&rey: It should be accessible. tonconsole.com/faucet, more precisely. By the way you would've accumulated those 20 testnet TON by now from the common faucet. (reply to 154376)

TON Bounty Bridge: ​Meta5  🏷 Resource  Summary:آموزش  Created by maj88

Andrey: Good day to all. I have connected a TG Analytics SDK to tg mini app. Can someone advise where this analytics can be checked by users? any cabinet or maybe telegram bot where analytics will be received?

Ad: Hey, i have a difficult time understanding the doc to compute a msg fwd-fee based on the message Boc. can someone point to some code or article?

Alex: I personally didn’t find it 😄 (reply to 154387)

Andrey: so am I (( did you add custom events on buttons? I have read documentation but not clear if this SDK has integrated methods for events call inside components. In example user click on button and some custom event has been sent. (reply to 154392)

Alex: Nope, I just use it because it was required by telegram app catalog (reply to 154393)

EnCryptoknight ⚔️: does telegram allows multichain wallet creation on miniapp

Jimmy: No, Telegram Mini Apps cannot directly create multichain wallets. Telegram's integration with Web3 is primarily focused on the TON (The Open Network) blockchain. While Mini Apps can integrate blockchain features like cryptocurrency transactions and wallet connections, they are restricted to using the TON blockchain and TON Connect for interactions with other apps. (reply to 154396)

EnCryptoknight ⚔️: But OKX and bitget operates regardless of this policy (reply to 154397)

tete: Hey there, I'm trying to use TON lib for Python bit can't get a LiteServer to respond. Any hints?

tete: Tried to run examples in GitHub's TonDevStudy repo.

&rey: Try different ls indices. Some of them will not answer indeed. (reply to 154408)

tete: Tried all indices and ridicule timeouts but had no luck. For the record, using testnet config.

tete: Is it expected to have some failing and some not?

Defi Fomo: Hi everyone I decided to write a dapp with translation of nft item to contract. Can you tell me if it's possible to translate nft item inside dapp? https://docs.tonconsole.com/tonapi/cookbook/working-with-nfts I didn't find it in ton api.

Daniel: What do you mean by translation? (reply to 154464)

Anonymous: Greetings programmers! Can someone help me send ton transactions through python?

tete: Already asked it today but there doesn't seem to be much room for those questions... (reply to 154466)

tete: Search this repo, you'll find examples, but I can't make them work. (reply to 154411)

&rey: Basically, await wallet_contract.transfer(destination=..., amount=..., body=..., state_init=...) from pytoniq, or something like that from TonUtils. (reply to 154466)

tete: Tried that but no LiteServer replies back. At least in testnet.

Anonymous: Should I get a webhook in ton console if my telegram bot is running on a server/ webhook?

Андрей: I’m the developer of the Go SDK for TON Connect 2.0 (can’t share the link there, but it’s the Cameo Engineering repository).  Just a warning: there are two GitHub repos out there copying our code but with obfuscated functions that download suspicious binaries from shady .icu domains.  Make sure you know what you’re installing. To my knowledge, there aren’t any other reliable public libraries like ours available right now.  I’m banned from the main Russian community, so please help spread this warning there.

— 2025-07-20 —

Code: I just heard of Tolk… so there’s now both Tolk and Tact?   Which one do you guys recommend I use as a new TON dev?

Gustavo: So many attackers I'm also suffering a scam 🥹 (reply to 154494)

&rey: IMHO Tolk is better in that does not mask the blockchain-related parts. Tact does, and it works until it comes back to bite you (e.g. if you forget that you cannot call get-methods of other contracts). (reply to 154558)

yo boy izu: Hi , I'm a Ton user and would love to test your games .I can report bugs and give feedback . please let me know if you need beta tester

H1Xploit: How to decrypt to produce public key?  {"deviceEncryptionPublicKey":"30820222300d06092a864886f70d01010105000382020f003082020a0282020100eac29afcc11310df7d885fa09e6c3b3412335f9d2cf0c4b280225f0d8e92470ee2d77378d1d33bdd527f6823b6d9b132d77309ee1e9d328262338c889b84b90ba19404832d5e55328a391ee96e1046c042864ab21ec09b1ca4a736f8f89c847c55f21db1066738fc6a28c20e6ea8171f4c11f2ec373e9c3f9040b595966a0188283472d7d94d9c38cf77cd9db5a2b6c02da1b1fc09ee5645243c06cecad9958d44ee54130cb4d3f63dab2b30a436c8285308ed181921646936c9a442a6d4ea6b5fc3e3c9b3a6c06e561c5038422995a8d33e7c1b1b06c1f5d1604eb11555db8a3ef7c3cf57a74611be263306ad0594e090959f1d45007a411241128b5f505345953034a6ffebe59fa35d5a74f2d6fb85de3d60211d2645557b37b5b5063587cdbb3092dce83fa011ca5b568cf31634f23e65c75692ce8e7cbc90be596c19ec98b7adb7b4df311ac91e41a3d7ea7b01bd52e8c59b7ec175103d3be8d116040a1de2b14a642c62b625fea83b457e6fb53f480c65ca352e8eb4172140238e1ab899bbd8f9177e7ac02bc01738f1a73e7e4b2e553a152b5c2781157b54a50816b01549ceb91cd2ce3cc1af706e035d3cc1410475c984651e69ada9702b8a80cf776136d7772600c14ede4e01ebe63d0febb65562de2faa5f91e5c29e2c5e9f85e426bea1b6b916f2caaad441a92bfebb993f2956efcc4481e1e355a7453f881eaa6d0203010001","externalId":"tonspace-yLNvXpXbHfoyMedo"}

Gleb: Hi guys. Func, tact, tolk - what is the point of making so many programming languages for one blockchain? why can't we just focus on one option?🤦‍♂️

5b 44 43 54 5d: func ❤️ (reply to 154587)

Not: func is more high level or something (reply to 154587)

🐱: More info please (reply to 154494)

Erfan: Each exist for a purpose and a point, with specific benefits and drawbacks. (reply to 154587)

&rey: FunC is not receiving further features. It will be soft-deprecated in favor of Tolk. (reply to 154587)

Robb: Man do you maybe know was Snoops drop meant to be a one-time promo thing or is he planning to stay involved with TON in any real long-term way? (reply to 154596)

Vinh: /stat@combot

Combot: Total messages: 154617

— 2025-07-21 —

DARK ANGEL: Advise what language to learn after Python (I want to write backend for web applications, api, etc.)

jennifer: golang (reply to 154627)

kevin: Golang +

Mojisola🍅 🍅: use python. have you heard of flask, Django (reply to 154627)

Ivan: Hello. Where can I see the docs for deploying the Highload Wallet V3 contract? The official TON Docs has the bare minimum of information, maybe someone has a ready-made solution

Daniel: https://github.com/ton-blockchain/highload-wallet-contract-v3 (reply to 154636)

Алина: Does it matter, transaction-duration-vise, if I use TON from Japan? There're some nodes here, are they going to produce blocks in a lagging-behind-way because of the big ping with Europe where most nodes are located?

5b 44 43 54 5d: C# (reply to 154627)

&rey: Other than some milliseconds to receive your external message, it will work the same. After all, connection to you is no longer required to compute all the transactions. (reply to 154638)

&rey: if you know the list of features beforehand, you should also check out Rust (reply to 154627)

Алина: The miliseconds you're talking about are the ping from me to the closest validator/liteserver? (reply to 154640)

&rey: To the main bulk of them, I would say. If you're sending the external to a Japanese server, it still has to be broadcasted in the overlay. (reply to 154642)

&rey: Essentially, the external needs to meet collator/validator producing one of the next blocks. More often than not, this node will be in Europe as the main bunch of them is.

Алина: From my observations, the collator is queued in a first-in-first-out way so I get a sense that it'd suck to send externals from Japan

&rey: Did you check message stats in practice, though?

Алина: message stats? (reply to 154646)

&rey: Time to mempool (though that is imprecise because Tonapi only checks at their nodes which are not in Japan), time to inclusion (even less precise because of block interval), drop rate. (reply to 154647)

Алина: Sounds like a good idea to test these, will do probably! (reply to 154648)

TON Bounty Bridge: 📊 Update Digest!  🔍 Active bounties: 11 ✅ Approved bounties: 0 🔄 Bounties seeking suggestions: 35  📣 We value your feedback! Join the community discussion and participate in shaping the future. Click the 'Create Your Own Bounty' button to get started.  Happy contributing!

DARK ANGEL: Yes, of course I know, but Python is quite slow and I decided to learn a more complex and faster language (reply to 154635)

Алина: javascript is the most powerful language ever (reply to 154656)

Mojisola🍅 🍅: python is not slow.  have you reasoned why python is popular In AI, machine learning (reply to 154656)

&rey: because it merely invokes C or GPU-bound code which does the computations at hand.  That's somewhat off topic, isn't it? (reply to 154658)

&rey: We do not have a project bringing GPUs to TON after all.

DARK ANGEL: In AI, the speed of the language is not important, and python is used because of its simplicity (reply to 154658)

E_crypt: Hello guys

E_crypt: GM, so happy to be here with you all. Am Floki

E_crypt: Am writing a smart contract to mint a solbound nft   Please is there any tool that can help me for easy debugging?

&rey: Perhaps retracer.ton.org? (reply to 154673)

E_crypt: Thanks sir (reply to 154675)

E_crypt: Please am still learning the ton language, and have been failing most of the test scripts I wrote. Can any here personally help me? I will really appreciate 🙏 thanks

Teers k 🐾: https://docs.ton.org/v3/guidelines/web3/ton-proxy-sites/how-to-run-ton-site  Alternatively, you can run the proxy in simple mode with an .adnl domain if you do not have a .ton or .t.me domain:  Is that means i can use name. t.me as TON html5 site or nah?

Teers k 🐾: if user opens "name. t. me" to open a website, is this possible?

Teers k 🐾: In simple i wanna use "name.t .me" as domain for my website

&rey: Yes, if that username is an NFT (as converted via Fragment). (reply to 154680)

Teers k 🐾: Is this command enough? ./tonutils-reverse-proxy-linux-amd64 --domain name.t.me (reply to 154684)

Teers k 🐾: Or another way to .tme

&rey: It should be, though I don't remember. Does it output any error? (reply to 154685)

Teers k 🐾: Let me try (reply to 154687)

Teers k 🐾: It works but i have no idea where put html

Teers k 🐾: tonsite://xxxatom.t.me

&rey: Telegram should open such link. (reply to 154693)

Дима: Hey! Need a quick favor 🙏 I'm listing a Telegram username on Fragment for 4600 TON — serious buyer is ready, but I’m short on the 5% listing fee (~230 TON). Happy to return it immediately after sale, even with a small bonus or fee 💸 DM if you can help — everything transparent. Thanks in advance!

DeFi: thats a scam (reply to 154700)

Дима: realy? (reply to 154701)

DeFi: Of course. Why would anyone pay that amount for that name?!?!

DeFi: listing on fragment doesn't require paying the commission in advance

Non Certain: Bro you are the scammer here. You just want to get the money and block him. (reply to 154703)

Дима: This person recently wrote to me and everything looks quite convincing

Oleg: Check url (reply to 154714)

Tolqin.rs: 100% scam . Fee will be taken from amount of deal (reply to 154714)

DeFi: Its not convincing at all. You should never have to pay a commission upfront. That's the scam. You pay the money then you never get the rest. (reply to 154712)

Teers k 🐾: That url never loads (reply to 154751)

Teers k 🐾: Looks good

Teers k 🐾: It only works in telegram browser tonsite:// url not in normal browser or while sending message

Teers k 🐾: tonsite://xxxatom.t.me  This url non clickable telegram should work on it

— 2025-07-22 —

Teers k 🐾: Is that ton domains works in telegram bot webapps?

Combot: Combot has warned Maxey Liu (1/3) Reason: Word **** is not allowed

Maxey: Hi TON developers! 👋 I recently built a Role Authority System for TON smart contracts using Tolk, and I’d love to get your feedback!  💡 Key Features: - Supports up to 256 roles for permission control, using efficient bitmask operations (inspired by Solmate)  - Permission check passes if any of the following is true:     1. The opcode is public (Public Capability)     2. The caller has the required role (Role Capability)     3. The caller is the contract owner  - Two-step ownership transfer with a built-in timelock for added security  ❓ Why I built this: Since 2023, I’ve been building on TON and found myself rewriting similar permission logic and tests again and again.   This module aims to solve that by making permission control more standardized, efficient, and secure.  ⭐️ GitHub Repo: https://github.com/ipromise2324/tolk-auth  Happy to chat more if you have questions 💬

Somyaditya: Hi guys, I need some help creating a transaction monitoring system for my application. I want to monitor smart contracts and wallets that initiate transactions from my platform. Is there any alternative to Tenderly?

&rey: The commonly suggested system is https://github.com/gobicycle/bicycle. Actually, I did not know of the one you mentioned. (reply to 154805)

MBA: Hey guys I am trying to create a LiteClientApi using c# the only resources I found was TonSdk.Net and I think they don't support trust checks for liteservers. I wanted to know is it necessary to do trust checks and proof checks for different adnl responses from liteservers or I can trust official liteservers (https://ton .org/global.config .json) and their responses?  And how can I be sure that account state and list of transactions a liteserver is giving to me can be trusted?

&rey: Generally speaking, you should not. What if key got leaked? (reply to 154852)

&rey: The easiest way IMO would be by reimplementing pytoniq.

MBA: So what is the best way to trace an account on blockchain and be sure that the data I am getting is 100% correct? I want to trace events being emitted in tact contracts and also some other transactions to check if I really received x amount of y token/ton. (reply to 154854)

— 2025-07-23 —

Code: Will there be docs for TOLK soon?

Code: Actually why did TON announce Tolk without proper docs

Dmitry: Check several litesavers and compare their responses? (reply to 154856)

Punk: Maybe they need more time to actualised their docs (reply to 154876)

Code: doesnt answer question - i mean why launch if its not ready

Punk: Idk, sorry

&rey: Would there be any benefit to waiting? Now, big teams are already able to rewrite their contracts into Tolk to demonstrate its effectiveness, there is just enough information; otherwise, core team would have to do all the examples. (reply to 154904)

Artur: Hello everyone! How can I calculate init state of a contract in FunC? In Tact I need to import that contract and do smth like let init: StateInit = initOf ContractName(...)

&rey: begin_cell()   .store_uint(6, 5)   .store_ref(<code cell imported in some way>)   .store_ref(<serialized initial data cell>) .end_cell() (reply to 154966)

yo boy izu: Does anyone to coding here I'm new to it

&rey: This is chat about development on TON, yes. https://docs.ton.org/ is docs about same. (reply to 154969)

Artur: Sorry for a stupid question, but how do I import contract code in FunC? I have this layout:/contracts   ├── contract_1.fc   └── contract_2.fc I want contract_1 to be able to deploy contract_2, but I’m not sure how to get access to the code of contract_2 from inside contract_1. In Tact, I’d just writeimport "./contract_2"; … let init_of_contract_2: StateInit = initOf Contract2(); What’s the FunC way to do this? (reply to 154967)

&rey: You would compile contract2 on its own, obtain .boc binary file, encode it as HEX... (reply to 154971)

&rey: then create a function cell contract2code() asm   "B{B5E9...}"   "B>boc PUSHREF";

Artur: Thank you! (reply to 154973)

— 2025-07-24 —

Combot: Combot has warned Kam G (1/3) Reason: Word **** is not allowed
