import React from 'react';
import { RouteObject } from 'react-router-dom';
import ScanPage from '../features/warehouse/pages/ScanPage';

export const warehouseRoutes: RouteObject[] = [
  {
    path: '/warehouse',
    children: [
      {
        path: 'scan',
        element: <ScanPage />,
      },
      // Add more warehouse routes here as needed
    ],
  },
];

export default warehouseRoutes;
