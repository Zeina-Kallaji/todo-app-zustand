import React from 'react'

// Icon components with sky-blue theme
export const CheckCircleIcon = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

export const ClockIcon = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

export const ListIcon = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
)

export const PlusIcon = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

export const EditIcon = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)

export const TrashIcon = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
)

export const CheckIcon = ({ size = 16, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export const EmptyStateIcon = ({ type = 'default', size = 80 }) => {
  if (type === 'completed') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="45" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="2" />
        <path
          d="M30 50L42 62L70 34"
          stroke="#38BDF8"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (type === 'incomplete') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="45" fill="#E0F2FE" />
        <circle cx="50" cy="35" r="3" fill="#38BDF8" />
        <circle cx="50" cy="50" r="3" fill="#38BDF8" />
        <circle cx="50" cy="65" r="3" fill="#38BDF8" />
        <path
          d="M35 30L80 30M35 50L80 50M35 65L80 65"
          stroke="#BAE6FD"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="20" y="15" width="60" height="70" rx="4" fill="#F4FAFF" stroke="#38BDF8" strokeWidth="2" />
      <line x1="30" y1="30" x2="70" y2="30" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="45" x2="70" y2="45" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="60" x2="70" y2="60" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="50" r="35" stroke="#E0F2FE" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

export const HeaderIllustration = () => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background circle */}
    <circle cx="50" cy="50" r="48" fill="#F4FAFF" />
    
    {/* Clipboard */}
    <rect x="30" y="20" width="40" height="55" rx="3" fill="white" stroke="#38BDF8" strokeWidth="2" />
    
    {/* Clip */}
    <rect x="42" y="15" width="16" height="8" rx="2" fill="#38BDF8" />
    
    {/* Checkmark 1 */}
    <circle cx="38" cy="35" r="3" stroke="#38BDF8" strokeWidth="2" />
    <line x1="45" y1="35" x2="62" y2="35" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" />
    
    {/* Checkmark 2 - completed */}
    <circle cx="38" cy="48" r="3" fill="#38BDF8" />
    <path d="M36 48L37.5 49.5L40 47" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="45" y1="48" x2="62" y2="48" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" />
    
    {/* Checkmark 3 */}
    <circle cx="38" cy="61" r="3" stroke="#38BDF8" strokeWidth="2" />
    <line x1="45" y1="61" x2="62" y2="61" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" />
    
    {/* Decorative stars */}
    <circle cx="75" cy="30" r="2" fill="#38BDF8" opacity="0.3" />
    <circle cx="82" cy="50" r="1.5" fill="#38BDF8" opacity="0.3" />
    <circle cx="25" cy="40" r="1.5" fill="#38BDF8" opacity="0.3" />
  </svg>
)
