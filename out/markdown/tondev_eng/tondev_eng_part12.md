TON Support: It sounds like you're encountering a common issue when paginating through transactions using `getBlockTransactions` (or `getBlockTransactionsExt`) with `after_lt` and `after_hash`. This method is designed to retrieve a list of transactions within a specific block. The parameters `after_lt` and `after_hash` are crucial for pagination.  Here's a breakdown of why you might be seeing this behavior and how to correctly paginate:  Understanding `after_lt` and `after_hash` for Pagination  When you make a request to `getBlockTransactionsExt` with `count=40`, you get the first 40 transactions. To get the *next* set of transactions, you need to provide the `after_lt` and `after_hash` of the *last transaction received in the previous request*.  If you're making three separate requests with `count=40` without updating `after_lt` and `after_hash` in each subsequent request, you will indeed get the same first 40 transactions every time. This is because you're essentially telling the API to start from the same point in the block for each request.  How to Correctly Paginate  Let's assume you want to retrieve 100 transactions in batches of 40:  1.  First Request (count=40):     *   Send your initial request with `count=40`.     *   The API will return the first 40 transactions and, critically, the `lt` and `hash` of the last transaction in that list. Let's call these `last_lt_1` and `last_hash_1`.  2.  Second Request (count=40):     *   Make a new request to `getBlockTransactionsExt`.     *   Use the same `workchain`, `shard`, and `seqno`.     *   Set `after_lt = last_lt_1`.     *   Set `after_hash = last_hash_1`.     *   Set `count=40`.     *   The API should now return the next 40 transactions. Again, extract the `lt` and `hash` of the last transaction from this new list. Let's call them `last_lt_2` and `last_hash_2`.  3.  Third Request (count=20, or another 40 if more exist):     *   Make a third request.     *   Use the same `workchain`, `shard`, and `seqno`.     *   Set `after_lt = last_lt_2`.     *   Set `after_hash = last_hash_2`.     *   Set `count=40` (or `20` if you only need 100 total and have already received 80).  Example of `getBlockTransactionsExt` Response Structure (Simplified for Illustration):  A typical response for `getBlockTransactionsExt` includes a `transactions` array, and each transaction object within that array will have `transaction_id` containing `lt` and `hash`.  ```json {   "ok": true,   "result": {     "transactions": [       {         // ... transaction details ...         "transaction_id": {           "lt": "67292955000016",           "hash": "ChIengkoGqHEH+Y581mPPhUY5sDot8jkHF+chjrmkzY="         }       },       // ... more transactions ...       {         // ... last transaction details ...         "transaction_id": {           "lt": "LAST_LT_FROM_THIS_BATCH",           "hash": "LAST_HASH_FROM_THIS_BATCH"         }       }     ],     "incomplete": true // if there are more transactions to fetch   } } ```  You need to extract `LAST_LT_FROM_THIS_BATCH` and `LAST_HASH_FROM_THIS_BATCH` from the last transaction in the `transactions` array and use them for your next request's `after_lt` and `after_hash` parameters.  Why `count=100` Works Directly  When you set `count=100`, the API attempts to retrieve all 100 transactions in a single call, starting from the beginning of the block (or from your initial `after_lt`/`after_hash` if provided). If 100 transactions are available, it will return them.  Conclusion  The issue you're facing is not necessarily a bug, but rather a misunderstanding of how the `after_lt` and `after_hash` parameters are intended to be used for pagination. You must dynamically update these parameters with the details of the last retrieved transaction to fetch subsequent batches.  Source: [List block transactions (extended details) - TON Docs](https://docs.ton.org/ecosystem/api/toncenter/v2/blocks/list-block-transactions-extended-details) (reply to 175803)

Dima: Yes, I am using pagination correctly. All the requests I send are new, and they take the lt and hash from the last response.

