$(document).ready(()=>{
  
    $('.mobile-menu-hidden').on('click', ()=> {
        $('.mobile-menu-hidden').hide();
        $('.mobile-menu-show').slideDown();
    })

    $('.mobile-menu-show').on('click', ()=> {
        $('.mobile-menu-hidden').show();
        $('.mobile-menu-show').fadeOut();
    })

});