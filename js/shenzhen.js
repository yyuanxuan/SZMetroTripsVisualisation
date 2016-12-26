(function (root, factory) {
   if (typeof define === 'function' && define.amd) {
       define(['exports', 'echarts'], factory);
   } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
       factory(exports, require('echarts'));
   } else {
       factory({}, root.echarts);
   }
 }(this, function (exports, echarts) {
       var log = function (msg) {
           if (typeof console !== 'undefined') {
               console && console.error && console.error(msg);
           }
       }
 if (!echarts) {
       log('ECharts is not Loaded');
           return;
       }
 if (!echarts.registerMap) {
       log('ECharts Map is not loaded')
       return;
 }
  echarts.registerMap('shenzhen',{"type":"FeatureCollection","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:EPSG::4019"}},"features":[{"type":"Feature","geometry":{"type":"Polygon","coordinates":["@@BDB@DDBBDBD@D@DEFEFAJ@FCHAF@HBF@F@D@@@@@B@@@F@H@DAB@HC@@BC@CACA@@A@C@@AA@@AE@@BCFAD@DA@@JCBAB@B@DCHCFCB@DAB@F@D@D@BA@@@ADCBEDEB@B@F@D@FADC@@DGBCBE@@@E@EBC@@DEBE@ABCAC@A@ABCDADA@EB@D@B@@@BADADAFALAB@D@B@F@D@DBBB@DF@D@@@D@@@F@PIFCDA@@FBB@DBFB@@F@B@DCBABC@ABE@@AC@CBABAB@@CBABBB@@@B@DBBDB@@DB@@@@@@BB@B@B@B@BADAD@B@DADABC@A@A@A@@@CB@@AB@BABA@AB@@A@@@@BA@@@@@@@A@@@@@AB@@@FGFEDCD@FBB@B@FCDC@@@ABAB@B@BBD@BA@@@@BABA@@BABAD@BB@DB@DB@@@@BBBABA@A@@@A@A@C@@BC@@@AB@AA@AACB@@ABABALADADABE@A@A@@@C@@@@@A@AB@@A@@BABAB@@@@@@ABABAB@BA@@@@@A@A@CBC@A@EA@@AC@A@AA@A@@A@AAA@@@AAA@@A@A@@@A@@DC@AJCLCB@B@HAF@D@BBBFBBDF@@BDBLDDHJBJ@D@B@BBBB@BBDB@@@B@B@BB@@@B@@B@@ABAD@@@@@BBDBD@D@DAB@B@FBDBBB@DBB@B@D@BBB@BB@FAB@D@@@@@BADBF@B@@BB@@BDB@@BB@BB@BBD@D@BA@@BCBCD@@AD@@@B@DBBEBCDCDAFAD@B@B@BABC@CBA@@@GDCFELAF@D@DB@@BDBDBF@BBLDD@BB@@H@DBB@TPPPBB@@BD@@BBBABCBCBE@A@C@C@ABABABAFA@@D@B@B@BCB@BABCBABABA@AF@@@BB@A@@D@DAB@D@@@DBDDBDDDLHBDFB@BRAB@@@BB@@@B@BABBD@@BDFBD@D@DCBABCB@@@B@@@B@DBFDHB@@DBDBDB@@B@DBDBBAH@HC@@@@@@B@J@HDDBD@D@D@@ADAB@@A@@B@@C@A@C@@AAAA@@@A@@@A@E@C@@BA@CEAAAAACAAA@A@ABA@@BCB@B@BAD@BADADCBABAB@@@D@BABA@ABA@@BABCB@FEHAD@FAB@FAH@B@D@F@DB@@DB@D@FARBBFBHDDAB@DADABABADADA@A@@BABC@C@A@C@A@A@@@ADCDABCBC@E@@AG@@@@AGACEEA@ECCCCAACCCAA@@AC@@@CBE@CFEFGLC@@LKBADA@@DAFADA@@@@D@@@B@B@B@B@B@BABABADG@C@@@@@ABAAAAECEIEEAAAC@AAC@@A@ABE@ABABC@@@ABA@C@@AA@@@AB@@AB@FBF@DBFBFBF@@BBBBBBBF@F@BAB@B@@@F@D@@@DAF@BABABABAB@@@BA@@DBB@BB@@@BBB@B@BDBB@@@B@B@JBF@JAF@B@B@D@B@BA@@BAFE@@@ABADADCFAH@HBFAF@F@HBD@B@JDHFD@FBLDLBJ@J@H@F@FEBAFCHIHEBEFQDIDKBKDKAM@K@O@G@K@I@G@A@GBIFIFIHKFGFGFEBALGJGHEHGFCBC@GAEAEAG@EA@@CACAECEAA@AAACACACACAC@A@C@A@A@AACAEAEAGCECGGGECCEEEEECCCECECECEECCCGEEAEACA@ACEECECG@AmOGCcIW@EBKBMJcV]@@ib·H_BwBoAAuSA@WKEMO@A@@B@B@@BD@B@BA@@BA@@B@@@@A@@@A@A@@B@@@BA@@@@@@@AB@@@BA@@B@@EAA@C@C@G@E@C@E@E@A@A@A@@@@BA@@@@AA@@A@@A@@@A@@@@@@@AB@@@@@@A@@@@@@@@A@@A@@BC@@@A@A@A@@@@@@A@@@@@@@@A@@@@@AB@@@@A@@@@@A@@@@B@@@@@@@B@@@@@B@@@B@@@@@B@@@@A@@@A@@@@@@@@@A@@@AA@@@@@@@BA@@@A@@@A@@@A@@@@B@@A@@@@@A@@@A@@@@A@@A@@AA@@@A@@@@@AB@@@B@@@@AB@@A@@@@A@@A@@A@@@@A@@@@A@@@@AA@@@@@@@A@@A@@A@@@@@@@@@A@@A@@@@@A@@@@@@@AA@@@@@@@BA@@@@@@@A@@@@A@@@@@A@@@@@@@@@A@@@@@@@@@@@A@@A@@@@@A@@@@A@@@@@A@@@@@@@A@@@A@@@@@@B@@@@@@@@@@@@@@@@@@B@@@@B@@A@@@AA@@@@@A@@AAA@@AA@@@@@AB@@@@AA@@@A@@@@@@@A@@@@@@@@@@@A@@A@@A@@@@B@@@@@B@@@@@@A@@@A@@A@@@B@@@@A@@@@@A@@@@@AB@@@@A@@@A@@@CACAEBA@@ACAA@CA@@CA@AACAAA@CAAA@ACAEAC@AD@B@BC@A@A@AAA@A@BFA@A@AA@@C@C@EBIAECCAE@AAAABCFCDC@@@CEEECAAA@CBABC@G@GCCCCCAGAECACACAA@A@A@A@ABA@A@ABC@A@@@A@GBC@E@C@CBGCCCIAAAA@E@EBCBADABGFA@@@CDC@A@A@YS@AwCAÑKE@Y@U@ÓAGi³OIQeGSACCFGR@BCFCHGPIVIV@BQEVIVENGLEHGFGHGHGJEJIFEDCBKFUFWHGDGHEF@@AHCFCFINILIJAB@HAFAJAJAN@PAH@JAPAP@B@bH@J@LBLBJ@JBJDHBHBFDFDFDBDDD@D@FOAJAJ@BCH@HCJCZE^CNCR@FCHEP@@GTADGRITITGPCFU`CDNBNBNALBN@HBDBFBDDFBFAN@F@HAB@J@L@D@BBDBFHFHDFFD@@DDFDD@HDB@HBHFBBLJ@DBFCH@BAFDDBD@@@@@B@@@@B@@@@@@@@BB@@@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@B@@@@@@B@@@@@@@@B@@B@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@AB@@@@@@@B@@@@@@AB@@@@@@@@@B@@@@@@@@@@@BB@F@@@@@HCB@B@DBDD@DBDHDJDJD@BFBD@@BB@B@BBB@BB@@@@@@@@BB@@BD@@@D@@BB@B@@@@@BB@@@@B@@@@@B@@@B@@@@@BB@@@@@@B@@@@@@@B@@@@@@@B@B@B@B@B@DABAP@D@BB@@@BB@BFBBB@@FBB@@@D@B@B@DCDABAD@@@BBBB@@DBD@BAD@@@B@D@FB@B@@@B@D@BDDBBBD"],"encodeOffsets":[[116608,23397]]},"properties":{"NAME":"������","KIND":"0137"}}],"UTF8Encoding":true}
  )}));