TON Support: It's understandable that you're still facing this issue even when you believe you're using pagination correctly. If you're consistently getting only the first 40 transactions, even when providing the `lt` and `hash` from the previous response, there might be a few less obvious reasons for this behavior when interacting with the TON Center API.  Here are some potential causes and things to check, based on how the `getBlockTransactionsExt` endpoint is designed:  1.  Incorrect `workchain`, `shard`, or `seqno`:     The `getBlockTransactionsExt` endpoint requires `workchain`, `shard`, and `seqno` as mandatory parameters to identify the specific block you are querying. If these parameters are not consistent across your paginated requests, you might be inadvertently querying different blocks or the same block from the beginning.     *   Action: Double-check that the `workchain`, `shard`, and `seqno` values are identical for all your paginated requests. These should correspond to the specific block you intend to retrieve transactions from.  2.  `incomplete` flag in the response:     The API response for `getBlockTransactionsExt` includes an `incomplete` boolean field. This field indicates whether there are more transactions available in the block beyond what was returned in the current request.     *   Action: Examine the `incomplete` flag in your responses. If it's `false` even after the first 40 transactions, it implies that the API believes it has returned all available transactions for that specific block. This would suggest that there genuinely aren't more transactions in the block that fit your criteria, or there's a limit that is not immediately obvious.  3.  `req_count` field:     The `req_count` field in the response indicates the number of transactions that were requested. While you set `count` in your request, `req_count` reflects what the server processed.     *   Action: Verify that `req_count` in the response matches the `count` you sent in your request (e.g., 40). If `req_count` is less than what you asked for, it could indicate an internal server limit or an issue with the request.  4.  Limits on `getBlockTransactionsExt`:     While the documentation mentions a `count` parameter that defaults to 40, there might be an implicit server-side maximum limit for the number of transactions returned in a single `getBlockTransactionsExt` call, regardless of the `count` you provide. If this limit is, for example, 40, then even if you request 100, you might only get 40, and the `incomplete` flag would still be `true` if more exist.     *   Action: If you are consistently receiving exactly 40 transactions and `incomplete` is `true`, it is worth considering if there's an undocumented hard limit. However, the fact that `count=100` works suggests this might not be the primary issue unless it's a specific interaction with `after_lt` and `after_hash`.  5.  Data Consistency / Node Sync Issues:     Less likely, but possible in a distributed system, is that the node you are querying might have some temporary inconsistency or be out of sync, leading to partial results.     *   Action: If possible, try querying a different TON Center API endpoint or a different node to see if the behavior persists.  Troubleshooting Steps:  To help diagnose this further, could you provide:  1.  An example of your full request URL (with dummy `lt` and `hash` if sensitive, but preserve the structure) for the first request (which returns 40 transactions). 2.  The full response (or relevant parts, especially the `transactions` array and the `incomplete` flag) from that first request. 3.  The full request URL for the second paginated request (using the `lt` and `hash` from the first response). 4.  The full response from the second paginated request.  Without seeing the actual requests and responses, it's challenging to pinpoint the exact problem. The documentation strongly suggests that `after_lt` and `after_hash` are the correct mechanisms for pagination, and if ...  [Message truncated due to length] (reply to 175805)

— 2026-02-26 —

Emin: https://github.com/ton-blockchain/ton/blob/1690ba0a29326ece823cd86346712ae0ae9a3e69/crypto/smartcont/tolk-stdlib/common.tolk#L1447 docs.ton.org AI needs retraining

Stephen: How to start auction on expired ton domain?

Stephen: Did this, placed the bid, transaction success, but no update at all on the listing or within my account. (reply to 161057)

&rey: See https://t.me/tondev_eng/175599. (reply to 175852)

Stephen: Where do we start this process? (reply to 174321)

Mohammad: Hi, We have this problem with USDT jetton wallet. We have ~418 TON stuck in USDT Jetton EQCxVMJVlPDJWOR21AMLrDII7h_QSJ0rhvDL8LaYg4SqwHkv (owner UQBmj9rH4PsslSp4DkZFL_4V9qTa6DFHUkGntR0xPrrKb15L). It happened when a jetton_transfer was sent with the full wallet balance as gas, the internal_transfer bounced, and the bounce was absorbed by the Jetton wallet without returning excess to the owner. We tried sending withdraw_tons (op 0x6d8e5e3c) but it bounced with 0xffff since the stablecoin contract doesn't support it, and we also tried a Jetton self-transfer hoping receive_jettons would sweep via mode 128, but the excess only returned the attached gas — the deployed USDT contract seems to use mode 64 for excesses. Is there any way to recover TON stuck in a stablecoin Jetton wallet? Any help would be appreciated.

