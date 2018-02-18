/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* All of my tests are within the $() function
 * This is done to ensure that tests won't run until the DOM is ready.
 */
$(function() {
    // This suite is all about the RSS
    // feeds definitions and the allFeeds variable in our application.
    // https://jasmine.github.io/2.0/introduction.html
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        // Wrote a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.  
        it('url is defined', function() {
            allFeeds.forEach(function(feed) {
                feedUrl = feed.url;
                expect(feedUrl).toBeDefined();
                expect(feedUrl.length).not.toBe(0);
            });
        });
        // Wrote a test that loops through each feed
        // in the allFeeds object and ensures it has a name defined
        // and that the name is not empty.
        it('name is defined', function() {
            allFeeds.forEach(function(feed) {
                feedName = feed.name;
                expect(feedName).toBeDefined();
                expect(feedName.length).not.toBe(0);
            });
        });
    });
    /* Wrote a  test suite named "The menu" */
    describe('The menu', function() {
        // test that ensures the menu element is hidden by default
        it('has an element hidden by default', function() {
            // hasClass implementation found here
            // http://stackoverflow.com/questions/20268128/how-to-test-if-an-element-has-class-using-protractor
            // http://stackoverflow.com/questions/32615713/tobetrue-vs-tobetruthy-vs-tobetrue
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
        // Wrote a test to ensure the menu changes
        // visibility when the menu icon is clicked. This test
        // should have two expectations: does the menu display when
        // clicked and does it hide when clicked again.
        it('switches the visibility upon clicking on the icon', function() {
            // refers to index.html file line 29
            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            // refers to index.html file line 29            
            $('a.menu-icon-link').click();
            expect(document.body.classList).toContain('menu-hidden');
        });
    });
    // Wrote a new test suite named "Initial Entries"
    describe('Initial Entries', function() {
        // Wrote a test that ensure when the loadFeed function is called and 
        // its work is complete. The loadFeed() is asynchronous so this test  
        // requires Jasmine's beforeEach & asynchronous done() function.
        // http://stackoverflow.com/questions/17317839/how-to-reuse-beforeeach-aftereach-in-jasmine-js
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        it('has something not to be less than 1', function () {
            // feed refers to line 35 in index.html and entry in line index.html line 38
            // not.toBe found from the following:
            // https://jasmine.github.io/2.0/introduction.html
            // How I got "not.toBeLessThan(1)"
            // http://stackoverflow.com/questions/24090270/how-can-i-test-that-a-value-is-greater-than-or-equal-to-in-jasmine
            expect($('.feed .entry').length).not.toBeLessThan(1);
        });
    });
    // Wrote a new test suite named "New Feed Selection"
    describe('New Feed Selection', function() {
        // Store two the variable values for two feeds after loading
        var feed0,
            feed1;
        // var feedContent;
        // var feedPrior;
        // var feedLatter;
        // var feedLatter;
        beforeEach(function (done) {
            // run before and after asynchronous specs in jasmine 2.0
            // https://github.com/jasmine/jasmine/issues/526
            // loadFeed function referenced in line 38 of app.js file handles async
            loadFeed(1, function() {
                // refers to div class feed in line 35 of index.html file
                feed0 = $('.feed').html();
                // calls the feed asynchronously
                // console.log($('.feed').html());
                done();
            });
        });
        // wrote a test to ensure when a new feed is loaded by the loadFeed function
        it('ensures new feed is loaded by loadFeed function', function(done) {
            loadFeed(0, function() {
                // console.log($('.feed').html());
                expect($('.feed').html()).not.toEqual(feed0);
                // asynchronous loading handled below
                done();
            });
        });
    });
}());