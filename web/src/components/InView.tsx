import React, { FunctionComponent, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import cc from "classcat";
import Tag from "./Tag";
import { HtmlElementWithAttributes } from "../interfaces";

/**
 * Usage:
 *
 * <InView
 *   className="Card"
 *   activeClassName="Card--is-visible"
 *   onInView={props => console.log(props.inView ? `I'm in view` : `I'm not in view`)}
 *   element="span"
 * >
 *   // Add children
 * </InView>
 *
 * Other resources
 * 📚Package: https://www.npmjs.com/package/react-intersection-observer
 * 🎥 With react-spring:  https://github.com/thebuilder/react-intersection-observer/blob/HEAD/docs/Recipes.md#trigger-animations
 */

const InView: FunctionComponent<IProps> = ({
  children,
  className = "",
  activeClassName = "",
  threshold = 0.25,
  onInView,
  element = "div"
}) => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold,
    triggerOnce: true
  });

  useEffect(() => {
    if (onInView && typeof onInView === "function") {
      onInView({ inView, ref, entry });
    }
  }, [onInView, inView, ref, entry]);

  const Wrapper = element;

  return (
    <Wrapper
      element={element}
      ref={ref}
      className={cc({
        [className]: className,
        [activeClassName]: inView
      })}
    >
      {children}
    </Wrapper>
  );
};

export default InView;

interface IProps {
  className: string;
  activeClassName: string;
  threshold?: number;
  onInView?: (ev: any) => void;
  element: HtmlElementWithAttributes["element"];
  ref: HtmlElementWithAttributes["ref"];
}
