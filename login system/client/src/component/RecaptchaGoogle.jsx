import ReCAPTCHA from "react-google-recaptcha";

const RecaptchaGoogle = ({ refRecaptcha }) => {
  return (
    <div>
      <ReCAPTCHA
        sitekey="6LfgVQcmAAAAAAuo3QF9_6woJD-aVOkTRz86FZWu"
        ref={refRecaptcha}
      />
    </div>
  );
};

export default RecaptchaGoogle;
