import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-500" />
            <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">EcoFund</span>
          </Link>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="px-4 py-2 rounded-full text-green-600 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 font-medium transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 font-medium transition-colors">
              Start Campaign
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;