# Technical Explanation of Changes

1. Use window.location to establish the host website
2. Use an object to store the relationship betweeen each site and the necessary jQuery query necessary to find a specific DOM element
3. In each getElement (usernameField,etc), lookup the appropriate string needed to find a given element. For instagram's username input field, "input[name=username]" is appropriate query parameter.

# Next Steps: 

1. Modularize this important data store that maintains the list of search terms for the relevent username and password inputs to either background scripts or more likely an http request to UnifyID servers to protect this proprietary information
2. Create alternate sign-in procedures for logins that may contain an intermediate re-direct between entering username and password

# Narrative

Wow! That was pretty cool! That's my first time touching a chrome extension so just diagraming out the different file's methods for interacting with each other through chrome.runtime or chrome.tabs apis was pretty cool.

Obviously this implementation I was able to get done feels a little flimsy saying if a site were to change their HTML I have no catches in place try other ways of finding a given input should the #ID's change, but all the same it was fun to fool around with the login procedures for major sites I use daily. Powerful!

I'd be really pumped to learn more about how this scales into a robust production implementation!







The challenge is to be able to do the following actions in a given website:
 * Trigger form submit with a pair of credentials.
 * Find the form elements in the dom.
 * Obtain the values from the login elements in the dom.

# Load The Extension

1. Go to 'chrome://extensions' in your chrome browser.
2. In the upper right corner check 'Developer mode'
3. In the menu that appeared select 'Load unpacked extension...'
4. Select this folder.

In order to reload your changes:
1. Go to 'chrome://extensions' in your chrome browser.
2. Click 'Update extensions now', 'Ctrl+r', or 'Cmd+r'.


# The Challenge

In this folder there is a file called challenge.js with three functions that you will need to override.
Currently challenge.js has sample code that shows a proof of concept for https://facebook.com

You can test the functions by clicking the UnifyID icon in the top right corner of Google Chrome and select the function
to test from the menu.

Here is what is expected when selecting each option from the menu:
 * Detect Fields: This will call your function `detectFormFields` and put a border around the elements.
 * Login: This will call your function `loginWithCredentials` with fake credentials.
 * Get Form Values: This will alert the result from your function `obtainFieldsValues`

You can change the credentials for testing the Log In in the file ./dist/credentials.json

# Optional

In case that you need to preserve a global state across several pages you can use the background script (background.js)
that is in this folder.
More about background scripts: https://developer.chrome.com/extensions/background_pages
More about communication with the background script: https://developer.chrome.com/extensions/nativeMessaging
