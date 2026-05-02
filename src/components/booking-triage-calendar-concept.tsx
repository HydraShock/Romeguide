"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./booking-triage-calendar-concept.module.css";

type DayCell = {
  date: Date;
  iso: string;
  inCurrentMonth: boolean;
  isToday: boolean;
};

type TriageStep = {
  id: 1 | 2 | 3 | 4;
  label: string;
  title: string;
};

type InterestGroupId = "rome" | "dayTrips" | "italy";
type BinaryChoice = "" | "yes" | "no";

type InterestOption = {
  id: string;
  label: string;
};

type InterestGroup = {
  id: InterestGroupId;
  title: string;
  subtitle: string;
  options: readonly InterestOption[];
};

const weekdayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

const triageSteps: readonly TriageStep[] = [
  { id: 1, label: "Step 01", title: "Date" },
  { id: 2, label: "Step 02", title: "Interests" },
  { id: 3, label: "Step 03", title: "Personalize your experience" },
  { id: 4, label: "Step 04", title: "Contact" },
] as const;

const interestGroups: readonly InterestGroup[] = [
  {
    id: "rome",
    title: "Private Tours in Rome",
    subtitle: "Choose one or more experiences in Rome",
    options: [
      { id: "ancient-rome", label: "Ancient Rome" },
      { id: "vatican", label: "Vatican" },
      { id: "christian-rome", label: "Christian Rome" },
      { id: "walking-tours", label: "Walking Tours" },
      { id: "family-friendly", label: "Family-Friendly Tours" },
      { id: "art-architecture", label: "Art & Architecture" },
    ],
  },
  {
    id: "dayTrips",
    title: "Day Trips from Rome",
    subtitle: "Easy private escapes beyond the city",
    options: [
      { id: "tivoli", label: "Tivoli" },
      { id: "ostia-antica", label: "Ostia Antica" },
      { id: "orvieto-umbria", label: "Orvieto / Umbria" },
      { id: "roman-hill-towns", label: "Roman Hill Towns" },
      { id: "cerveteri", label: "Cerveteri" },
      { id: "pompeii-amalfi-naples", label: "Pompeii / Amalfi / Naples" },
    ],
  },
  {
    id: "italy",
    title: "Tours in Italy",
    subtitle: "Private routes across Italy",
    options: [
      { id: "florence-tuscany", label: "Florence / Tuscany" },
      { id: "venice", label: "Venice" },
      { id: "milan", label: "Milan" },
      { id: "sicily", label: "Sicily" },
      { id: "naples-amalfi", label: "Naples & Amalfi Coast" },
      { id: "puglia", label: "Puglia" },
      { id: "umbria", label: "Umbria" },
    ],
  },
] as const;

const totalTravelerOptions = Array.from({ length: 20 }, (_, index) => index + 1);
const primaryLanguageOptions = ["English", "Italian", "Spanish", "French", "German"] as const;
const languageOptions = [...primaryLanguageOptions, "Other"] as const;
const googleTranslateLanguageOptions = [
  "Afrikaans",
  "Albanian",
  "Amharic",
  "Arabic",
  "Armenian",
  "Assamese",
  "Aymara",
  "Azerbaijani",
  "Bambara",
  "Basque",
  "Belarusian",
  "Bengali",
  "Bhojpuri",
  "Bosnian",
  "Bulgarian",
  "Catalan",
  "Cebuano",
  "Chichewa",
  "Chinese (Simplified)",
  "Chinese (Traditional)",
  "Corsican",
  "Croatian",
  "Czech",
  "Danish",
  "Dhivehi",
  "Dogri",
  "Dutch",
  "English",
  "Esperanto",
  "Estonian",
  "Ewe",
  "Filipino",
  "Finnish",
  "French",
  "Frisian",
  "Galician",
  "Georgian",
  "German",
  "Greek",
  "Guarani",
  "Gujarati",
  "Haitian Creole",
  "Hausa",
  "Hawaiian",
  "Hebrew",
  "Hindi",
  "Hmong",
  "Hungarian",
  "Icelandic",
  "Igbo",
  "Ilocano",
  "Indonesian",
  "Irish",
  "Italian",
  "Japanese",
  "Javanese",
  "Kannada",
  "Kazakh",
  "Khmer",
  "Kinyarwanda",
  "Konkani",
  "Korean",
  "Krio",
  "Kurdish (Kurmanji)",
  "Kurdish (Sorani)",
  "Kyrgyz",
  "Lao",
  "Latin",
  "Latvian",
  "Lingala",
  "Lithuanian",
  "Luganda",
  "Luxembourgish",
  "Macedonian",
  "Maithili",
  "Malagasy",
  "Malay",
  "Malayalam",
  "Maltese",
  "Maori",
  "Marathi",
  "Meiteilon (Manipuri)",
  "Mizo",
  "Mongolian",
  "Myanmar (Burmese)",
  "Nepali",
  "Norwegian",
  "Odia (Oriya)",
  "Oromo",
  "Pashto",
  "Persian",
  "Polish",
  "Portuguese",
  "Punjabi",
  "Quechua",
  "Romanian",
  "Russian",
  "Samoan",
  "Sanskrit",
  "Scots Gaelic",
  "Sepedi",
  "Serbian",
  "Sesotho",
  "Shona",
  "Sindhi",
  "Sinhala",
  "Slovak",
  "Slovenian",
  "Somali",
  "Spanish",
  "Sundanese",
  "Swahili",
  "Swedish",
  "Tajik",
  "Tamil",
  "Tatar",
  "Telugu",
  "Thai",
  "Tigrinya",
  "Tsonga",
  "Turkish",
  "Turkmen",
  "Twi",
  "Ukrainian",
  "Urdu",
  "Uyghur",
  "Uzbek",
  "Vietnamese",
  "Welsh",
  "Xhosa",
  "Yiddish",
  "Yoruba",
  "Zulu",
] as const;
const otherLanguageOptions = googleTranslateLanguageOptions.filter(
  (language) => !primaryLanguageOptions.includes(language as (typeof primaryLanguageOptions)[number]),
);

