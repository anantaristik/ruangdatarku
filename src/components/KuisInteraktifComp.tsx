import { useState } from "react";

type KuisProps = {
  kuis: {
    soal: string;
    opsi: string[];
    jawaban: string;
  };
};

export default function KuisInteraktif({ kuis }: KuisProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (opsi: string) => {
    setSelected(opsi);
    setIsCorrect(opsi === kuis.jawaban);
  };

  const handleReset = () => {
    setSelected(null);
    setIsCorrect(null);
  };

  return (
    <section className="max-w-4xl mx-auto space-y-4">
      <h2 className="text-2xl font-semibold text-secondary">Kuis Interaktif</h2>
      <p>Jawablah pertanyaan berikut untuk menguji pemahamanmu:</p>

      <div className="bg-[#fef3c7] border border-yellow-300 rounded p-4">
        <p className="font-medium mb-4">{kuis.soal}</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {kuis.opsi.map((opsi, index) => {
            const isSelected = selected === opsi;
            const className = [
              "px-4 py-2 rounded font-semibold transition",
              !selected && "bg-primary text-white hover:bg-primary/90",
              selected && isSelected && isCorrect && "bg-green-500 text-white",
              selected && isSelected && !isCorrect && "bg-red-500 text-white",
              selected && !isSelected && "bg-gray-200 text-gray-600 cursor-not-allowed"
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <button
                key={index}
                onClick={() => handleAnswer(opsi)}
                disabled={!!selected}
                className={className}
              >
                {opsi}
              </button>
            );
          })}
        </div>

        {/* Feedback & Reset */}
        {selected && (
          <div className="mt-4">
            {isCorrect ? (
              <p className="text-green-600 font-semibold">Jawaban kamu benar! 🎉</p>
            ) : (
              <>
                <p className="text-red-600 font-semibold">
                  Ups, jawaban salah. Jawaban yang benar:{" "}
                  <strong>{kuis.jawaban}</strong>
                </p>
                <button
                  onClick={handleReset}
                  className="mt-2 inline-block px-4 py-2 bg-secondary text-white rounded hover:bg-secondary/90"
                >
                  Coba Lagi
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
