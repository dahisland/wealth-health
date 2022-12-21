import React, { useContext } from "react";
import { tableListContext } from "./ListTableContext";

const ListTableSearch = () => {
  const { actionOnSearchActive } = useContext(tableListContext);
  const { actionOnSearchInactive } = useContext(tableListContext);
  const { numberSearchOnActive } = useContext(tableListContext);
  const { setTablePage } = useContext(tableListContext);

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
    let normalizeSearchUser = normalizeText(inputValue);
    let regexWord = /([0-9a-z]{1,} ?)/g;
    let arraySearchWords = normalizeSearchUser.match(regexWord);

    if (arraySearchWords && inputValue.length >= numberSearchOnActive) {
      let arraySearchWordsFormatted = arraySearchWords.map((item) =>
        item.trim()
      );
      setTablePage(0);
      actionOnSearchActive(arraySearchWordsFormatted);
    } else {
      setTablePage(0);
      actionOnSearchInactive();
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
