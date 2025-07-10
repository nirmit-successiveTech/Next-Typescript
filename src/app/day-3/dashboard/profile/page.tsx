export default function Profile() {
  return (
    <div style={styles.container}>
      <div style ={styles.card}>
        <h1 style={styles.name}>Nirmit</h1>
        <p style={styles.info}><strong>Age:</strong> 21</p>
        <p style={styles.info}><strong>Designation:</strong> Trainee Engineer</p>
        <p style={styles.info}><strong>Mobile:</strong> +1 234 567 8900</p>
      </div>
    </div>
  )
}
const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem 3rem',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    minWidth: '280px',
    textAlign: 'center' as const, 
  },
  name: {
    margin: '0 0 1rem 0',
    fontSize: '2rem',
    color: '#111827',
  },
  info: {
    margin: '0.5rem 0',
    fontSize: '1.1rem',
    color: '#374151',
  },
};
