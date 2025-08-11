import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Navigation, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const mockEmployees = [
  { id: 1, name: 'John Doe', location: 'Shop #12, Main Street', status: 'active', lastSeen: '2 min ago' },
  { id: 2, name: 'Jane Smith', location: 'Shop #8, Park Avenue', status: 'break', lastSeen: '15 min ago' },
  { id: 3, name: 'Mike Johnson', location: 'Shop #25, Oak Road', status: 'active', lastSeen: '1 min ago' },
  { id: 4, name: 'Sarah Wilson', location: 'En route to Shop #30', status: 'traveling', lastSeen: '5 min ago' },
];

export const LiveTrackingMap: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-success';
      case 'break':
        return 'bg-warning';
      case 'traveling':
        return 'bg-info';
      default:
        return 'bg-muted';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'break':
        return 'On Break';
      case 'traveling':
        return 'Traveling';
      default:
        return 'Unknown';
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 sm:pb-3 px-1 sm:px-2 pt-3 sm:pt-4">
        <CardTitle className="text-base sm:text-lg font-semibold flex items-center">
          <MapPin className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          <span className="truncate">Live Employee Tracking</span>
        </CardTitle>
        <Badge variant="outline" className="text-xs whitespace-nowrap ml-2">
          4 Active
        </Badge>
      </CardHeader>
      <CardContent className="px-1 sm:px-2 pb-3 sm:pb-4">
        {/* Map Placeholder */}
        <div className="bg-muted/30 rounded-lg h-40 sm:h-48 md:h-64 mb-3 sm:mb-4 flex items-center justify-center border-2 border-dashed border-border">
          <div className="text-center p-2">
            <MapPin className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-muted-foreground mx-auto mb-1 sm:mb-2" />
            <p className="text-xs sm:text-sm text-muted-foreground">Interactive Map View</p>
            <p className="text-xs text-muted-foreground hidden sm:block">Real-time employee locations will appear here</p>
          </div>
        </div>

        {/* Employee List */}
        <div className="space-y-2 sm:space-y-3">
          <h4 className="text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3">Current Field Status</h4>
          {mockEmployees.map((employee) => (
            <div
              key={employee.id}
              className="flex items-center justify-between p-2 sm:p-3 bg-accent/50 rounded-lg hover:bg-accent transition-colors duration-200"
            >
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full flex-shrink-0 ${getStatusColor(employee.status)}`} />
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-foreground truncate">{employee.name}</p>
                  <p className="text-xs text-muted-foreground flex items-center truncate">
                    <Navigation className="w-3 h-3 mr-1 flex-shrink-0" />
                    <span className="truncate">{employee.location}</span>
                  </p>
                </div>
              </div>
              <div className="text-right ml-2 flex-shrink-0">
                <Badge variant="outline" className="text-xs mb-1 whitespace-nowrap">
                  {getStatusLabel(employee.status)}
                </Badge>
                <p className="text-xs text-muted-foreground flex items-center justify-end">
                  <Clock className="w-3 h-3 mr-1" />
                  {employee.lastSeen}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};