import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import { submitDownloadForm } from "./actions";

export const metadata: Metadata = { title: "Download the Guides" };

export default function GuideDownloads() {
  return (
    <>
      <SiteHeader title="Download the Guides" />
      <div className="site-inner">
        <main className="entry-content">
          <div className="row">
            <div className="col-golden-left">
              <p>
                We&rsquo;d love to know who&rsquo;s teaching and reading! Please
                fill out the form below to get your free downloads. We&rsquo;ll
                only send you updates when we add new materials.
              </p>

              <form className="download-form" action={submitDownloadForm}>
                <div className="form-row">
                  <div>
                    <label htmlFor="name">
                      Name <span className="required">*</span>
                    </label>
                    <input id="name" name="name" type="text" required />
                  </div>
                </div>

                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input id="email" name="email" type="email" required />

                <label htmlFor="organization">
                  Organization <span className="required">*</span>
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  required
                />

                <div className="form-row">
                  <div>
                    <label htmlFor="city">
                      City <span className="required">*</span>
                    </label>
                    <input id="city" name="city" type="text" required />
                  </div>
                  <div>
                    <label htmlFor="state">
                      State <span className="required">*</span>
                    </label>
                    <input id="state" name="state" type="text" required />
                  </div>
                  <div>
                    <label htmlFor="zip">
                      Zip <span className="required">*</span>
                    </label>
                    <input
                      id="zip"
                      name="zip"
                      type="text"
                      maxLength={10}
                      required
                    />
                  </div>
                </div>

                <div className="honeypot" aria-hidden="true">
                  <label htmlFor="website">
                    If you are human, leave this field blank.
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <button className="button" type="submit">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-golden-right" />
          </div>
        </main>
      </div>
    </>
  );
}
