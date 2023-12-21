// import React, { createContext, useContext , useState } from 'react';

// // Define your context
// interface MyContextProps {
//   value: string;
//   setValue: React.Dispatch<React.SetStateAction<string>>;
// }

// const MyContext = createContext<MyContextProps | undefined>(undefined);

// // Create a custom hook to simplify using the context
// export const useMyContext = () => {
//   const context = useContext(MyContext);
//   if (!context) {
//     throw new Error('useMyContext must be used within a MyContextProvider');
//   }
//   return context;
// };

// // Create a provider component
// export const MyContextProvider= ({children}:{
//   children:React.ReactNode
// }) => {
//   // Provide some default values or use state/logic as needed
//   const [value, setValue] = React.useState<string>('Default Value');

//   return (
//     <MyContext.Provider value={{ value, setValue }}>
//       {/* Render your components that need access to the context */}
//       {children}
//     </MyContext.Provider>
//   );
// };
