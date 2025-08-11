import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useResponsive } from '@/hooks/use-responsive';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { isMobile, isTablet, isSmallScreen } = useResponsive();
  
  // Auto-collapse sidebar on small screens
  useEffect(() => {
    if (isSmallScreen) {
      setSidebarCollapsed(true);
    }
  }, [isSmallScreen]);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onCollapse={setSidebarCollapsed} 
      />
      <div className={cn(
        "transition-all duration-300 ease-smooth",
        isMobile ? "ml-0" : (sidebarCollapsed ? "ml-16" : "ml-64")
      )}>
        <Header />
        <main className={cn(
          "transition-all duration-300",
          isMobile ? "px-1 py-3" : isTablet ? "px-2 py-4" : "px-3 py-6"
        )}>
          {children}
        </main>
      </div>
    </div>
  );
};