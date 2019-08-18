(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{298:function(e,t,a){"use strict";a.r(t);var s=a(22),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"deterministic-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deterministic-build","aria-hidden":"true"}},[e._v("#")]),e._v(" Deterministic Build")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-assert-correct-environment"}},[e._v("1. Assert Correct Environment")])]),a("li",[a("a",{attrs:{href:"#_2-reproduce-builds"}},[e._v("2. Reproduce Builds")])]),a("li",[a("a",{attrs:{href:"#_3-verify-builds"}},[e._v("3. Verify Builds")]),a("ul",[a("li",[a("a",{attrs:{href:"#windows"}},[e._v("Windows")])]),a("li",[a("a",{attrs:{href:"#linux-osx"}},[e._v("Linux && OSX")])])])])])]),a("p"),e._v(" "),a("hr"),e._v(" "),a("blockquote",[a("p",[e._v("Reproducible [or deterministic] builds are a set of software development practices that create an independently-verifiable path from source to binary code.  ~ "),a("a",{attrs:{href:"https://reproducible-builds.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ReproducibleBuilds.org"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("This guide describes how to reproduce Wasabi's builds.")]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"_1-assert-correct-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-assert-correct-environment","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. Assert Correct Environment")]),e._v(" "),a("p",[e._v("In order to reproduce Wasabi's builds you need "),a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.microsoft.com/en-us/software-download/windows10ISO",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows 10"),a("OutboundLink")],1),e._v(" and the version of "),a("a",{attrs:{href:"https://www.microsoft.com/net/download",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Core SDK"),a("OutboundLink")],1),e._v(" that was the most recent in the time of building the "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("release"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"_2-reproduce-builds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-reproduce-builds","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. Reproduce Builds")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/zkSNACKs/WalletWasabi.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("hash of the release"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" // This works from "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.1")]),e._v(".3 release, https://github.com/zkSNACKs/WalletWasabi/releases\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" WalletWasabi/WalletWasabi.Packager/\ndotnet restore\ndotnet build\ndotnet run -- --onlybinaries\n")])])]),a("p",[e._v("This will build our binaries for Windows, OSX and Linux from source code and open them in a file explorer for you.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/8XAQzz4.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"_3-verify-builds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-verify-builds","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. Verify Builds")]),e._v(" "),a("p",[e._v("You can compare our binaries with the downloads we have on the website: https://wasabiwallet.io/\nIn order to end-to-end verify all the downloaded packages you need a Windows, a Linux, and an OSX machine.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/aI9Kx0c.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows","aria-hidden":"true"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),a("p",[e._v("After you installed Wasabi from the "),a("code",[e._v(".msi")]),e._v(", it will be in "),a("code",[e._v("C:\\Program Files\\WasabiWallet")]),e._v(" folder.\nYou can compare it with your build:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("diff")]),e._v(" --no-index win7-x64 "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"C:\\Program Files\\WasabiWallet"')]),e._v("\n")])])]),a("h3",{attrs:{id:"linux-osx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-osx","aria-hidden":"true"}},[e._v("#")]),e._v(" Linux && OSX")]),e._v(" "),a("p",[e._v("You can use the Windows Subsystem for Linux to verify all the packages in one go.\nAt the time of writing this guide we provide a "),a("code",[e._v(".tar.gz")]),e._v(" and a "),a("code",[e._v(".deb")]),e._v(" package for Linux and .dmg for OSX.\nInstall the "),a("code",[e._v(".deb")]),e._v(" package and extract the "),a("code",[e._v("tar.gz")]),e._v(" and "),a("code",[e._v(".dmg")]),e._v(" packages, then compare them with your build.")]),e._v(" "),a("p",[e._v("After installing WSL, just type "),a("code",[e._v("wsl")]),e._v(" in explorer where your downloaded and built packages are located.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/yRUjxvG.png",alt:""}})]),e._v(" "),a("h4",{attrs:{id:"deb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deb","aria-hidden":"true"}},[e._v("#")]),e._v(" .deb")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" dpkg -i Wasabi-1.1.6.deb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("diff")]),e._v(" --no-index linux-x64/ /usr/local/bin/wasabiwallet/\n")])])]),a("h4",{attrs:{id:"tar-gz"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tar-gz","aria-hidden":"true"}},[e._v("#")]),e._v(" .tar.gz")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -pxzf WasabiLinux-1.1.6.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("diff")]),e._v(" --no-index linux-x64/ WasabiLinux-1.1.6\n")])])]),a("h4",{attrs:{id:"dmg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dmg","aria-hidden":"true"}},[e._v("#")]),e._v(" .dmg")]),e._v(" "),a("p",[e._v("You will need to install "),a("a",{attrs:{href:"https://www.7-zip.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("7z"),a("OutboundLink")],1),e._v(" (or something else) to extract the "),a("code",[e._v(".dmg")]),e._v(": "),a("code",[e._v("sudo apt install p7zip-full")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("7z x Wasabi-1.1.6.dmg -oWasabiOsx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("diff")]),e._v(" --no-index osx-x64/ WasabiOsx/Wasabi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v(" Wallet.App/Contents/MacOS/\n")])])])])},[],!1,null,null,null);t.default=r.exports}}]);