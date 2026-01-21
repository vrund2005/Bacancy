### Topics Covered

- **Array Methods**
  - **`.map()`**
    - Transforms each item of an array.
    - Returns a *new array*.
    - Great for rendering lists in React/UI.
    - 💡 *Best Practice:* Use `.map()` instead of `for` loops for rendering output in frontend.
    - Especially useful for passing `key` props in React lists.

  - **`.filter()`**
    - Creates a new array with items that pass a test.
    - Does not modify the original array.

  - **`.reduce()`**
    - Executes a reducer function on each element.
    - Accumulates a single value (e.g., sum, concatenation, object grouping).

- **Spread Operator (`...`)**
  - Used to clone, merge arrays/objects.
  - Prevents mutation of original data structures.
  - Example:
    ```js
    const newArr = [...oldArr];
    const newObj = {...oldObj};
    ```

- **`this` Keyword**
  - Refers to the object that *calls* the function.
  - In regular functions, `this` depends on how the function is invoked.
  - **Important:** *Never use arrow functions when you need to use `this`*, because arrow functions bind `this` lexically (to the surrounding scope), not dynamically.

---

## 📌 Important Points to Remember

✔ Always use **`.map()`** for rendering lists and passing keys in React / frontend projects —  
   it’s more readable & avoids index mutation issues.

✔ Avoid using **arrow functions with `this`** when you expect `this` to refer to the calling object.

✔ Use `.filter()` and `.reduce()` to manipulate data without loops — more declarative and easier to reason about.

✔ Use the **spread operator (`...`)** to copy/merge arrays and objects safely.

---

## 🔁 Practice & Interview Preparation

Here are some sites you can use to **practice questions and prepare for frontend interviews**:

- **Soni Frontend Material** – curated frontend projects & problem explanations  
- **LearnersBucket** – programming concept explanations + practice problems
