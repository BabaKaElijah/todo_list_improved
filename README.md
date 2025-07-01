## 📝 To-Do List App
A simple and stylish To-Do List web application that lets you add, complete, and delete tasks — with your progress saved automatically using localStorage.

<!-- Replace with your actual screenshot path or GitHub image URL -->
## 📸 Demo
![App Screenshot](screenshot.PNG)


## 🚀 Features
✅ Add new tasks by clicking Add or pressing Enter

✏️ Check tasks off as complete (strike-through)

❌ Delete tasks using the “×” button

💾 Tasks are saved in your browser’s localStorage

🎨 Clean user interface with a purple gradient background

## 🔧 Technologies Used
- HTML

- CSS (with gradients and custom icons)

- JavaScript (DOM manipulation + localStorage)
  
## ✅ To-Do List App Logic (JavaScript)

This JavaScript code enables users to add, complete, and delete tasks in a to-do list. Tasks are saved using the browser’s `localStorage` to persist data even after refreshing the page.

```javascript
// Select DOM elements
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Add a task to the list
function addTask() {
  if (inputBox.value === '') {
    alert('You must write something'); // Prevent empty task entries
  } else {
    let li = document.createElement('li'); // Create a new <li> element
    li.innerHTML = inputBox.value; // Set the task text
    listContainer.appendChild(li); // Add the task to the list

    let span = document.createElement('span'); // Create a delete button
    span.innerHTML = '\u00d7'; // Unicode for multiplication sign (×)
    li.appendChild(span); // Add delete button to task
  }

  inputBox.value = ''; // Clear input field after adding
  saveData(); // Save updated list to local storage
}

// Allow user to press Enter key to add task
inputBox.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Toggle 'checked' class or remove task on click
listContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked'); // Mark task as done
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove(); // Delete task
  }
  saveData(); // Save changes after toggle/delete
}, false);

// Save the current list to local storage
function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

// Load saved tasks from local storage when page loads
function showTask() {
  listContainer.innerHTML = localStorage.getItem('data');
}

showTask(); // Initialize the list on page load
```

## 📁 Folder Structure
```
project-folder/
│
├── index.html             # Main HTML file
├── style.css              # CSS styling
├── script.js              # JavaScript logic
├── images/
│   ├── unchecked.png      # Icon for incomplete task
│   ├── checked.png        # Icon for completed task
│   └── todo_screenshot.png # Optional screenshot for README
```
✅ How to Use
1. Clone the repo or download the ZIP

2. Open index.html in your browser

3. Start typing a task in the input box

4. Hit Enter or click Add

5. Click a task to mark it as done

6. Click the × to delete it

## 💡 Ideas for Improvement
- Add a due date for each task

- Enable task editing

- Add filters: All / Active / Completed

- Sync with a backend or Firebase
 ## 👤 Author
 Ellias Sithole
