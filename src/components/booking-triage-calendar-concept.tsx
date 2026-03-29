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
  { id: 3, label: "Step 03", title: "Concierge Triage" },
  { id: 4, label: "Step 04", title: "Contact" },
] as const;

const dateFlexibilityOptions = ["Fixed date", "Flexible by 1 day", "Flexible by a few days"] as const;

const interestGroups: readonly InterestGroup[] = [
  {
    id: "rome",
    title: "Exclusive Rome Tours",
    subtitle: "Choose one or more Rome private experiences",
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
    subtitle: "Private escapes beyond the city",
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
    subtitle: "Multi-city private routes",
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

const travelerOptions = ["1-2", "3-5", "6-10", "10+"] as const;
const languageOptions = ["English", "Italian", "Spanish", "French", "German", "Other"] as const;

const experienceStyleTags = [
  "History",
  "Archaeology",
  "Art",
  "Architecture",
  "Religion",
  "Food & Wine",
  "Family pacing",
  "Hidden corners",
  "Landmark essentials",
] as const;

const paceOptions = ["Relaxed", "Balanced", "In-depth"] as const;
const transportOptions = ["Walking", "Car and driver", "Minivan", "Need guidance"] as const;
const addOnOptions = ["Food experience", "Wine experience", "Cooking class", "Personal driver"] as const;

const romeTriageTags = [
  "Ancient layers depth",
  "Vatican major highlights",
  "Christian heritage focus",
  "Landmark essentials",
] as const;

const dayTripTriageTags = [
  "Coastal scenery",
  "Archaeology escapes",
  "Countryside rhythm",
  "Low-intensity pacing",
] as const;

const italyTriageTags = [
  "Single-city extension",
  "Multi-city route",
  "Rail-based journey",
  "Car-and-driver continuity",
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

export default function BookingTriageCalendarConcept() {
  const today = useMemo(() => startOfDay(new Date()), []);
  const todayIso = useMemo(() => toIsoDate(today), [today]);

  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedDateIso, setSelectedDateIso] = useState(todayIso);
  const [dateFlexibility, setDateFlexibility] = useState<(typeof dateFlexibilityOptions)[number]>(
    "Fixed date",
  );
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedGroups, setSelectedGroups] = useState<Record<InterestGroupId, boolean>>(emptyGroups);
  const [selectedInterests, setSelectedInterests] = useState<Record<InterestGroupId, string[]>>(
    emptyInterests,
  );
  const [notSureYet, setNotSureYet] = useState(false);
  const [showOptionalTriage, setShowOptionalTriage] = useState(false);

  const [travelerCount, setTravelerCount] = useState("");
  const [travelingWithChildren, setTravelingWithChildren] = useState<BinaryChoice>("");
  const [cruisePassenger, setCruisePassenger] = useState<BinaryChoice>("");
  const [preferredLanguage, setPreferredLanguage] = useState("");
  const [experiencePriorities, setExperiencePriorities] = useState<string[]>([]);
  const [preferredPace, setPreferredPace] = useState("");
  const [preferredTransport, setPreferredTransport] = useState("");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [romeFocusTags, setRomeFocusTags] = useState<string[]>([]);
  const [dayTripFocusTags, setDayTripFocusTags] = useState<string[]>([]);
  const [italyFocusTags, setItalyFocusTags] = useState<string[]>([]);
  const [triageNote, setTriageNote] = useState("");

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
  const hasDayTripInterests = selectedGroups.dayTrips || selectedInterests.dayTrips.length > 0;
  const hasItalyInterests = selectedGroups.italy || selectedInterests.italy.length > 0;

  const canContinue = useMemo(() => {
    if (activeStep === 1) {
      return true;
    }

    if (activeStep === 2) {
      return notSureYet || selectedGroupCount > 0;
    }

    if (activeStep === 3) {
      return (
        travelerCount.length > 0 &&
        preferredLanguage.length > 0 &&
        preferredPace.length > 0 &&
        preferredTransport.length > 0
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
    email,
    firstName,
    lastName,
    notSureYet,
    phone,
    preferredLanguage,
    preferredPace,
    preferredTransport,
    selectedGroupCount,
    travelerCount,
  ]);

  const requestHref = useMemo(() => {
    const params = new URLSearchParams();
    const fullName = `${firstName} ${lastName}`.trim();

    params.set("date", selectedDateIso);
    params.set("dateFlexibility", dateFlexibility);

    if (notSureYet) {
      params.set("notSureYet", "yes");
    }

    if (selectedInterestLabels.length > 0) {
      params.set("interests", selectedInterestLabels.join(", "));
    }
    if (selectedGroupLabels.length > 0) {
      params.set("interestGroups", selectedGroupLabels.join(", "));
    }

    if (travelerCount) {
      params.set("travelers", travelerCount);
    }
    if (travelingWithChildren) {
      params.set("children", travelingWithChildren);
    }
    if (cruisePassenger) {
      params.set("cruise", cruisePassenger);
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
    if (selectedAddOns.length > 0) {
      params.set("addons", selectedAddOns.join(", "));
    }
    if (romeFocusTags.length > 0) {
      params.set("romeFocus", romeFocusTags.join(", "));
    }
    if (dayTripFocusTags.length > 0) {
      params.set("dayTripFocus", dayTripFocusTags.join(", "));
    }
    if (italyFocusTags.length > 0) {
      params.set("italyFocus", italyFocusTags.join(", "));
    }
    if (triageNote.trim()) {
      params.set("triageNote", triageNote.trim());
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
    dateFlexibility,
    dayTripFocusTags,
    email,
    experiencePriorities,
    finalNote,
    firstName,
    hotelArea,
    italyFocusTags,
    lastName,
    notSureYet,
    phone,
    preferredLanguage,
    preferredPace,
    preferredTransport,
    romeFocusTags,
    selectedAddOns,
    selectedDateIso,
    selectedGroupLabels,
    selectedInterestLabels,
    travelerCount,
    travelingWithChildren,
    triageNote,
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
        <article className={styles.bookingTriageIntro}>
          <p className={styles.bookingTriageEyebrow}>PRIVATE CONCIERGE REQUEST</p>
          <h2 id="booking-triage-title" className={styles.bookingTriageTitle}>
            Date-Led Private Itinerary Planning, Designed Around You
          </h2>
          <p className={styles.bookingTriageLead}>
            Start with your date, choose the route families you care about, then answer a concise
            concierge triage to receive a tailored proposal.
          </p>
          <p className={styles.bookingTriageMicro}>
            Luxury private planning | Multi-selection routes | Fast human reply
          </p>

          <ul className={styles.triageSteps} aria-label="Booking triage steps">
            {triageSteps.map((item) => {
              const isActive = item.id === activeStep;
              const isDone = item.id < activeStep;

              return (
                <li
                  key={item.id}
                  className={
                    isActive
                      ? styles.triageStepActive
                      : isDone
                        ? styles.triageStepComplete
                        : styles.triageStep
                  }
                >
                  <p>{item.label}</p>
                  <h3>{item.title}</h3>
                  <span>{isActive ? "Now" : isDone ? "Done" : "Next"}</span>
                </li>
              );
            })}
          </ul>
        </article>

        <div className={styles.calendarShell} role="group" aria-label="Concierge booking triage">
          <div className={styles.calendarTopBar}>
            <p className={styles.calendarTopLabel}>
              {activeStepMeta.label} - {activeStepMeta.title}
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
                <p className={styles.stepHeaderDate}>Date locked: {selectedDateShort}</p>
                <button type="button" className={styles.changeDateButton} onClick={() => setActiveStep(1)}>
                  Change date
                </button>
              </div>
            )}
          </div>

          {activeStep === 1 ? (
            <>
              <div className={styles.stepIntroMessage}>
                <h4>Tell us when you&apos;ll be in Rome</h4>
                <p>
                  We&apos;ll use your preferred date as the starting point for shaping the right
                  private itinerary around your interests.
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

              <div className={styles.dateFlexWrap}>
                <p className={styles.dateFlexLabel}>Date flexibility</p>
                <div className={styles.dateFlexRow}>
                  {dateFlexibilityOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`${styles.dateFlexChip} ${
                        dateFlexibility === option ? styles.dateFlexChipActive : ""
                      }`}
                      onClick={() => setDateFlexibility(option)}
                      aria-pressed={dateFlexibility === option}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : null}

          {activeStep === 2 ? (
            <div className={styles.stepContent}>
              <h4>Choose one or more areas (you can select all 3)</h4>
              <p>
                Select the route families you want to include. Then choose specific experiences
                inside each selected area.
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
                          : "Tap to add this area"}
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
                Not sure yet - help me decide the best route
              </button>

              {!notSureYet && selectedGroupCount === 0 ? (
                <div className={styles.interestEmptyState}>
                  Select at least one area above to continue.
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
                    <span className={styles.selectedInterestPill}>Needs concierge guidance</span>
                  ) : null}
                </div>
              )}
            </div>
          ) : null}

          {activeStep === 3 ? (
            <div className={styles.stepContent}>
              <h4>Essential concierge triage</h4>
              <p>Complete the core details first. Optional refinements can be added below.</p>

              <section className={styles.stepSection}>
                <h5>Core details</h5>
                <p className={styles.stepSectionHint}>How many travelers?</p>
                <div className={styles.optionGrid}>
                  {travelerOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`${styles.optionChip} ${
                        travelerCount === option ? styles.optionChipActive : ""
                      }`}
                      onClick={() => setTravelerCount(option)}
                      aria-pressed={travelerCount === option}
                    >
                      {option} travelers
                    </button>
                  ))}
                </div>

                <p className={styles.stepSectionHint}>Preferred language</p>
                <div className={styles.optionGrid}>
                  {languageOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`${styles.optionChip} ${
                        preferredLanguage === option ? styles.optionChipActive : ""
                      }`}
                      onClick={() => setPreferredLanguage(option)}
                      aria-pressed={preferredLanguage === option}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <p className={styles.stepSectionHint}>Preferred pace</p>
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

                <p className={styles.stepSectionHint}>Preferred transport</p>
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

              <button
                type="button"
                className={`${styles.optionalToggle} ${showOptionalTriage ? styles.optionalToggleActive : ""}`}
                onClick={() => setShowOptionalTriage((current) => !current)}
                aria-expanded={showOptionalTriage}
              >
                {showOptionalTriage ? "Hide optional refinements" : "Refine your request (optional)"}
              </button>

              {showOptionalTriage ? (
                <div className={styles.optionalPanel}>
                  <section className={styles.stepSection}>
                    <h5>Group profile refinements</h5>
                    <div className={styles.binaryGrid}>
                      <div className={styles.binaryGroup}>
                        <p>Traveling with children?</p>
                        <div className={styles.binaryRow}>
                          <button
                            type="button"
                            className={`${styles.optionChip} ${
                              travelingWithChildren === "yes" ? styles.optionChipActive : ""
                            }`}
                            onClick={() => setTravelingWithChildren("yes")}
                            aria-pressed={travelingWithChildren === "yes"}
                          >
                            Yes
                          </button>
                          <button
                            type="button"
                            className={`${styles.optionChip} ${
                              travelingWithChildren === "no" ? styles.optionChipActive : ""
                            }`}
                            onClick={() => setTravelingWithChildren("no")}
                            aria-pressed={travelingWithChildren === "no"}
                          >
                            No
                          </button>
                        </div>
                      </div>

                      <div className={styles.binaryGroup}>
                        <p>Cruise passenger?</p>
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
                            onClick={() => setCruisePassenger("no")}
                            aria-pressed={cruisePassenger === "no"}
                          >
                            No
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className={styles.stepSection}>
                    <h5>Experience style</h5>
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

                  <section className={styles.stepSection}>
                    <h5>Optional add-ons</h5>
                    <div className={styles.optionGrid}>
                      {addOnOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          className={`${styles.optionChip} ${
                            selectedAddOns.includes(option) ? styles.optionChipActive : ""
                          }`}
                          onClick={() =>
                            setSelectedAddOns((current) => toggleStringInList(current, option))
                          }
                          aria-pressed={selectedAddOns.includes(option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </section>

                  {hasRomeInterests ? (
                    <section className={styles.stepSection}>
                      <h5>Rome route focus</h5>
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

                  {hasDayTripInterests ? (
                    <section className={styles.stepSection}>
                      <h5>Day trip focus</h5>
                      <div className={styles.optionGrid}>
                        {dayTripTriageTags.map((tag) => (
                          <button
                            key={tag}
                            type="button"
                            className={`${styles.optionChip} ${
                              dayTripFocusTags.includes(tag) ? styles.optionChipActive : ""
                            }`}
                            onClick={() =>
                              setDayTripFocusTags((current) => toggleStringInList(current, tag))
                            }
                            aria-pressed={dayTripFocusTags.includes(tag)}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </section>
                  ) : null}

                  {hasItalyInterests ? (
                    <section className={styles.stepSection}>
                      <h5>Tours in Italy focus</h5>
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

                  <label className={styles.fieldWrap}>
                    <span>Anything important we should know?</span>
                    <textarea
                      value={triageNote}
                      onChange={(event) => setTriageNote(event.target.value)}
                      className={styles.fieldTextarea}
                      rows={3}
                      placeholder="Timing constraints, accessibility notes, or specific priorities."
                    />
                  </label>
                </div>
              ) : null}
            </div>
          ) : null}

          {activeStep === 4 ? (
            <div className={styles.stepContent}>
              <h4>Contact details</h4>
              <p>Final details to receive your tailored private itinerary proposal.</p>

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
                  <span>Hotel / area in Rome (optional)</span>
                  <input
                    type="text"
                    value={hotelArea}
                    onChange={(event) => setHotelArea(event.target.value)}
                    placeholder="Hotel name or neighborhood"
                    className={styles.fieldInput}
                  />
                </label>
                <label className={styles.fieldWrap}>
                  <span>What would make this trip ideal for you? (optional)</span>
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
                  <strong>Areas selected:</strong>{" "}
                  {notSureYet ? "Need concierge guidance" : selectedGroupCount}
                </p>
                {!notSureYet && selectedInterestCount > 0 ? (
                  <p>
                    <strong>Experiences selected:</strong> {selectedInterestCount}
                  </p>
                ) : null}
              </div>
            </div>
          ) : null}

          <div className={styles.calendarFooter}>
            <p className={styles.selectedDatePill}>Selected day: {selectedDateLabel}</p>
            <div className={styles.actionRow}>
              <button
                type="button"
                className={styles.flowBackButton}
                onClick={goToPrev}
                disabled={activeStep === 1}
              >
                Back
              </button>

              {activeStep < 4 ? (
                <button
                  type="button"
                  className={styles.calendarCta}
                  onClick={goToNext}
                  disabled={!canContinue}
                >
                  Continue
                </button>
              ) : canContinue ? (
                <Link href={requestHref} className={styles.flowFinalCta}>
                  Request Your Tailor-Made Plan
                </Link>
              ) : (
                <button type="button" className={styles.calendarCta} disabled>
                  Request Your Tailor-Made Plan
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
