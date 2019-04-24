(function($) {
    "use strict";
    $(document).ready(function() {

            
            if ($(".vps-slider").length > 0) {
                let $this = $(".vps-slider");
        
                let sliderplans = [];
                
                // name
                sliderplans[0] = [products[0].name, products[1].name, products[2].name, products[3].name, products[4].name];
        
                // price
                sliderplans[1] = [products[0].price, products[1].price, products[2].price, products[3].price, products[4].price];
        
                // desc
                sliderplans[2] = [products[0].desc, products[1].desc, products[2].desc, products[3].desc, products[4].desc];
        
                // cpu
                sliderplans[3] = [products[0].cpu, products[1].cpu, products[2].cpu, products[3].cpu, products[4].cpu];
        
                // brandwidth 1
                sliderplans[4] = [products[0].brandwidth, products[1].brandwidth, products[2].brandwidth, products[3].brandwidth, products[4].brandwidth];
        
                // brandwidth 2
                sliderplans[5] = [products[0].brandwidth2, products[1].brandwidth2, products[2].brandwidth2, products[3].brandwidth2, products[4].brandwidth2];
        
                // ram
                sliderplans[6] = [products[0].ram, products[1].ram, products[2].ram, products[3].ram, products[4].ram];
        
                // setup
                sliderplans[7] = [products[0].setup, products[1].setup, products[2].setup, products[3].setup, products[4].setup];
        
                // setup 2
                sliderplans[8] = [products[0].setup2, products[1].setup2, products[2].setup2, products[3].setup2, products[4].setup2];
        
                // diskspace
                sliderplans[9] = [products[0].diskspace, products[1].diskspace, products[2].diskspace, products[3].diskspace, products[4].diskspace];
        
                // ip one
                sliderplans[10] = [products[0].ipOne, products[1].ipOne, products[2].ipOne, products[3].ipOne, products[4].ipOne];
        
                // ip two
                sliderplans[11] = [products[0].ipTwo, products[1].ipTwo, products[2].ipTwo, products[3].ipTwo, products[4].ipTwo];

                let urilink = [products[0].urlLink, products[1].urlLink, products[2].urlLink, products[3].urlLink, products[4].urlLink];
        
                let currentplan = 1;
                
                $this.xsslide('single', sliderplans, currentplan, 'xs', 'horizontal');
        
                $this.slider({
                    animate: true,
                    slide: function( event, ui ) {
                        // title
                        $('.slider-container .title').html(sliderplans[0][ui.value-1]);
                        // price
                        $('.slider-container .price').html(sliderplans[1][ui.value-1]);
                        // description
                        $('.slider-container .desc').html(sliderplans[2][ui.value-1]);
                        // cpu
                        $('.vps-pricing-list .cpu').html(sliderplans[3][ui.value-1]);
                        // brandwidth
                        $('.vps-pricing-list .brandwidth').html(sliderplans[4][ui.value-1]);
                        // brandwidth2
                        $('.vps-pricing-list .brandwidth2').html(sliderplans[5][ui.value-1]);
                        // ram
                        $('.vps-pricing-list .ram').html(sliderplans[6][ui.value-1]);
                        // setup 1
                        $('.vps-pricing-list .setup').html(sliderplans[7][ui.value-1]);
                        // setup 2
                        $('.vps-pricing-list .setup2').html(sliderplans[8][ui.value-1]);
                        // diskspace
                        $('.vps-pricing-list .diskspace').html(sliderplans[9][ui.value-1]);
                        // ip one
                        $('.vps-pricing-list .ip_one').html(sliderplans[10][ui.value-1]);
                        // ip two
                        $('.vps-pricing-list .ip_two').html(sliderplans[11][ui.value-1]);
                        // buttons
                        $('.slider-btns').attr('href', urilink[ui.value-1]);
                        // console.log($('.slider-btns').attr())
                    },
                    change: function( event, ui ) {
                        // title
                        $('.slider-container .title').html(sliderplans[0][ui.value-1]);
                        // price
                        $('.slider-container .price').html(sliderplans[1][ui.value-1]);
                        // description
                        $('.slider-container .desc').html(sliderplans[2][ui.value-1]);
                        // cpu
                        $('.vps-pricing-list .cpu').html(sliderplans[3][ui.value-1]);
                        // brandwidth
                        $('.vps-pricing-list .brandwidth').html(sliderplans[4][ui.value-1]);
                        // brandwidth2
                        $('.vps-pricing-list .brandwidth2').html(sliderplans[5][ui.value-1]);
                        // ram
                        $('.vps-pricing-list .ram').html(sliderplans[6][ui.value-1]);
                        // setup 1
                        $('.vps-pricing-list .setup').html(sliderplans[7][ui.value-1]);
                        // setup 2
                        $('.vps-pricing-list .setup2').html(sliderplans[8][ui.value-1]);
                        // diskspace
                        $('.vps-pricing-list .diskspace').html(sliderplans[9][ui.value-1]);
                        // ip one
                        $('.vps-pricing-list .ip_one').html(sliderplans[10][ui.value-1]);
                        // ip two
                        $('.vps-pricing-list .ip_two').html(sliderplans[11][ui.value-1]);
                        // buttons
                        $('.slider-btns').attr('href', urilink[ui.value-1]);
                        // console.log($('.slider-btns').attr())
                    }
                });
            }
        
            $('.slider-tigger').click(function() {
                var value= parseInt(this.id.slice(5)) + 1;
                $('.vps-slider').slider('value', value);
                if (!$(this).hasClass('current')) {
                    $(this).addClass('current');
                    $(this).nextAll().removeClass('current');
                    $(this).prevAll().removeClass('current');
                } else {
                    $(this).removeClass('current');
                }
            });

    }); // end ready function
    
})(jQuery);