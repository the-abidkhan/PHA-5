import React, { useState } from 'react';
import { toast } from 'react-toastify';
import techData from './techData';

interface TechItem {
  id: string | number;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

const TechSection: React.FC = () => {
  const [selectedStack, setSelectedStack] = useState<TechItem[]>([]);

  const handleAddToStack = (item: TechItem) => {
    if (!selectedStack.some((tech) => tech.id === item.id)) {
      setSelectedStack([...selectedStack, item]);
      toast.success(`${item.name} added to stack!`, { position: 'top-right' });
    } else {
      toast.warning(`${item.name} is already in your stack!`, { position: 'top-right' });
    }
  };

  const handleRemoveFromStack = (id: string | number, name: string) => {
    setSelectedStack(selectedStack.filter((tech) => tech.id !== id));
    toast.info(`${name} removed from stack.`, { position: 'top-right' });
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error('All technologies cleared from stack!', { position: 'top-right' });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-sans">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore the <span className="text-pink-500">Technologies</span>
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techData.map((tech) => {
            const isAdded = selectedStack.some((item) => item.id === tech.id);

            return (
              <div
                key={tech.id}
                className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-500">
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-1">{tech.name}</h3>
                  <p className="text-xs text-gray-500 line-clamp-3 mb-4 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-gray-400 border-t pt-3 mb-4">
                    <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">
                      {tech.category}
                    </span>
                    <span>{tech.difficulty}</span>
                    <span className="flex items-center text-amber-500 font-medium">
                      ★ {tech.rating}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToStack(tech)}
                    disabled={isAdded}
                    className={`w-full py-2.5 rounded-lg text-xs font-medium transition-colors ${
                      isAdded
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    {isAdded ? 'Added to Stack' : 'Add to Stack'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm sticky top-6">
            <h3 className="text-base font-bold text-gray-900">Your Stack</h3>
            <p className="text-xs text-gray-400 mb-4">
              {selectedStack.length} Technology Selected
            </p>

            <div className="space-y-2 mb-6">
              {selectedStack.length === 0 ? (
                <p className="text-xs text-gray-400 italic text-center py-6 border border-dashed rounded-lg">
                  No items added yet.
                </p>
              ) : (
                selectedStack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-100"
                  >
                    <div className="flex items-center space-x-2.5">
                      <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain" />
                      <div>
                        <p className="text-xs font-semibold text-gray-800">{item.name}</p>
                        <p className="text-[10px] text-gray-400">{item.category}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFromStack(item.id, item.name)}
                      className="text-gray-400 hover:text-red-500 text-sm font-bold px-1"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>

            {selectedStack.length > 0 && (
              <button
                onClick={handleRemoveAll}
                className="w-full py-2 border border-red-200 text-red-500 rounded-lg text-xs font-medium hover:bg-red-50 transition-colors"
              >
                Remove All
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;