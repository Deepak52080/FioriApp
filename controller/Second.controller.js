sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function(Controller){
        
        return Controller.extend("mymvc.controller.Second",{

            onBack: function(){

                var oApp = sap.ui.getCore().byId("idApp");
                oApp.to("idFirst");
            }

        });


});