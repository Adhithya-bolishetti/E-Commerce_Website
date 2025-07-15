import React from 'react'
import './DescriptionBox.css';

export const DescriptionBox = () => {
return (
    <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                    <div className="descriptionbox-nav-box">Description</div>
                    <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="decriptionbox-description">
                    <p>
                        This product is crafted with high-quality materials to ensure
                        durability and comfort. Perfect for everyday use, it combines
                        style with functionality, making it an essential addition to your 
                        collection. Enjoy reliable performance and a sleek design that fits 
                        seamlessly into your lifestyle.
                    </p>
                    <p>
                        Whether you're dressing up for a special occasion or keeping it casual,
                        this product adapts to your needs. Its versatile nature allows you to 
                        pair it with various outfits, making it a go-to choice for any wardrobe.
                        Experience the perfect blend of quality and style with this exceptional item.
                    </p>
            </div>
    </div>
)
}
