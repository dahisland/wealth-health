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
    if (inputValue.length >= 2) {
      const arraySearchWords = normalizeText(inputValue)
        .trim()
        .match(/([0-9a-z]{1,} ?)/g);

      //callback function
      const filterRecipes = (obj) => {
        const itemFormatted = new modelNewEmployeeData(obj);
        const itemContent = Object.values(itemFormatted.formatForSearch());
        const itemContentFormatted = normalizeText(itemContent.toString());
        const testEachSearchWord = (item) => {
          return itemContentFormatted.match(item);
        };
        return arraySearchWords.every(testEachSearchWord);
      };
      let arrayFiltered = props.dataList.filter(filterRecipes);
      props.setDataFiltered(arrayFiltered);
      props.setTablePage(0);
    } else {
      props.setTablePage(0);
      props.setDataFiltered(props.dataList);
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
