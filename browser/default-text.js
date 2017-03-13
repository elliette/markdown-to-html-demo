const defaultText =  "# Markdown to HTML Converter\nThis note demonstrates all the functionality of the **Markdown to HTML Converter** available on npm.\n*Note: Feel free to edit this note, or even to click **clear** and start making your own note!*\n **You can click the `Raw HTML` button at the bottom of this page to view this note as raw HTML!** \n## Images\nFirst and foremost, Markdown can  contain images. \n![Here is a picture of a very cute puppy:](../public/puppy-image-example.jpg 'puppy photo') \n## Basic formatting\nParagraphs can be written like so. A paragraph is the basic block of Markdown. A paragraph is what text will turn into when there is no reason it should become anything else.\nParagraphs must be separated by a blank line. Basic formatting of *italics* and **bold** is supported. This *can be **nested** like* so.\n## Lists\n### Ordered list\n1. Item 1\n2. A second item\n3. Number 3\n4. Ⅳ\n### Unordered list\n* An item\n* Another item\n* Yet another item\n* And there's more...\n## Paragraph modifiers\n### Code block\n```\nCode blocks are very useful for developers and other people who look at code or other things that are written in plain text. As you can see, it uses a fixed-width font.\n```\nYou can also make `inline code` to add code into other things.\n### Quote\n> Here is a quote. What this is should be self explanatory. Quotes are automatically indented when they are used.\n## Headings\nThere are six levels of headings. They correspond with the six levels of HTML headings. You've probably noticed them already in the page. Each level down uses one more hash character.\n### Headings *can* also contain **formatting**\n### They can even contain `inline code`\nOf course, demonstrating what headings look like messes up the structure of the page.\nI don't recommend using more than three or four levels of headings here, because, when you're smallest heading isn't too small, and you're largest heading isn't too big, and you want each size up to look noticeably larger and more important, there there are only so many sizes that you can use.\n## URLs\nURLs can be made like so: [Markdown To HTML Converter on Github](http://www.markitdown.net/)\n## Horizontal rule\nA horizontal rule is a line that goes across the middle of the page.\n---\nIt's sometimes handy for breaking things up."; 

export default defaultText; 
