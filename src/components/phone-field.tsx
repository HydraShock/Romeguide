import { useId } from "react";
import { phoneCountries, splitPhoneNumber, type PhoneDetails } from "@/lib/phone-number";
import styles from "./phone-field.module.css";

type PhoneFieldProps = {
  value: PhoneDetails;
  onChange: (value: PhoneDetails) => void;
  className: string;
  inputClassName?: string;
  required?: boolean;
  error?: string;
  errorClassName?: string;
};

export default function PhoneField({
  value,
  onChange,
  className,
  inputClassName,
  required = false,
  error,
  errorClassName,
}: PhoneFieldProps) {
  const errorId = useId();

  return (
    <fieldset className={`${className} ${styles.fieldset}`}>
      <legend>{required ? "Phone" : "Phone (optional)"}</legend>
      <div className={styles.inputs}>
        <select
          name="phoneCountry"
          aria-label="Country calling code"
          autoComplete="tel-country-code"
          value={value.country}
          onChange={(event) => {
            const country = phoneCountries.find((option) => option.country === event.target.value)?.country;
            onChange({ ...value, country: country ?? "" });
          }}
          className={inputClassName}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          required={required}
        >
          <option value="">Country code</option>
          {phoneCountries.map(({ country, name, callingCode }) => (
            <option key={country} value={country}>
              +{callingCode} {name}
            </option>
          ))}
        </select>
        <input
          name="phone"
          aria-label="Phone number"
          type="tel"
          autoComplete="tel-national"
          value={value.number}
          onChange={(event) => {
            const number = event.target.value;
            const international = splitPhoneNumber(number, value.country);
            onChange(international.country ? international : { ...value, number });
          }}
          placeholder="Phone number"
          className={inputClassName}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          required={required}
        />
      </div>
      {error ? (
        <p id={errorId} className={errorClassName}>
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}
