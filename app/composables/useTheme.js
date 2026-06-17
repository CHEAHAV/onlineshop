export const useTheme = () => {
  const theme = useState('appTheme', () => 'light')

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    if (import.meta.client) {
      document.documentElement.classList.toggle('dark', theme.value === 'dark')
    }
  }

  // Apply on mount
  if (import.meta.client) {
    document.documentElement.classList.toggle('dark', theme.value === 'dark')
  }

  return { theme, toggleTheme }
}