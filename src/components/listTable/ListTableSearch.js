import React from "react";
import PropTypes from "prop-types";

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
    let normalizeSearchUser = normalizeText(inputValue);
    let regexWord = /([0-9a-z]{1,} ?)/g;
    let arraySearchWords = normalizeSearchUser.match(regexWord);

    if (arraySearchWords && inputValue.length >= 2) {
      let arraySearchWordsFormatted = arraySearchWords.map((item) =>
        item.trim()
      );
      props.setTablePage(0);
      props.actionSearchFilter(
        props.dispatch,
        arraySearchWordsFormatted,
        props.dataNotFiltered
      );
    } else {
      props.setTablePage(0);
      props.actionSearchFilter(props.dispatch, [""], props.dataNotFiltered);
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

ListTableSearch.propTypes = {
  dataNotFiltered: PropTypes.array,
  setTablePage: PropTypes.func,
  actionSearchFilter: PropTypes.func,
  dispatch: PropTypes.func,
};

export default ListTableSearch;
