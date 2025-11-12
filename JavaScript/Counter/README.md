# Counter

- Difference between HTML Collection and NodeList.
  - You can directly attach `addEventListener()` to Nodelist.
  - You can't directly attach `addEventListener()` to HTML Collection so you need to loop through the collection and add for each item.
- Taking input value. Input value always be in string.
  - Convert into number using `parseInt()`.
- `input` event — it fires whenever the value changes (whether by typing, using arrows, or pasting). It also captures empty string.
- `change` event — it fires only when the user finishes editing (like after pressing Enter or leaving the field), and gives you the final actual value, not while it’s empty or mid-edit.
- `isNaN()`: Not a Number
    - `true`: If value cannot be convrted to number
    - `false`: If value can be converted to number