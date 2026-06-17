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

— 2026-03-10 —

נְתַנְאֵל: Hello everyone i just want to ask smtn does tetrachain layer2 project on ton will be integrated with ton soon?

None: wtf. is TON API doing well?  cannot `POST /blockchain/message`: HttpProvider is not connected (https://tonapi.io/v2)

Alina: Is Toncenter’s new Streaming API V2 available for general public?

TON Support: TON Center API v2 provides developer access to the TON blockchain through REST and JSON-RPC endpoints. It allows applications to read blockchain data, run smart contract methods, and send transactions.  You can access API v2 either through hosted infrastructure managed by TON Center or by running a self-hosted instance. For hosted access, requests without an API key are limited to 1 request per second. To increase this limit or access private liteservers, you need to generate an API key and choose a plan.  To obtain an API key, you can use the official Telegram bot @toncenter. The bot offers different subscription plans:    Free: 10 requests/sec, 1 token per network    Plus: 25 requests/sec, 3 tokens per network (2.5 TON/month)    Advanced: 100 requests/sec, 10 tokens per network (25 TON/month)    Enterprise: Tailored rate limits, priority support  Source: Overview, API authentication, Get your TON Center API key (reply to 176787)

Haracter: Who knows how to convert smart contracts to blockchain? There's already a ready-made FC-format contract.

TON Support: You can convert a FunC project to Tolk using the FunC-to-Tolk converter by running npx @ton/convert-func-to-tolk contracts. This tool helps in migrating contracts to Tolk by rewriting FunC code with one-to-one semantics, emitting a Tolk version that is close to the original FunC.  Source: FunC-to-Tolk converter - TON Docs (reply to 176789)

Mirka: You want to deploy it? (reply to 176789)

Haracter: Ye one sec (reply to 176791)

Mirka: Compile it (for example using https://github.com/ton-org/blueprint) and then send a special deploy transaction (reply to 176792)

Mirka: @tondev And you have dm for stars (reply to 176796)

Haracter: Oh, I thought you speak Russian, sorry, in sec I will message you (reply to 176799)

Engr.: Hello, everyone. I'm actually here to expose a high level scam happening on the TON network/blockchain. I'd like to know if it is permitted here? Else, how do I send the details the TON foundation?  Kindly advice me

Seva A.: Hello, you can report on the actual user using Telegram built-in corresponding feature, as well state the problem in the field-specific communities, if possible, solve the issue legally. Scammer's, spammer's and lammer's culture is quite controversial, that can really become a bad, sorry for you to have met such things, friendly environment is never-the-less a priority. If you can punish an intruder, burglar or fraudster, you are most-likely right in your intentions.

— 2026-03-11 —

Anthony: 💎 TON AI Agent Hackathon is here!   $20,000. Two tracks. Two weeks.  Track 1: Agent Infrastructure ($10K) Build tooling and primitives that help power the next generation of AI applications on TON. This can include wallet integrations, agent coordination, payment flows, developer tools, and other core infrastructure.  Track 2: User facing Agents ($10K) Build AI agents that users can interact with directly inside Telegram. This can include commerce agents, payment bots, assistants, trading tools, automation products, and other practical AI-powered experiences. These agents can be both user-facing products and part of agent-to-agent interactions on TON, including payments, coordination, and trust.  This is a much bigger shift than just one hackathon.  A new stack is emerging • Telegram is the interaction and distribution layer • AI is the execution engine. • TON is the payments, agent-to-agent, and trust layer.  BotFather MAU grew from 3.5M to 7.4M after AI agents started taking off on Telegram. Developers are already moving. Now it’s time to join the best builders on TON.  📆 Hackathon dates: March 11-25  🧠 MCP Docs 💎 For more information and registration click here  Gateway|TON Community | TON Builders | TON Hubs |X | YouTube | LinkedIn TON.org (forwarded from TON Dev News)

— 2026-03-12 —

testertesterov: I found an SDK for integrating with Cocoon, but I'm not sure if it can be trusted. Is there any news on integration?

Slava: can u please share a link? you mean https://github.com/CocoonIO/cocoon-cloud-sdk? (reply to 176889)

testertesterov: https://github.com/TelegramMessenger/cocoon/issues/25#issuecomment-3941737341 (reply to 176893)

Commander: hi,does anyone know the best way to handle payout for stars with script?

Engr.: Security Alert – Possible TON ecosystem scam  A Telegram investment/staking group has been collecting TON from victims under false promises of returns and refunds.  Evidence shows victim funds being aggregated and transferred to exchange-associated wallets.  Aggregation wallet: https://tonscan.org/address/UQBhiYnvLoNeorG3d0JcwGSoXdIpnEzN3iSFjAeWYoTRzRew  Example transaction to exchange custody: https://tonscan.org/tx/3fbf7b20dd88d9ffda8acdbf3e0fc328256b626d6ba540d04334b0479492d26f  Amount transferred: 1,639.0729 TON  Victim collection wallet: https://tonscan.org/address/UQAfjKzMv9O077ndaKoPGFjC6bS89LYYyP25A9YXDZSCDzL9  Funds appear to move through aggregation wallets and into exchange infrastructure.  Estimated victims: 1000+  The operators have recently resurfaced claiming to launch a “migration portal”, which may indicate a second-stage scam attempt targeting previous victims.  Reports have already been submitted to law enforcement and exchange compliance.  Requesting TON ecosystem review and awareness to help prevent further losses.

Engr.: TELEGRAM SCAM GROUP                         │                         │                         ▼               Victims send TON payments          (multiple unrelated victim wallets)                         │                         │                         ▼         Victim Collection Wallet (Initial Pool) UQAfjKzMv9O077ndaKoPGFjC6bS89LYYyP25A9YXDZSCDzL9 https://tonscan.org/address/UQAfjKzMv9O077ndaKoPGFjC6bS89LYYyP25A9YXDZSCDzL9                         │                         │                         ▼             Scam Aggregation Wallet UQBhiYnvLoNeorG3d0JcwGSoXdIpnEzN3iSFjAeWYoTRzRew https://tonscan.org/address/UQBhiYnvLoNeorG3d0JcwGSoXdIpnEzN3iSFjAeWYoTRzRew                         │                         │                         ▼             Transfer to Exchange Wallet UQBX63RAdgShn34EAFMV73Cut7Z15lUZd1hnVva68SEl7pGn https://tonscan.org/address/UQBX63RAdgShn34EAFMV73Cut7Z15lUZd1hnVva68SEl7pGn                         │                         │                         ▼               Off-Ramp / Asset Liquidation                    (Exchange custody)  Example confirmed transaction:  3fbf7b20dd88d9ffda8acdbf3e0fc328256b626d6ba540d04334b0479492d26f   Amount: 1,639.0729 TON https://tonscan.org/tx/3fbf7b20dd88d9ffda8acdbf3e0fc328256b626d6ba540d04334b0479492d26f (reply to 176909)

Bridget: Hi! What group is that? Have the messages been reported via "Report" yet? (reply to 176910)

Engr.: Ive done all that. But it obvious that Telegram hasn't done anything about them. I wish I could send sc here for all to see.  What other steps can I take? (reply to 176916)

Bridget: I have already reported to the tonscan team, you can also push a pr directly on tonscan github, the scam yaml https://github.com/catchain/address-book (reply to 176922)

Modesayo: Report to exchanges (reply to 176922)

Engr.: I already reported to MEXC and they're willing to cooperate. But they insist that a Law enforcement agency must contact them. Unfortunately, I've been sending messages to the ones in my jurisdiction. They've not responded until today. (reply to 176924)

Modesayo: That's the difficult thing (reply to 176925)

Anthony: Share links for groups please (reply to 176922)

Engr.: That's why they've continued without restrictions. (reply to 176926)

Engr.: https://t.me/StakersRhizaAlpha https://t.me/StakersRhizaAlphaForum  They have deleted previous channels and groups. But I have all the details saved (reply to 176927)

Anthony: Thanks

Engr.: For the records, this scam activity began February 5, 2025. I personally lost 100 Ton after staking. I'll make a detailed report for clarity (reply to 176929)

Modesayo: Wish they were like binance (reply to 176928)

Modesayo: Binance will freeze acc first ask questions later

Engr.: I actually contacted binance cos some of the assets from the scam wallet touched binance exchange but not directly from the scam wallet directly.  Binance wanted a situation where the receiving scam wallet sent ton directly to binance. (reply to 176934)

Modesayo: Yh (reply to 176936)

— 2026-03-13 —

Anthony: Banned (reply to 176929)

Engr.: Wow! This is good news....thank you (reply to 176965)

Engr.: https://t.me/tonstake_it @Tonstak3it_bot @tonstakeitbot @AiBoss2026 one of their admins   These are the ones they started with. You can check them out. (reply to 176965)

XY: Hello

XY: I'm in trouble. I can't put my username on the blockchain. Can an administrator teach me

Anthony: 💎 Blockchain Contest, Round 2  Telegram and TON Core announce a new bug bounty contest!  Prize Fund: Up to $100,000 Deadline: 23:59, March 27 (Dubai time) Task: Analyze TON’s new consensus algorithm for potential vulnerabilities.   Reports on other validator bugs are also welcome, but consensus-related issues remain the top priority.  Prize Fund Distribution The total prize fund, up to $100,000, will be allocated based on each participant's overall contribution.  Guidelines and Submissions For detailed instructions, contest rules, and submission guidelines, refer to this document.  Additional Opportunities Winners may have the chance to join the Telegram or TON Core teams. (forwarded from Telegram Contests)

— 2026-03-14 —

Engr.: TON Cryptocurrency Scam – Evidence Summary Packet  Prepared by: Sam Kanu Estimated victims: 1000+ Jurisdiction: Nigeria Status: Report submitted to law enforcement and exchange compliance teams  ---  1. Executive Summary  This document summarizes evidence of a suspected cryptocurrency fraud conducted through Telegram groups targeting users of the TON blockchain.  Victims were persuaded to send TON cryptocurrency under the promise of staking rewards, investment growth, and refunds. After collecting funds, the operators blocked users, deleted communications, and later resurfaced with claims of launching a "migration portal" and new wallet infrastructure.  Blockchain analysis indicates that victim funds were aggregated into central wallets and later transferred to exchange infrastructure.  The pattern is consistent with known cryptocurrency fraud typologies involving coordinated collection and off-ramping of stolen assets.  ---  2. Telegram Scam Infrastructure  Telegram groups and channels were used to recruit victims and promote the investment scheme.  Observed behavior:  • Promotion of TON staking or investment opportunities • Instructions to transfer TON directly to project wallets • Deletion of victim complaints • Blocking of users requesting refunds • Recent "migration portal" announcement suggesting a second-stage scam  These communication channels have since been banned by Telegram following reports.  ---  3. Blockchain Evidence  Victim Collection Wallet  https://tonscan.org/address/UQAfjKzMv9O077ndaKoPGFjC6bS89LYYyP25A9YXDZSCDzL9  Observed behavior: • Multiple unrelated deposits from different users • Appears to act as initial pool for victim funds  ---  Scam Aggregation Wallet  https://tonscan.org/address/UQBhiYnvLoNeorG3d0JcwGSoXdIpnEzN3iSFjAeWYoTRzRew  Observed behavior:  • Receives transfers from the victim collection wallet • Periodic large outgoing transactions • Functions as the central aggregation hub for the scheme  ---  Exchange-Associated Wallet  https://tonscan.org/address/UQBX63RAdgShn34EAFMV73Cut7Z15lUZd1hnVva68SEl7pGn  Observed behavior:  • High transaction volume typical of exchange deposit wallets • Receives large transfers from the aggregation wallet  ---  4. Confirmed Transaction Evidence  Transaction Hash:  3fbf7b20dd88d9ffda8acdbf3e0fc328256b626d6ba540d04334b0479492d26f  Explorer:  https://tonscan.org/tx/3fbf7b20dd88d9ffda8acdbf3e0fc328256b626d6ba540d04334b0479492d26f  Amount Transferred:  1,639.0729 TON  This transaction demonstrates the movement of funds from scam infrastructure into exchange custody.  ---  5. Transaction Flow Pattern  Observed blockchain pattern:  Victim wallets → Victim collection wallet → Scam aggregation wallet → Exchange deposit wallet → Asset liquidation  This pattern is commonly observed in cryptocurrency fraud schemes.  ---  6. Chronological Timeline  Phase 1 – Telegram investment groups launched promoting TON staking.  Phase 2 – Victims instructed to send TON to project wallets.  Phase 3 – Victim deposits aggregated into central wallet.  Phase 4 – Funds transferred to exchange infrastructure.  Phase 5 – Telegram groups deleted and victims blocked.  Phase 6 – Operators resurfaced claiming a migration portal and new wallet launch.  ---  7. Risk to the TON Ecosystem  The re-emergence of the operators suggests the possibility of a second-stage scam targeting existing victims through:  • fake migration portals • wallet connection requests • additional deposit requests  Without intervention, additional users may be targeted.  ---  8. Requested Actions  Review and flag the identified wallets as suspected scam infrastructure.  Possible ecosystem actions:  • Flag addresses in blockchain explorers • Warn wallet providers and users • Notify exchanges interacting with the wallets • Assist investigators tracing the transactions  ---  9. Additional Evidence Available  Further supporting materials are available upon request:  • screenshots of Telegram scam messages • victim transaction list • scam network diagram • wallet cluster analysis  ---  End of Report

Bohdan: Good. But it will not help. There are still will be people who believe in quick money and put their funds into such projects believing they can invest $10 and get $1000000 in one month (reply to 176994)

Engr.: Everything looked legit until they failed on their promise. What they promised was just a daily interest of 1%. Nothing fishy. Days passed. Weeks, months and nothing good came out of it (reply to 176996)

DeFi: Nothing fishy?!? They offered 365% interest per year and you didn't think that was fishy? LOL (reply to 176997)

DeFi: How would a staking system even be able to offer that? This was obvious fraud from the start and you should have known better. No one is going to recover your funds. It's better to just move on. There are 1000s of scams on TON and all other blockchains as well.

Bohdan: They will spend more money on investigation and still get nothing (reply to 176999)

DeFi: Yep, 100%. It also looks like they only got like $6-7K out of this scam, so no "authorities" are going to care about it either. The entire write up was pointless. (reply to 177000)

Engr.: No, that wasn't the calculation. But that doesn't matter now. (reply to 176998)

DeFi: You said 1% per day. How many days are in a year? (reply to 177002)

Engr.: It was supposed to be for a day. Not 1 year (reply to 177003)

DeFi: This doesn't even make any sense. Clearly you need to get better at doing your own research and understanding crypto before you put your money into something next time. (reply to 177004)

Engr.: Right (reply to 177005)

Bohdan: How much did you lose if not a secret? (reply to 177006)

jizzy019: I have a problem with U tagging it Nigeria. that is a low.  scam perpetrated by anybody on the internet (reply to 176994)

Engr.: This stuff isn't about me (1 individual). Over 1500 persons were scammed on Telegram, using scam staking platform on the TON blockchain.  Scan the scam wallet, you'll have a clue what was lost to the scammers (reply to 177007)

Engr.: Well, one of the admins who was chatting me had his number revealed. I have a screenshot (reply to 177015)

DeFi: I think he means HE is from Nigeria, in all fairness (reply to 177015)

DeFi: you realize that is probably a Telegram number, right? You can buy Telegram privacy numbers (reply to 177019)

DeFi: and no one is going to assign detectives to investigate this case with such a low amount of money being scammed

jizzy019: no. check his chat. he tg the scam as Nigeria. that is not acceptable. (reply to 177020)

DeFi: I saw his chat. He is the one in Nigeria. The scammer might be too, but who cares? Tons of scams originate from Nigeria, let's not pretend otherwise. (reply to 177023)

Bohdan: I see 99% spent 1 ton. So not a big price for the lesson to learn (reply to 177018)

DeFi: Yea, exactly, lol. This is why no "authorities" will get involved. (reply to 177025)

Engr.: You're wrong, bro. Scan that wallet and see for yourself. Tha scam wallet received thousands of ton in a single day. Check from the February 6, 2025 (reply to 177025)

DeFi: You need to let it go, man. You have no practical recourse. (reply to 177028)

Engr.: It's gone. But someone had to stop them from scamming others. (reply to 177029)

DeFi: You can't stop that. This chain is full of scams. All chains are. This chain seems like it has a lot more because scams are a larger portion of overall transactions, but nothing you can do is going to stop that. Scams are everywhere. (reply to 177031)

Slava: This chat is for discussing TON technology and development, please refrain from non-relevant topics.

miko: I want a test tone (reply to 177055)

miko: Testnet account

miko: 0QD-9Bq4DsX3C-iSGlgYpZ3ef5Z1vOX8aEoKAnUXs2SfunGi

Teemu | 機器人🪽: Good luck with that

— 2026-03-15 —

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: Sent u a few ones   If you need more you can buy TON(testnet) on tonconsole /faucet or get a few free TON on @testgiver_ton_bot (reply to 177071)

miko: Thank you, brother (reply to 177094)

miko: /faucet

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: tonconsole.com/faucet I mean (reply to 177098)

emirdeveloper: The TON ecosystem should remove MEV bots and eliminate unnecessary tokens. MEV bots are hindering the growth of new projects. Even when slippage is as low as 1%, these bots are still able to execute transactions and exploit users. The network must take action to detect and remove these bots to ensure a healthier and fairer environment for all participants.

leo🦴: /faucet

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: It’s difficult to do anything; the market is free by design, it’s not a bug. anyone can buy and sell whenever they want, under whatever conditions they want.   Instead of restricting its use, I think we should educate for awareness and build anti-MEV (reply to 177100)

&rey: You might be interested in the upcoming Subsecond Upgrade, which effectively shortens the window for any race of transactions.  On the other hand, "removing MEV bots" and "eliminating unnecessary(???) tokens" are impossible in The Open Network. (reply to 177100)

ㅤㅤㅤ: Hey everyone,   I'm trying to run the Cocoon client-runner from source on Kali Linux. I managed to compile everything and get past the initial config parsing and zero_state mismatch errors (cleared the local db cache and used the official cocoon-launch script with a clean INI config).   However, I'm currently completely stuck at the synchronization phase. The client keeps looping through liteservers, force-resetting them, and throwing the following errors: - [Error : 500 : LITE_SERVER_NETWORK(during last block synchronization)] - [PosixError : Connection reset by peer : 104] - [Error : 652 : timeout for adnl query]  It seems like none of the liteservers from the default global.config.json are responding, or they are dropping the ADNL connections.   Has anyone successfully synced the client recently? Are there any working/alternative liteserver configs available, or is this a known network overload issue?   Thanks in advance!

sarah: Hi friends

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: Hello, I built a lite client to connect to cocoon and yes I sync the client without problem (reply to 177136)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: https://github.com/TONresistor/cocoon-lite-client

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: Basically, I just extracted the client and built commands on top of it.   I also made a web UI not yet released. I’ll push it to the remote soon.

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: To summarize the flow about how Cocoon works, you need to generate a Cocoon wallet, fund it, run the client, it will automatically “stake” the funds to cocoon smc, then established a connection to a Cocoon proxy and you’re ready.   However there is no documentation and it’s not totally clear on how it’s works (any infos? Share it pls) (reply to 177136)

ㅤㅤㅤ: Thanks a lot for the detailed explanation! > I've already funded my Cocoon wallet, but I'm currently stuck getting the proxy connection to work. I figured that with the network just launching and so many users trying to connect at once, the GPU workers might be overloaded, resulting in those Connection refused errors. (reply to 177143)

sarah: Hello everyone

ㅤㅤㅤ: I will definitely clone your repo and try your lite-client out right now. Thanks for sharing this! (reply to 177153)

∆lieπ FlΦw: Can help with our integraciones in ton? For Ai Tor and miniapp? (reply to 177143)

— 2026-03-16 —

Marsina: does anyone know if the Subsecond upgrade will be done this year?

Anthony: Yes (reply to 177167)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: Hey! How could I help you? (reply to 177162)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: From TON Center API about cocoon :   Cocoon AI smart contract actions are now supported  Starting with v1.2.6, the Toncenter Indexer supports the following Cocoon AI smart contract actions along with their decoded message bodies:  • cocoon_worker_payout  • cocoon_proxy_payout  • cocoon_proxy_charge  • cocoon_client_top_up  • cocoon_register_proxy  • cocoon_unregister_proxy  • cocoon_client_register  • cocoon_client_change_secret_hash  • cocoon_client_request_refund  • cocoon_grant_refund  • cocoon_client_increase_stake  • cocoon_client_withdraw  Use https://toncenter.com/api/v3/index.html#/actions with supported_action_types=latest.

&rey: Please use English to communicate in this chat.

Anthony: Sure, there a lot of ways @ai_dev_wall (reply to 177204)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: Hey! I build Teleton Agent, they controls their own Telegram account with native TON integration, with + 100 TON & Telegram tools built in. Maybe you’ll like it   https://github.com/TONresistor/teleton-agent  Guide : https://telegra.ph/Deploy-Your-Teleton-Agent-03-03 (reply to 177204)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: I created a tonsite to share skills related to TON for ai agents   tonsite://skills.ton  Also, what do yall think about making a community repository of awesome skills on TON?

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: And while I’m at it, I also created a forum for AI agents to test x402 TON integration for posting threads and replies (0.01-0.05ton) if anyone wants to test  tonsite://boards.ton

— 2026-03-17 —

Daniil: as far as I know, user-bots aren't clearly allowed by telegram and can result an account deletion (reply to 177207)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: Telegram prohibits spam and abuse, not third-party clients; MTproto is intentionally open, what is prohibited is its misuse. so far I have no problems of frozen / banned / limited accounts, nor affected by FloodWait (reply to 177250)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: The only grey zone might be the treatment of messages for LLM context in public group chat

MCE/24/2354: Solana is already subsecond but front running and sandwiches are rampant. (reply to 177116)

Code: this is an ill-informed message, name a single chain where there is no MEV?  Also you can protect against MEV on solana it just costs more  MEV is NOTHING to do with chain latency or blocktimes - e.g. Bitcoin has extremely slow blcks (like every 30 minutes) and is full of MEV (reply to 177253)

MCE/24/2354: Yes.  Did I claim otherwise? Obviously whoever controls ordering can extract value. (reply to 177257)

MCE/24/2354: I'm just clarifying that shortening the window doesn't do much if validators have better info and control ordering.

MCE/24/2354: Protecting your txns against MEV by paying more via block builders is extracting MEV. It's just less aggressive and predictable. (reply to 177257)

Tim: The difference is that in ton you can only change order of external messages. Internal messages order is idempotent. So you need to brute force mine some hashes to achieve better internal message ordering.  Changing time from user clicking send button to including message on chain from 3 seconds to 200 milliseconds makes cost of hash attack much higher (reply to 177253)

Tim: But not impossible of course

MCE/24/2354: That's really elegant. (reply to 177270)

Алексей: #jobopening #softwaredeveloper #web3 #fullstack #remote  Job Opening: Web3 Software Developer Company: Lagrange Labs Salary Range: $5,000 to $7,000 Work Arrangement: Remote, Full-time  Responsibilities: — Developing complex decentralized applications (dApps) integrated with Lagrange ZK coprocessors. — Writing “bridge” code between smart contracts and user interfaces. — Implementing blockchain interaction logic on the client and server sides. — Working on developer tools (SDK, CLI) that simplify the use of Lagrange technologies. — Participating in the full development cycle: from architecture design to deployment and monitoring.  Requirements: — 3+ years of software development experience. — Excellent knowledge of TypeScript and experience with modern frameworks (React/Next.js). — Proficiency with Web3 tools: Hardhat/Foundry, Viem/Ethers. — Basic experience writing smart contracts in Solidity. — Ability to understand third-party code and quickly master new libraries and protocols.  Contact: @artem_kul99

— 2026-03-18 —

∆lieπ FlΦw: Whats your speciality? (reply to 177172)

— 2026-03-19 —

Bryan: Hi, everyone. I am hoping to link up with some builders to talk about some ideas

Tony: Hi, I'm new here

Tony: Is it possible to buy non-NFT with TON? I'd like to know what TON coin can do now

Tony: I'm newbie of TON dev. Just bought my first TON domain yesterday. Wanna dive deep into the capability of TON

TON Support: Toncoin can be used for several purposes beyond just NFTs. Here's what you can do with Toncoin:     Payments: Businesses can accept TON and Jettons (tokens on TON) as payment for goods and services. There are payment processing systems that allow for invoice-based deposits and unique deposit addresses. The TON Pay SDK helps developers integrate these payment options into web applications, Telegram Mini Apps, bots, and backend services. This means you can use Toncoin to buy non-NFT items from merchants who support TON payments.    Staking: You can lock Toncoin to earn rewards and contribute to the network's security. Options include liquid staking (with a minimum of approximately 1 TON), single nominator pools (requiring over 300,000 TON), and various third-party staking providers.    Gas fees: Toncoin is used to pay for transaction fees and the execution of smart contracts on the TON network.    DeFi: Liquid staking tokens, such as tsTON, can be utilized within various decentralized finance (DeFi) protocols.  Source: Payment processing overview, TON Pay SDK overview, Staking overview (reply to 177351)

Bryan: To clarify, I'm not a dev of any kind. I can't code. I couldn't even use A.I. to build an app.   I do, however, want to talk to a builder about a.possible mini app (reply to 177349)

Tony: May I ask why you couldn't use AI? it supports natural language (reply to 177354)

Tony: Have you tried Replit for prototype? It's so good

Tony: I use it to create a prototype with a few words describing what I want this morning https://ton-domain-finder--tonyqus.replit.app/

∆lieπ FlΦw: Hi can help with ton development?

L30n1d: Sure, what's up? (reply to 177367)

Bryan: I really don't know anything about building/programming. I could use AI but I wouldn't know how to explain how to build and edit the app. Knowing the jargon is part of one's ability to explain.   Either way,  I want to talk with a dev about the steps I should take to make this app happen (reply to 177355)

Tony: Sounds reasonable. There are not many Claude skills for TON development. That can be a gap of AI. ETH/SOL development is more popular

Lilac: I have a question guys, I am not a Dev, but I want to do my telegram mini app right. Pls is it advisable to start the token integration process as soon as you start coding the mini app or you wait till it gets traction

&rey: This chat is relevant for the aspect of how to write code for the jetton so that it has all the functions you want, it will not provide a ready business plan. (reply to 177379)

Lilac: This is not me asking for a business plan Just advice (reply to 177380)

&rey: Many applications can handle TON itself and not some jetton which is not compatible with any other app, I'd say.

Michaelzy: hey guys can i now integrate ton pay directly in my app for ton/crypto payments.

— 2026-03-20 —

Slava: the best starting point is the TON Pay overview in docs https://docs.ton.org/payments/overview (reply to 177407)

sarah: Hi friends

Michaelzy: thank you. but previously we were only allowed to have only stars payment in our mini app. I'm asking if the launch of ton pay now means we can also have ton payment directly in the mini app via the use of ton pay (reply to 177419)

Slava: TON Pay does not change Telegram’s platform payment rules. for in-app digital purchases inside tg, stars are still the required payment method   https://core.telegram.org/bots/payments-stars?utm_source=chatgpt.com (reply to 177427)

Michaelzy: ok thank you very much (reply to 177428)

Andrey: I did it like this: For every transaction, I created an escrow smart contract payment (it is created by the buyer, but I control it) to ensure I received the exact amount in TON and limited it to 5 minutes timewise. (reply to 177407)

Michaelzy: ok makes sense. But then do you handle wallet pop up and build the transaction payload for the user to confirm in his wallet. Or do you simply display the contract address to the user and ask user to pay to it? (reply to 177432)

Andrey: I pass the code and initialization data to the buyer. (reply to 177433)

Andrey: My escrow contract can: accept a payment, refund, make a partial refund,  and also store the transaction status. The transaction identifier is the smart contract address. (reply to 177433)

Michaelzy: okay i understand. Thank you (reply to 177435)

Andrey: This approach is good if you need to have two phases for the purchase.

Michaelzy: yeh i think i'll use this approach. Is your contract open source lol? been months since i wrote tact (reply to 177437)

Andrey: I wrote it in Tolk. The code is closed source. (reply to 177440)

Andrey: There's another idea — a bridge smart contract. The idea is this: Attach signed data to each incoming payment. In the smart contract, verify the signature and extract the expected amount in TON and the timeout. Check against that and forward further. If it doesn't pass the check, bounce it back. (reply to 177440)

Andrey: This is if you don't need two phases for the purchase.

Michaelzy: okay i'll consider this as well thanks

Dave: Hello Devs!

Anthony: TON Rust Node is now public.  RSquad has open-sourced an alternative implementation of a TON node written in Rust and designed for containerized environments.  The project is currently in public beta. The repository includes the node source code, Helm charts, Grafana dashboards, and operational tooling.  Repository Docs (forwarded from TON Dev News)

— 2026-03-21 —

sarah: SOL

Ammar: What are the best hosting options for Telegram bots?

Marsina: aws (reply to 177508)

Ammar: When link (reply to 177509)

Celestial Being: We undertake full-stack development projects. Feel free to contact us for any requirements.

Ammar: Free (reply to 177509)

Celestial Being: Hey streaming app promoters:  Anyone running promo for Android subscription apps (all-in-one movies/TV shows, like aggregated Netflix/Disney content) to English/global TG users?  Got a solid app that's performing strong locally (high renewals  $20-30 per sale tiered higher volume), now scaling overseas. What channels/strategies are working best right now?  Thanks for any tips!

∆lieπ FlΦw: Estamos mejorando el bot y nuestra miniapp de Telegram (reply to 177370)

L30n1d: And what help do you need? (reply to 177534)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: TON Network is multi-chain.  TON Sites already let you host dynamic websites over ADNL, a .ton domain resolves to a cryptographic address, and traffic is routed p2p with native encryption.  I realized that by adding a few lines of code to the TON Proxy, you could resolve not just .ton domains, but .eth, .sol, .bnb, .btc, .crypto, almost any blockchain's naming system. ADNL doesn't verify which chain an address was registered on. It just routes packets between crypto addresses.   The result:  So I tested it. .eth & .sol websites served through TON's ADNL network. Not IPFS pages. Real websites with backends. served P2P via TON.   Why this matters: Every blockchain built a domain name system (ENS, SNS, BNS...). None of them built the infrastructure to actually serve websites through those domains. TON did, with ADNL, RLDP and potentially with garlic routing.  One proxy. Every blockchain. Same decentralized web.  How it works : The DNS owner stores an ADNL address in their blockchain's DNS record (ENS text record, SNS name registry data, BNS zone file TXT, etc.). The reverse proxy doesn't care which blockchain the domain was registered on, so it just accepts any ADNL connection and forwards to your HTTP backend. Same binary, same config, whether it's a .ton, .sol, or .eth domain.  About the proxy client, it just needs a resolver for each chain. a single file that reads the ADNL address from the chain's RPC. The rest of the pipeline (ADNL connection, RLDP transport) is the same for every chain. Zero changes to the TON network itself.  The vision ?  why not building an open-source ADNL Proxy and Reverse Proxy as the Universal Standard for the Decentralized Web ? Any blockchain can plug in by adding a resolver for their naming system. one file, one PR. TON can rule them all.  TON isn't just a blockchain. It's the web layer for all of web3.  What do you think ? Your opinion matters, feel free to share it.

Marsina: I was just thinking, TON could easily support options trading after the sub-second upgrade. someone smarter than me should take this on

— 2026-03-22 —

∆lieπ FlΦw: Primero introducir nuestra IA y los agentes de ton al bot de Telegram y completar la miniapp porque no funciona la Wallet ahora sí antes estaba funcionando (reply to 177536)

testertesterov: Hello  ... "dependencies": {     "@ton/mcp": "^0.1.13",     "@ton/walletkit": "0.0.10"   }, ...  npm install && npm run build && npm pack  Result: npm error code E404 npm error 404 Not Found - GET https://github.com/ton-connect/bridge-sdk/releases/download/v0.2.6/tonconnect-bridge-sdk-0.2.6.tgz npm error 404 npm error 404  '@tonconnect/bridge-sdk@https://github.com/ton-connect/bridge-sdk/releases/download/v0.2.6/tonconnect-bridge-sdk-0.2.6.tgz' is not in this registry.

testertesterov: It's already working now. Thanks everyone.

∆lieπ FlΦw: Anybody can help build in ton? We got our ai agent and miniapp

Đức ▪️: I have a TON address in uninit status when I sent some USDT from v5r1 wallet to it and now I can't access that address can you help me get the balance back

TON Support: When an account is in uninit status, it means it has a balance but no code deployed on it yet. You can restore an uninit account by paying off any storage debt and attaching state_init.  If the account code and its persistent data have not changed, it's possible to restore it. However, if they have changed, the last state might be lost. The frozen status, unlike uninit, stores the hash of the last account state, allowing for restoration to that state.  To deploy the code to an uninit address, you typically send any transaction from the wallet to that address. This can be a transaction to any address, including the wallet itself, with some amount of TON.  It is critical to verify the recipient and amount for on-chain transfers, as they are irreversible. If you're experimenting, use the testnet.  Source: Account status - TON Docs (reply to 177613)

Đức ▪️: I sent TON to that address but still can't initialize

TON Support: An account in uninit status means it has a balance but no code deployed on it. To initialize it, the code must be provided in the init field of the incoming message. Sending just TON to the address will move it to an uninit status if it was previously nonexist, but it won't deploy the code unless the state_init is also included in the message.  Outbound external messages cannot initialize any contract.  It's important to note that wallets in TON are smart contracts. You should not send funds to a wallet address that you cannot initialize. Addresses are derived deterministically based on the contract's initial state.  Source: Initialization - TON Docs (reply to 177615)

&rey: So does it have balance of at least 0.1 TON (regardless of amount of USDT) now? You can see that in an explorer. (reply to 177615)

— 2026-03-23 —

Andrey: TON pay  does this work now?

Andrey: https://tonpay.tech/dashboard

king: Hi! I'm looking for a freelance developer to build a 1vs1 skill-gaming platform. Technical Stack: • Smart Contracts: TON Blockchain (Tact/FunC). • Frontend: Telegram Mini App (TMA). • Payments: Native USDT integration on TON (Single currency system). Key Requirements: • Implementation of a secure Escrow system for match stakes. • Basic dispute resolution logic. • Clean and fast UI inside Telegram. We are looking for a lean MVP to validate the core wagering mechanic. Budget: Milestone-based (payment upon delivery of each phase). DM me with your GitHub and any TON Smart Contracts you’ve personally deployed. Individual freelancers only, no agencies.

E²: Hi, DM me (reply to 177679)

— 2026-03-24 —

Lilac: Pls is there a reason why you don't want agencies ?   Cost or what ?? (reply to 177679)

Alex |: Thanks for your question! 🤝  Here is the latest TON Pay documentation: https://docs.ton.org/ecosystem/ton-pay  The dashboard is currently in beta and not yet available for public use. We will share an update once it is released. (reply to 177676)

&: DM me (reply to 177679)

— 2026-03-25 —

Anthony: Sub-second finality: how to adapt your project  TON is rolling out Catchain 2.0, a consensus upgrade targeting sub-second block finality on mainnet in early April 2026.  What's changing: – Block interval: ~2.5s → 200–400ms – Finalization lag: ~10s → ~1s – Throughput: up to ~5 blocks/sec  But a faster chain alone won't help users if apps still rely on old API.  We've published a step-by-step adoption guide covering:  🔹 Wallets & dApps: switch to TON Center Streaming API v2. Handle all four statuses: pending → confirmed → finalized → trace_invalidated.  🔹 Self-hosted nodes & liteservers: update to the latest release with Catchain 2.0 support before mainnet activation.  🔹 Indexers: prepare for up to 10x more blocks/sec. Connect to testnet and verify no lag accumulates over 30+ minutes.  Testnet already runs at sub-second speed. Test there now.  MyTonWallet and tonscan.org already use Streaming API and have nearly halved their reaction time, even before the mainnet upgrade.  📖 Full guide: How to adopt sub-second finality  Start adapting today. If your app isn't ready, users won't notice any improvement. (forwarded from TON Dev News)

Đức ▪️: I transferred usdt to an uninitialized address now I'm stuck in uninit state despite transferring more tons to that address. Please help me restore that address

TON Support: You can restore an account from an "uninit" state by paying off any debt and attaching state_init. If the account's code and persistent data haven't changed, restoration from "uninit" is straightforward. However, if they have changed, the last state of the account will be lost because the "uninit" status doesn't store historical information.  Source: Account status - TON Docs (reply to 177804)

Đức ▪️: Hãy chỉ tôi chi tiết hơn được không . Tôi là người mới tham gia blockchain (reply to 177805)

TON Support: Để khôi phục một tài khoản từ trạng thái "uninit", bạn cần thanh toán bất kỳ khoản nợ nào và đính kèm state_init. Nếu mã tài khoản và dữ liệu cố định của nó không thay đổi, việc khôi phục sẽ đơn giản. Tuy nhiên, nếu chúng đã thay đổi, trạng thái cuối cùng của tài khoản sẽ bị mất vì trạng thái "uninit" không lưu trữ thông tin lịch sử.  Source: Account status - TON Docs (reply to 177806)

Đức ▪️: Hãy giúp tôi đây là trạng thái chi tiết của địa chỉ: account   addr:(addr_std     anycast:nothing workchain_id:0 address:x4C186A2A457A5FF2EE71CCECA563B711DB3F3004ADDDA16440FAD0C82A2EB541)   storage_stat:(storage_info     used:(storage_used       cells:(var_uint len:1 value:1)       bits:(var_uint len:1 value:103))     storage_extra:storage_extra_none last_paid:1773590863     due_payment:nothing)   storage:(account_storage last_trans_lt:67992390000004     balance:(currencies       grams:(nanograms         amount:(var_uint len:4 value:752326018))       other:(extra_currencies         dict:hme_empty))     state:account_uninit)) x{C004C186A2A457A5FF2EE71CCECA563B711DB3F3004ADDDA16440FAD0C82A2EB54120259C34DB6CA780000F75AD90376110B35E56084_}

TON Support: Dựa trên chi tiết bạn cung cấp:  *   `state: account_uninit`: Điều này xác nhận rằng tài khoản của bạn đang ở trạng thái "chưa khởi tạo" (uninit). *   `balance: ... value:752326018`: Tài khoản có số dư là 752326018 nanograms (tương đương 0.752326018 TON). Điều này phù hợp với trạng thái "uninit" vì một tài khoản uninit có thể có số dư dương. *   `used: cells:(var_uint len:1 value:1) bits:(var_uint len:1 value:103)`: Tài khoản này có một số dữ liệu đã được sử dụng (1 cell và 103 bits). Điều này có thể liên quan đến việc bạn đã chuyển USDT đến địa chỉ này. *   `last_paid:1773590863`: Lần cuối cùng phí lưu trữ được thanh toán là vào thời điểm này. *   `due_payment:nothing`: Hiện tại không có khoản thanh toán đến hạn nào cho phí lưu trữ.  Giải thích về trạng thái `uninit`:  Một tài khoản `uninit` tồn tại trên blockchain và có thể có số dư (như trường hợp của bạn), nhưng nó chưa có mã (code) hoặc dữ liệu (data) được triển khai. Điều này có nghĩa là nó chưa phải là một hợp đồng thông minh hoạt động đầy đủ. Trạng thái `uninit` thường xảy ra khi:  1.  Một số TON được chuyển vào một địa chỉ chưa tồn tại. 2.  Tài khoản được chuẩn bị để triển khai một hợp đồng thông minh, và số dư được chuyển trước khi mã hợp đồng được gửi đến.  Để khôi phục địa chỉ của bạn:  Như đã đề cập trước đó, bạn cần:  1.  Thanh toán bất kỳ khoản nợ nào: Mặc dù `due_payment:nothing` hiện tại, hãy đảm bảo rằng tài khoản có đủ TON để thanh toán phí lưu trữ trong tương lai. 2.  Đính kèm `state_init`: Đây là bước quan trọng nhất. `state_init` chứa mã và dữ liệu ban đầu của hợp đồng thông minh. Bạn cần gửi một tin nhắn đến địa chỉ này có chứa `state_init` phù hợp với loại hợp đồng thông minh bạn muốn triển khai (ví dụ: một hợp đồng ví, hoặc một hợp đồng xử lý USDT).  Lưu ý quan trọng:  *   Nếu mã và dữ liệu ban đầu của hợp đồng (mà bạn muốn triển khai) đã thay đổi kể từ khi bạn gửi USDT, thì trạng thái cuối cùng của tài khoản sẽ bị mất. Trạng thái `uninit` không lưu giữ thông tin lịch sử. *   Nếu bạn đang cố gắng khôi phục một ví, bạn sẽ cần `state_init` của ví đó. Điều này thường được tạo ra bởi ví hoặc công cụ phát triển mà bạn đang sử dụng.  Vì bạn là người mới tham gia blockchain, việc tạo và gửi `state_init` có thể phức tạp. Bạn có thể cần sử dụng các công cụ phát triển TON (như TON CLI, SDK) hoặc một ví có hỗ trợ triển khai hợp đồng. Nếu bạn không chắc chắn về cách thực hiện, bạn nên tìm kiếm sự trợ giúp từ các nhà phát triển hoặc cộng đồng TON.  Source: [Account status - TON Docs](https://docs.ton.org/foundations/status), [Foundations of blockchain | The Open Network](https://docs.ton.org/v3/guidelines/dapps/transactions/foundations-of-blockchain), [How to create Highload Wallet v3 - TON Docs](https://docs.ton.org/standard/wallets/highload/v3/create), [How to interact with Preprocessed Wallet V2 - TON Docs](https://docs.ton.org/standard/wallets/preprocessed-v2/interact), [Start here - TON Docs](https://docs.ton.org/start-here) (reply to 177808)

Đức ▪️: Ai đó có thể hướng dẫn chi tiết cho tôi không

TON Support: Việc khôi phục một địa chỉ uninit đòi hỏi bạn phải triển khai lại hợp đồng thông minh hoặc ví mà bạn định sử dụng tại địa chỉ đó. Bởi vì bạn đã nói rằng bạn là người mới tham gia blockchain, đây là một quy trình tương đối phức tạp và yêu cầu kiến thức kỹ thuật nhất định.  Tôi không thể cung cấp hướng dẫn từng bước chi tiết để "khôi phục" một cách tự động vì:  1.  Tính chất kỹ thuật của state_init: state_init không phải là một mã đơn giản có thể sao chép và dán. Nó được tạo ra đặc biệt cho từng hợp đồng thông minh hoặc ví, bao gồm mã chương trình và dữ liệu khởi tạo. 2.  Đa dạng của hợp đồng/ví: Có rất nhiều loại hợp đồng thông minh và ví khác nhau trên TON, mỗi loại có cách tạo state_init riêng. Tôi không biết bạn đang cố gắng khôi phục loại hợp đồng nào (ví dụ: ví cá nhân, hợp đồng token, v.v.). 3.  Yêu cầu công cụ và môi trường phát triển: Để tạo và gửi state_init, bạn thường cần sử dụng các công cụ dòng lệnh (CLI), SDK của TON, hoặc môi trường phát triển (IDE) chuyên dụng.  Tuy nhiên, tôi có thể cung cấp lộ trình tổng quát và các điểm bạn cần tìm hiểu để có thể tự mình hoặc với sự giúp đỡ khôi phục địa chỉ này:  Lộ trình tổng quát:  1.  Xác định loại hợp đồng thông minh/ví:        Bạn đã gửi USDT đến địa chỉ này với mục đích gì? Đây có phải là một địa chỉ ví mà bạn đã tạo bằng một ứng dụng ví cụ thể (ví dụ: Tonkeeper, Tonhub)?        Hay bạn đang cố gắng triển khai một hợp đồng thông minh của riêng mình?        Đây là bước quan trọng nhất. Nếu bạn không biết loại hợp đồng, bạn không thể tìm `state_init` phù hợp.  2.  Tìm hoặc tạo `state_init` phù hợp:        Nếu là ví: Các ứng dụng ví thường có chức năng "khôi phục" hoặc "tái khởi tạo" một ví dựa trên cụm từ hạt giống (seed phrase) của bạn. Khi bạn khôi phục, ví sẽ tự động tạo state_init và gửi nó đến địa chỉ ví. Bạn cần đảm bảo bạn đang sử dụng cùng một loại ví (ví dụ: Wallet v3, Wallet v4) và cụm từ hạt giống chính xác.        Nếu là hợp đồng thông minh tự tạo: Bạn sẽ cần phải biên dịch lại mã hợp đồng thông minh của mình để tạo ra `state_init`. Quá trình này thường bao gồm:            Sử dụng trình biên dịch FunC (ngôn ngữ lập trình cho TON).            Sử dụng thư viện SDK của TON (ví dụ: `tonweb`, `ton-core` cho JavaScript/TypeScript) để tạo đối tượng `StateInit` từ mã biên dịch.  3.  Gửi tin nhắn chứa `state_init` đến địa chỉ:        Sau khi có state_init, bạn cần gửi một tin nhắn bên ngoài (external message) đến địa chỉ uninit của mình. Tin nhắn này phải chứa state_init như một phần của trường init trong tin nhắn.        Bạn sẽ cần một ví đang hoạt động và có đủ TON để thanh toán phí giao dịch cho việc gửi tin nhắn này.        Các công cụ như TON CLI hoặc các thư viện SDK sẽ có các chức năng để xây dựng và gửi các loại tin nhắn này.  Tóm tắt các từ khóa quan trọng bạn cần tìm hiểu:     `state_init`: Đây là thành phần cốt lõi bạn cần.    "Deploy contract TON": Cách triển khai một hợp đồng thông minh trên TON.    "TON wallet types": Các loại ví TON khác nhau (ví dụ: Wallet v3, Wallet v4) có `state_init` khác nhau.    "FunC compiler": Trình biên dịch cho ngôn ngữ hợp đồng thông minh của TON.    "TON SDK": Bộ công cụ phát triển phần mềm để tương tác với mạng TON.  Lời khuyên quan trọng:     Đừng tự ý thử nếu bạn không hiểu rõ: Việc gửi sai state_init có thể làm mất vĩnh viễn số USDT của bạn.    Tìm kiếm sự giúp đỡ từ cộng đồng: Cộng đồng TON rất năng động. Bạn có thể hỏi trong các kênh Telegram dành cho nhà phát triển TON (ví dụ: @tondev) hoặc các diễn đàn. Cung cấp chi tiết về những gì bạn đã làm và loại ví/hợp đồng bạn đang sử dụng.    Kiểm tra tài liệu chính thức: Tham khảo tài liệu chính thức của TON về cách triển khai hợp đồng và quản lý trạng thái tài khoản.  Vì tôi không thể tương tác trực tiếp với môi trường phát triển của bạn hoặc biết loại hợp đồng cụ thể mà bạn đang làm việc, tôi chỉ có thể cung cấp các nguyên tắc chung này. Nếu bạn có thể xác định chính xác loại hợp đồng thông minh hoặc ví bạn đang sử dụng, tôi có thể c...  Message truncated due to length (reply to 177810)

fade: is UQBMGGoqRXpf8u5xzOylY7cR2z8wBK3doWRA-tDIKi61QUwB a wallet address? i mean is the contract is wallet_v4r2, wallet_v5r1,.. etc? i assume you do not have the private key for that wallet, so where did you get that address from? (reply to 177810)

Đức ▪️: Tôi có 24 cụm từ khoá cho địa chỉ này nhưng các ví v4 và v5 của tôi đều không phải (reply to 177812)

fade: where did you get that address from? how did you find it? (reply to 177818)

Đức ▪️: Địa chỉ này có khi tôi kết nối với bất kỳ dapp nào trên mainnet bằng địa chỉ testnet đều có

TON Support: Khi bạn kết nối với bất kỳ dApp nào trên mainnet, bạn không thể sử dụng địa chỉ testnet. Địa chỉ Mainnet và Testnet là riêng biệt. Sử dụng địa chỉ testnet trên mainnet có thể dẫn đến mất tiền. Các ví TON được thiết kế để ngăn chặn việc gửi tiền testnet sang mainnet và ngược lại.  Nguồn: Internal address formats (reply to 177820)

Đức ▪️: Tôi kết nối bằng tonhub

fade: tell me the exact steps that you did to get the address UQBMGGoqRXpf8u5xzOylY7cR2z8wBK3doWRA-tDIKi61QUwB

Đức ▪️: Tôi tạo bằng tonkeeper không nhớ trên mainnet hay testnet sau đó tôi gửi usdt từ ví tonspace sang

TON Support: Địa chỉ ví trên Mainnet và Testnet là khác nhau. Bạn có thể tạo địa chỉ cho cả hai mạng (Mainnet và Testnet) từ cùng một cụm từ khôi phục (mnemonic), nhưng các tài khoản này chỉ tồn tại trên mạng tương ứng của chúng. Nếu bạn gửi tiền từ ví Tonspace sang địa chỉ Testnet trên mạng Mainnet, có thể dẫn đến việc mất tiền không thể phục hồi.  Để tránh mất tiền, bạn cần đảm bảo rằng mình đang gửi USDT đến đúng địa chỉ trên đúng mạng (Mainnet hoặc Testnet).  Source: Tonkeeper - TON Docs, wallet.ton.org - TON Docs, How to get coins on testnet - TON Docs, How to get Toncoin on testnet - TON Docs, How to build a transfer - TON Docs (reply to 177824)

fade: was this wallet created recently, do you remember exactly when was it created, and it was TonKeeper, not MyTonWallet, correct? (reply to 177824)

Đức ▪️: Đúng vậy tôi đã triển khai từ năm 2024 (reply to 177826)

fade: is there any chance that this wallet was created with wallet-desktop? (reply to 177827)

Đức ▪️: Tôi tạo bằng di động (reply to 177828)

&rey: A moderator warning. Use English in this chat. (reply to 177806)

— 2026-03-26 —

testertesterov: Hello   Please unblock me in the TON Security bug bounty bot. (ton_bugs_bot) There are several bugs (with playback) to check in the new consensus.

Blackstreak: Hello Everyone   A question regarding security audits, I see alot of companies who are doing security audits for various other chains like ETH/SOL.  Do we have any specific security audit organisation for TON?

Tony: Hello

Tony: Does anyone know if there is some TON-based solution for open source donation? I'm a OSS contributor for many years. I'd like to use TON to solve donation issue for open source. But I'd like to see if there is some existing project there

TON Support: While the provided documentation mentions "open-source SDKs" like WalletKit and AppKit for integrating with TON, and discusses "TON Pay" for payment integration, it does not explicitly describe a TON-based solution specifically designed for open-source project donations.  The documentation focuses on general payment processing, wallet integration, and how to contribute to the TON documentation, which is itself open source. It does not highlight a platform or tool for managing donations to open-source projects using TON.  Therefore, based on the available information, there is no direct answer to whether an existing TON-based solution for open source donation is available. (reply to 177907)

Mariem: Chào mọi người.

Andrey: Hi, what do you want from the donation system? (reply to 177907)

Mirka: What's the problem of sending assets to somebody's wallet as a donation? (reply to 177907)

TON Support: The problem with sending assets to individual wallets as a donation is that network fees can quickly accumulate, especially when the sender is responsible for paying the fees for each transfer. This cost scales rapidly with the number of recipients.  Source: Airdrop - TON Docs (reply to 177920)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: hey i found an auditor list in TON builder > find a talent   https://ton.org/en/talents?auditors (reply to 177902)

Tony: For example, how to distribute donation according to project donation percentage? And how to pay upstream dependency project owner. This should be automatically by the donation management system.   Traditional donation channel like github sponsor doesn't have this feature. (reply to 177918)

Tony: crypto payment provides a more flexible way to pay and transfer with very low fee (gas fee)

Andrey: Write your own smart contract that will divide donations (reply to 177923)

Tony: And there is new open source concept from someone in my community called Open Source Maintainence Fee. OSMF license.  You can search google to find the website. (This group doesn't allow url)

Tony: Looks crypto payment like TON is more promising to implement this.

Mariem: TON crypto payments look the most promising to implement. (reply to 177927)

Tony: but looks Ton coin is not so widely used. I am worrying that if people is willing to buy ton with usdt just for donation purpose. This can be a gap

Teemu | 機器人🪽: Looks like you trying to bypass some nasty tax-officers?

Tony: and I am mainly working for web2 open source projects. there can be another gap since most crypto payment are used for web3 open source donation instead of web2

Tony: not really. There is very few donation. The payment for donation should be smooth enough to avoid blocking potential donationer. (reply to 177933)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: thinking about it quickly, there’s maybe something that can be done with the xRocket Bot API   Something cool would be allowing donation to a telegram account directly without need to know the wallet (reply to 177926)

∆lieπ FlΦw: Anybody can help with our Ai Agent and miniapp in Telegram TON?

— 2026-03-27 —

&rey: Ask concrete questions about TON, if any, right away! (reply to 177963)

Mariem: Good day everyone

Anthony: 🫧 Tolk v1.3: moving toward a general-purpose language  After the previous post, this release may feel less surprising — but still a bit unusual.   The reason is simple: Tolk is no longer evolving only as a contract language. It is becoming a foundation for the toolchain I described earlier.  This release focuses on features beyond contracts — introducing general-purpose capabilities needed for libraries and frameworks.  ✅ Notable changes in Tolk v1.3:  1. Type array<T> — dynamically sized arrays backed by TVM tuples. 2. Type unknown — a TVM primitive with unknown contents. 3. Type lisp_list<T> — nested two-element tuples (FunC-style). 4. Type string — text chunks backed by snaked cells, with StringBuilder for concatenation. 5. Compile-time string methods: "str".crc32(), "str".sha256(), etc. 6. Null coalescing operator — ?? like in TypeScript. 7. Import path mappings — import "@third_party/utils". 8. Compile-time reflection via @stdlib/reflection. 9. Custom serializers now support structures and generics. 10. The compiler now reports multiple errors at once. 11. Focused on stability — fixed dozens of minor issues found by LLM fuzzing. 12. Extensive internal refactoring towards being stateless and multi-threaded.  PR on GitHub with detailed info.  ✔ Arrays: redesigned tuples  Working with TVM tuples has been fully redesigned. There is now array<T> — a dynamically sized container:   // array<int> var numbers = [1, 2, 3];  // array<Point?> var optPoints = [     Point { x: 10, y: 20 },     Point { x: 30, y: 40 },     null, ];   - methods push, get(idx), etc. - any T, including sub-arrays like array<array<int>> - automatically serialized into snake cells - max size: 255 (TVM limitation)  ✔ The `unknown` type  Raw TVM tuple exists, but it's no longer built-in. It's just an array... of something unknown:   type tuple = array<unknown>   The unknown gives access to the untyped TVM stack, fully integrated into the type system.  ✔ The `string` type  TVM has no strings — only binary slices. Strings were always just a convention over binary data.  Now Tolk has strings built-in.   // string val str = "hello";   - strings are cells (not slices) - long strings are snake cells under the hood - methods calculateLength, equalTo, etc. - on-chain/off-chain encoding for jettons and NFTs to comply with TEPs  StringBuilder encapsulates cell manipulation:   StringBuilder.create()       .append(content.commonContent)       .append(individualNftContent)       .build()   By the way, compile-time functions now look cleaner: "str".crc32() and so on.  ✔ Import path mappings  The import statement now accepts @aliases:   import "@common/jettons" import "@third_party/math-lib"   This is similar to widely used path mappings in TypeScript.  ✔ Compile-time reflection  Many additions in v1.3 make sense not for contracts, but for frameworks. For example, take a look at one of reflect features:   fun log(msg: string, loc: SourceLocation = reflect.sourceLocation()) {      debug.print(loc.lineNo); }  fun demo() {      log("a");    // prints K — current line no      log("b");    // prints K+1 }   Why is this useful? It allows errors to point to the original call site — for example, expect(...) in tests — by carrying source location at compile time.  ⚙️ A huge portion of internal refactoring  A lot of work has been done inside the compiler core, peephole optimizations, and memory management.   Final result: tolk compiler is now thread-safe and re-invokable within a single process. It will be embedded into an external toolchain written in Rust, communicating via FFI.  ... And more  Dozens of independent improvements. Combined, they cover the requirements not only for contracts, but for abstract libraries and the upcoming toolchain.  Feel free to check the description on GitHub.  🌳 And one more thing! Wallet-v5, compiled with Tolk v1.3, reduces gas usage by 30% compared to FunC. As of Tolk v1.0, the savings were "only" 20%. Take a look at new benchmarks. (forwarded from TOLK lang)

∆lieπ FlΦw: Im asking concrete 2 questions aboyt ton (reply to 177965)

Slava: docs.ton.org  can u elaborate on your question? (reply to 177963)

∆lieπ FlΦw: Claro dime (reply to 178003)

Tony: That should work. Narrow the gap for donators who doesn't know web3 well. The wallet address and network protocol is out of their knowledge. (reply to 177937)

:): can domains be bought with Ton

TON Support: Yes, domains can be bought with Toncoin. Primary sales of .ton domains occur through a decentralized open auction at dns.ton.org. Registered domains must be renewed annually by sending 0.015 TON to the domain contract.  Source: TON DNS & domains | The Open Network, TON DNS - TON Docs (reply to 178020)

Tony: Yes, of course (reply to 178020)

:): Can sites be hosted on them

Tony: domain is domain, hosting is hosting

Tony: it's same in web2 world

Tony: Ton domain maps to ton address

:): thanks

