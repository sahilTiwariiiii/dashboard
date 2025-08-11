import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { LiveTrackingMap } from '@/components/dashboard/LiveTrackingMap';
import { RevenueChart } from '@/components/dashboard/RevenueChart';
import { EmployeeTable } from '@/components/dashboard/EmployeeTable';
import { 
  Users, 
  MapPin, 
  DollarSign, 
  TrendingUp, 
  Building2,
  UserCheck,
  Clock,
  Target
} from 'lucide-react';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-3 sm:space-y-4 animate-fade-in">
        {/* Page Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Field Employee Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time tracking and management of field operations
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2 lg:gap-3">
          <MetricCard
            title="Active Employees"
            value="24"
            change={{
              value: "+12%",
              trend: "up",
              label: "from last month"
            }}
            icon={Users}
            iconColor="primary"
          />
          <MetricCard
            title="Shops Visited Today"
            value="156"
            change={{
              value: "+8%",
              trend: "up",
              label: "vs yesterday"
            }}
            icon={Building2}
            iconColor="success"
          />
          <MetricCard
            title="Today's Revenue"
            value="₹2,84,500"
            change={{
              value: "+15%",
              trend: "up",
              label: "vs yesterday"
            }}
            icon={DollarSign}
            iconColor="warning"
          />
          <MetricCard
            title="Attendance Rate"
            value="96%"
            change={{
              value: "+2%",
              trend: "up",
              label: "this week"
            }}
            icon={UserCheck}
            iconColor="success"
          />
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2 lg:gap-3">
          <MetricCard
            title="Average Visit Time"
            value="12.5 min"
            change={{
              value: "-5%",
              trend: "down",
              label: "more efficient"
            }}
            icon={Clock}
            iconColor="info"
          />
          <MetricCard
            title="Route Completion"
            value="87%"
            change={{
              value: "+3%",
              trend: "up",
              label: "vs last week"
            }}
            icon={Target}
            iconColor="primary"
          />
          <MetricCard
            title="Total Distance"
            value="1,245 km"
            change={{
              value: "+7%",
              trend: "up",
              label: "today"
            }}
            icon={MapPin}
            iconColor="warning"
          />
          <MetricCard
            title="Performance Score"
            value="94%"
            change={{
              value: "+6%",
              trend: "up",
              label: "this month"
            }}
            icon={TrendingUp}
            iconColor="success"
          />
        </div>

        {/* Charts and Maps Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-1.5 sm:gap-2 lg:gap-3">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <LiveTrackingMap />
          </div>
          <div className="lg:col-span-3 order-1 lg:order-2">
            <RevenueChart />
          </div>
        </div>

        {/* Employee Table */}
        <div className="grid grid-cols-1 gap-1.5 sm:gap-2 lg:gap-3">
          <EmployeeTable />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
