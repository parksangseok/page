
// W3CDOM 체크 변수
var W3CDOM = document.createElement && document.getElementsByTagName;

/* 마우스 아웃 체크 */
function p_mouseRelative(e,chkClNm,act){
	var	e =	e.relatedTarget;
	var	chk = 0;
	// check e
	if(e == null){
		chk = 0;
	}else{
		clMatch:
		while(e != null){ 
			if((e.className !='') && (e.className != undefined)){  
				var classes = e.className.split(' ');		
				for(idx in classes){
					if(classes[idx] == chkClNm){
						chk = 1;
						break clMatch;
					}
				}
			}
			e = e.parentNode;
		}
	}
	// if no same parents, set action
	chk == 0 ? act() : null;
};

// id 선택자
function p_id(name) {
	return document.getElementById(name);
}

// 이벤트 기본 동작 막기
function p_stopDefault(e){
	if(e && e.preventDefault){
		e.preventDefault();
	}else{
		window.event.returnValue = false;
	}
}
/* url 체크 */
function p_chkURL(name){ 
	var lo = location.href;
	var loArray = lo.split('/');
	var chkPage = false;
	for( x in loArray){
		if(loArray[x] == name) {
			chkPage = true;
			break;
		};
	}
	return  chkPage;
}
/* 스타일 보내기 */
function p_setStyle(obj,s){
	if(Array.isArray(obj)){
		for(var e = 0;e < obj.length; e++){
			for(var i in s){
				obj[e].style[i] = s[i];
			}
		} 
	}else{
		for(var i in s){
			obj.style[i] = s[i];
		}
	};
}


/* tag 선택자 */
function p_tag(name, elem){
	return (elem || document).getElementsByTagName(name);
}
/* 오브젝트 타입 검사 */
function p_chkType(e){
	var obj = new Object();
	var str = obj.toString.call(e);
	var arrChk = ['Number','Undefined','Null','HTML','Array','String'];
	var m;
	for(var i = 0;i < arrChk.length; i++){
		m = str.match(arrChk[i]);
		if(Array.isArray(m)){
			break;
		}
	}
	return m;
}

// 클래스 선택자
function p_class(name,type,elem){
	var r = [];
	// 클래스 이름을 찾는다. (복수개의 이름도 허용)
	var re = new RegExp("(^|\\s)" + name + "(\\s|$)");
	
	// 특정 타입만 검색하도록 범위를 좁히거나, 아니면 전체 엘리먼트를 살펴본다.
	var e = (elem || document).getElementsByTagName(type || "*");
	for (var j = 0; j< e.length; j++){
		// 엘리먼트가 이 클래스를 포함한 경우 반환값에 추가한다.
		if (re.test(e[j].className)) r.push( e[j] );
	}
	return r.length > 0 ? r : false;
}
// 버블 멈추기
function p_stopBubble(e){
	// 이벤트 객체가 제공되면 ie 브라우저가 아님
	if(e){
		// w3c 표준 버블 정지 메소드
		e.stopPropagation();
	}else{
		// 익스플로러 방식의 버블현상 정지 메소드
		window.event.cancleBubble = true;
	}
}

// 브라우저의 기본 이벤트 동작 막기
function p_stopDefault(e){
	// prevent 디폴트 메소드가 있는 지 확인
	if(e && e.preventDefault){
		e.preventDefault();
	}else{
		window.event.returnValue = false;
	}
	return false;
}

// 높이 자동화 함수 정의
function p_setAutoHeight(t,w,h){
	var rW = $(t).width();
	var rH = (rW/w)*h;
	$(t).height(rH);
}

// 웹에디터
function p_webEditor(){
	var $T = $('.fnWebEditor');
	$(T).each(function(i, item) {
		var getHtml =  $(item).html();
		if (typeof getHtml != 'undefined') {
			getHtml = getHtml.replace(/<font[\s\S]*?>/g,'');
			getHtml = getHtml.replace(/<\/font>/g,'');
			$(item).html(getHtml);
		}
	});
}

// 파일 컨트롤
function p_ctrlFiles(){
	var $obj = $('.ctrlFile'); 
	if($obj.length == 0){ return; }
	var $btnFile = $('.ctrlFile-btnFile');
	var $txt = $('.ctrlFile-fileTxt');
	var placeTxt = '선택된 파일이 없음';
	var $btnDel = $('.ctrlFile-btnDel');
	
	$btnDel.hide();

	// click file button
	$obj.each(function(){
		var $this = $(this);
		
		$this.find($btnFile.selector).click(function(){
			$this.find($txt.selector).parent().find('input[type=file]').click();
		});
		
		$this.find('input[type=file]').change(function(){
			var $this = $(this);
			var fileVal = $this.val();
			var fileValLength;
			
			// action
			fileVal = fileVal.split('\\');
			fileValLength = fileVal.length;
			$this.parent().find($txt.selector).text(fileVal[fileValLength-1]);
			$this.parent().find($btnDel.selector).show();
		});
		
		$this.find($btnDel.selector).click(function(){
			var $this = $(this);
			$this.parent().find('input[type=file]').val('');
			$this.parent().find($txt.selector).text(placeTxt);
			$this.hide();
		});
	});
	 
}

function p_chkColor() {
	var $iptColor = $('.iptColor'); 
	$iptColor.each(function(idx, elem){
		var $this = $(this);
		$this.click(function(evt){
			var $this = $(this);
			$this[0].checked = true;
		});
	});
} 

// 문서 로드 시 실행
$(function(){
	// 파일 컨트롤
	p_ctrlFiles();
});




