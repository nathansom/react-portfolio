import { useContext, useEffect } from "react";

import { IOContext } from "../context/IOContextProvider";

export const Testimonials = ({ data }: any) => {
  const testimonials = data?.testimonials?.map((testimonials: Record<string, string>) => {
      return (
        <li key={testimonials.user}>
          <blockquote>
            <p>{testimonials.text}</p>
            <cite>{testimonials.user}</cite>
          </blockquote>
        </li>
      );
    }),
    observer = useContext(IOContext);

  useEffect(() => {
    const section = document.getElementById("testimonials");
    if (observer && section)
      (observer as IntersectionObserver).observe(section);
  }, []);

  return (
    <section id="testimonials">
      <div className="divider-top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#2B2B2B"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            d="M500,2l500,78l0,20l-1000,0l0,-20l500,-78Z"
            className="opacity-04"
          ></path>
          <path d="M500,2l500,98l-1000,0l500,-98Z"></path>
        </svg>
      </div>
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            {testimonials ? (
              <ul className="slides">{testimonials}</ul>
            ) : (
              "No testimonials available at the moe=ment."
            )}
          </div>
        </div>
      </div>
      <div className="decor-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          width="133.25pt"
          height="139.571pt"
        >
          <ellipse
            className="animate-pulse animate-delay1"
            vectorEffect="non-scaling-stroke"
            cx="505.5"
            cy="318.49999999999994"
            rx="19.5"
            ry="20.5"
            fill="none"
            strokeWidth="10"
            stroke="rgb(0,0,0)"
            strokeLinejoin="miter"
            strokeLinecap="square"
            strokeMiterlimit="3"
          />
          <ellipse
            className="animate-pulse animate-delay1-5"
            vectorEffect="non-scaling-stroke"
            cx="505.5"
            cy="318.49999999999994"
            rx="43.89062500000003"
            ry="46.14142628205133"
            fill="none"
            strokeWidth="10"
            stroke="rgb(0,0,0)"
            strokeLinejoin="miter"
            strokeLinecap="square"
            strokeMiterlimit="3"
          />
          <ellipse
            className="animate-pulse animate-delay2"
            vectorEffect="non-scaling-stroke"
            cx="505.5"
            cy="318.49999999999994"
            rx="61.625"
            ry="64.78525641025635"
            fill="none"
            strokeWidth="10"
            stroke="rgb(0,0,0)"
            strokeLinejoin="miter"
            strokeLinecap="square"
            strokeMiterlimit="3"
          />
        </svg>
      </div>
      <div className="decor-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          width="133.25pt"
          height="139.571pt"
        >
          <ellipse
            className="animate-pulse animate-delay1"
            vectorEffect="non-scaling-stroke"
            cx="505.5"
            cy="318.49999999999994"
            rx="19.5"
            ry="20.5"
            fill="none"
            strokeWidth="10"
            stroke="rgb(0,0,0)"
            strokeLinejoin="miter"
            strokeLinecap="square"
            strokeMiterlimit="3"
          />
          <ellipse
            className="animate-pulse animate-delay1-5"
            vectorEffect="non-scaling-stroke"
            cx="505.5"
            cy="318.49999999999994"
            rx="43.89062500000003"
            ry="46.14142628205133"
            fill="none"
            strokeWidth="10"
            stroke="rgb(0,0,0)"
            strokeLinejoin="miter"
            strokeLinecap="square"
            strokeMiterlimit="3"
          />
          <ellipse
            className="animate-pulse animate-delay2"
            vectorEffect="non-scaling-stroke"
            cx="505.5"
            cy="318.49999999999994"
            rx="61.625"
            ry="64.78525641025635"
            fill="none"
            strokeWidth="10"
            stroke="rgb(0,0,0)"
            strokeLinejoin="miter"
            strokeLinecap="square"
            strokeMiterlimit="3"
          />
        </svg>
      </div>
      <div className="divider-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#2B2B2B"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            d="M500,2l500,78l0,20l-1000,0l0,-20l500,-78Z"
            className="opacity-04"
          ></path>
          <path d="M500,2l500,98l-1000,0l500,-98Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
