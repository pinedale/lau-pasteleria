type IconProps = {
  className?: string;
};

export default function InvoiceIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 3h9l3 3v15H6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}