// import { useState } from 'react'

// export function useInputCount(initial: number, dec: number, inc: number) {
//     const [count, setCount] = useState<number>(initial)

//     function go() {
//       const inputelement = document.activeElement as HTMLInputElement;  // Required type assertion
//       if (inputelement.checked) {  // for this. .checked method only exists on type HTMLInputElement
//         setCount(count + inc);
//       } else {
//         setCount(count - dec);
//       };
//     };

//     return [count as number, go as Function];
//   };