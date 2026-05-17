import styles from "./contact-info.module.css";

const phones = [
  {
    region: "Sri Lanka",
    code: "SL",
    value: "+94 779 122 185",
    href: "tel:+94779122185",
  },
  {
    region: "United Kingdom",
    code: "UK",
    value: "+44 7477 355982",
    href: "tel:+44 7477 355982",
  },
];

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.75 6.75h14.5v10.5H4.75z" />
      <path d="m5.25 7.25 6.75 5 6.75-5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.45 4.75 9.7 4.2l2.05 4.65-1.7 1.25a9.7 9.7 0 0 0 3.85 3.85l1.25-1.7 4.65 2.05-.55 2.25c-.25 1.05-1.2 1.75-2.28 1.63C10.9 17.5 6.5 13.1 5.82 7.03c-.12-1.08.58-2.03 1.63-2.28Z" />
    </svg>
  );
}

export function ContactInfo() {
  return (
    <div className={styles.info}>
      <h3 className={styles.title}>Get in Touch</h3>
      <p className={styles.description}>
        Have a project in mind? We&apos;d love to hear about it. Fill out the
        form or reach us through any of these channels.
      </p>

      <div className={styles.items}>
        <a href="mailto:info.hashscribe@gmail.com" className={styles.item}>
          <span className={styles.iconWrapper}>
            <MailIcon />
          </span>
          <span className={styles.itemBody}>
            <span className={styles.label}>Email</span>
            <span className={styles.value}>info.hashscribe@gmail.com</span>
          </span>
        </a>

        <div className={styles.item}>
          <span className={styles.iconWrapper}>
            <PhoneIcon />
          </span>
          <span className={styles.itemBody}>
            <span className={styles.label}>Phone</span>
            <span className={styles.phoneList}>
              {phones.map((phone) => (
                <a
                  key={phone.region}
                  href={phone.href}
                  className={styles.phoneLink}
                >
                  <span className={styles.countryCode}>{phone.code}</span>
                  <span className={styles.phoneMeta}>
                    <span className={styles.region}>{phone.region}</span>
                    <span className={styles.value}>{phone.value}</span>
                  </span>
                </a>
              ))}
            </span>
          </span>
        </div>
      </div>

      <div className={styles.socials}>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          Twitter / X
        </a>
      </div>
    </div>
  );
}
