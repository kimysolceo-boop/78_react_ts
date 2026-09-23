// Lessons imports
// import Lesson05 from "./lessons/Lesson05/Lesson05";
// import Lesson06 from "./lessons/Lesson06/Lesson06";
// import Lesson07 from "./lessons/Lesson07/Lesson07";
// Homeworks imports
import Homework06 from "./homeworks/Homework06/Homework06";

function App() {
  return (
    // <></> - fragmet. Он позволяет задать обертку (выступает в качестве родителя), чтобы
    // не было ошибок если у нас есть несколько соседних элементов, но на самой странице никакой
    // новый элемент добавлен не будет
    <>
      {/* Lesson05. TypeScript */}
      {/* <Lesson05 /> */}
      {/* Lesson06. Component typing */}
      {/* <Lesson06/> */}
      {/* Lesson07. Styling components */}
      {/* <Lesson07/> */}
      {/* Homework06. Animal cards */}
      <Homework06 /> 
    </>
  );
}
export default App;