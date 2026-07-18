// Thin wrapper around the Mixpanel JS snippet loaded in index.html.
// Safe to call even if Mixpanel hasn't finished loading or the token
// hasn't been set yet — it just no-ops instead of throwing.

export function track(event, props = {}) {
  try {
    if (typeof window !== 'undefined' && window.mixpanel && window.mixpanel.track) {
      window.mixpanel.track(event, props)
    }
  } catch (e) {
    // never let analytics break the page
  }
}

export function identifyPageView(path) {
  track('Page Viewed', { path })
}
