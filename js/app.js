$(function() {

  $tvShowsContainer = $('.main').find('.tv-shows');

  var template =

  function renderShows(shows) {
    shows.forEach(function(show) {
      var article = template
        .replace(':title:', show.name)
        .replace(':img:', show.image.medium)
        .replace(':desc:', show.summary)
        .replace(':img alt:', show.name)

      var $article = $(article);

      $tvShowsContainer.append($article.hide());
      $article.fadeIn(1500);
    })
  }

  if(!localStorage.shows) {

    $.ajax({
      url: 'http://api.tvmaze.com/shows',
      success: function(shows, textStatus, xhr) {
        localStorage.shows = JSON.stringify(shows);
        renderShows(shows);
      }
    })

  } else {

    renderShows(JSON.parse(localStorage.shows));

  }

});
