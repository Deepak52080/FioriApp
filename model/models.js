sap.ui.define(
    ["sap/ui/model/json/JSONModel"],
     function(JSONModel){

        return {

            creatPOModel: function(){

                var oModel = new JSONModel();
                oModel.loadData("model/mockData/poData.json");
                return oModel;
            }
        }



});