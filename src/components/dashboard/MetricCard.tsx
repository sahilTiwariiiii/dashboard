import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string;
    trend: 'up' | 'down' | 'neutral';
    label: string;
  };
  icon: LucideIcon;
  iconColor?: string;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  icon: Icon,
  iconColor = 'primary',
  className
}) => {
  const getChangeColor = (trend: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return 'text-success';
      case 'down':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  const getIconColorClass = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary bg-primary/10';
      case 'success':
        return 'text-success bg-success/10';
      case 'warning':
        return 'text-warning bg-warning/10';
      case 'destructive':
        return 'text-destructive bg-destructive/10';
      default:
        return 'text-primary bg-primary/10';
    }
  };

  return (
    <Card className={cn("transition-all duration-200 hover:shadow-card", className)}>
      <CardContent className="px-1 py-3 sm:px-2 sm:py-4 md:px-3 md:py-5">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-xs sm:text-sm font-medium text-muted-foreground">
              {title}
            </p>
            <div className="flex items-center flex-wrap gap-1 sm:space-x-2 mt-1 sm:mt-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                {value}
              </h3>
              {change && (
                <div className={cn(
                  "flex items-center text-xs font-medium",
                  getChangeColor(change.trend)
                )}>
                  <span>{change.value}</span>
                </div>
              )}
            </div>
            {change && (
              <p className="text-xs text-muted-foreground mt-0.5 sm:mt-1">
                {change.label}
              </p>
            )}
          </div>
          <div className={cn(
            "flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-lg",
            getIconColorClass(iconColor)
          )}>
            <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};