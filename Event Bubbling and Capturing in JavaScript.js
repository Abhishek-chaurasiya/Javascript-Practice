Event bubbling and capturing are two phases of event propagation in the DOM when an event occurs on a nested element.

1️⃣ Event Propagation Phases
When an event happens on an element inside a nested structure (e.g., a button inside a div), the event doesn't just fire on that element—it travels through the DOM in two main phases:

Capturing Phase (Event Capturing/Trickling)

The event travels from the root (document) down to the target element.
At this stage, event handlers on parent elements get a chance to capture the event before it reaches the target.
Bubbling Phase (Event Bubbling)

After reaching the target element, the event starts bubbling up from the target element back to the root.
This allows event handlers on ancestor elements to respond after the target element has handled the event.


2️⃣ Example: Understanding Bubbling & Capturing
Let's say we have this HTML:

html
Copy
Edit
<div id="parent">
  <button id="child">Click Me</button>
</div>
And this JavaScript:

js
Copy
Edit
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent Clicked");
}, false); // false → Default, event bubbles up

document.getElementById("child").addEventListener("click", () => {
  console.log("Child Clicked");
}, false);
🟢 Output (Default Bubbling) when clicking the button:
nginx
Copy
Edit
Child Clicked
Parent Clicked
The event first reaches #child (button).
Then, it bubbles up to #parent (div).


3️⃣ Capturing Phase (Trickling)
To use capturing instead of bubbling, we set the third argument of addEventListener to true:

js
Copy
Edit
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent Clicked");
}, true); // true → Capturing mode

document.getElementById("child").addEventListener("click", () => {
  console.log("Child Clicked");
}, true);

🟠 Output (Capturing) when clicking the button:


Parent Clicked
Child Clicked
The event starts at document and trickles down.
First, #parent's handler executes.
Then, #child's handler executes.


4️⃣ Stopping Event Propagation
Sometimes, you want to stop the event from propagating:

js
Copy
Edit
document.getElementById("child").addEventListener("click", (event) => {
  event.stopPropagation(); // Stops event from reaching parent
  console.log("Child Clicked");
}, false);


🛑 Output:
Child Clicked
The event never reaches the parent.
5️⃣ Real-World Use Cases
Event Delegation (Bubbling)
Instead of adding event listeners to many child elements, add one to the parent and use event.target:
js
Copy
Edit
document.getElementById("parent").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log("Button Clicked:", event.target.innerText);
  }
});
Capturing for Global Listeners
Useful for logging, analytics, or catching events before they reach specific elements.


6️⃣ Summary
Phase	Direction	Default?	When to Use?
Capturing (Trickling)	Top → Down	❌ (needs true)	When you need parents to handle events first
Bubbling	Bottom → Up	✅ (default)	When child elements should handle events before parents
stopPropagation()	Stops propagation	❌	Prevents event from moving up or down
🔹 Default behavior is Bubbling, but you can enable Capturing with true in addEventListener(). 🚀