:): Dm (reply to 177679)

Andrew: Is there any development team here, who can write NFT contracts using Tolk?

— 2026-03-28 —

Marsina: just get yourself a bunch of agents. its 2026 (reply to 178033)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: https://docs.ton.org/foundations/web3/ton-sites (reply to 178023)

:): wow (reply to 178059)

Arthur: Sup (reply to 178033)

— 2026-03-29 —

TON Support: What is TON blockchain?

Andrey: You should know (reply to 178089)

TON Support: TON is a blockchain platform designed for scalable smart contracts, applications, and payments at a consumer scale. It provides a distributed platform for storing data and code, and for running computations.  Source: [TON documentation](https://docs.ton.org/#:~:text=Traces

Tony: Yes. He should know, hahah (reply to 178090)

Mr X: Hello, Who want Ton Project App ?   Im developer if you want to work with me dm me for making project

final: me too. i also have portfolio with some projects, dm to see it (reply to 178112)

Mr X: You are developer? (reply to 178118)

final: Yes (reply to 178120)

Mr X: I need a person to pay the project or working and growth the project (reply to 178121)

Mr X: LOL

final: Me too (reply to 178123)

Mr X: who said programming make that you are here (reply to 178125)

Mr X: hero*

Mr X: rich

final: what .-. (reply to 178127)

Mr X: actually we are poor programmer xD (reply to 178131)

Arthur: Ye (reply to 178132)

Mr X: I cant find any person that pay a project or growth the project xD (reply to 178165)

Mr X: Im working Web3 Blockchain similar ton Chain like ethreum chain Evm

Arthur: Same, i have spent like 4-6 weeks or something finding jobs. On site like laborx, cyptotask, etc. haven't found any, most of them are scammers. And the others offer like $1/hour. (reply to 178166)

Arthur: Tho have you tried advertising your services on your own website that serves both as the way to contact you, and as your portfolio? I heard that works. (reply to 178167)

Mr X: That to bad I heard some sites that Answers Ai Task like microrowkers . did you test it ? (reply to 178168)

Arthur: Nah I haven't. Is it like bug bounties? For example gitcoin, open bug bounty, etc? (reply to 178170)

Arthur: Oh i Googled it, so you basically train an ai model for a few cents? Hmm that's good, whatever earns me money. I'm currently 'desperate' for any amount. i'll try it then. (reply to 178170)

Mr X: No I heard it , just answer or review AI Output and they said 60$ hour just for python developing  you can Ask with ChatGpt for earn money    but I didnt find anything to Earn money (reply to 178171)

Mr X: I said it because they site need resume and Github Repository About Python.  I havent   create a resume yet (reply to 178173)

Arthur: oh, so basically you'll code for people, and earn? Okay that sounds like laborX, but i assume that isn't infected with scammers like laborX does? (reply to 178173)

Mr X: Yes im coding for a people who really want a project or site   now i Want to find them (reply to 178175)

Arthur: Damn, good to hear at least you are earning something. I'll probably try if i can do it. i think if there were an platform that makes clients put in money first when creating a job offer, instead of like you create a job offer, find applicants, click escrow and the money gets transferred to an escrow fund. Freelancing, job hunting would be much faster and efficient. Except I'm not sure if there's any that's also active(meaning a lot of job offers), in the Web3 and crypto based payment world. (reply to 178176)

Mr X: I think Code for people is the best   Finding is hard but you can find and earn more finally start the project (reply to 178178)

Arthur: Yeah, but finding a project that pays at least $3/hour is hard, like incredibly hard. Perhaps it's only for me because i don't look for jobs where everyone do. there are a lot of scammers, bots in the freelance market, so it's hard to find a job that pays. I have had like 4-5 different jobs before, none paid. Maybe because the way i hunt for jobs is incorrect? Probably. but once you get one, you'll get good at finding others. probably because of uhh association, and reputation. I think that's my opinion tho. (reply to 178179)

Mr X: Really ? Are scammers in jobs platform ? likes gitcoin (reply to 178180)

Arthur: Oh i doubt gitcoin. but a few "privacy-first" platforms. Example: LaborX, CryptoTask, Jobbers.io, etc. (reply to 178181)

Arthur: i'll try microworkers or something that you recommended earlier, if that dosen't work, finally brain trust, and if that dosen't, i'll go on the bigger platforms like upwork, pph, fiverr, etc.

Mr X: Ok dude test it (reply to 178183)

Arthur: bruh, i already got ip banned because i accidentally put my old email in the registration process, that email was actually scheduled for deletion by Google bcause i apperantly broke some Google policies. So I couldn't get the verification code, and tried removing cache and changing ip. Got ip banned for "using" more than 2 accounts (reply to 178184)

Mr X: Try Vpn (reply to 178185)

Mr X: and or proxy Browser extension

Arthur: okay, i'll try one

Arthur: K, finished a 10 cents task!

∆lieπ FlΦw: How can Bridge with our DAO its in other blockchains web 3 and Ai web 4 (reply to 178093)

&rey: That is not trivial (and here I mean that no such tools are ready); beyond checking other blockchain's state you might need to check user uniqueness across different chains... (reply to 178204)

— 2026-03-30 —

testertesterov: https://dshpr.com/dev/contest/2124209827-064c5104f92987a1051324bb4e78253a0b7a840fb1be857644a6c8c5cff947f9.html  Hello 🤨  I managed to reproduce the bug even on the new commits. I don't understand why the organizers couldn't reproduce it and are now silent.

testertesterov: This happened when the consensus failed to restart and zombie processes began appearing on the same ports, consuming all the RAM very quickly.

bharath: Hello, Have anyone tried to benchmark latency between public liteservers and ton api lite server ?

TON Support: Latency from a chain event to the client is typically 30–100ms. Public liteservers are available for both mainnet and testnet. If self-hosting a liteserver, ensure it is updated before mainnet rollout.  Source: How to adopt sub-second finality - TON Docs (reply to 178267)

fade: public liteservers are almost never usable for production. just run your own node. (reply to 178267)

Marsina: does toncenter free tier fall under this category? (reply to 178270)

TON Support: When using send_mode=128 (SendRemainingBalance), the amount parameter is ignored because the transaction is intended to send the entire remaining balance of the account. Therefore, specifying amount=1 nanoTON is redundant and can lead to unexpected...  behavior or errors if the remaining balance is not exactly 1 nanoTON.  Error 137 typically indicates an issue with the transaction's processing, often related to an invalid message body or insufficient funds to cover transaction fees when a specific amount is expected. Since send_mode=128 is meant to send the entire balance, setting amount=1 likely conflicts with this mode.  To send the entire balance from the account, you should ensure that the amount parameter is either omitted or set to a value that signifies "all remaining balance" in your specific wallet implementation (if it requires a placeholder).  For more details, you can refer to the official TON documentation on sending modes, particularly the section on SendRemainingBalance:  Source: [Sending modes - TON Docs](https://docs.ton.org/foundations/messages/modes#:~:text=128 Source: [Message modes cookbook | The Open Network](https://docs.ton.org/v3/documentation/smart-contracts/message-management/message-modes-cookbook#:~:text=(Mode%20128%2C (reply to 178313)

TON Support: It looks like you're trying to send the entire balance of 10 TON using send_mode=128, but you're also specifying amount=1 nanoTON. This is likely the cause of your error 137.  When you use send_mode=128 (SendRemainingBalance), the system is instructed...  to send the entire remaining balance of the account. This means that the amount parameter you provide in the wallet.transfer function becomes irrelevant or even contradictory. If your wallet's remaining balance is 10 TON and you tell it to send 1 nanoTON while also specifying send_mode=128, the transaction logic might become confused, leading to an error.  To fix this, you should either:  1.  Remove the amount parameter entirely if your wallet.transfer function supports it when send_mode=128 is used. 2.  Set the amount to the actual balance you want to send (e.g., 10 TON), and ensure send_mode=128 is correctly interpreted by your wallet to mean "send this amount and also include all remaining balance for fees," or similar. However, the primary purpose of send_mode=128 is to send the *entire* balance, so specifying a fixed amount alongside it is usually incorrect.  The most straightforward way to send the entire balance is to rely solely on send_mode=128 and ensure your wallet.transfer function knows to use the full available balance when this mode is set, potentially by omitting the amount or setting it to a special value like None or 0 if your library requires it.  Error 137, "Not enough Toncoin" (or a similar interpretation depending on the exact context), often occurs when the transaction attempts to send more than is available, or when it cannot reconcile the specified amount with the send mode. By trying to send 1 nanoTON while also activating the "send all remaining balance" mode, you're creating a conflict.  For accurate usage, refer to the TON documentation on sending modes, especially the SendRemainingBalance mode.  Source: [Sending modes - TON Docs](https://docs.ton.org/foundations/messages/modes#:~:text=128 (reply to 178313)

— 2026-03-31 —

BBY GRL: Greetings

Anthony: Sub-Second mainnet activation starts  The public bug bounty contest for the TON Sub-Second update has been completed.  We thank all participants for their work and valuable feedback. The corresponding changes have already been applied to the codebase. No major consensus changes were required.  The final contest results and reward distribution will be announced later.  This contest was the final stage of testing before mainnet activation. Prior to that, the update had already passed internal testing by TON Core and extended testing in testnet.  We are now starting the activation of the Sub-Second update in TON mainnet.  For additional reliability, activation will be performed in 3 stages:  Update plan:  March 31 (today): Upgrade validator nodes to the version supporting the latest consensus changes.  April 2: Vote to activate the new consensus on the basechain and enable a moderate block rate increase.  April 7: Vote to fully activate fast consensus on both the basechain and masterchain and then upgrade validator nodes.  The Sub-Second update is a major protocol upgrade comprising a substantial number of changes.  Despite comprehensive testing, validators are advised to maintain heightened operational readiness during the next two weeks, from March 31 to April 12.  The TON Core team will remain available throughout the deployment and is prepared to respond promptly to any situations. (forwarded from TON Core)

— 2026-04-01 —

TON Moderator: Hello, Julian! Read rules and click button below.

🇵🇸: How can we build indexer for NFT?  That store information about sale , auction listings, current state, ownership , etc ?  The new sub-second update makes it even more harder to build?

— 2026-04-02 —

∆lieπ FlΦw: Alguien se une mejor a TON Dev chat pero español mejor?

TON Support: La documentación de TON menciona "All TON communities Telegram Dev chats" para unirse a la comunidad. No especifica un chat de desarrollo de TON en español, pero puedes buscar en Telegram grupos relacionados con "TON Dev español" o "TON Developers en...  español" para ver si hay comunidades específicas en ese idioma.  Fuente: [Other resources - TON Docs](https://docs.ton.org/more-tutorials#:~:text=%E2%80%8B (reply to 178413)

∆lieπ FlΦw: Tuve que hacer una porque no existía , ahora ya si que hay una comunidad de Ton dev en español, deberíamos hacerla oficial porque todavía no hay ninguna! (reply to 178414)

Slava: dear Mini App developers, could you please take a look at these open documentation improvement PRs and share your feedback? We would really appreciate your review and input  https://github.com/ton-org/docs/pulls?q=is%3Apr+is%3Aopen+tma

mnemotiv: all PRs except debugging - lacks information about known issues (Telegram bugs which are not fixed for years) (reply to 178424)

mnemotiv: sent details to DM (reply to 178424)

bharath: No it won't affect any api. Use ton api for indexing NFTs. (reply to 178406)

S: Which one is easy for beginners? I want to add nfts to my mini app

∆lieπ FlΦw: Anybody can help integrating our Ai Tor Agents Intel Hub OSINT to Agent Bots in Telegram and our miniapp in TON?

— 2026-04-03 —

Leo: Which kind of nft and miniapp? (reply to 178440)

final: Yes (reply to 178440)

Adejoke: Hi guys   For the hackathon do we have to list our app on TonApp?

∆lieπ FlΦw: Have you seen the miniapps and NFTs of our DAO? (reply to 178449)

S: Collectible nfts and sbts in my telegram mini app (reply to 178449)

S: Yess.... what? (reply to 178450)

S: Show me how you did yours (reply to 178469)

Arthur: Nah, can i see? (reply to 178469)

Davis: Hi devs,  In TON, when I send a transaction with a specific amount in the message body, the network fee is deducted from that amount. This means the recipient gets amount - fee instead of the exact amount I intended to send.  Is there a recommended way to send an exact amount to a recipient? For example, can I use the SendPayFwdFeesSeparately flag to pay the network fee from the wallet balance instead of deducting it from the transfer amount? What is the best practice for ensuring a recipient receives a precise sum?

TON Support: In TON, to ensure a recipient receives a precise sum, you can use the SendPayFwdFeesSeparately flag (value +1) when sending messages. This flag ensures that forward fees are paid separately from the message value, preventing them from being deducted...  from the amount intended for the recipient.  The recommended approach for sending messages in TON, particularly for wallets, is to use a mode=3. This combines the base mode 0 with two flags: *   +1 (SendPayFwdFeesSeparately): Pays transfer fees separately from the message value. *   +2 (SendIgnoreErrors): Suppresses specific errors during message processing, meaning no bounce message will be sent on failure. This is important for wallet contracts to prevent issues like reverting transactions and not updating critical data like the seqno.  When using the send_raw_message function, the mode=3 combination is the standard method.  It's important to note that for general Toncoin payments, the recipient's amount may still be reduced by network fees. If an exact settlement amount is critical, consider using Jettons or slightly overpaying in TON.  Source: Sending messages | The Open Network, Sending modes - TON Docs, Message modes cookbook | The Open Network (reply to 178486)

Davis: Still didn't work perfectly   Made a test withdrawal of 0.05 recipient got 0.0496 (reply to 178487)

Davis: Can anyone helping me out please (reply to 178486)

&rey: "The amount of TON recipient received in a message" will not be equal to "the balance change of the recipient". (reply to 178495)

&rey: Why? A bit of compute fee which is required to support plugins, and some storage fee. Storage is not for sender to care.

Davis: Ok understood but one more question    How wallets like ton keeper send the exact amount without this compute fee (reply to 178499)

&rey: They don't, do they? It's possible that you are looking at the very first messages to accounts, where there is no storage fee nor anything to compute so that part of fees is zero. (reply to 178500)

Davis: Yes they do and it works for old wallet with existing balance (reply to 178501)

Davis: I do use ton keeper wallet on a daily basis   What I send is what the recipient receives without any deductions   Fee is removed from sender wallet not transaction amount

&rey: It does pay the network fee indeed. (reply to 178486)

— 2026-04-04 —

Ali: Hi

∆lieπ FlΦw: Yes in GitHub and here in Telegram (reply to 178479)

Geenie Halevi.: Hi admins, I have a syncing issue with my Portals inventory. The transaction is already completed on the blockchain but it's not showing up on my end. Who can I contact regarding this syncing error?

Mirka: Portals support (reply to 178520)

Geenie Halevi.: I’ve been contacting Portals for months. They explicitly said it's NOT their jurisdiction. (reply to 178522)

Mirka: So they say that the problem in the blockchain? (reply to 178523)

Geenie Halevi.: No, the exact opposite. The blockchain worked perfectly (the transaction is 100% confirmed on TON). The problem is their off-chain database. The Fragment/Portals backend simply failed to read the blockchain and map the NFT to my account. That's why I need a dev. (reply to 178524)

— 2026-04-06 —

FortuneStack: Hey, we're integrating TON Pay on our Telegram Mini App and ran into an issue where a payment got stuck in what looks like a TON Pay routing contract instead of forwarding to our wallet. Is this a known issue with the SDK? Has anyone else experienced this?

Alex |: Heya, can you send the transaction hash so I can check it out more closely? (reply to 178555)

FortuneStack: Here's the transaction hash: 930881757cefc49687c896a4dc696cd04284461403c200699ad24de9fed30f9d (reply to 178557)

— 2026-04-08 —

Anthony: Voting is now live on mainnet for a change to config parameter 30 and the activation of Catchain 2.0, a new sub-second consensus with ~400ms block-time.  This is a fundamental change to our blockchain, allowing validators to communicate internally with each other using QUIC protocol.  There is a website where you can track the validator voting progress in real time: https://vote.lagus.cooking/  Fingers crossed. (forwarded from Lagus research)

FortuneStack: I am still waiting (reply to 178557)

Anthony: Hey! The team will get back to you soon (reply to 178635)

TON Support: Hi! TON is a blockchain platform designed for scalable smart contracts, applications, and payments. It supports sharding and can accommodate one masterchain, up to 2^32 workchains, and up to 2^60 shardchains. Developers can build, debug, and deploy smart contracts on TON.  What specifically about TON blockchain development are you interested in?  Source: [TON documentation](https://docs.ton.org/#:~:text=Traces

— 2026-04-09 —

Anthony: 💎 TON is Now Up to 6x Faster  Sub-second finality is live.  Transactions now confirm in about 1 second, down from around 10 seconds before. Block times dropped from 2.5 seconds to 400 milliseconds to bring the on-chain experience closer to Web2 responsiveness.  What this unlocks:  Payments that feel like sending a message, trades that execute in real time, and apps that match the speed users expect from any modern product.  What this changes:  The network now produces more blocks, which increases validator rewards and strengthens staking incentives across the ecosystem.   For developers:  The blockchain is now fast. Your apps need to show it. Upgrade to streaming APIs to surface sub-second speed for your users.  👉 Docs   TON Community | TON Dev News | TON Regional | X | YouTube | LinkedIn | TON.org (forwarded from Toncoin)

Blackstreak: Hello Admin/Mods  May I know if there is a specific community for Devs in India who are building on TON?

TON Support: The TON documentation mentions that the ADNL protocol, which is built on top of the TCP/UDP stack, is the cornerstone of TON networking. The TON Distributed Hash Table (DHT) is used to locate other nodes in the network and acts as a key-value data storage....  While the documentation details how DHT queries for dht.getSignedAddressList are handled, and mentions adnl.address.udp as a schema for IP and port, it does not explicitly state that DHT has started returning QUIC addresses instead of UDP, or that the interaction with DHT for peer discovery has changed in that specific way. The provided information focuses on UDP communication and the structure of ADNL messages for DHT queries.  Source: Work with UDP | The Open Network, Overview | The Open Network, Deep dive | The Open Network, Web3 services - TON Docs

Anthony: TONAPI now supports Streaming API for sub-second finality  Sub-second finality is live on mainnet. If you're building on TONAPI, here's what's new.  TONAPI has added support for Streaming API (SSE + WebSocket), based on TON Center Streaming API v2. The interface is fully compatible, so you can use the official documentation as a reference.  What's available:  – SSE and WebSocket streaming endpoints  – Full transaction lifecycle: pending → confirmed → finalized → trace_invalidated  – Authorization via your existing Ton Console token   Endpoints: Mainnet:  https://tonapi.io/streaming/v2/sse  https://tonapi.io/streaming/v2/ws  Testnet:  https://testnet.tonapi.io/streaming/v2/sse  https://testnet.tonapi.io/streaming/v2/ws  Documentation: Streaming API  Get your API key: Ton Console (forwarded from TON Dev News)

🇵🇸: Support for all addresses is needed; specific addresses are insufficient for monitoring every transaction. (reply to 178678)

Ammar: Hello, I want to create a trading bot on Telegram for trading on the network. Do you have any guidance? I am a beginner. I want to build a project, even if it is simple, for personal use at the beginning on ton

Dmitry: It appears the recipient address was incorrectly set to the proxy contract rather than the intended destination wallet. Please verify that the correct address is utilized. A refund has been issued to the address. (reply to 178635)

Dmitry: Could you share how you set up this transfer? Maybe the SDK could be improved (reply to 178563)

Marsina: my apps blockchain chat is now instant. thanks team! (reply to 178667)

FortuneStack: We used the standard @ton-pay/api SDK with TonConnect. The recipientAddr is stored in our database and passed to createTonPayTransfer which embeds it in the proxy payload. During one transaction, the stored recipient address in our DB was incorrectly set to the proxy contract address itself rather than our merchant wallet — so the proxy forwarded funds back to itself instead of forwarding out.  A potential SDK improvement: add a validation step in createTonPayTransfer that checks whether the recipientAddr matches the proxy contract address and throws an error if so. This would catch this class of misconfiguration at the SDK level before the transaction is signed. (reply to 178689)

FortuneStack: The original sender has confirmed receipt of the refund. Is there any way the funds could instead be directed to our merchant wallet? (reply to 178688)

— 2026-04-11 —

TON Support: While direct integration with Google BigQuery for TON blockchain data isn't explicitly mentioned, you can access TON blockchain data through several methods:  *   TON Center API v3: This API provides an indexed data layer, allowing applications to read...  blockchain data, run analytical queries, and retrieve historical information. It reads raw data from a node's RocksDB storage, parses and decodes it, and stores it in PostgreSQL. *   TON Center API v2: This API provides developer access through REST and JSON-RPC endpoints, allowing applications to read blockchain data, run smart contract methods, and send transactions. *   Running your own TON node: You can set up your own full or archive node with a liteserver mode and ton-http-api enabled using MyTonCtrl for a stable connection. *   Publicly available data from S3 bucket: You can access publicly available data from the S3 bucket: s3://aws-public-blockchain/v1.1/ton/.  These methods allow you to access and process TON blockchain data, which you could then potentially integrate with Google BigQuery.  Source: Overview - TON Docs, Start here - TON Docs, Overview - TON Docs, Analytics and data providers - TON Docs (reply to 178785)

— 2026-04-13 —

Sergei: Hi! Quick question about Streaming API v2 subscriptions.  For the accounts array in a WebSocket subscription — is there a documented or recommended upper limit on how many addresses one subscription can hold? (reply to 178678)

TON Support: An array can contain from 0 to 255 elements.  Source: Arrays and tuples - TON Docs (reply to 178852)

Sergei: No, I'm talking about the payload array capacity, not the TVM (reply to 178853)

&rey: Legacy Streaming API (tonapi) had 1000 account subscriptions per connection; how many v2 supports, appears not to be written yet. (reply to 178852)

Sergei: 1000 is quite generous too, thanks for the info (reply to 178855)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: https://github.com/TONresistor/tonutils-bridge  WebSocket bridge using tonutils-go exposing liteserver queries, DHT, ADNL, overlay networks, and real-time subscriptions via JSON-RPC 2.0 over WebSocket.  Why pay for an API if you can connect yourself 🤷🏻‍♂️🤷🏻‍♂️

IDRegistry: I can’t managed to get CSS 3D transforms working properly in the Mini App..  Also having issues with backdrop-filter: blur() not rendering. Are there known WebView limitations I should be aware of?  Any workarounds? Thanks ! (reply to 178875)

Mirka: @devs (reply to 178877)

— 2026-04-15 —

Tlink Wallet: Hi everyone,  I’ve been building an XMSS-based quantum-resistant wallet for TON and would appreciate honest feedback from the community.  The setup is already working:  - the smart contract is implemented and functioning as intended - the supporting utilities/tools are also in place and working properly - users keep full control of their wallet - withdrawals cost about 0.3 TON in gas - anyone can send funds to the wallet - it works within the current TON infrastructure, with no protocol changes required  The motivation is long-term security. Ed25519 is widely used across TON and other ecosystems, but it is not quantum-resistant.  A few questions:  - Do you see real demand for quantum-resistant wallets in TON today? - What would be the main blockers to adoption? - Would this be more useful as a niche security product or something broader?  Happy to share technical details if anyone is interested.

Slava: This is definitely an interesting field, that worth working on. However, if the traditional crypto will be broken, a state of TON wallets will be the last thing that people will be worrying about. (reply to 178986)

&rey: Clarifying the answer above, one'd first need to replace SHA256 throughout the blockchain. (reply to 178986)

Slava: Also, with such fees such wallets would be only practical as a cold storage, not general purpose wallets.  This definitely deserves a study of implementing dedicated TVM instructions to help reduce the costs. (reply to 178986)

Slava: As far as I remember the white paper, the network's design allows the hashing algo to be swapped. Don't know how hard that would be in practice though. (reply to 178999)

&rey: Abandoning the whole workchain 0 at the very worst, because many contracts rely on contract address calculation using SHA256. (reply to 179002)

Slava: To conclude, this is a serious and important field that deserves study, but it should better be done on the network level.

— 2026-04-17 —

Alina: After the sub-second update I started getting this error on my ton-lite-client contract .get() calls frequently:   Error: cannot load block (0,8000000000000000,65859296):78F82C8050CC757BAD35D6171846B38A261F7F25019059E50CC6F7F566DC1BFE:A1F5B76FBD2317E6A97F249605B26F29EC5C27E6322D9FCCF95D475C55D19A82 : block (0,8000000000000000,65859296) is not in db (possibly out of sync: shard_client_seqno=60874675 ls_seqno=60874683)   Mytonctrl status reports this: Liteserver queries for the past 60 sec (success/error): 11039/5919  Previously, the success rate was 100% and I could even skip wrapping lite server calls in a try-catch

Alex: Hello!  Thank you for the report. The developers are currently working on a solution to this issue and will likely share an update sometime next week. (reply to 179041)

Fardin: Hello how u guys are handling factory patter contracts in the tolk? I have a pool and factory, but i have no idea how to deploy the pool with factory in tolk.

TON Support: In Tolk, when handling factory pattern contracts like a pool and factory, the factory contract (e.g., a jetton minter) needs to know the initial state of the contracts it will deploy (e.g., jetton wallets). This includes their code and data.  For example,...  when deploying a jetton wallet, the minter contract calculates the future wallet's address and state initialization (stateInit) based on its code and the initial data.  To ensure that sibling contracts are deployed to the same shard, you can specify the prefix length and the target contract address. This is particularly important for sharded contracts, such as sharded jetton wallets, which need to be on the same shard as the owner's wallet.  You can find a reference implementation of jetton contracts in the tolk-bench repository on GitHub.  Source: Idioms and conventions - TON Docs (reply to 179055)

fade: it was always like this even before the subsecond upgrade, you must retry  getaccountstate and runsmcmethod calls (reply to 179041)

fade: after the upgrade, error rate is higher

Alina: I'm quite sure I was connecting to my self-hosted liteserver and it was never throwing before (reply to 179057)

fade: it was just less error before the upgrade, like once you start overloading the node the error rate will be higher

fade: i just wrap getaccountstate and runsmcmethod in retry, with same target block of course

Maks: Error: cannot load block (0,8000000000000000,65859296):78F82C8050CC757BAD35D6171846B38A261F7F25019059E50CC6F7F566DC1BFE:A1F5B76FBD2317E6A97F249605B26F29EC5C27E6322D9FCCF95D475C55D19A82 : block (0,8000000000000000,65859296) is not in db (possibly out of sync: shard_client_seqno=60874675 ls_seqno=60874683)

Slava: LSes have always had stability issues, even the self-hosted ones with virtually no load. In any case, wrapping ALL your requests (not only to LSes) is a must and a good practice. (reply to 179041)

— 2026-04-19 —

TON Moderator: Hello, J.S.B! Read rules and click button below.

Vitalii: Hello devs   TMA analytics not load fix it plz

Vitalii: I cant see keys, long loading and 504 on endpoint ton.org/dev/api/v1/analytics/tokens/?projectid= (reply to 179177)

Vitalii: https://ton.org/dev/profile?tab=analytics&project=3455274b-d2cf-8147-a1d9-eb05c1ee5430  Here not load keys (reply to 179177)

— 2026-04-20 —

Nikita: Hey. I’ve developed a BIN engine MVP for TON card infrastructure (Issue #1223 in grants-and-bounties).  The core logic is optimized for low latency (sub-20µs) and high throughput, which is essential for real-time payment gateways. The engine is functional, and I’m now looking to build the production wrapper (auth/API keys) around it. If anyone from the infra/payments team is around, I’d value a technical review. Thanks.

— 2026-04-21 —

Marsina: TMA analytics is soooo unstable. they even accused me of my app not working meanwhile their own sdk is making calls to a non existent endpoint (reply to 179177)

Billy: Hi Ton devs, I'm getting this error on my index-api: {"@type":"extended_list_last","action":"<FATAL: unknown constructor for W5ExtendedAction>"} I'm on ghcr.io/ton-blockchain/ton:v2026.03-amd64 + toncenter/ton-indexer-api:v1.2.8, Is there a fix for this?

Vitalii: We have same problem but We'll handle this on the backend ourselves, and we might even finish the SDK. If you need help, send me a direct message. (reply to 179321)

Vitalii: Our backend will send API requests to the analytics API endpoint https://tganalytics.xyz (reply to 179327)

Mubarek: <script src="https://tganalytics.xyz/index.js"></script>

— 2026-04-22 —

fade: my node is out of sync constantly under very light load

fade: i have out_of_sync alert from the alert bot like every 5 minutes

&rey: known, being investigated and then fixed (reply to 179379)

fade: i think the problem just got worse after the 03cc3da commit? (reply to 179381)

Alina: for me too, not worse necessarily but def not better, I guess they will publish another fix (reply to 179382)

TON Support: If your node is constantly out of sync, you should monitor timeDiff and Local validator out of sync using status_fast. These values should approach zero on a healthy node. If you repeatedly see "Importing archive..." messages, this could indicate insufficient IOPS due to storage latency.  Source: Run a node with MyTonCtrl - TON Docs (reply to 179379)

h⃠a̶f̶υ t̶ⓘყe: how to submit the challenge video??

TON Support: Could you clarify what challenge you're referring to? TON Docs covers TON blockchain development topics. If you're asking about a specific hackathon, contest, or educational program, could you share more details? Otherwise, I'm happy to help with documentation questions about TON development. (reply to 179398)

h⃠a̶f̶υ t̶ⓘყe: yes appkit vedio challenge

TON Support: Could you clarify your question? Appkit video challenge isn't something I can identify from the TON documentation. Are you asking about a specific TON SDK, TON Connect, or something else? I'd be happy to help with a documentation question about TON. (reply to 179400)

h⃠a̶f̶υ t̶ⓘყe: ok tell me about TON.

TON Support: TON (The Open Network) is a scalable blockchain platform designed for smart contracts, applications, and payments. It functions as a distributed platform for data and code storage, and for running computations. The platform runs on nodes, with validators playing a key role in maintaining its safety and operation.  Source: Start here - TON Docs, TON documentation, Web3 services - TON Docs, The Open Network - TON Docs (reply to 179402)

h⃠a̶f̶υ t̶ⓘყe: ok thank you for helping me.but I have one question, last week I was created video about appkit but I can't submit it. How to submit a video ?

TON Support: Could you clarify what you mean by submit a video? TON Docs is documentation for The Open Network blockchain. Are you asking about a specific feature, like submitting a video to a contest, tutorial submission, or something else? (reply to 179404)

h⃠a̶f̶υ t̶ⓘყe: submitting a video to contest

TON Support: Could you clarify what you mean? Are you asking about a specific TON contest (e.g., a developer contest on the TON blockchain)? I searched the TON documentation, which focuses on blockchain development — video contest submissions aren't a typical documentation topic. If you can share more context, I'll look into it. (reply to 179406)

h⃠a̶f̶υ t̶ⓘყe: can I send video in this group?

Илья: https://github.com/TONresistor/Tonnet-Browser  Is someone know what is it? Is this repo safe? Looks like scam.

vangaard: It is from @zkproof and has been mentioned by TON Core devs and it is safe. (reply to 179414)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: I’m trying to reply, but the bot keeps deleting my message even if there’s no bad word in my mssg (?) (reply to 179414)

&rey: but there's an emoji though. (reply to 179419)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: Hey, I'm the maintainer of this project. I conduct my own internal audits to ensure it's safe to use, but no external/professional audits have been made yet  However, code is open source feel free to audit it and make sure it's safe to use or not (reply to 179414)

Илья: Everything is fine I'm checking the browser now; Thank you! (reply to 179419)

Илья: Are there any use case of .ton site + ton storage? Yes, I can load by bag id but I want to check how it works together - .ton site + ton storage

TON Support: You can host a static TON Site in TON Storage. This involves creating a bag from your website folder, which must contain an index.html file. After creating the bag, you assign the dns_storage_address#7473 bag_id:uint256 = DNSRecord; value to the DNS record with the key sha256("site").  Source: TON Storage FAQ | The Open Network (reply to 179423)

TON Support: There's no direct mapping from a TON wallet address to a Telegram username in the documentation. A Telegram handle is an off-chain identifier managed by Telegram, while a TON wallet address is on-chain. They are linked only if the user explicitly associates them (e.g., via a Telegram username NFT on the @username collection, or TON DNS), but the wallet itself doesn't expose a Telegram handle.  Source: TON DNS (reply to 176487)

— 2026-04-23 —

Anthony: New for TON devs: Deep Smart Contract Audit Skill  A new audit skill for TON smart contracts is now live — powered by TON Symbolic Analyzer (TSA) and combining LLMs with formal methods.  What is TSA? A symbolic execution engine that simulates contract behavior across many possible states to uncover non‑obvious bugs.  What the skill does:  • Explores real execution paths • Analyzes smart contract code at the bytecode level • Detects critical issues: – Unauthorized fund withdrawal scenarios – Incorrect handling of bounced messages – Replay attack vulnerabilities  • Generates test cases • TSA enable deep analysis for higher security coverage. • Produces a structured audit report  ⚙️ It is free and powerful smart contract audit skill for all TON developers!   More details:  🔗 https://tonsec.dev/smart-contract-audit-agent  Includes a case study showing how it reproduced a real DEX vulnerability. (forwarded from TON Dev News)

Faylen: Looks interesting, but after taking a closer look I've got a couple of questions:  1. What about Tolk support? The skill README clearly states that you need func + fift installed locally, custom checkers are written in FunC using tsa_* intrinsics, and there’s literally zero mention of Tolk anywhere in the TSA repo or the skill itself. Most new TON code these days is already being written in Tolk. Any plans for native Tolk support, or is this intentionally FunC-only by design?   2. On the CroutonFi case study - this is a reproduction of a bug that was already fixed back in June 2025, yet the blog post only came out in April 2026 (9 months later). You also openly state that the agent didn’t find the issue without TSA, and the key invariant (“can a swap pay out more than it receives?”) was provided manually by a human. Are there any examples of a true “blind find” where the workflow discovered a previously unknown vulnerability without someone first formulating the property for it? (reply to 179442)

7eo: Everything released today must be Tolk first

Jason (JayP) $ETN: I agree since it's the new standard we should be doing anything that we're developing currently in tolk (reply to 179455)

mnemotiv: I don't think that this tool would be released today if it wouldn't be able to audit the end result of your smart contract project even if it's initially written in Tolk - so the tool checks the after-compile code, which is a correct approach

Faylen: Does anyone know if the 6x cut applies uniformly across gas_prices (param 20/21) and msg_fwd_prices (param 24/25), or are the scaling factors different per param? Durov said "transaction fees" - which technically excludes storage_prices (param 18). Is storage rent staying at current values, or scheduled for a separate adjustment?  Also - any info on the scope of the feeless phase? Is it a relayer/subsidy model (gas still burned, just paid by a pool), or an actual zero-cost path? And does it cover jetton transfers / DEX swaps / contract deploys, or simple TON transfers only?

TON Support: I don't have information about a 6x fee cut, Durov's announcement about transaction fees, or a feeless phase in the TON documentation. The documentation describes how the gas_prices, msg_fwd_prices, and storage_prices configuration parameters work,...  but it does not mention any upcoming changes or a feeless model.  For authoritative answers regarding these announcements, please check official TON channels or governance proposals directly.  Here are some relevant documentation links for the current fee mechanics: *   Transaction fees overview *   Fee calculation details *   Network configuration params (reply to 179468)

Tim: We will know once voting starts, but I think it will be the same, as the last time when fees were cut by 4x (reply to 179468)

Faylen: Got it, thanks (reply to 179470)

— 2026-04-24 —

mnemotiv: is there any page/repo with history of voting proposals? (reply to 179470)

TON Support: The list_votes get-method returns all active proposals, including the proposal_hash and votes_create_time. The list_voters get-method provides voting details per proposal, such as address, support (for or against), and vote_time.  Source: Nominator pool | The Open Network (reply to 179479)

mnemotiv: I need past proposals (reply to 179480)

TON Support: You can display open governance offers, which are configuration proposals, using the ol command. This command prints a table showing the hash, config ID, votes, win/loss tally, approval percentage, and pass status.  Source: Utilities - TON Docs (reply to 179481)

Андрей: To do this, you need to index the entire blockchain history for the voting contract and maintain a local history. No one has done this yet, but you can be the first. (reply to 179481)

Sviatoslav: Anyone here already building projects with AI Cocoon?

WhyesCode: I do (reply to 179486)

— 2026-04-25 —

Ekaterina: Thanks for the interest in the tool!  1. The tool works on bitcode level, so it can analyze smart contracts on any language, including Tolk. The checkers currently can be written only in FunC, but we plan to add Tolk support. But with the agent you don't need to write the checkers yourself.  2. The agent worked with a single prompt — "audit this project". It formulated invariant "can a swap pay out more than it receives" and fed it to TSA by itself. The article says that just an agent without TSA skill wasn't able to find this bug.  The result is that now such bugs can be found automatically. Previously it was found only after it had already been exploited. (reply to 179447)

LAGMEDIA⚪ ⚫: Hello everyone  Are most of you finding it harder to keep users active after launch, or just getting them in?😔

Faylen: On Tolk - fair, bitcode-level analysis is language-agnostic. FunC-only checkers still matter for Tolk-only projects, but the direction is clear.  On the case study - I stand corrected on the invariant origin. If the agent really derived "swap pays out more than receives" from just "audit this project", that's impressive.  Core question stands though - any cases where the workflow surfaced a previously undisclosed vulnerability, not a reproduction? CroutonFi seems to be the strongest example after a 9-month gap. Curious if there are others - that's where it really proves it scales. (reply to 179525)

LAGMEDIA⚪ ⚫: That’s actually interesting, especially the part about needing the right invariant for TSA to catch deeper issues. Feels similar to how a lot of systems are “technically solid” but still miss edge cases depending on how they’re used in the wild. (reply to 179525)

Ekaterina: If we find something big in a serious project, we will share that when the time is right. We did find some minor issues in several projects though.  For example, in LayerZero project there is a contract where anyone can withdraw storage fees (issue). That is usually a very small of TONs though.  Getgems contract is theoretically susceptible to a replay attack (issue). But is is very unlikely to be ever reproduced.  These two issues were though discovered with our standard built-in checkers in our Blueprint plugin, not an agent. There is more information about it on our site tonsec.dev. (reply to 179534)

Faylen: Fair enough, appreciate the honest answer. Built-in checkers track record is solid. The agent layer just needs more time and public results to back the marketing - looking forward to seeing the first real "caught before exploitation" case study via the agent specifically. (reply to 179537)

LAGMEDIA⚪ ⚫: That makes sense, most of the serious issues don’t come from obvious bugs anyway, it’s usually edge cases once real usage patterns hit the contract. Curious if you’ve seen situations where something looked fine in audit, but actual user behavior exposed unexpected flows later on? (reply to 179537)

Ekaterina: The thing is that the agent skill is just a wrapper over TSA. TSA offers much more powerful analysis options than the ones provided with the built-in checkers. For example, it can perform inter-contract analysis. Some vulnerabilities cannot be seen when each contract is analyzed in isolation from the others (and CroutonFi vulnerability is an example, which is why it is notable).  But using TSA inter-contract analysis requires knowledge of a lot of nuances (if you are interested, you can read the skill). And this is where the agent helps. This way a wider range of developers can use it.  When you already know TSA's capabilities well and can easily use it, honestly, it is probably more likely for you to find a vulnerability with manual TSA usage. Or by navigating an agent (reply to 179539)

LAGMEDIA⚪ ⚫: Strong point on inter contract analysis, most failures aren’t in isolated logic anyway. Feels like the bigger gap now isn’t just detecting vulnerabilities, but understanding how real user flow interacts across contracts over time. Especially in production, behavior tends to break assumptions faster than static logic. (reply to 179550)

Ekaterina: An example is actually the same Crouton. It was audited, and still there was a missing critical vulnerability (reply to 179540)

LAGMEDIA⚪ ⚫: That’s actually the interesting part, it passed audit, but real interaction exposed the flaw.  Feels like there’s a gap between “contract is secure” and “contract behaves safely under real usage conditions”, especially when multiple contracts and user flows interact. Curious if you think tooling will move more in that direction, or if that layer stays more on the execution/usage side? (reply to 179553)

&rey: In wider programming, "is secure" is usually understood as "under whatever (i.e. all) untrusted inputs". (reply to 179554)

LAGMEDIA⚪ ⚫: Yeah that’s fair, in theory “secure” should cover all possible inputs. I guess what I’m getting at is less about the definition, and more about how assumptions break once real user behavior + multi contract interactions come into play in production.  Especially when usage patterns evolve beyond what was originally modeled. (reply to 179555)

— 2026-04-26 —

TON Support: It appears there are issues with the testnet providers (toncenter_v2_testnet, toncenter_v3_testnet, and tx_propagation_testnet) as indicated by the 502 error codes.  The Testnet is an independent blockchain network that replicates the functionality of...  the main network but uses valueless coins. It is used for safe testing of contracts, transactions, DApps, and errors, and can be reset or altered at any time. You can verify testnet transactions using testnet block explorers like Testnet Tonviewer or Testnet Tonscan.  Source: Foundations of blockchain | The Open Network, How to build a transfer - TON Docs

— 2026-04-27 —

Chokhrich.ETH: Hey guy im rust dev  And i want learn about  TON I need roadmap   How can help me

TON Support: TON offers various resources for developers, including those interested in Rust. Here's a roadmap to help you get started:  1. Understand the Basics of TON:  *   TON Overview: Start by understanding what TON is, its distributed platform for storing data...  and code, and how it runs computations and hosts smart contracts.  2. Explore TON Development Resources:  *   Documentation for TON Developers: This section provides detailed documentation, best practices, and technical insights for developing industrial-grade smart contracts and global market applications. It also serves as a manual for improving blockchain software and upgrading TON protocols. *   Guidelines for External Developers: If you're new to blockchain, these guidelines offer a practical introduction to the TON tech stack, including how to run nodes and set up sample projects.  3. Specifics for Rust Developers:  *   Rust Node Quick Start: You can deploy a TON Rust node using the Helm chart. This quick start guide provides instructions for installation and deployment, including enabling liteserver and JSON-RPC ports.  4. Smart Contract Development:  *   Writing Your First Smart Contract: The documentation includes a guide on writing your first smart contract, covering prerequisites like basic programming knowledge and familiarity with a command-line interface. *   Blueprint Development Toolkit: You can use the Blueprint development toolkit for smart contracts.  5. Additional Learning Resources:  *   Other Resources: TON offers various learning materials, including articles, videos, interactive learning, and code playgrounds. You can find tutorials on working with TON wallets, writing smart contracts, and building web clients.  6. Community Support:  *   TON Docs Club chat: If you have questions related to TON documentation, you can ask them in the TON Docs Club chat on Telegram.  By following these steps, you can progressively learn about TON and how to develop on it using your Rust background.  Source: TON overview - TON Docs Source: Documentation style guide | The Open Network Source: Your first smart contract - TON Docs Source: Blueprint overview - TON Docs Source: Other resources - TON Docs Source: How to contribute | The Open Network (reply to 179644)

testertesterov: Hello  It doesn't work today either. (reply to 179609)

— 2026-04-28 —

xylica: the node synchronization issue has only gotten worse after the update

Tim: Agentic Wallets on TON: enabling AI agents with dedicated on-chain wallets  TON Tech introduces Agentic Wallets — an open, self-custodial standard that lets AI agents manage funds and send transactions on TON without requiring user approval for every transaction, while keeping full user control. Each agent operates a dedicated on-chain wallet funded by the user, with no intermediary involved.   Getting started is straightforward: a user asks their agent to create a wallet, funds it and confirm setup. From there, control is clearly separated — the user retains ownership through their main wallet, while the agent can transact only within defined limits. Funds can be withdrawn at any time and access can be revoked.   The standard works with existing TON wallets — requires no upgrades, and integrates without vendor lock-in, allowing developers to implement and manage their own setups independently. It is compatible with leading AI models and agent frameworks, and includes MCP & CLI for building and managing agent workflows.   In Telegram, this becomes immediately actionable. Bot API and recent bot-to-bot communication allow agents to interact autonomously. Agentic Wallets extend that foundation: agents on Telegram can now not only communicate, but also make payments within the chat interface.   Launch an AI agent with Agentic Wallets (forwarded from TON Tech)

Andrey: Been running on-chain monitoring for TON DEX tokens over the past few weeks.  One pattern we keep seeing: Unicode spoof tokens using invisible characters to mimic USDT/TON.  Example from yesterday: – Token name: "USD­𖩋" (looks like USD) – Contains: soft hyphen (U+00AD) + obscure Unicode block – Contract: EQDaUKQwEAx4mv_z7m-aJyhggbwmoizJwPGSv6_XQlvyATvh  We've caught 23 of these in the past 7 days automatically via normalized Unicode detection.  Anyone else tracking this? Curious if wallet UIs are doing client-side normalization or relying on contract metadata as-is.

xylica: i think you sent the wrong contract address, but why are you monitoring those tokens, just curiosity? i have fully indexed about 880k jetton masters if you're interested in getting more data (reply to 179709)

Faylen: hey, want to flag something about v2026.04-1. submitted two reports to blockchain contest round 2 - one 3 hours after the contest went live on march 13, second one 14 hours after. broadcast-twostep memory exhaustion (unbounded decoder map) and broadcast-fec missing eviction (max_fec_bcasts defined but never enforced). marked Duplicate around march 25-27, which per contest verdicts means "we are already aware of the issue". fix landed only in v2026.04-1 release on april 28 ("broadcast limiting and twostep broadcast parameters" per changelog) - one month after contest deadline, three weeks after Catchain 2.0 mainnet activation on april 9, and after the recent public overlay incident. how did known issues from late march not make it into the fix before new consensus went live on mainnet? also any update on contest results announcement?

Andrey: Good catch on the contract — that was a different spoof from the same day.  We're tracking because scam tokens with Unicode spoofing are actively draining users on TON DEX  platforms. We built an automated detector that flags them before they get traction.  880k jetton masters is impressive — would be very useful for cross-referencing. Are you building something on top of that index, or is it more of a research dataset? (reply to 179711)

xylica: yup 880k tokens since block 20m, basically all existing tokens unless my indexer miss some data, we're building a trading bot (reply to 179714)

Andrey: That's exactly the kind of infrastructure we want to integrate with.  We're building a Webhook API — trading bots register a URL and get a POST the moment our detector flags a token: Sybil clusters, Puppet  Masters, dump probability.  Sub-50ms from detection to webhook delivery. Would that be useful for your bot? Happy to give early access. (reply to 179715)

— 2026-04-29 —

Ryo: Hi guys, I have a total beginner question about the withdraw_from_single_pool command.  Is this command only available in mytonctrl? Also, who can actually use it? Is it strictly for the validator, or can anyone just send this message?  I'm also wondering about partial withdrawals. If there is 1M TON staked in the pool, can I use this command to withdraw just 50k TON?  Lastly, if the validator runs this command, does the money go to the owner immediately? What happens if the funds are currently locked in a cycle? Does it just wait and automatically withdraw to the owner when the cycle ends?  Thanks for the help!

TON Support: The withdraw_from_single_pool command is used within mytonctrl to withdraw Toncoin from a single-nominator pool. This command can be used by the validator or the owner, as configured.  Here's a breakdown of your questions:  *   Availability: This...  command is indeed used within mytonctrl. *   Who can use it? It's primarily for the validator to return delegated funds or distribute rewards, or for the owner to withdraw their funds. The validator wallet must be active and funded to initiate withdrawals. *   Partial withdrawals: Partial withdrawals are *not* supported. Only full withdrawals are possible with this command. If there is 1M TON staked, you cannot withdraw just 50k TON using withdraw_from_single_pool. *   Withdrawal timing and locked funds: The command issues an immediate withdrawal request and executes within the current cycle. If funds are currently locked in a cycle, the withdrawal will be processed once the validation cycle completes. The funds are then transferred to the owner's wallet.  Source: Nominator pools - TON Docs, Nominator pool | The Open Network, Single nominator pool contracts - TON Docs (reply to 179778)

Ryo: Then, is there any way to make a partial withdrawal from a single nominator pool? (reply to 179779)

TON Support: No, partial withdrawals are not supported for nominator pools. Only full withdrawals are allowed. When you send a message to the nominator pool contract with the comment "w" and 1 TON for fees, it will execute a full withdrawal if funds are available. If not, a withdrawal request is queued.  Source: [Nominator pool | The Open Network](https://docs.ton.org/v3/documentation/smart-contracts/contracts-specs/nominator-pool#:~:text=Deposits: (reply to 179785)

Ryo: I was asking about the Single Nominator case, not the Nominator Pool. (reply to 179786)

TON Support: You are correct to distinguish between the two. My apologies for the oversight.  For a Single Nominator Pool, the owner can withdraw funds at any time. The withdrawal process involves sending a message with a specific opcode (0x1000), a query ID, and...  the withdraw amount. This indicates that partial withdrawals are possible for single nominator pools, as you specify the amount to withdraw. The nominator contract will leave at least 1 TON in the contract.  Source: [Single nominator pool | The Open Network](https://docs.ton.org/v3/documentation/smart-contracts/contracts-specs/single-nominator-pool#:~:text=In (reply to 179787)

Ryo: In that case, is the "withdraw_from_single_pool" command in Single Nominator - MyTonCtrl a command that allows partial withdrawals?  https://docs.ton.org/ecosystem/nodes/cpp/mytonctrl/pools#withdraw_from_single_pool (reply to 179788)

TON Support: Yes, the withdraw_from_single_pool command in MyTonCtrl for Single Nominator pools does allow for partial withdrawals.  The syntax for the command is: withdraw_from_single_pool <pool-addr> <amount-ton>  As the documentation states, this command "Issues...  an immediate withdrawal request against <pool-addr> for <amount-ton> TON." The presence of the <amount-ton> parameter explicitly indicates that you can specify the amount you wish to withdraw, thus enabling partial withdrawals from a single nominator pool.  Source: [Nominator pools - TON Docs](https://docs.ton.org/ecosystem/nodes/cpp/mytonctrl/pools#:~:text=Syntax (reply to 179789)

Ryo: Thank you.   In addition to this, I have a few more questions. Is this command only available through MyTonCtrl? Can anyone send this message, or is it only possible for the Owner or Validator? (reply to 179790)

TON Support: Based on the documentation:  1.  Is this command only available through MyTonCtrl?     The withdraw_from_single_pool command is documented as part of the MyTonCtrl toolset for "Single nominator pool operations (single-nominator mode)". While MyTonCtrl...  provides a convenient interface for these operations, the underlying mechanism involves sending messages to the single nominator pool smart contract. Therefore, it's possible to perform these actions without MyTonCtrl if you directly interact with the smart contract, for example, by generating and sending a transaction. However, MyTonCtrl simplifies this process.  2.  Can anyone send this message, or is it only possible for the Owner or Validator?     For single nominator pools, withdrawals are restricted to the owner only. The documentation explicitly states: "The owner can withdraw funds at any time; withdrawals are restricted to the owner only." It also mentions that "The validator's hot wallet cannot withdraw or steal funds."  Source: Nominator pools - TON Docs and Single nominator pool contracts - TON Docs (reply to 179791)

Matias Ochoa: Hey hey! We're putting together a curated group of Web3 people to connect with some of the biggest crypto conferences in 2026. Speakers, founders, builders, event people. Just matching the right people with the right opportunities. If you're active in the space and want in, we're open for convos!

Blackstreak: Hello Devs!   In our DApp usually connecting via TonKeeper works completely fine without any issues.  However, when the same DApp when connected through MyTON wallet doesn’t seem to work as expected.   Key points to note: both wallet work fine in the Website the only issue is when we open via TMA/Bot.  May I know if anyone has come across this issue?

Slava: Hey! You haven't actually described the issue. (reply to 179808)

Blackstreak: Sorry for being vague. Let me break it down to give a better understanding.  What is working now: 1. We can connect Tonkeeper wallet to our DApp via our Bot/Telegram Mini App. 2. Tonkeeper and MyTON wallet connect properly when we use our website.  Issue:  Wallet connect in the Telegram bot/Mini App when using MyTON wallet is stuck on the loading screen. Even after there was an approval in wallet App.   We have adapted the TON proof solution provided for better security.

Slava: Have you tried looking in the console or network tab to see what's actually failing? (reply to 179810)

Blackstreak: Yes no errors or issues when looked at console.  Website/Localhost works fine.   This only happens in the Mini App. Unfortunately I’m not sure on the process on how can we debug from the MiniApp.   I have found some articles/videos to debug via usb will give it a try. (reply to 179811)

mnemotiv: you can try using old-school way with Eruda (reply to 179812)

mnemotiv: https://github.com/Telegram-Mini-Apps/reactjs-template/blob/master/src/init.ts#L28 (reply to 179813)

mnemotiv: it'll give console logs

mnemotiv: inside mobile device

Blackstreak: Yup just have come across this. Thanks!  Will try it out.

Slava: In Telegram Advanced Settings check the Enable webview inspecting toggle. (reply to 179812)

Slava: Then in TMA: RMB -> Inspect.

Slava: Or you can open your TMA in a web client.

Blackstreak: Thanks a lot! This really helps me up.  Will check the issue further.

Faylen: In summary - strange that Durov downplayed this as just "6x". Looking at the proposal: compute 6x + forward 6x + storage cell_price 3.7x + basechain bit_price dropped to 0. For bit-heavy contracts storage is effectively free now. This is a bigger upgrade than the headline suggests. (reply to 179468)

Tim: If you want to say that with certainty, you need to parse all current contract and check how much they are paying for storage now and how much they’ll pay after update. I think it will be around same 6x (reply to 179835)

Tim: For example for library contracts their storage is effectively 1 cell + 264(+- few) bits, so they go for 750 to 135, which checks out

xylica: hm i haven't thought about library contract is getting cheaper storage fee, isn't there a library fee? (reply to 179838)

Faylen: yeah, true. depends on contract type. cell-heavy like your library example - +-6x. bit-heavy like jetton wallet (~574 bits, 1 data cell with library cells) - +-8x. average across network probably your 6x since simple contracts dominate by count (reply to 179838)

Tim: Not sure what you mean by that. Libraries have no extra fee mechanics.  When you want to make contract with library code you just put special library cell in "code", that's it. Node automatically unpacks corresponding library when executed and only fee you're paying is gas for opening cell.  Maybe you meant fee for storage of main lib code on masterchain. It won't change since fees for masterchain remain the same, but that storage is only paid by library maintainer(deployer in most cases) (reply to 179839)

— 2026-04-30 —

Kernel System ☕: /rules

Kernel System ☕: Hi everyone. I'm doing a little research on the UX of TON translations, not promotional.  When someone sends you a TON address for a payment/donation/service on Telegram, how do you usually verify that it's the right person's address and not a fake or copy-pasted error?  I'm interested in understanding the current scenario: address book, manual verification, test translation, TON DNS, no verification at all?

Teemu | 機器人🪽: Hey guys, i have a site using ton connect, it works pretty ok, but when trying to go there on Tonkeepers browser, it flags as a scam site and doesnt open the page

Slava: To clarify, TON is using CRC16 checksum to protect against random typos, not to mention that typing address manually is probably the last thing someone would do. To distinguish two addresses it's practically enough to confirm several last characters of the address. This solves 99% of the problems, if it's not a scam attempt of course. The key point is getting the address from the trusted source. For dApps using wallet integration or QR codes eliminates this issue entirely. (reply to 179853)

xylica: i wouldn't agree with that, many wallet interface only display the first and last 4-5 characters of wallets and it's very trivial to brute force contract address to impersonate addresses (reply to 179878)

xylica: impersonated addressses spam everyone all the time

Slava: You've missed my point ^ (reply to 179878)

Kernel System ☕: Yeah, that makes sense — I’m not really looking at random typos, CRC/checksum already helps there.  The scenario I’m trying to understand is more P2P/Telegram-based: someone sends an address in chat for a service, NFT, username, donation, etc. The question is less “did I mistype the address?” and more “is this actually the receiver’s intended address, from a trusted source, and not a spoofed/poisoned/copied one?”  Do people usually solve that by checking last chars, using address book, TON DNS, QR/wallet integration, sending a small test transfer, or just trusting the chat? (reply to 179878)

Slava: You don't trust the chat, you trust the sender.

Kernel System ☕: Right, that’s a good distinction.  So in practice the trust anchor is the person/account/channel that sends the address, not the address itself.  I’m trying to understand the messy cases around that: hacked accounts, impersonators, copied addresses from history, fake support/admins, or situations where the receiver wants to give the sender a clearer “this is the payment I intended” flow.  Would you say the main unsolved problem is identity/trust of the sender, rather than address verification? (reply to 179885)

Slava: Yes, this is a key issue that needs to be solved first. The second part of the problem is that the sender can send the wrong address herself (e.g. stale clipboard). (reply to 179886)

Kernel System ☕: Yeah, that distinction is helpful.  So if I understand correctly, the problem splits into two parts:  1. verifying that the person/account sending the address is actually the intended receiver; 2. avoiding mistakes during the actual transfer, like pasting/selecting/sending to the wrong address.  In real user behavior, which one do you think causes more issues in TON today? Identity/trust problems, or transfer execution mistakes? (reply to 179887)

Slava: Usernames / TON DNS is actually a reasonable solution for both parts of the problem.

Kernel System ☕: Also, do people commonly use small test transfers in TON for larger P2P payments, or is that mostly uncommon?

Slava: This is statistics that I don't have, sorry.

Kernel System ☕: Got it. So would you say TON DNS/usernames are enough for most P2P payments, or do people still use small test transfers / extra confirmation for larger payments? (reply to 179889)

Slava: This is always a good idea for big transfers to be 100% sure. Especially in TON where network fees are small negligible and transactions extremely fast. (reply to 179893)

Slava: TON doesn't require that. 1 MC block is enough for confirmation. (reply to 179893)

Kernel System ☕: Got it, that’s helpful.  So for large P2P transfers, a small test transfer is still a reasonable user practice, not because TON needs many confirmations, but because the sender wants to verify the destination/payment intent before sending the full amount.  And technically, after 1 MC block the confirmation is enough? (reply to 179895)

Slava: That's what I've said, yes.

Teemu | 機器人🪽: Kinda sounds like someone is building a system to sk-am people( msg got deleted for a word)

Slava: Then it's a good point to remind people about the best practices. (reply to 179899)

Slava: No matter the security measures, it always comes down to the human factor and education.

&rey: for an emoji, to be clear. (reply to 179899)

Slava: Gods... Unacceptable! This should be punished by death... (reply to 179902)

— 2026-05-01 —

Marsina: emojis make things fun and engaging imo :)

Anthony: How MCP enables on-chain actions for agents on TON  We publicly announced Agentic Wallets on TON — an open, self-custodial standard that lets agents manage assets through dedicated wallets. But just having a wallet isn’t enough. For an agent to use TON, it needs to be able to find and connect tools for interacting with the blockchain.   That’s why we built mcp.ton.org — a simple entry point for connecting AI agents to TON. MCP gives agents access to tools for working with the blockchain, while skills provide ready-to-use instructions. A user copies a single command, and the agent gets a ready way to work with the blockchain. All skills are open and available in the ton-org/skills.   Now developers have a ready-to-use execution layer for agents on TON. After connecting MCP and installing skills, an agent can check balances, send transactions, swap tokens, work with NFTs and execute more advanced scenarios like buying xStocks or managing Agentic Wallets. All actions are built from reusable primitives and executed through MCP, which allows developers to move directly to building agent logic.  Connect MCP and give your agent access to actions on TON (forwarded from TON Tech)

Sapog: Hi, so I made SDK for web3 and can't tell it here, right?

Mirka: You can if it's free open source ton SDK I guess (reply to 179974)

Sapog: its on npm yeah (reply to 179975)

&rey: What does it contribute to the space?

Sapog: just PQC cryptography with easy implementation on TON (reply to 179978)

mnemotiv: Winternitz signatures? (reply to 179979)

— 2026-05-02 —

Sapog: no, WOTS hash-based signatures, whereas I did key exchange and with E2EE messaging (reply to 179983)

Andrey: built a zero-dependency Python module for parsing TON  events and detecting scam patterns — extracted from our  security scanner  just added unicode spoof detection: catches invisible  Hangul Jamo and zero-width chars that scammers use to  fake USDT/TON token names. caught 15+ of these in  production over the past month  also added raw opcode decoder for payloads  no pip install, just copy one file. search GitHub:  ton-semantic-decoder

Alexey: that's just simple boring wrapper for tonapi events, I bet tonapi has similiar if not better scam detection there (reply to 179997)

Andrey: TonAPI explains what happened, and we're covering what's about to happen—we've detected over 15 counterfeit USDT tokens and three coordinated dumps before they happened. t.me/tonwise_intel — live stream if you're interested.

ttradingg: has anyone worked on wallet automation (sends + staking) on TON ETH and SOL?

Александр: Good day to everyone!  Tell me, who can conduct or are there automated mechanisms for auditing smart contracts?  What is the smart contract: A small contract written in tact, acting as an escrow account in an NFT marketplace. Supported operations: - creating an NFT purchase request (reserving TON by the smart contract) - selling NFT (sending NFT to the smart contract and receiving reserved TON by the seller) - buyer receiving NFT (sending NFT to the buyer)  Ideally, for free or up to $1000.

Andrey: Try this one: https://t.me/tondev_eng/179442 (reply to 180003)

Александр: Thank you! (reply to 180004)

Andrey: Regarding TON specifically, what type of automation are you considering? We've built quite a bit of blockchain monitoring infrastructure on TON, and we'd be happy to share what worked and what didn't. (reply to 180001)

— 2026-05-03 —

Aleksei: I’m dev  looking to join a project

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: Gm. I built a Cocoon client in Go, It follows the same wire protocol and contracts interface as the existing C++ client. It’s cross-platform, with a simple standalone CLI. I named it Gocoon.   Gocoon (Cocoon Client in Go):  https://github.com/TONresistor/gocoon

xylica: all these notifications from 2 nodes in 24 hours

— 2026-05-04 —

Илья: Is there any way to share .ton website to https domain?   Like.. Proxy? Bridge? website.ton.shareton.com -> something like this

TON Support: TON Proxy acts as an HTTP-to-ADNL bridge, enabling ordinary web browsers to access TON Sites. It functions as a forward proxy for clients and a reverse proxy for servers hosting TON Sites. This allows for the resolution of .ton domain names to ADNL addresses for routing requests.  Source: TON Proxy - TON Docs (reply to 180066)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: Well, we can't reply to any other messages in the group.  To respond to the message above regarding access to Tonsites via HTTPS bridges, here is a list of a few of them:  .ton.resistance.dog  .ton.website .ton.run  .ton.sc  .ton.go

Felix: Hello everyone! I want to make my own testnet wallet as a mini app for Telegram, but I don't know much about coding or design. I'd be really glad if someone could help me out :3

&rey: Fixed this issue in mod bot; thank you for bringing it to our attention. (reply to 180087)

— 2026-05-05 —

Fardin: It's going to be quite difficult for you to vibe code a wallet in TON. Most of the data in the official TON docs is new (less than 2 years old), and LLMs are not trained on that data very well. Everything is changing rapidly, so it's going to be a very hard journey for you. (reply to 180104)

99% KevHasMev: Hey guys, I am looking to run a pruned TON node, so for example only the past twoyears of historical archive data - can you please tell me an estimate for the amount of storage needed to run a pruned node with only 2 years of historical data? I am looking to purchase a VPS to run it on and I am not sure which storage capacity to buy.

TON Support: While full and validator nodes generally require about 1 TB of disk space, archive nodes, which store the complete block history without pruning, need around 12 TB.  For a pruned node, you would be operating closer to a full node, which prunes the state...  of the TON blockchain to manage data volume effectively. The documentation states that full nodes keep only the latest part of the blockchain state.  To specifically configure a pruned node to keep 2 years of historical data, you would utilize the gc.archives_life_time_hours setting in the node configuration, setting it to 17520 (2 years * 365 days/year * 24 hours/day). While the exact storage for this specific configuration isn't provided, it would be significantly less than an archive node's 12 TB and more than a standard full node's 1 TB, as you're retaining a larger history than a typical full node.  Source: Overview - TON Docs, Node configuration reference - TON Docs (reply to 180147)

TON Support: While full and validator nodes generally require about 1 TB of disk space, archive nodes, which store the complete block history without pruning, need around 12 TB.  For a pruned node, you would be operating closer to a full node, which prunes the state...  of the TON blockchain to manage data volume effectively. The documentation states that full nodes keep only the latest part of the blockchain state.  To specifically configure a pruned node to keep 2 years of historical data, you would utilize the gc.archives_life_time_hours setting in the node configuration, setting it to 17520 (2 years * 365 days/year * 24 hours/day). While the exact storage for this specific configuration isn't provided, it would be significantly less than an archive node's 12 TB and more than a standard full node's 1 TB, as you're retaining a larger history than a typical full node.  Source: Overview - TON Docs, Node configuration reference - TON Docs (reply to 180147)

TON Support: While full and validator nodes generally require about 1 TB of disk space, archive nodes, which store the complete block history without pruning, need around 12 TB.  For a pruned node, you would be operating closer to a full node, which prunes the state...  of the TON blockchain to manage data volume effectively. The documentation states that full nodes keep only the latest part of the blockchain state.  To specifically configure a pruned node to keep 2 years of historical data, you would utilize the gc.archives_life_time_hours setting in the node configuration, setting it to 17520 (2 years * 365 days/year * 24 hours/day). While the exact storage for this specific configuration isn't provided, it would be significantly less than an archive node's 12 TB and more than a standard full node's 1 TB, as you're retaining a larger history than a typical full node.  Source: Overview - TON Docs, Node configuration reference - TON Docs (reply to 180147)

Tim: Last two years had most of the activity, so it should take a lot of space. Around 5-6 tb at minimum (reply to 180147)

99% KevHasMev: Thank you tim, much appreciated (reply to 180153)

&rey: Also now, that blocks became more frequent, rate of transactions and corresponding storage requirements might increase even more.

Tim: Wallet team is aware and in process of fixing it (reply to 180160)

z3db24z: ton node still out of sync more than 100 times daily smh

Helena: the testgiver faucet bot seems to be down at the moment

— 2026-05-06 —

Zerox: is there anyone who is looking for TON expert?

Kamronbek: Follow this https://t.me/tonhunt (reply to 180249)

Czowiro 🐻: GM guys. Setting up a Rust RPC node for my bots. Specs: 128GB RAM, 1TB NVMe. Is 1 Gbps unmetered bandwidth enough to handle the network without getting out of sync, or should I look for a 2.5G port?

Crydex: I wanne know this to but you can test it out (reply to 180270)

Slava: FYI. Rust node is not recommended for production. (reply to 180270)

Dmitriy: There is a chat about Rust node specifically https://t.me/ton_rust_node_chat (reply to 180270)

Codax $PLAN: Hello guys

xylica: has anyone actually figured out how to mitigate the out of sync issue yet? we got two local nodes and 4 3rd party node and a load balancer on top of them that actively select the node with latest master block, but lite queries "out of sync" is still getting out of control, even after multiple retries for getAccountState

xylica: it's not like we're running our node on potatoes either, can TF do something about this issue

Kuiper: Good Morning! Any channel or tutorial links specific to jetton? I was onboard on Solana to launch a coin but now TON appears attractive so I am thinking to switch and try building here

Alex: Hey mates. Is it something wrong with TEstnet right now? I mean, no txes are passed.

TON Support: There are multiple incidents reported for toncenter_v2_testnet which might be causing issues with transactions. Some of the errors include "LITE_SERVER_UNKNOWN: cannot compute block with specified transaction: cannot find block" and "LITE_SERVER_UNKNOWN: specified mc block is older than block's masterchain ref". These issues have been recurring. (reply to 180284)

&rey: There are several jetton-related topics on https://docs.ton.org. (reply to 180282)

Kuiper: Thank you (reply to 180286)

Kuiper: Do we have a discord

&rey: No. (reply to 180289)

Jaкe ~: What happened to the admins' ton verification badges?

&rey: Not relevant to this chat. (reply to 180294)

&rey: As a rule of thumb, check twice whoever is reaching out to you. Admins never DM first.

Tadeusz: Hi! Looking for advice on running TON Center API v3 (toncenter/ton-indexer) with the RSquad Rust node. The toncenter index-worker reads RocksDB files directly from the C++ node's /var/ton-work/db and parses TL-B schemas. Does anyone know if the Rust node uses a compatible on-disk DB layout, so the worker can read it as-is? Or is there an indexer / v3-compatible solution that works with the Rust node? Goal: deploy a fullnode + liteserver in Kubernetes via the RSquad Helm chart and serve v2 / v3 / v4 APIs from it. v2 and v4 should be straightforward over ADNL, but v3 is the question. Thanks!

TON Support: The TON Center API v3 provides access to the TON blockchain through an indexed data layer. It works by reading raw data from a node's RocksDB storage, parsing and decoding it, and then storing it in PostgreSQL. The TON Rust node is an alternative implementation of a TON full node written in Rust, designed for containerized environments and protocol-compatible with TON.  Source: Overview, Blockchain nodes overview (reply to 180298)

Slava: https://t.me/tondev_eng/180274 (reply to 180298)

Tadeusz: That’s unfortunate, thanks! Could you please tell me how much disk space a TON archive node and the PostgreSQL database for the v3 indexer currently require? (reply to 180300)

Slava: Around 16T zfs compressed. (reply to 180301)

Алексей: Hello everyone. What is status of testnet? Is it works well?

TON Support: The TON testnet (toncenter_v2_testnet) is currently experiencing some issues. There are multiple incidents with 500 Internal Server Errors, related to getTransactionsStd, getBlockHeader, and lookupBlock. These errors indicate problems with the lite servers being able to compute blocks or find transaction information. (reply to 180303)

Sensei: Any ton developer who's experienced with tonapi, liteservers?

Merlin: what do you need? (reply to 180316)

WH: Is there mev on TON? and if yes does anyone know an antimev provider or solution?

TON Support: The documentation acknowledges that MEV-style front-running is possible on TON because all pending messages are publicly visible in the mempool, allowing an attacker to observe and act on pending transactions. The recommended mitigation is at the contract...  level: include critical parameters (like the recipient address) inside the signed payload and implement replay protection. The documentation does not mention any specific anti-MEV provider or service.  Source: Smart contract security techniques (reply to 180338)

Blackstreak: May I know if this is resolved or would still expect some delays?   Where can I find such news in near future for my reference if something like this happens again? (reply to 180304)

TON Support: There are several resources where you can find news and updates regarding TON network incidents:  *   https://t.me/tonstatus — For notifications and action requests relevant to mainnet validators. *   https://t.me/testnetstatus...  — The equivalent channel for testnet-related updates. *   https://tonstat.us/ and https://status.toncenter.com/ — Live status dashboards that provide real-time information.  Source: Network status (reply to 180340)

— 2026-05-07 —

​Мухаммад: Good Morning! Any channel, docs, or tutorial links specific to Jetton and TON smart contract development?  I was initially learning on Solana, but TON is starting to look very attractive, so I’m thinking about switching and building here instead.  My goal is not to launch a coin right now — I mainly want to learn TON smart contract development, FunC / Tact, Jettons, best practices, and deployment tutorials.

Alex: docs.ton.org

Alex: You don't need Func/Tact. Learn Tolk. it is defacto standard for TON

TON Support: Welcome to TON! It's great you're looking into developing on this platform.  Here are some resources to get you started with TON smart contract development, including FunC/Tact, Jettons, and deployment tutorials:  Your First Smart Contract:  *   The TON...  documentation provides a comprehensive guide to building, deploying, and interacting with a smart contract on TON from start to finish. This tutorial covers prerequisites, setting up your development environment with the Blueprint toolkit, writing, compiling, and deploying to testnet, and contract interaction.  Development Environment & Tools:  *   Blueprint Development Toolkit: This is the recommended toolkit for smart contract development on TON. You can quickly set up a new project using npm create ton@latest. *   IDEs and Editor Plugins: The documentation mentions IDEs and editor plugins under the contract development section, which can aid in your development process.  Languages:  *   Tolk: The documentation recommends Tolk as a language for smart contract development on TON, providing overviews, basic syntax, idioms, and examples. It also includes information on migrating from FunC. *   FunC & Tact: While Tact is mentioned as deprecated in some contexts, the documentation still refers to both FunC and Tact. You'll find resources related to these languages within the contract development section.  Jettons:  *   The TON documentation includes a section on Jettons under "Standard contracts" and "Tokens," which should cover an overview, metadata, and how they compare to other token standards.  Tutorials & Learning:  *   The "Other resources" section provides a list of playlists and interactive learning resources, including:     *   "TON Development with Tact" playlist, which is beginner-friendly.     *   TxTracer for tracing and analyzing TON Blockchain transactions.  You can find a comprehensive index of the documentation here: https://docs.ton.org/llms.txt  Happy coding!  *   Source: Your first smart contract - TON Docs *   Source: Blueprint overview - TON Docs *   Source: Your first smart contract - TON Docs *   Source: Other resources - TON Docs (reply to 180389)

— 2026-05-08 —

7eo: Launched a Chainlink-like primitives for TON  https://github.com/titon-network  Kronos — decentralized cron for smart contracts   Fortuna — fair on-chain randomness via threshold-BLS   AutomaTON — node operator: stake once and earn on both Kronos and Fortuna    MCP server + plugin for Claude Code  Smart contracts passed a TSA audit with 0 findings.   SDKs available for TypeScript (npm) and Python (PyPI). MIT licensed.  Try it in 30 seconds, no TON or wallet required:   npx @titon-network/automaton playground  Kronos is open to everyone — stake and your node joins the rotation.   Fortuna is a closed group (threshold-BLS requires all signers to be known in advance).  Hope it helps some of you

— 2026-05-10 —

Wako: Good Morning Ton dev community, I am looking for ton developers for a ton crypto project, commisioned of course

Thomas: Hi yall lets fking dev

Wako: can you dm me (reply to 180566)

Czowiro 🐻: https://github.com/tonkeeper/opentonapi still working? its not deprecated?

— 2026-05-11 —

Dhereal1: How do I report transactions not spam on ton?

Dhereal1: Hello everyone,  happy new week.

Dhereal1: Pls I have been using real ton to test a payment tools I was working on and with the frequency in transaction of 0.001-0.0001 that happens almost 5min interval, the transaction got flag as spam. Now from the sender-end it will say successfull and from receiver end, it shows received but the value do not reflect and my tonlistener also stop catching the transaction.

jizzy019: if sender send successfully, then you reciever should receive it too (reply to 180629)

jizzy019: wao. I know funC and Tact, have not really learn Tolk. (reply to 180391)

jizzy019: expert??? (reply to 180249)

Dhereal1: Thank you, I found the culprit.  The amounts I was sending is too low and that's why it's marked as spam.  I have fixed that now (reply to 180631)

Umut Can: from base64 import b64decode  data = b64decode(     'te6cckEBAgEAkAABmtoAn2TwajcHs+/qAJCGJdxGlmMMDUqWbpSr9CdppQMp3WY2hkgLzLdC+on9uamXYKJHXP92wpQ+Dy6uGKOkhAMpqaMXZJQKngAAAAkDAQB8YgBkfUxOc+ilDn1RTgCqV3wvKyuS2zQ1SwxHYXBhNzjcISAUBvQAAAAAAAAAAAAAAAAAAAAAAABzdHJpbmd/NYJ1' )  offset = 512 + 32 + 32 bytes_skipped = offset // 8  seqno_bytes = data[bytes_skipped:bytes_skipped + 4]  seqno = int.from_bytes(seqno_bytes, byteorder='big')  print(f"Seqno: {seqno}")  Seqno: 413377668

&rey: is not a stable solution. BOC is similar to archive; you can read it with a library like pytoniq_core.  (Moreover you need to know wallet's version to know where seqno is located in the structure, as some wallets don't even have this concept.) (reply to 180648)

Sapog: Hi  Saw the Acton launch; who's the right person to talk to about security integrations?

— 2026-05-12 —

Perelyn sama: Are there examples of making ston fi swaps with tolk contracts?

TON Support: Tolk is the recommended language for TON smart contracts, and examples of Tolk contracts include basic jetton and NFT contracts. For swaps, you can use the OmnistonSwapProvider.  Source: Tolk language - TON Docs, How to initialize the TON Connect's AppKit - TON Docs (reply to 180712)

Slava: Please refrain from discussing subjects not related to TON development and engineering.

Alex: TON gets a modern smart-contract toolchain.  Start here: https://ton-blockchain.github.io/acton/   Last release includes: • Tolk v1.4 • Acton — unified TON smart-contract tooling  ✓ Native debugger   ✓ Tolk-native tests   ✓ TS wrappers   ✓ Deploy & verification flows   ✓ Coverage, fuzzing & gas profiling   ✓ AI-friendly CLI workflows  Debug real failed mainnet transactions locally in your IDE.  Act on.

— 2026-05-13 —

E3 | Procur3: Hey, we also have 50+ audit firms on our security marketplace for TON builders.  there are boutique audit shops with Func/Tact/Tolk experience that can accomodate any budget - procur3.io  Hope this helps also (reply to 180003)

Nyonyo: I was trying to swap ton to a another token but mistakenly sent to another ton address (i need help recovering it)

Hayate: Ahh are you sleeping when making transaction   I hope is not that much (reply to 180764)

Nyonyo: Its something (reply to 180765)

&rey: TON transactions are final. TON cannot be moved from an account except by that account's action. (reply to 180764)

&rey: Perhaps whoever received it (if you have contact data) can return.

Hayate: He can copy that same address and send low amount and beg the person to resend it back   Might got lucky if he is good guy (reply to 180768)

— 2026-05-14 —

Mykhailo Tunek: Good morning, I have a problem with my wallet. I send USDT to my TON wallet created trough app and by hash the funds has been credited but the wallet countinue result inactive. I tried another time to send a small amount of ton but is not active yet. But checking the wallet have that balance I sent.

Mykhailo Tunek: Someone can suggest me what can I do?

&rey: It's normal. Once you have TON, use normally. (reply to 180806)

Mykhailo Tunek: So I should retry to make another deposit of TON?

&rey: Not if TON balance is already nonzero. (reply to 180815)

TON Support: The withdraw_from_single_pool command is used in mytonctrl to withdraw Toncoin from a single-nominator pool. It can be used by the validator or the owner, as configured. This command issues an immediate withdrawal request that executes in the current...  cycle.  Regarding partial withdrawals, they are not supported. Only full withdrawals are possible.  If funds are currently locked in a cycle, a withdrawal request will be created and processed automatically after the current validation round ends, and the funds will then go to the validator wallet or owner.  Source: [Nominator pools - TON Docs](https://docs.ton.org/ecosystem/nodes/cpp/mytonctrl/pools#:~:text=Warns (reply to 179778)

Mykhailo Tunek: Balance through TON scan is a bit more than 0 but in the app no transactions. I sent it three months ago

&rey: 0.01 TON should suffice. Just send any transaction you want, wallet is auto-deployed for that. (reply to 180819)

Mykhailo Tunek: Ok but stil be inactive. So I retry from another wallet

&rey: *any outgoing transaction* (reply to 180820)

Mykhailo Tunek: Ok but I have a probem with the app balance hasn't been updated. It's 0 but trough explorer that transaction has been received

Hayate: Report it (reply to 180823)

Mykhailo Tunek: With whom?

Андрей: Good day! Acton CLI + Go in Telegram: Local FunC --> Tolk Migration in Seconds I built an autonomous Go-based AI Agent that turns a Telegram chat into a remote sandbox for TON smart contracts.  Sorry, I can't forward the demo video. I don't have permission. So, in words:  1. Drop a .fc / .func file directly into the chat. 2. The bot caches the code in RAM (with a 1-hour auto-cleanup to prevent memory leaks). 3. Check button: Compiles the code on the fly via acton compile and returns an interactive, real-time syntax error log. 4. To Tolk button: Triggers the translator directly and returns a clean, ready-to-use .tolk file as a document.  The stack under the hood: Golang, Node.js environment, Acton CLI, ClickHouse for end-to-end analytics logging, and a systemd service for seamless autostarts.  Everything runs locally on a VPS—no external paid APIs, no workarounds. It's a lifesaver when you need to quickly audit a contract or migrate old methods to the new syntax right from your phone.  If you want to deploy a similar turnkey DevTools agent for your team—feel free to DM me, I can help with the setup!

— 2026-05-15 —

deffox: How start auction to expired domain?

TON Support: If a domain has not been renewed for over a year, anyone can trigger its release by calling dns_balance_release on the contract with a minimum payment. The domain then re-enters auction for one week, with the caller as the initial bidder.  Source: [TON DNS - TON Docs](https://docs.ton.org/foundations/web3/ton-dns#:~:text=Categories (reply to 180885)

deffox: Is there a detailed video? (reply to 180886)

Sam | TrafficPlaza: Hey guys. Something I keep seeing with Telegram Mini Apps is that many teams want more users, but the real problem is usually what happens after the user opens the app. Curious how builders here think about this. What do you check before scaling traffic?

Slava: Hey. What do you mean? (reply to 180901)

Sam | TrafficPlaza: I mean what happens after the user opens the mini app. If users don’t understand what to do, don’t get value fast, or don’t have a reason to return, then more traffic just brings more drop-offs. So before scaling traffic, I’d check the first session, first action, reward/value moment, and return reason. Not against traffic at all. Just saying the app should be ready to turn traffic into activity. (reply to 180904)

Slava: Sure. But this question is more about traction, product development (CustDev) and analytics. Not related to the TON/TMA or programming per se. (reply to 180905)

Sam | TrafficPlaza: Fair point, Slava. Thanks for clarifying. I was looking at it from the TMA builder/product side, not really as a programming topic.  I’ll keep it more technical here. (reply to 180907)

z3db24z: Guys, honest question. How do I fix my node being out of sync every single f minute? My server: 128 cores, 15TB NVMe, 768GB RAM. If this keeps getting out of sync daily, I'm gonna lose my sh.

Slava: My point is not strictly about enforcing the chat rules. The point is that this is a wider topic. You may find more information in CustDev-related resources, that's all. (reply to 180909)

z3db24z: Anyone else facing the same problem?

Sam | TrafficPlaza: Got it. Yeah, makes sense that it’s more of a product/CustDev topic than a dev topic. I was just looking at it from the TMA builder side. Thanks for clarifying. (reply to 180911)

z3db24z: holy out of sync more than 200times a day

— 2026-05-16 —

JANE-: Yes (reply to 180912)

Timmy Dipshit: Hello are we allowed to share projects or bots here to ask for help?

Timmy Dipshit: I have two nodes that keep going out of sync and I’m not sure how to solve it

— 2026-05-17 —

TON Support: Compilers from statically typed high-level smart-contract languages to TVM code can be implemented, and most TON smart contracts are expected to be written in such languages. A precompiled smart contract can have a native C++ implementation in the validator node. This improves performance and reduces computation fees.  Source: [Telegram Open Network Virtual Machine - TON Docs](https://docs.ton.org/foundations/whitepapers/tvm#:~:text=Such

testertesterov: Yes. That's what's needed. It's easier to learn Rust than Tolk.

testertesterov: In my opinion, Solana is developing faster in this direction than TON. Programmers are satisfied. They don't need to write in Tolk, but can write in their favorite Rust and C/C++.  Fift->FunC->Tact->Tolk->[What next?] :)

Petr: Nothing, we've come a long way to Tolk (reply to 181011)

Danil: > but can write in their favorite Rust and C/C++. That’s a highly debatable argument; Rust, with its Borrow Checker, and even more so C++, with its UB, is far more complex than Tolk. What’s more, Tolk is specifically designed for writing smart contracts for TON, which offers far more scope for optimisations and checks. (reply to 181011)

Petr: Tolk is very similar to Rust, and language is not the most difficult thing in TON, the most difficult is the quirks of TON blockchain itself, and Tolk makes these quirks simpler (reply to 181009)

&rey: Something which allows to statically prove facts of how contracts will work, in the same language as those are written — or I'd hope so. (reply to 181011)

&rey: You're looking at the high level wrappings, but TVM bytecode underlies all of the first four. And will underlie the fifth, most probably. (reply to 181011)

𝗖𝗔𝗟𝗠: Tonk (reply to 181011)

Timmy Dipshit: i came up with a workaround, the problem is that one system is 16 cores and the other is 20, so one is literally faster (reply to 180938)

Timmy Dipshit: its too early to share but when i publish a repo ill post it here

— 2026-05-18 —

testertesterov: I think the advantage of Rust is somewhat different. If developers on Solana or TON find themselves in a really bad situation, they can very easily migrate to other projects that use Rust. In the case of Tolk, I cannot say that developers on Tolk are needed anywhere else besides TON.

testertesterov: It is quite likely that TON and Telegram developers will be blocked in Cloude, and we will need our own solution. It could be better than expensive ones. We will be able to choose a multitude of models for agent mode in the IDE.

final: Why?) (reply to 181045)

testertesterov: Analyzing the situation from a marketing perspective, Telegram and TON are completely unnecessary. They create too much competition. They could quite possibly block access. (reply to 181048)

Timmy Dipshit: not sure if anyone has done this yet but the google gemma models are nice for fine tuning, could train one on tolk and use it for smart contract dev (reply to 181049)

testertesterov: As a result, we will save access only to old AI models. At the moment, the Solana team will use the latest AI.

final: Messenger creates too much competition to ai company. Where?? (reply to 181049)

final: You see what you write? Did anthropic or OpenAI ban anyone based on what they do in legal way? Haven’t heard anything about it

testertesterov: A more comprehensive and affordable solution that can be paid for in Stars is needed. There is a huge number of free models already trained on Tolk, but running them requires a GPU cluster, which Telegram has in this case. (reply to 181050)

testertesterov: There have already been cases and they have to bypass restrictions. (reply to 181056)

testertesterov: They act in a complex. They generally don't like it, and it's visible. (reply to 181055)

final: Even though, what stops from using api (pay for use) or create new account? (reply to 181061)

final: Imho this is not a global issue for ton/tg devs. At last ChatGPT exists

Timmy Dipshit: i think complex billing at scale is where it breaks, imagine doing this for 70 users and being used to letting an accounting team handle the payments (reply to 181062)

Timmy Dipshit: its like piracy, not a problem for individuals but hard to scale

Slava: It's not about programming languages and it never was. A good programmer who has a solid understanding of computer science can switch technologies/languages reasonably easy. Languages are tools created for specific purposes and Tolk in this case serves its purpose well.  TON is a unique Blockchain with its own flavor. Using a general purpose language for TON programming doesn't make much sense. (reply to 181042)

testertesterov: Yes. He can say that he knows Rust after many years of programming only in Tolk. (reply to 181068)

testertesterov: Could you tell me if the conversion of a FunC smart contract used in a fragment to the Tolk language has already been carried out using the acton tool? func2tolk tool.

TON Support: Yes, there is a FunC-to-Tolk converter that transforms FunC projects into Tolk using the command npx @ton/convert-func-to-tolk contracts. This tool performs a syntax-level conversion to help migrate contracts to Tolk, rewriting FunC code with one-to-one...  semantics to produce a Tolk version that is close to the original FunC.  However, the converted contract does not utilize modern Tolk features like structures, auto-serialization, or clean message composition. While Acton is recommended for new smart contract projects, this converter assists in migrating existing FunC contracts.  Source: FunC-to-Tolk converter - TON Docs, Write your first smart contract with Blueprint - TON Docs (reply to 181076)

testertesterov: In my opinion, these AI answers do not address the questions asked. Most likely, an old AI model is being used here. The question was completely different. (reply to 181077)

&rey: You still must know that FunC-to-Tolk conversion was present since the earliest versions of the latter, and deterministic (not relying on LLMs in particular). (reply to 181087)

&rey: I don't know of it being embedded in acton, though.

testertesterov: Yes. But the question is about the entry of major players into Tolk. (reply to 181088)

testertesterov: If Telegram team uses exclusively FunC and ignores Tolk, what is its profit.

testertesterov: In TON, as far as I understand, there is only one major programmer, and that is Telegram.

&rey: How would you ascertain this belief? (reply to 181094)

xylica: this person sounds like he has just discovered vibe coding and now he's an expert in technology and AI (reply to 181094)

testertesterov: Only Telegram is happy. Everyone else is complaining about TON and believers are running away. (reply to 181096)

testertesterov: Actually, this story is much longer, but I'm for vibe-coding and I use it more and more :) (reply to 181098)

&rey: From what I see, almost all jetton advances (including DEXes, launchpads and such — there's a lot of contracts and kinds of contracts!) come from other orgs.

V: is there a telegram CI tool or bot for Acton/Tolk projects ?

vangaard: TON Core just doesn't exist i guess. (reply to 181094)

testertesterov: Absolutely. (reply to 181108)

testertesterov: Yes. And now they don't know how to pump up normal volumes. (reply to 181106)

&rey: So they — major programmers — do exist in TON, even while you're adding more information about them. (reply to 181111)

&rey: By the way, this chat is dedicated to how to develop on TON.

testertesterov: I think with the advent of AI, and especially the agent mode, it has become uninteresting to program as before. Many techniques that were previously obtained through chat communication have gone into the past, and one needs to adapt to the new AI reality much faster. (reply to 181115)

&rey: If so, your messages should probably contribute to the topic of how to develop (perhaps architect or invent) projects using AI on TON.  Note that off-topic messages can be deleted, and repeat is bannable offense. (reply to 181117)

Timmy Dipshit: Interesting, I might end up making this but I’m not at that point yet, still configuring infra (reply to 181107)

Timmy Dipshit: Do you mean a simple service that alerts you with a bot?

testertesterov: Basically implemented this in the TON AI Core. Will soon deploy to production. Didn't think anyone would be interested in this at all. (reply to 181107)

V: something where you paste repo link and it runs builds tests lints etc (reply to 181120)

Durov: Where can i find developer tools ?

TON Support: Developer tools for TON can be found in several areas:  *   Telegram Mini Apps (TMA): Tools include TMA create CLI, Telegram UI Kit, and Analytics. *   Smart Contract Development: You can use the Blueprint development toolkit, although Acton is now the...  recommended tool for new smart contract projects. *   General TON Documentation: This resource lists various tools for building applications, smart contracts, and running blockchain nodes.  Source: TON documentation; TMA: Telegram Mini Apps overview - TON Docs; Your first smart contract - TON Docs; Write your first smart contract with Blueprint - TON Docs (reply to 181175)

testertesterov: Now you can read how bots communicate with each other in Telegram. In the future, they may learn to trade in TON, and a human will be able to simply observe this as an operator. (reply to 181175)

testertesterov: Builders, who knows about Error 1014 when switching to docs ton org?

TON Support: Error 1014 in the context of TON refers to a "Compute phase VM virtualization error. Reserved, but never thrown." This means it's an error code related to the internal workings of the TON Virtual Machine during the compute phase of a transaction, but...  it's not an error that should typically be encountered.  If you are experiencing this error when switching to docs.ton.org, it is highly unlikely to be a TON VM error, as that would be a client-side issue, not a blockchain-related exit code. It's more probable that you're encountering a network or browser-related error. "Error 1014" is also a WebSocket close code, indicating "abnormal closure," which could point to network connectivity issues or a problem with how your browser is handling the connection to the documentation site.  You might want to try: *   Checking your internet connection. *   Clearing your browser's cache and cookies. *   Trying a different browser or device. *   Disabling any browser extensions that might interfere with website loading.  Source: [Exit codes - TON Docs](https://docs.ton.org/tvm/exit-codes#:~:text=14 (reply to 181201)

testertesterov: I clicked "Start building" and wanted to read the documentation about TVM. (reply to 181202)

TON Support: The TON Virtual Machine (TVM) documentation provides comprehensive information on how smart contracts are executed on the TON blockchain. It covers various aspects, including:  *   Overview: A general introduction to TVM as a stack-based virtual machine....  *   Tools: Information about the tools used for TVM development. *   Instructions: Details on the instruction set of the TVM. *   Builders and Slices: Explanation of these fundamental data structures in TON. *   Continuations: How continuations are used in TVM. *   Registers: Information about the TVM's registers. *   Gas: Details on gas consumption and management. *   Initialization: How TVM initializes contracts. *   Exit codes: A list and explanation of various exit codes that can occur during TVM execution.  You can find more details in the TVM overview section of the official TON documentation. (reply to 181203)

Mohamed: Why you deleted site of stickers and nft2 from site?

testertesterov: I think it doesn't matter. So they deleted it. But generally, there might be a site error. I understood that there is a full refactoring there. (reply to 181227)

Mohamed: Okay thanks (reply to 181232)

SpalilAI: Hey everyone! Does anyone happen to have the limited Telegram gifts as 3D .glb files? Alternatively, do you know where I can find or download them? Thanks in advance!

MonoBit: Hey everyone, Do I need to handle batch message sending for different wallet versions by myself or is there any other simpler way to do that? I want to be able to easily with one api send multiple messages (more than 4) with any version/type of wallet.  [TON_CONNECT_SDK_ERROR] WalletNotSupportFeatureError: Wallet doesn't support requested feature method. Wallet is not able to handle such SendTransaction request. Max support messages number is 4, but 10 is required.

TON Support: The number of messages you can send in a single transaction depends on the wallet version:  *   Standard wallets (v3/v4): Up to 4 outgoing messages. *   Wallet v5 and Highload wallets: Up to 255 outgoing messages (closer to blockchain limitations).  The...  error you're receiving, WalletNotSupportFeatureError: Wallet doesn't support requested feature method. Wallet is not able to handle such SendTransaction request. Max support messages number is 4, but 10 is required., indicates that the wallet you are currently using is a standard wallet (v3/v4) which has a limit of 4 messages, while your transaction is trying to send 10.  You need to ensure that the wallet you are using supports the number of messages you intend to send. If you need to send more than 4 messages, you would require a Wallet v5 or a Highload wallet.  Source: TON transfer | The Open Network (reply to 181241)

testertesterov: I think we need to use the modern version of the wallet. (reply to 181241)

MonoBit: I can't ask my users to use wallet v5. I need to support all types of wallets but the question is how I can make the process easier for my users without development headaches. Is there anything out there with a better dev experience to handle batch transactions for other types of wallets? (reply to 181243)

&rey: v4 and v3 wallets DO NOT support batches of more than 4 transactions at all. You would need to send multiple requests. (reply to 181244)

MonoBit: Can I presign all transactions (grouped in 4) and send them together with multiple signed requests (behind the scene) through TON connect? (reply to 181246)

&rey: If you send 4N transactions, then there will be at least N requests for user to confirm. (reply to 181247)

&rey: Are you sending different assets or TON only but to different destinations?

MonoBit: Sending different assets to one destination (currently) (reply to 181249)

&rey: The best interface would presumably depend on the usecase and necessity of only all or none transactions happening. Could you describe the user's actions and what must result from them, in your app? (reply to 181250)

MonoBit: In return for depositing constituent tokens (assets a-z) I will give user an NFT if all assets arrived to my specific smart contract. My protocol is ok with partial deposits but for a better user experience I needed to send all jettons in one transaction instead of separate batches.

&rey: I don't think it can easily be solved; you may wish to create a popup with grid of NFTs sent and pending so far. (reply to 181253)

testertesterov: I think the most important thing for the user is that the transaction goes through, and beyond that, it doesn't matter. In my opinion, that's it, whether it's v3, v4, v5, it doesn't matter. The main thing is that it's fast.

MonoBit: Thank you. To have a unified interface I may go with this approach for all types of wallets even v5 that can handle more messages (reply to 181255)

&rey: You can also wish to add legacy interface which doesn't even connect a wallet but offers ton://transfer links&QR codes (those are one by one). (reply to 181257)

— 2026-05-19 —

testertesterov: Did you manage to find a ready-made solution? (reply to 181244)

MonoBit: Not actually

NODog: Hi. Gn dev

testertesterov: Yes. To be honest, I am afraid to launch my smart contracts on TON to raise money from venture investors. There are few projects that truly work. Moreover, without support, you can create more problems for yourself. (reply to 181284)

</MEDO>: Use HIGHLOADV3 Contract (reply to 181241)

温馨的 @mvpzy: Yo wassup (reply to 181294)

testertesterov: Trying to integrate transport ADNL plugin to TON AI Core. This is safer than writing smart contracts on Tolk. (reply to 181310)

Fardin: The Tolk was easy to learn if you already know assembly. (reply to 181009)

testertesterov: Yes. I recently managed to write in different versions of assembly. I'm not sure if the code turned out to be safe, but input and output worked, and even floppy disk loading. I think Tolk will have more or less the same experience for me. (reply to 181349)

Fardin: I have this issue too. I cannot say this code is 100% secure because it's not being tested in production by other projects.  Your concern is legit; we are developing in blockchain, and one mistake could easily destroy a company. And AI is just making it worse by reviewing the contracts. (reply to 181350)

testertesterov: Yes. I think hackers are in a more advantageous position. They have the most modern AI tools, while the TON developer community in most cases has old AI tools and possibly even enters requests to AI through the browser. Because AI API is expensive and inaccessible to many. (reply to 181352)

𝚂𝚒𝚛 𝙲𝚑𝚒𝚍𝚒𝚢𝚊 鯨 ⛩️: GM GM everyone, need help with a bug/malware I discovered.

𝚂𝚒𝚛 𝙲𝚑𝚒𝚍𝚒𝚢𝚊 鯨 ⛩️: Why does my questions keep deleting???

&rey: In what product (and, in particular, of what org/company)? (reply to 181390)

𝚂𝚒𝚛 𝙲𝚑𝚒𝚍𝚒𝚢𝚊 鯨 ⛩️: For NFTs but I can't really disclose here. If there's a way to send a private message with all the details? (reply to 181394)

EnCryptoknight ⚔️: Me too, idk why (reply to 181393)

— 2026-05-20 —

testertesterov: I tried converting telemint yesterday using func2tolk. The result is simply terrible. The transition is not smooth at all and feels like it creates more unsafe moments than efficiency.

Petr: Converting one (low-level) language to another (high-level) will never be perfect func2tolk tool covers the work that can be automated, any further refinements should be done manually or through agents with specialized skill (reply to 181439)

Petr: https://ton-blockchain.github.io/acton/docs/agent-skills/func2tolk

testertesterov: I think this generally makes no sense for telemint. They are already doing fine. Converting could create bugs that agents won't see immediately. (reply to 181440)

Petr: Yeah, but for some other contracts it may make sense (reply to 181442)

testertesterov: If I had to write a smart contract for TON from scratch, I probably wouldn't look towards Tolk. Most likely, I would move towards ready-made solutions that have been tested by time. (reply to 181443)

Petr: Okay, what matters most is that the development process is comfortable and enjoyable for you, language isn’t the most important thing (reply to 181444)

testertesterov: I think some time needs to pass for Tolk to accumulate a substantial volume of real examples for a productive environment. Is there already such a thing? (reply to 181445)

Petr: There are almost 1,500 Tolk files from numerous projects hosted on GitHub, which I think is already a significant number. Many large projects on TON also use Tolk in their development. The language is also recommended by the TON Core team. I think this is already enough to develop new contracts on Tolk (reply to 181446)

Petr: And, of course, only Tolk will receive new tools and updates

testertesterov: I think these examples can be used, only if they are for a productive environment, solve real tasks, and are in the official Tolk repository. Otherwise, this could turn into a major mistake. Money loves precision of implementation. (reply to 181447)

testertesterov: Smart contracts are not very large in terms of code. I think the most important thing in them is security, and if the audit was weak, there is a risk of losing everything. (reply to 181448)

Timmy Dipshit: What are the tools for auditing and stress testing tolk contracts like for example eth has hardhat sorry if it’s a bad question I’m new to tolk

Petr: You can use mutation and fuzzy testing in Acton https://ton-blockchain.github.io/acton/docs/testing/overview and TSA for symbolic analysis (reply to 181451)

testertesterov: With fuzzy, you'll have to write automated tests manually. This is necessary, but in this case, there is a risk of missing an important scenario. Moreover, many people here generate tests using AI, and it can also miss important tests.  I tried to find a reliable TSA, but found nothing. (reply to 181452)

testertesterov: I think developers need a comprehensive set of tools for testing smart contracts recommended by TON Core and Telegram.  For example: Misti TSA (TONSEC) Fuzzing Property tests Review External audit  Misti and TSA currently look like third-party solutions rather than native ones from TON Core and Telegram.

testertesterov: But I think the most important step in this process is access to the most modern AI models. Preferably to many and upload the smart contract code entirely for testing. I think many hackers do this now and because of this, irreparable errors in commands occur more and more often.

testertesterov: I went further and loaded the entire Tolk code into the AI context. I found several concerning points that need to be checked. They could lead to unstable compiler operation, memory leaks, and incorrect Fift-code generation.

&rey: You reported the issues, I hope? (reply to 181464)

xylica: he will ask claude to submit a PR with 100K line changes, lgtm (reply to 181482)

testertesterov: Yes. I wrote some points that were discovered. Next, they will be able to write several auto-tests using AI and see the problem. (reply to 181482)

testertesterov: Can anyone tell me why the Tolk language was included in the main ton-blockchain/ton repository?  It's really inconvenient to write bug reports. You always have to specify in the title that it's about the new programming language Tolk and that to download it, you need to download the entire blockchain branch.

7eo: Two more primitives from Titon are live on TON mainnet:  Themis — sealed-bid auctions and MEV-resistant intents. Bids are encrypted with a BLS key and revealed via threshold-decryption.  Phoebe — verifiable on-chain prices. BLS-signed Merkle snapshots every ~30s, 256 feeds, one proof per read.  SDKs on npm and PyPI.  Now we have everything we need to build great and sophisticated projects on TON. (reply to 180498)

Shahboz: Hey everyone, I have a question about a project I'm working on. I'm building a swap system where sending an NFT gives you TON, and sending TON gives you an NFT. Originally, I wanted to handle everything through a single smart contract address that would just return the swapped asset  When I asked some AIs if a single address would get bottlenecked or congested with a high volume of transactions, they suggested using a Router and Vault architecture instead. In this setup, the transfer goes to a Router, which forwards it to a specific vault based on the NFT collection, and then the vault handles sending the asset back to the user   My question is: is this Router/Vault setup the best approach for this, or is there a better/more efficient solution

MonoBit: For a single NFT collection: One contract is enough. TON's actor model means each contract has its own isolated state and message queue — there's no global bottleneck like on Ethereum. However, a single contract still processes one message at a time, so under extreme volume messages will queue. For a typical swap system this is not a real problem in practice.  For multiple collections: Deploy one contract per collection. This is the idiomatic TON approach (same pattern used by Jettons and NFT standards) and gives you true parallelism since different contracts process messages independently and simultaneously.  The Router/Vault architecture the AIs suggested is EVM thinking applied to TON — it's overkill for a single collection and adds unnecessary complexity I think.  These are my thoughts — would love for any TON experts here to correct or add to this. (reply to 181505)

Shahboz: That makes sense, but I specifically need a system that handles 10-20 different NFT collections through a single address. Users must send everything to just one address, not 20 separate ones (reply to 181506)

MonoBit: In that case the Router/Vault pattern is actually the right approach for your requirements. You have one Router contract as the single entry point — users always send to that one address. The Router identifies which collection the NFT belongs to and forwards to the corresponding per-collection Vault (you can keep NFT there in the router and manage it through proxy messages or even sending it to the corresponding Vault), which holds the liquidity and handles sending back TON or the NFT. (reply to 181507)

Timmy Dipshit: whats the scale limit for this design? like if you were to make opensea in ton, does that scale up to thousands of collections possibly? (reply to 181508)

MonoBit: The design scales to thousands of collections, but only if the Router is stateless — meaning it doesn't store a mapping of collection → vault addresses.  If the Router holds a lookup dictionary that grows with every new collection, you'll hit real limits: storage rent gets expensive, and reading/writing a large dictionary on every incoming message slows things down. On top of that, all traffic still passes through the one Router contract, which processes one message at a time (reply to 181509)

MonoBit: The way to avoid this is the same pattern TON's own Jetton and NFT standards use: make each Vault's address deterministically derivable from the collection address. The Router just computes the destination vault address on the fly using the collection address as a seed, routes the message, and touches zero storage. No dictionary, no lookup, no scaling ceiling (reply to 181510)

&rey: Won't Vault presence double the transactions count and complexity for no gain? (reply to 181505)

&rey: There is a consideration that contract'd better know what NFTs it owns, though.

Shahboz: I have another question I also need to implement the reverse flow: when a user sends TON the contract needs to send them an NFT If I use the Router/Vault setup, is it cheaper to send the NFTs back randomly or sequentially (reply to 181513)

&rey: There won't be a sequence of NFTs stored anywhere. (reply to 181514)

Ekaterina: TSA provides several standard security checkers. Right now, it is available only as a Blueprint plugin, but I hope we will integrate with Acton in the future. There are tutorials on each checker. They can be run with just one command, no need for any manual work.  Also, there is an agent skill that works with TSA. There was a blog post about it in TON Dev channel not long ago. It can perform some more complicated checks then the ones from the plugin. But the quality heavily relies on your LLM (reply to 181453)

&rey: (said post is also here as https://t.me/tondev_eng/179442)

— 2026-05-21 —

testertesterov: Yes. We have old LLMs. Smart contract hackers use new LLMs. I think mostly it depends on the LLM. The rest is adaptation to specific TON tasks. (reply to 181523)

Petr: Why? Everyone has access to the latest OpenAI models (reply to 181532)

testertesterov: Deep analysis using the latest models is very expensive, and not all models are available to us. Some models are hidden. OpenAI has even made the context in the browser very small. For the most part, they want to monetize their models, and the quality is so-so. (reply to 181533)

testertesterov: In terms of freedom and better quality, Chinese models are not bad and they have more accessible monetization through API, but they still give us old models. In turn, hackers get the newest ones.

testertesterov: How the Chinese managed to crash the market with their release. Just beautiful. I'm talking about the release of DeepSeek. By the way, I often use it for development in TON. (reply to 181535)

testertesterov: Recently, I wanted to buy the most modern graphics card on the market, but then realized that Telegram servers are ideal for running the DeepSeek API. In fact, for large volumes, clusters of modern graphics cards are already needed. Possibly several.  But as I see it, Telegram is only willing to sponsor hackers, while smart contract developers will have to pay.

&rey: Never saw Cocoon price some requests higher than other ones; it wouldn't even make sense because sc audit is effectively the same as finding vulnerabilities.  As a moderator caring about truth of what is said in chat, I request that you bring some evidence along your messages rather than just going off vibes. (reply to 181539)

testertesterov: This is my personal experience and my research. If you write a smart contract on TON and hackers will find the best AI audit, losses may occur to the author of the smart contract. (reply to 181555)

testertesterov: I respect Telegram and TON. The activity in them is more interesting than in all other applications in the world.

testertesterov: Actually, hackers are the evolution of ordinary developers in TON. They can do real, useful things because they are not afraid to experiment with technologies.

hellohi: i have a question about bidding on expired ton dns domains, how does it works? how can a guy like me who knows nothing about it do it

hellohi: i just found the way to do it, but i have no idea how to do it, can anyone help please? can someone show? (reply to 181561)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: Certain marketplaces offer this option to start the auction of an expired TON DNS (reply to 181561)

hellohi: which one can i use? please and thank you (reply to 181564)

testertesterov: Yes. This AI model aggregator has appeared, but so far there is little benefit from it. We still cannot connect to Cocoon through our favorite IDE and use the models for free. Instead, we were given an acton that is mostly nothing interesting. (reply to 181555)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: webdom market, and probably getgems (reply to 181565)

hellohi: hanks alot (reply to 181567)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: Cocoon run a local client that exposes an OpenAI API on 127.0.0.1, same as Ollama etc, any IDE that accept a custom OpenAi base URL can point at it like VScode cursor etc  « Use the model for free »  Cocoon isn’t free, so yes (reply to 181566)

testertesterov: Yes. In the case of Cocoon, local deployment is not easy. If you connect OpenAI models locally, what is the point when there is Ollama and other similar aggregators with simpler deployment?  Every developer wanted something slightly different. Telegram deploys many large models on its own servers, and we start accessing them via API and connect to them calmly through IDEs. Moreover, all this is quite inexpensive. For example, 1500 Stars per month per developer, but the cheaper the better. (reply to 181570)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: Deploying Cocoon locally is not hard and only takes 2/3 minutes and 15 TON minimum   I made a Cocoon client in Go, you should give it a try!   https://github.com/TONresistor/gocoon (reply to 181571)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: What if Telegram integrate Cocoon into Bot Father in the future ? (reply to 181571)

testertesterov: Yes. That's cool. Good work, but I'd like a more global Telegram solution that can be installed as an extension in an IDE. (reply to 181572)

testertesterov: Another feature that 1.5 RoboCop will be able to use :) We need something large-scale. (reply to 181573)

testertesterov: I will ask the AI model to rewrite this module in TypeScript and integrate it at the TON AI Core plugin level, but testing will likely encounter difficulties. Is Toncoin needed to start? (reply to 181572)

testertesterov: How much Toncoin do you think this interface will consume per hour if it unloads the entire Tolk code for analysis several times? For example, 50 times, and possibly analyzing separate code fragments. (reply to 181572)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: 0.02TON / 1M tok  Thinking mode is x8.0* (reply to 181591)

testertesterov: It turns out to be at least 3-5 dollars per hour at my pace and volume of AI analysis uploads. This is if I spend half an hour watching movies on TV and don't particularly stress the AI. (reply to 181594)

testertesterov: Imagine what would happen if you connect an agent mode to this interface. I think it would be much better to give democratic 1500 Stars per month, if possible, and use it without limits.

testertesterov: But overall, compared to most 0.02 TON/1M tok, it's cheap, but if you use AI at my pace, it's still quite expensive.

testertesterov: I looked at your other work. Tonnet-Browser is impressive. Is there any chromium in it?  I wanted to play a Counter Strike in it. (reply to 181594)

&rey: Inference still costs non-negligible amount of money, in electricity and unit replacements.  Though this proposal would cut another benefit of Cocoon; it's pseudonymous because it operates over blockchain itself, not requiring identification via Telegram account. (reply to 181598)

ㅤ: But you can't run own model, that's pretty sad.

ㅤ: you can put only 250 addresses to send payment? is it cheaper to send from highload wallet? much cheaper?

&rey: It depends; probably no. (reply to 181633)

&rey: One transaction can send at most 256 messages, yes. (reply to 181633)

Ruby: Just today I invested a bunch of time to get the c++ client running on my Mac, your GO implementation looks great, thanks! (reply to 181572)

Ruby: do you already plan for strict TDX/RA-TLS quote validation? (reply to 181572)

Slava: Are we talking about sending 1 message or 255? :) (reply to 181634)

Slava: 255 or 254 when it comes to highload v3 to be precise (1 message is used to ensure replay protection). (reply to 181635)

— 2026-05-22 —

testertesterov: Yes, but I think we are being misled about paid access to the AI API. Some large models run in the browser with huge context and without any charge for it. (reply to 181622)

testertesterov: They are currently trying to confuse with Cocoon using some private computations and know that what we want first and foremost is free access to the AI API, with privacy being second for users. And I think the rest will help little because in the layers above privacy, Cocoon also has many non-private places.

Slava: Hello, this chat is about TON development. If you have some ideas or proposals regarding the TON, feel free to share. (reply to 181672)

Mohamed: Integrate stickers to telegram  Bring attributes to stickers of big brands like shib or penguin or bayc or moonbirds (reply to 181673)

神也自卑: The combination of Web2 and Web3 can create a more perfect Telegram ecosystem. (reply to 181673)

M: MTONGA

testertesterov: They did it about 2 years ago, but then one of the days it went badly and the ecosystem of clickers and games began to collapse over the course of a couple of years. Now we need an excellent AI at democratic prices. (reply to 181683)

Dmitry: Electricity and hardware aren't free (reply to 181691)

— 2026-05-23 —

testertesterov: They have already started deleting my messages about technologies in TON and AI. I think this is just an excuse. In reality, there is a lot of equipment. The thing is, even animated gifts are expensive, so imagine the temptation of selling API access to AI.  But in my opinion, Telegram was too late with AI. This should have been launched at least 5 years ago when models were still generating programs very poorly.  Now it will be much harder for them to conquer the AI aggregator market. Moreover, privacy alone won't attract many users; they need an accessible AI API and a browser window where large contexts can be entered.  The idea of using AI for Toncoin could also fail because many people do not want to get involved with cryptocurrencies. I think Stars would suit them. (reply to 181692)

JANAINA: Understood (reply to 181740)

神也自卑: No, it's not specifically about the game. (reply to 181691)

神也自卑: Rather, it can change the entire ecosystem.

神也自卑: If the entire Web2 and Web3 application ecosystem can be fully adapted to people's lives and developed into an essential product, it could even potentially become the number one social networking app globally.

神也自卑: Although you may feel I'm exaggerating, as long as you take it seriously and dedicate yourself to making this happen, the result will be as I described.

testertesterov: Yes, but web2+web3 tried. Users do not want to pay for every click in games and many simply lost their tokens and times :) Then marketing deteriorated and the web2+web3 ecosystem could not handle this, and many excellent projects simply shut down. (reply to 181751)

神也自卑: No (reply to 181755)

神也自卑: I need to be contacted by an official representative so I can send them the entire project proposal for reference and to see if it's feasible.

testertesterov: Recently, the excellent project Cattea was closed and they only left Catrix, but Catrix is very boring compared to Cattea. There is a risk that the user simply deleted the game after this and didn't play anything. (reply to 181756)

神也自卑: Why develop games? My project isn't a game, but rather an ecosystem of applications that are convenient, secure, and compatible with everyone.

testertesterov: We already have one Notcoin. Which has an ecosystem, but something isn't working. Users simply withdrew capitalization and did not want to continue. (reply to 181760)

NODog police: Son off anton bot ??

NODog police: How does it develop?

Александр: I'm not an official representative, but I found an email for you that you could find yourself, if desired, from the site ton.org  If your offer is really worthwhile, go ahead: contact@ton.org (reply to 181757)

testertesterov: Developing bridges similar to TAC is quite risky. I think for such development, you need money in reserve just in case. Because as practice shows, software code is not perfect and it is easy to make a typo.

S: Bruh, are web3 apps dead on TON?

testertesterov: Some are still trying to attract players, but I am currently playing only in Gram.Zone.

S: Which one is that? (reply to 181772)

testertesterov: In gramzone, you play as a ball that you can move around the map to collect tokens that drop on the map at intervals. There are lucky hours when more tokens drop, meaning you immediately secure them as soon as you collect the required amount. You can play without any investment. (reply to 181775)

S: That isnt enough. It seems like the hyoe around mini apps has died

testertesterov: Yes. The user prefers to spend more time watching movies on TV than playing games on TON. (reply to 181778)

S: :( (reply to 181779)

testertesterov: It's a pity that the Telegram and TON Core teams still haven't delivered us a worthy native TelegramTV on TON. Instead, we are being fed updates for Telegram on Apple Watch and the integration of TON into WhatsApp. (reply to 181780)

S: Mmm. TON integration into whatsapp? Haven't heard of that (reply to 181781)

testertesterov: Yes. There was news about this recently. Some clever people integrated the TON wallet into WhatsApp :) (reply to 181782)

testertesterov: Probably this was done to show Zuckerberg that his development team is nothing and TON was integrated into WhatsApp faster than USDT.

S: What is TON doing in whatsapp?

testertesterov: I think it doesn't matter to them where to get the audience from, and WhatsApp really has a huge audience. I think it's what's needed, but it's unlikely that users will actively use it on WhatsApp. (reply to 181785)

S: That lowk sounds sad :( (reply to 181787)

testertesterov: Yes. It's all due to mistakes in marketing, while the web2+web3 ecosystem was deployed decently. The developers at TON performed at 100%. (reply to 181789)

S: Mhmm

Grumpy: Hi, Just joined the chat after getting my Mini App approved. Are there any rules or guidelines I should be aware of before asking questions? Thanks!

testertesterov: The main thing is not to insult Telegram and TON. (reply to 181841)

&rey: That this chat is not about TMAs (@devs is) but about development on TON. (reply to 181841)

Grumpy: Ok thanks, I'll go over there (reply to 181843)

— 2026-05-24 —

Nathanaël: Hey there, what’s the minimum payment required? (reply to 180886)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: The price of a transaction.  Any actions with your TON DNS will renew it.  For example, you can send it to yourself and pay the price of a token transfer (like 0.002 TON). (reply to 181901)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: If you interact with your DNS records, it will also reset the counter to 1 year

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: Oh i realized that maybe I misread it.   If you’re talking about the minimum amount to relaunch an auction.   It depends on the number of characters (reply to 181901)

Rivol: Hey, who is actually in charge of the new ton org site and its servers now? Since the MTONGA update, the whole setup changed. Is it run directly by Telegram or some other team?

awesome: MTONGA (reply to 181915)

Rivol: MTONGA is a marketing slogan, not an engineering team. I'm asking because the legal domain registration completely changed records on March 30, and the entire SSL/hosting setup was quietly moved to Ton Apps infrastructure weeks before Durov even posted about it. Just want to know who actually holds the root keys and signs the deployments now - Telegram or Ton Apps? (reply to 181918)

awesome: Pavel Durov took control, along with the team and telegram. Taking on the role of TON Foundation (reply to 181915)

awesome: I know, but there's the answer (reply to 181919)

Rivol: That is just the PR cover. If you look at what actually happened over the last 3 months, it is not Telegram taking control, it is a massive consolidation under TOP.  Domain registration changed back on March 30, and the whole hosting moved to Ton Apps Group servers - which belong 100% to TOP - already on March 10, long before any public announcement. Then look at the dev tools: 4 out of the 6 toolsets featured on the official site - AppKit, WalletKit, Agentic Wallets, and Agent Kit - were all built by TON Tech, TOP in-house infrastructure team led by Andrew Grekov. They also recently shipped the new documentation platform, which replaced the previous version written by the independent TON Studio.  Now add it up: TOP also runs Wallet in Telegram, TON API, Tonkeeper, TON Connect, Stonfi, and Getgems - they openly list all of it as theirs. One company under Rogozov now owns the user wallet, the main DEX, the main NFT marketplace, the official blockchain website, the main docs, the core dev toolkits like WalletKit and AppKit, and the whole agent layer (Agentic Wallets, AgentKit). It is a complete infrastructure monopoly. (reply to 181920)

Doug: What's your biggest concern? (reply to 181923)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: Centralization (reply to 181924)

Александр: Some networks were also centralized for a while, until the infrastructure and users of the network matured. (reply to 181925)

Petr: Well, I prefer one strong team with streamlined development rather than 10 weak and disjointed ones (reply to 181925)

Rivol: My biggest concern is that TON is losing its original core value. Back in 2021, when Telegram handed the project over to the community, it was built as a non-profit effort by independent contributors. The whole selling point for builders was that no single private company owned the chain.  ​Look at what we have now. One corporation -TOP - runs the wallet inside Telegram, Tonkeeper, the main NFT marketplace, the main DEX, TON API, the core SDKs, and now the official website with the new docs platform. There is zero oxygen left for independent developers. If your product competes with theirs, you don't lose on technical merit - you lose because you are simply not on the recommended page.  ​This is why the MTONGA narrative falls apart. Telegram becoming the largest validator is just the loud, visible part for the public. The quiet part is that the Foundation was replaced by TOP, moving everything that users see and builders use under one CEO. Censorship isn't some future risk anymore, it is a default feature happening right now. Healthy chains like Solana or Ethereum grow because of competition and variety. When one entity controls every single entry point and layer, you don't have an open ecosystem - you just have a polished corporate frontend with a single choke point behind it. (reply to 181924)

Rivol: You are thinking about this as if a blockchain is a software product. In a product, yes, one strong team beats ten weaker ones - that is just how shipping works. The problem is a blockchain is not a product, it is infrastructure that thousands of independent products are supposed to be built on top of. The whole reason "open" matters here is that builders need to know the layer underneath them will not turn on them. If one corporate team owns every entry point, every default integration and every recommended path, that guarantee disappears - your future on this chain depends entirely on staying on good terms with one company. That is not a technical question, that is a power question, and it has the same answer on every chain that ever tried this model.  Competition is not "ten weak disjointed teams", competition is what forces teams to stay strong. As long as users have an alternative, every team has to keep improving or lose ground. The moment alternatives disappear, the surviving team stops needing to listen - to builders, to users, to anyone. That is when ecosystems calcify. The reason chains that grew did grow is exactly because no single company could afford to coast. You like the "one strong streamlined team" version because you are inside it - it looks efficient from where you stand. From a builder outside that team, it looks like a closed door. (reply to 181927)

DeAI: You raise a lot of valid points and you're not wrong, but you also have to recognize that under the previous leadership, TON was failing. It wasn't attracting new builders, it wasn't attracting new users, and the vast majority of activity on chain was people being scammed. If the new leadership, while initially highly centralized, attracts new builders, new innovation, and new users, don't all the problems you're pointing out here end up solving themselves? (reply to 181930)

Timmy Dipshit: im all in on ton and telegram, the user base is already there just waiting for a killer app

Timmy Dipshit: axiom + pump keep solana alive because the main use case for crypto is gambling on memes

Rivol: You are right that the previous leadership failed, but the diagnosis is wrong. The chain was not failing because it was too decentralized - it was failing because the decentralization was fake from the start. A Swiss Stiftung with a closed board, a treasury controlled by a handful of insiders, and a roadmap that always conveniently lined up with Telegram quarterly priorities was never a community-run chain. It was the same private power structure wearing the costume of a non-profit. Builders read this very early, that is one of the reasons adoption stalled. The mistake now is treating the fix as "stronger leadership", when the actual problem was that real ownership of the chain never belonged to anyone except a small group. Replacing that small group with a smaller, more efficient corporate group does not solve the structural defect, it just makes it more honest.  Before someone brings up Ethereum or Solana as counterexamples - those chains did not start centralized in the sense being argued here. The Ethereum Foundation never owned MetaMask, never owned Uniswap, never owned OpenSea. Solana Labs never owned Phantom, never owned Jupiter, never owned Magic Eden. From day one those ecosystems had a strict separation between whoever ships the protocol and whoever ships the consumer products on top of it. That separation is the entire reason they could grow without becoming captive markets. TON is doing the opposite right now - one parent owns the protocol-facing surface, the wallet, the marketplace, the DEX, the documentation, and the SDK at the same time. There is no historical precedent for a chain consolidating like this and later voluntarily breaking itself apart. The pattern always runs the other way - the more it grows, the harder it is to unwind, and after a certain point the cost of unwinding it exceeds the will of anyone left in the ecosystem to even try.  The scams argument is also being read backwards. Scams scaled on TON not because there were too many independent players, but because there were too few. When the network has one default wallet, one default discovery surface, one default trust signal, every malicious flow only needs to clear one filter to reach every user at once. Competing wallets, competing marketplaces and competing trust layers create friction for fraud, because the moment one of them lets something through, the others can flag it and take the users that left. Concentration is not protection from scams, concentration is what makes scam economics work in the first place.  What actually needed to happen, and still needs to happen, is the structural opposite of the current move. The user-facing layer should be split across independent owners with no shared parent - the company shipping the wallet should not also ship the DEX, the company writing the docs should not also write the SDK that those docs recommend, the entity that runs the validator coordination should not also run the marketplace where its own assets get listed. Foundation grants should be ringfenced so that the Foundation cannot fund and then promote its own subsidiaries. Treasury reporting should be public and continuous, and the wallets holding Foundation funds should be public onchain addresses - the Foundation never published anything about how its funds were used, who got what, or even where the money sat, for the entire lifetime of the chain. Governance over what appears on the official front page should be decided by more than one person sitting in one office. None of this is theoretical, every chain that grew organically has some version of these guardrails. The reason TON does not is not because the previous team was too weak to implement them, it is because the people in charge - then and now - actually preferred not to. That is the failure to fix, and consolidating power further is the exact wrong direction. (reply to 181931)

DeAI: Oh I wasn't blaming decentralization for it, just pointing out the issues. You're right, it should be as decentralized as possible but that would require having a bunch of separate companies and builders working on those things, and right now, TON just doesn't have many left. Hopefully these new changes lead to better decentralization. (reply to 181935)

Timmy Dipshit: who else is going to do all that work if not telegram themselves? im sure they would fund and support projects that contribute to the ecosystem but chicken/egg (reply to 181935)

— 2026-05-25 —

jizzy019: noticed ton transfer and Jettons are so very fast now. what's the secret sauce or is it just false feelings?

Petr: Hey, check this article: https://docs.ton.org/overview/subsecond (reply to 181939)

Rivol: Appreciate the honest read. But "not many builders left" is the symptom of this structure, not a reason to lean into it. Independent teams did not disappear because the network is small - they left because they watched what happened to the ones who stayed. When the wallet, the marketplace, the discovery surface and the docs all sit under one parent, every independent project eventually gets acquired, deprioritized or quietly pushed off the recommended pages. After enough cycles new builders stop arriving because the pattern is obvious from the outside. "We need centralization because there are no other teams" inverts cause and effect - the teams are missing because the centralization made the environment hostile in the first place.  The "hopefully these new changes lead to better decentralization" part is also weaker than it sounds. MTONGA was announced almost two months ago, the technical-excellence push from May 4 came with an explicit 2-3 week timeline (not mine, theirs), and today is the last day of that window. What actually shipped in those weeks that anyone can point to as a technical breakthrough? One thing - Acton, a strong toolchain. The catch is Acton was developed by an independent TON Core team across the previous six months, before MTONGA existed as a brand, by people who are not part of the new leadership. It is real work, but it got framed as a deliverable of consolidation when it was finished outside of it. Everything else in this window was the operational takeover of the site, the docs, the SDK stack and the dev-tool surface by one corporate parent. If the direction were actually toward decentralization, the first weeks would have shown grants going to teams outside the in-house portfolio, recommended pages opening to non-TOP products, the wallet category making room for alternatives. The first weeks showed the opposite.  There is no example in crypto of a private team consolidating power at this scale and then voluntarily releasing it. The cost of unwinding grows faster than the will to do it - five years in, removing the central company becomes more expensive than tolerating it. "Hopefully" is doing all the work in that sentence, and the structural evidence so far points the other way. If two months and a self-set three-week deadline produce one inherited tool plus full operational capture, what arrives in six months is not decentralization, it is a more polished version of the same thing. (reply to 181936)

叶师傅: Actually, the centralization issue you mentioned fundamentally stems from the fact that the majority of Toncoin is held by a small number of people. That's the root cause. (reply to 181943)

Rivol: Not really chicken/egg, more a choice framed as one. Telegram has the distribution, TOP has the operational capacity, but neither of them is obligated to also own the wallet, the DEX, the marketplace, the docs and the SDK in-house. Solana Labs did not build Phantom. Ethereum Foundation did not build MetaMask, Uniswap or OpenSea. Those ecosystems grew precisely because the slots were left open and independent teams walked in, not because the foundation funded them into existence first. The "TON has no independents to open up to" answer reverses cause and effect. You cannot have independents while every default category is taken by the same parent that also decides what gets recommended on the official page. Open slots create teams, not the other way around. Telegram and TOP do not need to do everything themselves to bootstrap the chain, they need to stop sitting in seats they could leave empty. (reply to 181937)

jizzy019: thank you. now I understand better why the fast speed. (reply to 181940)

jizzy019: wish TON more adoption and usage (reply to 181945)

Rivol: Fair point actually, the early supply concentration did create the conditions that grew into the operational monopoly we see now. Those early holders had the capital and influence to build out the infrastructure under one umbrella, so the two are historically linked. The disagreement is that token concentration is no longer the active cause, it was the seed. At this stage the monopoly is structurally embedded into how the network operates, so even a hypothetical redistribution of supply would not unwind it. Fixing the token side is a fair conversation, but it does not undo the corporate layer that already sits on top. (reply to 181944)

叶师傅: Token concentration isn't just the seed — it's why no challenger ever grows, since every builder is just working to pump someone else's bag. (reply to 181950)

叶师傅: Honestly, it's easier to just view the whole thing as a centralized product built on blockchain rails.

Slava: While the discussion and opinions shared here are certainly valuable, I would like to remind everyone that this chat is dedicated to technical issues related to development on TON. This chat is not intended for discussions about governance or policy. I encourage everyone to continue the conversation in a more appropriate chat. Thank you for understanding.

Rivol: Slava, with respect - I understand the chat is meant for technical discussions, and I would normally agree that governance topics belong elsewhere. The reason it came up here at all is that the discussion was directly about the technical environment developers on this chain operate in: who maintains the documentation, who ships the recommended SDKs, who controls the official site that points new builders to which tools. Those are technical concerns by definition, even if the underlying causes touch governance. I am not trying to make this a political thread, I am trying to surface questions that affect every builder reading this chat.  That said, you mention a more appropriate place to continue the conversation, and I would genuinely like to know where that is. The Russian-language TON dev chat banned me earlier for a much milder tech message and has not unbanned me. The other official TON chats have been inaccessible for the past four days. This English dev chat was effectively the only remaining official channel where this kind of factual discussion could happen. If there is another official forum where these questions can be raised in front of the same audience of builders and Foundation/TOP representatives, I am happy to move there. If there is not one, then I think the question itself becomes the technical concern - because "the recommended channel is unavailable" is a developer experience problem in the most literal sense.  I am not arguing with the moderation decision. I am asking where the discussion can continue, given the current state of the official communication surfaces. (reply to 181994)

Jon: In fact, there isn't much innovation left in public blockchains. The main focus now is on how to truly enable users to use them. TON's main supporter and application scenario is Telegram; if it were truly separated from Telegram, it wouldn't be very competitive. Just like BNB users know that Binance is the absolute dominant force behind BNB, and it can't function without Binance's support. (reply to 181997)

Boka: Hey guys, super quick question. I can't find the changelog for the latest versions of @ton/ton on npm. Were there any breaking changes between v15 and v16?

Tim: Only for sending messages with wallet w5 (reply to 182020)

Butcher: anyone interrated these to their projects? (reply to 179953)

— 2026-05-26 —

Rafael: Has the Telegram Wallet for Windows been discontinued completely? There are still old pages on the website, but it looks like the link to the Windows version has disappeared there too. Is it no longer supported?  If it's still supported, could you bring back the link to it? An official, simple wallet for Windows seems like an important thing to have.

xylica: why do you need it? tonkeeper has a windows version (reply to 182049)

Rafael: tonkeeper is unofficial

xylica: tonkeeper is "unofficial" on paper, yeah, if you're that paranoid just write your own code and create your own wallet (reply to 182054)

Rafael: Why would I write something again when it’s already been written? I just want to know the status of the official wallet, that’s all. (reply to 182055)

xylica: https://github.com/ton-blockchain/ton-wallet https://github.com/ton-blockchain/wallet-desktop (still working iirc) (reply to 182056)

Rafael: Thanks, the project seems to be abandoned, and tonkeeper doesn't have a Windows version according to the official website. (reply to 182057)

Anton: we have a win version.

Anton: https://github.com/tonkeeper/tonkeeper-web/tags

Rafael: It seems there are none, only extensions or web https://tonkeeper.com/ (reply to 182059)

Anton: https://tonkeeper.com/pro

Rafael: Exactly, thanks (reply to 182062)

jizzy019: tonkeeper is tonkeeper, not sure there is anytjing like unofficial. (reply to 182056)

jizzy019: I still updated my tonkeeper on windows few days ago. check the github tonkeeper releases, you will see it there. (reply to 182058)

EnCryptoknight ⚔️: it's a monorepo. a dev should understand why. (reply to 181485)

Petr: Tolk compiler heavily depends on other TON-monorepo code (reply to 181485)

testertesterov: Yes. I understand :) Now, to export the Tolk language code, we need to export the entire blockchain code. (reply to 182078)

Petr: In the future, Tolk compiler will be in a separate repo, but some technical changes to the backend required first (reply to 182080)

EnCryptoknight ⚔️: not really it depends on what the tolk lang is depending on (reply to 182080)

EnCryptoknight ⚔️: If it depends on the core of any config, then those libs need to be exposed one way or the other.

testertesterov: It has long been located and FunC :) I think we will also dump all languages and the blockchain code block at once in the future. The current temporary location of languages has long looked like a permanent function. (reply to 182081)

testertesterov: The Fift language is located in the crypto/fift folder of the TON blockchain?

🌋Prô: How to start please need help

testertesterov: TON is a huge monolith. In its repository, there are already at least 3 programming languages for smart contracts.

🌋Prô: Ok (reply to 182094)

Noel: Hey Audrey im a long time builder in the space and would love to learn more about what you guys have/havnt built and how I could potentially help (reply to 180007)

— 2026-05-27 —

Иво: I wanted to buy an NFT via Telegram. I sent someone an offer with my price, but they rejected it. I haven't received my money back for 2-3 hours. The transfer was made to Fragment. Can you advise me on what to do in this situation?

Sviatoslav: docs ton org - welcome -) (reply to 182093)

ashe: How to retrieve jettons and nft from a connected wallet, asking directly to the wallet and not to the toncenter api?

&rey: It doesn't offer such an endpoint. (reply to 182116)

Bro: A connected TON wallet via TON Connect basically gives you the user’s wallet address and lets you request signatures / transactions. It is not an asset indexer, and there is no standard getJettons() or getNFTs() method you can call directly on the wallet. (reply to 182116)

jizzy019: how?  do you directly deal with others when on fragment? (reply to 182100)

Zerox: is there anyone looking for a blockchain & AI engineer?

Timmy Dipshit: does anyone know companies or people funding ton projects?

— 2026-05-28 —

Warden: Hi, how long does it usually take for the security team to review a GitHub security advisory for ton-blockchain/ton?

— 2026-05-29 —

R.I.P: Why can't I "make an offer" on Fragment for usernames ending with "bot"?

Miriam: Hi guys, I'm using the tonutils-proxy proxy software (127.0.0.1:8080) locally, and I can access http://botservice.ton/ normally. Then, I turn off the local proxy and access https://botservice.ton.run/ using ton.run,and it still works. However, I can't access tonsite://botservice.ton using the browser built into Telegram. Could you please help me troubleshoot the problem? Although my site can be accessed normally from ton.run, I still want to know why it can't be opened in Telegram's WebView. It always shows *.dton.magic.org in the WebView window. Did I miss any configuration? visit : tonsite://botservice.ton/ Resp:  botservice-dton.magic.org HTTP ERROR 502

&rey: Because that is the gateway official Telegram clients use. (reply to 182193)

Miriam: Thanks bro， How can I access it through the built-in browser in Telegram? (reply to 182195)

Miriam: Even have no received any traffic/ucpdumps infos from built-in browser in telegram apps..

— 2026-05-30 —

Insomniac: Hi  Hey — I'm building a TON wallet app (similar to Tonkeeper) using @ton/ton, and was testing the swap feature. I didn't realize my test wallet's balance was lower than the swap amount, so several swap txs failed in the action phase (exit code 37) — they got included on-chain as aborted txs, so the seqno never advanced.  Now that v3R2 wallet is stuck: every external message is rejected with cannot apply external message to current state : Duplicate msg_seqno N — same across toncenter, tonapi, and direct ADNL to public lite-servers (valid_until up to 5 min). One detail that surprised me: when I broadcast the raw BOC via liteServer.sendMessage directly, it returns status: 1 (accepted), but the message never gets collated — only toncenter surfaces the Duplicate msg_seqno reason up front. So it looks like the validators themselves drop it, not a gateway. The wallet's been untouched 7+ hours and still errors on the first broadcast. Incoming transfers work fine.  Is this a known seqno-stuck deadlock? How can the wallet advance its seqno if no external ever gets collated — does the duplicate state clear on its own, and roughly after how long?

Slava: How do you set seqno for your external message? (reply to 182212)

Insomniac: I read it live from the wallet's seqno get-method right before each send — it returns 0 (it's never advanced, since every tx reverted). Then I pass that into @ton/ton's wallet.createTransfer({ seqno: 0, secretKey, sendMode, timeout, messages }), which builds the external body with msg_seqno = 0, and I broadcast it as an external-in message to the wallet address. So the external's seqno always matches the wallet's stored seqno (both 0).  The contract's own recv_external seqno check passes — the failed swaps reached the action phase (exit 37), which means compute/seqno/signature all passed. So it's not a wrong-seqno or contract rejection; the Duplicate msg_seqno 0 comes from the validator at collation, not from the wallet.

Insomniac: And by several swap transactions failing i mean like 8-10 or so

Insomniac: After that the wallet basically stopped working its seems.

Insomniac: So now i try sending 1 ton from tonkeeper from v3r2 wallet and i can't do that. The transaction appears for some seconds in history then disappears. Same with tonviewer if i view same wallet there. Feels like a lock out

Insomniac: Another question Did i lose my funds? I mean i can see them but cant send. Only receive.  Other v3r2 wallets i have checked/tested work fine from same app.

Insomniac: Anyone there? Also one more thing i noticed One more detail: the wallet was uninitialized, and the very first external both deployed it (StateInit) and failed in the action phase (exit 37) — so the contract was effectively born from an aborted deploy transaction. It's now active with valid code/data, but the seqno never left 0. Could deploying a wallet via an aborted external leave its seqno/replay state in a bad spot on the validator side?

I’m here: Where is the new step?

Insomniac: As i tried explaining above, i was trying multiple things with the app thingy am trying to build, v3r2 is still valid even in tonkeeper no? and yes I messed up but this doesn't help the question of the lock or if my funds are lost or not

Slava: A single accepted transaction is enough to deploy the contract, which happened in your case. (reply to 182220)

Slava: What exact error do you have right now?

Slava: So, the problem stemmed from a rare set of circumstances: the first accepted transaction failed in the action phase. The seqno counter wasn't incremented and remained at its initial value of zero. The external message itself retained (due to the seqno optimization in the recent updates) in the sending queue by the lite-servers and probably collators with ridiculously high TTL: 80 years (due to a weird implementation in the ton library).  We are working with the developer to help recover their wallets and funds. The library will be fixed.

— 2026-05-31 —

ashe: Hello, i'm unable to understand how to send jettons, tons, and nfts and how to track transfer status. The docs are confusing for me: AppKit, TonPay, TonConnect, too much ways to do one thing.  I need to send and track:  - Ton, Jettons, Nft transfer - Both ways: Custodial and Non Custodial (TonConnect)  how?

TON Support: You can send Jettons, TON, and NFTs using WalletKit, which supports both custodial and non-custodial (TonConnect) methods.  To track the status of Jetton transfers, use getTransactionStatus(appKit, { boc }). You should inspect onchainMessages, pendingMessages, and totalMessages to track progress, and consider the transfer complete only when status === 'completed'.  Source: [Send jettons — TON Docs](https://docs.ton.org/applications/appkit/howto/send-jettons#:~:text=Confirm (reply to 182323)

ashe: And I need to do it in backend, no UI.

TON Support: While the previous response mentioned WalletKit, which supports both custodial and non-custodial methods, the documentation primarily focuses on client-side usage with UI components like <SendJettonButton /> or useTonConnectUI() for dApps.  For backend...  operations without a UI, you would typically interact with the TON blockchain directly using SDKs or APIs that don't rely on UI elements for user interaction (like TonConnect pop-ups).  The provided snippets for Jettons, TON, and NFTs with WalletKit show how to createTransferTonTransaction, createTransferJettonTransaction, and createTransferNFTTransaction, and then sendTransaction. While these methods are part of WalletKit, which can be used in a backend context, the examples often involve a wallet for signing.  For backend operations, you will need to consider how to handle private keys and transaction signing securely, as WalletKit's non-custodial options (like TonConnect) are designed for user interaction and approval. Custodial solutions in the backend would involve managing keys directly.  To track transaction status in the backend, you would still use getTransactionStatus(appKit, { boc }) and monitor onchainMessages, pendingMessages, and totalMessages until status === 'completed'. You should also track the transaction with streaming and verify the recipient's balance before delivering value.  Keep in mind that WalletKit also mentions: "Jetton transactions can be created directly from the wallet service (not from dApps) and fed into the regular approval flow via the handleNewTransaction() method of the WalletKit." This suggests that even for transactions initiated from a wallet service in the backend, an "approval flow" might still be involved, which could imply some form of interaction or pre-approval mechanism.  Source: [How to work with Jettons using WalletKit on the Web platform — TON Docs](https://docs.ton.org/applications/walletkit/web/jettons#:~:text=See (reply to 182325)

ashe: Still can't understand.  How to send and trace custodial transactions?  How to send and trace non custodial transactions?

WB3，dapp，智能合约，链游，一手开发: Is there a manager around? Why is the testnet unavailable?

WB3，dapp，智能合约，链游，一手开发: I cannot test normally. Can the management fix it as soon as possible?

&rey: Backend language? TS, Python, Go or another? (reply to 182325)

ashe: I prefer python, but all the docs.ton.org is in Typescript so typescript. (reply to 182333)

&rey: https://github.com/yungwine/pytoniq had some examples for sending txs. Tracking if it was sent successfully is a tad bit more complex. Tracking what you receive is a bit simpler. (reply to 182334)

ashe: i know pitoniq, but since mtonga and all of this, we have TonPay, AppKit, WalletKit, TonConnect, etc..  I want to use a ready up solution but docs are confusings. (reply to 182335)

ashe: more, liteserver costs are higher than api costs so using pytoniq it's not feasible. (reply to 182336)

&rey: when using public liteservers, zero. (reply to 182338)

ashe: Ok but that's not the question, answer that please. Public liteservers are slow and sometimes doesn't work they are not production ready.  The question is about the mess: TonPay, AppKit, WalletKit, TonConnect.  I repeat the question:  How to send and trace custodial transactions?  How to send and trace non custodial transactions?  Using the tools advised by docs.ton.org in a coherent way. Backend, no react. (reply to 182340)

Butcher: How can I get nft collection listed in /nft native to telegram

𝗖𝗔𝗟𝗠: Just block this guy (reply to 182350)

Alex: Are you want to send coins from your wallet, or you want to make message, send it to user to sign it, and send it to network? If you just want to send from your wallet, then you don't need TonPay, TonConnect. You can use tonutils for example. For tracking transaction you can use web hooks from ton api https://docs.tonconsole.com/tonapi/webhooks-api (reply to 182342)

ashe: Ok but in ton sending jettons, tons and nfts involves more than one transaction. It's a trace, a process, no?  I'm searching a way to have a sort of tracking code, polling with it and get the status of whole process.  For jettons and nfts too (reply to 182385)

Slava: Just watch the source account for assets withdrawal and final destination account for arrival. This should be enough. Fetching an entire transaction tree would be helpful. (reply to 182387)

ashe: So, the old way.   I was expecting some sort of ready to use utils given by WalletKit or AppKit. (reply to 182388)

Slava: Don't know about them. Try reading their docs. (reply to 182393)

Александр: Hello everyone  I am studying how the TON Center API is structured, specifically: obtaining information about NFT collections and the NFTs themselves. In the "content" of NFTs, in one format or another, attributes may be contained.  Question: Is there a way to obtain the names and values of all attributes without iterating through all NFTs of the collection?

Bro: Raw TON way? not really.  NFT attributes live in item metadata, so unless someone indexed the whole collection already, you’re stuck walking the items.  But Getgems actually has the indexed endpoint for this:  GET /public-api/v1/collection/attributes/{collectionAddress}   Returns trait types, values, counts, and min price per value.  Github link for getgems API (reply to 182395)

Александр: Oh, that's cool, I didn't know about the Getgems API. Thanks!  I was already thinking about getting attribute information from Getgems, but in a slightly different way. (reply to 182406)

— 2026-06-01 —

Fromeo016: Hello

Fromeo016: I’m reaching out regarding the ton bug bounty

Fromeo016: Could any of the admins help

Fromeo016: 21139ced-db92-414c-8ed5-dbb2b9b0ec3d Submitted and internal self-checks align; claim appears plausible and impactful… rejected   Could this be looked into, I don't understand the reason for rejection

Denis: /faucet

TON Support: To set the seqno for an external message, you need to include a 32-bit msg-seqno in the signed part of the external message. This msg-seqno must match the seqno value currently stored in the smart contract's persistent data for the message to be accepted. After successful processing, the smart contract will increment its stored seqno by one to prevent replay attacks.  Source: [External messages | The Open Network](https://docs.ton.org/v3/documentation/smart-contracts/message-management/external-messages#:~:text=Even (reply to 182213)

Nathanaël: Ye y’all, quick question: will all TON be automatically converted to GRAM?

Vyacheslav Pridchin: Hi everyone — flagging a potential issue with this proposal (Rename the Native Token from Toncoin to Gram):  https://ton.vote/EQDQvywF226NXojPky_9gwbCz0FPoygqY11bGl03SONNBs5V/proposal/EQAv-VS2OM80SYLB0ouRWRcpFg4J0L-egUf1-utF-OJ6h0rK  What’s going on  One wallet is driving almost the entire outcome:  - Wallet: EQAmWvvOvfT8M2k1wtzirB-ODsMLWbBbpk7zA0pzc2vn2BMS     https://tonviewer.com/EQAmWvvOvfT8M2k1wtzirB-ODsMLWbBbpk7zA0pzc2vn2BMS   - Vote: For   - Voting power: ~1.5M TON (~80% of total weight in this vote)   - On-chain it looks like a pooled / stakeholder wallet (large tsTON stake), not a typical individual voter.  Why this matters  With that vote included, the result is roughly ~86% For / ~14% Against.   Without it, the rest of the voters look roughly ~26% For / ~74% Against — i.e. the opposite direction among everyone else.  So the renaming vote may read as strong community support, while in practice it’s largely one aggregated address deciding the outcome.  Ask  1. Who controls this wallet, and on whose behalf was the For vote cast?   2. Should pooled / stakeholder / LST balances vote as a single wallet on ton.vote, or should there be disclosure, abstention, or different rules?   3. Can the proposal organizers clarify intent and process before this is treated as settled community consensus?  Happy to share API numbers / tx hash if useful. Would appreciate thoughts from proposal owners and anyone involved in ton.vote governance rules.  Thanks.

&rey: Check again. According to tx history, they have owned 2M TON for a long time. (reply to 182504)

Vyacheslav Pridchin: Okay, I see, thanks (reply to 182508)

wen: Hi, does anybody know how to restart an gram domain auction?  Is it the same way as ton domains?

𝗖𝗔𝗟𝗠: I dont think so (reply to 182519)

L: Ton or gram, what's the difference, they'll rename it to Sassun

wen: Do you have any information? (reply to 182521)

&rey: Renamed. Yes, the balances of chain's native coin will remain unchanged. (reply to 182503)

vangaard: Just a ticker change (reply to 182522)

TON Dev News: 🪙 Toncoin Name Change — Community Vote  TON has changed substantially in recent months. Telegram is taking on a leading role in the network and is becoming its largest validator. The chain itself is now 10× faster with fees down 6×. Gram was the name the network's founders gave the token in the original TON White Paper, and it's never left the codebase.  That is why Telegram is proposing to rename the native token from Toncoin to Gram, a fitting moment to bring it forward.  The blockchain stays TON / The Open Network, only the token's name and ticker change. Balances, addresses, contracts, NFTs, staking, DeFi, all unchanged. No swap, bridge, claim, or migration. No action required.  ⚠️ Any site, bot, or link asking you to "claim GRAM" or "migrate TON" is a scam.  How the vote works Runs for one week on TON Vote, an established open DAO platform on TON ▪️ Voting power is weighted by TON balances   👉 Vote here (forwarded from Toncoin)

𝗖𝗔𝗟𝗠: @alexgton some people abusing @tonmod_bot for advertising their CP private channels, joining again and again. Please do something

Dr. Awesome Doge: We have currently completed four out of the seven steps. With three steps remaining, I am truly looking forward to the results. (reply to 182530)

Jacopo: Hi, any way to contact support ?

Jaкe ~: Yes, this is very unfair (reply to 182504)

mnemotiv: stars > gram (reply to 182536)

Jacopo: Write where? Website have telegram channels

&rey: Support related to which matter (service)? (reply to 182547)

Jacopo: Transfer, something that they could sure fix it

Bro: Okay

Vyacheslav Pridchin: UPD: On-chain analysis of the wallet (EQAm...2BMS) reveals it is the personal wallet of a major early miner (genesis whale). The funds trace directly back to the Large Givers (Initial PoW) distribution from July-August 2020, moving through a chain of massive hub wallets (in tranches of 45M, 30M, 10M, and 2M TON).   The whale simply staked their personal funds, which is why they hold tsTON. This allowed them to single-handedly swing the vote from ~74% "Against" (among the rest of the community) to ~86% "For".   This highlights a fundamental governance challenge: the illusion of a community-driven vote when a single individual from the early distribution era can completely override the voice of hundreds of regular ecosystem participants. (reply to 182504)

Mr X | ByteLords ⚡: So it is good or bad? I'm confuse

Vyacheslav Pridchin: Whether this is "good" or "bad" is for everyone to decide for themselves.   However, it definitely compromises the fairness and integrity of the voting process. When a single early-distribution whale can completely override the organic consensus of the rest of the community (turning a 74% "Against" vote into an 86% "For" vote), it turns on-chain governance into an illusion. If one person dictates the outcome, the voting platform isn't measuring community consensus—it's just displaying raw capital power. (reply to 182561)

Mr X | ByteLords ⚡: Yep I was checking that too and reading all of you guys.  Looks like it's everything script (reply to 182562)

Petr: Isn't there 567 votes "For" and only 216 votes "Against"? (reply to 182562)

Mr X | ByteLords ⚡: Correct but they also include TON power, they include in the vote the wallet money you have (reply to 182564)

mnemotiv: put your best effort - start offering solutions

TON Support: To vote for network configuration proposals, nominators need to attach a small amount of tokens (minimum 1 TON) to their message to cover the network fee. Any unspent TON will be returned to the wallet.  Source: [Nominator pool | The Open Network](https://docs.ton.org/v3/documentation/smart-contracts/contracts-specs/nominator-pool#:~:text=Voting

Mr X | ByteLords ⚡: Can't write anything

Vyacheslav Pridchin: Exactly. On ton.vote, the count is not based on the number of individual wallets, but on the number of tokens (TON) each wallet holds—this is their "voting weight" (1 TON = 1 vote).   In general, this approach makes sense because it prioritizes active TON stakeholders with skin in the game over random, low-balance accounts. However, the system is clearly not perfect.   This is exactly where the issue lies. Even though there are more individual wallets voting "For" on paper, the actual distribution of the community's tokens (excluding that one 1.5M whale) is roughly 74% "Against". One single whale's balance completely overrides the financial weight of the rest of the ecosystem combined.  Since some people below were asking for potential solutions, one approach would be to introduce a correction or normalization function for ultra-large assets (such as quadratic voting or a logarithmic scale). This would help normalize the voting power and damp the impact of massive whales, while still respecting their larger stake. (reply to 182564)

&rey: *any emoji (reply to 182573)

Jaкe ~: I think it's a good system to avoid polls being tampered with by botnets, but it would be better not to give so much weight based on wallet volume (reply to 182574)

Иван: The emission is equal to 5 billion.  Its not problem of one whale with 0,0001% of supply (reply to 182574)

P: This isn't what Durov would want. He knows the community has no chance against the team holding most of the supply (reply to 182574)

P: Exactly (reply to 182562)

wen: Hi everyone,  I have successfully manually started an auction for an expired .ton domain using the following method:  1. Find the NFT contract address of the domain. 2. Send a transaction to that address with the binary payload: te6ccsEBAQEADgAAABhO0UtlAAAAAAAAAACvkFQ4 and the minimum amount (e.g., 20 TON for an 8-character domain). 3. This triggers the auction and makes me the first bidder.  Now I want to do the same for an expired .gram domain.  My question: - Is the same binary payload te6ccsEBAQEADgAAABhO0UtlAAAAAAAAAACvkFQ4 valid for triggering the auction on a .gram domain? - Or does it require a different op-code or message structure?  Thanks for your help!

— 2026-06-02 —

testertesterov: Hello everyone  In my opinion, the voting system in TON doesn't look very fair. In active voting, there is a situation of attack of ~99%.  Can we developers do something about this?

testertesterov: Most likely, this is due to an incorrect initial token distribution in the hands of a few :) and the community will never be able to make decisions in the main token of The Open Network.

testertesterov: There is another possibility for whale attacks on voting. They can split a large capital into a large number of wallets and vote en masse. For us, this will not be noticeable at all :)

GIDEON: It doesn’t work that way A snapshot was taken  And you don’t actually use ton to vote but your balance before the snapshot determines the power of your vote (reply to 182601)

testertesterov: And this power can come from thousands of wallets :) For example, this is all the wallets of one whale. (reply to 182602)

testertesterov: I think the voting could have been fixed if the wallet's power wasn't taken into account, but rather the actual number of tokens the wallet is willing to spend irreversibly on voting in TON.

testertesterov: But in this case nothing is resolved because there may be even more catastrophically few votes and the funds will still be able to attack the voting.  I think it is beneficial for the funds to rename this. Why then all this circus with community voting :)  Although the goal of renaming is completely unclear to me, what will this give the community besides confusion in the names?

&rey: One with 100 TON cannot irreversibly spend much of them, while one with 10M TON could sometimes spare 10K. (reply to 182605)

testertesterov: Yes. I further analyzed this case. Overall, the result is the same as in the current community vote :) The community needs a whale that can vote against the renaming. (reply to 182609)

Rivol: A few thoughts on what a fairer system would actually need, because I have been thinking about this and there is no clean answer, only trade-offs.  The hard part is that you need two things at once that pull against each other. You need to cut whale dominance (so 10M TON does not just decide), and you need sybil resistance (so a whale splitting 10M into a million wallets of 0.01 each does not fake a crowd). Almost every model solves one and breaks the other. Pure token weighting stops sybil but is plutocracy. Square-root or equal-vote cuts whales but a whale just splits into thousands of wallets and wins anyway. One-person-one-vote solves both but needs KYC, which kills anonymity.  The only direction I see that does not require identity is using on-chain history as a sybil filter. A wallet's weight could factor in things money cannot instantly fake: account age, real transaction history, genuine activity over time, interaction with real protocols. A whale can split 10M into a million fresh wallets, but it cannot give a million wallets two years of organic history. Thousands of wallets all funded from one source days before a snapshot, with no prior life, are detectable and should not count as a thousand people. Weight earned by time and real use, not just balance held at one instant.  It is not perfect either - someone with resources can age wallets in advance - but it is the only path that reduces both whales and sybils without forcing KYC. The point is that "balance at a snapshot" is the laziest possible measure: it captures neither real participation nor real distinct people. A system that wanted to reflect the community would weight by behavior over time, not money at a timestamp.  And one more thing on splitting, the other direction. Because the snapshot was taken on 31 May, before the announcement, any wallets pre-arranged for this vote are already frozen in that snapshot. If clusters were set up early to simulate support, the funding trails are sitting on-chain right now, datable to before the public announcement. Preparing wallets for a vote nobody had announced yet is itself a signal of who knew in advance. That is checkable once voting closes.

Rivol: Interesting that even in a simple one person poll the community leans against the rename. The onchain vote will almost certainly pass "for" anyway - because there balances count, not people. That gap between what people want and what balances decide is the whole point. (reply to 182615)

P: It's just a circus (reply to 182616)

Bro: The DAO vote is based on TON. Telegram is the largest holder and validator. Consequently, the results are already evident. This represents the myth of decentralization. Wishing everyone a pleasant day.

testertesterov: Yes. I think the community is against it because we already have a good Gram. Why do we need another Gram :) (reply to 182616)

P: That Gram became GRM (reply to 182619)

testertesterov: Yes. As far as I understand, they were told via Telegram to rename the token, but the name Gram is often used within the ecosystem. It's very strange that this happened at all :) (reply to 182620)

P: Durov has no consideration for his community (reply to 182626)

testertesterov: Absolutely. In this case, it is very noticeable. (reply to 182627)

P: It's not the first time, it happened before (reply to 182628)

P: He only cares about the money

~~~: He is not interested in money, but in power, which is seen in money. (reply to 182630)

P: Absolutely (reply to 182632)

testertesterov: I think that's why they don't give him much money for project movement. (reply to 182632)

~~~: The funniest thing about this situation is that we're just wasting our time, and our opinions won't be taken into account in the decision. As for me, this is done on purpose to create a stir. What will happen? And because of people like us, it will happen, and higher minds we don't know will pay attention to this situation and ultimately decide everything for us.

cb 🥊: what is the best launchpad on TON?

S: Are there still launch pads? (reply to 182646)

cb 🥊: Where do people launch on TON (reply to 182656)

Olaosun Oluwaseun: Blum memepad (reply to 182646)

testertesterov: Friends, does anyone know a whale to overpower the vote on renaming TON to Gram? I think it's better to vote against it at the very end of the auction.

testertesterov: I'm sure that in many projects the word TON is hardcoded and many will forget about this.

Mirka: These projects won't break because of renaming (reply to 182664)

testertesterov: For users, a message that no longer exists will be displayed, and there is another argument against Gram, which has 4 letters, while TON has only 3 letters. TON looks much stronger in terms of power. I think it is better to rewrite the whitepaper specification. Historically, the implementation TON turned out to be much better. (reply to 182665)

testertesterov: At one time, Toncoin was renamed to TON to make it convenient and understandable on exchanges and other tools, and now we are returning to complete chaos. This reminds me of the movie-series Fallout.

— 2026-06-03 —

Order: Maybe, i can help you Could you send me a DM? (reply to 177373)

Elis፝֯֟ey: I am so sorry, someone know when will there be an update adding new validators?

&rey: Validator set doesn't require a network update, it is automatically elected twice a day. (reply to 182745)

Elis፝֯֟ey: Good (reply to 182746)

testertesterov: Now the largest validator is Telegram. (reply to 182745)

Elis፝֯֟ey: Now limit 400 validators ? (reply to 182749)

Bro: Small clarification: adding new validators does not require a regular network update.

Bro: In TON, the validator set is elected automatically through the Elector mechanism each validation round. That round is about 18.2 hours, not exactly twice per day.

Bro: Also, the current configured maximum is 400 validators. So increasing that limit would require a configuration/governance change, not just waiting for an update.

testertesterov: I think the number depends on the consensus config. On tonscan, I managed to count 400. To become a validator, we need to be at least as rich as Pavel Durov. (reply to 182750)

Bro: Who doesn’t have 300k TON lying around anyway? (reply to 182754)

Abyss: Hey guys, what's up? I just want to know if the potential renaming of TON somehow will impact the tech side. What should I be ready for since my mini app heavily relies on the blockchain. Thank you

testertesterov: Hello  I think anything can happen after the token name update. The main thing is that there is no hardcoding with the old name. It will also be necessary to monitor the status of the services with which the project is integrated. (reply to 182758)

testertesterov: I think they will all have to write GRAM(TON). The user will constantly ask how to buy Toncoin similarly to the return of the wall which turned out to be unnecessary for anyone :)  I think this is happening because they are afraid of the GRAM(GRM) token.

