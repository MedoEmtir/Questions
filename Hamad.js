import { useState } from "react";
import "./App.css";

const questions = [
  {
    type: "mcq",
    question: "ما نوع الموجات الكهرومغناطيسية؟",
    options: ["طولية", "مستعرضة", "مزيج من الطولية والمستعرضة"],
    answer: "مستعرضة",
  },
  {
    type: "mcq",
    question: "تتحرك الموجات الكهرومغناطيسية في الفراغ بسرعة:",
    options: ["2 × 10^8 م/ث", "3 × 10^8 م/ث", "1 × 10^6 م/ث"],
    answer: "3 × 10^8 م/ث",
  },
  {
    type: "mcq",
    question: "عند انتقال الموجة من الهواء إلى الماء:",
    options: ["يتغير ترددها", "يتغير طولها الموجي وسرعتها", "يتغير مصدرها"],
    answer: "يتغير طولها الموجي وسرعتها",
  },
  {
    type: "mcq",
    question: "العلاقة الصحيحة بين السرعة والتردد والطول الموجي:",
    options: [
      "السرعة = التردد + الطول الموجي",
      "السرعة = التردد × الطول الموجي",
      "السرعة = الطول الموجي ÷ التردد"
    ],
    answer: "السرعة = التردد × الطول الموجي",
  },
  {
    type: "mcq",
    question: "تتكون الموجات الكهرومغناطيسية من:",
    options: ["شحنات كهربائية", "موجات صوتية", "مجالات كهربائية ومغناطيسية متعامدة"],
    answer: "مجالات كهربائية ومغناطيسية متعامدة",
  },
  {
    type: "truefalse",
    question: "تنتقل الموجات الكهرومغناطيسية فقط في المواد الصلبة.",
    answer: false,
  },
  {
    type: "truefalse",
    question: "لا يتغير تردد الموجة عند الانتقال بين الأوساط.",
    answer: true,
  },
  {
    type: "truefalse",
    question: "الموجات الكهرومغناطيسية تخضع لقوانين الانعكاس والانكسار.",
    answer: true,
  },
  {
    type: "truefalse",
    question: "يمكن للمادة أن تمتص أو تعكس أو تنكسر الموجات الكهرومغناطيسية.",
    answer: true,
  },
  {
    type: "truefalse",
    question: "الموجات الكهرومغناطيسية تحمل شحنات كهربائية.",
    answer: false,
  },
];

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (selected) => {
    const q = questions[current];
    const correct =
      q.type === "mcq"
        ? selected === q.answer
        : (selected === "true") === q.answer;
    if (correct) setScore(score + 1);

    const next = current + 1;
    if (next < questions.length) setCurrent(next);
    else setFinished(true);
  };

  return (
    <div className="App" style={{ direction: "rtl", padding: 20, fontFamily: "sans-serif" }}>
      {!finished ? (
        <div style={{ maxWidth: 500, margin: "auto", background: "#f0f0f0", padding: 20, borderRadius: 10 }}>
          <h2 style={{ fontSize: 24, marginBottom: 10 }}>سؤال {current + 1}</h2>
          <p>{questions[current].question}</p>
          {questions[current].type === "mcq" ? (
            questions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt)}
                style={{ display: "block", width: "100%", marginTop: 10, padding: 10, borderRadius: 5 }}
              >
                {opt}
              </button>
            ))
          ) : (
            <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
              <button onClick={() => handleAnswer("true")} style={{ flex: 1, padding: 10 }}>صح</button>
              <button onClick={() => handleAnswer("false")} style={{ flex: 1, padding: 10 }}>خطأ</button>
            </div>
          )}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: 20 }}>
          <h2 style={{ fontSize: 24 }}>انتهى الاختبار!</h2>
          <p style={{ fontSize: 18 }}>درجتك: {score} من {questions.length}</p>
        </div>
      )}
    </div>
  );
}

export default App;
