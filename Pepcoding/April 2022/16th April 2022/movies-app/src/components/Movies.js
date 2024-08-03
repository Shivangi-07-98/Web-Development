import React from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable'
import Pagination from './Pagination'
import { useEffect } from 'react'

function Movies(props) {
  let { cPage, setcPage } = props;

  let [searchText, setSearchText] = React.useState("");
  let [NumberOfItems, setNumberOfItems] = React.useState(4);
  const [content, setContent] = React.useState([]);
  const [isLoaded, setLoaded] = React.useState(true);

  useEffect(function () {
    (async function () {
    let response = await fetch('/movies.json');
    response = await response.json();
    console.log(response);
    setLoaded(false);
    setContent(response);
    })();
  }, []);

  const setGlobalSearchText = (searchText) => {
    setSearchText(searchText);
    setcPage(1);
  }

  const setGlobalNumberOfItems = (NumberOfItems) => {
    setNumberOfItems(NumberOfItems);
    setcPage(1);
  }

  let filteredContent;
  let totalpagesWaliMovies;
  if(content.movies){
    filteredContent = content.movies;

    if(searchText != "") {
      filteredContent = content.movies.filter((movie) => {
       let lowerCaseTitle = movie.title.toLowerCase();
       let lowercaseSearchText = searchText.toLowerCase();
       return lowerCaseTitle.includes(lowercaseSearchText);
      });
   }

    if(props.cGenre != ""){
      filteredContent = filteredContent.filter(
        function(movie){
          return movie.genre.trim() == props.cGenre.trim();
        })
      }

      totalpagesWaliMovies = filteredContent;
      // **************number of elems logic(Pagination)*********** 
      let sidx = (cPage - 1) * NumberOfItems;
      let eidx = sidx + NumberOfItems;
      filteredContent = filteredContent.slice(sidx, eidx);
    }
  

  return (
    <div>
      
      <InputBox setGlobalSearchText={setGlobalSearchText} setGlobalNumberOfItems={setGlobalNumberOfItems}></InputBox>
      <MoviesTable searchText={searchText} filteredContent={filteredContent} cGenre={props.cGenre} content={content} isLoaded={isLoaded} setContent={setContent} cPage={cPage}></MoviesTable>
      <Pagination NumberOfItems={NumberOfItems} totalpagesWaliMovies={totalpagesWaliMovies} cPage={cPage} setcPage={setcPage}></Pagination>
      
    </div>
  )
}

export default Movies