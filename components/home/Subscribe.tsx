export function Subscribe() {
  return (
    <div className="p-8 bg-background-secondary rounded-xl border border-border-primary text-center">
      <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
      <p className="text-text-secondary mb-6">Get the latest posts about development, trading insights, and life updates delivered to your inbox.</p>
      <form className="flex justify-center gap-2">
        <input type="email" placeholder="Enter your email" className="w-full max-w-sm px-4 py-2 border border-border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue" />
        <button type="submit" className="bg-accent-blue text-white font-semibold px-6 py-2 rounded-lg hover:bg-accent-blue-hover transition-colors">
          Subscribe
        </button>
      </form>
      <p className="text-xs text-text-tertiary mt-3">No spam, unsubscribe anytime.</p>
    </div>
  )
}
