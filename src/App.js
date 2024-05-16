import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import TodoItem from "./MyComponents/TodoItem";


///123333
function App() {
  let todos = [
    {
      sno:1,
      title:"Go to the market",
      desc: "You need to go the market to get this job done  "

    },
    {
      sno:2,
      title:"Go to the mall",
      desc: "You need to go the market to get this job done2  "

    },
    {
      sno:3,
      title:"Go to the ghat",
      desc: "You need to go the market to get this job done 3 "

    }
  ]
  return (
  
    <>
    <Header  title="My Todos List" searchBar={true}/>
    <Todos todos={todos} />
    <Footer />
    <TodoItem/>

    </>
  );
}

export default App;
