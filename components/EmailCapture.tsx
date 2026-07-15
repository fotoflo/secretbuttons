import FormTimer from "@/components/FormTimer";
import { subscribeNewsletter } from "@/app/contact-actions";

export default function EmailCapture() {
  return (
    <form className="email-capture" action={subscribeNewsletter}>
      <FormTimer />
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="ec-website">Leave this field blank.</label>
        <input id="ec-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <label htmlFor="ec-email" className="text-blue">
        <strong>Get updates when new materials are added</strong>
      </label>
      <div className="email-capture-row">
        <input
          id="ec-email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
        />
        <button className="button" type="submit">
          Keep me posted
        </button>
      </div>
    </form>
  );
}
