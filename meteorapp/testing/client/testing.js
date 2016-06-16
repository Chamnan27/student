Template.staffInsert.helpers({
    test: function () {
        return "Test";
    },
    data: function () {
        return Staff.find();
    }
});
Template.staffInsert.events({
    'click .js-add': function () {
        var id = $('#id').val();
        var name = $('#name').val();
        var gendar = $('#gendar').val();
        var address = $('#address').val();
        var position = $('#position').val();
        var phone = $('#phone').val();

        Staff.insert({
            ID: id,
            Name: name,
            Gendar: gendar,
            Address: address,
            Position: position,
            Phone_Number: phone,
        });

        alert('Success');
    },
    'click .update': function () {
        $('#update-id').val(this._id);
        $('#id').val(this.ID);
        $('#name').val(this.Name);
        $('#gendar').val(this.Gendar);
        $('#address').val(this.Address);
        $('#position').val(this.Position);
        $('#phone').val(this.Phone_Number);
    },
    'click #update': function () {
        var updateId = $('#update-id').val();
        var id = $('#id').val();
        var name = $('#name').val();
        var gendar = $('#gendar').val();
        var address = $('#address').val();
        var position = $('#position').val();
        var phone = $('#phone').val();

        var set = {
            ID: id,
            Name: name,
            Gendar: gendar,
            Address: address,
            Position: position,
            Phone_Number: phone
        };
        Staff.update(updateId, {$set: set});
    },
    'click .removed': function () {
        Staff.remove(this._id);
    }
});
