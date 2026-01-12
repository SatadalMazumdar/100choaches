import * as React from "react"

/**
 * FirstWin Animation Component for Framer
 * 
 * INSTRUCTIONS:
 * 1. Copy this entire code
 * 2. In Framer: Insert → Code → From npm or code
 * 3. Paste and save
 * 4. Drag the component onto your canvas
 */

export default function FirstWinFramer() {
  const [activeTab, setActiveTab] = React.useState(0)
  const [particles, setParticles] = React.useState([])
  const [hoveredStep, setHoveredStep] = React.useState(null)
  
  const steps = [
    { 
        id: 1,
        icon: "📚",
        title: "First course is live", 
        desc: "Launch your curriculum",
        color: "#3B82F6",
        bgColor: "#EFF6FF",
        accentColor: "59, 130, 246",
        badge: "Course Live! 🚀",
        top: 15
    },
    { 
        id: 2,
        icon: "📅",
        title: "First session goes live", 
        desc: "Bookings rolling in",
        color: "#9333EA",
        bgColor: "#FAF5FF",
        accentColor: "147, 51, 234",
        badge: "Bookings Open! 📅",
        top: 38
    },
    { 
        id: 3,
        icon: "🛍️",
        title: "First product is listed", 
        desc: "Start selling digital goods",
        color: "#EC4899",
        bgColor: "#FDF4FF",
        accentColor: "236, 72, 153",
        badge: "First Sale! 💸",
        top: 62
    },
    { 
        id: 4,
        icon: "🎯",
        title: "First membership is running", 
        desc: "Recurring revenue starts",
        color: "#F97316",
        bgColor: "#FFF7ED",
        accentColor: "249, 115, 22",
        badge: "MRR Started! 📈",
        top: 85
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
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: 50 + (Math.random() - 0.5) * 60,
      y: steps[activeTab].top + (Math.random() - 0.5) * 20,
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
      minHeight: '400px',
      fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      overflow: 'hidden'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
        
        @keyframes breathe {
          0%, 100% { transform: translateY(-50%) scale(1); }
          50% { transform: translateY(-50%) scale(1.02); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes rotateGradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-20px) translateY(-50%); opacity: 0; }
          to { transform: translateX(8px) translateY(-50%) scale(1.05); opacity: 1; }
        }
      `}</style>
      
      {/* Animated Background Gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 30% 50%, rgba(${steps[activeTab].accentColor}, 0.08) 0%, transparent 50%)`,
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
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: `rgba(${steps[activeTab].accentColor}, 0.6)`,
            animation: `float ${particle.duration}s ease-out forwards`,
            animationDelay: `${particle.delay}s`,
            pointerEvents: 'none',
            '--tx': `${(Math.random() - 0.5) * 100}px`,
            '--ty': `${-Math.random() * 100 - 50}px`
          } as any}
        />
      ))}
      
      {/* Card Container */}
      <div style={{
        position: 'absolute',
        top: '5%',
        left: '5%',
        right: '5%',
        bottom: '5%',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(249, 250, 251, 0.98) 100%)',
        borderRadius: '32px',
        boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        border: '2px solid rgba(255, 255, 255, 0.9)',
        overflow: 'visible',
        padding: '12px'
      }}>
        
        {/* Ambient Glow for Active/Hovered Step */}
        {steps.map((step, idx) => {
          const isActive = idx === activeTab
          const isHovered = hoveredStep === idx
          if (!isActive && !isHovered) return null
          
          return (
            <div
              key={`glow-${step.id}`}
              style={{
                position: 'absolute',
                left: '8%',
                top: `${step.top}%`,
                transform: 'translateY(-50%)',
                width: isActive ? '80px' : '60px',
                height: isActive ? '80px' : '60px',
                borderRadius: '50%',
                background: isActive 
                  ? `radial-gradient(circle, rgba(${step.accentColor}, 0.15) 0%, transparent 70%)`
                  : `radial-gradient(circle, rgba(${step.accentColor}, 0.08) 0%, transparent 70%)`,
                animation: isActive ? 'breathe 3s ease-in-out infinite, glow 2s ease-in-out infinite' : 'glow 2s ease-in-out infinite',
                pointerEvents: 'none',
                transition: 'all 0.5s ease',
                opacity: isActive ? 1 : 0.7
              }}
            />
          )
        })}
        
        {/* Steps */}
        {steps.map((step, idx) => {
          const isActive = idx === activeTab
          const isPast = idx < activeTab
          const isHovered = hoveredStep === idx
          
          return (
            <div
              key={step.id}
              onMouseEnter={() => setHoveredStep(idx)}
              onMouseLeave={() => setHoveredStep(null)}
              style={{
                position: 'absolute',
                left: '12%',
                right: '10%',
                top: `${step.top}%`,
                transform: `translateY(-50%) ${
                  isActive 
                    ? 'translateX(8px) scale(1.05)' 
                    : isHovered 
                      ? 'translateX(4px) scale(1.02)' 
                      : 'scale(1)'
                }`,
                display: 'flex',
                alignItems: 'center',
                padding: '16px 20px',
                borderRadius: '16px',
                background: isActive 
                  ? `linear-gradient(135deg, rgba(${step.accentColor}, 0.03) 0%, rgba(255, 255, 255, 0.5) 100%)` 
                  : isHovered 
                    ? `linear-gradient(135deg, rgba(${step.accentColor}, 0.02) 0%, rgba(255, 255, 255, 0.3) 100%)` 
                    : 'transparent',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                opacity: isActive ? 1 : isHovered ? 0.85 : isPast ? 0.65 : 0.5,
                animation: isActive ? 'slideIn 0.6s ease-out' : 'none',
                cursor: 'pointer',
                boxShadow: isHovered && !isActive ? `0 4px 12px rgba(${step.accentColor}, 0.1)` : 'none'
              }}
            >
              {/* Icon Box */}
              <div style={{
                position: 'relative',
                marginRight: '16px',
                flexShrink: 0
              }}>
                {/* Rotating Border for Active */}
                {isActive && (
                  <div style={{
                    position: 'absolute',
                    top: '-4px',
                    left: '-4px',
                    right: '-4px',
                    bottom: '-4px',
                    borderRadius: '16px',
                    background: `conic-gradient(from 0deg, ${step.color}, rgba(${step.accentColor}, 0.3), ${step.color})`,
                    animation: 'rotateGradient 3s linear infinite',
                    opacity: 0.6
                  }} />
                )}
                
                <div style={{
                  position: 'relative',
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: isActive 
                    ? `linear-gradient(135deg, ${step.bgColor} 0%, rgba(255, 255, 255, 0.9) 100%)`
                    : isHovered 
                      ? `linear-gradient(135deg, ${step.bgColor} 0%, rgba(255, 255, 255, 0.95) 100%)`
                      : isPast ? '#DCFCE7' : 'rgba(241, 245, 249, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isActive 
                    ? step.color 
                    : isHovered 
                      ? step.color 
                      : isPast ? '#22C55E' : '#94A3B8',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  boxShadow: isActive 
                    ? `0 12px 24px -6px rgba(${step.accentColor}, 0.4), 0 4px 12px -2px rgba(0, 0, 0, 0.1)` 
                    : isHovered 
                      ? `0 8px 16px -4px rgba(${step.accentColor}, 0.25), 0 2px 8px -1px rgba(0, 0, 0, 0.08)`
                      : isPast ? '0 4px 8px -2px rgba(34, 197, 94, 0.2)' : 'none',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transform: isActive 
                    ? 'scale(1.1) rotateY(0deg)' 
                    : isHovered 
                      ? 'scale(1.08) rotateZ(5deg)' 
                      : isPast ? 'rotateY(360deg)' : 'scale(1)',
                  border: isActive 
                    ? `2px solid rgba(${step.accentColor}, 0.2)` 
                    : isHovered 
                      ? `2px solid rgba(${step.accentColor}, 0.15)` 
                      : 'none'
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
                      borderRadius: '14px',
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 2s ease-in-out infinite',
                      pointerEvents: 'none'
                    }} />
                  )}
                </div>
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0, marginRight: '16px' }}>
                <h3 style={{
                  margin: 0,
                  fontSize: isActive ? '18px' : isHovered ? '17px' : '16px',
                  fontWeight: isActive ? '600' : isHovered ? '600' : '500',
                  color: isActive 
                    ? '#0F172A' 
                    : isHovered 
                      ? '#475569' 
                      : isPast ? '#64748B' : '#94A3B8',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  letterSpacing: isActive ? '-0.02em' : '0',
                  textShadow: isActive ? '0 1px 2px rgba(0, 0, 0, 0.05)' : 'none'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  margin: '6px 0 0 0',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: isActive ? '#64748B' : isHovered ? '#94A3B8' : 'transparent',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  opacity: isActive ? 1 : isHovered ? 0.7 : 0,
                  transform: (isActive || isHovered) ? 'translateY(0)' : 'translateY(-8px)',
                  transitionDelay: (isActive || isHovered) ? '0.15s' : '0s'
                }}>
                  {step.desc}
                </p>
              </div>

            </div>
          )
        })}
        
        {/* Decorative Corner Elements */}
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(${steps[activeTab].accentColor}, 0.1) 0%, transparent 70%)`,
          transition: 'background 0.8s ease'
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '16px',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(${steps[activeTab].accentColor}, 0.08) 0%, transparent 70%)`,
          transition: 'background 0.8s ease'
        }} />
        
        {/* Success Confetti on Last Step */}
        {activeTab === steps.length - 1 && (
          <>
            {[...Array(6)].map((_, i) => (
              <div
                key={`confetti-${i}`}
                style={{
                  position: 'absolute',
                  top: '30%',
                  left: `${20 + i * 12}%`,
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: i % 2 === 0 ? '#F59E0B' : '#EC4899',
                  animation: `float ${1.5 + i * 0.2}s ease-out infinite`,
                  animationDelay: `${i * 0.15}s`,
                  opacity: 0.6,
                  '--tx': `${(i % 2 === 0 ? 1 : -1) * 30}px`,
                  '--ty': `${-80 - i * 10}px`
                } as any}
              />
            ))}
          </>
        )}
      </div>

    </div>
  )
}
