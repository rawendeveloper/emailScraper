let scrapeEmails = document.getElementById('scrapeEmails');
let list = document.getElementById('emailList');

// Handler to receive emails from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // Get emails 
    let emails = request.emails; 
    
    // Clear the list before displaying new results
    list.innerHTML = '';

    // Display emails on popup
    if (!emails || emails.length === 0) {
        // No emails found
        let li = document.createElement('li'); 
        li.innerText = "No emails found";
        list.appendChild(li);
    } else {
        // Display emails
        emails.forEach((email) => {
            let li = document.createElement('li'); 
            li.innerText = email;  // Corrected innerText to set the text of the list item
            list.appendChild(li);
        });
    }
});

// Button's click event listener
scrapeEmails.addEventListener("click", async () => {
    // Get current active tab of our window 
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // Execute script to parse emails on the page 
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: scrapeEmailsFromPage,
    });
});

// Function to scrape emails 
function scrapeEmailsFromPage() {
    // Regex expression to parse emails from the HTML file 
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    
    // Parse emails from HTML of the page
    let emails = document.body.innerHTML.match(emailRegex) || []; // Fallback to empty array if no matches
    
    // Send emails to the popup
    chrome.runtime.sendMessage({ emails });
}
