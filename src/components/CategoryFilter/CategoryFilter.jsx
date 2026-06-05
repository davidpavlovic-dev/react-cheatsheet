export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div className="filter-control">
      <span className="placeholder-label">Filters</span>
      <div className="category-filter" role="group" aria-label="Filter by category">
        {categories.map((category) => (
          <button
            className="category-filter-button"
            type="button"
            key={category}
            aria-pressed={selectedCategory === category}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

