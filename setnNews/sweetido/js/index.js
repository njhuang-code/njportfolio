var apiURL = 'https://event.vidol.tv';

/*--start--*/
$(function(){
    $("#FB_share").click(function(){
        FB.ui({
            method: 'share',
            display: 'popup',
            href: location.href,
            picture: location.origin + '/?????/image/FB_Share.jpg'
        }, function(response){});
    });
  $("#line_share").click(function(){
      event.preventDefault();
      window.open("http://line.naver.jp/R/msg/text/?：活動網址： https://event.vidol.tv/???????????/index.html");
  });
});
function statusChangeCallback(response) {
	console.log('statusChangeCallback');
	console.log(response);
	if (response.status === 'connected') {
		$('input[name=fb_uid]').val(response.authResponse.userID);
		$('input[name=fb_token]').val(response.authResponse.accessToken);
		$('input[name=fb_expires]').val(response.authResponse.expiresIn);
		testAPI();
		/*LL**/
        nowtime = $.now();
        fb_uid = $('input[name=fb_uid]').val();
        fb_token = $('input[name=fb_token]').val();
        fb_expires = $('input[name=fb_expires]').val();
        console.log(fb_uid,fb_token,fb_expires);
        $.post( api_url + '/v1/auth/facebook', { random: nowtime, uid: fb_uid, facebook_token: fb_token, expiration: fb_expires, default: '0' } ).done(function( data ) {
            console.log(data);
            $('input[name=token]').val(data.result.access_token);
            $('.header .login').css("display","none");
            $('.header .login_inter').css("display","block");
            alert('您已成功登入!!');
            $('.content#step1').css("display","none");
            $('.content#step2').css("display","block");
        }).fail(function(){
            console.log('重新登入FB!!');
            // checkLoginState();
            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });
        });

	} else {/* response.status === 'unknown'*/
        FB.login(function(response) {
            checkLoginState();
        }, {scope: 'public_profile,email'});
	}
}
window.fbAsyncInit = function() {
  FB.init({
      appId            : '1044817312247946',
      //appId            : '1957260964597079',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.10',
  oauth: true
  });
  FB.AppEvents.logPageView();
};
(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
function testAPI() {
console.log('Welcome!  Fetching your information.... ');
FB.api('/me', function(response) {
  console.log('Successful login for: ' + response.name);
});
}
/*--end--*/

$(document).ready(function(){
    //close pop
    $('.pop__close').on('click', function(){
        $('.pop').hide();
    });
    
    //pop up
    $('.').on('click', function(){
        $('.pop').show();
    })

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    function setCookie(c_name,value,expiredays,domain){ 
        var exdate=new Date() 
        exdate.setDate(exdate.getDate()+expiredays) 
        document.cookie=c_name+ "=" +escape(value) + ";domain="+ domain +";path=/"+((expiredays==null) ? "" : ";expires="+exdate.toGMTString()) 
    }
})

