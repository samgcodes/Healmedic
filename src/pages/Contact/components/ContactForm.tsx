import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Contact form component with form validation and submission handling
 */
const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const formHeaderRef = useRef<HTMLHeadingElement>(null);
  const formContentRef = useRef<HTMLFormElement>(null);

  // Create a timeline for animations
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!formRef.current || !formHeaderRef.current || !formContentRef.current)
      return;

    // Set initial state
    gsap.set([formHeaderRef.current, formContentRef.current], {
      opacity: 0,
      y: 30,
      scale: 0.98,
    });

    // Create a new timeline
    const tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: "power3.out",
        duration: 0.8,
      },
    });

    timeline.current = tl;

    // Add animations to the timeline with staggered effect
    tl.fromTo(
      formHeaderRef.current,
      { opacity: 0, y: 30, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1 }
    ).fromTo(
      formContentRef.current,
      { opacity: 0, y: 30, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1 },
      "-=0.5"
    );

    // Create ScrollTrigger
    const trigger = ScrollTrigger.create({
      trigger: formRef.current,
      start: "top bottom-=100",
      toggleActions: "play none none none",
      animation: tl,
    });

    // Cleanup
    return () => {
      trigger.kill();
      tl.kill();
    };
  }, []);

  // Form state management
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
    isSubmitting: false,
  });

  // Form validation state
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Create a unique Formspree form ID - replace with your actual form ID after signing up
  const FORMSPREE_FORM_ID = "mldgqqwy"; // Example ID - you'll need to create your own

  /**
   * Validates the form fields
   * @param formData - The form data to validate
   * @returns An object with field names as keys and error messages as values
   */
  const validateForm = (formData: FormData): Record<string, string> => {
    const errors: Record<string, string> = {};
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;
    const privacy = formData.get("privacy") as string;

    // Validate email
    if (!email || !email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    // Validate name
    if (!name || !name.trim()) {
      errors.name = "Name is required";
    }

    // Validate message
    if (!message || !message.trim()) {
      errors.message = "Message is required";
    }

    // Validate privacy checkbox
    if (!privacy) {
      errors.privacy = "You must agree to the data collection policy";
    }

    return errors;
  };

  /**
   * Handles form submission
   * @param e - The form submission event
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.currentTarget);

    // Validate form
    const errors = validateForm(formData);
    setFormErrors(errors);

    // If there are errors, don't submit
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Update status to submitting
    setFormStatus({
      submitted: false,
      error: false,
      message: "Sending...",
      isSubmitting: true,
    });

    try {
      // Send form data to Formspree
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        // Show success message
        setFormStatus({
          submitted: true,
          error: false,
          message: "Thank you! Your message has been sent successfully.",
          isSubmitting: false,
        });

        // Reset form
        e.currentTarget.reset();
        // Clear any previous errors
        setFormErrors({});
      } else {
        // Handle error
        const data = await response.json();
        throw new Error(data.error || "Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        submitted: true,
        error: true,
        message:
          "There was an error sending your message. Please try again or call us directly.",
        isSubmitting: false,
      });
    }
  };

  return (
    <div
      ref={formRef}
      className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-primary"
    >
      <h2
        ref={formHeaderRef}
        className="font-title text-2xl font-semibold mb-6 text-gray-800"
      >
        Send Us a Message
      </h2>
      <form
        ref={formContentRef}
        className="space-y-4"
        onSubmit={handleSubmit}
        name="contact-form"
        action={`https://formspree.io/f/${FORMSPREE_FORM_ID}`}
        method="POST"
        noValidate
      >
        {formStatus.submitted && (
          <div
            className={`p-4 rounded-md ${
              formStatus.error
                ? "bg-red-50 text-red-800"
                : "bg-green-50 text-green-800"
            }`}
            role="alert"
          >
            {formStatus.message}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block font-body text-sm font-medium text-gray-700 mb-1"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              aria-required="true"
              aria-invalid={!!formErrors.name}
              aria-describedby={formErrors.name ? "name-error" : undefined}
              className={`w-full px-4 py-2 border ${
                formErrors.name ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-primary focus:border-primary font-body`}
              placeholder="John Doe"
            />
            {formErrors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600">
                {formErrors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-body text-sm font-medium text-gray-700 mb-1"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              aria-required="true"
              aria-invalid={!!formErrors.email}
              aria-describedby={formErrors.email ? "email-error" : undefined}
              className={`w-full px-4 py-2 border ${
                formErrors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-primary focus:border-primary font-body`}
              placeholder="john@example.com"
            />
            {formErrors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {formErrors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="block font-body text-sm font-medium text-gray-700 mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary font-body"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label
              htmlFor="reason"
              className="block font-body text-sm font-medium text-gray-700 mb-1"
            >
              Reason
            </label>
            <select
              id="reason"
              name="reason"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary font-body"
            >
              <option value="general">General Inquiry</option>
              <option value="prescription">Prescription Transfer</option>
              <option value="appointment">Request Appointment</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-body text-sm font-medium text-gray-700 mb-1"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            required
            aria-required="true"
            aria-invalid={!!formErrors.message}
            aria-describedby={formErrors.message ? "message-error" : undefined}
            className={`w-full px-4 py-2 border ${
              formErrors.message ? "border-red-500" : "border-gray-300"
            } rounded-md focus:ring-primary focus:border-primary font-body`}
            placeholder="How can we help you?"
          ></textarea>
          {formErrors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600">
              {formErrors.message}
            </p>
          )}
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              required
              aria-required="true"
              aria-invalid={!!formErrors.privacy}
              aria-describedby={
                formErrors.privacy ? "privacy-error" : undefined
              }
              className={`h-4 w-4 text-primary focus:ring-primary ${
                formErrors.privacy ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="privacy" className="font-body text-gray-600">
              I agree that my data is being collected.
              <span className="text-red-500">*</span>
            </label>
            {formErrors.privacy && (
              <p id="privacy-error" className="mt-1 text-sm text-red-600">
                {formErrors.privacy}
              </p>
            )}
          </div>
        </div>

        {/* This will tell Formspree where to send the email */}
        <input type="hidden" name="_replyto" value="admin@healmedicrx.com" />
        <input
          type="hidden"
          name="_subject"
          value="New contact form submission from HealMedic website"
        />
        {/* Redirect after submission - optional */}
        <input type="hidden" name="_next" value={window.location.href} />

        <button
          type="submit"
          className="w-full bg-primary text-white font-body px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-300 flex items-center justify-center"
          disabled={
            formStatus.isSubmitting ||
            (formStatus.submitted && !formStatus.error)
          }
          aria-busy={formStatus.isSubmitting}
        >
          {formStatus.isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : formStatus.submitted && !formStatus.error ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Sent
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