TON Support: Unfortunately, the TON documentation does not contain specific guidance on recovering TON stuck in a stablecoin jetton wallet contract in the scenario you describe. However, based on what I found:  The USDT contract is based on the stablecoin-contract implementation, which includes a governance mechanism that allows performing actions on Jetton Wallets (per the Jetton comparison page). The stablecoin Minter contract's governance can "perform any actions on other Jetton Wallets."  This means your best path to recovery is likely to contact the USDT issuer (Tether/TON Foundation) and request they use the governance mechanism on the Minter contract to help recover the stuck TON from your jetton wallet. Since the stablecoin contract doesn't support withdraw_tons and uses mode 64 for excesses (as you've confirmed), there is no user-initiated way to sweep the excess balance.  Source: Stablecoin contract details, Precompiled contracts - stablecoin example, Jetton API reference (reply to 175858)

Stephen: Ok I'm "new" when you say "Send message ton:// ...  Where do we send that message?  As I tried to send that string with the data, send via a send TON process, but says wallet not valid? (reply to 152421)

&rey: You are to create this link and open it from device/browser which has a wallet installed. (E.g. for mobile Tonkeeper, you would convert the link into QR and then scan it from the app.) (reply to 175860)

Stephen: that worked thanks! (reply to 175862)

Javi: Hello everyone, I am reaching out here because the official @wallet support has been unresponsive for over 30 days regarding a documented refund on the TON Network. The Case: A refund of 400 USDT was sent from KuCoin to the Telegram Hot Wallet (UQACOJWu-VUCSSCikcbzcV4pHfGz3SVOr6iwniGi1Y1Yl6jF) due to a missing Tag. Evidence: Status: Succeeded (Confirmed on-chain) Refund TXID: 8d815774e179783935824e930f60715d3197609a349b6f3a38612140a85a6a54 Date: January 26th Despite providing the TXID and multiple emails to support@wallet.tg, the funds have not been credited to my account. As this is a confirmed transaction on the TON blockchain, it requires a manual credit from the custodial team. Is there any developer or moderator here who can escalate this to the Wallet's technical or compliance team? This lack of support is impacting the trust in the ecosystem's official custodial solutions. My Telegram User ID: 1049535962 My Email: javiacademia@hotmail.com Thank you for any guidance or escalation.

&rey: No one except Telegram Wallet's support can help you, as it is a custodial service of its own. Also hold in mind that anyone reaching out in DMs might be a scammer. (reply to 175875)

Javi: I appreciate the warning and I am aware of the custodial nature of the Wallet. However, it's been 30 days and the official support email (support@wallet.tg) is completely silent despite having a confirmed on-chain TXID. Since this group is for the TON ecosystem, I am looking for a way to escalate this to a human agent or a compliance lead. Is there any known official channel or moderator here with a direct link to the Wallet's technical team? This is a documented manual credit issue. (reply to 175877)

Seva A.: Hello, is Mira already accessible for developers? I mean API, docs, etc.

Daria: Hi Seva! What kind of API do you want? (reply to 175890)

Seva A.: Hello, @DariaYkv, would be nice to have an API to give users access for different AI features in TMA and bot.

— 2026-02-27 —

TON Moderator: Hello, .! Read rules and click button below.

Daria: which one? (reply to 175895)

Seva A.: An API for video, images, texts generation, @DariaYkv.

— 2026-02-28 —

Alina: when there’s a big delay between blocks, 10 sec instead of 2-3 sec in reality a block is generated fast as usual and is broadcasted to nodes but for some reason ends up getting discarded and another block with this seqno gets re-generated from scratch why tf ! !

&rey: I recently learned: when it's time to rotate shard validators, the previous group loses authority to mint new blocks but one last block could've already been made. (reply to 175977)

Alina: Aren’t validators rotated very infrequently? (once in 12 + hours)  Isn’t the authority you’re talking about plays a role when a block is collecting signatures?  If it fails to collect signatures it doesn’t even get broadcasted so it’s not that big of a deal (for end users) I thimk I guess ! ! (reply to 175978)

&rey: The full set is; however, who is assigned to which shard changes more often. (reply to 175979)

&rey: Also when the new masterchain block is generated. (reply to 175979)

Alina: in the ballpark of 10-30 minutes? (reply to 175980)

&rey: 1000s = 16min. See https://tonviewer.com/config#28, shard_validators_lifetime. (reply to 175982)

Alina: I observe a block being broadcasted, dropped and re-generated every ~4 minutes

&rey: Mainnet or testnet? (reply to 175987)

Alina: mainnet (reply to 175988)

Alina: between these two blocks (note the big difference in gen_utime) was one block with seqno ..655 but didn’t make it  https://tonviewer.com/block/(0,8000000000000000,62502654) https://tonviewer.com/block/(0,8000000000000000,62502655)  this is another example  https://tonviewer.com/block/(0,8000000000000000,62502557) https://tonviewer.com/block/(0,8000000000000000,62502556)

𝕽𝖊𝖙𝖎𝖗𝖊𝖉 𝖄𝖔𝖚𝖓𝖌𝖕𝖗𝖎𝖊𝖘𝖙🌴⃝: Hi, is there any bot that can be sending ton price to my channel?

jizzy019: U can create one if there is none though (reply to 175997)

𝕽𝖊𝖙𝖎𝖗𝖊𝖉 𝖄𝖔𝖚𝖓𝖌𝖕𝖗𝖎𝖊𝖘𝖙🌴⃝: But I don't know how to create it. (reply to 176023)

jizzy019: ask ai.

— 2026-03-01 —

Oleksii: Hello there! I started a small Telegram channel as a personal filter for AI SaaS tools. No tutorials, no hype, no affiliates.  AI SaaS Radar

ranxiang: 小额xi米 一天9K @qiangpao

ranxiang: 小额xi米 一天9K @qiangpao

ranxiang: 小额xi米 一天9K @qiangpao

Kevin: I’m a Full Stack Developer with 4 years of experience building modern, scalable web applications. I specialize in React.js, Next.js, Node.js, TypeScript, and MongoDB, and have a strong focus on creating fast, user-friendly, and maintainable solutions. I’ve worked on both frontend and backend projects — from API integrations to responsive UI development.  Check - www.satyammishra.dev

ranxiang: 小额xi米 一天9K @qiangpao

ranxiang: 小额xi米 一天9K @qiangpao

Nawal Maqdisi♥️♥️❤️❤️: Assalamualaikum

ranxiang: 小额xi米 一天9K @qiangpao

REON: Is there a passkey wallet creation doc available?

&rey: I don't remember if there is a standard for it. Generally, such a wallet just had its keypair derived from the seed in another way. (reply to 176092)

gaga: Hello, i am serching for the op-code to start a auction on a TON Domain after it's expiration. Can somebody help me?

TON Support: I wasn't able to find specific documentation about the op-code for starting an auction on a TON Domain after expiration. This information may be in the TEP 0081 DNS standard or in the dns-contract source code on GitHub rather than in the official documentation. (reply to 176107)

&rey: You can search this chat for keyword "expired domain", reaching https://t.me/tondev_eng/152421 . (reply to 176107)

gaga: Than you! (reply to 176109)

TON Support: To compare your in-message hash against the getTransactions objects' inMessage attribute, you need to compute the normalized hash of the input message using getNormalizedExtMessageHash. Then, you can search for a transaction whose input message's normalized hash matches your targetInMessageHash.  Source: Message lookup - TON Docs, Hash-based tracking | The Open Network (reply to 44809)

gaga: So it should be possible via tonkeeper to send the amount of ton to the nft address with the bin-payload in the commet section and the auction will start? (reply to 176109)

&rey: No. Comment field if entered via app will only have printable characters (and will start with opcode 0 which is not what you want), while the payload is not fully printable. (reply to 176112)

&rey: Instead, open the templated link (e.g. by converting it into QR and scanning). (reply to 176112)

Blackstreak: May I know if this is still valid? Do we have a link shared? (reply to 174918)

&rey: It has completed. There is a link in the channel, on 22nd February. (reply to 176115)

— 2026-03-02 —

testertesterov: Hello everyone  Could you please tell me if Cocoon has released an accessible interface for integration?  I want to integrate Cocoon models into the TON AI Framework.

TON Bounty Bridge: 📊 Update Digest!  🔍 Active bounties: 9 ✅ Approved bounties: 0 🔄 Bounties seeking suggestions: 21  📣 We value your feedback! Join the community discussion and participate in shaping the future. Click the 'Create Your Own Bounty' button to get started.  Happy contributing!

︎ ︎︎ ︎︎ ︎︎ ︎︎ ︎︎ ︎︎ ︎︎ ︎︎ ︎︎ ︎︎ ︎︎ ︎︎ ︎︎ ︎︎ ︎︎ ︎ ︎︎ ︎︎ ︎︎ ︎︎ ︎︎︎: Hello everyone, please tell me how I can trigger a reindex on the TonCenter. The metadata is old, even though I updated it via the blockchain. How can I trigger a reindex? What point is this or is it only through tech support?

TON Support: When mutable metadata changes, the Mint Platform API triggers ecosystem products and indexers to reindex the affected items. Indexers then read updated metadata and expose critical flags through their APIs.  Source: NFT 2.0 - TON Docs (reply to 176154)

— 2026-03-03 —

Emin: is it generally considered safe to put toncenter api key on client side if you specify cors? or is there another way to do it without getting rate limited?

TON Support: It is explicitly stated in the TON documentation that you should "Never expose the API key in client-side code or public repositories." API keys should be stored in a secrets manager or environment variables, rotated periodically, and a new key should be generated immediately if one is compromised.  To avoid rate limiting, you can obtain an API key from TON Center. Different subscription plans offer varying request limits per second:     Free: 10 requests/sec, 1 token per network    Plus: 25 requests/sec, 3 tokens per network    Advanced: 100 requests/sec, 10 tokens per network    Enterprise: Custom throughput and support.  If you make requests without an API key, the default rate limit is 1 request per second.  Source: API authentication - TON Docs, Rate limits - TON Docs, Get your TON Center API key - TON Docs (reply to 176192)

Emin: but i dont want to proxy all requests…

Seva A.: Bot + TMA Vercel deploy, DB: Neon https://github.com/HyperlinksSpace/HyperlinksSpaceBot/tree/main/app

Emin: theres no toncenter here tho (reply to 176195)

Seva A.: AppKit integration coming soon

Slava: My recommendation would be to create a custom proxy with a limited API surface. Otherwise, anyone would be able to use your API key for their purposes. (reply to 176192)

Emin: yeah its either this or i index then cache (reply to 176206)

Stephen: 3 letter .ton domains, will they come/can we buy at premium price or ?

TON Support: Primary sales of .ton domains occur through a decentralized open auction at dns.ton.org. These domains are implemented as NFTs and follow the standard NFT format.  Source: TON DNS & domains | The Open Network (reply to 176228)

Илья: Is there a service for VPS rent by $ton?

— 2026-03-04 —

Emin: GET message by msg_hash:  https://testnet.toncenter.com/api/v3/messages?msg_hash=2NZnsQeZxCLvuSS6TORQeXHHbQhuCkR7%2FNorPqIctmE%3D&direction=out&limit=100&offset=0&sort=asc  GET message by opcode, source, direction: https://testnet.toncenter.com/api/v3/messages?source=0%3Af65395db2c6f861010821b65fe8a60e6293696726b06b560fe8ce94568600de8&opcode=0x88561111&direction=out&limit=100&offset=0&sort=asc  Does any one know why this message is not searchable via opcode, source and direction?

Emin: message hash is 2NZnsQeZxCLvuSS6TORQeXHHbQhuCkR7/NorPqIctmE=

Emin: I just changed the opcodes and now it works... crazy... https://testnet.toncenter.com/api/v3/messages?source=0%3A9b0cbf9f681c48a501823018c26ee2b6b62dd7057891b50fd63fcc2ac737e0f2&opcode=0x38812053&direction=out&limit=1000&offset=0&sort=asc  https://testnet.tonscan.org/tx/d71b7d7bda99a51c0fd660f0ffdd1974006f770c8425966e5797b2bcd75e4e6a It's clear previous opcodes didn't get captured by toncenter

DN: Yes  dm me (reply to 176234)

Илья: Hi, is there any news about bridge between TON and Bitcoin?

TON Support: Yes, there is a BTC Teleport module that manages an optional Bitcoin bridge client shipped with MyTonCtrl. This module allows you to inspect proposals, vote on them, or remove the Teleport installation.  Source: BTC Teleport - TON Docs (reply to 176297)

Emin: can i please get an ack here (reply to 176271)

— 2026-03-05 —

Kk: Hey guys

Kk: Did you hear about orbton project?

Order: do u need dev? (reply to 176344)

Be_human: Hello,  A few hours ago I submitted my project through the Builders Portal using the email magic link login. After submission, I can’t access the dashboard or any project pages.  Issues:  builders.ton.org and ton.org/dev only show the AppKit announcement page with no Sign in option.  builders.ton.org/auth/signin redirects to ton.org/en/auth/signin and shows 404 – Page not found.  Dashboard pages like profile, portal, and apply show blank pages or 404 errors.  I already tried clearing cache/cookies, incognito mode, different browsers and devices, mobile data, VPN, and DNS changes, but nothing worked.  Is anyone else facing this issue or knows what might be causing it?

Be_human: Any update, guys? Do you have any idea where I can log in to check the game project I submitted?

Kiba: We’re checking, thank you (reply to 176361)

Gleb: Hello! Unfortunately, the Builders Portal is currently undergoing maintenance. We will let you know when it is available again. We apologise for any inconvenience. (reply to 176361)

Be_human: Hello! Thank you for the update.  Could you please let me know approximately how long the maintenance will take and when the Builders Portal is expected to be available again?  Also, I wanted to ask about the Telegram Analytics SDK requirement for Apps Center listing. Since the portal is currently unavailable, I cannot access the dashboard to obtain the Analytics API key.  Is there any alternative way to generate or request the Analytics API key during this maintenance period, or should we wait until the Builders Portal is fully restored?  Thank you for your help.

Emin: thanks for ignoring. leaving this useless group (reply to 176320)

STANMAGONI: guys whats going on?

STANMAGONI: cant login to builders portal

&rey: See just a few messages above: https://t.me/tondev_eng/176369 (reply to 176374)

STANMAGONI: Guys I don’t want to offend anyone but such a huge company like TON needs to step their game up. This looks unprofessional and there are no accidents when you ope a page and it says page is not found in big tech projects

STANMAGONI: This makes ton look like a rookie student home project but definitely not like a blockchain with 400m tvl

Kiba: Fair point — the maintenance should have been communicated in advance, and I take responsibility for that gap. We're putting a proper notification process in place so this doesn't happen again. Appreciate the feedback. (reply to 176382)

STANMAGONI: It’s all comes down to proper advanced planning. This situation just shows that the management isn’t in place and teams do whatever they want. It’s all about proper management (reply to 176384)

MR.ROBOT: Hello

MR.ROBOT: Are there any projects or creators here open to AMA sessions or cross-community collaborations?

— 2026-03-06 —

Gleb: Hi, ton.org/dev is up and running now. Please check (reply to 176361)

Be_human: Yes it is working perfectly. Thanks @glebtma

— 2026-03-07 —

TON Support: To convert a raw address to a user-friendly format, you can use the /packAddress endpoint of the TON Center API. This API requires the raw TON account identifier as a string parameter.  Alternatively, you can use the TON Address tool, an online converter that provides all possible address formats when a valid address is entered.  Source: Convert raw address to user-friendly format - TON Docs, Reading and writing addresses - TON Docs (reply to 176481)

REON: Is it possible to fetch a telegram user name handle from a ton wallet address? (reply to 176482)

&rey: Most TON wallets are standalone, and have none. Hopefully Telegram Wallet doesn't show handles either.  You can see if the wallet has a username NFT. (reply to 176487)

REON: I thought that is what User-friendly format meant.  The ton wallet address is pretty user-friendly. What it spits out looks random (I'm new)  When you say NFT, do you mean DNS ton .org or user handles as NFT? (reply to 176488)

вице-король vangaard: NFT username. Minted via Fragment (reply to 176489)

REON: Can I mint my handle as an nft via fragment and still use it as my telegram handle? (reply to 176492)

Kim: once you own the nft fragment will allow you to assign it to a telegram user (or bot) (reply to 176495)

— 2026-03-08 —

Scarlett Lux: Who wants to keep me company? Say hi.

Seva A.: Happy International Women's Day ;)

Willy: Thank you, bro, you too! (reply to 176515)

Seva A.: I'm male, no need for congratulations today, @rr_public_link )))

Willy: ))) (reply to 176532)

