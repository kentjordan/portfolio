"use client";
import { cn } from "@/lib/utils";
import { useNavbarStore } from "@/zustand/store";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Briefcase,
  History,
  Home,
  Layers,
  Mail,
  Menu,
  UserRound,
  X,
} from "lucide-react";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const roboto = Roboto({ weight: ["500", "700"], subsets: ["latin"] });

// The single source for sidebar and drawer links. `id` is the home-page section.
const navItems = [
  { href: "/#home", id: "home", label: "Home", Icon: Home },
  { href: "/#techstack", id: "techstack", label: "Techstack", Icon: Layers },
  { href: "/#works", id: "works", label: "Works", Icon: Briefcase },
  { href: "/#certificates", id: "certificates", label: "Certificates", Icon: Award },
  { href: "/#timeline", id: "timeline", label: "Timeline", Icon: History },
  { href: "/#about-me", id: "about-me", label: "About Me", Icon: UserRound },
];

/** Which nav item to highlight: scroll position on the home page, the route elsewhere. */
function useActiveSection() {
  const pathname = usePathname();
  const [section, setSection] = useState("home");

  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setSection(entry.target.id);
        }
      },
      // A line 40% down the viewport: the section crossing it is active.
      { rootMargin: "-40% 0px -60% 0px" }
    );
    for (const { id } of navItems) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [pathname]);

  if (pathname === "/") return section;
  if (pathname.startsWith("/works")) return "works";
  if (pathname.startsWith("/certs")) return "certificates";
  return "";
}

/**
 * Whether the sidebar and the mobile menu button are shown. On the home page
 * they stay hidden while the hero fills the screen and appear once the next
 * section scrolls in; every other page always shows them.
 */
function useNavVisible() {
  const pathname = usePathname();
  const [heroOnScreen, setHeroOnScreen] = useState(true);

  useEffect(() => {
    if (pathname !== "/") return;
    const hero = document.getElementById("home");
    if (!hero) return;
    const observer = new IntersectionObserver(
      // One target, so the last entry is its current state.
      (entries) => setHeroOnScreen(entries[entries.length - 1].isIntersecting),
      // Watch only the bottom 10% of the viewport: the hero stops reaching it
      // as soon as the section after it starts scrolling in.
      { rootMargin: "-90% 0px 0px 0px" }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  return pathname !== "/" || !heroOnScreen;
}

// Nav link geometry that the rail is drawn from. The link classes below must
// match: h-[3.125rem] links with gap-[0.3125rem] between them, pl-[0.9375rem]
// and a size-[1.875rem] icon box. The rail runs through the icon centers.
const LINK_HEIGHT_REM = 3.125;
const RAIL_STEP_REM = LINK_HEIGHT_REM + 0.3125;
const ICON_CENTER_X_REM = 0.9375 + 1.875 / 2;

function SidebarContent({
  active,
  onNavigate,
  className,
}: {
  active: string;
  onNavigate?: () => void;
  className?: string;
}) {
  const activeIndex = navItems.findIndex(({ id }) => id === active);

  return (
    // min-h-full, not h-full: when the drawer is too short and scrolls, the
    // content grows past it with its bottom padding instead of overflowing.
    <div className={cn("flex min-h-full flex-col px-4 py-6", className)}>
      <nav aria-label='Main' className='relative flex flex-col gap-[0.3125rem]'>
        {/* Rail: a line from the first icon's center to the last one's. The blue
            stretch is one step tall, centered on the current link's icon. */}
        <span
          aria-hidden
          className='absolute w-0.5 overflow-hidden bg-white/10'
          style={{
            top: `${LINK_HEIGHT_REM / 2}rem`,
            bottom: `${LINK_HEIGHT_REM / 2}rem`,
            left: `calc(${ICON_CENTER_X_REM}rem - 1px)`,
          }}>
          <span
            className={cn(
              "absolute inset-x-0 top-0 bg-sky-400 transition-transform duration-300 ease-out motion-reduce:transition-none",
              activeIndex < 0 && "hidden"
            )}
            style={{
              height: `${RAIL_STEP_REM}rem`,
              transform: `translateY(${(activeIndex - 0.5) * RAIL_STEP_REM}rem)`,
            }}
          />
        </span>
        {navItems.map(({ href, id, label, Icon }) => {
          const isActive = active === id;
          return (
            <Link
              key={id}
              href={href}
              onClick={onNavigate}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "flex h-[3.125rem] items-center gap-[0.9375rem] whitespace-nowrap pl-[0.9375rem] text-[17.5px] font-medium transition-colors",
                isActive ? "text-sky-400" : "text-neutral-400 hover:text-white"
              )}>
              {/* The black box hides the rail behind the icon */}
              <span className='relative flex size-[1.875rem] shrink-0 items-center justify-center bg-black'>
                <Icon size={22} />
              </span>
              {label}
            </Link>
          );
        })}
      </nav>

      <div className='mt-auto'>
        <Link
          href='/contact'
          onClick={onNavigate}
          className='flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-black transition-colors hover:bg-neutral-200'>
          <Mail size={16} />
          Contact me
        </Link>
      </div>
    </div>
  );
}

/** Slide-in drawer version of the sidebar, below the `lg` breakpoint. */
export const MobileNavbarMenu = () => {
  const isOpen = useNavbarStore((state: any) => state.isMobileNavMenuOpened);
  const toggle = useNavbarStore((state: any) => state.toggleMobileNavMenu);
  const active = useActiveSection();

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && toggle();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, toggle]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key='backdrop'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggle}
            className='fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm lg:hidden'
          />
          <motion.aside
            key='drawer'
            aria-label='Mobile navigation'
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
            // overflow-y-auto: on short landscape phones the links push Contact below the fold
            className={`${roboto.className} fixed inset-y-0 left-0 z-[56] w-72 max-w-[85vw] select-none overflow-y-auto bg-black lg:hidden`}>
            <button
              type='button'
              onClick={toggle}
              aria-label='Close menu'
              className='absolute right-3 top-3 flex size-8 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-white/10 hover:text-white'>
              <X size={18} />
            </button>
            {/* pt-14 starts the links below the close button instead of under it */}
            <SidebarContent active={active} onNavigate={toggle} className='pt-14' />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

/**
 * Fixed sidebar from `lg` up; a floating menu button below that. Both hide
 * over the home-page hero (`useNavVisible`). `invisible` also takes them out of
 * the tab order, and transitioning `visibility` keeps them on screen until the
 * slide-out or fade-out finishes.
 */
function Navbar() {
  const toggle = useNavbarStore((state: any) => state.toggleMobileNavMenu);
  const active = useActiveSection();
  const visible = useNavVisible();

  return (
    <>
      <aside
        aria-label='Sidebar'
        className={cn(
          roboto.className,
          "fixed inset-y-0 left-0 z-50 hidden w-60 select-none bg-black transition-[transform,visibility] duration-300 ease-out motion-reduce:transition-none lg:block",
          !visible && "invisible -translate-x-full"
        )}>
        <SidebarContent active={active} />
      </aside>
      <button
        type='button'
        onClick={toggle}
        aria-label='Open menu'
        className={cn(
          "fixed left-4 top-4 z-50 flex size-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur transition-[background-color,opacity,visibility] duration-300 hover:bg-black/80 motion-reduce:transition-none lg:hidden",
          !visible && "invisible opacity-0"
        )}>
        <Menu size={18} />
      </button>
    </>
  );
}

export default Navbar;
