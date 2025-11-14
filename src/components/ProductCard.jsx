function ProductCard({ product, onAddToCart, isLoggedIn }) {
  return (
    <div className="col-md-4">
      <div className="card product-card mb-4">
        <img
          src={product.image}
          className="card-img-top product-image"
          alt={product.name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-muted">{product.category_name}</p>
          <p className="card-text">
            {product.description.substring(0, 100)}...
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mb-0">${product.price.toFixed(2)}</h6>
            {isLoggedIn ? (
              <button
                className="btn btn-danger"
                onClick={() => onAddToCart(product.id)}
              >
                Add to Cart
              </button>
            ) : (
              <a href="/login" className="btn btn-danger">
                Login to Order
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
