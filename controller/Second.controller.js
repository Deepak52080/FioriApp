sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function(Controller){
        
        return Controller.extend("mymvc.controller.Second",{

            onBack: function(){

                var oApp = sap.ui.getCore().byId("idApp");
                oApp.to("idFirst");
            },

            onInit: function(){

                // this.oRouter = this.getOwnerComponent().getRouter();
                // this.oRouter.attachRoutePatternMatched(this.elonMusk, this)

                this.oRouter = this.getOwnerComponent().getRouter();
                this.oRouter.attachRoutePatternMatched(this._oRouterMatched, this)

            },

            _oRouterMatched: function(args){
              var index = args.getParameter("arguments").key;
              var sPath = "/purchaseOrders/" + index;
              this.getView().bindElement(sPath);

            }

        });


});