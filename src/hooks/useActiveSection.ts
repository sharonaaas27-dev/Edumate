import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)
      .sort((first, second) => first.offsetTop - second.offsetTop);

    if (sections.length === 0) {
      return;
    }

    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.32;
      let current = '';

      sections.forEach((section) => {
        if (section.offsetTop <= marker) {
          current = section.id;
        }
      });

      const isNearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;

      if (isNearBottom) {
        current = sections[sections.length - 1].id;
      }

      setActiveSection((previous) => (previous === current ? previous : current));
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}
