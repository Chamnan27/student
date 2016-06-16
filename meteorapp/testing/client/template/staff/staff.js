Template.staffTable.events({
    'click .js-add-new': function () {
        FlowRouter.go('staffInsert');
    }
});
Template.staffUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var info = Staff.findOne({_id: id});
        return info;

    }
});

Template.staffInsert.helpers({
    data: function () {
        return Staff.find();
    }
});

Template.staffInsert.events({
    'click .js-go-back': function () {
        FlowRouter.go('staffTable');
    },
    'click .js-add': function () {
        var _id = $('#_id').val();
        var id = $('#id').val();
        var name = $('#name').val();
        var gender = $('#gender').val();
        var address = $('#address').val();
        var position = $('#position').val();
        var phone = $('#phone').val();
//insert data...
        Staff.insert({
            id: id,
            name: name,
            gender: gender,
            address: address,
            position: position,
            phone_number: phone
        });
        // alert("seccess");
        alertify
            .alert("Your Data Is Added.", function () {
                alertify.message('OK');
            });
        FlowRouter.go('staffTable');
    }
});

Template.staffAction.events({
    //update focus on record one by one....
    'click .js-update': function () {
        // console.log(this._id);
        // FlowRouter.go('inprovement', {id: this._id});
        // debugger
        console.log(this._id);
        FlowRouter.go('staffUpdate', {id: this._id});
    },
    //remove with alertifyjs package....
    'click .js-removed': function () {
        var self = this;
        alertify.confirm("This is a confirm dialog.",
            function () {
                Staff.remove(self._id);
                alertify.success('Ok');

                console.log(this._id);
            },
            function () {
                alertify.error('Cancel');
            });

    }
});

Template.staffUpdate.events({
    //update data by using id="update button"........
    'click .js-js-updatestaff': function () {
        var updateId = $('#update-id').val();
        var id = $('#id').val();
        var name = $('#name').val();
        var gender = $('#gender').val();
        var address = $('#address').val();
        var position = $('#position').val();
        var phone = $('#phone').val();
        var set = {
            id: id,
            name: name,
            gender: gender,
            address: address,
            position: position,
            phone_number: phone
        };
        //finally updating
        Staff.update(updateId, {$set: set});
        alertify.success(' ហើយ');        //alertifyjs after updating.....
        FlowRouter.go('staffTable')
    }
});
