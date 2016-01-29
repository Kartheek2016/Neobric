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
	category_id : 1,
	price : 55.00
	}, {
	id : 2,
	name : "Pizza",
	category_id : 1,
	price : 110.00
	}, {
	id : 3,
	name : "Book",
	category_id : 2,
	price : 25.00
	}, {
	id : 4,
	name : "Pen",
	category_id : 2,
	price : 15.00
	}, {
	id : 5,
	name : "iPod",
	category_id : 3,
	price : 3500.00
	}, {
	id : 6,
	name : "Headset",
	category_id : 3,
	price : 2500.00
	}, {
	id : 7,
	name : "Shirts",
	category_id : 4,
	price : 600.00
	}, {
	id : 8,
	name : "Jeans",
	category_id : 4,
	price : 2000.00
	}, ];         
$(document).ready(function() {
	var table = "";
	for(var j = 0; j < products.length; j++){
		table += "<tr>"; 
		table += '<td>' + products[j].id + '</td>';
		table += '<td>' + products[j].name + '</td>';
		for(var i = 0; i < categories.length; i++){
			if(products[j].category_id === categories[i].id){
				table += '<td>' + categories[i].name + '</td>';
			}
		}
		table += "</tr>";		
	}
	$("tbody").append(table);
}
