
export const trackLead = () => {
  if (typeof window !== 'undefined') {
    // UTMify standard manual tracking
    if ((window as any).utmify && typeof (window as any).utmify.track === 'function') {
      (window as any).utmify.track('Lead');
      console.log('UTMify Lead event tracked');
    } else {
      console.warn('UTMify not found or track function unavailable');
      
      // Fallback: try to call track directly if it was exposed globally as 'track'
      if (typeof (window as any).track === 'function') {
        (window as any).track('Lead');
        console.log('Global track Lead event tracked');
      }
    }
  }
};
