TabularTables = {};
TabularTables.Staff = new Tabular.Table({
    name: "Staff",
    collection: Staff,
    columns: [
        {data: "id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "gender", title: "Gender"},
        {data: "address", title: "Address"},
        {data: "position", title: "Position"},
        {data: "phone_number", title: "Phone Number"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.staffAction
        }
    ]
});