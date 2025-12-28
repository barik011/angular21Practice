import { Routes } from '@angular/router';
import { SignalEx } from './components/signal-ex/signal-ex';
import { NgForEx } from './components/ng-for-ex/ng-for-ex';
import { NgIfEx } from './components/ng-if-ex/ng-if-ex';
import { ApiEx } from './components/api-ex/api-ex';
import { NgClassEx } from './components/ng-class-ex/ng-class-ex';
import { NgStyleEx } from './components/ng-style-ex/ng-style-ex';
import { BusVendorMaster } from './components/bus-booking-master/bus-booking-master';
import { EnquiryMaster } from './components/enquiry-master/enquiry-master';
import { FeesTracking } from './components/fees-tracking/fees-tracking';
import { EmployeeApp } from './components/employee-app/employee-app';
import { EmployeeReactApp } from './components/employee-react-app/employee-react-app';

export const routes: Routes = [
    {
        path:'employee-react-app',
        component:EmployeeReactApp
    },
    {
        path:'employee-app',
        component:EmployeeApp
    },
    {
        path:'fee-tracking',
        component:FeesTracking
    },
    {
        path:'enquiry-master',
        component:EnquiryMaster
    },
    {
        path:'bus-booking-master',
        component:BusVendorMaster
    },
     {
        path:'api',
        component:ApiEx
    },
    {
        path:'signal',
        component:SignalEx
    },
    {
        path:'ng-for',
        component:NgForEx
    },
    {
        path:'ng-if',
        component:NgIfEx
    },
    {
        path:'ng-class',
        component:NgClassEx
    },
    {
        path:'ng-style',
        component:NgStyleEx
    }
];
