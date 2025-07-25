// app/not-found.tsx ან pages/404.tsx
import Link from 'next/link';
import { text } from 'stream/consumers';

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.text}>Sorry, the page you’re looking for doesn't exist or has been moved.</p>
      <Link href="/" style={styles.link}>
        <div style={styles.button}>Return to Homepage</div>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center' as const,
    backgroundColor: '#f5f5f5',
    color: '#333',
    padding: '0 20px',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold' as const,
    marginBottom: '20px',
  },
  link: {
    textDecoration: 'none' as const,
  },
  text: {
    fontSize: '18px',
    marginBottom: '30px',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#0070f3',
    color: '#fff',
    borderRadius: '8px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: 'bold' as const,
    transition: 'background-color 0.3s',
  },
};

