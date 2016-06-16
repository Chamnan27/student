FlowRouter.route('/teacherTable', {
    name: 'teacherTable',                                                  //using name refer to /teacherUpdate...
    action: function (params) {
        BlazeLayout.render("MainLayout", {content: "teacherTable"});
    }
});

FlowRouter.route('/teacherInsert', {
    name: 'teacherInsert',                                              //using name refer to /teacherUpdate...
    action: function (params) {
        BlazeLayout.render("MainLayout", {content: "teacherInsert"});
    }
});

FlowRouter.route('/teacherUpdate/:id', {
    name: 'teacherUpdate',                                              //using name refer to /teacherUpdate....
    action: function (params, queryParams) {
        BlazeLayout.render("MainLayout", {content: "teacherUpdate"});
    }
});