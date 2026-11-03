export default function Tags({ items, label = "Technologies" }: { items: string[]; label?: string }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={label}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full bg-tag px-2.5 py-0.5 font-mono text-[11px] leading-5 text-accent-2"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
