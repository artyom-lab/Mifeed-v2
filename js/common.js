$(function() {

$(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
		e.stopPropagation();
	});

  $(".btn-aside-map").on("click", function() {
    $("body").addClass("menubar-map");
  });

  $(".aside-map-close").on("click", function() {
    $("body").removeClass("menubar-map");
  });

  $(".btn-aside-locations").on("click", function() {
    $("body").addClass("menubar-locations");
  });

  $(".aside-locations-close").on("click", function() {
    $("body").removeClass("menubar-locations");
  });

  $(".btn-aside-allnews").on("click", function() {
    $("body").addClass("menubar-allnews");
  });

  $(".aside-allnews-close").on("click", function() {
    $("body").removeClass("menubar-allnews");
  });

  $(".btn-browse").on("click", function() {
    $("body").addClass("menubar-2");
  });

  $(".menu-map-close").on("click", function() {
    $("body").removeClass("menubar-2");
  });

  $('#map').vectorMap({
    map: 'us_lcc',
    backgroundColor: 'transparent',
    zoomOnScroll: false,
    regionsSelectable: true,
    regionsSelectableOne: true,
    regionStyle: {
      initial: {
        fill: '#1b9ce5',
        stroke: 'transparent',
        "stroke-width": 2,
      },
      hover: {
        fill: '#307fc9',
        "fill-opacity": 1,
      },
      selected: {
        fill: '#307fc9',
        "fill-opacity": 1,
      },
    },
  });

// SELECT

  $("select.select2").select2({
    allowClear: true
  });
  $("select.search-state").select2({
    placeholder: "Search or Select a State"
  });
  $("select.search-county").select2({
    placeholder: "Search for a County"
  });
  $("select.search-community").select2({
    placeholder: "Search for a Community"
  });

  $('.section-map-hide select').on('change', function () {
    $(this).closest('.box-search').next().show();
    $(this).closest('.box-search').find('.cross-red').show();
  });

  $('.section-map-hide .cross-red').on('click', function() {
    $(this).siblings('.select-box').find('select').find('option:first-child').attr("selected", false).attr("selected", true).change();
    $(this).closest('.box-search').nextAll().find('select').find('option:first-child').attr("selected", false).attr("selected", true).change();
    $(this).closest('.box-search').nextAll().hide();
    $(this).hide();
    $(this).closest('.box-search').nextAll().find('.cross-red').hide();
  });

  $(".drop-select").on("click", function() {
    $(this).parent().find(".dropdown-menu").addClass("select-visible");
  });

  $(".dropdown-close").on("click", function() {
    $(this).closest(".dropdown-menu").removeClass("select-visible");
  });

  (function($) {
  var Defaults = $.fn.select2.amd.require('select2/defaults');
  $.extend(Defaults.defaults, {
    dropdownPosition: 'auto'
  });
  var AttachBody = $.fn.select2.amd.require('select2/dropdown/attachBody');
  var _positionDropdown = AttachBody.prototype._positionDropdown;
  AttachBody.prototype._positionDropdown = function() {
    var $window = $(window);
    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');
    var newDirection = null;
    var offset = this.$container.offset();
    offset.bottom = offset.top + this.$container.outerHeight(false);
    var container = {
        height: this.$container.outerHeight(false)
    };
    container.top = offset.top;
    container.bottom = offset.top + container.height;
    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };
    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };
    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);
    var css = {
      left: offset.left,
      top: container.bottom
    };
    // Determine what the parent element is to use for calciulating the offset
    var $offsetParent = this.$dropdownParent;
    // For statically positoned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }
    var parentOffset = $offsetParent.offset();
    css.top -= parentOffset.top
    css.left -= parentOffset.left;
    var dropdownPositionOption = this.options.get('dropdownPosition');
    if (dropdownPositionOption === 'above' || dropdownPositionOption === 'below') {
      newDirection = dropdownPositionOption;
    } else {
      if (!isCurrentlyAbove && !isCurrentlyBelow) {
        newDirection = 'below';
      }
      if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
        newDirection = 'above';
      } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
        newDirection = 'below';
      }
    }
    if (newDirection == 'above' ||
    (isCurrentlyAbove && newDirection !== 'below')) {
        css.top = container.top - parentOffset.top - dropdown.height;
    }
    if (newDirection != null) {
      this.$dropdown
        .removeClass('select2-dropdown--below select2-dropdown--above')
        .addClass('select2-dropdown--' + newDirection);
      this.$container
        .removeClass('select2-container--below select2-container--above')
        .addClass('select2-container--' + newDirection);
    }
    this.$dropdownContainer.css(css);
  };
})(window.jQuery);

});

