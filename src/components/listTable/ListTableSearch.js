import React from "react";
import { modelNewEmployeeData } from "../../data/modelNewEmployeeData";

const ListTableSearch = (props) => {
  function normalizeText(txt) {
    let normalizedText = txt
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[:',.()!?;"/]/g, " ")
      .replace(/[\s]{2,}/g, " ")
      .toLowerCase();
    return normalizedText;
  }

  function filterDataBySearch(e) {
    const inputValue = e.target.value;
    if (inputValue.length >= 1) {
      let normalizeSearchUser = normalizeText(inputValue).trim();
      const arrayInputSearchBar =
        normalizeSearchUser.match(/([0-9a-z]{1,} ?)/g);
      props.setSearchData(arrayInputSearchBar);
      console.log(props.searchData);
      //callback function
      const filterRecipes = (obj) => {
        const itemFormatted = new modelNewEmployeeData(obj);
        const itemContent = Object.values(itemFormatted.formatForSearch());
        const itemContentFormatted = normalizeText(itemContent.toString());
        const testEachSearchWord = (item) => {
          console.log(itemContentFormatted);
          console.log(item);
          return itemContentFormatted.match(item);
        };
        return props.searchData.every(testEachSearchWord);
      };
      let arrayFiltered = props.dataList.filter(filterRecipes);
      props.setResultSearch(arrayFiltered);
      props.setIsOnSearch(true);
      props.setTablePage(0);
    } else {
      props.setIsOnSearch(false);
      props.setTablePage(0);
      props.setResultSearch([]);
    }
  }
  return (
    <div className="listTable-search">
      <input
        type="search"
        onInput={(e) => filterDataBySearch(e)}
        placeholder="Search (min 2 characters)"
      />
    </div>
  );
};

export default ListTableSearch;
