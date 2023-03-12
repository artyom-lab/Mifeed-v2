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

  $(".more").on("click", function() {
    $("body").addClass("menubar");
  });

  $(".btn-close-aside").on("click", function() {
    $("body").removeClass("menubar");
  });

  $(".dropdown-close").on("click", function() {
    $(this).closest(".dropdown-menu").removeClass("show");
  });

  $(".btn-browse").on("click", function() {
    $("body").toggleClass("menubar-2");
  });

  $(".menu-map-close").on("click", function() {
    $("body").removeClass("menubar-2");
  });

  $('#map').vectorMap({
    map: 'us_lcc',
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: '#1b9ce5',
        stroke: 'transparent',
        "stroke-width": 2,
      },
      hover: {
        fill: '#0e2241',
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

});

