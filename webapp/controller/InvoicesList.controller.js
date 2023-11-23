sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator"
	],function(Controller,Filter,FilterOperator){
		"use strict";
		return Controller.extend("com.vaibhavmojidra.filteringusingsearchfielddemo.controller.InvoicesList",{
			onSearchSetFilter:function(oEvent){
				var aFilter=[];
				var sQuery=oEvent.getParameter("query");
				
				if(sQuery){
					aFilter.push(new Filter("ProductName",FilterOperator.Contains,sQuery));
				}
				
				var oList=this.byId("invoicesList");
				var oBinding=oList.getBinding("items");
				oBinding.filter(aFilter);
			}	
		});
	}
);