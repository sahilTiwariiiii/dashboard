import * as React from "react"

const MOBILE_BREAKPOINT = 768
const TABLET_MAX_BREAKPOINT = 1024

type DeviceType = 'mobile' | 'tablet' | 'desktop'

export function useResponsive() {
  const [deviceType, setDeviceType] = React.useState<DeviceType | undefined>(undefined)

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < MOBILE_BREAKPOINT) {
        setDeviceType('mobile')
      } else if (width >= MOBILE_BREAKPOINT && width < TABLET_MAX_BREAKPOINT) {
        setDeviceType('tablet')
      } else {
        setDeviceType('desktop')
      }
    }

    // Initial check
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    deviceType,
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop',
    isSmallScreen: deviceType === 'mobile' || deviceType === 'tablet'
  }
}