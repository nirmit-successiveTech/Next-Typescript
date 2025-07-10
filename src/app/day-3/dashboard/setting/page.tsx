import Link from 'next/link';

export default function Settings() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Emergency Contacts</h1>

      <nav style={styles.nav}>
        <Link href="/day-3">Home</Link>
        <Link href="/day-3/aboutpage    ">About</Link>
      </nav>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '2rem',
    maxWidth: '400px',
    margin: '2rem auto',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
    textAlign: 'center' as const,
  },
  title: {
    marginBottom: '1.5rem',
    color: '#111827',
  },
  card: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '6px',
    marginBottom: '2rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
  link: {
    color: '#3b82f6',
    textDecoration: 'none',
    fontWeight: '600',
  },
};
