https://github.com/jcast90/udacity_feedReader/blob/c5b3dfce5d0202c8bf70a4cc251109d9999347d0/jasmine/spec/feedreader.js
    describe('New Feed Selection', function () {
        var feed;
        var newFeed;
        beforeEach(function (done) {
            loadFeed(0, function () {
                $feed = $('.header-title').html();
                loadFeed(1, function () {
                    $newFeed = $('.header-title').html();
                    done();
                });
            });
        });
        it('content changes', function (done) {
            expect($feed).not.toBe($newFeed);
            done();
            /* checking to make sure the feed loads are different */
            /*console.log($feed);
            console.log($newFeed);*/
        });
    });

https://github.com/stigsfoot/frontend-nanodegree-feedreader/blob/61b92bd579fdd881678eb93d93a1d49ba1c9cc76/jasmine/spec/feedreader.js
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Section', function() {
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         var legacyFeed;
         var newFeed;

         beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(0, function(){
                legacyFeed = $('.feed').html();
                // As per reviewer, running done within loadFeed(0) solves race condition
                loadFeed(1, done);
            });

         });

        it('ensures content actually changes whne loadFeed() is run', function() {
            newFeed = $('.feed').html();
            expect(legacyFeed).not.toBe(newFeed);
        });

     });

    /* A test that greys out link when previously clicked to visually indicate read */
    describe('Previously Read Article', function() {

        // a color  in CSS is #000 by default. Check if onclick event fires then check if .entry-link === #ccc

    });

    https://github.com/vijpandaturtle/javascript-testing/blob/652d7962c0240e59565072d7c4c4af81466b0b38/feed-reader-testing/jasmine/spec/feedreader.js
    
    describe('New Feed Selection', function() {
        //These are variables that will hold the values for two feeds after loading.
        var feedbefore;
        var feedafter;
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        beforeEach(function(done) {
            loadFeed(0, function() { //This loads the feed at position 1.
                 feedbefore = $('.feed').html(); //We can use this loaded feed as our feed before testing.
                /*This done function tells the jasmine framework that it shouldn't start testing the spec before
                 *the async part of the function is over.*/
                done();
            });
        });

        it('when new feed is loaded content changes', function(done) {
            loadFeed(1, function() {
                feedafter = $('.feed').html();
                expect(feedafter).not.toEqual(feedbefore);
                done();
            });
        });

    });