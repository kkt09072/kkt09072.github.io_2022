(function($) { 
    $.fn.sliding = function(opt) { 
        var tar = $(this);
        var opt1 = opt.spd;
        var opt2 = opt.intv;
        var chd = opt.chd;
        var prev = opt.prev;
        var next = opt.next;
        var numfr = opt.numfr;
        var numbox = opt.numbox;
        var playBtn = opt.playBtn;
        var wd = tar.find(chd).width();
        function nextAni() {
            tar.not(":animated").animate({"margin-left":"-"+wd+"px"}, opt1, function(){
                tar.find(chd).eq(0).appendTo(tar);
                tar.css("margin-left", "0px");
                $(numbox).eq(0).appendTo($(numfr));
                $(numbox).removeClass("on");
                $(numbox).eq(0).addClass("on");
            }); 
        }

        function prevAni() {
            tar.find(chd).eq(4).prependTo(tar);
            tar.css("margin-left", "-"+wd+"px");
            tar.not(":animated").animate({"margin-left":"0px"}, opt1);  
            $(numbox).eq(0).prependTo($(numfr));
            $(numbox).removeClass("on");
            $(numbox).eq(0).addClass("on");
        }
        $(prev).click(function(){
            clearInterval(intv1);
            prevAni();
            intv1 = setInterval(function(){ nextAni(); }, opt2);
        });
        $(next).click(function(){
            clearInterval(intv1);
            nextAni();
            intv1 = setInterval(function(){ nextAni(); }, opt2);
        });
        
        var intv1 = setInterval(function(){
            nextAni();
        }, opt2);
        
        $(numbox).click(function(){
            var th = $(this).index()-1;
            if(th>0) {
                tar.stop();
                clearInterval(intv1);
                for(var i=0;i<th;i++){
                    tar.find(chd).eq(0).appendTo(tar);
                    $(numbox).eq(0).appendTo($(numfr));
                }
            }
            nextAni();
            intv1 = setInterval(function(){ nextAni(); }, opt2);
        });
        var sw=1;
        $(playBtn).click(function(){
            if(sw==1) {
                tar.stop();
                clearInterval(intv1);
                $(this).addClass("on");
            } else {
                $(this).removeClass("on");
                intv1 = setInterval(function(){ nextAni(); }, opt2);
            }
            sw=sw*-1;
        });
    }; 
}(jQuery));