Bykasif: hi everyone! is there a tg support account for builders.ton.org?  Seems like, they changed the portal with new auth methods. I created my account with TONID before. Now default log in options do not allow me use TON ID. Therefore, I updated my TON ID profile with github account and logged in by github. However, it shows me an empty account - lost all my previous data. any idea please?

testertesterov: I don't know if this even works after refactoring. We published achievements and projects on Identity, but they were fired. (reply to 182775)

Bykasif: hmm apparently lots of things changing all at once. but they should have been more responsive I guess.. is there anyone left from ecosystem, to ask for testnet TON for our project development. (2 TOn per hour is not enough for us)? (reply to 182793)

testertesterov: I think such a huge shardchain needed huge capitalization, but they were afraid to invest. In the end, they had to switch to a single shard. (reply to 182795)

testertesterov: For the last time, I tried to organize micro-payments to AI requests on TON starting with the test network, but transactions stopped working there, and after that, I moved on to another project. (reply to 182795)

A: HI  i used to connect with my ton ID but now it does ask me about an email what should i do ?

GIDEON: I’m not really against the naming to gram honestly   It’s been ton for a while and no upward movements  At least if he renames, something will change and I’m sure Durov has a plan (reply to 182663)

Hashirama: anything for beginners in this topic pls

Hashirama: where to start?

