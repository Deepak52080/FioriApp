sap.ui.define(
    ["sap/ui/core/mvc/Controller",
    "mymvc/model/models"],
    function(Controller, Model){
        
        return Controller.extend("mymvc.controller.First",{


            onInit: function(){
                // var oModel = Model.creatPOModel();
                // sap.ui.getCore().setModel(oModel);

                this.oRouter = this.getOwnerComponent().getRouter();

            }, 
            onNext: function(index){

                //get the object of app control

                // var oApp = sap.ui.getCore().byId("idApp");
                // oApp.to("idSecond");
                this.oRouter.navTo("object", {
                    key: index
                });
            },

            onPoSelect: function(oEvent){
                var sPath = oEvent.getParameter("listItem").getBindingContextPath();
                // var oApp = this.getView().getParent().getParent();

                // var oView2 = oApp.getDetailPages()[0];
                // oView2.bindElement(sPath);

                var index = sPath.split("/")[sPath.split("/").length -1];

                //to call another function in JS
                this.onNext(index);

            },

            onDelete: function(oEvent){
                var oList = oEvent.getSource();
                //get te item which was pressed
                var oItem = oEvent.getParameter("listItem");
                oList.removeItem(oItem);
                // var sPath = oItem.getBindingContextPath();
                // var oModel = oList.getModel();
                // var itemData = oModel.getProperty(sPath);
                // var items = oModel.getProperty("/purchaseOrders")
                // var tempItem = items

                // for(var i=0; i < items.length; i++){
                //     if(items[i].poNumber === itemData.poNumber){
                //         tempItem.splice(i,1);
                //         break;
                //     }
                // }
            },

            onSearch: function(oEvent){

                var searchString = oEvent.getParameter("query");

                if(searchString === undefined){
                    searchString = oEvent.getParameter("newValue");
                }
                var oList = this.getView().byId("idList");
                //create and empty array
                var aFilter = [];
                //filter based on poNumber
                var oFilter = new sap.ui.model.Filter('poNumber', sap.ui.model.FilterOperator.Contains, searchString);
                //filter based on storagelocation
                var oFilter1 = new sap.ui.model.Filter('storageLocation', sap.ui.model.FilterOperator.Contains, searchString);

                var oFilterItems = new sap.ui.model.Filter('poItems', sap.ui.model.FilterOperator.Contains, searchString);
                // we created a final filter where i am pushing all the filters
                var oFilterMain = new sap.ui.model.Filter({
                    filters: [oFilter, oFilter1, oFilterItems],
                    and: false
                })
                
                aFilter.push(oFilterMain);
                // aFilter.push(oFilter1);
                oList.getBinding("items").filter(aFilter);

            }


        });


});