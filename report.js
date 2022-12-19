const newman = require('newman')
newman.run({
collection:require('./collection/Monarch Mart.postman_collection.json'),

reporters: 'htmlextra',
iterationCount: 1,
reporter: {
	htmlextra:{
	export:'./Reports/report.html', //if not specified,the file will be written to `newman/`

}
}

}, function(err){
	if (err) {throw err;}
	console.log('collection run complete');
}

);