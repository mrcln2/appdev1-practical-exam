import TaskItem from './TaskItem';
import TaskDivider from './TaskDivider';

function TaskSection() {
  return (
    <main>
      <h2>My Tasks</h2>

      <TaskItem
        task="Finish Practical Exam"
        description="Complete the required tasks for the practical exam."
      />

      <TaskDivider />

      <TaskItem
        task="Review React Components"
        description="Study component nesting, props, and reusable components."
      />

      <TaskDivider />

      <TaskItem
        task="Organize Project Files"
        description="Make sure all project files are properly organized."
      />
    </main>
  );
}

export default TaskSection;