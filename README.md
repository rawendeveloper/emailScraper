
Email Scraper Chrome Extension
Overview
The Email Scraper is a Chrome extension that allows users to scrape email addresses from any web page with a single click. This extension is designed to quickly extract visible email addresses from the HTML content of a page and display them in an easy-to-read format.

Features
Extracts email addresses from the current web page.
Displays the scraped emails in the extension popup.
Simple and intuitive user interface.
Works across all websites and pages.
Secure email extraction without data collection.
Installation
Clone the repository:

Open Chrome Extension Management:

Navigate to chrome://extensions/ in your Chrome browser.
Enable Developer mode in the top right corner.
Load Unpacked Extension:

Click on Load unpacked and select the folder where you cloned the repository.
Run the Extension:

You should see the Email Scraper icon in your Chrome toolbar.
Click on the icon to open the popup and scrape emails from the current tab.
How It Works
Click Event: When you click the "Scrape Emails" button, the extension extracts email addresses from the HTML content of the active tab using a regular expression.
Popup Display: The scraped emails are displayed in the extension's popup window, or a message appears if no emails are found.
Files and Structure
manifest.json: Defines the configuration and permissions for the extension.
popup.html: The HTML file for the popup window interface.
styles.css: Contains the styling for the popup UI.
popup.js: JavaScript file that handles button interactions and displays the scraped emails.
script.js: The content script responsible for running on the web page and parsing emails.
Permissions
The extension requests the following permissions:

<all_urls>: This allows the extension to run on any website.
scripting: Needed to execute scripts in the context of the web page to extract emails.
Usage
Open any website in your Chrome browser.
Click the Email Scraper icon in the toolbar.
Press the "Scrape Emails" button to extract emails from the current page.
View the list of extracted emails or a message indicating no emails were found.
Contribution
Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please ensure all new code follows best practices and includes appropriate documentation.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contact
If you have any questions, suggestions, or issues, feel free to open an issue on the GitHub repository or contact me directly at rawen.ayedi.dev@gmail.com.
