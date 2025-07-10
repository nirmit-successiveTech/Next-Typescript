import Link from "next/link";


export default function Layout({children}:any) {
  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <h2 style={{paddingBottom:'30px'}}>My Dashboard</h2>
        <ul style={{display:'flex',flexDirection:'column',gap:'10px'}}>
          <li>
            <Link href={'dashboard/profile'}>Profile</Link>
          </li>
          <li>
            <Link href={'setting'}>Setting</Link>
          </li>
        </ul>
      </aside>

      <main className="dashboard-main">
        <h1 style={{paddingBottom:'30px'}}>Dashboard Content</h1>
        <div>{children}</div>
      </main>
    </div>
  );
}
