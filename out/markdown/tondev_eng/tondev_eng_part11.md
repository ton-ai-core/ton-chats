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

Devsyn: Does anyone here knows how to scan qr codes inside telegram mini apps?

Devsyn: I want to create a feature that the user can scan a qr code

Devsyn: I tried using conventional libs like html5-qrcode, react,-qr-scanner but they crashes when try opening inside the mini app

&rey: I believe that is https://t.me/devs/125953. (reply to 154998)

Devsyn: I'll try this

Devsyn: Thank you

Maxey: Has anyone successfully used LayerZero to send messages between TON and Ethereum?

Devsyn: It didnt work for me (reply to 155000)

Devsyn: Im using react

&rey: It seems seriously wrong. Have you already tried to debug your miniapp, opening its console?  The appropriate chat for this is, as it happens, not this one but https://t.me/devs. (reply to 155006)

phuoc: Hello everyone, I need to get the jetton transaction history of an address, but currently I can only get the TON transaction history and the jetton transaction fee.

phuoc: Does anyone have a link to this tutorial or sample code in javascript? Thank you very much.

Lase: So guys

Lase: I have finally understood building smart contracts with TACT and i am integrating it with react.  Whilst testing with jest, i could check transactions and verify them, see dump or emits.  But in the real client (the max i get is hash or an unclear message)

Lase: My main question: How do i verify that a transaction went through or failed. Or is still pending? (reply to 155022)

Lase: The best i could think of was using a getter and polling for 10s. Seems bad to me.  What do you all think i should do? (reply to 155023)

&rey: For backend or frontend? (reply to 155023)

Lase: I am trying to do it on frontend (reply to 155034)

&rey: Well the common way is to send transactions which never fail dynamically.

Lase: How? (reply to 155037)

&rey: Check invariants before sending.

&rey: Generally, you could track down all actions from the external. That is complicated if user sent 255 requests to your contracts at once.

Lase: Exactly (reply to 155040)

Lase: Did this (reply to 155039)

Lase: However, in frontend. My goal is to tell user: loading, failed or successfully here

&rey: TC2 returns an external. You can obtain its normalized hash.  Until that hash appeared onchain, the result is "loading"/"pending". When it appeared, "will complete sometime".

Lase: Nice (reply to 155045)

&rey: Then, you have to define what effect you're looking for, to even say what "success" is – e.g. if jetton transfer notification is not handled, is it OK?

Lase: So. I should get hash before transaction.  Wait for it to appear on the list of transactions,  Then check the contract if my jettonWalletChild was deployed

Lase: This correct/possible? (reply to 155048)

Pavlo: Hi everyone, I’m trying to figure out how to send a Gift to another user using gram.js.  Specifically, I want the sent message to contain MessageActionStarGift in the message.action. If anyone has an example or can explain the correct way to do this (possibly using CustomMessage), I’d really appreciate the help!  Thanks in advance!

&rey: Wrong chat. (reply to 155054)

best: why wrong? (reply to 155055)

&rey: This chat is about development on TON: smart contracts and related services.  Sending gifts via custodial-like interfaces is out of scope because TON does not occur there in any way.

Anthony: 🚀 Tolk 1.0 – The New Standard for Smart Contracts on TON Blockchain!  Are you wondering which language to use for building on TON? 🤔 Tolk is TON Foundation’s recommended choice, and it’s here to elevate your smart contract game!  🔹 What’s New? Tolk 1.0 combines modern syntax and a streamlined experience with the performance and control that TON developers demand. It builds on FunC’s foundations, making smart contract development cleaner, more expressive, and more efficient.  🔹 Why Tolk? • Primary language for TON smart contracts • Modern syntax + cleaner structure • 40% less gas compared to FunC – cheaper deployments! • 🛠 Full tooling, IDE support, and migration from FunC  Tolk brings you better performance, easier coding, and lower costs while keeping the control you need. Whether you’re new to TON or scaling a complex app, Tolk is the go-to choice for TON development.  Start coding with Tolk today and build the future of TON! 🧑‍💻 (forwarded from TON Dev News)

TON Bounty Bridge: ​Jetton + Vesting Factory in Tolk (TON Launchpad Tooling)  🏷 Developer Tool  Summary:Develop a smart contract factory using Tolk, TON's new contract language, to deploy Jettons with bui...  Created by 0xfdbu

Vadim: Hi, could someone please advise on the quickest way to detect when a transaction is completed? I tried using the TON Center API (/getTransaction), but there seems to be a 5–10 second delay after the transaction actually completes before it's returned.

— 2025-07-25 —

Леша: Parse all incoming blocks (reply to 155106)

Vadim: Thanks. I’ll check, but suppose /getTransaction does the same. (reply to 155126)

Teers k 🐾: Is it possible to add my own .tlds to tonsite:// ?

&rey: That could be delay for block to be signed after generation, and then sent to Toncenter's liteservers. (reply to 155106)

Vadim: I see, thanks. Is there any way to mitigate this delay? For example, is it possible to get a block that has been created but not yet signed? (reply to 155139)

&rey: That's a risk in terms that an alternative block-candidate might be signed then. Anyway, it probs requires you to be one of the validators. (reply to 155141)

Vadim: Thanks a lot for your answers. (reply to 155142)

Алина: How is overlay sped up in the latest TON updates?  Are these updates only for the private overlay or do they affect the public overlay too?  Is there's anything the client listeners of the overlay must change in their code?

Heydar: Why do some addresses (contracts) in tonviewer have code (like func) but some don't! And something like rawData is ByeCode.  Can I see their code too?! In func? So how can I be sure what their code was?!!!!

Леша: Coz not all contracts published their code. (reply to 155164)

Heydar: so I dont trust so many Services on TON , is not that right?! (reply to 155165)

Леша: Its your choice (reply to 155167)

Heydar: and it's not a blockchain's goal. (or better to say: not contract's goal)

Леша: It isnt problem of ton blockchain

Леша: Every smartcontract in every blockchain have right to dont publish their code

Heydar: Absolutely your right sir, thanks Im saying that, because so many DEXs, and other platforms have this road ... and they are hiding their smart contract codes :)) (reply to 155171)

Andrey: When smart contract is executed there is no func code. If you really want to verify a smart contract code you must inspect their bytecode. Most reliable way is to decompile it yourself, however you can use tools like ton verifier: https://verifier.ton.org/Ef9P69sU4AgSWniwHUGts1BYTIyYPVlUCN-2Vb1BmeRxW1sl, or view disassembled code in tonviewer (reply to 155164)

Heydar: is that an official way to detect the real code(Open source project?), or it's just some tools by third party invented? (reply to 155181)

Andrey: If you look at their github, they’re part of ton-blockchain org. I guess this makes them official. The most reliable way is to still validate smart contract yourself before sending money to it (reply to 155184)

Heydar: thanks, I dont think so, Im looking ...  but how by myself?! I cant understand that part, how I can be sure that bytecode is correctly that smart contract I need!  because I just understand FunC or Tact (reply to 155188)

Andrey: If you can contact author you can request source code, compile and ensure that it matches whatever is stored on chain. Otherwise the only way is to learn bytecode. You can search for fift and TVM instructions (reply to 155189)

Juan: Hi guys! is anyone deploying and adding liquidity contracts into STON FI router in TESTNET? I’m having a lot of problems to test they

Heydar: after so many years we have not well-decompiler for OS's byte codes 😐  so the only way is to having the source code, or using some low-precision third party tools. thank you so much for the link (reply to 155190)

Andrey: No, having source code is one of possible ways. There are others, for example you can hire an expert to run security checks on smart contract. This is about estimating risk of smart contract being malicious and choosing a way to mitigate it. (reply to 155192)

Heydar: it's not 100%, you just just have to writing tests , and it's never 100% proofing even on clear source codes you forgot some edge cases too. (reply to 155195)

Albert: Yes ping me (reply to 155191)

Juan: Take care with this guy is a scammer (reply to 155202)

Albert: You're the scammer (reply to 155203)

Albert: He is a scammer

Combot: Combot has warned Albert (1/3) Reason: Word **** is not allowed

Juan: Yes a guy to say ping me judging a guy who make a technical question, take care guys (reply to 155204)

Juan: Dont talk with him on private.

— 2025-07-26 —

LowKey: GM. Who can I contact regarding the main TON website?. We would like to include Gem Wallet on the page about USDT transfers.

LowKey: I cannot share links, but it is the page about "USDT on TON"  Gem Wallet is already in the list of wallets. Just want to be included on this page too.

Mahrukh: My bridge transaction stuck t No one is help me or resolving issue

woogieboogie: Hey guys - new to TON here. heard tolk will be the futureproof language so decided to start ton language learning w/ Tolk. But the problem is - How and where do I learn tolk? is the official doc only documentation available to learn this?

Juan: hello! im using Tact now, but i have the same question :) (reply to 155227)

Juan: after 2 days with problems, first automated LP <3

woogieboogie: did some testing & learned the language tbh - think it's a good language and feels comfortable if you've tinckered around w/ typescript & rust - but simply don't have resources to learn from

Andrey: Could you please clarify which topics do you think should be covered, on top of these? https://docs.ton.org/v3/documentation/smart-contracts/tolk/language-guide (reply to 155227)

woogieboogie: language-wise has everything there but lacks - examples other than the counter example. Wish there were example contracts to follow along

Andrey: You can try contracts here: https://github.com/ton-blockchain/tolk-bench (reply to 155237)

LowKey: Reposting my question:   Who can I contact regarding the main TON website?. We would like to include Gem Wallet on the page about USDT transfers.   I cannot share links, but it is the page about "USDT on TON"  Gem Wallet is already in the list of wallets. Just want to be included on this page too.

&rey: Probably email someone... I do not remember the mailboxes beyond partnership@ton.org. (reply to 155214)

LowKey: ok thanks

Devsyn: I found a solution! Thanks for everyone who helped me. (reply to 154997)

— 2025-07-27 —

Mahrukh: No reply (reply to 155218)

woogieboogie: this works. thanks (reply to 155238)

Kosta: Someone please tell me how to use this thing? Ton hub

— 2025-07-28 —

丂卂丂ㄩҜ乇: I was trying to add paayment to my Telegram mini app.  Does someone know how to integrate ton payment and star payment to telegram mini apps plz help

🇵🇸: you need to use https://core.telegram.org/bots/api#createinvoicelink and call  window.Telegram.WebApp.openLink(invoice_link); (reply to 155288)

丂卂丂ㄩҜ乇: Thank you but can you give me example code for the star payment Please or can I ask you in dm (reply to 155289)

🇵🇸: also you need to answer pre_checkout_query update  otherwise payment will not succeed.  https://core.telegram.org/bots/api#answerprecheckoutquery (reply to 155289)

丂卂丂ㄩҜ乇: Okay bro thank you 🙏 I'll try it now (reply to 155291)

MemoryGrinder: Hello, I try to use the getTransactions endpoint of the rpc http api While it does give me the latest transaction, I can't manage to get it working when passing a hash, LT and to_lt parameters Can you please explain what values should I input ?   I used the transaction hash of a tx before the one that I try to retrieve and a to_lt way after However I get this error :     "ok": false,     "error": "LITE_SERVER_UNKNOWN: cannot locate transaction in block with specified logical time",     "code": 500 }

Danila: Hey guys. Probably you can help me. Why bounced incoming transaction decreases my balance?  Steps to reproduce: 1. Deposit 0.03 TON to a new address A 2. Get spam incoming transaction to address A 3. The transaction is bounced 4. Balance of address A is decreased by 0.000000002 TON  Address: UQDQJ7vS5zl-vfAGzmVeoKtI9dbeARnZr7GwJQIKE8RUog1r

Gyorgy: If you look at the transaction, it makes it seem like you sent it and the explorer is showing the fee being deducted from you. But it’s actually a smart contract execution.  I think it's just an indexer / explorer display error.   It’s a tricky payload, and looks like you started a transaction that bounced and failed, while the same incoming tx also had an outgoing payload injected, which failed. (reply to 155301)

Sad Bun 🐇: hi! need help  i'm calling jetton get_wallet_data for tether jetton wallet  toncenter returns this string as a cell bytes for jetton wallet code - te6cckEBAQEAIwAIQgKPRS16Tf10BmtoI2UXclntBXNENb52tf1L1divK3w9aCBrv3Y=  request below  curl -L -X POST 'https://toncenter.com/api/v2/runGetMethod' -H 'Content-Type: application/json' -d '{"address":"EQDiX6BVd5iV3RTUg_ZkgijPH9vABFTF4bqb3eYs0ZfaTxRo","method":"get_wallet_data","stack":[]}'  but explorers return slightly different cells  this is from tonviwer - te6ccgEBAQEAIwAIQgKPRS16Tf10BmtoI2UXclntBXNENb52tf1L1divK3w9aA== https://tonviewer.com/EQDiX6BVd5iV3RTUg_ZkgijPH9vABFTF4bqb3eYs0ZfaTxRo?section=code  and from tonscan - te6ccgEBAQEAIwAIQgKPRS16Tf10BmtoI2UXclntBXNENb52tf1L1divK3w9aA== https://tonscan.org/jetton-wallet/EQDiX6BVd5iV3RTUg_ZkgijPH9vABFTF4bqb3eYs0ZfaTxRo#source  is it ok? perhaps, encoding issues or some other boc nuances that i don't get  or is it a toncenter's bug?

Никита: Hello everyone! Please tell me how to fix the error in @ton/crypto. When generating a mnemonic, an error occurs  TypeError: Cannot read property 'derive' of null react-native-fast-pbkdf2 is installed, and the Buffer polyfill is enabled  (Expo, React native)

Madara: Hi guys

Madara: Tonkwallet added usdt trc20. I want to leave some deposit there so I need to know what is the commission for transfer generally?

&rey: Nothing easier: that's storage fee. (reply to 155301)

&rey: It is paid from contract's balance, not from transaction carried value, as this option is most seamless for contracts: bounced messages have a fixed value, while contract's total due including its next transaction remains constant as well.

Willy: https://tonviewer.com/UQDQJ7vS5zl-vfAGzmVeoKtI9dbeARnZr7GwJQIKE8RUog1r  I believe it really IS an explorer problem. Tonviewer seems to calculate correctly and does not subtract 0.0000002 from receiver balance (reply to 155301)

&rey: Raw blockchain happenings: (reply to 155318)

Willy: Can you explain, please, how this happens?  You mean if you spam enough you can drain any walletW5? That does not seem right. I thought gas fees must be subtracted from incoming TONs in this scenario. As in smart contract code you can see, is there enough TONs or not. In this case it is sure to be enough TONs for SC gas fee (reply to 155319)

&rey: First of all, you have an uninit address with some balance. It does not mean you have a claim to 0.03 TON. It means that you have a claim to 0.03 TON minus (storage fee rate) * (time since deposit). (reply to 155320)

