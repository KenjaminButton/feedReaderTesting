# Feed Reader Testing With Jasmine
# Test-Driven Development 
## The purpose is to use Jasmine to write a number of tests against pre-existing application. I am testing the underlying business logic of the application as well as the event handling and DOM manipulation.

Install Jasmine
	https://jasmine.github.io/
	When allFeeds variable is undefined with an empty array, the results return a spec failure of "Expected 0 not to be 0.""

1. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.

<!-- https://jasmine.github.io/2.0/introduction.html -->

	Error: at Object.<anonymous> (http://localhost:8080/jasmine/spec/feedreader.js:25:41)

	    it('are defined', function() {
	        expect(allFeeds).toBeDefined();
	        expect(allFeeds.length).not.toBe(0);
	    });

2. Return the `allFeeds` variable to a passing state.


3. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.


4. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
5. Write a new test suite named `"The menu"`.
6. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
7. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
8. Write a test suite named `"Initial Entries"`.
9. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
10. Write a test suite named `"New Feed Selection"`.
11. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
12. No test should be dependent on the results of another.
13. Callbacks should be used to ensure that feeds are loaded before they are tested.
14. Implement error handling for undefined variables and out-of-bound array access.
15. When complete - all of your tests should pass. 






<!-- ## Setup and Teardown

## To help a test suite DRY up any duplicated setup and teardown code, Jasmine provides the global beforeEach and afterEach functions. As the name implies, the beforeEach function is called once before each spec in the describe in which it is called, and the afterEach function is called once after each spec. Here is the same set of specs written a little differently. The variable under test is defined at the top-level scope -- the describe block -- and initialization code is moved into a beforeEach function. The afterEach function resets the variable before continuing. -->




