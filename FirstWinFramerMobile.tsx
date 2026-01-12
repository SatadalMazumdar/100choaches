import * as React from "react"

/**
 * FirstWin Animation Component for Mobile - Optimized for Framer
 * 
 * INSTRUCTIONS:
 * 1. Copy this entire code
 * 2. In Framer: Insert → Code → From npm or code
 * 3. Paste and save
 * 4. Drag the component onto your canvas
 * 5. Best for mobile/small screens (320px - 768px)
 */

export default function FirstWinFramerMobile() {
  const [activeTab, setActiveTab] = React.useState(0)
  const [particles, setParticles] = React.useState([])
  
  const steps = [
    { 
        id: 1,
        icon: "📚",
        title: "Course goes live", 
        desc: "Launch your curriculum",
        color: "#3B82F6",
        bgColor: "#EFF6FF",
        accentColor: "59, 130, 246",
        badge: "Course Live! 🚀"
    },
    { 
        id: 2,
        icon: "📅",
        title: "First session booked", 
        desc: "Bookings rolling in",
        color: "#9333EA",
        bgColor: "#FAF5FF",
        accentColor: "147, 51, 234",
        badge: "Bookings Open! 📅"
    },
    { 
        id: 3,
        icon: "🛍️",
        title: "Product listed", 
        desc: "Start selling digital goods",
        color: "#EC4899",
        bgColor: "#FDF4FF",
        accentColor: "236, 72, 153",
        badge: "First Sale! 💸"
    },
    { 
        id: 4,
        icon: "🎯",
        title: "Membership active", 
        desc: "Recurring revenue starts",
        color: "#F97316",
        bgColor: "#FFF7ED",
        accentColor: "249, 115, 22",
        badge: "MRR Started! 📈"
    }
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % steps.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])
  
  React.useEffect(() => {
    // Generate particles when active tab changes
    const newParticles = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: 30 + Math.random() * 40,
      y: 20 + Math.random() * 60,
      delay: i * 0.1,
      duration: 1.5 + Math.random() * 0.5
    }))
    setParticles(newParticles)
    
    const timer = setTimeout(() => setParticles([]), 2000)
    return () => clearTimeout(timer)
  }, [activeTab])

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      minHeight: '500px',
      fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      overflow: 'hidden',
      padding: '16px'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        
        @keyframes pulse-mobile {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.15); }
        }
        
        @keyframes float-mobile {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes shimmer-mobile {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes glow-mobile {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>
      
      {/* Animated Background Gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 50% 30%, rgba(${steps[activeTab].accentColor}, 0.06) 0%, transparent 60%)`,
        transition: 'background 1s ease',
        pointerEvents: 'none'
      }} />
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            background: `rgba(${steps[activeTab].accentColor}, 0.6)`,
            animation: `float-mobile ${particle.duration}s ease-out forwards`,
            animationDelay: `${particle.delay}s`,
            pointerEvents: 'none',
            '--tx': `${(Math.random() - 0.5) * 60}px`,
            '--ty': `${-Math.random() * 80 - 40}px`
          } as any}
        />
      ))}
      
      {/* Card Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(249, 250, 251, 0.98) 100%)',
        borderRadius: '24px',
        boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        border: '2px solid rgba(255, 255, 255, 0.9)',
        padding: '20px 16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
      }}>
        
        {/* Steps */}
        {steps.map((step, idx) => {
          const isActive = idx === activeTab
          const isPast = idx < activeTab
          
          return (
            <div
              key={step.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px',
                borderRadius: '16px',
                background: isActive ? `linear-gradient(135deg, rgba(${step.accentColor}, 0.04) 0%, rgba(255, 255, 255, 0.5) 100%)` : 'transparent',
                transform: isActive ? 'scale(1.02)' : 'scale(1)',
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                opacity: isActive ? 1 : isPast ? 0.65 : 0.5,
                animation: isActive ? 'slideUp 0.6s ease-out' : 'none',
                marginBottom: idx < steps.length - 1 ? '8px' : '0'
              }}
            >
              {/* Ambient Glow for Active */}
              {isActive && (
                <div style={{
                  position: 'absolute',
                  left: '8px',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, rgba(${step.accentColor}, 0.12) 0%, transparent 70%)`,
                  animation: 'glow-mobile 2s ease-in-out infinite',
                  pointerEvents: 'none'
                }} />
              )}
              
              {/* Icon Box */}
              <div style={{
                position: 'relative',
                marginRight: '14px',
                flexShrink: 0
              }}>
                <div style={{
                  position: 'relative',
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: isActive 
                    ? `linear-gradient(135deg, ${step.bgColor} 0%, rgba(255, 255, 255, 0.9) 100%)`
                    : isPast ? '#DCFCE7' : 'rgba(241, 245, 249, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isActive ? step.color : isPast ? '#22C55E' : '#94A3B8',
                  fontSize: '22px',
                  boxShadow: isActive 
                    ? `0 8px 16px -4px rgba(${step.accentColor}, 0.3), 0 2px 8px -1px rgba(0, 0, 0, 0.1)` 
                    : isPast ? '0 2px 6px -1px rgba(34, 197, 94, 0.2)' : 'none',
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transform: isActive ? 'scale(1.08)' : 'scale(1)',
                  border: isActive ? `2px solid rgba(${step.accentColor}, 0.2)` : 'none'
                }}>
                  {isPast ? '✓' : step.icon}
                  
                  {/* Shimmer Effect for Active */}
                  {isActive && (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '12px',
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer-mobile 2s ease-in-out infinite',
                      pointerEvents: 'none'
                    }} />
                  )}
                </div>
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{
                  margin: 0,
                  fontSize: isActive ? '16px' : '15px',
                  fontWeight: isActive ? '600' : '500',
                  color: isActive 
                    ? '#0F172A' 
                    : isPast ? '#64748B' : '#94A3B8',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  lineHeight: '1.4'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  margin: '4px 0 0 0',
                  fontSize: '12px',
                  fontWeight: '400',
                  color: isActive ? '#64748B' : 'transparent',
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(-4px)',
                  transitionDelay: isActive ? '0.15s' : '0s',
                  lineHeight: '1.4'
                }}>
                  {step.desc}
                </p>
              </div>

              {/* Active Indicator - Smaller for mobile */}
              {isActive && (
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${step.color}, rgba(${step.accentColor}, 0.8))`,
                  boxShadow: `0 0 10px rgba(${step.accentColor}, 0.5)`,
                  animation: 'pulse-mobile 2s infinite',
                  flexShrink: 0,
                  marginLeft: '8px'
                }} />
              )}
            </div>
          )
        })}
        
        {/* Progress Indicator at Bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '6px',
          marginTop: '16px',
          paddingTop: '12px',
          borderTop: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
          {steps.map((step, idx) => (
            <div
              key={`progress-${step.id}`}
              style={{
                width: idx === activeTab ? '24px' : '6px',
                height: '6px',
                borderRadius: '3px',
                background: idx === activeTab 
                  ? `linear-gradient(90deg, ${step.color}, rgba(${step.accentColor}, 0.6))`
                  : idx < activeTab 
                    ? '#22C55E' 
                    : 'rgba(203, 213, 225, 0.4)',
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                boxShadow: idx === activeTab 
                  ? `0 2px 6px rgba(${step.accentColor}, 0.3)`
                  : 'none'
              }}
            />
          ))}
        </div>
        
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(${steps[activeTab].accentColor}, 0.08) 0%, transparent 70%)`,
          transition: 'background 0.8s ease',
          pointerEvents: 'none'
        }} />
      </div>
    </div>
  )
}
