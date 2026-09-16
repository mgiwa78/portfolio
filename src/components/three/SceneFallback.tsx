export default function SceneFallback() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      role="presentation"
      aria-hidden="true"
    >
      <g stroke="#4c7cff" strokeOpacity="0.35" strokeWidth="1">
        <line x1="80" y1="120" x2="200" y2="60" />
        <line x1="200" y1="60" x2="320" y2="140" />
        <line x1="80" y1="120" x2="140" y2="240" />
        <line x1="200" y1="60" x2="220" y2="200" />
        <line x1="320" y1="140" x2="220" y2="200" />
        <line x1="140" y1="240" x2="220" y2="200" />
        <line x1="140" y1="240" x2="240" y2="320" />
        <line x1="220" y1="200" x2="320" y2="280" />
        <line x1="240" y1="320" x2="320" y2="280" />
      </g>
      <g fill="#4c7cff">
        <circle cx="80" cy="120" r="3.5" />
        <circle cx="320" cy="140" r="3.5" />
        <circle cx="140" cy="240" r="3.5" />
        <circle cx="240" cy="320" r="3.5" />
        <circle cx="320" cy="280" r="3.5" />
      </g>
      <g fill="#a8bfff">
        <circle cx="200" cy="60" r="5" />
        <circle cx="220" cy="200" r="5" />
      </g>
    </svg>
  );
}