∆lieπ FlΦw: Ton dev chat es?

∆lieπ FlΦw: Español!?

∆lieπ FlΦw: Why only english racist?

&rey: There exist multiple TON Dev Chats, each for a certain language. I'm not sure Spanish is used frequently enough for speaking about development (on TON that is). (reply to 176546)

Vesting: hey everyone, I dont know how formula for generate TON wallet v4r2, can someone explain me?

TON Support: For Wallet V4R2, the wallet_id is defined as the first 4 bytes from the TON mainnet blockchain initial state hash. There isn't a specific complex formula; it's a chosen default value.  Here's an example of how to create a Wallet V4R2 using the @ton/ton TypeScript SDK:  import { mnemonicToPrivateKey } from '@ton/crypto'; import { WalletContractV4 } from '@ton/ton';  // 12- or 24-word mnemonic (space-separated) const mnemonic = 'bread table ...'; // Replace with your mnemonic  const main = async () => {     const keyPair = await mnemonicToPrivateKey(         mnemonic.split(' ')     );     const walletContractV4 = WalletContractV4.create({         workchain: 0,         publicKey: keyPair.publicKey,         // this magic number is default wallet_id for V4R2 wallet contract         walletId: 0x29a9a317,     });     console.log(walletContractV4.address); }  void main();   Source: How to interact with wallet - TON Docs (reply to 176552)

