import React, { useState } from 'react';
import { 
  ShieldAlert, Vote, Map as MapIcon, Scale, Bell, Plus, 
  ChevronRight, AlertCircle, Home, Search, Lock, User, 
  ArrowLeft, Navigation, FileText, ShieldCheck, Fingerprint, 
  Key, EyeOff, History, PhoneCall 
} from 'lucide-react';

const App = () => {
  const [view, setView] = useState('home'); 
  const [reportStep, setReportStep] = useState(1);
  const [isEncrypted, setIsEncrypted] = useState(true);

  const Header = ({ title, subtitle, showBack = false }) => (
    <div className="px-6 pt-8 pb-4 flex justify-between items-center bg-[#F8FBF8]/80 backdrop-blur-md sticky top-0 z-30">
      <div className="flex items-center space-x-3">
        {showBack && (
          <button onClick={() => setView('home')} className="p-2 -ml-2 hover:bg-green-50 rounded-full">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
        )}
        <div>
          <h1 className="text-xl font-black text-gray-900 leading-none">{title}</h1>
          <p className="text-[10px] text-green-700 font-bold tracking-widest uppercase mt-1">{subtitle}</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button className="p-2 bg-white rounded-xl border border-gray-100 shadow-sm relative">
          <Bell className="w-5 h-5 text-gray-400" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>
    </div>
  );

  const HomeView = () => (
    <div className="px-6 pb-24 space-y-6">
      <div className="bg-green-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-green-900/30">
        <div className="relative z-10">
          <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-md">
            <ShieldAlert className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-1">Evidence Vault</h2>
          <p className="text-green-100/70 text-sm max-w-[200px]">Reporting rights violations across Nigeria.</p>
          <button onClick={() => setView('report')} className="mt-6 flex items-center bg-white text-green-900 px-6 py-3 rounded-2xl font-extrabold text-sm">
            Report Incident <Plus className="ml-2 w-4 h-4" />
          </button>
        </div>
        <Scale className="absolute -right-8 -bottom-8 w-48 h-48 text-white opacity-5 rotate-12" />
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-gray-800 flex items-center"><Navigation className="w-4 h-4 mr-2 text-green-600" /> Regional Pulse</h3>
        <div className="flex space-x-4 overflow-x-auto no-scrollbar pb-2">
          {[{ name: 'Akwa Ibom', count: '12', color: 'bg-green-50' }, { name: 'Delta', count: '28', color: 'bg-blue-50' }, { name: 'Rivers', count: '45', color: 'bg-purple-50' }].map((state) => (
            <div key={state.name} className={`flex-shrink-0 w-32 p-5 rounded-3xl ${state.color} border border-white shadow-sm`}>
              <span className="text-[10px] font-black uppercase text-gray-400">{state.name}</span>
              <p className="text-2xl font-black mt-1 text-gray-900">{state.count}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2 text-green-800">
            <Vote className="w-5 h-5" />
            <h3 className="font-bold">2027 Election Integrity</h3>
          </div>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-green-600 w-[45%]"></div>
        </div>
      </div>
    </div>
  );

  const JusticeView = () => (
    <div className="px-6 pb-24 space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
          <FileText className="text-blue-600 w-6 h-6 mb-3" />
          <h4 className="font-bold text-sm">Legal Aid</h4>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
          <Scale className="text-purple-600 w-6 h-6 mb-3" />
          <h4 className="font-bold text-sm">Legislative</h4>
        </div>
      </div>
    </div>
  );

  const ToursView = () => (
    <div className="px-6 pb-24 space-y-6">
      <div className="bg-gray-200 h-64 rounded-[2.5rem] flex items-center justify-center">
        <MapIcon className="w-12 h-12 text-gray-400" />
      </div>
      <h3 className="font-bold text-gray-800">Abandoned Projects Watch</h3>
      <div className="bg-red-50 border border-red-100 p-5 rounded-3xl">
        <h4 className="font-bold text-gray-900">Uyo-Etinan Road Project</h4>
        <p className="text-xs text-red-700 mt-1">Investigative tour requested due to site inactivity.</p>
      </div>
    </div>
  );

  const ProfileView = () => (
    <div className="px-6 pb-24 space-y-8">
      <div className="bg-gradient-to-br from-green-800 to-green-950 rounded-[2.5rem] p-8 text-white relative shadow-2xl">
        <p className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Anonymous Identity</p>
        <h2 className="text-xl font-black">Citizen_#44901</h2>
        <Lock className="absolute -right-10 top-0 w-48 h-48 text-white opacity-5" />
      </div>

      <div className="bg-white p-6 rounded-3xl border border-gray-100 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-4">
          <Lock className={`w-6 h-6 ${isEncrypted ? 'text-green-700' : 'text-red-600'}`} />
          <h4 className="font-bold text-sm">End-to-End Encryption</h4>
        </div>
        <button onClick={() => setIsEncrypted(!isEncrypted)} className={`w-12 h-6 rounded-full relative ${isEncrypted ? 'bg-green-600' : 'bg-gray-300'}`}>
          <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isEncrypted ? 'right-1' : 'left-1'}`}></div>
        </button>
      </div>
    </div>
  );

  const ReportView = () => (
    <div className="px-6 pb-24 space-y-6">
      <button onClick={() => setView('home')} className="flex items-center text-gray-500 text-sm font-bold"><ArrowLeft className="w-4 h-4 mr-2" /> Cancel</button>
      <h1 className="text-3xl font-black text-gray-900">Secure Report</h1>
      <div className="grid grid-cols-2 gap-3">
        {['Police Misconduct', 'Election Fraud', 'Corruption', 'Other'].map(type => (
          <button key={type} onClick={() => setView('home')} className="p-5 rounded-3xl border border-gray-100 bg-white text-left text-xs font-black active:scale-95 transition-all">{type}</button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto h-screen bg-[#F8FBF8] flex flex-col font-sans relative overflow-hidden border-x border-gray-100">
      {view === 'home' && <Header title="CHRAN Watch" subtitle="National Pulse" />}
      {view === 'justice' && <Header title="Justice Portal" subtitle="Legal Aid" showBack />}
      {view === 'tours' && <Header title="Project Map" subtitle="Tracking Sites" showBack />}
      {view === 'profile' && <Header title="Digital ID" subtitle="Security" showBack />}

      <div className="flex-1 overflow-y-auto no-scrollbar">
        {view === 'home' && <HomeView />}
        {view === 'justice' && <JusticeView />}
        {view === 'report' && <ReportView />}
        {view === 'tours' && <ToursView />}
        {view === 'profile' && <ProfileView />}
      </div>

      <div className="absolute bottom-8 left-6 right-6 z-50">
        <div className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] h-20 border border-white shadow-2xl flex items-center justify-around px-4">
          <NavButton icon={Home} active={view === 'home'} onClick={() => setView('home')} />
          <NavButton icon={Scale} active={view === 'justice'} onClick={() => setView('justice')} />
          <button onClick={() => setView('report')} className="w-14 h-14 bg-[#006837] rounded-full flex items-center justify-center text-white -mt-16 border-8 border-[#F8FBF8] shadow-xl"><Plus className="w-8 h-8" /></button>
          <NavButton icon={MapIcon} active={view === 'tours'} onClick={() => setView('tours')} />
          <NavButton icon={User} active={view === 'profile'} onClick={() => setView('profile')} />
        </div>
      </div>
    </div>
  );
};

const NavButton = ({ icon: Icon, active, onClick }) => (
  <button onClick={onClick} className={`p-3 rounded-2xl transition-all ${active ? 'bg-green-50 text-green-700' : 'text-gray-300'}`}>
    <Icon className="w-6 h-6" />
  </button>
);

export default App;
