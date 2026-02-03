const ProductCard1 = ({ title, description, image, category }) => {
  return (
    <div className="mx-3">
      <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105
                      border-xs border-cyan-400 border 
                      bg-gradient-to-br from-[#67e8f9]/10 via-[#ef0163]/5 to-transparent backdrop-blur-sm p-6">
        
        {/* Image Container */}
        {image && (
          <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/80 to-transparent"></div>
          </div>
        )}

        {/* Category */}
        {category && (
          <span className="text-xs font-semibold text-[#67e8f9] uppercase tracking-wider">
            {category}
          </span>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-[#67e8f9] mb-2">{title}</h3>

        {/* Description */}
        <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard1;