const experienceStyleTags = [
  "History",
  "Archaeology",
  "Art",
  "Architecture",
  "Religion",
  "Food & Wine",
  "Hidden corners",
] as const;

const paceOptions = ["Relaxed", "Balanced", "In-depth"] as const;
const transportOptions = ["Car and driver", "Walking", "Combination"] as const;

const romeTriageTags = [
  "Ancient Rome depth",
  "Vatican highlights",
  "Christian heritage",
  "Classic landmarks",
] as const;

const italyTriageTags = [
  "Single-city extension",
  "Multi-city route",
  "Train-based journey",
  "Private car with driver",
] as const;

const emptyInterests: Record<InterestGroupId, string[]> = {
  rome: [],
  dayTrips: [],
  italy: [],
};

const emptyGroups: Record<InterestGroupId, boolean> = {
  rome: false,
  dayTrips: false,
  italy: false,
};

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addMonths(date: Date, offset: number) {
  return new Date(date.getFullYear(), date.getMonth() + offset, 1);
}

function toIsoDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseIsoDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, (month ?? 1) - 1, day ?? 1);
}

function getCalendarCells(monthDate: Date, todayIso: string): DayCell[] {
  const firstDayOfMonth = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
  const mondayBasedWeekdayIndex = (firstDayOfMonth.getDay() + 6) % 7;
  const gridStartDate = new Date(
    firstDayOfMonth.getFullYear(),
    firstDayOfMonth.getMonth(),
    1 - mondayBasedWeekdayIndex,
  );

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(
      gridStartDate.getFullYear(),
      gridStartDate.getMonth(),
      gridStartDate.getDate() + index,
    );

    const iso = toIsoDate(date);

    return {
      date,
      iso,
      inCurrentMonth: date.getMonth() === monthDate.getMonth(),
      isToday: iso === todayIso,
    };
  });
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function toggleStringInList(list: string[], value: string) {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

function toGuestBucket(totalTravelers: number) {
  if (totalTravelers === 1) {
    return "1 guest";
  }

  if (totalTravelers === 2) {
    return "2 guests";
  }

  if (totalTravelers <= 4) {
    return "3-4 guests";
  }

  if (totalTravelers <= 8) {
    return "5-8 guests";
  }

  return "9+ guests";
}

export default function BookingTriageCalendarConcept() {
  const today = useMemo(() => startOfDay(new Date()), []);
  const todayIso = useMemo(() => toIsoDate(today), [today]);

  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedDateIso, setSelectedDateIso] = useState(todayIso);
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedGroups, setSelectedGroups] = useState<Record<InterestGroupId, boolean>>(emptyGroups);
  const [selectedInterests, setSelectedInterests] = useState<Record<InterestGroupId, string[]>>(
    emptyInterests,
  );
  const [notSureYet, setNotSureYet] = useState(false);

  const [totalTravelers, setTotalTravelers] = useState<number | null>(null);
  const [under18Travelers, setUnder18Travelers] = useState<number | null>(null);
  const [travelingWithAnimals, setTravelingWithAnimals] = useState<BinaryChoice>("");
  const [mobilityIssues, setMobilityIssues] = useState<BinaryChoice>("");
  const [cruisePassenger, setCruisePassenger] = useState<BinaryChoice>("");
  const [cruisePortOfCall, setCruisePortOfCall] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState("");
  const [showLanguageScroller, setShowLanguageScroller] = useState(false);
  const [languageSearchQuery, setLanguageSearchQuery] = useState("");
  const [experiencePriorities, setExperiencePriorities] = useState<string[]>([]);
  const [preferredPace, setPreferredPace] = useState("");
  const [preferredTransport, setPreferredTransport] = useState("");
  const [romeFocusTags, setRomeFocusTags] = useState<string[]>([]);
  const [italyFocusTags, setItalyFocusTags] = useState<string[]>([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hotelArea, setHotelArea] = useState("");
  const [finalNote, setFinalNote] = useState("");

  const visibleMonth = useMemo(() => addMonths(today, monthOffset), [monthOffset, today]);

  const monthLabel = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
      }).format(visibleMonth),
    [visibleMonth],
  );

  const calendarCells = useMemo(
    () => getCalendarCells(visibleMonth, todayIso),
    [todayIso, visibleMonth],
  );

  const selectedDate = useMemo(() => parseIsoDate(selectedDateIso), [selectedDateIso]);
  const selectedDateLabel = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(selectedDate),
    [selectedDate],
  );

  const selectedDateShort = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(selectedDate),
    [selectedDate],
  );

  const visibleMonthStart = useMemo(
    () => new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1),
    [visibleMonth],
  );

  const activeStepMeta = triageSteps.find((item) => item.id === activeStep) ?? triageSteps[0];

  const selectedInterestLabels = useMemo(
    () =>
      interestGroups.flatMap((group) =>
        group.options
          .filter((option) => selectedInterests[group.id].includes(option.id))
          .map((option) => option.label),
      ),
    [selectedInterests],
  );

  const selectedInterestCount = selectedInterestLabels.length;
  const selectedGroupCount = useMemo(
    () => Object.values(selectedGroups).filter(Boolean).length,
    [selectedGroups],
  );

  const selectedGroupLabels = useMemo(
    () => interestGroups.filter((group) => selectedGroups[group.id]).map((group) => group.title),
    [selectedGroups],
  );

  const hasRomeInterests = selectedGroups.rome || selectedInterests.rome.length > 0;
  const hasItalyInterests = selectedGroups.italy || selectedInterests.italy.length > 0;
  const isCustomLanguageSelected =
    preferredLanguage.length > 0 &&
    !languageOptions.includes(preferredLanguage as (typeof languageOptions)[number]);
  const filteredOtherLanguageOptions = useMemo(() => {
    const query = languageSearchQuery.trim().toLowerCase();

    if (!query) {
      return otherLanguageOptions;
    }

    return otherLanguageOptions.filter((language) =>
      language.toLowerCase().includes(query),
    );
  }, [languageSearchQuery]);
  const under18Options = useMemo(() => {
    if (totalTravelers === null) {
      return [] as number[];
    }

    return Array.from({ length: totalTravelers + 1 }, (_, index) => index);
  }, [totalTravelers]);

  const canContinue = useMemo(() => {
    if (activeStep === 1) {
      return true;
    }

    if (activeStep === 2) {
      return notSureYet || selectedGroupCount > 0;
    }

    if (activeStep === 3) {
      const hasCruisePortOfCall =
        cruisePassenger !== "yes" || cruisePortOfCall.trim().length > 1;

      return (
        totalTravelers !== null &&
        under18Travelers !== null &&
        preferredLanguage.length > 0 &&
        preferredPace.length > 0 &&
        preferredTransport.length > 0 &&
        hasCruisePortOfCall
      );
    }

    return (
      firstName.trim().length > 1 &&
      lastName.trim().length > 1 &&
      isValidEmail(email) &&
      phone.trim().length > 4
    );
  }, [
    activeStep,
    cruisePassenger,
    cruisePortOfCall,
    email,
    firstName,
    lastName,
    notSureYet,
    phone,
    preferredLanguage,
    preferredPace,
    preferredTransport,
    selectedGroupCount,
    totalTravelers,
    under18Travelers,
  ]);

  const requestHref = useMemo(() => {
    const params = new URLSearchParams();
    const fullName = `${firstName} ${lastName}`.trim();

    params.set("date", selectedDateIso);

    if (notSureYet) {
      params.set("notSureYet", "yes");
    }

    if (selectedInterestLabels.length > 0) {
      params.set("interests", selectedInterestLabels.join(", "));
    }
    if (selectedGroupLabels.length > 0) {
      params.set("interestGroups", selectedGroupLabels.join(", "));
    }

    if (totalTravelers !== null) {
      params.set("travelers", String(totalTravelers));
      params.set("guests", toGuestBucket(totalTravelers));
    }
    if (under18Travelers !== null) {
      params.set("under18", String(under18Travelers));
    }
    if (travelingWithAnimals) {
      params.set("animals", travelingWithAnimals);
    }
    if (mobilityIssues) {
      params.set("mobilityIssues", mobilityIssues);
    }
    if (cruisePassenger) {
      params.set("cruise", cruisePassenger);
    }
    if (cruisePortOfCall.trim()) {
      params.set("cruisePortOfCall", cruisePortOfCall.trim());
    }
    if (preferredLanguage) {
      params.set("language", preferredLanguage);
    }
    if (experiencePriorities.length > 0) {
      params.set("priority", experiencePriorities.join(", "));
    }
    if (preferredPace) {
      params.set("pace", preferredPace);
    }
    if (preferredTransport) {
      params.set("transport", preferredTransport);
    }
    if (romeFocusTags.length > 0) {
      params.set("romeFocus", romeFocusTags.join(", "));
    }
    if (italyFocusTags.length > 0) {
      params.set("italyFocus", italyFocusTags.join(", "));
    }
    if (firstName.trim()) {
      params.set("firstName", firstName.trim());
    }

    if (lastName.trim()) {
      params.set("lastName", lastName.trim());
    }

    if (fullName) {
      params.set("name", fullName);
    }
    if (email.trim()) {
      params.set("email", email.trim());
    }
    if (phone.trim()) {
      params.set("phone", phone.trim());
    }
    if (hotelArea.trim()) {
      params.set("hotelArea", hotelArea.trim());
    }
    if (finalNote.trim()) {
      params.set("finalNote", finalNote.trim());
    }

    return `/booking-contact?${params.toString()}`;
  }, [
    cruisePassenger,
    cruisePortOfCall,
    email,
    experiencePriorities,
    finalNote,
    firstName,
    hotelArea,
    italyFocusTags,
    lastName,
    mobilityIssues,
    notSureYet,
    phone,
    preferredLanguage,
    preferredPace,
    preferredTransport,
    romeFocusTags,
    selectedDateIso,
    selectedGroupLabels,
    selectedInterestLabels,
    totalTravelers,
    under18Travelers,
    travelingWithAnimals,
  ]);

  function toggleInterest(groupId: InterestGroupId, optionId: string) {
    setSelectedInterests((current) => ({
      ...current,
      [groupId]: toggleStringInList(current[groupId], optionId),
    }));
    setSelectedGroups((current) => ({ ...current, [groupId]: true }));
    setNotSureYet(false);
  }

  function toggleGroup(groupId: InterestGroupId) {
    setSelectedGroups((current) => {
      const nextState = !current[groupId];
      if (!nextState) {
        setSelectedInterests((prevInterests) => ({
          ...prevInterests,
          [groupId]: [],
        }));
      }

      return {
        ...current,
        [groupId]: nextState,
      };
    });
    setNotSureYet(false);
  }

  function goToNext() {
    if (!canContinue || activeStep >= 4) {
      return;
    }

    const next = (activeStep + 1) as 2 | 3 | 4;
    setActiveStep(next);
  }

  function goToPrev() {
    if (activeStep <= 1) {
      return;
    }

    const prev = (activeStep - 1) as 1 | 2 | 3;
    setActiveStep(prev);
  }

  return (
    <section
      id="booking-calendar"
      className={styles.bookingTriageSection}
      aria-labelledby="booking-triage-title"
    >
      <div className={styles.bookingTriageInner}>
        <div className={styles.calendarShell} role="group" aria-label="Private tour planner">
          {activeStep === 1 ? (
            <header className={styles.bookingHeader}>
              <p className={styles.bookingHeaderEyebrow}>Booking Calendar</p>
              <h2 id="booking-triage-title" className={styles.bookingHeaderTitle}>
                Choose Your Date to Book Your Private Tour
              </h2>
              <p className={styles.bookingHeaderLead}>
                Start your booking request here by selecting your preferred date.
              </p>
            </header>
          ) : null}

          <div
            className={`${styles.calendarTopBar} ${
              activeStep > 1 ? styles.calendarTopBarCompact : ""
            }`}
          >
            <p className={styles.calendarTopLabel}>
              Booking step: {activeStepMeta.label} - {activeStepMeta.title}
            </p>

            {activeStep === 1 ? (
              <div className={styles.calendarMonthNav}>
                <button
                  type="button"
                  className={styles.monthNavButton}
                  aria-label="Previous month"
                  onClick={() => setMonthOffset((value) => value - 1)}
                >
                  <span aria-hidden>&larr;</span>
                </button>
                <p className={styles.calendarMonthLabel}>{monthLabel}</p>
                <button
                  type="button"
                  className={styles.monthNavButton}
                  aria-label="Next month"
                  onClick={() => setMonthOffset((value) => value + 1)}
                >
                  <span aria-hidden>&rarr;</span>
                </button>
              </div>
            ) : (
              <div className={styles.stepHeaderBar}>
                <p className={styles.stepHeaderDate}>Date selected: {selectedDateShort}</p>
                <button type="button" className={styles.changeDateButton} onClick={() => setActiveStep(1)}>
                  Edit date
                </button>
              </div>
            )}
          </div>

          {activeStep === 1 ? (
            <>
              <div className={styles.stepIntroMessage}>
                <h4>When will you be in Rome?</h4>
                <p>
                  We&apos;ll use your date as the starting point and build the right private
                  itinerary around your interests.
                </p>
              </div>

              <div className={styles.weekdayGrid} aria-hidden>
                {weekdayLabels.map((weekday) => (
                  <span key={weekday}>{weekday}</span>
                ))}
              </div>

              <div className={styles.dayGrid}>
                {calendarCells.map((cell) => {
                  const isSelected = cell.iso === selectedDateIso;
                  const isOutsideMonth = !cell.inCurrentMonth;
                  const longDateLabel = new Intl.DateTimeFormat("en-US", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }).format(cell.date);

                  return (
                    <button
                      key={cell.iso}
                      type="button"
                      className={`${styles.dayCell} ${isSelected ? styles.dayCellSelected : ""} ${
                        isOutsideMonth ? styles.dayCellOutside : ""
                      } ${cell.isToday ? styles.dayCellToday : ""}`}
                      aria-label={`Select ${longDateLabel}`}
                      aria-pressed={isSelected}
                      onClick={() => {
                        if (isOutsideMonth) {
                          const nextOffset =
                            cell.date < visibleMonthStart ? monthOffset - 1 : monthOffset + 1;
                          setMonthOffset(nextOffset);
                        }
                        setSelectedDateIso(cell.iso);
                      }}
                    >
                      <span>{cell.date.getDate()}</span>
                    </button>
                  );
                })}
              </div>
            </>
          ) : null}

          {activeStep === 2 ? (
            <div className={styles.stepContent}>
              <h4>Choose one or more areas (you can pick all 3)</h4>
              <p>
                Select the areas you&apos;d like to explore, then choose specific experiences
                inside each one.
              </p>

              <div className={styles.interestCategoryRow}>
                {interestGroups.map((group) => {
                  const selectedCount = selectedInterests[group.id].length;
                  const isSelected = selectedGroups[group.id];

                  return (
                    <button
                      key={group.id}
                      type="button"
                      className={`${styles.interestCategoryCard} ${
                        isSelected ? styles.interestCategoryCardActive : ""
                      }`}
                      onClick={() => toggleGroup(group.id)}
                      aria-pressed={isSelected}
                    >
                      <span>{group.title}</span>
                      <small>
                        {isSelected
                          ? selectedCount > 0
                            ? `${selectedCount} experiences selected`
                            : "Area selected"
                          : "Tap to include this area"}
                      </small>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                className={`${styles.notSureChip} ${notSureYet ? styles.notSureChipActive : ""}`}
                onClick={() => {
                  setNotSureYet((current) => !current);
                  if (!notSureYet) {
                    setSelectedGroups(emptyGroups);
                    setSelectedInterests(emptyInterests);
                  }
                }}
                aria-pressed={notSureYet}
              >
                Click here if you&apos;re not sure yet
              </button>

              {!notSureYet && selectedGroupCount === 0 ? (
                <div className={styles.interestEmptyState}>
                  Select at least one area to continue.
                </div>
              ) : null}

              {interestGroups
                .filter((group) => selectedGroups[group.id] && !notSureYet)
                .map((group) => (
                  <section key={group.id} className={styles.interestGroup}>
                    <header className={styles.interestGroupHeader}>
                      <h5 className={styles.interestGroupTitle}>{group.title}</h5>
                      <p className={styles.interestGroupMeta}>{group.subtitle}</p>
                    </header>
                    <div className={styles.interestOptionGrid}>
                      {group.options.map((option) => {
                        const isActive = selectedInterests[group.id].includes(option.id);

                        return (
                          <button
                            key={option.id}
                            type="button"
                            className={`${styles.interestOptionChip} ${
                              isActive ? styles.interestOptionChipActive : ""
                            }`}
                            onClick={() => toggleInterest(group.id, option.id)}
                            aria-pressed={isActive}
                          >
                            {option.label}
                          </button>
                        );
                      })}
                    </div>
                  </section>
                ))}

              {(selectedGroupCount > 0 || selectedInterestLabels.length > 0 || notSureYet) && (
                <div className={styles.selectedInterestWrap}>
                  {selectedGroupLabels.map((label) => (
                    <span key={label} className={styles.selectedInterestPill}>
                      {label}
                    </span>
                  ))}
                  {selectedInterestLabels.map((label) => (
                    <span key={label} className={styles.selectedInterestPill}>
                      {label}
                    </span>
                  ))}
                  {notSureYet ? (
                    <span className={styles.selectedInterestPill}>Please help me choose</span>
                  ) : null}
                </div>
              )}
            </div>
          ) : null}

          {activeStep === 3 ? (
            <div className={`${styles.stepContent} ${styles.stepContentCompact}`}>
              <h4>A few quick details</h4>
              <p>Share a few details so we can shape the experience around your group.</p>

              <div className={styles.stepThreeGrid}>
                <section className={`${styles.stepSection} ${styles.stepSectionFull} ${styles.stepSectionCompact}`}>
                  <h5>Trip basics</h5>
                  <p className={styles.stepSectionHint}>How many travelers are joining?</p>
                  <div className={styles.optionGrid}>
                    {totalTravelerOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`${styles.optionChip} ${
                          totalTravelers === option ? styles.optionChipActive : ""
                        }`}
                        onClick={() => {
                          setTotalTravelers(option);
                          if (under18Travelers !== null && under18Travelers > option) {
                            setUnder18Travelers(null);
                          }
                        }}
                        aria-pressed={totalTravelers === option}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  <p className={styles.stepSectionHint}>How many are under 18?</p>
                  {totalTravelers === null ? (
                    <p className={styles.stepSectionSubhint}>
                      Select total travelers first.
                    </p>
                  ) : (
                    <div className={styles.optionGrid}>
                      {under18Options.map((option) => (
                        <button
                          key={`under18-${option}`}
                          type="button"
                          className={`${styles.optionChip} ${
                            under18Travelers === option ? styles.optionChipActive : ""
                          }`}
                          onClick={() => setUnder18Travelers(option)}
                          aria-pressed={under18Travelers === option}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}

                  <p className={styles.stepSectionHint}>Preferred guide language</p>
                  <div className={styles.optionGrid}>
                    {languageOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`${styles.optionChip} ${
                          option === "Other"
                            ? showLanguageScroller || isCustomLanguageSelected
                              ? styles.optionChipActive
                              : ""
                            : preferredLanguage === option
                              ? styles.optionChipActive
                              : ""
                        }`}
                        onClick={() => {
                          if (option === "Other") {
                            setShowLanguageScroller((current) => !current);
                            setLanguageSearchQuery("");
                            return;
                          }

                          setPreferredLanguage(option);
                          setShowLanguageScroller(false);
                          setLanguageSearchQuery("");
                        }}
                        aria-pressed={
                          option === "Other"
                            ? showLanguageScroller || isCustomLanguageSelected
                            : preferredLanguage === option
                        }
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {showLanguageScroller ? (
                    <div className={styles.languageScrollPanel} aria-label="All language options">
                      <label className={styles.languageSearchWrap}>
                        <span className={styles.languageSearchLabel}>Search language</span>
                        <input
                          type="text"
                          value={languageSearchQuery}
                          onChange={(event) => setLanguageSearchQuery(event.target.value)}
                          placeholder="Type to filter..."
                          className={styles.languageSearchInput}
                        />
                      </label>

                      <div className={styles.languageMenuList}>
                        {filteredOtherLanguageOptions.length > 0 ? (
                          filteredOtherLanguageOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              className={`${styles.languageMenuItem} ${
                                preferredLanguage === option ? styles.languageMenuItemActive : ""
                              }`}
                              onClick={() => {
                                setPreferredLanguage(option);
                                setShowLanguageScroller(false);
                                setLanguageSearchQuery("");
                              }}
                              aria-pressed={preferredLanguage === option}
                            >
                              {option}
                            </button>
                          ))
                        ) : (
                          <p className={styles.languageMenuEmpty}>
                            No language found with this search.
                          </p>
                        )}
                      </div>
                    </div>
                  ) : null}

                  <p className={styles.stepSectionHint}>Preferred tour pace</p>
                  <div className={styles.optionGrid}>
                    {paceOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`${styles.optionChip} ${
                          preferredPace === option ? styles.optionChipActive : ""
                        }`}
                        onClick={() => setPreferredPace(option)}
                        aria-pressed={preferredPace === option}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  <p className={styles.stepSectionHint}>Preferred transport style</p>
                  <div className={styles.optionGrid}>
                    {transportOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`${styles.optionChip} ${
                          preferredTransport === option ? styles.optionChipActive : ""
                        }`}
                        onClick={() => setPreferredTransport(option)}
                        aria-pressed={preferredTransport === option}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </section>

                <section className={`${styles.stepSection} ${styles.stepSectionCompact}`}>
                  <h5>Group details</h5>
                  <div className={styles.binaryGrid}>
                    <div className={styles.binaryGroup}>
                      <p>Traveling with animals?</p>
                      <div className={styles.binaryRow}>
                        <button
                          type="button"
                          className={`${styles.optionChip} ${
                            travelingWithAnimals === "yes" ? styles.optionChipActive : ""
                          }`}
                          onClick={() => setTravelingWithAnimals("yes")}
                          aria-pressed={travelingWithAnimals === "yes"}
                        >
                          Yes
                        </button>
                        <button
                          type="button"
                          className={`${styles.optionChip} ${
                            travelingWithAnimals === "no" ? styles.optionChipActive : ""
                          }`}
                          onClick={() => setTravelingWithAnimals("no")}
                          aria-pressed={travelingWithAnimals === "no"}
                        >
                          No
                        </button>
                      </div>
                    </div>

                    <div className={styles.binaryGroup}>
                      <p>Mobility issues?</p>
                      <div className={styles.binaryRow}>
                        <button
                          type="button"
                          className={`${styles.optionChip} ${
                            mobilityIssues === "yes" ? styles.optionChipActive : ""
                          }`}
                          onClick={() => setMobilityIssues("yes")}
                          aria-pressed={mobilityIssues === "yes"}
                        >
                          Yes
                        </button>
                        <button
                          type="button"
                          className={`${styles.optionChip} ${
                            mobilityIssues === "no" ? styles.optionChipActive : ""
                          }`}
                          onClick={() => setMobilityIssues("no")}
                          aria-pressed={mobilityIssues === "no"}
                        >
                          No
                        </button>
                      </div>
                    </div>

                    <div className={styles.binaryGroup}>
                      <p>Arriving by cruise ship?</p>
                      <div className={styles.binaryRow}>
                        <button
                          type="button"
                          className={`${styles.optionChip} ${
                            cruisePassenger === "yes" ? styles.optionChipActive : ""
                          }`}
                          onClick={() => setCruisePassenger("yes")}
                          aria-pressed={cruisePassenger === "yes"}
                        >
                          Yes
                        </button>
                        <button
                          type="button"
                          className={`${styles.optionChip} ${
                            cruisePassenger === "no" ? styles.optionChipActive : ""
                          }`}
                          onClick={() => {
                            setCruisePassenger("no");
                            setCruisePortOfCall("");
                          }}
                          aria-pressed={cruisePassenger === "no"}
                        >
                          No
                        </button>
                      </div>
                      {cruisePassenger === "yes" ? (
                        <label className={styles.binaryFieldWrap}>
                          <span>Port of call</span>
                          <input
                            type="text"
                            value={cruisePortOfCall}
                            onChange={(event) => setCruisePortOfCall(event.target.value)}
                            placeholder="e.g. Civitavecchia"
                            className={styles.fieldInput}
                          />
                        </label>
                      ) : null}
                    </div>
                  </div>
                </section>

                <section className={`${styles.stepSection} ${styles.stepSectionCompact}`}>
                  <h5>Experience preferences</h5>
                  <div className={styles.optionGrid}>
                    {experienceStyleTags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        className={`${styles.optionChip} ${
                          experiencePriorities.includes(tag) ? styles.optionChipActive : ""
                        }`}
                        onClick={() =>
                          setExperiencePriorities((current) => toggleStringInList(current, tag))
                        }
                        aria-pressed={experiencePriorities.includes(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </section>

                {hasRomeInterests ? (
                  <section className={`${styles.stepSection} ${styles.stepSectionCompact}`}>
                    <h5>Rome highlights focus</h5>
                    <div className={styles.optionGrid}>
                      {romeTriageTags.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          className={`${styles.optionChip} ${
                            romeFocusTags.includes(tag) ? styles.optionChipActive : ""
                          }`}
                          onClick={() => setRomeFocusTags((current) => toggleStringInList(current, tag))}
                          aria-pressed={romeFocusTags.includes(tag)}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </section>
                ) : null}

                {hasItalyInterests ? (
                  <section className={`${styles.stepSection} ${styles.stepSectionCompact}`}>
                    <h5>Italy route focus</h5>
                    <div className={styles.optionGrid}>
                      {italyTriageTags.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          className={`${styles.optionChip} ${
                            italyFocusTags.includes(tag) ? styles.optionChipActive : ""
                          }`}
                          onClick={() => setItalyFocusTags((current) => toggleStringInList(current, tag))}
                          aria-pressed={italyFocusTags.includes(tag)}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </section>
                ) : null}
              </div>
            </div>
          ) : null}

          {activeStep === 4 ? (
            <div className={styles.stepContent}>
              <h4>Your contact details</h4>
              <p>Share your final details and we&apos;ll send you a personal itinerary for your trip.</p>

              <div className={styles.contactGrid}>
                <label className={styles.fieldWrap}>
                  <span>First name</span>
                  <input
                    type="text"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder="First name"
                    className={styles.fieldInput}
                  />
                </label>
                <label className={styles.fieldWrap}>
                  <span>Last name</span>
                  <input
                    type="text"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    placeholder="Last name"
                    className={styles.fieldInput}
                  />
                </label>
                <label className={styles.fieldWrap}>
                  <span>Email</span>
                  <input
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@email.com"
                    className={styles.fieldInput}
                  />
                </label>
                <label className={styles.fieldWrap}>
                  <span>Phone / WhatsApp</span>
                  <input
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="+39 ..."
                    className={styles.fieldInput}
                  />
                </label>
                <label className={styles.fieldWrap}>
                  <span>Hotel or area in Rome (optional)</span>
                  <input
                    type="text"
                    value={hotelArea}
                    onChange={(event) => setHotelArea(event.target.value)}
                    placeholder="Hotel name or neighborhood"
                    className={styles.fieldInput}
                  />
                </label>
                <label className={styles.fieldWrap}>
                  <span>What would make this trip perfect for you? (optional)</span>
                  <textarea
                    value={finalNote}
                    onChange={(event) => setFinalNote(event.target.value)}
                    className={styles.fieldTextarea}
                    rows={3}
                    placeholder="Your final note"
                  />
                </label>
              </div>

              <div className={styles.summaryInline}>
                <p>
                  <strong>Date:</strong> {selectedDateShort}
                </p>
                <p>
                  <strong>Travelers:</strong>{" "}
                  {totalTravelers === null || under18Travelers === null
                    ? "Not set"
                    : `${totalTravelers} total, ${under18Travelers} under 18`}
                </p>
                <p>
                  <strong>Areas chosen:</strong>{" "}
                  {notSureYet ? "Need help choosing" : selectedGroupCount}
                </p>
                {cruisePassenger === "yes" && cruisePortOfCall.trim() ? (
                  <p>
                    <strong>Port of call:</strong> {cruisePortOfCall.trim()}
                  </p>
                ) : null}
                {!notSureYet && selectedInterestCount > 0 ? (
                  <p>
                    <strong>Experiences chosen:</strong> {selectedInterestCount}
                  </p>
                ) : null}
              </div>
            </div>
          ) : null}

          <div className={styles.calendarFooter}>
            <p className={styles.selectedDatePill}>Selected date: {selectedDateLabel}</p>
            <div className={styles.actionRow}>
              <button
                type="button"
                className={styles.flowBackButton}
                onClick={goToPrev}
                disabled={activeStep === 1}
              >
                Previous
              </button>

              {activeStep < 4 ? (
                <button
                  type="button"
                  className={styles.calendarCta}
                  onClick={goToNext}
                  disabled={!canContinue}
                >
                  Next
                </button>
              ) : canContinue ? (
                <Link href={requestHref} className={styles.flowFinalCta}>
                  Send My Request
                </Link>
              ) : (
                <button type="button" className={styles.calendarCta} disabled>
                  Send My Request
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
