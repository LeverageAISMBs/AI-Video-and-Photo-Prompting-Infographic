
import React from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ScatterChart, Scatter, XAxis, YAxis, ZAxis,
  BarChart, Bar, CartesianGrid
} from 'recharts';
import { PROMPT_COMPOSITION, RADAR_DATA, EXPOSURE_BUBBLE_DATA, COMPARISON_DATA } from '../constants';

export const PromptPieChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={PROMPT_COMPOSITION}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        paddingAngle={5}
        dataKey="value"
      >
        {PROMPT_COMPOSITION.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip 
        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#e2e8f0' }}
        itemStyle={{ color: '#e2e8f0' }}
      />
      <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: '12px' }} />
    </PieChart>
  </ResponsiveContainer>
);

export const AnglesRadarChart = () => (
  <ResponsiveContainer width="100%" height={350}>
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={RADAR_DATA}>
      <PolarGrid stroke="#334155" />
      <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
      <Radar name="Low Angle (Hero)" dataKey="hero" stroke="#22d3ee" fill="#22d3ee" fillOpacity={0.6} />
      <Radar name="High Angle (Victim)" dataKey="victim" stroke="#f472b6" fill="#f472b6" fillOpacity={0.6} />
      <Radar name="Eye Level (Neutral)" dataKey="neutral" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.6} />
      <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
      <Legend wrapperStyle={{ fontSize: '12px' }} />
    </RadarChart>
  </ResponsiveContainer>
);

export const ExposureBubbleChart = () => (
  <ResponsiveContainer width="100%" height={350}>
    <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
      <XAxis type="number" dataKey="x" name="Aperture" unit="f/" reversed domain={[0, 12]} stroke="#94a3b8" label={{ value: 'Aperture (f-stop)', position: 'insideBottom', offset: -5, fill: '#64748b' }} />
      <YAxis type="number" dataKey="y" name="Shutter Speed" unit="ms" stroke="#94a3b8" label={{ value: 'Shutter Factor', angle: -90, position: 'insideLeft', fill: '#64748b' }} />
      <ZAxis type="number" dataKey="z" range={[60, 400]} name="Usage" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
      <Legend verticalAlign="top" height={36} />
      <Scatter name="Portrait" data={EXPOSURE_BUBBLE_DATA.portrait} fill="#22d3ee" />
      <Scatter name="Action" data={EXPOSURE_BUBBLE_DATA.action} fill="#f472b6" />
      <Scatter name="Landscape" data={EXPOSURE_BUBBLE_DATA.landscape} fill="#a855f7" />
    </ScatterChart>
  </ResponsiveContainer>
);

export const ComparisonBarChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={COMPARISON_DATA}>
      <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
      <XAxis dataKey="name" stroke="#94a3b8" tick={{ fontSize: 10 }} />
      <YAxis stroke="#94a3b8" domain={[0, 100]} />
      <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
      <Legend />
      <Bar dataKey="basic" name="Basic Prompting" fill="#475569" radius={[4, 4, 0, 0]} />
      <Bar dataKey="technical" name="Vocabulary Enriched" fill="#a855f7" radius={[4, 4, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);
