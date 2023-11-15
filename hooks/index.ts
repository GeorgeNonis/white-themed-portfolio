import { useActiveSectionContext } from "@/context/active-section-contenxt";
import { SectionNameType } from "@/context/active-section-contenxt/types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(
  sectionName: SectionNameType,
  threshold = 0.75
) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
