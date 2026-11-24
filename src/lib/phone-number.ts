import parsePhoneNumber, {
  getCountries,
  getCountryCallingCode,
  isSupportedCountry,
  type CountryCode,
} from "libphonenumber-js/min";

export type PhoneDetails = {
  country: CountryCode | "";
  number: string;
};

export const emptyPhone: PhoneDetails = { country: "", number: "" };

const countryNames = new Intl.DisplayNames(["en"], { type: "region" });

export const phoneCountries = getCountries()
  .map((country) => ({
    country,
    name: countryNames.of(country) ?? country,
    callingCode: getCountryCallingCode(country),
  }))
  .sort((a, b) => a.name.localeCompare(b.name, "en"));

function internationalInput(value: string) {
  const number = value.trim().replace(/^00/, "+");
  return number.startsWith("+") ? number : "";
}

export function splitPhoneNumber(value: string, preferredCountry = ""): PhoneDetails {
  const international = internationalInput(value);
  const parsed = international ? parsePhoneNumber(international, { extract: false }) : undefined;

  if (!parsed?.isPossible()) {
    return { country: "", number: value };
  }

  const matchesPreferredCountry =
    isSupportedCountry(preferredCountry) &&
    getCountryCallingCode(preferredCountry) === parsed.countryCallingCode;
  const country = matchesPreferredCountry
      ? preferredCountry
      : parsed.country ?? parsed.getPossibleCountries()[0];

  return country ? { country, number: parsed.nationalNumber } : { country: "", number: value };
}

export function formatPhoneNumber({ country, number }: PhoneDetails) {
  const international = internationalInput(number);
  if (!country && !international) {
    return "";
  }

  const parsed = parsePhoneNumber(international || number.trim(), {
    defaultCountry: country || undefined,
    extract: false,
  });

  return parsed?.isPossible() ? parsed.number : "";
}
