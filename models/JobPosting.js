var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JobPostingSchema = new Schema({
	title: {
		type:String,
		required:true
	},
	link: {
		type:String,
		required:true
	},
	note: {
		type: Schema.Types.ObjectId,
		ref: 'Note'
	}
});

var JobPosting = mongoose.model('JobPosting', JobPostingSchema);

module.exports = JobPosting;