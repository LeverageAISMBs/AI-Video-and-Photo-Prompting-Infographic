
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Zap, Film, Microscope, CheckCircle2 } from 'lucide-react';
import { 
  PromptPieChart, 
  AnglesRadarChart, 
  ExposureBubbleChart, 
  ComparisonBarChart 
} from './components/Charts';
import { Card, SectionHeader } from './components/UI';
import { VOCABULARY_LIST, SHOT_SIZES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
      {/* Header */}
      <header className="w-full py-12 px-6 text-center border-b border-slate-800 bg-slate-900/40 backdrop-blur-xl sticky top-0 z-50">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight uppercase"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Visualizing AI Cinema
          </span>
        </motion.h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto flex items-center justify-center gap-2">
          <Camera className="w-6 h-6 text-cyan-400" />
          Leveraging <span className="text-cyan-400 font-semibold">StudioBinder</span> & <span className="text-pink-400 font-semibold">Ansel Adams</span> vocabulary.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        
        {/* Introduction */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white border-l-4 border-cyan-400 pl-4">The Vocabulary Gap</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              AI image generators do not "see" the world; they interpret language. Vague prompts yield generic results. By adopting the precise vocabulary of <strong>cinematography</strong> and <strong>photography</strong>, creators can force the AI to render specific focal lengths, lighting scenarios, and emotional tones.
            </p>
            <div className="p-5 bg-slate-900/50 rounded-lg border border-slate-700/50 backdrop-blur-sm">
              <h3 className="font-semibold text-cyan-300 mb-2 flex items-center gap-2">
                <Microscope className="w-4 h-4" /> Research Insight
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Analyzing technical glossaries reveals that "quality" in AI generation is often a synonym for "specificity" in camera and lighting language.
              </p>
            </div>
          </div>
          <Card className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4 text-center">Anatomy of a "Cinematic" Prompt</h3>
            <div className="w-full">
              <PromptPieChart />
            </div>
            <p className="text-xs text-center text-slate-500 mt-4">
              Weighted importance of vocabulary categories in high-fidelity output.
            </p>
          </Card>
        </section>

        {/* Section 1: Cinematography */}
        <section>
          <SectionHeader number="01" title="The Camera's Eye" color="text-pink-400" />
          <p className="text-slate-300 max-w-4xl mb-12">
            The placement of the camera dictates the audience's emotional relationship with the subject. In AI prompting, explicitly stating these angles prevents the model from defaulting to standard "eye-level" shots.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-bold mb-2 text-cyan-300 flex items-center gap-2">
                <Zap className="w-5 h-5" /> Emotional Impact of Angles
              </h3>
              <p className="text-sm text-slate-400 mb-6">How different angles shift narrative weight.</p>
              <AnglesRadarChart />
              <p className="text-xs text-slate-500 mt-4 text-center">
                Visualizing correlation between angle choice and emotional output.
              </p>
            </Card>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Shot Sizes & AI Interpretation</h3>
              <p className="text-slate-300">
                The distance from the subject is critical. Precise shot terminology guides the model's framing.
              </p>
              <div className="grid gap-4">
                {SHOT_SIZES.map((shot, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className={`bg-slate-800/40 p-4 rounded-lg border-l-4 ${shot.borderColor}`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-white">{shot.title}</h4>
                      <span className="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-slate-300 uppercase tracking-wider">{shot.category}</span>
                    </div>
                    <p className="text-sm text-slate-400"><strong>Terms:</strong> {shot.terms}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Technical Triangle */}
        <section>
          <SectionHeader number="02" title="The Ansel Adams Methodology" color="text-cyan-400" />
          <p className="text-slate-300 max-w-4xl mb-12">
            Control light like a master. In AI, we simulate physics engines by specifying Aperture (Depth), Shutter Speed (Motion), and ISO (Texture).
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 h-full">
                <h3 className="text-xl font-bold text-white mb-6">The Exposure Logic</h3>
                <div className="flex flex-col space-y-6 relative">
                  <div className="relative z-10 bg-slate-950/80 p-4 rounded border border-cyan-500/30">
                    <h4 className="text-cyan-400 font-bold text-sm uppercase">Aperture (f-stop)</h4>
                    <p className="text-xs text-slate-400 mt-1">Lower number (f/1.8) = Shallow Bokeh background.</p>
                  </div>
                  <div className="relative z-10 bg-slate-950/80 p-4 rounded border border-pink-500/30">
                    <h4 className="text-pink-400 font-bold text-sm uppercase">Shutter Speed</h4>
                    <p className="text-xs text-slate-400 mt-1">Fast (1/1000) = Freeze. Slow (1/30) = Motion Blur.</p>
                  </div>
                  <div className="relative z-10 bg-slate-950/80 p-4 rounded border border-purple-500/30">
                    <h4 className="text-purple-400 font-bold text-sm uppercase">ISO / Grain</h4>
                    <p className="text-xs text-slate-400 mt-1">Low (100) = Clean. High (3200) = Vintage Grain.</p>
                  </div>
                  {/* Decorative line */}
                  <div className="absolute left-1/2 top-4 bottom-4 w-px bg-slate-800 -translate-x-1/2 -z-0" />
                </div>
              </div>
            </div>
            <Card className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-2 text-white">Simulating Optical Physics</h3>
              <p className="text-sm text-slate-400 mb-6">Mapping traditional camera settings to visual output characteristics.</p>
              <ExposureBubbleChart />
              <p className="text-xs text-slate-500 mt-4 text-center">
                Relationship between technical settings and visual style.
              </p>
            </Card>
          </div>
        </section>

        {/* Section 3: Translator */}
        <section>
          <SectionHeader number="03" title="The Vocabulary Translator" color="text-purple-400" />
          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm">
            <table className="w-full text-left text-sm text-slate-400">
              <thead className="bg-slate-900/80 text-slate-200 uppercase font-bold text-xs tracking-widest">
                <tr>
                  <th className="px-6 py-5">Intent (Vague)</th>
                  <th className="px-6 py-5">Cinematography Term</th>
                  <th className="px-6 py-5">Photography Spec</th>
                  <th className="px-6 py-5">AI Effect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {VOCABULARY_LIST.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-800/40 transition-colors group">
                    <td className="px-6 py-4 font-medium text-slate-300 group-hover:text-white">{row.intent}</td>
                    <td className="px-6 py-4 text-cyan-400 font-semibold">{row.term}</td>
                    <td className="px-6 py-4 font-mono text-[11px] text-pink-400 bg-slate-950/30">{row.spec}</td>
                    <td className="px-6 py-4 italic">{row.effect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Performance */}
        <section className="pb-20">
          <SectionHeader number="04" title="Output Quality Analysis" color="text-pink-400" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Card>
              <h3 className="text-xl font-bold mb-2 text-white">Vague vs. Technical Prompts</h3>
              <p className="text-sm text-slate-400 mb-6">Comparison of aesthetic scores across metrics.</p>
              <ComparisonBarChart />
            </Card>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Film className="w-6 h-6 text-purple-500" /> Final Word
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  AI models function less like artists and more like <strong>technical directors</strong>. They respond best when given the explicit instructions of a cinematographer.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Rim Lighting', 'Dutch Angle', '35mm Film', 'Chiaroscuro'].map(t => (
                    <span key={t} className="px-3 py-1 bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
          <div className="flex items-center gap-4">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>StudioBinder & AnselAdams.com Reference Analysis</span>
          </div>
          <p>© 2025 AI Cinema Lab. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">Methodology</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
