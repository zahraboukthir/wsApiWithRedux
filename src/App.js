import "./App.css";

import {  useState } from "react";
import ListRecip from "./components/ListRecip";
import Search from "./components/Search";
import {Routes,Route} from 'react-router-dom'
import RecipeDetails from "./components/RecipeDetails";
import { useSelector } from 'react-redux';
import T from "./components/T";
function App() {
  // const [Rescip, setRescip] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [searchedvalue, setsearchedvalue] = useState("chicken");
  const handelsearch = (value) => {
    setsearchedvalue(value);
  };
  
  // useEffect(() => {
  //   const GetRecips = async () => {
  //     try {
  //       const Res =
  //         await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchedvalue}&app_id=01903511&app_key=586dab1ccb1f25cc9e26ddc82ac993d5%09
  //   `);
  //       // console.log(Res);
  //       setRescip(Res.data.hits);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(Error);
  //     }
  //   };
  //   GetRecips();
  // }, [searchedvalue]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ 
        <div>
          {" "}
          <Search handelsearch={handelsearch} searchedvalue={searchedvalue} />
          <ListRecip searchedvalue={searchedvalue}/>
        </div>
      }/>
        <Route path="/:id" element={<RecipeDetails/>}/>

      </Routes>
     
    </div>
  );
}

export default App;
