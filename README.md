# BackToTop Component

A customizable React component that displays a "back to top" button when the user scrolls down a certain distance from the top of the page.

## Features

- 🎯 **Customizable threshold** - Set when the button appears
- 🎨 **Flexible styling** - Custom CSS classes and positioning
- ♿ **Accessible** - Built with ARIA labels and keyboard navigation
- 🎭 **Customizable icon** - Use your own icon or stick with the default
- 📱 **Responsive** - Works on all screen sizes
- ⚡ **Lightweight** - Minimal dependencies
- 🔧 **TypeScript support** - Full type definitions included

## Installation

```bash
# Using JSR
npx jsr add @jmacera/back-to-top-component

# Using Deno
deno add @jmacera/back-to-top-component
```

## Basic Usage

```tsx
import { BackToTop } from "@jmacera/back-to-top-component";

function App() {
  return (
    <div>
      {/* Your app content */}
      <BackToTop />
    </div>
  );
}
```

## Advanced Usage

```tsx
import { BackToTop } from "@jmacera/back-to-top-component";
import { ArrowUp } from "lucide-react";

function App() {
  return (
    <div>
      {/* Your app content */}
      <BackToTop 
        threshold={500}                    // Show button after 500px scroll
        className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-lg shadow-xl"
        bottom={50}                        // 50px from bottom
        right={50}                         // 50px from right
        icon={<ArrowUp size={24} />}       // Custom icon
        text="Top"                         // Button text
        ariaLabel="Scroll to top of page"  // Custom accessibility label
        onClick={() => console.log('Scrolled to top!')}
        smooth={false}                     // Instant scroll (no animation)
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `threshold` | `number` | `300` | Distance from top in pixels before button appears |
| `smooth` | `boolean` | `true` | Enable smooth scrolling animation |
| `className` | `string` | `"fixed z-50 bg-blue-600..."` | Custom CSS classes for the button |
| `icon` | `ReactNode` | `ChevronUp` | Custom icon component |
| `text` | `string` | `""` | Button text (appears next to icon) |
| `bottom` | `number` | `32` | Position from bottom in pixels |
| `right` | `number` | `32` | Position from right in pixels |
| `ariaLabel` | `string` | `"Back to top"` | Accessibility label for screen readers |
| `onClick` | `() => void` | `() => {}` | Callback function when button is clicked |

## Styling Examples

### Tailwind CSS (Default)
```tsx
<BackToTop className="fixed z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" />
```

### Custom Styling
```tsx
<BackToTop 
  className="fixed z-50 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
  bottom={20}
  right={20}
/>
```

### With Text
```tsx
<BackToTop 
  text="↑ Top"
  className="fixed z-50 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-200"
/>
```

## Framework Compatibility

This component works with any React-based framework:

- ✅ **Next.js**
- ✅ **Vite + React**
- ✅ **Create React App**
- ✅ **Remix**
- ✅ **Gatsby**
- ✅ **Astro** (with React integration)

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Dependencies

- `react` (^19.0.0) - For React hooks and JSX
- `lucide-react` (^0.515.0) - For the default ChevronUp icon

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Changelog

### 1.0.0
- Initial release
- Customizable threshold, styling, and positioning
- TypeScript support
- Accessibility features
- Smooth scrolling option
