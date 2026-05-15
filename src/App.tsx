/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Footer } from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import LeadPopup from './components/LeadPopup';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CashFlowRecovery from './pages/CashFlowRecovery';
import FinanceAutomation from './pages/FinanceAutomation';
import MonthEndClose from './pages/MonthEndClose';
import WorkflowCleanup from './pages/WorkflowCleanup';
import RetainerModel from './pages/RetainerModel';
import PerformanceModel from './pages/PerformanceModel';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/cashflow-recovery" element={<CashFlowRecovery />} />
            <Route path="/services/finance-automation" element={<FinanceAutomation />} />
            <Route path="/services/monthend-close" element={<MonthEndClose />} />
            <Route path="/services/workflow-cleanup" element={<WorkflowCleanup />} />
            <Route path="/models/retainer" element={<RetainerModel />} />
            <Route path="/models/performance" element={<PerformanceModel />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Persistent UI Elements */}
        <WhatsAppButton />
        <LeadPopup />
      </div>
    </Router>
  );
}
