import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store/store";
import { changeTitle } from "../../redux/slice/titleScreenSlice";
const TemplateMainScreen = () => {
    const dispatch: AppDispatch = useDispatch();
    const stringValue = useSelector((state: RootState) => state.counter.value);

    useEffect(()=>{
        dispatch(changeTitle('AszDevaaa'));
    })
    return (
        <div className="template-mainScreen">
        <h1>{stringValue}</h1>
        </div>
    );
};

export default TemplateMainScreen;