— 2026-06-04 —

testertesterov: Yes. I think Pavel Durov and Telegram team thought exactly like that when they came up with step 4.  But the name of the main TON network token is not the reason why users do not use the blockchain on a mass scale and why there is no market capitalization. (reply to 182809)

Alina: I'm still getting frequent out of sync errors on my liteserver is the issue still not fixed?

TON Support: There was an incident reported on toncenter_v2 starting on 2026-06-03 at 17:23:20 UTC and recovering at 2026-06-03 at 17:56:02 UTC. The last message indicates "Consecutive failures: 3. Last error: upstream status 504: 504 Gateway Timeout - error code: 504" for GET /api/v2/getBlockTransactions. (reply to 182973)

Adapt: Hi guys, since 1st June validator software update, I think I've noticed slower broadcasts (blocks, transactions) in my node and my indexer seems to be slower than before. I'm testing also Rust and Go overlays to see what is happening but the only observation is like most of the peers / nodes disappeared or stopped broadasting data, compared to before 1st June. Is this expected after soft update? or maybe operators have not updated theirs servers yet? or maybe there is an option / need to connect to any validator for proper performance for indexing?  By checking TON source code I can see this AnySender change but don't think that would cause that huge impact? Any suggestions much appreciated.

&rey: - Config30: set enable_observers from 0 to 1, introducing a separate overlay for fast candidate broadcasts among validators. (reply to 182977)

