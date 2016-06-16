Template.teacherTable.events({
    'click .js-add-new': function () {
        FlowRouter.go('teacherInsert');
    }
});
Template.teacherUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var info = Teacher.findOne({_id: id});
        return info;

    }
});

Template.teacherInsert.helpers({
    data: function () {
        return Teacher.find();
    }
});

Template.teacherInsert.events({
    'click .js-go-back': function () {
        FlowRouter.go('teacherTable');//teacherTable is used name in router.....
    },
    //event click add data to tabular.....
    'click .js-add': function () {
        //declare variable for all form......
        var _id = $('#_id').val();
        var id = $('#id').val();
        var name = $('#name').val();
        var gender = $('#gender').val();
        var address = $('#address').val();
        var salary = $('#salary').val();
        var phone = $('#phone').val();
//access data by using id to insert ot tabular..........
        Teacher.insert({
            id: id,
            name: name,
            gender: gender,
            address: address,
            salary: salary,
            phone_number: phone
        });
        // style alert (alertifyjs....)...........after adding...
        alertify
            .alert("Your Data Is Added.", function () {
                alertify.message('OK');
            });
        FlowRouter.go('teacherTable');
        
        //clear data from form........
        // var _id = $('#_id').val('');
        // var id = $('#id').val('');
        // var name = $('#name').val('');
        // var gender = $('#gender').val('');
        // var address = $('#address').val('');
        // var salary = $('#salary').val('');
        // var phone = $('#phone').val('');
    }
});

Template.teacherAction.events({
    'click .js-update': function () {
        // console.log(this._id);
        // debugger
        console.log(this._id);
        FlowRouter.go('teacherUpdate', {id: this._id});//make parameter id by catching This._id to send to router...........
    },
    //remove....
    'click .js-removed': function () {
        var self = this;
        alertify.confirm("This is a confirm dialog.",
            //style alert using alertifyjs........
            function () {
                Teacher.remove(self._id);//romove events...
                alertify.success('Ok');
                // console.log(this._id);
            },
            function () {
                alertify.error('Cancel');
            });
    }
});

Template.teacherUpdate.events({
    //update data by using id="update button"........
    'click .js-js-update': function () {
        var updateId = $('#update-id').val();
        var id = $('#id').val();
        var name = $('#name').val();
        var gender = $('#gender').val();
        var address = $('#address').val();
        var salary = $('#salary').val();
        var phone = $('#phone').val();
        var set = {
            id: id,
            name: name,
            gender: gender,
            address: address,
            salary: salary,
            phone_number: phone
        };
        //finally updating
        Teacher.update(updateId, {$set: set});
        alertify.success('Update Successfully');        //alertifyjs after updating.....
        FlowRouter.go('teacherTable')
    }
});
