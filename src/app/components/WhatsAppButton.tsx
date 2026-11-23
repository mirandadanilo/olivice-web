import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  return (
    <a
      className={styles.button}
      href="https://wa.me/51993728808"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a OLIVICE por WhatsApp Business"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className={styles.icon}
        fill="currentColor"
      >
        <path d="M16 2.4A13.5 13.5 0 0 0 4.4 22.8L2.6 29.4l6.8-1.8A13.5 13.5 0 1 0 16 2.4Zm0 24.4c-2 0-4-.5-5.7-1.6l-.4-.2-4 .1 1.1-3.8-.3-.5A10.8 10.8 0 1 1 16 26.8Z" />
        <path d="M22 18.5c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.7-1.7-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6-.1-.2-.7-1.8-1-2.4-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.4 3.3c.2.2 2.3 3.5 5.5 4.8.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.6-.1 2-.8 2.3-1.6.3-.8.3-1.4.2-1.6-.1-.2-.3-.3-.6-.5Z" />
      </svg>
    </a>
  );
}
