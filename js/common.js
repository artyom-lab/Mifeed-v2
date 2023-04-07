$(function() {

$(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
		e.stopPropagation();
	});

  function navbar() {
    if ($(this).scrollTop() >= $(window).height()/2) {
      $('.page-navbar').addClass("fixed-top");
    } else {
      $('.page-navbar').removeClass("fixed-top");
    };
  };
  navbar();
  $(window).on("scroll", navbar);

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

  $("select.select2").select2();
  $("select.search-hide").select2({
    minimumResultsForSearch: Infinity
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

});

