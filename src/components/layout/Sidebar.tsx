import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  MapPin, 
  TrendingUp, 
  Settings, 
  UserCheck, 
  Route,
  DollarSign,
  BarChart3,
  FileText,
  Shield,
  MessageSquare,
  Calendar,
  Map,
  ChevronLeft,
  Building2,
  Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useResponsive } from '@/hooks/use-responsive';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface SidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

const navigation = [
  {
    name: 'Dashboard',
    href: '#',
    icon: LayoutDashboard,
    current: true,
  },
  {
    name: 'Field Employees',
    href: '#',
    icon: Users,
    current: false,
  },
  {
    name: 'Live Tracking',
    href: '#',
    icon: MapPin,
    current: false,
  },
  {
    name: 'Routes & Areas',
    href: '#',
    icon: Route,
    current: false,
  },
  {
    name: 'Shop Management',
    href: '#',
    icon: Building2,
    current: false,
  },
  {
    name: 'Attendance',
    href: '#',
    icon: UserCheck,
    current: false,
  },
  {
    name: 'Revenue Tracking',
    href: '#',
    icon: DollarSign,
    current: false,
  },
  {
    name: 'Analytics',
    href: '#',
    icon: BarChart3,
    current: false,
  },
  {
    name: 'Reports',
    href: '#',
    icon: FileText,
    current: false,
  },
  {
    name: 'Map View',
    href: '#',
    icon: Map,
    current: false,
  },
];

const bottomNavigation = [
  {
    name: 'Settings',
    href: '#',
    icon: Settings,
  },
  {
    name: 'Admin Panel',
    href: '#',
    icon: Shield,
  },
];

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, onCollapse }) => {
  const { isMobile, isTablet } = useResponsive();
  
  // Handle responsive behavior
  useEffect(() => {
    if (isMobile) {
      onCollapse(true);
    }
  }, [isMobile, onCollapse]);

  // Mobile sidebar with sheet component
  if (isMobile) {
    return (
      <>
        <Button 
          variant="ghost" 
          size="icon" 
          className="fixed top-3 left-1 z-50 md:hidden"
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64 bg-dashboard-sidebar border-r border-border">
              <div className="flex flex-col h-full">
                <div className="flex h-16 items-center justify-between px-4 border-b border-border">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold text-foreground">FieldTracker</span>
                  </div>
                </div>
                <MobileSidebarContent />
              </div>
            </SheetContent>
          </Sheet>
        </Button>
      </>
    );
  }

  // Desktop and tablet sidebar
  return (
    <div className={cn(
      "fixed inset-y-0 left-0 z-50 flex flex-col bg-dashboard-sidebar border-r border-border transition-all duration-300 ease-smooth",
      collapsed ? "w-16" : "w-64",
      isMobile && "hidden"
    )}>
      {/* Logo and Collapse Button */}
      <div className="flex h-16 items-center justify-between px-4 border-b border-border">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-foreground">FieldTracker</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onCollapse(!collapsed)}
          className="text-muted-foreground hover:text-foreground hover:bg-accent"
        >
          <ChevronLeft className={cn(
            "w-4 h-4 transition-transform duration-200",
            collapsed && "rotate-180"
          )} />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group relative",
                  item.current
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                <item.icon className={cn(
                  "flex-shrink-0 w-5 h-5",
                  collapsed ? "mx-auto" : "mr-3"
                )} />
                {!collapsed && (
                  <span className="truncate">{item.name}</span>
                )}
                {collapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                    {item.name}
                  </div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t border-border p-2">
        <ul className="space-y-1">
          {bottomNavigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group relative text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                <item.icon className={cn(
                  "flex-shrink-0 w-5 h-5",
                  collapsed ? "mx-auto" : "mr-3"
                )} />
                {!collapsed && (
                  <span className="truncate">{item.name}</span>
                )}
                {collapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                    {item.name}
                  </div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Mobile sidebar content component
const MobileSidebarContent: React.FC = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                  item.current
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                <item.icon className="flex-shrink-0 w-5 h-5 mr-3" />
                <span className="truncate">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t border-border p-2">
        <ul className="space-y-1">
          {bottomNavigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-accent"
              >
                <item.icon className="flex-shrink-0 w-5 h-5 mr-3" />
                <span className="truncate">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};