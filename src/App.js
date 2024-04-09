import logo from './logo.svg';
import './App.css';
import AddRecipie from './components/AddRecipie';
import SearchRecipe from './components/SearchRecipe';
import ViewRecipe from './components/ViewRecipe';

function App() {
  return (
    <div>
     <AddRecipie/>
     <SearchRecipe/>
     <ViewRecipe/>
    </div>
  );
}

export default App;