Willy: Oh  You mean that the owner did not use his wallet for a long time and now his wallet needs to pay the system an additional 0.00002 fee? (and it doesn't matter who was the initiator of TX, just that time passes -> more storage fee. Just in this case it is the spam bot who was the initiator of system fees being subtracted.) (reply to 155321)

&rey: Exactly! (reply to 155323)

Willy: Thank you so much! (reply to 155324)

Willy: Really appreciate what you're doing in this chat ;) (reply to 155324)

Ackermann: receive(msg: SendOnboardingReward) {         require(msg.zipp <= self.zippBalance, "Insufficient zipp token balance");         require(msg.oreva <= self.orevaBalance, "Insufficiant oreva to claim" );          require(self.zippWallet != newAddress(0, 0), "zipp token Jetton wallet not set");           require(self.orevaWallet != newAddress(0, 0), "oreva token Jetton wallet not set");          let zippBody: Cell = JettonTransfer {             queryId: 0,             amount: msg.zipp,             destination: msg.recipient,             responseDestination: myAddress(),             customPayload: null,             forwardTonAmount: ton("0.05"),             forwardPayload: beginCell().storeUint(0, 1).endCell().beginParse(),         }.toCell();          let orevaBody: Cell = JettonTransfer {             queryId: 0,             amount: msg.oreva,             destination: msg.recipient,             responseDestination: myAddress(),             customPayload: null,             forwardTonAmount: ton("0.05"),             forwardPayload: beginCell().storeUint(0, 1).endCell().beginParse(),         }.toCell();          send(SendParameters {             to: self.zippWallet,             value: 0,             mode: SendRemainingValue,             body: zippBody,         });         self.zippBalance -= msg.zipp;           send(SendParameters {             to: self.orevaWallet,             value: 0,             mode: SendRemainingValue,             body: orevaBody,         });         self.orevaBalance -= msg.oreva;          send(SendParameters {             to: sender(),             value: ton("0.05"),             mode: SendRemainingValue,             body: SentOnboardingReward{ recipient: msg.recipient }.toCell(),         });     }   Whenever i send a message to this receiver, I send 0.3 and i still get exit code 37 : Insufficient Ton. can anybody help?

&rey: 1. You cannot use SendRemainingValue more than once. 2. Sending value: ton("0.05"), mode: SendRemainingValue is even more suspicious.  Please write down how much TON do you want to be sent each route. (reply to 155327)

Ackermann: each route is a jetton transfer of two different tokens to the same recipient, I think 0.1 ton should do for each route?

Willy: I have an additional question, if you don't mind.  Does this work almost the same with initialized contracts?  I mean if I have walletW5 and I don't use it for 1 year and then someone sends me msg -> my contract will pay some storage fee itself, right? (reply to 155321)

&rey: It might, yes. So you can write  — nativeReserve(0, 4); — value: ton("0.1"), mode: 0 — value: ton("0.1"), mode: 0 — value: 0, mode: SendRemainingBalance (reply to 155330)

Ackermann: It didn't work (reply to 155333)

&rey: Hash of transaction, or are you checking in sandbox? (reply to 155341)

Ackermann: https://testnet.tonscan.org/tx/dec607bae745f5fa01d64d6f63b5347f2ea0d91e7435f519f2f7eeba6c3b4606

&rey: SendRemainingBalance in the last message, not SendRemainingValue. (reply to 155347)

Ackermann: Okay then (reply to 155348)

Ackermann: worked

Madara: Question

Madara: Tonkwallet added usdt trc20. I want to leave some deposit there so I need to know what is the commission for transfer generally?

&rey: What app exactly? The thing built in to Telegram, https://wallet.ton.org or something other? (reply to 155359)

Moaad: I'm working on project i want to launch on Ton Blockchain i need to partner up with Ton Blockchain who should i contact?

&rey: There is no such thing as "partner with the blockchain", it is The Open Network for a reason.  You can contact TON Foundation at partnership@ton.org. (reply to 155364)

Moaad: Thanks 🤍 (reply to 155365)

— 2025-07-29 —

Heydar: How its possible to encrypt message while just on both sides (sender, receiver) can decrypt!? I mean is the core using private keys to encrypt!?

Mojisola🍅 🍅: I think the receiver public address is used to encrypt so only the reciever can decrypt the message or so (reply to 155374)

ANDY: Hello guys

Anthony: ✈️ TON Connect v2.2.0 — Sign Data Support  We're excited to announce that Sign Data is now officially supported in TON Connect v2.2.0! This feature allows dApps to request signatures on arbitrary data — ideal for authentication, message signing, and more.  We kindly encourage all developers to explore and integrate this powerful capability into their dApps.  🛡 New method: signData • Supports text, binary, and cell data types • Enables secure off-chain data signing  📁 New package versions   • @tonconnect/protocol 2.3.0   • @tonconnect/sdk 3.3.0   • @tonconnect/ui 2.2.0   • @tonconnect/ui-react 2.2.0  🖌 Example usage  const result = await tonConnectUI.signData({   type: "text",   text: "Confirm new 2fa number: +1 234 567 8901" });  console.log('Signed:', result);  ⬇ To update, run npm install @tonconnect/ui-react@latest or npm install @tonconnect/ui@latest  💡 Further reading • SignData request/response specification • SignData documentation  💬 Encountered issues? Please report them on GitHub at https://github.com/ton-connect/sdk/issues.  🎁 Your feedback and usage examples are crucial. Share your experiences to help us evolve the SDK! Special thanks for Tonkeeper Team to helping with this update. (forwarded from TonTech)

H1Xploit: Is there any documentation for the deeplink list? Specifically for tonkeeper. (reply to 155381)

Kiba: You can check this https://docs.tonconsole.com/tonkeeper/deep-linking, but it’s not widely supported (reply to 155383)

Sad Bun 🐇: could you tell please  does sender's jetton wallet attach state init to all its Jetton Internal Transfer 0x178d4519 internal out messages to reciever's jetton wallets?  and that's how jetton wallets are deployed automatically?

H1Xploit: Thanks! (reply to 155386)

&rey: Commonly, a shared symmetric key is derived from peer's public and your secret key, and then used for decryption/encryption. (reply to 155374)

Heydar: Thank you sir Is not that dangerous!??? Can you please refer me the code of TON core(mono c++) for this part? (reply to 155397)

&rey: But blockchain has absolutely nothing to do with that? It's client's app which determines how to encrypt and what binary comment to attach to message.  See: https://docs.ton.org/v3/documentation/smart-contracts/message-management/internal-messages/#messages-with-encrypted-comments (reply to 155398)

Heydar: I was wondering that share something like my prv keys to the receiver  Thank you for the guide. (reply to 155399)

&rey: Public-key cryptography makes that absolutely unnecessary. You may be interested in details of ECDH (Elliptic-curve Diffie-Hellman protocol for key agreement). (reply to 155400)

Mojisola🍅 🍅: got that. (reply to 155397)

Combot: Combot has warned tutanhamon (1/3) Reason: Word **** is not allowed

— 2025-07-30 —

Russia: const walletClass = tonweb.wallet.all["v4R2"];         const walletTon = new walletClass(tonweb.provider, {             publicKey: walletInfo.keys.publicKey,         });  const transfer = await walletTon.methods.transfer({             secretKey: walletInfo.keys.secretKey,             toAddress: new TonWeb.utils.Address(addressStr),             amount: TonWeb.utils.toNano("0.1"),             seqno: oldSeqno,             payload: await jettonWallet.createTransferBody({                 tokenAmount: TonWeb.utils.toNano("79"),                 toAddress: new TonWeb.utils.Address(data.recipients_address),                 queryId: oldSeqno,                 // forwardAmount: TonWeb.utils.toNano("0.1"),                 responseAddress: new TonWeb.utils.Address(                     "UQCwemKHD0mC0hnOYXvLuftnkq4FatjsNSY-0Qyx-oBYVHwI"                 ),             }),             sendMode: 3,         });         console.log("transfer: ", transfer.send);         await transfer.send();

Russia: I want to transfer JETTON from one address to another in TON, however the amount of jetton I want to transfer is 79 GRAM, but on the transaction I see it transferred successfully, but only 0 GRAM. Anyone who knows how to support me with this problem?

&rey: Shouldn't it be jettonAmount: ...? (reply to 155443)

Russia: yes, I want to transfer jetton, token amount is the number of GRAM tokens I want to transfer, i want transfer 79 GRAM, (reply to 155448)

RoDiN: Why?

Akash: Hello everyone! I am looking for an assistant to help me develop smart contracts and, in general, with tasks related to development! I look forward to talking to everyone!

𝕿𝖇𝖍𝖐𝖆𝖗: Hi bro (reply to 13813)

Nick: Issue with TON Payments Integration (Frontend-Side Problem Suspected) Hi! We're integrating TON payments into our Telegram app and have been stuck on a frustrating issue for about two weeks. Sometimes in-app purchases via TON Keeper complete successfully, but sometimes they don’t get confirmed in the app, even though the TON tokens are always deducted from the user and correctly received on our wallet.  We’ve surrounded everything with logs, but the root cause is still unclear. We're now suspecting the problem is on the frontend side. We’d really appreciate if you could connect us with an experienced developer familiar with TON integrations for a consultation.  🧩 Payment System Evolution & Current Flow 🧱 Initial Architecture: Frontend sends a request to backend.  Backend loops through user transactions via toncenter and compares tx hashes.  If the expected transaction is found → success is returned to frontend.  🛑 Problems:  Fully synchronous status check.  Inefficient search logic.  No normalized payloads, no transaction history.  Often the retry would fire before the tx appeared in toncenter, so the transaction was missed, and the purchase status was never updated.  🔁 Then We Rebuilt the Flow: Switched from toncenter to tonapi.  Normalized payloads on frontend.  Introduced async processing using WebSockets.  Built out transaction history with statuses.  📦 New Flow:  Frontend sends normalized payload to backend.  Backend fetches user transaction using tonapi.  Then fetches events from that transaction.  Verifies tx details (amount, sender, recipient).  Updates purchase status.  Sends result to frontend.  🛑 New Issue:  tonapi was slow in parsing transaction events.  Retry would hit timeout before events were parsed, so again, processing was aborted.  📍 Current Setup (as of now): Dropped the event-parsing step.  Flow is now:  Frontend sends normalized payload to backend.  Backend fetches user transaction using tonapi.  Verifies basic tx data (amount, sender, recipient).  Updates purchase status.  Sends confirmation to frontend.  Despite this simplification, we're still occasionally seeing purchases not processed, even though the TON is received. We're looking for someone who deeply understands the TON ecosystem, especially TON Keeper flows, tonapi, and tx indexing delays, to help us audit and fix this integration.  Let me know if you're available or can recommend someone.

Mannie: Check your dm (reply to 155467)

Odd: Can you be clear? (reply to 155467)

Mojisola🍅 🍅: hello, can I hear about tasks and projects you want to do (reply to 155467)

Adam: Dm me, and I can help you with that integration. There are better ways to confirm transactions than just using tonapi. We can confirm the hash returned by tonconnect on the chain to verify the value. Alternatively, the simplest yet most effective solution is to create a new contract for each transaction, which will never fail. However, I can audit the current flow and fix any issues if you’d like. The current flow is good, but it heavily relies on verifying payloads using tonapi. There are some improvements that can be made. One of them is to use liteserver on TON to verify transactions. It’s more efficient than using tonapi each time to verify the external message (payload). (reply to 155477)

Adam: For further audits contact me (reply to 155477)

0xAnthony: you can use webhook instead of send request to backend. Yeah, I faced that problem too. sometimes send request to backend is not happening. so Instead of that, on backend, you can hear all txs on certain address (reply to 155477)

龙💎FollowDragons: {   "url": "https://t.me/holdzillabot",   "name": "Holdzilla",   "iconUrl": "https://save.followdragons.monster/holdzilla/logo.jpg" }  Guys what is the problem with this manifest? On android ton connect is working fine while on IOS - Tonkeeper just opens but nothing happens, and sometimes it gives an error "invalid manifest"...  What could possibly be wrong with a manifest that was made according to the instructions?

Always Polite: Its simple to implement  Use webhook (reply to 155477)

Mojisola🍅 🍅: iOS can be restrictive, if it works well on android, then ensure the url to manifest is available and active (reply to 155497)

龙💎FollowDragons: Its not a problem of the url url is available and active (reply to 155502)

Kiba: Try using a different url, maybe it will work (reply to 155497)

龙💎FollowDragons: Will try, thanks (reply to 155505)

&rey: Also, there might be privacyPolicy or termsOfUse field expected. (reply to 155497)

龙💎FollowDragons: But its not obligatory... (reply to 155508)

Ackermann: Anybody experiencing slow transactions on ton??

— 2025-07-31 —

Aru: Hi everyone!! I have a question.  What are the best practices for NFTs? On the TON blockchain, how is the permanence of NFTs ensured, and who is responsible for paying the storage fees to maintain that permanence?  For example, how long a period of storage fees does the issuer typically pay for at the time of minting? And after that period ends, is it common for users to take over the cost?  I’d like to understand the generally adopted approaches regarding this.

Combot: Combot has warned •matin• (3/3) Reason: Word **** is not allowed

Combot: Combot has kicked •matin•

XXll: Please send me chats for communication

&rey: 0.1 TON is a typical amount. Whether that is enough for several years depends mainly on NFT code complexity. (reply to 155549)

— 2025-08-01 —

Aru: Thank you!! (reply to 155567)

DexfLo: Hello.  does anybody know the approx cost to mint a soulbound token?

Sviatoslav: Transaction fee (gac) ~0.0025TON (less than $0.01)  Reserve deposit by service up to ~1TON (≈$4) (reply to 155590)

DexfLo: thank you very much.

DexfLo: what do u mean by reserve deposit by service?

DexfLo: ah... i looked that up.  thanks

DexfLo: are there any bulk mint "deals"?

Combot: Combot has warned kmao (1/3) Reason: Word **** is not allowed

Akash: Hello everyone! I am looking for an assistant to help me develop smart contracts and, in general, with tasks related to development! I look forward to talking to everyone! dm https://t.me/saykmadhash

&rey: The latter is for compressed NFTs only, IIRC? (reply to 155592)

Anthony: Introducing the Jetton 2.0 Smart Contract  Transfers and operations with Jetton 2.0 are up to 3 times faster under heavy network load compared to jettons of the previous version.  This improvement was achieved thanks to new shardchain optimizations—the jetton-wallet holding a user’s token balance is now always deployed in the same shardchain as the owner’s wallet. This became possible after the TON node introduced functionality to deploy smart contracts into a specific shardchain (StateInit.fixed_prefix_length).  The smart contract is a direct successor of Jetton 1.2—used for popular tokens like $NOT—written by the TON Core team and covered by unit tests.  We would like to thank Andrew G Kiba, a community developer who made a contribution to the contract’s design.  A Tolk-language version of the smart contract will be released later.  https://github.com/ton-blockchain/jetton-contract/tree/jetton-2.0 (forwarded from TON Core)

.none: Hello everyone! Please tell me if there is a convenient way to parse a cell where the data is not known how it is arranged or what its types are.

&rey: Look how it is loaded through Retracer.ton.org, perhaps? (reply to 155633)

.none: maybe, but I don't understand it. (reply to 155636)

&rey: I do not think there is any hope otherwise, especially given FunC++ or whatever your contract is written in. (reply to 155637)

.none: That's also true (reply to 155638)

— 2025-08-02 —

TON Bounty Bridge: ​Airdrop  🏷 Developer Tool  Summary:Airdrop  Created by alirezashayian-max

TON Bounty Bridge: ​TON Portfolio Auto-Tracker Bot (Telegram + Web)  🏷 Developer Tool  Summary:A Telegram + web bot that automatically tracks user portfolio across TON DEXes (STON.fi, Blum Termin...  Created by Smilzo0

Hossein: Hi guys, can anyone help me with that why documents say workchain id is a 32-bit integer but it just has 8-bits length on address scheme?

Combot: Combot has warned Hart Pennyworth (1/3) Reason: 1 reports (reply to 155649)

E_crypt: Were do I learn how to start writing funC smart contract code? Please any link? That can help ? Am solely a beginner who's a C programmer   I'd love to write my first nft smart contract with funC, I need a guild pls   Thanks

Mojisola🍅 🍅: docs.ton.org

— 2025-08-03 —

Hossein: If you're getting started with smart contract development on the TON blockchain, the slide below might save you from reading at least 50 pages of docs and code!

Juan: I think It will be easy for you, if you learn Tolk. (reply to 155670)

E_crypt: Were do I start learning that ? Any docs or link? (reply to 155713)

Juan: Here (reply to 155671)

&rey: *4 bits + a differently-sized suffix with those nanoTONs. (reply to 155712)

E_crypt: The video guides I saw back then was referencing funC. Or has it been updated? (reply to 155715)

&rey: It is generally not worth it to learn writing FunC now. Reading — perhaps, since most old contracts use it, but Tolk has lots of useful and optional abstractions. (reply to 155719)

E_crypt: Ok sir (reply to 155720)

E_crypt: But most of the video explanations here are referencing funC or is it TOLk? Am I the one confusing them to be funC? (reply to 155671)

S: Can a solo dev thrive in the TON community? I'm only asking because of the obsession on teams when filling forms for help or grant

Mubaraak: some help me with writing codes and ton swap

— 2025-08-04 —

Sad Bun 🐇: hi! could you tell please  is the order of messages preserved when sending transfers in batch via v3/v4 wallets?  i mean suppose my external message body cell consists of 3 internal messages  can i rely on that the first will get the smallest created_lt, and the last will get the greatest created_lt? or there's no garantee and the wallet can send batched messages in any order?

&rey: It will. If your wallet app works correctly, of course. (reply to 155744)

TON Bounty Bridge: 📊 Update Digest!  🔍 Active bounties: 10 ✅ Approved bounties: 0 🔄 Bounties seeking suggestions: 40  📣 We value your feedback! Join the community discussion and participate in shaping the future. Click the 'Create Your Own Bounty' button to get started.  Happy contributing!

yo boy izu: I can help and volunteer in your project (reply to 155729)

nhlaka: Guys does anyone know why I get undefined for almost all requests to this api?

&rey: Perhaps because transactions upon said wallet had already completed? (reply to 155758)

nhlaka: it's possible, but I don't think so, because the console.log('Unexpected API response format:', pending.data); statement in the if statement takes another 6-7 seconds (reply to 155763)

S: What's your stack (reply to 155751)

&rey: Perhaps you use axios wrong and need something like JSON.parse? (reply to 155764)

nhlaka: Thank y! (reply to 155766)

Kamran: Hi 👋

Kamran: I want to buy a domain but its not for sale even though its expires why? Any idea

Dmitry: DNS site doesn’t support buy-expired-domain feature. Check dns nft source code and send payment “manually”, or look for tg bot that can do it for you (reply to 155776)

— 2025-08-05 —

yo boy izu: Experience and if u project does well u can give me a little thank u (reply to 155765)

S: Experience in..? (reply to 155785)

yo boy izu: Community management game testing  and I want to learn new things (reply to 155786)

Zerox: hey, do you need developer? (reply to 155786)

S: Probably, but not now (reply to 155791)

Zerox: okay, lmk if you need, I know func, ts enough (reply to 155795)

Stas: Hello, for some reason we can't pay via TG Wallet, but for example from Tonkiper the payment goes through, what could be the problem?

𝘿𝙊𝙏𝙉𝙀𝙏: The TonWeb RPC Provides a method called getTransaction which returns all the transactions of an address. How do I differentiate between sent and recieved transactions.  I am using testnet in here  Also what is the smallest unit of TON, like for TRX it is sun

Tim: InMsg.dest === your address (reply to 155825)

Tim: 1e-9 (reply to 155825)

Precursor: Hi, we created and launched our token on Gaspump Lunchpad, after Dedust listing it shows as FAKE in Ton keeper wallet.  The ownership has been renounced and liquidity burnt by Gaspump team, Please how can I get the FAKE out? And verify the token?

𝘿𝙊𝙏𝙉𝙀𝙏: I mean in Number, I clearly don't understand this (reply to 155827)

𝘿𝙊𝙏𝙉𝙀𝙏: Okay Will Check it (reply to 155826)

Tony: Gm fam, my friend has a question: What data providers would you recommend for better performance than Toncenter, especially for transaction history queries?

TON Bounty Bridge: ​ElizaOS V2 Integration with TON Blockchain  🏷 Developer Tool  Summary:SummaryElizaOS - plugin for handling TON (The Open Network) blockchain operations, providing wallet ...  Rewards: • 2000 USD  Created by fivestarsfi

tete: Does anyone know where to get news about this?: https://dorahacks.io/hackathon/ton-payments-hackathon/team

Precursor: I need help 👆 (reply to 155829)

&rey: Pull request to https://github.com/tonkeeper/ton-assets. (reply to 155829)

Victor: Why is p2p trading not available in my region. This has greatly limited my use of the tg wallet. Could anyone please help me or at least direct me to where I can make this complain. Thank you

DeFi: What country are you in? Not all countries will have access to p2p trading (reply to 155857)

Ksan: Hi, devs. I am looking for a telegram game and TON developer. Please ping me.

— 2025-08-06 —

Precursor: Okay thank you (reply to 155849)

Einar: Expired deadline? (reply to 155847)

tete: Yes, but there's no communication channel to know what happened with submitted projects.

DeFi: Hey builders on TON, guess what? https://x.com/TokenOS_AI/status/1952955396832043038

E_crypt: Really? I might as well reach out (reply to 155797)

Patrick: Does anyone know how to transfer the entire wallet balance in tonutils-go?  I tried to transfer like this, but it fails:  balance, err := w.GetBalance(ctx, master) if err != nil {   log.Fatalln("get balance err: ", err.Error())   return }  transfer, err := w.BuildTransfer(dstAddr, balance, bounce, "")  I think the fee needs to be subtracted from the amount I'm trying to send. I'm wondering if there's a way for the fee to be automatically deducted from the amount being sent, so I don't have to manually calculate and subtract it myself.

Dmitry: use amount=0 and message mode 128 (Carry all the remaining balance of the current smart contract). don't know exact tonutils-go code, but it should not be very complex (reply to 155906)

Dmitry: usually mode=0 does exactly the same, while mode=1 means "Pay transfer fees separately from the message value". I dont' see mode=1 in your code, but maybe it's somewhere in defaults.... (reply to 155906)

Patrick: default mode is 3 (reply to 155908)

&rey: Except storage fee which messes everything up, of course. (reply to 155908)

Aran: balance, err := w.GetBalance(ctx, master) if err != nil {   log.Fatalln("get balance err: ", err.Error())   return }  transfer, err := w.BuildTransfer(dstAddr, balance, bounce, "")

Yuri: Hi guys! I have problem with calculating smart-contract address with StateInit (code and data). this is my code async function fetchStateInitBoc() {     let address = 'EQDr1yCktbp69_8uYOcE44_3bK0qazthAS028rzJqFve6BZe';     const ton = new TonApiClient({         baseUrl: 'https://tonapi.io',     });     let nftAddress = address     const addr = Address.parse(nftAddress);     const resp = await ton.blockchain.getBlockchainRawAccount(addr);      let si: StateInit = {         code: resp.code,         data: resp.data     };     let calculatedAddress = contractAddress(0, si)     console.log('nftAddress', calculatedAddress);     console.log('calculatedAddress', calculatedAddress);     console.log("check", calculatedAddress.toString() == Address.parse(nftAddress).toString()); }

&rey: Because the state you obtain is not initial one. It is not StateInit. (reply to 155915)

Yuri: thx! Can I obtain correct StateInit? (reply to 155918)

E_crypt: Clean code (reply to 155915)

Yuri: So you think it should work properly? (reply to 155920)

𝓢𝓪𝓶𝓾𝓮𝓵: Hi everyone! Does anyone know if it's possible to deploy the .ton DNS domain on WordPress (.org)?

&rey: It isn't. It requires special software and thus a VPS at least. (reply to 155922)

Tony: .ton is not a tld i think

Tony: crypto wallets, smart contracts yes websites no

Tony: .ton domains are not recognized by standard DNS resolvers and won’t resolve in normal browsers without plugins or support for TON.

Tony: maybe in the future durov can register it on ICANN

— 2025-08-07 —

Andrey: US intelligence agencies (the main sponsor of the TOR network) also did not register the .onion domain, I think they have much more opportunities than Durov in terms of agreements with ICANN (reply to 155929)

Alberto: Can’t point directly to WordPress - needs a TON proxy or bridge. (reply to 155922)

Sam: hola ! can someone please explain what is "jetton 2.0 standard" ? there are no TEPs published and I don't see any major changes in the published func code  what exact changes to the original func code makes it "2.0" ?

Sam: oh - I was looking at the wrong branch  if its production ready why isn't it published at main ? oO  https://github.com/OpenBuilders/notcoin-contract/compare/main...ton-blockchain:jetton-contract:jetton-2.0

Sam: is there explanation how these prefix shards are working and how to use them for contracts optimization ?

&rey: Basically, now contract's address may be not exactly equal to its StateInit hash. (reply to 155950)

&rey: If you find a critical vulnerability of chain itself, it is more suitable for https://github.com/ton-blockchain/bug-bounty than this chat.

𝓢𝓪𝓶𝓾𝓮𝓵: I understand! I'd need a VPS then. I saw that it worked with Linux and Go, in addition to C++, but I didn't see anything that allowed hosting, much less WordPress. Out of curiosity, is this limitation due to security flaws in WordPress' public directories, or just incompatibility? I imagine both 🤔 (reply to 155925)

𝓢𝓪𝓶𝓾𝓮𝓵: Too bad! I thought about using a subdomain for it :'D (reply to 155934)

iAbdurahmon: Hello How to create v3r2 wallet?

𝓢𝓪𝓶𝓾𝓮𝓵: Excuse my ignorance 😅🤣 I just found out about ICANN's processes! (reply to 155929)

&rey: IIRC you can set version in Tonkeeper dev settings (in common settings, click logo five times). (reply to 155959)

&rey: The common Wordpress hosters accept TLS(HTTPS) or HTTP requests and dispatch them to the service in question. TON Sites are behind ADNL instead, which is not well-known and therefore not supported. (reply to 155957)

Hossein: Can you see this missing part there or I am wrong? Can anyone explain this? (reply to 155948)

Sam: the missing part is included in state init

Hossein: Oh MSG_INFO_REST_BITS! Now I see it! 😅 Thank you! (reply to 155970)

Sam: you may find this useful https://github.com/OpenBuilders/notcoin-contract/compare/main...ton-blockchain:jetton-contract:jetton-2.0 click on files changed and check func files

— 2025-08-08 —

Root: My TON/Jetton transaction was broadcast successfully, but I cannot find it on the blockchain. What could be the possible reasons for this?

misha: How you know that your transaction was send successfully? (reply to 155979)

Root: The server returned a Hash. (reply to 155983)

&rey: Any transaction can be accidentally lost from mempool. (reply to 155984)

&rey: You do not know that it will come to pass until the external message is accepted in the source shardchain.

misha: May be you can check transaction in ton wallet (reply to 155984)

&rey: What would be the underlying mechanism? Blockchain's transactions are public, how a wallet app would show more? (reply to 155990)

misha: If man send transaction from native lib like @ton/core, he can authorise in wallet by private key and look full info (reply to 155991)

Root: I know that a transaction might be dropped from the mempool. Apart from that, are there any other reasons on the TON blockchain that could cause a successfully broadcast transaction to fail to be included on-chain? (reply to 155991)

&rey: No other reasons. In particular, once the external message is accepted, each transaction in the tree will eventually be done. (reply to 155993)

Root: Ok,Thank you. (reply to 155994)

misha: Is there any way to protect send transaction method from mitm attack? I’m worried that attack can replace recipient address. I’m use default ton js lib for send trx

&rey: Your wallet contract will not accept message with replaced recipient because signature is invalid for such message.  There is no method to protect against someone else sending message from their own wallet, though. "Frontrunning", they name it. (reply to 155996)

misha: Ok, thanks (reply to 155997)

Clash: There is any compiler for coding my pc is out dated

Mojisola🍅 🍅: meaning? (reply to 156011)

Clash: Ton support Func language so there is any compiler online ide where I can do coding (reply to 156014)

Clash: I am a one and only developer who is building on my phone

Clash: I cannot afford laptop but I want to become a dev as soon as possible that's why I am asking there is any online ide where I can start journey on phone

𝘿𝙊𝙏𝙉𝙀𝙏: vscode[.]dev (reply to 156017)

𝘿𝙊𝙏𝙉𝙀𝙏: G*thub C*despaces

Clash: Can you provide link? (reply to 156018)

𝘿𝙊𝙏𝙉𝙀𝙏: that is the link bro, just search Google I guess (reply to 156022)

&rey: One at https://ide.ton.org. (reply to 156015)

&rey: Perhaps you'll be interested in https://docs.ton.org. (reply to 156031)

&rey: Which "this" of the many technologies available? (reply to 156034)

Combot: Combot has warned JT | Museigen.io (1/3) Reason: Word **** is not allowed

— 2025-08-09 —

Sam: hola ! I'm interested what are the usage cases for TVM libraries ? besides storing entire smart contract code in them ( like jetton wallets ) ? as I understand the library code can't be updated without changing all the references to it ? so it can't be used for contract upgrade or to manage state of multiple other contracts ?

Mahrukh: I want to mint or unlock token in ethereum network how can I mint via coding

Mahrukh: Token already burn in ton jetton

[P]rivanbi: 😁

Combot: Combot has warned [P]rivanbi (1/3) Reason: 1 reports (reply to 156101)

&rey: https://t.me/and37_bot you are hereby banned for a week.

Victor: Any developer in the house who is ready to collaborate on a project. I'm out to create a telegram mini app and I need a web developer who is ready to collaborate on this. Do well to send me a message

DeFi: Are you offering to pay for development? (reply to 156107)

Blaze: You need to create and deploy the token smart contract (reply to 156091)

Mahrukh: Can u guide (reply to 156112)

Blaze: Yeah   Are you experienced in solidity? (reply to 156113)

Mahrukh: I have done coding in node js (reply to 156114)

Blaze: DM (reply to 156115)

&rey: Please be mindful of possible scam coming through direct messages. Validate your actions before sending any funds. EVM networks might require even more verification. (reply to 156113)

Mahrukh: Can u pls help me (reply to 156117)

&rey: I do not have relevant expertise (in EVM, that is). Did some project / bridge fail on you? (reply to 156118)

Mahrukh: Yes I did bridge transaction from ton to Ethereum burn in ton but not receive in Ethereum (reply to 156119)

&rey: Please contact the official support for those, https://t.me/ton_help_bot (reply to 156120)

Mahrukh: No response from bot since last 25 days (reply to 156121)

— 2025-08-10 —

Leo: libraries can be used to store duplicate data or code, significantly reducing contract storage fees (reply to 156086)

Victor: Yes, I got some great ideas I believe can bring in money. I can share this idea with a developer after we've come into an agreement on how to go about it and I've weighed if he / she could be trusted and is down for a deal. We would share the cost of development and hosting afterwards we will split profits based on percentage of investment. Note every agreement Will be duly signed by both parties and effected in court. Only serious people should DM me please. (reply to 156108)

DeFi: You just have an idea. The developer has the skill. In fact, they could just take your idea, build it, and cut you out, because ideas aren't protectable IP.  As such, if you want competent development, you need to pay for it. 50% upfront and 50% on completion. No competent dev is going build your idea for you and only take a percentage of "profit" (reply to 156133)

DeFi: Your idea probably isn't unique or going to be successful either, btw. No offense, its just the statistical truth.

ytiruces: Hi! Please tell me, maybe there is a clear explanation somewhere on how to work with dictionaries in tolk with examples, besides the documentation?

Slava: Hey. The same as in FunC, just take into account library function name changes. There's a table in the docs with the mappings. (reply to 156139)

Philipp Toth: TON

Slava: I'm not sure but there can be examples in the benchmarks repo I guess. (reply to 156139)

ytiruces: Yes, I was given a link in the tondev chat to standard contract implementations in Tolk on github /ton-blockchain/tolk-bench/tree/master/contracts_Tolk. TY

David: Does any of you have these icons in PNG format or just one of them?

𝘿𝙊𝙏𝙉𝙀𝙏: Make it yourself (reply to 156148)

Victor: Okay thanks. I am a developer too tho not professional, I need to work with someone who can be committed to the cause. My idea is as unique as the word is. I know you won't believe it until I tell you but am not going to do that. I've already been able to complete 40% of this project but I can't do everything alone and I don't want to be a sole proprietor. If there's a developer competent in React. I'd appreciate you reaching out (reply to 156134)

Code: I know a guy called Claude (reply to 156154)

&rey: Now if you'd kindly return to discussing how to build specific things on TON...

Hans: Is this aap legit?

DeFi: No, of course not (reply to 156184)

professor x: It was reported as scam (reply to 156184)

— 2025-08-11 —

&rey: This question is off topic for the chat. (reply to 156211)

Daniil: oh. I just had a call with some1 who wanted to help me, but call accidently interrupted =( and looks like my message has been deleted. I'm looking for experienced unity/web developer to ask for help. If there are any please contact with me and I'll describe my issues

Patrick: what is the problem? send transaction with ton connect to my wallet and i get this

TON Bounty Bridge: ​Tool for vibe-coding applications on TON  🏷 Developer Tool  Summary:The goal is a no-code/low-code platform for quickly building applications and services in the TON ec...  Created by quialorraine

TON Bounty Bridge: ​Tool for searching wallets with win rate on memecoins  🏷 Developer Tool  Summary:A tool designed to search and analyze cryptocurrency wallets based on their win rate trading memecoi...  Created by quialorraine

— 2025-08-12 —

Satoshi: Hey all.  I’m currently developing a mini game that performs well on the desktop version of the Telegram Mini App. However, on Android devices, performance is significantly slower. The webview appears to have limited animation support, causing noticeable glitches during gameplay. I’m looking for solutions to address this issue.

Chris: Hey, I guess, we need more details to be able to help. Like what technology it's written. (reply to 156266)

Satoshi: Hi Chris, I used react for the application

Satoshi: and animation is not performing smooth as like as on desktop version.

Chris: Hmm, with react it supposed to work well. I had problems with WebGL, but never with JS. Let's move to DM to continue (reply to 156273)

Oleg: Guys, hi, who was the one who rolled out the flash loan “ flash swap” contract?

Oleg: Here is an example of implementing a flash loan contract on the TON blockchain using FunC. Keep in mind that flash loans in TON are more difficult to implement due to the asynchronous architecture, and this example demonstrates a basic approach: #include "stdlib.func";  ;; Constants const int FLASH_LOAN_OP = 0x67f4e0; ;; Unique OP-code of the operation const int FEE_RATE = 30;             ;; 0.3% fee (30 = 0.3%)  ;; Contract data structure struct Data {     slice owner_address;     int total_liquidity;     int fee_balance; }  ;; Loading data from persistent storage Data load_data() {     slice ds = get_data().begin_parse();     return [ds~load_msg_addr(), ds~load_uint(128), ds~load_uint(128)] as Data; }  ;; Saving data void save_data(Data data) {     begin_cell()         .store_slice(data.owner_address)         .store_uint(data.total_liquidity, 128)         .store_uint(data.fee_balance, 128)     .end_cell()     .set_data(); }  ;; Main function for processing incoming messages () recv_internal(slice in_msg) impure {     slice sender = in_msg~load_msg_addr();     int msg_value = in_msg~load_coins();     int op = in_msg~load_uint(32); ;; Загружаем OP-код      if (op == FLASH_LOAN_OP) {         handle_flash_loan(in_msg, sender, msg_value);     } else {         ;; Другие операции...     } }  ;; Обработка flash loan () handle_flash_loan(slice in_msg, slice borrower, int msg_value) impure {     Data data = load_data();          int loan_amount = in_msg~load_uint(128);     cell callback = in_msg~load_ref(); ;; Callback contract          ;; Checking liquidity availability     throw_if(101, loan_amount > data.total_liquidity);          int fee = (loan_amount * FEE_RATE) / 10000;     int total_repayment = loan_amount + fee;          ;; Calculate the new balance     data.total_liquidity -= loan_amount;     save_data(data);          ;; Send the loan to the borrower     send_raw_message(         begin_cell()             .store_uint(0x10, 6) ;; mode             .store_slice(borrower)             .store_coins(loan_amount)             .store_uint(0, 1)             .store_ref(callback) ;; Callback in the message body         .end_cell(),         0     );          ;; Check for refund (should be done in the callback)     ;; TON requires a separate verification mechanism }  ;; Callback for refund () repay_loan(slice sender) impure {     Data data = load_data();     int returned_amount = in_msg_body~load_coins() - get_fee();           ;; Verification of refund     throw_unless(102, returned_amount >= data.expected_repayment);          data.total_liquidity += loan_amount;     data.fee_balance += fee;     save_data(data); }  ;; Helper functions int compute_fee(int amount) method_id {     return (amount * FEE_RATE) / 10000; }  ### Key components: 1. Lending mechanism: - The borrower sends a request specifying the amount and the callback contract - The contract checks the availability of liquidity - The funds are sent to the borrower in a single transaction  2. Fees: - Fixed rate of 0.3% (FEE_RATE) - Calculated automatically when the loan is issued - Stored separately in fee_balance  3. Security: - Liquidity verification before issuance - Verification of refund in callback - Overflow protection (128-bit numbers)  ### Features of implementation in TON: 1. Asynchronous model: - No guarantee of atomicity of transactions - Requires explicit verification of return via callback - The entire loan cycle may take several blocks  2. Restrictions: - The borrower must be a contract (for handling the callback) - Pre-liquidity in the pool is required - Gas complexity is higher than in EVM  3. Return mechanism: - The callback contract must call repay_loan - Checking the amount of the return, taking into account the commission - Automatic replenishment of the liquidity pool  ### Recommendations for production: 1. Add: - Temporary restrictions on the return - White list mechanism - Pool insurance - Support for Jetton tokens  2. Test the scenarios: - Failed return of funds - Repeated login attacks - Commission calculation errors - Price changes in liquidity pools

&rey: Frankly, that code is garbage; have you even tried to test it? (reply to 156278)

Code: For my own learning, would you be able to elaborate what the flaws of it are? (reply to 156280)

&rey: It does not even compile, much less guarantee anything is returned by the borrower. (The latter, no contract can.) (reply to 156286)

MoFR: Brother, if I have no programming knowledge and I want to learn smart contracts, where should I start? (reply to 156287)

Code: learn programming first, do a python tutorial (reply to 156288)

MoFR: And after that, what should I learn? But I heard that you should start with JavaScript first (reply to 156289)

&rey: For smart contracts, some fundamental knowledge is useful, like "know where data (like jetton balance) is, and where it must be delivered to complete your action". (reply to 156288)

MoFR: What should I start learning with? (reply to 156291)

akki: Is tps/throughput for jettons transfer is same as native ton coin?

&rey: One jetton transfer incurs around five transactions so throughput could temporarily decrease. Until shards split, that is. (reply to 156293)

akki: shard split automatic? or need to write specific code in contract what's that sharded jetton contract about in tact repo? (reply to 156294)

&rey: Automatic.  "Sharded jetton" is a tool to hinder TON's sharding (based on experimental config), rewriting a few first bits of jetton wallet address to be in the same shard to its owner. (reply to 156296)

akki: so  if I expect my jetton project to scale to billions of wallets/users should I avoid sharded jetton? if not, how this contradiction is helpful? (reply to 156297)

akki: and owner here means minter? or V4/w5 contract (reply to 156297)

&rey: Sharded jetton moves its jetton wallets towards V3R2/w5, i.e. user's wallet. (reply to 156302)

Slava: Using this optimization won't hinder scalability of your project, because user wallets are already randomly distributed between shards. (reply to 156301)

akki: now I see (reply to 156304)

𝘿𝙊𝙏𝙉𝙀𝙏: How to generate a wallet using TonWeb, I am having some difficulties (reply to 156305)

Slava: Use this instead. (reply to 156312)

𝘿𝙊𝙏𝙉𝙀𝙏: Yeah I am using it (reply to 156313)

𝘿𝙊𝙏𝙉𝙀𝙏: Wait let me show you what I am doing

Slava: No need. Just see the link. It's basically the code for what you are trying to do.

𝘿𝙊𝙏𝙉𝙀𝙏: const createTonWallet = async ()=>{     try {         const wallet = tonweb.wallet.create({publicKey});  const address = await wallet.getAddress();  const nonBounceableAddress = address.toString(true, true, false);  const seqno = await wallet.methods.seqno().call();  await wallet.deploy(secretKey).send();         console.log(wallet);     } catch (error) {         return error.message;     } }  createTonWallet(); (reply to 156316)

𝘿𝙊𝙏𝙉𝙀𝙏: Returns nothing No console log not even undefined

𝘿𝙊𝙏𝙉𝙀𝙏: Anything wrong in this (reply to 156317)

Slava: ^ (reply to 156313)

𝘿𝙊𝙏𝙉𝙀𝙏: I am using https://www.npmjs.com/package/tonweb (reply to 156321)

Slava: As a person who forked and totally rewritten tonweb in TypeScript, fixed many bugs and made many performance optimizations in it, I recommend you to use this instead.

𝘿𝙊𝙏𝙉𝙀𝙏: Far better (reply to 156324)

— 2025-08-13 —

akki: can I use this comment field in wallet app to pass some data(location coordinates) then acces them in contract and store in persistent storage? How?

&rey: If you want to reveal user's location to the whole blockchain, then sure. The contract will receive in_msg_body starting with 0x00000000 (32 zero bits) then the provided text in UTF-8. (reply to 156380)

akki: how to access in tact? (reply to 156427)

&rey: receive(publicly_visible_information_comment: String) { ... } (reply to 156428)

akki: no not in separate receiver  I need access in JettonTransfer receiver so I can pass info alongwith tokens transfer (reply to 156429)

ytiruces: Hi. After deploying the NFT, the metadata content is empty {} , and the item shows as UNVERIFIED. Why?

ytiruces: Contract deployed at address kQD7klJB1XgprMxPUr-nG3r4-tYHIPhJwm_hEKEzIIajJoPu You can view it at https://testnet.tonscan.org/address/kQD7klJB1XgprMxPUr-nG3r4-tYHIPhJwm_hEKEzIIajJoPu ID {   isInitialized: -1,   index: 100n,   collectionAddress: EQAbCslPPFGOuWP3xnUbKE44s4g0dyVJFe54SzghkYMyjYml,   ownerAddress: EQCEYXYZEqk3MROTR4adieUhWmw-E9ebrFqGkmOSAahSL0Vz,   individualContent: x{}    x{017B226E616D65223A2257222C226465736372697074696F6E223A2257222C22696D616765223A2268747470733A2F2F696D672E6672656570696B2E636F6D2F667265652D766563746F722F68616E642D647261776E2D6E66742D7374796C652D6170652D696C6C757374726174696F6E5F32332D32313439363232303231}     x{2E6A7067227D} }

ytiruces: import { Address, Cell, beginCell, toNano } from '@ton/core'; import { NFTItem } from '../wrappers/NFTItem'; import { compile, NetworkProvider } from '@ton/blueprint';  function nftContentToCell(content: any): Cell {   const contentString = JSON.stringify(content);   return beginCell()         .storeRef(             beginCell()                 .storeUint(0x01, 8) // Content type (off-chain)                 .storeStringTail(contentString)                 .endCell()         )         .endCell(); }      const content = {    "name": "W",    "description": "W",    "image": "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg", };  const contentCell = nftContentToCell(content); export async function run(provider: NetworkProvider) {      const createnft = provider.open(         NFTItem.createFromConfig({         index: 100,         collectionAddress: Address.parse('kQAbCslPPFGOuWP3xnUbKE44s4g0dyVJFe54SzghkYMyjTIv'),         ownerAddress: Address.parse('0QCEYXYZEqk3MROTR4adieUhWmw-E9ebrFqGkmOSAahSL6M8'),         individualContent: contentCell || null         //ownerAddress: null,         //content: null     }, await compile('NFTItem')));      await createnft.sendDeploy(provider.sender(), toNano('0.05'));      await provider.waitForDeploy(createnft.address);      // run methods on `createnft`     console.log('ID', await createnft.getNftData()); } (reply to 156436)

Leo: 1. remove the outer cell in nftContentToCell 2. contentString must be a url to json file for off-chain format

ytiruces: Do you have an example of this json, stored somewhere. I can try this link for test (reply to 156448)

ytiruces: I have find it https://s.getgems.io/nft/b/c/62fba50217c3fe3cbaad9e7f/1/meta.json

ytiruces: I think I dont understand this. Not working ( (reply to 156448)

ytiruces: function nftContentToCell(content: any): Cell {   return beginCell()             .storeUint(0x01, 8) // Content type (off-chain)             .storeStringTail(content)         .endCell() }  const contentUrl = 'https://s.getgems.io/nft/b/c/62fba50217c3fe3cbaad9e7f/1/meta.json' const contentCell = nftContentToCell(contentUrl);  export async function run(provider: NetworkProvider) {      const createnft = provider.open(         NFTItem.createFromConfig({         index: 100,         collectionAddress: Address.parse('kQAbCslPPFGOuWP3xnUbKE44s4g0dyVJFe54SzghkYMyjTIv'),         ownerAddress: Address.parse('0QCEYXYZEqk3MROTR4adieUhWmw-E9ebrFqGkmOSAahSL6M8'),         individualContent: contentCell     }, await compile('NFTItem'))); (reply to 156448)

Leo: What not working? And links? (reply to 156454)

ytiruces: This code not working. Still UNVERIFIED and empty metadata (reply to 156455)

Leo: link?

ytiruces: https://testnet.tonviewer.com/kQAtbEBYPPPRZh2a4eCp3eOBiAwULNb2zEs4Gf_KEAOBqvac (reply to 156460)

Leo: Typically the NFT contract is deployed with empty owner and individual content, which are controlled by the collection contract

Leo: try get_nft_address_by_index in the collection contract with the specified index and you'll get a different address

Leo: https://testnet.tonviewer.com/kQAbCslPPFGOuWP3xnUbKE44s4g0dyVJFe54SzghkYMyjTIv?section=method

Leo: You cannot arbitrarily deploy a nft contract and say it belongs to some collection

ili: Who can help me connect ton + asterisk?

Mojisola🍅 🍅: are you sure this is not possible?  I think ton is flexible and A Dev can do anything they want to do on TON.   I can say my nft belongs to a collection but the collection may not know my nft, lol😀😊🤣 (reply to 156466)

EnCryptoknight ⚔️: your request is quite tricky bro. asterisk doesn't speak blockchain.  so there will never be a connection (reply to 156476)

ili: If i pay in crypto I will get a call 📞 (reply to 156491)

</MØHÆMÐ>: Hi guys 👋

</MØHÆMÐ>: How do I write an API to query the wallet transaction list and an API to transfer TONcoin? Can anyone help?

𝘿𝙊𝙏𝙉𝙀𝙏: https://github.com/ton-org/ton?tab=readme-ov-file#usage (reply to 156520)

</MØHÆMÐ>: Thanks a lot! (reply to 156534)

𝘿𝙊𝙏𝙉𝙀𝙏: Thank this guy who wrote it (reply to 156536)

</MØHÆMÐ>: Thanks a lot!

</MØHÆMÐ>: Is there any documentation for PHP as well?

</MØHÆMÐ>: Or python

EnCryptoknight ⚔️: no connection can be made as you mentioned but a middleware can be used to interact (reply to 156513)

&rey: tonutils or pytoniq. (reply to 156544)

Slava: I didn't write it. You are mistaken. (reply to 156537)

Slava: The list of contributors can be found here.

Tatum: I'm trying to find the staking rewards payout for the network for each reward period / epoch. Is this data avilable via API ?

&rey: For which staking exactly? There are many services doing it. (reply to 156578)

Tatum: I'm trying to build my own solution using calls to an RPC node but I havent been able to find an enpoint that makes available the total staked / total rewards paid out...

— 2025-08-14 —

𝘿𝙊𝙏𝙉𝙀𝙏: ☺️☺️ (reply to 156324)

Leo: that's why he got UNVERIFIED (reply to 156478)

Slava: I was talking about this one. (reply to 156622)

Dark Star: Hi everyone,  Is anyone else experiencing issues with the toncenter.com RPC today? I ve started getting a 500 error with the message "cannot locate transaction in block with specified logical time" when trying to fetch a list of transactions.

Slava: Try using the archival flag. (reply to 156626)

Dark Star: thx, its worked (reply to 156627)

sattu: Hi everyone 👋 I’m mainly a marketing guy, but together with my team we’re building an investment app. The product will let users allocate money into staking, crypto ETFs, and stablecoin FDs (fixed deposits). My question is: Is there any reputed / reliable app, protocol, or service we can integrate with (or re-route user funds to) for these kinds of allocations? Ideally something that is already audited, has good liquidity, and can be used programmatically (API / smart contract).

Combot: Combot has warned D🕷️V (1/3) Reason: 1 reports (reply to 156634)

— 2025-08-15 —

Al: Hello, trying to setup a full node and getting Error 651: no nodes. I have waited hours and have checked firewall. Any idea on what is causing this issue?

hussein: 0QCSES0TZYqcVkgoguhIb8iMEo4cvaEwmIrU5qbQgnN8fo2A

hussein: 0QCEYXYZEqk3MROTR4adieUhWmw-E9ebrFqGkmOSAahSL6M8

hussein: /stat@combot

Combot: Total messages: 156683

Defi Fomo: Hello, everyone. Are there any developers here with experience working with Eliza on the ton plugin?

c: https://tonapi.io/v2/traces/{trace_id} Has the data structure of this interface changed?

Dmitry: Hi. I am currently creating an overview project for NFT collections with TG gifts. Does the community already have ready-made lists with all NFTs + Lottie animations of TG gifts, or does everyone download them themselves? Maybe there is some kind of API from some platform? I don't want to reinvent the wheel, but I couldn't find anything. If there isn't one, let me know, and I'll think about making one for everyone

Sauberr: Hi, I'm writing a crypto exchanger now and I need ton coins for testing. I'll be very grateful if you send as much as you can to this wallet 0QB6B3_azSTKuDr9Mivhl0hifQ0jg48PzfYiLLv_wCYBG-Fe

Robb: Hey

Robb: Can somone suggest me good and safe developer on TON? Thank you

Mojisola🍅 🍅: hi, I have issue with my code, if I  run a jetton transfer with js and putting 0.15ton, it runs successfully, but on wallet apps like tonkeeper, it is unable to proceed due to unable to calculate gas estimate

Mojisola🍅 🍅: can I add extra message into TokenTransfer receiver and also on TokenTransferInternal, this 2 additions is what is causing wallet app unable to estimate gas fee or so. but works when I use a javascript and set 0.15 ton for example,

Cryptiko: Need for what? (reply to 156737)

Cryptiko: I can suggest Nikolai Durov

Robb: For an miniapp (reply to 156743)

— 2025-08-16 —

Hon. Festus: What are you building? (reply to 156746)

&rey: Optimize the code. Why would users choose your jetton if it's that expensive to handle? How would it be placed in DEX? (reply to 156742)

Mojisola🍅 🍅: those are my worries actually.  thanks for the response.   Dex will be exempted or so. I am just not comfortable tonkeeper will just disallow a transfer cos of a little high gas fee. noticed tonkeeper for example usually use 0.05ton for jetton transfers, don't know if it does that for all jetton or go higher for some other jetton eg usdt (reply to 156759)

Mojisola🍅 🍅: all excess is actually returned back to sender at the end of the transaction anyways

&rey: How do you exempt DEXes given that some of them will appear after you deploy the jetton? After all, stonfi and dedust are only two of the bunch.  FYI, TON validators have voted and so made USDT transfers cheaper than a common jetton. (reply to 156760)

Mojisola🍅 🍅: what do you suggest I do to optimise. cos I need to check a variable from another contract before continuing other part of transaction.

Mojisola🍅 🍅: or bounce the transaction (reply to 156764)

Leo: why your jetton consume so much gas?

Mojisola🍅 🍅: I added extra message inside jettontransfer (reply to 156770)

Mojisola🍅 🍅: I am using Tact language for this jetton contract

Leo: you add many messages or you implement it wrong? One more message won't make so much difference. (reply to 156773)

Mojisola🍅 🍅: will share the code portion soon

Teemu | 機器人🪽: hey guys, is there any workaround for wallet deployment? Wallets created on tonkeeper are instadeployed, but if i create them on my app, they need to deploy manually?

&rey: They aren't instadeployed in the sense "recorded onchain as soon as it is created". If you speak of deployment on the first outgoing transfer, it should be already supported in all libraries. (reply to 156809)

Teemu | 機器人🪽: i just dont understand how can i do an outgoing transfer when the wallet bounces all the funds i send out 😅

&rey: You should provide unbounceable address (the one which starts with UQ rather than EQ) to senders. (reply to 156811)

Teemu | 機器人🪽: So, no utility? (reply to 156817)

Combot: Combot has warned Shiv Kumar (2/3) Reason: Word ******** is not allowed

Teemu | 機器人🪽: what word? (reply to 156822)

&rey: Is this relevant to the chat topic, which is development on TON? (reply to 156825)

Shiv: Bot, restricts without giving the word!?

leo: not really (reply to 156826)

Shiv: Well, have planned, utilities, for game, nft, staking and more!! I would love to share more but bot keeps removing the posts!

&rey: It is nothing new at this point, unfortunately, and still not relevant to development on TON so I have removed that post. (reply to 156831)

&rey: Concerning staking... well there are different services: 1) providing TON for a validator to run, and it shares part of what it earns 2) providing some jettons for DEX liquidity, with all the "permanent/impermanent/whatever losses" 3) other services which are kind enough or trying to become popular

Shiv: Well, i have set those things, and the token is live but how do i share this with the dev community without project intro!?

Shiv: Well, can I share links here!?

&rey: You do not. (reply to 156835)

Al: bump on this, anyone know how to fix this? (reply to 156667)

Teemu | 機器人🪽: Its not like dev community would be interested on one more shitcoin. You need to shill to the people buying that one-click crap (reply to 156835)

— 2025-08-17 —

Mojisola🍅 🍅: what is that

Mojisola🍅 🍅: this has been resolved. thanks. (reply to 156778)

Mojisola🍅 🍅: had a working jetton transfer custom code but tonkeeper and even tonviewer says failed transaction

Mojisola🍅 🍅: even though the transfer was successful, sender debited and receiver credited, no gas shortage, nothing.  just because the path of transaction isn't the usual path of jetton.

— 2025-08-18 —

Combot: Combot has warned Hans Hansen (2/3) Reason: Word ***** is not allowed

ili: lets guess? (reply to 156894)

ytiruces: Hi! Why getSeqno() fail? const wallet = await openWallet(process.env.MNEMONIC!.split(" "), true); wallet.contract.getBalance();  // work fine, I get balance wallet.contract.getSeqno(); // Fail => [Error : 0 : Unexpected string end]

Adam: Make sure it’s the right wallet version (reply to 156901)

ytiruces: Problems on testnet.toncenter.com side?   error: '[Error : 0 : Unexpected string end]',       code: 503,

Adam: And sometimes 0 on seqno shows as error (reply to 156903)

ytiruces: Yesterday worked fine, no changes (reply to 156903)

Adam: Some make an exception if it’s an error then sqno is 0

ytiruces: Trying to retrace trx on retracer.ton.org. I think there is a problem with toncenter

Mojisola🍅 🍅: still no answer satisfactory   many times when tonkeeper generates mnemonic, and used in js script, the wallet address are different but when mnemonic is generated with js script and imported to tonkeeper, the address usually align.

Charles: Hello, how can I submit a project application for the foundation? Thank you

&rey: On testnet or on mainnet? That is important. (reply to 156910)

Thitirat: Hello, anyone experiencing 'Unable to verify transaction' on testnet via telegram wallet? I was able to make a transaction with mytonwallet and tonkeeper.

TON Bounty Bridge: 📊 Update Digest!  🔍 Active bounties: 10 ✅ Approved bounties: 1 🔄 Bounties seeking suggestions: 15  📣 We value your feedback! Join the community discussion and participate in shaping the future. Click the 'Create Your Own Bounty' button to get started.  Happy contributing!

Mojisola🍅 🍅: both. so I resolve to generate my mnemonics and import to tonkeeper for consistency (reply to 156913)

Mojisola🍅 🍅: so I don't have issue when need to use for js codes

&rey: Wallet versions? (reply to 156918)

Mojisola🍅 🍅: v4 and v5

&rey: There is effectively no reason to use v4 over v5 or v3r2, is there? (reply to 156921)

Mojisola🍅 🍅: I have js code that produce wallet address for v4 and v5

Mojisola🍅 🍅: so I use it and crosscheck with what tonkeeper will show me

Mojisola🍅 🍅: I feel the error or issue is from tonkeeper

&rey: And what wallet version did you set in Tonkeeper dev settings? (reply to 156924)

Mojisola🍅 🍅: u don't set version of tonkeeper

Mojisola🍅 🍅: so I usually use v4 or v5

Mojisola🍅 🍅: tonkeeper need to check it codebase. I think the issue from their side not my js code at all. can even share my js code

&rey: Do share. (reply to 156932)

Mojisola🍅 🍅: ```   import { WalletContractV5R1, WalletContractV4 } from '@ton/ton'  import { mnemonicToWalletKey, mnemonicNew, mnemonicValidate } from "@ton/crypto"    //function a(v){console.log(v)}    async function zoomy56(){        const mnemonics = (await mnemonicNew()).join(" ")        const a = v => console.log(v)            const key = await mnemonicToWalletKey(mnemonics.trim().split(' '))      const isValid = await mnemonicValidate(mnemonics.trim().split(' '))        if(isValid){          a(mnemonics)            const walletv4 = WalletContractV4.create({publicKey: key.publicKey, workchain: 0})          const walletv5 = WalletContractV5R1.create({publicKey: key.publicKey, workchain: 0})            a(Wallet V4: ${walletv4.address.toString({bounceable: false})} or ${walletv4.address.toString({bounceable: true})} )          a(Wallet V5: ${walletv5.address.toString({bounceable: false})} or ${walletv5.address.toString({bounceable: true})})          a(Tesnet Wallet V5: ${walletv5.address.toString({bounceable: false, testOnly:true})}\n)      }        /*setTimeout(() => {          zoomy56()      }, 500)*/  }    zoomy56()  ```

&rey: This line is false. (reply to 156943)

&rey: You have to set wallet's network when creating it, for v5.

&rey: const wallet = WalletContractV5R1.create({     publicKey: key.publicKey,     workchain: 0,     walletId: {         networkGlobalId: -3,   //-3 is testnet, -239 is mainnet     }, }); if I remember correctly.

Mojisola🍅 🍅: it really doesn't matter

Mojisola🍅 🍅: the only difference this produce is the beginning 3 or 2 characters and the ending 2 or 3 characters that the address produces

Mojisola🍅 🍅: EQ UQ 0Q or so

1XSEC -: Hello i want to ask about getting many ton’s on testnet like 5000 or more if there is any way

Leo: they are different representations of the same address

1XSEC -: Instead of public faucet

&rey: Message https://t.me/f_closer stating the purpose.  If you do not want to reveal the purpose, you can buy some testnet TON from https://tonconsole.com. (reply to 156954)

Colonel: Hi Guys, any one knows why the grant program is not accepting applications anymore?

Anthony: Let me check (reply to 156964)

Colonel: Thank you 😊 (reply to 156965)

наз: What endpoints can be substituted into TonClientV4 besides tonhub or orbs?

&rey: Toncenter v4, I guess? (reply to 156978)

наз: give me link pls (reply to 156979)

Biblical: Hey, my team wants to build a Pump.fun-style launchpad on TON. Looking for a team that can take the contract (we are flexible; equity/salary/fixed). Interested, or can you point me to the right core team?

DeFi: What is your budget for this build? (reply to 156982)

Biblical: We’re working with a pretty good budget; 50k+, a lot of channels involved that are proven to bring volume, we also are very interested in building this alongside a mini-app, prepared on the costs side of things

DeFi: sent a DM (reply to 156985)

&rey: I probably misremembered, cannot find Toncenter v4 indeed. (reply to 156980)

— 2025-08-19 —

Rahul: What all things can get me banned here ?

&rey: This chat is moderated to be the best knowledge source explaining how to program for TON (that is, smart contracts, interfaces to it, sound backend checks, etc). An exhaustive list of offences was never needed. You may ask us the moderators about individual messages you want to send, about whether they are fine! (reply to 157037)

— 2025-08-20 —

Rahul: I want to hire a dev. Can I do it here ? By posting a message or not. Thank you. (reply to 157044)

DeFi: Yes, what are you needing developed? (reply to 157060)

Colonel: Did you find anything? :) (reply to 156965)

Mojisola🍅 🍅: hello. tell about it (reply to 157060)

наз: how can i compare with null address in tests?    expect(oldState.admin).toEqualAddress()

&rey: .toEqual(null) probably. (reply to 157078)

Slava: If you use loadMaybeAddress() then it will be null. (reply to 157078)

наз: doesnt works (reply to 157079)

наз: need smth like    let nullAddress = new Address(beginCell().storeUint(0, 257).endCell().beginParse)) (reply to 157080)

Slava: Just create a "zero" address instance and compare to it then.

наз: this works   new Address(0, Buffer.alloc(32, 0))  and this works  Address.parse('0:0000000000000000000000000000000000000000000000000000000000000000') (reply to 157084)

Sergei: Hello!  I am trying to calculate bits and cells count for an address with deployed wallet explorer gives such values   I am parsing fields "code" and "data" from getAddressInformation endpoint as cells and traversing these cells recursively. But i am getting 19 cells and 5409 bits. Seems I am missing one cell somewhere. Could someone help with it?

Leo: storage_stat counts AccountStorage, not only code and data

Sergei: How could I get AccountStorage using TON HTTP API? Just can not find how to construct cell for accountStorage (reply to 157091)

Vova: Hello everyone. Please help me with my problem I have a Telegram Gift (collectible gift) that is displayed in my Telegram Wallet under "Collections", but I can't access it via the TON blockchain API. What is the exact collection address for Telegram Gifts (those with Model, Backdrop, Symbol attributes)? Is there a special API endpoint for receiving Telegram Gifts? Could it be that Telegram Gifts use a different NFT standard that is not supported by standard APIs? Does anyone have a working code for receiving Telegram Gifts via API?

Leo: account_storage$_ last_trans_lt:uint64     balance:CurrencyCollection state:AccountState    = AccountStorage;  CurrencyCollection is the Coins balance followed by a zero bit and AccountState is a one bit followed by StateInit for active contracts (reply to 157092)

Sergei: Thanks a lot, will try (reply to 157098)

TON Bounty Bridge: ​Integrate TON Blockchain and AI-Trading into Alpha Signal Trade dApp  🏷 Developer Tool  Summary:Alpha Signal Trade is a decentralized trading platform delivering AI-driven forex strategies to bloc...  Rewards: • Milestone 5 – SBT Issuance & Recognition  Created by TeSharma

&rey: This is not a null address, it is a zero address of workchain 0. I don't remember it having any special meaning. (reply to 157085)

Sergei: I've built AccountStorage cell which contain last_trans_lt, balance,  and ActiveState(StateInt with code and data) but now i am getting 20 cells (which is correct) and 5516 bits. explorer return 5522 bits.  Maybe you have some ideas what should I also check? (reply to 157098)

TON Bounty Bridge: ​Integrate TON Blockchain And AI-Trading into Alpha Signal Trade dApp  🏷 Developer Tool  Summary:Alpha Signal Trade is a decentralized trading platform that brings AI-driven Forex currency pair str...  Rewards: • Milestone 5 – SBT Issuance and Recognition  Created by TeSharma

Sharma: hello I'm trying to submit this issue on GitHub but its failing (reply to 157112)

Sharma: i'll be happy to get help on how to go about it

&rey: Stop this abuse. (reply to 157117)

Sharma: what do you mean by this (reply to 157119)

>_: why something proceeds deleting my messages 😢

&rey: A tip: if a message is deleted, there is no sense in sending the exact same text again.  Well some liteservers might be unavailable from your computer. There should be two or more working, though. (reply to 157140)

>_: I've tried truncating the config to just one server that works fine, but it feels like it returns outdated info (reply to 157159)

>_: i call get_account_state each 5sec and last_transaction_id is always the same, even though tonviewer says that there is newer transactions

&rey: Bump your tonlib-rs to the latest version which is 0.26.1 then say if it still fails.

>_: it does

>_: [dependencies] tonlib-core = "0.26.1" tonlib-client = "0.26.1"

&rey: Any network complications like provider terminating whatever connections they want?

>_: Nope, even tried with vpn - same result

&rey: Well even toncli (the official tool for loading raw chain data, which is packaged with func, fift and other executables) fails on most liteservers apparently.  Tonviewer runs their own nodes and does not suffer from the same problem.

>_: So its just servers being down rn?

— 2025-08-21 —

TON Bounty Bridge: ​1  Created by baht98683-tech

Rich: How i can change the linked address within my app? I forgot phrase ton wallet on telegram? I deleted by accident

Mojisola🍅 🍅: ??? (reply to 157186)

🌋Prô: The link to join

>_: Thanks Rey. Seems like today it works much better (hovewer some servers still fail) (reply to 157172)

>_: Btw, im trying to make a tracer, and have no idea how to correctly fetch messages to build a trace. Currently what im doing is getting out_msg, iterating it and trying to find a message on destination account where in_msg isnt empty and has the same time and hash. Guess this behaviour is incorrect as sometimes it works and sometimes it doesnt. (Ik there are indexers, but my goal is to create a simplified version without external services)

&rey: Are you perhaps trying to find transaction that might not exist yet? (reply to 157207)

>_: probably

&rey: There is a guarantee that it will happen eventually, and not much beyond that.

&rey: By the way you should not compare "time and hash" but instead "source address and logical time of generation".

>_: so what should i do? track every further transaction and saturate previous traces? (reply to 157210)

&rey: Well that totally depends on what service you want to build. Something like that, yes. (reply to 157212)

&rey: For the reference, 1. during inscriptions epoch, there were lots of individual messages which took hours to cross shardchains 2. I have built TON Timer, working onchain, and its transactions trace can span hours.

>_: okay, will rework the approach entirely then. thank you once again!

Leo: probably you built it wrong, e.g. do you store the five flag bits in StateInit? (reply to 157107)

Leo: show the code with all details if still confused

Sergei: Yep. Maybe you have a link to the source code which calculates bits, cells usage? I think reverse engineering is my way) (reply to 157221)

Leo: I think that's waste of time, but can find if you insist (reply to 157223)

Sergei: Nope, not really, thank you) (reply to 157224)

Code: Where can we report out-of-date docs? E.g. Tolk is missing from this page: https://docs.ton.org/v3/documentation/smart-contracts/overview

Mahdi: Hey guys I'm looking for TAC team,  Have a proposition for them, any one from TAC team here?  Do you know anyone from this team?

15: I deposited one night ago but it hasn't arrived yet...  I deposited TON 1.017 IT HASN'T ARRIVED UNTIL NOW.. PLEASE HELP ME, SIR.

DeFi: Deposited where? (reply to 157249)

15: Ton maining

&rey: That's a scam. TON Foundation does not hold such events. (reply to 157253)

DeFi: thats a scam app (reply to 157259)

Andi: Hi! I’d like to request SCAM label removal for our token on the TON blockchain.  We’re building a transparent, community-driven project with utility and long-term vision.    We’ve revoked ownership, the token has transparent utility and public presence.  This is our first project, we’re not here to scam.   We’re open to provide any info — liquidity, tokenomics, KYC if needed.  Can we proceed with a review or appeal?  Thank you!

Mojisola🍅 🍅: So made a custom jetton with Tact days ago, doesn't follow the usual flow for jetton transfers, so tonkeeper and probably other wallet apps wont allow me transfer, "unable to calculate jetton transfer fee error" or so, but if I use js script to run it, it transfer successfully but on tonviewer, it mark as transaction failed even though it cannot state specifically what part is error 😊😀🤣

Mojisola🍅 🍅: will share some code portion and a sample transfer on tonviewer

&rey: Pull request to https://github.com/tonkeeper/ton-assets. (reply to 157281)

Andi: Thank you (reply to 157284)

Mojisola🍅 🍅: https://testnet.tonviewer.com/transaction/05273f6d786ece491f01377b4806eaa5277737bd684ddee4883abdc60dd7d286#details (reply to 157283)

Mojisola🍅 🍅: sample with this error even though all see fine wit the transaction.  the flow is like.  from user wallet => user jetton wallet => jetton master(check some conditions) => if true => jetton wallet now sends to receiver wallet (reply to 157289)

Mojisola🍅 🍅: if false, transaction halts

Mojisola🍅 🍅: receive(msg: TokenTransfer) { // 0xf8a7ea5 or 0x0f8a7ea5         let ctx: Context = context(); // Check sender         require(ctx.sender == self.owner, "Invalid sender234");          let final: Int = ctx.readForwardFee() * 2 +                                                      2 * self.gasConsumption +                                                      self.minTonsForStorage +                                                      msg.forward_ton_amount;   // Gas checks, forward_ton = 0.152                  require(ctx.value > final, "Invalid value");          //let init: StateInit = initOf JettonDefaultWallet(msg.sender, self.master);           //let wallet_address: Address = contractAddress(init);          // Update balance         //self.balance = self.balance - msg.amount;          //require(self.balance >= 0, "Invalid balance");          send(SendParameters{             to: self.master,             value: 0, //ton("0.01"), //ton("0.015"),//0,             mode: SendRemainingValue, //SendPayGasSeparately, // + SendIgnoreErrors,             body: CheckStatus{                 query_id: msg.query_id,                 amount: msg.amount,                 receiver: msg.sender, //self.owner,                 sender_jetton_wallet: myAddress(),                 sender_wallet_address: self.owner,                 response_destination: msg.response_destination,                 forward_ton_amount: msg.forward_ton_amount,                 forward_payload:  msg.forward_payload             }.toCell()         });     }'''

Teemu | 機器人🪽: So what project are you copying to be flagged? Maybe add a name on message? (reply to 157281)

Albert: Do you find help or ping me to help. (reply to 157255)

— 2025-08-22 —

Andi: I think I can’t advertise the product here (reply to 157293)

Code: Where can I find an example NFT contract in tolk?

Code: Update: I found this https://github.com/ton-blockchain/tolk-bench/tree/master/contracts_Tolk/02_nft (reply to 157301)

Vasiliy: Why I can't send messages with links?

akki: how can I migrate en existing Jetton project whole(alongwith jettonWallets) live on testnet to mainnet. Can I ?

🐱: The address is easy with workchain, code, init data but the state itself is tricky. Couldn’t think of a way to migrate them properly (reply to 157315)

Mojisola🍅 🍅: I don't think so.  U just have to deploy on mainnet. mainnet and testnet are different (reply to 157315)

akki: can't I export current state of wallet? (reply to 157322)

Leo: you can do this by replaying all related transactions on testnet, if you have control of all holder accounts

&rey: Mainnet is a blockchain on its own, why would it import anything (contract states and balances) from another one? (reply to 157323)

akki: well I was thinking it would be a good ux  if I have some project on testnet with custom minting logic  and no serious exploits happens  then I export same contract to mainnet I think tokens can be minted on mainnet by locking on test but other state replication could be tricky (reply to 157327)

&rey: No. Or, at least, that requires a full TVM-TVM bridge between blockchains. (reply to 157330)

Michele: Hello devs, i am looking for some help with telethon. I need to call a function for retrieving telegram stickers info. First of all where can i get the api keys if i don't want to build an app on telegram?  from telethon import TelegramClient from telethon.tl.functions.messages import GetStickerSetRequest from telethon.tl.types import InputStickerSetShortName import asyncio # Inserisci le tue credenziali api_id = 'TUO_API_ID' # Sostituisci con il tuo api_id api_hash = 'TUO_API_HASH' # Sostituisci con il tuo api_hash phone = 'TUO_NUMERO_DI_TELEFONO' # Es. '+393331234567' client = TelegramClient('session_name', api_id, api_hash) async def get_sticker_info(sticker_name): await client.start(phone=phone) try: stickerset = await client(GetStickerSetRequest( stickerset=InputStickerSetShortName(short_name=sticker_name) )) print(f"Nome del set: {stickerset.set.title}") print(f"ID del set: {stickerset.set.id}") print(f"Conteggio sticker: {stickerset.set.count}") print(f"Creatore: {stickerset.set.official}") # True se ufficiale, False altrimenti # Nota: l'ID del creatore non è sempre disponibile direttamente except Exception as e: print(f"Errore: {e}") async def main(): # Sostituisci 'HotCherry' con il nome del set di sticker (es. preso da t.me/addstickers/HotCherry) await get_sticker_info('HotCherry') if __name__ == '__main__': with client: client.loop.run_until_complete(main())   Would this script work for me?

&rey: Off topic for this chat. This one is about TON not Telegram. (reply to 157334)

D.k: Hello everyone, Am looking for backend developer who are very familiar with ton Blockchain and smart contract  We are building a playable game think Subway surfers on telegram   If have have the qualifications and wants to collaborate  Please Dm

— 2025-08-23 —

Saalisharafu: /pls?

Кирилл: /pls

Mojisola🍅 🍅: hi. here (reply to 157350)

Connor: Hi

grachzy: hello everyone, Is it worth leaving Tact for Tolk? What are the advantages of Tolk compared to Tact?

Arman: Hello everyone, is there any Flutter developer here?

Freed: I work with Flutter and Dart (reply to 157397)

Arman: did you work with Ton on flutter projects? (reply to 157398)

Freed: I worked with ton and dart (reply to 157399)

&rey: Ability to drop down to lower level when you need it, and high level otherwise. Think Rust's analogue. (reply to 157392)

Arman: Can you share a bit about your experience? (reply to 157400)

Freed: I used to create custom backends using Dart that signed transactions, transformed them into boc and were sending them to ton api (reply to 157402)

Freed: Also the other way around to parse contract getters

Arman: i want to have a wallet in my Flutter app and support balance and transactions for in-app purchases. Do you have any suggestions on where I should start? (reply to 157404)

Freed: Platform? (reply to 157405)

Arman: IOS and Android of course (reply to 157406)

Freed: It sucks for that because there are no packages for it yet

Freed: There is a limited ton package that support android and web, idk about ios

Freed: I used external dlls to sign transactions on desktop platform

Freed: You can try to integrate it using webview as node supports any kind of ton manipulations

Arman: i think using external wallets like tonkeeper is much eaiser to handle the transaction - no need complicated code to sign and other things (reply to 157411)

— 2025-08-24 —

Adam: Even for that you need tonweb sdk which is not in flutter (reply to 157412)

akki: when map<> support /collections/ next version is coming? where to watch the day2day progress of lang? opensource? (reply to 157401)

Code: is there another testnet faucet? I just got trolled by the testgiver TG bot 😭

&rey: It is in the TON monorepo, https://github.com/ton-blockchain/ton that is. (reply to 157417)

Dmitry: Scroll the page down to “edit this page” link and you’ll get to GitHub. (reply to 157227)

&rey: *TON Connect SDK rather than Tonweb. The latter is not very usable for anything. (reply to 157415)

Adam: Sorry ton connect i wanted to say (reply to 157434)

— 2025-08-25 —

Sunil: We are building a internal payments router with in our campus, and we are mapping each student with their userid "UGR07A678" and the user is mapped with a wallet id. And any payment done on this should be routed to the associated wallet,  We are looking for a contract on ton where users map their wallets with their userid , and the userid and wallet address are stored in contract. While sending funds and payments to the userid the funds are to be routed to student wallet, posibully add features to set wallet and studentid, also get the wallet address mapped for student id,  and a final method which takes student id as argument and ton to sent, this will internally send ton to the user wallet,  Deliverable: working contract code and a sandbox demo on the complete flow as specified in sandbox.

TON Bounty Bridge: 📊 Update Digest!  🔍 Active bounties: 10 ✅ Approved bounties: 1 🔄 Bounties seeking suggestions: 15  📣 We value your feedback! Join the community discussion and participate in shaping the future. Click the 'Create Your Own Bounty' button to get started.  Happy contributing!

&: DM me (reply to 157458)

TON Bounty Bridge: ​test  Created by TONEcosupport

Scilef🦉: Hello everyone! Please help me to deploy a smartcontract to the testnet 🙏  I am trying to do this, but providerDOTopen causes an error Invalid address Here are some few logs: Connected to wallet at address: 0QA92aKlFvyuT8nb7TH_l3KBzC0FzBipDmjXsjNEIABKLYTo Collection created at: EQAjQtkaYDTT1Q9u-zK9I90rFOGxqxZsv6doZNhRirCqxqPO Error: Invalid address

&rey: Versions of libraries? (reply to 157471)

Scilef🦉: I am afraid of sending strings with dots for now :D (reply to 157472)

&rey: Looks right though. If you create an environment from scratch and copy only your contract, does that work? (reply to 157473)

Scilef🦉: What do you mean sir? I am not the proficient developer, sorry (reply to 157474)

&rey: Take a blank directory with no npm modules installed, and start a new blueprint project. (reply to 157475)

Scilef🦉: By this command npm create ton@latest? (reply to 157476)

Scilef🦉: It's an NFT contract, so it's not only one file there - is it ok sir? (reply to 157474)

Scilef🦉: I should copy wrapper as well, should't I? (reply to 157474)

Scilef🦉: I suppose I can't deploy without a wrapper So I need to copy the whole project, not only contract itself I'll try and come back sir thank you

Zerox: my msg was deleted, did I spam?

ㅤ: same issue, any updates? (reply to 27141)

&rey: This is not related to TON in any way. (reply to 157485)

Alessandro: Better use ton ide (reply to 157471)

Alessandro: Suffered same issue moved to ton IDE more intuitive and easy

Scilef🦉: Can you please share more info in pm? (reply to 157487)

Daniil: guys, is there a token management solution for creating cliff/vesting contracts on TON?  just like streamflow.finance or sablier.com?

Teemu | 機器人🪽: Ton inu has a token locker (reply to 157497)

Teemu | 機器人🪽: Ton raffles too, i think

Patwary: Hi I need help

— 2025-08-26 —

JERRY: Ton raffle (reply to 157497)

🐱: tonsend (reply to 157497)

Zerox: Are you working at Paycio? (reply to 157458)

Lase: I have done something like this. DM (reply to 157458)

Daniil: do you have a link? (reply to 157521)

🐱: https://tonsend.io/token-vesting https://testnet.tonsend.io/token-vesting Disclaimer: I contributed to this but it's not heavily tested so you should test first (mainnet and testnet) just to be sure. (reply to 157527)

Daniil: thanks

X: /stat@combot

Combot: Total messages: 157532

TON Bounty Bridge: ​TON Developer Experience Mega Toolkit (TACT-first): TonConnect SDK Revamp (Dart/Swift), Testnet Faucet Bot v2, VS Code TACT Suite, and Docs/TLB/TMA Upgrades  🏷 Developer Tool  Summary:Goal: deliver a comprehensive bundle to improve developer experience around TON with a TACT-first fo...  Rewards: • Requested reward (raw): 30000 USD  Created by DevNebulaX

TON Bounty Bridge: ​TON Connect for Telegram Mini Apps — Starter Kit and Documentation  🏷 Developer Tool  Summary:Goal: provide a starter kit and clear documentation for integrating TON Connect 2.0 into Telegram Mi...  Created by DevNebulaX

Scilef🦉: Well, the error is different, but still exists and I can't debug it (because there is even no stacktrace in web ide) Can anybody please help me to fight all the deployment issues? I just can't handle it anymore, my butt is burning too much 🥲 (reply to 157490)

— 2025-08-27 —

Chris: Have you tried to deploy different contract using thr same setup? It would give as a hint whether there is a problem with the setup or with the contract itself.  Maybe you can try to deploy example contract, like a jetton. (reply to 157565)

Scilef🦉: Since I have to write a wrapper and a deployment script, there is a few chances the problem is on the contract level. And I've deployed this contract before, it's fine (reply to 157577)

Scilef🦉: It calculates the address and after that it says this address is invalid I suppose there is a mess with networks somewhere, I try to deploy to testnet but maybe somehow script calculate address for mainnet

Mojisola🍅 🍅: what exactly is the issue you are having with your contract code or script

Chris: Did you deployed a few times the same contract? It would not work this way. Each deployment must have a slightly different code or parameters (therefore there is often "id" parameter in contract's constructor, to increase it with each deploy). It's because deployment address is calculated based on code and parameters. (reply to 157586)

Scilef🦉: package DOT json

Scilef🦉: I don't know why then Well, everything is solved by latest dependencies and removing conflicts between blueprint and other ones

— 2025-08-28 —

Lemon: Hello everyone! I was looking into setting up a regular TON Full node based on the official docs.  The specs say "With validator" and especially the monthly expected traffic (64-100TB/mo) caught my eye. If one runs a full node that is NOT a validator node, does it affect the required CPU/RAM/Monthly traffic?

Mirka: It supposed to be synchronized with the current blockchain state so if you want to have up-to-date data you need a server with good specs (reply to 157647)

— 2025-08-29 —

bluechip: Hi guys….

bluechip: So…. I’m trying to get TON payment transactions to be monitored via my bot

bluechip: But it doesn’t seem To be working - what’s the best doc repo for me to use?

Mojisola🍅 🍅: have done something related for a client. (reply to 157764)

bluechip: So what methodology do you use to identify the received payment? (reply to 157772)

Mojisola🍅 🍅: bot listen for valid deposit to your address ad process it

bluechip: invoicing and websockets?

Mojisola🍅 🍅: what language are using

Mojisola🍅 🍅: let me refer you to webpage guide

Mojisola🍅 🍅: https://docs.ton.org/v3/guidelines/dapps/asset-processing/payments-processing

Code: Does anybody have any examples of burning a NFT in Tolk that I could look at?

Code: Would you mind sharing? (reply to 157782)

Code: Then this is not an "example project" Nazar haha

Ashees: Hello Ton community, I was developing a smart contract in funC to check the BLS verification in Ton blockchain. I completed the contract and deployed it but when I am running the verify(), it is failing.   If possible, can someone please check and suggest the changes that I have to make in my contract.  This is my code   #include "imports/stdlib.fc";      (int) bls_verify(slice pk, slice msg, slice sgn) asm "BLS_VERIFY";    (slice, slice, slice) load_data() inline {      slice ds = get_data().begin_parse();      cell c1 = ds~load_ref();        slice pk1 = c1.begin_parse();      cell cm = ds~load_ref();        slice msg = cm.begin_parse();      cell cs = ds~load_ref();        slice sig = cs.begin_parse();      return (pk1, msg, sig);  }    () save_data(slice pk1, slice msg, slice sig) impure {      set_data(          begin_cell()              .store_ref(begin_cell().store_slice(pk1).end_cell()) ;; public_key 1              .store_ref(begin_cell().store_slice(msg).end_cell()) ;; message              .store_ref(begin_cell().store_slice(sig).end_cell()) ;; signature              .end_cell()      );  }    (int) verify() {      (slice pk1, slice msg, slice sig) = load_data();      int res1 = bls_verify(pk1, msg, sig);      return res1;  }      ;; Get verification result as integer (1 for success, 0 for failure)  (int) get_verification_result() method_id {      return verify() ? -1 : 0;  }    () send_response(slice dest, int result, int query_id) impure {      var msg = begin_cell()          .store_uint(0x18, 6)          .store_slice(dest)          .store_coins(0)          .store_uint(0, 1 + 4 + 4 + 64 + 32 + 1 + 1)          .store_uint(0x12345678, 32)  ;; response op code          .store_uint(query_id, 64)          .store_uint(result, 32)          .end_cell();      send_raw_message(msg, 64);  }    () recv_internal(int msg_value, cell in_msg_full, slice in_msg_body) impure {       ;; Parse message info      var cs = in_msg_full.begin_parse();      var flags = cs~load_uint(4);            ;; Ignore bounced messages      if (flags & 1) {           return ();       }            ;; Get sender address      slice sender_address = cs~load_msg_addr();            ;; Handle empty message body      if (in_msg_body.slice_empty?()) {           return ();       }            ;; Parse operation code      int op = in_msg_body~load_uint(32);      int query_id = in_msg_body~load_uint(64);            ;; Op 1: Set BLS data (public keys, message, signature)      if (op == 1) {          slice pk1 = in_msg_body~load_ref().begin_parse();          slice msg = in_msg_body~load_ref().begin_parse();          slice sig = in_msg_body~load_ref().begin_parse();                    save_data(pk1, msg, sig);                    ;; Send confirmation          send_response(sender_address, -1, query_id);          return ();      }            ;; Op 2: Perform BLS verification      if (op == 2) {          int verification_result = verify();          int result = verification_result ? -1 : 0;                    ;; Send verification result back to sender          send_response(sender_address, result, query_id);          return ();      }            ;; Op 3: Get current verification result without changing state      if (op == 3) {          int result = get_verification_result();          send_response(sender_address, result, query_id);          return ();      }  }

&rey: Failing in which way? (reply to 157790)

&rey: Please note you can't store -1 with .store_uint method.

Ashees: After deployment, when I am running the verification script, it's calling the verify(), but the transaction is failing. Here is the transaction link  https://testnet.tonscan.org/tx/f20bcf26217b043f782a2cdae7486a2750cfcff05d79d5d7d0db3231a0509f2a

Ashees: I am storing that in int not in uint (reply to 157794)

&rey: This line is in question. (reply to 157790)

&rey: Insufficient TON to complete the computations. BLS verification has very high cost assigned. (reply to 157795)

Ashees: Thanks, let me update it and see

Ashees: Currently I am sending 0.002 Ton. How much shall I send?    async sendVerify(provider: ContractProvider, via: Sender) {          const queryId = Date.now();          const messageBody = beginCell()              .storeUint(2, 32) // op code = 2 (verify)              .storeUint(queryId, 64)              .endCell();          await provider.internal(via, {              value: "0.002", // send 0.002 TON for gas              body: messageBody          });      } (reply to 157798)

&rey: 0.200 should be sufficient. (reply to 157800)

Ashees: Ok

Ashees: It is still failing, I redeployed the contract and also changed store_uint to store_int. But still it's failing.  https://testnet.tonscan.org/tx/97d684f78cfc874ecd53fd023f1acdc7903989a23dd34fe45293a25808adf9d2

Ashees: This is my wrapper file   import { Address, beginCell, Cell, Contract, contractAddress, ContractProvider, Sender, SendMode, Slice } from '@ton/core';    export type BlsVerificationConfig = {};    export function blsVerificationConfigToCell(config: BlsVerificationConfig): Cell {      return beginCell().endCell();  }    export class BlsVerification implements Contract {      constructor(readonly address: Address, readonly init?: { code: Cell; data: Cell }) { }        static createFromAddress(code: Cell, pk1: Slice, msg: Slice, sig: Slice) {          const data = beginCell()              .storeRef(beginCell().storeSlice(pk1).endCell()) // pk1              .storeRef(beginCell().storeSlice(msg).endCell()) // msg              .storeRef(beginCell().storeSlice(sig).endCell()) // sig              .endCell();          const workchain = 0; // deploy to workchain 0          const calculatedAddress = contractAddress(workchain, { code, data });          return new BlsVerification(calculatedAddress, { code, data });      }        static createFromConfig(config: BlsVerificationConfig, code: Cell, workchain = 0) {          const data = blsVerificationConfigToCell(config);          const init = { code, data };          return new BlsVerification(contractAddress(workchain, init), init);      }        async sendDeploy(provider: ContractProvider, via: Sender) {          await provider.internal(via, {              value: "0.8",              bounce: false,          });      }        async sendVerify(provider: ContractProvider, via: Sender) {          const queryId = Date.now();          const messageBody = beginCell()              .storeUint(2, 32) // op code = 2 (verify)              .storeUint(queryId, 64)              .endCell();          await provider.internal(via, {              value: "0.4", // send 0.002 TON for gas              body: messageBody          });      }  }

&rey: You did not fill BLS data with opcode 1, did you? (reply to 157804)

Ashees: I am providing it while I am deploying the contract using my deployment script (reply to 157805)

&rey: This does not seem right then. (reply to 157804)

Ashees: Ok, I will look into it and get back to you (reply to 157807)

— 2025-08-30 —

M: How can I speed up getting a bar on the bot about the number of users.My bot uses telegram mini ap

&rey: English-speaking TON Developers Chat. (reply to 157851)

M: What are you trying to tell me? The question is in English. (reply to 157852)

&rey: Your question is not related to TON at all. It has no place in this chat. (reply to 157851)

M: Telegram not connect to TON? (reply to 157854)

— 2025-08-31 —

Healer: Did you check the verify function on test scripts via sandbox ?   That's before you deployed? (reply to 157790)

Александр: Hey all. How I can make withelist for my getgems collection ?

&rey: What is the most gas-optimal highload wallet to date? Usage profile: sending a sequence of messages to a fixed address, one at a time, with as much throughput as possible.

Александр: I use telegram wallet, but if I see- getgems hevent WL functionality (reply to 157899)

Code: let me know if you decide on one, I'm also curious to know (reply to 157899)

Combot: Combot has warned Sunny ☀️ (1/3) Reason: 1 reports

Pem: Hi everyone. I am new to TON dev and I'm working on a dApp idea, which requires to send a message from my TON contract to SecretNetwork (Cosmos) chain, I need my Secret contract to publish a private key when and only when a specific TON contract tells it to. I have researched this a lot but the easiest way with Axelar has not been implemented with TON yet (or I could not found any doc on it) and using a third EVM chain seems like a big hassle and gas headache for me. Any insights, examples, or pointers would be really appreciated. 🤲🙏

Mojisola🍅 🍅: what does this mean??? (reply to 157916)

Pem: I am looking for examples or guides on how to call a Secret contract from a TON contract. (reply to 157918)

— 2025-09-01 —

Devmustee💎: Kindly check TAC SDK (reply to 157916)

Code: Which RPC provider do people use?

&: Visit Toncenter.com. create your api key

Code: You misunderstood my question - "which" means explain your choice (reply to 157947)

Deeks: What are your biggest struggles developing on TON?

— 2025-09-02 —

●▬۩Mohsen۩▬●: Hi there 👋 I want send a jetton automatically to some address  I need use what library for that ? There is any examples?  I want use mnemonic not a wallet like ton keeper (for backend)

&rey: tonutils. (reply to 157984)

●▬۩Mohsen۩▬●: Thankkkk you (reply to 157985)

T: Could someone point me in the director of the smart contract address for the elector smart contract?

&rey: It is -1:3333333333333333333333333333333333333333333333333333333333333333. (reply to 157997)

Code: Does anybody know about deleting smart contracts? Does it refund all gas?

&rey: Refund what, sorry? There was no special fee for deployment, and contract cannot be deleted if it has TON remaining. (reply to 158001)

Code: Imagine there is TON stuck in the contract but no instruction available to withdraw it, then I was hoping delete would cover that too (reply to 158002)

&rey: If there is no instruction to withdraw, then no instruction to delete either. (reply to 158003)

Code: then what is this thing Im reading in the docs (reply to 158001)

Code: but seems docs are incomplete

&rey: 160 = 128 + 32 (reply to 158006)

Code: Another Q, does anybody have any examples of how to make a Tolk contract upgradable?

T: Thank you! Do you know where I can find doccumentation on the methods avilable? I am trying to get data from the contract using a getRunMethod RPC call (reply to 157998)

Tamagoshi: Andrew G Kiba is here?

Anurag: Ohh, yeah live in TON space so forgot this is telegram stars My mistake sir (reply to 158023)

&rey: Please choose a thematic chat instead of continuing offtop here.

&rey: Thematic chat for TMAs is https://t.me/devs, and they may already have an answer.

IDRegistry: Thnx i joined,should i raise my idea there? (reply to 158035)

biomechanic: How quickly is the token verified after creating a yasm file?

Anurag: Thanks for sharing, I wasn't aware of that community. (reply to 158035)

— 2025-09-03 —

Alex: Hi everyone, does anyone know how to remove 'suspicious' mark in transactions on my token?

Mojisola🍅 🍅: what wallet is this? (reply to 158077)

Mojisola🍅 🍅: new token may be marked at first but later removed

Alex: This is Telegram wallet (reply to 158078)

Mojisola🍅 🍅: may be due to the amount of token recieved or may be the name of token

Alex: there may be several reasons for the mark to appear, but it disappear for the future? (reply to 158081)

Mojisola🍅 🍅: yea. it do many times disappear (reply to 158083)

Alex: Great, thnx a lot (reply to 158084)

Jimmy: Yo yo, chill (reply to 158089)

Ruslan: Why do my messages get deleted?

Combot: Combot has warned Ruslan (1/3) Reason: Word **** is not allowed

&rey: Payment mention, basically.  What's the kind and complexity of smart contract? Pchan, wallet, DEX router, something else? (reply to 158099)

Ruslan: Utility NFT collection. Essentially it’s set of 3 smart contracts (reply to 158100)

Pelle: Please how can I earn from ton coin?

Teemu | 機器人🪽: Buy low, sell high (reply to 158105)

&rey: Earning examples: completing bounties, creating new projects, participating in contests. (reply to 158105)

T: Where can i find doccumentation for smart contract methods, specifially looking for the elector smart contract

T: Like what methods are avilable to call on it uising the GetRunMethod

&rey: Like, you can see its code, it is written in FunC and supplied with comments?  ;; returns active election id or 0 int active_election_id() method_id {...} ;; checks whether a public key participates in current elections int participates_in(int validator_pubkey) method_id {...} ;; returns the list of all participants of current elections with their stakes _ participant_list() method_id {...} ;; returns the list of all participants of current elections with their data _ participant_list_extended() method_id {...} ;; computes the return stake int compute_returned_stake(int wallet_addr) method_id {...} ;; returns the list of past election ids tuple past_election_ids() method_id {...} tuple past_elections() method_id {...} tuple past_elections_list() method_id {...} cell get_past_complaints(int election_id) inline_ref method_id {...} _ show_complaint(int election_id, int chash) method_id {...} tuple list_complaints(int election_id) method_id {...} int complaint_storage_price(int bits, int refs, int expire_in) method_id {...} (reply to 158115)

Sunny ☀️: Could anyone unban a tg gc?

&rey: This is not a relevant chat. Go to Telegram support. (reply to 158121)

— 2025-09-04 —

Jimmy: /stat@combot

Combot: Total messages: 158140

TECG • Elchapo: hi how can i claim my ton coin gift?

Keep: Withdraw via Fragment? 👀 (reply to 158145)

Dmitry: Looks like a scam attempt. What is the source of this screenshot? Why do you think this app is legit? (reply to 158145)

TECG • Elchapo: yes (reply to 158149)

TECG • Elchapo: lol that telegram (reply to 158150)

Keep: It looks legit (reply to 158150)

Keep: Download Tonkeeper wallet, open fragment via link and connect your wallet, claim your ton (reply to 158152)

TECG • Elchapo: i have bro (reply to 158155)

Keep: Just connect it to fragment and claim your ton, it will be added automatically to your wallet. Sometimes fragment requires KYC (reply to 158156)

TECG • Elchapo: but not reflect (reply to 158158)

Dmitry: It just looks like telegram, no specific info on screenshot. If this is scam - then signing anything it gives to you in tonkeeper may lead to losing all your wallet content (reply to 158152)

Keep: Try using telegram internal wallet (reply to 158159)

Igor: Where and how you get it ? (reply to 158159)

TECG • Elchapo: i dont know how i can get (reply to 158166)

TECG • Elchapo: until now i didnt claim

SanjarSupport: Hello! I want to try to make an analogue of send (crypto wallet) for a start, at least the function of sending and receiving crypto and connecting stores. I myself am still a beginner in programming, I want to do it for the portfolio, I know it is not an easy project and that it will not be ready to go into production, but I think it is worth trying, to gain knowledge and experience What could you advise? Well, to connect ton for a start

— 2025-09-05 —

Ted: We're hosting a little MCP Hackathon this weekend If you want to build on TON using only your LLM its now possible. 😎  💰 $1,000 prize pool + Tatum plan for grabs ⏰ Runs all weekend  All online, details & how to join: https://tatum.io/mcp-hackathon  Hope to see you there.

Ashees: Hello, I wanted to ask something related to Ton blockchain.  Is there any library which we can use for implementing merkle proof in tact language?

Nick: Hello everyone,  Quick post: I'm a senior Web3 Product Manager and ex-founder with some immediate availability this evening. I'm offering quick, high-impact support for projects that need an expert second opinion.  This can be a 1-hour live strategy session OR an asynchronous review of your materials. My areas of focus include:  Whitepaper / Litepaper review & editing Tokenomics model feedback Product roadmap critique Go-to-Market (GTM) strategy  My background: https://nicksaperov.xyz  If your team needs to solve a problem in one of these areas tonight, send me a DM.

pid | ton: has anyone tried configuring tolk lsp in helix?

— 2025-09-06 —

Combot: Combot has warned Mostafa (1/3) Reason: 1 reports (reply to 158271)

nxrix: I know it's not related to the group topic but does anyone know where I must report an address to get labeled in tonviewer?

nxrix: It's already added to tonscan (reply to 158288)

— 2025-09-07 —

ytiruces: Hi! Why NFT Purchase Failed  here -> https://testnet.tonviewer.com/kQBAl7gdi6jpGG027hx1ah3HA3K_Fjc71lwinEuXK1m3FSLY ?

Combot: Combot has warned Dawn Fronk (2/3) Reason: Word **** is not allowed

fade: Archival dump is no longer available on https://archival-dump.ton.org/dumps/ anyone know where to get it?

— 2025-09-08 —

NANA KOJO: Ok

NANA KOJO: Can someone help me

NANA KOJO: I have been doing ton ads but it’s two weeks now they haven’t started running my ads

NANA KOJO: Any help

F: Since recently the archive dump is only available in TON Storage. Here is the list of BAG's: https://archival-dump.ton.org/index/mainnet.json (reply to 158323)

fade: I wasn't aware about the changes, what is BAG and where can i learn more about them? Thank you (reply to 158336)

F: This is something like torrents, I suggest you take a look at TON Torrent, which implements TON Storage: https://github.com/xssnick/TON-Torrent  But if you are asking for installing your own archive node, MyTonCtrl can now install it itself - you just need to select the block from which you want to synchronize during installation, and MTC will download these archive blocks from TON Storage (reply to 158337)

Ashees: This is my test file,     import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';  import { toNano } from '@ton/core';  import { MerkleProof } from '../build/MerkleProof/MerkleProof_MerkleProof';  import '@ton/test-utils';    describe('MerkleProof', () => {      let blockchain: Blockchain;      let deployer: SandboxContract<TreasuryContract>;      let merkleProof: SandboxContract<MerkleProof>;        beforeEach(async () => {          blockchain = await Blockchain.create();              const merkleProofContract = await MerkleProof.fromInit();          merkleProof = blockchain.openContract(merkleProofContract);             deployer = await blockchain.treasury('deployer');                    const deployResult = await merkleProof.send(              deployer.getSender(),              {                  value: toNano('0.05'),              },              {                  $$type: 'Deploy',                  queryId: 0n,              }          );             expect(deployResult.transactions).toHaveTransaction({              from: deployer.address,              to: merkleProof.address,              deploy: true,              success: true,          });        });        it('should verify proof', async () => {      const root = BigInt("0x68203f90e9d07dc5859259d7536e87a6ba9d345f2552b5b9de2999ddce9ce1bf");      const leaf = BigInt("0x3ac225168df54212a25c1c01fd35bebfea408fdac2e31ddd6f80a4bbf9a5f1cb");      const proof = {          m: new Map([              [0n, BigInt("0xb5553de315e0edf504d9150af82dafa5c4667fa618ed0a6f19c69b41166c5510")],              [1n, BigInt("0xd253a52d4cb00de2895e85f2529e2976e6aaaa5c18106b68ab66813e14415669")],          ]),          length: 2n      };        const result = await (merkleProof as any).getVerify(proof, root, leaf);      expect(result).toBe(true);  });    });    While running it I am getting this error      ● MerkleProof › should verify proof        TypeError: dict.storeDirect is not a function          645 | export function storeTupleIntArray(source: IntArray) {        646 |     const builder = new TupleBuilder();      > 647 |     builder.writeCell(source.m.size > 0 ? beginCell().storeDictDirect(source.m, Dictionary.Keys.BigInt(257), Dictionary.Values.BigInt(257)).endCell() : null);            |                                                       ^        648 |     builder.writeNumber(source.length);        649 |     return builder.build();        650 | }          at Builder.storeDictDirect (node_modules/@ton/core/dist/boc/Builder.js:434:14)        at storeTupleIntArray (build/MerkleProof/MerkleProof_MerkleProof.ts:647:55)        at MerkleProof.getVerify (build/MerkleProof/MerkleProof_MerkleProof.ts:1030:28)        at Proxy.<anonymous> (node_modules/@ton/sandbox/dist/blockchain/Blockchain.js:494:51)        at Object.<anonymous> (tests/MerkleProof.spec.ts:53:47)     Does anyone have any idea to solve it?

TON Bounty Bridge: 📊 Update Digest!  🔍 Active bounties: 10 ✅ Approved bounties: 1 🔄 Bounties seeking suggestions: 5  📣 We value your feedback! Join the community discussion and participate in shaping the future. Click the 'Create Your Own Bounty' button to get started.  Happy contributing!

Aziz: Hello everyone! I'm writing a small Backend service for a TON smart contract delpoyment, I'm trying to inject BOC from a simple Counter script (via Blueprint)  It works fine by using npx blueprint run  But when I generate BOC to run it by using TonConnnect on Web, it somehow makes an error said that something get wrong  Thank for help

fade: Do you know what happened to the public archive node 135.181.177.59:53312, it has been down for serveral months (reply to 158338)

fade: The bot is so broken (reply to 158352)

Combot: Combot has warned fade (3/3) Reason: Word **** is not allowed

Combot: Combot has kicked fade

..: Do public lite-servers have a rate limit?

— 2025-09-10 —

Ton: Hi all…. I notice that .ton domains that have expired have no option for me to bid for them. I have raised this with ton support who replied saying “To make the first bid on such a domain, the transaction must contain special data. Unfortunately, there is no ready interface for this. You can try to search for information or ask in the developers' chat:”

Daniil: is there any vesting/token management solution on TON which I could trust?

Dmitry: You can check domain contract source code https://github.com/ton-blockchain/dns-contract/blob/main/func/nft-item.fc to find correct opcode and msg structure to restart auction on expired domain. I guess you need to read carefully around line 242 (reply to 158435)

Code: https://docs.ton.org/v3/documentation/smart-contracts/contracts-specs/vesting-contract (reply to 158437)

Ton: Thank you for this … I will look into it.  :𝗼) (reply to 158445)

T: Is the source code for this avilable somewhere https://1ixi1.github.io/elector/?

T: I'm trying to see how they decoded the data from the elector smart contract

T: Wait actually better question

T: Can someone point me in the direction of the Ton support chat

&rey: Match against https://tonscan.org/address/Ef8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM0vF#source. (reply to 158474)

&rey: I'm not sure which chat you mean, but your question above is appropriate for https://t.me/tondev_eng . (reply to 158476)

Калыван: Hello everyone, can you see such a project that generates wallets with a beautiful ending? Tell me how I can seal it. I can't do it.... I spent the whole evening on this. I'll get you some coffee for help

— 2025-09-11 —

Root: https://tonviewer.com/transaction/22b4b8f9435aa8ecb89831c578a48c628fc8104ccbe64aa8b223762dc9935dc5  How could I know why this transacion failed?

Denis: sending messages also required some fee. so i just don't have enough ton (reply to 158499)

Root: Thank you (reply to 158508)

Combot: Combot has warned Maller🆓 🦊🦊 (3/3) Reason: Word **** is not allowed

Combot: Combot has kicked Maller🆓 🦊🦊

Don capu: Test coins are different from Flash coins please know that and be specific for what you need before PM

glasderg: hello, this is not really a technical question as per say, but I am looking for a little history lesson on the sticker packs. Is there someone I can email or reach out to to talk about this? Thanks so much! ❤️

— 2025-09-12 —

bharath: how someone could add more tokens to liquidity than total supply?? https://tonviewer.com/transaction/c9df6aac005f9d635773b306dd7fc9173210bd43157de0a6c2389db60070fb13

Mojisola🍅 🍅: mint new tokens (reply to 158578)

bharath: But if they mint the totalsupply should increase right??

bharath: And if you look closer the mint authority is revoked

Mojisola🍅 🍅: thought you are deploying new token?

Mojisola🍅 🍅: no way to know this thigh without checking the source code whether funC or Tact code. (reply to 158584)

&rey: That is possible with non-compliant jettons. You are advised not to touch them. (reply to 158578)

bharath: There are many token  deployed via stonkspump which behaves like this

مصطفى محمد: I created a Mini App, but after connecting the wallet and trying to make a deposit, it shows me: “Transaction failed – please check your wallet connection and try again.”

— 2025-09-13 —

Unlimited CHiDON ❣️: Please can someone help me on mini app on ton

Manoj: Ton ka wallet kaise banaaye

Manoj: Koi link ho to share mare 🙏

Manoj: Mai ton Stak karna chahta hu . kaise karu ?

Alex: Hi all. I have a domain mytoken.ton, it is linked to a wallet. How can I make it visible in transactions like here?

Code: Anybody have any examples of upgradable contracts in Tolk?

Mojisola🍅 🍅: why?  can somebody educate on that (reply to 158655)

TECG • Elchapo: it is really hard to claim bro (reply to 158160)

TECG • Elchapo: anyone can help me to how claim this? (reply to 158666)

&rey: The language of this chat is English. (reply to 158611)

Obinna: How do I start

Виконт vangaard: Fragment requires KYC before you can use it (reply to 158669)

TECG • Elchapo: how bro (reply to 158700)

Виконт vangaard: Connect your Telegram to Fragment, complete KYC on Fragment and proceed to withdraw. (reply to 158701)

Виконт vangaard: But last I checked Durov hadn't made TON withdrawal possible, no? (reply to 158702)

Mojisola🍅 🍅: yes. this is correct (reply to 158700)

TECG • Elchapo: i already KYC but i cant withdraw (reply to 158702)

TECG • Elchapo: yes i check but im not sure (reply to 158703)

&rey: This is chat about how to develop on TON, not about what features Telegram offers or does not offer at the moment.

— 2025-09-14 —

Edison: Please help me

Edison: My address was called by the contract to tamper with the auction proceeds address

&rey: What resulted? (reply to 158779)

Edison: Changed the beneficiary address and auctioned my NFT

Edison: He forged a website that looked just like Frogment's, even the domain name was the same.

Edison: please

Edison: Can someone help me?

&rey: That's scam. If auction started that's not recoverable. Sending more money will serve just to lose more. (reply to 158786)

&rey: Report the user to https://t.me/notoscam . (reply to 158792)

Edison: Can't I freeze this scammer's address? I checked his address and he has cheated many people.

&rey: The Open Network is "open" for a reason; as the supermajority of blockchains, it does not support blocking active addresses. No one except Telegram can help you. (reply to 158795)

Великий: Hi guys, can I ask you to give me some test tones for one test?

Mojisola🍅 🍅: Telegram can help block user address? (reply to 158799)

&rey: No. (reply to 158813)

Mr: Hello, I would like to report a fraud committed by a member of the TON team. (reply to 158822)

Mr: He introduced himself as an intern on the TON team, thus instilling trust in people. Then, Solana also came up with a project and pulled the rug.

Mr: He removed his Twitter posts.

Андрей: you shouldn't trust the words of different users (reply to 158837)

Mr: He has the title of approved TON intern team worker. (reply to 158846)

Андрей: is there any confirmation of this on the official websites of the TON? if someone tells me that he is a member of some team, then it is usually a lie. You should always be careful when handling any information (reply to 158847)

&rey: There is confirmation of X's internal systems of who's running which account, in fact. (reply to 158848)

Mr: Dude, the guy has a TON of verified account signs on his Twitter account. (reply to 158848)

Андрей: I don't understand how X works, but I am generally skeptical about all information and recommend double-checking in different sources and on different platforms. (reply to 158849)

Mr: You're right, but I think being approved by TON is a huge source of confidence, my friend. (reply to 158851)

simo: How ican add telegram stars

simo: On mini app

&rey: Off topic for this chat. Please contact https://t.me/devs . (reply to 158856)

simo: Thanks (reply to 158859)

— 2025-09-15 —

Виконт vangaard: He has been fired 🤣 (reply to 158852)

Великий: Hi guys, can I ask you to give me some test tones for one test?

Super: Anyone working with RPC? If any dev are in to blockchain data infrastructure connect

&rey: Most projects are calling Toncenter-like RPCs.

Eugene: Yes we at Chainstack offer RPCs for TON and 70+ other networks (reply to 158899)

Super: Appreciate the reply! We’re building Roboton a decentralized marketplace powered by Telegram MiniApps. Real-time analytics, RPC modules, and mempool logic are core to our backend. Would love to sync with anyone working on TON infra or RPC scaling

Code: use this bot: @testgiver_ton_bot (reply to 158892)

Super: Would love to learn more about Chainstack’s setup for TON  especially around WebSocket support, throughput flexibility, and regional endpoint options. We’re onboarding fast and preparing to offer RPC modules to builders in our ecosystem (reply to 158901)

TON Bounty Bridge: 📊 Update Digest!  🔍 Active bounties: 9 ✅ Approved bounties: 0 🔄 Bounties seeking suggestions: 5  📣 We value your feedback! Join the community discussion and participate in shaping the future. Click the 'Create Your Own Bounty' button to get started.  Happy contributing!

Super: That’s true  Toncenter RPCs are widely used. We’re building Roboton with modular RPC logic, and looking to support TON with enhanced features like mempool signals, WSS, and region pinned endpoints. Curious if you or anyone here has scaled beyond Toncenter’s setup  especially for high throughput or real time UX (reply to 158900)

Eugene: Here you go: docs.chainstack.com/reference/getting-started-ton (reply to 158905)

Super: I will look and see how to collaborate (reply to 158910)

Super: Can’t you give end point RPC without running node?

&rey: Would that scale at all? (reply to 158914)

&rey: You might be looking for service like Orbs' TON Access, but it degraded silently.

Super: When I have end point it’s easy to request data from blockchain node so we can utilize the data to build our relevant module

Manao: Hey everyone is there someone building a launchpad rn ?

Combot: Combot has warned Chris G (1/3) Reason: Word **** is not allowed

Chris: Hello Everyone I’m Chris CEO of NØBANK. The IdeaTon winner for SSEAHub and we are looking for a TON Blockchain Developer.   Must-Have Skills & Experience  Deep TON expertise: Wallet contracts (v3/v4/v5), TL-B/Cells/BOC, seqno/valid_until, send modes, jettons (TIP-3), DEX routers/liquidity, LiteServer/RPC.  TypeScript expert (modern TS, strict types); comfortable in Next.js/React environments for client-side signing (and/or Node for backend helpers).  Hands-on with ton/ton, ton/core, ton/crypto, TonWeb (or equivalents).  Proven experience building native signing flows (no TonConnect) and direct TX pipelines.  Prior work integrating DEX/DeFi SDKs (ideally STON.fi) and yield protocols.   Security-first mindset: key lifecycle, encryption, biometrics/PIN, phishing-resistant confirmations.  Strong product sensibility: can translate protocol details into a smooth, intuitive swap/stake UI.

— 2025-09-16 —

Wayfs: Hello, can anyone tell me how to connect a bot to TON, I want my p2p platform to have USDT, Bitcoin, Ethereum, Ton, BNB, SOL cryptocurrencies and Ton, TRC20, BEP20, ERC20, SPL networks in my Wallet

Dmitry: TG bot is a program that runs on your server, so start from https://docs.ton.org/ and learn how to integrate your server-side programming language with corresponding TON SDK (reply to 158962)

Xunibird: I can help you. (reply to 158962)

Adam: Hello Ton, can I complain?

&rey: This is chat about how to develop projects on TON. (reply to 158971)

Anthony: Intellij TON v3.0.0 is the biggest update of the plugin ever.  We have improved every part of the plugin, every supported language. The list of supported languages has expanded, and now the plugin also supports TASM, the future assembler standard in the Tolk language, and Fift assembly has received its improved support as part of Fift support. BoC files are no longer just opaque binary files, you can open them and see the disassembled code! In this version, we also supported the latest release of Tolk 1.1.  Available on JetBrains Marketplace  Read full change-log: https://github.com/ton-blockchain/intellij-ton/releases/tag/v3.0.0 (forwarded from IntelliJ TON Development)

Code: Will there be a VSCode equivalent? Not sure who is using IntelliJ in 2025 haha (reply to 158973)

Anthony: Sure, this is a plugin for VSCode https://docs.ton.org/v3/documentation/smart-contracts/getting-started/ide-plugins#visual-studio-code (reply to 158977)

Anthony: It will be also updated soon

TON Bounty Bridge: ​Swap limit fee  🏷 Developer Tool  Summary:The amount of ton that is needed to swap on ton ecosystem is high so i suggest the cost to be lower ...  Created by saulcarer

— 2025-09-17 —

Lee: Hi everyone, does anyone know how to get the USDT for the testnet?

&rey: There is no "the USDT" there. You mint a new jetton, with decimals 6 if needed. (reply to 159017)

Lee: understand. Thank you. i'm try it

Slava: Can you adjust the indentation now? 😅 (reply to 158973)

Petr: yep (reply to 159023)

Slava: Does it respect EditorConfig though? (reply to 159024)

Petr: It should (reply to 159026)

OzzieCrypt: Hey everyone i'm searching for USDT on Testnet but couldn't find it

OzzieCrypt: Is there a faucet for it? can someone help please

&rey: See https://t.me/tondev_eng/159018 (reply to 159032)

OzzieCrypt: Oh okay

OzzieCrypt: I'm trying to mint my token but i get  not enough balance errors although i have ton testnet tokens (reply to 159034)

Dogersen: Hello builders 👋  I’m looking for an experienced TON blockchain developer to collaborate on a new project:  NFT marketplace on TON with auctions and escrow  Smart contracts (FunC/Tact) for offers, auctions, dispute handling  NFT support (TIP-4): minting, selling, reselling  Wallet integration via TON Connect  Mini App (WebApp) interface with social login and notifications  Backend (Node.js or similar) for indexing and APIs   🎯 Goal: build an MVP (smart contracts + Mini App + basic backend) and then continue with long-term development (UI/UX, analytics, premium features, anti-fraud).  If you’re interested, please DM me with your experience and examples of TON projects.  Thanks

「Ж」 VXK PROD: Hello TON friends, What’s the best way to fetch a token price on the TON network? I’m looking for a reliable approach (API, SDK, or on-chain method). Any recommendations?

— 2025-09-18 —

Code: Does anybody have a good method for finding out TX results from a highload wallet? all the docs are for regular wallets only :/, and I cant just call .getTransactions() because there could be hundreds

Code: its also not a reliable pattern because the destination address could be very hot (reply to 159074)

Code: im shocked there isnt a guide for this, confirming TX result is very basics of chain 🙁

&rey: First we need to understand: what do you consider to be the token price? (reply to 159061)

&rey: Not precisely; it will all happen eventually. (reply to 159077)

&rey: Consider Toncenter's /tryLocateSourceTx and /tryLocateResultTx. (reply to 159073)

fade: Im trying to setup an archive node, after downloading blocks using mytonctrl and successfully started the validator, it says this in mytonctrl status Local validator initial sync status: Syncing blocks, last known block was 176496866 s ago Local validator last state serialization: 200 blocks ago Liteserver queries for the past 241 sec (success/error): 0/0 Local validator database size: 7994.7 Gb, 23.1% Based on the current speed, the syncing will take a whoping 9-10 days to finish, is this normal, and is there something I can do to improve the db import performance? Also, in the last 10 hours my database size is smaller by ~15Gb, is it a problem?

OzzieCrypt: Is there a documentattion for payment in telegram? i'm having issues with testnet

OzzieCrypt: i mean for common issues

&rey: Please elaborate where you mean "TON" and where you mean "Telegram", exactly. (reply to 159112)

●▬۩Mohsen۩▬●: I want a .ts or a .js code to continue mined in getgems  Can anyone help ?

fade: can anyone help me with this? (reply to 159111)

Super: Why don’t you use RPC so many provider available it’s easy and not time consuming (reply to 159111)

fade: I needed to do low-level indexing of the entire chain, and using RPC or even dton's private node with a 20 RPS limit just isn't practical (reply to 159142)

F: Yes, it's normal. Such a low speed is associated with some narrow implementation in the node. (reply to 159111)

— 2025-09-19 —

BACKPACKER: Hey, everyone! It's a pleasure to join! We're running a mini app on Telegram for a rewards program. Glad to meet you all here as one of Dev. teams :)

Code: Pretty sure most people are using Cursor/VSCode/Windsurf (reply to 159160)

Code: These are only IntelliJ products - of course IntelliJ plugin would only be downloaded into IntelliJ apps?

Andrey: Extension for vscode has a little bit less downloads (all time), than IntelliJ plugin downloads for last month (reply to 159162)

Code: Ok just realized VSCode is blocked in Russia (reply to 159165)

Code: probably why, TON community has large Russian population I think - do you have stats on users/devs per region? (just curious)

Andrey: Jetbrains also blocked in Russia, you can’t directly download from marketplace, only from github releases (or using vpn/proxy) (reply to 159167)

Andrey: A recent survey in this chat asked which IDEs developers use. The parity between IntelliJ IDEA and VScode is roughly equal, but the download numbers show different results. I'm not saying VScode is "bad." This is simply a response to the question "Who will use IntelliJ IDEA in 2025?" The answer: at least half of the developers. (reply to 159162)

Code: Understood, thanks for the data, interesting that TON doesn't match my personal social circles (reply to 159170)

Combot: Combot has warned Super Vision (1/3) Reason: Word **** is not allowed (reply to 159143)

Jeffsay: hi guys, can we get usdt on ton testnet? i was looking around for the faucet but i didnt find one

&rey: You can find it at https://t.me/tondev_eng/159018. (reply to 159175)

Jeffsay: i see, thanks mate.   anyway for this v3 api get message does it require the token to be verified to get indexed by the network?

Jeffsay: im trying to find by the body_hash but it seems only transaction from TON that are indexed

&rey: Not 'verified', since the blockchain has no such concept...  Well are you aware of what a jetton is? (reply to 159177)

Jeffsay: something like  ERC-20 standard for tokens and smartcontracts?  hmm actually, ill just play around for now. Im kinda new on this, thank you for the answer..

Super: When I talk about RPC why the message deleted I am a blockchain data analytics and I specially work with RPC it’s easy and fast

Bl0rm: same shit bro have you tried github pages? (reply to 120672)

Anthony: 🫧 Tolk v1.1: built-in map<K,V>, enums, private and readonly fields, method overloads  Two months have passed — maybe you even started to worry about the silence. The reason is simple: I worked on features that are "nice to have" but complex and time-consuming to implement — and they've only just been finished.  ✅ Notable changes in Tolk v1.1:  1. map<K, V> — a convenient zero-overhead wrapper over TVM dictionaries 2. enum — group numeric constants into a distinct type 3. private and readonly fields in structures 4. Overload resolution and partial specialization  PR on GitHub with detailed info.  ✔ Built-in maps  Forget about uDictSetBuilder, sDictGetFirstAsRef, and the endless boilerplate of low-level dict helpers. A universal map<K, V> now fully replaces them.   var m: map<int8, int32> = createEmptyMap(); m.set(1, 10); m.addIfNotExists(9, -90); m.delete(9);   // now: [ 1 => 10 ] m.exists(1);   // true m.isEmpty();   // false   Just m.get() — no need to care about cells and slices under the hood:  val r = m.get(1); if (r.isFound) {   // true     val v = r.loadValue();  // 10 }  // or if the key 100% exists val v = m.mustGet(1);  // 10   Easily iterate forward and backward:  var r = m.findFirst(); while (r.isFound) {     // use r.getKey() and r.loadValue()     r = m.iterateNext(r); }   Any serializable keys and values — it just works:  map<address, Point> map<Point, Cell<Extra>> map<int32, map<int64, bool>> ...   All in all: - self-explanatory methods, nicely suggested by IDEs - DICTISETREF, DICTREPLACE, DICTUREPLACEGET, ... — 100+ asm instructions covered by the type system - all deserialization to/from cells perfectly hidden by high-level API - absolutely zero overhead compared to low-level TVM dictionaries  ✔ Enums  A long-awaited syntax feature for grouping constants.   // will be 0 1 2 enum Color {     Red     Green     Blue }   Being integers at runtime, enums have their own place in the type system. They resemble TypeScript/C++ enums. (Unlike Rust, where each variant may have its own shape. In Tolk we have union types — a more powerful solution)   struct Gradient {     from: Color     to: Color? = null }  var g: Gradient = { from: Color.Blue }; g.from == Color.Red;    // false   Compatible with all language features: auto-serialization, exhaustive pattern matching, generics, etc.  ✔ Private and readonly fields  Fields can now have modifiers: * private — accessible only within methods * readonly — immutable after object creation   struct PosInTuple {     private readonly t: tuple     curIndex: int }  fun PosInTuple.last(mutate self) {     // `t` is visible only in methods     // and cannot be modified     self.curIndex = self.t.size() - 1; }   ✔ Partial specialization  Now it's possible to overload methods for "more specific" implementations:   // general implementation fun Iterator<T>.next(self) { ... }  // a more specific one fun Iterator<Cell<T>>.next(self) { ... }   In complex scenarios, this feature lets you adjust the behavior of specific types while keeping a common interface. It "just works", but internally the compiler was enhanced with shape of types, structural depth, type dominators, and several heuristics.  🌳 After Tolk v1.0 release, many people and companies started migrating from FunC to Tolk. I have received a lot of feedback and requests (and almost zero bug reports, huh). Meanwhile, a bigger roadmap is already in motion. In the near future I'll also try to close long-standing questions around TypeScript wrappers, and deliver proper from-scratch documentation. (forwarded from TOLK lang)

Ryúk: How can I acquire an expired TON domain?

Super: Can I get a assistance regarding ton node or if there is any built in end point rpc I will be looking into this because we are working in blockchain data analysis so we need real time on chain data

&: why don't you use tonconsole?(tonapi)? (reply to 159197)

Super: I can fetch limited less data using toncomsole  tonpai?

&: check out their doc. you can fetch any specific data from there.

&: Why don't you check their doc first? (reply to 159202)

Super: If you don’t know how to works end point why you comments  We are not looking for advice such type

&: Bro this is ETH and we are on TON. ETH is differ from TON. IDK what kinds of data you require. but do not rely on only endpoint. check api services and websockets also. (reply to 159202)

Super: Sorry to share the bot  maybe they not allow if you like we can show more advance information that working on chain data potential

&: you can dm me

Super: As I said I am working  with multiple blockchain so Ton is one of them

Super: I will like to get any advance developer from Ton I will be only discussing regarding ton blockchain topic

Anthony: ✈ TON Connect UI 2.3.1 — PLEASE UPDATE  This continues our push to improve reliability and success rates across the TON ecosystem.  📁 @tonconnect/sdk v3.3.1 📁 @tonconnect/ui v2.3.1 📁 @tonconnect/ui-react v2.3.1  👥 What changed   • BREAKING: ton_proof limits: payload ≤ 128 bytes, domain ≤ 128 bytes, payload + domain ≤ 222 bytes. If you exceed these limits, the connection will fail.   • BREAKING: sendTransaction & signData: requests are now strictly validated against the spec. Non-conformant requests will fail.   • stateInit, payload, and cell now accept both Base64 and Base64URL, auto-converted to Base64 per spec.   • Migrated wallet list URL to https://config.ton.org/wallets-v2.json for improved reliability   • Updated fallback wallets list to match https://config.ton.org/wallets-v2.json   • Client ID added to all deeplinks to allow better UX on the wallet side.   • Improved overall package quality and stability, increased test coverage.  🗒 What to test   • Connect (ton_proof only): ensure your payload and domain sizes are within limits. Typical failure causes: the payload or domain does not meet the limits.   • Send transactions: verify that the request shape, required fields, types, encodings exactly match the spec. Typical failure causes: invalid address format, amount not a string, bad payload/stateInit encoding, unknown fields.   • Sign data: verify the request type and fields are correct. Typical failure causes: wrong type and field combination, bad encoding.  ⬇ To update, run npm install @tonconnect/sdk@3.3.1 @tonconnect/ui@2.3.1 @tonconnect/ui-react@2.3.1  🔗 Specification https://github.com/ton-blockchain/ton-connect/blob/main/requests-responses.md#methods  💬 Encountered issues? Please report them on GitHub at https://github.com/ton-connect/sdk/issues.  ❤ Your feedback and usage examples are crucial. Share your experiences to help us evolve the SDK! (forwarded from TonTech)

grachzy: Does it make sense to switch from Tact to Tolk? Is there a significant gas saving when using Tolk instead of Tact?

— 2025-09-20 —

Artur: Hi! Does minter.ton.org support the Jetton 2.0 standard?

Khosro: Hey everyone,  I'm trying to run an entry proxy on my remote server using the rldp-http-proxy tool, and I have a couple of important questions:  1. Is the generated ADNL address tied to my remote server's IP address? In other words, if my server's IP changes, will I lose my proxy completely?  2. How can I change my server or its IP address without having to update the ADNL address in the .ton domain's DNS records?  https://docs.ton.org/v3/guidelines/web3/ton-proxy-sites/running-your-own-ton-proxy

&rey: If I remember correctly, ADNL address is not bound to IP by itself, and proxy will rebroadcast each IP through DHT. (reply to 159279)

Khosro: I thought the same, but I needed the reassurance you gave me (reply to 159280)

Petr: How is 625 + 331 less than 440 for IntelliJ in September, based on your previous screenshots? 😁 (reply to 159165)

Petr: Survey from ~November 2024 (reply to 159170)

Petr: Tolk is officially recommended for development on TON, and most likely all future contracts will be written in Tolk (reply to 159225)

Code: Would love some help with making a Tolk contract upgradeable please  https://github.com/ton-blockchain/ton/issues/1807

Petr: Check this article as a reference https://docs.tact-lang.org/cookbook/upgrades/#_top  setCode is key here (reply to 159291)

&rey: Especially for developers who are new to the ecosystem and are likely to make mistakes in their first contract(s).  I think this is wrong mechanism to suggest to beginners, rather than redeploying contracts from scratch.

&rey: You missed Tolk vs Tact. (reply to 159292)

Petr: The principles are the same (reply to 159294)

Code: Quite seperate things, a new contract isn't possible sometimes (e.g. NFT contract)  lets say I want to add freezing functionality to my NFT contract in the future, I cant just deploy new contract (reply to 159293)

Code: Thanks Petr I will take a look, but would be nice for the dev team to improve Tolk docs in general (reply to 159295)

Petr: This is definitely planned, see the Tolk 1.1 release post (reply to 159298)

&rey: First, the NFTs you provided to users are contracts (here meaning as in "legal contracts" and not "smart contracts"): they say what can happen to them and users can rely on it. When you add freeze functionality, you are unilaterally walking back on that contract and changing it to be something else.  Upgrading is sometimes convenient, but not in all applications. There are more general solutions of exchanging old tokens to new 1:1. (reply to 159296)

&rey: Having a security bug in upgradeable contract also increases variance of outcomes.

Code: NFTs are not legal contracts lol, and also this is dev chat not legal chat, also you have no idea what im building, and it was just an example for general functionality that is very basic. All mainstream chains let you upgrade contracts and have clear guides (reply to 159300)

&rey: Well each project has choice on their relation to tokens, indeed. (It is best when it is laid out to users clearly as well.)  You sure noticed that I agree that a guide on upgrading is needed? (reply to 159302)

Code: yes yes we should just be more supportive of eachother and not attack each other haha, TON development is hard enough  I have wrote smart contracts on Both EVM and SVM and this is by far the hardest

grachzy: And what about gas? Is there a significant difference with Tact? (reply to 159290)

Petr: Yeah, it's actually much better than FunC, and Tact in some tasks is on par with FunC, in some tasks Tact a bit faster and in some a bit slower, so Tolk is better than Tact in gas 😄  Check this repo: https://github.com/ton-blockchain/tolk-bench

Lekcv |🐾: Gm to all dev in the house. Who is active building and already shipping a project that's still in its early stage and also trying to onboard non tech team members and all should signify.

— 2025-09-21 —

Harut: Hi everyone. I have a short question. I have smart contracts written in solidity. I want to integrate everything on TON network but I know only solidity. Are there any tools or compilers for compiling from solidity to TON bytecode for deployment? So the main question is how can I deploy or integrate my smart contracts in TON ecosystem.

Teemu | 機器人🪽: Nope (reply to 159347)

Harut: So it is not possible in any way?

Teemu | 機器人🪽: Im pretty sure, but im not a pro

&rey: Automated? Most contracts cannot be transformed in automated way. (reply to 159349)

&rey: You're missing the point that TON is a blockchain of its own and even has different design principles from EVM-compatibles. (reply to 159347)

Harut: Ok. Thanks for answers. I got you

Saulcarer: Hello am saul i want to give a suggestion on ton blockchain change but don't know where right to do so, can i get help here

nxrix: Hello I'm making an app that uses ton connect  I need to verify and generate a secret key for the wallet connected in the app ( offline generated not server side ) but don't know if that's possible and does ton connect give enough info to do that

&: why not. (reply to 159364)

&rey: @ton/crypto plus @ton/ton do offer that, without any need for TON Connect 2. (reply to 159364)

nxrix: I mean the secret key must be unique and only for that wallet so I can also verify the public key to be for that wallet (reply to 159366)

&rey: The frontend will not, ever, obtain secret key for the specific wallet user connected. (reply to 159367)

Saulcarer: Hello on ton blockchain is there a usdt payload or

Teers k 🐾: If there is any ton community developers, please add AI inkeep tool to TON docs website. It would be very useful to learn and understand

Teers k 🐾: Solana and BNB Chain already have that (reply to 159370)

— 2025-09-22 —

&: Why don't you ask here? if it's concerned with TON. (reply to 159372)

Howie: where to get coin verified??

𝕠𝕩𝕥𝕙𝕣𝕠𝕨-𝕦𝕟𝕝𝕖𝕤𝕤: Hi devs! 👋 Two Vault standard proposals are shaping TON's DeFi future - your input matters!  📋 TEP-524: Tokenized Vaults Standard for TON Blockchain  Implementation: https://github.com/torch-core/tep-vault-standard  PR: https://github.com/ton-blockchain/TEPs/pull/524  Related Article: https://tonresear.ch/t/tep-524-tokenized-vaults-standard-for-ton-blockchain/42209  📋 TEP-525: Tokenized Vaults  PR: https://github.com/ton-blockchain/TEPs/pull/525  Join the discussion in the PRs and help build the best vault standard for TON!

TON Bounty Bridge: 📊 Update Digest!  🔍 Active bounties: 9 ✅ Approved bounties: 0 🔄 Bounties seeking suggestions: 5  📣 We value your feedback! Join the community discussion and participate in shaping the future. Click the 'Create Your Own Bounty' button to get started.  Happy contributing!

&rey: Neither standard actually says clearly what a Vault is meant to be. (reply to 159397)

&rey: Thus, scope of applicability is very unclear for coders. Like... would DEX developers need to read the standard? vesting contract developers? who else?

&rey: not to forget HTLC (hash/time lock contracts used for atomic crosschain swaps) (reply to 159400)

Margarita: Hi! I need testnet USDT Jetton for testing. Is there a faucet or can someone send me some test Jettons?

&rey: See https://t.me/tondev_eng/159176 please (reply to 159405)

Marcovaldo: Hi, what about the validators vote that took place on 16 September on BTC teleport? Is there any platform to see vote results?

Vsevolod: TON Connect is a tool to connect wallets, private keys are stored on the local device or custodially (reply to 159364)

Vsevolod: Generation of private keys is connected with wallet creation. That process is connected more to the wallet side, not ton connect

Vsevolod: If you'd like create a wallet for user, should do that having solution for storing key

Vsevolod: Keys storage can be conducted both server and user side

Petra: Hello I'm looking to create a bot that detects token buy and sells Is there any open source project to get started or API that can make my work easier? I don't know where I must start from.

Anthony: https://tonapi.io/ or https://toncenter.com/ (v3) + https://www.privy.io/ or own smart contract + https://ston.fi/ or https://dedust.io/ DEX Aggregator SDK (reply to 159420)

&: I have already developed which monitors mempool and outputs json style data. about known transactions including token transfer. ton transfer. swap(stonfi v1, v2 dedust). etc.. (reply to 159420)

Petra: Is it a public API, bot or open source project? (reply to 159423)

&: I have developed not a "public" or "source" (reply to 159428)

Petra: can I have the code or know how it works? (reply to 159429)

— 2025-09-23 —

Angel: Hello, does anyone know or have a repo that allows you to send two jettons in a single transaction?

Angel: The truth is, I don't know how to do that thing of sending two jettons in a single transaction.

kevin: If you mean in a single external message, that will do

&: Why not. wallet v5 can send several tx at one time. (reply to 159438)

&rey: Where are you sending from? 1. TON Connect 2: pass multiple messages to sendTransaction. 2. your favorite library handling secret key: it also defines how to create transfer order with multiple messages. 3. smart contract: call send_raw_message multiple times.  For 2 and 3, take care about mode which determines how much TON goes into each message. (reply to 159438)

Anthony: 🔨 Simplifying code coverage in Blueprint  The new update introduces command, which collects coverage reports from all tests into the coverage directory. Update your packages and try it out now!   blueprint test --coverage  📁 @ton/blueprint v0.41.0 – 2025-09-23 📁 @ton/sandbox v0.37.2 – 2025-09-23  ⬇ To update, run npm install @ton/blueprint@latest @ton/sandbox@latest  💡To learn more, visit GitHub pages: https://github.com/ton-org/blueprint, https://github.com/ton-org/sandbox.  💬 Encountered issues? Please report them on GitHub at https://github.com/ton-org/blueprint/issues.  🎁 Your feedback and usage examples are crucial. Share your experiences to help us evolve the SDK! (forwarded from TonTech)

Steel: Hire someone if you are not knowledgeable enough to do it on your own (reply to 159420)

✶ 𝐀 𝐑 𝐆 𝐎: how can i change my old dns domain, and associate the new one, i tried to contact tonkeep support, but i still haven't received a response after a day.  i associated my wally address with the new DNS domain but the old one still appears.

TON Bounty Bridge: ​Json  🏷 Developer Tool  Summary:{"name": "p2eNFTGame","version": "1.0.0","keywords": ["util", "functional", "server", "client", "bro...  Created by Abdul-cyber147

TON Bounty Bridge: ​Request for additional information to complete draft issue  Created by Abdul-cyber147

— 2025-09-24 —

Nurlan: HI Guys !

Nurlan: I discovered this channel from "Wallet in Telegram" company

Brave: https://github.com/braveltd/fragment-api  :)

Mojisola🍅 🍅: grab tutorials (reply to 159420)

Unction: Hi Everyone. I want to create a dex. I don't know how to start. Url is a bit of a problem for me now

A.B.M: Hi, am I allowed to share my X space for calling influencers and promoters?

Code: is it related to TON engineering (reply to 159514)

Code: How is Url a problem (reply to 159510)

A.B.M: Yes, it's a TON project but right now I need promoters to introduce it (reply to 159515)

Code: sounds not related to engineering, so no (reply to 159518)

A.B.M: Okay 🙏🏻

nxrix: How can I get the address of wallet connected using ton connect or provide it a function to be called after connection?

&rey: You are not allowed to do so. (reply to 159514)

nxrix: any idea how to fix these error for ton connect?

Mhdi khosravi: Hello I have a token on mainnet and verified the source from the verify tools of ton network. But still tonkeeper show my token unverified. anyone knows how i must fix it?

&: Did you imported cors module? (reply to 159533)

&rey: Tonkeeper's definition refers to their repository https://github.com/tonkeeper/ton-assets. (reply to 159537)

&rey: Bridge failures are issues of the corresponding wallets. So if those bottom errors bother you, you can report them to, as far as I see, the CEXes. You can also verify if you can or cannot connect the CEX wallet to your own dApp. (reply to 159533)

&rey: The first one, for loading wallets list... ISP is blocking or shadow-blocking the domain perhaps?

Ateeb: Hi team I want to verify my ton reward on explorer which I have earned through staking how can I do that

Ateeb: Or any api which can help me

&rey: That totally depends on which staking service you used. Let's hope that they do have developer docs at all. (reply to 159552)

Ateeb: Let's say I am staking through bitgo platform and whatever they are telling me I have earned as reward   I want to reconcile at my end

Ateeb: Also isn't there any public explorer which can give me the exact details on reward what I have earned

&rey: It is kinda impossible to create because you cannot know what any given contract (and public explorer does not have anything beyond interaction patterns, data and code cell) does. (reply to 159557)

Ateeb: Got it then then how can I reconcile this independently

&rey: They do not seem to publish the interface for TON staking state on Github. The most certain solution would now be to take your transaction hash and trace where the funds went, and if that is a well-known contract type. (reply to 159559)

&rey: And the faster option is, of course, to ask them directly "what is the relevant smart contract and get-method name" then go verifying with that. (reply to 159552)

Ateeb: hello

Ateeb: Hi afaik there is no native way to get rewards data with smart contracts on TON. You'll need to check the difference between the amount that the pool recovers from from the elector at the end of the epoch and the amount that the pool sends at the start of the epoch. This difference is the amount earned.  this i what they have replied

Ateeb: can you help me what this mean

&rey: They are saying that their contract is a nominator pool, supporting an unspecified validator. It is quite complex but possible to calculate the reward by querying, in particular, The Elector; you'd need to know the chosen validator though.

Ateeb: can you help me with this or any formula which can help me

Shahboz: I need to create such a smart contract: If someone sends MyToken (MT) to the wallet → the contract automatically mints sMyToken (sMT) for them.  If someone sends sMT → the contract burns the sMT and sends back the equivalent amount of MT   In both cases, the sender must also include some TON to cover the gas fees   Is there any guide or ready-made example for this?

&: You looks like make a pumpfun style token launchpad smart contract.  DM me for more details. (reply to 159578)

Shahboz: Can you help me with this here? What exactly needs to be done to make it the way I asked? (reply to 159583)

&: I think there's no public repo. bcz there's no standard in this field.  ready-made example??? I don't think so (reply to 159584)

&: code_cowboy. I have developed the platform before and I have researched. Some TON launchpads are using  Shahboz's way to implement token buy/sell action on pumpfun.

Ateeb: They are saying that their contract is a nominator pool, supporting an unspecified validator. It is quite complex but possible to calculate the reward by querying, in particular, The Elector; you'd need to know the chosen validator though.   Can someone help me on this ?

kevin: what is Shahboz's way, can you elaborate ? (reply to 159587)

— 2025-09-25 —

Vinh: hi

BACKPACKER: gm :) (reply to 159625)

Vinh: “Who can help me?”

Vinh: hi bro (reply to 159626)

&rey: For a quick fix, roll version back a bit, it will download the list from Github. (reply to 159632)

Kiba: There no need to roll back, the current version will load wallets from fallback.  DevOps will check the endpoint with wallets list. (reply to 159640)

Seal: Dm (reply to 159652)

grachzy: How can we implement a system where a transaction is confirmed once and can then proceed without requiring further confirmations?

Mojisola🍅 🍅: is that not what TON ecosystem does.  confirmation is only once unlike other networks like ethereum and others

&rey: A subscription plugin: docs contain information on it. (AFAIK it is not installable via any user-centred wallet. Reasons of that people tend to forget, or might not bother to check plugins which later take everything. Your frontend must establish a separate wallet and handle it.)  Please also don't reuse term "transaction" for this, because there is a clearer and more appropriate "payment plan". (reply to 159714)

Code: embedded wallet (reply to 159714)

— 2025-09-26 —

Jimmy: Good night ray (reply to 159716)

MOHAMED LAMINE: https://t.me/Dogiators_bot/game?startapp=HUfNZd2Lm6g71SkG Join me for the hottest game in the Telegram, fight with others, become famous Dogiator, have a chance to make real money and maybe something more.

Anthony: Hey! JFYI, you can also post your vacancy on https://jobs.ton.org/companies (reply to 90487)

Ateeb: lets say. i have the pool address with me how can i calculate the rewards i have earned as styaking ?

Morellog 🐾: Good afternoon, could you help me generate an address that is the same as the one in the Tonkeeper app with 24 phrases?   /**  * Generates a wallet from a mnemonic (12 or 24 words).  */ const generateWalletFromMnemonic = async ({ mnemonic, cluster, walletVersion = 'v4R2' }: GenerateWalletFromMnemonicPayload): Promise<IResponse> => {   const WalletClass = WALLET_VERSIONS[walletVersion];   if (!WalletClass) throw new Error(`Unsupported wallet version: ${walletVersion}`);    const mnemonics = Array.isArray(mnemonic) ? mnemonic : mnemonic.trim().split(/\s+/);    let keyPair;    if (mnemonics.length === 12) {     const seed = await mnemonicToSeed(mnemonics.join(' '));     const derived = derivePath("m/44'/607'/0'", seed.toString('hex'));     keyPair = keyPairFromSeed(derived.key);   } else if (mnemonics.length === 24) {      // TODO: Fix address inconsistent with Tonkeeper wallet     const seed = await mnemonicToHDSeed(mnemonics);     const derived = await deriveEd25519Path(seed, [44, 607, 0]);     keyPair = keyPairFromSeed(derived);   } else {     throw new Error('Mnemonic must be 12 or 24 words');   }    const wallet = WalletClass.create({ publicKey: keyPair.publicKey, workchain: 0 });   const address = wallet.address.toString({     testOnly: cluster !== 'mainnet',     bounceable: false,     urlSafe: true   });    return successResponse({     address,     privateKey: keyPair.secretKey.toString('hex'),     mnemonic: mnemonics.join(' ')   }); };    Tonkeeper/Bitget web3  W5 : UQBh77kXMw-M-kg4L6EzP_6Jlx5xTh7mRbkM-zDjngphEgOW V4: UQBG61c4TjKqyiELE3CrxqSVHL6Lkl4D28K1A9oB8G13sctM  From SDK: W5: UQBE3lK-iSK9cjpPKyjuJ8J7hj6dNKzR7VnzSTcFvEQnCHz2 V4: UQDqKthJYJT-pkaXUu1jXPzKK-684pQLIU5hgos2oo2yRVg2

&rey: TON wallets do not use such an algorithm at all. (reply to 159760)

&rey: Just keyPair = await mnemonicToKeyPair(mnemonics);

Code: honestly I use the solana wallet generator lol (reply to 159760)

Code: its a dumb solution, but its just what I do, but you can use any bip39 generator

Morellog 🐾: Thank you, sir. Yes, the address now matches the one in Tonkeeper with 24 phrases. keyPair = await mnemonicToPrivateKey(mnemonics); (reply to 159762)

Morellog 🐾: yes if 12 prhrase i use bip39 match on trustwallet/bitget wallet (reply to 159765)

— 2025-09-27 —

TON Bounty Bridge: ​Wewww  Created by moustafamahmoud10

Elvis B: /stat

Combot: Total messages: 159811

&: why not. you can store jetton in your contract. (reply to 90442)

Harshit: I am trying to deploy the telegram mini app but it show me "You are using too old Telegram client to run this application" Can you please tell how can I deploy the latest telegram mini app

&rey: This is off topic therefore there will be no further responses.   So do you understand that "client" means "the part which is NOT the TMA"? (reply to 159838)

Harshit: yepp

— 2025-09-28 —

Jzuss ┌( ಠ_ಠ)┘: Hi! When trying to implement shard optimization (similarly https://github.com/ton-blockchain/jetton-contract/blob/jetton-2.0/contracts/jetton-utils .fc) catching cell underflow during deployment. I tried paddings, but it didn't help. What's wrong?

— 2025-09-29 —

IDRegistry: Hey guys ,i trying for my first time to make my bot able to receive stars.  The main goal: I deposit stars into the bot. The bot send stars to other users. I will be more than grateful to helpers 🫱🏽‍🫲🏼

&rey: This remains off topic. (reply to 159926)

IDRegistry: Sorry what does it’s mean? (reply to 159928)

Dmitry: Wrong chat, this one is about TON blockchain. Ask in https://t.me/devs. (reply to 159929)

IDRegistry: Thank you (reply to 159930)

IDRegistry: Just for me to know ,what scope this group for? Thnx for answering (reply to 159930)

&rey: About development on The Open Network. All around smart contracts, that is. (reply to 159932)

IDRegistry: And no need SC to provide the bot to be able to receive payments/stars? And thank you for clarifying (reply to 159935)

Combot: Combot has warned Teracoin Official (1/3) Reason: Word ******* is not allowed

Alchi: Hi community. Quesion. Transaction A is submitted and is found on mempool. Transaction B is submitted then. Can B confirm faster than A? Even in accidently?

&rey: Yes. (reply to 159977)

— 2025-09-30 —

Alchi: Thanks for the reply. But if Transaction B takes longer time than transaction A. Is it still possible? (reply to 159978)

Mojisola🍅 🍅: that is why I think you have to do whatever you want to do in each transaction cos waiting for tx B to finish before A is not guaranteed (reply to 159977)

Alchi: You misunderstood. Tx B and A is from different wallet or contract. (reply to 159984)

&rey: What do you mean by "longer"? One transaction, which is one contract execution, is as fast as another. (reply to 159981)

&rey: There is no happens-before between two transactions on different contracts, in general. (reply to 159987)

Sergey: Hello everyone.   I have a problem with activating my TON wallet (generated from PHP application), I don't understand what the network wants from me.  It all starts well — I create a wallet on a node using the ton/ton library. I generated a wallet with Multisig, sent 0.15 TON there via wallet. But it doesn't go any further.  The wallet has 'Details: inactive', and money doesn't leave it.  I tried the toncenter/tonweb example with await wallet.deploy(secretKey).send(); — still no luck.  Please advise on how to activate it?

&rey: Do you happen to have this new wallet's StateInit? (reply to 159995)

Sergey: Thank you for answer.   I tried to use private key + BOC + other address + some amount to deploy state-init, but ❌ Error: Failed to deploy wallet with StateInit: StateInit deployment failed: ❌ Error: AxiosError [AggregateError]: Error     at AxiosError.from (.../node_modules/axios/dist/node/axios.cjs:905:14) (reply to 159996)

&rey: What code did you use? (reply to 160006)

Sergey: For communication with TON: — Node.js + TON SDK - for TON blockchain interaction — TON Center API - for TON network communication  Used SDKs and Libraries: — @ton/ton - modern TON SDK for Node.js — @ton/core - core TON components — @ton/crypto - cryptographic functions  Plan:  1. Wallet Creation — Creates private/public key pair — Calculates wallet address — Generates StateInit BOC for deployment — Outputs TONScan explorer link  2. Wallet Funding — Manual funding 0.1 TON from Telegram Wallet to cover transaction fees  3. Wallet Initialization Bypass private key + BOC + other address + some amount  But something goes wrong on 3rd step (reply to 160007)

Sergey: Sorry, didn't understand well for the first time. Code is   async function initWallet(privateKey, toAddress, amount, stateInitBoc, network = 'mainnet') {     try {         console.log('🚀 Initializing TON wallet...');         console.log('Private key:', privateKey);         console.log('To address:', toAddress);         console.log('Amount:', amount);         console.log('Network:', network);          // Setup client         const endpoint = network === 'mainnet'             ? 'https://toncenter.com/api/v2/jsonRPC'             : 'https://testnet.toncenter.com/api/v2/jsonRPC';          const apiKey = network === 'mainnet'             ? (process.env.TON_MAINNET_API_KEY || process.env.TONCENTER_API_KEY || '')             : (process.env.TON_TESTNET_API_KEY || process.env.TONCENTER_API_KEY || '');          console.log('Using endpoint:', endpoint);         console.log('API Key:', apiKey ? 'Present' : 'Missing');          const client = new TonClient({             endpoint: endpoint,             apiKey: apiKey,             timeout: 60000         });          // Create key from private key         const secretKey = Buffer.from(privateKey, 'hex');         const publicKeyBuffer = secretKey.slice(-32);          const keyPair = {             publicKey: publicKeyBuffer,             secretKey: secretKey         };          console.log('Public key:', keyPair.publicKey.toString('hex'));          // Create wallet contract         const wallet = WalletContractV4.create({             workchain: 0,             publicKey: keyPair.publicKey         });          const address = wallet.address;         const addressString = address.toString({ urlSafe: false });          console.log('Sender address:', addressString);          // Check wallet balance         console.log('🔍 Checking wallet balance...');         try {             const balance = await client.getBalance(address);             console.log('Wallet balance:', balance.toString());         } catch (error) {             console.log('Balance check failed (wallet may be uninitialized):', error.message);         }          // Create StateInit from BOC         const stateInitCell = Cell.fromBase64(stateInitBoc);         console.log('StateInit BOC loaded successfully');          // Create correct transaction for initialization         console.log('🔄 Creating initialization transaction...');          // For initialization wallet need to create transfer with deploy: true         const transfer = wallet.createTransfer({             to: Address.parse(toAddress),             value: toNano(amount),             seqno: 0,             secretKey: keyPair.secretKey,             messages: [                 internal({                     to: Address.parse(toAddress),                     value: toNano(amount),                     body: beginCell()                         .storeUint(0, 32) // op                         .storeStringTail('TON transfer from Brix')                         .endCell(),                     bounce: false                 })             ],             stateInit: stateInitCell,             deploy: true         });          console.log('📤 Sending initialization transaction...');          const boc = transfer.toBoc();         const result = await client.sendFile(boc);          console.log('✅ Transaction sent successfully!');         console.log('Transaction hash:', result);          return {             success: true,             message: 'Wallet initialized successfully',             address: addressString,             to_address: toAddress,             amount: amount,             transaction_hash: result         };      } catch (error) {         console.error('❌ Error:', error);         return {             success: false,             error: error.message         };     } } (reply to 160007)

&rey: StateInit has to be in the message you are sending, by the way.   I also recommend against using AIs in TON as they tend to produce garbage. (reply to 160069)

Sergey: Yeah, a lot of problems with it. Would you recommend something to read about? Like some good examples as how to work correctly: create, check balance, send (reply to 160071)

&rey: If you are able to use Python for your tasks, then tonutils is a good choice. (reply to 160072)

Sergey: I'll look, thanks (reply to 160073)

Ilya: For JS/TS you can check some examples here: • TON Console Cookbook - https://docs.tonconsole.com/tonapi/cookbook • Official TON Cookbook - https://docs.ton.org/v3/guidelines/dapps/cookbook (reply to 160072)

Alonso: Hello (reply to 160074)

— 2025-10-01 —

Combot: Combot has warned Derrick Hubbard (1/3) Reason: Word **** is not allowed

𝓚𝓪𝓶𝓻𝓪𝓷: Guys, this bot will give you tons based on your Telegram age and you can withdraw it right away. How much did you get?  Tonreaward_bot  Try to use your oldest Telegram account.

DeFi: Hey, long time no see, brother! (reply to 160099)

Sergey: Wondering why TON doesn't have just a simplest client version on github to have anybody generate, send and check balance? In any language, no matter because everybody might use console.  For now need to collect by pieces to make it work  Or maybe somebody did that stuff?

Princewill Tor-Anyiin: I'm building a DApp and my choice Blockchain is TON.  I'm about to launch the Testnet phase of the DApp, and also deploy the token Jetton on TON Testnet.  Necessary documentations, please.  PS: I'm currently raising, can you give me break down of Blockchain service costs for this phase?   PS2: Massive Validation:   • Recently matched with the Open Start Program-open innovation Program   • Ranking #68 among over 2 million global startups (F6S) and Top 100 AI startups in Nigeria.  _ This addition is for ; just in case TON Blockchain is awarding Grant funds for validated projects like mine 👍

..: Can I have some advice. I have ton in my wallet ready to withdraw from a mini app. I tried to withdraw it says 30-60 days so I paid to skip it then it now says 7 days withdrawal time. Can anybody explain this to me and how will know when it’s ready to be withdrawn?

Андрей: You need to ask in your app's chat or contact your app's support team. However, the presence of a feature to speed up withdrawals for an additional fee suggests to me that you're unlikely to receive your coins. (reply to 160302)

Combot: Combot has warned Alonso 👀💟 (1/3) Reason: Word **** is not allowed

Alonso: Ok

..: Where do I find the apps support team? (reply to 160303)

DeFi: That sounds like a scam app (reply to 160302)

Андрей: in the same place where you found the app) (reply to 160308)

..: I have already withdrawn from it before though.. ive had around 5ton out before into a diffrent wallet so I know it does payout. I don’t have the 20 ton or I would. It means risking more £££ 😂

Teemu | 機器人🪽: Yea the point is to give a little out, so they get more in. Those were very popular a while back, eventually they raise the APY so much that the ponzis die very fast (reply to 160318)

..: Horrible people. To much time on there hands Does anybody have any advice on where the best place is to buy ton and the best wallet to store it?

&rey: Such things are scam. Please don't grow attached to the values app shows, and be vigilant (i.e. check that any received assets are genuine instead of similarly-named jettons). Disengaging is recommended. (reply to 160302)

&rey: The https://ton.org/ has pages on wallet applications and purchasing TON. Look for custodial/non-custodial markers according to your needs.  And that is, by the way, off topic for this chat. (reply to 160320)

— 2025-10-02 —

Code: Does anybody know why this transaction's Jetton Notify failed "out of gas" - even though there was Excess TON in the transaction?  https://testnet.tonviewer.com/transaction/8a39aa3d7e201a55a45fb0060617fea3d6bdfe60541639fe59fef59aa0a3689d

&: Do you think this ton amount is enough?

Code: TON wallet does same, is it because it has a message?

&: If it's goes error. then is sth wrong? The jetton disappered? or sth else? (reply to 160335)

Code: the jetton transfer is successful, but the notification fails

&: Do you think that means "transfer failed"? No totally no. It's just "gas is not enough". not a "jetton transfer failed". (reply to 160337)

Code: ? there are 2 parts to the trace  1 is jetton transfer - which is fine 2. is the notification - which has out of gas error, which I'm trying to solve

&: Have you ever developed contract on TON? (reply to 160339)

Code: no

&: I think so. Gas optimization is necessary for ton development. Check official doc of ton.org (reply to 160341)

Code: I am following this guide https://docs.ton.org/v3/guidelines/dapps/cookbook#how-to-construct-a-message-for-a-jetton-transfer-with-a-comment

Code: is it really necessary to send 0.02 TON? that's 6 cents - it doubles the cost of the transaction for the notification

&: Bro. check document. study gas optimization. It's necessary for ton development. you don't have basic understanding on it. (reply to 160344)

Code: that's what I'm asking - you're not being helpful lol

Code: this one worked (reply to 160334)

Виконт vangaard: Short answer is you've been scammed. The long withdrawal time and paying to reduce withdrawal time is a classic scam technique. (reply to 160302)

&rey: Any message equal or over 0.00001 TON launches TVM to handle the incoming message. Sometimes wallet's checks are more expensive than that. (reply to 160347)

Code: I see  1. Do you think notification messages are even necessary? Tonkeeper does 1 nanoton for them, and the indexing seems to work fine 2. How can I ensure in my code that my messages have enough gas for the notification? And will the remainder be refunded? (reply to 160351)

&rey: 1. I'm of opinion that no notification is needed and that's job of wallet application to check. (reply to 160352)

Code: thanks &rey 2ne:v

Aldric: Hi guyz, I have a question. Can I modify the swap fee in Stonfi? For example, I want to take 10% of the swap from the user. Is that possible now?

Teemu | 機器人🪽: At least tokens launched from stonkspump have a fee mechanism (reply to 160366)

kevin: you can do that with two internal tx , say one for stonfi swap, one is to transfer certain amount of ton to you predefined wallet (reply to 160366)

kevin: https://tonviewer.com/transaction/e2aa6ef54624257c06d4e1bc2ef2b38f75818d40d99df959ddc71a836f47d960  like this tx for example (reply to 160366)

Aldric: Nah if tx failed I take fee and not return to user (reply to 160370)

Aldric: I need after swapprotocol will take fee

Aldric: Gimme the link thank you 🙏 (reply to 160367)

kevin: it seems you need a customized wallet protocol  https://tonviewer.com/transaction/48eb67c6fa842396f418bda063203f39a026997d3bd251c704e30ba39da28045  - I got source code for this one (reply to 160371)

Teemu | 機器人🪽: Stonkslabs.com (reply to 160373)

Anthony: Yes, it’s possible. Example: https://x.com/giftsfomo/status/1972647598965325882?s=46&t=3-S72XwY8iBay1Oa0SPUAQ (reply to 160366)

Aldric: the token contract doesn't verify (reply to 160378)

Aldric: But it’s work for fee. Thank you sir (reply to 160378)

Ilya: The notify message is important because it allows anyone who is monitoring only the inbound messages to your wallet contract to detect that an event occurred on the jetton wallet. Without a notify, if some new arbitrary token is credited to the wallet, it would be impossible to track that balance change using just a lightserver. For this reason, the notify is highly recommended. (reply to 160352)

Ilya: However, the transaction that carries the notify does not need to succeed. Even a failed transaction still provides the required signal, and no changes on the wallet are expected after it. That’s why the approach of sending a notify with just 1 nanoton, which inevitably fails, is considered a normal and acceptable practice. (reply to 160401)

Code: Thank you so much Ilya for the info!

Ilya: That said, most wallets do not rely purely on light servers but on indexed blockchain. So if you skip the notify, it won’t be critical, although it’s still undesirable (reply to 160402)

— 2025-10-03 —

Axel Feg: Hi

Axel Feg: How to apply for ton verification?

&rey: Hold right there. Do you mean jetton verification, contract code 'verification' (upload)? (reply to 160492)

Axel Feg: Yes (reply to 160496)

Axel Feg: For cupko project

&rey: This is repo for jetton verification: https://github.com/tonkeeper/ton-assets/. (reply to 160499)

Axel Feg: How to do that? (reply to 160500)

Axel Feg: And how to do tonkeeper verification?

&rey: Please read at the provided link. That is Tonkeeper verification indeed. (reply to 160501)

Axel Feg: Ok ty (reply to 160503)

Coin Wallet: Hi all, Does someone know how to publish wallet to the main website? I noticed that a lot of new wallets have appeared. The page for builders is not suitable for us

Mhdi khosravi: Hello Anyone knows how i can add a label to my public address? i need when someone see my wallet in explorer like tonscan  instead of public address my label for the address shows.

Mirka: dns.ton.org (reply to 160522)

Mhdi khosravi: how i must set it for an public address? (reply to 160524)

&rey: 1) the domain NFT resolves to that address 2) address owns the domain NFT (reply to 160525)

Mhdi khosravi: aha i have 7 different wallet which i want to have domain for all, each wallet must have the NFT and assign it at the address? or can i have all NFTs in one wallet and assign them to other wallets? (reply to 160526)

&rey: Each must have its NFT to be shown as name. (reply to 160527)

Mhdi khosravi: and do you know about tonkeeper rules of verification tokens? (reply to 160528)

TON Bounty Bridge: ​UQDzYqzqut57qZq4wSfQHPmWs7TwIWIZBs_o7-gocbA4Zoyc  🏷 Resource  Summary:Biena  Created by hejdhf

Joni: Hola, quería saber si la aplicación de Telegram "TON mine app" es rentable? Vengo teniendo problemas para realizar una extracción. Ya que me pide un deposito del 20% del valor total de lo supuestamente minado (231 TON). No puedo retirar y tengo miedo de seguir ingresando dinero, creo que podría ser una estafa piramidal y me gustaría que me ayuden.

&rey: That app is scam. Disengage. This is chat in English, about developing smart contract systems on TON. (reply to 160535)

— 2025-10-04 —

Joni: Gracias por la información proporcionada (reply to 160536)

IDRegistry: Be ware TON coin total supply already mined at 2022. Any platform related to ton mining is a scam. (reply to 160535)

???: Are there any good solutions for AML for TON addresses?

— 2025-10-05 —

AccreDeFi: sumsub (reply to 160595)

MoFR: Is there a real Ton developer here?

&: Looking for TON dev in TON dev channel? (reply to 160652)

MoFR: I mean I'm looking for an experienced developer I have some questions I’d like to ask him (reply to 160653)

&rey: The customary thing to do is to ask development-related questions right here. (reply to 160655)

&: why don't you ask here? (reply to 160655)

MoFR: I started learning smart contract programming on TON, but I feel like I didn’t really understand it Is there something I should learn before that? (reply to 160656)

&: Did you checked sterik videos? (reply to 160659)

MoFR: No, from the documentation (reply to 160661)

MoFR: Do you have any learning resources? (reply to 160661)

Combot: Combot has warned & Borealis (1/3) Reason: Word ******* is not allowed (reply to 160662)

&rey: To newcomers, I would introduce something about microcontrollers first, as an analogous thing: one has really limited resources, and even memory is mostly external.  Speaking of TON... smart contract is just a public program with persistent storage, which can manage some assets. (reply to 160659)

&rey: Those ones? https://docs.ton.org/v3/concepts/educational-resources (reply to 160663)

MoFR: Do you have any videos? (reply to 160667)

&rey: Have you visited the link I sent? (reply to 160669)

MoFR: Ok (reply to 160670)

MoFR: I was going to learn about Ethereum smart contracts, but I believe in Pavel Durov's vision for TON and Telegram (reply to 160670)

Princewill Tor-Anyiin: You're not really purposeful about your goal.  You wanted to learn Solidity, but you changed your mind because Durov's vision?   TON Blockchain achieves massive scalability, high transaction speeds, and low fees through its multi-blockchain architecture with dynamic sharding and a Proof-of-Stake consensus mechanism.  The above qualities is why you should learn FunC and Tact languages -Not because of some else's vision that you don't fully grasp.  Good luck tho. (reply to 160674)

MoFR: Thanks, bro, for the info

&rey: And may truth be your guide. If someone's statements happen not to match reality, follow reality, for you cannot build a project otherwise.  TON can be well-suited to some applications and uniquely bad-suited to others like, say, flash loans.

Princewill Tor-Anyiin: Flash loans originate from EVM, there's no way it will work well in an asynchronous environment as TON.  The easiest and cheapest Blockchain Network for especially us from Africa is TON. It is cheaper and faster.  I don't refer to myself as a Developer -but I know this.

Meta: Hi everyone!  I’m Dhaval Bhatti, founder of Clash Warriors, a PvP battle game on TON. We’re actively developing the game and would love feedback from experienced TON developers. Specifically, we’re looking for insights on gameplay mechanics, matchmaking, and challenge mechanics Any advice, suggestions, or critiques would be greatly appreciated!

Meta: Can we share the link than i will share link to our app

Meta: Clash Warriors: The Future of On-Chain PvP Gaming  Clash Warriors is a skill-driven, strategy-focused real-time PvP battle game on TON, fully on-chain and live on Telegram.  Players own their in-game assets on the blockchain and can engage in solo, duo, and squad battles, participate in clan tournaments, and enjoy NFT integrations for in-game upgrades and trading.  The game emphasizes strategy, skill, and fair competition, with all battles and rewards recorded on-chain to prevent manipulation. Players can truly compete, earn, and trade their assets in a decentralized environment.  Core features include:  Solo / Duo / Squad Battles – Engage in competitive PvP matches.  Clan Tournaments – Team up with friends and compete in structured events.  NFT Assets & Marketplace – Own, upgrade, and trade cards and items with on-chain verifiable ownership.  Clash Warriors aims to create a fully decentralized, skill-driven PvP ecosystem where players have true ownership, transparent gameplay, and a path to competitive growth.

Parham: Hi everyone. Will be there a hac-ton-berfest this year?

Hk: Hi anybody alive , im new here

&rey: Hello. This is chat about how to develop software on TON. (reply to 160794)

Hk: TON? What is That? (reply to 160795)

Hk: Im a begginer

&rey: The Open Network (aka https://ton.org). Its core TON Blockchain is a system for public decentralized activity. (reply to 160796)

&rey: If you happen to be uninterested in development-related discussion, you can start at beginners' post https://t.me/toncoin/483. (reply to 160798)

Hk: Nah its ok , but that TON look so cool

Alonso 👀💟: Hi (reply to 160801)

— 2025-10-06 —

Spsp: Hi (reply to 160811)

Code: is SETCODE possible in Tolk?

&rey: contract.setCodePostponed. Ahead of time, think of what you'll do to data cell, and to those messages which are inbound but not arrived yet. (reply to 160830)

Иброхим: Building a Stripe-like SDK for Telegram bots to accept USDT (TRON) & TON. Just 5 lines of code, built-in webhooks.  I’m validating the idea — if you build Telegram bots or Web3 mini-apps, I’d love your input.

Иброхим: why are they deleting the link

TON Bounty Bridge: 📊 Update Digest!  🔍 Active bounties: 9 ✅ Approved bounties: 0 🔄 Bounties seeking suggestions: 8  📣 We value your feedback! Join the community discussion and participate in shaping the future. Click the 'Create Your Own Bounty' button to get started.  Happy contributing!

Princewill Tor-Anyiin: Hi, what's happening to the TON project registration portal?  I tried throughout last night the "Register" button to load & finalize reg doesn't click into action.

&rey: What project, exactly? What are you registering to? (reply to 160923)

Princewill Tor-Anyiin: The guys at TON SSEA have given me a clue.   Sorry I got my documentations and resource gateway to launch Testnet phase of my AFRO-NODE DApp project from them - not here (reply to 160926)

&rey: Is https://github.com/gobicycle/bicycle unfitting for your purposes somehow? (reply to 160942)

Иброхим: Oh but this is only for TON

Иброхим: I wanted build something which can accept including TRON (usdt) too

&rey: I do not think it is that relevant to this chat. (Also, the list is somewhat strange in that you are omitting USDT[TON].)

Gh0stn3t1: Hello 👋   I'm Al-ameen Muhammad Idris. Skills on HTML, CSS, JavaScript, PHP, MySQL, NodeJs,  Reactjs and basic to move and solidity.  A computer Science student, I like to know more on this Group.  Thank you!

&rey: I recommend checking out our introductory post to learn the basics about TON Blockchain — https://t.me/toncoin/483, or https://docs.ton.org. (reply to 160955)

Gh0stn3t1: Thank you 👍 (reply to 160956)

MoFR: Bro, thanks for the help. I started learning smart contract programming on TON today (reply to 160956)

— 2025-10-07 —

Whoami: is there a "standard" business manual for ton, i.e. legal entity, marketing, etc.?

Radhe Radhe: I provide complete interview assistance and on job work support to help you secure offers and perform confidently.

Rinat: Hello! Im blockchain engineer with experience in TON/solana/evm chains - development telegram miniapps (games like alchemy/lottery/nft-minting, smartcontracts development).  - created few trading bots with telegraf/grammy frameworks (non-custodial wallets management via turnkey and trading memes and coins on Solana/Ethereum/Hyperevm/Berachain/Polygon/etc via 1inch, uniswap, jupiter, raydium, aftermath, paraswap...) - classic DeFi apps (liquidity pools, stacking/farming/raffles/games)  And now I'm looking for a project that I can help with development

Anthony: ✈️ New Proposal: Scaled UI Standard for TON  The Scaled UI standard introduces a unified way for wallets and dApps to display token amounts using a scaling factor — enabling advanced token models such as rebasing and yield accrual, while preserving full on-chain accuracy.  This ensures consistent and transparent balance representation across the TON ecosystem.  💬 We invite developers to review the draft and share feedback before adoption.  📎 https://github.com/ton-blockchain/TEPs/pull/526 (forwarded from TonTech)

Princewill Tor-Anyiin: TON engineers in the house.  I've been having issues Registering my Project on TON builders portal. It doesn't load to the next page after filling out 1st page.  It seems static

Vit: Hello. I'm interested in buying a .ton domain that has expired 2 months ago but still for some reason owned and isn't available for purchasing.

ivan: hi, try here: https://tonnames.org (reply to 161054)

Damian: ⬇️⬇️ https://watchgrlshot.art/U7V8R ⬆️⬆️  🔥 MEET HOT SINGLES 🔥  💖💌

— 2025-10-08 —

TON Bounty Bridge: ​Zk ADteam  🏷 Developer Tool  Summary:ZK-ADteam  Created by Anon907

— 2025-10-09 —

Princewill Tor-Anyiin: Hey guys, any of you experimenting difficulty with TON servers response?  Please I need to know. Your response is important to know if the problem is from my end.  Thanks

bharath: Does anyone can explain how virtuallp by stonkspump works??

Anthony: TON x Ignyte Hackathon: Building the Web3 SuperApp Economy  TON Foundation and Ignyte invite innovators worldwide to create Web3 payment, gig economy, and creator tools on Telegram, making digital payments faster and more useful for everyday life.  🗓 Key Dates  ▪️Launch: Oct 8, 2025 ▪️Deadline: Nov 17, 2025 ▪️Finalists: Nov 21, 2025 ▪️Pitch & Awards: Nov 29, 2025  Who Can Apply?   Students, early-stage startups, and scale-ups (Seed to Pre-Series A)  💰 Prizes (30,000 USD Total) 🥇 15,000 | 🥈 10,000 | 🥉 5,000  The Challenge  Build solutions that bring Web3 payments and experiences to Telegram, from instant pay for gig workers to token-gated creator tools.  Winners gain mentorship, access to TON’s Ecosystem, and a chance to pilot their projects globally.  Apply here (forwarded from Toncoin)

Drew: How do I get an expired ton domain?

שרואל: hey ton community i am doing project about ton and i will love to have more knowledge about the project by asking questions, one of the questions is about the minimal amount of staking to be a validator, its not something that can hurt the decenterlized network?

&rey: Having too many validators with low stakes (i.e. can try colluding to sign something invalid) can indeed hurt the decentralized network, thank you for asking. (reply to 161338)

A: Hello guys! I'm trying to use TonCenter Streaming WebSocket API (wss://toncenter.com/api/streaming/v1/ws). Connection works, but all methods return "unknown operation" error. Is there any documentation or code example for this API? Specifically interested in subscribing to account transactions and mempool monitoring.

Unction: I want to create a defi telegram mini app But I want ppl to work with. We will share the app revenue in percentage. This is sth that will change the whole Defi space bringing an interactive space with new non technical users onboard. I just need assistance in creating the web app. So if you are interested. You could react on this message or reach out to me  Have a nice day

Combot: Combot has warned DeFi Degen (3/3) Reason: Word **** is not allowed (reply to 161361)

Combot: Combot has kicked DeFi Degen

Unction: Hello

— 2025-10-10 —

simo: Hi

Big Bang: 👋

Sergey: If it's all true the owners of this "company" will sell everything they have and earn without telling anybody else. Lol  Money is not a flowers, which just grows.

Sergey: And I know how it works. Then they will throw those who stayed and did not withdraw the money. How else can it work? This is complicity in sin (reply to 161392)

🐱: Please ban this guy. (reply to 161375)

A: Guys could anybody help me?  I'm trying to use TonCenter Streaming WebSocket API (wss://toncenter.com/api/streaming/v1/ws). Connection works, but all methods return "unknown operation" error. Is there any documentation or code example for this API? Specifically interested in subscribing to account transactions and mempool monitoring.

Anthony: ✈️ New Proposal: Tokenized Vaults Standard for TON  The Tokenized Vaults standard, created by the Torch Finance team, introduces a unified interface for vaults on TON, enabling seamless deposits, withdrawals, and balance queries while ensuring compatibility with dApps and protocols across the ecosystem.  Adapted from ERC-4626 and tailored for TON’s asynchronous architecture, it provides a consistent foundation for yield strategies, liquidity products, and composable DeFi applications.  💬 We invite developers to review the draft and share feedback before adoption.  📎 https://github.com/ton-blockchain/TEPs/pull/524 (forwarded from TonTech)

A: admins! User sent me malicious wallet bruteforce code disguised as mempool monitoring solution. The code generates random mnemonics in infinite loop, checks if wallets are active with funds, and saves them to file for stealing. This is clear scam/phishing attempt and resource abuse. Please ban this user (reply to 161408)

Code: this doesn't work lol (reply to 161413)

שרואל: So its a problem that the minimum stake is very high to be a validator this is somhthing that you put in mind to solve (reply to 161341)

&rey: If you want to set other consensus rules, sure, but they have worse network properties. As of now, try explaining to 3/4 of validators WHY they would suddenly need to trust more nodes. (reply to 161420)

&rey: AI-generated comments there are really disappointing, though. (reply to 161409)

&rey: Also, to this day it is not determined what a 'vault' even is = what ecosystem impact is proposed.

Combot: Combot has warned Иброхим (3/3) Reason: Word **** is not allowed

Combot: Combot has kicked Иброхим

Ricardo: hey guys i am getting: data: {       ok: false,       error: 'LITE_SERVER_UNKNOWN: cannot locate transaction in block with specified logical time',       code: 500     }  },   st atus: 500  When fetching a fresh transaction, why is it the case that i need to set the archival flag for this if the transaction is fresh?

Grigorii: Hey, Maybe question not about Smart Contract, but i dont know where i can asc this question Maybe somebody know?  where can i find api with all collections? I want to find all characteristics about all collections  More info in api, then better

&rey: That's issues with API you are using (a balancer, plus some nodes not as synchronized as other ones). (reply to 161438)

Ricardo: what do you mean?, i am using https://toncenter.com/api/v2/jsonRPC (reply to 161440)

A: Can someone help me with this? Toncenter announced in August that mempool streaming is now available to everyone, but there is no documentation and I don't understand how to use it (reply to 161406)

— 2025-10-11 —

&: Check tonconsole.com (reply to 161512)

Mohammed: 💡 Feature Proposal: Guardian Vault for TON Wallet  A smart wallet feature called Guardian Vault allows users to recover accounts via a distributed network of guardians, with:  • Timed approval & gradual fund release to prevent hijacking.  • Social recovery without seed phrases, beginner-friendly UX.  • Multi-sig smart contract & off-chain notifier for security.  Benefit: increases trust, reduces loss risk, and makes TON Wallet more secure and user-friendly.

Mohammed: 1 — Instant Wallet with “Seedless Activation” (Onboard‑Safe)  Idea: Fast account creation using a username + short password with optional social recovery, instead of a seed phrase that intimidates beginners. Benefit: Reduces fear for regular users and increases wallet adoption. How it works (brief): Account generated on-device, optional TON DNS linking, guardians (3 friends or trusted accounts) can approve account recovery. Tech: Account abstraction + smart-contract wallet on TON, simplified UX, local encryption. Risks: Must be designed securely to prevent social recovery exploits. Funding: UX grants + security bug bounties.  ⸻  2 — Local Fiat On/Off Without Complexity  Idea: Partnerships with local payment gateways and prepaid cards to convert local currency ↔ Toncoin directly in the wallet. Benefit: Easier daily usage — users can send/receive Toncoin seamlessly. How: Simple in-app KYC, instant TON network transfers, POS options for merchants. Tech: API integration with payment providers, currency conversion services. Funding: Commercial partnerships + small transaction fees.  ⸻  3 — Smart Wallet for Organizations & Community Insurance (Multi‑sig)  Idea: Multi-sig wallets for organizations + donation/compensation funds for scam victims. Benefit: Builds community trust, reduces user losses, attracts projects. How: Multi-sig smart contracts + UI to manage approvals, claim process after review. Funding: Donation campaigns + grants from security organizations.  ⸻  4 — Hidden Gas Transactions (Gas Abstraction)  Idea: UX hides gas complexity — either a vendor or relay service pays the gas, or wallet automatically handles minor fees. Benefit: User experience similar to a regular bank card. How: Meta-transactions, relayer service manages gas payments on behalf of users. Tech: Relayer nodes + pricing policies. Risks: Security precautions to prevent misuse.  ⸻  5 — Mini‑Apps Marketplace Inside the Wallet  Idea: A space inside the wallet for small apps (donations, tickets, games, ledgers) powered by TON. Benefit: Engages daily users and increases wallet usage. How: SDKs + app rating & incentive system for developers. Funding: Hackathons + developer incentives.  ⸻  6 — Smart Protection & Real-Time Alerts  Idea: Intelligent alert system for unusual spending or login attempts from new devices, with an immediate wallet freeze button. Benefit: Effective security for regular users. How: Heuristics + device fingerprinting + revoke button via smart contract. Funding: Bug bounty + cybersecurity partner.  ⸻  7 — Ephemeral Wallets for One-Time Payments  Idea: Create a temporary wallet for single transactions (e.g., paying a bill/subscription) that disappears afterward or converts into a claimable link. Benefit: Reduces risk when dealing with untrusted vendors. How: Time-limited smart account or delegated keys. Use case: Buying on open markets without sharing permanent keys.  ⸻  8 — TON Domains + Verified Identity in Wallet  Idea: Integrate TON DNS with optional verified KYC badges for easier sending & receiving. Benefit: Send funds using a name instead of a long address, builds commercial trust. How: Display verified badges, link with merchant/company KYC protocols.  ⸻  ⸻  Innovative Invention — “Guardian Vault”: Smart Recovery Linked to Real Relationships  Overview: A smart TON wallet called Guardian Vault enables users to recover their accounts via a distributed network of guardians, with added safety mechanisms: timed voting, lightweight identity proofs (photo + OTP), and a temporary security vault that gradually releases funds to prevent social hijacking.  Why it’s different:  1. No one can instantly recover the account, even if 2 of 3 guardians approve — a short time delay (e.g., 24h) allows cancellation via a secondary device.  2. Funds release gradually (e.g., 50% after 24h, 50% after 7 days) to minimize risk.  3. Beginner-friendly interface without technical jargon — users select 3 guardians from contacts or trusted TON accounts.  Technical components:  • Smart-contract wallet with time-lock and multi-sig.

&rey: You can do it without any proposals. It is The Open Network for a reason, after all. (reply to 161531)

&rey: Also, the prompt for LLM instead of its long output would've taken up less place.

Big Bang: Hello, are there some courses for blockchain-ai interactions?

&rey: To my knowledge, none applied for audits that they are safe to use (whatever that may mean when generative models make the decisions). Do your own research before engaging. (reply to 161542)

Big Bang: Thank's for info.

A: Of course I was there. But there's not enough information there and it's not written down in the documentation (reply to 161528)

שרואל: But what if they now gathering all together and decide to take control of the system this is not something that bothers you and should raise for us some concerns (reply to 161422)

.: Can someone help me!?

mavr: Hi, I 'd like to know your opinion, how do you understand when burnout starts, because when it starts, it's already difficult to overcome it.

Slava: I hope you will get better, but this is out of topic of this chat, sorry. (reply to 161575)

J2: What's up, bro? I have experience in building project on Ton (reply to 160652)

J2: Hello, I am a full-stack and blockchain developer with strong experience building on TON (The Open Network), including smart contracts in FunC and Tact, NFT/Jetton standards, and Telegram Mini App integrations.   Beyond TON, I have also delivered production-ready solutions across Solana (Rust, Anchor), Stellar/Soroban, Sui & Aptos (Move), and XRPL (Hooks, sidechains). This cross-chain experience allows me to bring best practices for secure, efficient, and user-friendly smart contract architectures.  Key areas I can support you with: * TON smart contracts using FunC or Tact * TonConnect / Wallet API implementations * Tokenomics, Jetton/NFT design, and on-offchain synchronization * Security reviews and deployment optimization  I’d be happy to show how my experience across TON and other ecosystems can help you bring it to production smoothly.

Micky: Hey devs 👋 I’m working on a TON-based project called TON MicroPay a lightweight SDK for micro-transactions and in-app payments on the TON blockchain.  We’re currently testing on TON testnet and need a bit of test TON to deploy and benchmark our smart contracts. If anyone can share a few test coins, it’ll help us move the preview phase forward.   Testnet address:  0QDBmB_avtVLIuwGfJszGKmUy6Mymg_0kzSIfZlv-bpEgzT1  I’ll share repo links and deployment logs once testing starts. Appreciate any support from the TON dev community! (reply to 161576)

— 2025-10-12 —

kidogb: Hi, I'm trying to use ton/ton and ton/crypto to generate wallet from 12 words seedphrase. But the wallet address generated is difference with the ton keeper. I tried to import new wallet from the same seed phrase and use v5 wallet.  This is only happened with 12 words, 24 words still working normal

kidogb: Does anyone facing this issue before?

Tim: You probably need bip39 derivation to get address from 12 words (reply to 161657)

Tim: https://github.com/TonDevWallet/TonDevWallet/blob/f48211599949803786b254e41435d424941c9379/src/components/NewWalletPage/FromMnemonic.tsx#L18 Try to use function like this   https://github.com/TonDevWallet/TonDevWallet/blob/f48211599949803786b254e41435d424941c9379/src/components/NewWalletPage/FromMnemonic.tsx#L18 (reply to 161656)

Fake: I also thought about this problem a lot, I even contacted a psychologist, he recommended to use notion and keep track of long periods of bad psychological feelings, and this helped me track the beginning of burnout. (reply to 161575)

שרואל: some one could help me to better know the project about this topic🙏🏽 (reply to 161563)

透街二裤: I used the tonutils library in Python to import the wallet using a mnemonic phrase. Then, I called the transfer interface to transfer funds to a specified address and obtained the transaction hash. However, I couldn't find out the transaction status and the transaction hash didn't match the actual transaction either. Anyone know why this is happening (using a non-test network)?

kidogb: thanks Tim, you saved my day!

Princewill Tor-Anyiin: Damn, you dismissed that man too casually. As a medical student I have seen people spiralled badly from burnouts into depression and sometimes becomes suicidal. (reply to 161576)

Princewill Tor-Anyiin: Hey, please talk to Your doctor. Don't self-help.  ❤️ (reply to 161575)

&rey: You are hereby warned not to continue offtopic discussion in the chat regardless of how right you may be. (reply to 161695)

Princewill Tor-Anyiin: Oh I remember you! The conceited man I met here in the earliest days of my startup project 😁  You said to me: "you are not qualified enough for this project you want to do".   It became my greatest motivation (reply to 161697)

— 2025-10-13 —

J2: Hello, I am a full-stack and blockchain developer with strong experience building on TON (The Open Network), including smart contracts in FunC and Tact, NFT/Jetton standards, and Telegram Mini App integrations.   Beyond TON, I have also delivered production-ready solutions across Solana (Rust, Anchor), Stellar/Soroban, Sui & Aptos (Move), and XRPL (Hooks, sidechains). This cross-chain experience allows me to bring best practices for secure, efficient, and user-friendly smart contract architectures.  Key areas I can support you with: * TON smart contracts using FunC or Tact * TonConnect / Wallet API implementations * Tokenomics, Jetton/NFT design, and on-offchain synchronization * Security reviews and deployment optimization  I’d be happy to show how my experience across TON and other ecosystems can help you bring it to production smoothly.

Mojisola🍅 🍅: I have complained about this in the past. I later figured it out and shared it here also some months ago. (reply to 161656)

TON Bounty Bridge: 📊 Update Digest!  🔍 Active bounties: 9 ✅ Approved bounties: 0 🔄 Bounties seeking suggestions: 13  📣 We value your feedback! Join the community discussion and participate in shaping the future. Click the 'Create Your Own Bounty' button to get started.  Happy contributing!

Princewill Tor-Anyiin: Hi, I need clarification.  I'm committed to building AFRO-NODE DApp as an entirely decentralized and stand-alone DApp and not integrated in any Web2 architecture like Telegram.  A full Web3 experience.  But as I'm getting fully into TON structure. I realized that it's core vision is to integrate fully with Telegram.  Can I achieve a full stand-alone DApp on TON Blockchain outside Telegram.  If yes, then please all my guidance should be in that direction. Because most of my registration keeps emphasizing on Telegram miniApp (TMA)

Slava: There is a difference between "integration" and "dependency". You can integrate your dApp with Telegram without depending on it. And this is probably a good idea. (reply to 161830)

&rey: That's also called a "website" or "mobile-adapted website", common programming practices apply to it) (reply to 161830)

Abhilash: Bro getting freelancing projects in ton is easy or difficult

&rey: It is most certainly possible.  Please be kind and stand your ground against scam at the same moment; many people are wary, and many messages are scam. I would suggest to negotiate important details (like prepayment possibility) first. Remember that those opportunities are not by TON Foundation (in particular, admins never write first) and not our responsibility. (reply to 161844)

OD: Hi! Is there any deadline for the 4ebd741 mainnet update? How urgent is it to upgrade the validator node — is it required before a specific cycle?

Cyberwon: I need help pls, this github was from Ton official website, and the code isn't really working....

&rey: Please consider abandoning TonWeb in favor of @ton/core. (reply to 161868)

Cyberwon: Images aren't allowed in this group?

&rey: Messages are rate limited. Please also have a caption to images. (reply to 161873)

Cyberwon: Okay, but is there any specific reasons? aside that the code don't work?, and why does Ton still direct Developers to that repo? (reply to 161872)

Rouzbeh:     public async transferJetton(         asset: string,         amount: number,         destination: string     ): Promise<string> {         if (!Jetton[asset]) {             throw new Error(`Unsupported asset: ${asset}`);         }          const jettonMasterAddress = Jetton[asset].address;         const decimals = Jetton[asset].decimals;         const jettonAmount = BigInt(Math.floor(amount * 10 ** decimals));          const senderAddress = this.wallet.address.toString();         const jettonWalletAddress = await this.getUserJettonWalletAddress(senderAddress, jettonMasterAddress);          const messageBody = beginCell()             .storeUint(0x0f8a7ea5, 32)             .storeUint(0, 64)             .storeCoins(jettonAmount)             .storeAddress(Address.parse(destination))             .storeAddress(this.wallet.address)             .storeBit(0)             .storeCoins(0)              .storeBit(0)             .endCell();          const internalMessage = internal({             to: Address.parse(jettonWalletAddress.toString()),             value: toNano(TON_FEE_AMOUNT),             bounce: true,             body: messageBody,         });          const seqno = await this.contract.getSeqno();          await this.contract.sendTransfer({             seqno,             secretKey: this.keypair.secretKey,             messages: [internalMessage],         });          const transferBody = this.wallet.createTransfer({             seqno,             secretKey: this.keypair.secretKey,             messages: [internalMessage],         });          const externalMessage = beginCell()             .storeUint(0b10, 2)             .storeAddress(this.wallet.address)             .storeAddress(null)             .storeCoins(0)             .storeBit(0)             .storeBit(1)             .storeRef(transferBody)             .endCell();          const txHash = externalMessage.hash().toString('hex');          return txHash;     }      private async getUserJettonWalletAddress(userAddress: string, jettonMasterAddress: string): Promise<Address> {         const userAddressCell = beginCell().storeAddress(Address.parse(userAddress)).endCell();          const response = await this.client.runMethod(Address.parse(jettonMasterAddress), 'get_wallet_address', [             { type: 'slice', cell: userAddressCell },         ]);          return response.stack.readAddress();     }  This is my transfer jetton function  - I deployed my own jetton on testnet to test this - I pass amount that i have in my wallet and nothing happends without any error - I pass some big amount that i dont have in my wallet and still no error   What im doing wrong ? im confused by the documents and examples

&rey: The thing you are doing wrong is treating TON as something like other chains. It is really another spin on blockchain technology. (reply to 161878)

&rey: Those two calls can be different because of embedded deadline value, which is determined from current time. (reply to 161878)

&rey: Misnamed a bit, hash of external message is nothing but hash of external message. Not of transaction (though the explorers will happily process it as well). (reply to 161878)

Rouzbeh: Thanks for your helping, my code just works fine now i see amount deduction from my wallet  I see that the returned txId from my function is not as same as txId i see in my tonkeeper, so as you said that TON is different  1- how can i make sure transaction confirmed or rejected ? 2- how can i get true transaction id ? (reply to 161881)

&rey: Recall that TON transaction only involves one contract.  1,2. https://docs.ton.org/v3/guidelines/dapps/transactions/hash-based-tracking (reply to 161882)

&rey: Some documentation is that old, indeed. (reply to 161876)

— 2025-10-14 —

🐱: If you tx involves multiple messages and you are expecting the behavior of full confirmation, you might need to get verbose and check some more boc, not just the your in message. TON messages are asynchronous. (reply to 161882)

Ton21: Hi everyone 👋 I’m currently working on a Jetton project called Ton21, and I’m integrating automatic balance tracking and transaction confirmation. Could someone share the best practice for verifying TON transaction status via Toncenter API or lite client?

Rouzbeh: in @ton/ton project there is a method called getTransactions how can i get hash of the transaction there is  - hash() function that reaturns a hash - stateUpdate.oldHash - stateUpdate.newHash  none of above hashes are equal to the one i see in tonKeeper   how can i get the transaction hash of my simple jetton transfer that ? (reply to 161898)

&rey: Which transaction, specifically, out of 3-5 composing a jetton transfer? (reply to 161924)

Rouzbeh: Ok let me explain i wrote a code for transfering jetton (USDT) from my wallet to another wallet      public async transferJetton(         asset: string,         amount: number,         destination: string     ) {         if (!Jetton[asset]) {             throw new Error(`Unsupported asset: ${asset}`);         }          const jettonMasterAddress = Jetton[asset].address;         const decimals = Jetton[asset].decimals;         const jettonAmount = BigInt(Math.floor(amount * 10 ** decimals));          const senderAddress = this.wallet.address.toString();         const jettonWalletAddress = await this.getUserJettonWalletAddress(senderAddress, jettonMasterAddress);          const messageBody = beginCell()             .storeUint(0x0f8a7ea5, 32)             .storeUint(0, 64)             .storeCoins(jettonAmount)             .storeAddress(Address.parse(destination))             .storeAddress(this.wallet.address)             .storeBit(0)             .storeCoins(0)              .storeBit(0)             .endCell();          const internalMessage = internal({             to: Address.parse(jettonWalletAddress.toString()),             value: toNano(TON_FEE_AMOUNT),             bounce: true,             body: messageBody,         });          const seqno = await this.contract.getSeqno();          await this.contract.sendTransfer({             seqno,             secretKey: this.keypair.secretKey,             messages: [internalMessage],         });     }  now i have one question - How can i track this transfer and see if its failed or confirmed ? - i tried multiple methods to create hash from my transfer method but none of them was equal to anything and i cant find that in tonviewer too (404) - i tried to use getTransactions method to get list of my wallet transactions but there are 3 or 4 hashes in that and none of was equal to the one i see in tonkeeper history  How can i have the transaction id of my transfer so i can see if its confirmed or not ? (reply to 161925)

Rouzbeh: im looking for any method, any function any way to give me the transaction id of my transfer so i can just track it :( (confirmed or failed) (reply to 161926)

Tim: Look into normalised external tep (reply to 161926)

&rey: plus also need to wait for actual transaction on jetton wallet, at least sender's (reply to 161934)

Rouzbeh: Hey guys i wan to do transfer jetton In a another wallet its ok but in the second one i get this error  LITE_SERVER_UNKNOWN: cannot apply external message to current state : Failed to unpack account state  the only difference is that the second one is fresh wallet

&rey: So do you have TON in the second wallet?  TON is the native network token, someone must supply it for transactions to take place. (reply to 161978)

Rouzbeh: no no i dont have TON in it so the error is for not having enough balance right ? (reply to 161979)

&rey: Yes. To be more precise: there is no balance, so the TON shard's map of addresses to account states does not even have that address set, therefore there is no "account state" to unpack, thus the error. (reply to 161981)

Rouzbeh: Thanks, this was really helpful (reply to 161982)

שרואל: שרואל V: Hey there i have a question about the structure of the amount of validatiors what if they now gathering all together and decide to take control of the system this is not something that bothers you and should raise for us some concerns?  Im asking to know and learn

&rey: The validators pretty much are the system and it is ultimately their decisions which determine how it shall work (and always been this way). They appear to work with TON Core team though, in regards to upgrades at least. (reply to 161995)

שרואל: Thank u, do we know the identity of the validators?

&rey: You can resolve ADNL addresses from https://tonviewer.com/config#34 with toncli to obtain their IP addresses. There is absolutely no requirement to identify further for a validator.  As a reminder, TON does not make any guarantees about fitness to your particular use case and so on. The distrust always remains a valid option (but then, why here?) (reply to 161999)

שרואל: Just to better understand the project and the structure, i believe in ton and the ideology behind it, i just want to know better so i can explain and answer people that dont know

&rey: They might be interested in https://docs.ton.org/v3/concepts/dive-into-ton/introduction which is one step closer. (reply to 162003)

שרואל: 👍 (reply to 162004)

שרואל: I have another question if its okay, what is the main blocks/problems that the project is struggling this days?

— 2025-10-16 —

CashboxGame: Hello, I getting a reminder that the SDK isn’t installed correctly. My SDK token and appName are both fine, any idea what might be causing this? Who can I reach out to for help?

Sachin: DM me, If you need help with it. (reply to 162147)

Code: Why does everybody say DM instead of just discussing solutions here? Are they trying to scam/hack or charge for helping? What's the deal

phex: how can someone discuss the issue without looking at the code base? (reply to 162165)

Code: Looking at code base is not always necessary, and you can share minimum repro as well (reply to 162168)

phex: sure, Go ahead, create a "Repro" and help them (reply to 162169)

Code: its on the reporter to repro, also its not always necessary, can share symptoms or error messages to aid in debugging... no successful dev communities work in DMs... otherwise how do others learn? You are being silly

Alex: 🚀 First beta release of the new TON documentation is now live! 🗺 Jump ahead to beta-docs.ton.org or stay here to learn about the project's backstory, current achievements, and future plans.  For quite some time, developers shared the same feedback: TON documentation is too scattered, difficult to navigate, and has obvious gaps and inconsistencies.  We at TON Studio took that seriously and initiated the TON Docs Revamp project in late July. It is focused on the following four goals:  • To introduce a streamlined, discoverable structure that would be easy to navigate and search • To make documentation welcoming to all developers, from newcomers to seasoned professionals • To introduce and maintain stricter quality checks from humans and AIs to ensure proof-read, up-to-date, consistent, and clear content • And, finally, to set up documentation release pipelines for major TON builders, while making community contributions straightforward and approachable  🏆 Today, with the help and suggestions from various developer teams, including Zengo, RSquad, TonTech, TON API team, and TON Core, the TON Studio is proud to present the first public version of this documentation. It already fulfills the first goal of comprehensive structure and rapidly moves towards achieving the third goal of content.  🦄 That said, this is a beta release: many pages await their contents, some pages require secondary reviews, while infrastructure, pipelines, and processes are only nourishing, not mature yet. All constructive feedback is appreciated.  So, what's in store already? We've got:  • Flat, easy-to-navigate structure • Hands-on articles with real examples whenever we can provide them • Visuals and diagrams, including various Mermaid diagrams • Smart AI search and summaries • Automatic CI spell checks and AI reviews based on the growing style guide • ...and much, much more!  🏠 TON Docs Revamp features an engaging landing page that guides users through their TON journey, whether they're first exploring TON, building smart contracts, integrating wallets, or just want to access and navigate the documentation quickly.  📝 Re-written or brand new content includes pages for: mytonctrl, mylocalton, development setups with Sandbox and Blueprint (with major help from TonTech), IDEs and SDKs, gas estimation, analytics, oracles, bridges, TMAs, TON Connect, standard wallet contracts, Jettons, NFTs, TVM instructions (with proper search and discovery), TL-B, FunC and other TON-specific programming languages, web versions of whitepapers (with cross-links and solid AI summaries), and even a "Coming from Ethereum" guide!  📈 And this is just the beginning. Plans ahead and for the next month include:  - Release pipelines and assignments of relevant technical owners - Docs, infrastructure, and processes for approachable community contributions - More playgrounds, interactive components, and interactivity - Much more content - Stronger AI-based assistance as documentation grows  🎯 The main goals of this beta release are to show preliminary progress, willingness to make things right, and to collect feedback from the developer community before the full release, which is tentatively scheduled for November 17th.  We are nothing without the feedback from the community. If something is missing or confusing, let us know by filing a GitHub issue. Furthermore, help review new content whenever you or someone you know is deeply familiar with the topic. TON is vast, and there is always something to know or be aware of.  Prominent ecosystem projects are invited to host, co-own, and maintain their documentation with us. Keeping things in one place will enrich the user experience and AI responses.   💪 Let's make the best documentation for TON. Together.  → Beta release URL: beta-docs.ton.org → GitHub repository: github.com/ton-org/docs → Future milestones: github.com/ton-org/docs/milestone/3 (forwarded from TON Dev News)

Code: yay! (reply to 162174)

Combot: Combot has warned Code Cowboy (2/3) Reason: Word **** is not allowed

Code: Let's start with the following:  * How did you install the SDK? Via script tag or npm package? * Check the network tab of your telegram mini-app (if you dont know how, look up how to debug telegram mini apps)     * Inside the network tab, do you see any analytics requests for telegram? Are they successful? (reply to 162147)

Code: Because it's actually not about TON, its TMA, and this channel is for TON (reply to 162188)

— 2025-10-17 —

Tharun Tej: I created testnet wallet, and requested 2TONs from telegram bot. How much will it take for execution?

Code: It says it takes 2 hours but its usually nearly instant for me (reply to 162272)

J2: Hello, I am a full-stack and blockchain developer with strong experience building on TON (The Open Network), including smart contracts in FunC and Tact, NFT/Jetton standards, and Telegram Mini App integrations.   Beyond TON, I have also delivered production-ready solutions across Solana (Rust, Anchor), Stellar/Soroban, Sui & Aptos (Move), and XRPL (Hooks, sidechains). This cross-chain experience allows me to bring best practices for secure, efficient, and user-friendly smart contract architectures.  Key areas I can support you with: * TON smart contracts using FunC or Tact * TonConnect / Wallet API implementations * Tokenomics, Jetton/NFT design, and on-offchain synchronization * Security reviews and deployment optimization  I’d be happy to show how my experience across TON and other ecosystems can help you bring it to production smoothly.

Shinobi: Hi, I noticed that the domain maleficent.ton has expired on 16.09.2025, but it’s currently not available for purchase. Could you please check why it’s still locked and when it will be released for registration again?

Tharun Tej: It's been 7hrs and I didn't get it (reply to 162281)

Alireza: Hi every one😊

Artem: GM! We’re actively seeking promising Web3 projects at the Pre-Seed, Seed, and Early Series A stages that could benefit from funding. Whether you’re building in DeFi, infrastructure, AI x blockchain, or other areas of decentralization, we’d be excited to connect and discuss how we can help accelerate your growth 🚀

TON Bounty Bridge: ​Ohg  Created by Abrahim4567
