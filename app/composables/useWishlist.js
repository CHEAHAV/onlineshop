// Global reactive wishlist state
export const useWishlist = () => {
  const wishlist = useState('wishlist', () => [])

  const wishlistCount = computed(() => wishlist.value.length)

  const isInWishlist = (id) => wishlist.value.some(p => p.id === id)

  const toggleWishlist = (product) => {
    const idx = wishlist.value.findIndex(p => p.id === product.id)
    if (idx >= 0) {
      wishlist.value.splice(idx, 1)
    } else {
      wishlist.value.push({ ...product })
    }
  }

  const removeFromWishlist = (id) => {
    wishlist.value = wishlist.value.filter(p => p.id !== id)
  }

  return { wishlist, wishlistCount, isInWishlist, toggleWishlist, removeFromWishlist }
}