Vesting: let me try (reply to 176553)

jizzy019: I dropped code here sometimes ago to generate valid address and mnemonics  using javascript. let me look for it again and share here (reply to 176552)

Vesting: this my code ```'use server'  import { NextResponse, NextRequest } from 'next/server' import { WalletContractV4 } from "@ton/ton"; import { mnemonicToPrivateKey } from '@ton/crypto';  export async function GET(request: NextRequest) {     const mnemonic = 'prosper bacon arrest rabbit brave impose flush outside inspire exchange unaware critic fatigue sudden approve mother dinosaur evil impulse want world scan fence blame'; // Replace with your mnemonic     const keyPair = await mnemonicToPrivateKey(         mnemonic.split(' ')     );     const walletContractV4 = WalletContractV4.create({         workchain: 0,         publicKey: keyPair.publicKey,         walletId: 0x29a9a315,     });      return NextResponse.json({         status: 'success',         data: {             wallet: walletContractV4.address.toString({ bounceable: false, urlSafe: true, testOnly: false }),             walletId: walletContractV4.walletId,             publicKey: keyPair.publicKey.toString('hex'),             privateKey: keyPair.secretKey.toString('hex')         }     }); }``` (reply to 176555)

jizzy019: import { WalletContractV5R1, WalletContractV4 } from '@ton/ton' import { mnemonicToWalletKey, mnemonicNew, mnemonicValidate } from "@ton/crypto"  async function zoomy(){      const mnemonics = (await mnemonicNew()).join(" ")     const key = await mnemonicToWalletKey(mnemonics.trim().split(' '))     const isValid = await mnemonicValidate(mnemonics.trim().split(' '))      if(isValid){         a(mnemonics)          const walletv4 = WalletContractV4.create({publicKey: key.publicKey, workchain: 0})         const walletv5 = WalletContractV5R1.create({publicKey: key.publicKey, workchain: 0})          console.log(Wallet V4: ${walletv4.address.toString({bounceable: false})} or ${walletv4.address.toString({bounceable: true})} )         console.log(Wallet V5: ${walletv5.address.toString({bounceable: false})} or ${walletv5.address.toString({bounceable: true})})         console.log(Testnt V5: ${walletv5.address.toString({testOnly: true})}\n)   }      setTimeout(() => {         zoomy()     }, 1000) }  zoomy()  function a(v){console.log(v)}

