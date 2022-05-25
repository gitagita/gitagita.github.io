(function(){"use strict";var t={7612:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(8935),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"content",attrs:{id:"content"}},[n("router-view")],1)],1)},a=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header_nav english"},[n("div",{staticClass:"nav_bar",attrs:{type:"light"}},[n("div",{staticClass:"ynkTitle"},[n("a",{attrs:{href:"/"}},[n("strong",{staticClass:"title"},[t._v("YunaTil")])])])]),n("h1",{staticClass:"sub_title"},[t._v("Today I Learned")])])}],l={name:"header"},d=l,c=n(1001),p=(0,c.Z)(d,o,s,!1,null,null,null),h=p.exports,m={name:"App",components:{Header:h}},u=m,y=(0,c.Z)(u,i,a,!1,null,null,null),g=y.exports,$=n(8452),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list_contents"},[n("div",[n("input",{staticClass:"searchForm",attrs:{id:"keyword",type:"text",placeholder:"Search"},on:{keyup:t.filter}}),n("div",{staticClass:"selectBox"},[n("select",{staticClass:"hangul select",attrs:{id:"selectbox"},on:{change:function(e){return t.selectOption(e)}}},[n("option",{attrs:{value:""}},[t._v("전체")]),n("option",{attrs:{value:"title"}},[t._v("제목")]),n("option",{attrs:{value:"content"}},[t._v("내용")]),n("option",{attrs:{value:"type"}},[t._v("태그")]),n("option",{attrs:{value:"key"}},[t._v("주제")])])])]),t._l(t.board,(function(e,r){return n("div",{key:r,staticClass:"card_group_list"},[n("div",{staticClass:"card_contents"},[n("div",{staticClass:"hangul_title"},[n("div",{staticClass:"click_view",on:{click:function(n){return t.getView(e)}}},[n("strong",{staticClass:"ynkTitle"},[t._v(t._s(e.title)+" ")]),n("span",{staticClass:"ynkType hangul"},[t._v(t._s(e.type))])]),n("div",{staticClass:"list_contents"},[n("span",{staticClass:"ynkKey hangul"},[t._v("["+t._s(e.key)+"] ")]),n("span",{staticClass:"ynkContent hangul"},[t._v(t._s(e.content))])])])])])}))],2)},f=[],v=(n(7327),n(1539),[{id:1,type:"tip",key:"고도몰",title:"SESSION",code:"<pre>$memNo = \\Session::get('member.memNo');</pre>",content:"로그인한 회원 정보는 SESSION에 있다. 로그인한 회원 정보를 사용할 때는 session에서 가져다 쓰자.",regDt:"2022.04.05"},{id:2,type:"tip",key:"고도몰",title:"로그로 데이터 확인",code:"<pre>$dbkLog = \\App::load('\\Component\\Dbk\\DbkLog');\n$logData = [];;\n$logData['arrData'] = $arrData;;\n//DbkLog 테이블에 내용이 insert된다.;\n$dbkLog->setInsertLog('setInsertLike',$logData);;\nunset($dbkLog, $logData);</pre>",content:"DbkLog Component  파일의 setInsertLog함수에서 log값을 db에 저장한다.",regDt:"2022.04.05"},{id:3,type:"tip",key:"고도몰",title:"trigger()",code:"<pre>$('#testspan').trigger('click');\n$('.order-buy').trigger('click');</pre>",content:"이벤트 실행 없이 무조건 실행되게 함.(이벤트 핸들러 없이도 실행되게)",regDt:"2022.04.06"},{id:4,type:"tip",key:"고도몰",title:"get: url로 넘긴 데이터 가져오기",code:"<pre>$bdId = Request::get()->get('bdId'); \n if($bdId === 'recipe') {...}</pre>",content:"해당 url에서만 동작하도록 함. 다른 페이지에서 이 컨트롤러를 자주 사용하게 될 경우 if문은 사용해 bdId 별로 구분해서 동작하게 할 수 있음",regDt:"2022.04.06"},{id:5,type:"tip",key:"고도몰",title:"고도몰 공통 코드",code:"<pre>gd_select_box('areaNm', 'areaNm', gd_array_change_key_value(gd_code('90001')), \n null, $dbkMainFilter['areaNm'], '선택해주세요');</pre>",content:"텍스트로 selectbox 만들기, 코드 관리는 es_code에서 관리함",regDt:"2022.04.07"},{id:6,type:"work",key:"고도몰",title:"타임세일",code:"<pre>'SELECT sno FROM es_timeSale WHERE delFl = 'n' AND dbkMainFl = 'y' \nAND startDt <= now() AND endDt >= now() ORDER BY sno DESC LIMIT 0,1'</pre>",content:"타임세일 기획전 중, 메인으로 지정된 것이면서 진행 중이고, 그 중 가장 최신인 게시글을 결과로 도출한다. sql로 조건을 걸어 해결 가능했다.",regDt:"2022.04.08"},{id:7,type:"error",key:"고도몰",title:"선물하기",code:"<pre></pre>",content:"order.html파일의 내용과 같은데 order_gift.html파일에서는 배송지 목록 추가 기능이 동작하지 않는 오류가 있었다. body태그 바로 안쪽에 있는 태그들 중 id='popupShipping'인 태그가 order_gift에서 실행할 때 포함되지 않고 있는 것을 발견했다. outline/header/_header.html 파일에서 body태그를 발견했고 order조건만 있는 것을 발견하고 order_gift일 때의 조건도 추가했다.",regDt:"2022.04.08"},{id:8,type:"error",key:"고도몰",title:"전화번호 검색 필터",code:"<pre>if ($this->search['key'] && $this->search['keyword']) {\n\tif($this->search['key'] == 'areaNm' || $this->search['key'] == 'shopNm') {\n\t\t$this->arrWhere[] = 'c.' . $this->search['key'] . ' LIKE concat(\\'%\\',?,\\'%\\') ';\n\t\t$this->db->bind_param_push($this->arrBind, 's', $this->search['keyword']);\n\t}\n    }\nif ($this->search['key'] == 'contact'){\n\t$this->arrWhere[] = 'c.' . $this->search['key'] . ' LIKE concat(\\'%\\',?,\\'%\\') ';\n\t$this->db->bind_param_push($this->arrBind, 's', $this->search['keyword']);\n}\n</pre>",content:"이슈: 전화번호로 0을 검색했을 때 모든 연락처 리스트가 나오는 결과가 있었다. $this->search['keyword']의 값이 0인 경우 해당 if문 안에 들어가지 않았다. 0을 false로 인식했기 때문이다. 그래서 contact부분만 if문 밖으로 따로 빼주었다.",regDt:"2022.04.13"},{id:9,type:"tip",key:"고도몰",title:"Controller에서 페이지 redirect",code:"<pre>$this->redirect('/goods/goods_view.php?goodsNo=' . Request::get()->get('goodsNo'));</pre>",content:"",regDt:"2022.04.14"},{id:10,type:"tip",key:"고도몰",title:"CommonController",code:"<pre>if ($this->search['key'] && $this->search['keyword']) {\n\tif($this->search['key'] == 'areaNm' || $this->search['key'] == 'shopNm') {\n\t\t$this->arrWhere[] = 'c.' . $this->search['key'] . ' LIKE concat(\\'%\\',?,\\'%\\') ';\n\t\t$this->db->bind_param_push($this->arrBind, 's', $this->search['keyword']);\n\t}\n    }\nif ($this->search['key'] == 'contact'){\n\t$this->arrWhere[] = 'c.' . $this->search['key'] . ' LIKE concat(\\'%\\',?,\\'%\\') ';\n\t$this->db->bind_param_push($this->arrBind, 's', $this->search['keyword']);\n}\n</pre>",content:"전제 페이지에서 사용할 수 있는 Controller\nstand.html은 컨트롤러가 없음 그래서 CommonController를 사용해서 데이터를 가져와서 써야함",regDt:"2022.04.14"},{id:11,type:"dev",key:"파이썬",title:"MemoCode 코딩 메뉴 추가",code:"<pre>#한줄씩 문장을 읽어들여 '\\n'문자로 연결하기\ndef delEnter():\n    texts = str(text.get(1.0, END))\n    tList = texts.split('\\n')\n    vText = ''\n    for t in tList:\n        if t == '':\n            break;\n        vText += t+'\\\\n'\n    text.delete(1.0, END)\n    text.insert(INSERT, vText)\n    \n#'\\'를 '\\\\'로 변환\ndef delWord():\n    texts = str(text.get(1.0, END))\n    texts = texts.replace('\\\\','\\\\\\\\')\n    text.delete(1.0, END)\n    text.insert(INSERT, texts)\n</pre>",content:"pre 태그 사이에 줄바꿈이 있는 긴 코드를 넣어야할 때 일일이 엔터를 '\\n'문자로 수정하고 '\\'문자를 '\\\\'로 수정하는 것은 번거롭고 비효율적이었다. 그래서 이전에 과제로 만들었던 파이썬 메모장에 다음의 기능을 추가해 해결했다. <br/> 1. 엔터키를 '\\n'문자로 변환<br/>2.'\\'문자를'\\\\'문자로 변환 <br/> 프로그래밍 언어를 아니까 필요할 때 프로그램을 직접 만들어서 사용할 수 있다는 게 좋은 것 같다.",regDt:"2022.04.16"},{id:12,type:"error",key:"고도몰",title:"고도몰 고유 기능 휴대폰 인증 오류 해결",code:"<pre>window.open(protocol + '//hpauthdream.godo.co.kr/module/Mobile_hpauthDream_Main.php?callType=joinmembermobile&shopUrl=' + callbackUrl + '&cpid={=authDataCpCode}&i=1', 'uth_popup', 'top=30, left=50, status=0, width=425, height=650');\n</pre>",content:"결론: &i=1를 경로에 넣어주어야 동작했음",regDt:"2022.04.18"},{id:13,type:"error",key:"고도몰",title:"회원가입 버튼 클릭 시 submit 되지 않는 오류",code:"<pre></pre>",content:"고도몰 [회원 > 회원 관리 > 회원 가입 항목 관리] 에서 페이지에 없는 항목이 사용으로 체크되어 있지 않는지 확인 ",regDt:"2022.04.18"},{id:14,type:"tip",key:"php",title:"explode함수",code:"<pre>$snoData = explode('|', $tmpSno);</pre>",content:"foreach로 join함수 돌리지 말고 explode함수로 해결하자",regDt:"2022.04.24"},{id:15,type:"tip",key:"git",title:"git ssh로 clone하기",code:"<pre></pre>",content:"1. git 설치하기<br/><br/>2. 사용자 이름 및 이메일 설정하기레파지토리에 커밋하고 푸시하기 위해 필요함) <br/><br/>git config --global user.name '사용자 이름'<br/>git config --global user.email '사용자 이메일'<br/><br/>3. ssh-keygen 사용하기<br/>ssh-keygen -t rsa<br/><br/>C:\\Users\\[사용자계정]\\.ssh 폴더에 id_dsa.pub 파일의 내용(공개키)을 복사해 git레파지토리 ssh공개키로 설정한다.<br/>(필요에 따라 해당 폴더에 config파일을 삽입한다.)<br/><br/>4. 레파지토리의 ssh 주소 복사 후 <br/>git clone [복사한 ssh주소]",regDt:"2022.04.24"},{id:16,type:"tip",key:"네이버지도APi",title:"마커 지우기",code:"<pre>var dbkMarker = {=json_encode(markerData)};\nvar dbkAreaNmList = {=json_encode(areaNmList)};\nvar dbkThisFl = '{dbkThisFl}';\nvar postionY = 37.534286;\nvar postionX = 127.0396037;\nvar dbkPointMaker = [];\n//마커 제거\nif(dbkPointMaker){\n\tdbkPointMaker.setMap(null);\n}\nfunction showPosition(position) {\n\tif(dbkThisFl == 'y') {\n\t\tpostionY = position.coords.latitude;\n\t\tpostionX = position.coords.longitude;\n\t}\n\tvar oPoint3 = new naver.maps.LatLng(postionY, postionX);\n\tmap.setCenter(oPoint3);\n\tlet marker = new naver.maps.Marker({\n\t\tposition: oPoint3,\n\t\tmap: map\n\t});\n\tdbkPointMaker[0] = marker;\n\t\x3c!--{ ? gd_isset(markerData) }--\x3e\n\t\t\x3c!--{ @ markerData }--\x3e\n\t\t\tgetLatLon('{=.address} {=.addressSub} ',' {=.shopNm} ','{=.sno}','{=.contact}');\n\t\t\x3c!--{ / }--\x3e\n\t\x3c!--{ / }--\x3e\n\tsetTimeout(function(){\n\t\tdbkMarker.sort(function(a,b){\n\t\t\treturn a.sort - b.sort;\n\t\t});\n\t\t// console.log(typeof(dbkMarker));\n\t\tdbkCreateLi();\n\t\t\n\t}, 800);\n}</pre>",content:"dbkPointMaker.setMap(null); 이 마커 하나를 지우는 함수이다.",regDt:"2022.04.26"},{id:17,type:"tip",key:"네이버지도APi",title:"마커 위에 숫자 표시하기",code:"<pre>const tmpIndex = parseInt(index)+1;\nvar marker = new naver.maps.Marker({\n\tposition: oPoint2,\n\tmap: map,\n\ttitle:tit,\n\tzIndex:MarkerCnt,\n\ticon: {\n\t\tcontent: '<#div><#img src='../img/map/pin_default.png' alt='' ' +\n\t\t\t\t 'style='margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none;' +\n\t\t\t\t '-webkit-user-select: none; position: absolute; width: 22px; height: 35px; left: 0px; top: 0px;'>' +\n\t\t\t\t '<#span class='shd' style='z-index:10; color: #ff8888; text-align: center; position: absolute; width: 22px; height: 35px; left: 0px; top: 0px;'>'+tmpIndex+'<#span></#div>'\n\t\t}\n});</pre>",content:"네이버 지도 api에 숫자가 표시된 마커를 제공하고 있었다. 그런데 숫자가 8까지 밖에 제공하고 있지 않았다. 마커 이미지와 숫자가 분리되지 않고 숫자 마커 자체가 이미지로 되어 있었다.<br/>개발 사항에서는 지도에 표시할 마커가 50개 이상이 되었기 때문에 해당 마커 기능을 사용할 수 없었다. 그래서 이미지 위해 숫자를 표시하도록 태그를 삽입하고 style을 지정해 해결했다.<br/><br/>태그 인식 방지문자로 태그 앞에 #을 추가함",regDt:"2022.04.26"},{id:18,type:"error",key:"api",title:"api: delete, geta메서드는 body에 data를 실어 보내기 불가능",code:"<pre>async delBoardView ({state, dispatch, commit, rootGetters}, inquiry) {\n    console.log('inquiry', inquiry)\n    const defaultsData = ncpApi.defaults.data\n    ncpApi.defaults.data = {password: inquiry.password}\n    // await dispatch('_delBoardDetail', { params: {boardNo: inquiry.boardNo, articleNo: inquiry.articleNo}, inquiry })\n    await dispatch('_delBoardDetail', { params: inquiry })\n    ncpApi.defaults.data = defaultsData\n}\n</pre>",content:"api에서 delete와 get메서드는 body에 data를 실어 보낼 수 없다. swagger에서 제공하는 api중 비회원이 게시판 글을 삭제하는 경우 비밀번호를 body로 넘겨주도록 구현되어 있었다. 비밀번호이기 때문에 body에 데이터를 실어 보내는 것은 이해하지만 post가 아닌 delete로 구현한 이유는 모르겠다.<br/>그래서 ncpApi 전역 변수에 강제로 data를 추가해 해결했다.",regDt:"2022.05.03"},{id:19,type:"error",key:"vue",title:"에러 코드에 따른 조건",code:"<pre>this.$store.dispatch('board/editableBoardView', inquiry).then(() => {\n    this.user.password = ''\n    this.$emit('isCorrect', true)\n    this.close('close')\n}).catch((err) => {\n    const code = err.data.code\n    if (code === 'M0306') {\n    this.setDisplayPwd(false)\n    this.key = err.data.key\n    }\n})\n</pre>",content:"비밀번호 10회 오류 시 캡챠 이미지를 띄워 인증코드를 입력하도록 하는 부분을 구현했다. f12키에서 네트워크 부분에 에러의 CODE를 확인할 수 있는데 이 에러를 err.data.code로 가져올 수 있다. ",regDt:"2022.05.03"},{id:20,type:"dev",key:"vue",title:"게시글 작성하기: 이미지",code:"<pre>const inquiry = {\n        boardNo: this.boardNo,\n        articleTitle: this.articleTitle,\n        articleContent: this.articleContent,\n        password: this.password,\n        secreted: this.secreted,\n        boardCategoryNo: this.boardCategoryNo,\n        imageUrls: [],\n        images: this.images,\n        guestName: this.guestName,\n        tags: []\n      }\n      if (this.running) {\n        return\n      } else {\n        this.running = true\n      }\n      const dispatch = this.$store.dispatch\n      Promise.all(inquiry.images.map((image) => {\n        const data = new FormData()\n        data.append('file', image.file)\n        return dispatch('common/uploadImages', data)\n      })).then(ret => {\n        const urls = ret.map(res => 'http:' + res.data.imageUrl)\n        inquiry.imageUrls = urls\n        const img = ret.map(res => res.data.originName)\n        for (var i = 0; i < img.length; i++) {\n          inquiry.images[i] = {'originalFileName': img[i], 'uploadedFileName': urls[i]}\n        }\n        this.$store.dispatch('board/setBoardView', inquiry).then(() => {\n          alert('게시글이 작성되었습니다.')\n          this.running = false\n          this.close('')\n        }).catch((e) => {\n          this.running = false\n        })\n      })\n</pre>",content:"게시글 작성하는 API를 사용해서 params로 inquery 값을 대입했다. 이미지의 경우 데이터 형식을 맞춰주어야했는데, 이때 map을 이용해 이미지 데이터들을 하나씩 가져와 가공했다.",regDt:"2022.05.09"},{id:21,type:"tip",key:"vue",title:"...mapState와 ...mapGetters",code:"<pre>// js 파일\nmutations: {\n  BOARD_VIEW (state, view) {\n     state.view = view\n  }\n},\ngetters: {\n  getCaptchaUrl (state) {\n    return state.captchaImg\n  }\n}\n\n// vue파일\ncomputed: {\n   ...mapState('board', ['categories']),\n   ...mapGetters('authentication', ['isAvailableMember'])\n}\n</pre>",content:"...mapState('경로', ['변수명', '변수명', ...])<br/>...mapGetters('경로', ['getter함수명'])<br/>",regDt:"2022.05.09"},{id:22,type:"tip",key:"고도몰",title:"file데이터 ps로 전송하는 방법",code:"<pre>'<'form id='frm' action='../member/member_ps.php' method='post' enctype='multipart/form-data'>\n//file 타입의 데이터를 ps로 전송하기 위해서는 form 태그에 enctype='multipart/form-data' 추가해야함\n\n'<'input type='file' name='busiReg' id='busiReg'/></pre>",content:"회원가입 시 사업자등록증을 첨부하는 부분을 구현했다. <br/><br/>form 태그에 enctype='multipart/form-data' 추가",regDt:"2022.05.12"},{id:23,type:"tip",key:"고도몰",title:"preg_match(): 배송 불가 지역",code:"<pre>//Controller\n$notDelivery = $dbkOrder->getDeliveryAreaLimit();\nif($notDelivery){\n\tforeach($notDelivery as $key => $value){\n\t\tif(preg_match('/{$value['addArea']}/u', $deliveryArea)){\n\t\t\t$this->json('y');\n\t\t}\n\t}\n}\n$this->json('n');\n\n\n//Component\npublic function getDeliveryAreaLimit(){\n\t\t$this->arrWhere[] = ' sd.basicKey = 1';\n\t\t$this->db->strField = ' sd.addArea ';\n\t\t$this->db->strWhere = implode(' AND ', gd_isset($this->arrWhere));\n\n\t\t$query = $this->db->query_complete();\n\t\t$strSQL = 'SELECT ' . array_shift($query) . ' FROM ' .DB_SCM_DELIVERY_AREA. ' as sd ' . implode(' ', $query);\n\t\t$data = $this->db->query_fetch($strSQL, $this->arrBind,false);\n\t\tunset($this->arrWhere);\n\t\tunset($this->arrBind);\n\t\treturn StringUtils::htmlSpecialCharsStripSlashes(gd_isset($data));\n\t}\n</pre>",content:"preg_match($pattern, $subject [,$matches]);<br/><br/>$subject에 $pattern이 있는지 검색<br/>있으면 1, 없으면 0을 반환",regDt:"2022.05.15"},{id:24,type:"tip",key:"고도몰",title:"이미지 줌 플러그인",code:"<pre>  $(document).ready(function() {\n    $('#elementToZoomOn').smartZoom(); // start plugin behaviour\n  });\n\n\n//이미지가 여러개인 경우\n//Controller\n$getData['image'][$gVal['imageKind']]['img'][] = gd_html_preview_image($gVal['imageName'], $goodsInfo['imagePath'], $goodsInfo['imageStorage'], $imageSize, 'goods', $goodsInfo['goodsNm'], null, false, false, $imageHeightSize);\n\n//html\n$('.dbk_goods_view_image_slider .zoom-content-mobile > img').each(function(index, item){\n    $(item).attr('id', 'zoomImage_'+index);\n    $('.dbk_goods_view_image_slider > li > .zoom-content-mobile > img').smartZoom('destroy');\n    $('#zoomImage_'+index).smartZoom(option);\n   //이미지 확대 비율 조정\n    //$('#zoomImage_'+index).smartZoom('zoom', 0.3);\n    //zoom-content-mobile 클래스의 width와 height의 절반 길이를 설정하면 이미지가 중간에 위치함\n    //$('#zoomImage_'+index).smartZoom('pan', -250,-250);\n})\n</pre>",content:"이미지 줌 플러그인 링크: https://github.com/dams-dev/smartJQueryZoom<br/>js파일을 script로 삽입하고 smartZoom 함수로 이미지를 줌할 수 있다.<br/><br/>이미지가 여러개인 경우 이미지마다 id를 다르게 설정하여 각각 zoom시켜주어야한다.",regDt:"2022.05.15"},{id:25,type:"tip",key:"codeIgniter 프레임워크",title:"codeIgniter 프레임워크",code:"<pre></pre>",content:"codeIgniter 프레임워크<br/><br/>페이지 생성 시에 주로 사용하는 폴더는 application 폴더 하위에 있는 controllers, models, views 폴더였다.<br/><br/>views 폴더에서 프론트 view 파일을 생성하고,<br/><br/>controllers폴더에서 view파일과 이름이 매칭되는 컨트롤러를 생성하고,<br/><br/>models 폴더에서 db에 접근하는 기능에 대한 파일을 생성한다.<br/><br/>",regDt:"2022.05.17"},{id:26,type:"tip",key:"excel",title:"PHP: 엑셀 업로드",code:"<pre>case 'excel_upload_area':\n\ttry {\n\t\t//$filename = './file.xlsx'; // 서버에 올려진 파일을 직접 지정할 경우\n\t\t//$snoList = $this->input->post('excelFile');\n\n\n\t\t// excel_upload.php 파일을 이용해 업로드 한 경우\n\n\t\t$filename = $_FILES['excelFile']['tmp_name'];\n\t\t\n\t\t// 업로드 된 엑셀 형식에 맞는 Reader객체를 만든다.\n\n\t\t$objReader = PHPExcel_IOFactory::createReaderForFile($filename);\n\n\t\t// 읽기전용으로 설정\n\t\t$objReader->setReadDataOnly(true);\n\t\t$objExcel = $objReader->load($filename);\n\t\t//echo print_r($objExcel, true); exit;\n\n\t\t// 첫번째 시트를 선택\n\t\t$objExcel->setActiveSheetIndex(0);\n\t\t$objWorksheet = $objExcel->getActiveSheet();\n\n\t\t$rowIterator = $objWorksheet->getRowIterator();\n\n\t\tforeach ($rowIterator as $row) { // 모든 행에 대해서\n\t\t   $cellIterator = $row->getCellIterator();\n\t\t   $cellIterator->setIterateOnlyExistingCells(false);\n\t\t}\n\t\t$maxRow = $objWorksheet->getHighestRow();\n\t\t\n\t\tfor ($i = 2 ; $i <= $maxRow ; $i++) {\n\t\t   $zipcode = $objWorksheet->getCell('A' . $i)->getValue(); // A열\n\t\t   $regDt = $objWorksheet->getCell('B' . $i)->getValue(); // B열\n\t\t   //기존 데이터 삭제 후 업로드인 경우\n\t\t\t//$this->DawnDeliveryAdminModel->getAdminDawnDeliveryAreaDel('harim_dawn_delivery_area');\n\t\t\t\n\t\t\t//기존 데이터에 추가하는 경우\n\t\t\t$this->DawnDeliveryAdminModel->setAdminDawnDeliveryAreaSave('harim_dawn_delivery_area', $zipcode);\n\t\t}\n\n\t\tprint '<script type=\\'text/javascript\\'>alert('파일이 업로드되었습니다.');<\/script>';\n\t\tredirect('./Harimpet/Admin/Order/DawnDeliveryArea','refresh'); \n\t\texit;\n\t} catch (\\Exception $e) {\n\t\techo json_encode($e);\n\t}\n\tbreak;\n\n\n\n</pre>",content:"$filename = $_FILES['excelFile']['tmp_name'];<br/><br/>filename이 엑셀파일 이름인 줄 알았는데 print_r()로 찍어보니까 특이한 문자가 찍혔다.<br/><br/>",regDt:"2022.05.18"},{id:27,type:"tip",key:"excel",title:"PHP: 엑셀 다운로드",code:"<pre>public function excelDown()\n\t\t{\n\t\t\t$search['keyword'] = $this->input->get('keyword', TRUE);\n\t\t\t$search['sort'] = $this->input->get('sort',TRUE);\n\n\t\t\t$excelDeliveryAreaList = $this->DawnDeliveryAdminModel->getDawnDeliveryAreaListExcel('harim_dawn_delivery_area', $search);\n\n\t\t\tif($excelDeliveryAreaList) {\n\n\t\t\t\t$idx = 2 ;\n\t\t\t\tforeach($excelDeliveryAreaList as $eKey => $eVal) {\n\n\t\t\t\t\t// 워크시트에서 1번째는 활성화\n\t\t\t\t\t$this->excel->setActiveSheetIndex(0);\n\t\t\t\t\t// 워크시트 이름 지정\n\t\t\t\t\t$this->excel->getActiveSheet()->setTitle('새벽배송지역');\n\t\t\t\t\t// A1의 내용을 입력 합니다.\n\t\t\t\t\t$this->excel->getActiveSheet()->setCellValue('A1', '고유번호');\n\t\t\t\t\t$this->excel->getActiveSheet()->setCellValue('B1', '우편번호');\n\t\t\t\t\t$this->excel->getActiveSheet()->setCellValue('C1', '등록일');\n\t\t\t\t\t$this->excel->getActiveSheet()->setCellValue('A'.$idx, $eVal['sno']);\n\t\t\t\t\t$this->excel->getActiveSheet()->setCellValue('B'.$idx, $eVal['zip_code']);\n\t\t\t\t\t$this->excel->getActiveSheet()->setCellValue('C'.$idx, $eVal['regDt']);\n\t\t\t\t\t// A1의 폰트를 변경 합니다.\n\t\t\t\t\t//$this->excel->getActiveSheet()->getStyle('A1')->getFont()->setSize(20);\n\t\t\t\t\t// A1의 글씨를 볼드로 변경합니다.\n\t\t\t\t\t//$this->excel->getActiveSheet()->getStyle('A1')->getFont()->setBold(true);\n\t\t\t\t\t// A1부터 D1까지 셀을 합칩니다.\n\t\t\t\t\t//$this->excel->getActiveSheet()->mergeCells('A1:D1');\n\t\t\t\t\t// A1의 컬럼에서 가운데 쓰기를 합니다.\n\t\t\t\t\t//$this->excel->getActiveSheet()->getStyle('A1')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);\n\n\t\t\t\t\t$idx ++;\n\n\t\t\t\t\tusleep(500000);//딜레이\n\t\t\t\t}\n\t\t\t}else {\n\t\t\t\t// 워크시트에서 1번째는 활성화\n\t\t\t\t$this->excel->setActiveSheetIndex(0);\n\t\t\t\t// 워크시트 이름 지정\n\t\t\t\t$this->excel->getActiveSheet()->setTitle('새벽배송지역');\n\t\t\t\t// A1의 내용을 입력 합니다.\n\t\t\t\t$this->excel->getActiveSheet()->setCellValue('A1', '번호');\n\t\t\t\t$this->excel->getActiveSheet()->setCellValue('B1', '우편번호');\n\t\t\t\t$this->excel->getActiveSheet()->setCellValue('C1', '등록일');\n\t\t\t}\n\n\t\t\t$filename='delivery_area.xls'; // 엑셀 파일 이름\n\t\t\theader('Content-Type: application/vnd.ms-excel'); //mime 타입\n\t\t\theader('Content-Disposition: attachment;filename=''.$filename.'''); // 브라우저에서 받을 파일 이름\n\t\t\theader('Cache-Control: max-age=0'); //no cache\n\t\t\t\t\t\t\n\t\t\t// Excel5 포맷으로 저장 엑셀 2007 포맷으로 저장하고 싶은 경우 'Excel2007'로 변경합니다.\n\t\t\t$objWriter = PHPExcel_IOFactory::createWriter($this->excel, 'Excel2007'); \n\t\t\t// 서버에 파일을 쓰지 않고 바로 다운로드 받습니다.\n\t\t\t$objWriter->save('php://output');\n\t\t\texit();\n\t\t}\n\n\n\n</pre>",content:"처음엔 엑셀 업로드와 같은 라이브러리를 사용하려고 했는데 오류가 나서 다른 방법으로 수정했다.<br/><br/>//원래 사용하려던 방법(오류나거나 파일을 읽지 못함)<br/>$objPHPExcel = PHPExcel_IOFactory::load($_FILES['excel']['tmp_name']);<br/><br/>",regDt:"2022.05.18"},{id:28,type:"err",key:"카페24_API",title:"\\'Access-Control-Allow-Origin: *\\'. (parameter.src)'",code:"<pre>'<'IfModule mod_headers.c'>'\nHeader set Access-Control-Allow-Origin '*'\n'<'/'IfModule'>'\n\n// 태그가 인식되어 태그 양쪽에 임의로 따옴표를 추가했다.\n\n</pre>",content:"POST/api/v2/admin/scripttags 호출했을 때 발생했던 오류<br/><br/>{'error':{'code':422,'message':'The CORS (Cross-origin resource sharing) header of the script in the src attribute must be \\'Access-Control-Allow-Origin: *\\'. (parameter.src)'}}<br/><br/>src 데이터가 있는 서버파일에 접근하지 못해 발생하는 오류였음<br/></br/> Apache 웹 서버에서 apache2.conf 또는 sites-enabled 파일에서는 <Directory> 태그를 통해 파일이 위치한 경로와 디렉토리에 대한 접근 허용 설정을 할 수 있다.<br/><br/>.htaccess 파일은 해당 설정 기능을 독립된 자료로 저장한 파일이다.<br/><br/>.htaccess 파일에 해당 내용 추가하면 해결 됨<br/><br/><IfModule mod_headers.c><br/>Header set Access-Control-Allow-Origin '*'<br/></IfModule>",regDt:"2022.05.19"},{id:29,type:"tip",key:"PHPExcel",title:"PHPExcel라이브러리 날짜 타입 지정",code:"<pre>$this->excel->getActiveSheet()->setCellValue('B'.$idx, PHPExcel_Style_NumberFormat::toFormattedString($eVal['holiday'], PHPExcel_Style_NumberFormat::FORMAT_DATE_YYYYMMDD2));</pre>",content:"PHPExcel라이브러리를 사용해 엑셀다운로드 프로세스를 구현하던 중 data 타입의 데이터가  2022-01-01이 아니라  45363같은 숫자로 출력되었다. 이때 엑셀 타입형식을 지정해주니 날짜 형식으로 출력되었다.",regDt:"2022.05.20"},{id:30,type:"dev",key:"php",title:"휴무일 프로세스",code:"<pre>class Orderform extends CI_Controller\n{\n\n\t//새벽배송 휴무일\n\tconst HOLIDAY_HOUR = 18;\n\n\tpublic function __construct()\n\t{\n\t\tparent::__construct();\n\t\t$this->load->library('session');\n\t\t$this->load->helper(array('form', 'url'));\n\t\t$this->load->model('/Harimpet/DawnDeliveryAdminModel');\n\n\t}\n\n\tpublic function index()\n\t{\n\t\t$zipcode = $this->input->post('zipcode');\n\t\t$holiday = $this->input->post('holiday');\n\n\t\tif(isset($zipcode)) {\n\t\t\t//echo $zipcode;\n\t\t\t//$arrData['zipcode'] = $zipcode;\n\t\t\t$result = $this->getdeliveryArea($zipcode);\n\t\t\tif($result > 0) {\n\t\t\t\techo 'zipable';\n\t\t\t\texit;\n\t\t\t} else {\n\t\t\t\techo 'zipdisable';\n\t\t\t\texit;\n\t\t\t}\n\t\t}\n\t\tif($holiday == 'y') {\n\t\t\t$result = $this->getDeliveryDay();\n\t\t\techo $result;\n\t\t\texit;\n\t\t}\n\t}\n\n\t//새벽배송 가능 우편 번호\n\tpublic function getdeliveryArea($zipcode)\n\t{\n\t\t$arrData['zipcode'] = $zipcode;\n\t\t$result = $this->DawnDeliveryAdminModel->getDeliveryAreaReg('harim_dawn_delivery_area', $arrData);\n\t\treturn $result['cnt'];\n\t\texit;\n\t}\n\n\n\tpublic function getDeliveryDay(){\n\t\t//$data['today'] = date('Y-m-d');\n\t\t$data['today'] = '2022-05-17';\n\t\t$data['tomorrow'] = date('Y-m-d', strtotime($data['today'].'+1 day'));\n\n\t\t//오늘이 휴무일인지 확인\n\t\t\n\t\t//현재 시간\n\t\t$holidayFl = $this->getHolidayCheck($data['today']);\n\t\tif($holidayFl == 0 && date('H') < self::HOLIDAY_HOUR) {\n\t\t\t//echo '6시 이전';\n\t\t\t$deliveryDay = $this->getDeliveryHoliday($data);\n\t\t} else {\n\t\t\t//echo '6시 이후 || 오늘이 휴무일인 경우';\n\t\t\t$deliveryDay = $this->getDeliveryHoliday($data, 'y');\n\t\t}\n\n\t\treturn $deliveryDay;\n\t}\n\n\t//새벽 배송 휴무일 계산\n\tpublic function getDeliveryHoliday($data, $kind='n')\n\t{\n\t\t//배송 준비기간\n\t\t$dateNum = 0;\n\t\t//현재 시각이 18:00이전이면 => 배송준비기간 오늘 포함 이틀\n\n\t\t//현재 날짜가 휴무일이면\n\t\t//현재 시각이 18:00이후이면 => 배송준비 기간 이틀\n\t\twhile(true){\n\t\t\t//$todayFl = $this->getHolidayCheck($data['today']);\n\t\t\t$tomorrowFl = $this->getHolidayCheck($data['tomorrow']);\n\t\t\t\n\t\t\t//if($todayFl == 0 && $tomorrowFl == 0) {\n\t\t\tif($tomorrowFl == 0) {\n\t\t\t\t//echo '휴무아님y';\n\t\t\t\tif($kind=='y' && $dateNum < 1){\n\t\t\t\t\t$dateNum+=1;\n\t\t\t\t\t//echo $dateNum.'  ';\n\t\t\t\t\t$data = $this->setHolidayAdd($data);\n\t\t\t\t} else {\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\t//echo '휴무임';\n\t\t\t\t$data = $this->setHolidayAdd($data);\n\t\t\t}\n\t\t}\n\t\t\n\t\treturn $data['tomorrow'];\n\t}\n\n\t\n\t\n\t//해당 날짜 휴무일 체크\n\tpublic function getHolidayCheck($date)\n\t{\n\t\t//echo print_r($date, true);\n\t\t$holidayFl = 0;\n\t\t//요일 구하기\n\t\t$week = date('w',strtotime($date));\n\t\t//echo $weekTomorrow;\n\t\t\n\t\t//해당 요일이 토,일요일인 경우\n\t\tif($week == 0  || $week == 6) {\n\t\t\t$holidayFl+=1;\n\t\t} else {\n\t\t\t$result = $this->DawnDeliveryAdminModel->getHolidayCnt('harim_dawn_delivery_holiday', $date);\n\t\t\tif($result['cnt'] > 0) {\n\t\t\t\t$holidayFl+=1;\n\t\t\t}\n\t\t}\n\t\treturn $holidayFl;\n\t}\n\t\n\t//다음 날짜로 이동\n\tprivate function setHolidayAdd($arrData) {\n\t\t$getData['today'] = date('Y-m-d', strtotime($arrData['today'].'+1 day'));\n\t\t$getData['tomorrow'] = date('Y-m-d', strtotime($arrData['tomorrow'].'+1 day'));\n\n\t\treturn $getData;\n\t}\n\n\n}</pre>",content:"하림펫푸드의 새벽배송 휴무일을 구하는 프로세스를 구현했다.<br/>배송업체 입장에서 생각하면 배송 예상일을 생각하는데 이해하기 쉬웠다. <br/><br/>[예시]<br/>오늘이 18시 이전이고 휴무일이 아닌 경우에는 +1일 한다. 즉, 다음날이 휴무일이 아니라면 예상 배송일이된다. 만약 휴무일이면 이후 날짜 중 휴무일이 아닌 날이 휴무일이 된다. 배송업체 입장에서 다시 말하면 배송을 준비하는 시간이 오늘과 하루 더 해서 배송을 준비한다. <br/><br/>만약 오늘이 휴무일이라면 이후 날짜 중 이틀의 준비 기간을 잡을 수 있으면 된다. 프로세스에서는 $dateNum변수를 선언해서 $dateNum < 1 일 때로 조건을 걸어 휴무일이 아닌 날이 한 번은 있도록 설정했다.",regDt:"2022.05.20"},{id:31,type:"diary",key:"db",title:"개발하면서 백업하자. 그리고 기록하자",code:"<pre></pre>",content:"레이델 개발을 마치고 DB를 이전하는 업체에 의뢰해서 이전이 마칠 때까지 기다렸다. 그런데 이번에 담당하는 사람이 바뀌면서 예전과 다르게 파일과 DB를 이전시킨 것이다. 원래 있었던 내용들이 예전에 있었던 소스코드로 덮어쓰여져 있고, DB도 마찬가지로 추가해두었던 필드들이 사라져 있었다. 팀장님도 이런 경우는 처음라고 하셨다. 백업이라고는 내가 개발한 폴더쪽만 백업해두었지 전체 백업은 해두지 않았었고, 테이블도 몇 개만 파일로 받아두었었다. <br/><br/>나중에 또 이런 일이 있을지도 모르니 DB테이블과 소스코드 모두 시간이 걸리더라도 전체 백업을 받아두어야겠다고 생각했다.<br/><br/>날짜에 따라 그날 개발한 사항을 기록해두는 것도 중요했다. 백업 받은 날짜와 비교해보거나, DB이전한 날 이후로 작업한 것 있는 경우가 있는지 찾을 때 필요했다. 기록하자.",regDt:"2022.05.25"}]),_={data:function(){return{board:v,menu:""}},methods:{selectOption:function(t){this.menu=t.target.value,this.filter()},filter:function(){var t,e,n,r;for(t=document.getElementById("keyword").value.toUpperCase(),n=document.getElementsByClassName("card_group_list"),r=0;r<n.length;r++){switch(this.menu){case"title":e=n[r].getElementsByClassName("ynkTitle");break;case"content":e=n[r].getElementsByClassName("ynkContent");break;case"type":e=n[r].getElementsByClassName("ynkType");break;case"key":e=n[r].getElementsByClassName("ynkKey");break;default:e=n[r].getElementsByClassName("card_contents")}e[0].innerHTML.toUpperCase().indexOf(t)>-1?(n[r].style.display="flex",n[r].style.display="inline-block"):n[r].style.display="none"}},getView:function(t){this.$router.push({name:"View",params:{board:t}})}}},k=_,x=(0,c.Z)(k,b,f,!1,null,"65897c34",null),D=x.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view"},[n("div",{staticClass:"view_header"},[n("strong",{staticClass:"ynkTitle hangul_title"},[t._v(t._s(t.board.title)+" ")]),n("span",{staticClass:"ynkType hangul"},[t._v(t._s(t.board.type))]),n("span",{staticClass:"ynkRegDt hangul"},[t._v(t._s(t.board.regDt))])]),n("hr"),n("div",{staticClass:"view_contents"},[n("div",{staticClass:"ynkKey hangul"},[t._v("["+t._s(t.board.key)+"] ")]),n("div",{staticClass:"ynkContent hangul",domProps:{innerHTML:t._s(t.board.content)}})]),"<pre></pre>"!=t.board.code?n("div",{staticClass:"ynkCode"},[n("code",{domProps:{innerHTML:t._s(t.board.code)}})]):t._e(),n("div",{staticClass:"listBtn"},[n("router-link",{staticClass:"hangul_title md",attrs:{to:"/"}},[t._v("목록보기")])],1)])},C=[],A={name:"View",props:{board:{type:Object,default:function(){return{}}}}},E=A,S=(0,c.Z)(E,w,C,!1,null,"faf396d2",null),I=S.exports;r.Z.use($.Z);var N=new $.Z({mode:"history",routes:[{path:"/",component:D,props:!0},{path:"/view/:id",component:I,name:"View",props:!0}]}),P=N;r.Z.config.productionTip=!1,new r.Z({router:P,render:function(t){return t(g)}}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,a){if(!r){var o=1/0;for(c=0;c<t.length;c++){r=t[c][0],i=t[c][1],a=t[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(s=!1,a<o&&(o=a));if(s){t.splice(c--,1);var d=i();void 0!==d&&(e=d)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[r,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,a,o=r[0],s=r[1],l=r[2],d=0;if(o.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var c=l(n)}for(e&&e(r);d<o.length;d++)a=o[d],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(c)},r=self["webpackChunkyunatil"]=self["webpackChunkyunatil"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7612)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.3b734cf7.js.map