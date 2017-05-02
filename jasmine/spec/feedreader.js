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
        it('url is defined', function () {
            allFeeds.forEach(function (feed) {
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
                expect(feedUrl.length).not.toBe(0);
            });
        });
    });
/* Wrote a  test suite named "The menu" */
    describe('The menu', function () {
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
            expect(document.body.className).not.toContain('menu-hidden');
// refers to index.html file line 29            
            $('a.menu-icon-link').click();
            expect(document.body.className).toContain('menu-hidden');
        });
    });

// Wrote a new test suite named "Initial Entries"
    describe('Initial Entries', function () {
// Wrote a test that ensure when the loadFeed function is called and 
// its work is complete. The loadFeed() is asynchronous so this test  
// requires Jasmine's beforeEach & asynchronous done() function.
// http://stackoverflow.com/questions/17317839/how-to-reuse-beforeeach-aftereach-in-jasmine-js
        beforeEach(function (done) {
            loadFeed(0, done);
        });
        it('has something greater than zero 0', function (done) {
// feed refers to line 35 in index.html and entry in line index.html line 38
// not.toBe found from the following:
// https://jasmine.github.io/2.0/introduction.html
            expect($('.feed .entry').length).not.toBe([0]);
            done();
        });
    });

    
    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
    /* TODO: Write a new test suite named "New Feed Selection" */
    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
}());