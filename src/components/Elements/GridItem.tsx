import { ReactNode } from "react";

type GridItemProps = {
  children: ReactNode;
  onclick?: () => void
};
const GridItem = ({children, onclick}:GridItemProps) => {
  return (
    <div onClick={onclick} className="GridItem">
        <div className="child">{children}</div>
    </div>
  )
}

export default GridItem;