&rey: Might be related.

Adapt: Do you know if anyone can connect to that overlay? (reply to 182979)

&rey: I'd assume only the validators. (reply to 182982)

Adapt: Thanks. Do you know if I could talk to any validator operator (anyone here?) to get connection to that stable overlay? (reply to 182984)

EverydayTech: Yeah sure I do  Need a help? (reply to 180001)

A: HI  i used to connect with my ton ID but now it does ask me about an email what should i do ? (reply to 182806)

Mr X | ByteLords ⚡: This (reply to 182615)

— 2026-06-05 —

S: Hello

S: Kisi ke pass ton hai friends

S: Ya usdt ho

S: Please help

S: Muse apne ton withdrawal karne hai uske liye muse ton chahiye

S: Ya usdt ho please

testertesterov: Yes. In many chats, the name Toncoin wins. It's strange that in the main voting, the name Gram is leading. (reply to 183021)

S: Any please help in withdrawal of 124 ton

testertesterov: Another friend of mine has been worried about this question for a long time. Governments of many countries are hindering us from working normally with cryptocurrency. (reply to 183048)

Mr X | ByteLords ⚡: Isn't strange, is just scripted (reply to 183047)

testertesterov: How do you think the current renaming of the main token will help the blockchain? (reply to 183053)

Rivol: It won't help the blockchain at all, it helps Durov legally repackage TON as Telegram's own asset ahead of an IPO. (reply to 183054)

