/**
 * 【行好运-日常任务】
 * ！！！！由于添加观看视频任务，因此执行时间较长，一天执行一次即可！！！
 *
 *目前仅支持青龙，青龙环境配置如下：
 *1、依赖类型nodejs 添加 axios 依赖
 *2、脚本管理-新增，复制粘贴脚本内容，文件名填对应xxx.js,即xhy_daily.js
 *3、青龙创建定时任务：命令行填task 即xhy_daily.js
 *4、设置运行时间：0 5 * * *【建议时间，可自行修改】
 *
 * 刚下载app后，需要手动完成几个终身任务，该类别任务一个账号只可做一次：
 * 1、任务-完善个人信息（随便填一个信息后保存即可），获取金币
 * 2、任务-领取邀请人金币（100）
 *
 * 抓包：抓 127.79.242.198
 * 多账户换行或&或@隔开
 * 取请求头里面的 token的值
 * 青龙创建参数：xhyToken
 * 将抓到的token的值填写到 xhyToken 中去
 * xhyToken="token1&token2"
 *
 **/

var _0xod4='jsjiami.com.v6',_0xod4_=['_0xod4'],_0x46b3=[_0xod4,'\x61\x78\x69\x6f\x73','\x65\x6e\x76','\x78\x68\x79\x54\x6f\x6b\x65\x6e','\x74\x68\x65\x6e','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x6c\x6f\x67','\x6c\x65\x6e\x67\x74\x68','\u4e2a\u8d26\u53f7','\x67\x65\x74','\x68\x74\x74\x70\x3a\x2f\x2f\x31\x32\x30\x2e\x37\x39\x2e\x32\x34\x32\x2e\x31\x39\x38\x2f\x6c\x75\x63\x6b\x79\x2f\x76\x31\x2f\x75\x73\x65\x72\x2f\x76\x69\x65\x77','\x64\x61\x74\x61','\x63\x6f\x64\x65','\x75\x73\x65\x72','\x69\x6e\x76\x69\x74\x65\x64\x43\x6f\x64\x65','\x70\x75\x74','\x68\x74\x74\x70\x3a\x2f\x2f\x31\x32\x30\x2e\x37\x39\x2e\x32\x34\x32\x2e\x31\x39\x38\x2f\x6c\x75\x63\x6b\x79\x2f\x76\x32\x2f\x75\x73\x65\x72\x2f\x69\x6e\x76\x69\x74\x65\x64\x43\x6f\x64\x65\x3f\x69\x6e\x76\x69\x74\x65\x64\x43\x6f\x64\x65\x3d\x33\x36\x31\x38\x64\x32\x35\x65','\u6b63\u5728\u51c6\u5907\u4e0b\u4e00\u6b21\u64cd\u4f5c\uff0c\u8bf7\u7a0d\u540e\u3002\u3002','\x70\x6f\x73\x74','\x68\x74\x74\x70\x3a\x2f\x2f\x31\x32\x30\x2e\x37\x39\x2e\x32\x34\x32\x2e\x31\x39\x38\x2f\x6c\x75\x63\x6b\x79\x2f\x76\x31\x2f\x67\x6f\x6c\x64\x2f\x73\x69\x67\x6e\x3f\x67\x6f\x6c\x64\x53\x69\x67\x6e\x53\x65\x74\x74\x69\x6e\x67\x49\x64\x3d\x31\x26\x68\x61\x73\x44\x6f\x75\x62\x6c\x65\x3d\x31','\u5f00\u59cb\u6267\u884c\u7b7e\u5230\u4efb\u52a1\uff01','\x72\x65\x73\x70','\u7b7e\u5230\u6210\u529f\uff01','\x68\x74\x74\x70\x3a\x2f\x2f\x31\x32\x30\x2e\x37\x39\x2e\x32\x34\x32\x2e\x31\x39\x38\x2f\x6c\x75\x63\x6b\x79\x2f\x76\x31\x2f\x67\x6f\x6c\x64\x2f\x64\x61\x69\x6c\x79\x3f\x67\x6f\x6c\x64\x44\x61\x69\x6c\x79\x54\x61\x73\x6b\x53\x65\x74\x74\x69\x6e\x67\x49\x64\x3d\x38','\u5f00\u59cb\u6267\u884c\u5206\u4eab\u4efb\u52a1\uff01','\u5206\u4eab\u7b2c','\u6b21\u6210\u529f\uff01','\x68\x74\x74\x70\x3a\x2f\x2f\x31\x32\x30\x2e\x37\x39\x2e\x32\x34\x32\x2e\x31\x39\x38\x2f\x6c\x75\x63\x6b\x79\x2f\x76\x31\x2f\x67\x6f\x6c\x64\x2f\x64\x61\x69\x6c\x79\x3f\x67\x6f\x6c\x64\x44\x61\x69\x6c\x79\x54\x61\x73\x6b\x53\x65\x74\x74\x69\x6e\x67\x49\x64\x3d\x32','\u5f00\u59cb\u89c2\u770b\u7b2c','\u6b21\u89c6\u9891\uff01','\u5f00\u59cb\u89c2\u770b\u89c6\u9891\u83b7\u53d6\u91d1\u5e01\u6210\u529f\uff01','\x6a\x58\x5a\x59\x73\x62\x6a\x69\x53\x61\x6d\x77\x72\x4b\x69\x54\x2e\x63\x49\x71\x6f\x64\x44\x4d\x6d\x2e\x76\x36\x3d\x3d'];function _0x277d(_0x4b4117,_0xbcf531){_0x4b4117=~~'0x'['concat'](_0x4b4117['slice'](0x0));var _0x2804e8=_0x46b3[_0x4b4117];return _0x2804e8;};(function(_0x10fb5c,_0xd9ced1){var _0x21484e=0x0;for(_0xd9ced1=_0x10fb5c['shift'](_0x21484e>>0x2);_0xd9ced1&&_0xd9ced1!==(_0x10fb5c['pop'](_0x21484e>>0x3)+'')['replace'](/[XZYbSwrKTIqdDM=]/g,'');_0x21484e++){_0x21484e=_0x21484e^0x10fb38;}}(_0x46b3,_0x277d));const $=require(_0x277d('0'));const token=process[_0x277d('1')][_0x277d('2')];getCookie()[_0x277d('3')](_0x282553=>0x1);async function getCookie(){var _0x1fa1b;if(token[_0x277d('4')]('\x0a')>0x0){_0x1fa1b=token[_0x277d('5')]('\x0a');}else if(token[_0x277d('4')]('\x26')>0x0){_0x1fa1b=token[_0x277d('5')]('\x26');}else if(token[_0x277d('4')]('\x40')>0x0){_0x1fa1b=token[_0x277d('5')]('\x40');}else{_0x1fa1b=[token];}console[_0x277d('6')]('\u5171'+_0x1fa1b[_0x277d('7')]+_0x277d('8'));for(var _0x54162f in _0x1fa1b){watchVideo(_0x1fa1b[_0x54162f])[_0x277d('3')](_0x5e7981=>{});}for(var _0x54162f in _0x1fa1b){bind(_0x1fa1b[_0x54162f]);await doTask(_0x1fa1b[_0x54162f]);}}async function bind(_0x529caf){await $[_0x277d('9')](_0x277d('a'),{'\x68\x65\x61\x64\x65\x72\x73':{'token':_0x529caf}})[_0x277d('3')](_0x522cbe=>{if(_0x522cbe[_0x277d('b')][_0x277d('c')]==0x0){if(_0x522cbe[_0x277d('b')][_0x277d('b')][_0x277d('d')][_0x277d('e')]==null){$[_0x277d('f')](_0x277d('10'),{},{'\x68\x65\x61\x64\x65\x72\x73':{'token':_0x529caf}})[_0x277d('3')](_0x522cbe=>{_0x522cbe[_0x277d('b')];});}}});}async function doTask(_0x522c3a){await sign(_0x522c3a);await share(_0x522c3a);}function wait(_0xd15cdb){return new Promise((_0x34dbcd,_0x3279e9)=>{setTimeout(()=>{console[_0x277d('6')](_0x277d('11'));_0x34dbcd(_0xd15cdb);},_0xd15cdb);});}async function sign(_0x1de5e3){await $[_0x277d('12')](_0x277d('13'),{},{'\x68\x65\x61\x64\x65\x72\x73':{'token':_0x1de5e3}})[_0x277d('3')](_0x626980=>{console[_0x277d('6')](_0x277d('14'));if(_0x626980[_0x277d('b')][_0x277d('15')][_0x277d('c')]==0x0){console[_0x277d('6')](_0x277d('16'));}});}async function share(_0x176f3c){for(var _0x315a4d=0x0;_0x315a4d<0x3;_0x315a4d++){await $[_0x277d('12')](_0x277d('17'),{},{'\x68\x65\x61\x64\x65\x72\x73':{'token':_0x176f3c}})[_0x277d('3')](_0x6844b5=>{console[_0x277d('6')](_0x277d('18'));if(_0x6844b5[_0x277d('b')][_0x277d('15')][_0x277d('c')]==0x0){console[_0x277d('6')](_0x277d('19')+_0x315a4d+_0x277d('1a'));}});await wait(0x3e8);}}async function watchVideo(_0x17b1ab){for(var _0x244da6=0x0;_0x244da6<0xf;_0x244da6++){await $[_0x277d('12')](_0x277d('1b'),{},{'\x68\x65\x61\x64\x65\x72\x73':{'token':_0x17b1ab}})[_0x277d('3')](_0x19f87e=>{console[_0x277d('6')](_0x277d('1c')+(_0x244da6+0x1)+_0x277d('1d'));if(_0x19f87e[_0x277d('b')][_0x277d('15')][_0x277d('c')]==0x0){console[_0x277d('6')](_0x277d('1e'));}});await wait(0x3e8*0x3c*0x5);}};_0xod4='jsjiami.com.v6';