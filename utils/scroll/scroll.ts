export const scrollLeft = (
  scrollRef: { current: HTMLElement | null },
  isRtl: boolean
) => {
  if (scrollRef.current) {
    if (isRtl) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  }
};

export const scrollRight = (
  scrollRef: { current: HTMLElement | null },
  isRtl: boolean
) => {
  if (scrollRef.current) {
    if (isRtl) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  }
};
