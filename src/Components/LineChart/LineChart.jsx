import { LineChart as Lchart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const studentsMarks = [
    { id: 1, name: "Alice", Physics: 78, Chemistry: 82, Math: 78 },
    { id: 2, name: "Bob", Physics: 85, Chemistry: 88, Math: 85 },
    { id: 3, name: "Charlie", Physics: 92, Chemistry: 90, Math: 92 },
    { id: 4, name: "David", Physics: 88, Chemistry: 84, Math: 88 },
    { id: 5, name: "Eve", Physics: 76, Chemistry: 75, Math: 76 },
    { id: 6, name: "Frank", Physics: 95, Chemistry: 92, Math: 95 },
    { id: 7, name: "Grace", Physics: 81, Chemistry: 80, Math: 81 },
    { id: 8, name: "Hannah", Physics: 89, Chemistry: 91, Math: 89 },
    { id: 9, name: "Ivy", Physics: 84, Chemistry: 83, Math: 84 },
    { id: 10, name: "Jack", Physics: 90, Chemistry: 94, Math: 90 },
  ];

  return (
    <div>
      <Lchart width={500} height={400} data={studentsMarks}>
        <XAxis></XAxis>

        <Line dataKey={"Math"} stroke="red"></Line>
        <Line dataKey={"Chemistry"} stroke="green"></Line>
        <Line dataKey={"Physics"}></Line>
        <YAxis></YAxis>
      </Lchart>
    </div>
  );
};

export default LineChart;
