
export const trackLead = () => {
  if (typeof window !== 'undefined') {
    // UTMify standard manual tracking
    // We try multiple possible global names used by UTMify
    const utmify = (window as any).utmify;
    const pixel = (window as any).pixel;
    
    if (utmify && typeof utmify.track === 'function') {
      utmify.track('Lead');
      console.log('UTMify Lead event tracked via window.utmify');
    } else if (pixel && typeof pixel.track === 'function') {
      pixel.track('Lead');
      console.log('UTMify Lead event tracked via window.pixel');
    } else if (typeof (window as any).track === 'function') {
      (window as any).track('Lead');
      console.log('Global track Lead event tracked');
    } else {
      console.warn('UTMify tracking function not found. Ensure the script is loaded.');
    }
  }
};
