var mongoose = require('mongoose'),
    assert = require('assert');

var Leaders = require('./models/leadership');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'conneciton error:'));
db.once('open', function(){
    // we're connected!
    console.log('Connected correctly to the mongodb server');

    // Create a new leader
    Leaders.create({
        'name': 'Peter Pan',
        'image': "images/alberto.png",
        'designation': 'Chief Epicurious Officer',
        'abbr': 'CEO',
        'description': 'Our CEO, Peter, ...',
    }, function(err, leader){
        if(err) throw err;

        console.log('Leader created');
        console.log(leader);

        var id = leader._id;

        // get all the leaders
        setTimeout(function(){
            Leaders.findByIdAndUpdate(
                 id, {
                     $set: {
                        description: 'Our new CEO, Peter, ...'
                    }
                }, {
                    new: true
                }).exec(function(err, leader){
                    if(err) throw err;
                    console.log('Leader updated!');
                    console.log(leader);

                    // drop the dishes collection
                    db.collection('leaders').drop(function(){
                        db.close();
                    });
                });
        }, 3000);
    });
});