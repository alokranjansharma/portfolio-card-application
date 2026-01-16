import './SlideArrow.css'

export default function SlideArrow({ onPrev, onNext, currentIndex, total, isFirst, isLast }) {
  return (
    <div className="slide-arrow-wrap">
      <button onClick={onPrev} aria-label="Previous" disabled={isFirst}>
        <svg viewBox="0 0 32 32" fill="currentColor">
          <path d="M12.792 15.233l-0.754 0.754 6.035 6.035 0.754-0.754-5.281-5.281 5.256-5.256-0.754-0.754z" />
        </svg>
      </button>
      <button onClick={onNext} aria-label="Next" disabled={isLast}>
        <svg viewBox="0 0 32 32" fill="currentColor">
          <path d="M19.159 16.767l0.754-0.754-6.035-6.035-0.754 0.754 5.281 5.281-5.256 5.256 0.754 0.754z" />
        </svg>
      </button>

      <span className="slide-indicator">
        {currentIndex + 1} / {total}
      </span>
    </div>
  );
}