Vesting: I get this object ```js {   "status": "success",   "data": {     "wallet": "UQCPpz9yq63w0_54CjiQ89Va6LDd5FlCSatfcLttwavmeFJV",     "walletId": 698983189,     "publicKey": "92be5a308764197d5e074a092b4db427d351df84582c572062f27ad198997428",     "privateKey": "5bf5439c34bb24a20a7d3d166a161c76a868b90b8f43406e3903ba8539244f2492be5a308764197d5e074a092b4db427d351df84582c572062f27ad198997428"   } }```

jizzy019: ``` import { WalletContractV5R1, WalletContractV4 } from '@ton/ton' import { mnemonicToWalletKey, mnemonicNew, mnemonicValidate } from "@ton/crypto"  async function zoomy(){      const mnemonics = (await mnemonicNew()).join(" ")     const key = await mnemonicToWalletKey(mnemonics.trim().split(' '))     const isValid = await mnemonicValidate(mnemonics.trim().split(' '))      if(isValid){         a(mnemonics)          const walletv4 = WalletContractV4.create({publicKey: key.publicKey, workchain: 0})         const walletv5 = WalletContractV5R1.create({publicKey: key.publicKey, workchain: 0})          console.log(Wallet V4: ${walletv4.address.toString({bounceable: false})} or ${walletv4.address.toString({bounceable: true})} )         console.log(Wallet V5: ${walletv5.address.toString({bounceable: false})} or ${walletv5.address.toString({bounceable: true})})         console.log(Testnt V5: ${walletv5.address.toString({testOnly: true})}\n)   }      setTimeout(() => {         zoomy()     }, 1000) }  zoomy()  function a(v){console.log(v)} ```

