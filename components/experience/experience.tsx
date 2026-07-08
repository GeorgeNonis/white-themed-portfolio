import { useSyncExternalStore } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { ExperienceProps, getExperienceIcon } from "./experience.types";

const ACCENT = "#6366f1";

function subscribeToDarkClass(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getIsDarkFromDom() {
  return document.documentElement.classList.contains("dark");
}

const ExperienceComp = ({
  date,
  description,
  iconKey,
  location,
  title,
}: ExperienceProps) => {
  const isDark = useSyncExternalStore(
    subscribeToDarkClass,
    getIsDarkFromDom,
    () => false
  );
  const isLight = !isDark;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isLight ? "#f8fafc" : "#1c1c1f",
        color: isLight ? "#18181b" : "#f4f4f5",
        boxShadow: isLight
          ? "0 8px 24px rgba(15, 23, 42, 0.06)"
          : "0 8px 24px rgba(0, 0, 0, 0.25)",
        border: isLight
          ? "1px solid #e4e4e7"
          : "1px solid rgba(99, 102, 241, 0.28)",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{
        borderRight: isLight
          ? `0.4rem solid #e4e4e7`
          : `0.4rem solid #1c1c1f`,
      }}
      icon={getExperienceIcon(iconKey)}
      date={date}
      dateClassName={`!font-medium ${isLight ? "!text-gray-600" : "!text-white/70"}`}
      iconStyle={{
        background: ACCENT,
        color: "#fff",
        fontSize: "1.35rem",
        boxShadow: `0 0 0 4px ${isLight ? "rgba(99, 102, 241, 0.18)" : "rgba(99, 102, 241, 0.35)"}`,
      }}
    >
      <h3 className="font-semibold capitalize">{title}</h3>
      <p
        className="font-normal !mt-0"
        style={{ color: isLight ? "#52525b" : "rgba(199, 210, 254, 0.8)" }}
      >
        {location}
      </p>
      <p
        className="!mt-1 !font-normal"
        style={{ color: isLight ? "#3f3f46" : "rgba(255, 255, 255, 0.8)" }}
      >
        {description}
      </p>
    </VerticalTimelineElement>
  );
};
export default ExperienceComp;
