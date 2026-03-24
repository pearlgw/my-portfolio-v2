/**
 * Scroll ke section berdasarkan id.
 * - Desktop (lg+): scroll di dalam #scroll-container, offset 60
 * - Mobile: scroll di window (hero → top: 0), offset 30
 */
export function scrollToSection(id: string) {
    if (typeof window === "undefined") return;

    const target = document.getElementById(id);
    if (!target) return;

    const container = document.getElementById("scroll-container");
    const style = container ? getComputedStyle(container) : null;
    const isDesktop =
        style?.overflowY === "auto" || style?.overflowY === "scroll";

    const offset = isDesktop ? 60 : 30;

    if (isDesktop && container) {
        if (id === "hero") {
            container.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        const top =
            target.getBoundingClientRect().top +
            container.scrollTop -
            container.getBoundingClientRect().top -
            offset;
        container.scrollTo({ top, behavior: "smooth" });
    } else {
        if (id === "hero") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
    }
}