jizzy019: this output v4 address, mnemonics, v5 too (reply to 176559)

jizzy019: guess that's what you want or so

Vesting: I try use ton keeper, but I get different address (reply to 176561)

jizzy019: yes. this happens. however if you use the mnemonics from the code and import to tonkeeper it always the same

Vesting: not same (reply to 176563)

jizzy019: check again. when I import mnemonics generated by the script into tonkeeper the address generated always tally with what the script generate

jizzy019: may be there is a change or so afyer the last time I tested this.

Vesting: okay, Iam done now

Vesting: thank you

None: Hello everyone, please tell me about TON Connect via tonutils (python). Where to get BRIDGE_LAST_EVENT_ID? If BRIDGE_CONNECTION is from a JSON file, then with the tonutils update, BRIDGE_LAST_EVENT_ID disappeared somewhere from the JSON file

&rey: To build a FunC contract, you can create environment with npm create ton@latest, configuring it to use FunC, and then npx blueprint build.

&rey: However, please refrain from using emojis, other languages or spamming in this chat.

Michaelzy: Gm guys Please how do i get an api key for ton pay? Currently it's asking me to login at https ://tonpay.tech/dashboard/   but i don't even have credentials to begin with and i don't know where to sign up

Teemu | 機器人🪽: hey guys, testing with NFTs and metadata updating... anyone know how to "bust" Tonviewers cache? it seems they dont want to update it, like, EVER

