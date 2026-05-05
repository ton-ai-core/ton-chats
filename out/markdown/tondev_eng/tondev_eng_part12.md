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
