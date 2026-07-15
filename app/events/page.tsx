import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import FormTimer from "@/components/FormTimer";
import { requestEvent } from "@/app/contact-actions";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Invite Ellen M. Shapiro to an in-person or Zoom event with your school, library, or book group.",
};

export default function Events() {
  return (
    <>
      <SiteHeader title="Events" />
      <div className="site-inner">
        <main id="main-content" className="entry-content">
          <div className="row">
            <div className="col-golden-left">
              <h2 className="text-blue">
                Invite Ellen to your school or group
              </h2>
              <p>
                Ellen visits schools, libraries, and book groups — in person in
                the New York area, or anywhere by Zoom. Tell her a little about
                your group and she&rsquo;ll get back to you.
              </p>

              <form className="download-form" action={requestEvent}>
                <FormTimer />
                <div className="honeypot" aria-hidden="true">
                  <label htmlFor="ev-website">Leave this field blank.</label>
                  <input id="ev-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <label htmlFor="ev-name">
                  Name <span className="required">*</span>
                </label>
                <input id="ev-name" name="name" type="text" required />

                <label htmlFor="ev-email">
                  Email <span className="required">*</span>
                </label>
                <input id="ev-email" name="email" type="email" required />

                <label htmlFor="ev-org">
                  School / library / group <span className="required">*</span>
                </label>
                <input id="ev-org" name="organization" type="text" required />

                <label htmlFor="ev-message">
                  What did you have in mind?{" "}
                  <span className="required">*</span>
                </label>
                <textarea
                  id="ev-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="In-person or Zoom, group size, grade level, possible dates…"
                />

                <button className="button" type="submit">
                  Send invitation
                </button>
              </form>
            </div>
            <div className="col-golden-right">
              <p>
                <br />
                You can also reach Ellen directly:
              </p>
              <p>
                <a href="mailto:ellen@visualanguage.net">
                  ellen@visualanguage.net
                </a>
                <br />
                914-374-8133
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
