import { Button } from './components/Button'
import { Card } from './components/Card'
import { ProfileCard } from './components/ProfileCard'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Button Examples */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Tailwind Variants - Buttons
          </h2>
          <div className="flex flex-wrap gap-4">
            {/* Basic Button */}
            <Button>Default Button</Button>
            
            {/* Color Variants */}
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            
            {/* Size Variants */}
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            
            {/* Combined Variants */}
            <Button color="secondary" size="sm">
              Small Secondary
            </Button>
            <Button color="success" size="lg">
              Large Success
            </Button>
            
            {/* Disabled State */}
            <Button disabled>Disabled</Button>
          </div>
        </section>

        {/* Card Examples */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Tailwind Variants - Cards
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Small Card */}
            <Card 
              title="Small Card Example" 
              size="sm"
              footer={
                <div className="flex justify-end">
                  <Button size="sm">Small Action</Button>
                </div>
              }
            >
              <p className="text-gray-600 dark:text-gray-300">
                This is a small card demonstrating the slot-based styling with
                tailwind-variants. It uses the "sm" size variant.
              </p>
            </Card>

            {/* Medium Card */}
            <Card 
              title="Medium Card Example"
              footer={
                <div className="flex justify-between">
                  <Button color="secondary">Cancel</Button>
                  <Button>Confirm</Button>
                </div>
              }
            >
              <p className="text-gray-600 dark:text-gray-300">
                This is a medium card (default size) showing how slots can be styled
                independently while maintaining a consistent theme.
              </p>
            </Card>

            {/* Large Card */}
            <Card 
              title="Large Card Example"
              size="lg"
              footer={
                <div className="flex justify-end space-x-2">
                  <Button color="secondary">Decline</Button>
                  <Button color="success">Accept</Button>
                </div>
              }
            >
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  This is a large card that demonstrates:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Slot-based styling</li>
                  <li>Size variants affecting multiple slots</li>
                  <li>Dark mode support</li>
                  <li>Complex footer layouts</li>
                </ul>
              </div>
            </Card>
          </div>
        </section>

        {/* Profile Cards with Slots */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Tailwind Variants - Slots Example
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ProfileCard
              imageSrc="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              name="Sarah Johnson"
              role="UX Designer"
              description="Using tailwind-variants slots feature has made our component styling more organized and maintainable. The slot-based approach is a game-changer!"
              size="sm"
              color="purple"
            />

            <ProfileCard
              imageSrc="https://api.dicebear.com/7.x/avataaars/svg?seed=Mia"
              name="Michael Chen"
              role="Senior Developer"
              description="The slots feature in tailwind-variants provides a clean and intuitive way to style complex components. It's become an essential part of our design system."
              size="lg"
              color="blue"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default App 