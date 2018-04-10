var mongoose = require('mongoose');

//creating schema

var reqProductSchema = mongoose.Schema({
	productName: String,
	productSize: String,
	productSample: String,
	productQuantity: Number, 
	email: String,
	contact: String,
	notes: String,
	total: Number,
	image: String,
	deliveryAddress: String,
	userDesign: String,
	userID: String /*{type: mongoose.Schema.Types.ObjectId, ref: 'User'}*/
});



var reqProduct = module.exports = mongoose.model('reqProduct',reqProductSchema)

module.exports.getProfiles = function(callback,limit){
	User.find(callback).limit(limit);
}