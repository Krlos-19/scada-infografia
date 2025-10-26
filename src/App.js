import React, { useState } from 'react';
import { BarChart3, Cpu, DollarSign, Shield, Zap, Globe, Database } from 'lucide-react';

function App() {
  const [selectedSoftware, setSelectedSoftware] = useState(null);

  const softwareData = [
    {
      name: "Wonderware InTouch",
      manufacturer: "AVEVA",
      color: "bg-blue-600",
      logo: "🔷",
      features: [
        "Interfaz gráfica intuitiva",
        "Biblioteca extensa de componentes",
        "HMI robusto",
        "Integración móvil y nube"
      ],
      protocols: "OPC UA/DA, Modbus TCP/RTU, BACnet, MQTT",
      hardware: "Compatible con PLCs Schneider, Siemens, AB",
      requirements: "Windows Server 2016+, 8GB RAM, 50GB disco",
      license: "Por tag, desde $5,000 USD",
      pros: ["Flexible y escalable", "Excelentes visualizaciones", "Amplia adopción industrial"],
      cons: ["Costos elevados", "Curva de aprendizaje pronunciada"],
      score: { ease: 7, scale: 9, integration: 9, support: 8, cost: 6 }
    },
    {
      name: "Siemens WinCC",
      manufacturer: "Siemens",
      color: "bg-teal-600",
      logo: "⚡",
      features: [
        "Integrado con TIA Portal",
        "Soporte multilingüe",
        "Gestión avanzada de alarmas",
        "Ciberseguridad integrada"
      ],
      protocols: "Profinet, OPC UA, Modbus TCP, S7",
      hardware: "Optimizado para PLCs Siemens S7-1200/1500",
      requirements: "Windows 10/11, 16GB RAM, 100GB disco",
      license: "Por estación, desde $3,500 USD",
      pros: ["Integración perfecta con Siemens", "Herramientas robustas", "Alto rendimiento"],
      cons: ["Limitado a ecosistema Siemens", "Compatibilidad terceros reducida"],
      score: { ease: 6, scale: 8, integration: 7, support: 9, cost: 7 }
    },
    {
      name: "Ignition",
      manufacturer: "Inductive Automation",
      color: "bg-orange-600",
      logo: "🔥",
      features: [
        "Licencia ilimitada",
        "Arquitectura web",
        "Scripting Python",
        "OPC UA nativo"
      ],
      protocols: "OPC UA, Modbus TCP/RTU, MQTT, DNP3, BACnet",
      hardware: "Multi-marca: Siemens, AB, Omron, Mitsubishi",
      requirements: "Windows/Linux, 8GB RAM, Java 11+, 20GB disco",
      license: "Servidor ilimitado, desde $7,500 USD/año",
      pros: ["Modelo de licencia rentable", "Desarrollo rápido", "Cross-platform"],
      cons: ["Menos trayectoria empresarial", "Requiere conocimientos Python"],
      score: { ease: 9, scale: 10, integration: 10, support: 8, cost: 9 }
    },
    {
      name: "FactoryTalk View",
      manufacturer: "Rockwell Automation",
      color: "bg-red-600",
      logo: "🏭",
      features: [
        "Integrado con Allen-Bradley",
        "Monitoreo en tiempo real",
        "Seguridad basada en roles",
        "Escalabilidad empresarial"
      ],
      protocols: "EtherNet/IP, OPC UA/DA, Modbus, DeviceNet",
      hardware: "PLCs Allen-Bradley (ControlLogix, CompactLogix)",
      requirements: "Windows Server 2019+, 16GB RAM, 80GB disco",
      license: "Por nodo, desde $4,500 USD",
      pros: ["Excelente para manufactura", "Seguridad robusta", "Confiabilidad"],
      cons: ["Precio elevado", "Implementación compleja"],
      score: { ease: 6, scale: 8, integration: 8, support: 9, cost: 5 }
    },
    {
      name: "GE iFIX",
      manufacturer: "GE Digital",
      color: "bg-indigo-600",
      logo: "⚙️",
      features: [
        "HMI personalizable",
        "Informes avanzados",
        "Visualización de procesos",
        "Cliente web integrado"
      ],
      protocols: "OPC UA/DA, Modbus TCP/RTU, Profibus, DNP3",
      hardware: "Multi-vendor: GE, Siemens, Schneider",
      requirements: "Windows 10/Server 2016+, 8GB RAM, 60GB disco",
      license: "Por tag, desde $4,000 USD",
      pros: ["Configuración flexible", "Diagnóstico potente", "Bueno para procesos"],
      cons: ["Licencias complejas", "Sobrecarga en proyectos grandes"],
      score: { ease: 7, scale: 7, integration: 8, support: 7, cost: 6 }
    }
  ];

  const criteria = [
    { name: "Facilidad de uso", key: "ease", icon: Zap, max: 10 },
    { name: "Escalabilidad", key: "scale", icon: BarChart3, max: 10 },
    { name: "Integración", key: "integration", icon: Database, max: 10 },
    { name: "Soporte técnico", key: "support", icon: Shield, max: 10 },
    { name: "Costo-beneficio", key: "cost", icon: DollarSign, max: 10 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full mb-4">
            <span className="text-white font-bold text-sm">SISTEMA DE AUTOMATIZACIÓN INDUSTRIAL</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Software SCADA Comerciales
          </h1>
          <p className="text-xl text-blue-200">Análisis Comparativo 2025</p>
        </div>

        {/* Software Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {softwareData.map((software, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedSoftware(selectedSoftware === idx ? null : idx)}
            >
              <div className={`${software.color} w-16 h-16 rounded-xl flex items-center justify-center text-4xl mb-4`}>
                {software.logo}
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{software.name}</h3>
              <p className="text-blue-300 text-sm mb-4">{software.manufacturer}</p>
              
              <div className="space-y-2 mb-4">
                {software.features.slice(0, 3).map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-gray-200 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {selectedSoftware === idx && (
                <div className="mt-4 pt-4 border-t border-white/20 space-y-3">
                  <div>
                    <p className="text-blue-300 text-xs font-semibold mb-1">PROTOCOLOS</p>
                    <p className="text-gray-200 text-sm">{software.protocols}</p>
                  </div>
                  <div>
                    <p className="text-blue-300 text-xs font-semibold mb-1">HARDWARE</p>
                    <p className="text-gray-200 text-sm">{software.hardware}</p>
                  </div>
                  <div>
                    <p className="text-blue-300 text-xs font-semibold mb-1">REQUISITOS</p>
                    <p className="text-gray-200 text-sm">{software.requirements}</p>
                  </div>
                  <div>
                    <p className="text-blue-300 text-xs font-semibold mb-1">LICENCIA</p>
                    <p className="text-gray-200 text-sm">{software.license}</p>
                  </div>
                </div>
              )}

              <button className="mt-4 w-full bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg text-sm transition-all">
                {selectedSoftware === idx ? "Ver menos" : "Ver detalles"}
              </button>
            </div>
          ))}
        </div>

        {/* Comparison Matrix */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Matriz Comparativa</h2>
          <p className="text-center text-blue-200 mb-6">Puntuación de 1 a 10 (siendo 10 el mejor)</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-white/40">
                  <th className="text-left text-white py-4 px-4 bg-slate-800/50">Criterio</th>
                  {softwareData.map((soft, idx) => (
                    <th key={idx} className="text-center text-white py-4 px-2 text-sm bg-slate-800/50">
                      {soft.name.split(' ')[0]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {criteria.map((criterion, idx) => {
                  const Icon = criterion.icon;
                  return (
                    <tr key={idx} className="border-b border-white/20 hover:bg-white/5">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Icon className="w-5 h-5 text-blue-400" />
                          <span className="text-gray-200 font-medium">{criterion.name}</span>
                        </div>
                      </td>
                      {softwareData.map((soft, sIdx) => (
                        <td key={sIdx} className="text-center py-4 px-2">
                          <div className="flex flex-col items-center gap-2">
                            <div className="text-2xl font-bold text-white bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg px-3 py-1 min-w-[50px]">
                              {soft.score[criterion.key]}
                            </div>
                            <div className="flex justify-center w-full">
                              {[...Array(10)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-1.5 h-4 mx-0.5 rounded ${
                                    i < soft.score[criterion.key]
                                      ? 'bg-gradient-to-t from-green-500 to-emerald-400'
                                      : 'bg-white/10'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-400">/10</span>
                          </div>
                        </td>
                      ))}
                    </tr>
                  );
                })}
                <tr className="border-t-2 border-white/40 bg-slate-800/30">
                  <td className="py-4 px-4">
                    <span className="text-white font-bold text-lg">PUNTUACIÓN TOTAL</span>
                  </td>
                  {softwareData.map((soft, sIdx) => {
                    const total = Object.values(soft.score).reduce((a, b) => a + b, 0);
                    return (
                      <td key={sIdx} className="text-center py-4">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                          {total}
                        </div>
                        <div className="text-xs text-gray-400">/ 50 pts</div>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommendation */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 border-4 border-yellow-400">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center text-5xl">
              🏆
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Software Recomendado</h2>
              <p className="text-orange-100">Basado en análisis técnico comparativo</p>
            </div>
          </div>
          
          <div className="bg-white/20 backdrop-blur rounded-xl p-6 mb-6">
            <h3 className="text-4xl font-bold text-white mb-2">Ignition</h3>
            <p className="text-xl text-orange-100">by Inductive Automation</p>
            <p className="text-2xl font-bold text-yellow-300 mt-2">Puntuación: 46/50</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <Globe className="w-5 h-5" /> Arquitectura Moderna
              </h4>
              <p className="text-orange-100 text-sm">Diseño flexible basado en web, compatible con múltiples plataformas</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <DollarSign className="w-5 h-5" /> Rentabilidad
              </h4>
              <p className="text-orange-100 text-sm">Modelo de licencia ilimitada, ideal para proyectos escalables</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <Cpu className="w-5 h-5" /> Adaptabilidad
              </h4>
              <p className="text-orange-100 text-sm">Scripting Python, OPC UA nativo, multi-vendor</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5" /> Desarrollo Rápido
              </h4>
              <p className="text-orange-100 text-sm">Herramientas intuitivas para implementación ágil</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>Carlos Alberto Landívar Rodríguez | Ing. Paulina Valle Oñate</p>
          <p>Universidad Estatal de Milagro | Octubre 2025</p>
        </div>
      </div>
    </div>
  );
}

export default App;
