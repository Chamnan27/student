TabularTables = {};
TabularTables.Teacher = new Tabular.Table({
    name: "Teacher",
    collection: Teacher,
    columns: [
        {data: "id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "gender", title: "Gender"},
        {data: "address", title: "Address"},
        {data: "salary", title: "Salary($)"},
        {data: "phone_number", title: "Phone Number"},
        {
            //Field action using tmpl in tabular.. catch template teacherAction.. to loop button...........
            title: "Action",
            tmpl: Meteor.isClient && Template.teacherAction
        }
    ]
});