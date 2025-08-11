import React from 'react';
import { Search, Bell, Settings, Moon, Sun, User, Menu } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useResponsive } from '@/hooks/use-responsive';

export const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { isMobile, isTablet } = useResponsive();

  return (
    <header className="sticky top-0 z-40 h-16 bg-dashboard-header border-b border-border backdrop-blur-sm">
      <div className={cn(
        "flex h-full items-center justify-between",
        isMobile ? "px-1" : isTablet ? "px-2" : "px-3"
      )}>
        {/* Search - Hide on mobile */}
        <div className={cn(
          "flex items-center space-x-4 flex-1",
          isMobile ? "max-w-[120px]" : isTablet ? "max-w-xs" : "max-w-md"
        )}>
          {!isMobile && (
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder={isTablet ? "Search..." : "Search employees, shops, routes..."}
                className="pl-10 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          )}
        </div>

        {/* Header Actions */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground hover:text-foreground"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative text-muted-foreground hover:text-foreground">
            <Bell className="w-4 h-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-destructive">
              3
            </Badge>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Admin" />
                  <AvatarFallback className="bg-primary text-primary-foreground">AD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Admin User</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    admin@fieldtracker.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};