testertesterov: I think it would be better to position Telegram as another application in The Open Network ecosystem, but money seems more important. (reply to 183056)

Rivol: Exactly. It was sold as independent and decentralized precisely so people would build and fund it, and now that the value is there, Telegram takes ownership instead of being one app among many. The decentralization was never the goal, it was just the wrapper that got everyone to trust it first.  And here's the part people miss: the same people who sold you "decentralization, community, not our project" a few years ago are now selling you the exact opposite, "it's ours, Telegram takes over" and the crowd cheers either way. Because as long as the price pumps, your interests line up with theirs and you're happy to believe whatever story they tell. The moment they don't, you'll find out you never had any say.  And what's the point of building here then? Why would any serious dev spend years on a chain where one company can rename the coin, replace the foundation and rewrite the rules whenever it wants. Independent projects already get bought out or pushed out, and the rest will just build for the owner. TON isn't a decentralized network anymore, it's a Telegram product where one company calls every shot. (reply to 183057)

Rivol: Fair question. I'm not trying to convince anyone, I'm putting facts out so people can see what's happening and decide for themselves. As for leaving, criticizing where a network is going isn't the same as abandoning it. I built here because I believe in what TON could be, and pointing out that one company is quietly taking it over is exactly because I care, not because I don't. If everyone who sees the problem just leaves quietly, the takeover gets easier. I'd rather say it out loud. (reply to 183059)

