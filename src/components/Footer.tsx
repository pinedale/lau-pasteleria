import Logo from "@/components/Logo";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-sand">
      <div className="mx-auto flex max-w-300 flex-wrap items-center justify-between gap-2 border-t border-ink-line px-4 pt-5 pb-8 text-sm md:px-6">
        <span className="flex items-center gap-3">
          <Logo className="h-9 w-auto text-white" />
          Barranquilla, Colombia
        </span>
        <span>{site.domain}</span>
      </div>
    </footer>
  );
}