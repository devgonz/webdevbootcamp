var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?auto=format&fit=crop&w=1050&q=80",
        description: "If you are an infrequent traveler you may need some tips to keep the wife happy while you are jet setting around the globe. Many individuals do not realize the tolls that traveling can have on married life. Occasionally your travels are going to take you to a location that your spouse would love to attend."
    },
    {
        name: "Desert Mesa",
        image: "https://images.unsplash.com/photo-1490733325962-96398c69612a?auto=format&fit=crop&w=1050&q=80",
        description: "It is now possible to charter, rent or lease an aircraft for less than ever before and it has also become easier."
    },
    {
        name: "Canyon Floor",
        image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?auto=format&fit=crop&w=1050&q=80",
        description: "The Jetpod cruises at 350 mph and uses an unbelievable 410 feet of landing space. This is achieved through a combination of horizontal and vertical thrust management as developed by Avcen."
    }
]

function seedDB() {
    // Remove all campgrounds
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("Removed campgrounds");
        // Remove comments
        Comment.remove({}, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Removed comments");
            }
        });
        
        // Add a few campgrounds
        data.forEach(function(seed) {
            Campground.create(seed, function(err, campground) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Added a campground");
                    // Create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment) {
                            if (err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    });
}

module.exports = seedDB;