Александр: Decentralization will never be truly fair as long as the weight of a voice is determined by the "size of the wallet" and the power of the available hardware. There will always be someone who has their own plans for certain things and, at the same time, can afford to realize these plans.  In my opinion, fair decentralization and honest vote counting should have been considered from the very beginning of the construction. Now, however, when there is an organized group of people capable of pushing through any movement with huge resources, it is written with a pitchfork in the water.  For a real struggle in this situation, resources are required, at a minimum, comparable to what Telegram has, minus other builders who share your point of view. Otherwise, this will simply be attempts to convince Telegram to take the community's opinion into account in its own interests no more than that.

Александр: And, for this, you will have to have a sufficiently "loud" voice to be heard, and for Telegram to take this voice into account - fearing that the old builders will leave, and the new builders simply will not come here, knowing about the situation. (reply to 183062)

Rivol: You're right, a wallet weighted vote was never going to be fair, especially with one group holding most of the stake. But that's the point: they sold this as decentralized and community owned while knowing the stake was concentrated from the start. The problem isn't that fair decentralization is hard, it's that they marketed something they never built.  And you're right that without huge resources this won't become real leverage, it stays at the level of asking Telegram to consider the community. But that's not nothing, and you said why yourself: the only thing that moves them is a loud enough voice, builders leaving and new ones not coming because they know the situation. Telegram responds to that, not to charity. So making the situation impossible to ignore is the leverage. Silence is what makes the takeover free.  And the vote running right now shows where we actually are, it's theater. Durov announced the rename as a done deal and didn't even mention the vote, because it was settled back on September 8, 2025, when they bought the Gram trademark. Meanwhile he says Telegram becoming the largest validator "strengthens decentralization", when one player taking the majority is centralization by definition. Their own Dune dashboard shows about 65% of the stake in one Telegram/Durov linked group, the honest Nakamoto coefficient there is 1, not the 83 their site advertises. They can take the network, that's reality. What they don't get to keep is the decentralization label while doing it. (reply to 183062)

TB: Is it now still possible to get my TON to Ethereum as now exchanges don’t support the withdrawal?

TON Support: Yes, it is still possible to bridge TON to Ethereum. While the official TON bridges from 2021-2023 are now considered legacy and not recommended for use, the TON ecosystem features multiple third-party bridge providers that offer different features and...  support various networks, including Ethereum.  These bridges typically work by locking assets on the source blockchain (TON) and minting equivalent wrapped tokens on the destination blockchain (Ethereum). When you want to move assets back, the wrapped tokens are burned on Ethereum, and the original assets are unlocked on TON.  You can find more information about the TON bridge ecosystem on the TON Docs, and existing bridge statistics might be available on the TON Foundation Bridge Dashboard.  Source: Bridges - TON Docs (reply to 183066)

&rey: CEX should work fine. (reply to 183066)

&rey: From what application? Are you sure it's not a scam offer you got? (Use only English in this chat.) (reply to 183048)

testertesterov: It seems that only centralized interfaces have been left available, in which money can be blocked for no reason. (reply to 183067)

Reuben.TON🌊: he doesn't have any plan bro (reply to 182809)

Reuben.TON🌊: very true (reply to 182834)

Александр: I can be wrong, but shouldn't this have been visible from the very beginning? Was there no discussion about this from the roots? (reply to 183064)

&rey: Mind naming where TON would be concentrated from the start? (reply to 183064)

testertesterov: Yes. Then we took TON just like that in the test network and the Telegram wallet app was so-so. (reply to 183076)

&rey: Have you came across better solutions?  I'll note that common protections from sybil attacks (and quadratic voting or such needs some) are usually arbitrary at least in chosen parameters, which is not a desirable property. (reply to 183062)

testertesterov: I think nothing better has been invented than the banal counting of votes based on the precise identification of the election participant (excluding a huge part of vote rigging), but no one can see which side they voted for.  I think in this case, Pavel Durov decision would not have gathered enough votes and could even have lost, as was seen at the very beginning of the voting before the actions of the whales. (reply to 183078)

&rey: As in, KYC for voting? (reply to 183079)

testertesterov: Yes. This could add precision, but no one should see how an address voted.  After all, a serious decision is being made to rename the network's main token. Currently, it turns out that Pavel Durov will boast that the majority voted for him, while in reality, it's just due to the actions of a whale at the very beginning of the voting. (reply to 183081)

&rey: It would drive away most voters though. (reply to 183082)

Александр: Correct, the current voting model does not protect against plutocracy: more capital equals more power. And this, judging by the active discussion over the past week, and as an obvious fact, is a major problem for a decentralized system.  Voice uniqueness verification does not necessarily have to be conducted through KYC. One can understand whether you are facing a robot's wallet or a living human's wallet through many other parameters: wallet history, behavior patterns (collecting, participation in staking, in community activities, in applications, network building, etc.), and ultimately a rating system. Some applications have already tried to do something similar, for example, Nomis.  The decision-making system can be multi-level, including voting as a community with uniqueness verification, as well as the current staking model of validators, applying quadratic voting at both levels.  I agree that there is no ideal and ready-made approach, but the current one is objectively not about democracy and decentralization. (reply to 183082)

testertesterov: Yes. They might get scared of identification, but you can do this from an address with a balance of 0 and then simply forget about this address (revoke KYC), and the most important thing here is the anonymity of voting. Most likely, modern encryption methods for votes will have to be used so that no one can see the voter's choice. (reply to 183083)

&rey: which doesn't make identification any more appealing. I personally would say that my identification has no business going anywhere near a blockchain. (reply to 183085)

testertesterov: So you would have missed these elections, and anyway, identification is everywhere now. I think it's already too late to worry about this :) (reply to 183086)

&rey: As for serious devs... I'll remark that TON sites did not take off but TMAs did, while the former are hardly more complex; make of it what you will.

testertesterov: I think the TMA story ended about ~2 years ago :) Now I use them less and less. (reply to 183088)

testertesterov: TON sites have not become popular because they are not supported in any modern browser like Chrome, Mozilla, etc.

testertesterov: Ah. Recently I was also offered to mine on a video card Gram, but there is no such thing as mining in TON. We have PoS. (reply to 183094)

testertesterov: Perhaps in this way they want to reuse my GPU resources for higher-paying AI tasks.

TB: Which cex, I checked and none has it now (reply to 183068)

盘丝洞-客服2号: My deposit of 22.99 TON to Fragment Ads has been stuck for 7 days with correct Ref comment. Ticket sent but no human respons

盘丝洞-客服2号: what should I do

~~~: I just don't understand why Durov doesn't see the dark horses plowing in the shadows and promoting his ecosystem. Okay, then he would at least communicate closely with us. But it turns out that he doesn't see the real lift of his ecosystem and doesn't want to see it. In that case, we need to either attract attention or show our value. For example, just leave his ecosystem for a week and his ecosystem growth will immediately decline. Maybe he'll come to his senses later that what's most important to him isn't a stuffed wallet, but the people who are in the same boat with him.

uzkro: LOL, paperhands (reply to 183111)

盘丝洞-客服2号: Are there real people here?

cb 🥊: Just me

testertesterov: Yes, but I don't like to go KYC. (reply to 183113)

盘丝洞-客服2号: But I had already made the payment before.....

盘丝洞-客服2号: However, my funds did not arrive after I recharged. I sent an email to customer service but received no response.

盘丝洞-客服2号: what should I do

testertesterov: I think we need to write to Pavel Durov in private messages about this.

NoDOg: That's really true. Actually, sol has developed to this day because they focus on memes. People buy sol to play memes, the price is maintained and increases in the long term. There are too many memes in sol. As for ton, I really like it because the memes here are gentle and more developed. Even bsc, cz have interacted with the community a lot, to grow bnb. If you really want to attract tons, please focus on pulling up the meme. Along with that is the development of the ecosystem. Finally, I still emphasize that memes are always the craziest thing to increase the price of Ton

vangaard: You can DM Durov (reply to 183119)

vangaard: For a fee of 11,250 Stars (reply to 183122)

testertesterov: It's strange that it's only 11, not 30. I've had a limit of 30 set for a long time already. (reply to 183123)

vangaard: 35 (reply to 183124)

NoDOg: Just now. The big kols have communities that have overflowed Ton. Because really meme sol and bsc are too boring. They see the potential to promote ton. Ton increased the price of 2.9 also because some of the kols supported it. They all want ton to be like sol from 2 dollars and up to 200 dollars. Sol is very similar to Ton. If the executives here hear it, please develop this (reply to 183121)

