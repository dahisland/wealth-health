import React, { useContext } from "react";
import { tableListContext } from "./ListTableContext";

const ListTableHeader = () => {
  const { tableHeadLabels } = useContext(tableListContext);
  const { tableHeadLabelLeftIcon } = useContext(tableListContext);
  const { tableHeadLabelRightIcon } = useContext(tableListContext);
  const { actionHeadLabelLeftIcon } = useContext(tableListContext);
  const { actionHeadLabelRightIcon } = useContext(tableListContext);

  return (
    <div className="listTable-headRow">
      {tableHeadLabels.map((item, index) => (
        <p key={"table-head-" + index} className={"headRow-data"}>
          {tableHeadLabelLeftIcon ? (
            <span
              className="headRow-iconsSort"
              onClick={() => actionHeadLabelLeftIcon(item)}
            >
              {tableHeadLabelLeftIcon}
            </span>
          ) : null}

          <span>{item.label}</span>
          {tableHeadLabelLeftIcon ? (
            <span
              className="headRow-iconsSort"
              onClick={() => actionHeadLabelRightIcon(item)}
            >
              {tableHeadLabelRightIcon}
            </span>
          ) : null}
        </p>
      ))}
    </div>
  );
};

export default ListTableHeader;
