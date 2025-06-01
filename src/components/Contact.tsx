"use client";

import Script from "next/script";
import { FormEvent, useRef, useState } from "react";

export const Contact = ({ data }: any) => {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [subject, setSubject] = useState(""),
    [message, setMessage] = useState(""),
    [submissionErrorMsg, setSubmissionErrorMsg] = useState(""),
    [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false),
    contactMessage = data?.contactmessage || "",
    formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          formData as unknown as Record<string, string>
        ).toString(),
      });

      setIsSubmissionSuccessful(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (e: unknown) {
      const errorMsg =
        typeof e === "object" &&
        e &&
        "message" in e &&
        typeof e.message === "string"
          ? e.message
          : typeof e === "object"
          ? JSON.stringify(e)
          : "Unknown error has occured";

      setSubmissionErrorMsg(errorMsg);
    }
  }

  return (
    <>
      <section id="contact">
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
        <div className="row section-head centered">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="eight columns centered">
            <p className="lead">{contactMessage}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns centered">
            <form name="contact" ref={formRef} onSubmit={onSubmit} data-netlify={true}>
              <fieldset>
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    size={35}
                    id="contactName"
                    name="contactName"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={email}
                    size={35}
                    id="contactEmail"
                    name="contactEmail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    size={35}
                    id="contactSubject"
                    name="contactSubject"
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols={50}
                    rows={15}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="contactMessage"
                    name="contactMessage"
                  ></textarea>
                </div>

                <div
                  className="g-recaptcha"
                  data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SECRET}
                ></div>

                <div>
                 <input type="submit" value="Submit" />
                </div>
              </fieldset>
            </form>

            {submissionErrorMsg && (
              <div id="message-warning">{`Your message is failed to send with the following error: ${submissionErrorMsg}`}</div>
            )}
            {isSubmissionSuccessful && (
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent
                successfully. Thank you!
                <br />
              </div>
            )}
          </div>
        </div>
      </section>
      <Script src="https://www.google.com/recaptcha/api.js" defer />
    </>
  );
};

export default Contact;
