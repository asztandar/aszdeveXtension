import { ReactNode } from "react";

type GridContainerProps = {
  children: ReactNode;
};
const GridContainer = ({ children }:GridContainerProps) => {
    return (
        <div className="GridContainer">{children}</div>
    );
}
export default GridContainer;
