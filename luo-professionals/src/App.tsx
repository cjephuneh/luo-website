import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/Auth/LoginPage'
import RegisterPage from './pages/Auth/RegisterPage'
import DashboardPage from './pages/Dashboard/DashboardPage'
import ForumsPage from './pages/Forums/ForumsPage'
import PolicyHubPage from './pages/PolicyHub/PolicyHubPage'
import FundingPage from './pages/Funding/FundingPage'
import EventsPage from './pages/Events/EventsPage'
import ReportsPage from './pages/Reports/ReportsPage'
import JobsPage from './pages/Jobs/JobsPage'
import TendersPage from './pages/Tenders/TendersPage'
import AttachmentsPage from './pages/Attachments/AttachmentsPage'
import ProtectedRoute from './components/Auth/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        
        <Route path="dashboard" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
        
        <Route path="forums" element={
          <ProtectedRoute>
            <ForumsPage />
          </ProtectedRoute>
        } />
        
        <Route path="policy-hub" element={
          <ProtectedRoute>
            <PolicyHubPage />
          </ProtectedRoute>
        } />
        
        <Route path="funding" element={<FundingPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="tenders" element={<TendersPage />} />
        <Route path="attachments" element={
          <ProtectedRoute>
            <AttachmentsPage />
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  )
}

export default App
