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
