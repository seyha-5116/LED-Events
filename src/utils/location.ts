import { COMPANY_INFO } from '../data/ledEventsData';

/**
 * Opens the company's verified location on Google Maps in a new tab.
 */
export function openCompanyGoogleMaps(): void {
  window.open(COMPANY_INFO.googleMapsUrl, '_blank', 'noopener,noreferrer');
}

/**
 * Opens Google Maps Navigation/Directions towards the company's facility.
 */
export function openCompanyDirections(): void {
  window.open(COMPANY_INFO.googleMapsDirectionsUrl, '_blank', 'noopener,noreferrer');
}

/**
 * Copies the exact company address to the user's clipboard with fallback support.
 */
export async function copyCompanyAddress(): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(COMPANY_INFO.address);
      return true;
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = COMPANY_INFO.address;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    }
  } catch (err) {
    console.error('Failed to copy company address:', err);
    return false;
  }
}

/**
 * Smoothly scrolls to the location map section on page.
 */
export function scrollToCompanyMap(): void {
  const mapElement = document.getElementById('company-location-map');
  if (mapElement) {
    mapElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // Add temporary pulse highlight class
    mapElement.classList.add('ring-2', 'ring-white', 'transition-all');
    setTimeout(() => {
      mapElement.classList.remove('ring-2', 'ring-white');
    }, 2000);
  }
}