&rey: Generally, an update should be done with a transaction to the NFT item (or collection, respectively). (reply to 176589)

Teemu | 機器人🪽: generally, it doesnt... they seem to keep the same cached file for weeks, tried everything i can figure out to get them to reload

&rey: Does the link change? You could change its query parameters (which come after ?). (reply to 176594)

Teemu | 機器人🪽: i guess i need tonapi to see the actual address for the link? as tonviewer doesnt update.. but gtgems shows all the data as it should

Haracter: Hey

Haracter: Need help compiling FunC contract!  I have ready FunC smart contract (marketplace-contract.fc). Need to compile to .boc format for mainnet deployment.  Who can help?

Mirka: Did you write the contract by yourself? If you didn't use blueprint that may help: https://docs.ton.org/languages/func/overview#end-to-end-tooling https://docs.ton.org/languages/func/overview#compile-manually-using-the-binaries (reply to 176621)

Andrew: Has anyone started to use Tolk instead of FunC?

Teemu | 機器人🪽: Install blueprint and then npx blueprint build on console (reply to 176621)

Andrew: Asking because FunC seems to become the legacy tool (reply to 176625)

Haracter: I already have .fc, but I need to convert .fc to .boc (reply to 176626)

Teemu | 機器人🪽: Idk how, but if you compilee the .fc you get your boc-codes

Haracter: Ye I know that, I ask it here in a chat (reply to 176630)

— 2026-03-09 —

&rey: There is an automatic migration tool by the way, which provides some Tolk code matching the FunC one. (reply to 176627)

&rey: You need blueprint, toncli, or some more specialized environment. Given you can copy your .fc over the template project, the first option seems workable. (reply to 176628)

Vesting: I have generate ton wallet v5, now I need to send toncoin to someone, how it can be done?

TON Support: To send Toncoin from your Wallet v5, click "Send", enter the recipient's wallet address and the amount of TON, then click "Send TON". Verify the details and click "Confirm". Source: wallet.ton.org - TON Docs (reply to 176650)

Vesting: can I send message to blockchain using privatekey?

TON Support: Yes, you can send messages to the blockchain using a private key on TON. The private key is used to sign messages, ensuring that only the owner of the wallet can authorize transactions.  Here's a general overview of the process: 1.  Derive the keypair: Convert your mnemonic phrase into an Ed25519 keypair, which includes a public key and a secret (private) key. The public key is typically stored in the contract, while the secret key is used to sign messages. 2.  Build the signed data: Construct the message data you want to send. This often includes fields like seqno (a counter for replay protection) and validUntil (a timestamp for message expiration). 3.  Create the signature: Sign the hash of the built message data using your private key. 4.  Build the message body: Assemble the final message body, which will include the signature and the signed data. This message is then sent to the blockchain.  Wallets on TON use the Ed25519 signature scheme. The private and public keys are generated outside the blockchain. When an external message is sent to a contract, it contains a signature and the payload. The contract then verifies that the provided signature matches the hash of the message using the public key stored within the contract. This mechanism ensures ownership verification and prevents unauthorized messages.  Source: Signing messages - TON Docs (reply to 176653)
