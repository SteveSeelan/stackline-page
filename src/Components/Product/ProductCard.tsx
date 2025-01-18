import { Product } from "../../types";
import styles from './product.module.css';

const ProductCard = (product: Product) => {
    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <div className={styles.imageContainer}>
                    <img src={product.image} alt={product.title} className={styles.image} />
                    <p className={styles.title}>{product.brand}</p>
                    <p className={styles.subtitle}>{product.subtitle}</p>
                </div>
                <div className={styles.tagContainer}>
                    {product.tags.map((tag) => (
                        <span 
                        key={tag}
                        className={styles.tag}
                        >
                        {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;