testertesterov: Ah. Yes. It's truly expensive :) (reply to 183125)

盘丝洞-客服2号: OK thank you (reply to 183122)

testertesterov: I think CZ has a better reputation. It's easier for him to perform on the current blockchain ring. (reply to 183121)

Daniel: anyone faced this error after upgrading TON by mytonctrl? failed to parse config: [Error : 0 : json does not fit TL schemeExpected string, got Object]

NoDOg: Not at all. Durok is a person we admire. He is not inferior to cz. The core issue is to attract players to the meme. You see, kol has worked very well, volume increased, price increase is due to meme. If you play a lot of memes, the price will be stable. Actually, talking about technology, no one notices now, but if you talk about memes, the whole world knows about you. Elon is not famous for technology on x, elon is famous for meme (reply to 183129)

盘丝洞-客服2号: He's not listed among the administrators; I can't find him. (reply to 183122)

vangaard: No wait. I was only joking (reply to 183132)

vangaard: If you really wanna dm him, this is his handle;  @  "monk" (reply to 183134)

testertesterov: Following the whitepaper specification by Nikolai Durov published in your channel, we can assume that GRM is already listed on exchanges as the original Gram, which was renamed to GRM. (reply to 183134)

盘丝洞-客服2号: Can he help me solve this problem, friend (reply to 183137)

vangaard: Probably not. And sadly, the only official support available is through their email. (reply to 183139)

testertesterov: You can also write to Pavel Durov via email. He used to share it. (reply to 183140)

Rivol: Sure. 96% of TON supply was mined by Large Givers in July-August 2020, across just 248 addresses, not a crowd. At least 85.8% was mined by a handful of groups connected to each other and tied to the TON Foundation, four coordinated groups alone make up 78%. That's the concentration at the root, and it never dispersed. By the TON Foundation's own Dune dashboard, the labeled circle alone is over half of staked TON today: Ton Strategy (Stotz's NASDAQ vehicle) 27.85%, Telegram 19.41%, plus the TOP-owned products, Wallet in Telegram 4.75% and Tonstakers around 8%, plus Vy Capital 2.42%. And that's only what's tagged, on top of it are unlabeled groups and the same early miners. The rest is mostly commercial providers like Kiln and Chorus One renting out institutional money, not community. Concentrated from day one, still concentrated now. (reply to 183076)

vangaard: But why memes though? Why not something with utility? (reply to 183131)

vangaard: IMO, TON being associated with a large social media platform is 100x better than craving for memecoins. (reply to 183143)

NoDOg: The utility is really good. But you should know that most players on dex only know memes. Look at how sol and bnb work. Last time the boss durok interacted, he received attention from the kol. Let's develop memes. Let's see the truth, the last growth was because of utya from 5m to 50m. Let's focus on meme (reply to 183143)

Rivol: It was visible, and that's the uncomfortable part. The mining's been onchain since 2020. But it looked decentralized: the supply went to hundreds of wallets that were really a few connected groups, concentration dressed up as a crowd. So the data was never hidden, the meaning was. With "DAO, community, decentralized" on top, people read those wallets as "early believers", not "one circle owning the network", and nobody traced them forward to today's stake. There was discussion at the roots, the narrative buried it every time. That's the trick: don't hide the data, just give people a story that makes them not look. The second role is what finally makes the first one obvious. (reply to 183075)

&rey: Many people have been saying back then that they donate to TF of their free will, by the way. (reply to 183148)

testertesterov: If this social network has an excellent reputation, but we only have good code and a questionable reputation. (reply to 183144)

Rivol: That's the part that actually proves the point, though. If those early miners were donating to the foundation, that's not evidence they're an innocent crowd, it's evidence the miners and the foundation are the same orbit. A genuinely independent miner has no reason to route funds into the foundation's treasury. The fact that a big share of the mined supply flows from those wallets into TF, and from TF onward, is exactly the connection I'm pointing at. "They did it of their free will" doesn't change that, of course you donate freely when it's your own foundation and your own coin. Voluntary movement inside one circle is still one circle. The question was never whether it was forced, it's whether it was ever actually distributed to a real community. It wasn't. (reply to 183149)

testertesterov: Yes. Agreed. An independent miner 100% held and gave nothing to anyone. (reply to 183152)

Ali: Hey guys, has anyone seen this with self-hosted ton-indexer streaming?  We use toncenter/ton-indexer-worker:v1.2.8, ton-trace-emulator reads validator events from --db-event-fifo. This setup worked before, but the issue seems to have started after our recent liteserver / node update.  FIFO works and emulator produces New masterchain block / Finished confirmed block, but it often logs: failed to emulate shard block: cannot fetch config params configuration parameter 43 is invalid  and sometimes crashes right after: Signal: 11 Stack Backtrace  OOM=false, Redis/nginx/ws/FIFO/validator look fine.  threads=1 is stable but basically does not produce useful traces. threads=5 produces traces, but crashes/restarts often.  Is this a known issue with ton-indexer-worker:v1.2.8 + current mainnet config param 43?  Could it be related to recent liteserver/validator updates?

&rey: I'm referring to https://t.me/tonblockchain/20. (reply to 183149)

testertesterov: Yes. I think reasonable miners did not donate anything to them. (reply to 183156)

testertesterov: All other chats were blocked by Pavel Durov, and the TON Community chat was also blocked. (reply to 183160)

MAX: Friends, I see it's fun here. Who can recommend where to start developing TMA?

MAX: The last message from Rivol was very interesting. It's strange that the /report command deletes such interesting thoughts. I just started writing TMA and am looking for where to quickly place it to test it on users. (reply to 183156)

TON Support: To start developing Telegram Mini Apps (TMAs), you can use the @telegram-apps/create-mini-app CLI tool. This tool will help you set up a new mini-application project with pre-configured libraries and template files, which you can then customize according to your needs. Source: [TMA create CLI — TON Docs](https://docs.ton.org/ecosystem/tma/create-mini-app#:~:text=@telegram%2Dapps%2Fcreate%2Dmini%2Dapp (reply to 183168)

0xAttra: Hi, is there any data to determine the share of wallets w5 compared to the rest?

Tand: Why was a large portion of the funds sent to Telegram addresses from this fund to support contracts for commercial entities? (reply to 183156)

Tand: Can we say that Swiss laws were violated? (reply to 183156)

Tand: And the last question: can the management provide an accounting to the community? Where did the 27 million from the non-commercial fund go?

— 2026-06-06 —

MAX: The robot's answers are very bad in the developer community. I asked about the available resources from Telegram for hosting TMA. I recently heard about a cloud from Telegram where you can host applications and it seems they only announced this, but there is no implementation yet. (reply to 183172)

cb 🥊: Agreed

Ankit j: Whats everyone is developing on ton these days ?

Ali: I fixed the issue by compiling the trace module from the ton-index master branch—looks like the latest Node update required some changes. (reply to 183154)

MAX: I connected an aggregator of the most modern models and asked them to create an interesting TMA for TON. Now I'm watching as the team of agents writes code. (reply to 183199)

xylica: have you made any progress on this? (reply to 182977)

cb 🥊: Trading bots (reply to 183199)

Ankit j: Nice (reply to 183207)

Adapt: I checked various sources to find out but it seems that the stability is for validators, custom overlays participants - the public overlay is just less important. You can see that clearly by comparing how many transactions are broadcasted via public overlay vs transactions actually added to the chain. There is like 10-30%+ transactions onchain that are never seen in public overlay from my stats.  Nothing new really, BSC most of txs propagates via private mempool infra and get public broadcasted right after the block is built.  I read that as anti-spam + anti-mev + better centralisation ¯\_(ツ)_/¯  Anyhow, if you guys have ideas how to make indexers / chain data readers stable & still fast, feel free to share. Thanks. (reply to 183204)

Ankit j: Agent ? (reply to 183202)

xylica: are you indexing from public broadcast overlay? why? i just noticed the average external message speed (from broadcasted to accepted) is slower in the past few days (reply to 183210)

cb 🥊: Any good TON groups for launches

Alina: Did you check if it gets better as you connect to more overlay peers? (reply to 183210)

Alina: There are also some complicated rules for getting the broadcast reliably from the peers (such that they don't ignore you and do actually share the broadcast with you)  Most public libraries (go and python) don't handle receiving broadcasts well The C++ ton node is much better but it might not connect to many peers

Alina: I'm pretty sure when I was testing it I could get 100% external message coverage when I was extracting the broadcasts received by multiple self hosted ton nodes / lite servers   One was not enough but a few worked perfectly

Adapt: I think I've tried everything and yes, I understand the C++ TON source code and the chain protocol. After 1st June most peers simply got silent. It's like 90% drop.  Of course I don't have all info what changed so it is possible that these peers work perfectly within custom overlays now but not broadcasting that actively into public overlay as before. Just an observation, I might be wrong and I might be missing something obvious. (reply to 183215)

Adapt: When did you test that? After or before 1.06? (reply to 183217)

Alina: Before (reply to 183219)

Adapt: I see. Anyways, I'm sure people responsible for the infra setup / validators are fully aware of all of that, and there must be a reason why this is happening.  I'll keep watching source code changes, maybe this will be calibrated or changed in the future. Need to use what's there and just accept glitches / slower indexing. (reply to 183220)

Ankit j: Guys, any good TON groups for launches??

Andrey: sharp framing, and the "on-chain history as sybil filter" direction is right — let me add what it looks like in practice, because I've been building exactly this detection on TON.  The strongest signal isn't account age on its own — it's graph structure. Sybil clusters share funding ancestry (a common source wallet a few hops back), near-identical timing, and behavioral homogeneity — same actions, same amounts. A whale can fake balances and even age individual wallets, but coordinating thousands of them leaves a fingerprint the timestamps don't: they trace to the same lineage and move in lockstep. The graph doesn't lie even when the clock does.  Your "aged wallets in advance" point is the genuinely hard case — agreed. But aging is expensive, and coordination at scale still clusters. Empirically these setups are everywhere on TON: I flag launches daily where 90%+ of supply sits in dozens of wallets funded from a handful of sources, with no organic history. One today was 103 wallets / 99% of supply / 10 funding origins.  Happy to compare notes or share cluster data if useful — it's a more tractable on-chain problem than people assume. (reply to 183078)

xylica: i'm interested in this, is it possible to extract external messages from canonical node or are you running your fork of node to achieve that? (reply to 183217)

Alina: I'm running a fork.  in file validator/manager.cpp to the top of this method I added a log:   void ValidatorManagerImpl::new_external_message(td::BufferSlice data, int priority) {   LOG(ERROR) << "new_external_message:" << td::buffer_to_hex(data); (reply to 183226)

Alina: A fork is not difficult to run, in mytonctrl you do an upgrade pointing to your repository:  MyTonCtrl> upgrade https://github.com/<your_username>/ton (reply to 183226)

xylica: yes, i run my own fork too, i'm just curios about receiving external messages from the node instead of listening to the public overlay (reply to 183228)

Alina: what did you change in the node? (reply to 183229)

xylica: i'm currently experimenting with increasing out of sync threshold from 16 blocks to 96 blocks in ValidatorManagerImpl::out_of_sync apparently, when this threshold is crossed it will go into archival download mode, before subsecond, 16 blocks is ~38.4 seconds but after subsecond it's only 6.4s which is way too low, a minor hiccup will make it goes down an out of sync spiral (reply to 183231)

Hosein: Hi

— 2026-06-07 —

Angel: Hi

Angel: Can you let me know what coin are under TON token

TON Support: Toncoin is the native cryptocurrency of the TON ecosystem. Within the TON ecosystem, there are also fungible tokens called Jettons, which are comparable to Ethereum's ERC-20 tokens. Additionally, there are Non-Fungible Tokens (NFTs) and Soulbound Tokens (SBTs).  Source: Overview - TON Docs, Token overview - TON Docs, Glossary - TON Docs, Glossary — TON Docs, Start here — TON Docs, Start here - TON Docs (reply to 183256)

Angel: Can you share me the ca of jettons

TON Support: I cannot provide a definitive "CA" (contract address) for all Jettons, as Jettons are a standard for creating fungible tokens on TON, similar to ERC-20 tokens on Ethereum. Each Jetton has its own unique contract address.  To deploy and mint a new Jetton...  on the mainnet without writing code, you can use the official tool called TON MINTER.  If you need to retrieve specific Jetton data, you can use the Jetton master contract's get_jetton_data() method. For example, USDT on TON is implemented as a Jetton, and its minter contract address is EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs.  Source: Send jettons — TON Docs, How to get jetton supply data — TON Docs, How to work with Jettons using WalletKit on the Web platform — TON Docs (reply to 183258)

✿┋𝐌𝓇 ㄕʳศ𝑠ʱ𝓪ⁿէ ᥫ᭡፝֟፝֟.ִֶָ𓂃°: Hello everyone

TON Moderator: Hello, Em Út! Read rules and click button below.

MAX: I think TMA on TON is in most cases code generation by AI agents, and they present it to us as if they understand assembly. (reply to 183211)

MAX: For some reason, at the international level, they prefer to pay salaries not through TMA on TON, but on Ethereum with huge capitalization. (reply to 183257)

Ankit j: Oh wow (reply to 183275)

Ⓜ️ Boldgold: Currently I guess leveraging the best momentum to raise the Ton Network value rest in the real ability of TMA's to solve a specific and current Issue that not only the blockchain but it's users are facing while interacting with it daily. When we stretch to give a great answer to the day to day frictions while using TMA then we can really position the backend on the road of real utulity and scalable scheme. I think real utulity is the key to a token or plateforme scalability, when the utulity rises so does the plateforme and its token and in other ways when the utilities are limited or un-useful it's no wonder the token declines and so does the plateforme. We need to restructure most of the project to face and resolve some Real deep utility and the network not just launching and product but a specific solution bringer and then I think we can start pulling up real solutions for the green momentum of Ton

— 2026-06-08 —

MAX: Yes. For example, we can write an extension for different IDEs for Mira, but for this they must have a public API. This will allow the capabilities of GLM to be revealed for long-term tasks. Currently, access to them is available, but through the chat in Telegram, it is not possible to reveal all capabilities. (reply to 183304)

M: Gm

Biggest: Hi Everyone I'm Seeking Co-Founder – Marketing & Partnerships  can I post about my project

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: Hey, Im building a privacy pool factory contract for TON and any jettons. Think of Tornado or Tonnel, but anyone can create a pool for any jettons.   You generated a secret, deposit a fixed amount, then later withdraw to a fresh address. A zero-knowledge proof breaks the on-chain link between depositor and recipient.  Under the hood: Groth16 zk-SNARKs over BLS12-381, verified on-chain inside the TVM. Merkle tree of depth 20 enabling 1M deposits per pool. No admin fees.   A trust setup is needs to be done.  Groth16 needs a per-circuit trusted setup. If the secret randomness of that setup ever leaks, someone could forge withdrawal proofs and drain pools.  The fix is a public multi-party ceremony.  Each participant injects randomness and destroys their own secret. As long as one participant stays honest, the setup is permanently secure and no one can forge proofs. Every contribution is public and verifiable.  > So I’m doing this public call:  The multi-party ceremony is open and we’re looking for contributions  Contributing is Docker-based, clone, run a script, add your randomness, PR. It takes a few minutes.  One honest contribution from you makes this trustless for everyone.  > How to contribute ?  https://github.com/TONresistor/zk-resistor-ceremony?tab=contributing-ov-file  End of the ceremony: TBA   ZKResistor Contracts:  https://github.com/TONresistor/zk-resistor-contracts  Live on a mainnet test deployment: zk.resistance.dog (for tests only.)

Max: Hi! We’re making the alpha version of our TVM contract decompiler to FunC publicly available: https://decompiler.swap.coffee/?address=EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs At the moment, it works with contracts of medium complexity. For a certain subset of contracts, it produces recompilable code; for another subset, the recompiled output is byte-for-byte identical. Some non-trivial instructions are not supported yet, such as dynamic dispatch and try/catch. Currently, FunC is the only supported output language, although the original contract itself may essentially have been written in anything. We’re planning to add Tolk support and improve instruction coverage. The source code is planned to be opened a bit later. We’d be happy to hear your feedback :)

xylica: this is very awesome, i'm also working on a tvm decompiler (reply to 183362)

Ekaterina: Seems like a cool tool! Is it open source? (reply to 183362)

Max: not at this moment, but planned (reply to 183368)

Sviatoslav: Why nor? (reply to 183369)

— 2026-06-09 —

Reuben.TON🌊: he's still working on it (reply to 183377)

friendly: who got legit site?

&rey: Could you explain what you're asking about? (reply to 183391)

friendly: Finna grab some shi (reply to 183392)

mack: shi best hitting fr

Алексей: ​My name is Alexey Terentev ( karamik) , and representing the international group of developers at TOTAL Protocol Foundation, I am presenting the first stable release of ECHO SDK (v1.0.0). ​ECHO SDK is a decentralized, serverless transport layer (Layer 0) that enables Android devices to exchange data completely offline—without internet, cellular connectivity, or central servers—utilizing direct Wi-Fi and BLE mesh networking. ​The framework is natively architected for the TON cryptoeconomic ecosystem. It features a built-in Proof-of-Relay economic model that transforms millions of standard smartphones into a distributed physical infrastructure network (DePIN), rewarding transit nodes with TON-compatible micro-rewards for packet relaying. ​Current Project Status & Architecture: ​Public Repository: The complete production-ready framework structure, component layout, and CI/CD automation pipeline are published at: [https://github.com/karamik/ECHO-SDK-v1.0.0](https://github.com/karamik/ECHO-SDK-v1.0.0) ​Hardware & OS Optimization: We have successfully addressed core mobile-mesh vulnerabilities, including Android 13/14 Doze Mode background execution, broadcast storm prevention via a Dynamic Trickle Algorithm, and hybrid time-slicing for Wi-Fi chipsets lacking simultaneous AP/STA hardware concurrency. ​Legal Compliance: The transit database operates exclusively on encrypted chunks via ChaCha20-Poly1305 AEAD. Intermediate nodes cannot read payloads, qualifying the user's device under the legal status of a Mere Conduit. ​We are looking to discuss the integration of ECHO SDK as an unblockable, alternative transport layer for Telegram, as well as applying for the TON DePIN Grant track. ​Please note that the underlying low-level hardware communication algorithms and proprietary crypto-core mechanics remain protected intellectual property. They are kept private and provided via compiled binary modules under our Apache 2.0 commercial licensing structure. ​We are ready to provide an in-depth technical Litepaper and schedule a live architectural demonstration upon your request. ​Best regards, karamik // TOTAL Protocol Foundation

Lev: Hello, I would like to share a new project I built.

Lev: It’s a dedicated TMA launchpad with simplified Periodic Uniform-Price Auctions

Lev: Cross-chain swaps from Base and Poly USDC to Gram

Lev: If you are an app builder and want to raise funding - check out my bio

Lev: 💎 Gram Store opens after name switch from Toncoin to Gram. Get exposure, get funded!

— 2026-06-10 —

Srockusmani: Hi everyone,   Are there any active workgroups or benchmarks on TON for accelerating ZK proof verification or MSM (Multi-Scalar Multiplication) on GPUs (specifically NVIDIA T4/L4)?   We have optimized MSM execution on T4 GPUs by using a Flat Bitmask Contiguous Matrix layout to enforce coalesced memory reads, achieving a 2x speedup compared to Pippenger baselines (e.g., 4M Points in 14.17s vs 28.49s).  We are looking to discuss if/how this library can be integrated to optimize TVM (TON Virtual Machine) ZK precompiles or TON-based ZK-rollups.   If anyone is working on TON ZK-infrastructure or wants to test the precompiled library (.so) on their T4 dev environments, please let me know or DM.   Verification Script: https://raw.githubusercontent.com/TheHigherDimensionalBeing/yggdrasil-msm-benchmark/main/verify_extension.py Staged Binary (.so): https://razwhqwbfnjxhbwgnsss.supabase.co/storage/v1/object/public/compliant-mrfs/yggdrasil_msm_core.so

&rey: TVM runs, and will run, without any access to GPU. (reply to 183449)

&rey: Note that not only validators run the contracts, but also the emulators; mobile too, and it would be inconvenient to require GPU access there.

Srockusmani: Yes the TVM runs purely on-chain (CPU) to execute the verifier our MSM engine is targeted at the off-chain Prover side e.g., sequencers/provers generating ZK proofs for TON L2s, bridges, or private dApps before submitting the final proof to the TVM verifier Proving latency is where the T4/L4 GPU bottleneck is and that is what this optimization addresses

Srockusmani: exactly, client-side emulation and mobile devices should absolutely not require GPU access. In a standard rollup/L2 setup, only the off-chain prover operator (who aggregates batches of transactions runs the heavy GPU hardware to generate the proof. Mobile users and emulators only submit transactions or run lightweight verification, which remains purely CPU-based. There is no GPU requirement for the end-user or validator. (reply to 183452)

&rey: I should also ask: ZK-STARK or ZK-SNARK?

Srockusmani: for zk-snarks since msm is the main bottleneck there. starks don't use elliptic curves or msm (they mostly do ntt and hashes) (reply to 183456)

ʀᴇꜱɪꜱᴛᴏʀ ₁₃₁₂.ₜₒₙ: Still open. End of the ceremony TBA (reply to 183398)

MAX: Friends, who knows when they will start refactoring ton/mcp to gram? For example, the send_ton event.

MAX: I think this is one of the main components of AgentKit, and everywhere there the old name ton or TON is hardcoded during transaction sending.  Good thing I hedged my bets earlier and set "@ton/mcp": "0.1.13", so there won't be an unpredictable package version jump, and most likely we'll have to leave the send_ton event as is, since who knows what exactly depends on this route.

— 2026-06-11 —

Protocol 2099: Hi! I deleted the old analytics key, now I can't create a new one with the same name, it says "App name is already in use". Help me release the name from the archive, please

Protocol 2099: maybe I need to write to another support chat with this issue?

Killstory: Hi, who’s the point of contact for the TON Network validator node side?

TON Support: For technical assistance regarding TON Network validator nodes, you can contact @mytonctrl_help_bot on Telegram. This bot is specifically for validators and will not assist with general node-related questions.  Source: Run a validator — TON Docs (reply to 183496)

Ankit j: So, do ton supporting full agentic AI implementation? (reply to 183464)

— 2026-06-12 —

Alex: Hi everyone! Is anyone else having trouble logging into builders.ton.org right now?  I need to create analytics key, but the only option I have is using this service.  I've tried all the available methods (TON ID, GitHub, Google), but after confirming, I just get stuck in an endless redirect loop on the main site. Also, when I try the email login route, the confirmation email never arrives.  Is this a known issue, or is it just on my end? Thanks!  —-  I’ve also tried address from this message https://t.me/tondev_eng/176407

Cryptiko: Same issue here. After I get the “login successful” message, the site starts refreshing in a loop, and then I eventually get a 502 error from the host. (reply to 183530)

Alex: Integration with analytics is required by telegram store. Does anyone have success case of publishing app without the integration since the service we have to use to get the token isn’t working? (reply to 183530)

antares: Tell me what to do: I bought a username on a fragment for 10 tons, but the username didn't arrive, and 4.75 tons didn't return to my wallet. I don't know where to turn for help.

Ququita: hi guys, does anybody know something about tonpay api key? Where do I get that key?

TON Support: The TON Pay API key is optional, but it enables merchant features like transaction visibility in the dashboard, webhook notifications, and centralized wallet management. To get one, open the TON Pay Merchant Dashboard, sign in, go to Developer → API Keys, and then generate or copy an existing API key.  Source: How to build a transfer - TON Docs, Build a transfer — TON Docs (reply to 183566)

Ququita: there is no link to the "TON Pay Merchant Dashboard" How do I get that dashboard url? (reply to 183567)

TON Support: To access the TON Pay Merchant Dashboard, you need to open it and sign in to your merchant account. The API key, if provided, enables transaction visibility and webhook notifications within the dashboard.  Source: How to build a transfer - TON Docs, Build a transfer — TON Docs, TON Pay webhooks - TON Docs, TON Pay webhooks (reply to 183568)

Ququita: I understand I need to open it, but I can't find it

Konstantin: Hi everyone! Trying to figure out the current state of TON acceleration programs. ton.org/accelerator now redirects to the homepage after the redesign, the grants repo on GitHub links to an expired domain, and TON:Acc / accelerator_ton looks inactive since 2025. Is there an active accelerator, incubation or grants track right now for early-stage mini apps (working MVP, pre-traction)? Where do applications actually go in 2026? If Foundation programs are paused — is TON Ventures still the right door, or has this moved somewhere else entirely?

— 2026-06-13 —

Reuben.TON🌊: its no longer available   durov might still do something about it   what are you building buddy ? (reply to 183576)

JANAINA: It's there (reply to 183570)

MAX: I am deploying applications on identityhub app, but currently there are no active grants and contests there. The last activity was from stonfi. (reply to 183576)

Konstantin: Building HatchWorld - a geolocation game as a TON mini-app, live in production. Was trying to map the current grant/accelerator landscape since the old Foundation track is paused. (reply to 183581)

Homo: Seems fake to me. (reply to 183602)

Konstantin: You can try (reply to 183604)

Homo: Send proof here, otherwise you are 75%+ scammer. (reply to 183605)

Konstantin: It's funny. Just type HatchWorld in the search. I think videos aren't allowed here. (reply to 183606)

Konstantin: It’s pretty sad that even in developer chats people immediately suspect each other of scams. The ecosystem has been so polluted by scammers that even legitimate projects get treated with suspicion first, before anything else. (reply to 183606)

Homo: No, TON is the least polluted by scammers cryptocurrency. (reply to 183610)

Konstantin: I actually got scammed here for $20 on a fake consultation when I asked for help with TON smart contract development. (reply to 183611)

Homo: Proof? (reply to 183612)

Konstantin: The scammer, of course, deleted our chat and changed their name, but they’re still in this group. (reply to 183613)

Homo: Ok, how you got scammed? Tell me (reply to 183614)

Konstantin: I asked for help with writing a smart contract code. A few people reached out to me in DMs. We negotiated the price - they initially wanted $100-200, but we agreed on $20 for the first iteration.  I uploaded the code to GitHub. However, the person just sent me something that was basically ChatGPT output - complete nonsense that didn’t actually solve anything.  So be careful- if someone here offers to help you, make sure they prove first that they actually understand the topic before you trust them your money   When I asked where the real result was, they deleted the chat and changed their name. I tried messaging them from another account, but I got blocked and that was it. (reply to 183615)

Homo: What? (reply to 183618)

Homo: How come you uploaded the code, but they gave chatgpt code aswell?  I think you are scammer (reply to 183618)

Konstantin: I don't think initiating this kind of discussion has any value in a professional community. I've shared my experience, and that should be enough. (reply to 183620)

Ciclone.cash | Privacy Wallet: Dude, there are no serious developers that will write you a smart contract for 20$ (reply to 183618)

Konstantin: I didn't ask to write a contact. I asked for a consultation. (reply to 183628)

Ⓜ️ Boldgold: Currently I think one thing the network is lacking the most, is project tackling real cases utulity and reliability in day to day use cases. I can see it out how diverse project are popping up here and there and mostly talking about complex solving issues which are at first hand pretty cool and honorable. It helps the chain becomes better and more epic in it's core fonctionalities. But on the other hands when you pitch these products to a new web3 user he'll be like just get get me a cup of cappuccino first because no direct utulity found. The real deal here is the fact that mass crypto adoption should be the Genesis behind the conception of a project if not the product will just be entering the large pool of quite excquisite yet not real relevant apps currently overfloading the market. Don't be a part of it.  I'm currently building a stack allowing users to send token peer to peer in Tg while leveraging their Identify and also not the least building an agentic marketing OS that will enable web3'ers to create, automate and scale their activities and or businesses through automation and agentic AI. The Tg Mini app is currently in alpha test Mode on railway and will be fully released very soon.   I will like to share more with really deep and developed oriented minds developers to see out how we can push this early project even more further.   And also encourage all dev to make more deeper research and dive into areas that hold and bring real utilities in daily use cases. Only these can bring long-term adoption and product scalability.

quant: hi

quant: i have started to make a new launchpad for TON

quant: i have noticed that many launchpads in the space are not that good and need a lot of work w making it look good making it easy for retail etc, so i wil make the first one, users can acces it by the website or by telegram, so users are just one click away

quant: and

quant: o need help w smart contracts

TON Support: To develop smart contracts on TON, you can use the Rust toolkit, Acton, with Tolk as the recommended smart contract language. Smart contracts on TON can include wallets, electors, and multi-signature wallets.  Source: Introduction to smart contract development — TON Docs (reply to 183654)

Natha: Can’t you report them to one of the group’s admins tho? (reply to 183614)

Natha: Can’t agree more with what you said. Meanwhile, WalletConnect is full-on real-life advertising. (reply to 183634)

— 2026-06-14 —

Kiril: How do i submit a vulnerability of TON network if i found one?

TON Support: You can submit a vulnerability of the TON network through their security bug bounty program, which encourages security researchers and developers to participate.  Source: Security audits | The Open Network (reply to 183680)

Stryder 💎 🟧 👣: Built a small free tool for TON jetton projects. It pulls a token's holders (via TonAPI) and generates a clean airdrop / whitelist recipient list — automatically excluding LP pools, contract addresses, and flagged/scam wallets, so rewards don't go to dead addresses or your own liquidity. Output is a Ton Console-ready CSV. If you (or a project you know) are planning an airdrop, whitelist, or holder reward — drop the jetton address or DM me and I'll run it and send you the list. Free, no signup, no wallet connection. Happy to share how it works. (I build on TON — made STRYDE, a fitness mini app.)

— 2026-06-15 —

Emilia: Hello, I have a quick question about the official website. Following Telegram’s takeover, the homepage has changed, but it is still possible to access the old website, for example the roadmap. Is this intended behaviour? Thank you

M: Hi all - TON / FunC smart-contract engineer, available for paid contract work.  Background: led a regulated real-world-asset tokenization build on TON — FunC contracts applying ERC-3643 compliance concepts (identity, transfer controls, mint / burn / pause), plus the .NET + TypeScript backend around it. Open source: a permissioned TEP-74 jetton with allowlist-gated transfers, live on testnet → github.com/mnamvari/compliant-jetton-ton  Looking for tightly-scoped FunC work: jetton / contract development, TypeScript wrappers + test suites, on-chain / off-chain integration, or contract review and cleanup. Fixed scope, milestone-based, paid in stablecoin. Happy to start with something small.

Lev: Hey we’re launching Gram Store this week on June 18. It’s the very first launchpad dedicated to Telegram Mini Apps. No memes, no pump and dumps.

Lev: Developers can list their apps for auctions, get initial validation, and graduate to Stonfi with a new token and a liquidity pool seeded with the proceeds raised

Lev: It’s ideal for builders who have apps and ideas they want to fund but can’t get in front of VCs, or don’t know where to start with their fundraising. Link in bio, or DM me for early access

— 2026-06-16 —

Shahruz: why is fee of transfering the nfts to new wallet is so high ? i have 100 username nfts but icant transfer it cause of high fees , what you suggest??

TON Support: NFT transfers are more complex than regular Toncoin transfers because they involve multiple internal messages between contracts, which contributes to higher transaction fees. These fees are made up of import fees, storage fees, and compute fees. Validators set the levels for these fees through voting.  Source: How to work with NFTs using WalletKit on the Web platform, Transaction fees — TON Docs (reply to 183781)

Shahruz: Higher transaction fees? Are you saying it costs 1 TON per NFT? You tried to prevent the bulk transfer of scam NFTs, but this change has made things even worse. (reply to 183782)

Shahruz: Why is it cheaper to send NFTs from a wallet with transaction history, but more expensive when sending them to a new wallet?

&rey: It is not. (reply to 183784)

&rey: You shouldn't touch NFTs which require 1 TON for transfer, they are often scam. (reply to 183783)

Willy: Maybe it is about how new wallets (v4/v5) should be deployed by the owner after receiving TON   Like the deploy fee, that is paid on first transaction by owner (reply to 183785)

&rey: Both of these would be negligible though (reply to 183789)

Willy: It could explain why new wallets are more expensive

Willy: Yes, sure, but different amounts could confuse at first (reply to 183790)

Shahruz: i cant send you image to show you its not scam its real username nft with 0.5 ton fee for transfering (reply to 183786)

H1Xploit: Is the owner of @topco here? I found a critical security bug.

— 2026-06-17 —

Galaxy: share me the image to confirm it (reply to 183799)

Shahruz: who the hell are you (reply to 183896)

ImThomas: ?? (reply to 183899)

Shahruz: i just talk to ton help support , they told me use another native wallet , wich one you prefer to use ? (reply to 183786)

Shahruz: ?? (reply to 183902)

ImThomas: which wallet are you using before? (reply to 183903)

Shahruz: tonkeeper (reply to 183905)

Shahruz: please dont come to pv and stop telling im tonkeeper support with indian accent

ImThomas: try importing to Tonhub (reply to 183907)
