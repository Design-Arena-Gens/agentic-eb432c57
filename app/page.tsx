'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Dashboard() {
  const [stats, setStats] = useState({
    users: 0,
    revenue: 0,
    orders: 0,
    growth: 0
  })

  useEffect(() => {
    // Animate numbers on mount
    const interval = setInterval(() => {
      setStats(prev => ({
        users: Math.min(prev.users + 127, 12847),
        revenue: Math.min(prev.revenue + 892, 89234),
        orders: Math.min(prev.orders + 34, 3456),
        growth: Math.min(prev.growth + 0.5, 24.5)
      }))
    }, 20)

    setTimeout(() => clearInterval(interval), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <h1 className={styles.logo}>Dashboard</h1>
          <div className={styles.navLinks}>
            <a href="#" className={styles.navLink}>Overview</a>
            <a href="#" className={styles.navLink}>Analytics</a>
            <a href="#" className={styles.navLink}>Reports</a>
            <a href="#" className={styles.navLink}>Settings</a>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Welcome back!</h2>
            <p className={styles.subtitle}>Here's what's happening with your business today.</p>
          </div>
          <button className={styles.button}>Download Report</button>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Total Users</h3>
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className={styles.cardValue}>{stats.users.toLocaleString()}</div>
            <div className={styles.cardChange}>
              <span className={styles.positive}>+12.5%</span> from last month
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Revenue</h3>
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className={styles.cardValue}>${stats.revenue.toLocaleString()}</div>
            <div className={styles.cardChange}>
              <span className={styles.positive}>+8.2%</span> from last month
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Orders</h3>
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div className={styles.cardValue}>{stats.orders.toLocaleString()}</div>
            <div className={styles.cardChange}>
              <span className={styles.positive}>+19.3%</span> from last month
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Growth Rate</h3>
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className={styles.cardValue}>{stats.growth.toFixed(1)}%</div>
            <div className={styles.cardChange}>
              <span className={styles.positive}>+4.1%</span> from last month
            </div>
          </div>
        </div>

        <div className={styles.chartSection}>
          <div className={styles.chartCard}>
            <h3 className={styles.chartTitle}>Revenue Overview</h3>
            <div className={styles.chart}>
              <div className={styles.barGroup}>
                {[65, 45, 75, 55, 85, 70, 90].map((height, i) => (
                  <div key={i} className={styles.barContainer}>
                    <div className={styles.bar} style={{ height: `${height}%` }}></div>
                    <div className={styles.barLabel}>{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.activityCard}>
            <h3 className={styles.chartTitle}>Recent Activity</h3>
            <div className={styles.activityList}>
              <div className={styles.activityItem}>
                <div className={styles.activityDot}></div>
                <div>
                  <div className={styles.activityTitle}>New order received</div>
                  <div className={styles.activityTime}>2 minutes ago</div>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityDot}></div>
                <div>
                  <div className={styles.activityTitle}>Payment processed</div>
                  <div className={styles.activityTime}>15 minutes ago</div>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityDot}></div>
                <div>
                  <div className={styles.activityTitle}>New user registered</div>
                  <div className={styles.activityTime}>1 hour ago</div>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityDot}></div>
                <div>
                  <div className={styles.activityTitle}>Report generated</div>
                  <div className={styles.activityTime}>3 hours ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
