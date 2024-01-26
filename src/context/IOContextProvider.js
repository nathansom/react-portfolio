import React, { createContext, useReducer } from "react";

const ioReducer = (prevState, action) => {
  const { type, sectionId, intersectionRatio } = action;

  if (type === "set_current_section")
    return {
      ...prevState,
      currentSectionId: sectionId
    };

  if (type === "set_prev_intersect_ratio")
    return { ...prevState, prevIntersectRatio: intersectionRatio };

  return prevState
};

export const IOContext = createContext(null);

export const InViewSectionContext = createContext("");

export const IOContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ioReducer, {
      currentSectionId: "home",
      prevIntersectRatio: 0,
    }),
    { currentSectionId, prevIntersectRatio } = state,
    observer = new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        if (el.intersectionRatio > 0) {
          dispatch({
            type: "set_current_section",
            sectionId: el.target.id,
          });
        }

        dispatch({
          type: "set_prev_intersect_ratio",
          prevIntersectRatio: el.intersectionRatio,
        });
      });
    }, {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
});

  return (
    <IOContext.Provider value={observer}>
      <InViewSectionContext.Provider value={currentSectionId}>
        {children}
      </InViewSectionContext.Provider>
    </IOContext.Provider>
  );
};
