(function($) {
    var plugins = navigator.plugins;
    $.browserHasPlugin = function(name) {
        name = name.toLowerCase();
        if(plugins && plugins.length) {
            for(var i = plugins.length; i >= 0; --i) {
                if(plugins[i] && plugins[i].name && plugins[i].name.toLowerCase().indexOf(name) > -1) {
                    return true;
                }
            }
        }
        return false;
    }
})(jQuery);
