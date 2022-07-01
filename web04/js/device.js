// MOBILE의 운영체제(OS)로 비교하여 구분하는 페이징 로드
 function deviceCheck1() {   
    var device = false;    
    var mobileDevice = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'Windows CE;', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson', 'Mobile', 'Symbian', 'Opera Mobi', 'Opera Mini', 'IEmobile');
    for (var agent in mobileDevice) {
        if (navigator.userAgent.match(mobileDevice[agent]) != null) {
            device = true;
            break;
        }
    }
    if(device){
        console.log('MOBILE');
        window.location.href = "mobile.html";
    } else {
        console.log('MOBILE');
        window.location.href = "index.html";
    }
     return false;
 }

// PC의 운영체제(OS)로 비교하여 구분하는 페이징 로드
function deviceCheck2() {
    // 디바이스 종류 설정
    var pcDevice = "win16|win32|win64|mac|macintel";

    // 접속한 디바이스 환경
    if (navigator.platform) {
        if ( pcDevice.indexOf(navigator.platform.toLowerCase()) < 0 ) {
            console.log('MOBILE');
            window.location.href = "mobile.html";
        } else {
            console.log('PC');
            window.location.href = "index.html";
        }
    }
    return false;
}    