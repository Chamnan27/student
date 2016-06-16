
//crud staff....
FlowRouter.route('/staffTable', {
    name: 'staffTable',
    action: function (params) {
        BlazeLayout.render("MainLayout", {content: "staffTable"});
    }
});

FlowRouter.route('/staffInsert', {
    name: 'staffInsert',
    action: function (params) {
        BlazeLayout.render("MainLayout", {content: "staffInsert"});
    }
});

FlowRouter.route('/staffUpdate/:id', {
    name: 'staffUpdate',
    action: function (params, queryParams) {
        BlazeLayout.render("MainLayout", {content: "staffUpdate"});
    }
});