import DatePicker from "@/components/DatePicker";

function App() {
  const onChange = (date: Date) => {
    console.log(date);
  };

  return (
    <div className="p-4 flex justify-center h-screen">
      <DatePicker onChange={onChange} />
    </div>
  );
}

export default App;
