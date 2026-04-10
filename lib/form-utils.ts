/**
 * Shared utility for handling form submissions that need to redirect to WhatsApp
 * using the /api/contact-form endpoint.
 */

export const handleWhatsAppSubmission = async (
  formData: Record<string, FormDataEntryValue>,
  serviceName: string,
  onComplete?: (result: any) => void
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

    if (!payload.phone) {
      alert("Please provide a phone number for WhatsApp redirection.");
      return;
    }

    const response = await fetch('/api/contact-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.ok && result.whatsappUrl) {
      // Open WhatsApp in a new tab
      window.open(result.whatsappUrl, '_blank');
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
