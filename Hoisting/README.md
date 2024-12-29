# Understanding Hoisting in JavaScript 

## What is Hoisting?  
**Hoisting** is a behavior in JavaScript where variables, functions, and classes are conceptually "moved" to the top of their scope during the compilation phase. This allows you to use these entities before their actual declarations in the code.  

However, **hoisting does not physically move the code**. It’s an abstraction that illustrates how JavaScript's execution context and memory allocation work during the creation phase.  

---

## How Hoisting Relates to JavaScript's Execution Model  
JavaScript is a **single-threaded language**, meaning all code executes **synchronously**, line by line, in a single call stack. If we want to perform asynchronous operations, we use methods such as `setTimeout`, `Promises`, or `async/await`.  

When JavaScript runs, it processes code in two phases:  
1. **Creation Phase**:  
   - The interpreter scans the code and allocates memory for variables, functions, and classes.  
   - `var` is initialized with `undefined`, while `let` and `const` remain in the **Temporal Dead Zone (TDZ)**.  

2. **Execution Phase**:  
   - The code executes line by line, assigning values to variables and invoking functions.  

---

## Types of Hoisting  

### 1. Variable Hoisting  
- **`let` and `const`**:  
  Variables declared with `let` and `const` are hoisted but not initialized. They remain in the **Temporal Dead Zone (TDZ)** until their declaration is encountered. Accessing them before declaration results in a `ReferenceError`.  

- **`var`**:  
  Variables declared with `var` are hoisted and initialized with `undefined`. Unlike `let` and `const`, `var` does not go into the TDZ.  

### 1. Function Hoisting  
- **`Function Decleration`**:  
  `Function declaration` are fully hoisted, meaning their name and body are available throughout the Scope.  

- **`Function Expression`**:  
  `Function expressions` (e.g., const foo = function() {}) and arrow functions are hoisted differently, as they behave like variables.


### 1. Class Hoisting  
    class decleration are hoisted but reamin in TDZ, like let and const.

#### What is the Temporal Dead Zone (TDZ)?  
The **TDZ** is the period between the hoisting of a variable and its initialization. During this period, accessing the variable will throw a `ReferenceError`.  
```javascript  
console.log(x); // ReferenceError  
let x = 10; // TDZ ends here  
console.log(x); // 10  


