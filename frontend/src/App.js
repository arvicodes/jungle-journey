import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentScene, setCurrentScene] = useState(0);

  // Story scenes with German text and images
  const storyScenes = [
    {
      title: "Kiki der Affe beginnt ihre Reise",
      text: "Hallo! Ich bin Kiki, ein neugieriger kleiner Affe. Heute beginne ich eine aufregende Reise um die ganze Welt! Ich möchte viele neue Orte sehen und neue Freunde finden.",
      image: "https://images.pexels.com/photos/8501627/pexels-photo-8501627.jpeg",
      location: "Zuhause"
    },
    {
      title: "Besuch in Japan",
      text: "Wow! Ich bin in Japan angekommen. Hier gibt es wunderschöne Tempel und rosa Kirschblüten überall. Die Menschen hier sind sehr freundlich und haben mir Origami beigebracht!",
      image: "https://images.pexels.com/photos/5479895/pexels-photo-5479895.jpeg",
      location: "Japan"
    },
    {
      title: "Abenteuer in der Stadt",
      text: "Jetzt bin ich in einer großen Stadt! Es gibt so viele hohe Gebäude und interessante Statuen. Ich habe auf einer Steinstatue gesessen und die Menschen beobachtet.",
      image: "https://images.unsplash.com/photo-1706188715497-ce4169673ff3",
      location: "Große Stadt"
    },
    {
      title: "Im tropischen Dschungel",
      text: "Im Dschungel fühle ich mich wie zu Hause! Hier gibt es so viele grüne Bäume und bunte Vögel. Ich schwinge von Ast zu Ast und sammle süße Früchte.",
      image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9",
      location: "Tropischer Dschungel"
    },
    {
      title: "Mit neuen Freunden",
      text: "Ich habe andere Affen getroffen! Wir spielen zusammen und erkunden die Umgebung. Es ist so schön, Freunde zu haben, die genauso gerne klettern wie ich.",
      image: "https://images.pexels.com/photos/8501620/pexels-photo-8501620.jpeg",
      location: "Affengemeinschaft"
    },
    {
      title: "Stadtleben erkunden",
      text: "In der Stadt lerne ich, wie Menschen leben. Ich sitze auf Zäunen und beobachte die Autos und Busse. Alles ist so anders als im Wald, aber sehr aufregend!",
      image: "https://images.unsplash.com/photo-1505667129719-cdf07e0d5834",
      location: "Stadtrand"
    },
    {
      title: "Besondere Sehenswürdigkeiten",
      text: "Heute habe ich ein berühmtes Gebäude besucht! Es ist so groß und alt. Ich frage mich, wer es gebaut hat und welche Geschichten es erzählen könnte.",
      image: "https://images.pexels.com/photos/17428661/pexels-photo-17428661.jpeg",
      location: "Historischer Ort"
    },
    {
      title: "Im kalten Schnee",
      text: "Brrr! Jetzt bin ich an einem Ort mit Schnee. Es ist sehr kalt, aber auch sehr schön! Der Schnee glitzert wie kleine Diamanten. Das ist mein erstes Mal im Schnee!",
      image: "https://images.unsplash.com/photo-1578948610588-ffe24448f5ed",
      location: "Schneegebiet"
    }
  ];

  const nextScene = () => {
    if (currentScene < storyScenes.length - 1) {
      setCurrentScene(currentScene + 1);
    }
  };

  const prevScene = () => {
    if (currentScene > 0) {
      setCurrentScene(currentScene - 1);
    }
  };

  const goToScene = (sceneIndex) => {
    setCurrentScene(sceneIndex);
  };

  const currentStory = storyScenes[currentScene];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center text-purple-800">
            🐵 Kikis Weltreise 🌍
          </h1>
          <p className="text-center text-purple-600 mt-2 text-lg">
            Eine aufregende Geschichte für Kinder
          </p>
        </div>
      </div>

      {/* Main Story Area */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Story Panel */}
          <div className="relative">
            {/* Image Section */}
            <div className="relative h-96 overflow-hidden">
              <img 
                src={currentStory.image} 
                alt={currentStory.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full font-bold">
                {currentScene + 1} / {storyScenes.length}
              </div>
              <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-6 py-2 rounded-full font-bold text-lg">
                📍 {currentStory.location}
              </div>
            </div>

            {/* Text Section */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
                {currentStory.title}
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                {currentStory.text}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-purple-50 px-8 py-6">
            <div className="flex justify-between items-center">
              <button 
                onClick={prevScene}
                disabled={currentScene === 0}
                className={`flex items-center px-6 py-3 rounded-full font-bold text-lg transition-all ${
                  currentScene === 0 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-purple-600 text-white hover:bg-purple-700 hover:scale-105'
                }`}
              >
                ← Zurück
              </button>

              <div className="flex space-x-2">
                {storyScenes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToScene(index)}
                    className={`w-4 h-4 rounded-full transition-all ${
                      index === currentScene 
                        ? 'bg-purple-600 scale-125' 
                        : 'bg-purple-300 hover:bg-purple-400'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={nextScene}
                disabled={currentScene === storyScenes.length - 1}
                className={`flex items-center px-6 py-3 rounded-full font-bold text-lg transition-all ${
                  currentScene === storyScenes.length - 1
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-orange-500 text-white hover:bg-orange-600 hover:scale-105'
                }`}
              >
                Weiter →
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 bg-white rounded-full p-2 shadow-lg">
          <div className="bg-purple-200 rounded-full h-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-purple-500 to-orange-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${((currentScene + 1) / storyScenes.length) * 100}%` }}
            />
          </div>
          <p className="text-center text-purple-600 mt-2 font-semibold">
            Reisefortschritt: {Math.round(((currentScene + 1) / storyScenes.length) * 100)}%
          </p>
        </div>

        {/* Fun Facts */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-purple-800 mb-4 text-center">
            🌟 Wusstest du schon?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-xl">
              <p className="text-purple-700 font-semibold">
                🐵 Affen sind sehr schlau und können mit Werkzeugen umgehen!
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl">
              <p className="text-purple-700 font-semibold">
                🌍 Es gibt über 195 Länder auf der Erde zu entdecken!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;