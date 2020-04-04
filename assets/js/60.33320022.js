(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{273:function(e,t,a){"use strict";a.r(t);var i=a(17),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"network-level-privacy-bitcoin-core-vs-wasabi-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-level-privacy-bitcoin-core-vs-wasabi-wallet"}},[e._v("#")]),e._v(" Network Level Privacy - Bitcoin Core vs Wasabi Wallet")]),e._v(" "),a("p",[e._v("Bitcoin is a peer-to-peer network of full nodes which define, verify, and enforce the Bitcoin consensus rules.\nThere is a lot of communication between them and metadata can be used to de-anonymize Bitcoin users.")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#problem"}},[e._v("Problem")]),a("ul",[a("li",[a("a",{attrs:{href:"#clearnet-light-clients"}},[e._v("Clearnet light clients")])])])]),a("li",[a("a",{attrs:{href:"#wasabi-s-solution"}},[e._v("Wasabi's solution")]),a("ul",[a("li",[a("a",{attrs:{href:"#full-node-by-default-block-filters-over-tor"}},[e._v("Full node by default & block filters over tor")])])])]),a("li",[a("a",{attrs:{href:"#in-depth-comparison"}},[e._v("In depth comparison")]),a("ul",[a("li",[a("a",{attrs:{href:"#bitcoin-core"}},[e._v("Bitcoin Core")])]),a("li",[a("a",{attrs:{href:"#bitcoin-core-tor"}},[e._v("Bitcoin Core + Tor")])]),a("li",[a("a",{attrs:{href:"#wasabi-wallet-light-node"}},[e._v("Wasabi Wallet light node")])]),a("li",[a("a",{attrs:{href:"#wasabi-wallet-full-node"}},[e._v("Wasabi Wallet + full node")])])])]),a("li",[a("a",{attrs:{href:"#universal-attacks"}},[e._v("Universal Attacks")]),a("ul",[a("li",[a("a",{attrs:{href:"#protection"}},[e._v("Protection")])])])])])]),a("p"),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[e._v("#")]),e._v(" Problem")]),e._v(" "),a("h3",{attrs:{id:"clearnet-light-clients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clearnet-light-clients"}},[e._v("#")]),e._v(" Clearnet light clients")]),e._v(" "),a("p",[e._v("When the communication to the network is unencrypted over clearnet, then there is an easy correlation of the Bitcoin transactions to the IP address of the peer who sent it.\nThe IP address can even be used to find the physical location of the user!")]),e._v(" "),a("p",[e._v("A Bitcoin full node broadcasts not just the transactions of its user, but it also gossips all of the other transactions that it has received from its peers.\nThus it is very difficult to find out which transactions originated from which full node.\nHowever, when a node or a wallet does not gossip all transactions, but only the transactions of its user, then it is easier to find out which node has sent those specific transactions.")]),e._v(" "),a("p",[e._v("There are light wallets, which query a backend server to get information regarding specific addresses, or use "),a("RouterLink",{attrs:{to:"/using-wasabi/BIPs.html#bip-37-connection-bloom-filtering"}},[e._v("BIP 37")]),e._v(" bloom filtering SPV wallet protocol, which is "),a("a",{attrs:{href:"https://jonasnick.github.io/blog/2015/02/12/privacy-in-bitcoinj/",target:"_blank",rel:"noopener noreferrer"}},[e._v("extremely bad for privacy"),a("OutboundLink")],1),e._v(".\nAnd there is Electrum, which "),a("a",{attrs:{href:"https://www.reddit.com/r/Bitcoin/comments/2feox9/electrum_securityprivacy_model/ck8szc0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("sends your addresses"),a("OutboundLink")],1),e._v(" to random Electrum servers.")],1),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("When the user sends the extended public key, or a filter of all the addresses to the central server, then the server can "),a("strong",[e._v("COMPLETELY")]),e._v(" deanonymize the users.")])]),e._v(" "),a("h2",{attrs:{id:"wasabi-s-solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wasabi-s-solution"}},[e._v("#")]),e._v(" Wasabi's solution")]),e._v(" "),a("h3",{attrs:{id:"full-node-by-default-block-filters-over-tor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#full-node-by-default-block-filters-over-tor"}},[e._v("#")]),e._v(" Full node by default & block filters over tor")]),e._v(" "),a("p",[e._v("Wasabi checks if there is a local Tor instance installed, and if so, it uses this to onion-route all the traffic to and from the network.\nIf Tor is not already installed, then it is accessed automatically from within Wasabi.\nThis means that by default, all network communication is secured from outside snooping and the IP address is hidden.")]),e._v(" "),a("p",[e._v("In order to fully verify everything, running a full node is essential.\nIf "),a("a",{attrs:{href:"https://github.com/bitcoin/bitcoin",target:"_blank",rel:"noopener noreferrer"}},[e._v("bitcoind"),a("OutboundLink")],1),e._v(" is installed and run on the same computer as Wasabi, then it will automatically and by default connect to the full node.\nIt is also possible to connect Wasabi to a remote full node on another computer by specifying the local IP address or Tor hidden service in the settings.\nThen, Wasabi pulls the verified blocks and queries the mempool from the full node.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Wasabi ships with Bitcoin Knots!")]),e._v(" "),a("p",[e._v("Since v1.1.11 Wasabi has "),a("RouterLink",{attrs:{to:"/using-wasabi/BitcoinFullNode.html"}},[e._v("partial Bitcoin Knots integration")]),e._v(".\nThis means that it is possible (but not mandatory) to start Bitcoin Knots during the launch of Wasabi.\nWithout having to install or configure anything.")],1)]),e._v(" "),a("p",[e._v("However, even if no full node is installed, Wasabi has a light client mode based on "),a("RouterLink",{attrs:{to:"/using-wasabi/BIPs.html#bip-158-compact-block-filters-for-light-clients"}},[e._v("BIP 158 block filters")]),e._v(".\nThe Wasabi server sends a filter of all the transactions in each block to all the users.\nThen, users check locally if the block contains any transactions with their addresses.\nIf not, then the filter is stored for later reference, and no block is downloaded.\nHowever, if there is a user transaction in that block, then Wasabi connects to a random Bitcoin P2P node over Tor, and asks for this entire block, not only one transaction.\nThis block request is indistinguishable from the regular P2P gossip, and thus nobody, neither the server nor the full node, know which addresses belong to the user.")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Privacy by default!")]),e._v(" "),a("p",[e._v("Wasabi has network level privacy as good as a Bitcoin full node.")])]),e._v(" "),a("h2",{attrs:{id:"in-depth-comparison"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#in-depth-comparison"}},[e._v("#")]),e._v(" In depth comparison")]),e._v(" "),a("p",[e._v("Furthermore, network level privacy consists of two sub-categories.")]),e._v(" "),a("ul",[a("li",[e._v("Private UTXO Retrieval")]),e._v(" "),a("li",[e._v("Private Transaction Broadcasting")])]),e._v(" "),a("h3",{attrs:{id:"bitcoin-core"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitcoin-core"}},[e._v("#")]),e._v(" Bitcoin Core")]),e._v(" "),a("h4",{attrs:{id:"private-utxo-retrieval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#private-utxo-retrieval"}},[e._v("#")]),e._v(" Private UTXO retrieval")]),e._v(" "),a("p",[e._v("Bitcoin Core downloads all the blocks ever created and establishes your wallet balances locally.\nThis is as good as it gets.")]),e._v(" "),a("h4",{attrs:{id:"private-transaction-broadcasting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#private-transaction-broadcasting"}},[e._v("#")]),e._v(" Private transaction broadcasting")]),e._v(" "),a("p",[e._v("Bitcoin Core broadcasts transactions to other peers on the clearnet, unencrypted.\nOther peers cannot figure out which transaction originates from a specific node, because Core does not only broadcast its own transactions, but also propagates every other transaction that hits its mempool.\nHowever some papers note it’s not bulletproof:")]),e._v(" "),a("blockquote",[a("p",[e._v("Bitcoin transaction propagation does not hide the source of a transaction very well, especially against a “supernode” eavesdropper that forms a large number of outgoing connections to reachable nodes on the network.\n"),a("RouterLink",{attrs:{to:"/using-wasabi/BIPs.html#bip-156-dandelion-privacy-enhancing-routing"}},[e._v("Dandelion: Privacy-Preserving Transaction Propagation")]),e._v(".")],1)]),e._v(" "),a("h4",{attrs:{id:"adversaries-identified"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adversaries-identified"}},[e._v("#")]),e._v(" Adversaries identified")]),e._v(" "),a("ul",[a("li",[e._v("Malicious Peer")]),e._v(" "),a("li",[e._v("Supernode")])]),e._v(" "),a("h3",{attrs:{id:"bitcoin-core-tor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitcoin-core-tor"}},[e._v("#")]),e._v(" Bitcoin Core + Tor")]),e._v(" "),a("p",[e._v("You can use Bitcoin Core with Tor, which solves some of the above mentioned issues.\nIn this case a supernode cannot track back transactions to your IP address.")]),e._v(" "),a("p",[e._v("An entity that can break Tor is a universal adversary, however, most Tor attacks are not possible if exit nodes are not involved.\nIt is reasonable to assume that this entity can break the onion routing, not Tor's encryption itself.")]),e._v(" "),a("h4",{attrs:{id:"adversaries-identified-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adversaries-identified-2"}},[e._v("#")]),e._v(" Adversaries identified")]),e._v(" "),a("ul",[a("li",[e._v("Tor breaker")])]),e._v(" "),a("h3",{attrs:{id:"wasabi-wallet-light-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wasabi-wallet-light-node"}},[e._v("#")]),e._v(" Wasabi Wallet light node")]),e._v(" "),a("h4",{attrs:{id:"private-utxo-retrieval-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#private-utxo-retrieval-2"}},[e._v("#")]),e._v(" Private UTXO retrieval")]),e._v(" "),a("p",[e._v("The backend server served a constant filter table to all the clients over Tor.\nFrom those filters the clients figure out which blocks they are interested in and download them [and some false-positive blocks] from peers.\nOne block per peer, and always over a fresh Tor stream.\nWhen a block was acquired, the peer was disconnected.\nBecause of the end-to-end encryption of the onion network, it immediately defeats an ISP adversary and makes the already impossible job of the Sybil adversary even more impossible.\nThe only adversary that could possibly overcome this would have to setup thousands of full nodes over onion and also break Tor itself.")]),e._v(" "),a("h4",{attrs:{id:"private-transaction-broadcasting-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#private-transaction-broadcasting-2"}},[e._v("#")]),e._v(" Private transaction broadcasting")]),e._v(" "),a("p",[e._v("All Wasabi traffic is tunneled through Tor.\nWasabi connects only to onion nodes, so end-to-end encryption is enforced between the wallet and peers.\nAll this without involving any exit node.\nWasabi connects to each peer through a different Tor stream.\nA new Bitcoin peer is chosen for every transaction broadcast.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Everything over Tor!")]),e._v(" "),a("p",[e._v("Wasabi broadcast transactions to only one peer over Tor, and immediately after that the peer is disconnected.")])]),e._v(" "),a("h4",{attrs:{id:"adversaries-identified-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adversaries-identified-3"}},[e._v("#")]),e._v(" Adversaries identified")]),e._v(" "),a("ul",[a("li",[e._v("ISP")]),e._v(" "),a("li",[e._v("Tor Breaker Sybil Attacker With Thousands Of Full Nodes Over Onion")])]),e._v(" "),a("h3",{attrs:{id:"wasabi-wallet-full-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wasabi-wallet-full-node"}},[e._v("#")]),e._v(" Wasabi Wallet + full node")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Since "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/releases/tag/v1.1.10",target:"_blank",rel:"noopener noreferrer"}},[e._v("v1.1.10"),a("OutboundLink")],1),e._v(", Wasabi has "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/pull/2495",target:"_blank",rel:"noopener noreferrer"}},[e._v("partial Bitcoin Core integration"),a("OutboundLink")],1),e._v(".\nThis means that it is possible (but not mandatory) to start Bitcoin Core during the launch of Wasabi.\nWithout having to install or configure anything.")])]),e._v(" "),a("h4",{attrs:{id:"private-utxo-retrieval-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#private-utxo-retrieval-3"}},[e._v("#")]),e._v(" Private UTXO retrieval")]),e._v(" "),a("p",[e._v("If you have a listening full node running in the background (not only Bitcoin Core, any full node) then Wasabi automatically picks it up and instead of asking peers for blocks, it asks for blocks from your own node.\nUsing Wasabi this way results in the same privacy model as Bitcoin Core's, regarding Private UTXO Retrieval.")]),e._v(" "),a("h4",{attrs:{id:"private-transaction-broadcasting-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#private-transaction-broadcasting-3"}},[e._v("#")]),e._v(" Private transaction broadcasting")]),e._v(" "),a("p",[e._v("Even when Wasabi is connected to your own node, it will broadcast the transaction in the above described way: to one new peer over Tor.")]),e._v(" "),a("h2",{attrs:{id:"universal-attacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#universal-attacks"}},[e._v("#")]),e._v(" Universal Attacks")]),e._v(" "),a("p",[e._v("Every time you use software that interacts with a Bitcoin network, and especially a Bitcoin node, you leave a sticky fingerprint in your traffic.\nIt comes in the form of a small, but unavoidable spike in volume every time a new block is mined and the nodes start gossiping about it.\nThe blocks in Bitcoin are quite big, and the propagation speed is critical for consensus (greater delay means more frequent accidental forks), so such effect is predictable, and, in a sense, inherent to the Bitcoin architecture.")]),e._v(" "),a("p",[e._v("Notably, the volume of block-related messages was drastically reduced since the introduction of Compact Block Relay ("),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 152"),a("OutboundLink")],1),e._v(".\nInstead of requesting whole blocks, mostly consisting of transactions already known to the node, the peer informed of a new block is only requesting the missing transactions.\nYet the amount of extra communications in the seconds following a new block is still considerable.\nThis effect may not be noticeable for a single block, but over time it gets statistically significant, and may get exploited.")]),e._v(" "),a("p",[e._v("As reported by "),a("a",{attrs:{href:"https://m417z.com/bitsniff/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Niko Kudriastev and Michael Maltsev"),a("OutboundLink")],1),e._v(", it is possible to detect Bitcoin communications using nothing but traffic volume over time - an information even most privacy concerned individuals are likely leaking to their law-abiding Internet Service Provider.\nIn this case, using a VPN and running the node over Tor may not be enough to avoid being detected.")]),e._v(" "),a("h3",{attrs:{id:"protection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protection"}},[e._v("#")]),e._v(" Protection")]),e._v(" "),a("p",[e._v("There are many ways to go about it, but staying completely undetected is far from trivial - traditional privacy enhancing tools mostly focus on the packet level, which is orthogonal to the technique.\nLet’s break down the potential defense vectors.")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("VPN / Tor")]),e._v(" - unlikely to affect the time series shape much, and therefore for larger traffic lengths the statistical significance of block-related spikes will inevitably become overwhelming.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Traffic mixing")]),e._v(" - for traffic volumes that are orders of magnitude higher than Bitcoin P2P communications, mixing is likely to be very effective.\nThat would, however, demand constant shielding of both upstream and downstream communications, and couldn't be done effectively by just running the node on a general purpose machine - any noticeably long unshielded period may be enough for detection.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Being your own ISP")]),e._v(" - too spicy for most, but that should work.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Blockstream Satellite")]),e._v(" - the ultimate solution.\nEliminates the traffic analysis threat altogether.")])])]),e._v(" "),a("p",[e._v("Beyond active measures available now, both privacy and bandwidth efficiency of Bitcoin communications are actively worked on.\nIt is entirely possible that the messaging protocol will get to the point where block propagation doesn't trigger any significant spikes in traffic volume.")]),e._v(" "),a("p",[e._v("You can read more about BitSniff "),a("a",{attrs:{href:"https://79jke.github.io/BitSniff/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" and check the interactive demo "),a("a",{attrs:{href:"https://m417z.com/bitsniff/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/9S8xsDq3PTU/hqdefault.jpg)"},attrs:{"data-id":"9S8xsDq3PTU"}},[a("iframe",{attrs:{title:"YouTube 9S8xsDq3PTU","data-src":"https://www.youtube-nocookie.com/embed/9S8xsDq3PTU?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})])])}),[],!1,null,null,null);t.default=o.exports}}]);