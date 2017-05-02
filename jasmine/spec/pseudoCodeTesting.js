// https://github.com/jcast90/udacity_feedReader/blob/c5b3dfce5d0202c8bf70a4cc251109d9999347d0/jasmine/spec/feedreader.js
    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, done);
        });
        it('has an entry in feed container', function (done) {
            /*making sure my .entry h2 has content in it*/
            expect($('.entry h2').length).not.toBe([0]);
            done();
        });
    });

// https://github.com/stigsfoot/frontend-nanodegree-feedreader/blob/61b92bd579fdd881678eb93d93a1d49ba1c9cc76/jasmine/spec/feedreader.js
    describe('Initial Entries', function() {
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('has one or more ".entry" within the".feed" HTML Class ', function() {
          var entry = $('.entry');
          var feed = $('.feed');
          expect(entry.length).toBeGreaterThan(0);
        });

    });

// https://github.com/vijpandaturtle/javascript-testing/commit/652d7962c0240e59565072d7c4c4af81466b0b38
    describe('Initial Entries', function() {
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test
         * uses Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('atleast single entry element within the feed container', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });
