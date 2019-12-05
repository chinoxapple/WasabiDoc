(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{221:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"wasabi-hardware-wallet-integration-testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wasabi-hardware-wallet-integration-testing"}},[t._v("#")]),t._v(" Wasabi Hardware Wallet Integration Testing")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v("Windows")]),t._v(" "),e("th",[t._v("macOS")]),t._v(" "),e("th",[t._v("Linux")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Coldcard")]),t._v(" "),e("td",[t._v("pass")]),t._v(" "),e("td",[t._v("pass")]),t._v(" "),e("td",[t._v("pass")])]),t._v(" "),e("tr",[e("td",[t._v("Digital BitBox")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("KeepKey")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Ledger Nano S")]),t._v(" "),e("td",[t._v("pass")]),t._v(" "),e("td",[t._v("pass")]),t._v(" "),e("td",[t._v("pass")])]),t._v(" "),e("tr",[e("td",[t._v("Trezor One")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Trezor Model T")]),t._v(" "),e("td",[t._v("pass")]),t._v(" "),e("td",[t._v("pass")]),t._v(" "),e("td",[t._v("pass")])])])]),t._v(" "),e("h1",{attrs:{id:"how-to-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-test"}},[t._v("#")]),t._v(" How to test?")]),t._v(" "),e("h2",{attrs:{id:"linux-only-step-0-add-udev-rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-only-step-0-add-udev-rules"}},[t._v("#")]),t._v(" (Linux Only) Step 0: Add "),e("code",[t._v("udev")]),t._v(" rules")]),t._v(" "),e("p",[t._v("If you are on Linux you must add some "),e("code",[t._v("udev")]),t._v(" rules if you have not already, so your OS (and Wasabi) can recognize your hardware wallet:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/bitcoin-core/HWI.git\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" HWI/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" udev/*.rules /etc/udev/rules.d/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" udevadm trigger\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" udevadm control --reload-rules\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupadd")]),t._v(" plugdev\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -aG plugdev "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("whoami")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n")])])]),e("p",[t._v("More info here: "),e("a",{attrs:{href:"https://github.com/bitcoin-core/HWI/tree/master/hwilib/udev",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/bitcoin-core/HWI/tree/master/hwilib/udev"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"step-1-build-from-source-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-build-from-source-code"}},[t._v("#")]),t._v(" Step 1: Build From Source Code")]),t._v(" "),e("p",[t._v("Follow this step-by-step "),e("router-link",{attrs:{to:"/using-wasabi/BuildSource.html"}},[t._v("guide")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"step-2-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-test"}},[t._v("#")]),t._v(" Step 2: Test")]),t._v(" "),e("h3",{attrs:{id:"_1-does-wasabi-recognize-your-hardware-wallet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-does-wasabi-recognize-your-hardware-wallet"}},[t._v("#")]),t._v(" 1. Does Wasabi recognize your hardware wallet?")]),t._v(" "),e("h3",{attrs:{id:"_2-does-wasabi-load-your-hardware-wallet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-does-wasabi-load-your-hardware-wallet"}},[t._v("#")]),t._v(" 2. Does Wasabi load your hardware wallet?")]),t._v(" "),e("h3",{attrs:{id:"_3-can-you-send-transaction-using-wasabi-and-your-hardware-wallet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-can-you-send-transaction-using-wasabi-and-your-hardware-wallet"}},[t._v("#")]),t._v(" 3. Can you send transaction using Wasabi and your hardware wallet?")]),t._v(" "),e("h2",{attrs:{id:"step-3-report-results"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3-report-results"}},[t._v("#")]),t._v(" Step 3: Report Results")]),t._v(" "),e("p",[t._v("Report results on GitHub or Reddit.")]),t._v(" "),e("p",[t._v("On GitHub by commenting under this pull request: "),e("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/pull/1341",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/zkSNACKs/WalletWasabi/pull/1341"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("On Reddit by commenting under this thread: "),e("a",{attrs:{href:"https://old.reddit.com/r/WasabiWallet/comments/bdyz84/wasabi_wallet_hardware_wallet_integration_testing/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://old.reddit.com/r/WasabiWallet/comments/bdyz84/wasabi_wallet_hardware_wallet_integration_testing/"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Please include your OS version and your hardware wallet type.")])])}),[],!1,null,null,null);a.default=r.exports}}]);