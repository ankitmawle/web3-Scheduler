Try it out at :- scheduler.tokeniz.tech/aurora

## Inspiration
We were working on **Tokeniz2.0** our upgrade to our season2 project making completely decentralized gift cards based on **ERC721**. and we wanted to create way to allow people to **transfer their gift cards at any point, and also via emails**.
So we built ways to integrate scheduling transfers with Tokeniz2.0
But then we decided to create something hassle free for every user and allow all ERC721 NFTs. 
That gave rise to Web3 Scheduler...

## What it does
Web3 Scheduler is a smart contract you can find it at this address:- 
0x5ceb3F7584284571fE8AeE8C79be831Fbdaa7F5E
which users can interact with from our website, where they can find all their owned ERC721 tokens. 
from there they can directly schedule sending their assets at any later point in time. 

After integrating with Tokenniz2.0 users can mint their customized web3 greeting, add ETH or any ERC20 tokens to the the NFT based greeting and schedule sending on special occasions.


the combination of Web3 scheduler and Tokeniz2.0  can also be used to pay salaries, while also providing a distinctive proof of experience

## How we built it
We first created a smart contract that allows users to select the time on chain at which they want to send the NFTs. this also generates a onchain event which your backend bot stores as a future event. 

when the time of transfer arrives our bot triggers a smartcontract to carryout the operation onchain. 

We also integrated it with Tokeniz to users can mint their own NFTs as giftcards and present them to their loved ones. 

this also allows **smart contract to send crypto vai mail**, with a bonus being that the crypto remains in your wallet all the time, without worrying about storing the funds on any cex 

## Challenges we ran into
We ran into various challenges while searching aggregators, upkeeps and managed nodes providers annd their documentation, while working on aurora network. plus I personally think documentation on aurora can be improved

## Accomplishments that we're proud of
We are proud of creating something different and unique with actual use cases

## What we learned
we learned a lot while also gaining most important lessons about system architecture development. 

## What's next for Web3 Scheduler
with web3 scheduler next we are planning to build a special launchpad and ICO platform.
we also want to enter in b2b market by allowing bulk mints, bulk schedules for various different payment requirements  