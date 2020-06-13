$(document).ready(function () {
    
// Language
    const langBtn = $("[data-lang]");
    const langEn = $("[data-en]");
    const langUk = $("[data-uk]");
    const headerContent = $(".header__inner");
    const htmlDoc = $("html");
    let userLang = navigator.language || navigator.userLanguage; 
    let selectedLang = localStorage.getItem("lang");
    let setLang = selectedLang;
    
    setTimeout (function() {
        headerContent.addClass('active');
        htmlDoc.css('visibility', 'visible');
    }, 0);
    
    if (setLang == "en" || setLang == "uk") {
        
        if (setLang == "uk") {
        
        $(document.body).addClass('uk');
        $(document.body).removeClass('en');
        
        langUk.removeClass('none');
        langEn.addClass('none');  
            
        localStorage.removeItem("lang");
        localStorage.setItem("lang", "uk");
            
        } else {
            
        $(document.body).addClass('en');
        $(document.body).removeClass('uk');
        
        langEn.removeClass('none');
        langUk.addClass('none'); 
            
        localStorage.removeItem("lang");
        localStorage.setItem("lang", "en");
        }
        
    } else {
    
     if (userLang == 'uk' || userLang == 'ru') {
        
        $(document.body).addClass('uk');
        $(document.body).removeClass('en');
        
        langUk.removeClass('none');
        langEn.addClass('none');
        
    } else {
        $(document.body).addClass('en');
        $(document.body).removeClass('uk');
        
        langEn.removeClass('none');
        langUk.addClass('none');
        
    }
    }
        
    langBtn.on('click', function(event) {
        event.preventDefault();
        
        if($(document.body).hasClass('uk')) {
        
        $(document.body).addClass('en');
        $(document.body).removeClass('uk');
        
        langEn.removeClass('none');
        langUk.addClass('none');  
            
        localStorage.removeItem("lang");
        localStorage.setItem("lang", "en");
            
        } else {
            
        $(document.body).addClass('uk');
        $(document.body).removeClass('en');
        
        langUk.removeClass('none');
        langEn.addClass('none'); 
            
        localStorage.removeItem("lang");
        localStorage.setItem("lang", "uk");
        }
});
    
// Bar
    const showBar = $('.burger');
    const barId = $('.sidebar');
    const barSpace = $('.sidebar__freespace');
    const barContent = $('.sidebar__content');
    const barClose = $('.sidebar__close')
    
        
    showBar.on('click', function(event) {
        event.preventDefault();
       
        $(barId).addClass('active');
        $('body').addClass('noscroll');
    });
    
    barSpace.on('click', function(event) {
        event.preventDefault();
        
        $(barId).removeClass('active');
        $('body').removeClass('noscroll');
    });
    
    barClose.on('click', function(event) {
        event.preventDefault();
       
        $(barId).removeClass('active');
        $('body').removeClass('noscroll');
    });
    
    showBar.click(function(){
        event.preventDefault();
        
        $(barContent).animate({width: "250px"}, 500);
    });
    
    barSpace.click(function(){
        $(barContent).animate({width: "0"}, 100);
    });
    
    barClose.on('click', function(event) {
        event.preventDefault();
        
        $(barContent).animate({width: "0"}, 100);
    });
    
// Modal
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    
    modalCall.on("click", function(event){
        event.preventDefault();
        
        let $this = $(this);
        let modalId = $this.data('modal');
        
        $(modalId).addClass('show');
        $("body").addClass('noscroll');
    });
    
        modalClose.on("click", function(event){
        event.preventDefault();
        
        let $this = $(this);
        let modalParent = $this.parents('.modal');
        
        modalParent.removeClass('show');
            $("body").removeClass('noscroll');
        });
    
    
        $(".modal").on("click", function(event){
            $(this).removeClass('show');
            $("body").removeClass('noscroll');
        });
    
    
        $(".modal__dialog").on("click", function(event){
            event.stopPropagation();
        });
    
// Filter
    
     let filter = $("[data-filter]");
    
    filter.on("click", function(event) {
        event.preventDefault();
        
       let cat = $(this).data('filter');
        
        if(cat == "all") {
            $('[data-cat]').removeClass('none');
        } else {
                $("[data-cat]").each(function() {

               let workCat = $(this).data("cat");

              if(workCat != cat) {
                  $(this).addClass('none');
              } else {
                  $(this).removeClass('none');
              }
          });
        }   
    });
    
// Link delayers
    const hoverItem = ('.delayer');
    const hoverLink = ('.hover__link');
    
    $(hoverItem).on({
        mouseenter: function () {
            setTimeout(function() {
                $(hoverLink).css("visibility", "visible");
            }, 2000)    
            console.log('hover')
        },
        mouseleave: function () {
            $(hoverLink).css("visibility", "hidden");    
            console.log('leave hover')
        }    
    });
    
// Main page reload
    const logoBtn = $(".logo.reloader");
    
    $(logoBtn).on('click', function(event) {
        event.preventDefault();
        
        location.reload();
    });
    
// Laptop slides hidder
    const rechtAll = $('.rechtackle');
    let isIos = navigator.userAgent.match(/(iPod|iPhone|iPad)/);
    
    if(isIos) {  
        
    } else {
        $(rechtAll).addClass('focus');
    } 
    
// IOS hover fixing
//    let itemTeam = $('.team__item');
//    let positionWindow = $(positionWindow).scrollTop();
//
//    $(document).click(function() {
//        console.log(positionWindow);
//    });
//    
//    if(isIos) {
//        $(itemTeam).on('click', function() {
//            $(this).toggle();
//        })
//    } else {
//        
//    }

});




