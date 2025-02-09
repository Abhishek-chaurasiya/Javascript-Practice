Debouncing is a technique used to limit the rate at which a function is executed. It ensures that a function is only called after a specified delay has passed since the last time it was invoked.
This is useful for optimizing performance in cases like:

Typing in a search bar (API should be called only after typing stops).
Resize events (Firing function only after resizing is complete).
Button clicks (Preventing multiple clicks from triggering multiple requests).


How Debouncing Works?
If the function is called multiple times, it clears the previous timer.
Only when no calls are made for d milliseconds, the function executes.
Uses setTimeout() to delay function execution.
clearTimeout(timer) ensures previous calls are ignored.

Time-Based Execution
Time (ms)	Action	What Happens?
0ms	betterFunction() is called	A timer (T1) for 300ms is set.
250ms	betterFunction() is called again	T1 is cleared and a new timer (T2) for 300ms is set.
300ms	(T1 would have executed, but was cleared)	Nothing happens because T1 was canceled at 250ms.
400ms	betterFunction() is called again	T2 is cleared, new timer (T3) for 300ms is set.
650ms	(T3 would have executed, but was cleared)	Nothing happens because T3 was canceled.
700ms	betterFunction() is called again	T3 is cleared, new timer (T4) for 300ms is set.
1000ms	No new calls	T4 completes, and getData() executes. ("Fetching data..." is logged.)


Time(ms) →    0ms    250ms   300ms   400ms   650ms   700ms   1000ms  
Calls      →    🔵       🔵        ❌       🔵       ❌       🔵       ✅ 
Execution →                          ❌                         ✅ (getData runs)


🔵 = Function betterFunction() is called.
❌ = Previous timer was cleared, so nothing happens.
✅ = After 300ms without a new call, getData() executes.

Key Observations
If calls happen before 300ms delay is over, the timer resets and getData() never executes.
Only when 300ms pass without a call, getData() is executed.
This ensures that frequent calls (e.g., rapid keystrokes in a search bar) do not trigger multiple API calls.

