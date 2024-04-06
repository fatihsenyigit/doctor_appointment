# Doctor Appointment App

# Packages used
- bootstrap and react-boostrap => https://react-bootstrap.netlify.app/
- react-icons => https://react-icons.github.io/react-icons/ 


# Lifting State Up

- lifting state up => https://legacy.reactjs.org/docs/lifting-state-up.html

#### React Lifting State Up Nedir? What is React Lifting State Up ?

- React Lifting State Up is the process of moving the state shared by more than one component to the nearest common ancestor component. This helps manage state across components in a consistent and organized manner.

- React Lifting State Up, birden fazla component tarafından paylaşılan state'i, en yakın ortak ancestor component'e taşıma işlemidir. Bu, component'ler arasında state'i tutarlı ve organize bir şekilde yönetmeye yardımcı olur.

#### Neden Kullanılır? Why did I use it?

- Birden fazla component tarafından aynı state'in kullanılması gerektiğinde
- State'in birden fazla component tarafından güncellenmesi gerektiğinde
- Component'leri daha bağımsız ve tekrar kullanılabilir hale getirmek için

- When the same state needs to be used by more than one component
- When State needs to be updated by more than one component
- To make components more independent and reusable



**Kullanırken tabiki de dikkatli olmak gerekir. Stateleri yukarı taşımanın renderları artıracağını unutmamalıyız.**

**Be careful when using it. We must remember that moving states up will increase renderings.**


# Crypto: randomUUID() method

- https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID

# serve
- https://www.npmjs.com/package/serve
- build klasörünü görüntülemeye yarayan paket.
- A package to view the build folder