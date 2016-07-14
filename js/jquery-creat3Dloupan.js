/**
 * author:haorooms
 * this is common text,by no use requirejs and us js globle rem.js
 * 
 * http://www.haorooms.com
 * 
 * write:2015.03.015
 */
;(function($, window, document,undefined) {

    var Creat3Dloupan = function(ele, opt) {
        this.$element = ele;
        this.defaults = {
            'Height': 5,
            'appearTyle': 'click',
            'topfloor':'images/topfloor.png',
            'fontimgheight':56,
            'imgheight':83,
            'imgwidth':169,
            'handle': 0, 
            'exclude': 0
        };
        this.vision="v1.0.0";
        this.options = $.extend({}, this.defaults, opt);
        this.init();

    }

    Creat3Dloupan.prototype = {
        init: function() {
            var left =this.$element.position().left+60;
            var top =this.$element.position().top;
            if($("#LpId").length>0){
                $("#LpId").remove()
            };
            var wrapdiv=document.createElement("div");
            wrapdiv.setAttribute("id","LpId");
            var toppx=top+"px";
            var leftpx=left+"px";
            $(wrapdiv).css({"position":"absolute","top":toppx,"left":leftpx});
            var lpheight=parseInt(this.options.Height);
            var hoverwidth=parseInt(this.options.imgwidth)+10;
            var imageArray=[];
            var newtop=0;
            for (var i=0;i<lpheight;i++){
                imageArray[i]='<div class="Lcimg" style="cursor:pointer;position:absolute;top:'+newtop+'px;left:0px;z-index:1000">'
                +'<img class="hideimg" src="'+this.options.topfloor+'">'
                +'<span style="position:absolute;left:2px;bottom:'+(this.options.fontimgheight)/3+'px;font-size:12px;color:#fff;">'+(i+1)+'层</span>'
                +'</div>'
                +'<div class="Lcinfo" style="top:'+newtop+'px;left:'+this.options.imgwidth+'px;">'
                +'<span style="padding:10px 10px 10px 25px;">这里面写详细信息</span>'
                +'</div>'
                newtop=parseInt(newtop)-parseInt(this.options.fontimgheight);

            }
            $(wrapdiv).html(imageArray.join(''));
            this.$element.after(wrapdiv);
            this.dragLp(wrapdiv);
            this.showDialog();

        },
        showDialog:function(){
            var hoverflag=0;
            $(".Lcimg").hover(function(){
                $(this).next(".Lcinfo").show();

            },function(){
                if(!hoverflag){
                  $(this).next(".Lcinfo").hide();
                }

            })

            $(".Lcinfo").hover(function(){
                $(this).show();
                hoverflag=1;

            },function(){
                $(this).hide();
                hoverflag=0;

            })


        },
        dragLp:function(obj){
            var settings=this.defaults;
            var dx, dy, el = $(obj), handle = settings.handle ? $(settings.handle, el) : el;
            handle.on({
                mousedown: function(e){
                    if (settings.exclude && ~$.inArray(e.target, $(settings.exclude, el))) return;
                    e.preventDefault();
                    var os = el.offset(); dx = e.pageX-os.left, dy = e.pageY-os.top;
                    $(document).on('mousemove.drag', function(e){ el.offset({top: e.pageY-dy, left: e.pageX-dx}); });
                },
                mouseup: function(e){ $(document).off('mousemove.drag'); }
            });
        }


    }

    $.fn.Creat3Dloupan = function(options) {
        var creat3Dloupan = new Creat3Dloupan(this, options);
        return this;
    } 

})(jQuery, window, document);