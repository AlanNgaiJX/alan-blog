(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{516:function(v,_,a){"use strict";a.r(_);var t=a(26),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h2",{attrs:{id:"对称加密-symmetric-cryptography"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对称加密-symmetric-cryptography"}},[v._v("#")]),v._v(" 对称加密（Symmetric Cryptography）")]),v._v(" "),a("p",[v._v("定义：用同样的秘钥或算法，进行数据加密和解密。")]),v._v(" "),a("h3",{attrs:{id:"常见场景-登录时的账号密码-base64转码。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见场景-登录时的账号密码-base64转码。"}},[v._v("#")]),v._v(" 常见场景：登录时的账号密码，base64转码。")]),v._v(" "),a("p",[v._v("缺点：")]),v._v(" "),a("ul",[a("li",[v._v("不安全，在客户端和服务器间使用对称加密几乎等同于裸奔。")]),v._v(" "),a("li",[v._v("因为这个秘钥必须在客户端和服务器间互传一次，大家才能进行数据加密和解密。")])]),v._v(" "),a("p",[v._v("优点：")]),v._v(" "),a("ul",[a("li",[v._v("加密和解密过程简单，速度快。")]),v._v(" "),a("li",[v._v("在不泄露秘钥的情况下，加密效果还是可以的。")])]),v._v(" "),a("h3",{attrs:{id:"包含"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包含"}},[v._v("#")]),v._v(" 包含")]),v._v(" "),a("p",[v._v("AES,DES,3DES")]),v._v(" "),a("h2",{attrs:{id:"非对称加密-asymmetric-cryptography"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非对称加密-asymmetric-cryptography"}},[v._v("#")]),v._v(" 非对称加密（Asymmetric Cryptography）")]),v._v(" "),a("p",[v._v("定义：")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("使用一对秘钥（公钥和私钥）。")])]),v._v(" "),a("li",[a("p",[v._v("私钥不公布，仅服务器知道。公钥可公布。")])]),v._v(" "),a("li",[a("p",[v._v("公钥进行加密，私钥进行解密。")])])]),v._v(" "),a("p",[v._v("模拟过程：")]),v._v(" "),a("ol",[a("li",[v._v("服务器有一对秘钥（公钥与私钥）")]),v._v(" "),a("li",[v._v("服务器将公钥公布给客户端")]),v._v(" "),a("li",[v._v("客户端使用公钥进行数据加密，传输给服务器")]),v._v(" "),a("li",[v._v("在数据传输过程中，加密数据无法被解密，因为私钥不公布")])]),v._v(" "),a("h3",{attrs:{id:"常见场景-对接网络支付-代码仓库托管。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见场景-对接网络支付-代码仓库托管。"}},[v._v("#")]),v._v(" 常见场景：对接网络支付，代码仓库托管。")]),v._v(" "),a("p",[v._v("缺点：")]),v._v(" "),a("ul",[a("li",[v._v("公钥有可能被篡改。")]),v._v(" "),a("li",[v._v("解密过程相对复杂，速度慢。")])]),v._v(" "),a("p",[v._v("优点：")]),v._v(" "),a("ul",[a("li",[v._v("相对安全。")])]),v._v(" "),a("h3",{attrs:{id:"衍生的场景-数字签名-apk应用签名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#衍生的场景-数字签名-apk应用签名"}},[v._v("#")]),v._v(" 衍生的场景：数字签名（apk应用签名）")]),v._v(" "),a("ol",[a("li",[v._v("权威机构给应用开发者一对秘钥（公钥和私钥）")]),v._v(" "),a("li",[v._v("开发者在平台上设置公钥（公布公钥）")]),v._v(" "),a("li",[v._v("开发者使用私钥，进行apk签名（某种算法 + 私钥 = 签名）")]),v._v(" "),a("li",[v._v("开发者将已签名好的apk上传到平台")]),v._v(" "),a("li",[v._v("平台使用公钥解密签名，如果能解密，说明apk包没有被篡改，合法。否则不合法。")])]),v._v(" "),a("p",[a("strong",[v._v("能否使用公钥签名，私钥解签？")]),v._v("\n不能，公钥是公布的，任何人都可以使用这个公钥签名。")]),v._v(" "),a("h3",{attrs:{id:"包含-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包含-2"}},[v._v("#")]),v._v(" 包含")]),v._v(" "),a("p",[v._v("RSA,DSA,ECC、Elgamal、背包算法、Rabin、Diffie-Hellman、ECC（椭圆曲线加密算法）。")]),v._v(" "),a("h2",{attrs:{id:"散列算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#散列算法"}},[v._v("#")]),v._v(" 散列算法")]),v._v(" "),a("p",[v._v("几种线性散列算法（签名算法）：MD5,SHA1,HMAC")]),v._v(" "),a("p",[v._v("这几种算法只生成一串不可逆的密文，经常用其效验数据传输过程中是否经过修改，因为相同的生成算法对于同一明文只会生成唯一的密文，若相同算法生成的密文不同，则证明传输数据进行过了修改。通常在数据传说过程前，使用MD5和SHA1算法均需要发送和接收数据双方在数据传送之前就知道密匙生成算法，而HMAC与之不同的是需要生成一个密匙，发送方用此密匙对数据进行摘要处理（生成密文），接收方再利用此密匙对接收到的数据进行摘要处理，再判断生成的密文是否相同。")])])}),[],!1,null,null,null);_.default=r.exports}}]);