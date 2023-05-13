import { useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const RecaptchaGoogle = () => {
  const refRecaptcha = useRef(null);

  useEffect(() => {
    const token = refRecaptcha.current.value;
    console.log(token, "recpatcha token");
  }, [refRecaptcha]);
  return (
    <div>
      <ReCAPTCHA
        sitekey="6LfgVQcmAAAAAAuo3QF9_6woJD-aVOkTRz86FZWu "
        ref={refRecaptcha}
      />
    </div>
  );
};

export default RecaptchaGoogle;
