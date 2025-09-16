**Chartink Symbol Copier**
**Description**
This Chrome extension adds a "Copy Symbols" button to the Chartink website's backtest results page. It allows users to quickly copy all the stock symbols from the backtest table as a single, comma-separated string, saving time on manual data extraction.

**Chartink Symbol Copier**
**Description**
This Chrome extension adds a "Copy Symbols" button to the Chartink website's backtest results page. It allows users to quickly copy all the stock symbols from the backtest table as a single, comma-separated string, saving time on manual data extraction.

**Features**
One-Click Copy: Copies all symbols to the clipboard with a single click.

Saves Time: Automates the tedious task of manually copying symbols.

User-Friendly: Displays an alert confirming the number of symbols copied.

Event-Driven: Dynamically adds the button once the backtest results table is loaded on the page.

**For Developers: How to Use**
To install and test this extension locally, you need to use Chrome's developer mode.

**Clone or Download the Code:**

Ensure you have manifest.json and content.js in a single folder.

Enable Developer Mode in Chrome:

Open your Chrome browser.

Navigate to the extensions page by typing chrome://extensions in the address bar.

In the top-right corner, turn on the Developer mode toggle switch.

Load the Extension:

Click on the "Load unpacked" button that appears.

Select the folder containing your manifest.json and content.js files.

Test the Extension:

The "Chartink Symbol Copier" extension should now appear on your extensions list.

Go to any backtest results page on Chartink.com.

The "Copy Symbols" button should automatically appear next to the "Back to all backtest results" text.

Click on a backtest result chart to load the table of symbols, and then click the new button to copy the symbols.

**Code Structure**
manifest.json: This file defines the extension's properties, permissions (clipboardWrite), and which web pages it will run on (*://*.chartink.com/*).

content.js: This is the main script that runs on the Chartink website. It is responsible for:

Creating and styling the "Copy Symbols" button.

Adding an event listener to the button to handle the copying logic.

Using a MutationObserver to watch for the presence of the backtest results table and the "Back to all backtest results" text, ensuring the button is added only when the page elements are ready.
