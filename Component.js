sap.ui.define(
    ["sap/ui/core/UIComponent"], 
    function(UiComponent){

        return UiComponent.extend ("mymvc.Component", {

            metadata: {
                manifest: "json"
            },
            init: function(){

                UiComponent.prototype.init.apply(this, arguments);

                this.getRouter().initialize();
            },

            destroy: function(){

            }
        });

});