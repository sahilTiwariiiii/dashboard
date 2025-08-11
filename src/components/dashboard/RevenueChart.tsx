import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { DollarSign, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const revenueData = [
  { month: 'Jan', cash: 12000, cheque: 8000, online: 15000 },
  { month: 'Feb', cash: 15000, cheque: 9000, online: 18000 },
  { month: 'Mar', cash: 11000, cheque: 7000, online: 22000 },
  { month: 'Apr', cash: 18000, cheque: 12000, online: 25000 },
  { month: 'May', cash: 16000, cheque: 10000, online: 28000 },
  { month: 'Jun', cash: 20000, cheque: 14000, online: 32000 },
];

export const RevenueChart: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 sm:pb-3 px-1 sm:px-2 pt-3 sm:pt-4">
        <CardTitle className="text-base sm:text-lg font-semibold flex items-center">
          <DollarSign className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          <span className="truncate">Revenue Collection</span>
        </CardTitle>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-xs whitespace-nowrap">
            <TrendingUp className="w-3 h-3 mr-1" />
            +12.5%
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="px-1 sm:px-2 pb-3 sm:pb-4">
        <div className="h-60 sm:h-72 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={revenueData.slice(0, window.innerWidth < 640 ? 4 : 6)} 
              margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="month" 
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: window.innerWidth < 640 ? 10 : 12 }}
              />
              <YAxis 
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: window.innerWidth < 640 ? 10 : 12 }}
                width={window.innerWidth < 640 ? 30 : 40}
              />
              <Legend 
                wrapperStyle={{
                  fontSize: window.innerWidth < 640 ? '10px' : '12px',
                  paddingTop: '10px'
                }}
              />
              <Bar 
                dataKey="cash" 
                name="Cash" 
                stackId="a" 
                fill="hsl(var(--chart-tertiary))"
                radius={[0, 0, 4, 4]}
              />
              <Bar 
                dataKey="cheque" 
                name="Cheque" 
                stackId="a" 
                fill="hsl(var(--chart-secondary))"
              />
              <Bar 
                dataKey="online" 
                name="Online" 
                stackId="a" 
                fill="hsl(var(--chart-primary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">Total Cash</p>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-warning">₹92,000</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground">Total Cheque</p>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-success">₹60,000</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground">Total Online</p>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-primary">₹140,000</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};