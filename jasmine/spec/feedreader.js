/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* All of my tests are within the $() function
 * This is done to ensure that tests won't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS
     * feeds definitions and the allFeeds variable in our application.
     */
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
        /* Wrote a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
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
// boolean values used to check hasClass
        expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('is hiding the menu', function () {
            expect($('menu-hidden')).toBeTruthy()
        });

    });
    /* TODO: . You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
        // Test to perform the hiding/showing of the menu element


    /* TODO: Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    /* TODO: Write a new test suite named "Initial Entries" */
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