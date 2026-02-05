import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12', 
    lg: 'h-16 w-16'
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  }

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        <Image
          src="/logo.svg"
          alt="PHAGLP Logo"
          width={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
          height={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
          className="w-full h-full object-contain"
          priority
        />
      </div>
      
      {showText && (
        <span className={`ml-2 font-bold text-blue-600 italic ${textSizes[size]}`}>
          PHAGLP
        </span>
      )}
    </Link>
  )
}
