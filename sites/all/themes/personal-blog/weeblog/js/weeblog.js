(function ($) {
Drupal.behaviors.weeBlogAction = {
  attach: function (context) {
    /*
    $('#social-share-wrapper').each(function(){
      var social_share = $(this);
      var top = social_share.height() + social_share.position().top;
      social_share.css({top: top});
    });
    */
    
    $('.btn-btt').smoothScroll({
      speed: 350
    });
    Drupal.WeeBlog.setInputPlaceHolder('search_block_form', 'Search...');
  }
}

Drupal.WeeBlog = Drupal.WeeBlog || {};

Drupal.WeeBlog.setInputPlaceHolder = function(name, text) {
  $('input[name="' + name + '"]').val(Drupal.t(text));
  $('input[name="' + name + '"]').focus(function(){
    if(this.value == Drupal.t(text)) {
      this.value='';
    }
  }).blur(function(){
    if(this.value == '') {
      this.value=Drupal.t(text);
    }
  });
}

})(jQuery);