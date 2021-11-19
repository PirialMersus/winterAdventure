
var section_width = $('.wellcome').width();
var container_width = $('.container').width();
var section_text_procent = 0;
var section_img_procent = 0;
var $our_services_text_column = $('.our_services_text_column');
var $wellcome_text = $('.wellcome_text');
var $drop_modal_form = $('.drop_modal_form');
var $wellcome_img = $('.wellcome_img');
var $our_projects_text = $('.our_projects_text');
var $our_projects_img = $('.our_projects_img');
var $nav_bar = $('.nav_bar');
var $site_header = $(".site_header");
var $our_services_link = $(".our_services_link");
var $click_menu_wrp = $('.click_menu_wrp');
var $our_services = $('.our_services');

$('.background_slider').slider({
    animationSpeed: 900
});

$("a.scroll-to").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});

$(document).ready(function () {
    const $links = $('.sheduleHeader li');
    const $contentBox = $('.contentBox');

    for (let i = 0; i < $contentBox.length; i++) {
        $links[i].addEventListener('click', function () {
            for (let j = 0; j < $contentBox.length; j++) {
                $contentBox[j].className = 'contentBox';
            }
            document.getElementById(this.dataset.id).className = 'contentBox active';

            for (let j = 0; j < $contentBox.length; j++) {
                $links[j].className = '';
            }
            this.className = 'active';
            // $('.wellcome_img').css('max-width', (100 - section_text_procent) + '%');
            // $('.our_services').css('background-image', 'url("../img/2.jpg"');
        })
    }

    // $links.on('click', function () {
    //     $(this).siblings().removeClass('active');
    //     $(this).addClass('active');
    // })
})

// client is thinking. To do this feature or not to do?
// $(document).ready(function () {
//     $.fn.animate_Text = function () {
//         var string = this.text();
//         return this.each(function () {
//             var $this = $(this);
//             $this.html(string.replace(/./g, '<span class="new">$&</span>'));
//             $this.find('span.new').each(function (i, el) {
//                 setTimeout(function () { $(el).addClass('div_opacity'); }, 400 * i);
//             });
//         });
//     };
//     setTimeout(function () {
//         $('#text_appear_1').show();
//         $('#text_appear_1').animate_Text();
//         setTimeout(function () {
//             $('#text_appear_2').show();
//             $('#text_appear_2').animate_Text();
//         }, 1700);
//         setTimeout(function () {
//             $('#text_appear_3').show();
//             $('#text_appear_3').animate_Text();
//         }, 4200);
//     }, 3000);
// });

$(document).on("scroll", window, function () {
    if (section_width > 600) {
        if ($(window).scrollTop() > 10) {
            $site_header.addClass('scroll');
        }
        else {
            $site_header.removeClass('scroll');
        }
    }
});


window.addEventListener("resize", function () {
    section_width = $('.wellcome').width();
    if (section_width > 1200) {
        section_text_procent = (section_width / 100 * 40 - (section_width - container_width) / 2) * 100 / container_width;
        $our_services_text_column.css('max-width', section_text_procent + '%');
        $wellcome_text.css('max-width', section_text_procent + '%');
        $wellcome_img.css('max-width', (100 - section_text_procent) + '%');
        $our_projects_text.css('max-width', section_text_procent + '%');
        $our_projects_img.css('max-width', (100 - section_text_procent) + '%');
    }
    else {
        $our_services_text_column.css('max-width', '100%');
        $wellcome_text.css('max-width', '100%');
        $wellcome_img.css('max-width', '100%');
        $our_projects_text.css('max-width', '100%');
        $our_projects_img.css('max-width', '100%');
    }
}, false);
if (section_width > 1200) {
    section_text_procent = (section_width / 100 * 40 - (section_width - container_width) / 2) * 100 / container_width;
    $our_services_text_column.css('max-width', section_text_procent + '%');
    $wellcome_text.css('max-width', section_text_procent + '%');
    $wellcome_img.css('max-width', (100 - section_text_procent) + '%');
    $our_projects_text.css('max-width', section_text_procent + '%');
    $our_projects_img.css('max-width', (100 - section_text_procent) + '%');
    // console.log('section_width = ', section_width);
    // console.log('container_width = ', container_width);
    // console.log('section_text_procent = ', section_text_procent);
}

$click_menu_wrp.on('click touch', function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $nav_bar.removeClass('active');
    } else {
        $(this).addClass('active');
        $nav_bar.addClass('active');
    }
});

$our_services_link.on('click touch', function () {
    const dataAttr = this.dataset.attr;
    if (section_width > 1200) {
        $our_services.css('background-image', `url("../img/${dataAttr}.jpg"`);
    } else {
        console.log('dataAttr', dataAttr);
        switch (dataAttr) {
            case `1`: location.href = 'https://www.instagram.com/helenyogateacher/';
                break;
            case `2`: location.href = 'https://www.instagram.com/alexandr.yoga/';
                break;
            case `3`: location.href = 'https://www.instagram.com/art._.partner/';
                break;
            case `4`: location.href = 'https://www.instagram.com/gennadii_yds/';
                break;
            case `5`: location.href = 'https://www.instagram.com/yogadharmasamadhi/';
                break;
            default: console.log('error');
        }
    }

});

$('.btn_consultation').click(function () {
    $drop_modal_form.toggleClass('active');
});
$('.close_modal_form').click(function () {
    $drop_modal_form.removeClass('active');
});


