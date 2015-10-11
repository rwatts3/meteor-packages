PayPal = {};
PayPal._cart = PayPal._cart || [];
Options.init('paypal', {
	email: 'setme@domain.com',
	type: '_click',
	currency: 'USD',
	formId: 'paypalForm',
	submitClass: 'modal-action modal-close waves-effect waves-green btn',
	submitText: 'Submit',
	cancelClass: 'modal-action modal-close waves-effect waves-red btn',
	cancelText: 'Cancel'
});

// Initialize Reactive Templates enabling dev customizations
ReactiveTemplates.request('paypalForm');
ReactiveTemplates.request('paypalSubmit');
ReactiveTemplates.request('paypalCancel');


if (Meteor.isClient) {
	
	Template.paypalForm.helpers({
		paypal: function () {
			return Options.get('paypal');
		},
		items: function () {
			var cartItems = [{productName: 'test', productNumber:'19289',productAmount:99.99},{productName: 'test', productNumber:'19289',productAmount:99.99},{productName: 'test', productNumber:'19289',productAmount:99.99}]
			console.log(cartItems);
			return cartItems;
		}
	});
	
	Template.paypalSubmit.helpers({
		paypal: function () {
			return Options.get('paypal');
		}
	});
	
	Template.paypalCancel.helpers({
		paypal: function () {
			return Options.get('paypal');
		}
	});
	
	Template.paypalSubmit.events({
		'click #paypalSubmit': function (event, template) {
			event.preventDefault();
			var paypal = Options.get('paypal');
			var formId = '#' + paypal.formId;
			$(formId).submit();
			
	
		}
	});
};
