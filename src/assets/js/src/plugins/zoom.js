// Object of plugins to add to Globals.PLUGINS
Globals.PLUGINS.themePluginZoom = function(context) {
  // ----------------------------------------------------------------
  // Plugin: jQuery Zoom (image zoon)
  // @see: http://www.jacklmoore.com/zoom/
  // ----------------------------------------------------------------
  var $zooms = context.find('[data-img-zoom]');
  if ($zooms.length > 0) {
    var themePluginZoomInit = function() {
      $zooms.each(function() {
        var $this = $(this),
          imgLarge = $this.data('img-zoom'),
          imgZoomSettings = $this.data('img-zoom-settings') || {};

        imgZoomSettings.url = imgLarge;

        $this.addClass('d-block').zoom(imgZoomSettings);
      });
    };
    $document.themeLoadPlugin(
      ["jquery-zoom/jquery.zoom.min.js"], [], themePluginZoomInit);
  }
};


