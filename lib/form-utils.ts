/**
 * Shared utility for handling form submissions that need to redirect to WhatsApp
 * using the /api/contact-form endpoint.
 */

/**
 * Shared utility for opening WhatsApp support chat for a specific service.
 */
export const handleNeedHelpWhatsApp = (serviceName: string) => {
  const whatsappNumber = "919999644807";
  const message = `Hi, I need help with ${serviceName}.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

/**
 * Shared utility for handling form submissions that need to redirect to WhatsApp
 * using the /api/contact-form endpoint.
 */

export const handleWhatsAppSubmission = async (
  formData: Record<string, FormDataEntryValue>,
  serviceName: string,
  onComplete?: (result: any) => void,
  shouldRedirect: boolean = true
) => {
  try {
    const payload = {
      name: formData.name || formData.brand_name || 'Interested User',
      email: formData.email || '',
      phone: formData.phone || '',
      service: serviceName,
      message: `I'm interested in ${serviceName}. ${Object.entries(formData)
        .filter(([key]) => !['name', 'email', 'phone', 'brand_name'].includes(key))
        .map(([key, value]) => `\n${key}: ${value}`)
        .join('')}`
    };

    const response = await fetch('/api/contact-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.ok && result.whatsappUrl) {
      // Open WhatsApp in a new tab ONLY if shouldRedirect is true
      if (shouldRedirect) {
        window.open(result.whatsappUrl, '_blank');
      }
      if (onComplete) onComplete(result);
    } else {
      console.error('Submission failed:', result.error);
      alert(result.error || 'Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Network Error:', error);
    alert('Failed to send message. Please check your connection.');
  }
};
