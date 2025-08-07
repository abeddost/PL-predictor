import React from 'react';
import { TrendingUp, Users, Award, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LineChart, Line, Dot } from 'recharts';

const DataExploration = () => {
  const positionData = [
    {
      position: "Attackers",
      total: 50,
      test: 15,
      accuracy: 83,
      color: "red",
      icon: Award,
      keyMetric: "Chances Created",
      description: "Most predictable position with clear patterns in creativity metrics"
    },
    {
      position: "Midfielders",
      total: 43,
      test: 13,
      accuracy: 62,
      color: "emerald",
      icon: Activity,
      keyMetric: "Ball Touches",
      description: "Success linked to high involvement and pass completion rates"
    },
    {
      position: "Defenders",
      total: 56,
      test: 17,
      accuracy: 62,
      color: "blue",
      icon: Users,
      keyMetric: "Goals Scored",
      description: "Surprisingly, offensive contribution matters more than defensive stats"
    }
  ];

  const transferData = [
    { position: 'Centre-Forward', count: 42 },
    { position: 'Centre-Back', count: 34 },
    { position: 'Goalkeeper', count: 27 },
    { position: 'Left Winger', count: 26 },
    { position: 'Central Midfield', count: 25 },
    { position: 'Right-Back', count: 20 },
    { position: 'Left-Back', count: 20 },
    { position: 'Defensive Midfield', count: 16 },
    { position: 'Right Winger', count: 14 },
    { position: 'Attacking Midfield', count: 14 }
  ];

  const topTransfers = [
    { name: 'Enzo Fernandez', fee: 121 },
    { name: 'Antony', fee: 95 },
    { name: 'Darwin Nunez', fee: 85 },
    { name: 'Ruben Dias', fee: 71.6 },
    { name: 'Mykhaylo Mudryk', fee: 70 },
    { name: 'Bruno Fernandes', fee: 63 },
    { name: 'Fred', fee: 59 },
    { name: 'Lisandro Martinez', fee: 57.37 },
    { name: 'Luis Diaz', fee: 47 },
    { name: 'Matheus Nunes', fee: 45 }
  ];

  const spendingData = [
    { season: '2018/2019', fee: 110 },
    { season: '2019/2020', fee: 630 },
    { season: '2020/2021', fee: 540 },
    { season: '2021/2022', fee: 370 },
    { season: '2022/2023', fee: 1270 }
  ];

  const ratingData = [
    { rating: 6.5, pre: 1, post: 3 },
    { rating: 6.6, pre: 2, post: 5 },
    { rating: 6.7, pre: 4, post: 7 },
    { rating: 6.8, pre: 6, post: 9 },
    { rating: 6.9, pre: 8, post: 11 },
    { rating: 7.0, pre: 10, post: 8 },
    { rating: 7.1, pre: 7, post: 5 },
    { rating: 7.2, pre: 5, post: 3 },
    { rating: 7.3, pre: 3, post: 2 },
    { rating: 7.4, pre: 2, post: 1 },
    { rating: 7.5, pre: 1, post: 0 }
  ];

  const getColorClasses = (color: string, variant: 'bg' | 'text' | 'border' = 'bg') => {
    const colors = {
      red: {
        bg: "bg-red-100",
        text: "text-red-600",
        border: "border-red-200"
      },
      emerald: {
        bg: "bg-emerald-100",
        text: "text-emerald-600",
        border: "border-emerald-200"
      },
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200"
      }
    };
    return colors[color as keyof typeof colors][variant];
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Data Exploration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our analysis revealed fascinating patterns in how different positions
              translate their skills to Premier League success.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {positionData.map((data, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`h-2 ${data.color === 'red' ? 'bg-red-500' : data.color === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500'}`}></div>

                <div className="p-8">
                  <div className={`rounded-2xl p-4 w-fit mb-4 bg-gradient-to-br ${
                    data.color === 'red' ? 'from-red-100 to-orange-100 hover:from-red-200 hover:to-orange-200' :
                    data.color === 'emerald' ? 'from-emerald-100 to-teal-100 hover:from-emerald-200 hover:to-teal-200' :
                    'from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200'
                  } transition-all duration-300 hover:scale-110 hover:rotate-6 group`}>
                    <data.icon className={`w-8 h-8 ${
                      data.color === 'red' ? 'text-red-600 group-hover:text-orange-600' :
                      data.color === 'emerald' ? 'text-emerald-600 group-hover:text-teal-600' :
                      'text-blue-600 group-hover:text-indigo-600'
                    } transition-colors duration-300`} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {data.position}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Players:</span>
                      <span className="font-semibold text-gray-900">{data.total}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Test Set:</span>
                      <span className="font-semibold text-gray-900">{data.test}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Accuracy:</span>
                      <span className={`font-bold ${getColorClasses(data.color, 'text')}`}>
                        {data.accuracy}%
                      </span>
                    </div>
                  </div>

                  <div className={`rounded-lg p-4 mb-4 ${getColorClasses(data.color)} ${getColorClasses(data.color, 'border')} border`}>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Predictor:</h4>
                    <p className={`font-bold ${getColorClasses(data.color, 'text')}`}>
                      {data.keyMetric}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {data.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Number of Transfers by Position
            </h3>
            <div className="w-full overflow-x-auto">
              <div className="min-w-[600px]">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={transferData} margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="position" 
                      tick={{ angle: -45, textAnchor: 'end', fontSize: 12 }} 
                      height={100}
                      interval={0}
                    />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '14px'
                      }}
                    />
                    <Bar dataKey="count" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Top Transfers Chart */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Top 10 Most Expensive Transfers
            </h3>
            <div className="w-full overflow-x-auto">
              <div className="min-w-[700px]">
                <ResponsiveContainer width="100%" height={500}>
                  <BarChart data={topTransfers} layout="vertical" margin={{ top: 20, right: 30, left: 200, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" tickFormatter={(value) => `$${value}M`} tick={{ fontSize: 12 }} />
                    <YAxis type="category" dataKey="name" width={180} tick={{ fontSize: 11 }} />
                    <Tooltip 
                      formatter={(value) => [`$${value}M`, 'Transfer Fee']}
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '14px'
                      }}
                    />
                    <Bar dataKey="fee" >
                      {
                        topTransfers.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={`#${(70-index*7).toString(16).padStart(2, '0')}${(120-index*12).toString(16).padStart(2, '0')}70`} />
                        ))
                      }
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Spending by Season Chart */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Total Transfer Spending by Season
            </h3>
            <div className="w-full overflow-x-auto">
              <div className="min-w-[500px]">
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={spendingData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="season" 
                      tick={{ angle: -45, textAnchor: 'end', fontSize: 12 }} 
                      height={60}
                    />
                    <YAxis tickFormatter={(value) => `$${value}M`} tick={{ fontSize: 12 }} />
                    <Tooltip 
                      formatter={(value) => [`$${value}M`, 'Transfer Fee']}
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '14px'
                      }}
                    />
                    <Line type="monotone" dataKey="fee" stroke="#3b82f6" strokeWidth={3} activeDot={{ r: 8 }}>
                      <Dot />
                    </Line>
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Rating Distribution Chart */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Distribution of Average Rating (Pre vs Post Transfer)
            </h3>
            <div className="w-full overflow-x-auto">
              <div className="min-w-[600px]">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={ratingData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="rating" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '14px'
                      }}
                    />
                    <Bar dataKey="pre" fill="#8884d8" opacity={0.7} />
                    <Bar dataKey="post" fill="#82ca9d" opacity={0.7} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="flex justify-center mt-4 gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-400 opacity-70 rounded"></div>
                <span className="text-gray-600">Pre Transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-400 opacity-70 rounded"></div>
                <span className="text-gray-600">Post Transfer</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl p-6 hover:from-emerald-200 hover:to-blue-200 transition-all duration-300 hover:scale-110 hover:rotate-3">
                  <TrendingUp className="w-12 h-12 text-emerald-600 hover:text-blue-600 transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Key Discoveries
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    🎯 Attackers: Creativity Over Goals
                  </h4>
                  <p className="text-gray-600">
                    Chances created and accurate crosses were more predictive of success than pure goal-scoring ability.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    ⚡ Midfielders: High Involvement
                  </h4>
                  <p className="text-gray-600">
                    Ball touches and pass success rate indicated players who could adapt to the Premier League's pace.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    🔵 Defenders: Offensive Contribution
                  </h4>
                  <p className="text-gray-600">
                    Goals scored and shots taken mattered more than traditional defensive metrics like tackles.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    🚀 Modern Football Evolution
                  </h4>
                  <p className="text-gray-600">
                    Versatility and multi-role capabilities are increasingly valued across all positions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataExploration;
