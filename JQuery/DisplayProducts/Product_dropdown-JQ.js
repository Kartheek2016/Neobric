	var categories = [ {
		id : 1,
		name : "Food"
	}, {
		id : 2,
		name : "Stationary"
	}, {
		id : 3,
		name : "Electronic Gadgets"
	}, {
		id : 4,
		name : "Clothes"
	} ];
	var products = [ {
		id : 1,
		name : "Burger",
		category_id : 1
	}, {
		id : 2,
		name : "Pizza",
		category_id : 1
	}, {
		id : 3,
		name : "Book",
		category_id : 2
	}, {
		id : 4,
		name : "Pen",
		category_id : 2
	}, {
		id : 5,
		name : "iPod",
		category_id : 3
	}, {
		id : 6,
		name : "Headset",
		category_id : 3
	}, {
		id : 7,
		name : "Shirts",
		category_id : 4
	}, {
		id : 8,
		name : "Jeans",
		category_id : 4
	}, ];
$(document).ready(function() {
	var option = '<option value=""></option> \n';
	for (var i in categories) {
		option += '<option value=' + categories[i].id + '>' + categories[i].name + '</option>';
		option += '\n';
	}
	$('#category_select').html(option);
	$('#category_select').click(function() {
        	var $category_id = $(":selected").val();
		var div = '<div></div> \n';
		for (var i = 0; i < products.length; i++) {
			if (products[i].category_id === parseInt($category_id)) {
				div += '<div>' + products[i].id + "." + products[i].name + '</div>';
				div += '\n';
			}
		}
		$('#product_select').html(div);
	});
});
