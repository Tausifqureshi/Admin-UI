// 1. Column titles must stand out from the entries.
// Jawab: Aapko column titles ko aise style dena hoga ki woh data se alag dikhein. Aap CSS mein bold, larger font size ya background color change karke yeh kar sakte hain.

// 2. There should be a search bar that can filter on any property.
// Jawab: Aapko ek search bar banana hoga jo kisi bhi property (column) par filter kar sake. Jab user kuch likhe, tab filter results dikhna chahiye.

// 3. You should be able to edit or delete rows in place. (There is no expectation of persistence. Edit and delete are expected to only happen in memory.)
// Jawab: Aapko har row ke liye edit aur delete buttons dene honge. Edit button pe click karne se woh row editable ho jaye, aur delete pe click karne se woh row memory se remove ho.

// 4. You need to implement pagination: Each page contains 10 rows. Buttons at the bottom allow you to jump to any page including special buttons for first page, previous page, next page, and last page. Pagination must update based on search/filtering. If there are 25 records for example that match a search query, then pagination buttons should only go till 3.
// Jawab: Pagination ka matlab hai ki 10 rows ek page pe dikhenge. Agar search ya filter ho raha hai, toh uske hisaab se pages aur buttons update honge. Example ke liye agar search mein 25 rows hain, toh 3 pages honge.

// 5. You should be able to select one or more rows. A selected row is highlighted with a grayish background color. Multiple selected rows can be deleted at once using the 'Delete Selected' button at the bottom left.
// Jawab: Har row ke saath checkbox dena hoga. Jab user ek ya zyada rows select kare, toh unka background color change ho jaye. Fir "Delete Selected" button se multiple rows ek saath delete ki ja sakti hain.

// 6. Checkbox on the top left is a shortcut to select or deselect all displayed rows. This should only apply to the ten rows displayed in the current page, and not all 50 rows.
// Jawab: Top left checkbox ko all rows ko select ya deselect karne ke liye use kiya jayega, lekin yeh sirf current page ke rows pe apply hoga, puri list pe nahi.

// Instructions to Pass Automated Correctness Check:
// Search box placeholder text should start with Search. Jawab: Search box ka placeholder text "Search" se shuru hona chahiye, jaise "Search users" ya "Search by name".

// Search icon/button should have class as search-icon OR trigger search on ENTER. Jawab: Aapko search icon ko "search-icon" class deni hogi, ya phir enter press karne par search trigger ho.

// Action element must be a button with a specific class name like edit, delete, save. Jawab: Action buttons ko "edit", "delete", ya "save" jaise specific class names deni chahiye.

// Navigation elements must be a div/button, and should have class name as first-page, previous-page, next-page, and last-page and page numbers should be mentioned accordingly. Jawab: Pagination buttons ko "first-page", "previous-page", "next-page", "last-page" jaise class names deni chahiye. Aur pages ki numbers bhi dikhne chahiye.

// On clicking edit action in a row, it should be editable in the row itself. Jawab: Jab user edit button pe click kare, tab woh row edit mode mein chala jaye, aur user changes kar sake.

// Bottom delete button must have text Delete Selected. Jawab: Bottom pe "Delete Selected" button hona chahiye jo selected rows ko delete kare.

// Avoid using libraries like material UI and bootstrap for basic html components like buttons, checkboxes, textbox etc. Jawab: Aapko basic HTML components (buttons, checkboxes, textboxes) ke liye kisi external library ka use nahi karna.

// We execute your application and run it on a specific port. This helps us in running automated tests against the UI you have developed. Hence please do not force the application to run on any specific ports in your configuration/package manager file. Please ensure that you are not overriding the PORT environment variable in your configuration/package manager file. Jawab: Aapko apne application ko specific port pe run karna hoga jo aapke configuration mein override nahi hona chahiye.

// On executing, your application should be running successfully on http://<hostname>:<port>. For e.g if the hostname of your local system is dev.local and the port you are running is 3030, then your application should be accessible at http://dev.local:3030/ and not just at http://localhost:3030/. Jawab: Application ko proper hostname aur port pe run karwana hoga, jise access karte waqt "localhost" ki jagah hostname dikhai de.

// Users API:
// Request Type: GET
// Endpoint: https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json

// Jawab: Yeh API aapko users ke data ko fetch karne ke liye milegi. Aap is data ko use kar ke table fill kar sakte hain.