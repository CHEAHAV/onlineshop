// Single source of truth for all product data
import smartwatch1 from '~/assets/images/products/smartwatch1.png'
import smartwatch2 from '~/assets/images/products/smartwatch2.png'
import smartwatch3 from '~/assets/images/products/smartwatch3.png'
import headphone1 from '~/assets/images/products/headphone1.png'
import headphone2 from '~/assets/images/products/headphone2.png'
import headphone3 from '~/assets/images/products/headphone3.png'
import backpack1 from '~/assets/images/products/backpack1.png'
import backpack2 from '~/assets/images/products/backpack2.png'
import backpack3 from '~/assets/images/products/backpack3.png'
import shoes1 from '~/assets/images/products/shoes1.png'
import shoes2 from '~/assets/images/products/shoes2.png'
import shoes3 from '~/assets/images/products/shoes3.png'
import perfume1 from '~/assets/images/products/perfume1.png'
import perfume2 from '~/assets/images/products/perfume2.png'
import perfume3 from '~/assets/images/products/perfume3.png'
export const useProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Smart Watch Series 5',
      category: 'Electronics',
      price: 89.99,
      original: 99.99,
      rating: 4.5,
      reviews: 128,
      badge: 'Best Seller',
      img: smartwatch1,
      images: [
        smartwatch1,
        smartwatch2,
        smartwatch3,
      ],
      description: 'Track your health and stay connected with our most advanced smartwatch. Features heart rate monitoring, GPS, and a stunning always-on AMOLED display with 7-day battery life.',
      colors: [
        { name: 'Midnight Black', hex: '#1a1a1a' },
        { name: 'Silver', hex: '#c0c0c0' },
        { name: 'Rose Gold', hex: '#b76e79' },
      ],
      isNew: false,
    },
    {
      id: 2,
      name: 'Wireless Headphones Pro',
      category: 'Electronics',
      price: 59.99,
      original: 89.99,
      rating: 4.7,
      reviews: 86,
      badge: 'Best Seller',
      img: headphone1,
      images: [
        headphone1,
        headphone2,
        headphone3,
      ],
      description: 'Experience studio-quality sound with hybrid active noise cancellation and up to 40 hours of battery life. Designed for those who appreciate the intersection of natural beauty and technological precision.',
      colors: [
        { name: 'Oatmeal Mist', hex: '#e8ddd0' },
        { name: 'Forest Green', hex: '#3d5a4a' },
        { name: 'Midnight', hex: '#2c2c2c' },
      ],
      isNew: false,
    },
    {
      id: 3,
      name: 'Travel Backpack',
      category: 'Accessories',
      price: 39.99,
      original: 59.99,
      rating: 4.6,
      reviews: 156,
      badge: 'Popular',
      img: backpack1,
      images: [
        backpack1,
        backpack2,
        backpack3,
      ],
      description: 'Built for adventurers and commuters alike. Features water-resistant fabric, padded laptop sleeve, and ergonomic shoulder straps. Fits 15.6" laptops with room to spare.',
      colors: [
        { name: 'Olive Green', hex: '#6b7c5a' },
        { name: 'Charcoal', hex: '#4a4a4a' },
        { name: 'Navy', hex: '#1a2744' },
      ],
      isNew: false,
    },
    {
      id: 4,
      name: 'Running Shoes Elite',
      category: 'Sports',
      price: 49.99,
      original: 79.99,
      rating: 4.4,
      reviews: 92,
      badge: 'Hot',
      img: shoes1,
      images: [
        shoes1,
        shoes2,
        shoes3,
      ],
      description: 'Engineered for peak performance on every run. Responsive cushioning, breathable mesh upper, and durable outsole. Perfect for daily training and race day.',
      colors: [
        { name: 'White', hex: '#f5f5f5' },
        { name: 'Black', hex: '#1a1a1a' },
        { name: 'Coral', hex: '#e07b6e' },
      ],
      isNew: false,
    },
    {
      id: 5,
      name: 'Luxury Perfume',
      category: 'Beauty',
      price: 29.99,
      original: 49.99,
      rating: 4.8,
      reviews: 74,
      badge: 'New',
      img: perfume1,
      images: [
        perfume1,
        perfume2,
        perfume3,
      ],
      description: 'An exquisite blend of floral and woody notes. Long-lasting formula with a luxurious sillage. Crafted by master perfumers in Grasse, France.',
      colors: [
        { name: 'Gold Edition', hex: '#c9a84c' },
        { name: 'Silver Edition', hex: '#9e9e9e' },
      ],
      isNew: true,
    },
    {
      id: 6,
      name: 'Classic Timepiece',
      category: 'Accessories',
      price: 119.99,
      original: 149.99,
      rating: 4.6,
      reviews: 51,
      badge: 'Premium',
      img: 'https://picsum.photos/seed/watch6/400/400',
      images: [
        'https://picsum.photos/seed/watch6/600/600',
        'https://picsum.photos/seed/watch6b/600/600',
        'https://picsum.photos/seed/watch6c/600/600',
      ],
      description: 'A timeless dress watch with Swiss-inspired movement. Sapphire crystal glass, genuine leather strap, and water resistance to 50m. A gift for every occasion.',
      colors: [
        { name: 'Brown Leather', hex: '#8b6340' },
        { name: 'Black Leather', hex: '#2c2c2c' },
        { name: 'White Leather', hex: '#f0ede8' },
      ],
      isNew: false,
    },
    {
      id: 7,
      name: 'Artisan Clay Vase',
      category: 'Home & Kitchen',
      price: 48.00,
      original: 65.00,
      rating: 4.5,
      reviews: 38,
      badge: 'New',
      img: 'https://picsum.photos/seed/vase7/400/400',
      images: [
        'https://picsum.photos/seed/vase7/600/600',
        'https://picsum.photos/seed/vase7b/600/600',
        'https://picsum.photos/seed/vase7c/600/600',
      ],
      description: 'Handcrafted by local artisans using traditional pottery techniques. Each piece is unique with natural imperfections that add character and warmth to any space.',
      colors: [
        { name: 'Terracotta', hex: '#c4704a' },
        { name: 'Cream', hex: '#f5f0e8' },
        { name: 'Sage', hex: '#8fa889' },
      ],
      isNew: true,
    },
    {
      id: 8,
      name: 'Oatmeal Linen Lounge Chair',
      category: 'Home & Kitchen',
      price: 320.00,
      original: 420.00,
      rating: 4.9,
      reviews: 22,
      badge: 'Premium',
      img: 'https://picsum.photos/seed/chair8/400/400',
      images: [
        'https://picsum.photos/seed/chair8/600/600',
        'https://picsum.photos/seed/chair8b/600/600',
        'https://picsum.photos/seed/chair8c/600/600',
      ],
      description: 'Sustainably sourced solid oak frame with premium linen upholstery. Ergonomically designed for hours of comfortable lounging. Assembly required.',
      colors: [
        { name: 'Oatmeal', hex: '#e8ddd0' },
        { name: 'Sage Green', hex: '#a8b89a' },
        { name: 'Charcoal', hex: '#4a4a4a' },
      ],
      isNew: true,
    },
    {
      id: 9,
      name: 'Eucalyptus & Sage Candle',
      category: 'Home & Kitchen',
      price: 34.00,
      original: 45.00,
      rating: 4.7,
      reviews: 64,
      badge: 'New',
      img: 'https://picsum.photos/seed/candle9/400/400',
      images: [
        'https://picsum.photos/seed/candle9/600/600',
        'https://picsum.photos/seed/candle9b/600/600',
        'https://picsum.photos/seed/candle9c/600/600',
      ],
      description: 'Clean-burning soy wax infused with essential oils. 60-hour burn time. Hand-poured in small batches for consistent quality. Zero synthetic fragrances.',
      colors: [
        { name: 'Green Glass', hex: '#4a7c59' },
        { name: 'Clear Glass', hex: '#e8f0e8' },
      ],
      isNew: true,
    },
    {
      id: 10,
      name: 'Seagrass Woven Basket',
      category: 'Home & Kitchen',
      price: 55.00,
      original: 70.00,
      rating: 4.4,
      reviews: 41,
      badge: 'New',
      img: 'https://picsum.photos/seed/basket10/400/400',
      images: [
        'https://picsum.photos/seed/basket10/600/600',
        'https://picsum.photos/seed/basket10b/600/600',
        'https://picsum.photos/seed/basket10c/600/600',
      ],
      description: 'Naturally harvested seagrass woven by skilled craftspeople. Perfect for storage, laundry, or as a stylish plant pot cover. Eco-friendly and biodegradable.',
      colors: [
        { name: 'Natural', hex: '#c4a97c' },
        { name: 'Bleached', hex: '#e8d9c0' },
      ],
      isNew: true,
    },
    {
      id: 11,
      name: 'Silk Midi Dress',
      category: 'Fashion',
      price: 145.00,
      original: 195.00,
      rating: 4.6,
      reviews: 33,
      badge: 'Sale',
      img: 'https://picsum.photos/seed/dress11/400/400',
      images: [
        'https://picsum.photos/seed/dress11/600/600',
        'https://picsum.photos/seed/dress11b/600/600',
        'https://picsum.photos/seed/dress11c/600/600',
      ],
      description: '100% pure mulberry silk. Floaty, bias-cut silhouette that flatters every body type. Dry clean recommended. Available in sizes XS–XL.',
      colors: [
        { name: 'Champagne', hex: '#f0d99c' },
        { name: 'Dusty Rose', hex: '#d4a0a8' },
        { name: 'Forest', hex: '#3d5a4a' },
      ],
      isNew: false,
    },
    {
      id: 12,
      name: 'Premium Yoga Mat',
      category: 'Sports',
      price: 68.00,
      original: 89.00,
      rating: 4.8,
      reviews: 87,
      badge: 'Popular',
      img: 'https://picsum.photos/seed/yoga12/400/400',
      images: [
        'https://picsum.photos/seed/yoga12/600/600',
        'https://picsum.photos/seed/yoga12b/600/600',
        'https://picsum.photos/seed/yoga12c/600/600',
      ],
      description: '6mm natural rubber with microfiber top layer. Non-slip grip even when wet. Includes carrying strap. Certified non-toxic and free from harmful chemicals.',
      colors: [
        { name: 'Sage', hex: '#8fa889' },
        { name: 'Terracotta', hex: '#c4704a' },
        { name: 'Slate', hex: '#6a7c8a' },
      ],
      isNew: false,
    },
  ]

  const getProductById = (id) => products.find(p => p.id === Number(id))

  const getProductsByCategory = (category) =>
    category === 'All' ? products : products.filter(p => p.category === category)

  const searchProducts = (query) => {
    if (!query) return []
    const q = query.toLowerCase()
    return products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    )
  }

  return { products, getProductById, getProductsByCategory, searchProducts }
}
