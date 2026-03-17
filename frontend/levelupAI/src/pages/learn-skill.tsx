import { useEffect, useState } from "react";

export type Task = {
  id: number;
  title: string;
  week: number;
  completed: boolean;
  StudyPlan: number;
};

function LearnSkill() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/tasks/");
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const data: Task[] = await res.json();
        setTasks(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Learn Skill Page</h1>

      {loading && <p>Loading tasks...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && (
        <ul>
          {tasks.length ? (
            tasks.map((task) => (
              <li key={task.id}>
                <strong>{task.title}</strong> (week {task.week}) -{' '}
                {task.completed ? "✅" : "❌"}
              </li>
            ))
          ) : (
            <li>No tasks yet.</li>
          )}
        </ul>
      )}

      <form>
        <input type="text" name="Enter Job Link" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LearnSkill;
