# SAP UI5 Demo Filtering Using SearchField

In SAP UI5, you can implement filtering using a SearchField control to allow users to search and filter data in a list or table. The SearchField control provides an input field where users can enter search terms, and you can use the entered value to filter the data accordingly.


### Code Explaination

Refer to [/webapp/view/InvoicesList.view.xml](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Filtering-Using-SearchField/blob/master/webapp/view/InvoicesList.view.xml "InvoicesList.view.xml")

It contains a **List** control that displays a list of invoices. The list is bound to the `Invoices` model. The `headerToolbar` of the list contains a **Toolbar** control with a **Title** control and a **SearchField** control. The `Title` control displays the text "Invoices". The `SearchField` control is used to filter the list based on the user's input. The `width` property of the `SearchField` control is set to 50%. The `search` event of the `SearchField` control is bound to the `onSearchSetFilter` method of the controller. The `items` aggregation of the `List` control contains an `ObjectListItem` control that displays the product name and quantity of each invoice item.

Refer to [/webapp/controller/InvoicesList.controller.js](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Filtering-Using-SearchField/blob/master/webapp/controller/InvoicesList.controller.js "InvoicesList.controller.js")

The controller has a single method called `onSearchSetFilter`, which is called when the user enters a search query in the `SearchField` control of the view. The method first creates an empty array called `aFilter`. It then retrieves the search query entered by the user using the `getParameter` method of the `oEvent` object. If the search query is not empty, the method creates a new `Filter` object that filters the `ProductName` property of the `Invoices` model based on the search query using the `FilterOperator.Contains` operator. The `Filter` object is then added to the `aFilter` array.

Finally, the method retrieves the `List` control with the ID `invoicesList` using the `byId` method of the controller. It then retrieves the binding of the `items` aggregation of the `List` control using the `getBinding` method. The `filter` method of the binding is then called with the `aFilter` array as the argument to filter the list based on the user's search query.

---

[![Vaibhav Mojidra - 1.jpeg](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Filtering-Using-SearchField/master/screenshots/1.jpeg "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)

[![Vaibhav Mojidra - 2.jpeg](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Filtering-Using-SearchField/master/screenshots/2.jpeg "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)