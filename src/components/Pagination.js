import React from "react";
import { LeftArrow, RightArrow } from "./ArrowSvg";


const Pagination = (props) => {
    const { onLeftClick, onRightClick, page, totalPages } = props;
    return (
        <>
            <div className="pagination">
                <button onClick={onLeftClick}>
                    <LeftArrow />
                </button>
                <div className="pag-number">
                    {page}-{totalPages}
                </div>
                <button onClick={onRightClick}>
                    <RightArrow />
                </button>
            </div>
        </>
    );
};

export default Pagination;
