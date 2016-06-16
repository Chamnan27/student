FlowRouter.route('/', {
    name: 'home',
    action: function (params) {
        BlazeLayout.render("MainLayout", {content: "home"});
    }
});

FlowRouter.route('/home', {
    name: 'homePage',
    action: function (params) {
        BlazeLayout.render("MainLayout", {content: "homePage"});
    }
});
