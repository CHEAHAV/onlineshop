// Global reactive cart state
export const useCart = () => {
  const cart = useState('cart', () => [])

  const cartCount = computed(() => cart.value.reduce((sum, item) => sum + item.qty, 0))
  const cartTotal = computed(() => cart.value.reduce((sum, item) => sum + item.price * item.qty, 0))

  const addToCart = (product, qty = 1) => {
    const existing = cart.value.find(i => i.id === product.id)
    if (existing) {
      existing.qty += qty
    } else {
      cart.value.push({ ...product, qty })
    }
  }

  const removeFromCart = (id) => {
    cart.value = cart.value.filter(i => i.id !== id)
  }

  const updateQty = (id, qty) => {
    const item = cart.value.find(i => i.id === id)
    if (item) {
      if (qty <= 0) removeFromCart(id)
      else item.qty = qty
    }
  }

  const clearCart = () => {
    cart.value = []
  }

  return { cart, cartCount, cartTotal, addToCart, removeFromCart, updateQty, clearCart }
}
