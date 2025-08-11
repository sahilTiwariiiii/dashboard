import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Users, MapPin, Eye, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const employeeData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@fieldtracker.com',
    area: 'Central District',
    shopsVisited: 12,
    shopsPlanned: 15,
    revenue: 45000,
    status: 'active',
    lastUpdate: '2 min ago'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@fieldtracker.com',
    area: 'North Zone',
    shopsVisited: 8,
    shopsPlanned: 10,
    revenue: 32000,
    status: 'break',
    lastUpdate: '15 min ago'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike.johnson@fieldtracker.com',
    area: 'East Sector',
    shopsVisited: 15,
    shopsPlanned: 16,
    revenue: 58000,
    status: 'active',
    lastUpdate: '1 min ago'
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    email: 'sarah.wilson@fieldtracker.com',
    area: 'South District',
    shopsVisited: 6,
    shopsPlanned: 12,
    revenue: 28000,
    status: 'traveling',
    lastUpdate: '5 min ago'
  },
  {
    id: 5,
    name: 'David Brown',
    email: 'david.brown@fieldtracker.com',
    area: 'West Zone',
    shopsVisited: 11,
    shopsPlanned: 14,
    revenue: 41000,
    status: 'offline',
    lastUpdate: '2 hours ago'
  }
];

export const EmployeeTable: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-success text-success-foreground';
      case 'break':
        return 'bg-warning text-warning-foreground';
      case 'traveling':
        return 'bg-info text-info-foreground';
      case 'offline':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
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
      case 'offline':
        return 'Offline';
      default:
        return 'Unknown';
    }
  };

  const getCompletionPercentage = (visited: number, planned: number) => {
    return Math.round((visited / planned) * 100);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 sm:pb-3 px-1 sm:px-2 pt-3 sm:pt-4">
        <CardTitle className="text-base sm:text-lg font-semibold flex items-center">
          <Users className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          <span className="truncate">Today's Field Employees</span>
        </CardTitle>
        <Badge variant="outline" className="text-xs whitespace-nowrap ml-2">
          5 Employees
        </Badge>
      </CardHeader>
      <CardContent className="px-1 sm:px-2 pb-3 sm:pb-4">
        {/* Mobile Card View */}
        <div className="block sm:hidden space-y-3">
          {employeeData.map((employee) => (
            <div key={employee.id} className="border rounded-lg p-1.5 hover:bg-accent/50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`/placeholder-avatar-${employee.id}.jpg`} alt={employee.name} />
                    <AvatarFallback className="text-xs">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-foreground">{employee.name}</p>
                    <div className="flex items-center text-xs">
                      <MapPin className="w-3 h-3 mr-1 text-muted-foreground" />
                      <span className="truncate">{employee.area}</span>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className={`${getStatusColor(employee.status)} text-xs`}>
                  {getStatusLabel(employee.status)}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                <div>
                  <p className="text-muted-foreground">Progress</p>
                  <div className="flex items-center justify-between mt-1">
                    <span>{employee.shopsVisited}/{employee.shopsPlanned}</span>
                    <span className="font-medium">{getCompletionPercentage(employee.shopsVisited, employee.shopsPlanned)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5 mt-1">
                    <div 
                      className="bg-primary rounded-full h-1.5 transition-all duration-300" 
                      style={{ width: `${getCompletionPercentage(employee.shopsVisited, employee.shopsPlanned)}%` }}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground">Revenue</p>
                  <p className="font-medium mt-1">₹{employee.revenue.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Updated {employee.lastUpdate}</span>
                <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tablet/Desktop Table View */}
        <div className="hidden sm:block rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead className="hidden md:table-cell">Area</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">Last Update</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employeeData.map((employee) => (
                <TableRow key={employee.id} className="hover:bg-accent/50">
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`/placeholder-avatar-${employee.id}.jpg`} alt={employee.name} />
                        <AvatarFallback className="text-xs">
                          {employee.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-foreground">{employee.name}</p>
                        <p className="text-xs text-muted-foreground">{employee.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="flex items-center text-sm">
                      <MapPin className="w-3 h-3 mr-1 text-muted-foreground" />
                      {employee.area}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span>{employee.shopsVisited}/{employee.shopsPlanned} shops</span>
                        <span className="font-medium">{getCompletionPercentage(employee.shopsVisited, employee.shopsPlanned)}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div 
                          className="bg-primary rounded-full h-1.5 transition-all duration-300" 
                          style={{ width: `${getCompletionPercentage(employee.shopsVisited, employee.shopsPlanned)}%` }}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm font-medium">₹{employee.revenue.toLocaleString()}</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={getStatusColor(employee.status)}>
                      {getStatusLabel(employee.status)}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <span className="text-xs text-muted-foreground">{employee.lastUpdate}</span>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MapPin className="mr-2 h-4 w-4" />
                          Track Location
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};